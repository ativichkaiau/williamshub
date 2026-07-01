import type { Lecture } from '../../lib/types';

export const immunityVirusesFungiParasites: Lecture = {
  id: 'immunity-viruses-fungi-parasites',
  title: 'Immunity to Viruses, Fungi & Parasites + Microbial Evasion',
  system: 'immune',
  source: 'L10 — Immunity to Microbes',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Immunology' },
    { kind: 'lecture', label: 'L10 Immunity to Microbes' },
    { kind: 'mechanism', label: 'Antiviral/antiparasite' },
    { kind: 'exam', label: 'Th2/IgE · evasion' },
  ],

  highYield: [
    '**Antiviral immunity — two phases.** Innate: **type I interferon (IFN-α/β)** induces an antiviral state and **NK cells** kill infected ("missing-self") cells. Adaptive: **CD8 CTLs** kill virus-infected cells (viral peptide on MHC I) and **neutralising antibody** blocks free virus from entering cells.',
    '**Neutralising antibody vs antibody-dependent enhancement (ADE).** Antibody normally **neutralises** virus. But some non-neutralising antibodies can paradoxically **enhance** viral entry into Fc-receptor cells — the classic example is **secondary dengue** infection (severe dengue), studied in Thailand.',
    '**Antifungal immunity** relies on **neutrophils and macrophages** with **Th17 and Th1** help; neutropenic and T-cell-deficient patients are prone to invasive fungal disease (Candida, Aspergillus, Cryptococcus, Pneumocystis).',
    '**Antiparasite immunity (helminths) is a Th2 response:** **IL-4/5/13 → IgE + eosinophils + mast cells**; **alternatively activated macrophages (AAMs)** wall off tissue-dwelling stages (e.g. around schistosome eggs). Protozoa (e.g. malaria) often need cell-mediated immunity.',
    '**Microbes evade immunity** by: **antigenic variation** (influenza drift/shift, trypanosomes, HIV), **latency** (herpesviruses), **down-regulating MHC I** (→ but then NK targets), **blocking phagolysosome fusion** (TB), **capsules** (anti-phagocytic), and **inducing immunosuppression** — driving the arms race between host and pathogen.',
  ],

  mechanism: {
    title: 'Different microbe → different effector arm',
    steps: [
      { id: 's1', label: 'Virus: type I IFN + NK (innate) → CTL + neutralising Ab (adaptive)', emphasis: 'key' },
      { id: 's2', label: 'ADE: non-neutralising Ab enhances entry (dengue)' },
      { id: 's3', label: 'Fungi: neutrophils/macrophages + Th17/Th1', emphasis: 'key' },
      { id: 's4', label: 'Helminths: Th2 → IgE + eosinophils + AAMs', emphasis: 'key' },
      { id: 's5', label: 'Evasion: antigenic variation, latency, ↓MHC I, capsule' },
    ],
  },

  examFindings: [
    { sign: 'Type I IFN + CTL clearing a virus', mechanism: 'Innate antiviral state + MHC-I-restricted killing', significance: 'key' },
    { sign: 'Severe dengue on second infection', mechanism: 'Antibody-dependent enhancement (ADE)', significance: 'key' },
    { sign: 'Eosinophilia + high IgE in helminth infection', mechanism: 'Th2 response (IL-4/5/13)', significance: 'key' },
    { sign: 'Invasive candidiasis in a neutropenic patient', mechanism: 'Neutrophils are key antifungal defence', significance: 'supportive' },
    { sign: 'Influenza reinfection despite prior immunity', mechanism: 'Antigenic drift/shift (evasion)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Innate cytokine giving an antiviral state', meaning: 'Type I interferon (IFN-α/β)' },
    { clue: 'Response driving IgE + eosinophils against worms', meaning: 'Th2' },
    { clue: 'Phenomenon worsening second dengue infection', meaning: 'Antibody-dependent enhancement (ADE)' },
    { clue: 'Herpesvirus mechanism of immune evasion', meaning: 'Latency (± MHC I down-regulation)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Evasion shapes vaccine design (antigenic variation → annual flu vaccines; ADE is a dengue-vaccine caution). Th2/eosinophil biology underlies antiparasite defence and allergy overlap ([[hypersensitivity-type-1-2]]). Bacterial arm: [[immunity-bacteria-extracellular-intracellular]].' },
  ],

  mnemonics: [
    { hook: 'Virus = "IFN + NK + CTL + neutralising Ab"; Helminth = "Th2 + IgE + Eosinophils"', expansion: ['Fungi = neutrophils + Th17'] },
    { hook: 'Evasion = "VLAMP": Variation, Latency, Anti-MHC I, capsule, immunosuppression', expansion: ['Host–pathogen arms race'] },
  ],

  traps: [
    {
      questionCategory: 'Antibody in dengue',
      wrongInstinct: 'Antibody from a prior dengue infection always protects against the next infection',
      rightAnswer: 'Non-neutralising cross-reactive antibody can ENHANCE a second (different serotype) dengue infection via ADE → severe dengue',
      why: 'Antibody-dependent enhancement is the exception where pre-existing antibody worsens disease — a key exam and vaccine-safety point.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The immune response responsible for defence against helminth (worm) parasites is characterised by:',
      options: [
        { id: 'a', text: 'Th1, IFN-γ, and macrophage activation' },
        { id: 'b', text: 'Th2 cytokines (IL-4/5/13) driving IgE and eosinophils' },
        { id: 'c', text: 'CD8 cytotoxic T cells alone' },
        { id: 'd', text: 'Complement MAC lysis' },
      ],
      answerId: 'b',
      explanation: 'Helminth defence is a Th2 response: IL-4/5/13 promote IgE, eosinophils, mast cells, and alternatively activated macrophages. Th1 handles intracellular bacteria.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Antibody-dependent enhancement (ADE), classically seen in severe secondary dengue infection, occurs when:',
      options: [
        { id: 'a', text: 'Antibody neutralises the virus completely' },
        { id: 'b', text: 'Non-neutralising antibody facilitates viral entry into Fc-receptor-bearing cells' },
        { id: 'c', text: 'T cells kill all infected cells' },
        { id: 'd', text: 'Complement lyses the virus' },
      ],
      answerId: 'b',
      explanation: 'In ADE, cross-reactive non-neutralising antibody binds virus and promotes its uptake via Fc receptors into cells, enhancing infection — the basis of more severe secondary dengue.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default immunityVirusesFungiParasites;
