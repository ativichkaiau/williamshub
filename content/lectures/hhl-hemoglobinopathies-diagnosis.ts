import type { Lecture } from '../../lib/types';

export const hhlHemoglobinopathiesDiagnosis: Lecture = {
  id: 'hhl-hemoglobinopathies-diagnosis',
  title: 'Hemoglobinopathies & Laboratory Diagnosis',
  system: 'heme',
  source: 'L7 — Thalassemia & Hemoglobinopathies',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L7 Thalassemia & Hbpathies' },
    { kind: 'disease', label: 'HbE · HbE/β-thal · HbCS' },
    { kind: 'investigation', label: 'Hb typing · DCIP · OF' },
  ],

  highYield: [
    '**HbE is the commonest hemoglobinopathy in Thailand / SE Asia** — a **β-globin codon 26 point mutation (Glu→Lys)** that is both a structural variant and a mild β-thalassemia. Carriers/homozygotes have **microcytosis with many target cells** but little or no anemia.',
    '**HbE/β-thalassemia is the major clinical burden here**: a compound heterozygote of HbE + a β-thal allele, with **highly variable severity** from mild anemia to a **transfusion-dependent, β-thal-major-like disease**.',
    '**Hb Constant Spring (HbCS)** is a **non-deletional α-thalassemia** — an α-globin stop-codon mutation making an elongated, unstable α-chain; combined with α-thal-1 it can produce an HbH-like disease.',
    '**Diagnostic ladder**: CBC/indices → blood smear (**target cells, microcytosis**) → **Hb typing / electrophoresis or HPLC** to name the variant → **DCIP screen (detects unstable HbE)** and **osmotic-fragility (OF) screen** for thalassemia → **molecular/DNA confirmation** (PCR, gap-PCR).',
    '**Screening drives prevention**: cheap MCV/MCH + DCIP/OF on couples flags carriers; confirmation identifies **at-risk pairs** offered prenatal diagnosis — the rationale for Thailand’s national thalassemia-prevention program (see [[hhl-alpha-beta-thalassemia]]).',
  ],

  mechanism: {
    title: 'Variant Hb → screen → type → confirm',
    steps: [
      { id: 's1', label: 'β-codon 26 Glu→Lys makes HbE (mildly unstable)', emphasis: 'key' },
      { id: 's2', label: 'CBC + smear: microcytosis, target cells' },
      { id: 's3', label: 'DCIP + OF screen flag HbE / thalassemia', emphasis: 'key' },
      { id: 's4', label: 'Hb typing / HPLC names the variant' },
      { id: 's5', label: 'DNA/PCR confirms and defines the couple’s risk' },
    ],
  },

  examFindings: [
    { sign: 'Numerous target cells with microcytosis', mechanism: 'HbE / thalassemic red cells', significance: 'key' },
    { sign: 'HbE band on Hb typing / HPLC', mechanism: 'β-codon 26 variant hemoglobin', significance: 'key' },
    { sign: 'Positive DCIP (dichlorophenol-indophenol) test', mechanism: 'Detects unstable HbE', significance: 'supportive' },
    { sign: 'Severe anemia in an "HbE" patient', mechanism: 'Suspect HbE/β-thalassemia compound state', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Hb typing / electrophoresis / HPLC', meaning: 'Names variant Hb (HbE, HbA₂, HbF, HbCS)' },
    { clue: 'Positive DCIP screen', meaning: 'Unstable hemoglobin (HbE) present' },
    { clue: 'Positive osmotic-fragility (OF) screen', meaning: 'Thalassemia trait — decreased fragility' },
    { clue: 'PCR / gap-PCR / DNA analysis', meaning: 'Confirms genotype (α-thal-1, HbCS, β-mutation)' },
  ],

  treatment: [
    { logic: 'HbE trait/disease: reassure, no treatment', detail: 'Mild; avoid mislabelling target-cell microcytosis as iron deficiency.' },
    { logic: 'HbE/β-thalassemia: manage by severity', detail: 'From observation to regular transfusion + chelation, as for β-thal.' },
    { logic: 'Couple screening + prenatal diagnosis', detail: 'Identify at-risk pairs to prevent severe fetal disease.' },
  ],

  mnemonics: [
    { hook: 'HbE = Extremely common in the East, codon 26, target cells', expansion: ['Mild alone', 'Dangerous when paired with β-thal'] },
    { hook: 'DCIP finds HbE; OF finds thalassemia; typing names them', expansion: ['Screen → type → PCR confirm'] },
  ],

  traps: [
    {
      questionCategory: 'A Thai patient with microcytosis + target cells',
      wrongInstinct: 'Microcytosis with target cells and mild anemia is iron deficiency',
      rightAnswer: 'In SE Asia this pattern is far more often HbE or a thalassemia trait — do Hb typing/DCIP rather than reflexively giving iron',
      why: 'HbE and thalassemia are extremely prevalent locally and give microcytic target-cell pictures that iron therapy will not fix.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which hemoglobin variant is the most common in Thailand and arises from a point mutation at β-globin codon 26 (Glu→Lys)?',
      options: [
        { id: 'a', text: 'Hemoglobin S' },
        { id: 'b', text: 'Hemoglobin E' },
        { id: 'c', text: 'Hemoglobin C' },
        { id: 'd', text: 'Hemoglobin Bart’s' },
      ],
      answerId: 'b',
      explanation: 'HbE (β26 Glu→Lys) is the commonest hemoglobinopathy in SE Asia; it behaves as a mild β-thalassemia with microcytosis and target cells and is detected by the DCIP screen.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'A couple is screened; both have low MCV and one has a positive DCIP test. Which test best names the specific hemoglobin variants present?',
      options: [
        { id: 'a', text: 'Serum ferritin' },
        { id: 'b', text: 'Hemoglobin typing (electrophoresis / HPLC)' },
        { id: 'c', text: 'Reticulocyte count' },
        { id: 'd', text: 'Peripheral smear alone' },
      ],
      answerId: 'b',
      explanation: 'DCIP and OF are screens; Hb typing (electrophoresis or HPLC) identifies and quantifies the variants (HbE, HbA₂, HbF), with DNA analysis for final confirmation.',
      tests: 'investigation',
    },
  ],
};

export default hhlHemoglobinopathiesDiagnosis;
