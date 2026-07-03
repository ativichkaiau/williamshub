// Concept Depth Modes — view a module at different depths.
//
// Design rule (matches lib/types.ts): modes are PROJECTIONS over the existing
// typed Lecture, not new authored content and not a DB. The selected mode is a
// PERSONAL preference stored in localStorage. Fully additive & offline-first.

export type ConceptDepth =
  | 'quick_review' // compressed high-yield only
  | 'standard' // the full existing module
  | 'mechanism' // cause → effect pathway
  | 'clinical' // signs, investigations, management
  | 'trap' // distractors, confusing frames, common mistakes
  | 'teaching' // explain-to-a-junior version
  | 'onepager'; // compressed 7-section extraction

/** Static descriptor for one mode (label + accent), used by the selector. */
export interface ConceptModeContent {
  mode: ConceptDepth;
  label: string;
  blurb: string; // one line: what this mode shows
  dot: string; // tailwind accent dot bg
  text: string; // tailwind accent text
}

/** The compressed 7-section OnePager extraction format. */
export interface OnePagerSections {
  coreMechanism: string[]; // 1
  mustKnowFacts: string[]; // 2
  clinicalSigns: string[]; // 3
  diagnosisManagement: string[]; // 4
  examTraps: string[]; // 5
  blockIntegrations: string[]; // 6 — sourced from Active Integration
  memoryHooks: string[]; // 7
}

/** A resolved view instance for (lecture, mode). Only the relevant payload is set. */
export interface ConceptView {
  mode: ConceptDepth;
  lectureId: string;
  title: string;
  blurb: string;
  quickReview?: string[];
  teaching?: string[];
  onePager?: OnePagerSections;
}

/** Persisted user preference (localStorage). moduleId set = per-module override. */
export interface UserConceptPreference {
  mode: ConceptDepth;
  moduleId?: string;
  updatedAt: string; // ISO
}
