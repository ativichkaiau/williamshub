import type { Lecture } from '../../lib/types';

export const immunomodulatingAgents: Lecture = {
  id: 'immunomodulating-agents',
  title: 'Immunomodulating Agents',
  system: 'pharmacology',
  source: 'L13 — Immunomodulating Agents',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pharmacology' },
    { kind: 'lecture', label: 'L13 Immunomodulators' },
    { kind: 'mechanism', label: 'Immunosuppression & stimulation' },
    { kind: 'exam', label: 'Calcineurin inhibitors; biologics' },
  ],

  highYield: [
    '**Immunomodulators either SUPPRESS the immune system (transplant, autoimmune disease) or STIMULATE it (cancer, immunodeficiency, vaccines). GLUCOCORTICOIDS (prednisolone) are the broadest immunosuppressants — they inhibit NF-κB → ↓cytokines, and cause the classic Cushingoid/osteoporosis/infection toxicities. CYTOTOXIC/antiproliferative agents: AZATHIOPRINE (→6-MP; TPMT genotype affects toxicity), MYCOPHENOLATE (inhibits IMP dehydrogenase → blocks purine synthesis in lymphocytes), METHOTREXATE, cyclophosphamide.**',
    '**CALCINEURIN INHIBITORS are the backbone of transplant immunosuppression: CICLOSPORIN (binds cyclophilin) and TACROLIMUS (binds FKBP) → inhibit CALCINEURIN → ↓IL-2 → ↓T-cell activation. Toxicities: NEPHROTOXICITY, hypertension, neurotoxicity, and (ciclosporin) gum hypertrophy/hirsutism; narrow therapeutic index → drug-level monitoring and many CYP3A4 interactions. mTOR inhibitors (SIROLIMUS) block T-cell proliferation.**',
    '**BIOLOGICS target specific molecules: anti-TNF-α (infliximab, adalimumab, etanercept — RA/IBD/psoriasis; reactivate latent TB → SCREEN first), anti-CD20 (rituximab — B-cell depletion), anti-IL agents, and abatacept (co-stimulation blockade). Immunosuppression\'s big risk is INFECTION (including opportunistic/latent TB, hepatitis reactivation) and malignancy; live vaccines are contraindicated.**',
    '**IMMUNOSTIMULANTS: INTERFERONS (antiviral/antitumour), colony-stimulating factors (G-CSF/filgrastim boosts neutrophils after chemo), interleukins (IL-2/aldesleukin), vaccines, and immune-CHECKPOINT INHIBITORS (anti-PD-1/PD-L1/CTLA-4) that release the brakes on anti-tumour T cells but cause autoimmune "immune-related adverse events". Colony-stimulating factors and interferons bridge to haematology and hepatitis therapy.**',
    '**The take-home: glucocorticoids (broad), antiproliferatives (azathioprine/mycophenolate), CALCINEURIN inhibitors (ciclosporin/tacrolimus → ↓IL-2, nephrotoxic, monitored) suppress immunity; biologics (anti-TNF — screen TB) target precisely; immunostimulants (interferon, G-CSF, checkpoint inhibitors) enhance it. Main risk of suppression = infection.** Underlying immunology is in the immune system; TB screening and antineoplastic overlap link to [[antineoplastic-principles]]; azathioprine/TPMT ties to [[pharmacogenomics]].',
  ],

  mechanism: {
    title: 'Suppress (steroids, antiproliferatives, calcineurin/mTOR inhibitors, biologics) vs stimulate (interferon, CSF, checkpoint inhibitors)',
    steps: [
      { id: 's1', label: 'Glucocorticoids inhibit NF-κB → broad immunosuppression (Cushingoid toxicity)', emphasis: 'key' },
      { id: 's2', label: 'Antiproliferatives: azathioprine (→6-MP, TPMT), mycophenolate (purine synthesis)', emphasis: 'key' },
      { id: 's3', label: 'Calcineurin inhibitors (ciclosporin/tacrolimus) → ↓IL-2 → ↓T cells; nephrotoxic, monitored', emphasis: 'key' },
      { id: 's4', label: 'Biologics: anti-TNF (screen latent TB), anti-CD20 (rituximab); infection risk, no live vaccines', emphasis: 'danger' },
      { id: 's5', label: 'Stimulants: interferons, G-CSF (post-chemo neutrophils), checkpoint inhibitors (irAEs)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Nephrotoxicity, hypertension and tremor in a transplant patient', mechanism: 'Calcineurin inhibitor (ciclosporin/tacrolimus) toxicity', significance: 'key' },
    { sign: 'Reactivation of latent tuberculosis after starting a biologic', mechanism: 'Anti-TNF-α therapy (screen TB before starting)', significance: 'key' },
    { sign: 'Severe azathioprine myelosuppression', mechanism: 'Low TPMT activity (pharmacogenomic)', significance: 'key' },
    { sign: 'Autoimmune colitis/hepatitis/thyroiditis during cancer immunotherapy', mechanism: 'Checkpoint-inhibitor immune-related adverse events', significance: 'key' },
    { sign: 'Neutrophil recovery accelerated after chemotherapy', mechanism: 'G-CSF (filgrastim) immunostimulation', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The enzyme calcineurin inhibitors block (via cyclophilin/FKBP)', meaning: 'Calcineurin → reduced IL-2 and T-cell activation' },
    { clue: 'The dose-limiting toxicity of ciclosporin/tacrolimus', meaning: 'Nephrotoxicity (also hypertension, neurotoxicity)' },
    { clue: 'The infection to screen for before anti-TNF therapy', meaning: 'Latent tuberculosis (± hepatitis B)' },
    { clue: 'The main risk of immunosuppression generally', meaning: 'Infection (including opportunistic) and malignancy' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Immunomodulator choice balances efficacy against infection/malignancy risk: glucocorticoids and antiproliferatives are broad, calcineurin inhibitors anchor transplant immunosuppression (nephrotoxic, monitored, CYP-interacting — [[drug-interactions-mechanisms]]), and biologics are precise but reactivate TB/hepatitis (screen first). Pharmacogenomics (TPMT → azathioprine) prevents marrow toxicity ([[pharmacogenomics]]); immunostimulants (G-CSF, interferons, checkpoint inhibitors) support chemotherapy and cancer immunotherapy ([[antineoplastic-principles]]).' },
  ],

  mnemonics: [
    { hook: '"Calcineurin inhibitors → ↓IL-2 → ↓T cells (Ciclosporin/cyclophilin, Tacrolimus/FKBP)"', expansion: ['Nephrotoxic + monitored', 'Many CYP3A4 interactions'] },
    { hook: '"Anti-TNF → screen TB first"; suppression → infection risk, no live vaccines', expansion: ['Azathioprine → check TPMT', 'G-CSF boosts neutrophils'] },
  ],

  traps: [
    {
      questionCategory: 'Biologics and latent infection',
      wrongInstinct: 'Targeted biologics like anti-TNF agents are precise, so they carry little infection risk',
      rightAnswer: 'Anti-TNF-α agents specifically neutralise a cytokine ESSENTIAL for granuloma maintenance, so they characteristically REACTIVATE latent tuberculosis (and hepatitis B) — patients must be SCREENED and treated for latent TB before starting; targeted does not mean low-risk for infection',
      why: 'TNF-α is central to containing intracellular pathogens in granulomas, so blocking it unmasks latent TB — a mandatory pre-treatment screen that a "precise = safe" assumption would miss.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Ciclosporin and tacrolimus suppress the immune system by ultimately reducing production of:',
      options: [
        { id: 'a', text: 'Interleukin-2 (via calcineurin inhibition), reducing T-cell activation' },
        { id: 'b', text: 'Immunoglobulin by plasma cells' },
        { id: 'c', text: 'Complement proteins' },
        { id: 'd', text: 'Neutrophils in the marrow' },
      ],
      answerId: 'a',
      explanation: 'Ciclosporin (via cyclophilin) and tacrolimus (via FKBP) inhibit calcineurin, preventing dephosphorylation of NFAT and thus transcription of IL-2. Reduced IL-2 curtails T-cell activation/proliferation. Their key toxicity is nephrotoxicity, and they need level monitoring.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Before starting anti-TNF-α biologic therapy, it is essential to screen for:',
      options: [
        { id: 'a', text: 'Latent tuberculosis' },
        { id: 'b', text: 'Colour blindness' },
        { id: 'c', text: 'Lactose intolerance' },
        { id: 'd', text: 'Iron deficiency' },
      ],
      answerId: 'a',
      explanation: 'TNF-α maintains granulomas that contain Mycobacterium tuberculosis, so anti-TNF agents can reactivate latent TB (and hepatitis B). Screening and treating latent infection before starting therapy is mandatory. Immunosuppression also contraindicates live vaccines.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default immunomodulatingAgents;
