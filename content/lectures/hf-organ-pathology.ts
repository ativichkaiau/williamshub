import type { Lecture } from '../../lib/types';

export const hfOrganPathology: Lecture = {
  id: 'hf-organ-pathology',
  title: 'HF — Organ Pathology (Left vs Right)',
  system: 'cardiovascular',
  source: 'L14 — Pathology of Heart Failure',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L14 Pathology of HF' },
    { kind: 'disease', label: 'Congestive organ damage' },
    { kind: 'mechanism', label: 'Backward congestion' },
    { kind: 'exam', label: 'Nutmeg liver' },
  ],

  highYield: [
    'HF consequences: **venous congestion (backward)** + **tissue hypoperfusion (forward)**.',
    '**Left HF → pulmonary congestion/edema**; **heart failure cells = hemosiderin-laden macrophages** in alveoli.',
    '**Right HF → systemic venous congestion**: JVD, **nutmeg liver** (passive hepatic congestion), **cardiac cirrhosis**, pitting edema, ascites.',
    'Most common cause of right HF = **left HF**; isolated right HF = cor pulmonale.',
    'Complications: cardiorenal syndrome, arrhythmias, functional MR, stroke.',
  ],

  mechanism: {
    title: 'Backward congestion + forward hypoperfusion',
    steps: [{ id: 's1', label: 'Heart failure' }],
    branches: [
      {
        fromId: 's1',
        title: 'Left HF',
        steps: [
          { id: 'l1', label: 'Pulmonary venous congestion → edema' },
          { id: 'l2', label: 'Heart failure cells (hemosiderin macrophages)', emphasis: 'key' },
        ],
      },
      {
        fromId: 's1',
        title: 'Right HF',
        steps: [
          { id: 'r1', label: 'Systemic venous congestion → nutmeg liver' },
          { id: 'r2', label: 'Cardiac cirrhosis', emphasis: 'danger' },
        ],
      },
    ],
  },

  examFindings: [
    { sign: 'Left: bibasal crepitations, orthopnea, PND', mechanism: 'Pulmonary congestion', significance: 'key' },
    { sign: 'Right: ↑JVP, tender hepatomegaly, pitting edema, ascites', mechanism: 'Systemic venous backpressure', significance: 'key' },
    { sign: 'Nutmeg liver / cardiac cirrhosis (late)', mechanism: 'Chronic passive hepatic congestion (centrilobular)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'CXR: pulmonary edema, cardiomegaly', meaning: 'Left-sided congestion' },
    { clue: 'Liver: nutmeg appearance, centrilobular necrosis', meaning: 'Right-sided passive congestion' },
    { clue: 'Echo', meaning: 'LV/RV function, cause' },
  ],

  treatment: [
    { logic: 'Diuretics for congestion; treat the cause', detail: 'Relieve backward congestion.' },
    { logic: 'Manage cardiorenal syndrome', detail: 'Balance diuresis & renal perfusion.' },
  ],

  mnemonics: [
    { hook: 'Left HF → Lungs; Right HF → Rest of body', expansion: ['Left → pulmonary edema, HF cells', 'Right → nutmeg liver, edema, ascites'] },
    { hook: 'Heart failure cells = hemosiderin-laden macrophages', expansion: ['Chronic pulmonary congestion'] },
  ],

  traps: [
    {
      questionCategory: 'Hemosiderin macrophages in lung',
      wrongInstinct: 'Alveolar hemosiderin macrophages = a primary lung disease',
      rightAnswer: 'Heart failure cells (hemosiderin-laden macrophages) indicate chronic LEFT heart failure / pulmonary congestion',
      why: 'Chronic pulmonary congestion from left HF causes alveolar microhemorrhages; macrophages phagocytose RBCs → hemosiderin = "heart failure cells".',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: "Lung histology shows hemosiderin-laden macrophages ('heart failure cells') in alveoli. This indicates?",
      options: [
        { id: 'a', text: 'Isolated right heart failure' },
        { id: 'b', text: 'Chronic left heart failure with pulmonary congestion' },
        { id: 'c', text: 'Bacterial pneumonia' },
        { id: 'd', text: 'Pulmonary embolism' },
      ],
      answerId: 'b',
      explanation: '"Heart failure cells" are hemosiderin-laden macrophages from chronic pulmonary venous congestion — a hallmark of chronic left-sided heart failure.',
      tests: 'investigation',
    },
  ],
};

export default hfOrganPathology;
