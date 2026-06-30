import type { Lecture } from '../../lib/types';

export const dilatedCardiomyopathy: Lecture = {
  id: 'dilated-cardiomyopathy',
  title: 'Dilated Cardiomyopathy (DCM)',
  system: 'cardiovascular',
  source: 'L10 — Cardiomyopathy & Myocarditis',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L10 Cardiomyopathy & Myocarditis' },
    { kind: 'disease', label: 'Dilated cardiomyopathy' },
    { kind: 'mechanism', label: 'Systolic dysfunction' },
    { kind: 'exam', label: 'S3 + functional MR' },
  ],

  highYield: [
    'Most common CMP; **progressive all-chamber dilation** with **systolic dysfunction (EF <40%)**.',
    'Often **20–40 yo**; presents with **CHF**, **functional mitral regurgitation**, **mural thrombi → thromboembolism/stroke**, arrhythmias.',
    'Etiology: idiopathic; **genetic 20–50%** (cytoskeletal — desmin, actin, lamin, **AD**; **dystrophin → X-linked, Duchenne/Becker**).',
    'Acquired: **alcohol**, **doxorubicin**, **peripartum**, **myocarditis**.',
    'Prognosis poor (5-yr survival ~25%); **most common cause of heart transplant**.',
  ],

  mechanism: {
    title: 'Weak contraction → dilation → low-output HF',
    steps: [
      { id: 's1', label: 'Myocyte injury (genetic / toxic / myocarditis)' },
      { id: 's2', label: '↓ contractility (systolic dysfunction)', emphasis: 'key' },
      { id: 's3', label: 'All-chamber dilation → EF <40%' },
      { id: 's4', label: 'CHF + functional MR + mural thrombi', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Displaced diffuse apex + S3 gallop', mechanism: 'Dilated, volume-overloaded LV', significance: 'key' },
    { sign: 'Apical pansystolic murmur (functional MR)', mechanism: 'Annular dilation stretches the mitral valve', significance: 'key' },
    { sign: 'Raised JVP, edema, rales', mechanism: 'Congestive heart failure', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Echo: dilated chambers, ↓EF, thin walls', meaning: 'Diagnostic' },
    { clue: 'ECG; troponin (if myocarditis)', meaning: 'Arrhythmia / inflammatory cause' },
    { clue: 'Screen reversible causes', meaning: 'Alcohol, thyroid, tachycardia' },
  ],

  treatment: [
    { logic: 'Heart-failure therapy (neurohormonal blockade)', detail: 'ACEi/ARB, beta-blocker, MRA.' },
    { logic: 'Anticoagulation if mural thrombus / AF', detail: 'Prevent embolism.' },
    { logic: 'Remove toxin (alcohol); transplant if refractory', detail: 'DCM is the leading transplant indication.' },
  ],

  mnemonics: [
    { hook: 'DCM = the 6 D’s', expansion: ['Dilated · Diminished EF', 'Drink (alcohol) · Doxorubicin', 'Duchenne (dystrophin) · Delivery (peripartum)'] },
  ],

  traps: [
    {
      questionCategory: 'Inheritance of genetic DCM',
      wrongInstinct: 'All genetic DCM is autosomal dominant',
      rightAnswer: 'Cytoskeletal mutations are usually AD, but dystrophin (Duchenne/Becker) is X-linked',
      why: 'Most familial DCM is AD (cytoskeletal genes), but dystrophin-related muscular dystrophies cause X-linked DCM.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 30-year-old has progressive dyspnea, an S3, a displaced apex, and echo showing all-chamber dilation with EF 22%. Which cardiomyopathy?',
      options: [
        { id: 'a', text: 'Hypertrophic' },
        { id: 'b', text: 'Dilated' },
        { id: 'c', text: 'Restrictive' },
        { id: 'd', text: 'Arrhythmogenic RV' },
      ],
      answerId: 'b',
      explanation: 'All-chamber dilation with a markedly reduced EF and an S3 is dilated cardiomyopathy (systolic dysfunction).',
      tests: 'exam',
    },
  ],
};

export default dilatedCardiomyopathy;
