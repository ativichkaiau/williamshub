import { hen1Lecture } from './hen1-shared';

const l7 = 'L7 — Diagnosis of Diabetes Mellitus';
const l8 = 'L8 — Function of Endocrine Pancreas & Adipose Tissue';

export const hen1PancreasDiabetes = [
  hen1Lecture({
    id: 'hen1-diabetes-types-pathogenesis',
    title: 'Type 1 vs Type 2 Diabetes Pathogenesis',
    source: l7,
    tags: [
      { kind: 'mechanism', label: 'Insulin deficiency vs resistance' },
      { kind: 'exam', label: 'Autoimmune beta-cell loss' },
    ],
    highYield: [
      'Type 1 diabetes usually reflects immune-mediated beta-cell destruction and **absolute insulin deficiency**; susceptibility involves HLA and other genes plus environmental triggers.',
      'Type 2 diabetes begins with **insulin resistance** in liver, skeletal muscle, and adipose tissue, followed by inadequate compensatory insulin secretion and progressive beta-cell failure.',
      'Hyperglycemia itself worsens beta-cell function and insulin sensitivity (glucotoxicity), accelerating progression.',
      'Phenotype and age overlap; autoantibodies and C-peptide help classify uncertain cases.',
    ],
    chainTitle: 'Different initiating defects converge on inadequate insulin action',
    steps: [
      { label: 'Autoimmunity destroys beta cells OR tissues become insulin-resistant' },
      { label: 'Effective insulin action falls' },
      { label: 'Hepatic glucose output rises and peripheral uptake falls', emphasis: 'key' },
      { label: 'Hyperglycemia further impairs beta-cell function' },
    ],
    examFindings: [
      { sign: 'Lean patient with ketosis and rapid symptom onset', mechanism: 'Absolute insulin deficiency favors unchecked lipolysis and ketogenesis', significance: 'key' },
      { sign: 'Acanthosis nigricans with central adiposity', mechanism: 'Hyperinsulinemia accompanies marked insulin resistance', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'GAD, IA-2, ZnT8 or insulin autoantibodies', meaning: 'Supports autoimmune type 1 diabetes' },
      { clue: 'C-peptide interpreted with glucose', meaning: 'Estimates endogenous insulin secretory reserve' },
    ],
    treatment: [
      { logic: 'Match treatment to insulin physiology', detail: 'Type 1 requires insulin replacement; type 2 management targets resistance, beta-cell reserve, weight, and cardiorenal risk.' },
    ],
    mnemonic: { hook: 'Type 1: insulin absent; Type 2: insulin resisted, then exhausted', expansion: ['Both produce hyperglycemia'] },
    trap: {
      questionCategory: 'Diabetes classification',
      wrongInstinct: 'Adult onset automatically means type 2 diabetes',
      rightAnswer: 'Autoimmune diabetes can present in adults; classify using physiology and biomarkers when uncertain',
      why: 'Age and body habitus alone do not perfectly distinguish diabetes type.',
    },
    quiz: {
      stem: 'Which finding most directly supports autoimmune type 1 diabetes?',
      options: ['High triglycerides', 'Positive GAD autoantibodies', 'Hypertension', 'Central obesity'],
      answer: 1,
      explanation: 'Islet autoantibodies such as GAD identify autoimmune beta-cell disease.',
    },
  }),

  hen1Lecture({
    id: 'hen1-diabetes-diagnostic-criteria',
    title: 'Nonpregnant Diabetes & Prediabetes Diagnostic Criteria',
    source: l7,
    tags: [
      { kind: 'investigation', label: 'FPG, OGTT, A1C and random glucose' },
      { kind: 'exam', label: 'Confirmatory testing' },
    ],
    highYield: [
      'Diabetes is diagnosed by A1C **≥6.5%**, fasting plasma glucose **≥126 mg/dL (7.0 mmol/L)**, or 2-hour plasma glucose **≥200 mg/dL (11.1 mmol/L)** during a 75-g OGTT.',
      'Random plasma glucose **≥200 mg/dL** is diagnostic when accompanied by classic hyperglycemic symptoms or hyperglycemic crisis.',
      'Without unequivocal hyperglycemia, diagnosis requires two abnormal results—either different tests at the same time or repeat abnormal testing.',
      'Prediabetes ranges are A1C 5.7–6.4%, fasting glucose 100–125 mg/dL, or 2-hour 75-g OGTT glucose 140–199 mg/dL.',
    ],
    chainTitle: 'A standardized glucose exposure is classified by validated thresholds',
    steps: [
      { label: 'Choose laboratory A1C, fasting glucose, or 75-g OGTT' },
      { label: 'Compare result with diabetes threshold' },
      { label: 'If no unequivocal symptoms/crisis, confirm abnormality', emphasis: 'key' },
      { label: 'Classify diabetes type and associated risk' },
    ],
    examFindings: [
      { sign: 'Polyuria, polydipsia and weight loss with random glucose 240 mg/dL', mechanism: 'Classic symptoms plus diagnostic random glucose establishes diabetes', significance: 'key' },
      { sign: 'Single asymptomatic A1C of 6.6%', mechanism: 'Likely diabetes but requires confirmation absent unequivocal hyperglycemia', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'FPG, 2-hour 75-g OGTT, or standardized laboratory A1C', meaning: 'Validated tests for diagnosis' },
      { clue: 'Repeat or second abnormal test', meaning: 'Confirms diagnosis when presentation is not unequivocal' },
    ],
    treatment: [
      { logic: 'Confirm first, then classify and assess urgency', detail: 'Symptomatic severe hyperglycemia or crisis requires immediate treatment rather than delayed repeat testing.' },
    ],
    mnemonic: { hook: '6.5, 126, 200, 200 + symptoms', expansion: ['A1C', 'Fasting', '2-hour OGTT', 'Random'] },
    trap: {
      questionCategory: 'Diabetes confirmation',
      wrongInstinct: 'Any single mildly abnormal result definitively diagnoses an asymptomatic patient',
      rightAnswer: 'Confirm unless hyperglycemia is unequivocal',
      why: 'Biologic and analytic variation can produce an isolated threshold crossing.',
    },
    quiz: {
      stem: 'Which fasting plasma glucose value meets the diabetes threshold?',
      options: ['100 mg/dL', '110 mg/dL', '126 mg/dL', '70 mg/dL'],
      answer: 2,
      explanation: 'A fasting plasma glucose of at least 126 mg/dL (7.0 mmol/L) meets the diagnostic threshold.',
    },
  }),

  hen1Lecture({
    id: 'hen1-gestational-diabetes-diagnosis',
    title: 'Gestational Diabetes Screening & Diagnosis',
    source: l7,
    tags: [
      { kind: 'investigation', label: 'One-step and two-step OGTT' },
      { kind: 'exam', label: 'Pregnancy-specific thresholds' },
    ],
    highYield: [
      'Gestational diabetes is diabetes first diagnosed in the second or third trimester that was not clearly overt diabetes before pregnancy.',
      'At 24–28 weeks, the one-step 75-g OGTT diagnoses GDM if **any** value is met: fasting 92, 1-hour 180, or 2-hour 153 mg/dL.',
      'The two-step strategy uses a nonfasting 50-g screen, followed when positive by a fasting 100-g OGTT; Carpenter–Coustan thresholds are 95/180/155/140 mg/dL at 0/1/2/3 hours.',
      'Postpartum testing is essential because GDM predicts future type 2 diabetes; a 75-g OGTT at 4–12 weeks is preferred.',
    ],
    chainTitle: 'Pregnancy insulin resistance is tested with pregnancy-specific glucose loads',
    steps: [
      { label: 'Exclude overt diabetes early when risk warrants' },
      { label: 'Screen at 24–28 weeks' },
      { label: 'Apply one-step or two-step pregnancy criteria', emphasis: 'key' },
      { label: 'Retest postpartum and continue long-term surveillance' },
    ],
    examFindings: [
      { sign: 'Hyperglycemia first detected at 26 weeks', mechanism: 'Placental hormones increase insulin resistance as pregnancy advances', significance: 'supportive' },
      { sign: 'Prior GDM followed by later type 2 diabetes', mechanism: 'Pregnancy unmasks limited beta-cell reserve and chronic metabolic risk', significance: 'key' },
    ],
    investigations: [
      { clue: '75-g OGTT or staged 50-g/100-g strategy', meaning: 'Uses pregnancy-specific diagnostic thresholds' },
      { clue: 'Postpartum 75-g OGTT', meaning: 'Detects persistent diabetes or prediabetes after placental insulin resistance resolves' },
    ],
    treatment: [
      { logic: 'Control maternal glucose while protecting fetal growth', detail: 'Nutrition, monitoring, activity, and medication when needed are individualized during pregnancy.' },
    ],
    mnemonic: { hook: 'One-step 75: 92–180–153', expansion: ['Any one abnormal value diagnoses GDM'] },
    trap: {
      questionCategory: 'GDM testing',
      wrongInstinct: 'Nonpregnant fasting and A1C criteria are the only tests used at 24–28 weeks',
      rightAnswer: 'Pregnancy uses specific glucose-load strategies and thresholds',
      why: 'Maternal-fetal risk appears at lower glucose levels than standard nonpregnant diabetes cutoffs.',
    },
    quiz: {
      stem: 'In the one-step 75-g OGTT, which fasting value meets the GDM threshold?',
      options: ['70 mg/dL', '85 mg/dL', '92 mg/dL', '126 mg/dL only'],
      answer: 2,
      explanation: 'A fasting value of at least 92 mg/dL is one of the one-step GDM thresholds.',
    },
  }),

  hen1Lecture({
    id: 'hen1-glycemic-markers-emergencies',
    title: 'Glycemic Markers, Autoantibodies & Hyperglycemic Emergencies',
    source: l7,
    tags: [
      { kind: 'investigation', label: 'A1C, fructosamine and ketones' },
      { kind: 'exam', label: 'DKA vs HHS' },
    ],
    highYield: [
      '**A1C reflects weighted glycemia over roughly 2–3 months** and needs no fasting, but altered red-cell turnover, hemoglobin variants, pregnancy, kidney disease, or transfusion can distort it.',
      'Fructosamine mainly reflects glycated albumin over about 2–3 weeks; low/abnormal albumin turnover limits interpretation.',
      'Islet autoantibodies aid type 1 classification. Serum beta-hydroxybutyrate is preferred for detecting significant ketoacidosis over nitroprusside urine tests.',
      'DKA features ketonemia and metabolic acidosis; HHS has more extreme hyperglycemia/hyperosmolality with little or no major ketoacidosis, though overlap occurs.',
    ],
    chainTitle: 'Choose a biomarker whose time window and assumptions match the question',
    steps: [
      { label: 'Define acute diagnosis, chronic exposure, or diabetes type' },
      { label: 'Select plasma glucose, A1C/fructosamine, ketone, or antibody test' },
      { label: 'Check red-cell, protein, and assay confounders', emphasis: 'key' },
      { label: 'Interpret results with clinical urgency and physiology' },
    ],
    examFindings: [
      { sign: 'Kussmaul breathing with abdominal pain and dehydration', mechanism: 'Metabolic acidosis from ketone accumulation stimulates deep respiration in DKA', significance: 'key' },
      { sign: 'Severe neurologic change with profound hyperosmolality', mechanism: 'Cellular dehydration is prominent in HHS', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Glucose, electrolytes, venous pH/bicarbonate, beta-hydroxybutyrate and osmolality', meaning: 'Classifies hyperglycemic crisis and severity' },
      { clue: 'A1C versus fructosamine', meaning: 'Selects a chronic-glycemia window compatible with blood/protein turnover' },
    ],
    treatment: [
      { logic: 'Treat hyperglycemic crisis before refining chronic classification', detail: 'Fluids, electrolyte-guided insulin, potassium monitoring, and trigger treatment are time-critical.' },
    ],
    mnemonic: { hook: 'A1C counts red-cell months; fructosamine counts protein weeks', expansion: ['Beta-hydroxybutyrate tracks DKA'] },
    trap: {
      questionCategory: 'A1C interpretation',
      wrongInstinct: 'A1C is unaffected by anemia or red-cell lifespan',
      rightAnswer: 'Any process changing erythrocyte survival can bias A1C',
      why: 'Glycation accumulates over each red cell’s circulating lifespan.',
    },
    quiz: {
      stem: 'Which marker best reflects average glycemia over approximately 2–3 weeks?',
      options: ['A1C', 'Fructosamine', 'Random glucose', 'Urine ketones'],
      answer: 1,
      explanation: 'Fructosamine reflects glycation of shorter-lived circulating proteins, predominantly albumin.',
    },
  }),

  hen1Lecture({
    id: 'hen1-islet-hormones-paracrine',
    title: 'Endocrine Pancreas & Intra-islet Paracrine Control',
    source: l8,
    tags: [
      { kind: 'mechanism', label: 'Alpha, beta, delta and PP cells' },
      { kind: 'exam', label: 'Intra-islet hormone interactions' },
    ],
    highYield: [
      'Islets occupy a small fraction of pancreatic mass but are richly vascular: **beta cells secrete insulin, alpha glucagon, delta somatostatin**, and PP/gamma cells pancreatic polypeptide.',
      'Insulin suppresses glucagon locally; glucagon can stimulate insulin and somatostatin; somatostatin inhibits both insulin and glucagon.',
      'This paracrine network coordinates the insulin-to-glucagon ratio before hormones enter systemic circulation.',
      'Islet hormones are peptides synthesized as precursors, stored in granules, and released by regulated exocytosis.',
    ],
    chainTitle: 'Neighboring islet cells coordinate the systemic metabolic signal',
    steps: [
      { label: 'Nutrient state is sensed within islet' },
      { label: 'Alpha/beta cells release glucagon or insulin' },
      { label: 'Local hormones modify neighboring cells', emphasis: 'key' },
      { label: 'Net islet output reaches liver and peripheral tissues' },
    ],
    examFindings: [
      { sign: 'Hyperglycemia after beta-cell failure', mechanism: 'Loss of insulin action increases hepatic output and decreases peripheral uptake', significance: 'key' },
      { sign: 'Impaired glucagon counterregulation in long-standing diabetes', mechanism: 'Alpha-cell response can become dysregulated with islet failure', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'C-peptide with glucose', meaning: 'Measures endogenous beta-cell secretion' },
      { clue: 'Hormone immunostaining of an islet tumor', meaning: 'Identifies the secretory cell lineage' },
    ],
    treatment: [
      { logic: 'Think in terms of hormone balance, not insulin alone', detail: 'Therapies that reduce inappropriate glucagon can complement restoration of insulin action.' },
    ],
    mnemonic: { hook: 'A = glucagon, B = insulin, D = somatostatin', expansion: ['PP cells make pancreatic polypeptide'] },
    trap: {
      questionCategory: 'Islet physiology',
      wrongInstinct: 'Each islet cell functions independently',
      rightAnswer: 'Islet hormones exert important local paracrine effects on neighboring cells',
      why: 'The islet behaves as a coordinated micro-organ.',
    },
    quiz: {
      stem: 'Which islet cell secretes somatostatin?',
      options: ['Alpha cell', 'Beta cell', 'Delta cell', 'PP cell'],
      answer: 2,
      explanation: 'Delta cells release somatostatin, which inhibits both alpha- and beta-cell secretion.',
    },
  }),

  hen1Lecture({
    id: 'hen1-glucagon-fasting-metabolism',
    title: 'Glucagon Signaling & Fasting Metabolism',
    source: l8,
    tags: [
      { kind: 'mechanism', label: 'Gs–cAMP–PKA fasting program' },
      { kind: 'exam', label: 'Hepatic glucose and ketone production' },
    ],
    highYield: [
      'Low glucose, amino acids, autonomic input, and stress can stimulate alpha-cell glucagon; glucose, insulin, somatostatin, and incretin signals suppress it.',
      'The hepatic glucagon receptor is **Gs-coupled**: cAMP–PKA phosphorylation promotes glycogenolysis and inhibits glycogen synthesis.',
      'Glucagon increases gluconeogenesis, fatty-acid oxidation, and ketogenesis while suppressing hepatic glycolysis and lipogenesis.',
      'The low insulin-to-glucagon ratio—not glucagon alone—organizes the fasting shift from storage to fuel mobilization.',
    ],
    chainTitle: 'Low insulin-to-glucagon ratio switches liver from storage to output',
    steps: [
      { label: 'Fasting lowers glucose and insulin-to-glucagon ratio' },
      { label: 'Hepatic Gs raises cAMP and PKA' },
      { label: 'Phosphorylation activates glycogenolysis and gluconeogenesis', emphasis: 'key' },
      { label: 'Fatty-acid oxidation supports ketogenesis' },
    ],
    examFindings: [
      { sign: 'Ketosis during prolonged fasting', mechanism: 'Low insulin/high glucagon directs hepatic fatty acids toward ketone production', significance: 'supportive' },
      { sign: 'Severe ketogenesis with absolute insulin deficiency', mechanism: 'Unrestrained lipolysis and glucagon action greatly accelerate hepatic ketone output', significance: 'key' },
    ],
    investigations: [
      { clue: 'Glucose, insulin/C-peptide and ketones in context', meaning: 'Defines the metabolic state better than glucagon alone' },
      { clue: 'Beta-hydroxybutyrate', meaning: 'Quantifies the dominant circulating ketone in ketoacidosis' },
    ],
    treatment: [
      { logic: 'Restore insulin action when pathologic fasting signals are unchecked', detail: 'Insulin suppresses lipolysis, ketogenesis, and hepatic glucose production.' },
    ],
    mnemonic: { hook: 'Glucagon gets glucose going', expansion: ['Glycogenolysis', 'Gluconeogenesis', 'Ketogenesis'] },
    trap: {
      questionCategory: 'Glucagon target',
      wrongInstinct: 'Glucagon is the principal direct stimulator of skeletal-muscle glycogenolysis',
      rightAnswer: 'Glucagon acts mainly on liver; skeletal muscle responds strongly to epinephrine and local energy signals',
      why: 'Skeletal muscle has little meaningful glucagon-receptor response.',
    },
    quiz: {
      stem: 'Which second messenger mediates the classic hepatic glucagon response?',
      options: ['cGMP', 'cAMP', 'IP₃ only without G protein', 'Nuclear mineralocorticoid receptor'],
      answer: 1,
      explanation: 'Glucagon activates Gs, adenylyl cyclase, cAMP, and protein kinase A.',
    },
  }),

  hen1Lecture({
    id: 'hen1-insulin-synthesis-secretion',
    title: 'Insulin Synthesis, C-peptide & Glucose-stimulated Secretion',
    source: l8,
    tags: [
      { kind: 'mechanism', label: 'ATP-sensitive K⁺ channel coupling' },
      { kind: 'exam', label: 'C-peptide and incretin effect' },
    ],
    highYield: [
      'Preproinsulin is processed to proinsulin, then cleaved into **insulin plus C-peptide** in secretory granules; endogenous release produces them in equimolar amounts.',
      'Glucose metabolism raises the beta-cell ATP/ADP ratio, closes KATP channels, depolarizes the membrane, opens voltage-gated Ca²⁺ channels, and triggers exocytosis.',
      'Oral glucose produces a larger insulin response than IV glucose because GLP-1 and GIP amplify glucose-dependent secretion (the incretin effect).',
      'Sulfonylureas close KATP channels; GLP-1 receptor agonists and DPP-4 inhibitors enhance incretin signaling.',
    ],
    chainTitle: 'Beta-cell glucose metabolism electrically couples nutrient entry to insulin release',
    steps: [
      { label: 'Glucose enters and is metabolized' },
      { label: 'ATP rises and closes KATP channel', emphasis: 'key' },
      { label: 'Depolarization opens voltage-gated Ca²⁺ channels' },
      { label: 'Ca²⁺ triggers insulin/C-peptide exocytosis' },
    ],
    examFindings: [
      { sign: 'High insulin with low C-peptide during hypoglycemia', mechanism: 'Injected insulin lacks C-peptide', significance: 'key' },
      { sign: 'Greater insulin release after oral glucose', mechanism: 'Gut incretins amplify beta-cell secretion', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Insulin, C-peptide, glucose, and sulfonylurea screen during hypoglycemia', meaning: 'Distinguishes endogenous, exogenous, and secretagogue-related insulin excess' },
      { clue: 'C-peptide after stimulation', meaning: 'Estimates residual beta-cell reserve' },
    ],
    treatment: [
      { logic: 'Target secretion only when functioning beta cells remain', detail: 'Secretagogues cannot replace absent beta-cell mass and can cause hypoglycemia.' },
    ],
    mnemonic: { hook: 'ATP shuts K, calcium opens secretion', expansion: ['Insulin and C-peptide leave together'] },
    trap: {
      questionCategory: 'C-peptide',
      wrongInstinct: 'Injected insulin raises C-peptide in parallel',
      rightAnswer: 'C-peptide marks endogenous proinsulin processing and is absent from injected insulin',
      why: 'Commercial insulin does not contain the connecting peptide.',
    },
    quiz: {
      stem: 'What directly follows closure of the beta-cell ATP-sensitive K⁺ channel?',
      options: ['Membrane hyperpolarization', 'Membrane depolarization', 'Nuclear receptor binding', 'Glucagon release'],
      answer: 1,
      explanation: 'Reduced K⁺ efflux depolarizes the beta cell, opening calcium channels and triggering insulin release.',
    },
  }),

  hen1Lecture({
    id: 'hen1-insulin-signaling-fed-metabolism',
    title: 'Insulin Receptor Signaling & Fed-state Metabolism',
    source: l8,
    tags: [
      { kind: 'mechanism', label: 'Receptor tyrosine kinase–PI3K–Akt' },
      { kind: 'exam', label: 'GLUT4 translocation and storage' },
    ],
    highYield: [
      'The insulin receptor is a **receptor tyrosine kinase**; IRS–PI3K–Akt signaling mediates many metabolic effects.',
      'Insulin recruits GLUT4 to skeletal-muscle and adipose membranes, increasing glucose uptake; liver uses GLUT2 and is regulated mainly through enzyme activity and gene expression.',
      'Insulin promotes glycogen, fatty-acid, triacylglycerol, and protein synthesis while suppressing gluconeogenesis, glycogenolysis, lipolysis, and ketogenesis.',
      'Akt-dependent phosphatase effects favor dephosphorylated fed-state enzymes, while malonyl-CoA inhibits fatty-acid entry into mitochondria.',
    ],
    chainTitle: 'Insulin converts postprandial nutrients into stored fuel',
    steps: [
      { label: 'Insulin binds receptor tyrosine kinase' },
      { label: 'IRS–PI3K–Akt pathway activates' },
      { label: 'GLUT4 translocates in muscle and adipose', emphasis: 'key' },
      { label: 'Glycogen, fat, and protein synthesis dominate' },
    ],
    examFindings: [
      { sign: 'Postprandial glucose uptake into skeletal muscle', mechanism: 'Insulin-dependent GLUT4 recruitment increases membrane transport capacity', significance: 'key' },
      { sign: 'Suppressed ketone production after insulin', mechanism: 'Insulin inhibits adipose lipolysis and hepatic fatty-acid oxidation/ketogenesis', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Fasting insulin/C-peptide with glucose in research or selected cases', meaning: 'Provides context for insulin secretion and resistance, not a stand-alone diagnosis' },
      { clue: 'Lipid and ketone profile during insulin deficiency', meaning: 'Shows failure of the fed-state storage program' },
    ],
    treatment: [
      { logic: 'Restore effective insulin signaling and reduce resistance', detail: 'Activity, weight management, insulin sensitization, and replacement address different points in the pathway.' },
    ],
    mnemonic: { hook: 'Insulin puts GLUT4 at the door and fuel in storage', expansion: ['Muscle glycogen', 'Adipose triglyceride', 'Protein synthesis'] },
    trap: {
      questionCategory: 'Glucose transporters',
      wrongInstinct: 'Insulin inserts GLUT4 into hepatocyte membranes',
      rightAnswer: 'GLUT4 is key in skeletal muscle and adipose; hepatocytes use GLUT2',
      why: 'Insulin controls hepatic metabolism through signaling and enzyme regulation rather than GLUT4 translocation.',
    },
    quiz: {
      stem: 'Which tissues use insulin-stimulated GLUT4 translocation?',
      options: ['Liver and brain', 'Skeletal muscle and adipose tissue', 'Kidney and thyroid', 'Intestinal lumen and liver'],
      answer: 1,
      explanation: 'GLUT4 is the insulin-responsive transporter in skeletal muscle and adipocytes.',
    },
  }),

  hen1Lecture({
    id: 'hen1-adipokines-obesity-insulin-resistance',
    title: 'Adipokines, Obesity & Insulin Resistance',
    source: l8,
    tags: [
      { kind: 'mechanism', label: 'Adipose endocrine signaling' },
      { kind: 'exam', label: 'Leptin and adiponectin' },
    ],
    highYield: [
      'White adipose tissue stores energy and secretes adipokines; brown/beige adipocytes dissipate energy through UCP1-mediated uncoupling.',
      'Leptin rises with fat mass and signals energy sufficiency to hypothalamus, reducing appetite and supporting energy expenditure; common obesity features **leptin resistance**.',
      'Adiponectin generally improves insulin sensitivity, fatty-acid oxidation, and anti-inflammatory signaling; levels often fall with visceral obesity.',
      'Adipocyte hypertrophy, hypoxia, macrophage recruitment, inflammatory cytokines, and ectopic lipid impair insulin signaling in obesity.',
    ],
    chainTitle: 'Expanded stressed adipose tissue changes endocrine signals and promotes insulin resistance',
    steps: [
      { label: 'Positive energy balance enlarges adipocytes' },
      { label: 'Stress and macrophage inflammation increase' },
      { label: 'Leptin resistance rises and adiponectin falls', emphasis: 'key' },
      { label: 'Muscle/liver insulin signaling deteriorates' },
    ],
    examFindings: [
      { sign: 'High leptin despite persistent obesity', mechanism: 'Common obesity is usually leptin-resistant rather than leptin-deficient', significance: 'key' },
      { sign: 'Fatty liver with metabolic syndrome', mechanism: 'Ectopic lipid and adipose inflammation accompany systemic insulin resistance', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Waist, blood pressure, glucose and lipid profile', meaning: 'Assesses the clinical cardiometabolic phenotype' },
      { clue: 'Adipokine levels mainly in research/special cases', meaning: 'Leptin/adiponectin physiology explains disease but routine diagnosis uses clinical markers' },
    ],
    treatment: [
      { logic: 'Reduce dysfunctional adipose burden and improve tissue insulin action', detail: 'Sustained energy-balance change and selected anti-obesity therapies improve adipokine and inflammatory signaling.' },
    ],
    mnemonic: { hook: 'Leptin reports fat; adiponectin improves sensitivity', expansion: ['Obesity: leptin high but resisted, adiponectin low'] },
    trap: {
      questionCategory: 'Obesity endocrinology',
      wrongInstinct: 'Most obesity is caused by absent leptin',
      rightAnswer: 'Most common obesity has elevated leptin with central leptin resistance',
      why: 'Leptin concentration generally reflects expanded fat mass.',
    },
    quiz: {
      stem: 'Which adipokine is generally decreased in visceral obesity and supports insulin sensitivity?',
      options: ['Leptin', 'Adiponectin', 'Glucagon', 'Aldosterone'],
      answer: 1,
      explanation: 'Adiponectin promotes insulin sensitivity and fatty-acid oxidation and often falls in obesity.',
    },
  }),
];
