import type { Lecture } from '../../lib/types';

export const ichEnvironmentalHealthOverview: Lecture = {
  id: 'ich-environmental-health-overview',
  title: 'Environmental Health & Its Determinants',
  system: 'community',
  source: 'L5 — Environmental Health Determinants',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Community Health' },
    { kind: 'lecture', label: 'L5 Environmental Health' },
    { kind: 'mechanism', label: 'Hazard categories' },
    { kind: 'exam', label: 'WASH · PM2.5' },
    { kind: 'disease', label: 'Environmental burden' },
  ],

  highYield: [
    '**Environmental health = all the physical, chemical and biological factors external to a person, plus related behaviours.** It targets the factors that can harm health and are, in principle, **modifiable**. WHO attributes roughly **1 in 4 deaths (~24% of the global burden)** to modifiable environmental factors — these sit in the outer bands of the **Dahlgren–Whitehead rainbow** ([[ich-determinants-of-health]]).',
    '**Five hazard categories: physical, chemical, biological, mechanical and psychosocial.** The same classes reappear in the workplace ([[ich-occupational-hazards]]); environmental health simply widens the setting from the job to the whole living environment.',
    '**WASH — Water, Sanitation and Hygiene — is the highest-yield environmental target in poorer settings.** Unsafe water, poor sanitation and inadequate hygiene drive **diarrhoeal disease** and are a leading environmental cause of **under-5 mortality**. Safe water supply + excreta disposal + handwashing break the faecal–oral route.',
    '**Air pollution is the other giant, and PM2.5 is the key metric.** **PM2.5 = particulate matter ≤2.5 µm** — fine enough to reach the alveoli and cross into the bloodstream, causing **CVD, stroke, COPD, lung cancer and lower-respiratory infection**. In **Thailand** the seasonal **haze from agricultural/forest burning plus traffic** makes PM2.5 a headline public-health issue.',
    '**Environmental risk is inequitably distributed — the poor are most exposed** (environmental justice). Because exposure is set upstream by policy and infrastructure, the effective response is **population-level and preventive** ([[ich-environmental-risk-prevention]]), not just individual behaviour.',
  ],

  mechanism: {
    title: 'Define the scope → classify the hazards → quantify the burden → target the big two (WASH & air)',
    steps: [
      { id: 's1', label: 'Scope: factors external to the person (air, water, soil, food, built environment)' },
      { id: 's2', label: 'Classify: physical · chemical · biological · mechanical · psychosocial', emphasis: 'key' },
      { id: 's3', label: 'Quantify: ~24% of deaths from modifiable environment' },
      { id: 's4', label: 'Target the big two: WASH and air pollution (PM2.5)', emphasis: 'key' },
      { id: 's5', label: 'Act upstream at population level (policy, infrastructure)' },
    ],
  },

  examFindings: [
    { sign: 'Environmental health concerns factors EXTERNAL to the person', mechanism: 'It is the exposome — air, water, soil, food, built environment — not genes or personal lifestyle alone', significance: 'key' },
    { sign: 'PM2.5 is more dangerous than the coarser PM10', mechanism: 'At ≤2.5 µm it penetrates to the alveoli and enters the blood, driving cardiovascular as well as respiratory disease', significance: 'key' },
    { sign: 'WASH failures cause diarrhoeal disease and under-5 deaths', mechanism: 'Contaminated water and poor sanitation sustain the faecal–oral transmission route', significance: 'key' },
    { sign: 'The environmental disease burden falls hardest on the poor', mechanism: 'Housing, occupation and location concentrate exposure among the disadvantaged (environmental justice)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Haze season in Chiang Mai, AQI in the red, a surge of asthma/COPD ER visits', meaning: 'Ambient PM2.5 from agricultural/forest burning — a physical (particulate) air-pollution effect' },
    { clue: 'A village hit by diarrhoea outbreaks after every rainy season', meaning: 'A WASH failure — contaminated water and inadequate sanitation' },
    { clue: 'A woman cooking indoors over a biomass stove with a chronic cough', meaning: 'Household air pollution — a major indoor environmental exposure' },
    { clue: 'Children near an old smelter with anaemia and developmental delay', meaning: 'A chemical hazard (environmental lead) — think of the source and pathway' },
  ],

  treatment: [
    { logic: 'Prioritise the highest-burden exposures', detail: 'In most settings that means WASH and air quality (PM2.5) before rarer exposures — go where the deaths are.' },
    { logic: 'Intervene at the population and environmental level', detail: 'Clean water and sanitation infrastructure, emission and burning controls, and policy — not merely advising individuals ([[ich-environmental-risk-prevention]]).' },
  ],

  mnemonics: [
    { hook: 'Hazard categories = PCBMP', expansion: ['Physical, Chemical, Biological, Mechanical, Psychosocial', 'The same five reappear as occupational hazards'] },
    { hook: 'WASH', expansion: ['Water (safe supply)', 'Sanitation (excreta disposal)', 'Hygiene (handwashing) — breaks the faecal–oral route'] },
  ],

  traps: [
    {
      questionCategory: 'Particulate size and danger',
      wrongInstinct: 'Bigger particles (PM10) must be the more harmful pollutant',
      rightAnswer: 'PM2.5 is the finer, more dangerous fraction — it reaches the alveoli and the bloodstream',
      why: 'Deposition depth, not visible size, determines toxicity; PM2.5 drives cardiovascular as well as lung disease.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Why is PM2.5 considered more hazardous to health than PM10?',
      options: [
        { id: 'a', text: 'It is heavier and settles faster onto surfaces' },
        { id: 'b', text: 'It is fine enough to reach the alveoli and enter the bloodstream' },
        { id: 'c', text: 'It is only produced indoors, so exposure is constant' },
        { id: 'd', text: 'It is visible to the eye, prompting more avoidance' },
      ],
      answerId: 'b',
      explanation: 'PM2.5 (≤2.5 µm) penetrates deep into the alveoli and crosses into the circulation, so it causes cardiovascular disease and stroke in addition to respiratory disease. Coarser PM10 is largely trapped higher in the airway.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Repeated diarrhoeal-disease outbreaks with high under-5 mortality in a low-income community are most directly addressed by improving which environmental target?',
      options: [
        { id: 'a', text: 'Ambient PM2.5 from traffic' },
        { id: 'b', text: 'Occupational noise exposure' },
        { id: 'c', text: 'Water, sanitation and hygiene (WASH)' },
        { id: 'd', text: 'Household radon levels' },
      ],
      answerId: 'c',
      explanation: 'Diarrhoeal disease and under-5 deaths are driven by unsafe water, poor sanitation and inadequate hygiene. Improving WASH breaks the faecal–oral transmission route and is the leading intervention for this burden.',
      tests: 'exam',
    },
  ],
};

export default ichEnvironmentalHealthOverview;
