import { hen1Lecture } from './hen1-shared';

const l1 = 'L1 — Introduction to Endocrinology';
const l2 = 'L2 — Development & Anatomy of Pituitary Gland & Hypothalamus';
const l3 = 'L3 — Function & Metabolism of Pituitary Gland & Hypothalamus';

export const hen1FoundationsPituitary = [
  hen1Lecture({
    id: 'hen1-endocrine-signaling-glands',
    title: 'Endocrine Signaling & Major Endocrine Glands',
    source: l1,
    tags: [
      { kind: 'mechanism', label: 'Hormone–receptor specificity' },
      { kind: 'exam', label: 'Endocrine vs paracrine signaling' },
    ],
    highYield: [
      'Endocrine cells release hormones into extracellular fluid and blood; only cells expressing the **matching receptor** respond.',
      '**Endocrine signals act at a distance, paracrine signals act locally, autocrine signals act on the secreting cell**, and neuroendocrine cells release hormones from neurons into blood.',
      'Major endocrine organs include hypothalamus–pituitary, thyroid, parathyroids, adrenals, pancreatic islets, gonads, and pineal gland; many other tissues also have endocrine functions.',
      'One hormone can affect several organs, while one target cell can integrate several hormonal inputs.',
    ],
    chainTitle: 'A circulating signal changes only receptor-bearing target cells',
    steps: [
      { label: 'Endocrine cell senses a regulated stimulus' },
      { label: 'Hormone enters extracellular fluid and blood' },
      { label: 'Hormone binds its specific target-cell receptor', emphasis: 'key' },
      { label: 'Signal transduction changes target-cell function' },
    ],
    examFindings: [
      { sign: 'Widespread effects from one small gland', mechanism: 'A circulating hormone reaches multiple receptor-bearing organs', significance: 'supportive' },
      { sign: 'Normal hormone concentration with target-organ resistance', mechanism: 'Receptor or post-receptor failure blocks the expected response', significance: 'key' },
    ],
    investigations: [
      { clue: 'Hormone level paired with target-organ response', meaning: 'Separates deficient secretion from hormone resistance' },
      { clue: 'Timing, pulsatility, and physiologic context', meaning: 'Prevents misinterpretation of dynamic endocrine signals' },
    ],
    treatment: [
      { logic: 'Localize the failed signaling step', detail: 'Replacement helps deficient production, whereas receptor resistance requires treatment of downstream consequences.' },
    ],
    mnemonic: { hook: 'Signal, circulation, receptor, response', expansion: ['No receptor, no endocrine response'] },
    trap: {
      questionCategory: 'Cell signaling',
      wrongInstinct: 'Every cell exposed to a circulating hormone must respond',
      rightAnswer: 'Only cells expressing a functional receptor respond directly',
      why: 'Blood distribution is broad, but receptor expression creates biologic specificity.',
    },
    quiz: {
      stem: 'What most directly determines whether a cell responds to a circulating hormone?',
      options: ['Its distance from the gland', 'Expression of the appropriate receptor', 'Its blood glucose concentration', 'The size of its nucleus'],
      answer: 1,
      explanation: 'A hormone can act directly only on cells with the appropriate functional receptor and signaling machinery.',
    },
  }),

  hen1Lecture({
    id: 'hen1-endocrine-feedback-loops',
    title: 'Negative Feedback, Positive Feedback & Endocrine Axes',
    source: l1,
    tags: [
      { kind: 'mechanism', label: 'Closed-loop endocrine control' },
      { kind: 'exam', label: 'Primary vs secondary dysfunction' },
    ],
    highYield: [
      '**Negative feedback** is the dominant endocrine control mode: the final hormone or physiologic response suppresses upstream secretion and stabilizes a regulated variable.',
      'Axis-driven loops use **hypothalamic releasing hormone → anterior pituitary tropic hormone → peripheral-gland hormone**, with long-loop feedback to pituitary and hypothalamus.',
      'Physiologic-response loops regulate a variable directly, such as glucose control by insulin/glucagon or effective circulating volume through RAAS.',
      'Positive feedback amplifies a process until an external endpoint terminates it, as in the estrogen-driven LH surge or oxytocin during labor.',
    ],
    chainTitle: 'Final output feeds back to restrain upstream drive',
    steps: [
      { label: 'Hypothalamus releases regulatory hormone' },
      { label: 'Pituitary releases tropic hormone' },
      { label: 'Peripheral gland releases final hormone' },
      { label: 'Final hormone suppresses pituitary and hypothalamus', emphasis: 'key' },
    ],
    examFindings: [
      { sign: 'Low target hormone with high tropic hormone', mechanism: 'Primary target-gland failure removes negative feedback', significance: 'key' },
      { sign: 'Low target hormone with low or inappropriately normal tropic hormone', mechanism: 'Pituitary or hypothalamic dysfunction', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Tropic hormone measured with final hormone', meaning: 'Localizes failure to target gland versus central axis' },
      { clue: 'Dynamic stimulation or suppression test', meaning: 'Tests feedback reserve when basal values are ambiguous' },
    ],
    treatment: [
      { logic: 'Replace the deficient final hormone after locating the lesion', detail: 'Central disease may involve several axes and requires broader pituitary assessment.' },
    ],
    mnemonic: { hook: 'Low final + high driver = gland failure', expansion: ['Low final + low driver = central failure'] },
    trap: {
      questionCategory: 'Endocrine localization',
      wrongInstinct: 'A tropic hormone inside its reference range always excludes pituitary disease',
      rightAnswer: 'A normal tropic value can be inappropriately normal when the target hormone is low',
      why: 'Feedback physiology asks whether the upstream response is appropriate, not merely whether it falls inside a population interval.',
    },
    quiz: {
      stem: 'Low free T4 with a markedly elevated TSH most strongly indicates which level of dysfunction?',
      options: ['Primary thyroid gland', 'Anterior pituitary', 'Hypothalamus', 'Thyroid-hormone receptor'],
      answer: 0,
      explanation: 'Primary thyroid failure lowers T4 and removes negative feedback, allowing TSH to rise.',
    },
  }),

  hen1Lecture({
    id: 'hen1-peptide-catecholamine-hormones',
    title: 'Peptide & Catecholamine Hormone Biology',
    source: l1,
    tags: [
      { kind: 'mechanism', label: 'Stored water-soluble hormones' },
      { kind: 'exam', label: 'Membrane receptors and short half-life' },
    ],
    highYield: [
      'Peptide hormones are synthesized as **preprohormones**, processed through ER/Golgi, stored in granules, and released by regulated exocytosis.',
      'Peptides circulate mainly free, have short half-lives, and signal through **cell-surface receptors** because they do not freely cross lipid membranes.',
      'Catecholamines derive from tyrosine, are stored in vesicles, released rapidly, circulate largely unbound, and act through membrane adrenergic receptors.',
      'Both classes commonly use second messengers and can generate rapid, amplified responses.',
    ],
    chainTitle: 'Stored hormone is released quickly and signals at the membrane',
    steps: [
      { label: 'Gene translation produces preprohormone' },
      { label: 'ER/Golgi processing forms active hormone' },
      { label: 'Stimulus raises intracellular Ca²⁺ and triggers exocytosis', emphasis: 'key' },
      { label: 'Membrane receptor activates second-messenger cascade' },
    ],
    examFindings: [
      { sign: 'Rapid onset and short-lived hormonal response', mechanism: 'Stored water-soluble hormone is released and cleared quickly', significance: 'supportive' },
      { sign: 'Prohormone fragment secreted with active hormone', mechanism: 'Granule processing releases equimolar cleavage products such as C-peptide', significance: 'key' },
    ],
    investigations: [
      { clue: 'C-peptide with insulin', meaning: 'Distinguishes endogenous insulin secretion from injected insulin' },
      { clue: 'Plasma or urinary metanephrines', meaning: 'Stable metabolites can capture episodic catecholamine excess' },
    ],
    treatment: [
      { logic: 'Use receptor and second-messenger biology to predict drug effects', detail: 'Surface-receptor agonists and antagonists can alter responses without changing hormone synthesis.' },
    ],
    mnemonic: { hook: 'Peptides are packed; catecholamines are cached', expansion: ['Both act fast at membrane receptors'] },
    trap: {
      questionCategory: 'Hormone storage',
      wrongInstinct: 'Peptide hormones are synthesized only when needed and diffuse out immediately',
      rightAnswer: 'Peptide hormones are commonly synthesized in advance, stored in granules, and released by exocytosis',
      why: 'Regulated storage supports rapid stimulus-coupled secretion.',
    },
    quiz: {
      stem: 'Which feature is most typical of a peptide hormone?',
      options: ['Synthesis from cholesterol', 'Storage in secretory granules', 'Intracellular nuclear receptor', 'Transport almost entirely on binding globulin'],
      answer: 1,
      explanation: 'Peptide hormones are processed and stored in secretory vesicles before regulated exocytosis.',
    },
  }),

  hen1Lecture({
    id: 'hen1-steroid-thyroid-hormone-biology',
    title: 'Steroid & Thyroid Hormone Biology',
    source: l1,
    tags: [
      { kind: 'mechanism', label: 'Carrier-bound lipophilic hormones' },
      { kind: 'exam', label: 'Intracellular receptors and peripheral conversion' },
    ],
    highYield: [
      'Steroid hormones derive from cholesterol, are **synthesized on demand**, diffuse across membranes, and circulate largely bound to carrier proteins.',
      'Steroid and thyroid hormones usually bind **intracellular receptors that regulate gene transcription**, producing slower-onset but longer-lasting effects.',
      'Thyroid hormone is synthesized from iodinated tyrosines and uniquely stored extracellularly in thyroglobulin-rich colloid before release.',
      'Peripheral conversion can activate or inactivate secreted hormone: T4 → T3 or reverse T3, testosterone → DHT/estradiol, and cortisol ↔ cortisone.',
    ],
    chainTitle: 'A lipophilic prohormone can be transported, converted, and transcriptionally active',
    steps: [
      { label: 'Gland synthesizes lipophilic hormone or prohormone' },
      { label: 'Binding protein carries most hormone in plasma' },
      { label: 'Free fraction enters target cell and may be converted', emphasis: 'key' },
      { label: 'Intracellular receptor changes gene expression' },
    ],
    examFindings: [
      { sign: 'Changed total hormone with normal free hormone and no symptoms', mechanism: 'Binding-protein concentration altered without changing active free fraction', significance: 'key' },
      { sign: 'Delayed but sustained response', mechanism: 'Transcription and new protein synthesis mediate much of the action', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Free hormone measured with binding-protein context', meaning: 'Avoids mistaking carrier changes for endocrine disease' },
      { clue: 'Precursor-to-product ratio', meaning: 'Can reveal altered peripheral conversion or enzyme deficiency' },
    ],
    treatment: [
      { logic: 'Account for conversion and protein binding', detail: 'A prohormone replacement may rely on tissue conversion, while carrier changes mainly alter total concentrations.' },
    ],
    mnemonic: { hook: 'Steroids start with cholesterol; thyroid starts with tyrosine', expansion: ['Both travel bound and act inside cells'] },
    trap: {
      questionCategory: 'Circulating hormone measurement',
      wrongInstinct: 'The protein-bound fraction is the fraction that directly enters cells',
      rightAnswer: 'The free fraction is immediately bioavailable; bound hormone serves as a reservoir',
      why: 'Only unbound hormone readily crosses capillaries and cell membranes.',
    },
    quiz: {
      stem: 'Which hormone is stored extracellularly as part of a large precursor protein?',
      options: ['Cortisol', 'Epinephrine', 'Thyroid hormone', 'Insulin'],
      answer: 2,
      explanation: 'T3 and T4 residues are stored within thyroglobulin in thyroid follicular colloid.',
    },
  }),

  hen1Lecture({
    id: 'hen1-hypothalamus-anatomy-nuclei',
    title: 'Hypothalamic Anatomy, Regions & Nuclei',
    source: l2,
    tags: [
      { kind: 'mechanism', label: 'Hypothalamic homeostatic integration' },
      { kind: 'exam', label: 'Supraoptic and paraventricular nuclei' },
    ],
    highYield: [
      'The **hypothalamus** forms the inferolateral walls and floor of the third ventricle, extending from lamina terminalis/optic chiasm to mammillary bodies.',
      'It integrates endocrine, autonomic, temperature, appetite, circadian, reproductive, and stress responses.',
      '**Paraventricular and supraoptic magnocellular neurons synthesize oxytocin and ADH** for axonal transport to the posterior pituitary.',
      'Parvocellular neurons release factors into the median-eminence portal circulation to regulate anterior pituitary cells.',
    ],
    chainTitle: 'Hypothalamic neurons convert neural information into endocrine output',
    steps: [
      { label: 'Central and peripheral signals reach hypothalamic nuclei' },
      { label: 'Parvocellular neurons release regulatory factors to portal blood' },
      { label: 'Magnocellular neurons send ADH/oxytocin down axons', emphasis: 'key' },
      { label: 'Pituitary output coordinates peripheral organs' },
    ],
    examFindings: [
      { sign: 'Polyuria after hypothalamic or stalk injury', mechanism: 'Disrupted ADH synthesis or axonal transport causes central diabetes insipidus', significance: 'key' },
      { sign: 'Multiple homeostatic disturbances from a small lesion', mechanism: 'Hypothalamus integrates endocrine and autonomic functions', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'MRI of hypothalamic–pituitary region', meaning: 'Defines lesions affecting nuclei, stalk, optic chiasm, or sellar structures' },
      { clue: 'Paired serum and urine osmolality', meaning: 'Assesses functional consequences of impaired ADH regulation' },
    ],
    treatment: [
      { logic: 'Replace deficient outputs while evaluating mass effect', detail: 'Hypothalamic disease can disrupt several axes and vision, so testing should not stop at one hormone.' },
    ],
    mnemonic: { hook: 'SO and PV make posterior hormones', expansion: ['Supraoptic and paraventricular synthesize ADH/oxytocin'] },
    trap: {
      questionCategory: 'Posterior pituitary origin',
      wrongInstinct: 'The posterior pituitary synthesizes ADH and oxytocin',
      rightAnswer: 'Hypothalamic neurons synthesize them; the posterior pituitary stores and releases them',
      why: 'Their axons descend through the infundibulum to terminals in the pars nervosa.',
    },
    quiz: {
      stem: 'Where are ADH and oxytocin synthesized?',
      options: ['Pars distalis cells', 'Hypothalamic magnocellular neurons', 'Pituicytes', 'Adrenal medulla'],
      answer: 1,
      explanation: 'Supraoptic and paraventricular neurons synthesize the posterior-pituitary hormones.',
    },
  }),

  hen1Lecture({
    id: 'hen1-pituitary-anatomy-development',
    title: 'Pituitary Gross Anatomy & Embryologic Development',
    source: l2,
    tags: [
      { kind: 'mechanism', label: 'Dual ectodermal origin' },
      { kind: 'exam', label: 'Rathke pouch and sellar relations' },
    ],
    highYield: [
      'The pituitary lies in the hypophyseal fossa of the sella turcica, below the optic chiasm and connected to hypothalamus by the infundibulum.',
      'Adenohypophysis derives from oral ectoderm of **Rathke pouch** and forms pars distalis, pars intermedia, and pars tuberalis.',
      '**Neurohypophysis derives from neural ectoderm of the diencephalon** and forms pars nervosa plus infundibular structures.',
      'Expansion of a sellar mass can compress the optic chiasm superiorly or cavernous-sinus structures laterally.',
    ],
    chainTitle: 'Two ectodermal primordia meet to form one pituitary gland',
    steps: [
      { label: 'Oral ectoderm evaginates as Rathke pouch' },
      { label: 'Neuroectoderm descends as infundibulum' },
      { label: 'Rathke pouch forms adenohypophysis', emphasis: 'key' },
      { label: 'Infundibulum forms neurohypophysis' },
    ],
    examFindings: [
      { sign: 'Bitemporal hemianopia', mechanism: 'Superior sellar expansion compresses crossing optic-chiasm fibers', significance: 'key' },
      { sign: 'Childhood suprasellar mass with calcification', mechanism: 'Craniopharyngioma can arise from Rathke-pouch remnants', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Pituitary MRI with contrast', meaning: 'Defines sellar/suprasellar anatomy and relation to optic chiasm' },
      { clue: 'Formal visual fields', meaning: 'Detects chiasmal compression' },
    ],
    treatment: [
      { logic: 'Assess both hormone function and mass effect', detail: 'Pituitary lesions may hypersecrete, destroy normal tissue, or compress visual pathways.' },
    ],
    mnemonic: { hook: 'Rathke rises; neural stalk descends', expansion: ['Oral ectoderm → anterior', 'Neuroectoderm → posterior'] },
    trap: {
      questionCategory: 'Pituitary embryology',
      wrongInstinct: 'Both lobes develop from the same neural ectoderm',
      rightAnswer: 'Adenohypophysis is oral ectoderm; neurohypophysis is neural ectoderm',
      why: 'Their distinct origins explain their different tissue architecture and functions.',
    },
    quiz: {
      stem: 'Rathke pouch gives rise to which structure?',
      options: ['Pars distalis', 'Median eminence', 'Optic chiasm', 'Adrenal medulla'],
      answer: 0,
      explanation: 'Oral ectoderm of Rathke pouch forms the adenohypophysis, including pars distalis.',
    },
  }),

  hen1Lecture({
    id: 'hen1-pituitary-portal-blood-supply',
    title: 'Pituitary Blood Supply & Portal System',
    source: l2,
    tags: [
      { kind: 'mechanism', label: 'Hypophyseal portal circulation' },
      { kind: 'exam', label: 'Median eminence to pars distalis' },
    ],
    highYield: [
      'Superior hypophyseal arteries form a **primary plexus at the median eminence**; portal veins carry hypothalamic factors to a secondary plexus in pars distalis.',
      'The portal system delivers **high concentrations of releasing/inhibiting hormones without dilution** in systemic blood.',
      'Inferior hypophyseal arteries chiefly supply the posterior lobe, where neurosecretory terminals release ADH and oxytocin into systemic circulation.',
      'Interruption of the stalk lowers most anterior-pituitary hormones but can raise prolactin because dopamine inhibition is removed.',
    ],
    chainTitle: 'A two-capillary portal route links hypothalamus to anterior pituitary',
    steps: [
      { label: 'Hypothalamic factors enter primary capillary plexus' },
      { label: 'Portal veins descend along pituitary stalk' },
      { label: 'Factors leave secondary plexus beside endocrine cells', emphasis: 'key' },
      { label: 'Anterior pituitary hormones enter systemic veins' },
    ],
    examFindings: [
      { sign: 'Hyperprolactinemia with pituitary-stalk compression', mechanism: 'Loss of tonic dopamine delivery disinhibits lactotrophs', significance: 'key' },
      { sign: 'Anterior pituitary ischemia after severe postpartum hemorrhage', mechanism: 'Enlarged pregnancy pituitary is vulnerable to hypoperfusion', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Full anterior-pituitary panel', meaning: 'Identifies selective or global failure after stalk or vascular injury' },
      { clue: 'MRI showing stalk thickening or transection', meaning: 'Explains impaired portal and axonal transport' },
    ],
    treatment: [
      { logic: 'Replace life-preserving hormones first', detail: 'In global pituitary failure, glucocorticoid replacement precedes thyroid hormone to avoid adrenal crisis.' },
    ],
    mnemonic: { hook: 'Superior supplies the portal system; inferior supplies posterior', expansion: ['Primary → portal → secondary'] },
    trap: {
      questionCategory: 'Stalk-section effect',
      wrongInstinct: 'All anterior-pituitary hormones fall, including prolactin',
      rightAnswer: 'Prolactin may rise because dopamine normally inhibits it',
      why: 'Most hypothalamic signals stimulate, but dopamine provides tonic prolactin inhibition.',
    },
    quiz: {
      stem: 'Why does the hypophyseal portal system improve anterior-pituitary control?',
      options: ['It oxygenates the optic chiasm', 'It delivers hypothalamic factors at high concentration', 'It synthesizes pituitary hormones', 'It drains CSF'],
      answer: 1,
      explanation: 'The portal route carries regulatory factors directly from median eminence to pars distalis before systemic dilution.',
    },
  }),

  hen1Lecture({
    id: 'hen1-pituitary-histology',
    title: 'Adenohypophysis & Neurohypophysis Histology',
    source: l2,
    tags: [
      { kind: 'mechanism', label: 'Secretory cells versus neural terminals' },
      { kind: 'exam', label: 'Acidophils, basophils and Herring bodies' },
    ],
    highYield: [
      'Pars distalis is highly cellular: **acidophils include somatotrophs/lactotrophs; basophils include corticotrophs, thyrotrophs, and gonadotrophs**; chromophobes stain weakly.',
      'Pars intermedia may contain colloid-filled remnants of Rathke pouch; pars tuberalis wraps the infundibulum.',
      'Pars nervosa is paler and contains unmyelinated hypothalamic axons, fenestrated capillaries, supporting pituicytes, and dilated **Herring bodies**.',
      'Posterior-lobe hormone cell bodies are in hypothalamus, so pars nervosa is neural tissue rather than a gland of endocrine cell cords.',
    ],
    chainTitle: 'Histologic appearance reflects glandular secretion anteriorly and axonal release posteriorly',
    steps: [
      { label: 'Pars distalis endocrine cells cluster around capillaries' },
      { label: 'Acidophil/basophil staining suggests cell class' },
      { label: 'Pars nervosa contains axons and Herring bodies', emphasis: 'key' },
      { label: 'Pituicytes support neurosecretory terminals' },
    ],
    examFindings: [
      { sign: 'Pale fibrous tissue with Herring bodies', mechanism: 'Stored neurosecretory granules identify pars nervosa', significance: 'key' },
      { sign: 'Eosinophilic endocrine cells in pars distalis', mechanism: 'Acidophils include GH- and prolactin-producing populations', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Immunohistochemistry for pituitary hormones', meaning: 'Identifies functional lineage more reliably than routine staining alone' },
      { clue: 'Reticulin architecture', meaning: 'Helps distinguish normal acini from adenomatous growth' },
    ],
    treatment: [
      { logic: 'Use lineage markers to classify pituitary lesions', detail: 'Cell color is a clue, but transcription factors and hormone staining define modern tumor lineage.' },
    ],
    mnemonic: { hook: 'Anterior has cells; posterior has axons', expansion: ['Herring bodies hold posterior hormones'] },
    trap: {
      questionCategory: 'Pituitary histology',
      wrongInstinct: 'Herring bodies are hormone-producing posterior-pituitary cells',
      rightAnswer: 'Herring bodies are dilated axon terminals storing hypothalamic neurosecretory products',
      why: 'The posterior lobe releases hormones made in hypothalamic neurons.',
    },
    quiz: {
      stem: 'Which structure is characteristic of pars nervosa?',
      options: ['Thyroid follicle', 'Herring body', 'Zona glomerulosa', 'Pancreatic acinus'],
      answer: 1,
      explanation: 'Herring bodies are dilated neurosecretory axons in the posterior pituitary.',
    },
  }),

  hen1Lecture({
    id: 'hen1-anterior-pituitary-axes',
    title: 'Anterior Pituitary Hormones & Axis Control',
    source: l3,
    tags: [
      { kind: 'mechanism', label: 'Tropic and non-tropic outputs' },
      { kind: 'exam', label: 'Hypothalamic releasing factors' },
    ],
    highYield: [
      'Anterior pituitary secretes **ACTH, TSH, LH, FSH, GH, and prolactin**; the first four chiefly regulate peripheral endocrine targets.',
      'CRH→ACTH→cortisol, TRH→TSH→T3/T4, and GnRH→LH/FSH→gonadal hormones are classic three-tier axes.',
      'GHRH stimulates and somatostatin inhibits GH; **dopamine tonically inhibits prolactin**.',
      'Final hormones exert long-loop negative feedback; pituitary hormones can provide short-loop feedback to hypothalamus.',
    ],
    chainTitle: 'Hypothalamic factors specify anterior-pituitary cell output',
    steps: [
      { label: 'Releasing/inhibiting factor reaches pars distalis' },
      { label: 'Specific pituitary lineage secretes its hormone' },
      { label: 'Tropic hormone stimulates peripheral gland', emphasis: 'key' },
      { label: 'Final hormone feeds back centrally' },
    ],
    examFindings: [
      { sign: 'Several low target hormones after sellar injury', mechanism: 'Anterior pituitary damage disrupts multiple axes', significance: 'key' },
      { sign: 'Prolactin rise from dopamine-blocking medication', mechanism: 'Removal of tonic D2-mediated inhibition', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Paired pituitary and target-gland hormones', meaning: 'Localizes primary versus central endocrine disease' },
      { clue: 'Morning cortisol before thyroid replacement', meaning: 'Screens for dangerous central adrenal insufficiency' },
    ],
    treatment: [
      { logic: 'Replace deficient axes in safe order', detail: 'Treat cortisol deficiency before thyroid deficiency, then address gonadal/GH needs individually.' },
    ],
    mnemonic: { hook: 'FLAT PiG', expansion: ['FSH, LH, ACTH, TSH', 'Prolactin, GH'] },
    trap: {
      questionCategory: 'Prolactin regulation',
      wrongInstinct: 'Prolactin depends mainly on a hypothalamic releasing hormone',
      rightAnswer: 'Prolactin is primarily under tonic inhibition by hypothalamic dopamine',
      why: 'Stalk interruption therefore raises rather than lowers prolactin.',
    },
    quiz: {
      stem: 'Which hypothalamic signal tonically inhibits prolactin secretion?',
      options: ['CRH', 'Dopamine', 'GnRH', 'GHRH'],
      answer: 1,
      explanation: 'Dopamine from hypothalamic neurons suppresses lactotroph secretion through D2 receptors.',
    },
  }),

  hen1Lecture({
    id: 'hen1-growth-hormone-igf1',
    title: 'Growth Hormone, IGF-1 & Growth Disorders',
    source: l3,
    tags: [
      { kind: 'mechanism', label: 'GHRH–GH–IGF-1 axis' },
      { kind: 'exam', label: 'Gigantism vs acromegaly' },
    ],
    highYield: [
      'GH is a peptide from somatotrophs; **GHRH, sleep, exercise, stress, and hypoglycemia stimulate it, while somatostatin, hyperglycemia, and IGF-1 suppress it**.',
      'GH receptor activates **JAK2–STAT signaling**. Liver and other tissues produce IGF-1, which mediates much of linear growth and feeds back on the axis.',
      'GH directly promotes lipolysis and antagonizes insulin action, helping preserve glucose during fasting.',
      'GH excess before epiphyseal closure causes gigantism; after closure it causes acromegaly. Childhood deficiency causes proportionate short stature.',
    ],
    chainTitle: 'Pulsatile GH drives IGF-1 growth and direct metabolic effects',
    steps: [
      { label: 'GHRH rises and somatostatin falls' },
      { label: 'Somatotroph releases pulsatile GH' },
      { label: 'GH receptor activates JAK2–STAT' },
      { label: 'IGF-1 promotes growth and negative feedback', emphasis: 'key' },
    ],
    examFindings: [
      { sign: 'Coarse facial features, enlarged hands, prognathism', mechanism: 'Post-epiphyseal GH/IGF-1 excess expands soft tissue and membranous bone', significance: 'key' },
      { sign: 'Hyperglycemia in GH excess', mechanism: 'GH increases insulin resistance and hepatic glucose output', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Age-adjusted IGF-1', meaning: 'Best stable screening marker for chronic GH excess' },
      { clue: 'Failure of GH suppression after oral glucose', meaning: 'Supports acromegaly' },
    ],
    treatment: [
      { logic: 'Remove or suppress the GH source and block residual signaling', detail: 'Pituitary surgery is often first-line; somatostatin analogues, GH-receptor blockade, or dopamine agonists may be adjuncts.' },
    ],
    mnemonic: { hook: 'IGF-1 integrates GH over time', expansion: ['Before plates close: gigantism', 'After closure: acromegaly'] },
    trap: {
      questionCategory: 'GH testing',
      wrongInstinct: 'A random GH level reliably screens for acromegaly',
      rightAnswer: 'Use IGF-1 because GH secretion is strongly pulsatile',
      why: 'A single random GH may fall between secretory pulses.',
    },
    quiz: {
      stem: 'Which test is the best initial biochemical screen for suspected acromegaly?',
      options: ['Random GH', 'Age-adjusted IGF-1', 'Serum prolactin only', 'Urine cortisol'],
      answer: 1,
      explanation: 'IGF-1 reflects integrated GH action and is more stable than a random pulsatile GH measurement.',
    },
  }),

  hen1Lecture({
    id: 'hen1-prolactin-lactation',
    title: 'Prolactin, Lactogenesis & Reproductive Suppression',
    source: l3,
    tags: [
      { kind: 'mechanism', label: 'Dopamine-inhibited lactotroph axis' },
      { kind: 'exam', label: 'Suckling reflex and hyperprolactinemia' },
    ],
    highYield: [
      'Prolactin from lactotrophs promotes mammary development and milk synthesis; estrogen expands lactotroph mass during pregnancy.',
      '**Dopamine is the dominant inhibitor**. Suckling reduces dopaminergic inhibition and increases prolactin pulses.',
      'Prolactin activates a JAK–STAT receptor and supports lactogenesis, while oxytocin separately ejects stored milk.',
      '**High prolactin suppresses GnRH**, lowering LH/FSH and causing amenorrhea, infertility, or hypogonadism.',
    ],
    chainTitle: 'Suckling removes dopamine restraint and stimulates milk synthesis',
    steps: [
      { label: 'Nipple afferents reach hypothalamus' },
      { label: 'Dopamine inhibition decreases' },
      { label: 'Lactotroph releases prolactin', emphasis: 'key' },
      { label: 'Mammary epithelium synthesizes milk' },
    ],
    examFindings: [
      { sign: 'Galactorrhea with menstrual disturbance', mechanism: 'Hyperprolactinemia stimulates breast secretion and suppresses GnRH', significance: 'key' },
      { sign: 'Inability to lactate after severe postpartum hemorrhage', mechanism: 'Sheehan syndrome damages prolactin-secreting anterior pituitary', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Repeat prolactin after excluding pregnancy, drugs, and hypothyroidism', meaning: 'Confirms persistent pathologic elevation' },
      { clue: 'Pituitary MRI when elevation is unexplained or marked', meaning: 'Evaluates prolactinoma or stalk lesion' },
    ],
    treatment: [
      { logic: 'Restore dopamine signaling when a prolactinoma is present', detail: 'D2 agonists usually lower prolactin and shrink lactotroph adenomas.' },
    ],
    mnemonic: { hook: 'Prolactin produces; oxytocin pushes', expansion: ['Dopamine denies prolactin'] },
    trap: {
      questionCategory: 'Lactation physiology',
      wrongInstinct: 'Prolactin is responsible for milk ejection',
      rightAnswer: 'Prolactin synthesizes milk; oxytocin contracts myoepithelial cells for ejection',
      why: 'Milk production and let-down are distinct hormonal reflexes.',
    },
    quiz: {
      stem: 'Hyperprolactinemia commonly causes infertility through suppression of which signal?',
      options: ['TRH', 'GnRH', 'CRH', 'ADH'],
      answer: 1,
      explanation: 'Excess prolactin suppresses hypothalamic GnRH, reducing LH and FSH secretion.',
    },
  }),

  hen1Lecture({
    id: 'hen1-oxytocin-reflexes',
    title: 'Oxytocin, Milk Ejection & Parturition Reflexes',
    source: l3,
    tags: [
      { kind: 'mechanism', label: 'Neuroendocrine positive feedback' },
      { kind: 'exam', label: 'Milk let-down' },
    ],
    highYield: [
      'Oxytocin is synthesized in hypothalamic magnocellular neurons, transported with neurophysin, and released from posterior-pituitary terminals.',
      'Nipple stimulation triggers **pulsatile oxytocin that contracts mammary myoepithelial cells and ejects milk**.',
      'Cervical stretch during labor activates the **Ferguson reflex**: oxytocin strengthens uterine contractions, increasing stretch until delivery ends the loop.',
      'Oxytocin receptors are Gq-coupled and increase intracellular Ca²⁺ in smooth muscle and myoepithelial cells.',
    ],
    chainTitle: 'Sensory stretch drives a positive-feedback neuroendocrine reflex',
    steps: [
      { label: 'Nipple or cervical mechanoreceptors fire' },
      { label: 'Hypothalamic neurons activate' },
      { label: 'Posterior pituitary releases oxytocin', emphasis: 'key' },
      { label: 'Contraction increases milk flow or cervical stretch' },
    ],
    examFindings: [
      { sign: 'Milk is produced but does not let down', mechanism: 'Prolactin action is intact but oxytocin reflex is impaired', significance: 'key' },
      { sign: 'Stronger contractions as cervix stretches', mechanism: 'Ferguson positive-feedback loop', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Clinical distinction between milk production and ejection', meaning: 'Localizes prolactin versus oxytocin dysfunction' },
      { clue: 'Maternal and fetal monitoring during therapeutic oxytocin', meaning: 'Detects uterine tachysystole and fetal compromise' },
    ],
    treatment: [
      { logic: 'Use oxytocin only with controlled monitoring', detail: 'Its uterotonic positive feedback can produce excessive contractions when dosing outpaces physiologic control.' },
    ],
    mnemonic: { hook: 'Oxytocin ejects and contracts', expansion: ['Breast myoepithelium', 'Uterine smooth muscle'] },
    trap: {
      questionCategory: 'Posterior pituitary function',
      wrongInstinct: 'Oxytocin is synthesized in the pars nervosa',
      rightAnswer: 'It is synthesized in hypothalamus and released from pars nervosa',
      why: 'Posterior-pituitary terminals store products made in magnocellular cell bodies.',
    },
    quiz: {
      stem: 'Which hormone directly contracts mammary myoepithelial cells?',
      options: ['Prolactin', 'Oxytocin', 'FSH', 'Growth hormone'],
      answer: 1,
      explanation: 'Oxytocin causes milk ejection; prolactin supports milk synthesis.',
    },
  }),

  hen1Lecture({
    id: 'hen1-adh-water-balance',
    title: 'ADH, Osmoregulation & Diabetes Insipidus',
    source: l3,
    tags: [
      { kind: 'mechanism', label: 'V2–aquaporin water retention' },
      { kind: 'exam', label: 'Central vs nephrogenic DI' },
    ],
    highYield: [
      'ADH (vasopressin) release is exquisitely sensitive to increased plasma osmolality and also rises with major effective-volume depletion.',
      'Renal **V2 receptors** activate Gs–cAMP–PKA, inserting aquaporin-2 into collecting-duct principal-cell apical membranes and concentrating urine.',
      'V1 receptors are Gq-coupled and mediate vasoconstriction at higher ADH concentrations.',
      '**Central diabetes insipidus reflects deficient ADH; nephrogenic DI reflects renal resistance**. Both cause hypotonic polyuria and compensatory thirst.',
    ],
    chainTitle: 'Hyperosmolality triggers ADH-dependent collecting-duct water uptake',
    steps: [
      { label: 'Hypothalamic osmoreceptors sense rising osmolality' },
      { label: 'Posterior pituitary releases ADH' },
      { label: 'V2 signaling inserts aquaporin-2', emphasis: 'key' },
      { label: 'Water reabsorption concentrates urine and lowers osmolality' },
    ],
    examFindings: [
      { sign: 'Large-volume dilute urine with hypernatremia risk', mechanism: 'Failure of ADH production or action prevents free-water conservation', significance: 'key' },
      { sign: 'Urine concentrates after desmopressin', mechanism: 'Kidneys can respond, supporting central rather than nephrogenic DI', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Serum sodium/osmolality paired with urine osmolality', meaning: 'Identifies inappropriate urinary dilution' },
      { clue: 'Supervised water-deprivation/desmopressin testing when needed', meaning: 'Separates primary polydipsia, central DI, and nephrogenic DI' },
    ],
    treatment: [
      { logic: 'Replace ADH in central DI; correct renal resistance in nephrogenic DI', detail: 'Desmopressin treats central disease, while nephrogenic management targets the cause and reduces solute load.' },
    ],
    mnemonic: { hook: 'V2 puts water channels in; V1 squeezes vessels', expansion: ['AQP2 at the collecting duct'] },
    trap: {
      questionCategory: 'DI interpretation',
      wrongInstinct: 'All diabetes insipidus responds to desmopressin',
      rightAnswer: 'Central DI responds; nephrogenic DI has impaired renal response',
      why: 'The defect is hormone deficiency in central disease and receptor/post-receptor resistance in nephrogenic disease.',
    },
    quiz: {
      stem: 'ADH increases collecting-duct water permeability by inserting which channel?',
      options: ['ENaC', 'Aquaporin-2', 'SGLT2', 'ROMK'],
      answer: 1,
      explanation: 'V2 receptor signaling inserts aquaporin-2 into the apical membrane of principal cells.',
    },
  }),
];
