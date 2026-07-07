import type { Lecture } from '../../lib/types';

export const potassiumSparingOsmoticDiuretics: Lecture = {
  id: 'potassium-sparing-osmotic-diuretics',
  title: 'Potassium-Sparing, Osmotic & CA-Inhibitor Diuretics',
  system: 'renal',
  source: 'L12 — Diuretics',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L12 K-sparing/osmotic' },
    { kind: 'mechanism', label: 'Collecting duct, PCT, osmotic' },
    { kind: 'exam', label: 'Spironolactone; hyperkalaemia; acetazolamide' },
  ],

  highYield: [
    'POTASSIUM-SPARING diuretics act in the collecting duct and, uniquely, RETAIN potassium. Two types: ALDOSTERONE ANTAGONISTS (SPIRONOLACTONE, eplerenone) block the mineralocorticoid receptor; and ENaC BLOCKERS (AMILORIDE, triamterene) block the epithelial sodium channel directly. Both reduce sodium reabsorption and potassium/hydrogen secretion → mild diuresis with a risk of HYPERKALAEMIA and metabolic ACIDOSIS (the mirror image of loops/thiazides).',
    'Uses: spironolactone/eplerenone improve survival in HEART FAILURE, treat resistant hypertension, PRIMARY HYPERALDOSTERONISM (Conn), and the oedema/ascites of CIRRHOSIS; they also counter the hypokalaemia of other diuretics. SPIRONOLACTONE\'s anti-androgen effects cause GYNAECOMASTIA and menstrual changes (eplerenone is more selective, so less). Key danger: HYPERKALAEMIA, especially combined with ACE inhibitors/ARBs or in renal impairment.',
    'OSMOTIC diuretics (MANNITOL) are filtered but not reabsorbed, holding water osmotically in the tubule (acting mainly in the proximal tubule/loop) → diuresis; used to reduce raised INTRACRANIAL or intraocular pressure. Caution: initial expansion of intravascular volume can worsen pulmonary oedema/heart failure. CARBONIC ANHYDRASE INHIBITORS (ACETAZOLAMIDE) act in the PROXIMAL tubule, causing bicarbonate loss (→ metabolic ACIDOSIS); used for glaucoma, altitude sickness and to alkalinise urine.',
    'So the diuretic classes map to nephron sites and electrolyte signatures: carbonic anhydrase inhibitor (PCT, HCO3 loss/acidosis), osmotic (PCT/loop, water), loop (thick ascending limb, potent, hypokalaemia), thiazide (distal tubule, hypokalaemia), potassium-sparing (collecting duct, HYPERkalaemia). Combining classes ("sequential nephron blockade") can overcome diuretic resistance.',
    '**The take-home: potassium-sparing = collecting duct — SPIRONOLACTONE/eplerenone (aldosterone antagonists; heart failure, Conn, cirrhosis; spironolactone → gynaecomastia) and AMILORIDE/triamterene (ENaC block) — risk HYPERKALAEMIA/acidosis. OSMOTIC (mannitol → raised ICP). Carbonic anhydrase inhibitors (acetazolamide → HCO3 loss/acidosis, glaucoma/altitude).** Loops/thiazides are [[loop-thiazide-diuretics]]; overview [[diuretics-pharmacology]]; potassium is [[potassium-disorders]].',
  ],

  mechanism: {
    title: 'K-sparing (collecting duct: spironolactone/aldosterone antagonist, amiloride/ENaC → hyperkalaemia); osmotic (mannitol → raised ICP); CA inhibitor (acetazolamide, PCT → HCO3 loss/acidosis)',
    steps: [
      { id: 's1', label: 'Aldosterone antagonists (spironolactone/eplerenone) block mineralocorticoid receptor', emphasis: 'key' },
      { id: 's2', label: 'ENaC blockers (amiloride/triamterene) block collecting-duct sodium channel', emphasis: 'key' },
      { id: 's3', label: 'K-sparing → risk HYPERKALAEMIA + metabolic acidosis (esp. with ACEi/ARB)', emphasis: 'danger' },
      { id: 's4', label: 'Osmotic (mannitol): filtered, non-reabsorbed → water diuresis; lowers ICP', emphasis: 'key' },
      { id: 's5', label: 'Acetazolamide (PCT carbonic anhydrase) → bicarbonate loss → metabolic acidosis', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Survival benefit and potassium retention in heart failure', mechanism: 'Aldosterone antagonist (spironolactone/eplerenone)', significance: 'key' },
    { sign: 'Hyperkalaemia when spironolactone is combined with an ACE inhibitor', mechanism: 'Additive potassium retention', significance: 'key' },
    { sign: 'Gynaecomastia in a man on a potassium-sparing diuretic', mechanism: 'Spironolactone anti-androgen effect', significance: 'key' },
    { sign: 'Mannitol used to reduce raised intracranial pressure', mechanism: 'Osmotic diuresis (non-reabsorbed solute)', significance: 'supportive' },
    { sign: 'Metabolic acidosis with a diuretic used for glaucoma/altitude', mechanism: 'Acetazolamide (bicarbonate loss)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The aldosterone-antagonist diuretic improving heart-failure survival', meaning: 'Spironolactone (or eplerenone)' },
    { clue: 'The main danger of potassium-sparing diuretics', meaning: 'Hyperkalaemia (worse with ACEi/ARB)' },
    { clue: 'The osmotic diuretic for raised intracranial pressure', meaning: 'Mannitol' },
    { clue: 'The carbonic anhydrase inhibitor causing metabolic acidosis', meaning: 'Acetazolamide' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'These classes complete the diuretic map: potassium-sparing agents (spironolactone/eplerenone, amiloride/triamterene) treat heart failure, hyperaldosteronism and cirrhosis and offset other diuretics\' hypokalaemia — but risk hyperkalaemia, especially with ACEi/ARB or renal impairment, and spironolactone causes gynaecomastia. Mannitol (osmotic) reduces raised intracranial/intraocular pressure, and acetazolamide (carbonic anhydrase inhibitor) causes a bicarbonate-losing acidosis used in glaucoma/altitude. Sequential nephron blockade combines classes for resistant oedema. Loops/thiazides are [[loop-thiazide-diuretics]]; potassium is [[potassium-disorders]].' },
  ],

  mnemonics: [
    { hook: '"Spironolactone Spares potassium (Conn/CHF/Cirrhosis) but → gynaecomastia + hyperK"', expansion: ['Amiloride = ENaC block', 'Eplerenone = fewer sex effects'] },
    { hook: '"Mannitol = brain (ICP); Acetazolamide = HCO3 loss (glaucoma/altitude, acidosis)"', expansion: ['K-sparing + ACEi = hyperkalaemia', 'CA inhibitor acts in PCT'] },
  ],

  traps: [
    {
      questionCategory: 'Hyperkalaemia risk of potassium-sparing diuretics',
      wrongInstinct: 'Adding spironolactone to an ACE inhibitor is always safe because they treat the same conditions',
      rightAnswer: 'Potassium-sparing diuretics (spironolactone, eplerenone, amiloride) RETAIN potassium, so combining them with ACE inhibitors/ARBs (which also raise potassium), potassium supplements, or using them in renal impairment can cause dangerous HYPERKALAEMIA — the combination is used deliberately in heart failure but demands monitoring of potassium and renal function, not casual co-prescription',
      why: 'Both drug classes raise serum potassium, so their combination (common in heart failure) can precipitate life-threatening hyperkalaemia without monitoring — the opposite electrolyte risk to loops/thiazides.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which diuretic acts on the collecting-duct mineralocorticoid receptor, improves survival in heart failure, and can cause hyperkalaemia and gynaecomastia?',
      options: [
        { id: 'a', text: 'Furosemide' },
        { id: 'b', text: 'Spironolactone' },
        { id: 'c', text: 'Hydrochlorothiazide' },
        { id: 'd', text: 'Acetazolamide' },
      ],
      answerId: 'b',
      explanation: 'Spironolactone is an aldosterone (mineralocorticoid-receptor) antagonist acting in the collecting duct; it retains potassium (hyperkalaemia risk), improves heart-failure survival, treats Conn syndrome and cirrhotic ascites, and its anti-androgen action causes gynaecomastia (eplerenone is more selective).',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Acetazolamide, a carbonic anhydrase inhibitor acting in the proximal tubule, characteristically causes:',
      options: [
        { id: 'a', text: 'Metabolic alkalosis' },
        { id: 'b', text: 'A bicarbonate-losing metabolic acidosis' },
        { id: 'c', text: 'Hyperkalaemia with alkalosis' },
        { id: 'd', text: 'Respiratory acidosis' },
      ],
      answerId: 'b',
      explanation: 'By inhibiting proximal tubule carbonic anhydrase, acetazolamide causes urinary bicarbonate loss and a metabolic acidosis; this is used therapeutically (glaucoma, altitude sickness, urinary alkalinisation), unlike loops/thiazides which cause metabolic alkalosis.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default potassiumSparingOsmoticDiuretics;
