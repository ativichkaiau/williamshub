import type { Lecture } from '../../lib/types';

export const behCommunicationSkills: Lecture = {
  id: 'beh-communication-skills',
  title: 'Clinical Communication Skills',
  system: 'community',
  source: 'L2 — Doctor-Patient Relationship & Communication',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Behavioral Science' },
    { kind: 'lecture', label: 'L2 Communication Skills' },
    { kind: 'mechanism', label: 'Calgary–Cambridge guide' },
    { kind: 'exam', label: 'Open vs closed questions' },
    { kind: 'treatment', label: 'Patient-centred interviewing' },
  ],

  highYield: [
    '**The Calgary–Cambridge guide structures the consultation into five sequential tasks:** (1) **initiating** the session, (2) **gathering** information, (3) **physical examination**, (4) **explanation & planning**, and (5) **closing** the session — held together by two continuous threads, **providing structure** and **building the relationship** ([[beh-doctor-patient-relationship]]).',
    '**Open before closed — the funnel technique.** **Open questions** (“Tell me more about that”) invite the patient’s own story and are used first; **closed questions** (“Does it hurt here?”) narrow to specifics later. Opening closed loses the story; use silence and minimal prompts to keep it flowing.',
    '**Active listening** means attending fully, not interrupting, and reflecting back: paraphrasing, summarising and using **silence**. A useful check is **WAIT — “Why Am I Talking?”**. Summarising back to the patient both confirms accuracy and shows you listened.',
    '**Empathy is named and legitimised emotion — and differs from sympathy.** Empathy is understanding and reflecting the patient’s feeling (“This has clearly been frightening for you”); sympathy is feeling sorry for them. Frameworks such as **NURSE** (Name, Understand, Respect, Support, Explore) make empathy explicit ([[beh-difficult-encounters]]).',
    '**Patient-centred interviewing elicits the patient’s perspective — ICE:** their **Ideas** about what is wrong, their **Concerns**/fears, and their **Expectations** of the visit. Most emotional meaning is carried **non-verbally**, so watch congruence and use **SOLER** posture (Squarely, Open, Lean, Eye contact, Relaxed) ([[beh-mental-status-exam]]).',
  ],

  mechanism: {
    title: 'The Calgary–Cambridge consultation: five tasks with two continuous threads',
    steps: [
      { id: 's1', label: 'Initiate — greet, build rapport, agree the agenda' },
      { id: 's2', label: 'Gather information — open questions first, then closed (funnel)', emphasis: 'key' },
      { id: 's3', label: 'Physical examination' },
      { id: 's4', label: 'Explain & plan — check understanding, share decisions', emphasis: 'key' },
      { id: 's5', label: 'Close — safety-net, summarise, agree next steps' },
    ],
  },

  examFindings: [
    { sign: 'Start with open questions, then move to closed ones (the funnel)', mechanism: 'Open questions surface the patient’s story before you narrow to detail', significance: 'key' },
    { sign: 'Eliciting Ideas, Concerns and Expectations (ICE) defines patient-centred interviewing', mechanism: 'It brings the patient’s own perspective into the consultation', significance: 'key' },
    { sign: 'Empathy names and legitimises emotion; sympathy merely pities', mechanism: 'Naming the feeling makes the patient feel understood and builds trust', significance: 'key' },
    { sign: 'Most emotional communication is non-verbal', mechanism: 'Tone, posture and facial expression carry more affect than words; watch for incongruence', significance: 'supportive' },
  ],

  investigations: [
    { clue: '“Tell me more about how this started” versus “Is the pain sharp or dull?”', meaning: 'Open versus closed questioning — the open form comes first' },
    { clue: 'A patient says “I’m fine” while looking tearful and withdrawn', meaning: 'Non-verbal incongruence — explore the feeling rather than accept the words' },
    { clue: 'Asking “What do you think is causing this?”', meaning: 'Eliciting the patient’s Ideas — the “I” of ICE' },
    { clue: 'The doctor summarises the history back and asks “Have I got that right?”', meaning: 'Active listening and checking — confirms accuracy and signals attention' },
  ],

  treatment: [
    { logic: 'Structure the interview and funnel your questions', detail: 'Follow the Calgary–Cambridge tasks, opening each topic with broad questions and closing in on specifics only once the patient’s account is out.' },
    { logic: 'Respond to emotion before piling on information', detail: 'When feeling surfaces, name it with an empathic statement (NURSE) first; information given over unaddressed emotion is not absorbed.' },
  ],

  mnemonics: [
    { hook: '“ICE” — the patient’s perspective', expansion: ['Ideas — what they think is wrong', 'Concerns — what they fear', 'Expectations — what they want from the visit'] },
    { hook: '“SOLER” — attentive non-verbal posture', expansion: ['Sit Squarely', 'Open posture', 'Lean slightly forward', 'Eye contact', 'Relaxed'] },
  ],

  traps: [
    {
      questionCategory: 'Empathy versus sympathy',
      wrongInstinct: 'Saying “I feel so sorry for you” is the empathic response',
      rightAnswer: 'Empathy names and reflects the patient’s emotion (“that sounds frightening”); sympathy expresses your own pity',
      why: 'Empathy conveys understanding of the patient’s experience, which builds trust; sympathy centres the doctor’s feelings.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'When gathering the history, which type of question should generally be used first?',
      options: [
        { id: 'a', text: 'Closed questions, to save time' },
        { id: 'b', text: 'Leading questions, to confirm your hypothesis' },
        { id: 'c', text: 'Open questions, to let the patient tell their story' },
        { id: 'd', text: 'Multiple-choice questions, to structure the answer' },
      ],
      answerId: 'c',
      explanation: 'The funnel technique opens with broad, open questions so the patient’s own account emerges, then narrows to closed questions for specific detail. Starting closed cuts off the story.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A doctor asks, “What do you think might be causing your symptoms?” Which component of patient-centred interviewing is this?',
      options: [
        { id: 'a', text: 'Ideas' },
        { id: 'b', text: 'Concerns' },
        { id: 'c', text: 'Expectations' },
        { id: 'd', text: 'Examination' },
      ],
      answerId: 'a',
      explanation: 'Eliciting the patient’s Ideas — their own explanatory model of the problem — is the first element of ICE (Ideas, Concerns, Expectations), the core of patient-centred interviewing.',
      tests: 'mechanism',
    },
  ],
};

export default behCommunicationSkills;
