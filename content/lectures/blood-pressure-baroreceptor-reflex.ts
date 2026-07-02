import type { Lecture } from '../../lib/types';
import { BP_DETERMINANTS } from '../../lib/figures';

export const bloodPressureBaroreceptorReflex: Lecture = {
  id: 'blood-pressure-baroreceptor-reflex',
  title: 'Blood Pressure Determinants & the Baroreceptor Reflex',
  system: 'cardiovascular',
  source: 'L7 — Regulation of Blood Pressure',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L7 BP Regulation' },
    { kind: 'mechanism', label: 'MAP = CO × TPR' },
    { kind: 'exam', label: 'Baroreflex' },
  ],

  highYield: [
    '**Blood pressure = flow × resistance: Mean Arterial Pressure (MAP) = Cardiac Output × Total Peripheral Resistance.** Anything raising CO (heart rate, stroke volume) or TPR (arteriolar vasoconstriction) raises BP. **MAP ≈ diastolic + ⅓ (systolic − diastolic)** — closer to diastolic because diastole is longer.',
    '**Pulse pressure = systolic − diastolic.** It **widens** with **increased stroke volume or stiff arteries** (e.g. isolated systolic hypertension in the elderly, aortic regurgitation) and **narrows** with low stroke volume (e.g. shock, aortic stenosis, tamponade).',
    '**The baroreceptor reflex = the fast, neural, moment-to-moment BP controller.** **Stretch receptors (baroreceptors) in the carotid sinus (CN IX) and aortic arch (CN X)** sense arterial pressure → signal the **medulla**. A **rise in BP → more baroreceptor firing → ↑parasympathetic + ↓sympathetic** → **↓heart rate, ↓contractility, vasodilation → BP falls** (negative feedback).',
    '**Conversely, a fall in BP (e.g. standing up, haemorrhage) → less baroreceptor firing → ↑sympathetic + ↓vagal** → **↑heart rate, ↑contractility, vasoconstriction (↑TPR) and venoconstriction** → BP restored. This is why standing quickly can cause transient dizziness (orthostatic) until the reflex compensates.',
    '**Other rapid inputs:** **peripheral chemoreceptors** (severe hypoxia/hypercapnia raise sympathetic drive) and the **CNS ischaemic response (Cushing reflex)** — a last-ditch massive sympathetic surge when brain perfusion is critically low (hypertension + bradycardia in raised ICP).',
  ],

  mechanism: {
    title: 'BP = CO × TPR; baroreflex corrects it fast',
    steps: [
      { id: 's1', label: 'MAP = Cardiac Output × Total Peripheral Resistance', emphasis: 'key' },
      { id: 's2', label: 'Pulse pressure = systolic − diastolic (widens with stiff arteries)' },
      { id: 's3', label: 'Baroreceptors (carotid sinus CN IX, aortic arch CN X) sense stretch', emphasis: 'key' },
      { id: 's4', label: '↑BP → ↑vagal/↓sympathetic → ↓HR, vasodilation (BP falls)', emphasis: 'key' },
      { id: 's5', label: '↓BP → ↑sympathetic → ↑HR, vasoconstriction (BP restored)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'MAP = CO × TPR', mechanism: 'Fundamental BP equation', significance: 'key' },
    { sign: 'Carotid sinus massage slows the heart', mechanism: 'Baroreceptor activation → ↑vagal tone', significance: 'key' },
    { sign: 'Tachycardia and vasoconstriction after haemorrhage', mechanism: 'Baroreflex response to a fall in BP', significance: 'key' },
    { sign: 'Widened pulse pressure in the elderly', mechanism: 'Stiff (less compliant) arteries', significance: 'supportive' },
    { sign: 'Hypertension + bradycardia with raised ICP', mechanism: 'Cushing reflex (CNS ischaemic response)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The equation for mean arterial pressure', meaning: 'MAP = CO × TPR' },
    { clue: 'Receptors sensing beat-to-beat arterial pressure', meaning: 'Baroreceptors (carotid sinus, aortic arch)' },
    { clue: 'Reflex response to standing up (BP drops)', meaning: 'Baroreflex: ↑sympathetic → ↑HR + vasoconstriction' },
    { clue: 'Effect of carotid sinus massage', meaning: 'Slows heart rate (increased vagal tone)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The baroreflex explains orthostatic responses, carotid sinus massage (for SVT), shock physiology, and why β-blockers/vasodilators lower BP. Long-term BP is set by the kidney/RAAS ([[long-term-bp-raas]]); measurement/hypertension: [[blood-pressure-measurement-abpm]].' },
  ],

  mnemonics: [
    { hook: 'BP = CO × TPR (flow × resistance)', expansion: ['MAP ≈ DBP + ⅓ pulse pressure'] },
    { hook: 'Baroreflex: "↑BP → ↑vagus (slow); ↓BP → ↑sympathetic (speed up + squeeze)"', expansion: ['Fast, neural, negative feedback'] },
  ],

  traps: [
    {
      questionCategory: 'Baroreceptor response to a BP rise',
      wrongInstinct: 'A rise in blood pressure increases baroreceptor firing and thus increases heart rate',
      rightAnswer: 'A BP rise increases baroreceptor firing → ↑parasympathetic/↓sympathetic → DECREASED heart rate and vasodilation (to bring BP back down)',
      why: 'It is negative feedback: the reflex opposes the change, so more stretch (higher BP) slows the heart, it doesn\'t speed it up.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A sudden fall in arterial blood pressure (e.g. on standing) triggers the baroreceptor reflex to:',
      options: [
        { id: 'a', text: 'Decrease heart rate and cause vasodilation' },
        { id: 'b', text: 'Increase sympathetic outflow → increased heart rate, contractility, and vasoconstriction' },
        { id: 'c', text: 'Increase vagal tone' },
        { id: 'd', text: 'Have no effect' },
      ],
      answerId: 'b',
      explanation: 'Reduced baroreceptor firing (low BP) disinhibits the medullary sympathetic centres → ↑heart rate, ↑contractility, and vaso/venoconstriction, restoring blood pressure.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Mean arterial pressure is determined by the product of:',
      options: [
        { id: 'a', text: 'Stroke volume and pulse pressure' },
        { id: 'b', text: 'Cardiac output and total peripheral resistance' },
        { id: 'c', text: 'Heart rate and haematocrit' },
        { id: 'd', text: 'Preload and afterload' },
      ],
      answerId: 'b',
      explanation: 'MAP = cardiac output × total peripheral resistance (analogous to pressure = flow × resistance). Changes in CO or arteriolar tone (TPR) therefore alter blood pressure.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Determinants of blood pressure', svg: BP_DETERMINANTS, caption: 'MAP = CO × TPR; CO = HR × SV; SV depends on preload/afterload/contractility; the baroreflex adjusts these fast.' },
  ],
};

export default bloodPressureBaroreceptorReflex;
