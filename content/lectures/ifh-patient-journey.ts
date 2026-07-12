import type { Lecture } from '../../lib/types';

export const ifhPatientJourney: Lecture = {
  id: 'ifh-patient-journey',
  title: 'The Patient Journey',
  system: 'community',
  source: 'L1 — Patient Journey & Introduction to Family Health',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Family Health' },
    { kind: 'lecture', label: 'L1 Patient Journey & Family Health' },
    { kind: 'mechanism', label: 'First contact · Continuity · Coordination' },
    { kind: 'exam', label: 'Symptom iceberg · Transitions of care' },
  ],

  highYield: [
    '**Follow the patient, not the disease.** The patient journey traces one person as the continuous *thread* through the system — symptom onset → help-seeking → **first contact** → diagnosis → treatment → **follow-up & continuity** — rather than a series of disconnected episodes. This person-as-thread view is the heart of the [[ifh-family-medicine-principles]].',
    '**First contact = access.** Primary care is the entry point (and gatekeeper) to the system. Care-seeking is filtered by **access barriers** — financial, geographic, cultural and availability — so lowering these barriers is what gets people onto the journey earlier.',
    '**Continuity comes in three flavours.** *Informational* (records/knowledge follow the patient), *longitudinal/relational* (same clinician or team over time → trust), and *management* (one coherent plan across providers). Relational continuity is only one of the three.',
    '**Coordination closes the loop.** Primary care navigates referrals to secondary/tertiary care **and back** — the referral must return feedback. Fragmentation and dropped information at **transitions of care** (discharge, referral) are the high-risk gaps in the journey.',
    '**The symptom iceberg.** Most symptoms in a population are self-managed at home and never reach a doctor; the decision to seek help is shaped by beliefs and *lay referral* networks — closely tied to the [[ifh-disease-vs-illness]] distinction.',
  ],

  mechanism: {
    title: 'Symptom → help-seeking → first contact → diagnosis/treatment → coordination → continuity',
    steps: [
      { id: 's1', label: 'Symptom onset in the community (most stay in the “symptom iceberg”)' },
      { id: 's2', label: 'Decision to seek help — shaped by beliefs, lay referral & access', emphasis: 'key' },
      { id: 's3', label: 'First contact with primary care — the entry point / gatekeeper', emphasis: 'key' },
      { id: 's4', label: 'Assess, diagnose, treat; refer & coordinate when needed' },
      { id: 's5', label: 'Follow-up & continuity — the patient is the thread, not the episode', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Follow the patient, not the disease', mechanism: 'The journey spans episodes, settings and time — a single-episode view misses continuity', significance: 'key' },
    { sign: 'Primary care is the first point of contact and the coordinator', mechanism: 'Gatekeeping and navigation reduce fragmentation, duplication and cost', significance: 'key' },
    { sign: 'Most symptoms never reach a doctor (the symptom iceberg)', mechanism: 'Help-seeking is filtered by health beliefs, lay networks and access', significance: 'supportive' },
    { sign: 'Transitions of care are the high-risk gaps', mechanism: 'Handoffs (discharge, referral) lose information → errors and dropped follow-up', significance: 'key' },
  ],

  investigations: [
    { clue: 'A diabetic patient sees a different doctor every visit and no one owns the plan', meaning: 'Loss of relational + management continuity → poorer control; assign a usual provider/team' },
    { clue: 'Patient discharged from hospital with no follow-up arranged', meaning: 'A transition-of-care gap → readmission risk; close the referral loop with the primary team' },
    { clue: 'A villager treats symptoms with a pharmacy remedy for weeks before coming in', meaning: 'The symptom iceberg + lay referral — care-seeking delayed by beliefs and access' },
    { clue: 'A specialist’s clinic letter never reaches the family doctor', meaning: 'Broken informational continuity — a coordination failure, not a clinical one' },
  ],

  treatment: [
    { logic: 'Map and smooth the journey', detail: 'Ensure a named usual provider, close every referral loop with feedback, and arrange explicit follow-up at each transition of care.' },
    { logic: 'Lower the access barriers', detail: 'Address financial, geographic and cultural obstacles so first contact happens earlier in the illness.' },
  ],

  mnemonics: [
    { hook: 'Continuity has 3 flavours: I-L-M', expansion: ['Informational — records & knowledge follow the patient', 'Longitudinal/relational — same clinician over time', 'Management — one coherent plan across providers'] },
    { hook: 'The journey rides on 3 C’s', expansion: ['First Contact — access / entry', 'Continuity — the patient is the thread', 'Coordination — navigate the system'] },
  ],

  traps: [
    {
      questionCategory: 'Continuity of care',
      wrongInstinct: 'Continuity just means seeing the same doctor',
      rightAnswer: 'Relational (same clinician) is only one type — informational and management continuity count too',
      why: 'A shared record and a coherent plan preserve continuity even when the individual clinician changes.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with chronic disease sees a different physician at every visit, and no single clinician tracks the overall plan. Which element of care is most clearly lost?',
      options: [
        { id: 'a', text: 'Continuity of care' },
        { id: 'b', text: 'First-contact access' },
        { id: 'c', text: 'Informed consent' },
        { id: 'd', text: 'Comprehensiveness' },
      ],
      answerId: 'a',
      explanation: 'When no clinician or team follows the patient over time and no coherent plan is maintained, relational and management continuity are lost — the patient stops being the thread through the system.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'The observation that most symptoms in a population are managed at home and never presented to a doctor is known as…',
      options: [
        { id: 'a', text: 'The symptom iceberg' },
        { id: 'b', text: 'Lead-time bias' },
        { id: 'c', text: 'The sick role' },
        { id: 'd', text: 'Gatekeeping' },
      ],
      answerId: 'a',
      explanation: 'The symptom iceberg describes how only a small fraction of symptoms experienced in the community ever reach formal care; help-seeking is filtered by beliefs, lay referral and access.',
      tests: 'lecture',
    },
  ],
};

export default ifhPatientJourney;
