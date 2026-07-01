import type { Lecture } from '../../lib/types';

export const innerEarDisorders: Lecture = {
  id: 'inner-ear-disorders',
  title: 'Inner Ear Disorders & Temporal Bone',
  system: 'neuro',
  source: 'L3 — Common Ear Disorders',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L3 Common Ear Disorders' },
    { kind: 'disease', label: 'BPPV / Ménière' },
    { kind: 'mechanism', label: 'Endolymph' },
    { kind: 'exam', label: 'Dix-Hallpike' },
  ],

  highYield: [
    '**BPPV = most common cause of vertigo**: otoconia (canaliths) in the **posterior semicircular canal** → **brief positional vertigo**; **Dix-Hallpike** provokes vertigo + fatigable nystagmus. Treat with repositioning (Epley).',
    '**Ménière disease** (2nd most common): idiopathic **endolymphatic hydrops** → Reissner’s-membrane rupture → attacks. **Triad = recurrent vertigo + fluctuating SNHL + tinnitus/aural fullness**.',
    '**Idiopathic sudden SNHL**: hearing loss over **<3 days** (≥30 dB across 3 frequencies) — an **otologic emergency** (early steroids).',
    '**Labyrinthitis** = SNHL **+** vertigo (spreads from otitis media or meningitis; note **Streptococcus suis**, “ไข้หูดับ”). **Vestibular neuritis** = vertigo for days with **no hearing loss** (post-viral).',
    '**Ototoxicity** (aminoglycosides, etc.) damages **outer hair cells, base → apex** (high-frequency first). **Presbycusis** = age-related bilateral high-frequency SNHL; **noise-induced** loss = a **4-kHz notch**. **Temporal bone fracture**: longitudinal (CHL, common) vs transverse (SNHL/facial palsy).',
  ],

  mechanism: {
    title: 'Fluid/hair-cell disturbance → vertigo ± SNHL',
    steps: [
      { id: 's1', label: 'Canaliths (BPPV) / hydrops (Ménière) / toxin / infection' },
      { id: 's2', label: 'Disturbed endolymph or hair-cell function', emphasis: 'key' },
      { id: 's3', label: 'Vertigo ± sensorineural hearing loss / tinnitus' },
      { id: 's4', label: 'Sudden SNHL = emergency (treat early)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Brief positional vertigo + fatigable nystagmus on Dix-Hallpike', mechanism: 'Posterior-canal BPPV', significance: 'key' },
    { sign: 'Vertigo + fluctuating SNHL + tinnitus/fullness', mechanism: 'Ménière (endolymphatic hydrops)', significance: 'key' },
    { sign: 'Days of vertigo with intact hearing', mechanism: 'Vestibular neuritis (no cochlear involvement)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Dix-Hallpike / positional testing', meaning: 'BPPV diagnosis' },
    { clue: 'Audiogram (fluctuating low-frequency SNHL; 4-kHz notch)', meaning: 'Ménière; noise-induced loss' },
    { clue: 'Urgent audiometry for sudden loss; CT temporal bone for trauma', meaning: 'Sudden SNHL; fracture type' },
  ],

  treatment: [
    { logic: 'BPPV: canalith repositioning (Epley)', detail: 'Vestibular suppressants only short-term.' },
    { logic: 'Ménière: low-salt diet, diuretics; sudden SNHL: prompt steroids', detail: 'Reduce hydrops; salvage hearing early.' },
    { logic: 'Remove/limit ototoxins; hearing protection', detail: 'Ototoxicity & noise-induced loss are preventable.' },
  ],

  mnemonics: [
    { hook: 'Ménière triad: Vertigo + hearing loss + tinnitus/fullness', expansion: ['Fluctuating low-frequency SNHL'] },
    { hook: 'Neuritis = No hearing loss; labyrinthitis = Loss of hearing', expansion: ['Cochlea spared vs involved'] },
  ],

  traps: [
    {
      questionCategory: 'Vertigo ± hearing loss',
      wrongInstinct: 'Acute vertigo lasting days with hearing loss is vestibular neuritis',
      rightAnswer: 'Vestibular neuritis spares hearing; vertigo WITH hearing loss is labyrinthitis (or a central cause)',
      why: 'Vestibular neuritis affects only the vestibular nerve (no cochlear symptoms), whereas labyrinthitis involves the whole labyrinth and adds SNHL — the presence of hearing loss separates them.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient has recurrent episodes of spinning vertigo lasting hours, with fluctuating hearing loss, tinnitus, and a sense of fullness in one ear. The diagnosis is:',
      options: [
        { id: 'a', text: 'Benign paroxysmal positional vertigo' },
        { id: 'b', text: 'Ménière disease (endolymphatic hydrops)' },
        { id: 'c', text: 'Vestibular neuritis' },
        { id: 'd', text: 'Otosclerosis' },
      ],
      answerId: 'b',
      explanation: 'Episodic vertigo (hours) with fluctuating sensorineural hearing loss, tinnitus, and aural fullness is the classic Ménière triad from idiopathic endolymphatic hydrops.',
      tests: 'exam',
    },
  ],
};

export default innerEarDisorders;
