import { hgb1Lecture } from './hgb1-shared';

const l9 = 'L9 — Bile Secretion';

export const bileCompositionAcidSynthesis = hgb1Lecture({
  id: 'bile-composition-acid-synthesis',
  title: 'Bile Composition & Bile Acid Synthesis',
  source: l9,
  tags: [
    { kind: 'mechanism', label: 'Cholesterol-derived bile acids' },
    { kind: 'exam', label: 'Amphipathic bile salts' },
  ],
  highYield: [
    'Bile contains bile salts, phospholipids, cholesterol, bilirubin, electrolytes, and water. Its amphipathic lipids keep cholesterol soluble and support fat digestion.',
    'Hepatic cholesterol 7α-hydroxylase (**CYP7A1**) is the rate-limiting enzyme for primary bile-acid synthesis; cholesterol becomes cholic and chenodeoxycholic acids.',
    'Conjugation with glycine or taurine lowers pKa, keeping bile acids ionized as bile salts in intestinal fluid.',
    'Gut bacteria convert primary to secondary bile acids. Bile salts emulsify lipid and form mixed micelles for lipid and fat-soluble vitamin absorption.',
  ],
  chainTitle: 'Cholesterol becomes an amphipathic digestive detergent',
  steps: [
    { label: 'Hepatic cholesterol enters CYP7A1 pathway', emphasis: 'key' },
    { label: 'Primary bile acids are synthesized' },
    { label: 'Glycine or taurine conjugation forms bile salts' },
    { label: 'Bile salts emulsify fat and build mixed micelles' },
  ],
  examFindings: [
    { sign: 'Steatorrhea with deficiency of vitamins A, D, E, and K', mechanism: 'Insufficient luminal bile salts impair mixed-micelle formation', significance: 'key' },
    { sign: 'Cholesterol precipitation in supersaturated bile', mechanism: 'Cholesterol exceeds the solubilizing capacity of bile salts and phospholipids', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Cholestatic liver profile and biliary imaging', meaning: 'Assesses reduced bile delivery to the intestine' },
    { clue: 'Fecal fat and fat-soluble vitamin status', meaning: 'Measures consequences of impaired micellar solubilization' },
  ],
  treatment: [
    { logic: 'Restore bile flow or bypass micellar dependence', detail: 'Relieve obstruction when present; medium-chain triglycerides can supply calories without bile-dependent micelles.' },
  ],
  mnemonic: { hook: 'Bile salts are cholesterol detergents', expansion: ['CYP7A1 starts synthesis', 'Glycine or taurine conjugates', 'Micelles move lipid'] },
  trap: {
    questionCategory: 'Bile function',
    wrongInstinct: 'Bile salts enzymatically hydrolyze triglycerides',
    rightAnswer: 'Bile salts emulsify lipid and form micelles; pancreatic lipase performs hydrolysis',
    why: 'Bile salts are physical detergents, not digestive enzymes.',
  },
  quiz: {
    stem: 'What is the rate-limiting enzyme in the classic hepatic bile-acid synthesis pathway?',
    options: ['HMG-CoA reductase', 'Cholesterol 7α-hydroxylase', 'Pancreatic lipase', 'Lecithin–cholesterol acyltransferase'],
    answer: 1,
    explanation: 'CYP7A1 catalyzes the rate-limiting hydroxylation in conversion of cholesterol to primary bile acids.',
  },
});

export const enterohepaticBileCirculation = hgb1Lecture({
  id: 'enterohepatic-bile-circulation',
  title: 'Enterohepatic Circulation of Bile Salts',
  source: l9,
  tags: [
    { kind: 'mechanism', label: 'Terminal-ileal bile-salt recovery' },
    { kind: 'exam', label: 'ASBT, FGF19 and bile-acid diarrhea' },
  ],
  highYield: [
    'Most secreted bile salts are reclaimed in the terminal ileum by the apical sodium-dependent bile acid transporter (**ASBT**) and return to liver in portal blood.',
    'Hepatocytes efficiently extract portal bile salts and resecrete them, so the bile-salt pool cycles several times during one meal.',
    'Ileal FXR activation releases FGF19, which signals the liver to suppress CYP7A1 and new bile-acid synthesis.',
    'Ileal disease or resection sends excess bile acids into colon, stimulating secretion and diarrhea; severe pool depletion also causes steatorrhea.',
  ],
  chainTitle: 'A conserved bile-salt pool cycles between liver and terminal ileum',
  steps: [
    { label: 'Liver secretes bile salts into bile' },
    { label: 'Bile salts support intestinal micelles' },
    { label: 'Terminal ileal ASBT reabsorbs bile salts', emphasis: 'key' },
    { label: 'Portal return enables hepatic uptake and resecretion' },
  ],
  examFindings: [
    { sign: 'Watery diarrhea after limited terminal-ileal disease', mechanism: 'Unabsorbed bile acids stimulate colonic electrolyte and water secretion', significance: 'key' },
    { sign: 'Steatorrhea after extensive ileal resection', mechanism: 'Bile-salt pool depletion prevents adequate micelle formation', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'History of terminal-ileal disease or resection', meaning: 'Strongly localizes disrupted enterohepatic recycling' },
    { clue: 'Response to a bile-acid sequestrant in appropriate cases', meaning: 'Supports bile-acid–mediated colonic secretion' },
  ],
  treatment: [
    { logic: 'Bind excess colonic bile acids when the pool is preserved', detail: 'Bile-acid sequestrants can improve mild bile-acid diarrhea but may worsen fat malabsorption when the pool is already severely depleted.' },
  ],
  mnemonic: { hook: 'Bile goes Liver → Lumen → Last ileum → Liver', expansion: ['ASBT retrieves', 'Portal blood returns', 'FGF19 applies feedback'] },
  trap: {
    questionCategory: 'Ileal bile-acid loss',
    wrongInstinct: 'A bile-acid sequestrant always improves symptoms after any ileal resection',
    rightAnswer: 'It may help excess colonic bile acids but worsen steatorrhea when the bile-salt pool is profoundly depleted',
    why: 'The effect depends on whether excess colonic bile acid or inadequate micellar bile acid dominates.',
  },
  quiz: {
    stem: 'Where does active reabsorption of most bile salts occur?',
    options: ['Stomach', 'Duodenum', 'Terminal ileum', 'Sigmoid colon'],
    answer: 2,
    explanation: 'Terminal-ileal ASBT actively reclaims most bile salts for portal return to the liver.',
  },
});

export const bileFormationGallbladderEmptying = hgb1Lecture({
  id: 'bile-formation-gallbladder-emptying',
  title: 'Bile Formation, Gallbladder Concentration & Emptying',
  source: l9,
  tags: [
    { kind: 'mechanism', label: 'Canalicular and ductal bile flow' },
    { kind: 'exam', label: 'Secretin and CCK control' },
  ],
  highYield: [
    'Hepatocytes create canalicular bile by actively exporting bile salts, phospholipids, cholesterol, and conjugated bilirubin; water and electrolytes follow osmotically.',
    'Cholangiocytes add bicarbonate-rich fluid, especially in response to **secretin**, increasing bile volume and alkalinity.',
    'Between meals, sphincter of Oddi resistance diverts bile into the gallbladder, whose epithelium absorbs NaCl and water to concentrate organic solutes.',
    'Duodenal fat and amino acids release **CCK**, which contracts the gallbladder and relaxes the sphincter of Oddi to deliver bile with a meal.',
  ],
  chainTitle: 'Hepatocyte bile is modified, stored, concentrated, and meal-delivered',
  steps: [
    { label: 'Hepatocytes export bile components into canaliculi' },
    { label: 'Secretin stimulates cholangiocyte bicarbonate fluid' },
    { label: 'Gallbladder stores and concentrates bile between meals' },
    { label: 'CCK contracts gallbladder and relaxes Oddi', emphasis: 'key' },
  ],
  examFindings: [
    { sign: 'Gallbladder contraction after a fatty meal', mechanism: 'Duodenal CCK coordinates gallbladder and sphincter of Oddi', significance: 'key' },
    { sign: 'Pale stool and dark urine with complete biliary obstruction', mechanism: 'Conjugated bilirubin reaches urine rather than intestine, reducing stercobilin formation', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Ultrasound for ductal dilation and gallstones', meaning: 'First-line structural assessment of suspected biliary obstruction' },
    { clue: 'HIDA-based tracer flow when indicated', meaning: 'Assesses bile passage and gallbladder filling or emptying' },
  ],
  treatment: [
    { logic: 'Relieve obstruction and restore coordinated flow', detail: 'Management depends on the level and cause; infected obstruction requires urgent drainage plus antimicrobial therapy.' },
  ],
  mnemonic: { hook: 'Secretin adds bicarbonate; CCK clears the gallbladder', expansion: ['Store between meals', 'Squeeze with fat'] },
  trap: {
    questionCategory: 'Biliary hormonal control',
    wrongInstinct: 'Secretin is the principal trigger for gallbladder contraction',
    rightAnswer: 'CCK contracts the gallbladder; secretin stimulates bicarbonate-rich ductal secretion',
    why: 'The two hormones coordinate distinct but complementary biliary responses.',
  },
  quiz: {
    stem: 'Which hormone most directly contracts the gallbladder after a fatty meal?',
    options: ['Secretin', 'Cholecystokinin', 'Gastrin', 'Motilin'],
    answer: 1,
    explanation: 'CCK released from duodenal I cells contracts the gallbladder and promotes sphincter of Oddi relaxation.',
  },
});
