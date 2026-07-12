import type { Lecture } from '../../lib/types';

export const hhlAnemiaApproachIndices: Lecture = {
  id: 'hhl-anemia-approach-indices',
  title: 'Anemia: Definition & Red Cell Indices',
  system: 'heme',
  source: 'L6 — Classification of Anemia & Aplastic Anemia',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L6 Anemia & Aplastic' },
    { kind: 'mechanism', label: 'Marrow response fork' },
    { kind: 'investigation', label: 'MCV · RDW · reticulocytes' },
  ],

  highYield: [
    'Anemia = ↓ red-cell mass; in practice a **low Hb by WHO cut-offs**: **men <13, non-pregnant women <12, pregnant women <11 g/dL** (children 6–59 mo <11). Always interpret against age, sex and pregnancy.',
    '**MCV is the first sorting key**: **microcytic <80 fL**, normocytic 80–100, **macrocytic >100 fL**. MCH/MCHC add hypochromia (**low MCHC = hypochromic**; a **high MCHC** points to spherocytes).',
    '**RDW = anisocytosis (variation in size)**. A **high RDW favours iron deficiency**; a **normal RDW with microcytosis favours thalassemia trait** — a classic discriminator.',
    '**The reticulocyte response is the true first fork**: use the **corrected count / reticulocyte production index (RPI)** to ask *is the marrow responding?* **RPI ≥2–3 = adequate (blood loss / hemolysis)**; **RPI <2 = inadequate (hypoproliferative — nutritional, marrow failure, ACD)**.',
  ],

  mechanism: {
    title: 'A rational approach: confirm anemia → size it → ask if marrow responds',
    steps: [
      { id: 's1', label: 'Confirm low Hb vs WHO age/sex cut-off' },
      { id: 's2', label: 'MCV: micro- / normo- / macrocytic', emphasis: 'key' },
      { id: 's3', label: 'Reticulocyte count → corrected count / RPI', emphasis: 'key' },
      { id: 's4', label: 'RPI ≥2–3 = adequate response (loss/hemolysis)' },
      { id: 's5', label: 'RPI <2 = inadequate → hypoproliferative marrow' },
    ],
  },

  examFindings: [
    { sign: 'Microcytosis (MCV <80) with high RDW', mechanism: 'Heterogeneous small cells — iron deficiency', significance: 'key' },
    { sign: 'Microcytosis with normal RDW and high RBC count', mechanism: 'Uniform small cells — thalassemia trait', significance: 'key' },
    { sign: 'High reticulocytes with polychromasia', mechanism: 'Marrow responding to loss or hemolysis', significance: 'key' },
    { sign: 'Low reticulocytes for the degree of anemia', mechanism: 'Hypoproliferative / failing marrow', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'MCV low (<80 fL)', meaning: 'Microcytic — iron deficiency, thalassemia, ACD, sideroblastic' },
    { clue: 'MCV high (>100 fL)', meaning: 'Macrocytic — megaloblastic vs non-megaloblastic' },
    { clue: 'Reticulocyte production index ≥2–3', meaning: 'Adequate marrow response → hemolysis or blood loss' },
    { clue: 'Reticulocyte production index <2', meaning: 'Inadequate response → production defect' },
  ],

  treatment: [
    { logic: 'Diagnose before treating', detail: 'Indices + reticulocytes narrow the cause; empirical iron without a cause hides pathology.' },
    { logic: 'Correct the underlying disorder, not just the Hb', detail: 'Transfusion is supportive; find and treat the mechanism.' },
  ],

  mnemonics: [
    { hook: 'Size it, then ask if the marrow answered', expansion: ['MCV = micro/normo/macro', 'Reticulocyte/RPI = adequate vs inadequate response'] },
    { hook: 'High RDW → iron deficiency; normal RDW + microcytosis → thalassemia', expansion: ['RDW = anisocytosis', 'Thalassemia cells are uniformly small'] },
  ],

  traps: [
    {
      questionCategory: 'Interpreting reticulocytes in anemia',
      wrongInstinct: 'A reticulocyte percentage that looks "normal" means the marrow is responding adequately',
      rightAnswer: 'Correct the count for the low haematocrit (RPI): a "normal" raw percentage in severe anemia is actually an inadequate response',
      why: 'Reticulocyte % is a fraction of a shrunken red-cell pool; only the corrected count / RPI shows true marrow output.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 24-year-old woman has Hb 9 g/dL, MCV 68 fL and RDW 18% (high). Which single feature best points toward iron deficiency rather than thalassemia trait?',
      options: [
        { id: 'a', text: 'The low MCV' },
        { id: 'b', text: 'The high RDW (marked anisocytosis)' },
        { id: 'c', text: 'The Hb of 9 g/dL' },
        { id: 'd', text: 'Her age' },
      ],
      answerId: 'b',
      explanation: 'Both cause microcytosis, but iron deficiency produces heterogeneous cells (high RDW), whereas thalassemia trait gives uniformly small cells (usually normal RDW) with a preserved/high RBC count.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'Which parameter best separates a hyperproliferative anemia (blood loss/hemolysis) from a hypoproliferative one at first assessment?',
      options: [
        { id: 'a', text: 'Mean corpuscular hemoglobin (MCH)' },
        { id: 'b', text: 'The reticulocyte production index' },
        { id: 'c', text: 'Serum ferritin' },
        { id: 'd', text: 'White cell count' },
      ],
      answerId: 'b',
      explanation: 'The corrected reticulocyte count / RPI is the first fork: ≥2–3 indicates an adequately responding marrow (loss or hemolysis); <2 indicates a production defect.',
      tests: 'mechanism',
    },
  ],
};

export default hhlAnemiaApproachIndices;
