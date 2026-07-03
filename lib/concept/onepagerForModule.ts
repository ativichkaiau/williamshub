// SERVER-only helper: build a module's OnePager, resolving the "block
// integrations" section from the Active-Integration graph. Imports `content`, so
// only server pages should use it (keeps content out of client bundles).

import { lectureById } from '../../content';
import { getIntegrations } from '../integrations/resolve';
import { buildOnePager } from './modes';
import type { OnePagerSections } from './types';
import type { Lecture } from '../types';

const LABEL = { prerequisite: 'Prereq', forward: 'Forward', vertical: 'Clinical', horizontal: 'Peer' } as const;

export function onePagerForModule(l: Lecture): OnePagerSections {
  const bundle = getIntegrations(l.id);
  const blockLines = (['prerequisite', 'forward', 'vertical', 'horizontal'] as const).flatMap((k) =>
    bundle[k].slice(0, 3).map((e) => `${LABEL[k]}: ${lectureById[e.targetId]?.title ?? e.targetId}`),
  );
  return buildOnePager(l, blockLines);
}
