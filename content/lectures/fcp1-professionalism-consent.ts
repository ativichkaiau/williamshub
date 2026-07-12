import type { Lecture } from '../../lib/types';

export const fcp1ProfessionalismConsent: Lecture = {
  id: 'fcp1-professionalism-consent',
  title: 'Professionalism & Informed Consent',
  system: 'clinical',
  source: 'L37 — Medical Ethics & Professionalism',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L37 Ethics & Professionalism' },
    { kind: 'mechanism', label: 'Capacity & disclosure' },
    { kind: 'mechanism', label: 'Voluntariness' },
    { kind: 'treatment', label: 'Consent process' },
  ],

  highYield: [
    '**Valid informed consent needs three elements — capacity, disclosure and voluntariness** — plus the patient’s actual agreement, for the **specific** procedure. It is the practical expression of autonomy [[fcp1-medical-ethics-principles]].',
    '**Capacity** is the ability to **understand, retain, weigh and communicate** a decision; it is **decision- and time-specific**, and adults are presumed to have it until shown otherwise.',
    '**Disclosure** covers the nature, **material risks**, benefits and **alternatives (including no treatment)** — the modern standard is what a **reasonable patient** would want to know (Montgomery), not simply what a doctor chooses to tell.',
    '**Voluntariness** means the decision is free from coercion or undue influence; consent obtained under pressure is invalid.',
    'Exceptions: **emergencies** (act in the best interests of an incapacitated patient), **minors** (guardian or mature-minor consent) and **incapacity** (best-interests or surrogate). Professionalism adds **truth-telling, confidentiality** [[fcp1-medical-negligence-confidentiality]] and the **duty of candour**.',
  ],

  mechanism: {
    title: 'Elements of valid consent',
    steps: [
      { id: 's1', label: 'Capacity: understand, retain, weigh, communicate', emphasis: 'key' },
      { id: 's2', label: 'Disclosure: material risks, benefits, alternatives', emphasis: 'key' },
      { id: 's3', label: 'Voluntariness: no coercion or undue influence', emphasis: 'key' },
      { id: 's4', label: 'Patient agrees to the specific procedure', emphasis: 'key' },
      { id: 's5', label: 'No capacity → best interests / surrogate / emergency', emphasis: 'normal' },
    ],
  },

  examFindings: [
    { sign: 'Patient can understand, retain, weigh and communicate a choice', mechanism: 'Has capacity — the consent or refusal is valid', significance: 'key' },
    { sign: 'Only common risks disclosed while a material risk is omitted', mechanism: 'Inadequate disclosure — consent may be invalid', significance: 'key' },
    { sign: 'A family pressures a hesitant patient into agreeing', mechanism: 'Voluntariness is compromised', significance: 'supportive' },
    { sign: 'An unconscious patient needs emergency surgery', mechanism: 'Treat in the best interests under necessity', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'An adult who is informed, capable and refusing treatment', meaning: 'The refusal is valid — respect and document it' },
    { clue: 'Fluctuating capacity', meaning: 'Assess capacity at the time of the decision and reassess' },
    { clue: 'A child brought by a guardian', meaning: 'The guardian consents; consider the mature-minor concept and the child’s assent' },
    { clue: 'A consent form signed but risks never explained', meaning: 'A signature alone is not informed consent' },
  ],

  treatment: [
    { logic: 'Treat consent as a process, not a form', detail: 'Disclose, check understanding, invite questions and allow a voluntary decision — the signature only records it.' },
    { logic: 'Match the pathway to capacity', detail: 'Capacity present → respect the choice; capacity absent → best interests or a surrogate; emergency → the doctrine of necessity.' },
    { logic: 'Practise the duty of candour', detail: 'Be honest, disclose errors, and maintain confidentiality and professional boundaries.' },
  ],

  mnemonics: [
    { hook: 'Consent = Capacity + Disclosure + Voluntariness', expansion: ['Capacity: understand, retain, weigh, communicate', 'Disclosure: material risks and alternatives', 'Voluntariness: no coercion'] },
  ],

  traps: [
    {
      questionCategory: 'Signature vs informed consent',
      wrongInstinct: 'A signed consent form proves the patient gave valid informed consent',
      rightAnswer: 'A signature is only evidence — valid consent requires capacity, adequate disclosure and voluntariness',
      why: 'Consent is the informed decision-making process; a form signed without disclosure or capacity is not valid.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which combination is required for valid informed consent?',
      options: [
        { id: 'a', text: 'Capacity, disclosure and voluntariness' },
        { id: 'b', text: 'A signed form and a witness' },
        { id: 'c', text: 'Family agreement and a signature' },
        { id: 'd', text: 'The doctor’s recommendation alone' },
      ],
      answerId: 'a',
      explanation: 'Valid consent requires a patient with capacity, adequate disclosure of material information, and a voluntary decision free from coercion.',
      tests: 'lecture',
    },
    {
      id: 'q2',
      stem: 'Under the Montgomery standard, the adequacy of risk disclosure is judged by:',
      options: [
        { id: 'a', text: 'What most doctors would customarily disclose' },
        { id: 'b', text: 'What a reasonable patient in that position would want to know' },
        { id: 'c', text: 'Only risks with a likelihood above 1 per cent' },
        { id: 'd', text: 'Whatever the patient happens to ask about' },
      ],
      answerId: 'b',
      explanation: 'Montgomery shifted the test to a patient-centred standard: the material risks a reasonable patient in the patient’s position would wish to know.',
      tests: 'lecture',
    },
  ],
};

export default fcp1ProfessionalismConsent;
