import type { Lecture } from '../../lib/types';

export const behStressResponse: Lecture = {
  id: 'beh-stress-response',
  title: 'The Stress Response: HPA Axis & GAS',
  system: 'community',
  source: 'L12 — Stress & Resilience',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Behavioral Science' },
    { kind: 'lecture', label: 'L12 Stress Response' },
    { kind: 'mechanism', label: 'HPA axis · GAS' },
    { kind: 'exam', label: 'Alarm–resistance–exhaustion' },
    { kind: 'investigation', label: 'Appraisal & coping' },
  ],

  highYield: [
    '**Two axes drive the stress response.** The fast **SAM axis** (sympathetic–adreno-medullary) releases **adrenaline/noradrenaline** for immediate fight-or-flight; the slower **HPA axis** runs **hypothalamus → CRH → pituitary ACTH → adrenal cortex cortisol** for a sustained response ([[beh-neurobiology-behavior]]).',
    '**Selye’s General Adaptation Syndrome (GAS) has three stages:** **Alarm** (initial fight-or-flight surge), **Resistance** (the body adapts and copes with sustained cortisol), and **Exhaustion** (reserves depleted → stress-related illness).',
    '**Lazarus & Folkman’s transactional model: it is the appraisal, not the stressor itself, that matters.** **Primary appraisal** asks "is this a threat?"; **secondary appraisal** asks "can I cope?". The same event can be a challenge to one person and a catastrophe to another.',
    '**Coping is problem-focused or emotion-focused.** Problem-focused coping changes the stressor (making a plan, acting); emotion-focused coping manages the distress (reframing, seeking support, relaxation) — both are adaptive in the right context ([[beh-defense-mechanisms]]).',
    '**Chronic stress carries a physiological cost (high allostatic load).** Persistently elevated cortisol harms immune, cardiovascular, metabolic and mood systems, feeding depression and anxiety ([[beh-mood-anxiety-disorders]]); how well one weathers it depends on resilience ([[beh-resilience]]).',
  ],

  mechanism: {
    title: 'The HPA axis & Selye’s General Adaptation Syndrome',
    steps: [
      { id: 's1', label: 'Stressor appraised as a threat (Lazarus)', emphasis: 'key' },
      { id: 's2', label: 'Hypothalamus → CRH → pituitary → ACTH' },
      { id: 's3', label: 'Adrenal cortex releases cortisol (+ SAM adrenaline): ALARM', emphasis: 'key' },
      { id: 's4', label: 'Sustained cortisol enables adaptation: RESISTANCE', emphasis: 'key' },
      { id: 's5', label: 'Prolonged demand depletes reserves: EXHAUSTION → illness', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Two axes: fast SAM (adrenaline) and slower HPA (cortisol)', mechanism: 'The SAM axis gives the immediate surge; the HPA axis sustains the response over hours', significance: 'key' },
    { sign: 'GAS runs alarm → resistance → exhaustion', mechanism: 'Selye described a stereotyped, three-stage bodily response to any prolonged stressor', significance: 'key' },
    { sign: 'The cognitive appraisal, not the stressor alone, determines the response', mechanism: 'Lazarus showed the same event produces different stress depending on threat and coping appraisals', significance: 'key' },
    { sign: 'Chronic stress raises allostatic load and damages health', mechanism: 'Persistently high cortisol impairs immune, cardiovascular and mood regulation', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A student’s heart races and palms sweat in the seconds before an exam', meaning: 'Fast SAM/sympathetic alarm response' },
    { clue: 'Weeks of sustained high cortisol during a prolonged crisis while still coping', meaning: 'Resistance stage of the GAS' },
    { clue: 'Illness, collapse and burnout after months of unrelenting demand', meaning: 'Exhaustion stage of the GAS' },
    { clue: 'Two people face the same layoff; one is devastated, the other sees an opportunity', meaning: 'Difference in cognitive appraisal (Lazarus)' },
    { clue: 'One patient writes a plan and tackles the problem; another vents to a friend', meaning: 'Problem-focused versus emotion-focused coping' },
  ],

  treatment: [
    { logic: 'Target appraisal and coping', detail: 'Cognitive reframing shifts a threat appraisal toward a challenge appraisal; skills-building strengthens both problem- and emotion-focused coping ([[beh-resilience]]).' },
    { logic: 'Reduce allostatic load', detail: 'Sleep, physical activity, relaxation and social support lower sustained cortisol and buffer stress-related illness.' },
  ],

  mnemonics: [
    { hook: 'Selye’s GAS = ARE you stressed?', expansion: ['Alarm — fight-or-flight surge', 'Resistance — sustained adaptation', 'Exhaustion — reserves depleted, illness'] },
  ],

  traps: [
    {
      questionCategory: 'What determines the stress response',
      wrongInstinct: 'The severity of the stressor alone determines how stressed a person becomes',
      rightAnswer: 'The person’s cognitive appraisal of threat and of their ability to cope determines the response',
      why: 'Lazarus’ transactional model makes appraisal, not the raw event, the pivotal variable.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'In Selye’s General Adaptation Syndrome, which stage reflects depletion of the body’s reserves and the onset of stress-related illness?',
      options: [
        { id: 'a', text: 'Alarm' },
        { id: 'b', text: 'Resistance' },
        { id: 'c', text: 'Exhaustion' },
        { id: 'd', text: 'Appraisal' },
      ],
      answerId: 'c',
      explanation: 'The exhaustion stage follows prolonged demand: adaptive reserves are depleted and stress-related illness emerges. Alarm is the initial surge; resistance is sustained adaptation.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'The end-organ that secretes cortisol in the HPA axis stress response is the:',
      options: [
        { id: 'a', text: 'Adrenal medulla' },
        { id: 'b', text: 'Adrenal cortex' },
        { id: 'c', text: 'Anterior pituitary' },
        { id: 'd', text: 'Hypothalamus' },
      ],
      answerId: 'b',
      explanation: 'The hypothalamus releases CRH, the anterior pituitary releases ACTH, and ACTH stimulates the adrenal cortex to secrete cortisol. The adrenal medulla releases adrenaline via the SAM axis.',
      tests: 'exam',
    },
  ],
};

export default behStressResponse;
