import type { Lecture } from '../../lib/types';

export const paranasalSinuses: Lecture = {
  id: 'paranasal-sinuses',
  title: 'Paranasal Sinuses',
  system: 'msk',
  source: 'L13 — Nasal Cavity & Paranasal Sinuses',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L13 Nasal Cavity & Sinuses' },
    { kind: 'disease', label: 'Sinuses / sinusitis' },
    { kind: 'mechanism', label: 'Air cells & drainage' },
    { kind: 'exam', label: 'Maxillary sinus' },
  ],

  highYield: [
    '**Four paired paranasal sinuses** (air-filled, mucosa-lined extensions of the nasal cavity that lighten the skull and humidify air): **frontal, ethmoidal (anterior/middle/posterior air cells), maxillary, and sphenoid**.',
    '**Maxillary sinus = the largest** and the most clinically important: its **ostium sits HIGH on the medial wall and drains into the middle meatus**, so **gravity works against drainage → it is the most commonly infected sinus** and needs the cilia to clear it.',
    '**Drainage summary**: frontal + maxillary + anterior/middle ethmoidal → **middle meatus** (ostiomeatal complex); posterior ethmoidal → **superior meatus**; sphenoid → **sphenoethmoidal recess**. Sinusitis results from **obstruction of these ostia**.',
    'Clinically relevant relations of the **maxillary sinus**: its **floor relates to the roots of the upper (premolar/molar) teeth** — a tooth infection can spread into the sinus, and a maxillary tumor/infection can cause **toothache or numbness (infraorbital, V2)**; its **roof is the orbital floor** (spread to the orbit / blowout fractures).',
    '**Sensory/parasympathetic** supply of the sinuses comes from the **trigeminal (V1/V2) branches and the pterygopalatine ganglion**; the frontal sinus can drain infection toward the anterior cranial fossa (Pott puffy tumor) and the ethmoid air cells lie next to the thin orbital wall (orbital cellulitis).',
  ],

  mechanism: {
    title: 'Air cells around the nose; ostia obstruct → sinusitis',
    steps: [
      { id: 's1', label: 'Frontal, ethmoidal, maxillary, sphenoid sinuses', emphasis: 'key' },
      { id: 's2', label: 'Maxillary ostium is HIGH → poor gravity drainage' },
      { id: 's3', label: 'Most drain into the middle meatus' },
      { id: 's4', label: 'Ethmoid → orbit (cellulitis); frontal → cranial spread', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Facial pain/pressure over the cheek worse on bending forward', mechanism: 'Maxillary sinusitis (dependent ostium)', significance: 'key' },
    { sign: 'Upper molar toothache from sinus disease', mechanism: 'Maxillary sinus floor over the tooth roots', significance: 'supportive' },
    { sign: 'Orbital swelling/cellulitis from ethmoid infection', mechanism: 'Thin lamina papyracea between ethmoid and orbit', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'CT of the sinuses (ostiomeatal complex)', meaning: 'Sinusitis / obstruction' },
    { clue: 'Transillumination / clinical percussion', meaning: 'Bedside sinus assessment' },
  ],

  treatment: [
    { logic: 'Acute sinusitis: analgesia, decongestants, saline ± antibiotics', detail: 'Most are viral.' },
    { logic: 'Refractory/complicated: FESS to restore ostiomeatal drainage', detail: 'Watch for orbital/intracranial spread.' },
  ],

  mnemonics: [
    { hook: 'Maxillary sinus: largest + ostium high → drains "uphill" → most infected', expansion: ['Middle meatus'] },
    { hook: 'Floor of maxillary sinus over tooth roots; roof = orbital floor', expansion: ['Toothache / orbital spread'] },
  ],

  traps: [
    {
      questionCategory: 'Why the maxillary sinus infects easily',
      wrongInstinct: 'The maxillary sinus drains well because its ostium is at the bottom',
      rightAnswer: 'Its ostium is HIGH on the medial wall, so drainage works AGAINST gravity and depends on mucociliary clearance — a key reason it is the most commonly infected sinus',
      why: 'The high, dependent ostium is the classic exam point explaining maxillary sinusitis.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Why is the maxillary sinus the most commonly infected paranasal sinus?',
      options: [
        { id: 'a', text: 'It is the smallest sinus' },
        { id: 'b', text: 'Its ostium is located high on the medial wall, so it drains against gravity' },
        { id: 'c', text: 'It drains into the inferior meatus' },
        { id: 'd', text: 'It has no ciliated epithelium' },
      ],
      answerId: 'b',
      explanation: 'The maxillary sinus ostium sits high on its medial wall and opens into the middle meatus, so drainage works against gravity and relies on mucociliary transport, predisposing it to infection.',
      tests: 'exam',
    },
  ],
};

export default paranasalSinuses;
