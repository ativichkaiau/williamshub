import type { Lecture } from '../../lib/types';
import { OSMOSIS_TONICITY } from '../../lib/figures';

export const osmolarityTonicityCellVolume: Lecture = {
  id: 'osmolarity-tonicity-cell-volume',
  title: 'Osmolarity, Tonicity & Cell Volume',
  system: 'physiology',
  source: 'L1 — Transport of Solutes & Water',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'L1 Transport of Solutes & Water' },
    { kind: 'mechanism', label: 'Effective osmoles' },
    { kind: 'exam', label: 'Osmolarity vs tonicity' },
  ],

  highYield: [
    '**Osmolarity = total solute particles per LITRE of solution; osmolality = per KILOGRAM of water** (nearly equal in dilute body fluids). **Osmolarity = molarity × number of dissociable particles** (e.g. 1 mM NaCl ≈ 2 mOsm; glucose ≈ 1). Normal plasma ≈ **~290 mOsm/kg**.',
    '**Tonicity ≠ osmolarity. Tonicity = the EFFECTIVE osmolarity** — it counts only **non-penetrating (impermeant)** solutes, because only those cause a **lasting** water shift and change in cell volume. It is defined by comparison to the cell.',
    '**Penetrating solutes (e.g. urea) add to osmolarity but NOT to tonicity:** they cross the membrane, equilibrate on both sides, and cause no net sustained water movement. This is why a solution can be **iso-osmotic but hypotonic** (e.g. isotonic urea → cells swell).',
    '**Cell-volume responses.** **Hypotonic** (low effective solute outside) → **water enters → cell swells** (can lyse; RBC haemolysis). **Isotonic** → **no net water movement** (normal volume). **Hypertonic** → **water leaves → cell shrinks** (crenation).',
    '**Clinical anchor:** IV fluid choice depends on tonicity — **isotonic saline (0.9%)** stays in the ECF; **hypotonic fluids** shift water into cells; **hypertonic** fluids draw water out (e.g. mannitol to reduce cerebral oedema). Rapid osmolar shifts damage the brain.',
  ],

  mechanism: {
    title: 'Count particles (osmolarity) vs effective particles (tonicity)',
    steps: [
      { id: 's1', label: 'Osmolarity = particles/L (molarity × dissociation)', emphasis: 'key' },
      { id: 's2', label: 'Tonicity = effective osmolarity (non-penetrating solutes only)', emphasis: 'key' },
      { id: 's3', label: 'Penetrating solute (urea) → osmolarity yes, tonicity no' },
      { id: 's4', label: 'Hypotonic → cell swells; hypertonic → cell shrinks', emphasis: 'key' },
      { id: 's5', label: 'Isotonic → no net water shift' },
    ],
  },

  examFindings: [
    { sign: 'RBCs placed in distilled water swell and lyse', mechanism: 'Hypotonic → water enters (haemolysis)', significance: 'key' },
    { sign: 'Cells shrink (crenate) in concentrated saline', mechanism: 'Hypertonic → water leaves', significance: 'key' },
    { sign: 'Iso-osmotic urea solution still swells cells', mechanism: 'Urea penetrates → not effective → hypotonic', significance: 'key' },
    { sign: 'Mannitol reduces cerebral oedema', mechanism: 'Hypertonic, non-penetrating → draws water out of cells', significance: 'supportive' },
    { sign: 'Plasma osmolality ≈ 290 mOsm/kg', mechanism: 'Normal reference (mostly Na⁺ salts, glucose, urea)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Measure of total solute particles per litre', meaning: 'Osmolarity' },
    { clue: 'Effective osmolarity determining cell volume', meaning: 'Tonicity (non-penetrating solutes)' },
    { clue: 'Solute that raises osmolarity but not tonicity', meaning: 'A penetrating solute (e.g. urea)' },
    { clue: 'Solution causing a cell to swell', meaning: 'Hypotonic' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Tonicity dictates IV-fluid effects and cell-volume disorders (hyponatraemia → cerebral oedema); mannitol (hypertonic) treats raised ICP. Osmoreceptors and ADH regulate plasma osmolality via [[homeostasis-feedback-control]]. Underlying water movement: [[diffusion-osmosis-basics]].' },
  ],

  mnemonics: [
    { hook: 'Osmolarity = ALL particles; Tonicity = EFFECTIVE (non-penetrating) particles', expansion: ['Urea: osmolarity yes, tonicity no'] },
    { hook: 'HypOtonic → cells swell (O = grOw); HYPERtonic → shrink', expansion: ['Isotonic = no change'] },
  ],

  traps: [
    {
      questionCategory: 'Iso-osmotic vs isotonic',
      wrongInstinct: 'A solution that is iso-osmotic to plasma is always isotonic (no volume change)',
      rightAnswer: 'Not necessarily — if the solute PENETRATES the cell (e.g. urea), an iso-osmotic solution is actually HYPOTONIC and cells swell',
      why: 'Only non-penetrating solutes contribute to tonicity; penetrating solutes equilibrate and don\'t hold water out.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Red blood cells placed in an iso-osmotic solution of urea (which freely penetrates the membrane) will:',
      options: [
        { id: 'a', text: 'Remain unchanged (isotonic)' },
        { id: 'b', text: 'Swell and lyse (the solution is effectively hypotonic)' },
        { id: 'c', text: 'Shrink (the solution is hypertonic)' },
        { id: 'd', text: 'Undergo active transport' },
      ],
      answerId: 'b',
      explanation: 'Urea penetrates and equilibrates, contributing to osmolarity but NOT tonicity. The solution is iso-osmotic but hypotonic, so water enters and the cells swell/lyse.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A cell placed in a hypertonic solution will:',
      options: [
        { id: 'a', text: 'Swell as water enters' },
        { id: 'b', text: 'Shrink as water leaves' },
        { id: 'c', text: 'Stay the same size' },
        { id: 'd', text: 'Actively pump in solute' },
      ],
      answerId: 'b',
      explanation: 'A hypertonic solution has a higher effective solute concentration outside the cell, so water moves out and the cell shrinks (crenates).',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Tonicity & cell volume', svg: OSMOSIS_TONICITY, caption: 'Hypotonic → swell; isotonic → no change; hypertonic → shrink. Osmolarity = all particles; tonicity = effective (non-penetrating) only.' },
  ],
};

export default osmolarityTonicityCellVolume;
