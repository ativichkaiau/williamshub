/**
 * Build-time content verification (non-fatal).
 *
 * Derives each module's placement (subject / lectureNo / lectureTitle) and warns
 * about mismatches: sources with no subject, no lecture number, or colliding set
 * slugs. Runs before every build (npm `prebuild`) so content drift surfaces early.
 *
 *     npm run content:verify
 */

import { lectures } from '../content';
import { contentIssues, type ContentIssue } from '../lib/content/placement';

const issues = contentIssues(lectures);

if (issues.length === 0) {
  console.log(`content:verify — ${lectures.length} modules, placement clean.`);
} else {
  const byKind = issues.reduce<Record<string, ContentIssue[]>>((acc, i) => {
    (acc[i.kind] ??= []).push(i);
    return acc;
  }, {});
  console.warn(`content:verify — ${issues.length} placement warning(s) across ${lectures.length} modules:`);
  for (const [kind, list] of Object.entries(byKind)) {
    console.warn(`  • ${kind}: ${list.length}`);
    for (const i of list.slice(0, 8)) console.warn(`      ${i.moduleId} — ${i.detail}`);
    if (list.length > 8) console.warn(`      …and ${list.length - 8} more`);
  }
  console.warn('  (non-fatal — add entries to content/placement-overrides.ts to resolve)');
}
