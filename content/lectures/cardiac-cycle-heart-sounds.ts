import type { Lecture } from '../../lib/types';
import { WIGGERS_CYCLE } from '../../lib/figures';

export const cardiacCycleHeartSounds: Lecture = {
  id: 'cardiac-cycle-heart-sounds',
  title: 'The Cardiac Cycle & Heart Sounds',
  system: 'cardiovascular',
  source: 'L10 — Cardiac Cycle & Hemodynamics',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L10 Cardiac Cycle' },
    { kind: 'mechanism', label: 'Pressure/volume phases' },
    { kind: 'exam', label: 'S1/S2 · isovolumetric' },
  ],

  highYield: [
    '**The cardiac cycle alternates systole (contraction/ejection) and diastole (relaxation/filling).** At rest, **diastole occupies ~⅔ of the cycle** — important because coronary filling happens in diastole, so tachycardia (which shortens diastole most) can cause ischaemia.',
    '**Ventricular systole has two phases:** **isovolumetric contraction** (all valves shut, pressure rises, NO volume change — between mitral closing and aortic opening) → **ejection** (aortic valve opens, blood ejected). **Diastole:** **isovolumetric relaxation** (all valves shut) → **filling** (mitral opens; rapid filling then the **atrial kick** tops it off).',
    '**Heart sounds mark valve closures.** **S1 ("lub") = AV valve (mitral + tricuspid) closure** at the start of systole. **S2 ("dub") = semilunar valve (aortic + pulmonary) closure** at the start of diastole. **Physiological splitting of S2** on inspiration = delayed pulmonary valve closure (more venous return to the right heart).',
    '**Extra sounds:** **S3** (early diastole, rapid filling) — normal in youth/athletes, but pathological (volume overload/HF) in others; **S4** (late diastole, atrial kick against a stiff ventricle) — always abnormal (e.g. LV hypertrophy, ischaemia). **Murmurs** = turbulent flow across valves — systolic (AS, MR) vs diastolic (AR, MS).',
    '**The valves open and close passively, driven by pressure gradients.** When ventricular pressure exceeds atrial → AV valves shut (S1); when it exceeds aortic → aortic valve opens; when it falls below aortic → aortic valve shuts (S2, the dicrotic notch). The Wiggers diagram overlays these pressures with the ECG and sounds.',
  ],

  mechanism: {
    title: 'Contract (isovolumetric→eject) then relax (→fill)',
    steps: [
      { id: 's1', label: 'Diastole ~⅔ of the cycle (coronary filling)', emphasis: 'key' },
      { id: 's2', label: 'Systole: isovolumetric contraction → ejection', emphasis: 'key' },
      { id: 's3', label: 'Diastole: isovolumetric relaxation → filling (+ atrial kick)' },
      { id: 's4', label: 'S1 = AV valves close (systole start); S2 = semilunar close (diastole start)', emphasis: 'key' },
      { id: 's5', label: 'S3 = volume overload; S4 = stiff ventricle (atrial kick)' },
    ],
  },

  examFindings: [
    { sign: 'S1 ("lub")', mechanism: 'Mitral + tricuspid (AV) valve closure — start of systole', significance: 'key' },
    { sign: 'S2 ("dub")', mechanism: 'Aortic + pulmonary (semilunar) valve closure — start of diastole', significance: 'key' },
    { sign: 'Isovolumetric contraction (no volume change)', mechanism: 'All four valves closed, pressure rising', significance: 'key' },
    { sign: 'S3 gallop', mechanism: 'Rapid ventricular filling — volume overload/HF (or normal in youth)', significance: 'supportive' },
    { sign: 'S4 gallop', mechanism: 'Atrial kick into a stiff ventricle (LVH, ischaemia)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Which valves close to produce S1', meaning: 'AV valves (mitral + tricuspid)' },
    { clue: 'Which valves close to produce S2', meaning: 'Semilunar valves (aortic + pulmonary)' },
    { clue: 'Phase with all valves closed and rising pressure', meaning: 'Isovolumetric contraction' },
    { clue: 'A fourth heart sound (S4) indicates', meaning: 'A stiff, non-compliant ventricle' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The cycle underlies auscultation ([[cardiovascular-examination]]), murmur timing, and why tachycardia impairs coronary filling. The pressures/volumes drive stroke volume and CO ([[hemodynamics-preload-afterload-cardiac-output]]). Heart failure/valve pathology are in HCVS-2.' },
  ],

  mnemonics: [
    { hook: 'S1 = AV valves shut (systole begins); S2 = semilunar shut (diastole begins)', expansion: ['"Lub-dub"'] },
    { hook: 'S3 = "sloshing-in" (volume overload); S4 = "stiff-wall" (atrial kick)', expansion: ['S4 always abnormal'] },
  ],

  traps: [
    {
      questionCategory: 'What S2 represents',
      wrongInstinct: 'The second heart sound (S2) is produced by closure of the mitral and tricuspid valves',
      rightAnswer: 'S2 is the closure of the SEMILUNAR (aortic + pulmonary) valves at the start of DIASTOLE; S1 is AV valve closure at the start of systole',
      why: 'S1 = AV valves (start of systole), S2 = semilunar valves (start of diastole). Don\'t swap them.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The first heart sound (S1) is produced by:',
      options: [
        { id: 'a', text: 'Closure of the aortic and pulmonary valves' },
        { id: 'b', text: 'Closure of the mitral and tricuspid (AV) valves' },
        { id: 'c', text: 'Opening of the AV valves' },
        { id: 'd', text: 'Atrial contraction' },
      ],
      answerId: 'b',
      explanation: 'S1 marks closure of the atrioventricular valves (mitral + tricuspid) at the onset of ventricular systole. S2 is closure of the semilunar valves at the onset of diastole.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'During isovolumetric contraction of the ventricle:',
      options: [
        { id: 'a', text: 'The aortic valve is open and blood is ejected' },
        { id: 'b', text: 'All four valves are closed and ventricular volume does not change while pressure rises' },
        { id: 'c', text: 'The mitral valve is open and the ventricle fills' },
        { id: 'd', text: 'Ventricular pressure falls' },
      ],
      answerId: 'b',
      explanation: 'Isovolumetric contraction occurs between mitral closure and aortic opening: all valves are shut, so volume is constant while pressure rises rapidly until it exceeds aortic pressure and ejection begins.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'The Wiggers diagram', svg: WIGGERS_CYCLE, caption: 'Pressures/volume/ECG/sounds through the cycle: isovolumetric contraction → ejection → isovolumetric relaxation → filling; S1 (AV close), S2 (semilunar close).' },
  ],
};

export default cardiacCycleHeartSounds;
