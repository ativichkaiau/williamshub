import type { Lecture } from '../../lib/types';

export const hhlG6pdMembraneDefects: Lecture = {
  id: 'hhl-g6pd-membrane-defects',
  title: 'Enzyme & Membrane Defects: G6PD & Hereditary Spherocytosis',
  system: 'heme',
  source: 'L9 — Hemolytic Anemia',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L9 Hemolytic Anemia' },
    { kind: 'disease', label: 'G6PD def · spherocytosis' },
    { kind: 'mechanism', label: 'Intrinsic RBC defects' },
    { kind: 'investigation', label: 'Enzyme assay · EMA · OF' },
  ],

  highYield: [
    '**G6PD deficiency** is **X-linked** (males affected) — the commonest enzymopathy. G6PD makes **NADPH → reduced glutathione**, the red cell’s only defence against oxidative stress. Deficiency → **episodic INTRAvascular hemolysis** on oxidant exposure.',
    '**G6PD triggers**: **fava beans (favism), infection (commonest trigger), drugs — primaquine, dapsone, sulfonamides, nitrofurantoin**, naphthalene. Film: **bite cells, blister cells, Heinz bodies** (denatured Hb on supravital stain).',
    '**Hereditary spherocytosis** = **autosomal-dominant cytoskeleton defect (spectrin/ankyrin/band 3)** → membrane loss → **spherocytes** → **EXTRAvascular (splenic) hemolysis**. Clues: **↑MCHC, splenomegaly, pigment gallstones, jaundice**; parvovirus B19 can trigger an aplastic crisis.',
    '**Diagnosis**: G6PD → **enzyme assay** (may be falsely normal in acute crisis — reticulocytes are enzyme-rich, so retest later). HS → **↑osmotic fragility, abnormal (negative/reduced) EMA-binding flow test**, spherocytes on film.',
    '**Both are Coombs (DAT)-NEGATIVE** — this separates them from autoimmune hemolysis, which also shows spherocytes but is **DAT-positive** (see [[hhl-aiha]]).',
  ],

  mechanism: {
    title: 'Two intrinsic red-cell defects → two hemolysis patterns',
    steps: [
      { id: 's1', label: 'G6PD ↓ → low NADPH/glutathione', emphasis: 'key' },
      { id: 's2', label: 'Oxidant stress → Heinz bodies → intravascular hemolysis + bite cells' },
      { id: 's3', label: 'HS: spectrin/ankyrin defect → membrane loss → spherocytes', emphasis: 'key' },
      { id: 's4', label: 'Spleen removes rigid spherocytes → extravascular hemolysis' },
      { id: 's5', label: 'Both DAT-negative (intrinsic, not antibody-mediated)' },
    ],
  },

  examFindings: [
    { sign: 'Bite cells, blister cells, Heinz bodies after an oxidant', mechanism: 'G6PD deficiency — oxidative denaturation of Hb', significance: 'key' },
    { sign: 'Spherocytes with high MCHC on the film', mechanism: 'Membrane loss (hereditary spherocytosis)', significance: 'key' },
    { sign: 'Splenomegaly + pigment gallstones + jaundice', mechanism: 'Chronic extravascular hemolysis in HS', significance: 'supportive' },
    { sign: 'Negative direct antiglobulin (Coombs) test', mechanism: 'Intrinsic defect, not antibody-mediated', significance: 'key' },
  ],

  investigations: [
    { clue: 'G6PD enzyme assay (repeat after the acute episode)', meaning: 'Confirms G6PD deficiency; can be falsely normal during hemolysis' },
    { clue: 'Increased osmotic fragility', meaning: 'Hereditary spherocytosis (spherocytes lyse early)' },
    { clue: 'Abnormal EMA (eosin-5-maleimide) binding on flow', meaning: 'Reduced band-3 — supports HS' },
    { clue: 'Negative Coombs (DAT) with spherocytes', meaning: 'HS rather than warm AIHA' },
  ],

  treatment: [
    { logic: 'G6PD: avoid oxidant triggers', detail: 'Stop the offending drug/food; supportive care and transfusion for severe crises; usually self-limited.' },
    { logic: 'HS: folate; splenectomy for significant hemolysis', detail: 'Splenectomy stops extravascular destruction — vaccinate against encapsulated organisms first.' },
    { logic: 'Manage complications', detail: 'Cholecystectomy for pigment stones; watch for parvovirus aplastic crisis.' },
  ],

  mnemonics: [
    { hook: 'G6PD: bite cells + Heinz bodies, X-linked, oxidant-triggered', expansion: ['Fava beans, infection, primaquine/dapsone/sulfa', 'Intravascular hemolysis'] },
    { hook: 'HS: Spherocytes, Splenomegaly, Splenectomy, Stones', expansion: ['↑MCHC, ↑osmotic fragility, negative EMA', 'Coombs-negative'] },
  ],

  traps: [
    {
      questionCategory: 'Spherocytes on a blood film',
      wrongInstinct: 'Spherocytes automatically mean hereditary spherocytosis',
      rightAnswer: 'Spherocytes occur in BOTH hereditary spherocytosis and warm autoimmune hemolytic anemia — the direct Coombs (DAT) test separates them (negative in HS, positive in AIHA)',
      why: 'Warm AIHA generates spherocytes by partial splenic membrane removal, mimicking HS; only the DAT distinguishes intrinsic from antibody-mediated.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A boy develops dark urine and jaundice two days after starting primaquine. The film shows bite cells and Heinz bodies. What is the underlying defect?',
      options: [
        { id: 'a', text: 'Spectrin deficiency' },
        { id: 'b', text: 'Glucose-6-phosphate dehydrogenase deficiency' },
        { id: 'c', text: 'ADAMTS13 deficiency' },
        { id: 'd', text: 'Pyruvate kinase excess' },
      ],
      answerId: 'b',
      explanation: 'Oxidant-drug–triggered intravascular hemolysis with bite cells and Heinz bodies in a male is X-linked G6PD deficiency (low NADPH/glutathione).',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'A child has spherocytes, high MCHC, splenomegaly and pigment gallstones. The direct Coombs test is negative. Which test best confirms the diagnosis?',
      options: [
        { id: 'a', text: 'ADAMTS13 activity' },
        { id: 'b', text: 'Osmotic fragility / EMA-binding test' },
        { id: 'c', text: 'Hemoglobin electrophoresis' },
        { id: 'd', text: 'Bone marrow biopsy' },
      ],
      answerId: 'b',
      explanation: 'A Coombs-negative spherocytic hemolytic anemia with these features is hereditary spherocytosis, confirmed by increased osmotic fragility or an abnormal EMA-binding flow test.',
      tests: 'investigation',
    },
  ],
};

export default hhlG6pdMembraneDefects;
