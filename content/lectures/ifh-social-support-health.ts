import type { Lecture } from '../../lib/types';

export const ifhSocialSupportHealth: Lecture = {
  id: 'ifh-social-support-health',
  title: 'Social Support & Health',
  system: 'community',
  source: 'L5 — Psychosocial Influences on Health',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Family Health' },
    { kind: 'lecture', label: 'L5 Psychosocial Influences' },
    { kind: 'mechanism', label: 'Stress-buffering' },
    { kind: 'exam', label: 'Four types of support · isolation' },
  ],

  highYield: [
    '**Social support = the resources other people provide** that help us cope. There are **four types**: **Emotional** (love, empathy, caring), **Instrumental / tangible** (practical help — money, transport, labour), **Informational** (advice, guidance) and **Appraisal** (feedback and affirmation for self-evaluation).',
    '**Structure vs function.** A **social network** is the **structure** — the web of ties (size, density, closeness). **Social support** is the **function** those ties deliver. A large network is not automatically supportive, and a small one can be highly supportive.',
    '**Two mechanisms of benefit.** The **main / direct effect** — support improves health regardless of stress level. The **stress-buffering hypothesis** — support is **especially protective under high stress**, cushioning the appraisal of threat and the response (tying into [[ifh-stress-life-events]]).',
    '**Isolation and loneliness are lethal.** Social isolation and loneliness raise **all-cause mortality** by a magnitude comparable to major behavioural risks like smoking, and increase cardiovascular disease, depression and dementia. Support also tracks the **socioeconomic gradient**, linking it to the [[ifh-biopsychosocial-model]].',
    '**Assess and mobilise it.** Screen support with the **family APGAR** and **SCREEM** from [[ifh-family-assessment-tools]], and for isolated or [[ifh-special-populations-vulnerable]] patients, actively **mobilise networks and community resources** — a core family-medicine task that shapes [[ifh-family-health-impact]].',
  ],

  mechanism: {
    title: 'Network → four support types → buffers stress → better coping & health → (isolation → worse outcomes)',
    steps: [
      { id: 's1', label: 'Social network provides ties and resources' },
      { id: 's2', label: 'Support flows in four forms — emotional, instrumental, informational, appraisal', emphasis: 'key' },
      { id: 's3', label: 'Buffers stress appraisal and the response (stress-buffering)', emphasis: 'key' },
      { id: 's4', label: 'Better coping, adherence and health behaviours' },
      { id: 's5', label: 'Isolation / loneliness → worse outcomes and higher mortality', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Four support types: emotional, instrumental, informational, appraisal', mechanism: 'Each meets a different need; match the type to the gap', significance: 'key' },
    { sign: 'Network is the structure; support is the function', mechanism: 'Ties exist (structure) but may or may not deliver support (function)', significance: 'key' },
    { sign: 'Stress-buffering — support is most protective under high stress', mechanism: 'It cushions the appraisal of threat and the physiological response', significance: 'key' },
    { sign: 'Loneliness carries mortality risk comparable to major behavioural risks', mechanism: 'Chronic isolation acts through stress, behaviour and inflammation', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A neighbour drives the patient to every chemotherapy appointment', meaning: 'Instrumental (tangible) support — practical, hands-on help' },
    { clue: 'A peer who has the same diagnosis explains what to expect', meaning: 'Informational support — advice and guidance' },
    { clue: 'An isolated widower with poor adherence and low mood', meaning: 'Social isolation harming health outcomes — a target for intervention' },
    { clue: 'A strong support network softens the impact of a major life event', meaning: 'The stress-buffering effect in action' },
  ],

  treatment: [
    { logic: 'Assess support and find the gaps', detail: 'Use the family APGAR and SCREEM to gauge perceived support and identify which of the four types is missing.' },
    { logic: 'Mobilise networks and community resources', detail: 'For isolated patients, actively connect them to family, peers and community services rather than treating in isolation.' },
  ],

  mnemonics: [
    { hook: 'Four support types = “EIIA”', expansion: ['Emotional — caring and empathy', 'Instrumental — tangible, practical help', 'Informational — advice and guidance', 'Appraisal — feedback and affirmation'] },
    { hook: 'Network = structure; Support = function', expansion: ['Count the ties → the network', 'What the ties actually provide → the support'] },
  ],

  traps: [
    {
      questionCategory: 'Type of social support',
      wrongInstinct: 'Giving money or driving someone to appointments counts as emotional support',
      rightAnswer: 'Practical, tangible help is instrumental support; emotional support is empathy, caring and love',
      why: 'The four types are distinct, and matching the right type to the patient’s actual need is the whole point.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient recovering from surgery has a neighbour who cooks her meals and drives her to appointments. Which type of social support is this?',
      options: [
        { id: 'a', text: 'Emotional support' },
        { id: 'b', text: 'Instrumental (tangible) support' },
        { id: 'c', text: 'Informational support' },
        { id: 'd', text: 'Appraisal support' },
      ],
      answerId: 'b',
      explanation: 'Cooking meals and providing transport are practical, tangible resources — instrumental support. Emotional support is empathy and caring, informational is advice, and appraisal is affirming feedback.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The stress-buffering hypothesis of social support proposes that:',
      options: [
        { id: 'a', text: 'Social support only helps people who are not under stress' },
        { id: 'b', text: 'Social support is especially protective for health when stress is high' },
        { id: 'c', text: 'Social support has no measurable effect on the stress response' },
        { id: 'd', text: 'Larger networks are always more supportive than smaller ones' },
      ],
      answerId: 'b',
      explanation: 'The stress-buffering model holds that support is particularly protective under high stress, cushioning the appraisal of threat and the physiological response. This contrasts with the main / direct-effect model, in which support helps regardless of stress level.',
      tests: 'mechanism',
    },
  ],
};

export default ifhSocialSupportHealth;
