import type { Lecture } from '../../lib/types';

export const fcp1AnemiaClassification: Lecture = {
  id: 'fcp1-anemia-classification',
  title: 'Classifying Anemia — MCV & Reticulocyte Response',
  system: 'clinical',
  source: 'L21 — Approach to Anemia',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L21 Approach to Anemia' },
    { kind: 'disease', label: 'Micro/normo/macrocytic' },
    { kind: 'investigation', label: 'MCV · RDW · reticulocyte' },
    { kind: 'mechanism', label: 'Production vs loss/destruction' },
  ],

  highYield: [
    'Classify anemia on **two axes at once**: the **MCV** (morphologic) and the **reticulocyte response** (kinetic). The MCV splits the differential; the reticulocyte tells you whether the marrow is the problem. See [[fcp1-anemia-approach-workup]].',
    '**Microcytic (MCV <80):** iron deficiency, thalassemia, anemia of chronic disease (late), sideroblastic/lead — work these up with iron studies in [[fcp1-anemia-microcytic]]. **Macrocytic (MCV >100):** megaloblastic (B12/folate, see [[hhl-b12-folate-megaloblastic]]) vs non-megaloblastic (alcohol, liver disease, hypothyroidism, myelodysplasia, brisk reticulocytosis).',
    '**Normocytic (MCV 80–100)** is where the **reticulocyte count earns its keep**: a **high** reticulocyte points to **hemolysis or acute blood loss** (marrow responding), a **low** reticulocyte to **hypoproliferation** (chronic disease, renal failure, early iron deficiency, marrow disease).',
    '**Low reticulocyte = production problem; high reticulocyte = destruction or loss** with an appropriate marrow. Correct the raw count for the anemia (reticulocyte index) before calling a response adequate.',
    '**A high RDW** flags **anisocytosis** and is an early clue to iron deficiency or a mixed/early picture even when the MCV still looks normal. See [[hhl-anemia-classification]] and [[hhl-anemia-approach-indices]].',
  ],

  mechanism: {
    title: 'The two-axis approach: MCV then reticulocyte',
    steps: [
      { id: 's1', label: 'Confirm anemia (Hb below age/sex reference)', emphasis: 'key' },
      { id: 's2', label: 'MCV → microcytic / normocytic / macrocytic', emphasis: 'key' },
      { id: 's3', label: 'Reticulocyte → low (hypoproliferative) vs high (hemolysis/loss)', emphasis: 'key' },
      { id: 's4', label: 'Combine MCV + reticulocyte + smear → narrow the cause', emphasis: 'key' },
      { id: 's5', label: 'Severe symptomatic anemia or active bleeding → resuscitate & transfuse first', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Low MCV (<80)', mechanism: 'Microcytic — iron deficiency or thalassemia most likely', significance: 'key' },
    { sign: 'High MCV (>100) with hypersegmented neutrophils', mechanism: 'Megaloblastic anemia (B12/folate)', significance: 'key' },
    { sign: 'Jaundice + splenomegaly + high reticulocyte', mechanism: 'Hemolytic anemia — marrow responding appropriately', significance: 'key' },
    { sign: 'Normocytic anemia with a low reticulocyte', mechanism: 'Hypoproliferation — chronic disease, renal, or marrow', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'MCV <80 (microcytic)', meaning: 'Order iron studies and consider Hb typing — see [[fcp1-anemia-microcytic]]' },
    { clue: 'MCV >100 with hypersegmented neutrophils', meaning: 'Check B12 and folate — megaloblastic process' },
    { clue: 'High reticulocyte with raised LDH and low haptoglobin', meaning: 'Hemolysis — send smear and direct antiglobulin test' },
    { clue: 'Normocytic anemia with a low reticulocyte', meaning: 'Hypoproliferative — check ferritin, renal function, consider marrow' },
  ],

  treatment: [
    { logic: 'Treat the cause, not just the number', detail: 'The MCV plus reticulocyte defines the mechanism; correct the specific deficiency or underlying disease rather than reflexively transfusing.' },
    { logic: 'Resuscitate and transfuse when severe, symptomatic, or actively bleeding', detail: 'Haemodynamic stabilisation comes before the leisurely diagnostic workup.' },
  ],

  mnemonics: [
    { hook: 'Microcytic causes = TAILS', expansion: ['Thalassemia', 'Anemia of chronic disease', 'Iron deficiency', 'Lead / sideroblastic'] },
    { hook: 'MCV first, reticulocyte second', expansion: ['MCV bins the differential', 'Reticulocyte says production vs destruction/loss'] },
  ],

  traps: [
    {
      questionCategory: 'Classifying by indices',
      wrongInstinct: 'A normal MCV rules out iron deficiency',
      rightAnswer: 'Early iron deficiency and mixed pictures can be normocytic — check ferritin and look at the RDW/reticulocyte',
      why: 'The MCV falls late; a high RDW (anisocytosis) is often the earliest index clue.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 60-year-old has Hb 9.5 g/dL, MCV 106 fL, a low reticulocyte count and hypersegmented neutrophils on the smear. The anemia is best classified as:',
      options: [
        { id: 'a', text: 'Microcytic hypochromic' },
        { id: 'b', text: 'Normocytic with brisk reticulocytosis' },
        { id: 'c', text: 'Macrocytic, likely megaloblastic' },
        { id: 'd', text: 'Hemolytic with an appropriate marrow response' },
      ],
      answerId: 'c',
      explanation: 'A raised MCV with hypersegmented neutrophils and a low reticulocyte is a macrocytic, megaloblastic pattern — next test B12 and folate.',
      tests: 'lecture',
    },
    {
      id: 'q2',
      stem: 'A patient with normocytic anemia has a markedly elevated reticulocyte count, raised LDH, low haptoglobin and jaundice. This reticulocyte response indicates:',
      options: [
        { id: 'a', text: 'A hypoproliferative marrow' },
        { id: 'b', text: 'Hemolysis or blood loss with an appropriately responding marrow' },
        { id: 'c', text: 'Iron deficiency' },
        { id: 'd', text: 'Anemia of chronic disease' },
      ],
      answerId: 'b',
      explanation: 'A high reticulocyte count with haemolytic markers shows the marrow responding appropriately to red-cell destruction or loss, not a production defect.',
      tests: 'mechanism',
    },
  ],
};

export default fcp1AnemiaClassification;
