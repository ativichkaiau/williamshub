import type { Lecture } from '../../lib/types';
import { GLOMERULAR_FILTRATION } from '../../lib/figures';

export const renalClearancePrinciples: Lecture = {
  id: 'renal-clearance-principles',
  title: 'Renal Clearance & Measuring Kidney Function',
  system: 'renal',
  source: 'L3 — Glomerular Filtration, Hemodynamics & Tubular Transport',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L3 Filtration & Transport' },
    { kind: 'investigation', label: 'Clearance' },
    { kind: 'mechanism', label: 'GFR & RPF' },
  ],

  highYield: [
    '**Renal clearance is the volume of plasma completely cleared of a substance per unit time: Clearance = (U × V) / P**, where U = urine concentration, V = urine flow rate, and P = plasma concentration. It is the unifying tool for measuring GFR, renal plasma flow, and how the tubule handles any solute.',
    '**A substance that is freely filtered but NEITHER reabsorbed nor secreted has a clearance equal to GFR — the gold standard is INULIN.** In practice, **CREATININE clearance estimates GFR** (endogenous, convenient) but slightly OVERESTIMATES it because a small amount is secreted. GFR ≈ 125 mL/min (~180 L/day).',
    '**PAH (para-aminohippurate) is filtered AND almost completely secreted, so at low doses essentially all PAH entering the kidney is cleared — its clearance measures RENAL PLASMA FLOW (RPF ≈ 600 mL/min).** From RPF you get renal blood flow (RBF = RPF / (1 − haematocrit)) and the filtration fraction.',
    '**Filtration fraction = GFR / RPF ≈ 0.2** — about a fifth of the plasma entering the glomerulus is filtered. Comparing a solute\'s clearance with inulin\'s (GFR) reveals net handling: **clearance < GFR → net reabsorption; clearance > GFR → net secretion; clearance = 0 → fully reabsorbed (e.g. glucose normally).**',
    '**Clinically, GFR is estimated from serum creatinine with equations (eGFR: CKD-EPI/Cockcroft–Gault) and is the basis of CKD staging and drug dosing.** Because creatinine rises only after substantial GFR loss (the creatinine–GFR curve is hyperbolic), a "normal" creatinine can hide early kidney disease — clearance concepts explain why.',
  ],

  mechanism: {
    title: 'Clearance = U·V/P; inulin=GFR, creatinine≈GFR, PAH=RPF; compare to infer handling',
    steps: [
      { id: 's1', label: 'Clearance = (U × V) / P (volume of plasma cleared per minute)', emphasis: 'key' },
      { id: 's2', label: 'Inulin clearance = GFR (filtered only); creatinine ≈ GFR (slight overestimate)', emphasis: 'key' },
      { id: 's3', label: 'PAH clearance = renal plasma flow (filtered + fully secreted)', emphasis: 'key' },
      { id: 's4', label: 'Filtration fraction = GFR/RPF ≈ 0.2' },
      { id: 's5', label: 'Clearance < GFR = reabsorbed; > GFR = secreted; eGFR stages CKD', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'A solute clearance equal to inulin clearance', mechanism: 'Freely filtered, not reabsorbed or secreted (= GFR)', significance: 'key' },
    { sign: 'Creatinine clearance slightly exceeds true GFR', mechanism: 'Small tubular secretion of creatinine', significance: 'key' },
    { sign: 'PAH clearance approximating 600 mL/min', mechanism: 'Renal plasma flow (filtered + secreted)', significance: 'key' },
    { sign: 'Glucose clearance of zero at normal plasma levels', mechanism: 'Complete reabsorption (below Tm)', significance: 'supportive' },
    { sign: 'Normal creatinine despite early kidney disease', mechanism: 'Hyperbolic creatinine–GFR relationship', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The clearance formula', meaning: 'Clearance = (U × V) / P' },
    { clue: 'The marker whose clearance equals renal plasma flow', meaning: 'PAH (para-aminohippurate)' },
    { clue: 'What a clearance greater than GFR implies', meaning: 'Net tubular secretion of the substance' },
    { clue: 'The clinical estimate of GFR from a blood test', meaning: 'eGFR from serum creatinine (CKD-EPI/Cockcroft–Gault)' },
  ],

  treatment: [
    { logic: 'Why clearance matters', detail: 'Clearance quantifies the GFR whose mechanism is in [[glomerular-filtration-gfr]] and the plasma flow set by [[renal-hemodynamics-autoregulation]]. eGFR stages chronic kidney disease ([[chronic-kidney-disease-uremia]]) and adjusts drug doses; comparing clearances reveals the reabsorption/secretion of [[tubular-reabsorption-secretion]]. A falling clearance signals acute kidney injury ([[acute-kidney-injury-azotemia]]).' },
  ],

  mnemonics: [
    { hook: 'Clearance markers: "Inulin = GFR, PAH = Plasma flow, Creatinine = clinical GFR"', expansion: ['Creatinine slightly overestimates (secreted)', 'FF = GFR/RPF ≈ 0.2'] },
    { hook: 'Compare to GFR: "less = reabsorbed, more = secreted, zero = fully reabsorbed"', expansion: ['Glucose clearance ~0 normally', 'PAH ≈ full clearance'] },
  ],

  traps: [
    {
      questionCategory: 'Interpreting a normal serum creatinine',
      wrongInstinct: 'A serum creatinine in the normal range means kidney function is normal',
      rightAnswer: 'Because the creatinine–GFR relationship is hyperbolic, creatinine stays near-normal until GFR has already fallen substantially — a "normal" creatinine can mask significant early loss of function, which is why eGFR/clearance is used',
      why: 'Small early drops in GFR barely move creatinine; relying on the raw value misses early kidney disease, whereas an estimated clearance (eGFR) reveals it.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The clearance of which substance is used to estimate renal plasma flow because it is both filtered and almost completely secreted?',
      options: [
        { id: 'a', text: 'Inulin' },
        { id: 'b', text: 'Creatinine' },
        { id: 'c', text: 'PAH (para-aminohippurate)' },
        { id: 'd', text: 'Glucose' },
      ],
      answerId: 'c',
      explanation: 'PAH is filtered and nearly completely secreted, so at low plasma concentrations essentially all PAH delivered to the kidney is cleared; its clearance therefore approximates renal plasma flow (~600 mL/min).',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'If a freely filtered substance has a renal clearance lower than the GFR (inulin clearance), the tubule must be:',
      options: [
        { id: 'a', text: 'Secreting it' },
        { id: 'b', text: 'Net reabsorbing it' },
        { id: 'c', text: 'Neither reabsorbing nor secreting it' },
        { id: 'd', text: 'Destroying it' },
      ],
      answerId: 'b',
      explanation: 'A clearance below GFR means less of the substance appears in the urine than was filtered, so the tubule must be reabsorbing it. A clearance above GFR indicates net secretion.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Filtration, clearance & GFR', svg: GLOMERULAR_FILTRATION, caption: 'The clearance markers (inulin/creatinine = GFR, PAH = RPF) and the filtration forces behind them.' },
  ],
};

export default renalClearancePrinciples;
