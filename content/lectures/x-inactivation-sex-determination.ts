import type { Lecture } from '../../lib/types';

export const xInactivationSexDetermination: Lecture = {
  id: 'x-inactivation-sex-determination',
  title: 'X-Inactivation, Barr Bodies & Sex Determination',
  system: 'molecular',
  source: 'L10 — Sex Chromosome Abnormalities',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Genetics' },
    { kind: 'lecture', label: 'L10 Sex Chromosomes' },
    { kind: 'disease', label: 'X-inactivation / SRY' },
    { kind: 'mechanism', label: 'Dosage compensation' },
    { kind: 'exam', label: 'Barr body count / SRY' },
  ],

  highYield: [
    '**X-inactivation (Lyonization) = dosage compensation**: one X in each female somatic cell is silenced so X-linked gene expression is equalized between XX and XY. The condensed inactive X = the **Barr body**.',
    '**Number of Barr bodies = (number of X chromosomes − 1).** So 46,XX = 1, 45,X (Turner) = 0, 47,XXY (Klinefelter) = 1, 47,XXX = 2.',
    '**Lyon hypothesis**: inactivation is **random** (maternal or paternal X), occurs **early in embryogenesis**, and is **clonally inherited** (all descendants keep the same X inactive). It is controlled by the **XIST** gene at the **X-inactivation center (XIC, Xq13)**, whose non-coding RNA coats and silences the inactive X.',
    '**~15% of X-linked genes escape inactivation** (more on Xp), so partial X aneuploidy still causes phenotypes; the **SHOX gene** (pseudoautosomal, escapes inactivation) governs stature — its dosage explains **short stature in Turner** and **tall stature with extra sex chromosomes**.',
    '**Sex determination**: the **SRY gene** on Yp encodes **Testis-Determining Factor (TDF)** → testes → testosterone + **anti-Müllerian hormone (AMH)** → male development. **Pseudoautosomal regions (PAR1/PAR2)** are X–Y homologous segments that pair and cross over in male meiosis; SRY lies just outside PAR1.',
  ],

  mechanism: {
    title: 'Silence one X (dosage) · SRY flips the gonad to testis',
    steps: [
      { id: 's1', label: 'XIST RNA coats one X → Barr body (dosage compensation)', emphasis: 'key' },
      { id: 's2', label: 'Barr bodies = X count − 1' },
      { id: 's3', label: 'SRY → TDF → testis → testosterone + AMH' },
      { id: 's4', label: 'SHOX dosage sets stature (Turner short / extra-X tall)' },
    ],
  },

  examFindings: [
    { sign: '47,XXY has one Barr body', mechanism: 'Barr bodies = X − 1', significance: 'key' },
    { sign: 'SRY translocated to an X → 46,XX male', mechanism: 'SRY is sufficient for testis determination', significance: 'key' },
    { sign: 'Short stature in Turner (45,X)', mechanism: 'Haploinsufficiency of SHOX', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Buccal smear for Barr bodies', meaning: 'Estimates X-chromosome number' },
    { clue: 'SRY testing', meaning: 'Sex-reversal (XX male / XY female) work-up' },
    { clue: 'Karyotype', meaning: 'Confirms sex-chromosome complement' },
  ],

  treatment: [
    { logic: 'Concept lecture — no direct therapy', detail: 'Underpins the aneuploidy and DSD syndromes.' },
  ],

  mnemonics: [
    { hook: 'Barr bodies = X − 1', expansion: ['XX=1, X=0, XXY=1, XXX=2'] },
    { hook: 'SRY → TDF → testis (Yp); XIST silences the extra X', expansion: ['SHOX sets height'] },
  ],

  traps: [
    {
      questionCategory: 'Barr body count',
      wrongInstinct: 'A 47,XXY (Klinefelter) male has no Barr body because he is male',
      rightAnswer: 'Barr bodies depend on X count, not sex: 47,XXY has two X chromosomes → ONE Barr body',
      why: 'One X stays active and the rest are inactivated regardless of sex, so the count is (X − 1).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'How many Barr bodies are present in a somatic cell with a 47,XXX karyotype?',
      options: [
        { id: 'a', text: '0' },
        { id: 'b', text: '1' },
        { id: 'c', text: '2' },
        { id: 'd', text: '3' },
      ],
      answerId: 'c',
      explanation: 'The number of Barr bodies equals the number of X chromosomes minus one. With three X chromosomes, two are inactivated → 2 Barr bodies.',
      tests: 'exam',
    },
  ],
};

export default xInactivationSexDetermination;
