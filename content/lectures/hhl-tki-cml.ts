import type { Lecture } from '../../lib/types';

export const hhlTkiCml: Lecture = {
  id: 'hhl-tki-cml',
  title: 'Tyrosine Kinase Inhibitors in CML',
  system: 'heme',
  source: 'L16 — Targeted Therapy for Leukemia',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L16 Targeted Therapy' },
    { kind: 'treatment', label: 'Tyrosine kinase inhibitors' },
    { kind: 'mechanism', label: 'BCR-ABL kinase' },
    { kind: 'disease', label: 'CML' },
  ],

  highYield: [
    'CML is driven by the **BCR-ABL fusion** (Philadelphia t(9;22)), a **constitutively active tyrosine kinase** — the ideal single molecular target. See [[hhl-mpn]].',
    '**Imatinib blocks the ATP-binding pocket** of BCR-ABL → shuts off proliferative signalling → deep, durable remission; it turned CML from a fatal disease into a chronic, well-controlled one.',
    '**Targeted vs cytotoxic**: TKIs hit a **defined molecular lesion** rather than all dividing cells — the paradigm of precision oncology.',
    'Monitor response with the **quantitative BCR-ABL transcript (RT-PCR / "log reduction", major molecular response)**; a **rising transcript = resistance or non-adherence**.',
    'Resistance from kinase-domain mutations; the **T315I "gatekeeper"** resists imatinib/dasatinib/nilotinib → use **ponatinib**. 2nd-generation (dasatinib, nilotinib) cover other mutations/intolerance.',
  ],

  mechanism: {
    title: 'Block the BCR-ABL ATP pocket → switch off the oncogenic kinase',
    steps: [
      { id: 's1', label: 't(9;22) → BCR-ABL constitutive tyrosine kinase', emphasis: 'key' },
      { id: 's2', label: 'Imatinib occupies the ATP-binding pocket', emphasis: 'key' },
      { id: 's3', label: 'Downstream proliferation signalling off → clone apoptosis' },
      { id: 's4', label: 'Monitor BCR-ABL transcript for response', emphasis: 'key' },
      { id: 's5', label: 'Untreated resistance (e.g. T315I) → progression to blast crisis', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Falling BCR-ABL transcript on RT-PCR', mechanism: 'Molecular response to the TKI', significance: 'key' },
    { sign: 'Rising BCR-ABL transcript / loss of response', mechanism: 'Resistance or non-adherence', significance: 'key' },
    { sign: 'T315I mutation on kinase-domain sequencing', mechanism: 'Pan-TKI resistance except ponatinib', significance: 'key' },
    { sign: 'Periorbital oedema, fluid retention, cytopenias, cramps', mechanism: 'Imatinib class adverse effects', significance: 'supportive' },
    { sign: 'Pleural effusion', mechanism: 'Dasatinib-specific toxicity', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Quantitative BCR-ABL by RT-PCR falling', meaning: 'Molecular response to the TKI' },
    { clue: 'Rising BCR-ABL transcript', meaning: 'Treatment failure — check adherence + kinase-domain mutations' },
    { clue: 'Kinase-domain sequencing shows T315I', meaning: 'Need ponatinib (resistant to imatinib/dasatinib/nilotinib)' },
    { clue: 'Loss of response with rising blasts', meaning: 'Progression to accelerated/blast phase' },
  ],

  treatment: [
    { logic: 'First-line BCR-ABL TKI (imatinib or 2nd-generation)', detail: 'Choose by risk, comorbidity and side-effect profile; aim for a major molecular response.' },
    { logic: 'Switch on resistance/intolerance', detail: 'Mutation-guided: dasatinib/nilotinib for many mutations; ponatinib for T315I.' },
    { logic: 'Adherence + serial monitoring ARE the therapy', detail: 'Outcomes hinge on taking the drug and tracking BCR-ABL by PCR; deep sustained responders may attempt treatment-free remission.' },
  ],

  mnemonics: [
    { hook: 'Imatinib jams the ATP pocket of BCR-ABL', expansion: ['Targeted, not cytotoxic', 'Monitor BCR-ABL by PCR', 'T315I → ponatinib'] },
    { hook: 'T315I = Total resistance except ponatinib', expansion: ['Dasatinib → pleural effusion', 'Rising transcript → check adherence first'] },
  ],

  traps: [
    {
      questionCategory: 'How to monitor CML on a TKI',
      wrongInstinct: 'Follow the response using the white-cell count',
      rightAnswer: 'Monitor the quantitative BCR-ABL transcript by RT-PCR (molecular response)',
      why: 'Blood counts normalise early while residual disease is tracked only by molecular transcript levels.',
    },
    {
      questionCategory: 'Managing TKI resistance',
      wrongInstinct: 'A rising BCR-ABL means you should simply escalate the same imatinib dose',
      rightAnswer: 'Test for kinase-domain mutations (e.g. T315I) and switch drug — T315I needs ponatinib',
      why: 'The mutation, not the dose, dictates the next agent; also confirm the patient is actually taking it.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Imatinib treats CML by which mechanism?',
      options: [
        { id: 'a', text: 'Blocking the ATP-binding site of the BCR-ABL tyrosine kinase' },
        { id: 'b', text: 'Cross-linking DNA strands' },
        { id: 'c', text: 'Inhibiting microtubule assembly' },
        { id: 'd', text: 'Binding CD20 on B cells' },
      ],
      answerId: 'a',
      explanation: 'Imatinib is a small-molecule inhibitor that occupies the ATP-binding pocket of the BCR-ABL fusion kinase, switching off its constitutive proliferative signalling — targeted, not cytotoxic, therapy.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A CML patient on imatinib has a rising BCR-ABL transcript; kinase-domain sequencing shows the T315I mutation. Best next agent?',
      options: [
        { id: 'a', text: 'Higher-dose imatinib' },
        { id: 'b', text: 'Dasatinib' },
        { id: 'c', text: 'Nilotinib' },
        { id: 'd', text: 'Ponatinib' },
      ],
      answerId: 'd',
      explanation: 'The T315I "gatekeeper" mutation confers resistance to imatinib, dasatinib and nilotinib; ponatinib is the TKI that retains activity against it.',
      tests: 'treatment',
    },
  ],
};

export default hhlTkiCml;
