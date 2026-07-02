import type { Lecture } from '../../lib/types';

export const autonomicNeurotransmittersReceptors: Lecture = {
  id: 'autonomic-neurotransmitters-receptors',
  title: 'Autonomic Neurotransmitters & Receptors',
  system: 'physiology',
  source: 'L9 — Autonomic Nervous System',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'L9 Autonomic Nervous System' },
    { kind: 'mechanism', label: 'ACh & noradrenaline' },
    { kind: 'exam', label: 'Cholinergic vs adrenergic' },
  ],

  highYield: [
    '**All preganglionic autonomic fibres (both divisions) release acetylcholine onto NICOTINIC receptors** in the ganglion. The **postganglionic** transmitter differs: **parasympathetic postganglionic → ACh onto MUSCARINIC receptors**; **sympathetic postganglionic → noradrenaline onto ADRENERGIC receptors**.',
    '**Cholinergic receptors.** **Nicotinic** = ligand-gated ion channels (fast) — at all autonomic ganglia, the adrenal medulla, and the skeletal NMJ. **Muscarinic** = GPCRs (M1–M5) — at parasympathetic target organs (heart M2 → ↓rate; glands/smooth muscle M3 → secretion/contraction).',
    '**Adrenergic receptors (GPCRs)** for noradrenaline/adrenaline: **α1** (vasoconstriction, Gq/IP₃), **α2** (presynaptic inhibition, Gi), **β1** (heart: ↑rate & force, Gs/cAMP), **β2** (bronchodilation, vasodilation, Gs), **β3** (lipolysis). Drug logic follows: β1-blockers slow the heart; β2-agonists (salbutamol) dilate airways.',
    '**Two classic exceptions to the sympathetic-noradrenergic rule:** **sweat glands** receive **sympathetic CHOLINERGIC** fibres (ACh onto muscarinic receptors), and the **adrenal medulla** is driven by preganglionic ACh (nicotinic) to release adrenaline into the blood.',
    '**The somatic motor system (for contrast)** is a single neuron releasing **ACh onto nicotinic receptors** at the skeletal NMJ — no ganglion, always excitatory. Knowing the NT–receptor map lets you predict every autonomic drug effect.',
  ],

  mechanism: {
    title: 'Map the transmitter and receptor at each synapse',
    steps: [
      { id: 's1', label: 'All preganglionic → ACh → nicotinic (ganglion)', emphasis: 'key' },
      { id: 's2', label: 'Parasympathetic postganglionic → ACh → muscarinic', emphasis: 'key' },
      { id: 's3', label: 'Sympathetic postganglionic → noradrenaline → adrenergic (α/β)', emphasis: 'key' },
      { id: 's4', label: 'β1 heart, β2 lungs/vessels, α1 vasoconstrict' },
      { id: 's5', label: 'Exceptions: sweat glands (sympathetic cholinergic); adrenal medulla' },
    ],
  },

  examFindings: [
    { sign: 'Ganglionic transmission blocked by a nicotinic antagonist', mechanism: 'All preganglionic fibres use ACh → nicotinic', significance: 'key' },
    { sign: 'Atropine (muscarinic antagonist) raises heart rate', mechanism: 'Blocks vagal M2 → removes parasympathetic slowing', significance: 'key' },
    { sign: 'β1-blocker slows the heart', mechanism: 'Blocks sympathetic β1 (cAMP) in the SA node', significance: 'key' },
    { sign: 'Salbutamol (β2-agonist) dilates bronchi', mechanism: 'β2 adrenergic → bronchial smooth-muscle relaxation', significance: 'supportive' },
    { sign: 'Sweating driven by acetylcholine', mechanism: 'Sympathetic cholinergic fibres (the exception)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Receptor at every autonomic ganglion', meaning: 'Nicotinic (ACh)' },
    { clue: 'Receptor at parasympathetic target organs', meaning: 'Muscarinic (ACh)' },
    { clue: 'Receptor for noradrenaline at the heart', meaning: 'β1 adrenergic' },
    { clue: 'Sympathetic fibres that are cholinergic', meaning: 'Those to sweat glands' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'This NT–receptor map is the foundation of autonomic pharmacology (β-blockers, β2-agonists, atropine, adrenaline in anaphylaxis, anticholinesterases). It builds on receptor/second-messenger physiology ([[cell-signaling-modes-receptors]]) and ANS anatomy ([[autonomic-sympathetic-parasympathetic]]).' },
  ],

  mnemonics: [
    { hook: 'Preganglionic = ACh/Nicotinic (always); Para post = ACh/Muscarinic; Symp post = NorAdrenaline/adrenergic', expansion: ['Except sweat glands (symp cholinergic)'] },
    { hook: 'β1 = 1 heart; β2 = 2 lungs; α1 = squeeze vessels', expansion: ['Drug effects follow the receptor'] },
  ],

  traps: [
    {
      questionCategory: 'Transmitter at sweat glands',
      wrongInstinct: 'All sympathetic postganglionic fibres release noradrenaline',
      rightAnswer: 'Sympathetic fibres to SWEAT GLANDS are the exception — they release acetylcholine (sympathetic cholinergic) onto muscarinic receptors',
      why: 'Most sympathetic postganglionic fibres are noradrenergic, but sweat glands (and the adrenal medulla pathway) break the rule.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The neurotransmitter released by ALL preganglionic autonomic neurons (both sympathetic and parasympathetic) acting on ganglionic receptors is:',
      options: [
        { id: 'a', text: 'Noradrenaline on adrenergic receptors' },
        { id: 'b', text: 'Acetylcholine on nicotinic receptors' },
        { id: 'c', text: 'Acetylcholine on muscarinic receptors' },
        { id: 'd', text: 'Dopamine on D1 receptors' },
      ],
      answerId: 'b',
      explanation: 'Every preganglionic autonomic fibre releases ACh onto nicotinic receptors in the ganglion. Parasympathetic postganglionic fibres then use ACh (muscarinic); most sympathetic postganglionic fibres use noradrenaline (adrenergic).',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A β1-adrenergic receptor antagonist lowers heart rate because β1 receptors in the heart normally:',
      options: [
        { id: 'a', text: 'Are activated by acetylcholine' },
        { id: 'b', text: 'Mediate sympathetic increases in rate and force (via cAMP)' },
        { id: 'c', text: 'Cause bronchodilation' },
        { id: 'd', text: 'Produce vasoconstriction' },
      ],
      answerId: 'b',
      explanation: 'Cardiac β1 receptors respond to sympathetic noradrenaline by raising heart rate and contractility (Gs/cAMP); blocking them slows the heart. β2 mediates bronchodilation; α1 vasoconstriction.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default autonomicNeurotransmittersReceptors;
