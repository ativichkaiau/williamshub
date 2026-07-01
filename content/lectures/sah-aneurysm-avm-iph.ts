import type { Lecture } from '../../lib/types';

export const sahAneurysmAvmIph: Lecture = {
  id: 'sah-aneurysm-avm-iph',
  title: 'SAH, Aneurysm, AVM & Intraparenchymal Bleed',
  system: 'neuro',
  source: 'L5 — CNS Trauma & Hemorrhage',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L5 CNS Trauma & Hemorrhage' },
    { kind: 'disease', label: 'SAH / IPH' },
    { kind: 'mechanism', label: 'Aneurysm / HTN' },
    { kind: 'exam', label: 'Thunderclap headache' },
  ],

  highYield: [
    '**Subarachnoid hemorrhage (SAH)**: usually a **ruptured saccular (berry) aneurysm** at the **Circle of Willis** → **sudden “worst headache of life” (thunderclap)** ± rapid loss of consciousness; peaks in the 5th decade.',
    '**Berry aneurysm** = commonest intracranial aneurysm; wall lacks **media & internal elastic lamina**. Risk: **ADPKD, Ehlers-Danlos IV, Marfan, NF1, coarctation** (genetic) and **hypertension/smoking** (sporadic). **25–50% die with the first rupture**; rebleeding is common.',
    '**AVM** = most common clinically significant vascular malformation: **direct artery-to-vein connections with no capillary bed**; presents **age 10–30** with **seizures or hemorrhage**; “tangle of wormlike vessels.”',
    '(Cavernous malformation → hemorrhage risk; capillary telangiectasia & venous angioma → usually **incidental, low risk**.)',
    '**Intraparenchymal hemorrhage (IPH)** = hemorrhagic stroke, peak ~60 y: **hypertension** (most common) → **deep bleeds (basal ganglia, thalamus, pons, cerebellum)** via **Charcot-Bouchard microaneurysms**; **cerebral amyloid angiopathy** → **lobar** bleeds in the elderly.',
  ],

  mechanism: {
    title: 'Where the vessel fails → which hemorrhage',
    steps: [
      { id: 's1', label: 'Berry aneurysm at Circle of Willis ruptures', emphasis: 'key' },
      { id: 's2', label: 'Blood into subarachnoid space → thunderclap headache' },
      { id: 's3', label: 'AVM: high-flow shunt → seizure/hemorrhage' },
      { id: 's4', label: 'HTN → deep IPH; amyloid → lobar IPH', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Sudden “worst headache of life” + meningismus', mechanism: 'Aneurysmal SAH', significance: 'key' },
    { sign: 'Deep (basal ganglia/thalamic) hemorrhage in a hypertensive', mechanism: 'Charcot-Bouchard microaneurysm rupture', significance: 'key' },
    { sign: 'Lobar hemorrhage in an elderly normotensive', mechanism: 'Cerebral amyloid angiopathy', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Non-contrast CT (± LP for xanthochromia) for SAH', meaning: 'Detect subarachnoid blood' },
    { clue: 'CT/MR angiography', meaning: 'Aneurysm, AVM, bleeding source' },
    { clue: 'Bleed location (deep vs lobar)', meaning: 'Hypertensive vs amyloid IPH' },
  ],

  treatment: [
    { logic: 'Secure the aneurysm (coil/clip); prevent rebleed & vasospasm', detail: 'Nimodipine for vasospasm after SAH.' },
    { logic: 'Control blood pressure; reverse coagulopathy in IPH', detail: 'Treat the hypertensive driver.' },
    { logic: 'AVM: embolization / surgery / radiosurgery', detail: 'Depends on size and location.' },
  ],

  mnemonics: [
    { hook: 'SAH = thunderclap “worst headache of life” → CT then LP', expansion: ['Ruptured berry aneurysm'] },
    { hook: 'HTN bleeds DEEP (basal ganglia); amyloid bleeds LOBAR (elderly)', expansion: ['Charcot-Bouchard vs CAA'] },
  ],

  traps: [
    {
      questionCategory: 'Location of hypertensive hemorrhage',
      wrongInstinct: 'A lobar hemorrhage in an elderly patient is from chronic hypertension',
      rightAnswer: 'Hypertensive bleeds are typically DEEP (basal ganglia, thalamus, pons, cerebellum); lobar hemorrhages in the elderly suggest cerebral amyloid angiopathy',
      why: 'Hypertension damages small penetrating vessels deep in the brain (Charcot-Bouchard aneurysms), whereas amyloid deposition in cortical vessels causes superficial lobar bleeds — location points to the cause.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 50-year-old suddenly collapses with the “worst headache of my life” and neck stiffness. Non-contrast CT shows blood in the basal cisterns. The most likely cause is:',
      options: [
        { id: 'a', text: 'Ruptured saccular (berry) aneurysm' },
        { id: 'b', text: 'Hypertensive basal ganglia hemorrhage' },
        { id: 'c', text: 'Epidural hematoma' },
        { id: 'd', text: 'Cerebral amyloid angiopathy' },
      ],
      answerId: 'a',
      explanation: 'A thunderclap “worst headache of life” with subarachnoid blood in the basal cisterns is a subarachnoid hemorrhage, most often from a ruptured berry aneurysm at the Circle of Willis.',
      tests: 'exam',
    },
  ],
};

export default sahAneurysmAvmIph;
