import type { Lecture } from '../../lib/types';
import { RAAS_PATHWAY } from '../../lib/figures';

export const longTermBpRaas: Lecture = {
  id: 'long-term-bp-raas',
  title: 'Long-Term BP Control: RAAS & the Kidney',
  system: 'cardiovascular',
  source: 'L7 — Regulation of Blood Pressure',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L7 BP Regulation' },
    { kind: 'mechanism', label: 'Hormonal/renal' },
    { kind: 'exam', label: 'RAAS · ADH' },
  ],

  highYield: [
    '**Short-term BP control is neural (baroreflex); LONG-term control is hormonal/renal — set by the kidney via blood VOLUME.** The baroreflex "resets" over days, so sustained BP is ultimately determined by how much salt and water the kidney retains (pressure-natriuresis).',
    '**The renin–angiotensin–aldosterone system (RAAS) — the central hormonal loop.** Low BP/volume (or low renal perfusion, low Na⁺, sympathetic drive) → **kidney releases renin** → renin converts **angiotensinogen → angiotensin I** → **ACE (in the lung)** converts it to **angiotensin II**.',
    '**Angiotensin II raises BP by several actions:** potent **arteriolar vasoconstriction (↑TPR)**, stimulates **aldosterone** (adrenal cortex) → **Na⁺ and water retention** (↑volume), stimulates **ADH** and **thirst**, and promotes proximal-tubule Na⁺ reabsorption. Net: **↑volume + ↑resistance → ↑BP.**',
    '**ADH (vasopressin)** from the posterior pituitary → **water reabsorption** (aquaporins in the collecting duct) and, at high levels, vasoconstriction. **ANP/BNP** (released by stretched atria/ventricles) oppose RAAS → **natriuresis and vasodilation (lower BP)** — the body\'s "anti-hypertensive" hormones.',
    '**This is the basis of antihypertensive drugs:** **ACE inhibitors** (block angiotensin II formation), **ARBs** (block its receptor), **aldosterone antagonists** (spironolactone), and **diuretics** (reduce volume) — all act on this volume/RAAS axis.',
  ],

  mechanism: {
    title: 'Kidney sets volume; RAAS/ADH raise it, ANP lowers it',
    steps: [
      { id: 's1', label: 'Long-term BP set by renal salt/water handling (volume)', emphasis: 'key' },
      { id: 's2', label: 'Low BP → renin → angiotensin I → (ACE) → angiotensin II', emphasis: 'key' },
      { id: 's3', label: 'Angiotensin II: vasoconstrict + aldosterone + ADH + thirst → ↑BP', emphasis: 'key' },
      { id: 's4', label: 'Aldosterone → Na⁺/water retention; ADH → water reabsorption' },
      { id: 's5', label: 'ANP/BNP oppose RAAS → natriuresis, vasodilation (↓BP)' },
    ],
  },

  examFindings: [
    { sign: 'Renin released by the juxtaglomerular apparatus', mechanism: 'Response to low BP/volume, low Na⁺, or sympathetic drive', significance: 'key' },
    { sign: 'ACE converts angiotensin I → II (in the lung)', mechanism: 'Rate-limiting step (ACE-inhibitor target)', significance: 'key' },
    { sign: 'Aldosterone → Na⁺ and water retention', mechanism: 'Angiotensin II stimulation → ↑volume → ↑BP', significance: 'key' },
    { sign: 'ANP/BNP cause natriuresis and vasodilation', mechanism: 'Counter-regulatory (lower BP)', significance: 'supportive' },
    { sign: 'ACE inhibitor lowers BP (± dry cough)', mechanism: 'Blocks angiotensin II (and bradykinin breakdown → cough)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Enzyme converting angiotensin I to II', meaning: 'ACE (angiotensin-converting enzyme)' },
    { clue: 'Hormone driving renal Na⁺/water retention in RAAS', meaning: 'Aldosterone' },
    { clue: 'Hormones that oppose RAAS and lower BP', meaning: 'ANP / BNP (natriuretic peptides)' },
    { clue: 'What ultimately sets long-term blood pressure', meaning: 'Renal control of blood volume (pressure-natriuresis)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'RAAS is the target of the commonest antihypertensives (ACE-I, ARB, aldosterone antagonists, diuretics) and drives heart-failure treatment. It complements the fast baroreflex ([[blood-pressure-baroreceptor-reflex]]). RAAS pathology (hyperaldosteronism) appears in HEN-2; BP measurement: [[blood-pressure-measurement-abpm]].' },
  ],

  mnemonics: [
    { hook: 'RAAS: "Renin → Angiotensin I → (ACE) → Angiotensin II → Aldosterone" (vasoconstrict + retain salt/water)', expansion: ['ANP/BNP oppose it'] },
    { hook: 'Long-term BP = kidney/volume; short-term = baroreflex/neural', expansion: ['Pressure-natriuresis'] },
  ],

  traps: [
    {
      questionCategory: 'Short-term vs long-term BP control',
      wrongInstinct: 'The baroreceptor reflex is responsible for long-term blood pressure regulation',
      rightAnswer: 'The baroreflex is SHORT-term (and resets over days); LONG-term BP is controlled by the kidney/RAAS via blood volume (pressure-natriuresis)',
      why: 'Neural reflexes buffer moment-to-moment changes but adapt; sustained BP is set by renal salt/water handling.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Angiotensin II raises blood pressure by all of the following EXCEPT:',
      options: [
        { id: 'a', text: 'Causing arteriolar vasoconstriction' },
        { id: 'b', text: 'Stimulating aldosterone release (Na⁺/water retention)' },
        { id: 'c', text: 'Promoting natriuresis and diuresis' },
        { id: 'd', text: 'Stimulating ADH release and thirst' },
      ],
      answerId: 'c',
      explanation: 'Angiotensin II RAISES BP: vasoconstriction, aldosterone (Na⁺/water retention), ADH, and thirst. Natriuresis/diuresis (lowering BP) is the action of the OPPOSING natriuretic peptides (ANP/BNP).',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Long-term regulation of arterial blood pressure is ultimately determined by:',
      options: [
        { id: 'a', text: 'The baroreceptor reflex' },
        { id: 'b', text: 'Renal control of blood volume (salt and water balance)' },
        { id: 'c', text: 'The chemoreceptor reflex' },
        { id: 'd', text: 'The Bainbridge reflex' },
      ],
      answerId: 'b',
      explanation: 'Because neural reflexes reset over time, sustained blood pressure is set by the kidney via pressure-natriuresis and the RAAS, which control blood volume.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'RAAS pathway', svg: RAAS_PATHWAY, caption: 'Renin → angiotensin I → (ACE) → angiotensin II → vasoconstriction + aldosterone (Na⁺/water) + ADH/thirst → ↑BP; ANP/BNP oppose.' },
  ],
};

export default longTermBpRaas;
