import type { Lecture } from '../../lib/types';

export const skinPhysiologyThermoregulation: Lecture = {
  id: 'skin-physiology-thermoregulation',
  title: 'Physiology of Skin & Thermoregulation',
  system: 'derm',
  source: 'L5 — Physiology of Skin & Thermoregulation',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L5 Skin Physiology' },
    { kind: 'mechanism', label: 'Barrier, thermoregulation, vitamin D' },
    { kind: 'exam', label: 'Sweating, vasomotor control' },
  ],

  highYield: [
    'Skin functions: BARRIER (against water loss, chemicals, microbes, UV), THERMOREGULATION, SENSATION, VITAMIN D synthesis, and immune defence. The BARRIER is the stratum corneum — corneocytes in a lipid ("brick and mortar") matrix; its failure (as in eczema/filaggrin deficiency) causes water loss and allergen/microbe entry. Skin also limits water loss (transepidermal water loss).',
    'THERMOREGULATION is controlled by the HYPOTHALAMUS via the skin\'s blood flow and sweat glands. To LOSE heat: cutaneous VASODILATION (more warm blood to the surface → radiation) and ECCRINE SWEATING (evaporative cooling — sympathetic CHOLINERGIC control, the autonomic exception). To CONSERVE heat: cutaneous VASOCONSTRICTION, reduced sweating, and shivering/piloerection (arrector pili).',
    'Cutaneous blood flow is highly variable and includes ARTERIOVENOUS ANASTOMOSES (especially in acral skin — fingers, toes, ears, nose) that shunt blood to dump or conserve heat. Because skin blood flow can be very high, it contributes to blood-pressure/volume regulation; extensive skin loss (burns) causes major fluid, heat and barrier loss.',
    'VITAMIN D: UVB converts 7-dehydrocholesterol in the epidermis to cholecalciferol (vitamin D3) → hydroxylated in liver then kidney to active calcitriol; sun avoidance/dark skin/sunscreen reduce synthesis. SENSATION uses dermal receptors (Meissner, Pacinian, Merkel, free nerve endings). Sweat also excretes water/electrolytes; heavy sweating without replacement → dehydration/heat illness.',
    '**The take-home: skin = barrier (stratum corneum, prevents water loss/entry) + thermoregulation (hypothalamus → vasodilation & eccrine sweating to lose heat, vasoconstriction to conserve; sweating is sympathetic-CHOLINERGIC) + vitamin D (UVB) + sensation. Barrier failure underlies eczema.** The barrier/gland anatomy is in [[skin-anatomy-histology]]; the sympathetic-cholinergic sweat exception ties to BCP ([[cholinergic-drugs]]) and HNS-1 autonomic ([[autonomic-nervous-system]]).',
  ],

  mechanism: {
    title: 'Barrier (stratum corneum) + thermoregulation (hypothalamus → vasodilation/eccrine sweat vs vasoconstriction) + vitamin D (UVB)',
    steps: [
      { id: 's1', label: 'Barrier = stratum corneum "brick and mortar"; failure → water loss + allergen/microbe entry', emphasis: 'key' },
      { id: 's2', label: 'Hypothalamus controls skin blood flow + sweat for thermoregulation', emphasis: 'key' },
      { id: 's3', label: 'Lose heat: cutaneous vasodilation + eccrine sweating (evaporation)', emphasis: 'key' },
      { id: 's4', label: 'Eccrine sweat = SYMPATHETIC but CHOLINERGIC (autonomic exception)', emphasis: 'key' },
      { id: 's5', label: 'Conserve heat: vasoconstriction (AV anastomoses), piloerection; vitamin D from UVB' },
    ],
  },

  examFindings: [
    { sign: 'Dry, itchy skin with increased transepidermal water loss', mechanism: 'Barrier (stratum corneum/filaggrin) dysfunction', significance: 'key' },
    { sign: 'Flushing and sweating in a hot environment', mechanism: 'Heat-loss: cutaneous vasodilation + eccrine sweating', significance: 'key' },
    { sign: 'Pale, cool skin and shivering in the cold', mechanism: 'Heat conservation: vasoconstriction + shivering', significance: 'key' },
    { sign: 'Sweating blocked by antimuscarinic drugs', mechanism: 'Eccrine glands are sympathetic-cholinergic', significance: 'supportive' },
    { sign: 'Vitamin D deficiency with strict sun avoidance', mechanism: 'Reduced UVB-driven cutaneous synthesis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The skin structure providing the permeability barrier', meaning: 'The stratum corneum' },
    { clue: 'The two skin mechanisms to lose heat', meaning: 'Cutaneous vasodilation and eccrine sweating' },
    { clue: 'The autonomic peculiarity of eccrine sweat glands', meaning: 'Sympathetic innervation but cholinergic (muscarinic) transmitter' },
    { clue: 'The vitamin synthesised in skin by UVB', meaning: 'Vitamin D (cholecalciferol)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Skin physiology explains disease and management: barrier failure underlies eczema and drives emollient therapy ([[eczema-dermatitis]]); thermoregulatory vasodilation/sweating and their failure underlie heat illness and the effects of extensive skin loss (burns → fluid/heat loss). The sympathetic-cholinergic sweat gland is the autonomic exception (relevant to antimuscarinic side-effects — [[cholinergic-drugs]], [[autonomic-nervous-system]]); vitamin D synthesis links sun exposure to bone health, balanced against skin-cancer risk ([[skin-aging]]).' },
  ],

  mnemonics: [
    { hook: '"Hot → vasodilate + sweat (lose); Cold → vasoconstrict + shiver (conserve)"', expansion: ['Hypothalamus is the thermostat', 'AV anastomoses in acral skin'] },
    { hook: 'Sweat glands = "sympathetic wiring, cholinergic transmitter" (the exception)', expansion: ['Barrier = stratum corneum', 'Vitamin D from UVB'] },
  ],

  traps: [
    {
      questionCategory: 'Autonomic control of eccrine sweat glands',
      wrongInstinct: 'Because sweating is a sympathetic response, eccrine glands must be driven by noradrenaline like other sympathetic targets',
      rightAnswer: 'Eccrine sweat glands are innervated by the SYMPATHETIC system but use ACETYLCHOLINE (muscarinic) as the transmitter — the classic "sympathetic cholinergic" exception — which is why ANTIMUSCARINIC (anticholinergic) drugs reduce sweating and cause the "dry" anticholinergic toxidrome',
      why: 'This exception explains anhidrosis with anticholinergics and hyperhidrosis treatments, and is a recurring autonomic-pharmacology point despite sweating being a sympathetic function.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'To dissipate heat in a hot environment, the skin responds primarily by:',
      options: [
        { id: 'a', text: 'Cutaneous vasoconstriction and reduced sweating' },
        { id: 'b', text: 'Cutaneous vasodilation and eccrine sweating (evaporative cooling)' },
        { id: 'c', text: 'Piloerection and shivering' },
        { id: 'd', text: 'Increasing vitamin D synthesis' },
      ],
      answerId: 'b',
      explanation: 'Heat loss is achieved by cutaneous vasodilation (delivering warm blood to the surface for radiation) and eccrine sweating (evaporative cooling), both under hypothalamic control. Vasoconstriction, piloerection and shivering are heat-conservation/generation responses to cold.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Eccrine sweat glands are unusual in the autonomic nervous system because they are:',
      options: [
        { id: 'a', text: 'Parasympathetically innervated' },
        { id: 'b', text: 'Sympathetically innervated but use acetylcholine (cholinergic)' },
        { id: 'c', text: 'Not innervated at all' },
        { id: 'd', text: 'Controlled only by circulating adrenaline' },
      ],
      answerId: 'b',
      explanation: 'Eccrine sweat glands receive sympathetic fibres but, exceptionally, use acetylcholine acting on muscarinic receptors ("sympathetic cholinergic"). This is why antimuscarinic drugs reduce sweating and why sweating is blocked in the anticholinergic toxidrome.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default skinPhysiologyThermoregulation;
