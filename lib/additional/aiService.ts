// Optional OpenAI-backed generator for Additional (supplementary) topics.
// OFFLINE USE ONLY — called only by scripts/generate-additional-topics.ts, never
// at request time (the app stays static / zero-backend). Produces plain modules
// (NO ** highlighter markup) in the full Lecture shape. Any error → returns [].

import type { Lecture, MechanismStep, SystemId, Tag, TagKind } from '../types';

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));
const REQUEST_TIMEOUT_MS = Math.max(20_000, Number(process.env.OPENAI_TIMEOUT_MS) || 90_000);

const OPTION_IDS = ['a', 'b', 'c', 'd', 'e'];
const TAG_KINDS = new Set<TagKind>(['disease', 'mechanism', 'exam', 'investigation', 'treatment']);
// QuizQuestion.tests must be a TagKind — 'recall'/'clinical' are NOT valid here.
const TESTS = new Set<TagKind>(['mechanism', 'exam', 'investigation', 'treatment', 'disease']);

export interface SubjectSpec {
  code: string; // 'HCVS-2'
  name: string; // 'Human Cardiovascular System-2'
  system: SystemId; // modal system of the subject's modules
  existingTitles: string[]; // core titles to AVOID duplicating
  count: number; // how many topics to request (16–20)
}

const strip = (s: string): string => s.replace(/\*\*/g, '').trim();
function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 56);
}

const JSON_SHAPE = `{
  "modules": [
    {
      "title": "a SPECIFIC exam-relevant topic NOT in the provided existing list",
      "highYield": ["3-5 plain-text bullets — NO markdown, NO ** ", "..."],
      "mechanism": { "title": "short summary phrase", "steps": ["4-6 short step labels forming a chain"] },
      "examFindings": [{ "sign": "...", "mechanism": "why it happens", "key": true }],
      "investigations": [{ "clue": "...", "meaning": "what it tells you" }],
      "treatment": [{ "logic": "...", "detail": "why / when" }],
      "mnemonics": [{ "hook": "...", "expansion": ["...", "..."] }],
      "traps": [{ "category": "the lens tested", "wrong": "seductive wrong answer", "right": "the correct answer", "why": "one-line discriminator" }],
      "quiz": [{ "stem": "one-best-answer question", "options": ["A", "B", "C", "D"], "answerIndex": 0, "explanation": "1-2 sentences", "tests": "recall|mechanism|exam|investigation|treatment|disease" }],
      "tags": [{ "kind": "disease|mechanism|exam|investigation|treatment", "label": "short label" }]
    }
  ]
}`;

export function buildPrompt(spec: SubjectSpec): { system: string; user: string } {
  const system =
    'You are a medical-education content author for a Thai (MedCMU) preclinical exam-prep app. ' +
    `Write ${spec.count} additional, exam-relevant study modules for the subject "${spec.name}" (${spec.code}). ` +
    'Each must be a DISTINCT standard topic that is NOT already in the provided existing-titles list. ' +
    'Keep content accurate, concise and at preclinical exam level. ' +
    'IMPORTANT: use PLAIN TEXT only — never use markdown, asterisks, or ** highlighting anywhere. ' +
    'Every module needs a mechanism chain (4-6 steps), 2-3 exam findings, 2-3 investigations, 2-3 treatment points, ' +
    '1-2 mnemonics, 1-2 traps and 2-3 single-best-answer MCQs (exactly 4 options each, one correct). ' +
    `Respond with STRICT JSON ONLY matching this shape (no prose, no markdown):\n${JSON_SHAPE}`;

  const user = JSON.stringify({
    subject: { code: spec.code, name: spec.name },
    want: `${spec.count} additional topic modules`,
    existingTitles: spec.existingTitles,
  });

  return { system, user };
}

/** Validate + coerce the model's JSON into full Lecture objects. Skips anything malformed. */
export function parseModules(raw: string, spec: SubjectSpec): Lecture[] {
  let json: { modules?: unknown };
  try {
    json = JSON.parse(raw);
  } catch {
    return [];
  }
  const list = Array.isArray(json?.modules) ? json.modules : [];
  const existing = new Set(spec.existingTitles.map((t) => t.toLowerCase()));
  const seenIds = new Set<string>();
  const out: Lecture[] = [];

  for (const raw_m of list) {
    const m = raw_m as Record<string, unknown>;
    const title = typeof m.title === 'string' ? strip(m.title) : '';
    if (!title || existing.has(title.toLowerCase())) continue;

    const id = `add-${slugify(title)}`;
    if (!id || id === 'add-' || seenIds.has(id)) continue;

    const highYield = Array.isArray(m.highYield)
      ? m.highYield.filter((h): h is string => typeof h === 'string').map(strip).filter(Boolean)
      : [];
    if (highYield.length < 3) continue;

    const mech = (m.mechanism ?? {}) as Record<string, unknown>;
    const stepLabels = Array.isArray(mech.steps)
      ? mech.steps.filter((s): s is string => typeof s === 'string').map(strip).filter(Boolean)
      : [];
    if (stepLabels.length < 2) continue;
    const steps: MechanismStep[] = stepLabels.slice(0, 6).map((label, i) => ({ id: `s${i + 1}`, label }));

    const examFindings = (Array.isArray(m.examFindings) ? m.examFindings : [])
      .map((e) => e as Record<string, unknown>)
      .filter((e) => typeof e.sign === 'string' && typeof e.mechanism === 'string')
      .slice(0, 4)
      .map((e) => ({
        sign: strip(e.sign as string),
        mechanism: strip(e.mechanism as string),
        significance: e.key === true ? ('key' as const) : ('supportive' as const),
      }));

    const investigations = (Array.isArray(m.investigations) ? m.investigations : [])
      .map((e) => e as Record<string, unknown>)
      .filter((e) => typeof e.clue === 'string' && typeof e.meaning === 'string')
      .slice(0, 4)
      .map((e) => ({ clue: strip(e.clue as string), meaning: strip(e.meaning as string) }));

    const treatment = (Array.isArray(m.treatment) ? m.treatment : [])
      .map((e) => e as Record<string, unknown>)
      .filter((e) => typeof e.logic === 'string')
      .slice(0, 4)
      .map((e) => ({ logic: strip(e.logic as string), detail: typeof e.detail === 'string' ? strip(e.detail as string) : undefined }));

    const mnemonics = (Array.isArray(m.mnemonics) ? m.mnemonics : [])
      .map((e) => e as Record<string, unknown>)
      .filter((e) => typeof e.hook === 'string')
      .slice(0, 3)
      .map((e) => ({
        hook: strip(e.hook as string),
        expansion: Array.isArray(e.expansion) ? e.expansion.filter((x): x is string => typeof x === 'string').map(strip) : [],
      }));

    const traps = (Array.isArray(m.traps) ? m.traps : [])
      .map((e) => e as Record<string, unknown>)
      .filter((e) => typeof e.category === 'string' && typeof e.right === 'string')
      .slice(0, 4)
      .map((e) => ({
        questionCategory: strip(e.category as string),
        wrongInstinct: typeof e.wrong === 'string' ? strip(e.wrong as string) : '',
        rightAnswer: strip(e.right as string),
        why: typeof e.why === 'string' ? strip(e.why as string) : '',
      }));

    const quiz = (Array.isArray(m.quiz) ? m.quiz : [])
      .map((e) => e as Record<string, unknown>)
      .map((q, qi) => {
        const options = Array.isArray(q.options) ? q.options.filter((o): o is string => typeof o === 'string') : [];
        const answerIndex = typeof q.answerIndex === 'number' ? q.answerIndex : -1;
        if (typeof q.stem !== 'string' || options.length < 3 || options.length > 5) return null;
        if (answerIndex < 0 || answerIndex >= options.length) return null;
        const tests = typeof q.tests === 'string' && TESTS.has(q.tests as TagKind) ? (q.tests as TagKind) : undefined;
        return {
          id: `q${qi + 1}`,
          stem: strip(q.stem as string),
          options: options.map((text, j) => ({ id: OPTION_IDS[j], text: strip(text) })),
          answerId: OPTION_IDS[answerIndex],
          explanation: typeof q.explanation === 'string' ? strip(q.explanation as string) : '',
          tests,
        };
      })
      .filter((q): q is NonNullable<typeof q> => q !== null)
      .slice(0, 5);
    if (quiz.length < 1) continue;

    const aiTags: Tag[] = (Array.isArray(m.tags) ? m.tags : [])
      .map((t) => t as Record<string, unknown>)
      .filter((t) => typeof t.kind === 'string' && TAG_KINDS.has(t.kind as TagKind) && typeof t.label === 'string')
      .slice(0, 4)
      .map((t) => ({ kind: t.kind as TagKind, label: strip(t.label as string) }));

    const tags: Tag[] = [
      { kind: 'system', label: spec.name.replace(/-\d+$/, '').trim() },
      { kind: 'lecture', label: 'Additional Topic' },
      ...aiTags,
    ];

    seenIds.add(id);
    out.push({
      id,
      title,
      system: spec.system,
      source: `Additional Topics — ${spec.code}`,
      updated: new Date().toISOString().slice(0, 10),
      tags,
      highYield: highYield.slice(0, 6),
      mechanism: { title: typeof mech.title === 'string' ? strip(mech.title as string) : title, steps },
      examFindings,
      investigations,
      treatment,
      mnemonics,
      traps,
      quiz,
    });
  }

  return out;
}

/** OpenAI call with retry/backoff; returns [] on any terminal failure. */
export async function generateAdditionalTopics(
  spec: SubjectSpec,
  apiKey: string,
  model = process.env.OPENAI_MODEL ?? 'gpt-4o-mini',
): Promise<Lecture[]> {
  if (!apiKey) return [];
  const { system, user } = buildPrompt(spec);
  const body = JSON.stringify({
    model,
    temperature: 0.4,
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
      return content ? parseModules(content, spec) : [];
    } catch {
      clearTimeout(timeout);
      if (attempt === 5) return [];
      await sleep(2 ** attempt * 500);
    }
  }
  return [];
}
