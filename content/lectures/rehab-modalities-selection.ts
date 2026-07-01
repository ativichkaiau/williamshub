import type { Lecture } from '../../lib/types';

export const rehabModalitiesSelection: Lecture = {
  id: 'rehab-modalities-selection',
  title: 'Traction, Shockwave & Modality Selection',
  system: 'msk',
  source: 'L6 — MSK Rehabilitation & Modalities',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'MSK' },
    { kind: 'lecture', label: 'L6 MSK Rehabilitation' },
    { kind: 'disease', label: 'Modality selection' },
    { kind: 'mechanism', label: 'Traction/PEMF/ESWT' },
    { kind: 'exam', label: 'PEMF / ESWT indications' },
  ],

  highYield: [
    '**Traction** (cervical/lumbar) applies vertebral distraction → **↓ disc/nerve-root compression, muscle spasm, pain**. **Contraindicated** in fracture, cord compression, **osteoporosis, malignancy/infection of the spine, and inflammatory arthritis (RA, ankylosing spondylitis)**.',
    '**Therapeutic massage** aids venous/lymphatic return, softens scar, and relieves pain (endorphins) — but has **no effect on muscle strength/atrophy**; avoid over **DVT, acute gout/RA flare, cellulitis, malignancy**.',
    '**PEMF (pulsed electromagnetic field)** ↑ osteoblast activity/angiogenesis and is **FDA-approved for non-union/delayed fractures**; contraindicated with pacemakers/pregnancy/metal implants.',
    '**ESWT (extracorporeal shockwave)** → neovascularization; **best evidence for calcific tendinitis and plantar fasciitis** (also lateral epicondylitis); avoid over growth plates/malignancy/coagulopathy. **LLLT (photobiomodulation)** is an adjunct for tendinopathy/RA.',
    '**Modality-to-condition**: **acute sprain / gout / RA flare → cold (+ TENS), avoid heat/massage/traction**; **chronic OA → heat/ultrasound/TENS**; **non-union fracture → PEMF**; **calcific tendinitis → ESWT**; **ankylosing spondylitis → heat/TENS, avoid traction**; **pacemaker → avoid all electrotherapy/EMFT**.',
  ],

  mechanism: {
    title: 'Pick the modality by diagnosis, phase, and contraindications',
    steps: [
      { id: 's1', label: 'Traction distracts vertebrae → decompress nerve root' },
      { id: 's2', label: 'PEMF stimulates osteoblasts → non-union fracture', emphasis: 'key' },
      { id: 's3', label: 'ESWT → calcific tendinitis / plantar fasciitis' },
      { id: 's4', label: 'Contraindications first (pacemaker, osteoporosis, malignancy)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Established non-union fracture', mechanism: 'PEMF (FDA-approved) stimulates osteogenesis', significance: 'key' },
    { sign: 'Recalcitrant calcific supraspinatus tendinitis', mechanism: 'ESWT (best evidence)', significance: 'key' },
    { sign: 'Ankylosing spondylitis', mechanism: 'Avoid traction (inflamed, ossified spine)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Diagnosis + phase of healing', meaning: 'Selects the modality' },
    { clue: 'Screen contraindications (pacemaker, osteoporosis, pregnancy, malignancy)', meaning: 'Rules modalities out' },
    { clue: 'Evidence base (PEMF fracture, ESWT tendinitis)', meaning: 'Best-supported indications' },
  ],

  treatment: [
    { logic: 'PEMF for non-union fractures', detail: 'Osteogenesis induction.' },
    { logic: 'ESWT for calcific tendinitis / plantar fasciitis', detail: 'Neovascularization.' },
    { logic: 'Avoid traction in osteoporosis / ankylosing spondylitis', detail: 'Structural/inflammatory contraindication.' },
  ],

  mnemonics: [
    { hook: 'PEMF = fractures (non-union); ESWT = calcific tendinitis / plantar fasciitis', expansion: ['Match modality to condition'] },
    { hook: 'Contraindications first: Pacemaker, Osteoporosis, Malignancy, Pregnancy, sensory loss', expansion: ['Rule out before choosing'] },
  ],

  traps: [
    {
      questionCategory: 'Traction in inflammatory spondyloarthropathy',
      wrongInstinct: 'Spinal traction is helpful for back stiffness in ankylosing spondylitis',
      rightAnswer: 'Traction is CONTRAINDICATED in ankylosing spondylitis (and osteoporosis) — the inflamed, ossified, fragile spine can be injured',
      why: 'The rigid, brittle, fused spine of AS (and low-density bone in osteoporosis) is at risk of fracture with distraction forces, so traction is avoided.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A tibial shaft fracture shows no callus and a persistent gap 7 months after casting (established non-union), with no infection or nearby metal implant. Which physical modality has the strongest evidence base?',
      options: [
        { id: 'a', text: 'Spinal traction' },
        { id: 'b', text: 'Pulsed electromagnetic field (PEMF) therapy' },
        { id: 'c', text: 'Deep massage' },
        { id: 'd', text: 'Cryotherapy' },
      ],
      answerId: 'b',
      explanation: 'PEMF is FDA-approved for non-union and delayed-union fractures; it induces osteoblast activity and angiogenesis to promote bone healing.',
      tests: 'treatment',
    },
  ],
};

export default rehabModalitiesSelection;
