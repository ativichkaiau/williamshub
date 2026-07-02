import type { Lecture } from '../../lib/types';
import { MUSCLE_FIBER_ENERGY } from '../../lib/figures';

export const muscleEnergySystems: Lecture = {
  id: 'muscle-energy-systems',
  title: 'Energy Systems of Skeletal Muscle',
  system: 'msk',
  source: 'L5 — Energy Sources of Skeletal Muscle',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'MSK' },
    { kind: 'lecture', label: 'L5 Muscle Energy' },
    { kind: 'mechanism', label: 'ATP supply routes' },
    { kind: 'exam', label: 'PCr · glycolysis · oxidative' },
  ],

  highYield: [
    '**ATP is the direct fuel for contraction** — for the cross-bridge power stroke/detachment and for SERCA (relaxation) — but muscle stores only a few seconds\' worth. Three systems regenerate it, differing in **speed vs capacity**.',
    '**1. Phosphocreatine (creatine phosphate) system — immediate, ~10 seconds.** **Creatine kinase** transfers a phosphate from **phosphocreatine to ADP → ATP** instantly (no oxygen). Powers the first burst (sprint start, jump); the store is tiny.',
    '**2. Anaerobic glycolysis — fast, seconds to ~2 minutes.** Glucose/glycogen → **2 ATP per glucose without oxygen**, producing **lactate**. Sustains intense activity when oxygen delivery lags; lactate accumulation contributes to fatigue.',
    '**3. Aerobic (oxidative) metabolism — slow but high-capacity, sustained.** Full oxidation of glucose (and **fatty acids**) in mitochondria yields **~30+ ATP per glucose**, requiring **oxygen**. Powers endurance activity; the dominant system at rest and in prolonged exercise.',
    '**"Oxygen debt" (EPOC):** after intense exercise, **elevated oxygen consumption continues** to **replenish phosphocreatine and ATP, clear lactate, and restore myoglobin O₂** — i.e. repay the anaerobic "borrowing." The systems overlap in time (PCr → glycolysis → aerobic), not strictly sequentially.',
  ],

  mechanism: {
    title: 'Immediate → fast anaerobic → sustained aerobic',
    steps: [
      { id: 's1', label: 'Stored ATP: seconds only; must be regenerated', emphasis: 'key' },
      { id: 's2', label: 'Phosphocreatine + ADP → ATP (creatine kinase, ~10 s)', emphasis: 'key' },
      { id: 's3', label: 'Anaerobic glycolysis: 2 ATP + lactate, no O₂ (~2 min)', emphasis: 'key' },
      { id: 's4', label: 'Aerobic: ~30+ ATP/glucose (+ fat), needs O₂ (endurance)' },
      { id: 's5', label: 'Oxygen debt/EPOC repays PCr + clears lactate afterward' },
    ],
  },

  examFindings: [
    { sign: 'First ~10 s of maximal effort', mechanism: 'Phosphocreatine system (instant, O₂-independent)', significance: 'key' },
    { sign: 'Lactate rises during intense exercise', mechanism: 'Anaerobic glycolysis (2 ATP, no O₂)', significance: 'key' },
    { sign: 'Prolonged endurance activity fuelled aerobically', mechanism: 'Oxidative phosphorylation (~30+ ATP, needs O₂)', significance: 'key' },
    { sign: 'Continued heavy breathing after sprinting', mechanism: 'Oxygen debt (EPOC) — repay PCr, clear lactate', significance: 'supportive' },
    { sign: 'Fatty acids used in prolonged low-intensity exercise', mechanism: 'Aerobic β-oxidation (high capacity)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'System giving the fastest ATP for a sprint start', meaning: 'Phosphocreatine (creatine kinase)' },
    { clue: 'ATP source producing lactate', meaning: 'Anaerobic glycolysis' },
    { clue: 'System giving the most ATP per glucose', meaning: 'Aerobic (oxidative) metabolism (~30+)' },
    { clue: 'Post-exercise excess oxygen consumption', meaning: 'Oxygen debt (EPOC)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Energy-system dominance explains exercise physiology and training design; creatine kinase leaks into blood after muscle injury (a diagnostic marker). Fibre-type differences track these systems ([[muscle-fiber-types-fatigue]]). ATP powers the cross-bridge cycle ([[muscle-contraction-crossbridge]]).' },
  ],

  mnemonics: [
    { hook: 'ATP order: "Phosphocreatine (10 s) → Glycolysis (2 min, lactate) → Aerobic (endless, O₂)"', expansion: ['Fast/small → slow/big'] },
    { hook: 'Oxygen debt = "borrow anaerobic now, repay O₂ later"', expansion: ['Replenish PCr + clear lactate'] },
  ],

  traps: [
    {
      questionCategory: 'ATP yield of anaerobic vs aerobic',
      wrongInstinct: 'Anaerobic glycolysis produces about the same amount of ATP as aerobic metabolism',
      rightAnswer: 'Anaerobic glycolysis yields only ~2 ATP per glucose (+ lactate); aerobic (oxidative) metabolism yields ~30+ ATP per glucose',
      why: 'Anaerobic is fast but low-yield; aerobic is slower but vastly more efficient — hence its role in endurance.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The energy system that provides ATP most rapidly during the first few seconds of maximal exercise is:',
      options: [
        { id: 'a', text: 'Aerobic oxidative phosphorylation' },
        { id: 'b', text: 'The phosphocreatine (creatine phosphate) system' },
        { id: 'c', text: 'Beta-oxidation of fatty acids' },
        { id: 'd', text: 'The citric acid cycle' },
      ],
      answerId: 'b',
      explanation: 'Phosphocreatine regenerates ATP instantly via creatine kinase (no oxygen), powering the first ~10 seconds. Glycolysis then predominates, followed by aerobic metabolism for sustained activity.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The "oxygen debt" (excess post-exercise oxygen consumption) after intense exercise is used mainly to:',
      options: [
        { id: 'a', text: 'Store extra glucose as fat' },
        { id: 'b', text: 'Replenish phosphocreatine/ATP and clear lactate' },
        { id: 'c', text: 'Increase muscle mass' },
        { id: 'd', text: 'Lower body temperature' },
      ],
      answerId: 'b',
      explanation: 'Post-exercise oxygen consumption stays elevated to regenerate phosphocreatine and ATP, oxidise/clear lactate, and restore myoglobin oxygen — repaying the anaerobic "debt."',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Energy systems & fibre types', svg: MUSCLE_FIBER_ENERGY, caption: 'Phosphocreatine (instant) → anaerobic glycolysis (lactate) → aerobic (O₂, high yield); type I slow-oxidative vs II fast-glycolytic fibres.' },
  ],
};

export default muscleEnergySystems;
