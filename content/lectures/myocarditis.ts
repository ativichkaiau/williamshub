import type { Lecture } from '../../lib/types';

export const myocarditis: Lecture = {
  id: 'myocarditis',
  title: 'Myocarditis',
  system: 'cardiovascular',
  source: 'L10 — Cardiomyopathy & Myocarditis',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L10 Cardiomyopathy & Myocarditis' },
    { kind: 'disease', label: 'Myocarditis' },
    { kind: 'mechanism', label: 'Inflammation + injury' },
    { kind: 'investigation', label: 'Endomyocardial biopsy' },
  ],

  highYield: [
    '**Myocardial inflammation + injury** (necrosis/degeneration).',
    '**>½ have an antecedent viral syndrome**; **viruses most common (Coxsackie A & B)**, also HIV, CMV.',
    'Histology: **lymphocytic** (most common), **hypersensitivity** (eosinophils, drug), **giant cell** (multinucleated, **poor prognosis**); Chagas (T. cruzi).',
    'Clue: **tachycardia out of proportion to fever**; troponin rises **slower and stays longer** than AMI.',
    '**Endomyocardial biopsy = gold standard** (sampling error); most recover spontaneously.',
  ],

  mechanism: {
    title: 'Infection / immune → myocardial inflammation + injury',
    steps: [
      { id: 's1', label: 'Trigger (virus / immune / drug)' },
      { id: 's2', label: 'Myocardial inflammatory infiltrate', emphasis: 'key' },
      { id: 's3', label: 'Myocyte necrosis / degeneration' },
    ],
    branches: [
      { fromId: 's3', title: 'Recovery', steps: [{ id: 'r1', label: 'Most resolve without sequelae' }] },
      { fromId: 's3', title: 'Progression', steps: [{ id: 'p1', label: 'LV dysfunction → DCM / heart failure', emphasis: 'danger' }] },
    ],
  },

  examFindings: [
    { sign: 'Tachycardia out of proportion to fever', mechanism: 'Myocardial irritation', significance: 'key' },
    { sign: 'Heart failure / chest pain / arrhythmia after a viral prodrome', mechanism: 'Myocyte injury', significance: 'key' },
    { sign: 'May be asymptomatic', mechanism: 'Subclinical inflammation', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Troponin (slow rise, prolonged elevation — unlike AMI)', meaning: 'Ongoing myocyte injury' },
    { clue: 'ESR ↑ (~60%); serology (≥4× antibody titer rise)', meaning: 'Inflammation / viral cause' },
    { clue: 'Cardiac MRI; endomyocardial biopsy', meaning: 'Biopsy = gold standard (sampling error)' },
  ],

  treatment: [
    { logic: 'Mostly supportive (most recover)', detail: 'Treat heart failure / arrhythmia.' },
    { logic: 'Immunosuppression for giant cell / autoimmune myocarditis', detail: 'Specific subtypes.' },
    { logic: 'Poor prognosis: cardiogenic shock, giant cell, elderly', detail: 'Higher morbidity/mortality.' },
  ],

  mnemonics: [
    { hook: 'Myocarditis = Coxsackie, tachycardia > fever, biopsy gold standard', expansion: ['Viral (Coxsackie A/B) most common', 'Lymphocytic infiltrate'] },
    { hook: 'Giant cell myocarditis = grave prognosis', expansion: ['Multinucleated giant cells', 'Consider immunosuppression'] },
  ],

  traps: [
    {
      questionCategory: 'Troponin pattern',
      wrongInstinct: 'Troponin behaves the same as in acute MI',
      rightAnswer: 'Myocarditis troponin rises slower and stays elevated longer than AMI',
      why: 'AMI gives a sharp rise-and-fall; myocarditis shows a slower, more prolonged troponin elevation, with tachycardia out of proportion to fever.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 23-year-old, 2 weeks after a viral illness, has chest pain, heart failure, and tachycardia out of proportion to a low-grade fever; troponin is mildly elevated and persistent. Most likely diagnosis?',
      options: [
        { id: 'a', text: 'Acute myocardial infarction' },
        { id: 'b', text: 'Myocarditis' },
        { id: 'c', text: 'Stable angina' },
        { id: 'd', text: 'Pericarditis' },
      ],
      answerId: 'b',
      explanation: 'A post-viral picture with heart failure, tachycardia out of proportion to fever, and a slow/persistent troponin rise is classic for myocarditis.',
      tests: 'exam',
    },
  ],
};

export default myocarditis;
