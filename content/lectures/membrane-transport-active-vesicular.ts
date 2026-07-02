import type { Lecture } from '../../lib/types';

export const membraneTransportActiveVesicular: Lecture = {
  id: 'membrane-transport-active-vesicular',
  title: 'Active & Vesicular Transport',
  system: 'physiology',
  source: 'L3 — Membrane Transport',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'L3 Membrane Transport' },
    { kind: 'mechanism', label: 'Pumps & vesicles' },
    { kind: 'exam', label: 'Primary vs secondary' },
  ],

  highYield: [
    '**Active transport moves solute AGAINST its electrochemical gradient — it needs energy.** Two kinds: **primary** (direct ATP) and **secondary** (uses the energy stored in an ion gradient).',
    '**Primary active transport** uses ATP directly via **pumps (ATPases)**: the **Na⁺/K⁺-ATPase** (3 Na⁺ out / 2 K⁺ in — electrogenic, sets ion gradients), **Ca²⁺-ATPase** (keeps intracellular Ca²⁺ low), and the gastric **H⁺/K⁺-ATPase** (acid secretion; the target of proton-pump inhibitors).',
    '**Secondary active transport** couples the "downhill" movement of an ion (usually **Na⁺**, whose gradient the Na⁺/K⁺-ATPase created) to the "uphill" movement of another solute — **no direct ATP**. **Symport (cotransport)** = same direction (e.g. **SGLT: Na⁺ + glucose**); **antiport (exchange)** = opposite directions (e.g. **Na⁺/Ca²⁺ exchanger, Na⁺/H⁺ exchanger**).',
    '**Vesicular (bulk) transport** moves large materials in membrane-bound vesicles: **endocytosis** (phagocytosis, pinocytosis, receptor-mediated) brings material IN; **exocytosis** releases material OUT (e.g. hormone/neurotransmitter secretion). Both consume energy.',
    '**The Na⁺ gradient is the cell\'s "battery":** the Na⁺/K⁺-ATPase spends ATP to build it, and secondary active transporters spend that gradient to move glucose, amino acids, Ca²⁺, and H⁺ — coupling one pump\'s work to many transport jobs.',
  ],

  mechanism: {
    title: 'Against the gradient — direct or borrowed energy',
    steps: [
      { id: 's1', label: 'Active = against gradient, needs energy', emphasis: 'key' },
      { id: 's2', label: 'Primary: direct ATP (Na⁺/K⁺-, Ca²⁺-, H⁺/K⁺-ATPase)', emphasis: 'key' },
      { id: 's3', label: 'Secondary: uses Na⁺ gradient (no direct ATP)', emphasis: 'key' },
      { id: 's4', label: 'Symport (SGLT) same way; antiport (Na⁺/Ca²⁺) opposite' },
      { id: 's5', label: 'Vesicular: endocytosis (in) / exocytosis (out)' },
    ],
  },

  examFindings: [
    { sign: 'Na⁺/K⁺-ATPase (3 out / 2 in) using ATP', mechanism: 'Primary active transport (electrogenic pump)', significance: 'key' },
    { sign: 'SGLT moving glucose uphill with Na⁺', mechanism: 'Secondary active symport (Na⁺-coupled)', significance: 'key' },
    { sign: 'Na⁺/Ca²⁺ exchanger extruding Ca²⁺', mechanism: 'Secondary active antiport', significance: 'supportive' },
    { sign: 'Neurotransmitter release at a synapse', mechanism: 'Exocytosis (vesicular transport)', significance: 'supportive' },
    { sign: 'PPIs (omeprazole) reduce gastric acid', mechanism: 'Inhibit the H⁺/K⁺-ATPase (primary active)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Transport using ATP directly', meaning: 'Primary active transport (a pump/ATPase)' },
    { clue: 'Transport using the Na⁺ gradient, no direct ATP', meaning: 'Secondary active transport' },
    { clue: 'Two solutes moving in the same direction', meaning: 'Symport (cotransport)' },
    { clue: 'Large particle taken into the cell in a vesicle', meaning: 'Endocytosis' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Pumps are drug targets (PPIs → H⁺/K⁺-ATPase; digoxin → Na⁺/K⁺-ATPase; SGLT2 inhibitors → glucose reabsorption in diabetes). The Na⁺/K⁺-ATPase sets the gradients underlying the resting potential ([[resting-membrane-potential-nernst]]). Passive routes: [[membrane-transport-passive]].' },
  ],

  mnemonics: [
    { hook: 'Primary = Pump + ATP directly; Secondary = Steals the Na⁺ gradient', expansion: ['Symport same, antiport opposite'] },
    { hook: 'Na⁺ gradient = the cell\'s battery (built by Na⁺/K⁺-ATPase, spent by SGLT etc.)', expansion: ['Coupling'] },
  ],

  traps: [
    {
      questionCategory: 'Is secondary active transport ATP-free?',
      wrongInstinct: 'Secondary active transport requires no energy because it uses no ATP',
      rightAnswer: 'It uses no DIRECT ATP, but it depends on the Na⁺ gradient built by the ATP-consuming Na⁺/K⁺-ATPase — so it is still energy-dependent',
      why: 'The energy is "borrowed" from the Na⁺ gradient; block the Na⁺/K⁺-ATPase and secondary active transport fails too.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Glucose uptake by SGLT in the intestine and proximal tubule, moving glucose against its gradient using the inward Na⁺ gradient, is an example of:',
      options: [
        { id: 'a', text: 'Simple diffusion' },
        { id: 'b', text: 'Facilitated diffusion' },
        { id: 'c', text: 'Secondary active transport (symport)' },
        { id: 'd', text: 'Primary active transport' },
      ],
      answerId: 'c',
      explanation: 'SGLT couples downhill Na⁺ entry (gradient set by the Na⁺/K⁺-ATPase) to uphill glucose transport in the same direction — secondary active symport. GLUT (facilitated) moves glucose down-gradient.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The Na⁺/K⁺-ATPase is best classified as:',
      options: [
        { id: 'a', text: 'Secondary active transport' },
        { id: 'b', text: 'Primary active transport (uses ATP directly)' },
        { id: 'c', text: 'Facilitated diffusion' },
        { id: 'd', text: 'Osmosis' },
      ],
      answerId: 'b',
      explanation: 'The Na⁺/K⁺-ATPase hydrolyses ATP directly to pump 3 Na⁺ out and 2 K⁺ in against their gradients — primary active transport (and electrogenic).',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default membraneTransportActiveVesicular;
