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

const OPTION_ENUM = /^\s*\(?([A-Ea-e])[.)]\s+/;
/**
 * Strip "A) " / "B. " enumerator prefixes the model sometimes bakes into option
 * text (which would double-label as "a) A) ..."). Only strips when EVERY option
 * carries the sequential letter for its position, so a genuine "E. coli"-style
 * option is never clobbered.
 */
export function stripOptionEnumerators(texts: string[]): string[] {
  const seq = ['a', 'b', 'c', 'd', 'e'];
  const letters = texts.map((t) => t.match(OPTION_ENUM)?.[1]?.toLowerCase() ?? null);
  if (!letters.every((l, i) => l === seq[i])) return texts;
  return texts.map((t) => t.replace(OPTION_ENUM, ''));
}

const JSON_SHAPE = `{
  "modules": [
    {
      "title": "a SPECIFIC exam-relevant topic NOT in the provided existing list",
      "highYield": ["5-7 substantive bullets — each a complete high-yield fact with specifics (values, cutoffs, drug/organism/gene names, classic associations). Plain text, NO markdown, NO **"],
      "mechanism": { "title": "one-line summary of the causal thread", "steps": ["5-7 steps forming a clear cause->effect chain, each a short specific phrase"] },
      "examFindings": [{ "sign": "the finding", "mechanism": "the specific reason it occurs", "key": true }],
      "investigations": [{ "clue": "the test/finding, with values where relevant", "meaning": "what it tells you and how it discriminates" }],
      "treatment": [{ "logic": "the step, with named drugs/classes and first-line vs alternative", "detail": "why / when / sequence" }],
      "mnemonics": [{ "hook": "memory hook", "expansion": ["what each part stands for"] }],
      "traps": [{ "category": "the lens tested", "wrong": "the seductive wrong answer", "right": "the correct answer", "why": "the sharp one-line discriminator" }],
      "quiz": [{ "stem": "a clinical-vignette single-best-answer question", "options": ["four plausible options as PLAIN text with NO letter prefixes"], "answerIndex": 0, "explanation": "2-3 sentences: why the answer is right AND why the key distractor is wrong", "tests": "mechanism|exam|investigation|treatment|disease" }],
      "tags": [{ "kind": "disease|mechanism|exam|investigation|treatment", "label": "short label" }]
    }
  ]
}`;

export function buildPrompt(spec: SubjectSpec): { system: string; user: string } {
  const system =
    'You are an expert medical-education author writing for a Thai (MedCMU) preclinical exam-prep app used by strong students. ' +
    `Write ${spec.count} additional, exam-relevant study modules for the subject "${spec.name}" (${spec.code}). ` +
    'Each must be a DISTINCT standard topic that is NOT already in the provided existing-titles list. ' +
    'DEPTH MATTERS: be substantive and specific — include real values, cutoffs, classic associations, named drugs/organisms/genes, and the discriminators that separate look-alikes. No vague one-liners, no filler. ' +
    'Content must be medically accurate at preclinical exam level. ' +
    'Use PLAIN TEXT only — never markdown, asterisks, ** highlighting, or letter/number prefixes inside option text. ' +
    'Per module: 5-7 high-yield bullets, a 5-7 step mechanism chain, 3-4 exam findings, 3-4 investigations, 3-4 treatment points, ' +
    '1-2 mnemonics, 2-3 traps, and 3-4 clinical-vignette single-best-answer MCQs (exactly 4 plain-text options each, one correct, with a 2-3 sentence explanation). ' +
    `Respond with STRICT JSON ONLY matching this shape (no prose, no markdown):\n${JSON_SHAPE}`;

  const user = JSON.stringify({
    subject: { code: spec.code, name: spec.name },
    want: `${spec.count} substantive, in-depth additional topic modules`,
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
    const steps: MechanismStep[] = stepLabels.slice(0, 7).map((label, i) => ({ id: `s${i + 1}`, label }));

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
        const rawOptions = Array.isArray(q.options) ? q.options.filter((o): o is string => typeof o === 'string') : [];
        const options = stripOptionEnumerators(rawOptions);
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
      highYield: highYield.slice(0, 7),
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
  model = process.env.OPENAI_MODEL ?? 'gpt-4o',
): Promise<Lecture[]> {
  if (!apiKey) return [];
  const { system, user } = buildPrompt(spec);
  const body = JSON.stringify({
    model,
    temperature: 0.4,
    max_tokens: 12000, // room for a batch of substantive modules without truncation
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
