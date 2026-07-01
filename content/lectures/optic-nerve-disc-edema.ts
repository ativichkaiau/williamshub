import type { Lecture } from '../../lib/types';

export const opticNerveDiscEdema: Lecture = {
  id: 'optic-nerve-disc-edema',
  title: 'Optic Nerve Disorders & Disc Edema',
  system: 'neuro',
  source: 'L4 — Common Eye Disorders',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L4 Common Eye Disorders' },
    { kind: 'disease', label: 'Optic neuritis / AION' },
    { kind: 'mechanism', label: 'Disc edema causes' },
    { kind: 'exam', label: 'Papilledema vs glaucoma' },
  ],

  highYield: [
    '**Four causes of a swollen disc**: **↑ICP → papilledema** (bilateral, IIH), **inflammation → optic neuritis (papillitis)**, **ischemia → anterior ischemic optic neuropathy (AION)**, **compression → orbital/optic-nerve tumor**.',
    '**Papilledema** = bilateral disc swelling from raised ICP (headache worse lying down, transient visual obscurations, CN VI palsy). **IIH** = young obese woman, normal imaging, high opening pressure.',
    '**Optic neuritis**: acute/subacute loss, **retrobulbar pain worse on eye movement**, **RAPD**, **color (red) desaturation**; young **women**, linked to **MS/demyelination**. IV methylprednisolone speeds recovery (final acuity unchanged).',
    '**AION**: **arteritic (giant cell arteritis)** = painful, severe loss, **↑ESR/CRP** → **urgent steroids** to save the other eye; **non-arteritic** = painless, associated with **DM/HT**.',
    '**Glaucomatous optic neuropathy** (2nd leading cause of blindness): most types are **painless progressive** (open-angle, ↑IOP); **acute angle-closure** = **painful red eye, mid-dilated fixed pupil, corneal edema, ↑IOP** — an emergency.',
  ],

  mechanism: {
    title: 'Why the disc swells (or cups) → the diagnosis',
    steps: [
      { id: 's1', label: '↑ICP → bilateral papilledema' },
      { id: 's2', label: 'Inflammation → optic neuritis (RAPD, painful movement)', emphasis: 'key' },
      { id: 's3', label: 'Ischemia → AION (arteritic vs non-arteritic)' },
      { id: 's4', label: 'Angle closure → acute painful red eye + ↑IOP', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'RAPD + pain on eye movement + red desaturation', mechanism: 'Optic neuritis', significance: 'key' },
    { sign: 'Bilateral disc swelling + headache + CN VI palsy', mechanism: 'Raised ICP → papilledema', significance: 'key' },
    { sign: 'Painful red eye, mid-dilated fixed pupil, hazy cornea', mechanism: 'Acute angle-closure glaucoma', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Fundoscopy (disc swelling vs cupping)', meaning: 'Papilledema/AION vs glaucoma' },
    { clue: 'ESR/CRP (± temporal artery biopsy)', meaning: 'Arteritic AION (GCA)' },
    { clue: 'MRI + LP opening pressure; IOP measurement', meaning: 'Optic neuritis/IIH; glaucoma' },
  ],

  treatment: [
    { logic: 'Arteritic AION/GCA: immediate high-dose steroids', detail: 'Protect the fellow eye — do not wait for biopsy.' },
    { logic: 'Optic neuritis: IV methylprednisolone', detail: 'Faster recovery; evaluate for MS.' },
    { logic: 'Acute angle-closure: lower IOP urgently + iridotomy', detail: 'Sight-threatening emergency.' },
  ],

  mnemonics: [
    { hook: 'Disc edema causes = “PION”: Papilledema, Inflammation, Ischemia (AION), compressiON', expansion: ['ICP, optic neuritis, AION, tumor'] },
    { hook: 'Arteritic AION = GCA → steroids NOW to save the other eye', expansion: ['Painful, ↑ESR; non-arteritic = painless, DM/HT'] },
  ],

  traps: [
    {
      questionCategory: 'Painful visual loss with a swollen disc',
      wrongInstinct: 'An older patient with sudden painless visual loss and a swollen disc just needs blood-pressure control',
      rightAnswer: 'Check ESR/CRP — arteritic AION from giant cell arteritis needs immediate steroids to protect the fellow eye',
      why: 'Non-arteritic AION relates to vascular risk factors, but arteritic AION (GCA) can rapidly blind the other eye; the inflammatory markers (and jaw claudication, scalp tenderness) mandate urgent steroids.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 30-year-old woman has subacute loss of vision in one eye with pain on eye movement, an RAPD, and reduced color vision. The most likely diagnosis is:',
      options: [
        { id: 'a', text: 'Non-arteritic AION' },
        { id: 'b', text: 'Optic neuritis' },
        { id: 'c', text: 'Central retinal artery occlusion' },
        { id: 'd', text: 'Acute angle-closure glaucoma' },
      ],
      answerId: 'b',
      explanation: 'Painful (worse on eye movement) subacute monocular loss with an RAPD and color desaturation in a young woman is optic neuritis, strongly associated with demyelination/MS.',
      tests: 'exam',
    },
  ],
};

export default opticNerveDiscEdema;
