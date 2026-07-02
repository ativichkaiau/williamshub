import type { Lecture } from '../../lib/types';

export const chronicWoundsLegUlcers: Lecture = {
  id: 'chronic-wounds-leg-ulcers',
  title: 'Chronic Wounds & Leg Ulcers',
  system: 'derm',
  source: 'L6 — Wound Healing',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L6 Chronic Wounds' },
    { kind: 'mechanism', label: 'Stuck in inflammation' },
    { kind: 'exam', label: 'Venous vs arterial vs diabetic vs pressure' },
  ],

  highYield: [
    '**A CHRONIC wound fails to heal in the expected time because it is STUCK in the INFLAMMATORY phase — perpetuated by ISCHAEMIA, INFECTION/biofilm, repeated pressure/trauma, oedema, and systemic factors (diabetes, poor nutrition, smoking, immunosuppression). The commonest chronic wounds are LEG ULCERS and PRESSURE/DIABETIC ulcers, and their CAUSE determines treatment.**',
    '**VENOUS ulcers (commonest leg ulcer): venous hypertension → shallow ulcers over the GAITER area/medial malleolus, with oedema, haemosiderin staining, lipodermatosclerosis and varicose veins; ABPI normal → treat with COMPRESSION (after excluding arterial disease). ARTERIAL ulcers: peripheral arterial disease → PAINFUL, "PUNCHED-OUT" ulcers on the toes/pressure points, cold pulseless foot, LOW ABPI → do NOT compress; needs revascularisation.**',
    '**DIABETIC (neuropathic) foot ulcers: peripheral NEUROPATHY (painless), often over pressure points (metatarsal heads), with callus, plus ischaemia and infection → offloading, glycaemic control, debridement, infection treatment; high amputation risk. PRESSURE ulcers: unrelieved pressure over bony prominences (sacrum, heels) in immobile patients → prevention (repositioning, pressure-relieving surfaces, nutrition) is key.**',
    '**Management of any chronic wound: treat the CAUSE (compression for venous, revascularise arterial, offload diabetic/pressure), DEBRIDE non-viable tissue and control infection/biofilm, optimise the wound bed (moisture balance) and systemic factors (glycaemia, nutrition, smoking). A non-healing ulcer with atypical features (rolled edge) can be a MALIGNANCY (Marjolin ulcer/SCC) — biopsy if in doubt.**',
    '**The take-home: chronic wounds are stuck in inflammation from ischaemia/infection/pressure/systemic disease; VENOUS (gaiter, oedema, compression), ARTERIAL (painful punched-out, low ABPI, do NOT compress), DIABETIC (painless neuropathic pressure points, offload), PRESSURE (bony prominences, prevent). Treat the cause + debride + optimise; biopsy atypical ulcers.** The normal phases are in [[wound-healing]]; diabetic/vascular disease links to endocrine/vascular medicine.',
  ],

  mechanism: {
    title: 'Chronic = stuck in inflammation (ischaemia/infection/pressure/systemic); venous (compress) vs arterial (revascularise) vs diabetic/pressure (offload)',
    steps: [
      { id: 's1', label: 'Chronic wound = stuck in inflammatory phase (ischaemia, infection/biofilm, pressure, diabetes)', emphasis: 'key' },
      { id: 's2', label: 'Venous ulcer: gaiter area, oedema, haemosiderin; normal ABPI → COMPRESSION', emphasis: 'key' },
      { id: 's3', label: 'Arterial ulcer: painful punched-out, low ABPI, cold foot → do NOT compress, revascularise', emphasis: 'danger' },
      { id: 's4', label: 'Diabetic foot: painless neuropathic pressure-point ulcer → offload + glycaemia + infection', emphasis: 'danger' },
      { id: 's5', label: 'Pressure ulcer: bony prominences, immobile → prevent (reposition/nutrition); biopsy atypical ulcers', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Shallow ulcer over the medial malleolus with oedema and haemosiderin staining', mechanism: 'Venous ulcer (compression, normal ABPI)', significance: 'key' },
    { sign: 'Painful punched-out ulcer on the toes with a cold, pulseless foot', mechanism: 'Arterial ulcer (low ABPI — do not compress)', significance: 'key' },
    { sign: 'Painless ulcer under a callus at a metatarsal head', mechanism: 'Diabetic neuropathic foot ulcer', significance: 'key' },
    { sign: 'Ulcer over the sacrum/heel in an immobile patient', mechanism: 'Pressure ulcer', significance: 'key' },
    { sign: 'A non-healing ulcer with a rolled, everted edge', mechanism: 'Malignancy (Marjolin ulcer/SCC) — biopsy', significance: 'key' },
  ],

  investigations: [
    { clue: 'Why chronic wounds fail to heal', meaning: 'They are stuck in the inflammatory phase' },
    { clue: 'The treatment of a venous ulcer (with normal ABPI)', meaning: 'Compression' },
    { clue: 'The contraindication in arterial ulcers', meaning: 'Compression (low ABPI — revascularise instead)' },
    { clue: 'The action needed for a non-healing atypical ulcer', meaning: 'Biopsy (exclude malignancy/Marjolin ulcer)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Chronic wounds heal only when the underlying cause is addressed — compression for venous (after excluding arterial disease with ABPI), revascularisation for arterial (never compress), offloading and glycaemic control for diabetic foot, and pressure relief/prevention for pressure ulcers — alongside debridement, infection/biofilm control and systemic optimisation. A non-healing atypical ulcer needs biopsy (Marjolin ulcer/SCC). The normal healing phases are in [[wound-healing]].' },
  ],

  mnemonics: [
    { hook: '"Venous = gaiter/oedema → compress; Arterial = painful punched-out/low ABPI → do NOT compress"', expansion: ['Diabetic = painless neuropathic → offload', 'Pressure = bony prominence → prevent'] },
    { hook: '"Chronic wound = stuck in inflammation → treat the cause + debride"', expansion: ['Biopsy atypical ulcers (Marjolin)', 'Check ABPI before compression'] },
  ],

  traps: [
    {
      questionCategory: 'Compression in leg ulcers',
      wrongInstinct: 'All leg ulcers benefit from compression bandaging',
      rightAnswer: 'Compression is the treatment for VENOUS ulcers but is DANGEROUS in ARTERIAL disease — so you must EXCLUDE significant arterial insufficiency (check the ANKLE-BRACHIAL PRESSURE INDEX) BEFORE applying compression; compressing an ischaemic (arterial) leg can worsen ischaemia and cause tissue loss',
      why: 'Applying compression to an arterial ulcer worsens ischaemia and can lead to amputation, so ABPI must confirm adequate arterial supply before compression — a critical safety step.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Before applying compression bandaging to a leg ulcer thought to be venous, it is essential to:',
      options: [
        { id: 'a', text: 'Start antibiotics' },
        { id: 'b', text: 'Exclude significant arterial disease (check the ankle-brachial pressure index)' },
        { id: 'c', text: 'Give a diuretic' },
        { id: 'd', text: 'Biopsy the ulcer' },
      ],
      answerId: 'b',
      explanation: 'Compression treats venous ulcers but worsens arterial (ischaemic) ulcers, so the ankle-brachial pressure index must confirm adequate arterial supply before compression is applied. Arterial ulcers (painful, punched-out, low ABPI) need revascularisation, not compression.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'A painless ulcer under a callus at a metatarsal head in a person with long-standing diabetes is best explained by:',
      options: [
        { id: 'a', text: 'Venous hypertension' },
        { id: 'b', text: 'Peripheral neuropathy with pressure/repetitive trauma (diabetic foot ulcer)' },
        { id: 'c', text: 'An immediate allergic reaction' },
        { id: 'd', text: 'Compression injury' },
      ],
      answerId: 'b',
      explanation: 'Diabetic (neuropathic) foot ulcers are painless because of peripheral neuropathy and occur at pressure points (e.g. metatarsal heads) with callus, often complicated by ischaemia and infection. Management includes offloading, glycaemic control, debridement and infection treatment.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default chronicWoundsLegUlcers;
