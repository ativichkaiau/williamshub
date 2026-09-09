import type { Lecture } from '../../lib/types';

export const ghpLungVolumesDeadSpace: Lecture = {
  id: 'ghp-lung-volumes-dead-space',
  title: 'Lung Volumes, Capacities & Dead Space',
  system: 'respiratory',
  source: 'Ch 37 — Pulmonary Ventilation',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'Ch 37 Pulmonary Ventilation' },
    { kind: 'mechanism', label: 'Alveolar ventilation equation' },
    { kind: 'investigation', label: 'Spirometry and FRC measurement' },
  ],

  highYield: [
    '**Four volumes, and they never overlap.** **Tidal volume (TV) ≈ 500 mL** — one quiet breath. **Inspiratory reserve volume (IRV) ≈ 3000 mL** — what you can still draw in on top of a tidal breath. **Expiratory reserve volume (ERV) ≈ 1100 mL** — what you can still force out after a tidal breath. **Residual volume (RV) ≈ 1200 mL** — what is left after maximal expiration and can never be exhaled. Together they make a **total lung capacity of about 5800 mL** in the average young man, roughly **20 to 25% less in women**.',
    '**Four capacities, each a sum of two or more volumes.** **Inspiratory capacity = TV + IRV ≈ 3500 mL. Functional residual capacity (FRC) = ERV + RV ≈ 2300 mL. Vital capacity = IRV + TV + ERV ≈ 4600 mL. Total lung capacity = VC + RV ≈ 5800 mL.** The rule that carries every question: **any capacity containing RV cannot be measured by spirometry** — so RV, FRC and TLC need **helium dilution, nitrogen washout or body plethysmography**, and only plethysmography also counts gas trapped behind closed airways.',
    '**FRC is not a number to memorise but a mechanical equilibrium.** It is the volume at end-expiration where the **inward elastic recoil of the lung exactly balances the outward recoil of the chest wall**, so no muscle work is needed to hold it. Anything that stiffens the lung (**fibrosis, pulmonary oedema**) shifts the balance point down and **lowers FRC**; anything that destroys recoil (**emphysema**) raises it, and air trapping raises **RV/TLC**. Lying supine, obesity and pregnancy also cut FRC by pushing the diaphragm up — which is why supine obese patients desaturate fast on induction: FRC is the body oxygen store.',
    '**Dead space comes in two flavours and the difference is the whole point. Anatomical dead space ≈ 150 mL** — the conducting airways from nose to terminal bronchioles, where no gas exchange occurs. **Physiological dead space** adds the **alveolar dead space**: alveoli that are **ventilated but not perfused**. In a healthy person the two are nearly identical; a large gap between them is the signature of **wasted ventilation** — pulmonary embolism, low cardiac output, emphysema, high West zone 1.',
    '**Alveolar ventilation, not minute ventilation, sets the alveolar gases.** **V̇A = (TV − VD) × f.** Normal: **(500 − 150) × 12 ≈ 4200 mL/min**, against a minute ventilation of **6000 mL/min** — so roughly **30% of every breath is wasted** at rest. This single equation is the direct determinant of **alveolar and arterial PCO₂**, which varies **inversely** with V̇A: halve alveolar ventilation and PaCO₂ doubles.',
    '**Rapid shallow breathing can double minute ventilation and still cause CO₂ retention.** Dead space is a fixed volume subtracted from **every** breath, so frequency is the expensive variable. At **500 mL × 12 = 6 L/min**, alveolar ventilation is **4.2 L/min**; at **250 mL × 24 = 6 L/min**, it collapses to **(250 − 150) × 24 = 2.4 L/min** — the same minute ventilation with **little over half** the effective ventilation. Conversely **1000 mL × 6 = 6 L/min** gives **5.1 L/min**. Deep and slow is efficient; fast and shallow is a warning sign of fatigue.',
  ],

  mechanism: {
    title: 'Only the part of each breath that clears dead space reaches the alveoli',
    steps: [
      { id: 's1', label: 'Tidal volume of about 500 mL enters the airway' },
      { id: 's2', label: 'The first ~150 mL only refills anatomical dead space — no exchange', emphasis: 'key' },
      { id: 's3', label: 'Alveolar ventilation = (TV − dead space) × respiratory rate', emphasis: 'key' },
      { id: 's4', label: 'Unperfused alveoli add alveolar dead space, giving physiological dead space' },
      { id: 's5', label: 'Alveolar PCO₂ varies inversely with alveolar ventilation', emphasis: 'key' },
      { id: 's6', label: 'Rapid shallow breathing multiplies the fixed dead-space penalty and retains CO₂', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Rapid shallow breathing with a rising PaCO₂ despite a normal or high minute ventilation', mechanism: 'Fixed dead space is subtracted from every breath, so a high rate with small tidal volumes collapses alveolar ventilation', significance: 'key' },
    { sign: 'Rapid desaturation on induction of anaesthesia in an obese or pregnant patient', mechanism: 'Diaphragmatic splinting lowers FRC, and FRC is the oxygen reservoir that buffers apnoea', significance: 'key' },
    { sign: 'Barrel chest with a raised residual volume and RV/TLC ratio', mechanism: 'Loss of elastic recoil in emphysema raises the equilibrium volume and traps gas', significance: 'key' },
    { sign: 'Reduced total lung capacity with preserved flow rates', mechanism: 'A restrictive process stiffens the lung or limits chest expansion, shifting every volume downward', significance: 'key' },
    { sign: 'A wide arterial to end-tidal CO₂ gradient', mechanism: 'Alveolar dead space: ventilated but unperfused units dilute the exhaled CO₂', significance: 'supportive' },
    { sign: 'Vital capacity falling on serial bedside measurement in neuromuscular disease', mechanism: 'Progressive inspiratory and expiratory muscle weakness erodes IRV and ERV before gas exchange fails', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Spirometry that cannot report residual volume, FRC or TLC', meaning: 'Spirometry only measures gas that moves — RV never leaves the lung' },
    { clue: 'Helium dilution or nitrogen washout FRC lower than plethysmographic FRC', meaning: 'Trapped gas behind closed airways — only plethysmography counts it' },
    { clue: 'Physiological dead space much greater than the anatomical 150 mL', meaning: 'Alveolar dead space from ventilated but unperfused units' },
    { clue: 'PaCO₂ doubling when alveolar ventilation halves', meaning: 'The inverse relation between alveolar ventilation and alveolar PCO₂' },
    { clue: 'Minute ventilation of 6 L/min at a rate of 24 and tidal volume of 250 mL', meaning: 'Alveolar ventilation only 2.4 L/min — impending hypercapnic failure despite normal-looking numbers' },
    { clue: 'FRC falling when the patient lies supine', meaning: 'Abdominal contents displace the diaphragm cephalad, shifting the equilibrium volume down' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The alveolar ventilation equation is the only respiratory number that directly predicts PaCO₂, so it decides when to intervene. In ventilated patients it is the reason a low tidal volume strategy must be paired with a higher rate, and the reason adding circuit tubing (apparatus dead space) worsens hypercapnia at no cost in oxygenation. The pressures that generate these volumes are in [[ghp-mechanics-of-ventilation]], and the interpretation of the tracings in [[pulmonary-function-tests-interpretation]].' },
    { logic: 'Bedside payoff', detail: 'It explains why a tiring patient breathing 40 times a minute is more dangerous than one breathing 12, why preoxygenation buys time proportional to FRC, and why a wide arterial to end-tidal CO₂ gap points at pulmonary embolism. The matching of that ventilation to blood flow is in [[ventilation-perfusion-matching]]; the diffusion step that follows is in [[gas-exchange-diffusion]]; a parallel treatment of the same volumes is in [[lung-volumes-ventilation]].' },
  ],

  mnemonics: [
    { hook: 'Capacities are Combinations', expansion: ['IC = TV + IRV (about 3500 mL)', 'FRC = ERV + RV (about 2300 mL)', 'VC = IRV + TV + ERV (about 4600 mL); TLC = VC + RV (about 5800 mL)'] },
    { hook: 'If it has RV, spirometry cannot See it', expansion: ['RV, FRC and TLC all contain residual volume', 'So they need helium dilution, nitrogen washout or plethysmography', 'Only plethysmography counts trapped gas'] },
  ],

  traps: [
    {
      questionCategory: 'Minute versus alveolar ventilation',
      wrongInstinct: 'A normal or raised minute ventilation means CO₂ clearance is adequate',
      rightAnswer: 'Only alveolar ventilation clears CO₂, and it falls steeply as breathing becomes rapid and shallow',
      why: 'Dead space is subtracted from every breath, so doubling the rate doubles the penalty.',
    },
    {
      questionCategory: 'Which volumes spirometry can measure',
      wrongInstinct: 'Functional residual capacity can be read straight off a spirometry trace',
      rightAnswer: 'FRC contains residual volume, so it needs gas dilution, washout or body plethysmography',
      why: 'Spirometry records only gas that actually moves in and out of the mouth.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient breathes at a rate of 25 per minute with a tidal volume of 240 mL. Assuming an anatomical dead space of 150 mL, the alveolar ventilation is approximately:',
      options: [
        { id: 'a', text: '6.0 L/min' },
        { id: 'b', text: '4.2 L/min' },
        { id: 'c', text: '2.25 L/min' },
        { id: 'd', text: '3.75 L/min' },
      ],
      answerId: 'c',
      explanation: 'Alveolar ventilation is (240 − 150) × 25, that is 90 × 25 = 2250 mL/min, or about 2.25 L/min — dangerously low despite a minute ventilation of 6 L/min, which is option a. Option d is the minute ventilation with dead space subtracted only once rather than from every breath.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which of the following can be determined from a simple spirometry tracing alone?',
      options: [
        { id: 'a', text: 'Functional residual capacity' },
        { id: 'b', text: 'Total lung capacity' },
        { id: 'c', text: 'Inspiratory capacity' },
        { id: 'd', text: 'Residual volume' },
      ],
      answerId: 'c',
      explanation: 'Inspiratory capacity is tidal volume plus inspiratory reserve volume, both of which involve gas that moves through the mouth. The other three all contain residual volume, which by definition never leaves the lung, so they require helium dilution, nitrogen washout or body plethysmography.',
      tests: 'investigation',
    },
    {
      id: 'q3',
      stem: 'An obese patient desaturates within seconds of apnoea at induction of anaesthesia, far faster than a lean patient. The principal reason is:',
      options: [
        { id: 'a', text: 'A reduced functional residual capacity, which is the body oxygen store' },
        { id: 'b', text: 'An increased residual volume from air trapping' },
        { id: 'c', text: 'An increased anatomical dead space' },
        { id: 'd', text: 'A reduced haemoglobin affinity for oxygen' },
      ],
      answerId: 'a',
      explanation: 'Abdominal mass pushes the diaphragm cephalad and lowers the equilibrium volume, shrinking the FRC reservoir that supplies oxygen during apnoea. Anatomical dead space is set by airway anatomy and is not the issue here, and air trapping with a raised residual volume, option b, is an obstructive pattern rather than an obesity pattern.',
      tests: 'disease',
    },
  ],
};

export default ghpLungVolumesDeadSpace;
