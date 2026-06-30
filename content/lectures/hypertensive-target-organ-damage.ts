import type { Lecture } from '../../lib/types';
import { HYPERTROPHY_PATTERNS } from '../../lib/figures';

export const hypertensiveTargetOrganDamage: Lecture = {
  id: 'hypertensive-target-organ-damage',
  title: 'Hypertensive Target-Organ Damage',
  system: 'cardiovascular',
  source: 'L16 — Hypertension',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L16 Hypertension' },
    { kind: 'disease', label: 'Hypertensive heart disease' },
    { kind: 'mechanism', label: 'Pressure overload' },
    { kind: 'exam', label: 'Concentric LVH + S4' },
  ],

  highYield: [
    'Sustained HTN → **target-organ damage (TOD)** and cardiovascular disease.',
    'TOD: **arterial stiffness** (PP≥60, PWV>10), **LVH** (ECG/echo), **microalbuminuria/CKD**, **ABI<0.9**, **hypertensive retinopathy**.',
    '**Hypertensive heart disease**: **concentric LVH** → diastolic dysfunction → LA enlargement → late dilation/CHF; risk of SCD.',
    'CVD: stroke (ischemic/hemorrhagic), CAD, **HF (incl HFpEF)**, PAD, AF, aortic dissection.',
    'HTN accelerates **atherosclerosis** and is a key vascular risk factor.',
  ],

  mechanism: {
    title: 'Pressure load → concentric LVH → diastolic failure',
    steps: [
      { id: 's1', label: 'Sustained HTN → ↑ afterload' },
      { id: 's2', label: 'Concentric LVH', emphasis: 'key' },
      { id: 's3', label: '↑ stiffness (diastolic dysfunction) + LA enlargement' },
      { id: 's4', label: 'Late dilation / CHF', emphasis: 'danger' },
    ],
    branches: [
      {
        fromId: 's1',
        title: 'Vascular',
        steps: [{ id: 'v1', label: 'Accelerated atherosclerosis → stroke/CAD/PAD/dissection' }],
      },
    ],
  },

  examFindings: [
    { sign: 'Sustained (heaving) apex + S4', mechanism: 'Concentric LVH, diastolic dysfunction', significance: 'key' },
    { sign: 'Hypertensive retinopathy (AV nicking, hemorrhages)', mechanism: 'Retinal vascular damage', significance: 'key' },
    { sign: 'Wide pulse pressure', mechanism: 'Arterial stiffness', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'ECG / echo (LVH)', meaning: 'Cardiac TOD' },
    { clue: 'Urine ACR (microalbuminuria), eGFR', meaning: 'Renal TOD' },
    { clue: 'Fundoscopy, ABI', meaning: 'Retinal & peripheral vascular TOD' },
  ],

  treatment: [
    { logic: 'BP control reverses/limits TOD', detail: 'Regression of LVH with treatment.' },
    { logic: 'Treat established CVD', detail: 'Antiplatelet/statin as indicated.' },
  ],

  mnemonics: [
    { hook: 'HTN heart disease = Concentric LVH → diastolic dysfunction → HFpEF', expansion: ['Pressure overload first'] },
    { hook: 'TOD: Brain, Heart, Kidney, Eye, Vessels', expansion: ['Stroke, LVH, CKD, retinopathy, PAD'] },
  ],

  traps: [
    {
      questionCategory: 'HTN heart disease pattern',
      wrongInstinct: 'Hypertension first causes a dilated, low-EF heart',
      rightAnswer: 'HTN causes CONCENTRIC LVH → diastolic dysfunction (HFpEF) first; dilation/systolic failure is late',
      why: 'Pressure overload produces concentric hypertrophy and diastolic dysfunction (HFpEF) early; eccentric dilation with systolic failure occurs only in late/decompensated disease.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Early hypertensive heart disease most characteristically causes:',
      options: [
        { id: 'a', text: 'Eccentric dilation with low EF' },
        { id: 'b', text: 'Concentric LVH with diastolic dysfunction (preserved EF)' },
        { id: 'c', text: 'Right ventricular hypertrophy' },
        { id: 'd', text: 'Pericardial effusion' },
      ],
      answerId: 'b',
      explanation: 'Chronic pressure overload produces concentric LV hypertrophy with diastolic dysfunction (HFpEF) first; eccentric dilation and systolic failure are late features.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Concentric LVH (pressure overload)', svg: HYPERTROPHY_PATTERNS, caption: 'Hypertension → concentric hypertrophy (thick wall, small cavity).' },
  ],
};

export default hypertensiveTargetOrganDamage;
