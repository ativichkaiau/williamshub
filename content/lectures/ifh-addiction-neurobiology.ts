import type { Lecture } from '../../lib/types';

export const ifhAddictionNeurobiology: Lecture = {
  id: 'ifh-addiction-neurobiology',
  title: 'Understanding Addiction',
  system: 'community',
  source: 'L9 — Addiction and Health',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Family Health' },
    { kind: 'lecture', label: 'L9 Addiction & Health' },
    { kind: 'mechanism', label: 'Reward / dopamine pathway' },
    { kind: 'disease', label: 'Substance use disorder' },
    { kind: 'exam', label: 'Tolerance · withdrawal' },
  ],

  highYield: [
    '**Use → misuse → dependence → substance use disorder (SUD) is a spectrum.** DSM-5 replaces "abuse/dependence" with a single **SUD** graded by counting criteria over 12 months: **mild (2–3), moderate (4–5), severe (≥6)** of 11. The core is **loss of control** and **use despite harm**.',
    '**The reward pathway is the engine.** Substances flood the **mesolimbic dopamine pathway** — **VTA → nucleus accumbens** — producing a dopamine surge that **reinforces** the behaviour, while the **prefrontal cortex** (control/judgment) is progressively weakened.',
    '**Tolerance ≠ withdrawal ≠ addiction.** **Tolerance** = needing more for the same effect (receptor down-regulation). **Withdrawal** = the neuroadaptation unmasked when the drug stops. Together they make **physical dependence** — which can exist without addiction (e.g. a cancer patient on long-term opioids).',
    '**Addiction is a chronic, relapsing brain condition — NOT a moral failing.** This framing (shared with any chronic disease in the [[ifh-biopsychosocial-model]]) reduces stigma, explains relapse, and shapes the non-judgmental screening in [[ifh-addiction-screening]] and management in [[ifh-addiction-management]].',
    '**Common substances in Thailand:** **alcohol** and **tobacco** (biggest burden), **methamphetamine** (yaba/ice), **kratom**, and **cannabis** (decriminalised 2022). Relapse maps onto the same cycle as the [[ifh-behavior-change-stages]] model.',
  ],

  mechanism: {
    title: 'Reward pathway: cue → dopamine surge → reinforcement → tolerance → withdrawal → compulsion',
    steps: [
      { id: 's1', label: 'Substance drives VTA → nucleus accumbens dopamine surge', emphasis: 'key' },
      { id: 's2', label: 'Reward is reinforced; prefrontal (control) circuitry weakens' },
      { id: 's3', label: 'Repeated use → neuroadaptation → tolerance (receptor down-regulation)', emphasis: 'key' },
      { id: 's4', label: 'Stop the drug → withdrawal (alcohol/benzo withdrawal can be lethal)', emphasis: 'danger' },
      { id: 's5', label: 'Craving + compulsion → the chronic relapsing cycle', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Addiction is a chronic relapsing brain condition, not a moral failing', mechanism: 'Neuroadaptation in reward and control circuits — a disease process, not weak willpower', significance: 'key' },
    { sign: 'SUD is a graded spectrum, not a yes/no label', mechanism: 'DSM-5 counts criteria: mild 2–3, moderate 4–5, severe ≥6 of 11', significance: 'key' },
    { sign: 'Physical dependence ≠ addiction', mechanism: 'Tolerance + withdrawal can occur physiologically without the compulsive, harmful use that defines addiction', significance: 'supportive' },
    { sign: 'Alcohol and benzodiazepine withdrawal can be life-threatening', mechanism: 'Rebound CNS hyperexcitability → seizures and delirium tremens', significance: 'key' },
  ],

  investigations: [
    { clue: 'A drinker now needs far more alcohol for the same effect', meaning: 'Tolerance from receptor down-regulation — a marker of neuroadaptation' },
    { clue: 'Tremor, sweating, and a seizure 24–48 h after a heavy drinker stops', meaning: 'Alcohol withdrawal / delirium tremens — potentially fatal, needs medical management' },
    { clue: 'A cancer patient on chronic opioids has tolerance but no craving or loss of control', meaning: 'Physical dependence, NOT addiction — do not mislabel them' },
    { clue: 'A methamphetamine (yaba) user in a binge–crash pattern', meaning: 'Reward-pathway hijack — the dopamine surge and crash drive repeated use' },
  ],

  treatment: [
    { logic: 'Frame addiction as a chronic medical condition', detail: 'The disease model reduces stigma, normalises relapse, and sets up the non-judgmental screening and continuity described in [[ifh-addiction-screening]] and [[ifh-addiction-management]].' },
    { logic: 'Recognise which withdrawals are dangerous', detail: 'Alcohol and benzodiazepine withdrawal can cause seizures and delirium tremens — these need medically-supervised management, not abrupt cessation alone.' },
  ],

  mnemonics: [
    { hook: 'The reward highway: VTA → NAcc (dopamine)', expansion: ['Ventral Tegmental Area fires dopamine', 'onto the Nucleus Accumbens', '→ reinforcement, while prefrontal control fades'] },
    { hook: 'Dependence ≠ Addiction', expansion: ['Dependence = tolerance + withdrawal (physiological)', 'Addiction = compulsive use + loss of control despite harm'] },
  ],

  traps: [
    {
      questionCategory: 'Dependence vs addiction',
      wrongInstinct: 'A patient with tolerance and withdrawal is, by definition, addicted',
      rightAnswer: 'Physical dependence (tolerance + withdrawal) can occur without addiction; addiction requires compulsive use and loss of control despite harm',
      why: 'A cancer patient on scheduled opioids is dependent but not addicted — mislabelling them denies pain relief and stigmatises legitimate treatment.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The reinforcing "reward" of most addictive substances is mediated primarily by which pathway?',
      options: [
        { id: 'a', text: 'The mesolimbic dopamine pathway (VTA to nucleus accumbens)' },
        { id: 'b', text: 'The nigrostriatal pathway controlling movement' },
        { id: 'c', text: 'The hypothalamic–pituitary–thyroid axis' },
        { id: 'd', text: 'The corticospinal motor tract' },
      ],
      answerId: 'a',
      explanation: 'Addictive substances surge dopamine along the mesolimbic reward pathway (VTA → nucleus accumbens), reinforcing the behaviour while weakening prefrontal control.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient with advanced cancer on long-term opioids shows tolerance and would withdraw if the drug stopped, but has no craving and no loss of control. This is best described as:',
      options: [
        { id: 'a', text: 'Severe substance use disorder' },
        { id: 'b', text: 'Physical dependence, not addiction' },
        { id: 'c', text: 'A moral failing requiring discharge' },
        { id: 'd', text: 'Drug-seeking behaviour' },
      ],
      answerId: 'b',
      explanation: 'Tolerance and withdrawal define physical dependence, which is expected with chronic opioids. Without compulsive use or loss of control there is no addiction.',
      tests: 'exam',
    },
  ],
};

export default ifhAddictionNeurobiology;
