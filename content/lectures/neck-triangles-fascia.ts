import type { Lecture } from '../../lib/types';
import { NECK_TRIANGLES } from '../../lib/figures';

export const neckTrianglesFascia: Lecture = {
  id: 'neck-triangles-fascia',
  title: 'Neck Fascia & Posterior Triangle',
  system: 'msk',
  source: 'L7 — Triangles & Root of the Neck',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L7 Neck Triangles & Root' },
    { kind: 'disease', label: 'Cervical fascia / posterior triangle' },
    { kind: 'mechanism', label: 'SCM divides the neck' },
    { kind: 'exam', label: 'Accessory nerve / torticollis' },
  ],

  highYield: [
    'The **sternocleidomastoid (SCM)** divides each side of the neck into an **anterior** and a **posterior triangle**. SCM is supplied by the **accessory nerve (CN XI)**: acting unilaterally it **tilts the head to the same side and rotates the face to the opposite side**; bilaterally it flexes the neck. Congenital **torticollis (wryneck)** = SCM shortening → head tilts toward, chin points away.',
    '**Deep cervical fascia layers**: **investing** (surrounds SCM + trapezius), **pretracheal** (encloses trachea/thyroid/esophagus), **prevertebral** (surrounds vertebral column/deep muscles), and the **carotid sheath** (common/internal carotid artery, internal jugular vein, vagus nerve).',
    'The **retropharyngeal ("danger") space** lies between the buccopharyngeal and prevertebral fascia and extends into the mediastinum → a **retropharyngeal abscess** can cause dysphagia and spread to the chest.',
    '**Posterior triangle boundaries**: anterior = posterior border of SCM, posterior = anterior border of trapezius, base = middle third of clavicle; floor = splenius capitis, levator scapulae, scalenes.',
    '**Posterior triangle contents**: **accessory nerve (CN XI)**, roots/trunks of the **brachial plexus**, the **phrenic nerve (C3–C5)**, cutaneous branches of the cervical plexus emerging at the **nerve point of the neck**, the **external jugular vein**, and branches of the **thyrocervical trunk** (transverse cervical, suprascapular, inferior thyroid).',
  ],

  mechanism: {
    title: 'SCM splits the neck; fascial planes route vessels and spread infection',
    steps: [
      { id: 's1', label: 'SCM (CN XI) divides anterior vs posterior triangle', emphasis: 'key' },
      { id: 's2', label: 'Carotid sheath: carotid a., IJV, vagus n.' },
      { id: 's3', label: 'Retropharyngeal "danger" space → mediastinum' },
      { id: 's4', label: 'Posterior triangle: CN XI, brachial plexus, phrenic', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Shoulder droop + weak head turn after a posterior-triangle lymph node biopsy', mechanism: 'Accessory nerve (CN XI) injury', significance: 'key' },
    { sign: 'Infant head tilted to one side, chin to the other', mechanism: 'Congenital torticollis (SCM)', significance: 'key' },
    { sign: 'Dysphagia + neck stiffness with a retropharyngeal collection', mechanism: 'Retropharyngeal (danger) space abscess', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Trapezius/SCM power (shrug, head turn)', meaning: 'Accessory nerve (CN XI)' },
    { clue: 'Lateral neck imaging', meaning: 'Retropharyngeal space widening/abscess' },
  ],

  treatment: [
    { logic: 'Protect CN XI during posterior-triangle procedures', detail: 'It runs superficially there.' },
    { logic: 'Retropharyngeal abscess: drainage + antibiotics', detail: 'Risk of mediastinal spread.' },
  ],

  mnemonics: [
    { hook: 'Carotid sheath = carotid artery + IJV + vagus nerve', expansion: ['4 fascial layers'] },
    { hook: 'Posterior triangle: accessory n. is superficial → injured in node biopsy', expansion: ['Also phrenic + brachial plexus'] },
  ],

  traps: [
    {
      questionCategory: 'SCM rotation direction',
      wrongInstinct: 'Unilateral SCM turns the face toward the same side',
      rightAnswer: 'Unilateral SCM tilts the head TOWARD the same side but rotates the face to the OPPOSITE side',
      why: 'Its oblique pull couples ipsilateral tilt with contralateral rotation — the basis of the torticollis posture.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'After excisional biopsy of a lymph node in the posterior triangle, a patient has a drooping shoulder and difficulty turning the head. Which nerve was injured?',
      options: [
        { id: 'a', text: 'Phrenic nerve' },
        { id: 'b', text: 'Accessory nerve (CN XI)' },
        { id: 'c', text: 'Hypoglossal nerve (CN XII)' },
        { id: 'd', text: 'Vagus nerve' },
      ],
      answerId: 'b',
      explanation: 'The accessory nerve (CN XI) crosses the posterior triangle superficially and supplies SCM and trapezius; injury causes trapezius weakness (shoulder droop) and impaired head turning.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Triangles of the neck', svg: NECK_TRIANGLES, caption: 'SCM divides anterior (carotid) and posterior triangles; the posterior triangle holds CN XI, phrenic, and brachial plexus.' },
  ],
};

export default neckTrianglesFascia;
