import type { Lecture } from '../../lib/types';

export const dkaHhsManagement: Lecture = {
  id: 'dka-hhs-management',
  title: 'DKA & HHS: Fluids, Insulin & Potassium',
  system: 'endocrine',
  source: 'L11 — DKA & Thyroid Storm',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'L11 Endocrine Emergencies' },
    { kind: 'treatment', label: 'IV fluid / insulin / potassium' },
    { kind: 'mechanism', label: 'Reverse volume and insulin deficits' },
    { kind: 'exam', label: 'Hold insulin if K <3.5' },
  ],

  highYield: [
    'Core therapy is **IV crystalloid + insulin + potassium-directed electrolyte management**, while identifying and treating the precipitating cause. Fluids restore perfusion, improve renal glucose/ketone clearance, lower counterregulatory hormones, and can reduce glucose by 50-70 mg/dL before insulin.',
    'Start insulin after initial assessment/resuscitation, but **hold insulin if K <3.5 mmol/L** and replace potassium first. Insulin and correction of acidosis drive K into cells and can precipitate fatal hypokalemia despite a normal/high presenting K.',
    'When K is **3.5-5.0**, add roughly **10-20 mmol K per liter** of IV fluid and target K 4-5. When K is >5, start insulin without replacement initially and recheck frequently after confirming adequate renal function/urine output.',
    'The lecture protocol uses IV regular insulin around **0.1 U/kg/h for moderate-severe DKA** and **0.05 U/kg/h for HHS** (higher if mixed DKA/HHS). Mild DKA may be treated with frequent subcutaneous rapid-acting analog under an appropriate protocol.',
    'When glucose reaches **<250 mg/dL**, add 5-10% dextrose so insulin can continue until ketonemia/acidosis resolves (DKA) or osmolality safely normalizes (HHS). **Routine bicarbonate is not recommended; consider it only for severe acidosis, pH <7.0.**',
  ],

  mechanism: {
    title: 'Restore circulation, stop ketogenesis, prevent treatment-induced hypokalemia',
    steps: [
      { id: 's1', label: 'IV crystalloid -> perfusion + renal glucose/ketone clearance', emphasis: 'key' },
      { id: 's2', label: 'Check K: if <3.5, replace K and delay insulin', emphasis: 'danger' },
      { id: 's3', label: 'Insulin -> glucose uptake + stop lipolysis/ketogenesis' },
      { id: 's4', label: 'Add dextrose below 250 -> continue insulin to true resolution' },
    ],
  },

  examFindings: [
    { sign: 'Falling glucose but persistent BHB/acidosis', mechanism: 'Glycemia corrects before DKA resolves; insulin must continue with dextrose', significance: 'key' },
    { sign: 'Weakness or arrhythmia after insulin starts', mechanism: 'Rapid intracellular K shift causing treatment-induced hypokalemia', significance: 'key' },
    { sign: 'Pulmonary congestion during resuscitation', mechanism: 'Fluid strategy must be reduced/monitored in cardiac compromise', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Capillary glucose every 1-2 hours', meaning: 'Guide insulin and dextrose transition' },
    { clue: 'Electrolytes, creatinine, BHB, and venous pH about every 4 hours in DKA', meaning: 'Track metabolic resolution and safety' },
    { clue: 'Electrolytes, creatinine, and serum osmolality about every 4 hours in HHS', meaning: 'Avoid overly rapid osmotic change and confirm resolution' },
  ],

  treatment: [
    { logic: 'Fluid first; insulin after potassium safety check', detail: 'This order restores circulation and prevents lethal K shifts.' },
    { logic: 'Add dextrose when glucose is <250, not when DKA is finished', detail: 'Dextrose permits ongoing insulin-mediated ketone clearance.' },
    { logic: 'Treat the trigger and monitor to biochemical resolution', detail: 'Do not stop at symptom improvement or a normal glucose.' },
  ],

  mnemonics: [
    { hook: 'K under 3.5? Keep insulin on hold', expansion: ['Replace potassium first'] },
    { hook: 'Sugar clears before ketones - add dextrose, keep insulin', expansion: ['Treat DKA to BHB/pH resolution'] },
  ],

  traps: [
    {
      questionCategory: 'Starting insulin in DKA with hypokalemia',
      wrongInstinct: 'Insulin is always the first infusion because it reverses DKA',
      rightAnswer: 'If K is <3.5 mmol/L, replace potassium and delay insulin until K is safely above 3.5',
      why: 'Insulin can abruptly shift potassium into cells and cause fatal arrhythmia or respiratory-muscle weakness.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with DKA has serum potassium 3.1 mmol/L. What is the next treatment priority?',
      options: [
        { id: 'a', text: 'Replace potassium and delay insulin' },
        { id: 'b', text: 'Start insulin immediately without potassium' },
        { id: 'c', text: 'Give routine bicarbonate regardless of pH' },
        { id: 'd', text: 'Stop IV fluid' },
      ],
      answerId: 'a',
      explanation: 'With K <3.5 mmol/L, potassium must be replaced before insulin because insulin will shift K intracellularly and can provoke life-threatening hypokalemia.',
      tests: 'treatment',
    },
  ],
};

export default dkaHhsManagement;
