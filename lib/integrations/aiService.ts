// AI service layer for Active Integration.
//
// IMPORTANT: this is never called at request time. The app is static; these
// generators run only in the OPTIONAL offline script (scripts/generate-
// integrations) that bakes curated overrides into content/integrations.ts.
//
//   • LocalIntegrationGenerator  — default, deterministic, no network (placeholder).
//   • OpenAIIntegrationGenerator — optional; strict-JSON prompt → validated bundle,
//                                  falls back to Local on any error / missing key.

import type { Lecture } from '../types';
import type {
  IntegrationStrength,
  ModuleIntegration,
  ModuleIntegrationBundle,
  ModuleNode,
  RepairRecommendation,
  TrapLink,
} from './types';
import { generateCandidateBundle } from './candidates';
import { getNode } from './graph';

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

const STRENGTHS: IntegrationStrength[] = ['weak', 'moderate', 'strong', 'critical'];
const isStrength = (v: unknown): v is IntegrationStrength =>
  typeof v === 'string' && (STRENGTHS as string[]).includes(v);

// ---------------------------------------------------------------------------
// A candidate handed to the model — id-constrained so it cannot invent modules.
// ---------------------------------------------------------------------------

export interface IntegrationCandidate {
  id: string;
  title: string;
  subjectCode: string | null;
  year: number | null;
  foundational: boolean;
  /** The deterministic guess, given as a hint the model may keep or revise. */
  suggestedType: string;
}

export interface IntegrationGenerator {
  readonly name: 'local' | 'openai';
  generate(module: Lecture, candidates: IntegrationCandidate[]): Promise<ModuleIntegrationBundle>;
}

/**
 * Build the id-constrained candidate set for a module from the deterministic
 * graph. The deterministic category becomes the model's `suggestedType` hint.
 * Used by the offline enrichment script to feed the AI generator.
 */
export function collectCandidates(moduleId: string): IntegrationCandidate[] {
  const bundle = generateCandidateBundle(moduleId);
  const ids = new Set<string>();
  const hint: Record<string, string> = {};
  const note = (id: string, type: string) => {
    if (id === moduleId) return;
    if (!ids.has(id)) hint[id] = type;
    ids.add(id);
  };
  bundle.prerequisite.forEach((e) => note(e.targetId, 'prerequisite'));
  bundle.forward.forEach((e) => note(e.targetId, 'forward'));
  bundle.horizontal.forEach((e) => note(e.targetId, 'horizontal'));
  bundle.vertical.forEach((e) => note(e.targetId, 'vertical'));
  bundle.traps.forEach((t) => t.relatedModuleId && note(t.relatedModuleId, 'trap'));
  bundle.repair.forEach((r) => note(r.targetId, 'repair'));

  return [...ids].map((id) => {
    const n = getNode(id);
    return {
      id,
      title: n?.title ?? id,
      subjectCode: n?.subjectCode ?? null,
      year: n?.year ?? null,
      foundational: n?.foundational ?? false,
      suggestedType: hint[id] ?? 'horizontal',
    };
  });
}

// ---------------------------------------------------------------------------
// Strict JSON contract the model MUST return.
// ---------------------------------------------------------------------------

export interface AiIntegrationResponse {
  prerequisite: { targetId: string; strength: IntegrationStrength; reason: string }[];
  forward: { targetId: string; strength: IntegrationStrength; reason: string }[];
  horizontal: { targetId: string; strength: IntegrationStrength; reason: string }[];
  vertical: { targetId: string; strength: IntegrationStrength; reason: string }[];
  traps: {
    questionCategory: string;
    wrongInstinct: string;
    rightAnswer: string;
    discriminator: string;
    relatedModuleId?: string;
  }[];
  repair: { targetId: string; trigger: string; reason: string; strength: IntegrationStrength }[];
}

/** The exact JSON shape, embedded in the prompt so the model has no ambiguity. */
export const AI_JSON_SHAPE = `{
  "prerequisite": [{ "targetId": "<candidate id>", "strength": "weak|moderate|strong|critical", "reason": "<one line>" }],
  "forward":      [{ "targetId": "<candidate id>", "strength": "...", "reason": "..." }],
  "horizontal":   [{ "targetId": "<candidate id>", "strength": "...", "reason": "..." }],
  "vertical":     [{ "targetId": "<candidate id>", "strength": "...", "reason": "..." }],
  "traps":        [{ "questionCategory": "...", "wrongInstinct": "...", "rightAnswer": "...", "discriminator": "...", "relatedModuleId": "<candidate id or omit>" }],
  "repair":       [{ "targetId": "<candidate id>", "trigger": "if you miss ...", "reason": "...", "strength": "..." }]
}`;

/**
 * Parse + validate raw model output into a bundle. Any entry that references an
 * id outside `allowedIds`, or uses a bad strength, is DROPPED (never throws on
 * bad AI output — worst case an empty bundle, and the caller falls back).
 */
export function parseIntegrationSuggestions(
  raw: string,
  moduleId: string,
  allowedIds: Set<string>,
): ModuleIntegrationBundle | null {
  let json: Partial<AiIntegrationResponse>;
  try {
    json = JSON.parse(raw);
  } catch {
    return null;
  }
  if (!json || typeof json !== 'object') return null;

  const edges = (arr: unknown, type: ModuleIntegration['type']): ModuleIntegration[] =>
    (Array.isArray(arr) ? arr : [])
      .filter(
        (e): e is { targetId: string; strength: IntegrationStrength; reason: string } =>
          !!e &&
          typeof e.targetId === 'string' &&
          allowedIds.has(e.targetId) &&
          e.targetId !== moduleId &&
          isStrength(e.strength),
      )
      .map((e) => ({ targetId: e.targetId, type, strength: e.strength, reason: String(e.reason ?? ''), origin: 'ai' as const }));

  const traps: TrapLink[] = (Array.isArray(json.traps) ? json.traps : [])
    .filter((t): t is AiIntegrationResponse['traps'][number] => !!t && typeof t.questionCategory === 'string')
    .map((t) => ({
      questionCategory: String(t.questionCategory),
      wrongInstinct: String(t.wrongInstinct ?? ''),
      rightAnswer: String(t.rightAnswer ?? ''),
      discriminator: String(t.discriminator ?? ''),
      relatedModuleId:
        typeof t.relatedModuleId === 'string' && allowedIds.has(t.relatedModuleId) ? t.relatedModuleId : undefined,
    }));

  const repair: RepairRecommendation[] = (Array.isArray(json.repair) ? json.repair : [])
    .filter(
      (r): r is AiIntegrationResponse['repair'][number] =>
        !!r && typeof r.targetId === 'string' && allowedIds.has(r.targetId) && isStrength(r.strength),
    )
    .map((r) => ({
      targetId: r.targetId,
      targetTitle: getNode(r.targetId)?.title ?? r.targetId,
      trigger: String(r.trigger ?? ''),
      reason: String(r.reason ?? ''),
      strength: r.strength,
    }));

  return {
    moduleId,
    prerequisite: edges(json.prerequisite, 'prerequisite'),
    forward: edges(json.forward, 'forward'),
    horizontal: edges(json.horizontal, 'horizontal'),
    vertical: edges(json.vertical, 'vertical'),
    traps,
    repair,
    generatedBy: 'openai',
  };
}

// ---------------------------------------------------------------------------
// Prompt
// ---------------------------------------------------------------------------

export function buildPrompt(
  module: Lecture,
  candidates: IntegrationCandidate[],
): { system: string; user: string } {
  const system =
    'You are a medical-education knowledge-graph assistant for a Thai (MedCMU) preclinical study app. ' +
    'You connect one study module to related modules across subjects, blocks, mechanisms, clinical signs, drugs, pathology and exam traps. ' +
    'You may ONLY reference modules from the provided candidate list, using their exact ids. ' +
    'Prefer precise, exam-relevant links over many weak ones. ' +
    `Respond with STRICT JSON ONLY, matching this shape exactly (no prose, no markdown):\n${AI_JSON_SHAPE}`;

  const user = JSON.stringify(
    {
      module: {
        id: module.id,
        title: module.title,
        source: module.source,
        highYield: module.highYield,
        mechanism: module.mechanism.title,
        traps: module.traps.map((t) => ({ questionCategory: t.questionCategory, why: t.why })),
      },
      candidates,
      instructions: [
        'prerequisite = review BEFORE this (earlier/foundational).',
        'forward = where this concept reappears later.',
        'horizontal = related peer in the same year/block.',
        'vertical = clinical application (basic-science ↔ clinical link).',
        'trap = exam traps tied to this concept.',
        'repair = what to review if related questions are missed.',
      ],
    },
    null,
    0,
  );

  return { system, user };
}

// ---------------------------------------------------------------------------
// Generators
// ---------------------------------------------------------------------------

/** Deterministic, no-network generator — the default "placeholder service". */
export class LocalIntegrationGenerator implements IntegrationGenerator {
  readonly name = 'local' as const;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async generate(module: Lecture, _candidates: IntegrationCandidate[] = []): Promise<ModuleIntegrationBundle> {
    return generateCandidateBundle(module.id);
  }
}

/** Optional OpenAI-backed generator (offline use only). Falls back to Local. */
export class OpenAIIntegrationGenerator implements IntegrationGenerator {
  readonly name = 'openai' as const;
  private local = new LocalIntegrationGenerator();

  constructor(
    private readonly apiKey: string,
    private readonly model = process.env.OPENAI_MODEL ?? 'gpt-4o-mini',
  ) {}

  async generate(module: Lecture, candidates: IntegrationCandidate[]): Promise<ModuleIntegrationBundle> {
    const fallback = () => this.local.generate(module, candidates);
    if (!this.apiKey || candidates.length === 0) return fallback();

    const { system, user } = buildPrompt(module, candidates);
    const allowed = new Set(candidates.map((c) => c.id));
    const body = JSON.stringify({
      model: this.model,
      temperature: 0,
      response_format: { type: 'json_object' },
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: user },
      ],
    });

    // Up to 5 attempts, backing off on rate-limit (429) / transient 5xx.
    const MAX_ATTEMPTS = 5;
    for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
      try {
        const res = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${this.apiKey}` },
          body,
        });
        if (res.status === 429 || res.status >= 500) {
          if (attempt === MAX_ATTEMPTS) break;
          const retryAfter = Number(res.headers.get('retry-after'));
          const waitMs = Number.isFinite(retryAfter) && retryAfter > 0 ? retryAfter * 1000 : 2 ** attempt * 500;
          await sleep(waitMs);
          continue;
        }
        if (!res.ok) return fallback(); // 4xx (bad key / bad request) — no retry
        const data = (await res.json()) as { choices?: { message?: { content?: string } }[] };
        const content = data.choices?.[0]?.message?.content;
        if (!content) return fallback();
        return parseIntegrationSuggestions(content, module.id, allowed) ?? (await fallback());
      } catch {
        if (attempt === MAX_ATTEMPTS) break;
        await sleep(2 ** attempt * 500);
      }
    }
    return fallback();
  }
}

/** Pick the generator: OpenAI if a key is configured, otherwise the local placeholder. */
export function resolveGenerator(): IntegrationGenerator {
  const key = typeof process !== 'undefined' ? process.env?.OPENAI_API_KEY : undefined;
  return key ? new OpenAIIntegrationGenerator(key) : new LocalIntegrationGenerator();
}
