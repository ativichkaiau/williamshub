import type { Lecture } from '../../lib/types';

export const systemicPulmonaryCirculation: Lecture = {
  id: 'systemic-pulmonary-circulation',
  title: 'Systemic & Pulmonary Circulation Overview',
  system: 'cardiovascular',
  source: 'L1 — Overview of the Cardiovascular System',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L1 CVS Overview' },
    { kind: 'mechanism', label: 'Two circuits' },
    { kind: 'exam', label: 'Portal systems' },
  ],

  highYield: [
    '**The circulation is two loops in series.** The **pulmonary circuit** (RV → pulmonary arteries → lungs → pulmonary veins → LA) is **low-pressure, low-resistance** and oxygenates blood. The **systemic circuit** (LV → aorta → arteries → capillaries → veins → RA) is **high-pressure** and delivers O₂/nutrients to tissues.',
    '**Note the "backwards" naming:** pulmonary **arteries carry deoxygenated** blood (RV → lungs) and pulmonary **veins carry oxygenated** blood (lungs → LA) — the only place where arteries are deoxygenated and veins oxygenated (also true of the umbilical vessels).',
    '**Blood vessel sequence and function:** **arteries** (conduct, high pressure) → **arterioles** (the main **resistance** vessels — control blood flow and pressure) → **capillaries** (**exchange**) → **venules → veins** (**capacitance** — hold ~65% of blood volume, low pressure, valves).',
    '**Because the two pumps are in series, right and left cardiac outputs must be EQUAL over time** — if they mismatched, blood would accumulate in one circuit (the basis of congestion in heart failure).',
    '**Portal systems** are a special arrangement where **two capillary beds are connected in series by a portal vessel** (rather than returning straight to the heart): the **hepatic portal system** (gut capillaries → portal vein → liver sinusoids) and the **hypothalamo-hypophyseal portal system**; the **renal portal-like** arrangement (glomerular then peritubular capillaries via efferent arteriole) is analogous.',
  ],

  mechanism: {
    title: 'Two series loops; vessels specialise by job',
    steps: [
      { id: 's1', label: 'Pulmonary: RV→lungs→LA (low pressure, oxygenates)', emphasis: 'key' },
      { id: 's2', label: 'Systemic: LV→body→RA (high pressure, delivers)', emphasis: 'key' },
      { id: 's3', label: 'Pulmonary arteries deoxygenated; pulmonary veins oxygenated', emphasis: 'key' },
      { id: 's4', label: 'Arteries conduct → arterioles resist → capillaries exchange → veins store' },
      { id: 's5', label: 'Right CO = left CO (series); portal systems link 2 capillary beds' },
    ],
  },

  examFindings: [
    { sign: 'Pulmonary artery carries deoxygenated blood', mechanism: 'RV → lungs (the "backwards" vessel)', significance: 'key' },
    { sign: 'Arterioles are the main resistance vessels', mechanism: 'Smooth muscle controls flow/pressure (TPR)', significance: 'key' },
    { sign: 'Veins hold ~65% of blood volume', mechanism: 'Capacitance vessels (low pressure, distensible)', significance: 'supportive' },
    { sign: 'Right and left cardiac outputs are equal', mechanism: 'Pumps in series', significance: 'key' },
    { sign: 'Gut blood passing through the liver before the heart', mechanism: 'Hepatic portal system (two capillary beds in series)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The low-pressure circuit', meaning: 'Pulmonary circulation' },
    { clue: 'Vessel type controlling total peripheral resistance', meaning: 'Arterioles (resistance vessels)' },
    { clue: 'Vessels holding most of the blood volume', meaning: 'Veins (capacitance)' },
    { clue: 'System draining gut capillaries into the liver', meaning: 'Hepatic portal system' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The series arrangement explains why left-heart failure backs up into the lungs and right-heart failure into the body; arteriolar tone sets blood pressure ([[blood-pressure-baroreceptor-reflex]]). Vessel-wall histology: [[blood-vessel-histology]]; heart anatomy: [[heart-anatomy-chambers-valves]].' },
  ],

  mnemonics: [
    { hook: 'Vessels: "Arteries conduct, Arterioles resist, Capillaries exchange, Veins store"', expansion: ['Veins = 65% of volume'] },
    { hook: 'Pulmonary artery = deoxygenated (the exception)', expansion: ['Pulmonary vein = oxygenated'] },
  ],

  traps: [
    {
      questionCategory: 'Oxygenation of pulmonary vessels',
      wrongInstinct: 'All arteries carry oxygenated blood and all veins carry deoxygenated blood',
      rightAnswer: 'The PULMONARY artery carries DEOXYGENATED blood and the pulmonary vein carries OXYGENATED blood (also the umbilical vessels are reversed)',
      why: 'Arteries are defined by direction (away from the heart), not oxygen content; the pulmonary (and umbilical) vessels are the classic exceptions.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which vessels serve as the principal resistance vessels controlling total peripheral resistance and blood flow distribution?',
      options: [
        { id: 'a', text: 'Elastic arteries' },
        { id: 'b', text: 'Arterioles' },
        { id: 'c', text: 'Capillaries' },
        { id: 'd', text: 'Large veins' },
      ],
      answerId: 'b',
      explanation: 'Arterioles have a thick smooth-muscle media relative to their small lumen; adjusting their diameter is the main way the body controls total peripheral resistance, blood pressure, and regional flow.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Because the pulmonary and systemic circuits are arranged in series, the output of the right ventricle must:',
      options: [
        { id: 'a', text: 'Be much greater than the left ventricle' },
        { id: 'b', text: 'Equal the output of the left ventricle over time' },
        { id: 'c', text: 'Be independent of the left ventricle' },
        { id: 'd', text: 'Be about half the left ventricle' },
      ],
      answerId: 'b',
      explanation: 'In a series circuit, all the blood pumped by the right ventricle must pass through the left, so their outputs are equal over time; a sustained mismatch causes congestion (heart failure).',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default systemicPulmonaryCirculation;
