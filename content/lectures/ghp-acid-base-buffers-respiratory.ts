import type { Lecture } from '../../lib/types';

export const ghpAcidBaseBuffersRespiratory: Lecture = {
  id: 'ghp-acid-base-buffers-respiratory',
  title: 'Buffers & Respiratory Control of pH',
  system: 'renal',
  source: 'Ch 30 — Regulation of Acid–Base Balance',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'Ch 30 Acid–Base Balance' },
    { kind: 'mechanism', label: 'Three lines of defence' },
    { kind: 'exam', label: 'Henderson–Hasselbalch' },
  ],

  highYield: [
    '**Three defences act on completely different timescales, and knowing which is which answers most questions.** **Chemical buffers** work in **seconds**, the **respiratory** system in **minutes**, and the **kidney** over **hours to days**. Buffers and lungs only *limit* the change; only the kidney can actually **remove** the acid load from the body.',
    '**The bicarbonate system is the most important buffer despite a poor pKa, because it is open.** Its pKa of **6.1** is far from pH 7.4, which should make it feeble. It dominates anyway because both components are independently regulated: **CO₂ by the lungs** and **HCO₃⁻ by the kidney**. An open system that can vent its acid component beats a closed one with a better pKa.',
    '**Henderson–Hasselbalch states the whole framework: pH = 6.1 + log([HCO₃⁻] ÷ 0.03 × PCO₂).** What matters is the **ratio**, normally **20:1**. Any disorder is a change in numerator or denominator, and compensation is the body restoring the ratio by moving the *other* term. Nothing else is needed to classify a disturbance.',
    '**Non-bicarbonate buffers matter where bicarbonate cannot go.** **Phosphate** is a good intracellular and urinary buffer (pKa **6.8**, close to tubular fluid pH). **Proteins**, especially intracellular ones and **haemoglobin**, provide the largest total buffering capacity in the body. **Bone carbonate** buffers chronic acid loads, which is why chronic acidosis demineralises bone.',
    '**Respiratory compensation is fast, powerful and never complete.** A fall in pH stimulates central and peripheral chemoreceptors, ventilation rises, CO₂ falls and pH is pulled back toward normal — but only about **50–75%** of the way, because correcting fully would remove the stimulus driving the compensation. **Overcorrection never happens**, which is why a fully normal pH with abnormal components implies a **mixed** disorder.',
    '**Respiratory disorders are defined by ventilation failing or exceeding metabolic need.** **Hypoventilation** retains CO₂ → **respiratory acidosis**; **hyperventilation** blows it off → **respiratory alkalosis**. Renal compensation for these is slow, taking **3–5 days**, which is exactly how acute and chronic respiratory disorders are told apart — the interpretation logic in [[abg-acid-base-interpretation]].',
  ],

  mechanism: {
    title: 'Seconds, minutes, days',
    steps: [
      { id: 's1', label: 'Acid load enters the ECF', emphasis: 'key' },
      { id: 's2', label: 'Chemical buffers absorb H⁺ within seconds — bicarbonate, protein, phosphate' },
      { id: 's3', label: 'Falling pH stimulates chemoreceptors within minutes', emphasis: 'key' },
      { id: 's4', label: 'Ventilation rises, CO₂ falls, the 20:1 ratio is partly restored' },
      { id: 's5', label: 'Compensation stops at 50–75% — full correction would remove its own stimulus', emphasis: 'key' },
      { id: 's6', label: 'Kidney excretes the H⁺ and regenerates bicarbonate over hours to days', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Deep sighing Kussmaul respiration in metabolic acidosis', mechanism: 'Chemoreceptor-driven hyperventilation lowering PCO₂', significance: 'key' },
    { sign: 'A completely normal pH with clearly abnormal bicarbonate and PCO₂', mechanism: 'Compensation never fully corrects, so this implies a mixed disorder', significance: 'key' },
    { sign: 'Tetany and perioral tingling during acute hyperventilation', mechanism: 'Alkalosis increases calcium binding to albumin', significance: 'key' },
    { sign: 'Bone demineralisation in chronic acidosis', mechanism: 'Bone carbonate buffering a sustained acid load', significance: 'supportive' },
    { sign: 'Minimal bicarbonate change in acute respiratory acidosis', mechanism: 'Renal compensation takes 3–5 days to develop', significance: 'key' },
  ],

  investigations: [
    { clue: 'pH 7.30, HCO₃⁻ 14, PCO₂ 30', meaning: 'Metabolic acidosis with appropriate partial respiratory compensation' },
    { clue: 'pH 7.32, PCO₂ 60, HCO₃⁻ 30', meaning: 'Chronic respiratory acidosis with renal compensation' },
    { clue: 'pH 7.36, PCO₂ 60, HCO₃⁻ 34 with a raised anion gap', meaning: 'A mixed disorder — compensation alone cannot normalise pH' },
    { clue: 'Bicarbonate barely raised despite a PCO₂ of 60', meaning: 'Acute rather than chronic respiratory acidosis' },
    { clue: 'Urine pH inappropriately high in systemic acidosis', meaning: 'Impaired renal acid excretion rather than a respiratory problem' },
  ],

  treatment: [
    {
      logic: 'Treat the cause, not the number',
      detail: 'Because buffers and ventilation only **limit** the change, pH normalises durably only when the acid source is removed or the kidney clears it. Giving bicarbonate raises CO₂ production and can worsen intracellular acidosis if ventilation is fixed.',
    },
    {
      logic: 'Use the expected compensation to detect a second disorder',
      detail: 'Each primary disturbance has a **predictable** degree of compensation. A measured value that deviates from prediction is evidence of a **mixed** disorder, which is often more informative than the pH itself.',
    },
  ],

  mnemonics: [
    { hook: 'Seconds, minutes, days', expansion: ['Buffers: seconds', 'Lungs: minutes', 'Kidney: hours to days — the only true removal'] },
    { hook: '20 to 1 keeps 7.4', expansion: ['pH set by HCO₃⁻ : CO₂ ratio', 'Compensation restores the ratio', 'It never overshoots'] },
  ],

  traps: [
    {
      questionCategory: 'Interpreting a normal pH',
      wrongInstinct: 'A normal pH means acid–base status is normal',
      rightAnswer: 'With abnormal bicarbonate and PCO₂ it indicates a mixed disorder',
      why: 'Compensation corrects only 50–75% of the way and never overshoots',
    },
    {
      questionCategory: 'Why bicarbonate is the key buffer',
      wrongInstinct: 'Because its pKa is closest to physiological pH',
      rightAnswer: 'Its pKa is actually poor; it dominates because it is an open, independently regulated system',
      why: 'Lungs control CO₂ and kidneys control bicarbonate, so both ends can be adjusted',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Arterial gas shows pH 7.36, PCO₂ 60 mmHg, HCO₃⁻ 34 mmol/L, with a raised anion gap. What is the best interpretation?',
      options: [
        { id: 'a', text: 'Fully compensated chronic respiratory acidosis' },
        { id: 'b', text: 'A mixed disorder — compensation alone never returns pH fully to normal' },
        { id: 'c', text: 'Acute respiratory alkalosis' },
        { id: 'd', text: 'Normal acid–base status' },
      ],
      answerId: 'b',
      explanation: 'Compensatory mechanisms correct only 50–75% of a disturbance because full correction would abolish the stimulus driving them. A near-normal pH with markedly abnormal components, plus a raised anion gap, indicates more than one process.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'Why is the bicarbonate buffer system the most important extracellular buffer despite a pKa of 6.1?',
      options: [
        { id: 'a', text: 'It is present at far higher concentration than any other buffer' },
        { id: 'b', text: 'It is an open system whose two components are independently regulated by lungs and kidneys' },
        { id: 'c', text: 'Its pKa is closest to physiological pH' },
        { id: 'd', text: 'It buffers intracellularly as well as extracellularly' },
      ],
      answerId: 'b',
      explanation: 'A pKa of 6.1 is poor for buffering at 7.4. The system dominates because CO₂ can be vented by the lungs while bicarbonate is regulated by the kidney, so both numerator and denominator are adjustable.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A patient with a PCO₂ of 60 mmHg has a bicarbonate of only 26 mmol/L. What does this suggest?',
      options: [
        { id: 'a', text: 'Chronic respiratory acidosis with full renal compensation' },
        { id: 'b', text: 'Acute respiratory acidosis, since renal compensation takes 3–5 days' },
        { id: 'c', text: 'Metabolic alkalosis' },
        { id: 'd', text: 'A laboratory error' },
      ],
      answerId: 'b',
      explanation: 'Renal compensation for respiratory acidosis develops over 3–5 days and would raise bicarbonate substantially. A nearly normal bicarbonate with a markedly raised PCO₂ therefore indicates an acute process.',
      tests: 'investigation',
    },
  ],
};

export default ghpAcidBaseBuffersRespiratory;
