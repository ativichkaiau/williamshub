import type { Lecture } from '../../lib/types';
import { RESPIRATORY_FAILURE } from '../../lib/figures';

export const respiratoryFailureOxygenTherapy: Lecture = {
  id: 'respiratory-failure-oxygen-therapy',
  title: 'Respiratory Failure & Oxygen Therapy',
  system: 'respiratory',
  source: 'L19 — Early Clinical Exposure (HRS-II)',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L19 Early Clinical Exposure' },
    { kind: 'disease', label: 'Respiratory failure' },
    { kind: 'exam', label: 'Type 1 vs type 2' },
  ],

  highYield: [
    '**Respiratory failure is the inability to maintain adequate gas exchange, classified by the arterial blood gas into TYPE 1 (hypoxaemic) and TYPE 2 (hypercapnic).** This single distinction — is CO₂ high or not? — drives the whole approach and the safe use of oxygen.',
    '**Type 1 (hypoxaemic) failure = low PaO₂ with a NORMAL or LOW PaCO₂.** The problem is OXYGENATION — chiefly **V/Q mismatch, shunt or diffusion impairment**: pneumonia, pulmonary oedema, PE, ARDS, and interstitial disease. Treatment is to correct the hypoxaemia with oxygen and treat the cause.',
    '**Type 2 (hypercapnic) failure = low PaO₂ WITH a HIGH PaCO₂ — ventilatory failure ("won\'t breathe or can\'t breathe").** Causes: **COPD, respiratory-depressant drugs (opioids/sedatives), neuromuscular weakness, chest-wall disease, and exhaustion in severe asthma.** The lungs are not clearing enough CO₂, so ventilation (not just oxygenation) must be supported.',
    '**Oxygen safety is high-yield: in chronic type 2 failure (e.g. COPD), give CONTROLLED oxygen targeting ~88–92%, because uncontrolled high-flow O₂ can worsen hypercapnia** (loss of hypoxic drive + increased V/Q mismatch/Haldane effect). In type 1 failure, aim for higher saturations (~94–98%). Never withhold oxygen from a hypoxic patient — titrate it.',
    '**Ventilatory support matches the problem: NON-INVASIVE ventilation (BiPAP) supports ventilation in type 2 failure (e.g. COPD exacerbation with respiratory acidosis); CPAP/high-flow oxygen helps oxygenation in type 1 (e.g. pulmonary oedema); invasive ventilation for refractory failure.** This ties the ABG to bedside management ([[respiratory-clinical-approach]]).',
  ],

  mechanism: {
    title: 'ABG splits type 1 (hypoxaemic) vs type 2 (hypercapnic); O₂ titrated to type',
    steps: [
      { id: 's1', label: 'Respiratory failure = inadequate gas exchange; classify by ABG', emphasis: 'key' },
      { id: 's2', label: 'Type 1: ↓PaO₂, normal/low PaCO₂ (oxygenation — V/Q, shunt, diffusion)', emphasis: 'key' },
      { id: 's3', label: 'Type 2: ↓PaO₂ + ↑PaCO₂ (ventilatory failure — COPD, sedatives, neuromuscular)', emphasis: 'key' },
      { id: 's4', label: 'Chronic type 2: CONTROLLED O₂ (target 88–92%); avoid worsening hypercapnia', emphasis: 'danger' },
      { id: 's5', label: 'Support: NIV/BiPAP (type 2) vs CPAP/high-flow O₂ (type 1)' },
    ],
  },

  examFindings: [
    { sign: 'Low PaO₂ with normal/low PaCO₂', mechanism: 'Type 1 (hypoxaemic) respiratory failure', significance: 'key' },
    { sign: 'Low PaO₂ with high PaCO₂ (± respiratory acidosis)', mechanism: 'Type 2 (hypercapnic/ventilatory) failure', significance: 'key' },
    { sign: 'Rising CO₂/drowsiness after high-flow O₂ in COPD', mechanism: 'Uncontrolled oxygen worsening hypercapnia', significance: 'key' },
    { sign: 'BiPAP used in a COPD exacerbation with acidosis', mechanism: 'Non-invasive support of ventilation (type 2)', significance: 'supportive' },
    { sign: 'Target saturation 88–92% in known COPD', mechanism: 'Controlled oxygen in chronic type 2 risk', significance: 'key' },
  ],

  investigations: [
    { clue: 'The test that classifies respiratory failure', meaning: 'Arterial blood gas (PaO₂ and PaCO₂)' },
    { clue: 'The blood-gas pattern of type 2 failure', meaning: 'Low PaO₂ with high PaCO₂' },
    { clue: 'The oxygen saturation target in chronic type 2 (COPD) risk', meaning: '~88–92% (controlled oxygen)' },
    { clue: 'The support that assists ventilation in type 2 failure', meaning: 'Non-invasive ventilation (BiPAP)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The type 1/type 2 split (from the ABG — overlaps HRS-1) dictates oxygen titration and ventilatory support, and the controlled-oxygen rule in COPD ([[copd-emphysema-chronic-bronchitis]]) is a core safety point. Type 1 causes include pneumonia, oedema/PE ([[pulmonary-embolism-edema]]) and ARDS ([[ards-pulmonary-hypertension-atelectasis]]); it operationalises the bedside assessment in [[respiratory-clinical-approach]].' },
  ],

  mnemonics: [
    { hook: 'Type 1 vs 2: "Type 1 = One problem (Oxygen); Type 2 = Too much CO₂ (ventilation)"', expansion: ['Type 1: V/Q, shunt, diffusion', 'Type 2: won\'t/can\'t breathe'] },
    { hook: 'COPD oxygen = "controlled, target 88–92%"', expansion: ['High-flow O₂ can worsen hypercapnia', 'BiPAP for type 2 with acidosis'] },
  ],

  traps: [
    {
      questionCategory: 'Oxygen therapy in COPD',
      wrongInstinct: 'A hypoxic COPD patient should always receive high-flow (high FiO₂) oxygen to correct the low saturation',
      rightAnswer: 'In chronic type 2 (hypercapnic) patients such as COPD, use CONTROLLED oxygen targeting ~88–92% — uncontrolled high-flow O₂ can worsen hypercapnia and cause a CO₂-narcosis/acidosis; oxygen is titrated, never simply withheld',
      why: 'Excess oxygen in chronic hypercapnia worsens V/Q matching and reduces respiratory drive (raising CO₂); the safe approach is controlled titration to a target range, not maximal FiO₂.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An arterial blood gas shows a low PaO₂ together with a high PaCO₂. This indicates:',
      options: [
        { id: 'a', text: 'Type 1 (hypoxaemic) respiratory failure' },
        { id: 'b', text: 'Type 2 (hypercapnic) respiratory failure' },
        { id: 'c', text: 'Normal gas exchange' },
        { id: 'd', text: 'Metabolic alkalosis' },
      ],
      answerId: 'b',
      explanation: 'A high PaCO₂ with hypoxaemia defines type 2 (hypercapnic/ventilatory) failure — the lungs are not clearing CO₂ (e.g. COPD, sedatives, neuromuscular disease). Type 1 failure has a normal or low PaCO₂.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Why is controlled (rather than high-flow) oxygen used in a hypoxic patient with known COPD and chronic CO₂ retention?',
      options: [
        { id: 'a', text: 'Oxygen is harmful to all COPD patients' },
        { id: 'b', text: 'Uncontrolled high oxygen can worsen hypercapnia (CO₂ retention) and acidosis' },
        { id: 'c', text: 'COPD patients do not need oxygen' },
        { id: 'd', text: 'It reduces the cost of treatment' },
      ],
      answerId: 'b',
      explanation: 'In chronic type 2 respiratory failure, excessive oxygen can worsen ventilation–perfusion matching and reduce respiratory drive, raising CO₂; oxygen is therefore titrated to a target of ~88–92% rather than given at high flow, while never being withheld from a hypoxic patient.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Respiratory failure: type 1 vs type 2', svg: RESPIRATORY_FAILURE, caption: 'Hypoxaemic (type 1) vs hypercapnic (type 2) failure, their causes, and safe oxygen/ventilatory support.' },
  ],
};

export default respiratoryFailureOxygenTherapy;
