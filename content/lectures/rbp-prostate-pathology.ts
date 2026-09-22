import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpProstatePathology: Lecture = {
  id: 'rbp-prostate-pathology',
  title: 'Prostatic Hyperplasia & Carcinoma',
  system: 'repro',
  source: 'Ch 17 — Male Genital System and Lower Urinary Tract',
  updated: '2026-09-22',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'Ch 17 Male Genital System and Lower Urinary Tract' },
    { kind: 'mechanism', label: 'Zonal anatomy and androgen dependence' },
    { kind: 'disease', label: 'Nodular hyperplasia, adenocarcinoma and osteoblastic metastasis' },
  ],

  highYield: [
    '**Learn the two zones and you have already derived both diseases: hyperplasia starts in the TRANSITION zone and carcinoma starts in the PERIPHERAL zone, and everything clinical follows from where each one sits.** The prostatic urethra runs through the middle of the gland, and the **transition zone is the periurethral collar** wrapped around it. A nodule there presses on the urethra within millimetres of growth, so **benign prostatic hyperplasia declares itself EARLY and symptomatically, with obstruction**, while the gland is still only modestly enlarged. The **peripheral zone** holds about **70% of the glandular tissue**, lies **posteriorly against the rectum**, and is where **70 to 80% of adenocarcinomas arise** — far from the urethra. So a carcinoma can reach a considerable size without touching the outflow tract, which gives the two signature clinical facts: it is **palpable as a hard posterior nodule on rectal examination**, and it is **SILENT until late**, when it presents with locally advanced disease or with bone pain from metastases. That single anatomical contrast also disposes of a favourite confusion: **hyperplasia does not become carcinoma**, because they begin in different compartments, and a man can have severe obstructive hyperplasia and an impalpable cancer, or a hard cancerous nodule and a perfectly normal urinary stream ([[hrp1-male-duct-gland-penis-histology]]).',
    '**Nodular hyperplasia is a dihydrotestosterone disease driven through the stroma, which is why a 5-alpha-reductase inhibitor works and why castration shrinks the gland.** Testosterone entering the prostatic **stromal** cell is converted by **5-alpha-reductase type 2** into **dihydrotestosterone**, which binds the androgen receptor with roughly **ten times** the affinity of testosterone and dissociates from it slowly. The androgen-charged stromal cell then acts on the epithelium by **paracrine** signalling — **FGF-7 (keratinocyte growth factor), FGF-1, FGF-2 and TGF-beta** — so the hyperplasia is a stromal instruction obeyed by epithelium, and the nodules that result contain **both glandular and fibromuscular elements** ([[ghp-testosterone-actions-male-axis]]). Epidemiology follows the androgen exposure: histological hyperplasia is present in about **20% of men at 40, 70% by 60 and 90% by 70**, though only a fraction of those are symptomatic. Morphology, and it matters because it is the exact negative of carcinoma: the gland weighs **60 to 100 g** against a normal **20 g**, the cut surface shows **well-demarcated nodules bulging above the surface**, mostly in the periurethral region, compressing the urethra into a **slit-like lateral channel**; microscopically there are **glands with papillary infoldings and two cell layers — an inner columnar and an OUTER BASAL layer — with abundant laminated corpora amylacea and no nucleolar prominence**. The preserved basal layer is the whole point: hyperplasia keeps the normal two-layered architecture, and carcinoma abolishes it.',
    '**Obstruction has a mechanical half and a muscular half, and the complications are all downstream pressure.** The **static** component is the bulk of the nodules themselves; the **dynamic** component is **alpha-1 adrenergic smooth muscle tone** in the prostatic stroma and capsule, which is why an alpha-blocker relieves symptoms within days while gland volume is unchanged. The bladder answers obstruction first by **detrusor hypertrophy**, giving a **trabeculated** wall, then by herniating mucosa between the hypertrophied bundles into **diverticula**, and finally by decompensating into **chronic retention with residual urine**. From there each complication is predictable: residual urine means **stasis**, so **infection and bladder stones** follow; sustained high pressure transmits backwards to give **hydroureter, hydronephrosis and post-renal failure**; and an unnoticed chronic retention presents as **overflow incontinence** with a palpable bladder ([[rbp-lower-urinary-tract-pathology]]). The interpretive trap sits in the treatment: **5-alpha-reductase inhibitors reduce serum PSA by roughly 50% after 6 to 12 months**, because they shrink the androgen-dependent glandular epithelium that makes it. A man on finasteride with a PSA of 3.0 therefore has a true PSA of about 6.0, and **the measured value must be doubled before it is compared with any threshold** — a normal-looking number on the report can be a frankly abnormal number in the patient.',
    '**Adenocarcinoma is diagnosed on what is MISSING — the basal cell layer — and that is a more reliable criterion than any degree of nuclear atypia.** Benign prostatic glands, hyperplastic or not, have two layers; invasive carcinoma has **one layer of cuboidal or low columnar cells sitting directly on the basement membrane**. Immunohistochemistry is the formal version of that observation: **p63 and high molecular weight cytokeratin stain basal cells and are NEGATIVE in carcinoma, while AMACR (P504S) is POSITIVE**. The rest of the picture supports it — **small, crowded, back-to-back glands that lack papillary infolding, infiltrating between larger benign glands**, nuclei enlarged with **one or more prominent nucleoli**, intraluminal **blue-tinged mucin or pink amorphous secretion and crystalloids**, and **perineural invasion**, which is common and effectively settles the diagnosis when seen. The precursor is **high-grade prostatic intraepithelial neoplasia**, in which atypical cells with nucleoli fill pre-existing glands but the basal layer is still **patchily present** — the intermediate state that makes the basal-layer rule intelligible. Molecularly, roughly **40 to 50%** carry a **TMPRSS2-ERG fusion**, which places an **androgen-responsive promoter in front of an ETS transcription factor** so that androgen drives an oncogene; **PTEN loss** activates PI3K/AKT and marks aggressive disease; **GSTP1 hypermethylation** is near-universal and removes a detoxification enzyme. Risk rises with **age, African ancestry and family history**, and **germline BRCA2 is the strongest single-gene risk, quoted as high as 20-fold**, which also makes such tumours candidates for PARP inhibition. Note the epidemiological oddity that keeps this disease honest: **latent carcinoma is found at autopsy in about 30% of men over 50 and 70% of men aged 70 to 80** — far more men die with it than of it.',
    '**Gleason grading is architectural, not cytological, and the SUM of the two commonest patterns — in that order — is what is reported.** Five patterns are defined by how well the tumour still forms glands, from **pattern 1 (circumscribed nodules of uniform glands)** to **pattern 5 (sheets, cords or single cells with no gland formation)**, judged at low power on the **architecture** of the tissue. The score is **primary (most extensive) pattern plus secondary (second most extensive) pattern**, so it runs 2 to 10, though patterns 1 and 2 are no longer assigned in practice and reported scores are **6 to 10**. The clinically decisive subtlety: **3 + 4 and 4 + 3 both sum to 7 but are not the same disease**, because the first digit is the dominant pattern — **4 + 3 has more poorly formed gland and a worse prognosis**, which is exactly why modern reporting converts scores into **Grade Groups 1 to 5** that separate them (**GG1 = 6, GG2 = 3 + 4, GG3 = 4 + 3, GG4 = 8, GG5 = 9 to 10**). Two consequences worth holding: because grading is architectural, it can be done on a needle core without immunohistochemistry, and because prostate cancer is frequently **multifocal and heterogeneous**, the grade depends on which patterns are represented — which is part of why a repeat or extended biopsy can upgrade a tumour. Grade, together with stage and PSA, is what decides between **active surveillance and radical treatment**, so the number is not a descriptor but a management instruction.',
    '**PSA is organ-specific and NOT cancer-specific, and prostatic metastases are osteoBLASTIC — which gives you a two-line discriminator against myeloma.** PSA is **kallikrein-3**, a serine protease made by prostatic epithelium to liquefy semen; **anything that disrupts prostatic architecture releases it**, so it rises in **hyperplasia, prostatitis, infarction, urinary retention, instrumentation, catheterisation and after ejaculation**, and about **20 to 25% of men with prostate cancer have a PSA below the traditional 4 ng/mL threshold** — so it is neither specific nor sensitive, and it is best used as a **serial** measure and a post-treatment monitor, where after radical prostatectomy it should be undetectable. Refinements exist for a reason: **free PSA falls as a proportion in cancer**, because malignant tissue releases more PSA already complexed to alpha-1-antichymotrypsin, so a **low free-to-total ratio (under about 10%) favours cancer** while a high ratio favours hyperplasia; PSA density and velocity attack the same problem from the volume and time axes. Spread is **lymphatic to obturator then para-aortic nodes, and haematogenous to the AXIAL skeleton** — lumbar spine, proximal femur, pelvis, ribs and sternum — favoured by the **valveless vertebral venous plexus of Batson**, which lets tumour reach the spine without traversing the lungs. The deposits are **osteoblastic (sclerotic)**, unusual among carcinomas, since prostate cancer cells drive osteoblast activity: so **serum alkaline phosphatase is RAISED while calcium stays normal or even low**, because calcium is being consumed into new bone. Contrast it with the other classic bone-marrow malignancy of older men: **myeloma produces purely LYTIC punched-out lesions with HYPERCALCAEMIA and a characteristically NORMAL alkaline phosphatase**, because there is no osteoblastic response at all ([[rbp-plasma-cell-neoplasms-spleen]]). **Sclerotic lesions with a high ALP and normal calcium is prostate; lytic lesions with a high calcium and normal ALP is myeloma.**',
  ],

  mechanism: {
    title: 'One androgen-dependent gland, two zones, two diseases',
    steps: [
      { id: 's1', label: 'The prostate depends on androgen throughout life; testosterone is converted by 5-alpha-reductase type 2 to dihydrotestosterone in stromal cells', detail: 'DHT binds the androgen receptor about ten times more tightly than testosterone and leaves it slowly, which is why blocking its synthesis shrinks the gland.', emphasis: 'key' },
      { id: 's2', label: 'In the PERIPHERAL zone, atypical cells with prominent nucleoli fill pre-existing glands while the basal layer is still patchily present: high-grade prostatic intraepithelial neoplasia', detail: 'The precursor lesion. It explains the diagnostic rule that follows, since the basal layer is being lost gradually rather than all at once.', emphasis: 'normal' },
      { id: 's3', label: 'The basal cell layer is lost completely: small crowded single-layered glands, p63 and high molecular weight cytokeratin negative, AMACR positive', detail: 'Absence of basal cells is the diagnostic criterion for invasive prostatic adenocarcinoma, and it is more dependable than nuclear atypia.', emphasis: 'key' },
      { id: 's4', label: 'Architecture degrades from discrete glands to fused glands to sheets: Gleason patterns 1 to 5, scored as primary plus secondary pattern', detail: 'Grading reads gland formation at low power, not nuclei. 4 + 3 is worse than 3 + 4 because the first digit is the dominant pattern.', emphasis: 'key' },
      { id: 's5', label: 'Because the tumour begins posteriorly and far from the urethra, it stays silent while it grows, and is found by rectal examination or PSA rather than by symptoms', detail: 'The mirror image of transition zone hyperplasia, which obstructs while still small. Zonal geography, not tumour biology, sets the time of presentation.', emphasis: 'key' },
      { id: 's6', label: 'Spread to obturator and para-aortic nodes, then through the valveless vertebral venous plexus to the axial skeleton as osteoBLASTIC deposits', detail: 'Alkaline phosphatase rises with the osteoblastic reaction while calcium stays normal or low. Epidural extension from a vertebral deposit is the emergency.', emphasis: 'danger' },
    ],
    branches: [
      {
        fromId: 's1',
        title: 'The transition zone fork: nodular hyperplasia',
        steps: [
          { id: 'b1', label: 'DHT-charged stromal cells signal to epithelium through FGF-7, FGF-1, FGF-2 and TGF-beta: fibromuscular and glandular nodules in the periurethral transition zone', emphasis: 'key' },
          { id: 'b2', label: 'Nodules compress the urethra to a slit, with added alpha-1 adrenergic smooth muscle tone: obstruction while the gland is still only moderately enlarged', emphasis: 'key' },
          { id: 'b3', label: 'Detrusor hypertrophy and trabeculation, then diverticula, residual urine, infection and stones, then hydroureter, hydronephrosis and post-renal failure', emphasis: 'danger' },
        ],
      },
    ],
  },

  examFindings: [
    { sign: 'A symmetrically enlarged, smooth, rubbery prostate with a preserved median sulcus in a man with hesitancy, weak stream, terminal dribbling and nocturia', mechanism: 'Nodular hyperplasia of the transition zone. The nodules surround the urethra, so obstruction appears early and the posterior surface felt by the examining finger remains smooth. The sulcus is preserved because the process is bilateral and periurethral rather than invasive', significance: 'key' },
    { sign: 'A hard, irregular, fixed nodule on the posterior surface of the prostate with loss of the median sulcus, in a man with no urinary symptoms', mechanism: 'Peripheral zone adenocarcinoma. It arises posteriorly, against the rectum and away from the urethra, so it is palpable long before it obstructs — which is the anatomical reason a normal urinary history gives no reassurance at all', significance: 'key' },
    { sign: 'A dull, palpable suprapubic mass rising out of the pelvis with continuous dribbling of urine in an elderly man', mechanism: 'Chronic retention with overflow incontinence. The detrusor has decompensated after prolonged outflow obstruction, so the bladder is distended and painless, and the leak is a pressure phenomenon rather than a failure of the sphincter', significance: 'key' },
    { sign: 'Progressive lumbar back pain worse at night, with sclerotic vertebral lesions and a raised alkaline phosphatase but normal serum calcium', mechanism: 'Osteoblastic metastases reaching the axial skeleton through the valveless vertebral venous plexus of Batson. Tumour cells stimulate osteoblasts, so alkaline phosphatase rises with new bone formation while calcium is consumed into it rather than released, which is the opposite of the myeloma pattern', significance: 'key' },
    { sign: 'Bilateral leg weakness with a sensory level and urinary retention in a man with known prostate cancer', mechanism: 'Epidural extension from a vertebral deposit causing spinal cord compression. This is the emergency the osteoblastic pattern sets up, and it needs imaging and corticosteroids on the day, since recovery tracks the neurological state at the time treatment starts', significance: 'key' },
    { sign: 'A fever with perineal pain and an exquisitely tender, boggy prostate on gentle examination', mechanism: 'Acute bacterial prostatitis, usually coliform. Vigorous massage of such a prostate can force organisms into the blood, so the gland is palpated gently and not milked. Note also that prostatitis alone can raise PSA substantially, so the marker should not be interpreted during or soon after the illness', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'PSA 3.2 ng/mL in a 68-year-old who has taken finasteride for two years for obstructive symptoms', meaning: 'A true PSA of about 6.4 ng/mL, which is abnormal and requires assessment. 5-alpha-reductase inhibitors shrink the androgen-dependent epithelium that secretes PSA and halve serum levels after 6 to 12 months, so the measured value is doubled before comparison with any threshold. Failing to correct is the commonest way a cancer is missed in a treated man, and a PSA that rises on treatment is doubly suspicious' },
    { clue: 'Needle core showing small crowded glands infiltrating between larger benign glands, single-layered epithelium with prominent nucleoli, and tumour tracking around a nerve; p63 and high molecular weight cytokeratin negative, AMACR positive', meaning: 'Invasive adenocarcinoma. The diagnosis rests on absence of the basal cell layer, which the immunohistochemistry confirms in two directions at once: the basal markers are lost and AMACR is gained. Perineural invasion within the gland is effectively confirmatory, and the crowded architecture without papillary infolding separates this from hyperplasia' },
    { clue: 'Biopsy reported as Gleason 4 + 3 = 7 in one man and Gleason 3 + 4 = 7 in another', meaning: 'Different diseases with the same sum. The first digit is the dominant pattern, so 4 + 3 contains more poorly formed and fused glands and behaves worse, which is why it maps to Grade Group 3 while 3 + 4 maps to Grade Group 2. Grading is architectural and assessed at low power, so the distinction is about how much gland formation has been lost, not about nuclear appearance' },
    { clue: 'Total PSA 5.8 ng/mL with a free-to-total ratio of 8%, and a normal rectal examination', meaning: 'Favours carcinoma despite the normal examination, and the biopsy should proceed. Malignant epithelium releases more PSA already bound to alpha-1-antichymotrypsin, so the free fraction falls; hyperplasia releases relatively more free PSA and gives a higher ratio. A normal rectal examination excludes nothing, since anterior and apical tumours are out of reach of the finger' },
    { clue: 'Bone scan with multiple hot spots confined to the lumbar spine, pelvis and ribs; plain films show dense sclerotic lesions; alkaline phosphatase raised, calcium 2.3 mmol/L', meaning: 'Osteoblastic metastatic prostate cancer. The axial distribution follows the valveless vertebral venous plexus, the sclerosis reflects tumour-driven osteoblast activity, and alkaline phosphatase is the biochemical shadow of that new bone. Normal calcium with a high ALP is the discriminator: myeloma gives lytic lesions with hypercalcaemia and a characteristically normal ALP' },
    { clue: 'Transurethral resection chips showing nodules of glands with papillary infoldings, two cell layers, abundant corpora amylacea and no nucleolar prominence, within a fibromuscular stroma', meaning: 'Nodular hyperplasia, and nothing more. The retained basal layer establishes benignity, and corpora amylacea are typical of benign gland and rare in carcinoma. This is not a premalignant lesion, since it arises in the transition zone while carcinoma arises in the peripheral zone — a resection that relieves obstruction therefore does nothing to reduce cancer risk' },
  ],

  treatment: [
    {
      logic: 'Relieve hyperplasia by attacking tone first and volume second, and re-interpret every PSA you measure afterwards',
      detail: 'The obstruction has two components and each has its own drug. **Alpha-1 blockers** (tamsulosin, alfuzosin) relax the prostatic and bladder neck smooth muscle that constitutes the **dynamic** component, so symptoms improve within **days** with no change in gland size — at the cost of postural hypotension and, at cataract surgery, intraoperative floppy iris syndrome. **5-alpha-reductase inhibitors** (finasteride, dutasteride) block conversion of testosterone to DHT and shrink the glandular epithelium, attacking the **static** component: they need **6 to 12 months** to work, reduce the risk of acute retention and the need for surgery, and cause loss of libido and gynaecomastia. Two consequences to carry: combination therapy beats either alone in a large gland, and **any PSA taken on a 5-alpha-reductase inhibitor must be DOUBLED** before interpretation, because these drugs halve it. Surgery, usually **transurethral resection**, is for the complications rather than the symptom score: **refractory retention, recurrent infection, bladder stones, and hydronephrosis or rising creatinine**. Resection removes transition zone tissue and relieves obstruction, but it leaves the peripheral zone in place, so it neither treats nor prevents carcinoma ([[rbp-lower-urinary-tract-pathology]]).',
    },
    {
      logic: 'Grade and stage decide whether to treat at all; if you do treat advanced disease, the target is the androgen axis',
      detail: 'Because **latent carcinoma is present in about 30% of men over 50 and 70% of men aged 70 to 80**, the first decision is whether this tumour will ever matter. **Grade Group 1 (Gleason 6) disease with low PSA and limited volume is managed by active surveillance**, while higher grade or higher stage disease is treated radically by prostatectomy or radiotherapy — and after prostatectomy PSA should become **undetectable**, so any measurable value is recurrence. Advanced disease is treated on the principle that the tumour remains **androgen-dependent**: **GnRH agonists** (goserelin, leuprolide) produce a paradoxical initial surge of LH and testosterone, so a **flare** can worsen bone pain or precipitate cord compression and is covered by an **anti-androgen** for the first weeks, or avoided by using a **GnRH antagonist**. Response is not cure: castration-resistant disease emerges through **androgen receptor amplification and mutation and intratumoural androgen synthesis**, which is exactly why the next agents attack those mechanisms — **abiraterone** inhibiting CYP17 and **enzalutamide** blocking the receptor. Long-term androgen deprivation costs bone density, muscle mass and metabolic health, so it buys time at a measurable price ([[ghp-testosterone-actions-male-axis]]).',
    },
  ],

  mnemonics: [
    {
      hook: 'Transition obstructs, Peripheral palpates',
      expansion: [
        'The transition zone is the periurethral collar, so hyperplasia there squeezes the urethra early and presents with symptoms',
        'The peripheral zone is posterior against the rectum and holds most glandular tissue, so carcinoma there is felt by the finger',
        'Distance from the urethra is why carcinoma is silent until late and why a normal stream is no reassurance',
        'Different zones also means hyperplasia is not the precursor of carcinoma, and a transurethral resection does not lower cancer risk',
        'Both are androgen-dependent, which is why both respond to blocking the axis and why neither is cured by it',
      ],
    },
    {
      hook: 'Sclerotic with high ALP is prostate; lytic with high calcium is myeloma',
      expansion: [
        'Prostate deposits are osteoBLASTIC, so osteoblasts are busy and alkaline phosphatase rises',
        'Calcium stays normal or low, because it is being deposited into new bone rather than released',
        'Myeloma lesions are purely LYTIC punched-out defects with no osteoblastic response',
        'So myeloma raises calcium while its alkaline phosphatase stays characteristically normal',
        'Both prefer the axial skeleton in older men, so the biochemistry is what separates them at the bedside',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'Interpreting PSA in a treated man',
      wrongInstinct: 'The PSA is 3.1 ng/mL, comfortably under 4, so the prostate is fine and no further assessment is needed',
      rightAnswer: 'Ask what he takes first. On a 5-alpha-reductase inhibitor, double the measured value: 3.1 becomes about 6.2 and must be worked up. Any PSA that rises while on the drug is suspicious whatever the absolute number',
      why: '5-alpha-reductase inhibitors shrink the androgen-dependent epithelium that secretes PSA and halve serum levels within 6 to 12 months, so the assay is measuring a pharmacologically suppressed gland rather than a reassuring one',
    },
    {
      questionCategory: 'Reading a Gleason score',
      wrongInstinct: 'Gleason 3 + 4 and 4 + 3 both add up to 7, so the two men have the same disease and the same prognosis',
      rightAnswer: '4 + 3 is the worse tumour and is Grade Group 3, while 3 + 4 is Grade Group 2. The first digit is the dominant pattern, so the order of the two numbers carries the prognosis',
      why: 'Gleason grading measures ARCHITECTURE — how much the tumour still forms glands — and the primary pattern is the one occupying most of the tumour, so a tumour mostly made of fused pattern 4 glands behaves worse than one that is mostly still pattern 3',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 70-year-old man has taken dutasteride for 18 months for obstructive urinary symptoms. His PSA, which was 6.0 ng/mL before treatment, is now 3.4 ng/mL. Rectal examination is unremarkable. How should this result be interpreted?',
      options: [
        { id: 'a', text: 'The fall proves the original elevation was due to hyperplasia and no further action is needed' },
        { id: 'b', text: 'The measured value should be doubled to about 6.8 ng/mL, which is higher than his pre-treatment level and requires assessment' },
        { id: 'c', text: 'PSA is unaffected by 5-alpha-reductase inhibitors, so the fall reflects tumour regression' },
        { id: 'd', text: 'A normal rectal examination with a PSA below 4 ng/mL excludes prostate cancer' },
      ],
      answerId: 'b',
      explanation: '5-alpha-reductase inhibitors halve serum PSA within 6 to 12 months by shrinking the androgen-dependent epithelium that secretes it, so the measured figure must be doubled before it is compared with any threshold. Doubling 3.4 gives about 6.8, which is above his own pre-treatment baseline of 6.0 — a PSA that rises on the drug is more worrying than the absolute number suggests. The normal examination adds nothing reassuring, because the finger cannot reach anterior or apical tumours, and roughly 20 to 25% of cancers occur with a PSA under 4 ng/mL in any case. PSA is organ-specific, not cancer-specific, and is most informative as a serial measurement interpreted against the drugs the patient is taking.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A man with a 12-year history of severe obstructive urinary symptoms is found on rectal examination to have a hard posterior nodule. Biopsy confirms adenocarcinoma. Which statement best explains the relationship between his two problems?',
      options: [
        { id: 'a', text: 'The long-standing hyperplasia has undergone malignant transformation, which is why the cancer appeared after years of symptoms' },
        { id: 'b', text: 'Hyperplasia arises in the transition zone around the urethra and obstructs early, while carcinoma arises in the peripheral zone posteriorly and stays silent; the two are separate processes in separate compartments' },
        { id: 'c', text: 'Both arise in the peripheral zone, and the obstruction was the first symptom of the cancer' },
        { id: 'd', text: 'Carcinoma arises in the transition zone, which is why his obstructive symptoms preceded the palpable nodule' },
      ],
      answerId: 'b',
      explanation: 'Zonal anatomy explains both timelines. The transition zone is the periurethral collar, so hyperplastic nodules there compress the urethra into a slit and produce obstruction while the gland is only moderately enlarged. The peripheral zone contains about 70% of glandular tissue, lies posteriorly against the rectum and gives rise to 70 to 80% of adenocarcinomas, so a tumour there is palpable early but obstructs late — which is why it is characteristically silent until locally advanced or metastatic. Because the two processes occupy different compartments, hyperplasia is not a precursor of carcinoma, and relieving obstruction by transurethral resection removes transition zone tissue while leaving the peripheral zone, and therefore the cancer risk, untouched.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A 74-year-old man has back pain. Imaging shows multiple dense sclerotic lesions in the lumbar vertebrae and pelvis. Alkaline phosphatase is markedly raised, serum calcium is 2.28 mmol/L and haemoglobin is mildly reduced. Which conclusion is best supported?',
      options: [
        { id: 'a', text: 'Multiple myeloma, since axial skeletal lesions with anaemia in an older man are typical' },
        { id: 'b', text: 'Metastatic prostatic adenocarcinoma; the osteoblastic reaction raises alkaline phosphatase while calcium is consumed into new bone' },
        { id: 'c', text: 'Primary hyperparathyroidism, in which subperiosteal resorption produces sclerotic vertebral lesions' },
        { id: 'd', text: 'Metastatic renal cell carcinoma, which characteristically produces sclerotic deposits with a raised alkaline phosphatase' },
      ],
      answerId: 'b',
      explanation: 'Prostatic adenocarcinoma is unusual among carcinomas in producing osteoblastic rather than lytic deposits: tumour cells stimulate osteoblasts, new bone is laid down, and alkaline phosphatase rises as its biochemical marker while calcium is drawn into that bone and stays normal or even low. The axial distribution follows the valveless vertebral venous plexus of Batson, which allows tumour to reach the spine without passing through the lungs. Myeloma is the mirror image and the discriminator to have ready: purely lytic punched-out lesions, hypercalcaemia, and a characteristically normal alkaline phosphatase because there is no osteoblastic response. Renal cell carcinoma metastases are classically lytic and highly vascular, and hyperparathyroidism causes resorption rather than sclerosis.',
      tests: 'disease',
    },
  ],
};

export default rbpProstatePathology;
