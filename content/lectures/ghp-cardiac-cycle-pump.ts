import type { Lecture } from '../../lib/types';
import { WIGGERS_CYCLE, PV_LOOP_NORMAL } from '../../lib/figures';

export const ghpCardiacCyclePump: Lecture = {
  id: 'ghp-cardiac-cycle-pump',
  title: 'The Cardiac Cycle & Valve Function',
  system: 'cardiovascular',
  source: 'Ch 9 — Heart Muscle; The Heart as a Pump',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 9 The Heart as a Pump' },
    { kind: 'mechanism', label: 'Isovolumic phases · valve timing' },
    { kind: 'exam', label: 'a/c/v waves · PV loop' },
  ],

  highYield: [
    '**One cycle at 75 bpm ≈ 0.8 s: systole ~0.3 s, diastole ~0.5 s.** Tachycardia shortens **diastole disproportionately** — the heart loses filling and coronary perfusion time long before it loses ejection time, which is why a very fast rate drops stroke volume. **Atrial contraction is a primer pump contributing only ~20% of filling**; the other **~80% is passive**, so atrial fibrillation is tolerated at rest but not on exertion.',
    '**Six phases, and the two isovolumic ones are the whole exam.** **Isovolumic contraction** — all four valves shut, pressure climbs with **no volume change** until LV pressure exceeds aortic (~**80 mmHg**) → **rapid ejection** (~**70% of stroke volume in the first third of systole**) → slow ejection → **isovolumic relaxation** (all valves shut again, pressure falls, volume constant) → **rapid filling** (~70% of filling) → **diastasis** → **atrial systole**.',
    '**Volumes to quote:** **EDV ~110–120 mL**, **ESV ~40–50 mL**, **stroke volume ~70 mL**, **ejection fraction = SV / EDV ≈ 60%**. EDV is the **preload** index; aortic pressure at the moment of opening is the **afterload**.',
    '**Atrial pressure waves — a, c, v.** **a = atrial contraction. c = ventricular contraction** (the closed AV valve bulges back into the atrium, plus slight traction on the annulus), occurring just after the QRS. **v = passive venous filling of the atrium against a still-closed AV valve**, peaking at the end of systole and collapsing the instant the AV valve opens. Read them as: **a = atrium pushes, c = ventricle pushes back, v = venous return waits.**',
    '**Valve design follows valve load.** **AV valves (mitral, tricuspid)** are thin, close passively with almost no backflow, and rely on **chordae tendineae and papillary muscles — which do NOT close the valve; they pull the leaflets down to stop prolapse** during systole. **Semilunar valves** are thicker, face far higher pressures and ejection velocities, have **no chordae**, and snap shut — giving the aortic **incisura (dicrotic notch)**.',
    '**Heart sounds map onto valve closure.** **S1 = AV valve closure** (longer, lower-pitched, start of systole); **S2 = semilunar closure** (shorter, sharper, higher-pitched, start of diastole); **S3 = rapid ventricular filling** (normal in the young, pathological with a dilated failing ventricle); **S4 = atrial contraction into a stiff ventricle**. **PV-loop area = external stroke work**, and the loop reads directly as the four phases.',
  ],

  mechanism: {
    title: 'Pressure crossovers open and close valves; volume only changes when a valve is open',
    steps: [
      { id: 's1', label: 'Atrial systole tops up the ventricle (~20% of filling) → EDV ~120 mL' },
      { id: 's2', label: 'LV pressure > LA pressure → AV valve shuts (S1) → isovolumic contraction', emphasis: 'key' },
      { id: 's3', label: 'LV pressure > aortic → aortic valve opens → rapid then slow ejection', emphasis: 'key' },
      { id: 's4', label: 'LV pressure < aortic → aortic valve shuts (S2, incisura) → isovolumic relaxation', emphasis: 'key' },
      { id: 's5', label: 'LV pressure < LA pressure → AV valve opens → rapid filling, then diastasis' },
      { id: 's6', label: 'Loop closes: SV = EDV − ESV; loop area = stroke work' },
    ],
  },

  examFindings: [
    { sign: 'Volume unchanged while ventricular pressure rises steeply', mechanism: 'Isovolumic contraction — all valves closed', significance: 'key' },
    { sign: 'First heart sound (S1) at the start of systole', mechanism: 'Closure of the mitral and tricuspid valves', significance: 'key' },
    { sign: 'Second heart sound (S2), sharper and higher-pitched', mechanism: 'Closure of aortic and pulmonary valves; taut leaflets, faster snap', significance: 'key' },
    { sign: 'Incisura (dicrotic notch) on the aortic pressure trace', mechanism: 'Brief backflow then elastic recoil as the aortic valve shuts', significance: 'supportive' },
    { sign: 'Large v wave in the jugular or atrial trace', mechanism: 'Atrium filling against a closed or incompetent AV valve', significance: 'supportive' },
    { sign: 'Stroke volume falls as heart rate becomes very high', mechanism: 'Diastole shortens far more than systole, cutting filling time', significance: 'key' },
  ],

  investigations: [
    { clue: 'Period when all four valves are closed and volume is constant', meaning: 'Isovolumic contraction (or relaxation)' },
    { clue: 'Atrial wave caused by bulging of the closed AV valve', meaning: 'The c wave' },
    { clue: 'EDV minus ESV', meaning: 'Stroke volume (~70 mL)' },
    { clue: 'Area enclosed by the pressure–volume loop', meaning: 'External stroke work of the ventricle' },
    { clue: 'Function of chordae tendineae and papillary muscles', meaning: 'Preventing AV valve prolapse during systole (not closing the valve)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Every murmur, heart sound and pressure trace is a timing statement about this cycle — knowing which valve is open tells you what a sound or wave must be. Bedside timing and sounds: [[cardiac-cycle-heart-sounds]]; how loading changes the loop: [[hemodynamics-preload-afterload-cardiac-output]].' },
    { logic: 'Rate and filling', detail: 'Because diastole shortens first, rate control protects filling in stiff or ischaemic ventricles — the same logic behind slowing the ventricular response in fast atrial fibrillation ([[atrial-fibrillation]]). Preload-dependence of stroke volume is developed in [[ghp-frank-starling-mechanism]].' },
  ],

  mnemonics: [
    { hook: 'a = Atrium pushes, c = Contraction pushes back, v = Venous return waiting', expansion: ['a wave after P, c wave after QRS, v wave at end-systole', 'v collapses the moment the AV valve opens'] },
    { hook: 'Valves close, sounds open the phase: S1 starts systole, S2 starts diastole', expansion: ['S1 = AV valves (longer, lower)', 'S2 = semilunar valves (shorter, sharper)', 'S3 = rapid filling; S4 = stiff ventricle'] },
  ],

  traps: [
    {
      questionCategory: 'What papillary muscles actually do',
      wrongInstinct: 'Papillary muscles contract to close the mitral and tricuspid valves',
      rightAnswer: 'The valves close passively on the pressure gradient; papillary muscles and chordae pull the leaflets toward the ventricle to prevent prolapse into the atrium',
      why: 'Papillary rupture therefore causes regurgitation by allowing prolapse, not by preventing closure.',
    },
    {
      questionCategory: 'Which phase is being described',
      wrongInstinct: 'Any period of rapidly rising ventricular pressure must be ejection',
      rightAnswer: 'If ventricular volume is unchanged, it is isovolumic contraction — ejection has not begun until LV pressure exceeds aortic pressure',
      why: 'Volume, not pressure, tells you whether a valve is open.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'During isovolumic relaxation of the left ventricle, which statement is correct?',
      options: [
        { id: 'a', text: 'The mitral valve is open and the aortic valve is closed' },
        { id: 'b', text: 'Both the mitral and aortic valves are closed and ventricular volume equals ESV' },
        { id: 'c', text: 'The aortic valve is open while pressure falls' },
        { id: 'd', text: 'Ventricular volume falls rapidly as blood returns to the atrium' },
      ],
      answerId: 'b',
      explanation: 'Isovolumic relaxation begins at aortic valve closure (S2) and ends when LV pressure falls below LA pressure and the mitral valve opens. In between, both valves are shut, so volume stays at end-systolic volume while pressure falls steeply.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient in atrial fibrillation is comfortable at rest but severely limited on exertion. The best physiological explanation is:',
      options: [
        { id: 'a', text: 'Loss of the atrial kick, which contributes little at rest but more when diastole shortens' },
        { id: 'b', text: 'Complete loss of ventricular filling without atrial contraction' },
        { id: 'c', text: 'Failure of the semilunar valves to open' },
        { id: 'd', text: 'Abolition of isovolumic contraction' },
      ],
      answerId: 'a',
      explanation: 'About 80% of filling is passive, so losing atrial contraction costs roughly 20% at rest. On exertion the rate rises, diastole shortens and passive filling becomes inadequate, so the missing atrial kick becomes limiting.',
      tests: 'exam',
    },
    {
      id: 'q3',
      stem: 'An atrial pressure tracing shows a small upstroke immediately after the QRS complex. This wave is generated by:',
      options: [
        { id: 'a', text: 'Atrial contraction' },
        { id: 'b', text: 'Bulging of the closed AV valve into the atrium at the onset of ventricular contraction' },
        { id: 'c', text: 'Venous return filling the atrium during ventricular systole' },
        { id: 'd', text: 'Opening of the tricuspid valve' },
      ],
      answerId: 'b',
      explanation: 'That is the c wave: it follows the QRS because it is caused by ventricular contraction pushing the closed AV valve back toward the atrium (with slight traction on the annulus). The a wave follows the P wave, and the v wave builds later from venous return against the still-closed AV valve.',
      tests: 'investigation',
    },
  ],

  figures: [
    { title: 'Wiggers diagram of the cardiac cycle', svg: WIGGERS_CYCLE, caption: 'Pressures, ventricular volume, ECG and heart sounds aligned. Valve events sit at every pressure crossover; volume is flat during both isovolumic phases.' },
    { title: 'Normal left-ventricular pressure–volume loop', svg: PV_LOOP_NORMAL, caption: 'Filling, isovolumic contraction, ejection, isovolumic relaxation. Width = stroke volume; enclosed area = external stroke work.' },
  ],
};

export default ghpCardiacCyclePump;
