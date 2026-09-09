import type { Lecture } from '../../lib/types';

export const ghpOedemaSafetyFactors: Lecture = {
  id: 'ghp-oedema-safety-factors',
  title: 'Oedema & the Safety Factors Against It',
  system: 'renal',
  source: 'Ch 25 — The Body Fluid Compartments; Edema',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'Ch 25 Body Fluids & Edema' },
    { kind: 'mechanism', label: 'Starling imbalance' },
    { kind: 'exam', label: 'Safety factors ~17 mmHg' },
  ],

  highYield: [
    '**Oedema is excess interstitial fluid, and it has exactly four Starling causes plus one drainage cause.** Filtration rises with **increased capillary hydrostatic pressure** or **decreased plasma colloid osmotic pressure**; it also rises with **increased capillary permeability** (protein leaks out, taking its osmotic pull with it) or **increased interstitial colloid osmotic pressure**. The fifth is **lymphatic obstruction**. Every clinical oedema maps onto one of these.',
    '**Intracellular oedema is a different mechanism entirely — it is pump failure.** Depressed metabolism or lack of nutrients means the **Na⁺/K⁺-ATPase** cannot extrude sodium; sodium accumulates inside, water follows, and the cell swells. Inflammation does the same by raising membrane permeability. Contrast this with extracellular oedema, which is a Starling problem, not a pump problem.',
    '**Three safety factors must be overcome before pitting oedema appears — together roughly 17 mmHg.** (1) **Negative interstitial fluid pressure** (about **−3 mmHg**) must first be driven positive, worth about **3 mmHg**. (2) **Lymphatic flow** can rise **10–50 fold**, worth about **7 mmHg**. (3) **Washdown of interstitial protein** by that lymph flow reduces interstitial oncotic pressure, worth another **7 mmHg**. This is why capillary pressure must roughly **double** before oedema is clinically obvious.',
    '**The low-protein oedemas and the high-pressure oedemas behave differently, and the pit tells you which.** Loss of plasma protein — **nephrotic syndrome**, **liver failure**, **protein-losing enteropathy**, **starvation** — lowers plasma oncotic pressure and gives **pitting** oedema. **Lymphatic obstruction** leaves protein in the interstitium, so the swelling is protein-rich and characteristically **non-pitting**.',
    '**Heart failure and renal failure cause oedema by raising capillary pressure and retaining salt and water.** Failure raises venous and hence capillary hydrostatic pressure, while the fall in renal perfusion recruits the retention described in [[ghp-renin-angiotensin-hypertension]]. Left-sided failure floods the lung; right-sided failure fills the periphery — the split developed in [[ghp-decompensated-failure-oedema]].',
    '**Pulmonary oedema is the emergency because the lung’s safety margin is small.** Pulmonary interstitial pressure is only slightly negative and the interstitial space is thin, so once **left atrial pressure** rises much above **~25 mmHg** fluid floods alveoli within minutes. The lymphatics that normally protect the interstitium, described in [[ghp-lymphatic-interstitial-fluid]], are quickly overwhelmed.',
  ],

  mechanism: {
    title: 'From altered Starling forces to visible swelling',
    steps: [
      { id: 's1', label: 'Capillary pressure rises, or plasma oncotic pressure falls', emphasis: 'key' },
      { id: 's2', label: 'Net filtration exceeds reabsorption; interstitial volume begins to rise' },
      { id: 's3', label: 'Negative interstitial pressure is driven toward zero (~3 mmHg of buffer)' },
      { id: 's4', label: 'Lymph flow increases up to 10–50× (~7 mmHg of buffer)', emphasis: 'key' },
      { id: 's5', label: 'Lymph washes interstitial protein away, lowering interstitial oncotic pull (~7 mmHg)' },
      { id: 's6', label: 'Once ~17 mmHg of safety is exhausted, free fluid accumulates and pits', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Pitting ankle oedema in nephrotic syndrome', mechanism: 'Urinary protein loss lowers plasma colloid osmotic pressure', significance: 'key' },
    { sign: 'Non-pitting swelling after axillary node clearance', mechanism: 'Lymphatic obstruction leaves protein-rich fluid in the interstitium', significance: 'key' },
    { sign: 'Raised JVP with dependent pitting oedema', mechanism: 'Elevated systemic venous and hence capillary hydrostatic pressure', significance: 'key' },
    { sign: 'Sudden breathlessness with pink frothy sputum', mechanism: 'Left atrial pressure exceeding the pulmonary safety margin', significance: 'key' },
    { sign: 'Generalised oedema with hypoalbuminaemia in liver failure', mechanism: 'Reduced albumin synthesis lowers plasma oncotic pressure', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Heavy proteinuria with hypoalbuminaemia', meaning: 'Nephrotic-range loss driving low-oncotic-pressure oedema' },
    { clue: 'High interstitial protein content on aspiration', meaning: 'Lymphatic obstruction rather than a hydrostatic cause' },
    { clue: 'Raised pulmonary capillary wedge pressure', meaning: 'Cardiogenic pulmonary oedema from raised left atrial pressure' },
    { clue: 'Normal wedge pressure with bilateral infiltrates', meaning: 'Increased permeability oedema rather than a pressure problem' },
    { clue: 'Low serum albumin with normal urine protein and abnormal liver tests', meaning: 'Reduced hepatic synthesis as the oncotic cause' },
  ],

  treatment: [
    {
      logic: 'Target the specific Starling force that has been deranged',
      detail: 'Diuresis lowers **capillary hydrostatic** pressure and helps the high-pressure oedemas; it does little for a purely **oncotic** or **permeability** problem and can worsen perfusion. Lymphoedema responds to compression and drainage, not to diuretics at all.',
    },
    {
      logic: 'Respect the safety factors when judging severity',
      detail: 'Because roughly **17 mmHg** of buffering must be exhausted first, **visible** oedema implies a substantial and sustained derangement — often several litres of retained fluid — not a marginal one.',
    },
  ],

  mnemonics: [
    { hook: 'Push out, pull in, leak, and drain', expansion: ['↑ capillary hydrostatic → push', '↓ plasma oncotic → less pull', '↑ permeability → protein leaks', 'Blocked lymphatics → no drainage'] },
    { hook: '3 + 7 + 7 = 17 mmHg of protection', expansion: ['3: negative interstitial pressure', '7: increased lymph flow', '7: interstitial protein washdown'] },
  ],

  traps: [
    {
      questionCategory: 'Pitting versus non-pitting',
      wrongInstinct: 'All oedema pits if you press hard enough',
      rightAnswer: 'Protein-rich lymphoedema characteristically does not pit',
      why: 'Interstitial protein and fibrosis hold the fluid rather than letting it displace',
    },
    {
      questionCategory: 'Why oedema appears suddenly',
      wrongInstinct: 'Small rises in capillary pressure produce proportionate swelling',
      rightAnswer: 'Nothing visible occurs until roughly 17 mmHg of safety factors is exhausted',
      why: 'The buffering is substantial, so oedema appears abruptly once it is overwhelmed',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which combination best accounts for the three safety factors opposing oedema formation?',
      options: [
        { id: 'a', text: 'Arteriolar constriction, venous dilation and capillary recruitment' },
        { id: 'b', text: 'Negative interstitial pressure, increased lymph flow and interstitial protein washdown' },
        { id: 'c', text: 'Albumin synthesis, sodium retention and ADH release' },
        { id: 'd', text: 'Myogenic tone, metabolic autoregulation and precapillary sphincter closure' },
      ],
      answerId: 'b',
      explanation: 'Roughly 3 mmHg comes from driving the normally negative interstitial pressure toward zero, 7 mmHg from a 10–50-fold rise in lymph flow, and 7 mmHg from washing interstitial protein away — about 17 mmHg in total.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A woman develops persistent arm swelling after axillary lymph node clearance. The swelling does not pit. Why?',
      options: [
        { id: 'a', text: 'Capillary hydrostatic pressure is normal' },
        { id: 'b', text: 'The interstitial fluid is protein-rich because lymphatic drainage is obstructed' },
        { id: 'c', text: 'Plasma oncotic pressure is elevated' },
        { id: 'd', text: 'Sodium retention has been prevented' },
      ],
      answerId: 'b',
      explanation: 'Lymphatics are the only route by which filtered protein returns to the circulation. Obstruction leaves a protein-rich interstitium which, with secondary fibrosis, resists displacement — hence non-pitting lymphoedema.',
      tests: 'exam',
    },
    {
      id: 'q3',
      stem: 'Which mechanism underlies intracellular rather than extracellular oedema?',
      options: [
        { id: 'a', text: 'Increased capillary hydrostatic pressure' },
        { id: 'b', text: 'Lymphatic obstruction' },
        { id: 'c', text: 'Failure of the Na⁺/K⁺-ATPase allowing sodium and water into the cell' },
        { id: 'd', text: 'Reduced plasma colloid osmotic pressure' },
      ],
      answerId: 'c',
      explanation: 'Intracellular oedema is a pump problem: depressed metabolism or ischaemia impairs the Na⁺/K⁺-ATPase, sodium accumulates intracellularly and water follows. The other options are Starling or drainage causes of extracellular oedema.',
      tests: 'mechanism',
    },
  ],
};

export default ghpOedemaSafetyFactors;
