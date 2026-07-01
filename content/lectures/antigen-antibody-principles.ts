import type { Lecture } from '../../lib/types';

export const antigenAntibodyPrinciples: Lecture = {
  id: 'antigen-antibody-principles',
  title: 'Antigen–Antibody Reactions: Affinity, Avidity & Basic Assays',
  system: 'immune',
  source: 'L14 — Antigen-Antibody Reactions',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Immunology' },
    { kind: 'lecture', label: 'L14 Ag-Ab Reactions' },
    { kind: 'mechanism', label: 'Binding strength' },
    { kind: 'exam', label: 'Affinity vs avidity · titre' },
  ],

  highYield: [
    '**Antigen–antibody binding is specific, reversible, and non-covalent** (hydrogen bonds, electrostatic, van der Waals, hydrophobic). The strength/pattern of binding underlies every serological test.',
    '**Affinity vs avidity — the classic distinction.** **Affinity** = the strength of **ONE** antigen-binding site for **one** epitope. **Avidity** = the **total** binding strength of the **whole** antibody (all sites together). This is why **IgM (10 binding sites) has high avidity despite low affinity** per site.',
    '**Precipitation** = soluble antibody + **soluble** multivalent antigen form a cross-linked **lattice** that precipitates; maximal at the **zone of equivalence** (excess of either reactant inhibits lattice formation — the "prozone" effect can cause false-negatives).',
    '**Agglutination** = antibody cross-links **particulate** antigen (cells/beads) into visible clumps → used for **blood typing** (haemagglutination), latex agglutination, and bacterial identification. More sensitive than precipitation.',
    '**Titre** = the **highest dilution of serum still giving a positive reaction** — a semi-quantitative measure of antibody amount (e.g. a rising titre indicates recent/active infection).',
  ],

  mechanism: {
    title: 'Bind → cross-link → detect',
    steps: [
      { id: 's1', label: 'Specific non-covalent Ag–Ab binding', emphasis: 'key' },
      { id: 's2', label: 'Affinity = one site; avidity = all sites (IgM high avidity)', emphasis: 'key' },
      { id: 's3', label: 'Precipitation: soluble antigen → lattice (equivalence zone)' },
      { id: 's4', label: 'Agglutination: particulate antigen → visible clumps', emphasis: 'key' },
      { id: 's5', label: 'Titre = highest positive dilution (semi-quantitative)' },
    ],
  },

  examFindings: [
    { sign: 'IgM has high avidity but low per-site affinity', mechanism: '10 binding sites sum to strong total binding', significance: 'key' },
    { sign: 'Haemagglutination for ABO blood typing', mechanism: 'Antibody cross-links (particulate) red cells', significance: 'key' },
    { sign: 'False-negative at high antibody concentration (prozone)', mechanism: 'Antibody excess prevents lattice (precipitation)', significance: 'supportive' },
    { sign: 'Four-fold rise in antibody titre', mechanism: 'Evidence of recent/active infection', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Strength of a single antibody–epitope bond', meaning: 'Affinity' },
    { clue: 'Total binding strength of a multivalent antibody', meaning: 'Avidity' },
    { clue: 'Reaction clumping particulate antigen', meaning: 'Agglutination (e.g. blood typing)' },
    { clue: 'Highest serum dilution still positive', meaning: 'Titre' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'These principles underpin blood banking (crossmatch/typing), serology, and the labelled immunoassays in [[immunoassays-techniques]]. Avidity testing (low avidity = recent infection) helps date infections (e.g. Toxoplasma, CMV in pregnancy).' },
  ],

  mnemonics: [
    { hook: 'Affinity = A single site; aVidity = Very many sites (IgM)', expansion: ['Total > sum of parts (bonus effect)'] },
    { hook: 'Precipitation = soluble antigen; Agglutination = particulate antigen', expansion: ['Titre = highest positive dilution'] },
  ],

  traps: [
    {
      questionCategory: 'Affinity vs avidity',
      wrongInstinct: 'IgM binds poorly overall because each of its sites has low affinity',
      rightAnswer: 'IgM has LOW per-site affinity but HIGH avidity (10 sites) → strong overall binding and good agglutination/complement activation',
      why: 'Avidity is the sum of all binding sites; multivalency compensates for low per-site affinity — the key affinity-vs-avidity point.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The total binding strength of a multivalent antibody (all its antigen-binding sites acting together) is termed:',
      options: [
        { id: 'a', text: 'Affinity' },
        { id: 'b', text: 'Avidity' },
        { id: 'c', text: 'Titre' },
        { id: 'd', text: 'Specificity' },
      ],
      answerId: 'b',
      explanation: 'Avidity is the sum of all binding-site interactions; affinity is the strength of a single site–epitope bond. IgM has high avidity despite low per-site affinity.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Blood typing by mixing red cells with anti-A/anti-B sera relies on which antigen–antibody reaction?',
      options: [
        { id: 'a', text: 'Precipitation' },
        { id: 'b', text: 'Agglutination (haemagglutination)' },
        { id: 'c', text: 'Neutralisation' },
        { id: 'd', text: 'Complement fixation' },
      ],
      answerId: 'b',
      explanation: 'Antibody cross-links particulate red cells into visible clumps (haemagglutination), the basis of ABO/Rh blood typing. Precipitation involves soluble antigens.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default antigenAntibodyPrinciples;
