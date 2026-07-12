import type { Lecture } from '../../lib/types';

export const ifhSpecialPopulationsApproach: Lecture = {
  id: 'ifh-special-populations-approach',
  title: 'Approach to Special Populations',
  system: 'community',
  source: 'L8 — Caring for Special Populations',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Family Health' },
    { kind: 'lecture', label: 'L8 Special Populations' },
    { kind: 'mechanism', label: '5 A’s of access' },
    { kind: 'treatment', label: 'Advocacy · home visit · continuity' },
    { kind: 'investigation', label: 'Barrier identification' },
  ],

  highYield: [
    '**Access is multi-dimensional — the 5 A’s** (Penchansky & Thomas): **Availability** (is the service there?), **Accessibility** (can they reach it?), **Accommodation** (do the hours/systems fit?), **Affordability** (can they pay?), and **Acceptability** (is it culturally/attitudinally acceptable?). A barrier in any A blocks care.',
    '**Advocacy is part of the clinical role, not an optional extra.** Once you identify a vulnerable patient (see [[ifh-special-populations-vulnerable]]), the family doctor helps them **navigate or remove** barriers — connecting them to entitlements, coverage, and community resources.',
    '**The home visit reveals what the clinic hides.** Living conditions, medication storage, safety hazards, and real adherence barriers are only visible at home — invaluable for the housebound elderly, disabled, or complex patients.',
    '**Individualise and provide continuity.** Care must be tailored to the person’s context, and **continuity itself is therapeutic** for marginalised patients — one trusted doctor who coordinates care, the core promise of [[ifh-family-medicine-principles]] and the smooth [[ifh-patient-journey]].',
    '**Map resources with SCREEM and the family.** The [[ifh-family-assessment-tools]] (SCREEM: Social, Cultural, Religious, Economic, Educational, Medical resources) and the wider [[ifh-social-support-health]] network are your inventory for what support the patient can actually draw on.',
  ],

  mechanism: {
    title: 'Identify barriers → advocate → individualise → mobilise community → continuity',
    steps: [
      { id: 's1', label: 'Identify the access barrier using the 5 A’s', emphasis: 'key' },
      { id: 's2', label: 'Advocate — help navigate or remove the barrier' },
      { id: 's3', label: 'Individualise the plan to the patient’s real context', emphasis: 'key' },
      { id: 's4', label: 'Mobilise community resources and home visits' },
      { id: 's5', label: 'Provide continuity — the family doctor as the constant thread', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Access has five dimensions (the 5 A’s)', mechanism: 'Availability, Accessibility, Accommodation, Affordability, Acceptability — a gap in any one blocks care', significance: 'key' },
    { sign: 'The home visit reveals hidden context', mechanism: 'Housing, storage, safety, and adherence barriers are invisible in clinic', significance: 'key' },
    { sign: 'Continuity is itself therapeutic', mechanism: 'A single trusted, coordinating doctor lowers the threshold for marginalised patients to seek care', significance: 'supportive' },
    { sign: 'Advocacy is a clinical duty', mechanism: 'Removing structural barriers is part of, not separate from, treating the patient', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A rural patient cannot afford the bus fare to hospital', meaning: 'Accessibility + Affordability barrier → arrange a home visit or local/community service' },
    { clue: 'A migrant patient speaks only Burmese', meaning: 'An Acceptability/communication barrier → use a trained professional interpreter, never a family member' },
    { clue: 'A patient on insulin has no refrigerator at home', meaning: 'A home visit uncovers a storage/adherence problem the clinic history missed' },
    { clue: 'A complex elderly patient is bounced between specialists with no plan', meaning: 'Fragmented care → needs a coordinating family doctor to restore continuity' },
  ],

  treatment: [
    { logic: 'Identify and dismantle the specific access barrier', detail: 'Screen against the 5 A’s, then advocate — link to coverage/entitlements and community resources, and use SCREEM (see [[ifh-family-assessment-tools]]) to inventory support.' },
    { logic: 'Use home visits and continuity to individualise care', detail: 'Visit when context matters, keep the same coordinating doctor, and tailor the plan to the patient’s living reality rather than an idealised protocol.' },
  ],

  mnemonics: [
    { hook: 'The 5 A’s of access', expansion: ['Availability', 'Accessibility', 'Accommodation', 'Affordability', 'Acceptability'] },
  ],

  traps: [
    {
      questionCategory: 'Using an interpreter',
      wrongInstinct: 'Ask the accompanying relative to translate — it is quicker and they know the patient',
      rightAnswer: 'Use a trained, professional interpreter',
      why: 'A relative may filter, omit, or add information, breaches confidentiality, and can have conflicts of interest — accuracy and privacy require a professional.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A clinic is open only during hours when a patient must work, so they can never attend. Which of the 5 A’s of access is the barrier?',
      options: [
        { id: 'a', text: 'Availability' },
        { id: 'b', text: 'Affordability' },
        { id: 'c', text: 'Accommodation' },
        { id: 'd', text: 'Acceptability' },
      ],
      answerId: 'c',
      explanation: 'Accommodation refers to how well the service is organised to fit patients’ constraints — hours, appointment systems, and physical setup. Mismatched opening hours is an accommodation barrier.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A migrant patient with limited Thai attends with their teenage child. What is the most appropriate way to communicate?',
      options: [
        { id: 'a', text: 'Ask the teenage child to interpret' },
        { id: 'b', text: 'Use a trained professional interpreter' },
        { id: 'c', text: 'Proceed in Thai and hope they understand' },
        { id: 'd', text: 'Postpone all care until they learn Thai' },
      ],
      answerId: 'b',
      explanation: 'A trained professional interpreter protects accuracy and confidentiality and avoids the conflicts and filtering that occur when a family member — especially a child — interprets.',
      tests: 'treatment',
    },
  ],
};

export default ifhSpecialPopulationsApproach;
