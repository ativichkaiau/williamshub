import type { Lecture } from '../../lib/types';
import { RENAL_AUTOREGULATION } from '../../lib/figures';

export const renalHemodynamicsAutoregulation: Lecture = {
  id: 'renal-hemodynamics-autoregulation',
  title: 'Renal Blood Flow & Autoregulation',
  system: 'renal',
  source: 'L3 — Glomerular Filtration, Hemodynamics & Tubular Transport',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L3 Filtration & Transport' },
    { kind: 'mechanism', label: 'Autoregulation' },
    { kind: 'exam', label: 'Tubuloglomerular feedback' },
  ],

  highYield: [
    '**The kidneys receive ~20–25% of cardiac output (~1.1 L/min) for their size** — far more than their metabolic need, because this flow is for *filtration*, not oxygen delivery. Blood runs afferent arteriole → glomerular capillaries → efferent arteriole → **peritubular capillaries / vasa recta** → veins (a portal arrangement: two capillary beds in series).',
    '**Autoregulation keeps renal blood flow and GFR nearly constant over a mean arterial pressure of ~80–180 mmHg.** This protects the glomerulus from pressure swings and stabilises filtration. Below ~80 mmHg autoregulation fails and GFR falls (pre-renal state); this is why sustained hypotension causes acute kidney injury.',
    '**Two mechanisms achieve autoregulation, both acting on the afferent arteriole:** (1) the **myogenic response** — a rise in pressure stretches vascular smooth muscle, which reflexly contracts; (2) **tubuloglomerular feedback (TGF)** — the **macula densa** senses increased distal NaCl delivery (a proxy for high GFR) and releases **adenosine/ATP**, constricting the afferent arteriole to bring GFR back down.',
    '**The renin–angiotensin–aldosterone system (RAAS) overrides autoregulation when volume is low:** low perfusion / low macula-densa NaCl / sympathetic drive → **renin** from JG cells → angiotensin II. Angiotensin II preferentially constricts the **efferent** arteriole (preserving GFR), stimulates Na⁺ reabsorption and aldosterone, and raises blood pressure — trading GFR maintenance for salt and water retention.',
    '**Vasoactive modulators fine-tune tone:** prostaglandins and nitric oxide **vasodilate** (protect renal flow — NSAIDs block them and can precipitate AKI); angiotensin II, endothelin and sympathetic noradrenaline **vasoconstrict**. The balance sets renal blood flow moment to moment.',
  ],

  mechanism: {
    title: 'High flow, autoregulated by myogenic + TGF; RAAS overrides',
    steps: [
      { id: 's1', label: 'Kidneys get ~20–25% of CO (for filtration, not O₂)', emphasis: 'key' },
      { id: 's2', label: 'RBF & GFR held constant over MAP ~80–180 mmHg', emphasis: 'key' },
      { id: 's3', label: 'Myogenic: ↑pressure → afferent stretch → constriction' },
      { id: 's4', label: 'TGF: macula densa senses ↑NaCl → adenosine → afferent constricts', emphasis: 'key' },
      { id: 's5', label: 'RAAS: low volume → renin → AngII constricts efferent (defends GFR)' },
    ],
  },

  examFindings: [
    { sign: 'RBF/GFR stable over MAP ~80–180 mmHg', mechanism: 'Autoregulation (myogenic + TGF)', significance: 'key' },
    { sign: 'GFR falls when MAP < ~80 mmHg', mechanism: 'Autoregulation exhausted → pre-renal AKI', significance: 'key' },
    { sign: 'Renin release from juxtaglomerular cells', mechanism: 'Low perfusion / low macula-densa NaCl / sympathetic drive', significance: 'key' },
    { sign: 'AKI after starting an NSAID in a volume-depleted patient', mechanism: 'Loss of vasodilator prostaglandins → unopposed afferent constriction', significance: 'supportive' },
    { sign: 'GFR drop after starting an ACE inhibitor', mechanism: 'Efferent dilation lowers P_GC (esp. in renal artery stenosis)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The pressure range over which GFR is autoregulated', meaning: 'Mean arterial pressure ~80–180 mmHg' },
    { clue: 'The feedback that senses distal NaCl and adjusts afferent tone', meaning: 'Tubuloglomerular feedback (macula densa → adenosine)' },
    { clue: 'The enzyme released by JG cells in hypovolaemia', meaning: 'Renin' },
    { clue: 'The vasodilators whose loss (via NSAIDs) can cause AKI', meaning: 'Renal prostaglandins' },
  ],

  treatment: [
    { logic: 'Why hemodynamics matter', detail: 'Autoregulation defends the GFR set in [[glomerular-filtration-gfr]]; its failure is pre-renal AKI. RAAS ties renal flow to blood-pressure and volume control ([[volume-water-balance-hormones]]) and to Na⁺/K⁺ handling ([[renal-potassium-handling]]). The macula densa lives in the JGA built in [[nephron-kidney-histology]]. NSAIDs and ACE-I/ARBs act on these arterioles.' },
  ],

  mnemonics: [
    { hook: 'Autoregulation = "Myogenic + Macula densa" (both pinch the afferent)', expansion: ['Myogenic: stretch → contract', 'TGF: high NaCl → adenosine → constrict'] },
    { hook: 'AngII saves GFR by squeezing the EFFERENT (the exit)', expansion: ['Efferent constriction ↑P_GC', 'That is why ACE-I can drop GFR (esp. bilateral RAS)'] },
  ],

  traps: [
    {
      questionCategory: 'Tubuloglomerular feedback direction',
      wrongInstinct: 'Increased NaCl at the macula densa dilates the afferent arteriole to increase flow',
      rightAnswer: 'Increased NaCl delivery at the macula densa (signalling high GFR) triggers adenosine release that CONSTRICTS the afferent arteriole, REDUCING GFR back toward normal',
      why: 'TGF is a negative-feedback loop that stabilises GFR: high distal NaCl means GFR is too high, so the response must lower it — hence afferent constriction, not dilation.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Renal autoregulation maintains a relatively constant GFR primarily by adjusting the tone of which vessel through myogenic and tubuloglomerular mechanisms?',
      options: [
        { id: 'a', text: 'The efferent arteriole' },
        { id: 'b', text: 'The afferent arteriole' },
        { id: 'c', text: 'The peritubular capillaries' },
        { id: 'd', text: 'The renal vein' },
      ],
      answerId: 'b',
      explanation: 'Both the myogenic response and tubuloglomerular feedback act on the afferent arteriole to buffer GFR against changes in arterial pressure over the ~80–180 mmHg range.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'In a patient with bilateral renal artery stenosis, an ACE inhibitor may sharply reduce GFR because it:',
      options: [
        { id: 'a', text: 'Constricts the afferent arteriole' },
        { id: 'b', text: 'Removes angiotensin II–mediated efferent constriction that was maintaining glomerular pressure' },
        { id: 'c', text: 'Directly damages podocytes' },
        { id: 'd', text: 'Blocks tubular sodium reabsorption' },
      ],
      answerId: 'b',
      explanation: 'When renal perfusion is low, angiotensin II constricts the efferent arteriole to keep glomerular pressure (and GFR) up. Blocking its formation with an ACE inhibitor dilates the efferent arteriole and drops GFR — dramatically if the stenosis is bilateral.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Renal autoregulation', svg: RENAL_AUTOREGULATION, caption: 'The autoregulated plateau of RBF/GFR and the two mechanisms (myogenic + tubuloglomerular feedback).' },
  ],
};

export default renalHemodynamicsAutoregulation;
