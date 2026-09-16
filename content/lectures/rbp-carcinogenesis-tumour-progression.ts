import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpCarcinogenesisTumourProgression: Lecture = {
  id: 'rbp-carcinogenesis-tumour-progression',
  title: 'Carcinogenesis, Invasion & Metastasis',
  system: 'pathology',
  source: 'Ch 5 — Neoplasia',
  updated: '2026-09-16',
  tags: [
    { kind: 'system', label: 'Pathology' },
    { kind: 'lecture', label: 'Ch 5 Neoplasia' },
    { kind: 'mechanism', label: 'Hallmarks, two-hit loss, and a metastatic cascade that mostly fails' },
    { kind: 'exam', label: 'Inherited cancer syndromes are dominant in the pedigree, recessive in the cell' },
  ],

  highYield: [
    "**Cancer is a portfolio, not a mutation: eight capabilities must all be acquired before a clone behaves malignantly.** Self-sufficiency in growth signals (RAS, ERBB2), insensitivity to growth inhibition (RB, TGF-beta pathway), evasion of apoptosis (TP53, BCL2), limitless replication through telomerase reactivation, sustained angiogenesis (VEGF driven by HIF-1-alpha), invasion and metastasis, reprogrammed metabolism, and escape from immune destruction — enabled throughout by genomic instability and tumour-promoting inflammation. Reprogrammed metabolism is the **Warburg effect**: tumours run glycolysis even with oxygen available, trading ATP yield for the carbon skeletons a dividing cell needs, and that is exactly what an FDG-PET scan photographs. A typical solid tumour carries 4 to 8 driver mutations among thousands of passengers, which is why carcinogenesis takes decades. See [[carcinogenesis-molecular]].",
    "**Oncogenes are gain-of-function and dominant in the cell; tumour suppressors are loss-of-function and recessive in the cell.** One mutated allele activates an oncogene, and it does so by one of three routes: point mutation (**RAS**, altered in roughly 30 per cent of human tumours, where substitutions at codons 12, 13 or 61 abolish GTPase activity and lock the protein in its GTP-bound active state), amplification (NMYC in neuroblastoma, ERBB2 in breast) or translocation (BCR-ABL from t(9;22) in chronic myeloid leukaemia, MYC placed under the immunoglobulin heavy-chain promoter by t(8;14) in Burkitt lymphoma). Tumour suppressors need **both** alleles knocked out: RB on 13q14, TP53 on 17p13 and altered in over half of all human cancers, APC, BRCA1 and BRCA2, NF1, VHL. The second hit need not be a mutation — deletion, mitotic recombination, nondisjunction giving loss of heterozygosity, or promoter hypermethylation all silence the survivor.",
    "**Resolve the paradox once and it stays resolved: inherited cancer syndromes are dominant at the level of the patient and recessive at the level of the cell.** Retinoblastoma is transmitted as an autosomal dominant trait, yet RB1 is a recessive tumour suppressor. The carrier inherits one defective RB1 allele in every cell of the body, including all of the roughly one to ten million retinoblasts. A tumour then needs only one somatic second hit in any one of those cells — and across that many cells, over the first years of life, at least one second hit is near-certain. Penetrance therefore runs above 90 per cent and the pedigree looks dominant, while the gene itself still obeys the two-hit rule inside the cell. The sporadic case needs two independent somatic hits in the same cell, which is vastly less likely: hence sporadic retinoblastoma is **unilateral, unifocal and later**, while familial disease is **bilateral, multifocal, earlier** and carries a lifetime risk of second primaries, classically osteosarcoma. The same arithmetic explains BRCA1, APC and Lynch syndrome families.",
    "**The metastatic cascade is a sequence of filters, and almost everything is filtered out.** A gram of tumour can shed on the order of a million cells a day into the circulation, yet well under 0.01 per cent of them ever establish a deposit. Step one is detachment: loss of **E-cadherin**, the invasion suppressor that holds epithelial cells to one another. Step two is degradation of the basement membrane by matrix metalloproteinases, chiefly MMP-9, a type IV collagenase whose cleavage fragments are themselves chemotactic and pro-angiogenic. Then migration on laminin and fibronectin, intravasation, survival in transit (platelet cloaking, resistance to anoikis, escape from natural killer cells), arrest and extravasation, and finally colonisation — which requires an angiogenic switch in a permissive niche. Cells that arrive but never switch stay as dormant micrometastases, which is why breast cancer can relapse more than ten years after apparently curative surgery.",
    "**Where a tumour spreads follows drainage first and tissue compatibility second, and both halves are examined.** Carcinomas favour lymphatics and seed regional nodes first; sarcomas favour the haematogenous route. The two great filters are anatomical: everything draining into the **portal vein** is caught by the liver, and everything draining into the **caval system** is caught by the lung. That accounts for colorectal cancer to liver and osteosarcoma to lung without invoking anything else. The named exceptions are the exam material: renal cell carcinoma grows along the renal vein into the inferior vena cava, hepatocellular carcinoma invades portal and hepatic veins, follicular thyroid carcinoma spreads haematogenously while papillary spreads by lymphatics, and prostate carcinoma reaches the vertebrae through the valveless paravertebral plexus of Batson, bypassing the lung altogether. Pure mechanics also fails to explain why bronchogenic carcinoma seeds adrenal, or why skeletal muscle and spleen are almost never seeded despite enormous blood flow — that residue is the seed-and-soil half. More in [[cancer-spread-staging-clinical]].",
    "**Paraneoplastic syndromes are tumour effects that are neither mass nor metastasis, and cachexia is the commonest of them.** They occur in about 10 per cent of cancer patients, may be the first sign of an occult tumour and may be the earliest marker of recurrence. The set worth knowing cold: SIADH and ectopic ACTH from small cell lung carcinoma (the ectopic Cushing presents with hypokalaemic alkalosis and pigmentation rather than the classic habitus, because it develops too fast to remodel the body), hypercalcaemia from **PTH-related peptide** in squamous cell carcinoma of lung, renal and breast cancer, Lambert-Eaton myasthenic syndrome from antibodies to presynaptic voltage-gated calcium channels, migratory thrombophlebitis with mucin-secreting adenocarcinoma of pancreas, acanthosis nigricans with gastric adenocarcinoma, and hypertrophic osteoarthropathy with non-small-cell lung cancer. **Cancer cachexia is not starvation**: the basal metabolic rate rises rather than falls, and skeletal muscle is catabolised alongside fat, driven by TNF-alpha, IL-1, IL-6 and proteolysis-inducing factor. That is precisely why feeding more calories does not reverse it. The syndromes are catalogued in [[add-paraneoplastic-syndromes-mechanisms-and-clinical-manifes]]; the morphology they sit on is [[rbp-neoplasia-nomenclature-biology]].",
  ],

  mechanism: {
    title: 'The metastatic cascade — six filters, each of which can stop the clone',
    steps: [
      {
        id: 's1',
        label: 'Detachment: E-cadherin is lost, so cells no longer hold one another in an epithelial sheet',
        detail: 'E-cadherin is the invasion suppressor. Its loss is both the first physical step and the reason the cells stop obeying contact inhibition.',
        emphasis: 'key',
      },
      {
        id: 's2',
        label: 'Basement membrane degradation: MMP-9 and other metalloproteinases cut type IV collagen',
        detail: 'The cleavage fragments are not waste — they are chemotactic and pro-angiogenic, so digesting the membrane also recruits the vessels the tumour will need.',
        emphasis: 'key',
      },
      {
        id: 's3',
        label: 'Migration through stroma on laminin and fibronectin receptors, with autocrine motility factors setting direction',
        detail: 'Tumour cells co-opt the stromal fibroblasts and macrophages rather than fighting them; the desmoplastic reaction is part of the machinery, not bystander scarring.',
      },
      {
        id: 's4',
        label: 'Intravasation and transit: the bottleneck where almost the whole clone is destroyed',
        detail: 'Shear stress, anoikis and natural killer cells kill the great majority. Survivors travel cloaked in platelet aggregates. Under 0.01 per cent of circulating tumour cells produce a deposit.',
        emphasis: 'danger',
      },
      {
        id: 's5',
        label: 'Arrest and extravasation at the first capillary bed downstream — liver for portal drainage, lung for caval',
        detail: 'Anatomy explains most destinations. What it fails to explain (prostate to vertebrae via Batson plexus, bronchogenic carcinoma to adrenal) is where seed-and-soil takes over.',
        emphasis: 'key',
      },
      {
        id: 's6',
        label: 'Colonisation: the angiogenic switch must be thrown or the deposit stays a dormant micrometastasis',
        detail: 'Arrival is not metastasis. A deposit that cannot recruit vessels stalls at roughly 1 to 2 mm, which is how breast cancer relapses more than a decade after curative surgery.',
        emphasis: 'danger',
      },
    ],
    branches: [
      {
        fromId: 's2',
        title: 'The lymphatic route that most carcinomas take first',
        steps: [
          { id: 'b1', label: 'Tumour enters thin-walled lymphatics, which have no basement membrane to cross', emphasis: 'key' },
          { id: 'b2', label: 'Regional nodes are seeded in order of drainage — the basis of sentinel node biopsy' },
          { id: 'b3', label: 'Thoracic duct delivers abdominal carcinoma to the left supraclavicular node: the Virchow node', emphasis: 'key' },
        ],
      },
    ],
  },

  examFindings: [
    {
      sign: 'Bilateral, multifocal retinoblastoma diagnosed before the first birthday',
      mechanism: 'A germline RB1 first hit is present in every retinoblast, so several independent second hits occur; sporadic disease needs two hits in one cell and is unilateral, unifocal and later',
      significance: 'key',
    },
    {
      sign: 'An enlarged, hard left supraclavicular node in a patient with weight loss and dyspepsia',
      mechanism: 'The Virchow node — the thoracic duct drains the abdomen into the left venous angle, so gastric and other abdominal carcinomas seed it first',
      significance: 'key',
    },
    {
      sign: 'Proximal weakness in a smoker that improves after sustained or repeated contraction',
      mechanism: 'Lambert-Eaton syndrome: antibodies against presynaptic voltage-gated calcium channels, so repetitive activity accumulates calcium and augments release — the opposite of myasthenia gravis, where use worsens weakness',
      significance: 'key',
    },
    {
      sign: 'Hypercalcaemia with a suppressed intact PTH and no lytic lesions on skeletal survey',
      mechanism: 'PTH-related peptide from a squamous, renal or breast carcinoma acts on the PTH receptor and suppresses the parathyroids by feedback — the pattern that separates it from primary hyperparathyroidism, where PTH is inappropriately high',
      significance: 'key',
    },
    {
      sign: 'Migratory superficial thrombophlebitis appearing in unusual sites',
      mechanism: 'Trousseau sign of malignancy — mucin from adenocarcinoma, classically pancreatic, activates coagulation directly and produces a hypercoagulable state independent of tumour bulk',
      significance: 'key',
    },
    {
      sign: 'Temporal and interosseous wasting with loss of fat in a patient whose calorie intake has been maintained',
      mechanism: 'Cachexia: TNF-alpha, IL-1, IL-6 and proteolysis-inducing factor raise the basal metabolic rate and catabolise skeletal muscle, so the deficit is metabolic rather than nutritional',
      significance: 'supportive',
    },
  ],

  investigations: [
    {
      clue: 'FISH or karyotype showing t(9;22) with a BCR-ABL fusion',
      meaning: 'A translocation-activated oncogene: a constitutively active tyrosine kinase built by juxtaposition, not by point mutation. It is also the model case for matching a driver to a drug, since imatinib targets exactly that fusion protein',
    },
    {
      clue: 'ERBB2 amplification by FISH with a ratio of 2.0 or more, or 6 or more gene copies',
      meaning: 'Gain of function by gene dosage rather than by an altered protein sequence. Amplification is the oncogene mechanism that immunohistochemistry alone can misclassify, which is why equivocal cases go to FISH',
    },
    {
      clue: 'Loss of heterozygosity across a tumour suppressor locus in tumour DNA that is heterozygous in blood',
      meaning: 'Documents the second hit. The comparison also separates germline from somatic — the finding matters to the family only if the first hit is present in blood',
    },
    {
      clue: 'Serum sodium 118 mmol/L with urine osmolality above serum osmolality in a euvolaemic smoker',
      meaning: 'SIADH, and in this context ectopic antidiuretic hormone from a small cell lung carcinoma. The tumour may be radiologically small: a paraneoplastic syndrome tracks secretion, not bulk',
    },
    {
      clue: 'A raised PTH-related peptide with suppressed intact PTH',
      meaning: 'Humoral hypercalcaemia of malignancy. It separates the paraneoplastic mechanism from both primary hyperparathyroidism (PTH high) and osteolytic metastatic hypercalcaemia (PTH suppressed but lytic lesions present)',
    },
    {
      clue: 'An FDG-avid lesion on PET',
      meaning: 'The Warburg effect made into an image — aerobic glycolysis draws in labelled glucose. It also explains the two failure modes: inflammation and infection are FDG-avid and give false positives, while mucinous, low-grade and prostate tumours can be FDG-negative',
    },
  ],

  treatment: [
    {
      logic: 'Why it matters',
      detail: "The oncogene and tumour suppressor split is what makes cancer therapy targetable at all. A gain-of-function driver can be inhibited — imatinib against BCR-ABL, trastuzumab against ERBB2, EGFR inhibitors in lung adenocarcinoma — whereas **a lost tumour suppressor cannot be replaced by a drug**, which is why TP53, the commonest alteration in human cancer, is still not directly druggable. The two-hit arithmetic is the basis of clinical genetics: identify a germline first hit and every cell in the body is already one step along, so surveillance starts decades early and risk-reducing surgery becomes reasonable. The cascade explains the shape of treatment too: **adjuvant therapy exists because of dormant micrometastases**, cells that were already disseminated when the primary was resected and are invisible to every scan. And the paraneoplastic syndromes matter because they can be the presenting complaint — hyponatraemia, hypercalcaemia or a proximal myopathy in a smoker should trigger a search for a tumour before it is palpable.",
    },
    {
      logic: 'Where it is examined',
      detail: "Four stems recur. **Why an inherited cancer syndrome is dominant when the gene is recessive** — the germline first hit is in every cell, so a single somatic second hit among millions of target cells is near-certain; the trait is dominant in the pedigree and the gene is recessive in the cell. **Which route explains this metastasis** — check the venous drainage first: portal to liver, caval to lung, and name Batson plexus if the answer is prostate to spine. **Which mechanism activated this oncogene** — point mutation for RAS, amplification for NMYC and ERBB2, translocation for BCR-ABL and MYC. **Is this a paraneoplastic syndrome or a metastasis** — hypercalcaemia with suppressed PTH and a clean skeletal survey is PTH-related peptide, not bone deposits. Weight loss questions hinge on the same distinction: cachexia raises the metabolic rate while starvation lowers it. The nomenclature and staging scaffolding is in [[rbp-neoplasia-nomenclature-biology]].",
    },
  ],

  mnemonics: [
    {
      hook: 'One hit inherited, one hit acquired',
      expansion: [
        'Germline carrier: every cell already holds hit one, so hit two anywhere in a million target cells is near-certain',
        'Result in the pedigree: high penetrance, early onset, bilateral and multifocal tumours, plus second primaries',
        'Sporadic case: two independent somatic hits in the same cell, so unilateral, unifocal and later',
        'Second hits come from deletion, mitotic recombination, nondisjunction or promoter methylation, not only from point mutation',
      ],
    },
    {
      hook: 'Portal to liver, caval to lung',
      expansion: [
        'Gut, pancreas and colon drain portally, so the liver is the first filter',
        'Everything else drains to the caval system, so the lung is the first filter — hence osteosarcoma to lung',
        'Exceptions to name: renal cell into the renal vein and inferior vena cava, prostate to vertebrae through the valveless Batson plexus',
        'Carcinoma prefers lymphatics, sarcoma prefers blood — a tendency with enough exceptions that the drainage question comes first',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'Inheritance of a cancer predisposition syndrome',
      wrongInstinct: 'RB1 must be a dominant gene, because retinoblastoma is inherited as an autosomal dominant trait.',
      rightAnswer: 'RB1 is recessive in the cell and dominant in the pedigree — both statements are true at once, at different levels.',
      why: 'The carrier inherits the first hit in every cell, so a second somatic hit in one of millions of retinoblasts is effectively certain; the trait therefore behaves dominantly while the gene still needs both alleles lost.',
    },
    {
      questionCategory: 'Weight loss in advanced cancer',
      wrongInstinct: 'Cachexia is starvation, so increase the calories and the patient will regain weight.',
      rightAnswer: 'Cachexia is a cytokine-driven hypermetabolic state that catabolises skeletal muscle; nutritional support helps symptoms but does not reverse it.',
      why: 'In starvation the basal metabolic rate falls and fat is spent while lean mass is spared early; in cachexia the metabolic rate rises and muscle is broken down alongside fat, driven by TNF-alpha, IL-1, IL-6 and proteolysis-inducing factor.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A child with bilateral retinoblastoma has a germline RB1 mutation. Which best explains why the condition is transmitted as an autosomal dominant trait even though RB1 behaves as a recessive gene within the cell?',
      options: [
        { id: 'a', text: 'The inherited allele is dominant-negative and poisons the normal RB protein' },
        { id: 'b', text: 'Every retinoblast already carries the first hit, so a somatic second hit in at least one of millions of cells is near-certain' },
        { id: 'c', text: 'RB1 escapes X-inactivation, so both copies are expressed in every retinal cell' },
        { id: 'd', text: 'Germline mutations are amplified during retinal development' },
      ],
      answerId: 'b',
      explanation: 'The two-hit rule is unchanged: the cell still needs both RB1 alleles inactivated. What changes in a carrier is the probability. One defective allele is present in all one to ten million retinoblasts, so at least one second hit occurs in practically every carrier, giving over 90 per cent penetrance and a pedigree that looks dominant. Sporadic disease needs two hits in the same cell and is therefore unilateral, unifocal and later.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A sigmoid adenocarcinoma metastasises first to the liver, while an osteosarcoma of the distal femur metastasises first to the lungs. What accounts for the difference?',
      options: [
        { id: 'a', text: 'Venous drainage determines the first capillary bed encountered — portal to liver, caval to lung' },
        { id: 'b', text: 'Sarcomas can only spread by lymphatics and carcinomas only by blood' },
        { id: 'c', text: 'Hepatic tissue uniquely lacks natural killer cells' },
        { id: 'd', text: 'Tumour cells select a destination by chemotaxis before entering the circulation' },
      ],
      answerId: 'a',
      explanation: 'Most metastatic destinations are explained by the first vascular filter downstream. Sigmoid colon drains into the portal system, so the liver is first; the femur drains into the caval system, so the lung is first. Seed-and-soil is invoked only for the residue that anatomy fails to explain, such as prostate to vertebrae through the Batson plexus or bronchogenic carcinoma to adrenal.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A 64-year-old smoker has a corrected calcium of 3.2 mmol/L, a suppressed intact PTH and a normal skeletal survey. A hilar mass shows squamous cell carcinoma. What is the mechanism of the hypercalcaemia?',
      options: [
        { id: 'a', text: 'Primary hyperparathyroidism coexisting with the tumour' },
        { id: 'b', text: 'Widespread osteolytic bone metastases below the resolution of the survey' },
        { id: 'c', text: 'Secretion of PTH-related peptide acting on the PTH receptor' },
        { id: 'd', text: 'Ectopic secretion of intact PTH by the tumour' },
      ],
      answerId: 'c',
      explanation: 'Squamous cell carcinoma of lung is the classic source of PTH-related peptide, which binds the PTH receptor, raises calcium and suppresses the parathyroid glands by feedback. The suppressed intact PTH excludes primary hyperparathyroidism and ectopic intact PTH, which is very rare; the clean skeletal survey argues against osteolytic deposits. It is a humoral paraneoplastic effect, independent of tumour bulk.',
      tests: 'disease',
    },
  ],
};

export default rbpCarcinogenesisTumourProgression;
