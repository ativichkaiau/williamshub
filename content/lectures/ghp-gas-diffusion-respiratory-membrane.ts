import type { Lecture } from '../../lib/types';

export const ghpGasDiffusionRespiratoryMembrane: Lecture = {
  id: 'ghp-gas-diffusion-respiratory-membrane',
  title: 'Gas Diffusion & the Respiratory Membrane',
  system: 'respiratory',
  source: 'Ch 39 — Physical Principles of Gas Exchange & Diffusion',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'Ch 39 Gas Exchange & Diffusion' },
    { kind: 'mechanism', label: 'Fick across the membrane' },
    { kind: 'exam', label: 'CO₂ vs O₂ diffusion' },
  ],

  highYield: [
    '**Gases move by diffusion down partial pressure gradients, and partial pressure — not concentration — is what drives them.** In a mixture each gas exerts pressure proportional to its fraction (**Dalton**). Dry air at sea level is **21% O₂**, so inspired PO₂ is about **160 mmHg**; once humidified and mixed with resident alveolar gas, alveolar **PO₂ falls to ~104** and **PCO₂ sits at ~40**.',
    '**Alveolar PO₂ is set by the balance of delivery and extraction, which is why hypoventilation is never an isolated CO₂ problem.** Raising ventilation raises alveolar PO₂ toward inspired values and lowers PCO₂; hypoventilation does the reverse. Because alveolar gas must accommodate the CO₂ arriving, **rising PCO₂ necessarily displaces PO₂ downward** — so hypoventilation causes hypoxaemia with a **normal A–a gradient**.',
    '**Diffusion obeys Fick: rate is proportional to area × pressure difference × solubility, and inversely to thickness and the square root of molecular weight.** The lung is built for this — roughly **70 m²** of surface, a membrane about **0.6 μm** thick, and a capillary so narrow that red cells pass almost in single file, minimising diffusion distance.',
    '**CO₂ diffuses about 20 times more readily than O₂ despite a far smaller gradient, and solubility is why.** CO₂ is roughly **24× more soluble**. So the modest **~6 mmHg** venous-to-alveolar CO₂ gradient still clears CO₂ effectively, while O₂ needs its much larger **~60 mmHg** gradient. The practical consequence: **diffusion problems cause hypoxaemia long before they cause hypercapnia**.',
    '**Transit time gives a large safety margin, which is why diffusion limitation is uncommon at rest.** A red cell spends about **0.75 s** in the pulmonary capillary at rest, and equilibration is complete in roughly **0.25 s** — a threefold reserve. In exercise, transit time shortens toward **0.25 s**, so a thickened membrane that is silent at rest can produce **exertional desaturation**.',
    '**Diffusing capacity measures the whole conducting path, not just the membrane.** It falls when **surface area** is lost (emphysema, resection), when the membrane **thickens** (fibrosis, oedema), or when **haemoglobin** is low, since carriage is part of the measurement. It rises in exercise through capillary recruitment and distension, the same behaviour described in [[ghp-pulmonary-circulation-zones]].',
  ],

  mechanism: {
    title: 'From alveolar gas to capillary blood',
    steps: [
      { id: 's1', label: 'Inspired air humidified and mixed → alveolar PO₂ ~104, PCO₂ ~40', emphasis: 'key' },
      { id: 's2', label: 'Partial pressure gradient established across the membrane' },
      { id: 's3', label: 'Diffusion rate ∝ area × ΔP × solubility ÷ thickness', emphasis: 'key' },
      { id: 's4', label: 'CO₂ ~24× more soluble → clears on a much smaller gradient', emphasis: 'key' },
      { id: 's5', label: 'Equilibration complete in ~0.25 s of a ~0.75 s transit — threefold reserve' },
      { id: 's6', label: 'Exercise shortens transit; a thickened membrane then desaturates', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Desaturation on exertion with normal resting saturation', mechanism: 'Shortened capillary transit unmasking a diffusion limitation', significance: 'key' },
    { sign: 'Hypoxaemia with normal or low PCO₂ in interstitial disease', mechanism: 'CO₂ diffuses far more readily, so oxygen fails first', significance: 'key' },
    { sign: 'Hypoxaemia with raised PCO₂ and a normal A–a gradient', mechanism: 'Pure hypoventilation displacing alveolar oxygen', significance: 'key' },
    { sign: 'Reduced diffusing capacity in emphysema', mechanism: 'Loss of alveolar surface area available for exchange', significance: 'key' },
    { sign: 'Reduced diffusing capacity with anaemia and normal lungs', mechanism: 'Haemoglobin carriage forms part of the measurement', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Low DLCO with obstruction on spirometry', meaning: 'Emphysema — surface area lost' },
    { clue: 'Low DLCO with restriction on spirometry', meaning: 'Interstitial disease — membrane thickened' },
    { clue: 'Normal DLCO with restriction', meaning: 'Extrapulmonary restriction — chest wall or neuromuscular' },
    { clue: 'Normal A–a gradient with hypoxaemia and hypercapnia', meaning: 'Hypoventilation rather than a gas exchange defect' },
    { clue: 'Widened A–a gradient with hypoxaemia', meaning: 'Diffusion impairment, shunt, or V/Q mismatch' },
  ],

  treatment: [
    {
      logic: 'Separate hypoventilation from gas exchange failure before reaching for oxygen',
      detail: 'A **normal A–a gradient** with hypercapnia means the lung is exchanging normally and the problem is **ventilation** — the answer is ventilatory support, not simply more oxygen. A widened gradient points instead to the exchange surface.',
    },
    {
      logic: 'Expect oxygen to fail before carbon dioxide in diffusion disease',
      detail: 'Because CO₂ is roughly **24× more soluble**, it continues to clear when oxygen transfer is already impaired. Hypercapnia in interstitial disease therefore signals **late, severe** disease or coexisting hypoventilation.',
    },
  ],

  mnemonics: [
    { hook: 'Area and gradient up, thickness down', expansion: ['Fick: rate ∝ area × ΔP × solubility', 'Inversely ∝ thickness', 'Lung maximises area, minimises thickness'] },
    { hook: 'CO₂ is soluble, so oxygen fails first', expansion: ['~24× more soluble', 'Small gradient still suffices', 'Diffusion disease = hypoxaemia before hypercapnia'] },
  ],

  traps: [
    {
      questionCategory: 'Why hypercapnia is late in diffusion disease',
      wrongInstinct: 'A thickened membrane should impair both gases equally',
      rightAnswer: 'CO₂ is far more soluble and continues to clear when oxygen transfer has failed',
      why: 'Solubility, not molecular size, dominates transfer across the membrane',
    },
    {
      questionCategory: 'Hypoxaemia with a normal A–a gradient',
      wrongInstinct: 'Any hypoxaemia means the lung parenchyma is diseased',
      rightAnswer: 'A normal gradient indicates hypoventilation, with the lung exchanging normally',
      why: 'Rising alveolar CO₂ displaces alveolar oxygen without any exchange defect',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with pulmonary fibrosis has a normal resting oxygen saturation but desaturates markedly on a six-minute walk. What best explains this?',
      options: [
        { id: 'a', text: 'Exercise causes acute hypoventilation' },
        { id: 'b', text: 'Shortened capillary transit time unmasks the diffusion limitation' },
        { id: 'c', text: 'Cardiac output falls during exercise' },
        { id: 'd', text: 'The oxyhaemoglobin curve shifts leftward' },
      ],
      answerId: 'b',
      explanation: 'At rest equilibration takes about 0.25 s of a 0.75 s transit, a threefold reserve that hides mild diffusion impairment. Exercise shortens transit toward the equilibration time, so a thickened membrane can no longer fully oxygenate the blood.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Why does carbon dioxide clear effectively across a gradient of only about 6 mmHg while oxygen requires roughly 60 mmHg?',
      options: [
        { id: 'a', text: 'Carbon dioxide has a lower molecular weight' },
        { id: 'b', text: 'Carbon dioxide is approximately 24 times more soluble in the membrane' },
        { id: 'c', text: 'Carbon dioxide is actively transported' },
        { id: 'd', text: 'The membrane is thinner on the venous side' },
      ],
      answerId: 'b',
      explanation: 'Fick includes solubility. CO₂ is about 24 times more soluble than oxygen, which more than offsets its smaller gradient and slightly greater molecular weight — hence roughly 20-fold greater diffusion.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A patient has hypoxaemia with a raised PCO₂ and a normal A–a gradient. What does this indicate?',
      options: [
        { id: 'a', text: 'Right-to-left shunt' },
        { id: 'b', text: 'Diffusion impairment' },
        { id: 'c', text: 'Hypoventilation with normally functioning lungs' },
        { id: 'd', text: 'Ventilation–perfusion mismatch' },
      ],
      answerId: 'c',
      explanation: 'A normal A–a gradient means alveolar-to-arterial transfer is intact. Rising alveolar CO₂ displaces alveolar oxygen, producing hypoxaemia purely from inadequate ventilation — so the treatment is ventilatory support.',
      tests: 'investigation',
    },
  ],
};

export default ghpGasDiffusionRespiratoryMembrane;
