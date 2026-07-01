import type { Lecture } from '../../lib/types';
import { HEAD_PARASYMPATHETIC_GANGLIA } from '../../lib/figures';

export const pterygopalatineFossa: Lecture = {
  id: 'pterygopalatine-fossa',
  title: 'Pterygopalatine Fossa & Its Ganglion',
  system: 'msk',
  source: 'L10 — Infratemporal & Pterygopalatine Fossae',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L10 Infratemporal & PPF' },
    { kind: 'disease', label: 'Pterygopalatine fossa' },
    { kind: 'mechanism', label: 'Crossroads & ganglion' },
    { kind: 'exam', label: 'Vidian nerve / V2' },
  ],

  highYield: [
    'The **pterygopalatine fossa (PPF)** is a small space between the maxilla and sphenoid — an **autonomic and neurovascular "crossroads"** that communicates with the **middle cranial fossa (foramen rotundum), infratemporal fossa (pterygomaxillary fissure), orbit (inferior orbital fissure), nasal cavity (sphenopalatine foramen), oral cavity/palate (palatine canals), and foramen lacerum (pterygoid canal)**.',
    'Its contents are the **maxillary nerve (CN V2)**, the **pterygopalatine (sphenopalatine/Meckel) ganglion**, and the **3rd (pterygopalatine) part of the maxillary artery**.',
    '**Maxillary nerve (V2)** enters via the **foramen rotundum** and gives (in the fossa) the **posterior superior alveolar, zygomatic, infraorbital**, and ganglionic branches — all **sensory** (mid-face, upper teeth, palate, nasal cavity).',
    'The **pterygopalatine ganglion is a PARASYMPATHETIC ganglion**. Its input, the **nerve of the pterygoid canal (Vidian nerve)**, = **greater petrosal nerve (preganglionic PARASYMPATHETIC from CN VII)** + **deep petrosal nerve (postganglionic SYMPATHETIC from the internal carotid plexus)**. Postganglionic parasympathetic fibres supply the **lacrimal gland and the nasal/palatine mucous glands**.',
    'The **sphenopalatine artery** (terminal branch of the maxillary artery) enters the nose via the sphenopalatine foramen and is the **main source of posterior epistaxis**; greater/lesser palatine and infraorbital arteries supply the palate and mid-face.',
  ],

  mechanism: {
    title: 'A crossroads housing V2, the PPG, and the maxillary artery 3rd part',
    steps: [
      { id: 's1', label: 'Communicates with orbit, nose, palate, cranial & infratemporal fossae', emphasis: 'key' },
      { id: 's2', label: 'V2 (foramen rotundum) → mid-face sensation' },
      { id: 's3', label: 'Vidian n. = greater petrosal (VII, PARA) + deep petrosal (SYMP)' },
      { id: 's4', label: 'PPG → lacrimal + nasal glands; sphenopalatine a. → epistaxis', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Mid-face / upper-teeth / palate numbness', mechanism: 'Maxillary nerve (V2) territory', significance: 'key' },
    { sign: 'Brisk posterior nosebleed', mechanism: 'Sphenopalatine artery (posterior epistaxis)', significance: 'key' },
    { sign: 'Impaired tearing (dry eye) with a lesion near the ganglion', mechanism: 'Parasympathetic supply to lacrimal gland via PPG', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'V2 sensory testing (cheek, upper teeth, palate)', meaning: 'Maxillary nerve' },
    { clue: 'Nasal endoscopy for posterior bleeding source', meaning: 'Sphenopalatine artery territory' },
  ],

  treatment: [
    { logic: 'Posterior epistaxis: packing / sphenopalatine artery ligation/embolization', detail: 'Terminal maxillary artery branch.' },
    { logic: 'Sphenopalatine ganglion block for certain headaches', detail: 'Targets the PPG.' },
  ],

  mnemonics: [
    { hook: 'Vidian nerve = greater petrosal (parasympathetic, VII) + deep petrosal (sympathetic, ICA)', expansion: ['Feeds the pterygopalatine ganglion'] },
    { hook: 'Pterygopalatine ganglion → lacrimal + nasal glands; sphenopalatine a. → posterior epistaxis', expansion: ['V2 via foramen rotundum'] },
  ],

  traps: [
    {
      questionCategory: 'Fibre types in the nerve of the pterygoid canal',
      wrongInstinct: 'The Vidian nerve is purely parasympathetic',
      rightAnswer: 'It combines PREganglionic PARASYMPATHETIC fibres (greater petrosal, from CN VII) with POSTganglionic SYMPATHETIC fibres (deep petrosal, from the internal carotid plexus)',
      why: 'Only the parasympathetic fibres synapse in the pterygopalatine ganglion; the sympathetic (and sensory) fibres pass straight through.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The nerve of the pterygoid canal (Vidian nerve) that reaches the pterygopalatine ganglion is formed by which two nerves?',
      options: [
        { id: 'a', text: 'Lesser petrosal + chorda tympani' },
        { id: 'b', text: 'Greater petrosal (parasympathetic, CN VII) + deep petrosal (sympathetic)' },
        { id: 'c', text: 'Auriculotemporal + lingual' },
        { id: 'd', text: 'Infraorbital + zygomatic' },
      ],
      answerId: 'b',
      explanation: 'The Vidian nerve = greater petrosal (preganglionic parasympathetic from the facial nerve) + deep petrosal (postganglionic sympathetic from the internal carotid plexus). Only the parasympathetic fibres synapse in the pterygopalatine ganglion, which supplies the lacrimal and nasal glands.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Parasympathetic ganglia of the head', svg: HEAD_PARASYMPATHETIC_GANGLIA, caption: 'The pterygopalatine ganglion (CN VII via greater petrosal) supplies the lacrimal and nasal glands; the four head ganglia compared.' },
  ],
};

export default pterygopalatineFossa;
