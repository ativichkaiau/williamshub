import type { Lecture } from '../../lib/types';
import { HYPERTROPHY_PATTERNS } from '../../lib/figures';

export const cardiacHypertrophyRemodeling: Lecture = {
  id: 'cardiac-hypertrophy-remodeling',
  title: 'Cardiac Hypertrophy & Remodeling',
  system: 'cardiovascular',
  source: 'L14 — Pathology of Heart Failure',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L14 Pathology of HF' },
    { kind: 'disease', label: 'Cardiac remodeling' },
    { kind: 'mechanism', label: 'Overload pattern' },
    { kind: 'investigation', label: 'Wall vs cavity' },
  ],

  highYield: [
    'Cardiac hypertrophy = ↑heart weight/muscle mass — two patterns by overload type.',
    '**Concentric (pressure overload)**: thick wall, small cavity — **HTN, aortic stenosis**.',
    '**Eccentric (volume overload)**: dilated chamber — **aortic/mitral regurgitation**, dilated/failed heart.',
    'Micro: **cardiomyocyte hypertrophy** (↑transverse diameter), **interstitial fibrosis**, ↓capillary density, apoptosis.',
    'Molecular: **re-expression of fetal genes (ANP)**, pro-hypertrophic (EGR1), pro-fibrotic (TGF-β), pro-inflammatory (IL-1/6, TNF-α).',
  ],

  mechanism: {
    title: 'Overload type → hypertrophy pattern → maladaptive remodeling',
    steps: [{ id: 's1', label: 'Chronic overload', emphasis: 'key' }],
    branches: [
      {
        fromId: 's1',
        title: 'Pressure overload',
        steps: [{ id: 'p1', label: 'HTN/AS → concentric (thick wall, small cavity)' }],
      },
      {
        fromId: 's1',
        title: 'Volume overload',
        steps: [{ id: 'v1', label: 'AR/MR → eccentric (chamber dilation)' }],
      },
      {
        fromId: 's1',
        title: 'Tissue level',
        steps: [
          { id: 'm1', label: 'Myocyte hypertrophy + fibrosis + apoptosis' },
          { id: 'm2', label: 'Maladaptive remodeling', emphasis: 'danger' },
        ],
      },
    ],
  },

  examFindings: [
    { sign: 'Concentric LVH: sustained heaving apex, S4', mechanism: 'Stiff hypertrophied LV', significance: 'key' },
    { sign: 'Eccentric/dilated: displaced apex, S3', mechanism: 'Volume-overloaded dilated LV', significance: 'key' },
    { sign: 'Histology: enlarged myocytes + interstitial fibrosis', mechanism: 'Cellular remodeling', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Echo: wall thickness vs cavity size', meaning: 'Concentric vs eccentric pattern' },
    { clue: 'ECG: LVH; Picrosirius red (fibrosis)', meaning: 'Hypertrophy & fibrosis' },
  ],

  treatment: [
    { logic: 'Treat the overload (BP control, valve repair)', detail: 'Remove the driving stimulus.' },
    { logic: 'Neurohormonal blockade reverse-remodels', detail: 'ACEi/ARB, beta-blocker, MRA.' },
  ],

  mnemonics: [
    { hook: 'Pressure → Concentric (thick); Volume → Eccentric (dilated)', expansion: ['Concentric = small cavity, thick wall', 'Eccentric = dilated'] },
    { hook: 'Failing heart re-expresses FETAL genes (ANP)', expansion: ['Plus TGF-β fibrosis, TNF-α inflammation'] },
  ],

  traps: [
    {
      questionCategory: 'Hypertrophy pattern by overload',
      wrongInstinct: 'Hypertension causes eccentric (dilated) hypertrophy',
      rightAnswer: 'Pressure overload (HTN, AS) → CONCENTRIC; volume overload (AR, MR) → ECCENTRIC',
      why: 'Pressure overload thickens the wall (concentric, small cavity); volume overload dilates the chamber (eccentric).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: "A long-standing hypertensive patient's heart shows a thick LV wall with a small cavity. Pattern and cause?",
      options: [
        { id: 'a', text: 'Eccentric, volume overload' },
        { id: 'b', text: 'Concentric, pressure overload' },
        { id: 'c', text: 'Eccentric, pressure overload' },
        { id: 'd', text: 'Concentric, volume overload' },
      ],
      answerId: 'b',
      explanation: 'Chronic pressure overload (hypertension) produces concentric hypertrophy — a thickened wall with a small cavity. Volume overload (regurgitation) gives eccentric, dilated hypertrophy.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Hypertrophy patterns', svg: HYPERTROPHY_PATTERNS, caption: 'Concentric (pressure overload) vs eccentric (volume overload) vs normal.' },
  ],
};

export default cardiacHypertrophyRemodeling;
