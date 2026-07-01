import { abmLecture } from './abm-shared';

const case4 = 'Case 4 — G6PD Deficiency & Hemolysis';
const case5 = 'Case 5 — Galactokinase Deficiency';
const case6 = 'Case 6 — Hereditary Fructose Intolerance';

export const g6pdOxidativeHemolysis = abmLecture({
  id: 'g6pd-oxidative-hemolysis',
  title: 'G6PD Deficiency & Oxidative Hemolysis',
  source: case4,
  system: 'heme',
  tags: [
    { kind: 'mechanism', label: 'NADPH and reduced glutathione' },
    { kind: 'disease', label: 'Acute hemolytic anemia' },
  ],
  highYield: [
    'RBCs depend on the pentose phosphate pathway enzyme **G6PD** to make NADPH because they have no mitochondria.',
    'NADPH lets glutathione reductase regenerate reduced glutathione (GSH), which glutathione peroxidase uses to detoxify hydrogen peroxide and lipid peroxides.',
    'In X-linked G6PD deficiency, infection, fava beans, or oxidant drugs cause hemoglobin denaturation (**Heinz bodies**) and membrane injury; splenic removal produces **bite cells**.',
    'Hemolysis can be both intravascular and extravascular, producing pallor, jaundice, fatigue, and dark hemoglobin-containing urine after an oxidative trigger.',
  ],
  chainTitle: 'Loss of NADPH turns oxidative stress into hemolysis',
  steps: [
    { label: 'Oxidant trigger raises peroxide burden' },
    { label: 'Low G6PD → inadequate NADPH' },
    { label: 'GSH cannot be regenerated → Heinz bodies', emphasis: 'key' },
    { label: 'Membrane damage + splenic bites → hemolysis', emphasis: 'danger' },
  ],
  examFindings: [
    { sign: 'Bite cells after fava beans or oxidant medication', mechanism: 'Spleen removes Heinz-body precipitates from RBCs', significance: 'key' },
    { sign: 'Jaundice and dark urine without hepatosplenomegaly', mechanism: 'Acute hemoglobin breakdown and hemoglobinuria', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Heinz bodies with supravital stain; bite cells on smear', meaning: 'Oxidative hemoglobin denaturation and splenic processing' },
    { clue: 'Low G6PD activity outside the acute reticulocyte-rich phase', meaning: 'Confirms enzyme deficiency' },
  ],
  treatment: [
    { logic: 'Stop the oxidant trigger and treat infection', detail: 'Hydration, monitoring, and transfusion are based on severity.' },
    { logic: 'Educate about high-risk drugs and fava beans' },
  ],
  mnemonic: { hook: 'No G6PD → no NADPH → no reduced glutathione', expansion: ['Heinz precipitates; spleen bites'] },
  trap: {
    questionCategory: 'Acute enzyme assay',
    wrongInstinct: 'A normal G6PD level during the hemolytic crisis excludes deficiency',
    rightAnswer: 'Testing can be falsely normal because older deficient cells have lysed and young reticulocytes have more G6PD',
    why: 'Repeat testing after recovery when clinical suspicion remains high.',
  },
  quiz: {
    stem: 'Which RBC function is directly compromised by G6PD deficiency?',
    options: ['ATP production by glycolysis', 'NADPH production for glutathione reduction', 'Heme synthesis in mitochondria', 'Bilirubin conjugation'],
    answer: 1,
    explanation: 'The pentose phosphate pathway is the RBC source of NADPH needed to maintain reduced glutathione.',
  },
});

export const hemolysisWorkupTriggers = abmLecture({
  id: 'hemolysis-workup-triggers',
  title: 'Hemolysis Workup, Triggers & Prevention',
  source: case4,
  system: 'heme',
  tags: [
    { kind: 'investigation', label: 'LDH, haptoglobin & bilirubin' },
    { kind: 'treatment', label: 'Trigger avoidance' },
  ],
  highYield: [
    'Hemolysis produces **reticulocytosis, high LDH, high unconjugated bilirubin, and low haptoglobin**; intravascular hemolysis adds hemoglobinemia/hemoglobinuria.',
    'Urine dipstick can be positive for blood with few or no RBCs because it detects free hemoglobin, explaining dark urine in acute intravascular hemolysis.',
    'Typical oxidative triggers include infection, fava beans, primaquine/tafenoquine, dapsone, rasburicase, and selected sulfonamides or nitrofurantoin.',
    'Severity varies by G6PD variant, dose of oxidant, and mosaic expression in heterozygous females; avoidance and clear medication alerts prevent recurrence.',
  ],
  chainTitle: 'Biochemical markers distinguish hemolysis from bleeding',
  steps: [
    { label: 'RBCs rupture or are removed by spleen' },
    { label: 'LDH and unconjugated bilirubin rise' },
    { label: 'Free hemoglobin consumes haptoglobin', emphasis: 'key' },
    { label: 'Marrow response raises reticulocytes' },
  ],
  examFindings: [
    { sign: 'Dipstick blood with few RBCs on microscopy', mechanism: 'Hemoglobinuria rather than true hematuria', significance: 'key' },
    { sign: 'Reticulocytosis after several days', mechanism: 'Marrow compensates for shortened RBC survival', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'High LDH + indirect bilirubin + reticulocytes; low haptoglobin', meaning: 'Classic laboratory constellation of hemolysis' },
    { clue: 'Direct antiglobulin test negative', meaning: 'Supports a nonimmune mechanism such as oxidative hemolysis' },
  ],
  treatment: [
    { logic: 'Remove the trigger and support oxygen delivery', detail: 'Severe anemia or ongoing hemolysis may require transfusion and renal monitoring.' },
    { logic: 'Document G6PD deficiency before prescribing oxidant drugs' },
  ],
  mnemonic: { hook: 'Hemolysis: LDH and indirect bilirubin up; haptoglobin down', expansion: ['Urine heme without RBCs = hemoglobin'] },
  trap: {
    questionCategory: 'Dark urine',
    wrongInstinct: 'Dark urine always means conjugated bilirubin from liver disease',
    rightAnswer: 'In acute G6PD hemolysis, dark urine may be hemoglobinuria',
    why: 'Urinalysis and bilirubin fractionation distinguish the pigments.',
  },
  quiz: {
    stem: 'Which laboratory profile best supports acute intravascular hemolysis?',
    options: ['Low LDH, high haptoglobin, no reticulocytes', 'High direct bilirubin and high ALP only', 'High LDH, low haptoglobin, reticulocytosis', 'Low unconjugated bilirubin and low LDH'],
    answer: 2,
    explanation: 'RBC destruction releases LDH, consumes haptoglobin, and stimulates a reticulocyte response.',
  },
});

export const galactokinaseCataracts = abmLecture({
  id: 'galactokinase-cataracts',
  title: 'Galactokinase Deficiency & Infantile Cataracts',
  source: case5,
  tags: [
    { kind: 'mechanism', label: 'Galactitol osmotic injury' },
    { kind: 'disease', label: 'Type II galactosemia' },
  ],
  highYield: [
    'Autosomal-recessive **GALK1 deficiency** blocks galactose → galactose-1-phosphate, causing elevated blood/urine galactose but normal or low galactose-1-phosphate.',
    'Aldose reductase converts excess galactose to **galactitol**, which is trapped in the lens and draws water inward.',
    'Lens-fiber swelling, oxidative stress, and crystallin disruption produce early bilateral cataracts, often after milk exposure.',
    'Unlike classic GALT deficiency, isolated galactokinase deficiency usually lacks severe neonatal hepatic failure, E. coli sepsis, and marked galactose-1-phosphate accumulation.',
  ],
  chainTitle: 'Galactose diversion into galactitol clouds the lens',
  steps: [
    { label: 'Milk lactose supplies galactose' },
    { label: 'GALK1 block prevents Gal-1-P formation' },
    { label: 'Aldose reductase converts galactose → galactitol', emphasis: 'key' },
    { label: 'Osmotic lens swelling → cataract' },
  ],
  examFindings: [
    { sign: 'Infantile cataracts after milk feeding without severe liver disease', mechanism: 'Lens galactitol accumulation in galactokinase deficiency', significance: 'key' },
    { sign: 'Reducing sugar in urine with negative glucose-specific dipstick', mechanism: 'Galactosuria rather than glucosuria', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'High galactose with normal galactose-1-phosphate', meaning: 'Localizes the block before galactose phosphorylation' },
    { clue: 'GALK enzyme assay or biallelic GALK1 variants', meaning: 'Confirms galactokinase deficiency' },
  ],
  treatment: [
    { logic: 'Restrict dietary galactose/lactose early', detail: 'Prevents ongoing galactitol production and may limit cataract progression.' },
    { logic: 'Arrange ophthalmologic assessment and nutritional substitution' },
  ],
  mnemonic: { hook: 'K for Kataracts: galactoKinase deficiency', expansion: ['Galactose → galactitol → lens swelling'] },
  trap: {
    questionCategory: 'Galactosemia type',
    wrongInstinct: 'Any infantile cataract with galactose exposure is classic GALT deficiency',
    rightAnswer: 'Isolated cataracts with normal galactose-1-phosphate favor galactokinase deficiency',
    why: 'The location of the enzyme block determines both metabolite pattern and systemic severity.',
  },
  quiz: {
    stem: 'Why does galactokinase deficiency cause cataracts?',
    options: ['Galactose inhibits retinal vitamin A uptake', 'Galactitol accumulates osmotically in the lens', 'Galactose-1-phosphate destroys the cornea', 'GALT activates lens proteases'],
    answer: 1,
    explanation: 'Aldose reductase forms trapped galactitol, causing osmotic lens-fiber injury and crystallin disruption.',
  },
});

export const galactosemiaDifferentialDiet = abmLecture({
  id: 'galactosemia-differential-diet',
  title: 'Galactosemia Differential & Dietary Management',
  source: case5,
  tags: [
    { kind: 'investigation', label: 'Galactose-1-phosphate pattern' },
    { kind: 'treatment', label: 'Lactose/galactose restriction' },
  ],
  highYield: [
    '**GALK deficiency:** galactose ↑, galactitol ↑, Gal-1-P not elevated → cataracts predominate.',
    '**Classic GALT deficiency:** Gal-1-P ↑ with jaundice, hepatomegaly, vomiting, failure to thrive, cataracts, and increased risk of E. coli sepsis.',
    '**GALE deficiency** varies from a mild RBC-limited form to generalized disease resembling classic galactosemia.',
    'Newborn screening plus metabolite/enzyme/genetic testing distinguishes the disorders; treatment begins immediately when classic galactosemia is suspected.',
  ],
  chainTitle: 'The accumulated metabolite identifies the blocked enzyme',
  steps: [
    { label: 'Measure galactose and galactose-1-phosphate' },
    { label: 'Normal Gal-1-P → consider GALK' },
    { label: 'High Gal-1-P + systemic toxicity → consider GALT', emphasis: 'key' },
    { label: 'Confirm by enzyme assay/genetics and restrict galactose' },
  ],
  examFindings: [
    { sign: 'Neonatal jaundice, hepatomegaly, cataracts, E. coli sepsis', mechanism: 'Toxic Gal-1-P accumulation in classic GALT deficiency', significance: 'key' },
    { sign: 'Cataracts alone with preserved liver function', mechanism: 'Galactitol-predominant GALK deficiency', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'RBC galactose-1-phosphate and GALT activity', meaning: 'Diagnoses classic galactosemia' },
    { clue: 'GALK1 molecular/enzyme testing', meaning: 'Confirms type II galactosemia when Gal-1-P is not elevated' },
  ],
  treatment: [
    { logic: 'Stop lactose/galactose immediately in suspected classic disease', detail: 'Use an appropriate lactose-free formula while confirmatory testing proceeds.' },
    { logic: 'Monitor nutrition, growth, vision, liver function, and long-term complications' },
  ],
  mnemonic: { hook: 'GALK = eye; GALT = eye + liver + E. coli', expansion: ['Gal-1-P separates the blocks'] },
  trap: {
    questionCategory: 'Urine reducing substance',
    wrongInstinct: 'A positive reducing-sugar test identifies the exact enzyme deficiency',
    rightAnswer: 'It detects a reducing sugar but cannot distinguish galactose from other sugars or identify the blocked enzyme',
    why: 'Metabolite-specific assays and enzyme/genetic testing are required.',
  },
  quiz: {
    stem: 'Which finding favors GALT deficiency over galactokinase deficiency?',
    options: ['Isolated cataracts', 'Normal galactose-1-phosphate', 'Neonatal liver dysfunction and E. coli sepsis', 'Galactitol in the lens'],
    answer: 2,
    explanation: 'Classic GALT deficiency is a severe systemic disease with Gal-1-P accumulation, liver injury, and sepsis risk.',
  },
});

export const aldolaseBPhosphateTrap = abmLecture({
  id: 'aldolase-b-phosphate-trap',
  title: 'Aldolase B Deficiency & the Fructose-1-P Trap',
  source: case6,
  tags: [
    { kind: 'mechanism', label: 'Phosphate trapping and ATP depletion' },
    { kind: 'disease', label: 'Hereditary fructose intolerance' },
  ],
  highYield: [
    'Hereditary fructose intolerance is autosomal recessive **ALDOB deficiency**, blocking fructose-1-phosphate cleavage in liver, kidney, and intestine.',
    'Fructokinase continues consuming ATP and phosphate, so **fructose-1-phosphate accumulates**, inorganic phosphate falls, and ATP is depleted.',
    'Low phosphate/ATP inhibits glycogen phosphorylase and gluconeogenesis, causing severe post-fructose hypoglycemia with vomiting, diaphoresis, lethargy, or seizures.',
    'Symptoms begin after fruit, juice, honey, sucrose, or sorbitol enters the diet; lifelong sweet aversion can be a protective clinical clue.',
  ],
  chainTitle: 'Unopposed fructokinase traps phosphate as fructose-1-P',
  steps: [
    { label: 'Fructose → fructose-1-P by fructokinase' },
    { label: 'Aldolase B block prevents cleavage' },
    { label: 'F1P traps phosphate and depletes ATP', emphasis: 'danger' },
    { label: 'Glycogenolysis + gluconeogenesis fail → hypoglycemia' },
  ],
  examFindings: [
    { sign: 'Vomiting, sweating, and hypoglycemia after fruit or sucrose', mechanism: 'Fructose-1-P trapping blocks hepatic glucose production', significance: 'key' },
    { sign: 'Lifelong aversion to sweets', mechanism: 'Conditioned avoidance after repeated fructose-triggered illness', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Biallelic pathogenic ALDOB variants', meaning: 'Confirms hereditary fructose intolerance without hazardous challenge testing' },
    { clue: 'Hypoglycemia with liver dysfunction after fructose exposure', meaning: 'Clinical biochemical pattern of phosphate trapping' },
  ],
  treatment: [
    { logic: 'Eliminate fructose, sucrose, and sorbitol', detail: 'Dietary education must include medications, formulas, and processed foods.' },
    { logic: 'Treat acute hypoglycemia with glucose and supportive care' },
  ],
  mnemonic: { hook: 'Fructose-1-P traps P', expansion: ['No phosphate → no ATP → no glycogenolysis or gluconeogenesis'] },
  trap: {
    questionCategory: 'Diagnostic testing',
    wrongInstinct: 'Perform an oral fructose challenge to prove the diagnosis',
    rightAnswer: 'Use molecular testing because fructose challenge can provoke severe hypoglycemia and liver injury',
    why: 'The suspected substrate is itself dangerous in HFI.',
  },
  quiz: {
    stem: 'What directly causes the acute hypoglycemia of hereditary fructose intolerance?',
    options: ['Excess insulin secretion only', 'Phosphate trapping that inhibits glycogenolysis and gluconeogenesis', 'Failure to absorb fructose from intestine', 'Increased ketone utilization'],
    answer: 1,
    explanation: 'Accumulated fructose-1-phosphate depletes phosphate/ATP, shutting down hepatic glucose-release pathways.',
  },
});

export const hfiMetabolicComplications = abmLecture({
  id: 'hfi-metabolic-complications',
  title: 'HFI: Lactic Acidosis, Hyperuricemia & Liver Injury',
  source: case6,
  tags: [
    { kind: 'mechanism', label: 'ATP depletion and purine degradation' },
    { kind: 'treatment', label: 'Fructose/sucrose/sorbitol avoidance' },
  ],
  highYield: [
    'ATP depletion raises AMP breakdown to uric acid, while lactate competes with urate for renal excretion → **hyperuricemia**.',
    'Impaired gluconeogenesis and ATP loss push pyruvate toward lactate → **lactic acidosis** alongside hypoglycemia.',
    'Persistent fructose-1-P and energy depletion injure hepatocytes, causing hepatomegaly, elevated transaminases, jaundice, and potentially liver failure.',
    'The hydrogen breath test evaluates fructose malabsorption, not ALDOB-mediated hereditary fructose intolerance, and does not explain systemic phosphate trapping.',
  ],
  chainTitle: 'ATP depletion explains the multisystem laboratory pattern',
  steps: [
    { label: 'F1P accumulation consumes phosphate/ATP' },
    { label: 'AMP degradation → uric acid' },
    { label: 'Blocked gluconeogenesis → lactate + hypoglycemia', emphasis: 'key' },
    { label: 'Energy failure → hepatic and renal toxicity' },
  ],
  examFindings: [
    { sign: 'Hypoglycemia + lactic acidosis + hyperuricemia after fructose', mechanism: 'One phosphate-trapping lesion disrupts glucose and purine metabolism', significance: 'key' },
    { sign: 'Hepatomegaly after dietary weaning', mechanism: 'Repeated fructose exposure injures energy-depleted hepatocytes', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Glucose, lactate, uric acid, phosphate, liver and renal tests', meaning: 'Defines the acute metabolic consequences and organ injury' },
    { clue: 'Diet history including sucrose and sorbitol', meaning: 'Links episodes to all relevant fructose sources' },
  ],
  treatment: [
    { logic: 'Use a dietitian-guided fructose/sucrose/sorbitol-free plan', detail: 'Supplement micronutrients when broad fruit/vegetable restriction creates risk.' },
    { logic: 'Provide emergency glucose during accidental exposure' },
  ],
  mnemonic: { hook: 'HFI triad: Hypoglycemia, high lactate, high urate', expansion: ['All trace back to trapped phosphate and low ATP'] },
  trap: {
    questionCategory: 'Fructose intolerance versus malabsorption',
    wrongInstinct: 'A positive breath test proves aldolase B deficiency',
    rightAnswer: 'Breath hydrogen reflects intestinal fructose malabsorption; ALDOB deficiency is a systemic metabolic block',
    why: 'The disorders differ in mechanism, risk, and diagnostic approach.',
  },
  quiz: {
    stem: 'Why does uric acid rise after fructose exposure in hereditary fructose intolerance?',
    options: ['Uric acid is synthesized from fructose directly', 'ATP depletion accelerates AMP degradation and lactate limits urate excretion', 'ALDOB normally excretes uric acid', 'Ketones activate xanthine oxidase exclusively'],
    answer: 1,
    explanation: 'Low ATP drives adenine nucleotide degradation, while lactic acidosis reduces renal urate clearance.',
  },
});
