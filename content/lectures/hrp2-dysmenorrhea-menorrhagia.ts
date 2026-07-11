import type { Lecture } from '../../lib/types';

export const hrp2DysmenorrheaMenorrhagia: Lecture = {
  id: 'hrp2-dysmenorrhea-menorrhagia',
  title: 'Dysmenorrhoea & Heavy Menstrual Bleeding',
  system: 'repro',
  source: 'L11 — Abnormal Uterine Bleeding',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'L11 AUB' },
    { kind: 'disease', label: 'Dysmenorrhoea · menorrhagia' },
    { kind: 'mechanism', label: 'Prostaglandins' },
    { kind: 'treatment', label: 'NSAID · LNG-IUS' },
  ],

  highYield: [
    '**Primary dysmenorrhoea** (no pelvic pathology, from menarche): crampy pain from **prostaglandin-driven** myometrial contraction/ischaemia → treat **NSAIDs** (prostaglandin inhibitors) ± combined pill.',
    '**Secondary dysmenorrhoea** (later onset, pathology): **endometriosis, adenomyosis, fibroids, PID, IUD** — treat the cause; new or worsening cyclical pain warrants examination and imaging.',
    '**Heavy menstrual bleeding (menorrhagia)** work-up: exclude pregnancy, check **full blood count (iron-deficiency anaemia)**, thyroid, and a **coagulopathy** (e.g. **von Willebrand** if since menarche); assess the endometrium if risk factors/age.',
    '**Menorrhagia management (medical first):** **LNG-IUS** (levonorgestrel intrauterine system — most effective medical option), **tranexamic acid/NSAIDs** during menses, **combined hormonal or progestin** therapy; surgery (ablation/hysterectomy) if refractory. **PMS/PMDD** is cyclical mood/physical symptoms in the luteal phase.',
  ],

  mechanism: {
    title: 'Prostaglandins (pain) and endometrial/bleeding disorders',
    steps: [
      { id: 's1', label: 'Primary dysmenorrhoea = prostaglandin-driven cramps', emphasis: 'key' },
      { id: 's2', label: 'Secondary = underlying pathology (endometriosis, fibroids)', emphasis: 'key' },
      { id: 's3', label: 'Menorrhagia → anaemia; exclude coagulopathy' },
      { id: 's4', label: 'Treat medically first (LNG-IUS, tranexamic acid)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Cramps from menarche, no pathology → primary dysmenorrhoea', mechanism: 'Prostaglandins', significance: 'key' },
    { sign: 'New cyclical pain + pelvic signs → secondary cause', mechanism: 'Endometriosis/adenomyosis/fibroids', significance: 'key' },
    { sign: 'Iron-deficiency anaemia from menorrhagia', mechanism: 'Chronic blood loss', significance: 'supportive' },
    { sign: 'Heavy bleeding since menarche → screen coagulopathy', mechanism: 'e.g. von Willebrand disease', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Teenager with painful periods, normal exam', meaning: 'Primary dysmenorrhoea → NSAIDs' },
    { clue: 'Heavy periods with fatigue and low haemoglobin', meaning: 'Menorrhagia with iron-deficiency anaemia' },
    { clue: 'New severe dysmenorrhoea with deep dyspareunia', meaning: 'Secondary cause (e.g. endometriosis)' },
    { clue: 'Heavy menstrual bleeding since menarche + bruising', meaning: 'Screen for von Willebrand disease' },
  ],

  treatment: [
    { logic: 'NSAIDs for dysmenorrhoea', detail: 'Prostaglandin synthesis inhibitors relieve primary dysmenorrhoea; add/alternate the combined pill.' },
    { logic: 'LNG-IUS first-line for menorrhagia', detail: 'Most effective medical treatment; alternatives are tranexamic acid/NSAIDs and hormonal therapy; surgery if refractory.' },
  ],

  mnemonics: [
    { hook: 'Primary dysmenorrhoea = Prostaglandins → NSAIDs; Secondary = Pathology', expansion: ['Menorrhagia: LNG-IUS is the most effective medical option'] },
  ],

  traps: [
    {
      questionCategory: 'Primary vs secondary dysmenorrhoea',
      wrongInstinct: 'New-onset painful periods in an older woman are simply primary dysmenorrhoea',
      rightAnswer: 'Later-onset dysmenorrhoea suggests a secondary cause (endometriosis, adenomyosis, fibroids) needing evaluation',
      why: 'Primary dysmenorrhoea starts near menarche; new or worsening pain later warrants a search for pelvic pathology.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 15-year-old has crampy lower abdominal pain with her periods since menarche and a normal pelvic examination. First-line treatment is:',
      options: [
        { id: 'a', text: 'Hysterectomy' },
        { id: 'b', text: 'NSAIDs (prostaglandin synthesis inhibitors)' },
        { id: 'c', text: 'GnRH agonist' },
        { id: 'd', text: 'Iron only' },
      ],
      answerId: 'b',
      explanation: 'Primary dysmenorrhoea is prostaglandin-mediated; NSAIDs are first-line, with the combined pill as an alternative/adjunct.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'The most effective medical treatment for heavy menstrual bleeding is generally:',
      options: [
        { id: 'a', text: 'The levonorgestrel intrauterine system (LNG-IUS)' },
        { id: 'b', text: 'Iron tablets' },
        { id: 'c', text: 'Paracetamol' },
        { id: 'd', text: 'Antibiotics' },
      ],
      answerId: 'a',
      explanation: 'The LNG-IUS thins the endometrium and is the most effective medical treatment for heavy menstrual bleeding; tranexamic acid/NSAIDs and hormonal therapy are alternatives.',
      tests: 'exam',
    },
  ],
};

export default hrp2DysmenorrheaMenorrhagia;
