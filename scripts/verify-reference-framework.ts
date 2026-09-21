import { readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { referenceFrameworkByCode, subjectByCode, lectures, subjectOfSource, partOfSource, lectureSetBySlug, lectureSetSlug } from '../content';
import type { Lecture } from '../lib/types';

const expectedTitles = [
  'Cell Injury, Cell Death, and Adaptations',
  'Inflammation and Repair',
  'Hemodynamic Disorders, Thromboembolism, and Shock',
  'Diseases of the Immune System',
  'Neoplasia',
  'Genetic and Pediatric Diseases',
  'Environmental and Nutritional Diseases',
  'General Pathology of Infectious Diseases',
  'Blood Vessels',
  'Heart',
  'Hematopoietic and Lymphoid Systems',
  'Lung',
  'Kidney and Its Collecting System',
  'Oral Cavity and Gastrointestinal Tract',
  'Liver, Gallbladder, and Biliary Tract',
  'Pancreas',
  'Male Genital System and Lower Urinary Tract',
  'Female Genital System and Breast',
  'Endocrine System',
  'Bones, Joints, and Soft Tissue Tumors',
  'Peripheral Nerves and Muscles',
  'Central Nervous System',
  'Skin',
];

export function robbinsFrameworkIssues(modules: Lecture[] = lectures) {
  const issues: { moduleId: string; kind: string; detail: string }[] = [];
  const fail = (detail: string) => issues.push({ moduleId: 'RBP', kind: 'rbp-framework', detail });
  const framework = referenceFrameworkByCode.RBP;

  if (!subjectByCode.RBP) fail('RBP is missing from the curriculum.');
  if (!framework) return [...issues, { moduleId: 'RBP', kind: 'rbp-framework', detail: 'Framework is not registered.' }];
  if (framework.chapters.length !== expectedTitles.length) fail(`Expected ${expectedTitles.length} chapters, found ${framework.chapters.length}.`);

  const chapterNumbers = new Set<number>();
  framework.chapters.forEach((chapter, index) => {
    if (chapter.number !== index + 1) fail(`Chapter order breaks at position ${index + 1}.`);
    if (chapterNumbers.has(chapter.number)) fail(`Chapter ${chapter.number} is repeated.`);
    chapterNumbers.add(chapter.number);
    if (chapter.title !== expectedTitles[index]) fail(`Chapter ${index + 1} title does not match the source contents.`);
    if (!chapter.focus.trim()) fail(`Chapter ${chapter.number} is missing its framework focus.`);
  });

  const assigned = new Set<number>();
  const unitIds = new Set<string>();
  for (const unit of framework.units) {
    if (unitIds.has(unit.id)) fail(`Unit id is repeated: ${unit.id}.`);
    unitIds.add(unit.id);
    if (!unit.title.trim() || !unit.description.trim() || unit.chapters.length === 0) fail(`Unit ${unit.id} is incomplete.`);
    for (const number of unit.chapters) {
      if (!chapterNumbers.has(number)) fail(`Unit ${unit.id} references unknown chapter ${number}.`);
      if (assigned.has(number)) fail(`Chapter ${number} is assigned to more than one unit.`);
      assigned.add(number);
    }
  }
  for (let number = 1; number <= expectedTitles.length; number++) {
    if (!assigned.has(number)) fail(`Chapter ${number} is not assigned to a unit.`);
  }

  const rbp = modules.filter((module) => module.id.startsWith('rbp-'));
  const ids = new Set(rbp.map((module) => module.id));
  const available = new Set<number>();
  for (const module of rbp) {
    const number = Number(module.source.match(/^Ch (\d+) — /)?.[1]);
    const chapter = framework.chapters.find((chapter) => chapter.number === number);
    const unit = framework.units.find((unit) => unit.chapters.includes(number));
    if (!chapter || module.source !== `Ch ${number} — ${chapter.title}`) fail(`${module.id}: source does not match a framework chapter.`);
    if (subjectOfSource[module.source] !== 'RBP') fail(`${module.id}: missing RBP curriculum mapping.`);
    if (!unit || partOfSource[module.source] !== unit.title) fail(`${module.id}: incorrect study unit.`);
    if (!module.tags.some((tag) => tag.kind === 'lecture' && tag.label.startsWith(`Ch ${number} `))) fail(`${module.id}: chapter tag disagrees with source.`);
    if (!module.highYield.length || !module.mechanism.steps.length || !module.quiz.length) fail(`${module.id}: missing notes, mechanism or quiz.`);
    if (!lectureSetBySlug[lectureSetSlug(module.source)]?.items.some((item) => item.id === module.id)) fail(`${module.id}: absent from its reading/practice chapter.`);
    if (new Set(module.quiz.map((question) => question.id)).size !== module.quiz.length) fail(`${module.id}: repeated quiz id.`);
    for (const question of module.quiz) {
      if (!question.stem.trim() || !question.explanation.trim() || question.options.length < 2 || question.options.some((option) => !option.text.trim())) fail(`${module.id}/${question.id}: incomplete quiz.`);
      if (new Set(question.options.map((option) => option.id)).size !== question.options.length) fail(`${module.id}/${question.id}: repeated option id.`);
    }
    available.add(number);
  }
  // Protect the released chapters without marking the remaining outlines as complete.
  for (let number = 1; number <= 16; number++) {
    if (!available.has(number)) fail(`Released chapter ${number} has no registered study modules.`);
  }
  const directory = fileURLToPath(new URL('../content/lectures/', import.meta.url));
  for (const file of readdirSync(directory).filter((file) => /^rbp-.*\.ts$/.test(file))) {
    if (!ids.has(file.replace(/\.ts$/, ''))) fail(`Unregistered module file: ${file}`);
  }

  return issues;
}
