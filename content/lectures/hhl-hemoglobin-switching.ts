import type { Lecture } from '../../lib/types';

export const hhlHemoglobinSwitching: Lecture = {
  id: 'hhl-hemoglobin-switching',
  title: 'Hemoglobin Structure & Switching',
  system: 'heme',
  source: 'L7 — Thalassemia & Hemoglobinopathies',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L7 Thalassemia & Hbpathies' },
    { kind: 'mechanism', label: 'Globin switching' },
    { kind: 'investigation', label: 'HbA · HbA₂ · HbF' },
  ],

  highYield: [
    'Every hemoglobin is a **tetramer of 2 α-like + 2 β-like globin chains**, each cradling a heme. Adult blood = **HbA (α₂β₂, ~97%)**, **HbA₂ (α₂δ₂, ~2.5%)** and **HbF (α₂γ₂, <1%)**.',
    '**Developmental switching**: embryonic (**Gower-1, Gower-2, Portland**) → **fetal HbF (α₂γ₂)** → **adult HbA (α₂β₂)**. The **γ→β switch happens around birth**, and HbF falls to trace levels by ~6 months.',
    '**HbF has a LEFT-shifted O₂ curve (higher affinity)** because it **binds 2,3-BPG poorly** — this lets the fetus pull O₂ from maternal HbA across the placenta.',
    '**Gene dosage sets up thalassemia**: **α-globin = 4 genes (2 per chromosome 16, αα/αα)**; **β-globin = 2 genes (1 per chromosome 11)**. This asymmetry explains why α-thalassemia is graded 1–4 gene deletions and β-thalassemia raises HbA₂ (see [[hhl-alpha-beta-thalassemia]]).',
  ],

  mechanism: {
    title: 'From embryonic to adult globin — a scheduled switch',
    steps: [
      { id: 's1', label: 'Embryonic: Gower-1/2, Portland (ζ, ε chains)' },
      { id: 's2', label: 'Fetal: HbF (α₂γ₂) dominates', emphasis: 'key' },
      { id: 's3', label: 'HbF binds 2,3-BPG poorly → high O₂ affinity', emphasis: 'key' },
      { id: 's4', label: 'Around birth: γ→β switch' },
      { id: 's5', label: 'Adult: HbA (α₂β₂) with minor HbA₂ and trace HbF' },
    ],
  },

  examFindings: [
    { sign: 'Left-shifted O₂-dissociation curve in the fetus', mechanism: 'HbF high affinity (poor 2,3-BPG binding)', significance: 'key' },
    { sign: 'HbA₂ (α₂δ₂) ~2.5% in a normal adult', mechanism: 'Minor δ-chain hemoglobin — rises in β-thal trait', significance: 'key' },
    { sign: 'HbF persisting/high beyond infancy', mechanism: 'Impaired β-chain output (e.g. β-thalassemia, HPFH)', significance: 'supportive' },
    { sign: 'Four α-globin genes vs two β-globin genes', mechanism: 'Gene dosage underlying thalassemia grading', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Hb typing shows α₂β₂ predominant', meaning: 'Normal adult HbA pattern' },
    { clue: 'HbA₂ (α₂δ₂) raised above ~3.5%', meaning: 'β-thalassemia trait' },
    { clue: 'HbF markedly elevated', meaning: 'β-globin production impaired or hereditary persistence' },
    { clue: '2,3-BPG interaction', meaning: 'Explains HbF > HbA oxygen affinity' },
  ],

  treatment: [
    { logic: 'Switching biology is therapeutically exploitable', detail: 'Reactivating γ-globin (raising HbF) compensates for β-chain disorders.' },
    { logic: 'Interpret Hb typing against age', detail: 'HbF is normal in a neonate but abnormal if it persists high in an older child/adult.' },
  ],

  mnemonics: [
    { hook: 'Fetal = Fun with γ (α₂γ₂); Adult = A with β (α₂β₂)', expansion: ['HbA₂ = α₂δ₂ (minor)', 'γ→β switch at birth'] },
    { hook: 'HbF loves O₂ because it hates BPG', expansion: ['Poor 2,3-BPG binding → left shift → grabs maternal O₂'] },
  ],

  traps: [
    {
      questionCategory: 'Why fetal hemoglobin has higher O₂ affinity',
      wrongInstinct: 'HbF binds oxygen more tightly because the γ-chain binds O₂ better than the β-chain',
      rightAnswer: 'HbF has higher O₂ affinity mainly because it binds 2,3-BPG poorly (the γ-chain lacks the β-chain residues that grip BPG), left-shifting the curve',
      why: 'The affinity difference is about reduced 2,3-BPG stabilisation of the T-state, not a change in the O₂-binding site itself.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'What is the chain composition of normal adult hemoglobin A (HbA)?',
      options: [
        { id: 'a', text: 'α₂γ₂' },
        { id: 'b', text: 'α₂β₂' },
        { id: 'c', text: 'α₂δ₂' },
        { id: 'd', text: 'β₄' },
      ],
      answerId: 'b',
      explanation: 'HbA = α₂β₂ (~97% of adult Hb). α₂γ₂ is HbF, α₂δ₂ is HbA₂, and β₄ is the abnormal HbH tetramer.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Fetal hemoglobin (HbF) has a higher oxygen affinity than adult HbA principally because it:',
      options: [
        { id: 'a', text: 'Contains extra heme groups' },
        { id: 'b', text: 'Binds 2,3-bisphosphoglycerate poorly' },
        { id: 'c', text: 'Has more subunits than HbA' },
        { id: 'd', text: 'Cannot form the T (tense) state' },
      ],
      answerId: 'b',
      explanation: 'The γ-chains of HbF bind 2,3-BPG weakly, so the curve is left-shifted (higher affinity), letting the fetus extract O₂ from maternal blood.',
      tests: 'mechanism',
    },
  ],
};

export default hhlHemoglobinSwitching;
