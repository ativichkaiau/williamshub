import type { Lecture } from '../../lib/types';

export const nucleotideDrugsDisorders: Lecture = {
  id: 'nucleotide-drugs-disorders',
  title: 'Nucleotide Drugs & Disorders',
  system: 'molecular',
  source: 'L4 — Nucleotide Metabolism',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Molecular' },
    { kind: 'lecture', label: 'L4 Nucleotide Metabolism' },
    { kind: 'disease', label: 'ADA-SCID / orotic aciduria' },
    { kind: 'mechanism', label: 'Blocking nucleotide synthesis' },
    { kind: 'exam', label: 'Methotrexate / 5-FU' },
  ],

  highYield: [
    'Antineoplastics block nucleotide/DNA synthesis: **methotrexate** inhibits **dihydrofolate reductase** (↓ THF → ↓ purine & dTMP); **5-fluorouracil (5-FU)** → 5-FdUMP inhibits **thymidylate synthase**; **hydroxyurea** inhibits **ribonucleotide reductase**; **6-mercaptopurine** blocks purine synthesis.',
    '**Mycophenolate** (inhibits IMP dehydrogenase → ↓ GMP) is an **immunosuppressant** (transplant, autoimmune disease) — lymphocytes depend on de novo synthesis.',
    '**ADA deficiency → SCID**: loss of adenosine deaminase → **dATP accumulates → inhibits ribonucleotide reductase → no DNA synthesis in lymphocytes** → severe combined immunodeficiency (the 2nd most common SCID).',
    '**Orotic aciduria** = **UMP synthase deficiency** → **megaloblastic anemia (not correctable by B12/folate)**, poor growth, and **orotate in the urine**; treat with **uridine**.',
    'Nucleotide analogs also serve as **antivirals** (e.g. reverse-transcriptase inhibitors), exploiting the same synthesis machinery.',
  ],

  mechanism: {
    title: 'Starve dividing cells of nucleotides',
    steps: [
      { id: 's1', label: 'Rapidly dividing cells need lots of dNTPs' },
      { id: 's2', label: 'Block folate / thymidylate synthase / RNR', emphasis: 'key' },
      { id: 's3', label: 'DNA synthesis stalls → cell-cycle arrest' },
      { id: 's4', label: 'Enzyme defects (ADA, UMP synthase) → disease', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Recurrent infections from birth (SCID)', mechanism: 'ADA deficiency → dATP → RNR inhibition', significance: 'key' },
    { sign: 'Megaloblastic anemia unresponsive to B12/folate + orotic acid in urine', mechanism: 'Orotic aciduria (UMP synthase deficiency)', significance: 'key' },
    { sign: 'Myelosuppression on methotrexate/5-FU', mechanism: 'Blocked nucleotide synthesis in marrow', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'ADA activity / dATP levels', meaning: 'ADA-SCID' },
    { clue: 'Urine orotic acid', meaning: 'Orotic aciduria (also ↑ in urea-cycle OTC deficiency, but with hyperammonemia)' },
    { clue: 'Drug mechanism (which enzyme blocked)', meaning: 'Predicts toxicity & rescue' },
  ],

  treatment: [
    { logic: 'Leucovorin (folinic acid) rescue after methotrexate', detail: 'Bypasses the DHFR block in normal cells.' },
    { logic: 'Uridine for orotic aciduria; enzyme/gene therapy for ADA-SCID', detail: 'Replace the missing product/enzyme.' },
  ],

  mnemonics: [
    { hook: 'Methotrexate → DHFR; 5-FU → thymidylate synthase; hydroxyurea → ribonucleotide reductase', expansion: ['Each blocks a nucleotide-synthesis step'] },
    { hook: 'ADA deficiency → dATP builds up → SCID', expansion: ['dATP inhibits ribonucleotide reductase'] },
  ],

  traps: [
    {
      questionCategory: 'Orotic aciduria differential',
      wrongInstinct: 'Any orotic aciduria is due to UMP synthase deficiency',
      rightAnswer: 'Hereditary orotic aciduria (UMP synthase deficiency) gives megaloblastic anemia WITHOUT hyperammonemia; ornithine transcarbamylase (OTC) deficiency also raises orotate but WITH hyperammonemia',
      why: 'Both raise urinary orotate, but the urea-cycle (OTC) defect adds hyperammonemia and no megaloblastic anemia — the associated features distinguish them.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An infant has severe combined immunodeficiency. Enzyme testing shows deficient adenosine deaminase. The mechanism of immune failure is:',
      options: [
        { id: 'a', text: 'Excess uric acid crystallizing in lymph nodes' },
        { id: 'b', text: 'dATP accumulation inhibiting ribonucleotide reductase, blocking DNA synthesis in lymphocytes' },
        { id: 'c', text: 'Loss of thymidylate synthase' },
        { id: 'd', text: 'Failure of purine salvage via HGPRT' },
      ],
      answerId: 'b',
      explanation: 'ADA deficiency causes dATP to accumulate, which inhibits ribonucleotide reductase; without dNTPs, DNA synthesis stalls, and proliferating lymphocytes are especially affected — producing SCID.',
      tests: 'exam',
    },
  ],
};

export default nucleotideDrugsDisorders;
