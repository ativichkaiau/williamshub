import type { Lecture } from '../../lib/types';

export const middleEarDisorders: Lecture = {
  id: 'middle-ear-disorders',
  title: 'Middle Ear Disorders',
  system: 'neuro',
  source: 'L3 — Common Ear Disorders',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L3 Common Ear Disorders' },
    { kind: 'disease', label: 'Otitis media' },
    { kind: 'mechanism', label: 'Eustachian dysfunction' },
    { kind: 'exam', label: 'Conductive loss' },
  ],

  highYield: [
    '**Otitis media** = middle-ear/mastoid inflammation: **acute (AOM)**, **with effusion (OME)**, and **chronic (COM)**. Core mechanism = **Eustachian tube dysfunction** (impaired pressure/drainage).',
    '**AOM organisms**: **Streptococcus pneumoniae, Haemophilus influenzae, Moraxella catarrhalis** — bulging red drum, otalgia, fever, CHL. COM: Pseudomonas, Proteus, Staphylococcus.',
    '**AOM/COM complications**: **facial nerve palsy, mastoiditis, postauricular/brain abscess, meningitis, labyrinthitis** — suspect if focal signs or persistent otorrhea.',
    '**Otosclerosis**: **stapes footplate fixation** (otospongiosis → dense bone); **autosomal dominant**, young adults → progressive **conductive** loss (may become mixed).',
    '**Otitic barotrauma** (Boyle’s law — air travel, diving): pressure mismatch → mucosal swelling, effusion, TM injury → CHL and otalgia.',
  ],

  mechanism: {
    title: 'Eustachian tube fails → effusion/infection → CHL',
    steps: [
      { id: 's1', label: 'Eustachian tube dysfunction (pressure/drainage)', emphasis: 'key' },
      { id: 's2', label: 'Middle-ear effusion → bacterial growth' },
      { id: 's3', label: 'Conductive hearing loss ± otorrhea' },
      { id: 's4', label: 'Spread → mastoiditis / facial palsy / abscess', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Bulging, erythematous, immobile tympanic membrane', mechanism: 'AOM with middle-ear pus', significance: 'key' },
    { sign: 'Conductive hearing loss with a normal-looking drum', mechanism: 'Otosclerosis (stapes fixation)', significance: 'key' },
    { sign: 'Postauricular swelling / facial weakness / persistent otorrhea', mechanism: 'Complicated otitis media', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Otoscopy / pneumatic otoscopy', meaning: 'Effusion & drum mobility' },
    { clue: 'Audiogram (Carhart notch in otosclerosis)', meaning: 'Conductive vs mixed loss' },
    { clue: 'CT temporal bone if complications suspected', meaning: 'Mastoiditis, abscess, erosion' },
  ],

  treatment: [
    { logic: 'AOM: analgesia ± antibiotics (amoxicillin first-line)', detail: 'Cover S. pneumo/H. flu/M. catarrhalis.' },
    { logic: 'Otosclerosis: hearing aid or stapedectomy', detail: 'Bypass the fixed stapes.' },
    { logic: 'Barotrauma: decongestants, Valsalva, avoid diving until healed', detail: 'Equalize middle-ear pressure.' },
  ],

  mnemonics: [
    { hook: 'AOM bugs = the “otitis three”: S. pneumo, H. flu, M. catarrhalis', expansion: ['Same trio as sinusitis'] },
    { hook: 'Otosclerosis = Stapes Stuck (autosomal dominant, young adult CHL)', expansion: ['Otospongiosis at the footplate'] },
  ],

  traps: [
    {
      questionCategory: 'Conductive loss with a normal drum',
      wrongInstinct: 'Conductive hearing loss must mean wax, effusion, or a perforation on otoscopy',
      rightAnswer: 'A young adult with progressive conductive loss and a normal tympanic membrane suggests otosclerosis (stapes fixation)',
      why: 'Otosclerosis fixes the stapes footplate while the drum looks normal — the audiogram (with a Carhart notch) reveals the conductive loss that otoscopy cannot.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A child with acute otitis media develops fever, postauricular swelling that pushes the ear forward, and tenderness over the mastoid. The most likely complication is:',
      options: [
        { id: 'a', text: 'Otosclerosis' },
        { id: 'b', text: 'Acute mastoiditis' },
        { id: 'c', text: 'Otitic barotrauma' },
        { id: 'd', text: 'BPPV' },
      ],
      answerId: 'b',
      explanation: 'Postauricular swelling displacing the pinna with mastoid tenderness after AOM is acute mastoiditis — a suppurative complication of otitis media that can progress to abscess or intracranial spread.',
      tests: 'exam',
    },
  ],
};

export default middleEarDisorders;
