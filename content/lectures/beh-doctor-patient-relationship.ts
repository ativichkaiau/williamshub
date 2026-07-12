import type { Lecture } from '../../lib/types';

export const behDoctorPatientRelationship: Lecture = {
  id: 'beh-doctor-patient-relationship',
  title: 'The Doctor–Patient Relationship',
  system: 'community',
  source: 'L2 — Doctor-Patient Relationship & Communication',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Behavioral Science' },
    { kind: 'lecture', label: 'L2 Doctor–Patient Relationship' },
    { kind: 'mechanism', label: 'Szasz–Hollender models' },
    { kind: 'exam', label: 'Transference vs countertransference' },
    { kind: 'treatment', label: 'Therapeutic alliance' },
  ],

  highYield: [
    '**Szasz and Hollender (1956) described three models of the doctor–patient relationship** along a gradient of patient participation and power: **activity–passivity**, **guidance–cooperation** and **mutual participation**. The right model depends on the clinical situation and the patient’s capacity, and the relationship itself is the vehicle for all care ([[beh-communication-skills]]).',
    '**Activity–passivity:** the doctor acts on an essentially passive patient — appropriate in **emergencies, anaesthesia or coma**. Its prototype is the **parent–infant** relationship: the patient contributes nothing to the decision.',
    '**Guidance–cooperation:** the doctor guides and the patient cooperates and follows advice — typical of **acute illness** (an infection, a fracture). Its prototype is the **parent–child** relationship. **Mutual participation:** an adult–adult **partnership** with shared power, ideal for **chronic-disease self-management** (diabetes, hypertension) where the patient co-manages daily.',
    '**Rapport, trust and the therapeutic alliance.** Rapport is a harmonious connection; trust is built through empathy, respect, competence and confidentiality. Bordin’s **therapeutic alliance** has three parts — an emotional **bond**, agreed **goals**, and agreed **tasks** — and it predicts adherence and outcome.',
    '**Transference and countertransference** are unconscious relational currents from psychodynamic theory ([[beh-freud-structural-topographic]]). **Transference** = the patient redirects feelings from a past relationship onto the doctor; **countertransference** = the doctor’s emotional reaction to the patient. Countertransference is **data to notice, not to act on** ([[beh-defense-mechanisms]]).',
  ],

  mechanism: {
    title: 'Szasz–Hollender: three models along a gradient of patient participation',
    steps: [
      { id: 's1', label: 'Activity–passivity — doctor acts on passive patient (emergency, anaesthesia); prototype parent–infant' },
      { id: 's2', label: 'Guidance–cooperation — patient obeys advice (acute illness); prototype parent–child', emphasis: 'key' },
      { id: 's3', label: 'Mutual participation — adult–adult partnership (chronic disease)', emphasis: 'key' },
      { id: 's4', label: 'Match the model to clinical acuity and patient capacity', emphasis: 'key' },
      { id: 's5', label: 'Build the therapeutic alliance = bond + agreed goals + agreed tasks' },
    ],
  },

  examFindings: [
    { sign: 'The three Szasz–Hollender models differ by the patient’s activity and power', mechanism: 'From passive recipient to equal partner as capacity and chronicity rise', significance: 'key' },
    { sign: 'Mutual participation best suits chronic-disease management', mechanism: 'The patient co-manages day to day, so shared power improves control', significance: 'key' },
    { sign: 'Transference = patient’s past feelings onto the doctor; countertransference = doctor’s reaction to the patient', mechanism: 'Unconscious relational patterns re-enacted in the clinical dyad', significance: 'key' },
    { sign: 'The therapeutic alliance (bond, goals, tasks) predicts adherence and outcome', mechanism: 'A strong working relationship drives engagement with treatment', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'An unconscious trauma patient resuscitated in the emergency department', meaning: 'Activity–passivity model — the doctor acts for a patient who cannot participate' },
    { clue: 'A person with diabetes adjusting their own insulin in partnership with the team', meaning: 'Mutual participation — shared power suits chronic self-management' },
    { clue: 'A patient becomes hostile and defiant “just like with my father”', meaning: 'Transference — feelings from a past relationship displaced onto the doctor' },
    { clue: 'A clinician notices unusual irritation or over-protectiveness toward a patient', meaning: 'Countertransference — a signal to reflect on, not to act on' },
  ],

  treatment: [
    { logic: 'Flex the model to the situation rather than defaulting to paternalism', detail: 'Emergencies need activity–passivity, but staying directive in chronic care undermines self-management; shift toward mutual participation as capacity allows.' },
    { logic: 'Use countertransference as clinical information', detail: 'Name your own reaction internally, keep professional boundaries, and let it flag something about the patient rather than driving your behaviour ([[beh-difficult-encounters]]).' },
  ],

  mnemonics: [
    { hook: 'Three models by prototype: “Infant, Child, Adult”', expansion: ['Activity–passivity = parent–infant (emergency)', 'Guidance–cooperation = parent–child (acute illness)', 'Mutual participation = adult–adult (chronic disease)'] },
  ],

  traps: [
    {
      questionCategory: 'Transference versus countertransference',
      wrongInstinct: 'Any strong emotion in the room is the patient’s transference',
      rightAnswer: 'Transference is the patient’s feelings redirected onto the doctor; countertransference is the doctor’s own emotional reaction to the patient',
      why: 'The direction matters — mislabelling the doctor’s reaction as the patient’s misses a chance to reflect and keep boundaries.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which Szasz–Hollender model is most appropriate for the long-term management of a patient with diabetes?',
      options: [
        { id: 'a', text: 'Activity–passivity' },
        { id: 'b', text: 'Guidance–cooperation' },
        { id: 'c', text: 'Mutual participation' },
        { id: 'd', text: 'Paternalistic control' },
      ],
      answerId: 'c',
      explanation: 'Chronic-disease care depends on the patient co-managing day to day, so the adult–adult partnership of mutual participation, with shared power and responsibility, fits best.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient repeatedly reacts to their physician with the same resentment they feel toward a domineering parent. This is best described as:',
      options: [
        { id: 'a', text: 'Countertransference' },
        { id: 'b', text: 'Transference' },
        { id: 'c', text: 'Rapport' },
        { id: 'd', text: 'Sympathy' },
      ],
      answerId: 'b',
      explanation: 'Transference is the unconscious redirection of feelings from a past relationship onto the doctor. The doctor’s own emotional reaction to the patient would instead be countertransference.',
      tests: 'exam',
    },
  ],
};

export default behDoctorPatientRelationship;
