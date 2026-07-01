import type { Lecture } from '../../lib/types';

export const soleOfFoot: Lecture = {
  id: 'sole-of-foot',
  title: 'Sole of the Foot',
  system: 'msk',
  source: 'L21 — Leg & Foot',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L21 Leg & Foot' },
    { kind: 'disease', label: 'Plantar foot' },
    { kind: 'mechanism', label: 'Plantar nerves & fascia' },
    { kind: 'exam', label: 'Plantar fasciitis / tarsal tunnel' },
  ],

  highYield: [
    'The **plantar aponeurosis** is a thick central fascia from the **calcaneal tuberosity** to the toes; it supports the medial longitudinal arch (a "tie beam"). The intrinsic sole muscles are organized in **4 layers** (with the tendons of FDL/FHL passing through).',
    'The **sole is supplied by the tibial nerve\'s two terminal branches**: the **medial plantar nerve** (like the median in the hand — the "LAFF" muscles: **Lumbrical 1, Abductor hallucis, Flexor digitorum brevis, Flexor hallucis brevis**) and the **lateral plantar nerve** (like the ulnar — most other intrinsics, including the interossei and adductor hallucis).',
    'The tibial nerve and posterior tibial vessels enter the sole by passing **behind the medial malleolus under the flexor retinaculum (the tarsal tunnel)** — order (anterior→posterior) = **"Tom, Dick, ANd Harry": Tibialis posterior, flexor Digitorum longus, posterior tibial Artery + tibial Nerve, flexor Hallucis longus**.',
    '**Tarsal tunnel syndrome** = compression of the tibial nerve under the flexor retinaculum → burning pain/paresthesia of the sole and weak intrinsic muscles (the ankle equivalent of carpal tunnel).',
    '**Plantar fasciitis** = degeneration/inflammation of the plantar aponeurosis at its calcaneal origin → **heel pain, worst on the first steps in the morning** (± a calcaneal spur on X-ray).',
  ],

  mechanism: {
    title: 'Plantar aponeurosis + 4 muscle layers; medial/lateral plantar nerves',
    steps: [
      { id: 's1', label: 'Plantar aponeurosis supports the medial arch', emphasis: 'key' },
      { id: 's2', label: 'Medial plantar n. = LAFF; lateral plantar n. = the rest' },
      { id: 's3', label: 'Tarsal tunnel ("Tom Dick ANd Harry") behind medial malleolus' },
      { id: 's4', label: 'Plantar fasciitis → morning heel pain', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Sharp heel pain on the first steps in the morning', mechanism: 'Plantar fasciitis (calcaneal origin)', significance: 'key' },
    { sign: 'Burning sole paresthesia + weak toe flexors after ankle trauma', mechanism: 'Tarsal tunnel syndrome (tibial nerve)', significance: 'key' },
    { sign: 'Loss of most intrinsic foot muscles → clawing of toes', mechanism: 'Lateral plantar nerve lesion', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Point tenderness at the medial calcaneal tubercle', meaning: 'Plantar fasciitis' },
    { clue: 'Tinel over the tarsal tunnel', meaning: 'Tibial nerve compression' },
  ],

  treatment: [
    { logic: 'Plantar fasciitis: stretching, orthoses, NSAIDs', detail: 'Self-limited in most.' },
    { logic: 'Tarsal tunnel: splinting, injection, release', detail: 'Decompress the tibial nerve.' },
  ],

  mnemonics: [
    { hook: 'Tarsal tunnel (front→back) = "Tom, Dick, ANd Harry": Tibialis posterior, FDL, Artery + Nerve, FHL', expansion: ['Behind the medial malleolus'] },
    { hook: 'Medial plantar nerve = "LAFF" (Lumbrical 1, Abductor hallucis, FDB, FHB); rest = lateral plantar', expansion: ['Median-vs-ulnar analogy'] },
  ],

  traps: [
    {
      questionCategory: 'Which nerve supplies most sole intrinsics',
      wrongInstinct: 'The medial plantar nerve supplies most of the intrinsic foot muscles',
      rightAnswer: 'The LATERAL plantar nerve supplies MOST intrinsics (like the ulnar in the hand); the medial plantar nerve supplies only the "LAFF" muscles',
      why: 'The medial/lateral plantar nerves mirror the hand\'s median/ulnar split — the lateral (ulnar-equivalent) does the bulk of the intrinsic work.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which structures pass through the tarsal tunnel behind the medial malleolus, in order from anterior to posterior?',
      options: [
        { id: 'a', text: 'Tibialis anterior, EHL, dorsalis pedis artery, deep fibular nerve' },
        { id: 'b', text: 'Tibialis posterior, flexor digitorum longus, posterior tibial artery + tibial nerve, flexor hallucis longus' },
        { id: 'c', text: 'Peroneus longus, peroneus brevis, sural nerve' },
        { id: 'd', text: 'Great saphenous vein and saphenous nerve only' },
      ],
      answerId: 'b',
      explanation: 'The tarsal tunnel transmits (anterior→posterior) "Tom, Dick, ANd Harry": Tibialis posterior tendon, flexor Digitorum longus, posterior tibial Artery and tibial Nerve, and flexor Hallucis longus, under the flexor retinaculum.',
      tests: 'exam',
    },
  ],
};

export default soleOfFoot;
