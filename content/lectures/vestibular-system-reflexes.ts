import type { Lecture } from '../../lib/types';

export const vestibularSystemReflexes: Lecture = {
  id: 'vestibular-system-reflexes',
  title: 'Vestibular System & Reflexes',
  system: 'neuro',
  source: 'L2 — Clinical Neuroanatomy II',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L2 Clinical Neuroanatomy II' },
    { kind: 'disease', label: 'Vertigo' },
    { kind: 'mechanism', label: 'VOR / VSR' },
    { kind: 'exam', label: "Doll's eye / COWS" },
  ],

  highYield: [
    '**Peripheral labyrinth**: **3 semicircular canals** sense **angular acceleration** (dynamic); **utricle & saccule** (otoliths) sense **linear acceleration/gravity** (static).',
    'Two reflex jobs: **vestibulo-spinal reflex (VSR) = postural/static equilibrium**; **vestibulo-ocular reflex (VOR) = keeps gaze stable during head movement (dynamic)**.',
    "**Doll's-eye (oculocephalic) reflex**: in a comatose patient, **intact eye deviation opposite to head turn = intact brainstem tegmentum** (midbrain–pons); **absent = brainstem lesion**.",
    '**Nystagmus** = slow phase (vestibular drift) + fast corrective phase (cortical); **named by the fast phase**. Caloric test **“COWS” (Cold-Opposite, Warm-Same)** for the fast phase; **no fast phase in coma** (no cortical biofeedback).',
    '**Vertigo = the commonest vestibular symptom.** Peripheral (BPPV, Ménière, vestibular neuritis) vs central (brainstem/cerebellum) — central causes carry other neuro signs and direction-changing nystagmus.',
  ],

  mechanism: {
    title: 'Head motion → hair-cell signal → reflex output',
    steps: [
      { id: 's1', label: 'Semicircular canals (angular) / otoliths (linear)' },
      { id: 's2', label: 'Vestibular nerve → vestibular nuclei', emphasis: 'key' },
      { id: 's3', label: 'VOR (gaze) + VSR (posture) + cerebellar tuning' },
      { id: 's4', label: 'Mismatch/lesion → vertigo & nystagmus', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Positional vertigo with fatigable nystagmus (Dix-Hallpike)', mechanism: 'Peripheral (BPPV) canalith stimulation', significance: 'key' },
    { sign: "Absent Doll's-eye in a comatose patient", mechanism: 'Brainstem (midbrain/pons) lesion', significance: 'key' },
    { sign: 'Direction-changing / vertical nystagmus + other neuro signs', mechanism: 'Central (brainstem/cerebellar) cause', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Dix-Hallpike / head-impulse test', meaning: 'Peripheral vs central vertigo' },
    { clue: 'Caloric testing (COWS)', meaning: 'Vestibular function / brainstem integrity' },
    { clue: 'MRI if central features', meaning: 'Brainstem/cerebellar stroke or mass' },
  ],

  treatment: [
    { logic: 'Reposition (Epley) for BPPV; vestibular suppressants short-term', detail: 'Peripheral causes.' },
    { logic: 'Central vertigo → image and treat the cause', detail: 'Do not miss cerebellar stroke.' },
  ],

  mnemonics: [
    { hook: 'COWS — Cold Opposite, Warm Same (fast phase)', expansion: ['Caloric nystagmus direction'] },
    { hook: 'Canals = angular (spin); otoliths = linear (gravity/tilt)', expansion: ['Dynamic vs static equilibrium'] },
  ],

  traps: [
    {
      questionCategory: 'Peripheral vs central vertigo',
      wrongInstinct: 'Severe vertigo with nystagmus is always a benign peripheral (inner-ear) problem',
      rightAnswer: 'Direction-changing or vertical nystagmus, absent skew/other neuro signs, or a normal head-impulse test point to a central (brainstem/cerebellar) cause',
      why: 'Peripheral vertigo gives unidirectional, fatigable, horizontal nystagmus with an abnormal head-impulse test; central vertigo can look identical but shows direction-changing/vertical nystagmus and additional neurologic signs — missing it can mean a cerebellar stroke.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: "In an unconscious patient, turning the head to the right makes both eyes move conjugately to the left. This Doll's-eye response indicates:",
      options: [
        { id: 'a', text: 'An intact brainstem (midbrain–pons)' },
        { id: 'b', text: 'A destroyed brainstem tegmentum' },
        { id: 'c', text: 'Bilateral cortical blindness' },
        { id: 'd', text: 'A cervical spinal cord lesion' },
      ],
      answerId: 'a',
      explanation: "A positive (intact) oculocephalic/Doll's-eye reflex — eyes moving opposite to head turn — means the vestibulo-ocular pathway through the brainstem tegmentum is intact. Its absence suggests a midbrain/pontine lesion.",
      tests: 'exam',
    },
  ],
};

export default vestibularSystemReflexes;
