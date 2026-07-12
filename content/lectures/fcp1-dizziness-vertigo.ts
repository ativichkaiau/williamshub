import type { Lecture } from '../../lib/types';

export const fcp1DizzinessVertigo: Lecture = {
  id: 'fcp1-dizziness-vertigo',
  title: 'Dizziness & Vertigo',
  system: 'clinical',
  source: 'L24 — Headache, Dizziness & Vertigo',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L24 Headache & Dizziness' },
    { kind: 'disease', label: 'BPPV · neuritis · stroke' },
    { kind: 'mechanism', label: 'Peripheral vs central' },
    { kind: 'exam', label: 'HINTS · nystagmus' },
  ],

  highYield: [
    'First categorise “dizziness”: **vertigo** (illusion of movement), **presyncope** (near-faint, overlaps [[fcp1-syncope-approach]]), **disequilibrium** (unsteadiness) or non-specific light-headedness — each has a different differential.',
    'Vertigo is **peripheral** (labyrinth/vestibular nerve) or **central** (brainstem/cerebellum); peripheral is commoner and benign, central is the **posterior-circulation stroke** you must not miss → [[fcp1-headache-red-flags]] and [[fcp1-weakness-umn-lmn]].',
    '**BPPV:** brief (<1 min) positional vertigo, fatigable, diagnosed by **Dix-Hallpike**, treated by **Epley**. **Vestibular neuritis:** acute persistent vertigo + horizontal nystagmus, no hearing loss. **Ménière:** episodic vertigo + fluctuating hearing loss + tinnitus + aural fullness.',
    '**Central clues:** vertical or direction-changing nystagmus, other brainstem/cerebellar signs (diplopia, dysarthria, ataxia, weakness), and **inability to walk unaided**.',
    '**HINTS** (Head-Impulse, Nystagmus, Test-of-Skew) in acute continuous vertigo: a **normal head-impulse**, **direction-changing nystagmus** or **skew deviation** points central — HINTS can outperform early MRI for posterior-circulation stroke.',
  ],

  mechanism: {
    title: 'Peripheral vs central vertigo',
    steps: [
      { id: 's1', label: 'Vertigo, presyncope, disequilibrium or light-headed?', emphasis: 'key' },
      { id: 's2', label: 'Vertigo → peripheral (labyrinth) vs central (brainstem)', emphasis: 'key' },
      { id: 's3', label: 'Brief positional = BPPV; acute persistent = neuritis', emphasis: 'normal' },
      { id: 's4', label: 'Central signs / abnormal HINTS → posterior stroke', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Dix-Hallpike: transient fatigable up-beating torsional nystagmus', mechanism: 'Canalith in the posterior semicircular canal (BPPV)', significance: 'key' },
    { sign: 'Unidirectional horizontal nystagmus with an abnormal head-impulse test', mechanism: 'Peripheral lesion (vestibular neuritis)', significance: 'supportive' },
    { sign: 'Vertical/direction-changing nystagmus, skew deviation, normal head-impulse', mechanism: 'Central lesion (HINTS)', significance: 'key' },
    { sign: 'Cannot stand or walk unaided, truncal ataxia', mechanism: 'Cerebellar involvement — central', significance: 'key' },
  ],

  investigations: [
    { clue: 'Brief positional vertigo with a positive Dix-Hallpike', meaning: 'BPPV — no imaging; treat with the Epley manoeuvre' },
    { clue: 'Acute persistent vertigo with a reassuring peripheral HINTS', meaning: 'Vestibular neuritis — a clinical diagnosis' },
    { clue: 'Any central HINTS sign, new headache or vascular risk factors', meaning: 'MRI with diffusion for posterior-circulation stroke → [[fcp1-headache-red-flags]]' },
    { clue: 'Episodic vertigo + fluctuating sensorineural hearing loss + tinnitus', meaning: 'Ménière disease — audiometry' },
  ],

  treatment: [
    { logic: 'Treat the mechanism, not just the spinning', detail: 'BPPV → Epley repositioning; vestibular neuritis → a short course of vestibular suppressant then early vestibular rehabilitation; Ménière → salt restriction, betahistine, diuretic.' },
    { logic: 'Central vertigo is a stroke pathway', detail: 'Admit and image; do not label acute continuous vertigo as peripheral without first excluding central signs.' },
  ],

  mnemonics: [
    { hook: 'HINTS: Head-Impulse, Nystagmus, Test-of-Skew', expansion: ['Normal head-impulse = worrying (central)', 'Direction-changing nystagmus = central', 'Skew deviation = central'] },
  ],

  traps: [
    {
      questionCategory: 'Peripheral vs central',
      wrongInstinct: 'A normal head-impulse test is reassuring',
      rightAnswer: 'In acute continuous vertigo a normal head-impulse test suggests a central (stroke) cause, not a benign one',
      why: 'A positive (abnormal) head-impulse indicates a peripheral lesion; a normal one in an acutely vertiginous patient points central.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 60-year-old man has sudden persistent vertigo, vomiting and unsteadiness. He has direction-changing nystagmus, a normal head-impulse test and cannot walk unaided. The most likely cause is:',
      options: [
        { id: 'a', text: 'Benign paroxysmal positional vertigo' },
        { id: 'b', text: 'Vestibular neuritis' },
        { id: 'c', text: 'Posterior-circulation stroke' },
        { id: 'd', text: 'Ménière disease' },
      ],
      answerId: 'c',
      explanation: 'Direction-changing nystagmus, a normal head-impulse test and inability to walk are central (HINTS) signs indicating a posterior-circulation stroke.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'A 55-year-old woman has recurrent 20-second episodes of spinning triggered by rolling over in bed, with no hearing loss. Dix-Hallpike reproduces transient torsional nystagmus. The best management is:',
      options: [
        { id: 'a', text: 'Epley repositioning manoeuvre' },
        { id: 'b', text: 'Long-term vestibular suppressants' },
        { id: 'c', text: 'Urgent MRI brain' },
        { id: 'd', text: 'High-dose corticosteroids' },
      ],
      answerId: 'a',
      explanation: 'Brief positional vertigo with a positive Dix-Hallpike is BPPV, treated with the Epley canalith-repositioning manoeuvre.',
      tests: 'treatment',
    },
  ],
};

export default fcp1DizzinessVertigo;
