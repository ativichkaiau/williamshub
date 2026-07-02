import type { Lecture } from '../../lib/types';
import { BODY_FLUID_COMPARTMENTS } from '../../lib/figures';

export const bodyFluidCompartments: Lecture = {
  id: 'body-fluid-compartments',
  title: 'Body Fluid Compartments & Electrolyte Distribution',
  system: 'physiology',
  source: 'L2 — Cellular Homeostasis',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'L2 Cellular Homeostasis' },
    { kind: 'mechanism', label: 'ICF vs ECF' },
    { kind: 'exam', label: '60-40-20 rule' },
  ],

  highYield: [
    '**Total body water ≈ 60% of body weight** (the "60-40-20 rule"): **ICF ≈ 40%** of body weight (**two-thirds** of body water), **ECF ≈ 20%** (**one-third**). ECF splits into **interstitial fluid ≈ 15%** (three-quarters of ECF) and **plasma ≈ 5%** (one-quarter of ECF).',
    '**The barriers between compartments:** the **cell membrane** separates ICF from ECF; the **capillary wall** separates plasma from interstitial fluid. Water moves freely between all compartments by osmosis; solutes are restricted by these barriers.',
    '**Electrolyte distribution is strikingly different.** **ICF: high K⁺, Mg²⁺, phosphate, and protein.** **ECF: high Na⁺, Cl⁻, and HCO₃⁻.** This gradient is set and maintained by the **Na⁺/K⁺-ATPase** (pumps Na⁺ out, K⁺ in) and is the basis of the resting membrane potential ([[resting-membrane-potential-nernst]]).',
    '**Plasma vs interstitial fluid** are similar in small ions but differ in **protein** — plasma is protein-rich (albumin), which generates **oncotic (colloid osmotic) pressure** that holds water in the vessels; the capillary is nearly protein-impermeable.',
    '**Osmolality is equal across compartments at steady state** (water equilibrates), so a change in ECF osmolality shifts water into or out of cells — the reason hyper-/hyponatraemia cause cell shrinkage/swelling (and neurological symptoms).',
  ],

  mechanism: {
    title: 'Two-thirds in, one-third out — pumps keep it so',
    steps: [
      { id: 's1', label: 'TBW ≈ 60%: ICF 40% (2/3), ECF 20% (1/3)', emphasis: 'key' },
      { id: 's2', label: 'ECF = interstitial (15%) + plasma (5%)' },
      { id: 's3', label: 'ICF high K⁺; ECF high Na⁺ — set by Na⁺/K⁺-ATPase', emphasis: 'key' },
      { id: 's4', label: 'Cell membrane (ICF/ECF) + capillary wall (plasma/interstitial)' },
      { id: 's5', label: 'Osmolality equalises → ECF change shifts water in/out of cells', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'High intracellular K⁺, high extracellular Na⁺', mechanism: 'Maintained by the Na⁺/K⁺-ATPase', significance: 'key' },
    { sign: 'ICF is two-thirds of total body water', mechanism: '60-40-20 rule', significance: 'key' },
    { sign: 'Plasma holds water via albumin', mechanism: 'Oncotic (colloid osmotic) pressure', significance: 'supportive' },
    { sign: 'Hyponatraemia → cerebral oedema', mechanism: 'Low ECF osmolality → water enters brain cells', significance: 'key' },
    { sign: 'Oedema from low albumin', mechanism: 'Reduced oncotic pressure → fluid to interstitium', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Largest fluid compartment', meaning: 'Intracellular fluid (ICF, ~40% body weight)' },
    { clue: 'Compartment separated from plasma by the capillary wall', meaning: 'Interstitial fluid' },
    { clue: 'Pump maintaining the ICF/ECF ionic difference', meaning: 'Na⁺/K⁺-ATPase' },
    { clue: 'Pressure keeping water in the plasma', meaning: 'Oncotic (colloid osmotic) pressure (albumin)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Compartment physiology underlies IV-fluid distribution, oedema (low albumin/Starling), and dysnatraemias (water shifts → neuro symptoms). The ionic gradients set the resting potential ([[resting-membrane-potential-nernst]]); volume regulated by feedback ([[homeostasis-feedback-control]]).' },
  ],

  mnemonics: [
    { hook: '"60-40-20": TBW 60%, ICF 40%, ECF 20% (2/3 in, 1/3 out)', expansion: ['ECF = interstitial 15% + plasma 5%'] },
    { hook: 'ICF = K⁺ inside; ECF = Na⁺ outside (pump keeps it)', expansion: ['Basis of RMP'] },
  ],

  traps: [
    {
      questionCategory: 'ICF vs ECF proportion',
      wrongInstinct: 'Most body water is in the extracellular fluid',
      rightAnswer: 'Most body water is INTRACELLULAR (ICF ≈ two-thirds of total body water); ECF is only one-third',
      why: 'The 60-40-20 rule: ICF 40% of body weight vs ECF 20% — the majority of water is inside cells.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Using the "60-40-20" rule, the intracellular fluid represents approximately what fraction of total body water?',
      options: [
        { id: 'a', text: 'One-third' },
        { id: 'b', text: 'One-half' },
        { id: 'c', text: 'Two-thirds' },
        { id: 'd', text: 'One-quarter' },
      ],
      answerId: 'c',
      explanation: 'ICF (~40% of body weight) is two-thirds of total body water (~60%); ECF (~20%) is one-third, subdivided into interstitial fluid (~15%) and plasma (~5%).',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The high intracellular potassium and high extracellular sodium concentrations are maintained primarily by:',
      options: [
        { id: 'a', text: 'Simple diffusion' },
        { id: 'b', text: 'The Na⁺/K⁺-ATPase' },
        { id: 'c', text: 'Osmosis' },
        { id: 'd', text: 'Oncotic pressure' },
      ],
      answerId: 'b',
      explanation: 'The Na⁺/K⁺-ATPase actively pumps Na⁺ out and K⁺ in, establishing the characteristic ICF (high K⁺) vs ECF (high Na⁺) gradients that underlie the resting membrane potential.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Body fluid compartments', svg: BODY_FLUID_COMPARTMENTS, caption: '60-40-20: ICF 40% (high K⁺) vs ECF 20% (high Na⁺); ECF = interstitial 15% + plasma 5%. Na⁺/K⁺-ATPase maintains the gradient.' },
  ],
};

export default bodyFluidCompartments;
