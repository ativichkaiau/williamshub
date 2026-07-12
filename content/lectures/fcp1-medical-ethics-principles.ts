import type { Lecture } from '../../lib/types';

export const fcp1MedicalEthicsPrinciples: Lecture = {
  id: 'fcp1-medical-ethics-principles',
  title: 'Medical Ethics: The Four Principles',
  system: 'clinical',
  source: 'L37 — Medical Ethics & Professionalism',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L37 Ethics & Professionalism' },
    { kind: 'mechanism', label: 'Four principles' },
    { kind: 'mechanism', label: 'Autonomy & confidentiality' },
    { kind: 'treatment', label: 'Ethical reasoning' },
  ],

  highYield: [
    'The **four principles** are **autonomy** (respect informed choices), **beneficence** (act in the best interest), **non-maleficence** (do no harm) and **justice** (fairness and equity) — none is automatically supreme; they are **balanced** against the facts.',
    '**Autonomy** underpins **informed consent** [[fcp1-professionalism-consent]], **confidentiality** and **truth-telling**; a competent, informed patient may refuse even life-saving treatment.',
    '**Non-maleficence** (primum non nocere) is weighed against beneficence through a **risk-benefit** judgement for every intervention.',
    '**Justice** demands fair resource allocation and **non-discrimination** — equals treated equally, decisions based on need rather than status.',
    '**Ethical reasoning is structured** (for example the four-box method: medical indications, patient preferences, quality of life, contextual features) — name the conflicting principles and justify the resolution; confidentiality has **legal limits** [[fcp1-medical-negligence-confidentiality]].',
  ],

  mechanism: {
    title: 'The four principles and ethical reasoning',
    steps: [
      { id: 's1', label: 'Autonomy: respect the informed patient’s choice', emphasis: 'key' },
      { id: 's2', label: 'Beneficence vs non-maleficence: weigh benefit against harm', emphasis: 'key' },
      { id: 's3', label: 'Justice: fair, non-discriminatory allocation', emphasis: 'key' },
      { id: 's4', label: 'Identify which principles actually conflict', emphasis: 'normal' },
      { id: 's5', label: 'Justify a balanced resolution using a structured method', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'A competent patient refuses a recommended blood transfusion', mechanism: 'Autonomy overrides beneficence', significance: 'key' },
    { sign: 'Choosing the option with the best risk-benefit balance', mechanism: 'Beneficence tempered by non-maleficence', significance: 'key' },
    { sign: 'Allocating a scarce ICU bed by clinical need, not social status', mechanism: 'Justice in practice', significance: 'key' },
    { sign: 'Withholding a diagnosis the patient wishes to know', mechanism: 'Breaches autonomy and truth-telling', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Two principles conflict, e.g. autonomy versus beneficence', meaning: 'Name them explicitly and weigh them — there is no default winner' },
    { clue: 'The patient has decision-making capacity and is informed', meaning: 'Their refusal is ethically and legally binding' },
    { clue: 'A resource is genuinely scarce', meaning: 'Apply justice — fair, transparent, needs-based criteria' },
    { clue: 'A request to break confidentiality', meaning: 'Permissible only within recognised legal and ethical limits' },
  ],

  treatment: [
    { logic: 'Balance the principles rather than rank them', detail: 'Weigh autonomy, beneficence, non-maleficence and justice against the specific facts of the case.' },
    { logic: 'Default to respecting a capable patient’s autonomy', detail: 'An informed, competent refusal stands even when the clinical team disagrees.' },
  ],

  mnemonics: [
    { hook: 'Four principles: Autonomy, Beneficence, Non-maleficence, Justice', expansion: ['Autonomy: respect informed choice', 'Beneficence: act in the best interest', 'Non-maleficence: do no harm', 'Justice: fairness and equity'] },
  ],

  traps: [
    {
      questionCategory: 'Autonomy vs beneficence',
      wrongInstinct: 'A competent patient refusing life-saving treatment should be treated anyway because it is in their best interest',
      rightAnswer: 'Respect the informed refusal of a competent patient, even when it leads to harm or death',
      why: 'Autonomy protects the right to refuse; beneficence cannot override a capable, informed decision.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A competent 30-year-old, after full explanation, refuses a life-saving blood transfusion on religious grounds. Which principle takes precedence?',
      options: [
        { id: 'a', text: 'Beneficence' },
        { id: 'b', text: 'Autonomy' },
        { id: 'c', text: 'Justice' },
        { id: 'd', text: 'Non-maleficence' },
      ],
      answerId: 'b',
      explanation: 'An informed, competent adult may refuse treatment; respect for autonomy takes precedence over the physician’s wish to benefit the patient.',
      tests: 'lecture',
    },
    {
      id: 'q2',
      stem: 'Allocating the single available ICU bed among several patients strictly on the basis of clinical need best reflects which principle?',
      options: [
        { id: 'a', text: 'Autonomy' },
        { id: 'b', text: 'Non-maleficence' },
        { id: 'c', text: 'Justice' },
        { id: 'd', text: 'Beneficence' },
      ],
      answerId: 'c',
      explanation: 'Fair, needs-based distribution of a scarce resource without discrimination is the principle of justice.',
      tests: 'lecture',
    },
  ],
};

export default fcp1MedicalEthicsPrinciples;
