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
import { CAPS, generateCandidateBundle } from './candidates';

const EDGE_CATEGORIES: IntegrationType[] = ['prerequisite', 'forward', 'horizontal', 'vertical'];

function sortAndCap(edges: ModuleIntegration[], type: IntegrationType): ModuleIntegration[] {
  return edges
    .filter((e) => !!lectureById[e.targetId])
    .sort(
      (a, b) =>
        STRENGTH_WEIGHT[b.strength] - STRENGTH_WEIGHT[a.strength] ||
        (lectureById[a.targetId]?.title ?? '').localeCompare(lectureById[b.targetId]?.title ?? ''),
    )
    .slice(0, CAPS[type]);
}

/**
 * Resolve the final integration bundle for a module.
 * A curated category (if present and non-empty) replaces the baseline category;
 * otherwise the deterministic baseline is used.
 */
export function getIntegrations(moduleId: string): ModuleIntegrationBundle {
  const base = generateCandidateBundle(moduleId);
  const override = curatedIntegrations[moduleId];
  if (!override) return base;

  const pick = (
    ov: ModuleIntegration[] | undefined,
    type: IntegrationType,
    fallback: ModuleIntegration[],
  ): ModuleIntegration[] => (ov && ov.length > 0 ? sortAndCap(ov, type) : fallback);

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
