import type { Lecture } from '../../lib/types';

export const fcp1MonoarthritisVsPolyarthritis: Lecture = {
  id: 'fcp1-monoarthritis-vs-polyarthritis',
  title: 'Monoarthritis vs Polyarthritis',
  system: 'clinical',
  source: 'L30 — Approach to Arthritis',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L30 Arthritis' },
    { kind: 'disease', label: 'Septic · gout · RA' },
    { kind: 'mechanism', label: 'Joint-count patterns' },
    { kind: 'investigation', label: 'Arthrocentesis' },
  ],

  highYield: [
    '**Monoarthritis (1 joint)** — think **septic arthritis** (emergency), **crystal** disease (gout, pseudogout), trauma/haemarthrosis, or early oligoarticular disease. The acute hot single joint is septic until aspirated [[fcp1-arthritis-approach]].',
    '**Oligoarthritis (2–4 joints, often asymmetric, large/lower-limb)** — think spondyloarthropathies (reactive, psoriatic, IBD-related, ankylosing spondylitis) and some crystal or gonococcal disease.',
    '**Polyarthritis (5 or more joints, often symmetric small joints)** — think rheumatoid arthritis, connective-tissue disease (SLE), viral and psoriatic arthritis. **Symmetric small-joint (MCP/PIP/wrist) involvement suggests rheumatoid arthritis.**',
    '**Tempo helps:** migratory (rheumatic fever, gonococcal, viral) vs additive (rheumatoid) vs intermittent (crystal). **Acute + hot + single = tap it**; fever [[fcp1-fever-approach-differential]] with one hot joint is septic until excluded.',
    '**Extra-articular clues sharpen it:** psoriasis or nail pits [[fcp1-skin-signs-systemic-disease]], urethritis/conjunctivitis (reactive), rash/serositis (SLE), tophi (gout) — combine with inflammatory-vs-mechanical [[fcp1-inflammatory-vs-mechanical]].',
  ],

  mechanism: {
    title: 'Counting joints to a differential',
    steps: [
      { id: 's1', label: 'Count involved joints: mono / oligo / poly', emphasis: 'key' },
      { id: 's2', label: 'Mono + acute + hot → septic or crystal → aspirate', emphasis: 'danger' },
      { id: 's3', label: 'Oligo, asymmetric, lower-limb → spondyloarthropathy', emphasis: 'key' },
      { id: 's4', label: 'Poly, symmetric, small joints → RA / connective-tissue', emphasis: 'key' },
      { id: 's5', label: 'Add tempo (migratory/additive) + extra-articular signs', emphasis: 'normal' },
    ],
  },

  examFindings: [
    { sign: 'Single hot, exquisitely tender joint, unable to bear weight', mechanism: 'Septic or crystal monoarthritis', significance: 'key' },
    { sign: 'Symmetric swelling of MCP, PIP and wrist joints', mechanism: 'Rheumatoid pattern', significance: 'key' },
    { sign: 'Asymmetric large-joint oligoarthritis with enthesitis/dactylitis', mechanism: 'Spondyloarthropathy', significance: 'supportive' },
    { sign: 'Tophi over ears/joints or podagra (1st MTP joint)', mechanism: 'Gout (urate deposition)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Arthrocentesis of an acute mono joint (cell count, Gram stain/culture, crystals)', meaning: 'Separates septic from crystal arthritis' },
    { clue: 'RF and anti-CCP positive with a symmetric polyarthritis', meaning: 'Rheumatoid arthritis' },
    { clue: 'Symmetric small-joint polyarthritis with ANA, rash or cytopenias', meaning: 'SLE / connective-tissue disease' },
    { clue: 'Migratory polyarthritis after a sore throat or STI exposure', meaning: 'Rheumatic fever or gonococcal arthritis' },
  ],

  treatment: [
    { logic: 'Aspirate first and treat septic monoarthritis as an emergency', detail: 'Joint drainage plus IV antibiotics; never assume a lone hot joint is only gout.' },
    { logic: 'Otherwise treat by pattern and cause', detail: 'Crystal flare (NSAID, colchicine or steroid); rheumatoid or spondyloarthropathy → DMARDs with rheumatology referral.' },
  ],

  mnemonics: [
    { hook: 'One hot joint = infection first; many symmetric small joints = RA', expansion: ['Mono acute hot → aspirate', 'Poly symmetric small → rheumatoid'] },
  ],

  traps: [
    {
      questionCategory: 'Gonococcal arthritis',
      wrongInstinct: 'A migratory arthritis with tenosynovitis and pustular skin lesions in a young adult is reactive or viral',
      rightAnswer: 'Think disseminated gonococcal infection — culture blood, joint and mucosal sites and treat',
      why: 'Gonococcal arthritis is a treatable septic cause that presents as a migratory oligoarthritis with tenosynovitis and skin pustules.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 28-year-old woman has 8 weeks of symmetric painful swelling of both wrists and the MCP joints with an hour of morning stiffness. The most likely diagnosis is:',
      options: [
        { id: 'a', text: 'Osteoarthritis' },
        { id: 'b', text: 'Gout' },
        { id: 'c', text: 'Rheumatoid arthritis' },
        { id: 'd', text: 'Septic arthritis' },
      ],
      answerId: 'c',
      explanation: 'A symmetric small-joint polyarthritis with prolonged morning stiffness is the classic pattern of rheumatoid arthritis.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'A 55-year-old man has a single acutely hot, swollen first MTP joint and a low-grade fever. Which test best distinguishes gout from septic arthritis?',
      options: [
        { id: 'a', text: 'Serum urate level' },
        { id: 'b', text: 'Response to a trial of NSAIDs' },
        { id: 'c', text: 'Synovial fluid microscopy and culture' },
        { id: 'd', text: 'Plain X-ray of the foot' },
      ],
      answerId: 'c',
      explanation: 'Synovial fluid analysis (crystals plus Gram stain and culture) distinguishes the two; serum urate is often normal in acute gout and can be raised without gout.',
      tests: 'investigation',
    },
  ],
};

export default fcp1MonoarthritisVsPolyarthritis;
