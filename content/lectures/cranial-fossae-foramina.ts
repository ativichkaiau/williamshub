import type { Lecture } from '../../lib/types';
import { CRANIAL_FOSSAE_FORAMINA } from '../../lib/figures';

export const cranialFossaeForamina: Lecture = {
  id: 'cranial-fossae-foramina',
  title: 'Cranial Fossae & Foramina',
  system: 'msk',
  source: 'L11 — Skull & Cranial Fossae',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L11 Skull & Cranial Fossae' },
    { kind: 'disease', label: 'Skull base foramina' },
    { kind: 'mechanism', label: 'What passes through' },
    { kind: 'exam', label: 'Cranial nerve exits' },
  ],

  highYield: [
    'The **cranial base has 3 fossae**, each stepping down posteriorly. **Anterior cranial fossa** (frontal, ethmoid, lesser wing of sphenoid): the **cribriform plate transmits CN I (olfactory)**; the **optic canal** (in the lesser wing) transmits **CN II + the ophthalmic artery**.',
    '**Middle cranial fossa** (sphenoid + temporal): the **superior orbital fissure → CN III, IV, V1, VI + the ophthalmic vein**; **foramen rotundum → CN V2**; **foramen ovale → CN V3**; **foramen spinosum → middle meningeal artery**; **foramen lacerum / carotid canal → internal carotid artery**.',
    '**Posterior cranial fossa** (occipital + petrous temporal): **internal acoustic meatus → CN VII + VIII**; **jugular foramen → CN IX, X, XI + internal jugular vein**; **hypoglossal canal → CN XII**; **foramen magnum → medulla/spinal cord junction, CN XI (spinal roots), vertebral arteries**.',
    '**Mnemonic for the superior orbital fissure**: it carries the nerves that move the eye and sense the upper face (III, IV, V1, VI) — a lesion here = **superior orbital fissure syndrome** (ophthalmoplegia + V1 sensory loss).',
    'Trigeminal divisions exit in a tidy sequence: **V1 → superior orbital fissure, V2 → foramen rotundum, V3 → foramen ovale** ("Standing Room Only": SOF-Rotundum-Ovale for V1-V2-V3).',
  ],

  mechanism: {
    title: 'Three fossae; each foramen transmits a specific nerve/vessel',
    steps: [
      { id: 's1', label: 'Anterior: cribriform (I), optic canal (II)', emphasis: 'key' },
      { id: 's2', label: 'Middle: SOF (III/IV/V1/VI), rotundum (V2), ovale (V3)' },
      { id: 's3', label: 'Middle: spinosum (middle meningeal a.)' },
      { id: 's4', label: 'Posterior: IAM (VII/VIII), jugular (IX/X/XI), XII canal', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Anosmia after a cribriform-plate fracture (± CSF rhinorrhea)', mechanism: 'CN I injury at the anterior fossa', significance: 'key' },
    { sign: 'Ophthalmoplegia + forehead numbness', mechanism: 'Superior orbital fissure syndrome (III/IV/V1/VI)', significance: 'key' },
    { sign: 'Hoarseness + dysphagia + shoulder droop together', mechanism: 'Jugular foramen syndrome (IX/X/XI)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Map cranial-nerve deficits to a foramen', meaning: 'Localizes a skull-base lesion' },
    { clue: 'CT skull base', meaning: 'Fractures / masses at foramina' },
  ],

  treatment: [
    { logic: 'Anatomy underlies skull-base surgery & trauma care', detail: 'e.g. CSF leak from cribriform fracture.' },
  ],

  mnemonics: [
    { hook: 'V1 → Superior orbital fissure, V2 → Rotundum, V3 → Ovale ("Standing Room Only")', expansion: ['Trigeminal exits'] },
    { hook: 'Superior orbital fissure = eye movers + V1 (III, IV, V1, VI)', expansion: ['+ ophthalmic vein'] },
  ],

  traps: [
    {
      questionCategory: 'Foramen for the maxillary vs mandibular nerve',
      wrongInstinct: 'Both V2 and V3 exit through the foramen ovale',
      rightAnswer: 'V2 (maxillary) exits the foramen ROTUNDUM; V3 (mandibular) exits the foramen OVALE',
      why: 'Only V3 uses the foramen ovale; mixing up rotundum/ovale is a common skull-base error.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Through which opening do cranial nerves IX, X, and XI (plus the internal jugular vein) leave the skull?',
      options: [
        { id: 'a', text: 'Foramen ovale' },
        { id: 'b', text: 'Jugular foramen' },
        { id: 'c', text: 'Internal acoustic meatus' },
        { id: 'd', text: 'Foramen magnum' },
      ],
      answerId: 'b',
      explanation: 'The jugular foramen transmits CN IX (glossopharyngeal), X (vagus), XI (accessory), and the internal jugular vein; a lesion there gives "jugular foramen syndrome."',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Cranial fossae & foramina', svg: CRANIAL_FOSSAE_FORAMINA, caption: 'Each foramen transmits a specific cranial nerve/vessel — anterior (I, II), middle (III–VI, V2, V3, MMA), posterior (VII–XII).' },
  ],
};

export default cranialFossaeForamina;
