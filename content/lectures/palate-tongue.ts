import type { Lecture } from '../../lib/types';
import { TONGUE_INNERVATION } from '../../lib/figures';

export const palateTongue: Lecture = {
  id: 'palate-tongue',
  title: 'Palate & Tongue',
  system: 'msk',
  source: 'L15 — Mouth & Oral Cavity',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L15 Mouth & Oral Cavity' },
    { kind: 'disease', label: 'Palate / tongue' },
    { kind: 'mechanism', label: 'Innervation by region' },
    { kind: 'exam', label: 'Hypoglossal / tensor veli palatini' },
  ],

  highYield: [
    'The **palate = hard palate** (palatine process of the maxilla + horizontal plate of the palatine bone) + **soft palate** (movable, ending in the uvula). Soft-palate muscles: **levator veli palatini, tensor veli palatini, palatoglossus, palatopharyngeus, musculus uvulae** — **all supplied by the vagus (pharyngeal plexus, CN X) EXCEPT tensor veli palatini (CN V3)**.',
    '**Palate sensation = maxillary nerve (V2)** via the **nasopalatine, greater, and lesser palatine nerves**; blood = greater/lesser palatine arteries.',
    'The **tongue** has an **anterior 2/3 (oral)** and **posterior 1/3 (pharyngeal)** divided by the **sulcus terminalis / foramen cecum**. Papillae (filiform, fungiform, vallate, foliate) sit on the anterior 2/3; lingual tonsils on the posterior 1/3.',
    '**Tongue muscles**: **extrinsic** (genioglossus, hyoglossus, styloglossus, palatoglossus) position it; **intrinsic** change its shape. **Motor = hypoglossal nerve (CN XII) for ALL tongue muscles EXCEPT palatoglossus (CN X)**.',
    '**Sensory map**: anterior 2/3 → **general sensation = lingual nerve (V3)**, **taste = chorda tympani (CN VII)**; posterior 1/3 → **general + taste = CN IX**; vallecula/epiglottis → CN X. **Hypoglossal (CN XII) lesion → the tongue deviates TOWARD the lesioned side** on protrusion (weak genioglossus).',
  ],

  mechanism: {
    title: 'Two "except" rules for the palate and tongue',
    steps: [
      { id: 's1', label: 'Soft palate = CN X, EXCEPT tensor veli palatini (V3)', emphasis: 'key' },
      { id: 's2', label: 'Tongue muscles = CN XII, EXCEPT palatoglossus (X)' },
      { id: 's3', label: 'Ant 2/3: general V3, taste VII; post 1/3: IX' },
      { id: 's4', label: 'CN XII lesion → tongue points TOWARD the lesion', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Protruded tongue deviates to one side', mechanism: 'Ipsilateral hypoglossal (CN XII) palsy (points toward lesion)', significance: 'key' },
    { sign: 'Uvula deviates AWAY from a vagus (CN X) lesion on saying "ahh"', mechanism: 'Palatal muscle weakness (levator veli palatini)', significance: 'key' },
    { sign: 'Loss of taste over the anterior 2/3 of the tongue', mechanism: 'Chorda tympani (CN VII) lesion', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Protrude the tongue; observe deviation', meaning: 'Hypoglossal nerve (points to lesion)' },
    { clue: 'Say "ahh"; watch the uvula', meaning: 'Vagus (deviates away from lesion)' },
  ],

  treatment: [
    { logic: 'Anatomy underlies cranial nerve exam localization', detail: 'CN X (palate/uvula) and CN XII (tongue).' },
  ],

  mnemonics: [
    { hook: 'Tongue muscles = "glossus" all CN XII EXCEPT palatoGLOSSUS (CN X)', expansion: ['Palate = CN X except tensor veli palatini (V3)'] },
    { hook: 'CN XII: tongue deviates TOWARD the lesion; uvula deviates AWAY (CN X)', expansion: ['"Lick your wounds"'] },
  ],

  traps: [
    {
      questionCategory: 'Tongue deviation in hypoglossal palsy',
      wrongInstinct: 'A hypoglossal nerve lesion makes the tongue deviate away from the affected side',
      rightAnswer: 'The tongue deviates TOWARD the lesioned side — the intact genioglossus on the healthy side pushes the tongue toward the weak side',
      why: 'Genioglossus protrudes the tongue; the unopposed healthy muscle pushes the tip toward the paralyzed side.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'When a patient protrudes the tongue, it deviates to the right. Which nerve is injured, and on which side?',
      options: [
        { id: 'a', text: 'Left hypoglossal nerve' },
        { id: 'b', text: 'Right hypoglossal nerve' },
        { id: 'c', text: 'Right vagus nerve' },
        { id: 'd', text: 'Left glossopharyngeal nerve' },
      ],
      answerId: 'b',
      explanation: 'A hypoglossal (CN XII) lesion causes the tongue to deviate toward the affected side on protrusion — here the right — because the intact left genioglossus pushes the tongue toward the weak right side.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Tongue innervation by region', svg: TONGUE_INNERVATION, caption: 'Anterior 2/3: general V3 + taste VII; posterior 1/3: CN IX; all muscles CN XII except palatoglossus (CN X).' },
  ],
};

export default palateTongue;
