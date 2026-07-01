import type { Lecture } from '../../lib/types';

export const cardiacTumorsOverview: Lecture = {
  id: 'cardiac-tumors-overview',
  title: 'Cardiac Masses & Tumors — Overview',
  system: 'cardiovascular',
  source: 'L20 — Cardiac Tumors',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L20 Cardiac Tumors' },
    { kind: 'disease', label: 'Cardiac mass' },
    { kind: 'mechanism', label: 'Classification' },
    { kind: 'exam', label: 'Three rules' },
  ],

  highYield: [
    '**Three rules for any cardiac mass**: **thrombus = most common intracavitary mass**; **secondary (metastatic) > primary**; **benign > malignant**.',
    'Primary cardiac tumors are **rare**; **80–90% are benign**. Commonest primary: **myxoma** (adults), **rhabdomyoma** (children).',
    '**Metastatic (secondary) tumors = the most common cardiac MALIGNANCY** — lung & breast carcinoma, melanoma, leukemia, lymphoma.',
    '**Angiosarcoma = most common PRIMARY cardiac malignancy** (right heart, aggressive).',
    'Malignant morphology: **large (>5 cm), irregular/ill-defined borders, invasion, right-heart, pericardial/pleural involvement, multiple lesions**.',
  ],

  mechanism: {
    title: 'How to classify a cardiac mass',
    steps: [
      { id: 's1', label: 'Cardiac mass found on imaging' },
      { id: 's2', label: 'Thrombus? (most common intracavitary mass)', emphasis: 'key' },
      { id: 's3', label: 'Tumor: primary (rare) vs secondary (more common)' },
      { id: 's4', label: 'Primary = mostly benign (myxoma); malignant = usually metastatic', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Embolic phenomena, obstruction, or constitutional symptoms', mechanism: 'Fragmentation, ball-valve blockage, cytokines', significance: 'key' },
    { sign: 'Pericardial effusion / tamponade', mechanism: 'Metastatic pericardial spread (lymphatic obstruction)', significance: 'key' },
    { sign: 'Often an incidental echo finding', mechanism: 'Many are asymptomatic until they obstruct or embolize', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Echocardiography (first-line); cardiac MRI / CT', meaning: 'Size, site, mobility, tissue characterization' },
    { clue: 'Age & site clues (adult vs child; atrium vs ventricle)', meaning: 'Narrows the differential' },
    { clue: 'Histology after resection / biopsy', meaning: 'Definitive diagnosis' },
  ],

  treatment: [
    { logic: 'Surgical excision for benign primaries (e.g. myxoma)', detail: 'Often curative.' },
    { logic: 'Anticoagulation for thrombus', detail: 'The commonest mass overall.' },
    { logic: 'Malignant (angiosarcoma, metastatic): palliation', detail: 'Poor prognosis; treat the primary.' },
  ],

  mnemonics: [
    { hook: 'Cardiac mass: Thrombus commonest · Secondary > Primary · Benign > Malignant', expansion: ['The three general rules'] },
    { hook: 'Metastasis = commonest cardiac malignancy; Angiosarcoma = commonest PRIMARY malignancy', expansion: ['Don’t confuse the two'] },
  ],

  traps: [
    {
      questionCategory: 'Most common cardiac tumor / malignancy',
      wrongInstinct: 'Myxoma is the most common cardiac malignancy',
      rightAnswer: 'Metastatic (secondary) tumors are the most common cardiac MALIGNANCY; myxoma is the most common primary (benign) tumor',
      why: 'Primary cardiac tumors are rare and mostly benign (myxoma leads). Malignancy of the heart is far more often metastatic than primary; among primaries, angiosarcoma is the most common malignant one.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'What is the most common cardiac malignancy?',
      options: [
        { id: 'a', text: 'Myxoma' },
        { id: 'b', text: 'Angiosarcoma' },
        { id: 'c', text: 'Metastatic (secondary) tumor' },
        { id: 'd', text: 'Rhabdomyoma' },
      ],
      answerId: 'c',
      explanation: 'Metastatic spread (lung, breast, melanoma, leukemia, lymphoma) is the most common cardiac malignancy. Among primary tumors, angiosarcoma is the most common malignant one, but primaries overall are rare and mostly benign.',
      tests: 'exam',
    },
  ],
};

export default cardiacTumorsOverview;
