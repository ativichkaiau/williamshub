import { hen1Lecture } from './hen1-shared';

const l9 = 'L9 — Development & Anatomy of Adrenal Gland';
const l10 = 'L10 — Metabolism & Function of Adrenal Gland';

export const hen1Adrenal = [
  hen1Lecture({
    id: 'hen1-adrenal-gross-anatomy-vasculature',
    title: 'Adrenal Gross Anatomy, Relations & Vasculature',
    source: l9,
    tags: [
      { kind: 'mechanism', label: 'Suprarenal retroperitoneal anatomy' },
      { kind: 'exam', label: 'Arterial supply and asymmetric veins' },
    ],
    highYield: [
      'Adrenal glands are retroperitoneal within renal fascia at the superior renal poles; the right is pyramidal and closely related to IVC/liver, while the left is semilunar near stomach, pancreas, and spleen.',
      'Three arterial sources supply each gland: superior suprarenal arteries from inferior phrenic, middle from aorta, and inferior from renal artery.',
      'Each gland has **one central vein**: short right suprarenal vein drains directly to IVC; longer left vein drains to left renal vein, often with inferior phrenic vein.',
      'A subcapsular arterial plexus supplies cortical sinusoids and medullary vessels, exposing medulla to cortisol-rich cortical blood.',
    ],
    chainTitle: 'Rich arterial inflow converges on one clinically asymmetric central vein',
    steps: [
      { label: 'Three arterial groups enter capsule' },
      { label: 'Cortical sinusoids traverse steroidogenic zones' },
      { label: 'Blood reaches catecholamine-producing medulla' },
      { label: 'Single central vein exits to IVC or renal vein', emphasis: 'key' },
    ],
    examFindings: [
      { sign: 'Greater operative risk at the short right adrenal vein', mechanism: 'It drains directly into the IVC with little mobilization length', significance: 'key' },
      { sign: 'Different right and left gland shapes/relations', mechanism: 'Liver/IVC constrain right gland while stomach/pancreas border the left', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Adrenal-protocol CT or MRI', meaning: 'Defines lesion morphology and vascular relations' },
      { clue: 'Hormonal testing before biopsy or surgery', meaning: 'Excludes a catecholamine-secreting lesion and identifies functional tumors' },
    ],
    treatment: [
      { logic: 'Plan surgery around venous anatomy and secretory status', detail: 'A functional adrenal mass needs endocrine preparation before operative manipulation.' },
    ],
    mnemonic: { hook: 'Right vein to IVC; left vein to renal', expansion: ['Three arteries, one vein per gland'] },
    trap: {
      questionCategory: 'Adrenal drainage',
      wrongInstinct: 'Both suprarenal veins drain symmetrically into renal veins',
      rightAnswer: 'Right drains directly to IVC; left drains to left renal vein',
      why: 'This asymmetry is a major surgical landmark.',
    },
    quiz: {
      stem: 'Where does the right suprarenal vein usually drain?',
      options: ['Portal vein', 'Inferior vena cava', 'Right gonadal vein', 'Azygos vein'],
      answer: 1,
      explanation: 'The short right suprarenal vein drains directly into the IVC.',
    },
  }),

  hen1Lecture({
    id: 'hen1-adrenal-cortex-histology-zones',
    title: 'Adrenal Cortex Histology & Functional Zones',
    source: l9,
    tags: [
      { kind: 'mechanism', label: 'Zonal steroid specialization' },
      { kind: 'exam', label: 'GFR: salt, sugar, sex' },
    ],
    highYield: [
      'The adrenal cortex forms 80–90% of the gland and has three zones: **glomerulosa, fasciculata, and reticularis**.',
      'Zona glomerulosa forms rounded clusters beneath capsule and makes aldosterone; it lacks CYP17 activity.',
      'Zona fasciculata is the broadest zone, with lipid-rich spongiocytes in straight cords, and makes cortisol.',
      'Zona reticularis forms an anastomosing network of smaller eosinophilic cells, often with lipofuscin, and makes adrenal androgens.',
    ],
    chainTitle: 'Cortical enzyme expression changes from capsule to medulla',
    steps: [
      { label: 'Zona glomerulosa: mineralocorticoid synthesis' },
      { label: 'Zona fasciculata: glucocorticoid synthesis', emphasis: 'key' },
      { label: 'Zona reticularis: androgen synthesis' },
      { label: 'Sinusoidal blood carries steroids inward' },
    ],
    examFindings: [
      { sign: 'Vacuolated pale cells in long radial cords', mechanism: 'Lipid-rich zona fasciculata supports steroid synthesis', significance: 'key' },
      { sign: 'Thin subcapsular cell clusters', mechanism: 'Zona glomerulosa produces mineralocorticoids', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Histologic zone and steroidogenic enzyme profile', meaning: 'Predicts the dominant hormone product' },
      { clue: 'Hormonal phenotype of an adrenal mass', meaning: 'Links morphology to functional cortical lineage' },
    ],
    treatment: [
      { logic: 'Use zone and enzyme pathway to predict clinical effects', detail: 'Aldosterone, cortisol, and androgen excess arise from different cortical programs.' },
    ],
    mnemonic: { hook: 'GFR: salt, sugar, sex', expansion: ['Glomerulosa', 'Fasciculata', 'Reticularis'] },
    trap: {
      questionCategory: 'Cortical zones',
      wrongInstinct: 'Zona glomerulosa produces cortisol under ACTH control',
      rightAnswer: 'Zona glomerulosa produces aldosterone, chiefly regulated by angiotensin II and potassium',
      why: 'It has a distinct enzyme and receptor profile from fasciculata.',
    },
    quiz: {
      stem: 'Which adrenal cortical zone is the main source of cortisol?',
      options: ['Zona glomerulosa', 'Zona fasciculata', 'Zona reticularis', 'Medulla'],
      answer: 1,
      explanation: 'The broad zona fasciculata produces glucocorticoids, especially cortisol.',
    },
  }),

  hen1Lecture({
    id: 'hen1-adrenal-medulla-innervation',
    title: 'Adrenal Medulla, Chromaffin Cells & Innervation',
    source: l9,
    tags: [
      { kind: 'mechanism', label: 'Modified sympathetic ganglion' },
      { kind: 'exam', label: 'Preganglionic cholinergic control' },
    ],
    highYield: [
      'The medulla contains neural-crest-derived chromaffin cells, functionally **modified postganglionic sympathetic neurons** without axons.',
      'Preganglionic sympathetic fibers pass through paravertebral/prevertebral ganglia and release acetylcholine onto nicotinic receptors of chromaffin cells.',
      'Cortisol-rich cortical blood induces PNMT, favoring conversion of norepinephrine to epinephrine in the medulla.',
      'Catecholamines enter the central vein for a rapid systemic fight-or-flight response.',
    ],
    chainTitle: 'A preganglionic sympathetic signal becomes a circulating catecholamine burst',
    steps: [
      { label: 'Stress activates thoracic sympathetic preganglionic neurons' },
      { label: 'ACh stimulates chromaffin nicotinic receptors', emphasis: 'key' },
      { label: 'Granules release epinephrine/norepinephrine' },
      { label: 'Central vein distributes catecholamines systemically' },
    ],
    examFindings: [
      { sign: 'Episodic palpitations, sweating and headache', mechanism: 'Intermittent catecholamine release from a chromaffin-cell tumor', significance: 'key' },
      { sign: 'Predominant epinephrine production in medulla', mechanism: 'Cortisol-induced PNMT methylates norepinephrine', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Plasma free or urinary fractionated metanephrines', meaning: 'Screens for sustained catecholamine metabolism from pheochromocytoma' },
      { clue: 'Biochemical confirmation before localization imaging', meaning: 'Avoids incidental-mass misclassification' },
    ],
    treatment: [
      { logic: 'Block alpha-adrenergic effects before beta blockade', detail: 'In catecholamine-secreting tumors, beta blockade first can leave unopposed vasoconstriction.' },
    ],
    mnemonic: { hook: 'Medulla is a modified sympathetic ganglion', expansion: ['Preganglionic ACh in', 'Catecholamines to blood'] },
    trap: {
      questionCategory: 'Adrenal innervation',
      wrongInstinct: 'Chromaffin cells receive postganglionic noradrenergic fibers',
      rightAnswer: 'They receive direct preganglionic cholinergic fibers',
      why: 'Chromaffin cells themselves are modified postganglionic neurons.',
    },
    quiz: {
      stem: 'Which neurotransmitter directly stimulates adrenal chromaffin cells?',
      options: ['Norepinephrine at alpha receptors', 'Acetylcholine at nicotinic receptors', 'Dopamine at D2 receptors', 'GABA at GABA-A receptors'],
      answer: 1,
      explanation: 'Preganglionic sympathetic fibers release acetylcholine onto nicotinic receptors on chromaffin cells.',
    },
  }),

  hen1Lecture({
    id: 'hen1-adrenal-development',
    title: 'Adrenal Development & Fetal Cortex',
    source: l9,
    tags: [
      { kind: 'mechanism', label: 'Mesodermal cortex and neural-crest medulla' },
      { kind: 'exam', label: 'Dual embryologic origin' },
    ],
    highYield: [
      'Adrenal **cortex derives from coelomic mesothelium/mesoderm**, while medullary chromaffin cells derive from migrating **neural crest**.',
      'Fetal cortex develops a large fetal zone that produces androgen precursors used by placenta for estrogen synthesis.',
      'A definitive cortical zone surrounds the fetal zone and later differentiates into adult cortical layers.',
      'After birth the fetal zone rapidly involutes; adult zona glomerulosa and fasciculata mature first, with reticularis developing later.',
    ],
    chainTitle: 'Mesodermal steroidogenic cells envelop migrating neural-crest chromaffin cells',
    steps: [
      { label: 'Coelomic epithelium forms fetal and definitive cortex' },
      { label: 'Neural crest migrates into cortical mass', emphasis: 'key' },
      { label: 'Chromaffin cells form medulla' },
      { label: 'Fetal zone involutes and adult zones mature after birth' },
    ],
    examFindings: [
      { sign: 'Large fetal adrenal cortex', mechanism: 'Fetal zone supplies DHEA-S precursor for placental estrogen production', significance: 'supportive' },
      { sign: 'Cortical and medullary tumors with different lineages', mechanism: 'Cortex is mesodermal; medulla is neural crest-derived', significance: 'key' },
    ],
    investigations: [
      { clue: 'Steroid versus catecholamine biochemical phenotype', meaning: 'Reflects cortical versus medullary lineage' },
      { clue: 'Neural-crest markers in chromaffin tumors', meaning: 'Supports medullary origin' },
    ],
    treatment: [
      { logic: 'Classify adrenal lesions by developmental compartment', detail: 'Hormone workup and tumor biology differ sharply between cortical and medullary disease.' },
    ],
    mnemonic: { hook: 'Cortex from mesoderm; medulla from neural crest', expansion: ['Fetal zone feeds placental estrogen'] },
    trap: {
      questionCategory: 'Adrenal embryology',
      wrongInstinct: 'The entire adrenal gland derives from neural crest',
      rightAnswer: 'Only the medulla is neural crest-derived; cortex is mesodermal',
      why: 'The gland unites two developmentally distinct endocrine tissues.',
    },
    quiz: {
      stem: 'What is the embryologic origin of the adrenal medulla?',
      options: ['Endoderm', 'Neural crest', 'Intermediate mesoderm', 'Oral ectoderm'],
      answer: 1,
      explanation: 'Chromaffin cells migrate from neural crest into the developing mesodermal cortex.',
    },
  }),

  hen1Lecture({
    id: 'hen1-aldosterone-raas',
    title: 'Aldosterone Synthesis, Action & RAAS Control',
    source: l10,
    tags: [
      { kind: 'mechanism', label: 'Mineralocorticoid receptor and ENaC' },
      { kind: 'exam', label: 'Angiotensin II and potassium control' },
    ],
    highYield: [
      'Zona glomerulosa produces aldosterone via aldosterone synthase. **Angiotensin II and high plasma K⁺ are the major stimulators**; ACTH has only a minor transient role.',
      'Aldosterone binds intracellular mineralocorticoid receptors in distal nephron, increasing ENaC, Na⁺/K⁺-ATPase, K⁺ secretion, and H⁺ secretion.',
      '11β-HSD2 protects the renal receptor by converting cortisol to cortisone; licorice-like inhibition permits cortisol-mediated mineralocorticoid effects.',
      'Net effect is sodium retention, extracellular-volume support, and increased K⁺/H⁺ loss; water follows only when ADH and nephron conditions permit.',
    ],
    chainTitle: 'Low perfusion or high potassium activates mineralocorticoid sodium recovery',
    steps: [
      { label: 'Renin–angiotensin II rises or plasma K⁺ increases' },
      { label: 'Glomerulosa synthesizes aldosterone' },
      { label: 'MR increases ENaC and Na⁺/K⁺-ATPase', emphasis: 'key' },
      { label: 'Na⁺ retained while K⁺ and H⁺ are secreted' },
    ],
    examFindings: [
      { sign: 'Hypertension, hypokalemia and metabolic alkalosis', mechanism: 'Excess mineralocorticoid action retains Na⁺ and increases K⁺/H⁺ secretion', significance: 'key' },
      { sign: 'No prominent peripheral edema in primary aldosteronism', mechanism: 'Pressure natriuresis and escape limit continued volume expansion', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Aldosterone-to-renin ratio under standardized conditions', meaning: 'Screens for autonomous aldosterone production' },
      { clue: 'Potassium and acid–base status', meaning: 'Shows downstream mineralocorticoid effect' },
    ],
    treatment: [
      { logic: 'Block aldosterone action or remove autonomous source', detail: 'MR antagonists treat bilateral disease; selected unilateral adenomas may be surgically cured.' },
    ],
    mnemonic: { hook: 'Aldosterone saves sodium, sends out potassium and acid', expansion: ['Angiotensin and K⁺ turn it on'] },
    trap: {
      questionCategory: 'Aldosterone regulation',
      wrongInstinct: 'ACTH is the principal long-term regulator of aldosterone',
      rightAnswer: 'Angiotensin II and plasma K⁺ dominate aldosterone regulation',
      why: 'Glomerulosa physiology is largely governed by volume and potassium homeostasis.',
    },
    quiz: {
      stem: 'Which pair most strongly stimulates aldosterone secretion?',
      options: ['TSH and T3', 'Angiotensin II and high K⁺', 'Dopamine and low glucose', 'ANP and high volume'],
      answer: 1,
      explanation: 'Angiotensin II and elevated plasma potassium are the major physiologic aldosterone stimuli.',
    },
  }),

  hen1Lecture({
    id: 'hen1-cortisol-hpa-axis',
    title: 'Cortisol Synthesis, Transport & HPA-axis Regulation',
    source: l10,
    tags: [
      { kind: 'mechanism', label: 'CRH–ACTH–cortisol axis' },
      { kind: 'exam', label: 'Circadian rhythm and steroid suppression' },
    ],
    highYield: [
      'Zona fasciculata converts cholesterol to cortisol. ACTH stimulates acute cholesterol delivery through **StAR** and supports chronic steroidogenic enzyme expression.',
      'CRH→ACTH→cortisol follows circadian and pulsatile rhythms, typically peaking near waking and reaching a nadir near midnight; stress increases output.',
      'Most cortisol circulates bound to corticosteroid-binding globulin and albumin; hepatic metabolism/conjugation supports urinary excretion.',
      'Cortisol negatively feeds back on pituitary and hypothalamus. Chronic exogenous glucocorticoids suppress CRH/ACTH and cause fasciculata/reticularis atrophy.',
    ],
    chainTitle: 'Circadian and stress signals drive a negatively regulated cortisol axis',
    steps: [
      { label: 'Hypothalamus releases CRH' },
      { label: 'Corticotroph releases ACTH' },
      { label: 'ACTH mobilizes cholesterol and cortisol synthesis', emphasis: 'key' },
      { label: 'Cortisol feeds back on CRH and ACTH' },
    ],
    examFindings: [
      { sign: 'Adrenal crisis after abrupt withdrawal of chronic steroids', mechanism: 'Suppressed HPA axis cannot promptly restore endogenous cortisol', significance: 'key' },
      { sign: 'Low ACTH with cortical atrophy after long treatment', mechanism: 'Exogenous glucocorticoid feedback removes trophic ACTH drive', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Time-specific cortisol interpreted with ACTH', meaning: 'Accounts for circadian rhythm and localizes primary versus central deficiency' },
      { clue: 'Dynamic stimulation or suppression testing', meaning: 'Assesses adrenal reserve or autonomous cortisol production' },
    ],
    treatment: [
      { logic: 'Taper chronic glucocorticoids when physiologically safe', detail: 'Gradual reduction allows HPA recovery; acute stress may require temporary dose escalation.' },
    ],
    mnemonic: { hook: 'CRH → ACTH → cortisol → feedback', expansion: ['Morning high', 'Midnight low', 'Stress raises'] },
    trap: {
      questionCategory: 'Exogenous steroid effect',
      wrongInstinct: 'Long-term glucocorticoids enlarge the ACTH-dependent cortex',
      rightAnswer: 'They suppress ACTH and cause fasciculata/reticularis atrophy',
      why: 'Trophic pituitary drive is removed by negative feedback.',
    },
    quiz: {
      stem: 'Why can abrupt cessation of chronic glucocorticoids cause adrenal insufficiency?',
      options: ['Aldosterone becomes autonomous', 'The HPA axis is suppressed and cortex is atrophic', 'Catecholamines cannot bind receptors', 'Renin is permanently absent'],
      answer: 1,
      explanation: 'Chronic feedback suppression reduces CRH/ACTH and adrenal cortisol-producing capacity.',
    },
  }),

  hen1Lecture({
    id: 'hen1-cortisol-systemic-actions',
    title: 'Cortisol Metabolic, Stress & Anti-inflammatory Actions',
    source: l10,
    tags: [
      { kind: 'mechanism', label: 'Glucocorticoid receptor transcription' },
      { kind: 'exam', label: 'Cushing physiology' },
    ],
    highYield: [
      'Cortisol binds **intracellular glucocorticoid receptors** and changes gene expression; permissive actions maintain vascular responsiveness to catecholamines during stress.',
      'It raises glucose through hepatic gluconeogenesis and insulin resistance, mobilizes amino acids and lipids, and redistributes fuel toward vital organs.',
      'It suppresses inflammatory transcription, cytokines, leukocyte trafficking, fibroblasts, and immune responses.',
      'Chronic excess causes muscle wasting, thin skin, bruising, osteoporosis, hyperglycemia, hypertension, infection risk, mood change, and reproductive suppression.',
    ],
    chainTitle: 'Cortisol preserves acute stress capacity at a chronic tissue cost',
    steps: [
      { label: 'Cortisol–receptor complex enters nucleus' },
      { label: 'Glucose availability and vascular responsiveness rise', emphasis: 'key' },
      { label: 'Inflammatory and immune programs are suppressed' },
      { label: 'Chronic exposure produces catabolic complications' },
    ],
    examFindings: [
      { sign: 'Proximal weakness, thin skin and purple striae', mechanism: 'Chronic protein catabolism and impaired collagen formation', significance: 'key' },
      { sign: 'Neutrophilia with lymphopenia/eosinopenia', mechanism: 'Glucocorticoids redistribute leukocytes and suppress immune populations', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Late-night salivary cortisol, 24-hour urinary free cortisol, or dexamethasone suppression', meaning: 'Tests loss of normal cortisol regulation when Cushing syndrome is suspected' },
      { clue: 'Glucose, bone and infection assessment', meaning: 'Measures systemic consequences of chronic excess' },
    ],
    treatment: [
      { logic: 'Separate physiologic replacement from pharmacologic excess', detail: 'Use the lowest effective anti-inflammatory dose and protect against predictable metabolic/bone complications.' },
    ],
    mnemonic: { hook: 'Cortisol raises fuel and pressure, lowers inflammation and tissue building', expansion: ['Useful acutely', 'Catabolic chronically'] },
    trap: {
      questionCategory: 'Cortisol cardiovascular effect',
      wrongInstinct: 'Cortisol lowers blood pressure by blocking catecholamines',
      rightAnswer: 'Cortisol permits vascular catecholamine responsiveness and supports pressure',
      why: 'Deficiency can cause hypotension despite intact catecholamine production.',
    },
    quiz: {
      stem: 'Which chronic finding is most consistent with cortisol excess?',
      options: ['Increased collagen and thick skin', 'Proximal muscle weakness', 'Persistent hypoglycemia', 'Low infection risk'],
      answer: 1,
      explanation: 'Glucocorticoid protein catabolism causes characteristic proximal myopathy.',
    },
  }),

  hen1Lecture({
    id: 'hen1-adrenal-androgens',
    title: 'Adrenal Androgens & Zona Reticularis',
    source: l10,
    tags: [
      { kind: 'mechanism', label: 'DHEA/DHEAS precursor biology' },
      { kind: 'exam', label: 'Adrenarche and virilization' },
    ],
    highYield: [
      'Zona reticularis produces **DHEA, DHEAS, and androstenedione** under ACTH influence; DHEAS is abundant, protein-bound, and longer-lived.',
      'These are weak androgens but serve as peripheral precursors for testosterone and estrogens.',
      'Adrenal androgens contribute to pubic/axillary hair and libido, particularly in females; their role is smaller in adult males with testicular testosterone.',
      'Marked androgen excess in a female or child suggests congenital adrenal hyperplasia or an androgen-secreting adrenal lesion.',
    ],
    chainTitle: 'ACTH-driven reticularis precursors become active sex steroids in peripheral tissues',
    steps: [
      { label: 'ACTH supports zona reticularis steroidogenesis' },
      { label: 'DHEA/DHEAS and androstenedione enter blood' },
      { label: 'Peripheral enzymes form testosterone or estrogens', emphasis: 'key' },
      { label: 'Hair, libido, and virilizing effects follow with excess' },
    ],
    examFindings: [
      { sign: 'Rapid virilization with very high DHEAS', mechanism: 'DHEAS strongly suggests an adrenal androgen source', significance: 'key' },
      { sign: 'Adrenarche before gonadal puberty', mechanism: 'Maturation of zona reticularis raises adrenal androgen output', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'DHEAS, testosterone, 17-hydroxyprogesterone', meaning: 'Distinguishes adrenal source and screens common CAH pathways' },
      { clue: 'Adrenal imaging after biochemical localization', meaning: 'Searches for a structural androgen source' },
    ],
    treatment: [
      { logic: 'Treat the steroidogenic source', detail: 'Management differs for ACTH-driven enzyme defects versus autonomous adrenal tumors.' },
    ],
    mnemonic: { hook: 'Reticularis releases reproductive precursors', expansion: ['DHEA and DHEAS'] },
    trap: {
      questionCategory: 'Androgen source',
      wrongInstinct: 'DHEAS is produced mainly by ovaries',
      rightAnswer: 'DHEAS is predominantly adrenal',
      why: 'High DHEAS is therefore useful for localizing androgen excess to adrenal tissue.',
    },
    quiz: {
      stem: 'Which hormone is most useful as a marker of adrenal androgen production?',
      options: ['DHEAS', 'TSH', 'Calcitonin', 'Insulin'],
      answer: 0,
      explanation: 'DHEAS is produced predominantly by the adrenal zona reticularis and has a relatively long half-life.',
    },
  }),

  hen1Lecture({
    id: 'hen1-adrenal-catecholamines',
    title: 'Adrenal Catecholamine Synthesis, Action & Metabolism',
    source: l10,
    tags: [
      { kind: 'mechanism', label: 'Tyrosine-to-epinephrine pathway' },
      { kind: 'exam', label: 'Adrenergic receptor physiology' },
    ],
    highYield: [
      'Catecholamine synthesis proceeds tyrosine → DOPA → dopamine → norepinephrine → epinephrine; **tyrosine hydroxylase is rate-limiting** and PNMT forms epinephrine.',
      'Stress-triggered preganglionic ACh causes granule exocytosis. Epinephrine predominates in normal adrenal output because cortical cortisol induces PNMT.',
      'Alpha-1 receptors vasoconstrict, beta-1 increases cardiac rate/force, beta-2 bronchodilates and vasodilates selected beds, and beta receptors support fuel mobilization.',
      'COMT and MAO metabolize catecholamines to metanephrines and final products such as VMA; metanephrines provide stable diagnostic markers.',
    ],
    chainTitle: 'Neural stress input produces a rapid adrenergic whole-body response',
    steps: [
      { label: 'Tyrosine hydroxylase begins catecholamine synthesis' },
      { label: 'Cortisol-induced PNMT favors epinephrine' },
      { label: 'Preganglionic ACh triggers exocytosis', emphasis: 'key' },
      { label: 'Adrenergic receptors raise perfusion, ventilation, and fuel availability' },
    ],
    examFindings: [
      { sign: 'Episodic headache, sweating, palpitations and labile hypertension', mechanism: 'Catecholamine surges activate alpha- and beta-adrenergic systems', significance: 'key' },
      { sign: 'Hyperglycemia during a catecholamine surge', mechanism: 'Glycogenolysis, gluconeogenesis, glucagon, and reduced insulin action mobilize glucose', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Plasma free or 24-hour urinary fractionated metanephrines', meaning: 'Sensitive biochemical assessment for catecholamine-secreting tumor' },
      { clue: 'Imaging only after biochemical evidence in most cases', meaning: 'Prevents overcalling incidental adrenal masses' },
    ],
    treatment: [
      { logic: 'Alpha blockade precedes beta blockade before tumor surgery', detail: 'Controlling vasoconstriction first prevents unopposed alpha-mediated hypertensive crisis.' },
    ],
    mnemonic: { hook: 'Tyrosine → DOPA → dopamine → norepi → epi', expansion: ['COMT/MAO → metanephrines'] },
    trap: {
      questionCategory: 'Pheochromocytoma preparation',
      wrongInstinct: 'Start a pure beta blocker first for tachycardia',
      rightAnswer: 'Establish alpha blockade before beta blockade',
      why: 'Beta blockade first can worsen vasoconstriction through unopposed alpha activity.',
    },
    quiz: {
      stem: 'Which enzyme converts norepinephrine to epinephrine in adrenal medulla?',
      options: ['Tyrosine hydroxylase', 'PNMT', 'COMT', 'MAO'],
      answer: 1,
      explanation: 'Phenylethanolamine N-methyltransferase (PNMT) converts norepinephrine to epinephrine.',
    },
  }),
];
