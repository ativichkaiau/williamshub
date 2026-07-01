import type { Lecture } from '../../lib/types';

export const forearmExtensorCompartmentSnuffbox: Lecture = {
  id: 'forearm-extensor-compartment-snuffbox',
  title: 'Posterior Forearm & Anatomical Snuffbox',
  system: 'msk',
  source: 'L3 — Forearm, Wrist Bones & Dorsum of Hand',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L3 Forearm & Hand Bones' },
    { kind: 'disease', label: 'Extensor compartment' },
    { kind: 'mechanism', label: 'Radial nerve / PIN' },
    { kind: 'exam', label: 'Snuffbox / De Quervain' },
  ],

  highYield: [
    'The **posterior (extensor) forearm is entirely radial-nerve territory** — via its **deep branch, which becomes the posterior interosseous nerve (PIN)** after passing through supinator. The superficial extensors arise from the **common extensor origin (lateral epicondyle)**.',
    '**Superficial extensors**: brachioradialis, extensor carpi radialis longus/brevis, extensor digitorum, extensor digiti minimi, extensor carpi ulnaris. **Deep**: supinator, abductor pollicis longus, extensor pollicis brevis/longus, extensor indicis.',
    '**PIN palsy → finger-drop** (weak finger/thumb extension) but **wrist extension is preserved and there is NO sensory loss** (PIN is motor; ECRL keeps the wrist up). A more proximal radial-nerve lesion instead gives full **wrist drop**.',
    '**Anatomical snuffbox**: **lateral border = abductor pollicis longus + extensor pollicis brevis (1st compartment); medial border = extensor pollicis longus (3rd compartment); floor = scaphoid + trapezium**, crossed by the **radial artery**. **Snuffbox tenderness = scaphoid fracture**; the radial pulse can be felt here.',
    '**De Quervain tenosynovitis** = inflammation of the **1st dorsal compartment (APL + EPB)** → radial wrist pain, **positive Finkelstein test**. The **extensor retinaculum** holds the 6 extensor tendon compartments at the wrist. **"Tennis elbow" (lateral epicondylitis)** affects the common extensor origin.',
  ],

  mechanism: {
    title: 'Radial nerve → extensors; snuffbox floored by the scaphoid',
    steps: [
      { id: 's1', label: 'All extensors = radial nerve / PIN', emphasis: 'key' },
      { id: 's2', label: 'PIN palsy → finger drop, wrist spared, no sensory loss' },
      { id: 's3', label: 'Snuffbox: APL/EPB — EPL borders; scaphoid floor + radial a.' },
      { id: 's4', label: 'De Quervain = 1st compartment (APL+EPB), Finkelstein +', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Finger drop with preserved wrist extension and no numbness', mechanism: 'PIN palsy (deep radial nerve)', significance: 'key' },
    { sign: 'Radial wrist pain, positive Finkelstein test', mechanism: 'De Quervain tenosynovitis (1st compartment)', significance: 'key' },
    { sign: 'Snuffbox tenderness after a fall', mechanism: 'Scaphoid fracture (snuffbox floor)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Test wrist vs finger extension separately', meaning: 'PIN (finger drop) vs radial (wrist drop)' },
    { clue: 'Finkelstein test', meaning: 'De Quervain tenosynovitis' },
    { clue: 'Palpate the snuffbox floor', meaning: 'Scaphoid; radial pulse crosses here' },
  ],

  treatment: [
    { logic: 'De Quervain: splint, NSAIDs, steroid injection', detail: '1st-compartment release if refractory.' },
    { logic: 'PIN palsy: observe / decompress supinator', detail: 'Motor recovery expected in many.' },
  ],

  mnemonics: [
    { hook: 'Snuffbox borders: APL + EPB (lateral), EPL (medial); floor = scaphoid + radial artery', expansion: ['Snuffbox tenderness = scaphoid'] },
    { hook: 'PIN palsy = finger drop (wrist spared); full radial lesion = wrist drop', expansion: ['PIN is motor, no sensory loss'] },
  ],

  traps: [
    {
      questionCategory: 'PIN palsy vs radial nerve wrist drop',
      wrongInstinct: 'Any radial-nerve-region lesion causes complete wrist drop',
      rightAnswer: 'A posterior interosseous nerve (PIN) lesion causes finger drop with PRESERVED wrist extension (ECRL spared) and no sensory loss; wrist drop needs a more proximal radial lesion',
      why: 'ECRL is innervated before the deep branch becomes the PIN, so wrist extension survives a PIN lesion.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which structures form the floor of the anatomical snuffbox and cross it, making snuffbox tenderness clinically important?',
      options: [
        { id: 'a', text: 'Lunate and ulnar artery' },
        { id: 'b', text: 'Scaphoid (and trapezium) with the radial artery crossing' },
        { id: 'c', text: 'Capitate and median nerve' },
        { id: 'd', text: 'Triquetrum and ulnar nerve' },
      ],
      answerId: 'b',
      explanation: 'The snuffbox floor is the scaphoid (and trapezium), crossed by the radial artery; its borders are APL/EPB laterally and EPL medially. Snuffbox tenderness suggests a scaphoid fracture.',
      tests: 'exam',
    },
  ],
};

export default forearmExtensorCompartmentSnuffbox;
