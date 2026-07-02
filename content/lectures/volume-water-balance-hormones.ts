import type { Lecture } from '../../lib/types';

export const volumeWaterBalanceHormones: Lecture = {
  id: 'volume-water-balance-hormones',
  title: 'Hormonal Control of Volume & Water Balance',
  system: 'renal',
  source: 'L6 — Body Fluids & Water Balance',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L6 Body Fluids' },
    { kind: 'mechanism', label: 'RAAS · ANP · ADH' },
    { kind: 'treatment', label: 'Volume regulation' },
  ],

  highYield: [
    '**The body regulates two things almost independently: ECF volume (via sodium) and osmolality (via water).** Volume is sensed by baroreceptors and the juxtaglomerular apparatus; osmolality by hypothalamic osmoreceptors. Different hormones serve each axis, and together they defend blood pressure and cell size.',
    '**Low volume/pressure activates the renin–angiotensin–aldosterone system (RAAS) to retain salt and water:** renin → angiotensin II (vasoconstriction, efferent arteriolar tone, thirst, ADH release, proximal Na⁺ reabsorption) → **aldosterone**, which acts on collecting-duct principal cells to reabsorb Na⁺ (via ENaC) and secrete K⁺. Net effect: ECF volume and blood pressure rise.',
    '**Volume overload releases natriuretic peptides (ANP from atria, BNP from ventricles), which oppose RAAS:** they promote **natriuresis and diuresis**, vasodilate, raise GFR, and inhibit renin/aldosterone/ADH — "dumping" salt and water to shrink an overfilled ECF. ANP and RAAS are the push–pull of volume control.',
    '**Osmolality is defended by ADH and thirst.** A rise in plasma osmolality of ~1–2% triggers ADH (water reabsorption, [[adh-water-regulation]]) and the sensation of thirst (water intake); a fall switches both off, producing dilute urine. Because water follows osmoles, this axis sets the plasma Na⁺ concentration.',
    '**The two axes interact but answer different questions:** "How much salt/volume?" → RAAS vs ANP; "How concentrated?" → ADH/thirst. Severe volume depletion, however, will override osmolality control — the body will retain water (ADH) to defend blood pressure even at the cost of hyponatraemia (the "volume trumps osmolality" principle).',
  ],

  mechanism: {
    title: 'RAAS retains, ANP dumps (volume); ADH/thirst set osmolality',
    steps: [
      { id: 's1', label: 'Volume sensed by baroreceptors + JGA; osmolality by osmoreceptors', emphasis: 'key' },
      { id: 's2', label: 'Low volume → RAAS → Na⁺/water retention, vasoconstriction', emphasis: 'key' },
      { id: 's3', label: 'High volume → ANP/BNP → natriuresis, diuresis (oppose RAAS)', emphasis: 'key' },
      { id: 's4', label: '↑Osmolality → ADH + thirst → water reabsorbed/ingested' },
      { id: 's5', label: 'Severe hypovolaemia overrides osmolality (volume wins)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Salt and water retention with activated RAAS', mechanism: 'Angiotensin II + aldosterone in low-volume states', significance: 'key' },
    { sign: 'Natriuresis and diuresis when the atria are stretched', mechanism: 'ANP/BNP release opposing RAAS', significance: 'key' },
    { sign: 'Hyponatraemia in severe hypovolaemia despite low Na⁺ store', mechanism: 'ADH retains water to defend volume (volume > osmolality)', significance: 'key' },
    { sign: 'Elevated BNP in heart failure', mechanism: 'Ventricular stretch — a volume-overload marker', significance: 'supportive' },
    { sign: 'Oedema in heart/renal/liver failure', mechanism: 'Inappropriate Na⁺/water retention (effective volume sensed as low)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The hormone system retaining salt and water in hypovolaemia', meaning: 'Renin–angiotensin–aldosterone system (RAAS)' },
    { clue: 'The peptides causing natriuresis when the heart is overfilled', meaning: 'ANP (atrial) and BNP (ventricular)' },
    { clue: 'The hormone/behaviour pair defending osmolality', meaning: 'ADH and thirst' },
    { clue: 'Which is defended first when volume and osmolality conflict', meaning: 'Volume (ADH retains water even at the cost of hyponatraemia)' },
  ],

  treatment: [
    { logic: 'Why volume control matters', detail: 'These axes are the targets of ACE-I/ARBs, aldosterone antagonists, and diuretics, and explain oedema and hypertension. Aldosterone\'s Na⁺/K⁺ trade drives [[renal-potassium-handling]]; ADH sets osmolality ([[adh-water-regulation]]); the compartments they defend are in [[body-fluid-compartments-renal]]. RAAS also tunes glomerular tone ([[renal-hemodynamics-autoregulation]]).' },
  ],

  mnemonics: [
    { hook: 'RAAS Retains, ANP Abandons (salt)', expansion: ['RAAS: retain Na⁺/water → ↑volume/BP', 'ANP/BNP: natriuresis/diuresis → ↓volume'] },
    { hook: '"Volume trumps osmolality"', expansion: ['Severe hypovolaemia → ADH on despite low osmolality', 'Body accepts hyponatraemia to defend blood pressure'] },
  ],

  traps: [
    {
      questionCategory: 'Volume vs osmolality regulation',
      wrongInstinct: 'ADH is released only when plasma osmolality is high',
      rightAnswer: 'Although osmolality is the most SENSITIVE trigger, a large fall in effective circulating VOLUME is a powerful (if less sensitive) stimulus for ADH — the body will retain water to defend volume even when that lowers osmolality (causing hyponatraemia)',
      why: 'The two axes are usually separate, but when they conflict, preserving blood pressure/perfusion takes priority — explaining the hyponatraemia of severe volume depletion, heart failure and cirrhosis.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'In response to a fall in effective circulating volume, the renin–angiotensin–aldosterone system acts to:',
      options: [
        { id: 'a', text: 'Increase sodium and water excretion' },
        { id: 'b', text: 'Retain sodium and water and raise blood pressure' },
        { id: 'c', text: 'Lower blood pressure by vasodilation' },
        { id: 'd', text: 'Inhibit ADH release' },
      ],
      answerId: 'b',
      explanation: 'RAAS retains sodium (angiotensin II proximally, aldosterone distally) and water, causes vasoconstriction, and stimulates thirst and ADH — all serving to restore ECF volume and blood pressure.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Atrial natriuretic peptide (ANP), released when the atria are stretched by volume overload, principally causes:',
      options: [
        { id: 'a', text: 'Sodium and water retention' },
        { id: 'b', text: 'Natriuresis, diuresis and vasodilation' },
        { id: 'c', text: 'Increased renin and aldosterone secretion' },
        { id: 'd', text: 'Intense vasoconstriction' },
      ],
      answerId: 'b',
      explanation: 'ANP opposes RAAS: it promotes sodium and water excretion, raises GFR, vasodilates, and inhibits renin, aldosterone and ADH — reducing an overfilled extracellular volume.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default volumeWaterBalanceHormones;
