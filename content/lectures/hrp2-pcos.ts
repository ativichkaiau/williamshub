import type { Lecture } from '../../lib/types';

export const hrp2Pcos: Lecture = {
  id: 'hrp2-pcos',
  title: 'Polycystic Ovary Syndrome (PCOS)',
  system: 'repro',
  source: 'L12 — HPO Axis, Amenorrhoea & Puberty',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'L12 HPO Axis' },
    { kind: 'disease', label: 'PCOS' },
    { kind: 'mechanism', label: 'Insulin resistance · hyperandrogenism' },
    { kind: 'investigation', label: 'Rotterdam criteria' },
  ],

  highYield: [
    '**PCOS = the commonest cause of anovulatory infertility.** **Rotterdam criteria (2 of 3):** **oligo/anovulation**, **clinical/biochemical hyperandrogenism** (hirsutism, acne; ↑ testosterone), and **polycystic ovaries** on ultrasound (≥12 follicles/enlarged ovary).',
    '**Core mechanism = insulin resistance + hyperandrogenism.** Hyperinsulinaemia raises ovarian androgens and lowers **SHBG** (↑ free testosterone); a **raised LH:FSH** and disordered gonadotropin pulses impair ovulation.',
    '**Consequences:** **unopposed oestrogen** (from anovulation) → **endometrial hyperplasia/carcinoma risk**; **metabolic syndrome, type 2 diabetes, dyslipidaemia**; subfertility.',
    '**Management:** **weight loss/lifestyle** (first-line), **combined pill** (regulate cycles, treat hyperandrogenism, protect endometrium), **metformin** (insulin sensitiser), and **letrozole/clomiphene** for **ovulation induction** when fertility is desired.',
  ],

  mechanism: {
    title: 'Insulin resistance → androgens + anovulation',
    steps: [
      { id: 's1', label: 'Insulin resistance → hyperinsulinaemia', emphasis: 'key' },
      { id: 's2', label: '↑ ovarian androgens, ↓ SHBG → hyperandrogenism', emphasis: 'key' },
      { id: 's3', label: 'Anovulation → oligomenorrhoea + unopposed oestrogen' },
      { id: 's4', label: '↑ endometrial cancer + metabolic risk', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Hirsutism/acne + oligomenorrhoea', mechanism: 'Hyperandrogenism + anovulation', significance: 'key' },
    { sign: 'Raised LH:FSH ratio', mechanism: 'Disordered gonadotropin secretion', significance: 'supportive' },
    { sign: 'Anovulation → unopposed oestrogen → endometrial risk', mechanism: 'No progesterone opposition', significance: 'key' },
    { sign: 'Insulin resistance / acanthosis nigricans', mechanism: 'Metabolic feature', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Oligomenorrhoea + hirsutism + polycystic ovaries', meaning: 'PCOS by Rotterdam criteria (2 of 3)' },
    { clue: 'Anovulatory subfertility with PCOS', meaning: 'Ovulation induction (letrozole/clomiphene)' },
    { clue: 'PCOS with chronic amenorrhoea', meaning: 'Protect the endometrium (cyclical progestin/pill)' },
    { clue: 'PCOS with impaired glucose tolerance', meaning: 'Lifestyle + metformin; screen for diabetes' },
  ],

  treatment: [
    { logic: 'Lifestyle first, then targeted', detail: 'Weight loss improves all features; combined pill for cycle control/hyperandrogenism and endometrial protection; metformin for metabolic aspects; letrozole for fertility.' },
  ],

  mnemonics: [
    { hook: 'PCOS Rotterdam 2/3: Oligo-ovulation, Hyperandrogenism, Polycystic ovaries', expansion: ['Insulin resistance underlies it', 'Anovulation → endometrial cancer risk'] },
  ],

  traps: [
    {
      questionCategory: 'Endometrial risk in PCOS',
      wrongInstinct: 'PCOS mainly threatens fertility and has no cancer implications',
      rightAnswer: 'Chronic anovulation causes unopposed oestrogen, raising endometrial hyperplasia/cancer risk',
      why: 'Without regular progesterone, the endometrium is continuously stimulated by oestrogen, so cycle regulation/endometrial protection is important.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A woman with PCOS and chronic anovulation is at increased long-term risk of which malignancy due to unopposed oestrogen?',
      options: [
        { id: 'a', text: 'Cervical cancer' },
        { id: 'b', text: 'Endometrial carcinoma' },
        { id: 'c', text: 'Ovarian germ cell tumour' },
        { id: 'd', text: 'Vulvar carcinoma' },
      ],
      answerId: 'b',
      explanation: 'Anovulation in PCOS produces unopposed oestrogen, increasing the risk of endometrial hyperplasia and carcinoma.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'For a woman with PCOS who wishes to conceive, the recommended first-line agent for ovulation induction is:',
      options: [
        { id: 'a', text: 'Combined oral contraceptive' },
        { id: 'b', text: 'Letrozole (or clomiphene)' },
        { id: 'c', text: 'Tamoxifen for breast cancer' },
        { id: 'd', text: 'GnRH agonist' },
      ],
      answerId: 'b',
      explanation: 'Letrozole (an aromatase inhibitor) — or clomiphene — is used to induce ovulation in PCOS; the combined pill is for cycle regulation, not conception.',
      tests: 'treatment',
    },
  ],
};

export default hrp2Pcos;
