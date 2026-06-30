import type { Lecture } from '../../lib/types';

export const hypertrophicCardiomyopathy: Lecture = {
  id: 'hypertrophic-cardiomyopathy',
  title: 'Hypertrophic Cardiomyopathy (HCM)',
  system: 'cardiovascular',
  source: 'L10 — Cardiomyopathy & Myocarditis',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L10 Cardiomyopathy & Myocarditis' },
    { kind: 'disease', label: 'Hypertrophic cardiomyopathy' },
    { kind: 'mechanism', label: 'Sarcomere mutation' },
    { kind: 'exam', label: 'Murmur louder with ↓preload' },
  ],

  highYield: [
    '**Genetic** (AD), **sarcomere gene** mutations — **β-myosin heavy chain & myosin-binding protein C** most common; ~1 in 500.',
    '**LV hypertrophy without dilation** → **diastolic dysfunction** (poor compliance); EF preserved/high.',
    '**Asymmetric septal hypertrophy (90%)**; ⅓ have **LVOT obstruction (HOCM)** with **systolic anterior motion (SAM)** of the mitral leaflet → **harsh mid-systolic ejection murmur**.',
    '**Most common cause of sudden cardiac death in young people / athletes.**',
    'Micro: **myofiber disarray** + interstitial fibrosis.',
  ],

  mechanism: {
    title: 'Sarcomere mutation → hypertrophy → obstruction & diastolic failure',
    steps: [
      { id: 's1', label: 'Sarcomere gene mutation (β-myosin / MyBP-C)' },
      { id: 's2', label: 'Massive LV hypertrophy (asymmetric septum)', emphasis: 'key' },
      { id: 's3', label: 'Poor compliance (diastolic dysfunction)' },
    ],
    branches: [
      {
        fromId: 's2',
        title: 'HOCM',
        steps: [
          { id: 'o1', label: 'SAM → LVOT obstruction' },
          { id: 'o2', label: 'Harsh mid-systolic ejection murmur' },
        ],
      },
      {
        fromId: 's2',
        title: 'Electrical',
        steps: [{ id: 'e1', label: 'Myofiber disarray → arrhythmia → sudden death', emphasis: 'danger' }],
      },
    ],
  },

  examFindings: [
    { sign: 'Harsh mid-systolic ejection murmur, LOUDER with ↓preload (Valsalva, standing)', mechanism: 'Less LV volume → more outflow obstruction', significance: 'key' },
    { sign: 'Exertional syncope', mechanism: 'Dynamic LVOT obstruction / arrhythmia', significance: 'key' },
    { sign: 'Sudden cardiac death in a young athlete', mechanism: 'Ventricular arrhythmia', significance: 'key' },
  ],

  investigations: [
    { clue: 'Echo: asymmetric septal hypertrophy, SAM, LVOT gradient', meaning: 'Diagnostic' },
    { clue: 'ECG: LVH, deep septal Q waves', meaning: 'Supportive' },
    { clue: 'Genetic testing + family screening', meaning: 'Inherited, AD' },
  ],

  treatment: [
    { logic: 'Beta-blockers / verapamil', detail: 'Improve diastolic filling, reduce obstruction.' },
    { logic: 'AVOID preload/afterload reducers', detail: 'Nitrates, diuretics, dehydration worsen the obstruction.' },
    { logic: 'ICD for SCD risk; septal myectomy/ablation for refractory HOCM', detail: 'Prevent sudden death; relieve obstruction.' },
  ],

  mnemonics: [
    { hook: 'HOCM murmur: ↓preload = LOUDER', expansion: ['Opposite of most murmurs', 'Valsalva/standing → less filling → more obstruction → louder'] },
  ],

  traps: [
    {
      questionCategory: 'Effect of preload on the murmur',
      wrongInstinct: 'Standing/Valsalva softens the murmur (like aortic stenosis)',
      rightAnswer: 'The HOCM murmur gets LOUDER with ↓preload (Valsalva, standing)',
      why: 'Less LV volume brings the septum and mitral leaflet closer → more outflow obstruction → louder murmur; AS and MR murmurs soften with reduced preload.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A young athlete collapses; echo shows asymmetric septal hypertrophy with SAM, and his ejection murmur gets LOUDER on standing. Which gene class is mutated?',
      options: [
        { id: 'a', text: 'Cytoskeletal proteins' },
        { id: 'b', text: 'Sarcomere proteins (β-myosin / myosin-binding protein C)' },
        { id: 'c', text: 'Desmosomal proteins' },
        { id: 'd', text: 'Dystrophin' },
      ],
      answerId: 'b',
      explanation: 'HCM is caused by sarcomere-gene mutations (commonly β-myosin heavy chain and myosin-binding protein C); the murmur louder with reduced preload is the dynamic LVOT obstruction signature.',
      tests: 'mechanism',
    },
  ],
};

export default hypertrophicCardiomyopathy;
