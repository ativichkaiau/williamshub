import type { Lecture } from '../../lib/types';
import { CRYSTAL_ARTHRITIS } from '../../lib/figures';

export const spondyloarthropathiesCrystalArthritis: Lecture = {
  id: 'spondyloarthropathies-crystal-arthritis',
  title: 'Spondyloarthropathies & Crystal Arthritis',
  system: 'msk',
  source: 'L3 — Diseases of Joint',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'MSK' },
    { kind: 'lecture', label: 'L3 Diseases of Joint' },
    { kind: 'disease', label: 'SpA / gout' },
    { kind: 'mechanism', label: 'HLA-B27 / crystals' },
    { kind: 'exam', label: 'Gout vs pseudogout' },
  ],

  highYield: [
    '**Seronegative spondyloarthropathies (SpA)**: **RF-negative, HLA-B27-associated, enthesitis, sacroiliitis, axial**. **Ankylosing spondylitis** (HLA-B27 ~90%, bilateral sacroiliitis → **bamboo spine**; IL-23/IL-17/TNF; anti-IL-17/anti-TNF).',
    '**Reactive arthritis (Reiter)**: asymmetric arthritis 1–4 weeks **after GU (Chlamydia) or GI (Shigella/Salmonella/Yersinia/Campylobacter) infection** → arthritis + urethritis + conjunctivitis. **Psoriatic arthritis**: DIP, **sausage digits (dactylitis)**, **“pencil-in-cup”** X-ray.',
    '**Gout**: **hyperuricemia** → **monosodium urate crystals** = **needle-shaped, NEGATIVELY birefringent**. Classic **first MTP (podagra)**; stages asymptomatic → acute → intercritical → **chronic tophaceous (tophi)**; **“punched-out” erosions with overhanging edges**. Risk: alcohol, obesity, thiazides, HGPRT deficiency.',
    '**Pseudogout (CPPD)**: **calcium pyrophosphate crystals = rhomboid, POSITIVELY birefringent**; **>50 years, knee, chondrocalcinosis**; associated with hyperparathyroidism, hypothyroidism, hemochromatosis (ANKH mutation in hereditary form).',
    '**Infectious arthritis**: acute suppurative (S. aureus, gonococcus) vs chronic granulomatous (TB) — always aspirate a hot joint.',
  ],

  mechanism: {
    title: 'Enthesitis (SpA) vs crystal-triggered inflammation',
    steps: [
      { id: 's1', label: 'HLA-B27 SpA: enthesitis/sacroiliitis → new bone (ankylosis)', emphasis: 'key' },
      { id: 's2', label: 'Gout: urate crystals → NLRP3 inflammasome → IL-1β' },
      { id: 's3', label: 'Needle/negative (gout) vs rhomboid/positive (pseudogout)' },
      { id: 's4', label: 'Chronic gout → tophi + punched-out erosions', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Young man, inflammatory back pain, bamboo spine, HLA-B27', mechanism: 'Ankylosing spondylitis', significance: 'key' },
    { sign: 'Acute painful first MTP + needle-shaped negatively birefringent crystals', mechanism: 'Gout', significance: 'key' },
    { sign: 'Knee arthritis + chondrocalcinosis + rhomboid positively birefringent crystals', mechanism: 'Pseudogout (CPPD)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Polarized-light synovial-fluid crystal analysis', meaning: 'Gout (needle/neg) vs pseudogout (rhomboid/pos)' },
    { clue: 'HLA-B27 + sacroiliac imaging', meaning: 'Spondyloarthropathy' },
    { clue: 'Serum urate + joint X-ray', meaning: 'Gout severity/erosions' },
  ],

  treatment: [
    { logic: 'AS: exercise + NSAIDs; anti-TNF / anti-IL-17 for refractory', detail: 'Axial inflammation.' },
    { logic: 'Acute gout: NSAIDs/colchicine/steroids; chronic: urate-lowering', detail: 'See gout-drug module.' },
  ],

  mnemonics: [
    { hook: 'SpA = seronegative, Sacroiliitis, HLA-B27 (PAIR: Psoriatic, AS, IBD, Reactive)', expansion: ['Enthesitis, axial'] },
    { hook: 'Gout = Needle, Negative; pseudogout = Rhomboid, Positive', expansion: ['Under polarized light'] },
  ],

  traps: [
    {
      questionCategory: 'Crystal birefringence',
      wrongInstinct: 'Positively birefringent needle-shaped crystals indicate gout',
      rightAnswer: 'Gout = NEEDLE-shaped, NEGATIVELY birefringent (MSU); pseudogout = RHOMBOID, POSITIVELY birefringent (CPPD)',
      why: 'Swapping the shape/birefringence is a classic exam trap — needle + negative = gout, rhomboid + positive = pseudogout.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Aspiration of an acutely inflamed first metatarsophalangeal joint shows needle-shaped crystals that are negatively birefringent under polarized light. The diagnosis is:',
      options: [
        { id: 'a', text: 'Pseudogout (CPPD)' },
        { id: 'b', text: 'Gout (monosodium urate)' },
        { id: 'c', text: 'Septic arthritis' },
        { id: 'd', text: 'Rheumatoid arthritis' },
      ],
      answerId: 'b',
      explanation: 'Needle-shaped, negatively birefringent monosodium urate crystals in a painful first MTP joint (podagra) are diagnostic of gout; pseudogout shows rhomboid, positively birefringent CPPD crystals.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Gout vs pseudogout crystals', svg: CRYSTAL_ARTHRITIS, caption: 'Gout = needle-shaped, negatively birefringent (MSU, first MTP). Pseudogout = rhomboid, positively birefringent (CPPD, knee).' },
  ],
};

export default spondyloarthropathiesCrystalArthritis;
