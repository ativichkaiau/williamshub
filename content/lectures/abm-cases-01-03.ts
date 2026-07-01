import { abmLecture } from './abm-shared';

const case1 = 'Case 1 — Acetaminophen Hepatotoxicity';
const case2 = 'Case 2 — Cholangitis & Obstructive Jaundice';
const case3 = 'Case 3 — ALDH2 Deficiency & Hepatic Encephalopathy';

export const acetaminophenOverdosePattern = abmLecture({
  id: 'acetaminophen-overdose-pattern',
  title: 'Acetaminophen Overdose: Clinical & Laboratory Pattern',
  source: case1,
  system: 'gi',
  tags: [
    { kind: 'disease', label: 'Acute hepatic necrosis' },
    { kind: 'investigation', label: 'AST/ALT, INR & acetaminophen level' },
  ],
  highYield: [
    'Early acetaminophen toxicity may present only with nausea, vomiting, diaphoresis, and abdominal discomfort; **apparent early improvement does not exclude evolving liver injury**.',
    'The characteristic biochemical pattern is **massive hepatocellular injury** with very high AST/ALT, while bilirubin may rise later. PT/INR, glucose, lactate, creatinine, and mental status determine severity.',
    'A timed serum acetaminophen concentration is interpreted on the **Rumack-Matthew nomogram only after a single acute ingestion with a known time**.',
    'Progressive coagulopathy, hypoglycemia, lactic acidosis, renal injury, or encephalopathy indicates acute liver failure and need for specialist/transplant evaluation.',
  ],
  chainTitle: 'Dose and time determine the evolving toxicity pattern',
  steps: [
    { label: 'Acute overdose may begin with nonspecific GI symptoms' },
    { label: 'Latent interval while hepatocyte injury develops' },
    { label: 'Marked aminotransferase rise + worsening INR', emphasis: 'danger' },
    { label: 'Recovery or acute liver failure with multiorgan dysfunction' },
  ],
  examFindings: [
    { sign: 'Right-upper-quadrant pain with AST/ALT in the thousands', mechanism: 'Centrilobular hepatocyte necrosis releases aminotransferases', significance: 'key' },
    { sign: 'Rising INR despite falling AST/ALT', mechanism: 'Loss of viable hepatocytes can lower enzyme release while synthetic failure worsens', significance: 'key' },
  ],
  investigations: [
    { clue: 'Acetaminophen level at least 4 hours after a known single ingestion', meaning: 'Plots treatment risk on the Rumack-Matthew nomogram' },
    { clue: 'Serial AST/ALT, INR, glucose, lactate, creatinine, pH', meaning: 'Tracks hepatic injury, synthetic failure, and systemic severity' },
  ],
  treatment: [
    { logic: 'Give N-acetylcysteine promptly when toxicity is possible', detail: 'Do not delay for a level when presentation is late, timing is uncertain, or liver injury is already present.' },
    { logic: 'Escalate acute liver failure early', detail: 'Critical care and transplant-center input are time-sensitive when encephalopathy or severe coagulopathy develops.' },
  ],
  mnemonic: { hook: 'APAP: Aminotransferases Peak, then Assess PT', expansion: ['A falling AST is not reassuring if INR rises'] },
  trap: {
    questionCategory: 'Nomogram use',
    wrongInstinct: 'Plot any acetaminophen concentration regardless of timing or ingestion pattern',
    rightAnswer: 'Use the nomogram only for a known-time, single acute ingestion',
    why: 'Repeated supratherapeutic ingestion and unknown-time cases require clinical and laboratory judgment instead.',
  },
  quiz: {
    stem: 'Which finding best indicates worsening hepatic function in acetaminophen toxicity?',
    options: ['Falling AST alone', 'Rising INR', 'Mild bilirubin elevation alone', 'Normal alkaline phosphatase'],
    answer: 1,
    explanation: 'INR reflects hepatic synthetic failure; aminotransferases measure injury and may fall as viable hepatocytes are lost.',
  },
});

export const napqiGlutathioneNac = abmLecture({
  id: 'napqi-glutathione-nac',
  title: 'NAPQI, Glutathione Depletion & N-Acetylcysteine',
  source: case1,
  system: 'gi',
  tags: [
    { kind: 'mechanism', label: 'CYP2E1 bioactivation' },
    { kind: 'treatment', label: 'N-acetylcysteine' },
  ],
  highYield: [
    'At therapeutic doses, most acetaminophen undergoes **glucuronidation and sulfation**; a small CYP2E1 fraction forms the reactive metabolite **NAPQI**.',
    'Glutathione normally conjugates NAPQI. In overdose, phase-II pathways saturate and hepatic glutathione falls, allowing NAPQI to bind cellular and mitochondrial proteins.',
    'Protein adducts, mitochondrial oxidant stress, and ATP failure produce **centrilobular (zone 3) necrosis**, where CYP activity is high and oxygen tension is low.',
    '**N-acetylcysteine (NAC)** restores cysteine/glutathione, can directly reduce NAPQI, and improves perfusion/antioxidant capacity; benefit is greatest early but persists in established injury.',
  ],
  chainTitle: 'Overdose redirects acetaminophen toward reactive NAPQI',
  steps: [
    { label: 'Glucuronidation/sulfation saturate' },
    { label: 'More acetaminophen enters CYP2E1 → NAPQI' },
    { label: 'Glutathione becomes depleted', emphasis: 'key' },
    { label: 'Protein binding + mitochondrial ROS → zone 3 necrosis', emphasis: 'danger' },
  ],
  examFindings: [
    { sign: 'Centrilobular hepatic necrosis', mechanism: 'Zone 3 has high CYP2E1 activity and vulnerability to oxidative injury', significance: 'key' },
    { sign: 'Higher risk with malnutrition or chronic alcohol use', mechanism: 'Lower glutathione reserve and/or CYP2E1 induction increases vulnerability', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Detectable acetaminophen with hepatocellular injury', meaning: 'Supports ongoing or recent toxic exposure, but a late level may be low' },
    { clue: 'Metabolic acidosis and elevated lactate', meaning: 'Suggests severe mitochondrial/systemic toxicity' },
  ],
  treatment: [
    { logic: 'NAC supplies cysteine for glutathione synthesis', detail: 'It is the biochemical antidote to NAPQI-mediated oxidative injury.' },
    { logic: 'Continue NAC until clinical stopping criteria are met', detail: 'Late presenters may require treatment beyond a fixed initial protocol.' },
  ],
  mnemonic: { hook: 'NAC neutralizes NAPQI', expansion: ['Rebuilds glutathione before reactive metabolite binds liver proteins'] },
  trap: {
    questionCategory: 'Why NAC still helps late',
    wrongInstinct: 'NAC has no value once AST/ALT are elevated',
    rightAnswer: 'NAC can still improve antioxidant capacity and outcomes in established acetaminophen liver injury',
    why: 'Its benefits extend beyond preventing the first NAPQI-protein bond.',
  },
  quiz: {
    stem: 'What is the principal early protective action of N-acetylcysteine in acetaminophen overdose?',
    options: ['Inhibits bilirubin conjugation', 'Replenishes glutathione precursor', 'Activates CYP2E1', 'Blocks renal acetaminophen excretion'],
    answer: 1,
    explanation: 'NAC provides cysteine for glutathione synthesis, restoring detoxification of NAPQI.',
  },
});

export const cholestaticLabPattern = abmLecture({
  id: 'cholestatic-lab-pattern',
  title: 'Cholestatic Laboratory Pattern & Obstructive Jaundice',
  source: case2,
  system: 'gi',
  tags: [
    { kind: 'mechanism', label: 'Extrahepatic bile obstruction' },
    { kind: 'investigation', label: 'ALP, GGT & direct bilirubin' },
  ],
  highYield: [
    'Extrahepatic obstruction produces a **cholestatic pattern: alkaline phosphatase and GGT rise disproportionately more than AST/ALT**, with conjugated hyperbilirubinemia.',
    'Conjugated bilirubin is water-soluble and enters urine → **dark urine**. Less bilirubin reaches the gut → less stercobilin → **pale stool**.',
    'Bile retention causes jaundice and pruritus; continued pressure/inflammation can produce secondary hepatocyte injury and moderate aminotransferase elevation.',
    'Ultrasound is usually the first test for duct dilation and gallstones; MRCP/EUS defines obstruction, while ERCP can diagnose and treat selected cases.',
  ],
  chainTitle: 'Blocked bile flow produces the cholestatic phenotype',
  steps: [
    { label: 'Common bile duct obstruction' },
    { label: 'Conjugated bile components reflux into blood' },
    { label: 'Direct bilirubin + ALP/GGT rise', emphasis: 'key' },
    { label: 'Dark urine + pale stool + pruritus' },
  ],
  examFindings: [
    { sign: 'Jaundice with dark urine and pale stool', mechanism: 'Conjugated bilirubin enters urine while little reaches intestine', significance: 'key' },
    { sign: 'ALP/GGT much higher relative to AST/ALT', mechanism: 'Bile-duct epithelial/cholestatic enzyme induction', significance: 'key' },
  ],
  investigations: [
    { clue: 'Direct bilirubin, ALP, and GGT elevation', meaning: 'Biochemical evidence of cholestasis' },
    { clue: 'Dilated ducts on right-upper-quadrant ultrasound', meaning: 'Supports mechanical extrahepatic obstruction' },
  ],
  treatment: [
    { logic: 'Identify and relieve the obstruction', detail: 'Imaging defines level/cause; ERCP can provide decompression and stone extraction when indicated.' },
  ],
  mnemonic: { hook: 'Blocked bile: Brown urine, Blank stool', expansion: ['Direct bilirubin backs into blood and urine'] },
  trap: {
    questionCategory: 'Bilirubin in urine',
    wrongInstinct: 'Unconjugated bilirubin causes dark urine',
    rightAnswer: 'Only conjugated bilirubin is water-soluble enough to appear in urine',
    why: 'Unconjugated bilirubin is albumin-bound and not filtered by the kidney.',
  },
  quiz: {
    stem: 'Which laboratory pattern most strongly supports extrahepatic biliary obstruction?',
    options: ['Isolated unconjugated bilirubin elevation', 'AST and ALT elevation with normal ALP', 'Disproportionate ALP/GGT elevation with direct hyperbilirubinemia', 'Low albumin alone'],
    answer: 2,
    explanation: 'A cholestatic enzyme pattern plus conjugated hyperbilirubinemia is typical of bile-flow obstruction.',
  },
});

export const cholangitisBileVitaminLoss = abmLecture({
  id: 'cholangitis-bile-vitamin-loss',
  title: 'Ascending Cholangitis, Bile Flow & Fat-Soluble Vitamins',
  source: case2,
  system: 'gi',
  tags: [
    { kind: 'disease', label: 'Ascending cholangitis' },
    { kind: 'treatment', label: 'Antibiotics and biliary drainage' },
  ],
  highYield: [
    'Ascending cholangitis is infection of an obstructed biliary tree. **Charcot triad = fever, right-upper-quadrant pain, jaundice**; hypotension and confusion add Reynolds pentad.',
    'Obstruction raises intraductal pressure and permits bacterial ascent/systemic translocation, so severe disease can progress rapidly to sepsis.',
    'Reduced bile salts in the intestine impair micelles → fat malabsorption, steatorrhea, and deficiency of **vitamins A, D, E, and K**.',
    'Management couples sepsis care and broad enteric coverage with **urgent biliary decompression**, usually by ERCP when obstruction persists or disease is severe.',
  ],
  chainTitle: 'Obstruction converts biliary stasis into infection',
  steps: [
    { label: 'Stone/stricture blocks bile flow' },
    { label: 'Biliary pressure and bacterial ascent increase' },
    { label: 'Cholangitis → bacteremia/sepsis', emphasis: 'danger' },
    { label: 'Antibiotics + source control by decompression', emphasis: 'key' },
  ],
  examFindings: [
    { sign: 'Fever + RUQ pain + jaundice', mechanism: 'Infected obstructed biliary system (Charcot triad)', significance: 'key' },
    { sign: 'Bleeding tendency during prolonged cholestasis', mechanism: 'Vitamin K malabsorption impairs γ-carboxylation of clotting factors', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Blood cultures and inflammatory markers', meaning: 'Assesses systemic infection before antibiotics when feasible' },
    { clue: 'Ultrasound/MRCP followed by therapeutic ERCP', meaning: 'Defines and relieves the obstructed biliary system' },
  ],
  treatment: [
    { logic: 'Resuscitate and start antibiotics promptly' },
    { logic: 'Drain the infected obstructed system', detail: 'Antibiotics alone may fail without source control.' },
    { logic: 'Replace fat-soluble vitamins when prolonged cholestasis causes deficiency' },
  ],
  mnemonic: { hook: 'Charcot: Fever, RUQ pain, Jaundice; add Shock and Confusion for Reynolds', expansion: ['An infected blockage needs drainage'] },
  trap: {
    questionCategory: 'Definitive management',
    wrongInstinct: 'Wait for antibiotics alone to sterilize a persistently obstructed duct',
    rightAnswer: 'Severe or ongoing cholangitis requires urgent biliary decompression plus antibiotics',
    why: 'The infected high-pressure source remains until bile flow is restored.',
  },
  quiz: {
    stem: 'A jaundiced patient with fever, RUQ pain, hypotension, and confusion needs which definitive step?',
    options: ['Oral vitamin K only', 'Urgent biliary decompression', 'Observation until bilirubin falls', 'High-fat feeding'],
    answer: 1,
    explanation: 'Reynolds pentad signals severe cholangitis; antibiotics and urgent source control are required.',
  },
});

export const alcoholAldh2Cirrhosis = abmLecture({
  id: 'alcohol-aldh2-cirrhosis',
  title: 'Alcohol Metabolism, ALDH2 Deficiency & Cirrhosis',
  source: case3,
  system: 'gi',
  tags: [
    { kind: 'mechanism', label: 'Acetaldehyde and NADH excess' },
    { kind: 'disease', label: 'Alcohol-related cirrhosis' },
  ],
  highYield: [
    'Alcohol dehydrogenase converts ethanol to acetaldehyde; mitochondrial **ALDH2 converts acetaldehyde to acetate**. Both reactions produce NADH.',
    'The ALDH2*2 variant markedly reduces activity, causing acetaldehyde accumulation and flushing; acetaldehyde adducts and ROS promote inflammation and fibrosis.',
    'High NADH shifts pyruvate → lactate and oxaloacetate → malate, inhibits gluconeogenesis and fatty-acid oxidation, and favors glycerol-3-phosphate/TAG accumulation → fatty liver.',
    'Chronic injury activates stellate cells and collagen deposition → cirrhosis, portal hypertension, impaired synthetic function, and reduced ammonia detoxification.',
  ],
  chainTitle: 'Ethanol redox stress progresses toward fibrosis',
  steps: [
    { label: 'Ethanol → acetaldehyde by ADH/CYP2E1' },
    { label: 'Low ALDH2 activity → acetaldehyde accumulation', emphasis: 'key' },
    { label: 'Adducts + ROS + high NADH → steatosis/inflammation' },
    { label: 'Stellate-cell activation → fibrosis/cirrhosis' },
  ],
  examFindings: [
    { sign: 'Facial flushing and tachycardia after alcohol', mechanism: 'Acetaldehyde accumulation in ALDH2 deficiency', significance: 'key' },
    { sign: 'AST greater than ALT with chronic alcohol injury', mechanism: 'Mitochondrial injury and relative pyridoxal-phosphate deficiency', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Albumin and PT/INR', meaning: 'Assess hepatic synthetic function rather than hepatocyte injury alone' },
    { clue: 'Ultrasound/elastography and platelet count', meaning: 'Supports fibrosis and portal-hypertension assessment' },
  ],
  treatment: [
    { logic: 'Complete alcohol abstinence is the central disease-modifying step' },
    { logic: 'Treat cirrhosis complications and nutritional deficiency', detail: 'Care includes portal-hypertension surveillance, thiamine/nutrition, and transplant assessment when decompensated.' },
  ],
  mnemonic: { hook: 'ALDH2 absent: Acetaldehyde accumulates', expansion: ['High NADH makes lactate and fat, not glucose'] },
  trap: {
    questionCategory: 'ALDH2 risk interpretation',
    wrongInstinct: 'Flushing protects completely against alcohol-related disease',
    rightAnswer: 'Flushing may reduce drinking but acetaldehyde exposure is toxic; continued alcohol use remains harmful',
    why: 'The biochemical defect increases reactive aldehyde exposure rather than detoxifying ethanol safely.',
  },
  quiz: {
    stem: 'Which redox change from ethanol metabolism promotes both lactic acidosis and fasting hypoglycemia?',
    options: ['Decreased NADH/NAD+ ratio', 'Increased NADH/NAD+ ratio', 'Increased FAD/FADH2 ratio', 'Reduced acetyl-CoA'],
    answer: 1,
    explanation: 'High NADH drives pyruvate to lactate and oxaloacetate to malate, limiting gluconeogenesis.',
  },
});

export const hepaticEncephalopathyAmmonia = abmLecture({
  id: 'hepatic-encephalopathy-ammonia',
  title: 'Hyperammonemia & Hepatic Encephalopathy',
  source: case3,
  system: 'gi',
  tags: [
    { kind: 'mechanism', label: 'Astrocyte glutamine swelling' },
    { kind: 'treatment', label: 'Lactulose and rifaximin' },
  ],
  highYield: [
    'Cirrhosis reduces urea-cycle detoxification and creates portosystemic shunting, allowing gut-derived ammonia and other neurotoxins to reach the brain.',
    'Astrocytes convert ammonia + glutamate to **glutamine**; osmotic glutamine accumulation and altered neurotransmission contribute to cerebral dysfunction.',
    'Manifestations range from sleep/cognitive change to **asterixis**, confusion, somnolence, and coma. Ammonia supports the diagnosis but correlates imperfectly with severity.',
    'Common precipitants include GI bleeding, infection, constipation, dehydration/overdiuresis, electrolyte disturbance, sedatives, renal failure, and excess nitrogen load.',
  ],
  chainTitle: 'Liver failure and shunting expose the brain to ammonia',
  steps: [
    { label: 'Gut bacteria and amino-acid metabolism generate ammonia' },
    { label: 'Cirrhotic liver/shunts fail to clear it' },
    { label: 'Astrocyte glutamine rises → swelling + neurotransmitter change', emphasis: 'danger' },
    { label: 'Asterixis and altered consciousness' },
  ],
  examFindings: [
    { sign: 'Asterixis with fluctuating confusion in cirrhosis', mechanism: 'Diffuse metabolic encephalopathy from impaired detoxification', significance: 'key' },
    { sign: 'Low albumin and prolonged INR', mechanism: 'Reduced hepatic protein synthesis indicates decompensated function', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Search for GI bleed, infection, constipation, renal/electrolyte disturbance', meaning: 'Identifies the reversible precipitant' },
    { clue: 'Plasma ammonia', meaning: 'Can support but neither grade nor exclude hepatic encephalopathy by itself' },
  ],
  treatment: [
    { logic: 'Correct the precipitant and give lactulose', detail: 'Titrate to regular soft stools; colonic acidification/trapping lowers ammonia absorption.' },
    { logic: 'Add rifaximin for recurrence or inadequate control', detail: 'Reduces ammonia-producing gut bacterial activity.' },
  ],
  mnemonic: { hook: 'Bleed, bug, blocked bowel, bad kidneys, benzos', expansion: ['Search precipitants before blaming ammonia alone'] },
  trap: {
    questionCategory: 'Ammonia level',
    wrongInstinct: 'A normal or mildly elevated ammonia level rules hepatic encephalopathy in or out',
    rightAnswer: 'Hepatic encephalopathy is a clinical diagnosis after excluding alternatives and finding precipitants',
    why: 'Ammonia levels overlap substantially across clinical grades.',
  },
  quiz: {
    stem: 'Why does lactulose improve hepatic encephalopathy?',
    options: ['It activates the hepatic urea cycle directly', 'It traps ammonia as ammonium in the colon and increases elimination', 'It blocks cerebral glutamine synthetase', 'It increases intestinal protein absorption'],
    answer: 1,
    explanation: 'Colonic acidification converts diffusible NH3 to less absorbable NH4+ and catharsis increases nitrogen elimination.',
  },
});
