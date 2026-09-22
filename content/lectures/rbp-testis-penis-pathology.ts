import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpTestisPenisPathology: Lecture = {
  id: 'rbp-testis-penis-pathology',
  title: 'Testicular & Penile Pathology',
  system: 'repro',
  source: 'Ch 17 — Male Genital System and Lower Urinary Tract',
  updated: '2026-09-22',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'Ch 17 Male Genital System and Lower Urinary Tract' },
    { kind: 'mechanism', label: 'Germ cell neoplasia in situ and the seminoma / non-seminoma fork' },
    { kind: 'disease', label: 'Cryptorchidism, germ cell tumours, torsion and penile carcinoma' },
  ],

  highYield: [
    '**Cryptorchidism is the highest-yield testicular risk factor, and the single fact that explains what it really is comes from the OTHER testis.** An undescended testis is present in about **1%** of one-year-old boys, is unilateral in roughly three quarters of cases, and raises the risk of germ cell tumour about **three to five fold**. The morphology is time-stamped: by **age 2** the tubules already show **arrested germ cell development with reduced germ cell numbers**, and with time the tubules become **hyalinised** with **thickened, laminated basement membranes**, leaving prominent-looking **Leydig cells** stranded in a fibrotic interstitium — which is why the testis is small and firm and why spermatogenesis, not testosterone, is what is lost ([[hrp1-testis-epididymis-vas-anatomy]]). Now the reasoning. **Orchidopexy, ideally before the age of 2, improves fertility and makes the testis examinable, but it does NOT abolish the cancer risk** — and, decisively, **the risk is also raised in the contralateral, normally DESCENDED testis**. A purely thermal injury could not reach a testis sitting in the scrotum at 33 degrees. So the association is not that heat causes cancer: the maldescent and the malignant potential are both **read-outs of an intrinsically abnormal gonad**, the testicular dysgenesis end of the spectrum that also contains hypospadias and impaired spermatogenesis. Practical consequence: surgery repositions the testis for surveillance rather than curing it, and both testes need lifelong self-examination.',
    '**Sort every testicular mass at the first fork — germ cell or sex cord-stromal — because that fork already decides malignancy.** About **95% are germ cell tumours and are malignant until proved otherwise**; the remaining **5% are sex cord-stromal, usually benign and usually hormonally active**, which is a completely different clinical animal. Germ cell tumours are the **commonest solid malignancy of men aged 15 to 34**. Nearly all postpubertal ones arise from **germ cell neoplasia in situ** (intratubular germ cell neoplasia): atypical, enlarged germ cells with clear cytoplasm sitting **inside the seminiferous tubules along the basement membrane**, expressing the pluripotency factors **OCT3/4** and **NANOG**, present in the surrounding parenchyma of most invasive tumours and in the dysgenetic testis years before invasion. The unifying genetic lesion is **isochromosome 12p**, found in virtually all postpubertal germ cell tumours whatever their histology — which is the molecular statement that seminoma and non-seminoma are two outputs of one precursor rather than two diseases ([[rbp-carcinogenesis-tumour-progression]]). Two exceptions prove the rule by lacking both features: **spermatocytic tumour** of men over 65, which has no germ cell neoplasia in situ, no i(12p), and essentially never metastasises, and **prepubertal teratoma**, which is benign. On the other side of the fork: **Leydig cell tumour** makes androgens or oestrogens (precocious puberty in a boy, gynaecomastia in a man), shows **Reinke crystalloids in about 25%**, and is about **90% benign**; **Sertoli cell tumour** is usually hormonally silent and about 90% benign ([[hrp1-sertoli-leydig-histology]]). And remember the age inversion: **over 60, the commonest testicular neoplasm is not a germ cell tumour at all but diffuse large B-cell lymphoma**, which is often bilateral.',
    '**Within germ cell tumours the seminoma versus non-seminoma split is the one that runs the treatment, and the morphology tells you which you are holding.** **Seminoma** is roughly **50%** of germ cell tumours, peaks in the **fourth decade**, and is grossly a **soft, bulging, homogeneous grey-white cut surface with NO haemorrhage and NO necrosis** — a pure seminoma that looks bloody and necrotic has non-seminomatous elements in it. Microscopically: **sheets of uniform large cells with clear, glycogen-rich cytoplasm, sharp cell membranes and a central nucleus with a prominent nucleolus** — the fried-egg appearance — divided by **delicate fibrous septa carrying a dense lymphocytic infiltrate**, with **granulomas in about 20%**. That lymphocytic and granulomatous host response is the histological signature of a tumour the immune system is engaging, and it travels with seminoma’s behaviour: it stays **localised longer** (about **70% present as stage I**), spreads first by **lymphatics to the para-aortic nodes**, is exquisitely **radiosensitive and chemosensitive**, and has the best prognosis of the group, with stage I cure rates above **95%**. **Non-seminomatous tumours behave in the opposite direction — they metastasise early, often haematogenously, and are treated with cisplatin-based chemotherapy rather than radiotherapy.** Their morphology: **embryonal carcinoma** is smaller than seminoma but ill-defined, **haemorrhagic and necrotic**, with sheets or primitive glands of pleomorphic cells with **indistinct cell borders**, overlapping nuclei and many mitoses, **CD30 positive**. **Yolk sac tumour** is the commonest testicular tumour of infants under 3 and contains **Schiller-Duval bodies** — a glomerulus-like structure with a central capillary wrapped in tumour cells inside a cystic space — plus **eosinophilic hyaline globules** containing AFP. **Choriocarcinoma** is the most lethal and must contain **BOTH cytotrophoblast (sheets of uniform polygonal cells with clear cytoplasm) AND syncytiotrophoblast (large multinucleate cells with vacuolated eosinophilic cytoplasm containing hCG)**; it is intensely haemorrhagic and **so haematogenously aggressive that the primary may have regressed to a scar while the lungs and brain are full of tumour**. **Postpubertal teratoma is malignant however mature it looks** — mature elements in an adult testis metastasise, and that is the opposite of the rule in a child.',
    '**The tumour marker rule is the most useful single sentence in this chapter: AFP is NEVER raised by a pure seminoma, so a raised AFP means non-seminomatous elements are present no matter what the histology report says.** AFP comes from **yolk sac** (and some embryonal) elements, so its presence in serum is evidence of tissue the pathologist may simply not have sampled — and because sampling error in a mixed tumour is common, **the serum overrules the slide**, and the patient is managed as a non-seminomatous tumour. **hCG can be raised in either**, because about **15% of otherwise pure seminomas contain scattered syncytiotrophoblastic giant cells**; a modestly raised hCG therefore does not disprove seminoma, while a very high hCG suggests choriocarcinoma. **LDH** is not specific at all and is a measure of **tumour bulk and turnover**, useful for staging and monitoring rather than diagnosis. Two further uses follow from half-lives: **AFP falls with a half-life of 5 to 7 days and hCG with a half-life of 24 to 36 hours**, so after orchidectomy a marker that fails to fall along its expected curve means residual disease, and a marker that rises after normalising means relapse — usually before anything is visible on imaging. Summary rules to carry into an exam: **AFP raised excludes pure seminoma; hCG raised excludes nothing; LDH tells you how much tumour there is; and markers are followed serially, not read once.**',
    '**Two acute-scrotum rules, one benign-versus-malignant rule, and one surgical rule that comes straight out of embryology.** **Testicular torsion** twists the cord and obstructs the **thin-walled veins before the thicker-walled artery**, so inflow continues into a blocked outflow: the testis becomes intensely engorged and undergoes **HAEMORRHAGIC (venous) infarction** rather than the pale infarct of an arterial occlusion — that is the whole gross picture, a swollen, dark, purple-black testis. The adult form is **intravaginal**, from the **bell-clapper deformity** where the tunica vaginalis invests the testis completely and leaves it hanging free; the deformity is **bilateral**, which is why the other side is fixed at the same operation. It presents with **sudden severe pain, a high-riding transversely lying testis, an ABSENT cremasteric reflex and no relief on elevation**, and salvage falls away after about **6 hours**. **Epididymitis** builds over days, is tender **posteriorly over the epididymis first**, keeps its cremasteric reflex, is **relieved by elevation**, and usually comes with pyuria — chlamydia or gonococcus under 35, coliforms over 35, and mumps orchitis about a week after parotitis in a postpubertal male. **A PAINLESS, solid, non-transilluminating testicular mass is cancer until proved otherwise**: a hydrocele transilluminates, a varicocele is a bag of worms that empties when supine, and pain is the exception in tumours rather than the rule. **Now the surgical rule.** The testis develops at **L2** and drags its vessels and lymphatics down with it, so it drains to the **PARA-AORTIC nodes**, whereas the scrotal skin drains to the **INGUINAL nodes**. Cutting through the scrotum to biopsy a tumour therefore breaches a lymphatic watershed and can seed an entirely new nodal field, which is why **trans-scrotal biopsy is contraindicated and the operation is a radical INGUINAL orchidectomy with high cord ligation** — diagnosis and treatment in the same act.',
    '**Penile pathology is three developmental faults, one mechanical trap, and one carcinoma whose whole risk profile is about what sits under the foreskin.** **Hypospadias** is a ventral urethral opening, affecting about **1 in 300** male births and the commoner of the pair; **epispadias** is dorsal and travels with **bladder exstrophy** ([[rbp-lower-urinary-tract-pathology]]). Both may obstruct the stream and are associated with cryptorchidism and impaired fertility — the same dysgenesis theme. **Phimosis** is a prepuce that cannot be retracted, usually the scarred end-point of repeated balanoposthitis; **paraphimosis** is the emergency version, a tight retracted foreskin trapped behind the glans that constricts venous drainage and causes painful oedema and, if unreduced, arterial compromise. Infective and neoplastic lesions sort by **HPV type**, exactly as in the cervix: **condyloma acuminatum is HPV 6 and 11**, benign, showing papillary fronds with **koilocytes** — wrinkled nuclei with perinuclear halos; **HPV 16 and 18** drive the in-situ lesions — **Bowen disease** on the shaft as a solitary grey-white plaque, **erythroplasia of Queyrat** on the glans as a red velvety patch, and **bowenoid papulosis** as multiple pigmented papules in younger men which regress and rarely progress, while Bowen disease progresses to invasive carcinoma in roughly **10%**. **Invasive squamous cell carcinoma** is an ulcerated or fungating keratinising tumour, commonly on the glans or inner prepuce, that spreads to the **inguinal nodes** (contrast the para-aortic drainage of the testis). **Circumcision is protective**, and the reason is mechanical and chronic rather than mysterious: removing the preputial sac removes the reservoir where **smegma, HPV and chronic inflammation persist** — so the risk factors, HPV infection, phimosis, poor hygiene and smoking, are the same exposure written four ways.',
  ],

  mechanism: {
    title: 'From a dysgenetic gonad to a metastatic germ cell tumour',
    steps: [
      { id: 's1', label: 'An intrinsically abnormal gonad fails to descend: cryptorchidism, with arrested germ cell development by age 2 and later tubular hyalinisation', detail: 'The contralateral descended testis carries raised risk too, so the defect is in the gonad, not in the scrotal temperature. Orchidopexy restores access and fertility, not normality.', emphasis: 'key' },
      { id: 's2', label: 'Atypical germ cells with clear cytoplasm persist inside the tubules along the basement membrane: germ cell neoplasia in situ, OCT3/4 and NANOG positive', detail: 'Found in the parenchyma around most invasive germ cell tumours and present years before invasion, which is what makes it the precursor lesion.', emphasis: 'key' },
      { id: 's3', label: 'Isochromosome 12p is acquired, amplifying 12p and locking in the neoplastic phenotype', detail: 'Present in virtually all postpubertal germ cell tumours regardless of histology. Spermatocytic tumour and prepubertal teratoma lack it, and correspondingly lack malignant behaviour.', emphasis: 'key' },
      { id: 's4', label: 'The cell either stays germinal or differentiates: seminoma versus non-seminomatous tumour', detail: 'One precursor, two outputs. The fork is not academic — it selects radiotherapy versus cisplatin chemotherapy and predicts how early the tumour leaves the testis.', emphasis: 'key' },
      { id: 's5', label: 'Seminoma grows as sheets of clear cells with lymphocytic septa and granulomas, stays local, and spreads by lymphatics to para-aortic nodes', detail: 'The host lymphocytic response tracks with the clinical behaviour: about 70% are stage I at diagnosis and stage I cure exceeds 95%.', emphasis: 'normal' },
      { id: 's6', label: 'Tumour breaches the tunica and cord; markers rise in serum and fall with treatment along their own half-lives', detail: 'AFP 5 to 7 days, hCG 24 to 36 hours. A marker that will not fall on schedule after orchidectomy means residual disease before imaging shows anything.', emphasis: 'danger' },
    ],
    branches: [
      {
        fromId: 's4',
        title: 'The non-seminomatous fork: early and haematogenous',
        steps: [
          { id: 'b1', label: 'Embryonal carcinoma: haemorrhagic, necrotic, indistinct cell borders, CD30 positive', emphasis: 'key' },
          { id: 'b2', label: 'Yolk sac differentiation: Schiller-Duval bodies and hyaline globules, AFP into the serum', emphasis: 'key' },
          { id: 'b3', label: 'Trophoblastic differentiation: cytotrophoblast plus syncytiotrophoblast, hCG high, vascular invasion with lung and brain deposits while the primary regresses to a scar', emphasis: 'danger' },
        ],
      },
    ],
  },

  examFindings: [
    { sign: 'A small, firm, high-lying testis in an adolescent, with a normal-sized contralateral testis that still carries raised cancer risk', mechanism: 'Cryptorchid dysgenesis. Germ cells are lost and tubules hyalinise with thickened basement membranes while Leydig cells persist, so the gonad shrinks and hardens but androgen output is largely preserved. The contralateral risk is the observation that rules out a purely thermal explanation', significance: 'key' },
    { sign: 'Sudden severe testicular pain with a high-riding transverse testis, an absent cremasteric reflex, and no relief on elevation', mechanism: 'Intravaginal torsion on a bell-clapper deformity. Thin-walled veins occlude before the artery, so arterial inflow persists into an obstructed outflow and the testis undergoes haemorrhagic rather than pale infarction. The deformity is bilateral, so the other testis is fixed at the same operation', significance: 'key' },
    { sign: 'Gradual scrotal pain with maximal tenderness behind the testis, fever, pyuria and relief on elevating the scrotum', mechanism: 'Epididymitis, ascending from the urethra along the vas, which is why the epididymis hurts first and the urine is abnormal. Preserved cremasteric reflex and relief on elevation are the two features torsion does not give', significance: 'key' },
    { sign: 'A painless, firm, solid testicular mass that does not transilluminate, found incidentally in a 28-year-old', mechanism: 'Germ cell tumour, which is 95% of testicular neoplasms and painless in the majority. A hydrocele transilluminates and a varicocele decompresses when supine, so a solid opaque mass has no benign explanation and goes to inguinal orchidectomy rather than biopsy', significance: 'key' },
    { sign: 'Gynaecomastia and loss of libido in an adult man, or precocious puberty in a boy, with a small testicular nodule', mechanism: 'Leydig cell tumour secreting androgens or oestrogens. Reinke crystalloids are seen in about 25% and settle the cell of origin. Around 90% are benign, which is why the hormonal presentation is reassuring in a way that a painless mass never is', significance: 'supportive' },
    { sign: 'Painless bilateral testicular enlargement in a 68-year-old man with night sweats and weight loss', mechanism: 'Diffuse large B-cell lymphoma, the commonest testicular neoplasm over 60. Age inverts the usual rule, and bilaterality is the clue, since germ cell tumours are almost always unilateral. The testis is a sanctuary site, so central nervous system and contralateral relapse are characteristic', significance: 'key' },
  ],

  investigations: [
    { clue: 'Scrotal ultrasound shows a solid hypoechoic intratesticular mass; serum AFP 420 ng/mL, hCG 60 IU/L, LDH raised', meaning: 'Non-seminomatous germ cell tumour, whatever the eventual histology says. AFP arises from yolk sac and some embryonal elements and is never produced by pure seminoma, so a raised AFP overrules a slide reported as seminoma, because a mixed tumour can be under-sampled. hCG is uninformative here since about 15% of pure seminomas contain syncytiotrophoblastic giant cells, and LDH reflects bulk rather than cell type' },
    { clue: 'Orchidectomy specimen: a soft homogeneous grey-white lobulated mass, no haemorrhage or necrosis; sheets of clear cells with distinct borders and prominent nucleoli, fibrous septa with dense lymphocytes and occasional granulomas', meaning: 'Classic seminoma. The clean cut surface is part of the diagnosis, since haemorrhage and necrosis imply non-seminomatous elements. The lymphocytic and granulomatous septal response marks a tumour under immune attack and accompanies its indolence: about 70% are stage I, spread is lymphatic to para-aortic nodes, and it is radiosensitive' },
    { clue: 'Histology showing glomerulus-like structures with a central capillary surrounded by tumour cells within a cystic space, plus intracellular eosinophilic hyaline globules', meaning: 'Schiller-Duval bodies of yolk sac tumour, the commonest testicular tumour under the age of 3 and a frequent component of adult mixed tumours. The globules and the serum AFP come from the same secretory differentiation, so this histology and a raised AFP are one finding reported twice' },
    { clue: 'Markedly raised hCG with a tiny testicular scar, and multiple haemorrhagic lung and brain deposits; the deposits show both cytotrophoblast and syncytiotrophoblast', meaning: 'Choriocarcinoma, including the burnt-out primary pattern in which the testicular tumour has regressed while metastases progress. Both trophoblastic populations must be present for the diagnosis. Its early haematogenous route explains lung and brain deposits at presentation, and haemorrhage into a brain deposit is the immediate danger' },
    { clue: 'After radical inguinal orchidectomy, AFP falls from 900 to 60 ng/mL over 4 weeks then plateaus, while imaging is reported as normal', meaning: 'Residual disease. AFP has a half-life of 5 to 7 days, so four weeks should take 900 ng/mL to near-normal. A marker that stops falling short of normal is more sensitive than the scan and mandates treatment rather than surveillance. The same logic runs in reverse during follow-up, where a rising marker precedes radiological relapse' },
    { clue: 'Biopsy of a dysgenetic testis shows enlarged atypical germ cells with clear cytoplasm confined within the seminiferous tubules along the basement membrane, staining for OCT3/4', meaning: 'Germ cell neoplasia in situ, the precursor of nearly all postpubertal germ cell tumours. Confinement within the tubule is the whole point, since it identifies the lesion before invasion, and its presence in the contralateral testis of a man with a germ cell tumour is the histological version of the cryptorchidism argument that the gonad itself is abnormal' },
  ],

  treatment: [
    {
      logic: 'Operate through the groin, never through the scrotum, and let the marker profile rather than the slide choose radiotherapy or chemotherapy',
      detail: 'Embryology dictates the incision. The testis descends from **L2** with its lymphatics, so it drains to the **para-aortic nodes**, while scrotal skin drains to the **inguinal nodes** — a trans-scrotal approach therefore seeds a new nodal basin and converts a predictable disease into an unpredictable one. The operation is a **radical inguinal orchidectomy with high cord ligation**, and because a painless solid mass has no benign differential, that operation is both the diagnostic test and the treatment; **percutaneous or trans-scrotal biopsy is contraindicated**. Adjuvant choice then follows the fork: **seminoma is radiosensitive** and stage I disease is cured in over **95%** by surveillance, a single dose of carboplatin, or para-aortic radiotherapy, whereas **non-seminomatous disease is treated with cisplatin-based chemotherapy** (classically BEP) with retroperitoneal lymph node dissection for residual masses. A **raised AFP forces the non-seminomatous pathway even when the histology says seminoma**, because serum reflects the whole tumour and a block reflects the sampled part. Offer sperm banking before chemotherapy, and remember the testis is a sanctuary site, so the contralateral testis and the central nervous system are the classic relapse sites.',
    },
    {
      logic: 'Fix the scrotum on the clock for torsion and treat the foreskin as the modifiable exposure in penile disease',
      detail: 'Torsion is a **venous** occlusion first, so the tissue is engorged and haemorrhagic long before it is dead: **detorsion within about 6 hours** salvages most testes and salvage falls steeply after that, which makes this a clinical diagnosis taken to theatre rather than an imaging diagnosis. Because the **bell-clapper deformity is bilateral**, the contralateral testis is fixed at the same operation — failing to do so leaves the patient one event away from being anorchic. Epididymitis is the differential that must not delay surgery: **relief on elevation and a preserved cremasteric reflex** point to it, and it is treated by pathogen and age, with chlamydia or gonococcus under 35 and coliforms above it. For the penis, prevention is mechanical: **circumcision is protective against squamous cell carcinoma** because it abolishes the preputial sac that retains smegma, sustains chronic balanoposthitis and harbours persistent **HPV 16 and 18** — which is why phimosis, poor hygiene, smoking and HPV behave as one clustered exposure. In-situ lesions (**Bowen disease, erythroplasia of Queyrat**) are excised or treated topically before the roughly **10%** progression to invasion, and invasive disease is staged through the **inguinal** nodes, not the para-aortic chain ([[hrp1-male-duct-gland-penis-histology]]).',
    },
  ],

  mnemonics: [
    {
      hook: 'Cryptorchidism: the answer is in the OTHER testis',
      expansion: [
        'Undescended testis raises germ cell tumour risk about three to five fold',
        'The contralateral DESCENDED testis is at raised risk too',
        'A scrotal testis at 33 degrees cannot be injured by the abdominal temperature of its twin',
        'Therefore the defect is intrinsic to the gonad, not thermal: maldescent and malignancy are both symptoms of dysgenesis',
        'So orchidopexy before age 2 improves fertility and allows examination, but never abolishes the cancer risk on either side',
      ],
    },
    {
      hook: 'AFP overrules the slide; hCG overrules nothing',
      expansion: [
        'AFP comes from yolk sac and some embryonal elements only',
        'Pure seminoma NEVER raises AFP, so a raised AFP means non-seminomatous tissue the pathologist did not sample',
        'hCG can come from choriocarcinoma or from syncytiotrophoblastic giant cells in about 15% of pure seminomas, so it separates nothing',
        'LDH measures tumour bulk and turnover, not lineage',
        'Follow markers serially: AFP half-life 5 to 7 days, hCG 24 to 36 hours — a plateau above normal means residual disease',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'Reading tumour markers against histology',
      wrongInstinct: 'The orchidectomy specimen was reported as pure seminoma, so the raised AFP must be a laboratory artefact or liver disease, and the patient should have radiotherapy',
      rightAnswer: 'Treat the patient as having a non-seminomatous germ cell tumour and give cisplatin-based chemotherapy. A raised AFP proves non-seminomatous elements exist regardless of what the block shows',
      why: 'Serum samples the whole tumour and the histology block samples a few square centimetres of it, and germ cell tumours are frequently mixed — so AFP, which pure seminoma cannot produce, is evidence of tissue that was simply not cut',
    },
    {
      questionCategory: 'Working up a painless testicular mass',
      wrongInstinct: 'Any mass should be biopsied before radical surgery, so take a trans-scrotal core to confirm malignancy first',
      rightAnswer: 'Perform a radical inguinal orchidectomy with high cord ligation and never breach the scrotum. Ultrasound plus AFP, hCG and LDH is the complete preoperative work-up',
      why: 'The testis drains to the para-aortic nodes because it descended from L2, while scrotal skin drains to the inguinal nodes — cutting through the scrotum opens a second nodal basin and seeds tumour into a field that would never otherwise have been at risk',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 31-year-old man has a painless right testicular mass. Serum AFP is 380 ng/mL, hCG 45 IU/L and LDH is mildly raised. The orchidectomy specimen is reported as seminoma, with sheets of clear cells, lymphocytic septa and scattered granulomas; no yolk sac or trophoblastic elements are identified. What is the correct interpretation?',
      options: [
        { id: 'a', text: 'The AFP reflects syncytiotrophoblastic giant cells within the seminoma and can be disregarded' },
        { id: 'b', text: 'Non-seminomatous elements are present but were not sampled; the patient is managed as a non-seminomatous germ cell tumour with cisplatin-based chemotherapy' },
        { id: 'c', text: 'The histology is definitive, so the tumour is a pure seminoma and para-aortic radiotherapy is appropriate' },
        { id: 'd', text: 'The combination indicates a spermatocytic tumour, which requires no adjuvant therapy' },
      ],
      answerId: 'b',
      explanation: 'A pure seminoma cannot produce AFP, which comes from yolk sac and some embryonal elements, so a raised AFP is proof of non-seminomatous tissue somewhere in the tumour. Germ cell tumours are frequently mixed and a few blocks cannot exclude a focus elsewhere, which is why the serum overrules the slide and the patient receives chemotherapy rather than radiotherapy. Option a confuses the two markers: syncytiotrophoblastic giant cells, present in about 15% of otherwise pure seminomas, raise hCG and never AFP, which is exactly why hCG discriminates nothing here. A spermatocytic tumour occurs in men over 65, lacks germ cell neoplasia in situ and isochromosome 12p, and does not secrete markers.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A 4-year-old boy had a left orchidopexy at 18 months for an undescended testis. His parents are told about long-term cancer risk. Which statement best captures the pathogenesis?',
      options: [
        { id: 'a', text: 'Surgery performed before the age of 2 returns the malignancy risk to that of the general population' },
        { id: 'b', text: 'Risk is confined to the previously undescended testis, because the abdominal temperature mutates germ cell DNA' },
        { id: 'c', text: 'Risk is raised in both testes, including the normally descended one, indicating an intrinsic gonadal abnormality that orchidopexy reduces but does not eliminate' },
        { id: 'd', text: 'The risk arises only if orchidopexy fails, since a scrotal testis cannot develop germ cell neoplasia in situ' },
      ],
      answerId: 'c',
      explanation: 'The decisive observation is that the contralateral, normally descended testis also carries increased risk. A purely thermal mechanism cannot operate on a testis that has always been in the scrotum, so maldescent and malignant potential are both expressions of an intrinsically dysgenetic gonad, the same spectrum that includes hypospadias and impaired spermatogenesis. Germ cell neoplasia in situ, atypical germ cells confined within the tubules, is found in dysgenetic testes and is the precursor lesion. Orchidopexy before about age 2 preserves fertility and makes the testis examinable, and it reduces but does not abolish cancer risk, so lifelong self-examination of both sides is advised.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A 16-year-old presents with 3 hours of severe left scrotal pain that began abruptly during sleep. The testis is high-riding and lies transversely, the cremasteric reflex is absent, and elevating the scrotum gives no relief. Which statement is correct?',
      options: [
        { id: 'a', text: 'The expected pathology is pale infarction from primary arterial occlusion' },
        { id: 'b', text: 'Ultrasound should be arranged first, since relief on elevation reliably separates torsion from epididymitis' },
        { id: 'c', text: 'The testis should be explored immediately; venous occlusion produces haemorrhagic infarction, and the contralateral testis is fixed at the same operation' },
        { id: 'd', text: 'Antibiotics for chlamydial epididymo-orchitis are the priority, since this is the commonest cause of acute scrotal pain at this age' },
      ],
      answerId: 'c',
      explanation: 'Torsion of the cord occludes the thin-walled veins before the thicker-walled artery, so arterial inflow continues into an obstructed outflow and the testis becomes engorged and undergoes haemorrhagic venous infarction, appearing swollen and purple-black rather than pale. Salvage falls steeply after roughly 6 hours, so this is a clinical diagnosis taken straight to theatre, and imaging that delays exploration is a mistake. The underlying bell-clapper deformity, in which the tunica vaginalis completely invests the testis and leaves it hanging freely, is bilateral, so the contralateral testis is fixed during the same procedure. Epididymitis is the differential and is distinguished by gradual onset, posterior tenderness, a preserved cremasteric reflex, pyuria and relief on elevation.',
      tests: 'disease',
    },
  ],
};

export default rbpTestisPenisPathology;
