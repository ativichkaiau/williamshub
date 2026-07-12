import type { Lecture } from '../../lib/types';

export const fcp1HistoryTakingFramework: Lecture = {
  id: 'fcp1-history-taking-framework',
  title: 'The Medical History: Structure & the Clinical Interview',
  system: 'clinical',
  source: 'L1 — Medical History Taking',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L1 History Taking' },
    { kind: 'mechanism', label: 'Open → closed funnel' },
    { kind: 'exam', label: 'CC · HPI · PMH · FH · SH · ROS' },
    { kind: 'investigation', label: 'ICE · pertinent negatives' },
  ],

  highYield: [
    '**The history yields most diagnoses before any test is ordered.** It follows a standard sequence you can recite: **chief complaint (CC) → history of presenting illness (HPI) → past medical history (PMH) → drugs & allergies → family history → social history → review of systems (ROS)**. The order is a scaffold, not a rigid script.',
    '**Run the interview as a funnel.** Open with a **broad question** (“Tell me what brought you in today”) and protect the **golden minute** of uninterrupted talking, then move to **closed questions** to pin down detail. Going closed too early buries the real story.',
    '**Be patient-centred — elicit ICE: Ideas, Concerns, Expectations.** What does the patient think is wrong, what are they worried about, and what do they hope for? This surfaces the hidden agenda and improves adherence.',
    '**The ROS is a rapid systematic screen** for symptoms the patient did not volunteer; it captures **pertinent positives and negatives** that shape the differential. The analytic detail of a single symptom is covered in [[fcp1-history-symptom-analysis]].',
    '**Close by summarising back and safety-netting.** Reflect the story to check accuracy, then state what should prompt the patient to return. In children the structure expands — see [[fcp1-pediatric-history]].',
  ],

  mechanism: {
    title: 'The clinical interview: set the stage → open → funnel → systematic sections → synthesise',
    steps: [
      { id: 's1', label: 'Set the stage: introduce yourself, gain consent, ensure privacy & comfort' },
      { id: 's2', label: 'Open with the presenting complaint (broad question, the golden minute)', emphasis: 'key' },
      { id: 's3', label: 'Funnel from open → closed to characterise the HPI and screen red flags', emphasis: 'key' },
      { id: 's4', label: 'Work the fixed sections: PMH, drugs/allergies, FH, SH, ROS' },
      { id: 's5', label: 'Synthesise: summarise back, agree a plan, safety-net', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'The “golden minute” — let the patient talk uninterrupted at the start', mechanism: 'Most patients finish their opening in under a minute and reveal the true agenda', significance: 'key' },
    { sign: 'ICE (Ideas, Concerns, Expectations) explicitly explored', mechanism: 'Uncovers the hidden agenda and the patient’s real worry', significance: 'key' },
    { sign: 'Pertinent negatives recorded, not only positives', mechanism: 'Absent symptoms narrow the differential as much as present ones', significance: 'supportive' },
    { sign: 'Collateral history sought when the patient cannot give one', mechanism: 'Confusion, age or acuity limits the account; a witness or carer fills the gap', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The clinician interrupts within the first few seconds of the opening line', meaning: 'The agenda gets truncated — protect the opening monologue instead' },
    { clue: 'The patient lists several unrelated complaints at once', meaning: 'Set the agenda early and negotiate priorities for this visit' },
    { clue: 'Non-verbal signs of distress or a guarded manner', meaning: 'Explore ICE and emotion before continuing fact-gathering' },
    { clue: 'A drowsy, confused or very young patient', meaning: 'Take a collateral history — see [[fcp1-pediatric-history]] for the paediatric version' },
  ],

  treatment: [
    { logic: 'Build rapport before you gather data', detail: 'A calm introduction, eye contact and permission set the trust that makes the history accurate; rushed rapport yields a thin, unreliable story.' },
    { logic: 'Summarise and safety-net before you finish', detail: 'Reflecting the history back catches errors and omissions; safety-netting tells the patient which changes should bring them back sooner.' },
  ],

  mnemonics: [
    { hook: 'History order: CC → HPI → PMH → Drugs/Allergies → FH → SH → ROS', expansion: ['CC = chief complaint in the patient’s own words', 'HPI = history of presenting illness (the funnel)', 'PMH + drugs & allergies', 'FH + SH = family and social', 'ROS = systematic review of systems'] },
    { hook: 'ICE = Ideas, Concerns, Expectations', expansion: ['Ideas — what they think it is', 'Concerns — what they fear', 'Expectations — what they want from you'] },
  ],

  traps: [
    {
      questionCategory: 'Interview technique',
      wrongInstinct: 'Start with a checklist of closed yes/no questions to be efficient',
      rightAnswer: 'Open with a broad question and let the patient speak before narrowing down',
      why: 'Closed-first questioning suppresses the patient’s narrative and misses the real agenda; the open→closed funnel gathers more accurate data in less time.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A student begins every history by firing a rapid series of yes/no questions from a checklist. Which single change would most improve the accuracy of the history?',
      options: [
        { id: 'a', text: 'Ask more closed questions, faster' },
        { id: 'b', text: 'Open with a broad question and protect an uninterrupted opening minute' },
        { id: 'c', text: 'Complete the review of systems first' },
        { id: 'd', text: 'Record only the positive findings' },
      ],
      answerId: 'b',
      explanation: 'The open→closed funnel — starting broad and protecting the “golden minute” — lets the patient tell their story and reveals the true agenda before targeted closed questions fill the gaps.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient with epigastric pain says, “I’m really worried this is my heart, like my father had.” Documenting and addressing this statement best represents exploring which element?',
      options: [
        { id: 'a', text: 'Review of systems' },
        { id: 'b', text: 'Past medical history' },
        { id: 'c', text: 'Ideas, Concerns and Expectations (ICE)' },
        { id: 'd', text: 'Social history' },
      ],
      answerId: 'c',
      explanation: 'The patient’s belief and fear are their Ideas and Concerns. Eliciting ICE is central to a patient-centred interview and guides both the explanation you give and the management you plan.',
      tests: 'exam',
    },
  ],
};

export default fcp1HistoryTakingFramework;
