import type { Lecture } from '../../lib/types';

export const hhlMultipleMyeloma: Lecture = {
  id: 'hhl-multiple-myeloma',
  title: 'Multiple Myeloma',
  system: 'heme',
  source: 'L13 — Myeloproliferative Neoplasms, MM & CLL',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L13 MPN · MM · CLL' },
    { kind: 'disease', label: 'Multiple myeloma' },
    { kind: 'mechanism', label: 'Clonal plasma cells' },
    { kind: 'investigation', label: 'M-protein · electrophoresis' },
  ],

  highYield: [
    '**Malignant clonal PLASMA cells** in marrow secreting a **monoclonal immunoglobulin (M-protein / paraprotein)**. Diagnosis needs **clonal marrow plasma cells ≥10%** plus a myeloma-defining event.',
    '**CRAB** end-organ damage: **hyperCalcaemia**, **Renal impairment** (light-chain cast nephropathy), **Anaemia** (marrow replacement), **Bone** lytic lesions/pain (**punched-out**, no sclerotic rim). Hypercalcaemia and renal failure are **emergencies**.',
    'Investigations: **serum + urine protein electrophoresis (M-spike)**, serum free light chains, **Bence–Jones protein** (urinary free light chains — **missed by dipstick**), **rouleaux** on film, **very high ESR**, β2-microglobulin for staging.',
    '**Immunoparesis** (suppression of normal immunoglobulins) → **recurrent infection**, a leading cause of death.',
    'Distinguish **MGUS** (M-protein <30 g/L, <10% plasma cells, **NO CRAB**) and **smouldering myeloma** — both lack end-organ damage.',
  ],

  mechanism: {
    title: 'Clonal plasma cell → M-protein + osteolysis + organ damage',
    steps: [
      { id: 's1', label: 'Clonal plasma-cell expansion in marrow', emphasis: 'key' },
      { id: 's2', label: 'Secretes monoclonal Ig / free light chains (M-protein)', emphasis: 'key' },
      { id: 's3', label: 'Light chains → cast nephropathy → renal failure', emphasis: 'danger' },
      { id: 's4', label: 'RANKL osteoclast activation → lytic bone + hypercalcaemia', emphasis: 'danger' },
      { id: 's5', label: 'Vertebral collapse → spinal cord compression', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Bone pain + punched-out lytic skull lesions (no sclerotic rim)', mechanism: 'Osteoclast-mediated osteolysis', significance: 'key' },
    { sign: 'Rouleaux on the film + very high ESR', mechanism: 'High paraprotein coating red cells', significance: 'key' },
    { sign: 'Hypercalcaemia (stones, bones, groans, psychiatric moans)', mechanism: 'Bone resorption', significance: 'key' },
    { sign: 'Renal impairment', mechanism: 'Light-chain cast nephropathy', significance: 'key' },
    { sign: 'New back pain with neurological signs', mechanism: 'Vertebral collapse / cord compression', significance: 'key' },
  ],

  investigations: [
    { clue: 'Serum/urine electrophoresis shows a monoclonal M-spike', meaning: 'Paraprotein of myeloma' },
    { clue: 'Urinary Bence–Jones protein, dipstick-negative', meaning: 'Free light-chain excretion (dipstick detects albumin, not light chains)' },
    { clue: 'Marrow ≥10% clonal plasma cells + CRAB', meaning: 'Multiple myeloma' },
    { clue: 'M-protein <30 g/L, <10% plasma cells, no CRAB', meaning: 'MGUS (not myeloma)' },
  ],

  treatment: [
    { logic: 'Treat the clone', detail: 'Proteasome inhibitor (bortezomib) / IMiD (lenalidomide) / anti-CD38 (daratumumab)-based regimens ± autologous stem-cell transplant.' },
    { logic: 'Manage the emergencies', detail: 'Hydration + bisphosphonates for hypercalcaemia; urgent MRI + dexamethasone/radiotherapy for cord compression; protect the kidneys.' },
    { logic: 'Supportive care', detail: 'Bisphosphonates for bone disease; infection prophylaxis and vaccination for immunoparesis.' },
  ],

  mnemonics: [
    { hook: 'CRAB: Calcium↑, Renal, Anaemia, Bones', expansion: ['Punched-out lytic skull lesions', 'Bence–Jones light chains', 'Rouleaux + very high ESR'] },
    { hook: 'Old bones, bad kidneys, big M-spike = myeloma', expansion: ['MGUS = M-spike but NO CRAB', 'Immunoparesis → infection'] },
  ],

  traps: [
    {
      questionCategory: 'Appearance of myeloma bone disease',
      wrongInstinct: 'Myeloma bone lesions are osteoblastic/sclerotic and light up on a bone scan',
      rightAnswer: 'Myeloma causes purely LYTIC "punched-out" lesions that are often bone-scan NEGATIVE — use skeletal survey / MRI / PET',
      why: 'It is osteoclast-driven with suppressed osteoblasts, so there is no sclerotic reaction for a classic bone scan to detect.',
    },
    {
      questionCategory: 'MGUS vs myeloma',
      wrongInstinct: 'Any monoclonal M-protein means multiple myeloma',
      rightAnswer: 'Without CRAB end-organ damage and with <10% plasma cells it is MGUS (or smouldering myeloma)',
      why: 'The M-spike alone is common and often benign; it is end-organ damage that defines myeloma.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An older patient has anaemia, back pain, calcium 3.0 mmol/L, high creatinine and rouleaux. Urine dipstick is negative for protein, yet a 24-hour collection shows heavy proteinuria. Best explanation?',
      options: [
        { id: 'a', text: 'Bence–Jones light chains (missed by dipstick)' },
        { id: 'b', text: 'Nephrotic albuminuria' },
        { id: 'c', text: 'Microscopic haematuria' },
        { id: 'd', text: 'Normal physiological proteinuria' },
      ],
      answerId: 'a',
      explanation: 'Urine dipstick detects albumin, not immunoglobulin light chains, so heavy Bence–Jones (free light chain) proteinuria is dipstick-negative but shows on quantification/electrophoresis — classic for myeloma.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A patient with known myeloma develops new severe back pain, leg weakness and urinary retention. Most appropriate immediate step?',
      options: [
        { id: 'a', text: 'Outpatient physiotherapy referral' },
        { id: 'b', text: 'Urgent MRI of the spine with corticosteroids (± radiotherapy)' },
        { id: 'c', text: 'Repeat serum electrophoresis and review in a week' },
        { id: 'd', text: 'Oral analgesia and reassurance' },
      ],
      answerId: 'b',
      explanation: 'These features indicate spinal cord compression from vertebral collapse — an oncological emergency needing urgent MRI plus corticosteroids and consideration of radiotherapy/surgery.',
      tests: 'treatment',
    },
  ],
};

export default hhlMultipleMyeloma;
