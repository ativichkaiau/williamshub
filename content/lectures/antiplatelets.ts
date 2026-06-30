import type { Lecture } from '../../lib/types';

export const antiplatelets: Lecture = {
  id: 'antiplatelets',
  title: 'Antiplatelet Drugs',
  system: 'cardiovascular',
  source: 'L7 — Coagulation & Hemostasis',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L7 Coagulation & Hemostasis' },
    { kind: 'disease', label: 'Arterial thrombosis' },
    { kind: 'mechanism', label: 'Platelet inhibition' },
    { kind: 'treatment', label: 'DAPT' },
  ],

  highYield: [
    'Arterial thrombi are **platelet-rich** (high shear, around ruptured plaques) → antiplatelets are key.',
    '**Aspirin**: irreversibly acetylates **COX-1** → ↓**thromboxane A₂** for the platelet’s **~10-day** lifespan; GI ulcer/bleed.',
    '**Clopidogrel/prasugrel**: irreversible **P2Y12 (ADP receptor)** blockers; prodrugs (clopidogrel needs CYP2C19 → variable).',
    '**Ticagrelor**: **reversible**, allosteric P2Y12 inhibitor; faster on/off, not a prodrug; side effect **dyspnea**.',
    '**GP IIb/IIIa inhibitors** (abciximab, tirofiban, eptifibatide): block the **final common** aggregation pathway; peri-PCI.',
  ],

  mechanism: {
    title: 'Block platelet activation & aggregation',
    steps: [
      { id: 's1', label: 'Platelet adhesion / activation' },
      { id: 's2', label: 'COX-1 → TXA₂ (aspirin target)', emphasis: 'key' },
      { id: 's3', label: 'ADP → P2Y12 (clopidogrel / ticagrelor target)', emphasis: 'key' },
      { id: 's4', label: 'GP IIb/IIIa → fibrinogen cross-linking (final pathway)' },
      { id: 's5', label: 'Aggregation → thrombus' },
    ],
  },

  examFindings: [
    { sign: 'GI bleeding / peptic ulcer', mechanism: 'Aspirin inhibits protective COX', significance: 'key' },
    { sign: 'Dyspnea', mechanism: 'Ticagrelor class effect', significance: 'key' },
    { sign: 'Bruising / mucosal bleeding', mechanism: 'Impaired platelet plug', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'No routine monitoring', meaning: 'Unlike anticoagulants' },
    { clue: 'Platelet function testing', meaning: 'Selected cases (e.g. clopidogrel resistance)' },
  ],

  treatment: [
    { logic: 'Secondary prevention of vascular events', detail: 'Post-MI, ischemic stroke, stable angina.' },
    { logic: 'Dual antiplatelet therapy (DAPT) after ACS / PCI', detail: 'Aspirin + a P2Y12 inhibitor.' },
    { logic: 'ACS acute: aspirin 150–300 mg chewed + P2Y12 loading', detail: 'Immediate management.' },
  ],

  mnemonics: [
    { hook: 'Aspirin = COX → TXA₂ (irreversible, 10 days)', expansion: ['Acetylates COX-1', 'No new COX for platelet lifetime'] },
    { hook: 'Clopidogrel / Ticagrelor = P2Y12 (ADP)', expansion: ['Clopidogrel irreversible prodrug', 'Ticagrelor reversible, dyspnea'] },
  ],

  traps: [
    {
      questionCategory: 'Reversibility',
      wrongInstinct: 'All antiplatelets are reversible like other NSAIDs',
      rightAnswer: 'Aspirin & clopidogrel are IRREVERSIBLE (last the platelet’s ~10-day life); ticagrelor is reversible',
      why: 'Aspirin irreversibly acetylates COX-1 and clopidogrel irreversibly blocks P2Y12, so the effect persists until new platelets form (~10 days) — relevant before surgery.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which antiplatelet irreversibly acetylates COX-1, reducing thromboxane A₂ for the platelet’s ~10-day lifespan?',
      options: [
        { id: 'a', text: 'Clopidogrel' },
        { id: 'b', text: 'Aspirin' },
        { id: 'c', text: 'Ticagrelor' },
        { id: 'd', text: 'Abciximab' },
      ],
      answerId: 'b',
      explanation: 'Aspirin irreversibly acetylates platelet COX-1, abolishing thromboxane A₂ synthesis for the platelet’s ~10-day lifespan. Clopidogrel targets P2Y12; ticagrelor is reversible; abciximab blocks GP IIb/IIIa.',
      tests: 'treatment',
    },
  ],
};

export default antiplatelets;
