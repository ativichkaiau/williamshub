import type { Lecture } from '../../lib/types';

export const ichHealthSystemBuildingBlocks: Lecture = {
  id: 'ich-health-system-building-blocks',
  title: 'Health Systems: The WHO Building Blocks',
  system: 'community',
  source: 'L4 — Health Care Systems & Health Policy in Thailand',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Community Health' },
    { kind: 'lecture', label: 'L4 Health Systems' },
    { kind: 'mechanism', label: '6 building blocks' },
    { kind: 'investigation', label: 'Levels of care · referral' },
  ],

  highYield: [
    '**WHO’s framework has 6 building blocks:** (1) **service delivery**, (2) **health workforce**, (3) **health information systems**, (4) **medical products, vaccines & technologies**, (5) **financing**, and (6) **leadership/governance**. Service delivery is the only block patients see directly; the other five are the enabling inputs behind it.',
    '**The blocks are inputs that produce four system goals:** better **health** (level + equity), **responsiveness** to people’s expectations, **financial risk protection**, and improved **efficiency**. A system is only as strong as its **weakest** block — systems-thinking means fixing the bottleneck, not the most visible part.',
    '**Governance is the cross-cutting glue.** Leadership/governance (stewardship) sets policy, regulates, and aligns the other five blocks; **financing** raises and pools the money (see [[ich-health-financing-uhc]]); the rest supply the people, information, and products that service delivery combines at the point of care.',
    '**Levels of care are tiered:** **primary** (first contact, close to home, the gatekeeper), **secondary** (district/general hospitals, general specialists), and **tertiary** (regional/university, sub-specialty). Care should enter at the primary level and move up only when needed.',
    '**The referral system links the tiers both ways** — **up-referral** for problems beyond a level’s capacity and **counter-referral** back down for continuing care. In Thailand this runs on the **district health system**; strong primary care with two-way referral is what makes a scheme like UCS work (see [[ich-thai-health-system-schemes]]).',
  ],

  mechanism: {
    title: 'Six building blocks (inputs) → access & coverage → system goals',
    steps: [
      { id: 's1', label: 'Governance sets policy & regulation (stewardship)', emphasis: 'key' },
      { id: 's2', label: 'Financing + workforce + products + information = the inputs' },
      { id: 's3', label: 'Service delivery combines inputs into safe, effective care', emphasis: 'key' },
      { id: 's4', label: '→ Access, coverage, quality and safety' },
      { id: 's5', label: '→ Health, responsiveness, financial protection, efficiency', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'There are exactly six building blocks; service delivery is the visible output', mechanism: 'The other five (workforce, information, products, financing, governance) are enabling inputs', significance: 'key' },
    { sign: 'Leadership/governance is the cross-cutting block', mechanism: 'Stewardship regulates and aligns the other five so they pull together', significance: 'key' },
    { sign: 'Primary care is the first-contact gatekeeper of the referral system', mechanism: 'It filters and directs demand so higher tiers handle only what needs them', significance: 'key' },
    { sign: 'The system’s ultimate goals are health, responsiveness, financial protection and efficiency', mechanism: 'Building blocks are means; these four outcomes are the ends', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Clinics repeatedly run out of essential drugs despite enough staff and money', meaning: 'Failure of the “medical products, vaccines & technologies” (supply-chain) block' },
    { clue: 'The country cannot say how many people are covered or track disease trends', meaning: 'Weak “health information systems” block' },
    { clue: 'Patients bypass local clinics and self-refer to a regional hospital for minor illness', meaning: 'Broken gatekeeping/referral — primary care is being skipped' },
    { clue: 'Doctors cluster in cities while rural districts have none', meaning: '“Health workforce” maldistribution, not an absolute shortage' },
  ],

  treatment: [
    { logic: 'Think in systems — strengthen the weakest block', detail: 'A chain is only as strong as its weakest link; diagnose which block is the bottleneck (products? information? workforce?) and invest there rather than in the most visible part.' },
    { logic: 'Build primary care as the foundation', detail: 'A functioning district health system with two-way referral lets scarce specialist tiers focus on what truly needs them and underpins universal coverage.' },
  ],

  mnemonics: [
    { hook: 'The 6 WHO building blocks', expansion: ['1 Service delivery — the visible output', '2 Health workforce', '3 Health information systems', '4 Medical products, vaccines & technologies', '5 Financing', '6 Leadership/governance — the invisible glue'] },
    { hook: '4 system goals: Health, Responsiveness, Protection, Efficiency', expansion: ['Better HEALTH (level + equity)', 'RESPONSIVENESS to expectations', 'Financial risk PROTECTION', 'Improved EFFICIENCY'] },
  ],

  traps: [
    {
      questionCategory: 'Which building block is failing?',
      wrongInstinct: 'Persistent drug stock-outs are a “service delivery” problem',
      rightAnswer: 'Ongoing stock-outs point to the “medical products, vaccines & technologies” (procurement/supply) block',
      why: 'Service delivery is how inputs are combined at the bedside; a broken supply chain is its own upstream block — treating it as “service delivery” hides the real bottleneck.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A district repeatedly runs out of essential medicines despite adequate staffing and funding. Which WHO building block is failing?',
      options: [
        { id: 'a', text: 'Service delivery' },
        { id: 'b', text: 'Health workforce' },
        { id: 'c', text: 'Medical products, vaccines and technologies' },
        { id: 'd', text: 'Leadership and governance' },
      ],
      answerId: 'c',
      explanation: 'A functioning supply chain for medicines and commodities is its own building block. Adequate staff and money rule out the workforce and financing blocks; the failure is in medical products/procurement.',
      tests: 'system',
    },
    {
      id: 'q2',
      stem: 'Which WHO building block is best described as the cross-cutting “stewardship” that regulates and aligns the other five?',
      options: [
        { id: 'a', text: 'Financing' },
        { id: 'b', text: 'Leadership and governance' },
        { id: 'c', text: 'Health information systems' },
        { id: 'd', text: 'Service delivery' },
      ],
      answerId: 'b',
      explanation: 'Leadership/governance is the cross-cutting stewardship function: it sets policy, regulates, and coordinates the other five blocks so the system pulls in one direction.',
      tests: 'lecture',
    },
  ],
};

export default ichHealthSystemBuildingBlocks;
