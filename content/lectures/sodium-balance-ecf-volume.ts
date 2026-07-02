import type { Lecture } from '../../lib/types';

export const sodiumBalanceEcfVolume: Lecture = {
  id: 'sodium-balance-ecf-volume',
  title: 'Sodium Balance & ECF Volume Regulation',
  system: 'renal',
  source: 'L6 — Body Fluids & Water Balance',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L6 Body Fluids' },
    { kind: 'mechanism', label: 'Na+ = ECF volume' },
    { kind: 'exam', label: 'Oedema' },
  ],

  highYield: [
    '**Total body SODIUM determines extracellular fluid (ECF) VOLUME — this is the single most important renal concept for fluid balance, and it is separate from water balance (which sets osmolality).** Because Na⁺ is the dominant ECF solute and water follows it, the amount of sodium in the body sets how much ECF (and therefore blood/interstitial) volume there is.',
    '**The kidney regulates ECF volume by adjusting Na⁺ EXCRETION to match intake.** Effective circulating volume is sensed by **baroreceptors (carotid/aortic, afferent arteriole) and the macula densa**; the effectors are the **RAAS (retain Na⁺ when volume is low)** and **natriuretic peptides (ANP/BNP — excrete Na⁺ when volume is high)** — see [[volume-water-balance-hormones]].',
    '**Sodium is handled along the nephron: ~65% reabsorbed in the PCT, ~25% in the thick ascending limb (NKCC2), ~5% in the DCT (NCC), and the final few percent in the collecting duct (ENaC, aldosterone-controlled).** Each segment is a diuretic target; the collecting-duct step is the fine, hormonally regulated adjustment that sets final Na⁺ excretion.',
    '**Volume DEPLETION (haemorrhage, GI/renal losses) → RAAS activation → avid Na⁺/water retention (low urine Na⁺, concentrated urine).** Volume EXPANSION → natriuresis. A mismatch causes disease: **oedema is an expansion of interstitial ECF volume from inappropriate Na⁺ (and water) retention** in heart failure, cirrhosis and nephrotic syndrome (where the "effective" circulating volume is sensed as low).',
    '**Key distinction: ECF VOLUME problems (too little/too much salt) present as hypovolaemia/oedema and are treated by changing SALT/diuretics; OSMOLALITY problems present as dysnatraemia and are treated by changing WATER.** Confusing the two is the classic error — plasma [Na⁺] reflects water balance, not sodium content ([[body-fluid-compartments-renal]]).',
  ],

  mechanism: {
    title: 'Total body Na⁺ sets ECF volume; kidney tunes Na⁺ excretion via RAAS/ANP',
    steps: [
      { id: 's1', label: 'ECF VOLUME is set by total body SODIUM (not [Na⁺])', emphasis: 'key' },
      { id: 's2', label: 'Volume sensed by baroreceptors + macula densa', emphasis: 'key' },
      { id: 's3', label: 'Low volume → RAAS retains Na⁺; high volume → ANP/BNP excrete Na⁺', emphasis: 'key' },
      { id: 's4', label: 'Na⁺ reabsorbed: PCT 65% → TAL 25% → DCT 5% → CD (ENaC/aldosterone)' },
      { id: 's5', label: 'Inappropriate retention → oedema (HF, cirrhosis, nephrotic)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Low urine sodium + concentrated urine in hypovolaemia', mechanism: 'RAAS-driven avid Na⁺/water retention', significance: 'key' },
    { sign: 'Peripheral/pulmonary oedema', mechanism: 'Expanded interstitial ECF from Na⁺/water retention', significance: 'key' },
    { sign: 'Natriuresis when the atria are stretched', mechanism: 'ANP/BNP opposing RAAS', significance: 'supportive' },
    { sign: 'Oedema with a low "effective" circulating volume (HF/cirrhosis)', mechanism: 'Kidney senses underfilling → retains Na⁺', significance: 'key' },
    { sign: 'Diuretic response mapping to a nephron segment', mechanism: 'Segmental Na⁺ transporters (loop/thiazide/K⁺-sparing)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The determinant of extracellular fluid volume', meaning: 'Total body sodium' },
    { clue: 'The hormone system retaining sodium in hypovolaemia', meaning: 'RAAS (angiotensin II + aldosterone)' },
    { clue: 'The cause of oedema in terms of sodium', meaning: 'Inappropriate renal Na⁺ (and water) retention' },
    { clue: 'What plasma [Na⁺] actually reflects', meaning: 'Water balance/osmolality — not total body sodium' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Volume overload (oedema) is treated with salt restriction and diuretics that block segmental Na⁺ transporters; volume depletion with salt/fluid. This is the sodium/volume arm that complements the water/osmolality arm of [[body-fluid-compartments-renal]] and the hormones of [[volume-water-balance-hormones]]. Aldosterone couples Na⁺ retention to K⁺ loss ([[renal-potassium-handling]]).' },
  ],

  mnemonics: [
    { hook: '"Sodium sets the VOLUME; water sets the CONCENTRATION"', expansion: ['ECF volume = total body Na⁺', 'Oedema = Na⁺ retention'] },
    { hook: 'Na⁺ reabsorption "65-25-5-rest": PCT, TAL, DCT, collecting duct', expansion: ['Each = a diuretic target', 'Collecting duct = aldosterone-tuned'] },
  ],

  traps: [
    {
      questionCategory: 'Sodium concentration vs total body sodium',
      wrongInstinct: 'A low plasma sodium concentration means the body is sodium-depleted (and needs salt)',
      rightAnswer: 'Plasma [Na⁺] reflects WATER balance (osmolality), NOT total body sodium — many hyponatraemic patients (e.g. oedematous heart-failure patients) actually have EXCESS total body sodium; ECF volume, not [Na⁺], tells you the sodium status',
      why: 'Because water moves to keep osmolality constant, the measured concentration is a water-to-sodium ratio; treating hyponatraemia with salt when the patient is volume-overloaded worsens the oedema.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The volume of the extracellular fluid compartment is determined principally by:',
      options: [
        { id: 'a', text: 'Total body water alone' },
        { id: 'b', text: 'Total body sodium content' },
        { id: 'c', text: 'Plasma potassium' },
        { id: 'd', text: 'Plasma protein concentration' },
      ],
      answerId: 'b',
      explanation: 'Sodium is the dominant extracellular solute and water follows it osmotically, so total body sodium sets ECF volume. The kidney regulates ECF volume by adjusting sodium excretion (RAAS retains, ANP excretes).',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Generalised oedema most fundamentally represents:',
      options: [
        { id: 'a', text: 'A pure water excess with normal sodium' },
        { id: 'b', text: 'An expansion of interstitial ECF volume from renal sodium (and water) retention' },
        { id: 'c', text: 'Sodium depletion' },
        { id: 'd', text: 'Potassium excess' },
      ],
      answerId: 'b',
      explanation: 'Oedema is expanded interstitial extracellular volume caused by inappropriate renal retention of sodium and water (e.g. in heart failure, cirrhosis, nephrotic syndrome), which is why treatment centres on salt restriction and diuretics.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default sodiumBalanceEcfVolume;
