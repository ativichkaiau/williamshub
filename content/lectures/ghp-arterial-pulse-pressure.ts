import type { Lecture } from '../../lib/types';

export const ghpArterialPulsePressure: Lecture = {
  id: 'ghp-arterial-pulse-pressure',
  title: 'Arterial Pulse Pressure and Its Damping',
  system: 'cardiovascular',
  source: 'Ch 15 — Vascular Distensibility; Arterial & Venous Systems',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 15 Arterial and Venous Systems' },
    { kind: 'mechanism', label: 'Stroke volume divided by arterial compliance' },
    { kind: 'exam', label: 'Wide versus narrow pulse pressure' },
  ],

  highYield: [
    '**Pulse pressure = systolic − diastolic; normally 120 − 80 = ~40 mmHg.** Its two determinants are written in one relation: **PP ≈ stroke volume ÷ arterial compliance**. A bigger **stroke volume** forces more blood into an already-full aorta during each systole; a **stiffer (less compliant) aorta** converts the same stroke volume into a larger pressure swing. A third, minor factor is the **rapidity of ejection** — a fast, forceful ejection raises the systolic peak more than a slow one.',
    '**Three classic causes widen the pulse pressure, and they widen it by different halves of the equation.** **Arteriosclerosis** stiffens the aorta — compliance falls, systolic rises with a near-normal or low diastolic (**isolated systolic hypertension** of the elderly, e.g. **170/70**); pulse pressure can double. **Aortic regurgitation** does both: a large stroke volume raises systolic, while diastolic **runs off backwards into the left ventricle** to as low as **40 mmHg or less** — hence the **bounding water-hammer (Corrigan) pulse**, sometimes **80–100 mmHg** of pulse pressure. **Patent ductus arteriosus** dumps half or more of the ejected blood straight into the pulmonary artery, so diastolic collapses while systolic stays high — **bounding pulses and a continuous machinery murmur**.',
    '**Narrow pulse pressure is the mirror image, and aortic stenosis is the model.** A tight valve limits both the **volume and the rate** of ejection, so the pressure wave is small and slow to rise — **pulsus parvus et tardus**. The same narrowing appears whenever stroke volume falls: **hypovolaemia, cardiogenic shock, tamponade, severe heart failure, marked tachycardia**.',
    '**The pulse is progressively damped as it travels outward, and damping ∝ resistance × compliance.** Resistance means the pulsatile flow must actually move blood forward; compliance means each downstream segment absorbs volume rather than transmitting pressure. Together they flatten a **40 mmHg** aortic swing to only a **few mmHg by the arterioles** and to essentially **nothing in the capillaries** — which is precisely what makes capillary exchange a steady, non-pulsatile process. A nuance worth knowing: between aorta and the medium-sized limb arteries the systolic peak is actually **amplified** by wave reflection, so a **dorsalis pedis systolic reads higher than aortic systolic** even as the mean falls.',
    '**The pressure pulse travels far faster than the blood itself.** Pulse-wave velocity is ~**3–5 m/s** in the aorta, ~**7–10 m/s** in large arteries and ~**15–35 m/s** in small distal arteries, versus a blood velocity of only ~**33 cm/s** in the aorta. Velocity rises as vessels get **stiffer and smaller**, which is why **pulse-wave velocity is used clinically as an index of arterial stiffness**.',
    '**Mean arterial pressure is not the average of systolic and diastolic — it is ~diastolic + ⅓ of the pulse pressure (~93–96 mmHg for 120/80)** because **diastole occupies about two-thirds of the cardiac cycle**. Read the trace, too: the **dicrotic notch (incisura)** is the brief backflow that snaps the aortic valve shut and marks the end of ejection.',
  ],

  mechanism: {
    title: 'Stroke volume into a springy tube — then the spring absorbs it',
    steps: [
      { id: 's1', label: 'Left ventricle ejects a stroke volume into an aorta that is already full' },
      { id: 's2', label: 'Aortic walls distend; the pressure rise = stroke volume ÷ arterial compliance', emphasis: 'key' },
      { id: 's3', label: 'Systolic peak set by that rise; diastolic set by run-off through the arterioles' },
      { id: 's4', label: 'Pulse pressure = systolic − diastolic ≈ SV ÷ compliance', emphasis: 'key' },
      { id: 's5', label: 'Travelling outward, resistance × compliance damps the pulse' },
      { id: 's6', label: 'By the arterioles only a few mmHg remain — capillary flow is nearly continuous', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Bounding, collapsing water-hammer (Corrigan) pulse with a pulse pressure near 100 mmHg', mechanism: 'Aortic regurgitation — large stroke volume plus diastolic run-off back into the ventricle', significance: 'key' },
    { sign: 'Blood pressure 170/70 in an elderly patient', mechanism: 'Arteriosclerotic stiffening: the same stroke volume into a low-compliance aorta', significance: 'key' },
    { sign: 'Bounding pulses with a continuous machinery murmur in an infant', mechanism: 'Patent ductus arteriosus — diastolic run-off into the pulmonary artery', significance: 'key' },
    { sign: 'Small-volume, slow-rising pulse with a narrow pulse pressure', mechanism: 'Aortic stenosis limits both the volume and the rate of ejection', significance: 'key' },
    { sign: 'Systolic pressure higher at the dorsalis pedis than in the aorta', mechanism: 'Peripheral amplification from wave reflection in stiffer distal arteries', significance: 'supportive' },
    { sign: 'Capillary flow is smooth and non-pulsatile', mechanism: 'Damping by the product of arteriolar resistance and vascular compliance', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A pulse pressure of 40 mmHg with a reading of 120/80', meaning: 'Normal stroke volume delivered into a normally compliant aorta' },
    { clue: 'Pulse pressure doubles with no change in stroke volume', meaning: 'Arterial compliance has roughly halved — arteriosclerosis' },
    { clue: 'Diastolic pressure below 50 mmHg with a high systolic', meaning: 'Diastolic run-off: aortic regurgitation or a patent ductus arteriosus' },
    { clue: 'Pulse-wave velocity of 3 to 5 m/s in the aorta rising to 15 to 35 m/s distally', meaning: 'Stiffer, smaller vessels transmit the wave faster — a stiffness index' },
    { clue: 'The dicrotic notch (incisura) on an arterial trace', meaning: 'Aortic valve closure after brief backflow, marking the end of ejection' },
    { clue: 'Mean arterial pressure taken as diastolic plus one-third of the pulse pressure', meaning: 'Diastole occupies about two-thirds of the cardiac cycle' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Pulse pressure is a two-variable readout, so a wide pulse pressure is a question, not a diagnosis: it asks whether stroke volume is too large or the aorta too stiff. That single distinction separates aortic regurgitation and patent ductus from the isolated systolic hypertension of ageing, and it is why pulse pressure carries cardiovascular risk independently of mean pressure. The compliance term is developed in [[ghp-vascular-compliance-volume-distribution]] and the flow-resistance side in [[ghp-hemodynamics-pressure-flow-resistance]].' },
    { logic: 'Bedside payoff', detail: 'Feeling the pulse and reading a cuff are the same measurement: a bounding collapsing pulse points to run-off lesions, a small slow-rising pulse to aortic stenosis, and a narrowing pulse pressure is an early sign that stroke volume is falling in shock. Valve lesions and their sounds: [[ghp-heart-sounds-valve-lesions]]; the ductal shunt itself: [[ghp-congenital-shunt-dynamics]]; the arterial wall changes behind the stiffness: [[arteriosclerosis-patterns]]; measurement technique: [[blood-pressure-measurement-abpm]].' },
  ],

  mnemonics: [
    { hook: 'Pulse Pressure = Pump volume divided by Pipe give', expansion: ['More stroke volume, wider pulse pressure', 'Less compliance, wider pulse pressure', 'Faster ejection nudges the systolic peak up'] },
    { hook: 'Wide pulse pressure = A A P', expansion: ['Aortic regurgitation', 'Arteriosclerosis', 'Patent ductus arteriosus', 'Narrow it and you are usually looking at aortic stenosis or a low stroke volume'] },
  ],

  traps: [
    {
      questionCategory: 'Which half of the equation moved',
      wrongInstinct: 'A wide pulse pressure means the heart is ejecting a large stroke volume',
      rightAnswer: 'It means stroke volume divided by arterial compliance has risen — in an elderly patient with 170/70 the stroke volume is usually normal and the aorta is stiff',
      why: 'Compliance is the denominator; halving it doubles the pulse pressure with no change in output.',
    },
    {
      questionCategory: 'Valve lesion versus pulse contour',
      wrongInstinct: 'Aortic stenosis widens the pulse pressure because the ventricle generates such high pressures',
      rightAnswer: 'Aortic stenosis narrows it — the obstruction limits both the volume and the rate of ejection, giving a small, slow-rising pulse',
      why: 'High intraventricular pressure does not reach the aorta; it is the aortic pressure swing that defines pulse pressure.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An 80-year-old has a blood pressure of 170/70 mmHg with a normal stroke volume and cardiac output. The principal mechanism of the widened pulse pressure is:',
      options: [
        { id: 'a', text: 'Increased total peripheral resistance' },
        { id: 'b', text: 'Reduced compliance of the aorta and large arteries' },
        { id: 'c', text: 'Increased blood viscosity' },
        { id: 'd', text: 'A prolonged left ventricular ejection time' },
      ],
      answerId: 'b',
      explanation: 'Pulse pressure is stroke volume divided by arterial compliance, so with stroke volume unchanged the widening must come from a stiffer, less compliant aorta — the classic isolated systolic hypertension of arteriosclerosis. Raised peripheral resistance (a) would raise diastolic pressure as well, and viscosity (c) affects resistance rather than the pressure swing.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which of the following characteristically produces a NARROW pulse pressure?',
      options: [
        { id: 'a', text: 'Aortic regurgitation' },
        { id: 'b', text: 'Patent ductus arteriosus' },
        { id: 'c', text: 'Severe aortic stenosis' },
        { id: 'd', text: 'Arteriosclerosis of the aorta' },
      ],
      answerId: 'c',
      explanation: 'Aortic stenosis limits the volume and the rate of ejection, producing a small, slow-rising pulse with a narrow pulse pressure. The other three are the classic wideners: regurgitation and a patent ductus by diastolic run-off, arteriosclerosis by loss of compliance.',
      tests: 'exam',
    },
    {
      id: 'q3',
      stem: 'Why is blood flow through a systemic capillary almost completely non-pulsatile despite an aortic pulse pressure of 40 mmHg?',
      options: [
        { id: 'a', text: 'The pulse wave travels too slowly to reach the capillaries within one cardiac cycle' },
        { id: 'b', text: 'Capillaries contain precapillary sphincters that close during systole' },
        { id: 'c', text: 'The pulse is damped in proportion to the product of vascular resistance and compliance' },
        { id: 'd', text: 'Capillary walls are too stiff to transmit a pressure wave' },
      ],
      answerId: 'c',
      explanation: 'Damping is proportional to resistance multiplied by compliance: the arterioles impose high resistance to pulsatile forward movement while compliant vessels absorb the volume, so only a few mmHg of swing survives to the arterioles and essentially none to the capillaries. The wave itself travels at 3 to 35 m/s (a), far faster than the blood, and sphincter behaviour (b) is metabolic vasomotion, not systolic gating.',
      tests: 'mechanism',
    },
  ],
};

export default ghpArterialPulsePressure;
