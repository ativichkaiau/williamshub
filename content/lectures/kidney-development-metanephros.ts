import type { Lecture } from '../../lib/types';
import { KIDNEY_DEVELOPMENT } from '../../lib/figures';

export const kidneyDevelopmentMetanephros: Lecture = {
  id: 'kidney-development-metanephros',
  title: 'Development of the Kidney & Urinary Tract',
  system: 'renal',
  source: 'L2 — Development of the Kidney & Urinary Tract',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L2 KUB Development' },
    { kind: 'mechanism', label: 'Metanephros' },
    { kind: 'exam', label: 'Ureteric bud induction' },
  ],

  highYield: [
    '**Three kidney systems form in sequence from intermediate mesoderm:** the **pronephros** (week 4, cervical, non-functional, regresses), the **mesonephros** (temporary, briefly functional; its duct persists), and the **metanephros** (week 5 onward) — the **definitive kidney** that begins producing urine by ~week 10.',
    '**The metanephros arises from two interacting parts:** (1) the **ureteric bud** (an outgrowth of the mesonephric/Wolffian duct) → **collecting system** (ureter, renal pelvis, major/minor calyces, collecting ducts); (2) the **metanephric blastema** (metanephric mesoderm) → the **nephrons** (glomerulus, PCT, loop, DCT). Each induces the other — no bud, no kidney; no cap of blastema, no branching.',
    '**Reciprocal induction:** the ureteric bud repeatedly branches, and each ampulla induces surrounding metanephric mesenchyme to condense and undergo mesenchymal-to-epithelial transformation into nephrons, which then connect to the collecting ducts. Failure of this connection or of induction causes cystic/dysplastic kidneys.',
    '**The kidneys "ascend":** they first form in the pelvis and appear to move to the lumbar region as the embryo\'s caudal end grows away. During ascent they are supplied by a succession of transient arteries; the final renal arteries arise at L1–L2. Persistence of lower vessels gives **accessory renal arteries**.',
    '**The cloaca is partitioned by the urorectal septum** into a dorsal anorectal canal and a ventral **urogenital sinus**, which forms the **bladder** and **urethra**. The trigone derives from absorbed mesonephric ducts (mesoderm); the rest of the bladder from endodermal urogenital sinus. The **allantois** regresses to the **urachus** (median umbilical ligament).',
  ],

  mechanism: {
    title: 'Pro → meso → metanephros; bud + blastema; ascend',
    steps: [
      { id: 's1', label: 'Pronephros (regresses) → mesonephros (transient) → metanephros', emphasis: 'key' },
      { id: 's2', label: 'Ureteric bud → collecting system (ureter → collecting ducts)', emphasis: 'key' },
      { id: 's3', label: 'Metanephric blastema → nephrons (glomerulus → DCT)', emphasis: 'key' },
      { id: 's4', label: 'Reciprocal induction: bud branches, mesenchyme becomes epithelium' },
      { id: 's5', label: 'Kidneys ascend pelvis → lumbar; cloaca → bladder + urethra' },
    ],
  },

  examFindings: [
    { sign: 'Ureter, pelvis, calyces and collecting ducts', mechanism: 'Ureteric bud derivatives', significance: 'key' },
    { sign: 'Glomerulus, PCT, loop and DCT (the nephron)', mechanism: 'Metanephric blastema derivatives', significance: 'key' },
    { sign: 'Definitive kidney is the metanephros', mechanism: 'Third and permanent system (from ~week 5)', significance: 'key' },
    { sign: 'Accessory (polar) renal arteries', mechanism: 'Persistent transient vessels from ascent', significance: 'supportive' },
    { sign: 'Urachus (median umbilical ligament)', mechanism: 'Regressed allantois from the bladder apex', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The embryonic structure that becomes the collecting ducts and ureter', meaning: 'Ureteric bud' },
    { clue: 'The embryonic structure that becomes the nephrons', meaning: 'Metanephric blastema (metanephric mesoderm)' },
    { clue: 'The definitive adult kidney', meaning: 'Metanephros (third system)' },
    { clue: 'The part of the cloaca that forms the bladder', meaning: 'Urogenital sinus' },
  ],

  treatment: [
    { logic: 'Why development matters', detail: 'Errors of induction, branching and ascent produce common **congenital anomalies** ([[kub-congenital-anomalies]]) — horseshoe/ectopic kidney, agenesis, duplex systems and PKD. The adult architecture that results is the histology in [[nephron-kidney-histology]] and [[lower-urinary-tract-histology]]. Fetal urine maintains amniotic fluid — failure → oligohydramnios (Potter sequence).' },
  ],

  mnemonics: [
    { hook: '"Pro-Meso-Meta": Pronephros (gone), Mesonephros (temporary), Metanephros (keeper)', expansion: ['Metanephros = definitive kidney', 'Mesonephric duct gives the ureteric bud'] },
    { hook: 'Bud = tubes, Blastema = filters', expansion: ['Ureteric BUD → collecting system (ureter → collecting ducts)', 'Metanephric BLASTEMA → nephrons (glomerulus → DCT)'] },
  ],

  traps: [
    {
      questionCategory: 'Origin of the collecting ducts vs nephron',
      wrongInstinct: 'The whole kidney, including collecting ducts, develops from one mesenchymal mass',
      rightAnswer: 'The collecting system (collecting ducts, calyces, pelvis, ureter) comes from the URETERIC BUD, while the nephron proper (glomerulus to DCT) comes from the METANEPHRIC BLASTEMA — two different origins that induce each other',
      why: 'The dual origin explains why a failed junction between bud-derived collecting ducts and blastema-derived nephrons causes multicystic dysplastic kidney; it is a classic exam distinction.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The collecting ducts, minor and major calyces, renal pelvis and ureter all develop from the:',
      options: [
        { id: 'a', text: 'Metanephric blastema' },
        { id: 'b', text: 'Ureteric bud' },
        { id: 'c', text: 'Pronephros' },
        { id: 'd', text: 'Paramesonephric duct' },
      ],
      answerId: 'b',
      explanation: 'The ureteric bud (an outgrowth of the mesonephric duct) branches to form the entire collecting system; the metanephric blastema it induces forms the nephrons from glomerulus to DCT.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The definitive (permanent) human kidney is derived from which embryonic system?',
      options: [
        { id: 'a', text: 'Pronephros' },
        { id: 'b', text: 'Mesonephros' },
        { id: 'c', text: 'Metanephros' },
        { id: 'd', text: 'Allantois' },
      ],
      answerId: 'c',
      explanation: 'The metanephros is the third and permanent system; the pronephros regresses completely and the mesonephros is only transiently functional (its duct persists to form the ureteric bud and, in males, genital ducts).',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Development of the kidney', svg: KIDNEY_DEVELOPMENT, caption: 'Pronephros → mesonephros → metanephros; ureteric bud vs metanephric blastema; ascent and anomalies.' },
  ],
};

export default kidneyDevelopmentMetanephros;
