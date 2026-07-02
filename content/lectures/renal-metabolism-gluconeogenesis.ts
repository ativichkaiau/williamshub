import type { Lecture } from '../../lib/types';

export const renalMetabolismGluconeogenesis: Lecture = {
  id: 'renal-metabolism-gluconeogenesis',
  title: 'Renal Metabolism & Gluconeogenesis',
  system: 'renal',
  source: 'L11 — Renal Metabolism',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L11 Renal Metabolism' },
    { kind: 'mechanism', label: 'Gluconeogenesis' },
    { kind: 'exam', label: 'O₂ consumption' },
  ],

  highYield: [
    '**The kidney is metabolically expensive because reabsorption is active.** Its oxygen consumption is high and tightly **coupled to Na⁺ reabsorption** — the more Na⁺ the Na⁺/K⁺-ATPase pumps, the more ATP (and O₂) is used. Renal O₂ use rises and falls with the reabsorptive workload, not directly with blood flow.',
    '**The renal medulla lives on the edge of hypoxia.** To preserve the concentrating gradient, medullary blood flow is deliberately LOW (vasa recta), so the thick ascending limb — which does heavy active transport — has a high O₂ demand but a low O₂ supply. This mismatch makes the **outer medulla the most vulnerable zone to ischaemia** (why the thick ascending limb and S3 proximal segment are first to die in acute tubular necrosis).',
    '**Different segments use different fuels:** the **proximal tubule is highly aerobic**, preferring fatty acids, ketones, lactate and glutamine, and has little glycolytic capacity; the **medullary segments rely more on anaerobic glycolysis** (fitting their hypoxic environment). Segment metabolism matches segment oxygen supply.',
    '**The kidney is a gluconeogenic organ — the only other significant source of glucose besides the liver.** Renal **gluconeogenesis occurs in the proximal tubule** and, during a prolonged fast, can contribute up to ~40% of the body\'s endogenous glucose. Glutamine is a key substrate (linking gluconeogenesis to ammoniagenesis and acid excretion).',
    '**Metabolic regulators tune transport:** energy sensors such as **AMPK** adjust transporter activity to ATP availability, and renal metabolism is increasingly linked to **blood-pressure regulation** (altered proximal metabolism and Na⁺ handling in hypertension). So renal metabolism is not just housekeeping — it feeds systemic glucose, acid–base and blood-pressure homeostasis.',
  ],

  mechanism: {
    title: 'Active reabsorption costs O₂; PCT does gluconeogenesis; medulla is hypoxic',
    steps: [
      { id: 's1', label: 'O₂ consumption is coupled to Na⁺ reabsorption (Na⁺/K⁺-ATPase)', emphasis: 'key' },
      { id: 's2', label: 'Medulla runs on low flow → high demand/low supply (hypoxia-prone)', emphasis: 'danger' },
      { id: 's3', label: 'PCT is aerobic (fatty acids, glutamine, lactate); medulla glycolytic' },
      { id: 's4', label: 'Proximal tubule performs gluconeogenesis (up to ~40% in fasting)', emphasis: 'key' },
      { id: 's5', label: 'AMPK/energy sensing tunes transport; links to blood-pressure control' },
    ],
  },

  examFindings: [
    { sign: 'Renal O₂ consumption tracks the rate of Na⁺ reabsorption', mechanism: 'Active transport is the main energy cost', significance: 'key' },
    { sign: 'Outer medulla (thick ascending limb, S3) dies first in ischaemia', mechanism: 'High transport demand + low medullary O₂ supply', significance: 'key' },
    { sign: 'Kidney contributes glucose in prolonged fasting', mechanism: 'Proximal-tubule gluconeogenesis (up to ~40%)', significance: 'key' },
    { sign: 'Proximal tubule prefers fatty acids/glutamine, not glucose', mechanism: 'Aerobic segment with low glycolytic capacity', significance: 'supportive' },
    { sign: 'Glutamine use links gluconeogenesis to ammoniagenesis', mechanism: 'Shared substrate for glucose and NH₄⁺ production', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The process renal O₂ consumption is coupled to', meaning: 'Sodium reabsorption (Na⁺/K⁺-ATPase activity)' },
    { clue: 'The nephron segment that performs gluconeogenesis', meaning: 'The proximal tubule' },
    { clue: 'The renal zone most vulnerable to ischaemic injury', meaning: 'The outer medulla (thick ascending limb / S3 segment)' },
    { clue: 'The substrate linking renal glucose and acid handling', meaning: 'Glutamine (gluconeogenesis + ammoniagenesis)' },
  ],

  treatment: [
    { logic: 'Why renal metabolism matters', detail: 'It explains why hypotension/hypoxia strike the medulla first (ATN — see the muddy-brown casts of [[urine-microscopy-sediment]]), why the O₂ cost of transport matters ([[tubular-reabsorption-secretion]]), and how glutamine feeds acid excretion ([[renal-acid-excretion]]). Renal gluconeogenesis supports systemic glucose in fasting, and altered proximal metabolism ties to hypertension ([[renal-hemodynamics-autoregulation]]).' },
  ],

  mnemonics: [
    { hook: 'Renal O₂ use = "the price of pumping Na⁺"', expansion: ['More reabsorption → more ATP → more O₂', 'Medulla: high demand, low supply → hypoxia-prone'] },
    { hook: 'Kidney is the "second liver" for glucose', expansion: ['Proximal-tubule gluconeogenesis', 'Up to ~40% of endogenous glucose in prolonged fasting', 'Glutamine substrate (also makes NH₄⁺)'] },
  ],

  traps: [
    {
      questionCategory: 'Why the renal medulla is prone to ischaemic injury',
      wrongInstinct: 'The medulla is injured first because it receives the most blood flow and thus the most toxins',
      rightAnswer: 'The medulla is vulnerable because its blood flow is deliberately LOW (to preserve the concentrating gradient) while the thick ascending limb has a HIGH oxygen demand from active transport — a supply–demand mismatch, not excess flow',
      why: 'The low medullary flow that makes urine concentration possible is exactly what starves the hard-working thick ascending limb of oxygen, so it (and the S3 proximal segment) are first to undergo acute tubular necrosis.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Renal oxygen consumption is most closely coupled to the rate of:',
      options: [
        { id: 'a', text: 'Glomerular filtration' },
        { id: 'b', text: 'Sodium reabsorption' },
        { id: 'c', text: 'Renin secretion' },
        { id: 'd', text: 'Urine acidification alone' },
      ],
      answerId: 'b',
      explanation: 'Most renal ATP (and therefore O₂) is spent by the Na⁺/K⁺-ATPase driving sodium reabsorption; oxygen consumption rises and falls with the reabsorptive workload rather than tracking blood flow directly.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'During a prolonged fast, the kidney contributes significantly to blood glucose through gluconeogenesis, which occurs mainly in the:',
      options: [
        { id: 'a', text: 'Glomerulus' },
        { id: 'b', text: 'Proximal tubule' },
        { id: 'c', text: 'Thin descending limb' },
        { id: 'd', text: 'Collecting duct' },
      ],
      answerId: 'b',
      explanation: 'The proximal tubule is the renal site of gluconeogenesis and can supply a substantial fraction (up to ~40%) of endogenous glucose during prolonged fasting, using substrates such as glutamine and lactate.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default renalMetabolismGluconeogenesis;
