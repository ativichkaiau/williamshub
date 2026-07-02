import { hen1Lecture } from './hen1-shared';

const l4 = 'L4 — Development & Anatomy of Thyroid, Parathyroid Glands & Pancreatic Islets';
const l5 = 'L5 — Metabolism & Function of Thyroid Gland';
const l6 = 'L6 — Calcium, Phosphate & Vitamin D Metabolism';

export const hen1ThyroidParathyroid = [
  hen1Lecture({
    id: 'hen1-thyroid-gross-anatomy',
    title: 'Thyroid Gross Anatomy, Blood Supply & Surgical Relations',
    source: l4,
    tags: [
      { kind: 'mechanism', label: 'Anterior-neck endocrine anatomy' },
      { kind: 'exam', label: 'Laryngeal nerve relations' },
    ],
    highYield: [
      'The thyroid has two lateral lobes joined by an isthmus, usually over the second to fourth tracheal rings; a pyramidal lobe may extend superiorly.',
      'Superior thyroid arteries arise from external carotids; inferior thyroid arteries usually arise from thyrocervical trunks. A thyroid ima artery is an important midline variant.',
      'The **recurrent laryngeal nerve** runs near the inferior thyroid artery and posteromedial gland; the external branch of the superior laryngeal nerve lies near superior-pole vessels.',
      'Dense venous and lymphatic networks reflect the gland’s high blood flow and matter during surgery.',
    ],
    chainTitle: 'Surgical risk follows the vessels and nerves at each thyroid pole',
    steps: [
      { label: 'Superior pole receives superior thyroid artery' },
      { label: 'External superior laryngeal nerve lies nearby' },
      { label: 'Inferior pole receives inferior thyroid artery' },
      { label: 'Recurrent laryngeal nerve courses posteromedially', emphasis: 'key' },
    ],
    examFindings: [
      { sign: 'Hoarseness after thyroid surgery', mechanism: 'Recurrent laryngeal nerve injury impairs vocal-fold movement', significance: 'key' },
      { sign: 'Weak high-pitched phonation', mechanism: 'External superior laryngeal injury weakens cricothyroid tension', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Pre-/postoperative laryngoscopy', meaning: 'Documents vocal-fold function when nerve injury is a concern' },
      { clue: 'Neck ultrasound', meaning: 'Defines thyroid morphology, nodules, and nearby cervical nodes' },
    ],
    treatment: [
      { logic: 'Identify nerve and parathyroid anatomy during surgery', detail: 'Careful capsular dissection protects voice and calcium homeostasis.' },
    ],
    mnemonic: { hook: 'Superior pole: superior laryngeal; inferior pole: recurrent laryngeal', expansion: ['Ligate close with anatomy in view'] },
    trap: {
      questionCategory: 'Thyroid surgical anatomy',
      wrongInstinct: 'Both laryngeal nerves have the same relation to thyroid arteries',
      rightAnswer: 'External superior laryngeal relates to superior-pole vessels; recurrent laryngeal relates to inferior/posterior anatomy',
      why: 'Their different courses create different voice deficits and operative risks.',
    },
    quiz: {
      stem: 'Which nerve is most closely associated with the inferior thyroid artery near the gland?',
      options: ['Hypoglossal nerve', 'Recurrent laryngeal nerve', 'Phrenic nerve', 'Greater auricular nerve'],
      answer: 1,
      explanation: 'The recurrent laryngeal nerve has a variable but intimate relationship with branches of the inferior thyroid artery.',
    },
  }),

  hen1Lecture({
    id: 'hen1-thyroid-development-anomalies',
    title: 'Thyroid Development & Congenital Variants',
    source: l4,
    tags: [
      { kind: 'mechanism', label: 'Thyroglossal duct descent' },
      { kind: 'exam', label: 'Lingual thyroid and midline cyst' },
    ],
    highYield: [
      'Thyroid follicular epithelium begins as a median endodermal diverticulum at the foramen cecum and descends anterior to the hyoid and laryngeal cartilages.',
      'The **thyroglossal duct** normally involutes; a pyramidal lobe, thyroglossal duct cyst, fistula, or ectopic thyroid can reflect persistence or abnormal migration.',
      'C cells derive from neural-crest-associated cells entering through the ultimobranchial body of the fourth pharyngeal pouch.',
      'A lingual thyroid may be the patient’s only functioning thyroid tissue and should be evaluated before excision.',
    ],
    chainTitle: 'A midline thyroid primordium descends from tongue to anterior neck',
    steps: [
      { label: 'Endoderm buds at foramen cecum' },
      { label: 'Primordium descends through thyroglossal duct' },
      { label: 'Thyroid reaches pretracheal position', emphasis: 'key' },
      { label: 'Duct involutes; ultimobranchial cells join as C cells' },
    ],
    examFindings: [
      { sign: 'Midline neck mass moving with swallowing and tongue protrusion', mechanism: 'Thyroglossal duct remnant remains connected along the descent tract', significance: 'key' },
      { sign: 'Mass at tongue base with absent cervical thyroid', mechanism: 'Failure of thyroid descent produces lingual thyroid', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Ultrasound or radionuclide scan before excision', meaning: 'Confirms normally located functioning thyroid tissue' },
      { clue: 'Midline relationship to hyoid', meaning: 'Supports thyroglossal duct origin' },
    ],
    treatment: [
      { logic: 'Confirm thyroid tissue location before removing a congenital mass', detail: 'Definitive thyroglossal-cyst treatment removes the tract and central hyoid segment after infection control.' },
    ],
    mnemonic: { hook: 'Foramen cecum to front of trachea', expansion: ['A persistent trail makes a thyroglossal cyst'] },
    trap: {
      questionCategory: 'Thyroid embryology',
      wrongInstinct: 'All thyroid cells derive from the median endodermal diverticulum',
      rightAnswer: 'Follicular cells are endodermal; C cells enter through the ultimobranchial body',
      why: 'The two populations have different developmental lineages.',
    },
    quiz: {
      stem: 'A thyroglossal duct cyst characteristically moves with which action?',
      options: ['Shoulder abduction', 'Tongue protrusion', 'Jaw closure', 'Eye elevation'],
      answer: 1,
      explanation: 'Attachment along the foramen-cecum/hyoid descent tract makes the mass move with swallowing and tongue protrusion.',
    },
  }),

  hen1Lecture({
    id: 'hen1-thyroid-histology',
    title: 'Thyroid Follicles, Colloid & C Cells',
    source: l4,
    tags: [
      { kind: 'mechanism', label: 'Extracellular hormone storage' },
      { kind: 'exam', label: 'Follicular activity and scalloping' },
    ],
    highYield: [
      'Thyroid follicles are spherical units lined by simple epithelium and filled with **thyroglobulin-rich colloid**, the extracellular storage site for thyroid hormone precursor.',
      'Follicular cells flatten when inactive and become cuboidal/columnar with increased activity; apical resorption vacuoles can scallop colloid.',
      'Parafollicular C cells lie within the basal follicular epithelium or interfollicular clusters, do not contact colloid, and secrete calcitonin.',
      'A delicate reticular network and fenestrated capillaries support rapid exchange around follicles.',
    ],
    chainTitle: 'Follicular polarity supports synthesis into and retrieval from colloid',
    steps: [
      { label: 'Basolateral membrane traps iodide' },
      { label: 'Apical surface iodinate thyroglobulin in colloid' },
      { label: 'Stimulated cell endocytoses colloid', emphasis: 'key' },
      { label: 'T3/T4 leave basolaterally for capillaries' },
    ],
    examFindings: [
      { sign: 'Tall crowded follicular cells with scalloped colloid', mechanism: 'Active colloid resorption in hyperstimulated thyroid tissue', significance: 'key' },
      { sign: 'Pale parafollicular cells outside colloid lumen', mechanism: 'C cells secrete calcitonin rather than thyroid hormone', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Follicle size, epithelial height, and colloid edge', meaning: 'Indicate functional activity pattern' },
      { clue: 'Calcitonin immunostaining', meaning: 'Identifies C-cell lineage' },
    ],
    treatment: [
      { logic: 'Connect microanatomy to secretory direction', detail: 'Thyroid is unusual because synthesis and storage occur partly outside the cell in follicular colloid.' },
    ],
    mnemonic: { hook: 'Follicular cells face colloid; C cells make calcitonin', expansion: ['Scalloped colloid signals active retrieval'] },
    trap: {
      questionCategory: 'Thyroid storage',
      wrongInstinct: 'T3 and T4 are stored in intracellular secretory granules',
      rightAnswer: 'Iodinated hormone residues are stored extracellularly within thyroglobulin in colloid',
      why: 'Thyroid follicles uniquely maintain a large extracellular hormone reserve.',
    },
    quiz: {
      stem: 'Which thyroid cell secretes calcitonin?',
      options: ['Follicular cell', 'Parafollicular C cell', 'Chief cell', 'Oxyphil cell'],
      answer: 1,
      explanation: 'Parafollicular C cells produce calcitonin and are distinct from T3/T4-producing follicular cells.',
    },
  }),

  hen1Lecture({
    id: 'hen1-parathyroid-anatomy-development-histology',
    title: 'Parathyroid Development, Anatomy & Histology',
    source: l4,
    tags: [
      { kind: 'mechanism', label: 'Pharyngeal pouch migration' },
      { kind: 'exam', label: 'Chief and oxyphil cells' },
    ],
    highYield: [
      '**Superior parathyroids derive from dorsal fourth pouch** and migrate a short distance; **inferior glands derive from dorsal third pouch** and descend with thymus, so their location is more variable.',
      'Most people have four small glands on the posterior thyroid, but ectopic inferior glands may lie along the thymic descent path into mediastinum.',
      'Chief cells secrete PTH and are the dominant functional cells; larger eosinophilic oxyphil cells increase with age and contain many mitochondria.',
      'Adipose tissue increases in normal adult parathyroid, helping distinguish it from thyroid and some hypercellular lesions.',
    ],
    chainTitle: 'Different pouch origins predict parathyroid position and variability',
    steps: [
      { label: 'Third pouch forms inferior parathyroid plus thymus' },
      { label: 'Fourth pouch forms superior parathyroid' },
      { label: 'Inferior glands descend farther and vary more', emphasis: 'key' },
      { label: 'Chief cells regulate extracellular calcium through PTH' },
    ],
    examFindings: [
      { sign: 'Ectopic mediastinal parathyroid adenoma', mechanism: 'Inferior gland followed thymic descent beyond usual position', significance: 'key' },
      { sign: 'Small eosinophilic cell clusters among chief cells', mechanism: 'Oxyphil cells are mitochondria-rich normal parathyroid cells', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Neck ultrasound plus sestamibi localization', meaning: 'Maps hyperfunctioning parathyroid tissue before surgery' },
      { clue: 'Calcium interpreted with PTH', meaning: 'Determines whether PTH response is appropriate' },
    ],
    treatment: [
      { logic: 'Use embryologic migration to search for ectopic glands', detail: 'Persistent hyperparathyroidism after exploration may reflect mediastinal or other ectopic tissue.' },
    ],
    mnemonic: { hook: 'Third goes farther', expansion: ['Third pouch → inferior parathyroid + thymus', 'Fourth → superior'] },
    trap: {
      questionCategory: 'Parathyroid naming',
      wrongInstinct: 'Superior glands arise from a higher-numbered pouch and therefore descend farther',
      rightAnswer: 'Inferior glands from the third pouch descend with thymus and are more variable',
      why: 'Adult position reflects migration distance rather than pouch number alone.',
    },
    quiz: {
      stem: 'Which parathyroid pair has the more variable final location?',
      options: ['Superior pair', 'Inferior pair', 'Both are fixed', 'Neither migrates'],
      answer: 1,
      explanation: 'Inferior parathyroids descend with the thymus from the third pouch and may be ectopic along that path.',
    },
  }),

  hen1Lecture({
    id: 'hen1-pancreatic-islet-development-histology',
    title: 'Pancreatic Islet Development & Histology',
    source: l4,
    tags: [
      { kind: 'mechanism', label: 'Endodermal pancreatic budding' },
      { kind: 'exam', label: 'Islet cell populations' },
    ],
    highYield: [
      'Pancreatic parenchyma derives from dorsal and ventral endodermal buds; duodenal rotation brings the ventral bud posteriorly to fuse with the dorsal bud.',
      'The **ventral bud** contributes uncinate process and inferior head; the **dorsal bud** contributes the remaining head, body, and tail.',
      'Pale, richly vascular islets are scattered within darker exocrine acini. Beta cells secrete insulin, alpha glucagon, delta somatostatin, and PP cells pancreatic polypeptide.',
      'Endocrine products enter fenestrated capillaries, while exocrine secretions flow through ducts.',
    ],
    chainTitle: 'Fused pancreatic buds generate exocrine acini and endocrine islets',
    steps: [
      { label: 'Dorsal and ventral endodermal buds emerge' },
      { label: 'Ventral bud rotates with duodenum' },
      { label: 'Buds fuse and endocrine cells differentiate', emphasis: 'key' },
      { label: 'Islet hormones enter fenestrated capillaries' },
    ],
    examFindings: [
      { sign: 'Pancreatic tissue encircling the duodenum', mechanism: 'Abnormal ventral-bud migration causes annular pancreas', significance: 'key' },
      { sign: 'Pale cell island within serous acini', mechanism: 'Islet of Langerhans forms the endocrine pancreas', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Hormone immunostaining', meaning: 'Identifies alpha, beta, delta, or PP-cell products' },
      { clue: 'Cross-sectional imaging of duodenal obstruction', meaning: 'May demonstrate annular pancreatic tissue' },
    ],
    treatment: [
      { logic: 'Separate endocrine from exocrine pancreatic function', detail: 'Islet failure affects glucose regulation; acinar/duct failure affects digestion and bicarbonate secretion.' },
    ],
    mnemonic: { hook: 'Beta insulin, alpha glucagon, delta somatostatin', expansion: ['Pale islets sit in dark acini'] },
    trap: {
      questionCategory: 'Pancreatic embryology',
      wrongInstinct: 'The dorsal bud forms the uncinate process',
      rightAnswer: 'The ventral bud forms the uncinate process and inferior pancreatic head',
      why: 'It rotates posteriorly and fuses with the larger dorsal component.',
    },
    quiz: {
      stem: 'Which pancreatic islet cell is the principal source of insulin?',
      options: ['Alpha cell', 'Beta cell', 'Delta cell', 'PP cell'],
      answer: 1,
      explanation: 'Beta cells are the predominant islet population and secrete insulin.',
    },
  }),

  hen1Lecture({
    id: 'hen1-thyroid-hormone-synthesis',
    title: 'Thyroid Hormone Synthesis, Storage & Release',
    source: l5,
    tags: [
      { kind: 'mechanism', label: 'Iodide trapping and organification' },
      { kind: 'exam', label: 'NIS, TPO and thyroglobulin' },
    ],
    highYield: [
      'Basolateral **Na⁺/I⁻ symporter (NIS)** traps iodide; apical transport moves it into colloid, where **thyroid peroxidase (TPO)** oxidizes iodide and organifies thyroglobulin tyrosines.',
      'Iodination forms MIT and DIT; TPO couples DIT+DIT → T4 and MIT+DIT → T3 within thyroglobulin.',
      'TSH stimulates nearly every step. Colloid is endocytosed and lysosomally proteolyzed, releasing T4/T3 while MIT/DIT are deiodinated and recycled.',
      'T4 is the major secreted product; peripheral tissues convert it to active T3 or inactive reverse T3.',
    ],
    chainTitle: 'Iodide is trapped, attached, coupled, stored, and reclaimed',
    steps: [
      { label: 'NIS traps iodide into follicular cell' },
      { label: 'TPO oxidizes and organifies iodide on thyroglobulin', emphasis: 'key' },
      { label: 'MIT/DIT coupling forms T3/T4 in colloid' },
      { label: 'Endocytosis and proteolysis release hormone' },
    ],
    examFindings: [
      { sign: 'Low uptake after NIS inhibition', mechanism: 'Follicular cells cannot efficiently trap iodide', significance: 'supportive' },
      { sign: 'Autoantibodies to TPO', mechanism: 'Autoimmune thyroid injury targets a key synthesis enzyme', significance: 'key' },
    ],
    investigations: [
      { clue: 'Radioiodine uptake pattern', meaning: 'Distinguishes active synthesis from destructive hormone leakage or exogenous hormone' },
      { clue: 'TSH and free T4', meaning: 'Measure axis output rather than one synthetic intermediate' },
    ],
    treatment: [
      { logic: 'Block the appropriate synthesis step', detail: 'Thionamides inhibit TPO; propylthiouracil additionally reduces peripheral T4-to-T3 conversion.' },
    ],
    mnemonic: { hook: 'Trap, oxidize, organize, couple, cut', expansion: ['NIS traps', 'TPO organizes and couples', 'Lysosome cuts'] },
    trap: {
      questionCategory: 'Thyroid synthesis',
      wrongInstinct: 'TPO transports iodide across the basolateral membrane',
      rightAnswer: 'NIS traps iodide basolaterally; TPO oxidizes, organifies, and couples apically',
      why: 'Transport and covalent hormone synthesis use different proteins at opposite cell surfaces.',
    },
    quiz: {
      stem: 'Which enzyme catalyzes thyroid iodide oxidation and organification?',
      options: ['5′-deiodinase', 'Thyroid peroxidase', 'Na⁺/I⁻ symporter', 'Thyroglobulin'],
      answer: 1,
      explanation: 'TPO oxidizes iodide and attaches iodine to tyrosines within thyroglobulin.',
    },
  }),

  hen1Lecture({
    id: 'hen1-thyroid-transport-conversion-action',
    title: 'Thyroid Hormone Transport, Conversion & Receptor Action',
    source: l5,
    tags: [
      { kind: 'mechanism', label: 'T4 prohormone to nuclear T3 signal' },
      { kind: 'exam', label: 'TBG and deiodinases' },
    ],
    highYield: [
      'Most T4/T3 circulates protein-bound, chiefly to thyroxine-binding globulin; **only free hormone** is immediately bioactive and available for feedback.',
      'T4 has a longer half-life and serves largely as a prohormone. D1/D2 generate T3; D3 generates inactive reverse T3 and inactivates T3.',
      'T3 binds nuclear thyroid-hormone receptors that heterodimerize with RXR and regulate thyroid-response elements.',
      'Changes in TBG alter total hormone but not sustained free hormone in an intact axis; pregnancy/estrogen usually increases TBG and total T4.',
    ],
    chainTitle: 'Carrier-bound T4 supplies tissues with locally generated nuclear T3',
    steps: [
      { label: 'T4 circulates mainly on binding proteins' },
      { label: 'Free T4 enters target tissue' },
      { label: 'Deiodinase converts T4 to T3 or reverse T3', emphasis: 'key' },
      { label: 'T3–receptor complex regulates transcription' },
    ],
    examFindings: [
      { sign: 'High total T4 with normal TSH/free T4 during pregnancy', mechanism: 'Estrogen raises TBG rather than causing hyperthyroidism', significance: 'key' },
      { sign: 'Low T3 with increased reverse T3 in severe illness', mechanism: 'Peripheral deiodination shifts away from active T3', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Free T4 and TSH rather than total T4 alone', meaning: 'Avoids binding-protein confounding' },
      { clue: 'Clinical context for altered deiodination', meaning: 'Prevents overdiagnosing primary thyroid disease in severe illness' },
    ],
    treatment: [
      { logic: 'Interpret hormone values through binding and conversion physiology', detail: 'A carrier-protein change usually does not require antithyroid or replacement therapy.' },
    ],
    mnemonic: { hook: 'T4 travels; T3 talks to the nucleus', expansion: ['TBG transports', 'Deiodinases decide activity'] },
    trap: {
      questionCategory: 'Binding-protein change',
      wrongInstinct: 'High total T4 always means thyrotoxicosis',
      rightAnswer: 'Raised TBG can increase total T4 while free T4 and thyroid function remain normal',
      why: 'The axis re-equilibrates the free fraction despite a larger bound reservoir.',
    },
    quiz: {
      stem: 'Which circulating thyroid hormone acts mainly as a long-lived prohormone?',
      options: ['T3', 'T4', 'Reverse T3', 'Calcitonin'],
      answer: 1,
      explanation: 'T4 is secreted in greatest quantity and is converted peripherally to active T3.',
    },
  }),

  hen1Lecture({
    id: 'hen1-thyroid-physiologic-actions',
    title: 'Physiologic Actions of Thyroid Hormone',
    source: l5,
    tags: [
      { kind: 'mechanism', label: 'Metabolic and permissive actions' },
      { kind: 'exam', label: 'Growth, CNS and cardiovascular effects' },
    ],
    highYield: [
      'Thyroid hormone raises basal metabolic rate, oxygen consumption, heat production, carbohydrate turnover, lipolysis, and LDL clearance.',
      'It increases **β-adrenergic receptor expression** and cardiac output, producing increased heart rate, contractility, and pulse pressure when excessive.',
      'Normal hormone is essential for skeletal growth and CNS development; early severe deficiency can cause irreversible neurodevelopmental injury.',
      'Excess increases protein and bone turnover, while deficiency slows GI, neuromuscular, cardiovascular, and cognitive function.',
    ],
    chainTitle: 'Nuclear T3 programs metabolism and sensitizes tissues to catecholamines',
    steps: [
      { label: 'T3 changes metabolic-enzyme transcription' },
      { label: 'ATP turnover and thermogenesis increase' },
      { label: 'β-adrenergic responsiveness rises', emphasis: 'key' },
      { label: 'Growth, CNS, heart, muscle, and gut responses follow' },
    ],
    examFindings: [
      { sign: 'Warm skin, tremor, tachycardia, wide pulse pressure', mechanism: 'Increased thermogenesis and β-adrenergic sensitivity in excess hormone', significance: 'key' },
      { sign: 'Cold intolerance, bradycardia, constipation, delayed reflex relaxation', mechanism: 'Reduced metabolic and neuromuscular activity in deficiency', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'TSH and free T4 interpreted with symptoms', meaning: 'Links physiologic phenotype to biochemical thyroid status' },
      { clue: 'Newborn thyroid screening', meaning: 'Detects deficiency before irreversible CNS consequences' },
    ],
    treatment: [
      { logic: 'Correct hormone excess or deficiency while controlling dangerous effects', detail: 'Beta blockade rapidly reduces adrenergic symptoms in thyrotoxicosis while definitive therapy takes effect.' },
    ],
    mnemonic: { hook: 'Thyroid turns the metabolic thermostat up', expansion: ['Heart faster', 'Gut faster', 'Heat higher', 'Growth enabled'] },
    trap: {
      questionCategory: 'Thyroid cardiac effects',
      wrongInstinct: 'Thyroid hormone acts as a direct catecholamine',
      rightAnswer: 'It increases tissue responsiveness partly by upregulating β-adrenergic receptors',
      why: 'This permissive genomic effect explains why beta blockers improve many symptoms.',
    },
    quiz: {
      stem: 'Tachycardia in thyrotoxicosis is strongly related to increased expression of which receptor?',
      options: ['Muscarinic M2', 'β-adrenergic', 'Mineralocorticoid', 'V2 vasopressin'],
      answer: 1,
      explanation: 'Thyroid hormone increases β-adrenergic responsiveness in cardiovascular tissues.',
    },
  }),

  hen1Lecture({
    id: 'hen1-hpt-axis-thyroid-patterns',
    title: 'HPT Axis & Hypo-/Hyperthyroid Patterns',
    source: l5,
    tags: [
      { kind: 'mechanism', label: 'TRH–TSH–T3/T4 feedback' },
      { kind: 'exam', label: 'Primary vs central thyroid disease' },
    ],
    highYield: [
      'TRH stimulates TSH; TSH activates a Gs/cAMP receptor on follicular cells and supports synthesis, secretion, growth, and vascularity.',
      'Free T3/T4 suppress TSH and TRH. **Primary hypothyroidism causes low free T4 with high TSH**; central hypothyroidism causes low free T4 with low/inappropriately normal TSH.',
      'Primary hyperthyroidism usually causes high T4/T3 with suppressed TSH. A TSH-secreting pituitary process causes high hormone with nonsuppressed TSH.',
      'Graves disease stimulates the TSH receptor; Hashimoto disease progressively destroys follicles and commonly produces primary hypothyroidism.',
    ],
    chainTitle: 'TSH drives the thyroid until free hormone applies negative feedback',
    steps: [
      { label: 'Hypothalamic TRH stimulates thyrotroph' },
      { label: 'TSH activates follicular synthesis and growth' },
      { label: 'T4/T3 rise in circulation' },
      { label: 'Free hormone suppresses TRH and TSH', emphasis: 'key' },
    ],
    examFindings: [
      { sign: 'Diffuse goiter with eye findings and suppressed TSH', mechanism: 'TSH-receptor antibodies drive Graves hyperthyroidism', significance: 'key' },
      { sign: 'Goiter in chronic primary hypothyroidism', mechanism: 'Persistently elevated TSH stimulates follicular growth', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'TSH first, then free T4/T3 as indicated', meaning: 'Defines the common biochemical pattern and severity' },
      { clue: 'Receptor antibodies or uptake scan when etiology is unclear', meaning: 'Distinguishes Graves, nodular autonomy, thyroiditis, and exogenous hormone' },
    ],
    treatment: [
      { logic: 'Treat the cause and the hormone state', detail: 'Replacement treats failure; synthesis blockade, radioiodine, or surgery treat selected causes of excess.' },
    ],
    mnemonic: { hook: 'Primary problem makes TSH point the opposite way', expansion: ['Low thyroid → high TSH', 'High thyroid → low TSH'] },
    trap: {
      questionCategory: 'Central hypothyroidism',
      wrongInstinct: 'Normal TSH excludes hypothyroidism',
      rightAnswer: 'When free T4 is low, a normal TSH may be inappropriately normal and indicate central disease',
      why: 'A healthy pituitary should raise TSH strongly in response to low free T4.',
    },
    quiz: {
      stem: 'Which pattern is most consistent with primary hypothyroidism?',
      options: ['High free T4, low TSH', 'Low free T4, high TSH', 'Low free T4, low TSH', 'High free T4, high TSH'],
      answer: 1,
      explanation: 'Failure of the thyroid lowers free T4 and removes negative feedback, so TSH rises.',
    },
  }),

  hen1Lecture({
    id: 'hen1-calcium-phosphate-pools',
    title: 'Calcium & Phosphate Pools, Bone and Neuromuscular Effects',
    source: l6,
    tags: [
      { kind: 'mechanism', label: 'Ionized calcium homeostasis' },
      { kind: 'exam', label: 'Albumin and pH effects' },
    ],
    highYield: [
      'Plasma calcium is ionized (bioactive), albumin-bound, or complexed with anions; only **ionized Ca²⁺** is directly sensed and tightly regulated.',
      'Alkalosis increases albumin binding and lowers ionized calcium without necessarily changing total calcium, provoking paresthesias or tetany.',
      'Bone is the dominant calcium/phosphate reservoir and undergoes continuous osteoblast–osteoclast remodeling.',
      'Hypocalcemia increases neuromuscular excitability and prolongs QT; hypercalcemia causes weakness, sluggish reflexes, and shortens QT.',
    ],
    chainTitle: 'Binding, bone flux, intestine, and kidney determine ionized calcium',
    steps: [
      { label: 'Calcium enters or leaves extracellular fluid' },
      { label: 'Albumin binding and pH alter free fraction' },
      { label: 'CaSR senses ionized Ca²⁺', emphasis: 'key' },
      { label: 'PTH/vitamin D adjust bone, kidney, and intestine' },
    ],
    examFindings: [
      { sign: 'Carpopedal spasm after hyperventilation', mechanism: 'Respiratory alkalosis increases albumin binding and acutely lowers ionized calcium', significance: 'key' },
      { sign: 'Short QT with hypercalcemia', mechanism: 'Elevated extracellular calcium shortens ventricular action-potential plateau', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Ionized calcium when albumin or pH is abnormal', meaning: 'Directly measures the regulated active fraction' },
      { clue: 'Calcium, phosphate, magnesium, creatinine, PTH and vitamin D', meaning: 'Provides a mechanistic mineral profile' },
    ],
    treatment: [
      { logic: 'Treat symptomatic ionized-calcium disturbance urgently', detail: 'Then correct the cause, including magnesium deficiency, renal disease, PTH abnormality, or vitamin D deficiency.' },
    ],
    mnemonic: { hook: 'Alkalosis binds calcium', expansion: ['Ionized falls', 'Nerves fire more easily'] },
    trap: {
      questionCategory: 'Calcium interpretation',
      wrongInstinct: 'Total calcium always equals physiologically active calcium',
      rightAnswer: 'Ionized calcium is active and can change independently with albumin or pH',
      why: 'Protein binding changes the free fraction without necessarily changing the total pool.',
    },
    quiz: {
      stem: 'Why can acute respiratory alkalosis cause tetany?',
      options: ['It raises PTH instantly', 'It lowers ionized calcium by increasing albumin binding', 'It destroys bone', 'It increases phosphate excretion'],
      answer: 1,
      explanation: 'Higher pH increases negative albumin binding sites, reducing free ionized calcium and increasing neuromuscular excitability.',
    },
  }),

  hen1Lecture({
    id: 'hen1-pth-regulation-actions',
    title: 'PTH Secretion & Integrated Actions',
    source: l6,
    tags: [
      { kind: 'mechanism', label: 'CaSR-regulated PTH response' },
      { kind: 'exam', label: 'Calcium up, phosphate down' },
    ],
    highYield: [
      'Chief cells secrete 84-amino-acid PTH. Low ionized calcium reduces CaSR signaling and rapidly increases PTH; severe magnesium deficiency can impair PTH secretion/action.',
      'PTH increases distal renal Ca²⁺ reabsorption, decreases proximal phosphate reabsorption, and stimulates renal 1α-hydroxylase.',
      'PTH acts on osteoblast-lineage cells to increase RANKL and reduce OPG, indirectly promoting osteoclast formation and mineral release.',
      'Net acute effect is **higher plasma calcium and lower plasma phosphate**; calcitriol then increases intestinal absorption of both minerals.',
    ],
    chainTitle: 'Low calcium triggers a kidney–bone response that restores Ca²⁺',
    steps: [
      { label: 'Low ionized Ca²⁺ reduces CaSR activation' },
      { label: 'Parathyroid chief cell releases PTH' },
      { label: 'Kidney retains Ca²⁺, wastes phosphate, activates vitamin D', emphasis: 'key' },
      { label: 'Bone and intestine add calcium to extracellular fluid' },
    ],
    examFindings: [
      { sign: 'Hypercalcemia with hypophosphatemia', mechanism: 'PTH raises calcium while driving renal phosphate loss', significance: 'key' },
      { sign: 'Subperiosteal bone resorption in severe excess', mechanism: 'Chronic RANKL-mediated osteoclast activation', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'PTH interpreted against simultaneous calcium', meaning: 'An inappropriately high/normal PTH during hypercalcemia indicates PTH-dependent disease' },
      { clue: 'Urinary calcium and renal function', meaning: 'Refines differential and complication risk' },
    ],
    treatment: [
      { logic: 'Classify hypercalcemia as PTH-dependent or independent', detail: 'The PTH–calcium pairing determines whether to pursue parathyroid versus non-parathyroid causes.' },
    ],
    mnemonic: { hook: 'PTH saves calcium and spills phosphate', expansion: ['Kidney: Ca in, phosphate out', 'Vitamin D activated'] },
    trap: {
      questionCategory: 'PTH bone action',
      wrongInstinct: 'PTH directly binds osteoclasts to activate them',
      rightAnswer: 'PTH acts on osteoblast-lineage cells, which regulate osteoclasts through RANKL/OPG',
      why: 'Mature osteoclast activation is indirect.',
    },
    quiz: {
      stem: 'What is the typical net effect of PTH on plasma calcium and phosphate?',
      options: ['Both decrease', 'Calcium rises, phosphate falls', 'Calcium falls, phosphate rises', 'Both rise equally'],
      answer: 1,
      explanation: 'PTH retains calcium but produces strong renal phosphaturia.',
    },
  }),

  hen1Lecture({
    id: 'hen1-vitamin-d-metabolism-actions',
    title: 'Vitamin D Activation, Regulation & Actions',
    source: l6,
    tags: [
      { kind: 'mechanism', label: 'Skin–liver–kidney activation pathway' },
      { kind: 'exam', label: '25-OH vs 1,25-(OH)₂ vitamin D' },
    ],
    highYield: [
      'UVB converts skin 7-dehydrocholesterol to vitamin D3; diet supplies D2/D3. Liver 25-hydroxylation forms **25-OH vitamin D**, the main circulating storage marker.',
      'Renal 1α-hydroxylase forms active 1,25-(OH)₂ vitamin D (calcitriol); PTH and low phosphate stimulate it, while FGF23 and calcitriol inhibit it.',
      'Calcitriol binds a nuclear receptor and increases intestinal calcium and phosphate absorption; it also coordinates renal and bone mineral handling.',
      'Deficiency impairs mineralization, causing rickets in children and osteomalacia in adults with secondary hyperparathyroidism.',
    ],
    chainTitle: 'Environmental precursor becomes a kidney-regulated mineral hormone',
    steps: [
      { label: 'Skin/diet provides vitamin D precursor' },
      { label: 'Liver makes 25-OH vitamin D' },
      { label: 'Kidney 1α-hydroxylase makes calcitriol', emphasis: 'key' },
      { label: 'Intestine increases calcium and phosphate absorption' },
    ],
    examFindings: [
      { sign: 'Bowed legs or rachitic rosary in a child', mechanism: 'Deficient vitamin D impairs growth-plate mineralization', significance: 'key' },
      { sign: 'Low phosphate with elevated PTH in deficiency', mechanism: 'Secondary hyperparathyroidism causes renal phosphate wasting', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Serum 25-OH vitamin D', meaning: 'Best routine measure of body vitamin D stores' },
      { clue: 'Calcium, phosphate, ALP and PTH', meaning: 'Assesses functional severity and secondary hyperparathyroidism' },
    ],
    treatment: [
      { logic: 'Replace substrate unless activation is impaired', detail: 'Nutritional deficiency uses D2/D3; selected advanced renal or hypoparathyroid states require active analogues.' },
    ],
    mnemonic: { hook: 'Skin starts, liver stores, kidney activates', expansion: ['25-OH measures stores', '1,25-(OH)₂ acts'] },
    trap: {
      questionCategory: 'Vitamin D testing',
      wrongInstinct: '1,25-(OH)₂ vitamin D is the best screening test for nutritional deficiency',
      rightAnswer: '25-OH vitamin D best reflects stores',
      why: 'Calcitriol is tightly regulated and can remain normal or rise early through secondary PTH stimulation.',
    },
    quiz: {
      stem: 'Which vitamin D metabolite best reflects body stores?',
      options: ['Vitamin D3 in skin', '25-hydroxyvitamin D', '1,25-dihydroxyvitamin D', '7-dehydrocholesterol'],
      answer: 1,
      explanation: '25-OH vitamin D is the major circulating storage form and standard status marker.',
    },
  }),

  hen1Lecture({
    id: 'hen1-calcitonin-mineral-integration',
    title: 'Calcitonin & Integrated Mineral Homeostasis',
    source: l6,
    tags: [
      { kind: 'mechanism', label: 'C-cell response to hypercalcemia' },
      { kind: 'exam', label: 'PTH–vitamin D–calcitonin comparison' },
    ],
    highYield: [
      'Thyroid C cells secrete calcitonin when extracellular calcium rises; it inhibits osteoclast activity and can increase renal calcium excretion.',
      'Calcitonin has a **modest day-to-day role** in adult calcium balance compared with PTH and vitamin D; thyroid removal does not usually cause major chronic calcium dysregulation from calcitonin loss.',
      'PTH is the rapid defender against low calcium, calcitriol improves intestinal mineral supply, and FGF23 promotes phosphate excretion while lowering calcitriol.',
      'Calcitonin is clinically valuable as a marker of medullary thyroid C-cell disease and as a short-term antiresorptive drug in selected settings.',
    ],
    chainTitle: 'Mineral hormones coordinate intestine, kidney, and bone',
    steps: [
      { label: 'Low Ca²⁺ activates PTH; high Ca²⁺ activates calcitonin' },
      { label: 'PTH retains Ca²⁺ and activates vitamin D' },
      { label: 'Calcitriol increases intestinal mineral uptake', emphasis: 'key' },
      { label: 'Calcitonin restrains osteoclasts during high Ca²⁺' },
    ],
    examFindings: [
      { sign: 'Markedly elevated calcitonin with a thyroid nodule', mechanism: 'Medullary thyroid carcinoma arises from calcitonin-producing C cells', significance: 'key' },
      { sign: 'No severe chronic hypocalcemia from calcitonin loss alone', mechanism: 'PTH/vitamin D dominate adult homeostasis', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Calcitonin in suspected medullary thyroid disease', meaning: 'Tracks C-cell secretory burden' },
      { clue: 'Integrated calcium, phosphate, PTH and vitamin D profile', meaning: 'Identifies the dominant regulatory defect' },
    ],
    treatment: [
      { logic: 'Use calcitonin for rapid temporary antiresorptive effect', detail: 'Tachyphylaxis limits sustained efficacy, so definitive treatment of hypercalcemia requires other measures.' },
    ],
    mnemonic: { hook: 'PTH protects against low calcium; calcitonin counters high calcium', expansion: ['Vitamin D feeds the pool'] },
    trap: {
      questionCategory: 'Calcitonin importance',
      wrongInstinct: 'Calcitonin is the essential minute-to-minute regulator of adult calcium',
      rightAnswer: 'PTH and vitamin D are dominant; calcitonin has a smaller physiologic role',
      why: 'Deficiency or excess of calcitonin alone usually causes limited mineral disturbance.',
    },
    quiz: {
      stem: 'Calcitonin is secreted by which cell type?',
      options: ['Parathyroid chief cell', 'Thyroid parafollicular C cell', 'Thyroid follicular cell', 'Adrenal chromaffin cell'],
      answer: 1,
      explanation: 'Parafollicular C cells respond to elevated calcium by releasing calcitonin.',
    },
  }),
];
