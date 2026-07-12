import type { Lecture } from '../../lib/types';

export const hhlHematopoiesisSites: Lecture = {
  id: 'hhl-hematopoiesis-sites',
  title: 'Hematopoiesis: Sites & Ontogeny',
  system: 'heme',
  source: 'L1 — Development of Blood & Lymphatics',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L1 Blood & lymph dev' },
    { kind: 'mechanism', label: 'Yolk sac → liver → marrow' },
    { kind: 'investigation', label: 'EPO · TPO · G-CSF' },
    { kind: 'disease', label: 'Extramedullary hematopoiesis' },
  ],

  highYield: [
    'Sites shift through ontogeny: **yolk sac (mesoblastic, ~week 3)** → **liver/spleen (hepatic, 2nd trimester)** → **bone marrow (medullary, from ~5th month)**, which is the **sole site of haematopoiesis after birth**.',
    '**HSCs self-renew** and split into two arms: the **common myeloid progenitor (CMP)** → RBCs, platelets, granulocytes, monocytes; and the **common lymphoid progenitor (CLP)** → B, T and NK cells.',
    'Lineage-specific growth factors: **EPO (from the kidney) → erythropoiesis**, **TPO (from the liver) → platelets**, **G-CSF → neutrophils**.',
    'Active **red marrow** retreats with age to the **axial skeleton** (vertebrae, sternum, ribs, pelvis, proximal femur/humerus); the rest becomes fatty **yellow marrow** that can reconvert under stress.',
    'When marrow cannot meet demand (**β-thalassaemia, myelofibrosis**), the **liver and spleen resume blood formation** = **extramedullary haematopoiesis** → hepatosplenomegaly.',
  ],

  mechanism: {
    title: 'Ontogeny of blood formation: yolk sac → liver → marrow',
    steps: [
      { id: 's1', label: 'Yolk-sac blood islands (mesoblastic, ~wk 3) — primitive nucleated RBCs', emphasis: 'key' },
      { id: 's2', label: 'Hepatic phase: liver ± spleen, peaks in the 2nd trimester' },
      { id: 's3', label: 'Medullary phase: bone marrow from ~5th month → sole site after birth', emphasis: 'key' },
      { id: 's4', label: 'HSC → CMP + CLP under EPO / TPO / G-CSF', emphasis: 'key' },
      { id: 's5', label: 'Marrow failure → extramedullary haematopoiesis; pancytopenia if unmet', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Chipmunk/"hair-on-end" skull + hepatosplenomegaly in β-thalassaemia', mechanism: 'Marrow expansion + extramedullary haematopoiesis', significance: 'key' },
    { sign: 'Teardrop cells + leukoerythroblastic film', mechanism: 'Marrow infiltration/myelofibrosis driving extramedullary haematopoiesis', significance: 'key' },
    { sign: 'Marrow biopsy taken from the posterior iliac crest in adults', mechanism: 'Red (active) marrow persists in the axial skeleton', significance: 'supportive' },
    { sign: 'High haematocrit with raised EPO at altitude', mechanism: 'Renal EPO response to hypoxia', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Nucleated RBCs + immature myeloid cells (leukoerythroblastic picture)', meaning: 'Marrow infiltration driving extramedullary haematopoiesis' },
    { clue: 'Teardrop poikilocytes with a dry (unaspirable) marrow tap', meaning: 'Myelofibrosis' },
    { clue: 'Low EPO in an anaemic patient with renal failure', meaning: 'Loss of renal EPO production' },
    { clue: 'Hepatosplenomegaly + expanded marrow in a child with severe anaemia', meaning: 'Extramedullary haematopoiesis (e.g. thalassaemia)' },
  ],

  treatment: [
    { logic: 'Target the cause of ineffective haematopoiesis', detail: 'Transfusion + iron chelation in thalassaemia; recombinant EPO for renal anaemia; G-CSF for neutropenia. Extramedullary haematopoiesis regresses once effective erythropoiesis is restored.' },
  ],

  mnemonics: [
    { hook: 'Young Liver Bones make blood: Yolk sac → Liver → Bone marrow', expansion: ['Y-L-B in order through gestation', 'After birth = marrow only', 'EPO = kidney, TPO = liver, G-CSF = neutrophils'] },
  ],

  traps: [
    {
      questionCategory: 'Site of haematopoiesis at a given age',
      wrongInstinct: 'The bone marrow is the first site of blood formation',
      rightAnswer: 'The yolk sac (blood islands) is first (~week 3); marrow takes over only from ~the 5th month and is the sole site after birth',
      why: 'Order is yolk sac → liver/spleen → marrow — a favourite embryology sequencing question.',
    },
    {
      questionCategory: 'Growth-factor source',
      wrongInstinct: 'EPO and TPO are made in the same organ',
      rightAnswer: 'EPO is made in the KIDNEY; TPO is made mainly in the LIVER',
      why: 'Renal peritubular cells sense hypoxia to release EPO — which is why chronic kidney disease causes anaemia.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'At which site does essentially all haematopoiesis occur after birth in a healthy infant?',
      options: [
        { id: 'a', text: 'Yolk sac' },
        { id: 'b', text: 'Liver' },
        { id: 'c', text: 'Bone marrow' },
        { id: 'd', text: 'Spleen' },
      ],
      answerId: 'c',
      explanation: 'Haematopoiesis moves yolk sac (wk 3) → liver/spleen (fetal) → bone marrow, which becomes the sole site from around birth onward.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient with chronic kidney disease has a normocytic anaemia with an inappropriately low erythropoietin. This hormone deficiency reflects lost production in the:',
      options: [
        { id: 'a', text: 'Liver' },
        { id: 'b', text: 'Kidney' },
        { id: 'c', text: 'Spleen' },
        { id: 'd', text: 'Bone marrow' },
      ],
      answerId: 'b',
      explanation: 'EPO is produced by renal peritubular interstitial cells in response to hypoxia; CKD reduces EPO and causes anaemia. TPO (for platelets) is hepatic.',
      tests: 'mechanism',
    },
  ],
};

export default hhlHematopoiesisSites;
