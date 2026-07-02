import type { Lecture } from '../../lib/types';

export const muscleFiberTypesFatigue: Lecture = {
  id: 'muscle-fiber-types-fatigue',
  title: 'Muscle Fibre Types & Fatigue',
  system: 'msk',
  source: 'L5 — Energy Sources of Skeletal Muscle',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'MSK' },
    { kind: 'lecture', label: 'L5 Muscle Energy' },
    { kind: 'mechanism', label: 'Fibre type ↔ metabolism' },
    { kind: 'exam', label: 'Type I vs II · fatigue' },
  ],

  highYield: [
    '**Skeletal muscle fibres come in types that match their energy system.** **Type I (slow oxidative)** — slow-twitch, **aerobic** (many mitochondria, rich capillaries, high **myoglobin → red**), **fatigue-resistant**; for **posture and endurance** (e.g. marathon, soleus).',
    '**Type IIa (fast oxidative-glycolytic)** — fast-twitch but with good oxidative capacity → **intermediate**, moderately fatigue-resistant. **Type IIx/IIb (fast glycolytic)** — fast-twitch, **anaerobic glycolysis**, few mitochondria, low myoglobin → **white**, powerful but **fatigue quickly**; for **sprints and power**.',
    '**Most muscles are a mix**, and the **proportion is genetically influenced but trainable:** endurance training increases **mitochondria, capillaries, and oxidative enzymes** (shifting toward more oxidative capacity); resistance/power training **hypertrophies fast fibres**.',
    '**Muscle fatigue = the decline in force with sustained activity** — largely **peripheral** (within the muscle): accumulation of **inorganic phosphate (Pi), H⁺/lactate (↓pH)**, impaired **Ca²⁺ release/handling**, and depletion of glycogen/phosphocreatine. **Central fatigue** (reduced CNS drive) also contributes. (It is NOT usually due to ATP running out completely.)',
    '**Recruitment matches fibre type to demand** (via the size principle, [[motor-unit-recruitment]]): low-force tasks use small **type I** units; high-force bursts add large **type II** units — which is why heavy/explosive efforts fatigue faster.',
  ],

  mechanism: {
    title: 'Fibre type = its energy system; fatigue = metabolic',
    steps: [
      { id: 's1', label: 'Type I: slow, oxidative, red, fatigue-resistant (endurance)', emphasis: 'key' },
      { id: 's2', label: 'Type IIx: fast, glycolytic, white, fatigable (power)', emphasis: 'key' },
      { id: 's3', label: 'Type IIa: fast oxidative-glycolytic, intermediate' },
      { id: 's4', label: 'Training shifts oxidative capacity / hypertrophies fast fibres' },
      { id: 's5', label: 'Fatigue: ↑Pi/H⁺/lactate, ↓Ca²⁺ handling, glycogen depletion', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Red, myoglobin-rich, mitochondria-dense fibre', mechanism: 'Type I (slow oxidative, fatigue-resistant)', significance: 'key' },
    { sign: 'White, glycolytic, fast-fatiguing fibre', mechanism: 'Type IIx (fast glycolytic, power)', significance: 'key' },
    { sign: 'Endurance training raises oxidative capacity', mechanism: '↑mitochondria/capillaries/enzymes', significance: 'supportive' },
    { sign: 'Force declines with ↑Pi and ↓pH during sustained effort', mechanism: 'Peripheral (metabolic) fatigue', significance: 'key' },
    { sign: 'Sprint muscles fatigue faster than postural muscles', mechanism: 'Type II vs type I fibre predominance', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Fibre type dominating a marathon runner\'s calf', meaning: 'Type I (slow oxidative)' },
    { clue: 'Fibre type dominating a sprinter\'s fast muscles', meaning: 'Type II (fast glycolytic)' },
    { clue: 'Main causes of peripheral muscle fatigue', meaning: '↑Pi/H⁺(lactate), impaired Ca²⁺ handling, glycogen depletion' },
    { clue: 'What gives type I fibres their red colour', meaning: 'High myoglobin (and capillary density)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Fibre-type/fatigue physiology underlies sports training, rehab, and muscle disease; type-I predominance suits endurance, type-II power. Energy systems behind the fibre types: [[muscle-energy-systems]]; recruitment order: [[motor-unit-recruitment]].' },
  ],

  mnemonics: [
    { hook: 'Type "1 = slOw, Oxidative, red (One long marathon)"; Type "2 = fast, glycolytic, white (power)"', expansion: ['Red = myoglobin = aerobic'] },
    { hook: 'Fatigue = metabolic build-up (Pi, H⁺, lactate) + Ca²⁺ trouble, NOT "no ATP"', expansion: ['Peripheral > central'] },
  ],

  traps: [
    {
      questionCategory: 'Cause of muscle fatigue',
      wrongInstinct: 'Muscle fatigue occurs because ATP is completely used up',
      rightAnswer: 'Fatigue is mainly metabolic — accumulation of Pi, H⁺/lactate, impaired Ca²⁺ release/handling, and glycogen depletion — not complete ATP exhaustion (which would cause rigor)',
      why: 'Cells defend ATP levels; if ATP truly ran out, cross-bridges would lock (rigor). Fatigue reflects metabolic by-products and Ca²⁺ dysfunction.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which fibre type is slow-twitch, rich in mitochondria and myoglobin, uses aerobic metabolism, and is resistant to fatigue?',
      options: [
        { id: 'a', text: 'Type IIx (fast glycolytic)' },
        { id: 'b', text: 'Type I (slow oxidative)' },
        { id: 'c', text: 'Type IIb (fast glycolytic)' },
        { id: 'd', text: 'Intrafusal fibre' },
      ],
      answerId: 'b',
      explanation: 'Type I (slow oxidative) fibres are red (high myoglobin), mitochondria-rich, aerobic, and fatigue-resistant — suited to posture and endurance. Type II fibres are fast, glycolytic, and fatigue quickly.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Peripheral muscle fatigue during sustained maximal contraction is primarily due to:',
      options: [
        { id: 'a', text: 'Complete depletion of ATP causing rigor' },
        { id: 'b', text: 'Accumulation of inorganic phosphate and H⁺ (lactate) plus impaired Ca²⁺ handling' },
        { id: 'c', text: 'Loss of motor neurons' },
        { id: 'd', text: 'Excess oxygen delivery' },
      ],
      answerId: 'b',
      explanation: 'Fatigue is mainly metabolic: rising Pi and H⁺/lactate and impaired SR Ca²⁺ release reduce force. ATP is defended (true exhaustion would cause rigor), and central (CNS) factors also contribute.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default muscleFiberTypesFatigue;
