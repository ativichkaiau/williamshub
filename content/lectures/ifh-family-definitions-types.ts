import type { Lecture } from '../../lib/types';

export const ifhFamilyDefinitionsTypes: Lecture = {
  id: 'ifh-family-definitions-types',
  title: 'Family & Household: Definitions & Types',
  system: 'community',
  source: 'L4 — Family Influences on Health',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Family Health' },
    { kind: 'lecture', label: 'L4 Family Influences on Health' },
    { kind: 'mechanism', label: 'Nuclear · Extended · Blended' },
    { kind: 'exam', label: 'Family vs household · Thai trends' },
  ],

  highYield: [
    '**Family ≠ household.** A **family** is a group linked by **blood, marriage/partnership or adoption**; a **household** is people who **share a dwelling** (the same “cooking pot”) and may be non-kin. They overlap but are not identical — flatmates are a household, a migrant father is family but not in the household.',
    '**Core family types:** **nuclear** (a couple ± their children), **extended** (multiple generations/kin under one roof), **single-parent**, and **blended/step** (remarriage merging children from prior unions) — plus childless couples and same-sex families.',
    '**Additional forms** matter clinically: **skip-generation** (grandparents raising grandchildren), cohabiting, communal, and the rising **single-person household**. Use a [[ifh-genogram]] to record who is actually present.',
    '**Thai patterns & demographic change.** Traditional **extended** families are giving way to more **nuclear and single-person** households; falling fertility plus rising longevity is producing an **ageing society**, and labour migration drives **skipped-generation** families where grandparents raise the children.',
    '**Why it matters:** family type shapes **caregiving capacity, resources and risk**. Knowing who lives with and cares for the patient is the first step of family assessment — link to [[ifh-family-assessment-tools]] and [[ifh-family-health-impact]].',
  ],

  mechanism: {
    title: 'Define family vs household → classify the type → read Thai trends → apply to care',
    steps: [
      { id: 's1', label: 'Distinguish family (kin/marriage/adoption) from household (shared dwelling)', emphasis: 'key' },
      { id: 's2', label: 'Classify the type (nuclear, extended, single-parent, blended, single-person)' },
      { id: 's3', label: 'Note special/transitional forms (skip-generation, cohabiting, same-sex)' },
      { id: 's4', label: 'Place it against Thai trends: fewer extended, more nuclear/single, ageing', emphasis: 'key' },
      { id: 's5', label: 'Translate structure into caregiving capacity & risk for the plan', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Family ≠ household', mechanism: 'Family = kinship/marriage/adoption ties; household = shares a dwelling & resources (may be non-kin)', significance: 'key' },
    { sign: 'A blended (step) family forms when remarriage merges children from prior unions', mechanism: 'New parental subsystems and step-sibling ties reshape roles and boundaries', significance: 'supportive' },
    { sign: 'Skip-generation families: grandparents raising grandchildren', mechanism: 'Parental labour migration is a major Thai driver — high caregiver load', significance: 'key' },
    { sign: 'Thailand is shifting from extended toward nuclear and single-person households, and is ageing', mechanism: 'Falling fertility + rising longevity + urban migration', significance: 'key' },
  ],

  investigations: [
    { clue: 'Three university friends renting an apartment and splitting the bills', meaning: 'A household but not a family — no kinship tie' },
    { clue: 'A 70-year-old grandmother is sole carer for two grandchildren while the parents work in Bangkok', meaning: 'A skip-generation family — assess caregiver burden and resources' },
    { clue: 'A remarried couple raising his children and hers together under one roof', meaning: 'A blended/step family — watch for role and boundary issues' },
    { clue: 'An 80-year-old widower living entirely alone', meaning: 'A single-person household in an ageing society — screen for isolation and support' },
  ],

  treatment: [
    { logic: 'Ask who lives with and cares for the patient — never assume', detail: 'Map the actual household and family type (a genogram helps) before building a plan; structure determines caregiving capacity and risk.' },
    { logic: 'Anticipate the Thai trend', detail: 'Expect more single elders and skip-generation carers; screen these structures proactively for isolation and burden.' },
  ],

  mnemonics: [
    { hook: 'N-E-S-B: the family-type shortlist', expansion: ['Nuclear — couple ± children', 'Extended — multiple generations/kin', 'Single-parent', 'Blended (step) — remarriage merges children'] },
  ],

  traps: [
    {
      questionCategory: 'Family vs household',
      wrongInstinct: 'Family and household mean the same thing',
      rightAnswer: 'Household = people sharing a dwelling/resources (can be non-kin); family = people linked by blood, marriage or adoption',
      why: 'Flatmates are a household but not a family; a migrant father is family but not in the household — each carries different clinical implications.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Three unrelated students share a rented flat and split the bills. In demographic terms they are best described as…',
      options: [
        { id: 'a', text: 'A household but not a family' },
        { id: 'b', text: 'A nuclear family' },
        { id: 'c', text: 'A blended family' },
        { id: 'd', text: 'An extended family' },
      ],
      answerId: 'a',
      explanation: 'A household is defined by sharing a dwelling and resources and need not involve kinship. With no ties of blood, marriage or adoption, the flatmates form a household but not a family.',
      tests: 'lecture',
    },
    {
      id: 'q2',
      stem: 'A 70-year-old grandmother is the sole caregiver for her grandchildren while their parents work in another city — an increasingly common Thai pattern. This is a…',
      options: [
        { id: 'a', text: 'Skip-generation family' },
        { id: 'b', text: 'Nuclear family' },
        { id: 'c', text: 'Blended family' },
        { id: 'd', text: 'Childless family' },
      ],
      answerId: 'a',
      explanation: 'When the middle generation is absent (often through labour migration) and grandparents raise the grandchildren, the family is skip-generation — a form flagged for high caregiver burden in an ageing Thai society.',
      tests: 'investigation',
    },
  ],
};

export default ifhFamilyDefinitionsTypes;
