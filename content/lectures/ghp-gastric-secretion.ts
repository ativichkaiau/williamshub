import type { Lecture } from '../../lib/types';

export const ghpGastricSecretion: Lecture = {
  id: 'ghp-gastric-secretion',
  title: 'Gastric Secretion & the Parietal Cell',
  system: 'gi',
  source: 'Ch 64 — Secretory Functions of the Alimentary Tract',
  updated: '2026-09-14',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'Ch 64 Alimentary Secretion' },
    { kind: 'mechanism', label: 'H⁺/K⁺-ATPase · ECL histamine' },
    { kind: 'exam', label: 'Three stimuli · antral pH feedback' },
  ],

  highYield: [
    '**Five secretory cells, two gland territories — get the map right and half the chapter answers itself.** **Oxyntic (gastric) glands** in the **body and fundus** contain **parietal (oxyntic) cells** making **HCl and intrinsic factor**, **chief (peptic) cells** holding **pepsinogen**, **mucous neck cells**, and **ECL cells** stocked with **histamine**. The **pyloric glands** of the **antrum** make almost no acid; they house the **G cell (gastrin)** and the **D cell (somatostatin)**. Acid is therefore **manufactured proximally and governed distally** — a neat anatomical division the exam leans on constantly.',
    '**The parietal cell is a proton pump with a carbonic anhydrase standing behind it.** CO₂ and H₂O are turned by **carbonic anhydrase** into H⁺ and HCO₃⁻. The apical **H⁺/K⁺-ATPase**, delivered into the canalicular membrane when **tubulovesicles fuse** on stimulation, trades **H⁺ out for K⁺ in** against a gradient of about **three million-fold**; Cl⁻ follows through an apical channel, giving isotonic **HCl near 150–160 mEq/L at pH 0.8**, roughly **1.5 L a day**. The HCO₃⁻ left behind exits basolaterally on a **Cl⁻/HCO₃⁻ exchanger** — which is precisely why gastric venous blood turns alkaline after a meal, the **alkaline tide**.',
    '**Three stimuli, but only one final amplifier.** **Acetylcholine (M₃, vagal)** and **gastrin (CCK-B)** both signal through **Gq and Ca²⁺**; **histamine (H₂)** signals through **Gs and cAMP**. The catch is that ACh and gastrin also drive the **ECL cell** to release histamine, so much of their effect is delivered **through** histamine rather than alongside it. The three therefore **potentiate** — the combined response exceeds the sum of the parts — and blocking **H₂** cuts a meal response that never depended on mast-cell histamine at all. **Proton pump inhibitors** sit one step further down at the **final common effector**: an **acid-activated prodrug** concentrates in the acidic canaliculus and **covalently inhibits the pump**, so no stimulus can route around it. Hence PPIs only hit **actively secreting** pumps (dose **30–60 minutes before a meal**) and recovery needs **new pump protein**, so the effect long outlives the plasma half-life.',
    '**Three phases, and the percentages are examinable.** **Cephalic** — sight, smell, taste, chewing, even the thought of food — is purely **vagal** and contributes about **30%**: direct M₃ stimulation of parietal cells plus **GRP** released onto G cells. The **gastric phase** is the largest at roughly **60%**, driven by **distension** through vagovagal and local enteric reflexes and by **peptides and amino acids** acting directly on G cells. The **intestinal phase** adds only about **10%** — and the duodenum, on balance, is **inhibitory**: the **enterogastric reflex** plus **secretin, CCK and GIP** brake both acid and emptying once chyme has arrived.',
    '**Low antral pH is the off-switch, and every classic gastrin picture is that loop broken.** When antral contents fall **below pH 3** the **D cell** releases **somatostatin**, which paracrine-inhibits the **G cell, the ECL cell and the parietal cell**; below **pH 2** gastrin release is essentially abolished. Read serum gastrin **together with acid output**, never alone: **high gastrin with low acid** (atrophic gastritis, pernicious anaemia, long-term PPI) is the **appropriate** response to a missing brake, while **high gastrin with high acid** means a **gastrinoma secreting outside the pH loop** — Zollinger-Ellison.',
    '**Pepsinogen is inert until acid touches it, so peptic digestion is entirely acid-dependent.** Chief cells release **pepsinogen** by exocytosis; **HCl below about pH 5** cleaves it to **pepsin**, and pepsin then activates further pepsinogen **autocatalytically**. Pepsin works optimally at **pH 1.8–3.5** and is **irreversibly denatured above pH 5**, which is why acid suppression abolishes proteolysis as well as acid. Note the asymmetry the exam likes: acid and pepsin can both be replaced or done without, but **intrinsic factor cannot** — it is the only truly indispensable gastric secretion, and its loss is pernicious anaemia.',
  ],

  mechanism: {
    title: 'ACh and gastrin → ECL histamine → cAMP → H⁺/K⁺-ATPase → HCl, then pH feedback',
    steps: [
      { id: 's1', label: 'Vagal ACh on parietal M₃ receptors and GRP onto antral G cells', emphasis: 'key' },
      { id: 's2', label: 'Gastrin and ACh drive the ECL cell to release histamine', emphasis: 'key' },
      { id: 's3', label: 'Histamine on H₂ raises cAMP — the final common amplifier', emphasis: 'key' },
      { id: 's4', label: 'Tubulovesicles fuse, inserting H⁺/K⁺-ATPase into the canalicular membrane', emphasis: 'key' },
      { id: 's5', label: 'Carbonic anhydrase supplies H⁺, Cl⁻ follows, HCO₃⁻ leaves as the alkaline tide' },
      { id: 's6', label: 'Antral pH under 3 → D-cell somatostatin shuts gastrin and the pump down', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Blood draining the gastric mucosa becomes transiently alkaline after a meal', mechanism: 'Alkaline tide — HCO₃⁻ from carbonic anhydrase is exported basolaterally as H⁺ is pumped into the lumen', significance: 'key' },
    { sign: 'An H₂ antagonist blunts meal-stimulated acid even though the meal signals via ACh and gastrin', mechanism: 'Both act largely by releasing ECL-cell histamine, so blocking H₂ removes the potentiation they depend on', significance: 'key' },
    { sign: 'Serum gastrin markedly raised while basal acid output is near zero', mechanism: 'No luminal acid means no D-cell somatostatin, so the G cell is released from feedback inhibition', significance: 'key' },
    { sign: 'Serum gastrin raised and acid output also raised, with ulcers beyond the duodenal bulb', mechanism: 'Gastrinoma secretes independently of antral pH, so the negative feedback loop never closes', significance: 'key' },
    { sign: 'Proteolysis in the stomach ceases once luminal pH is held above 5', mechanism: 'Pepsinogen is no longer cleaved and existing pepsin is irreversibly denatured', significance: 'supportive' },
    { sign: 'B12 deficiency years after gastrectomy despite an adequate diet', mechanism: 'Loss of parietal-cell intrinsic factor; acid can be substituted for, intrinsic factor cannot', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The single cell that makes both hydrochloric acid and intrinsic factor', meaning: 'The parietal (oxyntic) cell of the body and fundus' },
    { clue: 'Enzyme that generates the H⁺ for secretion out of CO₂ and water', meaning: 'Carbonic anhydrase — its HCO₃⁻ by-product is the alkaline tide' },
    { clue: 'Receptor through which the final common amplifier of acid secretion acts', meaning: 'The parietal H₂ receptor, coupled through Gs to cAMP' },
    { clue: 'Paracrine signal that stops gastrin release when antral pH falls below 3', meaning: 'Somatostatin from the antral D cell' },
    { clue: 'What converts pepsinogen to pepsin, and what sustains the conversion', meaning: 'Luminal HCl below pH 5 starts it; pepsin then activates more pepsinogen autocatalytically' },
    { clue: 'Target whose covalent inhibition outlasts the drug in plasma', meaning: 'The apical H⁺/K⁺-ATPase — recovery requires synthesis of new pump' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Every acid-suppressing drug in use is an argument about **where on this pathway to intervene**. Blocking one receptor leaves the other two stimuli intact, which is why **H₂ blockers** are only partially effective and show **tachyphylaxis**; blocking the **pump** ends the pathway regardless of stimulus. The same map explains the complications of long-term suppression — loss of the acid brake gives **hypergastrinaemia and ECL hyperplasia**, and the loss of acid impairs absorption of **iron, calcium and B12**. Clinical layer: [[gastric-acid-mechanism-control]] and [[peptic-ulcer-disease]].' },
    { logic: 'The three stimuli in one line', detail: '**ACh — neural, Gq, cephalic and gastric phases. Gastrin — hormonal, Gq, switched off by antral acid. Histamine — paracrine, Gs, the amplifier both of the others work through.** Defence is the mirror image: the **mucus-bicarbonate gel** holds the epithelial surface near **pH 7** while the lumen sits at **pH 2**, sustained by prostaglandins — which is the whole mechanism of NSAID injury ([[gastric-enzymes-intrinsic-barrier]]). Downstream, the acid load handed to the duodenum is what calls for the bicarbonate response covered in [[ghp-pancreatic-biliary-secretion]].' },
  ],

  mnemonics: [
    { hook: 'Parietal Pumps · Chief Chews · ECL Excites · G Gives gastrin · D Dampens', expansion: ['Pump and intrinsic factor come from one cell — the parietal cell', 'Chief cells hold pepsinogen, useless until acid cleaves it', 'ECL histamine is the amplifier, D-cell somatostatin is the brake'] },
    { hook: 'Acid needs a HAG — Histamine, Acetylcholine, Gastrin — and two of them arrive as histamine', expansion: ['H₂ blocker removes the amplifier, so it blunts all three partially', 'PPI kills the pump itself, so it blunts all three completely'] },
  ],

  traps: [
    {
      questionCategory: 'Which single receptor blockade cuts meal-stimulated acid most broadly',
      wrongInstinct: 'Block the gastrin (CCK-B) receptor, since gastrin is the hormone the meal actually releases',
      rightAnswer: 'Block H₂ — ACh and gastrin deliver much of their effect by releasing ECL-cell histamine',
      why: 'The ECL cell places histamine downstream of both the neural and the hormonal input, so it is the convergence point.',
    },
    {
      questionCategory: 'How to interpret a raised serum gastrin',
      wrongInstinct: 'A high gastrin means a gastrinoma until proven otherwise',
      rightAnswer: 'Read gastrin alongside acid output — high gastrin with absent acid is the normal response to a lost pH brake',
      why: 'Gastrin is regulated by antral pH, so achlorhydria of any cause raises it; only a tumour raises gastrin and acid together.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A volunteer receives a selective H₂ receptor antagonist before a test meal. Acid output falls by far more than the histamine-dependent share of the response would suggest. The best explanation is:',
      options: [
        { id: 'a', text: 'The drug also blocks muscarinic M₃ receptors on the parietal cell' },
        { id: 'b', text: 'Acetylcholine and gastrin act largely by releasing ECL-cell histamine, so H₂ blockade removes their amplifier' },
        { id: 'c', text: 'Histamine is the only stimulus that can open the H⁺/K⁺-ATPase' },
        { id: 'd', text: 'H₂ blockade prevents carbonic anhydrase from generating intracellular H⁺' },
      ],
      answerId: 'b',
      explanation: 'The ECL cell sits downstream of both vagal ACh and gastrin, so histamine is the final common amplifier and the three stimuli potentiate rather than simply add. Removing histamine therefore subtracts part of the ACh and gastrin response as well. The drug is receptor-selective, so it does not touch M₃; ACh and gastrin can still stimulate the pump directly through Ca²⁺, so histamine is not obligatory; and carbonic anhydrase is not receptor-regulated.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A woman with long-standing autoimmune atrophic gastritis has a markedly raised fasting serum gastrin and a basal acid output close to zero. The raised gastrin is best explained by:',
      options: [
        { id: 'a', text: 'A gastrin-secreting tumour of the duodenal wall' },
        { id: 'b', text: 'Absent luminal acid, so D cells release no somatostatin and G cells escape inhibition' },
        { id: 'c', text: 'Excess histamine release from hyperplastic ECL cells driving gastrin production' },
        { id: 'd', text: 'Vagal overactivity releasing gastrin-releasing peptide continuously' },
      ],
      answerId: 'b',
      explanation: 'Gastrin release is normally switched off once antral pH falls below about 3, through somatostatin from antral D cells. Destroy the parietal cell mass and there is no acid to trigger that brake, so gastrin rises appropriately. The discriminator is acid output: a gastrinoma gives high gastrin with high acid, whereas atrophic gastritis gives high gastrin with achlorhydria. ECL hyperplasia is a consequence of the hypergastrinaemia, not its cause.',
      tests: 'exam',
    },
    {
      id: 'q3',
      stem: 'During maximal stimulation of acid secretion, blood leaving the gastric mucosa becomes more alkaline than arterial blood. The direct cause is:',
      options: [
        { id: 'a', text: 'Bicarbonate generated by carbonic anhydrase leaving the parietal cell on a basolateral Cl⁻/HCO₃⁻ exchanger' },
        { id: 'b', text: 'Reduced CO₂ delivery to the mucosa during the hyperaemia of secretion' },
        { id: 'c', text: 'Bicarbonate secreted by surface mucous cells being reabsorbed into the blood' },
        { id: 'd', text: 'Loss of hydrogen ion from the plasma into the parietal cell for pumping' },
      ],
      answerId: 'a',
      explanation: 'Splitting carbonic acid gives the parietal cell one H⁺ for the lumen and one HCO₃⁻ that must leave the other side, exchanged for the Cl⁻ that will accompany the acid. Every proton secreted therefore exports a bicarbonate into the blood, producing the post-prandial alkaline tide. The H⁺ is manufactured inside the cell rather than extracted from plasma, and mucosal bicarbonate secretion moves alkali the other way, toward the lumen.',
      tests: 'mechanism',
    },
  ],
};

export default ghpGastricSecretion;
