import type { Lecture } from '../../lib/types';
import { HE_STAINING } from '../../lib/figures';

export const histologyMethodsStaining: Lecture = {
  id: 'histology-methods-staining',
  title: 'Histology Methods: H&E Staining, Microscopy & Basophilia',
  system: 'histology',
  source: 'L1 — Cytology',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Histology' },
    { kind: 'lecture', label: 'L1 Cytology' },
    { kind: 'mechanism', label: 'Staining chemistry' },
    { kind: 'exam', label: 'Basophilic vs eosinophilic' },
  ],

  highYield: [
    '**H&E is the default stain — and the colours follow charge chemistry.** **Haematoxylin** is a **basic dye** that binds **acidic (anionic)** components → stains them blue/purple = **basophilia**. **Eosin** is an **acidic dye** that binds **basic (cationic)** components → stains them pink/red = **acidophilia / eosinophilia**.',
    '**Basophilic (blue) = nucleic acids.** The **nucleus (DNA)**, **nucleolus (rRNA)**, and **RER/ribosomes** (e.g. **Nissl bodies** of neurons, plasma-cell cytoplasm) stain blue because their phosphate groups are negatively charged and grab the basic dye.',
    '**Eosinophilic (pink) = most proteins.** Cytoplasm, **mitochondria**, **collagen** and most ECM, **RBCs**, keratin, and muscle stain pink because their amino groups are positively charged and grab the acidic dye.',
    '**Special stains for specific targets.** **PAS** (periodic acid–Schiff) → magenta for **glycogen, basement membrane, mucin/carbohydrate**. **Osmium tetroxide / Sudan** → black/red for **lipid** (must not be dissolved out). **Cresyl violet / toluidine blue** → Nissl and mast-cell granules (metachromasia).',
    '**Light vs electron microscopy.** LM (H&E, ~×1000) shows tissue architecture. **TEM** (ultrathin section) reveals **internal ultrastructure** (organelles, membranes as electron-dense/lucent); **SEM** gives a **3-D surface** view. Frozen section = rapid intra-operative diagnosis; paraffin section (5–8 µm) = routine.',
  ],

  mechanism: {
    title: 'Charge decides the colour',
    steps: [
      { id: 's1', label: 'Haematoxylin = BASIC dye → binds ACIDIC parts', emphasis: 'key' },
      { id: 's2', label: '→ nucleus (DNA), nucleolus (rRNA), RER = basophilic (blue)', emphasis: 'key' },
      { id: 's3', label: 'Eosin = ACIDIC dye → binds BASIC parts' },
      { id: 's4', label: '→ cytoplasm, mito, collagen = acidophilic (pink)', emphasis: 'key' },
      { id: 's5', label: 'Targeted questions → special stain (PAS/osmium/cresyl violet)' },
    ],
  },

  examFindings: [
    { sign: 'Blue cytoplasm in a plasma cell / neuron', mechanism: 'Abundant RER (rRNA) → basophilic (Nissl bodies)', significance: 'key' },
    { sign: 'Pink cytoplasm in muscle / RBC', mechanism: 'Protein-rich (actin/myosin, haemoglobin) → eosinophilic', significance: 'key' },
    { sign: 'Magenta basement membrane or glycogen', mechanism: 'PAS stains carbohydrate', significance: 'supportive' },
    { sign: 'Deep-blue nucleus', mechanism: 'DNA phosphate binds haematoxylin', significance: 'key' },
  ],

  investigations: [
    { clue: 'A structure stains intensely blue with haematoxylin', meaning: 'It is rich in nucleic acid (nucleus, nucleolus, or RER)' },
    { clue: 'You need to see glycogen or the basement membrane', meaning: 'Order PAS (periodic acid–Schiff)' },
    { clue: 'You need to preserve and show fat droplets', meaning: 'Use osmium tetroxide / Sudan on frozen tissue (paraffin dissolves lipid)' },
    { clue: '3-D view of a cell surface (e.g. cilia carpet)', meaning: 'Scanning electron microscope (SEM)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Reading any slide starts with "blue = nucleic acid, pink = protein." Pathologists use basophilia (hyperchromatic nuclei) and special stains to diagnose disease — the same logic underlies [[subcellular-pathology-alterations]].' },
  ],

  mnemonics: [
    { hook: '"Basophilic loves the BASIC dye" (haematoxylin, blue)', expansion: ['Acidic targets: DNA, rRNA, RER'] },
    { hook: 'Eosin = "E" for Everything pink (cytoplasm, collagen, RBC)', expansion: ['Acidic dye binds basic proteins'] },
  ],

  traps: [
    {
      questionCategory: 'Which dye stains the nucleus?',
      wrongInstinct: 'The nucleus is acidic so it must stain with the acidic dye (eosin)',
      rightAnswer: 'DNA is acidic → it binds the BASIC dye haematoxylin → blue (basophilic)',
      why: 'Acidic components bind basic dyes and vice versa. "Basophilic" describes the target loving the basic dye, not being basic itself.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A cell with abundant rough ER (e.g. a plasma cell) shows strongly basophilic cytoplasm on H&E because:',
      options: [
        { id: 'a', text: 'Its mitochondria bind eosin' },
        { id: 'b', text: 'The rRNA of ribosomes is acidic and binds haematoxylin' },
        { id: 'c', text: 'Keratin binds haematoxylin' },
        { id: 'd', text: 'Glycogen binds haematoxylin' },
      ],
      answerId: 'b',
      explanation: 'Ribosomal RNA on the RER is negatively charged (acidic) and binds the basic dye haematoxylin → basophilic cytoplasm (Nissl bodies in neurons, "clock-face" plasma cells).',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'To highlight the glomerular basement membrane, the best stain is:',
      options: [
        { id: 'a', text: 'Eosin alone' },
        { id: 'b', text: 'Osmium tetroxide' },
        { id: 'c', text: 'Periodic acid–Schiff (PAS)' },
        { id: 'd', text: 'Cresyl violet' },
      ],
      answerId: 'c',
      explanation: 'PAS stains carbohydrate-rich structures magenta, including basement membranes, glycogen, and mucin. Osmium is for lipid; cresyl violet for Nissl.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'H&E: basophilia vs eosinophilia', svg: HE_STAINING, caption: 'Haematoxylin (basic dye) → acidic targets blue (nucleus/nucleolus/RER = basophilic). Eosin (acid dye) → basic targets pink (cytoplasm/collagen = eosinophilic).' },
  ],
};

export default histologyMethodsStaining;
