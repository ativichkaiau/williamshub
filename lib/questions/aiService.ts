// Optional OpenAI-backed question generator. OFFLINE USE ONLY — called only by
// scripts/generate-questions.ts, never at request time (the app stays static).
// Given a lecture + its Active-Integration context, it authors exam-style MCQs
// (incl. cross-module "integration" questions). Any error → returns [].

import type { Lecture } from '../types';
import type { BankQuestion, QuestionKind } from './types';

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));
const KINDS: QuestionKind[] = ['recall', 'mechanism', 'trap', 'integration', 'clinical'];
const REQUEST_TIMEOUT_MS = Math.max(10_000, Number(process.env.OPENAI_TIMEOUT_MS) || 60_000);

/** A neighbour the model may reference in an integration question. */
export interface LinkedModule {
  id: string;
  title: string;
  relation: string; // "prerequisite" | "clinical application" | "same-block peer" | …
}

export interface QuestionContext {
  linked: LinkedModule[];
}

const JSON_SHAPE = `{
  "questions": [
    {
      "stem": "<one-best-answer question>",
      "options": ["<opt A>", "<opt B>", "<opt C>", "<opt D>"],
      "answerIndex": 0,
      "explanation": "<one or two sentences>",
      "kind": "recall|mechanism|trap|clinical|integration",
      "linkedModuleIds": ["<candidate id — ONLY for integration questions, else omit>"]
    }
  ]
}`;

export function buildQuestionPrompt(module: Lecture, ctx: QuestionContext): { system: string; user: string } {
  const system =
    'You are a medical-education item writer for a Thai (MedCMU) preclinical exam-prep app. ' +
    'Write rigorous, single-best-answer MCQs (4 options each) at exam difficulty. ' +
    'Cover recall, mechanism, exam-finding/clinical reasoning and the module’s traps. ' +
    'Include at least 2 INTEGRATION questions that connect this module to a provided linked module (use its exact id in linkedModuleIds). ' +
    'Options must be plausible and mutually exclusive; exactly one correct. Keep stems and options concise. ' +
    `Respond with STRICT JSON ONLY matching this shape (no prose, no markdown):\n${JSON_SHAPE}`;

  const user = JSON.stringify(
    {
      module: {
        id: module.id,
        title: module.title,
        highYield: module.highYield.map((h) => h.replace(/\*\*/g, '')),
        mechanism: module.mechanism.title,
        examFindings: module.examFindings.map((e) => ({ sign: e.sign, mechanism: e.mechanism })),
        traps: module.traps.map((t) => ({ category: t.questionCategory, wrong: t.wrongInstinct, right: t.rightAnswer, why: t.why })),
      },
      linkedModules: ctx.linked,
      want: '6 to 9 questions total, including >=2 integration questions.',
    },
    null,
    0,
  );

  return { system, user };
}

export function parseQuestions(raw: string, moduleId: string, allowedModuleIds: Set<string>): BankQuestion[] {
  let json: { questions?: unknown };
  try {
    json = JSON.parse(raw);
  } catch {
    return [];
  }
  const list = Array.isArray(json?.questions) ? json.questions : [];
  const out: BankQuestion[] = [];
  list.forEach((raw_q: unknown, i: number) => {
    const q = raw_q as Record<string, unknown>;
    const options = Array.isArray(q.options) ? q.options.filter((o): o is string => typeof o === 'string') : [];
    const answerIndex = typeof q.answerIndex === 'number' ? q.answerIndex : -1;
    if (typeof q.stem !== 'string' || options.length < 3 || options.length > 5) return;
    if (answerIndex < 0 || answerIndex >= options.length) return;
    const ids = ['a', 'b', 'c', 'd', 'e'];
    const kind = (KINDS as string[]).includes(q.kind as string) ? (q.kind as QuestionKind) : 'recall';
    const linked = Array.isArray(q.linkedModuleIds)
      ? (q.linkedModuleIds as unknown[]).filter((id): id is string => typeof id === 'string' && allowedModuleIds.has(id))
      : [];
    out.push({
      id: `${moduleId}~ai-${i}`,
      moduleId,
      stem: q.stem,
      options: options.map((text, j) => ({ id: ids[j], text })),
      answerId: ids[answerIndex],
      explanation: typeof q.explanation === 'string' ? q.explanation : '',
      kind,
      linkedModuleIds: linked.length ? linked : undefined,
      origin: 'ai',
    });
  });
  return out;
}

/** OpenAI call with retry/backoff; returns [] on any terminal failure. */
export async function generateAiQuestions(
  module: Lecture,
  ctx: QuestionContext,
  apiKey: string,
  model = process.env.OPENAI_MODEL ?? 'gpt-4o-mini',
): Promise<BankQuestion[]> {
  if (!apiKey) return [];
  const { system, user } = buildQuestionPrompt(module, ctx);
  const allowed = new Set(ctx.linked.map((l) => l.id));
  const body = JSON.stringify({
    model,
    temperature: 0.3,
    response_format: { type: 'json_object' },
    messages: [
      { role: 'system', content: system },
      { role: 'user', content: user },
    ],
  });

  for (let attempt = 1; attempt <= 5; attempt++) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
        body,
        signal: controller.signal,
      });
      clearTimeout(timeout);
      if (res.status === 429 || res.status >= 500) {
        if (attempt === 5) return [];
        const retryAfter = Number(res.headers.get('retry-after'));
        await sleep(Number.isFinite(retryAfter) && retryAfter > 0 ? retryAfter * 1000 : 2 ** attempt * 500);
        continue;
      }
      if (!res.ok) return [];
      const data = (await res.json()) as { choices?: { message?: { content?: string } }[] };
      const content = data.choices?.[0]?.message?.content;
      return content ? parseQuestions(content, module.id, allowed) : [];
    } catch {
      clearTimeout(timeout);
      if (attempt === 5) return [];
      await sleep(2 ** attempt * 500);
    }
  }
  return [];
}
