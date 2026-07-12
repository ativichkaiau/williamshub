import type { Lecture } from '../../lib/types';

export const hhlB12FolateMegaloblastic: Lecture = {
  id: 'hhl-b12-folate-megaloblastic',
  title: 'Megaloblastic Anemia (B12 & Folate)',
  system: 'heme',
  source: 'L8 — Nutritional Anemia',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L8 Nutritional Anemia' },
    { kind: 'disease', label: 'B12 / folate deficiency' },
    { kind: 'mechanism', label: 'Impaired DNA synthesis' },
    { kind: 'treatment', label: 'B12 before folate' },
  ],

  highYield: [
    '**Megaloblastic anemia = impaired DNA synthesis** (nuclear–cytoplasmic asynchrony): cytoplasm matures but the nucleus lags → **macro-ovalocytes + hypersegmented neutrophils (>5 lobes) + pancytopenia** in severe cases.',
    '**Ineffective erythropoiesis** (cells die in the marrow) → **high LDH and high indirect bilirubin** with a **low reticulocyte count** — an "intramedullary hemolysis" picture.',
    '**B12 (cobalamin) causes**: **pernicious anemia (autoimmune — anti-intrinsic-factor & anti-parietal-cell antibodies, atrophic gastritis)**, **terminal ileal disease** (Crohn, resection), **veganism**, **fish tapeworm (Diphyllobothrium latum)**, gastrectomy. **B12 lack causes neurology — subacute combined degeneration of the cord** (dorsal columns + corticospinal: paresthesia, ↓vibration/proprioception, ataxia).',
    '**Folate causes**: poor diet / **alcoholism**, **pregnancy**, malabsorption, drugs (**methotrexate**, trimethoprim, phenytoin). **Folate deficiency gives NO neurological signs** — a key discriminator from B12.',
    '**Give B12 BEFORE (or with) folate.** Treating a B12-deficient patient with **folate alone corrects the anemia but can precipitate/worsen irreversible neurological damage** — always check/replace B12 first.',
  ],

  mechanism: {
    title: 'Cofactor lack → blocked DNA synthesis → megaloblastic marrow',
    steps: [
      { id: 's1', label: 'B12 or folate deficiency', emphasis: 'key' },
      { id: 's2', label: 'Impaired thymidine/DNA synthesis (nucleus lags cytoplasm)', emphasis: 'key' },
      { id: 's3', label: 'Macro-ovalocytes + hypersegmented neutrophils' },
      { id: 's4', label: 'Ineffective erythropoiesis → ↑LDH, ↑indirect bilirubin' },
      { id: 's5', label: 'Folate given alone in B12 lack → worsening cord degeneration', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Hypersegmented neutrophils (>5 lobes)', mechanism: 'Impaired DNA synthesis in granulopoiesis', significance: 'key' },
    { sign: 'Macro-ovalocytes; MCV often >110–120 fL', mechanism: 'Megaloblastic red-cell maturation', significance: 'key' },
    { sign: 'High LDH + high indirect bilirubin, low reticulocytes', mechanism: 'Ineffective (intramedullary) erythropoiesis', significance: 'supportive' },
    { sign: 'Symmetrical paresthesia, lost vibration/proprioception', mechanism: 'Subacute combined degeneration — B12 (not folate)', significance: 'key' },
  ],

  investigations: [
    { clue: 'Macrocytosis + hypersegmented neutrophils', meaning: 'Megaloblastic anemia — check B12 and folate' },
    { clue: 'Low B12 + neurological signs', meaning: 'B12 deficiency (look for pernicious anemia)' },
    { clue: 'Anti-intrinsic-factor / anti-parietal-cell antibodies', meaning: 'Pernicious anemia' },
    { clue: 'Low folate, NO neurology, high MCV', meaning: 'Folate deficiency (diet/alcohol/pregnancy/drugs)' },
  ],

  treatment: [
    { logic: 'Replace the deficient vitamin — but confirm B12 first', detail: 'Parenteral B12 for pernicious anemia/malabsorption; oral folate for folate deficiency.' },
    { logic: 'Never give folate alone when B12 status is unknown', detail: 'Folate monotherapy in B12 deficiency can precipitate/worsen subacute combined degeneration.' },
    { logic: 'Treat the cause', detail: 'Diet, alcohol, deworming (D. latum), or stop the offending drug.' },
  ],

  mnemonics: [
    { hook: 'B12 has the Brain; folate is Fine neurologically', expansion: ['Both cause megaloblastic anemia', 'Only B12 causes subacute combined degeneration'] },
    { hook: 'B12 before folate', expansion: ['Folate alone masks anemia', 'but lets neurological damage progress'] },
  ],

  traps: [
    {
      questionCategory: 'Macrocytic anemia — order of replacement',
      wrongInstinct: 'A macrocytic anemia can just be treated with folic acid',
      rightAnswer: 'Check/replace B12 first: giving folate alone to a B12-deficient patient improves the blood film but can trigger or worsen irreversible subacute combined degeneration of the cord',
      why: 'Folate lets DNA synthesis (and hematopoiesis) resume without fixing the B12-dependent neurological pathway.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A vegan patient has MCV 118 fL, hypersegmented neutrophils, and numbness with reduced vibration sense in both feet. Which deficiency and management is correct?',
      options: [
        { id: 'a', text: 'Folate deficiency — give oral folic acid alone' },
        { id: 'b', text: 'B12 deficiency — replace B12 (before any folate)' },
        { id: 'c', text: 'Iron deficiency — give oral iron' },
        { id: 'd', text: 'Copper deficiency — give copper' },
      ],
      answerId: 'b',
      explanation: 'Macrocytosis with hypersegmented neutrophils plus posterior-column signs indicates B12 deficiency (subacute combined degeneration). Replace B12; folate alone would risk worsening the neurology.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'Which feature best distinguishes B12 deficiency from folate deficiency?',
      options: [
        { id: 'a', text: 'Presence of macrocytosis' },
        { id: 'b', text: 'Presence of neurological signs (subacute combined degeneration)' },
        { id: 'c', text: 'Presence of hypersegmented neutrophils' },
        { id: 'd', text: 'A raised LDH' },
      ],
      answerId: 'b',
      explanation: 'Both cause macrocytosis, hypersegmentation and raised LDH; only B12 deficiency produces neurological disease (subacute combined degeneration of the cord).',
      tests: 'disease',
    },
  ],
};

export default hhlB12FolateMegaloblastic;
