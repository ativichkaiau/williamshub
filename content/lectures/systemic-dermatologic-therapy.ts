import type { Lecture } from '../../lib/types';

export const systemicDermatologicTherapy: Lecture = {
  id: 'systemic-dermatologic-therapy',
  title: 'Phototherapy & Systemic Dermatologic Therapy',
  system: 'derm',
  source: 'L19 — Dermatologic Therapy',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L19 Systemic Therapy' },
    { kind: 'mechanism', label: 'Phototherapy, systemics, biologics' },
    { kind: 'exam', label: 'Methotrexate; isotretinoin; dupilumab' },
  ],

  highYield: [
    'When topical therapy is insufficient for extensive/severe skin disease, treatment escalates to PHOTOTHERAPY and SYSTEMIC agents. PHOTOTHERAPY: NARROWBAND UVB (psoriasis, eczema, vitiligo) and PUVA (psoralen + UVA — more potent but higher long-term skin-cancer risk). It is effective and steroid-sparing but requires repeated hospital visits.',
    'SYSTEMIC immunosuppressants/immunomodulators: METHOTREXATE (psoriasis, severe eczema — folate antagonist; hepatotoxic/marrow-toxic, teratogen, give folic acid, monitor FBC/LFTs); CICLOSPORIN (rapid control of severe psoriasis/eczema — nephrotoxic, hypertension, short-term use); ACITRETIN (oral retinoid for psoriasis — teratogen, lipids); mycophenolate/azathioprine for blistering/CTD.',
    'ORAL RETINOIDS: ISOTRETINOIN (severe acne — potent TERATOGEN, pregnancy-prevention programme, monitor lipids/LFTs, mood) and acitretin (psoriasis). BIOLOGICS have transformed severe disease: anti-TNF, anti-IL-17, anti-IL-23 (psoriasis/psoriatic arthritis) and DUPILUMAB (anti-IL-4/13, atopic dermatitis); JAK inhibitors are newer oral options — all require infection screening (e.g. TB before anti-TNF).',
    'Choosing among these balances efficacy against toxicity and monitoring: teratogenicity (methotrexate, retinoids), organ toxicity (methotrexate liver, ciclosporin kidney), and infection/malignancy risk (biologics/immunosuppressants — screen TB/hepatitis, avoid live vaccines). Systemic corticosteroids are used sparingly (rebound, side-effects) except in specific settings.',
    '**The take-home: escalate severe skin disease to PHOTOTHERAPY (NB-UVB/PUVA) then SYSTEMICS — methotrexate (folate antagonist, hepatotoxic/teratogen, give folate), ciclosporin (rapid, nephrotoxic), retinoids (isotretinoin/acitretin — TERATOGENS), and BIOLOGICS (anti-TNF/IL-17/IL-23, dupilumab; screen TB, no live vaccines). Match drug to disease and monitor toxicity.** Topical therapy is [[topical-dermatologic-therapy]]; the immunosuppressant pharmacology is BCP ([[immunosuppressant-drugs]]); overview [[dermatologic-therapy]].',
  ],

  mechanism: {
    title: 'Escalate: phototherapy (NB-UVB/PUVA) → systemics (methotrexate/ciclosporin/retinoids) → biologics (anti-TNF/IL-17/23, dupilumab); balance efficacy vs toxicity/monitoring',
    steps: [
      { id: 's1', label: 'Phototherapy: narrowband UVB (psoriasis/eczema/vitiligo), PUVA (more potent, ↑cancer risk)', emphasis: 'key' },
      { id: 's2', label: 'Methotrexate (folate antagonist; hepatotoxic/marrow, teratogen, give folate, monitor)', emphasis: 'key' },
      { id: 's3', label: 'Ciclosporin (rapid, nephrotoxic/HTN, short-term); retinoids (isotretinoin/acitretin — TERATOGENS)', emphasis: 'danger' },
      { id: 's4', label: 'Biologics: anti-TNF/IL-17/IL-23 (psoriasis), dupilumab (eczema); screen TB, no live vaccines', emphasis: 'key' },
      { id: 's5', label: 'Balance efficacy vs toxicity/monitoring; systemic steroids sparingly (rebound)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Narrowband UVB for extensive psoriasis/vitiligo', mechanism: 'Phototherapy (steroid-sparing)', significance: 'key' },
    { sign: 'Hepatotoxicity/myelosuppression on a folate-antagonist for psoriasis', mechanism: 'Methotrexate (give folic acid, monitor FBC/LFTs)', significance: 'key' },
    { sign: 'Rapid control of severe eczema/psoriasis with a nephrotoxic drug', mechanism: 'Ciclosporin (short-term)', significance: 'key' },
    { sign: 'Refractory atopic dermatitis responding to an anti-IL-4/13 biologic', mechanism: 'Dupilumab', significance: 'supportive' },
    { sign: 'Latent TB reactivation after an anti-TNF biologic', mechanism: 'Screen TB before biologics', significance: 'key' },
  ],

  investigations: [
    { clue: 'The phototherapy first-line for psoriasis', meaning: 'Narrowband UVB' },
    { clue: 'The systemic antimetabolite for psoriasis (give folate)', meaning: 'Methotrexate' },
    { clue: 'The biologic for severe atopic dermatitis', meaning: 'Dupilumab (anti-IL-4/13)' },
    { clue: 'The screen required before anti-TNF biologics', meaning: 'Latent tuberculosis (± hepatitis)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Severe skin disease is managed by stepping up from topicals to phototherapy and systemic agents, each chosen by efficacy and its toxicity/monitoring: methotrexate (hepatotoxic/teratogen, folate), ciclosporin (nephrotoxic, short-term), retinoids (teratogens), and biologics (anti-TNF/IL-17/23, dupilumab — screen TB, no live vaccines). This underlies psoriasis, atopic dermatitis and blistering-disease care. Topical therapy is [[topical-dermatologic-therapy]]; the immunosuppressant/immunomodulator pharmacology is BCP ([[immunosuppressant-drugs]], [[immunostimulants-biologics]]).' },
  ],

  mnemonics: [
    { hook: 'Escalate: "topical → phototherapy → methotrexate/ciclosporin/retinoid → biologic"', expansion: ['Methotrexate: folate + monitor', 'Ciclosporin: short-term, nephrotoxic'] },
    { hook: '"Retinoids + methotrexate = TERATOGENS; biologics → screen TB, no live vaccines"', expansion: ['Dupilumab = eczema', 'Anti-IL-17/23 = psoriasis'] },
  ],

  traps: [
    {
      questionCategory: 'Safety before systemic dermatology drugs',
      wrongInstinct: 'Systemic dermatology drugs can be started for severe skin disease without special screening',
      rightAnswer: 'Each systemic agent carries mandatory safety steps: TERATOGENIC drugs (methotrexate, isotretinoin, acitretin) require pregnancy prevention/testing; METHOTREXATE needs folate + FBC/LFT monitoring; CICLOSPORIN needs renal/BP monitoring; and BIOLOGICS require infection SCREENING (latent TB, hepatitis) and avoidance of LIVE VACCINES — starting them without these precautions risks serious harm',
      why: 'These drugs are effective but hazardous, so the pre-treatment screening and monitoring (pregnancy, organ function, infection) are integral to safe use — omitting them causes preventable harm.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Before starting an anti-TNF biologic for severe psoriasis, it is essential to screen for:',
      options: [
        { id: 'a', text: 'Latent tuberculosis' },
        { id: 'b', text: 'Colour blindness' },
        { id: 'c', text: 'Lactose intolerance' },
        { id: 'd', text: 'Iron deficiency' },
      ],
      answerId: 'a',
      explanation: 'Anti-TNF biologics can reactivate latent tuberculosis (and hepatitis B), so screening and treating latent infection before starting is mandatory; live vaccines are also contraindicated during biologic/immunosuppressive therapy.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A patient on methotrexate for psoriasis should also receive which supplement, with monitoring of which parameters?',
      options: [
        { id: 'a', text: 'Vitamin D; blood pressure' },
        { id: 'b', text: 'Folic acid; full blood count and liver function' },
        { id: 'c', text: 'Iron; renal function only' },
        { id: 'd', text: 'Calcium; thyroid function' },
      ],
      answerId: 'b',
      explanation: 'Methotrexate is a folate antagonist, so folic acid is co-prescribed to reduce toxicity, and full blood count and liver function are monitored (risk of myelosuppression and hepatotoxicity). It is also teratogenic, requiring contraception.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default systemicDermatologicTherapy;
