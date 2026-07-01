import type { Lecture } from '../../lib/types';

export const thoracicWallIntercostalSpace: Lecture = {
  id: 'thoracic-wall-intercostal-space',
  title: 'Thoracic Wall & Intercostal Space',
  system: 'respiratory',
  source: 'L8 — Thorax, Pleura, Trachea & Lungs',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L8 Thorax, Pleura & Lung' },
    { kind: 'disease', label: 'Thoracic cage' },
    { kind: 'mechanism', label: 'Intercostal neurovascular bundle' },
    { kind: 'exam', label: 'Chest tube / VAN' },
  ],

  highYield: [
    'The **thoracic cage** = 12 thoracic vertebrae, 12 pairs of ribs + costal cartilages, and the sternum (manubrium, body, xiphoid). **True ribs 1–7** (own costal cartilage to sternum), **false ribs 8–10** (share), **floating ribs 11–12**. **Typical ribs (3–9)** have a head (2 facets), neck, tubercle, and a **costal groove** on the inferior inner surface.',
    'The **sternal angle (of Louis)** is the key surface landmark (rib 2 / T4–T5 disc): it marks the **start/end of the aortic arch, the carina (tracheal bifurcation), and where the azygos vein arches into the SVC**.',
    'The **intercostal space has 3 muscle layers** (external, internal, innermost). The **neurovascular bundle runs in the costal groove in the order (superior → inferior) Vein, Artery, Nerve ("VAN")**, between the internal and innermost layers.',
    '**A chest tube / needle is inserted just ABOVE the rib (lower part of the space)** to avoid the main VAN bundle in the costal groove of the rib above. Posterior intercostal arteries come from the **thoracic aorta** (anterior from the internal thoracic/musculophrenic); posterior intercostal veins drain to the **azygos/hemiazygos** system.',
    '**Dermatome landmarks**: **T4 = nipple, T10 = umbilicus** (intercostal nerves are ventral rami of T1–T11; T12 = subcostal nerve). A **cervical rib** (extra rib on C7) can compress the subclavian artery / lower brachial plexus (**thoracic outlet syndrome**).',
  ],

  mechanism: {
    title: 'Ribs + intercostal muscles move air; the bundle sits in the costal groove',
    steps: [
      { id: 's1', label: 'True (1–7) / false (8–10) / floating (11–12) ribs', emphasis: 'key' },
      { id: 's2', label: 'Costal groove holds VAN (vein-artery-nerve, top→bottom)' },
      { id: 's3', label: 'Insert chest tube ABOVE the lower rib (avoid the bundle)' },
      { id: 's4', label: 'Cervical rib → thoracic outlet syndrome', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Count ribs from the sternal angle (2nd costal cartilage)', mechanism: 'Sternal angle = rib 2 landmark', significance: 'key' },
    { sign: 'Numbness at the nipple line (T4) or umbilicus (T10)', mechanism: 'Intercostal-nerve dermatomes', significance: 'supportive' },
    { sign: 'Hand ischemia + lower-plexus symptoms with an extra C7 rib', mechanism: 'Cervical rib (thoracic outlet syndrome)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Locate the sternal angle to count ribs/spaces', meaning: 'Surface anatomy for procedures' },
    { clue: 'Chest radiograph for cervical rib', meaning: 'Thoracic outlet syndrome' },
  ],

  treatment: [
    { logic: 'Chest tube: insert above the rib below, in the "safe triangle"', detail: 'Avoids the neurovascular bundle.' },
    { logic: 'Intercostal nerve block below the rib', detail: 'Targets the bundle in the groove.' },
  ],

  mnemonics: [
    { hook: 'Costal groove order (top→bottom) = VAN: Vein, Artery, Nerve', expansion: ['Insert needle ABOVE the lower rib'] },
    { hook: 'T4 = nipple, T10 = umbilicus (dermatomes)', expansion: ['Intercostal nerves = ventral rami'] },
  ],

  traps: [
    {
      questionCategory: 'Where to place a chest tube',
      wrongInstinct: 'Insert the needle just below a rib to stay clear of the lung',
      rightAnswer: 'Insert just ABOVE the rib (lower part of the intercostal space) — the main neurovascular bundle (VAN) lies in the costal groove on the inferior border of the rib ABOVE',
      why: 'Going below a rib risks the vein/artery/nerve in that rib\'s costal groove; the collateral bundle at the top of the space is smaller.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'When inserting a chest drain in an intercostal space, why is the needle passed immediately above the lower rib?',
      options: [
        { id: 'a', text: 'To avoid the lung apex' },
        { id: 'b', text: 'To avoid the main neurovascular bundle in the costal groove of the rib above' },
        { id: 'c', text: 'Because the pleura is only present superiorly' },
        { id: 'd', text: 'To reach the azygos vein' },
      ],
      answerId: 'b',
      explanation: 'The intercostal vein, artery, and nerve (VAN) run in the costal groove on the inferior border of each rib; entering just above the lower rib avoids this main bundle.',
      tests: 'exam',
    },
  ],
};

export default thoracicWallIntercostalSpace;
