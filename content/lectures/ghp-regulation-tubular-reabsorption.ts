import type { Lecture } from '../../lib/types';

export const ghpRegulationTubularReabsorption: Lecture = {
  id: 'ghp-regulation-tubular-reabsorption',
  title: 'Regulation of Tubular Reabsorption & Pressure Natriuresis',
  system: 'renal',
  source: 'Ch 27 — Urine Formation II — Tubular Processing of the Filtrate',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'Ch 27 Tubular Processing' },
    { kind: 'mechanism', label: 'Glomerulotubular balance' },
    { kind: 'exam', label: 'Peritubular Starling forces' },
  ],

  highYield: [
    '**Glomerulotubular balance means the tubule automatically reabsorbs a constant fraction, not a constant amount.** If GFR rises, proximal reabsorption rises in proportion, so roughly **65%** is always reclaimed. This is a **second line of defence** after autoregulation: together they stop a change in GFR from translating into a catastrophic change in excretion.',
    '**Peritubular capillary Starling forces are the physical lever on proximal reabsorption.** Reabsorbed fluid must be taken up from the interstitium into the peritubular capillaries. Uptake is favoured by their **low hydrostatic pressure (~13 mmHg)** and **high colloid osmotic pressure (~32 mmHg)**. Anything that raises their oncotic pressure or lowers their hydrostatic pressure **increases** reabsorption.',
    '**This is why filtration fraction controls sodium handling.** A rising filtration fraction leaves the blood entering the peritubular capillaries **more concentrated in protein**, so oncotic pressure is higher and reabsorption increases. Since angiotensin II raises filtration fraction by constricting the efferent arteriole, it retains sodium by **two** routes — direct tubular stimulation and this physical effect, as in [[ghp-renin-angiotensin-hypertension]].',
    '**Pressure natriuresis is the mechanism that ultimately sets long-term blood pressure.** A rise in arterial pressure raises **renal interstitial hydrostatic pressure**, reduces peritubular uptake and washes back reabsorbed sodium, so excretion rises steeply. Because the kidney will keep excreting until pressure returns to its set point, this loop has **infinite gain** for volume — the principle developed in [[ghp-renal-body-fluid-pressure-control]].',
    '**Sympathetic activity and hormones adjust reabsorption on top of these physical forces.** Sympathetic stimulation constricts arterioles, directly stimulates proximal Na⁺ reabsorption and releases **renin**. **Angiotensin II** and **aldosterone** increase reabsorption; **atrial natriuretic peptide** and high arterial pressure decrease it. Every one of these acts by shifting either the transporters or the peritubular forces.',
    '**Third-factor effects explain why oedematous states retain salt despite being overloaded.** In heart failure or cirrhosis the *effective* arterial volume is low, so the kidney reads hypovolaemia: filtration fraction rises, sympathetic and angiotensin drive rise, and sodium is avidly retained even though the patient is visibly overloaded — the paradox at the heart of [[ghp-oedema-safety-factors]].',
  ],

  mechanism: {
    title: 'Physical forces decide how much comes back',
    steps: [
      { id: 's1', label: 'GFR changes → proximal reabsorption changes proportionally (glomerulotubular balance)', emphasis: 'key' },
      { id: 's2', label: 'Reabsorbed fluid enters the interstitium and must be taken up by peritubular capillaries' },
      { id: 's3', label: 'Low peritubular hydrostatic and high oncotic pressure favour uptake', emphasis: 'key' },
      { id: 's4', label: 'Rising filtration fraction concentrates peritubular protein → more reabsorption' },
      { id: 's5', label: 'Rising arterial pressure raises interstitial pressure → backleak → natriuresis', emphasis: 'key' },
      { id: 's6', label: 'Excretion continues until arterial pressure returns to set point', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Avid sodium retention in decompensated heart failure', mechanism: 'Low effective arterial volume raises filtration fraction and neurohormonal drive', significance: 'key' },
    { sign: 'Natriuresis following a rise in arterial pressure', mechanism: 'Raised interstitial pressure reduces peritubular uptake and causes backleak', significance: 'key' },
    { sign: 'Constant fractional proximal reabsorption despite varying GFR', mechanism: 'Glomerulotubular balance', significance: 'key' },
    { sign: 'Sodium retention during sympathetic activation', mechanism: 'Direct proximal stimulation plus renin release', significance: 'supportive' },
    { sign: 'Increased sodium excretion with atrial distension', mechanism: 'Natriuretic peptide release inhibiting collecting duct sodium reabsorption', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Fractional excretion of sodium below 1% in oliguria', meaning: 'Intense tubular avidity — prerenal or effective volume depletion' },
    { clue: 'High filtration fraction with low urine sodium', meaning: 'Efferent constriction driving enhanced peritubular reabsorption' },
    { clue: 'Sodium excretion rising steeply with arterial pressure', meaning: 'Intact pressure natriuresis' },
    { clue: 'A rightward-shifted pressure natriuresis curve', meaning: 'Sustained hypertension — a higher pressure is now needed to excrete the same sodium' },
    { clue: 'Raised urine sodium despite clinical hypovolaemia', meaning: 'Tubular dysfunction or diuretic effect overriding the avidity signal' },
  ],

  treatment: [
    {
      logic: 'In oedematous states, treat the effective arterial volume, not just the total volume',
      detail: 'The kidney is responding correctly to a **perceived** deficit. Improving cardiac output or splanchnic filling switches off the retention signal, whereas diuresis alone fights the kidney and can deepen the neurohormonal drive.',
    },
    {
      logic: 'Understand that lasting hypertension requires a shifted natriuresis curve',
      detail: 'Because pressure natriuresis has effectively **infinite gain** for volume, blood pressure cannot stay elevated unless the renal relationship itself is reset. That is why interventions targeting the kidney and RAAS are so central to durable control.',
    },
  ],

  mnemonics: [
    { hook: 'Constant fraction, not constant amount', expansion: ['GFR ↑ → reabsorption ↑ proportionally', 'Roughly 65% proximally regardless', 'Protects against GFR-driven losses'] },
    { hook: 'Low hydrostatic, high oncotic → soak it back up', expansion: ['Peritubular ~13 mmHg hydrostatic', '~32 mmHg oncotic', 'Filtration fraction ↑ → oncotic ↑ → reabsorption ↑'] },
  ],

  traps: [
    {
      questionCategory: 'Sodium handling in heart failure',
      wrongInstinct: 'A fluid-overloaded patient should be excreting sodium briskly',
      rightAnswer: 'The kidney senses low effective arterial volume and retains sodium avidly',
      why: 'It responds to perfusion signals, not to total body water',
    },
    {
      questionCategory: 'What glomerulotubular balance does',
      wrongInstinct: 'The tubule reabsorbs a fixed quantity of sodium each day',
      rightAnswer: 'It reabsorbs a fixed proportion, so absolute reabsorption scales with GFR',
      why: 'A fixed quantity would make excretion swing wildly with any GFR change',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Constricting the efferent arteriole raises filtration fraction. What is the effect on proximal tubular reabsorption?',
      options: [
        { id: 'a', text: 'It decreases, because renal plasma flow has fallen' },
        { id: 'b', text: 'It increases, because peritubular capillary oncotic pressure is higher' },
        { id: 'c', text: 'It is unchanged, because reabsorption is purely transporter-driven' },
        { id: 'd', text: 'It decreases, because Bowman capsule pressure rises' },
      ],
      answerId: 'b',
      explanation: 'A higher filtration fraction means more protein-free filtrate has left, so blood entering the peritubular capillaries is more protein-concentrated. The raised oncotic pressure enhances uptake of reabsorbed fluid from the interstitium.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which mechanism gives the renal-body fluid system effectively infinite gain for long-term blood pressure control?',
      options: [
        { id: 'a', text: 'Baroreceptor reflex resetting' },
        { id: 'b', text: 'Pressure natriuresis — the kidney keeps excreting until pressure returns to set point' },
        { id: 'c', text: 'Myogenic autoregulation of the afferent arteriole' },
        { id: 'd', text: 'Glomerulotubular balance' },
      ],
      answerId: 'b',
      explanation: 'Any pressure above set point increases sodium and water excretion, shrinking volume until pressure falls back. Because the process does not stop until the error is abolished, the gain for volume is effectively infinite.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A patient with decompensated heart failure has gross peripheral oedema yet a urine sodium of 8 mmol/L. What explains this?',
      options: [
        { id: 'a', text: 'Intrinsic tubular damage preventing sodium excretion' },
        { id: 'b', text: 'Low effective arterial volume driving neurohormonal sodium avidity despite total overload' },
        { id: 'c', text: 'Excessive atrial natriuretic peptide' },
        { id: 'd', text: 'Reduced aldosterone secretion' },
      ],
      answerId: 'b',
      explanation: 'The kidney senses perfusion, not total body water. Reduced cardiac output lowers effective arterial volume, raising sympathetic and angiotensin drive and filtration fraction, so sodium is retained even in obvious overload.',
      tests: 'mechanism',
    },
  ],
};

export default ghpRegulationTubularReabsorption;
