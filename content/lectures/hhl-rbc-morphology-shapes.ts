import type { Lecture } from '../../lib/types';

export const hhlRbcMorphologyShapes: Lecture = {
  id: 'hhl-rbc-morphology-shapes',
  title: 'Abnormal RBC Shapes & Their Diseases',
  system: 'heme',
  source: 'L3 — Abnormal Red Cell Morphology',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L3 RBC morphology' },
    { kind: 'investigation', label: 'Blood film shapes' },
    { kind: 'disease', label: 'Shape → diagnosis' },
    { kind: 'mechanism', label: 'Membrane vs shear vs Hb' },
  ],

  highYield: [
    '**Spherocyte** (no central pallor, ↑ MCHC) → **hereditary spherocytosis** or **warm AIHA**; the **DAT** separates them (positive = AIHA).',
    '**Schistocyte/fragment** → **mechanical shearing**: microangiopathic haemolysis (**DIC, TTP/HUS**), mechanical valve, malignant hypertension — with low platelets, think emergency.',
    '**Target cell (codocyte)** = excess membrane (↑ surface:volume) → **thalassaemia, HbE, liver disease, asplenia**; **target cells and HbE are very common in Thailand**.',
    '**Bite cell** → oxidative haemolysis (**G6PD**); **teardrop (dacrocyte)** → **myelofibrosis/marrow infiltration**; **sickle cell** → HbS polymerisation.',
    '**Acanthocyte** (irregular spikes → liver disease/abetalipoproteinaemia) vs **echinocyte/burr cell** (regular spikes → uraemia/artefact); **microcyte** (iron deficiency, thalassaemia) vs **macrocyte** (B12/folate, liver).',
  ],

  mechanism: {
    title: 'Read the shape → name the disease',
    steps: [
      { id: 's1', label: 'Spherocyte (no central pallor) → HS or warm AIHA', emphasis: 'key' },
      { id: 's2', label: 'Schistocyte (fragment) → mechanical shear: MAHA/valve', emphasis: 'key' },
      { id: 's3', label: 'Target cell → thalassaemia/HbE, liver disease, asplenia', emphasis: 'key' },
      { id: 's4', label: 'Bite cell → oxidative (G6PD); teardrop → myelofibrosis/infiltration' },
      { id: 's5', label: 'Sickle → HbS; elliptocyte → HE/SAO; acanthocyte (liver) vs echinocyte (uraemia)' },
    ],
  },

  examFindings: [
    { sign: 'Spherocytes with a positive DAT', mechanism: 'Warm autoimmune haemolytic anaemia (negative DAT → hereditary spherocytosis)', significance: 'key' },
    { sign: 'Schistocytes + thrombocytopenia + high LDH', mechanism: 'Microangiopathic haemolysis (TTP/HUS/DIC) — urgent', significance: 'key' },
    { sign: 'Numerous target cells in a Thai patient', mechanism: 'Thalassaemia/HbE (increased surface:volume)', significance: 'key' },
    { sign: 'Teardrop cells + leukoerythroblastic film', mechanism: 'Myelofibrosis / marrow infiltration', significance: 'supportive' },
    { sign: 'Bite cells after an oxidant drug', mechanism: 'G6PD deficiency (Heinz bodies plucked by spleen)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Spherocytes on the film', meaning: 'Do the DAT — positive = AIHA, negative (± family history) = hereditary spherocytosis' },
    { clue: 'Schistocytes + low platelets + high LDH', meaning: 'Microangiopathic haemolytic anaemia → coagulation screen, consider TTP/HUS/DIC' },
    { clue: 'Target cells + microcytosis in a SE-Asian patient', meaning: 'Thalassaemia/HbE → haemoglobin electrophoresis' },
    { clue: 'Teardrop cells + dry marrow tap', meaning: 'Myelofibrosis' },
  ],

  treatment: [
    { logic: 'The smear directs the workup, not the diagnosis', detail: 'Spherocytes → DAT; schistocytes → urgent coagulation/TTP assessment; targets/microcytes → Hb electrophoresis. Shape is a signpost.' },
  ],

  mnemonics: [
    { hook: 'Shape → disease: Sphere = HS/AIHA, Schisto = shear, Target = thal/HbE/liver, Bite = G6PD, Tear = fibrosis', expansion: ['Acanthocyte = liver/abetalipoproteinaemia (irregular spikes)', 'Echinocyte/burr = uraemia (regular spikes)', 'Target cells & HbE are common in Thailand'] },
  ],

  traps: [
    {
      questionCategory: 'Acanthocyte vs echinocyte',
      wrongInstinct: 'Spur cells and burr cells are the same and mean the same thing',
      rightAnswer: 'Acanthocytes (irregular spikes) = liver disease/abetalipoproteinaemia; echinocytes/burr cells (regular even spikes) = uraemia or artefact',
      why: 'Regularity of the projections is the discriminator — irregular = pathological acanthocyte, regular = often uraemia/artefact.',
    },
    {
      questionCategory: 'Spherocytes on the film',
      wrongInstinct: 'Spherocytes always mean hereditary spherocytosis',
      rightAnswer: 'Spherocytes also occur in warm autoimmune haemolytic anaemia — the DAT distinguishes them',
      why: 'Both mechanisms remove membrane; a positive direct antiglobulin test points to AIHA, a negative one to HS.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient has fragmented red cells (schistocytes), thrombocytopenia and a raised LDH. These fragments are produced by:',
      options: [
        { id: 'a', text: 'Oxidative denaturation of haemoglobin' },
        { id: 'b', text: 'Mechanical shearing in a microangiopathy' },
        { id: 'c', text: 'Membrane loss by splenic macrophages' },
        { id: 'd', text: 'HbS polymerisation' },
      ],
      answerId: 'b',
      explanation: 'Schistocytes form when red cells are sheared by fibrin strands or turbulent flow (MAHA, mechanical valves); with low platelets think TTP/HUS/DIC.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A young Thai man has microcytosis with numerous target cells (codocytes) and a raised HbE on electrophoresis. Target cells form because of:',
      options: [
        { id: 'a', text: 'An increased surface-area-to-volume ratio of the membrane' },
        { id: 'b', text: 'Oxidative Heinz-body formation' },
        { id: 'c', text: 'Fibrin shearing' },
        { id: 'd', text: 'Complement-mediated lysis' },
      ],
      answerId: 'a',
      explanation: 'Target cells have excess membrane relative to cytoplasm (↑ surface:volume), seen in thalassaemia/HbE (common in Thailand), liver disease and asplenia.',
      tests: 'disease',
    },
  ],
};

export default hhlRbcMorphologyShapes;
