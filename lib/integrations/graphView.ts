// Serializable view-models for the Active-Integration visual maps.
//
// These run at BUILD TIME in server components and resolve every display string
// (titles, subject codes) up front, so the client graph components receive plain
// data only — the large content graph never ships to the browser.

import { lectureById, lecturesBySubject, lectureSetSlug } from '../../content';
import { moduleNodes, sharedTagModules, wikilinkOut } from './graph';
import { getIntegrations } from './resolve';
import type { IntegrationStrength, IntegrationType } from './types';

// ---------------------------------------------------------------------------
// Per-module graph (shown on a lecture page)
// ---------------------------------------------------------------------------

export interface EdgeView {
  id: string;
  title: string;
  subjectCode: string | null;
  strength: IntegrationStrength;
  reason: string;
}

export interface TrapView {
  questionCategory: string;
  wrongInstinct: string;
  rightAnswer: string;
  discriminator: string;
  relatedId?: string;
  relatedTitle?: string;
  relatedSubject?: string | null;
}

export interface RepairView {
  id: string;
  title: string;
  subjectCode: string | null;
  trigger: string;
  reason: string;
  strength: IntegrationStrength;
}

export interface ModuleGraphView {
  moduleId: string;
  center: { id: string; title: string; subjectCode: string | null };
  prerequisite: EdgeView[];
  forward: EdgeView[];
  horizontal: EdgeView[];
  vertical: EdgeView[];
  traps: TrapView[];
  repair: RepairView[];
  /** Total edges across the four spatial categories (map legibility signal). */
  edgeCount: number;
  hasAny: boolean;
}

// Keep the spatial map legible — cap nodes per direction (the List view keeps all).
const MAP_CAP: Record<IntegrationType, number> = {
  prerequisite: 4,
  forward: 4,
  horizontal: 5,
  vertical: 4,
  trap: 4,
  repair: 4,
};

function toEdgeView(e: { targetId: string; strength: IntegrationStrength; reason: string }): EdgeView {
  return {
    id: e.targetId,
    title: lectureById[e.targetId]?.title ?? e.targetId.replace(/-/g, ' '),
    subjectCode: moduleNodes[e.targetId]?.subjectCode ?? null,
    strength: e.strength,
    reason: e.reason,
  };
}

export function buildModuleGraph(moduleId: string): ModuleGraphView {
  const l = lectureById[moduleId];
  const b = getIntegrations(moduleId);

  const prerequisite = b.prerequisite.slice(0, MAP_CAP.prerequisite).map(toEdgeView);
  const forward = b.forward.slice(0, MAP_CAP.forward).map(toEdgeView);
  const horizontal = b.horizontal.slice(0, MAP_CAP.horizontal).map(toEdgeView);
  const vertical = b.vertical.slice(0, MAP_CAP.vertical).map(toEdgeView);

  const traps: TrapView[] = b.traps.slice(0, MAP_CAP.trap).map((t) => ({
    questionCategory: t.questionCategory,
    wrongInstinct: t.wrongInstinct,
    rightAnswer: t.rightAnswer,
    discriminator: t.discriminator,
    relatedId: t.relatedModuleId,
    relatedTitle: t.relatedModuleId ? lectureById[t.relatedModuleId]?.title : undefined,
    relatedSubject: t.relatedModuleId ? moduleNodes[t.relatedModuleId]?.subjectCode ?? null : undefined,
  }));

  const repair: RepairView[] = b.repair.slice(0, MAP_CAP.repair).map((r) => ({
    id: r.targetId,
    title: r.targetTitle,
    subjectCode: moduleNodes[r.targetId]?.subjectCode ?? null,
    trigger: r.trigger,
    reason: r.reason,
    strength: r.strength,
  }));

  const edgeCount = prerequisite.length + forward.length + horizontal.length + vertical.length;

  return {
    moduleId,
    center: {
      id: moduleId,
      title: l?.title ?? moduleId.replace(/-/g, ' '),
      subjectCode: moduleNodes[moduleId]?.subjectCode ?? null,
    },
    prerequisite,
    forward,
    horizontal,
    vertical,
    traps,
    repair,
    edgeCount,
    hasAny: edgeCount > 0 || traps.length > 0 || repair.length > 0,
  };
}

// ---------------------------------------------------------------------------
// Whole-block map (shown on a subject page) — lecture-level nodes + edges
// ---------------------------------------------------------------------------

export interface BlockNode {
  slug: string; // lecture-set slug (navigation target)
  source: string; // 'L5 — Vascular Disorders'
  short: string; // 'L5'
  label: string; // 'Vascular Disorders'
  lectureNo: number;
  moduleCount: number;
  degree: number; // summed edge weight — hub signal (node size)
}

export interface BlockEdge {
  a: string; // source slug
  b: string; // source slug
  weight: number; // summed strength across module-level links between the two lectures
}

export interface BlockGraphView {
  subjectCode: string;
  nodes: BlockNode[];
  edges: BlockEdge[];
  hasEdges: boolean;
}

// Weight given to a consecutive-lecture "curriculum sequence" edge.
const BACKBONE_W = 2;

function lectureNoOf(source: string): number {
  const m = source.match(/^L(\d+)/i);
  return m ? parseInt(m[1], 10) : 999;
}

function shortOf(source: string): string {
  const m = source.match(/^L\d+/i);
  return m ? m[0].toUpperCase() : source.slice(0, 3);
}

function labelOf(source: string): string {
  // 'L5 — Vascular Disorders' → 'Vascular Disorders'
  const parts = source.split(/\s[—–-]\s/);
  return (parts[1] ?? source).trim();
}

export function buildBlockGraph(subjectCode: string): BlockGraphView {
  const modules = lecturesBySubject[subjectCode] ?? [];

  // Group modules by their source (lecture) and map module id → source slug.
  const bySource = new Map<string, typeof modules>();
  const slugOfModule = new Map<string, string>();
  for (const m of modules) {
    const list = bySource.get(m.source) ?? [];
    list.push(m);
    bySource.set(m.source, list);
    slugOfModule.set(m.id, lectureSetSlug(m.source));
  }

  const nodes: BlockNode[] = [...bySource.entries()]
    .map(([source, mods]) => ({
      slug: lectureSetSlug(source),
      source,
      short: shortOf(source),
      label: labelOf(source),
      lectureNo: lectureNoOf(source),
      moduleCount: mods.length,
      degree: 0,
    }))
    .sort((a, b) => a.lectureNo - b.lectureNo);

  const nodeBySlug = new Map(nodes.map((n) => [n.slug, n]));

  // Build intra-block, cross-lecture edges directly from graph signals (uncapped,
  // so genuine overlap shows). The per-module bundles are capped and favour strong
  // cross-subject links, which would leave the block map nearly edgeless.
  const edgeW = new Map<string, number>();
  const key = (a: string, b: string) => (a < b ? `${a}|${b}` : `${b}|${a}`);
  const addW = (a: string, b: string, w: number) => {
    if (a === b) return;
    const k = key(a, b);
    edgeW.set(k, (edgeW.get(k) ?? 0) + w);
  };

  // 1) Curriculum backbone — consecutive lectures form the learning sequence.
  for (let i = 0; i < nodes.length - 1; i++) addW(nodes[i].slug, nodes[i + 1].slug, BACKBONE_W);

  // 2) Thematic links — shared meaningful tags + curated wikilinks between modules
  //    of DIFFERENT lectures in this subject.
  for (const m of modules) {
    const fromSlug = slugOfModule.get(m.id);
    if (!fromSlug) continue;
    for (const { id: oid, shared } of sharedTagModules(m.id)) {
      const toSlug = slugOfModule.get(oid);
      if (!toSlug || toSlug === fromSlug) continue; // another lecture in THIS subject
      addW(fromSlug, toSlug, shared);
    }
    for (const tid of wikilinkOut[m.id] ?? []) {
      const toSlug = slugOfModule.get(tid);
      if (!toSlug || toSlug === fromSlug) continue;
      addW(fromSlug, toSlug, 2);
    }
  }

  const edges: BlockEdge[] = [...edgeW.entries()].map(([k, weight]) => {
    const [a, b] = k.split('|');
    return { a, b, weight };
  });

  // Node degree = summed weight of its edges (hub sizing).
  for (const e of edges) {
    const na = nodeBySlug.get(e.a);
    const nb = nodeBySlug.get(e.b);
    if (na) na.degree += e.weight;
    if (nb) nb.degree += e.weight;
  }

  return { subjectCode, nodes, edges, hasEdges: edges.length > 0 };
}
