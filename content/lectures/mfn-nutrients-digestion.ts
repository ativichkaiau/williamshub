import { mfnLecture } from './mfn-shared';

const source = 'L1 — Nutrients, Digestion & Absorption';

export const fuelNutrientsEnergyBalance = mfnLecture({
  id: 'fuel-nutrients-energy-balance',
  title: 'Fuel Nutrients & Energy Balance',
  source,
  system: 'gi',
  tags: [
    { kind: 'mechanism', label: 'Macronutrient energy yield' },
    { kind: 'exam', label: '4-4-9 rule' },
  ],
  highYield: [
    '**Carbohydrate and protein yield 4 kcal/g; triacylglycerol yields 9 kcal/g.** Fat is therefore the most energy-dense macronutrient and the major long-term energy store.',
    'Dietary carbohydrate is the rapid glucose source; protein supplies amino acids for synthesis and repair; fat supplies energy, essential fatty acids, and carriers for vitamins A, D, E, and K.',
    '**Essential amino acids and essential fatty acids cannot be synthesized in adequate amounts** and must be supplied by diet.',
    'Body weight is stable when energy intake equals expenditure; persistent positive balance stores fuel, chiefly as adipose triacylglycerol.',
  ],
  chainTitle: 'Dietary fuel → usable energy or storage',
  steps: [
    { label: 'Ingest carbohydrate, protein, and fat' },
    { label: 'Digest to monosaccharides, amino acids, fatty acids/monoacylglycerol' },
    { label: 'Absorb and distribute to tissues', emphasis: 'key' },
    { label: 'Oxidize for ATP or store as glycogen/TAG' },
  ],
  examFindings: [
    { sign: 'Fat provides 9 kcal/g', mechanism: 'Highly reduced carbon and anhydrous storage', significance: 'key' },
    { sign: 'Negative nitrogen balance', mechanism: 'Protein breakdown exceeds protein synthesis', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Change in body mass over time', meaning: 'Direction of chronic energy balance' },
    { clue: 'Nitrogen intake versus urinary nitrogen', meaning: 'Net protein gain or loss' },
  ],
  treatment: [
    { logic: 'Match total energy intake to expenditure', detail: 'Macronutrient quality matters, but sustained weight change reflects net energy balance.' },
  ],
  mnemonic: { hook: 'Carbs 4, Protein 4, Fat 9', expansion: ['Fat is the densest fuel store'] },
  trap: {
    questionCategory: 'Energy density',
    wrongInstinct: 'Protein gives more energy per gram because it is structurally complex',
    rightAnswer: 'Protein and carbohydrate each yield about 4 kcal/g; fat yields about 9 kcal/g',
    why: 'Energy yield depends on chemical reduction and storage hydration, not structural complexity.',
  },
  quiz: {
    stem: 'Which macronutrient provides the greatest energy per gram?',
    options: ['Carbohydrate', 'Protein', 'Triacylglycerol', 'Dietary fiber'],
    answer: 2,
    explanation: 'Triacylglycerol yields about 9 kcal/g, compared with about 4 kcal/g from carbohydrate or protein.',
  },
});

export const carbohydrateDigestionAbsorption = mfnLecture({
  id: 'carbohydrate-digestion-absorption',
  title: 'Carbohydrate Digestion & Monosaccharide Absorption',
  source,
  system: 'gi',
  tags: [
    { kind: 'mechanism', label: 'SGLT1, GLUT5 & GLUT2' },
    { kind: 'disease', label: 'Lactase deficiency' },
  ],
  highYield: [
    'Salivary and pancreatic **α-amylase cleave internal α-1,4 bonds** in starch; brush-border enzymes finish digestion to monosaccharides.',
    '**SGLT1 cotransports glucose and galactose with Na⁺** across the apical membrane; **GLUT5** carries fructose; all three leave through basolateral **GLUT2**.',
    'The Na⁺ gradient that powers SGLT1 is maintained by basolateral **Na⁺/K⁺-ATPase**.',
    '**Lactase deficiency** leaves lactose in the lumen → osmotic diarrhea, bloating, and bacterial gas after dairy intake.',
  ],
  chainTitle: 'Starch/disaccharide → portal monosaccharide',
  steps: [
    { label: 'Amylases produce oligosaccharides and disaccharides' },
    { label: 'Brush-border hydrolases produce monosaccharides' },
    { label: 'SGLT1: glucose/galactose; GLUT5: fructose', emphasis: 'key' },
    { label: 'GLUT2 exports to portal blood' },
  ],
  examFindings: [
    { sign: 'Watery diarrhea and gas after milk', mechanism: 'Unabsorbed lactose retains water and is fermented', significance: 'key' },
    { sign: 'Oral glucose-galactose solution improves dehydration', mechanism: 'Intact Na⁺-glucose cotransport drives water absorption', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Positive hydrogen breath test after lactose', meaning: 'Colonic fermentation of malabsorbed lactose' },
    { clue: 'Acidic stool with reducing substances', meaning: 'Carbohydrate malabsorption' },
  ],
  treatment: [
    { logic: 'Use lactose restriction or oral lactase for lactase deficiency' },
    { logic: 'Use glucose-containing oral rehydration solution', detail: 'SGLT1 remains functional in most secretory diarrheas.' },
  ],
  mnemonic: { hook: 'SGLT1 takes Sweet twins: glucose + galactose; GLUT5 takes fructose', expansion: ['GLUT2 is the basolateral exit'] },
  trap: {
    questionCategory: 'Apical intestinal transport',
    wrongInstinct: 'All monosaccharides enter by GLUT2',
    rightAnswer: 'Glucose/galactose use apical SGLT1, fructose uses apical GLUT5, and basolateral GLUT2 exports all three',
    why: 'The apical transporter depends on the identity of the monosaccharide.',
  },
  quiz: {
    stem: 'Which transporter mediates apical fructose uptake into an enterocyte?',
    options: ['SGLT1', 'GLUT2', 'GLUT4', 'GLUT5'],
    answer: 3,
    explanation: 'Fructose enters through apical GLUT5; glucose and galactose use SGLT1, then all exit through GLUT2.',
  },
});

export const proteinDigestionAminoAcidAbsorption = mfnLecture({
  id: 'protein-digestion-amino-acid-absorption',
  title: 'Protein Digestion & Amino Acid Absorption',
  source,
  system: 'gi',
  tags: [
    { kind: 'mechanism', label: 'Pancreatic zymogen activation' },
    { kind: 'disease', label: 'Protein malabsorption' },
  ],
  highYield: [
    'Gastric acid denatures protein and activates **pepsin**; pancreatic proteases perform most luminal digestion in the small intestine.',
    'Brush-border **enteropeptidase activates trypsinogen to trypsin**, and trypsin activates the other pancreatic zymogens—an activation cascade that protects the pancreas.',
    'Free amino acids use several Na⁺-dependent carriers; di- and tripeptides enter through **H⁺-dependent PepT1** and are hydrolyzed inside the enterocyte.',
    'Pancreatic insufficiency or impaired enzyme delivery causes protein maldigestion; transporter defects selectively impair groups of amino acids.',
  ],
  chainTitle: 'Dietary protein → portal amino acids',
  steps: [
    { label: 'HCl denatures protein; pepsin starts proteolysis' },
    { label: 'Enteropeptidase activates trypsin', emphasis: 'key' },
    { label: 'Trypsin activates pancreatic protease zymogens' },
    { label: 'Amino acids/peptides enter enterocytes → portal blood' },
  ],
  examFindings: [
    { sign: 'Pancreatic insufficiency with malnutrition', mechanism: 'Reduced delivery of proteases and other digestive enzymes', significance: 'key' },
    { sign: 'Neutral aminoaciduria with pellagra-like findings', mechanism: 'Hartnup neutral amino-acid transporter defect', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Low fecal elastase', meaning: 'Exocrine pancreatic insufficiency' },
    { clue: 'Selective urinary amino-acid pattern', meaning: 'Specific epithelial transporter defect' },
  ],
  treatment: [
    { logic: 'Replace pancreatic enzymes when exocrine secretion is inadequate', detail: 'Give with meals to improve nutrient digestion.' },
  ],
  mnemonic: { hook: 'Enteropeptidase tips the first domino: trypsin', expansion: ['Trypsin activates the remaining zymogens'] },
  trap: {
    questionCategory: 'Protease activation',
    wrongInstinct: 'Pepsin activates all pancreatic proteases',
    rightAnswer: 'Enteropeptidase activates trypsinogen; trypsin then activates the other pancreatic zymogens',
    why: 'The key small-intestinal activation cascade begins at the brush border.',
  },
  quiz: {
    stem: 'Loss of brush-border enteropeptidase most directly prevents activation of which enzyme?',
    options: ['Pepsin', 'Trypsin', 'Salivary amylase', 'Pancreatic lipase'],
    answer: 1,
    explanation: 'Enteropeptidase converts trypsinogen to trypsin, which then activates the other pancreatic protease zymogens.',
  },
});

export const lipidDigestionChylomicrons = mfnLecture({
  id: 'lipid-digestion-chylomicrons',
  title: 'Lipid Digestion, Micelles & Chylomicrons',
  source,
  system: 'gi',
  tags: [
    { kind: 'mechanism', label: 'Bile salt micelles' },
    { kind: 'disease', label: 'Steatorrhea' },
  ],
  highYield: [
    'Bile salts **emulsify dietary fat**; pancreatic lipase plus colipase hydrolyzes TAG mainly to 2-monoacylglycerol and free fatty acids.',
    'Mixed micelles deliver lipid products and fat-soluble vitamins to the brush border; **bile salts remain in the lumen** for ileal recycling.',
    'Enterocytes re-esterify long-chain fatty acids and package TAG with **apoB-48** into chylomicrons, which enter lymph before blood.',
    'Deficient bile salts, pancreatic lipase, or intestinal absorption causes **steatorrhea** and can lead to vitamins A, D, E, and K deficiency.',
  ],
  chainTitle: 'Dietary TAG → circulating chylomicron',
  steps: [
    { label: 'Bile salts emulsify lipid droplets' },
    { label: 'Pancreatic lipase + colipase hydrolyze TAG' },
    { label: 'Mixed micelles deliver lipid to enterocytes', emphasis: 'key' },
    { label: 'Re-esterification + apoB-48 → chylomicron → lymph' },
  ],
  examFindings: [
    { sign: 'Bulky, greasy, difficult-to-flush stool', mechanism: 'Excess fecal fat (steatorrhea)', significance: 'key' },
    { sign: 'Prolonged PT in severe fat malabsorption', mechanism: 'Vitamin K deficiency reduces γ-carboxylation', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Increased quantitative fecal fat', meaning: 'Fat malabsorption' },
    { clue: 'Low vitamins A, D, E, or K', meaning: 'Chronic micelle-dependent nutrient malabsorption' },
  ],
  treatment: [
    { logic: 'Treat the site of failure', detail: 'Pancreatic enzymes for pancreatic insufficiency; correct bile-acid or mucosal disease when present.' },
    { logic: 'Replace deficient fat-soluble vitamins' },
  ],
  mnemonic: { hook: 'Bile emulsifies, lipase cuts, micelles deliver, B-48 ships', expansion: ['Chylomicrons leave through lymph'] },
  trap: {
    questionCategory: 'What enters the enterocyte',
    wrongInstinct: 'The whole mixed micelle is endocytosed',
    rightAnswer: 'Lipid products leave the micelle and enter; bile salts remain luminal and are reclaimed in terminal ileum',
    why: 'Micelles are delivery vehicles, not absorbed particles.',
  },
  quiz: {
    stem: 'Which apolipoprotein is required for intestinal chylomicron assembly?',
    options: ['ApoA-I', 'ApoB-48', 'ApoB-100', 'ApoC-II'],
    answer: 1,
    explanation: 'ApoB-48 is the structural apolipoprotein assembled with dietary lipid in enterocytes.',
  },
});

export const malabsorptionPatterns = mfnLecture({
  id: 'malabsorption-patterns',
  title: 'Clinical Patterns of Maldigestion & Malabsorption',
  source,
  system: 'gi',
  tags: [
    { kind: 'mechanism', label: 'Luminal versus mucosal failure' },
    { kind: 'disease', label: 'Steatorrhea and nutrient deficiency' },
  ],
  highYield: [
    '**Maldigestion** is failure to break nutrients down in the lumen (for example pancreatic insufficiency or inadequate bile salts); **malabsorption** is failure of the intestinal mucosa or transport system to take products up.',
    'Fat absorption is the most vulnerable because it requires pancreatic enzymes, bile-salt micelles, intact enterocytes, chylomicron assembly, and lymphatic transport.',
    '**Steatorrhea** produces bulky, greasy stool and chronic loss of vitamins A, D, E, and K; carbohydrate malabsorption more often produces osmotic diarrhea, bloating, and gas.',
    'A focal transporter or disaccharidase defect causes selective loss, whereas diffuse enteritis or villous injury causes multiple nutrient deficiencies and weight loss.',
  ],
  chainTitle: 'Localize nutrient failure along the absorption pathway',
  steps: [
    { label: 'Luminal digestion: pancreatic enzymes + bile' },
    { label: 'Brush border and enterocyte uptake' },
    { label: 'Intracellular processing and packaging', emphasis: 'key' },
    { label: 'Portal or lymphatic transport to blood' },
  ],
  examFindings: [
    { sign: 'Bulky greasy stool with easy bruising', mechanism: 'Fat and vitamin K malabsorption', significance: 'key' },
    { sign: 'Watery acidic stool with gas after one sugar', mechanism: 'Selective carbohydrate malabsorption and bacterial fermentation', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Fecal elastase plus quantitative fecal fat', meaning: 'Separates pancreatic enzyme failure from confirmed fat malabsorption' },
    { clue: 'Iron, B12, folate, albumin, and fat-soluble vitamins', meaning: 'Maps the breadth and likely location of chronic malabsorption' },
  ],
  treatment: [
    { logic: 'Treat the failed step rather than only restricting food', detail: 'Examples include pancreatic enzymes, treatment of mucosal disease, or replacement of deficient vitamins.' },
    { logic: 'Correct dehydration and nutritional deficits while the cause is evaluated' },
  ],
  mnemonic: { hook: 'Digest in the lumen, absorb through the wall, ship by portal blood or lymph', expansion: ['Fat needs every step'] },
  trap: {
    questionCategory: 'Maldigestion versus malabsorption',
    wrongInstinct: 'All nutrient loss means an enterocyte transporter is defective',
    rightAnswer: 'Pancreatic or bile failure can prevent luminal digestion before nutrients ever reach the transporter',
    why: 'Localizing the failed step narrows both testing and treatment.',
  },
  quiz: {
    stem: 'Which deficiency pattern is most characteristic of chronic severe fat malabsorption?',
    options: ['Vitamins B1, B2, B3, and B6', 'Vitamins A, D, E, and K', 'Vitamin C and folate only', 'Iron and copper only'],
    answer: 1,
    explanation: 'Micelle-dependent absorption is required for the fat-soluble vitamins A, D, E, and K.',
  },
});
