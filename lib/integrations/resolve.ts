// The single entry point the UI calls: getIntegrations(moduleId).
// Merges curated overrides (content/integrations.ts) over the deterministic
// baseline (candidates.ts), validates ids, dedupes and caps. Pure + build-time.

import { lectureById } from '../../content';
import { curatedIntegrations } from '../../content/integrations';
import type {
  IntegrationType,
  ModuleIntegration,
  ModuleIntegrationBundle,
  RepairRecommendation,
  TrapLink,
} from './types';
import { STRENGTH_WEIGHT } from './types';
import { CAPS, generateCandidateBundle, bridgeBetween } from './candidates';

const EDGE_CATEGORIES: IntegrationType[] = ['prerequisite', 'forward', 'horizontal', 'vertical'];

// Fold the deterministic graph evidence into an edge: attach the named bridge
// (`via`) and trust label (`evidence`) if absent, and lift strength when the
// graph is more confident than the author was (e.g. a reciprocal wikilink the AI
// only marked "moderate" becomes "critical"). Never downgrades a curated claim.
function enrich(edge: ModuleIntegration, moduleId: string): ModuleIntegration {
  const bridge = bridgeBetween(moduleId, edge.targetId);
  const strength =
    STRENGTH_WEIGHT[bridge.strength] > STRENGTH_WEIGHT[edge.strength] ? bridge.strength : edge.strength;
  return {
    ...edge,
    strength,
    via: edge.via ?? bridge.via,
    evidence: edge.evidence ?? bridge.evidence,
  };
}

// Precision gate + cap: once a category has any moderate-or-stronger link, drop
// the weak associative noise; only an all-weak category keeps a few "loosely
// related" edges so the module isn't blank. Mirrors candidates.ts's baseline gate.
function gateAndCap(edges: ModuleIntegration[], type: IntegrationType): ModuleIntegration[] {
  const sorted = edges
    .filter((e) => !!lectureById[e.targetId])
    .sort(
      (a, b) =>
        STRENGTH_WEIGHT[b.strength] - STRENGTH_WEIGHT[a.strength] ||
        (lectureById[a.targetId]?.title ?? '').localeCompare(lectureById[b.targetId]?.title ?? ''),
    );
  const meaningful = sorted.filter((e) => STRENGTH_WEIGHT[e.strength] >= STRENGTH_WEIGHT.moderate);
  return (meaningful.length > 0 ? meaningful : sorted.slice(0, 3)).slice(0, CAPS[type]);
}

/**
 * Resolve the final integration bundle for a module.
 * A curated category (if present and non-empty) replaces the baseline category;
 * otherwise the deterministic baseline is used.
 */
// Per-process memo — getIntegrations is pure and hit many times per build
// (lecture pages, learning paths, practice pages, the bank export).
const _cache = new Map<string, ModuleIntegrationBundle>();

export function getIntegrations(moduleId: string): ModuleIntegrationBundle {
  const hit = _cache.get(moduleId);
  if (hit) return hit;
  const bundle = resolveIntegrations(moduleId);
  _cache.set(moduleId, bundle);
  return bundle;
}

function resolveIntegrations(moduleId: string): ModuleIntegrationBundle {
  const base = generateCandidateBundle(moduleId);
  const override = curatedIntegrations[moduleId];
  if (!override) return base;

  const pick = (
    ov: ModuleIntegration[] | undefined,
    type: IntegrationType,
    fallback: ModuleIntegration[],
  ): ModuleIntegration[] =>
    ov && ov.length > 0 ? gateAndCap(ov.map((e) => enrich(e, moduleId)), type) : fallback;

  const traps: TrapLink[] =
    override.traps && override.traps.length > 0
      ? override.traps
          .filter((t) => !t.relatedModuleId || !!lectureById[t.relatedModuleId])
          .slice(0, CAPS.trap)
      : base.traps;

  const repair: RepairRecommendation[] =
    override.repair && override.repair.length > 0
      ? override.repair.filter((r) => !!lectureById[r.targetId]).slice(0, CAPS.repair)
      : base.repair;

  return {
    moduleId,
    prerequisite: pick(override.prerequisite, 'prerequisite', base.prerequisite),
    forward: pick(override.forward, 'forward', base.forward),
    horizontal: pick(override.horizontal, 'horizontal', base.horizontal),
    vertical: pick(override.vertical, 'vertical', base.vertical),
    traps,
    repair,
    generatedBy: 'merged',
  };
}

/** True when a bundle has at least one connection to show. */
export function hasAnyIntegration(b: ModuleIntegrationBundle): boolean {
  return (
    b.prerequisite.length > 0 ||
    b.forward.length > 0 ||
    b.horizontal.length > 0 ||
    b.vertical.length > 0 ||
    b.traps.length > 0 ||
    b.repair.length > 0
  );
}

export { EDGE_CATEGORIES };
