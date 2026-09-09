import type { Lecture } from '../../lib/types';

export const ghpCardiacOutputMeasurement: Lecture = {
  id: 'ghp-cardiac-output-measurement',
  title: 'Measuring Cardiac Output: Fick & Indicator Dilution',
  system: 'cardiovascular',
  source: 'Ch 20 — Cardiac Output, Venous Return & Their Regulation',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 20 Cardiac Output & Venous Return' },
    { kind: 'mechanism', label: 'Tracer conservation' },
    { kind: 'investigation', label: 'Fick, dye and thermodilution' },
  ],

  highYield: [
    '**The Fick principle: uptake of a substance by an organ = blood flow × the arteriovenous concentration difference across it.** Applied to the whole body with oxygen as the tracer, **CO = O₂ consumption ÷ (arterial O₂ content − mixed venous O₂ content)**. The standard numbers: **250 mL O₂/min ÷ (200 − 160 mL O₂ per litre) = 250 ÷ 40 = ~6.25 L/min**. A **normal whole-body extraction of ~25%** puts mixed venous saturation at ~**75%**.',
    '**Mixed venous blood MUST be sampled from the pulmonary artery** (or right ventricle) — never a peripheral or central vein. SVC, IVC and coronary sinus streams have very different saturations, and **coronary sinus blood is the most desaturated in the body (~30%)** because myocardium extracts ~70% at rest. A right-atrial sample has not yet mixed, and a **left-to-right shunt** (a step-up in saturation between chambers) invalidates the calculation altogether.',
    '**Falling mixed venous saturation at constant oxygen consumption means cardiac output has fallen.** Rearranging Fick, if VO₂ is fixed and CO drops, the tissues must widen the AV difference — so **SvO₂ is a continuous, indirect cardiac output monitor**, dropping toward 50% and below in low-output shock.',
    '**Indicator dilution: CO = amount of indicator injected ÷ (mean concentration × duration of the curve).** Inject a known dose upstream, record the downstream concentration-time curve, and read it in reverse: **the area under the curve varies INVERSELY with cardiac output**. A tall, wide, slow-decaying curve means **low** flow; a small, sharp, early curve means high flow.',
    '**Recirculation corrupts the tail** — indicator completes a circuit and returns as a second hump before the first pass has decayed. The fix is to **replot the downslope semilogarithmically, where the true washout is a straight line, and extrapolate that exponential to zero**, ignoring the recirculation hump. **Thermodilution sidesteps this entirely** because its indicator is cold, which is dissipated to tissue rather than recirculated.',
    '**Bedside thermodilution**: cold saline into the right atrium, thermistor in the pulmonary artery (Swan–Ganz). It is invalidated by **tricuspid regurgitation and intracardiac shunts**. **Fick is most accurate at LOW outputs** (a wide AV difference is easy to measure precisely) and dilution methods at higher ones. Non-invasive alternatives: **Doppler echo (LVOT area × velocity–time integral × heart rate)** and pulse-contour analysis; **electromagnetic and ultrasonic flowmeters** measure aortic flow directly in the laboratory.',
  ],

  mechanism: {
    title: 'Conserve the tracer: dilution reports the flow that did the diluting',
    steps: [
      { id: 's1', label: 'Deliver a known tracer load — O₂ consumed per minute, or a bolus of dye or cold' },
      { id: 's2', label: 'Measure how much the blood dilutes it downstream', emphasis: 'key' },
      { id: 's3', label: 'Large dilution means large flow; small dilution means small flow', emphasis: 'key' },
      { id: 's4', label: 'Fick: 250 mL O₂/min ÷ 40 mL O₂ per litre = ~6.25 L/min', emphasis: 'key' },
      { id: 's5', label: 'Dilution: dose injected ÷ (mean concentration × curve duration)' },
      { id: 's6', label: 'Strip recirculation from the dye curve by semilog extrapolation of the downslope' },
    ],
  },

  examFindings: [
    { sign: 'Mixed venous saturation of ~75% in the pulmonary artery', mechanism: 'Normal whole-body extraction of about a quarter of delivered oxygen', significance: 'key' },
    { sign: 'Mixed venous saturation falling to 50% with unchanged oxygen consumption', mechanism: 'Cardiac output has fallen, so each litre must give up more oxygen', significance: 'key' },
    { sign: 'A tall, wide, slowly decaying indicator-dilution curve', mechanism: 'Low cardiac output — area under the curve varies inversely with flow', significance: 'key' },
    { sign: 'A step-up in oxygen saturation between right atrium and pulmonary artery', mechanism: 'A left-to-right shunt, which invalidates a Fick estimate of systemic output', significance: 'key' },
    { sign: 'A second hump on the descending limb of a dye curve', mechanism: 'Recirculation of indicator; the curve needs semilog extrapolation before integration', significance: 'supportive' },
    { sign: 'Erratic, non-reproducible thermodilution values', mechanism: 'Severe tricuspid regurgitation recycling the cold indicator across the valve', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Oxygen consumption divided by the arteriovenous oxygen content difference', meaning: 'Fick cardiac output — the reference method, most accurate at low outputs' },
    { clue: 'An indocyanine green concentration-time curve sampled from a peripheral artery', meaning: 'Indicator-dilution cardiac output' },
    { clue: 'Cold saline injected into the right atrium with a pulmonary-artery thermistor', meaning: 'Thermodilution cardiac output via a Swan–Ganz catheter' },
    { clue: 'LVOT cross-sectional area multiplied by velocity-time integral and heart rate', meaning: 'Doppler echocardiographic cardiac output — non-invasive and repeatable' },
    { clue: 'Cardiac output divided by body surface area', meaning: 'Cardiac index, ~3 L/min/m² — the size-corrected value' },
    { clue: 'Continuous pulmonary-artery oximetry', meaning: 'Mixed venous saturation as a surrogate trend for cardiac output at fixed oxygen consumption' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Every one of these methods is the same equation read from a different direction, so knowing which term is measured tells you which pathology breaks it — a shunt breaks Fick, tricuspid regurgitation breaks thermodilution, recirculation breaks dye. The physiology the number belongs to: [[ghp-cardiac-output-venous-return-curves]]; the oxygen content that fills the Fick denominator: [[oxygen-transport-dissociation-curve]].' },
    { logic: 'Reading the number clinically', detail: 'Output alone is uninterpretable without a filling pressure and an extraction figure; a low output with high filling pressure and low mixed venous saturation is pump failure, a low output with low filling pressure is inadequate return. Applied: [[cardiogenic-shock]], [[ghp-shock-treatment-physiology]]; the upstream driving pressure: [[ghp-mean-systemic-filling-pressure]].' },
  ],

  mnemonics: [
    { hook: 'Fick: what the body BURNS over what each litre GIVES UP', expansion: ['Numerator = oxygen consumption per minute (250 mL)', 'Denominator = arterial minus mixed venous content (40 mL per litre)', 'Answer = litres per minute'] },
    { hook: 'Big Area = Bad Output', expansion: ['Dilution curve area varies INVERSELY with flow', 'Tall, wide and slow means low cardiac output', 'Small and sharp means high cardiac output'] },
    { hook: 'Mixed means pulmonary artery', expansion: ['SVC, IVC and coronary sinus all differ', 'Coronary sinus is the most desaturated blood in the body (~30%)', 'Only past the right ventricle is the blood truly mixed'] },
  ],

  traps: [
    {
      questionCategory: 'Sampling site for mixed venous blood',
      wrongInstinct: 'A central line sitting in the superior vena cava provides mixed venous blood',
      rightAnswer: 'Only pulmonary artery (or right ventricular) blood is genuinely mixed',
      why: 'Coronary sinus blood at ~30% saturation joins in the right atrium, so an SVC sample systematically overestimates mixed venous oxygen.',
    },
    {
      questionCategory: 'Direction of the dilution curve area',
      wrongInstinct: 'A bigger area under the indicator-dilution curve means a bigger cardiac output',
      rightAnswer: 'Area varies inversely with output — a large, prolonged curve indicates LOW flow',
      why: 'The same dose diluted by fewer litres per minute produces a higher, longer-lasting concentration.',
    },
    {
      questionCategory: 'Interpreting a low mixed venous saturation',
      wrongInstinct: 'A low SvO₂ always means a low arterial oxygen content or lung disease',
      rightAnswer: 'At fixed consumption it most often means a low cardiac output, forcing greater extraction per litre',
      why: 'Fick has four terms; a fall in SvO₂ can come from lower output, lower arterial content, or higher consumption.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Oxygen consumption is 250 mL/min, arterial oxygen content is 200 mL/L and pulmonary artery blood contains 150 mL/L. What is the cardiac output?',
      options: [
        { id: 'a', text: '2.5 L/min' },
        { id: 'b', text: '5.0 L/min' },
        { id: 'c', text: '6.25 L/min' },
        { id: 'd', text: '12.5 L/min' },
      ],
      answerId: 'b',
      explanation: 'Fick: output = 250 mL/min divided by an arteriovenous difference of 50 mL/L, which is 5 L/min. Option c uses the textbook AV difference of 40 mL/L rather than the 50 given here, and the other two come from multiplying or halving incorrectly.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'For a Fick cardiac output determination, the venous sample must be drawn from the pulmonary artery rather than the superior vena cava because:',
      options: [
        { id: 'a', text: 'Pulmonary artery blood has already been oxygenated by the lungs' },
        { id: 'b', text: 'Coronary sinus and inferior caval blood have very different saturations, so mixing is only complete beyond the right ventricle' },
        { id: 'c', text: 'Superior caval blood is contaminated by lymphatic drainage' },
        { id: 'd', text: 'Pulmonary artery blood has the highest oxygen content in the venous circulation' },
      ],
      answerId: 'b',
      explanation: 'Regional extraction differs enormously — coronary sinus blood is roughly 30% saturated after ~70% myocardial extraction, renal venous blood is nearly arterial — so only after churning through the right atrium and ventricle is the sample representative of the whole body. Pulmonary artery blood is deoxygenated, not oxygenated (a).',
      tests: 'investigation',
    },
    {
      id: 'q3',
      stem: 'A dye-dilution curve shows a second rise before the first has returned to baseline. The correct handling is to:',
      options: [
        { id: 'a', text: 'Average the two peaks and use the mean concentration' },
        { id: 'b', text: 'Discard the study, since recirculation makes the method invalid' },
        { id: 'c', text: 'Replot the downslope semilogarithmically and extrapolate the straight-line decay to zero' },
        { id: 'd', text: 'Add the areas of both humps to obtain total indicator passage' },
      ],
      answerId: 'c',
      explanation: 'Recirculation is expected, not a failure of the method: the true first-pass washout is exponential, so it becomes a straight line on a semilog plot and can be extrapolated beneath the recirculation hump. Including the second hump (a, d) would inflate the area and falsely lower the calculated output.',
      tests: 'investigation',
    },
  ],
};

export default ghpCardiacOutputMeasurement;
