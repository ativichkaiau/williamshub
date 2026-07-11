import type { Lecture } from '../../lib/types';

export const hrp2Endometriosis: Lecture = {
  id: 'hrp2-endometriosis',
  title: 'Endometriosis',
  system: 'repro',
  source: 'L6 — Pathology of the Uterine Corpus',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'L6 Uterine Corpus' },
    { kind: 'disease', label: 'Endometriosis' },
    { kind: 'mechanism', label: 'Ectopic endometrium' },
    { kind: 'exam', label: 'Chocolate cyst · infertility' },
  ],

  highYield: [
    '**Endometriosis = functioning endometrial glands/stroma OUTSIDE the uterus**, which bleed cyclically → chronic inflammation, fibrosis and adhesions. Commonest sites: **ovary, pouch of Douglas, uterosacral ligaments, pelvic peritoneum**.',
    '**Classic triad:** **cyclical pelvic pain, dysmenorrhoea, deep dyspareunia** — plus **subfertility**. Severity of disease correlates poorly with pain.',
    '**Ovarian endometrioma = “chocolate cyst”** (old altered blood). Peritoneal deposits look like **“powder-burn”** lesions; adhesions can fix pelvic organs (frozen pelvis). Diagnosis is by **laparoscopy** (gold standard).',
    '**Adenomyosis is the “internal” counterpart** (endometrium in the myometrium). Management: **suppress cyclical stimulation** — NSAIDs, combined pill/progestins, **GnRH agonists**; surgical ablation/excision for pain/fertility.',
  ],

  mechanism: {
    title: 'Ectopic endometrium bleeds cyclically → inflammation & scarring',
    steps: [
      { id: 's1', label: 'Endometrial tissue implants outside the uterus (e.g. retrograde menstruation)', emphasis: 'key' },
      { id: 's2', label: 'Cyclical bleeding → inflammation, fibrosis, adhesions', emphasis: 'key' },
      { id: 's3', label: 'Ovarian endometrioma (chocolate cyst); frozen pelvis' },
      { id: 's4', label: 'Pain + subfertility; laparoscopy confirms', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Cyclical pain, dysmenorrhoea, deep dyspareunia', mechanism: 'Cyclical bleeding of ectopic tissue', significance: 'key' },
    { sign: 'Ovarian “chocolate cyst” (endometrioma)', mechanism: 'Accumulated old blood', significance: 'key' },
    { sign: 'Subfertility', mechanism: 'Adhesions + inflammatory environment', significance: 'supportive' },
    { sign: 'Tender nodular uterosacral ligaments / fixed retroverted uterus', mechanism: 'Adhesions', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Young woman with cyclical pelvic pain and deep dyspareunia', meaning: 'Endometriosis → laparoscopy for diagnosis' },
    { clue: 'Ovarian cyst with thick “chocolate” fluid', meaning: 'Endometrioma' },
    { clue: 'Infertility with normal ovulation and tubes on early tests', meaning: 'Consider endometriosis' },
    { clue: 'Powder-burn peritoneal deposits at laparoscopy', meaning: 'Endometriotic implants' },
  ],

  treatment: [
    { logic: 'Suppress cyclical stimulation', detail: 'NSAIDs + combined pill/progestins (continuous) or GnRH agonists to induce amenorrhoea; laparoscopic ablation/excision for pain or fertility.' },
  ],

  mnemonics: [
    { hook: 'Chocolate cyst = endometrioma; Powder-burn = peritoneal deposits', expansion: ['Cyclical pain + dyspareunia + subfertility'] },
  ],

  traps: [
    {
      questionCategory: 'Disease extent vs symptoms',
      wrongInstinct: 'The amount of endometriosis reliably predicts the severity of pain',
      rightAnswer: 'Disease extent correlates poorly with pain — minimal disease can cause severe pain and vice versa',
      why: 'Symptom severity does not track with laparoscopic stage, so treatment is guided by symptoms and fertility goals.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An ovarian cyst filled with thick, dark “chocolate-coloured” fluid in a woman with cyclical pelvic pain is a(n):',
      options: [
        { id: 'a', text: 'Mucinous cystadenoma' },
        { id: 'b', text: 'Endometrioma' },
        { id: 'c', text: 'Corpus luteum cyst' },
        { id: 'd', text: 'Dermoid cyst' },
      ],
      answerId: 'b',
      explanation: 'An endometrioma (“chocolate cyst”) contains altered old blood from cyclical bleeding of ectopic endometrial tissue on the ovary.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'The gold-standard investigation to diagnose endometriosis is:',
      options: [
        { id: 'a', text: 'Transvaginal ultrasound' },
        { id: 'b', text: 'Serum CA-125' },
        { id: 'c', text: 'Laparoscopy' },
        { id: 'd', text: 'Endometrial biopsy' },
      ],
      answerId: 'c',
      explanation: 'Direct visualisation (± biopsy) at laparoscopy is the gold standard for diagnosing endometriosis.',
      tests: 'investigation',
    },
  ],
};

export default hrp2Endometriosis;
