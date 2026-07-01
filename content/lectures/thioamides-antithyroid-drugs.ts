import type { Lecture } from '../../lib/types';

export const thioamidesAntithyroidDrugs: Lecture = {
  id: 'thioamides-antithyroid-drugs',
  title: 'Thioamides: Methimazole & PTU',
  system: 'endocrine',
  source: 'L8 — Drugs Used in Thyroid Diseases',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'L8 Thyroid Drugs' },
    { kind: 'treatment', label: 'Methimazole / PTU' },
    { kind: 'mechanism', label: 'Thyroid peroxidase inhibition' },
    { kind: 'exam', label: 'Pregnancy, storm, agranulocytosis' },
  ],

  highYield: [
    '**Methimazole (MMI) and propylthiouracil (PTU)** inhibit **thyroid peroxidase**, blocking iodide organification and coupling. **High-dose PTU also inhibits peripheral T4 -> T3 conversion**.',
    'They stop new synthesis but **do not block release of stored hormone**, so clinical benefit is delayed about **3-4 weeks**. MMI is about 10 times as potent and can be dosed once daily; PTU requires dosing every 6-8 hours.',
    '**Methimazole is generally preferred. PTU is reserved for the first trimester of pregnancy, thyroid storm, or selected patients unable to take MMI.** Both cross the placenta; low concentrations enter breast milk.',
    'The most dangerous shared toxicity is **agranulocytosis**. Fever or sore throat requires immediate drug cessation and a white-cell count. A pruritic maculopapular rash is more common.',
    '**PTU can cause severe hepatitis**; **MMI is more associated with cholestatic jaundice and rare aplasia cutis**. Cross-sensitivity between the two drugs is substantial.',
  ],

  mechanism: {
    title: 'Block synthesis now; wait for stored hormone to clear',
    steps: [
      { id: 's1', label: 'MMI/PTU inhibit thyroid peroxidase', emphasis: 'key' },
      { id: 's2', label: 'No organification or coupling -> no new T3/T4 synthesis' },
      { id: 's3', label: 'PTU also blocks peripheral T4 -> T3 at high dose' },
      { id: 's4', label: 'Stored hormone persists -> onset delayed 3-4 weeks' },
    ],
  },

  examFindings: [
    { sign: 'Fever and sore throat while taking a thioamide', mechanism: 'Possible agranulocytosis', significance: 'key' },
    { sign: 'Severe hepatitis on antithyroid therapy', mechanism: 'Characteristic major toxicity of PTU', significance: 'key' },
    { sign: 'Hyperthyroidism in the first trimester', mechanism: 'PTU is preferred during this limited period', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'CBC urgently for fever or sore throat', meaning: 'Exclude agranulocytosis' },
    { clue: 'Liver tests for jaundice, dark urine, or abdominal symptoms', meaning: 'Detect PTU hepatitis or MMI cholestasis' },
    { clue: 'Free T4/T3 and TSH over time', meaning: 'Monitor biochemical response; TSH may lag' },
  ],

  treatment: [
    { logic: 'Prefer methimazole for most patients', detail: 'More potent, longer acting, and less severe hepatic risk.' },
    { logic: 'Use PTU for first trimester or thyroid storm', detail: 'Its additional T4-to-T3 block is useful in storm.' },
    { logic: 'Stop immediately if agranulocytosis is suspected', detail: 'Do not wait for routine follow-up.' },
  ],

  mnemonics: [
    { hook: 'PTU: Pregnancy first trimester, Thyroid storm, Unable to use MMI', expansion: ['Also blocks T4 -> T3'] },
    { hook: 'Sore throat? Stop thioamide and sample CBC', expansion: ['Think agranulocytosis'] },
  ],

  traps: [
    {
      questionCategory: 'Why thioamides have a delayed onset',
      wrongInstinct: 'Their absorption is slow',
      rightAnswer: 'They block synthesis but not release, so preformed thyroid hormone must first be depleted',
      why: 'Both drugs are absorbed rapidly; the delay is physiological storage, not pharmacokinetic absorption.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which action distinguishes high-dose PTU from methimazole and helps explain its use in thyroid storm?',
      options: [
        { id: 'a', text: 'Destruction of thyroid tissue by beta radiation' },
        { id: 'b', text: 'Blockade of peripheral T4-to-T3 conversion' },
        { id: 'c', text: 'Direct beta-adrenergic antagonism' },
        { id: 'd', text: 'Stimulation of thyroid peroxidase' },
      ],
      answerId: 'b',
      explanation: 'Both thioamides inhibit thyroid peroxidase, but high-dose PTU also inhibits peripheral T4-to-T3 conversion, useful when rapid T3 reduction is needed.',
      tests: 'mechanism',
    },
  ],
};

export default thioamidesAntithyroidDrugs;
