// Concept mode config + pure projections over a Lecture. Content-free (safe to
// import into client components — it never pulls in the content bundle). The
// OnePager's "block integrations" lines are prepared server-side and passed in.

import type { Lecture } from '../types';
import type { ConceptDepth, ConceptModeContent, OnePagerSections } from './types';

export const CONCEPT_MODES: ConceptModeContent[] = [
  { mode: 'quick_review', label: 'Quick Review', blurb: 'Compressed high-yield only.', dot: 'bg-amber-500', text: 'text-amber-600 dark:text-amber-400' },
  { mode: 'standard', label: 'Standard', blurb: 'The full module.', dot: 'bg-slate-500', text: 'text-slate-600 dark:text-slate-300' },
  { mode: 'mechanism', label: 'Mechanism', blurb: 'Cause → effect pathway.', dot: 'bg-teal-500', text: 'text-teal-600 dark:text-teal-400' },
  { mode: 'clinical', label: 'Clinical', blurb: 'Signs, Ix & management.', dot: 'bg-sky-500', text: 'text-sky-600 dark:text-sky-400' },
  { mode: 'trap', label: 'Traps', blurb: 'Distractors & exam frames.', dot: 'bg-rose-500', text: 'text-rose-600 dark:text-rose-400' },
  { mode: 'teaching', label: 'Teaching', blurb: 'Explain it to a junior.', dot: 'bg-violet-500', text: 'text-violet-600 dark:text-violet-400' },
  { mode: 'onepager', label: 'OnePager', blurb: '7-section extraction.', dot: 'bg-indigo-500', text: 'text-indigo-600 dark:text-indigo-400' },
];

export const CONCEPT_MODE_BY: Record<ConceptDepth, ConceptModeContent> = Object.fromEntries(
  CONCEPT_MODES.map((m) => [m.mode, m]),
) as Record<ConceptDepth, ConceptModeContent>;

const CONCEPT_DEPTHS = new Set(CONCEPT_MODES.map((m) => m.mode));
export function isConceptDepth(v: unknown): v is ConceptDepth {
  return typeof v === 'string' && CONCEPT_DEPTHS.has(v as ConceptDepth);
}

// --- text helpers ------------------------------------------------------------

/** Strip **bold** / *italic* markers and turn [[module-id]] into readable text.
 *  The *italic* rule is markdown-flanked (matches components/Rich.tsx) so
 *  intra-token stars like "HLA-B*57:01" or "T2*" are preserved. */
export function stripMarkup(s: string): string {
  return s
    .replace(/\*\*/g, '')
    .replace(/(?<![A-Za-z0-9])\*(?!\s)([^*]+?)(?<!\s)\*(?![A-Za-z0-9])/g, '$1')
    .replace(/\[\[([a-z0-9-]+)\]\]/g, (_, id: string) => id.replace(/-/g, ' '));
}

/** First sentence (or a trimmed lead) of a high-yield bullet. */
export function leadSentence(s: string): string {
  const t = stripMarkup(s).trim();
  const dot = t.indexOf('. ');
  return dot > 40 ? t.slice(0, dot + 1) : t.length > 180 ? `${t.slice(0, 178)}…` : t;
}

// --- projections -------------------------------------------------------------

/** Quick review = the lead sentence of each high-yield bullet. */
export function buildQuickReview(l: Lecture): string[] {
  return l.highYield.map(leadSentence);
}

/** Teaching = a plain-language walk: framing → mechanism steps → take-home. */
export function buildTeaching(l: Lecture): string[] {
  const out: string[] = [];
  if (l.highYield[0]) out.push(leadSentence(l.highYield[0]));
  l.mechanism.steps.forEach((s, i) => out.push(`${i + 1}. ${stripMarkup(s.label)}`));
  const takeHome = l.highYield[l.highYield.length - 1];
  if (takeHome && l.highYield.length > 1) out.push(`Take-home: ${stripMarkup(takeHome)}`);
  return out;
}

/**
 * Build the 7-section OnePager. `blockIntegrationLines` is prepared server-side
 * from the Active-Integration bundle (so this file stays content-free).
 */
export function buildOnePager(l: Lecture, blockIntegrationLines: string[]): OnePagerSections {
  return {
    coreMechanism: [stripMarkup(l.mechanism.title), ...l.mechanism.steps.map((s) => stripMarkup(s.label))],
    mustKnowFacts: l.highYield.map(leadSentence),
    clinicalSigns: l.examFindings.map((f) => `${f.sign} — ${f.mechanism}`),
    diagnosisManagement: [
      ...l.investigations.map((iv) => `${iv.clue} → ${iv.meaning}`),
      ...l.treatment.map((t) => stripMarkup(t.logic)),
    ],
    examTraps: l.traps.map((t) => `${t.questionCategory}: ${stripMarkup(t.rightAnswer)}`),
    blockIntegrations: blockIntegrationLines,
    memoryHooks: l.mnemonics.map((m) => `${m.hook} — ${m.expansion.join(' · ')}`),
  };
}

// --- persistence (localStorage) ---------------------------------------------

export const CONCEPT_PREF_KEY = 'wh-concept-depth';

export function readConceptPreference(): ConceptDepth {
  if (typeof window === 'undefined') return 'standard';
  const v = window.localStorage.getItem(CONCEPT_PREF_KEY);
  return isConceptDepth(v) ? v : 'standard';
}

export function writeConceptPreference(mode: ConceptDepth): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(CONCEPT_PREF_KEY, mode);
  } catch {
    /* storage may be unavailable (private mode) — non-fatal */
  }
}
