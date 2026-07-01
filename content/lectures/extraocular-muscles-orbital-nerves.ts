import type { Lecture } from '../../lib/types';

export const extraocularMusclesOrbitalNerves: Lecture = {
  id: 'extraocular-muscles-orbital-nerves',
  title: 'Extraocular Muscles & Orbital Neurovasculature',
  system: 'msk',
  source: 'L12 — Orbit, Eye & Ear',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L12 Orbit, Eye & Ear' },
    { kind: 'disease', label: 'EOM / orbital nerves' },
    { kind: 'mechanism', label: 'LR6 SO4 rest 3' },
    { kind: 'exam', label: 'Ciliary ganglion / CRAO' },
  ],

  highYield: [
    '**7 extraocular muscles**: **levator palpebrae superioris** (opens the lid, CN III) + **4 recti and 2 obliques**. Innervation rule = **"LR6 SO4, rest 3"**: **Lateral Rectus = CN VI (abducens)**, **Superior Oblique = CN IV (trochlear)**, everything else (SR, IR, MR, IO, LPS) = **CN III (oculomotor)**.',
    'The **4 recti arise from the common tendinous ring (anulus of Zinn)** at the orbital apex, which encircles the **optic nerve, CN III (both divisions), nasociliary nerve (V1), and CN VI**. The nerves to the EOMs enter via the **superior orbital fissure**.',
    'Actions worth knowing: **superior oblique = depresses the ADDucted eye** (so CN IV palsy → vertical diplopia worse on reading/going downstairs, compensatory head tilt away); **CN VI palsy → the eye cannot abduct** (rests adducted, horizontal diplopia); the clinical gaze pathways/INO are detailed in the neurology lectures.',
    'The **ciliary ganglion** (a PARASYMPATHETIC ganglion, near the optic nerve) relays **CN III fibres → short ciliary nerves → sphincter pupillae + ciliary muscle** (pupil constriction + accommodation). **Sympathetic** fibres (from the internal carotid plexus) reach the **dilator pupillae** via long ciliary nerves (bypassing the ganglion).',
    '**Blood supply = the ophthalmic artery (a branch of the internal carotid)**; its **central retinal artery** is an **end artery** — sudden occlusion causes **central retinal artery occlusion (CRAO)**: sudden painless monocular vision loss, a **pale retina with a cherry-red spot** and a relative afferent pupillary defect. Venous drainage (superior/inferior ophthalmic veins) goes to the **cavernous sinus**.',
  ],

  mechanism: {
    title: 'Three nerves move the eye; the ophthalmic artery feeds it',
    steps: [
      { id: 's1', label: 'LR6 (abducens), SO4 (trochlear), rest CN III', emphasis: 'key' },
      { id: 's2', label: 'Recti origin = common tendinous ring (anulus of Zinn)' },
      { id: 's3', label: 'Ciliary ganglion (CN III) → pupil constriction/accommodation' },
      { id: 's4', label: 'Central retinal artery = end artery → CRAO (cherry-red spot)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Eye rests adducted, cannot abduct, horizontal diplopia', mechanism: 'CN VI (abducens) palsy — lateral rectus', significance: 'key' },
    { sign: 'Vertical diplopia worse going downstairs + head tilt', mechanism: 'CN IV (trochlear) palsy — superior oblique', significance: 'key' },
    { sign: 'Sudden painless monocular blindness + cherry-red spot', mechanism: 'Central retinal artery occlusion', significance: 'key' },
  ],

  investigations: [
    { clue: 'Test the 9 cardinal gaze positions', meaning: 'Isolate individual EOM/nerve palsies' },
    { clue: 'Fundoscopy (cherry-red spot, pale retina)', meaning: 'CRAO' },
  ],

  treatment: [
    { logic: 'CRAO: emergency (ocular massage, lower IOP)', detail: 'Retina tolerates ischemia poorly.' },
    { logic: 'Nerve palsies: treat cause; prisms/patching for diplopia', detail: 'See the neuro lectures for gaze pathways.' },
  ],

  mnemonics: [
    { hook: '"LR6 SO4, all the rest 3": Lateral Rectus VI, Superior Oblique IV, rest III', expansion: ['Levator palpebrae = III'] },
    { hook: 'Superior oblique depresses the ADDucted eye (CN IV → trouble going downstairs)', expansion: ['Head tilt away'] },
  ],

  traps: [
    {
      questionCategory: 'Action of the superior oblique',
      wrongInstinct: 'The superior oblique elevates the eye',
      rightAnswer: 'The superior oblique DEPRESSES (and intorts/abducts) the eye — it is best tested by looking DOWN and IN; CN IV palsy causes trouble descending stairs',
      why: 'Because of its trochlear pulley, the superior oblique depresses the adducted eye, the opposite of what "superior" suggests.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient has horizontal diplopia; the right eye rests slightly adducted and cannot move laterally past the midline. Which nerve is affected?',
      options: [
        { id: 'a', text: 'Oculomotor (CN III)' },
        { id: 'b', text: 'Abducens (CN VI)' },
        { id: 'c', text: 'Trochlear (CN IV)' },
        { id: 'd', text: 'Ophthalmic (CN V1)' },
      ],
      answerId: 'b',
      explanation: 'The abducens nerve (CN VI) supplies the lateral rectus; its palsy prevents abduction, leaving the eye adducted with horizontal diplopia worse on gaze to the affected side.',
      tests: 'exam',
    },
  ],
};

export default extraocularMusclesOrbitalNerves;
