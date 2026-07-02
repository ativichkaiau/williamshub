import type { Lecture } from '../../lib/types';

export const drugInteractionsMechanisms: Lecture = {
  id: 'drug-interactions-mechanisms',
  title: 'Drug Interactions',
  system: 'pharmacology',
  source: 'L11 — Drug Interactions',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pharmacology' },
    { kind: 'lecture', label: 'L11 Drug Interactions' },
    { kind: 'mechanism', label: 'PK vs PD interactions; CYP450' },
    { kind: 'exam', label: 'Inducers vs inhibitors' },
  ],

  highYield: [
    '**A drug interaction is a change in one drug\'s effect caused by another drug (or food). They are PHARMACOKINETIC (altering the drug\'s concentration via ADME) or PHARMACODYNAMIC (altering the effect at the target). The CYTOCHROME P450 (CYP) system — especially CYP3A4 — is the hub of metabolic (PK) interactions.**',
    '**CYP INHIBITORS block metabolism → RAISE the levels of substrates → toxicity (fast onset). Classic inhibitors: azole antifungals, macrolides (clarithromycin/erythromycin), protease inhibitors/ritonavir, grapefruit juice, cimetidine, amiodarone, valproate, isoniazid. CYP INDUCERS speed metabolism → LOWER substrate levels → therapeutic failure (slow onset/offset over days). Classic inducers: rifampin, carbamazepine, phenytoin, phenobarbital, St John\'s wort, chronic alcohol/smoking.**',
    '**Other PK interactions: ABSORPTION (antacids/cations chelate tetracyclines/fluoroquinolones; PPIs reduce absorption of pH-dependent drugs); PROTEIN-BINDING displacement (e.g. warfarin); TRANSPORTERS (P-glycoprotein; e.g. verapamil raises digoxin); RENAL excretion (probenecid blocks penicillin secretion). PHARMACODYNAMIC interactions: additive/synergistic (benzodiazepine + opioid → respiratory depression; two QT-prolongers) or antagonistic (β-blocker + β-agonist; naloxone reverses opioids).**',
    '**High-yield danger combinations: warfarin + a CYP inhibitor → bleeding; warfarin + rifampin → clot; serotonergic drugs (SSRI + MAOI/tramadol) → SEROTONIN SYNDROME; ACE inhibitor + K-sparing diuretic + NSAID ("triple whammy") → AKI/hyperkalaemia; statin + CYP3A4 inhibitor → rhabdomyolysis; MAOI + tyramine → hypertensive crisis. Narrow-therapeutic-index drugs (warfarin, digoxin, phenytoin, lithium, ciclosporin) are the most dangerous substrates.**',
    '**The take-home: interactions are PK (change concentration — CYP inhibitors ↑levels/toxicity, inducers ↓levels/failure) or PD (change effect — additive/antagonistic). Remember the classic inhibitors (azoles, macrolides, grapefruit) and inducers (rifampin, carbamazepine, phenytoin), and watch narrow-TI substrates.** CYP metabolism is defined in [[pharmacokinetics-adme]]; genetic CYP variation in [[pharmacogenomics]]; polypharmacy is central to CKD dosing ([[drug-dosing-ckd]]).',
  ],

  mechanism: {
    title: 'PK (CYP inhibitors ↑levels, inducers ↓levels; absorption/binding/transport/excretion) vs PD (additive/antagonistic)',
    steps: [
      { id: 's1', label: 'PK interactions alter concentration (ADME); PD interactions alter effect at target', emphasis: 'key' },
      { id: 's2', label: 'CYP INHIBITORS (azoles, macrolides, ritonavir, grapefruit) → ↑levels → toxicity (fast)', emphasis: 'key' },
      { id: 's3', label: 'CYP INDUCERS (rifampin, carbamazepine, phenytoin, St John\'s wort) → ↓levels → failure (slow)', emphasis: 'key' },
      { id: 's4', label: 'Other PK: chelation, protein-binding displacement, P-gp, renal secretion (probenecid)', emphasis: 'key' },
      { id: 's5', label: 'PD: benzodiazepine+opioid, SSRI+MAOI (serotonin syndrome), triple-whammy AKI', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Warfarin over-anticoagulation after starting an azole/macrolide', mechanism: 'CYP inhibition raising warfarin level', significance: 'key' },
    { sign: 'Subtherapeutic drug levels / contraceptive failure on rifampin', mechanism: 'CYP induction lowering substrate levels', significance: 'key' },
    { sign: 'Rhabdomyolysis when a statin is combined with a CYP3A4 inhibitor', mechanism: 'Raised statin concentration', significance: 'key' },
    { sign: 'Agitation, hyperthermia, clonus on SSRI + tramadol/MAOI', mechanism: 'Serotonin syndrome (pharmacodynamic synergy)', significance: 'key' },
    { sign: 'AKI with ACE inhibitor + diuretic + NSAID', mechanism: '"Triple whammy" nephrotoxic combination', significance: 'key' },
  ],

  investigations: [
    { clue: 'The enzyme system central to metabolic drug interactions', meaning: 'Cytochrome P450 (esp. CYP3A4)' },
    { clue: 'The effect of a CYP inhibitor on a substrate', meaning: 'Raises its level → toxicity' },
    { clue: 'The effect of a CYP inducer on a substrate', meaning: 'Lowers its level → therapeutic failure' },
    { clue: 'The drugs most dangerous in interactions', meaning: 'Narrow-therapeutic-index substrates (warfarin, digoxin, phenytoin, lithium)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Anticipating interactions prevents toxicity and failure: know the classic CYP inhibitors (azoles, macrolides, grapefruit, ritonavir) that raise levels and inducers (rifampin, carbamazepine, phenytoin) that lower them, and watch narrow-TI substrates and dangerous PD combinations (serotonin syndrome, triple-whammy AKI, additive sedation). This builds on CYP metabolism ([[pharmacokinetics-adme]]) and interacts with genetic variability ([[pharmacogenomics]]); it is amplified in the polypharmacy of CKD ([[drug-dosing-ckd]]).' },
  ],

  mnemonics: [
    { hook: 'Inhibitors raise, inducers lower: "Inhibit = Intoxicate; Induce = Ineffective"', expansion: ['Inhibitors: azoles, macrolides, grapefruit, ritonavir', 'Inducers: rifampin, carbamazepine, phenytoin, St John\'s wort'] },
    { hook: '"PK = change concentration; PD = change effect"', expansion: ['Narrow TI = most dangerous', 'Serotonin syndrome = SSRI + MAOI/tramadol'] },
  ],

  traps: [
    {
      questionCategory: 'Time course of inducers vs inhibitors',
      wrongInstinct: 'CYP inducers and inhibitors both change drug levels immediately',
      rightAnswer: 'CYP INHIBITION is usually FAST (competitive, within a dose or two → rapid rise and toxicity), whereas CYP INDUCTION is SLOW in onset AND offset (it requires synthesis of new enzyme over days–weeks, and levels take days to fall when the inducer is added and to recover when it is stopped) — so induction interactions are easy to miss and persist after stopping the inducer',
      why: 'The delayed, prolonged course of enzyme induction means a substrate can fail days after adding rifampin and become toxic days after stopping it — a timing trap that immediate-effect thinking misses.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Adding clarithromycin (a CYP3A4 inhibitor) to a patient on simvastatin most likely causes:',
      options: [
        { id: 'a', text: 'Reduced statin effect and higher cholesterol' },
        { id: 'b', text: 'Increased statin levels and risk of myopathy/rhabdomyolysis' },
        { id: 'c', text: 'No interaction' },
        { id: 'd', text: 'Faster statin metabolism' },
      ],
      answerId: 'b',
      explanation: 'Clarithromycin inhibits CYP3A4, which metabolises simvastatin, so statin levels rise and the risk of myopathy and rhabdomyolysis increases. CYP inhibitors raise substrate concentrations (toxicity), whereas inducers like rifampin lower them (failure).',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Rifampin reduces the effectiveness of many drugs (e.g. oral contraceptives, warfarin) because it:',
      options: [
        { id: 'a', text: 'Inhibits CYP450' },
        { id: 'b', text: 'Induces CYP450, accelerating their metabolism and lowering their levels' },
        { id: 'c', text: 'Displaces them from protein binding' },
        { id: 'd', text: 'Blocks their renal excretion' },
      ],
      answerId: 'b',
      explanation: 'Rifampin is a potent CYP450 inducer: it increases enzyme synthesis over days, accelerating metabolism of many substrates and lowering their levels — causing therapeutic failure such as contraceptive failure or subtherapeutic anticoagulation. Its effect is delayed in both onset and offset.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default drugInteractionsMechanisms;
