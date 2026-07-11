import type { Lecture } from '../../lib/types';

export const hrp2HpoAmenorrheaPuberty: Lecture = {
  id: 'hrp2-hpo-amenorrhea-puberty',
  title: 'HPO Axis, Amenorrhoea & Puberty Disorders',
  system: 'repro',
  source: 'L12 — HPO Axis, Amenorrhoea & Puberty',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'L12 HPO Axis' },
    { kind: 'disease', label: 'Amenorrhoea · precocious/delayed puberty' },
    { kind: 'mechanism', label: 'GnRH–FSH/LH–oestrogen' },
    { kind: 'investigation', label: 'FSH/LH · prolactin' },
  ],

  highYield: [
    '**The HPO axis:** hypothalamic **GnRH (pulsatile)** → pituitary **FSH/LH** → ovarian **oestrogen/progesterone**, with feedback. Localise a problem by **FSH/LH:** **high FSH/LH = ovarian (primary) failure**; **low/normal FSH/LH = hypothalamic-pituitary (central)** cause.',
    '**Primary amenorrhoea** = no menarche by ~15 (or 13 with no secondary sexual characteristics). Causes: **Turner syndrome (45,X — high FSH)**, **androgen insensitivity**, **imperforate hymen / Müllerian agenesis**, constitutional delay.',
    '**Secondary amenorrhoea** (previously menstruating): **exclude pregnancy first**; then **PCOS** (commonest — oligomenorrhoea, hyperandrogenism, polycystic ovaries; ↑ **LH:FSH**), **hyperprolactinaemia** (prolactinoma, drugs), **hypothalamic** (weight loss/exercise/stress → low GnRH), **thyroid disease**, **premature ovarian insufficiency (high FSH)**.',
    '**Precocious puberty** (<8 girls / <9 boys): **central (GnRH-dependent)** — early axis activation (often idiopathic in girls) — vs **peripheral (GnRH-independent)** — ovarian/adrenal/exogenous sex steroids (low FSH/LH). Central types respond to a **GnRH agonist**.',
    '**Delayed puberty:** most often **constitutional delay** (benign, normal timing shifted); rule out **hypogonadism** — hypergonadotropic (Turner/Klinefelter) vs hypogonadotropic (**Kallmann syndrome = anosmia + low GnRH**).',
  ],

  mechanism: {
    title: 'Use FSH/LH to localise the lesion',
    steps: [
      { id: 's1', label: 'GnRH → FSH/LH → ovarian steroids', emphasis: 'key' },
      { id: 's2', label: 'High FSH/LH → primary ovarian failure', emphasis: 'key' },
      { id: 's3', label: 'Low/normal FSH/LH → central (hypothalamic-pituitary)', emphasis: 'key' },
      { id: 's4', label: 'Check prolactin, TSH, androgens, β-hCG' },
      { id: 's5', label: 'Precocious: central (GnRH-dependent) vs peripheral' },
    ],
  },

  examFindings: [
    { sign: 'High FSH/LH → primary (ovarian) failure', mechanism: 'Loss of ovarian feedback', significance: 'key' },
    { sign: 'Low/normal FSH/LH → central cause', mechanism: 'Hypothalamic-pituitary problem', significance: 'key' },
    { sign: 'Raised LH:FSH ratio + hyperandrogenism → PCOS', mechanism: 'Commonest secondary amenorrhoea', significance: 'key' },
    { sign: 'Anosmia + delayed puberty → Kallmann syndrome', mechanism: 'GnRH neuron migration defect', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Secondary amenorrhoea', meaning: 'β-hCG first; then FSH/LH, prolactin, TSH, androgens' },
    { clue: 'Short stature, webbed neck, primary amenorrhoea, high FSH', meaning: 'Turner syndrome (45,X)' },
    { clue: 'Galactorrhoea + amenorrhoea + high prolactin', meaning: 'Hyperprolactinaemia (prolactinoma / drugs)' },
    { clue: 'Girl <8 with breast development and low FSH/LH', meaning: 'Peripheral (GnRH-independent) precocious puberty' },
  ],

  treatment: [
    { logic: 'Treat the localised cause', detail: 'Dopamine agonist for prolactinoma; weight restoration for hypothalamic amenorrhoea; GnRH agonist for central precocious puberty; hormone replacement for gonadal failure.' },
  ],

  mnemonics: [
    { hook: 'High FSH = ovary is the problem; Low FSH = brain (central) is the problem', expansion: ['Always exclude pregnancy in secondary amenorrhoea'] },
    { hook: 'Kallmann = Can’t smell (anosmia) + low GnRH', expansion: ['Hypogonadotropic hypogonadism'] },
  ],

  traps: [
    {
      questionCategory: 'Localising amenorrhoea',
      wrongInstinct: 'A low FSH means the ovaries have failed',
      rightAnswer: 'A HIGH FSH/LH indicates ovarian (primary) failure; a low/normal FSH points to a central cause',
      why: 'FSH rises when the ovary fails to provide negative feedback; a low FSH indicates the hypothalamus/pituitary is not driving the ovary.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 16-year-old with primary amenorrhoea has short stature, a webbed neck, and a markedly elevated FSH. The most likely diagnosis is:',
      options: [
        { id: 'a', text: 'Polycystic ovary syndrome' },
        { id: 'b', text: 'Turner syndrome (45,X)' },
        { id: 'c', text: 'Kallmann syndrome' },
        { id: 'd', text: 'Prolactinoma' },
      ],
      answerId: 'b',
      explanation: 'Short stature, webbed neck and hypergonadotropic (high FSH) primary amenorrhoea indicate Turner syndrome (45,X) with ovarian dysgenesis.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'The single most important first test in a reproductive-age woman with new secondary amenorrhoea is:',
      options: [
        { id: 'a', text: 'FSH/LH' },
        { id: 'b', text: 'Pregnancy test (β-hCG)' },
        { id: 'c', text: 'Pelvic ultrasound' },
        { id: 'd', text: 'Prolactin' },
      ],
      answerId: 'b',
      explanation: 'Pregnancy is the commonest cause of secondary amenorrhoea and must be excluded first before further hormonal work-up.',
      tests: 'investigation',
    },
    {
      id: 'q3',
      stem: 'Central (GnRH-dependent) precocious puberty is best treated with:',
      options: [
        { id: 'a', text: 'A GnRH agonist (to suppress the axis)' },
        { id: 'b', text: 'A GnRH pulse to stimulate the axis' },
        { id: 'c', text: 'An aromatase inhibitor only' },
        { id: 'd', text: 'Surgery in all cases' },
      ],
      answerId: 'a',
      explanation: 'Continuous GnRH-agonist therapy downregulates pituitary GnRH receptors, suppressing FSH/LH and halting central precocious puberty.',
      tests: 'treatment',
    },
  ],
};

export default hrp2HpoAmenorrheaPuberty;
