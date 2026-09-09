import type { Lecture } from '../../lib/types';

export const ghpDiureticClassesMechanisms: Lecture = {
  id: 'ghp-diuretic-classes-mechanisms',
  title: 'Diuretic Classes & Their Tubular Sites',
  system: 'renal',
  source: 'Ch 31 — Kidney Diseases & Diuretics',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'Ch 31 Kidney Disease & Diuretics' },
    { kind: 'mechanism', label: 'Site determines everything' },
    { kind: 'exam', label: 'Electrolyte signatures' },
  ],

  highYield: [
    '**Every diuretic is defined by one transporter at one site, and its entire side-effect profile follows from that.** **Carbonic anhydrase inhibitors** → proximal tubule. **Osmotic agents** → wherever the tubule is water-permeable. **Loop agents** → NKCC2 in the thick ascending limb. **Thiazides** → NCC in the early distal tubule. **Potassium-sparing agents** → ENaC or the mineralocorticoid receptor in the collecting duct. Learn the site and you can derive the rest.',
    '**Potency tracks how much sodium the blocked segment normally handles.** The thick ascending limb reclaims about **25%** of filtered sodium, so **loop agents are the most powerful**. The distal tubule handles only **5–10%**, so **thiazides are moderate**. The collecting duct handles **1–3%**, so **potassium-sparing agents are weak** as diuretics and are used mainly for their potassium and hormonal effects.',
    '**The two potassium-wasting classes share a mechanism: they increase distal sodium delivery.** More sodium reaching the principal cells means more ENaC-driven reabsorption, a more electronegative lumen, and therefore more **K⁺ and H⁺ secretion**. That is why loop and thiazide diuretics both cause **hypokalaemic metabolic alkalosis** — a single explanation for two classes.',
    '**Calcium is the discriminator between loop and thiazide, and it runs opposite ways.** Loop agents abolish the lumen-positive potential in the thick ascending limb and **waste calcium**. Thiazides lower intracellular sodium, enhancing basolateral **Na⁺/Ca²⁺ exchange**, and so **retain calcium**. Hence loops for hypercalcaemia, thiazides for calcium stones — the mechanism set out in [[ghp-loop-distal-collecting-transport]].',
    '**Potassium-sparing agents split into two mechanisms that look identical on the electrolytes.** **Spironolactone** blocks the **mineralocorticoid receptor** (so it also causes gynaecomastia through anti-androgen effects); **amiloride** blocks **ENaC** directly. Both give **hyperkalaemia and metabolic acidosis**, the mirror image of the wasting classes — the pattern in [[potassium-sparing-osmotic-diuretics]].',
    '**Diuretic resistance has predictable causes, and most are physiological rather than pharmacological.** Luminally-acting agents must first be **secreted** by proximal organic anion transporters, so uraemic anions or low GFR reduce delivery. Chronic loop therapy causes **distal nephron hypertrophy**, which reabsorbs the extra sodium — the rationale for adding a thiazide to produce **sequential nephron blockade**, as in [[diuretics-pharmacology]].',
  ],

  mechanism: {
    title: 'Block a transporter, inherit its consequences',
    steps: [
      { id: 's1', label: 'Drug is secreted into the lumen by proximal organic anion transporters', emphasis: 'key' },
      { id: 's2', label: 'It blocks one specific sodium-carrying transporter at one site', emphasis: 'key' },
      { id: 's3', label: 'Sodium reabsorption at that segment falls; natriuresis is proportional to its normal load' },
      { id: 's4', label: 'Undelivered sodium arrives distally, driving ENaC and lumen negativity' },
      { id: 's5', label: 'K⁺ and H⁺ secretion rise → hypokalaemic alkalosis', emphasis: 'key' },
      { id: 's6', label: 'Chronic use hypertrophies downstream segments → resistance', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Hypokalaemic metabolic alkalosis on a loop or thiazide diuretic', mechanism: 'Increased distal sodium delivery driving K⁺ and H⁺ secretion', significance: 'key' },
    { sign: 'Hyperkalaemic metabolic acidosis on spironolactone', mechanism: 'Mineralocorticoid blockade removing the gradient for K⁺ and H⁺ secretion', significance: 'key' },
    { sign: 'Hypercalcaemia on a thiazide', mechanism: 'Enhanced distal calcium reabsorption', significance: 'key' },
    { sign: 'Gynaecomastia during spironolactone therapy', mechanism: 'Anti-androgen effect of receptor blockade', significance: 'supportive' },
    { sign: 'Diminishing response to a loop diuretic over months', mechanism: 'Distal nephron hypertrophy reabsorbing the delivered sodium', significance: 'key' },
  ],

  investigations: [
    { clue: 'Hypokalaemic alkalosis with a normal blood pressure and high urine chloride', meaning: 'Diuretic use or a Bartter/Gitelman-type defect' },
    { clue: 'Hyperkalaemia with acidosis on an aldosterone antagonist', meaning: 'Expected pharmacological effect at the collecting duct' },
    { clue: 'Low urine calcium on a thiazide', meaning: 'Enhanced distal reabsorption — useful in stone prevention' },
    { clue: 'Poor natriuresis despite escalating loop doses in renal impairment', meaning: 'Reduced tubular secretion limiting drug delivery to the lumen' },
    { clue: 'Metabolic acidosis with alkaline urine on acetazolamide', meaning: 'Proximal bicarbonate wasting from carbonic anhydrase inhibition' },
  ],

  treatment: [
    {
      logic: 'Match the class to the goal and accept its electrolyte signature',
      detail: 'For substantial volume removal use a **loop** agent; for mild hypertension a **thiazide**; to blunt potassium loss or block aldosterone add a **potassium-sparing** agent. Combining a wasting with a sparing class is often what keeps potassium stable.',
    },
    {
      logic: 'Answer resistance with sequential nephron blockade, not simply more drug',
      detail: 'Once the distal tubule has hypertrophied, adding a **thiazide** to a loop agent blocks the segment doing the compensatory reabsorption. This is far more effective than escalating the loop dose alone, though it markedly increases potassium loss.',
    },
  ],

  mnemonics: [
    { hook: 'Site sets strength: 25, 7, 2 per cent', expansion: ['Loop → ~25% of filtered Na⁺ → strongest', 'Thiazide → 5–10% → moderate', 'Collecting duct → 1–3% → weak'] },
    { hook: 'Wasters alkalose, sparers acidose', expansion: ['Loop/thiazide → hypokalaemic alkalosis', 'Amiloride/spironolactone → hyperkalaemic acidosis'] },
  ],

  traps: [
    {
      questionCategory: 'Loop versus thiazide on calcium',
      wrongInstinct: 'Both increase calcium excretion because both increase urine flow',
      rightAnswer: 'Loops waste calcium; thiazides retain it',
      why: 'The direction follows the transporter blocked, not the diuresis',
    },
    {
      questionCategory: 'Why diuretics stop working',
      wrongInstinct: 'The drug has lost potency and the dose must simply be raised',
      rightAnswer: 'Distal nephron hypertrophy reabsorbs the delivered sodium',
      why: 'Blocking the compensating segment works better than escalating the original drug',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Why are loop diuretics more powerful natriuretics than thiazides?',
      options: [
        { id: 'a', text: 'They are absorbed more completely from the gut' },
        { id: 'b', text: 'The thick ascending limb normally reabsorbs about 25% of filtered sodium, far more than the distal tubule' },
        { id: 'c', text: 'They inhibit aldosterone in addition to their tubular effect' },
        { id: 'd', text: 'They increase glomerular filtration rate' },
      ],
      answerId: 'b',
      explanation: 'Diuretic potency tracks the sodium load handled by the blocked segment. NKCC2 in the thick ascending limb accounts for about a quarter of filtered sodium, whereas NCC in the distal tubule handles only 5–10%.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient on long-term furosemide has a diminishing response despite dose escalation. Adding which agent is most rational?',
      options: [
        { id: 'a', text: 'A second loop diuretic' },
        { id: 'b', text: 'A thiazide, to block the hypertrophied distal segment' },
        { id: 'c', text: 'An ACE inhibitor' },
        { id: 'd', text: 'A carbonic anhydrase inhibitor' },
      ],
      answerId: 'b',
      explanation: 'Chronic loop therapy causes distal nephron hypertrophy, so the extra delivered sodium is reabsorbed downstream. Adding a thiazide blocks that compensating segment — sequential nephron blockade — though potassium must be watched closely.',
      tests: 'treatment',
    },
    {
      id: 'q3',
      stem: 'Which electrolyte pattern is expected with spironolactone?',
      options: [
        { id: 'a', text: 'Hypokalaemic metabolic alkalosis' },
        { id: 'b', text: 'Hyperkalaemic metabolic acidosis' },
        { id: 'c', text: 'Hypokalaemic metabolic acidosis' },
        { id: 'd', text: 'Hypernatraemia with alkalosis' },
      ],
      answerId: 'b',
      explanation: 'Blocking the mineralocorticoid receptor reduces ENaC-driven sodium entry, so the lumen becomes less electronegative and both potassium and hydrogen secretion fall — the mirror image of the loop and thiazide pattern.',
      tests: 'treatment',
    },
  ],
};

export default ghpDiureticClassesMechanisms;
