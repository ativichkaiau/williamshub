import type { Lecture } from '../../lib/types';
import { REFLEX_ARC } from '../../lib/figures';

export const reflexArcStretchWithdrawal: Lecture = {
  id: 'reflex-arc-stretch-withdrawal',
  title: 'Reflexes: The Reflex Arc, Stretch & Withdrawal',
  system: 'physiology',
  source: 'L10 — Reflexes',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'L10 Reflexes' },
    { kind: 'mechanism', label: 'Reflex arc' },
    { kind: 'exam', label: 'Monosynaptic vs polysynaptic' },
  ],

  highYield: [
    '**A reflex is an involuntary, rapid, stereotyped response to a stimulus**, mediated by a **reflex arc** with five parts: **(1) receptor → (2) afferent (sensory) neuron → (3) integration centre (CNS) → (4) efferent (motor) neuron → (5) effector**. It bypasses conscious control for speed and protection.',
    '**Monosynaptic (stretch) reflex** — the simplest, with **ONE synapse** between the sensory and motor neuron. Stretching a muscle activates its **muscle spindle** → **Ia afferent** → directly excites the **α-motor neuron** of the *same* muscle → contraction. Example: the **knee-jerk (patellar)** reflex. The **muscle spindle senses muscle LENGTH/stretch**.',
    '**Polysynaptic (withdrawal/flexor) reflex** — involves **interneurons** between sensory and motor neurons. A painful stimulus → flexor muscles contract to withdraw the limb, with **reciprocal inhibition** of the antagonist (extensor) so the movement isn\'t opposed.',
    '**The Golgi tendon organ (GTO)** senses muscle **TENSION** (not length) and drives the **inverse stretch reflex** — excessive tension inhibits the muscle (protective relaxation), the opposite of the stretch reflex.',
    '**Reciprocal innervation:** exciting one muscle simultaneously inhibits its antagonist, allowing smooth movement. **Clinically, deep-tendon reflexes test the arc** (afferent, cord segment, efferent): hyperreflexia suggests an upper motor neuron lesion; hyporeflexia/areflexia a lower motor neuron or afferent lesion.',
  ],

  mechanism: {
    title: 'Receptor → afferent → CNS → efferent → effector',
    steps: [
      { id: 's1', label: '5-part reflex arc (receptor→afferent→CNS→efferent→effector)', emphasis: 'key' },
      { id: 's2', label: 'Monosynaptic stretch reflex: spindle→Ia→α-motor (knee jerk)', emphasis: 'key' },
      { id: 's3', label: 'Muscle spindle = length; Golgi tendon organ = tension' },
      { id: 's4', label: 'Polysynaptic withdrawal: interneurons + reciprocal inhibition', emphasis: 'key' },
      { id: 's5', label: 'DTRs test the arc → localise lesions (UMN vs LMN)' },
    ],
  },

  examFindings: [
    { sign: 'Knee-jerk (patellar) reflex', mechanism: 'Monosynaptic stretch reflex (spindle → Ia → α-motor)', significance: 'key' },
    { sign: 'Muscle spindle detects stretch/length', mechanism: 'Afferent for the stretch reflex', significance: 'key' },
    { sign: 'Golgi tendon organ inhibits at high tension', mechanism: 'Inverse stretch reflex (protective)', significance: 'supportive' },
    { sign: 'Limb withdrawal from a painful stimulus', mechanism: 'Polysynaptic reflex + reciprocal inhibition', significance: 'key' },
    { sign: 'Brisk reflexes with a positive Babinski', mechanism: 'Upper motor neuron lesion', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Reflex with only one synapse', meaning: 'Monosynaptic (stretch) reflex' },
    { clue: 'Receptor sensing muscle length', meaning: 'Muscle spindle' },
    { clue: 'Receptor sensing muscle tension', meaning: 'Golgi tendon organ' },
    { clue: 'Reflex requiring interneurons', meaning: 'Polysynaptic (e.g. withdrawal)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Deep-tendon reflexes are a core neurological exam tool, localising lesions (UMN hyperreflexia vs LMN areflexia); reflexes protect against injury and maintain posture/tone. Builds on the reflex effectors — motor neurons and NMJ ([[skeletal-muscle-sarcomere]]).' },
  ],

  mnemonics: [
    { hook: 'Reflex arc: "Receptor → Afferent → Centre → Efferent → Effector"', expansion: ['Involuntary, rapid, stereotyped'] },
    { hook: 'Spindle = Stretch/length; Golgi tendon = Tension', expansion: ['Stretch reflex vs inverse stretch reflex'] },
  ],

  traps: [
    {
      questionCategory: 'Spindle vs Golgi tendon organ',
      wrongInstinct: 'The Golgi tendon organ senses muscle stretch/length like the muscle spindle',
      rightAnswer: 'The muscle SPINDLE senses length/stretch (stretch reflex); the GOLGI TENDON ORGAN senses TENSION (inverse stretch reflex, protective inhibition)',
      why: 'They are complementary proprioceptors with opposite reflex effects — spindle excites the muscle, GTO inhibits it.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The patellar (knee-jerk) reflex is a monosynaptic stretch reflex in which the afferent signal comes from the:',
      options: [
        { id: 'a', text: 'Golgi tendon organ' },
        { id: 'b', text: 'Muscle spindle' },
        { id: 'c', text: 'Pacinian corpuscle' },
        { id: 'd', text: 'Free nerve ending' },
      ],
      answerId: 'b',
      explanation: 'Stretching the quadriceps activates its muscle spindles; Ia afferents synapse directly on α-motor neurons (one synapse) to contract the same muscle. The Golgi tendon organ senses tension, not stretch.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'In the flexor (withdrawal) reflex, contraction of the flexor muscles is accompanied by relaxation of the antagonist extensors through:',
      options: [
        { id: 'a', text: 'Reciprocal inhibition (via interneurons)' },
        { id: 'b', text: 'A monosynaptic pathway' },
        { id: 'c', text: 'The Golgi tendon organ only' },
        { id: 'd', text: 'Direct α-motor neuron activation of the extensors' },
      ],
      answerId: 'a',
      explanation: 'The polysynaptic withdrawal reflex uses interneurons to excite flexors while reciprocally inhibiting the antagonist extensors, allowing an unopposed protective withdrawal.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'The reflex arc', svg: REFLEX_ARC, caption: 'Receptor→afferent→CNS→efferent→effector. Monosynaptic stretch reflex (spindle→α-motor) vs polysynaptic withdrawal (interneurons, reciprocal inhibition).' },
  ],
};

export default reflexArcStretchWithdrawal;
