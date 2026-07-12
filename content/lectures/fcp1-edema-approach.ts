import type { Lecture } from '../../lib/types';

export const fcp1EdemaApproach: Lecture = {
  id: 'fcp1-edema-approach',
  title: 'Clinical Approach to Edema',
  system: 'clinical',
  source: 'L8 — Edema',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L8 Edema' },
    { kind: 'disease', label: 'Cardiac · renal · hepatic · DVT' },
    { kind: 'investigation', label: 'Urinalysis · albumin · Doppler' },
    { kind: 'treatment', label: 'Treat the cause' },
  ],

  highYield: [
    '**Sort every edema on two axes: pitting vs non-pitting, and unilateral vs bilateral.** These two questions channel a huge differential into a short list and drive the tests — building on the mechanisms → [[fcp1-edema-mechanisms]].',
    '**Bilateral/generalised edema = systemic cause:** **cardiac** (heart failure with raised JVP, orthopnoea, basal crackles → [[fcp1-dyspnea-approach]]); **renal** (nephrotic with periorbital edema and heavy proteinuria, or renal failure with sodium retention); **hepatic** (cirrhosis with ascites and stigmata → [[fcp1-jaundice-approach]]); **hypoalbuminaemia/malnutrition**; and **drugs** (amlodipine and other calcium-channel blockers, NSAIDs, glitazones, steroids). In pregnancy consider pre-eclampsia.',
    '**Unilateral edema = localised cause — and the cannot-miss is DVT:** an acute, painful, swollen calf is a **deep vein thrombosis** at risk of pulmonary embolism → [[fcp1-dyspnea-differential]]. Other causes are cellulitis (hot, red, tender, febrile), chronic venous insufficiency (haemosiderin staining), lymphedema (non-pitting), and a ruptured Baker cyst.',
    '**Non-pitting edema** narrows to lymphedema or **myxedema** (check thyroid function) → [[fcp1-hypothyroidism]]. **Angioedema of the lips/tongue with airway compromise is an emergency** requiring adrenaline and airway management.',
    '**Targeted tests follow the pattern:** urinalysis for proteinuria, serum albumin and renal function, LFTs, and BNP/echocardiography for a cardiac cause; for a suspected DVT use the **Wells score with D-dimer and compression ultrasound**; check TFTs when the edema is non-pitting.',
  ],

  mechanism: {
    title: 'A two-axis bedside algorithm',
    steps: [
      { id: 's1', label: 'Ask: pitting or non-pitting? unilateral or bilateral?', emphasis: 'key' },
      { id: 's2', label: 'Bilateral → cardiac / renal / hepatic / hypoalbuminaemia / drugs', emphasis: 'normal' },
      { id: 's3', label: 'Unilateral → DVT, cellulitis, venous insufficiency, lymphedema', emphasis: 'normal' },
      { id: 's4', label: 'Flag emergencies: DVT→PE, airway angioedema, pre-eclampsia', emphasis: 'danger' },
      { id: 's5', label: 'Targeted tests: urinalysis, albumin, echo/BNP, Doppler ultrasound', emphasis: 'normal' },
    ],
  },

  examFindings: [
    { sign: 'Unilateral tender calf with increased circumference', mechanism: 'Deep vein thrombosis', significance: 'key' },
    { sign: 'Raised JVP + bibasal crackles + bilateral pitting edema', mechanism: 'Heart failure (raised hydrostatic pressure)', significance: 'key' },
    { sign: 'Periorbital edema with frothy urine', mechanism: 'Nephrotic syndrome (hypoalbuminaemia)', significance: 'supportive' },
    { sign: 'Ascites, spider naevi and shifting dullness', mechanism: 'Chronic liver disease', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Dipstick heavy proteinuria', meaning: 'Nephrotic/renal cause of generalised edema' },
    { clue: 'Raised Wells score with elevated D-dimer', meaning: 'Proceed to compression ultrasound for DVT' },
    { clue: 'Low serum albumin', meaning: 'Oncotic cause — nephrotic, cirrhosis or malnutrition' },
    { clue: 'Raised BNP with abnormal echocardiogram', meaning: 'Cardiac cause (heart failure)' },
  ],

  treatment: [
    { logic: 'Treat the underlying systemic disease', detail: 'Diuretics plus disease-specific therapy for cardiac, renal or hepatic edema; manage sodium and fluid balance.' },
    { logic: 'Cause-specific action for localised edema', detail: 'Anticoagulate a DVT, give antibiotics for cellulitis, and manage airway angioedema with adrenaline.' },
    { logic: 'Elevation and compression for venous/lymphatic edema', detail: 'Helpful when the cause is venous or lymphatic, but confirm arterial supply is adequate before compressing.' },
  ],

  mnemonics: [
    { hook: 'Two axes: PIT vs no-pit, and ONE leg vs BOTH', expansion: ['Both legs → systemic (cardiac/renal/hepatic)', 'One leg → local; exclude DVT first'] },
  ],

  traps: [
    {
      questionCategory: 'Unilateral leg swelling',
      wrongInstinct: 'Treat a hot swollen calf as cellulitis and start antibiotics only',
      rightAnswer: 'Consider DVT in any acute unilateral leg swelling — apply a Wells score and image before anchoring on cellulitis',
      why: 'A missed DVT can embolise to the lungs; the two can look similar, so DVT must be actively excluded.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 60-year-old presents with acute painful swelling of the right calf that is 4 cm larger than the left, three weeks after a long-haul flight. The most appropriate next step is:',
      options: [
        { id: 'a', text: 'Start diuretics for presumed heart failure' },
        { id: 'b', text: 'Calculate a Wells score and arrange compression ultrasound to exclude DVT' },
        { id: 'c', text: 'Reassure and prescribe compression stockings only' },
        { id: 'd', text: 'Check thyroid function for myxedema' },
      ],
      answerId: 'b',
      explanation: 'Acute unilateral calf swelling with a recent immobility risk factor is a DVT until proven otherwise. Risk stratification with a Wells score plus D-dimer or compression ultrasound is the correct next step, because of the risk of pulmonary embolism.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A patient has bilateral pitting leg edema, a raised JVP, orthopnoea and bibasal crackles. The most likely mechanism is:',
      options: [
        { id: 'a', text: 'Lymphatic obstruction' },
        { id: 'b', text: 'Increased capillary hydrostatic pressure from heart failure' },
        { id: 'c', text: 'Reduced oncotic pressure from nephrotic syndrome' },
        { id: 'd', text: 'Increased capillary permeability from sepsis' },
      ],
      answerId: 'b',
      explanation: 'Bilateral pitting edema with a raised JVP, orthopnoea and basal crackles indicates heart failure, where raised venous and capillary hydrostatic pressure drives fluid into the interstitium.',
      tests: 'disease',
    },
  ],
};

export default fcp1EdemaApproach;
