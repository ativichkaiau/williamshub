import type { Lecture } from '../../lib/types';

export const coenzymesCofactors: Lecture = {
  id: 'coenzymes-cofactors',
  title: 'Coenzymes & Cofactors',
  system: 'molecular',
  source: 'L2 — Enzymes & Cofactors',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Molecular' },
    { kind: 'lecture', label: 'L2 Enzymes & Cofactors' },
    { kind: 'disease', label: 'Vitamin coenzymes' },
    { kind: 'mechanism', label: 'Cofactor chemistry' },
    { kind: 'exam', label: 'B-vitamin deficiencies' },
  ],

  highYield: [
    'A **cofactor** is a non-protein helper: **inorganic** (metal ions — Zn²⁺, Mg²⁺, Fe²⁺) or **organic (coenzyme)**, many **derived from water-soluble vitamins**.',
    'Redox/energy coenzymes: **NAD⁺/NADP⁺ (niacin, B3)** and **FAD/FMN (riboflavin, B2)** carry electrons; **coenzyme A (pantothenate, B5)** carries acyl groups; **lipoic acid** in dehydrogenase complexes.',
    'Transfer coenzymes: **thiamine pyrophosphate (TPP, B1)** — oxidative decarboxylation/transketolase; **pyridoxal phosphate (PLP, B6)** — transamination/decarboxylation of amino acids; **biotin (B7)** — carboxylation (CO₂ carrier).',
    'One-carbon/methyl metabolism: **tetrahydrofolate (folate, B9)** and **methylcobalamin (B12)** — nucleotide and methionine synthesis.',
    'Deficiency disease links: **B1 → beriberi/Wernicke**; **B3 → pellagra**; **B6 → sideroblastic anemia/neuropathy**; **B9/B12 → megaloblastic anemia**; **ascorbate (C) → scurvy** (collagen hydroxylation).',
  ],

  mechanism: {
    title: 'Vitamin → coenzyme → the reaction it enables',
    steps: [
      { id: 's1', label: 'Dietary vitamin absorbed & converted to coenzyme' },
      { id: 's2', label: 'Coenzyme binds apoenzyme → active holoenzyme', emphasis: 'key' },
      { id: 's3', label: 'Carries electrons / acyl / 1-carbon / CO₂ groups' },
      { id: 's4', label: 'Deficiency → loss of that reaction → disease', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Megaloblastic anemia', mechanism: 'Folate (B9) or B12 deficiency → impaired DNA synthesis', significance: 'key' },
    { sign: 'Dermatitis, diarrhea, dementia (pellagra)', mechanism: 'Niacin (B3/NAD) deficiency', significance: 'key' },
    { sign: 'Peripheral neuropathy / confusion in alcoholism', mechanism: 'Thiamine (B1/TPP) deficiency', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Which reaction fails', meaning: 'Points to the deficient coenzyme/vitamin' },
    { clue: 'Vitamin levels / metabolite assays', meaning: 'Confirm deficiency' },
    { clue: 'Water-soluble vs fat-soluble vitamin', meaning: 'Different storage/deficiency kinetics' },
  ],

  treatment: [
    { logic: 'Replace the deficient vitamin/coenzyme', detail: 'Restores holoenzyme activity.' },
    { logic: 'Give thiamine before glucose in at-risk patients', detail: 'Prevents precipitating Wernicke.' },
  ],

  mnemonics: [
    { hook: 'B1 TPP, B2 FAD, B3 NAD, B5 CoA, B6 PLP, B7 biotin, B9 THF, B12 cobalamin', expansion: ['Vitamin → coenzyme map'] },
    { hook: 'Biotin carries CO₂ (carboxylases); PLP does transamination', expansion: ['Group-transfer coenzymes'] },
  ],

  traps: [
    {
      questionCategory: 'Cofactor vs coenzyme vs prosthetic group',
      wrongInstinct: 'A cofactor and a coenzyme are exactly the same thing',
      rightAnswer: 'Cofactor is the umbrella term; coenzymes are the ORGANIC (often vitamin-derived) subset, distinct from inorganic metal-ion cofactors',
      why: 'All coenzymes are cofactors, but not all cofactors are coenzymes — metal ions (Zn²⁺, Mg²⁺) are inorganic cofactors, while NAD⁺, TPP, and PLP are organic coenzymes.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A malnourished patient has a megaloblastic anemia. A deficiency of which coenzyme precursors is most likely responsible?',
      options: [
        { id: 'a', text: 'Thiamine (B1) or riboflavin (B2)' },
        { id: 'b', text: 'Folate (B9) or cobalamin (B12)' },
        { id: 'c', text: 'Niacin (B3) or pantothenate (B5)' },
        { id: 'd', text: 'Biotin (B7) or pyridoxine (B6)' },
      ],
      answerId: 'b',
      explanation: 'Folate (as tetrahydrofolate) and B12 are required for one-carbon transfer in nucleotide synthesis; their deficiency impairs DNA synthesis and causes megaloblastic anemia.',
      tests: 'exam',
    },
  ],
};

export default coenzymesCofactors;
