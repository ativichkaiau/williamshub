import type { Lecture } from '../../lib/types';
import { FRANK_STARLING } from '../../lib/figures';

export const hemodynamicsPreloadAfterloadCardiacOutput: Lecture = {
  id: 'hemodynamics-preload-afterload-cardiac-output',
  title: 'Hemodynamics: Preload, Afterload & Cardiac Output',
  system: 'cardiovascular',
  source: 'L10 — Cardiac Cycle & Hemodynamics',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L10 Cardiac Cycle' },
    { kind: 'mechanism', label: 'Determinants of SV/CO' },
    { kind: 'exam', label: 'Frank–Starling' },
  ],

  highYield: [
    '**Cardiac output (CO) = heart rate × stroke volume.** Stroke volume (SV) = end-diastolic − end-systolic volume, and is governed by **three factors: preload, afterload, and contractility.** CO ≈ 5 L/min at rest.',
    '**Preload = the degree of ventricular stretch at end-diastole** (≈ end-diastolic volume, driven by venous return). By the **Frank–Starling law, increased preload (more stretch) → more forceful contraction → increased stroke volume** (up to a point) — the intrinsic mechanism that **matches CO to venous return** and keeps the two ventricles balanced.',
    '**Afterload = the resistance the ventricle must overcome to eject** (≈ aortic/arterial pressure, TPR). **Increased afterload (e.g. hypertension, aortic stenosis) → harder to eject → reduced stroke volume** and increased cardiac work; chronic afterload → LV hypertrophy.',
    '**Contractility (inotropy) = the intrinsic strength of contraction at a given preload** — a property of the muscle itself, independent of stretch. **Increased by sympathetic stimulation/catecholamines, digoxin, ↑Ca²⁺** (positive inotropes); decreased by heart failure, β-blockers, hypoxia, acidosis. Increased contractility shifts the Frank–Starling curve **up**.',
    '**Flow, pressure, resistance:** **flow = ΔP ÷ resistance** (Ohm/Poiseuille analogy); resistance rises steeply as vessel **radius** falls (∝ 1/r⁴), which is why arterioles dominate resistance. Blood **velocity is highest in the aorta, slowest in capillaries** (huge total cross-sectional area → slow flow for exchange), then speeds up again in veins.',
  ],

  mechanism: {
    title: 'CO = HR × SV; SV set by preload, afterload, contractility',
    steps: [
      { id: 's1', label: 'CO = HR × SV; SV = EDV − ESV', emphasis: 'key' },
      { id: 's2', label: 'Preload = stretch/EDV → Frank–Starling: ↑stretch → ↑force', emphasis: 'key' },
      { id: 's3', label: 'Afterload = ejection resistance (BP/AS): ↑afterload → ↓SV', emphasis: 'key' },
      { id: 's4', label: 'Contractility = intrinsic force (sympathetic/digoxin ↑)', emphasis: 'key' },
      { id: 's5', label: 'Flow = ΔP/resistance; resistance ∝ 1/r⁴ (arterioles)' },
    ],
  },

  examFindings: [
    { sign: 'Increased venous return → increased stroke volume', mechanism: 'Frank–Starling (preload → force)', significance: 'key' },
    { sign: 'Reduced stroke volume in aortic stenosis/hypertension', mechanism: 'Increased afterload', significance: 'key' },
    { sign: 'Sympathetic stimulation increases contractility', mechanism: 'Positive inotropy (shifts Starling curve up)', significance: 'key' },
    { sign: 'Slowest blood velocity in the capillaries', mechanism: 'Largest total cross-sectional area (favours exchange)', significance: 'supportive' },
    { sign: 'Resistance rises sharply as arteriole radius falls', mechanism: 'Resistance ∝ 1/r⁴ (Poiseuille)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Formula for cardiac output', meaning: 'CO = heart rate × stroke volume' },
    { clue: 'Law relating stretch to force of contraction', meaning: 'Frank–Starling law (preload)' },
    { clue: 'The resistance against which the ventricle ejects', meaning: 'Afterload' },
    { clue: 'What increases contractility', meaning: 'Sympathetic stimulation/catecholamines, digoxin, ↑Ca²⁺' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Preload/afterload/contractility are the levers of heart-failure therapy (diuretics ↓preload, vasodilators ↓afterload, inotropes ↑contractility) and shock management. Frank–Starling balances the two ventricles. EF/echo: [[echocardiography-basics]]; the cycle it acts within: [[cardiac-cycle-heart-sounds]].' },
  ],

  mnemonics: [
    { hook: 'SV set by "Preload, Afterload, Contractility"', expansion: ['CO = HR × SV'] },
    { hook: 'Frank–Starling: "more in → more out" (stretch → force)', expansion: ['Matches CO to venous return'] },
  ],

  traps: [
    {
      questionCategory: 'Preload vs afterload',
      wrongInstinct: 'Afterload is the ventricular stretch at the end of filling',
      rightAnswer: 'PRELOAD is the end-diastolic stretch/volume (venous return); AFTERLOAD is the resistance/pressure the ventricle ejects against (arterial pressure/TPR)',
      why: 'Preload = "load before contraction" (filling/stretch); afterload = "load after contraction begins" (ejection resistance). Don\'t confuse them.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'According to the Frank–Starling law, increasing ventricular preload (end-diastolic stretch) will:',
      options: [
        { id: 'a', text: 'Decrease the force of contraction' },
        { id: 'b', text: 'Increase the force of contraction and stroke volume (up to a point)' },
        { id: 'c', text: 'Have no effect on stroke volume' },
        { id: 'd', text: 'Only increase heart rate' },
      ],
      answerId: 'b',
      explanation: 'Greater end-diastolic stretch (preload) increases the force of contraction and thus stroke volume — the intrinsic Frank–Starling mechanism that matches cardiac output to venous return.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Chronic hypertension increases which determinant of stroke volume, thereby increasing cardiac work?',
      options: [
        { id: 'a', text: 'Preload' },
        { id: 'b', text: 'Afterload' },
        { id: 'c', text: 'Contractility' },
        { id: 'd', text: 'Heart rate' },
      ],
      answerId: 'b',
      explanation: 'Hypertension raises the arterial pressure the ventricle must eject against (afterload), reducing stroke volume for a given contractility and increasing cardiac workload — eventually causing LV hypertrophy.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Frank–Starling relationship', svg: FRANK_STARLING, caption: 'Increased preload (end-diastolic stretch) → increased force/stroke volume; increased contractility shifts the curve upward.' },
  ],
};

export default hemodynamicsPreloadAfterloadCardiacOutput;
