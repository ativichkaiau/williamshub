import type { Lecture } from '../../lib/types';

export const ghpRenalAcidExcretionDisorders: Lecture = {
  id: 'ghp-renal-acid-excretion-disorders',
  title: 'Renal Acid Excretion & the Acid–Base Disorders',
  system: 'renal',
  source: 'Ch 30 — Regulation of Acid–Base Balance',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'Ch 30 Acid–Base Balance' },
    { kind: 'mechanism', label: 'Titratable acid & ammonium' },
    { kind: 'exam', label: 'Anion gap' },
  ],

  highYield: [
    '**The kidney has two separate jobs: reclaim filtered bicarbonate, then excrete the daily acid load.** About **4320 mmol** of bicarbonate is filtered daily and essentially all of it must be recovered — losing it would itself cause acidosis. Only after that does the kidney excrete the roughly **70 mmol** of fixed acid produced each day by metabolism, generating **new** bicarbonate as it does so.',
    '**Bicarbonate is not reabsorbed as bicarbonate — it is reclaimed indirectly.** Secreted **H⁺** (via **Na⁺/H⁺ exchange**) combines with luminal HCO₃⁻ to form carbonic acid, which **carbonic anhydrase** on the brush border splits into CO₂ and water. CO₂ diffuses in, is rehydrated inside the cell, and bicarbonate leaves basolaterally. This is why **carbonic anhydrase inhibitors** cause bicarbonate wasting and a metabolic acidosis.',
    '**Excreting acid requires urinary buffers, because free H⁺ can only take urine to pH ~4.5.** That limit corresponds to a free H⁺ concentration far too small to matter. So acid leaves bound: as **titratable acid** (mostly **phosphate**) and, far more importantly and adjustably, as **ammonium (NH₄⁺)**. Ammonia production from **glutamine** is upregulated over days in acidosis, and it is the mechanism that actually scales.',
    '**Every hydrogen ion excreted with a buffer generates one new bicarbonate — that is the point.** Reclaiming filtered bicarbonate merely breaks even. Only H⁺ excreted bound to phosphate or ammonia adds **new** bicarbonate to the blood, which is how the kidney repays an acid load rather than just holding the line.',
    '**Use the anion gap to split metabolic acidosis into two families.** **AG = Na⁺ − (Cl⁻ + HCO₃⁻)**, normally **8–12**. A **raised** gap means added unmeasured acid — lactate, ketones, urate in renal failure, or a toxin. A **normal** gap means bicarbonate was **lost** and replaced by chloride: diarrhoea, or renal tubular acidosis, as classified in [[acid-base-disorders]].',
    '**The renal tubular acidoses map onto the two renal jobs and are separated by potassium.** **Type 2 (proximal)** is failure to reclaim bicarbonate — hypokalaemic, urine can still acidify once bicarbonate is low. **Type 1 (distal)** is failure to secrete H⁺ — hypokalaemic, urine pH stays inappropriately **above 5.5**. **Type 4** is aldosterone deficiency or resistance — the only **hyperkalaemic** one, with impaired ammoniagenesis, linking directly to [[ghp-potassium-excretion-regulation]].',
  ],

  mechanism: {
    title: 'Reclaim, then excrete, then regenerate',
    steps: [
      { id: 's1', label: 'H⁺ secreted proximally via Na⁺/H⁺ exchange', emphasis: 'key' },
      { id: 's2', label: 'Luminal carbonic anhydrase converts HCO₃⁻ + H⁺ to CO₂ and water' },
      { id: 's3', label: 'CO₂ enters the cell, is rehydrated, HCO₃⁻ exits basolaterally — filtered load reclaimed', emphasis: 'key' },
      { id: 's4', label: 'Distally, α-intercalated cells secrete H⁺ against a gradient to pH ~4.5' },
      { id: 's5', label: 'H⁺ binds phosphate (titratable acid) and ammonia (NH₄⁺)', emphasis: 'key' },
      { id: 's6', label: 'Each buffered H⁺ excreted generates one new bicarbonate', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Normal anion gap acidosis with hypokalaemia and urine pH above 5.5', mechanism: 'Distal (type 1) RTA — failure of H⁺ secretion', significance: 'key' },
    { sign: 'Normal anion gap acidosis with hyperkalaemia', mechanism: 'Type 4 RTA from aldosterone deficiency or resistance', significance: 'key' },
    { sign: 'Raised anion gap acidosis in diabetic ketoacidosis', mechanism: 'Unmeasured ketoacid anions accumulate', significance: 'key' },
    { sign: 'Normal anion gap acidosis after severe diarrhoea', mechanism: 'Gastrointestinal bicarbonate loss with chloride retention', significance: 'key' },
    { sign: 'Metabolic acidosis on acetazolamide', mechanism: 'Carbonic anhydrase inhibition causing bicarbonate wasting', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Anion gap of 24 with a low bicarbonate', meaning: 'Added acid — lactate, ketones, toxin or uraemia' },
    { clue: 'Anion gap of 10 with a low bicarbonate and raised chloride', meaning: 'Bicarbonate loss — gastrointestinal or renal tubular' },
    { clue: 'Urine pH above 5.5 during systemic acidosis', meaning: 'Distal acidification failure' },
    { clue: 'Positive urine anion gap in a normal-gap acidosis', meaning: 'Low urinary ammonium — a renal rather than gastrointestinal cause' },
    { clue: 'Rising urinary ammonium excretion over several days of acidosis', meaning: 'Normal adaptive glutamine-derived ammoniagenesis' },
  ],

  treatment: [
    {
      logic: 'Use the anion gap to decide what you are actually treating',
      detail: 'A **raised** gap means an acid has been added, so the priority is removing or metabolising it — insulin for ketoacidosis, perfusion for lactate. A **normal** gap means bicarbonate has been lost and replacing it is rational, which is the opposite conclusion.',
    },
    {
      logic: 'Check potassium to type a renal tubular acidosis',
      detail: 'Types **1 and 2** run **hypokalaemic**; type **4** is the **hyperkalaemic** one and reflects aldosterone deficiency or resistance. Potassium therefore does more diagnostic work here than the bicarbonate value itself.',
    },
  ],

  mnemonics: [
    { hook: 'Reclaim breaks even, buffered excretion regenerates', expansion: ['Filtered HCO₃⁻ reclaimed = no net gain', 'H⁺ on phosphate or ammonia = new bicarbonate'] },
    { hook: 'Type 4 is the high-K one', expansion: ['Type 1 distal: hypokalaemic, urine pH > 5.5', 'Type 2 proximal: hypokalaemic, bicarbonate wasting', 'Type 4: hyperkalaemic, aldosterone problem'] },
  ],

  traps: [
    {
      questionCategory: 'How bicarbonate is reabsorbed',
      wrongInstinct: 'Bicarbonate is transported across the apical membrane directly',
      rightAnswer: 'It is reclaimed indirectly via H⁺ secretion and carbonic anhydrase, entering the cell as CO₂',
      why: 'It explains why carbonic anhydrase inhibitors cause bicarbonate wasting',
    },
    {
      questionCategory: 'What limits urinary acid excretion',
      wrongInstinct: 'The kidney simply excretes more free hydrogen ions when acidotic',
      rightAnswer: 'Urine pH bottoms out at ~4.5, so acid must be excreted bound to phosphate and ammonia',
      why: 'Adjustable ammoniagenesis, not free H⁺, is what scales with an acid load',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient has a normal anion gap metabolic acidosis with hyperkalaemia. Which diagnosis fits best?',
      options: [
        { id: 'a', text: 'Type 1 distal renal tubular acidosis' },
        { id: 'b', text: 'Type 2 proximal renal tubular acidosis' },
        { id: 'c', text: 'Type 4 renal tubular acidosis' },
        { id: 'd', text: 'Diabetic ketoacidosis' },
      ],
      answerId: 'c',
      explanation: 'Types 1 and 2 are hypokalaemic. Type 4 results from aldosterone deficiency or resistance, so potassium is retained and ammoniagenesis is impaired — the only hyperkalaemic RTA. Ketoacidosis would raise the anion gap.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'Why can the kidney not excrete its daily acid load as free hydrogen ions?',
      options: [
        { id: 'a', text: 'Hydrogen ions cannot be secreted by tubular cells' },
        { id: 'b', text: 'Urine pH cannot fall below about 4.5, so free H⁺ accounts for a negligible quantity' },
        { id: 'c', text: 'Hydrogen ions are entirely reabsorbed distally' },
        { id: 'd', text: 'Carbonic anhydrase prevents hydrogen ion secretion' },
      ],
      answerId: 'b',
      explanation: 'The maximal gradient the tubule can sustain corresponds to a urine pH of about 4.5, at which free H⁺ is a vanishingly small quantity. Acid must therefore be excreted bound to buffers — titratable acid and, adjustably, ammonium.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'Which process actually adds new bicarbonate to the blood?',
      options: [
        { id: 'a', text: 'Reabsorption of filtered bicarbonate in the proximal tubule' },
        { id: 'b', text: 'Excretion of hydrogen ions bound to phosphate or ammonia' },
        { id: 'c', text: 'Respiratory elimination of carbon dioxide' },
        { id: 'd', text: 'Chloride reabsorption in the thick ascending limb' },
      ],
      answerId: 'b',
      explanation: 'Reclaiming filtered bicarbonate only prevents a loss — it breaks even. Each hydrogen ion excreted bound to a urinary buffer leaves behind a newly generated bicarbonate, which is how an acid load is genuinely repaid.',
      tests: 'mechanism',
    },
  ],
};

export default ghpRenalAcidExcretionDisorders;
