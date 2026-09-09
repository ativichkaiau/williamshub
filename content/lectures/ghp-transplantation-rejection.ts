import type { Lecture } from '../../lib/types';

export const ghpTransplantationRejection: Lecture = {
  id: 'ghp-transplantation-rejection',
  title: 'Transplantation & Graft Rejection',
  system: 'heme',
  source: 'Ch 35 — Blood Types; Transfusion; Transplantation',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Haematology' },
    { kind: 'lecture', label: 'Ch 35 Blood Types & Transplantation' },
    { kind: 'mechanism', label: 'Allorecognition' },
    { kind: 'treatment', label: 'Immunosuppression' },
  ],

  highYield: [
    '**Graft fate is set by genetic distance, and the vocabulary encodes it.** An **autograft** moves tissue within one person and never rejects. An **isograft** between identical twins is genetically self and is equally safe. An **allograft** between unrelated members of the same species is the clinical norm and the reason immunosuppression exists. A **xenograft** across species faces preformed antibody against foreign carbohydrate and is destroyed almost immediately.',
    '**The barrier is HLA, and the two classes are read by two different T cells.** Class I (**A, B, C**) sits on every nucleated cell and is surveyed by **CD8** cytotoxic T cells; class II (**DR, DQ, DP**) sits on antigen-presenting cells and is surveyed by **CD4** helper T cells. Matching at **DR** buys the most graft survival because CD4 help licenses everything downstream. ABO compatibility is also mandatory, since graft endothelium expresses A and B antigens — the transfusion logic in [[ghp-blood-types-transfusion]] applies directly to the vascular bed.',
    '**Two routes of allorecognition map onto two tempos of rejection.** In the **direct** pathway, recipient T cells see intact donor MHC displayed by donor passenger leucocytes; the precursor frequency is enormous, which is why acute rejection is fast and fierce. In the **indirect** pathway, recipient antigen-presenting cells process donor protein into peptide and present it conventionally; this is slower, does not exhaust as passenger cells die off, and drives **chronic** rejection — expanded in [[transplant-allorecognition-rejection]].',
    '**Timing names the mechanism, and this is the highest-yield line in the topic.** **Minutes to hours** means **preformed antibody** (ABO mismatch, or anti-HLA from prior pregnancy, transfusion or transplant) fixing complement on endothelium — hyperacute rejection, untreatable, prevented only by crossmatching. **Days to months** means **acute** rejection, either T-cell mediated with tubulitis and endarteritis, or antibody-mediated with C4d in peritubular capillaries. **Months to years** means **chronic** rejection: intimal fibrosis, luminal narrowing and parenchymal atrophy.',
    '**Graft-versus-host disease is the mirror image, and it needs three conditions.** The graft must contain **immunocompetent donor T cells**, the host must be **immunocompromised** and unable to reject them, and the host must express antigens foreign to the donor. It follows haematopoietic stem cell transplantation, and can follow non-irradiated cellular blood products given to an immunosuppressed recipient. The classic triad is **skin rash, diarrhoea and cholestatic jaundice**, and irradiating cellular components prevents the transfusion-associated form.',
    '**Immunosuppression is non-specific, so every gain in graft survival is bought with infection and malignancy.** Maintenance is classically a **calcineurin inhibitor** (blocking IL-2 transcription), an **antiproliferative** and a **corticosteroid**. The predictable cost is opportunistic infection — CMV, Pneumocystis, BK virus — and virally driven tumours such as EBV-related post-transplant lymphoproliferative disease and cutaneous squamous carcinoma. The drug detail sits in [[immunosuppressant-drugs]] and the matching strategy in [[transplant-matching-immunosuppression]].',
  ],

  mechanism: {
    title: 'From MHC mismatch to graft loss',
    steps: [
      { id: 's1', label: 'Donor organ carries non-self HLA class I and class II, plus ABO antigens on endothelium', emphasis: 'key' },
      { id: 's2', label: 'Any preformed antibody fixes complement on graft endothelium within minutes, thrombosing the vasculature', emphasis: 'danger' },
      { id: 's3', label: 'Donor passenger antigen-presenting cells directly present intact allo-MHC to recipient T cells', emphasis: 'key' },
      { id: 's4', label: 'CD4 help and IL-2 expand CD8 cytotoxic cells and B cells, producing acute cellular and antibody-mediated rejection', emphasis: 'key' },
      { id: 's5', label: 'Recipient antigen-presenting cells indirectly present processed donor peptide, sustaining low-grade injury' },
      { id: 's6', label: 'Repeated endothelial injury drives intimal proliferation and fibrosis, narrowing graft vessels', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Graft turns mottled and cyanotic within minutes of reperfusion on the operating table', mechanism: 'Preformed antibody fixing complement on endothelium with immediate thrombosis', significance: 'key' },
    { sign: 'Fever, graft tenderness and a rising creatinine at one to three weeks', mechanism: 'T-cell mediated acute rejection with interstitial infiltrate and tubulitis', significance: 'key' },
    { sign: 'Slowly rising creatinine with hypertension and proteinuria over years', mechanism: 'Chronic rejection with fibrous intimal thickening and tubular atrophy', significance: 'key' },
    { sign: 'Rash, watery diarrhoea and cholestatic jaundice after marrow transplantation', mechanism: 'Donor T cells attacking recipient skin, gut and biliary epithelium', significance: 'key' },
    { sign: 'Silent painless ischaemia in a heart transplant recipient', mechanism: 'Denervated graft plus diffuse cardiac allograft vasculopathy rather than focal plaque', significance: 'supportive' },
    { sign: 'Progressive exertional dyspnoea with fixed airflow obstruction after lung transplant', mechanism: 'Bronchiolitis obliterans as the chronic rejection phenotype of the lung', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Positive pre-transplant lymphocytotoxic crossmatch', meaning: 'Preformed donor-specific antibody — hyperacute risk, and a contraindication to proceeding' },
    { clue: 'Biopsy showing mononuclear tubulitis and endarteritis', meaning: 'Acute T-cell mediated rejection, generally steroid responsive' },
    { clue: 'C4d staining in peritubular capillaries with circulating donor-specific antibody', meaning: 'Antibody-mediated acute rejection — needs antibody removal, not just steroids' },
    { clue: 'Interstitial fibrosis, tubular atrophy and fibrous intimal thickening', meaning: 'Chronic rejection, poorly responsive to increasing immunosuppression' },
    { clue: 'High calcineurin inhibitor trough with tremor and a rising creatinine', meaning: 'Drug nephrotoxicity mimicking rejection — the opposite management to rejection' },
    { clue: 'Rising CMV or BK viral load in a recipient with graft dysfunction', meaning: 'Over-immunosuppression, where reducing drugs is the treatment' },
  ],

  treatment: [
    {
      logic: 'Match and screen before transplanting, because hyperacute rejection cannot be rescued',
      detail: 'Once preformed antibody meets graft endothelium the vessels thrombose within minutes and no drug reverses it. Prevention is the entire strategy: **ABO compatibility**, an **antibody screen** for anti-HLA sensitisation from pregnancy, transfusion or previous grafts, and a **crossmatch** before implantation. Matching at **HLA-DR** then buys the most long-term survival.',
    },
    {
      logic: 'Titrate immunosuppression against the infection it buys',
      detail: 'There is no way to suppress the alloresponse selectively, so dosing is a negotiation between rejection and opportunistic infection. Standard maintenance combines a **calcineurin inhibitor**, an **antiproliferative** and a **steroid**, each at a lower dose than it would need alone. Graft dysfunction therefore has two opposite answers — rejection needs more, while drug toxicity or **BK** and **CMV** infection need less — which is why biopsy and drug levels precede any dose change.',
    },
  ],

  mnemonics: [
    { hook: 'Timing names the rejection', expansion: ['Minutes to hours → preformed antibody → hyperacute', 'Days to months → T cells and de novo antibody → acute', 'Months to years → vascular intimal fibrosis → chronic'] },
    { hook: 'Direct is acute, indirect is chronic', expansion: ['Direct: recipient T cells see intact donor MHC on donor passenger cells', 'Indirect: recipient APCs present processed donor peptide', 'Passenger cells die out, so the indirect route is the one that lasts'] },
  ],

  traps: [
    {
      questionCategory: 'A kidney recipient with a rising creatinine at three weeks',
      wrongInstinct: 'Assume rejection and escalate immunosuppression',
      rightAnswer: 'Biopsy and check the drug level first, because calcineurin toxicity and BK nephropathy look identical',
      why: 'Those two need less immunosuppression, so the reflex escalation makes the graft worse',
    },
    {
      questionCategory: 'What causes a graft to fail on the operating table',
      wrongInstinct: 'A severe HLA mismatch triggers hyperacute rejection',
      rightAnswer: 'Hyperacute rejection is antibody-mediated — ABO incompatibility or preformed anti-HLA',
      why: 'Naive T cells responding to a fresh mismatch need days to prime; only preformed antibody can act in minutes',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A transplanted kidney becomes dusky and mottled within minutes of reperfusion and never produces urine. What is the mechanism?',
      options: [
        { id: 'a', text: 'CD8 cytotoxic T cells recognising donor class I MHC' },
        { id: 'b', text: 'Preformed recipient antibody fixing complement on graft endothelium with immediate thrombosis' },
        { id: 'c', text: 'Indirect allorecognition by recipient antigen-presenting cells' },
        { id: 'd', text: 'Donor T cells attacking recipient tissue' },
      ],
      answerId: 'b',
      explanation: 'Only an antibody that already exists can act within minutes. Anti-A, anti-B or anti-HLA antibodies from previous pregnancy, transfusion or grafting bind endothelium, activate complement and thrombose the microvasculature. A T-cell response to a new mismatch requires days of priming, and no treatment salvages a hyperacute graft — the crossmatch exists to prevent it.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Why does the indirect pathway of allorecognition dominate chronic rather than acute rejection?',
      options: [
        { id: 'a', text: 'It generates a much larger precursor T cell frequency than the direct pathway' },
        { id: 'b', text: 'It depends on donor passenger leucocytes, which persist indefinitely' },
        { id: 'c', text: 'It uses recipient antigen-presenting cells, so it continues long after donor passenger cells have died out' },
        { id: 'd', text: 'It is entirely antibody-mediated and antibodies take years to form' },
      ],
      answerId: 'c',
      explanation: 'Direct allorecognition needs surviving donor passenger antigen-presenting cells to display intact allo-MHC, and those are consumed early — giving a large, fast, self-limiting acute response. The indirect route runs on the recipient own antigen-presenting cells processing shed donor protein, so it persists for the life of the graft and drives the smouldering vascular injury of chronic rejection.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'Three weeks after allogeneic stem cell transplantation a patient develops a maculopapular rash, profuse diarrhoea and a cholestatic jaundice. What condition does this triad define, and what prevents its transfusion-associated form?',
      options: [
        { id: 'a', text: 'Acute rejection; prevented by HLA-DR matching' },
        { id: 'b', text: 'Graft-versus-host disease; prevented by irradiating cellular blood products' },
        { id: 'c', text: 'Hyperacute rejection; prevented by crossmatching' },
        { id: 'd', text: 'Delayed haemolytic transfusion reaction; prevented by leucodepletion' },
      ],
      answerId: 'b',
      explanation: 'Skin, gut and liver is the classic graft-versus-host triad: immunocompetent donor T cells attacking an immunocompromised host that cannot reject them. The same three conditions are met when non-irradiated cellular blood products are given to an immunosuppressed recipient, so gamma irradiation of those components, which disables donor lymphocytes, is the preventive step. Leucodepletion reduces febrile reactions but does not reliably prevent this.',
      tests: 'disease',
    },
  ],
};

export default ghpTransplantationRejection;
