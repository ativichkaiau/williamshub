import type { Lecture } from '../../lib/types';

export const fcp1ObgyneHistory: Lecture = {
  id: 'fcp1-obgyne-history',
  title: 'The OB-Gyne History: Menstrual, Obstetric & Sexual History',
  system: 'clinical',
  source: 'L5 — OB-Gyne History Taking & Vaginal Bleeding',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L5 OB-Gyne History' },
    { kind: 'mechanism', label: 'Menstrual → obstetric → sexual' },
    { kind: 'exam', label: 'LMP · GPAL' },
    { kind: 'investigation', label: 'β-hCG first' },
  ],

  highYield: [
    '**The menstrual history anchors everything.** Record the **LMP (last menstrual period)**, age at menarche, and the **cycle**: length, regularity, duration and flow, plus dysmenorrhoea and any **intermenstrual or postcoital bleeding**. Establishing the LMP lets you judge pregnancy risk immediately.',
    '**Summarise the obstetric history as GPAL:** **Gravida** (total pregnancies), **Para** (births beyond viability), **Abortions/losses**, and **Living** children. Add the outcome and complications of each pregnancy and the mode of delivery.',
    '**The gynaecologic history covers** discharge, pelvic pain, prolapse symptoms, previous gynae surgery, and **cervical screening (smear) history** — a lapsed smear plus abnormal bleeding raises concern.',
    '**Take a sensitive sexual and contraceptive history:** partners, current contraception, and STI risk, always **confidentially and non-judgementally**. This context changes the differential for bleeding, discharge and pain.',
    '**Golden rule: in any reproductive-age woman with abdominal pain or abnormal bleeding, exclude pregnancy with a β-hCG.** A missed **ectopic** is a killer. This history feeds directly into [[fcp1-abnormal-vaginal-bleeding]] and the approach to [[fcp1-pelvic-pain-approach]].',
  ],

  mechanism: {
    title: 'Building the OB-Gyne history',
    steps: [
      { id: 's1', label: 'Menstrual history: LMP, cycle, flow — establish pregnancy risk', emphasis: 'key' },
      { id: 's2', label: 'Obstetric history: GPAL and the outcome of each pregnancy' },
      { id: 's3', label: 'Gynaecologic history: discharge, pain, prolapse, screening' },
      { id: 's4', label: 'Sexual & contraceptive history — sensitive and confidential' },
      { id: 's5', label: 'Any reproductive-age woman → consider pregnancy & ectopic', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'An uncertain or overdue LMP', mechanism: 'Raises the possibility of pregnancy and mandates a pregnancy test', significance: 'key' },
    { sign: 'The GPAL notation', mechanism: 'Compactly captures gravidity, parity, losses and living children to summarise obstetric background', significance: 'key' },
    { sign: 'Postcoital bleeding', mechanism: 'Points toward cervical pathology and prompts speculum examination and screening', significance: 'supportive' },
    { sign: 'Intermenstrual bleeding', mechanism: 'Suggests a structural or hormonal cause of abnormal uterine bleeding ([[fcp1-abnormal-vaginal-bleeding]])', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Reproductive-age woman with amenorrhoea and lower abdominal pain', meaning: 'Do a urine or serum β-hCG to exclude ectopic pregnancy before anything else' },
    { clue: 'Postcoital bleeding with an overdue cervical smear', meaning: 'Arrange speculum examination and cervical screening to exclude cervical pathology' },
    { clue: 'Irregular cycles with hirsutism and a raised BMI', meaning: 'Consider polycystic ovary syndrome and anovulation' },
    { clue: 'New abnormal discharge in a woman with multiple partners', meaning: 'Offer an STI screen and treat as indicated' },
  ],

  treatment: [
    { logic: 'Establish LMP and pregnancy status first, every time', detail: 'Pregnancy reframes the entire differential for pain and bleeding; the β-hCG is the single most important early test in a woman of reproductive age.' },
    { logic: 'Keep the sexual history confidential and non-judgemental', detail: 'A safe, private, respectful approach yields an accurate history and protects the therapeutic relationship, especially for sensitive disclosures.' },
  ],

  mnemonics: [
    { hook: 'Obstetric shorthand GPAL = Gravida, Para, Abortions/losses, Living children', expansion: ['Gravida = total number of pregnancies', 'Para = births beyond viability', 'Abortions = miscarriages and terminations', 'Living = number of living children'] },
  ],

  traps: [
    {
      questionCategory: 'Reproductive-age abdominal pain',
      wrongInstinct: 'Work up lower abdominal pain in a young woman without checking a pregnancy test',
      rightAnswer: 'Send a β-hCG in every reproductive-age woman with pain or abnormal bleeding, regardless of stated contraception',
      why: 'A missed ectopic pregnancy is a common and lethal error; the LMP and a pregnancy test are non-negotiable first steps because contraceptive use does not exclude pregnancy.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A woman is described obstetrically as G4 P2 A1 L2. Which statement is correct?',
      options: [
        { id: 'a', text: 'She has had four births' },
        { id: 'b', text: 'She has had four pregnancies, two births beyond viability, one loss, and has two living children' },
        { id: 'c', text: 'She has two pregnancies in total' },
        { id: 'd', text: 'She has one living child' },
      ],
      answerId: 'b',
      explanation: 'GPAL records Gravida (4 pregnancies), Para (2 births beyond viability), Abortions/losses (1) and Living children (2). It is a compact summary of the obstetric background.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A 24-year-old presents with left lower abdominal pain and says her period is two weeks late. She uses condoms “most of the time”. The single most important immediate investigation is:',
      options: [
        { id: 'a', text: 'A pelvic ultrasound before any blood test' },
        { id: 'b', text: 'A β-hCG (pregnancy test)' },
        { id: 'c', text: 'A full blood count only' },
        { id: 'd', text: 'A cervical smear' },
      ],
      answerId: 'b',
      explanation: 'A late period with lower abdominal pain in a reproductive-age woman must prompt a β-hCG to exclude ectopic pregnancy. Imperfect contraception does not exclude pregnancy, and the test guides everything that follows.',
      tests: 'investigation',
    },
  ],
};

export default fcp1ObgyneHistory;
