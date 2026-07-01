import type { Lecture } from '../../lib/types';

export const severeHypercalcemiaTherapy: Lecture = {
  id: 'severe-hypercalcemia-therapy',
  title: 'Severe Hypercalcemia: Drug Therapy',
  system: 'endocrine',
  source: 'L9 — Drugs Used in Parathyroid Diseases',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'L9 Parathyroid Drugs' },
    { kind: 'disease', label: 'Severe hypercalcemia' },
    { kind: 'mechanism', label: 'Hydration + antiresorption' },
    { kind: 'exam', label: 'Calcitonin vs bisphosphonate' },
  ],

  highYield: [
    'Primary hyperparathyroidism causes **inappropriately high PTH, high corrected calcium, and low phosphate**. Common causes are a solitary adenoma (~85%), multigland hyperplasia (~15%), and rarely carcinoma.',
    'In marked hypovolemia, start **isotonic saline** to restore extracellular volume and promote renal calcium excretion. It acts within hours; watch for volume overload and electrolyte disturbance.',
    '**Calcitonin acts within hours** by inhibiting osteoclasts and increasing renal calcium/phosphate loss, but its effect lasts only **2-3 days because tachyphylaxis develops**.',
    'IV **bisphosphonates** (e.g. pamidronate) induce osteoclast apoptosis. Their onset is slower (**1-2 days**) but effect lasts **10-14 days**. They may cause hypocalcemia and other electrolyte deficits and require caution/avoidance in kidney disease.',
    '**Cinacalcet is a calcimimetic**: it increases calcium-sensing receptor sensitivity to extracellular calcium, directly lowering PTH. A loop diuretic can increase calciuresis only after adequate hydration and is not a substitute for volume restoration.',
  ],

  mechanism: {
    title: 'Bridge rapid calcium reduction to sustained control',
    steps: [
      { id: 's1', label: 'Normal saline restores volume and renal calcium clearance', emphasis: 'key' },
      { id: 's2', label: 'Calcitonin lowers calcium within hours' },
      { id: 's3', label: 'Bisphosphonate suppresses osteoclasts over 1-2 days' },
      { id: 's4', label: 'Cinacalcet sensitizes CaSR -> lower PTH' },
    ],
  },

  examFindings: [
    { sign: 'Stones, bone pain/fracture, abdominal symptoms, and psychiatric change', mechanism: 'Multisystem effects of PTH-mediated hypercalcemia', significance: 'supportive' },
    { sign: 'Dehydration and polyuria in severe hypercalcemia', mechanism: 'Renal concentrating defect with volume loss', significance: 'key' },
    { sign: 'Calcium falls rapidly then rebounds after calcitonin', mechanism: 'Short action and tachyphylaxis', significance: 'key' },
  ],

  investigations: [
    { clue: 'Corrected or ionized calcium, phosphate, and PTH', meaning: 'Confirm and classify PTH-mediated hypercalcemia' },
    { clue: 'Creatinine/eGFR and volume status', meaning: 'Guide saline and bisphosphonate safety' },
    { clue: 'Serial calcium, phosphate, and magnesium', meaning: 'Follow response and antiresorptive toxicity' },
  ],

  treatment: [
    { logic: 'Rehydrate first with normal saline when volume depleted', detail: 'Loop diuresis without hydration can worsen the crisis.' },
    { logic: 'Pair fast calcitonin with slower bisphosphonate when appropriate', detail: 'Calcitonin bridges the 1-2 day bisphosphonate onset.' },
    { logic: 'Use cinacalcet for PTH suppression in selected disease', detail: 'It acts at the calcium-sensing receptor.' },
  ],

  mnemonics: [
    { hook: 'Calcitonin = quick but quits', expansion: ['Hours to onset', 'Tachyphylaxis in 2-3 days'] },
    { hook: 'Bisphosphonate = slow but stays', expansion: ['1-2 day onset', '10-14 day duration'] },
  ],

  traps: [
    {
      questionCategory: 'Initial therapy in dehydrated severe hypercalcemia',
      wrongInstinct: 'Start furosemide before fluids to force calcium excretion',
      rightAnswer: 'Restore intravascular volume with normal saline first; use a loop only in a well-hydrated patient when indicated',
      why: 'Hypercalcemic patients are often volume depleted, and premature diuresis worsens renal perfusion and calcium clearance.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which drug lowers calcium within hours but loses effectiveness after 2-3 days because of tachyphylaxis?',
      options: [
        { id: 'a', text: 'Calcitonin' },
        { id: 'b', text: 'Pamidronate' },
        { id: 'c', text: 'Cinacalcet' },
        { id: 'd', text: 'Calcitriol' },
      ],
      answerId: 'a',
      explanation: 'Calcitonin is the rapid bridge therapy for severe hypercalcemia, but receptor tachyphylaxis limits its useful duration.',
      tests: 'treatment',
    },
  ],
};

export default severeHypercalcemiaTherapy;
