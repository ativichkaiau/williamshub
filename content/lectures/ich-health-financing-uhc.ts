import type { Lecture } from '../../lib/types';

export const ichHealthFinancingUhc: Lecture = {
  id: 'ich-health-financing-uhc',
  title: 'Health Financing & Universal Health Coverage',
  system: 'community',
  source: 'L4 — Health Care Systems & Health Policy in Thailand',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Community Health' },
    { kind: 'lecture', label: 'L4 Financing & UHC' },
    { kind: 'mechanism', label: 'Collect · pool · purchase' },
    { kind: 'exam', label: 'UHC cube · OOP' },
  ],

  highYield: [
    '**Health financing has three functions:** **revenue collection → pooling → purchasing**. The main **sources** are general **taxation**, **social health insurance** (payroll contributions), **private/voluntary** insurance, and **out-of-pocket (OOP)** payment. This is the “financing” building block from [[ich-health-system-building-blocks]].',
    '**Out-of-pocket payment is the least equitable source** — you pay only when sick, so there is no cross-subsidy and no protection. High OOP causes **catastrophic health expenditure** and **medical impoverishment**; a core UHC goal is to shrink the OOP share of total health spending.',
    '**Prepayment + risk pooling is the engine of financial protection.** Pooling separates payment from the time of use and lets the healthy cross-subsidise the sick and the rich the poor. **Bigger, more diverse pools** protect better; fragmented pools of only-sick people invite **adverse selection**.',
    '**UHC (WHO definition):** all people obtain the health services they need **without suffering financial hardship**. It is about both **service coverage** and **financial protection** — not simply “free hospitals”.',
    '**The UHC cube has three axes:** **population** covered (breadth), **services** covered (depth), and the **proportion of direct costs** covered (height, i.e. reducing OOP). Finite budgets mean you cannot instantly max all three; Thailand’s tax-financed UCS is a classic example of filling the cube (see [[ich-thai-health-system-schemes]]).',
  ],

  mechanism: {
    title: 'Collect → pool → purchase → coverage without financial hardship',
    steps: [
      { id: 's1', label: 'Collect revenue (tax, payroll, premiums, OOP)' },
      { id: 's2', label: 'Pool funds → risk pooling & prepayment', emphasis: 'key' },
      { id: 's3', label: 'Purchase services + define the benefit package', emphasis: 'key' },
      { id: 's4', label: '→ Access without catastrophic out-of-pocket cost', emphasis: 'key' },
      { id: 's5', label: '→ Expand the three axes of the UHC cube' },
    ],
  },

  examFindings: [
    { sign: 'Out-of-pocket payment at the point of use is the most regressive way to finance care', mechanism: 'The sick pay most, with no pooling or cross-subsidy, so illness can bankrupt a household', significance: 'key' },
    { sign: 'Prepayment + pooling is what delivers financial protection', mechanism: 'It divorces payment from use and spreads risk across many contributors', significance: 'key' },
    { sign: 'The UHC cube cannot be fully filled at once with finite funds', mechanism: 'Widening population, deepening services, and covering more cost all compete for the same budget', significance: 'key' },
    { sign: 'Strategic (active) purchasing buys value, not just pays bills', mechanism: 'Choosing what, from whom, and how to pay steers providers toward efficient, needed care', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A family sells land to pay a large hospital bill', meaning: 'Catastrophic health expenditure / medical impoverishment driven by high out-of-pocket cost' },
    { clue: 'Many small insurance schemes that each enrol mostly sick people', meaning: 'Fragmented, poorly pooled financing prone to adverse selection' },
    { clue: 'A debate over whether to add a costly new cancer drug to the benefit package', meaning: 'The “services/depth” axis of the UHC cube — a rationing decision needing HTA (see [[ich-economic-evaluation-hta]])' },
    { clue: 'Covering informal-sector workers who contribute nothing directly', meaning: 'Tax-financed, non-contributory pooling — the model behind Thailand’s UCS' },
  ],

  treatment: [
    { logic: 'Shift financing from OOP toward prepaid, pooled funds', detail: 'Enlarge and, where possible, merge pools so risk is spread widely; the goal is to reduce the OOP share of total health expenditure.' },
    { logic: 'Use strategic purchasing against a defined benefit package', detail: 'Decide actively what to buy and how to pay for it, using evidence and HTA to get the most health per baht within the budget.' },
  ],

  mnemonics: [
    { hook: 'Financing = 3 P’s: Prepay, Pool, Purchase', expansion: ['PREPAY — pay before you are sick', 'POOL — spread risk, cross-subsidise', 'PURCHASE — buy value against a benefit package'] },
    { hook: 'UHC cube = Who / What / How much', expansion: ['WHO is covered — population breadth', 'WHAT services — depth', 'HOW MUCH of the cost — height, i.e. reducing OOP'] },
  ],

  traps: [
    {
      questionCategory: 'What protects against financial catastrophe?',
      wrongInstinct: 'Charging user fees (out-of-pocket) at the point of care keeps the system sustainable and is fine',
      rightAnswer: 'High OOP is the least equitable source and drives catastrophic spending; prepayment + risk pooling is what protects households',
      why: 'Financial protection comes from separating payment from the moment of use and cross-subsidising — not from paying at the counter, which hits the sick hardest.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which source of health financing offers the least financial protection and is the most regressive?',
      options: [
        { id: 'a', text: 'General taxation' },
        { id: 'b', text: 'Social health insurance' },
        { id: 'c', text: 'Out-of-pocket payment' },
        { id: 'd', text: 'Risk-pooled prepayment' },
      ],
      answerId: 'c',
      explanation: 'Out-of-pocket payment means you pay only when ill, with no pooling or cross-subsidy. It offers no risk protection and drives catastrophic spending and impoverishment.',
      tests: 'lecture',
    },
    {
      id: 'q2',
      stem: 'The WHO “UHC cube” shows a country expanding coverage along three dimensions. Which set names them correctly?',
      options: [
        { id: 'a', text: 'Number of doctors, hospitals and drugs' },
        { id: 'b', text: 'Population covered, services covered, and proportion of direct costs covered' },
        { id: 'c', text: 'Prevention, treatment and rehabilitation' },
        { id: 'd', text: 'Taxation, insurance and donations' },
      ],
      answerId: 'b',
      explanation: 'The cube’s three axes are breadth (who is covered), depth (which services), and height (share of direct costs covered — i.e. how far out-of-pocket charges are reduced).',
      tests: 'system',
    },
  ],
};

export default ichHealthFinancingUhc;
