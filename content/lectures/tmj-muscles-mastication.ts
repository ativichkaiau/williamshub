import type { Lecture } from '../../lib/types';

export const tmjMusclesMastication: Lecture = {
  id: 'tmj-muscles-mastication',
  title: 'TMJ & Muscles of Mastication',
  system: 'msk',
  source: 'L10 — Infratemporal & Pterygopalatine Fossae',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L10 Infratemporal & PPF' },
    { kind: 'disease', label: 'TMJ / mastication' },
    { kind: 'mechanism', label: 'Muscles move the mandible' },
    { kind: 'exam', label: 'TMJ dislocation' },
  ],

  highYield: [
    'The **temporomandibular joint (TMJ)** is a **modified hinge synovial joint** (hinge + gliding) between the mandibular fossa/articular tubercle of the temporal bone and the head of the mandible, divided by a fibrocartilage **articular disc** into an **upper (gliding: protrusion/retraction)** and **lower (hinge: depression/elevation)** compartment.',
    'The **4 muscles of mastication (masseter, temporalis, medial pterygoid, lateral pterygoid)** are derivatives of the **1st pharyngeal arch**, all supplied by the **mandibular nerve (CN V3)** and by branches of the **maxillary artery**.',
    '**Actions**: **elevate (close)** = temporalis, masseter, medial pterygoid; **depress (open)** = digastric/mylohyoid/geniohyoid (± gravity, aided by lateral pterygoid); **protrude** = lateral + medial pterygoids; **retract** = posterior temporalis; **side-to-side grinding** = pterygoids.',
    '**Lateral pterygoid is the key opener/protruder** — it pulls the mandibular head + disc forward onto the articular tubercle; its contraction is the usual cause of **anterior TMJ dislocation** (wide yawn/large bite), where the head slips anterior to the articular tubercle and the mouth locks open.',
    'The **articular tubercle normally prevents anterior dislocation**; the auriculotemporal and facial nerves lie close to the TMJ and can be injured with joint trauma/surgery.',
  ],

  mechanism: {
    title: 'Two-compartment joint; V3 muscles open, close, and grind',
    steps: [
      { id: 's1', label: 'Disc splits TMJ: upper glide, lower hinge', emphasis: 'key' },
      { id: 's2', label: 'Elevators (close): temporalis, masseter, medial pterygoid' },
      { id: 's3', label: 'Lateral pterygoid opens/protrudes (pulls head forward)' },
      { id: 's4', label: 'Wide yawn → anterior dislocation (locks open)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Mouth locked open after a wide yawn', mechanism: 'Anterior TMJ dislocation (lateral pterygoid pull)', significance: 'key' },
    { sign: 'Jaw deviates to the weak side on opening', mechanism: 'Ipsilateral lateral pterygoid weakness', significance: 'supportive' },
    { sign: 'Wasting of the temporalis (hollow temple)', mechanism: 'CN V3 (motor) lesion', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Test jaw opening/deviation', meaning: 'Lateral pterygoid / V3 function' },
    { clue: 'Palpate masseter/temporalis on clenching', meaning: 'Elevator muscle bulk' },
  ],

  treatment: [
    { logic: 'Reduce dislocation: downward then backward pressure', detail: 'Guides the head back under the tubercle.' },
    { logic: 'TMJ dysfunction: soft diet, bite splint', detail: 'Conservative first.' },
  ],

  mnemonics: [
    { hook: 'Muscles of mastication = CN V3 (1st arch); lateral pterygoid opens', expansion: ['"Lateral Lowers" the jaw'] },
    { hook: 'Elevate = Temporalis, Masseter, Medial pterygoid; Protrude = pterygoids', expansion: ['Retract = posterior temporalis'] },
  ],

  traps: [
    {
      questionCategory: 'Which muscle opens the jaw',
      wrongInstinct: 'The masseter and temporalis open the mouth',
      rightAnswer: 'They CLOSE (elevate) the jaw; the LATERAL PTERYGOID (with suprahyoid muscles and gravity) opens it by protracting the mandibular head',
      why: 'The powerful masseter/temporalis/medial pterygoid are elevators; opening is driven by the lateral pterygoid and digastric group.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient cannot close the mouth after yawning widely; the mandibular head has slipped anterior to the articular tubercle. Which muscle\'s action explains this dislocation?',
      options: [
        { id: 'a', text: 'Masseter' },
        { id: 'b', text: 'Lateral pterygoid' },
        { id: 'c', text: 'Temporalis (posterior fibers)' },
        { id: 'd', text: 'Medial pterygoid' },
      ],
      answerId: 'b',
      explanation: 'The lateral pterygoid protracts the mandibular head and disc onto the articular tubercle; excessive contraction (wide yawn/large bite) can carry the head anterior to the tubercle, dislocating the TMJ so the mouth locks open.',
      tests: 'exam',
    },
  ],
};

export default tmjMusclesMastication;
