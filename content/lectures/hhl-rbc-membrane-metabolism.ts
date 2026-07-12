import type { Lecture } from '../../lib/types';

export const hhlRbcMembraneMetabolism: Lecture = {
  id: 'hhl-rbc-membrane-metabolism',
  title: 'RBC Membrane, Metabolism & Gas Transport',
  system: 'heme',
  source: 'L2 — Red Blood Cell Structure & Function',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L2 RBC structure' },
    { kind: 'mechanism', label: 'Glycolysis · HMP · 2,3-BPG' },
    { kind: 'investigation', label: 'O₂ curve · Heinz bodies' },
    { kind: 'disease', label: 'G6PD · methaemoglobinaemia' },
  ],

  highYield: [
    'The **biconcave disc** owes its deformability to a **spectrin–ankyrin–band 3** membrane skeleton; defects here cause **hereditary spherocytosis/elliptocytosis**.',
    'With **no nucleus or mitochondria**, the RBC makes ATP by **anaerobic glycolysis**; the **HMP shunt (G6PD → NADPH → reduced glutathione)** is its **only oxidative defence**.',
    '**2,3-BPG binds deoxyhaemoglobin and right-shifts the O₂ dissociation curve** (↓affinity → O₂ unloading); it rises in **anaemia, chronic hypoxia and altitude**.',
    '**Methaemoglobin reductase (cytochrome-b5 reductase) keeps haem iron ferrous (Fe²⁺)**; failure → **methaemoglobin (Fe³⁺)**, which cannot carry O₂ → cyanosis with chocolate-brown blood.',
    'CO₂ is carried mostly as **bicarbonate** (carbonic anhydrase + the **chloride/Hamburger shift** via band 3); the **Bohr effect** (↑CO₂/↑H⁺) unloads O₂ in tissues.',
  ],

  mechanism: {
    title: 'No organelles → glycolysis + HMP defend the cell; Hb tunes O₂ delivery',
    steps: [
      { id: 's1', label: 'Biconcave disc; spectrin–ankyrin–band 3 skeleton → deformability', emphasis: 'key' },
      { id: 's2', label: 'No nucleus/mitochondria → anaerobic glycolysis makes ATP' },
      { id: 's3', label: 'HMP shunt: G6PD → NADPH → reduced glutathione (oxidant defence)', emphasis: 'key' },
      { id: 's4', label: '2,3-BPG binds deoxy-Hb → right shift → O₂ unloading' },
      { id: 's5', label: 'Oxidant overwhelms defences (G6PD) → Heinz-body haemolysis; Fe³⁺ metHb → tissue hypoxia', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Bite cells + Heinz bodies after an oxidant exposure', mechanism: 'Failed NADPH/glutathione defence (G6PD deficiency)', significance: 'key' },
    { sign: 'Chocolate-brown blood + cyanosis unresponsive to oxygen', mechanism: 'Methaemoglobinaemia (Fe³⁺ cannot bind O₂)', significance: 'key' },
    { sign: 'Spherocytes with increased osmotic fragility', mechanism: 'Membrane-skeleton defect (ankyrin/spectrin/band 3)', significance: 'supportive' },
    { sign: 'Right-shifted O₂ curve at altitude or in anaemia', mechanism: 'Raised 2,3-BPG lowers Hb O₂ affinity', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Heinz bodies on supravital stain + bite cells after fava beans/drugs', meaning: 'G6PD deficiency (HMP-shunt failure)' },
    { clue: 'Cyanosis + chocolate-brown blood not corrected by oxygen', meaning: 'Methaemoglobinaemia' },
    { clue: 'Increased osmotic fragility / spherocytes', meaning: 'Membrane cytoskeleton defect' },
    { clue: 'Right-shifted oxyhaemoglobin curve (↑P50)', meaning: 'Raised 2,3-BPG, acidosis or fever (Bohr)' },
  ],

  treatment: [
    { logic: 'Support the oxidative defence', detail: 'Avoid oxidant drugs and fava beans in G6PD deficiency; treat methaemoglobinaemia with methylene blue — which itself needs NADPH, so use ascorbic acid/exchange transfusion if G6PD-deficient.' },
    { logic: 'Read the P50 to predict O₂ delivery', detail: 'Right shift (↑CO₂, ↑H⁺, ↑2,3-BPG, fever) favours tissue unloading; left shift (HbF, CO, alkalosis) impairs it.' },
  ],

  mnemonics: [
    { hook: 'CADET, face Right! — right shift = O₂ unloading', expansion: ['CO₂, Acid, 2,3-DPG, Exercise, Temperature → right shift', 'Right = releases O₂ to tissues', 'Left = HbF, CO, methaemoglobin, alkalosis'] },
    { hook: 'G6PD → NADPH → GSH: no NADPH, no defence', expansion: ['HMP shunt is the RBC\'s only NADPH source', 'Oxidants → Heinz bodies → bite cells', 'Methylene blue needs NADPH, so limited use in G6PD'] },
  ],

  traps: [
    {
      questionCategory: 'Direction of the O₂ curve shift',
      wrongInstinct: 'A right shift means haemoglobin binds oxygen more tightly',
      rightAnswer: 'A right shift = LOWER O₂ affinity → Hb releases O₂ to tissues (↑P50)',
      why: '2,3-BPG, acidosis, CO₂ and fever right-shift the curve to unload O₂ where it is needed; students often invert this.',
    },
    {
      questionCategory: 'Methaemoglobinaemia treatment',
      wrongInstinct: 'Give methylene blue to every cyanotic patient with methaemoglobinaemia',
      rightAnswer: 'Methylene blue relies on NADPH from G6PD — it is ineffective and can trigger haemolysis in G6PD deficiency',
      why: 'The methylene-blue pathway needs NADPH (HMP shunt); in G6PD-deficient patients use ascorbic acid or exchange transfusion.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Red cells rely on the hexose-monophosphate (pentose phosphate) shunt principally to generate:',
      options: [
        { id: 'a', text: 'ATP for the Na⁺/K⁺ pump' },
        { id: 'b', text: 'NADPH to keep glutathione reduced' },
        { id: 'c', text: '2,3-BPG' },
        { id: 'd', text: 'Bicarbonate' },
      ],
      answerId: 'b',
      explanation: 'G6PD in the HMP shunt produces NADPH, which maintains reduced glutathione to neutralise oxidants; ATP comes from anaerobic glycolysis.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A person acclimatising to high altitude increases red-cell 2,3-BPG. The direct effect on the oxyhaemoglobin dissociation curve is to:',
      options: [
        { id: 'a', text: 'Shift it left, increasing O₂ affinity' },
        { id: 'b', text: 'Shift it right, promoting O₂ unloading to tissues' },
        { id: 'c', text: 'Abolish cooperativity' },
        { id: 'd', text: 'Convert Fe²⁺ to Fe³⁺' },
      ],
      answerId: 'b',
      explanation: '2,3-BPG binds deoxyhaemoglobin and stabilises the low-affinity T state, right-shifting the curve so more O₂ is released to tissues.',
      tests: 'mechanism',
    },
  ],
};

export default hhlRbcMembraneMetabolism;
