import type { Lecture } from '../../lib/types';

export const ghpEcgInjuryCurrent: Lecture = {
  id: 'ghp-ecg-injury-current',
  title: 'Current of Injury & Abnormal QRS/T Patterns',
  system: 'cardiovascular',
  source: 'Ch 12 — Vectorial Analysis of the ECG',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 12 Vectorial Analysis' },
    { kind: 'mechanism', label: 'Injury current shifts the baseline' },
    { kind: 'exam', label: 'J point · ST · voltage · wide QRS' },
  ],

  highYield: [
    '**Injured muscle cannot hold a normal resting potential — it leaks and sits PARTIALLY DEPOLARISED in diastole.** So a current flows between injured and healthy muscle **during electrical diastole**, when the rest of the heart should be silent. That **diastolic current of injury displaces the TP baseline**; the recorder then re-centres on that shifted baseline, and the eye reads the result as **ST displacement**.',
    '**The J point is the true zero, and that is why we measure from it.** At the **J point (QRS end / ST start) the whole ventricle is uniformly depolarised**, so there is genuinely no potential difference — any deviation of the **J point relative to the TP/PR baseline is a real injury current**, not an artefact. Convention: measure the ST level **at or just after the J point**, against the TP segment.',
    '**The ST vector points TOWARD the injured region.** **Transmural (epicardial) injury → ST ELEVATION in the leads facing that wall**, with **reciprocal ST depression** in leads looking from the opposite side. **Subendocardial injury → ST DEPRESSION** in the overlying leads (the classic demand-ischaemia pattern on exertion, because the subendocardium has the highest wall stress and the worst perfusion).',
    '**Ischaemia hits repolarisation first, so the T wave changes before anything else.** Sequence in evolving infarction: **hyperacute tall peaked T** (local potassium loss, shortened epicardial action potential) → **ST elevation** (injury current) → **deep symmetrical T inversion** (the ischaemic zone now repolarises LAST, reversing the local repolarisation sequence) → **pathological Q waves**, because **dead muscle is electrically silent and acts as a window** through which the opposite wall\'s vector is recorded.',
    '**Voltage tells you about mass and insulation.** **Increased QRS voltage = hypertrophy** (more muscle, bigger vector: **Sokolow–Lyon S in V1 + R in V5/V6 > 35 mm**; limb-lead QRS sum > 4 mV) or simply a thin chest. **Decreased voltage = less muscle or more insulation:** infarct/fibrosis and diffuse damage on one hand; **pericardial effusion, pleural effusion, obesity, emphysema** on the other (fluid short-circuits the current, air conducts poorly). **All limb-lead QRS under 5 mm** is the working threshold; **low voltage plus electrical alternans = tamponade**.',
    '**A QRS ≥ 0.12 s and bizarre means the impulse abandoned the Purkinje highway.** Causes: **bundle branch block** (one ventricle activated late, muscle-to-muscle), **ventricular ectopic origin**, **hypertrophy/dilatation** (longer route to travel), **hyperkalaemia** and **class I antiarrhythmics** (slowed sodium-dependent conduction). Slow, cell-to-cell spread is always wide — and the abnormal repolarisation that follows it gives **discordant (opposite-direction) ST/T changes**.',
  ],

  mechanism: {
    title: 'The baseline moves in diastole; the J-point convention makes it look like the ST moved',
    steps: [
      { id: 's1', label: 'Ischaemic muscle leaks and cannot fully repolarise', emphasis: 'key' },
      { id: 's2', label: 'In diastole current flows injured to healthy → TP baseline shifts', emphasis: 'key' },
      { id: 's3', label: 'In systole all muscle is depolarised → true zero sits at the J point', emphasis: 'key' },
      { id: 's4', label: 'Read against the shifted baseline, the ST appears elevated or depressed', emphasis: 'normal' },
      { id: 's5', label: 'ST vector points toward the injury; opposite leads show reciprocal change', emphasis: 'key' },
      { id: 's6', label: 'Untreated transmural injury → necrosis → Q waves and T inversion', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'ST elevation in leads facing one wall', mechanism: 'Transmural injury current, ST vector pointing toward the injured region', significance: 'key' },
    { sign: 'Reciprocal ST depression in the opposite leads', mechanism: 'The same injury vector viewed from behind - confirms a true injury current', significance: 'key' },
    { sign: 'Exertional ST depression with an upright T', mechanism: 'Subendocardial ischaemia - highest wall stress, poorest perfusion', significance: 'key' },
    { sign: 'Pathological Q waves with deep symmetrical T inversion', mechanism: 'Completed infarct: silent dead muscle acts as an electrical window on the opposite wall', significance: 'key' },
    { sign: 'Low-voltage QRS with beat-to-beat alternation of amplitude', mechanism: 'Pericardial effusion insulating and letting the heart swing - tamponade physiology', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The junction of the QRS end and the ST beginning', meaning: 'J point - the zero reference for ST measurement' },
    { clue: 'The baseline against which ST level is judged', meaning: 'The TP segment (or the PR segment when the rate is fast)' },
    { clue: 'ST elevation in II, III and aVF with depression in I and aVL', meaning: 'Inferior injury current with reciprocal change' },
    { clue: 'All limb-lead QRS complexes under 5 mm tall', meaning: 'Low voltage - effusion, obesity, emphysema, or lost myocardium' },
    { clue: 'S in V1 plus R in V5 totalling more than 35 mm', meaning: 'Sokolow-Lyon voltage criterion for left ventricular hypertrophy' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'ST shift is a **time-critical** reading: transmural injury current means muscle that is still alive but dying, and the injury vector tells you which wall and therefore which artery. Voltage and QRS width separate **more muscle** (hypertrophy) from **less muscle or more insulation** (infarct, effusion, emphysema). Vector reasoning behind the ST direction: [[ghp-mean-electrical-axis]]; wave normals it is measured against: [[ghp-normal-ecg-waves]]. Clinical localisation: [[stemi-localization]] and [[ecg-chamber-enlargement]].' },
    { logic: 'The two questions to ask of any ST shift', detail: 'First, is it real — is the strip calibrated (**10 mm = 1 mV**) and is the J point measured against the TP baseline? Second, is it regional (an injury vector with reciprocal change) or global (pericarditis, early repolarisation)? Reciprocal change is the single most useful discriminator. Reading order: [[ecg-systematic-interpretation]].' },
  ],

  mnemonics: [
    { hook: 'J point = Judgement point: the zero from which every ST shift is measured', expansion: ['At the J point the whole ventricle is depolarised, so true zero', 'Compare it against the TP baseline'] },
    { hook: 'Low voltage = LESS muscle or MORE insulation', expansion: ['Less: old infarct, fibrosis, diffuse damage', 'More: pericardial or pleural fluid, fat, air (emphysema)'] },
    { hook: 'Wide and bizarre = the impulse left the Purkinje highway', expansion: ['Bundle branch block, ventricular ectopy', 'Hyperkalaemia, class I drugs'] },
  ],

  traps: [
    {
      questionCategory: 'What physically moves in ST elevation',
      wrongInstinct: 'The ST segment itself rises because the injured muscle generates extra current during systole',
      rightAnswer: 'The injury current flows during DIASTOLE and shifts the baseline; because the J point is taken as zero, the displacement is read as ST elevation',
      why: 'During systole the whole ventricle is uniformly depolarised, so there is no gradient available to lift the ST - the deviation is a baseline effect.',
    },
    {
      questionCategory: 'What low QRS voltage means',
      wrongInstinct: 'Low voltage indicates a weak, poorly contracting heart',
      rightAnswer: 'Low voltage usually reflects what surrounds the heart (pericardial or pleural fluid, fat, air) or lost muscle mass - it is not a measure of contractility',
      why: 'The ECG measures voltage reaching the skin; insulation and short-circuiting attenuate a perfectly strong heart.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The physiological basis of ST-segment elevation in acute transmural myocardial injury is:',
      options: [
        { id: 'a', text: 'Increased current generated by the injured region during ventricular systole' },
        { id: 'b', text: 'A diastolic current of injury that shifts the baseline, with the J point taken as zero' },
        { id: 'c', text: 'Delayed conduction through the AV node' },
        { id: 'd', text: 'Loss of atrial repolarisation forces' },
      ],
      answerId: 'b',
      explanation: 'Injured muscle stays partly depolarised at rest, so current flows between injured and healthy tissue during diastole and displaces the TP baseline. Since the whole ventricle is uniformly depolarised at the J point, that instant is true zero, and the baseline shift is read as ST elevation. AV nodal delay affects the PR interval, and the Ta wave is irrelevant here.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient with a large pericardial effusion has small QRS complexes in every lead. The best explanation is:',
      options: [
        { id: 'a', text: 'The myocardium has been destroyed by the effusion' },
        { id: 'b', text: 'Conducting fluid around the heart short-circuits current, so less voltage reaches the skin' },
        { id: 'c', text: 'The mean electrical axis has rotated posteriorly' },
        { id: 'd', text: 'The recorder standardisation has automatically halved' },
      ],
      answerId: 'b',
      explanation: 'Pericardial fluid is a good conductor that shunts current around the heart, attenuating the surface signal; combined with a heart swinging in fluid it also produces electrical alternans. The myocardium is intact, and axis rotation would change lead-to-lead proportions rather than shrink every complex.',
      tests: 'exam',
    },
    {
      id: 'q3',
      stem: 'Deep symmetrical T-wave inversion appearing over an ischaemic region reflects:',
      options: [
        { id: 'a', text: 'The ischaemic zone repolarising later than normal, reversing the local repolarisation sequence' },
        { id: 'b', text: 'Loss of the atrial repolarisation wave' },
        { id: 'c', text: 'Increased conduction velocity through the Purkinje fibres' },
        { id: 'd', text: 'A shortened PR interval' },
      ],
      answerId: 'a',
      explanation: 'Ischaemia prolongs repolarisation in the affected region, so it recovers last instead of first. The repolarisation wavefront reverses direction relative to normal, and the T wave flips. The other options concern different intervals or waves entirely.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'ST elevation from a current of injury', ecg: 'stemi', caption: 'The J point sits above the TP baseline in leads facing the injured wall; leads on the opposite side show reciprocal depression.' },
  ],
};

export default ghpEcgInjuryCurrent;
