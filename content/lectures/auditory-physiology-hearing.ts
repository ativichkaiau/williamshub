import type { Lecture } from '../../lib/types';
import { AUDITORY_PATHWAY } from '../../lib/figures';

export const auditoryPhysiologyHearing: Lecture = {
  id: 'auditory-physiology-hearing',
  title: 'Auditory Physiology & Hearing',
  system: 'neuro',
  source: 'L15 — Physiology of Hearing',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L15 Hearing' },
    { kind: 'mechanism', label: 'Sound transduction & tonotopy' },
    { kind: 'exam', label: 'Conductive vs sensorineural loss' },
  ],

  highYield: [
    '**Hearing converts air pressure waves into neural signals through a chain: OUTER ear (pinna → canal) funnels sound to the TYMPANIC MEMBRANE → MIDDLE ear OSSICLES (malleus, incus, stapes) amplify and IMPEDANCE-MATCH it (air → fluid) → INNER ear COCHLEA, where the stapes at the oval window creates a travelling wave in the fluid.**',
    '**Transduction happens in the ORGAN OF CORTI on the basilar membrane: the travelling wave deflects the basilar membrane, bending the stereocilia of the HAIR CELLS against the tectorial membrane → mechanically-gated channels open → hair cell depolarises → glutamate → CN VIII (cochlear).** INNER hair cells are the true sensory receptors; OUTER hair cells are the "cochlear amplifier" that sharpens sensitivity and tuning.',
    '**FREQUENCY (pitch) is coded by PLACE — TONOTOPY: the basilar membrane is stiff/narrow at the BASE (encodes HIGH frequencies) and floppy/wide at the APEX (encodes LOW frequencies), so each frequency peaks at a specific place.** This tonotopic map is preserved all the way to the auditory cortex ([[auditory-pathway-anatomy]]).',
    '**Two kinds of hearing loss, separated by Rinne and Weber tests: CONDUCTIVE (outer/middle-ear problem — wax, otitis media, otosclerosis) vs SENSORINEURAL (cochlea/CN VIII — presbycusis, noise, ototoxic drugs). WEBER lateralises to the AFFECTED ear in conductive loss and to the BETTER ear in sensorineural loss; RINNE is normal (air>bone) in sensorineural, abnormal (bone>air) in conductive.** High-frequency (basal) loss is typical of ageing and noise damage.',
    '**The take-home: outer/middle ear conducts & impedance-matches; cochlear hair cells (inner = sensory, outer = amplifier) transduce; PLACE = pitch (tonotopy, high at base/low at apex); conductive vs sensorineural loss via Rinne/Weber.** The central auditory pathway is in [[auditory-pathway-anatomy]]; hair-cell histology in [[inner-ear-hair-cell-histology]]; clinical hearing/ear disorders in HNS-2 ([[inner-ear-disorders]]).',
  ],

  mechanism: {
    title: 'Ossicles impedance-match → cochlear travelling wave → hair cells transduce; place codes pitch (tonotopy)',
    steps: [
      { id: 's1', label: 'Outer ear → tympanic membrane → ossicles amplify & impedance-match (air→fluid)', emphasis: 'key' },
      { id: 's2', label: 'Stapes at oval window → travelling wave in cochlear fluid', emphasis: 'key' },
      { id: 's3', label: 'Organ of Corti: wave bends hair-cell stereocilia → depolarise → CN VIII', emphasis: 'key' },
      { id: 's4', label: 'Inner hair cells = sensory; outer hair cells = cochlear amplifier' },
      { id: 's5', label: 'Tonotopy: base = high frequency, apex = low frequency (place = pitch)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Hearing loss with Weber lateralising to the BAD ear, bone>air', mechanism: 'Conductive loss (outer/middle ear — e.g. otosclerosis, effusion)', significance: 'key' },
    { sign: 'Hearing loss with Weber lateralising to the GOOD ear, air>bone', mechanism: 'Sensorineural loss (cochlea/CN VIII)', significance: 'key' },
    { sign: 'Early high-frequency hearing loss', mechanism: 'Basal cochlear (hair cell) damage — presbycusis/noise (tonotopy)', significance: 'key' },
    { sign: 'Loss of fine tuning and sensitivity', mechanism: 'Outer hair cell (cochlear amplifier) dysfunction', significance: 'supportive' },
    { sign: 'Impedance matching across the ossicular chain', mechanism: 'Middle ear couples air-borne sound to cochlear fluid', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The receptor organ on the basilar membrane', meaning: 'The organ of Corti (cochlear hair cells)' },
    { clue: 'How pitch (frequency) is coded in the cochlea', meaning: 'By place (tonotopy) — base = high, apex = low' },
    { clue: 'The true sensory cells vs the amplifier', meaning: 'Inner hair cells (sensory); outer hair cells (cochlear amplifier)' },
    { clue: 'The tests separating conductive from sensorineural loss', meaning: 'Rinne and Weber' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Auditory physiology explains the two hearing-loss types (conductive vs sensorineural) and the Rinne/Weber bedside tests, plus why ageing/noise cause high-frequency (basal) loss and why ototoxic drugs damage hair cells. It leads into the central auditory pathway ([[auditory-pathway-anatomy]]) and shares hair-cell transduction with the vestibular system ([[vestibular-system-physiology]], [[inner-ear-hair-cell-histology]]); clinical ear disorders are in HNS-2 ([[inner-ear-disorders]]).' },
  ],

  mnemonics: [
    { hook: 'Tonotopy: "Base = Bass? No — Base = high; Apex = low"', expansion: ['Stiff narrow base = high freq', 'High-freq loss first (age/noise)'] },
    { hook: 'Weber: "conductive → to BAD ear; sensorineural → to GOOD ear"', expansion: ['Inner hair cells sense', 'Outer hair cells amplify'] },
  ],

  traps: [
    {
      questionCategory: 'Cochlear tonotopy (place coding of pitch)',
      wrongInstinct: 'Low-pitched sounds are detected at the base of the cochlea near the oval window',
      rightAnswer: 'The cochlea is tonotopically mapped the other way: the stiff, narrow BASE encodes HIGH frequencies and the floppy, wide APEX encodes LOW frequencies — which is why noise and age-related damage (starting at the base) cause HIGH-frequency hearing loss first',
      why: 'Getting the tonotopic gradient right explains the characteristic early high-frequency loss of presbycusis and noise injury and the place-coding principle carried up to the auditory cortex.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'High-frequency sounds are encoded at which part of the cochlea?',
      options: [
        { id: 'a', text: 'The apex (wide, floppy end)' },
        { id: 'b', text: 'The base (narrow, stiff end near the oval window)' },
        { id: 'c', text: 'Uniformly along its whole length' },
        { id: 'd', text: 'The round window' },
      ],
      answerId: 'b',
      explanation: 'By tonotopy, the stiff narrow base of the basilar membrane resonates to high frequencies and the wide floppy apex to low frequencies. Because the base is affected first by noise and ageing, high-frequency hearing loss appears earliest (presbycusis).',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'In a patient with unilateral sensorineural hearing loss, the Weber test (tuning fork on the forehead) lateralises to:',
      options: [
        { id: 'a', text: 'The affected (worse) ear' },
        { id: 'b', text: 'The better (unaffected) ear' },
        { id: 'c', text: 'Neither ear' },
        { id: 'd', text: 'Both ears equally' },
      ],
      answerId: 'b',
      explanation: 'In sensorineural loss the Weber lateralises to the BETTER ear (the damaged cochlea/nerve perceives the bone-conducted sound less well). In conductive loss it lateralises to the WORSE ear. Rinne is normal (air>bone) in sensorineural loss and abnormal (bone>air) in conductive loss.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Auditory pathway', svg: AUDITORY_PATHWAY, caption: 'From the cochlea (tonotopic hair-cell transduction) along CN VIII through the brainstem relays to the auditory cortex.' },
  ],
};

export default auditoryPhysiologyHearing;
