import type { Lecture } from '../../lib/types';

export const ifhClinicalCommunicationSkills: Lecture = {
  id: 'ifh-clinical-communication-skills',
  title: 'Clinical Communication Skills',
  system: 'community',
  source: 'L2 — Patient-Centered Medicine & Communication',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Family Health' },
    { kind: 'lecture', label: 'L2 PCM & Communication' },
    { kind: 'mechanism', label: 'Calgary–Cambridge' },
    { kind: 'exam', label: 'Open vs closed · ICE · signposting' },
  ],

  highYield: [
    '**The Calgary–Cambridge guide** maps the consultation as **five sequential tasks**: **initiate** the session → **gather** information → (**physical examination**) → **explain & plan** → **close** the session. Running **throughout** are two continuous threads: **providing structure** and **building the relationship**.',
    '**Open then closed questions.** **Open** questions (“Tell me more about the pain…”) invite the patient’s own story; **closed** questions (“Does it spread to your arm?”) pin down specifics. **Start open and funnel to closed** — leading with closed questions narrows too early and misses the real concern.',
    '**Elicit the patient’s perspective with ICE** — **I**deas, **C**oncerns, **E**xpectations (the sibling of FIFE from [[ifh-disease-vs-illness]]). Combine with **active listening**: do not interrupt (patients are often cut off within ~20 seconds), use silence, and pick up on cues.',
    '**Empathy = perceiving the patient’s feeling AND communicating that understanding back.** Naming and legitimising emotion (“I can see this has been frightening”) builds the relationship and is a learnable skill, not a fixed personality trait.',
    '**Structure and safety-net at the end.** Use **signposting** (“First your results, then the options…”), **chunk-and-check / teach-back** to confirm understanding, and **shared decision-making**. These skills deliver the [[ifh-patient-centered-clinical-method]] and set up [[ifh-motivational-interviewing]] and [[ifh-brief-counselling-5a]].',
  ],

  mechanism: {
    title: 'Initiate → gather (open→closed, ICE) → explain & plan → close, with structure & relationship throughout',
    steps: [
      { id: 's1', label: 'Initiate — build rapport and agree the agenda' },
      { id: 's2', label: 'Gather information — open then closed questions; explore ICE / FIFE', emphasis: 'key' },
      { id: 's3', label: 'Provide structure & build relationship throughout — signpost + empathy' },
      { id: 's4', label: 'Explain & plan — chunk-and-check, shared decision-making', emphasis: 'key' },
      { id: 's5', label: 'Close — summarise and safety-net' },
    ],
  },

  examFindings: [
    { sign: 'Open questions broaden the story; closed questions focus it', mechanism: 'Start open and funnel to closed to avoid premature narrowing', significance: 'key' },
    { sign: 'Empathy is perceiving AND communicating understanding', mechanism: 'Naming and legitimising emotion, not merely feeling it', significance: 'key' },
    { sign: 'Chunk-and-check / teach-back confirms understanding', mechanism: 'The patient restates the plan in their own words', significance: 'key' },
    { sign: 'Signposting gives the consultation a structure the patient can follow', mechanism: 'Flagging what comes next orients the patient', significance: 'supportive' },
  ],

  investigations: [
    { clue: '“Tell me more about how this started.”', meaning: 'An open question used to elicit the patient’s own narrative' },
    { clue: 'The clinician interrupts the patient within the first 20 seconds', meaning: 'Premature closure — the real agenda and concerns get missed' },
    { clue: '“First we’ll go through your results, then talk options — is that okay?”', meaning: 'Signposting — providing structure so the patient can follow' },
    { clue: 'Asking the patient to repeat the medication plan in their own words', meaning: 'Checking understanding via teach-back / chunk-and-check' },
  ],

  treatment: [
    { logic: 'Start open, then funnel to closed', detail: 'Open the data-gathering with broad questions to get the story, then use closed questions to clarify specifics.' },
    { logic: 'Signpost and safety-net every consultation', detail: 'Flag the structure as you go, and close by summarising and stating what to do if things change or worsen.' },
  ],

  mnemonics: [
    { hook: 'ICE = the patient’s perspective', expansion: ['Ideas — what they think is going on', 'Concerns — what they are worried about', 'Expectations — what they hope for'] },
    { hook: 'Calgary–Cambridge spine: Initiate, Gather, Explain, Close', expansion: ['Initiate the session', 'Gather information', 'Explain & plan', 'Close the session', '+ Structure & Relationship as continuous threads'] },
  ],

  traps: [
    {
      questionCategory: 'Open vs closed questions',
      wrongInstinct: 'Closed questions are more efficient, so lead with them',
      rightAnswer: 'Open questions come first to elicit the fullest story; closed questions clarify specifics afterwards',
      why: 'Leading with closed questions narrows the consultation too early and misses the patient’s real concern.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which of the following is an OPEN question?',
      options: [
        { id: 'a', text: 'Does the pain spread to your left arm?' },
        { id: 'b', text: 'Have you had this before?' },
        { id: 'c', text: 'Can you tell me more about what the pain is like?' },
        { id: 'd', text: 'Is the pain worse on exertion?' },
      ],
      answerId: 'c',
      explanation: 'An open question invites an unrestricted, narrative answer. The other three are closed questions answerable with “yes / no” or a single fact, used to clarify specifics later.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A clinician finishes explaining a new medication and asks the patient to repeat the plan back in their own words. What is the primary purpose of this technique?',
      options: [
        { id: 'a', text: 'To fill time at the end of the consultation' },
        { id: 'b', text: 'To check the patient’s understanding (teach-back)' },
        { id: 'c', text: 'To test the patient’s memory for its own sake' },
        { id: 'd', text: 'To avoid having to summarise the consultation' },
      ],
      answerId: 'b',
      explanation: 'Teach-back (chunk-and-check) confirms the patient has correctly understood the information and plan, surfacing any misunderstanding before the patient leaves the room.',
      tests: 'treatment',
    },
  ],
};

export default ifhClinicalCommunicationSkills;
