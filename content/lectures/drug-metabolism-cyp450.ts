import type { Lecture } from '../../lib/types';

export const drugMetabolismCyp450: Lecture = {
  id: 'drug-metabolism-cyp450',
  title: 'Drug Metabolism & the Cytochrome P450 System',
  system: 'pharmacology',
  source: 'L2 — Pharmacokinetics',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pharmacology' },
    { kind: 'lecture', label: 'L2 Metabolism' },
    { kind: 'mechanism', label: 'Phase I/II; induction/inhibition' },
    { kind: 'exam', label: 'CYP450; prodrugs' },
  ],

  highYield: [
    'Metabolism (BIOTRANSFORMATION), mostly HEPATIC, usually converts lipophilic drugs into more water-soluble, excretable metabolites. PHASE I (oxidation/reduction/hydrolysis) adds or exposes a functional group — dominated by the CYTOCHROME P450 (CYP) enzymes; PHASE II CONJUGATION (glucuronidation, sulfation, acetylation, glutathione, methylation) attaches a polar group. Phase I often precedes Phase II, but either can act alone.',
    'CYP450 enzymes (esp. CYP3A4, the most abundant, plus CYP2D6, CYP2C9/19, CYP1A2) metabolise the majority of drugs. Their activity varies with GENETICS (pharmacogenomics — [[pharmacogenomics]]), age, liver disease, and — crucially — INDUCERS and INHIBITORS, which are the engine of most metabolic drug interactions.',
    'PRODRUGS require metabolism to become ACTIVE (e.g. codeine → morphine by CYP2D6; enalapril → enalaprilat; clopidogrel activation) — so poor metabolisers underdose them and enzyme inhibitors reduce their effect. Some drugs form TOXIC metabolites (paracetamol → NAPQI, detoxified by glutathione until it is depleted in overdose). Active metabolites prolong or add effect.',
    'CYP INHIBITORS (azoles, macrolides, ritonavir, grapefruit, cimetidine) RAISE substrate levels (rapid → toxicity); CYP INDUCERS (rifampin, carbamazepine, phenytoin, phenobarbital, St John\'s wort, chronic alcohol/smoking) increase enzyme synthesis over days, LOWERING substrate levels (slow → therapeutic failure). This is the metabolic basis of interactions ([[drug-interactions-mechanisms]]).',
    '**The take-home: hepatic metabolism = Phase I (CYP450 oxidation) then Phase II (conjugation → water-soluble); CYP450 handles most drugs; PRODRUGS need activation, some form toxic metabolites (NAPQI); INHIBITORS ↑levels (toxicity), INDUCERS ↓levels (failure).** This sits within the ADME of [[pharmacokinetics-adme]], drives interactions ([[drug-interactions-mechanisms]]) and pharmacogenomic variation ([[pharmacogenomics]]).',
  ],

  mechanism: {
    title: 'Phase I (CYP450 oxidation) → Phase II (conjugation); CYP handles most drugs; prodrugs/toxic metabolites; inhibitors ↑ / inducers ↓ levels',
    steps: [
      { id: 's1', label: 'Phase I: oxidation/reduction/hydrolysis (CYP450) adds/exposes a functional group', emphasis: 'key' },
      { id: 's2', label: 'Phase II: conjugation (glucuronide/sulfate/acetyl/glutathione) → water-soluble', emphasis: 'key' },
      { id: 's3', label: 'CYP3A4 most abundant; activity varies (genetics, liver, age)', emphasis: 'key' },
      { id: 's4', label: 'Prodrugs need activation (codeine→morphine); toxic metabolites (paracetamol→NAPQI)', emphasis: 'key' },
      { id: 's5', label: 'CYP inhibitors ↑ levels (toxicity, fast); inducers ↓ levels (failure, slow)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'A drug with no activity until metabolised (e.g. codeine → morphine)', mechanism: 'Prodrug requiring CYP activation', significance: 'key' },
    { sign: 'Hepatotoxicity in paracetamol overdose once glutathione is depleted', mechanism: 'Toxic metabolite NAPQI accumulation', significance: 'key' },
    { sign: 'Raised substrate levels/toxicity after adding a macrolide/azole', mechanism: 'CYP inhibition', significance: 'key' },
    { sign: 'Loss of drug effect days after starting rifampin', mechanism: 'CYP induction (delayed, increased enzyme)', significance: 'key' },
    { sign: 'A conjugated, water-soluble metabolite ready for excretion', mechanism: 'Phase II metabolism', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The enzyme family dominating Phase I metabolism', meaning: 'Cytochrome P450 (esp. CYP3A4)' },
    { clue: 'The purpose of Phase II conjugation', meaning: 'Add a polar group → water-soluble for excretion' },
    { clue: 'The toxic metabolite of paracetamol', meaning: 'NAPQI (detoxified by glutathione)' },
    { clue: 'The effect of a CYP inducer on drug levels', meaning: 'Lowers them (therapeutic failure)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Metabolism determines whether a drug is activated (prodrugs), inactivated or made toxic (NAPQI), and the CYP450 system is the hub of drug interactions (inhibitors raise, inducers lower levels — [[drug-interactions-mechanisms]]) and pharmacogenomic variability ([[pharmacogenomics]]). Understanding it guides dose choice, prodrug efficacy and toxicology (paracetamol/NAC). It is the metabolism arm of the ADME framework in [[pharmacokinetics-adme]].' },
  ],

  mnemonics: [
    { hook: '"Phase I = CYP oxidise (functional group); Phase II = conjugate (water-soluble)"', expansion: ['CYP3A4 most abundant', 'Prodrug needs Phase I'] },
    { hook: '"Inhibitors Intoxicate (↑ level, fast); Inducers make Ineffective (↓ level, slow)"', expansion: ['Inhibitors: azoles/macrolides/grapefruit', 'Inducers: rifampin/carbamazepine/phenytoin'] },
  ],

  traps: [
    {
      questionCategory: 'Prodrug response to enzyme inhibition',
      wrongInstinct: 'A CYP inhibitor always increases a drug\'s effect by raising its level',
      rightAnswer: 'For an ordinary ACTIVE drug a CYP inhibitor raises levels and effect/toxicity, but for a PRODRUG that CYP ACTIVATES (e.g. codeine→morphine, clopidogrel), inhibiting the enzyme REDUCES formation of the active metabolite and DECREASES the effect — the prodrug relationship reverses the expected direction',
      why: 'Whether metabolism activates or inactivates a drug flips the consequence of enzyme inhibition/induction (and of metaboliser genotype), so knowing prodrug status is essential to predict the interaction.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Phase I drug metabolism reactions are predominantly carried out by:',
      options: [
        { id: 'a', text: 'Glucuronosyltransferases' },
        { id: 'b', text: 'Cytochrome P450 enzymes' },
        { id: 'c', text: 'Plasma esterases only' },
        { id: 'd', text: 'Renal tubular transporters' },
      ],
      answerId: 'b',
      explanation: 'Phase I reactions (oxidation, reduction, hydrolysis) are dominated by the cytochrome P450 enzyme family, which introduces or exposes functional groups. Phase II conjugation (e.g. glucuronidation by UGTs) then adds polar groups to make metabolites water-soluble for excretion.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A CYP inducer such as rifampin will, over several days, cause the plasma level of a CYP-metabolised substrate to:',
      options: [
        { id: 'a', text: 'Rise, causing toxicity' },
        { id: 'b', text: 'Fall, risking therapeutic failure' },
        { id: 'c', text: 'Stay exactly the same' },
        { id: 'd', text: 'Become undetectable immediately' },
      ],
      answerId: 'b',
      explanation: 'CYP inducers increase enzyme synthesis over days, accelerating metabolism of substrates and lowering their plasma levels — risking therapeutic failure (e.g. contraceptive failure). The effect is delayed in onset and offset, unlike the rapid rise caused by CYP inhibitors.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default drugMetabolismCyp450;
