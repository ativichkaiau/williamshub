import type { Lecture } from '../../lib/types';

export const pharmacodynamicDrugInteractions: Lecture = {
  id: 'pharmacodynamic-drug-interactions',
  title: 'Pharmacodynamic Drug Interactions',
  system: 'pharmacology',
  source: 'L11 — Drug Interactions',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pharmacology' },
    { kind: 'lecture', label: 'L11 PD Interactions' },
    { kind: 'mechanism', label: 'Additive/synergistic/antagonistic' },
    { kind: 'exam', label: 'Serotonin syndrome; QT; sedation' },
  ],

  highYield: [
    '**PHARMACODYNAMIC (PD) interactions occur at the site of ACTION (not the drug\'s concentration) when two drugs affect the same physiological system. They are ADDITIVE/SYNERGISTIC (effects add or amplify) or ANTAGONISTIC (effects oppose). Unlike PK interactions, PD interactions can occur even when drug levels are unchanged.**',
    '**Dangerous ADDITIVE/SYNERGISTIC interactions: CNS DEPRESSION (opioid + benzodiazepine + alcohol → respiratory depression); SEROTONIN SYNDROME (SSRI/SNRI + MAOI/tramadol/linezolid → agitation, hyperthermia, clonus, autonomic instability); QT PROLONGATION (two QT-prolongers → torsades); BLEEDING (anticoagulant + antiplatelet + NSAID); HYPERKALAEMIA (ACEi/ARB + K-sparing diuretic + trimethoprim); NEPHROTOXICITY ("triple whammy": ACEi/ARB + diuretic + NSAID → AKI).**',
    '**ANTAGONISTIC interactions can be therapeutic (naloxone reverses opioids; flumazenil reverses benzodiazepines; vitamin K reverses warfarin; β-agonist vs β-blocker) or problematic (NSAID blunting antihypertensive/diuretic effect; β-blocker opposing β-agonist bronchodilation in asthma).**',
    '**Some PD interactions are exploited deliberately (combination antihypertensives, chemotherapy, TB therapy, sequential folate blockade by co-trimoxazole), while others must be avoided or monitored. Additivity of side-effects (e.g. multiple sedating or anticholinergic drugs — "anticholinergic burden") is a common, under-recognised cause of harm, especially in the elderly.**',
    '**The take-home: PD interactions act at the target (levels unchanged) — additive/synergistic (opioid+benzo sedation, serotonin syndrome, QT, bleeding, hyperkalaemia, triple-whammy AKI) or antagonistic (antidotes; NSAID vs antihypertensive). Watch additive side-effects (sedation, anticholinergic burden).** The PK/CYP interactions are in [[drug-interactions-mechanisms]]; serotonin/opioid pharmacology recurs in HNS-2; hyperkalaemia/AKI combos in HRU-2 ([[drug-dosing-ckd]]).',
  ],

  mechanism: {
    title: 'PD interactions act at the target (levels unchanged): additive/synergistic (sedation, serotonin, QT, bleeding, hyperK, AKI) or antagonistic (antidotes)',
    steps: [
      { id: 's1', label: 'PD interaction = same system affected; levels unchanged (vs PK)', emphasis: 'key' },
      { id: 's2', label: 'Additive/synergistic: opioid+benzodiazepine (respiratory depression); SSRI+MAOI (serotonin syndrome)', emphasis: 'danger' },
      { id: 's3', label: 'QT-prolongers → torsades; anticoagulant+antiplatelet+NSAID → bleeding', emphasis: 'danger' },
      { id: 's4', label: 'Hyperkalaemia (ACEi/ARB+K-sparing+trimethoprim); triple-whammy AKI (ACEi+diuretic+NSAID)', emphasis: 'danger' },
      { id: 's5', label: 'Antagonistic: naloxone/flumazenil/vitamin K (therapeutic) or NSAID vs antihypertensive (harmful)' },
    ],
  },

  examFindings: [
    { sign: 'Respiratory depression from combined opioid + benzodiazepine', mechanism: 'Additive CNS depression (PD interaction)', significance: 'key' },
    { sign: 'Agitation, hyperthermia and clonus on SSRI + tramadol/MAOI', mechanism: 'Serotonin syndrome (synergistic serotonergic effect)', significance: 'key' },
    { sign: 'Torsades de pointes when two QT-prolonging drugs are combined', mechanism: 'Additive QT prolongation', significance: 'key' },
    { sign: 'AKI with ACE inhibitor + diuretic + NSAID', mechanism: '"Triple whammy" (additive renal insult)', significance: 'key' },
    { sign: 'Opioid overdose reversed by naloxone', mechanism: 'Antagonistic (therapeutic) PD interaction', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The site of pharmacodynamic interactions', meaning: 'The drug\'s site of action (not its concentration)' },
    { clue: 'The interaction from combining serotonergic drugs', meaning: 'Serotonin syndrome' },
    { clue: 'The nephrotoxic three-drug combination', meaning: 'ACEi/ARB + diuretic + NSAID ("triple whammy")' },
    { clue: 'A therapeutic antagonistic interaction', meaning: 'Naloxone reversing opioids (or vitamin K reversing warfarin)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Pharmacodynamic interactions cause harm even when drug levels are normal, so anticipating additive/synergistic dangers (opioid+benzodiazepine sedation, serotonin syndrome, QT prolongation, bleeding, hyperkalaemia, triple-whammy AKI) and using antagonistic interactions therapeutically (antidotes) is core to safe prescribing. Additive side-effect burden (sedation, anticholinergic) is a common elderly harm. This complements the PK/CYP interactions of [[drug-interactions-mechanisms]] and the CKD polypharmacy of [[drug-dosing-ckd]].' },
  ],

  mnemonics: [
    { hook: '"PD = same target (levels unchanged); PK = changed level"', expansion: ['Additive/synergistic or antagonistic', 'Antidotes = therapeutic antagonism'] },
    { hook: 'Dangerous combos: "sedation, Serotonin, QT, bleeding, hyperK, triple-whammy AKI"', expansion: ['Opioid+benzo', 'SSRI+MAOI/tramadol'] },
  ],

  traps: [
    {
      questionCategory: 'PD interactions with normal drug levels',
      wrongInstinct: 'If drug levels are within range, there can be no dangerous interaction',
      rightAnswer: 'PHARMACODYNAMIC interactions occur at the site of ACTION and can be lethal even with NORMAL drug LEVELS — e.g. an opioid plus a benzodiazepine (additive respiratory depression) or two QT-prolonging drugs (torsades) interact by combined EFFECT, not by changing each other\'s concentration; monitoring levels alone will not detect them',
      why: 'Because PD interactions do not alter concentrations, relying on drug levels misses them; recognising additive/synergistic effects (sedation, serotonin, QT, bleeding) is essential to prevent harm.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Combining a benzodiazepine with an opioid is dangerous chiefly because of a pharmacodynamic interaction causing:',
      options: [
        { id: 'a', text: 'Increased metabolism of both drugs' },
        { id: 'b', text: 'Additive CNS and respiratory depression' },
        { id: 'c', text: 'Reduced sedation' },
        { id: 'd', text: 'Serotonin syndrome' },
      ],
      answerId: 'b',
      explanation: 'Opioids and benzodiazepines both depress the CNS and respiratory drive; combined, their effects are additive/synergistic, markedly increasing the risk of respiratory depression and death — a pharmacodynamic interaction independent of drug levels.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'The combination of an SSRI with tramadol or an MAOI can precipitate:',
      options: [
        { id: 'a', text: 'Serotonin syndrome' },
        { id: 'b', text: 'Neuroleptic malignant syndrome' },
        { id: 'c', text: 'The anticholinergic toxidrome' },
        { id: 'd', text: 'Disulfiram reaction' },
      ],
      answerId: 'a',
      explanation: 'Combining serotonergic drugs (SSRIs/SNRIs with MAOIs, tramadol, linezolid, etc.) causes excess serotonergic activity — serotonin syndrome — with agitation, hyperthermia, clonus/hyperreflexia and autonomic instability. It is a pharmacodynamic (synergistic) interaction.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default pharmacodynamicDrugInteractions;
