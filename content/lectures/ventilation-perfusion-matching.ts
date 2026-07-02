import type { Lecture } from '../../lib/types';
import { PULMONARY_VQ } from '../../lib/figures';

export const ventilationPerfusionMatching: Lecture = {
  id: 'ventilation-perfusion-matching',
  title: 'Ventilation–Perfusion (V/Q) Matching',
  system: 'respiratory',
  source: 'L3 — Pulmonary Circulation',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L3 Pulmonary Circulation' },
    { kind: 'mechanism', label: 'Matching air to blood' },
    { kind: 'exam', label: 'Shunt vs dead space' },
  ],

  highYield: [
    '**Efficient gas exchange needs ventilation (V) matched to perfusion (Q).** The ideal **whole-lung V/Q ≈ 0.8**. Mismatch — the commonest cause of hypoxaemia — occurs along a spectrum between two extremes.',
    '**Regional V/Q differs (upright lung).** Gravity makes **both ventilation and perfusion greatest at the base**, but **perfusion increases more** than ventilation from apex to base. So the **apex has a HIGH V/Q (~3, more ventilation relative to blood → dead-space-like)** and the **base has a LOW V/Q (~0.6, more blood relative to air → shunt-like)**.',
    '**Shunt (V/Q → 0):** alveoli are **perfused but NOT ventilated** (e.g. **atelectasis, pneumonia, pulmonary oedema**). Deoxygenated blood bypasses gas exchange → **hypoxaemia that does NOT fully correct with supplemental O₂** (the O₂ never reaches the shunted blood).',
    '**Dead space (V/Q → ∞):** alveoli are **ventilated but NOT perfused** (e.g. **pulmonary embolism**). Ventilation is wasted; this raises physiological dead space.',
    '**Hypoxic pulmonary vasoconstriction defends V/Q matching** by diverting blood from low-V/Q (poorly-ventilated) areas ([[pulmonary-circulation-features]]). Distinguishing shunt from V/Q mismatch clinically: **hypoxaemia that corrects with 100% O₂ = V/Q mismatch; that fails to correct = true shunt.**',
  ],

  mechanism: {
    title: 'Match V to Q; the extremes are shunt and dead space',
    steps: [
      { id: 's1', label: 'Ideal V/Q ≈ 0.8; mismatch → hypoxaemia', emphasis: 'key' },
      { id: 's2', label: 'Apex high V/Q (dead-space-like); base low V/Q (shunt-like)', emphasis: 'key' },
      { id: 's3', label: 'Shunt = V/Q 0: perfused, not ventilated (atelectasis)', emphasis: 'key' },
      { id: 's4', label: 'Dead space = V/Q ∞: ventilated, not perfused (PE)', emphasis: 'key' },
      { id: 's5', label: 'Shunt hypoxaemia does NOT correct with 100% O₂', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Highest V/Q at the lung apex', mechanism: 'Ventilation exceeds perfusion (gravity)', significance: 'key' },
    { sign: 'Hypoxaemia that fails to correct on 100% O₂', mechanism: 'True shunt (perfused, unventilated alveoli)', significance: 'key' },
    { sign: 'Pulmonary embolism raises dead space', mechanism: 'V/Q → ∞ (ventilated, not perfused)', significance: 'key' },
    { sign: 'Hypoxaemia correcting with supplemental O₂', mechanism: 'V/Q mismatch (not a fixed shunt)', significance: 'supportive' },
    { sign: 'Apical TB reactivation', mechanism: 'High-V/Q apex has high O₂ tension (favours aerobes)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Alveoli perfused but not ventilated', meaning: 'Shunt (V/Q = 0)' },
    { clue: 'Alveoli ventilated but not perfused', meaning: 'Dead space (V/Q = ∞)' },
    { clue: 'Hypoxaemia not corrected by 100% O₂', meaning: 'A true (right-to-left) shunt' },
    { clue: 'The reflex improving V/Q matching', meaning: 'Hypoxic pulmonary vasoconstriction' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'V/Q concepts explain hypoxaemia in nearly every lung disease and the shunt-vs-mismatch bedside test (response to O₂). PE = dead space; pneumonia/atelectasis = shunt. Blood supply side: [[pulmonary-circulation-features]]; oxygenation of blood: [[oxygen-transport-dissociation-curve]].' },
  ],

  mnemonics: [
    { hook: 'Shunt = "blood but no air" (V/Q 0, atelectasis); Dead space = "air but no blood" (V/Q ∞, PE)', expansion: ['Apex high V/Q, base low V/Q'] },
    { hook: 'Shunt hypoxaemia = O₂ RESISTANT; mismatch = O₂ responsive', expansion: ['Bedside test with 100% O₂'] },
  ],

  traps: [
    {
      questionCategory: 'Response of shunt to oxygen',
      wrongInstinct: 'Hypoxaemia due to a true shunt corrects fully with 100% oxygen',
      rightAnswer: 'A true shunt does NOT correct with 100% O₂ — the oxygen can\'t reach the unventilated (shunted) blood; only V/Q mismatch corrects',
      why: 'In shunt, blood bypasses ventilated alveoli entirely, so extra inspired O₂ never contacts it — the key distinction from V/Q mismatch.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A region of lung that is perfused but not ventilated (e.g. from atelectasis) represents:',
      options: [
        { id: 'a', text: 'Dead space (V/Q = ∞)' },
        { id: 'b', text: 'A shunt (V/Q = 0)' },
        { id: 'c', text: 'Ideal V/Q matching' },
        { id: 'd', text: 'Anatomical dead space' },
      ],
      answerId: 'b',
      explanation: 'Perfusion without ventilation is a shunt (V/Q → 0). Blood passes without being oxygenated, causing hypoxaemia that does not fully correct with supplemental O₂.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'In an upright person, the ventilation–perfusion (V/Q) ratio is:',
      options: [
        { id: 'a', text: 'Highest at the base, lowest at the apex' },
        { id: 'b', text: 'Highest at the apex, lowest at the base' },
        { id: 'c', text: 'Uniform throughout the lung' },
        { id: 'd', text: 'Zero everywhere' },
      ],
      answerId: 'b',
      explanation: 'Both ventilation and perfusion are greater at the base, but perfusion increases more, so the apex has the higher V/Q (dead-space-like) and the base the lower V/Q (shunt-like).',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Pulmonary circulation & V/Q', svg: PULMONARY_VQ, caption: 'Low-pressure circuit + HPV; V/Q high at apex / low at base; shunt (V/Q 0, perfused not ventilated) vs dead space (V/Q ∞, ventilated not perfused).' },
  ],
};

export default ventilationPerfusionMatching;
