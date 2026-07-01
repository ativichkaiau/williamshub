import type { Lecture } from '../../lib/types';
import { PICO_FRAMEWORK } from '../../lib/figures';

export const researchQuestionFinerPico: Lecture = {
  id: 'research-question-finer-pico',
  title: 'From Problem to Research Question: FINER & PICO(T)',
  system: 'research',
  source: 'L2 — Introduction to Research',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Research' },
    { kind: 'lecture', label: 'L2 Intro to Research' },
    { kind: 'mechanism', label: 'FINER · PICO' },
    { kind: 'exam', label: 'Frame a question' },
  ],

  highYield: [
    '**Research problem → research question → hypothesis → objectives.** The *problem* is the broad gap or difficulty ("many stroke patients relapse"); the *research question* is the specific, answerable form of it ("does drug X vs placebo reduce recurrent stroke at 1 year?"). A sharp question is the single most important step — it dictates the design and the statistics.',
    '**FINER = criteria for a *good* question.** **F**easible (subjects, expertise, time, money, scope), **I**nteresting (to you and the field), **N**ovel (confirms/refutes/extends prior work), **E**thical (an ethics board would approve), **R**elevant (to science, clinical practice, or policy). A question can be fascinating yet unfeasible — FINER forces the reality check.',
    '**PICO(T) = structure for a *clinical/quantitative* question.** **P**opulation/Patient, **I**ntervention/Exposure, **C**omparison (control/alternative), **O**utcome (measurable), (**T**)ime frame. PICO converts a vague idea into search terms, an eligible population, a defined exposure and a measurable endpoint.',
    '**Three question types.** *Descriptive* ("how common is X?") → no comparison. *Comparative* ("does group A differ from B?"). *Relational/associational or causal* ("is exposure associated with / does it cause outcome?"). The type determines whether you need a comparison group and which statistics apply.',
    '**A good question is specific, measurable, and answerable with available methods.** Vague ("is diet important?") vs answerable ("in adults with T2DM, does a low-carb vs low-fat diet lower HbA1c at 6 months?"). Narrowing scope early prevents an unfeasible or uninterpretable study.',
  ],

  mechanism: {
    title: 'Gap → answerable, well-built question',
    steps: [
      { id: 's1', label: 'Identify the problem / knowledge gap (from literature + practice)' },
      { id: 's2', label: 'Screen the idea with FINER (esp. Feasible + Ethical)', emphasis: 'key' },
      { id: 's3', label: 'Structure it with PICO(T) → who, what, vs what, which outcome', emphasis: 'key' },
      { id: 's4', label: 'Classify: descriptive vs comparative vs relational/causal' },
      { id: 's5', label: 'PICO now drives search terms, design, sample & statistics' },
    ],
  },

  examFindings: [
    { sign: 'FINER', mechanism: 'Feasible, Interesting, Novel, Ethical, Relevant — is the question worth doing?', significance: 'key' },
    { sign: 'PICO(T)', mechanism: 'Population, Intervention, Comparison, Outcome, Time — how to build the question', significance: 'key' },
    { sign: 'No comparison group in the question', mechanism: 'It is a descriptive question (prevalence/incidence), not analytic', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A study idea that is fascinating but has no funding, subjects, or time', meaning: 'Fails the "Feasible" of FINER — reject or rescope' },
    { clue: 'You cannot decide which patients to enrol or what to measure', meaning: 'PICO is underspecified — define P, I, C, O first' },
    { clue: '"How prevalent is anaemia in Year-1 students?"', meaning: 'Descriptive question → cross-sectional survey, no control needed' },
  ],

  treatment: [
    { logic: 'Best practice', detail: 'Write the question in one PICO sentence before touching methods. If you cannot, the study is not yet ready. Refine with FINER until it is feasible AND relevant.' },
  ],

  mnemonics: [
    { hook: 'FINER = Feasible, Interesting, Novel, Ethical, Relevant', expansion: ['Screens whether a question is worth asking'] },
    { hook: 'PICO = Patient, Intervention, Comparison, Outcome (+Time)', expansion: ['Builds the answerable question'] },
  ],

  traps: [
    {
      questionCategory: 'FINER vs PICO',
      wrongInstinct: 'FINER and PICO are interchangeable checklists',
      rightAnswer: 'FINER judges whether a question is *worth asking*; PICO *structures* the question into components',
      why: 'One is a quality filter, the other is a construction template. Exams pair "Novel/Feasible" with FINER and "Comparison/Outcome" with PICO.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'In the FINER criteria, the "E" stands for:',
      options: [
        { id: 'a', text: 'Efficient' },
        { id: 'b', text: 'Ethical' },
        { id: 'c', text: 'Evidence-based' },
        { id: 'd', text: 'Economical' },
      ],
      answerId: 'b',
      explanation: 'FINER = Feasible, Interesting, Novel, Ethical, Relevant. "Ethical" means an ethics committee would approve the study.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'In the question "Among adults with hypertension, does telmisartan vs amlodipine reduce stroke at 3 years?", "amlodipine" corresponds to which PICO element?',
      options: [
        { id: 'a', text: 'Population' },
        { id: 'b', text: 'Intervention' },
        { id: 'c', text: 'Comparison' },
        { id: 'd', text: 'Outcome' },
      ],
      answerId: 'c',
      explanation: 'Telmisartan is the Intervention; amlodipine is the Comparison (comparator/control); stroke is the Outcome; 3 years is the Time frame; adults with hypertension is the Population.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'FINER + PICO(T)', svg: PICO_FRAMEWORK, caption: 'FINER screens whether a question is worth asking; PICO(T) structures it into Population, Intervention, Comparison, Outcome, Time.' },
  ],
};

export default researchQuestionFinerPico;
