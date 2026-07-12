import type { Lecture } from '../../lib/types';

export const ichEnvironmentalRiskPrevention: Lecture = {
  id: 'ich-environmental-risk-prevention',
  title: 'Environmental Risk & Prevention',
  system: 'community',
  source: 'L5 — Environmental Health Determinants',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Community Health' },
    { kind: 'lecture', label: 'L5 Environmental Health' },
    { kind: 'mechanism', label: 'Exposure pathway' },
    { kind: 'investigation', label: 'Risk assessment' },
    { kind: 'treatment', label: 'Control at source' },
  ],

  highYield: [
    '**The exposure pathway is the backbone: source → environmental medium → route → receptor.** A hazard only harms if it travels from its **source** through a **medium** (air, water, soil, food) via a **route** (inhalation, ingestion, dermal) into a **receptor** (the person). **Break the pathway at any link and exposure stops** — this is why controlling at the source is so powerful ([[ich-environmental-health-overview]]).',
    '**Dose–response links the amount of exposure to the probability/severity of effect.** “**The dose makes the poison**” (Paracelsus): even essential substances harm at high dose. Many toxins have a **threshold**; for **carcinogens** a **linear no-threshold** (no safe dose) model is usually assumed.',
    '**Risk assessment is a 4-step scientific process: hazard identification → dose–response assessment → exposure assessment → risk characterisation.** It estimates how much risk. It is distinct from **risk management** — the policy/action decision that follows.',
    '**Control mirrors the hierarchy of controls — act at the source first.** Eliminate or substitute the hazard, then use engineering controls, then behaviour/PPE, exactly as in the workplace ([[ich-occupational-prevention-controls]]). The cheapest, most reliable point of attack is the **source**.',
    '**Climate change is a threat multiplier for environmental health** — heat illness, extreme-weather events, shifting **vector-borne disease (e.g. dengue)**, and food/water insecurity. **Mitigation carries health co-benefits** (cleaner air, active transport).',
  ],

  mechanism: {
    title: 'Exposure pathway → dose–response → risk assessment → risk management',
    steps: [
      { id: 's1', label: 'Trace the pathway: source → medium → route → receptor', emphasis: 'key' },
      { id: 's2', label: 'Characterise dose–response (threshold vs linear no-threshold)' },
      { id: 's3', label: 'Risk assessment: hazard ID → dose–response → exposure → characterisation', emphasis: 'key' },
      { id: 's4', label: 'Risk management: break the pathway, ideally at the source', emphasis: 'key' },
      { id: 's5', label: 'Adapt and mitigate for climate change' },
    ],
  },

  examFindings: [
    { sign: 'Break the pathway at any link and exposure stops', mechanism: 'Source → medium → route → receptor is a chain; removing one link protects the person', significance: 'key' },
    { sign: '“The dose makes the poison”', mechanism: 'Effect depends on the amount, not merely the presence, of a substance — dose–response', significance: 'key' },
    { sign: 'Risk assessment (science) is separate from risk management (policy)', mechanism: 'Assessment estimates the risk; management decides what action/standard to take about it', significance: 'supportive' },
    { sign: 'For carcinogens no safe threshold is usually assumed', mechanism: 'A linear no-threshold model implies any dose carries some incremental risk', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Arsenic found in a village’s only well', meaning: 'Source–medium–route identified — control at the source (alternative safe supply) breaks the pathway' },
    { clue: 'A factory chimney sits directly upwind of a primary school', meaning: 'Exposure assessment question — who is the receptor and what dose do they receive?' },
    { clue: 'Dengue season is starting earlier and lasting longer year on year', meaning: 'Climate change as a threat multiplier — a shifting vector-borne disease pattern' },
    { clue: 'Regulators debate setting a national annual PM2.5 limit', meaning: 'Risk characterisation feeding a risk-management (policy) decision' },
  ],

  treatment: [
    { logic: 'Control at the source first, then the pathway, then the receptor', detail: 'Eliminate or substitute the hazard before relying on filters or masks — the same logic as the hierarchy of controls ([[ich-occupational-prevention-controls]]).' },
    { logic: 'Use risk assessment to prioritise', detail: 'Rank exposures by characterised risk and manage the biggest ones first, rather than the most visible or emotive.' },
  ],

  mnemonics: [
    { hook: 'Source → Environment → Receptor', expansion: ['The exposure pathway', 'Snap any link (source, medium, route, receptor) to prevent harm'] },
    { hook: 'Risk assessment = HDER', expansion: ['Hazard identification', 'Dose–response assessment', 'Exposure assessment', 'Risk characterisation'] },
  ],

  traps: [
    {
      questionCategory: 'Risk assessment vs risk management',
      wrongInstinct: 'They are two names for the same activity',
      rightAnswer: 'Risk assessment is the scientific estimate of risk; risk management is the policy decision and action taken about it',
      why: 'The exam separates the objective “how big is the risk?” step from the value-laden “what shall we do?” step.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A community’s single well is contaminated with arsenic. Providing an alternative safe water supply prevents harm primarily by acting on which part of the exposure pathway?',
      options: [
        { id: 'a', text: 'The receptor, by boosting individual tolerance' },
        { id: 'b', text: 'The source, removing the hazard before it can be ingested' },
        { id: 'c', text: 'The dose–response curve, by shifting its threshold' },
        { id: 'd', text: 'The risk characterisation step of assessment' },
      ],
      answerId: 'b',
      explanation: 'Replacing the contaminated well removes exposure at the source — the most effective point on the source → medium → route → receptor pathway. Breaking any link stops exposure, but source control is the most reliable.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which sequence correctly lists the four steps of environmental risk assessment?',
      options: [
        { id: 'a', text: 'Exposure assessment → hazard identification → risk management → PPE' },
        { id: 'b', text: 'Hazard identification → dose–response assessment → exposure assessment → risk characterisation' },
        { id: 'c', text: 'Risk characterisation → dose–response assessment → hazard identification → surveillance' },
        { id: 'd', text: 'Dose–response assessment → risk management → hazard identification → exposure assessment' },
      ],
      answerId: 'b',
      explanation: 'Risk assessment proceeds hazard identification → dose–response assessment → exposure assessment → risk characterisation. Risk management (the policy decision) is a separate step that follows the assessment.',
      tests: 'investigation',
    },
  ],
};

export default ichEnvironmentalRiskPrevention;
