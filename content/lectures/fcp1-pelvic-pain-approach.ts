import type { Lecture } from '../../lib/types';

export const fcp1PelvicPainApproach: Lecture = {
  id: 'fcp1-pelvic-pain-approach',
  title: 'Approach to Pelvic Pain',
  system: 'clinical',
  source: 'L35 — Pelvic Mass & Pelvic Pain',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L35 Pelvic Mass & Pain' },
    { kind: 'disease', label: 'Ectopic · torsion · PID' },
    { kind: 'mechanism', label: 'Acute vs chronic pain' },
    { kind: 'investigation', label: 'β-hCG · TVUS Doppler' },
  ],

  highYield: [
    '**Every reproductive-age woman with pelvic pain gets a β-hCG.** A positive test with pain and an adnexal mass is **ectopic pregnancy until excluded** [[fcp1-obgyne-history]].',
    'Cannot-miss acute causes: **ectopic pregnancy, ovarian torsion, PID / tubo-ovarian abscess and appendicitis** [[fcp1-abdominal-pain-acute-abdomen]], plus a ruptured ovarian cyst.',
    '**Ovarian torsion:** sudden severe unilateral pain with vomiting and a tender adnexal mass → urgent **Doppler ultrasound and surgery** to save the ovary.',
    '**Pelvic inflammatory disease:** bilateral lower abdominal pain, **cervical motion tenderness**, discharge and fever → treat empirically to protect fertility.',
    '**Chronic pelvic pain (6 months or more):** endometriosis (cyclical pain, dysmenorrhoea, dyspareunia), adenomyosis, adhesions, irritable bowel syndrome and interstitial cystitis; abnormal bleeding widens the differential [[fcp1-abnormal-vaginal-bleeding]].',
  ],

  mechanism: {
    title: 'Triaging pelvic pain',
    steps: [
      { id: 's1', label: 'β-hCG in every reproductive-age woman', emphasis: 'key' },
      { id: 's2', label: 'Acute severe → exclude ectopic, torsion, PID, appendicitis', emphasis: 'danger' },
      { id: 's3', label: 'Ultrasound (± Doppler) + urinalysis + swabs', emphasis: 'normal' },
      { id: 's4', label: 'Cyclical, chronic pain → endometriosis / adenomyosis', emphasis: 'key' },
      { id: 's5', label: 'Shock or peritonism → emergency surgery', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Positive β-hCG with adnexal tenderness or a mass', mechanism: 'Ectopic pregnancy', significance: 'key' },
    { sign: 'Sudden severe unilateral pain with a tender adnexal mass', mechanism: 'Ovarian torsion', significance: 'key' },
    { sign: 'Cervical motion tenderness with discharge and fever', mechanism: 'Pelvic inflammatory disease', significance: 'key' },
    { sign: 'Cyclical pain, dysmenorrhoea, dyspareunia and tender nodularity', mechanism: 'Endometriosis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Positive β-hCG with an empty uterus and an adnexal mass on TVUS', meaning: 'Ectopic pregnancy — an emergency' },
    { clue: 'Whirlpool sign or absent ovarian flow on Doppler', meaning: 'Ovarian torsion — urgent surgery' },
    { clue: 'Raised WCC/CRP, purulent cervical discharge and positive swabs', meaning: 'Pelvic inflammatory disease' },
    { clue: 'Normal imaging with cyclical pain', meaning: 'Consider endometriosis — laparoscopy is diagnostic' },
  ],

  treatment: [
    { logic: 'Resuscitate and exclude ectopic first', detail: 'Haemodynamic instability with a positive β-hCG means urgent resuscitation and surgery; never send a possible ectopic home.' },
    { logic: 'Save the ovary in torsion', detail: 'Strong clinical suspicion of torsion goes to laparoscopy for detorsion even when imaging is equivocal.' },
    { logic: 'Treat PID empirically', detail: 'Keep a low threshold for antibiotics covering gonorrhoea and chlamydia to preserve fertility.' },
  ],

  mnemonics: [
    { hook: 'Pelvic pain: β-hCG before anything', expansion: ['Positive → ectopic until excluded', 'Sudden unilateral → torsion; bilateral + fever → PID'] },
  ],

  traps: [
    {
      questionCategory: 'Ovarian torsion vs imaging',
      wrongInstinct: 'Normal arterial flow on Doppler rules out ovarian torsion',
      rightAnswer: 'Torsion can have preserved arterial flow early — a convincing clinical picture still warrants surgery',
      why: 'Doppler has limited sensitivity because the ovary is intermittently perfused, so clinical suspicion, not imaging, drives the decision.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 26-year-old with 7 weeks of amenorrhoea develops sudden right iliac fossa pain and dizziness; her BP is 90/60, β-hCG is positive, and TVUS shows an empty uterus with a right adnexal mass. The diagnosis is:',
      options: [
        { id: 'a', text: 'Ovarian torsion' },
        { id: 'b', text: 'Ruptured ectopic pregnancy' },
        { id: 'c', text: 'Pelvic inflammatory disease' },
        { id: 'd', text: 'Appendicitis' },
      ],
      answerId: 'b',
      explanation: 'A positive β-hCG with an empty uterus, an adnexal mass and haemodynamic instability indicates a ruptured ectopic pregnancy requiring emergency surgery.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'A 19-year-old has sudden severe left iliac fossa pain and vomiting with a tender left adnexal mass; β-hCG is negative and Doppler shows reduced ovarian flow. The best next step is:',
      options: [
        { id: 'a', text: 'Discharge with analgesia' },
        { id: 'b', text: 'Empirical antibiotics for PID' },
        { id: 'c', text: 'Urgent laparoscopy for suspected ovarian torsion' },
        { id: 'd', text: 'CT in the morning' },
      ],
      answerId: 'c',
      explanation: 'Sudden severe unilateral pain with a tender adnexal mass and reduced Doppler flow is ovarian torsion; urgent laparoscopy and detorsion aim to save the ovary.',
      tests: 'treatment',
    },
  ],
};

export default fcp1PelvicPainApproach;
