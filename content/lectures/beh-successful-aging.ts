import type { Lecture } from '../../lib/types';

export const behSuccessfulAging: Lecture = {
  id: 'beh-successful-aging',
  title: 'Successful Aging (Rowe & Kahn)',
  system: 'community',
  source: 'L10 — Elderly Life Cycle & Successful Aging',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Behavioral Science' },
    { kind: 'lecture', label: 'L10 Successful Aging' },
    { kind: 'mechanism', label: 'Rowe & Kahn 3 pillars' },
    { kind: 'exam', label: 'Function + engagement' },
    { kind: 'treatment', label: 'Protective factors' },
  ],

  highYield: [
    '**Rowe & Kahn’s model (MacArthur, 1997) defines successful aging by three components:** **(1) low probability of disease and disability**, **(2) high cognitive and physical function**, and **(3) active engagement with life** (relationships plus productive activity). All three, not just the absence of illness, are required.',
    '**Successful aging is more than being disease-free.** A healthy but isolated, inactive older adult still fails the model — **engagement with life** is the component clinicians most often overlook ([[beh-aging-life-cycle]]).',
    '**Most protective factors are modifiable:** regular **physical activity**, **social connection**, **cognitive stimulation**, a good diet, and avoiding smoking and excess alcohol. This is why successful aging is substantially built, not merely inherited ([[beh-resilience]]).',
    '**Baltes’ SOC model — Selection, Optimization, Compensation** — describes how older adults adapt: they **select** fewer priorities, **optimize** their remaining strengths, and **compensate** for losses (e.g. hearing aids, memory aids).',
    '**Late-life depression is common but is NOT a normal part of ageing.** It is under-recognized and eminently treatable — screen for it rather than dismissing low mood as inevitable ([[beh-mood-anxiety-disorders]]); healthy ageing fits the biopsychosocial view of health ([[beh-biopsychosocial-model]]).',
  ],

  mechanism: {
    title: 'Rowe & Kahn: the three pillars of successful aging',
    steps: [
      { id: 's1', label: 'Avoid disease & disability (low risk-factor burden)', emphasis: 'key' },
      { id: 's2', label: 'Maintain high physical & cognitive function', emphasis: 'key' },
      { id: 's3', label: 'Stay actively engaged with life (relationships + productivity)', emphasis: 'key' },
      { id: 's4', label: 'All three together → successful aging' },
      { id: 's5', label: 'Sustained by modifiable protective factors (exercise, social ties, cognition)' },
    ],
  },

  examFindings: [
    { sign: 'Successful aging requires function AND engagement, not merely the absence of disease', mechanism: 'Rowe & Kahn deliberately set a positive, multidimensional standard beyond "not being sick"', significance: 'key' },
    { sign: 'The three pillars build on one another', mechanism: 'Avoiding disease enables high function, which in turn enables active engagement with life', significance: 'supportive' },
    { sign: 'The strongest protective factors are largely modifiable', mechanism: 'Physical activity, social ties and cognitive stimulation can be promoted at any age', significance: 'key' },
    { sign: 'Late-life depression is common but never a normal feature of ageing', mechanism: 'It is under-detected yet highly treatable, so active screening changes outcomes', significance: 'key' },
  ],

  investigations: [
    { clue: 'A 75-year-old with controlled risk factors, independent daily living, who volunteers and sees friends weekly', meaning: 'All three Rowe & Kahn pillars met — successful aging' },
    { clue: 'An older adult free of disease but socially isolated and inactive', meaning: 'Fails the engagement pillar despite good physical health' },
    { clue: 'A pianist plays fewer pieces, practises them more, and slows the tempo to hide decline', meaning: 'Selection, optimization and compensation (Baltes’ SOC) in action' },
    { clue: 'Persistent low mood, anhedonia and hopelessness in an 80-year-old', meaning: 'Late-life depression to be assessed and treated, not written off as ageing' },
  ],

  treatment: [
    { logic: 'Promote the modifiable protective factors', detail: 'Prescribe physical activity, encourage social engagement and cognitive stimulation, and address smoking, alcohol and cardiovascular risk.' },
    { logic: 'Screen for and treat late-life depression', detail: 'Do not attribute low mood, withdrawal or somatic complaints to age; assess and treat as you would at any age ([[beh-mood-anxiety-disorders]]).' },
    { logic: 'Support SOC adaptation', detail: 'Help patients select realistic priorities, optimize strengths, and compensate for losses with aids and support so engagement is maintained.' },
  ],

  mnemonics: [
    { hook: 'Rowe & Kahn = "Disease-free, Functioning, Engaged"', expansion: ['Low probability of disease and disability', 'High physical and cognitive function', 'Active engagement with life'] },
  ],

  traps: [
    {
      questionCategory: 'What counts as successful aging',
      wrongInstinct: 'An older adult who has no diseases is, by definition, aging successfully',
      rightAnswer: 'Successful aging also requires high function and active engagement with life',
      why: 'Rowe & Kahn set three pillars; the absence of disease alone omits function and engagement.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which of the following is NOT one of the three components of Rowe & Kahn’s successful aging model?',
      options: [
        { id: 'a', text: 'Low probability of disease and disability' },
        { id: 'b', text: 'High cognitive and physical function' },
        { id: 'c', text: 'Active engagement with life' },
        { id: 'd', text: 'Complete freedom from any medication' },
      ],
      answerId: 'd',
      explanation: 'The three pillars are avoiding disease/disability, maintaining high function, and active engagement with life. Being free of all medication is not part of the model.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'An 80-year-old adjusts to declining stamina by focusing on a few valued activities, practising them harder, and using aids for the rest. This best illustrates:',
      options: [
        { id: 'a', text: 'Selection, optimization and compensation' },
        { id: 'b', text: 'Ego integrity vs despair' },
        { id: 'c', text: 'The General Adaptation Syndrome' },
        { id: 'd', text: 'Learned helplessness' },
      ],
      answerId: 'a',
      explanation: 'Baltes’ SOC model describes adaptive ageing: selecting fewer priorities, optimizing remaining strengths, and compensating for losses.',
      tests: 'exam',
    },
  ],
};

export default behSuccessfulAging;
