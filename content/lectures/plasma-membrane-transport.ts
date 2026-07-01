import type { Lecture } from '../../lib/types';
import { CELL_MEMBRANE } from '../../lib/figures';

export const plasmaMembraneTransport: Lecture = {
  id: 'plasma-membrane-transport',
  title: 'Plasma Membrane: Fluid Mosaic, Glycocalyx & Transport',
  system: 'histology',
  source: 'L1 — Cytology',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Histology' },
    { kind: 'lecture', label: 'L1 Cytology' },
    { kind: 'mechanism', label: 'Fluid mosaic' },
    { kind: 'exam', label: 'Integral vs peripheral' },
  ],

  highYield: [
    '**Fluid mosaic model:** a **phospholipid bilayer** (hydrophilic phosphate heads out/in, hydrophobic fatty-acid tails inward) studded with proteins that drift laterally. **Cholesterol** sits between phospholipids as a **fluidity buffer**. On **TEM the membrane is trilaminar** ("railroad track") — two dense lines (heads) flanking a lucent centre (tails).',
    '**Membrane proteins by how they sit.** **Integral (transmembrane)** proteins span the bilayer → **channels, carriers, receptors, adhesion molecules, enzymes** (e.g. adenylate cyclase); they can only be removed by disrupting the membrane. **Peripheral** proteins attach loosely to one surface.',
    '**Glycocalyx = the cell coat** — carbohydrate chains of **glycolipids and glycoproteins** on the outer surface. Functions: **cell recognition, immune identity, adhesion, protection**. It is PAS-positive.',
    '**Transport across the membrane.** **Passive (no ATP):** simple diffusion (O₂, CO₂), facilitated diffusion via **channel/carrier** proteins, osmosis. **Active (uses ATP):** the **Na⁺/K⁺-ATPase** (3 Na⁺ out / 2 K⁺ in) and secondary active transport (**SGLT** = Na⁺-coupled glucose). Bulk transport = **endocytosis / exocytosis**.',
    '**Membrane polarity underlies epithelial function.** The **apical** domain (facing the lumen) differs from the **basolateral** domain, separated by tight junctions — this lets cells absorb on one side and pump out the other (developed further in [[cell-junctions]] and [[epithelial-surface-basement-membrane]]).',
  ],

  mechanism: {
    title: 'Bilayer barrier → selective transport',
    steps: [
      { id: 's1', label: 'Phospholipid bilayer = selectively permeable barrier', emphasis: 'key' },
      { id: 's2', label: 'Integral proteins = channels/carriers/receptors; peripheral = surface' },
      { id: 's3', label: 'Cholesterol buffers fluidity; glycocalyx = recognition coat' },
      { id: 's4', label: 'Passive (no ATP) vs active (Na⁺/K⁺-ATPase, SGLT)', emphasis: 'key' },
      { id: 's5', label: 'Apical vs basolateral polarity → directional transport' },
    ],
  },

  examFindings: [
    { sign: 'Trilaminar "railroad track" on TEM', mechanism: 'Two dense phosphate lines + lucent lipid core', significance: 'key' },
    { sign: 'Integral protein cannot be washed off', mechanism: 'It spans the hydrophobic core (transmembrane)', significance: 'key' },
    { sign: 'PAS-positive fuzzy surface coat', mechanism: 'Glycocalyx (glycoprotein/glycolipid carbohydrate)', significance: 'supportive' },
    { sign: 'Glucose uptake against gradient in the gut/PCT', mechanism: 'SGLT (secondary active, Na⁺-coupled)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A membrane transporter moves ions with direct ATP hydrolysis', meaning: 'Primary active transport (e.g. Na⁺/K⁺-ATPase)' },
    { clue: 'O₂ and CO₂ crossing freely, no energy', meaning: 'Simple diffusion through the lipid bilayer' },
    { clue: 'Large particle engulfed into a vesicle', meaning: 'Endocytosis (phagocytosis/pinocytosis)' },
    { clue: 'Surface carbohydrate mediating cell–cell recognition', meaning: 'Glycocalyx' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Membrane polarity and transporters explain absorption (gut microvilli, PCT), the resting potential (Na⁺/K⁺-ATPase), and drug/receptor targets. Membrane blebbing is an early sign of cell injury — see [[subcellular-pathology-alterations]].' },
  ],

  mnemonics: [
    { hook: 'Integral = "In the membrane"; Peripheral = "Perched on it"', expansion: ['Integral needs detergent to remove'] },
    { hook: 'Na⁺/K⁺-ATPase = "3 Na out, 2 K in, ATP spent"', expansion: ['Sets the gradient SGLT exploits'] },
  ],

  traps: [
    {
      questionCategory: 'Facilitated diffusion vs active transport',
      wrongInstinct: 'Any transport that needs a protein carrier uses ATP',
      rightAnswer: 'Facilitated diffusion uses a carrier/channel but NO ATP (moves down-gradient); active transport uses ATP to move against the gradient',
      why: 'Carrier involvement ≠ energy use. Only active transport (or secondary active) works against the concentration gradient.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'On transmission electron microscopy the plasma membrane appears trilaminar because:',
      options: [
        { id: 'a', text: 'It has three separate bilayers' },
        { id: 'b', text: 'The two electron-dense phospholipid heads flank an electron-lucent lipid tail core' },
        { id: 'c', text: 'Cholesterol forms three layers' },
        { id: 'd', text: 'Integral proteins stain in three bands' },
      ],
      answerId: 'b',
      explanation: 'Osmium binds the polar heads, giving two dense outer lines with a lucent centre (the hydrophobic tails) — the "railroad track" trilaminar appearance.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which is an example of secondary active transport?',
      options: [
        { id: 'a', text: 'O₂ diffusing into a cell' },
        { id: 'b', text: 'Na⁺/K⁺-ATPase' },
        { id: 'c', text: 'SGLT moving glucose using the Na⁺ gradient' },
        { id: 'd', text: 'A K⁺ leak channel' },
      ],
      answerId: 'c',
      explanation: 'SGLT couples "downhill" Na⁺ entry (gradient set by the Na⁺/K⁺-ATPase) to "uphill" glucose entry — secondary active transport. The ATPase itself is primary active; O₂ and K⁺-leak are passive.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Fluid mosaic membrane', svg: CELL_MEMBRANE, caption: 'Bilayer + integral/peripheral proteins, cholesterol (fluidity), glycocalyx (recognition). Passive vs active transport; apical/basolateral polarity.' },
  ],
};

export default plasmaMembraneTransport;
