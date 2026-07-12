import type { Lecture } from '../../lib/types';

export const ichDescriptiveEpiSurveillance: Lecture = {
  id: 'ich-descriptive-epi-surveillance',
  title: 'Descriptive Epidemiology & Surveillance',
  system: 'community',
  source: 'L10 — Epidemiological Principles',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Community Health' },
    { kind: 'lecture', label: 'L10 Epidemiological Principles' },
    { kind: 'mechanism', label: 'Person · Place · Time' },
    { kind: 'investigation', label: 'Passive vs active surveillance' },
  ],

  highYield: [
    '**Descriptive epidemiology organises data by person, place, and time.** **Person** = who (age, sex, occupation, behaviour); **Place** = where (spot maps, urban/rural, region); **Time** = when (secular trend, seasonal, epidemic). It answers who/where/when and **generates hypotheses** for [[ich-epi-study-designs]] to test.',
    '**Surveillance = the ongoing, systematic collection, analysis, interpretation, and dissemination of health data — for action.** The mantra is **“information for action”**: data that never loops back to a decision is wasted.',
    '**Passive vs active surveillance.** **Passive** — providers report routinely to the health authority (cheap, sustainable, but **under-reports**). **Active** — the health office actively seeks out cases (complete but costly). **Sentinel** sites and **syndromic** (symptom-based) systems give timely early warning without counting every case.',
    '**Notifiable (reportable) diseases** are those a clinician is legally required to report (in Thailand via the **Report 506** system), enabling rapid detection of outbreaks of public-health importance.',
    '**A signal is a rise above the expected/endemic baseline.** Good systems balance being **simple, timely, sensitive, and representative**; a sudden apparent rise may be a true outbreak or an artefact of better reporting — see occurrence patterns in [[ich-disease-occurrence-concepts]].',
  ],

  mechanism: {
    title: 'The surveillance loop: collect → analyse → interpret → disseminate → act',
    steps: [
      { id: 's1', label: 'Collect with a standard case definition' },
      { id: 's2', label: 'Analyse by person, place, and time', emphasis: 'key' },
      { id: 's3', label: 'Interpret against the expected/endemic level', emphasis: 'key' },
      { id: 's4', label: 'Disseminate to those who can act' },
      { id: 's5', label: 'Act — then feed the result back in', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Descriptive epi generates hypotheses; it does not test them', mechanism: 'Person/place/time patterns suggest causes but lack a comparison group', significance: 'key' },
    { sign: 'Surveillance is “information for action”', mechanism: 'The defining feature is the loop back to a public-health decision', significance: 'key' },
    { sign: 'Passive under-reports but is sustainable; active is complete but costly', mechanism: 'Trade-off between effort/cost and completeness of case capture', significance: 'key' },
    { sign: 'A standard case definition makes counts comparable', mechanism: 'Consistent criteria let you compare across places and over time', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A spot map shows cases clustered around one water pump', meaning: 'A place pattern → common-source hypothesis (the classic Snow approach)' },
    { clue: 'Dengue cases peak every rainy season', meaning: 'A time (seasonal) pattern tied to the vector’s breeding' },
    { clue: 'A passive system suddenly reports many more cases', meaning: 'Could be a real rise or just improved reporting — verify before alarm' },
    { clue: 'A few chosen clinics track influenza-like illness', meaning: 'Sentinel surveillance — trends without counting every case' },
  ],

  treatment: [
    { logic: 'Close the loop', detail: 'Feed surveillance findings back to those who act (clinicians, programme managers), and standardise case definitions so the data stay comparable.' },
  ],

  mnemonics: [
    { hook: 'Descriptive epi = the 3 W’s: Who, Where, When', expansion: ['Who = person', 'Where = place', 'When = time'] },
    { hook: 'Surveillance = information for Action', expansion: ['Passive = they report to you', 'Active = you go and find'] },
  ],

  traps: [
    {
      questionCategory: 'Passive vs active surveillance',
      wrongInstinct: 'A system where clinicians routinely send in notifications is “active”',
      rightAnswer: 'That is passive surveillance; active means the health office itself seeks out cases',
      why: 'The label depends on who does the work of finding cases, not on how diligent the reporting is.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A provincial health office phones every hospital weekly and asks staff to search records for new measles cases. This is best described as:',
      options: [
        { id: 'a', text: 'Passive surveillance' },
        { id: 'b', text: 'Active surveillance' },
        { id: 'c', text: 'An analytic cohort study' },
        { id: 'd', text: 'A case-control study' },
      ],
      answerId: 'b',
      explanation: 'When the health authority actively seeks out cases rather than waiting for routine reports, it is active surveillance — more complete but more resource-intensive than passive reporting.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'Grouping outbreak cases by patient age, then by district, then by week of onset uses which descriptive framework?',
      options: [
        { id: 'a', text: 'Agent–host–environment triad' },
        { id: 'b', text: 'Person, place, and time' },
        { id: 'c', text: 'Sensitivity and specificity' },
        { id: 'd', text: 'The five steps of EBM' },
      ],
      answerId: 'b',
      explanation: 'Descriptive epidemiology characterises health events by person (age), place (district), and time (week of onset) — the standard first pass that generates hypotheses.',
      tests: 'exam',
    },
  ],
};

export default ichDescriptiveEpiSurveillance;
