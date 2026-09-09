import type { Lecture } from '../../lib/types';

export const ghpNegativeFeedbackGain: Lecture = {
  id: 'ghp-negative-feedback-gain',
  title: 'Negative Feedback & Gain of a Control System',
  system: 'physiology',
  source: 'Ch 1 — Functional Organization & Homeostasis',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'Ch 1 Functional Organization' },
    { kind: 'mechanism', label: 'Gain = correction / error' },
    { kind: 'exam', label: 'Baroreceptor gain calculation' },
  ],

  highYield: [
    '**Negative feedback = the response opposes the initiating change**, returning the variable toward its set point. Four parts: **sensor** → **integrator/control centre** (compares to the set point and generates an **error signal**) → **effector** → the regulated variable. The error signal is the drive for the whole loop.',
    '**Gain = Correction ÷ Error.** It quantifies how effective a loop is, and it is **negative by convention** for negative feedback. Correction = how far the response pulled the variable back; Error = how far it still remains from normal.',
    '**The baroreceptor worked example (memorise the arithmetic).** Transfuse blood with the baroreflex disabled and arterial pressure rises **100 → 175 mmHg**. Repeat with the reflex intact and it rises only **100 → 125 mmHg**. The loop therefore produced a **correction of −50 mmHg** (175 down to 125) leaving an **error of +25 mmHg**. **Gain = −50 ÷ +25 = −2.**',
    '**Reading a gain number.** Gain −2 means the correction is twice the residual error, so the loop erased **two-thirds** of the disturbance. In general the **fraction corrected = |G| ÷ (1 + |G|)** and the **residual error = disturbance ÷ (1 + |G|)**. The **temperature control system has a gain of about −33** — it removes ~97% of a thermal disturbance, which is why core temperature is defended far more tightly than acute blood pressure.',
    '**Negative feedback never restores the set point exactly** — gain is finite, so a residual error always persists (this is a favourite stem). And **high gain plus a long transmission delay causes oscillation**, not better control: the classic example is **Cheyne–Stokes periodic breathing** when circulatory delay lengthens in heart failure.',
    '**Why almost every system is negative feedback:** it is the only sign of loop that is inherently **stable**. Positive loops amplify and must be terminated; negative loops self-limit. Failure of a loop, not absence of one, is what produces disease.',
  ],

  mechanism: {
    title: 'Error drives correction; gain measures how much of the disturbance was erased',
    steps: [
      { id: 's1', label: 'Disturbance displaces the variable from its set point' },
      { id: 's2', label: 'Sensor detects it → error signal generated', emphasis: 'key' },
      { id: 's3', label: 'Controller drives the effector in the OPPOSING direction', emphasis: 'key' },
      { id: 's4', label: 'Correction = how far the response pulled the variable back' },
      { id: 's5', label: 'Gain = Correction ÷ Error (negative sign = negative feedback)', emphasis: 'key' },
      { id: 's6', label: 'Residual error always remains — gain is finite, never infinite' },
    ],
  },

  examFindings: [
    { sign: 'Transfusion raises pressure to 175 mmHg without the baroreflex but only to 125 mmHg with it', mechanism: 'Correction −50, error +25, so gain = −2', significance: 'key' },
    { sign: 'Baroreceptor gain about −2; thermoregulatory gain about −33', mechanism: 'Core temperature is defended far more tightly than acute arterial pressure', significance: 'key' },
    { sign: 'Blood pressure settles slightly above baseline after full reflex compensation', mechanism: 'Finite gain leaves a residual error — the error is what sustains the corrective drive', significance: 'key' },
    { sign: 'Cheyne–Stokes periodic breathing in heart failure', mechanism: 'High loop gain plus prolonged circulatory delay makes a negative loop oscillate', significance: 'supportive' },
    { sign: 'The gain value carries a negative sign', mechanism: 'The correction is directionally opposite the disturbance — the signature of negative feedback', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Correction divided by error', meaning: 'Gain of the control system — negative for negative feedback' },
    { clue: 'A measured gain of −2', meaning: 'Two-thirds of the disturbance removed; residual error = disturbance ÷ 3' },
    { clue: 'A measured gain of −33', meaning: 'Extremely tight regulation, ~97% corrected (core temperature)' },
    { clue: 'The difference between the sensed value and the set point', meaning: 'Error signal — the input that drives the effector' },
    { clue: 'A loop whose output continuously opposes its own input', meaning: 'Negative feedback, the basis of physiological stability' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Gain converts a vague idea ("the body regulates blood pressure") into a **number you can be examined on**, and it explains why some variables barely move while others swing widely. The variable being defended is almost always an ECF variable — see [[ghp-homeostasis-internal-environment]]. The contrast case, where the loop amplifies instead of opposing, is [[ghp-positive-feedback-control-systems]]. Course cross-links: [[homeostasis-feedback-control]].' },
    { logic: 'Where it shows up clinically', detail: 'The baroreflex example is the same loop tested in orthostatic hypotension and in shock compensation; the cardiac end of it is [[frank-starling-cardiac-function]]. Chronic high-gain loops with delay explain periodic breathing and cyclical hormone secretion.' },
  ],

  mnemonics: [
    { hook: 'GAIN = Correction over Error — "how much did the loop erase, per unit of what is left over?"', expansion: ['Gain −2 → corrects two-thirds', 'Gain −33 → corrects ~97%', 'Fraction corrected = |G| ÷ (1 + |G|)'] },
    { hook: 'Negative feedback = "NO, go back" — the minus sign IS the direction of the response', expansion: ['Baroreflex −2 (loose)', 'Thermoregulation −33 (tight)', 'Bigger absolute gain = tighter defence'] },
  ],

  traps: [
    {
      questionCategory: 'Does negative feedback fully restore the variable',
      wrongInstinct: 'A functioning negative-feedback loop returns the variable exactly to its set point',
      rightAnswer: 'No — a residual error always persists, because gain is finite',
      why: 'The error IS the signal; if the error reached zero the drive for correction would vanish with it.',
    },
    {
      questionCategory: 'Interpreting the gain number',
      wrongInstinct: 'A gain of −2 means the disturbance was corrected by half, or corrected twice over',
      rightAnswer: 'Gain −2 means the correction was twice the REMAINING error, so two-thirds of the disturbance was removed',
      why: 'Gain compares correction to the leftover error, not to the size of the original disturbance.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A volume load raises arterial pressure from 100 to 175 mmHg in an animal with denervated baroreceptors. With the baroreflex intact, the same load raises pressure from 100 to 125 mmHg. What is the gain of the baroreceptor control system?',
      options: [
        { id: 'a', text: '−0.5' },
        { id: 'b', text: '−2' },
        { id: 'c', text: '−3' },
        { id: 'd', text: '−7' },
      ],
      answerId: 'b',
      explanation: 'Correction = 125 − 175 = −50 mmHg. Error = 125 − 100 = +25 mmHg. Gain = −50 ÷ +25 = −2. Choosing −3 comes from dividing the full 75 mmHg disturbance by the error; −0.5 inverts the ratio.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'The thermoregulatory system has a gain of about −33 while the baroreceptor system has a gain of about −2. Which conclusion follows?',
      options: [
        { id: 'a', text: 'Thermoregulation responds 33 times faster than the baroreflex' },
        { id: 'b', text: 'Thermoregulation removes a far greater fraction of any disturbance — roughly 97% versus about 67%' },
        { id: 'c', text: 'The baroreflex is a positive-feedback system and thermoregulation is negative' },
        { id: 'd', text: 'Thermoregulation returns core temperature exactly to its set point, while the baroreflex does not' },
      ],
      answerId: 'b',
      explanation: 'Gain measures effectiveness, not speed. Fraction corrected = |G| ÷ (1 + |G|): 33/34 ≈ 97% versus 2/3 ≈ 67%. Both are negative feedback, and both leave a residual error because both gains are finite.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'After maximal baroreflex compensation for an acute volume load, arterial pressure remains slightly above the pre-load value. Why does the reflex not eliminate the rise completely?',
      options: [
        { id: 'a', text: 'The baroreceptors have already adapted and stopped firing' },
        { id: 'b', text: 'The effector organs have reached their maximum capacity' },
        { id: 'c', text: 'Gain is finite, so a residual error must persist — that error is what continues to drive the corrective response' },
        { id: 'd', text: 'A positive-feedback loop is opposing the reflex' },
      ],
      answerId: 'c',
      explanation: 'Any finite-gain negative-feedback loop leaves residual error = disturbance ÷ (1 + |G|). Complete correction would abolish the error signal and therefore the drive itself. Baroreceptor adaptation is real but occurs over days, not within the acute response.',
      tests: 'exam',
    },
  ],
};

export default ghpNegativeFeedbackGain;
