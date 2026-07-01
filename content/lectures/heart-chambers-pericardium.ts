import type { Lecture } from '../../lib/types';

export const heartChambersPericardium: Lecture = {
  id: 'heart-chambers-pericardium',
  title: 'Heart: Chambers & Pericardium',
  system: 'cardiovascular',
  source: 'L9 — Mediastinum & Heart',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L9 Mediastinum & Heart' },
    { kind: 'disease', label: 'Cardiac chambers' },
    { kind: 'mechanism', label: 'Internal features' },
    { kind: 'exam', label: 'Fossa ovalis / moderator band' },
  ],

  highYield: [
    'The **pericardium** has an outer **fibrous** layer and an inner **serous** layer (parietal + visceral/epicardium); the **pericardial cavity** between them holds a little fluid. Its two sinuses — the **transverse** (behind aorta/pulmonary trunk, in front of atria) and **oblique** (behind the left atrium) — are surgical landmarks. Rapid fluid accumulation → **cardiac tamponade**.',
    'The heart sits in the **middle mediastinum** (~T5–T8); the **apex is at the left 5th intercostal space, midclavicular line** (apex beat). A **cardiothoracic ratio > 50%** on a PA film suggests **cardiomegaly**.',
    '**Right atrium**: receives SVC, IVC, and coronary sinus. Internal features — **crista terminalis** separating the smooth (sinus venarum) from the trabeculated (pectinate muscle) part, the **fossa ovalis** (remnant of the foramen ovale), and the **triangle of Koch** (marks the **AV node**).',
    '**Right ventricle**: pumps to the pulmonary trunk; has **trabeculae carneae**, the **moderator band** (septomarginal trabecula carrying the right bundle branch to the anterior papillary muscle), and the smooth outflow **infundibulum (conus arteriosus)**.',
    '**Left atrium** receives the **4 pulmonary veins** and forms most of the base of the heart. **Left ventricle** has the **thickest wall** (systemic pressure) and pumps into the aorta. A **patent foramen ovale** (failed fossa-ovalis closure) can allow paradoxical (right→left) embolism.',
  ],

  mechanism: {
    title: 'Four chambers with signature internal features; pericardium wraps them',
    steps: [
      { id: 's1', label: 'Fibrous + serous pericardium; transverse & oblique sinuses', emphasis: 'key' },
      { id: 's2', label: 'RA: crista terminalis, fossa ovalis, triangle of Koch (AV node)' },
      { id: 's3', label: 'RV: moderator band (right bundle branch), infundibulum' },
      { id: 's4', label: 'LV thickest wall; LA receives 4 pulmonary veins', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Apex beat at the left 5th intercostal space, midclavicular line', mechanism: 'Normal cardiac apex position', significance: 'key' },
    { sign: 'Moderator band carrying the right bundle branch', mechanism: 'Speeds conduction to the RV anterior papillary muscle', significance: 'supportive' },
    { sign: 'Muffled heart sounds + hypotension + distended neck veins', mechanism: 'Cardiac tamponade (Beck triad)', significance: 'key' },
  ],

  investigations: [
    { clue: 'Cardiothoracic ratio on PA chest film', meaning: '>50% = cardiomegaly' },
    { clue: 'Echocardiography of chambers/pericardium', meaning: 'Effusion, wall thickness, PFO' },
  ],

  treatment: [
    { logic: 'Tamponade: urgent pericardiocentesis', detail: 'Relieves pressure on the chambers.' },
    { logic: 'Anatomy underlies device/ablation targeting', detail: 'e.g. AV node at the triangle of Koch.' },
  ],

  mnemonics: [
    { hook: 'Triangle of Koch → AV node; fossa ovalis = old foramen ovale', expansion: ['Right atrium landmarks'] },
    { hook: 'Moderator band = right ventricle, carries the right bundle branch', expansion: ['Septomarginal trabecula'] },
  ],

  traps: [
    {
      questionCategory: 'Which chamber the moderator band is in',
      wrongInstinct: 'The moderator band is a feature of the left ventricle',
      rightAnswer: 'The moderator band is in the RIGHT ventricle; it carries the right bundle branch to the anterior papillary muscle, speeding conduction',
      why: 'It is a reliable identifier of the right ventricle and part of the conduction system.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Within the right atrium, the triangle of Koch is an important landmark because its apex marks the location of which structure?',
      options: [
        { id: 'a', text: 'The sinoatrial (SA) node' },
        { id: 'b', text: 'The atrioventricular (AV) node' },
        { id: 'c', text: 'The opening of the SVC' },
        { id: 'd', text: 'The fossa ovalis' },
      ],
      answerId: 'b',
      explanation: 'The triangle of Koch (bounded by the tendon of Todaro, the septal tricuspid leaflet, and the coronary sinus opening) marks the location of the AV node — critical during ablation to avoid heart block.',
      tests: 'exam',
    },
  ],
};

export default heartChambersPericardium;
