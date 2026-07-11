import type { Lecture } from '../../lib/types';

export const ersResearchQuestionProtocol: Lecture = {
  id: 'ers-research-question-protocol',
  title: 'Research Question, Protocol & Ethics',
  system: 'research',
  source: 'L1 — Research Question, Protocol & Ethics',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Research' },
    { kind: 'lecture', label: 'L1 Question & Protocol' },
    { kind: 'mechanism', label: 'FINER · PICO' },
    { kind: 'exam', label: 'Objective vs hypothesis · IRB' },
  ],

  highYield: [
    '**A good research question is FINER:** **F**easible, **I**nteresting, **N**ovel, **E**thical, **R**elevant. Structure it with **PICO(T):** **P**opulation, **I**ntervention/exposure, **C**omparison, **O**utcome (and **T**ime) — PICO seeds the objective, the design and the search strategy.',
    '**Objective vs hypothesis vs question.** The **objective** states what the study will do (measure/compare); the **hypothesis** is the testable prediction (H₀ vs H₁). The **primary objective** is singular and **drives the sample-size calculation** and the primary analysis; secondary objectives are exploratory.',
    '**The protocol is the pre-specified plan** (background → objectives → design → population & sampling → variables & measurement → sample size → analysis plan → ethics/timeline). Writing it **before** data collection prevents **HARKing** and outcome-switching.',
    '**Ethics: the three core principles** — **respect for autonomy** (informed consent), **beneficence/non-maleficence** (favourable risk–benefit), and **justice** (fair selection). Rooted in the **Declaration of Helsinki**; consent must be **informed, voluntary and competent**.',
    '**Prospective ethics approval is mandatory.** An **IRB / Ethics Committee** must approve human research **before** it starts; vulnerable groups (children, pregnant women, prisoners) need extra safeguards. Data handling must protect **confidentiality**.',
  ],

  mechanism: {
    title: 'Idea → FINER/PICO → objective & hypothesis → protocol → ethics → conduct',
    steps: [
      { id: 's1', label: 'Screen the idea with FINER' },
      { id: 's2', label: 'Frame with PICO(T) → concrete objective', emphasis: 'key' },
      { id: 's3', label: 'Primary objective → hypothesis → sample size', emphasis: 'key' },
      { id: 's4', label: 'Pre-specify the whole plan in the protocol' },
      { id: 's5', label: 'Obtain IRB/EC approval + informed consent before starting', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'The primary objective drives the sample-size calculation', mechanism: 'The study is powered for one main comparison', significance: 'key' },
    { sign: 'PICO structures question → design → search', mechanism: 'Each element maps to a study component', significance: 'key' },
    { sign: 'IRB/EC approval is required before enrolment', mechanism: 'Prospective review protects participants', significance: 'key' },
    { sign: 'Informed consent = informed + voluntary + competent', mechanism: 'Operationalises respect for autonomy', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A study idea that needs 5,000 patients the hospital will never recruit', meaning: 'Fails the “Feasible” test of FINER' },
    { clue: 'Rewriting “does the drug help?” into P/I/C/O terms', meaning: 'Using PICO to make the question answerable and searchable' },
    { clue: 'Team changes the primary outcome after seeing the results', meaning: 'Outcome-switching — the protocol/registration must fix this in advance' },
    { clue: 'Enrolling children into a trial', meaning: 'Vulnerable population → extra ethical safeguards + assent/consent' },
  ],

  treatment: [
    { logic: 'Write a testable objective', detail: 'Turn PICO into one primary objective, then one primary hypothesis; power the study for that comparison. Keep secondary objectives clearly labelled and exploratory.' },
  ],

  mnemonics: [
    { hook: 'FINER question; PICO structure', expansion: ['Feasible, Interesting, Novel, Ethical, Relevant', 'Population, Intervention, Comparison, Outcome (+ Time)'] },
    { hook: 'Ethics = A-B-J: Autonomy, Beneficence, Justice', expansion: ['Autonomy → informed consent', 'Beneficence → risk–benefit', 'Justice → fair selection'] },
  ],

  traps: [
    {
      questionCategory: 'Objective vs hypothesis',
      wrongInstinct: 'The objective and the hypothesis are interchangeable statements',
      rightAnswer: 'The objective is what you will do; the hypothesis is the testable prediction (H₀/H₁) you evaluate',
      why: 'Confusing them muddles the analysis plan — the primary hypothesis, not a vague aim, is what the study is powered and tested against.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which element of a study is used to calculate the required sample size?',
      options: [
        { id: 'a', text: 'The literature review' },
        { id: 'b', text: 'The primary objective/outcome' },
        { id: 'c', text: 'The list of secondary outcomes' },
        { id: 'd', text: 'The discussion section' },
      ],
      answerId: 'b',
      explanation: 'A study is powered for its single primary objective/outcome; the sample-size calculation is based on the expected effect and variability of that primary comparison.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A research idea is scientifically interesting but cannot possibly recruit enough patients at the site. Which FINER criterion does it fail?',
      options: [
        { id: 'a', text: 'Feasible' },
        { id: 'b', text: 'Novel' },
        { id: 'c', text: 'Ethical' },
        { id: 'd', text: 'Relevant' },
      ],
      answerId: 'a',
      explanation: 'Feasibility covers whether the study can actually be done with the available subjects, time, expertise and resources. An unrecruitable study fails the “F” of FINER.',
      tests: 'exam',
    },
  ],
};

export default ersResearchQuestionProtocol;
