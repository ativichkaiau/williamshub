import type { Lecture } from '../../lib/types';

export const otitisMediaSinusitisEpiglottitis: Lecture = {
  id: 'otitis-media-sinusitis-epiglottitis',
  title: 'Otitis Media, Sinusitis & Epiglottitis',
  system: 'respiratory',
  source: 'L1 — Bacterial Infection of the Upper Respiratory Tract',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L1 Upper Resp Bacteria' },
    { kind: 'disease', label: 'Otitis media' },
    { kind: 'exam', label: 'Epiglottitis (Hib)' },
  ],

  highYield: [
    '**Acute otitis media, bacterial sinusitis and epiglottitis share the same three "respiratory" bacteria: Streptococcus pneumoniae, non-typeable Haemophilus influenzae, and Moraxella catarrhalis** — usually seeded when a preceding viral URI impairs mucociliary drainage.',
    '**Acute otitis media (AOM)** is a disease of young children (short, horizontal Eustachian tube). A bulging, erythematous, immobile tympanic membrane with effusion is diagnostic; complications include **mastoiditis, tympanic perforation and (rarely) intracranial spread**. Recurrent effusion → conductive hearing loss.',
    '**Acute bacterial rhinosinusitis** follows a viral cold; suspect it when symptoms **persist >10 days or worsen after initial improvement ("double sickening")**, with facial pain/pressure, purulent discharge and post-nasal drip. Feared complications are **orbital cellulitis and cavernous sinus thrombosis** (spread from ethmoid/frontal sinuses).',
    '**Acute epiglottitis is an airway emergency, classically caused by Haemophilus influenzae type b (Hib)** — now rare where Hib vaccine is used. The child is toxic, drooling, sitting forward (**tripod**), with muffled voice and stridor; the lateral neck X-ray shows the **"thumbprint" sign**. **Do NOT examine the throat or lie the child flat** — secure the airway first.',
    '**Distinguish epiglottitis from croup:** croup (laryngotracheobronchitis) is **viral (parainfluenza)** with a **barking cough and inspiratory stridor**, a gradual course, and the **"steeple" sign** on X-ray — a very different, usually self-limiting illness (covered with the respiratory viruses).',
  ],

  mechanism: {
    title: 'Viral URI → impaired drainage → S. pneumoniae/H. flu/M. catarrhalis',
    steps: [
      { id: 's1', label: 'Preceding viral URI blocks Eustachian tube / sinus ostia', emphasis: 'key' },
      { id: 's2', label: 'S. pneumoniae, non-typeable H. influenzae, M. catarrhalis invade', emphasis: 'key' },
      { id: 's3', label: 'AOM: bulging immobile red TM → mastoiditis risk' },
      { id: 's4', label: 'Sinusitis: >10 days / double-sickening → orbital/cavernous spread', emphasis: 'danger' },
      { id: 's5', label: 'Epiglottitis (Hib): tripod, drooling, thumbprint — airway first', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Bulging, immobile, erythematous tympanic membrane', mechanism: 'Acute otitis media with effusion', significance: 'key' },
    { sign: 'Symptoms worsening after day 10 / "double sickening"', mechanism: 'Acute bacterial (vs viral) rhinosinusitis', significance: 'key' },
    { sign: 'Tripod posture, drooling, muffled voice, stridor', mechanism: 'Acute epiglottitis (Hib) — airway emergency', significance: 'key' },
    { sign: '"Thumbprint" sign on lateral neck X-ray', mechanism: 'Swollen epiglottis', significance: 'supportive' },
    { sign: 'Postauricular swelling/tenderness', mechanism: 'Mastoiditis complicating AOM', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The three bacteria common to AOM, sinusitis and otitis', meaning: 'S. pneumoniae, non-typeable H. influenzae, M. catarrhalis' },
    { clue: 'The classic cause of acute epiglottitis', meaning: 'Haemophilus influenzae type b (Hib)' },
    { clue: 'The X-ray sign of epiglottitis vs croup', meaning: 'Thumbprint (epiglottitis) vs steeple (croup)' },
    { clue: 'When to call a sinus infection bacterial', meaning: 'Persistence >10 days or worsening after initial improvement' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Amoxicillin (± clavulanate) is first-line for AOM/sinusitis — see [[respiratory-tract-antibiotics]]; epiglottitis needs airway control + ceftriaxone. Hib vaccination has made epiglottitis rare. Distinguish from the viral croup in [[other-respiratory-viruses]]. Other L1 bacterial disease: [[pharyngitis-tonsillitis-diphtheria]].' },
  ],

  mnemonics: [
    { hook: 'AOM/sinusitis/otitis bugs = "the respiratory three": SPACE-less → S. pneumoniae, H. flu, M. catarrhalis', expansion: ['All follow a viral URI', 'Amoxicillin ± clavulanate first-line'] },
    { hook: 'Epiglottitis = "thumbprint, tripod, drooling" — don\'t touch the throat', expansion: ['Hib classic', 'Croup = steeple sign, barking cough, parainfluenza'] },
  ],

  traps: [
    {
      questionCategory: 'Managing suspected epiglottitis',
      wrongInstinct: 'Examine the throat with a tongue depressor to confirm the swollen epiglottis',
      rightAnswer: 'Do NOT examine the pharynx or lay the child flat — this can precipitate complete airway obstruction; keep the child calm/upright and secure the airway in a controlled setting first',
      why: 'In epiglottitis the airway is critically narrowed; provoking the child or manipulating the throat can trigger laryngospasm and total obstruction, so airway safety precedes any diagnostic maneuver.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Acute otitis media, acute bacterial sinusitis and (historically) epiglottitis are all commonly caused by which group of organisms?',
      options: [
        { id: 'a', text: 'Streptococcus pneumoniae, Haemophilus influenzae and Moraxella catarrhalis' },
        { id: 'b', text: 'Pseudomonas and Enterobacter species' },
        { id: 'c', text: 'Mycobacterium tuberculosis' },
        { id: 'd', text: 'Candida and Aspergillus' },
      ],
      answerId: 'a',
      explanation: 'These three encapsulated respiratory bacteria colonise the nasopharynx and cause otitis media, sinusitis and (type b H. influenzae) epiglottitis, typically after a viral URI impairs drainage.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A toxic-appearing child is drooling and sitting in a tripod position with stridor; lateral neck X-ray shows a "thumbprint" sign. The priority is to:',
      options: [
        { id: 'a', text: 'Examine the throat with a tongue depressor' },
        { id: 'b', text: 'Lay the child flat for IV access' },
        { id: 'c', text: 'Secure the airway in a controlled setting and give ceftriaxone' },
        { id: 'd', text: 'Give nebulised salbutamol' },
      ],
      answerId: 'c',
      explanation: 'This is epiglottitis — an airway emergency. Avoid throat examination or lying the child flat; keep them calm and upright and secure the airway before other interventions, then treat with a third-generation cephalosporin.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default otitisMediaSinusitisEpiglottitis;
