import type { Lecture } from '../../lib/types';

export const nmjDrugsDisorders: Lecture = {
  id: 'nmj-drugs-disorders',
  title: 'NMJ Pharmacology & Disorders',
  system: 'msk',
  source: 'L2 — The Neuromuscular Junction',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'MSK' },
    { kind: 'lecture', label: 'L2 Neuromuscular Junction' },
    { kind: 'mechanism', label: 'Block each NMJ step' },
    { kind: 'exam', label: 'Curare · botulinum · MG' },
  ],

  highYield: [
    '**Each step of NMJ transmission is a drug/toxin target.** **Block ACh release presynaptically → botulinum toxin** (cleaves SNARE proteins → no vesicle fusion) → **flaccid paralysis** (used therapeutically for spasticity, dystonia, cosmetics). **Lambert-Eaton myasthenic syndrome (LEMS)** = antibodies against presynaptic **voltage-gated Ca²⁺ channels** → reduced ACh release (often paraneoplastic, small-cell lung cancer).',
    '**Block the postsynaptic nicotinic receptor → non-depolarising neuromuscular blockers (curare/"-curium", e.g. tubocurarine, rocuronium)** — competitive antagonists → **flaccid paralysis**; used for surgical relaxation and **reversed by AChE inhibitors** (more ACh outcompetes the blocker).',
    '**Depolarising blocker → succinylcholine** — a nicotinic *agonist* that persistently depolarises the end plate → initial fasciculations then flaccid paralysis (**Phase I**); it is **NOT reversed by AChE inhibitors**.',
    '**Inhibit acetylcholinesterase → AChE inhibitors** (neostigmine, pyridostigmine, physostigmine; **organophosphate nerve agents/insecticides**) → **more ACh in the cleft**. Therapeutic in myasthenia gravis and to reverse non-depolarising blockade; in overdose (nerve agents) → cholinergic crisis.',
    '**Myasthenia gravis (MG)** = **autoantibodies against the postsynaptic nicotinic ACh receptor** → fewer functional receptors → the safety factor fails → **fatigable weakness** (ptosis, diplopia, worse with use/late in the day). Treated with AChE inhibitors + immunosuppression; associated with **thymic hyperplasia/thymoma**. (Contrast LEMS, which improves with use.)',
  ],

  mechanism: {
    title: 'Target a step → predict the effect',
    steps: [
      { id: 's1', label: 'Botulinum → blocks ACh release → flaccid paralysis', emphasis: 'key' },
      { id: 's2', label: 'LEMS → anti-Ca²⁺ channel → less ACh (paraneoplastic)', emphasis: 'key' },
      { id: 's3', label: 'Curare (non-depol) → blocks nicotinic receptor; reversed by AChE-I', emphasis: 'key' },
      { id: 's4', label: 'Succinylcholine → depolarising block; NOT reversed by AChE-I' },
      { id: 's5', label: 'MG → anti-AChR autoantibodies → fatigable weakness', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Fatigable ptosis/diplopia, worse with use', mechanism: 'Myasthenia gravis (anti-nicotinic-AChR antibodies)', significance: 'key' },
    { sign: 'Proximal weakness improving with repeated use', mechanism: 'LEMS (anti-Ca²⁺ channel; paraneoplastic, SCLC)', significance: 'key' },
    { sign: 'Flaccid paralysis + descending weakness after canned food', mechanism: 'Botulinum toxin (blocks ACh release)', significance: 'key' },
    { sign: 'Non-depolarising block reversed by neostigmine', mechanism: 'AChE inhibition raises ACh to outcompete the blocker', significance: 'supportive' },
    { sign: 'Cholinergic crisis (SLUDGE) from an organophosphate', mechanism: 'AChE inhibition → excess ACh everywhere', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Toxin blocking ACh release → flaccid paralysis', meaning: 'Botulinum toxin' },
    { clue: 'Autoantibody against the nicotinic AChR', meaning: 'Myasthenia gravis' },
    { clue: 'Weakness that improves with repeated effort + lung cancer', meaning: 'Lambert-Eaton (anti-Ca²⁺ channel)' },
    { clue: 'Drug reversing non-depolarising blockade', meaning: 'An AChE inhibitor (e.g. neostigmine)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'These agents are surgical (muscle relaxants), therapeutic (botulinum, pyridostigmine for MG), and toxicological (nerve agents). MG/LEMS are core neurology; MG overlaps HNS-2. Underlying transmission: [[nmj-structure-transmission]].' },
  ],

  mnemonics: [
    { hook: 'Botulinum Blocks release (flaccid); Curare blocks receptor (reversible by AChE-I); MG = anti-receptor Antibody', expansion: ['LEMS = anti-Ca²⁺ channel'] },
    { hook: 'MG worsens with use (fatigable); LEMS improves with use', expansion: ['Opposite fatigue patterns'] },
  ],

  traps: [
    {
      questionCategory: 'MG vs LEMS with repeated use',
      wrongInstinct: 'Both myasthenia gravis and Lambert-Eaton syndrome worsen with repeated muscle use',
      rightAnswer: 'MG (postsynaptic receptor loss) gets WORSE with use (fatigable); LEMS (presynaptic Ca²⁺-channel/ACh-release defect) IMPROVES with use',
      why: 'In LEMS, repeated activity builds up presynaptic Ca²⁺ → more ACh release → temporary improvement; in MG the receptor deficit only fatigues further.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient has fatigable ptosis and diplopia that worsen through the day. The most likely cause is autoantibodies against:',
      options: [
        { id: 'a', text: 'Presynaptic voltage-gated Ca²⁺ channels' },
        { id: 'b', text: 'Postsynaptic nicotinic acetylcholine receptors' },
        { id: 'c', text: 'Acetylcholinesterase' },
        { id: 'd', text: 'Voltage-gated Na⁺ channels' },
      ],
      answerId: 'b',
      explanation: 'Myasthenia gravis is caused by antibodies against the postsynaptic nicotinic ACh receptor, reducing functional receptors and causing fatigable weakness. Anti-Ca²⁺-channel antibodies cause LEMS (which improves with use).',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Botulinum toxin causes flaccid paralysis by:',
      options: [
        { id: 'a', text: 'Blocking postsynaptic nicotinic receptors' },
        { id: 'b', text: 'Preventing acetylcholine release from the nerve terminal' },
        { id: 'c', text: 'Inhibiting acetylcholinesterase' },
        { id: 'd', text: 'Persistently depolarising the end plate' },
      ],
      answerId: 'b',
      explanation: 'Botulinum toxin cleaves SNARE proteins, blocking ACh vesicle release presynaptically → flaccid paralysis. Curare blocks the receptor; succinylcholine causes depolarising block; AChE inhibitors raise ACh.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default nmjDrugsDisorders;
