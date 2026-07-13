import type { Lecture } from '../../lib/types';
import { AUDITORY_PATHWAY } from '../../lib/figures';

export const auditoryPathwayAnatomy: Lecture = {
  id: 'auditory-pathway-anatomy',
  title: 'The Auditory Pathway',
  system: 'neuro',
  source: 'L14 — Auditory, Gustatory & Olfactory Pathways',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L14 Special Sense Pathways' },
    { kind: 'mechanism', label: 'Cochlea to cortex' },
    { kind: 'exam', label: 'Bilateral pathway' },
  ],

  highYield: [
    '**Sound is conducted mechanically then transduced neurally: outer ear → tympanic membrane → middle-ear OSSICLES (malleus–incus–stapes, which amplify and match impedance) → oval window → the fluid-filled COCHLEA.** The cochlea contains the organ of Corti, where hair cells convert vibration into nerve signals carried by the cochlear division of CN VIII.',
    '**The cochlea is TONOTOPICALLY organised: the BASE (near the oval window, stiff basilar membrane) responds to HIGH frequencies, the APEX to LOW frequencies.** A travelling wave peaks at a frequency-specific location, bending hair cells there — so pitch is coded by PLACE. This tonotopy is preserved all the way to the cortex.',
    '**The central auditory pathway is BILATERAL and multi-relay: cochlear nuclei → (crossing to both) SUPERIOR OLIVARY nuclei → lateral lemniscus → INFERIOR COLLICULUS → MEDIAL GENICULATE nucleus (thalamus) → primary auditory cortex (superior temporal gyrus).** Because signals from each ear reach BOTH cortices, a unilateral central lesion does NOT cause deafness in one ear.',
    '**The superior olive receives from both ears and computes sound LOCALISATION (interaural time and intensity differences).** The inferior colliculus is the midbrain auditory relay (and integrates with reflexes); the medial geniculate is the thalamic relay before cortex.',
    'Clinically: unilateral hearing loss localises to the ear/CN VIII (peripheral), because central lesions spare hearing due to bilaterality; conductive vs sensorineural loss is distinguished by Rinne/Weber tests (physiology in [[auditory-physiology-hearing]]). This anatomy underlies the ear disorders of HNS-2 ([[inner-ear-disorders]]); the receptor histology is [[inner-ear-hair-cell-histology]].',
  ],

  mechanism: {
    title: 'Ossicles → cochlea (tonotopy) → CN VIII → bilateral relays → auditory cortex',
    steps: [
      { id: 's1', label: 'Ossicles (malleus-incus-stapes) amplify → oval window → cochlea', emphasis: 'key' },
      { id: 's2', label: 'Cochlea tonotopic: BASE = high frequency, APEX = low (place code)', emphasis: 'key' },
      { id: 's3', label: 'Cochlear nuclei → superior olive (BOTH ears, localisation) → lateral lemniscus', emphasis: 'key' },
      { id: 's4', label: '→ inferior colliculus → medial geniculate (thalamus) → auditory cortex' },
      { id: 's5', label: 'Bilateral → unilateral central lesion does NOT deafen one ear', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'High frequencies detected at the cochlear base', mechanism: 'Tonotopic (place) coding of pitch', significance: 'key' },
    { sign: 'Unilateral deafness localising to the ear/CN VIII', mechanism: 'Central pathway is bilateral (spares one-ear hearing)', significance: 'key' },
    { sign: 'Impaired sound localisation', mechanism: 'Superior olivary complex (interaural comparison)', significance: 'supportive' },
    { sign: 'Auditory relay in the medial geniculate nucleus', mechanism: 'Thalamic relay before auditory cortex', significance: 'supportive' },
    { sign: 'Ossicular amplification of sound', mechanism: 'Middle-ear impedance matching', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The organisation coding pitch by location in the cochlea', meaning: 'Tonotopy (base = high, apex = low)' },
    { clue: 'The thalamic relay of the auditory pathway', meaning: 'The medial geniculate nucleus' },
    { clue: 'Why a unilateral central lesion does not deafen one ear', meaning: 'The central auditory pathway is bilateral' },
    { clue: 'The nucleus computing sound localisation', meaning: 'The superior olivary complex' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The bilaterality of the auditory pathway explains why unilateral deafness localises peripherally (ear/CN VIII — [[inner-ear-disorders]] in HNS-2), while the tonotopy and relays underlie the physiology of [[auditory-physiology-hearing]] and receptor histology of [[inner-ear-hair-cell-histology]]. The inferior colliculus/medial geniculate are part of the brainstem/thalamic anatomy ([[brainstem-anatomy-organization]], [[diencephalon-thalamus-hypothalamus]]).' },
  ],

  mnemonics: [
    { hook: 'Pathway "E-COLI-MA": Ear/cochlea → Cochlear nuclei → Olive → Lateral lemniscus → Inferior colliculus → Medial geniculate → Auditory cortex', expansion: ['Bilateral above cochlear nuclei', 'Tonotopy preserved'] },
    { hook: 'Tonotopy: "Base = high (bass at apex)"', expansion: ['Place code for pitch', 'Stiff base = high frequency'] },
  ],

  traps: [
    {
      questionCategory: 'Localising unilateral hearing loss',
      wrongInstinct: 'A lesion of the auditory cortex or central pathway on one side causes deafness in the opposite ear',
      rightAnswer: 'Because the central auditory pathway is BILATERAL (each ear reaches both cortices), a unilateral CENTRAL lesion does NOT cause deafness in one ear — unilateral hearing loss localises to the EAR or the cochlear nerve (CN VIII)',
      why: 'The bilaterality above the cochlear nuclei means one side can carry the information; true one-ear deafness therefore points to the peripheral apparatus, not a central hemispheric lesion.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A unilateral lesion of the central auditory pathway (e.g. auditory cortex) does NOT cause deafness in one ear because:',
      options: [
        { id: 'a', text: 'The cochlea regenerates' },
        { id: 'b', text: 'The central auditory pathway is bilateral, so each ear projects to both hemispheres' },
        { id: 'c', text: 'Hearing does not require the cortex' },
        { id: 'd', text: 'The ossicles compensate' },
      ],
      answerId: 'b',
      explanation: 'Above the cochlear nuclei the auditory pathway is bilateral (crossing at the superior olive and beyond), so each ear is represented in both hemispheres; a unilateral central lesion therefore spares one-ear hearing, and true unilateral deafness localises to the ear or CN VIII.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'High-frequency sounds are detected at which part of the cochlea?',
      options: [
        { id: 'a', text: 'The apex' },
        { id: 'b', text: 'The base (near the oval window)' },
        { id: 'c', text: 'Uniformly throughout' },
        { id: 'd', text: 'Only the middle turn' },
      ],
      answerId: 'b',
      explanation: 'The cochlea is tonotopically organised: the stiff basilar membrane at the base responds to high frequencies, and the apex to low frequencies, so pitch is coded by place — an organisation preserved throughout the auditory pathway.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Hearing & the auditory pathway', svg: AUDITORY_PATHWAY, caption: 'Ossicles → cochlear tonotopy → CN VIII → the bilateral central relays → auditory cortex.' },
  ],
};

export default auditoryPathwayAnatomy;
