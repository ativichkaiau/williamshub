import type { Lecture } from '../../lib/types';
import { CELL_SIGNALING_RECEPTORS } from '../../lib/figures';

export const cellSignalingModesReceptors: Lecture = {
  id: 'cell-signaling-modes-receptors',
  title: 'Cell Communication: Signalling Modes & Receptor Types',
  system: 'physiology',
  source: 'L7 — Cell Communication',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'L7 Cell Communication' },
    { kind: 'mechanism', label: 'Receptor classes' },
    { kind: 'exam', label: 'Signalling range · receptors' },
  ],

  highYield: [
    '**Cells communicate over different ranges.** **Endocrine** = hormone via the **blood** to distant targets. **Paracrine** = local diffusion to **neighbouring** cells. **Autocrine** = a cell signals **itself**. **Synaptic** = neuron to target across a cleft. (Also **juxtacrine** = direct contact, and gap-junction coupling.)',
    '**Four major receptor classes.** (1) **Ligand-gated ion channels** — ligand opens a channel → **fast (ms)** ion flux (nicotinic ACh, GABA-A). (2) **G-protein-coupled receptors (GPCRs, 7-transmembrane)** — activate a **G protein → second messengers** (adrenergic, muscarinic — the largest drug-target class). (3) **Enzyme-linked receptors (e.g. receptor tyrosine kinases)** — ligand triggers **autophosphorylation → kinase cascade** (insulin, growth factors). (4) **Intracellular/nuclear receptors** — for **lipophilic** ligands → alter **gene transcription** (steroids, thyroid hormone).',
    '**Lipophilic vs hydrophilic ligands take different routes.** **Water-soluble** signals (peptides, catecholamines) cannot cross the membrane → use **surface receptors** → fast, short-lived effects. **Lipid-soluble** signals (steroids, thyroid hormone) cross the membrane → use **intracellular receptors** → slower, longer-lasting genomic effects.',
    '**Signal transduction converts an external signal into an intracellular response**, usually **amplifying** it (one receptor → many second-messenger molecules → many effectors). Specificity comes from which receptors a cell expresses.',
    '**Signalling is terminated** (feedback, receptor desensitisation/internalisation, GTP hydrolysis, phosphatases) — essential so responses are transient and tunable.',
  ],

  mechanism: {
    title: 'Range of signal → matching receptor class',
    steps: [
      { id: 's1', label: 'Range: endocrine/paracrine/autocrine/synaptic', emphasis: 'key' },
      { id: 's2', label: 'Ligand-gated channel = fast ion flux', emphasis: 'key' },
      { id: 's3', label: 'GPCR = G protein → second messengers', emphasis: 'key' },
      { id: 's4', label: 'RTK = autophosphorylation → cascade (insulin/GF)' },
      { id: 's5', label: 'Intracellular receptor = lipophilic ligand → transcription' },
    ],
  },

  examFindings: [
    { sign: 'Hormone acting on a distant organ via blood', mechanism: 'Endocrine signalling', significance: 'key' },
    { sign: 'Insulin binding a receptor tyrosine kinase', mechanism: 'Enzyme-linked receptor (autophosphorylation cascade)', significance: 'key' },
    { sign: 'Adrenaline acting through a β-adrenergic GPCR', mechanism: 'GPCR → second messenger (cAMP)', significance: 'key' },
    { sign: 'Cortisol altering gene transcription', mechanism: 'Intracellular/nuclear receptor (lipophilic ligand)', significance: 'supportive' },
    { sign: 'Nicotinic ACh receptor opening in milliseconds', mechanism: 'Ligand-gated ion channel (fast)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Fastest receptor-mediated response', meaning: 'Ligand-gated ion channel' },
    { clue: 'Receptor class of most hormones/neurotransmitters (and drugs)', meaning: 'GPCR' },
    { clue: 'Receptor for a steroid hormone', meaning: 'Intracellular/nuclear receptor' },
    { clue: 'Signalling to neighbouring cells by local diffusion', meaning: 'Paracrine' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'GPCRs are the target of ~a third of all drugs; RTK signalling is targeted in cancer; nuclear receptors are targeted by steroids. The downstream messengers: [[second-messenger-systems]]. Synaptic signalling detail: [[synaptic-transmission-epsp-ipsp]].' },
  ],

  mnemonics: [
    { hook: 'Range: Endocrine (blood-far), Paracrine (neighbour), Autocrine (self), Synaptic', expansion: ['Distance shrinks left→right'] },
    { hook: 'Receptors: "Channel, GPCR, Kinase, Nuclear" (fast → slow/genomic)', expansion: ['Lipophilic → intracellular receptor'] },
  ],

  traps: [
    {
      questionCategory: 'Route of steroid vs peptide hormones',
      wrongInstinct: 'Steroid hormones act on cell-surface receptors like peptide hormones',
      rightAnswer: 'Lipophilic steroids/thyroid hormone cross the membrane to INTRACELLULAR (nuclear) receptors → gene transcription; water-soluble peptides use SURFACE receptors',
      why: 'Solubility dictates the route: lipid-soluble → intracellular/genomic (slow, lasting); water-soluble → surface/second-messenger (fast, brief).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A lipid-soluble steroid hormone produces its effect primarily by:',
      options: [
        { id: 'a', text: 'Opening a ligand-gated ion channel' },
        { id: 'b', text: 'Binding an intracellular (nuclear) receptor and altering gene transcription' },
        { id: 'c', text: 'Activating a receptor tyrosine kinase at the surface' },
        { id: 'd', text: 'Coupling to a G protein at the membrane' },
      ],
      answerId: 'b',
      explanation: 'Being lipophilic, steroids cross the membrane and bind intracellular/nuclear receptors to modulate gene transcription — a slower, longer-lasting genomic effect than surface-receptor signalling.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Signalling in which a cell secretes a molecule that acts on itself is termed:',
      options: [
        { id: 'a', text: 'Endocrine' },
        { id: 'b', text: 'Paracrine' },
        { id: 'c', text: 'Autocrine' },
        { id: 'd', text: 'Synaptic' },
      ],
      answerId: 'c',
      explanation: 'Autocrine signalling acts on the secreting cell itself. Endocrine travels via blood to distant targets, paracrine acts on neighbours, and synaptic acts across a synapse.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Signalling modes & receptors', svg: CELL_SIGNALING_RECEPTORS, caption: 'Endocrine/paracrine/autocrine/synaptic; 4 receptor classes (ion channel, GPCR, RTK, nuclear) and GPCR second-messenger pathways.' },
  ],
};

export default cellSignalingModesReceptors;
