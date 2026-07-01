import type { Lecture } from '../../lib/types';

export const enzymeCatalysisClassification: Lecture = {
  id: 'enzyme-catalysis-classification',
  title: 'Enzyme Catalysis & Classification',
  system: 'molecular',
  source: 'L2 — Enzymes & Cofactors',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Molecular' },
    { kind: 'lecture', label: 'L2 Enzymes & Cofactors' },
    { kind: 'disease', label: 'Enzymes' },
    { kind: 'mechanism', label: 'Lower activation energy' },
    { kind: 'exam', label: 'EC classes' },
  ],

  highYield: [
    'Enzymes are (mostly protein) catalysts that **lower the activation energy (Eₐ)** by stabilizing the **transition state** — they speed reactions without being consumed or changing the equilibrium.',
    'Catalysis proceeds through an **enzyme–substrate (ES) complex** at the **active site** (E + S ⇌ ES → EP → E + P); binding is specific to substrate shape/charge.',
    '**Six EC classes**: **1 Oxidoreductase** (redox), **2 Transferase** (group transfer, e.g. kinases), **3 Hydrolase** (hydrolysis), **4 Lyase** (add/remove groups forming double bonds), **5 Isomerase** (rearrangement), **6 Ligase** (join with ATP).',
    'A **holoenzyme = apoenzyme (protein) + cofactor** (inorganic metal ion or organic **coenzyme**); many coenzymes are vitamin-derived.',
    'Some RNAs are catalytic (**ribozymes**); enzyme activity is a saturable function of substrate governed by kinetics (next module).',
  ],

  mechanism: {
    title: 'Bind substrate → stabilize transition state → release product',
    steps: [
      { id: 's1', label: 'E + S bind at the active site (ES complex)', emphasis: 'key' },
      { id: 's2', label: 'Transition state stabilized → Eₐ lowered' },
      { id: 's3', label: 'ES → EP → E + P (enzyme regenerated)' },
      { id: 's4', label: 'Cofactor/coenzyme may be required (holoenzyme)' },
    ],
  },

  examFindings: [
    { sign: 'Reaction accelerated without altering ΔG/equilibrium', mechanism: 'Catalyst lowers activation energy only', significance: 'key' },
    { sign: 'Loss of activity when a cofactor is removed', mechanism: 'Apoenzyme alone is inactive', significance: 'key' },
    { sign: 'Substrate specificity', mechanism: 'Active-site shape/charge complementarity', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Reaction catalyzed (redox, transfer, hydrolysis…)', meaning: 'Assigns the EC class' },
    { clue: 'Cofactor requirement', meaning: 'Holoenzyme vs apoenzyme' },
    { clue: 'Active-site residues', meaning: 'Catalytic mechanism' },
  ],

  treatment: [
    { logic: 'Enzymes are drug targets', detail: 'Inhibitors (statins, allopurinol, ACE inhibitors) exploit catalysis.' },
    { logic: 'Cofactor/vitamin deficiency impairs the holoenzyme', detail: 'Restore the coenzyme.' },
  ],

  mnemonics: [
    { hook: 'EC classes: “OT HLIL” — Oxidoreductase, Transferase, Hydrolase, Lyase, Isomerase, Ligase', expansion: ['1→6'] },
    { hook: 'Holoenzyme = apoenzyme + cofactor', expansion: ['Cofactor = metal ion or organic coenzyme'] },
  ],

  traps: [
    {
      questionCategory: 'What an enzyme changes',
      wrongInstinct: 'Enzymes make an unfavorable reaction favorable by shifting the equilibrium',
      rightAnswer: 'Enzymes only lower the activation energy (speed the rate); they do not change ΔG or the position of equilibrium',
      why: 'A catalyst accelerates forward and reverse rates equally, so it reaches equilibrium faster but cannot alter the thermodynamics (ΔG) of the reaction.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A kinase transfers a phosphate group from ATP to glucose. This enzyme belongs to which EC class?',
      options: [
        { id: 'a', text: 'Oxidoreductase' },
        { id: 'b', text: 'Transferase' },
        { id: 'c', text: 'Hydrolase' },
        { id: 'd', text: 'Ligase' },
      ],
      answerId: 'b',
      explanation: 'Kinases move a functional (phosphate) group from one molecule to another, so they are transferases (EC class 2).',
      tests: 'exam',
    },
  ],
};

export default enzymeCatalysisClassification;
