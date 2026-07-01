import type { Lecture } from '../../lib/types';

export const ecmAdhesionIntegrinsClinical: Lecture = {
  id: 'ecm-adhesion-integrins-clinical',
  title: 'Cell–Matrix Adhesion, Integrins & Collagen Turnover',
  system: 'histology',
  source: 'L9 — Extracellular Matrix',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Histology' },
    { kind: 'lecture', label: 'L9 ECM' },
    { kind: 'mechanism', label: 'Integrin signalling' },
    { kind: 'exam', label: 'Fibronectin/laminin/integrin' },
  ],

  highYield: [
    '**Adhesive glycoproteins glue cells to the ECM.** **Fibronectin** links cells to collagen/ground substance in connective tissue; **laminin** is the key adhesive of the **basal lamina** (binds type IV collagen, integrins, and heparan sulfate). Both display cell-binding motifs (e.g. RGD) recognised by integrins.',
    '**Integrins = the transmembrane bridge.** They connect **ECM ↔ cytoskeleton** (actin at focal adhesions; keratin at hemidesmosomes) and transduce **outside-in and inside-out signals** — controlling adhesion, migration, survival (anoikis if detached), and platelet aggregation (GpIIb/IIIa).',
    '**The basement membrane recap.** Laminin + type IV collagen + perlecan (heparan sulfate) form the sheet that anchors epithelium, acts as a **filtration barrier** (glomerulus), and must be **breached for carcinoma to become invasive** (see [[epithelial-surface-basement-membrane]]).',
    '**ECM turnover is dynamic.** **Matrix metalloproteinases (MMPs)** degrade collagen/ECM in remodelling, wound healing, and tumour invasion; tissue inhibitors (TIMPs) balance them. Breakdown products enter the blood as measurable markers.',
    '**Clinical thread — bone collagen markers.** Type I collagen crosslinks such as **CTX (C-telopeptide)** and **NTX** rise with **osteoclastic bone resorption**; measuring them (e.g. in postmenopausal women) monitors **osteoporosis** and response to antiresorptive therapy — a direct histology→clinic bridge.',
  ],

  mechanism: {
    title: 'Anchor, signal, remodel',
    steps: [
      { id: 's1', label: 'Fibronectin (CT) / laminin (basal lamina) = adhesive glue', emphasis: 'key' },
      { id: 's2', label: 'Integrins bridge ECM ↔ cytoskeleton + signal', emphasis: 'key' },
      { id: 's3', label: 'Basement membrane = filtration + anchorage barrier' },
      { id: 's4', label: 'MMPs remodel ECM (healing, invasion); TIMPs oppose' },
      { id: 's5', label: 'Collagen-I crosslinks (CTX/NTX) = bone-resorption markers', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Adhesive glycoprotein of the basal lamina', mechanism: 'Laminin (binds integrins + type IV collagen)', significance: 'key' },
    { sign: 'Cell loses ECM contact and undergoes apoptosis', mechanism: 'Anoikis (integrin-dependent survival signal lost)', significance: 'supportive' },
    { sign: 'Carcinoma breaching the basement membrane', mechanism: 'MMP-mediated invasion → malignancy', significance: 'key' },
    { sign: 'Elevated serum CTX-1 in a postmenopausal woman', mechanism: 'Increased osteoclastic type-I collagen breakdown', significance: 'key' },
  ],

  investigations: [
    { clue: 'Transmembrane receptor linking ECM to the actin cytoskeleton', meaning: 'Integrin' },
    { clue: 'Main adhesive molecule of the basal lamina', meaning: 'Laminin' },
    { clue: 'Enzymes that degrade collagen during tumour invasion', meaning: 'Matrix metalloproteinases (MMPs)' },
    { clue: 'Blood test reflecting bone collagen resorption', meaning: 'CTX / NTX (type I collagen crosslinks)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Integrin/adhesion biology underlies metastasis, wound healing, and antiplatelet drugs (GpIIb/IIIa inhibitors). Collagen-turnover markers guide osteoporosis therapy. Basement-membrane breach defines invasive cancer. Fibre/GAG composition: [[ecm-fibers-ground-substance]].' },
  ],

  mnemonics: [
    { hook: 'Integrin = "INTEGRates" ECM with the cytoskeleton (in + out signalling)', expansion: ['Laminin = basal lamina; fibronectin = CT'] },
    { hook: 'CTX/NTX up = bone being Torn (resorption)', expansion: ['Type I collagen crosslinks'] },
  ],

  traps: [
    {
      questionCategory: 'Fibronectin vs laminin location',
      wrongInstinct: 'Laminin is the main adhesive protein of general connective tissue',
      rightAnswer: 'Laminin = basal LAMINA adhesive; fibronectin = general connective-tissue adhesion (cell ↔ collagen)',
      why: 'Match the name: Laminin → basal Lamina; fibronectin → the fibrous connective-tissue matrix.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The transmembrane receptors that mechanically and chemically link the extracellular matrix to the intracellular cytoskeleton are:',
      options: [
        { id: 'a', text: 'Cadherins' },
        { id: 'b', text: 'Integrins' },
        { id: 'c', text: 'Selectins' },
        { id: 'd', text: 'Connexins' },
      ],
      answerId: 'b',
      explanation: 'Integrins bridge ECM (laminin/fibronectin) to the actin/keratin cytoskeleton and transduce signals (survival, migration). Cadherins mediate cell–cell adhesion; connexins form gap junctions.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A rising serum C-telopeptide (CTX-1) level in a postmenopausal woman most directly reflects:',
      options: [
        { id: 'a', text: 'Increased type I collagen synthesis' },
        { id: 'b', text: 'Increased osteoclastic bone resorption (type I collagen breakdown)' },
        { id: 'c', text: 'Vitamin C deficiency' },
        { id: 'd', text: 'Cartilage type II collagen turnover' },
      ],
      answerId: 'b',
      explanation: 'CTX-1 is a type I collagen crosslink released when osteoclasts resorb bone; elevated levels indicate increased bone turnover/resorption, useful in monitoring osteoporosis.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default ecmAdhesionIntegrinsClinical;
