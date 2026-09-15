import type { Lecture } from '../../lib/types';

export const ghpCarbohydrateProteinDigestion: Lecture = {
  id: 'ghp-carbohydrate-protein-digestion',
  title: 'Carbohydrate & Protein Digestion and Absorption',
  system: 'gi',
  source: 'Ch 66 — Digestion & Absorption in the Gastrointestinal Tract',
  updated: '2026-09-14',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'Ch 66 Digestion & Absorption' },
    { kind: 'mechanism', label: 'SGLT1 · GLUT5 · PepT1' },
    { kind: 'exam', label: 'Why ORS works · lactase deficiency' },
  ],

  highYield: [
    '**Digestion happens in two places, and only the second one finishes the job.** The **luminal phase** is amylase — salivary ptyalin (killed once the bolus is acidified below pH 4, though it works inside the bolus core for 20–30 minutes) and then **pancreatic amylase**, which does the bulk. Amylase can only cut interior alpha-1,4 bonds, so it stops at **maltose, maltotriose and alpha-limit dextrins** and produces **no free glucose at all**. The **brush-border phase** — **maltase, sucrase-isomaltase, lactase and trehalase** sitting in the microvillus membrane — makes the final cut. Only **three monosaccharides** are ever absorbed: **glucose (roughly 80% of the total), galactose and fructose**.',
    '**Glucose and galactose are pulled uphill; fructose merely rolls downhill.** The apical **SGLT1** carries **2 Na⁺ with each glucose (or galactose)** — a **secondary active** step whose energy is borrowed entirely from the Na⁺ gradient that the **basolateral Na⁺/K⁺ ATPase** maintains. Glucose and galactose therefore **compete** for the same carrier and can be absorbed against a concentration gradient. **Fructose has no such carrier**: it enters on **GLUT5** by **facilitated diffusion**, which is Na⁺-independent, saturable, low-capacity and cannot work uphill. All three then leave the cell basolaterally on **GLUT2** into portal blood.',
    '**The applied payoff: oral rehydration therapy exists because cholera cannot switch SGLT1 off.** Cholera toxin ADP-ribosylates Gs, locks adenylate cyclase on, and the resulting **cAMP** does two things — it **opens CFTR** in the crypts (massive Cl⁻ then Na⁺ and water secretion) and it **inhibits NHE3**, the electroneutral Na⁺ absorber. It does **not** touch **SGLT1 on the villus**. So put **glucose and sodium in the lumen together in roughly equimolar amounts** and absorption restarts, dragging water with it — the reduced-osmolarity WHO formula is **Na⁺ 75, glucose 75, K⁺ 20, citrate 10 mmol/L, total 245 mOsm/L**. Overload the sugar and you simply add an osmotic load, which is why sweetened drinks make cholera worse.',
    '**Lactase is the weak link in the brush border, and the exam knows it.** It has the **lowest activity of all the disaccharidases**, sits **furthest out at the villus tip**, and is therefore the **first enzyme lost in any mucosal injury** (gastroenteritis, coeliac disease) and the one that **declines genetically after weaning** in most of the world. Undigested lactose is osmotically active: it **holds water in the lumen**, and colonic bacteria ferment it to **short-chain fatty acids plus hydrogen and CO₂**. Hence bloating, flatus and watery diarrhoea; **stool pH below 5.5**, **positive reducing substances**, a **high stool osmotic gap**, a positive **hydrogen breath test** — and complete relief on fasting.',
    '**Protein digestion is a relay, and pepsin is the least important runner.** **Pepsinogen** is autocatalytically activated by HCl and works only at **pH 1.8–3.5** (dead above pH 5), accounting for just **10–20%** of protein digestion — which is why gastrectomy or profound achlorhydria does not cause protein malnutrition. The decisive step is **enterokinase (enteropeptidase) in the brush border converting trypsinogen to trypsin**; trypsin then **autoactivates and activates everything else** — chymotrypsinogen, proelastase and the procarboxypeptidases. **Endopeptidases** cut in the middle, **carboxypeptidases** nibble from the C-terminus, and brush-border **aminopeptidases and dipeptidases** finish the ends.',
    '**Most protein is absorbed as peptides, not as amino acids — and peptides are the faster route.** **PepT1** takes **di- and tripeptides** apically using an inward **H⁺ gradient** (the acid microclimate that NHE3 maintains at the brush border), then cytosolic peptidases hydrolyse them to free amino acids for basolateral exit. Free amino acids have their own family of mostly **Na⁺-coupled** carriers, grouped by side chain — which is why single-carrier defects give **aminoaciduria without starvation**: in **Hartnup disease** (neutral amino acids) and **cystinuria** (dibasic), nutrition is preserved because **PepT1 carries the same residues in peptide form**.',
  ],

  mechanism: {
    title: 'Amylase → brush-border disaccharidase → Na⁺-coupled uptake → water follows',
    steps: [
      { id: 's1', label: 'Amylase cuts starch only as far as maltose, maltotriose and alpha-limit dextrins' },
      { id: 's2', label: 'Brush-border maltase, sucrase-isomaltase and lactase make the final cut to monosaccharides', emphasis: 'key' },
      { id: 's3', label: 'Basolateral Na⁺/K⁺ ATPase keeps cell Na⁺ low — the battery behind every apical carrier', emphasis: 'key' },
      { id: 's4', label: 'SGLT1 spends that gradient to drag glucose and galactose uphill; fructose enters alone on GLUT5', emphasis: 'key' },
      { id: 's5', label: 'GLUT2 releases all three basolaterally into portal blood' },
      { id: 's6', label: 'Absorbed Na⁺ and solute make water follow osmotically — the whole basis of oral rehydration', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Watery diarrhoea, bloating and flatus after milk, with stool pH below 5.5 and positive reducing substances', mechanism: 'Undigested lactose holds water osmotically and is fermented by colonic bacteria to short-chain fatty acids and gas', significance: 'key' },
    { sign: 'The diarrhoea stops completely within a day of fasting', mechanism: 'No substrate in the lumen means no osmotic gradient — the signature of an osmotic mechanism', significance: 'key' },
    { sign: 'A child with cholera keeps absorbing salt and water when given glucose-containing oral rehydration solution', mechanism: 'The toxin blocks NHE3 and opens CFTR but leaves villus SGLT1 fully functional', significance: 'key' },
    { sign: 'Symptoms after a large fructose load that do not occur with an equivalent glucose load', mechanism: 'GLUT5 is facilitated, low-capacity and saturable; adding glucose improves fructose uptake, sorbitol worsens it', significance: 'supportive' },
    { sign: 'Neutral aminoaciduria and a pellagra-like rash in a well-nourished child', mechanism: 'Hartnup disease: the free neutral amino acid carrier fails, but PepT1 still delivers those residues as di- and tripeptides', significance: 'key' },
    { sign: 'Adequate protein nutrition years after total gastrectomy', mechanism: 'Pepsin contributes only 10 to 20 per cent of protein digestion; pancreatic and brush-border proteases cover the rest', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Apical carrier that moves glucose and galactose against their own gradient using 2 Na⁺', meaning: 'SGLT1 — secondary active transport powered by the basolateral Na⁺/K⁺ ATPase' },
    { clue: 'The one sugar with no sodium-coupled carrier', meaning: 'Fructose, which enters by facilitated diffusion on GLUT5' },
    { clue: 'Common basolateral exit for all three absorbed monosaccharides', meaning: 'GLUT2, into the portal blood' },
    { clue: 'Brush-border enzyme with the lowest reserve and the first lost in mucosal injury', meaning: 'Lactase — it also sits furthest out at the villus tip' },
    { clue: 'Brush-border enzyme that converts trypsinogen to trypsin', meaning: 'Enterokinase (enteropeptidase) — the trigger for the whole pancreatic protease cascade' },
    { clue: 'Transporter carrying di- and tripeptides on a proton gradient', meaning: 'PepT1 — the dominant and faster route for absorbed protein' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'This chapter is the physiological licence for the single cheapest life-saving therapy in medicine. **Oral rehydration works because secretion and absorption are separate machinery**: the toxin jams the secretory tap open but leaves the nutrient-coupled absorptive drain intact, so **sodium plus glucose in roughly equimolar amounts** restores net absorption and **water follows osmotically**. The same logic explains why **rice-based (cereal) solutions** work well — slowly released glucose without an osmotic penalty — and why **lactose-free feeds** help after gastroenteritis has stripped the villus tips. Clinical formulations and when to reach for them: [[laxatives-antidiarrheals-ors]]. Where all that water actually moves: [[ghp-water-electrolyte-absorption]].' },
    { logic: 'Where it is examined', detail: 'Three reliable stems. **Which sugar is not sodium-coupled** — fructose, on GLUT5, so it cannot be absorbed uphill and saturates early. **Why the glucose is in the rehydration sachet** — as a cotransport partner for sodium, not as a calorie source. And **why a single amino acid transporter defect does not starve the patient** — PepT1 carries the peptide form. The clinical-layer treatment of the same ground: [[hgb-carbohydrate-digestion-absorption]] and [[protein-digestion-amino-acid-absorption]].' },
  ],

  mnemonics: [
    { hook: 'Glucose and Galactose Get a sodium lift; Fructose Freewheels', expansion: ['SGLT1 carries 2 Na⁺ per glucose or galactose — secondary active, uphill, competitive', 'GLUT5 carries fructose by facilitated diffusion only — no sodium, no uphill, saturates early', 'All three leave on GLUT2 into the portal vein'] },
    { hook: 'Cholera jams the tap open but leaves the drain working', expansion: ['cAMP opens CFTR and inhibits NHE3 — secretion up, electroneutral absorption down', 'SGLT1 on the villus is untouched, so glucose plus sodium still pulls water in', 'That single spared transporter is the whole of oral rehydration therapy'] },
  ],

  traps: [
    {
      questionCategory: 'Why oral rehydration solution contains glucose',
      wrongInstinct: 'The glucose is there to feed a sick child who cannot eat',
      rightAnswer: 'The glucose is a transport partner — SGLT1 needs it to carry sodium, and water follows the sodium',
      why: 'It is a cofactor, not a fuel, which is why the glucose to sodium ratio matters and why excess sugar makes diarrhoea worse.',
    },
    {
      questionCategory: 'The dominant form in which protein is absorbed',
      wrongInstinct: 'Protein must be broken all the way down to free amino acids before any of it can cross the brush border',
      rightAnswer: 'Most protein crosses as di- and tripeptides on PepT1, and is hydrolysed inside the enterocyte',
      why: 'Peptide uptake is faster than free amino acid uptake, and it is why Hartnup disease and cystinuria spare nutrition.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A two-year-old with cholera is losing large volumes of watery stool. Oral rehydration solution containing sodium and glucose restores hydration even though secretion continues. The best explanation is:',
      options: [
        { id: 'a', text: 'Glucose neutralises cholera toxin in the intestinal lumen' },
        { id: 'b', text: 'Sodium-glucose cotransport on SGLT1 is unaffected by the toxin, so absorbed solute pulls water in' },
        { id: 'c', text: 'Glucose closes CFTR chloride channels in the crypt cells' },
        { id: 'd', text: 'The osmotic load of glucose draws sodium out of the plasma into the lumen' },
      ],
      answerId: 'b',
      explanation: 'Cholera toxin raises cAMP, which opens CFTR and inhibits the NHE3 route for electroneutral sodium absorption — but villus SGLT1 is left intact. Supplying sodium and glucose together restarts coupled absorption, and water follows osmotically. Nothing about the solution neutralises the toxin or shuts CFTR, and option d describes the harm done by an over-sweetened drink, not the therapy.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A six-year-old develops bloating and explosive watery stool a few hours after milk. Stool pH is 5.0, reducing substances are positive, the stool osmotic gap is high, and everything settles within a day of fasting. The findings point to:',
      options: [
        { id: 'a', text: 'A secretory diarrhoea from enterotoxigenic bacteria' },
        { id: 'b', text: 'Pancreatic amylase deficiency preventing starch digestion' },
        { id: 'c', text: 'Brush-border lactase deficiency with colonic fermentation of the unabsorbed sugar' },
        { id: 'd', text: 'Loss of GLUT2 at the basolateral membrane' },
      ],
      answerId: 'c',
      explanation: 'Acid stool with reducing substances, a wide osmotic gap and complete relief on fasting is the osmotic signature of unabsorbed sugar, and lactase is the disaccharidase with the least reserve. A secretory diarrhoea would persist through the fast with a narrow osmotic gap. Amylase deficiency would not be provoked specifically by milk, and a basolateral exit defect would not produce reducing substances in stool.',
      tests: 'investigation',
    },
    {
      id: 'q3',
      stem: 'An adult tolerates sucrose well but develops bloating and loose stool after a large dose of pure fructose. The physiological reason fructose absorption saturates so easily is that it:',
      options: [
        { id: 'a', text: 'Enters on GLUT5 by facilitated diffusion, with no sodium coupling and no ability to work uphill' },
        { id: 'b', text: 'Shares SGLT1 with glucose and is outcompeted' },
        { id: 'c', text: 'Requires hydrolysis by a brush-border enzyme before it can be taken up' },
        { id: 'd', text: 'Cannot leave the enterocyte because it lacks a basolateral carrier' },
      ],
      answerId: 'a',
      explanation: 'Fructose is the exception among the three absorbable monosaccharides: it has no sodium-coupled carrier and moves only down its gradient on GLUT5, so uptake is low-capacity and saturable. Sucrose is tolerated because its hydrolysis delivers glucose alongside the fructose, and glucose absorption improves fructose uptake. Fructose is already a monosaccharide, and it leaves the cell on GLUT2 like the others.',
      tests: 'exam',
    },
  ],
};

export default ghpCarbohydrateProteinDigestion;
