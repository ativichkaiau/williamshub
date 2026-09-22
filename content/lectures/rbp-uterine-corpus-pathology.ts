import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpUterineCorpusPathology: Lecture = {
  id: 'rbp-uterine-corpus-pathology',
  title: 'Endometrial & Myometrial Pathology',
  system: 'repro',
  source: 'Ch 18 — Female Genital System and Breast',
  updated: '2026-09-22',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'Ch 18 Female Genital System and Breast' },
    { kind: 'mechanism', label: 'Unopposed oestrogen, atypical hyperplasia and the two endometrial carcinomas' },
    { kind: 'disease', label: 'Hyperplasia, endometrioid vs serous carcinoma, leiomyoma, endometriosis' },
  ],

  highYield: [
    '**One mechanism generates the entire endometrial cancer risk list, so learn the mechanism and the list writes itself.** Oestrogen drives **mitosis** in endometrial glands throughout the follicular phase. After ovulation the corpus luteum supplies **progesterone**, which **arrests mitosis**, converts the glands to secretory epithelium and, by withdrawal, sheds the lining synchronously. Remove the progesterone arm and proliferation simply never stops — this is **unopposed oestrogen**, and every risk factor is a different way of producing it. **Obesity** is the largest: adipose **aromatase** converts adrenal androstenedione to **oestrone**, and obesity also lowers **sex hormone binding globulin**, raising free oestradiol. **Anovulation** and **PCOS** mean no corpus luteum and therefore no progesterone at all. **Nulliparity, early menarche and late menopause** all add cycles of oestrogen exposure. **Oestrogen-only HRT** and an **oestrogen-secreting ovarian tumour** supply it directly. **Tamoxifen** is the elegant one — an antagonist in breast tissue and a partial **AGONIST** in endometrium, so the drug that prevents one cancer promotes another. The morphological consequence is graded. **Hyperplasia WITHOUT atypia** shows crowded glands with a raised gland-to-stroma ratio, often cystically dilated, but **normal nuclei**, and progresses to carcinoma in only about **1 to 3%**. **Hyperplasia WITH ATYPIA** — atypical hyperplasia, also called endometrioid intraepithelial neoplasia — adds **rounded, enlarged nuclei with nucleoli and loss of polarity**, and it is the lesion that matters: roughly **20 to 25% progress**, and **30 to 40% of hysterectomy specimens removed for atypical hyperplasia already contain carcinoma**. The genetic step that turns a hormonal state into a neoplasm is **PTEN inactivation**, present in a fifth of hyperplasias and in most endometrioid carcinomas. The hormone physiology behind all of this is in [[ghp-oestrogen-progesterone-actions]].',
    '**Endometrial carcinoma is two diseases, and the second one exists precisely because the risk-factor list does not fit every patient.** **TYPE I, endometrioid**, is about **80%**: perimenopausal to early postmenopausal (**55 to 65**), **oestrogen-driven**, arising **in hyperplastic endometrium**, composed of well-formed glands that resemble normal endometrium, frequently with **squamous differentiation**. Its genetics are the PI3K-AKT axis and mismatch repair: **PTEN, PIK3CA, ARID1A, KRAS, beta-catenin and microsatellite instability**. It is usually low grade, declares itself early because it sits on a bleeding surface, and **stage I 5-year survival is around 85 to 90%**. **TYPE II, serous**, is about **15%**: **older (65 to 75)**, **not oestrogen-driven at all**, and arising in **ATROPHIC endometrium** — often within an endometrial polyp. **TP53 mutation is present in over 90%**, the precursor is **serous endometrial intraepithelial carcinoma**, and the morphology is **papillary with marked nuclear pleomorphism and psammoma bodies**. Its behaviour is that of an ovarian serous carcinoma: it **exfoliates transtubally and spreads over peritoneal surfaces**, so extensive intra-abdominal disease coexists with **minimal myometrial invasion**, staging must include the peritoneum and omentum, it is **high grade by definition**, and **5-year survival is roughly 18 to 27%**. Clear cell carcinoma and carcinosarcoma belong to this aggressive family. Modern molecular grouping splits the same tumours into **POLE-ultramutated (excellent), mismatch-repair-deficient, p53-abnormal (worst) and no-specific-molecular-profile**, which is the same message with better resolution. The practical point sits in the contrast: **a thin, atrophic endometrium in a slim 72-year-old with postmenopausal bleeding is not reassurance** — it is the typical setting of the cancer that kills.',
    '**Leiomyoma is the commonest tumour in women, and every clinically useful fact about it follows from the fact that it is a hormone-dependent, whorled, benign muscle tumour.** It is clinically apparent in **30 to 50% of women of reproductive age**, found in up to **75%** if the uterus is serially sectioned, and both more frequent and earlier in women of African ancestry. Around **70% carry MED12 mutations**, with **HMGA2** rearrangements in most of the rest, and each tumour is **independently clonal** — which is exactly why they are **multiple** rather than one mass with satellites. They are **oestrogen and progesterone responsive**: they enlarge in pregnancy and on hormone therapy and **REGRESS after the menopause**. Grossly they are **sharply circumscribed, firm, grey-white, and bulge above the plane of section with a WHORLED cut surface**; they **shell out** cleanly because they compress surrounding myometrium into a pseudocapsule rather than infiltrating it. Microscopically: **bundles of uniform spindle cells with cigar-shaped, blunt-ended nuclei**, no atypia, **fewer than 5 mitoses per 10 high-power fields**, and **no coagulative tumour cell necrosis**. They degenerate in predictable ways — **hyaline**, **cystic**, **calcific**, and **red (carneous) degeneration in pregnancy**, which is painful infarction of a tumour that outgrew its supply. Symptoms are decided by **location, not size**: **submucosal** causes menorrhagia and impairs implantation; **intramural** causes bulk and pressure; **subserosal** causes pressure and, if pedunculated, torsion; **cervical** obstructs. **Leiomyosarcoma arises DE NOVO from myometrium, not from a leiomyoma** — malignant transformation is vanishingly rare, on the order of **well under 1 in 1000**. It peaks at **40 to 60**, frequently after the menopause, and the diagnosis rests on **any two of three features: significant cytological atypia, a mitotic index of 10 or more per 10 high-power fields, and coagulative tumour cell necrosis**. Grossly it is **soft, fleshy, haemorrhagic and necrotic with an infiltrative border** — it does not whorl and it does not shell out — and it spreads **haematogenously to lung**. Hence the rule that matters at the bedside: **a uterus that enlarges after the menopause is a new tumour, because the hormone that grows fibroids has gone**. Clinical management sits in [[hrp2-leiomyoma-adenomyosis]].',
    '**Endometriosis is endometrium outside the uterus behaving like endometrium; adenomyosis is endometrium inside the wall behaving like basalis — and that single distinction predicts everything about both.** **Endometriosis** requires **endometrial glands AND stroma** outside the uterus, affects **6 to 10%** of women and up to **30 to 50%** of women investigated for infertility or chronic pelvic pain. Four theories each explain part of it: **regurgitation** through the tubes with implantation explains the distribution — **ovary, then uterosacral ligaments, pouch of Douglas, pelvic peritoneum, bowel and bladder serosa** — but retrograde menstruation occurs in most women, so a **failure of immune clearance** is also required; **coelomic metaplasia** explains disease in women with blocked tubes; **vascular and lymphatic dissemination** explains lesions in lung and lymph nodes; and a **stem cell** origin explains rare distant sites. The lesions behave like low-grade neoplasms: **KRAS, ARID1A and PIK3CA mutations** are found in them, they express **high local aromatase** so they manufacture their own oestrogen, they make **prostaglandin E2** which drives that aromatase further, and they are **progesterone resistant** — a self-sustaining loop. Morphology: **red-blue to brown powder-burn serosal nodules**, an ovarian **endometrioma or chocolate cyst** filled with degraded blood, and **dense fibrous adhesions** that fix and retrovert the uterus and obliterate the pouch of Douglas. Because the lesion repeatedly bleeds and burns out its own epithelium, histological diagnosis accepts **any two of three: endometrial glands, endometrial stroma, haemosiderin-laden macrophages**. Atypical endometriosis is the precursor of **ovarian endometrioid and clear cell carcinoma**. **Adenomyosis** is different in kind: endometrial glands and stroma **within the myometrium**, at least **2.5 mm below the basalis**, with **reactive myometrial hypertrophy** around them, producing a **uniformly enlarged, globular, boggy uterus** with menorrhagia and increasing dysmenorrhoea. It is continuous with and derived from the **basalis**, which does not cyclically shed, which is why it is a growth-into-the-wall disease rather than an implantation disease. Compressed: **endometriosis is functional endometrium in the wrong place and it bleeds; adenomyosis is basalis burrowing into muscle and it thickens.** Clinical staging and therapy are in [[hrp2-endometriosis]].',
    '**The rest of the endometrium is read by three questions: is there a polyp, are there plasma cells, and is this cycle ovulatory?** An **endometrial polyp** is a sessile or pedunculated mass of endometrial glands, often **cystically dilated**, set in a **fibrous stroma with thick-walled feeding vessels**. The instructive genetics: the **STROMAL cells are monoclonal with 6p21 (HMGA2) rearrangements while the glands are polyclonal**, so the polyp is a stromal neoplasm dragging normal glands along with it. Polyps are strongly associated with **tamoxifen**, are usually benign, but harbour carcinoma in roughly **0.5 to 1.5%** — and **serous carcinoma has a particular habit of arising inside one**, which is why a polyp in a postmenopausal woman is removed whole rather than sampled. **Chronic endometritis requires PLASMA CELLS**: neutrophils are normal during menstruation and lymphocytes are normal at any time, so neither can make the diagnosis, whereas plasma cells are never a normal endometrial population. Its causes are **retained products of conception, an intrauterine device, pelvic inflammatory disease and tuberculosis** (which adds granulomas). For abnormal uterine bleeding, the commonest endometrial finding is **anovulation**: proliferative glands with **stromal breakdown and no secretory change**, typically at the extremes of reproductive life, and this is the same physiological state that, sustained for years, produces hyperplasia. An **inadequate luteal phase** gives secretory endometrium that lags behind the menstrual dates. Two uncommon tumours complete the corpus: **low-grade endometrial stromal sarcoma**, recognisable as **tongues of bland endometrial stromal cells infiltrating myometrium and permeating lymphatics**, usually carrying a **JAZF1-SUZ12** fusion and behaving indolently with late recurrence; and **carcinosarcoma (malignant mixed Mullerian tumour)**, a **TP53-mutant carcinoma that has undergone sarcomatous metaplasia**, which is why it is now staged and treated as an aggressive type II carcinoma rather than as a sarcoma.',
    '**When a postmenopausal woman bleeds, the morphology you are hunting for determines which test can safely stop the work-up.** Postmenopausal bleeding is endometrial carcinoma in about **10%** and must be investigated every time. **Transvaginal ultrasound** measuring endometrial thickness is the usual first filter: **4 mm or less has a negative predictive value near 99% for type I endometrioid carcinoma**, because that tumour grows on a thickened, oestrogen-stimulated lining that the probe can see. It is **not** a filter for **type II serous carcinoma**, which grows on **atrophic endometrium and inside polyps** and can be present with a thin stripe — so **persistent or recurrent bleeding requires tissue regardless of the measurement**. Sampling is by **pipelle** (blind, adequate for a diffuse process, unreliable for a focal one) or **hysteroscopy with directed biopsy or polypectomy** when the lesion is focal or the pipelle is non-diagnostic. Once carcinoma is confirmed, the specimen supplies the prognostic variables in a fixed order of weight: **FIGO grade** by the proportion of solid, non-squamous growth (**grade 1 is 5% or less, grade 2 is 6 to 50%, grade 3 is over 50%**), **depth of myometrial invasion** (the single strongest morphological predictor of nodal spread), **lymphovascular space invasion**, **cervical stromal involvement**, and **histological type**, where serous or clear cell overrides a favourable grade. Immunohistochemistry adds the two facts that change management outside the uterus: **mismatch repair protein loss** flags possible **Lynch syndrome** — and endometrial carcinoma is frequently the **sentinel cancer** in a Lynch family, appearing before the colorectal tumour — and **aberrant p53** reclassifies an apparently low-grade tumour into the aggressive group.',
  ],

  mechanism: {
    title: 'Unopposed oestrogen to endometrioid carcinoma, with the atrophic serous branch',
    steps: [
      { id: 's1', label: 'Oestrogen drives glandular mitosis in the follicular phase; progesterone from the corpus luteum then arrests it, induces secretory change and sets up synchronous shedding', detail: 'Every endometrial risk factor is a different way of losing the progesterone arm of this cycle.', emphasis: 'normal' },
      { id: 's2', label: 'Remove that brake — anovulation, PCOS, nulliparity, obesity with adipose aromatase making oestrone, oestrogen-only HRT, tamoxifen acting as an endometrial agonist — and mitosis never stops', emphasis: 'key' },
      { id: 's3', label: 'Hyperplasia WITHOUT atypia: crowded, often cystically dilated glands with a raised gland-to-stroma ratio but normal nuclei; only 1 to 3% progress to carcinoma', detail: 'This is a hormonal state rather than a neoplasm, which is why progestin reverses most of it.', emphasis: 'normal' },
      { id: 's4', label: 'PTEN is inactivated, then PIK3CA and ARID1A: hyperplasia WITH ATYPIA (endometrioid intraepithelial neoplasia), where 20 to 25% progress and 30 to 40% already conceal carcinoma', emphasis: 'danger' },
      { id: 's5', label: 'Endometrioid adenocarcinoma: glands resembling normal endometrium, graded by percent solid growth and staged by depth of myometrial invasion', emphasis: 'key' },
      { id: 's6', label: 'Because it sits on a surface that bleeds, it declares itself early as postmenopausal bleeding, so stage I with 85 to 90% 5-year survival is the usual picture', emphasis: 'normal' },
    ],
    branches: [
      {
        fromId: 's1',
        title: 'The other endometrial cancer, which ignores this pathway entirely',
        steps: [
          { id: 'b1', label: 'In a woman in her 70s the endometrium is ATROPHIC and there is no oestrogen drive at all', emphasis: 'normal' },
          { id: 'b2', label: 'A TP53 mutation appears in surface epithelium, frequently inside an endometrial polyp: serous endometrial intraepithelial carcinoma', emphasis: 'danger' },
          { id: 'b3', label: 'Papillary tumour with severe pleomorphism and psammoma bodies exfoliates transtubally across the peritoneum with little myometrial invasion; 5-year survival about 18 to 27%', detail: 'This is why a thin endometrium never reassures in a woman who keeps bleeding.', emphasis: 'danger' },
        ],
      },
    ],
  },

  examFindings: [
    { sign: 'Uniformly enlarged, globular, boggy, tender uterus with heavy periods and worsening dysmenorrhoea', mechanism: 'Adenomyosis: glands and stroma from the basalis burrowing into the myometrium provoke reactive smooth muscle hypertrophy, so the whole wall thickens symmetrically rather than forming discrete nodules', significance: 'key' },
    { sign: 'Irregularly enlarged, firm, knobbly uterus that moves as one with the cervix', mechanism: 'Multiple leiomyomata. Each is independently clonal, sharply circumscribed and bulging, so the contour is lumpy rather than globular, and the mass is uterine rather than adnexal because it moves with the cervix', significance: 'key' },
    { sign: 'Fixed, retroverted uterus with tender nodules palpable in the uterosacral ligaments and an obliterated pouch of Douglas', mechanism: 'Endometriosis: repeated cyclical bleeding into implants provokes dense fibrous adhesions that scar the posterior compartment shut', significance: 'key' },
    { sign: 'Rapidly enlarging uterine mass in a woman three years past her last period', mechanism: 'Leiomyomas are oestrogen and progesterone dependent and should be shrinking after the menopause, so growth in this setting means a leiomyosarcoma arising de novo from myometrium, not a fibroid turning malignant', significance: 'key' },
    { sign: 'Postmenopausal bleeding in a slim 72-year-old with no risk factors for unopposed oestrogen', mechanism: 'The absent risk profile fits type II serous carcinoma, which arises in atrophic endometrium and in polyps under the control of TP53 rather than of oestrogen', significance: 'supportive' },
    { sign: 'Cut surface at hysterectomy: a sharply circumscribed, firm, whorled grey-white nodule that bulges and shells out, beside a soft, fleshy, haemorrhagic mass with an infiltrative edge', mechanism: 'The gross discriminator. A leiomyoma compresses surrounding myometrium into a pseudocapsule; a leiomyosarcoma infiltrates it, outgrows its supply and necroses, so it neither whorls nor enucleates', significance: 'key' },
  ],

  investigations: [
    { clue: 'Endometrial biopsy with back-to-back crowded glands, scant intervening stroma, enlarged rounded nuclei with nucleoli and loss of polarity', meaning: 'Atypical hyperplasia (endometrioid intraepithelial neoplasia). Because 30 to 40% of hysterectomy specimens taken for this diagnosis already contain carcinoma, hysterectomy is a staging operation rather than an over-reaction' },
    { clue: 'Biopsy showing papillary tufts, severe nuclear pleomorphism, psammoma bodies and diffuse strong p53 staining', meaning: 'Serous carcinoma. Stage the peritoneum and omentum, because this tumour exfoliates transtubally and is frequently extrauterine while myometrial invasion is still shallow' },
    { clue: 'Transvaginal ultrasound endometrial thickness of 3 mm in a woman with one episode of postmenopausal bleeding', meaning: 'A negative predictive value near 99% for endometrioid carcinoma, which grows on a stimulated lining. It does not exclude serous carcinoma, which grows on atrophy and in polyps, so recurrent bleeding still requires tissue' },
    { clue: 'Hysteroscopic specimen of cystically dilated glands in fibrous stroma with thick-walled vessels, with monoclonal stroma carrying an HMGA2 rearrangement', meaning: 'Endometrial polyp — a stromal neoplasm carrying polyclonal glands. Remove it whole rather than sampling it, because roughly 0.5 to 1.5% harbour carcinoma and serous carcinoma favours arising inside one' },
    { clue: 'Myomectomy specimen with 14 mitoses per 10 high-power fields, diffuse cytological atypia and coagulative tumour cell necrosis', meaning: 'Leiomyosarcoma: any two of atypia, mitotic index of 10 or more, and coagulative necrosis make the diagnosis. It spreads haematogenously to lung, so staging imaging follows and morcellation must be avoided' },
    { clue: 'Endometrial biopsy showing plasma cells scattered in the stroma', meaning: 'Chronic endometritis. Neutrophils are physiological during menstruation and lymphocytes are present normally, so only plasma cells settle it — then look for retained products, an intrauterine device, pelvic inflammatory disease or tuberculosis' },
  ],

  treatment: [
    {
      logic: 'Restore the progesterone brake, or remove the organ that lost it',
      detail: 'Hyperplasia **without** atypia is a hormonal state, not a neoplasm, so **progestin reverses the large majority** — and the **levonorgestrel intrauterine system** is first choice because it delivers the highest concentration directly to the target tissue with least systemic exposure. Re-biopsy at **3 to 6 months** is what proves reversal; regression must be documented, not assumed. Hyperplasia **WITH atypia** is a different decision, because **30 to 40% already harbour carcinoma**: in a woman who has completed her family, **hysterectomy** is the treatment, and high-dose progestin with **3-monthly re-biopsy** is a deliberate fertility-preserving compromise carrying a real residual risk. Two adjuncts are mechanistic rather than optional — **weight loss** removes the adipose aromatase that is manufacturing the oestrone in the first place, and **ovulation induction or cyclical progestin** restores the luteal phase in anovulation and PCOS. Any woman taking **tamoxifen who bleeds needs tissue**, because the drug is an endometrial agonist and causes both polyps and carcinoma. Full clinical staging and adjuvant therapy are in [[hrp2-uterine-corpus-pathology]].',
    },
    {
      logic: 'Treat a fibroid by where it sits, and treat a growing postmenopausal uterus as a sarcoma',
      detail: 'Location decides the operation, because location decides the symptom. **Submucosal** fibroids causing menorrhagia or impairing implantation come out **hysteroscopically**; **intramural and subserosal** bulk disease is handled by **myomectomy** or **uterine artery embolisation**; a **pedunculated subserosal** fibroid that torts is an acute surgical problem. **GnRH agonists shrink fibroids only by inducing a medical menopause**, so the effect is temporary and the tumours **rebound on stopping** — useful to reduce size and correct anaemia before surgery, not a definitive treatment. The safety rule comes straight from the pathology: because **leiomyosarcoma arises de novo rather than inside a fibroid**, an unexpected sarcoma is always a possibility in a mass that is growing when it should be regressing, and **morcellating it disseminates tumour through the peritoneum**. So growth after the menopause changes the operation to intact removal with a specimen bag or an open approach. Symptom-directed fibroid management is expanded in [[hrp2-leiomyoma-adenomyosis]].',
    },
  ],

  mnemonics: [
    {
      hook: 'One mechanism writes the whole endometrial risk list',
      expansion: [
        'Everything on the list is a way of getting oestrogen without progesterone',
        'Obesity: adipose aromatase makes oestrone and low SHBG frees oestradiol',
        'Anovulation, PCOS and nulliparity: no corpus luteum, therefore no progesterone brake',
        'Oestrogen-only HRT and an oestrogen-secreting ovarian tumour supply it directly',
        'Tamoxifen is a breast antagonist and an endometrial AGONIST, which is why it appears on a cancer risk list',
      ],
    },
    {
      hook: 'Type I grows on a thick lining, type II grows on a thin one',
      expansion: [
        'Type I endometrioid: 80%, ages 55 to 65, oestrogen-driven, arises in hyperplasia, PTEN and PIK3CA, low grade, stage I survival 85 to 90%',
        'Type II serous: 15%, ages 65 to 75, no hormonal drive, arises in ATROPHY and in polyps, TP53 in over 90%, psammoma bodies, survival 18 to 27%',
        'Type I invades the myometrium; type II exfoliates transtubally over the peritoneum with shallow invasion',
        'So a thin endometrium excludes the first cancer and says nothing about the second',
        'Clear cell carcinoma and carcinosarcoma travel with type II',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'Postmenopausal bleeding with a thin endometrium on ultrasound',
      wrongInstinct: 'An endometrial thickness of 4 mm or less excludes cancer, so reassure her and discharge',
      rightAnswer: 'That threshold has a negative predictive value near 99% for type I endometrioid carcinoma only, because that tumour needs a stimulated, thickened lining. Serous carcinoma arises in ATROPHIC endometrium and inside polyps, so persistent or recurrent bleeding is sampled regardless of the measurement',
      why: 'The rule: the ultrasound tests for the oestrogen-driven cancer. The p53-driven cancer grows on a thin lining, so a thin stripe plus ongoing bleeding means take tissue',
    },
    {
      questionCategory: 'A uterine mass that has doubled in a year in a 54-year-old, two years after her last period',
      wrongInstinct: 'Fibroids are extremely common and benign, so observe, or offer laparoscopic myomectomy with morcellation',
      rightAnswer: 'Leiomyomas are oestrogen and progesterone dependent and should be regressing after the menopause. Growth in this setting means leiomyosarcoma, which arises de novo from myometrium, and morcellation would seed the peritoneum with it',
      why: 'The rule: malignant transformation of a leiomyoma essentially does not occur, so a growing postmenopausal uterine mass is a new tumour, not an old one turning bad — and that changes the operation, not just the follow-up',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 58-year-old woman with a body mass index of 39 has atypical endometrial hyperplasia on pipelle biopsy. Which single mechanism links her obesity, her nulliparity, her previous anovulatory cycles and her recent tamoxifen therapy to this lesion?',
      options: [
        { id: 'a', text: 'All four raise circulating progesterone, which stimulates endometrial glandular mitosis' },
        { id: 'b', text: 'All four produce oestrogenic stimulation of the endometrium that is unopposed by progesterone, so glandular mitosis continues without arrest or shedding' },
        { id: 'c', text: 'All four cause chronic endometritis, and inflammation is the proliferative stimulus' },
        { id: 'd', text: 'All four directly mutate TP53 in the endometrial surface epithelium' },
      ],
      answerId: 'b',
      explanation: 'Oestrogen drives glandular mitosis; progesterone from the corpus luteum arrests it and organises shedding. Adipose aromatase converts androstenedione to oestrone and obesity lowers sex hormone binding globulin; anovulation and nulliparity mean fewer or no luteal phases; tamoxifen is an antagonist in breast but a partial agonist in endometrium. All four therefore converge on unopposed oestrogen. PTEN inactivation then converts a hormonal state into a neoplastic one, which is why atypia, not simple crowding, is the lesion that progresses in 20 to 25% of cases.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A 73-year-old woman with a body mass index of 21 and no hormonal risk factors has postmenopausal bleeding. Biopsy shows a papillary tumour with marked nuclear pleomorphism, psammoma bodies and diffuse strong p53 staining, and the background endometrium is atrophic. What does this combination tell you?',
      options: [
        { id: 'a', text: 'It is a type I endometrioid carcinoma, so unrecognised unopposed oestrogen must be present' },
        { id: 'b', text: 'It is a type II serous carcinoma arising in atrophic endometrium; staging must include the peritoneum and omentum because it spreads transtubally with shallow myometrial invasion' },
        { id: 'c', text: 'Psammoma bodies indicate a metastasis from a papillary thyroid carcinoma' },
        { id: 'd', text: 'The atrophic background means the lesion is benign and reflects atrophic vaginitis' },
      ],
      answerId: 'b',
      explanation: 'Type II serous carcinoma is not oestrogen-driven. It appears a decade later than endometrioid carcinoma, arises in atrophic endometrium and often within a polyp, carries TP53 mutation in over 90% with a serous endometrial intraepithelial carcinoma precursor, and behaves like ovarian serous carcinoma by exfoliating through the tubes onto peritoneal surfaces. That is why extensive intra-abdominal disease can accompany minimal myometrial invasion, why staging is surgical and peritoneal, and why 5-year survival is roughly 18 to 27% against 85 to 90% for stage I endometrioid disease.',
      tests: 'disease',
    },
    {
      id: 'q3',
      stem: 'A hysterectomy specimen contains a 6 cm sharply circumscribed nodule with a whorled grey-white cut surface that shells out cleanly, and a separate 9 cm soft, fleshy, haemorrhagic mass with an infiltrative border. Which feature set confirms the second mass is a leiomyosarcoma?',
      options: [
        { id: 'a', text: 'Size greater than 8 cm, since leiomyomas do not exceed this' },
        { id: 'b', text: 'Any two of significant cytological atypia, a mitotic index of 10 or more per 10 high-power fields, and coagulative tumour cell necrosis' },
        { id: 'c', text: 'Demonstration that it arose within the adjacent leiomyoma' },
        { id: 'd', text: 'Positive staining for desmin and smooth muscle actin' },
      ],
      answerId: 'b',
      explanation: 'The diagnosis rests on the triad of atypia, mitotic index and coagulative tumour cell necrosis, with any two sufficient. Size alone means nothing, since leiomyomas are frequently large. Smooth muscle markers confirm the lineage of both lesions and cannot separate benign from malignant. Crucially, leiomyosarcoma arises de novo from myometrium rather than within a pre-existing fibroid, so no continuity with the leiomyoma is expected or required. This is also the reason a uterine mass enlarging after the menopause, when fibroids should be regressing, is treated as a sarcoma and removed intact rather than morcellated.',
      tests: 'disease',
    },
  ],
};

export default rbpUterineCorpusPathology;
