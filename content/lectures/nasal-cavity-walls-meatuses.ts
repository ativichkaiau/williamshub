import type { Lecture } from '../../lib/types';
import { NASAL_MEATUS_DRAINAGE } from '../../lib/figures';

export const nasalCavityWallsMeatuses: Lecture = {
  id: 'nasal-cavity-walls-meatuses',
  title: 'Nasal Cavity: Walls, Conchae & Meatuses',
  system: 'msk',
  source: 'L13 — Nasal Cavity & Paranasal Sinuses',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L13 Nasal Cavity & Sinuses' },
    { kind: 'disease', label: 'Nasal cavity' },
    { kind: 'mechanism', label: 'Meatal drainage' },
    { kind: 'exam', label: 'What drains where' },
  ],

  highYield: [
    'The nasal cavity is divided by the **nasal septum** (septal cartilage + **perpendicular plate of ethmoid** + **vomer**). Its **lateral wall carries 3 conchae (turbinates): superior, middle, inferior**, each overhanging a **meatus** — this creates turbulence to warm/humidify/filter air.',
    '**Drainage rule — most sinuses open into the MIDDLE meatus.** **Inferior meatus → nasolacrimal duct**; **middle meatus → frontal, maxillary, and anterior/middle ethmoidal sinuses** (via the hiatus semilunaris/ethmoidal infundibulum); **superior meatus → posterior ethmoidal cells**; **sphenoethmoidal recess → sphenoid sinus**.',
    'The **olfactory epithelium** sits in the **roof/upper septum**; **CN I (olfactory) fibres pass through the cribriform plate** of the ethmoid → a cribriform fracture can cause **anosmia and CSF rhinorrhea**.',
    '**Sensory (general) innervation** is by the **trigeminal nerve**: **V1 (anterior/upper via anterior ethmoidal)** and **V2 (posterior/lower via nasopalatine and posterior nasal branches from the pterygopalatine ganglion)**. **Autonomic**: parasympathetic (secretomotor, via the pterygopalatine ganglion) and sympathetic (vasoconstriction).',
    'The **middle meatus / ostiomeatal complex** is the common drainage funnel for the frontal, maxillary, and anterior ethmoid sinuses — obstruction here underlies most **sinusitis**.',
  ],

  mechanism: {
    title: 'Conchae make meatuses; each meatus drains specific structures',
    steps: [
      { id: 's1', label: 'Septum: ethmoid + vomer + cartilage', emphasis: 'key' },
      { id: 's2', label: 'Inferior meatus → nasolacrimal duct' },
      { id: 's3', label: 'Middle meatus → frontal + maxillary + anterior ethmoid' },
      { id: 's4', label: 'Superior meatus → posterior ethmoid; recess → sphenoid' },
    ],
  },

  examFindings: [
    { sign: 'Clear watery rhinorrhea after a cribriform-plate fracture', mechanism: 'CSF leak through the cribriform plate', significance: 'key' },
    { sign: 'Loss of smell (anosmia)', mechanism: 'Olfactory (CN I) fibres damaged at the cribriform plate', significance: 'supportive' },
    { sign: 'Watery eye draining into the nose', mechanism: 'Nasolacrimal duct → inferior meatus', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Nasal endoscopy of the meatuses', meaning: 'Locate sinus ostia / obstruction' },
    { clue: 'Test smell (CN I)', meaning: 'Olfactory function' },
  ],

  treatment: [
    { logic: 'Relieve ostiomeatal obstruction in sinusitis', detail: 'Decongestants/steroids/FESS.' },
    { logic: 'Manage CSF leak from cribriform fracture', detail: 'Prevent meningitis.' },
  ],

  mnemonics: [
    { hook: 'Inferior meatus = nasolacrimal duct; middle meatus = most sinuses', expansion: ['Superior = posterior ethmoid; recess = sphenoid'] },
    { hook: 'CN I through the cribriform plate → anosmia + CSF rhinorrhea if fractured', expansion: ['Roof of nose'] },
  ],

  traps: [
    {
      questionCategory: 'What drains into the inferior meatus',
      wrongInstinct: 'The maxillary sinus drains into the inferior meatus (it is right above it)',
      rightAnswer: 'The maxillary sinus drains into the MIDDLE meatus; only the NASOLACRIMAL DUCT opens into the inferior meatus',
      why: 'The maxillary ostium sits high on its medial wall and drains up-and-over into the middle meatus, not down into the inferior meatus.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Into which meatus of the lateral nasal wall does the nasolacrimal duct open?',
      options: [
        { id: 'a', text: 'Superior meatus' },
        { id: 'b', text: 'Middle meatus' },
        { id: 'c', text: 'Inferior meatus' },
        { id: 'd', text: 'Sphenoethmoidal recess' },
      ],
      answerId: 'c',
      explanation: 'The nasolacrimal duct opens into the inferior meatus. Most paranasal sinuses drain into the middle meatus; the posterior ethmoid drains into the superior meatus and the sphenoid into the sphenoethmoidal recess.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Meatal drainage of the lateral nasal wall', svg: NASAL_MEATUS_DRAINAGE, caption: 'Inferior meatus = nasolacrimal duct; middle meatus = frontal/maxillary/anterior ethmoid; superior = posterior ethmoid; recess = sphenoid.' },
  ],
};

export default nasalCavityWallsMeatuses;
