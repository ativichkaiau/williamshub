import type { Lecture } from '../../lib/types';

export const secondMessengerSystems: Lecture = {
  id: 'second-messenger-systems',
  title: 'Second Messengers & Signal Transduction',
  system: 'physiology',
  source: 'L7 — Cell Communication',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'L7 Cell Communication' },
    { kind: 'mechanism', label: 'cAMP · IP3/DAG · Ca²⁺' },
    { kind: 'exam', label: 'Gs/Gi/Gq pathways' },
  ],

  highYield: [
    '**Second messengers relay and AMPLIFY signals inside the cell** after a surface receptor (a "first messenger" binds outside). One activated receptor → many second-messenger molecules → many downstream effectors → a large, fast response.',
    '**The cAMP pathway (Gs/Gi).** A GPCR activates a **G protein**: **Gs → activates adenylyl cyclase → ↑cAMP → activates protein kinase A (PKA)**; **Gi → inhibits adenylyl cyclase → ↓cAMP**. Example: β-adrenergic (Gs) vs muscarinic M2 (Gi). cAMP is broken down by **phosphodiesterase** (inhibited by caffeine).',
    '**The IP₃/DAG pathway (Gq).** **Gq → activates phospholipase C → cleaves PIP₂ into IP₃ + DAG.** **IP₃ releases Ca²⁺ from the endoplasmic reticulum**; **DAG activates protein kinase C (PKC)**. Example: α1-adrenergic, muscarinic M1/M3.',
    '**Ca²⁺ is a universal second messenger:** released from the ER (via IP₃) or entering through channels, it binds **calmodulin** and triggers contraction, secretion, and enzyme activation. Intracellular Ca²⁺ is kept very low at rest so a small rise is a strong signal.',
    '**The signal must be turned off:** **G proteins hydrolyse GTP** (intrinsic timer), **phosphodiesterases** degrade cAMP/cGMP, **phosphatases** reverse phosphorylation, and receptors **desensitise/internalise**. This makes responses transient and tunable.',
  ],

  mechanism: {
    title: 'Receptor → G protein → messenger → kinase → response',
    steps: [
      { id: 's1', label: 'Gs → adenylyl cyclase → ↑cAMP → PKA', emphasis: 'key' },
      { id: 's2', label: 'Gi → ↓cAMP' },
      { id: 's3', label: 'Gq → PLC → IP₃ (Ca²⁺ release) + DAG (PKC)', emphasis: 'key' },
      { id: 's4', label: 'Ca²⁺/calmodulin = universal messenger', emphasis: 'key' },
      { id: 's5', label: 'Termination: GTP hydrolysis, PDE, phosphatases, desensitisation' },
    ],
  },

  examFindings: [
    { sign: 'β-adrenergic receptor raising cAMP', mechanism: 'Gs → adenylyl cyclase → cAMP → PKA', significance: 'key' },
    { sign: 'α1/M1/M3 receptor releasing intracellular Ca²⁺', mechanism: 'Gq → PLC → IP₃ → ER Ca²⁺ release (+ DAG/PKC)', significance: 'key' },
    { sign: 'Caffeine prolonging cAMP effects', mechanism: 'Phosphodiesterase inhibition (cAMP not degraded)', significance: 'supportive' },
    { sign: 'One receptor → large intracellular response', mechanism: 'Second-messenger amplification cascade', significance: 'key' },
    { sign: 'Ca²⁺ binding calmodulin to trigger a response', mechanism: 'Ca²⁺ as a universal second messenger', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Enzyme that makes cAMP', meaning: 'Adenylyl cyclase (activated by Gs)' },
    { clue: 'Products of PIP₂ cleavage by phospholipase C', meaning: 'IP₃ and DAG' },
    { clue: 'Second messenger releasing Ca²⁺ from the ER', meaning: 'IP₃' },
    { clue: 'How G-protein signalling switches itself off', meaning: 'GTP hydrolysis (intrinsic GTPase)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Second-messenger pathways are drug targets: β-agonists/antagonists (cAMP), PDE inhibitors (sildenafil→cGMP, milrinone→cAMP), and toxins (cholera toxin locks Gs on → ↑cAMP → secretory diarrhoea). Receptor classes upstream: [[cell-signaling-modes-receptors]].' },
  ],

  mnemonics: [
    { hook: 'Gs = Stimulate cAMP; Gi = Inhibit cAMP; Gq = "cue" PLC → IP₃/DAG/Ca²⁺', expansion: ['cAMP→PKA; DAG→PKC'] },
    { hook: 'Second messengers AMPLIFY (one receptor → many molecules)', expansion: ['Ca²⁺ = universal'] },
  ],

  traps: [
    {
      questionCategory: 'What IP₃ does',
      wrongInstinct: 'IP₃ activates protein kinase C at the membrane',
      rightAnswer: 'IP₃ releases Ca²⁺ from the ER; DAG is the one that activates protein kinase C (PKC)',
      why: 'From the Gq/PLC split: IP₃ → Ca²⁺ release (cytosolic), DAG → membrane-bound PKC. Don\'t swap their roles.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Activation of a Gq-coupled receptor leads to phospholipase C cleaving PIP₂ into IP₃ and DAG. The role of IP₃ is to:',
      options: [
        { id: 'a', text: 'Activate protein kinase A' },
        { id: 'b', text: 'Release Ca²⁺ from the endoplasmic reticulum' },
        { id: 'c', text: 'Increase cAMP' },
        { id: 'd', text: 'Activate adenylyl cyclase' },
      ],
      answerId: 'b',
      explanation: 'IP₃ diffuses to the ER and opens Ca²⁺ channels, raising cytosolic Ca²⁺; DAG activates protein kinase C. The cAMP pathway (PKA) is separate (Gs/adenylyl cyclase).',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A Gs-protein-coupled receptor increases intracellular cAMP by activating:',
      options: [
        { id: 'a', text: 'Phospholipase C' },
        { id: 'b', text: 'Adenylyl cyclase' },
        { id: 'c', text: 'Phosphodiesterase' },
        { id: 'd', text: 'Protein kinase C' },
      ],
      answerId: 'b',
      explanation: 'Gs activates adenylyl cyclase, which converts ATP to cAMP, activating PKA. Phosphodiesterase degrades cAMP; PLC/PKC belong to the Gq pathway.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default secondMessengerSystems;
