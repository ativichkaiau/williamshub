import type { Lecture } from '../../lib/types';

export const orbitLacrimalApparatus: Lecture = {
  id: 'orbit-lacrimal-apparatus',
  title: 'Bony Orbit, Eyelids & Lacrimal Apparatus',
  system: 'msk',
  source: 'L12 — Orbit, Eye & Ear',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L12 Orbit, Eye & Ear' },
    { kind: 'disease', label: 'Orbit / lacrimal' },
    { kind: 'mechanism', label: 'Walls & tear drainage' },
    { kind: 'exam', label: 'Blowout fracture' },
  ],

  highYield: [
    'The **bony orbit is a pyramid** (base = orbital margin, apex = optic canal) built from **7 bones** (frontal, sphenoid, zygomatic, maxilla, palatine, ethmoid, lacrimal). The **medial wall (ethmoid, "lamina papyracea") and floor (maxilla) are paper-thin**; the **lateral wall (zygomatic + greater wing of sphenoid) is thickest**.',
    '**Blowout fracture**: a blow to the eye raises orbital pressure and fractures the **thin floor (into the maxillary sinus)** or **medial wall (into the ethmoid sinus)**, while the sturdy rim stays intact. Orbital fat/inferior rectus can herniate → **restricted upgaze + diplopia** ± infraorbital-nerve numbness.',
    'Three key openings: **optic canal (CN II + ophthalmic artery)**, **superior orbital fissure (CN III, IV, V1, VI + ophthalmic veins)**, and **inferior orbital fissure (CN V2/infraorbital + inferior ophthalmic vein)**.',
    'The **eyelids** are stiffened by **tarsal plates** and closed off by the **orbital septum** (a barrier to infection spread into the orbit); the **Meibomian (tarsal) glands** secrete oil — a blocked one forms a **chalazion**, while an infected gland of the lid margin forms a **sty (hordeolum)**.',
    '**Lacrimal drainage pathway**: lacrimal gland → conjunctival sac → **puncta → canaliculi → lacrimal sac → nasolacrimal duct → inferior nasal meatus** (why crying makes the nose run). The **lacrimal gland\'s parasympathetic (secretomotor) supply is CN VII → greater petrosal → pterygopalatine ganglion → V2**.',
  ],

  mechanism: {
    title: 'A thin-walled bony pyramid; tears drain into the nose',
    steps: [
      { id: 's1', label: 'Thin floor/medial wall; strong lateral wall + rim', emphasis: 'key' },
      { id: 's2', label: 'Blowout fracture → floor into maxillary sinus (restricted upgaze)', emphasis: 'danger' },
      { id: 's3', label: 'Openings: optic canal, superior/inferior orbital fissures' },
      { id: 's4', label: 'Tears: gland → puncta → sac → nasolacrimal duct → nose' },
    ],
  },

  examFindings: [
    { sign: 'Restricted upward gaze + diplopia + cheek numbness after eye trauma', mechanism: 'Orbital floor blowout fracture (inferior rectus/infraorbital nerve)', significance: 'key' },
    { sign: 'Painless lid lump within the tarsal plate', mechanism: 'Chalazion (blocked Meibomian gland)', significance: 'supportive' },
    { sign: 'Watery eye that resolves after probing the duct', mechanism: 'Nasolacrimal duct obstruction', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'CT orbit (coronal) after blunt trauma', meaning: 'Floor/medial-wall blowout' },
    { clue: 'Test upgaze + infraorbital sensation', meaning: 'Entrapment + nerve involvement' },
  ],

  treatment: [
    { logic: 'Blowout fracture: repair if entrapment/enophthalmos', detail: 'Release trapped inferior rectus.' },
    { logic: 'Chalazion/sty: warm compresses ± minor procedure', detail: 'Conservative first.' },
  ],

  mnemonics: [
    { hook: 'Blowout fracture: floor → maxillary sinus (restricted upgaze), medial wall → ethmoid', expansion: ['Rim stays intact'] },
    { hook: 'Tears: puncta → canaliculi → sac → nasolacrimal duct → inferior meatus', expansion: ['Crying → runny nose'] },
  ],

  traps: [
    {
      questionCategory: 'Where tears ultimately drain',
      wrongInstinct: 'Tears drain into the maxillary sinus',
      rightAnswer: 'Tears drain via the nasolacrimal duct into the INFERIOR nasal meatus (not a sinus)',
      why: 'The nasolacrimal duct opens into the inferior meatus of the nose — the reason crying produces a runny nose.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'After being struck in the eye, a patient has diplopia on upward gaze and numbness of the cheek, but the orbital rim is intact. What is the most likely injury?',
      options: [
        { id: 'a', text: 'Fracture of the thick lateral wall' },
        { id: 'b', text: 'Blowout fracture of the orbital floor into the maxillary sinus' },
        { id: 'c', text: 'Optic canal fracture' },
        { id: 'd', text: 'Zygomatic arch fracture' },
      ],
      answerId: 'b',
      explanation: 'A blowout fracture of the thin orbital floor herniates orbital contents (inferior rectus) into the maxillary sinus, restricting upgaze and causing diplopia; infraorbital-nerve involvement numbs the cheek. The strong rim remains intact.',
      tests: 'exam',
    },
  ],
};

export default orbitLacrimalApparatus;
