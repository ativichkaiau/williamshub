import type { Lecture } from '../../lib/types';

export const periodicParalysis: Lecture = {
  id: 'periodic-paralysis',
  title: 'Periodic Paralysis & Weakness Localization',
  system: 'neuro',
  source: 'L6 — Metabolic & Regulatory Disorders',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L6 Metabolic & Regulatory' },
    { kind: 'disease', label: 'Periodic paralysis' },
    { kind: 'mechanism', label: 'Channelopathy' },
    { kind: 'exam', label: 'Episodic weakness' },
  ],

  highYield: [
    '**Periodic paralysis (PP)** = episodic flaccid weakness with **normal strength between attacks**; **eye, bulbar and respiratory muscles are usually spared**. **Primary PP = autosomal-dominant skeletal-muscle channelopathies**.',
    '**Hypokalemic PP** (Ca or Na channel): attacks triggered by **carbohydrate load, rest after exercise, stress**; last **hours–days**; **K⁺ low**.',
    '**Hyperkalemic PP** (Na channel): triggered by **fasting, rest after exercise**; **shorter (minutes–hours)**, frequent; **K⁺ high**; often with **myotonia**. **Andersen-Tawil** (K channel): dysmorphism + **long QT / ventricular arrhythmia**.',
    '**Secondary PP**: **low K⁺** — **thyrotoxic PP** (Asian men, thyrotoxicosis), hyperaldosteronism, renal tubular acidosis, diuretics; **high K⁺** — Addison disease.',
    'Weakness localization (LMN side): **root/plexus/nerve** (radicular/neuropathic pattern) · **anterior horn cell** (asymmetric, bulbar, fasciculation) · **NMJ** (fatigable, ocular/bulbar, no atrophy) · **muscle** (proximal, ± myalgia). Contrast with **UMN** (spastic, hyperreflexic, Babinski +).',
  ],

  mechanism: {
    title: 'Ion-channel/K⁺ shift → transient membrane inexcitability',
    steps: [
      { id: 's1', label: 'Trigger (carbs/rest/fasting/thyrotoxicosis)' },
      { id: 's2', label: 'K⁺ shift + muscle Na/Ca/K channel dysfunction', emphasis: 'key' },
      { id: 's3', label: 'Sarcolemma becomes inexcitable → flaccid weakness' },
      { id: 's4', label: 'Recovery between attacks; check for thyroid/QT', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Episodic flaccid limb weakness sparing eyes/bulbar/respiration', mechanism: 'Periodic paralysis (channelopathy)', significance: 'key' },
    { sign: 'Attacks after heavy carbohydrate meals + family history', mechanism: 'Hypokalemic PP', significance: 'key' },
    { sign: 'Myotonia (or dysmorphism + long QT)', mechanism: 'Hyperkalemic PP / Andersen-Tawil', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Serum potassium during an attack', meaning: 'Hypo- vs hyperkalemic PP' },
    { clue: 'Thyroid function; ECG (QT)', meaning: 'Thyrotoxic PP; Andersen-Tawil arrhythmia risk' },
    { clue: 'Genetic testing / family history', meaning: 'Primary channelopathy subtype' },
  ],

  treatment: [
    { logic: 'Correct and avoid the potassium trigger; treat thyrotoxicosis', detail: 'Cautious K⁺ replacement or reduction per subtype.' },
    { logic: 'Acetazolamide (some subtypes); monitor QT in Andersen-Tawil', detail: 'Reduce attack frequency; cardiac safety.' },
  ],

  mnemonics: [
    { hook: 'HypoKPP: carbs/rest trigger, K↓, hours–days; HyperKPP: fasting, K↑, + myotonia', expansion: ['Andersen-Tawil = K channel + long QT + dysmorphism'] },
    { hook: 'Thyrotoxic PP: young Asian man + low K⁺ + thyrotoxic', expansion: ['Secondary, treat the thyroid'] },
  ],

  traps: [
    {
      questionCategory: 'Episodic weakness workup',
      wrongInstinct: 'Recurrent limb weakness in a young man is a psychiatric or non-organic problem',
      rightAnswer: 'Episodic flaccid weakness with a potassium shift (and often thyrotoxicosis or family history) is periodic paralysis — check K⁺ during the attack and thyroid function',
      why: 'PP is a real channelopathy/electrolyte disorder; measuring potassium during an attack and screening for thyrotoxicosis identifies a treatable cause and prevents dangerous arrhythmia (Andersen-Tawil).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 25-year-old man has recurrent attacks of limb weakness after heavy dessert meals or stress; eye, bulbar, and breathing muscles are spared, and his father is similarly affected. The most likely diagnosis is:',
      options: [
        { id: 'a', text: 'Myasthenia gravis' },
        { id: 'b', text: 'Hypokalemic periodic paralysis' },
        { id: 'c', text: 'Guillain-Barré syndrome' },
        { id: 'd', text: 'Amyotrophic lateral sclerosis' },
      ],
      answerId: 'b',
      explanation: 'Episodic flaccid weakness triggered by carbohydrate load/stress, sparing ocular/bulbar/respiratory muscles, with autosomal-dominant inheritance is hypokalemic periodic paralysis — check potassium during an attack.',
      tests: 'exam',
    },
  ],
};

export default periodicParalysis;
