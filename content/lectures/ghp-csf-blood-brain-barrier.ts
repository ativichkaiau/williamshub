import type { Lecture } from '../../lib/types';

export const ghpCsfBloodBrainBarrier: Lecture = {
  id: 'ghp-csf-blood-brain-barrier',
  title: 'CSF, Hydrocephalus & the Blood–Brain Barrier',
  system: 'neuro',
  source: 'Ch 61 — Cerebral Blood Flow, Cerebrospinal Fluid & Brain Metabolism',
  updated: '2026-09-10',
  tags: [
    { kind: 'system', label: 'Neurology' },
    { kind: 'lecture', label: 'Ch 61 Cerebral Flow & CSF' },
    { kind: 'mechanism', label: 'Secretion, flow, absorption' },
    { kind: 'exam', label: 'Communicating vs obstructive' },
  ],

  highYield: [
    '**CSF is actively secreted, not filtered, and it turns over several times a day.** The **choroid plexus** produces about **500 mL/day** against a standing volume of only **~150 mL**, so the whole pool is replaced roughly **three to four times daily**. Because secretion is active it continues largely **regardless of intracranial pressure** — which is precisely why an obstruction keeps building pressure rather than self-limiting.',
    '**The circulation is a one-way path, and knowing it lets you place any blockage.** Lateral ventricles → **foramina of Monro** → third ventricle → **cerebral aqueduct** → fourth ventricle → **foramina of Luschka and Magendie** → subarachnoid space → absorbed at the **arachnoid granulations** into the venous sinuses. Absorption is passive and pressure-dependent, driven by the CSF-to-venous gradient.',
    '**Hydrocephalus divides by where the block sits relative to the subarachnoid space.** **Obstructive (non-communicating)** blocks flow *within* the ventricular system — aqueduct stenosis is the classic — so ventricles proximal to the block dilate and distal ones do not. **Communicating** blocks *absorption* at the granulations, typically after meningitis or subarachnoid haemorrhage, so the entire system dilates. The dilation pattern names the level.',
    '**Normal pressure hydrocephalus is the exception that catches people out.** Ventricles enlarge with a **normal measured pressure**, giving the triad of **gait apraxia, urinary incontinence and dementia** — often summarised as wet, wacky and wobbly. It matters because it is one of the few **reversible** dementias, treated by shunting rather than by accepting neurodegeneration.',
    '**CSF also provides buoyancy, and the physics is worth stating.** The brain weighs about **1400 g** in air but effectively **~50 g** suspended in CSF, a nearly thirty-fold reduction. That buoyancy plus the fluid cushion is what protects against acceleration injury, and its loss after CSF drainage explains the severe positional headache of low-pressure states.',
    '**The blood–brain barrier is made by tight junctions between capillary endothelial cells, supported by astrocyte foot processes.** Lipid-soluble molecules (oxygen, CO₂, anaesthetics, alcohol) cross freely; ions, proteins and most drugs do not, and glucose requires **GLUT1** transport. Some regions deliberately **lack** the barrier — the circumventricular organs, including the area postrema, which is how the vomiting centre samples blood toxins. Inflammation breaks the barrier down, which is why meningitis raises CSF protein and improves antibiotic penetration.',
  ],

  mechanism: {
    title: 'Made, circulated, absorbed — block any step and pressure rises',
    steps: [
      { id: 's1', label: 'Choroid plexus actively secretes ~500 mL/day into the ventricles', emphasis: 'key' },
      { id: 's2', label: 'Flow: lateral → Monro → third → aqueduct → fourth → Luschka/Magendie' },
      { id: 's3', label: 'Passive, pressure-dependent absorption at arachnoid granulations', emphasis: 'key' },
      { id: 's4', label: 'Block inside the ventricles → obstructive; proximal dilation only', emphasis: 'key' },
      { id: 's5', label: 'Block at absorption → communicating; whole system dilates' },
      { id: 's6', label: 'Secretion continues regardless of pressure → pressure keeps climbing', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Gait apraxia, incontinence and cognitive decline with enlarged ventricles', mechanism: 'Normal pressure hydrocephalus — a reversible dementia', significance: 'key' },
    { sign: 'Dilated lateral and third ventricles with a normal fourth', mechanism: 'Aqueduct stenosis — obstructive hydrocephalus', significance: 'key' },
    { sign: 'Uniform dilation of all ventricles after meningitis', mechanism: 'Impaired absorption at the arachnoid granulations', significance: 'key' },
    { sign: 'Severe headache on sitting up, relieved by lying flat', mechanism: 'Loss of CSF buoyancy in a low-pressure state', significance: 'supportive' },
    { sign: 'Vomiting provoked by a circulating toxin', mechanism: 'Area postrema lies outside the blood–brain barrier', significance: 'supportive' },
    { sign: 'Raised CSF protein in bacterial meningitis', mechanism: 'Inflammatory breakdown of barrier integrity', significance: 'key' },
  ],

  investigations: [
    { clue: 'Ventricular dilation proximal to a discrete narrowing', meaning: 'Obstructive hydrocephalus — locate the level from the dilation pattern' },
    { clue: 'Ventriculomegaly with normal opening pressure and the classic triad', meaning: 'Normal pressure hydrocephalus — consider shunting' },
    { clue: 'Raised CSF protein with low glucose and neutrophils', meaning: 'Bacterial meningitis with a disrupted barrier' },
    { clue: 'Improved gait after high-volume lumbar CSF removal', meaning: 'Predicts shunt responsiveness in NPH' },
    { clue: 'Poor CNS penetration of a hydrophilic antibiotic', meaning: 'Intact blood–brain barrier excluding water-soluble drugs' },
  ],

  treatment: [
    {
      logic: 'Type the hydrocephalus before treating it',
      detail: 'An **obstructive** block needs the obstruction bypassed or removed; a **communicating** one reflects failed absorption and is diverted by shunting. The dilation pattern on imaging identifies which, so the anatomy of flow does the diagnostic work.',
    },
    {
      logic: 'Exploit or respect the barrier when choosing a drug',
      detail: 'Only **lipid-soluble** agents cross freely, so CNS drugs are designed for it while many antibiotics are excluded. Inflammation **breaches** the barrier, which is why penetration improves in meningitis — the same reasoning behind dosing in [[ghp-cerebral-blood-flow-metabolism]] when perfusion is compromised.',
    },
  ],

  mnemonics: [
    { hook: 'Wet, wacky, wobbly', expansion: ['Incontinence', 'Dementia', 'Gait apraxia', 'Normal pressure hydrocephalus — reversible'] },
    { hook: 'Inside blocks proximally, outside blocks everything', expansion: ['Obstructive: ventricles above the block dilate', 'Communicating: whole system dilates'] },
  ],

  traps: [
    {
      questionCategory: 'Why obstruction keeps raising pressure',
      wrongInstinct: 'Rising pressure will slow CSF production and self-limit',
      rightAnswer: 'Secretion is active and continues largely independent of pressure',
      why: 'Absorption is pressure-dependent but production is not, so a block is progressive',
    },
    {
      questionCategory: 'Ventriculomegaly with normal pressure',
      wrongInstinct: 'A normal opening pressure excludes hydrocephalus',
      rightAnswer: 'Normal pressure hydrocephalus presents exactly this way and is treatable',
      why: 'Missing it means missing one of the few reversible causes of dementia',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Imaging shows dilated lateral and third ventricles with a normal-sized fourth ventricle. Where is the lesion?',
      options: [
        { id: 'a', text: 'Arachnoid granulations' },
        { id: 'b', text: 'Cerebral aqueduct' },
        { id: 'c', text: 'Foramina of Luschka and Magendie' },
        { id: 'd', text: 'Choroid plexus' },
      ],
      answerId: 'b',
      explanation: 'CSF flows third ventricle → aqueduct → fourth ventricle. Dilation stops exactly at the aqueduct, so everything proximal enlarges while the fourth stays normal — obstructive hydrocephalus from aqueduct stenosis. A granulation problem would dilate the whole system.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'An elderly patient has a broad-based shuffling gait, urinary incontinence and cognitive decline, with enlarged ventricles and a normal CSF opening pressure. What is the diagnosis?',
      options: [
        { id: 'a', text: 'Alzheimer disease with compensatory ventricular enlargement' },
        { id: 'b', text: 'Normal pressure hydrocephalus' },
        { id: 'c', text: 'Obstructive hydrocephalus from aqueduct stenosis' },
        { id: 'd', text: 'Chronic subdural haematoma' },
      ],
      answerId: 'b',
      explanation: 'The triad of gait apraxia, incontinence and dementia with ventriculomegaly at normal measured pressure is normal pressure hydrocephalus. It matters because shunting can reverse it, unlike the neurodegenerative dementias.',
      tests: 'investigation',
    },
    {
      id: 'q3',
      stem: 'Why can circulating toxins trigger vomiting despite the blood–brain barrier?',
      options: [
        { id: 'a', text: 'Toxins are always lipid-soluble' },
        { id: 'b', text: 'The area postrema is a circumventricular organ lacking the barrier' },
        { id: 'c', text: 'Toxins are actively transported by GLUT1' },
        { id: 'd', text: 'The barrier is absent in the cerebellum' },
      ],
      answerId: 'b',
      explanation: 'Certain circumventricular organs, including the area postrema, deliberately lack tight junctions so they can sample plasma composition. That is precisely how the chemoreceptor trigger zone detects blood-borne emetic stimuli.',
      tests: 'mechanism',
    },
  ],
};

export default ghpCsfBloodBrainBarrier;
