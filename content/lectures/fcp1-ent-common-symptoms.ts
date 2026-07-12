import type { Lecture } from '../../lib/types';

export const fcp1EntCommonSymptoms: Lecture = {
  id: 'fcp1-ent-common-symptoms',
  title: 'Common ENT Symptoms',
  system: 'clinical',
  source: 'L32 — Common ENT Symptoms',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L32 ENT Symptoms' },
    { kind: 'disease', label: 'Otalgia · epistaxis · hoarseness' },
    { kind: 'exam', label: 'Weber/Rinne · otoscopy' },
    { kind: 'investigation', label: 'Audiogram · nasendoscopy' },
  ],

  highYield: [
    '**Ear:** otalgia (primary — otitis externa/media; or **referred** from throat, teeth, TMJ or pharyngeal cancer with a normal ear) and **hearing loss** — conductive (wax, effusion, perforation, otosclerosis) vs sensorineural (presbycusis, noise, sudden loss). **Weber and Rinne localise the type**; sudden unilateral sensorineural loss is an emergency.',
    '**Nose:** nasal obstruction (rhinitis, polyps, septal deviation) and **epistaxis** — mostly anterior (Kiesselbach plexus / Little area); posterior bleeds are heavier and airway-risky. Recurrent unilateral obstruction or bleeding raises a mass; check for a bleeding tendency [[fcp1-bleeding-primary-vs-secondary]].',
    '**Throat:** sore throat (viral vs streptococcal pharyngitis by the Centor score) and **hoarseness** (laryngitis, reflux, vocal-cord lesions). Persistent hoarseness or dysphagia [[fcp1-dysphagia]] beyond about 3 weeks is a red flag for head-and-neck cancer [[fcp1-ent-red-flags]].',
    '**Dizziness/vertigo** is often vestibular (ENT): peripheral (BPPV, vestibular neuritis, Ménière) vs central — approach as in [[fcp1-dizziness-vertigo]]; associated hearing loss or tinnitus points to the inner ear.',
    '**Laterality is the theme** — **persistent unilateral** ear, nasal, throat or neck symptoms deserve scrutiny; a neck mass [[fcp1-lymphadenopathy-approach]] with ENT symptoms suggests head-and-neck malignancy [[fcp1-ent-red-flags]].',
  ],

  mechanism: {
    title: 'Sorting the common ENT complaints',
    steps: [
      { id: 's1', label: 'Localise: ear / nose / throat / balance', emphasis: 'key' },
      { id: 's2', label: 'Ear: conductive vs sensorineural (Weber/Rinne)', emphasis: 'key' },
      { id: 's3', label: 'Nose: obstruction/epistaxis, anterior vs posterior', emphasis: 'normal' },
      { id: 's4', label: 'Throat: infective vs structural (hoarseness/dysphagia)', emphasis: 'key' },
      { id: 's5', label: 'Persistent unilateral symptom or neck mass → refer', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Rinne negative (bone > air) with Weber lateralising to that ear', mechanism: 'Conductive hearing loss', significance: 'key' },
    { sign: 'Weber lateralising to the opposite ear (Rinne positive both sides)', mechanism: 'Sensorineural hearing loss', significance: 'key' },
    { sign: 'Otalgia with a completely normal otoscopy', mechanism: 'Referred pain — examine throat, tongue base and larynx', significance: 'key' },
    { sign: 'Bleeding point on the anterior nasal septum (Little area)', mechanism: 'Anterior epistaxis from Kiesselbach plexus', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Pure-tone audiogram', meaning: 'Confirms and grades conductive vs sensorineural loss' },
    { clue: 'Sudden unilateral sensorineural loss on the audiogram', meaning: 'Otological emergency — urgent steroids and ENT referral' },
    { clue: 'Flexible nasendoscopy / laryngoscopy', meaning: 'Visualises persistent hoarseness, a nasal mass or the cause of dysphagia' },
    { clue: 'Throat swab or Centor/McIsaac score', meaning: 'Streptococcal vs viral pharyngitis' },
  ],

  treatment: [
    { logic: 'Treat the common benign causes symptomatically', detail: 'Analgesia and topical care for otitis externa, first-aid pressure or cautery for anterior epistaxis, saline/steroid spray for rhinitis, and supportive care ± antibiotics for pharyngitis by score.' },
    { logic: 'Escalate red-flag and unilateral disease', detail: 'Sudden sensorineural loss (urgent steroids), posterior/uncontrolled epistaxis (packing, airway), persistent hoarseness/dysphagia or a neck mass → ENT for a scope (see [[fcp1-ent-red-flags]]).' },
  ],

  mnemonics: [
    { hook: 'Rinne tells the type, Weber tells the side', expansion: ['Rinne: air vs bone conduction', 'Weber: which ear it lateralises to'] },
  ],

  traps: [
    {
      questionCategory: 'Referred otalgia',
      wrongInstinct: 'Ear pain with a normal-looking ear means nothing serious',
      rightAnswer: 'Otalgia with a normal ear is referred pain — examine the throat, tongue base and larynx to exclude a pharyngeal or laryngeal cancer',
      why: 'The ear shares sensory nerves (V, IX, X) with the pharynx and larynx, so head-and-neck tumours can present as ear pain.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'On testing, Weber lateralises to the left ear and Rinne is negative on the left (bone conduction greater than air). The hearing loss in the left ear is:',
      options: [
        { id: 'a', text: 'Left sensorineural' },
        { id: 'b', text: 'Left conductive' },
        { id: 'c', text: 'Right conductive' },
        { id: 'd', text: 'Normal hearing' },
      ],
      answerId: 'b',
      explanation: 'Weber lateralising to the affected ear with a negative Rinne (bone > air) on that side indicates a conductive hearing loss.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A 60-year-old smoker has 6 weeks of persistent hoarseness and referred left otalgia with a normal ear examination. The best next step is:',
      options: [
        { id: 'a', text: 'Reassure — this is viral laryngitis' },
        { id: 'b', text: 'Two weeks of a proton-pump inhibitor and review' },
        { id: 'c', text: 'Urgent ENT referral for laryngoscopy' },
        { id: 'd', text: 'Prescribe a course of antibiotics' },
      ],
      answerId: 'c',
      explanation: 'Persistent hoarseness with referred otalgia in a smoker is head-and-neck cancer until proven otherwise and needs urgent laryngoscopy.',
      tests: 'disease',
    },
  ],
};

export default fcp1EntCommonSymptoms;
