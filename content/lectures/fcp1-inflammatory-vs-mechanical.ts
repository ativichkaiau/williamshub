import type { Lecture } from '../../lib/types';

export const fcp1InflammatoryVsMechanical: Lecture = {
  id: 'fcp1-inflammatory-vs-mechanical',
  title: 'Inflammatory vs Mechanical Joint Pain',
  system: 'clinical',
  source: 'L30 — Approach to Arthritis',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L30 Arthritis' },
    { kind: 'disease', label: 'RA vs osteoarthritis' },
    { kind: 'exam', label: 'Morning stiffness · gel phenomenon' },
    { kind: 'investigation', label: 'CRP · ESR' },
  ],

  highYield: [
    '**Inflammatory joint pain:** prolonged **morning stiffness over 30–60 minutes**, **eases with activity**, night pain in the second half of the night, warmth/swelling/erythema, systemic features, and raised **CRP/ESR** — think rheumatoid, spondyloarthritis, crystal or connective-tissue disease [[fcp1-arthritis-approach]].',
    '**Mechanical/degenerative pain:** brief stiffness (under 30 minutes) with the **gel phenomenon** (stiff after rest, loosens in minutes), **worse with use, better with rest**, little or no swelling/warmth, and normal inflammatory markers — think osteoarthritis or internal derangement.',
    '**The single high-yield discriminator:** the **gel phenomenon** (transient post-rest stiffness that resolves quickly) is mechanical, whereas **prolonged morning stiffness** lasting an hour is inflammatory.',
    '**On examination:** inflammatory joints are warm with boggy synovial thickening and effusions; osteoarthritic joints show **hard bony** enlargement (Heberden/Bouchard nodes) and crepitus without heat — then apply the joint count [[fcp1-monoarthritis-vs-polyarthritis]].',
    '**Do not over-rely on labs** — the history pattern does most of the work; CRP/ESR can be normal in some inflammatory disease. An acutely hot inflamed joint still needs sepsis excluded [[fcp1-fever-approach-differential]].',
  ],

  mechanism: {
    title: 'Two patterns, one discriminator',
    steps: [
      { id: 's1', label: 'Ask about stiffness: duration + timing', emphasis: 'key' },
      { id: 's2', label: 'Over 30–60 min + eases with use → inflammatory', emphasis: 'key' },
      { id: 's3', label: 'Under 30 min + gel phenomenon + worse with use → mechanical', emphasis: 'key' },
      { id: 's4', label: 'Signs: warmth/effusion vs bony/crepitus', emphasis: 'normal' },
      { id: 's5', label: 'A hot inflamed joint still needs sepsis excluded', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Warm, soft-tissue (synovial) swelling with an effusion', mechanism: 'Active synovitis of inflammatory arthritis', significance: 'key' },
    { sign: 'Hard bony enlargement (Heberden/Bouchard) with crepitus, no warmth', mechanism: 'Osteoarthritic joint remodelling', significance: 'key' },
    { sign: 'Prolonged early-morning stiffness improving through the day', mechanism: 'Inflammatory pattern', significance: 'supportive' },
    { sign: 'Pain worse with weight-bearing/activity, relieved by rest', mechanism: 'Mechanical pattern', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Raised CRP/ESR', meaning: 'Supports an inflammatory arthritis' },
    { clue: 'Normal inflammatory markers with a typical history', meaning: 'Favours mechanical / osteoarthritis' },
    { clue: 'X-ray: joint-space narrowing, osteophytes, subchondral sclerosis', meaning: 'Osteoarthritis' },
    { clue: 'X-ray: periarticular osteopenia with marginal erosions', meaning: 'Inflammatory (e.g. rheumatoid) arthritis' },
  ],

  treatment: [
    { logic: 'Suppress inflammation in inflammatory disease', detail: 'DMARDs (± a short steroid course) with early rheumatology referral to prevent joint damage.' },
    { logic: 'Treat mechanical/osteoarthritis symptomatically', detail: 'Weight loss, exercise and physiotherapy, analgesia (paracetamol, topical or oral NSAID) and joint protection; no DMARDs.' },
  ],

  mnemonics: [
    { hook: 'Inflammatory loosens with use; mechanical tightens with use', expansion: ['Inflammatory: stiff at rest, better moving', 'Mechanical: fine at rest, worse using'] },
  ],

  traps: [
    {
      questionCategory: 'Morning stiffness',
      wrongInstinct: 'Any morning stiffness means an inflammatory arthritis',
      rightAnswer: 'Duration matters — a few minutes (gel phenomenon) is mechanical, sustained stiffness over 30–60 minutes is inflammatory',
      why: 'Osteoarthritis gives brief post-rest stiffness that loosens quickly, unlike the prolonged stiffness of inflammatory disease.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 68-year-old has knee pain that is worse climbing stairs and at the end of the day, with under 10 minutes of stiffness after resting, no warmth, and hard bony swelling with crepitus. The most likely diagnosis is:',
      options: [
        { id: 'a', text: 'Rheumatoid arthritis' },
        { id: 'b', text: 'Osteoarthritis' },
        { id: 'c', text: 'Gout' },
        { id: 'd', text: 'Septic arthritis' },
      ],
      answerId: 'b',
      explanation: 'Brief post-rest stiffness, pain worse with use, and hard bony swelling without warmth are the mechanical features of osteoarthritis.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'Which feature best indicates an inflammatory rather than a mechanical arthritis?',
      options: [
        { id: 'a', text: 'Stiffness lasting 5 minutes after resting' },
        { id: 'b', text: 'Pain worse with use and relieved by rest' },
        { id: 'c', text: 'Morning stiffness over an hour that eases with activity' },
        { id: 'd', text: 'Hard bony swelling without warmth' },
      ],
      answerId: 'c',
      explanation: 'Prolonged morning stiffness that improves with activity is the hallmark of an inflammatory arthritis; the other options are mechanical features.',
      tests: 'exam',
    },
  ],
};

export default fcp1InflammatoryVsMechanical;
