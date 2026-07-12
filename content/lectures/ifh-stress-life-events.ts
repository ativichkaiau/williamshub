import type { Lecture } from '../../lib/types';

export const ifhStressLifeEvents: Lecture = {
  id: 'ifh-stress-life-events',
  title: 'Stress & Life Events',
  system: 'community',
  source: 'L5 — Psychosocial Influences on Health',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Family Health' },
    { kind: 'lecture', label: 'L5 Psychosocial Influences' },
    { kind: 'mechanism', label: 'SAM · HPA · allostatic load' },
    { kind: 'exam', label: 'Holmes–Rahe SRRS' },
  ],

  highYield: [
    '**Stress = a perceived imbalance between demands and coping resources** (Lazarus & Folkman). **Primary appraisal** asks “is this a threat?”; **secondary appraisal** asks “can I cope?”. Stress is therefore about **perception**, not just the event — which is why the same event stresses people differently.',
    '**Two physiological axes.** The fast **SAM axis** (sympatho-adreno-medullary) releases **adrenaline / noradrenaline** for acute **fight-or-flight**. The slower **HPA axis** (hypothalamus → CRH → pituitary **ACTH** → adrenal **cortisol**) sustains the response. **Selye’s General Adaptation Syndrome**: **Alarm → Resistance → Exhaustion**.',
    '**Allostasis vs allostatic load.** **Allostasis** is achieving stability through change; **allostatic load** is the **cumulative biological “wear and tear”** when the stress mediators stay switched on. Chronic load links stress to hypertension, cardiovascular disease, immune suppression and mental illness.',
    '**The Holmes–Rahe Social Readjustment Rating Scale (SRRS)** scores life events in **Life Change Units (LCUs)** — **death of a spouse = 100** at the top. Crucially, **positive events count too** (marriage, new job, new home): it is the **readjustment**, not the valence, that loads the scale. Higher yearly LCUs → higher illness risk.',
    '**Coping styles.** **Problem-focused** (act on the stressor) vs **emotion-focused** (regulate the distress); **approach** vs **avoidant**. This sits inside the [[ifh-biopsychosocial-model]], is buffered by [[ifh-social-support-health]], and clusters around the transitions of the [[ifh-family-life-cycle]].',
  ],

  mechanism: {
    title: 'Stressor → appraisal → acute SAM (adrenaline) → sustained HPA (cortisol) → chronic load → illness',
    steps: [
      { id: 's1', label: 'Stressor / life event creates a demand' },
      { id: 's2', label: 'Cognitive appraisal — threat vs coping resources (Lazarus)', emphasis: 'key' },
      { id: 's3', label: 'Acute response — SAM axis releases adrenaline (fight-or-flight)' },
      { id: 's4', label: 'Sustained response — HPA axis releases cortisol', emphasis: 'key' },
      { id: 's5', label: 'Chronic stress → allostatic load → illness', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Stress is an appraised imbalance between demands and coping', mechanism: 'Perception (appraisal), not the raw event, determines the response', significance: 'key' },
    { sign: 'SAM axis = fast adrenaline; HPA axis = slower cortisol', mechanism: 'Two limbs of the stress response with different tempo', significance: 'key' },
    { sign: 'The SRRS counts positive as well as negative life events', mechanism: 'Any change demanding readjustment adds Life Change Units', significance: 'key' },
    { sign: 'Allostatic load is the cumulative biological cost of chronic stress', mechanism: 'Persistent mediators cause wear and tear across systems', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A recently widowed patient develops new physical symptoms', meaning: 'Bereavement tops the SRRS — a high-magnitude life event linked to illness' },
    { clue: 'In one year a patient marries, is promoted and moves house', meaning: 'Positive events still add Life Change Units — the readjustment load is high' },
    { clue: 'Years of unrelenting work stress with hypertension and broken sleep', meaning: 'Allostatic load from a chronically activated HPA axis' },
    { clue: 'A patient responds by making a concrete plan to tackle the problem', meaning: 'Problem-focused coping — acting on the stressor itself' },
  ],

  treatment: [
    { logic: 'Identify stressors and appraise coping', detail: 'Use the SRRS as a prompt for recent life events, and ask how the patient is appraising and coping with them.' },
    { logic: 'Build coping and mobilise support', detail: 'Strengthen problem-focused and emotion-focused strategies and recruit social support to buffer the load.' },
  ],

  mnemonics: [
    { hook: 'Selye’s GAS: Alarm → Resistance → Exhaustion', expansion: ['Alarm — the initial fight-or-flight surge', 'Resistance — the body adapts and holds', 'Exhaustion — reserves fail and illness follows'] },
    { hook: 'SAM is fast (adrenaline); HPA is slow (cortisol)', expansion: ['SAM → sympathetic → adrenaline in seconds', 'HPA → CRH → ACTH → cortisol over minutes to hours'] },
  ],

  traps: [
    {
      questionCategory: 'What counts as a stressful life event',
      wrongInstinct: 'Only negative events — loss, illness, failure — count as stress',
      rightAnswer: 'The SRRS counts positive events too (marriage, promotion, new home); it is the readjustment demanded, not the valence, that matters',
      why: 'Even welcome changes require adaptation, add Life Change Units and raise illness risk.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which axis mediates the slower, sustained hormonal response to stress, ending in cortisol release?',
      options: [
        { id: 'a', text: 'The sympatho-adreno-medullary (SAM) axis' },
        { id: 'b', text: 'The hypothalamic–pituitary–adrenal (HPA) axis' },
        { id: 'c', text: 'The renin–angiotensin–aldosterone system' },
        { id: 'd', text: 'The hypothalamic–pituitary–thyroid axis' },
      ],
      answerId: 'b',
      explanation: 'The HPA axis (hypothalamus → CRH → pituitary ACTH → adrenal cortex → cortisol) produces the slower, sustained stress response. The SAM axis provides the fast adrenaline-driven fight-or-flight surge.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'In the past year a patient reports getting married, receiving a job promotion, and moving to a new home. On the Holmes–Rahe scale, how do these events contribute to stress?',
      options: [
        { id: 'a', text: 'They do not count, because they are positive events' },
        { id: 'b', text: 'They contribute Life Change Units because they require readjustment' },
        { id: 'c', text: 'Only the promotion counts, as it involves work' },
        { id: 'd', text: 'They reduce the total stress score by offsetting negative events' },
      ],
      answerId: 'b',
      explanation: 'The SRRS scores any event that requires readjustment, positive or negative. Marriage, promotion and moving all add Life Change Units, and a high yearly total raises illness risk.',
      tests: 'exam',
    },
  ],
};

export default ifhStressLifeEvents;
