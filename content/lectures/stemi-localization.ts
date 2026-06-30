import type { Lecture } from '../../lib/types';

export const stemiLocalization: Lecture = {
  id: 'stemi-localization',
  title: 'STEMI Localization & Reciprocal Changes',
  system: 'cardiovascular',
  source: 'L2 — Abnormal ECG',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L2 Abnormal ECG' },
    { kind: 'disease', label: 'STEMI' },
    { kind: 'mechanism', label: 'Coronary occlusion' },
    { kind: 'investigation', label: 'Lead territories' },
    { kind: 'treatment', label: 'Reperfusion' },
  ],

  highYield: [
    'ST elevation **localizes** the infarct to a coronary territory; **reciprocal ST depression** confirms a true STEMI.',
    '**Anterior V1–V4 (LAD)** · **Septal V1–V2** · **Lateral V5–V6, I, aVL** · **Inferior II, III, aVF (RCA/LCx)** · **Posterior V7–V9** · **RV V3R–V4R**.',
    '**Inferior STEMI → get right-sided leads (V4R)** to catch RV involvement.',
    'Reciprocal change (ST depression in the opposite wall) supports STEMI over mimics.',
    '**New LBBB + ischemic symptoms = STEMI-equivalent.**',
  ],

  mechanism: {
    title: 'Coronary occlusion → territory injury current → ST elevation',
    steps: [
      { id: 's1', label: 'Plaque rupture → coronary occlusion', emphasis: 'key' },
      { id: 's2', label: 'Transmural ischemia in the supplied territory' },
      { id: 's3', label: 'Injury current' },
      { id: 's4', label: 'ST elevation in facing leads' },
      { id: 's5', label: 'Reciprocal ST depression in opposite leads' },
    ],
  },

  examFindings: [
    { sign: 'Anterior: V1–V4', mechanism: 'LAD territory', significance: 'key' },
    { sign: 'Inferior: II, III, aVF', mechanism: 'RCA (or LCx) territory', significance: 'key' },
    { sign: 'Lateral: V5–V6, I, aVL', mechanism: 'LCx / diagonal territory', significance: 'key' },
    { sign: 'Posterior: tall R + ST↓ in V1–V3 (confirm V7–V9)', mechanism: 'Posterior wall (mirror image)', significance: 'supportive' },
    { sign: 'RV: V3R–V4R (with inferior MI)', mechanism: 'RCA proximal — preload-dependent, avoid nitrates', significance: 'supportive' },
  ],

  investigations: [
    { clue: '12-lead ECG ± right-sided / posterior leads', meaning: 'Localize the culprit territory' },
    { clue: 'Troponin (rise & fall)', meaning: 'Confirms infarction — but do NOT wait for it to activate the cath lab in STEMI' },
    { clue: 'V4R in every inferior STEMI', meaning: 'Detects RV infarct (changes management)' },
  ],

  treatment: [
    { logic: 'Reperfusion: primary PCI (preferred) or thrombolysis if PCI unavailable', detail: 'Time = myocardium.' },
    { logic: 'Inferior + RV infarct → give fluids, AVOID nitrates', detail: 'RV infarct is preload-dependent; nitrates can cause profound hypotension.' },
    { logic: 'Standard adjuncts (aspirin, antiplatelet, anticoagulation)', detail: 'Per ACS guidelines.' },
  ],

  mnemonics: [
    { hook: 'Inferior MI → check the Right, hold the Nitrates', expansion: ['Inferior STEMI (II/III/aVF) → do V4R', 'RV infarct is preload-dependent → fluids, NOT nitrates'] },
    { hook: 'Reciprocal change confirms', expansion: ['ST elevation + opposite-lead ST depression = true STEMI', 'Inferior STEMI shows reciprocal depression in I / aVL'] },
  ],

  traps: [
    {
      questionCategory: 'Lead territory',
      wrongInstinct: 'ST elevation in II, III, aVF = anterior MI',
      rightAnswer: 'II, III, aVF = INFERIOR MI (RCA/LCx)',
      why: 'Anterior is V1–V4 (LAD); the inferior leads are II, III, aVF. Mixing them up changes the artery and the management.',
    },
    {
      questionCategory: 'Inferior STEMI management',
      wrongInstinct: 'Give nitrates for the chest pain',
      rightAnswer: 'Check V4R first; if RV infarct, give fluids and avoid nitrates',
      why: 'RV infarction is preload-dependent — nitrates drop preload and cause severe hypotension.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'ST elevation in II, III, and aVF with reciprocal ST depression in I and aVL. Which artery, and which extra lead should you obtain?',
      options: [
        { id: 'a', text: 'LAD; obtain V7–V9' },
        { id: 'b', text: 'RCA; obtain V4R (right-sided lead)' },
        { id: 'c', text: 'LCx; obtain aVR' },
        { id: 'd', text: 'LAD; no extra leads needed' },
      ],
      answerId: 'b',
      explanation: 'Inferior STEMI (II, III, aVF) is usually RCA. Always obtain V4R to detect RV infarction, which is preload-dependent and changes management (fluids, avoid nitrates).',
      tests: 'investigation',
    },
  ],

  figures: [
    { title: 'ST-elevation (STEMI)', ecg: 'stemi', caption: 'Convex ST elevation in the leads facing the infarct.' },
  ],
};

export default stemiLocalization;
