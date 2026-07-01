import type { Lecture } from '../../lib/types';

export const intrinsicBackMusclesSuboccipital: Lecture = {
  id: 'intrinsic-back-muscles-suboccipital',
  title: 'Intrinsic Back Muscles & Suboccipital Triangle',
  system: 'msk',
  source: 'L5 — Deep Back & Joints of Vertebral Column',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L5 Deep Back & Spine' },
    { kind: 'disease', label: 'Deep back muscles' },
    { kind: 'mechanism', label: 'Dorsal rami supply' },
    { kind: 'exam', label: 'Suboccipital triangle' },
  ],

  highYield: [
    '**The intrinsic (deep/true) back muscles move the vertebral column and maintain posture, and are ALL supplied by the posterior (dorsal) rami** of spinal nerves — in contrast to the superficial (extrinsic) back muscles, which move the limb and are supplied by anterior rami (except trapezius/CN XI).',
    '**Superficial intrinsic layer = splenius** (capitis/cervicis) — extends/rotates the head and neck. **Intermediate layer = erector spinae**, three columns lateral→medial: **Iliocostalis, Longissimus, Spinalis ("I Love Spine")** — the chief extensors of the spine.',
    '**Deep layer = transversospinalis** (run from transverse → spinous processes): **semispinalis, multifidus, rotatores** — stabilize and rotate the column across a few segments.',
    'The **suboccipital triangle** (deep to the occiput) is bounded by **rectus capitis posterior major (medial), obliquus capitis superior (lateral), obliquus capitis inferior (inferior)**; its **floor** = posterior atlanto-occipital membrane + posterior arch of atlas.',
    'The suboccipital triangle **contains the vertebral artery (in the groove on the atlas) and the suboccipital nerve (dorsal ramus of C1)**; the **greater occipital nerve (dorsal ramus of C2)** emerges below it. These muscles fine-tune head posture.',
  ],

  mechanism: {
    title: 'Deep back muscles (dorsal rami) extend/rotate the spine and head',
    steps: [
      { id: 's1', label: 'All intrinsic back muscles → dorsal (posterior) rami', emphasis: 'key' },
      { id: 's2', label: 'Erector spinae (I Love Spine) = main extensors' },
      { id: 's3', label: 'Transversospinalis (multifidus etc.) rotate/stabilize' },
      { id: 's4', label: 'Suboccipital triangle: vertebral artery + suboccipital n. (C1)' },
    ],
  },

  examFindings: [
    { sign: 'Deep back muscle innervation traced to posterior rami', mechanism: 'Defines the intrinsic back muscles', significance: 'key' },
    { sign: 'Vertebral artery lying in the suboccipital triangle', mechanism: 'Key content (with suboccipital nerve C1)', significance: 'key' },
    { sign: 'Occipital headache referred along the greater occipital nerve', mechanism: 'C2 dorsal ramus', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Distinguish extrinsic (anterior rami) vs intrinsic (posterior rami)', meaning: 'Classifies back muscles' },
    { clue: 'Identify erector spinae columns (I-L-S)', meaning: 'Iliocostalis/Longissimus/Spinalis' },
  ],

  treatment: [
    { logic: 'Anatomy foundation for back pain / posture', detail: 'Erector spinae strains are a common back-pain source.' },
  ],

  mnemonics: [
    { hook: 'Erector spinae lateral→medial = "I Love Spine" (Iliocostalis, Longissimus, Spinalis)', expansion: ['Main spinal extensors'] },
    { hook: 'All INTRINSIC back muscles = dorsal (posterior) rami', expansion: ['Extrinsic = anterior rami (± CN XI)'] },
  ],

  traps: [
    {
      questionCategory: 'Innervation of the deep back muscles',
      wrongInstinct: 'The deep (intrinsic) back muscles are supplied by anterior rami like most trunk muscles',
      rightAnswer: 'Every intrinsic back muscle is supplied by POSTERIOR (dorsal) rami — a defining feature that separates them from the superficial back muscles',
      why: 'Dorsal-ramus innervation is the hallmark used to classify a muscle as a true/deep back muscle.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which structures are found within the suboccipital triangle?',
      options: [
        { id: 'a', text: 'Internal carotid artery and vagus nerve' },
        { id: 'b', text: 'Vertebral artery and the suboccipital nerve (dorsal ramus of C1)' },
        { id: 'c', text: 'Spinal accessory nerve and external jugular vein' },
        { id: 'd', text: 'Greater occipital nerve and basilar artery' },
      ],
      answerId: 'b',
      explanation: 'The suboccipital triangle (rectus capitis posterior major, obliquus capitis superior and inferior) contains the vertebral artery and the suboccipital nerve (dorsal ramus of C1); the greater occipital nerve (C2) emerges below it.',
      tests: 'exam',
    },
  ],
};

export default intrinsicBackMusclesSuboccipital;
