import type { Lecture } from '../../lib/types';

export const retinalVascularOcclusions: Lecture = {
  id: 'retinal-vascular-occlusions',
  title: 'Retinal Vascular Occlusions',
  system: 'neuro',
  source: 'L4 — Common Eye Disorders',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L4 Common Eye Disorders' },
    { kind: 'disease', label: 'CRAO / CRVO' },
    { kind: 'mechanism', label: 'Arterial vs venous' },
    { kind: 'exam', label: 'Painless visual loss' },
  ],

  highYield: [
    '**CRAO (central retinal artery occlusion)** = sudden, **painless, profound monocular visual loss**; fundus shows a **pale retina with a cherry-red spot** (intact choroidal macula). It is a **retinal stroke**.',
    'CRAO causes: **emboli (carotid/cardiac), atherosclerosis**; risk = DM, HTN, hyperlipidemia, age, smoking, and (arteritic) **giant cell arteritis**.',
    'CRAO management (limited benefit if late): **ocular massage, lower IOP, vasodilation** to dislodge/perfuse — and treat as a **stroke** (urgent workup, secondary prevention).',
    '**CRVO (central retinal vein occlusion)** = **venous thrombosis** → sudden painless loss; fundus = **“blood-and-thunder”** (diffuse hemorrhages, dilated tortuous veins, cotton-wool spots).',
    'CRVO risks (HTN, DM, hyperlipidemia, hypercoagulable states, **open-angle glaucoma**); complications = **macular edema & neovascularization** → treat with **anti-VEGF / laser photocoagulation**.',
  ],

  mechanism: {
    title: 'Occlude the artery or the vein → the retina fails',
    steps: [
      { id: 's1', label: 'Artery: embolus/atherosclerosis → ischemia' },
      { id: 's2', label: 'Cherry-red spot, retinal pallor (CRAO)', emphasis: 'key' },
      { id: 's3', label: 'Vein: thrombosis → congestion & hemorrhage (CRVO)' },
      { id: 's4', label: 'Ischemia → VEGF → neovascularization', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Pale retina with a cherry-red spot + RAPD', mechanism: 'CRAO (inner-retinal infarction)', significance: 'key' },
    { sign: 'Diffuse retinal hemorrhages + dilated tortuous veins', mechanism: 'CRVO (“blood-and-thunder” fundus)', significance: 'key' },
    { sign: 'Sudden painless monocular loss', mechanism: 'Either occlusion (vascular, not inflammatory)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Dilated fundus exam', meaning: 'CRAO vs CRVO pattern' },
    { clue: 'Carotid/cardiac + vascular risk workup (CRAO)', meaning: 'Embolic source; stroke prevention' },
    { clue: 'ESR/CRP if arteritic features', meaning: 'Giant cell arteritis' },
  ],

  treatment: [
    { logic: 'CRAO: immediate ocular massage/lower IOP + stroke workup', detail: 'Reperfusion benefit is limited but it is a stroke equivalent.' },
    { logic: 'CRVO: anti-VEGF/laser for edema & neovascularization', detail: 'Observe if uncomplicated.' },
  ],

  mnemonics: [
    { hook: 'CRAO = cherry-red spot, Pale retina (Artery); CRVO = Blood-and-thunder (Vein)', expansion: ['Both = sudden painless loss'] },
    { hook: 'CRAO is a retinal stroke — work it up like one', expansion: ['Carotid/cardiac source; secondary prevention'] },
  ],

  traps: [
    {
      questionCategory: 'Painless vs painful acute visual loss',
      wrongInstinct: 'Sudden monocular visual loss needs urgent steroids for optic neuritis',
      rightAnswer: 'Painless sudden loss with a cherry-red spot is CRAO (a retinal stroke); optic neuritis is painful and occurs in young women',
      why: 'CRAO/CRVO are painless vascular events; optic neuritis and acute angle-closure glaucoma are painful — the pain history and fundus findings separate vascular from inflammatory causes.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 68-year-old with hypertension has sudden, painless, complete loss of vision in one eye. Fundus shows a pale retina with a cherry-red spot. The diagnosis is:',
      options: [
        { id: 'a', text: 'Central retinal vein occlusion' },
        { id: 'b', text: 'Central retinal artery occlusion' },
        { id: 'c', text: 'Optic neuritis' },
        { id: 'd', text: 'Acute angle-closure glaucoma' },
      ],
      answerId: 'b',
      explanation: 'Sudden painless monocular loss with a pale retina and cherry-red spot is central retinal artery occlusion — a retinal stroke requiring urgent management and vascular workup.',
      tests: 'exam',
    },
  ],
};

export default retinalVascularOcclusions;
