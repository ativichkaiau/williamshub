import type { Lecture } from '../../lib/types';
import { GLUTEAL_FORAMINA } from '../../lib/figures';

export const glutealRegionNerves: Lecture = {
  id: 'gluteal-region-nerves',
  title: 'Gluteal Region & Sciatic Foramina',
  system: 'msk',
  source: 'L20 — Gluteal Region, Posterior Thigh & Popliteal Fossa',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L20 Gluteal & Popliteal' },
    { kind: 'disease', label: 'Gluteal muscles/nerves' },
    { kind: 'mechanism', label: 'Piriformis & foramina' },
    { kind: 'exam', label: 'Trendelenburg / injection' },
  ],

  highYield: [
    '**Gluteal muscles**: **gluteus maximus** (chief hip **extensor**, inferior gluteal nerve); **gluteus medius + minimus + tensor fasciae latae** (hip **abductors/medial rotators**, superior gluteal nerve); and the **deep lateral rotators** (piriformis, superior/inferior gemelli, obturator internus, quadratus femoris).',
    '**Piriformis is the key landmark** in the greater sciatic foramen: structures exit **above it (suprapiriform) or below it (infrapiriform)**. **Suprapiriform → superior gluteal nerve/vessels**. **Infrapiriform → sciatic nerve, inferior gluteal nerve/vessels, pudendal nerve, internal pudendal vessels, posterior femoral cutaneous nerve, and nerves to obturator internus/quadratus femoris**.',
    'The **pudendal nerve + internal pudendal vessels** leave via the infrapiriform foramen, hook around the ischial spine, and **re-enter the perineum through the lesser sciatic foramen** (with the obturator internus tendon).',
    '**Superior gluteal nerve injury → hip abductor weakness → positive Trendelenburg sign** (the pelvis DROPS on the UNSUPPORTED/contralateral side when standing on the affected leg) and a **waddling gait**.',
    '**Intramuscular gluteal injections** must go into the **superolateral quadrant** of the buttock to **avoid the sciatic nerve** (which lies in the lower medial region).',
  ],

  mechanism: {
    title: 'Abductors keep the pelvis level; piriformis sorts the foramen',
    steps: [
      { id: 's1', label: 'Maximus extends; medius/minimus/TFL abduct', emphasis: 'key' },
      { id: 's2', label: 'Suprapiriform → superior gluteal n.' },
      { id: 's3', label: 'Infrapiriform → sciatic, inferior gluteal, pudendal…' },
      { id: 's4', label: 'Superior gluteal palsy → Trendelenburg / waddle', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Pelvis drops on the opposite side when standing on the affected leg', mechanism: 'Superior gluteal nerve (abductor) palsy — Trendelenburg', significance: 'key' },
    { sign: 'Waddling gait', mechanism: 'Bilateral hip-abductor weakness', significance: 'key' },
    { sign: 'Sciatic-nerve injury after a badly placed buttock injection', mechanism: 'Injection outside the superolateral quadrant', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Trendelenburg test', meaning: 'Hip abductor / superior gluteal nerve' },
    { clue: 'Assess sciatic function after gluteal trauma/injection', meaning: 'Infrapiriform contents' },
  ],

  treatment: [
    { logic: 'Inject only in the superolateral quadrant', detail: 'Keeps clear of the sciatic nerve.' },
    { logic: 'Rehab hip abductors', detail: 'Correct Trendelenburg gait.' },
  ],

  mnemonics: [
    { hook: 'Superior gluteal nerve = abductors (medius/minimus/TFL); its loss = Trendelenburg', expansion: ['Pelvis drops CONTRAlaterally'] },
    { hook: 'Infrapiriform foramen: Sciatic, Inferior gluteal, Pudendal, Post. femoral cutaneous…', expansion: ['Suprapiriform = superior gluteal only'] },
  ],

  traps: [
    {
      questionCategory: 'Side the pelvis drops in Trendelenburg',
      wrongInstinct: 'In a positive Trendelenburg the pelvis drops on the same (affected) side',
      rightAnswer: 'The pelvis drops on the OPPOSITE (unsupported) side — the weak abductors on the stance (affected) leg cannot hold the pelvis level',
      why: 'Hip abductors act on the stance side to keep the contralateral pelvis up; their weakness lets the swing-side pelvis sag.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with a superior gluteal nerve injury stands on the affected leg. What is observed?',
      options: [
        { id: 'a', text: 'The pelvis drops on the same side as the injury' },
        { id: 'b', text: 'The pelvis drops on the opposite (unsupported) side (positive Trendelenburg)' },
        { id: 'c', text: 'Loss of knee extension' },
        { id: 'd', text: 'Foot drop' },
      ],
      answerId: 'b',
      explanation: 'The superior gluteal nerve supplies the hip abductors (gluteus medius/minimus, TFL); their weakness means the pelvis is not held level and drops on the opposite, unsupported side — a positive Trendelenburg sign.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Sciatic foramina & piriformis', svg: GLUTEAL_FORAMINA, caption: 'Suprapiriform = superior gluteal nerve; infrapiriform = sciatic, inferior gluteal, pudendal, and more.' },
  ],
};

export default glutealRegionNerves;
