import type { Lecture } from '../../lib/types';

export const ghpVentilationPerfusionMatching: Lecture = {
  id: 'ghp-ventilation-perfusion-matching',
  title: 'Ventilation–Perfusion Matching',
  system: 'respiratory',
  source: 'Ch 39 — Physical Principles of Gas Exchange & Diffusion',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'Ch 39 Gas Exchange & Diffusion' },
    { kind: 'mechanism', label: 'V/Q spectrum' },
    { kind: 'exam', label: 'Shunt vs mismatch' },
  ],

  highYield: [
    '**Gas exchange depends on ventilation and perfusion meeting in the same alveolus, and V/Q is the ratio that describes it.** Whole-lung V/Q is about **0.8** (roughly **4 L/min** alveolar ventilation against **5 L/min** cardiac output). Exchange fails not only when ventilation or perfusion is reduced, but whenever they are **maldistributed** relative to each other — which is the commonest cause of hypoxaemia in clinical practice.',
    '**The two extremes bracket the spectrum, and naming them makes every case interpretable.** **V/Q = ∞** is ventilation without perfusion — **alveolar dead space**, the physiology of pulmonary embolism. **V/Q = 0** is perfusion without ventilation — **shunt**, the physiology of consolidation, collapse or a right-to-left cardiac defect. Real disease sits between these, distributed across many alveoli.',
    '**Shunt and V/Q mismatch respond to oxygen completely differently, and this is the single most examinable point.** In **mismatch**, poorly ventilated units still receive *some* fresh gas, so raising FiO₂ eventually raises their alveolar PO₂ and **hypoxaemia corrects well**. In **true shunt**, blood bypasses ventilated alveoli entirely, so extra oxygen never reaches it — hypoxaemia is **refractory to oxygen**. Refractory hypoxaemia therefore means shunt until proven otherwise.',
    '**Why shunt resists oxygen is best understood through the oxyhaemoglobin curve.** Blood leaving well-ventilated units is already nearly **fully saturated**, so raising their PO₂ adds very little extra content — the curve is flat there. That small gain cannot compensate for admixed shunt blood arriving at venous saturation, which is why even **100% oxygen** barely moves the arterial value.',
    '**The upright lung is normally mismatched, and both gradients run the same way for the same reason.** Gravity makes **perfusion** increase down the lung more steeply than **ventilation** does, so V/Q is **high at the apex (~3)** and **low at the base (~0.6)**. The apex is therefore relatively dead-space-like and the base relatively shunt-like — normal physiology, not disease, and the basis of the zones in [[ghp-pulmonary-circulation-zones]].',
    '**Hypoxic pulmonary vasoconstriction exists to defend matching, and it is why the lung behaves opposite to everywhere else.** Alveolar hypoxia constricts the local pulmonary arteriole, diverting blood away from poorly ventilated units toward better ones. It is beneficial when regional, but when **global** — at altitude or in diffuse lung disease — it raises pulmonary artery pressure and can drive right heart strain.',
  ],

  mechanism: {
    title: 'Where the air and the blood fail to meet',
    steps: [
      { id: 's1', label: 'Whole-lung V/Q ≈ 0.8; exchange depends on matching within each alveolus', emphasis: 'key' },
      { id: 's2', label: 'V/Q → ∞: ventilation without perfusion = alveolar dead space' },
      { id: 's3', label: 'V/Q → 0: perfusion without ventilation = shunt', emphasis: 'key' },
      { id: 's4', label: 'Gravity gives apex high V/Q, base low V/Q even in health' },
      { id: 's5', label: 'Hypoxic vasoconstriction diverts flow from poorly ventilated units', emphasis: 'key' },
      { id: 's6', label: 'Added O₂ corrects mismatch but not true shunt — the curve is already flat', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Hypoxaemia that fails to correct on high-flow oxygen', mechanism: 'True shunt — blood bypasses ventilated alveoli entirely', significance: 'key' },
    { sign: 'Hypoxaemia correcting readily with modest supplemental oxygen', mechanism: 'V/Q mismatch, where poorly ventilated units still receive fresh gas', significance: 'key' },
    { sign: 'Acute hypoxaemia with a raised A–a gradient after pulmonary embolism', mechanism: 'Alveolar dead space with redistribution of flow', significance: 'key' },
    { sign: 'Raised pulmonary artery pressure at altitude', mechanism: 'Global hypoxic pulmonary vasoconstriction', significance: 'key' },
    { sign: 'Better oxygenation with the healthy lung placed dependent', mechanism: 'Gravity directs perfusion toward the better-ventilated lung', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'PaO₂ rising poorly despite FiO₂ near 1.0', meaning: 'Significant true shunt fraction' },
    { clue: 'Widened A–a gradient correcting with oxygen', meaning: 'V/Q mismatch rather than shunt' },
    { clue: 'Raised dead space fraction with a normal chest film', meaning: 'Consider pulmonary embolism' },
    { clue: 'Dense consolidation with refractory hypoxaemia', meaning: 'Perfused but unventilated lung — shunt physiology' },
    { clue: 'Normal A–a gradient with hypoxaemia', meaning: 'Hypoventilation, not a matching problem' },
  ],

  treatment: [
    {
      logic: 'Read the oxygen response as a diagnostic test',
      detail: 'Correcting readily indicates **mismatch**; refractory hypoxaemia indicates **shunt**, where the answer is recruiting the collapsed or filled lung rather than adding oxygen. This distinction determines whether escalating FiO₂ can help at all.',
    },
    {
      logic: 'Recruit shunted lung rather than escalating oxygen indefinitely',
      detail: 'Since shunt blood never meets alveolar gas, restoring **ventilation** to those units — positioning, recruitment, treating the consolidation — is the only route to improvement, an approach reflected in [[ards-pulmonary-hypertension-atelectasis]].',
    },
  ],

  mnemonics: [
    { hook: 'Zero is shunt, infinity is dead space', expansion: ['V/Q = 0 → perfused, unventilated → shunt', 'V/Q = ∞ → ventilated, unperfused → dead space'] },
    { hook: 'Shunt shrugs off oxygen', expansion: ['Mismatch corrects with O₂', 'Shunt does not — the blood never sees the gas'] },
  ],

  traps: [
    {
      questionCategory: 'Why oxygen fails in shunt',
      wrongInstinct: 'Enough oxygen should overcome any cause of hypoxaemia',
      rightAnswer: 'Shunted blood never contacts alveolar gas, and well-ventilated units are already saturated',
      why: 'The oxyhaemoglobin curve is flat at the top, so raising their PO₂ adds almost no content',
    },
    {
      questionCategory: 'Regional V/Q differences in health',
      wrongInstinct: 'A healthy lung is uniformly matched throughout',
      rightAnswer: 'Gravity gives a high apical and low basal V/Q even in normal lungs',
      why: 'Perfusion increases down the lung more steeply than ventilation does',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with dense lobar consolidation remains hypoxaemic despite FiO₂ of 1.0. What is the mechanism?',
      options: [
        { id: 'a', text: 'Diffusion impairment across a thickened membrane' },
        { id: 'b', text: 'True shunt — perfused but unventilated lung that supplemental oxygen cannot reach' },
        { id: 'c', text: 'Alveolar dead space' },
        { id: 'd', text: 'Hypoventilation' },
      ],
      answerId: 'b',
      explanation: 'Consolidated lung is perfused but not ventilated, so that blood never contacts alveolar gas. Blood from normal units is already nearly fully saturated and the curve is flat there, so raising FiO₂ cannot compensate — refractory hypoxaemia is the signature of shunt.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'In an upright healthy lung, how do ventilation and perfusion vary from apex to base?',
      options: [
        { id: 'a', text: 'Both are uniform throughout' },
        { id: 'b', text: 'Both increase toward the base, but perfusion increases more, so V/Q is higher at the apex' },
        { id: 'c', text: 'Ventilation increases toward the base while perfusion decreases' },
        { id: 'd', text: 'Both increase toward the apex' },
      ],
      answerId: 'b',
      explanation: 'Gravity increases both down the lung, but perfusion rises more steeply. The apex therefore has a high V/Q of around 3 and the base a low V/Q of about 0.6 — normal regional mismatch rather than disease.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'What is the physiological purpose of hypoxic pulmonary vasoconstriction?',
      options: [
        { id: 'a', text: 'To increase systemic blood pressure during hypoxia' },
        { id: 'b', text: 'To divert perfusion away from poorly ventilated alveoli toward better ventilated ones' },
        { id: 'c', text: 'To reduce cardiac output during hypoxia' },
        { id: 'd', text: 'To increase pulmonary capillary permeability' },
      ],
      answerId: 'b',
      explanation: 'Unlike systemic vessels, pulmonary arterioles constrict to alveolar hypoxia. This redirects blood toward better-ventilated regions, improving matching. When hypoxia is global rather than regional it becomes maladaptive, raising pulmonary artery pressure.',
      tests: 'mechanism',
    },
  ],
};

export default ghpVentilationPerfusionMatching;
