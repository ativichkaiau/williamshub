import type { Lecture } from '../../lib/types';

export const gnrhGonadotropinDrugs: Lecture = {
  id: 'gnrh-gonadotropin-drugs',
  title: 'GnRH & Gonadotropin Drugs',
  system: 'endocrine',
  source: 'L2 — Pituitary & Hypothalamic Drugs',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'L2 Pituitary Drugs' },
    { kind: 'treatment', label: 'GnRH analogs / gonadotropins' },
    { kind: 'mechanism', label: 'Pulsatile vs continuous' },
    { kind: 'exam', label: 'Leuprolide paradox' },
  ],

  highYield: [
    '**The GnRH paradox — route of administration decides the effect. PULSATILE GnRH STIMULATES** LH/FSH (mimics physiology → used for infertility, diagnosis of delayed puberty). **CONTINUOUS (sustained) GnRH-agonist SUPPRESSES** LH/FSH after an initial flare.',
    '**GnRH agonists: leuprolide, goserelin, triptorelin** (and native gonadorelin). Continuous dosing is used to **suppress gonadal steroids**: prostate cancer, endometriosis, uterine leiomyomata, central precocious puberty, and to prevent premature LH surge in IVF.',
    '**GnRH antagonists: ganirelix / cetrorelix** (prevent the premature LH surge during controlled ovarian stimulation) and **degarelix** (advanced prostate cancer). Antagonists suppress **immediately with no flare**.',
    '**Gonadotropins**: **menotropins (hMG)** contain FSH+LH; **follitropin** (recombinant FSH); **hCG** is nearly identical to LH and triggers final oocyte maturation/ovulation. Used for **ovulation induction** and male hypogonadism.',
    '**Key adverse effects**: GnRH-agonist continuous therapy → menopausal symptoms/hot flushes (women), gynecomastia/↓libido (men); an initial **testosterone flare** can transiently worsen prostate cancer. Gonadotropins → **ovarian hyperstimulation syndrome (OHSS)** and multiple pregnancy.',
  ],

  mechanism: {
    title: 'How GnRH is delivered flips stimulation into suppression',
    steps: [
      { id: 's1', label: 'Pulsatile GnRH → gonadotrophs release LH/FSH', emphasis: 'key' },
      { id: 's2', label: 'Continuous agonist → receptor downregulation → suppression' },
      { id: 's3', label: 'Antagonist → immediate LH/FSH suppression, no flare' },
      { id: 's4', label: 'Initial agonist flare can worsen prostate cancer', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Leuprolide used to LOWER testosterone in prostate cancer', mechanism: 'Continuous GnRH-agonist downregulates receptors', significance: 'key' },
    { sign: 'Ganirelix/cetrorelix during IVF', mechanism: 'GnRH antagonist blocks premature LH surge', significance: 'key' },
    { sign: 'Ascites, weight gain, enlarged ovaries after ovulation induction', mechanism: 'OHSS from gonadotropins', significance: 'key' },
  ],

  investigations: [
    { clue: 'Single GnRH dose → LH rise', meaning: 'Diagnoses cause of delayed puberty (constitutional vs hypogonadotropic)' },
    { clue: 'Serum estradiol + follicle ultrasound in IVF', meaning: 'Monitor for OHSS risk' },
  ],

  treatment: [
    { logic: 'Suppression: continuous leuprolide/goserelin (± initial antiandrogen for flare)', detail: 'Prostate ca, endometriosis, fibroids, precocious puberty.' },
    { logic: 'Stimulation: pulsatile gonadorelin or gonadotropins', detail: 'Infertility / ovulation induction.' },
  ],

  mnemonics: [
    { hook: 'Pulsatile = Play (stimulate); Continuous = Cancel (suppress)', expansion: ['Same drug, opposite effect by timing'] },
    { hook: 'Antagonists (ganirelix/cetrorelix/degarelix) suppress instantly — no flare', expansion: ['Agonists flare first'] },
  ],

  traps: [
    {
      questionCategory: 'Why a GnRH agonist lowers hormones',
      wrongInstinct: 'Leuprolide is a GnRH agonist so it must raise LH and testosterone',
      rightAnswer: 'Given continuously it downregulates GnRH receptors and SUPPRESSES LH/FSH — that is why it treats prostate cancer and endometriosis (after a transient flare)',
      why: 'The agonist only stimulates when pulsatile; sustained exposure desensitizes the gonadotroph.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A man with metastatic prostate cancer is started on continuous leuprolide. What is the intended endocrine effect, and what early complication should be anticipated?',
      options: [
        { id: 'a', text: 'Sustained rise in testosterone; no early risk' },
        { id: 'b', text: 'Suppression of testosterone after an initial testosterone flare' },
        { id: 'c', text: 'Immediate suppression with no flare' },
        { id: 'd', text: 'Increased FSH only' },
      ],
      answerId: 'b',
      explanation: 'Continuous GnRH-agonist dosing downregulates receptors and suppresses LH/testosterone, but causes an initial flare that can transiently worsen the tumor — an antiandrogen is often co-given. (Degarelix, an antagonist, avoids the flare.)',
      tests: 'exam',
    },
  ],
};

export default gnrhGonadotropinDrugs;
