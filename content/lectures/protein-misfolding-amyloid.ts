import type { Lecture } from '../../lib/types';

export const proteinMisfoldingAmyloid: Lecture = {
  id: 'protein-misfolding-amyloid',
  title: 'Protein Misfolding & Amyloid',
  system: 'molecular',
  source: 'L1 — Amino Acids & Proteins',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Molecular' },
    { kind: 'lecture', label: 'L1 Amino Acids & Proteins' },
    { kind: 'disease', label: 'Amyloidosis' },
    { kind: 'mechanism', label: 'β-sheet aggregation' },
    { kind: 'exam', label: 'Amyloid diseases' },
  ],

  highYield: [
    'Failure to fold into the native structure usually gives **inactive** protein; sometimes misfolded proteins gain **toxic function** and aggregate.',
    '**Amyloid** = misfolded protein that converts from α-helix to **β-sheet**, forming **insoluble fibrils** that deposit in tissue.',
    'Key amyloidoses: **β-amyloid → Alzheimer disease**; **α-synuclein → Parkinson disease**; **IAPP (islet amyloid) → type 2 diabetes**; **Ig light chains → multiple myeloma (AL amyloid)**; **calcitonin → medullary thyroid carcinoma**; **β2-microglobulin → dialysis-related amyloidosis**.',
    '**Prion disease** (Creutzfeldt–Jakob, “mad cow”): a misfolded **β-sheet PrPˢᶜ induces normal PrP to misfold** — a **transmissible spongiform encephalopathy**.',
    'Amyloid deposits are **fibrous and insoluble**, staining with Congo red (apple-green birefringence) — the structural basis for organ dysfunction (heart, kidney, brain).',
  ],

  mechanism: {
    title: 'α-helix → β-sheet → insoluble fibril → tissue deposition',
    steps: [
      { id: 's1', label: 'Protein misfolds (α-helix → β-sheet)', emphasis: 'key' },
      { id: 's2', label: 'β-sheets aggregate into insoluble fibrils' },
      { id: 's3', label: 'Amyloid deposits in tissue' },
      { id: 's4', label: 'Prion: misfolded PrP templates more misfolding', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Progressive dementia with cerebral β-amyloid plaques', mechanism: 'Alzheimer amyloidosis', significance: 'key' },
    { sign: 'Restrictive cardiomyopathy / proteinuria + monoclonal light chains', mechanism: 'AL amyloidosis (myeloma)', significance: 'key' },
    { sign: 'Rapidly progressive dementia + myoclonus', mechanism: 'Prion disease (CJD)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Congo red stain (apple-green birefringence)', meaning: 'Confirms amyloid deposits' },
    { clue: 'Serum/urine monoclonal protein', meaning: 'AL amyloid (myeloma)' },
    { clue: 'Precursor protein identity', meaning: 'Determines the amyloid type & disease' },
  ],

  treatment: [
    { logic: 'Treat the source of the amyloidogenic protein', detail: 'e.g. chemotherapy for myeloma-associated AL amyloid.' },
    { logic: 'Prions have no cure and are transmissible', detail: 'Infection-control precautions.' },
  ],

  mnemonics: [
    { hook: 'Amyloid = β-sheet, insoluble, Congo-red positive', expansion: ['α-helix → β-sheet conversion'] },
    { hook: 'β-amyloid=Alzheimer, α-synuclein=Parkinson, IAPP=T2DM, light chains=myeloma', expansion: ['Match precursor to disease'] },
  ],

  traps: [
    {
      questionCategory: 'Mechanism of prion disease',
      wrongInstinct: 'Prion diseases are caused by a virus or a mutation in a nucleic acid',
      rightAnswer: 'Prions are misfolded proteins (PrPˢᶜ) that template the misfolding of normal PrP — no nucleic acid is involved',
      why: 'The infectious agent is protein-only: a β-sheet-rich conformer converts normal cellular prion protein, propagating the disease and making it transmissible without DNA or RNA.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A misfolded protein propagates disease by converting normally folded copies of the same protein into a β-sheet-rich, aggregation-prone form, without any nucleic acid. This describes:',
      options: [
        { id: 'a', text: 'A retrovirus' },
        { id: 'b', text: 'A prion' },
        { id: 'c', text: 'A point mutation' },
        { id: 'd', text: 'A chaperone' },
      ],
      answerId: 'b',
      explanation: 'Prions are protein-only infectious agents: the misfolded PrPˢᶜ templates conversion of normal PrP into the pathogenic β-sheet form, causing transmissible spongiform encephalopathies such as CJD.',
      tests: 'exam',
    },
  ],
};

export default proteinMisfoldingAmyloid;
