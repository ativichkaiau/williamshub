import type { Lecture } from '../../lib/types';
import { GLOMERULAR_FILTRATION } from '../../lib/figures';

export const glomerularFiltrationGfr: Lecture = {
  id: 'glomerular-filtration-gfr',
  title: 'Glomerular Filtration & GFR',
  system: 'renal',
  source: 'L3 — Glomerular Filtration, Hemodynamics & Tubular Transport',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L3 Filtration & Transport' },
    { kind: 'mechanism', label: 'Starling forces' },
    { kind: 'investigation', label: 'Clearance' },
  ],

  highYield: [
    '**Glomerular filtration is bulk, protein-free ultrafiltration of plasma** across the three-layer barrier. **GFR ≈ 125 mL/min (~180 L/day)** — the entire plasma volume is filtered ~60 times a day, then >99% is reabsorbed. GFR is the single best index of overall kidney function.',
    '**Filtration is driven by Starling forces:** the **glomerular capillary hydrostatic pressure (P_GC ~60 mmHg, favours filtration)** is opposed by **Bowman\'s space hydrostatic pressure** and the **glomerular capillary oncotic pressure** (rising along the capillary as protein-free fluid leaves). Net filtration pressure ≈ 10 mmHg. **GFR = K_f × net filtration pressure**, where K_f is the barrier\'s permeability × surface area.',
    '**Arteriolar tone sets P_GC and therefore GFR:** constricting the **efferent** arteriole (angiotensin II) raises P_GC and **increases GFR**; constricting the **afferent** arteriole lowers P_GC and **decreases GFR**. This dual control lets the kidney defend GFR when perfusion falls — and explains why ACE inhibitors can drop GFR by dilating the efferent arteriole.',
    '**Filtration fraction = GFR / renal plasma flow ≈ 0.2** — about a fifth of the plasma entering the glomerulus is filtered. Changes in FF alter the peritubular oncotic pressure and hence proximal reabsorption.',
    '**Clearance measures GFR:** clearance = (U × V) / P. A substance that is **freely filtered but neither reabsorbed nor secreted** measures GFR exactly — **inulin** is the gold standard; **creatinine** is the practical clinical estimate (slightly overestimates GFR due to a little tubular secretion). **PAH**, which is filtered AND fully secreted, measures **renal plasma flow**.',
  ],

  mechanism: {
    title: 'Starling forces → GFR; arterioles tune it; clearance measures it',
    steps: [
      { id: 's1', label: 'Filtration barrier passes water/solutes, holds cells + protein', emphasis: 'key' },
      { id: 's2', label: 'P_GC (favours) vs P_Bowman + π_GC (oppose) → net ~10 mmHg', emphasis: 'key' },
      { id: 's3', label: 'GFR = K_f × net filtration pressure ≈ 125 mL/min', emphasis: 'key' },
      { id: 's4', label: 'Efferent constriction ↑GFR; afferent constriction ↓GFR' },
      { id: 's5', label: 'Clearance = U·V/P; inulin/creatinine ≈ GFR; PAH ≈ RPF' },
    ],
  },

  examFindings: [
    { sign: 'GFR ≈ 125 mL/min (~180 L/day)', mechanism: 'Bulk ultrafiltration across the barrier', significance: 'key' },
    { sign: 'Efferent arteriolar constriction raises GFR', mechanism: '↑P_GC (angiotensin II effect)', significance: 'key' },
    { sign: 'Rising creatinine = falling GFR', mechanism: 'Creatinine clearance approximates GFR', significance: 'key' },
    { sign: 'Filtration fraction ~0.2', mechanism: 'GFR/RPF — a fifth of plasma is filtered', significance: 'supportive' },
    { sign: 'Heavy proteinuria', mechanism: 'Barrier (charge/size) failure — not a normal filtrate', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The gold-standard marker for measuring GFR', meaning: 'Inulin (freely filtered, not reabsorbed or secreted)' },
    { clue: 'The practical clinical marker of GFR', meaning: 'Creatinine clearance (slightly overestimates GFR)' },
    { clue: 'The substance whose clearance ≈ renal plasma flow', meaning: 'PAH (filtered and fully secreted)' },
    { clue: 'The force that primarily drives filtration', meaning: 'Glomerular capillary hydrostatic pressure (P_GC)' },
  ],

  treatment: [
    { logic: 'Why GFR matters', detail: 'GFR is how renal function is staged (CKD) and how drug doses are adjusted. Arteriolar control links it to [[renal-hemodynamics-autoregulation]] and RAAS; the barrier is built in [[nephron-kidney-histology]]. What the filtrate becomes is handled in [[tubular-reabsorption-secretion]]. Falling GFR → retention of urea/creatinine and acid ([[renal-acid-excretion]]).' },
  ],

  mnemonics: [
    { hook: 'Efferent constriction = "Elevates" GFR; Afferent constriction = "Attenuates" it', expansion: ['Efferent (downstream) squeeze backs up pressure into the glomerulus', 'Afferent (upstream) squeeze starves it'] },
    { hook: 'Clearance markers: Inulin = GFR, PAH = plasma flow', expansion: ['Inulin: filtered only', 'Creatinine: filtered + a little secreted (clinical)', 'PAH: filtered + fully secreted → RPF'] },
  ],

  traps: [
    {
      questionCategory: 'Effect of efferent arteriolar constriction on GFR',
      wrongInstinct: 'Any arteriolar constriction reduces GFR',
      rightAnswer: 'Constricting the EFFERENT arteriole RAISES glomerular capillary pressure and INCREASES GFR (up to a point); only afferent constriction lowers GFR',
      why: 'The efferent arteriole is downstream of the glomerulus, so constricting it dams pressure back into the capillary tuft — the opposite effect of afferent constriction. This is exactly how angiotensin II preserves GFR in hypovolaemia.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which substance is filtered but neither reabsorbed nor secreted, making its clearance the gold standard for measuring GFR?',
      options: [
        { id: 'a', text: 'PAH (para-aminohippurate)' },
        { id: 'b', text: 'Glucose' },
        { id: 'c', text: 'Inulin' },
        { id: 'd', text: 'Sodium' },
      ],
      answerId: 'c',
      explanation: 'Inulin is freely filtered and neither reabsorbed nor secreted, so all filtered inulin appears in urine and its clearance equals GFR. PAH clearance measures renal plasma flow; glucose and sodium are heavily reabsorbed.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'Selective constriction of the efferent arteriole (as by angiotensin II) tends to:',
      options: [
        { id: 'a', text: 'Decrease GFR by lowering glomerular pressure' },
        { id: 'b', text: 'Increase GFR by raising glomerular capillary hydrostatic pressure' },
        { id: 'c', text: 'Have no effect on GFR' },
        { id: 'd', text: 'Abolish filtration entirely' },
      ],
      answerId: 'b',
      explanation: 'Constricting the downstream (efferent) arteriole raises pressure within the glomerular capillary (P_GC), increasing net filtration pressure and GFR — the mechanism by which angiotensin II defends GFR when renal perfusion falls.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Glomerular filtration & GFR', svg: GLOMERULAR_FILTRATION, caption: 'The barrier, the Starling forces driving filtration, and clearance markers (inulin/creatinine/PAH).' },
  ],
};

export default glomerularFiltrationGfr;
