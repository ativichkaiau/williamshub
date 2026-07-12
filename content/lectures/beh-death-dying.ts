import type { Lecture } from '../../lib/types';

export const behDeathDying: Lecture = {
  id: 'beh-death-dying',
  title: 'Death & Dying: Kübler-Ross & the Dying Patient',
  system: 'community',
  source: 'L13 — Death, Dying & Bereavement',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Behavioral Science' },
    { kind: 'lecture', label: 'L13 Death & Dying' },
    { kind: 'mechanism', label: 'Kübler-Ross DABDA' },
    { kind: 'exam', label: 'Stages not linear' },
    { kind: 'treatment', label: 'Palliative & SPIKES' },
  ],

  highYield: [
    '**Kübler-Ross (1969) described five stages of dying and loss — DABDA: Denial, Anger, Bargaining, Depression, Acceptance.** They are a **descriptive framework, not an obligatory sequence** — patients may skip stages, revisit them, or move through them out of order, and not everyone reaches acceptance.',
    '**The model applies to any major loss,** not only terminal diagnosis (e.g. loss of a limb, a relationship, or a role), and overlaps with normal grief ([[beh-grief-bereavement]]).',
    '**Break bad news with the SPIKES protocol:** **S**etting, **P**erception (what the patient already knows), **I**nvitation (how much they want to know), **K**nowledge (give it clearly, in small pieces), **E**motions (respond with empathy), **S**trategy/summary ([[beh-difficult-encounters]], [[beh-communication-skills]]).',
    '**The dying patient’s core needs are comfort, dignity, honesty, autonomy, and not being abandoned.** Presence and truthful communication matter as much as symptom control.',
    '**Palliative care targets quality of life and symptom relief, not cure, and can run alongside curative treatment — it is not "giving up".** Advance care planning (advance directives, healthcare proxy, DNR) preserves the patient’s autonomy when they can no longer speak for themselves.',
  ],

  mechanism: {
    title: 'Kübler-Ross (DABDA): the five stages of dying — not a fixed order',
    steps: [
      { id: 's1', label: 'Denial — "this can’t be happening to me"' },
      { id: 's2', label: 'Anger — "why me? it isn’t fair"' },
      { id: 's3', label: 'Bargaining — "if I do X, let me live longer"' },
      { id: 's4', label: 'Depression — mourning the losses to come', emphasis: 'key' },
      { id: 's5', label: 'Acceptance — coming to terms with the reality', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'The five stages are descriptive, not a mandatory linear sequence', mechanism: 'Patients skip, repeat and reorder stages; forcing them through a fixed path is a misuse of the model', significance: 'key' },
    { sign: 'The Kübler-Ross stages apply to any major loss, not only dying', mechanism: 'The same emotional process accompanies bereavement, disability and other losses', significance: 'supportive' },
    { sign: 'The dying patient’s central needs are comfort, dignity, honesty and not being abandoned', mechanism: 'Existential and relational needs stand alongside physical symptom control', significance: 'key' },
    { sign: 'Palliative care is not "giving up" and can accompany curative treatment', mechanism: 'It focuses on quality of life and symptom relief regardless of prognosis', significance: 'key' },
  ],

  investigations: [
    { clue: 'A newly diagnosed patient insists the laboratory must have mixed up the results', meaning: 'Denial — the first Kübler-Ross stage' },
    { clue: 'A patient promises to "change everything" if only the cancer goes into remission', meaning: 'Bargaining' },
    { clue: 'A clinician uses Setting, Perception, Invitation, Knowledge, Emotions and Strategy to deliver a diagnosis', meaning: 'The SPIKES protocol for breaking bad news' },
    { clue: 'A patient with advanced disease chooses comfort-focused care and completes an advance directive', meaning: 'Advance care planning and a palliative approach preserving autonomy' },
  ],

  treatment: [
    { logic: 'Meet the patient where they are', detail: 'Support whatever stage the patient is in rather than pushing them toward acceptance on a schedule.' },
    { logic: 'Break bad news with SPIKES', detail: 'Prepare the setting, find out what the patient knows and wants, give information in small pieces, respond to emotion, and agree a plan ([[beh-difficult-encounters]]).' },
    { logic: 'Provide palliative comfort and protect autonomy', detail: 'Control symptoms, preserve dignity, and honour advance directives and the patient’s goals of care.' },
  ],

  mnemonics: [
    { hook: 'DABDA', expansion: ['Denial', 'Anger', 'Bargaining', 'Depression', 'Acceptance'] },
  ],

  traps: [
    {
      questionCategory: 'How the Kübler-Ross stages work',
      wrongInstinct: 'A dying patient must pass through all five stages in order and end in acceptance',
      rightAnswer: 'The stages are descriptive and variable — patients may skip, revisit or reorder them, and some never reach acceptance',
      why: 'Treating DABDA as an obligatory sequence misapplies a descriptive framework as a prescription.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which statement about the Kübler-Ross stages of dying is MOST accurate?',
      options: [
        { id: 'a', text: 'They always occur in a fixed order ending in acceptance' },
        { id: 'b', text: 'They are descriptive and may be skipped, repeated or reordered' },
        { id: 'c', text: 'They apply only to terminal cancer' },
        { id: 'd', text: 'Failure to reach acceptance indicates a pathological reaction' },
      ],
      answerId: 'b',
      explanation: 'The stages are a descriptive framework, not an obligatory sequence. Patients may skip, revisit or reorder them, the model applies to many losses, and not reaching acceptance is not itself pathological.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'In the SPIKES protocol for breaking bad news, what should you establish BEFORE delivering the medical facts?',
      options: [
        { id: 'a', text: 'The patient’s current perception and how much they wish to know' },
        { id: 'b', text: 'The full treatment cost estimate' },
        { id: 'c', text: 'A signed advance directive' },
        { id: 'd', text: 'The family’s preferred prognosis' },
      ],
      answerId: 'a',
      explanation: 'SPIKES has you assess the patient’s Perception and issue an Invitation — finding out what they already understand and how much detail they want — before giving Knowledge.',
      tests: 'treatment',
    },
  ],
};

export default behDeathDying;
