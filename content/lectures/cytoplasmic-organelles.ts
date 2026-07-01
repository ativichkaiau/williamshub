import type { Lecture } from '../../lib/types';

export const cytoplasmicOrganelles: Lecture = {
  id: 'cytoplasmic-organelles',
  title: 'Cytoplasmic Organelles & Inclusions',
  system: 'histology',
  source: 'L1 — Cytology',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Histology' },
    { kind: 'lecture', label: 'L1 Cytology' },
    { kind: 'mechanism', label: 'Secretory pathway' },
    { kind: 'exam', label: 'Organelle ID' },
  ],

  highYield: [
    '**Mitochondria = ATP factory.** Double membrane: the **inner membrane folds into cristae** (site of the electron-transport chain / ATP synthase) enclosing the **matrix** (enzymes + **circular mtDNA**, maternally inherited). Abundant in high-energy cells (cardiac/skeletal muscle, kidney tubules). Eosinophilic granular cytoplasm often reflects packed mitochondria.',
    '**The secretory pathway: RER → Golgi → destination.** **RER** (ribosome-studded, basophilic) makes **membrane-bound/secretory/lysosomal proteins**; **SER** (no ribosomes) does **lipid & steroid synthesis, detoxification, and Ca²⁺ storage** (sarcoplasmic reticulum in muscle). Proteins move RER → **cis-Golgi → trans-Golgi** (glycosylation, sorting, packaging) → secretory vesicles.',
    '**Ribosomes & polysomes.** Free ribosomes/polysomes make **cytosolic** proteins; RER-bound ribosomes make exported proteins. rRNA is made in the **nucleolus**. Ribosome-rich cytoplasm is basophilic (e.g. **Nissl bodies** = RER in neurons).',
    '**Lysosomes vs peroxisomes.** **Lysosomes** = membrane-bound **acid hydrolases** (acidic pH via H⁺-ATPase) for intracellular digestion/autophagy (from Golgi). **Peroxisomes** = **catalase** + oxidases; break down H₂O₂ and oxidise **very-long-chain fatty acids** (NOT derived from Golgi; self-replicate).',
    '**Inclusions = non-membranous stored/waste material** (not true organelles): **glycogen** (PAS+, liver/muscle), **lipid droplets** (osmium+), and **pigments** — **lipofuscin** (brown "wear-and-tear" lysosomal residue, ageing marker), **melanin** (melanocytes), and haemosiderin.',
  ],

  mechanism: {
    title: 'Make → modify → ship → digest',
    steps: [
      { id: 's1', label: 'RER synthesises exported/membrane/lysosomal proteins', emphasis: 'key' },
      { id: 's2', label: 'Golgi glycosylates, sorts, packages (cis → trans)', emphasis: 'key' },
      { id: 's3', label: 'Vesicles → secretion, membrane, or lysosome' },
      { id: 's4', label: 'Mitochondria (cristae) generate ATP' },
      { id: 's5', label: 'Lysosome digests; peroxisome handles H₂O₂ + VLCFA' },
    ],
  },

  examFindings: [
    { sign: 'Basophilic granular cytoplasm (Nissl bodies)', mechanism: 'Abundant RER (neurons, plasma cells)', significance: 'key' },
    { sign: 'Pale/eosinophilic cytoplasm in steroid cells', mechanism: 'Abundant SER (adrenal cortex, Leydig, hepatocyte)', significance: 'key' },
    { sign: 'Cristae-filled organelles on TEM', mechanism: 'Mitochondria — inner-membrane folds house the ETC', significance: 'supportive' },
    { sign: 'Brown perinuclear granules in old cells', mechanism: 'Lipofuscin (residual bodies, ageing marker)', significance: 'supportive' },
    { sign: 'PAS-positive cytoplasmic clumps in hepatocytes', mechanism: 'Glycogen inclusions', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A cell secreting lots of protein/enzyme (pancreatic acinar)', meaning: 'Well-developed RER + Golgi + zymogen granules' },
    { clue: 'A steroid-secreting cell (adrenal cortex, Leydig)', meaning: 'Abundant SER, lipid droplets, tubular cristae mitochondria' },
    { clue: 'Membrane-bound organelle full of acid hydrolases', meaning: 'Lysosome' },
    { clue: 'Organelle rich in catalase that oxidises VLCFA', meaning: 'Peroxisome' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Organelle content lets you predict a cell\'s job from its stain (RER = protein secretor, SER = steroid/detox). Organelle changes (SER hyperplasia, megamitochondria, residual bodies) are core to [[subcellular-pathology-alterations]].' },
  ],

  mnemonics: [
    { hook: 'RER = pRotein Reading; SER = Steroids, dEtox, calcium stoRe', expansion: ['Rough makes export protein; smooth makes lipid'] },
    { hook: 'Lysosome = "Lyse" (acid hydrolase); Peroxisome = "Peroxide" (catalase + VLCFA)', expansion: ['Lysosome from Golgi; peroxisome self-replicates'] },
  ],

  traps: [
    {
      questionCategory: 'Organelle vs inclusion',
      wrongInstinct: 'Glycogen and lipid droplets are organelles',
      rightAnswer: 'They are INCLUSIONS — non-membranous stored material, not metabolically active organelles',
      why: 'Organelles (mito, ER, Golgi, lysosome) carry out functions; inclusions (glycogen, lipid, pigment) are stored products or waste.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A cell specialised for steroid hormone synthesis would be expected to have abundant:',
      options: [
        { id: 'a', text: 'Rough endoplasmic reticulum' },
        { id: 'b', text: 'Smooth endoplasmic reticulum' },
        { id: 'c', text: 'Free ribosomes only' },
        { id: 'd', text: 'Peroxisomes' },
      ],
      answerId: 'b',
      explanation: 'SER synthesises lipids and steroids (and detoxifies) — abundant in adrenal cortex, Leydig cells, and hepatocytes. RER dominates protein-secreting cells.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which organelle contains catalase and oxidises very-long-chain fatty acids, and is NOT derived from the Golgi?',
      options: [
        { id: 'a', text: 'Lysosome' },
        { id: 'b', text: 'Mitochondrion' },
        { id: 'c', text: 'Peroxisome' },
        { id: 'd', text: 'Secretory vesicle' },
      ],
      answerId: 'c',
      explanation: 'Peroxisomes use catalase to detoxify H₂O₂ and β-oxidise VLCFA; they arise by growth/division of existing peroxisomes, not from the Golgi (unlike lysosomes).',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default cytoplasmicOrganelles;
