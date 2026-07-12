import type { Lecture } from '../../lib/types';

export const ifhHealthDataGovernance: Lecture = {
  id: 'ifh-health-data-governance',
  title: 'Health Data Governance & Law',
  system: 'community',
  source: 'L11 — Health Data for Quality Improvement',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Family Health' },
    { kind: 'lecture', label: 'L11 Health Data & QI' },
    { kind: 'mechanism', label: 'Thailand PDPA' },
    { kind: 'investigation', label: 'De-identification' },
    { kind: 'treatment', label: 'Confidentiality · consent · security' },
  ],

  highYield: [
    '**Confidentiality is a core duty — with limits.** You must protect patient information, but it can be disclosed under defined **exceptions**: public-health/notifiable-disease duties, a **court order**, or a serious risk of harm. Consent for use of health data should be **explicit**.',
    '**Thailand’s PDPA (Personal Data Protection Act, B.E. 2562/2019)** is the GDPR-like law governing personal data. Core principles: a **lawful basis / consent**, **purpose limitation**, **data minimization**, accuracy, storage limitation, and **security**, plus **data-subject rights** (access, rectify, erase, withdraw consent).',
    '**Health data = "sensitive personal data"** under the PDPA → it needs **explicit consent** and stricter protection than ordinary data. Know the roles: the **data controller** decides purpose; the **data processor** acts on the controller’s behalf.',
    '**Anonymized vs pseudonymized is the key distinction.** Truly **anonymized** (irreversible) data falls **outside** the PDPA; **pseudonymized** (coded, re-linkable) data is **still personal data** and remains regulated. De-identify properly before secondary use for QI or research.',
    '**Governance is the guardrail on the data-driven QI of [[ifh-health-data-quality]].** Collect the minimum necessary, secure it (technical + organizational safeguards, breach notification), and honour data-subject rights — the ethical–legal counterpart to the trust built in [[ifh-clinical-communication-skills]].',
  ],

  mechanism: {
    title: 'Lawful basis/consent → minimize → secure → de-identify for secondary use → honour rights',
    steps: [
      { id: 's1', label: 'Establish a lawful basis — explicit consent for sensitive health data', emphasis: 'key' },
      { id: 's2', label: 'Apply purpose limitation + data minimization (only what is needed)', emphasis: 'key' },
      { id: 's3', label: 'Secure the data (technical + organizational safeguards)' },
      { id: 's4', label: 'De-identify / anonymize for secondary use (QI, research)' },
      { id: 's5', label: 'Honour data-subject rights (access, rectify, erase, withdraw)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Health data is "sensitive personal data" under the PDPA', mechanism: 'It attracts explicit-consent requirements and stricter protection', significance: 'key' },
    { sign: 'Anonymized data is out of scope; pseudonymized data is still personal', mechanism: 'A code key means re-identification is possible, so pseudonymized data stays regulated', significance: 'key' },
    { sign: 'Confidentiality has defined limits', mechanism: 'Public-health duties, court orders, and serious-harm risks are lawful exceptions', significance: 'supportive' },
    { sign: 'Data minimization: collect and use only what is necessary', mechanism: 'Limiting data limits both privacy risk and breach impact', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Identifiable records shared with a researcher without consent', meaning: 'A PDPA breach → obtain consent or properly de-identify first' },
    { clue: 'A QI dashboard uses only aggregate, anonymized counts', meaning: 'Outside the PDPA — no personal data is processed' },
    { clue: 'A patient asks to see and correct an error in their record', meaning: 'A data-subject right (access + rectification) that must be honoured under the PDPA' },
    { clue: 'A laptop holding an unencrypted patient list is lost', meaning: 'A data-security breach → contain and notify per PDPA requirements' },
  ],

  treatment: [
    { logic: 'Obtain consent, minimize, and secure', detail: 'Use explicit consent for health data, collect only what is needed, and apply technical and organizational safeguards with a breach-response plan.' },
    { logic: 'De-identify for secondary use and respect data-subject rights', detail: 'Anonymize (not merely pseudonymize) data for QI/research where possible, and honour access, rectification, erasure, and withdrawal requests — knowing the lawful exceptions to confidentiality.' },
  ],

  mnemonics: [
    { hook: 'PDPA (2019) = Thailand’s GDPR', expansion: ['Health data = sensitive → explicit consent', 'Rights: access, rectify, erase, withdraw'] },
    { hook: 'Anonymized OUT, pseudonymized IN', expansion: ['Anonymized (irreversible) → outside the law', 'Pseudonymized (coded, re-linkable) → still personal data'] },
  ],

  traps: [
    {
      questionCategory: 'Anonymized vs pseudonymized',
      wrongInstinct: 'Coding or pseudonymizing patient data removes it from data-protection law',
      rightAnswer: 'Pseudonymized data can be re-linked via the key, so it is still "personal data" under the PDPA; only truly anonymized (irreversible) data is out of scope',
      why: 'If a code key exists, re-identification is possible — the data remains regulated and needs a lawful basis.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Under Thailand’s PDPA, how is a patient’s health information classified?',
      options: [
        { id: 'a', text: 'Ordinary personal data with no special requirements' },
        { id: 'b', text: 'Sensitive personal data requiring explicit consent and stricter protection' },
        { id: 'c', text: 'Public data that can be freely shared' },
        { id: 'd', text: 'Data entirely exempt from the PDPA' },
      ],
      answerId: 'b',
      explanation: 'Health data is "sensitive personal data" under the PDPA, so it needs explicit consent and stronger safeguards than ordinary personal data.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A dataset has patient names replaced by codes, but a key linking codes to identities is kept. How is this data treated under the PDPA?',
      options: [
        { id: 'a', text: 'It is fully anonymized and outside the PDPA' },
        { id: 'b', text: 'It is pseudonymized and still counts as personal data' },
        { id: 'c', text: 'It no longer requires any lawful basis' },
        { id: 'd', text: 'It can be published without restriction' },
      ],
      answerId: 'b',
      explanation: 'Because the key allows re-identification, the data is pseudonymized, not anonymized, and remains personal data subject to the PDPA. Only irreversible anonymization is out of scope.',
      tests: 'investigation',
    },
  ],
};

export default ifhHealthDataGovernance;
