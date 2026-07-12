import type { Lecture } from '../../lib/types';

export const fcp1MedicalNegligenceConfidentiality: Lecture = {
  id: 'fcp1-medical-negligence-confidentiality',
  title: 'Medical Negligence & Confidentiality',
  system: 'clinical',
  source: 'L38 — Medical Law for Physicians',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L38 Medical Law' },
    { kind: 'mechanism', label: 'Duty · breach · causation' },
    { kind: 'mechanism', label: 'Confidentiality limits' },
    { kind: 'treatment', label: 'Medical records' },
  ],

  highYield: [
    '**Medical negligence needs all four elements — duty of care, breach, causation and damage.** Miss any one and the claim fails.',
    '**Breach** is judged against the **standard of a reasonable, competent practitioner** in that field (Bolam), tempered by logical scrutiny (Bolitho).',
    '**Causation** uses the **but-for test**: the harm must actually result from the breach and be foreseeable — not merely follow it in time.',
    '**Confidentiality** is a core duty but **not absolute** — it yields to **patient consent, a legal or statutory requirement** (notifiable diseases, a court order) and the **public interest** where there is a serious risk of harm to others [[fcp1-medical-law-thailand]].',
    '**Medical records** must be accurate, contemporaneous and retained; they are the primary **medico-legal evidence**, and patients have a right of access. This all rests on autonomy and core ethics [[fcp1-medical-ethics-principles]] and links to consent [[fcp1-professionalism-consent]].',
  ],

  mechanism: {
    title: 'Negligence elements and the limits of confidentiality',
    steps: [
      { id: 's1', label: 'Duty of care exists (a doctor-patient relationship)', emphasis: 'key' },
      { id: 's2', label: 'Breach: care fell below the reasonable-competent standard', emphasis: 'key' },
      { id: 's3', label: 'Causation: but for the breach, the harm would not have occurred', emphasis: 'key' },
      { id: 's4', label: 'Damage: actual harm or loss resulted', emphasis: 'key' },
      { id: 's5', label: 'Confidentiality yields only to consent, law or public interest', emphasis: 'normal' },
    ],
  },

  examFindings: [
    { sign: 'Care fell below that of a reasonable, competent practitioner', mechanism: 'Establishes breach of duty', significance: 'key' },
    { sign: 'The harm would not have happened but for the breach', mechanism: 'Satisfies causation', significance: 'key' },
    { sign: 'A breach occurs but causes no harm', mechanism: 'No negligence claim, because damage is absent', significance: 'supportive' },
    { sign: 'Disclosure of a notifiable disease to public health', mechanism: 'A lawful, statutory exception to confidentiality', significance: 'key' },
  ],

  investigations: [
    { clue: 'Duty, breach, causation and damage are all present', meaning: 'Negligence is made out' },
    { clue: 'A breach is present but there is no resulting harm', meaning: 'The claim fails — damage is required' },
    { clue: 'The patient consents to information sharing', meaning: 'Disclosure is permitted' },
    { clue: 'A serious risk of harm to an identifiable third party', meaning: 'A public-interest disclosure may be justified' },
  ],

  treatment: [
    { logic: 'Guard against negligence at each element', detail: 'Maintain competence to meet the standard of care, communicate clearly, and document to withstand later causation questions.' },
    { logic: 'Keep confidentiality unless an exception applies', detail: 'Disclose only with consent, a legal requirement, or a genuine public-interest justification, and record the reasoning.' },
    { logic: 'Document contemporaneously', detail: 'Accurate, retained records are both the best protection and the primary medico-legal evidence.' },
  ],

  mnemonics: [
    { hook: 'Negligence: Duty, Breach, Causation, Damage', expansion: ['All four are required', 'Breach without damage is not negligence', 'Causation is the but-for test'] },
    { hook: 'Confidentiality breaks for Consent, Court, Community risk', expansion: ['Patient consent', 'Statute or a court order', 'Public interest — serious harm to others'] },
  ],

  traps: [
    {
      questionCategory: 'Breach without harm',
      wrongInstinct: 'A doctor who clearly made an error is automatically liable in negligence',
      rightAnswer: 'Without causation and actual damage there is no negligence, however careless the act',
      why: 'All four elements must be present; a breach that causes no harm does not found a claim.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which of the following is NOT one of the four elements of medical negligence?',
      options: [
        { id: 'a', text: 'Duty of care' },
        { id: 'b', text: 'Breach of duty' },
        { id: 'c', text: 'Confidentiality' },
        { id: 'd', text: 'Causation' },
      ],
      answerId: 'c',
      explanation: 'The four elements are duty, breach, causation and damage; confidentiality is a separate professional and legal duty, not an element of negligence.',
      tests: 'lecture',
    },
    {
      id: 'q2',
      stem: 'A doctor reports a patient’s notifiable infectious disease to public health authorities without the patient’s explicit consent. This is best described as:',
      options: [
        { id: 'a', text: 'A breach of confidentiality amounting to negligence' },
        { id: 'b', text: 'A lawful exception to confidentiality required by statute' },
        { id: 'c', text: 'Permissible only with a court order' },
        { id: 'd', text: 'Never allowed under any circumstances' },
      ],
      answerId: 'b',
      explanation: 'Statutory notification of certain infectious diseases is a recognised legal exception to confidentiality and does not require the patient’s consent.',
      tests: 'lecture',
    },
  ],
};

export default fcp1MedicalNegligenceConfidentiality;
