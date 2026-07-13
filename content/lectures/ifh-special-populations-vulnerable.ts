import type { Lecture } from '../../lib/types';

export const ifhSpecialPopulationsVulnerable: Lecture = {
  id: 'ifh-special-populations-vulnerable',
  title: 'Vulnerable Populations',
  system: 'community',
  source: 'L8 — Caring for Special Populations',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Family Health' },
    { kind: 'lecture', label: 'L8 Special Populations' },
    { kind: 'mechanism', label: 'Inequality vs inequity' },
    { kind: 'disease', label: 'Health disparities · SDOH' },
    { kind: 'treatment', label: 'Cultural humility' },
  ],

  highYield: [
    '**Vulnerable populations** are groups at increased risk of poor health because of **social, economic, or structural disadvantage** — not because of biology alone. Core groups: the **elderly**, people with **disabilities**, **LGBTQ+**, **migrants/stateless persons**, **ethnic minorities** (e.g. Thai hill-tribes), the **poor**, prisoners, the homeless, and people with mental illness.',
    '**Inequality ≠ inequity.** A health **inequality** is any measurable difference between groups. A health **inequity** is a difference that is **unfair, avoidable, and unjust** — rooted in social disadvantage. All inequities are inequalities, but not all inequalities are inequities (menopause differs by sex — an inequality, not an inequity).',
    '**Vulnerability is driven by the social determinants of health** — income, education, housing, legal status, discrimination — the same forces named in the [[ifh-biopsychosocial-model]]. **Intersectionality:** overlapping identities (poor + migrant + female) **compound** risk rather than simply adding to it.',
    '**Cultural humility > cultural competence.** Competence implies a finite checklist you can "master"; humility is **lifelong self-reflection**, recognising your own bias and treating the patient as the expert on their own context. Care must be **culturally-sensitive and non-judgmental**.',
    'Recognising vulnerability is step one; acting on it is the [[ifh-special-populations-approach]]. The generalist ethos of [[ifh-family-medicine-principles]] — whole-person, continuous care — makes the family doctor the natural advocate for these patients.',
  ],

  mechanism: {
    title: 'Identify the group → map the disadvantage → inequality vs inequity → intersectionality → respond',
    steps: [
      { id: 's1', label: 'Identify the vulnerable group (elderly, disabled, LGBTQ+, migrant/stateless, ethnic minority, poor)' },
      { id: 's2', label: 'Map the social disadvantage that stacks against them', emphasis: 'key' },
      { id: 's3', label: 'Distinguish inequality (any gap) from inequity (unfair + avoidable + unjust)', emphasis: 'key' },
      { id: 's4', label: 'Recognise intersectionality — overlapping vulnerabilities compound risk' },
      { id: 's5', label: 'Respond with culturally-sensitive, non-judgmental care', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Vulnerability is about social risk, not biology', mechanism: 'Disadvantage in the determinants of health — not a disease — is what raises the risk', significance: 'key' },
    { sign: 'Inequity = unfair + avoidable + unjust', mechanism: 'The moral test that separates an inequity from a mere inequality', significance: 'key' },
    { sign: 'Intersectionality compounds, not just adds, risk', mechanism: 'Overlapping disadvantaged identities interact multiplicatively', significance: 'supportive' },
    { sign: 'Cultural humility beats cultural competence', mechanism: 'Lifelong self-reflection avoids the false confidence of a "mastered" checklist', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A stateless hill-tribe patient has no Thai ID card', meaning: 'No universal-coverage entitlement → a structural access barrier and a clear inequity, not just an inequality' },
    { clue: 'Life expectancy is years lower in the poorest district than the richest', meaning: 'A health inequity — the gap is avoidable and unfair, not biologically fixed' },
    { clue: 'An LGBTQ+ patient avoids disclosing their partner or identity', meaning: 'Anticipated stigma → you must create a safe, non-judgmental space before they will engage' },
    { clue: 'Sex-based difference such as who experiences menopause', meaning: 'An inequality but NOT an inequity — natural and unavoidable, so it fails the unfair/avoidable test' },
  ],

  treatment: [
    { logic: 'Deliver culturally-sensitive, non-judgmental care', detail: 'Use trained interpreters, avoid assumptions about beliefs or literacy, ask about the patient’s own explanatory model, and practise cultural humility rather than a stereotype checklist.' },
    { logic: 'Name the inequity and act on it', detail: 'Once you identify an unfair, avoidable barrier, move to advocacy and resource-linkage — the substance of [[ifh-special-populations-approach]].' },
  ],

  mnemonics: [
    { hook: 'Inequity = U-A-U', expansion: ['Unfair', 'Avoidable', 'Unjust — if a gap fails these, it is an inequality, not an inequity'] },
    { hook: 'Who is vulnerable? "ELDER-MEP"', expansion: ['ELDERly & disabled', 'Ethnic minorities', 'Migrants / stateless', 'Poor', '(+ LGBTQ+, prisoners, homeless, mentally ill)'] },
  ],

  traps: [
    {
      questionCategory: 'Inequality vs inequity',
      wrongInstinct: 'Every difference in health between two groups is a health inequity',
      rightAnswer: 'Only differences that are unfair, avoidable and unjust are inequities; natural, unavoidable differences are inequalities',
      why: 'A sex difference in menopause is an inequality but not an inequity — the moral test (unfair + avoidable) is what the term actually requires.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which statement best distinguishes a health inequity from a health inequality?',
      options: [
        { id: 'a', text: 'An inequity is any measurable difference in health between two groups' },
        { id: 'b', text: 'An inequity is a difference that is unfair, avoidable, and unjust' },
        { id: 'c', text: 'An inequity is a purely biological difference between populations' },
        { id: 'd', text: 'The two terms mean exactly the same thing' },
      ],
      answerId: 'b',
      explanation: 'An inequality is any measurable difference; an inequity is the subset that is unfair, avoidable, and unjust — usually rooted in social disadvantage.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A stateless ethnic-minority patient cannot access subsidised care because they lack a national ID card. This is best described as:',
      options: [
        { id: 'a', text: 'An unavoidable biological inequality' },
        { id: 'b', text: 'A structural barrier producing a health inequity' },
        { id: 'c', text: 'A personal lifestyle choice' },
        { id: 'd', text: 'An acceptable cost-containment measure' },
      ],
      answerId: 'b',
      explanation: 'A legal/structural barrier that unfairly and avoidably blocks access to care is a health inequity, and marks the patient as a vulnerable population needing advocacy.',
      tests: 'investigation',
    },
  ],
};

export default ifhSpecialPopulationsVulnerable;
