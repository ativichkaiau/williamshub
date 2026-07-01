import type { Lecture } from '../../lib/types';

export const informedConsentIrb: Lecture = {
  id: 'informed-consent-irb',
  title: 'Informed Consent, Risk/Benefit & IRB Review',
  system: 'research',
  source: 'L7 — Human Research Ethics',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Research' },
    { kind: 'lecture', label: 'L7 Research Ethics' },
    { kind: 'mechanism', label: 'Consent · IRB levels' },
    { kind: 'exam', label: 'Assent · review type' },
  ],

  highYield: [
    '**Informed consent has three elements: Information → Comprehension → Voluntariness.** The participant must be *told* the purpose, procedures, risks, benefits, and alternatives (information), *understand* it (comprehension), and *agree freely without coercion* (voluntariness), knowing they may **withdraw at any time**. Consent is a *process*, not just a signature.',
    '**Special populations — assent & surrogate consent.** Children/those with reduced capacity cannot give valid consent. **Parental/guardian permission** plus the child’s **assent** (agreement) is required — *simple* assent for younger children, *full* assent for adolescents. For incapacitated adults, a **surrogate (legally authorised representative)** consents. Vulnerable groups get *additional safeguards*.',
    '**Risk identification — three domains.** **Physical** (pain, injury, illness), **psychological** (stress, anxiety, embarrassment), and **social** (stigma, discrimination, financial or legal harm). Separate the risk of the **disease**, of **standard care**, and of the **research itself** — only the last is attributable to participating.',
    '**Benefit identification.** **Direct** (to the participant — e.g. cure, symptom relief), **collateral/indirect** (adjunctive care received during the study), and **societal** (generalisable knowledge, better future treatment). Beneficence requires the **risk–benefit balance** to be acceptable, with risks minimised.',
    '**IRB/REC review has three levels, set by risk.** **Exempt** (not human-subjects research, or specified minimal-risk categories). **Expedited** — for research involving **no more than minimal risk** (reviewed by a chair/designee). **Full board** — for research **greater than minimal risk**. The committee applies the 45 CFR 46 approval criteria: risks minimised & justified, equitable selection, consent sought and documented, privacy/confidentiality protected, safeguards for the vulnerable.',
  ],

  mechanism: {
    title: 'Protect the participant → gate at the IRB',
    steps: [
      { id: 's1', label: 'Consent: Information → Comprehension → Voluntariness', emphasis: 'key' },
      { id: 's2', label: 'Reduced capacity → parental permission + assent / surrogate', emphasis: 'key' },
      { id: 's3', label: 'Weigh risks (physical/psych/social) vs benefits (direct/collateral/societal)' },
      { id: 's4', label: 'IRB level by risk: exempt · expedited (≤minimal) · full board (>minimal)', emphasis: 'key' },
      { id: 's5', label: 'Approve only if risks minimised, selection equitable, consent + privacy assured' },
    ],
  },

  examFindings: [
    { sign: 'Consent = Information + Comprehension + Voluntariness', mechanism: 'All three needed for valid informed consent', significance: 'key' },
    { sign: 'Child: parental permission + assent', mechanism: 'Minors cannot consent; assent = the child’s own agreement', significance: 'key' },
    { sign: 'Expedited review = no more than minimal risk', mechanism: 'Full board reserved for greater-than-minimal risk', significance: 'key' },
    { sign: 'Surrogate (legally authorised representative)', mechanism: 'Consent path for incapacitated adults', significance: 'supportive' },
    { sign: 'Risk of research vs disease vs standard care', mechanism: 'Only research-attributable risk counts against the study', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A 7-year-old enrolled in a trial', meaning: 'Parental permission + the child’s (simple) assent' },
    { clue: 'Anonymous survey with no sensitive data', meaning: 'Likely exempt or expedited (minimal risk)' },
    { clue: 'First-in-human drug with potential serious adverse effects', meaning: 'Greater than minimal risk → full board review' },
    { clue: 'Unconscious ICU patient, no legal representative present', meaning: 'Need surrogate consent (or a valid emergency-research waiver)' },
  ],

  treatment: [
    { logic: 'Best practice', detail: 'Treat consent as an ongoing conversation; minimise and disclose all risk domains; match the IRB review level to the risk; build in extra safeguards for children and other vulnerable groups.' },
  ],

  mnemonics: [
    { hook: 'Consent = "I See Value" → Information, Comprehension, Voluntariness', expansion: ['Plus the right to withdraw'] },
    { hook: 'Review level tracks risk: Exempt → Expedited (minimal) → Full board (>minimal)', expansion: ['More risk = more scrutiny'] },
  ],

  traps: [
    {
      questionCategory: 'Assent vs consent',
      wrongInstinct: 'A child’s assent alone is enough to enrol them in research',
      rightAnswer: 'Minors give *assent* (agreement) but cannot give legal consent — parental/guardian *permission* is also required',
      why: 'Assent respects the child’s developing autonomy but does not replace the legally required parental permission.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A study poses no more than minimal risk to participants. Which level of IRB/REC review is appropriate?',
      options: [
        { id: 'a', text: 'Full board review' },
        { id: 'b', text: 'Expedited review' },
        { id: 'c', text: 'No review is ever needed' },
        { id: 'd', text: 'Only post-approval review' },
      ],
      answerId: 'b',
      explanation: 'Minimal-risk research qualifies for expedited review (by the chair or a designee). Greater-than-minimal risk requires full board review.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which trio constitutes the essential elements of valid informed consent?',
      options: [
        { id: 'a', text: 'Respect, beneficence, justice' },
        { id: 'b', text: 'Information, comprehension, voluntariness' },
        { id: 'c', text: 'Physical, psychological, social' },
        { id: 'd', text: 'Direct, collateral, societal' },
      ],
      answerId: 'b',
      explanation: 'Valid consent requires adequate information, comprehension of it, and voluntary agreement. The other trios are the Belmont principles, risk domains, and benefit types respectively.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default informedConsentIrb;
