import type { Lecture } from '../../lib/types';

export const acsSpectrum: Lecture = {
  id: 'acs-spectrum',
  title: 'ACS Spectrum & Diagnosis',
  system: 'cardiovascular',
  source: 'L9 — Acute Coronary Syndrome',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L9 Acute Coronary Syndrome' },
    { kind: 'disease', label: 'Acute coronary syndrome' },
    { kind: 'mechanism', label: 'Plaque rupture' },
    { kind: 'investigation', label: 'ECG + troponin' },
  ],

  highYield: [
    'ACS = acute plaque rupture → thrombus → spectrum: **unstable angina (UA), NSTEMI, STEMI**.',
    'Diagnosis triad: **symptoms + ECG + troponin** (± coronary imaging).',
    '**STEMI** = ST elevation (total occlusion) → immediate reperfusion; **NSTEMI** = troponin↑ without ST elevation (partial); **UA** = symptoms, no troponin rise.',
    'Territory: **anterior V1–V4 (LAD)** · **inferior II/III/aVF (RCA)** · **lateral V5–V6/I/aVL (LCx)** · posterior V7–V9 · RV V3R–V4R; reciprocal change confirms.',
    'STEMI mimics: **pericarditis** (diffuse STE + PR depression/Spodick, no reciprocal), **PE** (S1Q3T3), **aVR elevation + diffuse ST↓** = left-main/multivessel.',
  ],

  mechanism: {
    title: 'Plaque rupture → thrombus → ACS spectrum',
    steps: [
      { id: 's1', label: 'Plaque rupture / erosion' },
      { id: 's2', label: 'Platelet aggregation + thrombus', emphasis: 'key' },
      { id: 's3', label: 'Coronary occlusion' },
    ],
    branches: [
      {
        fromId: 's3',
        title: 'Partial occlusion',
        steps: [{ id: 'p1', label: 'UA / NSTEMI (ST↓, T-inversion)' }],
      },
      {
        fromId: 's3',
        title: 'Total occlusion',
        steps: [{ id: 't1', label: 'STEMI (ST elevation)', emphasis: 'danger' }],
      },
    ],
  },

  examFindings: [
    { sign: 'Ischemic chest pain ± radiation, diaphoresis', mechanism: 'Myocardial ischemia + sympathetic activation', significance: 'key' },
    { sign: 'ST elevation in a coronary territory (+ reciprocal change)', mechanism: 'Transmural injury current = STEMI', significance: 'key' },
    { sign: 'ST depression / T inversion ± troponin', mechanism: 'Subendocardial ischemia = NSTEMI/UA', significance: 'key' },
  ],

  investigations: [
    { clue: '12-lead ECG', meaning: 'STEMI vs NSTEMI; territory + reciprocal change' },
    { clue: 'hs-troponin I/T', meaning: 'Myocardial injury (distinguishes NSTEMI from UA)' },
    { clue: 'Coronary angiography', meaning: 'Identifies the culprit vessel' },
  ],

  treatment: [
    { logic: 'STEMI → immediate reperfusion', detail: 'See ACS management module.' },
    { logic: 'NSTEMI/UA → risk-stratify + antithrombotics, often invasive', detail: 'Timing by risk.' },
  ],

  mnemonics: [
    { hook: 'ACS = UA / NSTEMI / STEMI', expansion: ['No marker → UA', 'Troponin↑ no STE → NSTEMI', 'ST elevation → STEMI'] },
    { hook: 'Mimics: Pericarditis (Spodick), PE (S1Q3T3), aVR↑ = Left main', expansion: ['Diffuse concave STE + PR depression = pericarditis', 'S1Q3T3 = PE'] },
  ],

  traps: [
    {
      questionCategory: 'STEMI vs mimic',
      wrongInstinct: 'Any ST elevation = STEMI → thrombolyse',
      rightAnswer: 'Diffuse concave STE + PR depression (Spodick), no reciprocal change = pericarditis',
      why: 'Pericarditis gives widespread concave ST elevation with PR depression and NO reciprocal changes; treating it as STEMI exposes the patient to thrombolysis harm.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'ECG shows diffuse concave ST elevation with PR-segment depression and no reciprocal ST depression, in a patient with pleuritic chest pain relieved by leaning forward. Most likely?',
      options: [
        { id: 'a', text: 'Anterior STEMI' },
        { id: 'b', text: 'Acute pericarditis' },
        { id: 'c', text: 'Inferior STEMI' },
        { id: 'd', text: 'Pulmonary embolism' },
      ],
      answerId: 'b',
      explanation: 'Diffuse (non-territorial) concave ST elevation with PR depression (Spodick sign) and no reciprocal changes, plus positional pleuritic pain, is acute pericarditis — not a STEMI.',
      tests: 'investigation',
    },
  ],
};

export default acsSpectrum;
