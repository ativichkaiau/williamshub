import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpThyroidPathology: Lecture = {
  id: 'rbp-thyroid-pathology',
  title: 'Thyroid Pathology',
  system: 'endocrine',
  source: 'Ch 19 — Endocrine System',
  updated: '2026-09-22',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'Ch 19 Endocrine System' },
    { kind: 'mechanism', label: 'Stimulating autoantibody, follicular destruction and nuclear morphology' },
    { kind: 'disease', label: 'Graves disease, the thyroiditides and thyroid carcinoma' },
  ],

  highYield: [
    '**The most useful rule in thyroid disease is that a HYPERFUNCTIONING nodule is almost never malignant while a COLD nodule may be — and it works because the scan and the needle answer two different questions.** Nodules are common and cancer in them is not: roughly **5 to 10%** of clinically apparent nodules are malignant, but a nodule that concentrates radioiodine more avidly than the surrounding gland is malignant in **well under 1%**, because malignant follicular cells lose the differentiated machinery — the sodium-iodide symporter, thyroid peroxidase, thyroglobulin synthesis — that makes trapping possible. A cancer therefore cannot be hot. The order of testing follows directly. **Measure TSH first.** If TSH is **SUPPRESSED**, the nodule may be autonomously making hormone, so do a **radionuclide scan**, and a hot nodule is then treated for hyperthyroidism and needs no biopsy. If TSH is **normal or raised**, the nodule cannot be autonomous, a scan would show nothing useful, and the question is malignancy — so go to **ultrasound and fine-needle aspiration**. The scan asks whether the nodule works; the needle asks what the nodule is. Other features that raise concern are **male sex, age under 20 or over 60, a solitary rather than multiple nodule, a history of head and neck irradiation, rapid growth, fixation, hoarseness, and cervical lymphadenopathy**.',
    '**Graves disease is a type II hypersensitivity in which the antibody ACTIVATES its receptor instead of destroying it — one of the very few that does — and every feature of the disease follows from that single inversion.** The mechanism layer is in [[rbp-hypersensitivity-reactions]]. An IgG **thyroid-stimulating immunoglobulin** binds the **TSH receptor** and drives Gs and cAMP continuously, unregulated by thyroid hormone, so negative feedback cannot switch it off. The gland responds as if TSH were permanently maximal: **diffuse, symmetrical hyperplasia** with a beefy soft hypervascular parenchyma, and under the microscope **TALL, CROWDED COLUMNAR follicular epithelium thrown into papillary infoldings that LACK fibrovascular cores** — the detail that separates hyperplasia from papillary carcinoma — with **pale, scalloped colloid** eaten away at the edges by active resorption, and scattered lymphoid aggregates with germinal centres. Biochemically the pattern is **T4 and T3 high, TSH undetectable, and radioiodine uptake DIFFUSELY INCREASED**. The extrathyroidal features are the reason the antigen matters: **retro-orbital fibroblasts and preadipocytes also express the TSH receptor**, so the same antibody stimulates them to secrete hydrophilic **glycosaminoglycans** and to differentiate into fat, and the orbital contents swell inside a rigid bony orbit — **proptosis, with enlarged extraocular muscles whose TENDINOUS INSERTIONS ARE SPARED** on imaging, which is what distinguishes it from orbital myositis. The same mechanism in the skin of the shin gives **pretibial myxoedema**, firm non-pitting plaques of dermal glycosaminoglycan ([[hyperthyroidism-graves]]).',
    '**Three thyroiditides, and each is recognised by one feature: Hashimoto by germinal centres and Hurthle cells, de Quervain by pain and granulomas, Riedel by fibrosis that escapes the capsule.** **HASHIMOTO thyroiditis** is the commonest cause of hypothyroidism where iodine is sufficient, peaks at **45 to 65** with a female excess of **10 to 20 to 1**, and is linked to **HLA-DR3 and DR5, CTLA4 and PTPN22**. It is destruction by both arms of immunity: **CD8 cytotoxic T cells** kill thyrocytes directly while **anti-thyroid peroxidase and anti-thyroglobulin** antibodies mark the process. Morphology: the gland is diffusely enlarged, firm and pale, with a **dense lymphoplasmacytic infiltrate forming WELL-DEVELOPED GERMINAL CENTRES**, atrophic follicles lined by **HURTHLE (oncocytic) cells** — plump cells with abundant granular eosinophilic cytoplasm stuffed with mitochondria — and interstitial fibrosis that **stays within the capsule**. Up to a third begin with a transient thyrotoxic phase (hashitoxicosis) as damaged follicles leak stored hormone. The long-term risk worth knowing is **B-cell non-Hodgkin lymphoma, characteristically MALT type**, arising in that chronic lymphoid tissue — relative risk is high although the absolute risk is small, and the clue is a Hashimoto gland that suddenly enlarges ([[rbp-lymphoid-neoplasms-lymphoma]]). **DE QUERVAIN (subacute granulomatous) thyroiditis** follows a viral upper respiratory infection, is the **one PAINFUL thyroiditis**, shows patchy follicular disruption with **multinucleate giant cells engulfing naked colloid** and granulomas, runs a raised **ESR**, and is self-limiting over 6 to 8 weeks. **RIEDEL thyroiditis** replaces the gland with dense fibrous tissue that **EXTENDS BEYOND THE CAPSULE into the strap muscles and trachea**, producing a stony-hard fixed mass that mimics anaplastic carcinoma; it is part of the IgG4-related fibrosclerosing spectrum, and only biopsy settles it.',
    '**Thyrotoxicosis with a LOW radioiodine uptake is not hyperthyroidism at all — it is a gland leaking preformed hormone, and antithyroid drugs are useless against it.** This is the single test that reorganises the whole differential. **HIGH uptake** means the gland is actively synthesising: diffuse uptake is **Graves**, one hot focus is a **toxic adenoma**, and patchy uptake is **toxic multinodular goitre (Plummer disease)**, which arises in a long-standing goitre when a clone acquires an activating **TSHR or GNAS** mutation and escapes regulation. **LOW uptake** means synthesis has stopped while hormone still floods the blood: **de Quervain and painless or postpartum lymphocytic thyroiditis** (follicles ruptured, hormone released, gland exhausted), **iodine excess**, or **exogenous hormone**. Thyroglobulin separates the last one — it is **raised in destructive thyroiditis** because thyrocyte contents spill out, and **LOW in factitious thyrotoxicosis** because the suppressed gland makes none. On the deficiency side, **iodine lack lowers hormone output, TSH rises, and the gland hypertrophies and hyperplases into a diffuse goitre**; recurrent cycles of involution and hyperplasia then make it irregular, giving the **MULTINODULAR goitre** with its variably sized colloid-rich nodules, haemorrhage, fibrosis and calcification, which can reach enormous size, extend retrosternally and compress the trachea or oesophagus. Hypothyroidism itself is morphologically the same GAG problem as pretibial myxoedema: accumulation of glycosaminoglycans in dermis and interstitium giving the **non-pitting puffiness of MYXOEDEMA** in adults, and, when maternal and fetal deficiency is severe in early life, **CRETINISM** with irreversible intellectual disability and short stature.',
    '**Papillary carcinoma is diagnosed by its NUCLEI, not by its architecture, and that is why a needle is enough.** It is around **85%** of thyroid cancers, follows **ionising radiation before the age of 20**, and carries **BRAF V600E** in roughly half to 60% or **RET/PTC** rearrangements, which dominate the radiation-associated cases. The diagnosis rests on four nuclear findings: **optically clear, empty-looking nuclei — the ORPHAN ANNIE EYE**, produced by finely dispersed chromatin; longitudinal **NUCLEAR GROOVES**; **intranuclear cytoplasmic PSEUDOINCLUSIONS**, which are invaginations of cytoplasm rather than true inclusions; and **PSAMMOMA BODIES**, concentrically laminated calcifications that lie in the papillary stalks and are essentially never seen in a benign thyroid lesion. Two practical corollaries. Because the features are nuclear and cytological, **fine-needle aspiration is diagnostic** — the architecture is not needed, and follicular-variant tumours with no papillae are still papillary carcinoma on nuclear grounds. And because the Orphan Annie appearance is a **fixation artefact of formalin**, it is **NOT visible on frozen section**, which is why intraoperative frozen section is unreliable here. It spreads **LYMPHATICALLY** to cervical nodes, is often multifocal, and nodal metastasis barely affects outcome: **10-year survival is above 95%**, so a young patient with a neck node and a small thyroid primary has an excellent prognosis ([[thyroid-neoplasms]]).',
    '**Follicular carcinoma CANNOT be diagnosed on a needle, because the diagnosis is not in the cells at all — it is in the capsule, and this is the highest-yield practical point in thyroid pathology.** A follicular adenoma and a follicular carcinoma are made of the same bland follicular cells; what separates them is **CAPSULAR and/or VASCULAR INVASION**, which can only be demonstrated by examining the entire circumference of the capsule on multiple blocks of the excised lesion. An aspirate samples cells and destroys the architecture, so it can never answer the question — which is why such a smear is reported as a **follicular neoplasm (Bethesda category IV)** and why the next step is a **diagnostic lobectomy**, not more cytology. Follicular carcinoma is **5 to 15%** of thyroid cancers, commoner where iodine is deficient, carries **RAS** mutations or a **PAX8-PPARG** fusion, and spreads **HAEMATOGENOUSLY to bone and lung** rather than to nodes — the inverse of papillary. **MEDULLARY carcinoma** is a different cell of origin entirely: the neural-crest-derived **parafollicular C cells**, which secrete **CALCITONIN**. Histology shows nests and sheets of polygonal to spindle cells in an **AMYLOID stroma**, and that amyloid is polymerised calcitonin — Congo red gives apple-green birefringence under polarised light. About **70 to 80%** are sporadic and the rest familial within **MEN2**, where the tumours are bilateral and multicentric and are preceded by **C-cell hyperplasia** — so bilateral disease in a young patient is a syndrome until proved otherwise. **ANAPLASTIC carcinoma** is the opposite pole: patients over **65**, a rapidly enlarging fixed mass with hoarseness and stridor, bizarre giant and spindle cells with **TP53** mutation, frequently arising within a pre-existing differentiated carcinoma, and a median survival measured in **months** with mortality near 100%.',
  ],

  mechanism: {
    title: 'Graves disease: an autoantibody that switches a receptor ON',
    steps: [
      { id: 's1', label: 'Tolerance to the TSH receptor is lost in a susceptible host (HLA-DR3, CTLA4, PTPN22), and autoreactive B cells are helped by CD4 T cells', detail: 'Peak incidence is 20 to 40 years with a female to male ratio around 7 to 1, and the same genetic background predisposes to Hashimoto thyroiditis in other family members.', emphasis: 'normal' },
      { id: 's2', label: 'IgG thyroid-stimulating immunoglobulin binds the TSH receptor and AGONISES it: a type II hypersensitivity that activates rather than destroys', detail: 'This is the inversion that defines the disease. Because the antibody is not thyroid hormone, negative feedback cannot switch it off, so stimulation is continuous and unregulated.', emphasis: 'key' },
      { id: 's3', label: 'Gs and cAMP are driven constantly: diffuse hyperplasia with tall crowded columnar epithelium, papillary infoldings without fibrovascular cores, and scalloped colloid', detail: 'The absence of fibrovascular cores in those infoldings is what keeps this hyperplasia and not papillary carcinoma, and the scalloping records active colloid resorption.', emphasis: 'key' },
      { id: 's4', label: 'Autonomous hormone output raises T4 and T3, drives TSH to undetectable, and gives a DIFFUSELY INCREASED radioiodine uptake', detail: 'High uptake proves the gland is synthesising. This is the pair of results that separates Graves from a destructive thyroiditis, in which uptake is low.', emphasis: 'key' },
      { id: 's5', label: 'Retro-orbital fibroblasts and preadipocytes express the same TSH receptor, so the antibody stimulates them to secrete glycosaminoglycans and to become adipocytes', detail: 'Shared antigen, not spillover inflammation, is why ophthalmopathy tracks the antibody and can worsen even after the thyroid itself has been ablated.', emphasis: 'key' },
      { id: 's6', label: 'The orbital contents swell inside a rigid bony orbit: proptosis, enlarged extraocular muscles with tendon sparing, diplopia, exposure keratitis and, at the extreme, optic nerve compression', detail: 'Tendon sparing distinguishes it from orbital myositis. Optic neuropathy at the crowded apex is the sight-threatening end of the same volume problem.', emphasis: 'danger' },
    ],
    branches: [
      {
        fromId: 's3',
        title: 'The same thyrotoxicosis with a COLD scan',
        steps: [
          { id: 'b1', label: 'Viral infection or autoimmune attack ruptures follicles instead of stimulating them, and stored hormone leaks into the blood', emphasis: 'key' },
          { id: 'b2', label: 'Synthesis stops while circulating hormone is high, so TSH is suppressed but radioiodine uptake is LOW', emphasis: 'key' },
          { id: 'b3', label: 'Thyroglobulin is HIGH, because thyrocyte contents are spilling out; in factitious thyrotoxicosis it is LOW instead', emphasis: 'normal' },
          { id: 'b4', label: 'The store is finite, so thyrotoxicosis gives way to a hypothyroid phase and then recovery: thionamides have nothing to block', emphasis: 'danger' },
        ],
      },
    ],
  },

  examFindings: [
    { sign: 'A diffusely enlarged, smooth, non-tender thyroid with an audible bruit over the upper poles', mechanism: 'Continuous TSH-receptor stimulation produces hyperplasia and a marked increase in blood flow through a hypervascular gland, so a bruit or palpable thrill appears. It is a sign of a working, over-driven gland, which is why it belongs to Graves and not to a destructive thyroiditis', significance: 'key' },
    { sign: 'Proptosis with lid retraction and incomplete eyelid closure, and imaging showing thickened extraocular muscle bellies whose tendinous insertions are spared', mechanism: 'Retro-orbital fibroblasts express the TSH receptor, so the same stimulating antibody drives them to lay down hydrophilic glycosaminoglycans and to differentiate into fat. The orbit cannot expand, so the globe is pushed forward. Tendon sparing is the discriminator from orbital myositis, which involves the tendons', significance: 'key' },
    { sign: 'Firm, non-pitting, orange-peel plaques over the shins that do not indent on pressure', mechanism: 'Pretibial myxoedema: dermal deposition of glycosaminoglycans by fibroblasts stimulated through the same TSH receptor. It does not pit because the swelling is bound mucopolysaccharide rather than free interstitial fluid, which is the whole difference from oedema', significance: 'supportive' },
    { sign: 'An exquisitely tender thyroid with fever, malaise and pain radiating to the jaw and ear, two weeks after a sore throat', mechanism: 'De Quervain granulomatous thyroiditis. Viral or post-viral injury ruptures follicles, and extravasated colloid provokes a granulomatous reaction with multinucleate giant cells, which is painful because it stretches the capsule. It is the one thyroiditis that hurts, and it resolves in 6 to 8 weeks', significance: 'key' },
    { sign: 'A stony-hard thyroid fixed to surrounding structures, with stridor, dysphagia and hoarseness in a middle-aged woman', mechanism: 'Riedel thyroiditis, in which dense fibrosis extends beyond the thyroid capsule into strap muscles and trachea. That extracapsular extension is what makes it hard and immobile and is precisely why it is mistaken for anaplastic carcinoma; open biopsy is needed to separate them', significance: 'key' },
    { sign: 'A firm 2 cm lateral cervical lymph node in a 26-year-old with a 1 cm thyroid nodule and normal thyroid function', mechanism: 'Papillary carcinoma, which spreads lymphatically and is frequently multifocal, so nodal disease can be the presenting sign of a small primary. It carries far less prognostic weight than the same finding elsewhere in oncology: 10-year survival remains above 95%', significance: 'key' },
  ],

  investigations: [
    { clue: 'Thyrotoxic patient with suppressed TSH; radioiodine uptake is diffusely increased across both lobes', meaning: 'Graves disease. High uptake proves active synthesis, which places the lesion in the gland and excludes the destructive and exogenous causes at a stroke. Diffuse rather than focal uptake then separates it from a toxic adenoma (one hot focus suppressing the rest) and from toxic multinodular goitre (patchy uptake in a nodular gland)' },
    { clue: 'Thyrotoxic patient with suppressed TSH; radioiodine uptake is very low, ESR is 78 and the gland is painful', meaning: 'Destructive thyroiditis, here de Quervain. The gland is not making hormone, it is leaking preformed hormone from ruptured follicles, so thionamides have no substrate to act on and the treatment is a beta blocker with an anti-inflammatory. Thyroglobulin is raised, which is how this is separated from exogenous hormone, where thyroglobulin is low' },
    { clue: 'Fine-needle aspirate of a cold nodule showing overlapping cells with optically clear nuclei, longitudinal grooves, intranuclear pseudoinclusions and scattered laminated calcifications', meaning: 'Papillary carcinoma. The diagnosis is nuclear and cytological, so the needle is sufficient and papillae are not required. Note the operative limitation: the clear Orphan Annie nucleus is an artefact of formalin fixation and is absent on frozen section, so intraoperative frozen section cannot be relied on to make this call' },
    { clue: 'Fine-needle aspirate showing a monotonous population of follicular cells in microfollicles with scant colloid, reported as a follicular neoplasm', meaning: 'This is a diagnostic dead end by design, and the correct next step is diagnostic lobectomy. Adenoma and carcinoma have identical cytology; only capsular or vascular invasion separates them, and that requires the whole capsule to be examined histologically. Repeating the aspirate cannot help, because the information needed is architectural' },
    { clue: 'Thyroid biopsy showing nests of polygonal cells in an acellular eosinophilic stroma that stains with Congo red and shows apple-green birefringence under polarised light', meaning: 'Medullary carcinoma. The stroma is amyloid formed from polymerised calcitonin secreted by the neoplastic parafollicular C cells, which is why calcitonin immunostaining is positive and serum calcitonin serves as the tumour marker. Bilateral, multicentric tumours with surrounding C-cell hyperplasia indicate the familial MEN2 form rather than sporadic disease' },
    { clue: 'Raised TSH with low free T4, strongly positive anti-thyroid peroxidase antibodies, and a gland showing germinal centres with atrophic follicles lined by plump granular eosinophilic cells', meaning: 'Hashimoto thyroiditis. The eosinophilic cells are Hurthle (oncocytic) cells, packed with mitochondria, and the germinal centres show that the lymphoid infiltrate is organised rather than reactive. That organised lymphoid tissue is the substrate for the disease to watch for: a Hashimoto gland that suddenly enlarges should raise suspicion of MALT lymphoma' },
  ],

  treatment: [
    {
      logic: 'Let the TSH choose the next test, because the scan and the needle answer different questions',
      detail: 'A thyroid nodule presents one of two questions and never both at once. **Measure TSH first.** A **SUPPRESSED** TSH raises the possibility of autonomy, so the next test is a **radionuclide scan**: a **hot nodule is malignant in well under 1%** — malignant follicular cells lose the sodium-iodide symporter and the rest of the trapping machinery, so a cancer cannot concentrate iodine better than normal tissue — and it is therefore treated as hyperthyroidism with **radioiodine or surgery**, with no biopsy needed. A **normal or raised** TSH means the nodule cannot be autonomous, so the scan has nothing to show and the question becomes malignancy: go to **ultrasound and fine-needle aspiration**. Sonographic features that argue for sampling are **microcalcifications, taller-than-wide shape, an irregular or infiltrative margin, marked hypoechogenicity and abnormal nodes**. Then respect what cytology can and cannot do: it **settles papillary carcinoma**, because those criteria are nuclear, and it **cannot settle a follicular lesion**, because those criteria are architectural — so a follicular neoplasm goes to **diagnostic lobectomy**.',
    },
    {
      logic: 'In thyrotoxicosis, block synthesis before you give iodine, and never assume the drug has anything to block',
      detail: 'Three targets, three drugs. **Thionamides** inhibit thyroid peroxidase and so block organification: **carbimazole or methimazole** is standard, with **propylthiouracil** preferred in the **first trimester** (methimazole risks aplasia cutis and choanal atresia) and in **thyroid storm**, because at high dose it additionally blocks peripheral **5-prime deiodinase** conversion of T4 to T3. A **beta blocker** treats the symptom, and **propranolol** is chosen for the same peripheral-conversion effect. **Iodine** in pharmacological dose transiently inhibits hormone release through the Wolff-Chaikoff effect, and the sequencing rule is absolute: **give the thionamide FIRST and the iodine at least an hour later**, because iodine arriving at an unblocked gland is simply substrate and can make the storm worse. **Radioiodine** is definitive for Graves and toxic nodular disease, accepting near-certain eventual hypothyroidism, but it **transiently worsens ophthalmopathy** by releasing thyroid antigen, so active eye disease is covered with **glucocorticoids** or treated surgically instead. Finally, the discipline that matters most: **confirm a HIGH uptake before prescribing a thionamide at all**, since destructive thyroiditis leaks preformed hormone and no amount of peroxidase blockade will touch it.',
    },
  ],

  mnemonics: [
    {
      hook: 'Hot is safe, cold is suspicious, and the reason is the trapping machinery',
      expansion: [
        'Concentrating iodine requires the sodium-iodide symporter, thyroid peroxidase and thyroglobulin synthesis, which are differentiated functions',
        'Malignant follicular cells lose those functions, so a cancer cannot out-trap the normal gland and cannot be hot',
        'Hot nodule: malignant in well under 1%, so treat the hyperthyroidism and skip the needle',
        'Cold nodule: may be malignant, so image it and aspirate it',
        'Order the tests by TSH: suppressed TSH sends the nodule to the scan, normal or raised TSH sends it to the needle',
      ],
    },
    {
      hook: 'Papillary is nuclei and lymphatics; follicular is capsule and blood',
      expansion: [
        'Papillary: Orphan Annie clear nuclei, grooves, pseudoinclusions, psammoma bodies — all nuclear, so FNA is diagnostic',
        'Papillary spreads by LYMPHATICS to cervical nodes, is often multifocal, and still has over 95% 10-year survival',
        'Follicular: cytology identical to adenoma, so the diagnosis needs capsular or vascular INVASION on the whole excised capsule',
        'Follicular therefore cannot be diagnosed by FNA — a follicular neoplasm goes to diagnostic lobectomy',
        'Follicular spreads HAEMATOGENOUSLY to bone and lung, which is the exact inverse of papillary',
        'Medullary is C cells, calcitonin and amyloid; anaplastic is the elderly patient with a fixed mass and months to live',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'Choosing the test for a follicular lesion',
      wrongInstinct: 'The aspirate shows a monotonous follicular population, so repeat the fine-needle aspiration or add immunostains to decide adenoma against carcinoma',
      rightAnswer: 'Proceed to diagnostic lobectomy. Follicular carcinoma is defined by capsular or vascular invasion, which requires histological examination of the entire capsule, so no aspirate of any quality can make the distinction',
      why: 'The discriminating feature is architectural and lives at the edge of the lesion, while an aspirate samples cells from the centre and destroys the architecture — the test physically cannot access the information the diagnosis depends on',
    },
    {
      questionCategory: 'Treating a thyrotoxic patient',
      wrongInstinct: 'Free T4 is high and TSH is suppressed, so this is hyperthyroidism and carbimazole should be started',
      rightAnswer: 'Establish the radioiodine uptake first. High uptake means the gland is synthesising and a thionamide will work; low uptake means preformed hormone is leaking from a damaged gland, and the treatment is a beta blocker with an anti-inflammatory while it burns itself out',
      why: 'A thionamide blocks thyroid peroxidase, so it can only act on hormone that has not yet been made — against a gland that is releasing its stores rather than building them, it has no substrate and therefore no effect',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 43-year-old woman has a 2.5 cm solitary thyroid nodule. TSH is 1.8 mIU/L and free T4 is normal. Fine-needle aspiration shows a monotonous population of follicular cells arranged in microfollicles with scant colloid and no nuclear grooves, clearing or pseudoinclusions. What is the correct next step and why?',
      options: [
        { id: 'a', text: 'Radionuclide scan, since a hot nodule would exclude malignancy' },
        { id: 'b', text: 'Repeat the aspirate with immunohistochemistry for galectin-3 to separate adenoma from carcinoma' },
        { id: 'c', text: 'Diagnostic lobectomy, because distinguishing follicular adenoma from follicular carcinoma requires demonstrating capsular or vascular invasion in the excised specimen' },
        { id: 'd', text: 'Reassure and rescan in twelve months, as cytology has excluded malignancy' },
      ],
      answerId: 'c',
      explanation: 'A follicular neoplasm on cytology is an intrinsically indeterminate result, and the reason is worth stating precisely: follicular adenoma and follicular carcinoma are composed of the same bland follicular cells, and what separates them is invasion through the capsule or into vessels at the periphery of the lesion. That is an architectural finding demonstrable only by examining the entire capsule on multiple histological blocks, so an aspirate, which samples cells and destroys architecture, cannot supply it however good the specimen or the stain. Option a fails on its own terms as well: with a normal TSH the nodule cannot be autonomous, so a scan has nothing to show. The same cytological limitation does not apply to papillary carcinoma, whose defining features are nuclear and therefore fully visible on a smear.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A 35-year-old woman has weight loss, palpitations and a smooth diffuse goitre with a bruit. She has proptosis; orbital CT shows thickened extraocular muscle bellies with normal tendinous insertions. TSH is undetectable, free T4 is high and radioiodine uptake is diffusely increased. Which statement best explains the eye findings?',
      options: [
        { id: 'a', text: 'Circulating thyroid hormone is directly toxic to the extraocular muscles, so the eye disease resolves as soon as T4 normalises' },
        { id: 'b', text: 'Retro-orbital fibroblasts express the TSH receptor, so the stimulating autoantibody drives glycosaminoglycan secretion and adipogenesis, expanding orbital contents within a rigid bony orbit' },
        { id: 'c', text: 'Immune complexes deposit in the orbital vessels, making this a type III hypersensitivity reaction' },
        { id: 'd', text: 'Cytotoxic T cells destroy orbital fat, and the proptosis reflects loss of the structures that tether the globe' },
      ],
      answerId: 'b',
      explanation: 'Graves ophthalmopathy is a shared-antigen phenomenon, not a consequence of the hormone level, and that is precisely why it can appear before thyrotoxicosis, persist after the patient is rendered euthyroid, and flare after radioiodine releases thyroid antigen. The TSH receptor is expressed by orbital fibroblasts and preadipocytes as well as thyrocytes, so the same IgG thyroid-stimulating immunoglobulin stimulates them to secrete hydrophilic glycosaminoglycans and to differentiate into adipocytes. The orbit is a closed bony cone, so the increase in volume pushes the globe forward, thickens the muscle bellies and in severe cases crowds the apex enough to compress the optic nerve. The sparing of the tendinous insertions is the imaging discriminator from orbital myositis. Graves is a type II hypersensitivity in which the antibody uniquely activates its receptor rather than destroying the target cell, which excludes option c.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A 28-year-old woman four months postpartum has two weeks of palpitations, tremor and heat intolerance. The thyroid is mildly enlarged and painless. TSH is undetectable, free T4 is raised, and 24-hour radioiodine uptake is 2% (normal 10 to 30%). Thyroglobulin is raised. Which statement is correct?',
      options: [
        { id: 'a', text: 'Start carbimazole, since inhibiting thyroid peroxidase will control the thyrotoxicosis' },
        { id: 'b', text: 'This is painless postpartum lymphocytic thyroiditis; the gland is releasing stored hormone, so treat symptoms with a beta blocker and expect a hypothyroid phase before recovery' },
        { id: 'c', text: 'The low uptake indicates Graves disease with a very rapid hormone turnover' },
        { id: 'd', text: 'The raised thyroglobulin indicates surreptitious ingestion of levothyroxine' },
      ],
      answerId: 'b',
      explanation: 'The low uptake is the decisive result and it reorganises the whole differential: a gland that is not taking up iodine is not synthesising hormone, so the circulating excess must be preformed hormone escaping from damaged follicles. That makes a thionamide useless, because blocking thyroid peroxidase can only prevent synthesis that is not happening, and it is why option a is a genuine clinical error rather than merely a suboptimal choice. The painless gland, the postpartum timing and the raised thyroglobulin complete the picture of destructive lymphocytic thyroiditis, and the natural history is stereotyped: a thyrotoxic phase lasting weeks while the store empties, then a hypothyroid phase, then recovery in most patients, with a substantial minority left permanently hypothyroid. Thyroglobulin also excludes option d, since exogenous hormone suppresses the gland and drives thyroglobulin low rather than high.',
      tests: 'treatment',
    },
  ],
};

export default rbpThyroidPathology;
