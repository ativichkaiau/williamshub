import type { Lecture } from '../../lib/types';

export const obstructiveSleepApnoea: Lecture = {
  id: 'obstructive-sleep-apnoea',
  title: 'Obstructive Sleep Apnoea & Hypoventilation',
  system: 'respiratory',
  source: 'L11 — Ventilation & Circulatory Disorders of the Lung',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L11 Circulatory Lung' },
    { kind: 'disease', label: 'Sleep apnoea' },
    { kind: 'exam', label: 'OSA & CPAP' },
  ],

  highYield: [
    '**Obstructive sleep apnoea (OSA) is repetitive collapse of the UPPER AIRWAY during sleep, causing recurrent apnoeas/hypopnoeas with oxygen desaturation and arousals.** The pharyngeal muscles relax in sleep and the airway occludes despite continued respiratory effort — a disorder of ventilation during sleep, distinct from lung parenchymal disease.',
    '**Risk factors are obesity (the dominant one), a large neck/crowded oropharynx, male sex, and retrognathia.** The classic picture: **loud SNORING, witnessed apnoeas, and excessive DAYTIME SLEEPINESS** (unrefreshing sleep, morning headache, poor concentration). It is diagnosed by **polysomnography** (sleep study), quantified by the apnoea–hypopnoea index (AHI).',
    '**The physiology: each obstruction → hypoxia + hypercapnia → arousal to restore airway tone → fragmented sleep.** Repeated nocturnal hypoxia and surges in sympathetic activity cause **systemic HYPERTENSION, and over time pulmonary hypertension and right heart strain**, plus increased cardiovascular and accident risk (daytime somnolence).',
    '**Central sleep apnoea (no respiratory effort — a problem of drive, e.g. Cheyne–Stokes in heart failure) and obesity hypoventilation syndrome (chronic daytime hypercapnia in obesity) are related ventilatory disorders** to distinguish from OSA (where effort continues against an obstructed airway).',
    '**First-line treatment is CPAP (continuous positive airway pressure), which splints the airway open**, plus weight loss and avoiding sedatives/alcohol; mandibular devices and surgery are alternatives. OSA links obesity to cardiovascular disease and is a common, under-recognised cause of resistant hypertension and daytime sleepiness — relevant to the whole ventilation/circulation theme ([[ards-pulmonary-hypertension-atelectasis]]).',
  ],

  mechanism: {
    title: 'Sleep upper-airway collapse → hypoxia/arousal → HTN, pulmonary HTN, sleepiness',
    steps: [
      { id: 's1', label: 'OSA = repetitive upper-airway collapse in sleep (effort continues)', emphasis: 'key' },
      { id: 's2', label: 'Risk: obesity, large neck, male; snoring + apnoeas + daytime sleepiness', emphasis: 'key' },
      { id: 's3', label: 'Hypoxia + arousal → fragmented sleep; sympathetic surges', emphasis: 'key' },
      { id: 's4', label: 'Consequences: hypertension, pulmonary HTN, cardiovascular/accident risk', emphasis: 'danger' },
      { id: 's5', label: 'Dx: polysomnography (AHI); treat: CPAP + weight loss', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Loud snoring + witnessed apnoeas + daytime sleepiness in an obese patient', mechanism: 'Obstructive sleep apnoea', significance: 'key' },
    { sign: 'Resistant hypertension', mechanism: 'Nocturnal hypoxia/sympathetic activation in OSA', significance: 'key' },
    { sign: 'Continued respiratory effort against an occluded airway', mechanism: 'Obstructive (vs central) apnoea', significance: 'key' },
    { sign: 'Chronic daytime hypercapnia in severe obesity', mechanism: 'Obesity hypoventilation syndrome', significance: 'supportive' },
    { sign: 'Improvement of sleepiness/BP with CPAP', mechanism: 'Airway splinting relieves obstruction', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The diagnostic test for sleep apnoea', meaning: 'Polysomnography (sleep study; apnoea–hypopnoea index)' },
    { clue: 'The dominant modifiable risk factor for OSA', meaning: 'Obesity' },
    { clue: 'The first-line treatment for moderate–severe OSA', meaning: 'CPAP (continuous positive airway pressure)' },
    { clue: 'The difference between obstructive and central apnoea', meaning: 'Continued respiratory effort (obstructive) vs absent effort (central)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'OSA is a common, under-recognised cause of resistant hypertension, pulmonary hypertension/right heart strain ([[ards-pulmonary-hypertension-atelectasis]]) and daytime sleepiness; it links obesity ([[obesity-pathophysiology]]) to cardiovascular disease. CPAP plus weight loss is first-line, and it fits the ventilation-disorder theme of L11 alongside the clinical assessment in [[respiratory-clinical-approach]].' },
  ],

  mnemonics: [
    { hook: 'OSA = "Snoring + Sleepiness + Sats drop" (obese, collapsing airway) → CPAP', expansion: ['Effort continues (vs central)', 'Polysomnography diagnoses (AHI)'] },
    { hook: 'Obstructive vs Central: "Obstructive = effort present; Central = no effort"', expansion: ['Obesity hypoventilation = daytime hypercapnia', 'Cheyne–Stokes in heart failure'] },
  ],

  traps: [
    {
      questionCategory: 'Obstructive vs central sleep apnoea',
      wrongInstinct: 'All sleep apnoea reflects a failure of respiratory drive',
      rightAnswer: 'In OBSTRUCTIVE sleep apnoea, respiratory EFFORT CONTINUES against a collapsed upper airway (a mechanical obstruction), whereas CENTRAL sleep apnoea has ABSENT respiratory effort (a drive problem) — the presence of effort distinguishes them',
      why: 'The two have different mechanisms and treatments (CPAP/weight loss vs treating the underlying drive/heart failure); the presence or absence of respiratory effort on the sleep study separates them.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An obese man presents with loud snoring, witnessed pauses in breathing at night and excessive daytime sleepiness. The most likely diagnosis and first-line treatment are:',
      options: [
        { id: 'a', text: 'Obstructive sleep apnoea — CPAP (and weight loss)' },
        { id: 'b', text: 'Asthma — inhaled corticosteroids' },
        { id: 'c', text: 'COPD — long-acting bronchodilators' },
        { id: 'd', text: 'Pulmonary embolism — anticoagulation' },
      ],
      answerId: 'a',
      explanation: 'The triad of snoring, witnessed apnoeas and daytime sleepiness in an obese patient is classic obstructive sleep apnoea, diagnosed by polysomnography and treated first-line with CPAP plus weight loss and avoidance of sedatives/alcohol.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Untreated obstructive sleep apnoea is an important, often reversible contributor to:',
      options: [
        { id: 'a', text: 'Systemic (often resistant) hypertension' },
        { id: 'b', text: 'Iron-deficiency anaemia' },
        { id: 'c', text: 'Peptic ulcer disease' },
        { id: 'd', text: 'Hyperthyroidism' },
      ],
      answerId: 'a',
      explanation: 'Recurrent nocturnal hypoxia and sympathetic surges in OSA raise blood pressure and can cause resistant hypertension (and, over time, pulmonary hypertension); treating OSA with CPAP can improve blood-pressure control.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default obstructiveSleepApnoea;
