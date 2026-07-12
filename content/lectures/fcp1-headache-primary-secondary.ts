import type { Lecture } from '../../lib/types';

export const fcp1HeadachePrimarySecondary: Lecture = {
  id: 'fcp1-headache-primary-secondary',
  title: 'Headache — Primary vs Secondary',
  system: 'clinical',
  source: 'L24 — Headache, Dizziness & Vertigo',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L24 Headache & Dizziness' },
    { kind: 'disease', label: 'Migraine · tension · cluster' },
    { kind: 'mechanism', label: 'Primary vs secondary' },
    { kind: 'exam', label: 'Headache phenotyping' },
  ],

  highYield: [
    'Most headaches are **primary** (migraine, tension-type, cluster) with a **normal neurological exam**; the job is to phenotype them while always screening for a **secondary** cause → [[fcp1-headache-red-flags]].',
    '**Migraine:** recurrent, **unilateral, pulsating**, moderate-to-severe, lasting **4–72 h**, with **nausea and photophobia/phonophobia**, worsened by activity, ± reversible aura.',
    '**Tension-type:** **bilateral, band-like** pressing/tightening pain, mild-to-moderate, **no nausea**, not aggravated by routine activity — the commonest headache.',
    '**Cluster:** severe **strictly unilateral orbital/temporal** pain lasting 15–180 min with **ipsilateral autonomic features** (lacrimation, rhinorrhoea, ptosis/miosis) and **restlessness**, in circadian clusters.',
    'A **new headache phenotype**, or one that differs from the patient’s usual pattern, needs a secondary cause excluded; dizziness often overlaps → [[fcp1-dizziness-vertigo]].',
  ],

  mechanism: {
    title: 'Phenotyping the headache',
    steps: [
      { id: 's1', label: 'Recurrent headache + normal neuro exam → primary', emphasis: 'key' },
      { id: 's2', label: 'Phenotype: migraine vs tension-type vs cluster', emphasis: 'key' },
      { id: 's3', label: 'New, worst-ever or changed pattern → exclude secondary', emphasis: 'danger' },
      { id: 's4', label: 'No red flags → phenotype-directed treatment', emphasis: 'normal' },
    ],
  },

  examFindings: [
    { sign: 'Unilateral pulsating pain + nausea/photophobia, worse on activity', mechanism: 'Migraine (trigeminovascular activation)', significance: 'key' },
    { sign: 'Bilateral band-like pressure, no nausea', mechanism: 'Tension-type headache', significance: 'key' },
    { sign: 'Unilateral orbital pain + ipsilateral tearing, ptosis, restlessness', mechanism: 'Cluster (trigeminal-autonomic reflex)', significance: 'key' },
    { sign: 'Normal fundi and neurological exam', mechanism: 'Supports a primary headache', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Typical recurrent phenotype with a normal exam', meaning: 'Clinical diagnosis — no neuroimaging needed' },
    { clue: 'Aura: gradual, spreading, fully reversible visual/sensory symptoms <60 min', meaning: 'Migraine aura (unlike TIA, which is sudden and maximal at onset)' },
    { clue: 'Any red-flag feature', meaning: 'Neuroimaging ± lumbar puncture → [[fcp1-headache-red-flags]]' },
    { clue: 'Headache diary', meaning: 'Maps frequency, triggers and medication-overuse headache' },
  ],

  treatment: [
    { logic: 'Acute migraine: simple analgesia/NSAID → triptan', detail: 'Add an antiemetic, treat early, and limit analgesic days to avoid medication-overuse headache.' },
    { logic: 'Prophylaxis if attacks are frequent or disabling', detail: 'Migraine: propranolol, amitriptyline or topiramate. Cluster: high-flow oxygen + subcutaneous sumatriptan acutely, verapamil to prevent.' },
    { logic: 'Tension-type: simple analgesia plus lifestyle', detail: 'Address stress, posture and sleep; avoid overusing analgesics.' },
  ],

  mnemonics: [
    { hook: 'POUND for migraine: Pulsatile, One-day (4–72 h), Unilateral, Nausea, Disabling', expansion: ['≥4 features → migraine likely', 'Tension = bilateral band, no nausea', 'Cluster = orbital pain + autonomic features + restless'] },
  ],

  traps: [
    {
      questionCategory: 'Primary vs secondary',
      wrongInstinct: 'A very severe headache must have a dangerous cause',
      rightAnswer: 'Severity alone does not localise; pattern and red flags decide — a thunderclap onset (peak <1 min) is the danger, not intensity itself',
      why: 'Migraine and cluster are agonising yet benign; sudden onset and abnormal signs are what flag a secondary cause.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 26-year-old woman has recurrent attacks of unilateral throbbing headache lasting most of a day, with nausea and a need to lie in a dark room; her neurological exam is normal. The most likely diagnosis is:',
      options: [
        { id: 'a', text: 'Tension-type headache' },
        { id: 'b', text: 'Migraine' },
        { id: 'c', text: 'Cluster headache' },
        { id: 'd', text: 'Subarachnoid haemorrhage' },
      ],
      answerId: 'b',
      explanation: 'A unilateral pulsating headache lasting 4–72 h with nausea and photophobia and a normal exam is migraine.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'A 40-year-old man has bouts of severe right orbital pain lasting about an hour, several times a day for two weeks, with right-sided tearing, a droopy lid and marked agitation. The best description is:',
      options: [
        { id: 'a', text: 'Migraine with aura' },
        { id: 'b', text: 'Tension-type headache' },
        { id: 'c', text: 'Cluster headache' },
        { id: 'd', text: 'Trigeminal neuralgia' },
      ],
      answerId: 'c',
      explanation: 'Strictly unilateral orbital pain with ipsilateral cranial autonomic features and restlessness in circadian clusters is cluster headache.',
      tests: 'disease',
    },
  ],
};

export default fcp1HeadachePrimarySecondary;
