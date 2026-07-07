import type { Lecture } from '../../lib/types';

export const bacterialSkinInfections: Lecture = {
  id: 'bacterial-skin-infections',
  title: 'Bacterial Skin Infections',
  system: 'derm',
  source: 'L7 — Skin Infections',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L7 Bacterial Skin' },
    { kind: 'mechanism', label: 'Pyoderma by depth' },
    { kind: 'exam', label: 'Impetigo → nec fasc' },
  ],

  highYield: [
    'Most bacterial skin infections (pyodermas) are caused by STAPHYLOCOCCUS AUREUS and STREPTOCOCCUS PYOGENES, and are classified by DEPTH. Superficial: IMPETIGO (honey-coloured crusts, contagious, children; bullous impetigo = S. aureus toxin) and FOLLICULITIS. Deeper follicular: FURUNCLE (boil) and CARBUNCLE (coalescing abscesses).',
    'Dermal/subcutaneous spreading infection: ERYSIPELAS (upper dermis/lymphatics — sharply demarcated, raised, bright-red, usually STREPTOCOCCAL, often facial/shins) vs CELLULITIS (deeper dermis/subcutis — ill-defined, warm, tender, spreading erythema; staph or strep). Both cause fever/malaise; treat with anti-staph/strep antibiotics (consider MRSA cover in abscesses/risk groups).',
    'NECROTISING FASCIITIS is a SURGICAL EMERGENCY — rapidly spreading infection of fascia with PAIN OUT OF PROPORTION to skin findings, systemic toxicity, crepitus or skin necrosis/bullae (group A strep and/or polymicrobial) → urgent surgical DEBRIDEMENT + broad-spectrum antibiotics; delay is fatal. Toxin-mediated: staphylococcal SCALDED SKIN SYNDROME (children) and toxic shock syndrome.',
    'Other bacterial skin conditions: ERYTHRASMA (Corynebacterium — flexural, coral-red on Wood\'s lamp), pitted keratolysis, and cutaneous involvement in systemic infection. Abscesses need INCISION AND DRAINAGE (± antibiotics). Recurrent boils/MRSA carriage may need decolonisation.',
    '**The take-home: pyoderma by DEPTH — impetigo (honey crust, superficial) → folliculitis/furuncle/carbuncle → ERYSIPELAS (sharp/superficial, strep) vs CELLULITIS (deep/ill-defined) → NECROTISING FASCIITIS (emergency: pain out of proportion, debride). Toxin-mediated SSSS/TSS. Abscess = incise and drain.** The overview (with fungal/viral) is [[skin-infections-bacterial-fungal-viral]]; viral infections in [[viral-skin-infections]]; the antibiotics are BCP ([[antibacterial-cell-wall-agents]]).',
  ],

  mechanism: {
    title: 'Pyoderma by depth (staph/strep): impetigo → folliculitis/furuncle → erysipelas (sharp) vs cellulitis (deep) → necrotising fasciitis (emergency)',
    steps: [
      { id: 's1', label: 'Staph aureus + strep pyogenes; classify by depth', emphasis: 'key' },
      { id: 's2', label: 'Superficial: impetigo (honey crust) → folliculitis/furuncle/carbuncle', emphasis: 'key' },
      { id: 's3', label: 'Erysipelas (upper dermis, sharp, strep) vs cellulitis (deeper, ill-defined)', emphasis: 'key' },
      { id: 's4', label: 'Necrotising fasciitis = emergency (pain out of proportion, toxicity) → debride + antibiotics', emphasis: 'danger' },
      { id: 's5', label: 'Toxin-mediated: scalded skin syndrome / toxic shock; abscess → incision & drainage', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Honey-coloured crusts on a child\'s face', mechanism: 'Impetigo (S. aureus/S. pyogenes)', significance: 'key' },
    { sign: 'Sharply demarcated, raised, bright-red facial plaque with fever', mechanism: 'Erysipelas (streptococcal, superficial)', significance: 'key' },
    { sign: 'Ill-defined warm, tender, spreading erythema of the leg', mechanism: 'Cellulitis (deeper dermis/subcutis)', significance: 'key' },
    { sign: 'Severe pain out of proportion with systemic toxicity and crepitus', mechanism: 'Necrotising fasciitis (surgical emergency)', significance: 'key' },
    { sign: 'A fluctuant abscess', mechanism: 'Requires incision and drainage', significance: 'key' },
  ],

  investigations: [
    { clue: 'The two commonest causative organisms', meaning: 'Staphylococcus aureus and Streptococcus pyogenes' },
    { clue: 'The superficial infection with honey-coloured crusts', meaning: 'Impetigo' },
    { clue: 'Erysipelas vs cellulitis by depth', meaning: 'Erysipelas superficial/sharp; cellulitis deeper/ill-defined' },
    { clue: 'The management of a cutaneous abscess', meaning: 'Incision and drainage (± antibiotics)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Classifying pyoderma by depth guides therapy and urgency: topical/oral antibiotics for impetigo, anti-staph/strep antibiotics for erysipelas/cellulitis (MRSA cover where indicated), incision and drainage for abscesses, and — critically — immediate surgical debridement for necrotising fasciitis (recognised by pain out of proportion and toxicity). Toxin-mediated SSSS/TSS need supportive care. The overview with fungal/viral is [[skin-infections-bacterial-fungal-viral]]; antibiotic classes are BCP ([[antibacterial-cell-wall-agents]]).' },
  ],

  mnemonics: [
    { hook: 'Depth: "Impetigo (crust) → folliculitis/furuncle → Erysipelas (sharp) → Cellulitis (deep) → Nec fasc (emergency)"', expansion: ['Staph + strep', 'Abscess → incise & drain'] },
    { hook: '"Pain out of proportion + toxicity = necrotising fasciitis → debride NOW"', expansion: ['Erysipelas = superficial strep', 'MRSA cover in abscess'] },
  ],

  traps: [
    {
      questionCategory: 'Necrotising fasciitis vs cellulitis',
      wrongInstinct: 'Severe leg pain with only mild redness is just cellulitis that antibiotics will fix',
      rightAnswer: 'PAIN OUT OF PROPORTION to modest skin findings, with rapid progression, systemic toxicity, crepitus, bullae or skin necrosis, signals NECROTISING FASCIITIS — a SURGICAL EMERGENCY requiring urgent DEBRIDEMENT plus broad-spectrum antibiotics, NOT antibiotics alone; early skin signs can look deceptively mild',
      why: 'Necrotising fasciitis is rapidly fatal and its surface appearance underplays the deep destruction, so recognising disproportionate pain/toxicity and acting surgically (not just medically) is life-saving.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Erysipelas differs from cellulitis in that erysipelas:',
      options: [
        { id: 'a', text: 'Is deeper with ill-defined borders' },
        { id: 'b', text: 'Is superficial (upper dermis) with sharply demarcated, raised borders (usually streptococcal)' },
        { id: 'c', text: 'Is a fungal infection' },
        { id: 'd', text: 'Only affects the abdomen' },
      ],
      answerId: 'b',
      explanation: 'Erysipelas involves the superficial dermis and lymphatics, producing a sharply demarcated, raised, bright-red plaque (usually streptococcal, often facial or on the shins), whereas cellulitis extends deeper with ill-defined borders (staph or strep).',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which feature most strongly suggests necrotising fasciitis rather than simple cellulitis?',
      options: [
        { id: 'a', text: 'Mild itching' },
        { id: 'b', text: 'Pain out of proportion to the skin findings with systemic toxicity' },
        { id: 'c', text: 'A slowly enlarging patch over weeks' },
        { id: 'd', text: 'Honey-coloured crusting' },
      ],
      answerId: 'b',
      explanation: 'Necrotising fasciitis classically causes severe pain out of proportion to the (initially modest) skin findings, with rapid progression and systemic toxicity (± crepitus/necrosis). It is a surgical emergency needing urgent debridement plus broad-spectrum antibiotics.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default bacterialSkinInfections;
