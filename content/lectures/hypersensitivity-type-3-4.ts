import type { Lecture } from '../../lib/types';

export const hypersensitivityType34: Lecture = {
  id: 'hypersensitivity-type-3-4',
  title: 'Hypersensitivity Types III & IV',
  system: 'immune',
  source: 'L13 — Hypersensitivity',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Immunology' },
    { kind: 'lecture', label: 'L13 Hypersensitivity' },
    { kind: 'mechanism', label: 'Immune complex · T-cell' },
    { kind: 'exam', label: 'Type III vs IV' },
  ],

  highYield: [
    '**Type III (immune-complex) = IgG + SOLUBLE antigen forming circulating immune complexes that deposit in tissues** (vessel walls, glomeruli, joints) → **complement activation + neutrophil influx** → inflammation and damage. Antigen is soluble and circulating, distinguishing it from type II.',
    '**Type III examples:** **SLE** (anti-dsDNA complexes → nephritis, vasculitis), **post-streptococcal glomerulonephritis**, **serum sickness** (foreign proteins/antitoxin), and the **Arthus reaction** (localised complex deposition at an injection site). Presents days after antigen exposure.',
    '**Type IV (delayed-type) = T-CELL-mediated, NO antibody.** **Th1/CD8** cells respond to antigen → cytokines activate macrophages / CTLs kill targets. It is **delayed (peaks 48–72 h)** because it needs T-cell recruitment.',
    '**Type IV examples:** the **tuberculin (Mantoux) skin test**, **contact dermatitis** (nickel, poison ivy — haptens), **granulomatous diseases** (TB, sarcoidosis), **type 1 diabetes** and **multiple sclerosis** (T-cell tissue destruction), and **graft rejection**.',
    '**Distinguishing the antibody types:** II = antibody vs a **fixed** cell antigen; III = antibody vs a **soluble** antigen (complexes deposit); IV has **no antibody** (T cells) and is **delayed**. Many real diseases overlap several types.',
  ],

  mechanism: {
    title: 'Deposited complexes (III) vs delayed T cells (IV)',
    steps: [
      { id: 's1', label: 'Type III: soluble antigen + IgG → immune complexes', emphasis: 'key' },
      { id: 's2', label: '→ deposit in vessels/glomeruli/joints → complement + neutrophils', emphasis: 'key' },
      { id: 's3', label: 'Examples: SLE, PSGN, serum sickness, Arthus' },
      { id: 's4', label: 'Type IV: T cells (Th1/CD8), NO antibody, delayed 48–72 h', emphasis: 'key' },
      { id: 's5', label: 'Examples: TB skin test, contact dermatitis, T1DM, MS' },
    ],
  },

  examFindings: [
    { sign: 'Immune-complex deposition in glomeruli/vessels', mechanism: 'Type III (soluble antigen + IgG + complement/neutrophils)', significance: 'key' },
    { sign: 'Positive tuberculin (Mantoux) test at 48–72 h', mechanism: 'Type IV delayed T-cell response', significance: 'key' },
    { sign: 'Contact dermatitis to nickel/poison ivy', mechanism: 'Type IV (hapten-specific T cells)', significance: 'key' },
    { sign: 'Serum sickness days after antitoxin/foreign protein', mechanism: 'Type III immune-complex disease', significance: 'supportive' },
    { sign: 'Localised Arthus reaction at injection site', mechanism: 'Type III (local complex deposition)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Reaction peaking at 48–72 hours with no antibody', meaning: 'Type IV (delayed, T-cell)' },
    { clue: 'Disease from circulating soluble immune complexes', meaning: 'Type III (e.g. SLE nephritis, serum sickness)' },
    { clue: 'Skin test read at 2–3 days for TB exposure', meaning: 'Tuberculin (Mantoux) — type IV' },
    { clue: 'Mechanism of allergic contact dermatitis', meaning: 'Type IV (hapten-specific T cells)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Type III → treat the source antigen + immunosuppression; type IV → avoidance (contact allergens), corticosteroids/immunosuppression, and it underlies transplant rejection ([[transplant-allorecognition-rejection]]). Types I & II: [[hypersensitivity-type-1-2]].' },
  ],

  mnemonics: [
    { hook: 'Type III = "3 things stuck together" (Ag-Ab complexes deposit); Type IV = "4 = delayed, T-cell, no antibody"', expansion: ['48–72 h for type IV'] },
    { hook: 'Type IV = "TB test, Transplant, Touch (contact), Type 1 DM"', expansion: ['All T-cell mediated'] },
  ],

  traps: [
    {
      questionCategory: 'Timing of type IV',
      wrongInstinct: 'All hypersensitivity reactions occur within minutes',
      rightAnswer: 'Type IV is DELAYED — it peaks at 48–72 hours because it requires T-cell recruitment (no antibody involved)',
      why: 'Only type I is immediate (minutes). Type IV is cell-mediated and delayed, which is why the tuberculin test is read at 2–3 days.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The tuberculin (Mantoux) skin test read at 48–72 hours is an example of which hypersensitivity type?',
      options: [
        { id: 'a', text: 'Type I' },
        { id: 'b', text: 'Type II' },
        { id: 'c', text: 'Type III' },
        { id: 'd', text: 'Type IV (delayed, T-cell-mediated)' },
      ],
      answerId: 'd',
      explanation: 'The delayed (48–72 h), antibody-independent, T-cell-mediated reaction to intradermal tuberculin is the prototypical type IV (delayed-type) hypersensitivity.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Post-streptococcal glomerulonephritis and serum sickness are caused by:',
      options: [
        { id: 'a', text: 'IgE-mediated mast-cell degranulation' },
        { id: 'b', text: 'Antibody against fixed cell-surface antigens' },
        { id: 'c', text: 'Deposition of soluble antigen–antibody (immune) complexes' },
        { id: 'd', text: 'Delayed T-cell responses' },
      ],
      answerId: 'c',
      explanation: 'These are type III reactions: soluble immune complexes deposit in tissues (glomeruli, vessels), activating complement and recruiting neutrophils to cause damage.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default hypersensitivityType34;
