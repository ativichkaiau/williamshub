import type { Lecture } from '../../lib/types';
import { FATTY_ACID_TYPES } from '../../lib/figures';

export const fattyAcidsMembranes: Lecture = {
  id: 'fatty-acids-membranes',
  title: 'Fatty Acids, Triglycerides & Membranes',
  system: 'molecular',
  source: 'L12 — Lipid Chemistry',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Molecular' },
    { kind: 'lecture', label: 'L12 Lipid Chemistry' },
    { kind: 'disease', label: 'Lipids' },
    { kind: 'mechanism', label: 'Saturation & bilayers' },
    { kind: 'exam', label: 'Cis vs trans / ω-3' },
  ],

  highYield: [
    '**Fatty acids** = a carboxylic acid + hydrocarbon chain (amphipathic). **Saturated** (no double bonds) pack tightly → **higher melting point (solid)**; **cis-unsaturated** have kinks → **lower melting point (liquid/fluid)**.',
    'Nomenclature: carbons:double bonds; **ω (omega) number** counts the first double bond from the **methyl end** (**ω-3, ω-6**). **Essential fatty acids (linoleic ω-6, α-linolenic ω-3)** cannot be synthesized and must be eaten.',
    '**Trans fatty acids** (artificial, from hydrogenation) are straight like saturated fats and **raise cardiovascular risk**.',
    '**Triglycerides** = glycerol + **3 fatty acids** (ester bonds) — the main **energy-storage** lipid in adipose tissue.',
    '**Phospholipids** = glycerol + 2 fatty acids + phosphate + a polar head — **amphipathic**, forming the **cell-membrane bilayer** (and liposomes). **Sphingolipids** are built on a sphingosine backbone (ceramide → cerebrosides/gangliosides; blood-group antigens).',
  ],

  mechanism: {
    title: 'Chain saturation → physical property → biological role',
    steps: [
      { id: 's1', label: 'Saturated (straight) vs cis-unsaturated (kinked)', emphasis: 'key' },
      { id: 's2', label: 'Kinks lower melting point → membrane fluidity' },
      { id: 's3', label: 'Triglycerides store energy (3 FAs on glycerol)' },
      { id: 's4', label: 'Amphipathic phospholipids form the bilayer' },
    ],
  },

  examFindings: [
    { sign: 'Oils (unsaturated) liquid vs fats (saturated) solid at room temp', mechanism: 'Cis double bonds lower melting point', significance: 'key' },
    { sign: 'Dietary requirement for linoleic/linolenic acid', mechanism: 'Essential fatty acids (ω-6/ω-3)', significance: 'key' },
    { sign: 'Trans fats increase cardiovascular risk', mechanism: 'Straight artificial unsaturated chains', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Degree/position of saturation (ω number)', meaning: 'Physical properties; essential FA class' },
    { clue: 'Cis vs trans geometry', meaning: 'Membrane fluidity / cardiovascular risk' },
    { clue: 'Glycerol backbone with 2 vs 3 acyl chains', meaning: 'Phospholipid vs triglyceride' },
  ],

  treatment: [
    { logic: 'Favor unsaturated over trans/saturated fats', detail: 'Cardiovascular health.' },
    { logic: 'Membrane fluidity depends on lipid saturation', detail: 'Basis of bilayer behavior.' },
  ],

  mnemonics: [
    { hook: 'Saturated = Straight & Solid; cis-unsaturated = kinked & fluid', expansion: ['Trans = straight & harmful'] },
    { hook: 'ω counts double bond from the methyl end (ω-3, ω-6 essential)', expansion: ['Δ counts from carboxyl end'] },
  ],

  traps: [
    {
      questionCategory: 'Why unsaturated fats are more fluid',
      wrongInstinct: 'Unsaturated fats are liquid because they have fewer carbons than saturated fats',
      rightAnswer: 'Cis double bonds introduce kinks that prevent tight packing, lowering the melting point — independent of chain length',
      why: 'The kink from a cis double bond disrupts van der Waals packing, so unsaturated fats stay fluid at room temperature and increase membrane fluidity.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Compared with a saturated fatty acid of the same length, a cis-unsaturated fatty acid has a:',
      options: [
        { id: 'a', text: 'Higher melting point because it packs more tightly' },
        { id: 'b', text: 'Lower melting point because the cis double bond kink prevents tight packing' },
        { id: 'c', text: 'Identical melting point' },
        { id: 'd', text: 'Higher melting point because it has more hydrogen' },
      ],
      answerId: 'b',
      explanation: 'A cis double bond creates a kink that disrupts packing, lowering the melting point — which is why unsaturated fats (oils) are liquid and increase membrane fluidity.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Fatty-acid types', svg: FATTY_ACID_TYPES, caption: 'Saturated (straight, solid), cis-unsaturated (kinked, fluid), trans-unsaturated (straight, artificial). ω counts from the methyl end.' },
  ],
};

export default fattyAcidsMembranes;
