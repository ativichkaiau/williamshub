import type { Lecture } from '../../lib/types';

export const ghpNephronFiltrationBarrier: Lecture = {
  id: 'ghp-nephron-filtration-barrier',
  title: 'The Nephron & the Filtration Barrier',
  system: 'renal',
  source: 'Ch 26 — Urine Formation I — Glomerular Filtration & Renal Blood Flow',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'Ch 26 Filtration & Renal Blood Flow' },
    { kind: 'mechanism', label: 'Size and charge selectivity' },
    { kind: 'exam', label: 'Proteinuria' },
  ],

  highYield: [
    '**Urine formation is three processes, and the arithmetic is worth stating once: excretion = filtration − reabsorption + secretion.** Each substance has its own balance. Roughly **180 L/day** is filtered and **~1.5 L** excreted, so about **99%** of the filtrate is reclaimed. The kidney works by filtering almost everything and then selectively taking back what it wants — wasteful-looking, but it allows rapid, fine control.',
    '**There are two nephron populations and they do different jobs.** **Cortical** nephrons (~85%) have short loops and peritubular capillaries. **Juxtamedullary** nephrons (~15%) have long loops reaching deep into the medulla and are supplied by the **vasa recta** — they are the ones that make concentrated urine.',
    '**The filtration barrier has three layers and rejects on both size and charge.** **Fenestrated endothelium** (blocks cells), **glomerular basement membrane** (the main size barrier, rich in negatively charged **heparan sulfate**), and **podocyte foot processes** with their **filtration slits** bridged by **nephrin**. Molecules under ~**7 kDa** pass freely; **albumin at 69 kDa and negatively charged** is almost entirely excluded.',
    '**Charge selectivity explains why albuminuria appears before the barrier is structurally destroyed.** Loss of the fixed negative charge alone — as in **minimal change disease**, where podocyte foot processes efface — allows albumin through with a normal-looking basement membrane on light microscopy. Structural damage as in [[glomerular-disease-overview]] adds size-selectivity failure and lets larger proteins and cells through.',
    '**Renal blood flow is enormous and disproportionate to the kidney’s metabolic need.** The kidneys take about **22% of cardiac output** (~1100 mL/min) for 0.4% of body weight. That flow exists to **filter**, not to feed the tissue — which is why renal oxygen consumption tracks **sodium reabsorption** rather than blood flow. The **medulla** nonetheless runs hypoxic, because vasa recta flow is deliberately low to preserve the osmotic gradient, and that is why the **thick ascending limb** is the classic site of ischaemic injury.',
    '**Two capillary beds in series, separated by the efferent arteriole, is the anatomical key to everything.** The **glomerular** bed is high-pressure (~60 mmHg) and favours **filtration**; the **peritubular** bed is low-pressure (~13 mmHg) and favours **reabsorption**. Because the efferent arteriole sits between them, changing its tone moves the two pressures in **opposite directions** — the fact that makes [[ghp-gfr-determinants-filtration-fraction]] work.',
  ],

  mechanism: {
    title: 'Filter first, reclaim second',
    steps: [
      { id: 's1', label: 'Afferent arteriole delivers blood to a high-pressure glomerular bed', emphasis: 'key' },
      { id: 's2', label: 'Fenestrated endothelium excludes cells' },
      { id: 's3', label: 'Basement membrane rejects by size and by negative charge', emphasis: 'key' },
      { id: 's4', label: 'Podocyte slit diaphragms provide the final selectivity' },
      { id: 's5', label: '~180 L/day of protein-free filtrate enters Bowman space' },
      { id: 's6', label: 'Efferent arteriole leads to a low-pressure peritubular bed built for reabsorption', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Heavy selective albuminuria with normal light microscopy', mechanism: 'Loss of barrier negative charge with foot-process effacement', significance: 'key' },
    { sign: 'Red cell casts in the urine', mechanism: 'Structural disruption of the barrier allowing cells into the tubule', significance: 'key' },
    { sign: 'Medullary injury predominating in ischaemia', mechanism: 'Low vasa recta flow leaves the thick ascending limb chronically hypoxic', significance: 'key' },
    { sign: 'Renal oxygen consumption falling when filtration ceases', mechanism: 'Oxygen use is driven by tubular sodium reabsorption, not by flow itself', significance: 'supportive' },
    { sign: 'Frothy urine with peripheral oedema', mechanism: 'Nephrotic-range protein loss lowering plasma oncotic pressure', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Urine dipstick positive for albumin but negative for globulins', meaning: 'Charge-selective barrier failure — selective proteinuria' },
    { clue: 'Effaced podocyte foot processes on electron microscopy only', meaning: 'Minimal change disease' },
    { clue: 'Renal blood flow ~1100 mL/min on measurement', meaning: 'Normal — about 22% of cardiac output' },
    { clue: 'Filtered load calculated as GFR × plasma concentration', meaning: 'The starting quantity against which reabsorption and secretion are judged' },
    { clue: 'Long loops of Henle with vasa recta on histology', meaning: 'Juxtamedullary nephrons, responsible for urine concentration' },
  ],

  treatment: [
    {
      logic: 'Protect the barrier by lowering the pressure across it',
      detail: 'Reducing **intraglomerular** pressure — chiefly by dilating the **efferent** arteriole — lowers protein filtration and slows progression, which is why proteinuria falls when angiotensin II action is blocked, as set out in [[ghp-renin-angiotensin-hypertension]].',
    },
    {
      logic: 'Treat the medulla as the vulnerable zone in hypoperfusion',
      detail: 'The outer medulla operates near its oxygen limit by design. Anything reducing perfusion or raising **reabsorptive workload** tips the thick ascending limb into injury — the mechanism behind ischaemic [[acute-kidney-injury]].',
    },
  ],

  mnemonics: [
    { hook: 'Three layers, two filters: size and charge', expansion: ['Endothelium blocks cells', 'Basement membrane: size + negative charge', 'Podocyte slits: final sieve'] },
    { hook: 'High pressure filters, low pressure reabsorbs', expansion: ['Glomerular ~60 mmHg → filtration', 'Peritubular ~13 mmHg → reabsorption', 'Efferent arteriole sits between them'] },
  ],

  traps: [
    {
      questionCategory: 'Why renal blood flow is so high',
      wrongInstinct: 'The kidney needs that much flow because it is metabolically demanding',
      rightAnswer: 'The flow exists to permit filtration; oxygen use follows sodium reabsorption',
      why: 'Renal arteriovenous oxygen difference is small despite the huge flow',
    },
    {
      questionCategory: 'Albuminuria with normal microscopy',
      wrongInstinct: 'Significant proteinuria requires visible structural damage',
      rightAnswer: 'Loss of fixed negative charge alone permits albuminuria',
      why: 'The barrier is charge-selective as well as size-selective',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A child has heavy proteinuria that is almost exclusively albumin, with normal light microscopy and effaced foot processes on electron microscopy. What is the barrier defect?',
      options: [
        { id: 'a', text: 'Loss of size selectivity from basement membrane rupture' },
        { id: 'b', text: 'Loss of the barrier’s fixed negative charge' },
        { id: 'c', text: 'Fenestral occlusion of the endothelium' },
        { id: 'd', text: 'Increased glomerular capillary pressure alone' },
      ],
      answerId: 'b',
      explanation: 'Albumin is small enough to approach the size cutoff but is strongly negatively charged, so it is normally repelled. Loss of charge selectivity with foot-process effacement gives selective albuminuria despite a structurally intact-looking membrane.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which feature of renal vascular anatomy allows filtration and reabsorption to be regulated somewhat independently?',
      options: [
        { id: 'a', text: 'Two capillary beds in series separated by the efferent arteriole' },
        { id: 'b', text: 'Direct arteriovenous shunts in the cortex' },
        { id: 'c', text: 'Absence of smooth muscle in the afferent arteriole' },
        { id: 'd', text: 'Lymphatic drainage of the glomerulus' },
      ],
      answerId: 'a',
      explanation: 'The efferent arteriole lies between a high-pressure glomerular bed and a low-pressure peritubular bed, so altering its tone raises one pressure while lowering the other — allowing filtration and reabsorption to be adjusted in opposite directions.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'Why is the thick ascending limb particularly vulnerable to ischaemic injury?',
      options: [
        { id: 'a', text: 'It has no blood supply at all' },
        { id: 'b', text: 'It sits in a medulla kept deliberately hypoxic by low vasa recta flow while performing heavy active transport' },
        { id: 'c', text: 'It is the site of glomerular filtration' },
        { id: 'd', text: 'It lacks mitochondria' },
      ],
      answerId: 'b',
      explanation: 'Vasa recta flow is kept low to preserve the medullary osmotic gradient, so the outer medulla runs near its oxygen limit. The thick ascending limb has a high active-transport workload in that setting, leaving little reserve.',
      tests: 'mechanism',
    },
  ],
};

export default ghpNephronFiltrationBarrier;
