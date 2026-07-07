import type { Lecture } from '../../lib/types';

export const dermisAppendagesGlands: Lecture = {
  id: 'dermis-appendages-glands',
  title: 'Dermis, Appendages & Skin Glands',
  system: 'derm',
  source: 'L2 — Skin Anatomy & Histology',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L2 Dermis & Adnexa' },
    { kind: 'mechanism', label: 'Dermis, DEJ & appendages' },
    { kind: 'exam', label: 'Eccrine vs apocrine; pilosebaceous' },
  ],

  highYield: [
    'Beneath the epidermis, the DERMO-EPIDERMAL JUNCTION (basement membrane zone) anchors the two layers; the DERMIS is connective tissue in two layers — PAPILLARY (superficial, loose, interdigitating dermal papillae with capillaries and sensory corpuscles) and RETICULAR (deep, dense COLLAGEN + ELASTIN giving strength/elasticity) — containing vessels, nerves, immune cells and the appendages. The HYPODERMIS (subcutis) is fat.',
    'HAIR FOLLICLE + SEBACEOUS gland = the PILOSEBACEOUS UNIT (with an arrector pili muscle). SEBACEOUS glands are HOLOCRINE (whole cell disintegrates into sebum), androgen-driven, and central to ACNE. Hair grows in a cycle: ANAGEN (growth) → CATAGEN → TELOGEN (rest/shed) — disturbances cause the alopecias.',
    'SWEAT glands: ECCRINE glands are everywhere, open directly onto skin, are MEROCRINE, and provide thermoregulatory sweating under SYMPATHETIC-CHOLINERGIC control (the autonomic exception). APOCRINE glands (axilla, groin, areola) open into hair follicles, are androgen-activated at puberty, and their bacterial breakdown produces body ODOUR (and hidradenitis suppurativa when occluded).',
    'NAILS are keratinised plates produced by the nail MATRIX; changes (pitting in psoriasis, onycholysis, clubbing) are diagnostic clues. The dermal COLLAGEN/ELASTIN is what UV degrades in photoaging and what is abnormal in connective-tissue disorders; dermal vessels/nerves mediate thermoregulation and sensation.',
    '**The take-home: dermis = papillary (loose, papillae) + reticular (dense collagen/elastin); DEJ anchors it; appendages = PILOSEBACEOUS unit (holocrine sebaceous → acne; hair cycle → alopecia), ECCRINE (thermoregulatory, sympathetic-cholinergic) vs APOCRINE (odour, axilla/groin) sweat glands, and nails (matrix).** The epidermis is in [[epidermis-keratinocyte-biology]]; pilosebaceous disease in [[acne-vulgaris]] and [[hair-diseases]]; the overview is [[skin-anatomy-histology]].',
  ],

  mechanism: {
    title: 'Dermis (papillary/reticular collagen-elastin) + DEJ + appendages: pilosebaceous (holocrine, acne), eccrine (thermoreg) vs apocrine (odour), nails',
    steps: [
      { id: 's1', label: 'Dermis: papillary (loose, papillae/capillaries) + reticular (dense collagen/elastin)', emphasis: 'key' },
      { id: 's2', label: 'Pilosebaceous unit = hair follicle + sebaceous (HOLOCRINE, androgen) + arrector pili', emphasis: 'key' },
      { id: 's3', label: 'Hair cycle: anagen (growth) → catagen → telogen (shed)', emphasis: 'key' },
      { id: 's4', label: 'Eccrine (everywhere, thermoregulatory, sympathetic-cholinergic) vs apocrine (axilla/groin, odour)', emphasis: 'key' },
      { id: 's5', label: 'Nails from the matrix; dermal collagen/elastin degraded in photoaging' },
    ],
  },

  examFindings: [
    { sign: 'Sebaceous gland secreting by disintegration of its whole cells', mechanism: 'Holocrine secretion (pilosebaceous unit)', significance: 'key' },
    { sign: 'Thermoregulatory sweating blocked by antimuscarinics', mechanism: 'Eccrine glands are sympathetic-cholinergic', significance: 'key' },
    { sign: 'Body odour and hidradenitis suppurativa in the axilla/groin', mechanism: 'Apocrine glands (open into follicles)', significance: 'supportive' },
    { sign: 'Nail pitting as a diagnostic clue', mechanism: 'Nail matrix disease (e.g. psoriasis)', significance: 'supportive' },
    { sign: 'Loss of dermal collagen/elastin with wrinkling', mechanism: 'Reticular dermis degradation (photoaging)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The two layers of the dermis', meaning: 'Papillary (superficial) and reticular (deep)' },
    { clue: 'The secretion type of sebaceous glands', meaning: 'Holocrine' },
    { clue: 'The sweat gland responsible for thermoregulation', meaning: 'The eccrine gland (sympathetic-cholinergic)' },
    { clue: 'The gland type causing body odour', meaning: 'Apocrine (axilla, groin, areola)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The appendages drive common disease: the androgen-driven holocrine sebaceous gland underlies acne ([[acne-vulgaris]]), the hair cycle underlies alopecia ([[hair-diseases]]), apocrine occlusion causes hidradenitis, and eccrine glands (sympathetic-cholinergic) are the target of hyperhidrosis treatment. Dermal collagen/elastin explains photoaging and connective-tissue disease. It complements the epidermis of [[epidermis-keratinocyte-biology]] within [[skin-anatomy-histology]].' },
  ],

  mnemonics: [
    { hook: 'Sweat glands: "Eccrine = Everywhere (thermoregulate); Apocrine = Armpit (odour)"', expansion: ['Eccrine = sympathetic-cholinergic', 'Sebaceous = holocrine (acne)'] },
    { hook: 'Dermis "Papillary loose (papillae), Reticular dense (collagen/elastin)"', expansion: ['Hair cycle: anagen/catagen/telogen', 'Nails from matrix'] },
  ],

  traps: [
    {
      questionCategory: 'Eccrine vs apocrine glands',
      wrongInstinct: 'All sweat glands are the same and produce body odour',
      rightAnswer: 'ECCRINE glands are distributed over the whole body, open directly onto the skin and produce watery THERMOREGULATORY sweat (sympathetic-cholinergic), whereas APOCRINE glands are limited to the axilla/groin/areola, open into HAIR FOLLICLES and produce a secretion that bacteria break down into ODOUR (and can occlude → hidradenitis suppurativa) — different distribution, function and clinical disease',
      why: 'Distinguishing thermoregulatory eccrine from odour-producing apocrine glands explains hyperhidrosis vs body odour vs hidradenitis, which have different treatments.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Sebaceous glands of the pilosebaceous unit secrete sebum by which mechanism?',
      options: [
        { id: 'a', text: 'Merocrine (exocytosis)' },
        { id: 'b', text: 'Holocrine (disintegration of the whole secretory cell)' },
        { id: 'c', text: 'Apocrine (pinching off apical cytoplasm)' },
        { id: 'd', text: 'Endocrine (into blood)' },
      ],
      answerId: 'b',
      explanation: 'Sebaceous glands are holocrine — the entire secretory cell disintegrates to release sebum. They are androgen-driven and central to acne. Eccrine sweat glands are merocrine, and apocrine glands release by decapitation/apocrine secretion.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Thermoregulatory sweating is provided by which gland, under which unusual autonomic control?',
      options: [
        { id: 'a', text: 'Apocrine glands, parasympathetic' },
        { id: 'b', text: 'Eccrine glands, sympathetic but cholinergic' },
        { id: 'c', text: 'Sebaceous glands, adrenergic' },
        { id: 'd', text: 'Eccrine glands, purely adrenergic' },
      ],
      answerId: 'b',
      explanation: 'Eccrine glands provide thermoregulatory sweating and are the classic "sympathetic cholinergic" exception — sympathetically innervated but using acetylcholine (muscarinic), which is why antimuscarinic drugs reduce sweating.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default dermisAppendagesGlands;
