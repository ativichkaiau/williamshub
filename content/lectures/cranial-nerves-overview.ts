import type { Lecture } from '../../lib/types';

export const cranialNervesOverview: Lecture = {
  id: 'cranial-nerves-overview',
  title: 'Cranial Nerves (I–XII) Overview',
  system: 'neuro',
  source: 'L14 — Brainstem',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L14 Cranial Nerves' },
    { kind: 'mechanism', label: 'Modality & nuclei' },
    { kind: 'exam', label: 'CN functions; UMN vs LMN facial' },
  ],

  highYield: [
    '**There are TWELVE pairs of cranial nerves (CN I–XII). Two arise from the FOREBRAIN and do NOT relay in the brainstem — CN I (OLFACTORY) and CN II (OPTIC) — while CN III–XII arise from brainstem nuclei arranged by level: MIDBRAIN (III, IV), PONS (V, VI, VII, VIII), MEDULLA (IX, X, XI, XII)** ([[brainstem-anatomy-organization]]).',
    '**Each CN carries a defined MODALITY — motor, sensory, or mixed (mnemonic "Some Say Marry Money But My Brother Says Big Brains Matter More": S/M/B for I–XII). Purely MOTOR: III, IV, VI, XI, XII; purely SENSORY: I, II, VIII; MIXED: V, VII, IX, X.** Four carry PARASYMPATHETIC fibres — III (pupil/ciliary), VII (lacrimal/salivary), IX (parotid), X (thoracoabdominal viscera).',
    '**High-yield functions: III oculomotor (most eye movement, eyelid, pupil constriction); IV trochlear (superior oblique — down-and-in); V trigeminal (facial sensation + mastication); VI abducens (lateral rectus — abduction); VII facial (facial expression + taste anterior ⅔ + lacrimal/salivary); VIII vestibulocochlear (hearing + balance); IX/X (swallow, gag, taste posterior ⅓, viscera); XI accessory (SCM/trapezius); XII hypoglossal (tongue).**',
    '**UMN vs LMN of the FACE is a classic exam point: the FOREHEAD has BILATERAL cortical (corticobulbar) innervation, so an UMN (cortical/internal-capsule, e.g. stroke) lesion SPARES the forehead (contralateral lower-face droop only), whereas an LMN (CN VII nucleus/nerve, e.g. Bell\'s palsy) lesion paralyses the WHOLE half-face including the forehead.** Corticobulbar tracts are the UMN supply to the CN motor nuclei.',
    '**The take-home: CN I & II are forebrain (skip the brainstem); III–XII map to midbrain/pons/medulla; know each modality (motor/sensory/mixed) and the 4 parasympathetic nerves (III, VII, IX, X); forehead-sparing = UMN (stroke), whole-face = LMN (Bell\'s palsy).** Ocular CNs (III/IV/VI) detail in HNS-2 ([[extraocular-muscles]], [[pupillary-reflexes-horner]]); facial palsy in HNS-2 ([[neurotoxins-facial-palsy]]).',
  ],

  mechanism: {
    title: 'CN I–II forebrain; III–XII by brainstem level; modality (motor/sensory/mixed); forehead-sparing = UMN',
    steps: [
      { id: 's1', label: 'CN I (olfactory) & II (optic) = forebrain, no brainstem relay', emphasis: 'key' },
      { id: 's2', label: 'III–IV midbrain; V–VIII pons; IX–XII medulla', emphasis: 'key' },
      { id: 's3', label: 'Motor: III IV VI XI XII; Sensory: I II VIII; Mixed: V VII IX X', emphasis: 'key' },
      { id: 's4', label: 'Parasympathetic in III, VII, IX, X', emphasis: 'key' },
      { id: 's5', label: 'UMN (stroke) SPARES forehead; LMN (Bell\'s palsy) = whole half-face', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Whole half-face weakness including the forehead', mechanism: 'LMN facial (CN VII) lesion — e.g. Bell\'s palsy', significance: 'key' },
    { sign: 'Lower-face droop with forehead spared', mechanism: 'UMN (corticobulbar) lesion — forehead bilaterally innervated', significance: 'key' },
    { sign: 'Eye "down and out" with ptosis and a blown pupil', mechanism: 'CN III (oculomotor) palsy', significance: 'key' },
    { sign: 'Tongue deviates toward the lesion on protrusion', mechanism: 'CN XII (hypoglossal) LMN lesion', significance: 'key' },
    { sign: 'Absent gag / uvula deviation', mechanism: 'CN IX/X lesion', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The two cranial nerves that do not relay in the brainstem', meaning: 'CN I (olfactory) and CN II (optic) — forebrain' },
    { clue: 'The purely motor cranial nerves', meaning: 'III, IV, VI, XI, XII' },
    { clue: 'The four cranial nerves carrying parasympathetic fibres', meaning: 'III, VII, IX, X' },
    { clue: 'The finding that distinguishes UMN from LMN facial palsy', meaning: 'Forehead sparing (UMN) vs whole-face weakness (LMN)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The cranial nerves are the workhorse of neurological localisation — modality and brainstem level place a lesion, and the forehead-sparing rule separates a cortical stroke (UMN) from Bell\'s palsy (LMN). The CN nuclei sit in the brainstem anatomy of [[brainstem-anatomy-organization]] (crossed signs) and receive corticobulbar UMN input from the motor system ([[motor-system-corticospinal-control]]). Ocular nerves and reflexes are in HNS-2 ([[extraocular-muscles]], [[gaze-pathways-ino]], [[pupillary-reflexes-horner]]); facial palsy and neurotoxins in [[neurotoxins-facial-palsy]]; hearing/balance (CN VIII) in [[auditory-physiology-hearing]] and [[vestibular-system-physiology]].' },
  ],

  mnemonics: [
    { hook: 'Names: "On Old Olympus\' Towering Tops A Finn And German Viewed Some Hops" (I–XII)', expansion: ['I olfactory … XII hypoglossal', 'CN I & II = forebrain'] },
    { hook: 'Modality "Some Say Marry Money But My Brother Says Big Brains Matter More" (S/M/B)', expansion: ['Motor: 3,4,6,11,12', 'Parasympathetic: 3,7,9,10'] },
    { hook: 'Facial palsy: "forehead spared = Stroke (UMN); whole face = Bell\'s (LMN)"', expansion: ['Forehead bilaterally innervated', 'LMN = ipsilateral whole half-face'] },
  ],

  traps: [
    {
      questionCategory: 'UMN vs LMN facial palsy',
      wrongInstinct: 'Any facial droop means a facial nerve (Bell\'s palsy) problem',
      rightAnswer: 'The FOREHEAD receives BILATERAL corticobulbar (UMN) input, so a cortical/internal-capsule stroke (UMN) causes CONTRALATERAL LOWER-face weakness with the FOREHEAD SPARED, whereas a CN VII nucleus/nerve lesion (LMN, e.g. Bell\'s palsy) weakens the ENTIRE ipsilateral half-face including the forehead — the forehead is the discriminator',
      why: 'Whether the forehead is involved instantly separates a central (stroke, forehead spared) from a peripheral (Bell\'s palsy, whole face) facial weakness — different causes, urgency and management.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with a right hemispheric stroke has drooping of the right lower face but can still wrinkle the right forehead normally. This pattern indicates:',
      options: [
        { id: 'a', text: 'A lower motor neuron (CN VII) lesion' },
        { id: 'b', text: 'An upper motor neuron (corticobulbar) lesion, because the forehead is bilaterally innervated' },
        { id: 'c', text: 'A trigeminal nerve lesion' },
        { id: 'd', text: 'Myasthenia gravis' },
      ],
      answerId: 'b',
      explanation: 'The forehead receives bilateral upper motor neuron (corticobulbar) input, so a UMN lesion spares the forehead and causes only contralateral lower-face weakness. A lower motor neuron (CN VII) lesion, such as Bell\'s palsy, would paralyse the whole half-face including the forehead.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which set of cranial nerves carries parasympathetic fibres?',
      options: [
        { id: 'a', text: 'I, II, VIII' },
        { id: 'b', text: 'III, VII, IX, X' },
        { id: 'c', text: 'IV, VI, XI, XII' },
        { id: 'd', text: 'V, VI, VII, VIII' },
      ],
      answerId: 'b',
      explanation: 'Four cranial nerves carry parasympathetic fibres: III (pupillary constriction/accommodation), VII (lacrimal and salivary glands), IX (parotid gland) and X (thoracic and abdominal viscera). The others are purely somatic motor, sensory, or mixed without a parasympathetic component.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default cranialNervesOverview;
