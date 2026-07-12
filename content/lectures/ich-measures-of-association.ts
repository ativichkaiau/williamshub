import type { Lecture } from '../../lib/types';

export const ichMeasuresOfAssociation: Lecture = {
  id: 'ich-measures-of-association',
  title: 'Measures of Association',
  system: 'community',
  source: 'L11 — Epidemiological Methods',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Community Health' },
    { kind: 'lecture', label: 'L11 Epidemiological Methods' },
    { kind: 'mechanism', label: 'RR · OR · AR · PAR' },
    { kind: 'exam', label: '>1 harm · =1 none · <1 protect' },
  ],

  highYield: [
    '**Build the 2×2 first** (exposure rows × disease columns: a, b, c, d). **Cohort/RCT** give risks, so use the **Relative Risk (RR)** = [a/(a+b)] ÷ [c/(c+d)]. **Case-control** cannot give risk (subjects are sampled by disease), so use the **Odds Ratio (OR)** = **ad/bc**. Match the measure to the design — see [[ich-epi-study-designs]].',
    '**Interpret against 1: RR/OR = 1 → no association; > 1 → risk factor; < 1 → protective.** The OR **approximates the RR only when the disease is rare**.',
    '**Ratio measures = STRENGTH of association (aetiology).** They tell you how many times more likely disease is in the exposed — the causal-reasoning currency of [[ich-ebm-critical-appraisal]].',
    '**Attributable risk (AR) = risk(exposed) − risk(unexposed)** — the **excess risk** in the exposed caused by the exposure. **AR% = (RR − 1)/RR.** This is an **absolute** (difference) measure of impact.',
    '**Population attributable risk (PAR)** = risk(whole population) − risk(unexposed): the excess disease in the whole population attributable to the exposure. Crucially, **PAR depends on how common the exposure is**, so a weak RR on a very common exposure can matter more for public health than a strong RR on a rare one. This links to absolute thinking in [[ich-ebm-applying-evidence]] and [[ers-measures-frequency-association]].',
  ],

  mechanism: {
    title: '2×2 → choose measure → interpret vs 1 → quantify impact',
    steps: [
      { id: 's1', label: 'Lay out the 2×2 (exposure × disease)' },
      { id: 's2', label: 'Cohort → RR; case-control → OR = ad/bc', emphasis: 'key' },
      { id: 's3', label: 'Compare to 1: >1 harm, =1 none, <1 protect', emphasis: 'key' },
      { id: 's4', label: 'Attributable risk = excess risk in the exposed' },
      { id: 's5', label: 'PAR = impact in the whole population (weighs exposure prevalence)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'RR needs risks → only cohort/RCT; case-control gives OR', mechanism: 'Case-control sampling fixes case numbers, so incidence/risk is unknowable', significance: 'key' },
    { sign: 'OR ≈ RR only when the disease is rare', mechanism: 'When cases are few, a/(a+b) ≈ a/b, so the odds approximate the risk', significance: 'key' },
    { sign: 'Ratios measure STRENGTH; AR/PAR measure IMPACT', mechanism: 'A large RR on a tiny baseline risk yields a small attributable risk', significance: 'key' },
    { sign: 'PAR depends on the prevalence of the exposure', mechanism: 'Removing a common exposure prevents more disease than removing a rare one', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Cohort: incidence 20/1,000 in exposed vs 5/1,000 in unexposed', meaning: 'RR = 20 ÷ 5 = 4 — a fourfold higher risk with exposure' },
    { clue: 'Case-control 2×2 with a=40, b=10, c=20, d=30', meaning: 'OR = ad/bc = (40×30)/(10×20) = 6' },
    { clue: 'A strong RR of 4 but the exposure is very rare', meaning: 'Small population attributable risk — limited public-health payoff' },
    { clue: 'A modest RR of 1.3 for a very common exposure', meaning: 'Potentially large PAR — a worthwhile population target' },
  ],

  treatment: [
    { logic: 'Report strength and impact together', detail: 'Pair the RR/OR (with its confidence interval) with attributable risk/PAR so readers see both how strong the link is and how much disease it explains.' },
  ],

  mnemonics: [
    { hook: 'Cohort → RR (Risk, forward); Case-control → OR = ad/bc', expansion: ['Forward from exposure = risk', 'Backward from disease = odds'] },
    { hook: 'Ratio vs 1: >1 harm, =1 none, <1 protect', expansion: ['AR = absolute excess in the exposed', 'PAR = weigh by exposure prevalence'] },
  ],

  traps: [
    {
      questionCategory: 'Choosing the measure by design',
      wrongInstinct: 'Compute a relative risk directly from a case-control study',
      rightAnswer: 'A case-control study yields an odds ratio (ad/bc), not a risk ratio',
      why: 'Cases are sampled by outcome, so there is no population at risk to give incidence — only odds are estimable.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A cohort study finds the incidence of disease is 20 per 1,000 in the exposed and 5 per 1,000 in the unexposed. The relative risk is:',
      options: [
        { id: 'a', text: '0.25' },
        { id: 'b', text: '4' },
        { id: 'c', text: '15' },
        { id: 'd', text: '100' },
      ],
      answerId: 'b',
      explanation: 'RR = risk in exposed ÷ risk in unexposed = (20/1,000) ÷ (5/1,000) = 4. Exposed individuals have four times the risk — a value >1 marks a risk factor.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'In a case-control study the 2×2 table is a=40, b=10 (exposed cases, exposed controls) and c=20, d=30 (unexposed cases, unexposed controls). The appropriate measure of association and its value are:',
      options: [
        { id: 'a', text: 'Relative risk = 2' },
        { id: 'b', text: 'Odds ratio = 6' },
        { id: 'c', text: 'Relative risk = 6' },
        { id: 'd', text: 'Odds ratio = 0.17' },
      ],
      answerId: 'b',
      explanation: 'Case-control data give an odds ratio, not a risk ratio (there is no population at risk). OR = ad/bc = (40×30)/(10×20) = 1200/200 = 6.',
      tests: 'exam',
    },
  ],
};

export default ichMeasuresOfAssociation;
