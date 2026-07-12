import type { Lecture } from '../../lib/types';

export const hhlCoagulationDisorders: Lecture = {
  id: 'hhl-coagulation-disorders',
  title: 'Coagulation Factor Disorders (Hemophilia)',
  system: 'heme',
  source: 'L14 — Platelet & Hemostatic Disorders',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L14 Hemostatic Disorders' },
    { kind: 'disease', label: 'Haemophilia A & B' },
    { kind: 'mechanism', label: 'Intrinsic pathway deficit' },
    { kind: 'investigation', label: 'PT vs aPTT · mixing study' },
  ],

  highYield: [
    'Coagulation-factor defects give a **deep, delayed** pattern: **hemarthrosis, muscle hematoma, delayed post-trauma bleeding, rebleeding** — contrast the mucocutaneous petechiae of platelet defects ([[hhl-primary-hemostasis-disorders]]).',
    '**Haemophilia A (factor VIII)** and **B (factor IX)** are **X-linked** (affect males): **↑ aPTT with normal PT, platelets and bleeding time**. Severity tracks factor level (<1% = spontaneous hemarthrosis).',
    'A **mixing study corrects with normal plasma** in factor deficiency but **fails to correct with an inhibitor**. Treat with **factor concentrate**; complication = **inhibitors** → bypassing agents or **emicizumab** (bispecific antibody bridging IXa and X).',
    'Acquired coagulopathies: **vitamin K deficiency** (↓ II, VII, IX, X + protein C/S — **PT rises first** as VII has the shortest half-life) and **liver disease** (↓ all factors except VIII → ↑ PT then ↑ aPTT).',
  ],

  mechanism: {
    title: 'Intrinsic-factor deficit → aPTT up → deep bleeding',
    steps: [
      { id: 's1', label: 'Injury triggers the intrinsic pathway (factors VIII, IX) to amplify thrombin' },
      { id: 's2', label: 'Missing factor VIII (A) or IX (B) → ↑ aPTT, PT normal', emphasis: 'key' },
      { id: 's3', label: 'Weak, delayed fibrin → bleeding into joints and muscle' },
      { id: 's4', label: 'Recurrent hemarthrosis → chronic haemophilic arthropathy', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Hemarthrosis or deep muscle hematoma in a male', mechanism: 'Coagulation-factor (secondary hemostasis) failure — the haemophilia pattern', significance: 'key' },
    { sign: '↑ aPTT with normal PT, platelets and bleeding time', mechanism: 'Isolated intrinsic-pathway factor deficiency', significance: 'key' },
    { sign: 'Mixing study corrects (vs fails to correct)', mechanism: 'Corrects = factor deficiency; fails = an inhibitor is present', significance: 'key' },
    { sign: 'Neonatal or GI bleeding with ↑ PT (then aPTT)', mechanism: 'Vitamin K deficiency — factor VII falls first', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Isolated ↑ aPTT in a bleeder that corrects on mixing', meaning: 'Haemophilia A or B → assay factor VIII and IX levels' },
    { clue: '↑ aPTT that does not correct on mixing', meaning: 'A factor inhibitor (e.g. acquired factor VIII antibody, or lupus anticoagulant)' },
    { clue: '↑ PT and ↑ aPTT with a normal factor VIII level', meaning: 'Liver disease or vitamin K deficiency (factor VIII, made by endothelium, is spared)' },
    { clue: 'PT prolonged out of proportion early', meaning: 'Vitamin K deficiency — factor VII has the shortest half-life' },
  ],

  treatment: [
    { logic: 'Replace the missing factor (VIII or IX)', detail: 'On-demand for bleeds, prophylaxis in severe disease; desmopressin raises factor VIII in mild haemophilia A.' },
    { logic: 'Manage inhibitors with bypassing agents or emicizumab', detail: 'Recombinant factor VIIa or activated PCC bypass the inhibitor; emicizumab gives effective prophylaxis, especially with inhibitors.' },
    { logic: 'Correct acquired coagulopathy at its cause', detail: 'Vitamin K (slow) for deficiency/warfarin; FFP or PCC for active bleeding and liver-disease coagulopathy.' },
  ],

  mnemonics: [
    { hook: 'Boys, joints, aPTT', expansion: ['Haemophilia is X-linked → affects boys', 'Bleeding is deep → hemarthrosis and muscle hematomas', 'Labs: isolated ↑ aPTT, normal PT'] },
    { hook: 'Vitamin K = 1972 + C and S; VII falls first', expansion: ['Factors II, VII, IX, X depend on vitamin K', 'Plus anticoagulant proteins C and S', 'Short-lived factor VII → PT rises before aPTT'] },
  ],

  traps: [
    {
      questionCategory: 'Prolonged aPTT interpretation',
      wrongInstinct: 'Assume every prolonged aPTT means a bleeding tendency',
      rightAnswer: 'Do a mixing study — correction = factor deficiency (bleeds); failure = inhibitor',
      why: 'A non-correcting aPTT can be a lupus anticoagulant, which paradoxically causes thrombosis, not bleeding.',
    },
    {
      questionCategory: 'Localising the defect',
      wrongInstinct: 'Treat isolated ↑ PT and isolated ↑ aPTT as the same problem',
      rightAnswer: '↑ PT alone = factor VII; ↑ aPTT alone = VIII/IX/XI; both = common pathway, liver, vitamin K or DIC',
      why: 'The PT/aPTT pattern localises the lesion before you order factor assays.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A boy has recurrent knee hemarthrosis. Platelet count, PT and bleeding time are normal but the aPTT is prolonged and corrects on mixing with normal plasma. What does this indicate?',
      options: [
        { id: 'a', text: 'A clotting-factor inhibitor' },
        { id: 'b', text: 'A factor deficiency such as haemophilia' },
        { id: 'c', text: 'Von Willebrand disease with low ristocetin cofactor only' },
        { id: 'd', text: 'Immune thrombocytopenia' },
      ],
      answerId: 'b',
      explanation: 'An isolated prolonged aPTT that corrects on mixing indicates a factor deficiency; with hemarthrosis in a male this is haemophilia A or B — confirmed by factor VIII/IX assays.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A patient with severe haemophilia A develops an inhibitor and bleeds despite factor VIII. Which option provides effective prophylaxis in this setting?',
      options: [
        { id: 'a', text: 'Higher-dose standard factor VIII alone' },
        { id: 'b', text: 'Emicizumab' },
        { id: 'c', text: 'Aspirin' },
        { id: 'd', text: 'Vitamin K' },
      ],
      answerId: 'b',
      explanation: 'Emicizumab is a bispecific antibody that bridges factor IXa and factor X, mimicking factor VIII; it works even when inhibitors neutralise infused factor VIII.',
      tests: 'treatment',
    },
  ],
};

export default hhlCoagulationDisorders;
