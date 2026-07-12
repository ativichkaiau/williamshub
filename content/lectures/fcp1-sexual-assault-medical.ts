import type { Lecture } from '../../lib/types';

export const fcp1SexualAssaultMedical: Lecture = {
  id: 'fcp1-sexual-assault-medical',
  title: 'Sexual Assault: Medical Care',
  system: 'clinical',
  source: 'L36 — Sexual Assault',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L36 Sexual Assault' },
    { kind: 'treatment', label: 'EC · HIV PEP · STI cover' },
    { kind: 'mechanism', label: 'Trauma-informed care' },
    { kind: 'investigation', label: 'Baseline STI/HIV testing' },
  ],

  highYield: [
    '**Care comes before evidence:** treat **life-threatening injuries first** (ABCDE [[fcp1-trauma-primary-survey]]), then provide medical care, integrating but never prioritising forensic needs [[fcp1-sexual-assault-forensic]] over the survivor.',
    '**Trauma-informed practice:** ensure privacy, offer a support person or chaperone, return control to the survivor, and take **explicit consent for each step** [[fcp1-professionalism-consent]] — medical care, examination, evidence collection and release of information are consented separately.',
    '**Prophylaxis is time-critical:** **emergency contraception** (within 72 hours), **HIV post-exposure prophylaxis** (start as soon as possible, within 72 hours), **empiric STI cover** (gonorrhoea, chlamydia, trichomoniasis) and **hepatitis B**, with tetanus for wounds.',
    'Take **baseline STI, HIV, hepatitis and pregnancy testing** with arranged **follow-up**, and document any injuries objectively — remembering that most survivors have no visible genital injury.',
    '**Psychological support and safeguarding:** assess ongoing safety, involve counselling and advocacy services, and recognise that **minors and vulnerable adults trigger mandatory reporting** [[fcp1-sexual-assault-forensic]]. The approach rests on respect for autonomy [[fcp1-medical-ethics-principles]].',
  ],

  mechanism: {
    title: 'Medical care of a sexual-assault survivor',
    steps: [
      { id: 's1', label: 'Treat life-threatening injuries first (ABCDE)', emphasis: 'danger' },
      { id: 's2', label: 'Trauma-informed consent for each step', emphasis: 'key' },
      { id: 's3', label: 'History and objective injury documentation', emphasis: 'normal' },
      { id: 's4', label: 'Time-critical prophylaxis: EC, HIV PEP, STI, hepatitis B', emphasis: 'key' },
      { id: 's5', label: 'Psychological support, safety planning and follow-up', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'General and extragenital injuries such as bruises or defensive wounds', mechanism: 'Documented objectively for care and the record', significance: 'key' },
    { sign: 'Absence of genital injury', mechanism: 'Most survivors have none — it neither confirms nor refutes assault', significance: 'key' },
    { sign: 'Variable emotional state (calm, distressed or dissociated)', mechanism: 'No single reaction is typical — do not judge credibility', significance: 'supportive' },
    { sign: 'Signs of ongoing danger or coercion', mechanism: 'Triggers safeguarding and safety planning', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Baseline HIV, hepatitis B and C, syphilis, STI swabs and a pregnancy test', meaning: 'Establishes a baseline; repeat at follow-up intervals' },
    { clue: 'Presentation within 72 hours', meaning: 'Window for HIV PEP and emergency contraception — act now' },
    { clue: 'Genital or extragenital injury', meaning: 'Document objectively by site and size; photograph only with consent' },
    { clue: 'Disclosure involving a minor or vulnerable adult', meaning: 'Mandatory reporting and a safeguarding pathway apply' },
  ],

  treatment: [
    { logic: 'Life and safety first', detail: 'Manage injuries, then address emotional safety before any forensic step.' },
    { logic: 'Offer time-critical prophylaxis', detail: 'Emergency contraception, HIV post-exposure prophylaxis, empiric STI treatment, hepatitis B (with immunoglobulin if indicated) and tetanus — each within its window and after consent.' },
    { logic: 'Support and arrange follow-up', detail: 'Connect the survivor to counselling and advocacy, arrange STI, HIV and pregnancy follow-up, and document a safety plan.' },
  ],

  mnemonics: [
    { hook: 'Care, Consent, Cover, Counsel', expansion: ['Care for injuries first', 'Consent for each step separately', 'Cover: EC, HIV PEP, STI, hepatitis B', 'Counsel and arrange follow-up'] },
  ],

  traps: [
    {
      questionCategory: 'Injury and credibility',
      wrongInstinct: 'The absence of genital injury means an assault probably did not occur',
      rightAnswer: 'Most survivors have no genital injury — its absence neither confirms nor refutes assault',
      why: 'Injury is often absent; the clinician documents findings objectively and does not adjudicate the allegation.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 24-year-old presents 10 hours after a sexual assault and is medically stable. After obtaining consent, the most appropriate immediate priority is to:',
      options: [
        { id: 'a', text: 'Delay all treatment until the police arrive' },
        { id: 'b', text: 'Offer emergency contraception and start HIV post-exposure prophylaxis' },
        { id: 'c', text: 'Prescribe antibiotics only after positive STI results return' },
        { id: 'd', text: 'Photograph injuries before obtaining consent' },
      ],
      answerId: 'b',
      explanation: 'Emergency contraception and HIV post-exposure prophylaxis are time-critical within 72 hours and should be offered promptly after consent, independent of any forensic process.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'Which statement best reflects a trauma-informed approach to a sexual-assault survivor?',
      options: [
        { id: 'a', text: 'A single blanket consent covers examination, evidence and information release' },
        { id: 'b', text: 'Evidence collection should always precede treatment of injuries' },
        { id: 'c', text: 'Obtain consent separately for each step and allow the survivor to decline any part' },
        { id: 'd', text: 'The physician decides what is in the survivor’s best interest without discussion' },
      ],
      answerId: 'c',
      explanation: 'Trauma-informed care returns control to the survivor: consent is sought separately for care, examination, evidence and disclosure, and any part may be declined.',
      tests: 'lecture',
    },
  ],
};

export default fcp1SexualAssaultMedical;
