import { hgb1Lecture } from './hgb1-shared';

const l7 = 'L7 — GI Secretion';
const l8 = 'L8 — Digestion & Absorption';

export const salivaryEsophagealMucusSecretion = hgb1Lecture({
  id: 'salivary-esophageal-mucus-secretion',
  title: 'Salivary, Esophageal & Mucus Secretion',
  source: l7,
  tags: [
    { kind: 'mechanism', label: 'Two-stage salivary secretion' },
    { kind: 'exam', label: 'Flow-dependent saliva composition' },
  ],
  highYield: [
    'Acini produce an isotonic primary saliva containing amylase, lingual lipase, mucins, antimicrobial products, and ions; ducts reabsorb Na⁺/Cl⁻ and secrete K⁺/HCO₃⁻.',
    'Because salivary ducts are relatively water-impermeable, final saliva is usually **hypotonic**. At high flow, less time for modification makes it more NaCl-rich and HCO₃⁻ rises.',
    'Parasympathetic stimulation produces copious watery secretion; sympathetic stimulation promotes a smaller, protein-rich secretion. Both act through autonomic reflexes.',
    'Mucins lubricate and protect mucosa; esophageal submucosal glands and surface mucus reduce friction and help clear refluxed acid.',
  ],
  chainTitle: 'Acinar primary fluid is modified while crossing salivary ducts',
  steps: [
    { label: 'Acini secrete isotonic fluid plus proteins' },
    { label: 'Ducts reabsorb NaCl and add K⁺/HCO₃⁻', emphasis: 'key' },
    { label: 'Low duct water permeability retains solute gradient' },
    { label: 'Hypotonic saliva reaches the oral cavity' },
  ],
  examFindings: [
    { sign: 'Dry mouth with impaired swallowing and dental caries', mechanism: 'Loss of salivary lubrication, buffering, and antimicrobial protection', significance: 'key' },
    { sign: 'Higher salivary Na⁺ at high flow', mechanism: 'Rapid transit permits less ductal NaCl reabsorption', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Stimulated and unstimulated salivary flow', meaning: 'Quantifies gland output and autonomic reserve' },
    { clue: 'Medication and autonomic history', meaning: 'Identifies common causes of reduced salivation' },
  ],
  treatment: [
    { logic: 'Restore moisture and protect teeth', detail: 'Hydration, saliva substitutes or stimulants when appropriate, fluoride, and removal of anticholinergic contributors reduce complications.' },
  ],
  mnemonic: { hook: 'Acini add; ducts adjust', expansion: ['NaCl out', 'K⁺ and bicarbonate in', 'Water stays'] },
  trap: {
    questionCategory: 'Salivary physiology',
    wrongInstinct: 'Final saliva is hypertonic because ducts secrete electrolytes',
    rightAnswer: 'Final saliva is hypotonic because ducts absorb net salt but are poorly permeable to water',
    why: 'Solute leaves the duct lumen without equivalent water movement.',
  },
  quiz: {
    stem: 'Why is final saliva normally hypotonic to plasma?',
    options: ['Acini secrete pure water', 'Ducts absorb net NaCl but little water', 'Ducts secrete only chloride', 'Oral mucosa removes water'],
    answer: 1,
    explanation: 'Salivary ducts modify isotonic acinar fluid by net salt absorption while remaining relatively water-impermeable.',
  },
});

export const gastricAcidMechanismControl = hgb1Lecture({
  id: 'gastric-acid-mechanism-control',
  title: 'Gastric Acid Secretion & Regulation',
  source: l7,
  tags: [
    { kind: 'mechanism', label: 'Parietal-cell proton secretion' },
    { kind: 'exam', label: 'ACh, gastrin and histamine synergy' },
  ],
  highYield: [
    'Parietal-cell carbonic anhydrase generates H⁺ and HCO₃⁻; apical **H⁺/K⁺-ATPase** secretes H⁺ while Cl⁻ follows into the canaliculus to form HCl.',
    'Basolateral Cl⁻/HCO₃⁻ exchange creates the postprandial alkaline tide. K⁺ recycles apically to sustain proton-pump function.',
    'ACh (M3), gastrin (CCK-B), and histamine (H2) act synergistically; histamine raises cAMP while ACh/gastrin increase intracellular Ca²⁺.',
    'Somatostatin, prostaglandins, low antral pH, and duodenal signals inhibit acid output. Prostaglandins also support mucus, bicarbonate, and mucosal blood flow.',
  ],
  chainTitle: 'Three stimulatory pathways converge on the parietal proton pump',
  steps: [
    { label: 'ACh and gastrin raise Ca²⁺; histamine raises cAMP' },
    { label: 'Tubulovesicles insert H⁺/K⁺-ATPase apically', emphasis: 'key' },
    { label: 'H⁺ and Cl⁻ enter canaliculus as HCl' },
    { label: 'HCO₃⁻ exits basolaterally as alkaline tide' },
  ],
  examFindings: [
    { sign: 'Postprandial rise in gastric venous bicarbonate', mechanism: 'Parietal basolateral Cl⁻/HCO₃⁻ exchange creates an alkaline tide', significance: 'supportive' },
    { sign: 'Marked acid suppression after proton-pump inhibition', mechanism: 'H⁺/K⁺-ATPase is the final common pathway for acid secretion', significance: 'key' },
  ],
  investigations: [
    { clue: 'Intragastric pH and acid output', meaning: 'Measures the final parietal-cell secretory response' },
    { clue: 'Gastrin level interpreted with gastric pH', meaning: 'Distinguishes appropriate feedback elevation from acid hypersecretion' },
  ],
  treatment: [
    { logic: 'Block the final pump for the strongest acid suppression', detail: 'PPIs inhibit active H⁺/K⁺-ATPase; H2 antagonists remove histamine amplification.' },
  ],
  mnemonic: { hook: 'ACh, Gastrin, Histamine turn Acid on', expansion: ['M3 and CCK-B use calcium', 'H2 uses cAMP', 'All reach the proton pump'] },
  trap: {
    questionCategory: 'Acid secretion',
    wrongInstinct: 'Histamine directly opens an apical proton channel',
    rightAnswer: 'Histamine activates H2–Gs–cAMP signaling that promotes H⁺/K⁺-ATPase activity',
    why: 'The ATPase, not a passive proton channel, is the final secretory transporter.',
  },
  quiz: {
    stem: 'Which transporter is the final common effector of gastric acid secretion?',
    options: ['Na⁺/K⁺-ATPase', 'H⁺/K⁺-ATPase', 'SGLT1', 'CFTR'],
    answer: 1,
    explanation: 'The apical parietal-cell H⁺/K⁺-ATPase pumps protons into the gastric canaliculus.',
  },
});

export const gastricEnzymesIntrinsicBarrier = hgb1Lecture({
  id: 'gastric-enzymes-intrinsic-barrier',
  title: 'Pepsin, Intrinsic Factor & Gastric Mucosal Defense',
  source: l7,
  tags: [
    { kind: 'mechanism', label: 'Gastric non-acid secretion' },
    { kind: 'exam', label: 'Mucus-bicarbonate barrier' },
  ],
  highYield: [
    'Chief cells release pepsinogen; luminal acid converts it to pepsin, which autocatalytically activates more pepsinogen and begins protein digestion.',
    'Parietal cells secrete intrinsic factor. Vitamin B12 binds intrinsic factor after pancreatic enzymes free it from R protein, enabling terminal-ileal uptake.',
    'Surface cells maintain a mucus–bicarbonate gel, tight epithelial junctions, rapid restitution, and robust blood flow; prostaglandins reinforce these defenses.',
    'Acid-pepsin injury occurs when aggressive factors exceed defense, as with NSAID-related prostaglandin loss or Helicobacter-associated inflammation.',
  ],
  chainTitle: 'Gastric secretion pairs digestive aggression with epithelial protection',
  steps: [
    { label: 'Acid activates pepsinogen to pepsin' },
    { label: 'Pepsin initiates protein hydrolysis' },
    { label: 'Mucus traps bicarbonate at epithelial surface', emphasis: 'key' },
    { label: 'Intrinsic factor escorts B12 to terminal ileum' },
  ],
  examFindings: [
    { sign: 'Macrocytic anemia after autoimmune parietal-cell loss', mechanism: 'Intrinsic-factor deficiency causes vitamin B12 malabsorption', significance: 'key' },
    { sign: 'Ulcer risk after chronic NSAID use', mechanism: 'COX inhibition reduces protective prostaglandins, mucus, bicarbonate, and blood flow', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Vitamin B12, methylmalonic acid, and intrinsic-factor antibodies', meaning: 'Evaluates pernicious anemia from intrinsic-factor loss' },
    { clue: 'H. pylori testing or endoscopy when indicated', meaning: 'Assesses common causes of impaired mucosal defense' },
  ],
  treatment: [
    { logic: 'Remove aggression and restore protection', detail: 'Treat H. pylori, limit harmful NSAID exposure, suppress acid when indicated, and replace vitamin B12 when malabsorbed.' },
  ],
  mnemonic: { hook: 'Chief cuts protein; parietal pairs B12', expansion: ['Pepsinogen → pepsin', 'Intrinsic factor → ileal B12 uptake'] },
  trap: {
    questionCategory: 'Vitamin B12 absorption',
    wrongInstinct: 'Intrinsic factor binds dietary B12 immediately in the stomach',
    rightAnswer: 'B12 first binds R protein; pancreatic proteases later permit intrinsic-factor binding in the duodenum',
    why: 'The binding partners change as luminal pH and proteolysis change.',
  },
  quiz: {
    stem: 'Loss of which gastric secretion directly impairs terminal-ileal vitamin B12 uptake?',
    options: ['Pepsinogen', 'Intrinsic factor', 'Gastrin', 'Mucin'],
    answer: 1,
    explanation: 'The terminal ileum recognizes and absorbs the vitamin B12–intrinsic factor complex.',
  },
});

export const intestinalFluidSecretion = hgb1Lecture({
  id: 'intestinal-fluid-secretion',
  title: 'Small- & Large-Intestinal Fluid Secretion',
  source: l7,
  tags: [
    { kind: 'mechanism', label: 'Crypt chloride secretion' },
    { kind: 'exam', label: 'Secretory diarrhea' },
  ],
  highYield: [
    'Crypt cells secrete Cl⁻ through apical **CFTR** after basolateral NKCC1 loading; Na⁺ and water follow paracellularly to produce an isotonic fluid.',
    'cAMP, cGMP, Ca²⁺, enteric transmitters, and inflammatory mediators can enhance secretion; villus/surface cells simultaneously absorb nutrients and electrolytes.',
    'Colonic mucus lubricates and protects; bicarbonate helps neutralize bacterial acids, while net NaCl and water absorption normally solidifies stool.',
    'Enterotoxins can lock second-messenger pathways on, causing high-volume secretory diarrhea that persists during fasting.',
  ],
  chainTitle: 'Crypt chloride movement draws sodium and water into the lumen',
  steps: [
    { label: 'NKCC1 loads basolateral Cl⁻ into crypt cell' },
    { label: 'Second messenger opens apical CFTR', emphasis: 'key' },
    { label: 'Cl⁻ exits; Na⁺ follows paracellularly' },
    { label: 'Water follows osmotically into intestinal lumen' },
  ],
  examFindings: [
    { sign: 'Large-volume watery diarrhea despite fasting', mechanism: 'Active electrolyte secretion indicates secretory diarrhea', significance: 'key' },
    { sign: 'Effective oral rehydration despite ongoing secretion', mechanism: 'Na⁺–glucose cotransport remains functional and drives water uptake', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Low stool osmotic gap', meaning: 'Supports secretory rather than unabsorbed-solute diarrhea' },
    { clue: 'Stool volume during fasting', meaning: 'Persistence supports active secretion' },
  ],
  treatment: [
    { logic: 'Replace sodium and water through intact cotransport', detail: 'Balanced oral rehydration solution uses glucose-coupled Na⁺ absorption even when CFTR-driven secretion continues.' },
  ],
  mnemonic: { hook: 'CFTR sends chloride; sodium and water follow', expansion: ['Crypts secrete', 'Villi absorb'] },
  trap: {
    questionCategory: 'Secretory diarrhea',
    wrongInstinct: 'Plain water alone best replaces diarrheal losses',
    rightAnswer: 'Glucose–electrolyte oral rehydration exploits intact SGLT1-mediated sodium uptake',
    why: 'Coupled Na⁺ and glucose absorption provides a strong osmotic route for water recovery.',
  },
  quiz: {
    stem: 'Activation of intestinal CFTR most directly causes luminal secretion of which ion?',
    options: ['Calcium', 'Chloride', 'Iron', 'Phosphate'],
    answer: 1,
    explanation: 'Apical CFTR conducts chloride into the lumen; sodium and water follow.',
  },
});

export const proteinNucleicAcidDigestion = hgb1Lecture({
  id: 'protein-nucleic-acid-digestion',
  title: 'Protein & Nucleic Acid Digestion and Absorption',
  source: l8,
  tags: [
    { kind: 'mechanism', label: 'Protease activation and peptide uptake' },
    { kind: 'exam', label: 'Enteropeptidase–trypsin cascade' },
  ],
  highYield: [
    'Pepsin begins gastric protein digestion, but pancreatic proteases perform most luminal hydrolysis in the small intestine.',
    'Enteropeptidase activates trypsinogen; trypsin activates additional trypsinogen plus chymotrypsinogen, proelastase, and procarboxypeptidases.',
    'Apical Na⁺-coupled carriers absorb amino acids, while H⁺-coupled **PepT1** absorbs di- and tripeptides that are hydrolyzed intracellularly.',
    'Pancreatic nucleases and brush-border enzymes reduce nucleic acids to bases, pentoses, and phosphate for absorption.',
  ],
  chainTitle: 'A protected pancreatic zymogen cascade yields absorbable amino products',
  steps: [
    { label: 'Stomach acid denatures protein and activates pepsin' },
    { label: 'Enteropeptidase activates trypsin in duodenum', emphasis: 'key' },
    { label: 'Trypsin activates the pancreatic protease cascade' },
    { label: 'Amino acids and small peptides enter enterocytes' },
  ],
  examFindings: [
    { sign: 'Protein maldigestion with pancreatic exocrine failure', mechanism: 'Reduced delivery of pancreatic proteases limits luminal hydrolysis', significance: 'key' },
    { sign: 'Pancreatitis after premature zymogen activation', mechanism: 'Proteases become active within pancreatic tissue rather than intestine', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Fecal elastase', meaning: 'Screens for pancreatic exocrine insufficiency' },
    { clue: 'Serum nutritional markers interpreted clinically', meaning: 'Assesses consequences rather than a single specific digestive step' },
  ],
  treatment: [
    { logic: 'Replace missing enzymes at mealtime', detail: 'Pancreatic enzyme replacement is taken with food so proteases mix with the substrate they must digest.' },
  ],
  mnemonic: { hook: 'Enteropeptidase starts trypsin; trypsin starts the team', expansion: ['Chymotrypsin', 'Elastase', 'Carboxypeptidases'] },
  trap: {
    questionCategory: 'Protein absorption',
    wrongInstinct: 'Only free amino acids cross the apical enterocyte membrane',
    rightAnswer: 'PepT1 efficiently absorbs di- and tripeptides as well as amino-acid transporters absorbing free amino acids',
    why: 'Most small peptides are hydrolyzed after entering the enterocyte.',
  },
  quiz: {
    stem: 'Which enzyme initiates the pancreatic protease activation cascade in the duodenum?',
    options: ['Pepsin', 'Enteropeptidase', 'Pancreatic amylase', 'Nucleotidase'],
    answer: 1,
    explanation: 'Enteropeptidase converts trypsinogen to trypsin, which activates the remaining zymogens.',
  },
});

export const carbohydrateDigestionAbsorptionHgb = hgb1Lecture({
  id: 'hgb-carbohydrate-digestion-absorption',
  title: 'Carbohydrate Digestion & Monosaccharide Absorption',
  source: l8,
  tags: [
    { kind: 'mechanism', label: 'Brush-border digestion and transport' },
    { kind: 'exam', label: 'SGLT1 versus GLUT5' },
  ],
  highYield: [
    'Salivary and pancreatic α-amylase hydrolyze internal α-1,4 bonds in starch, producing oligosaccharides and limit dextrins but not free glucose alone.',
    'Brush-border lactase, sucrase-isomaltase, and maltase-glucoamylase produce glucose, galactose, and fructose.',
    'Apical **SGLT1** cotransports glucose/galactose with Na⁺; GLUT5 carries fructose. Basolateral GLUT2 delivers monosaccharides to portal blood.',
    'Undigested carbohydrate retains water and undergoes colonic fermentation, causing acidic osmotic diarrhea, gas, and bloating.',
  ],
  chainTitle: 'Polysaccharides become monosaccharides before portal uptake',
  steps: [
    { label: 'Amylases produce oligosaccharides' },
    { label: 'Brush-border enzymes create monosaccharides' },
    { label: 'SGLT1 absorbs glucose/galactose; GLUT5 absorbs fructose', emphasis: 'key' },
    { label: 'GLUT2 exports to portal circulation' },
  ],
  examFindings: [
    { sign: 'Bloating and acidic diarrhea after dairy', mechanism: 'Lactase deficiency leaves lactose for osmotic retention and bacterial fermentation', significance: 'key' },
    { sign: 'Diarrhea improves with fasting', mechanism: 'Removal of the unabsorbed osmole reduces osmotic diarrhea', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Hydrogen breath test after lactose load', meaning: 'Detects bacterial fermentation of unabsorbed lactose' },
    { clue: 'High stool osmotic gap', meaning: 'Supports osmotic diarrhea from retained solute' },
  ],
  treatment: [
    { logic: 'Reduce or enzymatically digest the offending sugar', detail: 'Lactose restriction or lactase supplementation treats symptoms while preserving nutrition.' },
  ],
  mnemonic: { hook: 'SGLT1: sodium takes glucose and galactose; GLUT5 takes fructose', expansion: ['All three leave through GLUT2'] },
  trap: {
    questionCategory: 'Sugar transport',
    wrongInstinct: 'Fructose enters by Na⁺-coupled SGLT1',
    rightAnswer: 'Fructose enters through facilitative GLUT5',
    why: 'SGLT1 is specific for glucose and galactose cotransport with sodium.',
  },
  quiz: {
    stem: 'Which apical transporter absorbs fructose into enterocytes?',
    options: ['SGLT1', 'GLUT5', 'GLUT2', 'PepT1'],
    answer: 1,
    explanation: 'GLUT5 mediates facilitated fructose uptake at the apical membrane.',
  },
});

export const lipidDigestionAbsorptionHgb = hgb1Lecture({
  id: 'hgb-lipid-digestion-absorption',
  title: 'Lipid Digestion, Micelles & Chylomicrons',
  source: l8,
  tags: [
    { kind: 'mechanism', label: 'Micellar delivery and lymphatic export' },
    { kind: 'exam', label: 'Bile salts and pancreatic lipase' },
  ],
  highYield: [
    'Bile salts emulsify lipid and create surface area; pancreatic lipase with colipase hydrolyzes triacylglycerol mainly to 2-monoacylglycerol and free fatty acids.',
    'Mixed micelles carry lipolytic products and fat-soluble vitamins across the unstirred layer, but bile salts remain in the lumen for ileal recovery.',
    'Enterocytes re-esterify long-chain lipids and package them with apoB-48 into chylomicrons, which enter lacteals and reach blood through lymph.',
    'Short- and medium-chain fatty acids can pass directly into portal blood bound to albumin and do not require chylomicron assembly.',
  ],
  chainTitle: 'Luminal lipid becomes a lymph-borne lipoprotein particle',
  steps: [
    { label: 'Bile salts emulsify dietary lipid' },
    { label: 'Pancreatic lipase–colipase hydrolyzes triacylglycerol' },
    { label: 'Mixed micelles deliver products to enterocyte', emphasis: 'key' },
    { label: 'Re-esterification + apoB-48 → chylomicron → lacteal' },
  ],
  examFindings: [
    { sign: 'Bulky oily stool and fat-soluble vitamin deficiency', mechanism: 'Impaired lipolysis, bile delivery, or mucosal uptake causes fat malabsorption', significance: 'key' },
    { sign: 'Low apoB-containing chylomicrons after a fatty meal', mechanism: 'Defective intestinal lipoprotein assembly or export', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Quantitative or qualitative fecal fat', meaning: 'Confirms steatorrhea but not its exact cause' },
    { clue: 'Pancreatic, biliary, and small-bowel evaluation', meaning: 'Localizes the failed step in lipid handling' },
  ],
  treatment: [
    { logic: 'Bypass the failing step when possible', detail: 'Pancreatic enzymes restore lipolysis; medium-chain triglycerides can provide calories without micelles or chylomicrons.' },
  ],
  mnemonic: { hook: 'Emulsify, enzyme, micelle, enterocyte, chylomicron', expansion: ['Long chain rides lymph', 'Medium chain goes portal'] },
  trap: {
    questionCategory: 'Micelle fate',
    wrongInstinct: 'The intact mixed micelle is endocytosed into the enterocyte',
    rightAnswer: 'Lipid products leave the micelle at the brush border; bile salts stay luminal for ileal recycling',
    why: 'Micelles are delivery vehicles rather than absorbed particles.',
  },
  quiz: {
    stem: 'Where do newly formed intestinal chylomicrons enter first?',
    options: ['Portal venules', 'Lacteals', 'Hepatic sinusoids', 'Gastric capillaries'],
    answer: 1,
    explanation: 'Chylomicrons enter intestinal lymphatic lacteals before reaching systemic circulation.',
  },
});

export const vitaminAbsorption = hgb1Lecture({
  id: 'vitamin-absorption',
  title: 'Water- & Fat-Soluble Vitamin Absorption',
  source: l8,
  tags: [
    { kind: 'mechanism', label: 'Vitamin-specific absorption pathways' },
    { kind: 'exam', label: 'B12 and folate localization' },
  ],
  highYield: [
    'Fat-soluble vitamins A, D, E, and K depend on normal lipid digestion, mixed micelles, and chylomicron export.',
    'Most water-soluble vitamins use carrier-mediated small-intestinal uptake; **folate** is absorbed chiefly in proximal small intestine after deconjugation.',
    'Vitamin B12 requires gastric release, R-protein transfer, pancreatic proteolysis, intrinsic-factor binding, and receptor-mediated uptake in the **terminal ileum**.',
    'Ileal disease or resection can therefore impair both B12 and bile-salt absorption, whereas pancreatic failure can disrupt B12 transfer and fat-soluble vitamin uptake.',
  ],
  chainTitle: 'Vitamin chemistry determines its luminal carrier and absorption site',
  steps: [
    { label: 'Fat-soluble vitamins enter mixed micelles' },
    { label: 'Folate is processed and absorbed proximally' },
    { label: 'B12 transfers from R protein to intrinsic factor' },
    { label: 'Terminal ileum absorbs B12–intrinsic factor', emphasis: 'key' },
  ],
  examFindings: [
    { sign: 'Neuropathy plus macrocytic anemia', mechanism: 'Vitamin B12 deficiency disrupts myelin and DNA synthesis', significance: 'key' },
    { sign: 'Easy bruising with cholestasis', mechanism: 'Reduced micellar absorption can cause vitamin K deficiency', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Methylmalonic acid elevation', meaning: 'Supports cellular vitamin B12 deficiency rather than isolated folate deficiency' },
    { clue: 'PT/INR in suspected fat malabsorption', meaning: 'May reveal early vitamin K deficiency' },
  ],
  treatment: [
    { logic: 'Replace by a route that bypasses the defect', detail: 'Parenteral or high-dose oral B12 can overcome intrinsic-factor or ileal failure; fat-soluble deficiencies require correction of malabsorption plus replacement.' },
  ],
  mnemonic: { hook: 'B12 takes the long route to the last ileum', expansion: ['R protein', 'Intrinsic factor', 'Terminal ileum'] },
  trap: {
    questionCategory: 'Macrocytic vitamin deficiency',
    wrongInstinct: 'Folate deficiency causes the same neurologic deficits as B12 deficiency',
    rightAnswer: 'Neurologic dysfunction points toward vitamin B12 deficiency',
    why: 'Both impair DNA synthesis, but B12 deficiency additionally causes characteristic neurologic injury.',
  },
  quiz: {
    stem: 'Where is the vitamin B12–intrinsic factor complex absorbed?',
    options: ['Stomach', 'Duodenum', 'Terminal ileum', 'Colon'],
    answer: 2,
    explanation: 'Specific receptors in the terminal ileum mediate uptake of the B12–intrinsic factor complex.',
  },
});

export const mineralWaterAbsorption = hgb1Lecture({
  id: 'mineral-water-absorption',
  title: 'Mineral, Electrolyte & Water Absorption',
  source: l8,
  tags: [
    { kind: 'mechanism', label: 'Segment-specific absorption' },
    { kind: 'exam', label: 'Iron and calcium regulation' },
  ],
  highYield: [
    'Iron is absorbed mainly in duodenum: apical DMT1 imports Fe²⁺, ferroportin exports it, and hepatic **hepcidin** lowers absorption by degrading ferroportin.',
    'Calcium absorption is enhanced by calcitriol through transcellular transport, especially when intake is low; passive paracellular absorption rises with luminal load.',
    'Na⁺ absorption through nutrient cotransport, exchangers, and epithelial channels drives water absorption. The colon salvages remaining NaCl and water.',
    'Water moves osmotically through paracellular and transcellular routes; the GI tract handles a large daily load from intake plus endogenous secretions.',
  ],
  chainTitle: 'Solute absorption creates the osmotic gradient for water recovery',
  steps: [
    { label: 'Nutrients and Na⁺ enter through apical transporters' },
    { label: 'Basolateral Na⁺/K⁺-ATPase maintains the gradient', emphasis: 'key' },
    { label: 'Cl⁻ and other solutes follow by segment-specific routes' },
    { label: 'Water follows osmotically into blood' },
  ],
  examFindings: [
    { sign: 'Reduced iron absorption during inflammation', mechanism: 'Inflammatory hepcidin degrades enterocyte ferroportin and traps iron', significance: 'key' },
    { sign: 'Improved diarrheal hydration with glucose–salt solution', mechanism: 'SGLT1-coupled Na⁺ uptake drives water absorption', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Ferritin, transferrin saturation, and inflammatory context', meaning: 'Separates absolute iron deficiency from hepcidin-mediated restriction' },
    { clue: 'Serum electrolytes and hydration assessment', meaning: 'Measures consequences of net GI fluid loss' },
  ],
  treatment: [
    { logic: 'Replace both water and transportable solute', detail: 'Oral rehydration combines sodium and glucose to maximize coupled intestinal uptake.' },
  ],
  mnemonic: { hook: 'Salt is absorbed; water follows', expansion: ['Duodenum takes iron', 'Calcitriol helps calcium', 'Colon salvages fluid'] },
  trap: {
    questionCategory: 'Iron regulation',
    wrongInstinct: 'Hepcidin increases ferroportin to improve iron absorption',
    rightAnswer: 'Hepcidin binds ferroportin and promotes its internalization and degradation',
    why: 'This reduces iron export from enterocytes and macrophages into plasma.',
  },
  quiz: {
    stem: 'Which hormone decreases intestinal iron absorption by promoting ferroportin degradation?',
    options: ['Calcitriol', 'Hepcidin', 'Gastrin', 'Secretin'],
    answer: 1,
    explanation: 'Hepcidin reduces plasma iron entry by degrading the exporter ferroportin.',
  },
});
