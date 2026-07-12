import type { Lecture } from '../../lib/types';

export const ichThaiHealthSystemSchemes: Lecture = {
  id: 'ich-thai-health-system-schemes',
  title: 'Thailand’s Health System: The Three Public Schemes',
  system: 'community',
  source: 'L4 — Health Care Systems & Health Policy in Thailand',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Community Health' },
    { kind: 'lecture', label: 'L4 Thai Schemes' },
    { kind: 'mechanism', label: 'UCS · SSS · CSMBS' },
    { kind: 'exam', label: 'NHSO · payment methods' },
  ],

  highYield: [
    '**Thailand has three public schemes covering almost the whole population.** **UCS** (Universal Coverage, ~75%), **SSS** (Social Security, ~16%) and **CSMBS** (Civil Servant, ~9%). They differ in **who is covered, who pays, and how providers are paid** — the exam’s favourite comparison. Financing concepts come from [[ich-health-financing-uhc]].',
    '**UCS — the “30-baht scheme”** (2002). Covers everyone not in SSS or CSMBS (informal workers, children, the elderly, self-employed). Purchased by the **NHSO (National Health Security Office)** and financed from **general taxation**; providers are paid mainly by **capitation** (outpatient) and **DRG/global budget** (inpatient). Access is gatekept through a registered primary-care unit and the district health system (see [[ich-health-system-building-blocks]]).',
    '**SSS — Social Security Scheme.** For **private formal-sector employees**, run by the **Social Security Office (Ministry of Labour)**. It is the **only contributory** scheme — funded by **tripartite** payroll contributions (employee + employer + government) — and uses **capitation** to a hospital the worker registers with. It covers the **worker only, not dependents**; work-related injury is handled separately by the **Workmen’s Compensation Fund**.',
    '**CSMBS — Civil Servant Medical Benefit Scheme.** For **government employees, pensioners and their dependents** (parents, spouse, ≤3 children), run by the **Comptroller General’s Department (Ministry of Finance)** and financed from **general taxation** (a non-contributory fringe benefit). Outpatient care is **fee-for-service** → the **most generous** benefits but the **highest cost per head** and cost-escalation risk.',
    '**Thailand achieved UHC in 2002** when UCS closed the coverage gap — a landmark success at a relatively low income level. The remaining challenge is **inequity and fragmentation** between the three schemes (different benefits, payment methods and spending per person).',
  ],

  mechanism: {
    title: 'Assign a Thai citizen to a scheme by employment status',
    steps: [
      { id: 's1', label: 'Government employee / pensioner (+ dependents)? → CSMBS (MoF, tax, FFS)', emphasis: 'key' },
      { id: 's2', label: 'Private formal-sector employee? → SSS (SSO, tripartite payroll)', emphasis: 'key' },
      { id: 's3', label: 'Everyone else (informal, children, elderly)? → UCS (NHSO, tax)', emphasis: 'key' },
      { id: 's4', label: 'UCS members access care via a registered PCU → district hospital → referral' },
      { id: 's5', label: '→ ~universal coverage of the population since 2002' },
    ],
  },

  examFindings: [
    { sign: 'Only SSS requires the beneficiary to contribute (tripartite payroll)', mechanism: 'UCS and CSMBS are both financed from general taxation', significance: 'key' },
    { sign: 'CSMBS is the most generous per head; UCS is the largest by population', mechanism: 'CSMBS pays outpatient care fee-for-service, while UCS covers ~three-quarters of Thais', significance: 'key' },
    { sign: 'SSS covers the worker only; CSMBS also covers dependents', mechanism: 'SSS is an individual employment benefit, whereas CSMBS extends to spouse, parents and children', significance: 'key' },
    { sign: 'Payment method shapes provider behaviour', mechanism: 'Capitation (UCS/SSS) contains cost and rewards prevention; fee-for-service (CSMBS OP) tends to escalate it', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A self-employed street vendor needs care', meaning: 'Covered by UCS (NHSO), financed from general taxation' },
    { clue: 'A factory worker is injured by a machine at work', meaning: 'Work-related injury → Workmen’s Compensation Fund, not the illness cover of SSS' },
    { clue: 'A retired government teacher brings her husband to hospital', meaning: 'CSMBS covers the pensioner and eligible dependents' },
    { clue: 'Deciding whether UCS should add a costly new medicine', meaning: 'An NHSO benefit-package decision, informed by HTA/HITAP (see [[ich-economic-evaluation-hta]])' },
  ],

  treatment: [
    { logic: 'Match the person to the scheme by employment status', detail: 'For every case know the payer, funding source and payment method: CSMBS (MoF/tax/FFS), SSS (SSO/payroll/capitation), UCS (NHSO/tax/capitation + DRG).' },
    { logic: 'Strengthen primary care so UCS gatekeeping works', detail: 'A functioning district health system with two-way referral is what lets a tax-financed, capitation-based scheme deliver universal access efficiently.' },
  ],

  mnemonics: [
    { hook: '3 schemes — Civil · Social · Universal', expansion: ['CSMBS — Civil servants (+ family), MoF, tax, fee-for-service, most generous', 'SSS — Social Security, private formal workers, tripartite payroll, worker only', 'UCS — Universal (everyone else, ~75%), NHSO, tax, capitation + DRG'] },
    { hook: 'Only SSS you pay into; only CSMBS is fee-for-service', expansion: ['SSS = payroll contribution (tripartite)', 'CSMBS = fee-for-service outpatient → cost escalation', 'UCS = tax + capitation → cost containment'] },
  ],

  traps: [
    {
      questionCategory: 'Which scheme / who contributes?',
      wrongInstinct: 'All three Thai schemes are funded the same way, or the worker always pays in',
      rightAnswer: 'Only SSS is contributory (tripartite payroll); UCS and CSMBS are financed from general taxation',
      why: 'CSMBS is a non-contributory civil-service fringe benefit and UCS is tax-funded for the rest of the population — SSS alone deducts contributions from the worker’s wage.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 45-year-old self-employed farmer has no formal employer and is not a civil servant. Under which scheme is he covered?',
      options: [
        { id: 'a', text: 'CSMBS (Civil Servant Medical Benefit Scheme)' },
        { id: 'b', text: 'SSS (Social Security Scheme)' },
        { id: 'c', text: 'UCS (Universal Coverage Scheme, NHSO)' },
        { id: 'd', text: 'He is not covered by any public scheme' },
      ],
      answerId: 'c',
      explanation: 'UCS covers everyone not enrolled in SSS or CSMBS, including informal and self-employed workers. It is purchased by the NHSO and financed from general taxation.',
      tests: 'lecture',
    },
    {
      id: 'q2',
      stem: 'Which statement about Thailand’s three public schemes is correct?',
      options: [
        { id: 'a', text: 'CSMBS covers the largest share of the population' },
        { id: 'b', text: 'SSS is financed from general taxation' },
        { id: 'c', text: 'UCS is purchased by the National Health Security Office and covers about three-quarters of Thais' },
        { id: 'd', text: 'All three schemes pay providers by fee-for-service' },
      ],
      answerId: 'c',
      explanation: 'UCS is the largest scheme (~75%), administered by the NHSO and tax-financed. CSMBS is the smallest but most generous; SSS is the only contributory (payroll) scheme; only CSMBS outpatient care is fee-for-service.',
      tests: 'system',
    },
  ],
};

export default ichThaiHealthSystemSchemes;
