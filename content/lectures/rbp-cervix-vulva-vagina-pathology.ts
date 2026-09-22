import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpCervixVulvaVaginaPathology: Lecture = {
  id: 'rbp-cervix-vulva-vagina-pathology',
  title: 'Cervical, Vulvar & Vaginal Pathology',
  system: 'repro',
  source: 'Ch 18 — Female Genital System and Breast',
  updated: '2026-09-22',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'Ch 18 Female Genital System and Breast' },
    { kind: 'mechanism', label: 'Transformation-zone metaplasia and the E6/E7 disabling of p53 and RB' },
    { kind: 'disease', label: 'CIN, cervical carcinoma, lichen sclerosus and the two vulvar cancers' },
  ],

  highYield: [
    '**Almost every cervical neoplasm arises in one strip of epithelium, and knowing why that strip exists tells you how to screen it.** The endocervix is **simple columnar mucinous** epithelium; the ectocervix is **stratified squamous non-keratinising**. The line between them is the **original squamocolumnar junction**. At menarche and in pregnancy, oestrogen **everts** the endocervical columnar epithelium onto the ectocervix, where **vaginal pH near 4** injures it. **Subcolumnar reserve cells** then proliferate and undergo **SQUAMOUS METAPLASIA**, building a new squamocolumnar junction closer to the os. The band between the old and the new junction is the **TRANSFORMATION ZONE**, and it is the only part of the cervix where immature squamous cells are **actively dividing with an accessible basal layer**. HPV cannot replicate in a resting differentiated cell — it needs a **mitotic basal keratinocyte** — so **over 90% of cervical intraepithelial neoplasia and carcinoma starts here**. Every rule of screening is downstream of that anatomy: the spatula and brush must **sample the transformation zone** (a slide with no endocervical or metaplastic cells is reported inadequate); acetic acid at colposcopy turns dysplasia **aceto-white** because high nuclear protein density coagulates; and after the menopause the junction **retreats up the canal**, so colposcopy becomes unsatisfactory and the plan changes from biopsy to excision. **Nabothian cysts** are simply metaplastic squamous epithelium roofing over an endocervical crypt — a by-product of the same process, and of no consequence. Baseline histology is in [[hrp1-cervix-vagina-histology]].',
    '**High-risk HPV is oncogenic because two viral proteins disable the two tumour-suppressor pathways that matter, and low-risk types do neither.** The virus has **no polymerase of its own**, so it must force a keratinocyte that is trying to differentiate back into **S phase**. **E7 binds RB**, releasing **E2F** and driving unscheduled S-phase entry, and it also neutralises **p21 and p27**. **E6 recruits the ubiquitin ligase E6-AP to degrade p53**, removing the damage sensor that should have arrested or killed that cell. **Brake off and alarm disabled**: the cell now divides carrying DNA damage it cannot repair and cannot apoptose away. **Types 16 and 18 cause roughly 70% of cervical cancers** (16 alone about 60%), and their E6 and E7 bind p53 and RB with **high affinity**; **low-risk types 6 and 11 bind weakly**, so the cell keeps both brakes and produces a **condyloma acuminatum** — a benign papillary wart — rather than a cancer. Progression needs a second viral event: **integration of viral DNA into the host genome disrupts E2**, the repressor of E6 and E7, so oncoprotein expression becomes unregulated. Low-grade lesions carry **episomal** virus; high-grade and invasive lesions carry **integrated** virus. One paradox is diagnostically useful — because E7 inactivates RB, the negative feedback on **p16 (INK4a)** is lost, so **diffuse block-positive p16 immunostaining marks transcriptionally active high-risk HPV** and settles an equivocal biopsy. About **80 to 90% of infections clear within 1 to 2 years**; it is **persistence** that matters, helped along by smoking, HIV or other immunosuppression, and long-duration combined oral contraceptive use. The general logic of multi-hit carcinogenesis is in [[rbp-carcinogenesis-tumour-progression]].',
    '**The grading system exists because most low-grade lesions go away by themselves, and management is graded to match.** **CIN1 (low-grade SIL)** confines dysplastic change to the **basal third** and shows the morphology of productive viral infection: **koilocytes** — superficial squamous cells with a sharply bordered **perinuclear halo**, a **wrinkled, raisinoid hyperchromatic nucleus** and frequent **binucleation**. **CIN2** reaches the **middle third**; **CIN3 (including carcinoma in situ)** is **full-thickness** loss of maturation with mitoses at all levels. CIN2 and CIN3 together are **high-grade SIL**, and the two-tier system exists because CIN2 is the least reproducible grade between pathologists — **p16** resolves it. The natural history is the whole argument: **CIN1 regresses in about 60%, persists in about 30%, progresses to CIN3 in about 10%, and reaches invasion in roughly 1%**; **CIN3 still regresses in about a third but progresses to invasion in well over 10%**. The interval from infection to CIN3 is years, and from CIN3 to invasion is usually **a decade or more**. That long, slow, largely reversible pre-invasive phase is exactly why a cytology programme works at all, and why the response is calibrated: **CIN1 is watched with repeat testing, CIN3 is excised**. Treating every CIN1 would buy cervical stenosis and preterm delivery in exchange for lesions that were going to disappear.',
    '**Invasive cervical carcinoma kills through the ureters, and the histological type it is now most likely to be is the one screening is worst at finding.** Roughly **75 to 80% are squamous cell carcinoma** and **15 to 20% adenocarcinoma**, both driven by high-risk HPV, with adenocarcinoma disproportionately **HPV 18**. Microinvasion (**FIGO IA1**, stromal invasion **3 mm or less**) is a different clinical animal from frank invasion because lymphatic spread is negligible at that depth. Gross patterns are **exophytic and fungating**, **ulcerating**, or **infiltrative**, the last producing the hard expanded **barrel cervix** that hides its volume. Spread is characteristically **direct and lateral**: into the **parametrium**, then to the pelvic side wall, where it **encases the ureters** and produces **bilateral hydronephrosis**, so the classic cause of death is **uraemia**, not distant metastasis; anterior and posterior extension makes vesicovaginal and rectovaginal fistulae. Nodes run obturator and iliac, then para-aortic. The screening point is the sting in the tail: as cytology has stripped out squamous disease, **the proportion of adenocarcinoma has risen**, because glandular lesions sit in the **endocervical canal above the surface the brush scrapes** and shed fewer diagnostic cells. That is an anatomical limitation of the test, not a failure of the programme, and it is the main argument for **primary high-risk HPV testing**, which does not depend on catching an abnormal cell. Clinical staging, prevention and the screening pathway are in [[hrp2-cervical-cancer-screening]].',
    '**On the vulva, a white patch is two different diseases, and the thin one is the dangerous one.** **LICHEN SCLEROSUS** gives **smooth, white, parchment-thin plaques** with **atrophic, fused labia** and a narrowed introitus. Down the microscope it is unmistakable: **thinned epidermis with loss of the rete ridges**, **hydropic degeneration of the basal layer**, a broad zone of **homogenised, hyalinised, acellular dermal collagen**, and a **band-like lymphocytic infiltrate beneath that zone**. It peaks after the menopause but occurs at any age, clusters with other autoimmune disease, and is **not itself a premalignant lesion** — yet roughly **4% (reported 1 to 5%) of affected women develop vulvar squamous carcinoma**, because the chronically injured epithelium is the substrate on which a **non-HPV** cancer pathway runs. **LICHEN SIMPLEX CHRONICUS (squamous hyperplasia)** is its opposite: **thickened, leathery, excoriated white plaque** from an itch-scratch cycle, with **acanthosis and hyperkeratosis** and an expanded granular layer, **no atypia**, and **no increased cancer risk of its own**. The discriminator to hold: **thin white vulva carries a small but real cancer risk; thick white vulva carries none** — and the two frequently coexist in the same woman, which is why the biopsy is taken from the thickened, ulcerated or fissured area rather than from the middle of the white field.',
    '**Vulvar squamous carcinoma is two diseases wearing one name, separated by HPV, by age and by two immunostains — and the vagina contributes three tumours that are each defined by an exposure.** The **HPV-related pathway** accounts for roughly **30%**: **HPV 16**, women in their **40s to 60s**, **multifocal** disease, precursor **usual-type VIN (high-grade squamous intraepithelial lesion)**, resulting in **basaloid or warty carcinoma**, **p16 block-positive** and **p53 wild-type**, with smoking and immunosuppression as cofactors and frequent synchronous cervical or vaginal lesions. The **non-HPV pathway** accounts for roughly **70%**: women in their **70s**, arising on **lichen sclerosus** through **differentiated VIN**, driven by **TP53 mutation**, producing a **unifocal, keratinising** squamous carcinoma that is **p16 negative with aberrant p53**. Same organ, same word, opposite biology, opposite decade. **Vulvar (extramammary) Paget disease** is an **intraepidermal adenocarcinoma**: large pale cells with mucin-containing cytoplasm scattered through the epidermis, **PAS, mucicarmine and CK7 positive**, and — the contrast worth memorising — it usually has **NO underlying carcinoma**, whereas Paget disease of the nipple almost always does. In the vagina, primary carcinoma is rare and is usually **squamous carcinoma of the upper vagina in a woman with previous cervical neoplasia**, because the whole lower tract was exposed to the same virus; **clear cell adenocarcinoma** arises from **vaginal adenosis** in daughters of women given **diethylstilbestrol** (adenosis in a large minority of those exposed, carcinoma in about **1 in 1000**); and **embryonal rhabdomyosarcoma (sarcoma botryoides)** presents in girls under 5 as a soft **grape-like polypoid mass**, with a **cambium layer** of desmin- and myogenin-positive rhabdomyoblasts crowded beneath the epithelium. Clinical staging and management sit in [[hrp2-vulvar-vaginal-neoplasia]].',
  ],

  mechanism: {
    title: 'From squamous metaplasia in the transformation zone to invasive carcinoma',
    steps: [
      { id: 's1', label: 'Oestrogen at menarche and in pregnancy everts endocervical columnar epithelium onto the ectocervix, where vaginal pH near 4 injures it', emphasis: 'normal' },
      { id: 's2', label: 'Subcolumnar reserve cells proliferate into immature squamous epithelium: the transformation zone, the only cervical site with dividing squamous cells and an accessible basal layer', detail: 'This is why over 90% of cervical neoplasia arises here, and why the smear must sample it to be adequate.', emphasis: 'key' },
      { id: 's3', label: 'High-risk HPV enters basal keratinocytes through microabrasions; it has no polymerase of its own, so it must force a differentiating cell back into S phase', emphasis: 'key' },
      { id: 's4', label: 'E7 binds RB and releases E2F while E6 recruits E6-AP to degrade p53: the proliferation brake and the damage sensor are both removed', detail: 'Low-risk types 6 and 11 bind both proteins weakly, keep the brakes on, and make a wart instead.', emphasis: 'danger' },
      { id: 's5', label: 'Viral DNA integrates and disrupts E2, de-repressing E6 and E7; loss of RB feedback drives diffuse p16 overexpression, the surrogate marker of active high-risk infection', detail: 'Episomal virus in low-grade lesions, integrated virus in high-grade and invasive disease.', emphasis: 'key' },
      { id: 's6', label: 'A persistent high-grade lesion accumulates chromosomal damage over a decade or more, breaches the basement membrane and invades the parametrium, encasing the ureters', detail: 'Bilateral hydronephrosis and uraemia, not distant metastasis, is the classic cause of death.', emphasis: 'danger' },
    ],
    branches: [
      {
        fromId: 's3',
        title: 'The low-risk branch',
        steps: [
          { id: 'b1', label: 'Types 6 and 11 bind p53 and RB weakly, so both tumour-suppressor pathways keep working', emphasis: 'normal' },
          { id: 'b2', label: 'Viral DNA stays episomal and productive: koilocytes, acanthosis and a papillary condyloma acuminatum', emphasis: 'key' },
          { id: 'b3', label: 'The lesion is a wart — it may recur and it may be extensive in pregnancy or HIV, but it essentially never becomes carcinoma', emphasis: 'normal' },
        ],
      },
    ],
  },

  examFindings: [
    { sign: 'Dense aceto-white epithelium with coarse punctation and mosaicism at colposcopy', mechanism: 'Dysplastic cells carry a high nuclear protein load, so acetic acid coagulates protein and makes the epithelium opaque. The abnormal branching capillaries are seen end-on as punctation and as a network outlining blocks of epithelium as mosaicism', significance: 'key' },
    { sign: 'Squamocolumnar junction no longer visible in a postmenopausal woman, so the colposcopy is reported unsatisfactory', mechanism: 'Without oestrogen the junction retreats up the endocervical canal, taking the transformation zone with it. The lesion is now above the point the colposcope reaches, so the diagnostic step becomes excision rather than directed biopsy', significance: 'key' },
    { sign: 'Friable, fungating cervical mass that bleeds on contact, with post-coital bleeding', mechanism: 'Invasive carcinoma replaces epithelium with a thin-walled, poorly supported tumour vasculature that tears under minimal mechanical stress', significance: 'key' },
    { sign: 'Smooth, white, parchment-thin vulval skin with fused labia minora and a narrowed introitus', mechanism: 'Lichen sclerosus: epidermal thinning with loss of rete ridges over a broad zone of hyalinised dermal collagen. It is not premalignant itself, but roughly 4% of affected women develop squamous carcinoma through the differentiated VIN pathway', significance: 'key' },
    { sign: 'Thickened, leathery, excoriated white plaque on the vulva in a woman who scratches at night', mechanism: 'Lichen simplex chronicus: acanthosis and hyperkeratosis driven by chronic rubbing, with no atypia and no independent increase in cancer risk', significance: 'supportive' },
    { sign: 'Soft, grape-like polypoid mass protruding from the vagina of a 3-year-old', mechanism: 'Embryonal rhabdomyosarcoma (sarcoma botryoides): a cambium layer of primitive rhabdomyoblasts crowded beneath the vaginal epithelium, expanding as oedematous polypoid nodules', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Cytology showing superficial squamous cells with sharply bordered perinuclear halos, wrinkled raisinoid hyperchromatic nuclei and binucleation', meaning: 'Koilocytes, the morphology of productive HPV infection. This is a low-grade squamous intraepithelial lesion, which regresses in about 60% of women, so the answer is repeat testing rather than excision' },
    { clue: 'Punch biopsy showing loss of maturation through the full thickness of the epithelium with mitoses at every level', meaning: 'CIN3 or high-grade SIL. Well over 10% progress to invasion if left, so this is excised by large loop or cone, and the specimen is examined for an occult invasive focus' },
    { clue: 'Equivocal CIN2 biopsy that stains diffusely block-positive for p16 with Ki-67 well above the basal third', meaning: 'Transcriptionally active high-risk HPV. E7 inactivates RB, which removes the feedback that normally suppresses p16, so the paradox of an overexpressed tumour suppressor is the proof of oncogene activity. Manage as high grade' },
    { clue: 'High-risk HPV positive with negative cytology in a 28-year-old', meaning: 'Infection, not disease. Around 80 to 90% of infections clear within 1 to 2 years, so this is a reason to repeat testing on an interval, not a reason to take a cone out of a young cervix' },
    { clue: 'Vulvar keratinising squamous carcinoma in a 74-year-old that is p16 negative with aberrant p53 staining, on a background of hyalinised dermal collagen', meaning: 'The non-HPV pathway: differentiated VIN arising in lichen sclerosus, TP53-driven, unifocal. A p16 block-positive, p53 wild-type basaloid tumour in a 48-year-old would be the other disease entirely, with multifocal usual-type VIN alongside it' },
    { clue: 'Bilateral hydronephrosis with a creatinine of 380 micromol/L in a woman with a fixed, expanded barrel cervix', meaning: 'Parametrial extension to the pelvic side wall encasing both ureters. This is advanced local disease causing obstructive uropathy, and relieving the obstruction with nephrostomies precedes any oncological treatment' },
  ],

  treatment: [
    {
      logic: 'Excise the transformation zone, not the lesion you happen to see',
      detail: 'The target of treatment is the **whole at-risk field**, because CIN is a disease of the transformation zone rather than of one visible patch. **Ablation** (cryotherapy, laser) is acceptable only when the squamocolumnar junction is **fully visible**, the lesion is **entirely ectocervical**, and invasion has been excluded — because ablation destroys tissue without producing a specimen. Otherwise the answer is **excision**: large loop excision of the transformation zone or a cone, which both treats and yields a specimen in which an occult invasive focus can be found and margins assessed. When the junction has receded up the canal, add **endocervical curettage** or go straight to a cylindrical cone, since a directed biopsy of a surface you cannot see proves nothing. The cost side is real and is why CIN1 is not treated: a deep or repeated cone causes **cervical stenosis and raises the risk of preterm delivery**, so depth is kept to what the lesion requires. Screening intervals, HPV vaccination and staged management are in [[hrp2-cervical-cancer-screening]].',
    },
    {
      logic: 'A white vulva is two diseases, and only the biopsy decides which one you are treating',
      detail: '**Lichen sclerosus** responds to an **ultrapotent topical corticosteroid** (clobetasol), which controls itch, halts scarring and reduces but does not abolish the roughly **4% lifetime squamous carcinoma risk** — so treatment does not end surveillance, and the woman is taught to report any new lump, ulcer or fissure. **Lichen simplex chronicus** needs the **itch-scratch cycle** broken with emollients, a moderate steroid and treatment of any candidal or contact trigger; it carries **no independent cancer risk**, so it needs no surveillance of its own. The non-negotiable rule for both: **biopsy any area that is raised, ulcerated, fissured or unresponsive after a proper steroid trial**, because **differentiated VIN is unifocal and inconspicuous** within a field of white atrophic skin, and it is the lesion that becomes a keratinising carcinoma. Excision margins and the management of usual-type VIN are set out in [[hrp2-vulvar-vaginal-neoplasia]].',
    },
  ],

  mnemonics: [
    {
      hook: 'E6 eats p53, E7 evicts RB',
      expansion: [
        'E6 recruits E6-AP to ubiquitinate p53 — the damage sensor is degraded, so the cell cannot arrest or apoptose',
        'E7 binds RB and frees E2F — the proliferation brake is released, so a differentiating keratinocyte re-enters S phase',
        'Both brakes gone means a dividing cell carrying unrepaired DNA damage: that is the whole oncogenic mechanism',
        'Types 16 and 18 bind hard and cause about 70% of cervical cancer; types 6 and 11 bind weakly and cause warts',
        'RB inactivation removes feedback on p16, so block-positive p16 is the stain that proves high-risk HPV is active',
      ],
    },
    {
      hook: 'Two vulvar cancers, two decades, two stains',
      expansion: [
        'Younger (40s to 60s): HPV 16, usual-type VIN, MULTIFOCAL, basaloid or warty, p16 block-positive, p53 wild-type',
        'Older (70s): lichen sclerosus, differentiated VIN, UNIFOCAL, keratinising, p16 negative, p53 aberrant',
        'The HPV one comes with cervical and vaginal disease because the whole lower tract met the same virus',
        'The non-HPV one hides in a field of white atrophic skin, so the biopsy goes into the lump, not the plaque',
        'Roughly 30% of vulvar squamous carcinoma is the HPV disease and 70% is the lichen sclerosus disease',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'High-grade cytology with a normal-looking colposcopy in a postmenopausal woman',
      wrongInstinct: 'The colposcopy showed nothing, so the cytology was a false positive — repeat it in 12 months',
      rightAnswer: 'After the menopause the squamocolumnar junction retreats into the endocervical canal, so the transformation zone is no longer visible and the lesion sits above the field of view. Proceed to endocervical sampling and a diagnostic cylindrical excision',
      why: 'The rule: an unsatisfactory colposcopy converts the plan from see-and-biopsy to excise-and-examine. A normal view of the wrong anatomy is not a negative result',
    },
    {
      questionCategory: 'CIN1 on biopsy in a 25-year-old',
      wrongInstinct: 'Dysplasia is a precancerous change, so excise it now before it progresses',
      rightAnswer: 'Observe with repeat cytology and HPV testing. CIN1 is the morphology of productive viral infection, not an established precursor: about 60% regress, about 10% ever reach CIN3, and roughly 1% reach invasion',
      why: 'The rule: match the intervention to the grade. CIN1 is watched and CIN3 is excised, because a cone in a young woman buys cervical stenosis and preterm birth in exchange for a lesion that was going to disappear',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Over 90% of cervical intraepithelial neoplasia arises within the transformation zone rather than elsewhere on the cervix. What property of that zone accounts for this?',
      options: [
        { id: 'a', text: 'It has the richest lymphatic drainage of the cervix, so virus is delivered there preferentially' },
        { id: 'b', text: 'It contains immature, actively dividing metaplastic squamous cells with an accessible basal layer, which is what HPV requires to replicate' },
        { id: 'c', text: 'It is the only region of the cervix that expresses oestrogen receptors' },
        { id: 'd', text: 'Its columnar epithelium secretes mucin that concentrates viral particles against the surface' },
      ],
      answerId: 'b',
      explanation: 'Oestrogen everts columnar epithelium onto the ectocervix, where a vaginal pH near 4 injures it and drives subcolumnar reserve cells into squamous metaplasia. HPV carries no polymerase and cannot replicate in a resting differentiated cell, so it needs a mitotic basal keratinocyte, and the transformation zone is the one place on the cervix that reliably supplies them. The same anatomy dictates that a smear is only adequate if it samples this zone, and that a postmenopausal cervix with a receded junction needs excision rather than directed biopsy.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A cervical biopsy is reported as equivocal CIN2. Immunohistochemistry shows diffuse, strong, block-positive p16 staining. Why does an overexpressed tumour suppressor indicate a high-grade lesion rather than a reassuring one?',
      options: [
        { id: 'a', text: 'p16 accumulates because E7 has inactivated RB, removing the feedback that normally suppresses p16 — so block positivity is a marker of active high-risk HPV oncogene expression' },
        { id: 'b', text: 'p16 is degraded by E6 together with p53, so its accumulation means the virus has been cleared' },
        { id: 'c', text: 'p16 staining reflects a host immune response that predicts spontaneous regression' },
        { id: 'd', text: 'p16 is expressed only by low-risk HPV types 6 and 11, so the lesion is a condyloma' },
      ],
      answerId: 'a',
      explanation: 'p16 normally restrains CDK4 and CDK6 to keep RB active, and p16 transcription is held down by functioning RB. When E7 binds and inactivates RB, that feedback is lost and p16 rises to diffuse block-positive levels. The stain therefore reports the functional consequence of the viral oncogene rather than a working tumour suppressor. It is used precisely because CIN2 is the least reproducible grade between pathologists: block-positive p16 with Ki-67 above the basal third moves the case into the high-grade, excise category.',
      tests: 'investigation',
    },
    {
      id: 'q3',
      stem: 'A 74-year-old woman with a 20-year history of white, parchment-thin, atrophic vulval skin develops a unifocal keratotic ulcer. Biopsy shows keratinising squamous carcinoma that is p16 negative with aberrant p53 staining. Which statement about this tumour is correct?',
      options: [
        { id: 'a', text: 'It is HPV 16 related, so she is likely to have synchronous cervical and vaginal intraepithelial lesions' },
        { id: 'b', text: 'It arose through differentiated VIN on a background of lichen sclerosus, driven by TP53 mutation rather than by HPV' },
        { id: 'c', text: 'Lichen sclerosus is a premalignant lesion, so all of the white skin has already transformed' },
        { id: 'd', text: 'The absence of p16 staining means the biopsy is inadequate and should be repeated' },
      ],
      answerId: 'b',
      explanation: 'Vulvar squamous carcinoma runs two independent pathways. The HPV pathway accounts for roughly 30%, affects women in their 40s to 60s, is multifocal, arises through usual-type VIN and yields basaloid or warty tumours that are p16 block-positive and p53 wild-type. The non-HPV pathway accounts for roughly 70%, affects women in their 70s, arises unifocally through differentiated VIN on lichen sclerosus, and yields keratinising tumours that are p16 negative with aberrant p53. Lichen sclerosus is not itself premalignant, but about 4% of affected women develop carcinoma, which is why a raised or ulcerated area within the white field is biopsied rather than treated as more dermatosis.',
      tests: 'disease',
    },
  ],
};

export default rbpCervixVulvaVaginaPathology;
