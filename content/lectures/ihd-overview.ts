import type { Lecture } from '../../lib/types';

export const ihdOverview: Lecture = {
  id: 'ihd-overview',
  title: 'Ischemic Heart Disease — CCS vs ACS',
  system: 'cardiovascular',
  source: 'L6 — Ischemic Heart Disease',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L6 Ischemic Heart Disease' },
    { kind: 'disease', label: 'Ischemic heart disease' },
    { kind: 'mechanism', label: 'Supply vs demand' },
    { kind: 'exam', label: 'Angina types' },
  ],

  highYield: [
    'IHD = imbalance between coronary **supply** and myocardial **demand**; **>90% coronary atherosclerosis**.',
    'Four presentations: **angina, MI, sudden cardiac death, chronic IHD with heart failure**.',
    '**CCS (chronic) = stable plaque**: fixed stenosis (>70% → exertional angina; >90% → symptoms at rest) ± vasospasm.',
    '**ACS (acute) = unstable plaque** (acute plaque change → thrombus) → unstable angina / MI.',
    'Angina: **stable** (exertional, relieved by rest/nitrates <5 min), **Prinzmetal** (rest/night, vasospasm), **unstable** (rest, crescendo, >20 min, not relieved).',
  ],

  mechanism: {
    title: 'Stable plaque (CCS) vs acute plaque change (ACS)',
    steps: [{ id: 's1', label: 'Coronary atherosclerosis', emphasis: 'key' }],
    branches: [
      {
        fromId: 's1',
        title: 'Stable plaque → CCS',
        steps: [
          { id: 'c1', label: 'Fixed stenosis >70% → exertional angina' },
          { id: 'c2', label: '>90% → ischemia/HF at rest' },
        ],
      },
      {
        fromId: 's1',
        title: 'Acute plaque change → ACS',
        steps: [
          { id: 'a1', label: 'Rupture/erosion → thrombus', emphasis: 'key' },
          { id: 'a2', label: 'Unstable angina / MI', emphasis: 'danger' },
        ],
      },
      {
        fromId: 's1',
        title: 'Vasospasm',
        steps: [{ id: 'v1', label: 'Prinzmetal (variant) angina' }],
      },
    ],
  },

  examFindings: [
    { sign: 'Stable angina: exertional pain relieved by rest/nitrates <5 min', mechanism: 'Demand ischemia across a fixed stenosis', significance: 'key' },
    { sign: 'Unstable angina: rest pain, crescendo, >20 min, NOT relieved', mechanism: 'Acute plaque change (ACS)', significance: 'key' },
    { sign: 'Prinzmetal: rest/night pain unrelated to exertion', mechanism: 'Coronary vasospasm', significance: 'key' },
  ],

  investigations: [
    { clue: 'ECG', meaning: 'ST changes with ischemia; may be normal at rest' },
    { clue: 'Stress test / CT coronary angiography', meaning: 'Functional & anatomic CCS assessment' },
    { clue: 'Troponin', meaning: 'Normal in stable angina; rises in MI' },
  ],

  treatment: [
    { logic: 'Anti-anginal: nitrates, beta-blockers, calcium channel blockers', detail: 'Reduce demand / relieve spasm.' },
    { logic: 'Event prevention: antiplatelet + statin', detail: 'Stabilize plaque, prevent thrombosis.' },
    { logic: 'Revascularization for obstructive lesions', detail: 'PCI / CABG.' },
  ],

  mnemonics: [
    { hook: 'Stable rests, Unstable doesn’t', expansion: ['Stable → relieved by rest/nitrates <5 min', 'Unstable → rest pain, crescendo, >20 min, not relieved', 'Prinzmetal → vasospasm at night'] },
    { hook: '70 walks, 90 rests', expansion: ['70% stenosis → angina on exertion', '90% stenosis → symptoms at rest / HF'] },
  ],

  traps: [
    {
      questionCategory: 'Stable vs unstable angina',
      wrongInstinct: 'Exertional pain relieved by rest = unstable',
      rightAnswer: 'Exertional + relieved by rest/nitrates = STABLE; rest pain, crescendo, >20 min not relieved = UNSTABLE (ACS)',
      why: 'Unstable angina is ACS from an unstable plaque — its hallmark is pain AT REST / crescendo not relieved by rest, which changes urgency to emergency.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Chest pain at rest, increasing in frequency and severity over days, lasting >20 min and not relieved by rest or nitrates. Which category?',
      options: [
        { id: 'a', text: 'Stable angina' },
        { id: 'b', text: 'Unstable angina (ACS)' },
        { id: 'c', text: 'Prinzmetal (variant) angina' },
        { id: 'd', text: 'Non-cardiac chest pain' },
      ],
      answerId: 'b',
      explanation: 'Rest pain, crescendo pattern, prolonged duration, and lack of relief define unstable angina — an acute coronary syndrome from an unstable plaque, not the exertional/relieved pattern of stable angina.',
      tests: 'exam',
    },
  ],
};

export default ihdOverview;
