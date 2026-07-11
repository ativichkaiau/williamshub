import type { Lecture } from '../../lib/types';

export const hrp2TesticularPathology: Lecture = {
  id: 'hrp2-testicular-pathology',
  title: 'Testicular Pathology',
  system: 'repro',
  source: 'L10 — Pathology of the Male Reproductive System',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'L10 Male Pathology' },
    { kind: 'disease', label: 'Germ cell tumours · torsion' },
    { kind: 'mechanism', label: 'Cryptorchidism → risk' },
    { kind: 'investigation', label: 'AFP · β-hCG · LDH' },
  ],

  highYield: [
    '**A painless, solid testicular mass is cancer until proven otherwise** → **ultrasound + tumour markers (AFP, β-hCG, LDH)**; do **NOT** biopsy trans-scrotally (seeding) — orchidectomy is diagnostic/therapeutic. **Cryptorchidism** raises the risk of germ cell tumour (in **both** testes) and infertility.',
    '**Seminoma:** commonest, 4th decade, **homogeneous**, **radiosensitive/chemosensitive, excellent prognosis**; **does NOT raise AFP** (may raise β-hCG/LDH mildly).',
    '**Non-seminomatous germ cell tumours:** **embryonal**, **yolk sac (AFP; commonest in children)**, **choriocarcinoma (β-hCG, early haematogenous spread)**, **teratoma** — often mixed; **raised AFP excludes pure seminoma**.',
    '**Acute scrotum:** **torsion** = sudden severe pain, high-riding testis, **absent cremasteric reflex**, negative Prehn sign — a **surgical emergency** (detorse within ~6 h). **Epididymo-orchitis** = gradual, tender, ± fever (chlamydia/GC in young; coliforms/mumps otherwise). **Varicocele** = “bag of worms”, usually **left**, associated with infertility.',
  ],

  mechanism: {
    title: 'Germ cell origin + acute vascular emergencies',
    steps: [
      { id: 's1', label: 'Cryptorchidism → ↑ germ cell tumour + infertility', emphasis: 'key' },
      { id: 's2', label: 'Seminoma (no AFP) vs non-seminomatous (AFP/β-hCG)', emphasis: 'key' },
      { id: 's3', label: 'Painless mass → cancer; do not trans-scrotal biopsy', emphasis: 'key' },
      { id: 's4', label: 'Torsion = emergency; varicocele → infertility', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Painless solid testis mass', mechanism: 'Germ cell tumour', significance: 'key' },
    { sign: 'Raised AFP → non-seminomatous (yolk sac)', mechanism: 'Seminoma does not raise AFP', significance: 'key' },
    { sign: 'Absent cremasteric reflex + negative Prehn → torsion', mechanism: 'Cord twist, ischaemia', significance: 'key' },
    { sign: 'Left “bag of worms” → varicocele', mechanism: 'Pampiniform plexus dilatation', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Young man, painless testis mass, raised AFP + β-hCG', meaning: 'Non-seminomatous germ cell tumour' },
    { clue: 'Homogeneous testis tumour, normal AFP, radiosensitive', meaning: 'Seminoma' },
    { clue: 'Sudden severe testicular pain, high-riding testis', meaning: 'Torsion → emergency surgery' },
    { clue: 'Gradual tender swelling, dysuria, fever in a young man', meaning: 'Epididymo-orchitis (chlamydia/GC)' },
  ],

  treatment: [
    { logic: 'Radical inguinal orchidectomy for tumours', detail: 'Diagnostic and therapeutic; seminomas add radiotherapy/chemo, non-seminomatous add chemotherapy; markers follow response.' },
    { logic: 'Emergency surgery for torsion', detail: 'Detorsion + bilateral orchidopexy within ~6 hours to save the testis.' },
  ],

  mnemonics: [
    { hook: 'Seminoma: no AFP, radiosensitive; Non-seminoma: AFP/β-hCG', expansion: ['Painless mass = cancer', 'Torsion = emergency (absent cremasteric reflex)'] },
  ],

  traps: [
    {
      questionCategory: 'Acute scrotum',
      wrongInstinct: 'Testicular torsion can wait for ultrasound confirmation',
      rightAnswer: 'Torsion is a clinical emergency — explore urgently (within ~6 h); do not delay for imaging',
      why: 'Testicular viability falls rapidly with time; suspected torsion goes straight to surgical exploration.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 30-year-old has a painless firm testicular mass with normal AFP and a homogeneous appearance on ultrasound. The most likely tumour is:',
      options: [
        { id: 'a', text: 'Yolk sac tumour' },
        { id: 'b', text: 'Seminoma' },
        { id: 'c', text: 'Choriocarcinoma' },
        { id: 'd', text: 'Embryonal carcinoma' },
      ],
      answerId: 'b',
      explanation: 'A homogeneous, radiosensitive germ cell tumour with a normal AFP is a seminoma, which carries an excellent prognosis.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'A boy presents with sudden severe testicular pain, a high-riding testis and an absent cremasteric reflex. The correct action is:',
      options: [
        { id: 'a', text: 'Antibiotics and review in 48 hours' },
        { id: 'b', text: 'Immediate surgical exploration for torsion' },
        { id: 'c', text: 'Scrotal support and analgesia only' },
        { id: 'd', text: 'Trans-scrotal biopsy' },
      ],
      answerId: 'b',
      explanation: 'These features indicate testicular torsion, a surgical emergency requiring urgent exploration and detorsion (with bilateral orchidopexy).',
      tests: 'treatment',
    },
  ],
};

export default hrp2TesticularPathology;
