import type { Lecture } from '../../lib/types';

export const mushroomPoisoningSyndromes: Lecture = {
  id: 'mushroom-poisoning-syndromes',
  title: 'Toxic Mushroom Poisoning',
  system: 'microbiology',
  source: 'L21 — Fungal Toxins & Toxic Mushrooms',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Micro' },
    { kind: 'lecture', label: 'L21 Mushrooms' },
    { kind: 'mechanism', label: 'Amatoxin vs early-onset toxins' },
    { kind: 'exam', label: 'Late symptoms = deadly (Amanita)' },
  ],

  highYield: [
    'Toxic mushroom (macrofungi) poisoning is an ACUTE toxin ingestion. The single most useful triage rule is TIMING of symptom onset: EARLY symptoms (within ~6 hours) usually mean a LESS-lethal toxin, whereas DELAYED symptoms (>6 hours, especially GI symptoms starting after a latent period) are ominous — the mark of the DEADLY AMATOXIN-containing species.',
    'AMATOXIN (AMANITA PHALLOIDES "death cap", *A. virosa*, some Galerina/Lepiota): amanitin inhibits RNA POLYMERASE II → halts mRNA/protein synthesis, killing hepatocytes and renal tubular cells. Classic biphasic course: severe GI symptoms after a 6–24 h LATENT period → a deceptive "recovery" → then FULMINANT HEPATIC (and renal) FAILURE days later. Management is supportive/aggressive (fluids, activated charcoal, silibinin/N-acetylcysteine, possibly LIVER TRANSPLANT); high mortality.',
    'EARLY-onset syndromes are generally less deadly: MUSCARINE (*Inocybe/Clitocybe*) → cholinergic "SLUDGE" (salivation, lacrimation, urination, defecation, GI, emesis; miosis, bradycardia) — reversed by ATROPINE; PSILOCYBIN (hallucinogenic "magic mushrooms"); IBOTENIC ACID/muscimol (*Amanita muscaria* — GABAergic/anticholinergic delirium); GI irritant mushrooms (early vomiting/diarrhoea, self-limiting); and COPRINE/*Coprinus* (a disulfiram-like reaction with alcohol). Gyromitrin causes seizures (treated with pyridoxine).',
    'So the exam logic is: LATE-onset GI illness after a mushroom meal → suspect AMATOXIN (*Amanita*) hepatotoxicity (dangerous); EARLY onset → typically muscarinic/GI/hallucinogenic (usually survivable, symptomatic ± atropine for muscarine). Never let the deceptive latent recovery in amatoxin poisoning falsely reassure.',
    '**The take-home: mushroom poisoning triaged by TIMING — EARLY (<6 h) = usually LESS lethal (muscarine "SLUDGE"→atropine; psilocybin; GI irritant); DELAYED (>6 h) = DEADLY AMATOXIN (Amanita phalloides — inhibits RNA pol II → biphasic → FULMINANT LIVER FAILURE, ±transplant). Late symptoms are the danger sign.** Aflatoxin/mycotoxins are [[mycotoxins-aflatoxin]]; cholinergic pharmacology parallels autonomic drugs.',
  ],

  mechanism: {
    title: 'Triage by onset: EARLY (<6 h) usually less lethal (muscarine SLUDGE→atropine, psilocybin, GI); DELAYED (>6 h) = deadly amatoxin (Amanita phalloides, inhibits RNA pol II → biphasic fulminant liver failure)',
    steps: [
      { id: 's1', label: 'Key triage: TIMING — early (<6 h) usually less lethal; delayed (>6 h) ominous', emphasis: 'danger' },
      { id: 's2', label: 'Amatoxin (Amanita phalloides): inhibits RNA polymerase II → hepatocyte/renal death', emphasis: 'danger' },
      { id: 's3', label: 'Biphasic: GI after 6–24 h latent → false recovery → fulminant liver failure', emphasis: 'danger' },
      { id: 's4', label: 'Amatoxin Rx: supportive, charcoal, silibinin/NAC, possible liver transplant', emphasis: 'key' },
      { id: 's5', label: 'Early: muscarine → cholinergic SLUDGE (atropine); psilocybin; GI irritants', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Severe GI symptoms beginning 6–24 h after a mushroom meal, then a deceptive recovery', mechanism: 'Amatoxin poisoning (Amanita phalloides)', significance: 'key' },
    { sign: 'Fulminant hepatic failure days after mushroom ingestion', mechanism: 'Amanitin (RNA polymerase II inhibition)', significance: 'key' },
    { sign: 'Salivation, lacrimation, urination, defecation, miosis and bradycardia soon after eating', mechanism: 'Muscarine (cholinergic SLUDGE) — give atropine', significance: 'key' },
    { sign: 'Hallucinations within an hour of ingestion', mechanism: 'Psilocybin', significance: 'supportive' },
    { sign: 'A disulfiram-like reaction with alcohol after mushrooms', mechanism: 'Coprine (Coprinus)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The triage feature predicting severity', meaning: 'Timing of symptom onset (early vs delayed)' },
    { clue: 'The lethal toxin and its mechanism', meaning: 'Amatoxin — inhibits RNA polymerase II' },
    { clue: 'The mushroom of deadly hepatotoxicity', meaning: 'Amanita phalloides (death cap)' },
    { clue: 'The antidote for muscarinic (cholinergic) mushroom poisoning', meaning: 'Atropine' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Mushroom poisoning is triaged by symptom timing: early onset (<6 h) usually indicates a less-lethal toxin (muscarine — treat cholinergic SLUDGE with atropine; psilocybin; GI irritants), whereas delayed onset (>6 h) signals deadly amatoxin (*Amanita phalloides*), which inhibits RNA polymerase II and causes biphasic illness with a deceptive latent "recovery" before fulminant liver failure — managed aggressively with supportive care, silibinin/N-acetylcysteine and sometimes liver transplant. The dangerous trap is being reassured by the false recovery. Food mycotoxins (aflatoxin) are [[mycotoxins-aflatoxin]].' },
  ],

  mnemonics: [
    { hook: '"Late = Lethal" — delayed GI (>6 h) → Amanita/amatoxin (liver failure)', expansion: ['Amatoxin = RNA pol II inhibitor', 'Biphasic: false recovery'] },
    { hook: '"Early = muscarine SLUDGE → Atropine; psilocybin (trip)"', expansion: ['SLUDGE = cholinergic', 'Coprine = disulfiram-like'] },
  ],

  traps: [
    {
      questionCategory: 'The latent "recovery" in amatoxin poisoning',
      wrongInstinct: 'If a patient with GI symptoms after eating mushrooms improves after a day, the poisoning was mild and they can be discharged',
      rightAnswer: 'In AMATOXIN (Amanita) poisoning the illness is BIPHASIC: severe GI symptoms after a 6–24 h LATENT period are followed by a DECEPTIVE apparent RECOVERY, and then FULMINANT HEPATIC (and renal) FAILURE days later — so an apparent improvement must NOT be mistaken for cure; delayed-onset symptoms after a mushroom meal require admission, hepatic monitoring and specific management (silibinin/NAC, transplant referral)',
      why: 'The transient recovery phase falsely reassures, and discharging the patient during it can be fatal once fulminant liver failure develops; delayed-onset symptoms are the red flag mandating aggressive management.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which feature of mushroom poisoning most strongly predicts a potentially lethal (amatoxin) ingestion?',
      options: [
        { id: 'a', text: 'Onset of symptoms within 30 minutes' },
        { id: 'b', text: 'Delayed onset of GI symptoms (>6 hours), often with a later "recovery" phase' },
        { id: 'c', text: 'Immediate hallucinations' },
        { id: 'd', text: 'Early salivation and lacrimation' },
      ],
      answerId: 'b',
      explanation: 'Delayed (>6 hour) onset of severe GI symptoms is the hallmark of amatoxin-containing mushrooms (Amanita phalloides); a deceptive recovery phase precedes fulminant hepatic and renal failure. Early symptoms usually indicate less-lethal toxins.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Amatoxin from Amanita phalloides causes hepatocellular death by:',
      options: [
        { id: 'a', text: 'Inhibiting RNA polymerase II, halting mRNA/protein synthesis' },
        { id: 'b', text: 'Activating muscarinic receptors' },
        { id: 'c', text: 'Binding ergosterol' },
        { id: 'd', text: 'Blocking acetylcholine release' },
      ],
      answerId: 'a',
      explanation: 'Amanitin inhibits eukaryotic RNA polymerase II, arresting mRNA and protein synthesis, which kills metabolically active hepatocytes and renal tubular cells — producing the delayed, biphasic hepatic and renal failure of death-cap poisoning.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default mushroomPoisoningSyndromes;
