import type { Lecture } from '../../lib/types';

export const collagenElastin: Lecture = {
  id: 'collagen-elastin',
  title: 'Collagen & Elastin',
  system: 'molecular',
  source: 'L1 — Amino Acids & Proteins',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Molecular' },
    { kind: 'lecture', label: 'L1 Amino Acids & Proteins' },
    { kind: 'disease', label: 'Fibrous proteins' },
    { kind: 'mechanism', label: 'Triple helix' },
    { kind: 'exam', label: 'Scurvy / α1-AT' },
  ],

  highYield: [
    '**Collagen = most abundant protein in the body**: three α-chains in a **rope-like triple helix**, sequence **(Gly-X-Y)ₙ** where **X is often proline and Y often hydroxyproline**.',
    'Triple-helix stability needs **hydroxyproline** for interchain H-bonds. **Prolyl hydroxylase requires vitamin C** (+ Fe²⁺); **vitamin C deficiency → scurvy** (poor wound healing, bleeding gums, bruising from fragile capillaries).',
    'Collagen fibers are further strengthened by **covalent cross-links** formed by **lysyl oxidase** (oxidative deamination of lysine → allysine).',
    '**Elastin** = rubber-like connective-tissue protein (lungs, large arteries, elastic ligaments); rich in **proline and lysine** but little hydroxyproline; cross-linked for recoil.',
    '**α1-antitrypsin (α1-AT)** inhibits **elastase** (from neutrophils). **α1-AT deficiency → emphysema** (unopposed elastase destroys alveolar elastin; smoking accelerates) **and cirrhosis** (misfolded protein accumulates in liver).',
  ],

  mechanism: {
    title: 'Post-translational modification builds the fiber',
    steps: [
      { id: 's1', label: 'Gly-X-Y chains form a triple helix' },
      { id: 's2', label: 'Prolyl hydroxylase (needs vitamin C) → hydroxyproline', emphasis: 'key' },
      { id: 's3', label: 'Interchain H-bonds stabilize the helix' },
      { id: 's4', label: 'Lysyl oxidase cross-links fibers; elastase balance', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Bleeding gums, poor wound healing, perifollicular hemorrhage', mechanism: 'Vitamin C deficiency → defective collagen (scurvy)', significance: 'key' },
    { sign: 'Early-onset panlobular emphysema in a non-smoker (or young smoker)', mechanism: 'α1-antitrypsin deficiency (unopposed elastase)', significance: 'key' },
    { sign: 'Liver disease (cirrhosis) with emphysema', mechanism: 'Misfolded α1-AT retained in hepatocytes', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Vitamin C level / dietary history', meaning: 'Scurvy (collagen defect)' },
    { clue: 'Serum α1-antitrypsin level & phenotype', meaning: 'α1-AT deficiency' },
    { clue: 'Glycine content / (Gly-X-Y) motif', meaning: 'Collagen identity' },
  ],

  treatment: [
    { logic: 'Vitamin C repletion for scurvy', detail: 'Restores prolyl hydroxylase activity.' },
    { logic: 'α1-AT deficiency: smoking cessation ± α1-AT augmentation', detail: 'Weekly IV α1-AT can help.' },
  ],

  mnemonics: [
    { hook: 'Collagen = Gly-X-Y; hydroxyproline needs vitamin C', expansion: ['Deficiency → scurvy'] },
    { hook: 'α1-AT deficiency = emphysema (lung) + cirrhosis (liver)', expansion: ['Unopposed elastase; misfolded protein'] },
  ],

  traps: [
    {
      questionCategory: 'Vitamin C and collagen',
      wrongInstinct: 'Vitamin C is needed to synthesize the collagen amino-acid sequence itself',
      rightAnswer: 'Vitamin C is a cofactor for prolyl (and lysyl) hydroxylase — it enables the post-translational hydroxylation that stabilizes the triple helix, not the sequence',
      why: 'Without hydroxyproline, interchain hydrogen bonds fail and the collagen triple helix is unstable, producing the fragile connective tissue of scurvy.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A young non-smoker develops panlobular emphysema and is found to have liver disease. The most likely underlying defect is:',
      options: [
        { id: 'a', text: 'Vitamin C deficiency' },
        { id: 'b', text: 'α1-antitrypsin deficiency' },
        { id: 'c', text: 'Lysyl oxidase deficiency' },
        { id: 'd', text: 'Excess prolyl hydroxylase' },
      ],
      answerId: 'b',
      explanation: 'α1-antitrypsin deficiency leaves neutrophil elastase unopposed (→ emphysema), while misfolded α1-AT accumulates in hepatocytes (→ cirrhosis) — a combined lung and liver disease.',
      tests: 'exam',
    },
  ],
};

export default collagenElastin;
