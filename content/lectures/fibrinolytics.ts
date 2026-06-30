import type { Lecture } from '../../lib/types';

export const fibrinolytics: Lecture = {
  id: 'fibrinolytics',
  title: 'Fibrinolytics (Thrombolytics)',
  system: 'cardiovascular',
  source: 'L7 — Coagulation & Hemostasis',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L7 Coagulation & Hemostasis' },
    { kind: 'disease', label: 'Thrombolysis' },
    { kind: 'mechanism', label: 'Plasmin' },
    { kind: 'treatment', label: 'STEMI reperfusion' },
  ],

  highYield: [
    'Fibrinolytics **activate plasminogen → plasmin → lyse fibrin**.',
    '**Streptokinase**: **non-fibrin-specific** → systemic fibrinolysis → more bleeding; antigenic (Group A strep product).',
    '**tPA (alteplase, tenecteplase)**: **fibrin-specific** (acts on the plasminogen–fibrin complex).',
    '**STEMI**: indicated if symptoms **<12 h** and primary PCI not achievable **within 120 min**; give within 10 min of diagnosis.',
    'Main risk = **bleeding**, including **intracranial hemorrhage**.',
  ],

  mechanism: {
    title: 'Plasminogen → plasmin → fibrin lysis',
    steps: [
      { id: 's1', label: 'Fibrinolytic drug' },
      { id: 's2', label: 'Activates plasminogen → plasmin', emphasis: 'key' },
      { id: 's3', label: 'Degrades fibrin' },
      { id: 's4', label: 'Clot lysis → reperfusion' },
    ],
    branches: [
      {
        fromId: 's2',
        title: 'Specificity',
        steps: [
          { id: 'b1', label: 'Streptokinase → systemic (non-specific)' },
          { id: 'b2', label: 'tPA → fibrin-specific', emphasis: 'key' },
        ],
      },
    ],
  },

  examFindings: [
    { sign: 'Restores coronary flow, reduces infarct size & mortality', mechanism: 'Clot lysis = reperfusion', significance: 'key' },
    { sign: 'Bleeding / intracranial hemorrhage', mechanism: 'Systemic fibrinolysis', significance: 'key' },
  ],

  investigations: [
    { clue: 'STEMI on ECG', meaning: 'The indication for lysis' },
    { clue: 'Screen bleeding contraindications', meaning: 'Recent surgery, stroke, active bleeding' },
  ],

  treatment: [
    { logic: 'Acute STEMI <12 h when PCI not feasible <120 min', detail: 'Give within 10 min of STEMI diagnosis.' },
    { logic: 'Adjuncts reduce mortality further', detail: 'Aspirin, beta-blockers, ACEI.' },
  ],

  mnemonics: [
    { hook: 'tPA = fibrin-specific; Streptokinase = systemic', expansion: ['tPA acts on plasminogen-fibrin complex', 'Streptokinase causes widespread lysis'] },
    { hook: 'STEMI: PCI <120 min, else lyse <12 h', expansion: ['Primary PCI preferred', 'Fibrinolysis is the fallback'] },
  ],

  traps: [
    {
      questionCategory: 'Reperfusion choice',
      wrongInstinct: 'Always give fibrinolytics for STEMI',
      rightAnswer: 'Primary PCI preferred if achievable <120 min; fibrinolysis only if PCI not timely & symptoms <12 h',
      why: 'PCI is the preferred reperfusion strategy; fibrinolytics are the fallback when timely PCI isn’t available, within the 12-hour window.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A STEMI patient cannot reach a PCI centre within 120 minutes and presents 3 hours after symptom onset. Best reperfusion?',
      options: [
        { id: 'a', text: 'Wait for delayed PCI' },
        { id: 'b', text: 'Fibrinolysis (e.g. tenecteplase) now' },
        { id: 'c', text: 'No reperfusion needed' },
        { id: 'd', text: 'Antiplatelet therapy alone' },
      ],
      answerId: 'b',
      explanation: 'Within 12 h of symptom onset, if primary PCI cannot be delivered within 120 min, fibrinolysis should be given promptly (ideally within 10 min of diagnosis) to achieve reperfusion.',
      tests: 'treatment',
    },
  ],
};

export default fibrinolytics;
