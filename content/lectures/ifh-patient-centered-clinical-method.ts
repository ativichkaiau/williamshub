import type { Lecture } from '../../lib/types';

export const ifhPatientCenteredClinicalMethod: Lecture = {
  id: 'ifh-patient-centered-clinical-method',
  title: 'Patient-Centered Clinical Method',
  system: 'community',
  source: 'L2 — Patient-Centered Medicine & Communication',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Family Health' },
    { kind: 'lecture', label: 'L2 PCM & Communication' },
    { kind: 'mechanism', label: 'Stewart · 4 components' },
    { kind: 'exam', label: 'Finding common ground' },
  ],

  highYield: [
    '**The patient-centred clinical method (Stewart / McWhinney)** reorganises the consultation around the person, not just the disease. Its interlocking components are: **(1) explore both disease and illness**, **(2) understand the whole person**, **(3) find common ground**, and **(4) enhance the patient–doctor relationship** (older versions add health promotion and “being realistic”).',
    '**Component 1 — explore health, disease AND illness.** Combine the biomedical work-up with the illness experience via **FIFE** — the core of [[ifh-disease-vs-illness]]. You are running two agendas at once: the doctor’s and the patient’s.',
    '**Component 2 — understand the whole person.** Place the problem in **context**: family, work, culture, life stage and the [[ifh-biopsychosocial-model]]. The same disease lands differently on a student, a carer and a shift worker.',
    '**Component 3 — finding common ground** is the exam favourite. Doctor and patient **negotiate agreement on three things: the problems, the goals, and the roles** of each party. Patient-centred is a **mutual partnership**, not simply doing whatever the patient demands.',
    '**Component 4 — enhance the relationship.** Continuity, trust, empathy and shared power make the relationship itself therapeutic. It is delivered through [[ifh-clinical-communication-skills]] and underpins the generalist role in [[ifh-family-medicine-principles]].',
  ],

  mechanism: {
    title: 'Explore (disease + illness) → understand whole person → find common ground → enhance relationship',
    steps: [
      { id: 's1', label: 'Explore health, disease AND illness (FIFE)', emphasis: 'key' },
      { id: 's2', label: 'Understand the whole person in context — family, work, life stage' },
      { id: 's3', label: 'Find common ground — agree on problems, goals and roles', emphasis: 'key' },
      { id: 's4', label: 'Enhance the patient–doctor relationship (trust, continuity, empathy)' },
      { id: 's5', label: 'Be realistic — time, resources, and health promotion' },
    ],
  },

  examFindings: [
    { sign: 'Patient-centred is a mutual partnership, not patient-led demand', mechanism: 'Both perspectives are integrated into one negotiated plan', significance: 'key' },
    { sign: 'Finding common ground = agreeing on problems, goals AND roles', mechanism: 'Shared understanding on all three prevents mismatch', significance: 'key' },
    { sign: 'Understanding the whole person means context beyond the body', mechanism: 'Family, work, culture and life stage shape the illness', significance: 'key' },
    { sign: 'The patient–doctor relationship is itself therapeutic', mechanism: 'Trust and continuity improve outcomes and adherence', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Doctor and patient leave the room with different ideas of the diagnosis and plan', meaning: 'Common ground not reached — the plan must be negotiated, not dictated' },
    { clue: 'A patient feels unheard and labels the visit “difficult”', meaning: 'The illness experience and whole person were not explored' },
    { clue: 'Glycaemic control is dominated by the patient’s shift work and caregiving load', meaning: 'Whole-person context matters more than the prescription here' },
    { clue: 'Clinician lays out the options and the patient chooses among them', meaning: 'Finding common ground on roles — shared decision-making in action' },
  ],

  treatment: [
    { logic: 'Weave FIFE and whole-person context into every consultation', detail: 'Explore disease and illness together, then situate them in the patient’s family, work and life stage.' },
    { logic: 'Negotiate a shared plan (find common ground)', detail: 'Reach explicit agreement on the problems, the goals of care, and who does what — rather than issuing instructions.' },
  ],

  mnemonics: [
    { hook: 'Four components: Explore, Understand, Agree, Enhance', expansion: ['Explore disease + illness (FIFE)', 'Understand the whole person', 'Agree — find common ground', 'Enhance the relationship'] },
    { hook: 'Common ground = Problems, Goals, Roles', expansion: ['Agree what the problems are', 'Agree the goals of management', 'Agree each party’s role'] },
  ],

  traps: [
    {
      questionCategory: 'Patient-centred vs patient-led',
      wrongInstinct: 'Being patient-centred means giving the patient whatever they ask for (the antibiotic, the scan)',
      rightAnswer: 'It means finding common ground — a mutual, negotiated partnership that integrates the patient’s and the clinician’s perspectives',
      why: 'Autonomy is honoured within a shared, evidence-based plan, not treated as a blank cheque.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which component of the patient-centred clinical method involves the doctor and patient reaching mutual agreement on the problems, the goals, and their respective roles?',
      options: [
        { id: 'a', text: 'Exploring the illness experience' },
        { id: 'b', text: 'Understanding the whole person' },
        { id: 'c', text: 'Finding common ground' },
        { id: 'd', text: 'Enhancing the relationship' },
      ],
      answerId: 'c',
      explanation: 'Finding common ground is the explicit negotiation of shared understanding on three things — the problems, the goals of management, and the roles of doctor and patient.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient with a clear viral upper-respiratory illness insists on antibiotics. Which response best reflects the patient-centred clinical method?',
      options: [
        { id: 'a', text: 'Prescribe the antibiotic, because patient-centred care means meeting the patient’s wishes' },
        { id: 'b', text: 'Explore the patient’s ideas and expectations, then negotiate a shared plan' },
        { id: 'c', text: 'Refuse and end the consultation' },
        { id: 'd', text: 'Order a chest X-ray to settle the disagreement' },
      ],
      answerId: 'b',
      explanation: 'Patient-centred care is a mutual partnership, not simple compliance. You elicit the patient’s ideas and expectations (FIFE) and find common ground on a safe, evidence-based plan — not a blank cheque for the request.',
      tests: 'exam',
    },
  ],
};

export default ifhPatientCenteredClinicalMethod;
