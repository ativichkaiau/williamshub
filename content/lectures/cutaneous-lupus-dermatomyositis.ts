import type { Lecture } from '../../lib/types';

export const cutaneousLupusDermatomyositis: Lecture = {
  id: 'cutaneous-lupus-dermatomyositis',
  title: 'Cutaneous Lupus & Dermatomyositis',
  system: 'derm',
  source: 'L11 — Connective Tissue Diseases',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L11 Lupus/DM' },
    { kind: 'mechanism', label: 'Photosensitive autoimmune skin' },
    { kind: 'exam', label: 'Malar vs discoid; heliotrope/Gottron' },
  ],

  highYield: [
    '**LUPUS ERYTHEMATOSUS skin disease is PHOTOSENSITIVE and spans a spectrum. ACUTE cutaneous LE = the MALAR ("butterfly") rash — photosensitive erythema over cheeks/nose SPARING the NASOLABIAL FOLDS — a marker of systemic lupus (SLE; +ANA, anti-dsDNA). SUBACUTE cutaneous LE = photosensitive annular/psoriasiform lesions (anti-Ro/SSA; risk of NEONATAL lupus/congenital heart block).**',
    '**CHRONIC cutaneous LE = DISCOID lupus: chronic, SCARRING, scaly, atrophic disc-shaped plaques with follicular plugging and dyspigmentation, often on face/scalp/ears → SCARRING ALOPECIA; usually skin-limited but can be disfiguring. All forms need PHOTOPROTECTION; treat with topical/intralesional steroids, antimalarials (hydroxychloroquine) and, for systemic disease, immunosuppression.**',
    '**DERMATOMYOSITIS: an inflammatory myopathy with pathognomonic skin signs — the HELIOTROPE rash (violaceous periorbital/eyelid discolouration ± oedema) and GOTTRON PAPULES (violaceous papules over the knuckles/MCPs) — plus a photosensitive SHAWL/V-sign, nailfold changes, and PROXIMAL muscle weakness with raised CK. Adult dermatomyositis carries an increased MALIGNANCY risk → age-appropriate cancer screening.**',
    '**Diagnosis uses skin signs + AUTOANTIBODIES (ANA, anti-dsDNA/Sm for SLE; anti-Ro for SCLE/neonatal lupus; anti-Jo-1/anti-Mi-2/anti-TIF1γ in dermatomyositis) ± biopsy/muscle enzymes/EMG. Because the skin signs may precede or reveal systemic disease, they prompt a systemic evaluation.**',
    '**The take-home: cutaneous LUPUS — malar (acute/SLE, spares nasolabial folds), subacute (anti-Ro, neonatal lupus/heart block), DISCOID (scarring, skin-limited); DERMATOMYOSITIS — heliotrope + Gottron papules + proximal weakness → SCREEN FOR MALIGNANCY (adults). All are photosensitive → photoprotection + immunomodulation.** The broader CTD overview is [[cutaneous-connective-tissue-diseases]]; photoprotection is [[photoaging-photoprotection]].',
  ],

  mechanism: {
    title: 'Photosensitive autoimmune skin: lupus (malar acute/SLE, subacute anti-Ro, discoid scarring) & dermatomyositis (heliotrope+Gottron → cancer screen)',
    steps: [
      { id: 's1', label: 'Acute cutaneous LE = malar rash (spares nasolabial folds) → SLE (ANA/dsDNA)', emphasis: 'key' },
      { id: 's2', label: 'Subacute cutaneous LE = photosensitive annular (anti-Ro; neonatal lupus/heart block)', emphasis: 'key' },
      { id: 's3', label: 'Discoid LE = scarring disc plaques + follicular plugging (often skin-limited)', emphasis: 'key' },
      { id: 's4', label: 'Dermatomyositis: heliotrope + Gottron + proximal weakness/↑CK', emphasis: 'key' },
      { id: 's5', label: 'Adult dermatomyositis → screen for malignancy; all photosensitive → photoprotection + immunomodulation', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Photosensitive malar rash sparing the nasolabial folds', mechanism: 'Acute cutaneous lupus (SLE)', significance: 'key' },
    { sign: 'Scarring, atrophic disc plaques with follicular plugging', mechanism: 'Discoid lupus erythematosus', significance: 'key' },
    { sign: 'Annular photosensitive lesions with anti-Ro antibodies', mechanism: 'Subacute cutaneous lupus (neonatal lupus/heart-block risk)', significance: 'key' },
    { sign: 'Violaceous eyelid rash + knuckle papules + proximal weakness', mechanism: 'Dermatomyositis (heliotrope + Gottron)', significance: 'key' },
    { sign: 'New adult dermatomyositis prompting cancer screening', mechanism: 'Paraneoplastic association', significance: 'key' },
  ],

  investigations: [
    { clue: 'The rash pattern of acute cutaneous lupus', meaning: 'Malar (butterfly) rash sparing the nasolabial folds' },
    { clue: 'The lupus antibody linked to neonatal lupus/heart block', meaning: 'Anti-Ro (SSA)' },
    { clue: 'The two pathognomonic skin signs of dermatomyositis', meaning: 'Heliotrope rash and Gottron papules' },
    { clue: 'The key screen after adult dermatomyositis diagnosis', meaning: 'Age-appropriate malignancy screening' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Cutaneous lupus and dermatomyositis are often the presenting or defining clue to systemic autoimmune disease: the malar rash flags SLE (needing renal/haematologic work-up), subacute lupus (anti-Ro) carries neonatal-lupus/heart-block risk, and adult dermatomyositis mandates malignancy screening. All are photosensitive, so photoprotection ([[photoaging-photoprotection]]) plus antimalarials/immunosuppression are central. The broader CTD overview (including scleroderma) is [[cutaneous-connective-tissue-diseases]].' },
  ],

  mnemonics: [
    { hook: 'Lupus skin: "Malar (acute/SLE, spares nasolabial folds), Subacute (anti-Ro), Discoid (scarring)"', expansion: ['All photosensitive', 'Hydroxychloroquine'] },
    { hook: 'Dermatomyositis: "Heliotrope (eyelids) + Gottron (knuckles) + proximal weakness → hunt cancer"', expansion: ['↑CK', 'Shawl/V-sign'] },
  ],

  traps: [
    {
      questionCategory: 'Malar rash location',
      wrongInstinct: 'The lupus malar rash covers the whole face including the folds beside the nose',
      rightAnswer: 'The lupus "butterfly" malar rash characteristically SPARES the NASOLABIAL FOLDS (the creases from nose to mouth) — a feature that helps distinguish it from rosacea and seborrhoeic dermatitis, which typically INVOLVE the nasolabial folds; the sparing reflects the photosensitive, sun-exposed distribution',
      why: 'Nasolabial-fold sparing is a specific clue separating acute cutaneous lupus from common facial rashes (rosacea, seborrhoeic dermatitis) that involve those folds, refining the differential.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The heliotrope rash and Gottron papules with proximal muscle weakness are pathognomonic of:',
      options: [
        { id: 'a', text: 'Systemic lupus erythematosus' },
        { id: 'b', text: 'Dermatomyositis (with a need to screen for malignancy in adults)' },
        { id: 'c', text: 'Discoid lupus' },
        { id: 'd', text: 'Scleroderma' },
      ],
      answerId: 'b',
      explanation: 'The heliotrope (violaceous eyelid) rash and Gottron papules (over the knuckles) with proximal weakness and raised CK are pathognomonic of dermatomyositis; in adults it is associated with underlying malignancy, so cancer screening is required.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The malar (butterfly) rash of acute cutaneous lupus characteristically:',
      options: [
        { id: 'a', text: 'Involves the nasolabial folds prominently' },
        { id: 'b', text: 'Spares the nasolabial folds' },
        { id: 'c', text: 'Is confined to the scalp' },
        { id: 'd', text: 'Is non-photosensitive' },
      ],
      answerId: 'b',
      explanation: 'The lupus malar rash is a photosensitive erythema over the cheeks and nose that spares the nasolabial folds — a helpful feature distinguishing it from rosacea and seborrhoeic dermatitis, which typically involve those folds.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default cutaneousLupusDermatomyositis;
