import type { Lecture } from '../../lib/types';

export const thyroidRootOfNeck: Lecture = {
  id: 'thyroid-root-of-neck',
  title: 'Thyroid Gland, Laryngeal Nerves & Root of Neck',
  system: 'msk',
  source: 'L7 — Triangles & Root of the Neck',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L7 Neck Triangles & Root' },
    { kind: 'disease', label: 'Thyroid / root of neck' },
    { kind: 'mechanism', label: 'Laryngeal nerve relations' },
    { kind: 'exam', label: 'Thyroidectomy nerve injury' },
  ],

  highYield: [
    'The **thyroid gland** lies deep to the infrahyoid muscles, anterolateral to the larynx/trachea; two lobes joined by an **isthmus over tracheal rings 2–4** (~50% have a pyramidal lobe). Arteries: **superior thyroid (from external carotid)**, **inferior thyroid (from thyrocervical trunk)**, ± **thyroid ima**.',
    '**Recurrent laryngeal nerve** runs in the tracheo-esophageal groove, closely related to the **inferior thyroid artery** → at risk in thyroidectomy. **Unilateral injury → hoarse/breathy voice; bilateral → airway obstruction/stridor.** It supplies all intrinsic laryngeal muscles except cricothyroid.',
    '**External laryngeal nerve** (branch of the superior laryngeal, runs with the **superior thyroid artery**) supplies **cricothyroid** → injury causes **inability to raise voice pitch** (a weak, monotone voice). The **internal laryngeal nerve** is sensory above the vocal folds.',
    '**Root of the neck** contents: **subclavian artery + vein, vagus nerve, phrenic nerve, and the cervical sympathetic trunk**. The **subclavian artery** has 3 parts (relative to anterior scalene): **1st part** gives **vertebral artery, internal thoracic artery, thyrocervical trunk**; 2nd gives the costocervical trunk.',
    'The **thoracic duct** ends in the root of the neck at the **junction of the left subclavian and left internal jugular veins**; the **cervical sympathetic trunk** (superior/middle/inferior ganglia) supplies the head/neck — injury/compression can cause **Horner syndrome**.',
  ],

  mechanism: {
    title: 'Thyroid vessels drag the laryngeal nerves; the root routes the subclavian',
    steps: [
      { id: 's1', label: 'Recurrent laryngeal ↔ inferior thyroid artery', emphasis: 'key' },
      { id: 's2', label: 'External laryngeal ↔ superior thyroid artery (cricothyroid)' },
      { id: 's3', label: 'Subclavian a. 1st part: vertebral, internal thoracic, thyrocervical' },
      { id: 's4', label: 'RLN injury: unilateral hoarse / bilateral stridor', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Hoarse voice after thyroidectomy', mechanism: 'Recurrent laryngeal nerve injury (near inferior thyroid a.)', significance: 'key' },
    { sign: 'Cannot raise voice pitch / weak singing voice post-thyroidectomy', mechanism: 'External laryngeal nerve injury (cricothyroid)', significance: 'key' },
    { sign: 'Bilateral RLN injury with stridor', mechanism: 'Airway compromise — emergency', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Laryngoscopy of vocal cord movement post-op', meaning: 'Recurrent laryngeal nerve integrity' },
    { clue: 'Identify inferior thyroid a. relation to RLN during surgery', meaning: 'Protects the nerve' },
  ],

  treatment: [
    { logic: 'Meticulous nerve identification in thyroid surgery', detail: 'RLN near inferior thyroid a.; external laryngeal near superior thyroid a.' },
    { logic: 'Bilateral RLN palsy: secure the airway', detail: 'May need tracheostomy.' },
  ],

  mnemonics: [
    { hook: 'Recurrent laryngeal ↔ INFERIOR thyroid a.; External laryngeal ↔ SUPERIOR thyroid a.', expansion: ['Ligate arteries away from the nerves'] },
    { hook: 'Subclavian 1st part = VIT: Vertebral, Internal thoracic, Thyrocervical trunk', expansion: ['Root of neck'] },
  ],

  traps: [
    {
      questionCategory: 'Which nerve is at risk with the inferior thyroid artery',
      wrongInstinct: 'The external laryngeal nerve is the one endangered near the inferior thyroid artery',
      rightAnswer: 'The RECURRENT laryngeal nerve is closely related to the INFERIOR thyroid artery; the EXTERNAL laryngeal nerve travels with the SUPERIOR thyroid artery',
      why: 'Surgeons ligate the inferior thyroid artery away from the gland to protect the recurrent laryngeal nerve, and the superior artery close to the gland to protect the external laryngeal nerve.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient is hoarse after a total thyroidectomy. Injury to which nerve, related to which artery, is most likely responsible?',
      options: [
        { id: 'a', text: 'External laryngeal nerve near the inferior thyroid artery' },
        { id: 'b', text: 'Recurrent laryngeal nerve near the inferior thyroid artery' },
        { id: 'c', text: 'Hypoglossal nerve near the superior thyroid artery' },
        { id: 'd', text: 'Phrenic nerve near the vertebral artery' },
      ],
      answerId: 'b',
      explanation: 'The recurrent laryngeal nerve runs in the tracheo-esophageal groove near the inferior thyroid artery and supplies most intrinsic laryngeal muscles; unilateral injury causes hoarseness.',
      tests: 'exam',
    },
  ],
};

export default thyroidRootOfNeck;
