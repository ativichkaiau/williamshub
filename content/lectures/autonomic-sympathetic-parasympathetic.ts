import type { Lecture } from '../../lib/types';
import { ANS_OVERVIEW } from '../../lib/figures';

export const autonomicSympatheticParasympathetic: Lecture = {
  id: 'autonomic-sympathetic-parasympathetic',
  title: 'The Autonomic Nervous System: Sympathetic vs Parasympathetic',
  system: 'physiology',
  source: 'L9 — Autonomic Nervous System',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'L9 Autonomic Nervous System' },
    { kind: 'mechanism', label: 'Two-neuron autonomic pathway' },
    { kind: 'exam', label: 'Sympathetic vs parasympathetic' },
  ],

  highYield: [
    '**The ANS controls involuntary functions** (heart, smooth muscle, glands) to maintain homeostasis, via two divisions with **opposing** actions: **sympathetic ("fight or flight")** and **parasympathetic ("rest and digest").** Both use a **two-neuron** chain (pre- then postganglionic) with a **ganglion** between — unlike the single-neuron somatic motor system.',
    '**Sympathetic = thoracolumbar (T1–L2) outflow.** Ganglia lie **near the spinal cord** (paravertebral sympathetic chain) → **SHORT preganglionic, LONG postganglionic** fibres. It prepares the body for action: **↑heart rate, ↑BP, pupil dilation, bronchodilation, ↓GI activity, glycogenolysis, sweating**.',
    '**Parasympathetic = craniosacral outflow** (cranial nerves **III, VII, IX, X** and sacral **S2–S4**). Ganglia lie **near/in the target organ** → **LONG preganglionic, SHORT postganglionic** fibres. It conserves/restores: **↓heart rate, pupil constriction, bronchoconstriction, ↑GI motility and secretion**.',
    '**Most organs have dual (opposing) innervation**, and the balance ("autonomic tone") between the two divisions sets the organ\'s state — a homeostatic tug-of-war.',
    '**The adrenal medulla is a modified sympathetic ganglion:** preganglionic sympathetic fibres synapse directly on it, and it **releases adrenaline (and noradrenaline) into the blood** as a hormone — a systemic, longer-lasting sympathetic surge, with no postganglionic neuron.',
  ],

  mechanism: {
    title: 'Two divisions, two-neuron chains, opposing effects',
    steps: [
      { id: 's1', label: 'Two-neuron pathway: pre → ganglion → postganglionic', emphasis: 'key' },
      { id: 's2', label: 'Sympathetic = thoracolumbar; short pre / long post', emphasis: 'key' },
      { id: 's3', label: 'Parasympathetic = craniosacral (III,VII,IX,X,S2–4); long pre / short post', emphasis: 'key' },
      { id: 's4', label: 'Dual innervation → autonomic tone balances organs' },
      { id: 's5', label: 'Adrenal medulla = modified sympathetic ganglion → blood adrenaline' },
    ],
  },

  examFindings: [
    { sign: 'Sympathetic activation → ↑HR, ↑BP, dilated pupils', mechanism: '"Fight or flight" response', significance: 'key' },
    { sign: 'Parasympathetic activation → ↓HR, ↑gut motility', mechanism: '"Rest and digest" response', significance: 'key' },
    { sign: 'Short preganglionic, long postganglionic fibres', mechanism: 'Sympathetic (ganglia near the cord)', significance: 'supportive' },
    { sign: 'Long preganglionic, short postganglionic fibres', mechanism: 'Parasympathetic (ganglia near target organ)', significance: 'supportive' },
    { sign: 'Adrenaline surge into the blood under stress', mechanism: 'Adrenal medulla (modified sympathetic ganglion)', significance: 'key' },
  ],

  investigations: [
    { clue: 'Division with thoracolumbar outflow', meaning: 'Sympathetic' },
    { clue: 'Division using cranial nerves III, VII, IX, X and S2–S4', meaning: 'Parasympathetic (craniosacral)' },
    { clue: 'Gland that acts like a modified sympathetic ganglion', meaning: 'Adrenal medulla' },
    { clue: 'Feature of parasympathetic fibre lengths', meaning: 'Long preganglionic, short postganglionic' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Autonomic balance underlies cardiovascular, GI, and pupillary responses; sympathetic/parasympathetic drugs (β-blockers, atropine, etc.) act on the receptors detailed in [[autonomic-neurotransmitters-receptors]]. The ANS is a homeostatic effector system ([[homeostasis-feedback-control]]).' },
  ],

  mnemonics: [
    { hook: 'Sympathetic = "fight/flight, thoracoLumbar, short-Long"; Parasympathetic = "rest/digest, craniosacral, Long-short"', expansion: ['Ganglia: sympathetic near cord, para near organ'] },
    { hook: 'Adrenal medulla = modified sympathetic ganglion → blood adrenaline', expansion: ['No postganglionic neuron'] },
  ],

  traps: [
    {
      questionCategory: 'Fibre length by division',
      wrongInstinct: 'The sympathetic division has long preganglionic and short postganglionic fibres',
      rightAnswer: 'Sympathetic = SHORT preganglionic / LONG postganglionic (ganglia near the cord); parasympathetic = LONG preganglionic / SHORT postganglionic (ganglia near the organ)',
      why: 'It follows from ganglion location: sympathetic chain sits near the spinal cord, parasympathetic ganglia sit in/near the target organ.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The parasympathetic division of the autonomic nervous system has its outflow from:',
      options: [
        { id: 'a', text: 'The thoracolumbar spinal cord (T1–L2)' },
        { id: 'b', text: 'The cranial nerves III, VII, IX, X and sacral segments S2–S4' },
        { id: 'c', text: 'Only the vagus nerve' },
        { id: 'd', text: 'The lumbar sympathetic chain' },
      ],
      answerId: 'b',
      explanation: 'The parasympathetic (craniosacral) outflow arises from cranial nerves III, VII, IX, X and sacral segments S2–S4. The sympathetic outflow is thoracolumbar (T1–L2).',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The adrenal medulla is best described as:',
      options: [
        { id: 'a', text: 'A parasympathetic ganglion' },
        { id: 'b', text: 'A modified sympathetic ganglion that secretes adrenaline into the blood' },
        { id: 'c', text: 'A somatic motor endplate' },
        { id: 'd', text: 'An endocrine gland unrelated to the ANS' },
      ],
      answerId: 'b',
      explanation: 'Preganglionic sympathetic fibres synapse directly on adrenal medullary cells (a modified sympathetic ganglion), which release adrenaline/noradrenaline into the blood — a systemic sympathetic response with no postganglionic neuron.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Autonomic nervous system', svg: ANS_OVERVIEW, caption: 'Sympathetic (thoracolumbar, fight/flight, noradrenaline) vs parasympathetic (craniosacral, rest/digest, ACh); all preganglionics release ACh onto nicotinic receptors.' },
  ],
};

export default autonomicSympatheticParasympathetic;
