import type { Lecture } from '../../lib/types';

export const basalGangliaCerebellum: Lecture = {
  id: 'basal-ganglia-cerebellum',
  title: 'Basal Ganglia & Cerebellum',
  system: 'neuro',
  source: 'L1 — Clinical Neuroanatomy I',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L1 Clinical Neuroanatomy I' },
    { kind: 'disease', label: 'Movement disorders' },
    { kind: 'mechanism', label: 'Direct/indirect pathways' },
    { kind: 'exam', label: 'Ataxia vs rigidity' },
  ],

  highYield: [
    '**Basal ganglia = movement modulation.** **Hypokinetic** (Parkinson) vs **hyperkinetic** (chorea, ballismus, athetosis). Signs are **contralateral** to the lesion.',
    '**Parkinson**: loss of **substantia nigra dopamine** → underactive direct / overactive indirect pathway → **resting tremor, cogwheel/lead-pipe rigidity, bradykinesia**, postural instability.',
    '**Huntington chorea** = **striatum (caudate)** loss; **hemiballismus** = **subthalamic nucleus** lesion (wild flinging); athetosis = writhing.',
    '**Cerebellum = coordination; signs are IPSILATERAL.** Posterior lobe/neocerebellum → **intention tremor, dysmetria, dysdiadochokinesia, ataxia**; flocculonodular → **balance/nystagmus**; anterior lobe → gait/trunk (alcohol).',
    '**Brainstem motor posturing**: **decorticate** (flexor arms) = lesion **above the red nucleus**; **decerebrate** (extensor) = lesion **at/below the red nucleus** — worse prognosis.',
  ],

  mechanism: {
    title: 'Which motor modulator failed → the movement pattern',
    steps: [
      { id: 's1', label: 'Basal ganglia: nigra (Parkinson) / striatum (chorea) / subthalamic (ballism)', emphasis: 'key' },
      { id: 's2', label: 'Direct pathway ↓ or indirect ↑ → hypokinesia (Parkinson)' },
      { id: 's3', label: 'Cerebellum: ipsilateral ataxia / intention tremor' },
      { id: 's4', label: 'Below red nucleus → decerebrate extensor posturing', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Resting (pill-rolling) tremor + cogwheel rigidity + bradykinesia', mechanism: 'Nigrostriatal dopamine loss', significance: 'key' },
    { sign: 'Intention tremor, dysmetria, ipsilateral limb ataxia', mechanism: 'Neocerebellar (posterior lobe) lesion', significance: 'key' },
    { sign: 'Unilateral wild flinging (hemiballismus)', mechanism: 'Contralateral subthalamic nucleus lesion', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Tremor type: rest (Parkinson) vs intention (cerebellar)', meaning: 'Separates the two systems' },
    { clue: 'MRI brain', meaning: 'Structural cause (stroke, mass, degeneration)' },
    { clue: 'Family history / genetics', meaning: 'Huntington (autosomal dominant, CAG repeats)' },
  ],

  treatment: [
    { logic: 'Parkinson: restore dopaminergic tone', detail: 'Levodopa/dopamine agonists.' },
    { logic: 'Hyperkinetic disorders: dopamine-lowering agents', detail: 'e.g. for chorea.' },
    { logic: 'Cerebellar: treat cause; rehab', detail: 'Gait/coordination safety.' },
  ],

  mnemonics: [
    { hook: 'Cerebellum = IPSIlateral; basal ganglia signs = contralateral', expansion: ['Cerebellar double-cross keeps signs same-side'] },
    { hook: 'deCORticate = arms to the CORe (flexor, higher); deCEREBrate = extended (lower, worse)', expansion: ['Red nucleus is the divider'] },
  ],

  traps: [
    {
      questionCategory: 'Tremor type localization',
      wrongInstinct: 'Any tremor points to the cerebellum',
      rightAnswer: 'A resting tremor is basal-ganglia (parkinsonian); an intention tremor (worse approaching a target) is cerebellar',
      why: 'Resting pill-rolling tremor that eases with movement is nigrostriatal; a tremor that appears/worsens on reaching a target with dysmetria is cerebellar — opposite behaviors localize to different systems.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient develops sudden, violent, large-amplitude flinging movements of the left arm and leg. The most likely lesion is in the:',
      options: [
        { id: 'a', text: 'Left cerebellar hemisphere' },
        { id: 'b', text: 'Right subthalamic nucleus' },
        { id: 'c', text: 'Left substantia nigra' },
        { id: 'd', text: 'Right caudate nucleus' },
      ],
      answerId: 'b',
      explanation: 'Hemiballismus — violent flinging of the contralateral limbs — classically results from a lesion (often lacunar stroke) of the subthalamic nucleus on the opposite side.',
      tests: 'exam',
    },
  ],
};

export default basalGangliaCerebellum;
