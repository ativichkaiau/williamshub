import type { Lecture } from '../../lib/types';

export const fcp1MedicalLawThailand: Lecture = {
  id: 'fcp1-medical-law-thailand',
  title: 'Medical Law for Thai Physicians',
  system: 'clinical',
  source: 'L38 — Medical Law for Physicians',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L38 Medical Law' },
    { kind: 'mechanism', label: 'Medical Council' },
    { kind: 'mechanism', label: 'Health Act B.E. 2550' },
    { kind: 'treatment', label: 'Medico-legal duties' },
  ],

  highYield: [
    'The **Medical Council of Thailand**, established under the **Medical Profession Act B.E. 2525 (1982)**, licenses physicians, sets ethical standards and exercises **discipline** — warning, probation, suspension and licence revocation.',
    'The **National Health Act B.E. 2550 (2007)** protects **personal health information** (confidentiality), recognises **patient rights** and provides for **advance directives / living wills**.',
    '**Informed consent** [[fcp1-professionalism-consent]] and accurate, retained **medical records** are legal duties, not merely good practice.',
    'Three lines of accountability run **separately**: **professional / ethical** (the Medical Council), **civil** (compensation for negligence [[fcp1-medical-negligence-confidentiality]]) and **criminal** (the courts).',
    'Physicians carry **medico-legal duties** — issuing medical certificates, writing medico-legal reports and appearing as **witnesses** when lawfully summoned [[fcp1-sexual-assault-forensic]]. The framework operationalises core ethics [[fcp1-medical-ethics-principles]].',
  ],

  mechanism: {
    title: 'The legal framework for Thai physicians',
    steps: [
      { id: 's1', label: 'Medical Profession Act B.E. 2525 → the Medical Council', emphasis: 'key' },
      { id: 's2', label: 'The Council licenses, sets ethics and disciplines', emphasis: 'key' },
      { id: 's3', label: 'National Health Act B.E. 2550 → confidentiality & patient rights', emphasis: 'key' },
      { id: 's4', label: 'Consent and record-keeping are statutory duties', emphasis: 'key' },
      { id: 's5', label: 'Professional, civil and criminal liability run separately', emphasis: 'normal' },
    ],
  },

  examFindings: [
    { sign: 'Practising medicine without a valid licence', mechanism: 'An offence under the Medical Profession Act', significance: 'key' },
    { sign: 'Disclosing health information without consent or a legal basis', mechanism: 'A breach under the National Health Act', significance: 'key' },
    { sign: 'A serious ethical breach reported to the Council', mechanism: 'May lead to suspension or revocation', significance: 'supportive' },
    { sign: 'A court summons for a medico-legal report', mechanism: 'The physician has a legal duty to assist', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A complaint of professional misconduct', meaning: 'Handled by the Medical Council ethics and disciplinary process' },
    { clue: 'A claim for harm and compensation', meaning: 'A civil (tort) matter for the courts' },
    { clue: 'An alleged criminal act such as assault or fraud', meaning: 'A criminal matter, separate from any Council action' },
    { clue: 'A request to release records to a third party', meaning: 'Requires patient consent or a specific legal authority' },
  ],

  treatment: [
    { logic: 'Practise within your licence and the standards', detail: 'Hold a valid licence and follow the Medical Council’s ethical regulations.' },
    { logic: 'Consent, document and protect confidentiality', detail: 'Obtain informed consent, keep accurate and retained records, and disclose information only with consent or lawful authority.' },
    { logic: 'Meet medico-legal obligations', detail: 'Issue truthful certificates and reports and cooperate with lawful court processes.' },
  ],

  mnemonics: [
    { hook: 'Two Acts anchor Thai practice: B.E. 2525 and B.E. 2550', expansion: ['Medical Profession Act B.E. 2525 → the Council and licensing', 'National Health Act B.E. 2550 → confidentiality and patient rights'] },
  ],

  traps: [
    {
      questionCategory: 'Ethics vs the courts',
      wrongInstinct: 'If the Medical Council does not discipline a doctor, the doctor cannot be sued or prosecuted',
      rightAnswer: 'Professional, civil and criminal liability are independent — one can proceed without the others',
      why: 'A Council finding, a civil claim and a criminal charge arise from different bodies applying different standards.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which body licenses physicians and handles professional discipline in Thailand?',
      options: [
        { id: 'a', text: 'The Ministry of Public Health directly' },
        { id: 'b', text: 'The Medical Council of Thailand, under the Medical Profession Act B.E. 2525' },
        { id: 'c', text: 'The criminal court' },
        { id: 'd', text: 'The National Health Commission' },
      ],
      answerId: 'b',
      explanation: 'The Medical Council of Thailand, established under the Medical Profession Act B.E. 2525, licenses doctors, sets ethical standards and exercises professional discipline.',
      tests: 'lecture',
    },
    {
      id: 'q2',
      stem: 'A patient’s personal health information is primarily protected under which law?',
      options: [
        { id: 'a', text: 'The Medical Profession Act B.E. 2525' },
        { id: 'b', text: 'The National Health Act B.E. 2550' },
        { id: 'c', text: 'The Consumer Protection Act' },
        { id: 'd', text: 'No specific law' },
      ],
      answerId: 'b',
      explanation: 'The National Health Act B.E. 2550 protects the confidentiality of personal health information and prohibits disclosure without consent except as permitted by law.',
      tests: 'lecture',
    },
  ],
};

export default fcp1MedicalLawThailand;
