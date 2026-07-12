import type { Lecture } from '../../lib/types';

export const behClassicalOperantConditioning: Lecture = {
  id: 'beh-classical-operant-conditioning',
  title: 'Classical & Operant Conditioning',
  system: 'community',
  source: 'L8 — Learning & Humanistic Theory',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Behavioral Science' },
    { kind: 'lecture', label: 'L8 Learning Theory' },
    { kind: 'mechanism', label: 'Pavlov · Skinner' },
    { kind: 'exam', label: 'Reinforcement vs punishment' },
    { kind: 'treatment', label: 'Behaviour therapy' },
  ],

  highYield: [
    '**Classical conditioning (Pavlov)** = learning by **association** between two stimuli. An **unconditioned stimulus (US)** (food) automatically triggers an **unconditioned response (UR)** (salivation). Pair a neutral stimulus (a bell) with the US repeatedly and it becomes a **conditioned stimulus (CS)** that alone elicits a **conditioned response (CR)**. The learned response is **involuntary/reflexive** — contrast the voluntary behaviours of operant learning.',
    '**Key classical phenomena: acquisition** (building the CS→CR link), **extinction** (CS presented without the US → the CR fades), **spontaneous recovery** (the CR briefly returns after a rest), **stimulus generalization** (similar stimuli also elicit the CR) and **discrimination** (responding only to the specific CS).',
    '**Operant conditioning (Skinner)** = learning by **consequences** (Thorndike’s **Law of Effect**). **Reinforcement increases** a behaviour; **punishment decreases** it. **Positive** = a stimulus is **added**; **negative** = a stimulus is **removed** — so **negative reinforcement** (removing something aversive) still **increases** the behaviour and is **not** punishment.',
    '**Schedules of reinforcement** shape response rate and durability. **Continuous** reinforcement learns fastest but extinguishes fastest; **partial** schedules — **fixed/variable × ratio/interval** — are more durable. The **variable-ratio** schedule (unpredictable number of responses per reward, e.g. gambling) gives the **highest, most extinction-resistant** responding.',
    '**Clinical uses:** phobias are classically conditioned (Watson’s “Little Albert”) and treated by **systematic desensitization** and exposure — see [[beh-mood-anxiety-disorders]]. Operant tools include **shaping**, **token economies** and **aversion therapy**; drug-reward learning underlies addiction via dopamine — see [[beh-neurobiology-behavior]] and [[beh-other-major-disorders]]. Compare observational learning in [[beh-social-cognitive-learning]] and [[beh-humanistic-theory]].',
  ],

  mechanism: {
    title: 'Classical conditioning: US→UR → pair CS → CR → extinction → spontaneous recovery',
    steps: [
      { id: 's1', label: 'US → UR automatically (food → salivation)' },
      { id: 's2', label: 'Pair neutral stimulus (bell) with US repeatedly — acquisition', emphasis: 'key' },
      { id: 's3', label: 'Bell alone = CS → CR (salivation): association learned', emphasis: 'key' },
      { id: 's4', label: 'CS without US, repeated → extinction (CR fades)' },
      { id: 's5', label: 'After a rest, CS alone → spontaneous recovery (weak CR returns)' },
    ],
  },

  examFindings: [
    { sign: 'Negative reinforcement increases behaviour', mechanism: 'It removes an aversive stimulus (relief), which strengthens the response — it is not punishment', significance: 'key' },
    { sign: '“Positive/negative” means added/removed, not good/bad', mechanism: 'Positive = a stimulus is applied; negative = a stimulus is taken away', significance: 'key' },
    { sign: 'Variable-ratio schedules resist extinction the most', mechanism: 'Unpredictable reward timing sustains high, persistent responding (gambling)', significance: 'key' },
    { sign: 'Classical = involuntary reflex; operant = voluntary behaviour', mechanism: 'Classical conditions autonomic/reflex responses; operant conditions emitted behaviours by their consequences', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A chemotherapy patient feels nauseated in the clinic waiting room before any drug is given', meaning: 'Classically conditioned (anticipatory) response — the clinic has become a CS' },
    { clue: 'A child bitten by one dog now fears all dogs', meaning: 'A conditioned fear plus stimulus generalization to similar stimuli' },
    { clue: 'A gambler keeps pulling the slot-machine lever despite repeated losses', meaning: 'Variable-ratio reinforcement — highly resistant to extinction' },
    { clue: 'A toddler’s tantrums, no longer rewarded with attention, briefly get worse before stopping', meaning: 'An extinction burst as the previously reinforced behaviour dies out' },
  ],

  treatment: [
    { logic: 'Systematic desensitization', detail: 'Counter-condition a phobia by pairing feared stimuli with relaxation up a graded hierarchy, extinguishing the conditioned fear — see [[beh-mood-anxiety-disorders]].' },
    { logic: 'Operant behaviour modification', detail: 'Shape target behaviour by reinforcing successive approximations; token economies reinforce desired behaviour with exchangeable tokens — see [[beh-social-cognitive-learning]].' },
    { logic: 'Aversion therapy', detail: 'Pair a maladaptive behaviour (e.g. drinking) with an aversive stimulus (disulfiram-induced nausea) so the behaviour itself becomes aversive.' },
  ],

  mnemonics: [
    { hook: 'Classical is Cs before, Operant is Outcome after', expansion: ['Classical: the stimulus comes BEFORE and the response is involuntary', 'Operant: the consequence comes AFTER a voluntary behaviour'] },
    { hook: 'Reinforce ↑, Punish ↓; Positive adds, Negative removes', expansion: ['Reinforcement increases behaviour; punishment decreases it', 'Positive = add a stimulus; Negative = remove a stimulus → four quadrants'] },
  ],

  traps: [
    {
      questionCategory: 'Negative reinforcement vs punishment',
      wrongInstinct: 'Negative reinforcement is a type of punishment because it sounds negative',
      rightAnswer: 'Negative reinforcement removes an aversive stimulus to increase a behaviour; punishment decreases a behaviour',
      why: '“Negative” refers to subtracting a stimulus, not to discouraging the behaviour — reinforcement always strengthens responding.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A rat presses a lever that switches off a loud, unpleasant noise, and its lever-pressing becomes more frequent. This is an example of:',
      options: [
        { id: 'a', text: 'Positive reinforcement' },
        { id: 'b', text: 'Negative reinforcement' },
        { id: 'c', text: 'Positive punishment' },
        { id: 'd', text: 'Negative punishment' },
      ],
      answerId: 'b',
      explanation: 'Removing an aversive stimulus (the noise) makes the behaviour more likely, so it is reinforcement; because a stimulus is removed rather than added, it is negative reinforcement.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which schedule of reinforcement produces the highest, most extinction-resistant rate of responding?',
      options: [
        { id: 'a', text: 'Fixed ratio' },
        { id: 'b', text: 'Variable ratio' },
        { id: 'c', text: 'Fixed interval' },
        { id: 'd', text: 'Variable interval' },
      ],
      answerId: 'b',
      explanation: 'A variable-ratio schedule rewards after an unpredictable number of responses; the uncertainty drives rapid, persistent responding that resists extinction, as seen in gambling.',
      tests: 'exam',
    },
  ],
};

export default behClassicalOperantConditioning;
