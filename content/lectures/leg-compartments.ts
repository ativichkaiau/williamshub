import type { Lecture } from '../../lib/types';
import { LEG_COMPARTMENTS } from '../../lib/figures';

export const legCompartments: Lecture = {
  id: 'leg-compartments',
  title: 'Compartments of the Leg',
  system: 'msk',
  source: 'L21 — Leg & Foot',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L21 Leg & Foot' },
    { kind: 'disease', label: 'Leg compartments' },
    { kind: 'mechanism', label: 'Action / nerve / artery' },
    { kind: 'exam', label: 'Foot drop / compartment syndrome' },
  ],

  highYield: [
    'The leg has **3 compartments**. **Anterior (dorsiflexion)**: tibialis anterior, EHL, EDL, peroneus tertius → **deep fibular (peroneal) nerve**, **anterior tibial artery** (→ dorsalis pedis).',
    '**Lateral (eversion)**: fibularis (peroneus) longus + brevis → **superficial fibular (peroneal) nerve**, supplied by the **fibular (peroneal) artery** and anterior tibial.',
    '**Posterior (plantarflexion)**: **superficial** = gastrocnemius, soleus, plantaris (→ **calcaneal/Achilles tendon**); **deep** = flexor digitorum longus, flexor hallucis longus, tibialis posterior, popliteus → **tibial nerve**, **posterior tibial artery**.',
    '**Foot drop = weak dorsiflexion/eversion** from a **common fibular (peroneal) nerve** lesion (at the fibular neck) — affecting BOTH the deep (dorsiflexors) and superficial (evertors) branches → a **high-stepping (steppage) gait**. An isolated **deep fibular** lesion loses dorsiflexion + sensation of the **1st web space**.',
    '**Acute compartment syndrome** (trauma, tight cast, reperfusion) → the **6 P\'s: Pain out of proportion (worse on passive stretch), Paresthesia, Pallor, Pulselessness (late), Poikilothermia, Paralysis** → **emergency fasciotomy** (the anterior compartment is most often affected).',
  ],

  mechanism: {
    title: 'Three compartments, each with an action, nerve, and artery',
    steps: [
      { id: 's1', label: 'Anterior: dorsiflex — deep fibular n., anterior tibial a.', emphasis: 'key' },
      { id: 's2', label: 'Lateral: evert — superficial fibular n.' },
      { id: 's3', label: 'Posterior: plantarflex — tibial n., posterior tibial a.' },
      { id: 's4', label: 'Common fibular palsy → foot drop; 6 P\'s → fasciotomy', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Foot drop + high-stepping gait after a fibular-neck injury', mechanism: 'Common fibular (peroneal) nerve palsy', significance: 'key' },
    { sign: 'Severe pain worse on passive stretch, tense compartment', mechanism: 'Acute compartment syndrome', significance: 'key' },
    { sign: 'Numb first web space + weak dorsiflexion', mechanism: 'Deep fibular nerve lesion', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Pain on passive stretch + compartment pressure', meaning: 'Compartment syndrome (pulselessness is late)' },
    { clue: 'Dorsalis pedis vs posterior tibial pulse', meaning: 'Anterior vs posterior circulation' },
  ],

  treatment: [
    { logic: 'Compartment syndrome: urgent fasciotomy', detail: 'Do not wait for pulselessness.' },
    { logic: 'Foot drop: ankle-foot orthosis, treat cause', detail: 'Protect the fibular neck.' },
  ],

  mnemonics: [
    { hook: 'Anterior = dorsiflex (deep fibular); Lateral = evert (superficial fibular); Posterior = plantarflex (tibial)', expansion: ['Match action to nerve'] },
    { hook: 'Compartment syndrome = 6 P\'s; Pain out of proportion is earliest, Pulselessness is late', expansion: ['Fasciotomy'] },
  ],

  traps: [
    {
      questionCategory: 'Earliest sign of compartment syndrome',
      wrongInstinct: 'Compartment syndrome is diagnosed by a loss of the distal pulse',
      rightAnswer: 'Pulselessness is a LATE sign — the earliest is severe PAIN out of proportion, worse on passive stretch of the compartment muscles; act before pulses disappear',
      why: 'Waiting for pulselessness means irreversible muscle/nerve ischemia — fasciotomy should be done on clinical suspicion.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A fibular-neck fracture causes weakness of both dorsiflexion and eversion with foot drop. Which nerve is injured?',
      options: [
        { id: 'a', text: 'Tibial nerve' },
        { id: 'b', text: 'Common fibular (peroneal) nerve' },
        { id: 'c', text: 'Deep fibular nerve only' },
        { id: 'd', text: 'Superficial fibular nerve only' },
      ],
      answerId: 'b',
      explanation: 'The common fibular nerve wraps around the fibular neck and divides into the deep (dorsiflexors) and superficial (evertors) branches; injuring it there weakens both dorsiflexion and eversion, causing foot drop.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Compartments of the leg', svg: LEG_COMPARTMENTS, caption: 'Anterior (dorsiflex, deep fibular), lateral (evert, superficial fibular), posterior (plantarflex, tibial).' },
  ],
};

export default legCompartments;
