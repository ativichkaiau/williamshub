import type { Lecture } from '../../lib/types';

export const fcp1BleedingCoagulationTests: Lecture = {
  id: 'fcp1-bleeding-coagulation-tests',
  title: 'Interpreting PT, aPTT & Platelets — The Pattern Grid',
  system: 'clinical',
  source: 'L23 — Bleeding Tendency',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L23 Bleeding Tendency' },
    { kind: 'disease', label: 'Factor deficiency vs inhibitor' },
    { kind: 'investigation', label: 'PT · aPTT · mixing study' },
    { kind: 'mechanism', label: 'Extrinsic/intrinsic/common' },
  ],

  highYield: [
    '**PT tests the extrinsic and common pathways (VII, X, V, II, fibrinogen)** and is reported as the INR — sensitive to **warfarin, liver disease and vitamin K deficiency**. **aPTT tests the intrinsic and common pathways (XII, XI, IX, VIII plus the common factors)** — abnormal with **heparin, hemophilia, von Willebrand disease and lupus anticoagulant**. See [[fcp1-bleeding-primary-vs-secondary]].',
    '**Read the pattern grid.** **Isolated high PT** → factor VII, early warfarin/vitamin K deficiency, or early liver disease. **Isolated high aPTT** → intrinsic factor problem (hemophilia, vWD), heparin, or lupus anticoagulant. **Both high** → common pathway, severe liver disease, DIC, or warfarin excess.',
    '**Normal PT and aPTT with real bleeding** still leaves **platelet disorders, mild von Willebrand disease, factor XIII deficiency and vascular causes** — the screen does not exclude a bleeding tendency (assess it in [[fcp1-bleeding-assessment-tool]]).',
    '**The mixing study resolves a prolonged aPTT: mix patient plasma 1:1 with normal plasma.** **Correction means a factor deficiency** (the missing factor was replaced); **failure to correct means an inhibitor** (for example lupus anticoagulant or a factor VIII inhibitor). See [[hhl-coagulation-disorders]].',
    '**DIC = low platelets + high PT + high aPTT + low fibrinogen + high D-dimer** in a sick patient — a consumptive emergency. See [[hhl-dic-thrombosis]] and [[hhl-primary-hemostasis-disorders]].',
  ],

  mechanism: {
    title: 'Which test is abnormal, then the mixing study',
    steps: [
      { id: 's1', label: 'PT = extrinsic + common (VII, X, V, II, fibrinogen)', emphasis: 'key' },
      { id: 's2', label: 'aPTT = intrinsic + common (XII, XI, IX, VIII + common factors)', emphasis: 'key' },
      { id: 's3', label: 'Read the grid: which of PT / aPTT / platelets is abnormal', emphasis: 'key' },
      { id: 's4', label: 'Prolonged aPTT → mixing study: corrects = deficiency, no correction = inhibitor', emphasis: 'key' },
      { id: 's5', label: 'High PT + high aPTT + low platelets + low fibrinogen + high D-dimer = DIC', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Prolonged aPTT that corrects on a 1:1 mix', mechanism: 'Factor deficiency (hemophilia or von Willebrand disease)', significance: 'key' },
    { sign: 'Prolonged aPTT that fails to correct on mixing', mechanism: 'An inhibitor — lupus anticoagulant or a factor VIII inhibitor', significance: 'key' },
    { sign: 'Both PT and aPTT prolonged', mechanism: 'Common pathway, liver disease, DIC, or warfarin', significance: 'key' },
    { sign: 'Normal PT, aPTT and platelets despite clear bleeding', mechanism: 'Platelet function defect, mild vWD, or factor XIII deficiency', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Isolated prolonged PT with a normal aPTT', meaning: 'Factor VII, early vitamin K deficiency/warfarin, or early liver disease' },
    { clue: 'Isolated prolonged aPTT with a normal PT', meaning: 'Hemophilia A/B, von Willebrand disease, heparin, or lupus anticoagulant — do a mixing study' },
    { clue: 'High PT + high aPTT + thrombocytopenia + high D-dimer + low fibrinogen', meaning: 'Disseminated intravascular coagulation' },
    { clue: 'Bleeding with entirely normal PT, aPTT and platelet count', meaning: 'Send vWF studies, platelet function testing and a factor XIII assay' },
  ],

  treatment: [
    { logic: 'Let the PT/aPTT/platelet pattern plus the mixing study direct management', detail: 'Replace the specific factor for a deficiency; an inhibitor is managed differently, with bypassing agents or immunosuppression rather than simple factor replacement.' },
    { logic: 'Treat DIC by treating its trigger and supporting with blood products', detail: 'Address the sepsis, obstetric or malignant cause and give platelets, fresh frozen plasma and cryoprecipitate as guided by the bleeding and the labs.' },
  ],

  mnemonics: [
    { hook: 'PT = extrinsic (Play Tennis outside); aPTT = intrinsic (Table Tennis inside)', expansion: ['PT for the extrinsic pathway and warfarin', 'aPTT for the intrinsic pathway and heparin'] },
    { hook: 'Mixing study: corrects = deficiency, stays prolonged = inhibitor', expansion: ['Correction replaces a missing factor', 'No correction means something is blocking the assay'] },
  ],

  traps: [
    {
      questionCategory: 'Interpreting a prolonged aPTT',
      wrongInstinct: 'Assume an isolated prolonged aPTT always means a factor deficiency and a bleeding risk',
      rightAnswer: 'Do a mixing study — a lupus anticoagulant prolongs the aPTT, is prothrombotic rather than bleeding, and fails to correct on mixing',
      why: 'Correction indicates a deficiency, whereas failure to correct indicates an inhibitor, which changes both the diagnosis and the risk.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient in septic shock is oozing from every venepuncture site. Labs show a low platelet count, prolonged PT and aPTT, a low fibrinogen and a markedly raised D-dimer. The most likely diagnosis is:',
      options: [
        { id: 'a', text: 'Hemophilia A' },
        { id: 'b', text: 'Immune thrombocytopenia' },
        { id: 'c', text: 'Disseminated intravascular coagulation' },
        { id: 'd', text: 'Von Willebrand disease' },
      ],
      answerId: 'c',
      explanation: 'Consumption of platelets and clotting factors with a low fibrinogen and high D-dimer in a septic patient is the classic pattern of disseminated intravascular coagulation.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'An asymptomatic patient has an isolated prolonged aPTT. On a 1:1 mix with normal plasma, the aPTT does NOT correct. This result indicates:',
      options: [
        { id: 'a', text: 'A factor deficiency such as hemophilia' },
        { id: 'b', text: 'An inhibitor, for example a lupus anticoagulant' },
        { id: 'c', text: 'Vitamin K deficiency' },
        { id: 'd', text: 'A normal, expected finding' },
      ],
      answerId: 'b',
      explanation: 'Failure to correct on mixing points to an inhibitor rather than a deficiency; a lupus anticoagulant is a common cause and is associated with thrombosis, not bleeding.',
      tests: 'investigation',
    },
  ],
};

export default fcp1BleedingCoagulationTests;
