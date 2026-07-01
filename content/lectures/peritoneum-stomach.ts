import type { Lecture } from '../../lib/types';

export const peritoneumStomach: Lecture = {
  id: 'peritoneum-stomach',
  title: 'Peritoneum & Stomach',
  system: 'gi',
  source: 'L16 — Anterior Abdominal Wall & Stomach',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L16 Abdominal Wall & Stomach' },
    { kind: 'disease', label: 'Peritoneum / stomach' },
    { kind: 'mechanism', label: 'Sacs, omenta, blood supply' },
    { kind: 'exam', label: 'Retroperitoneal organs' },
  ],

  highYield: [
    'The **peritoneum** is a serous membrane (**parietal** lining the wall, **visceral** on organs). **Intraperitoneal organs** (suspended by mesentery): stomach, liver, spleen, 1st part of duodenum, jejunum, ileum, cecum/appendix, transverse & sigmoid colon. **Retroperitoneal (SAD PUCKER)**: Suprarenals, Aorta/IVC, Duodenum (2–4), Pancreas, Ureters, Colon (ascending/descending), Kidneys, Esophagus, Rectum.',
    'The **peritoneal cavity** has a **greater sac** and a **lesser sac (omental bursa)** connected through the **omental (epiploic) foramen of Winslow** — bounded anteriorly by the **hepatoduodenal ligament** carrying the **portal triad (bile duct, hepatic artery, portal vein)**.',
    '**Omenta**: the **lesser omentum** (hepatogastric + hepatoduodenal ligaments) connects the liver to the lesser curvature/duodenum; the **greater omentum** ("abdominal policeman") hangs from the greater curvature and can wall off infection. The **hepatorenal recess (pouch of Morison)** is the lowest point in the supine abdomen (fluid collects there).',
    'The **stomach** has a fundus, cardia, body, and pyloric region (antrum → canal → pyloric sphincter); the lesser and greater curvatures; and an extra **oblique** inner muscle layer (3 muscle layers total).',
    'Stomach **blood supply = branches of the celiac trunk**: **left gastric (celiac) + right gastric (hepatic)** along the lesser curvature; **left gastro-omental (splenic) + right gastro-omental (gastroduodenal)** along the greater curvature; **short gastrics (splenic)** to the fundus. **Innervation: vagal (parasympathetic) → motility/acid**; **sympathetic (celiac/greater splanchnic T5–T9) → pain**.',
  ],

  mechanism: {
    title: 'Two sacs, the omenta, and a celiac-trunk blood supply',
    steps: [
      { id: 's1', label: 'Intraperitoneal (mesentery) vs retroperitoneal (SAD PUCKER)', emphasis: 'key' },
      { id: 's2', label: 'Greater + lesser sac via foramen of Winslow' },
      { id: 's3', label: 'Portal triad in the hepatoduodenal ligament' },
      { id: 's4', label: 'Stomach = celiac trunk; vagus motility, sympathetic pain', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Free fluid/pus collecting in the hepatorenal recess (Morison pouch)', mechanism: 'Lowest point of the supine peritoneal cavity', significance: 'key' },
    { sign: 'Epigastric pain from a gastric ulcer', mechanism: 'Foregut (celiac) visceral afferents refer to the epigastrium', significance: 'key' },
    { sign: 'Portal triad compressed at the omental foramen (Pringle maneuver)', mechanism: 'Controls hepatic inflow bleeding', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'FAST ultrasound of Morison pouch', meaning: 'Detects free intraperitoneal fluid' },
    { clue: 'Classify an organ as intra- vs retroperitoneal', meaning: 'Predicts spread & surgical approach' },
  ],

  treatment: [
    { logic: 'Pringle maneuver at the omental foramen for liver bleeding', detail: 'Clamps the portal triad.' },
    { logic: 'Greater omentum used to wall off/patch defects', detail: '"Abdominal policeman".' },
  ],

  mnemonics: [
    { hook: 'Retroperitoneal = "SAD PUCKER"', expansion: ['Suprarenal, Aorta/IVC, Duodenum 2-4, Pancreas, Ureters, Colon asc/desc, Kidneys, Esophagus, Rectum'] },
    { hook: 'Stomach blood supply = all from the celiac trunk', expansion: ['Left/right gastric + gastro-omental + short gastrics'] },
  ],

  traps: [
    {
      questionCategory: 'Duodenum peritoneal status',
      wrongInstinct: 'The entire duodenum is intraperitoneal',
      rightAnswer: 'Only the 1st (superior) part is intraperitoneal; the 2nd–4th parts are RETROperitoneal (SAD PUCKER)',
      why: 'The duodenal cap (1st part) has mesentery, but the rest becomes fixed retroperitoneally — relevant to perforation and imaging.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The entire arterial supply of the stomach is derived from branches of which vessel?',
      options: [
        { id: 'a', text: 'Superior mesenteric artery' },
        { id: 'b', text: 'Celiac trunk' },
        { id: 'c', text: 'Inferior mesenteric artery' },
        { id: 'd', text: 'Internal iliac artery' },
      ],
      answerId: 'b',
      explanation: 'The stomach (a foregut derivative) is supplied entirely by branches of the celiac trunk: left/right gastric arteries (lesser curvature), left/right gastro-omental arteries (greater curvature), and short gastric arteries (fundus).',
      tests: 'exam',
    },
  ],
};

export default peritoneumStomach;
