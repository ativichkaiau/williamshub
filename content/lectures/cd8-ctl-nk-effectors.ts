import type { Lecture } from '../../lib/types';

export const cd8CtlNkEffectors: Lecture = {
  id: 'cd8-ctl-nk-effectors',
  title: 'CD8 Cytotoxic T Cells & Effector Mechanisms',
  system: 'immune',
  source: 'L5 — Cell-Mediated Immunity',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Immunology' },
    { kind: 'lecture', label: 'L5 Cell-Mediated Immunity' },
    { kind: 'mechanism', label: 'CTL killing' },
    { kind: 'exam', label: 'Perforin/granzyme · Fas' },
  ],

  highYield: [
    '**CD8⁺ cytotoxic T cells (CTLs) kill cells displaying foreign peptide on MHC class I** — virus-infected and tumour cells. Because **all nucleated cells express MHC I**, any cell showing a viral peptide can be recognised and eliminated.',
    '**Two killing mechanisms.** (1) **Perforin + granzyme:** perforin forms pores; granzymes enter and trigger **apoptosis** (caspase activation). (2) **Fas–FasL:** CTL **FasL engages Fas (CD95)** on the target → apoptosis. CTLs kill serially and spare bystanders.',
    '**Macrophage activation (delayed-type hypersensitivity arm).** **Th1 cells activate macrophages** via **IFN-γ + CD40L–CD40** → enhanced killing of ingested intracellular microbes, reactive oxygen/nitrogen species, and **granuloma** formation (e.g. TB). Failure of this axis → disseminated mycobacterial disease.',
    '**ADCC and NK back-up.** **NK cells** kill "missing-self" (MHC-I-low) targets and perform **ADCC** via CD16 on IgG-coated cells — covering the cells that evade CTLs by down-regulating MHC I (see [[innate-nk-interferon]]).',
    '**Cell-mediated immunity is the arm against intracellular threats**: viruses, intracellular bacteria, fungi, and tumours — complementing antibody (humoral) immunity, which handles extracellular microbes and toxins.',
  ],

  mechanism: {
    title: 'Recognise on MHC I → deliver apoptosis',
    steps: [
      { id: 's1', label: 'CD8 CTL recognises peptide on MHC I (any nucleated cell)', emphasis: 'key' },
      { id: 's2', label: 'Perforin pores + granzyme → apoptosis', emphasis: 'key' },
      { id: 's3', label: 'FasL–Fas (CD95) → apoptosis' },
      { id: 's4', label: 'Th1 IFN-γ + CD40L activate macrophages (granuloma)', emphasis: 'key' },
      { id: 's5', label: 'NK/ADCC covers MHC-I-low escapees' },
    ],
  },

  examFindings: [
    { sign: 'Target-cell apoptosis via pore + protease', mechanism: 'Perforin + granzyme (CTL/NK)', significance: 'key' },
    { sign: 'FasL–Fas engagement killing a target', mechanism: 'Death-receptor apoptosis pathway', significance: 'key' },
    { sign: 'Granuloma with activated macrophages (TB)', mechanism: 'Th1 IFN-γ + CD40L macrophage activation', significance: 'key' },
    { sign: 'CD8 CTL recognising a viral peptide', mechanism: 'Presented on MHC class I of the infected cell', significance: 'supportive' },
    { sign: 'Disseminated mycobacterial/salmonella infection', mechanism: 'IL-12/IFN-γ axis defect (Th1–macrophage)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Molecules a CTL uses to induce apoptosis', meaning: 'Perforin + granzyme (and FasL–Fas)' },
    { clue: 'MHC class on which CTLs recognise antigen', meaning: 'MHC class I' },
    { clue: 'Signal from Th1 that activates macrophages', meaning: 'IFN-γ (+ CD40L)' },
    { clue: 'Arm of immunity against intracellular microbes and tumours', meaning: 'Cell-mediated immunity (T cells)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'CTL biology underlies antiviral/antitumour immunity and transplant rejection; the Th1–macrophage axis is essential against TB (anti-TNF drugs reactivate it). CAR-T therapy engineers CTL specificity. Antigen source for MHC I: [[antigen-processing-presentation]].' },
  ],

  mnemonics: [
    { hook: 'CTL kills by "Perforin + Granzyme" and "Fas–FasL"', expansion: ['CD8 sees MHC I on any nucleated cell'] },
    { hook: 'Th1 "licenses" the macrophage (IFN-γ + CD40L) → granuloma', expansion: ['Cell-mediated = intracellular defence'] },
  ],

  traps: [
    {
      questionCategory: 'Which MHC do CTLs use?',
      wrongInstinct: 'Cytotoxic CD8 T cells recognise antigen presented on MHC class II',
      rightAnswer: 'CD8 CTLs recognise antigen on MHC class I (on all nucleated cells); CD4 helpers use MHC II',
      why: 'Rule of 8: CD8 × MHC I = 8. MHC I displays endogenous/viral peptides for CTL surveillance.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A cytotoxic CD8⁺ T cell induces apoptosis in a virus-infected cell primarily by:',
      options: [
        { id: 'a', text: 'Secreting IgG antibodies' },
        { id: 'b', text: 'Releasing perforin and granzymes (and FasL–Fas signalling)' },
        { id: 'c', text: 'Activating the classical complement pathway' },
        { id: 'd', text: 'Phagocytosing the cell' },
      ],
      answerId: 'b',
      explanation: 'CTLs kill via perforin (pore formation) + granzymes (caspase-mediated apoptosis) and the FasL–Fas death-receptor pathway. They recognise viral peptide on MHC I.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Formation of a tuberculous granuloma depends on Th1 cells activating macrophages via:',
      options: [
        { id: 'a', text: 'IL-4 and IL-5' },
        { id: 'b', text: 'IFN-γ and CD40L' },
        { id: 'c', text: 'IL-17' },
        { id: 'd', text: 'Perforin' },
      ],
      answerId: 'b',
      explanation: 'Th1 cells secrete IFN-γ and express CD40L to activate macrophages, enhancing killing of intracellular microbes and forming granulomas. This axis (IL-12/IFN-γ) is essential against mycobacteria.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default cd8CtlNkEffectors;
