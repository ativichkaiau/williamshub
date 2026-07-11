import type { Lecture } from '../../lib/types';

export const hrp2AndrogenDrugs: Lecture = {
  id: 'hrp2-androgen-drugs',
  title: 'Androgens & Anti-androgens',
  system: 'repro',
  source: 'L16 — Androgens & Anti-androgens',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'L16 Androgen Drugs' },
    { kind: 'disease', label: 'Hypogonadism · BPH · hirsutism' },
    { kind: 'mechanism', label: '5α-reductase · AR blockade' },
    { kind: 'treatment', label: 'Testosterone · finasteride' },
  ],

  highYield: [
    '**Testosterone → DHT via 5α-reductase** in target tissues (prostate, skin, hair follicle); DHT is the more potent androgen there. Testosterone is also aromatised to **oestradiol**.',
    '**Testosterone replacement** for male hypogonadism restores libido, muscle and bone. Cautions: worsens/unmasks **prostate cancer**, causes **polycythaemia**, and **exogenous testosterone suppresses the HPG axis → impaired spermatogenesis/infertility** (a common misconception — it is not a fertility drug).',
    '**5α-reductase inhibitors (finasteride, dutasteride)** block conversion to DHT → shrink the prostate (**BPH**) and treat **male-pattern baldness**; they **lower PSA (~50%)**, a fact to remember when interpreting screening.',
    '**Androgen-receptor antagonists:** **flutamide/bicalutamide** and **spironolactone/cyproterone** — used for **prostate cancer**, and (spironolactone/cyproterone) for **hirsutism/PCOS and acne** in women. **GnRH agonists/antagonists** achieve medical castration for prostate cancer (agonists cause an initial testosterone **flare** → cover with an anti-androgen).',
    '**Anabolic-steroid abuse** → testicular atrophy, gynaecomastia (aromatisation), acne, aggression, dyslipidaemia, and suppressed endogenous testosterone.',
  ],

  mechanism: {
    title: 'Make, convert, or block androgen action',
    steps: [
      { id: 's1', label: 'Testosterone → DHT (5α-reductase) in prostate/skin', emphasis: 'key' },
      { id: 's2', label: 'Replacement restores male phenotype but suppresses HPG axis', emphasis: 'danger' },
      { id: 's3', label: 'Finasteride blocks DHT → treats BPH/baldness (↓ PSA)', emphasis: 'key' },
      { id: 's4', label: 'AR antagonists / GnRH analogues → prostate cancer, hirsutism' },
      { id: 's5', label: 'GnRH agonist causes an initial testosterone flare', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Exogenous testosterone suppresses spermatogenesis', mechanism: 'Negative feedback on FSH/LH', significance: 'key' },
    { sign: 'Finasteride lowers PSA by ~50%', mechanism: '5α-reductase inhibition shrinks prostate', significance: 'key' },
    { sign: 'GnRH agonist flare in prostate cancer', mechanism: 'Transient LH/testosterone surge before downregulation', significance: 'key' },
    { sign: 'Spironolactone → anti-androgen effect (hirsutism)', mechanism: 'AR blockade + reduced androgen synthesis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Older man with BPH symptoms and an enlarged prostate', meaning: '5α-reductase inhibitor (± α-blocker)' },
    { clue: 'Man on finasteride — interpreting his PSA', meaning: 'Roughly double the measured PSA to correct for the drug' },
    { clue: 'Woman with PCOS, hirsutism and acne', meaning: 'Spironolactone/cyproterone (anti-androgen) ± combined pill' },
    { clue: 'Starting a GnRH agonist for metastatic prostate cancer', meaning: 'Co-prescribe an anti-androgen to prevent flare' },
  ],

  treatment: [
    { logic: 'Prostate cancer: reduce androgen action', detail: 'GnRH agonist/antagonist ± AR antagonist (androgen-deprivation therapy); cover agonist flare with an anti-androgen.' },
    { logic: 'BPH / baldness: block DHT', detail: 'Finasteride/dutasteride shrink the prostate and slow hair loss over months; remember the PSA-lowering effect.' },
  ],

  mnemonics: [
    { hook: 'Finasteride: Fights DHT → shrinks prostate & saves Follicles; halves PSA', expansion: ['DHT via 5α-reductase'] },
    { hook: 'GnRH agonist = initial Flare → give an anti-androgen first', expansion: ['Continuous use downregulates → castration'] },
  ],

  traps: [
    {
      questionCategory: 'Testosterone and fertility',
      wrongInstinct: 'Giving testosterone will improve a man’s sperm count',
      rightAnswer: 'Exogenous testosterone suppresses the HPG axis and REDUCES spermatogenesis',
      why: 'External androgen feeds back to lower FSH/LH, decreasing intratesticular testosterone and sperm production — the opposite of a fertility treatment.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A man on finasteride for BPH has a PSA of 1.5 ng/mL. Compared with his true (untreated) value, the measured PSA is approximately:',
      options: [
        { id: 'a', text: 'Unchanged' },
        { id: 'b', text: 'Halved by the drug' },
        { id: 'c', text: 'Doubled by the drug' },
        { id: 'd', text: 'Increased tenfold' },
      ],
      answerId: 'b',
      explanation: '5α-reductase inhibitors lower PSA by roughly 50%, so the measured value should be doubled when interpreting prostate cancer screening.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'When starting a GnRH agonist for metastatic prostate cancer, an anti-androgen is co-prescribed initially to:',
      options: [
        { id: 'a', text: 'Enhance the testosterone surge' },
        { id: 'b', text: 'Prevent the tumour flare from the initial testosterone rise' },
        { id: 'c', text: 'Lower PSA faster' },
        { id: 'd', text: 'Reduce nausea' },
      ],
      answerId: 'b',
      explanation: 'GnRH agonists transiently raise LH and testosterone (a “flare”) before downregulation; an anti-androgen blocks the receptor to prevent tumour flare.',
      tests: 'treatment',
    },
    {
      id: 'q3',
      stem: 'Which enzyme converts testosterone to the more potent dihydrotestosterone in the prostate and hair follicle?',
      options: [
        { id: 'a', text: 'Aromatase' },
        { id: 'b', text: '5α-reductase' },
        { id: 'c', text: '17β-hydroxysteroid dehydrogenase' },
        { id: 'd', text: '21-hydroxylase' },
      ],
      answerId: 'b',
      explanation: '5α-reductase converts testosterone to dihydrotestosterone (DHT); inhibiting it (finasteride) treats BPH and male-pattern baldness.',
      tests: 'mechanism',
    },
  ],
};

export default hrp2AndrogenDrugs;
