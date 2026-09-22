import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpPituitaryPathology: Lecture = {
  id: 'rbp-pituitary-pathology',
  title: 'Pituitary Pathology',
  system: 'endocrine',
  source: 'Ch 19 — Endocrine System',
  updated: '2026-09-22',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'Ch 19 Endocrine System' },
    { kind: 'mechanism', label: 'Sellar mass effect, stalk interruption and hormone excess' },
    { kind: 'disease', label: 'Pituitary adenoma, hypopituitarism, diabetes insipidus and SIADH' },
  ],

  highYield: [
    '**A pituitary adenoma is a MONOCLONAL expansion of ONE adenohypophyseal lineage, and that single fact supplies both the microscopic diagnosis and the clinical classification.** They are about **10%** of intracranial neoplasms, and the useful size cut is **microadenoma under 1 cm** against **macroadenoma of 1 cm or more**, because only the macroadenoma can compress anything. The normal anterior lobe is a **mixed** population of acidophils, basophils and chromophobes arranged in acini around a delicate **reticulin** network; an adenoma is a **MONOMORPHOUS sheet of one cell type with the reticulin framework LOST or fragmented**. That reticulin stain is the practical answer to the hardest question on a pituitary biopsy — adenoma or hyperplasia — because hyperplasia expands the acini but keeps the framework intact, while an adenoma dissolves it. Classification is by the **lineage transcription factor and the hormone on immunohistochemistry**, not by the old tinctorial labels: **PIT1** lineage gives GH, prolactin and TSH tumours, **TPIT** gives ACTH tumours, **SF1** gives gonadotroph tumours. By frequency the **LACTOTROPH (prolactinoma) is commonest**, then somatotroph, then corticotroph; roughly **25 to 30% are clinically non-functioning**, and most of those are silent gonadotroph tumours that declare themselves only by mass effect ([[pituitary-adenomas-hyperpituitarism]]). A pituitary adenoma in a young patient, or alongside a parathyroid or pancreatic tumour, should trigger a search for **MEN1** ([[rbp-parathyroid-endocrine-neoplasia]]).',
    '**The stalk effect is the single discriminator on this page that changes the operation: a modestly raised prolactin beside a LARGE sellar mass usually means a NON-functioning adenoma compressing the stalk, not a prolactinoma.** Prolactin is unique among anterior pituitary hormones in being under **tonic INHIBITION by hypothalamic dopamine**, delivered down the stalk through the hypophyseal portal veins ([[ghp-anterior-pituitary-hypothalamic-control]]). Interrupt that stalk with any mass — a non-functioning adenoma, a craniopharyngioma, a meningioma, a metastasis, even granulomatous disease — and the disinhibited normal lactotrophs raise prolactin, but only so far, because there is a finite number of them. The arithmetic is the rule: **stalk compression rarely pushes prolactin above about 150 to 200 ng/mL (roughly 3000 to 4000 mIU/L)**, whereas in a true prolactinoma the level scales with tumour volume, so a **macroprolactinoma of 2 cm or more almost always exceeds 200 ng/mL and commonly runs into the thousands**. Management inverts across that line: a prolactinoma shrinks on a **dopamine agonist** and is treated medically, while a non-functioning adenoma with stalk effect will not shrink on anything and needs **transsphenoidal surgery**. One further trap is analytical — a very large prolactinoma can saturate both antibodies in the immunoassay and report a **falsely LOW or normal prolactin (the HOOK effect)**, so a huge mass with an unimpressive prolactin must be re-assayed at **1:100 dilution** before it is called non-functioning.',
    '**Mass effect in the sella is anatomy, and each deficit names the structure the tumour has reached.** The pituitary sits in a bony box roofed by the diaphragma sellae, so growth is channelled **upward** into the suprasellar cistern and **laterally** into the cavernous sinus. Upward growth meets the **optic chiasm**, where the fibres from the two NASAL retinae decussate; those fibres carry the **temporal** visual fields, so compression from below gives **BITEMPORAL HEMIANOPIA that begins in the SUPERIOR quadrants** and marches downward, since a mass rising from the sella hits the inferonasal fibres first. Lateral growth enters the **cavernous sinus** and takes **cranial nerves III, IV, VI and the ophthalmic and maxillary divisions of V** — so ophthalmoplegia, not field loss, means lateral invasion. Very large tumours obstruct the foramen of Monro and produce hydrocephalus. Two non-adenomatous sellar masses matter because they are mistaken for adenomas. **Craniopharyngioma** arises from **Rathke pouch** remnants with a bimodal age distribution: the **adamantinomatous** type of childhood has **CTNNB1 (beta-catenin)** mutations, palisading squamous epithelium, keloid-like fibrosis and nodules of compact **WET KERATIN**, and **calcifies in around 90%** of paediatric cases — visible calcification above a sella is craniopharyngioma until proved otherwise. The **papillary** type of adults carries **BRAF V600E**, forms papillae of squamous epithelium without wet keratin and rarely calcifies. **Rathke cleft cyst** is a simple cyst lined by ciliated cuboidal or columnar epithelium with goblet cells, and it is not a neoplasm.',
    '**Growth hormone excess is diagnosed by FAILURE TO SUPPRESS, because GH is pulsatile and a random level is uninterpretable.** GH is secreted in **bursts, largely at night**, and between pulses a perfectly normal person can read close to zero, so a single low value excludes nothing and a single high value proves nothing. Two tests fix this. **IGF-1**, made in the liver under GH drive, has a long half-life and integrates GH output over days, so it is the screening test. Confirmation is the **oral glucose tolerance test**: in health a **75 g glucose load SUPPRESSES GH to below 1 µg/L** (below about 0.4 µg/L on ultrasensitive assays), whereas a somatotroph adenoma is autonomous and **fails to suppress**, and may even rise paradoxically. The clinical split is set by the **epiphyses**: before fusion, excess GH gives **GIGANTISM** with generalised increase in body size and very long limbs; after fusion the long bones cannot lengthen, so growth is **appositional and soft tissue** — **ACROMEGALY**, with enlarging hands and feet, frontal bossing, **prognathism** with widened interdental spaces, macroglossia, thickened skin with skin tags, and **carpal tunnel syndrome** from soft-tissue crowding at the wrist. Morphology predicts behaviour: a **densely granulated** somatotroph adenoma occurs in older patients, grows slowly and responds well to somatostatin analogues, while a **sparsely granulated** tumour affects younger patients, shows juxtanuclear keratin **fibrous bodies** on CAM5.2, and behaves more aggressively. About **40%** of somatotroph adenomas carry an activating **GNAS** mutation, which locks adenylyl cyclase on. Patients die of the systemic disease — **cardiomyopathy, hypertension and diabetes** — not of the tumour, and colonic polyps and carcinoma are increased.',
    '**Hypopituitarism needs the loss of roughly 75% of the anterior lobe before any hormone fails, which is why it presents late and why the ORDER of failure is so stereotyped: GH, then gonadotrophins, then TSH, then ACTH.** The posterior lobe is usually spared, so most hypopituitarism is NOT accompanied by diabetes insipidus. **Sheehan syndrome** is the mechanism worth reconstructing rather than memorising. In pregnancy the lactotrophs undergo physiological **hyperplasia that roughly DOUBLES the mass of the anterior lobe**, but the gland receives no proportionate new arterial supply — it is perfused by a **LOW-PRESSURE portal venous system** descending the stalk. An enlarged organ living on a low-pressure supply has no reserve, so the **obstetric haemorrhage and hypotension of delivery infarct it**. The posterior lobe, fed directly by the inferior hypophyseal arteries, survives. The presentation follows: **failure of postpartum lactation first**, then failure to resume menses, then fatigue and cold intolerance months to years later. **Pituitary apoplexy** is the acute version — sudden **haemorrhage into an existing adenoma**, giving thunderclap headache, vomiting, visual loss, ophthalmoplegia and collapse from **acute ACTH deficiency**. It is an endocrine emergency before it is a surgical one: give **hydrocortisone immediately**. **Empty sella syndrome** is the chronic remnant, where an incompetent diaphragma sellae lets arachnoid and cerebrospinal fluid herniate in and flatten the gland against the floor.',
    '**Diabetes insipidus and SIADH are the two opposite failures of ONE hormone, and the pair of osmolalities separates them without ambiguity: in DI the serum is concentrated and the urine dilute, in SIADH the serum is dilute and the urine concentrated.** In **central DI** the posterior lobe or the hypothalamic nuclei are destroyed — by tumour, surgery, trauma, Langerhans cell histiocytosis or infiltration — so ADH is not made; in **nephrogenic DI** the collecting duct will not answer it (lithium, hypercalcaemia, hypokalaemia, hereditary V2 receptor or aquaporin-2 defects). Either way the patient passes **more than 3 L/day of dilute urine (osmolality under 300 mosmol/kg, often under 100)** while the **serum osmolality rises above 295 mosmol/kg** with hypernatraemia and intense thirst — and the craving is characteristically for **ICE-COLD water**. A water deprivation test followed by desmopressin splits the two: **central DI concentrates the urine by more than 50% after DDAVP, nephrogenic DI does not budge**. **SIADH** is the mirror: ADH continues despite a falling osmolality, so water is retained and the patient becomes **hyponatraemic and EUVOLAEMIC** — serum osmolality **under 275**, urine osmolality **inappropriately above 100** and usually far higher, urine sodium **above 40 mmol/L** on a normal salt intake, with normal thyroid and adrenal function. Small-cell lung carcinoma is the classic ectopic source; carbamazepine, SSRIs, cyclophosphamide, central nervous system disease and pneumonia are the rest. Sodium must be corrected by **no more than 8 to 10 mmol/L in 24 hours**, because faster correction shrinks brain cells that have already extruded osmolytes and causes **osmotic demyelination** of the pons ([[posterior-pituitary-syndromes]]).',
  ],

  mechanism: {
    title: 'One monoclonal pituitary cell, and the two ways a sellar mass declares itself',
    steps: [
      { id: 's1', label: 'A single adenohypophyseal cell expands monoclonally: the acinar reticulin framework is lost and the gland is replaced by a monomorphous sheet of one lineage', detail: 'Reticulin loss is the histological discriminator from hyperplasia, which expands acini but preserves the framework. Lineage is assigned by transcription factor (PIT1, TPIT, SF1) and hormone immunohistochemistry.', emphasis: 'key' },
      { id: 's2', label: 'Under 1 cm the tumour is a microadenoma and can only present hormonally: prolactin, GH or ACTH excess', detail: 'A microadenoma has nothing to compress, so a purely endocrine presentation with a small tumour is expected rather than surprising.', emphasis: 'normal' },
      { id: 's3', label: 'Past 1 cm it grows upward through the diaphragma sellae and compresses the decussating nasal retinal fibres at the optic chiasm', detail: 'The nasal fibres carry the temporal fields, and a mass rising from below reaches the inferonasal fibres first, so field loss begins in the superior temporal quadrants and marches down.', emphasis: 'key' },
      { id: 's4', label: 'The same mass compresses the pituitary stalk, cutting hypothalamic dopamine off from the normal lactotrophs, which are disinhibited and raise prolactin', detail: 'This is the stalk effect. The prolactin comes from residual normal gland, so it plateaus around 150 to 200 ng/mL and does not scale with tumour size the way a prolactinoma does.', emphasis: 'key' },
      { id: 's5', label: 'Continued compression of the residual anterior lobe destroys more than 75% of it, and hormones fail in order: GH, then gonadotrophins, then TSH, then ACTH', detail: 'The large reserve is why hypopituitarism presents late. The posterior lobe is usually spared, so diabetes insipidus is not part of the compressive picture.', emphasis: 'normal' },
      { id: 's6', label: 'Haemorrhagic infarction of the adenoma: thunderclap headache, ophthalmoplegia, visual loss and circulatory collapse from acute ACTH deficiency', detail: 'Pituitary apoplexy. Hydrocortisone is given before imaging and before any operation, because the lethal deficit is cortisol, not the mass.', emphasis: 'danger' },
    ],
    branches: [
      {
        fromId: 's1',
        title: 'Infarction of a NORMAL gland instead of a tumour',
        steps: [
          { id: 'b1', label: 'Pregnancy: lactotroph hyperplasia roughly doubles the mass of the anterior lobe with no matching increase in arterial supply', emphasis: 'key' },
          { id: 'b2', label: 'The enlarged gland is perfused by the low-pressure hypophyseal portal system descending the stalk, so it has no perfusion reserve', emphasis: 'key' },
          { id: 'b3', label: 'Obstetric haemorrhage and hypotension infarct the anterior lobe; the posterior lobe, fed directly by the inferior hypophyseal arteries, survives', emphasis: 'danger' },
          { id: 'b4', label: 'Sheehan syndrome: failure of lactation first, then failure to resume menses, then hypothyroidism and hypoadrenalism months to years later', emphasis: 'normal' },
        ],
      },
    ],
  },

  examFindings: [
    { sign: 'Bitemporal hemianopia that the patient first notices as bumping into objects on both sides, with the defect densest in the superior quadrants', mechanism: 'Suprasellar extension compresses the decussating fibres of the two nasal retinae at the optic chiasm. Nasal retina sees the temporal field, so the loss is bitemporal; the mass arrives from below and reaches the inferonasal fibres first, which is why the superior quadrants go first', significance: 'key' },
    { sign: 'Ptosis with a dilated pupil and a globe that will not adduct, in a patient with a known sellar mass', mechanism: 'Lateral rather than upward extension, into the cavernous sinus, taking cranial nerves III, IV and VI and the first two divisions of V. Ophthalmoplegia therefore localises the growth laterally, whereas field loss localises it upward', significance: 'key' },
    { sign: 'A woman who never produced milk after a delivery complicated by heavy bleeding, and whose periods never returned', mechanism: 'Sheehan syndrome. Pregnancy doubles the anterior lobe by lactotroph hyperplasia while perfusion remains a low-pressure portal supply, so peripartum haemorrhage infarcts it. Lactotrophs and gonadotrophs fail first, which is exactly the order in which the history unfolds', significance: 'key' },
    { sign: 'Rings and shoes that no longer fit, a jaw that has grown forward with gaps opening between the teeth, and numb fingers at night', mechanism: 'Growth hormone excess after epiphyseal fusion. The long bones can no longer lengthen, so growth is appositional and in soft tissue: acral enlargement, prognathism with widened interdental spaces, and median nerve compression from soft-tissue crowding in the carpal tunnel', significance: 'key' },
    { sign: 'Sudden worst-ever headache with vomiting, collapse and a blood pressure of 80/50 in a patient with a macroadenoma', mechanism: 'Pituitary apoplexy from haemorrhage into the tumour. The hypotension is acute ACTH deficiency and not blood loss, which is why hydrocortisone rather than fluid alone is the resuscitation that works', significance: 'key' },
    { sign: 'Six litres of pale urine a day with nocturia, and a patient who keeps a jug of iced water beside the bed', mechanism: 'Diabetes insipidus. Free water is lost because ADH is absent or unanswered, plasma osmolality rises above 295 mosmol/kg, and hypothalamic osmoreceptors drive thirst. The specific preference for ice-cold water is a recognised and useful historical detail', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A 3 cm sellar mass with chiasmal compression, and a prolactin of 95 ng/mL', meaning: 'Stalk effect, so this is a non-functioning adenoma and not a prolactinoma. Prolactin generated by disinhibited residual lactotrophs plateaus around 150 to 200 ng/mL, whereas a tumour of this size that was itself lactotroph would be producing hundreds to thousands. The distinction decides the treatment: this one goes to transsphenoidal surgery, and a dopamine agonist would waste months while the field defect worsens' },
    { clue: 'A 4 cm sellar mass with a reported prolactin of 22 ng/mL, and the laboratory is asked to repeat the assay at 1:100 dilution, which returns 4200 ng/mL', meaning: 'The hook effect. Prolactin so abundant that it saturates both the capture and the detection antibody prevents the sandwich from forming, so the undiluted assay reads falsely low. This is a giant macroprolactinoma, which shrinks on cabergoline. Any large sellar mass with a disappointingly normal prolactin must be diluted before it is labelled non-functioning' },
    { clue: 'IGF-1 raised for age, and after a 75 g oral glucose load the GH nadir is 2.6 µg/L', meaning: 'Acromegaly. Normal somatotrophs are suppressed by hyperglycaemia to below 1 µg/L, so failure to suppress demonstrates autonomy. The test exists because GH is secreted in nocturnal pulses and a random value is uninterpretable in either direction, while IGF-1 integrates GH exposure over days and is therefore the screening test' },
    { clue: 'Reticulin stain on a sellar biopsy showing complete loss of the normal acinar framework, with a monomorphous population staining for prolactin', meaning: 'Adenoma rather than lactotroph hyperplasia. Hyperplasia enlarges the acini but preserves the reticulin network that outlines them, whereas a monoclonal adenoma dissolves it. This is the question the reticulin stain exists to answer, and hormone immunohistochemistry then assigns the lineage' },
    { clue: 'Non-tumorous corticotrophs showing a pale perinuclear ring of glassy homogeneous cytoplasm that displaces the secretory granules to the periphery', meaning: 'Crooke hyaline change: accumulated cytokeratin filaments in corticotrophs exposed to sustained high cortisol from any source. Its presence proves the patient has been hypercortisolaemic; it says nothing about where the cortisol came from, so it is found in the non-tumorous gland around a corticotroph adenoma and equally in a patient on long-term steroids' },
    { clue: 'After 8 hours of water deprivation the urine osmolality is 160 mosmol/kg and the serum is 302; desmopressin is given and the urine osmolality rises to 620', meaning: 'Central diabetes insipidus. Deprivation failed to concentrate the urine, so the problem is water handling and not primary polydipsia, and the collecting duct answered exogenous ADH with a rise of well over 50%, so the tubule is competent and the hormone was missing. Nephrogenic diabetes insipidus gives the same deprivation result but no response to desmopressin' },
  ],

  treatment: [
    {
      logic: 'Read the prolactin and the tumour diameter together, because each alone points the wrong way',
      detail: 'The decision is medical against surgical, so it has to be right. A **prolactinoma of any size is treated medically first** with a **dopamine agonist**, because lactotrophs carry D2 receptors and the tumour genuinely **shrinks** — **cabergoline** normalises prolactin in around **80 to 90%** and is better tolerated than bromocriptine. A **non-functioning adenoma compressing the chiasm is treated surgically**, by the transsphenoidal route, because nothing shrinks it. The stalk effect sits between the two and is where the error is made: **a macroadenoma with prolactin under about 200 ng/mL is a non-functioning tumour until proved otherwise**, and the proof is either a diluted prolactin assay to exclude the hook effect or the tumour failing to shrink on a dopamine agonist. Three sequencing rules follow. In **apoplexy, give hydrocortisone before imaging** — the killer is cortisol deficiency, not the haemorrhage. In any **hypopituitarism, replace hydrocortisone BEFORE levothyroxine**, because thyroxine accelerates cortisol clearance and raises metabolic demand, and giving it first can precipitate an adrenal crisis. In **acromegaly**, surgery is first line, with somatostatin analogues for residual disease and the GH receptor antagonist **pegvisomant** when it persists — and **IGF-1 normalisation, not tumour size, is the target**.',
    },
    {
      logic: 'Correct sodium at the speed the brain can follow, and treat the osmolality rather than the number',
      detail: 'In **SIADH** the patient is water-loaded, not salt-depleted, so the treatment is **fluid restriction**, with hypertonic saline reserved for seizures or coma. The ceiling is the point: **raise sodium by no more than 8 to 10 mmol/L in 24 hours**. Brain cells adapting to chronic hyponatraemia extrude organic osmolytes, and they cannot reclaim them quickly, so rapid correction dehydrates them and produces **osmotic demyelination** of the pons — a delayed, often irreversible quadriparesis that appears days after the sodium looks better. In **central DI**, **desmopressin** replaces the hormone; in **nephrogenic DI** it will not work, so treatment is removal of the cause (lithium, hypercalcaemia, hypokalaemia) plus a **thiazide** with a low-salt diet, which works by the counter-intuitive route of mild volume depletion increasing proximal reabsorption and so delivering less water distally.',
    },
  ],

  mnemonics: [
    {
      hook: 'Big tumour, small prolactin: blame the STALK, not the lactotroph',
      expansion: [
        'Prolactin is the only anterior pituitary hormone held down by tonic hypothalamic dopamine',
        'Any mass that interrupts the stalk disinhibits the NORMAL lactotrophs, so prolactin rises',
        'Those lactotrophs are finite, so the rise plateaus at roughly 150 to 200 ng/mL',
        'A true prolactinoma scales with its own volume, so a 2 cm one runs into the hundreds or thousands',
        'Modest prolactin plus large tumour goes to theatre; very high prolactin plus large tumour goes on cabergoline',
        'Exception to exclude first: the hook effect, where a giant prolactinoma reads falsely normal until the sample is diluted',
      ],
    },
    {
      hook: 'DI and SIADH are one hormone failing in opposite directions, so read the two osmolalities as a mirror',
      expansion: [
        'Diabetes insipidus: serum osmolality HIGH above 295, urine osmolality LOW under 300, urine volume over 3 L a day',
        'SIADH: serum osmolality LOW under 275, urine osmolality inappropriately HIGH above 100, patient euvolaemic',
        'Urine sodium above 40 mmol/L in SIADH shows the kidney is not conserving salt, so this is water excess and not salt loss',
        'Desmopressin separates central DI, which concentrates by more than 50%, from nephrogenic DI, which does not move',
        'Treat DI by giving the hormone back; treat SIADH by restricting the water',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'Interpreting a raised prolactin alongside a large sellar mass',
      wrongInstinct: 'Prolactin is high and there is a pituitary tumour, so this is a prolactinoma and it should be started on cabergoline',
      rightAnswer: 'A macroadenoma with prolactin below roughly 200 ng/mL is a non-functioning adenoma causing stalk compression, and it needs transsphenoidal surgery. Only a level that scales with the tumour, typically above 200 and often in the thousands, identifies a true macroprolactinoma',
      why: 'The prolactin in stalk effect is made by the finite population of residual NORMAL lactotrophs released from dopamine inhibition, so it plateaus; the prolactin in a prolactinoma is made by the tumour itself, so it tracks tumour volume',
    },
    {
      questionCategory: 'Confirming growth hormone excess',
      wrongInstinct: 'Measure a random serum GH; a high value confirms acromegaly and a normal value excludes it',
      rightAnswer: 'Screen with IGF-1 and confirm with failure of GH to suppress below 1 µg/L after a 75 g oral glucose load',
      why: 'GH is secreted in nocturnal pulses, so a single measurement samples an unknown point on a spiking curve; IGF-1 has a long half-life and integrates days of GH exposure, and the glucose load tests the one property that defines a tumour, which is autonomy',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 54-year-old man has six months of worsening peripheral vision and reduced libido. MRI shows a 3.2 cm sellar mass with suprasellar extension elevating the optic chiasm. Serum prolactin is 88 ng/mL, repeated at 1:100 dilution and unchanged. Testosterone, free T4 and morning cortisol are all low. What is the correct interpretation and plan?',
      options: [
        { id: 'a', text: 'Macroprolactinoma; start cabergoline and expect the mass to shrink' },
        { id: 'b', text: 'Non-functioning adenoma with stalk compression; replace hydrocortisone then thyroxine, and refer for transsphenoidal decompression' },
        { id: 'c', text: 'Craniopharyngioma, since the prolactin is too low for any pituitary tumour' },
        { id: 'd', text: 'Somatotroph adenoma; measure a random growth hormone to confirm' },
      ],
      answerId: 'b',
      explanation: 'A prolactin of 88 ng/mL beside a 3.2 cm tumour is far too low for a lactotroph tumour of that volume, in which prolactin scales with tumour mass and would be expected in the hundreds or thousands. It fits stalk compression, where prolactin comes from residual normal lactotrophs disinhibited from hypothalamic dopamine and therefore plateaus at roughly 150 to 200 ng/mL. The one alternative explanation for a low reading with a big tumour, the hook effect, has already been excluded by re-assay at dilution. So this is a non-functioning adenoma, most often a silent gonadotroph tumour, and it will not shrink on a dopamine agonist; it needs surgery. The panhypopituitarism is compressive, and the replacement order matters: hydrocortisone must precede levothyroxine, because thyroxine raises metabolic demand and cortisol clearance and can precipitate adrenal crisis in an ACTH-deficient patient.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A 29-year-old woman had a delivery complicated by a 2.5 litre postpartum haemorrhage requiring transfusion. She was unable to breastfeed, her periods never resumed, and over the following year she developed fatigue, cold intolerance and postural dizziness. Urine output is normal. Which statement best explains her illness?',
      options: [
        { id: 'a', text: 'Autoimmune lymphocytic hypophysitis destroyed the posterior lobe, which is why lactation failed' },
        { id: 'b', text: 'Pregnancy-related lactotroph hyperplasia roughly doubled the anterior lobe without increasing its low-pressure portal supply, so peripartum hypotension infarcted it while the arterially supplied posterior lobe survived' },
        { id: 'c', text: 'Haemorrhage into a pre-existing macroadenoma produced apoplexy with gradual onset over a year' },
        { id: 'd', text: 'An empty sella from herniated arachnoid compressed the stalk and raised prolactin, blocking ovulation' },
      ],
      answerId: 'b',
      explanation: 'This is Sheehan syndrome, and the mechanism is a supply-and-demand mismatch rather than a primary vascular disease. The anterior lobe enlarges substantially in pregnancy through lactotroph hyperplasia, but it is perfused by the low-pressure hypophyseal portal venous system running down the stalk and receives no proportionate arterial increase, so it has no reserve when blood pressure falls. Obstetric haemorrhage therefore infarcts the anterior lobe selectively; the posterior lobe is supplied directly by the inferior hypophyseal arteries and survives, which is why urine output stays normal and diabetes insipidus is absent. The sequence of clinical failure follows the sequence of cell loss: absent lactation, then absent menses, then hypothyroid and hypoadrenal features appearing over months to years. Apoplexy, by contrast, is abrupt and presents within hours with headache, ophthalmoplegia and collapse.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A 61-year-old man with small-cell lung carcinoma is admitted confused. Sodium is 114 mmol/L, serum osmolality 238 mosmol/kg, urine osmolality 540 mosmol/kg and urine sodium 62 mmol/L. He is clinically euvolaemic, with normal thyroid and adrenal function. Which statement is correct?',
      options: [
        { id: 'a', text: 'The urine osmolality of 540 is an appropriate renal response to hyponatraemia' },
        { id: 'b', text: 'This is SIADH; fluid restriction is the mainstay, and sodium must not be raised by more than about 8 to 10 mmol/L in 24 hours' },
        { id: 'c', text: 'The high urine sodium indicates salt wasting, so aggressive intravenous normal saline is the treatment of choice' },
        { id: 'd', text: 'Rapid correction to a normal sodium within 12 hours prevents cerebral oedema and is the safest course' },
      ],
      answerId: 'b',
      explanation: 'The diagnostic core of SIADH is inappropriateness rather than any single value: with a serum osmolality of 238 the kidney should be producing maximally dilute urine near 50 mosmol/kg, so a urine osmolality of 540 proves ADH is still acting. Euvolaemia and a urine sodium above 40 mmol/L confirm that the problem is retained water rather than lost salt, which is why saline is not the answer and why restricting water is. Small-cell lung carcinoma is the classic ectopic source. The correction limit is the other half of the answer: brain cells adapting to chronic hyponatraemia extrude organic osmolytes and cannot reclaim them quickly, so raising sodium faster than roughly 8 to 10 mmol/L per day dehydrates them and causes osmotic demyelination of the pons, a delayed quadriparesis that appears after the biochemistry has apparently improved.',
      tests: 'treatment',
    },
  ],
};

export default rbpPituitaryPathology;
