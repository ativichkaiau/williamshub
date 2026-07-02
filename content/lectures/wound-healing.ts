import type { Lecture } from '../../lib/types';

export const woundHealing: Lecture = {
  id: 'wound-healing',
  title: 'Wound Healing',
  system: 'derm',
  source: 'L6 — Wound Healing',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L6 Wound Healing' },
    { kind: 'mechanism', label: 'Haemostasis → inflammation → proliferation → remodelling' },
    { kind: 'exam', label: 'Primary vs secondary intention; scars' },
  ],

  highYield: [
    '**Wound healing proceeds through FOUR overlapping phases: (1) HAEMOSTASIS (immediate — vasoconstriction, platelet plug, fibrin clot); (2) INFLAMMATION (days — neutrophils then MACROPHAGES clear debris and orchestrate repair); (3) PROLIFERATION (GRANULATION tissue with new vessels [angiogenesis], fibroblasts laying type III collagen, and re-epithelialisation from wound edges/appendages); (4) REMODELLING/MATURATION (weeks–months — type III collagen replaced by stronger type I; a mature scar reaches only ~70–80% of original tensile strength).**',
    '**Healing occurs by PRIMARY intention (clean, apposed edges — e.g. sutured surgical wound → minimal scar, fast) or SECONDARY intention (large/contaminated wounds left open → heal from the base up by granulation, contraction and re-epithelialisation → more scarring, slower). TERTIARY (delayed primary) closure is used for contaminated wounds closed after a delay.**',
    '**Healing FAILS or is abnormal with: local factors (INFECTION — the commonest cause of delayed healing, ischaemia/poor perfusion, foreign body, pressure, oedema) and systemic factors (DIABETES, poor nutrition — especially VITAMIN C for collagen cross-linking and protein/zinc, smoking, corticosteroids/immunosuppression, old age). CHRONIC WOULDS (venous/arterial/diabetic/pressure ulcers) are stuck in inflammation.**',
    '**Abnormal scars: a HYPERTROPHIC scar stays WITHIN the wound margins and may regress; a KELOID extends BEYOND the original wound margins, does not regress, and recurs after excision (commoner in darker skin, earlobes/chest/shoulders). Wound CONTRACTION (myofibroblasts) can cause disabling contractures across joints; excess granulation = "proud flesh".**',
    '**The take-home: haemostasis → inflammation (macrophages) → proliferation (granulation, angiogenesis, collagen III, re-epithelialisation) → remodelling (collagen III→I, ~80% strength); primary vs secondary intention; INFECTION is the main cause of delayed healing; hypertrophic scar stays within, KELOID extends beyond margins.** Collagen types come from connective-tissue biology; nutritional factors (vitamin C) link to metabolism; the skin layers repaired are in [[skin-anatomy-histology]].',
  ],

  mechanism: {
    title: 'Haemostasis → inflammation (macrophages) → proliferation (granulation/collagen III) → remodelling (→collagen I, ~80% strength)',
    steps: [
      { id: 's1', label: 'Haemostasis: vasoconstriction, platelet plug, fibrin clot', emphasis: 'key' },
      { id: 's2', label: 'Inflammation: neutrophils → macrophages (debride + orchestrate)', emphasis: 'key' },
      { id: 's3', label: 'Proliferation: granulation tissue (angiogenesis), fibroblasts/collagen III, re-epithelialisation', emphasis: 'key' },
      { id: 's4', label: 'Remodelling: collagen III → stronger type I; scar ~70–80% tensile strength', emphasis: 'key' },
      { id: 's5', label: 'Delayed by infection (commonest), diabetes, ischaemia, steroids, poor nutrition (vit C)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Clean sutured wound healing fast with a fine scar', mechanism: 'Primary intention', significance: 'key' },
    { sign: 'Open contaminated wound healing from the base by granulation and contraction', mechanism: 'Secondary intention', significance: 'key' },
    { sign: 'A firm scar extending beyond the original wound margins that recurs after excision', mechanism: 'Keloid', significance: 'key' },
    { sign: 'A raised scar confined to the wound margins that may regress', mechanism: 'Hypertrophic scar', significance: 'key' },
    { sign: 'Chronic non-healing wound in a diabetic foot', mechanism: 'Impaired healing (neuropathy, ischaemia, infection)', significance: 'key' },
  ],

  investigations: [
    { clue: 'The four phases of wound healing in order', meaning: 'Haemostasis → inflammation → proliferation → remodelling' },
    { clue: 'The cell central to the inflammatory/repair phase', meaning: 'The macrophage' },
    { clue: 'The commonest cause of delayed wound healing', meaning: 'Infection' },
    { clue: 'The scar that extends beyond the original wound margins', meaning: 'A keloid' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Understanding the phases guides wound care: ensure haemostasis, control infection (the main cause of delay), debride, optimise perfusion/nutrition (protein, vitamin C, zinc) and glycaemic control, and choose closure by intention. Recognising hypertrophic scars vs keloids guides prognosis and treatment (steroid injection, pressure, silicone). Chronic wounds (venous/arterial/diabetic/pressure) are stuck in inflammation and need cause-directed care; the repaired skin architecture is in [[skin-anatomy-histology]].' },
  ],

  mnemonics: [
    { hook: 'Phases: "Healthy Individuals Prefer Recovery" — Haemostasis, Inflammation, Proliferation, Remodelling', expansion: ['Macrophage = key repair cell', 'Collagen III → I in remodelling'] },
    { hook: '"Hypertrophic stays Home (within margins); Keloid Keeps going (beyond, recurs)"', expansion: ['Keloid commoner in darker skin', 'Scar ≈ 80% strength'] },
  ],

  traps: [
    {
      questionCategory: 'Hypertrophic scar vs keloid',
      wrongInstinct: 'Hypertrophic scars and keloids are the same thing',
      rightAnswer: 'They differ by BOUNDARY and behaviour: a HYPERTROPHIC scar remains CONFINED to the original wound margins and often REGRESSES over time, whereas a KELOID grows BEYOND the wound margins, does NOT regress, and characteristically RECURS after excision (and is commoner in darker skin) — so keloids are treated non-surgically first (intralesional steroid, pressure, silicone)',
      why: 'The margin distinction predicts recurrence and treatment: excising a keloid alone tends to make it recur/worse, so recognising it (vs a hypertrophic scar) changes management.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'During the proliferative phase of wound healing, the new connective tissue with capillaries and fibroblasts that fills the wound is called:',
      options: [
        { id: 'a', text: 'A fibrin clot' },
        { id: 'b', text: 'Granulation tissue' },
        { id: 'c', text: 'A keloid' },
        { id: 'd', text: 'Eschar' },
      ],
      answerId: 'b',
      explanation: 'Granulation tissue — new capillaries (angiogenesis), fibroblasts and type III collagen with macrophages — fills the wound during the proliferative phase, providing the bed for re-epithelialisation. It is later remodelled (type III → type I collagen) in the maturation phase.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A scar that extends beyond the boundaries of the original wound, does not regress and recurs after excision is a:',
      options: [
        { id: 'a', text: 'Hypertrophic scar' },
        { id: 'b', text: 'Keloid' },
        { id: 'c', text: 'Atrophic scar' },
        { id: 'd', text: 'Contracture' },
      ],
      answerId: 'b',
      explanation: 'A keloid extends beyond the original wound margins, does not regress, and tends to recur (often worse) after simple excision — unlike a hypertrophic scar, which stays within the wound margins and may regress. Keloids are managed with intralesional steroids, pressure and silicone.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default woundHealing;
