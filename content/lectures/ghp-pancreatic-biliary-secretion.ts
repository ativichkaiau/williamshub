import type { Lecture } from '../../lib/types';

export const ghpPancreaticBiliarySecretion: Lecture = {
  id: 'ghp-pancreatic-biliary-secretion',
  title: 'Pancreatic & Biliary Secretion',
  system: 'gi',
  source: 'Ch 65 — Secretory Functions of the Alimentary Tract',
  updated: '2026-09-14',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'Ch 65 Alimentary Secretion' },
    { kind: 'mechanism', label: 'Secretin → ducts · CCK → acini' },
    { kind: 'exam', label: 'Zymogens · enterohepatic recycling' },
  ],

  highYield: [
    '**Two cell types, two secretions, two hormones — and the pairing is not arbitrary.** **Acinar cells** make the **enzymes** and answer to **CCK** (with vagal ACh); **duct cells** make the **watery bicarbonate-rich fluid** and answer to **secretin**. Each trigger matches its job: **acid arriving in the duodenum below about pH 4.5** releases **secretin** from **S cells** to neutralise it, while **fatty acids and peptides** release **CCK** from **I cells** to digest them. Roughly **1 L a day** of juice, alkaline enough (**HCO₃⁻ up to about 145 mEq/L**) to lift duodenal pH to the **7–8** optimum the pancreatic enzymes require — and to keep bile acids ionised rather than precipitated.',
    '**Duct bicarbonate is a chloride-recycling trick, and CFTR is the gate.** Carbonic anhydrase supplies the HCO₃⁻; an apical **Cl⁻/HCO₃⁻ exchanger** pushes it into the lumen, and **CFTR** returns Cl⁻ to the lumen so that exchanger can keep turning. Na⁺ follows paracellularly and water osmotically, so the juice stays **isotonic** while its anions shift: as **flow rises, HCO₃⁻ rises and Cl⁻ falls reciprocally**, with Na⁺ and K⁺ near plasma throughout. Remove CFTR and the whole engine stalls — **scanty, thick, acidic juice**, inspissated protein plugs, ductal destruction: the exocrine pancreas of cystic fibrosis, and the reason those patients need enzyme replacement plus acid suppression to make it work.',
    '**Everything dangerous is shipped switched off.** The proteases leave the acinus as **zymogens** — **trypsinogen, chymotrypsinogen, procarboxypeptidase, proelastase, prophospholipase A₂** — whereas **amylase and lipase** are secreted already active, because neither can digest the gland. Three layers of protection, and the exam wants you to rank them: the enzymes are sealed in **membrane-bound zymogen granules**; a co-packaged **trypsin inhibitor (SPINK1)** quenches any trypsin that activates early; and above all the activating enzyme, **enterokinase (enteropeptidase)**, is **anchored to the duodenal brush border** and exists nowhere near the pancreas. **Spatial separation does the real work** — the inhibitor can only mop up a trace.',
    '**Trypsin is the single master switch, which is exactly why it is the weak point.** Enterokinase cleaves trypsinogen to **trypsin**; trypsin then activates **every other zymogen and more trypsinogen**, so one activation autocatalytically becomes all of them. Fire that cascade **inside** the gland — a **gallstone impacted at the ampulla**, **alcohol**, **hypertriglyceridaemia**, or a **PRSS1** trypsinogen that resists its own inactivation — and the pancreas digests itself. The specific enzymes explain the specific damage: **lipase** gives the saponified **fat necrosis** that drops serum calcium, **elastase** chews vessel walls to give retroperitoneal **haemorrhage**, and **phospholipase A₂** attacks membranes including surfactant.',
    '**Bile contains no digestive enzyme at all; its work is done by detergents.** Hepatocytes secrete **0.6–1 L a day**, making **cholic** and **chenodeoxycholic acid** from cholesterol (**7-alpha-hydroxylase** rate-limiting) and conjugating them to **glycine or taurine**, which keeps them **ionised and water-soluble at duodenal pH**. Conjugated **bile salts are amphipathic** — a flat hydrophobic steroid face, a hydrophilic edge — so they first **emulsify**: because surface area for a fixed volume of fat varies inversely with droplet diameter, breaking one globule into tiny ones raises the area available to **lipase** as much as a **thousandfold**. They then assemble **micelles** that ferry monoglycerides, fatty acids, cholesterol and the **fat-soluble vitamins A, D, E and K** to the brush border. Between meals the **gallbladder** stores this: it holds only **30–60 mL** yet banks about **12 hours** of output by absorbing Na⁺ and water to **concentrate bile 5- to 20-fold**, and **CCK** both **contracts it and relaxes the sphincter of Oddi**, emptying it over some **30 minutes** after a fatty meal.',
    '**The pool is far too small for the job, so it is recycled — and that recycling is what keeps cholesterol dissolved.** The liver makes only about **0.2–0.6 g of new bile acid a day**, replacing faecal loss, yet a single meal needs several grams; the **2.5–3.5 g pool** solves this by cycling **6–10 times a day**, with an individual molecule surviving perhaps **17 circuits** before it is lost. The **terminal ileum** reclaims roughly **95%** through the active **ASBT** transporter and portal blood returns it to the hepatocyte. Now the solubility argument: **cholesterol is essentially insoluble in water** and stays in solution only inside **bile salt and lecithin micelles**. Tip that ratio — too much cholesterol (obesity, oestrogen, rapid weight loss), too little bile salt (**ileal resection or Crohn disease**), or **stasis** giving time for nucleation (pregnancy, prolonged fasting, parenteral nutrition) — and it crystallises. A **gallstone is a solubility failure, not an infection**.',
  ],

  mechanism: {
    title: 'Acid and nutrients in the duodenum → secretin and CCK → bicarbonate, enzymes, bile',
    steps: [
      { id: 's1', label: 'Chyme enters the duodenum carrying H⁺ plus fatty acids and peptides' },
      { id: 's2', label: 'S cells release secretin to acid; I cells release CCK to fat and protein', emphasis: 'key' },
      { id: 's3', label: 'Secretin → duct cells: CFTR-driven HCO₃⁻ lifts luminal pH to 7–8', emphasis: 'key' },
      { id: 's4', label: 'CCK → acinar zymogen granules exocytosed, gallbladder contracts, sphincter of Oddi relaxes', emphasis: 'key' },
      { id: 's5', label: 'Brush-border enterokinase converts trypsinogen to trypsin — the master switch', emphasis: 'key' },
      { id: 's6', label: 'Trypsin activates all remaining zymogens; if this fires inside the gland, autodigestion', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Steatorrhoea with deficiency of vitamins A, D, E and K but normal gastric acid', mechanism: 'Fat needs both lipase and bile salt micelles; losing either arm leaves fat and the vitamins it carries unabsorbed', significance: 'key' },
    { sign: 'Duodenal pH stays acidic and supplemental pancreatic enzymes work poorly', mechanism: 'Failed secretin-driven bicarbonate — the enzymes are denatured below their pH 7 to 8 optimum and bile acids precipitate', significance: 'key' },
    { sign: 'Severe epigastric pain boring to the back with raised serum lipase and a falling calcium', mechanism: 'Intraglandular trypsin cascade; released lipase saponifies fat and sequesters calcium as soap', significance: 'key' },
    { sign: 'Watery diarrhoea after a short terminal ileal resection, but steatorrhoea after a long one', mechanism: 'Small losses let bile salts reach the colon and drive secretion; large losses outstrip hepatic synthesis and deplete the pool', significance: 'key' },
    { sign: 'Cholesterol gallstones after rapid weight loss or prolonged parenteral nutrition', mechanism: 'Supersaturated bile plus gallbladder stasis — nucleation needs both an unfavourable ratio and time for crystals to grow', significance: 'supportive' },
    { sign: 'Thick, low-volume pancreatic secretions with ductal plugging from infancy', mechanism: 'CFTR failure removes the chloride recycling that drives bicarbonate and therefore water secretion', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Hormone released by duodenal S cells when luminal pH falls below about 4.5', meaning: 'Secretin — it speaks to duct cells, and the answer is bicarbonate and water' },
    { clue: 'Hormone released by I cells in response to fatty acids and peptides', meaning: 'CCK — acinar enzymes, gallbladder contraction, sphincter of Oddi relaxation, slower gastric emptying' },
    { clue: 'Brush-border enzyme that starts the entire pancreatic protease cascade', meaning: 'Enterokinase (enteropeptidase), sited in the duodenum and not in the gland' },
    { clue: 'Protein co-packaged with the zymogens to quench trypsin that activates too early', meaning: 'Pancreatic secretory trypsin inhibitor (SPINK1) — a last resort, easily overwhelmed' },
    { clue: 'Transporter that reclaims conjugated bile salts in the terminal ileum', meaning: 'ASBT, the apical sodium-dependent bile acid transporter of the enterohepatic circulation' },
    { clue: 'The two solubilisers that hold biliary cholesterol in solution', meaning: 'Bile salts and lecithin, as mixed micelles — their ratio to cholesterol decides stone formation' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'This chapter is really one idea applied twice: **the gut releases a hormone that names the problem, and the cell that answers is the cell that can solve it.** Acid is a pH problem, so **secretin** goes to the **duct** for bicarbonate; a meal is a digestion problem, so **CCK** goes to the **acinus** for enzymes and to the gallbladder for bile. Every therapeutic move follows the same logic — enzyme replacement plus a **PPI** so the replaced enzymes survive the duodenum, and bile acid **sequestrants** for short-segment ileal disease but never for long-segment, where the pool is already depleted. Failure mode in full: [[acute-chronic-pancreatitis]]. Recycling in detail: [[enterohepatic-bile-circulation]].' },
    { logic: 'The four-line summary', detail: '**Secretin — ducts — bicarbonate — neutralise.** **CCK — acini — zymogens — digest.** **Enterokinase — duodenum only — trypsin — then everything else.** **Bile salts — no enzymes — emulsify then micellise — and 95% come back.** The acid load that starts the whole sequence is set upstream ([[ghp-gastric-secretion]]), and what the micelles deliver at the brush border is taken up in [[lipid-digestion-chylomicrons]].' },
  ],

  mnemonics: [
    { hook: 'Secretin Soaks the acid; CCK Cooks the meal and Contracts the gallbladder', expansion: ['Secretin → duct cells → bicarbonate and water', 'CCK → acinar cells → enzymes, plus gallbladder squeeze and sphincter release', 'Both are duodenal alarms naming their own remedy'] },
    { hook: 'Trypsin is the trigger — Enterokinase Enables it, SPINK1 Sinks it, distance defends you', expansion: ['One trypsin molecule can activate every other zymogen, including more trypsinogen', 'The real safeguard is that the activator lives in the duodenum, not the pancreas'] },
  ],

  traps: [
    {
      questionCategory: 'Why pancreatic enzymes do not digest the pancreas',
      wrongInstinct: 'Because the trypsin inhibitor packaged with them neutralises any enzyme that activates',
      rightAnswer: 'Because the activating enzyme, enterokinase, sits on the duodenal brush border and is absent from the gland',
      why: 'SPINK1 can quench only a trace of trypsin; spatial separation of activator from zymogen is what actually keeps the cascade off.',
    },
    {
      questionCategory: 'Managing diarrhoea after terminal ileal disease',
      wrongInstinct: 'Bile acids are being lost, so a bile acid sequestrant will help in every case',
      rightAnswer: 'A sequestrant helps short-segment loss but worsens long-segment loss, where the pool is already too small',
      why: 'The discriminator is whether hepatic synthesis can still keep up with faecal loss — colonic irritation versus true pool depletion.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Intravenous infusion of secretin in a healthy volunteer produces a large volume of watery, strongly alkaline pancreatic juice containing very little enzyme protein. The cell responding is:',
      options: [
        { id: 'a', text: 'The acinar cell, discharging its zymogen granules' },
        { id: 'b', text: 'The duct cell, exchanging bicarbonate for chloride with CFTR recycling the chloride' },
        { id: 'c', text: 'The islet beta cell, releasing insulin into the pancreatic parenchyma' },
        { id: 'd', text: 'The centroacinar cell, secreting amylase independently of CCK' },
      ],
      answerId: 'b',
      explanation: 'Secretin is the acid alarm and its target is the duct epithelium: an apical Cl⁻/HCO₃⁻ exchanger drives bicarbonate into the lumen while CFTR returns chloride so the exchanger can keep turning, with sodium and water following. Enzyme output is an acinar response to CCK and vagal acetylcholine, which is why secretin gives volume and alkalinity without protein.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'An infant has failure to thrive, hypoproteinaemia and oedema. Duodenal aspirate contains normal amounts of pancreatic enzyme protein, but no proteolytic activity that can be restored by adding a small amount of trypsin to the sample. The defect is:',
      options: [
        { id: 'a', text: 'Absent brush-border enterokinase, so trypsinogen is never converted and the whole cascade stays inactive' },
        { id: 'b', text: 'Failure of acinar exocytosis, so no zymogens reach the lumen' },
        { id: 'c', text: 'Excess pancreatic secretory trypsin inhibitor neutralising all secreted enzyme' },
        { id: 'd', text: 'Absent CFTR, leaving the juice too acidic for the proteases to work' },
      ],
      answerId: 'a',
      explanation: 'Enzyme protein is present but inert, and a trace of added trypsin restores full activity — the classic demonstration that trypsin is the master switch and that the only thing missing is its activator. Enterokinase on the duodenal brush border normally makes that first trypsin, after which trypsin activates chymotrypsinogen, procarboxypeptidase, proelastase and more trypsinogen. Zymogens clearly reached the lumen, so exocytosis is intact, and a pH problem would not be corrected by adding trypsin.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A woman who had 80 cm of terminal ileum resected for Crohn disease now has steatorrhoea and is found to have cholesterol gallstones. The link between the two findings is:',
      options: [
        { id: 'a', text: 'Loss of ileal reabsorption depletes the bile salt pool, so bile is both poor at solubilising fat and supersaturated with cholesterol' },
        { id: 'b', text: 'Chronic inflammation causes secondary pancreatic enzyme deficiency and gallbladder infection' },
        { id: 'c', text: 'Unabsorbed fatty acids are converted to cholesterol in the colon and returned to the liver' },
        { id: 'd', text: 'Loss of ileal CCK release prevents the gallbladder from ever emptying' },
      ],
      answerId: 'a',
      explanation: 'The terminal ileum reclaims about 95% of bile salts through ASBT, and hepatic synthesis of 0.2 to 0.6 g a day cannot replace a large faecal loss. The shrunken pool means too few micelles for fat absorption in the gut and too few bile salts to keep cholesterol dissolved in bile, so the same single lesion produces steatorrhoea and stones. CCK comes from duodenal and jejunal I cells rather than the ileum, and cholesterol is not manufactured from colonic fatty acids.',
      tests: 'exam',
    },
  ],
};

export default ghpPancreaticBiliarySecretion;
