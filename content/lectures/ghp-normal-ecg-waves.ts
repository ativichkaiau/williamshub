import type { Lecture } from '../../lib/types';
import { ECG_WAVES } from '../../lib/figures';

export const ghpNormalEcgWaves: Lecture = {
  id: 'ghp-normal-ecg-waves',
  title: 'The Normal ECG: Waves, Intervals & Segments',
  system: 'cardiovascular',
  source: 'Ch 11 — The Normal Electrocardiogram',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 11 Normal Electrocardiogram' },
    { kind: 'mechanism', label: 'Moving boundary writes the wave' },
    { kind: 'exam', label: 'P-QRS-T · intervals · calibration' },
  ],

  highYield: [
    '**The ECG only records DIFFERENCES in potential across the heart — so a wave appears only while a boundary between depolarised and polarised muscle is moving.** **P = atrial depolarisation**, **QRS = ventricular depolarisation**, **T = ventricular repolarisation**. **Atrial repolarisation (the Ta wave) is buried inside the QRS** — it is small, and it happens while the far larger ventricular signal is being written.',
    '**Segments are flat because the heart is electrically UNIFORM, not inactive.** During the **ST segment** the whole ventricle is depolarised (plateau, phase 2) → no gradient → baseline. During the **TP segment** every fibre is back at rest → also baseline. This is exactly why the **TP/PR level is the true zero** against which ST shift is judged.',
    '**Why the T wave is UPRIGHT even though repolarisation is the electrical opposite of depolarisation.** Ventricles depolarise **endocardium → epicardium**, but the **epicardium has the SHORTER action potential** (and subendocardial fibres are compressed by intraventricular pressure), so it **repolarises FIRST** — the repolarisation wave runs **epicardium → endocardium**. Opposite charge travelling in the opposite direction = **two sign flips that cancel**, so **T points the same way as the QRS** (upright in I, II, V4–V6; normally inverted in aVR).',
    '**The intervals, and what each one times.** **PR = 0.12–0.20 s** — atrial depolarisation plus the **AV nodal delay** (long PR = first-degree block). **QRS = 0.06–0.10 s** — ventricular activation through the fast Purkinje network (**≥0.12 s means the impulse left the Purkinje highway**: bundle branch block, ventricular ectopy). **QT ≈ 0.35–0.44 s** — total ventricular depolarisation plus repolarisation; rate-correct it (**QTc = QT ÷ √RR**), because **long QT = torsades risk**.',
    '**Calibration is the whole grammar of measurement.** Paper runs at **25 mm/s**, so **1 small box = 0.04 s** and **1 large box = 0.20 s**; the standardisation pulse sets **10 mm = 1 mV**, so **1 small box = 0.1 mV** vertically. Rate for a regular rhythm = **300 ÷ large boxes between R waves** (or 1500 ÷ small boxes). Every "abnormal" number below is meaningless without this scale.',
    '**Normal amplitudes, for the pattern-recognition shortcut:** **P ≤ 2.5 mm tall and ≤ 0.12 s wide** (taller = right atrial enlargement; wider/notched = left); **Q waves are pathological if > 0.04 s or > 25% of the following R**; the **J point** (QRS end / ST start) is the reference for ST measurement.',
  ],

  mechanism: {
    title: 'Only a MOVING boundary writes a wave — uniform muscle writes a flat line',
    steps: [
      { id: 's1', label: 'Boundary between depolarised and resting muscle = a dipole = a deflection', emphasis: 'key' },
      { id: 's2', label: 'Atria depolarise → P; AV delay → flat PR segment', emphasis: 'normal' },
      { id: 's3', label: 'Ventricles depolarise endocardium → epicardium → QRS', emphasis: 'key' },
      { id: 's4', label: 'All ventricle depolarised (plateau) → no gradient → flat ST', emphasis: 'key' },
      { id: 's5', label: 'Epicardium has the shorter AP → repolarises first → wave runs epi → endo', emphasis: 'key' },
      { id: 's6', label: 'Opposite charge + opposite direction → T upright, same way as QRS', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'P wave under 0.12 s and under 2.5 mm', mechanism: 'Normal atrial depolarisation, sinus origin', significance: 'key' },
    { sign: 'No visible atrial repolarisation wave', mechanism: 'Small Ta signal is buried inside the much larger QRS', significance: 'key' },
    { sign: 'T wave upright wherever the QRS is upright', mechanism: 'Repolarisation runs epicardium to endocardium, reversing the sign twice', significance: 'key' },
    { sign: 'Flat isoelectric ST segment', mechanism: 'Whole ventricle depolarised in plateau, so no potential difference exists', significance: 'key' },
    { sign: 'All waves inverted in aVR', mechanism: 'The net cardiac vector points away from the right shoulder', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Interval from the start of P to the start of QRS', meaning: 'PR interval (0.12-0.20 s) - mostly the AV nodal delay' },
    { clue: 'QRS duration of 0.14 s', meaning: 'Activation spread muscle-to-muscle, not via Purkinje (bundle branch block or ventricular origin)' },
    { clue: 'Four large boxes between consecutive R waves', meaning: 'Rate = 300 divided by 4 = 75 per minute' },
    { clue: 'One small box on the horizontal axis at 25 mm/s', meaning: '0.04 s (vertically it is 0.1 mV)' },
    { clue: 'The junction where the QRS ends and the ST begins', meaning: 'J point - the zero reference for measuring ST shift' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Every arrhythmia and ischaemia call is made against these normals: long PR means AV nodal delay, wide QRS means the impulse abandoned the Purkinje system, long QT means torsades risk. The vector rules that generate these waves are developed in [[ghp-ecg-leads-recording]] and [[ghp-mean-electrical-axis]]; the underlying cellular event is the plateau action potential of [[ghp-cardiac-muscle-action-potential]]. MedCMU treatment of the same waves: [[ecg-formation-waves]] and [[ecg-intervals-segments]].' },
    { logic: 'The reading order that never misleads', detail: 'Rate → rhythm → axis → intervals → waves → ST/T. Calibrate first (**25 mm/s, 10 mm = 1 mV**) — an uncalibrated strip makes voltage criteria and QT measurement worthless. Systematic version: [[ecg-systematic-interpretation]].' },
  ],

  mnemonics: [
    { hook: 'P atria, QRS ventricles, T ventricles undoing it - and Ta hides under the QRS', expansion: ['Waves = movement; segments = uniformity', 'Flat does not mean silent'] },
    { hook: 'T is upright because the LAST to depolarise is the FIRST to repolarise', expansion: ['Epicardium: shorter action potential', 'Two reversals cancel, so T follows the QRS'] },
    { hook: 'Small box = 0.04 s and 0.1 mV; big box = 0.20 s; rate = 300 over big boxes', expansion: ['PR 0.12-0.20', 'QRS 0.06-0.10', 'QT 0.35-0.44'] },
  ],

  traps: [
    {
      questionCategory: 'What the T wave represents and why it points where it does',
      wrongInstinct: 'The T wave is inverted relative to the QRS because repolarisation is the electrical opposite of depolarisation',
      rightAnswer: 'The T wave is normally UPRIGHT in the same leads as the QRS, because repolarisation travels in the opposite direction (epicardium to endocardium)',
      why: 'Reversing the charge AND reversing the direction of travel cancels out, so the deflection keeps its original polarity.',
    },
    {
      questionCategory: 'Why the ST segment is flat',
      wrongInstinct: 'The ST segment is flat because the heart is electrically inactive at that moment',
      rightAnswer: 'It is flat because the entire ventricle is simultaneously depolarised in the plateau phase, so no potential difference exists to record',
      why: 'The ECG records gradients, not activity - uniform depolarisation and uniform rest both read as baseline.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The T wave is normally upright in the same leads in which the QRS is upright. The best explanation is that:',
      options: [
        { id: 'a', text: 'Repolarisation and depolarisation both travel from endocardium to epicardium' },
        { id: 'b', text: 'The epicardium repolarises first, so the repolarisation wave travels in the opposite direction to depolarisation' },
        { id: 'c', text: 'The T wave is generated by the atria, not the ventricles' },
        { id: 'd', text: 'Repolarisation produces no dipole, so the deflection direction is random' },
      ],
      answerId: 'b',
      explanation: 'Epicardial fibres have shorter action potentials (and subendocardial fibres are compressed by intraventricular pressure), so repolarisation begins at the epicardium and runs inward. Reversed charge plus reversed direction gives a deflection with the same polarity as the QRS. Option a would predict an inverted T; c confuses T with the hidden atrial Ta wave; d is simply false.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A rhythm strip recorded at standard speed shows 3 large boxes between consecutive R waves and a PR interval spanning 6 small boxes. The rate and PR interval are:',
      options: [
        { id: 'a', text: '100 per minute, PR 0.24 s' },
        { id: 'b', text: '75 per minute, PR 0.12 s' },
        { id: 'c', text: '100 per minute, PR 0.24 s only if the paper speed is 50 mm/s' },
        { id: 'd', text: '60 per minute, PR 0.30 s' },
      ],
      answerId: 'a',
      explanation: 'At 25 mm/s a large box is 0.20 s, so 300 divided by 3 gives 100 per minute. Six small boxes at 0.04 s each equal 0.24 s, which exceeds the normal 0.12-0.20 s and indicates first-degree AV block. The distractors misapply the box values.',
      tests: 'investigation',
    },
    {
      id: 'q3',
      stem: 'Atrial repolarisation is not normally visible on the surface ECG because:',
      options: [
        { id: 'a', text: 'Atrial muscle does not repolarise' },
        { id: 'b', text: 'It occurs during the TP segment, where the amplifier is blanked' },
        { id: 'c', text: 'It is a small signal that coincides with the much larger QRS complex' },
        { id: 'd', text: 'The atria repolarise simultaneously, producing no moving boundary at all' },
      ],
      answerId: 'c',
      explanation: 'The Ta wave is real but small, and it falls during ventricular depolarisation, so the far larger QRS masks it. Atrial muscle certainly repolarises, no blanking occurs, and repolarisation is sequential rather than simultaneous.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Normal ECG waves and intervals', svg: ECG_WAVES, caption: 'P = atrial depolarisation, QRS = ventricular depolarisation, T = ventricular repolarisation. PR times the AV delay; the flat ST marks uniform ventricular depolarisation.' },
    { title: 'Normal sinus rhythm', ecg: 'sinus', caption: 'One P per QRS, PR 0.12-0.20 s, narrow QRS, upright T - the reference against which every abnormal strip is read.' },
  ],
};

export default ghpNormalEcgWaves;
