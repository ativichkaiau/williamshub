import type { Lecture } from '../../lib/types';

export const fcp1EyeRedEye: Lecture = {
  id: 'fcp1-eye-red-eye',
  title: 'The Red Eye',
  system: 'clinical',
  source: 'L33 — Common Eye Symptoms',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L33 Eye Symptoms' },
    { kind: 'disease', label: 'Conjunctivitis · glaucoma · keratitis · uveitis' },
    { kind: 'mechanism', label: 'Benign vs sight-threatening' },
    { kind: 'exam', label: 'Pain · vision · pupil' },
  ],

  highYield: [
    'The red eye splits into **benign** (conjunctivitis) and **sight-threatening** (acute angle-closure glaucoma, keratitis, anterior uveitis, scleritis); the **danger triad is pain, reduced vision and photophobia** — their absence reassures → contrast [[fcp1-eye-vision-loss]].',
    '**Conjunctivitis:** bilateral or spreading, gritty/itchy, discharge, **normal vision**, no significant pain, reactive pupil — viral (watery, contagious), bacterial (purulent) or allergic (itchy).',
    '**Acute angle-closure glaucoma:** sudden **painful** red eye, **haloes** around lights, blurred vision, a **fixed mid-dilated oval pupil**, a hard hazy globe, ± headache/nausea/vomiting — an emergency to lower intraocular pressure.',
    '**Keratitis:** pain, photophobia and watering with a corneal ulcer/dendrite (herpes) or contact-lens ulcer that **stains with fluorescein** — never treat blindly with steroids; refer.',
    '**Anterior uveitis:** painful photophobic red eye with **ciliary (perilimbal) flush**, a small/irregular pupil and anterior-chamber cells, often with a systemic association (e.g. HLA-B27) → urgent ophthalmology.',
  ],

  mechanism: {
    title: 'Benign vs sight-threatening red eye',
    steps: [
      { id: 's1', label: 'Pain + reduced vision + photophobia → danger triad', emphasis: 'danger' },
      { id: 's2', label: 'None of the triad, normal vision → conjunctivitis', emphasis: 'key' },
      { id: 's3', label: 'Fixed mid-dilated pupil + hard eye → acute glaucoma', emphasis: 'danger' },
      { id: 's4', label: 'Fluorescein-staining ulcer → keratitis', emphasis: 'key' },
      { id: 's5', label: 'Ciliary flush + small pupil + cells → uveitis', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Normal acuity, diffuse redness, discharge, reactive pupil', mechanism: 'Conjunctivitis (benign)', significance: 'key' },
    { sign: 'Fixed mid-dilated oval pupil, hazy cornea, hard globe', mechanism: 'Acute angle-closure glaucoma', significance: 'key' },
    { sign: 'Fluorescein-staining corneal defect (dendrite or ulcer)', mechanism: 'Keratitis (herpetic or contact-lens)', significance: 'key' },
    { sign: 'Perilimbal (ciliary) flush with a small/irregular pupil', mechanism: 'Anterior uveitis', significance: 'key' },
  ],

  investigations: [
    { clue: 'Red eye with normal vision, no pain, no photophobia', meaning: 'Conjunctivitis — clinical; hygiene advice, no urgent referral' },
    { clue: 'Painful red eye, haloes, mid-dilated pupil, hard globe', meaning: 'Measure intraocular pressure — acute angle-closure glaucoma, an emergency' },
    { clue: 'Photophobia with fluorescein uptake on the cornea', meaning: 'Slit-lamp for keratitis/ulcer; corneal scrape if infective' },
    { clue: 'Ciliary flush with anterior-chamber cells on slit-lamp', meaning: 'Anterior uveitis — ophthalmology and a search for a systemic cause' },
  ],

  treatment: [
    { logic: 'Sort benign from sight-threatening first', detail: 'Pain, reduced vision or photophobia mandates slit-lamp and same-day ophthalmology; simple conjunctivitis needs hygiene ± topical antibiotic.' },
    { logic: 'Acute angle-closure glaucoma: lower the pressure now', detail: 'Emergency IOP reduction (topical agents plus systemic acetazolamide) then urgent ophthalmology for definitive laser iridotomy.' },
    { logic: 'Never give topical steroids blindly for a red eye', detail: 'Steroids worsen herpetic keratitis and mask infection — refer an undiagnosed painful red eye.' },
  ],

  mnemonics: [
    { hook: 'Danger triad — Pain, reduced Vision, Photophobia → sight-threatening', expansion: ['None of these → likely conjunctivitis', 'Fixed mid-dilated pupil = acute glaucoma', 'Ciliary flush = keratitis or uveitis'] },
  ],

  traps: [
    {
      questionCategory: 'Red eye triage',
      wrongInstinct: 'Any red eye can be treated as conjunctivitis with drops',
      rightAnswer: 'Pain, reduced vision or photophobia signals a sight-threatening cause (glaucoma, keratitis, uveitis) needing urgent slit-lamp and referral',
      why: 'Conjunctivitis spares vision and is essentially painless; treating a dangerous red eye as conjunctivitis risks blindness.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 65-year-old presents with a sudden painful red right eye, blurred vision, haloes around lights and vomiting. The pupil is mid-dilated and fixed and the globe feels hard. The diagnosis is:',
      options: [
        { id: 'a', text: 'Bacterial conjunctivitis' },
        { id: 'b', text: 'Acute angle-closure glaucoma' },
        { id: 'c', text: 'Allergic conjunctivitis' },
        { id: 'd', text: 'Blepharitis' },
      ],
      answerId: 'b',
      explanation: 'A painful red eye with haloes, a fixed mid-dilated pupil and a hard globe is acute angle-closure glaucoma, an emergency.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'Which single feature most reliably distinguishes benign conjunctivitis from a sight-threatening red eye?',
      options: [
        { id: 'a', text: 'The presence of discharge' },
        { id: 'b', text: 'Normal visual acuity with no pain or photophobia' },
        { id: 'c', text: 'Bilateral redness' },
        { id: 'd', text: 'Itching' },
      ],
      answerId: 'b',
      explanation: 'Conjunctivitis preserves vision and is essentially painless; pain, reduced acuity or photophobia flags a sight-threatening cause.',
      tests: 'exam',
    },
  ],
};

export default fcp1EyeRedEye;
