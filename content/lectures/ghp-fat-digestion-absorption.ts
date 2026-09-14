import type { Lecture } from '../../lib/types';

export const ghpFatDigestionAbsorption: Lecture = {
  id: 'ghp-fat-digestion-absorption',
  title: 'Fat Digestion, Micelles & Chylomicrons',
  system: 'gi',
  source: 'Ch 65 — Digestion & Absorption in the Gastrointestinal Tract',
  updated: '2026-09-14',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'Ch 65 Digestion & Absorption' },
    { kind: 'mechanism', label: 'Emulsify → lipase + colipase → micelle → chylomicron' },
    { kind: 'exam', label: 'Lymph not portal · ADEK lost with the micelle' },
  ],

  highYield: [
    '**Fat is the hard case because the substrate and the enzyme live in different phases.** Triglyceride is insoluble in water; pancreatic lipase is a water-soluble protein that can only act **at the oil–water interface**. So the rate of digestion is set not by how much enzyme there is but by **how much surface area** there is. Every step of the first half of this chapter is surface-area engineering: antral churning and duodenal segmentation break the fat mechanically, and **bile salts with lecithin** — amphipathic detergents from the liver — coat the fragments so they cannot recoalesce. Droplet diameter falls to under **1 µm** and the interface available to lipase rises roughly **1000-fold**.',
    '**Lipase needs a chaperone, and that chaperone is the favourite detail of the chapter.** The same bile salts that create the interface would **displace lipase from it**. **Colipase** — secreted as procolipase and activated by trypsin — binds both lipase and the bile-salt-coated droplet, **anchoring the enzyme to the surface it must work on**. Pancreatic lipase then cuts positions **1 and 3**, leaving **2-monoglyceride plus two free fatty acids** as the end products. Lingual and gastric lipase matter little in adults but carry real weight in **neonates and in pancreatic insufficiency**.',
    '**The micelle is a ferry, not a cargo container — it is never absorbed.** Once bile salt concentration exceeds the **critical micellar concentration**, bile salts assemble into **3–10 nm** particles with polar surfaces and a lipid core carrying **monoglycerides, free fatty acids, cholesterol, lysolecithin and vitamins A, D, E and K**. Their job is to cross the **unstirred water layer** at the brush border, where the **acid microclimate** weakens the packing and releases the lipid to **diffuse passively into the enterocyte**. The **micelle then returns to the lumen to reload**, and the bile salts themselves travel on to the **terminal ileum** to be reabsorbed. Roughly **95% of ingested fat** is absorbed this way.',
    '**Inside the cell, the lipid is immediately rebuilt — and that is what keeps absorption going.** The smooth endoplasmic reticulum **re-esterifies** monoglyceride and fatty acids back to **triglyceride**, which keeps the free fatty acid concentration in the cytosol near zero and therefore **maintains the inward diffusion gradient**. Triglyceride, cholesterol ester and phospholipid are then packaged around **apoB-48** — the transfer being done by **microsomal triglyceride transfer protein (MTP)** — into a **chylomicron**. Lose MTP or apoB-48 (**abetalipoproteinaemia**) and the enterocytes fill with fat while no chylomicron ever leaves: steatorrhoea, acanthocytes, and neurological damage from vitamin E deficiency.',
    '**Absorbed long-chain fat leaves by LYMPHATICS, not the portal vein — and short and medium chains do the opposite.** Chylomicrons are too large for the fenestrated capillary and are exocytosed into the **central lacteal**, travelling by **thoracic duct** to the left subclavian vein and **bypassing hepatic first pass** altogether. **Short- and medium-chain fatty acids (under about 12 carbons)** are water-soluble enough to need **neither bile salts nor micelles nor re-esterification**: they diffuse straight through, bind albumin and go **portal**. That is the entire rationale for **MCT oil** in pancreatic insufficiency, lymphangiectasia and short bowel.',
    '**Vitamins A, D, E and K ride the same machinery, so they fail together.** They are carried in the micelle and exported in the chylomicron, which means **any** lesion in the chain — no lipase (pancreatic insufficiency), no bile salts (cholestasis, ileal resection, bacterial deconjugation), no mucosa (coeliac disease) or no lymphatic exit — costs all four at once. Look for **night blindness (A)**, **osteomalacia and hypocalcaemia (D)**, **haemolysis, ataxia and areflexia (E)** and a **prolonged prothrombin time that corrects with parenteral vitamin K** — the classic way to separate vitamin K malabsorption from hepatocellular failure.',
  ],

  mechanism: {
    title: 'Emulsify → lipase with colipase → micelle ferry → re-esterify → chylomicron → lymph',
    steps: [
      { id: 's1', label: 'Bile salts and lecithin emulsify fat, multiplying the interface lipase can act on', emphasis: 'key' },
      { id: 's2', label: 'Colipase anchors lipase against bile-salt displacement; lipase cuts to 2-monoglyceride and two fatty acids', emphasis: 'key' },
      { id: 's3', label: 'Products, cholesterol and vitamins A, D, E and K load into bile salt micelles', emphasis: 'key' },
      { id: 's4', label: 'Micelles ferry the load across the unstirred water layer and release it — the micelle itself is not absorbed', emphasis: 'key' },
      { id: 's5', label: 'Smooth ER re-esterifies to triglyceride and MTP packages it with apoB-48 into a chylomicron', emphasis: 'key' },
      { id: 's6', label: 'Chylomicrons exit into the lacteal and reach blood by the thoracic duct, never the portal vein', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Pale, bulky, offensive stools that float and leave an oily film; faecal fat above 7 g/day on a 100 g intake', mechanism: 'Undigested or unabsorbed triglyceride reaching the colon — the common endpoint of every break in the chain', significance: 'key' },
    { sign: 'Steatorrhoea after terminal ileal resection despite a completely normal pancreas', mechanism: 'The bile salt pool is no longer recycled, so luminal concentration falls below the critical micellar concentration', significance: 'key' },
    { sign: 'Prolonged prothrombin time that corrects within hours of parenteral vitamin K', mechanism: 'Fat-soluble vitamin malabsorption, not failure of hepatic synthesis — the discriminator at the bedside', significance: 'key' },
    { sign: 'Night blindness, bone pain and ataxia with areflexia in long-standing steatorrhoea', mechanism: 'Vitamins A, D and E share the micellar and chylomicron route, so they are lost together', significance: 'supportive' },
    { sign: 'Low albumin and low circulating lymphocytes alongside fat malabsorption', mechanism: 'Lymphatic obstruction blocks chylomicron exit and leaks protein and lymphocytes into the lumen', significance: 'supportive' },
    { sign: 'A patient with pancreatic insufficiency tolerates medium-chain triglyceride oil without steatorrhoea', mechanism: 'Medium-chain fatty acids skip lipase, micelles and chylomicrons and travel portally on albumin', significance: 'key' },
  ],

  investigations: [
    { clue: 'Protein that holds lipase on the droplet against bile salt displacement', meaning: 'Colipase, activated from procolipase by trypsin' },
    { clue: 'Concentration below which bile salts can no longer aggregate', meaning: 'The critical micellar concentration — fall below it and fat absorption fails' },
    { clue: 'Apolipoprotein that identifies the chylomicron as intestinal in origin', meaning: 'ApoB-48, loaded by microsomal triglyceride transfer protein' },
    { clue: 'Route by which absorbed long-chain fat reaches the systemic circulation', meaning: 'Lacteal to thoracic duct — lymph, bypassing hepatic first pass' },
    { clue: 'Fatty acids requiring neither bile salts nor chylomicron packaging', meaning: 'Short- and medium-chain — albumin-bound into portal blood' },
    { clue: 'Enterocytes stuffed with fat, no chylomicrons in plasma, acanthocytes on the film', meaning: 'Abetalipoproteinaemia — MTP or apoB-48 failure at the packaging step' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Fat absorption is a **four-link chain — lipase, bile salts, mucosa, lymphatics — and the same greasy stool results from a break at any link**, so the treatment depends entirely on locating the break. No lipase gets **enzyme replacement with acid suppression** so the enzyme survives the duodenum. No bile salts gets **medium-chain triglyceride**, which needs none of the machinery. Lymphatic obstruction gets a **low-fat, MCT-based diet** to stop loading the blocked ducts. Every one of them needs **vitamins A, D, E and K replaced**. Where the bile salts come from and how they get back: [[enterohepatic-bile-circulation]]. The MCT strategy in practice: [[fcs-pancreatitis-mct]].' },
    { logic: 'Where it is examined', detail: 'Two stems recur. **Which route absorbed fat takes** — the answer is lymph for long-chain and portal for short and medium chain, and examiners like to bury it in a question about a chylous effusion or a drug interaction. And **why the micelle is not the absorbed unit** — it unloads at the brush border and goes back for more, which is why bile salts are needed in catalytic rather than stoichiometric amounts. The clinical-layer version of the same ground: [[hgb-lipid-digestion-absorption]]. Where the failures present: [[ghp-malabsorption-bowel-disorders]] and [[vitamin-absorption]].' },
  ],

  mnemonics: [
    { hook: 'Fat needs a ferry: Emulsify, Lipase plus Colipase, Micelle, Re-esterify, Chylomicron, Lymph', expansion: ['The first three steps are all about surface area and solubility', 'The last three are about rebuilding and exporting the lipid', 'Only the long chains take this route — short and medium go straight to the portal vein'] },
    { hook: 'ADEK ride the micelle — lose the micelle, lose ADEK', expansion: ['A: night blindness', 'D: osteomalacia and hypocalcaemia', 'E: haemolysis, ataxia and areflexia', 'K: bleeding with a prolonged PT that corrects on injection'] },
  ],

  traps: [
    {
      questionCategory: 'What happens to the micelle at the brush border',
      wrongInstinct: 'The micelle is taken up whole by the enterocyte and dismantled inside the cell',
      rightAnswer: 'The micelle unloads its lipid at the membrane and returns to the lumen; only the lipid diffuses in',
      why: 'Bile salts stay in the lumen until the terminal ileum, which is exactly why ileal resection and not jejunal resection destroys fat absorption.',
    },
    {
      questionCategory: 'Which vessel absorbed fat enters',
      wrongInstinct: 'Fat joins glucose and amino acids in the portal vein and is presented to the liver first',
      rightAnswer: 'Long-chain fat leaves as chylomicrons into the lacteal and reaches blood via the thoracic duct, bypassing first pass',
      why: 'Only short- and medium-chain fatty acids go portal — the split explains chylous ascites, MCT therapy and the lipid load in lymphangiectasia.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient develops steatorrhoea after resection of 80 cm of terminal ileum for Crohn disease. Pancreatic function and duodenal biopsy are normal. The mechanism is:',
      options: [
        { id: 'a', text: 'Loss of pancreatic lipase secretion' },
        { id: 'b', text: 'Failure of bile salt reabsorption, so luminal bile salts fall below the critical micellar concentration' },
        { id: 'c', text: 'Loss of the absorptive surface for monoglycerides and fatty acids' },
        { id: 'd', text: 'Obstruction of the intestinal lymphatics' },
      ],
      answerId: 'b',
      explanation: 'The terminal ileum is the only site of active bile salt reabsorption. Remove it and the enterohepatic pool cannot keep pace with hepatic synthesis, luminal concentration drops below the level needed to form micelles, and fat cannot be ferried across the unstirred layer. The pancreas is intact, most fat absorption occurs proximally so surface loss is not the issue, and nothing here obstructs lymph.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A child has failure to thrive, steatorrhoea, acanthocytes on the blood film and an absent plasma chylomicron fraction. Duodenal biopsy shows enterocytes engorged with lipid droplets and intact villi. The defect lies in:',
      options: [
        { id: 'a', text: 'Micelle formation in the lumen' },
        { id: 'b', text: 'Brush-border hydrolysis of triglyceride' },
        { id: 'c', text: 'Packaging of re-esterified lipid with apoB-48 by microsomal triglyceride transfer protein' },
        { id: 'd', text: 'Thoracic duct drainage into the subclavian vein' },
      ],
      answerId: 'c',
      explanation: 'Fat has clearly entered the cell — the enterocytes are full of it — so luminal digestion and uptake are working. The block is at export: without MTP loading lipid onto apoB-48 no chylomicron can form, lipid accumulates in the cell, and no chylomicrons appear in plasma. The acanthocytes and later neurological signs reflect the membrane lipid abnormality and vitamin E deficiency of abetalipoproteinaemia.',
      tests: 'disease',
    },
    {
      id: 'q3',
      stem: 'A patient with severe chronic pancreatitis is switched to a medium-chain triglyceride preparation and the steatorrhoea resolves without enzyme supplements. The best explanation is that medium-chain fatty acids:',
      options: [
        { id: 'a', text: 'Are hydrolysed by a brush-border lipase unaffected by pancreatic disease' },
        { id: 'b', text: 'Form micelles more readily at low bile salt concentrations' },
        { id: 'c', text: 'Are absorbed directly without micelles, re-esterification or chylomicron packaging, and travel in portal blood' },
        { id: 'd', text: 'Are absorbed in the colon rather than the small intestine' },
      ],
      answerId: 'c',
      explanation: 'Fatty acids shorter than about twelve carbons are sufficiently water-soluble to cross the unstirred layer and the enterocyte unaided. They need no micellar ferry, are not re-esterified, are not packaged into chylomicrons, and leave bound to albumin in the portal vein. That is why they bypass essentially every step that pancreatic, biliary or lymphatic disease disrupts.',
      tests: 'exam',
    },
  ],
};

export default ghpFatDigestionAbsorption;
