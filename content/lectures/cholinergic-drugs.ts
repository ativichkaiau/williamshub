import type { Lecture } from '../../lib/types';

export const cholinergicDrugs: Lecture = {
  id: 'cholinergic-drugs',
  title: 'Cholinergic (Parasympathetic) Drugs',
  system: 'pharmacology',
  source: 'L8 — Cholinergic (Parasympathetic) Drugs',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pharmacology' },
    { kind: 'lecture', label: 'L8 Cholinergic Drugs' },
    { kind: 'mechanism', label: 'Muscarinic/nicotinic; AChE inhibition' },
    { kind: 'exam', label: 'Cholinergic crisis; atropine' },
  ],

  highYield: [
    '**Cholinergic drugs act on ACETYLCHOLINE receptors — MUSCARINIC (GPCR, parasympathetic target organs + sweat glands) and NICOTINIC (ion channel, ganglia + neuromuscular junction). AGONISTS: DIRECT (bethanechol — bladder/gut atony; pilocarpine — glaucoma, dry mouth; muscarinic) and INDIRECT = ACETYLCHOLINESTERASE INHIBITORS that raise synaptic ACh (neostigmine, pyridostigmine — myasthenia gravis, reverse non-depolarising blockade; donepezil — Alzheimer; physostigmine — crosses BBB).**',
    '**Parasympathetic ("rest and digest") effects (the SLUDGE/DUMBELS picture): Salivation, Lacrimation, Urination, Defecation, GI motility, Emesis / Diaphoresis, Urination, Miosis, Bradycardia, Bronchoconstriction/secretions, Excitation (muscle/CNS), Lacrimation, Salivation. Overdose = CHOLINERGIC CRISIS (organophosphate poisoning) with these features + muscle weakness/paralysis and respiratory failure.**',
    '**ANTIMUSCARINICS (ANTICHOLINERGICS) block muscarinic receptors → the OPPOSITE: ATROPINE (bradycardia, organophosphate antidote, mydriasis), ipratropium/tiotropium (COPD/asthma), oxybutynin (overactive bladder), scopolamine (motion sickness), benztropine (Parkinson/EPS). Antimuscarinic toxidrome = "hot as a hare, dry as a bone, red as a beet, blind as a bat, mad as a hatter" (hyperthermia, dry, flushed, mydriasis/blurred, delirium; urinary retention).**',
    '**ORGANOPHOSPHATE (insecticide/nerve-agent) poisoning IRREVERSIBLY inhibits AChE → cholinergic crisis; treat with ATROPINE (blocks muscarinic effects) PLUS PRALIDOXIME (2-PAM — reactivates AChE if given before "ageing"). Nicotinic effects (weakness, fasciculations) are NOT relieved by atropine — pralidoxime and supportive ventilation address these.**',
    '**The take-home: direct agonists (bethanechol/pilocarpine) and AChE inhibitors (neostigmine/pyridostigmine/donepezil) BOOST cholinergic tone (SLUDGE; myasthenia, glaucoma, bladder); antimuscarinics (atropine, ipratropium, oxybutynin) BLOCK it (dry/hot/mydriasis). Organophosphate poisoning → atropine + pralidoxime.** The underlying autonomic wiring is in HNS-1 ([[autonomic-nervous-system]]); adrenergic drugs oppose these in [[adrenergic-drugs]]; atropine as an antidote in [[antidotes-principles]].',
  ],

  mechanism: {
    title: 'Agonists/AChE inhibitors ↑ACh (SLUDGE, myasthenia); antimuscarinics block (dry/hot); organophosphate → atropine + pralidoxime',
    steps: [
      { id: 's1', label: 'ACh receptors: muscarinic (GPCR, organs) + nicotinic (ganglia/NMJ)', emphasis: 'key' },
      { id: 's2', label: 'Direct agonists (bethanechol/pilocarpine) + AChE inhibitors (neostigmine/pyridostigmine/donepezil) ↑ACh', emphasis: 'key' },
      { id: 's3', label: 'Excess = cholinergic crisis (SLUDGE + weakness/respiratory failure)', emphasis: 'danger' },
      { id: 's4', label: 'Antimuscarinics (atropine, ipratropium, oxybutynin) → dry, hot, mydriasis, retention', emphasis: 'key' },
      { id: 's5', label: 'Organophosphate poisoning: atropine (muscarinic) + pralidoxime (reactivate AChE before ageing)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'SLUDGE, miosis, bradycardia, bronchorrhoea, fasciculations after insecticide exposure', mechanism: 'Organophosphate (irreversible AChE inhibition) — cholinergic crisis', significance: 'key' },
    { sign: 'Improved strength in myasthenia gravis with an oral drug', mechanism: 'Pyridostigmine (AChE inhibitor)', significance: 'key' },
    { sign: '"Hot, dry, red, blind, mad" with urinary retention', mechanism: 'Antimuscarinic (anticholinergic) toxidrome', significance: 'key' },
    { sign: 'Bronchodilation in COPD without much systemic effect', mechanism: 'Inhaled antimuscarinic (ipratropium/tiotropium)', significance: 'supportive' },
    { sign: 'Antidote pairing for nerve-agent poisoning', mechanism: 'Atropine + pralidoxime', significance: 'key' },
  ],

  investigations: [
    { clue: 'The two acetylcholine receptor types', meaning: 'Muscarinic (GPCR) and nicotinic (ion channel)' },
    { clue: 'The AChE inhibitor used for myasthenia gravis', meaning: 'Pyridostigmine (or neostigmine)' },
    { clue: 'The muscarinic antagonist used as an antidote and for bradycardia', meaning: 'Atropine' },
    { clue: 'The agent that reactivates acetylcholinesterase in OP poisoning', meaning: 'Pralidoxime (2-PAM)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Cholinergic pharmacology maps directly onto the parasympathetic system ([[autonomic-nervous-system]]): boosting ACh treats myasthenia (pyridostigmine), glaucoma (pilocarpine) and atony (bethanechol), while blocking it treats COPD, overactive bladder and bradycardia (atropine). Organophosphate poisoning (a common toxicology emergency) needs atropine + pralidoxime ([[antidotes-principles]]); antimuscarinic side-effects underlie many drug adverse effects. Adrenergic drugs give the sympathetic counterpart ([[adrenergic-drugs]]).' },
  ],

  mnemonics: [
    { hook: 'Cholinergic excess = "SLUDGE + DUMBELS" (wet everywhere); antimuscarinic = "dry, hot, red, blind, mad"', expansion: ['AChE inhibitors ↑ACh', 'Atropine reverses muscarinic'] },
    { hook: 'OP poisoning: "Atropine dries the muscarinic; Pralidoxime revives the enzyme"', expansion: ['Give 2-PAM before ageing', 'Nicotinic weakness needs ventilation'] },
  ],

  traps: [
    {
      questionCategory: 'What atropine does and does not treat in OP poisoning',
      wrongInstinct: 'Atropine alone fully reverses organophosphate poisoning',
      rightAnswer: 'Atropine only blocks the MUSCARINIC effects (secretions, bradycardia, bronchoconstriction) — it does NOT relieve the NICOTINIC effects (muscle weakness, fasciculations, paralysis, respiratory muscle failure); those require PRALIDOXIME (to reactivate acetylcholinesterase before "ageing") plus airway/ventilatory support',
      why: 'Relying on atropine alone leaves the life-threatening nicotinic neuromuscular failure untreated; pralidoxime and ventilation are essential, and pralidoxime must be given early before the enzyme–OP bond "ages" irreversibly.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A farmer presents with pinpoint pupils, profuse salivation, bronchorrhoea, bradycardia and muscle fasciculations after pesticide exposure. The best initial pharmacologic management is:',
      options: [
        { id: 'a', text: 'Pyridostigmine' },
        { id: 'b', text: 'Atropine plus pralidoxime' },
        { id: 'c', text: 'Bethanechol' },
        { id: 'd', text: 'Neostigmine' },
      ],
      answerId: 'b',
      explanation: 'This is a cholinergic crisis from organophosphate (AChE inhibitor) poisoning. Atropine blocks the muscarinic effects, and pralidoxime reactivates acetylcholinesterase (given early, before ageing) to address the nicotinic neuromuscular effects. Giving more cholinergic drug (pyridostigmine/neostigmine/bethanechol) would worsen it.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'Which drug is an antimuscarinic used as an inhaled bronchodilator in COPD?',
      options: [
        { id: 'a', text: 'Pilocarpine' },
        { id: 'b', text: 'Ipratropium' },
        { id: 'c', text: 'Bethanechol' },
        { id: 'd', text: 'Pyridostigmine' },
      ],
      answerId: 'b',
      explanation: 'Ipratropium (and tiotropium) are inhaled antimuscarinic agents that block muscarinic-mediated bronchoconstriction, producing bronchodilation with limited systemic absorption. Pilocarpine and bethanechol are muscarinic agonists, and pyridostigmine is an acetylcholinesterase inhibitor.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default cholinergicDrugs;
