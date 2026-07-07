import type { Lecture } from '../../lib/types';

export const toxidromesPoisoningApproach: Lecture = {
  id: 'toxidromes-poisoning-approach',
  title: 'Toxidromes & Approach to Poisoning',
  system: 'pharmacology',
  source: 'L12 — Antidotes',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pharmacology' },
    { kind: 'lecture', label: 'L12 Toxidromes' },
    { kind: 'mechanism', label: 'Pattern recognition & decontamination' },
    { kind: 'exam', label: 'Cholinergic vs anticholinergic; sympathomimetic' },
  ],

  highYield: [
    'A TOXIDROME is a recognisable pattern of signs pointing to a class of poison, guiding management before a drug level is known. Assess vital signs, pupils, skin (dry vs sweaty), bowel/bladder and mental state. The core management is ABCDE resuscitation + supportive care, with decontamination, enhanced elimination and specific antidotes where indicated.',
    'Key toxidromes: CHOLINERGIC (organophosphates — SLUDGE/DUMBELS: salivation, lacrimation, urination, defecation, miosis, bradycardia, bronchorrhoea, sweating; treat atropine + pralidoxime); ANTICHOLINERGIC (hot, dry, red, mydriasis, delirium, tachycardia, retention); SYMPATHOMIMETIC (cocaine/amphetamine — agitated, hypertensive, tachycardic, mydriasis, SWEATY — the sweating distinguishes it from anticholinergic); OPIOID (CNS + respiratory depression + MIOSIS — naloxone); SEDATIVE-HYPNOTIC (CNS depression, normal pupils).',
    'DECONTAMINATION: activated CHARCOAL (adsorbs many toxins if given early; useless for iron, lithium, alcohols, hydrocarbons, corrosives); whole-bowel irrigation for some (iron, packets). ENHANCED ELIMINATION: urine ALKALINISATION (salicylate, phenobarbital); HAEMODIALYSIS ("I-STUMBLE": isopropanol, salicylate, theophylline, uraemia, methanol, barbiturate, lithium, ethylene glycol).',
    'Always check a GLUCOSE and consider PARACETAMOL/SALICYLATE levels in deliberate overdose. Distinguishing toxidromes changes treatment: the SWEATY skin separates sympathomimetic (wet) from anticholinergic (dry); MIOSIS suggests opioid or cholinergic; the cholinergic vs anticholinergic axis is the classic exam pairing.',
    '**The take-home: recognise the TOXIDROME (cholinergic wet/miosis vs anticholinergic dry/mydriasis; sympathomimetic sweaty; opioid miosis+respiratory depression); manage with ABCDE + decontamination (early charcoal, not for iron/lithium/alcohols) ± enhanced elimination (alkalinisation, dialysis "I-STUMBLE") ± antidote; check glucose/paracetamol.** Specific poison→antidote pairs are in [[antidotes-principles]]; cholinergic/anticholinergic pharmacology in [[cholinergic-drugs]] and [[antimuscarinic-anticholinergic-drugs]].',
  ],

  mechanism: {
    title: 'Recognise toxidrome (cholinergic/anticholinergic/sympathomimetic/opioid/sedative) → ABCDE + decontamination + elimination ± antidote',
    steps: [
      { id: 's1', label: 'Toxidrome = pattern (vitals, pupils, skin, mental state) → poison class', emphasis: 'key' },
      { id: 's2', label: 'Cholinergic (SLUDGE, miosis) vs anticholinergic (dry/hot/mydriasis/delirium)', emphasis: 'key' },
      { id: 's3', label: 'Sympathomimetic (agitated, SWEATY, mydriasis) vs opioid (miosis + respiratory depression)', emphasis: 'key' },
      { id: 's4', label: 'Decontamination: early charcoal (not iron/lithium/alcohols); elimination: alkalinisation, dialysis (I-STUMBLE)', emphasis: 'key' },
      { id: 's5', label: 'Check glucose + paracetamol/salicylate; ABCDE + supportive care ± antidote', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Miosis, salivation, sweating and bradycardia after pesticide exposure', mechanism: 'Cholinergic toxidrome (organophosphate)', significance: 'key' },
    { sign: 'Hot, dry, flushed, dilated pupils and delirium', mechanism: 'Anticholinergic toxidrome', significance: 'key' },
    { sign: 'Agitated, hypertensive, tachycardic, mydriatic and sweaty', mechanism: 'Sympathomimetic toxidrome (cocaine/amphetamine)', significance: 'key' },
    { sign: 'Pinpoint pupils with respiratory depression and coma', mechanism: 'Opioid toxidrome (naloxone)', significance: 'key' },
    { sign: 'Charcoal ineffective for this overdose', mechanism: 'Iron, lithium, alcohols, hydrocarbons, corrosives', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The skin finding separating sympathomimetic from anticholinergic', meaning: 'Sweaty (sympathomimetic) vs dry (anticholinergic)' },
    { clue: 'The pupils in opioid vs anticholinergic toxidrome', meaning: 'Miosis (opioid) vs mydriasis (anticholinergic)' },
    { clue: 'The toxins removable by haemodialysis', meaning: 'I-STUMBLE (isopropanol, salicylate, theophylline, uraemia, methanol, barbiturate, lithium, ethylene glycol)' },
    { clue: 'Two levels to check in every deliberate overdose', meaning: 'Glucose and paracetamol (± salicylate)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Toxidrome recognition lets you treat empirically before levels return and directs decontamination/elimination/antidote choice — the sweaty-vs-dry and miosis-vs-mydriasis distinctions change management (e.g. atropine+pralidoxime for cholinergic, naloxone for opioid). Supportive care saves most poisoned patients; specific poison→antidote pairs are in [[antidotes-principles]]. The underlying cholinergic/anticholinergic pharmacology is in [[cholinergic-drugs]] and [[antimuscarinic-anticholinergic-drugs]].' },
  ],

  mnemonics: [
    { hook: '"Cholinergic = wet + small pupils; Anticholinergic = dry/hot + big pupils; Sympathomimetic = sweaty + big pupils; Opioid = small pupils + slow breathing"', expansion: ['Sweat separates sympathomimetic from anticholinergic', 'Miosis = opioid/cholinergic'] },
    { hook: 'Dialysable "I-STUMBLE"; charcoal fails on "iron/lithium/alcohols"', expansion: ['Check glucose + paracetamol', 'ABCDE first'] },
  ],

  traps: [
    {
      questionCategory: 'Sympathomimetic vs anticholinergic toxidrome',
      wrongInstinct: 'An agitated, tachycardic, hyperthermic patient with dilated pupils must have anticholinergic poisoning',
      rightAnswer: 'Sympathomimetic and anticholinergic toxidromes overlap (agitation, tachycardia, hyperthermia, mydriasis), but the SKIN distinguishes them: SYMPATHOMIMETIC poisoning (cocaine/amphetamine) causes DIAPHORESIS (sweaty skin) and preserved bowel sounds, whereas ANTICHOLINERGIC poisoning causes DRY skin (and dry mouth, urinary retention, reduced bowel sounds) — "sweaty vs dry" is the key discriminator',
      why: 'The two look similar but the sweaty-vs-dry skin (and bowel/bladder activity) separates them, changing the likely agent and management — a classic exam and bedside distinction.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An agitated, hypertensive, tachycardic patient with dilated pupils and profuse sweating most likely has which toxidrome?',
      options: [
        { id: 'a', text: 'Anticholinergic' },
        { id: 'b', text: 'Sympathomimetic' },
        { id: 'c', text: 'Opioid' },
        { id: 'd', text: 'Cholinergic' },
      ],
      answerId: 'b',
      explanation: 'The sympathomimetic toxidrome (cocaine, amphetamines) causes agitation, hypertension, tachycardia, mydriasis and diaphoresis. The sweating (and preserved bowel sounds) distinguishes it from the anticholinergic toxidrome, which produces dry skin, urinary retention and reduced bowel sounds.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Activated charcoal is NOT useful for poisoning with which of the following?',
      options: [
        { id: 'a', text: 'Aspirin' },
        { id: 'b', text: 'Iron (and lithium/alcohols)' },
        { id: 'c', text: 'Many organic drugs' },
        { id: 'd', text: 'Paracetamol given early' },
      ],
      answerId: 'b',
      explanation: 'Activated charcoal adsorbs many organic toxins if given early, but it does not bind iron, lithium, alcohols, hydrocarbons or corrosives. Enhanced elimination (urine alkalinisation, haemodialysis for "I-STUMBLE" toxins) and specific antidotes are used as appropriate.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default toxidromesPoisoningApproach;
