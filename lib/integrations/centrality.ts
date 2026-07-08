// Keystone concepts — degree-centrality over the integration graph. A module is
// a "keystone" when many modules connect TO it (things depend on it) and it is
// itself richly linked. Build-time + pure; surfaced as "study these first".

import { lecturesBySubject, lectureById } from '../../content';
import { wikilinkIn, sharedTagModules } from './graph';
import { getIntegrations } from './resolve';

export interface Keystone {
  id: string;
  title: string;
  score: number;
  inbound: number; // modules that link TO this one
}

const _cache = new Map<string, { score: number; inbound: number }>();

function scoreOf(moduleId: string): { score: number; inbound: number } {
  const hit = _cache.get(moduleId);
  if (hit) return hit;
  const inbound = (wikilinkIn[moduleId] ?? []).length;
  const b = getIntegrations(moduleId);
  const outbound = b.prerequisite.length + b.forward.length + b.horizontal.length + b.vertical.length;
  const associative = Math.min(sharedTagModules(moduleId).length, 12);
  // In-degree dominates: keystones are what the rest of the block leans on.
  const score = inbound * 3 + outbound + associative * 0.5;
  const result = { score, inbound };
  _cache.set(moduleId, result);
  return result;
}

/** Top-n hub modules in a subject, ranked by centrality. */
export function keystonesForSubject(subjectCode: string, n = 4): Keystone[] {
  return (lecturesBySubject[subjectCode] ?? [])
    .map((l) => {
      const s = scoreOf(l.id);
      return { id: l.id, title: l.title, score: s.score, inbound: s.inbound };
    })
    .filter((k) => k.score > 0)
    .sort((a, b) => b.score - a.score || (lectureById[a.id]?.title ?? '').localeCompare(lectureById[b.id]?.title ?? ''))
    .slice(0, n);
}
