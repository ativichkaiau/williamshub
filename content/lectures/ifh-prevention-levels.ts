import type { Lecture } from '../../lib/types';

export const ifhPreventionLevels: Lecture = {
  id: 'ifh-prevention-levels',
  title: 'Levels of Prevention',
  system: 'community',
  source: 'L6 — Health Screening & Prevention',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Family Health' },
    { kind: 'lecture', label: 'L6 Screening & Prevention' },
    { kind: 'mechanism', label: 'Primordial → Quaternary' },
    { kind: 'treatment', label: 'Thai P&P screening' },
    { kind: 'exam', label: 'Primary vs secondary' },
  ],

  highYield: [
    '**Five levels map onto the disease timeline.** **Primordial** — stop the risk factor from ever arising (policy, environment). **Primary** — prevent disease in those with risk factors but no disease. **Secondary** — detect and treat disease in its latent stage (**screening**). **Tertiary** — limit disability in established disease. **Quaternary** — protect the patient from unnecessary medicine.',
    '**Screening is SECONDARY prevention** — the disease already exists, only asymptomatically ([[ifh-screening-principles]], [[ifh-screening-test-metrics]]). This is the single most-tested distinction: earlier detection is not primary prevention.',
    '**Primary prevention acts before disease** and reduces **incidence** — immunisation, health education, tobacco cessation, seat-belts, healthy diet ([[ifh-behavior-change-stages]], [[ifh-brief-counselling-5a]]).',
    '**Quaternary prevention (Marc Jamoulle) means “first, do no harm.”** It shields patients from **overdiagnosis, overtreatment and overmedicalisation** — de-prescribing, declining low-value tests, and resisting the harms of “too much medicine.”',
    '**Thailand’s Universal Coverage includes a Promotion & Prevention (P&P) benefit package** for all citizens regardless of scheme: immunisation, antenatal and well-child care, cervical-cancer screening (Pap/VIA/HPV), and cardiovascular/diabetes/hypertension risk screening — mostly **primary and secondary** prevention delivered in primary care.',
  ],

  mechanism: {
    title: 'The prevention timeline: risk factor → disease → latent stage → damage → the medicine itself',
    steps: [
      { id: 's1', label: 'Primordial: stop risk factors arising (policy, environment)' },
      { id: 's2', label: 'Primary: remove risk factors / immunise before disease', emphasis: 'key' },
      { id: 's3', label: 'Secondary: screen + treat early in the latent stage', emphasis: 'key' },
      { id: 's4', label: 'Tertiary: rehabilitate, limit disability in established disease' },
      { id: 's5', label: 'Quaternary: protect from overdiagnosis / overtreatment', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Screening = secondary prevention (early detection in a latent stage)', mechanism: 'The disease is already present but not yet symptomatic', significance: 'key' },
    { sign: 'Immunisation and health education = primary prevention', mechanism: 'They act before disease exists, lowering incidence', significance: 'key' },
    { sign: 'Primordial prevention acts on the risk factor itself, before it appears', mechanism: 'It targets the upstream social/environmental conditions', significance: 'supportive' },
    { sign: 'Quaternary prevention guards against overdiagnosis and overtreatment', mechanism: 'Protecting patients from the harms of unnecessary medical activity', significance: 'key' },
  ],

  investigations: [
    { clue: 'HPV vaccination of schoolgirls before sexual debut', meaning: 'Primary prevention — stops the infection and disease from occurring' },
    { clue: 'Pap smear / VIA in asymptomatic women', meaning: 'Secondary prevention — screening detects disease early in its latent stage' },
    { clue: 'Cardiac rehabilitation and secondary-drug therapy after a myocardial infarction', meaning: 'Tertiary prevention — limits disability and prevents recurrence in established disease' },
    { clue: 'De-prescribing and declining a low-value whole-body scan', meaning: 'Quaternary prevention — avoiding the harm of unnecessary medicine' },
    { clue: 'Tobacco taxation and smoke-free public-space laws', meaning: 'Primordial prevention — prevents the risk factor arising across the population' },
  ],

  treatment: [
    { logic: 'Classify any intervention by where it sits on the disease timeline', detail: 'Before the risk factor (primordial) → before disease (primary) → latent stage (secondary) → established disease (tertiary) → protect from medicine itself (quaternary).' },
    { logic: 'Use screening as secondary prevention wisely', detail: 'Apply Wilson–Jungner and the right test metrics before offering it ([[ifh-screening-principles]], [[ifh-screening-test-metrics]]).' },
  ],

  mnemonics: [
    { hook: 'Primordial → Primary → Secondary → Tertiary → Quaternary', expansion: ['Risk factor → Disease → Latent stage → Damage → the Medicine itself', 'Screening lives at the “latent stage” = secondary'] },
  ],

  traps: [
    {
      questionCategory: 'Primary versus secondary prevention',
      wrongInstinct: 'Screening is primary prevention because it is “preventive”',
      rightAnswer: 'Screening is SECONDARY prevention — the disease already exists in a pre-symptomatic stage, it is only being detected earlier',
      why: 'Primary prevention stops the disease occurring at all; screening cannot, it only shifts the moment of detection.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A national mammography programme invites asymptomatic women for regular breast imaging. Which level of prevention does this represent?',
      options: [
        { id: 'a', text: 'Primordial prevention' },
        { id: 'b', text: 'Primary prevention' },
        { id: 'c', text: 'Secondary prevention' },
        { id: 'd', text: 'Tertiary prevention' },
      ],
      answerId: 'c',
      explanation: 'Screening detects disease that is already present but still latent/asymptomatic, so it is secondary prevention. Primary prevention would stop the cancer arising in the first place.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which statement best describes quaternary prevention?',
      options: [
        { id: 'a', text: 'Vaccinating a population before exposure to a pathogen' },
        { id: 'b', text: 'Protecting patients from unnecessary or harmful medical interventions' },
        { id: 'c', text: 'Rehabilitating patients with established chronic disease' },
        { id: 'd', text: 'Screening a healthy population to detect early disease' },
      ],
      answerId: 'b',
      explanation: 'Quaternary prevention (Jamoulle) protects patients from overdiagnosis, overtreatment and overmedicalisation — the harms caused by medical activity itself. The other options describe primary, tertiary and secondary prevention.',
      tests: 'exam',
    },
  ],
};

export default ifhPreventionLevels;
