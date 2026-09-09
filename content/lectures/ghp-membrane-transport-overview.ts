import type { Lecture } from '../../lib/types';
import { MEMBRANE_TRANSPORT_TYPES } from '../../lib/figures';

export const ghpMembraneTransportOverview: Lecture = {
  id: 'ghp-membrane-transport-overview',
  title: 'Diffusion vs Active Transport: The Framework',
  system: 'physiology',
  source: 'Ch 4 — Transport of Substances Through the Cell Membrane',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'Ch 4 Membrane Transport' },
    { kind: 'mechanism', label: 'Simple vs facilitated diffusion' },
    { kind: 'mechanism', label: 'Channel gating' },
    { kind: 'exam', label: 'Saturable vs linear kinetics' },
  ],

  highYield: [
    '**The lipid bilayer is the obstacle, and lipid solubility is the passport.** **O₂, CO₂, N₂, alcohols and steroid hormones dissolve straight through**; **ions and glucose cannot** and must use a protein. Permeability rises with **lipid solubility (oil-to-water partition coefficient)** and falls with **molecular size**. Water is the exception that proves the rule — polar, yet it crosses very fast because it is tiny and because **aquaporins** exist.',
    '**Two questions sort every transport process. Which way relative to the gradient, and through what?** **Down** the electrochemical gradient = **diffusion, passive, no ATP, driven by thermal motion alone**. **Up** the gradient = **active transport, which must be paid for** (directly by ATP, or indirectly by an ion gradient). Through the bilayer or a channel = **simple diffusion**; through a carrier that changes conformation = **facilitated diffusion**.',
    '**Carrier-mediated transport has kinetics you can recognise on a graph: specific, SATURABLE (a Vmax when every carrier is occupied) and competitively inhibited.** **Simple diffusion is linear and never saturates.** That plateau-versus-straight-line contrast is the single most reliable way an exam asks you to identify facilitated diffusion (e.g. **GLUT-mediated glucose entry**) — and note that saturation kinetics alone do NOT distinguish facilitated diffusion from active transport, since both use carriers.',
    '**Channels are selective and gated, not simply holes.** Selectivity comes from **pore diameter plus the charge lining the pore**. **Voltage gating**: the sodium channel has an **activation gate (opens fast on depolarisation)** and a separate **inactivation gate (closes slightly later)** — two gates in series explain refractoriness. **Ligand gating**: the **nicotinic ACh receptor** opens when transmitter binds. There is also **mechanical gating** (stretch, hair cells). Individual channels flick **open or shut in an all-or-none way**; what you measure is the fraction of time they are open.',
    '**Net diffusion rate = permeability × surface area × driving force.** It rises with the **concentration difference**, the **membrane permeability** (lipid solubility, number of open channels, thinness, area) and **temperature**, and falls with **molecular size** and **membrane thickness**. For a charged solute the driving force is **electrochemical — the concentration gradient plus the membrane potential**; for water it is the **osmotic (plus hydrostatic) pressure difference**. Reading only the chemical gradient for an ion is the classic error.',
    '**Clinical anchor: transport-protein failures are whole diseases.** **CFTR (a chloride channel) → cystic fibrosis**; **aquaporin-2 unresponsive to ADH → nephrogenic diabetes insipidus**; **local anaesthetics and tetrodotoxin plug voltage-gated Na⁺ channels**; **sulfonylureas close the β-cell K-ATP channel** to release insulin. A channel is a drug target as often as it is a physiological curiosity.',
  ],

  mechanism: {
    title: 'Ask two questions: which way relative to the gradient, and through what?',
    steps: [
      { id: 's1', label: 'Lipid-soluble or very small? → straight through the bilayer' },
      { id: 's2', label: 'If not → a membrane protein is obligatory: channel or carrier' },
      { id: 's3', label: 'Moving DOWN the electrochemical gradient → passive, no ATP', emphasis: 'key' },
      { id: 's4', label: 'Carrier + downhill = facilitated diffusion → saturable', emphasis: 'key' },
      { id: 's5', label: 'Moving UP the gradient → active: ATP directly, or an ion gradient' },
      { id: 's6', label: 'Net rate = gradient × permeability × area', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Uptake rate plateaus as the external concentration keeps rising', mechanism: 'Every carrier is occupied — transport maximum of a carrier-mediated process', significance: 'key' },
    { sign: 'Uptake rate rises linearly with concentration, with no ceiling', mechanism: 'Simple diffusion — no protein to saturate', significance: 'key' },
    { sign: 'A chemically similar sugar slows glucose uptake', mechanism: 'Competition for the same carrier binding site', significance: 'key' },
    { sign: 'O₂ and CO₂ equilibrate across the alveolar wall almost instantly', mechanism: 'High lipid solubility across a very thin, very large-area membrane', significance: 'supportive' },
    { sign: 'Thick, salty, dehydrated secretions in cystic fibrosis', mechanism: 'Defective CFTR chloride channel — water no longer follows Cl⁻ onto the surface', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Transport that is specific, saturable and competitively inhibited', meaning: 'Carrier-mediated — facilitated diffusion or active transport (kinetics alone cannot separate them)' },
    { clue: 'Transport that requires a protein but no energy and cannot go uphill', meaning: 'Facilitated diffusion' },
    { clue: 'Pore that opens on membrane depolarisation', meaning: 'Voltage-gated channel (e.g. the Na⁺ channel, with activation and inactivation gates)' },
    { clue: 'Pore that opens when a transmitter binds', meaning: 'Ligand-gated channel (e.g. the nicotinic ACh receptor)' },
    { clue: 'The true driving force acting on an ion', meaning: 'The electrochemical gradient — chemical gradient plus membrane potential' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'This is the framework every later transport topic hangs on: the pump that pays for uphill movement is in [[ghp-primary-active-transport-na-k-atpase]], and the gradient-funded carriers are in [[ghp-secondary-active-transport]]. Water movement across the same bilayer, and the tonicity rules that follow from it, are developed in [[diffusion-osmosis-basics]] and [[osmolarity-tonicity-cell-volume]].' },
    { logic: 'Gating is the bridge to excitability', detail: 'A voltage-gated channel is only a protein that senses the membrane potential and opens — but chained together across a membrane it becomes the action potential, taken up in [[ghp-resting-membrane-potential]]. Local anaesthetics, antiarrhythmics and many toxins work by binding these gates in a specific conformational state.' },
  ],

  mnemonics: [
    { hook: 'Straight line = simple; curve with a ceiling = carrier', expansion: ['Simple diffusion never saturates', 'Facilitated diffusion and active transport both plateau'] },
    { hook: 'PASsive goes with the gradient; ACTive goes Against it and costs ATP', expansion: ['Passive: simple + facilitated diffusion, osmosis', 'Active: primary (ATP) and secondary (ion gradient)'] },
  ],

  traps: [
    {
      questionCategory: 'Protein involvement is not the same as energy use',
      wrongInstinct: 'Glucose entering a muscle cell through GLUT4 uses a carrier protein, so it must be active transport',
      rightAnswer: 'It is facilitated diffusion — a carrier is used, but movement is strictly downhill and no energy is spent',
      why: 'The defining question is the direction relative to the electrochemical gradient, not whether a protein is involved.',
    },
    {
      questionCategory: 'Which gradient is doing the driving',
      wrongInstinct: 'An ion always moves from where it is concentrated to where it is dilute',
      rightAnswer: 'An ion follows its ELECTROCHEMICAL gradient — a membrane potential can drive it against its concentration gradient',
      why: 'Cl⁻ sitting at electrochemical equilibrium is the everyday example: unequal concentrations, zero net flux.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Uptake of a solute rises with concentration and then plateaus, and is reduced by a structurally similar molecule. Adding a metabolic poison that abolishes ATP has no effect on uptake. The mechanism is:',
      options: [
        { id: 'a', text: 'Simple diffusion through the bilayer' },
        { id: 'b', text: 'Facilitated diffusion' },
        { id: 'c', text: 'Primary active transport' },
        { id: 'd', text: 'Secondary active transport' },
      ],
      answerId: 'b',
      explanation: 'Saturation and competitive inhibition prove a carrier; ATP independence excludes primary active transport, and secondary active transport ultimately fails once the ion gradient runs down. Simple diffusion would be linear and non-competitive.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which factor would MOST increase the net rate of oxygen diffusion across the alveolar membrane?',
      options: [
        { id: 'a', text: 'Increasing the thickness of the membrane' },
        { id: 'b', text: 'Increasing the partial pressure difference across the membrane' },
        { id: 'c', text: 'Decreasing the available surface area' },
        { id: 'd', text: 'Decreasing temperature' },
      ],
      answerId: 'b',
      explanation: 'Net diffusion is proportional to the driving-force difference, permeability and area, and inversely proportional to thickness. Raising the partial-pressure gradient raises flux; thickening the membrane, shrinking the area or cooling all reduce it.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'The voltage-gated sodium channel becomes unavailable shortly after it opens, even while the membrane is still depolarised. This is because:',
      options: [
        { id: 'a', text: 'The channel runs out of ATP' },
        { id: 'b', text: 'A separate inactivation gate closes after the activation gate opens' },
        { id: 'c', text: 'Sodium ions are depleted outside the cell' },
        { id: 'd', text: 'The channel is competitively inhibited by potassium' },
      ],
      answerId: 'b',
      explanation: 'The channel has two gates in series with different kinetics: activation opens quickly on depolarisation, inactivation closes more slowly and reopens only after repolarisation. That delay is the basis of the refractory period. Channels do not consume ATP, and extracellular sodium is not measurably depleted.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Membrane transport mechanisms', svg: MEMBRANE_TRANSPORT_TYPES, caption: 'Passive (simple diffusion, channels, carriers, osmosis) versus active (primary ATP-driven, secondary gradient-driven, vesicular). Passive goes down the gradient; active goes against it.' },
  ],
};

export default ghpMembraneTransportOverview;
