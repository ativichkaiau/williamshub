import type { Lecture } from '../../lib/types';
import { MEDIASTINUM_DIVISIONS } from '../../lib/figures';

export const mediastinumDivisionsContents: Lecture = {
  id: 'mediastinum-divisions-contents',
  title: 'Mediastinum: Divisions & Contents',
  system: 'cardiovascular',
  source: 'L9 — Mediastinum & Heart',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L9 Mediastinum & Heart' },
    { kind: 'disease', label: 'Mediastinum' },
    { kind: 'mechanism', label: 'Sternal-angle plane' },
    { kind: 'exam', label: 'Diaphragm openings' },
  ],

  highYield: [
    'The **mediastinum** is the central compartment between the two pleural cavities (sternum → vertebrae, thoracic inlet → diaphragm). A **transverse plane through the sternal angle (T4–T5)** divides it into **superior** and **inferior** parts; the inferior part is subdivided by the **pericardium** into **anterior, middle, and posterior**.',
    '**Superior mediastinum**: arch of the aorta + its 3 branches, brachiocephalic veins + SVC, trachea, esophagus, thoracic duct, thymus, phrenic/vagus nerves, and the **left recurrent laryngeal nerve**.',
    '**Middle mediastinum = the heart + pericardium, the roots of the great vessels, and the phrenic nerves**. **Anterior mediastinum** (behind sternum, in front of pericardium) contains the **thymus** and fat. **Posterior mediastinum** contains the **esophagus, thoracic (descending) aorta, azygos/hemiazygos veins, thoracic duct, and sympathetic trunks**.',
    'The **sternal angle (of Louis)** is the master landmark: rib 2, the T4–T5 disc, **start/end of the aortic arch, the carina (tracheal bifurcation), the azygos vein arching into the SVC**, and where the thoracic duct crosses.',
    'The **diaphragm has three main openings**: **caval (IVC) at T8**, **esophageal (esophagus + vagal trunks) at T10**, and **aortic (aorta + thoracic duct + azygos) at T12** ("**I 8 10 EGGS AT 12**").',
  ],

  mechanism: {
    title: 'The sternal-angle plane and pericardium partition the mediastinum',
    steps: [
      { id: 's1', label: 'Sternal angle plane → superior vs inferior', emphasis: 'key' },
      { id: 's2', label: 'Pericardium subdivides inferior into ant/middle/post' },
      { id: 's3', label: 'Middle = heart + pericardium + phrenic nerves' },
      { id: 's4', label: 'Diaphragm: IVC T8, esophagus T10, aorta T12', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Anterior mediastinal mass (the 4 T\'s: Thymoma, Teratoma, Thyroid, "Terrible" lymphoma)', mechanism: 'Anterior mediastinum contents', significance: 'key' },
    { sign: 'Structures crossing at the sternal angle (carina, aortic arch, azygos)', mechanism: 'Sternal-angle landmark plane', significance: 'key' },
    { sign: 'Esophagus + vagus passing the diaphragm at T10', mechanism: 'Esophageal hiatus', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'CT chest by mediastinal compartment', meaning: 'Localizes a mediastinal mass' },
    { clue: 'Level a lesion against the sternal angle', meaning: 'Superior vs inferior mediastinum' },
  ],

  treatment: [
    { logic: 'Compartment guides the differential + surgical approach', detail: 'e.g. anterior mass → thymoma work-up.' },
  ],

  mnemonics: [
    { hook: 'Diaphragm openings: IVC T8, esophagus T10, aorta T12 ("I ate 10 eggs at 12")', expansion: ['Vagus with esophagus; thoracic duct with aorta'] },
    { hook: 'Anterior mediastinal mass = 4 T\'s: Thymoma, Teratoma, Thyroid, Terrible lymphoma', expansion: ['Anterior compartment'] },
  ],

  traps: [
    {
      questionCategory: 'Diaphragmatic opening levels',
      wrongInstinct: 'The esophagus passes through the diaphragm at T8 with the IVC',
      rightAnswer: 'The IVC passes at T8; the ESOPHAGUS (with the vagal trunks) passes at T10; the aorta (with thoracic duct and azygos) at T12',
      why: 'Mixing up T8/T10/T12 is a common error — the mnemonic "I 8 (ate) 10 eggs at 12" fixes the order.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which structure is a content of the MIDDLE mediastinum?',
      options: [
        { id: 'a', text: 'Thymus' },
        { id: 'b', text: 'Heart and pericardium' },
        { id: 'c', text: 'Thoracic (descending) aorta' },
        { id: 'd', text: 'Azygos vein' },
      ],
      answerId: 'b',
      explanation: 'The middle mediastinum contains the heart, pericardium, roots of the great vessels, and phrenic nerves. The thymus is anterior; the descending aorta and azygos vein are posterior.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Divisions of the mediastinum', svg: MEDIASTINUM_DIVISIONS, caption: 'Sternal-angle plane divides superior from inferior; the pericardium splits the inferior into anterior, middle (heart), and posterior.' },
  ],
};

export default mediastinumDivisionsContents;
