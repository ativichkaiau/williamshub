import type { Lecture } from '../../lib/types';

export const proteinTargetingPtm: Lecture = {
  id: 'protein-targeting-ptm',
  title: 'Protein Targeting & Post-translational Modification',
  system: 'molecular',
  source: 'L8 — Translation & Protein Processing',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Molecular' },
    { kind: 'lecture', label: 'L8 Translation' },
    { kind: 'disease', label: 'Protein processing' },
    { kind: 'mechanism', label: 'SRP / M6P / ubiquitin' },
    { kind: 'exam', label: 'I-cell disease' },
  ],

  highYield: [
    '**Protein targeting**: an **N-terminal signal sequence** is bound by the **signal recognition particle (SRP)**, which docks the ribosome on the **ER translocon** for **co-translational** import; proteins **without a signal stay in the cytosol**.',
    'Post-translational modifications: proteolytic trimming, **phosphorylation**, **glycosylation**, hydroxylation. **N-linked glycosylation** adds an oligosaccharide (via **dolichol phosphate**) to **asparagine** in the ER, then processed in the Golgi.',
    '**Lysosomal enzymes are tagged with mannose-6-phosphate (M6P)** for delivery; a defect in the **phosphotransferase → I-cell disease (mucolipidosis II)**, where lysosomal enzymes are secreted instead of delivered.',
    '**Chaperones** (bacterial **GroEL**, eukaryotic **heat-shock proteins/HSP**) assist folding and prevent aggregation. Damaged/unneeded proteins are tagged with **ubiquitin** and degraded by the **proteasome** (ATP-dependent).',
    'Protein-processing diseases: **Huntington disease** (autosomal-dominant **CAG (polyglutamine) repeat expansion ≥40** in HTT → toxic aggregation) and **cystic fibrosis** (**CFTR** Cl⁻-channel; **ΔF508** — deletion of Phe508 — is the commonest mutation).',
  ],

  mechanism: {
    title: 'Route, modify, fold, or destroy the new protein',
    steps: [
      { id: 's1', label: 'Signal sequence + SRP → ER translocon', emphasis: 'key' },
      { id: 's2', label: 'Glycosylation / phosphorylation / trimming' },
      { id: 's3', label: 'M6P tag routes enzymes to lysosomes' },
      { id: 's4', label: 'Misfolded/old proteins → ubiquitin-proteasome', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Lysosomal enzymes found in blood, not lysosomes', mechanism: 'I-cell disease (M6P phosphotransferase defect)', significance: 'key' },
    { sign: 'Progressive chorea + autosomal-dominant CAG expansion', mechanism: 'Huntington disease (toxic polyQ HTT)', significance: 'key' },
    { sign: 'Thick secretions with a ΔF508 CFTR mutation', mechanism: 'Cystic fibrosis (misprocessed Cl⁻ channel)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Presence/absence of a signal sequence', meaning: 'ER-targeted vs cytosolic protein' },
    { clue: 'M6P tagging', meaning: 'Lysosomal delivery (I-cell disease if absent)' },
    { clue: 'Repeat length (CAG) / specific mutation (ΔF508)', meaning: 'Huntington / cystic fibrosis' },
  ],

  treatment: [
    { logic: 'Proteostasis is drug-targetable', detail: 'Proteasome inhibitors (e.g. in myeloma); chaperone/CFTR modulators.' },
    { logic: 'Glycosylation & M6P sorting are essential', detail: 'Their failure causes storage disease.' },
  ],

  mnemonics: [
    { hook: 'M6P tags enzymes for lysosomes; lose it → I-cell disease', expansion: ['Enzymes secreted instead'] },
    { hook: 'Huntington = CAG (poly-Q) ≥40, autosomal dominant', expansion: ['Toxic protein aggregation'] },
  ],

  traps: [
    {
      questionCategory: 'I-cell disease mechanism',
      wrongInstinct: 'I-cell disease is caused by a deficiency of a single lysosomal enzyme',
      rightAnswer: 'I-cell disease results from a phosphotransferase defect that fails to add the mannose-6-phosphate tag, so ALL lysosomal enzymes are mis-sorted (secreted) — not a single enzyme deficiency',
      why: 'Without the M6P sorting signal, lysosomal hydrolases are secreted rather than delivered, so multiple enzymes are missing from lysosomes — a trafficking, not an enzyme-synthesis, defect.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A newborn has coarse facial features and elevated lysosomal enzymes in the blood but deficient enzymes within lysosomes. The defect is in:',
      options: [
        { id: 'a', text: 'A single lysosomal acid hydrolase' },
        { id: 'b', text: 'The phosphotransferase that adds mannose-6-phosphate (I-cell disease)' },
        { id: 'c', text: 'The signal recognition particle' },
        { id: 'd', text: 'Ubiquitin ligase' },
      ],
      answerId: 'b',
      explanation: 'I-cell disease (mucolipidosis II) is caused by defective phosphotransferase, so lysosomal enzymes lack the mannose-6-phosphate tag and are secreted instead of delivered to lysosomes.',
      tests: 'exam',
    },
  ],
};

export default proteinTargetingPtm;
