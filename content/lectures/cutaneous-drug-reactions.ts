import type { Lecture } from '../../lib/types';

export const cutaneousDrugReactions: Lecture = {
  id: 'cutaneous-drug-reactions',
  title: 'Cutaneous Drug Reactions',
  system: 'derm',
  source: 'L12 — Cutaneous Drug Reactions',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L12 Cutaneous Drug Reactions' },
    { kind: 'mechanism', label: 'Exanthem to SCARs' },
    { kind: 'exam', label: 'SJS/TEN; DRESS; red flags' },
  ],

  highYield: [
    '**Cutaneous drug reactions range from trivial to fatal. The COMMONEST is the MORBILLIFORM (maculopapular/exanthematous) eruption — symmetric pink macules/papules appearing ~4–14 days after starting a drug (Type IV), usually benign and self-limiting on stopping the drug. URTICARIA/angioedema (Type I, minutes–hours) can herald anaphylaxis. FIXED DRUG ERUPTION = a round dusky/violaceous patch that RECURS at the SAME site each time the drug is taken.**',
    '**SEVERE CUTANEOUS ADVERSE REACTIONS (SCARs) must be recognised early. STEVENS-JOHNSON SYNDROME / TOXIC EPIDERMAL NECROLYSIS: fever + painful skin + MUCOSAL EROSIONS (eyes/mouth/genitals) + blistering with epidermal DETACHMENT and a POSITIVE NIKOLSKY sign (SJS <10% BSA, TEN >30%). Culprits: allopurinol, anticonvulsants (carbamazepine, lamotrigine), sulfonamides, NSAIDs, nevirapine — HLA-linked. Management: STOP the drug immediately, supportive/"burns-unit" care.**',
    '**DRESS (drug reaction with eosinophilia and systemic symptoms) appears LATER (2–8 weeks): widespread rash + FEVER + facial oedema + LYMPHADENOPATHY + EOSINOPHILIA + internal ORGAN involvement (hepatitis, nephritis) — culprits include anticonvulsants, allopurinol, sulfonamides. AGEP = acute generalised exanthematous pustulosis (rapid sterile pustules, often antibiotics). These have significant mortality.**',
    '**RED FLAGS that a drug rash is SEVERE (SCAR): mucosal involvement, skin PAIN/tenderness, blistering/skin detachment/positive Nikolsky, facial oedema, fever and systemic upset, lymphadenopathy, and abnormal bloods (eosinophilia, deranged LFTs). Any of these mandate immediate drug cessation and urgent assessment. A simple morbilliform rash without red flags is usually benign.**',
    '**The take-home: morbilliform (commonest, benign) and urticaria (may → anaphylaxis) vs SCARs — SJS/TEN (mucosae + detachment + Nikolsky+, allopurinol/anticonvulsants/sulfa) and DRESS (delayed, eosinophilia + organ involvement). Recognise red flags (mucosa, pain, blistering, fever, eosinophilia) and STOP the drug.** HLA screening prevents some SCARs (BCP — [[pharmacogenomics]]); the ADR/allergy framework is [[adverse-drug-reactions-allergy]]; blistering differentials in [[vesiculobullous-diseases]].',
  ],

  mechanism: {
    title: 'Morbilliform (benign) / urticaria (→anaphylaxis) / fixed drug (same site) vs SCARs: SJS-TEN (detachment) & DRESS (eosinophilia+organs)',
    steps: [
      { id: 's1', label: 'Morbilliform maculopapular = commonest, ~4–14 days, usually benign (Type IV)', emphasis: 'key' },
      { id: 's2', label: 'Urticaria/angioedema (Type I) may herald anaphylaxis; fixed drug eruption recurs at same site', emphasis: 'key' },
      { id: 's3', label: 'SJS/TEN: fever + mucosal erosions + detachment + Nikolsky+ (allopurinol/anticonvulsants/sulfa)', emphasis: 'danger' },
      { id: 's4', label: 'DRESS: delayed (2–8 wks) rash + fever + eosinophilia + organ involvement', emphasis: 'danger' },
      { id: 's5', label: 'Red flags (mucosa, pain, blistering, fever, eosinophilia) → STOP drug urgently', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Symmetric pink maculopapular rash ~1 week after a new drug, patient well', mechanism: 'Morbilliform (benign) drug eruption', significance: 'key' },
    { sign: 'A dusky round patch recurring at the same site with each drug exposure', mechanism: 'Fixed drug eruption', significance: 'key' },
    { sign: 'Painful skin, mucosal erosions and epidermal detachment', mechanism: 'SJS/TEN — stop the drug, urgent care', significance: 'key' },
    { sign: 'Rash + fever + facial oedema + eosinophilia + hepatitis at 3–6 weeks', mechanism: 'DRESS syndrome', significance: 'key' },
    { sign: 'Rapid onset of numerous sterile pustules after an antibiotic', mechanism: 'AGEP', significance: 'key' },
  ],

  investigations: [
    { clue: 'The commonest and usually benign drug eruption', meaning: 'Morbilliform (maculopapular) rash' },
    { clue: 'The reaction that recurs at the same site each exposure', meaning: 'Fixed drug eruption' },
    { clue: 'The SCAR with mucosal erosions and epidermal detachment', meaning: 'Stevens-Johnson syndrome / TEN' },
    { clue: 'The SCAR with eosinophilia and internal organ involvement', meaning: 'DRESS' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The core skill is separating a benign morbilliform rash from a life-threatening SCAR: red flags (mucosal involvement, skin pain, blistering/Nikolsky, facial oedema, fever, eosinophilia, organ derangement) mandate immediate drug cessation and urgent care (SJS/TEN in a burns unit). HLA screening can prevent some SCARs ([[pharmacogenomics]]), and the reaction fits the broader ADR/allergy framework ([[adverse-drug-reactions-allergy]]); the blistering differential overlaps [[vesiculobullous-diseases]].' },
  ],

  mnemonics: [
    { hook: 'Red flags "SCAR": Skin pain/detachment, Constitutional (fever), Affected mucosa, Raised eosinophils/LFTs', expansion: ['SJS/TEN = mucosa + Nikolsky+', 'DRESS = delayed + eosinophilia'] },
    { hook: '"Fixed drug = same spot every time"; morbilliform = common + benign', expansion: ['Allopurinol/anticonvulsants/sulfa → SCARs', 'Stop the culprit drug'] },
  ],

  traps: [
    {
      questionCategory: 'Benign rash vs early SCAR',
      wrongInstinct: 'Any drug rash can be watched while continuing the drug, since most are harmless',
      rightAnswer: 'While most drug rashes are benign morbilliform eruptions, you MUST screen for RED FLAGS of a SCAR — mucosal erosions, skin PAIN/blistering/detachment (Nikolsky+), facial oedema, fever, lymphadenopathy, eosinophilia or deranged LFTs — because SJS/TEN and DRESS are life-threatening and require IMMEDIATE drug cessation; missing these early is fatal',
      why: 'Early SJS/TEN or DRESS can start looking like an ordinary rash, so the presence of any red flag (not the rash alone) determines urgency — continuing the drug in an evolving SCAR can be lethal.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which feature most strongly suggests a severe (life-threatening) cutaneous drug reaction rather than a benign eruption?',
      options: [
        { id: 'a', text: 'A symmetric pink maculopapular rash in a well patient' },
        { id: 'b', text: 'Mucosal erosions with skin pain and epidermal detachment' },
        { id: 'c', text: 'Mild itching' },
        { id: 'd', text: 'A rash appearing exactly 7 days after the drug' },
      ],
      answerId: 'b',
      explanation: 'Mucosal involvement, skin pain and epidermal detachment (positive Nikolsky) indicate Stevens-Johnson syndrome/TEN — a severe cutaneous adverse reaction requiring immediate drug cessation and urgent supportive care. A well patient with an isolated maculopapular rash usually has a benign morbilliform eruption.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A widespread rash with fever, facial oedema, lymphadenopathy, eosinophilia and hepatitis appearing 4 weeks after starting an anticonvulsant is:',
      options: [
        { id: 'a', text: 'A simple morbilliform eruption' },
        { id: 'b', text: 'DRESS (drug reaction with eosinophilia and systemic symptoms)' },
        { id: 'c', text: 'Urticaria' },
        { id: 'd', text: 'Fixed drug eruption' },
      ],
      answerId: 'b',
      explanation: 'DRESS is a delayed (2–8 week) severe reaction with rash, fever, facial oedema, lymphadenopathy, eosinophilia and internal organ involvement (commonly hepatitis), classically to anticonvulsants, allopurinol or sulfonamides. It requires prompt drug withdrawal and monitoring for organ damage.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default cutaneousDrugReactions;
