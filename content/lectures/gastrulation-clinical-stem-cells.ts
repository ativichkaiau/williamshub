import type { Lecture } from '../../lib/types';

export const gastrulationClinicalStemCells: Lecture = {
  id: 'gastrulation-clinical-stem-cells',
  title: 'Gastrulation Defects & Stem-cell Potency',
  system: 'repro',
  source: 'L3 — Third Week & Germ Layer Derivatives',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Development' },
    { kind: 'lecture', label: 'HGD L3' },
    { kind: 'disease', label: 'Teratoma / caudal regression' },
    { kind: 'mechanism', label: 'Stem-cell potency' },
    { kind: 'exam', label: 'Primitive streak remnants' },
  ],
  highYield: [
    'Persistence of primitive-streak cells can produce a **sacrococcygeal teratoma**, often containing tissues from multiple germ layers because the cells retain broad developmental potential.',
    'Disordered left-right signaling (including NODAL/LEFTY/PITX2 pathways) can produce **situs inversus** or more complex heterotaxy.',
    '**Caudal regression syndrome** reflects abnormal caudal mesoderm/gastrulation and can affect lumbosacral vertebrae, lower limbs, anorectal region, kidneys/urinary tract, and internal genital structures.',
    'A stem cell combines **self-renewal** with differentiation. **Totipotent** cells can form embryo plus extraembryonic tissues; **pluripotent** cells form derivatives of all three germ layers; multipotent cells form a restricted family; unipotent cells form one lineage.',
    'Embryonic stem cells come from early embryonic cells; adult stem cells maintain tissues; **induced pluripotent stem cells (iPSCs)** are somatic cells reprogrammed back toward pluripotency.',
  ],
  mechanism: {
    title: 'Developmental potency narrows with lineage commitment',
    steps: [
      { id: 's1', label: 'Zygote / early blastomere: totipotent' },
      { id: 's2', label: 'Inner-cell-mass lineage: pluripotent', emphasis: 'key' },
      { id: 's3', label: 'Tissue progenitor: multipotent' },
      { id: 's4', label: 'Committed precursor: unipotent -> differentiated cell' },
    ],
  },
  examFindings: [
    { sign: 'Sacrococcygeal mass containing tissues from three germ layers', mechanism: 'Primitive-streak remnant teratoma', significance: 'key' },
    { sign: 'Lower-limb and lumbosacral defects with urogenital/anorectal anomalies', mechanism: 'Caudal regression from abnormal caudal mesoderm', significance: 'key' },
    { sign: 'Cell forms all embryonic lineages but not placenta', mechanism: 'Pluripotent rather than totipotent', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Prenatal ultrasound/MRI of sacrococcygeal mass', meaning: 'Define teratoma extent and fetal effects' },
    { clue: 'Imaging of organ laterality', meaning: 'Distinguish situs inversus from heterotaxy' },
    { clue: 'Lineage-differentiation assay', meaning: 'Characterize stem-cell potency' },
  ],
  treatment: [
    { logic: 'Evaluate primitive-streak defects across multiple germ-layer derivatives', detail: 'The phenotype is rarely confined to one organ.' },
    { logic: 'Match stem-cell claims to the demonstrated potency level', detail: 'Self-renewal alone does not prove pluripotency.' },
  ],
  mnemonics: [
    { hook: 'Toti = total conceptus; pluri = all embryo; multi = one family; uni = one fate', expansion: ['Potency ladder'] },
    { hook: 'Primitive streak persists -> sacrococcygeal mix', expansion: ['Teratoma with multiple germ layers'] },
  ],
  traps: [
    {
      questionCategory: 'Totipotent versus pluripotent',
      wrongInstinct: 'A pluripotent cell can independently form an entire conceptus including placenta',
      rightAnswer: 'Totipotent cells can form embryonic and extraembryonic tissues; pluripotent cells form all embryonic germ-layer derivatives',
      why: 'Extraembryonic capacity is the key boundary between the terms.',
    },
  ],
  quiz: [
    {
      id: 'q1',
      stem: 'A cell can generate derivatives of ectoderm, mesoderm, and endoderm but not an entire placenta. Its potency is:',
      options: [
        { id: 'a', text: 'Totipotent' },
        { id: 'b', text: 'Pluripotent' },
        { id: 'c', text: 'Unipotent' },
        { id: 'd', text: 'Terminally differentiated' },
      ],
      answerId: 'b',
      explanation: 'Pluripotent cells can generate all three embryonic germ layers but lack the full extraembryonic capacity of totipotent cells.',
      tests: 'mechanism',
    },
  ],
};

export default gastrulationClinicalStemCells;
