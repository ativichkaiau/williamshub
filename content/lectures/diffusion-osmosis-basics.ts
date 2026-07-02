import type { Lecture } from '../../lib/types';

export const diffusionOsmosisBasics: Lecture = {
  id: 'diffusion-osmosis-basics',
  title: 'Diffusion & Osmosis: Movement of Solutes and Water',
  system: 'physiology',
  source: 'L1 — Transport of Solutes & Water',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'L1 Transport of Solutes & Water' },
    { kind: 'mechanism', label: 'Passive movement' },
    { kind: 'exam', label: 'Diffusion factors' },
  ],

  highYield: [
    '**Diffusion = net movement of solute from HIGH to LOW concentration** (down its gradient) due to random thermal motion — **passive, requiring no energy**, until equilibrium. It is how O₂, CO₂, and small lipid-soluble molecules cross membranes.',
    '**Rate of diffusion (Fick\'s law) rises with:** a steeper **concentration gradient**, greater **membrane surface area**, higher **temperature**, and **lipid solubility/permeability**; it falls with greater **molecular size** and membrane **thickness/distance** (rate ∝ 1/distance).',
    '**Charged/large water-soluble solutes cannot cross the lipid bilayer directly** — they need **channels or carriers** (see [[membrane-transport-passive]]). Gases and lipophilic molecules diffuse straight through.',
    '**Osmosis = diffusion of WATER across a semipermeable membrane**, from **low solute concentration (high water) to high solute concentration (low water)**. Water moves toward the more concentrated compartment until osmotic equilibrium.',
    '**Osmotic pressure** is the pressure needed to oppose (stop) osmosis; it increases with the **number of solute particles**. This is the driving force behind fluid distribution between body compartments and underlies **tonicity** (see [[osmolarity-tonicity-cell-volume]]).',
  ],

  mechanism: {
    title: 'Down the gradient — solute (diffusion) & water (osmosis)',
    steps: [
      { id: 's1', label: 'Diffusion: solute high → low, passive, to equilibrium', emphasis: 'key' },
      { id: 's2', label: 'Faster with ↑gradient, ↑area, ↑temp, ↑lipid solubility', emphasis: 'key' },
      { id: 's3', label: 'Slower with ↑size, ↑membrane thickness/distance' },
      { id: 's4', label: 'Osmosis: water moves toward higher solute concentration', emphasis: 'key' },
      { id: 's5', label: 'Osmotic pressure ∝ number of particles' },
    ],
  },

  examFindings: [
    { sign: 'O₂ and CO₂ crossing the alveolar membrane', mechanism: 'Simple diffusion (lipid-soluble gases, down gradient)', significance: 'key' },
    { sign: 'Diffusion rate halves as distance doubles', mechanism: 'Rate ∝ 1/distance (Fick)', significance: 'supportive' },
    { sign: 'Water moving toward the saltier compartment', mechanism: 'Osmosis (toward higher solute concentration)', significance: 'key' },
    { sign: 'Impaired gas exchange in pulmonary fibrosis', mechanism: 'Increased membrane thickness slows diffusion', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Passive movement of a solute down its gradient', meaning: 'Diffusion (no ATP)' },
    { clue: 'Movement of water across a semipermeable membrane', meaning: 'Osmosis' },
    { clue: 'Factor that slows diffusion', meaning: 'Larger molecular size or greater membrane thickness' },
    { clue: 'Pressure that stops osmosis', meaning: 'Osmotic pressure (∝ particle number)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Diffusion governs gas exchange (impaired in fibrosis/oedema) and drug absorption; osmosis governs fluid shifts and IV-fluid therapy. Quantifying solute concentration → [[osmolarity-tonicity-cell-volume]]; protein-mediated transport → [[membrane-transport-passive]].' },
  ],

  mnemonics: [
    { hook: 'Diffusion = solute down its gradient; Osmosis = water toward the solute', expansion: ['Both passive, no ATP'] },
    { hook: 'Fick: rate ↑ with gradient, area, solubility; ↓ with size, distance', expansion: ['Thicker membrane = slower'] },
  ],

  traps: [
    {
      questionCategory: 'Direction of osmosis',
      wrongInstinct: 'In osmosis, water moves toward the compartment with lower solute concentration',
      rightAnswer: 'Water moves toward the compartment with HIGHER solute concentration (lower water concentration)',
      why: 'Water follows solute: it diffuses down its own gradient, from high water (dilute) to low water (concentrated).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'According to Fick\'s law, the rate of simple diffusion across a membrane is INCREASED by:',
      options: [
        { id: 'a', text: 'A larger molecular size' },
        { id: 'b', text: 'A greater diffusion distance' },
        { id: 'c', text: 'A steeper concentration gradient' },
        { id: 'd', text: 'A thicker membrane' },
      ],
      answerId: 'c',
      explanation: 'Diffusion rate rises with a steeper concentration gradient, larger surface area, higher temperature, and lipid solubility; it falls with larger molecular size and greater membrane thickness/distance.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Osmosis is best defined as the movement of:',
      options: [
        { id: 'a', text: 'Solute from high to low concentration' },
        { id: 'b', text: 'Water across a semipermeable membrane toward higher solute concentration' },
        { id: 'c', text: 'Ions against their gradient using ATP' },
        { id: 'd', text: 'Large molecules by vesicles' },
      ],
      answerId: 'b',
      explanation: 'Osmosis is the passive diffusion of water across a semipermeable membrane from low solute (high water) toward high solute (low water) concentration.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default diffusionOsmosisBasics;
