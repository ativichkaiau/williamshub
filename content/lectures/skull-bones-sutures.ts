import type { Lecture } from '../../lib/types';

export const skullBonesSutures: Lecture = {
  id: 'skull-bones-sutures',
  title: 'Skull: Bones, Sutures & Pterion',
  system: 'msk',
  source: 'L11 — Skull & Cranial Fossae',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L11 Skull & Cranial Fossae' },
    { kind: 'disease', label: 'Cranial bones' },
    { kind: 'mechanism', label: 'Sutures & landmarks' },
    { kind: 'exam', label: 'Pterion / fontanelles' },
  ],

  highYield: [
    'The **skull = neurocranium (cranial vault + base) + viscerocranium (facial skeleton)**. Cranial (calvarial) bones: **frontal, 2 parietal, 2 temporal, occipital, sphenoid, ethmoid**; the vault bones are joined by **sutures (fibrous joints)**.',
    'Main sutures: **coronal** (frontal–parietal), **sagittal** (between parietals), **lambdoid** (parietal–occipital); the meeting points are named landmarks (**bregma** = coronal+sagittal, **lambda** = sagittal+lambdoid).',
    'The **pterion** is the H-shaped meeting of the **frontal, parietal, temporal, and greater wing of sphenoid** — the **thinnest part of the lateral skull**, overlying the **anterior branch of the middle meningeal artery** → a fracture here can tear it and cause an **epidural (extradural) hematoma**.',
    'In the newborn, unossified membranous gaps = **fontanelles**: the **anterior fontanelle** (diamond, at bregma; closes ~18–24 months, used to assess hydration/ICP) and the **posterior fontanelle** (at lambda; closes ~2–3 months).',
    'The **facial skeleton** includes the maxillae, zygomatic, nasal, lacrimal, palatine, vomer, inferior conchae, and the mandible; the mandible articulates at the **TMJ** (the only mobile skull joint).',
  ],

  mechanism: {
    title: 'Vault bones fused by sutures; the base is pierced by foramina',
    steps: [
      { id: 's1', label: 'Neurocranium (vault + base) + facial skeleton', emphasis: 'key' },
      { id: 's2', label: 'Sutures = fibrous joints (coronal/sagittal/lambdoid)' },
      { id: 's3', label: 'Pterion = thinnest, over middle meningeal artery' },
      { id: 's4', label: 'Fontanelles: anterior (bregma) closes ~18–24 mo', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Bleeding after a blow to the temple (pterion)', mechanism: 'Middle meningeal artery tear → epidural hematoma', significance: 'key' },
    { sign: 'Bulging anterior fontanelle in an infant', mechanism: 'Raised intracranial pressure', significance: 'key' },
    { sign: 'Sunken anterior fontanelle', mechanism: 'Dehydration', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Palpate the anterior fontanelle in infants', meaning: 'Hydration / ICP' },
    { clue: 'CT head after temporal trauma', meaning: 'Epidural hematoma at the pterion' },
  ],

  treatment: [
    { logic: 'Epidural hematoma: urgent evacuation', detail: 'Middle meningeal artery source.' },
    { logic: 'Assess fontanelles clinically in infants', detail: 'Non-invasive ICP/hydration check.' },
  ],

  mnemonics: [
    { hook: 'Pterion = thinnest skull, over middle meningeal artery → epidural bleed', expansion: ['Frontal + parietal + temporal + sphenoid'] },
    { hook: 'Anterior fontanelle closes ~18–24 mo (diamond); posterior ~2–3 mo', expansion: ['Bregma vs lambda'] },
  ],

  traps: [
    {
      questionCategory: 'Structure deep to the pterion',
      wrongInstinct: 'A pterional fracture threatens a dural venous sinus',
      rightAnswer: 'It overlies the anterior branch of the MIDDLE MENINGEAL ARTERY; a fracture there causes an ARTERIAL epidural hematoma',
      why: 'The classic lucid-interval epidural bleed is arterial (middle meningeal), not venous.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The pterion is a clinically important site because it is the thinnest part of the lateral skull and overlies which structure?',
      options: [
        { id: 'a', text: 'The superior sagittal sinus' },
        { id: 'b', text: 'The anterior branch of the middle meningeal artery' },
        { id: 'c', text: 'The internal carotid artery' },
        { id: 'd', text: 'The transverse sinus' },
      ],
      answerId: 'b',
      explanation: 'The pterion (junction of frontal, parietal, temporal, and sphenoid) is thin and overlies the anterior branch of the middle meningeal artery; a fracture there can tear it and cause an epidural hematoma.',
      tests: 'exam',
    },
  ],
};

export default skullBonesSutures;
