// Learning path — a suggested linear study route through a module:
//   foundation → … → prerequisite → THIS module → application → … → advanced
//
// Build-time + pure. Walks the strongest prerequisite/forward edge at each hop
// (from the resolved integration bundle), avoiding cycles, capped for legibility.

import { lectureById } from '../../content';
import { moduleNodes } from './graph';
import { getIntegrations } from './resolve';

export interface PathStep {
  id: string;
  title: string;
  subjectCode: string | null;
}

export interface LearningPathView {
  current: PathStep;
  before: PathStep[]; // foundation → nearest prerequisite
  after: PathStep[]; // nearest application → further
  hasPath: boolean;
}

const MAX_HOPS = 3;

function step(id: string): PathStep {
  return {
    id,
    title: lectureById[id]?.title ?? id.replace(/-/g, ' '),
    subjectCode: moduleNodes[id]?.subjectCode ?? null,
  };
}

/** Follow the strongest unseen edge of `dir` hop by hop, forming a chain. */
function walk(startId: string, dir: 'prerequisite' | 'forward'): PathStep[] {
  const out: PathStep[] = [];
  const seen = new Set<string>([startId]);
  let cur = startId;
  for (let i = 0; i < MAX_HOPS; i++) {
    const next = getIntegrations(cur)[dir].find((e) => !seen.has(e.targetId));
    if (!next) break;
    seen.add(next.targetId);
    out.push(step(next.targetId));
    cur = next.targetId;
  }
  return out;
}

export function buildLearningPath(moduleId: string): LearningPathView {
  const current = step(moduleId);
  if (!lectureById[moduleId]) return { current, before: [], after: [], hasPath: false };

  const before = walk(moduleId, 'prerequisite').reverse(); // foundation-first
  const after = walk(moduleId, 'forward'); // nearest-first
  return { current, before, after, hasPath: before.length + after.length > 0 };
}
