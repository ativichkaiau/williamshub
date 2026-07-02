import type { Lecture } from '../../lib/types';

export const sleepCircadianRhythms: Lecture = {
  id: 'sleep-circadian-rhythms',
  title: 'Sleep & Circadian Rhythms',
  system: 'neuro',
  source: 'L20 — Reticular Activating System, Sleep & Circadian Rhythms',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L20 RAS & Sleep' },
    { kind: 'mechanism', label: 'NREM/REM' },
    { kind: 'exam', label: 'Sleep stages & SCN' },
  ],

  highYield: [
    '**Sleep is an active, cyclical state divided by EEG into NREM (three stages) and REM, cycling roughly every 90 minutes.** NREM deepens N1 → N2 → N3; each cycle then enters REM, and REM periods lengthen toward morning. Sleep is generated and switched by hypothalamic and brainstem circuits (not just "the RAS turning off").',
    '**NREM stages by EEG: N1 = light sleep (theta waves); N2 = SLEEP SPINDLES and K-COMPLEXES; N3 = deep SLOW-WAVE sleep (delta waves) — the most restorative, hardest to wake from** (and when sleepwalking/night terrors occur). NREM has slowed heart rate, breathing and reduced muscle activity.',
    '**REM sleep is paradoxical: a low-voltage, fast EEG resembling wakefulness, with vivid DREAMING, rapid eye movements, autonomic variability — and skeletal muscle ATONIA (you are paralysed so you don\'t act out dreams).** REM is important for memory consolidation; loss of REM atonia causes REM sleep behaviour disorder.',
    '**Circadian rhythm (~24 h) is driven by the SUPRACHIASMATIC NUCLEUS (SCN) of the hypothalamus, the master clock, entrained by LIGHT via the retinohypothalamic tract.** In darkness the SCN signals the PINEAL gland to release MELATONIN, promoting sleep; light suppresses melatonin. This underlies jet lag, shift-work disorder and the timing of sleepiness.',
    '**Key clinical links: NARCOLEPSY is loss of orexin (hypocretin) neurons → excessive daytime sleepiness, cataplexy and REM intrusions; sleep architecture changes with age and in depression.** The take-home: NREM (N1→N3 deepening, spindles/K-complexes, slow waves) vs REM (dreaming + atonia); the SCN + melatonin set circadian timing ([[reticular-activating-system-consciousness]]).',
  ],

  mechanism: {
    title: 'NREM (N1-N3, deepening) ↔ REM (dreaming, atonia) cycles; SCN + melatonin set circadian timing',
    steps: [
      { id: 's1', label: 'Sleep = NREM (3 stages) + REM, cycling ~90 min', emphasis: 'key' },
      { id: 's2', label: 'NREM: N1 (theta) → N2 (spindles/K-complexes) → N3 (delta, deep)', emphasis: 'key' },
      { id: 's3', label: 'REM: wake-like EEG, DREAMING, eye movements, muscle ATONIA', emphasis: 'key' },
      { id: 's4', label: 'SCN (hypothalamus) = master clock, entrained by LIGHT → melatonin (pineal)', emphasis: 'key' },
      { id: 's5', label: 'Narcolepsy = orexin loss; N3 restorative, REM consolidates memory' },
    ],
  },

  examFindings: [
    { sign: 'Sleep spindles and K-complexes on EEG', mechanism: 'N2 NREM sleep', significance: 'key' },
    { sign: 'Delta (slow) waves, deepest, restorative sleep', mechanism: 'N3 slow-wave sleep', significance: 'key' },
    { sign: 'Dreaming with skeletal muscle atonia and rapid eye movements', mechanism: 'REM sleep', significance: 'key' },
    { sign: 'Excessive daytime sleepiness with cataplexy', mechanism: 'Narcolepsy (orexin/hypocretin loss)', significance: 'supportive' },
    { sign: 'Melatonin rising in darkness to promote sleep', mechanism: 'SCN → pineal (circadian control)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The EEG hallmark of N2 sleep', meaning: 'Sleep spindles and K-complexes' },
    { clue: 'The deepest, most restorative sleep stage', meaning: 'N3 (slow-wave/delta) sleep' },
    { clue: 'The stage with dreaming and muscle atonia', meaning: 'REM sleep' },
    { clue: 'The master circadian clock and its hormone', meaning: 'The suprachiasmatic nucleus (SCN); melatonin' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Sleep architecture (NREM stages vs REM) and circadian control (SCN/melatonin, entrained by light) underlie sleep disorders — narcolepsy (orexin), insomnia, jet lag/shift work, and REM behaviour disorder. It complements the arousal system of [[reticular-activating-system-consciousness]]; the hypothalamic SCN links to [[diencephalon-thalamus-hypothalamus]], and arousal transmitters to [[cns-neurotransmission-systems]].' },
  ],

  mnemonics: [
    { hook: 'NREM deepens "N1 theta → N2 spindles/K-complex → N3 delta (deep)"', expansion: ['N3 = slow-wave, restorative', 'Sleepwalking/night terrors in N3'] },
    { hook: 'REM = "dreaming + atonia + eye movements" (wake-like EEG)', expansion: ['Memory consolidation', 'Loss of atonia = REM behaviour disorder'] },
  ],

  traps: [
    {
      questionCategory: 'EEG of REM sleep',
      wrongInstinct: 'REM sleep, being deep sleep, shows high-voltage slow (delta) EEG waves',
      rightAnswer: 'REM sleep shows a LOW-voltage, FAST EEG that RESEMBLES WAKEFULNESS (hence "paradoxical sleep"), with dreaming and muscle atonia — it is the slow-wave N3 stage that shows high-voltage delta waves',
      why: 'REM is not "deeper" NREM; its EEG looks awake despite the person being asleep and paralysed, which is exactly why it is called paradoxical — confusing it with slow-wave sleep reverses the EEG picture.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which feature characterises REM sleep?',
      options: [
        { id: 'a', text: 'High-voltage delta waves and easy arousal' },
        { id: 'b', text: 'A wake-like (low-voltage, fast) EEG with vivid dreaming and skeletal muscle atonia' },
        { id: 'c', text: 'Sleep spindles and K-complexes' },
        { id: 'd', text: 'Absence of eye movements' },
      ],
      answerId: 'b',
      explanation: 'REM ("paradoxical") sleep has a low-voltage, fast EEG resembling wakefulness, with vivid dreaming, rapid eye movements and skeletal muscle atonia (protective paralysis). Delta waves define N3; spindles/K-complexes define N2.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The master circadian clock that entrains the sleep–wake cycle to the light–dark cycle is the:',
      options: [
        { id: 'a', text: 'Suprachiasmatic nucleus of the hypothalamus' },
        { id: 'b', text: 'Cerebellum' },
        { id: 'c', text: 'Pineal gland acting alone' },
        { id: 'd', text: 'Reticular formation' },
      ],
      answerId: 'a',
      explanation: 'The suprachiasmatic nucleus (SCN) of the hypothalamus is the master ~24-hour clock, entrained by light via the retinohypothalamic tract; it signals the pineal gland to release melatonin in darkness to promote sleep.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default sleepCircadianRhythms;
