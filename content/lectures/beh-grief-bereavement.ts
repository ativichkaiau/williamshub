import type { Lecture } from '../../lib/types';

export const behGriefBereavement: Lecture = {
  id: 'beh-grief-bereavement',
  title: 'Grief, Mourning & Bereavement',
  system: 'community',
  source: 'L13 — Death, Dying & Bereavement',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Behavioral Science' },
    { kind: 'lecture', label: 'L13 Grief & Bereavement' },
    { kind: 'mechanism', label: 'Loss → integration' },
    { kind: 'exam', label: 'Grief vs depression' },
    { kind: 'disease', label: 'Prolonged grief' },
  ],

  highYield: [
    '**Distinguish the three terms:** **bereavement** is the objective state of having lost someone; **grief** is the internal emotional response to that loss; **mourning** is the outward, culturally-shaped expression of grief.',
    '**Normal (uncomplicated) grief comes in waves** of yearning, sadness and tearfulness, with disrupted sleep and appetite. **Transient illusions or hallucinations of the deceased** (briefly hearing or seeing them) are **normal**, not psychotic. Grief typically softens over months, with normal anniversary reactions.',
    'Grief versus major depression is a key discriminator ([[beh-mood-anxiety-disorders]]). Grief comes in waves, **self-esteem is preserved**, thoughts centre on the deceased, and the person can still feel pleasure. Depression is **pervasive**, with **worthlessness/guilt**, anhedonia and broad suicidal ideation.',
    '**Anticipatory grief** is grieving that begins before the loss, during a terminal illness ([[beh-death-dying]]). **Prolonged Grief Disorder** (DSM-5-TR) is intense, persistent, impairing grief beyond about **12 months** in adults, with relentless yearning and preoccupation.',
    '**Support the bereaved** with presence, listening and normalizing — avoid platitudes. Watch for complicated grief, depression, and suicide risk, and refer or treat when grief becomes prolonged or dangerous ([[beh-suicide-assessment]], [[beh-resilience]]).',
  ],

  mechanism: {
    title: 'Loss → grief → mourning → integration (versus complicated grief)',
    steps: [
      { id: 's1', label: 'Bereavement — the loss occurs' },
      { id: 's2', label: 'Acute grief — waves of yearning and sadness (normal)', emphasis: 'key' },
      { id: 's3', label: 'Mourning — culturally-shaped expression and adaptation' },
      { id: 's4', label: 'Integration — the loss is accommodated; life resumes', emphasis: 'key' },
      { id: 's5', label: 'If stuck: intense, impairing grief beyond ~12 months → prolonged grief disorder', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Bereavement is the loss, grief is the internal response, mourning is its outward expression', mechanism: 'Precise terms separate the objective event, the private feeling and the public behaviour', significance: 'key' },
    { sign: 'Transient hallucinations of the deceased and waves of sadness are normal grief', mechanism: 'These experiences are common and self-limiting, not evidence of psychosis', significance: 'supportive' },
    { sign: 'Grief differs from major depression: waves and preserved self-worth versus pervasive worthlessness', mechanism: 'Depression is global and includes guilt and anhedonia; grief is focused on the deceased and preserves esteem', significance: 'key' },
    { sign: 'Prolonged grief disorder is intense, persistent and impairing beyond ~12 months', mechanism: 'Grief that fails to integrate and keeps the person from functioning crosses into a diagnosable disorder', significance: 'key' },
  ],

  investigations: [
    { clue: 'A widow briefly hears her late husband’s voice and feels waves of sadness that ease between memories', meaning: 'Normal (uncomplicated) grief' },
    { clue: 'Pervasive worthlessness, guilt unrelated to the deceased, and loss of all pleasure after a loss', meaning: 'Major depression, not ordinary grief' },
    { clue: 'A spouse grieving during their partner’s terminal illness, before the death occurs', meaning: 'Anticipatory grief' },
    { clue: 'Relentless yearning and inability to function 18 months after a death', meaning: 'Prolonged grief disorder' },
    { clue: 'A bereaved person oscillates between confronting the loss and getting on with daily tasks', meaning: 'The dual-process model of coping with bereavement' },
  ],

  treatment: [
    { logic: 'Normalize and support', detail: 'Offer presence and active listening, validate the range of feelings, and avoid platitudes; most grief resolves with support alone ([[beh-communication-skills]]).' },
    { logic: 'Distinguish and treat depression or prolonged grief', detail: 'Screen for major depression and prolonged grief disorder, and refer or treat when grief is severe, persistent or impairing.' },
    { logic: 'Assess suicide risk in the bereaved', detail: 'Loss is a risk period; ask directly about suicidal thoughts and act on them ([[beh-suicide-assessment]]).' },
  ],

  mnemonics: [
    { hook: 'Grief WAVES vs depression’s CLOUD', expansion: ['Grief: Waves, self-worth intact, focused on the deceased, pleasure still possible', 'Depression: constant, worthlessness/guilt, anhedonia, pervasive suicidal thoughts'] },
  ],

  traps: [
    {
      questionCategory: 'Grief versus major depression',
      wrongInstinct: 'A grieving patient who briefly "hears" the deceased or feels intense sadness has a psychiatric disorder',
      rightAnswer: 'Waves of sadness and transient perceptions of the deceased are features of normal grief',
      why: 'Pervasiveness, worthlessness and anhedonia — not sadness or fleeting illusions — signal depression rather than normal grief.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which feature best distinguishes normal grief from major depressive disorder?',
      options: [
        { id: 'a', text: 'Presence of sadness and tearfulness' },
        { id: 'b', text: 'Preserved self-esteem, with dysphoria coming in waves focused on the deceased' },
        { id: 'c', text: 'Any disruption of sleep or appetite' },
        { id: 'd', text: 'Occurrence after the death of a loved one' },
      ],
      answerId: 'b',
      explanation: 'In normal grief, self-esteem is preserved and dysphoria comes in waves centred on the deceased. Pervasive worthlessness, guilt and anhedonia point to major depression.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The outward, culturally-patterned expression of a loss is best termed:',
      options: [
        { id: 'a', text: 'Bereavement' },
        { id: 'b', text: 'Grief' },
        { id: 'c', text: 'Mourning' },
        { id: 'd', text: 'Anticipatory grief' },
      ],
      answerId: 'c',
      explanation: 'Mourning is the outward, culturally-shaped expression of grief. Bereavement is the state of having lost someone; grief is the internal emotional response.',
      tests: 'mechanism',
    },
  ],
};

export default behGriefBereavement;
