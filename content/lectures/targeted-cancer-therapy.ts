import type { Lecture } from '../../lib/types';

export const targetedCancerTherapy: Lecture = {
  id: 'targeted-cancer-therapy',
  title: 'Targeted & Biologic Cancer Therapy',
  system: 'pharmacology',
  source: 'L10 — Antineoplastic Agents',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pharmacology' },
    { kind: 'lecture', label: 'L10 Targeted Therapy' },
    { kind: 'mechanism', label: 'TKIs, mAbs, checkpoint inhibitors' },
    { kind: 'exam', label: 'Imatinib; trastuzumab; irAEs' },
  ],

  highYield: [
    'TARGETED therapy acts on specific molecular drivers of a cancer, so it is more SELECTIVE (and differently toxic) than cytotoxic chemotherapy — but requires the target to be present (biomarker testing). Two big classes: small-molecule TYROSINE-KINASE INHIBITORS ("-nib") and MONOCLONAL ANTIBODIES ("-mab").',
    'TYROSINE-KINASE INHIBITORS: IMATINIB (BCR-ABL → chronic myeloid leukaemia; also c-KIT/GIST), erlotinib/gefitinib/osimertinib (EGFR — lung), and many others. MONOCLONAL ANTIBODIES: TRASTUZUMAB (HER2 — breast; cardiotoxic), RITUXIMAB (CD20 — B-cell lymphomas), cetuximab (EGFR), bevacizumab (VEGF → angiogenesis; hypertension, bleeding, poor wound healing).',
    'IMMUNE CHECKPOINT INHIBITORS (anti-PD-1: nivolumab/pembrolizumab; anti-PD-L1; anti-CTLA-4: ipilimumab) release the "brakes" on anti-tumour T cells — a major advance (melanoma, lung, others) — but cause autoimmune "IMMUNE-RELATED ADVERSE EVENTS" (colitis, hepatitis, pneumonitis, thyroiditis, hypophysitis) often needing steroids/immunosuppression.',
    'HORMONAL therapy for hormone-driven cancers: breast — tamoxifen (SERM), aromatase inhibitors (anastrozole/letrozole); prostate — GnRH agonists/antagonists (androgen deprivation), antiandrogens. CAR-T cell therapy is an advanced cellular immunotherapy (cytokine release syndrome). Targeted agents can still be toxic (cardiotoxicity, skin/GI, hypertension, immune effects) and resistance emerges (new target mutations).',
    '**The take-home: targeted therapy needs a biomarker — "-nib" (TKIs: imatinib/BCR-ABL, EGFR inhibitors), "-mab" (trastuzumab/HER2 cardiotoxic, rituximab/CD20, bevacizumab/VEGF), checkpoint inhibitors (anti-PD-1/CTLA-4 → immune-related adverse events), and hormonal therapy (tamoxifen/aromatase inhibitors, androgen deprivation).** The cytotoxic classes are in [[cytotoxic-chemotherapy-agents]]; general principles in [[antineoplastic-principles]]; checkpoint/immune therapy links to [[immunostimulants-biologics]].',
  ],

  mechanism: {
    title: 'Targeted needs a biomarker: TKIs "-nib", mAbs "-mab", checkpoint inhibitors (irAEs), hormonal therapy; selective but still toxic; resistance',
    steps: [
      { id: 's1', label: 'Targeted therapy hits specific drivers → more selective (needs biomarker testing)', emphasis: 'key' },
      { id: 's2', label: 'TKIs "-nib": imatinib (BCR-ABL/CML), EGFR inhibitors (lung)', emphasis: 'key' },
      { id: 's3', label: 'mAbs "-mab": trastuzumab (HER2, cardiotoxic), rituximab (CD20), bevacizumab (VEGF)', emphasis: 'key' },
      { id: 's4', label: 'Checkpoint inhibitors (anti-PD-1/PD-L1/CTLA-4) → immune-related adverse events', emphasis: 'danger' },
      { id: 's5', label: 'Hormonal (tamoxifen/aromatase inhibitors; androgen deprivation); resistance via new mutations' },
    ],
  },

  examFindings: [
    { sign: 'Targeted therapy for BCR-ABL-positive chronic myeloid leukaemia', mechanism: 'Imatinib (tyrosine-kinase inhibitor)', significance: 'key' },
    { sign: 'HER2-directed antibody with cardiotoxicity in breast cancer', mechanism: 'Trastuzumab', significance: 'key' },
    { sign: 'Autoimmune colitis/hepatitis/thyroiditis during cancer immunotherapy', mechanism: 'Checkpoint-inhibitor immune-related adverse events', significance: 'key' },
    { sign: 'B-cell depletion for lymphoma with an anti-CD20 antibody', mechanism: 'Rituximab', significance: 'supportive' },
    { sign: 'Hypertension, bleeding and poor wound healing on an anti-angiogenic', mechanism: 'Bevacizumab (anti-VEGF)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The suffixes of tyrosine-kinase inhibitors vs monoclonal antibodies', meaning: '"-nib" (TKI) vs "-mab" (antibody)' },
    { clue: 'The TKI for BCR-ABL CML', meaning: 'Imatinib' },
    { clue: 'The characteristic toxicity of checkpoint inhibitors', meaning: 'Immune-related adverse events (autoimmune organ inflammation)' },
    { clue: 'What must be confirmed before using targeted therapy', meaning: 'Presence of the target/biomarker' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Targeted therapy is biomarker-driven (HER2, EGFR, BCR-ABL, CD20, PD-L1) and more selective than cytotoxics, but has distinct toxicities (trastuzumab cardiotoxicity, bevacizumab hypertension/bleeding, checkpoint-inhibitor autoimmune events needing steroids). It has transformed several cancers, though resistance emerges via new mutations. It complements the cytotoxic classes of [[cytotoxic-chemotherapy-agents]] and the principles of [[antineoplastic-principles]]; immune-based therapy overlaps [[immunostimulants-biologics]].' },
  ],

  mnemonics: [
    { hook: '"-nib = kinase inhibitor; -mab = monoclonal antibody"', expansion: ['Imatinib = BCR-ABL', 'Trastuzumab = HER2 (cardiotoxic)'] },
    { hook: 'Checkpoint inhibitors "release the brakes → autoimmune irAEs"', expansion: ['Anti-PD-1/CTLA-4', 'Treat irAEs with steroids'] },
  ],

  traps: [
    {
      questionCategory: 'Targeted therapy and biomarkers',
      wrongInstinct: 'Targeted cancer drugs work for any patient with that cancer type',
      rightAnswer: 'Targeted agents only work if the tumour actually EXPRESSES/carries the target (e.g. trastuzumab needs HER2 positivity, EGFR inhibitors need EGFR mutations, imatinib needs BCR-ABL) — so BIOMARKER TESTING is required before use; giving them to biomarker-negative tumours is ineffective',
      why: 'Because efficacy depends on the molecular target being present, targeted therapy is inseparable from companion biomarker testing — using it without the target wastes treatment and delays effective care.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Imatinib is a targeted therapy that inhibits which tyrosine kinase, making it effective in chronic myeloid leukaemia?',
      options: [
        { id: 'a', text: 'HER2' },
        { id: 'b', text: 'BCR-ABL' },
        { id: 'c', text: 'CD20' },
        { id: 'd', text: 'VEGF' },
      ],
      answerId: 'b',
      explanation: 'Imatinib inhibits the BCR-ABL fusion tyrosine kinase produced by the Philadelphia chromosome t(9;22) in CML (and c-KIT in GIST). Trastuzumab targets HER2, rituximab targets CD20, and bevacizumab targets VEGF.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Immune checkpoint inhibitors (e.g. anti-PD-1) cause a characteristic pattern of toxicity known as:',
      options: [
        { id: 'a', text: 'Haemorrhagic cystitis' },
        { id: 'b', text: 'Immune-related adverse events (autoimmune inflammation of organs)' },
        { id: 'c', text: 'Peripheral neuropathy' },
        { id: 'd', text: 'Pulmonary fibrosis' },
      ],
      answerId: 'b',
      explanation: 'By releasing the brakes on T cells, checkpoint inhibitors can trigger immune-related adverse events — autoimmune colitis, hepatitis, pneumonitis, thyroiditis, hypophysitis, dermatitis — which are managed with corticosteroids/immunosuppression depending on severity.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default targetedCancerTherapy;
