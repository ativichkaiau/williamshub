import type { Lecture } from '../../lib/types';

export const hemoglobinMyoglobin: Lecture = {
  id: 'hemoglobin-myoglobin',
  title: 'Hemoglobin, Myoglobin & Sickle Cell',
  system: 'molecular',
  source: 'L1 — Amino Acids & Proteins',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Molecular' },
    { kind: 'lecture', label: 'L1 Amino Acids & Proteins' },
    { kind: 'disease', label: 'Globular O₂ carriers' },
    { kind: 'mechanism', label: 'Cooperativity' },
    { kind: 'exam', label: 'Sickle cell' },
  ],

  highYield: [
    'Both are heme O₂-binding globular proteins. **Myoglobin = a single subunit** (muscle O₂ storage) with **hyperbolic** binding — high affinity even at low pO₂.',
    '**Hemoglobin = a tetramer (2α + 2β)** with **quaternary structure** → **cooperative, sigmoidal** O₂ binding: binding one O₂ raises the affinity of the others.',
    'Cooperativity reflects a shift from the low-affinity **T (tense/taut) state** to the high-affinity **R (relaxed) state** — ideal for **loading O₂ in the lungs and unloading it in tissues**.',
    '**Sickle-cell disease** = a **missense mutation** in the β-globin gene (**Glu → Val at position 6**, HbS): a charged/polar glutamate is replaced by a nonpolar valine → HbS polymerizes when deoxygenated → sickling.',
    'The charge change lets HbS be separated from HbA by **electrophoresis** — a protein-charge property used diagnostically.',
  ],

  mechanism: {
    title: 'Subunit structure sets the O₂-binding behavior',
    steps: [
      { id: 's1', label: 'Myoglobin: 1 subunit → hyperbolic (storage)' },
      { id: 's2', label: 'Hemoglobin: 4 subunits → cooperative sigmoidal', emphasis: 'key' },
      { id: 's3', label: 'T (low affinity) ↔ R (high affinity) transition' },
      { id: 's4', label: 'β6 Glu→Val → HbS polymerizes when deoxygenated', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Sigmoidal O₂-dissociation curve', mechanism: 'Cooperative binding by the hemoglobin tetramer', significance: 'key' },
    { sign: 'Sickled red cells / vaso-occlusive pain', mechanism: 'Deoxygenated HbS polymerization', significance: 'key' },
    { sign: 'Abnormal band on hemoglobin electrophoresis', mechanism: 'Charge change from Glu→Val (HbS)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Hemoglobin electrophoresis', meaning: 'Separates HbA vs HbS (charge)' },
    { clue: 'O₂-dissociation curve shape', meaning: 'Myoglobin (hyperbolic) vs Hb (sigmoidal)' },
    { clue: 'Peripheral smear', meaning: 'Sickled cells' },
  ],

  treatment: [
    { logic: 'Structure–function explains the disease', detail: 'A single-residue change alters the whole protein’s behavior.' },
    { logic: 'Hydroxyurea raises HbF in sickle-cell disease', detail: 'Reduces polymerization (pharmacology detail).' },
  ],

  mnemonics: [
    { hook: 'Myoglobin = Monomer (hyperbolic); Hemoglobin = tetramer (sigmoidal)', expansion: ['Quaternary structure enables cooperativity'] },
    { hook: 'Sickle = β6 Glu→Val (HbS), a missense mutation', expansion: ['Polar → nonpolar; separable by electrophoresis'] },
  ],

  traps: [
    {
      questionCategory: 'Why hemoglobin is cooperative',
      wrongInstinct: 'Myoglobin binds O₂ cooperatively because it has high affinity',
      rightAnswer: 'Cooperativity requires multiple interacting subunits — only the hemoglobin tetramer is cooperative (sigmoidal); myoglobin is a single subunit (hyperbolic)',
      why: 'Cooperative (sigmoidal) binding depends on subunit-to-subunit communication (T↔R), which a monomeric protein like myoglobin cannot show.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Sickle-cell disease results from which molecular change in the β-globin chain?',
      options: [
        { id: 'a', text: 'A frameshift causing a premature stop codon' },
        { id: 'b', text: 'A missense mutation replacing glutamate with valine at position 6' },
        { id: 'c', text: 'Deletion of the entire β-globin gene' },
        { id: 'd', text: 'Loss of the heme-binding histidine' },
      ],
      answerId: 'b',
      explanation: 'HbS arises from a single missense mutation (Glu→Val at β6), replacing a polar with a nonpolar residue; deoxygenated HbS polymerizes, sickling the red cell.',
      tests: 'exam',
    },
  ],
};

export default hemoglobinMyoglobin;
