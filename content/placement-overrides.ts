// Explicit placement overrides — the migration hook off source-string derivation.
//
// Placement (subject / lectureNo / lectureTitle) is derived from each module's
// `source` string by default (see lib/content/placement). To migrate a module to
// typed fields, add an entry here; the build verifier warns if an override
// disagrees with what the source string implies.
//
// Keyed by module id. Empty today — derivation covers everything.

export type PlacementOverride = {
  subject?: string;
  lectureNo?: number;
  lectureTitle?: string;
};

export const placementOverrides: Record<string, PlacementOverride> = {};
