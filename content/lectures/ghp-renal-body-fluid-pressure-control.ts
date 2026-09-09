import type { Lecture } from '../../lib/types';

export const ghpRenalBodyFluidPressureControl: Lecture = {
  id: 'ghp-renal-body-fluid-pressure-control',
  title: 'Renal–Body Fluid System & Pressure Natriuresis',
  system: 'cardiovascular',
  source: 'Ch 19 — Dominant Role of the Kidney in Long-Term Blood Pressure Control',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 19 Kidney & Long-Term Blood Pressure' },
    { kind: 'mechanism', label: 'Pressure natriuresis with infinite feedback gain' },
    { kind: 'exam', label: 'Volume-loading hypertension: high output first, high resistance later' },
  ],

  highYield: [
    '**The renal–body fluid system is the dominant controller of arterial pressure in the long term, and it works through one simple loop.** A rise in pressure increases renal excretion of salt and water — **pressure natriuresis** and **pressure diuresis** — so extracellular fluid volume falls, blood volume falls, and pressure comes back down. Every other pressure control system is fast but temporary; only this one can set the level at which pressure finally sits.',
    '**Long-term pressure is fixed by the intersection of exactly two curves.** (1) The **renal function (pressure-natriuresis) curve** — how much salt and water the kidney excretes at each pressure — and (2) the **level of salt and water intake**, a horizontal line. Their crossing is the **equilibrium point**, and that point IS the long-term arterial pressure. **Nothing changes chronic pressure unless it moves one of those two things**: it either shifts the renal curve or changes intake.',
    '**INFINITE FEEDBACK GAIN — the single most important idea in this chapter.** The baroreflex has a gain around **−2** and then resets; the renal loop has **infinite gain** because it never stops correcting. As long as pressure is even slightly above the equilibrium point, **output exceeds intake**, so volume keeps falling — and it keeps falling until the error is **exactly zero**. The controller does not settle for a residual error, because the imbalance itself, not the size of the error, is what drives it.',
    '**The curve is steep, which is why the system is so powerful.** Acutely, raising arterial pressure from 100 to 200 mmHg can increase urine output several-fold; the **chronic** curve is steeper still, because sustained pressure also suppresses **angiotensin II and aldosterone**. Practically, a chronic rise of only a **few mmHg can double** renal salt and water output — so a kidney with a normal curve simply cannot allow sustained hypertension.',
    '**Volume-loading hypertension needs TWO conditions, not one.** Salt loading alone does almost nothing to a normal person; you also need **impaired renal excretory ability** — reduced kidney mass, or excess mineralocorticoid. The classic experiment is removing ~**70% of renal mass** and then giving salt water to drink: only then does pressure climb. This is the physiological definition of **salt sensitivity** — it exists only when the renal function curve has already been shifted or flattened.',
    '**The haemodynamic sequence of volume-loading hypertension is a favourite stem, and it is counter-intuitive.** ↑ECF volume → ↑blood volume → ↑**mean systemic filling pressure** → ↑venous return → ↑**cardiac output** → ↑pressure. Then, over days, **whole-body autoregulation** takes over: tissues receiving more flow than they need constrict locally, so **total peripheral resistance rises and cardiac output drifts back toward normal**. The hypertension **begins as a high-output state and ends as a high-resistance state** — which is why measuring TPR in an established hypertensive tells you nothing about how it started.',
    '**Salt matters more than water.** Drinking water alone barely expands ECF volume: it is excreted rapidly once osmoreceptors suppress ADH and thirst. **Salt** cannot be disposed of so quickly, and while it is retained it holds water osmotically — so it is salt intake, relative to renal excretory capacity, that expands volume and raises pressure.',
  ],

  mechanism: {
    title: 'Pressure natriuresis drives volume until intake and output match exactly — an infinite-gain loop that ends only at zero error',
    steps: [
      { id: 's1', label: 'Salt and water intake exceeds renal output at the current pressure' },
      { id: 's2', label: 'ECF and blood volume rise → mean systemic filling pressure rises', emphasis: 'key' },
      { id: 's3', label: 'Venous return and cardiac output rise → arterial pressure rises' },
      { id: 's4', label: 'Higher pressure increases renal salt and water excretion (pressure natriuresis)', emphasis: 'key' },
      { id: 's5', label: 'Volume falls until output EQUALS intake — error driven to zero, gain is infinite', emphasis: 'key' },
      { id: 's6', label: 'If the kidney cannot excrete at normal pressure, equilibrium is reached only at a higher pressure', emphasis: 'danger' },
      { id: 's7', label: 'Autoregulation then constricts over-perfused beds: TPR rises, cardiac output returns toward normal' },
    ],
  },

  examFindings: [
    { sign: 'Urine output rises several-fold when arterial pressure is raised from 100 to 200 mmHg', mechanism: 'Pressure diuresis and natriuresis — the steep acute renal function curve', significance: 'key' },
    { sign: 'Arterial pressure returns exactly to its previous level after a volume load, with no residual error', mechanism: 'Infinite feedback gain — output exceeds intake until the error is abolished, not merely reduced', significance: 'key' },
    { sign: 'Salt loading raises pressure only after renal mass is reduced or mineralocorticoid is in excess', mechanism: 'Hypertension needs both a shifted renal function curve and increased intake', significance: 'key' },
    { sign: 'Early volume-loading hypertension shows a raised cardiac output with normal resistance; weeks later resistance is high and output is normal', mechanism: 'Whole-body autoregulation converts an output-driven rise into a resistance-driven one', significance: 'key' },
    { sign: 'A large increase in water intake alone barely changes arterial pressure', mechanism: 'Water without salt is excreted promptly once ADH and thirst are suppressed, so ECF volume hardly expands', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A plot of renal salt and water output against arterial pressure', meaning: 'The renal function (pressure-natriuresis) curve — one of the two determinants of chronic pressure' },
    { clue: 'The point where the renal function curve crosses the intake line', meaning: 'The equilibrium point, which is the long-term arterial pressure' },
    { clue: 'A renal function curve shifted to the right', meaning: 'A kidney that requires a higher pressure to excrete a normal salt load — hypertension is the inevitable result' },
    { clue: 'A flattened, less steep renal function curve', meaning: 'Salt sensitivity — pressure now varies substantially with salt intake' },
    { clue: 'Raised cardiac output with normal total peripheral resistance in a newly hypertensive subject', meaning: 'Early volume-loading hypertension, before autoregulation raises resistance' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'This is the reason the rapid reflexes cannot be the answer to chronic hypertension: [[ghp-baroreceptor-chemoreceptor-reflexes]] resets within days and has near-zero long-term gain, while this loop has **infinite gain** — contrast the finite-gain arithmetic in [[ghp-negative-feedback-gain]]. The volume limb runs through [[ghp-mean-systemic-filling-pressure]] and the autoregulatory limb through [[ghp-local-blood-flow-autoregulation]].' },
    { logic: 'Where it shows up clinically', detail: 'Every antihypertensive that works long-term works by **shifting the renal function curve back to the left** — diuretics by raising excretion at any given pressure, vasodilators and RAAS blockers by lowering renal vascular resistance; the hormonal arm is [[ghp-renin-angiotensin-hypertension]]. It also explains volume-dependent hypertension in renal failure and the salt restriction advised in it. Course cross-links: [[long-term-bp-raas]], [[sodium-balance-ecf-volume]], [[chronic-kidney-disease]].' },
  ],

  mnemonics: [
    { hook: 'TWO curves, ONE crossing: the renal function curve and the intake line set the pressure', expansion: ['Shift the curve right → hypertension', 'Raise intake on a flattened curve → hypertension', 'Change neither → chronic pressure cannot change'] },
    { hook: 'Infinite gain = "it does not stop until the error is ZERO"', expansion: ['Baroreflex gain −2, and it resets', 'Renal loop gain infinite, and it never resets', 'Any pressure above equilibrium means output beats intake'] },
    { hook: 'Volume hypertension: OUTPUT first, RESISTANCE later', expansion: ['Days 1–2: volume up, cardiac output up, TPR normal', 'Weeks: autoregulation constricts over-perfused beds', 'Late: TPR high, cardiac output back to normal'] },
  ],

  traps: [
    {
      questionCategory: 'Which system sets chronic arterial pressure',
      wrongInstinct: 'The sympathetic nervous system and baroreflex set the long-term level of arterial pressure',
      rightAnswer: 'The renal-body fluid system does, because only it has infinite feedback gain and does not reset',
      why: 'A loop that leaves a residual error, or that resets to the prevailing pressure, cannot define a set point.',
    },
    {
      questionCategory: 'Haemodynamics of volume-loading hypertension',
      wrongInstinct: 'Because established hypertension shows a high peripheral resistance, the rise in resistance must have initiated it',
      rightAnswer: 'It begins with a raised cardiac output; autoregulation converts it into a high-resistance state later',
      why: 'Resistance rises secondarily because tissues constrict against over-perfusion, so the late picture hides the cause.',
    },
    {
      questionCategory: 'Effect of salt intake in a normal person',
      wrongInstinct: 'Increasing salt intake several-fold produces significant hypertension in anyone',
      rightAnswer: 'With a normal renal function curve a large change in salt intake alters mean pressure by only a few mmHg',
      why: 'Salt sensitivity requires a renal function curve that is already shifted or flattened.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Why is the renal-body fluid mechanism said to have infinite feedback gain for arterial pressure control, whereas the baroreceptor reflex has a gain of about −2?',
      options: [
        { id: 'a', text: 'Because renal excretion changes faster than the baroreflex can respond' },
        { id: 'b', text: 'Because as long as any pressure error persists, output differs from intake and volume keeps changing, so the error is driven all the way to zero' },
        { id: 'c', text: 'Because the kidney can excrete an unlimited volume of urine' },
        { id: 'd', text: 'Because renal sympathetic nerves amplify the baroreceptor signal' },
      ],
      answerId: 'b',
      explanation: 'Infinite gain follows from the loop having an integrating element: any residual pressure error keeps output and intake mismatched, so volume continues to change until pressure sits exactly at the equilibrium point. The renal loop is slower, not faster, than the baroreflex, and maximum urine flow is finite — neither is the reason.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Seventy per cent of renal mass is removed from a dog, which is then given salt solution to drink. Two days later blood pressure has risen, cardiac output is elevated and total peripheral resistance is normal. Six weeks later blood pressure is still elevated, but cardiac output is normal and total peripheral resistance is high. What accounts for the change between the two time points?',
      options: [
        { id: 'a', text: 'Progressive baroreceptor resetting has increased sympathetic vasoconstrictor outflow' },
        { id: 'b', text: 'Whole-body autoregulation — tissues receiving more flow than they need have constricted locally' },
        { id: 'c', text: 'Aldosterone escape has restored sodium balance and lowered cardiac output' },
        { id: 'd', text: 'The remaining renal mass has hypertrophied and normalised the pressure-natriuresis curve' },
      ],
      answerId: 'b',
      explanation: 'Excess perfusion triggers local autoregulatory vasoconstriction throughout the body, raising total peripheral resistance and returning cardiac output toward normal while pressure stays elevated. Baroreceptor resetting removes reflex opposition but does not raise resistance; if the renal curve had normalised, pressure itself would have fallen.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A patient with normal kidneys quadruples daily salt intake for several weeks. What is the most likely effect on mean arterial pressure?',
      options: [
        { id: 'a', text: 'A sustained rise of 30–40 mmHg' },
        { id: 'b', text: 'A progressive rise that continues as long as the high intake is maintained' },
        { id: 'c', text: 'A change of only a few mmHg, because a normal pressure-natriuresis curve is steep enough to excrete the extra load' },
        { id: 'd', text: 'A sustained fall, because increased urine output reduces blood volume' },
      ],
      answerId: 'c',
      explanation: 'With a normal renal function curve, a tiny rise in pressure produces a large rise in salt and water excretion, so the extra load is disposed of at almost the same pressure. Marked salt sensitivity appears only when the curve is shifted rightward or flattened — for example by reduced renal mass, excess aldosterone or a fixed high angiotensin II level.',
      tests: 'exam',
    },
  ],
};

export default ghpRenalBodyFluidPressureControl;
