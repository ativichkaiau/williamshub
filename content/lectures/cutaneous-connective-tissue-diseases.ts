import type { Lecture } from '../../lib/types';

export const cutaneousConnectiveTissueDiseases: Lecture = {
  id: 'cutaneous-connective-tissue-diseases',
  title: 'Cutaneous Connective Tissue Diseases',
  system: 'derm',
  source: 'L11 — Connective Tissue Diseases',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L11 Connective Tissue Diseases' },
    { kind: 'mechanism', label: 'Autoimmune skin + systemic' },
    { kind: 'exam', label: 'Lupus, dermatomyositis, scleroderma' },
  ],

  highYield: [
    'Connective-tissue (autoimmune) diseases have characteristic skin signs that often signal systemic disease. LUPUS ERYTHEMATOSUS spans a spectrum: ACUTE cutaneous LE = the photosensitive MALAR ("butterfly") rash sparing the nasolabial folds (systemic lupus, +ANA/anti-dsDNA); DISCOID LE = chronic scarring, scaly, atrophic disc plaques with follicular plugging that can cause scarring alopecia (often skin-limited); subacute cutaneous LE is photosensitive annular/psoriasiform (anti-Ro).',
    'DERMATOMYOSITIS: an inflammatory myopathy with pathognomonic skin signs — the HELIOTROPE rash (violaceous periorbital eyelid discolouration) and GOTTRON PAPULES (violaceous papules over the knuckles/MCPs), plus a photosensitive shawl/V-sign, proximal muscle weakness and ↑CK. Adult dermatomyositis carries an increased risk of underlying MALIGNANCY → age-appropriate cancer screening.',
    'SYSTEMIC SCLEROSIS (scleroderma): skin FIBROSIS/tightening. LIMITED cutaneous (CREST — Calcinosis, Raynaud, Esophageal dysmotility, Sclerodactyly, Telangiectasia; anti-centromere) vs DIFFUSE (widespread skin + early internal organ/renal/lung disease; anti-Scl-70/topoisomerase). RAYNAUD phenomenon (white→blue→red fingers) is often the first sign. MORPHEA = localised skin sclerosis WITHOUT systemic/Raynaud involvement.',
    'These are diagnosed clinically plus AUTOANTIBODIES (ANA, anti-dsDNA/Sm for SLE; anti-Ro for SCLE/neonatal lupus; anti-Jo-1/anti-Mi-2 in dermatomyositis; anti-centromere vs anti-Scl-70 in scleroderma) and, where relevant, biopsy/muscle enzymes. Management: PHOTOPROTECTION (photosensitive lupus/DM), topical/systemic immunosuppression, and treating systemic disease; dermatomyositis mandates malignancy screening.',
    '**The take-home: LUPUS (malar photosensitive rash = acute/SLE; discoid = scarring, skin-limited), DERMATOMYOSITIS (heliotrope + Gottron papules + proximal weakness → screen for cancer), SCLERODERMA (skin fibrosis; limited/CREST anti-centromere vs diffuse anti-Scl-70; Raynaud; morphea = localised). Skin signs flag systemic disease.** The underlying immunology is [[cutaneous-immunology-hypersensitivity]]; photoprotection ties to [[skin-aging]]; therapy in [[dermatologic-therapy]].',
  ],

  mechanism: {
    title: 'Lupus (malar/discoid, photosensitive) / dermatomyositis (heliotrope + Gottron, cancer risk) / scleroderma (fibrosis, CREST vs diffuse)',
    steps: [
      { id: 's1', label: 'Acute cutaneous LE = photosensitive malar rash (sparing nasolabial folds) → SLE (ANA/dsDNA)', emphasis: 'key' },
      { id: 's2', label: 'Discoid LE = chronic scarring disc plaques + follicular plugging (often skin-limited)', emphasis: 'key' },
      { id: 's3', label: 'Dermatomyositis: heliotrope + Gottron papules + proximal weakness/↑CK → screen malignancy', emphasis: 'danger' },
      { id: 's4', label: 'Scleroderma: skin fibrosis; limited/CREST (anti-centromere) vs diffuse (anti-Scl-70); Raynaud', emphasis: 'key' },
      { id: 's5', label: 'Morphea = localised skin sclerosis, no systemic/Raynaud; photoprotection + immunosuppression', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Photosensitive malar rash sparing the nasolabial folds', mechanism: 'Acute cutaneous lupus (systemic LE)', significance: 'key' },
    { sign: 'Scarring, atrophic disc plaques with follicular plugging', mechanism: 'Discoid lupus erythematosus', significance: 'key' },
    { sign: 'Violaceous eyelid rash + knuckle papules + proximal weakness', mechanism: 'Dermatomyositis (heliotrope + Gottron)', significance: 'key' },
    { sign: 'Tight, sclerotic skin with Raynaud and calcinosis', mechanism: 'Systemic sclerosis (CREST/limited)', significance: 'key' },
    { sign: 'Localised sclerotic skin plaque without Raynaud or systemic features', mechanism: 'Morphea', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The rash pattern of acute cutaneous lupus', meaning: 'Malar (butterfly) rash sparing the nasolabial folds' },
    { clue: 'The two pathognomonic skin signs of dermatomyositis', meaning: 'Heliotrope rash and Gottron papules' },
    { clue: 'The antibody of limited scleroderma (CREST)', meaning: 'Anti-centromere (vs anti-Scl-70 in diffuse)' },
    { clue: 'The important association to screen for in adult dermatomyositis', meaning: 'Underlying malignancy' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Cutaneous signs are often the presenting or defining clue to systemic autoimmune disease: the malar rash flags SLE (renal/haematologic work-up), dermatomyositis mandates malignancy screening, and scleroderma\'s subtype (limited/CREST vs diffuse) predicts internal-organ risk. Photoprotection is central to photosensitive lupus/dermatomyositis ([[skin-aging]]), and immunosuppression is guided by systemic involvement ([[dermatologic-therapy]]); the autoimmune mechanisms link to [[cutaneous-immunology-hypersensitivity]].' },
  ],

  mnemonics: [
    { hook: 'Dermatomyositis: "Heliotrope (eyelids) + Gottron (knuckles) + proximal weakness → hunt for cancer"', expansion: ['Photosensitive shawl/V-sign', '↑CK'] },
    { hook: 'Scleroderma: "CREST (limited, anti-centromere) vs diffuse (anti-Scl-70)"; morphea = localised only', expansion: ['Raynaud often first', 'Malar spares nasolabial folds'] },
  ],

  traps: [
    {
      questionCategory: 'Adult dermatomyositis and malignancy',
      wrongInstinct: 'Dermatomyositis is only a skin and muscle disease needing symptomatic treatment',
      rightAnswer: 'Adult-onset DERMATOMYOSITIS carries a significantly INCREASED risk of an underlying MALIGNANCY, so a new diagnosis mandates AGE-APPROPRIATE CANCER SCREENING (it can be a paraneoplastic marker) — treating only the skin/muscle without looking for cancer misses a potentially lethal association',
      why: 'Because dermatomyositis can be paraneoplastic, the skin signs (heliotrope, Gottron) are a prompt to search for occult malignancy — a high-yield association that changes work-up beyond the skin and muscle.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Violaceous discolouration of the eyelids (heliotrope) with violaceous papules over the knuckles (Gottron papules) and proximal muscle weakness indicates:',
      options: [
        { id: 'a', text: 'Systemic lupus erythematosus' },
        { id: 'b', text: 'Dermatomyositis (with a need to screen for malignancy)' },
        { id: 'c', text: 'Scleroderma' },
        { id: 'd', text: 'Psoriasis' },
      ],
      answerId: 'b',
      explanation: 'The heliotrope rash and Gottron papules with proximal muscle weakness and raised CK are pathognomonic of dermatomyositis. In adults it is associated with underlying malignancy, so age-appropriate cancer screening is required at diagnosis.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A patient with tight sclerotic skin limited to the hands/face, Raynaud phenomenon, calcinosis and telangiectasia most likely has which antibody?',
      options: [
        { id: 'a', text: 'Anti-Scl-70 (topoisomerase)' },
        { id: 'b', text: 'Anti-centromere' },
        { id: 'c', text: 'Anti-dsDNA' },
        { id: 'd', text: 'Anti-Jo-1' },
      ],
      answerId: 'b',
      explanation: 'This is limited cutaneous systemic sclerosis (CREST: Calcinosis, Raynaud, Esophageal dysmotility, Sclerodactyly, Telangiectasia), associated with anti-centromere antibodies. Diffuse systemic sclerosis (widespread skin + early internal organ disease) is associated with anti-Scl-70 (anti-topoisomerase).',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default cutaneousConnectiveTissueDiseases;
