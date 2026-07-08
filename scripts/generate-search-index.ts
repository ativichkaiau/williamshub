/**
 * Build-time search index for the ⌘K command palette.
 *
 * Writes a compact `public/search-index.json` (modules + lectures + subjects)
 * that the client palette fetches on demand — so the large content graph never
 * ships in the JS bundle. Runs automatically before every build (npm `prebuild`).
 *
 *     npm run search:index      # (or just `npm run build`)
 */

import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import {
  lectures,
  lecturesBySubject,
  subjectOfSource,
  subjectByCode,
  subjectSlug,
  lectureSetSlug,
} from '../content';

interface Entry {
  k: 'm' | 'l' | 's'; // module | lecture(-set) | subject
  t: string; // title / label
  u: string; // url
  s?: string | null; // subject code
  sub?: string; // source label (module context)
  tg?: string; // tag labels (search terms)
  id?: string; // module id (coverage lookups)
}

const entries: Entry[] = [];
const seenSets = new Set<string>();

for (const l of lectures) {
  const code = subjectOfSource[l.source] ?? null;
  entries.push({
    k: 'm',
    t: l.title,
    u: `/lecture/${l.id}`,
    s: code,
    sub: l.source,
    tg: l.tags.map((t) => t.label).join(' '),
    id: l.id,
  });
  const slug = lectureSetSlug(l.source);
  if (!seenSets.has(slug)) {
    seenSets.add(slug);
    entries.push({ k: 'l', t: l.source, u: `/lecture-set/${slug}`, s: code });
  }
}

for (const code of Object.keys(lecturesBySubject)) {
  const subj = subjectByCode[code];
  if (!subj) continue;
  entries.push({ k: 's', t: `${code} — ${subj.name}`, u: `/subject/${subjectSlug(code)}`, s: code });
}

const outDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'public');
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'search-index.json'), JSON.stringify(entries));
console.log(`search-index.json: ${entries.length} entries`);
