import type { Lecture } from '../../lib/types';
import { EPITHELIAL_SURFACE } from '../../lib/figures';

export const epithelialSurfaceBasementMembrane: Lecture = {
  id: 'epithelial-surface-basement-membrane',
  title: 'Apical Specializations & the Basement Membrane',
  system: 'histology',
  source: 'L3 — Epithelium & Cell Adhesion',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Histology' },
    { kind: 'lecture', label: 'L3 Epithelium' },
    { kind: 'mechanism', label: 'Surface domains' },
    { kind: 'exam', label: 'Microvilli vs cilia' },
  ],

  highYield: [
    '**Microvilli = actin-cored, non-motile finger-like projections** that vastly increase surface area for **absorption**. Anchored in the **terminal web**; en masse they appear as a **brush (striated) border** — classically in the **small intestine** and **renal proximal convoluted tubule**.',
    '**Stereocilia = unusually long microvilli** (still an **actin** core, largely non-motile). Found on the **epididymis** (sperm maturation/absorption) and as the mechanosensory hair-cell bundles of the **inner ear**.',
    '**Cilia = motile, microtubule-based (9+2 axoneme, basal body 9+0)** hair-like projections that sweep fluid/mucus across the surface → **respiratory tract, uterine tube**; ependymal cilia move CSF. Do not confuse the actin microvillus with the microtubule cilium (see [[microtubules-motors-centrosome]]).',
    '**Basement membrane = basal lamina + reticular lamina** (PAS-positive; a thin sheet under every epithelium). **Basal lamina** — made by the **epithelium** — contains **laminin, type IV collagen, and perlecan (heparan-sulfate proteoglycan)**, and on TEM splits into **lamina lucida** (electron-lucent, integrins/laminin) + **lamina densa** (electron-dense type IV collagen network).',
    '**Reticular lamina — made by fibroblasts** of the connective tissue — contains **type III collagen (reticular fibres)**. The basement membrane anchors epithelium, is a **selective filtration barrier** (glomerulus), and a scaffold for repair. Hemidesmosomes clamp the epithelium to it (see [[cell-junctions]]).',
  ],

  mechanism: {
    title: 'Apical projections + basal anchor',
    steps: [
      { id: 's1', label: 'Microvilli (actin) → absorption; brush border', emphasis: 'key' },
      { id: 's2', label: 'Stereocilia (long actin) → epididymis, ear' },
      { id: 's3', label: 'Cilia (microtubule 9+2) → motility, mucus sweep', emphasis: 'key' },
      { id: 's4', label: 'Basal lamina (epithelium): laminin, type IV collagen', emphasis: 'key' },
      { id: 's5', label: 'Reticular lamina (fibroblast): type III collagen' },
    ],
  },

  examFindings: [
    { sign: 'Striated/brush border in gut & PCT', mechanism: 'Dense actin-cored microvilli (absorption)', significance: 'key' },
    { sign: 'Long apical tufts in the epididymis', mechanism: 'Stereocilia', significance: 'supportive' },
    { sign: 'Motile hairs moving mucus in the airway', mechanism: 'Cilia (9+2 microtubule axoneme)', significance: 'key' },
    { sign: 'PAS-positive line under the epithelium', mechanism: 'Basement membrane (basal + reticular lamina)', significance: 'key' },
    { sign: 'Electron-dense vs lucent sublayers on TEM', mechanism: 'Lamina densa (type IV collagen) vs lamina lucida', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Finger-like projections that expand absorptive area', meaning: 'Microvilli (actin core)' },
    { clue: 'Motile projections sweeping mucus in the trachea', meaning: 'Cilia (microtubule 9+2)' },
    { clue: 'PAS-positive layer separating epithelium from connective tissue', meaning: 'Basement membrane' },
    { clue: 'Component of the basal lamina made by the epithelium', meaning: 'Laminin / type IV collagen / perlecan' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Basement-membrane damage is central to disease: glomerular BM in nephritis/diabetes, blistering when hemidesmosomes fail (bullous pemphigoid), and invasion when carcinoma breaches it. Microvillus loss (e.g. coeliac) impairs absorption.' },
  ],

  mnemonics: [
    { hook: 'Microvilli = actin + Motionless + Munching (absorb); Cilia = microtubule + Moving', expansion: ['Stereocilia = long microvilli (epididymis/ear)'] },
    { hook: 'Basal lamina: Laminin, type IV coLLagen, perLecan (all "L")', expansion: ['Lamina Lucida + Lamina densa'] },
  ],

  traps: [
    {
      questionCategory: 'Microvilli vs cilia core',
      wrongInstinct: 'Both microvilli and cilia are motile and share a microtubule core',
      rightAnswer: 'Microvilli = ACTIN core, non-motile (absorption); cilia = MICROTUBULE 9+2, motile (movement)',
      why: 'Same "hair-like" look under LM, but opposite cytoskeleton and function — a very common exam distractor.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The brush (striated) border of the intestinal and proximal-tubule epithelium is composed of:',
      options: [
        { id: 'a', text: 'Cilia with a 9+2 microtubule core' },
        { id: 'b', text: 'Microvilli with an actin core' },
        { id: 'c', text: 'Stereocilia in the terminal web' },
        { id: 'd', text: 'Keratin projections' },
      ],
      answerId: 'b',
      explanation: 'The brush/striated border is a dense array of actin-cored microvilli that maximise absorptive surface. Cilia (microtubule, motile) belong to the airway/uterine tube.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The lamina densa of the basal lamina is composed chiefly of:',
      options: [
        { id: 'a', text: 'Type I collagen' },
        { id: 'b', text: 'Type III (reticular) collagen made by fibroblasts' },
        { id: 'c', text: 'Type IV collagen and perlecan' },
        { id: 'd', text: 'Elastin' },
      ],
      answerId: 'c',
      explanation: 'The lamina densa is a network of type IV collagen with perlecan (heparan sulfate), produced by the epithelium. Type III collagen forms the reticular lamina made by fibroblasts.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Apical specializations & basement membrane', svg: EPITHELIAL_SURFACE, caption: 'Microvilli (actin) vs stereocilia vs cilia (microtubule 9+2); basement membrane = basal lamina (epithelium) + reticular lamina (fibroblast).' },
  ],
};

export default epithelialSurfaceBasementMembrane;
