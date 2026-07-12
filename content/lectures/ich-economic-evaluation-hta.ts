import type { Lecture } from '../../lib/types';

export const ichEconomicEvaluationHta: Lecture = {
  id: 'ich-economic-evaluation-hta',
  title: 'Economic Evaluation & Health Technology Assessment',
  system: 'community',
  source: 'L9 — Health Economics in Thailand',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Community Health' },
    { kind: 'lecture', label: 'L9 Economic Evaluation' },
    { kind: 'mechanism', label: 'CMA · CEA · CUA · CBA' },
    { kind: 'investigation', label: 'ICER · QALY · HITAP' },
  ],

  highYield: [
    '**Economic evaluation compares the costs AND consequences of two or more options.** There are **four types**, distinguished only by how **outcomes** are measured (costs are always in money): **CMA, CEA, CUA and CBA**. This operationalises the opportunity-cost thinking from [[ich-health-economics-concepts]].',
    '**Know the four by their outcome unit:** **CMA** (cost-minimisation) — effects proven **equal**, so pick the cheapest; **CEA** (cost-effectiveness) — outcomes in **natural clinical units** (life-years gained, cases detected); **CUA** (cost-utility) — outcomes in **QALYs** (or **DALYs** averted), so unlike diseases can be compared; **CBA** (cost-benefit) — outcomes valued in **money** (willingness-to-pay).',
    '**The ICER is the headline number:** **ICER = ΔCost / ΔEffect** — the extra cost per extra unit of outcome (e.g. per **QALY** gained) of one option **versus its comparator**. It is always incremental; a single technology on its own has no ICER.',
    '**Compare the ICER to a cost-effectiveness threshold** (the willingness-to-pay “ceiling”): if **ICER < threshold**, the option is judged **cost-effective**. **Thailand’s threshold is ≈ ฿160,000 per QALY** (roughly one times GDP per capita). Cost-effective is not the same as affordable — budget impact is a separate check.',
    '**HTA = systematic, multidisciplinary appraisal** of a technology’s clinical, economic, social, ethical and budgetary impact to inform coverage decisions. In Thailand this is done by **HITAP** (Health Intervention and Technology Assessment Program, est. 2007, under the MoPH), whose evidence feeds the **NLEM** and the **UCS benefit package** (see [[ich-thai-health-system-schemes]]).',
  ],

  mechanism: {
    title: 'Compare options → measure cost & effect → ICER → threshold → decision',
    steps: [
      { id: 's1', label: 'Define ≥2 comparators (new vs current standard)', emphasis: 'key' },
      { id: 's2', label: 'Measure costs (money) + consequences → pick CMA/CEA/CUA/CBA', emphasis: 'key' },
      { id: 's3', label: 'Compute ICER = ΔCost / ΔEffect (e.g. cost per QALY)', emphasis: 'key' },
      { id: 's4', label: 'Compare ICER to the threshold (Thailand ≈ ฿160k/QALY)', emphasis: 'key' },
      { id: 's5', label: 'HTA (HITAP) feeds the coverage / benefit-package decision' },
    ],
  },

  examFindings: [
    { sign: 'The four evaluation types differ only in how OUTCOMES are valued', mechanism: 'Costs are always money; the outcome unit (equal effect, natural unit, QALY, money) names the method', significance: 'key' },
    { sign: 'CUA uses the QALY — length × quality of life (utility 0–1)', mechanism: 'A common outcome unit lets you compare very different interventions and diseases', significance: 'key' },
    { sign: 'The ICER is incremental and needs a comparator', mechanism: 'It is the ratio of the difference in cost to the difference in effect between two options', significance: 'key' },
    { sign: 'Below the threshold = good value, but not automatically affordable', mechanism: 'Cost-effectiveness and budget impact are separate questions', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Two generic drugs are proven to have identical effectiveness', meaning: 'Cost-minimisation analysis (CMA) → simply choose the cheaper one' },
    { clue: 'A diabetes drug is compared by cost per life-year gained', meaning: 'Cost-effectiveness analysis (CEA) — a natural clinical outcome unit' },
    { clue: 'Dialysis vs transplant compared as cost per QALY across the whole UCS budget', meaning: 'Cost-utility analysis (CUA) — QALYs allow cross-programme comparison' },
    { clue: 'A new drug costs ฿500,000 per QALY gained in Thailand', meaning: 'ICER far above the ~฿160,000 threshold → not cost-effective for inclusion' },
  ],

  treatment: [
    { logic: 'Choose the evaluation type by the outcome measure', detail: 'Equal effect → CMA; one natural clinical unit → CEA; quality + length across diseases → CUA (QALYs); outcomes in money → CBA.' },
    { logic: 'Use HTA and the threshold to inform, not dictate, coverage', detail: 'HITAP’s cost-per-QALY evidence guides NLEM and UCS benefit-package decisions alongside budget impact, equity and feasibility.' },
  ],

  mnemonics: [
    { hook: '4 evaluations by their OUTCOME unit', expansion: ['CMA — outcomes equal → cheapest wins', 'CEA — natural units (life-years, cases)', 'CUA — QALYs / DALYs', 'CBA — money (willingness-to-pay)'] },
    { hook: 'ICER = ΔCost / ΔEffect, then compare to threshold', expansion: ['Incremental cost ÷ incremental QALYs', 'If below the threshold → cost-effective', 'Thailand ≈ ฿160,000 per QALY'] },
  ],

  traps: [
    {
      questionCategory: 'Which type of economic evaluation?',
      wrongInstinct: 'Any study reporting “cost per QALY” is a cost-effectiveness analysis (CEA)',
      rightAnswer: 'Outcomes measured in QALYs make it a cost-utility analysis (CUA); CEA uses natural clinical units',
      why: 'The four types are defined by how consequences are measured — QALYs are the hallmark of CUA, even though people loosely call all of it “cost-effectiveness”.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An analysis compares two cancer treatments using “cost per QALY gained” so the result can be compared with interventions for other diseases. This is a:',
      options: [
        { id: 'a', text: 'Cost-minimisation analysis' },
        { id: 'b', text: 'Cost-effectiveness analysis' },
        { id: 'c', text: 'Cost-utility analysis' },
        { id: 'd', text: 'Cost-benefit analysis' },
      ],
      answerId: 'c',
      explanation: 'Outcomes expressed in QALYs are the defining feature of cost-utility analysis. Because the QALY is a common unit, results can be compared across different diseases and interventions.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'In Thailand an intervention has an ICER of ฿500,000 per QALY. HITAP assesses it against the national threshold of roughly ฿160,000 per QALY. The most appropriate conclusion is that it is:',
      options: [
        { id: 'a', text: 'Cost-effective and should be added to the benefit package' },
        { id: 'b', text: 'Not cost-effective at that price, because the ICER exceeds the threshold' },
        { id: 'c', text: 'Cost-saving compared with the alternative' },
        { id: 'd', text: 'Equally effective as the comparator' },
      ],
      answerId: 'b',
      explanation: 'When the ICER (฿500,000/QALY) is well above the willingness-to-pay threshold (~฿160,000/QALY), the intervention is not cost-effective at that price. HITAP’s appraisal then informs NLEM and UCS coverage decisions.',
      tests: 'treatment',
    },
  ],
};

export default ichEconomicEvaluationHta;
