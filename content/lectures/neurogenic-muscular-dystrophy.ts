import type { Lecture } from '../../lib/types';

export const neurogenicMuscularDystrophy: Lecture = {
  id: 'neurogenic-muscular-dystrophy',
  title: 'Neurogenic Atrophy & Muscular Dystrophy',
  system: 'msk',
  source: 'L2 — Diseases of Skeletal Muscle',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'MSK' },
    { kind: 'lecture', label: 'L2 Diseases of Skeletal Muscle' },
    { kind: 'disease', label: 'Dystrophy / denervation' },
    { kind: 'mechanism', label: 'Nerve vs muscle' },
    { kind: 'exam', label: 'Duchenne / dystrophin' },
  ],

  highYield: [
    'Muscle fiber types: **Type I (slow, oxidative, red)** and **Type II (fast, glycolytic, white)** — normally in a **checkerboard** pattern (ATPase stain). **Creatine kinase (CK)** is the serum marker of muscle damage.',
    '**Neurogenic (denervation) atrophy** (ALS, polio) → **grouped atrophy and fiber-type grouping** (reinnervation). **Spinal muscular atrophy (Werdnig-Hoffmann, SMA1)** = autosomal-recessive **SMN1** loss → anterior-horn-cell death, floppy infant, **panfascicular atrophy**.',
    '**Duchenne muscular dystrophy (DMD)** = **X-linked recessive, dystrophin (Xp21) absent** → onset ~age 5, **Gowers sign**, **calf pseudohypertrophy** (fatty infiltration), wheelchair by ~10–12, very high CK. **Becker** is the milder allelic form (reduced/abnormal dystrophin).',
    'DMD histology: variable fiber size, **central nuclei, degeneration/regeneration, endomysial fibrosis and fatty replacement**.',
    'Other dystrophies: **myotonic** (CTG repeat, DMPK), limb-girdle, facioscapulohumeral, Emery-Dreifuss.',
  ],

  mechanism: {
    title: 'Localize weakness to the nerve or the muscle',
    steps: [
      { id: 's1', label: 'Denervation → grouped atrophy + fiber-type grouping', emphasis: 'key' },
      { id: 's2', label: 'SMA: anterior horn cell loss (SMN1) → panfascicular atrophy' },
      { id: 's3', label: 'DMD: dystrophin absent → membrane fragility' },
      { id: 's4', label: 'Degeneration/regeneration → fibrosis/fatty replacement', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Gowers sign + calf pseudohypertrophy in a boy', mechanism: 'Duchenne muscular dystrophy', significance: 'key' },
    { sign: 'Fiber-type grouping / grouped atrophy', mechanism: 'Denervation and reinnervation', significance: 'key' },
    { sign: 'Floppy infant with panfascicular atrophy', mechanism: 'SMA (Werdnig-Hoffmann)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Serum CK (markedly elevated in DMD)', meaning: 'Muscle-fiber damage' },
    { clue: 'Dystrophin immunostain / genetics', meaning: 'Duchenne (absent) vs Becker (reduced)' },
    { clue: 'Biopsy pattern (grouped vs panfascicular atrophy)', meaning: 'Denervation vs SMA' },
  ],

  treatment: [
    { logic: 'DMD: glucocorticoids, supportive/cardiorespiratory care', detail: 'Emerging exon-skipping/gene therapies.' },
    { logic: 'SMA: SMN-directed therapy (e.g. nusinersen)', detail: 'Modifies SMN2 splicing.' },
  ],

  mnemonics: [
    { hook: 'Duchenne = Deleted dystrophin (X-linked); Becker = Better (partial)', expansion: ['Gowers sign, calf pseudohypertrophy'] },
    { hook: 'Denervation = fiber-type Grouping; SMA = panfascicular atrophy', expansion: ['Neurogenic patterns'] },
  ],

  traps: [
    {
      questionCategory: 'Calf enlargement in Duchenne',
      wrongInstinct: 'Enlarged calves in Duchenne muscular dystrophy indicate strong, hypertrophied muscle',
      rightAnswer: 'It is PSEUDOhypertrophy — the calf is enlarged by fatty and fibrous replacement of degenerated muscle, not by true muscle growth',
      why: 'The bulky calf is weak because functional muscle is being lost and replaced by fat/fibrosis, a hallmark of Duchenne.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 5-year-old boy has proximal weakness, uses his hands to “climb up” his legs when standing (Gowers sign), has enlarged calves, and a very high creatine kinase. The most likely diagnosis is:',
      options: [
        { id: 'a', text: 'Myasthenia gravis' },
        { id: 'b', text: 'Duchenne muscular dystrophy' },
        { id: 'c', text: 'Dermatomyositis' },
        { id: 'd', text: 'Spinal muscular atrophy type III' },
      ],
      answerId: 'b',
      explanation: 'X-linked Duchenne muscular dystrophy (absent dystrophin) presents around age 5 with proximal weakness, Gowers sign, calf pseudohypertrophy, and a markedly elevated CK.',
      tests: 'exam',
    },
  ],
};

export default neurogenicMuscularDystrophy;
