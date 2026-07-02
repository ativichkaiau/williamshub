import type { Lecture } from '../../lib/types';
import { NEPHRON_ANATOMY, GLOMERULAR_FILTRATION } from '../../lib/figures';

export const nephronKidneyHistology: Lecture = {
  id: 'nephron-kidney-histology',
  title: 'Microscopic Anatomy of the Kidney & Nephron',
  system: 'renal',
  source: 'L1 — Microscopic Anatomy of the Kidney & Urinary Tract',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L1 KUB Microanatomy' },
    { kind: 'mechanism', label: 'Nephron segments' },
    { kind: 'exam', label: 'Filtration barrier' },
  ],

  highYield: [
    '**The nephron is the functional unit** — ~1 million per kidney. Each has a **renal corpuscle** (glomerulus + Bowman\'s capsule) that filters, then a **tubule** (PCT → loop of Henle → DCT) that processes the filtrate before it drains into a **collecting duct**. Cortex holds the corpuscles, PCTs and DCTs; the medulla holds the loops and collecting ducts (giving the striated medullary rays and pyramids).',
    '**The renal corpuscle:** the **glomerulus** is a tuft of fenestrated capillaries fed by an **afferent** and drained by an **efferent arteriole** (a rete, capillary-between-two-arterioles). **Podocytes** (visceral epithelium) wrap the capillaries with interdigitating **foot processes**; the outer **parietal layer** of Bowman\'s capsule encloses the urinary space. **Mesangial cells** support the tuft and can contract to modulate filtration.',
    '**The glomerular filtration barrier has three layers:** (1) **fenestrated endothelium**, (2) **glomerular basement membrane** (fused, negatively charged — repels albumin), (3) **podocyte foot processes with slit diaphragms**. Together they hold back cells and plasma proteins while passing water and small solutes.',
    '**Tubules are recognised by their epithelium:** the **PCT** has tall cells with a dense **brush border** (microvilli), acidophilic cytoplasm and a narrow lumen — built for bulk reabsorption. The **thin limbs** are simple squamous (like capillaries). The **DCT** is cuboidal with **no brush border**, a wider clearer lumen and more nuclei per cross-section. **Collecting ducts** have pale cells with distinct lateral borders.',
    '**The juxtaglomerular apparatus (JGA)** sits where the thick ascending limb / early DCT of a nephron touches its OWN glomerulus: the **macula densa** (tubular NaCl sensor) + **JG (granular) cells** in the afferent arteriole wall (renin-secreting) + extraglomerular mesangial cells. It links tubular flow to renin release and tubuloglomerular feedback.',
  ],

  mechanism: {
    title: 'Corpuscle filters → tubule processes → duct collects',
    steps: [
      { id: 's1', label: 'Renal corpuscle = glomerulus + Bowman\'s capsule (filters)', emphasis: 'key' },
      { id: 's2', label: 'Filtration barrier: endothelium + GBM + podocyte slits', emphasis: 'danger' },
      { id: 's3', label: 'PCT (brush border) → loop → DCT (no brush border) → collecting duct' },
      { id: 's4', label: 'Cortex = corpuscles/PCT/DCT; medulla = loops/collecting ducts' },
      { id: 's5', label: 'JGA (macula densa + JG cells) links flow to renin', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Brush border on tubular cells', mechanism: 'PCT — microvilli for bulk reabsorption', significance: 'key' },
    { sign: 'Podocytes with foot processes and slit diaphragms', mechanism: 'Size barrier of the filtration apparatus', significance: 'key' },
    { sign: 'Fused, negatively charged basement membrane', mechanism: 'Charge barrier — repels albumin', significance: 'key' },
    { sign: 'Macula densa (tall, crowded tubular cells)', mechanism: 'NaCl sensor of the JGA', significance: 'supportive' },
    { sign: 'Cuboidal cells, wide lumen, no brush border', mechanism: 'DCT (vs PCT)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The tubular segment with a prominent brush border', meaning: 'Proximal convoluted tubule (PCT)' },
    { clue: 'The three layers a molecule crosses to be filtered', meaning: 'Endothelium → GBM → podocyte slit diaphragm' },
    { clue: 'Cells that secrete renin', meaning: 'Juxtaglomerular (granular) cells of the afferent arteriole' },
    { clue: 'The tubular sensor of the JGA', meaning: 'Macula densa' },
  ],

  treatment: [
    { logic: 'Why the histology matters', detail: 'Podocyte/GBM injury causes **proteinuria** (nephrotic vs nephritic — see [[urine-microscopy-sediment]]); the barrier drives filtration ([[glomerular-filtration-gfr]]); the JGA drives renin and feedback ([[renal-hemodynamics-autoregulation]]). Segment epithelia predict function ([[tubular-reabsorption-secretion]]). Lower-tract lining: [[lower-urinary-tract-histology]].' },
  ],

  mnemonics: [
    { hook: 'Filtration barrier = "Endothelium, Basement membrane, Slits" (3 layers)', expansion: ['Fenestrated endothelium (cells)', 'GBM (charge/albumin)', 'Podocyte slit diaphragm (size)'] },
    { hook: 'PCT = brush border; DCT = bare', expansion: ['PCT: tall, acidophilic, narrow lumen, microvilli', 'DCT: cuboidal, wide clear lumen, no brush border'] },
  ],

  traps: [
    {
      questionCategory: 'Distinguishing PCT from DCT on histology',
      wrongInstinct: 'Both convoluted tubules look the same',
      rightAnswer: 'The PCT has a prominent brush border, acidophilic cytoplasm and a narrow lumen; the DCT lacks a brush border, has a wider clearer lumen and more nuclei per cross-section',
      why: 'The brush border (apical microvilli) is the single most reliable feature — it reflects the PCT\'s massive reabsorptive surface, which the DCT does not need.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which cell type forms the outermost layer of the glomerular filtration barrier and provides the size-selective slit diaphragms?',
      options: [
        { id: 'a', text: 'Fenestrated endothelial cells' },
        { id: 'b', text: 'Mesangial cells' },
        { id: 'c', text: 'Podocytes (visceral epithelial cells)' },
        { id: 'd', text: 'Parietal epithelial cells' },
      ],
      answerId: 'c',
      explanation: 'Podocytes wrap the capillaries with interdigitating foot processes; the slits between them, bridged by slit diaphragms, are the final size barrier. Endothelium is the first layer and the GBM the middle (charge) layer.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The macula densa, a component of the juxtaglomerular apparatus, functions as a sensor of:',
      options: [
        { id: 'a', text: 'Blood oxygen tension' },
        { id: 'b', text: 'Tubular fluid NaCl concentration' },
        { id: 'c', text: 'Glomerular capillary pressure directly' },
        { id: 'd', text: 'Plasma glucose' },
      ],
      answerId: 'b',
      explanation: 'The macula densa is a plaque of specialised distal tubular cells that senses luminal NaCl; via the JGA it adjusts afferent arteriolar tone (tubuloglomerular feedback) and renin release.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'The nephron and its segments', svg: NEPHRON_ANATOMY, caption: 'Corpuscle → PCT → loop → DCT → collecting duct, with each segment\'s job and the JGA.' },
    { title: 'Glomerular filtration barrier', svg: GLOMERULAR_FILTRATION, caption: 'Three layers (endothelium, GBM, podocyte slits) and the Starling forces driving filtration.' },
  ],
};

export default nephronKidneyHistology;
