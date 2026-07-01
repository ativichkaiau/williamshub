import type { Lecture } from '../../lib/types';

export const meningesDuralSinuses: Lecture = {
  id: 'meninges-dural-sinuses',
  title: 'Meninges, Dural Folds & Venous Sinuses',
  system: 'msk',
  source: 'L11 — Skull & Cranial Fossae',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L11 Skull & Cranial Fossae' },
    { kind: 'disease', label: 'Meninges' },
    { kind: 'mechanism', label: 'Spaces & hemorrhages' },
    { kind: 'exam', label: 'Epidural vs subdural' },
  ],

  highYield: [
    'Three meningeal layers cover the brain: **dura mater** (tough, two layers — periosteal + meningeal), **arachnoid mater**, and **pia mater**. **CSF is in the subarachnoid space** (between arachnoid and pia) and is returned to the venous blood via **arachnoid granulations** into the dural venous sinuses.',
    '**Dural folds** partition the cranial cavity: the **falx cerebri** (between the hemispheres), the **tentorium cerebelli** (between cerebrum and cerebellum; its free edge relates to uncal herniation and CN III), the **falx cerebelli**, and the **diaphragma sellae** (over the pituitary).',
    '**Extradural (epidural) hematoma** = ARTERIAL bleed (usually the **middle meningeal artery** at the pterion) between bone and dura → **lens/biconvex shape**, does NOT cross sutures, classic **lucid interval** then rapid deterioration.',
    '**Subdural hematoma** = VENOUS bleed (torn **bridging veins**, common in the elderly/alcoholics/shaken infants) between dura and arachnoid → **crescent shape**, crosses sutures, often slower onset. **Subarachnoid hemorrhage** (ruptured berry aneurysm) → "**thunderclap**" worst-ever headache, blood in the subarachnoid space/CSF.',
    'The **dural venous sinuses** (superior/inferior sagittal, straight, transverse, sigmoid → internal jugular vein; **cavernous sinus**) drain cerebral venous blood; the **cavernous sinus** transmits the ICA and CN III, IV, V1, V2, VI, and receives the ophthalmic veins (route for facial "danger-triangle" infection → cavernous sinus thrombosis).',
  ],

  mechanism: {
    title: 'Three layers, dural folds, and the spaces where blood collects',
    steps: [
      { id: 's1', label: 'Dura / arachnoid / pia; CSF in the subarachnoid space', emphasis: 'key' },
      { id: 's2', label: 'Epidural = arterial (MMA), biconvex, lucid interval' },
      { id: 's3', label: 'Subdural = venous (bridging veins), crescent, crosses sutures' },
      { id: 's4', label: 'Cavernous sinus: ICA + III/IV/V1/V2/VI', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Lucid interval then decline; lens-shaped bleed on CT', mechanism: 'Epidural hematoma (middle meningeal artery)', significance: 'key' },
    { sign: 'Crescent-shaped bleed in an elderly patient after a fall', mechanism: 'Subdural hematoma (bridging veins)', significance: 'key' },
    { sign: 'Thunderclap "worst headache of my life"', mechanism: 'Subarachnoid hemorrhage (berry aneurysm)', significance: 'key' },
  ],

  investigations: [
    { clue: 'CT head shape (biconvex vs crescent)', meaning: 'Epidural vs subdural' },
    { clue: 'LP/CT for subarachnoid blood', meaning: 'Subarachnoid hemorrhage' },
  ],

  treatment: [
    { logic: 'Evacuate significant epidural/subdural hematomas', detail: 'Epidural is a time-critical emergency.' },
    { logic: 'Secure a ruptured aneurysm (coil/clip)', detail: 'Subarachnoid hemorrhage.' },
  ],

  mnemonics: [
    { hook: 'Epidural = arterial, biconvex, lucid interval; Subdural = venous, crescent, crosses sutures', expansion: ['MMA vs bridging veins'] },
    { hook: 'Cavernous sinus contents: O-T-O-M-A-V? — CN III, IV, V1, V2, VI + ICA', expansion: ['Ophthalmic veins drain here'] },
  ],

  traps: [
    {
      questionCategory: 'Epidural vs subdural shape/source',
      wrongInstinct: 'A crescent-shaped intracranial bleed is an epidural hematoma',
      rightAnswer: 'A CRESCENT shape (crossing sutures) is a SUBDURAL hematoma (venous, bridging veins); the EPIDURAL bleed is biconvex/lens-shaped (arterial, does not cross sutures)',
      why: 'Shape and suture-crossing distinguish them: epidural bleeds are limited by sutures (biconvex), subdurals are not (crescent).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An elderly man on anticoagulation gradually becomes confused weeks after a minor fall; CT shows a crescent-shaped collection crossing suture lines. What is the diagnosis and source?',
      options: [
        { id: 'a', text: 'Epidural hematoma from the middle meningeal artery' },
        { id: 'b', text: 'Subdural hematoma from torn bridging veins' },
        { id: 'c', text: 'Subarachnoid hemorrhage from a berry aneurysm' },
        { id: 'd', text: 'Cavernous sinus thrombosis' },
      ],
      answerId: 'b',
      explanation: 'A crescent-shaped collection that crosses sutures, with a slow course in an elderly/anticoagulated patient, is a subdural hematoma from torn bridging (cortical) veins between the dura and arachnoid.',
      tests: 'exam',
    },
  ],
};

export default meningesDuralSinuses;
