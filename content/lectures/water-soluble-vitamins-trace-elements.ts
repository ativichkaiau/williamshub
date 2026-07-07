import type { Lecture } from '../../lib/types';

export const waterSolubleVitaminsTraceElements: Lecture = {
  id: 'water-soluble-vitamins-trace-elements',
  title: 'Water-Soluble Vitamins & Trace Elements',
  system: 'gi',
  source: 'L18 — Vitamins & Trace Elements',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'L18 Vitamins' },
    { kind: 'mechanism', label: 'B vitamins & minerals' },
    { kind: 'exam', label: 'B12 / thiamine / iron' },
  ],

  highYield: [
    '**Water-soluble vitamins (B-complex and C) are generally NOT stored (except B12) and act as coenzymes in metabolism, so deficiency develops relatively quickly and excess is usually excreted.** They are the cofactors that keep energy metabolism, DNA synthesis and connective tissue running.',
    'Key B-vitamin deficiencies: B1 (thiamine) → beriberi (wet = high-output cardiac failure; dry = peripheral neuropathy) and Wernicke–Korsakoff in alcoholics; B3 (niacin) → PELLAGRA (the "3 D\'s": Dermatitis, Diarrhoea, Dementia); B2/B6 → cheilosis/glossitis and (B6) neuropathy (isoniazid depletes B6).',
    '**Folate (B9) and B12 (cobalamin) both cause MEGALOBLASTIC anaemia (impaired DNA synthesis) — but ONLY B12 deficiency causes NEUROLOGICAL disease (subacute combined degeneration of the cord: dorsal columns + corticospinal tracts).** Giving folate alone to a B12-deficient patient corrects the anaemia but lets the neuropathy progress — a classic trap. B12 needs intrinsic factor (pernicious anaemia, ileal disease, fish tapeworm).',
    '**Vitamin C (ascorbate) is a cofactor for collagen hydroxylation and an antioxidant; deficiency causes SCURVY — impaired collagen → bleeding gums, perifollicular haemorrhages, "corkscrew" hairs, poor wound healing.** It also aids iron absorption.',
    '**Trace elements: IRON deficiency → microcytic anaemia (the commonest nutritional deficiency); ZINC → poor wound healing, dermatitis, hypogeusia, and impaired growth; IODINE → goitre/hypothyroidism (and cretinism); COPPER → anaemia/neuropathy; SELENIUM → cardiomyopathy.** The exam anchors are B12 (neurology + folate trap), thiamine (Wernicke), niacin (pellagra 3 D\'s), vitamin C (scurvy), and iron/zinc/iodine.',
  ],

  mechanism: {
    title: 'B/C coenzymes (not stored except B12); classic deficiency syndromes + minerals',
    steps: [
      { id: 's1', label: 'Water-soluble = coenzymes, not stored (except B12); excess excreted', emphasis: 'key' },
      { id: 's2', label: 'B1 → beriberi/Wernicke; B3 → pellagra (3 D\'s); B6 → neuropathy (INH)', emphasis: 'key' },
      { id: 's3', label: 'Folate + B12 → megaloblastic anaemia; only B12 → neuro (SCD)', emphasis: 'danger' },
      { id: 's4', label: 'Vitamin C → scurvy (collagen: bleeding gums, poor healing)', emphasis: 'key' },
      { id: 's5', label: 'Minerals: iron (microcytic), zinc (healing), iodine (goitre), Cu, Se' },
    ],
  },

  examFindings: [
    { sign: 'Megaloblastic anaemia with neurological signs (SCD)', mechanism: 'Vitamin B12 deficiency', significance: 'key' },
    { sign: 'Confusion, ophthalmoplegia and ataxia in an alcoholic', mechanism: 'Thiamine (B1) deficiency — Wernicke encephalopathy', significance: 'key' },
    { sign: 'Dermatitis, diarrhoea and dementia', mechanism: 'Niacin (B3) deficiency — pellagra', significance: 'key' },
    { sign: 'Bleeding gums, perifollicular haemorrhage, poor healing', mechanism: 'Vitamin C deficiency (scurvy)', significance: 'key' },
    { sign: 'Microcytic hypochromic anaemia', mechanism: 'Iron deficiency (commonest nutritional deficiency)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The vitamin deficiency causing Wernicke–Korsakoff', meaning: 'Thiamine (B1)' },
    { clue: 'The vitamin whose deficiency causes both anaemia AND neurological disease', meaning: 'Vitamin B12 (subacute combined degeneration)' },
    { clue: 'The three D\'s of pellagra', meaning: 'Dermatitis, Diarrhoea, Dementia (niacin/B3 deficiency)' },
    { clue: 'The trace element deficiency causing poor wound healing and hypogeusia', meaning: 'Zinc' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Deficiencies are common and treatable — give thiamine before glucose in alcoholics (prevent Wernicke), never give folate alone in possible B12 deficiency, and replace iron/zinc/iodine as needed. B12 deficiency links to autoimmune gastritis ([[gastritis-and-gastropathy]]), terminal-ileal Crohn ([[inflammatory-bowel-disease]]) and the fish tapeworm ([[intestinal-flukes-tapeworms]]). Contrast the stored, potentially toxic [[fat-soluble-vitamins]]; malnutrition context in [[nutrition-energy-protein-malnutrition]].' },
  ],

  mnemonics: [
    { hook: 'Pellagra "3 D\'s": Dermatitis, Diarrhoea, Dementia (niacin/B3)', expansion: ['B1 → Wernicke/beriberi', 'B6 → neuropathy (isoniazid)'] },
    { hook: 'B12 vs folate: "both anaemia, only B12 neuro" (don\'t give folate alone)', expansion: ['B12 = subacute combined degeneration', 'B12 needs intrinsic factor'] },
  ],

  traps: [
    {
      questionCategory: 'Treating megaloblastic anaemia',
      wrongInstinct: 'Any megaloblastic anaemia can safely be treated with folate',
      rightAnswer: 'Giving FOLATE alone to a B12-deficient patient corrects the anaemia but allows the NEUROLOGICAL damage (subacute combined degeneration) to progress unchecked — you must confirm/replace B12 too',
      why: 'Both folate and B12 deficiency cause megaloblastic anaemia, but only B12 deficiency damages the cord; masking the anaemia with folate removes the warning sign while the neuropathy worsens irreversibly.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient has megaloblastic anaemia together with impaired proprioception and a spastic gait (subacute combined degeneration). The deficiency is:',
      options: [
        { id: 'a', text: 'Folate' },
        { id: 'b', text: 'Vitamin B12 (cobalamin)' },
        { id: 'c', text: 'Vitamin C' },
        { id: 'd', text: 'Iron' },
      ],
      answerId: 'b',
      explanation: 'Both folate and B12 deficiency cause megaloblastic anaemia, but only vitamin B12 deficiency produces neurological disease (subacute combined degeneration of the dorsal columns and corticospinal tracts). Folate alone would not explain the neurology and could mask it.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Deficiency of niacin (vitamin B3) classically produces the triad of:',
      options: [
        { id: 'a', text: 'Dermatitis, diarrhoea and dementia (pellagra)' },
        { id: 'b', text: 'Night blindness, bleeding and anaemia' },
        { id: 'c', text: 'Ophthalmoplegia, ataxia and confusion' },
        { id: 'd', text: 'Bowing of the legs and bone pain' },
      ],
      answerId: 'a',
      explanation: 'Niacin deficiency causes pellagra, remembered as the three D\'s — dermatitis (photosensitive), diarrhoea and dementia. Ophthalmoplegia/ataxia/confusion is thiamine-deficiency Wernicke encephalopathy.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default waterSolubleVitaminsTraceElements;
