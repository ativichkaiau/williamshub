import type { Lecture } from '../../lib/types';

export const immunotherapyModulation: Lecture = {
  id: 'immunotherapy-modulation',
  title: 'Immunotherapy: Suppression, Stimulation & Biologics',
  system: 'immune',
  source: 'L17 — Manipulating the Immune System',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Immunology' },
    { kind: 'lecture', label: 'L17 Manipulating Immunity' },
    { kind: 'mechanism', label: 'Suppress vs stimulate' },
    { kind: 'exam', label: 'mAbs · checkpoints' },
  ],

  highYield: [
    '**We manipulate immunity in two directions: SUPPRESS it** (autoimmunity, transplant, allergy) **or STIMULATE it** (cancer, immunodeficiency, chronic infection).',
    '**Immunosuppressants.** **Corticosteroids** (broad anti-inflammatory), **calcineurin inhibitors** (ciclosporin/tacrolimus → ↓IL-2), **antiproliferatives** (mycophenolate, azathioprine, methotrexate), **mTOR inhibitors** (sirolimus), and **biologics** — used in transplant and autoimmune disease ([[transplant-matching-immunosuppression]]).',
    '**Therapeutic monoclonal antibodies (mAbs)** are engineered for one target: **anti-TNF** (adalimumab/infliximab — RA, IBD), **anti-CD20** (rituximab — lymphoma, autoimmunity), **anti-IgE** (omalizumab — allergy), **anti-IL-17/IL-23** (psoriasis), **anti-HER2** (trastuzumab — breast cancer). Names hint at origin (**-omab** murine → **-ximab** chimeric → **-zumab** humanised → **-umab** fully human).',
    '**Immunostimulation.** **Vaccines** (active) and **cytokines** (IFN, IL-2, G-CSF), plus adjuvants and immunoglobulin replacement (IVIG) for antibody deficiency. **Cancer immunotherapy** re-activates anti-tumour immunity.',
    '**Checkpoint blockade & adoptive cell therapy** are the flagship immunostimulants in oncology: **anti-CTLA-4 / anti-PD-1 / anti-PD-L1** release the T-cell brake, and **CAR-T cells** are engineered killers — with the trade-off of **immune-related (autoimmune-like) toxicity** and cytokine release syndrome (see [[tumor-evasion-immunotherapy]]).',
  ],

  mechanism: {
    title: 'Dial immunity down or up, precisely',
    steps: [
      { id: 's1', label: 'Suppress: steroids, calcineurin/mTOR inhibitors, antiproliferatives', emphasis: 'key' },
      { id: 's2', label: 'Target biologics: anti-TNF/CD20/IgE/IL-17 mAbs', emphasis: 'key' },
      { id: 's3', label: 'Stimulate: vaccines, cytokines (IFN/IL-2/G-CSF), IVIG' },
      { id: 's4', label: 'Checkpoint blockade (anti-CTLA-4/PD-1) + CAR-T', emphasis: 'key' },
      { id: 's5', label: 'Trade-offs: infection/malignancy (suppress) vs autoimmunity (stimulate)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Anti-CD20 (rituximab) depleting B cells', mechanism: 'mAb for lymphoma and autoimmune disease', significance: 'key' },
    { sign: 'Anti-TNF biologic for rheumatoid arthritis', mechanism: 'Cytokine blockade (risk: TB reactivation)', significance: 'key' },
    { sign: 'Anti-IgE (omalizumab) for severe allergy', mechanism: 'Removes free IgE (type I hypersensitivity)', significance: 'supportive' },
    { sign: 'Checkpoint inhibitor causing colitis/thyroiditis', mechanism: 'Immune-related adverse event (loss of tolerance)', significance: 'supportive' },
    { sign: 'IVIG for antibody deficiency', mechanism: 'Immunoglobulin replacement (passive/immunomodulatory)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Monoclonal antibody depleting B cells (CD20)', meaning: 'Rituximab' },
    { clue: 'Biologic risking TB reactivation', meaning: 'Anti-TNF (screen for latent TB first)' },
    { clue: 'Therapy releasing the T-cell brake in cancer', meaning: 'Checkpoint inhibitor (anti-PD-1/CTLA-4)' },
    { clue: 'mAb suffix meaning fully human', meaning: '"-umab" (vs -ximab chimeric, -zumab humanised)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'This lecture ties the course together: the same pathways studied throughout are now drug targets — co-stimulation/checkpoints ([[t-cell-activation]]), cytokines, complement (eculizumab), IgE ([[hypersensitivity-type-1-2]]). Suppression risks infection/cancer; stimulation risks autoimmunity ([[tolerance-autoimmunity-mechanisms]]).' },
  ],

  mnemonics: [
    { hook: 'Suppress (autoimmune/transplant) vs Stimulate (cancer/immunodeficiency)', expansion: ['Opposite goals, same pathways'] },
    { hook: 'mAb names: -omab (mouse) → -ximab (chimeric) → -zumab (humanised) → -umab (human)', expansion: ['More "human" = less immunogenic'] },
  ],

  traps: [
    {
      questionCategory: 'Screening before anti-TNF therapy',
      wrongInstinct: 'Anti-TNF biologics can be started without any infection screening',
      rightAnswer: 'Screen for latent TB (and hepatitis) BEFORE anti-TNF — TNF maintains granulomas, so blockade can reactivate TB',
      why: 'TNF is essential for granuloma integrity ([[immunity-bacteria-extracellular-intracellular]]); blocking it can reactivate latent tuberculosis.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Before starting an anti-TNF biologic for rheumatoid arthritis, it is essential to screen for:',
      options: [
        { id: 'a', text: 'Latent tuberculosis' },
        { id: 'b', text: 'Blood group' },
        { id: 'c', text: 'HLA-B27' },
        { id: 'd', text: 'Colour blindness' },
      ],
      answerId: 'a',
      explanation: 'TNF maintains granuloma integrity, so anti-TNF therapy can reactivate latent TB. Screening (and treating) latent TB before starting is standard practice.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A therapeutic monoclonal antibody with the suffix "-umab" indicates it is:',
      options: [
        { id: 'a', text: 'Fully murine (mouse)' },
        { id: 'b', text: 'Chimeric' },
        { id: 'c', text: 'Humanised' },
        { id: 'd', text: 'Fully human' },
      ],
      answerId: 'd',
      explanation: 'The suffix ladder is -omab (murine) → -ximab (chimeric) → -zumab (humanised) → -umab (fully human); more human sequence means lower immunogenicity.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default immunotherapyModulation;
