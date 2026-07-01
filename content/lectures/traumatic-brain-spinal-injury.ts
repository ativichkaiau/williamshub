import type { Lecture } from '../../lib/types';

export const traumaticBrainSpinalInjury: Lecture = {
  id: 'traumatic-brain-spinal-injury',
  title: 'Traumatic Brain & Spinal Injury',
  system: 'neuro',
  source: 'L5 — CNS Trauma & Hemorrhage',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L5 CNS Trauma & Hemorrhage' },
    { kind: 'disease', label: 'Contusion / CTE' },
    { kind: 'mechanism', label: 'Coup–contrecoup' },
    { kind: 'exam', label: 'Concussion' },
  ],

  highYield: [
    'Head injury damages tissue three ways: **skull fracture, parenchymal injury, vascular injury**; classified **penetrating vs blunt** and **open vs closed**.',
    '**Concussion** = **transient, reversible** altered consciousness/neurologic function after head injury (no fixed deficit).',
    '**Contusions/lacerations** = direct parenchymal bruises: **coup** (at the impact point) and **contrecoup** (opposite side as the brain rebounds). Old contusions = yellow-brown **plaque jaune**.',
    '**Chronic traumatic encephalopathy (CTE)** = “boxer’s dementia” from **repetitive** head trauma: mood/behavioral change, cognitive decline; pathology = **brain atrophy + tau tangles (frontal/temporal)**.',
    '**Spinal cord injury**: usually from **vertebral column displacement** (hyperflexion/hyperextension); the **level determines the deficit**; severity ranges concussion → contusion → laceration → **transection**.',
  ],

  mechanism: {
    title: 'Force → primary injury (± secondary cascade)',
    steps: [
      { id: 's1', label: 'Impact: skull/parenchymal/vascular injury' },
      { id: 's2', label: 'Coup at impact, contrecoup opposite (rebound)', emphasis: 'key' },
      { id: 's3', label: 'Repetitive trauma → tau tangles (CTE)' },
      { id: 's4', label: 'Secondary edema/ischemia/hemorrhage worsens damage', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Transient loss of consciousness with full recovery', mechanism: 'Concussion', significance: 'key' },
    { sign: 'Focal deficit matching a contused gyral crest', mechanism: 'Coup/contrecoup contusion', significance: 'supportive' },
    { sign: 'Sensorimotor level on the trunk after spinal trauma', mechanism: 'Cord injury at that segment', significance: 'key' },
  ],

  investigations: [
    { clue: 'CT head (fracture, contusion, hemorrhage)', meaning: 'Acute traumatic lesions' },
    { clue: 'MRI spine + immobilization after spinal trauma', meaning: 'Cord injury level & stability' },
    { clue: 'History of repetitive head trauma', meaning: 'CTE risk (athletes, military)' },
  ],

  treatment: [
    { logic: 'Prevent secondary injury (oxygenation, perfusion, ICP)', detail: 'Primary injury is fixed; secondary is preventable.' },
    { logic: 'Spinal immobilization until cleared', detail: 'Avoid extending a cord injury.' },
  ],

  mnemonics: [
    { hook: 'Coup = contact site; contrecoup = opposite (rebound)', expansion: ['Both from one blow'] },
    { hook: 'CTE = repetitive hits → tau tangles (frontal/temporal)', expansion: ['Boxer’s dementia'] },
  ],

  traps: [
    {
      questionCategory: 'Concussion vs contusion',
      wrongInstinct: 'Any post-traumatic loss of consciousness means structural brain damage',
      rightAnswer: 'Concussion is a transient, reversible functional disturbance with no structural lesion; a contusion is a visible parenchymal bruise',
      why: 'Concussion produces temporary neurologic dysfunction that recovers fully, whereas a contusion is direct tissue injury (coup/contrecoup) seen on imaging/pathology.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A person falls backward and strikes the occiput. Besides bruising at the impact site, injury is found in the frontal and temporal poles. This anterior damage is called:',
      options: [
        { id: 'a', text: 'Coup injury' },
        { id: 'b', text: 'Contrecoup injury' },
        { id: 'c', text: 'Diffuse axonal injury' },
        { id: 'd', text: 'Chronic traumatic encephalopathy' },
      ],
      answerId: 'b',
      explanation: 'Damage opposite the impact site, as the brain rebounds against the skull, is a contrecoup contusion — classically at the frontal/temporal poles after an occipital blow.',
      tests: 'exam',
    },
  ],
};

export default traumaticBrainSpinalInjury;
