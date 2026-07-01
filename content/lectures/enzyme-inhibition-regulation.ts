import type { Lecture } from '../../lib/types';

export const enzymeInhibitionRegulation: Lecture = {
  id: 'enzyme-inhibition-regulation',
  title: 'Enzyme Inhibition & Regulation',
  system: 'molecular',
  source: 'L2 — Enzymes & Cofactors',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Molecular' },
    { kind: 'lecture', label: 'L2 Enzymes & Cofactors' },
    { kind: 'disease', label: 'Regulation' },
    { kind: 'mechanism', label: 'Inhibition & control' },
    { kind: 'exam', label: 'Competitive vs noncompetitive' },
  ],

  highYield: [
    '**Competitive inhibitor** binds the active site, out-competed by substrate → **↑ Km, unchanged Vmax** (e.g. allopurinol on xanthine oxidase; statins on HMG-CoA reductase).',
    '**Noncompetitive inhibitor** binds elsewhere (allosteric) regardless of substrate → **↓ Vmax, unchanged Km** (e.g. cyanide on cytochrome oxidase).',
    '**Allosteric regulation**: effectors bind a regulatory site to shift activity; **feedback inhibition** = the end product inhibits an early enzyme (e.g. isoleucine inhibits threonine deaminase).',
    '**Covalent modification** — reversible **phosphorylation** switches enzymes on/off (glycogen phosphorylase vs synthase reciprocally regulated by insulin/glucagon).',
    '**Zymogens (proenzymes)** are activated by irreversible cleavage (trypsinogen → trypsin by enteropeptidase). **Isozymes** (e.g. LDH, CK-MB) and **serum enzyme leakage** (ALT/AST, CK, amylase/lipase, ALP) are used in **clinical diagnosis**.',
  ],

  mechanism: {
    title: 'Control the flux: block, allostery, phosphorylation, or cleavage',
    steps: [
      { id: 's1', label: 'Competitive: active-site block (↑Km)', emphasis: 'key' },
      { id: 's2', label: 'Noncompetitive: allosteric block (↓Vmax)' },
      { id: 's3', label: 'Feedback / allosteric effectors tune the pathway' },
      { id: 's4', label: 'Phosphorylation & zymogen cleavage switch activity', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Inhibition overcome by adding more substrate', mechanism: 'Competitive inhibitor (↑Km)', significance: 'key' },
    { sign: 'Inhibition NOT overcome by more substrate', mechanism: 'Noncompetitive inhibitor (↓Vmax)', significance: 'key' },
    { sign: 'Raised serum ALT/AST, CK, or lipase', mechanism: 'Enzyme leakage from damaged tissue', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Effect of inhibitor on Km/Vmax (Lineweaver-Burk)', meaning: 'Competitive vs noncompetitive' },
    { clue: 'Serum enzyme/isozyme pattern', meaning: 'Localizes tissue injury (e.g. CK-MB)' },
    { clue: 'Phosphorylation state', meaning: 'Active vs inactive form' },
  ],

  treatment: [
    { logic: 'Competitive-inhibitor drugs (statins, allopurinol, ACE-i)', detail: 'Reversible active-site block.' },
    { logic: 'Serum enzymes for diagnosis/monitoring', detail: 'e.g. troponin/CK in MI, lipase in pancreatitis.' },
  ],

  mnemonics: [
    { hook: 'Competitive = ↑Km, same Vmax; Noncompetitive = ↓Vmax, same Km', expansion: ['Competitive overcome by more substrate'] },
    { hook: 'Feedback inhibition: end product shuts off the first committed step', expansion: ['Allosteric control'] },
  ],

  traps: [
    {
      questionCategory: 'Competitive vs noncompetitive inhibition',
      wrongInstinct: 'Adding more substrate will overcome any enzyme inhibitor',
      rightAnswer: 'Only competitive inhibition is overcome by excess substrate (↑Km, Vmax unchanged); noncompetitive inhibition lowers Vmax and is NOT reversed by more substrate',
      why: 'Competitive inhibitors vie for the active site so substrate can outcompete them, whereas noncompetitive inhibitors bind elsewhere and reduce Vmax regardless of substrate concentration.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A drug inhibits an enzyme; kinetic analysis shows increased Km with unchanged Vmax, and the inhibition is reversed by high substrate concentrations. This is:',
      options: [
        { id: 'a', text: 'Noncompetitive inhibition' },
        { id: 'b', text: 'Competitive inhibition' },
        { id: 'c', text: 'Irreversible inhibition' },
        { id: 'd', text: 'Allosteric activation' },
      ],
      answerId: 'b',
      explanation: 'Increased Km with unchanged Vmax, overcome by excess substrate, is the signature of competitive inhibition (the inhibitor and substrate compete for the active site).',
      tests: 'exam',
    },
  ],
};

export default enzymeInhibitionRegulation;
