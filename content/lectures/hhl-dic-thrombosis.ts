import type { Lecture } from '../../lib/types';

export const hhlDicThrombosis: Lecture = {
  id: 'hhl-dic-thrombosis',
  title: 'DIC & Bleeding-vs-Thrombosis Approach',
  system: 'heme',
  source: 'L14 — Platelet & Hemostatic Disorders',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L14 Hemostatic Disorders' },
    { kind: 'disease', label: 'DIC · thrombophilia' },
    { kind: 'mechanism', label: 'Consumptive coagulopathy' },
    { kind: 'investigation', label: 'PT/aPTT · fibrinogen · D-dimer' },
  ],

  highYield: [
    '**DIC = systemic coagulation activation** (sepsis, obstetric, malignancy, trauma) → **consumes platelets and factors** → **simultaneous bleeding AND microthrombosis**.',
    'DIC labs: **↓ platelets, ↑ PT and aPTT, ↓ fibrinogen, ↑ D-dimer, schistocytes** on the smear — treat by **correcting the cause** plus supportive product replacement.',
    'Approach any bleeder with the **screening panel — platelet count, PT, aPTT, fibrinogen (± D-dimer)** — to localise **primary** (platelet/vWF, [[hhl-primary-hemostasis-disorders]]) vs **secondary** (coagulation factor, [[hhl-coagulation-disorders]]) vs **consumptive** (DIC).',
    '**Thrombophilia** (the opposite problem): **factor V Leiden** (activated protein C resistance, commonest), prothrombin G20210A, protein C/S/antithrombin deficiency, and **antiphospholipid syndrome** (arterial + venous thrombosis, fetal loss, non-correcting ↑ aPTT).',
  ],

  mechanism: {
    title: 'Systemic trigger consumes everything → bleed and clot',
    steps: [
      { id: 's1', label: 'Trigger (sepsis, obstetric, malignancy, trauma) → massive tissue-factor release', emphasis: 'key' },
      { id: 's2', label: 'Widespread microthrombi consume platelets and clotting factors', emphasis: 'danger' },
      { id: 's3', label: 'Consumption + secondary fibrinolysis → ↓ fibrinogen, ↑ D-dimer, ↓ platelets' },
      { id: 's4', label: 'Simultaneous bleeding and organ ischaemia', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Oozing from venepuncture sites/lines plus acral (digital) ischaemia', mechanism: 'DIC produces bleeding and microthrombosis at the same time', significance: 'key' },
    { sign: '↓ platelets, ↑ PT, ↑ aPTT, ↓ fibrinogen, ↑ D-dimer', mechanism: 'Consumptive coagulopathy exhausts platelets and factors', significance: 'key' },
    { sign: 'Schistocytes on the blood film', mechanism: 'Red cells sheared through fibrin-filled microvessels (microangiopathy)', significance: 'supportive' },
    { sign: 'Underlying sepsis, placental abruption, or malignancy', mechanism: 'The DIC trigger — always look for and treat it', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Falling fibrinogen + rising D-dimer + falling platelets in a sick patient', meaning: 'Disseminated intravascular coagulation' },
    { clue: 'Bleeding history + platelet count/PT/aPTT/fibrinogen panel', meaning: 'Localises primary vs secondary vs consumptive defect' },
    { clue: 'Normal PT/aPTT/fibrinogen with isolated thrombocytopenia + schistocytes', meaning: 'Suggests TTP/HUS rather than DIC (coagulation screen is preserved)' },
    { clue: '↑ aPTT that fails to correct + thrombosis + fetal loss', meaning: 'Antiphospholipid syndrome (a thrombophilia, not a bleeding state)' },
  ],

  treatment: [
    { logic: 'Treat the underlying cause — the only definitive therapy for DIC', detail: 'Source control and treating sepsis/obstetric/malignant triggers is what turns off the consumption.' },
    { logic: 'Support with blood products if bleeding', detail: 'Platelets, FFP, and cryoprecipitate (fibrinogen); reserve heparin for thrombosis-predominant or chronic DIC.' },
    { logic: 'Anticoagulate thrombophilia by risk', detail: 'Provoked/recurrent VTE per standard duration; antiphospholipid syndrome favours warfarin (avoid DOACs in triple-positive disease).' },
  ],

  mnemonics: [
    { hook: 'DIC: everything down except the clot-breakdown markers up', expansion: ['Down: platelets and fibrinogen', 'Up: PT, aPTT and D-dimer', 'Smear: schistocytes'] },
    { hook: 'STOP Making New Thrombi', expansion: ['Sepsis', 'Trauma / Transfusion reaction', 'Obstetric complications', 'Pancreatitis / Malignancy', 'Nephrotic and other severe triggers'] },
  ],

  traps: [
    {
      questionCategory: 'DIC management',
      wrongInstinct: 'Reach first for heparin (microthrombi) or blind product transfusion',
      rightAnswer: 'Treat the underlying trigger; give products only if bleeding, heparin only if thrombosis predominates',
      why: 'DIC is a downstream effect — it does not resolve until the source (sepsis, abruption, malignancy) is controlled.',
    },
    {
      questionCategory: 'DIC vs TTP/HUS',
      wrongInstinct: 'Any thrombocytopenia with schistocytes is DIC',
      rightAnswer: 'TTP/HUS has a normal PT, aPTT and fibrinogen; DIC prolongs PT/aPTT with low fibrinogen and high D-dimer',
      why: 'The coagulation screen separates consumptive DIC from the thrombotic microangiopathies.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A septic patient oozes from cannula sites and has dusky toes. Labs show low platelets, prolonged PT and aPTT, low fibrinogen, and high D-dimer. Most likely diagnosis?',
      options: [
        { id: 'a', text: 'Immune thrombocytopenia' },
        { id: 'b', text: 'Disseminated intravascular coagulation' },
        { id: 'c', text: 'Haemophilia A' },
        { id: 'd', text: 'Von Willebrand disease' },
      ],
      answerId: 'b',
      explanation: 'Simultaneous bleeding and microthrombosis with consumption of platelets and factors (low fibrinogen, high D-dimer) is DIC, here triggered by sepsis.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'What is the cornerstone of managing disseminated intravascular coagulation?',
      options: [
        { id: 'a', text: 'Routine full-dose heparin for everyone' },
        { id: 'b', text: 'Treating the underlying trigger, with product support if bleeding' },
        { id: 'c', text: 'Antifibrinolytics as first-line therapy' },
        { id: 'd', text: 'Splenectomy' },
      ],
      answerId: 'b',
      explanation: 'DIC is secondary to another process; controlling the trigger (e.g. sepsis, obstetric cause) is definitive, with platelets/FFP/cryoprecipitate for active bleeding and heparin reserved for thrombosis-predominant disease.',
      tests: 'treatment',
    },
  ],
};

export default hhlDicThrombosis;
