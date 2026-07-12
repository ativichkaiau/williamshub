import type { Lecture } from '../../lib/types';

export const hhlNonHodgkinLymphoma: Lecture = {
  id: 'hhl-non-hodgkin-lymphoma',
  title: 'Non-Hodgkin Lymphoma',
  system: 'heme',
  source: 'L10 — Pathology of Lymph Node & Lymphoma',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L10 Node & Lymphoma' },
    { kind: 'disease', label: 'Non-Hodgkin lymphoma' },
    { kind: 'mechanism', label: 'Driver translocations' },
    { kind: 'investigation', label: 'Immunophenotype · cytogenetics' },
  ],

  highYield: [
    '~**85–90% are B-cell**. Spread is **non-contiguous** and often **extranodal**, and NHL can be leukaemic — contrast the orderly contiguous spread of [[hhl-hodgkin-lymphoma]].',
    '**Indolent**: **follicular lymphoma — t(14;18), BCL2** overexpression (anti-apoptosis; commonest indolent, waxing–waning nodes, incurable but slow); **small lymphocytic lymphoma/CLL**; **MALT** (marginal zone — gastric MALT can regress with **H. pylori** eradication).',
    '**Aggressive**: **diffuse large B-cell lymphoma (DLBCL)** = commonest aggressive and commonest NHL overall; rapidly enlarging mass; **curable with R-CHOP**.',
    '**Burkitt lymphoma — t(8;14), MYC**; **"starry-sky"** (macrophages engulfing apoptotic cells), **Ki-67 ≈ 100%**, EBV-linked (endemic African = **jaw**; sporadic = **abdomen**); **fastest-growing human tumour → tumour lysis syndrome**.',
    '**Mantle cell lymphoma — t(11;14), cyclin D1, CD5+**; aggressive with a poor prognosis.',
  ],

  mechanism: {
    title: 'Translocation-driven lymphomagenesis (indolent vs aggressive)',
    steps: [
      { id: 's1', label: 'B cell acquires a driver translocation', emphasis: 'key' },
      { id: 's2', label: 't(14;18) → BCL2 (anti-apoptosis) → follicular, INDOLENT', emphasis: 'key' },
      { id: 's3', label: 't(8;14) → MYC (proliferation) → Burkitt, AGGRESSIVE', emphasis: 'key' },
      { id: 's4', label: 'High-turnover Burkitt → tumour lysis syndrome', emphasis: 'danger' },
      { id: 's5', label: 'Non-contiguous / extranodal dissemination' },
    ],
  },

  examFindings: [
    { sign: 'Painless, often generalised or extranodal lymphadenopathy', mechanism: 'Non-Hodgkin lymphoma', significance: 'key' },
    { sign: 'Effaced node with monotonous follicles, BCL2+', mechanism: 'Follicular lymphoma', significance: 'key' },
    { sign: '"Starry-sky" sheets of blasts, Ki-67 ≈ 100%', mechanism: 'Burkitt lymphoma (very high turnover)', significance: 'key' },
    { sign: 'Gastric lymphoid infiltrate with H. pylori', mechanism: 'MALT lymphoma', significance: 'supportive' },
    { sign: 'CD5+ mantle pattern, cyclin D1+', mechanism: 'Mantle cell lymphoma', significance: 'supportive' },
  ],

  investigations: [
    { clue: 't(14;18), BCL2 overexpression', meaning: 'Follicular lymphoma (indolent)' },
    { clue: 't(8;14), MYC, starry-sky, Ki-67 ≈ 100%', meaning: 'Burkitt lymphoma (aggressive)' },
    { clue: 't(11;14), cyclin D1+, CD5+', meaning: 'Mantle cell lymphoma' },
    { clue: 'Rising K+/phosphate/urate with low Ca after treating bulky lymphoma', meaning: 'Tumour lysis syndrome' },
  ],

  treatment: [
    { logic: 'Match intensity to grade', detail: 'Indolent (follicular): watchful waiting or rituximab-based therapy — incurable but long survival. Aggressive (DLBCL, Burkitt): curable with intensive immunochemotherapy.' },
    { logic: 'Rituximab (anti-CD20) backbone; treat the cause of MALT', detail: 'R-CHOP for DLBCL; H. pylori eradication can cure early gastric MALT. See [[hhl-targeted-therapy-classes]].' },
    { logic: 'Tumour-lysis prophylaxis for bulky/high-grade disease', detail: 'Hydration + allopurinol/rasburicase before starting Burkitt/DLBCL therapy. See [[hhl-acute-leukemia-approach]].' },
  ],

  mnemonics: [
    { hook: 'BCL2 = 14;18 = Follicular (Blocks apoptosis); MYC = 8;14 = Burkitt (Makes it grow)', expansion: ['Cyclin D1 = 11;14 = Mantle cell', 'Starry-sky = Burkitt'] },
    { hook: 'Burkitt is Fast: starry sky, jaw (endemic)/abdomen (sporadic), tumour lysis', expansion: ['EBV-linked', 'Ki-67 ≈ 100%'] },
  ],

  traps: [
    {
      questionCategory: 'Function of t(14;18)',
      wrongInstinct: 'BCL2 overexpression makes follicular lymphoma proliferate fast',
      rightAnswer: 'BCL2 BLOCKS apoptosis (cells accumulate), so follicular lymphoma is INDOLENT, not fast-growing',
      why: 'It is an anti-death, not a pro-growth, lesion — which is why follicular lymphoma is indolent yet incurable.',
    },
    {
      questionCategory: 'Pattern of lymphoma spread',
      wrongInstinct: 'All lymphomas spread contiguously node-to-node',
      rightAnswer: 'NHL frequently spreads non-contiguously and extranodally (and may be leukaemic)',
      why: 'Contiguity is Hodgkin\'s hallmark; NHL is unpredictable and often extranodal.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A child has a rapidly growing jaw mass. Biopsy shows sheets of intermediate blasts with a "starry-sky" pattern and Ki-67 near 100%. Diagnosis and translocation?',
      options: [
        { id: 'a', text: 'Follicular lymphoma, t(14;18)' },
        { id: 'b', text: 'Burkitt lymphoma, t(8;14)' },
        { id: 'c', text: 'Mantle cell lymphoma, t(11;14)' },
        { id: 'd', text: 'Diffuse large B-cell lymphoma, no signature' },
      ],
      answerId: 'b',
      explanation: 'A "starry-sky" high-turnover tumour with Ki-67 ≈ 100% and a jaw mass is Burkitt lymphoma, driven by MYC via t(8;14).',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: '48 hours after starting chemotherapy for Burkitt lymphoma, a patient develops AKI with high K+, high phosphate, high urate and low calcium. Cause?',
      options: [
        { id: 'a', text: 'Tumour lysis syndrome' },
        { id: 'b', text: 'Contrast nephropathy' },
        { id: 'c', text: 'Hypercalcaemia of malignancy' },
        { id: 'd', text: 'Rituximab infusion reaction' },
      ],
      answerId: 'a',
      explanation: 'Rapid lysis of a high-turnover tumour releases intracellular contents: hyperkalaemia, hyperphosphataemia and hyperuricaemia with hypocalcaemia (phosphate binds calcium) plus AKI — tumour lysis syndrome.',
      tests: 'mechanism',
    },
  ],
};

export default hhlNonHodgkinLymphoma;
