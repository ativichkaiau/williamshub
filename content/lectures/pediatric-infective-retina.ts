import type { Lecture } from '../../lib/types';

export const pediatricInfectiveRetina: Lecture = {
  id: 'pediatric-infective-retina',
  title: 'Retinoblastoma, ROP & Endophthalmitis',
  system: 'neuro',
  source: 'L4 — Common Eye Disorders',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L4 Common Eye Disorders' },
    { kind: 'disease', label: 'Leukocoria' },
    { kind: 'mechanism', label: 'RB1 / prematurity' },
    { kind: 'exam', label: 'White pupil' },
  ],

  highYield: [
    '**Retinoblastoma** = **most common primary intraocular malignancy of childhood** (usually <5 y). **RB1 gene, 13q14**; heritable (bilateral) or sporadic. Presents with **leukocoria (white pupil)** ± strabismus.',
    'Retinoblastoma treatment: focal therapy (cryo/laser), systemic or intra-arterial **chemotherapy**, radiation, **enucleation** if advanced.',
    '**Retinopathy of prematurity (ROP)**: abnormal retinal neovascularization in **premature/low-birth-weight** infants (screen **GA ≤30 wk or BW ≤1500 g**; oxygen exposure a key factor). Can cause leukocoria & retinal detachment; treat anti-VEGF/laser/surgery.',
    '**Endophthalmitis** = infection **inside the eyeball** → **acute painful visual loss**, hypopyon, red eye. Sources: **post-surgery, trauma, endogenous** spread.',
    'Endophthalmitis treatment: **intravitreal antibiotics (+ systemic) ± vitrectomy**. **Leukocoria DDx**: retinoblastoma, ROP, retinal detachment, mature cataract, vitreous hemorrhage.',
  ],

  mechanism: {
    title: 'White pupil or painful red eye → the pediatric/infective differential',
    steps: [
      { id: 's1', label: 'Leukocoria (white reflex)', emphasis: 'key' },
      { id: 's2', label: 'Malignant retinal cells (RB1) → retinoblastoma' },
      { id: 's3', label: 'Preterm neovascularization → ROP' },
      { id: 's4', label: 'Intraocular infection → endophthalmitis (painful)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Leukocoria (white pupillary reflex) in a young child', mechanism: 'Retinoblastoma / ROP / other', significance: 'key' },
    { sign: 'Painful red eye + hypopyon after surgery/trauma', mechanism: 'Endophthalmitis', significance: 'key' },
    { sign: 'Strabismus in a toddler', mechanism: 'Possible retinoblastoma — examine the fundus', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Dilated fundus exam ± ultrasound/MRI (retinoblastoma)', meaning: 'Calcified intraocular mass; avoid biopsy' },
    { clue: 'ROP screening schedule for at-risk neonates', meaning: 'Early detection & treatment' },
    { clue: 'Vitreous tap/culture for endophthalmitis', meaning: 'Identify organism' },
  ],

  treatment: [
    { logic: 'Retinoblastoma: chemo/focal therapy; enucleation if advanced', detail: 'Preserve life first, then vision/eye.' },
    { logic: 'Endophthalmitis: urgent intravitreal antibiotics ± vitrectomy', detail: 'Sight-threatening emergency.' },
    { logic: 'ROP: anti-VEGF / laser', detail: 'Prevent detachment.' },
  ],

  mnemonics: [
    { hook: 'Leukocoria in a child = retinoblastoma until proven otherwise', expansion: ['RB1, 13q14; also ROP, cataract, RD'] },
    { hook: 'Endophthalmitis = painful eye after surgery/trauma → tap & inject', expansion: ['Intravitreal antibiotics'] },
  ],

  traps: [
    {
      questionCategory: 'Leukocoria in a young child',
      wrongInstinct: 'A white pupil in a child is usually a congenital cataract to be scheduled electively',
      rightAnswer: 'Leukocoria must be worked up urgently — retinoblastoma (a life-threatening malignancy) is the key diagnosis to exclude',
      why: 'Although cataract, ROP and others cause leukocoria, retinoblastoma is a childhood cancer that can be fatal if missed — any white pupil warrants prompt fundus examination.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 2-year-old is brought in because a photograph showed a white reflex in one eye instead of red. The most important diagnosis to exclude is:',
      options: [
        { id: 'a', text: 'Conjunctivitis' },
        { id: 'b', text: 'Retinoblastoma' },
        { id: 'c', text: 'Refractive error' },
        { id: 'd', text: 'Allergic eye disease' },
      ],
      answerId: 'b',
      explanation: 'Leukocoria (white pupillary reflex) in a young child must prompt urgent evaluation to exclude retinoblastoma, the most common primary intraocular malignancy of childhood (RB1, 13q14).',
      tests: 'exam',
    },
  ],
};

export default pediatricInfectiveRetina;
