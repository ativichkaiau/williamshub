import type { Lecture } from '../../lib/types';

export const hrp2AndrogenDeprivationAnabolic: Lecture = {
  id: 'hrp2-androgen-deprivation-anabolic',
  title: 'Androgen-Deprivation Therapy & Anabolic Steroid Abuse',
  system: 'repro',
  source: 'L16 — Androgens & Anti-androgens',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'L16 Androgen Drugs' },
    { kind: 'disease', label: 'Prostate cancer · doping' },
    { kind: 'mechanism', label: 'Suppress androgen action' },
    { kind: 'treatment', label: 'GnRH analogue · anti-androgen' },
  ],

  highYield: [
    '**Prostate cancer is androgen-dependent → androgen-deprivation therapy (ADT).** **GnRH agonists** (leuprolide/goserelin) initially **flare** (transient testosterone surge → cover with an **anti-androgen** to prevent tumour/bone-pain flare), then downregulate to castrate levels. **GnRH antagonists** (degarelix) achieve castration **without a flare**.',
    '**Anti-androgens** (bicalutamide/flutamide block the receptor; **abiraterone** blocks androgen synthesis; **enzalutamide** blocks the receptor/signalling) are used in advanced/castration-resistant disease.',
    '**ADT side-effects:** hot flushes, loss of libido/erectile dysfunction, **osteoporosis**, metabolic changes, gynaecomastia, fatigue — monitor bone health.',
    '**Anabolic-androgenic steroid abuse** (doping): exogenous androgen **suppresses the HPG axis** → **testicular atrophy and infertility**, **gynaecomastia** (aromatisation to oestrogen), acne, dyslipidaemia, aggression, and hepatotoxicity/polycythaemia — a mirror image of therapeutic androgen manipulation.',
  ],

  mechanism: {
    title: 'Lower androgen action to starve the tumour',
    steps: [
      { id: 's1', label: 'GnRH agonist: flare → downregulation → castrate testosterone', emphasis: 'key' },
      { id: 's2', label: 'Cover flare with an anti-androgen', emphasis: 'key' },
      { id: 's3', label: 'GnRH antagonist / receptor blockers avoid or add to this' },
      { id: 's4', label: 'Anabolic abuse suppresses HPG axis → atrophy/infertility', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'GnRH agonist initial testosterone flare', mechanism: 'Transient LH surge before downregulation', significance: 'key' },
    { sign: 'ADT → osteoporosis', mechanism: 'Androgen deprivation on bone', significance: 'key' },
    { sign: 'Anabolic steroid abuse → testicular atrophy + gynaecomastia', mechanism: 'HPG suppression + aromatisation', significance: 'key' },
    { sign: 'Degarelix (antagonist) avoids the flare', mechanism: 'Immediate receptor blockade', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Starting a GnRH agonist for metastatic prostate cancer', meaning: 'Give an anti-androgen first to prevent flare' },
    { clue: 'Man on long-term ADT with back pain and low bone density', meaning: 'ADT-related osteoporosis — bone protection' },
    { clue: 'Bodybuilder with small testes, acne and gynaecomastia', meaning: 'Anabolic-androgenic steroid abuse' },
    { clue: 'Castration-resistant prostate cancer', meaning: 'Abiraterone/enzalutamide (androgen synthesis/receptor blockade)' },
  ],

  treatment: [
    { logic: 'ADT for advanced prostate cancer', detail: 'GnRH agonist (+ anti-androgen cover for flare) or antagonist; add receptor/synthesis blockers for castration-resistant disease; monitor bone health.' },
  ],

  mnemonics: [
    { hook: 'GnRH agonist = Flare first → cover with anti-androgen; antagonist = no flare', expansion: ['Anabolic abuse: atrophy, gynaecomastia, infertility'] },
  ],

  traps: [
    {
      questionCategory: 'GnRH agonist flare',
      wrongInstinct: 'A GnRH agonist immediately lowers testosterone in prostate cancer',
      rightAnswer: 'It first causes a testosterone FLARE (surge) before downregulation — cover with an anti-androgen',
      why: 'Continuous GnRH-agonist stimulation initially raises LH/testosterone, risking tumour flare, so an anti-androgen is given first.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A bodybuilder abusing anabolic androgenic steroids develops small testes, infertility and gynaecomastia. The mechanism is:',
      options: [
        { id: 'a', text: 'Direct testicular stimulation' },
        { id: 'b', text: 'Suppression of the HPG axis with aromatisation to oestrogen' },
        { id: 'c', text: 'Increased FSH/LH' },
        { id: 'd', text: 'Enhanced spermatogenesis' },
      ],
      answerId: 'b',
      explanation: 'Exogenous androgen suppresses FSH/LH (testicular atrophy, infertility); aromatisation of androgen to oestrogen causes gynaecomastia.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'When initiating a GnRH agonist for metastatic prostate cancer, an anti-androgen is given first to:',
      options: [
        { id: 'a', text: 'Boost testosterone' },
        { id: 'b', text: 'Prevent the tumour flare from the initial testosterone surge' },
        { id: 'c', text: 'Treat osteoporosis' },
        { id: 'd', text: 'Improve libido' },
      ],
      answerId: 'b',
      explanation: 'GnRH agonists cause an initial testosterone flare; an anti-androgen blocks the receptor to prevent tumour/bone-pain flare until downregulation occurs.',
      tests: 'treatment',
    },
  ],
};

export default hrp2AndrogenDeprivationAnabolic;
