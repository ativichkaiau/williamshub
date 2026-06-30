import type { Lecture } from '../../lib/types';

export const anticoagulants: Lecture = {
  id: 'anticoagulants',
  title: 'Anticoagulants',
  system: 'cardiovascular',
  source: 'L7 — Coagulation & Hemostasis',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L7 Coagulation & Hemostasis' },
    { kind: 'disease', label: 'Venous thrombosis' },
    { kind: 'mechanism', label: 'Coagulation cascade' },
    { kind: 'treatment', label: 'Heparin / warfarin / DOAC' },
  ],

  highYield: [
    'Venous thrombi are **fibrin-rich** (low shear) → anticoagulants are key.',
    '**Heparin**: activates **antithrombin III** (↓IIa & Xa); **parenteral**, **rapid**, monitor **aPTT**, antidote **protamine**; risk **HIT**; safe in pregnancy.',
    '**Warfarin**: inhibits **vitamin K–dependent factors II, VII, IX, X**; **oral**, slow, monitor **INR/PT**, antidote **vitamin K**; **teratogenic**; CYP2C9/VKORC1 + diet interactions.',
    '**LMWH (enoxaparin)/fondaparinux**: selective **anti-Xa**, predictable, less monitoring, lower HIT.',
    '**DOACs** (rivaroxaban/apixaban = Xa; dabigatran = IIa): oral, fixed dose, no routine monitoring; first-line for **non-valvular AF** & VTE.',
  ],

  mechanism: {
    title: 'Heparin (antithrombin) vs warfarin (vitamin K factors)',
    steps: [{ id: 's1', label: 'Coagulation cascade → IIa → fibrin' }],
    branches: [
      {
        fromId: 's1',
        title: 'Heparin',
        steps: [
          { id: 'h1', label: 'Activates antithrombin III → inhibits IIa & Xa', emphasis: 'key' },
          { id: 'h2', label: 'Rapid · parenteral · aPTT · protamine' },
        ],
      },
      {
        fromId: 's1',
        title: 'Warfarin',
        steps: [
          { id: 'w1', label: '↓ vitamin K–dependent II, VII, IX, X', emphasis: 'key' },
          { id: 'w2', label: 'Slow · oral · INR · vitamin K' },
        ],
      },
      {
        fromId: 's1',
        title: 'LMWH / DOAC',
        steps: [{ id: 'd1', label: 'Selective Xa (or IIa) → predictable, no routine monitoring' }],
      },
    ],
  },

  examFindings: [
    { sign: 'Bleeding', mechanism: 'Excess anticoagulation (all agents)', significance: 'key' },
    { sign: 'HIT — thrombocytopenia + paradoxical thrombosis', mechanism: 'Immune-mediated, heparin (esp. UFH)', significance: 'key' },
    { sign: 'Fetal warfarin syndrome', mechanism: 'Warfarin crosses the placenta (teratogenic)', significance: 'key' },
    { sign: 'Warfarin skin necrosis (early)', mechanism: 'Transient protein C depletion', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'aPTT (heparin) · INR/PT (warfarin)', meaning: 'Dose monitoring' },
    { clue: 'No routine monitoring for LMWH / DOAC', meaning: 'Predictable kinetics' },
    { clue: 'Platelet count', meaning: 'Detect HIT' },
  ],

  treatment: [
    { logic: 'DVT/PE: DOAC first-line', detail: 'Or parenteral LMWH/UFH bridged to warfarin.' },
    { logic: 'Stroke prevention in non-valvular AF → DOAC', detail: 'No routine monitoring.' },
    { logic: 'Mechanical valve or moderate–severe mitral stenosis → WARFARIN', detail: 'DOACs not used here.' },
  ],

  mnemonics: [
    { hook: 'Heparin = aPTT, Antithrombin, Protamine, Pregnancy-safe', expansion: ['Activates antithrombin III', 'Reversed by protamine'] },
    { hook: 'Warfarin = INR, 2-7-9-10, Vit K, teratogenic', expansion: ['Blocks vitamin K–dependent factors', 'Reversed by vitamin K'] },
  ],

  traps: [
    {
      questionCategory: 'Monitoring & antidote',
      wrongInstinct: 'Heparin is monitored by INR and reversed by vitamin K',
      rightAnswer: 'Heparin = aPTT + protamine; Warfarin = INR/PT + vitamin K',
      why: 'Don’t swap them: heparin acts on antithrombin (aPTT, protamine antidote); warfarin blocks vitamin K–dependent factors (INR, vitamin K antidote).',
    },
    {
      questionCategory: 'DOAC vs warfarin in valvular disease',
      wrongInstinct: 'Use a DOAC for AF with a mechanical valve',
      rightAnswer: 'Mechanical valve or moderate–severe mitral stenosis → warfarin',
      why: 'DOACs are contraindicated/inferior for mechanical valves and significant mitral stenosis — warfarin is required there.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A pregnant woman needs anticoagulation for VTE. Which agent is appropriate, and how is it monitored / reversed?',
      options: [
        { id: 'a', text: 'Warfarin; INR; vitamin K' },
        { id: 'b', text: 'Heparin/LMWH; aPTT (or anti-Xa); protamine' },
        { id: 'c', text: 'Rivaroxaban; INR; vitamin K' },
        { id: 'd', text: 'Warfarin; aPTT; protamine' },
      ],
      answerId: 'b',
      explanation: 'Warfarin is teratogenic, so heparin/LMWH is used in pregnancy — monitored by aPTT (or anti-Xa) and reversed by protamine. (Warfarin uses INR + vitamin K; the two must not be mixed up.)',
      tests: 'treatment',
    },
  ],
};

export default anticoagulants;
