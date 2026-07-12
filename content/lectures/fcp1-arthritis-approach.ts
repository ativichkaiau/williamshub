import type { Lecture } from '../../lib/types';

export const fcp1ArthritisApproach: Lecture = {
  id: 'fcp1-arthritis-approach',
  title: 'Approach to Arthritis',
  system: 'clinical',
  source: 'L30 — Approach to Arthritis',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L30 Arthritis' },
    { kind: 'disease', label: 'Septic · crystal · RA · OA' },
    { kind: 'exam', label: 'Effusion · warmth · stiffness' },
    { kind: 'investigation', label: 'Joint aspiration · CRP/ESR' },
  ],

  highYield: [
    '**First ask — is it truly articular?** Articular pain involves the whole joint with swelling/effusion and restricts **both active and passive** movement; **periarticular** problems (bursitis, tendinitis) are point-tender with a preserved passive range — do not call those arthritis.',
    '**Then inflammatory or mechanical?** [[fcp1-inflammatory-vs-mechanical]] — inflammatory disease has prolonged morning stiffness, eases with use, and shows warmth/swelling with raised **CRP/ESR**; mechanical/degenerative pain has brief stiffness, worsens with use and shows minimal signs.',
    '**Then count and pattern** — mono vs oligo vs poly [[fcp1-monoarthritis-vs-polyarthritis]], symmetry and which joints, plus extra-articular clues (rash [[fcp1-skin-signs-systemic-disease]], eyes, mucosa, nails).',
    '**Red flag — the acute hot single joint is septic arthritis until proven otherwise** → urgent aspiration; also consider crystal disease. Fever [[fcp1-fever-approach-differential]] with a hot swollen joint means aspirate now, do not delay.',
    '**Time course** narrows it: acute (under 6 weeks — infection, crystal, reactive) vs chronic (over 6 weeks — rheumatoid, osteoarthritis, spondyloarthritis, connective-tissue disease).',
  ],

  mechanism: {
    title: 'The stepwise arthritis filter',
    steps: [
      { id: 's1', label: 'Articular or periarticular? (whole joint + passive limitation)', emphasis: 'key' },
      { id: 's2', label: 'Inflammatory or mechanical? (stiffness, signs, markers)', emphasis: 'key' },
      { id: 's3', label: 'Count joints + pattern + extra-articular clues', emphasis: 'key' },
      { id: 's4', label: 'Acute (<6 wk) vs chronic (>6 wk)', emphasis: 'normal' },
      { id: 's5', label: 'Hot single joint + fever → aspirate for sepsis now', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Warm, red, swollen joint with effusion and painful passive movement', mechanism: 'True inflammatory arthritis (synovitis)', significance: 'key' },
    { sign: 'Point tenderness with a full, painless passive range', mechanism: 'Periarticular (bursitis/tendinitis), not arthritis', significance: 'key' },
    { sign: 'Prolonged early-morning stiffness that improves with use', mechanism: 'Inflammatory pattern', significance: 'supportive' },
    { sign: 'Bony enlargement (Heberden/Bouchard nodes), crepitus, no warmth', mechanism: 'Osteoarthritis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Synovial fluid with high WBC and organisms on Gram stain/culture', meaning: 'Septic arthritis — aspirate any acutely hot joint' },
    { clue: 'Synovial fluid crystals under polarised light', meaning: 'Negatively birefringent = gout (urate); positively = pseudogout (CPPD)' },
    { clue: 'Raised CRP/ESR', meaning: 'Supports an inflammatory rather than mechanical process' },
    { clue: 'Autoantibodies (RF, anti-CCP, ANA) and plain X-rays', meaning: 'Pattern-based tests for chronic/polyarticular disease' },
  ],

  treatment: [
    { logic: 'Aspirate and treat a hot joint as septic until fluid excludes it', detail: 'Empirical IV antibiotics after aspiration plus joint drainage/washout; a missed septic joint destroys cartilage within days.' },
    { logic: 'Match therapy to the category', detail: 'NSAIDs/colchicine for a crystal flare, DMARDs for rheumatoid disease, analgesia and physiotherapy for osteoarthritis; refer inflammatory/systemic disease to rheumatology.' },
  ],

  mnemonics: [
    { hook: 'Hot joint = tap it', expansion: ['Any acutely hot swollen joint', 'Aspirate before anything else', 'Exclude infection first'] },
  ],

  traps: [
    {
      questionCategory: 'Missed septic arthritis',
      wrongInstinct: 'A known gout patient with a hot toe is just having another gout flare',
      rightAnswer: 'Septic and crystal arthritis can coexist and look identical — aspirate to confirm',
      why: 'Only synovial fluid analysis separates them, and a missed joint infection is limb-threatening.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient has pain localised over the lateral elbow, tender only over the epicondyle, with full and painless passive elbow flexion and extension. This is most consistent with:',
      options: [
        { id: 'a', text: 'Septic arthritis of the elbow' },
        { id: 'b', text: 'Periarticular soft-tissue disorder (lateral epicondylitis)' },
        { id: 'c', text: 'Rheumatoid arthritis' },
        { id: 'd', text: 'Gout' },
      ],
      answerId: 'b',
      explanation: 'A full painless passive range with focal tenderness points to a periarticular (tendon) problem, not a true articular arthritis.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A 65-year-old presents with a single hot, swollen knee, fever and an inability to bear weight. The best next step is:',
      options: [
        { id: 'a', text: 'Start allopurinol' },
        { id: 'b', text: 'Oral NSAIDs and review in 1 week' },
        { id: 'c', text: 'Urgent joint aspiration for cell count, Gram stain and crystals' },
        { id: 'd', text: 'MRI of the knee first' },
      ],
      answerId: 'c',
      explanation: 'An acute hot single joint must be aspirated urgently to exclude septic arthritis before any other management.',
      tests: 'investigation',
    },
  ],
};

export default fcp1ArthritisApproach;
