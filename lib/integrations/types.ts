// Active Integration — the module-linking knowledge graph.
//
// Design rule (matches lib/types.ts): integration data is CONTENT — derived from
// the typed lecture graph at build time, or hand-curated as typed objects. There
// is NO runtime database and NO request-time AI call: the app stays static,
// offline-first and zero-backend. An optional offline script (scripts/
// generate-integrations) may use an AI generator to author curated overrides.

import type { SystemId } from '../types';

// ---------------------------------------------------------------------------
// Core vocabulary
// ---------------------------------------------------------------------------

/** The six ways one module connects to another. */
export type IntegrationType =
  | 'prerequisite' // review BEFORE this module (earlier in the learning sequence)
  | 'forward' // where this concept reappears LATER (same domain, later lecture/year)
  | 'horizontal' // related module in the SAME year/block (peer concept)
  | 'vertical' // clinical application: basic-science ↔ clinical-system link
  | 'trap' // an exam trap tied to this concept
  | 'repair'; // what to review if related WilliamsPod questions are missed

/** How confident / important a connection is. */
export type IntegrationStrength = 'weak' | 'moderate' | 'strong' | 'critical';

/** Where a connection came from — for trust, debugging and merge precedence. */
export type IntegrationOrigin =
  | 'wikilink' // curated [[id]] cross-link in the source prose (highest trust)
  | 'curriculum' // inferred from year/subject/lecture ordering
  | 'tag' // shared mechanism/disease/exam tag
  | 'trap' // derived from a TrapCard
  | 'ai' // suggested by the AI generator (offline)
  | 'manual'; // hand-authored override

// ---------------------------------------------------------------------------
// Graph nodes & edges
// ---------------------------------------------------------------------------

/** A module as a node in the knowledge graph (derived from a Lecture). */
export interface ModuleNode {
  id: string;
  title: string;
  system: SystemId;
  source: string; // 'L5 — Vascular Disorders'
  subjectCode: string | null; // 'HCVS-2'
  subjectName: string | null; // 'Human Cardiovascular System-2'
  year: number | null; // 1 | 2 | 3
  lectureNo: number | null; // parsed from source ('L5' → 5)
  /** True for basic-science blocks (pathology, pharmacology, micro, physiology…). */
  foundational: boolean;
}

/** A directed edge: "this module connects to `targetId`". */
export interface ModuleIntegration {
  targetId: string;
  type: IntegrationType;
  strength: IntegrationStrength;
  reason: string; // one-line, human-readable rationale
  origin: IntegrationOrigin;
}

/** An exam trap surfaced on the module, optionally linked to a sibling module. */
export interface TrapLink {
  questionCategory: string; // the lens the question really tests
  wrongInstinct: string; // the seductive wrong answer
  rightAnswer: string; // what was actually being asked
  discriminator: string; // the one-line "why" that separates them
  relatedModuleId?: string; // a module that shares/explains this trap
}

/** "If you miss questions about X, review module Y." */
export interface RepairRecommendation {
  targetId: string;
  targetTitle: string;
  trigger: string; // "if you miss questions on the mechanism → sign link"
  reason: string; // what reviewing the target repairs
  strength: IntegrationStrength;
}

/** The fully-resolved set of connections shown for one module. */
export interface ModuleIntegrationBundle {
  moduleId: string;
  prerequisite: ModuleIntegration[];
  forward: ModuleIntegration[];
  horizontal: ModuleIntegration[];
  vertical: ModuleIntegration[];
  traps: TrapLink[];
  repair: RepairRecommendation[];
  generatedBy: 'local' | 'openai' | 'merged';
}

/**
 * A curated override authored by a human or the offline AI script and baked into
 * `content/integrations.ts`. Any field provided REPLACES the deterministic
 * candidates for that category (see resolve.ts merge rules).
 */
export interface CuratedIntegrationOverride {
  moduleId: string;
  prerequisite?: ModuleIntegration[];
  forward?: ModuleIntegration[];
  horizontal?: ModuleIntegration[];
  vertical?: ModuleIntegration[];
  traps?: TrapLink[];
  repair?: RepairRecommendation[];
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Numeric weight for sorting/merging by strength (critical highest). */
export const STRENGTH_WEIGHT: Record<IntegrationStrength, number> = {
  critical: 3,
  strong: 2,
  moderate: 1,
  weak: 0,
};

/** Human labels + ordering for the six categories, used by the panel. */
export const INTEGRATION_TYPE_ORDER: IntegrationType[] = [
  'prerequisite',
  'forward',
  'horizontal',
  'vertical',
  'trap',
  'repair',
];
