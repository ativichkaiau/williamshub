import type { Lecture } from '../../lib/types';

export const hhlTargetedTherapyClasses: Lecture = {
  id: 'hhl-targeted-therapy-classes',
  title: 'Targeted Agents Across Leukemia',
  system: 'heme',
  source: 'L16 — Targeted Therapy for Leukemia',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L16 Targeted Therapy' },
    { kind: 'treatment', label: 'Targeted agents' },
    { kind: 'mechanism', label: 'Molecular targeting' },
    { kind: 'disease', label: 'Leukaemia / lymphoma' },
  ],

  highYield: [
    'Core principle: **identify a defined molecular lesion or surface antigen and hit it precisely** — greater specificity and **distinctive (not classic cytotoxic) toxicities**.',
    '**Differentiation therapy**: **ATRA + arsenic trioxide** in **APL (t(15;17) PML-RARA)** force promyelocytes to mature — risk of **differentiation (ATRA) syndrome** (fever, fluid overload, respiratory distress). See [[hhl-aml]].',
    '**Kinase inhibitors**: BCR-ABL TKIs in CML ([[hhl-tki-cml]]); **FLT3 inhibitors (midostaurin)** for FLT3-mutated AML; **BTK inhibitors (ibrutinib)** in CLL.',
    '**Antibodies / immunotherapy**: **rituximab (anti-CD20)** for B-cell NHL/CLL; **gemtuzumab ozogamicin (anti-CD33 conjugate)** in AML; **blinatumomab (CD19×CD3 BiTE)** for B-ALL — risk of **cytokine release syndrome**.',
    '**BCL2 inhibitor venetoclax** (restores apoptosis) in CLL/AML — **tumour-lysis risk on ramp-up**; **CAR-T (anti-CD19)** for relapsed/refractory B-ALL and B-NHL — **cytokine release syndrome + neurotoxicity**.',
  ],

  mechanism: {
    title: 'Hit a defined lesion / antigen → class-specific toxicity',
    steps: [
      { id: 's1', label: 'Define the target (fusion, mutation, or surface antigen)', emphasis: 'key' },
      { id: 's2', label: 'Choose the modality (differentiator / kinase inhibitor / antibody / cellular)', emphasis: 'key' },
      { id: 's3', label: 'ATRA differentiates APL; TKI/FLT3i block kinases; venetoclax restores apoptosis' },
      { id: 's4', label: 'Antibodies / BiTE / CAR-T redirect immunity to CD19/CD20/CD33', emphasis: 'key' },
      { id: 's5', label: 'Class toxicities: cytokine release / differentiation syndrome / tumour lysis', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Fever, dyspnoea, weight gain, pulmonary infiltrates after starting ATRA', mechanism: 'Differentiation (ATRA) syndrome in APL', significance: 'key' },
    { sign: 'High fever, hypotension, hypoxia days after CAR-T or blinatumomab', mechanism: 'Cytokine release syndrome', significance: 'key' },
    { sign: 'Tumour lysis on venetoclax ramp-up', mechanism: 'Rapid apoptosis of a large clone', significance: 'key' },
    { sign: 'FLT3-ITD mutation in AML', mechanism: 'Target for midostaurin (and worse baseline prognosis)', significance: 'supportive' },
    { sign: 'CD20 expression on a B-cell lymphoma', mechanism: 'Rituximab target', significance: 'supportive' },
  ],

  investigations: [
    { clue: 't(15;17) PML-RARA', meaning: 'Use ATRA + arsenic (differentiation therapy)' },
    { clue: 'FLT3-ITD mutation in AML', meaning: 'Add a FLT3 inhibitor (midostaurin); adverse prognosis' },
    { clue: 'CD19 / CD20 / CD33 antigen on flow cytometry', meaning: 'Target for antibody / BiTE / CAR-T therapy' },
    { clue: 'New hypoxia + hypotension + high ferritin after immunotherapy', meaning: 'Cytokine release syndrome' },
  ],

  treatment: [
    { logic: 'Match the agent to the lesion', detail: 'ATRA/arsenic (APL), FLT3i (FLT3-AML), anti-CD20 (B-NHL/CLL), anti-CD19 blinatumomab/CAR-T (B-ALL), anti-CD33 gemtuzumab (AML), venetoclax (CLL/AML).' },
    { logic: 'Anticipate the class toxicities', detail: 'Differentiation syndrome → steroids; cytokine release syndrome → IL-6 blockade (tocilizumab) ± steroids; tumour lysis → hydration + rasburicase (venetoclax ramp-up). See [[hhl-acute-leukemia-approach]].' },
  ],

  mnemonics: [
    { hook: 'Target the lesion: ATRA(APL) · FLT3i(AML) · CD20(rituximab) · CD19(blina/CAR-T) · CD33(gemtuzumab) · BCL2(venetoclax)', expansion: ['Differentiation syndrome (ATRA)', 'Cytokine release (CAR-T / BiTE)', 'Tumour lysis (venetoclax)'] },
    { hook: 'Blinatumomab = CD19×CD3 BiTE bridging a T cell to the B-ALL cell', expansion: ['CAR-T = engineered anti-CD19 T cells', 'CRS → treat with tocilizumab'] },
  ],

  traps: [
    {
      questionCategory: 'Post-CAR-T fever',
      wrongInstinct: 'High fever + hypotension after CAR-T must be plain sepsis',
      rightAnswer: 'Consider cytokine release syndrome — treat with IL-6 blockade (tocilizumab) ± steroids while still covering infection',
      why: 'CRS is the signature toxicity of T-cell-redirecting therapy and has specific, distinct management.',
    },
    {
      questionCategory: 'Where ATRA works',
      wrongInstinct: 'ATRA is a general cytotoxic usable across leukaemias',
      rightAnswer: 'ATRA works ONLY in APL (t(15;17)) by differentiating promyelocytes — and can itself cause differentiation syndrome',
      why: 'It is lesion-specific differentiation therapy, not broad chemotherapy.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with t(15;17) APL is given an agent that forces the malignant promyelocytes to mature rather than killing them directly. This agent is:',
      options: [
        { id: 'a', text: 'All-trans retinoic acid (ATRA)' },
        { id: 'b', text: 'Rituximab' },
        { id: 'c', text: 'Venetoclax' },
        { id: 'd', text: 'Imatinib' },
      ],
      answerId: 'a',
      explanation: 'ATRA is differentiation therapy specific to APL: it relieves the PML-RARA-imposed maturation block so promyelocytes differentiate. Its use can precipitate differentiation (ATRA) syndrome.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'Blinatumomab treats B-ALL by which mechanism?',
      options: [
        { id: 'a', text: 'Linking CD19 on B cells to CD3 on T cells (a BiTE) to redirect T-cell killing' },
        { id: 'b', text: 'Blocking the BCR-ABL kinase' },
        { id: 'c', text: 'Restoring apoptosis by inhibiting BCL2' },
        { id: 'd', text: 'Differentiating promyelocytes' },
      ],
      answerId: 'a',
      explanation: 'Blinatumomab is a bispecific T-cell engager (BiTE) that binds CD19 on B-ALL cells and CD3 on T cells, bringing them together so the T cell kills the leukaemic B cell; cytokine release syndrome is a characteristic toxicity.',
      tests: 'mechanism',
    },
  ],
};

export default hhlTargetedTherapyClasses;
