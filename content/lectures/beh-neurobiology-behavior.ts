import type { Lecture } from '../../lib/types';

export const behNeurobiologyBehavior: Lecture = {
  id: 'beh-neurobiology-behavior',
  title: 'Neurobiology of Behavior',
  system: 'community',
  source: 'L5 — Genetics & Biology of Behavior',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Behavioral Science' },
    { kind: 'lecture', label: 'L5 Biology of Behavior' },
    { kind: 'mechanism', label: 'Limbic system · prefrontal cortex' },
    { kind: 'exam', label: 'Amygdala · dopamine · serotonin' },
    { kind: 'treatment', label: 'Transmitter → drug logic' },
  ],

  highYield: [
    '**Behaviour has a biological substrate:** the **limbic system** (amygdala, hippocampus, hypothalamus, cingulate gyrus) generates emotion, memory and drive, while the **prefrontal cortex (PFC)** supplies executive control — judgement, planning and impulse inhibition. This biological layer sits inside the wider [[beh-biopsychosocial-model]].',
    '**Amygdala = the threat detector.** It appraises emotional salience and drives fear conditioning; the **hippocampus** consolidates memory and the **hypothalamus** runs primal drives (hunger, thirst, temperature, sex) and the stress axis ([[beh-stress-response]]).',
    '**Prefrontal cortex = the brakes.** It exerts top-down control over limbic reactivity; damage causes disinhibition, poor judgement and personality change (the classic Phineas Gage case). Weak prefrontal control over limbic drive underlies the impulsivity assessed in the [[beh-mental-status-exam]].',
    '**Four transmitters, four behavioural jobs:** **dopamine** (reward, motivation, movement; excess → psychosis), **serotonin** (mood, sleep, impulse control; low → depression and impulsivity), **noradrenaline** (arousal, alertness, fight-or-flight), and **GABA** (the main inhibitory, calming transmitter).',
    '**Transmitter systems map onto drug classes:** dopamine blockade treats psychosis ([[beh-psychotic-disorders]]), raising serotonin treats depression and anxiety ([[beh-mood-anxiety-disorders]]), and enhancing GABA calms acute anxiety — the pharmacological arm of the biological model, complementing [[beh-behavioral-genetics]].',
  ],

  mechanism: {
    title: 'Stimulus → limbic appraisal → prefrontal modulation → behaviour',
    steps: [
      { id: 's1', label: 'Sensory input reaches the thalamus and cortex' },
      { id: 's2', label: 'Amygdala makes a rapid emotional/threat appraisal', emphasis: 'key' },
      { id: 's3', label: 'Limbic + hypothalamic response: emotion, drive, autonomic/HPA arousal' },
      { id: 's4', label: 'Prefrontal cortex applies top-down control (judgement, impulse brakes)', emphasis: 'key' },
      { id: 's5', label: 'Behavioural output — tuned throughout by dopamine, serotonin, noradrenaline, GABA', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'The amygdala is central to fear and threat processing', mechanism: 'It assigns emotional salience and drives fear conditioning', significance: 'key' },
    { sign: 'The prefrontal cortex governs judgement and impulse control', mechanism: 'It exerts top-down inhibition over limbic drives; damage → disinhibition', significance: 'key' },
    { sign: 'Excess mesolimbic dopamine produces positive psychotic symptoms', mechanism: 'Dopamine overactivity in the mesolimbic pathway; blockade relieves it', significance: 'key' },
    { sign: 'Low serotonin is linked to depressed mood, impulsivity and aggression', mechanism: 'Serotonin modulates mood, sleep and impulse control', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A railway worker survives an iron rod through the frontal lobe and becomes impulsive and socially disinhibited', meaning: 'The prefrontal cortex governs judgement and impulse control (the Phineas Gage case)' },
    { clue: 'A patient on a dopamine-blocking antipsychotic develops a Parkinsonian tremor', meaning: 'Dopamine blockade in the nigrostriatal pathway impairs movement — same transmitter, different pathway' },
    { clue: 'A benzodiazepine relieves acute anxiety within minutes', meaning: 'The drug enhances GABA, the main inhibitory transmitter' },
    { clue: 'Bilateral amygdala damage leaves a patient unable to recognise fear in faces', meaning: 'The amygdala is essential for processing fear' },
  ],

  treatment: [
    { logic: 'Map the symptom to its transmitter system before choosing a drug', detail: 'Dopamine blockade for psychosis, raising serotonin for depression/anxiety, GABA enhancement for acute anxiety ([[beh-mood-anxiety-disorders]]).' },
    { logic: 'Use the prefrontal–limbic balance to explain psychological therapy', detail: 'Skills and talking therapies strengthen top-down prefrontal regulation over limbic reactivity ([[beh-stress-response]]).' },
  ],

  mnemonics: [
    { hook: 'Limbic feels, prefrontal decides', expansion: ['Amygdala = fear/threat', 'Hippocampus = memory', 'Hypothalamus = drives + stress axis', 'Prefrontal cortex = judgement & impulse brakes'] },
    { hook: 'Four transmitters, four jobs', expansion: ['Dopamine → reward, movement, psychosis when high', 'Serotonin → mood, sleep, impulse; low in depression', 'Noradrenaline → arousal, fight-or-flight', 'GABA → main inhibitory, calming'] },
  ],

  traps: [
    {
      questionCategory: 'Dopamine in psychosis versus Parkinsonism',
      wrongInstinct: 'More dopamine is always better and less is always worse',
      rightAnswer: 'Excess dopamine in the mesolimbic pathway causes psychosis, while a deficit in the nigrostriatal pathway causes Parkinsonism',
      why: 'The same transmitter has opposite behavioural effects depending on the pathway, which is why antipsychotics can cause Parkinsonian side-effects.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Bilateral destruction of the amygdala is most likely to impair which function?',
      options: [
        { id: 'a', text: 'Recognising and responding to fear' },
        { id: 'b', text: 'Long-term declarative memory storage' },
        { id: 'c', text: 'Voluntary limb movement' },
        { id: 'd', text: 'Production of fluent speech' },
      ],
      answerId: 'a',
      explanation: 'The amygdala assigns emotional salience and is essential for fear processing and fear conditioning, so bilateral damage blunts the recognition of and response to fear.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Overactivity of the mesolimbic dopamine pathway is most closely associated with which of the following?',
      options: [
        { id: 'a', text: 'Positive psychotic symptoms' },
        { id: 'b', text: 'Resting tremor and rigidity' },
        { id: 'c', text: 'Persistent low mood' },
        { id: 'd', text: 'Generalised seizures' },
      ],
      answerId: 'a',
      explanation: 'Excess dopamine in the mesolimbic pathway drives positive psychotic symptoms such as hallucinations and delusions, which is why dopamine-blocking antipsychotics reduce them.',
      tests: 'exam',
    },
  ],
};

export default behNeurobiologyBehavior;
