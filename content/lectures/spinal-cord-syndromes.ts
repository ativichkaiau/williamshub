import type { Lecture } from '../../lib/types';
import { CORD_CROSS_SECTION } from '../../lib/figures';

export const spinalCordSyndromes: Lecture = {
  id: 'spinal-cord-syndromes',
  title: 'Spinal Cord Syndromes',
  system: 'neuro',
  source: 'L1 — Clinical Neuroanatomy I',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L1 Clinical Neuroanatomy I' },
    { kind: 'disease', label: 'Cord syndromes' },
    { kind: 'mechanism', label: 'Tract anatomy' },
    { kind: 'exam', label: 'Brown-Séquard' },
  ],

  highYield: [
    'Three tracts to track: **dorsal columns** (touch/vibration/proprioception, **ipsilateral**, cross in medulla) · **lateral corticospinal** (motor, **ipsilateral** below decussation) · **spinothalamic** (pain/temperature, **contralateral**, cross ~2 levels above entry).',
    '**Complete lesion**: cervical → **quadriplegia**; thoracic → **paraplegia**; lumbosacral → **paraparesis**. Acute phase = **spinal shock** (flaccid, areflexic) before spasticity develops.',
    '**Brown-Séquard (hemicord)**: ipsilateral LMN weakness at the level, **ipsilateral spastic weakness + loss of touch/vibration below**, **contralateral loss of pain/temperature below**.',
    '**Anterior cord syndrome** = most common incomplete traumatic lesion: loss of motor + pain/temperature below, **dorsal columns spared**. **Central cord** (syringomyelia): **cape-like bilateral pain/temp loss**, arms > legs, sacral sparing.',
    '**ALS**: mixed **UMN + LMN**, pure motor (spares sensation). **Subacute combined degeneration (B12)**: dorsal columns + corticospinal (loss of vibration/proprioception + spastic weakness), spares pain/temp.',
  ],

  mechanism: {
    title: 'Which tracts the lesion catches → the deficit pattern',
    steps: [
      { id: 's1', label: 'Lesion at a cord level/region' },
      { id: 's2', label: 'Dorsal column? → ipsilateral touch/vibration loss' },
      { id: 's3', label: 'Corticospinal? → ipsilateral spastic weakness below', emphasis: 'key' },
      { id: 's4', label: 'Spinothalamic? → contralateral pain/temp loss below', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Contralateral pain/temperature loss a few levels below the lesion', mechanism: 'Spinothalamic fibers already crossed', significance: 'key' },
    { sign: 'Ipsilateral vibration/proprioception loss + weakness', mechanism: 'Dorsal column + corticospinal (uncrossed at cord)', significance: 'key' },
    { sign: 'Dissociated (cape) sensory loss with preserved touch', mechanism: 'Central/commissural lesion hits crossing spinothalamic fibers', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Sensory level on the trunk (e.g. umbilicus = T10)', meaning: 'Pinpoints the segment' },
    { clue: 'MRI spine', meaning: 'Compression, syrinx, demyelination, infarct' },
    { clue: 'B12 / methylmalonic acid', meaning: 'Subacute combined degeneration' },
  ],

  treatment: [
    { logic: 'Treat the cause (decompress, B12, immunosuppress)', detail: 'Depends on the syndrome.' },
    { logic: 'Anterior spinal artery territory is motor + spinothalamic', detail: 'Explains the anterior cord pattern; protect perfusion.' },
  ],

  mnemonics: [
    { hook: 'Brown-Séquard: motor & touch stay IPSI, pain/temp go CONTRA', expansion: ['Because spinothalamic already crossed'] },
    { hook: 'Central cord = “cape” pain/temp loss, arms > legs', expansion: ['Crossing fibers hit first; syringomyelia'] },
  ],

  traps: [
    {
      questionCategory: 'Side of pain/temperature loss',
      wrongInstinct: 'In hemicord (Brown-Séquard), all deficits are on the side of the lesion',
      rightAnswer: 'Pain/temperature loss is CONTRALateral and begins a couple of levels below; motor and touch/vibration loss are ipsilateral',
      why: 'Spinothalamic fibers cross within 1–2 segments of entry, so a hemicord lesion drops pain/temp on the opposite side, while the still-uncrossed corticospinal and dorsal-column deficits stay ipsilateral.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'After a stab wound, a patient has right-leg spastic weakness with loss of vibration sense on the right, and loss of pain and temperature on the left below the umbilicus. This is:',
      options: [
        { id: 'a', text: 'Anterior cord syndrome' },
        { id: 'b', text: 'Central cord syndrome' },
        { id: 'c', text: 'Brown-Séquard (hemicord) syndrome' },
        { id: 'd', text: 'Dorsal column syndrome' },
      ],
      answerId: 'c',
      explanation: 'Ipsilateral motor + dorsal-column loss with contralateral spinothalamic (pain/temperature) loss is Brown-Séquard hemicord syndrome — classically from a penetrating injury.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Spinal cord cross-section — tracts', svg: CORD_CROSS_SECTION, caption: 'Dorsal columns (ipsilateral touch/vibration), lateral corticospinal (ipsilateral motor), spinothalamic (contralateral pain/temp). Which tracts a lesion catches defines the syndrome.' },
  ],
};

export default spinalCordSyndromes;
