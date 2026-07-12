import type { Lecture } from '../../lib/types';

export const fcp1EdemaMechanisms: Lecture = {
  id: 'fcp1-edema-mechanisms',
  title: 'Edema: Mechanisms & Starling Forces',
  system: 'clinical',
  source: 'L8 — Edema',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L8 Edema' },
    { kind: 'mechanism', label: 'Starling forces' },
    { kind: 'disease', label: 'Generalised vs localised' },
    { kind: 'investigation', label: 'Pitting vs non-pitting' },
  ],

  highYield: [
    '**Edema is excess interstitial fluid, governed by the Starling balance:** filtration out of the capillary is driven by **capillary hydrostatic pressure** and opposed by **plasma oncotic (albumin) pressure**, with the **lymphatics** draining the excess. Tip any one of these and fluid accumulates. This underpins the bedside approach → [[fcp1-edema-approach]].',
    '**Four mechanisms — learn them as the differential:** (1) **raised capillary hydrostatic pressure** (heart failure, venous obstruction/DVT, renal sodium and water retention); (2) **reduced plasma oncotic pressure** from hypoalbuminaemia (nephrotic syndrome, cirrhosis, malnutrition/protein loss → [[fcp1-malnutrition-evaluation]]); (3) **increased capillary permeability** (inflammation, sepsis, burns, angioedema); (4) **lymphatic obstruction** (filariasis, malignancy, post-surgical or post-radiation).',
    '**The mechanism predicts the physical sign.** Fluid-driven edema (hydrostatic or oncotic) is **pitting**. **Lymphedema** (protein-rich) and **myxedema** (hypothyroid mucopolysaccharide) are **non-pitting** → [[fcp1-hypothyroidism]].',
    '**Effective circulating volume ties it together.** In heart failure, cirrhosis and nephrotic syndrome the effective arterial volume falls, activating the **renin-angiotensin-aldosterone system**, so the kidney retains sodium and water — which amplifies the edema even when total body fluid is already high.',
    '**Generalised vs localised is the first fork:** generalised edema (anasarca) implies a systemic cause (cardiac, renal, hepatic, hypoalbuminaemic), whereas localised edema implies a regional problem (DVT, cellulitis, venous insufficiency, lymphatic obstruction).',
  ],

  mechanism: {
    title: 'How the Starling balance is tipped',
    steps: [
      { id: 's1', label: 'Baseline: filtration (hydrostatic) vs reabsorption (oncotic) + lymphatic drainage', emphasis: 'key' },
      { id: 's2', label: 'Raised hydrostatic pressure (heart failure, venous obstruction, Na retention)', emphasis: 'normal' },
      { id: 's3', label: 'Reduced oncotic pressure (nephrotic, cirrhosis, malnutrition)', emphasis: 'normal' },
      { id: 's4', label: 'Increased permeability (inflammation, sepsis, burns, angioedema)', emphasis: 'danger' },
      { id: 's5', label: 'Lymphatic obstruction → non-pitting, protein-rich lymphedema', emphasis: 'normal' },
    ],
  },

  examFindings: [
    { sign: 'Pitting edema (indentation persists)', mechanism: 'Excess free fluid from a hydrostatic or oncotic problem', significance: 'key' },
    { sign: 'Non-pitting edema with skin thickening', mechanism: 'Protein-rich lymphedema or myxedema', significance: 'key' },
    { sign: 'Periorbital edema, worst on waking', mechanism: 'Hypoalbuminaemia (nephrotic syndrome)', significance: 'supportive' },
    { sign: 'Raised JVP accompanying the edema', mechanism: 'Volume overload / cardiac hydrostatic cause', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Low serum albumin with heavy proteinuria', meaning: 'Reduced oncotic pressure (nephrotic syndrome)' },
    { clue: 'Raised JVP with bilateral pitting edema', meaning: 'Raised hydrostatic pressure (cardiac cause)' },
    { clue: 'Unilateral limb edema', meaning: 'A localised process (DVT, venous or lymphatic)' },
    { clue: 'Non-pitting edema with a raised TSH', meaning: 'Myxedema from hypothyroidism → [[fcp1-hypothyroidism]]' },
  ],

  treatment: [
    { logic: 'Target the responsible Starling force', detail: 'Diuresis for hydrostatic overload; restore albumin and treat the underlying disease for oncotic loss.' },
    { logic: 'Treat localised causes at their source', detail: 'Anticoagulate a DVT; use compression and skin care for lymphedema; manage inflammation/allergy for permeability edema.' },
  ],

  mnemonics: [
    { hook: 'HOLE: Hydrostatic up, Oncotic down, Leaky capillary, lymphatic Emptying blocked', expansion: ['Fluid causes pit; protein-rich causes do not', 'RAAS activation amplifies systemic edema'] },
  ],

  traps: [
    {
      questionCategory: 'Pitting vs non-pitting',
      wrongInstinct: 'All leg swelling is fluid overload needing diuretics',
      rightAnswer: 'Non-pitting edema points to lymphatic obstruction or myxedema, which diuretics will not fix',
      why: 'The pitting quality separates free-fluid mechanisms from protein-rich ones and changes the treatment entirely.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A child with nephrotic syndrome develops generalised pitting edema and periorbital puffiness. The primary Starling abnormality responsible is:',
      options: [
        { id: 'a', text: 'Increased capillary hydrostatic pressure' },
        { id: 'b', text: 'Reduced plasma oncotic pressure from hypoalbuminaemia' },
        { id: 'c', text: 'Increased capillary permeability from inflammation' },
        { id: 'd', text: 'Lymphatic obstruction' },
      ],
      answerId: 'b',
      explanation: 'Heavy urinary protein loss lowers serum albumin, reducing plasma oncotic pressure so fluid filters into the interstitium — the mechanism of nephrotic edema, which is pitting and often periorbital.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which mechanism characteristically produces non-pitting, protein-rich edema?',
      options: [
        { id: 'a', text: 'Raised venous hydrostatic pressure' },
        { id: 'b', text: 'Hypoalbuminaemia' },
        { id: 'c', text: 'Lymphatic obstruction' },
        { id: 'd', text: 'Renal sodium retention' },
      ],
      answerId: 'c',
      explanation: 'Lymphatic obstruction prevents drainage of protein-rich interstitial fluid, producing non-pitting edema (lymphedema). Hydrostatic and oncotic mechanisms produce pitting, protein-poor edema.',
      tests: 'mechanism',
    },
  ],
};

export default fcp1EdemaMechanisms;
