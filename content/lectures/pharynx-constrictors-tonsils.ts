import type { Lecture } from '../../lib/types';

export const pharynxConstrictorsTonsils: Lecture = {
  id: 'pharynx-constrictors-tonsils',
  title: 'Pharynx: Constrictors & Tonsils',
  system: 'msk',
  source: 'L14 — Pharynx & Larynx',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L14 Pharynx & Larynx' },
    { kind: 'disease', label: 'Pharynx / tonsils' },
    { kind: 'mechanism', label: 'Constrictors & plexus' },
    { kind: 'exam', label: 'Piriform recess / tonsils' },
  ],

  highYield: [
    'The **pharynx has 3 parts**: **nasopharynx** (above the soft palate; adenoids, Eustachian tube openings), **oropharynx** (soft palate → epiglottis; palatine tonsils, posterior 1/3 tongue), and **laryngopharynx/hypopharynx** (epiglottis → cricoid, C6, continuing as the esophagus).',
    'The wall has **3 circular constrictor muscles (superior, middle, inferior)** that propel a bolus during swallowing; the **inferior constrictor** has a **cricopharyngeus** part (the upper esophageal sphincter). **Motor supply = the pharyngeal plexus (mainly CN X/vagus)**, EXCEPT **stylopharyngeus = CN IX**; **sensation = mainly CN IX**.',
    '**Waldeyer\'s ring** of lymphoid tissue guards the entrance: **pharyngeal tonsil (adenoids), tubal, palatine, and lingual tonsils**. The **palatine tonsil** sits in the tonsillar fossa (between the palatoglossal and palatopharyngeal arches); its main artery is the **tonsillar branch of the facial artery** (bleeding risk in tonsillectomy) and it relates to the glossopharyngeal nerve.',
    'The **piriform recess (fossa)** on either side of the laryngeal inlet is a common site for a **lodged fish bone/foreign body**; the **internal laryngeal nerve** runs in its mucosa (so a foreign body/instrumentation there can injure it).',
    'A **pharyngeal (Zenker) diverticulum** herniates through **Killian\'s dehiscence** (a weak area between the thyropharyngeus and cricopharyngeus parts of the inferior constrictor) → dysphagia, regurgitation, halitosis.',
  ],

  mechanism: {
    title: 'Three parts, three constrictors; the vagus drives swallowing',
    steps: [
      { id: 's1', label: 'Naso- / oro- / laryngopharynx (down to C6)', emphasis: 'key' },
      { id: 's2', label: 'Constrictors = CN X plexus (stylopharyngeus = CN IX)' },
      { id: 's3', label: 'Waldeyer ring; palatine tonsil (facial artery)' },
      { id: 's4', label: 'Killian dehiscence → Zenker diverticulum', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Foreign body (fish bone) stuck lateral to the laryngeal inlet', mechanism: 'Piriform recess lodgement', significance: 'key' },
    { sign: 'Post-tonsillectomy bleeding', mechanism: 'Tonsillar branch of the facial artery', significance: 'key' },
    { sign: 'Dysphagia + regurgitation of undigested food + halitosis', mechanism: 'Zenker diverticulum (Killian dehiscence)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Laryngoscopy of the piriform recess', meaning: 'Locate a foreign body' },
    { clue: 'Barium swallow', meaning: 'Pharyngeal (Zenker) diverticulum' },
  ],

  treatment: [
    { logic: 'Remove piriform-recess foreign body', detail: 'Avoid internal laryngeal nerve injury.' },
    { logic: 'Control tonsillar bleeding; treat Zenker surgically', detail: 'Cricopharyngeal myotomy.' },
  ],

  mnemonics: [
    { hook: 'All pharyngeal/palatal muscles = vagus (X), EXCEPT stylopharyngeus (IX) and tensor veli palatini (V3)', expansion: ['Sensory mostly IX'] },
    { hook: 'Piriform recess = fish bone + internal laryngeal nerve', expansion: ['Killian dehiscence → Zenker'] },
  ],

  traps: [
    {
      questionCategory: 'Motor supply of the pharyngeal muscles',
      wrongInstinct: 'The glossopharyngeal nerve is the motor supply to the pharyngeal constrictors',
      rightAnswer: 'The constrictors are motor-supplied by the VAGUS (via the pharyngeal plexus); the only pharyngeal muscle from CN IX is STYLOPHARYNGEUS — CN IX is mainly SENSORY to the pharynx',
      why: 'CN IX contributes just one muscle (stylopharyngeus); the vagus does the rest of the motor work.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A swallowed fish bone lodges just lateral to the laryngeal inlet. In which structure is it caught, and which nerve is at risk during its removal?',
      options: [
        { id: 'a', text: 'Vallecula; hypoglossal nerve' },
        { id: 'b', text: 'Piriform recess; internal laryngeal nerve' },
        { id: 'c', text: 'Tonsillar fossa; glossopharyngeal nerve' },
        { id: 'd', text: 'Nasopharynx; maxillary nerve' },
      ],
      answerId: 'b',
      explanation: 'Foreign bodies commonly lodge in the piriform recess beside the laryngeal inlet; the internal laryngeal nerve runs beneath its mucosa and can be injured during retrieval.',
      tests: 'exam',
    },
  ],
};

export default pharynxConstrictorsTonsils;
