import type { Lecture } from '../../lib/types';

export const abdominalWallRectusSheath: Lecture = {
  id: 'abdominal-wall-rectus-sheath',
  title: 'Anterior Abdominal Wall & Rectus Sheath',
  system: 'gi',
  source: 'L16 — Anterior Abdominal Wall & Stomach',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L16 Abdominal Wall & Stomach' },
    { kind: 'disease', label: 'Abdominal wall' },
    { kind: 'mechanism', label: 'Muscle layers & sheath' },
    { kind: 'exam', label: 'Arcuate line / dermatomes' },
  ],

  highYield: [
    'The abdomen is mapped by **9 regions** (or **4 quadrants**). The anterior wall has **layers**: skin → superficial fascia (**Camper\'s fatty + Scarpa\'s membranous**) → the **3 flat muscles** (external oblique, internal oblique, transversus abdominis) → transversalis fascia → extraperitoneal fat → peritoneum.',
    'The **3 flat muscles** run in different directions for strength; their aponeuroses form the **rectus sheath** enclosing **rectus abdominis** (which flexes the trunk). Nerve supply of all wall muscles = **thoraco-abdominal nerves T7–T11, subcostal T12, and L1 (iliohypogastric/ilioinguinal)**.',
    '**Rectus sheath composition changes at the arcuate line** (~midway between umbilicus and pubis): **above it**, the internal oblique aponeurosis splits to enclose rectus (sheath both anterior and posterior); **below it**, ALL three aponeuroses pass ANTERIOR to rectus, so the **posterior sheath is deficient** (rectus lies on transversalis fascia).',
    '**Dermatome landmarks**: **T7 = xiphoid, T10 = umbilicus, L1 = inguinal region**. The **linea alba** (midline aponeurotic raphe) is a relatively avascular plane for midline incisions.',
    'Blood supply: **superior epigastric (from internal thoracic)** and **inferior epigastric (from external iliac)** arteries anastomose within the rectus sheath — a collateral pathway and a landmark for hernias.',
  ],

  mechanism: {
    title: 'Three flat muscles + rectus; the sheath changes at the arcuate line',
    steps: [
      { id: 's1', label: 'External oblique / internal oblique / transversus + rectus', emphasis: 'key' },
      { id: 's2', label: 'Innervation T7–L1' },
      { id: 's3', label: 'Above arcuate line: sheath front & back' },
      { id: 's4', label: 'Below arcuate line: all aponeuroses anterior (no posterior sheath)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Umbilicus = the T10 dermatome', mechanism: 'Segmental innervation of the wall', significance: 'key' },
    { sign: 'Rectus lying directly on transversalis fascia below the arcuate line', mechanism: 'Deficient posterior sheath inferiorly', significance: 'key' },
    { sign: 'Rectus sheath hematoma from inferior epigastric artery tear', mechanism: 'Epigastric vessels within the sheath', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Locate the arcuate line for surgical planning', meaning: 'Sheath composition changes there' },
    { clue: 'Dermatome check (T10 = umbilicus)', meaning: 'Sensory level of the wall' },
  ],

  treatment: [
    { logic: 'Midline (linea alba) incision is relatively avascular', detail: 'Common laparotomy approach.' },
    { logic: 'Beware epigastric vessels when placing lateral ports', detail: 'Avoid rectus sheath hematoma.' },
  ],

  mnemonics: [
    { hook: 'T7 xiphoid, T10 umbilicus, L1 groin (dermatomes)', expansion: ['Segmental wall innervation'] },
    { hook: 'Below the arcuate line = NO posterior rectus sheath', expansion: ['All 3 aponeuroses go anterior'] },
  ],

  traps: [
    {
      questionCategory: 'Rectus sheath below the arcuate line',
      wrongInstinct: 'The posterior rectus sheath is complete all the way down to the pubis',
      rightAnswer: 'Below the arcuate line the posterior sheath is ABSENT — all three aponeuroses pass anterior to rectus, so it rests directly on the transversalis fascia',
      why: 'This is why the inferior epigastric vessels lie against the rectus below the arcuate line and why the sheath structure differs above vs below.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Below the arcuate line, what forms the covering behind the rectus abdominis muscle?',
      options: [
        { id: 'a', text: 'The internal oblique aponeurosis (posterior layer)' },
        { id: 'b', text: 'Only the transversalis fascia (no aponeurotic posterior sheath)' },
        { id: 'c', text: 'The transversus abdominis aponeurosis' },
        { id: 'd', text: 'The peritoneum alone' },
      ],
      answerId: 'b',
      explanation: 'Below the arcuate line all three flat-muscle aponeuroses pass anterior to rectus abdominis, so there is no aponeurotic posterior sheath — the muscle lies directly on the transversalis fascia.',
      tests: 'exam',
    },
  ],
};

export default abdominalWallRectusSheath;
