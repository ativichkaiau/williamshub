import type { Lecture } from '../../lib/types';
import { SYNAPTIC_TRANSMISSION } from '../../lib/figures';

export const neurotransmittersTypesLifecycle: Lecture = {
  id: 'neurotransmitters-types-lifecycle',
  title: 'Neurotransmitters: Types & Their Life Cycle',
  system: 'physiology',
  source: 'L6 — Neurotransmitters & Neuromodulators',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'L6 Neurotransmitters' },
    { kind: 'mechanism', label: 'Release & removal' },
    { kind: 'exam', label: 'NT classes · clearance' },
  ],

  highYield: [
    '**The neurotransmitter (NT) life cycle at a chemical synapse:** synthesis → packaging into vesicles → an AP opens **voltage-gated Ca²⁺ channels → Ca²⁺ entry triggers vesicle fusion and NT release** → NT diffuses across the cleft → binds postsynaptic receptors → then is **removed** to terminate the signal.',
    '**NT removal happens three ways:** (1) **reuptake** into the presynaptic terminal (dopamine, serotonin, noradrenaline — the target of SSRIs and cocaine), (2) **enzymatic degradation** in the cleft (**acetylcholine → acetylcholinesterase**), and (3) **diffusion** away. Removal is essential to reset the synapse.',
    '**Major NT classes.** **Acetylcholine (ACh)** — NMJ, autonomic, CNS. **Amino acids:** **glutamate** (main excitatory), **GABA and glycine** (main inhibitory). **Biogenic monoamines:** dopamine, noradrenaline, serotonin, histamine (mood, arousal, reward). **Neuropeptides** (e.g. substance P, endorphins). Plus gases (NO).',
    '**A single NT can be excitatory or inhibitory depending on its RECEPTOR**, not the molecule itself — e.g. ACh excites skeletal muscle (nicotinic) but slows the heart (muscarinic). The receptor and its ion channel determine the effect.',
    '**Neuromodulators** act more slowly and diffusely than classical fast NTs — they **modulate the strength/likelihood of transmission** (often via metabotropic receptors and second messengers) rather than directly opening ion channels; many monoamines and peptides act this way.',
  ],

  mechanism: {
    title: 'Synthesise → Ca²⁺-triggered release → bind → clear',
    steps: [
      { id: 's1', label: 'AP → voltage-gated Ca²⁺ entry → vesicle fusion', emphasis: 'key' },
      { id: 's2', label: 'NT released into cleft → binds postsynaptic receptor', emphasis: 'key' },
      { id: 's3', label: 'Removal: reuptake / enzyme (AChE) / diffusion', emphasis: 'key' },
      { id: 's4', label: 'Classes: ACh, glutamate/GABA/glycine, monoamines, peptides' },
      { id: 's5', label: 'Effect set by the RECEPTOR, not the NT; neuromodulators = slow/diffuse' },
    ],
  },

  examFindings: [
    { sign: 'Ca²⁺ influx triggers NT release', mechanism: 'Voltage-gated Ca²⁺ channels at the terminal', significance: 'key' },
    { sign: 'ACh cleared by acetylcholinesterase', mechanism: 'Enzymatic degradation in the cleft', significance: 'key' },
    { sign: 'SSRIs raise synaptic serotonin', mechanism: 'Block serotonin reuptake transporter', significance: 'supportive' },
    { sign: 'Glutamate excitatory, GABA/glycine inhibitory', mechanism: 'Main CNS excitatory vs inhibitory amino-acid NTs', significance: 'key' },
    { sign: 'ACh excites muscle but slows heart', mechanism: 'Same NT, different receptors (nicotinic vs muscarinic)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Ion whose entry triggers vesicle fusion', meaning: 'Ca²⁺' },
    { clue: 'Enzyme terminating acetylcholine signalling', meaning: 'Acetylcholinesterase' },
    { clue: 'Main excitatory CNS neurotransmitter', meaning: 'Glutamate' },
    { clue: 'How SSRIs increase synaptic serotonin', meaning: 'Blocking reuptake' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'NT handling is the great pharmacological lever: SSRIs (reuptake), acetylcholinesterase inhibitors (myasthenia, Alzheimer, nerve agents), L-DOPA (dopamine). Postsynaptic receptor effects and integration: [[synaptic-transmission-epsp-ipsp]]. Overlaps CNS pharmacology in HNS-2.' },
  ],

  mnemonics: [
    { hook: 'Removal = "Reuptake, Rip apart (enzyme), Run off (diffuse)"', expansion: ['ACh → esterase; monoamines → reuptake'] },
    { hook: 'Glutamate = Go (excite); GABA/Glycine = Ground (inhibit)', expansion: ['Effect set by receptor'] },
  ],

  traps: [
    {
      questionCategory: 'Is a neurotransmitter inherently excitatory?',
      wrongInstinct: 'Acetylcholine is always excitatory because it activates muscle',
      rightAnswer: 'The EFFECT depends on the RECEPTOR: ACh excites skeletal muscle (nicotinic) but inhibits/slows the heart (muscarinic)',
      why: 'A neurotransmitter\'s action is determined by the postsynaptic receptor and its ion channel, not the molecule alone.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Neurotransmitter release from the presynaptic terminal is triggered by the entry of which ion?',
      options: [
        { id: 'a', text: 'Na⁺' },
        { id: 'b', text: 'K⁺' },
        { id: 'c', text: 'Ca²⁺' },
        { id: 'd', text: 'Cl⁻' },
      ],
      answerId: 'c',
      explanation: 'The action potential opens voltage-gated Ca²⁺ channels; Ca²⁺ influx triggers synaptic vesicle fusion and neurotransmitter release into the cleft.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Acetylcholine\'s action at the synapse is terminated primarily by:',
      options: [
        { id: 'a', text: 'Reuptake into the presynaptic terminal' },
        { id: 'b', text: 'Enzymatic hydrolysis by acetylcholinesterase' },
        { id: 'c', text: 'Endocytosis by the postsynaptic cell' },
        { id: 'd', text: 'Active transport into glia' },
      ],
      answerId: 'b',
      explanation: 'ACh is broken down in the cleft by acetylcholinesterase; monoamines like serotonin/dopamine are instead cleared mainly by reuptake.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Synaptic transmission', svg: SYNAPTIC_TRANSMISSION, caption: 'AP → Ca²⁺ in → vesicle fusion → NT release → receptor binding → EPSP/IPSP → removal (reuptake/enzyme/diffusion).' },
  ],
};

export default neurotransmittersTypesLifecycle;
