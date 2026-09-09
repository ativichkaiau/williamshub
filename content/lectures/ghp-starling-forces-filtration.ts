import type { Lecture } from '../../lib/types';

export const ghpStarlingForcesFiltration: Lecture = {
  id: 'ghp-starling-forces-filtration',
  title: 'Starling Forces & Capillary Filtration',
  system: 'cardiovascular',
  source: 'Ch 16 — The Microcirculation & the Lymphatic System',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 16 Microcirculation' },
    { kind: 'mechanism', label: 'Net filtration pressure' },
    { kind: 'exam', label: 'Mechanisms of oedema' },
  ],

  highYield: [
    '**Four pressures, and you must know which way each one points.** **NFP = (Pc − Pif) − (πp − πif)**. Pushing fluid **out**: **capillary hydrostatic pressure (Pc)** and **interstitial colloid osmotic pressure (πif)**. Pulling it **in**: **plasma colloid osmotic pressure (πp)** and **interstitial hydrostatic pressure (Pif)** — except that Pif is normally **negative (~−3 mmHg)**, so in practice it too pushes outward. Then **filtration = Kf × NFP**.',
    '**Learn the standard number set; questions are built from it.** **Pc ≈ 30 mmHg** at the arterial end, **≈ 10 mmHg** at the venous end, **functional mean ≈ 17 mmHg**; **πp ≈ 28 mmHg**; **Pif ≈ −3 mmHg**; **πif ≈ 8 mmHg**. Mean outward = 17.3 + 3 + 8 = **28.3**; inward = **28**; **mean NFP ≈ +0.3 mmHg**. Multiply by whole-body **Kf ≈ 6.6 mL/min/mmHg** and you get **~2 mL/min ≈ 2–4 L/day** — exactly the volume the lymphatics carry. The system is tuned to a fraction of a millimetre of mercury.',
    '**Along one capillary the sign of the NFP flips.** Arterial end: 30 + 3 + 8 − 28 = **+13 mmHg → filtration**. Venous end: 10 + 3 + 8 − 28 = **−7 mmHg → reabsorption**. About **nine-tenths** of what is filtered is reabsorbed at the venous end; the remaining **tenth**, plus **all the escaped protein**, must leave as **lymph**. Treat this as the teaching idealisation it is: many real capillaries filter along their whole length and depend on lymph for the entire return.',
    '**Plasma colloid osmotic pressure is 28 mmHg, but only ~19 of it is protein osmosis.** Plasma protein at ~**7.3 g/dL** generates **~19 mmHg** directly; the other **~9 mmHg** comes from the **Donnan effect** — negatively charged protein retains cations, and those extra particles exert their own osmotic pull. **Albumin supplies ~21.8 of the 28 mmHg** even though it is under two-thirds of the protein mass, because colloid osmotic pressure depends on the **number of molecules, not their mass**, and albumin is the smallest and most numerous.',
    '**Kf is a conductance, not a pressure — and it is the multiplier.** Kf = **hydraulic conductivity × surface area** (whole body ≈ **6.6 mL/min/mmHg**; ~0.01 mL/min/mmHg per 100 g for ordinary tissue, with the **glomerulus far higher** and brain lowest). Anything that **recruits surface area** (vasodilation, opening precapillary sphincters) or **damages the barrier** (**burns, sepsis, histamine, anaphylaxis**) raises Kf, and a raised Kf multiplies whatever NFP happens to exist.',
    '**Oedema is always the Starling equation with one term deranged — name the term before you treat.** Raised **Pc** (heart failure, venous obstruction, arteriolar dilation, salt and water retention); fallen **πp** (nephrotic syndrome, cirrhosis, protein-losing enteropathy, kwashiorkor); raised **Kf with protein leak** (burns, sepsis, anaphylaxis — a double hit, since escaped protein also **raises πif**); or **lymphatic block** (filariasis, node clearance, radiotherapy). A diuretic fixes only the first.',
  ],

  mechanism: {
    title: 'Four pressures decide whether fluid leaves the capillary or returns to it',
    steps: [
      { id: 's1', label: 'Pc pushes fluid out: ~30 mmHg arterial end, ~10 mmHg venous end, ~17 mmHg mean', emphasis: 'key' },
      { id: 's2', label: 'Plasma colloid osmotic pressure ~28 mmHg pulls it back — the only large inward force', emphasis: 'key' },
      { id: 's3', label: 'Interstitial hydrostatic pressure is about −3 mmHg, so it adds to the outward push' },
      { id: 's4', label: 'Interstitial colloid osmotic pressure ~8 mmHg also pulls outward' },
      { id: 's5', label: 'Mean NFP = 28.3 out − 28 in ≈ +0.3 mmHg — near-perfect balance', emphasis: 'key' },
      { id: 's6', label: 'Filtration = Kf × NFP: 6.6 × 0.3 ≈ 2 mL/min, cleared by the lymphatics', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Dependent pitting oedema in right heart failure', mechanism: 'Raised systemic venous pressure raises capillary hydrostatic pressure — the Pc term', significance: 'key' },
    { sign: 'Generalised oedema with serum albumin 1.8 g/dL in nephrotic syndrome', mechanism: 'Plasma colloid osmotic pressure falls, so the only large inward force is lost', significance: 'key' },
    { sign: 'Massive whole-body oedema within hours of an extensive burn', mechanism: 'Kf and permeability rise together, and escaping protein raises interstitial oncotic pressure while plasma oncotic pressure falls', significance: 'key' },
    { sign: 'Acute pulmonary oedema once pulmonary capillary or left atrial pressure exceeds about 25 mmHg', mechanism: 'Pulmonary capillary hydrostatic pressure approaches the 28 mmHg plasma colloid osmotic pressure and the safety factor is exhausted', significance: 'key' },
    { sign: 'Ankle swelling after an hour of standing still', mechanism: 'Gravity raises capillary hydrostatic pressure in dependent limbs beyond the safety-factor reserve, with no muscle pump running', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'NFP = (Pc − Pif) − (πp − πif)', meaning: 'The Starling equation — all four pressures in one line' },
    { clue: 'Filtration = Kf × NFP, with Kf about 6.6 mL/min/mmHg for the whole body', meaning: 'Kf is hydraulic conductivity times surface area, not a pressure' },
    { clue: 'Plasma colloid osmotic pressure 28 mmHg, of which about 9 mmHg is not protein osmosis itself', meaning: 'The Donnan effect — cations retained by protein negative charge' },
    { clue: 'Albumin contributing roughly 22 of the 28 mmHg', meaning: 'Oncotic pressure depends on molecular number, not mass — albumin is the smallest and most numerous protein' },
    { clue: 'Mean net filtration pressure of only about +0.3 mmHg', meaning: 'Filtration and reabsorption are almost exactly balanced; the small excess becomes lymph' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'This single equation is the shared grammar of oedema, ascites, pulmonary congestion and glomerular filtration — every one of them is a change in Pc, πp, Kf, or lymphatic drainage. It only works because the capillary pore excludes protein ([[ghp-capillary-exchange-diffusion]]), and the leftover filtrate plus escaped protein is handled by [[ghp-lymphatic-interstitial-fluid]].' },
    { logic: 'Reading oedema backwards to a pressure', detail: 'Ask which term moved: raised **Pc** answers to diuresis, venous drainage and afterload reduction; low **πp** answers to treating protein loss, not to more diuretic; raised **Kf** answers to treating the sepsis or burn; a lymphatic block answers to compression, not to either. Congestive physiology in full is [[ghp-decompensated-failure-oedema]]; the same four forces driving a filtration organ are in [[glomerular-filtration-gfr]].' },
  ],

  mnemonics: [
    { hook: 'Two forces OUT, two IN — but one of the INs is negative, so it pushes OUT', expansion: ['OUT: capillary hydrostatic (17 mean) + interstitial oncotic (8)', 'IN: plasma oncotic (28)', 'Interstitial hydrostatic is −3, so it contributes +3 outward', '28.3 out versus 28 in = +0.3 mmHg net filtration'] },
    { hook: 'Oedema = Push up, Pull down, Leak, or Block', expansion: ['Push up — raised Pc: heart failure, venous obstruction, salt retention', 'Pull down — low albumin: nephrotic syndrome, cirrhosis, malnutrition', 'Leak — raised Kf and permeability: burns, sepsis, histamine', 'Block — lymphatic obstruction: filariasis, node clearance, radiotherapy'] },
  ],

  traps: [
    {
      questionCategory: 'Which term of the equation actually changed',
      wrongInstinct: 'Ascites and oedema in cirrhosis are purely a low-albumin problem',
      rightAnswer: 'Portal hypertension raises hepatic sinusoidal and splanchnic capillary hydrostatic pressure as well, and secondary hyperaldosteronism adds salt and water — Pc and plasma oncotic pressure are both deranged',
      why: 'Hypoalbuminaemia alone rarely produces ascites; a raised sinusoidal pressure is required.',
    },
    {
      questionCategory: 'The sign of interstitial hydrostatic pressure',
      wrongInstinct: 'Interstitial hydrostatic pressure is positive and therefore opposes filtration',
      rightAnswer: 'In loose subcutaneous tissue it is about −3 mmHg, so it adds to the outward force; it is positive only in encapsulated organs such as kidney and brain',
      why: 'Its negativity is generated by lymphatic pumping, and is itself one of the safety factors against oedema.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'At the arterial end of a systemic capillary, Pc = 30 mmHg, interstitial hydrostatic pressure = −3 mmHg, plasma colloid osmotic pressure = 28 mmHg and interstitial colloid osmotic pressure = 8 mmHg. What is the net filtration pressure?',
      options: [
        { id: 'a', text: '−7 mmHg (reabsorption)' },
        { id: 'b', text: '+0.3 mmHg' },
        { id: 'c', text: '+13 mmHg (filtration)' },
        { id: 'd', text: '+33 mmHg (filtration)' },
      ],
      answerId: 'c',
      explanation: 'Outward forces are Pc 30, the negative interstitial pressure contributing +3, and interstitial oncotic 8, totalling 41; the only inward force is plasma oncotic 28. NFP = 41 − 28 = +13 mmHg, so the arterial end filters. Option a is the venous end value, and b is the whole-capillary mean.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A child with kwashiorkor has generalised oedema with a normal blood pressure and a normal jugular venous pressure. Which Starling term is primarily deranged?',
      options: [
        { id: 'a', text: 'Increased capillary hydrostatic pressure' },
        { id: 'b', text: 'Reduced plasma colloid osmotic pressure' },
        { id: 'c', text: 'Increased filtration coefficient from endothelial injury' },
        { id: 'd', text: 'Obstruction of lymphatic drainage' },
      ],
      answerId: 'b',
      explanation: 'Protein malnutrition lowers plasma albumin and therefore plasma colloid osmotic pressure, removing the main inward force. A normal venous pressure argues against a raised Pc (a); there is no burn or sepsis to raise Kf (c); and lymphatic obstruction produces localised, non-pitting swelling rather than generalised oedema (d).',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'Albumin accounts for about 80% of plasma colloid osmotic pressure despite making up only around 60% of plasma protein by mass. Why?',
      options: [
        { id: 'a', text: 'Albumin is positively charged and attracts anions' },
        { id: 'b', text: 'Albumin is the only protein that cannot cross the capillary pore' },
        { id: 'c', text: 'Colloid osmotic pressure depends on the number of molecules, and albumin is the smallest and most numerous' },
        { id: 'd', text: 'Albumin binds water more avidly than globulin does' },
      ],
      answerId: 'c',
      explanation: 'Osmotic pressure is a colligative property set by particle number: albumin has a molecular weight around 69,000 versus roughly 140,000 for globulins, so a given mass provides about twice as many particles. Albumin is in fact negatively charged, which contributes to the Donnan effect (a), and globulins are also largely retained (b).',
      tests: 'mechanism',
    },
  ],
};

export default ghpStarlingForcesFiltration;
