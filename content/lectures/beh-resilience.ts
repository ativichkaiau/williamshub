import type { Lecture } from '../../lib/types';

export const behResilience: Lecture = {
  id: 'beh-resilience',
  title: 'Resilience, Burnout & Physician Wellbeing',
  system: 'community',
  source: 'L12 — Stress & Resilience',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Behavioral Science' },
    { kind: 'lecture', label: 'L12 Resilience' },
    { kind: 'mechanism', label: 'Adversity → adaptation' },
    { kind: 'exam', label: 'Maslach burnout triad' },
    { kind: 'treatment', label: 'Wellbeing' },
  ],

  highYield: [
    '**Resilience is the capacity to adapt well in the face of adversity, trauma or significant stress ([[beh-stress-response]]).** Crucially it is **not a fixed trait** — it can be learned and strengthened. Ann Masten called it "ordinary magic" because it arises from common human resources, not rare gifts.',
    '**Protective factors are internal and external.** Internal: **optimism, self-efficacy, emotion regulation, cognitive flexibility, and a sense of meaning/purpose** ([[beh-humanistic-theory]]). External: **social support, secure relationships, and community resources**. At least one supportive relationship is the most consistent protective factor.',
    '**Resilience is built through** strong relationships, realistic goal-setting, self-care, positive reappraisal, and meaning-making — the same coping skills that buffer the stress response.',
    '**Physician burnout (Maslach) has three dimensions:** **emotional exhaustion**, **depersonalization/cynicism** (detachment from patients), and **reduced personal accomplishment**. It raises the risk of medical errors, poor care, attrition and even suicide ([[beh-suicide-assessment]]).',
    '**Burnout is driven largely by system and workload factors, not personal weakness.** The most effective remedies are organizational (workload, autonomy, culture) alongside individual wellbeing practices — telling doctors to simply "be more resilient" misplaces the blame ([[beh-mood-anxiety-disorders]]).',
  ],

  mechanism: {
    title: 'Adversity → protective factors → adaptation (the resilience process)',
    steps: [
      { id: 's1', label: 'Adversity or significant stressor strikes' },
      { id: 's2', label: 'Protective factors buffer the impact (support, optimism, meaning)', emphasis: 'key' },
      { id: 's3', label: 'Active coping & positive reappraisal', emphasis: 'key' },
      { id: 's4', label: 'Adaptation / recovery — "bounce back"', emphasis: 'key' },
      { id: 's5', label: 'Strengthened capacity for the next challenge' },
    ],
  },

  examFindings: [
    { sign: 'Resilience is not a fixed trait — it can be learned and strengthened', mechanism: 'It draws on ordinary, modifiable resources (relationships, skills, meaning) rather than innate endowment', significance: 'key' },
    { sign: 'The most consistent protective factor is at least one supportive relationship', mechanism: 'Connection provides safety, perspective and practical help during adversity', significance: 'key' },
    { sign: 'Burnout has three dimensions: exhaustion, depersonalization, and low accomplishment', mechanism: 'Maslach’s triad separates burnout from ordinary tiredness and from depression', significance: 'key' },
    { sign: 'Burnout is driven mainly by system and workload factors', mechanism: 'Excess demand, low control and poor culture generate burnout regardless of individual grit', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A child facing severe adversity thrives because of one stable, caring adult in their life', meaning: 'The key protective factor for resilience — a supportive relationship' },
    { clue: 'A resident feels emotionally drained, cynical and detached from patients, and ineffective', meaning: 'The three dimensions of burnout (Maslach)' },
    { clue: 'Reframing a painful setback as a challenge to learn and grow from', meaning: 'Positive cognitive reappraisal — a core resilience skill' },
    { clue: 'A hospital reduces workload and increases clinician autonomy to cut burnout', meaning: 'A system-level intervention — more effective than exhorting individuals to cope harder' },
  ],

  treatment: [
    { logic: 'Build individual resilience skills', detail: 'Foster social connection, positive reappraisal, realistic goals, meaning and self-care to strengthen adaptive coping.' },
    { logic: 'Address burnout at the system level', detail: 'Modify workload, improve autonomy and team culture — the drivers with the largest effect on physician burnout.' },
    { logic: 'Protect wellbeing and screen for its failure', detail: 'Normalize help-seeking and watch for depression and suicidality, which burnout can mask ([[beh-suicide-assessment]]).' },
  ],

  mnemonics: [
    { hook: 'Burnout = "Exhausted, Detached, Ineffective"', expansion: ['Emotional exhaustion', 'Depersonalization / cynicism', 'Reduced personal accomplishment'] },
  ],

  traps: [
    {
      questionCategory: 'Nature of resilience and burnout',
      wrongInstinct: 'Burnout reflects a personal lack of resilience, fixed by individual effort',
      rightAnswer: 'Burnout is driven largely by system and workload factors and is best addressed organizationally',
      why: 'Framing burnout as individual weakness ignores its strongest, modifiable structural causes.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which set best describes the three dimensions of burnout in Maslach’s model?',
      options: [
        { id: 'a', text: 'Denial, anger and acceptance' },
        { id: 'b', text: 'Emotional exhaustion, depersonalization and reduced personal accomplishment' },
        { id: 'c', text: 'Alarm, resistance and exhaustion' },
        { id: 'd', text: 'Optimism, self-efficacy and social support' },
      ],
      answerId: 'b',
      explanation: 'Maslach defined burnout by emotional exhaustion, depersonalization/cynicism, and a reduced sense of personal accomplishment. Alarm–resistance–exhaustion is Selye’s GAS.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which factor is the most consistently identified protector of resilience across studies?',
      options: [
        { id: 'a', text: 'High innate intelligence' },
        { id: 'b', text: 'Financial wealth' },
        { id: 'c', text: 'At least one supportive relationship' },
        { id: 'd', text: 'Avoiding all stressful situations' },
      ],
      answerId: 'c',
      explanation: 'A supportive relationship is the single most consistent protective factor. Resilience is built on ordinary resources such as connection, meaning and adaptive coping.',
      tests: 'investigation',
    },
  ],
};

export default behResilience;
