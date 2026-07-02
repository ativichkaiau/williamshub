import type { Lecture } from '../../lib/types';
import { TUBULAR_TRANSPORT } from '../../lib/figures';

export const tubularReabsorptionSecretion: Lecture = {
  id: 'tubular-reabsorption-secretion',
  title: 'Tubular Reabsorption & Secretion',
  system: 'renal',
  source: 'L3 — Glomerular Filtration, Hemodynamics & Tubular Transport',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L3 Filtration & Transport' },
    { kind: 'mechanism', label: 'Na+/K+-ATPase' },
    { kind: 'exam', label: 'Transport maximum' },
  ],

  highYield: [
    '**After filtration, the tubule reclaims what the body needs and secretes what it must dump.** Of ~180 L filtered/day, >99% of water and virtually all glucose, amino acids and bicarbonate are reabsorbed; the final urine (~1.5 L) is what remains. Reabsorption = lumen → blood; secretion = blood → lumen.',
    '**Almost all reabsorption is powered by the basolateral Na⁺/K⁺-ATPase.** It pumps Na⁺ out of the cell into blood, keeping intracellular Na⁺ low; this Na⁺ gradient then drives apical uptake of Na⁺ (and, coupled to it, glucose, amino acids, phosphate, H⁺) via **secondary active transport** — symporters (SGLT: Na⁺+glucose) and antiporters (Na⁺/H⁺ exchanger).',
    '**The PCT reabsorbs the bulk — ~65% of filtered Na⁺ and water, and essentially 100% of glucose and amino acids** — isosmotically (water follows solute). It also reabsorbs ~85% of bicarbonate and secretes organic acids/bases (including drugs and PAH). The loop, DCT and collecting duct then fine-tune the rest under hormonal control.',
    '**Carrier-mediated transport is saturable — the transport maximum (Tm).** For glucose, SGLT2 in the PCT reabsorbs all filtered glucose until plasma glucose exceeds the **renal threshold (~180–200 mg/dL)**; above that the filtered load exceeds Tm and glucose spills into the urine = **glucosuria**. This is why uncontrolled diabetes causes glucosuria and osmotic diuresis (and why SGLT2 inhibitors deliberately lower the threshold).',
    '**Transport modes to know:** primary active (Na⁺/K⁺-ATPase, H⁺-ATPase), secondary active (sym/antiport), facilitated diffusion (GLUT — saturable, no ATP), simple diffusion, **paracellular** movement (between cells, e.g. much Ca²⁺/Mg²⁺), and **osmosis** (water following reabsorbed solute, via aquaporins). Reabsorption can be transcellular or paracellular.',
  ],

  mechanism: {
    title: 'Na⁺/K⁺-ATPase powers Na⁺-coupled reabsorption; carriers saturate (Tm)',
    steps: [
      { id: 's1', label: 'Basolateral Na⁺/K⁺-ATPase keeps cell Na⁺ low (the master pump)', emphasis: 'key' },
      { id: 's2', label: 'Low cell Na⁺ drives apical Na⁺-coupled uptake (SGLT, Na⁺/H⁺)', emphasis: 'key' },
      { id: 's3', label: 'PCT reabsorbs ~65% Na⁺/water, ~100% glucose/AA, ~85% HCO₃⁻' },
      { id: 's4', label: 'Carriers saturate at Tm; above renal threshold → glucosuria', emphasis: 'key' },
      { id: 's5', label: 'Loop/DCT/collecting duct fine-tune under hormones (ADH, aldosterone)' },
    ],
  },

  examFindings: [
    { sign: 'Glucosuria once plasma glucose > ~180–200 mg/dL', mechanism: 'Filtered glucose load exceeds SGLT2 Tm (renal threshold)', significance: 'key' },
    { sign: 'PCT reabsorbs ~65% of filtered Na⁺ and water', mechanism: 'Isosmotic bulk reabsorption', significance: 'key' },
    { sign: 'Ouabain (Na⁺/K⁺-ATPase block) halts most reabsorption', mechanism: 'The pump powers Na⁺-coupled transport', significance: 'supportive' },
    { sign: 'Aminoaciduria / phosphaturia in generalised PCT dysfunction', mechanism: 'Fanconi syndrome — proximal carriers fail', significance: 'supportive' },
    { sign: 'Osmotic diuresis in hyperglycaemia', mechanism: 'Unreabsorbed glucose holds water in the lumen', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The pump that powers nearly all tubular reabsorption', meaning: 'Basolateral Na⁺/K⁺-ATPase' },
    { clue: 'The plasma glucose above which glucosuria appears', meaning: 'The renal threshold (~180–200 mg/dL)' },
    { clue: 'The property that makes reabsorption saturable', meaning: 'The transport maximum (Tm) of carriers' },
    { clue: 'The nephron segment that reabsorbs the bulk of the filtrate', meaning: 'The proximal convoluted tubule (PCT)' },
  ],

  treatment: [
    { logic: 'Why transport matters', detail: 'Na⁺-coupled transport is the target of most diuretics (loop → NKCC2 in [[urine-concentration-countercurrent]]; thiazide → DCT; K⁺-sparing → collecting duct in [[renal-potassium-handling]]). Glucose Tm underlies diabetic glucosuria and SGLT2 inhibitors. Proximal HCO₃⁻ reabsorption is in [[renal-bicarbonate-reabsorption]]; the filtered load comes from [[glomerular-filtration-gfr]].' },
  ],

  mnemonics: [
    { hook: 'The Na⁺/K⁺-ATPase is the "battery" — everything else runs off its gradient', expansion: ['Primary active pump on the basolateral side', 'Creates the Na⁺ gradient for secondary active transport'] },
    { hook: 'Tm = a "full car park": once carriers are full, extra solute is excreted', expansion: ['Glucose > renal threshold → glucosuria', 'Explains diabetic glucosuria + osmotic diuresis'] },
  ],

  traps: [
    {
      questionCategory: 'Why glucosuria occurs in diabetes',
      wrongInstinct: 'The diabetic kidney is damaged and leaks glucose',
      rightAnswer: 'Glucosuria occurs because the filtered glucose load exceeds the transport maximum (Tm) of the normal SGLT2 carriers once plasma glucose passes the renal threshold — the tubule is working normally but saturated',
      why: 'It is a saturation phenomenon of healthy transporters, not a structural leak; the same principle (Tm) governs every carrier-mediated reabsorptive process.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Reabsorption of glucose, amino acids and phosphate in the proximal tubule is ultimately powered by:',
      options: [
        { id: 'a', text: 'ATP hydrolysis by apical glucose carriers' },
        { id: 'b', text: 'The sodium gradient created by the basolateral Na⁺/K⁺-ATPase' },
        { id: 'c', text: 'Simple diffusion down concentration gradients' },
        { id: 'd', text: 'Aquaporin water channels' },
      ],
      answerId: 'b',
      explanation: 'The Na⁺/K⁺-ATPase keeps intracellular Na⁺ low; the inward Na⁺ gradient then drives secondary active cotransport of glucose (SGLT), amino acids and phosphate across the apical membrane. Blocking the pump halts these processes.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Glucose begins to appear in the urine once plasma glucose exceeds the renal threshold because:',
      options: [
        { id: 'a', text: 'GFR increases dramatically' },
        { id: 'b', text: 'The filtered load of glucose exceeds the tubular transport maximum (Tm)' },
        { id: 'c', text: 'Glucose becomes too large to be filtered' },
        { id: 'd', text: 'Aldosterone secretion rises' },
      ],
      answerId: 'b',
      explanation: 'SGLT2 carriers reabsorb all filtered glucose until they saturate at Tm; once the filtered load (plasma glucose × GFR) exceeds Tm, the excess is excreted as glucosuria.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Tubular transport & the transport maximum', svg: TUBULAR_TRANSPORT, caption: 'Na⁺/K⁺-ATPase–powered reabsorption, transport types, and the Tm/threshold underlying glucosuria.' },
  ],
};

export default tubularReabsorptionSecretion;
