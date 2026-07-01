import type { Lecture } from '../../lib/types';

export const posteriorAbdominalWallDiaphragm: Lecture = {
  id: 'posterior-abdominal-wall-diaphragm',
  title: 'Posterior Abdominal Wall, Aorta & Diaphragm',
  system: 'msk',
  source: 'L17 — Posterior Abdominal Wall & Urinary System',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L17 Posterior Wall & Urinary' },
    { kind: 'disease', label: 'Posterior wall / diaphragm' },
    { kind: 'mechanism', label: 'Aortic branches & apertures' },
    { kind: 'exam', label: 'Diaphragm openings / AAA' },
  ],

  highYield: [
    'The **posterior abdominal wall muscles**: **psoas major** (+ minor), **iliacus** (together = iliopsoas, the chief hip flexor; L2–L4/femoral nerve), and **quadratus lumborum** (extends/laterally flexes the trunk, fixes the 12th rib).',
    'The **abdominal aorta** (T12 → bifurcates at **L4**) gives: **3 anterior unpaired visceral branches — celiac trunk (T12), superior mesenteric (L1), inferior mesenteric (L3)**; **paired lateral visceral** — suprarenal, **renal (L1)**, gonadal; and **paired parietal** — inferior phrenic, lumbar.',
    '**Abdominal aortic aneurysm (AAA)** is usually **infrarenal (~80%)**, more common in older men, and presents with pulsatile central/back pain; rupture is life-threatening. The **IVC** forms at **L5** and passes the diaphragm at **T8**.',
    'The **diaphragm** (musculotendinous dome; central tendon + sternal/costal/lumbar parts, with **right and left crura**) is the chief muscle of inspiration — **motor + sensory = the phrenic nerve (C3–C5)**.',
    '**Diaphragmatic apertures**: **caval opening (IVC + right phrenic n.) at T8**, **esophageal hiatus (esophagus + vagal trunks) at T10**, **aortic hiatus (aorta + thoracic duct + azygos) at T12** — "I 8 (ate) 10 EGGs AT 12".',
  ],

  mechanism: {
    title: 'Muscles flex the hip/spine; the aorta branches at set levels',
    steps: [
      { id: 's1', label: 'Iliopsoas (hip flexor) + quadratus lumborum', emphasis: 'key' },
      { id: 's2', label: 'Aorta: celiac T12, SMA L1, IMA L3; bifurcates L4' },
      { id: 's3', label: 'AAA usually infrarenal (~80%)' },
      { id: 's4', label: 'Diaphragm: IVC T8, esophagus T10, aorta T12', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Pulsatile expansile central abdominal mass + back pain in an older man', mechanism: 'Abdominal aortic aneurysm (infrarenal)', significance: 'key' },
    { sign: 'Positive psoas sign in retrocecal appendicitis', mechanism: 'Psoas irritation on the posterior wall', significance: 'supportive' },
    { sign: 'Referred shoulder-tip pain from diaphragmatic irritation', mechanism: 'Phrenic nerve (C3–C5)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Ultrasound/CT aorta for AAA', meaning: 'Diameter & infrarenal location' },
    { clue: 'Level a structure against the aortic branch points', meaning: 'Celiac T12 / SMA L1 / IMA L3' },
  ],

  treatment: [
    { logic: 'AAA: surveillance; repair if large/symptomatic', detail: 'Open or endovascular (EVAR).' },
    { logic: 'Anatomy underlies retroperitoneal surgical approaches', detail: 'Psoas, aorta, ureters lie here.' },
  ],

  mnemonics: [
    { hook: 'Aorta anterior branches: celiac T12, SMA L1, IMA L3 (odd levels)', expansion: ['Bifurcates at L4'] },
    { hook: 'Diaphragm: IVC T8, esophagus T10, aorta T12 ("I ate 10 eggs at 12")', expansion: ['Vagus with esophagus; duct with aorta'] },
  ],

  traps: [
    {
      questionCategory: 'Level of the caval opening',
      wrongInstinct: 'The IVC passes through the diaphragm at T10 with the esophagus',
      rightAnswer: 'The IVC (caval opening) is at T8; the ESOPHAGUS passes at T10 and the AORTA at T12',
      why: 'Each aperture has its own vertebral level — mixing T8/T10/T12 is the classic error.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'At which vertebral level does the esophagus (with the vagal trunks) pass through the diaphragm?',
      options: [
        { id: 'a', text: 'T8' },
        { id: 'b', text: 'T10' },
        { id: 'c', text: 'T12' },
        { id: 'd', text: 'L1' },
      ],
      answerId: 'b',
      explanation: 'The esophageal hiatus is at T10 (esophagus + anterior/posterior vagal trunks). The caval opening is at T8 and the aortic hiatus at T12.',
      tests: 'exam',
    },
  ],
};

export default posteriorAbdominalWallDiaphragm;
