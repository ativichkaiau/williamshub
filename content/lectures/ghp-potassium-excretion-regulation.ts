import type { Lecture } from '../../lib/types';

export const ghpPotassiumExcretionRegulation: Lecture = {
  id: 'ghp-potassium-excretion-regulation',
  title: 'Potassium Distribution & Renal Excretion',
  system: 'renal',
  source: 'Ch 29 — Renal Regulation of K⁺, Ca²⁺, Phosphate & Mg²⁺; Volume Control',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'Ch 29 K⁺, Ca²⁺, Phosphate & Volume' },
    { kind: 'mechanism', label: 'Internal shift then excretion' },
    { kind: 'exam', label: 'Aldosterone · distal flow' },
  ],

  highYield: [
    '**Potassium is defended twice: an immediate internal shift, then renal excretion over hours.** About **98%** of body potassium is intracellular, so a meal containing enough potassium to double plasma concentration is survivable only because most of it moves **into cells within minutes**. The kidney then excretes the load over the following hours. Acute threats are handled by shifting; balance is handled by the kidney.',
    '**Insulin, β₂ agonists and alkalosis drive potassium in; acidosis and cell lysis drive it out.** **Insulin** and **β₂ stimulation** activate the Na⁺/K⁺-ATPase, pushing K⁺ into cells — the basis of emergency treatment. In **acidosis**, H⁺ enters cells and K⁺ exits to preserve electroneutrality, raising plasma K⁺ without any change in body content. **Cell lysis** — rhabdomyolysis, tumour lysis, haemolysis — releases intracellular stores directly.',
    '**Renal handling is unusual: most potassium is reabsorbed early, and excretion is decided by distal secretion.** The proximal tubule and thick ascending limb reclaim ~90% regardless. Regulation happens in the **late distal tubule and cortical collecting duct**, where **principal cells secrete** K⁺ through apical channels. Excretion is therefore controlled by how much is **secreted**, not by how much is filtered or reabsorbed.',
    '**Four factors drive secretion, and every clinical scenario is one of them.** (1) **Plasma potassium** itself. (2) **Aldosterone**. (3) **Distal tubular flow rate** — high flow sweeps K⁺ away, keeping the gradient steep. (4) **Acid–base status** — alkalosis increases secretion, acute acidosis reduces it. The flow factor is why almost every diuretic causes hypokalaemia, as covered in [[loop-thiazide-diuretics]].',
    '**Aldosterone couples sodium reabsorption to potassium loss, which is why the two always move together.** ENaC-driven Na⁺ entry leaves the lumen **electronegative**, and that gradient drives K⁺ (and H⁺) out of the cell. So mineralocorticoid excess gives **hypokalaemia with metabolic alkalosis**, while aldosterone deficiency or ENaC blockade gives **hyperkalaemia with acidosis** — the pattern behind [[potassium-sparing-osmotic-diuretics]].',
    '**Hyperkalaemia is an emergency because it depolarises excitable tissue.** Raised extracellular K⁺ brings the resting potential **closer to threshold** initially, then inactivates sodium channels, so conduction slows and the myocardium becomes unexcitable. The ECG sequence — **peaked T waves → PR prolongation → widened QRS → sine wave** — reflects that progression, and calcium is given to stabilise the membrane without changing the potassium at all.',
  ],

  mechanism: {
    title: 'Shift first, excrete second',
    steps: [
      { id: 's1', label: 'Potassium load enters the ECF', emphasis: 'key' },
      { id: 's2', label: 'Insulin and β₂ activity drive K⁺ into cells within minutes', emphasis: 'key' },
      { id: 's3', label: 'Proximal tubule and thick ascending limb reclaim ~90% of filtered K⁺' },
      { id: 's4', label: 'Aldosterone drives ENaC → lumen negative in the collecting duct', emphasis: 'key' },
      { id: 's5', label: 'Principal cells secrete K⁺ down that electrical gradient' },
      { id: 's6', label: 'High distal flow sweeps K⁺ away, sustaining secretion', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Hypokalaemia with metabolic alkalosis and hypertension', mechanism: 'Mineralocorticoid excess driving both K⁺ and H⁺ secretion', significance: 'key' },
    { sign: 'Hyperkalaemia with metabolic acidosis and low blood pressure', mechanism: 'Aldosterone deficiency reducing distal K⁺ and H⁺ secretion', significance: 'key' },
    { sign: 'Peaked T waves progressing to a widened QRS', mechanism: 'Depolarisation then sodium channel inactivation from rising extracellular K⁺', significance: 'key' },
    { sign: 'Rising plasma potassium during diabetic ketoacidosis despite total body depletion', mechanism: 'Insulin deficiency and acidosis shift K⁺ out of cells', significance: 'key' },
    { sign: 'Hypokalaemia developing on a loop diuretic', mechanism: 'Increased distal flow and secondary aldosterone both enhance secretion', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Plasma K⁺ normal in a patient with large total-body depletion', meaning: 'Only 2% of body potassium is extracellular' },
    { clue: 'Hypokalaemic alkalosis with hypertension and suppressed renin', meaning: 'Primary hyperaldosteronism' },
    { clue: 'Hypokalaemic alkalosis with low blood pressure', meaning: 'A tubular transport defect rather than mineralocorticoid excess' },
    { clue: 'Hyperkalaemia with a normal ECG', meaning: 'Consider pseudohyperkalaemia from haemolysis of the sample' },
    { clue: 'Rapidly rising K⁺ after crush injury', meaning: 'Release of intracellular stores in rhabdomyolysis' },
  ],

  treatment: [
    {
      logic: 'In hyperkalaemia, stabilise, then shift, then remove — in that order',
      detail: '**Calcium** raises the threshold potential and protects the myocardium **without lowering potassium at all**. **Insulin with glucose** and **β₂ agonists** then shift K⁺ into cells within minutes. Only dialysis or binders actually **remove** it — a distinction that matters because shifting alone is temporary.',
    },
    {
      logic: 'Correct magnesium before chasing refractory hypokalaemia',
      detail: 'Low magnesium releases the block on apical potassium channels in the collecting duct, so K⁺ leaks into the urine and replacement fails. Repleting **magnesium** is often what finally allows potassium to be corrected.',
    },
  ],

  mnemonics: [
    { hook: 'Insulin and Beta push In, Acidosis pushes Out', expansion: ['Insulin, β₂ agonist, alkalosis → K⁺ into cells', 'Acidosis, cell lysis, β-blockade → K⁺ out of cells'] },
    { hook: 'Secretion needs: potassium, aldosterone, flow, alkalosis', expansion: ['↑ plasma K⁺', '↑ aldosterone', '↑ distal flow', 'Alkalosis'] },
  ],

  traps: [
    {
      questionCategory: 'What determines potassium excretion',
      wrongInstinct: 'Excretion is set by how much potassium is filtered and then reabsorbed',
      rightAnswer: 'Roughly 90% is reabsorbed regardless; excretion is set by distal secretion',
      why: 'Regulation happens at the collecting duct, which is why aldosterone and flow dominate',
    },
    {
      questionCategory: 'Calcium in hyperkalaemia',
      wrongInstinct: 'Calcium lowers the plasma potassium concentration',
      rightAnswer: 'It stabilises the myocardium by raising threshold potential; potassium is unchanged',
      why: 'Shifting and removal are separate steps that must still follow',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient in diabetic ketoacidosis has plasma potassium 5.6 mmol/L, yet total body potassium is markedly depleted. Why?',
      options: [
        { id: 'a', text: 'The kidney has stopped excreting potassium entirely' },
        { id: 'b', text: 'Insulin deficiency and acidosis have shifted potassium out of cells' },
        { id: 'c', text: 'Aldosterone secretion is suppressed' },
        { id: 'd', text: 'Potassium is bound to ketone bodies' },
      ],
      answerId: 'b',
      explanation: 'Insulin normally drives potassium into cells, and in acidosis H⁺ enters cells with K⁺ leaving to maintain electroneutrality. Both raise plasma potassium while osmotic diuresis has depleted total body stores — which is why K⁺ falls sharply once insulin is given.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which factor explains why almost all loop and thiazide diuretics cause hypokalaemia?',
      options: [
        { id: 'a', text: 'They directly block potassium reabsorption in the proximal tubule' },
        { id: 'b', text: 'They increase distal tubular flow and secondary aldosterone, both enhancing potassium secretion' },
        { id: 'c', text: 'They inhibit the Na⁺/K⁺-ATPase' },
        { id: 'd', text: 'They cause metabolic acidosis' },
      ],
      answerId: 'b',
      explanation: 'Higher flow past the principal cells sweeps secreted potassium away, keeping the concentration gradient steep, while volume loss raises aldosterone. Both drive potassium secretion, so hypokalaemia follows.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'Intravenous calcium gluconate is given for hyperkalaemia with ECG changes. What does it achieve?',
      options: [
        { id: 'a', text: 'It shifts potassium into cells' },
        { id: 'b', text: 'It increases renal potassium excretion' },
        { id: 'c', text: 'It stabilises the myocardium by raising the threshold potential, without altering plasma potassium' },
        { id: 'd', text: 'It binds potassium in the gut' },
      ],
      answerId: 'c',
      explanation: 'Calcium restores the gap between resting and threshold potentials, protecting against arrhythmia. It does not change potassium concentration at all, so shifting and removal measures must still follow.',
      tests: 'treatment',
    },
  ],
};

export default ghpPotassiumExcretionRegulation;
