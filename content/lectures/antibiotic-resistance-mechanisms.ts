import type { Lecture } from '../../lib/types';

export const antibioticResistanceMechanisms: Lecture = {
  id: 'antibiotic-resistance-mechanisms',
  title: 'Antibiotic Resistance Mechanisms',
  system: 'microbiology',
  source: 'L9 — Bacterial Genetics & Antibiotic Resistance',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Micro' },
    { kind: 'lecture', label: 'L9 Resistance' },
    { kind: 'mechanism', label: 'Enzyme, target, efflux, permeability' },
    { kind: 'exam', label: 'β-lactamase/ESBL; MRSA mecA; VRE' },
  ],

  highYield: [
    'Resistance is INTRINSIC (inherent — e.g. no wall in *Mycoplasma*, outer-membrane exclusion in Gram-negatives) or ACQUIRED (mutation or horizontal gene transfer). There are four core BIOCHEMICAL mechanisms: (1) enzymatic INACTIVATION of the drug, (2) TARGET modification, (3) EFFLUX pumps, and (4) reduced UPTAKE/permeability. One organism often combines several.',
    'Enzymatic inactivation: β-LACTAMASES hydrolyse β-lactams — plain penicillinases, then EXTENDED-SPECTRUM β-lactamases (ESBLs, defeat most cephalosporins), AmpC, and CARBAPENEMASES (e.g. KPC, NDM/metallo — defeat carbapenems, the "last-line" agents). Aminoglycoside-modifying enzymes similarly inactivate aminoglycosides. β-lactamase inhibitors (clavulanate, tazobactam) can rescue some β-lactams.',
    'TARGET modification: MRSA carries mecA → altered penicillin-binding protein PBP2a with low β-lactam affinity (resistant to all standard β-lactams); VRE alters the peptidoglycan D-Ala-D-Ala terminus to D-Ala-D-Lac (vancomycin cannot bind); ribosomal/methylation changes cause macrolide resistance; and mutated DNA gyrase causes fluoroquinolone resistance. EFFLUX and PORIN loss (reduced permeability) broadly reduce intracellular drug (tetracyclines, Gram-negatives).',
    'Susceptibility is measured by the MINIMUM INHIBITORY CONCENTRATION (MIC) — disc diffusion or broth dilution against clinical breakpoints — to report susceptible/resistant and guide therapy. Combating resistance rests on STEWARDSHIP (appropriate, narrow, adequate-duration antibiotics), infection control (limit horizontal spread of R-plasmids), and surveillance.',
    '**The take-home: resistance = intrinsic or acquired, via four mechanisms — drug-INACTIVATING enzymes (β-lactamase → ESBL → CARBAPENEMASE; ± inhibitors), TARGET change (MRSA mecA/PBP2a; VRE D-Ala-D-Lac), EFFLUX pumps, reduced PERMEABILITY (porin loss). MIC guides therapy; stewardship + infection control limit spread.** How the genes spread is in [[bacterial-gene-transfer]]; β-lactam drugs are [[antibacterial-cell-wall-agents]].',
  ],

  mechanism: {
    title: 'Four mechanisms: drug-inactivating enzymes (β-lactamase→ESBL→carbapenemase), target modification (MRSA mecA/PBP2a, VRE D-Ala-D-Lac), efflux pumps, reduced permeability (porins); MIC + stewardship',
    steps: [
      { id: 's1', label: 'Intrinsic vs acquired (mutation / horizontal transfer)', emphasis: 'key' },
      { id: 's2', label: 'Enzymatic inactivation: β-lactamase → ESBL → carbapenemase (± inhibitors)', emphasis: 'danger' },
      { id: 's3', label: 'Target modification: MRSA mecA→PBP2a; VRE D-Ala-D-Lac; gyrase/ribosome changes', emphasis: 'key' },
      { id: 's4', label: 'Efflux pumps + reduced permeability (porin loss) lower intracellular drug', emphasis: 'key' },
      { id: 's5', label: 'MIC/breakpoints guide therapy; stewardship + infection control limit spread', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'A Gram-negative resistant to most cephalosporins via a plasmid enzyme', mechanism: 'Extended-spectrum β-lactamase (ESBL)', significance: 'key' },
    { sign: 'Staph. aureus resistant to all standard β-lactams', mechanism: 'MRSA (mecA → PBP2a target change)', significance: 'key' },
    { sign: 'Enterococcus resistant to vancomycin', mechanism: 'VRE (D-Ala-D-Ala → D-Ala-D-Lac)', significance: 'key' },
    { sign: 'Carbapenem-resistant Enterobacterales', mechanism: 'Carbapenemase (e.g. KPC, NDM)', significance: 'key' },
    { sign: 'Broad low-level resistance from pumping drug out / porin loss', mechanism: 'Efflux / reduced permeability', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The enzyme class defeating most cephalosporins', meaning: 'Extended-spectrum β-lactamases (ESBLs)' },
    { clue: 'The MRSA resistance mechanism', meaning: 'mecA gene → altered PBP2a (target change)' },
    { clue: 'The VRE resistance mechanism', meaning: 'D-Ala-D-Ala → D-Ala-D-Lac (target change)' },
    { clue: 'The measure guiding susceptibility reporting', meaning: 'Minimum inhibitory concentration (MIC)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Knowing the four resistance mechanisms explains laboratory reports and drug choice: β-lactamases (and ESBLs/carbapenemases) dictate whether β-lactams ± inhibitors will work; target changes (MRSA PBP2a, VRE D-Ala-D-Lac) mandate alternative agents (e.g. vancomycin/linezolid for MRSA); efflux and porin loss cause broad low-level resistance. The MIC guides therapy against breakpoints, and stewardship plus infection control limit the horizontal spread of resistance genes ([[bacterial-gene-transfer]]). β-lactam pharmacology is [[antibacterial-cell-wall-agents]].' },
  ],

  mnemonics: [
    { hook: 'Four mechanisms: "Enzyme, Efflux, Entry (↓permeability), Endpoint (target) change"', expansion: ['β-lactamase→ESBL→carbapenemase', 'MRSA=PBP2a; VRE=D-Ala-D-Lac'] },
    { hook: '"MIC guides therapy; stewardship stops spread"', expansion: ['Clavulanate rescues some β-lactams', 'Carbapenemase = last-line lost'] },
  ],

  traps: [
    {
      questionCategory: 'Mechanism of MRSA resistance',
      wrongInstinct: 'MRSA is resistant to methicillin because it produces more β-lactamase (penicillinase)',
      rightAnswer: 'MRSA resistance is NOT primarily due to β-lactamase — it is a TARGET modification: the mecA gene encodes an altered penicillin-binding protein, PBP2a, with LOW AFFINITY for β-lactams, so essentially ALL standard β-lactams (including anti-staphylococcal penicillins and most cephalosporins) fail; this is why β-lactamase inhibitors do not restore activity and alternative agents (vancomycin, linezolid) are needed',
      why: 'Because MRSA changes the drug target rather than merely destroying the drug, adding a β-lactamase inhibitor does not help; recognising the mecA/PBP2a mechanism explains the need for non-β-lactam therapy.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Methicillin-resistant Staphylococcus aureus (MRSA) resists β-lactams principally through:',
      options: [
        { id: 'a', text: 'Increased β-lactamase production' },
        { id: 'b', text: 'An altered penicillin-binding protein (PBP2a) encoded by mecA' },
        { id: 'c', text: 'Loss of its cell wall' },
        { id: 'd', text: 'An efflux pump only' },
      ],
      answerId: 'b',
      explanation: 'MRSA carries mecA, which encodes PBP2a — a penicillin-binding protein with low affinity for β-lactams — so target modification (not just β-lactamase) confers resistance to essentially all standard β-lactams, requiring agents such as vancomycin or linezolid.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Vancomycin resistance in enterococci (VRE) arises because the drug target changes from:',
      options: [
        { id: 'a', text: 'D-Ala-D-Ala to D-Ala-D-Lac' },
        { id: 'b', text: 'Peptidoglycan to teichoic acid' },
        { id: 'c', text: 'PBP to DNA gyrase' },
        { id: 'd', text: 'Ribosome to cell membrane' },
      ],
      answerId: 'a',
      explanation: 'Vancomycin binds the terminal D-Ala-D-Ala of peptidoglycan precursors; VRE remodels this to D-Ala-D-Lac, which vancomycin cannot bind, abolishing its activity — a target-modification mechanism spread on mobile genetic elements.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default antibioticResistanceMechanisms;
