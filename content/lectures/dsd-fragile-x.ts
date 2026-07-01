import type { Lecture } from '../../lib/types';

export const dsdFragileX: Lecture = {
  id: 'dsd-fragile-x',
  title: 'Disorders of Sex Development & Fragile X',
  system: 'molecular',
  source: 'L10 — Sex Chromosome Abnormalities',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Genetics' },
    { kind: 'lecture', label: 'L10 Sex Chromosomes' },
    { kind: 'disease', label: 'DSD / Fragile X' },
    { kind: 'mechanism', label: 'SRY / androgen receptor / CGG repeat' },
    { kind: 'exam', label: 'CAIS / fragile X' },
  ],

  highYield: [
    '**Disorders of sex development (DSD)** arise when the chromosomal, gonadal, and phenotypic sex disagree — often from the **SRY gene** being in the wrong place or the **androgen pathway** failing.',
    '**46,XX testicular DSD (XX male)** = **SRY translocated from Yp onto an X** → testes and male genitalia; presents post-puberty like Klinefelter (small testes, gynecomastia, azoospermia). **46,XY complete gonadal dysgenesis (Swyer)** = **SRY mutation/deletion** → streak gonads, female external genitalia, normal Müllerian structures, infertile.',
    '**Complete androgen insensitivity syndrome (CAIS / testicular feminization)**: **46,XY** with an **X-linked androgen-receptor (AR) mutation (Xq12)**. Testes make testosterone + AMH, but target tissues cannot respond → **female external genitalia, blind-ending vagina, ABSENT uterus (AMH acted), sparse pubic/axillary hair, breast development at puberty** (testosterone → estradiol). Testes are intra-abdominal/inguinal; primary amenorrhea.',
    '**Fragile X syndrome (Martin-Bell) = the most common inherited cause of intellectual disability** (after Down overall), from an **expanded CGG trinucleotide repeat** in the 5′UTR of **FMR1 (Xq27.3)**. >200 repeats (full mutation) → hypermethylation silences FMR1 → no FMRP.',
    '**Fragile X features**: **long face, large ears, prominent jaw, macro-orchidism** (large testes), intellectual disability, autistic/hyperactive behavior. Repeat sizes: normal ~5–44, **premutation 55–200** (can expand), full mutation >200. **Anticipation**: the repeat **expands when transmitted through a female**.',
  ],

  mechanism: {
    title: 'SRY position / AR function / CGG repeat length',
    steps: [
      { id: 's1', label: 'SRY on X → XX male; SRY lost → XY female (Swyer)', emphasis: 'key' },
      { id: 's2', label: 'AR mutation (46,XY) → CAIS: female body, testes, no uterus' },
      { id: 's3', label: 'FMR1 CGG >200 → methylation silences gene → no FMRP' },
      { id: 's4', label: 'Repeat expands through maternal transmission (anticipation)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: '46,XY girl, primary amenorrhea, no uterus, testes in inguinal canal', mechanism: 'Complete androgen insensitivity (AR mutation)', significance: 'key' },
    { sign: 'Boy with intellectual disability, long face, large ears, macro-orchidism', mechanism: 'Fragile X (FMR1 CGG expansion)', significance: 'key' },
    { sign: 'Post-pubertal male, small testes + azoospermia with 46,XX', mechanism: '46,XX testicular DSD (SRY on X)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Karyotype + SRY / AR gene testing', meaning: 'Classify the DSD' },
    { clue: 'FMR1 CGG repeat sizing (PCR/Southern)', meaning: 'Diagnose fragile X; distinguish premutation vs full' },
    { clue: 'Pelvic imaging (uterus present or absent)', meaning: 'AMH action clue in CAIS' },
  ],

  treatment: [
    { logic: 'CAIS: raise as female, gonadectomy timing, estrogen', detail: 'Retained testes carry malignancy risk.' },
    { logic: 'Fragile X: supportive, behavioral/educational', detail: 'No cure; genetic counseling for carriers.' },
  ],

  mnemonics: [
    { hook: 'CAIS = 46,XY female, testes, NO uterus (AMH worked, androgen didn’t)', expansion: ['X-linked AR mutation'] },
    { hook: 'Fragile X = long face, large ears, big jaw, big testes; CGG repeat', expansion: ['Anticipation via mother'] },
  ],

  traps: [
    {
      questionCategory: 'Uterus in complete androgen insensitivity',
      wrongInstinct: 'A 46,XY person raised female should have a uterus',
      rightAnswer: 'In CAIS the uterus is ABSENT — the testes secrete AMH, which regresses the Müllerian ducts, while androgen resistance produces female external genitalia',
      why: 'AMH still works even though the androgen receptor does not, so Müllerian structures involute despite the female phenotype.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A phenotypic 17-year-old female presents with primary amenorrhea. She has normal breasts, scant pubic hair, a short blind-ending vagina, no uterus, and 46,XY karyotype with intra-abdominal testes. What is the defect?',
      options: [
        { id: 'a', text: '21-hydroxylase deficiency' },
        { id: 'b', text: 'Androgen-receptor mutation (complete androgen insensitivity)' },
        { id: 'c', text: 'SRY deletion' },
        { id: 'd', text: 'FMR1 CGG expansion' },
      ],
      answerId: 'b',
      explanation: 'Complete androgen insensitivity: a 46,XY individual with an X-linked androgen-receptor mutation. Testes make testosterone and AMH, so the uterus is absent, but androgen resistance yields female external genitalia and scant sexual hair.',
      tests: 'exam',
    },
  ],
};

export default dsdFragileX;
