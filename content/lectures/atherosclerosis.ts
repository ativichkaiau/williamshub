import type { Lecture } from '../../lib/types';

export const atherosclerosis: Lecture = {
  id: 'atherosclerosis',
  title: 'Atherosclerosis',
  system: 'cardiovascular',
  source: 'L5 — Vascular Disorders',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L5 Vascular Disorders' },
    { kind: 'disease', label: 'Atherosclerosis' },
    { kind: 'mechanism', label: 'Response to injury' },
    { kind: 'exam', label: 'Vulnerable plaque' },
  ],

  highYield: [
    'Plaque buildup in **large elastic** (aorta, carotid, iliac) and **large muscular** (coronary, renal) arteries.',
    'Mechanism = **response-to-injury**: endothelial injury → LDL accumulation → macrophage **foam cells** → SMC migration + ECM.',
    'Morphology: **fatty streak → atheroma → fibroatheroma** (fibrous cap over a necrotic lipid core).',
    '**Unstable (vulnerable) plaque = thin cap + large lipid core** → rupture → thrombosis → ACS / stroke / limb ischemia.',
    'Major modifiable risks: **hyperlipidemia, HTN, diabetes, smoking**; non-modifiable: age, male, family history.',
  ],

  mechanism: {
    title: 'Response-to-injury → plaque → acute change',
    steps: [
      { id: 's1', label: 'Endothelial injury' },
      { id: 's2', label: 'LDL accumulation + oxidation' },
      { id: 's3', label: 'Monocyte → macrophage foam cells (fatty streak)', emphasis: 'key' },
      { id: 's4', label: 'SMC migration/proliferation + ECM' },
      { id: 's5', label: 'Fibroatheroma (fibrous cap + necrotic core)' },
    ],
    branches: [
      {
        fromId: 's5',
        title: 'Unstable plaque',
        steps: [
          { id: 'u1', label: 'Thin fibrous cap (vulnerable)', emphasis: 'key' },
          { id: 'u2', label: 'Rupture → luminal thrombosis', emphasis: 'danger' },
          { id: 'u3', label: 'ACS / stroke / limb ischemia' },
        ],
      },
    ],
  },

  examFindings: [
    { sign: 'Silent until critical stenosis or an acute event', mechanism: 'Slow progressive luminal narrowing', significance: 'key' },
    { sign: 'Arterial bruits (carotid, femoral)', mechanism: 'Turbulent flow across stenosis', significance: 'supportive' },
    { sign: 'Diminished peripheral pulses', mechanism: 'Flow-limiting plaque', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Lipid profile + CRP', meaning: 'Hyperlipidemia; inflammation marker' },
    { clue: 'CT coronary calcium score', meaning: 'Calcified plaque burden / risk' },
    { clue: 'Angiography / carotid duplex', meaning: 'Degree and site of stenosis' },
  ],

  treatment: [
    { logic: 'Risk-factor modification', detail: 'Statins, BP & glucose control, smoking cessation.' },
    { logic: 'Antiplatelet for secondary prevention', detail: 'After a vascular event.' },
    { logic: 'Revascularization for critical/symptomatic stenosis', detail: 'PCI / surgery.' },
  ],

  mnemonics: [
    { hook: 'Fatty streak → Atheroma → Fibroatheroma', expansion: ['Foam cells make the fatty streak', 'Lipid core + SMC/ECM make the atheroma', 'Fibrous cap over necrotic core = fibroatheroma'] },
  ],

  traps: [
    {
      questionCategory: 'Stable vs unstable plaque',
      wrongInstinct: 'The biggest / most stenotic plaque is the most dangerous',
      rightAnswer: 'Thin-cap vulnerable plaque (often <70% stenosis) ruptures → ACS',
      why: 'Acute events come from plaque COMPOSITION (thin cap, large lipid core), not just degree of stenosis — many MIs arise from non-critical plaques.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which plaque feature most predicts rupture and acute coronary syndrome?',
      options: [
        { id: 'a', text: 'Degree of calcification' },
        { id: 'b', text: 'Thin fibrous cap over a large necrotic lipid core' },
        { id: 'c', text: 'Plaque size alone' },
        { id: 'd', text: 'Medial calcium deposits' },
      ],
      answerId: 'b',
      explanation: 'A thin fibrous cap over a large lipid/necrotic core is the “vulnerable plaque” that ruptures and thromboses, causing ACS — independent of overall stenosis severity.',
      tests: 'mechanism',
    },
  ],
};

export default atherosclerosis;
