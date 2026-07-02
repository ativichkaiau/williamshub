import type { Lecture } from '../../lib/types';

export const lowerUrinaryTractHistology: Lecture = {
  id: 'lower-urinary-tract-histology',
  title: 'Histology of the Ureter, Bladder & Urethra',
  system: 'renal',
  source: 'L1 — Microscopic Anatomy of the Kidney & Urinary Tract',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L1 KUB Microanatomy' },
    { kind: 'mechanism', label: 'Urothelium' },
    { kind: 'exam', label: 'Transitional epithelium' },
  ],

  highYield: [
    '**The urinary passages (calyces → renal pelvis → ureter → bladder → proximal urethra) are lined by urothelium (transitional epithelium)** — a stratified epithelium unique to the urinary tract. Its surface "umbrella" (dome) cells and specialised apical plaques let it **stretch and flatten** as the bladder fills and act as an **impermeable barrier** against hypertonic, toxic urine.',
    '**Urothelium is pseudo-adaptive:** relaxed (empty), it looks several cells thick with rounded surface cells; stretched (full), it appears only 2–3 cells thick with flattened surface cells. It sits on a lamina propria; there is **no true submucosa** in most of the tract.',
    '**The ureter wall has an inner longitudinal + outer circular muscle layer** (the reverse of the gut), plus a third outer longitudinal layer distally. **Peristalsis** actively propels urine to the bladder — urine does not simply fall. The ureters enter the bladder obliquely, forming a **physiological valve** that prevents reflux.',
    '**The bladder\'s detrusor** is three interwoven smooth-muscle layers (not neatly separable). The **trigone** (between the two ureteric orifices and the internal urethral orifice) is smooth-walled and embryologically distinct. Parasympathetic (M3) contraction empties the bladder; see [[micturition-reflex]].',
    '**The urethra\'s lining changes along its length:** urothelium proximally → **pseudostratified/stratified columnar** in the middle → **stratified squamous** near the external orifice (protecting against surface friction). The female urethra is short (~4 cm); the male urethra is long and has prostatic, membranous and spongy parts.',
  ],

  mechanism: {
    title: 'Stretchable waterproof lining + muscular propulsion',
    steps: [
      { id: 's1', label: 'Urothelium lines calyces → pelvis → ureter → bladder → proximal urethra', emphasis: 'key' },
      { id: 's2', label: 'Umbrella cells + apical plaques = stretch + waterproof barrier', emphasis: 'key' },
      { id: 's3', label: 'Ureter: inner longitudinal + outer circular muscle → peristalsis' },
      { id: 's4', label: 'Oblique ureteric entry = antireflux valve' },
      { id: 's5', label: 'Urethral lining shifts to stratified squamous distally' },
    ],
  },

  examFindings: [
    { sign: 'Transitional epithelium (urothelium) with umbrella cells', mechanism: 'Stretchable, impermeable lining of the urinary tract', significance: 'key' },
    { sign: 'Epithelium appears thicker when empty, thinner when full', mechanism: 'Umbrella cells flatten on distension', significance: 'key' },
    { sign: 'Inner longitudinal / outer circular ureteric muscle', mechanism: 'Reverse of gut — drives peristalsis', significance: 'supportive' },
    { sign: 'Smooth-walled bladder trigone', mechanism: 'Mesodermal origin (vs rugated dome)', significance: 'supportive' },
    { sign: 'Stratified squamous epithelium at external urethral orifice', mechanism: 'Protection against surface friction', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The epithelium unique to the urinary tract', meaning: 'Transitional epithelium (urothelium)' },
    { clue: 'Cells that flatten as the bladder fills', meaning: 'Surface umbrella (dome) cells' },
    { clue: 'Anatomical feature preventing vesicoureteric reflux', meaning: 'Oblique passage of the ureter through the bladder wall' },
    { clue: 'The three-cornered smooth region of the bladder base', meaning: 'Trigone' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Urothelium is the origin of **transitional cell (urothelial) carcinoma** — the commonest bladder cancer, presenting with painless haematuria ([[urine-microscopy-sediment]]). The antireflux valve failing → reflux nephropathy. Detrusor and sphincter function underlie continence ([[micturition-reflex]]). Nephron/corpuscle histology: [[nephron-kidney-histology]].' },
  ],

  mnemonics: [
    { hook: 'Ureter muscle is "inside-out" vs gut: Inner Longitudinal, Outer Circular', expansion: ['Gut is inner circular, outer longitudinal', 'Distal ureter adds a 3rd outer longitudinal layer'] },
    { hook: 'Urothelium = the stretchy waterproof raincoat', expansion: ['Umbrella cells + plaques', 'Barrier against toxic hypertonic urine'] },
  ],

  traps: [
    {
      questionCategory: 'Interpreting urothelial thickness',
      wrongInstinct: 'A specimen with only 2–3 cell layers of urothelium is abnormally thin/atrophic',
      rightAnswer: 'Urothelium normally appears thinner (flattened umbrella cells) when the organ is DISTENDED and thicker when relaxed — thickness reflects the state of filling, not pathology',
      why: 'Transitional epithelium is defined by its ability to change appearance with stretch; you must know the filling state before calling it abnormal.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The characteristic epithelium lining the renal pelvis, ureter and bladder is:',
      options: [
        { id: 'a', text: 'Simple columnar epithelium' },
        { id: 'b', text: 'Transitional epithelium (urothelium)' },
        { id: 'c', text: 'Stratified squamous keratinised epithelium' },
        { id: 'd', text: 'Simple squamous epithelium' },
      ],
      answerId: 'b',
      explanation: 'Urothelium (transitional epithelium) with its umbrella cells and apical plaques allows distension and forms an impermeable barrier against urine — a feature unique to the urinary passages.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Peristalsis in the ureter that actively propels urine to the bladder is generated by:',
      options: [
        { id: 'a', text: 'Ciliary beating of the epithelium' },
        { id: 'b', text: 'Gravity alone' },
        { id: 'c', text: 'Smooth muscle in the ureteric wall' },
        { id: 'd', text: 'Skeletal muscle contraction' },
      ],
      answerId: 'c',
      explanation: 'The ureter has inner longitudinal and outer circular smooth-muscle layers that contract peristaltically; urine is actively pumped, not merely dropped, to the bladder.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default lowerUrinaryTractHistology;
