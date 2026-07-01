import type { Lecture } from '../../lib/types';
import { INGUINAL_HERNIA } from '../../lib/figures';

export const inguinalCanalHernias: Lecture = {
  id: 'inguinal-canal-hernias',
  title: 'Inguinal Canal & Hernias',
  system: 'gi',
  source: 'L16 — Anterior Abdominal Wall & Stomach',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L16 Abdominal Wall & Stomach' },
    { kind: 'disease', label: 'Inguinal hernia' },
    { kind: 'mechanism', label: 'Direct vs indirect' },
    { kind: 'exam', label: 'Inferior epigastric artery' },
  ],

  highYield: [
    'The **inguinal canal** runs from the **deep ring** (in the transversalis fascia, lateral to the inferior epigastric artery) to the **superficial ring** (in the external oblique aponeurosis). **Walls**: anterior = external oblique aponeurosis; posterior = transversalis fascia + conjoint tendon; roof = arching internal oblique/transversus; floor = inguinal ligament.',
    '**Contents**: the **spermatic cord (male) / round ligament of the uterus (female)**, plus the **ilioinguinal nerve** (running through, not from the deep ring) and the **genital branch of the genitofemoral nerve**.',
    'The **spermatic cord** has 3 coverings (from the wall layers): **external spermatic fascia (external oblique), cremasteric fascia (internal oblique), internal spermatic fascia (transversalis fascia)**; its contents include the **ductus deferens, testicular artery, pampiniform plexus, cremasteric vessels, and the genital branch of genitofemoral**.',
    '**Indirect inguinal hernia = LATERAL to the inferior epigastric artery**, through the **deep ring**, following the canal (often congenital, patent processus vaginalis) — the commonest; can descend into the scrotum. **Direct inguinal hernia = MEDIAL to the inferior epigastric artery**, pushing through the weak **Hesselbach triangle** (acquired, older patients).',
    '**Hesselbach (inguinal) triangle** borders: **inferior epigastric artery (lateral), rectus abdominis (medial), inguinal ligament (inferior)** — the site of direct hernias.',
  ],

  mechanism: {
    title: 'The inferior epigastric artery separates direct from indirect',
    steps: [
      { id: 's1', label: 'Canal: deep ring → superficial ring', emphasis: 'key' },
      { id: 's2', label: 'Indirect: LATERAL to inferior epigastric, via deep ring' },
      { id: 's3', label: 'Direct: MEDIAL, through Hesselbach triangle' },
      { id: 's4', label: 'Strangulation → ischemia (surgical emergency)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Groin bulge that descends into the scrotum, controlled by pressure over the deep ring', mechanism: 'Indirect inguinal hernia (lateral to epigastric)', significance: 'key' },
    { sign: 'Groin bulge medial to the epigastric vessels through the posterior wall', mechanism: 'Direct inguinal hernia (Hesselbach triangle)', significance: 'key' },
    { sign: 'Tender, irreducible, non-transilluminating groin lump with obstruction', mechanism: 'Strangulated hernia — emergency', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Relation of the neck of the sac to the inferior epigastric artery', meaning: 'Indirect (lateral) vs direct (medial)' },
    { clue: 'Reducibility + occlusion of the deep ring', meaning: 'Indirect controlled by deep-ring pressure' },
  ],

  treatment: [
    { logic: 'Surgical repair (mesh/herniorrhaphy)', detail: 'Definitive; urgent if strangulated.' },
    { logic: 'Protect the ilioinguinal nerve in repair', detail: 'Avoid groin/scrotal numbness.' },
  ],

  mnemonics: [
    { hook: '"MDs don\'t LIe": Medial = Direct, Lateral = Indirect (to inferior epigastric)', expansion: ['Indirect through deep ring'] },
    { hook: 'Spermatic cord coverings from the 3 wall layers (external/cremasteric/internal spermatic fascia)', expansion: ['3 M rule of testis: 3 arteries etc.'] },
  ],

  traps: [
    {
      questionCategory: 'Direct vs indirect relationship to the epigastric vessels',
      wrongInstinct: 'A direct inguinal hernia passes lateral to the inferior epigastric artery through the deep ring',
      rightAnswer: 'A DIRECT hernia is MEDIAL to the inferior epigastric artery (through Hesselbach triangle); the INDIRECT hernia is LATERAL, entering the deep ring',
      why: 'The inferior epigastric artery is the landmark: lateral = indirect (deep ring), medial = direct (wall weakness).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'At operation, an inguinal hernia sac is found emerging LATERAL to the inferior epigastric artery and passing through the deep inguinal ring. What type is it?',
      options: [
        { id: 'a', text: 'Direct inguinal hernia' },
        { id: 'b', text: 'Indirect inguinal hernia' },
        { id: 'c', text: 'Femoral hernia' },
        { id: 'd', text: 'Umbilical hernia' },
      ],
      answerId: 'b',
      explanation: 'A hernia lateral to the inferior epigastric artery entering the deep inguinal ring is indirect (often via a patent processus vaginalis); a direct hernia is medial to the vessels through Hesselbach triangle.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Direct vs indirect inguinal hernia', svg: INGUINAL_HERNIA, caption: 'Indirect = lateral to the inferior epigastric artery (deep ring); direct = medial (Hesselbach triangle).' },
  ],
};

export default inguinalCanalHernias;
