import type { Lecture } from '../../lib/types';

export const immunosuppressantDrugs: Lecture = {
  id: 'immunosuppressant-drugs',
  title: 'Immunosuppressant Drugs',
  system: 'pharmacology',
  source: 'L13 — Immunomodulating Agents',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pharmacology' },
    { kind: 'lecture', label: 'L13 Immunosuppressants' },
    { kind: 'mechanism', label: 'Steroids, calcineurin, antiproliferatives, biologics' },
    { kind: 'exam', label: 'Transplant regimens; infection risk' },
  ],

  highYield: [
    'Immunosuppressants prevent transplant rejection and treat autoimmune disease by dampening the immune response — at the cost of INFECTION and MALIGNANCY risk. GLUCOCORTICOIDS (prednisolone) are the broadest (inhibit NF-κB → ↓cytokines; Cushingoid/osteoporosis/hyperglycaemia toxicities). Transplant regimens typically combine a calcineurin inhibitor + antiproliferative + steroid.',
    'CALCINEURIN INHIBITORS are the transplant backbone: CICLOSPORIN (binds cyclophilin) and TACROLIMUS (binds FKBP) → inhibit CALCINEURIN → ↓IL-2 → ↓T-cell activation. Toxicities: NEPHROTOXICITY (dose-limiting), hypertension, neurotoxicity, diabetes (tacrolimus), gum hypertrophy/hirsutism (ciclosporin); NARROW therapeutic index (level monitoring) and many CYP3A4 interactions. mTOR inhibitors (SIROLIMUS/everolimus) block T-cell proliferation.',
    'ANTIPROLIFERATIVE/cytotoxic agents: AZATHIOPRINE (→6-mercaptopurine; TPMT genotype affects marrow toxicity — [[pharmacogenomics]]), MYCOPHENOLATE (inhibits inosine monophosphate dehydrogenase → blocks lymphocyte purine synthesis), methotrexate, cyclophosphamide. BIOLOGICS: anti-TNF-α (infliximab/adalimumab/etanercept — reactivate latent TB → SCREEN first), anti-CD20 (rituximab), anti-IL agents, and lymphocyte-depleting antibodies for induction/rejection.',
    'Overarching principle: all cause IMMUNOSUPPRESSION → opportunistic/latent infections (TB, hepatitis reactivation, PJP, CMV — often needing prophylaxis), and increased malignancy (skin cancer, lymphoma); LIVE vaccines are contraindicated. Balancing efficacy against these risks (and monitoring drug levels for calcineurin inhibitors) defines safe use.',
    '**The take-home: glucocorticoids (broad), CALCINEURIN inhibitors (ciclosporin/tacrolimus → ↓IL-2, nephrotoxic, level-monitored, CYP-interacting), antiproliferatives (azathioprine/TPMT, mycophenolate), biologics (anti-TNF → screen TB); main risks = INFECTION + malignancy; no live vaccines.** The stimulating counterparts are in [[immunostimulants-biologics]]; the overview is [[immunomodulating-agents]]; TPMT/pharmacogenomics in [[pharmacogenomics]].',
  ],

  mechanism: {
    title: 'Steroids (broad) + calcineurin inhibitors (↓IL-2, nephrotoxic) + antiproliferatives (azathioprine/mycophenolate) + biologics (anti-TNF); infection risk',
    steps: [
      { id: 's1', label: 'Glucocorticoids inhibit NF-κB → broad immunosuppression (Cushingoid toxicity)', emphasis: 'key' },
      { id: 's2', label: 'Calcineurin inhibitors (ciclosporin/cyclophilin, tacrolimus/FKBP) → ↓IL-2 → ↓T cells', emphasis: 'key' },
      { id: 's3', label: 'Calcineurin inhibitor toxicity: nephrotoxic, HTN, neuro, level-monitored, CYP3A4 interactions', emphasis: 'danger' },
      { id: 's4', label: 'Antiproliferatives: azathioprine (TPMT), mycophenolate (purine synthesis); mTOR inhibitors', emphasis: 'key' },
      { id: 's5', label: 'Biologics (anti-TNF → screen TB); risks = infection + malignancy; no live vaccines', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Nephrotoxicity, hypertension and tremor in a transplant recipient', mechanism: 'Calcineurin inhibitor (ciclosporin/tacrolimus) toxicity', significance: 'key' },
    { sign: 'Severe azathioprine myelosuppression', mechanism: 'Low TPMT activity (pharmacogenomic)', significance: 'key' },
    { sign: 'Latent TB reactivation after a biologic', mechanism: 'Anti-TNF-α therapy (screen first)', significance: 'key' },
    { sign: 'Opportunistic infection (PJP/CMV) in an immunosuppressed patient', mechanism: 'Immunosuppression (prophylaxis often needed)', significance: 'key' },
    { sign: 'Gum hypertrophy and hirsutism on a transplant drug', mechanism: 'Ciclosporin', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The transplant backbone drug class and its mechanism', meaning: 'Calcineurin inhibitors → reduced IL-2/T-cell activation' },
    { clue: 'The dose-limiting toxicity of calcineurin inhibitors', meaning: 'Nephrotoxicity' },
    { clue: 'The test before azathioprine', meaning: 'TPMT (and NUDT15) activity/genotype' },
    { clue: 'The infection to screen for before anti-TNF therapy', meaning: 'Latent tuberculosis (± hepatitis B)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Immunosuppression regimens (calcineurin inhibitor + antiproliferative + steroid) prevent rejection and treat autoimmunity, but their nephrotoxicity, narrow index (level monitoring), CYP interactions ([[drug-interactions-mechanisms]]) and — above all — infection/malignancy risk govern safe use (TB screening before anti-TNF, PJP/CMV prophylaxis, no live vaccines). Pharmacogenomics (TPMT→azathioprine) prevents marrow toxicity ([[pharmacogenomics]]). The immunostimulant counterparts are in [[immunostimulants-biologics]].' },
  ],

  mnemonics: [
    { hook: '"Calcineurin inhibitors → ↓IL-2 (Ciclosporin/cyclophilin, Tacrolimus/FKBP); nephrotoxic + monitored"', expansion: ['Azathioprine → TPMT', 'Mycophenolate → purine synthesis'] },
    { hook: '"Anti-TNF → screen TB; immunosuppression → infection/malignancy, no live vaccines"', expansion: ['PJP/CMV prophylaxis', 'CYP3A4 interactions'] },
  ],

  traps: [
    {
      questionCategory: 'Calcineurin inhibitor monitoring',
      wrongInstinct: 'Ciclosporin and tacrolimus can be dosed to a fixed regimen without blood monitoring',
      rightAnswer: 'Calcineurin inhibitors have a NARROW therapeutic index (nephrotoxic/neurotoxic above range, rejection below) and numerous CYP3A4 interactions, so they REQUIRE therapeutic drug-level MONITORING and careful attention to interacting drugs (azoles, macrolides, grapefruit raise levels; rifampin lowers them) — fixed dosing risks toxicity or graft loss',
      why: 'The combination of a narrow index and heavy CYP3A4 interaction means level monitoring is mandatory to keep patients in the therapeutic window and avoid nephrotoxicity or rejection.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The dose-limiting toxicity of the calcineurin inhibitors ciclosporin and tacrolimus is:',
      options: [
        { id: 'a', text: 'Pulmonary fibrosis' },
        { id: 'b', text: 'Nephrotoxicity' },
        { id: 'c', text: 'Cardiotoxicity' },
        { id: 'd', text: 'Optic neuritis' },
      ],
      answerId: 'b',
      explanation: 'Calcineurin inhibitors are dose-limited by nephrotoxicity (also causing hypertension, neurotoxicity and, for tacrolimus, diabetes). They have a narrow therapeutic index requiring level monitoring and many CYP3A4 interactions, and reduce IL-2 to suppress T cells.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The greatest general risk shared by all immunosuppressant drugs is:',
      options: [
        { id: 'a', text: 'Increased susceptibility to infection (and malignancy)' },
        { id: 'b', text: 'Hyperkalaemia' },
        { id: 'c', text: 'QT prolongation' },
        { id: 'd', text: 'Tendon rupture' },
      ],
      answerId: 'a',
      explanation: 'By dampening immune function, all immunosuppressants increase the risk of infection (including opportunistic and reactivated latent infections such as TB) and malignancy; live vaccines are contraindicated. Managing these risks (screening, prophylaxis) is central to their use.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default immunosuppressantDrugs;
