import type { Lecture } from '../../lib/types';
import { ECG_LEADS_AXIS } from '../../lib/figures';

export const ghpMeanElectricalAxis: Lecture = {
  id: 'ghp-mean-electrical-axis',
  title: 'Vectors & the Mean Electrical Axis',
  system: 'cardiovascular',
  source: 'Ch 12 — Vectorial Analysis of the ECG',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 12 Vectorial Analysis' },
    { kind: 'mechanism', label: 'Instantaneous vectors → mean axis' },
    { kind: 'exam', label: 'Hexaxial · I and aVF · deviation' },
  ],

  highYield: [
    '**At every instant the whole heart sums to ONE vector: direction = the way current is flowing (arrowhead toward the positive/depolarised-behind side), length = the voltage generated.** A lead records the **projection** of that vector onto its own axis — full amplitude when parallel, **zero when perpendicular**. The QRS you see is the trace of a vector loop, sampled from twelve angles.',
    '**The instantaneous sequence explains QRS shape.** First the **septum depolarises LEFT to RIGHT** (small vector rightward → the **septal q in I, aVL, V5–V6** and the **initial r in V1**); then the **free walls, apex to base**, with the **left ventricle dominating** because of its mass; last the **basal/posterior region**. The **average of every instantaneous vector = the MEAN ELECTRICAL AXIS**, normally about **+59°** — down and to the left.',
    '**The hexaxial reference system is just the six frontal leads redrawn through a common centre, 30° apart:** **I 0°, II +60°, III +120°, aVF +90°, aVL −30°, aVR −150°** (positive = down and to the left). **Normal adult axis = −30° to +90°.** Beyond −30° = **left axis deviation**; beyond +90° = **right axis deviation**; −90° to ±180° = **extreme ("northwest") axis**.',
    '**Two-lead method, then the refinement.** **I and aVF both positive → axis in the normal 0 to +90 quadrant. I positive / aVF negative → LEFT quadrant. I negative / aVF positive → RIGHT quadrant. Both negative → extreme axis.** Then refine: **the axis is PERPENDICULAR to the most equiphasic (isoelectric) lead**, and **if lead II is net negative the left-quadrant axis is truly beyond −30°** (pathological, not just a horizontal heart).',
    '**The axis points TOWARD extra muscle and toward late activation, and AWAY from dead muscle.** **Left axis deviation:** LV hypertrophy (hypertension, aortic stenosis), **left anterior fascicular block**, inferior infarction, raised diaphragm (obesity, pregnancy, ascites). **Right axis deviation:** RV hypertrophy (pulmonary stenosis, pulmonary hypertension, long-standing shunts), **acute cor pulmonale/PE**, left posterior fascicular block, lateral infarction, dextrocardia — and it is **normal in children and tall thin adults**.',
    '**Extreme axis is the alarm.** Both I and aVF negative points to **ventricular tachycardia, hyperkalaemia, or a ventricular-paced rhythm** — i.e. depolarisation that started outside the conduction system, so the vector runs backwards from apex to base.',
  ],

  mechanism: {
    title: 'Add the instantaneous vectors, then read the average against the hexaxial dial',
    steps: [
      { id: 's1', label: 'Each instant of depolarisation = one summed vector (direction + magnitude)', emphasis: 'key' },
      { id: 's2', label: 'Project that vector on a lead axis → that lead deflection at that instant', emphasis: 'key' },
      { id: 's3', label: 'Septum left-to-right first, then LV-dominated free walls', emphasis: 'normal' },
      { id: 's4', label: 'Average of all QRS vectors = mean electrical axis, normally about +59 degrees', emphasis: 'key' },
      { id: 's5', label: 'Leads I and aVF give the quadrant; the equiphasic lead gives the degrees', emphasis: 'key' },
      { id: 's6', label: 'Axis swings toward hypertrophy or late activation, away from infarct', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'QRS net positive in both I and aVF', mechanism: 'Mean vector in the 0 to +90 quadrant - normal axis', significance: 'key' },
    { sign: 'QRS positive in I, negative in aVF and negative in II', mechanism: 'True left axis deviation beyond -30 degrees (LVH or left anterior fascicular block)', significance: 'key' },
    { sign: 'QRS negative in I, positive in aVF', mechanism: 'Right axis deviation - RV hypertrophy, PE, or a normal tall thin adult', significance: 'key' },
    { sign: 'Equiphasic (isoelectric) complex in a limb lead', mechanism: 'The mean vector lies perpendicular to that lead axis', significance: 'key' },
    { sign: 'QRS negative in both I and aVF', mechanism: 'Extreme axis - ventricular origin, pacing, or hyperkalaemia', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Normal adult frontal-plane QRS axis range', meaning: 'Minus 30 to plus 90 degrees' },
    { clue: 'Most equiphasic limb lead is aVL', meaning: 'Axis is perpendicular to aVL, so about +60 or -120 degrees; pick the one the other leads support' },
    { clue: 'Small q in I, aVL and V6 with a small r in V1', meaning: 'Normal initial septal vector, left to right' },
    { clue: 'Right axis deviation with a tall R in V1 and a deep S in V6', meaning: 'Right ventricular hypertrophy' },
    { clue: 'New right axis deviation with S1Q3T3 in an acutely breathless patient', meaning: 'Acute right heart strain - pulmonary embolism' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The axis is a one-glance summary of which ventricle and which fascicle dominate: it flags **hypertrophy**, **fascicular block**, **acute right heart strain in PE**, and it warns you when a wide tachycardia has an **extreme axis** (ventricular origin). It builds directly on the lead geometry of [[ghp-ecg-leads-recording]] and feeds the injury and hypertrophy patterns in [[ghp-ecg-injury-current]]. MedCMU treatments: [[cardiac-electrical-axis-vectors]] and [[ecg-chamber-enlargement]].' },
    { logic: 'Do not over-call it', detail: 'Axis is a **derived** number, not a diagnosis. Confirm hypertrophy with voltage criteria and chamber-enlargement patterns before acting; check body habitus and age, since right axis is normal in children and slim adults. Full reading order: [[ecg-systematic-interpretation]].' },
  ],

  mnemonics: [
    { hook: 'I and aVF: both up = normal; Leaving each other = Left axis; Reaching toward each other = Right axis; both down = extreme', expansion: ['Then check lead II: negative II confirms true left axis beyond -30', 'Both negative means think VT, pacing, hyperkalaemia'] },
    { hook: 'The axis points TOWARD the thick ventricle and AWAY from the dead wall', expansion: ['LVH and left anterior fascicular block pull it left', 'RVH, PE and lateral infarct push it right'] },
    { hook: 'Hexaxial dial: aVL -30, I 0, II +60, aVF +90, III +120, aVR -150', expansion: ['Thirty degrees apart, all the way round', 'Axis is perpendicular to the most equiphasic lead'] },
  ],

  traps: [
    {
      questionCategory: 'Quadrant versus true axis deviation',
      wrongInstinct: 'Lead I positive with aVF negative always means left axis deviation',
      rightAnswer: 'That only places the axis between 0 and -90; it is TRUE left axis deviation only if the axis is beyond -30, which is confirmed by a net negative lead II',
      why: 'An axis of -15 degrees sits in the left quadrant but is still normal - lead II is the discriminator.',
    },
    {
      questionCategory: 'Direction of the shift in hypertrophy versus infarction',
      wrongInstinct: 'The axis swings away from a hypertrophied ventricle because that muscle is diseased',
      rightAnswer: 'The axis swings TOWARD hypertrophied or late-activated muscle and AWAY from infarcted muscle',
      why: 'More mass and later activation add unopposed voltage in that direction; dead muscle generates nothing, so it subtracts its own vector.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An ECG shows a net positive QRS in lead I, net negative in aVF, and net negative in lead II. The axis is:',
      options: [
        { id: 'a', text: 'Normal, around +30 degrees' },
        { id: 'b', text: 'Left axis deviation beyond -30 degrees' },
        { id: 'c', text: 'Right axis deviation' },
        { id: 'd', text: 'Extreme (northwest) axis' },
      ],
      answerId: 'b',
      explanation: 'Positive I with negative aVF places the axis between 0 and -90; a net negative lead II (axis +60) confirms it has passed beyond -30 into true left axis deviation, typically LV hypertrophy or left anterior fascicular block. Right axis needs a negative lead I, and extreme axis needs both I and aVF negative.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'In a patient with a limb lead showing an equiphasic (isoelectric) QRS, the mean electrical axis is best described as:',
      options: [
        { id: 'a', text: 'Parallel to that lead axis' },
        { id: 'b', text: 'Perpendicular to that lead axis' },
        { id: 'c', text: 'Indeterminate - an equiphasic complex carries no axis information' },
        { id: 'd', text: 'At exactly +90 degrees regardless of which lead is equiphasic' },
      ],
      answerId: 'b',
      explanation: 'A lead records the projection of the vector onto its axis, so a vector at right angles projects equally forwards and backwards and writes an equiphasic complex. That makes the equiphasic lead the most precise axis landmark on the strip; a parallel vector would give the tallest, most monophasic complex.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A previously well 24-year-old presents with sudden dyspnoea. The ECG shows new right axis deviation, a prominent S in lead I, and a Q with T inversion in lead III. The mechanism of the axis shift is:',
      options: [
        { id: 'a', text: 'Loss of left ventricular voltage from acute infarction' },
        { id: 'b', text: 'Acute right ventricular pressure overload and strain shifting the mean vector rightward' },
        { id: 'c', text: 'Left anterior fascicular block' },
        { id: 'd', text: 'Hyperkalaemia widening the QRS' },
      ],
      answerId: 'b',
      explanation: 'Acute pulmonary embolism raises right ventricular afterload; the dilated, strained right ventricle contributes more and later voltage, dragging the mean vector to the right and producing the S1Q3T3 pattern. Left anterior fascicular block would give left axis deviation, and neither infarct voltage loss nor hyperkalaemia explains the acute right-sided pattern.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Hexaxial reference and axis quadrants', svg: ECG_LEADS_AXIS, caption: 'Leads I and aVF split the frontal plane into quadrants; the mean QRS vector normally lies between -30 and +90 degrees, pointing down and to the left.' },
  ],
};

export default ghpMeanElectricalAxis;
