import type { Lecture } from '../../lib/types';

export const hhlAnticoagulants: Lecture = {
  id: 'hhl-anticoagulants',
  title: 'Anticoagulants',
  system: 'heme',
  source: 'L12 — Drugs Affecting Hemostasis',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L12 Hemostatic Drugs' },
    { kind: 'disease', label: 'Venous thromboembolism' },
    { kind: 'mechanism', label: 'Coagulation cascade targets' },
    { kind: 'treatment', label: 'Heparin · warfarin · DOAC' },
  ],

  highYield: [
    'Venous (**fibrin-rich**) thrombi are the anticoagulant target — arterial platelet-rich clots are managed with antiplatelets ([[hhl-antiplatelets]]).',
    '**Unfractionated heparin** potentiates **antithrombin** to inhibit **thrombin (IIa) and Xa** — **parenteral, rapid, monitor aPTT, reverse with protamine**; watch for **HIT** at day 5–10. **LMWH/fondaparinux** act mainly on **Xa** with predictable dosing and less monitoring.',
    '**Warfarin** inhibits **vitamin K epoxide reductase** → falls in **II, VII, IX, X plus protein C & S**; **oral, monitor INR, teratogenic, many CYP/diet interactions**. Early protein C drop can cause **skin necrosis** → **bridge with heparin**; reverse with **vitamin K ± PCC/FFP**.',
    '**DOACs**: **dabigatran = direct thrombin (IIa)** inhibitor (reverse with **idarucizumab**); **rivaroxaban/apixaban = direct Xa** inhibitors (reverse with **andexanet alfa**). Oral, fixed-dose, no routine monitoring; avoid in mechanical valves.',
  ],

  mechanism: {
    title: 'Two cascade choke points: factor Xa and thrombin (IIa)',
    steps: [
      { id: 's1', label: 'Intrinsic + extrinsic pathways converge on factor Xa', emphasis: 'key' },
      { id: 's2', label: 'Xa converts prothrombin (II) → thrombin (IIa)' },
      { id: 's3', label: 'Thrombin converts fibrinogen → fibrin clot', emphasis: 'key' },
    ],
    branches: [
      {
        fromId: 's1',
        title: 'Heparins potentiate antithrombin',
        steps: [
          { id: 'b1', label: 'UFH → antithrombin inhibits IIa + Xa (monitor aPTT; reverse protamine)' },
          { id: 'b2', label: 'LMWH / fondaparinux → mainly anti-Xa (predictable, less monitoring)' },
          { id: 'b3', label: 'HIT: anti-PF4 antibodies → thrombosis + thrombocytopenia', emphasis: 'danger' },
        ],
      },
      {
        fromId: 's2',
        title: 'Warfarin depletes vitamin K factors',
        steps: [
          { id: 'b4', label: '↓ II, VII, IX, X + protein C/S (monitor INR)' },
          { id: 'b5', label: 'Early protein C fall → transient hypercoagulability → skin necrosis', emphasis: 'danger' },
        ],
      },
      {
        fromId: 's3',
        title: 'DOACs hit the enzyme directly',
        steps: [
          { id: 'b6', label: 'Dabigatran → direct thrombin inhibitor (reverse idarucizumab)' },
          { id: 'b7', label: 'Rivaroxaban / apixaban → direct Xa inhibitors (reverse andexanet)' },
        ],
      },
    ],
  },

  examFindings: [
    { sign: 'Therapeutic aPTT prolongation on unfractionated heparin', mechanism: 'Heparin-antithrombin inhibits intrinsic-pathway thrombin generation', significance: 'key' },
    { sign: 'Platelet count falls ~30–50% at day 5–10 of heparin', mechanism: 'Immune HIT (anti-PF4/heparin IgG) — prothrombotic, not a bleeding state', significance: 'key' },
    { sign: 'Rising INR on warfarin (target 2–3)', mechanism: 'Loss of functional vitamin K-dependent factors, VII first', significance: 'key' },
    { sign: 'Skin necrosis in the first days of warfarin', mechanism: 'Protein C (short half-life) drops before the procoagulant factors', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Which test to monitor', meaning: 'aPTT for UFH, anti-Xa for LMWH, INR for warfarin; DOACs need no routine level' },
    { clue: 'Falling platelets + new thrombosis on heparin', meaning: 'HIT → stop all heparin, start a non-heparin anticoagulant (argatroban), send PF4 antibody' },
    { clue: 'INR jumps after starting an antibiotic or antifungal', meaning: 'CYP2C9 interaction potentiating warfarin' },
    { clue: 'Normal routine coagulation tests on a DOAC', meaning: 'Expected — DOACs are given at fixed doses without monitoring' },
  ],

  treatment: [
    { logic: 'Know the antidote for each agent', detail: 'Protamine for heparin; vitamin K + PCC/FFP for warfarin; idarucizumab for dabigatran; andexanet alfa for Xa inhibitors.' },
    { logic: 'Bridge warfarin initiation with heparin', detail: 'Covers the delayed onset and the transient protein C-mediated hypercoagulable window (skin necrosis).' },
    { logic: 'Choose by clinical setting', detail: 'Heparin/LMWH in pregnancy (warfarin/most DOACs are teratogenic/avoided); warfarin for mechanical valves and antiphospholipid syndrome.' },
  ],

  mnemonics: [
    { hook: 'Warfarin → PT/INR; Heparin → aPTT', expansion: ['Warfarin hits the extrinsic/common factors (II, VII, IX, X) monitored by PT/INR', 'Heparin works through antithrombin, monitored by aPTT', 'Vitamin K factors = 1972 (II, VII, IX, X)'] },
    { hook: 'Ida stops dabi, andexa stops Xa', expansion: ['Idarucizumab reverses dabigatran (direct thrombin inhibitor)', 'Andexanet alfa reverses rivaroxaban/apixaban (Xa inhibitors)', 'Protamine reverses heparin; vitamin K reverses warfarin'] },
  ],

  traps: [
    {
      questionCategory: 'Falling platelets on heparin',
      wrongInstinct: 'Treat it as a bleeding risk and transfuse platelets',
      rightAnswer: 'Recognise HIT — stop ALL heparin (including LMWH and flushes) and start a non-heparin anticoagulant',
      why: 'HIT is prothrombotic; platelet transfusion adds fuel and warfarin alone can trigger limb gangrene.',
    },
    {
      questionCategory: 'Starting warfarin',
      wrongInstinct: 'Load warfarin alone for a fresh clot',
      rightAnswer: 'Overlap with heparin until the INR is therapeutic',
      why: 'Protein C falls first, creating an early hypercoagulable window and risking warfarin skin necrosis.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'By what mechanism does unfractionated heparin produce its anticoagulant effect?',
      options: [
        { id: 'a', text: 'Directly inhibiting factor Xa without a cofactor' },
        { id: 'b', text: 'Potentiating antithrombin to inactivate thrombin and factor Xa' },
        { id: 'c', text: 'Inhibiting vitamin K epoxide reductase' },
        { id: 'd', text: 'Blocking the platelet ADP receptor' },
      ],
      answerId: 'b',
      explanation: 'Heparin binds antithrombin and accelerates its inactivation of thrombin (IIa) and factor Xa; it is monitored by aPTT and reversed by protamine.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'On day 7 of heparin a patient has a 50% platelet drop and a new DVT. What is the best next step?',
      options: [
        { id: 'a', text: 'Transfuse platelets' },
        { id: 'b', text: 'Give protamine' },
        { id: 'c', text: 'Stop heparin and start argatroban' },
        { id: 'd', text: 'Increase the heparin infusion' },
      ],
      answerId: 'c',
      explanation: 'This is heparin-induced thrombocytopenia — a prothrombotic state. Stop all heparin and anticoagulate with a non-heparin agent such as argatroban; do not transfuse platelets.',
      tests: 'treatment',
    },
  ],
};

export default hhlAnticoagulants;
