import { readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import {
  lectures,
  lectureSetBySlug,
  lectureSetRedirects,
  lectureSetSlug,
  partOfSource,
  subjectOfSource,
} from '../content';
import { placementOf } from '../lib/content/placement';
import type { Lecture } from '../lib/types';

// Chapter ranges follow the publisher's 14th-edition contents. See
// docs/guyton-coverage.md for the source and the historical numbering repair.
const units = [
  [1, 3, 'I'], [4, 8, 'II'], [9, 13, 'III'], [14, 24, 'IV'],
  [25, 32, 'V'], [33, 37, 'VI'], [38, 43, 'VII'], [44, 45, 'VIII'],
  [46, 49, 'IX'], [50, 54, 'X'], [55, 62, 'XI'], [63, 67, 'XII'],
  [68, 74, 'XIII'], [75, 84, 'XIV'], [85, 85, 'XV'],
] as const;

export function guytonCoverageIssues(modules: Lecture[] = lectures) {
  const issues: { moduleId: string; kind: string; detail: string }[] = [];
  const fail = (detail: string, moduleId = 'GHP') => issues.push({ moduleId, kind: 'ghp-coverage', detail });
  const ghp = modules.filter((module) => module.id.startsWith('ghp-'));
  const ids = new Set(ghp.map((module) => module.id));
  const chapterSources = new Map<number, Set<string>>();

  for (const module of ghp) {
    const match = module.source.match(/^Ch (\d+) — .+$/);
    const number = match ? Number(match[1]) : 0;
    const unit = units.find(([start, end]) => number >= start && number <= end);
    if (!unit) fail(`Invalid chapter source: ${module.source}`, module.id);
    const sources = chapterSources.get(number) ?? new Set<string>();
    sources.add(module.source);
    chapterSources.set(number, sources);
    if (subjectOfSource[module.source] !== 'GHP') fail('Chapter is missing from the GHP curriculum.', module.id);
    if (unit && !partOfSource[module.source]?.startsWith(`Unit ${unit[2]} · `)) fail('Chapter is assigned to the wrong unit.', module.id);
    if (placementOf(module).lectureNo !== number) fail('Chapter number is not recognised by placement.', module.id);
    if (!module.tags.some((tag) => tag.kind === 'lecture' && tag.label.startsWith(`Ch ${number} `))) fail('Chapter tag disagrees with source.', module.id);
    if (module.highYield.length < 1 || module.mechanism.steps.length < 1 || module.quiz.length < 1) fail('Chapter module is missing notes, a mechanism or a quiz.', module.id);
    if (!lectureSetBySlug[lectureSetSlug(module.source)]?.items.some((item) => item.id === module.id)) fail('Module is missing from its reading/practice chapter.', module.id);
    const quizIds = new Set<string>();
    for (const question of module.quiz) {
      if (quizIds.has(question.id)) fail(`Repeated quiz id: ${question.id}`, module.id);
      quizIds.add(question.id);
      if (!question.stem.trim() || !question.explanation.trim() || question.options.length < 2) fail(`Incomplete quiz: ${question.id}`, module.id);
      if (new Set(question.options.map((option) => option.id)).size !== question.options.length) fail(`Repeated option id: ${question.id}`, module.id);
    }
  }

  for (let chapter = 1; chapter <= 85; chapter++) {
    const sources = chapterSources.get(chapter);
    if (!sources?.size) fail(`Chapter ${chapter} has no registered study modules.`);
    else if (sources.size !== 1) fail(`Chapter ${chapter} has conflicting source titles.`);
  }
  const declaredSources = Object.keys(subjectOfSource).filter((source) => subjectOfSource[source] === 'GHP');
  if (declaredSources.length !== 85) fail(`Expected 85 curriculum chapters, found ${declaredSources.length}.`);
  for (const source of declaredSources) {
    if (!ghp.some((module) => module.source === source)) fail(`Curriculum chapter has no content: ${source}`);
  }
  const directory = fileURLToPath(new URL('../content/lectures/', import.meta.url));
  for (const file of readdirSync(directory).filter((file) => /^ghp-.*\.ts$/.test(file))) {
    if (!ids.has(file.replace(/\.ts$/, ''))) fail(`Unregistered module file: ${file}`);
  }
  const redirects = Object.entries(lectureSetRedirects);
  if (redirects.length !== 48) fail(`Expected 48 legacy chapter URLs, found ${redirects.length}.`);
  for (const [from, to] of redirects) {
    if (lectureSetBySlug[from] || !lectureSetBySlug[to] || lectureSetRedirects[to]) fail(`Broken or colliding legacy redirect: ${from}`);
  }
  return issues;
}
