import type { Lecture } from '../../lib/types';

export const extraembryonicMembranesCord: Lecture = {
  id: 'extraembryonic-membranes-cord',
  title: 'Amnion, Umbilical Cord, Yolk Sac & Allantois',
  system: 'repro',
  source: 'L5 — Placenta & Extraembryonic Membranes',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Development' },
    { kind: 'lecture', label: 'HGD L5' },
    { kind: 'mechanism', label: 'Extraembryonic membranes' },
    { kind: 'exam', label: 'Wharton jelly / urachus' },
  ],
  highYield: [
    'Embryonic folding carries amnion around the connecting stalk and associated structures, forming the outer covering of the **umbilical cord**.',
    'A mature cord normally contains **two umbilical arteries and one umbilical vein** embedded in **Wharton jelly**, a mucoid connective tissue that protects the vessels.',
    'Amniotic fluid permits free symmetrical movement, cushions trauma, prevents adherence of amnion to the fetus, supports temperature control, and contributes to fluid/electrolyte homeostasis.',
    'The **yolk sac** contributes early blood vessels/blood cells, gives rise to primordial germ cells, and is incorporated into the primitive gut; its vitelline-duct remnant can persist as **Meckel diverticulum**.',
    'The **allantois** extends from the yolk-sac/hindgut region into the connecting stalk, contributes to early blood formation and bladder development, and becomes the **urachus -> median umbilical ligament**.',
  ],
  mechanism: {
    title: 'Folding transforms extraembryonic supports',
    steps: [
      { id: 's1', label: 'Amnion expands around embryo and connecting stalk' },
      { id: 's2', label: 'Connecting stalk + vessels -> umbilical cord', emphasis: 'key' },
      { id: 's3', label: 'Yolk sac narrows to vitelline duct / gut connection' },
      { id: 's4', label: 'Allantois -> urachus -> median umbilical ligament' },
    ],
  },
  examFindings: [
    { sign: 'Cord with one vein and two arteries in Wharton jelly', mechanism: 'Normal umbilical-cord anatomy', significance: 'key' },
    { sign: 'Ileal diverticulum at antimesenteric border', mechanism: 'Persistent vitelline duct (Meckel diverticulum)', significance: 'key' },
    { sign: 'Urine drains from umbilicus in a newborn', mechanism: 'Patent urachus between bladder and umbilicus', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Prenatal cord-vessel count', meaning: 'Detect a single umbilical artery and prompt anomaly survey' },
    { clue: 'Ultrasound of urachal tract', meaning: 'Assess patent urachus or urachal cyst' },
    { clue: 'Imaging for painless lower GI bleeding', meaning: 'Evaluate Meckel diverticulum when clinically suspected' },
  ],
  treatment: [
    { logic: 'Inspect cord vessel number at birth', detail: 'A single umbilical artery can accompany other congenital anomalies.' },
    { logic: 'Map an umbilical remnant by its embryonic connection', detail: 'Vitelline duct links ileum; urachus links bladder.' },
  ],
  mnemonics: [
    { hook: 'AVA in the cord: Artery, Vein, Artery', expansion: ['Two arteries, one vein'] },
    { hook: 'Yolk to ileum; allantois to bladder', expansion: ['Meckel diverticulum', 'Urachus'] },
  ],
  traps: [
    {
      questionCategory: 'Umbilical vessel oxygenation',
      wrongInstinct: 'A vessel called an artery must carry oxygenated blood',
      rightAnswer: 'Umbilical arteries carry deoxygenated fetal blood to placenta; the umbilical vein returns oxygenated blood',
      why: 'Artery and vein are named by direction relative to the heart, not oxygen content.',
    },
  ],
  quiz: [
    {
      id: 'q1',
      stem: 'The urachus normally becomes which adult structure?',
      options: [
        { id: 'a', text: 'Median umbilical ligament' },
        { id: 'b', text: 'Round ligament of liver' },
        { id: 'c', text: 'Ligamentum arteriosum' },
        { id: 'd', text: 'Vitelline artery' },
      ],
      answerId: 'a',
      explanation: 'The allantois becomes the urachus, which obliterates as the median umbilical ligament.',
      tests: 'exam',
    },
  ],
};

export default extraembryonicMembranesCord;
