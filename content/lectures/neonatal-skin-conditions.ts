import type { Lecture } from '../../lib/types';

export const neonatalSkinConditions: Lecture = {
  id: 'neonatal-skin-conditions',
  title: 'Neonatal & Infantile Skin Conditions',
  system: 'derm',
  source: 'L13 — Pediatric Skin Diseases',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L13 Neonatal Skin' },
    { kind: 'mechanism', label: 'Benign vs significant neonatal rashes' },
    { kind: 'exam', label: 'Erythema toxicum; cradle cap; nappy rash' },
  ],

  highYield: [
    '**Most neonatal rashes are BENIGN and need only reassurance. ERYTHEMA TOXICUM NEONATORUM (blotchy erythema with pustules on a red base, first days of life, well baby — eosinophils on smear, self-resolving); MILIA (tiny keratin cysts); transient neonatal pustular melanosis (pustules → pigmented macules, commoner in darker skin); and neonatal cephalic pustulosis. MONGOLIAN spots (dermal melanocytosis — blue-grey sacral patches) are benign birthmarks.**',
    '**SEBORRHOEIC dermatitis ("CRADLE CAP") — greasy yellow scales on the scalp (± face/flexures) in the first months, associated with Malassezia; benign, treated with emollients/soft brushing (± mild antifungal). NAPPY (diaper) DERMATITIS is usually IRRITANT (from urine/faeces occlusion — SPARES the skin folds); CANDIDA nappy rash INVOLVES the folds with SATELLITE pustules → topical antifungal.**',
    '**ATOPIC DERMATITIS in infants favours the FACE and EXTENSOR surfaces (later becoming flexural) — the commonest chronic infantile inflammatory skin disease (barrier/filaggrin defect; atopic march). Infantile HAEMANGIOMAS and other birthmarks are covered separately ([[vascular-birthmarks-genodermatoses]]).**',
    '**A few neonatal skin signs are SIGNIFICANT and must not be missed: BLISTERS/erosions (herpes simplex — an emergency; epidermolysis bullosa; staph scalded skin), a "BLUEBERRY MUFFIN" rash (congenital infection/haematopoiesis), extensive/spreading rash with an unwell baby, and multiple café-au-lait macules (neurofibromatosis). When in doubt, investigate.**',
    '**The take-home: benign neonatal rashes — erythema toxicum, milia, transient pustular melanosis, Mongolian spots, cradle cap (reassure); NAPPY rash irritant (spares folds) vs candida (involves folds + satellites); infantile atopic dermatitis (face/extensor). RED FLAGS: neonatal blisters (HSV emergency), blueberry-muffin, unwell baby.** Birthmarks/genodermatoses are in [[vascular-birthmarks-genodermatoses]]; the pediatric overview is [[pediatric-skin-diseases]].',
  ],

  mechanism: {
    title: 'Benign neonatal (erythema toxicum/milia/Mongolian/cradle cap → reassure); nappy rash irritant (spares folds) vs candida (folds+satellites); red flags (HSV blisters)',
    steps: [
      { id: 's1', label: 'Benign self-limiting: erythema toxicum, milia, transient pustular melanosis, Mongolian spots', emphasis: 'key' },
      { id: 's2', label: 'Cradle cap (seborrhoeic dermatitis, Malassezia) — benign; emollients/soft brushing', emphasis: 'key' },
      { id: 's3', label: 'Nappy rash: irritant (SPARES folds) vs candida (INVOLVES folds + satellite pustules)', emphasis: 'key' },
      { id: 's4', label: 'Infantile atopic dermatitis: face/extensor (barrier/filaggrin; atopic march)', emphasis: 'key' },
      { id: 's5', label: 'Red flags: neonatal blisters (HSV emergency), blueberry-muffin, unwell baby → investigate', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Blotchy erythema with pustules in a well newborn, first days', mechanism: 'Erythema toxicum neonatorum (benign)', significance: 'key' },
    { sign: 'Greasy yellow scalp scales in an infant', mechanism: 'Cradle cap (seborrhoeic dermatitis)', significance: 'supportive' },
    { sign: 'Nappy rash sparing the skin folds', mechanism: 'Irritant nappy dermatitis', significance: 'key' },
    { sign: 'Nappy rash involving folds with satellite pustules', mechanism: 'Candida nappy dermatitis (topical antifungal)', significance: 'key' },
    { sign: 'Grouped vesicles/erosions in a neonate', mechanism: 'Neonatal HSV — emergency (investigate/treat)', significance: 'key' },
  ],

  investigations: [
    { clue: 'The benign newborn pustular rash with eosinophils', meaning: 'Erythema toxicum neonatorum' },
    { clue: 'The infantile scalp rash associated with Malassezia', meaning: 'Cradle cap (seborrhoeic dermatitis)' },
    { clue: 'The nappy rash pattern suggesting candida', meaning: 'Involvement of the folds with satellite pustules' },
    { clue: 'The neonatal skin emergency presenting with vesicles', meaning: 'Neonatal herpes simplex' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Most neonatal rashes are benign and need only reassurance (erythema toxicum, milia, Mongolian spots, cradle cap), but the clinician must distinguish irritant from candidal nappy rash (folds/satellites) and, crucially, recognise red flags — neonatal HSV (an emergency), blueberry-muffin rash, or an unwell baby — that require investigation and treatment. Infantile atopic dermatitis needs emollients/steroids. Birthmarks/genodermatoses are in [[vascular-birthmarks-genodermatoses]]; the overview is [[pediatric-skin-diseases]].' },
  ],

  mnemonics: [
    { hook: 'Benign neonatal: "Erythema toxicum, Milia, Mongolian spot, Cradle cap → reassure"', expansion: ['Erythema toxicum = eosinophils', 'Well baby'] },
    { hook: 'Nappy rash: "Irritant SPARES folds; Candida INVOLVES folds + satellites"', expansion: ['Neonatal blisters → HSV emergency', 'Infant atopic = face/extensor'] },
  ],

  traps: [
    {
      questionCategory: 'Irritant vs candidal nappy rash',
      wrongInstinct: 'All nappy rashes are the same and treated with barrier cream alone',
      rightAnswer: 'The pattern distinguishes them: IRRITANT nappy dermatitis SPARES the skin FOLDS (the convex surfaces in contact with the nappy are affected) and responds to barrier care, whereas CANDIDAL nappy rash INVOLVES the FOLDS with SATELLITE pustules and needs a TOPICAL ANTIFUNGAL — treating candida as simple irritant dermatitis fails',
      why: 'Fold involvement with satellites signals candida, which requires antifungal therapy; the sparing-vs-involvement pattern directs correct treatment.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A well 3-day-old newborn has blotchy erythema with scattered pustules on a red base; a smear shows eosinophils. The most likely diagnosis is:',
      options: [
        { id: 'a', text: 'Neonatal herpes simplex' },
        { id: 'b', text: 'Erythema toxicum neonatorum (benign)' },
        { id: 'c', text: 'Staphylococcal scalded skin syndrome' },
        { id: 'd', text: 'Candidiasis' },
      ],
      answerId: 'b',
      explanation: 'Erythema toxicum neonatorum is a common benign self-limiting rash of the first days of life in a well baby — blotchy erythema with pustules containing eosinophils — needing only reassurance. Vesicles/erosions in an unwell neonate would instead raise concern for HSV.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A nappy rash that involves the skin folds and shows satellite pustules is most likely due to:',
      options: [
        { id: 'a', text: 'Irritant contact from urine/faeces' },
        { id: 'b', text: 'Candida (needing a topical antifungal)' },
        { id: 'c', text: 'Atopic dermatitis' },
        { id: 'd', text: 'Psoriasis' },
      ],
      answerId: 'b',
      explanation: 'Irritant nappy dermatitis typically spares the folds, whereas candidal nappy rash involves the folds with satellite pustules and requires a topical antifungal. Recognising the pattern directs correct treatment.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default neonatalSkinConditions;
