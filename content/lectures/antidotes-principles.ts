import type { Lecture } from '../../lib/types';

export const antidotesPrinciples: Lecture = {
  id: 'antidotes-principles',
  title: 'Principles of Antidotes',
  system: 'pharmacology',
  source: 'L12 — Antidotes',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pharmacology' },
    { kind: 'lecture', label: 'L12 Antidotes' },
    { kind: 'mechanism', label: 'Decontamination & specific antidotes' },
    { kind: 'exam', label: 'Poison–antidote pairs' },
  ],

  highYield: [
    'Poisoning management is mostly SUPPORTIVE (ABCDE) with DECONTAMINATION and ENHANCED ELIMINATION; specific ANTIDOTES exist for only a minority of poisons. Decontamination: ACTIVATED CHARCOAL adsorbs many toxins if given early (useless for iron, lithium, alcohols, hydrocarbons, corrosives). Enhanced elimination: URINE ALKALINISATION (aspirin, phenobarbital), HAEMODIALYSIS ("I-STUMBLE": Isopropanol, Salicylate, Theophylline, Uraemia, Methanol, Barbiturate, Lithium, Ethylene glycol).',
    'Antidotes act by: (1) blocking the receptor/effect (NALOXONE for opioids, FLUMAZENIL for benzodiazepines, ATROPINE for cholinergics); (2) providing a competing substrate/replacing a depleted one (N-ACETYLCYSTEINE replenishes glutathione in PARACETAMOL overdose; FOMEPIZOLE/ethanol block alcohol dehydrogenase in methanol/ethylene glycol); (3) chelating/binding the toxin (deferoxamine–iron, dimercaprol/DMSA–heavy metals, digoxin-specific Fab).',
    'Must-know poison → antidote pairs: PARACETAMOL → N-acetylcysteine; OPIOIDS → naloxone; BENZODIAZEPINES → flumazenil (rarely used — seizure risk); ORGANOPHOSPHATE → atropine + pralidoxime; WARFARIN → vitamin K (± PCC/FFP); HEPARIN → protamine; IRON → deferoxamine; DIGOXIN → digoxin-specific antibody (Fab); METHANOL/ETHYLENE GLYCOL → fomepizole; CYANIDE → hydroxocobalamin/nitrites-thiosulfate; β-BLOCKER/Ca-CHANNEL BLOCKER → glucagon/calcium/insulin; METHAEMOGLOBINAEMIA → methylene blue; LEAD → chelation (DMSA/EDTA).',
    'Timing and specifics matter: N-acetylcysteine is most effective GIVEN EARLY (within ~8 h) in paracetamol overdose, guided by the timed level on the treatment nomogram; pralidoxime must precede AChE "ageing"; flumazenil can precipitate seizures (avoid if chronic benzodiazepine use or co-ingested proconvulsant). Most overdoses have NO specific antidote — good supportive care saves lives.',
    '**The take-home: supportive care + decontamination (early charcoal) is the backbone; know the classic antidote pairs (paracetamol→NAC, opioid→naloxone, OP→atropine+pralidoxime, iron→deferoxamine, digoxin→Fab, methanol→fomepizole, warfarin→vitamin K).** Cholinergic-crisis antidotes link to [[cholinergic-drugs]]; paracetamol (NAPQI) hepatotoxicity and warfarin reversal recur across pharmacology and the ADR framework ([[adverse-drug-reactions-allergy]]).',
  ],

  mechanism: {
    title: 'Supportive + decontamination (charcoal) ± elimination (dialysis); antidotes block/substitute/chelate — know the pairs',
    steps: [
      { id: 's1', label: 'Backbone = supportive care (ABCDE) + decontamination (early activated charcoal)', emphasis: 'key' },
      { id: 's2', label: 'Enhanced elimination: urine alkalinisation (ASA), dialysis (I-STUMBLE toxins)', emphasis: 'key' },
      { id: 's3', label: 'Antidote types: block (naloxone/atropine), substitute (NAC/fomepizole), chelate (deferoxamine/Fab)', emphasis: 'key' },
      { id: 's4', label: 'Key pairs: paracetamol→NAC, opioid→naloxone, OP→atropine+pralidoxime, iron→deferoxamine, digoxin→Fab', emphasis: 'key' },
      { id: 's5', label: 'Give NAC early (nomogram); flumazenil risks seizures; most overdoses have no antidote', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Opioid triad (coma, respiratory depression, pinpoint pupils) reversed by an antagonist', mechanism: 'Naloxone (opioid receptor blockade)', significance: 'key' },
    { sign: 'Paracetamol overdose treated by replenishing glutathione', mechanism: 'N-acetylcysteine (early, nomogram-guided)', significance: 'key' },
    { sign: 'Methanol/ethylene glycol poisoning', mechanism: 'Fomepizole (blocks alcohol dehydrogenase)', significance: 'key' },
    { sign: 'Digoxin toxicity with life-threatening arrhythmia/hyperkalaemia', mechanism: 'Digoxin-specific antibody (Fab) fragments', significance: 'key' },
    { sign: 'Iron overdose in a child', mechanism: 'Deferoxamine (chelation)', significance: 'key' },
  ],

  investigations: [
    { clue: 'The antidote for paracetamol overdose', meaning: 'N-acetylcysteine (replenishes glutathione)' },
    { clue: 'The antidote for opioid overdose', meaning: 'Naloxone' },
    { clue: 'The antidote for methanol/ethylene glycol', meaning: 'Fomepizole (or ethanol) — blocks alcohol dehydrogenase' },
    { clue: 'The decontamination agent useless for iron, lithium and alcohols', meaning: 'Activated charcoal' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Toxicology management is exam-heavy and life-saving: supportive care plus early decontamination is the backbone, and the classic antidote pairs (paracetamol→NAC, opioid→naloxone, organophosphate→atropine+pralidoxime — [[cholinergic-drugs]], iron→deferoxamine, digoxin→Fab, methanol→fomepizole, warfarin→vitamin K) must be automatic. Timing (NAC nomogram, pralidoxime before ageing) and hazards (flumazenil seizures) determine outcomes; paracetamol/NAPQI and warfarin reversal recur throughout pharmacology and adverse reactions ([[adverse-drug-reactions-allergy]]).' },
  ],

  mnemonics: [
    { hook: 'Pairs: "Para→NAC, Opioid→Naloxone, OP→Atropine+Pralidoxime, Iron→Deferoxamine, Digoxin→Fab, Methanol→Fomepizole"', expansion: ['Warfarin→vitamin K', 'Heparin→protamine'] },
    { hook: 'Dialysable = "I-STUMBLE"', expansion: ['Isopropanol, Salicylate, Theophylline, Uraemia, Methanol, Barbiturate, Lithium, Ethylene glycol', 'Charcoal fails: iron/lithium/alcohols'] },
  ],

  traps: [
    {
      questionCategory: 'Role of specific antidotes',
      wrongInstinct: 'Every poisoning has a specific antidote that is the main treatment',
      rightAnswer: 'Only a MINORITY of poisons have a specific antidote; the mainstay for most overdoses is SUPPORTIVE care (airway, breathing, circulation) plus decontamination/enhanced elimination — and even when an antidote exists, timing and correct use (e.g. NAC within the effective window, pralidoxime before ageing, avoiding flumazenil in seizure-prone patients) are critical',
      why: 'Over-focusing on antidotes neglects the supportive care that actually saves most poisoned patients, and misusing an antidote (wrong timing/indication) can be ineffective or harmful.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The antidote for paracetamol (acetaminophen) overdose works by:',
      options: [
        { id: 'a', text: 'Chelating the drug' },
        { id: 'b', text: 'Replenishing hepatic glutathione (N-acetylcysteine)' },
        { id: 'c', text: 'Blocking opioid receptors' },
        { id: 'd', text: 'Inducing CYP450' },
      ],
      answerId: 'b',
      explanation: 'Paracetamol overdose depletes glutathione, allowing the toxic metabolite NAPQI to accumulate and injure the liver. N-acetylcysteine replenishes glutathione (and provides substrate), detoxifying NAPQI — most effective when given early and guided by the timed-level nomogram.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'Which poison is correctly paired with its antidote?',
      options: [
        { id: 'a', text: 'Iron — naloxone' },
        { id: 'b', text: 'Organophosphate — atropine plus pralidoxime' },
        { id: 'c', text: 'Warfarin — protamine' },
        { id: 'd', text: 'Opioids — flumazenil' },
      ],
      answerId: 'b',
      explanation: 'Organophosphate (cholinergic crisis) is treated with atropine (muscarinic blockade) plus pralidoxime (reactivates acetylcholinesterase). Iron→deferoxamine, warfarin→vitamin K (protamine reverses heparin), and opioids→naloxone (flumazenil reverses benzodiazepines).',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default antidotesPrinciples;
