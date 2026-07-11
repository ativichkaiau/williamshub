import type { Lecture } from '../../lib/types';

export const ersResearchEthics: Lecture = {
  id: 'ers-research-ethics',
  title: 'Research Ethics & Informed Consent',
  system: 'research',
  source: 'L1 — Research Question, Protocol & Ethics',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Research' },
    { kind: 'lecture', label: 'L1 Question & Protocol' },
    { kind: 'mechanism', label: 'Autonomy · beneficence · justice' },
    { kind: 'exam', label: 'Informed consent · IRB' },
  ],

  highYield: [
    '**Three core principles (Belmont Report):** **Respect for persons/autonomy** → informed consent; **Beneficence** (and non-maleficence) → favourable **risk–benefit**; **Justice** → **fair selection** of participants and fair distribution of burdens/benefits.',
    '**The Declaration of Helsinki** governs human research; historic abuses (**Nuremberg Code** after WWII, **Tuskegee**) drove modern safeguards. The **participant’s welfare always takes precedence over the interests of science and society.**',
    '**Valid informed consent needs three elements:** it must be **informed** (purpose, procedures, risks/benefits, alternatives, right to withdraw), **voluntary** (no coercion or undue inducement), and given by someone **competent** to decide.',
    '**Vulnerable populations** (children, pregnant women, prisoners, the cognitively impaired, one’s own students/staff) need **extra protection** — e.g. a child gives **assent** while a guardian gives **consent**.',
    '**Prospective ethics-committee (IRB/EC) approval is mandatory before enrolment.** Also required: protecting **confidentiality/privacy**, declaring **conflicts of interest**, and **trial registration** — you cannot fix an ethics breach after the fact.',
  ],

  mechanism: {
    title: 'Principles → protections → approval → consent',
    steps: [
      { id: 's1', label: 'Belmont principles: autonomy, beneficence, justice', emphasis: 'key' },
      { id: 's2', label: 'Weigh risk–benefit; minimise harm' },
      { id: 's3', label: 'Extra safeguards for vulnerable groups' },
      { id: 's4', label: 'IRB/EC approval BEFORE enrolment', emphasis: 'key' },
      { id: 's5', label: 'Informed + voluntary + competent consent', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Autonomy → informed consent', mechanism: 'Respect persons’ right to decide for themselves', significance: 'key' },
    { sign: 'Beneficence → favourable risk–benefit', mechanism: 'Maximise benefit, minimise harm', significance: 'key' },
    { sign: 'Justice → fair participant selection', mechanism: 'Do not exploit convenient or vulnerable groups', significance: 'key' },
    { sign: 'Children give assent; guardians give consent', mechanism: 'Capacity to consent is limited in minors', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Offering a very large payment that overrides a poor patient’s judgement', meaning: 'Undue inducement → threatens voluntariness of consent' },
    { clue: 'A professor recruits their own students into a study', meaning: 'Vulnerable relationship (power imbalance) → extra safeguards' },
    { clue: 'Consent form omits the right to withdraw at any time', meaning: 'Consent is not fully informed — invalid' },
    { clue: 'Enrolling participants before ethics-committee approval', meaning: 'Ethical violation — approval must be prospective' },
  ],

  treatment: [
    { logic: 'Apply the three principles', detail: 'For any protocol, check autonomy (consent), beneficence (risk–benefit), and justice (fair selection) — plus confidentiality and prospective IRB approval.' },
  ],

  mnemonics: [
    { hook: 'Ethics ABC/J: Autonomy, Beneficence, (non-maleficence), Justice', expansion: ['Autonomy → consent', 'Beneficence → risk–benefit', 'Justice → fair selection'] },
    { hook: 'Consent = Informed, Voluntary, Competent', expansion: ['Miss any one → invalid consent'] },
  ],

  traps: [
    {
      questionCategory: 'What makes consent invalid',
      wrongInstinct: 'A signed consent form always means consent is valid',
      rightAnswer: 'Consent is invalid if it is not informed, not voluntary (coercion/undue inducement), or the person is not competent',
      why: 'A signature is not enough — all three conditions (informed, voluntary, competent) must be met.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A trial offers unemployed participants a payment far larger than local monthly wages. The main ethical concern is:',
      options: [
        { id: 'a', text: 'Violation of justice through fair selection' },
        { id: 'b', text: 'Undue inducement threatening voluntary consent' },
        { id: 'c', text: 'Breach of confidentiality' },
        { id: 'd', text: 'Lack of scientific validity' },
      ],
      answerId: 'b',
      explanation: 'An excessive payment can override a person’s free judgement about the risks — an undue inducement that undermines the voluntariness required for valid informed consent.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which principle from the Belmont Report is operationalised primarily through informed consent?',
      options: [
        { id: 'a', text: 'Beneficence' },
        { id: 'b', text: 'Justice' },
        { id: 'c', text: 'Respect for persons (autonomy)' },
        { id: 'd', text: 'Non-maleficence' },
      ],
      answerId: 'c',
      explanation: 'Respect for persons/autonomy is expressed through informed consent, which lets competent individuals decide voluntarily whether to participate.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'An investigator wishes to enrol 10-year-old children. Ethically, the children should provide ___ and the parents provide ___:',
      options: [
        { id: 'a', text: 'consent; assent' },
        { id: 'b', text: 'assent; consent' },
        { id: 'c', text: 'consent; consent' },
        { id: 'd', text: 'nothing; consent' },
      ],
      answerId: 'b',
      explanation: 'Minors lack legal capacity to consent, so they give assent (age-appropriate agreement) while a parent or guardian provides informed consent.',
      tests: 'exam',
    },
  ],
};

export default ersResearchEthics;
