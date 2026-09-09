import type { Lecture } from '../../lib/types';

export const ghpProximalTubuleReabsorption: Lecture = {
  id: 'ghp-proximal-tubule-reabsorption',
  title: 'Proximal Tubular Reabsorption & Transport Maximum',
  system: 'renal',
  source: 'Ch 27 — Urine Formation II — Tubular Processing of the Filtrate',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'Ch 27 Tubular Processing' },
    { kind: 'mechanism', label: 'Na⁺-coupled secondary transport' },
    { kind: 'exam', label: 'Glucose threshold · Tm' },
  ],

  highYield: [
    '**The proximal tubule reclaims about 65% of the filtered sodium and water and essentially all of the nutrients, and every bit of it is powered by one pump.** The **basolateral Na⁺/K⁺-ATPase** keeps intracellular sodium low; that gradient then drives every apical **secondary active** transporter. Block the pump and the whole proximal apparatus stops — which is why this segment is so oxygen-hungry and so vulnerable to ischaemia.',
    '**Glucose and amino acids are reabsorbed with sodium and are normally completely reclaimed.** **SGLT2** in the early proximal tubule handles the bulk, **SGLT1** the remainder, with **GLUT** carriers moving glucose out basolaterally. Because the carriers are saturable, glucose appears in urine only once the **transport maximum** is exceeded.',
    '**Threshold and Tm are different numbers, and splay is why.** Filtered glucose load = **GFR × plasma glucose**. Glycosuria begins at a plasma glucose of roughly **180 mg/dL** (the **threshold**), while the true **Tm** is about **375 mg/min** — the gap exists because individual nephrons saturate at slightly different points (**splay**). Note the threshold depends on GFR, so a pregnant woman with a raised GFR can spill glucose at a normal plasma level.',
    '**Water follows solute passively, so the proximal fluid stays isosmotic.** The proximal tubule is highly water-permeable via **aquaporin-1**, so reabsorbing solute inevitably drags water with it. Tubular fluid therefore leaves the proximal tubule at essentially **plasma osmolarity (~300)** — volume has fallen by two-thirds but concentration has not changed. This is the crucial contrast with the diluting segments downstream.',
    '**Different solutes are handled at different rates, and the TF/P ratio shows it.** Substances reabsorbed **faster** than water (glucose, amino acids, bicarbonate) have a falling **TF/P**; those reabsorbed **more slowly** than water (creatinine, inulin, urea) have a **rising** TF/P. Inulin’s TF/P rises purely because water left — which is exactly why it measures water reabsorption along the nephron.',
    '**The proximal tubule also secretes, and that is how the kidney clears drugs and toxins.** Separate **organic anion** and **organic cation** transporters secrete substances such as **PAH**, urate, penicillins and diuretics into the lumen. Because loop and thiazide diuretics act from the **luminal** side, they must first be secreted — so secretion failure is one reason [[loop-thiazide-diuretics]] lose potency in renal impairment.',
  ],

  mechanism: {
    title: 'One pump, borrowed by everything',
    steps: [
      { id: 's1', label: 'Basolateral Na⁺/K⁺-ATPase pumps Na⁺ out, keeping cell Na⁺ low', emphasis: 'key' },
      { id: 's2', label: 'Steep apical Na⁺ gradient drives entry of glucose, amino acids, phosphate', emphasis: 'key' },
      { id: 's3', label: 'Na⁺/H⁺ exchange couples sodium uptake to bicarbonate reclamation' },
      { id: 's4', label: 'Solute reabsorption lowers luminal osmolarity fractionally' },
      { id: 's5', label: 'Water follows through aquaporin-1 → fluid remains isosmotic', emphasis: 'key' },
      { id: 's6', label: 'Carriers saturate above Tm → excess solute stays in the urine' },
    ],
  },

  examFindings: [
    { sign: 'Glycosuria once plasma glucose exceeds about 180 mg/dL', mechanism: 'Filtered load surpasses the SGLT transport maximum', significance: 'key' },
    { sign: 'Glycosuria at normal plasma glucose in pregnancy', mechanism: 'Raised GFR increases filtered load at any given concentration', significance: 'key' },
    { sign: 'Generalised aminoaciduria, phosphaturia, glycosuria and acidosis together', mechanism: 'Global proximal transport failure — Fanconi syndrome', significance: 'key' },
    { sign: 'Proximal tubular cells first to necrose in ischaemia', mechanism: 'Highest transport workload and therefore highest oxygen demand', significance: 'key' },
    { sign: 'Isosmotic fluid at the end of the proximal tubule', mechanism: 'Water permeability allows water to follow solute completely', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Rising inulin TF/P ratio along the proximal tubule', meaning: 'Water has been reabsorbed; inulin itself is not transported' },
    { clue: 'Falling glucose TF/P ratio', meaning: 'Glucose reabsorbed faster than water' },
    { clue: 'Osmolarity ~300 mOsm/L at the end of the proximal tubule', meaning: 'Isosmotic reabsorption — volume reduced, concentration unchanged' },
    { clue: 'PAH clearance approximating renal plasma flow', meaning: 'PAH is both filtered and actively secreted, so it is nearly completely cleared' },
    { clue: 'Glycosuria with normal plasma glucose and normal GFR', meaning: 'A primary proximal transport defect rather than hyperglycaemia' },
  ],

  treatment: [
    {
      logic: 'Exploit the transport maximum therapeutically',
      detail: 'Blocking **SGLT2** lowers the effective threshold so glucose is deliberately spilled, taking sodium and water with it. The osmotic diuresis and sodium loss also lower distal delivery signals, which is part of why these agents affect volume as well as glycaemia.',
    },
    {
      logic: 'Remember that luminally-acting diuretics must first be secreted',
      detail: 'Loop and thiazide agents reach their targets through **proximal organic anion secretion**. Competition for that transporter, or reduced secretory capacity, raises the dose needed — the pharmacology behind resistance in [[diuretics-pharmacology]].',
    },
  ],

  mnemonics: [
    { hook: 'Everything borrows the sodium gradient', expansion: ['One primary pump: basolateral Na⁺/K⁺-ATPase', 'All apical uptake is secondary active', 'Stop the pump and proximal transport stops'] },
    { hook: 'Threshold before Tm, because of splay', expansion: ['Threshold ~180 mg/dL — first spill', 'Tm ~375 mg/min — full saturation', 'Splay: nephrons saturate at different points'] },
  ],

  traps: [
    {
      questionCategory: 'What isosmotic reabsorption means',
      wrongInstinct: 'The proximal tubule concentrates the tubular fluid because it reabsorbs so much',
      rightAnswer: 'It reduces volume by about two-thirds while leaving osmolarity unchanged',
      why: 'Water permeability lets water follow solute exactly, so concentration cannot change',
    },
    {
      questionCategory: 'When glycosuria means diabetes',
      wrongInstinct: 'Glucose in the urine always indicates hyperglycaemia',
      rightAnswer: 'A raised GFR or a proximal transport defect can cause glycosuria at normal plasma glucose',
      why: 'Spillage depends on filtered load and carrier capacity, not on plasma concentration alone',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A pregnant woman with a normal plasma glucose has persistent glycosuria. What is the most likely explanation?',
      options: [
        { id: 'a', text: 'Undiagnosed type 1 diabetes' },
        { id: 'b', text: 'Increased GFR raising the filtered glucose load above the transport maximum' },
        { id: 'c', text: 'Reduced renal plasma flow' },
        { id: 'd', text: 'Increased ADH secretion' },
      ],
      answerId: 'b',
      explanation: 'Filtered load is GFR × plasma concentration. Pregnancy raises GFR substantially, so the filtered glucose load can exceed reabsorptive capacity even though plasma glucose is normal.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'The TF/P ratio for inulin rises steadily along the proximal tubule. What does this indicate?',
      options: [
        { id: 'a', text: 'Inulin is being secreted into the tubule' },
        { id: 'b', text: 'Inulin is being reabsorbed more slowly than water' },
        { id: 'c', text: 'Water has been reabsorbed while inulin remained in the lumen' },
        { id: 'd', text: 'Inulin is being metabolised by tubular cells' },
      ],
      answerId: 'c',
      explanation: 'Inulin is neither reabsorbed nor secreted, so its concentration rises purely because water has left the lumen. That is exactly why its TF/P ratio is used as a measure of fractional water reabsorption.',
      tests: 'investigation',
    },
    {
      id: 'q3',
      stem: 'Why is the proximal tubule the segment most susceptible to ischaemic injury?',
      options: [
        { id: 'a', text: 'It has the lowest blood supply of any nephron segment' },
        { id: 'b', text: 'It performs the greatest amount of active transport and so has the highest oxygen demand' },
        { id: 'c', text: 'It lacks a basement membrane' },
        { id: 'd', text: 'It is not perfused by peritubular capillaries' },
      ],
      answerId: 'b',
      explanation: 'Reclaiming about two-thirds of the filtrate plus all filtered nutrients requires enormous Na⁺/K⁺-ATPase activity. That transport workload, not a deficiency of blood supply, makes the segment the first to fail when oxygen delivery falls.',
      tests: 'mechanism',
    },
  ],
};

export default ghpProximalTubuleReabsorption;
