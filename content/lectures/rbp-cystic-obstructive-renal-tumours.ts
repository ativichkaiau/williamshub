import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpCysticObstructiveRenalTumours: Lecture = {
  id: 'rbp-cystic-obstructive-renal-tumours',
  title: 'Cystic Disease, Obstruction & Renal Tumours',
  system: 'renal',
  source: 'Ch 13 — Kidney and Its Collecting System',
  updated: '2026-09-19',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'Ch 13 Kidney and Its Collecting System' },
    { kind: 'disease', label: 'Polycystic kidney disease, dominant and recessive' },
    { kind: 'disease', label: 'Hydronephrosis and obstructive atrophy' },
    { kind: 'disease', label: 'Renal cell carcinoma, Wilms tumour and urothelial carcinoma' },
    { kind: 'mechanism', label: 'Ciliary calcium signalling and the VHL-HIF axis' },
  ],

  highYield: [
    '**Autosomal dominant polycystic kidney disease is a ciliopathy with a two-hit requirement, and the gene tells you the decade of dialysis.** It affects about **1 in 400 to 1 in 1000** births and accounts for roughly **10% of patients reaching end-stage renal disease**. **PKD1 on 16p13.3 causes about 85%** of cases and brings end-stage disease around the **mid-50s**; **PKD2 on 4q21 causes about 15%** and delays it to about the **70s**. Polycystin-1 and polycystin-2 form a calcium channel complex on the **primary cilium** of the tubular cell, which reads urinary flow; losing that signal drops intracellular calcium, lets **cyclic AMP rise**, and switches the epithelium from quiescence to proliferation and fluid secretion. The disease is **germline in every cell yet focal in the kidney** because a **somatic second hit** is needed in a single tubular cell to start each cyst — which is exactly why only a minority of nephrons become cysts and why functioning parenchyma survives between them for decades. The kidneys become **bilaterally massive, sometimes over 4 kg each**, studded with cysts arising from **every nephron segment**, filled with clear to haemorrhagic fluid. Presentation follows the mass and the bleeding: flank pain, palpable kidneys, haematuria from cyst rupture, stones in about **20%**, and **hypertension in roughly 75%** because compressed parenchyma becomes ischaemic and secretes renin. Clinical follow-up is in [[cystic-kidney-diseases]].',
    '**Learn the extrarenal associations of the dominant disease as a list of places where tubes and elastic tissue fail, and contrast them point by point with the recessive form.** Polycystin is expressed well beyond the kidney, so ADPKD brings **saccular berry aneurysms of the circle of Willis in about 4 to 10%**, with subarachnoid haemorrhage a leading non-renal cause of death and a reason to screen anyone with a family history of aneurysmal rupture; **hepatic cysts in around 40%**, rising with age and larger in women because the epithelium is oestrogen-responsive, yet essentially never causing liver failure; **mitral valve prolapse in some 20 to 25%**; and **colonic diverticula**. Autosomal recessive disease is a different illness wearing the same word. **PKHD1 on chromosome 6 encodes fibrocystin**, incidence about **1 in 20,000**, and it presents perinatally. The kidneys are enlarged but **smooth-surfaced**, and the cysts are **cylindrical channels radiating at right angles from medulla to cortex, derived exclusively from collecting ducts** — a sponge of parallel tubes rather than the random spheres of the dominant disease. Because fetal urine output fails, **oligohydramnios produces the Potter sequence and the newborn dies of pulmonary hypoplasia rather than of renal failure**, and **congenital hepatic fibrosis is invariable**, so survivors declare themselves later with portal hypertension. The compressed rule: in the dominant disease the kidney kills the adult, and in the recessive disease the lung kills the newborn and the liver kills the survivor.',
    '**Most cysts mean nothing, a few mean cancer, and the sorting is done on wall, septa and enhancement rather than on size.** **Simple cysts** are 1 to 5 cm, cortical, lined by a single layer of flat epithelium, with a **smooth wall, no septa and no enhancement after contrast**; they are present in **over half of people beyond 50** and their only clinical significance is that they must not be confused with tumour. The **Bosniak** classification does that sorting: categories **I and II are benign and need no follow-up**, **III is indeterminate at roughly 50% malignant**, and **IV, with enhancing soft-tissue components, is malignant in 85 to 100%** and is resected. **Acquired cystic disease** is the dangerous one: cysts develop in nearly every kidney after about **10 years on dialysis**, their epithelium undergoes papillary hyperplasia, and **renal cell carcinoma arises in roughly 7% over a decade** — so a dialysis kidney that enlarges or bleeds is a cancer question, not a cyst question. Two further entities exist to be separated by kidney size: **medullary sponge kidney** is a benign dilatation of collecting ducts that presents with stones and normal-sized kidneys, while the **nephronophthisis and medullary cystic disease complex** produces **small, shrunken kidneys** with cysts at the corticomedullary junction and is the commonest genetic cause of end-stage renal disease in children and adolescents. Small kidneys with cysts inverts the rule that cystic disease enlarges the organ, and that inversion is the diagnosis.',
    '**Hydronephrosis is dilatation plus atrophy, and the first function lost is concentration, not filtration — which is why obstruction presents with polyuria rather than oliguria.** When a ureter obstructs, tubular pressure rises, yet **glomerular filtration continues for days** because filtrate back-diffuses into the interstitium and drains through lymphatics and veins. That grace period is why an obstructed kidney can look almost normal early, and why the window for full recovery exists at all. Sustained pressure then does the damage: **tubular atrophy and interstitial fibrosis thin the cortex while the pelvis and calyces balloon**, so the end result is a thin rim of parenchyma around a sac. Because the medullary countercurrent gradient dissipates first, **the earliest and most persistent defect is loss of concentrating ability**, giving polyuria and nocturia; frank oliguria appears only when obstruction is **bilateral or in a solitary kidney**, and complete bilateral obstruction is then a surgical emergency. With complete obstruction, **irreversible damage begins within about 1 to 2 weeks and little function returns after roughly 3 months**. After relief, expect a **post-obstructive diuresis** driven by retained solute and by tubules that have not yet regained function. The causes sort by age and sex: posterior urethral valves and pelviureteric junction obstruction in children, **stones** in young adults, pregnancy and retroperitoneal fibrosis in the middle years, prostate in older men and cervical carcinoma in women — see [[obstructive-uropathy-hydronephrosis]] and [[urinary-crystals-and-stones]].',
    '**Renal cell carcinoma arises from tubular epithelium, which is why it behaves like an epithelial tumour that lives inside a vein and talks to the whole body.** It is **2 to 3% of adult cancers**, peaks in the sixties and seventies, runs about **2 to 1 male**, and smoking roughly doubles the risk alongside obesity, hypertension and acquired cystic disease. **Clear cell carcinoma is about 70%** and is a single pathway: loss of **3p** with biallelic inactivation of **VHL**, so hypoxia-inducible factor is never degraded and **VEGF, PDGF and erythropoietin are transcribed in full oxygen**. Every clinical feature follows from that one fact — the tumour is intensely vascular and therefore bleeds and responds to anti-VEGF tyrosine kinase inhibitors, and the ectopic erythropoietin explains **polycythaemia**. The clear cytoplasm is dissolved glycogen and lipid, an artefact of processing rather than a separate lesion. **Papillary carcinoma, 10 to 15%**, is driven by **MET** and is characteristically **multifocal and bilateral**, with foam cells and psammoma bodies in the papillae; **chromophobe, about 5%**, has the best prognosis. The behaviour that makes it examinable is **growth into the renal vein as a solid column that can reach the inferior vena cava and even the right atrium**, and because the left gonadal vein drains into the left renal vein, a **new left-sided varicocele that does not empty when supine** is a renal cancer sign. The classic triad of flank pain, palpable mass and haematuria appears in only about **10%**; most present with painless haematuria or incidentally. It is a textbook **paraneoplastic** tumour: erythropoietin giving polycythaemia, PTH-related peptide giving hypercalcaemia, renin giving hypertension, ACTH giving Cushing syndrome, and Stauffer syndrome giving a hepatic dysfunction that reverses after nephrectomy. The general logic of invasion and metastasis is in [[rbp-carcinogenesis-tumour-progression]].',
    '**Wilms tumour is a developmental accident and urothelial carcinoma is a field accident — one is a failure to stop growing, the other a whole surface exposed at once.** **Wilms tumour** is the commonest primary renal tumour of childhood, peaking at **2 to 5 years**, and it is **triphasic**: sheets of small blue **blastemal** cells, abortive **epithelial** tubules and glomeruli, and a **stromal** component that may differentiate into muscle or cartilage. It arises from **persistent nephrogenic rests**, which is why it looks like arrested kidney development. The genetics name three syndromes: **WT1 at 11p13**, deleted together with PAX6 in **WAGR** (Wilms, aniridia, genitourinary anomalies, intellectual disability) and point-mutated in **Denys-Drash** with gonadal dysgenesis and diffuse mesangial sclerosis; and **11p15.5 with loss of IGF2 imprinting** in **Beckwith-Wiedemann** with organomegaly, macroglossia and hemihypertrophy. **Anaplasia signals TP53 mutation and chemoresistance**, and is the main adverse histological feature in an otherwise excellent picture of **over 90% long-term survival**. **Urothelial carcinoma** behaves completely differently because the entire lining from renal pelvis to urethra is bathed in the same carcinogens — aromatic amines, tobacco with a 3 to 7 fold risk, cyclophosphamide, phenacetin and aristolochic acid — and shares early clonal mutations. That is a **field defect**, so tumours are **multifocal in space and recurrent in time**, with roughly **50 to 70% recurring after resection**. Two pathways run in parallel: low-grade papillary tumours with **FGFR3 mutation and chromosome 9 deletions**, which recur endlessly but rarely invade, and flat **carcinoma in situ with TP53 loss**, which is the precursor of high-grade invasive disease. The field explains the surgery: lifelong cystoscopic surveillance, and **nephroureterectomy with a bladder cuff** for an upper tract tumour, because any ureter left behind is field left behind.',
  ],

  mechanism: {
    title: 'From a silent cilium to a massive kidney, with the carcinoma branch',
    steps: [
      { id: 's1', label: 'Polycystin-1 and polycystin-2 sit as a calcium channel complex on the primary cilium, where they read tubular flow', detail: 'The cilium is a mechanosensor: bending it opens the channel and calcium enters, telling the cell that flow is normal and growth is unnecessary.', emphasis: 'normal' },
      { id: 's2', label: 'A germline mutation is present in every tubular cell, but a somatic second hit is required in one cell before a cyst starts', detail: 'This is why a disease carried by every cell produces cysts in only a minority of nephrons, and why the kidney keeps working for decades.', emphasis: 'key' },
      { id: 's3', label: 'Flow-sensing calcium entry is lost, intracellular calcium falls and cyclic AMP rises, switching the epithelium to proliferation plus chloride-driven fluid secretion', emphasis: 'key' },
      { id: 's4', label: 'The cyst detaches from its parent tubule and becomes a closed secretory sac, so it can only enlarge — kidneys reach several kilograms while nephrons between the cysts stay functional', emphasis: 'normal' },
      { id: 's5', label: 'Expanding cysts compress intervening parenchyma, producing local ischaemia and renin release: hypertension appears in about 75% long before the GFR falls', emphasis: 'danger' },
      { id: 's6', label: 'Compression and interstitial fibrosis finally outrun the surviving nephrons, giving end-stage renal disease in the mid-50s with PKD1 and around the 70s with PKD2', emphasis: 'danger' },
    ],
    branches: [
      {
        fromId: 's1',
        title: 'The other tubular cell accident: clear cell carcinoma',
        steps: [
          { id: 'b1', label: 'Loss of chromosome 3p with biallelic inactivation of VHL in a proximal tubular cell', emphasis: 'key' },
          { id: 'b2', label: 'Hypoxia-inducible factor escapes degradation and is stabilised despite normal oxygen tension' },
          { id: 'b3', label: 'VEGF, PDGF and erythropoietin are transcribed continuously: a hypervascular tumour that also causes polycythaemia', emphasis: 'key' },
          { id: 'b4', label: 'Growth along the renal vein into the inferior vena cava; anti-VEGF tyrosine kinase inhibitors work because the whole tumour runs on this one axis', emphasis: 'danger' },
        ],
      },
    ],
  },

  examFindings: [
    { sign: 'Bilateral flank masses that are ballotable and move with respiration, in a hypertensive adult with a family history', mechanism: 'Autosomal dominant polycystic kidneys can exceed 4 kg each; the hypertension precedes renal failure because compressed parenchyma becomes ischaemic and secretes renin', significance: 'key' },
    { sign: 'Enlarged, smooth-surfaced kidneys in a newborn with Potter facies and respiratory failure', mechanism: 'Autosomal recessive disease: cylindrical collecting-duct cysts radiate from medulla to cortex, fetal urine output fails, and oligohydramnios causes the pulmonary hypoplasia that actually kills', significance: 'key' },
    { sign: 'A thin rim of cortex around a dilated pelvis and blunted calyces, with polyuria and nocturia rather than oliguria', mechanism: 'Obstructive atrophy: sustained tubular pressure causes tubular atrophy and interstitial fibrosis, and the medullary concentrating gradient is the first thing lost', significance: 'key' },
    { sign: 'A new left-sided varicocele that fails to empty when the patient lies down', mechanism: 'Tumour thrombus in the left renal vein obstructs the left gonadal vein, which drains into it; a physiological varicocele always decompresses when supine', significance: 'key' },
    { sign: 'A yellow-orange, bulging, variegated cortical tumour with haemorrhage and a solid column of tumour extending into the renal vein', mechanism: 'Clear cell carcinoma: lipid and glycogen give the yellow colour and VHL-driven VEGF gives the vascularity that produces the haemorrhage and the venous growth', significance: 'key' },
    { sign: 'Painless visible haematuria across the whole stream in a 62-year-old smoker with previous aniline dye exposure', mechanism: 'Urothelial carcinoma bleeding into the lumen; the field defect means the whole urothelium is at risk, so this demands cystoscopy plus upper tract imaging rather than cystoscopy alone', significance: 'key' },
  ],

  investigations: [
    { clue: 'Ultrasound in a 34-year-old with a positive family history showing three cysts distributed between both kidneys', meaning: 'Meets the age-stratified ultrasound criteria for autosomal dominant polycystic kidney disease in the 30 to 59 year band. Below 30 the threshold is lower and a normal scan does not exclude the disease, because cysts accumulate with age' },
    { clue: 'A renal cyst with thick enhancing septa and a mural nodule taking up contrast, Bosniak category IV', meaning: 'Malignant in 85 to 100% of cases, so this is resected rather than watched. Bosniak I and II need no follow-up at all, and category III sits at roughly 50% and is the one that needs a decision rather than a rule' },
    { clue: 'A dialysis patient of 12 years whose kidneys have begun to enlarge and bleed', meaning: 'Acquired cystic disease with papillary hyperplasia of the cyst lining. Renal cell carcinoma develops in roughly 7% over a decade on dialysis, so growth or haemorrhage in a shrunken end-stage kidney is a cancer question' },
    { clue: 'A DMSA or MAG3 renogram showing preserved uptake but no drainage after frusemide in a dilated system', meaning: 'True obstruction rather than a baggy but unobstructed pelvis. The uptake figure also gives the differential function, which is what decides between relieving the obstruction and removing a kidney that has already been destroyed' },
    { clue: 'Unexplained polycythaemia with a normal arterial oxygen saturation and a suppressed serum erythropoietin response in an adult', meaning: 'Consider ectopic erythropoietin from a renal cell carcinoma and image the kidneys. Hypercalcaemia from PTH-related peptide and hepatic dysfunction that resolves after nephrectomy belong to the same paraneoplastic repertoire' },
    { clue: 'An abdominal mass in a 3-year-old that does not cross the midline, with CT showing a claw of renal parenchyma around it', meaning: 'Wilms tumour, arising within the kidney and splaying the surrounding cortex. Neuroblastoma by contrast crosses the midline and encases vessels; avoid percutaneous biopsy in the classic case, because rupture upstages the tumour' },
  ],

  treatment: [
    {
      logic: 'In polycystic disease you cannot remove the cysts, so you treat the pressure and the aneurysm risk',
      detail: 'Nothing reverses a cyst, and nephrectomy is reserved for mass effect, intractable pain or infection. Two interventions change the trajectory. First, **blood pressure control with renin-angiotensin blockade**, because the hypertension is renin-driven from compressed ischaemic parenchyma and appears in about **75%** long before the GFR falls, so it is available to treat for decades. Second, **tolvaptan**, a vasopressin V2 receptor antagonist, which works because it attacks the mechanism directly: vasopressin raises cyclic AMP in the collecting duct, and cyclic AMP is exactly what drives cyst proliferation and secretion once ciliary calcium signalling is lost — it slows the rate of kidney volume growth and of GFR decline, at the price of profound aquaresis and a need to monitor liver enzymes. Screen for **berry aneurysms** when there is a family history of subarachnoid haemorrhage, since intracranial rupture is a leading non-renal cause of death, and remember that the **hepatic cysts almost never cause liver failure** and do not need chasing ([[cystic-kidney-diseases]]).',
    },
    {
      logic: 'Treat renal cell carcinoma as a surgical and vascular disease, and urothelial carcinoma as a field',
      detail: 'Renal cell carcinoma is **intrinsically resistant to conventional cytotoxic chemotherapy and to radiotherapy**, so the operation is the treatment: partial nephrectomy for small tumours and radical nephrectomy for large ones, and tumour thrombus extending into the inferior vena cava is still resectable rather than an automatic contraindication. In metastatic disease the biology chooses the drug, and it chooses it from the same VHL-HIF axis that started the tumour — **anti-VEGF tyrosine kinase inhibitors and checkpoint inhibitors**, because the tumour is both hypervascular and immunogenic. Urothelial carcinoma demands the opposite mindset: because the carcinogen exposed **the entire urothelium at once**, removing one tumour leaves the field, so **50 to 70% recur** and lifelong cystoscopic surveillance is part of the treatment rather than follow-up. Intravesical BCG is used for high-grade non-muscle-invasive disease and carcinoma in situ, and an upper tract tumour is treated by **nephroureterectomy including a cuff of bladder**, because a retained ureteric stump is retained field ([[rbp-carcinogenesis-tumour-progression]]).',
    },
  ],

  mnemonics: [
    {
      hook: 'Dominant kills the adult, recessive kills the newborn by the lung and the survivor by the liver',
      expansion: [
        'ADPKD: PKD1 on 16p in 85% with dialysis in the mid-50s, PKD2 on 4q in 15% with dialysis around the 70s',
        'ADPKD extrarenal: berry aneurysms 4 to 10%, hepatic cysts about 40%, mitral valve prolapse 20 to 25%, colonic diverticula',
        'ARPKD: PKHD1 and fibrocystin, smooth-surfaced kidneys, cylindrical collecting-duct cysts radiating medulla to cortex',
        'ARPKD kills the neonate through oligohydramnios and pulmonary hypoplasia, not through uraemia',
        'ARPKD survivors have invariable congenital hepatic fibrosis and present later with portal hypertension',
      ],
    },
    {
      hook: 'One VHL hit explains four exam findings about clear cell carcinoma',
      expansion: [
        '3p loss with biallelic VHL inactivation leaves hypoxia-inducible factor undegraded',
        'VEGF is transcribed in full oxygen, so the tumour is hypervascular: it bleeds, and TKIs work',
        'Erythropoietin is transcribed too, so the paraneoplastic anaemia expectation inverts into polycythaemia',
        'The vascularity plus tubular origin explain growth as a column along the renal vein into the vena cava',
        'And the left renal vein carries the left gonadal vein, so the varicocele is left-sided and does not empty supine',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'Predicting what kills a neonate with autosomal recessive polycystic kidney disease',
      wrongInstinct: 'The kidneys are packed with cysts, so the baby dies of renal failure and needs urgent dialysis',
      rightAnswer: 'The baby dies of pulmonary hypoplasia. Failure of fetal urine output causes oligohydramnios, and without amniotic fluid the fetal lung never inflates or branches, giving the Potter sequence',
      why: 'The placenta performs excretion in utero, so a fetus tolerates renal failure but not the loss of amniotic fluid its kidneys were supposed to make — which is why the respiratory failure is immediate at birth and the renal failure only matters in whoever survives it',
    },
    {
      questionCategory: 'Deciding how much of the urinary tract to survey after a bladder tumour is resected',
      wrongInstinct: 'The tumour was removed with clear margins, so surveillance cystoscopy for a year or two is enough and the upper tracts need no attention',
      rightAnswer: 'Survey the whole urothelium for life: the entire lining from renal pelvis to urethra shared the carcinogen exposure and the early clonal mutations, so roughly 50 to 70% of patients grow another tumour somewhere else in that field',
      why: 'This is a field defect, not a margin problem — the recurrence is a new primary in already-mutated epithelium, which is also why an upper tract tumour needs nephroureterectomy with a bladder cuff rather than a segmental resection',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 41-year-old with autosomal dominant polycystic kidney disease has a normal GFR but blood pressure of 162/98 mmHg. Every tubular cell in his kidneys carries the PKD1 mutation, yet only a minority of nephrons have formed cysts. What best explains that focality?',
      options: [
        { id: 'a', text: 'Only collecting duct cells express polycystin-1, so only they can form cysts' },
        { id: 'b', text: 'A somatic second hit is required in an individual tubular cell before a cyst can begin, on top of the germline mutation' },
        { id: 'c', text: 'Cysts form only in nephrons that have already been damaged by hypertension' },
        { id: 'd', text: 'The mutation is present in a mosaic distribution, so most tubular cells are genetically normal' },
      ],
      answerId: 'b',
      explanation: 'ADPKD follows two-hit kinetics. The germline mutation is in every cell, but a cyst starts only where a somatic mutation inactivates the remaining normal allele in one tubular cell, which then clonally expands. That is why a disease of every nephron produces cysts in a minority of them, why decades of normal function are possible, and why the kidney can enlarge relentlessly while GFR holds. Cysts arise from every nephron segment in the dominant disease, not only the collecting duct, which is the recessive pattern. The hypertension in this man is a consequence rather than a cause: expanding cysts compress parenchyma, local ischaemia triggers renin release, and pressure rises well before filtration falls.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A 66-year-old man with a 4 cm renal mass has a haemoglobin of 190 g/L, a normal arterial oxygen saturation and no history of smoking-related lung disease. Which molecular event best explains both the polycythaemia and the marked vascularity of the tumour?',
      options: [
        { id: 'a', text: 'MET mutation driving papillary growth with foam cells and psammoma bodies' },
        { id: 'b', text: 'Biallelic VHL inactivation with 3p loss, stabilising hypoxia-inducible factor so VEGF and erythropoietin are transcribed despite normal oxygen' },
        { id: 'c', text: 'WT1 mutation at 11p13 with persistence of nephrogenic rests' },
        { id: 'd', text: 'FGFR3 mutation with chromosome 9 deletion in the tubular epithelium' },
      ],
      answerId: 'b',
      explanation: 'Clear cell carcinoma, about 70% of renal cell carcinoma, is built on one axis. The VHL protein normally tags hypoxia-inducible factor for degradation when oxygen is plentiful; losing both VHL alleles, usually with a 3p deletion, leaves HIF permanently stabilised, so the cell transcribes the full hypoxia programme in room air. VEGF and PDGF make the tumour hypervascular, which is why it bleeds, why it grows as a column into the renal vein, and why anti-VEGF tyrosine kinase inhibitors are effective; ectopic erythropoietin raises the haemoglobin and inverts the anaemia most cancers cause. MET belongs to papillary carcinoma, WT1 to Wilms tumour, and FGFR3 with chromosome 9 loss to low-grade papillary urothelial carcinoma.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A 59-year-old has a low-grade papillary urothelial carcinoma of the bladder resected completely with clear margins. Eighteen months later a new tumour appears in the right renal pelvis. What does this pattern demonstrate?',
      options: [
        { id: 'a', text: 'Haematogenous metastasis from the original bladder tumour to the renal pelvis' },
        { id: 'b', text: 'A field defect: the whole urothelium shared the carcinogen exposure and early clonal mutations, so tumours are multifocal in space and recurrent in time' },
        { id: 'c', text: 'Incomplete resection of the original tumour with implantation at a distant site' },
        { id: 'd', text: 'Transformation of the low-grade lesion into a high-grade invasive carcinoma' },
      ],
      answerId: 'b',
      explanation: 'Aromatic amines, tobacco, cyclophosphamide, phenacetin and aristolochic acid are excreted in urine, so every cell from renal pelvis to urethra meets the same carcinogen and accumulates the same early clonal mutations. Cancers then arise independently at multiple sites and at multiple times, which is why roughly 50 to 70% of patients develop a further tumour despite a complete first resection. The consequences are practical: lifelong cystoscopic surveillance plus upper tract imaging rather than a fixed follow-up period, and nephroureterectomy with a bladder cuff for an upper tract tumour, because a retained ureteric stump is retained field. Low-grade papillary tumours carrying FGFR3 mutations recur repeatedly but rarely invade; invasion arises instead from flat carcinoma in situ with TP53 loss, which is a separate pathway rather than a progression of this one.',
      tests: 'disease',
    },
  ],
};

export default rbpCysticObstructiveRenalTumours;
