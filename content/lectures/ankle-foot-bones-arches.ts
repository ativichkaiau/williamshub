import type { Lecture } from '../../lib/types';
import { FOOT_ARCHES } from '../../lib/figures';

export const ankleFootBonesArches: Lecture = {
  id: 'ankle-foot-bones-arches',
  title: 'Ankle, Foot Bones & Arches',
  system: 'msk',
  source: 'L21 — Leg & Foot',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L21 Leg & Foot' },
    { kind: 'disease', label: 'Foot bones / arches' },
    { kind: 'mechanism', label: 'Arch support' },
    { kind: 'exam', label: 'Ankle sprain / flat foot' },
  ],

  highYield: [
    'The **foot has 7 tarsals** (talus, calcaneus, navicular, cuboid, 3 cuneiforms), **5 metatarsals**, and **14 phalanges**, grouped into **hindfoot (talus + calcaneus), midfoot, and forefoot**. The **ankle (talocrural) joint** is a hinge between the tibia/fibula mortise and the talus (dorsiflexion/plantarflexion); inversion/eversion occur at the **subtalar** joint.',
    'The **ankle is most stable in DORSIFLEXION** (the wider anterior talus wedges into the mortise) and least stable in plantarflexion. The **lateral ligament (esp. the anterior talofibular ligament) is the most commonly sprained** — an **inversion injury**; the strong **medial (deltoid) ligament** resists eversion (eversion sprains are rarer and often fracture instead).',
    'Three arches distribute load: the **medial longitudinal arch** (highest — **keystone = talus**; supported by the **spring/plantar calcaneonavicular ligament, plantar aponeurosis, and tibialis posterior**), the **lateral longitudinal**, and the **transverse arch**. Weight bears on a **tripod: the heel + the 1st and 5th metatarsal heads**.',
    '**Pes planus (flat foot)** = collapsed medial arch — congenital, or acquired via **posterior tibial tendon dysfunction**. **Pes cavus (high arch)** is often neuromuscular (e.g. **Charcot–Marie–Tooth**).',
    '**Club foot (talipes equinovarus)** — congenital: **"CAVE" = Cavus, forefoot Adductus, hindfoot Varus, ankle Equinus**. **Hallux valgus (bunion)** = lateral deviation of the great toe at the 1st MTP (aggravated by narrow footwear).',
  ],

  mechanism: {
    title: 'A tripod on three arches; ligaments guard against sprain',
    steps: [
      { id: 's1', label: 'Tarsals/metatarsals/phalanges; hind/mid/forefoot', emphasis: 'key' },
      { id: 's2', label: 'Ankle stable in dorsiflexion (wide talus wedges in)' },
      { id: 's3', label: 'Inversion sprain → anterior talofibular ligament' },
      { id: 's4', label: 'Medial arch keystone = talus; spring ligament + tibialis posterior', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Lateral ankle swelling after "rolling" (inverting) the ankle', mechanism: 'Anterior talofibular ligament sprain', significance: 'key' },
    { sign: 'Progressive flat foot with a "too many toes" sign', mechanism: 'Posterior tibial tendon dysfunction (acquired pes planus)', significance: 'key' },
    { sign: 'High-arched cavus foot in a patient with peripheral neuropathy', mechanism: 'Charcot–Marie–Tooth', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Ankle exam + Ottawa rules for radiography', meaning: 'Sprain vs fracture' },
    { clue: 'Footprint / arch assessment', meaning: 'Pes planus vs cavus' },
  ],

  treatment: [
    { logic: 'Inversion sprain: RICE, functional rehab', detail: 'Most heal conservatively.' },
    { logic: 'Flat foot from PTTD: orthoses ± tendon reconstruction', detail: 'Support the medial arch.' },
  ],

  mnemonics: [
    { hook: 'Ankle stable in dorsiflexion; inversion sprain = Anterior TaloFibular ligament ("Always Tears First")', expansion: ['Deltoid ligament resists eversion'] },
    { hook: 'Club foot = CAVE: Cavus, Adductus, Varus, Equinus', expansion: ['Congenital talipes equinovarus'] },
  ],

  traps: [
    {
      questionCategory: 'Which ankle ligament is most commonly sprained',
      wrongInstinct: 'The deltoid (medial) ligament is the one usually torn in ankle sprains',
      rightAnswer: 'The LATERAL ligament — especially the anterior talofibular ligament — is most commonly sprained in an INVERSION injury; the strong deltoid (medial) ligament is rarely torn',
      why: 'Most ankle injuries are inversion, stressing the weaker lateral ligaments; forced eversion tends to avulse the medial malleolus rather than tear the deltoid.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A player "rolls" the ankle inward and has swelling over the lateral ankle. Which ligament is most likely injured?',
      options: [
        { id: 'a', text: 'Deltoid (medial) ligament' },
        { id: 'b', text: 'Anterior talofibular ligament' },
        { id: 'c', text: 'Spring (plantar calcaneonavicular) ligament' },
        { id: 'd', text: 'Long plantar ligament' },
      ],
      answerId: 'b',
      explanation: 'An inversion injury most commonly sprains the lateral ligament complex, and the anterior talofibular ligament is the weakest/most frequently torn; the medial deltoid ligament is strong and rarely injured.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Arches of the foot', svg: FOOT_ARCHES, caption: 'Medial arch keystone = talus; supported by the spring ligament, plantar aponeurosis, and tibialis posterior; tripod = heel + 1st/5th MT heads.' },
  ],
};

export default ankleFootBonesArches;
