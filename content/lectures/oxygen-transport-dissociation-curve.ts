import type { Lecture } from '../../lib/types';
import { OXYHEMOGLOBIN_CURVE } from '../../lib/figures';

export const oxygenTransportDissociationCurve: Lecture = {
  id: 'oxygen-transport-dissociation-curve',
  title: 'Oxygen Transport & the Oxyhaemoglobin Curve',
  system: 'respiratory',
  source: 'L5 — Gas Exchange & Transport',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L5 Gas Exchange' },
    { kind: 'mechanism', label: 'Hb saturation & shifts' },
    { kind: 'exam', label: 'Curve shifts · P50' },
  ],

  highYield: [
    '**O₂ is carried in blood two ways: ~98% bound to haemoglobin, ~2% dissolved.** Each Hb (4 haem groups) binds up to 4 O₂. **Oxygen content depends mainly on Hb concentration and its saturation** — which is why **anaemia lowers O₂ content even when PaO₂ and SaO₂ are normal**.',
    '**The oxyhaemoglobin dissociation curve is SIGMOID because binding is cooperative** (each O₂ bound eases the next). Two useful shapes: the **flat upper plateau** (PaO₂ 60–100) = a **safety margin** (large falls in PaO₂ barely reduce saturation — good for loading in the lung), and the **steep lower portion** = **easy unloading** of O₂ to tissues for small PO₂ drops.',
    '**A RIGHT shift = decreased Hb affinity = O₂ unloaded to tissues more easily** (curve moves right, P50 rises). Causes (**"CADET, face Right"**): **↑CO₂, ↑Acid (↓pH), ↑2,3-BPG, ↑Temperature** — i.e. metabolically active tissue. The **Bohr effect** = CO₂/H⁺ promoting O₂ release. **P50** = the PO₂ at 50% saturation (~27 mmHg); ↑P50 = right shift.',
    '**A LEFT shift = increased affinity = Hb holds O₂ tighter** (harder to release to tissues): **↓CO₂/H⁺, ↓temp, ↓2,3-BPG**, and **fetal haemoglobin (HbF)** (which enables O₂ pickup from the mother). **Stored blood** (low 2,3-BPG) is also left-shifted.',
    '**Carbon monoxide (CO) is a double hit:** it binds Hb ~**250× more avidly than O₂** (forming carboxyhaemoglobin → ↓O₂ carrying) **AND left-shifts the curve** (impairing release of the little O₂ carried). Crucially, **pulse oximetry reads falsely normal** in CO poisoning — measure carboxyhaemoglobin directly.',
  ],

  mechanism: {
    title: 'Load in the lung (flat top) · unload in tissue (steep)',
    steps: [
      { id: 's1', label: '~98% O₂ on Hb, ~2% dissolved; content ∝ Hb × sat', emphasis: 'key' },
      { id: 's2', label: 'Sigmoid curve (cooperative): flat top loads, steep part unloads', emphasis: 'key' },
      { id: 's3', label: 'RIGHT shift (↓affinity): ↑CO₂/H⁺/temp/2,3-BPG (Bohr) → unload', emphasis: 'key' },
      { id: 's4', label: 'LEFT shift (↑affinity): ↓CO₂/H⁺/temp/2,3-BPG, HbF, CO', emphasis: 'key' },
      { id: 's5', label: 'CO: binds 250× tighter + left-shift; oximeter falsely normal', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Right-shifted curve (↑P50)', mechanism: '↑CO₂/H⁺/temp/2,3-BPG → O₂ unloaded to tissues (Bohr)', significance: 'key' },
    { sign: 'Left-shifted curve (↓P50)', mechanism: '↓CO₂/H⁺/temp/2,3-BPG, HbF, CO → O₂ held tightly', significance: 'key' },
    { sign: 'Normal PaO₂/SaO₂ but low O₂ content', mechanism: 'Anaemia (reduced Hb, fewer carriers)', significance: 'key' },
    { sign: 'Falsely normal pulse oximetry in a smoke-exposed patient', mechanism: 'Carbon monoxide poisoning (COHb)', significance: 'key' },
    { sign: 'HbF left-shifted vs adult Hb', mechanism: 'Higher affinity → draws O₂ from maternal blood', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'PO₂ at which Hb is 50% saturated', meaning: 'P50 (~27 mmHg)' },
    { clue: 'Factors shifting the curve right', meaning: '↑CO₂, ↑H⁺ (↓pH), ↑temp, ↑2,3-BPG (CADET)' },
    { clue: 'Why anaemia lowers O₂ delivery despite normal SaO₂', meaning: 'Content depends on Hb amount, not just saturation' },
    { clue: 'Toxin binding Hb 250× more than O₂ and left-shifting', meaning: 'Carbon monoxide' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The curve underlies pulse oximetry interpretation, tissue O₂ delivery, CO poisoning (100% O₂/hyperbaric), stored-blood transfusion, and fetal oxygenation. It follows diffusion of O₂ into blood ([[gas-exchange-diffusion]]); CO₂ carriage: [[co2-transport-blood]].' },
  ],

  mnemonics: [
    { hook: 'RIGHT shift = "CADET face Right": CO₂, Acid, 2,3-DPG, Exercise, Temperature → unload O₂', expansion: ['↑P50 = right'] },
    { hook: 'Left shift = "hold tight": ↓everything + HbF + CO', expansion: ['CO = 250× + left shift'] },
  ],

  traps: [
    {
      questionCategory: 'What a right shift does',
      wrongInstinct: 'A right shift of the oxyhaemoglobin curve means haemoglobin binds oxygen more tightly',
      rightAnswer: 'A right shift = DECREASED affinity → Hb releases (unloads) O₂ more readily to tissues (↑P50); it is caused by ↑CO₂/H⁺/temp/2,3-BPG',
      why: 'Right = "release": active tissues (acidic, warm, high CO₂) shift right so more O₂ is delivered where it\'s needed (the Bohr effect).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which change shifts the oxyhaemoglobin dissociation curve to the RIGHT, promoting oxygen unloading to tissues?',
      options: [
        { id: 'a', text: 'Decreased CO₂ and increased pH' },
        { id: 'b', text: 'Increased CO₂, increased H⁺ (lower pH), and increased temperature' },
        { id: 'c', text: 'Fetal haemoglobin' },
        { id: 'd', text: 'Carbon monoxide' },
      ],
      answerId: 'b',
      explanation: 'A right shift (decreased affinity) is caused by ↑CO₂, ↑H⁺/↓pH, ↑temperature, and ↑2,3-BPG — conditions in metabolically active tissue (the Bohr effect) — enhancing O₂ delivery.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'In carbon monoxide poisoning, pulse oximetry can read a falsely normal oxygen saturation because:',
      options: [
        { id: 'a', text: 'CO increases dissolved oxygen' },
        { id: 'b', text: 'The oximeter cannot distinguish carboxyhaemoglobin from oxyhaemoglobin' },
        { id: 'c', text: 'CO raises the PaO₂' },
        { id: 'd', text: 'CO right-shifts the curve' },
      ],
      answerId: 'b',
      explanation: 'Standard pulse oximetry misreads carboxyhaemoglobin as oxyhaemoglobin, giving a falsely reassuring SaO₂. CO also binds Hb ~250× more avidly than O₂ and left-shifts the curve — measure COHb directly.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Oxyhaemoglobin dissociation curve', svg: OXYHEMOGLOBIN_CURVE, caption: 'Sigmoid (cooperative); flat top = loading safety margin, steep part = tissue unloading. Right shift (↑CO₂/H⁺/temp/2,3-BPG) unloads O₂; CO/HbF left-shift.' },
  ],
};

export default oxygenTransportDissociationCurve;
