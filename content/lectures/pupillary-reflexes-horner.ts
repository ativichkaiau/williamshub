import type { Lecture } from '../../lib/types';

export const pupillaryReflexesHorner: Lecture = {
  id: 'pupillary-reflexes-horner',
  title: 'Pupillary Reflexes & Horner',
  system: 'neuro',
  source: 'L2 — Clinical Neuroanatomy II',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L2 Clinical Neuroanatomy II' },
    { kind: 'disease', label: 'Horner / RAPD' },
    { kind: 'mechanism', label: 'Light & near reflex' },
    { kind: 'exam', label: 'Ptosis patterns' },
  ],

  highYield: [
    '**Light reflex**: afferent **CN II** → **pretectal nucleus** → **both Edinger-Westphal nuclei** → efferent **CN III (parasympathetic)** → ciliary ganglion → sphincter → **bilateral miosis**. Consensual crossing is via the **posterior commissure**.',
    '**RAPD (Marcus Gunn pupil)** = afferent defect (optic nerve/retina): swinging-light test shows the affected pupil **paradoxically dilating** when the light swings to it.',
    '**Near (accommodation) reflex triad**: **convergence + accommodation (lens more convex) + miosis**; controlled by the **supraoculomotor area (SOA)**.',
    '**Light-near dissociation (Argyll Robertson)**: pupil **constricts to near but not to light** — classically neurosyphilis / dorsal midbrain.',
    'Ptosis patterns: **CN III palsy** = **severe ptosis + mydriasis** (down-and-out eye); **Horner syndrome** (sympathetic, T1–T2) = **mild ptosis + miosis + anhidrosis** (± enophthalmos).',
  ],

  mechanism: {
    title: 'Afferent light in → central relay → efferent pupil out',
    steps: [
      { id: 's1', label: 'CN II → pretectal nucleus (afferent)' },
      { id: 's2', label: 'Bilateral Edinger-Westphal (consensual)', emphasis: 'key' },
      { id: 's3', label: 'CN III parasympathetic → sphincter → miosis' },
      { id: 's4', label: 'Sympathetic (T1–2 → superior cervical ganglion) → dilation' },
    ],
  },

  examFindings: [
    { sign: 'Affected pupil dilates on the swinging-light test (RAPD)', mechanism: 'Afferent (optic nerve) defect', significance: 'key' },
    { sign: 'Miosis + partial ptosis + facial anhidrosis', mechanism: 'Horner (oculosympathetic) lesion', significance: 'key' },
    { sign: 'Constricts to near but not to light', mechanism: 'Light-near dissociation (Argyll Robertson)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Swinging-flashlight test', meaning: 'Detects an afferent (RAPD) vs efferent defect' },
    { clue: 'Pharmacologic pupil testing (apraclonidine/cocaine)', meaning: 'Confirms & localizes Horner' },
    { clue: 'Imaging along the sympathetic chain', meaning: 'Apical lung (Pancoast), carotid dissection, brainstem' },
  ],

  treatment: [
    { logic: 'Treat the underlying lesion', detail: 'Horner is a sign — hunt the cause (dissection, tumor).' },
    { logic: 'Painful CN III palsy with a blown pupil = emergency', detail: 'Posterior communicating aneurysm until proven otherwise.' },
  ],

  mnemonics: [
    { hook: 'Horner = Ptosis + Miosis + Anhidrosis (sympathetic loss)', expansion: ['Small pupil; opposite of a CN III blown pupil'] },
    { hook: 'Argyll Robertson = “accommodates but does not react” (near > light)', expansion: ['Prostitute’s pupil — reacts to near, not light'] },
  ],

  traps: [
    {
      questionCategory: 'Ptosis + pupil size',
      wrongInstinct: 'Ptosis with a small pupil is a CN III palsy',
      rightAnswer: 'Ptosis with a MIOTIC pupil (± anhidrosis) is Horner syndrome; CN III palsy gives ptosis with a DILATED pupil',
      why: 'Sympathetic (Horner) loss gives a small pupil and mild ptosis; CN III (parasympathetic + levator) loss gives a large pupil and severe ptosis — the pupil size flips the diagnosis.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient has a small right pupil, mild right upper-lid droop, and decreased sweating on the right face. The lesion involves the:',
      options: [
        { id: 'a', text: 'Right oculomotor (CN III) nerve' },
        { id: 'b', text: 'Right oculosympathetic pathway (Horner syndrome)' },
        { id: 'c', text: 'Right optic nerve' },
        { id: 'd', text: 'Edinger-Westphal nucleus' },
      ],
      answerId: 'b',
      explanation: 'Miosis + partial ptosis + anhidrosis is Horner syndrome from interruption of the oculosympathetic pathway. A CN III lesion would instead give a dilated pupil and marked ptosis.',
      tests: 'exam',
    },
  ],
};

export default pupillaryReflexesHorner;
