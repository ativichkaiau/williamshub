import type { Lecture } from '../../lib/types';

export const carbohydrateStructureIsomerism: Lecture = {
  id: 'carbohydrate-structure-isomerism',
  title: 'Carbohydrate Structure & Isomerism',
  system: 'molecular',
  source: 'L11 — Carbohydrate Chemistry',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Molecular' },
    { kind: 'lecture', label: 'L11 Carbohydrate Chemistry' },
    { kind: 'disease', label: 'Monosaccharides' },
    { kind: 'mechanism', label: 'Stereochemistry' },
    { kind: 'exam', label: 'Epimer vs anomer' },
  ],

  highYield: [
    'Carbohydrates = **(CH₂O)ₙ**, polyhydroxy **aldehydes (aldoses — glucose, galactose)** or **ketones (ketoses — fructose)**. Humans use the **D-form**.',
    '**Isomer types**: **enantiomers** = mirror images (D- vs L-glucose); **epimers** = differ at ONE carbon (**glucose/galactose = C4 epimers; glucose/mannose = C2 epimers**); number of stereoisomers = **2ⁿ** (n = asymmetric carbons).',
    'In solution, sugars cyclize (aldehyde + hydroxyl → **hemiacetal**) forming a ring with a new **anomeric carbon** → **α vs β anomers**; **pyranose** (6-membered) vs **furanose** (5-membered).',
    '**Mutarotation** = interconversion of α and β anomers through the open-chain form.',
    '**Reducing sugars** have a free anomeric carbon (open-chain aldehyde/ketone) that can reduce (e.g. **glucose, maltose, lactose** are reducing; **sucrose is non-reducing**). Derivatives: sugar alcohols (reduction), **sugar acids (glucuronic acid — used in bilirubin/xenobiotic conjugation)**, amino sugars.',
  ],

  mechanism: {
    title: 'From open chain to ring; classify the isomer',
    steps: [
      { id: 's1', label: 'Aldose/ketose, D-form, n asymmetric carbons (2ⁿ isomers)' },
      { id: 's2', label: 'Epimer (1 carbon) vs enantiomer (mirror image)', emphasis: 'key' },
      { id: 's3', label: 'Cyclize → anomeric carbon → α/β anomers' },
      { id: 's4', label: 'Mutarotation; free anomeric C = reducing sugar' },
    ],
  },

  examFindings: [
    { sign: 'Glucose and galactose differ only at C4', mechanism: 'C4 epimers', significance: 'key' },
    { sign: 'α and β forms interconvert in water', mechanism: 'Mutarotation via open chain', significance: 'supportive' },
    { sign: 'Sucrose does not reduce Benedict’s reagent', mechanism: 'No free anomeric carbon (non-reducing)', significance: 'key' },
  ],

  investigations: [
    { clue: 'Position of the differing –OH', meaning: 'Epimer identity (C2 vs C4)' },
    { clue: 'Free vs bonded anomeric carbon', meaning: 'Reducing vs non-reducing sugar' },
    { clue: 'Ring size (pyranose/furanose)', meaning: 'Sugar conformation' },
  ],

  treatment: [
    { logic: 'Glucuronic acid conjugation aids excretion', detail: 'Bilirubin, drugs (phase II metabolism).' },
    { logic: 'Sugar chemistry underlies metabolism & digestion', detail: 'Reducing-sugar tests, etc.' },
  ],

  mnemonics: [
    { hook: 'Enantiomer = Entire mirror image; Epimer = 1 carbon differs', expansion: ['Glc/Gal = C4; Glc/Man = C2'] },
    { hook: 'Sucrose is the classic NON-reducing sugar', expansion: ['Both anomeric carbons bonded'] },
  ],

  traps: [
    {
      questionCategory: 'Epimer vs enantiomer',
      wrongInstinct: 'Glucose and galactose are enantiomers because they are different sugars',
      rightAnswer: 'Glucose and galactose are EPIMERS — they differ at a single carbon (C4); enantiomers are complete mirror images (like D- vs L-glucose)',
      why: 'Epimers differ at only one chiral center, whereas enantiomers differ at every chiral center; conflating them is a common carbohydrate-chemistry error.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Glucose and mannose have the same structure except for the configuration at carbon 2. They are best described as:',
      options: [
        { id: 'a', text: 'Enantiomers' },
        { id: 'b', text: 'C2 epimers' },
        { id: 'c', text: 'Anomers' },
        { id: 'd', text: 'Structural isomers of different formulae' },
      ],
      answerId: 'b',
      explanation: 'Sugars differing at a single asymmetric carbon are epimers; glucose and mannose differ at C2, so they are C2 epimers (glucose and galactose are C4 epimers).',
      tests: 'exam',
    },
  ],
};

export default carbohydrateStructureIsomerism;
