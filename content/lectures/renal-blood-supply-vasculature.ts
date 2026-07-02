import type { Lecture } from '../../lib/types';
import { RENAL_VASCULATURE } from '../../lib/figures';

export const renalBloodSupplyVasculature: Lecture = {
  id: 'renal-blood-supply-vasculature',
  title: 'Renal Blood Supply & Nephron Types',
  system: 'renal',
  source: 'L1 — Microscopic Anatomy of the Kidney & Urinary Tract',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L1 KUB Microanatomy' },
    { kind: 'mechanism', label: 'Renal vascular tree' },
    { kind: 'exam', label: 'Vasa recta' },
  ],

  highYield: [
    '**The renal arterial tree runs in a fixed order worth memorising: renal artery → segmental → interlobar → arcuate → interlobular (cortical radiate) → afferent arteriole → glomerulus.** This delivers ~20–25% of cardiac output to the kidneys — far more than their metabolic need, because the flow is for filtration.',
    '**The kidney has a unique PORTAL arrangement: two capillary beds in series.** Blood leaves the glomerulus through an **efferent arteriole** (not a venule) and enters a second capillary bed — the **peritubular capillaries** (around cortical tubules) or the **vasa recta** (around medullary loops) — before draining to veins. This lets filtration (glomerulus) and reabsorption/secretion (peritubular) be regulated independently.',
    '**Two nephron populations differ by location and job. Cortical nephrons (~85%) have glomeruli in the outer cortex and SHORT loops of Henle** and handle the bulk of reabsorption and salt/water excretion. **Juxtamedullary nephrons (~15%) have glomeruli near the medulla and LONG loops with vasa recta** — they build and use the medullary concentration gradient.',
    '**The vasa recta are the hairpin capillaries of the juxtamedullary nephrons and act as countercurrent EXCHANGERS** — supplying the medulla with oxygen and removing reabsorbed water without washing out the osmotic gradient ([[urine-concentration-countercurrent]]). Their slow flow is what makes concentrated urine possible.',
    '**Regional perfusion is deliberately uneven: the cortex is richly perfused, but the medulla runs on LOW blood flow to preserve the concentration gradient — making the medulla (thick ascending limb, S3 segment) the most HYPOXIA-prone zone** and first to be injured in ischaemia ([[renal-metabolism-gluconeogenesis]]). The interlobar/arcuate branches are also end-arterial, so occlusion causes wedge infarcts.',
  ],

  mechanism: {
    title: 'Ordered arterial tree; portal (2 capillary beds); cortical vs juxtamedullary',
    steps: [
      { id: 's1', label: 'Renal → segmental → interlobar → arcuate → interlobular → afferent', emphasis: 'key' },
      { id: 's2', label: 'Glomerulus → EFFERENT arteriole → peritubular/vasa recta (portal)', emphasis: 'key' },
      { id: 's3', label: 'Cortical (~85%): short loops, bulk reabsorption; salt/water excretion' },
      { id: 's4', label: 'Juxtamedullary (~15%): long loops + vasa recta → concentrate urine', emphasis: 'key' },
      { id: 's5', label: 'Medulla low-flow → hypoxia-prone (ATN); vasa recta = exchanger', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Efferent arteriole (not venule) leaving the glomerulus', mechanism: 'Portal arrangement — two capillary beds in series', significance: 'key' },
    { sign: 'Vasa recta paralleling the long loops of Henle', mechanism: 'Juxtamedullary nephrons — countercurrent exchange', significance: 'key' },
    { sign: 'Medulla is the first zone injured in ischaemia', mechanism: 'Deliberately low medullary blood flow (hypoxia-prone)', significance: 'key' },
    { sign: 'Wedge-shaped renal infarct', mechanism: 'End-arterial interlobar/arcuate branches', significance: 'supportive' },
    { sign: 'Kidneys receive ~20–25% of cardiac output', mechanism: 'Flow for filtration, not metabolic demand', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The vessel leaving the glomerulus', meaning: 'The efferent arteriole (into a second capillary bed)' },
    { clue: 'The nephron type that concentrates urine', meaning: 'Juxtamedullary (long loops + vasa recta)' },
    { clue: 'The capillaries acting as countercurrent exchangers', meaning: 'The vasa recta' },
    { clue: 'The correct order of arteries before the afferent arteriole', meaning: 'Segmental → interlobar → arcuate → interlobular' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The efferent arteriole is the key control point for GFR ([[glomerular-filtration-gfr]], [[renal-hemodynamics-autoregulation]]); the vasa recta preserve the gradient that [[urine-concentration-countercurrent]] and [[adh-water-regulation]] exploit; medullary hypoxia underlies acute tubular necrosis ([[acute-kidney-injury-azotemia]]). This vascular anatomy complements the nephron histology of [[nephron-kidney-histology]].' },
  ],

  mnemonics: [
    { hook: 'Arterial order: "Some Interns Are Incredibly Awesome" — Segmental, Interlobar, Arcuate, Interlobular, Afferent', expansion: ['Then glomerulus → efferent', 'Portal: 2 capillary beds in series'] },
    { hook: 'Nephron split: "Cortical = short loops (bulk); Juxtamedullary = long loops + vasa recta (concentrate)"', expansion: ['~85% cortical, ~15% juxtamedullary', 'Vasa recta = countercurrent exchanger'] },
  ],

  traps: [
    {
      questionCategory: 'Vessel leaving the glomerulus',
      wrongInstinct: 'Blood leaves the glomerular capillaries through a venule like elsewhere in the body',
      rightAnswer: 'Glomerular blood exits through an EFFERENT ARTERIOLE into a SECOND capillary bed (peritubular capillaries/vasa recta) — a portal system with two capillary beds in series, not a venule',
      why: 'This unusual arteriole-to-capillary-to-arteriole arrangement is what lets the kidney set glomerular pressure (via efferent tone) independently of tubular perfusion — the basis of GFR autoregulation and of ACE-inhibitor effects.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Blood leaving the glomerular capillaries passes next into the:',
      options: [
        { id: 'a', text: 'Renal vein directly' },
        { id: 'b', text: 'Efferent arteriole, then a second (peritubular/vasa recta) capillary bed' },
        { id: 'c', text: 'Arcuate artery' },
        { id: 'd', text: 'Interlobar vein' },
      ],
      answerId: 'b',
      explanation: 'The kidney has a portal arrangement: glomerular blood exits via the efferent arteriole into a second capillary bed (peritubular capillaries around cortical tubules, or vasa recta around medullary loops) before draining to veins.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which nephrons possess long loops of Henle with vasa recta and are chiefly responsible for producing concentrated urine?',
      options: [
        { id: 'a', text: 'Cortical nephrons' },
        { id: 'b', text: 'Juxtamedullary nephrons' },
        { id: 'c', text: 'All nephrons equally' },
        { id: 'd', text: 'Aglomerular nephrons' },
      ],
      answerId: 'b',
      explanation: 'Juxtamedullary nephrons (~15%) have glomeruli near the medulla, long loops of Henle and accompanying vasa recta; they build and use the medullary osmotic gradient to concentrate urine. Cortical nephrons have short loops and handle bulk reabsorption.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Renal blood supply & nephron types', svg: RENAL_VASCULATURE, caption: 'The ordered arterial tree, the portal (two-capillary-bed) arrangement, and cortical vs juxtamedullary nephrons.' },
  ],
};

export default renalBloodSupplyVasculature;
