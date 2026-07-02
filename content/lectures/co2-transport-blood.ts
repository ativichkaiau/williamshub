import type { Lecture } from '../../lib/types';
import { CO2_TRANSPORT } from '../../lib/figures';

export const co2TransportBlood: Lecture = {
  id: 'co2-transport-blood',
  title: 'CO₂ Transport in Blood',
  system: 'respiratory',
  source: 'L5 — Gas Exchange & Transport',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L5 Gas Exchange' },
    { kind: 'mechanism', label: '3 forms · chloride shift' },
    { kind: 'exam', label: 'Bicarbonate · Haldane' },
  ],

  highYield: [
    '**CO₂ is carried in blood in three forms:** **(1) bicarbonate (HCO₃⁻) — ~70%** (the majority), **(2) carbamino-haemoglobin — ~23%** (CO₂ bound to Hb\'s **globin**, not the haem), and **(3) dissolved in plasma — ~7%** (this fraction sets the PaCO₂).',
    '**The bicarbonate reaction:** in the RBC, **carbonic anhydrase** speeds **CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻**. The H⁺ is buffered by haemoglobin; the **HCO₃⁻ leaves the RBC into plasma** in exchange for chloride.',
    '**The chloride (Hamburger) shift:** as HCO₃⁻ exits the RBC in the tissues, **Cl⁻ moves IN to preserve electroneutrality** (and reverses in the lungs). This lets the blood carry large amounts of CO₂ as plasma bicarbonate.',
    '**The Haldane effect:** **deoxygenated haemoglobin carries CO₂ more readily** (better H⁺ buffering + more carbamino formation). So in the tissues, as Hb gives up O₂ it **picks up more CO₂**; in the lungs, oxygenation of Hb **releases CO₂** for exhalation. (The Haldane and **Bohr** effects are complementary — one aids CO₂ loading, the other aids O₂ unloading.)',
    '**CO₂ transport is inseparable from acid–base balance:** the CO₂–bicarbonate system is the blood\'s major buffer, and **ventilation controls CO₂ (an acid)** — hypoventilation → CO₂ retention → **respiratory acidosis**; hyperventilation → **respiratory alkalosis** (see [[abg-acid-base-interpretation]]).',
  ],

  mechanism: {
    title: 'Mostly bicarbonate; Hb & ventilation do the rest',
    steps: [
      { id: 's1', label: 'Three forms: HCO₃⁻ ~70%, carbamino-Hb ~23%, dissolved ~7%', emphasis: 'key' },
      { id: 's2', label: 'CO₂+H₂O ⇌ H₂CO₃ ⇌ H⁺+HCO₃⁻ (carbonic anhydrase in RBC)', emphasis: 'key' },
      { id: 's3', label: 'Chloride shift: HCO₃⁻ out, Cl⁻ in (tissues; reversed in lung)', emphasis: 'key' },
      { id: 's4', label: 'Haldane: deoxy-Hb carries more CO₂', emphasis: 'key' },
      { id: 's5', label: 'Ventilation controls CO₂ → acid–base balance' },
    ],
  },

  examFindings: [
    { sign: 'Majority of CO₂ carried as bicarbonate', mechanism: 'Carbonic anhydrase → HCO₃⁻ (~70%)', significance: 'key' },
    { sign: 'Chloride shifts into RBCs in the tissues', mechanism: 'Hamburger shift maintains electroneutrality', significance: 'key' },
    { sign: 'Deoxygenated blood carries more CO₂', mechanism: 'Haldane effect', significance: 'key' },
    { sign: 'CO₂ bound to the globin part of Hb', mechanism: 'Carbamino-haemoglobin (~23%)', significance: 'supportive' },
    { sign: 'Hypoventilation → CO₂ retention → acidosis', mechanism: 'Dissolved CO₂ sets PaCO₂ (respiratory acid)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The main form in which CO₂ is transported', meaning: 'Bicarbonate (HCO₃⁻)' },
    { clue: 'Enzyme catalysing CO₂ hydration in the RBC', meaning: 'Carbonic anhydrase' },
    { clue: 'Ion exchange as bicarbonate leaves the RBC', meaning: 'Chloride shift (Hamburger)' },
    { clue: 'Effect by which deoxy-Hb carries more CO₂', meaning: 'Haldane effect' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'CO₂ carriage links respiration to acid–base status; carbonic-anhydrase inhibitors (acetazolamide) exploit the bicarbonate reaction; the Haldane/Bohr pair make gas swap efficient. Continues into ABG interpretation ([[abg-acid-base-interpretation]]); O₂ side: [[oxygen-transport-dissociation-curve]].' },
  ],

  mnemonics: [
    { hook: 'CO₂ forms: "Bicarbonate big (70%), Carbamino middle (23%), Dissolved small (7%)"', expansion: ['Carbonic anhydrase in RBC'] },
    { hook: 'Haldane = deoxy-Hb carries CO₂; Bohr = CO₂/H⁺ releases O₂ (complementary)', expansion: ['Chloride shift = Hamburger'] },
  ],

  traps: [
    {
      questionCategory: 'Main form of CO₂ transport',
      wrongInstinct: 'Most CO₂ is carried bound to haemoglobin as carbaminohaemoglobin',
      rightAnswer: 'Most CO₂ (~70%) is carried as BICARBONATE in plasma; carbamino-Hb is only ~23% and dissolved CO₂ ~7%',
      why: 'The carbonic-anhydrase-driven conversion to bicarbonate is the dominant route; don\'t overstate the carbamino fraction.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The majority of carbon dioxide is transported in the blood as:',
      options: [
        { id: 'a', text: 'Dissolved CO₂ in plasma' },
        { id: 'b', text: 'Bicarbonate ion (HCO₃⁻)' },
        { id: 'c', text: 'Carbaminohaemoglobin' },
        { id: 'd', text: 'Carboxyhaemoglobin' },
      ],
      answerId: 'b',
      explanation: 'About 70% of CO₂ is carried as bicarbonate (formed via carbonic anhydrase in the RBC), ~23% as carbamino-haemoglobin, and ~7% dissolved. (Carboxyhaemoglobin is Hb bound to CO, unrelated.)',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The Haldane effect describes how:',
      options: [
        { id: 'a', text: 'CO₂ and H⁺ promote oxygen release from haemoglobin' },
        { id: 'b', text: 'Deoxygenated haemoglobin carries CO₂ more readily than oxygenated haemoglobin' },
        { id: 'c', text: 'Chloride shifts into the red cell' },
        { id: 'd', text: 'CO binds haemoglobin' },
      ],
      answerId: 'b',
      explanation: 'The Haldane effect: deoxy-Hb binds CO₂ (and buffers H⁺) better, so tissues load CO₂ as O₂ is released, and lung oxygenation of Hb releases CO₂. The Bohr effect is its O₂ counterpart (a).',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'CO₂ transport', svg: CO2_TRANSPORT, caption: 'Bicarbonate (~70%, carbonic anhydrase) + carbamino-Hb (~23%) + dissolved (~7%); chloride shift; Haldane effect couples O₂/CO₂ exchange.' },
  ],
};

export default co2TransportBlood;
