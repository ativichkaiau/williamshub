import type { Lecture } from '../../lib/types';

export const hrp2PidTuboOvarian: Lecture = {
  id: 'hrp2-pid-tubo-ovarian',
  title: 'Pelvic Inflammatory Disease & Complications',
  system: 'repro',
  source: 'L2 — Bacterial STIs & PID',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'L2 Bacterial STIs' },
    { kind: 'disease', label: 'PID · tubo-ovarian abscess' },
    { kind: 'mechanism', label: 'Ascending infection' },
    { kind: 'treatment', label: 'Broad-spectrum antibiotics' },
  ],

  highYield: [
    '**PID = ascending infection** (mainly **chlamydia and gonorrhoea**, often polymicrobial) causing **endometritis, salpingitis, oophoritis and pelvic peritonitis**. Lower abdominal pain, abnormal discharge/bleeding, fever, and **cervical-motion (“chandelier”) tenderness**.',
    '**Complications:** **tubo-ovarian abscess** (a pelvic mass, needs antibiotics ± drainage), **tubal scarring → infertility and ectopic pregnancy**, chronic pelvic pain, and **Fitz-Hugh–Curtis syndrome** (perihepatitis → RUQ pain, “violin-string” adhesions).',
    '**Treat early and empirically** with broad-spectrum antibiotics covering GC, chlamydia and anaerobes (e.g. ceftriaxone + doxycycline + metronidazole); **treat partners** and screen for other STIs. **IUD** insertion is a transient risk period.',
    '**Have a low threshold to treat** — clinical diagnosis, because untreated PID causes irreversible tubal damage; consider laparoscopy if uncertain or not improving.',
  ],

  mechanism: {
    title: 'Cervical STI ascends → upper-tract inflammation → scarring',
    steps: [
      { id: 's1', label: 'GC/chlamydia colonise the cervix', emphasis: 'key' },
      { id: 's2', label: 'Ascend → salpingitis/endometritis (often polymicrobial)', emphasis: 'key' },
      { id: 's3', label: 'Tubo-ovarian abscess; perihepatitis (Fitz-Hugh–Curtis)' },
      { id: 's4', label: 'Tubal scarring → infertility + ectopic pregnancy', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Cervical-motion tenderness', mechanism: 'Peritoneal irritation of adnexa', significance: 'key' },
    { sign: 'Adnexal mass (tubo-ovarian abscess)', mechanism: 'Walled-off pus', significance: 'key' },
    { sign: 'RUQ pain + violin-string adhesions → Fitz-Hugh–Curtis', mechanism: 'Perihepatitis', significance: 'supportive' },
    { sign: 'Later infertility / ectopic pregnancy', mechanism: 'Tubal scarring', significance: 'key' },
  ],

  investigations: [
    { clue: 'Young woman: fever, pelvic pain, cervical-motion tenderness', meaning: 'PID → start empirical antibiotics promptly' },
    { clue: 'PID with a tender pelvic mass', meaning: 'Tubo-ovarian abscess (antibiotics ± drainage)' },
    { clue: 'PID with right-upper-quadrant pain', meaning: 'Fitz-Hugh–Curtis perihepatitis' },
    { clue: 'Positive NAAT for chlamydia/gonorrhoea', meaning: 'Confirms causative STI; treat partners' },
  ],

  treatment: [
    { logic: 'Empirical broad-spectrum antibiotics', detail: 'Cover GC + chlamydia + anaerobes; drain a tubo-ovarian abscess if large or not responding; treat partners and screen for other STIs.' },
  ],

  mnemonics: [
    { hook: 'PID: Pain, discharge, cervical-motion tenderness → treat early to save tubes', expansion: ['Complications: TOA, infertility, ectopic, Fitz-Hugh–Curtis'] },
  ],

  traps: [
    {
      questionCategory: 'Threshold to treat',
      wrongInstinct: 'Withhold antibiotics for PID until cultures confirm the organism',
      rightAnswer: 'Treat PID empirically and early on clinical suspicion to prevent irreversible tubal damage',
      why: 'Delayed treatment increases infertility and ectopic risk; PID is a clinical diagnosis warranting prompt empirical therapy.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A woman with pelvic inflammatory disease develops right-upper-quadrant pain; laparoscopy shows “violin-string” adhesions between the liver and abdominal wall. This is:',
      options: [
        { id: 'a', text: 'Acute cholecystitis' },
        { id: 'b', text: 'Fitz-Hugh–Curtis syndrome (perihepatitis)' },
        { id: 'c', text: 'Appendicitis' },
        { id: 'd', text: 'Ovarian torsion' },
      ],
      answerId: 'b',
      explanation: 'Perihepatitis with violin-string adhesions complicating PID is Fitz-Hugh–Curtis syndrome (usually chlamydial/gonococcal).',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'The most important long-term reason to treat PID promptly is to prevent:',
      options: [
        { id: 'a', text: 'Cervical cancer' },
        { id: 'b', text: 'Tubal infertility and ectopic pregnancy' },
        { id: 'c', text: 'Endometrial hyperplasia' },
        { id: 'd', text: 'Ovarian cancer' },
      ],
      answerId: 'b',
      explanation: 'Tubal scarring from PID leads to infertility and ectopic pregnancy; early treatment reduces this irreversible damage.',
      tests: 'mechanism',
    },
  ],
};

export default hrp2PidTuboOvarian;
