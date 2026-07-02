import type { Lecture } from '../../lib/types';

export const severeCutaneousDrugReactions: Lecture = {
  id: 'severe-cutaneous-drug-reactions',
  title: 'Severe Cutaneous Adverse Reactions (SCARs)',
  system: 'derm',
  source: 'L12 — Cutaneous Drug Reactions',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L12 SCARs' },
    { kind: 'mechanism', label: 'SJS/TEN, DRESS, AGEP' },
    { kind: 'exam', label: 'Red flags; culprit drugs; HLA' },
  ],

  highYield: [
    '**SEVERE CUTANEOUS ADVERSE REACTIONS (SCARs) are delayed, T-cell-mediated drug reactions with significant mortality — recognising them and STOPPING the drug is life-saving. STEVENS-JOHNSON SYNDROME / TOXIC EPIDERMAL NECROLYSIS (SJS/TEN) is a spectrum of keratinocyte apoptosis → fever, painful skin, MUCOSAL erosions (eyes/mouth/genitals) and epidermal DETACHMENT with a positive Nikolsky sign (SJS <10% BSA, SJS/TEN overlap 10–30%, TEN >30%).**',
    '**Culprits of SJS/TEN: ALLOPURINOL, anticonvulsants (carbamazepine, lamotrigine, phenytoin), SULFONAMIDES, NSAIDs, nevirapine — many HLA-linked (HLA-B*15:02→carbamazepine; HLA-B*58:01→allopurinol). Management: STOP the drug, "burns-unit" supportive care (fluids, wound/eye care, temperature/infection control); SCORTEN scores severity. Ocular involvement needs urgent ophthalmology (scarring/blindness).**',
    '**DRESS (drug reaction with eosinophilia and systemic symptoms) is a DELAYED reaction (2–8 weeks): widespread rash + FEVER + FACIAL OEDEMA + LYMPHADENOPATHY + EOSINOPHILIA + internal ORGAN involvement (hepatitis, nephritis, myocarditis; HHV-6 reactivation). AGEP (acute generalised exanthematous pustulosis) = rapid onset of numerous sterile pustules (often antibiotics/CCBs), usually self-limited on stopping the drug.**',
    '**RED FLAGS that a drug rash is a SCAR (not a benign morbilliform eruption): mucosal involvement, skin PAIN/tenderness, blistering/detachment/positive Nikolsky, FACIAL OEDEMA, FEVER, lymphadenopathy, EOSINOPHILIA and deranged LFTs. Any of these → stop the drug and escalate urgently; document the culprit for lifelong avoidance and consider HLA testing in at-risk groups.**',
    '**The take-home: SCARs = delayed T-cell drug reactions — SJS/TEN (mucosa + detachment + Nikolsky+; allopurinol/anticonvulsants/sulfa; HLA-linked), DRESS (delayed, eosinophilia + organ involvement), AGEP (sterile pustules). Recognise RED FLAGS (mucosa, pain, fever, eosinophilia) → STOP the drug, supportive/burns care; screen HLA to prevent.** The overview of drug eruptions is [[cutaneous-drug-reactions]]; the pharmacology/allergy framework is BCP ([[drug-hypersensitivity-scars]], [[pharmacogenomics]]).',
  ],

  mechanism: {
    title: 'SCARs (delayed T-cell): SJS/TEN (mucosa+detachment, allopurinol/anticonvulsant/sulfa, HLA), DRESS (eosinophilia+organs), AGEP (pustules); red flags → stop drug',
    steps: [
      { id: 's1', label: 'SJS/TEN: fever + mucosal erosions + epidermal detachment (Nikolsky+); SJS<10%, TEN>30% BSA', emphasis: 'danger' },
      { id: 's2', label: 'Culprits: allopurinol, anticonvulsants, sulfonamides, NSAIDs (HLA-B*15:02/B*58:01)', emphasis: 'key' },
      { id: 's3', label: 'DRESS: delayed 2–8 wks; rash + fever + facial oedema + eosinophilia + organ involvement', emphasis: 'danger' },
      { id: 's4', label: 'AGEP: rapid sterile pustules (antibiotics/CCBs); self-limited on stopping', emphasis: 'key' },
      { id: 's5', label: 'Red flags (mucosa, pain, blistering, fever, eosinophilia, ↑LFTs) → STOP drug + supportive/burns care', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Painful skin, mucosal erosions and epidermal detachment', mechanism: 'SJS/TEN — stop the drug, burns-unit care', significance: 'key' },
    { sign: 'Mucocutaneous blistering weeks after allopurinol/carbamazepine', mechanism: 'SJS/TEN (HLA-linked culprits)', significance: 'key' },
    { sign: 'Rash + fever + facial oedema + eosinophilia + hepatitis at 3–6 weeks', mechanism: 'DRESS syndrome', significance: 'key' },
    { sign: 'Rapid onset of numerous sterile pustules after an antibiotic', mechanism: 'AGEP', significance: 'key' },
    { sign: 'Eye involvement in SJS/TEN', mechanism: 'Ocular scarring risk — urgent ophthalmology', significance: 'key' },
  ],

  investigations: [
    { clue: 'The SCAR with mucosal erosions and epidermal detachment', meaning: 'Stevens-Johnson syndrome / TEN' },
    { clue: 'The SCAR with eosinophilia and internal organ involvement', meaning: 'DRESS' },
    { clue: 'The SCAR of rapid sterile pustules', meaning: 'AGEP' },
    { clue: 'The immediate management of any SCAR', meaning: 'Stop the culprit drug and give supportive care' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'SCARs are life-threatening, so the core skill is recognising red flags (mucosal involvement, skin pain/detachment, facial oedema, fever, eosinophilia, deranged LFTs) and immediately stopping the drug with supportive/burns-unit care (fluids, wound/eye care, infection control). Ocular SJS/TEN needs urgent ophthalmology. HLA screening prevents some SCARs ([[pharmacogenomics]]), and the culprit must be documented for lifelong avoidance. The broader drug-eruption picture is [[cutaneous-drug-reactions]]; the allergy framework is BCP ([[drug-hypersensitivity-scars]]).' },
  ],

  mnemonics: [
    { hook: 'SCAR red flags: "mucosa, skin pain/detachment, facial oedema, fever, eosinophilia, ↑LFTs → STOP drug"', expansion: ['SJS<10%, TEN>30% BSA', 'DRESS = delayed + eosinophilia'] },
    { hook: '"Allopurinol/Anticonvulsants/sulfa → SJS/TEN (HLA-B*58:01/B*15:02)"', expansion: ['Ocular SJS → ophthalmology', 'AGEP = sterile pustules'] },
  ],

  traps: [
    {
      questionCategory: 'Benign drug rash vs early SCAR',
      wrongInstinct: 'A drug rash can be watched while the drug is continued, since most are harmless',
      rightAnswer: 'Although most drug rashes are benign morbilliform eruptions, you MUST screen for RED FLAGS of a SCAR — mucosal erosions, skin PAIN/blistering/detachment (Nikolsky+), facial oedema, fever, lymphadenopathy, eosinophilia or deranged LFTs — because SJS/TEN and DRESS are life-threatening and require IMMEDIATE drug cessation; continuing the drug in an evolving SCAR can be fatal',
      why: 'Early SJS/TEN or DRESS can resemble an ordinary rash, so the presence of any red flag (not the rash alone) determines urgency; continuing the culprit in a developing SCAR risks death.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Fever, painful skin, mucosal erosions and epidermal detachment with a positive Nikolsky sign after starting allopurinol indicates:',
      options: [
        { id: 'a', text: 'A benign morbilliform eruption' },
        { id: 'b', text: 'Stevens-Johnson syndrome / toxic epidermal necrolysis' },
        { id: 'c', text: 'Urticaria' },
        { id: 'd', text: 'AGEP' },
      ],
      answerId: 'b',
      explanation: 'Painful skin with mucosal erosions and epidermal detachment (Nikolsky positive) is SJS/TEN — a severe cutaneous adverse reaction (allopurinol is a classic culprit, HLA-B*58:01-linked). Management is immediate drug cessation and burns-unit supportive care, with urgent ophthalmology for eye involvement.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'DRESS syndrome is distinguished from a simple drug rash by:',
      options: [
        { id: 'a', text: 'Appearing within minutes of the drug' },
        { id: 'b', text: 'A delayed (2–8 week) onset with fever, facial oedema, eosinophilia and internal organ involvement' },
        { id: 'c', text: 'Being confined to the palms' },
        { id: 'd', text: 'Never involving the liver' },
      ],
      answerId: 'b',
      explanation: 'DRESS is a delayed (2–8 week) severe reaction with rash, fever, facial oedema, lymphadenopathy, eosinophilia and internal organ involvement (commonly hepatitis), classically to anticonvulsants, allopurinol or sulfonamides — requiring prompt drug withdrawal and organ monitoring.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default severeCutaneousDrugReactions;
