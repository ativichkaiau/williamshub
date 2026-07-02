import type { Lecture } from '../../lib/types';

export const fungalBiologyClassification: Lecture = {
  id: 'fungal-biology-classification',
  title: 'Fungal Biology & Classification',
  system: 'microbiology',
  source: 'L20 — Introduction to Medical Mycology',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Micro' },
    { kind: 'lecture', label: 'L20 Fungal biology' },
    { kind: 'mechanism', label: 'Yeast/mould/dimorph; ergosterol' },
    { kind: 'exam', label: 'Ergosterol/chitin drug targets' },
  ],

  highYield: [
    '**Fungi are EUKARYOTES (nucleus, 80S ribosomes, mitochondria) with a rigid CELL WALL of CHITIN and glucans and a cell MEMBRANE containing ERGOSTEROL (the fungal equivalent of cholesterol) — these two structures are the main ANTIFUNGAL drug targets. They are heterotrophs (absorb nutrients), mostly aerobic, and reproduce sexually and asexually via SPORES.**',
    '**Morphological forms: YEASTS are single cells reproducing by BUDDING (e.g. Candida, Cryptococcus); MOULDS grow as filamentous HYPHAE forming a mycelium (e.g. Aspergillus, dermatophytes) — hyphae may be SEPTATE or aseptate/sparsely septate (Mucorales). DIMORPHIC fungi switch form with TEMPERATURE: MOULD in the environment (25°C) and YEAST in tissue/at 37°C ("mould in the cold, yeast in the heat") — the classic systemic pathogens (Histoplasma, Blastomyces, Coccidioides, Talaromyces).**',
    '**Mycoses are grouped by depth: SUPERFICIAL/cutaneous (skin, hair, nails — dermatophytes, Malassezia), SUBCUTANEOUS (implantation — mycetoma, chromoblastomycosis, sporotrichosis), and SYSTEMIC/deep (dimorphic endemic fungi) plus OPPORTUNISTIC (Candida, Aspergillus, Cryptococcus, Mucorales in the immunocompromised). Host immunity — especially NEUTROPHILS and T-CELL/CD4 function — largely determines who gets invasive disease (hence fungal infections in neutropenia, transplant, HIV, diabetes).**',
    '**Laboratory basics: direct microscopy (KOH digests keratin to reveal hyphae; India ink for Cryptococcus capsule; special stains — GMS/PAS), culture on SABOURAUD agar, antigen tests, and histopathology. This module sets up the specific pathogens (yeasts, dimorphics, dermatophytes, moulds, subcutaneous fungi) covered in the rest of the mycology block.**',
    '**The take-home: fungi = EUKARYOTES with CHITIN wall + ERGOSTEROL membrane (drug targets). Forms: YEAST (budding) vs MOULD (hyphae) vs DIMORPHIC ("mould in cold 25°C, yeast in heat 37°C"). Mycoses by depth: superficial/subcutaneous/systemic/opportunistic; NEUTROPHIL & T-cell defects predispose. Diagnose by KOH/India ink/culture (Sabouraud)/antigen.** Antifungal drugs/diagnosis detail is [[antifungal-agents-lab-diagnosis]]; the dimorphics are [[systemic-dimorphic-fungi]].',
  ],

  mechanism: {
    title: 'Eukaryotes; chitin wall + ergosterol membrane (drug targets); yeast (budding) vs mould (hyphae) vs dimorphic (mould 25°C/yeast 37°C); mycoses by depth; neutrophil/T-cell defects predispose',
    steps: [
      { id: 's1', label: 'Fungi = eukaryotes; chitin/glucan wall + ergosterol membrane = drug targets', emphasis: 'key' },
      { id: 's2', label: 'Yeast = budding single cells; mould = filamentous hyphae (septate/aseptate)', emphasis: 'key' },
      { id: 's3', label: 'Dimorphic: "mould in the cold (25°C), yeast in the heat (37°C/tissue)"', emphasis: 'key' },
      { id: 's4', label: 'Mycoses by depth: superficial / subcutaneous / systemic / opportunistic', emphasis: 'key' },
      { id: 's5', label: 'Neutrophil (Aspergillus/Mucor) & T-cell/CD4 (Cryptococcus/dimorphics) defects predispose', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'A single-celled fungus reproducing by budding', mechanism: 'Yeast (e.g. Candida, Cryptococcus)', significance: 'key' },
    { sign: 'A filamentous fungus forming hyphae/mycelium', mechanism: 'Mould (e.g. Aspergillus, dermatophytes)', significance: 'key' },
    { sign: 'Mould form at 25°C, yeast form at 37°C/in tissue', mechanism: 'Thermal dimorphism', significance: 'key' },
    { sign: 'Invasive fungal infection in a neutropenic patient', mechanism: 'Neutrophil defect predisposes to Aspergillus/Mucor', significance: 'supportive' },
    { sign: 'Hyphae revealed by dissolving keratin with KOH', mechanism: 'KOH microscopy of skin/nail', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The fungal membrane sterol targeted by drugs', meaning: 'Ergosterol' },
    { clue: 'The fungal cell-wall polymer', meaning: 'Chitin (+ glucans)' },
    { clue: 'The temperature rule for dimorphic fungi', meaning: 'Mould at 25°C, yeast at 37°C' },
    { clue: 'The standard fungal culture medium', meaning: 'Sabouraud agar' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Fungal biology frames the whole block: the chitin wall and ergosterol membrane are the antifungal drug targets, the yeast/mould/dimorphic forms and depth of infection (superficial/subcutaneous/systemic/opportunistic) organise the pathogens, and host immune defects (neutropenia for Aspergillus/Mucor; T-cell/CD4 loss for Cryptococcus and dimorphics) predict who develops invasive disease. Basic diagnostics (KOH, India ink, Sabouraud culture, antigen tests, GMS/PAS histology) run throughout. Drugs and diagnostics are detailed in [[antifungal-agents-lab-diagnosis]]; dimorphic fungi are [[systemic-dimorphic-fungi]].' },
  ],

  mnemonics: [
    { hook: '"Mould in the Cold (25°C), Yeast in the heat (37°C)" = dimorphic', expansion: ['Yeast = budding; mould = hyphae', 'Chitin wall + ergosterol membrane'] },
    { hook: '"Neutropenia → Aspergillus/Mucor; T-cell/CD4 loss → Cryptococcus/dimorphics"', expansion: ['Depth: superficial→systemic', 'KOH/India ink/Sabouraud'] },
  ],

  traps: [
    {
      questionCategory: 'Why antifungals differ from antibacterials',
      wrongInstinct: 'Antibacterial antibiotics should also work against fungi since both are microbes',
      rightAnswer: 'Fungi are EUKARYOTES with an ERGOSTEROL membrane and CHITIN/glucan wall (not the peptidoglycan/70S-ribosome targets of bacteria), so ANTIBACTERIAL antibiotics do NOT work on them; antifungals instead target fungal-specific structures — ergosterol (azoles inhibit its synthesis; polyenes bind it) and glucan synthesis (echinocandins) — which also explains their different toxicity profile',
      why: 'Because fungi share eukaryotic machinery with human cells but have unique ergosterol/chitin, effective drugs must hit those fungal-specific targets; expecting antibacterials to treat fungi (or vice versa) is a category error.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A dimorphic fungus exists in which forms at environmental (25°C) versus body (37°C) temperature?',
      options: [
        { id: 'a', text: 'Mould at 25°C and yeast at 37°C' },
        { id: 'b', text: 'Yeast at 25°C and mould at 37°C' },
        { id: 'c', text: 'Mould at both temperatures' },
        { id: 'd', text: 'Yeast at both temperatures' },
      ],
      answerId: 'a',
      explanation: 'Thermally dimorphic fungi grow as moulds in the environment (25°C) and convert to yeasts in tissue/at 37°C — "mould in the cold, yeast in the heat" — a property of the endemic systemic pathogens such as Histoplasma, Blastomyces, Coccidioides and Talaromyces.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which two fungal structures are the principal targets of antifungal drugs?',
      options: [
        { id: 'a', text: 'Peptidoglycan and the 70S ribosome' },
        { id: 'b', text: 'The ergosterol-containing membrane and the chitin/glucan cell wall' },
        { id: 'c', text: 'Lipopolysaccharide and pili' },
        { id: 'd', text: 'Mycolic acid and the capsule' },
      ],
      answerId: 'b',
      explanation: 'Fungi have an ergosterol-containing cell membrane and a chitin/glucan cell wall; antifungals exploit these (azoles inhibit ergosterol synthesis, polyenes bind ergosterol, echinocandins inhibit glucan synthesis). Peptidoglycan and 70S ribosomes are bacterial targets.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default fungalBiologyClassification;
