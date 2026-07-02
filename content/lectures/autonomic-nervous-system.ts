import type { Lecture } from '../../lib/types';

export const autonomicNervousSystem: Lecture = {
  id: 'autonomic-nervous-system',
  title: 'Autonomic Nervous System',
  system: 'neuro',
  source: 'L23 — Integrative Functions of the Brain',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L23 Autonomic NS' },
    { kind: 'mechanism', label: 'Sympathetic vs parasympathetic' },
    { kind: 'exam', label: 'Outflow, transmitters, receptors' },
  ],

  highYield: [
    '**The AUTONOMIC nervous system controls involuntary visceral function (heart, glands, smooth muscle) through a TWO-NEURON motor chain — a PREGANGLIONIC neuron (CNS) synapsing in a ganglion on a POSTGANGLIONIC neuron (to the organ) — with two opposing divisions, SYMPATHETIC and PARASYMPATHETIC, coordinated by the HYPOTHALAMUS** ([[diencephalon-thalamus-hypothalamus]]).',
    '**SYMPATHETIC = "fight or flight" (THORACOLUMBAR outflow, T1–L2): SHORT preganglionic → paravertebral/prevertebral ganglia → LONG postganglionic. Effects: ↑heart rate/contractility, bronchodilation, pupil DILATION, ↓gut motility, sweating, and (via the adrenal MEDULLA) release of ADRENALINE into the blood.** The adrenal medulla is a modified sympathetic ganglion (neural crest — [[brain-vesicles-neural-crest]]).',
    '**PARASYMPATHETIC = "rest and digest" (CRANIOSACRAL outflow: CN III, VII, IX, X + S2–S4): LONG preganglionic → ganglia near/in the organ → SHORT postganglionic. Effects: ↓heart rate, bronchoconstriction, pupil CONSTRICTION, ↑gut motility/secretion, bladder emptying. The VAGUS (CN X) carries ~75% of all parasympathetic fibres.**',
    '**TRANSMITTERS/RECEPTORS: ALL preganglionic neurons (both divisions) release ACETYLCHOLINE onto NICOTINIC receptors in the ganglion. Parasympathetic POSTganglionic = ACETYLCHOLINE → MUSCARINIC receptors. Sympathetic POSTganglionic = NORADRENALINE → adrenergic (α/β) receptors — EXCEPT sweat glands (sympathetic but CHOLINERGIC/muscarinic).** This map is the basis of all autonomic pharmacology.',
    '**The take-home: two-neuron chain; sympathetic = thoracolumbar/short-pre-long-post/noradrenaline (fight-or-flight, adrenal medulla); parasympathetic = craniosacral/long-pre-short-post/muscarinic (rest-and-digest, vagus = ¾); all ganglia are nicotinic-cholinergic; sweat glands are the sympathetic-cholinergic exception.** The hypothalamus is the master controller ([[diencephalon-thalamus-hypothalamus]]); transmitter biology in [[cns-neurotransmission-systems]].',
  ],

  mechanism: {
    title: 'Two-neuron chain; sympathetic (thoracolumbar, NA) vs parasympathetic (craniosacral, ACh-muscarinic); ganglia nicotinic',
    steps: [
      { id: 's1', label: 'Two-neuron motor chain: preganglionic → ganglion → postganglionic → organ', emphasis: 'key' },
      { id: 's2', label: 'Sympathetic = THORACOLUMBAR (T1–L2); short pre / long post; fight-or-flight', emphasis: 'key' },
      { id: 's3', label: 'Parasympathetic = CRANIOSACRAL (III,VII,IX,X + S2–4); long pre / short post; vagus ¾', emphasis: 'key' },
      { id: 's4', label: 'ALL ganglia: ACh → NICOTINIC; parasympathetic postgang = ACh → MUSCARINIC', emphasis: 'key' },
      { id: 's5', label: 'Sympathetic postgang = NORADRENALINE (α/β) — EXCEPT sweat glands (cholinergic)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Tachycardia, pupil dilation, bronchodilation, sweating', mechanism: 'Sympathetic (fight-or-flight) activation', significance: 'key' },
    { sign: 'Bradycardia, pupil constriction, increased gut motility', mechanism: 'Parasympathetic (rest-and-digest) activation', significance: 'key' },
    { sign: 'Ptosis, miosis, anhidrosis of one side of the face', mechanism: 'Horner syndrome (sympathetic pathway lesion)', significance: 'key' },
    { sign: 'Circulating adrenaline surge in stress', mechanism: 'Adrenal medulla (modified sympathetic ganglion)', significance: 'supportive' },
    { sign: 'Sweating driven by sympathetic but blocked by antimuscarinics', mechanism: 'Sympathetic-cholinergic exception (sweat glands)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The spinal outflow of the sympathetic division', meaning: 'Thoracolumbar (T1–L2)' },
    { clue: 'The outflow of the parasympathetic division', meaning: 'Craniosacral (CN III, VII, IX, X and S2–S4)' },
    { clue: 'The receptor at ALL autonomic ganglia', meaning: 'Nicotinic (acetylcholine)' },
    { clue: 'The transmitter of most sympathetic postganglionic neurons', meaning: 'Noradrenaline (except sweat glands = acetylcholine)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The autonomic map underlies cardiovascular, pupillary, GI and bladder control and ALL autonomic pharmacology (cholinergics/anticholinergics, adrenergics/blockers) — e.g. Horner syndrome localises a sympathetic lesion, and the vagus dominates resting heart rate. The hypothalamus integrates it ([[diencephalon-thalamus-hypothalamus]]); the adrenal medulla is neural-crest ([[brain-vesicles-neural-crest]]); transmitter/receptor detail is in [[cns-neurotransmission-systems]]. Clinical sympathetic (Horner) findings appear in HNS-2 ([[pupillary-reflexes-horner]]).' },
  ],

  mnemonics: [
    { hook: '"Sympathetic = thoracoLumbar (fight/flight); Parasympathetic = cranioSacral (rest/digest)"', expansion: ['Sym: short pre/long post', 'Para: long pre/short post; vagus ¾'] },
    { hook: 'Receptors: "ganglia = Nicotinic (both); parasympathetic organ = Muscarinic; sympathetic organ = adrenergic"', expansion: ['Sweat glands = sympathetic but cholinergic', 'Adrenal medulla = circulating adrenaline'] },
  ],

  traps: [
    {
      questionCategory: 'Sweat gland innervation',
      wrongInstinct: 'Because sweating is a sympathetic "fight-or-flight" response, sweat glands must use noradrenaline like other sympathetic targets',
      rightAnswer: 'Sweat glands are the classic EXCEPTION: they are SYMPATHETIC but their postganglionic transmitter is ACETYLCHOLINE acting on MUSCARINIC receptors (sympathetic-cholinergic) — which is why antimuscarinic drugs reduce sweating and why this target behaves pharmacologically like a parasympathetic one despite being anatomically sympathetic',
      why: 'This exception explains anhidrosis with anticholinergics and the sweating component of Horner syndrome, and is a favourite exam distinction from the noradrenergic rule for sympathetic targets.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The parasympathetic nervous system has which anatomical outflow?',
      options: [
        { id: 'a', text: 'Thoracolumbar (T1–L2)' },
        { id: 'b', text: 'Craniosacral (CN III, VII, IX, X and S2–S4)' },
        { id: 'c', text: 'Cervical only' },
        { id: 'd', text: 'The entire spinal cord' },
      ],
      answerId: 'b',
      explanation: 'The parasympathetic ("rest and digest") division has a craniosacral outflow — cranial nerves III, VII, IX and X plus sacral segments S2–S4 — with the vagus (X) carrying about three-quarters of all parasympathetic fibres. The sympathetic division is thoracolumbar (T1–L2).',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'At which site do BOTH sympathetic and parasympathetic divisions use acetylcholine acting on nicotinic receptors?',
      options: [
        { id: 'a', text: 'The postganglionic neuron–target organ synapse' },
        { id: 'b', text: 'The autonomic ganglion (preganglionic → postganglionic)' },
        { id: 'c', text: 'Only sympathetic targets' },
        { id: 'd', text: 'Only the adrenal cortex' },
      ],
      answerId: 'b',
      explanation: 'All preganglionic autonomic neurons — sympathetic and parasympathetic — release acetylcholine onto nicotinic receptors at the ganglion. The divisions then differ at the target: parasympathetic postganglionic fibres use acetylcholine (muscarinic), while most sympathetic postganglionic fibres use noradrenaline.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default autonomicNervousSystem;
