import { hrp1Lecture } from './hrp1-shared';

const l10 = 'L10 — Gestational Hormones';
const l11 = 'L11 — Lactation & Breastfeeding';
const l12 = 'L12 — Menopause';

export const hrp1GestationLactationMenopause = [
  hrp1Lecture({
    id: 'hrp1-placenta-endocrine-hcg',
    title: 'Placenta as an Endocrine Organ & hCG',
    source: l10,
    tags: [
      { kind: 'mechanism', label: 'Syncytiotrophoblast hormone secretion' },
      { kind: 'exam', label: 'Corpus-luteum rescue and pregnancy testing' },
    ],
    highYield: [
      '**Syncytiotrophoblast is the major placental endocrine tissue**, secreting hCG, progesterone, estrogens, hPL, placental GH, and CRH-related signals.',
      'hCG is a glycoprotein sharing an alpha subunit with LH/FSH/TSH; **its beta subunit provides assay specificity**.',
      'hCG binds LH receptors to rescue corpus luteum and maintain early progesterone until placental production is sufficient.',
      'hCG rises rapidly early, peaks near the end of first trimester, then declines to a plateau; abnormal patterns are interpreted with ultrasound and clinical context.',
    ],
    chainTitle: 'Implanting trophoblast signals maternal ovary to preserve the endometrium',
    steps: [
      { label: 'Syncytiotrophoblast begins hCG secretion' },
      { label: 'hCG enters maternal blood and urine' },
      { label: 'hCG stimulates luteal LH receptors', emphasis: 'key' },
      { label: 'Corpus luteum continues progesterone support' },
    ],
    examFindings: [
      { sign: 'Positive pregnancy test before ultrasound visibility', mechanism: 'hCG secretion begins soon after implantation', significance: 'supportive' },
      { sign: 'Abnormal hCG trend with pain/bleeding', mechanism: 'Pregnancy location or viability may be abnormal', significance: 'key' },
    ],
    investigations: [
      { clue: 'Serial quantitative hCG with transvaginal ultrasound', meaning: 'Assesses early pregnancy trajectory and location' },
      { clue: 'Urine hCG', meaning: 'Convenient qualitative detection but less informative than serial serum values' },
    ],
    treatment: [
      { logic: 'Never interpret one hCG value in isolation when location is unknown', detail: 'Trend, symptoms, gestational timing, and ultrasound determine urgency.' },
    ],
    mnemonic: { hook: 'hCG holds the corpus luteum', expansion: ['Made by syncytiotrophoblast', 'Detected in blood and urine'] },
    trap: {
      questionCategory: 'Pregnancy diagnosis',
      wrongInstinct: 'A positive hCG proves an intrauterine pregnancy',
      rightAnswer: 'It proves trophoblastic hormone production, not pregnancy location',
      why: 'Ectopic pregnancy and trophoblastic disease can also produce hCG.',
    },
    quiz: {
      stem: 'What is the principal early-pregnancy action of hCG?',
      options: ['Induce lactation', 'Maintain the corpus luteum', 'Trigger fetal breathing', 'Suppress placental growth'],
      answer: 1,
      explanation: 'hCG stimulates luteal LH receptors so progesterone production continues.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-gestational-progesterone-estrogen',
    title: 'Placental Progesterone, Estrogens & Fetal–Placental Unit',
    source: l10,
    tags: [
      { kind: 'mechanism', label: 'Placental steroidogenesis' },
      { kind: 'exam', label: 'Fetal adrenal estrogen precursors' },
    ],
    highYield: [
      'Placenta uses **maternal cholesterol to make progesterone** but lacks key enzymes for complete de novo androgen synthesis.',
      'Placental estrogen production depends on **fetal/maternal androgen precursors—especially fetal adrenal DHEA-S—creating a fetal–placental unit**.',
      'Progesterone maintains decidua, supports immune tolerance, reduces myometrial excitability, and prepares breast lobuloalveolar tissue.',
      'Estrogens drive uterine growth, blood flow, breast ductal development, and later increase myometrial/oxytocin responsiveness.',
    ],
    chainTitle: 'Maternal substrate and fetal precursors let placenta sustain pregnancy steroids',
    steps: [
      { label: 'Maternal cholesterol enters placenta' },
      { label: 'Placenta synthesizes progesterone' },
      { label: 'Fetal adrenal supplies DHEA-S precursor', emphasis: 'key' },
      { label: 'Placental aromatase produces estrogens' },
    ],
    examFindings: [
      { sign: 'Uterine quiescence through most pregnancy', mechanism: 'Progesterone reduces contractile signaling', significance: 'key' },
      { sign: 'Progressive uterine/breast growth', mechanism: 'High gestational estrogen and progesterone remodel reproductive tissues', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Gestational context of steroid levels', meaning: 'Placental production changes normal reference patterns' },
      { clue: 'Fetal/placental assessment when estriol pathway is abnormal', meaning: 'Reflects the integrated fetal–placental unit rather than placenta alone' },
    ],
    treatment: [
      { logic: 'Think of pregnancy steroid production as a multi-organ unit', detail: 'Maternal, placental, and fetal disease can each alter the same measured hormone.' },
    ],
    mnemonic: { hook: 'Placenta makes progesterone; fetus helps make estrogen', expansion: ['Fetal adrenal DHEA-S → placental estrogen'] },
    trap: {
      questionCategory: 'Placental estrogen',
      wrongInstinct: 'Placenta makes all estrogen precursors independently',
      rightAnswer: 'It relies heavily on fetal/maternal androgen precursors',
      why: 'Placenta lacks sufficient CYP17 activity for full precursor synthesis.',
    },
    quiz: {
      stem: 'Which fetal tissue supplies major precursors for placental estrogen synthesis?',
      options: ['Fetal adrenal cortex', 'Fetal thyroid', 'Fetal lung', 'Fetal kidney only'],
      answer: 0,
      explanation: 'Fetal adrenal DHEA-S is aromatized by placenta to gestational estrogens.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-hpl-placental-gh-crh',
    title: 'hPL, Placental GH, CRH & Maternal Metabolic Adaptation',
    source: l10,
    tags: [
      { kind: 'mechanism', label: 'Diabetogenic adaptation of pregnancy' },
      { kind: 'exam', label: 'Maternal insulin resistance and fetal fuel' },
    ],
    highYield: [
      'hPL rises with placental mass, supports mammary development, promotes lipolysis, and contributes to **maternal insulin resistance** so glucose remains available to fetus.',
      '**Placental GH progressively replaces maternal pituitary GH** and shifts maternal IGF-1/metabolism.',
      'Pregnancy increases beta-cell insulin output to compensate; failure of compensation produces gestational diabetes.',
      'Placental CRH rises toward term and participates in fetal HPA maturation and timing pathways for parturition.',
    ],
    chainTitle: 'Placental hormones redirect maternal fuel toward fetal growth',
    steps: [
      { label: 'hPL/placental GH rise with gestation' },
      { label: 'Maternal lipolysis and insulin resistance increase', emphasis: 'key' },
      { label: 'Maternal beta cells compensate with more insulin' },
      { label: 'Glucose and nutrients remain available to fetus' },
    ],
    examFindings: [
      { sign: 'Higher insulin requirement later in pregnancy', mechanism: 'Placental hormones progressively increase insulin resistance', significance: 'key' },
      { sign: 'Maternal fasting lipid use with postprandial glucose availability', mechanism: 'Fuel partitioning favors fetal transfer', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Pregnancy-timed glucose screening', meaning: 'Detects failure of metabolic compensation' },
      { clue: 'Fetal growth monitoring in maternal dysglycemia', meaning: 'Assesses downstream nutrient effects' },
    ],
    treatment: [
      { logic: 'Control maternal glucose without starving fetal–maternal nutrition', detail: 'Nutrition, activity, monitoring, and medication are balanced to pregnancy targets.' },
    ],
    mnemonic: { hook: 'hPL makes maternal metabolism feed the fetus', expansion: ['Lipolysis up', 'Insulin resistance up', 'Glucose spared'] },
    trap: {
      questionCategory: 'Pregnancy insulin resistance',
      wrongInstinct: 'Insulin resistance always means maternal insulin levels fall',
      rightAnswer: 'Normal pregnancy compensates with increased insulin secretion',
      why: 'GDM emerges when beta-cell compensation is insufficient.',
    },
    quiz: {
      stem: 'Which placental hormone strongly contributes to maternal insulin resistance?',
      options: ['hPL', 'FSH', 'ADH', 'Calcitonin'],
      answer: 0,
      explanation: 'Human placental lactogen helps shift maternal metabolism to preserve nutrients for fetus.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-mammary-development-lactogenesis',
    title: 'Mammary Development & Lactogenesis',
    source: l11,
    tags: [
      { kind: 'mechanism', label: 'Hormonal preparation for milk production' },
      { kind: 'exam', label: 'Secretory activation after delivery' },
    ],
    highYield: [
      '**Estrogen promotes ductal growth; progesterone promotes lobuloalveolar development**; prolactin, GH, insulin, cortisol, and thyroid hormone support differentiation.',
      'High estrogen/progesterone during pregnancy permit breast growth but **inhibit full milk secretion despite high prolactin**.',
      'Placental delivery abruptly lowers estrogen/progesterone, releasing prolactin-driven secretory activation (lactogenesis II).',
      'Frequent milk removal maintains production through prolactin signaling and local feedback.',
    ],
    chainTitle: 'Placental steroid withdrawal unlocks prolactin-driven milk synthesis',
    steps: [
      { label: 'Pregnancy builds ducts and alveoli' },
      { label: 'High steroids restrain full secretion' },
      { label: 'Placenta delivers and steroid levels fall', emphasis: 'key' },
      { label: 'Prolactin initiates copious milk production' },
    ],
    examFindings: [
      { sign: 'Delayed milk production after retained placenta', mechanism: 'Persistent placental steroids can delay secretory activation', significance: 'supportive' },
      { sign: 'Failure to lactate after postpartum pituitary injury', mechanism: 'Prolactin deficiency prevents milk synthesis', significance: 'key' },
    ],
    investigations: [
      { clue: 'Feeding history, breast exam and infant weight/output', meaning: 'Assess effective milk production and transfer' },
      { clue: 'Endocrine testing when clinically indicated', meaning: 'Evaluates prolactin, thyroid, or pituitary causes of true low supply' },
    ],
    treatment: [
      { logic: 'Improve early effective milk removal and treat reversible causes', detail: 'Supply is maintained by demand, so latch and transfer matter before assuming hormonal failure.' },
    ],
    mnemonic: { hook: 'Estrogen ducts, progesterone lobules, prolactin produces', expansion: ['Delivery drops steroids and starts volume'] },
    trap: {
      questionCategory: 'Pregnancy lactation',
      wrongInstinct: 'High prolactin during pregnancy causes full-volume milk secretion',
      rightAnswer: 'High estrogen/progesterone restrain full secretion until delivery',
      why: 'Placental steroid withdrawal is a key trigger for lactogenesis II.',
    },
    quiz: {
      stem: 'What hormonal change after placental delivery permits copious milk production?',
      options: ['Rise in progesterone', 'Fall in estrogen and progesterone', 'Fall in prolactin', 'Rise in FSH'],
      answer: 1,
      explanation: 'Withdrawal of placental steroids releases prolactin-driven secretory activation.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-suckling-prolactin-oxytocin',
    title: 'Suckling Reflex, Prolactin & Oxytocin',
    source: l11,
    tags: [
      { kind: 'mechanism', label: 'Milk production and ejection reflexes' },
      { kind: 'exam', label: 'Dopamine suppression and let-down' },
    ],
    highYield: [
      '**Nipple stimulation reduces hypothalamic dopamine** and produces prolactin pulses for milk synthesis.',
      'The same afferent input **activates oxytocin release, contracting myoepithelial cells and ejecting stored milk**.',
      'Prolactin suppresses GnRH and can cause lactational amenorrhea, but contraceptive reliability depends on strict clinical criteria.',
      'Stress/pain can inhibit oxytocin and milk ejection even when milk synthesis is adequate.',
    ],
    chainTitle: 'One sensory input drives separate production and ejection outputs',
    steps: [
      { label: 'Infant suckles nipple/areola' },
      { label: 'Dopamine falls and prolactin rises' },
      { label: 'Oxytocin contracts myoepithelial cells', emphasis: 'key' },
      { label: 'Milk removal reinforces ongoing supply' },
    ],
    examFindings: [
      { sign: 'Breast feels full but infant transfers little milk during stress', mechanism: 'Oxytocin let-down may be inhibited despite production', significance: 'supportive' },
      { sign: 'Amenorrhea during exclusive frequent breastfeeding', mechanism: 'Prolactin suppresses pulsatile GnRH', significance: 'key' },
    ],
    investigations: [
      { clue: 'Observed feed and pre/post-feed assessment when needed', meaning: 'Distinguishes production from transfer/ejection problem' },
      { clue: 'Pregnancy testing for unexpected amenorrhea changes', meaning: 'Lactational amenorrhea is not universally reliable contraception' },
    ],
    treatment: [
      { logic: 'Support both effective stimulation and milk transfer', detail: 'Comfort, positioning, latch, frequent feeding, and addressing pain improve reflexes.' },
    ],
    mnemonic: { hook: 'Prolactin produces; oxytocin pushes', expansion: ['Suckling triggers both'] },
    trap: {
      questionCategory: 'Milk let-down',
      wrongInstinct: 'Prolactin directly contracts myoepithelial cells',
      rightAnswer: 'Oxytocin causes ejection; prolactin supports synthesis',
      why: 'The reflex has two parallel hormonal outputs.',
    },
    quiz: {
      stem: 'Which hormone directly causes milk ejection?',
      options: ['Prolactin', 'Oxytocin', 'Progesterone', 'FSH'],
      answer: 1,
      explanation: 'Oxytocin contracts the myoepithelial basket around mammary alveoli.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-human-milk-composition-benefits',
    title: 'Human Milk Composition, Maternal Adaptation & Benefits',
    source: l11,
    tags: [
      { kind: 'mechanism', label: 'Dynamic nutrition and immune protection' },
      { kind: 'exam', label: 'Colostrum vs mature milk' },
    ],
    highYield: [
      '**Colostrum is lower-volume and rich in immune proteins/cells**; transitional and mature milk change with postpartum time and within each feed.',
      'Human milk supplies **lactose, fat, proteins, micronutrients, oligosaccharides, IgA, lactoferrin, leukocytes, and other antimicrobial factors**.',
      'Milk synthesis requires maternal energy, water, glucose, amino acids, and lipids; lactation shifts maternal metabolism to sustain output.',
      'Breastfeeding supports infant nutrition/immune protection and maternal postpartum benefits, while individual contraindications or feeding difficulties require nonjudgmental support.',
    ],
    chainTitle: 'Maternal nutrients become a changing food and immune system',
    steps: [
      { label: 'Mammary cells transport and synthesize milk components' },
      { label: 'Colostrum delivers concentrated immune factors' },
      { label: 'Mature milk adapts across feed and lactation', emphasis: 'key' },
      { label: 'Infant receives nutrition, hydration, and mucosal protection' },
    ],
    examFindings: [
      { sign: 'Small volumes of thick yellow early milk', mechanism: 'Colostrum is concentrated in proteins and immune factors', significance: 'supportive' },
      { sign: 'Infant dehydration/poor weight gain', mechanism: 'Effective transfer may be inadequate despite apparent feeding frequency', significance: 'key' },
    ],
    investigations: [
      { clue: 'Infant weight trajectory and urine/stool output', meaning: 'Practical measures of intake adequacy' },
      { clue: 'Maternal/infant clinical assessment', meaning: 'Identifies latch, anatomy, illness, or supply problems' },
    ],
    treatment: [
      { logic: 'Prioritize infant safety and supported feeding goals', detail: 'Lactation support, expressed milk, supplementation, or alternatives are individualized without blame.' },
    ],
    mnemonic: { hook: 'Colostrum concentrates protection', expansion: ['Mature milk changes with time and demand'] },
    trap: {
      questionCategory: 'Milk adequacy',
      wrongInstinct: 'Frequent time at breast always proves adequate intake',
      rightAnswer: 'Weight and output assess effective transfer',
      why: 'Feeding effort can be high when latch or transfer is poor.',
    },
    quiz: {
      stem: 'Which immunoglobulin is especially prominent in human milk mucosal protection?',
      options: ['IgA', 'IgE', 'IgD', 'IgM only'],
      answer: 0,
      explanation: 'Secretory IgA helps protect infant mucosal surfaces.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-menopause-axis-definition',
    title: 'Menopause Definition & Ovarian-Axis Changes',
    source: l12,
    tags: [
      { kind: 'mechanism', label: 'Follicle depletion and hypergonadotropic state' },
      { kind: 'exam', label: 'Twelve months of amenorrhea' },
    ],
    highYield: [
      'Natural menopause is diagnosed retrospectively after **12 months of amenorrhea without another cause**; perimenopause is the preceding transition.',
      '**Follicle depletion lowers inhibin B and estradiol, causing FSH (then LH) to rise** and cycles to become irregular/anovulatory.',
      'Estrone from peripheral aromatization becomes the predominant estrogen after menopause.',
      'Premature or iatrogenic ovarian insufficiency differs from expected age-related menopause and warrants etiologic and long-term risk assessment.',
    ],
    chainTitle: 'Follicle depletion removes ovarian feedback and ends cyclic ovulation',
    steps: [
      { label: 'Ovarian follicle pool falls' },
      { label: 'Inhibin/estradiol feedback declines' },
      { label: 'FSH rises and cycles become irregular', emphasis: 'key' },
      { label: 'Persistent amenorrhea establishes menopause' },
    ],
    examFindings: [
      { sign: 'Irregular cycles followed by 12 months amenorrhea', mechanism: 'Progressive ovarian follicle failure', significance: 'key' },
      { sign: 'High FSH with low estradiol', mechanism: 'Hypergonadotropic ovarian failure pattern', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Clinical diagnosis in typical age/symptoms', meaning: 'Routine hormone confirmation is often unnecessary' },
      { clue: 'Pregnancy, thyroid, prolactin or other tests when atypical', meaning: 'Excludes alternate causes of amenorrhea' },
    ],
    treatment: [
      { logic: 'Differentiate natural transition from premature/pathologic ovarian failure', detail: 'Age changes bone, cardiovascular, fertility, and replacement considerations.' },
    ],
    mnemonic: { hook: 'No follicles → low feedback → high FSH', expansion: ['12 months amenorrhea defines natural menopause'] },
    trap: {
      questionCategory: 'Menopause diagnosis',
      wrongInstinct: 'One high FSH value alone defines natural menopause',
      rightAnswer: 'In typical cases it is a retrospective clinical diagnosis after 12 months amenorrhea',
      why: 'FSH fluctuates substantially during transition.',
    },
    quiz: {
      stem: 'Natural menopause is clinically defined after how long without menstruation?',
      options: ['3 months', '6 months', '12 months', '24 months'],
      answer: 2,
      explanation: 'Twelve months of amenorrhea without another cause defines natural menopause.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-menopause-symptoms-health-effects',
    title: 'Vasomotor, Genitourinary & Long-term Menopause Effects',
    source: l12,
    tags: [
      { kind: 'mechanism', label: 'Estrogen-withdrawal physiology' },
      { kind: 'exam', label: 'Hot flashes, GSM and bone loss' },
    ],
    highYield: [
      'Vasomotor symptoms reflect **narrowed hypothalamic thermoneutral zone**, producing episodic vasodilation and sweating.',
      '**Genitourinary syndrome of menopause includes dryness, dyspareunia, urinary symptoms, and thin less-acidic epithelium** from estrogen deficiency.',
      'Bone resorption accelerates as estrogen restraint on osteoclast pathways falls; fracture risk depends on age and other factors.',
      'Sleep, mood, cognition, sexual function, and cardiometabolic risk are multifactorial—do not attribute every symptom to menopause automatically.',
    ],
    chainTitle: 'Estrogen decline changes thermoregulation, mucosa, and skeletal remodeling',
    steps: [
      { label: 'Ovarian estrogen output falls' },
      { label: 'Thermoneutral zone narrows' },
      { label: 'Genitourinary epithelium thins and pH rises' },
      { label: 'Bone resorption exceeds formation', emphasis: 'key' },
    ],
    examFindings: [
      { sign: 'Hot flash with flushing and sweating', mechanism: 'Transient heat-loss response from thermoregulatory instability', significance: 'key' },
      { sign: 'Pale thin vaginal mucosa with dryness', mechanism: 'Low estrogen reduces epithelial maturation/glycogen', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Bone-risk assessment and DXA when indicated', meaning: 'Quantifies skeletal consequences' },
      { clue: 'Symptom-focused differential evaluation', meaning: 'Excludes thyroid disease, infection, medication effects, and other causes' },
    ],
    treatment: [
      { logic: 'Treat the dominant symptom and long-term risk separately', detail: 'Vasomotor symptoms, local genitourinary symptoms, and osteoporosis may need different therapies.' },
    ],
    mnemonic: { hook: 'Heat, dryness, bone loss', expansion: ['Three classic estrogen-withdrawal domains'] },
    trap: {
      questionCategory: 'Menopause symptoms',
      wrongInstinct: 'Every symptom in midlife is caused by estrogen deficiency',
      rightAnswer: 'Use a differential diagnosis and symptom-specific evaluation',
      why: 'Menopause overlaps with common endocrine, psychiatric, cardiovascular, and medication-related conditions.',
    },
    quiz: {
      stem: 'Which long-term process accelerates after menopause?',
      options: ['Bone formation greatly exceeds resorption', 'Bone resorption increases', 'FSH falls to childhood levels', 'Vaginal glycogen always rises'],
      answer: 1,
      explanation: 'Loss of estrogen increases osteoclast-mediated bone resorption.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-menopause-therapy',
    title: 'Menopause Symptom Treatment & Hormone-Therapy Logic',
    source: l12,
    tags: [
      { kind: 'treatment', label: 'Individualized hormone and nonhormone therapy' },
      { kind: 'exam', label: 'Endometrial protection' },
    ],
    highYield: [
      '**Systemic menopausal hormone therapy is highly effective for vasomotor symptoms** in appropriately selected patients; risks depend on age, timing, route, dose, and medical history.',
      'A patient with an intact uterus generally needs **progestogen with systemic estrogen to prevent endometrial hyperplasia**; estrogen alone is used after hysterectomy when otherwise appropriate.',
      'Low-dose local vaginal estrogen or other local therapies can target genitourinary symptoms with far less systemic exposure.',
      'Nonhormonal options, lifestyle measures, bone-health prevention, and shared decision-making matter when hormone therapy is unsuitable or undesired.',
    ],
    chainTitle: 'Therapy matches symptom location, uterine status, and individual risk',
    steps: [
      { label: 'Define vasomotor, local genitourinary, bone, or other target' },
      { label: 'Assess uterus and contraindication/risk profile' },
      { label: 'Choose systemic, local, or nonhormonal therapy', emphasis: 'key' },
      { label: 'Reassess benefit, adverse effects, and ongoing need' },
    ],
    examFindings: [
      { sign: 'Postmenopausal bleeding', mechanism: 'Requires evaluation rather than assumption of benign hormonal change', significance: 'key' },
      { sign: 'Isolated vaginal dryness without vasomotor symptoms', mechanism: 'A local treatment may address the affected tissue directly', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Individual breast, thrombotic, cardiovascular, hepatic and bleeding history', meaning: 'Shapes hormone-therapy safety' },
      { clue: 'Evaluation of any postmenopausal bleeding', meaning: 'Excludes endometrial pathology' },
    ],
    treatment: [
      { logic: 'Use the lowest effective, individualized approach with periodic review', detail: 'There is no single regimen or automatic stop date suitable for everyone.' },
    ],
    mnemonic: { hook: 'Systemic estrogen + uterus needs protection', expansion: ['Local symptoms can use local therapy'] },
    trap: {
      questionCategory: 'Menopause hormone therapy',
      wrongInstinct: 'Systemic estrogen alone is routinely safe with an intact uterus',
      rightAnswer: 'Progestogen is generally needed for endometrial protection',
      why: 'Unopposed estrogen stimulates endometrial proliferation.',
    },
    quiz: {
      stem: 'Why is progestogen added to systemic estrogen in most patients with an intact uterus?',
      options: ['To raise FSH', 'To protect the endometrium', 'To stimulate ovulation', 'To increase hCG'],
      answer: 1,
      explanation: 'Progestogen opposes estrogen-driven endometrial proliferation.',
    },
  }),
];
