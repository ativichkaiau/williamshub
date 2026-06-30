import type { Lecture } from '../../lib/types';

export const arteriosclerosisPatterns: Lecture = {
  id: 'arteriosclerosis-patterns',
  title: 'Arteriosclerosis Patterns',
  system: 'cardiovascular',
  source: 'L5 — Vascular Disorders',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L5 Vascular Disorders' },
    { kind: 'disease', label: 'Arteriosclerosis' },
    { kind: 'mechanism', label: 'Wall thickening' },
    { kind: 'investigation', label: 'Histology' },
  ],

  highYield: [
    'Arteriosclerosis = arterial wall thickening + loss of elasticity; **4 patterns**.',
    '**Hyaline arteriolosclerosis**: pink homogeneous wall thickening — HTN, diabetes, elderly.',
    '**Hyperplastic arteriolosclerosis**: **“onion-skin”** concentric laminated wall — **severe/malignant HTN**.',
    '**Mönckeberg medial calcific sclerosis**: calcium in the **media** of muscular arteries — **clinically insignificant** (lumen preserved), incidental X-ray finding, age >50.',
    '**Fibromuscular intimal hyperplasia**: SMC + ECM intimal thickening after injury (stent/angioplasty, healed arteritis) → restenosis.',
  ],

  mechanism: {
    title: 'Four patterns of arterial hardening',
    steps: [
      { id: 's1', label: 'Vascular injury / stress' },
      { id: 's2', label: 'Wall thickening + ↓ elasticity', emphasis: 'key' },
    ],
    branches: [
      {
        fromId: 's2',
        title: 'Arterioles',
        steps: [
          { id: 'a1', label: 'Hyaline (HTN/DM) → luminal narrowing' },
          { id: 'a2', label: 'Hyperplastic (severe HTN) → onion-skin', emphasis: 'key' },
        ],
      },
      {
        fromId: 's2',
        title: 'Muscular artery media',
        steps: [
          { id: 'm1', label: 'Mönckeberg: Ca²⁺ in media' },
          { id: 'm2', label: 'Lumen preserved → clinically silent' },
        ],
      },
      {
        fromId: 's2',
        title: 'Post-injury intima',
        steps: [
          { id: 'f1', label: 'SMC + ECM intimal hyperplasia' },
          { id: 'f2', label: 'Restenosis' },
        ],
      },
    ],
  },

  examFindings: [
    { sign: 'Hyaline arteriolosclerosis → benign nephrosclerosis', mechanism: 'HTN/DM small-vessel target-organ damage', significance: 'key' },
    { sign: 'Hyperplastic + fibrinoid necrosis → malignant HTN', mechanism: 'Severe HTN, risk of organ rupture (brain, kidney, retina)', significance: 'key' },
    { sign: 'Mönckeberg → incidental arterial calcification on X-ray', mechanism: 'Medial calcium with a patent lumen', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Histology', meaning: 'The defining feature of each pattern' },
    { clue: 'X-ray', meaning: 'Mönckeberg medial calcification (incidental)' },
  ],

  treatment: [
    { logic: 'Control HTN / diabetes', detail: 'For arteriolosclerosis.' },
    { logic: 'Mönckeberg: no treatment', detail: 'Clinically insignificant.' },
    { logic: 'Drug-eluting stents reduce intimal hyperplasia', detail: 'Limit restenosis after intervention.' },
  ],

  mnemonics: [
    { hook: 'Hyaline = HTN/DM; Hyperplastic = severe HTN onion-skin', expansion: ['Hyaline → smooth pink thickening', 'Hyperplastic → onion-skin, malignant HTN'] },
    { hook: 'Mönckeberg = Media, harmless', expansion: ['Calcium in the media', 'Lumen patent → incidental'] },
  ],

  traps: [
    {
      questionCategory: 'Which pattern is clinically significant',
      wrongInstinct: 'Mönckeberg medial calcific sclerosis causes ischemia',
      rightAnswer: 'Mönckeberg is usually clinically insignificant — the lumen is preserved',
      why: 'Calcium deposits in the MEDIA, not the intima; the lumen stays patent, so it’s an incidental finding, not an obstructive lesion.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Onion-skin, concentric, laminated arteriolar wall thickening is characteristic of?',
      options: [
        { id: 'a', text: 'Hyaline arteriolosclerosis' },
        { id: 'b', text: 'Hyperplastic arteriolosclerosis (severe HTN)' },
        { id: 'c', text: 'Mönckeberg medial calcific sclerosis' },
        { id: 'd', text: 'Atherosclerosis' },
      ],
      answerId: 'b',
      explanation: 'Hyperplastic (“onion-skin”) arteriolosclerosis — concentric laminated SMC + reduplicated basement membrane — is the hallmark of severe/malignant hypertension. Hyaline is the smooth pink thickening of HTN/DM/aging.',
      tests: 'exam',
    },
  ],
};

export default arteriosclerosisPatterns;
