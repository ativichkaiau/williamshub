import type { Lecture } from '../../lib/types';

export const transplantMatchingImmunosuppression: Lecture = {
  id: 'transplant-matching-immunosuppression',
  title: 'Transplant Matching & Immunosuppression',
  system: 'immune',
  source: 'L15 — Transplantation Immunology',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Immunology' },
    { kind: 'lecture', label: 'L15 Transplantation' },
    { kind: 'mechanism', label: 'Matching & drugs' },
    { kind: 'exam', label: 'HLA typing · crossmatch' },
  ],

  highYield: [
    '**Pre-transplant workup minimises rejection.** **ABO compatibility** is essential (ABO antigens on endothelium). **HLA (tissue) typing** — especially **HLA-A, -B, -DR** — improves graft survival; the closer the match, the better. **HLA is codominant and inherited as a haplotype**, so siblings have a 25% chance of being HLA-identical.',
    '**Antibody screening & crossmatch.** Recipients are screened for **pre-formed anti-HLA antibodies** (panel-reactive antibody, PRA). A **crossmatch** (recipient serum + donor cells; **CDC or flow crossmatch**) must be **negative** before transplant — a positive crossmatch predicts **hyperacute rejection**.',
    '**Immunosuppression has induction + maintenance phases** and targets T-cell activation. **Calcineurin inhibitors (ciclosporin, tacrolimus)** block IL-2 production (signal transduction). **Antiproliferatives (mycophenolate, azathioprine)** block lymphocyte proliferation. **mTOR inhibitors (sirolimus)** block IL-2 signalling. **Corticosteroids** broadly suppress inflammation.',
    '**Biologic agents.** **Antibodies against T cells / IL-2 receptor** (e.g. anti-CD3, anti-thymocyte globulin, basiliximab) for induction or steroid-resistant rejection; **belatacept** (CTLA-4-Ig) blocks co-stimulation.',
    '**The trade-off:** immunosuppression prevents rejection but increases **opportunistic infections** (CMV, PCP, fungal), **reactivation** (TB), and **malignancy** (especially virus-driven — EBV-related PTLD, skin cancers, HPV) — a form of secondary immunodeficiency.',
  ],

  mechanism: {
    title: 'Match well, then suppress T cells (safely)',
    steps: [
      { id: 's1', label: 'ABO + HLA-A/B/DR matching improves survival', emphasis: 'key' },
      { id: 's2', label: 'Negative crossmatch required (avoid hyperacute)', emphasis: 'key' },
      { id: 's3', label: 'Calcineurin inhibitors block IL-2 (ciclosporin/tacrolimus)', emphasis: 'key' },
      { id: 's4', label: 'Antiproliferatives, mTOR, steroids, biologics' },
      { id: 's5', label: 'Cost: infection + malignancy risk', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Positive pre-transplant crossmatch', mechanism: 'Contraindication — predicts hyperacute rejection', significance: 'key' },
    { sign: 'Tacrolimus/ciclosporin mechanism', mechanism: 'Calcineurin inhibition → ↓IL-2 → ↓T-cell activation', significance: 'key' },
    { sign: 'CMV/PCP infection post-transplant', mechanism: 'Immunosuppression → opportunistic infection', significance: 'key' },
    { sign: 'EBV-driven post-transplant lymphoproliferative disease', mechanism: 'Immunosuppression → virus-related malignancy', significance: 'supportive' },
    { sign: 'HLA-identical sibling donor', mechanism: '25% chance (haplotype inheritance) — best match', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Test that must be negative before transplant', meaning: 'Crossmatch (recipient serum vs donor cells)' },
    { clue: 'HLA loci most important to match', meaning: 'HLA-A, -B, -DR' },
    { clue: 'Drug class blocking IL-2 production via calcineurin', meaning: 'Calcineurin inhibitors (tacrolimus/ciclosporin)' },
    { clue: 'Prophylaxis needed due to T-cell suppression', meaning: 'Anti-CMV / PCP (co-trimoxazole) prophylaxis' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Matching + crossmatch prevent hyperacute rejection; immunosuppression prevents acute rejection but demands infection/malignancy surveillance and prophylaxis. Rejection mechanisms: [[transplant-allorecognition-rejection]]. Co-stimulation blockade links to [[t-cell-activation]] and [[immunotherapy-modulation]].' },
  ],

  mnemonics: [
    { hook: 'Match ABO + HLA-A/B/DR; crossmatch must be NEGATIVE', expansion: ['Positive crossmatch → hyperacute'] },
    { hook: 'Calcineurin inhibitors = "Tac/Cyclo block IL-2"', expansion: ['Signal transduction block'] },
  ],

  traps: [
    {
      questionCategory: 'Meaning of a positive crossmatch',
      wrongInstinct: 'A positive crossmatch means the donor is a good HLA match and transplant should proceed',
      rightAnswer: 'A POSITIVE crossmatch means recipient antibodies react with donor cells → high hyperacute-rejection risk → do NOT transplant',
      why: 'The crossmatch must be negative; a positive result reveals pre-formed donor-reactive antibody, contraindicating the transplant.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Calcineurin inhibitors such as tacrolimus and ciclosporin prevent rejection mainly by:',
      options: [
        { id: 'a', text: 'Blocking IL-2 production and T-cell activation' },
        { id: 'b', text: 'Depleting all B cells' },
        { id: 'c', text: 'Activating complement' },
        { id: 'd', text: 'Blocking the neonatal Fc receptor' },
      ],
      answerId: 'a',
      explanation: 'Calcineurin inhibitors block the calcineurin–NFAT pathway, reducing IL-2 transcription and hence T-cell activation/proliferation — a cornerstone of maintenance immunosuppression.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Before a kidney transplant, a positive complement-dependent cytotoxicity crossmatch indicates:',
      options: [
        { id: 'a', text: 'An ideal HLA match' },
        { id: 'b', text: 'Recipient antibodies against donor cells → high risk of hyperacute rejection' },
        { id: 'c', text: 'That immunosuppression is unnecessary' },
        { id: 'd', text: 'Donor T cells will attack the host' },
      ],
      answerId: 'b',
      explanation: 'A positive crossmatch shows pre-formed recipient anti-donor antibodies that would cause hyperacute rejection — a contraindication to proceeding with that donor.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default transplantMatchingImmunosuppression;
