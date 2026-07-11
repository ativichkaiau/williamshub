import type { Lecture } from '../../lib/types';

export const hrp2MaleReproPathology: Lecture = {
  id: 'hrp2-male-repro-pathology',
  title: 'Pathology of the Male Reproductive System',
  system: 'repro',
  source: 'L10 — Pathology of the Male Reproductive System',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'L10 Male Pathology' },
    { kind: 'disease', label: 'Testicular · prostate' },
    { kind: 'mechanism', label: 'Germ cell vs stromal' },
    { kind: 'investigation', label: 'AFP · β-hCG · PSA' },
  ],

  highYield: [
    '**Cryptorchidism (undescended testis)** raises the risk of **germ cell tumour and infertility**; orchidopexy reduces (not eliminates) risk.',
    '**Testicular tumours** are mostly **germ cell (young men, malignant):** **seminoma** (commonest, radiosensitive, good prognosis, may raise **LDH/placental ALP**) and **non-seminomatous** (embryonal, **yolk sac → AFP**, choriocarcinoma → **β-hCG**, teratoma). A **painless testicular mass** is cancer until proven otherwise; **AFP + β-hCG** are key markers.',
    '**Benign prostatic hyperplasia (BPH):** nodular hyperplasia of the **transitional (periurethral) zone** → bladder outflow obstruction (hesitancy, nocturia, poor stream). Treat **α-blockers** (relax smooth muscle) and **5α-reductase inhibitors (finasteride)** (shrink gland). **Not** premalignant.',
    '**Prostate adenocarcinoma:** arises in the **peripheral zone** (palpable on DRE), graded by **Gleason score**; marker **PSA**; spreads to **bone (osteoblastic metastases)**. Androgen-dependent → **androgen-deprivation therapy**.',
    '**Others:** **testicular torsion** = surgical emergency (absent cremasteric reflex, negative Prehn); **varicocele** (“bag of worms”, left-sided) → infertility; **epididymitis** (chlamydia/GC in young men); **penile SCC** linked to **HPV**.',
  ],

  mechanism: {
    title: 'Zone/cell of origin fixes the disease and marker',
    steps: [
      { id: 's1', label: 'Germ cells → seminoma / non-seminomatous (AFP, β-hCG)', emphasis: 'key' },
      { id: 's2', label: 'Cryptorchidism → ↑ germ-cell tumour risk', emphasis: 'key' },
      { id: 's3', label: 'BPH = transitional zone → outflow obstruction', emphasis: 'key' },
      { id: 's4', label: 'Cancer = peripheral zone → DRE, PSA, osteoblastic bone mets', emphasis: 'danger' },
      { id: 's5', label: 'Torsion = emergency; varicocele → infertility' },
    ],
  },

  examFindings: [
    { sign: 'Painless testicular mass', mechanism: 'Germ cell tumour until proven otherwise', significance: 'key' },
    { sign: 'Raised AFP → non-seminomatous (yolk sac)', mechanism: 'Seminoma does NOT raise AFP', significance: 'key' },
    { sign: 'BPH → transitional zone; cancer → peripheral zone', mechanism: 'Zonal anatomy of the prostate', significance: 'key' },
    { sign: 'Prostate cancer → osteoblastic (sclerotic) bone metastases', mechanism: 'Tropism for axial skeleton', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Young man, painless testis mass, raised AFP + β-hCG', meaning: 'Non-seminomatous germ cell tumour' },
    { clue: 'Homogeneous testicular tumour, normal AFP, radiosensitive', meaning: 'Seminoma' },
    { clue: 'Older man: hesitancy, nocturia, smoothly enlarged prostate', meaning: 'BPH (transitional zone)' },
    { clue: 'Hard nodule on DRE, raised PSA, sclerotic bone lesions', meaning: 'Prostate adenocarcinoma with bone metastases' },
  ],

  treatment: [
    { logic: 'BPH: relax + shrink', detail: 'α-blockers relax prostatic smooth muscle for rapid symptom relief; 5α-reductase inhibitors (finasteride) shrink the gland over months.' },
    { logic: 'Prostate cancer: androgen deprivation', detail: 'Localised disease: surgery/radiotherapy; advanced: androgen-deprivation therapy (GnRH agonists/antagonists, anti-androgens).' },
  ],

  mnemonics: [
    { hook: 'BPH = Transitional zone (obstruction); Cancer = Peripheral zone (DRE nodule)', expansion: ['PSA marker; osteoblastic bone mets'] },
    { hook: 'Seminoma: no AFP; Non-seminoma: AFP and/or β-hCG', expansion: ['Painless mass = cancer until proven otherwise'] },
  ],

  traps: [
    {
      questionCategory: 'Seminoma marker',
      wrongInstinct: 'A raised AFP is consistent with a pure seminoma',
      rightAnswer: 'Pure seminomas do NOT raise AFP; an elevated AFP indicates a non-seminomatous (yolk sac) component',
      why: 'AFP elevation excludes pure seminoma and points to a non-seminomatous germ cell tumour, which changes staging and treatment.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Benign prostatic hyperplasia causing urinary obstruction arises predominantly in which prostatic zone?',
      options: [
        { id: 'a', text: 'Peripheral zone' },
        { id: 'b', text: 'Transitional (periurethral) zone' },
        { id: 'c', text: 'Central zone' },
        { id: 'd', text: 'Anterior fibromuscular stroma' },
      ],
      answerId: 'b',
      explanation: 'BPH is nodular hyperplasia of the transitional/periurethral zone, compressing the urethra and causing outflow obstruction. Prostate cancer, in contrast, arises in the peripheral zone.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A young man has a painless testicular mass with elevated AFP. The tumour is most likely:',
      options: [
        { id: 'a', text: 'Pure seminoma' },
        { id: 'b', text: 'A non-seminomatous germ cell tumour (e.g. yolk sac)' },
        { id: 'c', text: 'Leydig cell tumour' },
        { id: 'd', text: 'Lymphoma' },
      ],
      answerId: 'b',
      explanation: 'AFP is produced by yolk sac (endodermal sinus) elements; its elevation indicates a non-seminomatous germ cell tumour, since pure seminomas do not raise AFP.',
      tests: 'investigation',
    },
    {
      id: 'q3',
      stem: 'Prostate adenocarcinoma most characteristically metastasises to bone as:',
      options: [
        { id: 'a', text: 'Osteolytic (lytic) lesions' },
        { id: 'b', text: 'Osteoblastic (sclerotic) lesions' },
        { id: 'c', text: 'Pathological fractures only' },
        { id: 'd', text: 'It does not metastasise to bone' },
      ],
      answerId: 'b',
      explanation: 'Prostate cancer classically produces osteoblastic (sclerotic) bone metastases, often in the axial skeleton, accompanied by a rising PSA.',
      tests: 'exam',
    },
  ],
};

export default hrp2MaleReproPathology;
