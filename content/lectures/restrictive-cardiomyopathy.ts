import type { Lecture } from '../../lib/types';

export const restrictiveCardiomyopathy: Lecture = {
  id: 'restrictive-cardiomyopathy',
  title: 'Restrictive Cardiomyopathy (RCM)',
  system: 'cardiovascular',
  source: 'L10 — Cardiomyopathy & Myocarditis',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L10 Cardiomyopathy & Myocarditis' },
    { kind: 'disease', label: 'Restrictive cardiomyopathy' },
    { kind: 'mechanism', label: 'Stiff ventricle' },
    { kind: 'investigation', label: 'Congo red' },
  ],

  highYield: [
    'Least common but **higher mortality**; **diastolic dysfunction** from a stiff, non-compliant ventricle (normal/near-normal size).',
    'Causes: **infiltration (amyloidosis = most common**, sarcoidosis, metastatic tumor); **fibrosis** (radiation, post-surgery); idiopathic.',
    '**Biatrial dilation** with normal-size ventricles; **clinically mimics constrictive pericarditis**.',
    '**Cardiac amyloidosis**: **AL** (light chain → multiple myeloma), **ATTR** (transthyretin); **Congo red → apple-green birefringence**.',
    'Predominantly **right-sided HF**.',
  ],

  mechanism: {
    title: 'Infiltration / fibrosis → stiff ventricle → impaired filling',
    steps: [
      { id: 's1', label: 'Infiltration (amyloid) or fibrosis' },
      { id: 's2', label: 'Stiff, non-compliant myocardium', emphasis: 'key' },
      { id: 's3', label: 'Impaired diastolic filling → ↑ filling pressure' },
      { id: 's4', label: 'Biatrial dilation → right-sided HF' },
    ],
    branches: [
      { fromId: 's4', title: 'Differential', steps: [{ id: 'm1', label: 'Mimics constrictive pericarditis' }] },
    ],
  },

  examFindings: [
    { sign: 'Right-sided HF: ↑JVP, hepatomegaly, edema, ascites', mechanism: 'Elevated filling pressures', significance: 'key' },
    { sign: 'Kussmaul sign (JVP rises on inspiration)', mechanism: 'Restricted filling', significance: 'supportive' },
    { sign: 'Signs of systemic amyloidosis', mechanism: 'Underlying infiltrative disease', significance: 'key' },
  ],

  investigations: [
    { clue: 'Echo: normal-size ventricles, biatrial dilation, stiff myocardium', meaning: 'Diagnostic pattern' },
    { clue: 'Endomyocardial biopsy + Congo red', meaning: 'Apple-green birefringence = amyloid' },
    { clue: 'Imaging to exclude constrictive pericarditis', meaning: 'Key differential' },
  ],

  treatment: [
    { logic: 'Treat the underlying cause', detail: 'e.g. amyloid-directed therapy.' },
    { logic: 'Cautious diuresis for congestion', detail: 'Filling-pressure dependent — avoid overdiuresis.' },
  ],

  mnemonics: [
    { hook: 'RCM = Restricted filling; Amyloid = Apple-green (Congo red)', expansion: ['Stiff ventricle, normal size', 'Amyloidosis is the commonest cause'] },
  ],

  traps: [
    {
      questionCategory: 'RCM vs constrictive pericarditis',
      wrongInstinct: 'Right HF with a normal-size heart = constrictive pericarditis',
      rightAnswer: 'Restrictive CMP mimics constrictive pericarditis — biopsy/imaging distinguishes (amyloid infiltration)',
      why: 'Both present with right HF and normal-size ventricles; restrictive CMP is intrinsic myocardial stiffening (often amyloid), constriction is pericardial — management differs.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Endomyocardial biopsy shows amorphous pink deposits that stain with Congo red and show apple-green birefringence under polarized light. Diagnosis?',
      options: [
        { id: 'a', text: 'Hypertrophic cardiomyopathy' },
        { id: 'b', text: 'Cardiac amyloidosis (restrictive CMP)' },
        { id: 'c', text: 'Myocarditis' },
        { id: 'd', text: 'Dilated cardiomyopathy' },
      ],
      answerId: 'b',
      explanation: 'Apple-green birefringence on Congo red staining is pathognomonic of amyloid — the most common infiltrative cause of restrictive cardiomyopathy.',
      tests: 'investigation',
    },
  ],
};

export default restrictiveCardiomyopathy;
