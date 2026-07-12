import type { Lecture } from '../../lib/types';

export const behAgingLifeCycle: Lecture = {
  id: 'beh-aging-life-cycle',
  title: 'The Elderly Life Cycle & Ageism',
  system: 'community',
  source: 'L10 — Elderly Life Cycle & Successful Aging',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Behavioral Science' },
    { kind: 'lecture', label: 'L10 Elderly Life Cycle' },
    { kind: 'mechanism', label: 'Integrity vs despair' },
    { kind: 'exam', label: 'Normal vs pathological ageing' },
    { kind: 'disease', label: 'Ageism' },
  ],

  highYield: [
    '**Normal cognitive ageing is not dementia.** With age, **processing speed slows** and **fluid intelligence** (novel problem-solving, working memory) declines, while **crystallized intelligence** (vocabulary, accumulated knowledge) is preserved. Benign age-related forgetfulness does **not** impair daily function — a decline that does should be worked up, not dismissed ([[beh-mental-status-exam]]).',
    '**Late adulthood is Erikson’s 8th psychosocial stage: ego integrity vs despair.** Through a **life review** the person either accepts their life as meaningful and inevitable (**integrity**, yielding the virtue of **wisdom**) or is overwhelmed by regret and fear of death (**despair**) ([[beh-erikson-psychosocial]]).',
    '**Ageing is a time of accumulating losses and transitions:** retirement and role change, bereavement of spouse and peers, sensory decline, and reduced independence — all of which shape mental health in later life ([[beh-death-dying]]).',
    '**Ageism** — prejudice, stereotyping or discrimination based on age (term coined by **Robert Butler**, 1969) — is common in healthcare and leads clinicians to under-investigate, under-treat, and talk past older patients.',
    '**Most older adults are neither demented nor depressed.** Late life is heterogeneous, and healthy, engaged ageing is the norm ([[beh-successful-aging]]); late-life depression is common but treatable, never a normal part of ageing ([[beh-mood-anxiety-disorders]]).',
  ],

  mechanism: {
    title: 'Erikson’s 8th stage: life review → ego integrity vs despair',
    steps: [
      { id: 's1', label: 'Enter late adulthood — the final psychosocial crisis' },
      { id: 's2', label: 'Life review: reflect on one’s life as it was lived', emphasis: 'key' },
      { id: 's3', label: 'Accept life as meaningful & finite → ego integrity', emphasis: 'key' },
      { id: 's4', label: 'Regret, missed goals, dread of death → despair', emphasis: 'key' },
      { id: 's5', label: 'Successful resolution yields the virtue of wisdom' },
    ],
  },

  examFindings: [
    { sign: 'Fluid intelligence and processing speed decline, but crystallized intelligence is preserved', mechanism: 'Novel problem-solving depends on speed and working memory; stored knowledge and vocabulary are robust to normal ageing', significance: 'key' },
    { sign: 'Benign age-related forgetfulness does not impair independent function', mechanism: 'This is the clinical line separating normal ageing from dementia, which erodes daily functioning', significance: 'key' },
    { sign: 'Ageism is prejudice or discrimination based on chronological age', mechanism: 'Stereotypes lead to under-investigation and dismissing symptoms as "just old age"', significance: 'key' },
    { sign: 'Late adulthood corresponds to Erikson’s integrity-versus-despair stage', mechanism: 'The life review either integrates a meaningful life or ends in regret and despair', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A 72-year-old takes longer to recall a name but retrieves it later and lives independently', meaning: 'Normal age-related cognitive change — not dementia' },
    { clue: 'A physician addresses the daughter about treatment, assuming the older patient "won’t understand"', meaning: 'Ageism enacted in clinical practice' },
    { clue: 'An elderly patient reflects on their life with satisfaction and calmly accepts approaching death', meaning: 'Ego integrity — Erikson’s 8th stage resolved positively' },
    { clue: 'Preoccupation with missed chances, bitterness and terror of dying near the end of life', meaning: 'Despair — the negative pole of the final stage' },
  ],

  treatment: [
    { logic: 'Screen rather than assume', detail: 'Actively distinguish normal ageing from treatable pathology (depression, delirium, dementia) instead of attributing new symptoms to age ([[beh-mood-anxiety-disorders]]).' },
    { logic: 'Support the life-review process', detail: 'Reminiscence and validating a patient’s narrative help consolidate ego integrity rather than despair.' },
    { logic: 'Confront ageism in your own practice', detail: 'Address the older patient directly, allow time, and offer the same work-up and treatment you would a younger patient.' },
  ],

  mnemonics: [
    { hook: 'Crystallized stays, Fluid fades', expansion: ['Crystallized intelligence (vocabulary, knowledge) is preserved with age', 'Fluid intelligence (speed, novel problem-solving) declines', 'Function preserved = normal ageing; function lost = pathology'] },
  ],

  traps: [
    {
      questionCategory: 'Normal ageing versus dementia',
      wrongInstinct: 'Any memory slip in an older adult signals early dementia',
      rightAnswer: 'Benign age-related forgetfulness that does not impair daily function is normal ageing',
      why: 'The discriminating feature is functional impairment, not the mere presence of forgetfulness.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which cognitive ability is typically PRESERVED in normal ageing?',
      options: [
        { id: 'a', text: 'Processing speed' },
        { id: 'b', text: 'Fluid intelligence' },
        { id: 'c', text: 'Crystallized intelligence' },
        { id: 'd', text: 'Working memory' },
      ],
      answerId: 'c',
      explanation: 'Crystallized intelligence — vocabulary and accumulated knowledge — is preserved with normal ageing, whereas processing speed, working memory and fluid intelligence decline.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'According to Erikson, the central psychosocial task of late adulthood is:',
      options: [
        { id: 'a', text: 'Generativity vs stagnation' },
        { id: 'b', text: 'Ego integrity vs despair' },
        { id: 'c', text: 'Identity vs role confusion' },
        { id: 'd', text: 'Intimacy vs isolation' },
      ],
      answerId: 'b',
      explanation: 'The eighth and final stage is ego integrity versus despair: through a life review the older adult either accepts life as meaningful (integrity) or is consumed by regret (despair).',
      tests: 'mechanism',
    },
  ],
};

export default behAgingLifeCycle;
