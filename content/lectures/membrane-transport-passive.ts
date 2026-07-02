import type { Lecture } from '../../lib/types';
import { MEMBRANE_TRANSPORT_TYPES } from '../../lib/figures';

export const membraneTransportPassive: Lecture = {
  id: 'membrane-transport-passive',
  title: 'Passive Membrane Transport: Channels & Carriers',
  system: 'physiology',
  source: 'L3 — Membrane Transport',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'L3 Membrane Transport' },
    { kind: 'mechanism', label: 'Facilitated diffusion' },
    { kind: 'exam', label: 'Channel vs carrier' },
  ],

  highYield: [
    '**Passive transport moves solute DOWN its electrochemical gradient — no ATP.** Two routes: **simple diffusion** through the lipid bilayer (lipid-soluble/small: O₂, CO₂, steroids) and **facilitated diffusion** through a **membrane protein** (for charged/polar/large solutes that cannot cross the bilayer).',
    '**Channels vs carriers — the key comparison.** **Channels** form a water-filled pore → **very fast**, transport ions/water, and are **gated** (voltage-, ligand-, or mechanically-gated). **Carriers (transporters)** **bind and change conformation** → **slower**, and show **carrier-mediated kinetics**.',
    '**Carrier-mediated transport has three signatures:** **saturation** (a transport maximum, Tm, when all carriers are occupied), **specificity** (structural selectivity), and **competition** (similar molecules compete for the carrier). Example: **GLUT** glucose transporters.',
    '**Facilitated diffusion is faster than simple diffusion for its substrate** but is still passive (down-gradient) and needs no energy — it just provides a protein path. Both reach equilibrium (no net movement) when concentrations equalise.',
    '**Water crosses via aquaporins** (water channels), and the driving force is the osmotic gradient. Transport-protein defects cause disease — e.g. a defective **Cl⁻ channel (CFTR) → cystic fibrosis**.',
  ],

  mechanism: {
    title: 'Down-gradient, via bilayer or protein',
    steps: [
      { id: 's1', label: 'Passive = down electrochemical gradient, no ATP', emphasis: 'key' },
      { id: 's2', label: 'Simple diffusion: lipid-soluble/small through bilayer' },
      { id: 's3', label: 'Facilitated: channel (fast, gated) vs carrier (slower)', emphasis: 'key' },
      { id: 's4', label: 'Carrier kinetics: saturation (Tm), specificity, competition', emphasis: 'key' },
      { id: 's5', label: 'Water via aquaporins; CFTR defect → cystic fibrosis' },
    ],
  },

  examFindings: [
    { sign: 'Transport rate plateaus at high substrate (Tm)', mechanism: 'Carrier saturation (all carriers occupied)', significance: 'key' },
    { sign: 'Glucose entering cells via GLUT', mechanism: 'Facilitated diffusion (carrier, down gradient)', significance: 'key' },
    { sign: 'Ion flux far faster than carrier transport', mechanism: 'Channels form open pores (very rapid)', significance: 'supportive' },
    { sign: 'Two similar sugars compete for uptake', mechanism: 'Carrier competition/specificity', significance: 'supportive' },
    { sign: 'Thick airway mucus from a Cl⁻ channel defect', mechanism: 'CFTR mutation → cystic fibrosis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Transport that saturates and can be competitively inhibited', meaning: 'Carrier-mediated (facilitated diffusion)' },
    { clue: 'Fastest way ions cross the membrane', meaning: 'Ion channels (gated pores)' },
    { clue: 'Route for O₂/CO₂ across the membrane', meaning: 'Simple diffusion' },
    { clue: 'Water channel protein', meaning: 'Aquaporin' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Carrier saturation explains renal glucose spillover in diabetes (Tm exceeded → glycosuria); channelopathies and CFTR disease are transport-protein disorders; gated channels drive electrical signalling ([[action-potential-genesis]]). Active transport: [[membrane-transport-active-vesicular]].' },
  ],

  mnemonics: [
    { hook: 'Channels = Cepid (fast, gated pore); Carriers = Conformation change (slow, saturable)', expansion: ['Saturation, Specificity, Competition = carrier hallmarks'] },
    { hook: 'Facilitated diffusion = passive but protein-assisted (GLUT)', expansion: ['Still down-gradient, no ATP'] },
  ],

  traps: [
    {
      questionCategory: 'Facilitated diffusion energy',
      wrongInstinct: 'Facilitated diffusion requires ATP because it uses a transport protein',
      rightAnswer: 'Facilitated diffusion is PASSIVE (down-gradient, no ATP) — the protein just provides a path; only active transport uses energy',
      why: 'Protein involvement ≠ energy use. Facilitated diffusion moves solute down its gradient without ATP; active transport moves against it with ATP.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which feature distinguishes carrier-mediated facilitated diffusion from simple diffusion?',
      options: [
        { id: 'a', text: 'It moves solute against the gradient' },
        { id: 'b', text: 'It shows saturation (a transport maximum) and competition' },
        { id: 'c', text: 'It requires ATP' },
        { id: 'd', text: 'It only transports lipid-soluble molecules' },
      ],
      answerId: 'b',
      explanation: 'Carrier-mediated transport saturates (limited carriers → Tm), is specific, and shows competition — unlike simple diffusion. Both are passive (down-gradient, no ATP).',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Compared with carriers, membrane ion channels transport solutes:',
      options: [
        { id: 'a', text: 'Much more slowly' },
        { id: 'b', text: 'Against the electrochemical gradient' },
        { id: 'c', text: 'Much faster, through a water-filled pore' },
        { id: 'd', text: 'Only using ATP' },
      ],
      answerId: 'c',
      explanation: 'Channels form gated water-filled pores and conduct ions extremely rapidly (millions/sec), far faster than carriers, which must bind and change conformation. Both are passive.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Membrane transport types', svg: MEMBRANE_TRANSPORT_TYPES, caption: 'Passive (simple/facilitated diffusion via channels or carriers) vs active (primary/secondary/vesicular). Passive = down-gradient, no ATP.' },
  ],
};

export default membraneTransportPassive;
