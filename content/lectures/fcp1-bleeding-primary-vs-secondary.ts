import type { Lecture } from '../../lib/types';

export const fcp1BleedingPrimaryVsSecondary: Lecture = {
  id: 'fcp1-bleeding-primary-vs-secondary',
  title: 'Bleeding Tendency — Primary vs Secondary Haemostatic Defect',
  system: 'clinical',
  source: 'L23 — Bleeding Tendency',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L23 Bleeding Tendency' },
    { kind: 'disease', label: 'Platelet/vessel vs coagulation' },
    { kind: 'exam', label: 'Mucocutaneous vs deep bleeding' },
    { kind: 'mechanism', label: 'Two-stage haemostasis' },
  ],

  highYield: [
    '**The pattern of bleeding localises the defect.** A **primary haemostatic defect** (platelets, von Willebrand factor, or vessel wall) gives **mucocutaneous, superficial bleeding**; a **secondary haemostatic defect** (coagulation factors) gives **deep bleeding**. Tests are interpreted in [[fcp1-bleeding-coagulation-tests]].',
    '**Primary (platelet/vessel):** **petechiae, purpura, epistaxis, gum bleeding, menorrhagia** and **immediate prolonged bleeding after a cut**. Causes: thrombocytopenia (ITP, marrow, sequestration, consumption), platelet dysfunction (aspirin/NSAIDs, uremia, von Willebrand disease), vascular defects. See [[hhl-primary-hemostasis-disorders]].',
    '**Secondary (coagulation factors):** **hemarthrosis, deep muscle and retroperitoneal hematomas** and **delayed rebleeding** after initial haemostasis — the classic hemophilia picture. Causes: hemophilia A/B, liver disease, vitamin K deficiency/warfarin, DIC. See [[hhl-coagulation-disorders]] and [[hhl-dic-thrombosis]].',
    '**Petechiae are the tell-tale of a primary defect** and are **not produced by a pure coagulation-factor deficiency** — deep hematomas and hemarthroses are.',
    '**Von Willebrand disease bridges both** (von Willebrand factor carries factor VIII) but presents predominantly with a mucocutaneous, primary-type pattern. Assessing significance is covered in [[fcp1-bleeding-assessment-tool]].',
  ],

  mechanism: {
    title: 'Two stages of haemostasis, two bleeding patterns',
    steps: [
      { id: 's1', label: 'Primary haemostasis = platelet plug (platelets, vWF, vessel wall)', emphasis: 'key' },
      { id: 's2', label: 'Secondary haemostasis = coagulation cascade → fibrin', emphasis: 'key' },
      { id: 's3', label: 'Primary defect → mucocutaneous, petechiae, immediate bleeding', emphasis: 'key' },
      { id: 's4', label: 'Secondary defect → deep hematomas, hemarthrosis, delayed rebleeding', emphasis: 'key' },
      { id: 's5', label: 'Critical-site bleed (intracranial, airway) → resuscitate & correct urgently', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Petechiae, purpura and mucosal (gum/nose) bleeding', mechanism: 'Primary — platelet or vessel-wall defect', significance: 'key' },
    { sign: 'Hemarthrosis and deep muscle hematoma', mechanism: 'Secondary — coagulation factor deficiency', significance: 'key' },
    { sign: 'Immediate prolonged bleeding after a cut vs delayed rebleeding', mechanism: 'Platelet-type is immediate; coagulation-type is delayed', significance: 'supportive' },
    { sign: 'Widespread bleeding with oozing from venepuncture sites in a sick patient', mechanism: 'DIC — consumption of platelets and factors', significance: 'key' },
  ],

  investigations: [
    { clue: 'Platelet count plus PT and aPTT', meaning: 'The first split between a primary and a secondary defect' },
    { clue: 'Petechiae with a low platelet count', meaning: 'Thrombocytopenia (primary defect)' },
    { clue: 'Mucosal bleeding with a normal platelet count', meaning: 'Platelet function defect or von Willebrand disease' },
    { clue: 'Prolonged aPTT (or PT) with a normal platelet count', meaning: 'Coagulation factor defect (secondary) — see [[fcp1-bleeding-coagulation-tests]]' },
  ],

  treatment: [
    { logic: 'Identify the compartment to target therapy', detail: 'Primary defects respond to platelet transfusion, desmopressin, or stopping the offending drug; secondary defects need factor replacement, fresh frozen plasma, or vitamin K.' },
    { logic: 'Resuscitate and correct urgently for a critical-site or major bleed', detail: 'Support airway, breathing and circulation, control the bleeding, replace the deficient component, and reverse any anticoagulant.' },
  ],

  mnemonics: [
    { hook: 'Platelet = superficial; Factor = deep', expansion: ['Platelet/vessel: petechiae, mucosa, immediate bleeding', 'Coagulation factor: joints, muscles, delayed rebleeding'] },
    { hook: 'Petechiae never come from a pure factor deficiency', expansion: ['See petechiae → think platelets or vessels'] },
  ],

  traps: [
    {
      questionCategory: 'Pattern of bleeding',
      wrongInstinct: 'Attribute a hemarthrosis to a platelet problem',
      rightAnswer: 'Hemarthrosis and deep muscle bleeds point to a coagulation-factor (secondary) defect such as hemophilia',
      why: 'Petechiae and mucosal bleeding are primary; deep and joint bleeding are secondary — the site pattern localises the defect.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 5-year-old boy has recurrent knee hemarthroses and deep muscle hematomas, a normal platelet count and a prolonged aPTT. The defect lies in:',
      options: [
        { id: 'a', text: 'Primary haemostasis (platelet plug formation)' },
        { id: 'b', text: 'The vessel wall' },
        { id: 'c', text: 'Secondary haemostasis (the coagulation cascade)' },
        { id: 'd', text: 'Fibrinolysis' },
      ],
      answerId: 'c',
      explanation: 'Deep joint and muscle bleeding with normal platelets and a prolonged aPTT is a secondary (coagulation-factor) defect — the hemophilia pattern.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A woman presents with petechiae over the shins, gum bleeding and epistaxis. This mucocutaneous pattern points to a defect in:',
      options: [
        { id: 'a', text: 'Primary haemostasis (platelets, von Willebrand factor, or vessel wall)' },
        { id: 'b', text: 'Factor VIII of the intrinsic pathway' },
        { id: 'c', text: 'The common pathway (factor X and prothrombin)' },
        { id: 'd', text: 'Vitamin K-dependent clotting factors' },
      ],
      answerId: 'a',
      explanation: 'Petechiae and mucosal bleeding are the signature of a primary haemostatic defect involving platelets, von Willebrand factor, or the vessel wall.',
      tests: 'exam',
    },
  ],
};

export default fcp1BleedingPrimaryVsSecondary;
