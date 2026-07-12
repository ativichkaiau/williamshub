import type { Lecture } from '../../lib/types';

export const ichEpiStudyDesigns: Lecture = {
  id: 'ich-epi-study-designs',
  title: 'Study Designs & Outbreak Investigation',
  system: 'community',
  source: 'L11 — Epidemiological Methods',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Community Health' },
    { kind: 'lecture', label: 'L11 Epidemiological Methods' },
    { kind: 'mechanism', label: 'Cohort · Case-control · Cross-sectional' },
    { kind: 'investigation', label: 'Outbreak steps · Epidemic curve' },
  ],

  highYield: [
    '**Descriptive vs analytic.** Descriptive studies (case report/series, cross-sectional survey, ecological) describe person/place/time and **generate hypotheses**; analytic studies add a **comparison group** to **test** them. Experimental (RCT) analytic designs are detailed in [[ers-study-designs]].',
    '**Cohort — exposure → outcome (forward).** Start with exposed vs unexposed, follow for incidence → **RR**. Strong for temporality, rare exposures, and multiple outcomes; weak for rare diseases, and costly/slow with loss to follow-up.',
    '**Case-control — disease → exposure (backward).** Start with cases vs controls, look back at exposure → **OR**. Efficient for **rare diseases** and quick/cheap; prone to **recall and selection bias**, and cannot give incidence. **Cross-sectional** measures exposure and outcome at once (prevalence) but gives **no temporality**; **ecological** studies use group-level data and risk the **ecological fallacy**. Measures come from [[ich-measures-of-association]].',
    '**Outbreak investigation — the core sequence:** verify the outbreak & confirm the diagnosis → set a **case definition** → find/count cases (line list) → **descriptive epi** (person/place/time) and draw the **epidemic curve** → form hypotheses → test them with an analytic study (**attack rates**) → implement **control measures** → communicate → maintain surveillance.',
    '**Attack rate = ill ÷ at-risk during the outbreak** (a short-period cumulative incidence). **Food-specific attack rates** implicate the vehicle with the highest rate/RR. The **epidemic curve’s shape** distinguishes a **point source** (single sharp peak within one incubation period) from a **propagated** outbreak (successive peaks ~one incubation period apart).',
  ],

  mechanism: {
    title: 'Outbreak response: verify → define/find → describe (epi curve) → test → control',
    steps: [
      { id: 's1', label: 'Verify the outbreak & confirm the diagnosis', emphasis: 'key' },
      { id: 's2', label: 'Set a case definition; find and line-list cases' },
      { id: 's3', label: 'Descriptive epi → epidemic curve (person/place/time)', emphasis: 'key' },
      { id: 's4', label: 'Hypothesise, then test with attack rates (analytic study)', emphasis: 'key' },
      { id: 's5', label: 'Implement control, communicate, maintain surveillance' },
    ],
  },

  examFindings: [
    { sign: 'Cohort → incidence/RR; case-control → OR', mechanism: 'Cohorts follow exposure forward to disease; case-control looks back from disease', significance: 'key' },
    { sign: 'Case-control is the efficient design for a RARE disease', mechanism: 'It starts with the few cases instead of following huge numbers to accrue them', significance: 'key' },
    { sign: 'Cross-sectional gives no temporality → weak for causation', mechanism: 'Exposure and outcome are measured together, so which came first is unclear', significance: 'supportive' },
    { sign: 'Epidemic-curve shape reveals the source', mechanism: 'One sharp peak = point source; serial peaks = person-to-person spread', significance: 'key' },
  ],

  investigations: [
    { clue: 'A rare cancer, and you need answers quickly and cheaply', meaning: 'Case-control design (start from the few cases and look back)' },
    { clue: 'A rare exposure with several possible outcomes, temporality needed', meaning: 'Cohort design (follow the exposed forward)' },
    { clue: 'Epidemic curve is a single sharp peak spanning one incubation period', meaning: 'Point-source outbreak — a common exposure at one time' },
    { clue: 'Attack rate is far higher among those who ate one particular dish', meaning: 'That food is the implicated vehicle → target control there' },
  ],

  treatment: [
    { logic: 'Control need not wait for proof', detail: 'Once a plausible source is identified, implement control measures immediately — protecting the public runs in parallel with completing the analysis.' },
  ],

  mnemonics: [
    { hook: 'Cohort looks Forward, Case-control looks Back', expansion: ['Forward: exposure → disease → RR', 'Back: disease → exposure → OR'] },
    { hook: 'Epidemic curve: one Peak = Point source; many peaks = Propagated', expansion: ['Peaks ~one incubation period apart = person-to-person'] },
  ],

  traps: [
    {
      questionCategory: 'Design for a rare disease',
      wrongInstinct: 'Use a cohort study to investigate a very rare disease',
      rightAnswer: 'A case-control study is the efficient choice for a rare disease',
      why: 'A cohort would have to follow enormous numbers for years to accrue enough cases; case-control starts from the cases themselves.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Investigators want to study risk factors for a very rare cancer quickly and inexpensively. The most efficient design is a:',
      options: [
        { id: 'a', text: 'Prospective cohort study' },
        { id: 'b', text: 'Case-control study' },
        { id: 'c', text: 'Randomised controlled trial' },
        { id: 'd', text: 'Ecological study' },
      ],
      answerId: 'b',
      explanation: 'For a rare disease, a case-control study starts with the few existing cases and looks back at exposures — far more efficient than a cohort, which would need to follow huge numbers for years to accrue enough cases.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'An epidemic curve shows a single sharp peak with all cases occurring within one incubation period. This pattern indicates:',
      options: [
        { id: 'a', text: 'A propagated (person-to-person) outbreak' },
        { id: 'b', text: 'A point-source outbreak' },
        { id: 'c', text: 'An endemic baseline' },
        { id: 'd', text: 'A continuous common-source exposure' },
      ],
      answerId: 'b',
      explanation: 'A single sharp peak within one incubation period is the signature of a point source — everyone exposed to a common source at essentially the same time. Serial peaks about one incubation period apart would instead suggest propagated spread.',
      tests: 'exam',
    },
  ],
};

export default ichEpiStudyDesigns;
