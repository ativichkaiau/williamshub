import type { Lecture } from '../../lib/types';

export const fcp1WeaknessUmnLmn: Lecture = {
  id: 'fcp1-weakness-umn-lmn',
  title: 'Weakness — UMN vs LMN',
  system: 'clinical',
  source: 'L25 — Weakness & Numbness',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L25 Weakness & Numbness' },
    { kind: 'disease', label: 'Stroke · GBS · cord compression' },
    { kind: 'mechanism', label: 'UMN vs LMN' },
    { kind: 'exam', label: 'Tone · reflexes · plantars' },
  ],

  highYield: [
    '**UMN** (corticospinal): **increased tone/spasticity, hyperreflexia, upgoing plantar (Babinski)**, no wasting, pyramidal pattern. **LMN** (anterior horn → muscle): **wasting, fasciculations, hypotonia, hyporeflexia, downgoing/absent plantar** — localise first → [[fcp1-weakness-localization]].',
    'Acute **focal UMN** weakness that is sudden = **stroke** — time-critical; posterior-circulation events overlap vertigo → [[fcp1-dizziness-vertigo]].',
    'Acute **ascending areflexic LMN** weakness = **Guillain-Barré syndrome** → monitor **forced vital capacity** and bulbar/autonomic involvement; it can be life-threatening.',
    '**Cord compression** gives UMN signs **below** the level, LMN signs **at** the level, a **sensory level** and sphincter loss — a neurosurgical emergency → [[fcp1-numbness-sensory]].',
    'Mixed **UMN + LMN with no sensory loss** suggests motor neurone disease; NMJ disease is **fatigable** with normal reflexes and no sensory loss.',
  ],

  mechanism: {
    title: 'Reading tone, reflexes and plantars',
    steps: [
      { id: 's1', label: '↑tone, hyperreflexia, upgoing plantar → UMN', emphasis: 'key' },
      { id: 's2', label: 'Wasting, fasciculations, areflexia → LMN', emphasis: 'key' },
      { id: 's3', label: 'Sudden focal UMN → acute stroke', emphasis: 'danger' },
      { id: 's4', label: 'Ascending areflexic LMN → GBS (watch breathing)', emphasis: 'danger' },
      { id: 's5', label: 'UMN below + LMN at level + sensory level → cord', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Spasticity, brisk reflexes, extensor plantar response', mechanism: 'Upper motor neurone lesion', significance: 'key' },
    { sign: 'Muscle wasting with fasciculations and absent reflexes', mechanism: 'Lower motor neurone lesion', significance: 'key' },
    { sign: 'Symmetrical ascending weakness with early loss of reflexes', mechanism: 'Guillain-Barré syndrome', significance: 'key' },
    { sign: 'A sensory level with brisk legs and lax anal tone', mechanism: 'Spinal cord compression', significance: 'key' },
  ],

  investigations: [
    { clue: 'Sudden UMN hemiparesis', meaning: 'Emergency CT/MRI — acute stroke assessment for thrombolysis/thrombectomy' },
    { clue: 'Ascending weakness, areflexia, albuminocytological dissociation on LP', meaning: 'Guillain-Barré syndrome — serial FVC, ICU if failing' },
    { clue: 'UMN legs + sensory level + urinary retention', meaning: 'Urgent whole-spine MRI for cord compression' },
    { clue: 'Falling vital capacity or new bulbar weakness', meaning: 'Impending respiratory failure — escalate airway/ventilation' },
  ],

  treatment: [
    { logic: 'UMN emergencies are vascular or compressive', detail: 'Stroke → reperfusion pathway; cord compression → urgent MRI, steroids if malignant, neurosurgery/oncology.' },
    { logic: 'GBS: supportive monitoring is the priority', detail: 'IVIG or plasma exchange; the killer is respiratory/autonomic failure — track FVC rather than waiting for a low SpO2.' },
  ],

  mnemonics: [
    { hook: 'UMN = tight & brisk (up-going); LMN = floppy & wasted (down-going)', expansion: ['UMN: spastic, hyperreflexic, Babinski', 'LMN: wasting, fasciculations, areflexia', 'Cord = UMN below + LMN at the level'] },
  ],

  traps: [
    {
      questionCategory: 'GBS monitoring',
      wrongInstinct: 'Oxygen saturation is a good early guide to breathing in GBS',
      rightAnswer: 'Track forced vital capacity — SpO2 falls late; a declining FVC signals impending respiratory failure first',
      why: 'Neuromuscular respiratory failure drops the FVC well before oxygen desaturates, so SpO2 gives false reassurance.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient has leg weakness with increased tone, exaggerated knee jerks and bilateral upgoing plantar responses. These signs indicate a lesion of the:',
      options: [
        { id: 'a', text: 'Lower motor neurone' },
        { id: 'b', text: 'Upper motor neurone' },
        { id: 'c', text: 'Neuromuscular junction' },
        { id: 'd', text: 'Muscle' },
      ],
      answerId: 'b',
      explanation: 'Increased tone, hyperreflexia and extensor plantar responses are upper motor neurone signs.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A 30-year-old develops progressive ascending leg then arm weakness over five days with absent reflexes, two weeks after an episode of diarrhoea. The most important bedside monitoring is:',
      options: [
        { id: 'a', text: 'Blood pressure lying and standing' },
        { id: 'b', text: 'Forced vital capacity' },
        { id: 'c', text: 'Random blood glucose' },
        { id: 'd', text: 'Visual acuity' },
      ],
      answerId: 'b',
      explanation: 'This is Guillain-Barré syndrome; serial forced vital capacity detects impending neuromuscular respiratory failure before desaturation.',
      tests: 'treatment',
    },
  ],
};

export default fcp1WeaknessUmnLmn;
