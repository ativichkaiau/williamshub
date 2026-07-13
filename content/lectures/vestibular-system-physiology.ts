import type { Lecture } from '../../lib/types';

export const vestibularSystemPhysiology: Lecture = {
  id: 'vestibular-system-physiology',
  title: 'Vestibular System & Balance',
  system: 'neuro',
  source: 'L21 — Vestibular System',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L21 Vestibular' },
    { kind: 'mechanism', label: 'Semicircular canals & otoliths' },
    { kind: 'exam', label: 'VOR, nystagmus, vertigo' },
  ],

  highYield: [
    '**The vestibular apparatus of the inner ear detects HEAD MOTION and gravity in two parts: the three SEMICIRCULAR CANALS sense ANGULAR (rotational) acceleration, and the OTOLITH organs (UTRICLE and SACCULE) sense LINEAR acceleration and head tilt relative to GRAVITY.** All use HAIR CELLS as the transducer ([[inner-ear-hair-cell-histology]]).',
    '**The three semicircular canals are set at right angles to cover all planes; each is filled with ENDOLYMPH, and rotation deflects the CUPULA in the ampulla, bending the hair cells.** The otolith organs have a gelatinous macula loaded with heavy OTOLITHS (calcium carbonate crystals) that shift with gravity/linear acceleration — displaced otoliths into a canal cause BPPV (benign paroxysmal positional vertigo).',
    'Signals travel via CN VIII (vestibular) to the VESTIBULAR NUCLEI, which drive three outputs: the VESTIBULO-OCULAR REFLEX (VOR — stabilises GAZE during head movement by moving the eyes oppositely), the vestibulospinal tract (postural/antigravity tone — [[brainstem-descending-motor-tracts]]), and projections for the conscious sense of balance and motion. The VOR keeps the visual world stable when you turn your head.',
    'Clinically: an imbalance between the two labyrinths produces VERTIGO (illusion of movement) and NYSTAGMUS (slow drift toward the weaker side, fast corrective saccade away). The CALORIC TEST probes the VOR ("COWS" — Cold Opposite, Warm Same, for the fast phase). Central (brainstem/cerebellar) vs peripheral (labyrinth/CN VIII) vertigo is a key distinction.',
    '**The take-home: semicircular canals = rotation, otoliths (utricle/saccule) = linear/gravity; via CN VIII → vestibular nuclei → VOR (gaze stabilisation), vestibulospinal (posture) and balance; mismatch → vertigo + nystagmus (slow phase toward the weak side).** Peripheral vestibular disorders (BPPV, Ménière, vestibular neuritis) are in HNS-2 ([[inner-ear-disorders]]).',
  ],

  mechanism: {
    title: 'Canals (rotation) + otoliths (linear/gravity) → CN VIII → vestibular nuclei → VOR/posture/balance',
    steps: [
      { id: 's1', label: 'Semicircular canals sense ANGULAR (rotational) acceleration', emphasis: 'key' },
      { id: 's2', label: 'Otoliths (utricle/saccule) sense LINEAR acceleration + head tilt (gravity)', emphasis: 'key' },
      { id: 's3', label: 'Hair cells transduce → CN VIII → vestibular nuclei (brainstem)', emphasis: 'key' },
      { id: 's4', label: 'Outputs: VOR (gaze stabilisation), vestibulospinal (posture), balance sense', emphasis: 'key' },
      { id: 's5', label: 'Labyrinthine imbalance → vertigo + nystagmus (slow phase toward weak side)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Illusion of spinning/movement (vertigo)', mechanism: 'Vestibular imbalance between the two labyrinths', significance: 'key' },
    { sign: 'Nystagmus (slow drift + fast corrective saccade)', mechanism: 'Vestibular asymmetry; fast phase away from the weaker side', significance: 'key' },
    { sign: 'Brief positional vertigo on head turning', mechanism: 'BPPV (displaced otoliths in a semicircular canal)', significance: 'key' },
    { sign: 'Blurred vision/oscillopsia when moving the head', mechanism: 'Failed vestibulo-ocular reflex (gaze not stabilised)', significance: 'supportive' },
    { sign: 'Abnormal caloric response ("COWS")', mechanism: 'VOR testing of the horizontal canal', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The organs sensing rotational (angular) acceleration', meaning: 'The semicircular canals' },
    { clue: 'The organs sensing linear acceleration and gravity', meaning: 'The otolith organs (utricle and saccule)' },
    { clue: 'The reflex that stabilises gaze during head movement', meaning: 'The vestibulo-ocular reflex (VOR)' },
    { clue: 'The cause of benign positional vertigo', meaning: 'Displaced otoliths (otoconia) in a semicircular canal (BPPV)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The vestibular system underlies balance, the VOR (gaze stability) and postural tone; understanding canals (rotation) vs otoliths (gravity) explains BPPV, and labyrinthine asymmetry explains vertigo/nystagmus and the caloric test. It shares hair-cell transduction with hearing ([[inner-ear-hair-cell-histology]], [[auditory-physiology-hearing]]) and drives the vestibulospinal tract ([[brainstem-descending-motor-tracts]]); peripheral disorders (BPPV, Ménière, neuritis) and central vs peripheral vertigo are in HNS-2 ([[inner-ear-disorders]]).' },
  ],

  mnemonics: [
    { hook: 'Vestibular: "Canals = Corners (rotation); Otoliths = Onward/gravity (linear)"', expansion: ['Utricle + saccule = otoliths', 'BPPV = loose otoliths'] },
    { hook: 'Caloric "COWS": Cold-Opposite, Warm-Same (fast phase of nystagmus)', expansion: ['VOR stabilises gaze', 'Slow phase toward weak side'] },
  ],

  traps: [
    {
      questionCategory: 'Semicircular canals vs otolith organs',
      wrongInstinct: 'The whole vestibular apparatus detects the same kind of head movement',
      rightAnswer: 'The SEMICIRCULAR CANALS detect ANGULAR (rotational) acceleration, whereas the OTOLITH organs (utricle and saccule) detect LINEAR acceleration and static head TILT relative to gravity — they sense different motions, which is why BPPV (displaced otoliths entering a canal) causes positional, rotation-triggered vertigo',
      why: 'Distinguishing rotational (canals) from linear/gravitational (otoliths) sensing explains the specific provoking movements of vestibular disorders and the logic of positional testing and repositioning manoeuvres.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Rotational (angular) acceleration of the head is detected principally by the:',
      options: [
        { id: 'a', text: 'Utricle and saccule (otolith organs)' },
        { id: 'b', text: 'Semicircular canals' },
        { id: 'c', text: 'Cochlea' },
        { id: 'd', text: 'Organ of Corti' },
      ],
      answerId: 'b',
      explanation: 'The three semicircular canals, set in orthogonal planes, detect angular (rotational) acceleration as endolymph deflects the cupula. The otolith organs (utricle and saccule) detect linear acceleration and head tilt relative to gravity; the cochlea is for hearing.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The vestibulo-ocular reflex (VOR) functions to:',
      options: [
        { id: 'a', text: 'Constrict the pupil to light' },
        { id: 'b', text: 'Stabilise gaze by moving the eyes opposite to head movement' },
        { id: 'c', text: 'Generate hearing' },
        { id: 'd', text: 'Control limb posture only' },
      ],
      answerId: 'b',
      explanation: 'The VOR stabilises gaze during head movement by driving the eyes in the equal and opposite direction, keeping the visual image steady on the retina. Its failure causes oscillopsia (blurred/bouncing vision) on head movement, and it is tested by the caloric and head-impulse tests.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default vestibularSystemPhysiology;
