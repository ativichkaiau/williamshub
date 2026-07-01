import type { Lecture } from '../../lib/types';

export const externalEarDisorders: Lecture = {
  id: 'external-ear-disorders',
  title: 'External Ear Disorders',
  system: 'neuro',
  source: 'L3 — Common Ear Disorders',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L3 Common Ear Disorders' },
    { kind: 'disease', label: 'Otitis externa' },
    { kind: 'mechanism', label: 'Barrier breakdown' },
    { kind: 'exam', label: 'Ramsay Hunt' },
  ],

  highYield: [
    '**Impacted cerumen / foreign body**: mechanical **CHL ± otalgia** (classically worse after water exposure).',
    '**Otitis externa (“swimmer’s ear”)**: loss of the cerumen/skin barrier → infection; progresses pre-inflammatory → acute (otalgia, otorrhea, canal swelling) → chronic (eczematization, itch). **Otomycosis** = fungal form.',
    '**Malignant (necrotizing) otitis externa**: **Pseudomonas** skull-base **osteomyelitis** in **diabetics/immunocompromised** — severe pain, granulation tissue, cranial-nerve palsies. A medical emergency.',
    '**Pinna perichondritis**: **Pseudomonas** cartilage infection → **cauliflower ear**. Distinguish auricular **cellulitis (Staph)**, **erysipelas (β-hemolytic Strep)**, and herpes zoster.',
    '**Herpes zoster oticus / Ramsay Hunt syndrome**: vesicles in the ear + **facial (CN VII) palsy** ± SNHL/vertigo — VZV reactivation in the geniculate ganglion.',
  ],

  mechanism: {
    title: 'Broken skin/cerumen barrier → infection & pain',
    steps: [
      { id: 's1', label: 'Trauma / moisture / obstruction' },
      { id: 's2', label: 'Loss of protective cerumen–skin barrier', emphasis: 'key' },
      { id: 's3', label: 'Bacterial/fungal invasion (Pseudomonas, Staph, fungi)' },
      { id: 's4', label: 'Diabetic/immunocompromised → skull-base osteomyelitis', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Pain on tragal pressure / pinna traction + otorrhea', mechanism: 'Otitis externa (canal inflammation)', significance: 'key' },
    { sign: 'Vesicles on the auricle + facial palsy', mechanism: 'Ramsay Hunt (VZV, geniculate ganglion)', significance: 'key' },
    { sign: 'Granulation tissue in the canal + severe pain in a diabetic', mechanism: 'Necrotizing otitis externa (Pseudomonas)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Otoscopy (canal edema, debris, granulation)', meaning: 'Otitis externa vs necrotizing' },
    { clue: 'CT/MRI + inflammatory markers in suspected necrotizing OE', meaning: 'Skull-base osteomyelitis extent' },
    { clue: 'Culture (Pseudomonas, fungi)', meaning: 'Targets therapy' },
  ],

  treatment: [
    { logic: 'Aural toilet + topical antibiotic/antifungal drops', detail: 'Keep the ear dry for uncomplicated OE.' },
    { logic: 'Systemic anti-pseudomonal therapy for necrotizing OE', detail: 'Prolonged; control diabetes/immune status.' },
    { logic: 'Antivirals ± steroids for Ramsay Hunt', detail: 'Early treatment improves facial recovery.' },
  ],

  mnemonics: [
    { hook: 'Ramsay Hunt = zoster vesicles + facial palsy', expansion: ['Herpes zoster oticus (geniculate ganglion)'] },
    { hook: 'Diabetic + severe ear pain + granulation = necrotizing (Pseudomonas) OE', expansion: ['Skull-base osteomyelitis'] },
  ],

  traps: [
    {
      questionCategory: 'Facial palsy with an ear rash',
      wrongInstinct: 'A facial nerve palsy with an ear rash is just Bell’s palsy plus incidental dermatitis',
      rightAnswer: 'Vesicles in the ear with facial palsy = Ramsay Hunt syndrome (herpes zoster oticus), not idiopathic Bell’s palsy',
      why: 'Ramsay Hunt is VZV reactivation in the geniculate ganglion — the vesicles distinguish it from Bell’s palsy and it warrants antivirals plus steroids for a chance at facial recovery.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A poorly controlled diabetic has severe, unrelenting ear pain, purulent discharge, and granulation tissue in the ear canal. The most likely diagnosis and organism are:',
      options: [
        { id: 'a', text: 'Otomycosis; Aspergillus' },
        { id: 'b', text: 'Necrotizing (malignant) otitis externa; Pseudomonas aeruginosa' },
        { id: 'c', text: 'Acute otitis media; Streptococcus pneumoniae' },
        { id: 'd', text: 'Perichondritis; Staphylococcus aureus' },
      ],
      answerId: 'b',
      explanation: 'Severe pain with granulation tissue in a diabetic/immunocompromised patient is necrotizing (malignant) otitis externa — a Pseudomonas skull-base osteomyelitis requiring systemic anti-pseudomonal therapy.',
      tests: 'exam',
    },
  ],
};

export default externalEarDisorders;
