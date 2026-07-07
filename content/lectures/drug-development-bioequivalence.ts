import type { Lecture } from '../../lib/types';

export const drugDevelopmentBioequivalence: Lecture = {
  id: 'drug-development-bioequivalence',
  title: 'Drug Development, Bioequivalence & Biosimilars',
  system: 'pharmacology',
  source: 'L1 — Introduction & Drug Development',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pharmacology' },
    { kind: 'lecture', label: 'L1 Drug Development' },
    { kind: 'mechanism', label: 'Trial phases; generics vs biosimilars' },
    { kind: 'exam', label: 'Phases I–IV; bioequivalence' },
  ],

  highYield: [
    'A new drug travels from PRECLINICAL testing (animal/in-vitro pharmacology & toxicology) through an IND application into FOUR clinical trial phases: PHASE I (small n, healthy volunteers — SAFETY & pharmacokinetics; single- then multiple-ascending-dose); PHASE II (patients — efficacy & dose-finding); PHASE III (large RCT — confirm efficacy vs standard, detect common ADRs → registration); PHASE IV (POST-marketing surveillance — rare/long-term ADRs).',
    '**An INNOVATOR drug is the first to contain a NEW CHEMICAL ENTITY (NCE) — protected by patent; a GENERIC is a later copy with the SAME active chemical, approved once it proves BIOEQUIVALENCE (not repeating full trials).** BIOEQUIVALENCE = the generic delivers the same active drug at the same rate/extent — tested by comparing AUC and Cmax (usually the 90% CI of the ratio must fall within 80–125%).',
    '**BIOLOGICS (large, complex protein drugs — e.g. monoclonal antibodies, anti-TNF-α) cannot be copied exactly, so their follow-on versions are BIOSIMILARS, "highly similar" but NOT identical — requiring MORE than a simple bioequivalence study (comparative analytical, PK/PD and often clinical/immunogenicity data).** A biosimilar is not a "generic": small molecules can be identical, biologics only similar.',
    '**Why this matters clinically: demonstrating bioequivalence lets a cheaper generic inherit ALL the reference drug\'s approved indications without new efficacy trials (major cost saving); the phased pipeline balances early safety (Phase I) against later efficacy/rare-harm detection (Phase III/IV).** Post-marketing (Phase IV) is where rare but serious ADRs and drug interactions surface.',
    '**The take-home: preclinical → Phase I (safety/PK, healthy) → II (efficacy/dose, patients) → III (large RCT, register) → IV (post-marketing). Generic = same molecule proven BIOEQUIVALENT (AUC/Cmax 80–125%); biosimilar = "similar" biologic needing more data.** The PK parameters used (AUC, Cmax, bioavailability) are defined in [[pharmacokinetics-adme]]; post-marketing detects the ADRs of [[adverse-drug-reactions-allergy]].',
  ],

  mechanism: {
    title: 'Preclinical → Phase I (safety) → II (efficacy) → III (RCT/register) → IV (surveillance); generic=bioequivalent, biosimilar=similar',
    steps: [
      { id: 's1', label: 'Preclinical (animal/in-vitro tox & pharmacology) → IND', emphasis: 'key' },
      { id: 's2', label: 'Phase I: healthy volunteers, SAFETY + PK (SAD then MAD)', emphasis: 'key' },
      { id: 's3', label: 'Phase II: patients, efficacy & dose-finding; Phase III: large RCT → registration', emphasis: 'key' },
      { id: 's4', label: 'Phase IV: post-marketing surveillance (rare/long-term ADRs)', emphasis: 'key' },
      { id: 's5', label: 'Generic = bioequivalent (AUC/Cmax 80–125%); biosimilar = "similar" biologic (more data)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'A first-in-human study in healthy volunteers testing safety/PK', mechanism: 'Phase I trial (single/multiple ascending dose)', significance: 'key' },
    { sign: 'A large randomised controlled trial vs standard therapy before licensing', mechanism: 'Phase III trial', significance: 'key' },
    { sign: 'A rare serious ADR detected years after approval', mechanism: 'Phase IV (post-marketing surveillance)', significance: 'key' },
    { sign: 'A cheaper copy with the identical active ingredient', mechanism: 'Generic drug (approved via bioequivalence)', significance: 'supportive' },
    { sign: 'A "highly similar" monoclonal-antibody copy', mechanism: 'Biosimilar (not a generic — biologic)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The trial phase using healthy volunteers to assess safety and PK', meaning: 'Phase I' },
    { clue: 'The phase that detects rare ADRs after marketing', meaning: 'Phase IV (post-marketing surveillance)' },
    { clue: 'The parameters compared to prove bioequivalence', meaning: 'AUC and Cmax (90% CI within 80–125%)' },
    { clue: 'The follow-on version of a biologic drug', meaning: 'A biosimilar (not a generic)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The development pipeline and the generic/biosimilar distinction govern drug access and cost — bioequivalence lets generics inherit indications cheaply, while biosimilars (biologics) need more evidence. Phase IV surveillance is how rare ADRs and interactions emerge ([[adverse-drug-reactions-allergy]], [[drug-interactions-mechanisms]]). The bioequivalence metrics rest on the PK parameters (AUC, Cmax, bioavailability) of [[pharmacokinetics-adme]].' },
  ],

  mnemonics: [
    { hook: 'Phases: "Safety (I) → Efficacy (II) → Compare/RCT (III) → Surveillance (IV)"', expansion: ['Phase I = healthy volunteers', 'Phase IV = rare ADRs'] },
    { hook: '"Generic = identical (bioequivalent); Biosimilar = similar (biologic)"', expansion: ['AUC/Cmax 80–125%', 'Biologics can\'t be copied exactly'] },
  ],

  traps: [
    {
      questionCategory: 'Generic vs biosimilar',
      wrongInstinct: 'A biosimilar is just the "generic version" of a biologic drug',
      rightAnswer: 'A GENERIC (small molecule) is chemically IDENTICAL to the reference and approved by simple BIOEQUIVALENCE; a BIOSIMILAR is a large, complex BIOLOGIC that can only be made "highly SIMILAR" (not identical), so it requires extensive comparative analytical, PK/PD and often clinical/immunogenicity data — it is not a generic',
      why: 'The molecular complexity of biologics means exact copies are impossible, so biosimilars carry a higher evidentiary bar (and immunogenicity concerns) than generics — a distinction with real prescribing and substitution implications.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A first-in-human trial enrols a small number of healthy volunteers to characterise safety and pharmacokinetics using single then multiple ascending doses. This is:',
      options: [
        { id: 'a', text: 'Phase II' },
        { id: 'b', text: 'Phase I' },
        { id: 'c', text: 'Phase III' },
        { id: 'd', text: 'Phase IV' },
      ],
      answerId: 'b',
      explanation: 'Phase I trials use a small group of (usually healthy) volunteers to establish safety and pharmacokinetics, beginning with single ascending dose (SAD) then multiple ascending dose (MAD) studies. Efficacy/dose-finding is Phase II, confirmatory RCTs Phase III, and post-marketing surveillance Phase IV.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'To gain approval, a generic small-molecule drug must chiefly demonstrate:',
      options: [
        { id: 'a', text: 'A full set of new Phase III efficacy trials' },
        { id: 'b', text: 'Bioequivalence to the reference product (comparable AUC and Cmax)' },
        { id: 'c', text: 'A different mechanism of action' },
        { id: 'd', text: 'Superior efficacy to the innovator' },
      ],
      answerId: 'b',
      explanation: 'A generic contains the same active ingredient and is approved by proving bioequivalence — comparable rate and extent of absorption (AUC and Cmax, typically 90% CI within 80–125%) — which lets it inherit the reference drug\'s indications without repeating efficacy trials.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default drugDevelopmentBioequivalence;
