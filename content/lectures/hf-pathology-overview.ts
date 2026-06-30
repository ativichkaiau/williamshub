import type { Lecture } from '../../lib/types';
import { FRANK_STARLING } from '../../lib/figures';

export const hfPathologyOverview: Lecture = {
  id: 'hf-pathology-overview',
  title: 'Heart Failure — Definition & Staging',
  system: 'cardiovascular',
  source: 'L14 — Pathology of Heart Failure',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L14 Pathology of HF' },
    { kind: 'disease', label: 'Heart failure' },
    { kind: 'mechanism', label: 'Final common pathway' },
    { kind: 'investigation', label: 'LVEF staging' },
  ],

  highYield: [
    'HF = clinical syndrome from any structural/functional impairment of ventricular **filling or ejection**; **final common pathway**. Commonest causes: **IHD & hypertension**.',
    '**HF ≠ cardiac dysfunction** — HF requires the clinical syndrome (symptoms + signs).',
    '**HFrEF (LVEF ≤40%, systolic)** vs **HFpEF (LVEF ≥50%, diastolic)**; HFmrEF 41–49%.',
    'ACC/AHA **stages A–D**: A at risk, B structural/no symptoms, C structural + symptoms, D refractory.',
    'NYHA **I–IV** functional class (I no limitation → IV symptoms at rest).',
  ],

  mechanism: {
    title: 'Stages: risk → structural → symptomatic → refractory',
    steps: [
      { id: 's1', label: 'Risk factors (HTN/DM/atherosclerosis) — Stage A' },
      { id: 's2', label: 'Structural heart disease, no symptoms — Stage B', emphasis: 'key' },
      { id: 's3', label: 'Symptomatic HF — Stage C' },
      { id: 's4', label: 'Refractory HF — Stage D', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Dyspnea, orthopnea, PND, fatigue, edema', mechanism: 'Congestion + low output', significance: 'key' },
    { sign: '↑JVP, hepatojugular reflux, S3 gallop, displaced apex', mechanism: 'Volume overload / LV dysfunction', significance: 'key' },
    { sign: 'NYHA class graded by symptom limitation', mechanism: 'Functional severity', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Echo: LVEF', meaning: 'HFrEF (≤40) vs HFpEF (≥50) — diagnostic' },
    { clue: 'BNP / NT-proBNP', meaning: 'Raised with myocardial stretch' },
    { clue: 'CXR', meaning: 'Cardiomegaly, pulmonary edema' },
  ],

  treatment: [
    { logic: 'Guideline-directed medical therapy by stage', detail: 'ACEi/ARB, beta-blocker, MRA, SGLT2i.' },
    { logic: 'Stage A → risk-factor control; Stage D → transplant / mechanical support', detail: 'Stage-based escalation.' },
  ],

  mnemonics: [
    { hook: 'HFrEF ≤40 (systolic), HFpEF ≥50 (diastolic)', expansion: ['41–49 = mildly reduced'] },
    { hook: 'Stages A–D (structure), NYHA I–IV (symptoms)', expansion: ['Stage = structural; NYHA = functional'] },
  ],

  traps: [
    {
      questionCategory: 'HF vs cardiac dysfunction',
      wrongInstinct: 'Any reduced EF / cardiac dysfunction = heart failure',
      rightAnswer: 'HF is a clinical SYNDROME (symptoms + signs); asymptomatic LV dysfunction is Stage B, not HF',
      why: 'Cardiac dysfunction can be asymptomatic (Stage B); HF requires the clinical syndrome of symptoms and signs.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient has structural heart disease (prior MI, reduced EF) but NO symptoms. ACC/AHA stage?',
      options: [
        { id: 'a', text: 'A' },
        { id: 'b', text: 'B' },
        { id: 'c', text: 'C' },
        { id: 'd', text: 'D' },
      ],
      answerId: 'b',
      explanation: 'Stage B = structural heart disease without symptoms or signs of HF. Symptoms would make it Stage C; at-risk without structural disease is Stage A.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Frank-Starling curves', svg: FRANK_STARLING, caption: 'The failing ventricle generates less stroke volume for a given preload.' },
  ],
};

export default hfPathologyOverview;
