// Deterministic candidate generator — turns the graph signals (curated
// wikilinks, curriculum ordering, shared tags, traps) into a ModuleIntegration
// bundle. Pure and build-time; runs with zero config and no network. This is the
// always-on baseline that the optional AI layer and manual overrides refine.

import { lectureById, lecturesBySource } from '../../content';
import type { Lecture } from '../types';
import type {
  IntegrationStrength,
  IntegrationType,
  ModuleIntegration,
  ModuleIntegrationBundle,
  ModuleNode,
  RepairRecommendation,
  TrapLink,
} from './types';
import { STRENGTH_WEIGHT } from './types';
import { crossSubjectCandidates, getNode, sharedTagModules, wikilinkIn, wikilinkOut } from './graph';

// Per-category caps so the panel stays compact.
export const CAPS: Record<IntegrationType, number> = {
  prerequisite: 5,
  forward: 5,
  horizontal: 6,
  vertical: 5,
  trap: 4,
  repair: 4,
};

/** Classify a directed relationship (from A → B) into a category + strength. */
function classify(a: ModuleNode, b: ModuleNode): { type: IntegrationType; strength: IntegrationStrength } {
  // Same block: order by lecture number within the subject.
  if (a.subjectCode && a.subjectCode === b.subjectCode) {
    if (a.lectureNo != null && b.lectureNo != null) {
      if (b.lectureNo < a.lectureNo) return { type: 'prerequisite', strength: 'strong' };
      if (b.lectureNo > a.lectureNo) return { type: 'forward', strength: 'strong' };
    }
    return { type: 'horizontal', strength: 'strong' };
  }
  // Cross-tier: basic-science ↔ clinical-system = a vertical (clinical) link.
  if (a.foundational !== b.foundational) {
    return a.foundational
      ? { type: 'vertical', strength: 'strong' } // basic → clinical application
      : { type: 'prerequisite', strength: 'strong' }; // clinical → review the basis
  }
  // Same tier, different subject: order by year.
  if (a.year != null && b.year != null) {
    if (b.year < a.year) return { type: 'prerequisite', strength: 'moderate' };
    if (b.year > a.year) return { type: 'forward', strength: 'moderate' };
  }
  return { type: 'horizontal', strength: 'moderate' };
}

function reasonFor(type: IntegrationType, b: ModuleNode): string {
  const where = b.subjectCode ? `${b.subjectCode}` : 'related block';
  switch (type) {
    case 'prerequisite':
      return `Foundation for this concept (${where}).`;
    case 'forward':
      return `This concept is applied again in ${where}.`;
    case 'horizontal':
      return `Related peer concept in ${where}.`;
    case 'vertical':
      return `Clinical application of this concept (${where}).`;
    default:
      return `Connected via ${where}.`;
  }
}

const cap = (s: string): string => s.charAt(0).toUpperCase() + s.slice(1);

/** A curated link is reciprocal when both modules cite each other — the single
 *  strongest evidence a connection is real. */
function isReciprocal(a: string, b: string): boolean {
  return (wikilinkOut[a]?.includes(b) ?? false) && (wikilinkOut[b]?.includes(a) ?? false);
}

/** Strength from shared-tag overlap: more shared discriminating tags = more confident. */
function tagStrength(shared: number): IntegrationStrength {
  return shared >= 3 ? 'strong' : shared === 2 ? 'moderate' : 'weak';
}

/** Strength from a cross-subject term: a rare anchor (organism / drug / disease) earns moderate. */
function termStrength(anchorWeight: number): IntegrationStrength {
  return anchorWeight >= 3 ? 'moderate' : 'weak';
}

/**
 * The deterministic evidence connecting two modules, strongest signal first:
 * reciprocal wikilink → one-way wikilink → same lecture → shared discriminating
 * tags → shared cross-subject anchor term. Returns the named bridge (`via`), a
 * short trust label (`evidence`) and the evidence-grounded strength. Used both to
 * build the baseline and to enrich curated/AI edges so every edge — on every
 * module — shows why it earned its place.
 */
export function bridgeBetween(a: string, b: string): { via?: string; evidence?: string; strength: IntegrationStrength } {
  if (isReciprocal(a, b)) return { evidence: 'mutual link', strength: 'critical' };
  if ((wikilinkOut[a]?.includes(b) ?? false) || (wikilinkOut[b]?.includes(a) ?? false))
    return { evidence: 'cross-linked', strength: 'strong' };
  const la = lectureById[a];
  const lb = lectureById[b];
  if (la && lb && la.source === lb.source) return { evidence: 'same lecture', strength: 'strong' };
  const tag = sharedTagModules(a).find((s) => s.id === b);
  if (tag) {
    return {
      via: tag.via ?? undefined,
      evidence: `${tag.shared} shared concept${tag.shared > 1 ? 's' : ''}`,
      strength: tagStrength(tag.shared),
    };
  }
  const cs = crossSubjectCandidates(a).find((s) => s.id === b);
  if (cs && cs.anchor) return { via: cap(cs.anchor), evidence: 'shared term', strength: termStrength(cs.anchorWeight) };
  return { strength: 'weak' };
}

/** Insert an edge, keeping the strongest single classification per target. */
function upsert(map: Map<string, ModuleIntegration>, edge: ModuleIntegration) {
  if (edge.targetId === '' || !lectureById[edge.targetId]) return;
  const existing = map.get(edge.targetId);
  if (!existing || STRENGTH_WEIGHT[edge.strength] > STRENGTH_WEIGHT[existing.strength]) {
    map.set(edge.targetId, edge);
  }
}

function buildTraps(l: Lecture): TrapLink[] {
  // A related module = the highest shared-tag neighbour that itself has traps.
  const related = sharedTagModules(l.id).find((s) => (lectureById[s.id]?.traps.length ?? 0) > 0)?.id;
  return l.traps.slice(0, CAPS.trap).map((t) => ({
    questionCategory: t.questionCategory,
    wrongInstinct: t.wrongInstinct,
    rightAnswer: t.rightAnswer,
    discriminator: t.why,
    relatedModuleId: related && related !== l.id ? related : undefined,
  }));
}

function buildRepair(
  l: Lecture,
  prerequisites: ModuleIntegration[],
  traps: TrapLink[],
): RepairRecommendation[] {
  const out: RepairRecommendation[] = [];
  const seen = new Set<string>();
  const add = (r: RepairRecommendation) => {
    const key = `${r.targetId}|${r.trigger}`;
    if (seen.has(key)) return;
    seen.add(key);
    out.push(r);
  };

  // 1) Missing a related question usually means a shaky foundation → prerequisites.
  for (const p of prerequisites.slice(0, 2)) {
    const t = lectureById[p.targetId];
    if (!t) continue;
    add({
      targetId: p.targetId,
      targetTitle: t.title,
      trigger: 'if you miss questions on the underlying mechanism',
      reason: `Re-establish the foundation: ${t.title}.`,
      strength: p.strength,
    });
  }

  // 2) Each trap maps to a targeted re-read (the discriminator that was missed).
  for (const trap of traps.slice(0, 2)) {
    const targetId = trap.relatedModuleId ?? l.id;
    const target = lectureById[targetId];
    add({
      targetId,
      targetTitle: target?.title ?? l.title,
      trigger: `if you fall for the "${trap.questionCategory}" trap`,
      reason: trap.discriminator,
      strength: 'strong',
    });
  }

  // 3) Fallback: always offer a mechanism re-trace of this module.
  if (out.length === 0) {
    add({
      targetId: l.id,
      targetTitle: l.title,
      trigger: 'if related recall questions are missed',
      reason: `Re-trace this module's mechanism chain and exam traps.`,
      strength: 'moderate',
    });
  }
  return out.slice(0, CAPS.repair);
}

/** Generate the deterministic integration bundle for one module. */
export function generateCandidateBundle(moduleId: string): ModuleIntegrationBundle {
  const l = lectureById[moduleId];
  const node = getNode(moduleId);
  const empty: ModuleIntegrationBundle = {
    moduleId,
    prerequisite: [],
    forward: [],
    horizontal: [],
    vertical: [],
    traps: [],
    repair: [],
    generatedBy: 'local',
  };
  if (!l || !node) return empty;

  const byTarget = new Map<string, ModuleIntegration>();

  // 1) Curated outgoing wikilinks — highest-trust, directional edges. A reciprocal
  //    link (both modules cite each other) is the strongest signal there is → critical.
  for (const targetId of wikilinkOut[moduleId] ?? []) {
    const b = getNode(targetId);
    if (!b) continue;
    const { type } = classify(node, b);
    const mutual = isReciprocal(moduleId, targetId);
    upsert(byTarget, {
      targetId,
      type,
      strength: mutual ? 'critical' : 'strong',
      reason: reasonFor(type, b),
      origin: 'wikilink',
      evidence: mutual ? 'mutual link' : 'cross-linked',
    });
  }

  // 2) Curated incoming wikilinks — where this concept is reused later.
  for (const sourceId of wikilinkIn[moduleId] ?? []) {
    const b = getNode(sourceId);
    if (!b) continue;
    let { type } = classify(node, b);
    // A module that cites this one is a downstream consumer, not a prerequisite.
    if (type === 'prerequisite') type = 'horizontal';
    const mutual = isReciprocal(moduleId, sourceId);
    upsert(byTarget, {
      targetId: sourceId,
      type,
      strength: mutual ? 'critical' : 'strong',
      reason: reasonFor(type, b),
      origin: 'wikilink',
      evidence: mutual ? 'mutual link' : 'cited by that module',
    });
  }

  // 3) Same-lecture siblings — the tightest "same-block" peers.
  for (const sib of lecturesBySource[l.source] ?? []) {
    if (sib.id === moduleId) continue;
    upsert(byTarget, {
      targetId: sib.id,
      type: 'horizontal',
      strength: 'strong',
      reason: `Same lecture (${l.source}).`,
      origin: 'curriculum',
      evidence: 'same lecture',
    });
  }

  // 4) Shared-tag neighbours — associative links. Strength scales with how many
  //    discriminating tags overlap; `via` names the rarest (most specific) one.
  for (const { id: oid, shared, via } of sharedTagModules(moduleId).slice(0, 10)) {
    if (byTarget.has(oid)) continue;
    const b = getNode(oid);
    if (!b) continue;
    const { type } = classify(node, b);
    upsert(byTarget, {
      targetId: oid,
      type,
      strength: tagStrength(shared),
      reason: reasonFor(type, b),
      origin: 'tag',
      via: via ?? undefined,
      evidence: `${shared} shared concept${shared > 1 ? 's' : ''}`,
    });
  }

  // 5) Cross-subject candidates — connect the concept across blocks via a shared
  //    anchor term (organism / drug / disease name), which becomes the named bridge.
  for (const { id: oid, anchor, anchorWeight } of crossSubjectCandidates(moduleId).slice(0, 8)) {
    if (byTarget.has(oid)) continue;
    const b = getNode(oid);
    if (!b) continue;
    const { type } = classify(node, b);
    const via = anchor ? cap(anchor) : undefined;
    upsert(byTarget, {
      targetId: oid,
      type,
      strength: termStrength(anchorWeight),
      reason: reasonFor(type, b),
      origin: 'tag',
      via,
      evidence: 'shared term',
    });
  }

  // Bucket by category, sort by strength then title, and cap — with a precision
  // gate: once a category has any moderate-or-stronger link, drop the weak
  // associative noise entirely. Only when a category is all-weak do we keep a few
  // "loosely related" edges, so the module isn't left blank.
  const bucket = (type: IntegrationType): ModuleIntegration[] => {
    const sorted = [...byTarget.values()]
      .filter((e) => e.type === type)
      .sort(
        (a, b) =>
          STRENGTH_WEIGHT[b.strength] - STRENGTH_WEIGHT[a.strength] ||
          (lectureById[a.targetId]?.title ?? '').localeCompare(lectureById[b.targetId]?.title ?? ''),
      );
    const meaningful = sorted.filter((e) => STRENGTH_WEIGHT[e.strength] >= STRENGTH_WEIGHT.moderate);
    return (meaningful.length > 0 ? meaningful : sorted.slice(0, 3)).slice(0, CAPS[type]);
  };

  const prerequisite = bucket('prerequisite');
  const traps = buildTraps(l);

  return {
    moduleId,
    prerequisite,
    forward: bucket('forward'),
    horizontal: bucket('horizontal'),
    vertical: bucket('vertical'),
    traps,
    repair: buildRepair(l, prerequisite, traps),
    generatedBy: 'local',
  };
}
