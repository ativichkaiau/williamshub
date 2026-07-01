import type { Lecture } from '../../lib/types';

export const limbicHypothalamus: Lecture = {
  id: 'limbic-hypothalamus',
  title: 'Limbic System & Hypothalamus',
  system: 'neuro',
  source: 'L1 — Clinical Neuroanatomy I',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L1 Clinical Neuroanatomy I' },
    { kind: 'disease', label: 'Limbic / hypothalamic' },
    { kind: 'mechanism', label: 'Papez circuit' },
    { kind: 'exam', label: 'Korsakoff / Klüver-Bucy' },
  ],

  highYield: [
    '**Limbic system = memory, emotion, drive.** **Hippocampus** consolidates short→long-term memory (via the **Papez circuit**: hippocampus → fornix → mammillary body → anterior thalamus → cingulate → back).',
    '**Amygdala = emotion/fear**; **septal area / nucleus accumbens (ventral striatum) = reward/pleasure** — the substrate of addiction (drugs, social media) and dopamine dysfunction in schizophrenia.',
    '**Korsakoff**: mammillary-body/dorsomedial thalamus damage (thiamine deficiency, alcohol) → **anterograde amnesia + confabulation**. **Klüver-Bucy** (bilateral amygdala/temporal): **hyperorality, hypersexuality, placidity, visual agnosia**.',
    '**Hypothalamus = homeostasis.** Thermoregulation: **anterior = heat loss (parasympathetic)**, **posterior = heat gain (sympathetic)**. Feeding: **lateral = hunger** (lesion → anorexia), **ventromedial = satiety** (lesion → hyperphagia/obesity).',
    'Hypothalamic outputs: **HPA axis, circadian clock (SCN), ADH/oxytocin (supraoptic/paraventricular)** — supraoptic damage → **diabetes insipidus**. A **pituitary tumor** compresses the chiasm → **bitemporal hemianopia**.',
  ],

  mechanism: {
    title: 'Node knocked out → the syndrome',
    steps: [
      { id: 's1', label: 'Mammillary body / dorsomedial thalamus → Korsakoff amnesia', emphasis: 'key' },
      { id: 's2', label: 'Bilateral amygdala → Klüver-Bucy' },
      { id: 's3', label: 'Hypothalamic nucleus → thermo/feeding/endocrine defect' },
      { id: 's4', label: 'Suprasellar mass → chiasm compression (bitemporal hemianopia)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Anterograde amnesia with confabulation', mechanism: 'Mammillary/thalamic (Papez) damage — Korsakoff', significance: 'key' },
    { sign: 'Hyperphagia and obesity', mechanism: 'Ventromedial (satiety) hypothalamic lesion', significance: 'key' },
    { sign: 'Bitemporal hemianopia', mechanism: 'Pituitary/suprasellar mass on the optic chiasm', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'MRI (temporal lobes, mammillary bodies, sella)', meaning: 'Localizes limbic/hypothalamic lesion' },
    { clue: 'Thiamine status / alcohol history', meaning: 'Wernicke-Korsakoff' },
    { clue: 'Pituitary hormone panel + visual fields', meaning: 'Hypothalamic-pituitary axis & chiasm' },
  ],

  treatment: [
    { logic: 'Thiamine for Wernicke to prevent Korsakoff', detail: 'Give before glucose.' },
    { logic: 'Treat the structural cause', detail: 'Resect/decompress suprasellar masses; hormone replacement.' },
  ],

  mnemonics: [
    { hook: 'Papez: Hippocampus → Fornix → Mammillary → Anterior thalamus → Cingulate', expansion: ['Memory loop; Korsakoff breaks the mammillary node'] },
    { hook: 'Ventromedial = satiety (lesion → obese); Lateral = hunger (lesion → anorexia)', expansion: ['“VM makes you sliM when intact”'] },
  ],

  traps: [
    {
      questionCategory: 'Hypothalamic feeding nuclei',
      wrongInstinct: 'A lesion causing obesity must be in the lateral (hunger) hypothalamus',
      rightAnswer: 'Obesity/hyperphagia follows a ventromedial (satiety) lesion; lateral lesions cause anorexia',
      why: 'The ventromedial nucleus is the satiety centre — destroy it and the patient overeats; the lateral nucleus is the feeding/hunger centre — destroy it and the patient stops eating.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A chronic heavy-alcohol user has profound difficulty forming new memories and fills gaps with fabricated stories. The structures classically damaged are the:',
      options: [
        { id: 'a', text: 'Bilateral amygdalae' },
        { id: 'b', text: 'Mammillary bodies and dorsomedial thalamus' },
        { id: 'c', text: 'Ventromedial hypothalamic nuclei' },
        { id: 'd', text: 'Occipital cortices' },
      ],
      answerId: 'b',
      explanation: 'Anterograde amnesia with confabulation is Korsakoff syndrome — thiamine-deficiency damage to the mammillary bodies and dorsomedial thalamus (Papez circuit nodes).',
      tests: 'exam',
    },
  ],
};

export default limbicHypothalamus;
