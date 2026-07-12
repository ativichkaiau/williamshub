import type { Lecture } from '../../lib/types';

export const ichHealthEconomicsConcepts: Lecture = {
  id: 'ich-health-economics-concepts',
  title: 'Health Economics: Core Concepts',
  system: 'community',
  source: 'L9 — Health Economics in Thailand',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Community Health' },
    { kind: 'lecture', label: 'L9 Health Economics' },
    { kind: 'mechanism', label: 'Scarcity · opportunity cost' },
    { kind: 'exam', label: 'Market failure · Grossman' },
  ],

  highYield: [
    '**Economics starts from scarcity:** resources are finite but wants are unlimited, so we must **choose** — and every choice has an **opportunity cost**, the value of the **next-best alternative forgone**. The true cost of a programme is the health it displaces, not the baht on the invoice.',
    '**Health-care markets are not perfectly competitive — they fail.** Key failures: **asymmetric information** (the doctor knows more and is the patient’s agent → risk of **supplier-induced demand**), **uncertainty** (illness is unpredictable → demand for insurance, plus **moral hazard** and **adverse selection**), **externalities** (vaccines protect others), and **public goods** (clean water, vector control). These justify government and insurance involvement.',
    '**Grossman’s insight: we demand health, not health care.** Health is a **capital stock** that depreciates with age and can be **invested in**; it is both a **consumption good** (feeling well) and an **investment good** (healthy days to work and earn). Health care is therefore a **derived demand** — an input into producing health.',
    '**Efficiency and equity are distinct — and often in tension.** **Technical efficiency** = maximum output for given inputs; **allocative efficiency** = resources go to their most valued use. **Equity** = fairness: **horizontal** (equal treatment for equal need) and **vertical** (appropriately unequal treatment for unequal need). A maximally efficient allocation can still be unfair.',
    '**Value-based care puts the two together:** value = **health outcomes achieved per baht spent**. Making opportunity cost explicit and measuring value is exactly what economic evaluation does (see [[ich-economic-evaluation-hta]]), and it underpins financing choices (see [[ich-health-financing-uhc]]).',
  ],

  mechanism: {
    title: 'From scarcity to the economist’s questions',
    steps: [
      { id: 's1', label: 'Resources scarce, wants unlimited → we must choose', emphasis: 'key' },
      { id: 's2', label: 'Every choice has an opportunity cost (next-best forgone)', emphasis: 'key' },
      { id: 's3', label: 'Ideal markets allocate efficiently — but health markets fail', emphasis: 'key' },
      { id: 's4', label: '→ Rationale for insurance and government intervention' },
      { id: 's5', label: '→ Pursue efficiency AND equity → value (outcomes/cost)' },
    ],
  },

  examFindings: [
    { sign: 'Opportunity cost — not the money price — is the true cost of any choice', mechanism: 'Choosing one programme forgoes the health the same resources could have bought elsewhere', significance: 'key' },
    { sign: 'Asymmetric information makes the doctor the patient’s agent', mechanism: 'The provider both advises and supplies, creating the risk of supplier-induced demand', significance: 'key' },
    { sign: 'We demand health; health care is a derived demand', mechanism: 'Health is the good we ultimately want — care is one input into producing it (Grossman)', significance: 'key' },
    { sign: 'Efficiency and equity are different goals that can conflict', mechanism: 'The most efficient allocation may leave the worst-off badly served, forcing a trade-off', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A hospital spends its last budget on a helicopter instead of 1,000 vaccinations', meaning: 'The opportunity cost is the health forgone from the vaccinations not funded' },
    { clue: 'A patient cannot judge whether a scan is needed and trusts the doctor who profits from it', meaning: 'Asymmetric information → supplier-induced demand' },
    { clue: 'Only people who expect to be sick buy the voluntary insurance', meaning: 'Adverse selection, a failure arising from uncertainty and hidden information' },
    { clue: 'One vaccinated child lowers infection risk for the whole class', meaning: 'A positive externality → the market under-provides → subsidy/mandate is justified' },
  ],

  treatment: [
    { logic: 'Make the opportunity cost explicit before choosing', detail: 'When comparing programmes, ask what health is given up elsewhere; compare costs and consequences formally (see [[ich-economic-evaluation-hta]]).' },
    { logic: 'Match the policy tool to the specific market failure', detail: 'Insurance for uncertainty, subsidy or mandate for externalities, and regulation/information for asymmetric information — each failure needs its own correction.' },
  ],

  mnemonics: [
    { hook: 'Why health markets fail: I-U-E-P', expansion: ['Information asymmetry (agency, supplier-induced demand)', 'Uncertainty (→ insurance, moral hazard, adverse selection)', 'Externalities (vaccines, infection control)', 'Public goods (clean water, vector control)'] },
    { hook: 'Grossman: buy health, not health care', expansion: ['Health = a capital stock that depreciates', 'You invest in it via care, diet, exercise', 'Health care = derived demand / an input'] },
  ],

  traps: [
    {
      questionCategory: 'What is “cost” in economics?',
      wrongInstinct: 'The cost of a programme is simply the money (baht) spent on it',
      rightAnswer: 'The true (opportunity) cost is the value of the best alternative forgone — the health that money could have produced elsewhere',
      why: 'Priority-setting compares opportunity costs, not accounting prices; a “cheap” programme is costly if it crowds out something more valuable.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A hospital spends its remaining budget on a new MRI rather than expanding vaccination. In economics, the “opportunity cost” of the MRI is best described as:',
      options: [
        { id: 'a', text: 'The purchase price of the MRI machine' },
        { id: 'b', text: 'The health benefits forgone by not funding the next-best option (vaccination)' },
        { id: 'c', text: 'The MRI’s annual maintenance cost' },
        { id: 'd', text: 'Zero, because the budget had already been allocated' },
      ],
      answerId: 'b',
      explanation: 'Opportunity cost is the value of the next-best alternative given up. Here that is the health the same money would have produced through vaccination, not the invoice price of the scanner.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Because doctors know far more than patients and also decide what care is provided, patients may receive more services than they truly need. This market failure is called:',
      options: [
        { id: 'a', text: 'A positive externality' },
        { id: 'b', text: 'Asymmetric information (supplier-induced demand)' },
        { id: 'c', text: 'A public good' },
        { id: 'd', text: 'Opportunity cost' },
      ],
      answerId: 'b',
      explanation: 'When one party (the provider) holds far more information and also supplies the service, the agency relationship can generate supplier-induced demand — a classic information asymmetry.',
      tests: 'lecture',
    },
  ],
};

export default ichHealthEconomicsConcepts;
