import type { Lecture } from '../../lib/types';

export const pharmacokineticsAdme: Lecture = {
  id: 'pharmacokinetics-adme',
  title: 'Pharmacokinetics: ADME & Dosing',
  system: 'pharmacology',
  source: 'L2 — Pharmacokinetics',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pharmacology' },
    { kind: 'lecture', label: 'L2 Pharmacokinetics' },
    { kind: 'mechanism', label: 'ADME; clearance, half-life, Vd' },
    { kind: 'exam', label: 'Bioavailability; loading vs maintenance dose' },
  ],

  highYield: [
    '**Pharmacokinetics is "what the BODY does to the DRUG" — ABSORPTION, DISTRIBUTION, METABOLISM, EXCRETION (ADME). ABSORPTION into the blood depends on route; oral drugs face FIRST-PASS metabolism (gut wall + liver) that lowers BIOAVAILABILITY (F = fraction of a dose reaching the systemic circulation unchanged; IV F = 100%).**',
    '**DISTRIBUTION is described by the VOLUME OF DISTRIBUTION (Vd = amount in body ÷ plasma concentration): a LARGE Vd means the drug leaves plasma for tissues (lipophilic, tissue-bound); a SMALL Vd (~plasma/ECF volume) means it stays in blood. Only FREE (unbound) drug is active/eliminated — plasma-protein binding (e.g. albumin) is a reservoir.**',
    '**METABOLISM (mostly hepatic) has PHASE I reactions (oxidation/reduction/hydrolysis — chiefly CYTOCHROME P450) that add/expose a functional group, and PHASE II CONJUGATION (glucuronidation, sulfation, acetylation) that adds a polar group to make the drug water-soluble for excretion. EXCRETION is mainly RENAL (filtration/secretion/reabsorption); renal impairment accumulates renally-cleared drugs.**',
    '**Two parameters govern dosing. CLEARANCE (CL = volume of plasma cleared per time) sets the MAINTENANCE dose (rate in = rate out at steady state). HALF-LIFE (t½ = 0.693 × Vd / CL) sets how long to reach steady state (~4–5 half-lives) and the dosing interval. A LOADING dose (= Vd × target concentration) rapidly fills the volume of distribution when you cannot wait 4–5 half-lives.**',
    '**Most drugs follow FIRST-ORDER kinetics (a constant FRACTION eliminated per time — rate ∝ concentration); a few (ethanol, phenytoin, aspirin at high dose) show ZERO-ORDER/saturable kinetics (a constant AMOUNT per time) → small dose rises cause large concentration jumps and toxicity.** The take-home: F (bioavailability) and Vd set concentration; CL and t½ set dose rate and interval; loading dose = Vd × C, maintenance = CL × C. Drug metabolism (CYP450) underlies interactions ([[drug-interactions-mechanisms]]) and pharmacogenomic variation ([[pharmacogenomics]]).',
  ],

  mechanism: {
    title: 'ADME; F & Vd set concentration, CL & t½ set dosing; loading = Vd×C, maintenance = CL×C; 1st- vs 0-order',
    steps: [
      { id: 's1', label: 'ADME: Absorption, Distribution, Metabolism, Excretion', emphasis: 'key' },
      { id: 's2', label: 'Bioavailability F (oral ↓ by first-pass); Vd = amount ÷ plasma conc', emphasis: 'key' },
      { id: 's3', label: 'Metabolism: Phase I (CYP450 oxidation) then Phase II (conjugation → water-soluble)', emphasis: 'key' },
      { id: 's4', label: 'Clearance sets maintenance dose; t½ = 0.693·Vd/CL sets interval (steady state ~4–5 t½)', emphasis: 'key' },
      { id: 's5', label: 'Loading dose = Vd × C; most 1st-order, saturable 0-order (phenytoin/ethanol/ASA)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Low oral bioavailability despite good absorption', mechanism: 'Extensive first-pass (gut/hepatic) metabolism', significance: 'key' },
    { sign: 'A very large volume of distribution (> body water)', mechanism: 'Lipophilic, tissue-bound drug (little stays in plasma)', significance: 'key' },
    { sign: 'Steady state reached after ~4–5 doses at one-t½ intervals', mechanism: 'First-order accumulation to steady state', significance: 'key' },
    { sign: 'Small dose increase causing a disproportionate toxic rise (phenytoin)', mechanism: 'Zero-order (saturable) kinetics', significance: 'key' },
    { sign: 'Drug accumulation in renal failure', mechanism: 'Reduced renal clearance of a renally-eliminated drug', significance: 'key' },
  ],

  investigations: [
    { clue: 'The fraction of an oral dose reaching the systemic circulation', meaning: 'Bioavailability (F)' },
    { clue: 'The parameter relating body drug amount to plasma concentration', meaning: 'Volume of distribution (Vd)' },
    { clue: 'The parameter that determines the maintenance dose rate', meaning: 'Clearance (CL)' },
    { clue: 'The formula for a loading dose', meaning: 'Vd × target concentration' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'ADME parameters drive rational dosing: clearance sets the maintenance rate, half-life the interval and time to steady state, and a loading dose (Vd × C) achieves a target fast. First-pass explains route choice; zero-order kinetics explains phenytoin/ethanol toxicity. CYP450 metabolism is the hub of drug interactions ([[drug-interactions-mechanisms]]) and pharmacogenomic variability ([[pharmacogenomics]]); renal excretion ties to dose adjustment in CKD ([[drug-dosing-ckd]]). This underlies the bioequivalence metrics of [[drug-development-bioequivalence]].' },
  ],

  mnemonics: [
    { hook: '"Loading = Vd × C (fill the tank); Maintenance = CL × C (replace losses)"', expansion: ['t½ = 0.693·Vd/CL', 'Steady state ≈ 4–5 half-lives'] },
    { hook: 'Metabolism: "Phase I = CYP (oxidise); Phase II = conjugate (make water-soluble)"', expansion: ['First-pass ↓ oral F', 'Only free drug is active'] },
    { hook: 'Kinetics: "First-order = constant FRACTION; Zero-order = constant AMOUNT (saturable)"', expansion: ['Zero-order: phenytoin, ethanol, high-dose ASA', 'Zero-order → toxicity risk'] },
  ],

  traps: [
    {
      questionCategory: 'First-order vs zero-order kinetics',
      wrongInstinct: 'All drugs are eliminated at a rate proportional to their concentration',
      rightAnswer: 'MOST drugs are FIRST-ORDER (a constant FRACTION per unit time, so rate rises with concentration and t½ is constant), but a few with saturable elimination are ZERO-ORDER (a constant AMOUNT per unit time regardless of concentration) — e.g. ethanol, phenytoin and high-dose aspirin — where small dose increases cause large, potentially toxic concentration jumps',
      why: 'Zero-order (saturable) kinetics means no constant half-life and a narrow margin for dose changes, explaining why phenytoin and ethanol levels can rise disproportionately — a key safety distinction.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which parameter is used to calculate the maintenance dose rate of a drug at steady state?',
      options: [
        { id: 'a', text: 'Volume of distribution' },
        { id: 'b', text: 'Clearance' },
        { id: 'c', text: 'Bioavailability alone' },
        { id: 'd', text: 'Half-life alone' },
      ],
      answerId: 'b',
      explanation: 'At steady state, rate in = rate out, so the maintenance dosing rate = clearance × target concentration (adjusted for bioavailability). Volume of distribution determines the loading dose (Vd × C), while half-life (0.693·Vd/CL) sets the dosing interval and time to steady state.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'An intravenous drug by definition has a bioavailability (F) of:',
      options: [
        { id: 'a', text: '100% (F = 1)' },
        { id: 'b', text: '50%' },
        { id: 'c', text: 'It depends on first-pass metabolism' },
        { id: 'd', text: '0%' },
      ],
      answerId: 'a',
      explanation: 'Bioavailability is the fraction of an administered dose reaching the systemic circulation unchanged. An intravenous dose enters the circulation directly, so F = 100% by definition; oral bioavailability is reduced by incomplete absorption and first-pass (gut/hepatic) metabolism.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default pharmacokineticsAdme;
