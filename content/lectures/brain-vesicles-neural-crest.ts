import type { Lecture } from '../../lib/types';
import { NEURAL_DEVELOPMENT } from '../../lib/figures';

export const brainVesiclesNeuralCrest: Lecture = {
  id: 'brain-vesicles-neural-crest',
  title: 'Brain Vesicles & Neural Crest Derivatives',
  system: 'neuro',
  source: 'L8 — Development of the Nervous System',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L8 Neurodevelopment' },
    { kind: 'mechanism', label: 'Vesicles & neural crest' },
    { kind: 'exam', label: 'Brain part origins' },
  ],

  highYield: [
    '**Once the neural tube forms, its rostral end swells into THREE PRIMARY BRAIN VESICLES: PROSENCEPHALON (forebrain), MESENCEPHALON (midbrain) and RHOMBENCEPHALON (hindbrain); the caudal tube becomes the SPINAL CORD.** These then subdivide into FIVE SECONDARY vesicles — the scaffold of adult brain anatomy.',
    '**The five secondary vesicles and their adult derivatives: TELENCEPHALON → cerebral hemispheres/cortex + basal ganglia; DIENCEPHALON → thalamus + hypothalamus (and the optic vesicles/retina); MESENCEPHALON → midbrain; METENCEPHALON → pons + cerebellum; MYELENCEPHALON → medulla.** The cavities become the ventricular system ([[ventricles-csf-circulation]]).',
    '**The neural tube wall is organised dorsoventrally: the ALAR plate (dorsal) becomes SENSORY neurons, the BASAL plate (ventral) becomes MOTOR neurons, separated by the sulcus limitans — the same sensory-dorsal/motor-ventral plan seen in the adult spinal cord.** Its layers form the ventricular, mantle (grey matter) and marginal (white matter) zones.',
    '**As the folds fuse, NEURAL CREST cells break away from the crest of the tube and MIGRATE widely to form most of the PERIPHERAL nervous system and more: dorsal root & autonomic GANGLIA, Schwann cells, the ADRENAL MEDULLA (chromaffin cells), MELANOCYTES, and much of the craniofacial skeleton.** Neural crest = "the fourth germ layer".',
    '**The take-home: 3 primary → 5 secondary vesicles build the adult brain (telencephalon = cortex/basal ganglia, diencephalon = thalamus/hypothalamus, met = pons/cerebellum, myel = medulla); alar = sensory, basal = motor; NEURAL CREST → PNS ganglia, Schwann cells, adrenal medulla, melanocytes.** Neurulation and neural tube defects are in [[neural-tube-development-defects]]; adult regions in [[cerebrum-lobes-white-matter]] and [[brainstem-anatomy-organization]].',
  ],

  mechanism: {
    title: '3 primary → 5 secondary vesicles → adult brain; alar=sensory/basal=motor; neural crest → PNS',
    steps: [
      { id: 's1', label: '3 primary: prosencephalon, mesencephalon, rhombencephalon (+ cord)', emphasis: 'key' },
      { id: 's2', label: 'Telencephalon → cortex/basal ganglia; Diencephalon → thalamus/hypothalamus', emphasis: 'key' },
      { id: 's3', label: 'Metencephalon → pons + cerebellum; Myelencephalon → medulla', emphasis: 'key' },
      { id: 's4', label: 'Alar plate = SENSORY (dorsal); basal plate = MOTOR (ventral)', emphasis: 'key' },
      { id: 's5', label: 'Neural crest → PNS ganglia, Schwann cells, adrenal medulla, melanocytes', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Cerebral cortex and basal ganglia origin', mechanism: 'Telencephalon (from prosencephalon)', significance: 'key' },
    { sign: 'Thalamus and hypothalamus origin', mechanism: 'Diencephalon (from prosencephalon)', significance: 'key' },
    { sign: 'Pons and cerebellum origin', mechanism: 'Metencephalon (from rhombencephalon)', significance: 'key' },
    { sign: 'Dorsal root ganglia, Schwann cells, adrenal medulla, melanocytes', mechanism: 'Neural crest derivatives', significance: 'key' },
    { sign: 'Dorsal (sensory) vs ventral (motor) neuron origin in the tube', mechanism: 'Alar plate (sensory) vs basal plate (motor)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The three primary brain vesicles', meaning: 'Prosencephalon, mesencephalon, rhombencephalon' },
    { clue: 'The vesicle that becomes the thalamus and hypothalamus', meaning: 'The diencephalon' },
    { clue: 'The plate that gives rise to sensory neurons', meaning: 'The alar plate (dorsal)' },
    { clue: 'The origin of the peripheral ganglia and adrenal medulla', meaning: 'The neural crest' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The vesicle scheme is the developmental map of adult brain anatomy — telencephalon = [[cerebrum-lobes-white-matter]], diencephalon = [[diencephalon-thalamus-hypothalamus]], hindbrain = [[brainstem-anatomy-organization]] and [[cerebellum-anatomy-function]]. The alar/basal plan carries into the adult cord ([[spinal-cord-anatomy-organization]]). Neural crest disorders (neurocristopathies) affect the PNS, melanocytes and adrenal medulla. Neurulation/defects are in [[neural-tube-development-defects]].' },
  ],

  mnemonics: [
    { hook: '5 vesicles: "Tele-cortex, Di-thalamus, Mes-midbrain, Met-pons/cerebellum, Myel-medulla"', expansion: ['Cavities → ventricles', 'Diencephalon also → retina'] },
    { hook: 'Crest = "PNS + pigment + adrenal medulla + Schwann"', expansion: ['Alar = Afferent (sensory)', 'Basal = motor'] },
  ],

  traps: [
    {
      questionCategory: 'Origin of the adrenal medulla',
      wrongInstinct: 'The whole adrenal gland develops from the same tissue',
      rightAnswer: 'The adrenal MEDULLA (chromaffin cells secreting catecholamines) is derived from NEURAL CREST — it is effectively a modified sympathetic ganglion — whereas the adrenal CORTEX arises from mesoderm; they have completely different origins despite sitting in one gland',
      why: 'The neural-crest origin of the medulla explains why phaeochromocytoma (a catecholamine-secreting tumour) and other neurocristopathies behave as neural tumours, and distinguishes medulla from the mesodermal cortex.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The thalamus and hypothalamus develop from which secondary brain vesicle?',
      options: [
        { id: 'a', text: 'Telencephalon' },
        { id: 'b', text: 'Diencephalon' },
        { id: 'c', text: 'Metencephalon' },
        { id: 'd', text: 'Myelencephalon' },
      ],
      answerId: 'b',
      explanation: 'The prosencephalon divides into the telencephalon (cerebral cortex and basal ganglia) and the diencephalon (thalamus, hypothalamus, and the optic vesicles/retina). The metencephalon becomes pons and cerebellum, the myelencephalon the medulla.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which of the following is a neural crest derivative?',
      options: [
        { id: 'a', text: 'The cerebral cortex' },
        { id: 'b', text: 'Dorsal root ganglion neurons and the adrenal medulla' },
        { id: 'c', text: 'The oligodendrocytes of the CNS' },
        { id: 'd', text: 'The choroid plexus' },
      ],
      answerId: 'b',
      explanation: 'Neural crest cells migrate from the dorsal neural tube to form the peripheral nervous system — dorsal root and autonomic ganglia, Schwann cells — as well as the adrenal medulla, melanocytes and much of the craniofacial skeleton. CNS neurons/glia (except microglia) come from the neural tube itself.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Development of the nervous system', svg: NEURAL_DEVELOPMENT, caption: 'Primary and secondary brain vesicles and their adult derivatives, alar/basal plates, and neural crest migration.' },
  ],
};

export default brainVesiclesNeuralCrest;
