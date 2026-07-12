import type { Lecture } from '../../lib/types';

export const fcp1HemoptysisMassive: Lecture = {
  id: 'fcp1-hemoptysis-massive',
  title: 'Massive Hemoptysis',
  system: 'clinical',
  source: 'L13 — Cough & Hemoptysis',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L13 Cough & Hemoptysis' },
    { kind: 'disease', label: 'Massive hemoptysis · asphyxiation' },
    { kind: 'treatment', label: 'Airway · position · embolisation' },
    { kind: 'investigation', label: 'Bronchoscopy · CT angiography' },
  ],

  highYield: [
    '**Massive hemoptysis** is defined by **volume or effect** — a large expectorated volume (variably quoted as over 100–600 mL in 24 hours) or **any bleeding that threatens the airway or gas exchange** ([[fcp1-hemoptysis-approach]]).',
    '**Patients die from asphyxiation, not exsanguination** — blood flooding the airways is the killer, so **airway protection comes before stopping the bleeding**.',
    'Follow **ABC** ([[fcp1-trauma-primary-survey]]): high-flow oxygen, two large-bore IV lines, cross-match, **correct any coagulopathy**, and prepare for **intubation with a large-bore tube** if needed.',
    '**Position the patient bleeding-side down** (lateral decubitus with the bleeding lung dependent) to keep blood out of the healthy lung; isolate the good lung if intubated.',
    'Definitive control: urgent **bronchoscopy** to localise, **CT angiography**, then **bronchial artery embolisation** — the first-line definitive therapy, because most bleeding comes from the **high-pressure bronchial arteries**; surgery is a last resort.',
  ],

  mechanism: {
    title: 'Airway first, then localise and embolise',
    steps: [
      { id: 's1', label: 'Large-volume or airway-threatening bleed = emergency', emphasis: 'danger' },
      { id: 's2', label: 'Death is by asphyxiation, not blood loss', emphasis: 'danger' },
      { id: 's3', label: 'ABC: oxygen, IV access, correct clotting, intubate if needed', emphasis: 'danger' },
      { id: 's4', label: 'Bleeding lung down; protect the good lung', emphasis: 'key' },
      { id: 's5', label: 'Bronchoscopy + CT angiography → bronchial artery embolisation', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Large volume of expectorated blood, drowning cough', mechanism: 'Airway flooding with impaired gas exchange', significance: 'key' },
    { sign: 'Falling oxygen saturation and respiratory distress', mechanism: 'Blood filling alveoli — impending asphyxiation', significance: 'key' },
    { sign: 'Crackles or gurgling localising to one lung', mechanism: 'Helps identify the bleeding side for positioning', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Ongoing large-volume hemoptysis with hypoxia', meaning: 'Treat as an emergency — secure the airway before imaging' },
    { clue: 'CT angiography of the chest', meaning: 'Localises the bleeding vessel and guides embolisation' },
    { clue: 'Rigid or flexible bronchoscopy', meaning: 'Localises the bleeding side and allows local tamponade or therapy' },
  ],

  treatment: [
    { logic: 'Airway and breathing before haemostasis', detail: 'High-flow oxygen, large-bore IV access, cross-match and correct coagulopathy; intubate with a large tube if the airway is threatened and isolate the healthy lung.' },
    { logic: 'Position bleeding-side down', detail: 'Lateral decubitus with the bleeding lung dependent protects the good lung from soiling while definitive control is arranged.' },
    { logic: 'Bronchial artery embolisation is first-line definitive therapy', detail: 'After localisation by bronchoscopy and CT angiography; surgical resection is reserved for failure or specific lesions.' },
  ],

  mnemonics: [
    { hook: 'Massive hemoptysis: Airway, Bleeding-side Down, Embolise', expansion: ['They asphyxiate, they do not exsanguinate', 'Protect the good lung'] },
  ],

  traps: [
    {
      questionCategory: 'Priority in massive hemoptysis',
      wrongInstinct: 'Rush to stop the bleeding and transfuse for anticipated blood loss',
      rightAnswer: 'Secure the airway and position bleeding-side down first — the immediate threat is asphyxiation',
      why: 'Even modest volumes can flood and drown the healthy lung; airway protection saves the life before haemostasis.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient has massive hemoptysis known to originate from the right lung. The best positioning is:',
      options: [
        { id: 'a', text: 'Sitting fully upright, leaning forward' },
        { id: 'b', text: 'Left lateral decubitus (bleeding side up)' },
        { id: 'c', text: 'Right lateral decubitus (bleeding side down)' },
        { id: 'd', text: 'Head-down Trendelenburg' },
      ],
      answerId: 'c',
      explanation: 'Placing the bleeding lung dependent (bleeding-side down) protects the healthy lung from being soiled with blood, reducing the risk of asphyxiation.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'What is the immediate priority in a patient with massive hemoptysis?',
      options: [
        { id: 'a', text: 'Urgent transfusion for anticipated exsanguination' },
        { id: 'b', text: 'Airway protection and oxygenation' },
        { id: 'c', text: 'CT chest before any other intervention' },
        { id: 'd', text: 'Oral tranexamic acid and discharge' },
      ],
      answerId: 'b',
      explanation: 'Patients with massive hemoptysis die from asphyxiation, not blood loss, so securing the airway and oxygenation takes priority over everything else.',
      tests: 'treatment',
    },
  ],
};

export default fcp1HemoptysisMassive;
