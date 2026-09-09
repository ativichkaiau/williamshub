import type { Lecture } from '../../lib/types';

export const ghpPositiveFeedbackControlSystems: Lecture = {
  id: 'ghp-positive-feedback-control-systems',
  title: 'Positive Feedback & Feed-forward Control',
  system: 'physiology',
  source: 'Ch 1 — Functional Organization & Homeostasis',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'Ch 1 Functional Organization' },
    { kind: 'mechanism', label: 'Vicious cycle / loop gain' },
    { kind: 'exam', label: 'Feed-forward vs feedback' },
  ],

  highYield: [
    '**Positive feedback = the response REINFORCES the initiating change.** Guyton calls the destructive version a **vicious cycle**. Whether it runs away depends entirely on **loop gain**: **gain < 1 → self-limiting and damped; gain > 1 → runaway to failure.**',
    '**The vicious-cycle worked example.** Bleed ~**1 L** and the baroreflex compensates — pressure recovers. Bleed ~**2 L** and the loop inverts: **↓cardiac output → ↓coronary and cerebral perfusion → weaker myocardium → further ↓cardiac output**. This is **irreversible (decompensated) shock**, and it is fatal unless the cycle is interrupted from outside.',
    '**Three physiological positive-feedback loops worth memorising.** (1) **Clotting**: thrombin activates factors V, VIII, XI and platelets, generating **more thrombin**. (2) **Action-potential upstroke**: depolarisation opens voltage-gated Na⁺ channels → Na⁺ influx → **more depolarisation** (the regenerative Hodgkin cycle). (3) **Parturition**: fetal head stretches the cervix → **oxytocin** release → stronger contraction → more stretch (the Ferguson reflex). A fourth is the **oestrogen-driven LH surge** before ovulation, where feedback flips from negative to positive above a threshold.',
    '**Every useful positive loop has a built-in STOP signal.** Na⁺ channel **inactivation** plus delayed K⁺ efflux ends the upstroke; **delivery of the fetus** ends labour; anticoagulants and the finished fibrin clot end coagulation; ovulation ends the LH surge. Positive feedback is pathological only when the terminating event fails.',
    '**Feed-forward control acts BEFORE any error exists.** It uses an anticipatory signal rather than the deviation itself: **heart rate and ventilation rise at the very onset of exercise** (central command, before blood gases change); the **cephalic phase** of gastric acid and insulin secretion begins at the sight and smell of food; skin thermoreceptors trigger shivering before core temperature falls; ballistic movements are pre-programmed because feedback is too slow.',
    '**Adaptive control = feed-forward corrected over time by delayed negative feedback** — the cerebellar model of motor learning. The anticipation is repeatedly refined by after-the-fact error, which is why a skilled movement improves with practice.',
  ],

  mechanism: {
    title: 'Amplify on purpose, or spiral to death — loop gain decides which',
    steps: [
      { id: 's1', label: 'A change occurs in the regulated variable' },
      { id: 's2', label: 'The response INCREASES that same change', emphasis: 'key' },
      { id: 's3', label: 'Loop gain < 1 → damps out; loop gain > 1 → runaway', emphasis: 'key' },
      { id: 's4', label: 'Useful loops terminate: channel inactivation, delivery, fibrin clot', emphasis: 'key' },
      { id: 's5', label: 'No stop signal → vicious cycle → decompensated shock and death', emphasis: 'danger' },
      { id: 's6', label: 'Feed-forward bypasses the loop entirely — it acts on the forecast, not the error' },
    ],
  },

  examFindings: [
    { sign: 'Loss of ~1 L of blood is compensated; loss of ~2 L causes a progressive fall to death', mechanism: 'Below threshold the negative loop wins; above it, positive-feedback gain exceeds 1 and the cycle runs away', significance: 'key' },
    { sign: 'The regenerative Na⁺ upstroke of the action potential', mechanism: 'Depolarisation opens more Na⁺ channels; terminated by inactivation and delayed K⁺ efflux', significance: 'key' },
    { sign: 'Thrombin generating still more thrombin during coagulation', mechanism: 'Feedback activation of factors V, VIII, XI and platelets; terminated by anticoagulants and the finished clot', significance: 'key' },
    { sign: 'Uterine contractions intensify progressively through labour', mechanism: 'Cervical stretch → oxytocin release → stronger contraction (Ferguson reflex); terminated by delivery', significance: 'key' },
    { sign: 'Heart rate and ventilation rise within the first seconds of exercise, before any change in arterial gases', mechanism: 'Feed-forward central command — no error signal exists yet for feedback to act on', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A response that reinforces rather than opposes the initiating change', meaning: 'Positive feedback' },
    { clue: 'A positive loop whose gain exceeds 1', meaning: 'A vicious cycle — it runs away unless interrupted from outside' },
    { clue: 'Control that acts before the error appears, using an anticipatory signal', meaning: 'Feed-forward (anticipatory) control' },
    { clue: 'Feed-forward that is progressively refined by delayed negative feedback', meaning: 'Adaptive control — the cerebellar basis of motor learning' },
    { clue: 'Cervical stretch → oxytocin → stronger contraction → more stretch', meaning: 'The Ferguson reflex, positive feedback in parturition' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Positive feedback is the exception that proves the rule set out in [[ghp-negative-feedback-gain]]: the body tolerates amplification only where a decisive, all-or-none outcome is needed and a stop signal exists. The single most examined instance is the regenerative upstroke — see [[ghp-nerve-action-potential]] and the lecture-course version [[action-potential-genesis]]. Framework cross-link: [[homeostasis-feedback-control]].' },
    { logic: 'Where it kills', detail: 'Decompensated shock, reentrant arrhythmia and disseminated intravascular coagulation are all loops that lost their brake. Recognising a **vicious cycle** tells you the treatment principle: you must break the loop from outside, because the system will not self-correct.' },
  ],

  mnemonics: [
    { hook: 'Positive feedback = CLOT, CHILDBIRTH, CHANNELS (plus the LH surge)', expansion: ['Clotting: thrombin makes more thrombin', 'Childbirth: stretch → oxytocin → stretch', 'Channels: depolarisation opens Na⁺ channels → depolarisation', 'Each one needs a STOP signal — without it you have a vicious cycle'] },
    { hook: 'Feed-forward acts on the FORECAST; feedback acts on the FACT', expansion: ['Exercise onset tachycardia = forecast', 'Baroreflex correction = fact', 'Adaptive control = forecast refined by yesterday\'s facts'] },
  ],

  traps: [
    {
      questionCategory: 'Is positive feedback always harmful',
      wrongInstinct: 'Positive feedback is by definition pathological and destabilising',
      rightAnswer: 'It is the mechanism of clotting, the AP upstroke, labour and the LH surge — harmful only when the terminating event fails',
      why: 'The danger is loop gain above 1 with no stop signal, not the sign of the loop itself.',
    },
    {
      questionCategory: 'Feed-forward versus negative feedback',
      wrongInstinct: 'The heart-rate rise at the start of exercise is a baroreflex response to a falling blood pressure',
      rightAnswer: 'It is feed-forward central command — it precedes any measurable error in pressure or blood gases',
      why: 'Feedback requires an error to already exist; feed-forward anticipates one that has not happened yet.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which of the following is the clearest example of physiological POSITIVE feedback?',
      options: [
        { id: 'a', text: 'Insulin release lowering a raised plasma glucose' },
        { id: 'b', text: 'Sodium influx during the action-potential upstroke opening further voltage-gated Na⁺ channels' },
        { id: 'c', text: 'Baroreceptor firing reducing sympathetic outflow when pressure rises' },
        { id: 'd', text: 'ADH release restoring plasma osmolality toward normal' },
      ],
      answerId: 'b',
      explanation: 'The upstroke is regenerative: depolarisation opens Na⁺ channels, whose influx depolarises further. It is terminated by Na⁺ channel inactivation and delayed K⁺ efflux. The other three responses all oppose the initiating change and are therefore negative feedback.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient loses roughly 2 L of blood. Despite maximal reflex compensation, cardiac output and arterial pressure fall progressively until death. What best explains this course?',
      options: [
        { id: 'a', text: 'The baroreceptors adapted and the negative-feedback loop simply switched off' },
        { id: 'b', text: 'Reduced coronary and cerebral perfusion weakens the heart, further lowering output — a positive-feedback loop with gain greater than 1' },
        { id: 'c', text: 'Feed-forward control overrode the baroreflex' },
        { id: 'd', text: 'The gain of the baroreceptor system became positive' },
      ],
      answerId: 'b',
      explanation: 'Beyond a threshold blood loss, myocardial hypoperfusion weakens the pump, which lowers perfusion further. Loop gain exceeds 1 and the cycle becomes self-sustaining — decompensated shock. It must be broken externally (transfusion, volume, pressors); it will not self-correct.',
      tests: 'disease',
    },
    {
      id: 'q3',
      stem: 'Within the first few seconds of exercise, heart rate and ventilation rise before arterial PO₂, PCO₂ or pH have changed measurably. This is best classified as:',
      options: [
        { id: 'a', text: 'Negative feedback driven by chemoreceptors' },
        { id: 'b', text: 'Positive feedback driven by muscle metaboreceptors' },
        { id: 'c', text: 'Feed-forward (anticipatory) control by central command' },
        { id: 'd', text: 'A vicious cycle with loop gain below 1' },
      ],
      answerId: 'c',
      explanation: 'No error signal exists yet, so feedback cannot be responsible. Descending central command drives the cardiorespiratory response in anticipation of demand — feed-forward control. Chemoreceptor negative feedback fine-tunes the response later, once gases actually change.',
      tests: 'exam',
    },
  ],
};

export default ghpPositiveFeedbackControlSystems;
