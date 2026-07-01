import type { Lecture } from '../../lib/types';
import { EAR_ANATOMY } from '../../lib/figures';

export const earExternalMiddleInternal: Lecture = {
  id: 'ear-external-middle-internal',
  title: 'Ear: External, Middle & Internal',
  system: 'msk',
  source: 'L12 — Orbit, Eye & Ear',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L12 Orbit, Eye & Ear' },
    { kind: 'disease', label: 'Hearing & balance' },
    { kind: 'mechanism', label: 'Sound conduction' },
    { kind: 'exam', label: 'Ossicles / Eustachian tube' },
  ],

  highYield: [
    'The ear has **3 parts**: **external** (auricle + external acoustic meatus, ending at the tympanic membrane), **middle** (air-filled tympanic cavity with the ossicles), and **internal** (the labyrinth for hearing + balance). External + middle ear conduct sound; the internal ear transduces it.',
    'The **external acoustic meatus** is **S-shaped** (lateral 1/3 cartilage, medial 2/3 bone) with **cerumen (wax) glands**; the **tympanic membrane** has a central **umbo** (tip of the malleus handle). Auricle sensation = **great auricular (C2–3) + auriculotemporal (V3)**.',
    'The **middle ear ossicles (malleus → incus → stapes)** transmit vibration from the tympanic membrane to the **oval window**, **amplifying force ~15–20×** (impedance matching). Two muscles dampen loud sound: **tensor tympani (V3)** and **stapedius (CN VII)**. The **chorda tympani (VII)** crosses the middle ear.',
    'The **pharyngotympanic (Eustachian) tube** connects the middle ear to the **nasopharynx** and **equalizes middle-ear pressure**. In children it is **shorter and more horizontal** → nasopharyngeal infection ascends easily → **acute otitis media**. The middle ear also connects posteriorly to the **mastoid air cells** (route for mastoiditis).',
    'The **internal ear** = a **bony labyrinth (perilymph)** enclosing a **membranous labyrinth (endolymph)**: the **cochlea (hearing)** and the **vestibule + 3 semicircular canals (balance)**, all served by **CN VIII (vestibulocochlear)**. The **facial nerve (VII)** also passes through the internal acoustic meatus and its canal in the medial wall.',
  ],

  mechanism: {
    title: 'Air → membrane → ossicles → oval window → cochlea',
    steps: [
      { id: 's1', label: 'External: auricle + EAM → tympanic membrane', emphasis: 'key' },
      { id: 's2', label: 'Middle: malleus→incus→stapes amplify to the oval window' },
      { id: 's3', label: 'Eustachian tube → nasopharynx (pressure; otitis media)' },
      { id: 's4', label: 'Internal: cochlea (hearing) + vestibule/SCCs (balance), CN VIII' },
    ],
  },

  examFindings: [
    { sign: 'Bulging red tympanic membrane + ear pain in a child', mechanism: 'Acute otitis media (Eustachian tube)', significance: 'key' },
    { sign: 'Conductive hearing loss with ossicular fixation', mechanism: 'Middle-ear ossicular chain problem', significance: 'supportive' },
    { sign: 'Vertigo + sensorineural hearing loss', mechanism: 'Internal ear / CN VIII pathology', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Otoscopy of the tympanic membrane', meaning: 'Middle-ear disease' },
    { clue: 'Rinne/Weber tuning-fork tests', meaning: 'Conductive vs sensorineural loss' },
  ],

  treatment: [
    { logic: 'Otitis media: analgesia ± antibiotics; grommets if recurrent', detail: 'Myringotomy for persistent effusion.' },
    { logic: 'Protect CN VII in ear surgery', detail: 'It runs in the medial middle-ear wall.' },
  ],

  mnemonics: [
    { hook: 'Ossicles: Malleus → Incus → Stapes ("MIS") → oval window', expansion: ['~15–20× amplification'] },
    { hook: 'Child Eustachian tube = short + horizontal → otitis media', expansion: ['Connects to nasopharynx'] },
  ],

  traps: [
    {
      questionCategory: 'Why children get otitis media',
      wrongInstinct: 'Children get more ear infections because their tympanic membrane is thinner',
      rightAnswer: 'Their pharyngotympanic (Eustachian) tube is shorter, wider, and more horizontal, so nasopharyngeal pathogens ascend to the middle ear more easily',
      why: 'The tube geometry, not the drum, explains the childhood predisposition to acute otitis media.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Vibrations of the tympanic membrane are transmitted across the middle ear by the ossicles to which structure of the internal ear?',
      options: [
        { id: 'a', text: 'Round window' },
        { id: 'b', text: 'Oval window (by the stapes footplate)' },
        { id: 'c', text: 'Eustachian tube' },
        { id: 'd', text: 'Mastoid antrum' },
      ],
      answerId: 'b',
      explanation: 'The malleus→incus→stapes chain transmits vibration from the tympanic membrane to the oval window (via the stapes footplate), amplifying the force and setting the cochlear perilymph in motion.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'External, middle & internal ear', svg: EAR_ANATOMY, caption: 'Sound: auricle → EAM → tympanic membrane → ossicles → oval window → cochlea; Eustachian tube equalizes pressure.' },
  ],
};

export default earExternalMiddleInternal;
