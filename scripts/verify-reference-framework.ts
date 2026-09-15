import { referenceFrameworkByCode, subjectByCode } from '../content';

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

export function robbinsFrameworkIssues() {
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

  return issues;
}
