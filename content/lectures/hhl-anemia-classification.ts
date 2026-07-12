import type { Lecture } from '../../lib/types';

export const hhlAnemiaClassification: Lecture = {
  id: 'hhl-anemia-classification',
  title: 'Classification of Anemia (Morphologic & Kinetic)',
  system: 'heme',
  source: 'L6 — Classification of Anemia & Aplastic Anemia',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L6 Anemia & Aplastic' },
    { kind: 'mechanism', label: 'Morphologic vs kinetic' },
    { kind: 'investigation', label: 'MCV + reticulocyte algorithm' },
  ],

  highYield: [
    'Two complementary frameworks: **morphologic (by MCV)** and **kinetic (production vs destruction/loss)**. Examiners want you to use **both** — MCV to bin the cell size, reticulocytes to bin the mechanism.',
    '**Microcytic causes = TICS**: **T**halassemia, **I**ron deficiency, **C**hronic disease (some/late), **S**ideroblastic. Iron deficiency and thalassemia are the two you must separate (see [[hhl-anemia-approach-indices]]).',
    '**Normocytic**: acute blood loss, hemolysis, anemia of chronic disease, marrow failure, CKD. **Split it with the reticulocyte count** — high = hemolysis/loss, low = hypoproliferative.',
    '**Macrocytic**: **megaloblastic** (B12/folate → hypersegmented neutrophils) vs **non-megaloblastic** (alcohol, liver disease, hypothyroidism, reticulocytosis, myelodysplasia).',
    '**Kinetic view**: **decreased production** (nutritional, marrow failure/infiltration, ACD, EPO lack) vs **increased destruction or loss** (hemolysis, hemorrhage) — the reticulocyte count is what splits them.',
  ],

  mechanism: {
    title: 'Combine the two axes: size (MCV) × mechanism (reticulocytes)',
    steps: [
      { id: 's1', label: 'MCV bins morphology: micro / normo / macro', emphasis: 'key' },
      { id: 's2', label: 'Microcytic = TICS (thal, iron, chronic, sideroblastic)' },
      { id: 's3', label: 'Macrocytic = megaloblastic vs non-megaloblastic' },
      { id: 's4', label: 'Reticulocytes bin kinetics', emphasis: 'key' },
      { id: 's5', label: 'High retic = destruction/loss; low retic = ↓production' },
    ],
  },

  examFindings: [
    { sign: 'Microcytic, hypochromic film with pencil cells', mechanism: 'Iron deficiency (a TICS microcytic cause)', significance: 'key' },
    { sign: 'Macro-ovalocytes + hypersegmented neutrophils', mechanism: 'Megaloblastic (B12/folate) macrocytosis', significance: 'key' },
    { sign: 'Normocytic anemia with high reticulocytes', mechanism: 'Hemolysis or recent blood loss (kinetic: destruction/loss)', significance: 'key' },
    { sign: 'Round macrocytes, no hypersegmentation', mechanism: 'Non-megaloblastic (liver disease, alcohol, hypothyroid)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Low MCV + low reticulocytes', meaning: 'Iron deficiency / thalassemia / ACD (production side)' },
    { clue: 'Normal MCV + high reticulocytes', meaning: 'Hemolysis or acute hemorrhage' },
    { clue: 'High MCV + hypersegmented neutrophils', meaning: 'Megaloblastic anemia' },
    { clue: 'Pancytopenia + low reticulocytes', meaning: 'Marrow failure / infiltration → examine marrow' },
  ],

  treatment: [
    { logic: 'Let the classification drive the workup', detail: 'MCV bin selects the confirmatory tests (iron studies vs B12/folate vs marrow).' },
    { logic: 'Treat the mechanism', detail: 'Replace the missing substrate, stop hemolysis, or support failing marrow.' },
  ],

  mnemonics: [
    { hook: 'TICS = microcytic anemia', expansion: ['Thalassemia', 'Iron deficiency', 'Chronic disease', 'Sideroblastic'] },
    { hook: 'MCV bins the cell, reticulocytes bin the marrow', expansion: ['Size = morphologic axis', 'Response = kinetic axis'] },
  ],

  traps: [
    {
      questionCategory: 'Anemia of chronic disease vs iron deficiency',
      wrongInstinct: 'Anemia of chronic disease is always microcytic like iron deficiency',
      rightAnswer: 'ACD is usually normocytic and only sometimes mildly microcytic — ferritin (high/normal in ACD, low in iron deficiency) makes the call',
      why: 'ACD can sit in either the normocytic or microcytic bin; morphology alone will not separate it from iron deficiency.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which set of disorders is captured by the microcytic-anemia mnemonic TICS?',
      options: [
        { id: 'a', text: 'Thalassemia, iron deficiency, chronic disease, sideroblastic' },
        { id: 'b', text: 'Thrombocytopenia, iron overload, cirrhosis, sepsis' },
        { id: 'c', text: 'Thalassemia, infection, cancer, spherocytosis' },
        { id: 'd', text: 'Thrombosis, ischemia, coagulopathy, splenomegaly' },
      ],
      answerId: 'a',
      explanation: 'TICS = Thalassemia, Iron deficiency, Chronic disease (some/late), Sideroblastic — the classic microcytic causes.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'A patient has a normocytic anemia. Which single test best separates a hyperproliferative (destruction/loss) from a hypoproliferative cause?',
      options: [
        { id: 'a', text: 'Serum B12' },
        { id: 'b', text: 'Reticulocyte count' },
        { id: 'c', text: 'MCHC' },
        { id: 'd', text: 'Platelet count' },
      ],
      answerId: 'b',
      explanation: 'Within the normocytic bin the reticulocyte count is the kinetic splitter: high = hemolysis/blood loss, low = hypoproliferative marrow.',
      tests: 'investigation',
    },
  ],
};

export default hhlAnemiaClassification;
