import type { Lecture } from '../../lib/types';

export const tasteOlfactionReceptors: Lecture = {
  id: 'taste-olfaction-receptors',
  title: 'Taste & Olfactory Receptor Histology',
  system: 'neuro',
  source: 'L17 — Histology of Chemical Senses',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L17 Chemoreceptor Histology' },
    { kind: 'mechanism', label: 'Taste buds & olfactory epithelium' },
    { kind: 'exam', label: 'Five tastes; olfactory regeneration' },
  ],

  highYield: [
    'Taste and smell are the CHEMICAL senses, each with a distinct receptor histology. TASTE receptor cells are clustered in TASTE BUDS (onion-shaped, in the tongue papillae — fungiform, foliate, circumvallate); the receptor cells are MODIFIED EPITHELIAL cells (not neurons) that synapse onto gustatory afferents.',
    '**There are FIVE basic taste qualities: SWEET, SOUR, SALTY, BITTER and UMAMI (savoury/glutamate). Salty and sour act through ion channels (Na⁺; H⁺), while sweet, bitter and umami act through G-PROTEIN-COUPLED RECEPTORS (T1R/T2R families) and second messengers.** Taste is carried by CN VII (anterior 2/3 tongue), IX (posterior 1/3) and X (epiglottis) — the pathway is in [[gustatory-olfactory-pathways]].',
    '**OLFACTORY receptors are TRUE BIPOLAR NEURONS in the OLFACTORY EPITHELIUM (roof of the nasal cavity); their cilia bear ~400 types of G-protein-coupled ODORANT RECEPTORS (one type per neuron), and their axons form CN I, passing through the CRIBRIFORM PLATE to the OLFACTORY BULB (synapsing in glomeruli).** Remarkably, olfactory receptor neurons are among the FEW neurons that REGENERATE throughout life (from basal stem cells).',
    '**Clinical/structural notes: a cribriform plate fracture can shear the olfactory nerves → ANOSMIA (and CSF rhinorrhoea); olfaction reaches the cortex/limbic system DIRECTLY without a thalamic relay (explaining smell–memory links, [[limbic-system-emotion-memory]]); and taste receptor cells, like olfactory neurons, TURN OVER continuously.** Loss of smell markedly reduces perceived "taste" (flavour = taste + smell).',
    '**The take-home: taste buds hold modified-epithelial receptor cells for 5 qualities (ion-channel for salt/sour, GPCR for sweet/bitter/umami); olfactory receptors are regenerating bipolar NEURONS with GPCR odorant receptors, axons via the cribriform plate → olfactory bulb, bypassing the thalamus.** Their central pathways are in [[gustatory-olfactory-pathways]]; general receptor coding in [[sensory-receptors-transduction]].',
  ],

  mechanism: {
    title: 'Taste buds (modified epithelial cells, 5 qualities) vs olfactory epithelium (regenerating bipolar neurons, GPCR odorant receptors → bulb)',
    steps: [
      { id: 's1', label: 'Taste receptor cells = modified EPITHELIAL cells in taste buds (papillae)', emphasis: 'key' },
      { id: 's2', label: 'Five tastes: salt/sour (ion channels), sweet/bitter/umami (GPCRs)', emphasis: 'key' },
      { id: 's3', label: 'Olfactory receptors = true BIPOLAR NEURONS in olfactory epithelium', emphasis: 'key' },
      { id: 's4', label: 'Odorant GPCRs on cilia → axons via cribriform plate → olfactory bulb (glomeruli)', emphasis: 'key' },
      { id: 's5', label: 'Olfactory neurons REGENERATE; olfaction bypasses the thalamus', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Onion-shaped clusters of receptor cells in tongue papillae', mechanism: 'Taste buds (modified epithelial receptor cells)', significance: 'key' },
    { sign: 'Five basic taste qualities including umami', mechanism: 'Sweet/bitter/umami (GPCR) + salt/sour (ion channel)', significance: 'key' },
    { sign: 'Bipolar neurons in the nasal roof whose axons form CN I', mechanism: 'Olfactory receptor neurons (olfactory epithelium)', significance: 'key' },
    { sign: 'Anosmia (± CSF rhinorrhoea) after head trauma', mechanism: 'Cribriform plate fracture shearing olfactory nerves', significance: 'key' },
    { sign: 'Sensory neurons that regenerate through life', mechanism: 'Olfactory receptor neurons (from basal stem cells)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The cell type of taste receptors', meaning: 'Modified epithelial cells (in taste buds)' },
    { clue: 'The five basic taste qualities', meaning: 'Sweet, sour, salty, bitter, umami' },
    { clue: 'The cell type of olfactory receptors', meaning: 'Bipolar neurons (that regenerate)' },
    { clue: 'The bony plate the olfactory axons traverse', meaning: 'The cribriform plate (of the ethmoid)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Chemoreceptor histology explains clinical anosmia (cribriform fracture, upper respiratory damage), the regenerative capacity that makes olfactory neurons a research model, and why flavour collapses when smell is lost. Taste uses ion-channel and GPCR mechanisms for the five qualities; the central pathways (CN VII/IX/X for taste; CN I bypassing the thalamus to the limbic system) are in [[gustatory-olfactory-pathways]] and [[limbic-system-emotion-memory]]; general transduction principles in [[sensory-receptors-transduction]].' },
  ],

  mnemonics: [
    { hook: 'Receptors: "Taste = epithelial cells; Smell = neurons (that regrow)"', expansion: ['5 tastes incl. umami', 'Olfactory axons via cribriform plate'] },
    { hook: '"Salt/Sour = channels; Sweet/Bitter/Umami = GPCRs"', expansion: ['Smell bypasses thalamus', 'Flavour = taste + smell'] },
  ],

  traps: [
    {
      questionCategory: 'Cell type of taste vs olfactory receptors',
      wrongInstinct: 'Both taste and smell receptors are the same kind of cell',
      rightAnswer: 'They differ fundamentally: TASTE receptor cells are MODIFIED EPITHELIAL cells that synapse onto separate afferent nerves, whereas OLFACTORY receptors are TRUE BIPOLAR NEURONS whose own axons form cranial nerve I — and, unusually for neurons, they REGENERATE throughout life',
      why: 'The neuronal nature and regenerative ability of olfactory receptors (vs epithelial taste cells) explains why olfactory nerves can be sheared at the cribriform plate, why smell can recover after some injuries, and why olfaction is a model for adult neurogenesis.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Olfactory receptor cells are unusual among sensory receptors because they:',
      options: [
        { id: 'a', text: 'Are modified epithelial cells that never divide' },
        { id: 'b', text: 'Are true bipolar neurons that regenerate from basal stem cells throughout life' },
        { id: 'c', text: 'Relay through the thalamus before the cortex' },
        { id: 'd', text: 'Detect only a single odorant molecule' },
      ],
      answerId: 'b',
      explanation: 'Olfactory receptor cells are genuine bipolar neurons whose axons form cranial nerve I, and — unusually for neurons — they are continually replaced from basal stem cells. They also project directly to the olfactory bulb/cortex without a thalamic relay. Taste receptors, by contrast, are modified epithelial cells.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which set of taste qualities is transduced mainly through G-protein-coupled receptors rather than direct ion channels?',
      options: [
        { id: 'a', text: 'Salty and sour' },
        { id: 'b', text: 'Sweet, bitter and umami' },
        { id: 'c', text: 'Only salty' },
        { id: 'd', text: 'Only sour' },
      ],
      answerId: 'b',
      explanation: 'Sweet, bitter and umami are detected by G-protein-coupled receptors (the T1R/T2R families) acting through second messengers, whereas salty (Na⁺) and sour (H⁺) are sensed more directly via ion channels. There are five basic taste qualities in total.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default tasteOlfactionReceptors;
