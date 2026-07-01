import type { Lecture } from '../../lib/types';

export const inflammatoryMyopathies: Lecture = {
  id: 'inflammatory-myopathies',
  title: 'Inflammatory Myopathies',
  system: 'msk',
  source: 'L2 — Diseases of Skeletal Muscle',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'MSK' },
    { kind: 'lecture', label: 'L2 Diseases of Skeletal Muscle' },
    { kind: 'disease', label: 'Myositis' },
    { kind: 'mechanism', label: 'Immune-mediated' },
    { kind: 'exam', label: 'DM vs PM vs IBM' },
  ],

  highYield: [
    '**Dermatomyositis (DM)**: skin + muscle. Skin = **Gottron papules, heliotrope rash, V/shawl sign, mechanic’s hands**; muscle = **perifascicular atrophy** (a **complement-mediated microvasculopathy**). Common inflammatory myopathy of **children**; in **adults often paraneoplastic** (screen for cancer). Antibodies: anti-Mi-2, anti-TIF1-γ, anti-MDA5.',
    '**Polymyositis (PM)**: **CD8⁺ cytotoxic T cells invade non-necrotic fibers** (endomysial); no skin rash; proximal weakness, high CK.',
    '**Immune-mediated necrotizing myopathy (IMNM)**: scattered necrosis/regeneration with few lymphocytes, **complement (MAC) on the sarcolemma**; antibodies **anti-SRP** and **anti-HMGCR (statin-associated)**.',
    '**Antisynthetase syndrome**: **anti-Jo-1**; myositis + **interstitial lung disease + mechanic’s hands + Raynaud + arthritis**; perifascicular necrosis.',
    '**Inclusion body myositis (IBM)**: **>50 years**, slowly progressive, **asymmetric (finger flexors, knee extensors)**, **rimmed vacuoles** (tau/amyloid/TDP-43), CK only mildly raised, **poorly responsive to immunosuppression**.',
  ],

  mechanism: {
    title: 'Different immune targets → different biopsy patterns',
    steps: [
      { id: 's1', label: 'DM: complement attacks capillaries → perifascicular atrophy', emphasis: 'key' },
      { id: 's2', label: 'PM: CD8 T cells invade non-necrotic fibers' },
      { id: 's3', label: 'IMNM: MAC on sarcolemma (anti-SRP/HMGCR)' },
      { id: 's4', label: 'IBM: rimmed vacuoles (degenerative + inflammatory)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Heliotrope rash + Gottron papules + proximal weakness', mechanism: 'Dermatomyositis', significance: 'key' },
    { sign: 'Statin-associated myopathy that persists after stopping the statin', mechanism: 'Anti-HMGCR necrotizing myopathy', significance: 'key' },
    { sign: 'Asymmetric finger-flexor/knee-extensor weakness in an older adult', mechanism: 'Inclusion body myositis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'CK + myositis-specific antibodies', meaning: 'Subtype (Jo-1, Mi-2, SRP, HMGCR)' },
    { clue: 'Muscle biopsy pattern', meaning: 'Perifascicular (DM) vs endomysial (PM) vs rimmed vacuoles (IBM)' },
    { clue: 'Cancer screen in adult DM', meaning: 'Paraneoplastic association' },
  ],

  treatment: [
    { logic: 'DM/PM/IMNM: corticosteroids + steroid-sparing immunosuppression', detail: 'IVIG for refractory cases.' },
    { logic: 'IBM: largely immunosuppression-resistant', detail: 'Supportive/rehabilitation.' },
  ],

  mnemonics: [
    { hook: 'DM = skin (Gottron/heliotrope) + Perifascicular; PM = endomysial CD8', expansion: ['Adult DM → hunt for cancer'] },
    { hook: 'IBM = Inclusion (rimmed vacuoles), Isolated finger flexors, Immunotherapy-resistant, >50 y', expansion: ['Degenerative + inflammatory'] },
  ],

  traps: [
    {
      questionCategory: 'Adult-onset dermatomyositis',
      wrongInstinct: 'Adult dermatomyositis just needs immunosuppression like the childhood form',
      rightAnswer: 'In adults, dermatomyositis is frequently paraneoplastic — an age-appropriate malignancy screen is essential',
      why: 'DM in adults is strongly associated with occult cancer, so missing the malignancy work-up can delay a critical diagnosis.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient on a statin develops progressive proximal weakness and a very high CK that does NOT improve after stopping the statin; biopsy shows necrotic fibers with membrane-attack complex on the sarcolemma. The diagnosis is:',
      options: [
        { id: 'a', text: 'Simple statin myalgia' },
        { id: 'b', text: 'Anti-HMGCR immune-mediated necrotizing myopathy' },
        { id: 'c', text: 'Inclusion body myositis' },
        { id: 'd', text: 'Polymyositis' },
      ],
      answerId: 'b',
      explanation: 'Persistent necrotizing myopathy after statin withdrawal, with MAC on the sarcolemma and anti-HMGCR antibodies, is immune-mediated necrotizing myopathy — it requires immunosuppression, unlike self-limited statin myalgia.',
      tests: 'exam',
    },
  ],
};

export default inflammatoryMyopathies;
