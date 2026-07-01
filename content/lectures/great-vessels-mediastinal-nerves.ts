import type { Lecture } from '../../lib/types';

export const greatVesselsMediastinalNerves: Lecture = {
  id: 'great-vessels-mediastinal-nerves',
  title: 'Great Vessels & Mediastinal Nerves',
  system: 'cardiovascular',
  source: 'L9 — Mediastinum & Heart',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L9 Mediastinum & Heart' },
    { kind: 'disease', label: 'Great vessels / nerves' },
    { kind: 'mechanism', label: 'Aortic arch relations' },
    { kind: 'exam', label: 'Recurrent laryngeal / phrenic' },
  ],

  highYield: [
    'The **arch of the aorta** gives **3 branches: brachiocephalic trunk** (→ right common carotid + right subclavian), **left common carotid**, and **left subclavian**. The **ligamentum arteriosum** (remnant of the ductus arteriosus) tethers the arch to the pulmonary trunk; a patent ductus (PDA) shunts aorta → pulmonary artery (continuous murmur).',
    'The **left recurrent laryngeal nerve loops UNDER the aortic arch (lateral to the ligamentum arteriosum)** — so an aortic arch aneurysm, aortopulmonary-window node, or lung tumor can compress it → **hoarseness**. (The right recurrent laryngeal loops under the right subclavian artery.)',
    'The **phrenic nerve (C3–C5)** descends **anterior to the lung root**, on the pericardium, giving **motor + sensory supply to the diaphragm**; the **vagus nerve passes POSTERIOR to the lung root** to form the esophageal plexus. ("Phrenic in front, vagus behind" the hilum.)',
    'The **azygos system** drains the thoracic wall/posterior structures: the **azygos vein (right)** arches over the right lung root to enter the **SVC**; the **hemiazygos + accessory hemiazygos (left)** cross the midline to join it — an important **collateral pathway** in SVC/IVC obstruction.',
    'The **thoracic duct** ascends in the posterior mediastinum (right of midline, crossing to the left at ~T5) to drain into the **junction of the left subclavian and left internal jugular veins**; injury causes a **chylothorax**. The **sympathetic trunks** give the **greater (T5–T9), lesser (T10–T11), and least splanchnic nerves** to the abdomen.',
  ],

  mechanism: {
    title: 'Arch branches and the nerves that hug the great vessels',
    steps: [
      { id: 's1', label: 'Arch: brachiocephalic, left CCA, left subclavian', emphasis: 'key' },
      { id: 's2', label: 'Left recurrent laryngeal loops under the arch → hoarseness' },
      { id: 's3', label: 'Phrenic anterior to lung root; vagus posterior' },
      { id: 's4', label: 'Thoracic duct injury → chylothorax', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Hoarseness from a lung/aortic mass near the arch', mechanism: 'Left recurrent laryngeal nerve compression', significance: 'key' },
    { sign: 'Elevated hemidiaphragm from a mediastinal lesion', mechanism: 'Phrenic nerve involvement', significance: 'key' },
    { sign: 'Distended neck/chest wall veins in SVC obstruction', mechanism: 'Azygos collateral pathway', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Hoarse voice + left hilar mass', meaning: 'Left recurrent laryngeal palsy' },
    { clue: 'Milky pleural fluid after chest surgery', meaning: 'Chylothorax (thoracic duct injury)' },
  ],

  treatment: [
    { logic: 'Treat the compressing lesion (tumor, aneurysm)', detail: 'May relieve hoarseness/phrenic palsy.' },
    { logic: 'Chylothorax: drainage, low-fat/MCT diet, duct ligation', detail: 'If persistent.' },
  ],

  mnemonics: [
    { hook: 'Left recurrent laryngeal loops under the aortic ARCH (ligamentum arteriosum)', expansion: ['Right loops under the subclavian a.'] },
    { hook: 'Phrenic = anterior to lung root; vagus = posterior', expansion: ['Phrenic "P" for Pre (in front)'] },
  ],

  traps: [
    {
      questionCategory: 'Phrenic vs vagus at the lung root',
      wrongInstinct: 'The vagus nerve passes anterior to the root of the lung',
      rightAnswer: 'The PHRENIC nerve passes ANTERIOR to the lung root; the VAGUS passes POSTERIOR (to reach the esophageal plexus)',
      why: 'Remembering "phrenic in front" also predicts which nerve a hilar mass will affect first.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with a left hilar lung tumor develops hoarseness. Compression of which nerve, related to which structure, explains this?',
      options: [
        { id: 'a', text: 'Phrenic nerve at the pericardium' },
        { id: 'b', text: 'Left recurrent laryngeal nerve as it loops under the aortic arch' },
        { id: 'c', text: 'Right recurrent laryngeal nerve under the subclavian artery' },
        { id: 'd', text: 'Vagus nerve at the esophageal hiatus' },
      ],
      answerId: 'b',
      explanation: 'The left recurrent laryngeal nerve hooks under the aortic arch (by the ligamentum arteriosum) and ascends to the larynx; a left hilar/aortic lesion compresses it, causing hoarseness.',
      tests: 'exam',
    },
  ],
};

export default greatVesselsMediastinalNerves;
