import type { Lecture } from '../../lib/types';

export const fcp1EyeVisionLoss: Lecture = {
  id: 'fcp1-eye-vision-loss',
  title: 'Acute Vision Loss',
  system: 'clinical',
  source: 'L33 — Common Eye Symptoms',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L33 Eye Symptoms' },
    { kind: 'disease', label: 'CRAO · CRVO · detachment · GCA' },
    { kind: 'mechanism', label: 'Painless vs painful' },
    { kind: 'investigation', label: 'Fundoscopy · ESR' },
  ],

  highYield: [
    '**Acute vision loss is an ocular emergency** — first split **painless vs painful** and **transient vs persistent**; every case needs urgent acuity, pupils (relative afferent defect) and fundus → contrast [[fcp1-eye-red-eye]].',
    '**Painless sudden monocular loss:** **CRAO** (pale retina, cherry-red spot, RAPD — a “stroke of the eye”), **CRVO** (blood-and-thunder fundus), **retinal detachment** (flashes, floaters, a curtain) and **vitreous haemorrhage** (loss of the red reflex).',
    '**CRAO** is time-critical retinal ischaemia (irreversible after roughly 90 min) and, like amaurosis fugax, mandates a **stroke workup**; exclude **giant cell arteritis** in the older patient → [[fcp1-headache-red-flags]].',
    '**Painful vision loss:** acute angle-closure glaucoma, **optic neuritis** (pain on eye movement, reduced colour vision, RAPD, young adult — think demyelination) and severe keratitis/uveitis.',
    '**Transient monocular loss** (amaurosis fugax, “a curtain coming down” for minutes) is a **retinal TIA** → urgent carotid and cardiovascular workup; in the older patient always consider GCA.',
  ],

  mechanism: {
    title: 'Painless vs painful sudden loss',
    steps: [
      { id: 's1', label: 'Sudden loss → check acuity, RAPD, fundus urgently', emphasis: 'danger' },
      { id: 's2', label: 'Painless: CRAO, CRVO, detachment, vitreous bleed', emphasis: 'key' },
      { id: 's3', label: 'CRAO = retinal stroke; exclude GCA in the elderly', emphasis: 'danger' },
      { id: 's4', label: 'Painful: acute glaucoma, optic neuritis', emphasis: 'key' },
      { id: 's5', label: 'Transient (amaurosis fugax) → retinal TIA workup', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Pale retina with a cherry-red spot and a RAPD', mechanism: 'Central retinal artery occlusion', significance: 'key' },
    { sign: 'Widespread retinal haemorrhages with dilated tortuous veins', mechanism: 'Central retinal vein occlusion (blood-and-thunder)', significance: 'key' },
    { sign: 'Flashes, a shower of new floaters and a curtain over the field', mechanism: 'Retinal detachment', significance: 'key' },
    { sign: 'Pain on eye movement with reduced colour vision and a RAPD', mechanism: 'Optic neuritis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Sudden painless monocular loss, cherry-red spot, RAPD', meaning: 'CRAO — emergency; check ESR/CRP for GCA and start a stroke workup' },
    { clue: 'Older patient with vision loss + headache/jaw claudication', meaning: 'Giant cell arteritis — urgent ESR/CRP, steroids before biopsy → [[fcp1-headache-red-flags]]' },
    { clue: 'Flashes, floaters and a rising curtain', meaning: 'Retinal detachment — urgent ophthalmology; a macula-on detachment is time-critical' },
    { clue: 'Transient monocular loss lasting minutes', meaning: 'Amaurosis fugax — carotid Doppler, ECG and vascular risk management' },
  ],

  treatment: [
    { logic: 'Sudden vision loss is a same-hour referral', detail: 'Urgent ophthalmology and/or the stroke pathway; the window for retinal ischaemia is very short.' },
    { logic: 'Suspected GCA: steroids before the biopsy', detail: 'High-dose corticosteroids immediately to protect the fellow eye; do not wait for the ESR or temporal artery biopsy.' },
    { logic: 'Detachment and glaucoma have definitive fixes', detail: 'Retinal detachment → surgery; acute angle-closure → lower the IOP then laser iridotomy.' },
  ],

  mnemonics: [
    { hook: 'Painless sudden loss = vascular/retinal: CRAO, CRVO, detachment, vitreous bleed', expansion: ['CRAO = eye stroke, exclude GCA', 'Curtain + floaters = detachment', 'Painful → glaucoma or optic neuritis'] },
  ],

  traps: [
    {
      questionCategory: 'Amaurosis fugax',
      wrongInstinct: 'Transient loss of vision that fully recovers needs no urgent action',
      rightAnswer: 'Amaurosis fugax is a retinal TIA — it warrants an urgent stroke/carotid workup and, in older patients, exclusion of giant cell arteritis',
      why: 'Transient monocular blindness carries the same stroke risk as a hemispheric TIA and can herald permanent loss.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 70-year-old has sudden painless total loss of vision in one eye. Fundoscopy shows a pale retina with a cherry-red spot, and there is a relative afferent pupillary defect. The diagnosis is:',
      options: [
        { id: 'a', text: 'Central retinal vein occlusion' },
        { id: 'b', text: 'Central retinal artery occlusion' },
        { id: 'c', text: 'Vitreous haemorrhage' },
        { id: 'd', text: 'Optic neuritis' },
      ],
      answerId: 'b',
      explanation: 'A pale retina with a cherry-red spot and a RAPD after sudden painless monocular loss is central retinal artery occlusion.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'A 74-year-old woman with sudden vision loss in one eye also reports scalp tenderness and jaw pain on chewing. Alongside urgent referral, the immediate priority is to:',
      options: [
        { id: 'a', text: 'Start high-dose corticosteroids' },
        { id: 'b', text: 'Prescribe lubricating drops' },
        { id: 'c', text: 'Arrange a routine outpatient ESR' },
        { id: 'd', text: 'Reassure and review in a month' },
      ],
      answerId: 'a',
      explanation: 'This is giant cell arteritis threatening vision; high-dose steroids must be started immediately to protect the fellow eye, before biopsy.',
      tests: 'treatment',
    },
  ],
};

export default fcp1EyeVisionLoss;
