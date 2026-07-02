import { hrp1Lecture } from './hrp1-shared';

const l5 = 'L5 — Sex Steroid Hormones';
const l7 = 'L7 — Puberty & Disorders';
const l8 = 'L8 — Female Reproductive Cycle';

export const hrp1EndocrineCycles = [
  hrp1Lecture({
    id: 'hrp1-sex-steroid-synthesis-action',
    title: 'Sex Steroid Synthesis, Transport & Receptor Action',
    source: l5,
    tags: [
      { kind: 'mechanism', label: 'Cholesterol-derived steroidogenesis' },
      { kind: 'exam', label: 'Genomic and nongenomic action' },
    ],
    highYield: [
      'Sex steroids derive from cholesterol through mitochondrial/cytosolic enzyme pathways and are synthesized on demand rather than stored in granules.',
      'Progesterone has 21 carbons, androgens 19, and estrogens 18; tissue enzyme expression determines the final product.',
      'Lipophilic steroids circulate largely bound to SHBG/albumin and act mainly through intracellular receptors regulating transcription.',
      'Peripheral conversion creates active signals: testosterone → DHT by 5α-reductase and → estradiol by aromatase.',
    ],
    chainTitle: 'Cholesterol becomes a tissue-specific steroid and transcriptional signal',
    steps: [
      { label: 'Cholesterol enters steroidogenic mitochondrion' },
      { label: 'StAR and enzymes generate steroid intermediates' },
      { label: 'Peripheral enzymes create DHT or estradiol', emphasis: 'key' },
      { label: 'Steroid–receptor complex regulates genes' },
    ],
    examFindings: [
      { sign: 'Changed total sex steroid with normal free fraction', mechanism: 'SHBG concentration alters the bound circulating pool', significance: 'supportive' },
      { sign: 'Tissue-specific effect despite same testosterone level', mechanism: 'Local 5α-reductase/aromatase expression changes active ligand', significance: 'key' },
    ],
    investigations: [
      { clue: 'Morning total testosterone with SHBG/free estimate when needed', meaning: 'Accounts for diurnal rhythm and binding variation' },
      { clue: 'Steroid precursor/product pattern', meaning: 'Localizes enzyme defects' },
    ],
    treatment: [
      { logic: 'Target synthesis, conversion, receptor, or replacement step', detail: 'The best intervention depends on where steroid signaling is abnormal.' },
    ],
    mnemonic: { hook: '21 progesterone, 19 androgen, 18 estrogen', expansion: ['DHT by 5α-reductase', 'Estradiol by aromatase'] },
    trap: {
      questionCategory: 'Steroid storage',
      wrongInstinct: 'Gonadal steroids are stored in secretory vesicles',
      rightAnswer: 'They are synthesized on demand and diffuse out',
      why: 'Lipophilic steroids cross membranes and cannot be retained efficiently in ordinary granules.',
    },
    quiz: {
      stem: 'Which enzyme converts testosterone to dihydrotestosterone?',
      options: ['Aromatase', '5α-reductase', '21-hydroxylase', 'Desmolase'],
      answer: 1,
      explanation: '5α-reductase produces the more potent androgen DHT in target tissues.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-male-hpg-axis',
    title: 'Male HPG Axis, Leydig & Sertoli Regulation',
    source: l5,
    tags: [
      { kind: 'mechanism', label: 'Pulsatile GnRH–LH/FSH axis' },
      { kind: 'exam', label: 'Primary vs central hypogonadism' },
    ],
    highYield: [
      'Pulsatile GnRH stimulates LH and FSH; continuous GnRH suppresses gonadotropin secretion after initial stimulation.',
      'LH stimulates Leydig testosterone synthesis; FSH plus high intratesticular testosterone supports Sertoli cells and spermatogenesis.',
      'Testosterone/estradiol feed back on hypothalamus/pituitary; Sertoli inhibin B selectively suppresses FSH.',
      'Primary testicular failure causes low testosterone with high LH/FSH; central failure causes low testosterone with low/inappropriately normal gonadotropins.',
    ],
    chainTitle: 'Pulsatile GnRH coordinates androgen production and sperm support',
    steps: [
      { label: 'Hypothalamus releases pulsatile GnRH' },
      { label: 'LH stimulates Leydig testosterone' },
      { label: 'FSH activates Sertoli cells', emphasis: 'key' },
      { label: 'Testosterone/inhibin provide negative feedback' },
    ],
    examFindings: [
      { sign: 'Small firm testes with high LH/FSH', mechanism: 'Primary seminiferous/testicular failure removes feedback', significance: 'key' },
      { sign: 'Low testosterone with low LH after pituitary disease', mechanism: 'Central gonadotropin deficiency', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Two morning testosterone values with LH/FSH', meaning: 'Confirms deficiency and localizes axis level' },
      { clue: 'Semen analysis when fertility matters', meaning: 'Measures reproductive output separately from serum androgen' },
    ],
    treatment: [
      { logic: 'Choose androgen replacement or fertility-preserving gonadotropin therapy', detail: 'Exogenous testosterone treats symptoms but suppresses sperm production.' },
    ],
    mnemonic: { hook: 'LH Leydig, FSH Sertoli', expansion: ['Inhibin selectively inhibits FSH'] },
    trap: {
      questionCategory: 'GnRH delivery',
      wrongInstinct: 'Continuous GnRH maintains normal LH/FSH secretion',
      rightAnswer: 'Pulses stimulate; continuous exposure downregulates the axis',
      why: 'Pituitary GnRH receptors require pulsatile signaling.',
    },
    quiz: {
      stem: 'Which hormone directly stimulates Leydig-cell testosterone synthesis?',
      options: ['FSH', 'LH', 'Inhibin B', 'Prolactin'],
      answer: 1,
      explanation: 'LH activates Leydig-cell steroidogenesis.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-testosterone-dht-estrogen-actions',
    title: 'Testosterone, DHT, Estradiol & Androgen Effects',
    source: l5,
    tags: [
      { kind: 'mechanism', label: 'Androgen conversion and organ effects' },
      { kind: 'exam', label: 'Testosterone vs DHT actions' },
    ],
    highYield: [
      'Testosterone supports Wolffian derivatives, muscle, bone, libido, erythropoiesis, and spermatogenesis.',
      'DHT is essential for external genital/prostate development and contributes to facial/body hair, acne, prostate growth, and scalp hair loss.',
      'Aromatized estradiol is crucial in males for bone maturation, epiphyseal closure, and aspects of feedback.',
      'Most circulating testosterone is protein-bound; free/bioavailable fraction drives target effects.',
    ],
    chainTitle: 'Testosterone is distributed or locally converted to organ-selective ligands',
    steps: [
      { label: 'Leydig cells secrete testosterone' },
      { label: '5α-reductase creates DHT in selected tissues', emphasis: 'key' },
      { label: 'Aromatase creates estradiol' },
      { label: 'Androgen/estrogen receptors regulate target genes' },
    ],
    examFindings: [
      { sign: 'Undervirilized external genitalia with internal male ducts', mechanism: '5α-reductase deficiency reduces DHT but preserves testosterone-mediated Wolffian development', significance: 'key' },
      { sign: 'Low bone density with impaired aromatization', mechanism: 'Estradiol is a major male skeletal sex steroid', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Testosterone, DHT and precursor ratios in selected DSD evaluation', meaning: 'Assesses conversion pathway' },
      { clue: 'Bone density and hematocrit during androgen therapy', meaning: 'Monitors target benefits and adverse effects' },
    ],
    treatment: [
      { logic: 'Match therapy to desired tissue effect', detail: '5α-reductase inhibitors reduce DHT-dependent prostate/hair effects without removing all testosterone actions.' },
    ],
    mnemonic: { hook: 'T builds internal male ducts; DHT builds external genitalia and prostate', expansion: ['Estradiol closes growth plates'] },
    trap: {
      questionCategory: 'Male estrogen',
      wrongInstinct: 'Estradiol has no important physiologic role in males',
      rightAnswer: 'Estradiol is essential for male bone maturation and feedback',
      why: 'Male tissues generate estradiol through aromatization of androgens.',
    },
    quiz: {
      stem: 'Which hormone is most important for male external genital development?',
      options: ['Estradiol', 'DHT', 'Inhibin B', 'Progesterone'],
      answer: 1,
      explanation: 'DHT generated from testosterone drives masculinization of external genitalia and prostate.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-estrogen-progesterone-actions',
    title: 'Estrogen & Progesterone Physiology',
    source: l5,
    tags: [
      { kind: 'mechanism', label: 'Complementary female steroid actions' },
      { kind: 'exam', label: 'Proliferative vs secretory effects' },
    ],
    highYield: [
      'Estradiol is the dominant reproductive-age estrogen; it promotes reproductive-tract growth, endometrial proliferation, ductal breast growth, bone maintenance, and secondary sex traits.',
      'Progesterone converts endometrium to secretory state, reduces myometrial excitability, thickens cervical mucus, and promotes mammary lobuloalveolar development.',
      'Estrogen usually provides negative feedback but sustained high preovulatory estradiol creates positive feedback and LH surge.',
      'Progesterone raises basal body temperature after ovulation and provides strong luteal negative feedback.',
    ],
    chainTitle: 'Estrogen builds the reproductive tract; progesterone prepares and stabilizes it',
    steps: [
      { label: 'Follicular estradiol proliferates endometrium' },
      { label: 'Sustained high estradiol triggers LH surge' },
      { label: 'Corpus luteum produces progesterone', emphasis: 'key' },
      { label: 'Progesterone creates secretory, less-contractile uterus' },
    ],
    examFindings: [
      { sign: 'Thin watery cervical mucus near ovulation', mechanism: 'Estrogen facilitates sperm passage', significance: 'supportive' },
      { sign: 'Postovulatory temperature rise', mechanism: 'Progesterone acts thermogenically', significance: 'key' },
    ],
    investigations: [
      { clue: 'Cycle-timed estradiol/progesterone', meaning: 'Interprets ovarian phase and ovulation' },
      { clue: 'Endometrial response', meaning: 'Reflects integrated steroid exposure' },
    ],
    treatment: [
      { logic: 'Protect endometrium when systemic estrogen acts on an intact uterus', detail: 'Adequate progestogen opposes persistent proliferative stimulation.' },
    ],
    mnemonic: { hook: 'Estrogen expands; progesterone prepares', expansion: ['Ducts vs lobules', 'Proliferative vs secretory'] },
    trap: {
      questionCategory: 'Endometrial protection',
      wrongInstinct: 'Unopposed systemic estrogen is harmless with an intact uterus',
      rightAnswer: 'Chronic unopposed estrogen increases endometrial hyperplasia/cancer risk',
      why: 'Progesterone normally limits and differentiates estrogen-driven proliferation.',
    },
    quiz: {
      stem: 'Which hormone transforms proliferative endometrium into secretory endometrium?',
      options: ['Estradiol', 'Progesterone', 'FSH', 'Oxytocin'],
      answer: 1,
      explanation: 'Luteal progesterone prepares the endometrium for implantation.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-normal-puberty-tanner',
    title: 'Normal Puberty, HPG Reactivation & Tanner Staging',
    source: l7,
    tags: [
      { kind: 'mechanism', label: 'Gonadarche and adrenarche' },
      { kind: 'exam', label: 'Tanner staging and testicular volume' },
    ],
    highYield: [
      'Puberty begins with reactivation of pulsatile GnRH and rising LH/FSH (gonadarche); adrenarche independently raises adrenal androgens and pubic/axillary hair.',
      'Breast development is usually the first sign in girls; testicular enlargement is the first sign in boys.',
      'Tanner staging tracks breast/genital and pubic-hair development; testicular volume helps distinguish central gonadal activation.',
      'Sequence, tempo, growth velocity, bone age, genetics, nutrition, and chronic disease all matter more than one isolated feature.',
    ],
    chainTitle: 'Central pulsatility awakens gonads and accelerates growth and sexual maturation',
    steps: [
      { label: 'GnRH pulses increase during sleep then daytime' },
      { label: 'LH/FSH stimulate gonads' },
      { label: 'Sex steroids produce secondary characteristics', emphasis: 'key' },
      { label: 'Growth spurt and skeletal maturation accelerate' },
    ],
    examFindings: [
      { sign: 'Bilateral testicular enlargement', mechanism: 'Central gonadotropin activation stimulates seminiferous tissue', significance: 'key' },
      { sign: 'Pubic hair without breast/testicular enlargement', mechanism: 'Adrenarche may occur without true central puberty', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Growth chart, Tanner stage and bone age', meaning: 'Assess timing, tempo and skeletal advancement' },
      { clue: 'Basal/stimulated LH with sex steroids', meaning: 'Assesses HPG activation when clinical picture is uncertain' },
    ],
    treatment: [
      { logic: 'Treat timing only when pathologic or harmful', detail: 'Normal variants need reassurance and monitoring; abnormal sequence or rapid progression needs evaluation.' },
    ],
    mnemonic: { hook: 'Girls: breast first; boys: testes first', expansion: ['Hair can be adrenarche, not gonadarche'] },
    trap: {
      questionCategory: 'Puberty onset',
      wrongInstinct: 'Pubic hair alone proves central puberty',
      rightAnswer: 'Pubic hair may reflect adrenarche without HPG-axis activation',
      why: 'Adrenal and gonadal maturation are related but distinct processes.',
    },
    quiz: {
      stem: 'What is usually the first clinical sign of puberty in boys?',
      options: ['Voice change', 'Testicular enlargement', 'Facial hair', 'Peak height velocity'],
      answer: 1,
      explanation: 'Increasing testicular volume is the earliest reliable sign of male gonadarche.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-central-precocious-puberty',
    title: 'Central Precocious Puberty',
    source: l7,
    tags: [
      { kind: 'mechanism', label: 'Early HPG-axis activation' },
      { kind: 'exam', label: 'Pubertal LH response' },
    ],
    highYield: [
      'Central precocious puberty is early but normally sequenced HPG-axis activation, producing gonadal enlargement and sex-steroid effects.',
      'Girls often have idiopathic disease; boys and children with neurologic signs have higher likelihood of CNS pathology.',
      'Growth accelerates initially but advanced bone age can shorten final adult height through early epiphyseal closure.',
      'Pubertal basal or GnRH-stimulated LH supports central activation; brain MRI is selected by age, sex, and clinical context.',
    ],
    chainTitle: 'Early GnRH pulsatility produces an otherwise normal pubertal sequence',
    steps: [
      { label: 'Hypothalamic GnRH activates prematurely' },
      { label: 'LH/FSH become pubertal' },
      { label: 'Gonads enlarge and secrete sex steroids', emphasis: 'key' },
      { label: 'Bone age advances and height potential may fall' },
    ],
    examFindings: [
      { sign: 'Symmetric testicular enlargement in a young boy', mechanism: 'Gonadotropins stimulate both testes in central puberty', significance: 'key' },
      { sign: 'Normal sequence but abnormally early timing', mechanism: 'Central process reproduces physiologic puberty', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Bone age and pubertal LH response', meaning: 'Demonstrate biologic progression and central axis activation' },
      { clue: 'Brain MRI in indicated children', meaning: 'Evaluates hypothalamic/CNS trigger' },
    ],
    treatment: [
      { logic: 'Suppress pulsatile axis when progression threatens height or well-being', detail: 'Long-acting GnRH agonists downregulate pituitary signaling.' },
    ],
    mnemonic: { hook: 'Central = correct sequence, too soon', expansion: ['Bilateral gonadal enlargement', 'Pubertal LH'] },
    trap: {
      questionCategory: 'GnRH therapy',
      wrongInstinct: 'A long-acting GnRH agonist continuously stimulates puberty',
      rightAnswer: 'Continuous exposure downregulates pituitary GnRH receptors',
      why: 'Pulsatile and continuous GnRH have opposite long-term effects.',
    },
    quiz: {
      stem: 'Which finding supports central rather than peripheral precocious puberty?',
      options: ['Suppressed LH', 'Pubertal LH response to GnRH', 'Isolated adrenal androgen excess', 'Unilateral testicular mass'],
      answer: 1,
      explanation: 'A pubertal gonadotropin response demonstrates central HPG-axis activation.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-peripheral-precocious-puberty',
    title: 'Peripheral Precocious Puberty',
    source: l7,
    tags: [
      { kind: 'mechanism', label: 'GnRH-independent sex-steroid exposure' },
      { kind: 'exam', label: 'Discordant sequence and suppressed LH' },
    ],
    highYield: [
      'Peripheral precocious puberty is sex-steroid production independent of central GnRH—adrenal/gonadal disorders, tumors, exogenous exposure, or hCG can cause it.',
      'Sequence may be discordant or contrasexual; gonads may remain small unless locally enlarged by a tumor/cyst.',
      'LH is generally suppressed and lacks a pubertal stimulation response despite elevated sex steroid.',
      'Workup is directed by phenotype: DHEAS/17-hydroxyprogesterone for adrenal causes, hCG, gonadal imaging, and other targeted tests.',
    ],
    chainTitle: 'An external or autonomous steroid source bypasses the HPG axis',
    steps: [
      { label: 'Adrenal/gonadal/exogenous source raises sex steroid' },
      { label: 'Secondary sexual features appear' },
      { label: 'Feedback suppresses GnRH and gonadotropins', emphasis: 'key' },
      { label: 'Sequence becomes discordant and gonads may remain small' },
    ],
    examFindings: [
      { sign: 'Virilization with small testes', mechanism: 'Extragonadal androgen suppresses LH/FSH without stimulating seminiferous growth', significance: 'key' },
      { sign: 'Unilateral testicular enlargement', mechanism: 'Local Leydig-cell lesion produces androgen', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Suppressed LH with high sex steroid', meaning: 'Supports GnRH-independent source' },
      { clue: 'Adrenal precursors, hCG and targeted imaging', meaning: 'Localizes autonomous hormone source' },
    ],
    treatment: [
      { logic: 'Remove or block the peripheral source', detail: 'GnRH agonist alone does not correct autonomous steroid production.' },
    ],
    mnemonic: { hook: 'Peripheral = hormone without HPG permission', expansion: ['High steroid, low LH', 'Often abnormal sequence'] },
    trap: {
      questionCategory: 'Precocious puberty treatment',
      wrongInstinct: 'All cases respond to long-acting GnRH agonist',
      rightAnswer: 'Peripheral disease requires treatment of its steroid source',
      why: 'The hypothalamic–pituitary axis is already suppressed rather than driving the process.',
    },
    quiz: {
      stem: 'A virilized young boy has high testosterone, suppressed LH, and one enlarged testis. What is most likely?',
      options: ['Central precocious puberty', 'Autonomous Leydig-cell source', 'Normal adrenarche only', 'Delayed puberty'],
      answer: 1,
      explanation: 'Unilateral enlargement plus suppressed LH points to a local GnRH-independent androgen source.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-delayed-puberty',
    title: 'Delayed Puberty & Hypogonadism Patterns',
    source: l7,
    tags: [
      { kind: 'mechanism', label: 'Hyper- vs hypogonadotropic delay' },
      { kind: 'exam', label: 'Constitutional delay vs gonadal failure' },
    ],
    highYield: [
      'Delayed puberty may reflect constitutional delay, chronic illness/energy deficit, central hypogonadism, or primary gonadal failure.',
      'Primary gonadal failure causes low sex steroids with high LH/FSH (hypergonadotropic); central causes cause low steroids with low/inappropriately normal LH/FSH.',
      'Constitutional delay usually has delayed bone age, family history, preserved growth potential, and spontaneous progression.',
      'Turner and Klinefelter syndromes are classic primary gonadal-failure causes; anosmia suggests congenital GnRH deficiency.',
    ],
    chainTitle: 'Low sex-steroid output is localized by the gonadotropin response',
    steps: [
      { label: 'Confirm delayed development and growth pattern' },
      { label: 'Measure sex steroid with LH/FSH' },
      { label: 'High gonadotropins → primary gonadal failure', emphasis: 'key' },
      { label: 'Low gonadotropins → central/functional cause' },
    ],
    examFindings: [
      { sign: 'Short girl with webbed neck and absent puberty', mechanism: 'Turner gonadal dysgenesis causes hypergonadotropic hypogonadism', significance: 'key' },
      { sign: 'Delayed bone age and family history of late puberty', mechanism: 'Constitutional delay shifts maturation later', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Growth chart, bone age, LH/FSH and sex steroid', meaning: 'Separates timing variant from primary or central disease' },
      { clue: 'Karyotype or pituitary evaluation when indicated', meaning: 'Defines etiologic diagnosis' },
    ],
    treatment: [
      { logic: 'Treat underlying disease and support age-appropriate maturation', detail: 'Short courses or replacement therapy are individualized to diagnosis, growth, bone health, and fertility goals.' },
    ],
    mnemonic: { hook: 'Low gonadal hormone: high driver = gonad, low driver = central', expansion: ['Bone age helps spot constitutional delay'] },
    trap: {
      questionCategory: 'Delayed puberty',
      wrongInstinct: 'All low LH/FSH results indicate permanent pituitary disease',
      rightAnswer: 'Functional suppression and constitutional delay can also lower gonadotropins',
      why: 'Nutrition, chronic illness, exercise, and maturation timing influence the axis.',
    },
    quiz: {
      stem: 'Low estradiol with markedly elevated FSH indicates which pattern?',
      options: ['Primary ovarian failure', 'Central hypogonadism', 'Normal luteal phase', 'Pregnancy'],
      answer: 0,
      explanation: 'High gonadotropins show that the pituitary is responding to primary gonadal failure.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-ovarian-steroid-two-cell-model',
    title: 'Ovarian Steroids & Two-cell–Two-gonadotropin Model',
    source: l8,
    tags: [
      { kind: 'mechanism', label: 'Theca androgen–granulosa estrogen coupling' },
      { kind: 'exam', label: 'LH vs FSH ovarian targets' },
    ],
    highYield: [
      'LH stimulates theca interna to synthesize androgen from cholesterol; theca lacks sufficient aromatase.',
      'Androgen diffuses into granulosa cells, where FSH stimulates aromatase and estradiol synthesis.',
      'Before ovulation granulosa cells gain LH receptors; after luteinization both granulosa and theca lutein cells produce progesterone/steroids.',
      'Inhibin suppresses FSH; activin promotes FSH-related effects.',
    ],
    chainTitle: 'Two ovarian cell types cooperate to make estradiol',
    steps: [
      { label: 'LH drives theca androgen synthesis' },
      { label: 'Androgen crosses basement membrane' },
      { label: 'FSH drives granulosa aromatase', emphasis: 'key' },
      { label: 'Estradiol enters follicle and circulation' },
    ],
    examFindings: [
      { sign: 'Androgen substrate from vascular theca', mechanism: 'Theca responds to LH outside avascular granulosa layer', significance: 'supportive' },
      { sign: 'Rising estradiol with follicular growth', mechanism: 'Increasing granulosa mass/aromatase converts theca androgen', significance: 'key' },
    ],
    investigations: [
      { clue: 'FSH/LH and estradiol in cycle context', meaning: 'Reflects coordinated follicular function' },
      { clue: 'AMH/antral follicles', meaning: 'Estimate ovarian reserve rather than current estradiol synthesis alone' },
    ],
    treatment: [
      { logic: 'Use gonadotropin physiology during ovulation induction', detail: 'Follicle recruitment and steroid production require careful monitoring to avoid multiple gestation or hyperstimulation.' },
    ],
    mnemonic: { hook: 'LH to theca, FSH to granulosa', expansion: ['Theca makes androgen; granulosa aromatizes'] },
    trap: {
      questionCategory: 'Ovarian estrogen synthesis',
      wrongInstinct: 'Granulosa cells make all androgen substrate de novo under LH alone',
      rightAnswer: 'Theca supplies androgen; FSH-stimulated granulosa aromatizes it',
      why: 'The cooperative two-cell model distributes key enzymes between cell types.',
    },
    quiz: {
      stem: 'Which ovarian cell uses FSH-stimulated aromatase?',
      options: ['Theca externa', 'Granulosa cell', 'Oocyte', 'Pericyte'],
      answer: 1,
      explanation: 'Granulosa cells convert theca-derived androgens to estrogens.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-cycle-feedback-gonadotropins',
    title: 'GnRH, FSH/LH Feedback & the Midcycle Surge',
    source: l8,
    tags: [
      { kind: 'mechanism', label: 'Negative-to-positive feedback switch' },
      { kind: 'exam', label: 'Estradiol-triggered LH surge' },
    ],
    highYield: [
      'Early follicular loss of luteal steroids permits FSH rise and follicle recruitment; estradiol/inhibin then reduce FSH, selecting a dominant follicle.',
      'Most of cycle, estradiol provides negative feedback. Sustained high estradiol from dominant follicle switches to positive feedback.',
      'LH surge completes oocyte meiosis I, induces follicular rupture, and initiates luteinization; a smaller FSH surge accompanies it.',
      'Luteal progesterone, estradiol, and inhibin suppress gonadotropins until corpus-luteum regression.',
    ],
    chainTitle: 'Dominant-follicle estradiol flips feedback and triggers ovulation',
    steps: [
      { label: 'FSH recruits follicles' },
      { label: 'Dominant follicle raises estradiol/inhibin' },
      { label: 'Sustained high estradiol triggers LH surge', emphasis: 'key' },
      { label: 'Ovulation and luteal negative feedback follow' },
    ],
    examFindings: [
      { sign: 'Urinary LH rise before ovulation', mechanism: 'Positive estradiol feedback creates midcycle surge', significance: 'key' },
      { sign: 'FSH falls while dominant follicle grows', mechanism: 'Estradiol/inhibin suppress FSH, eliminating less sensitive follicles', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Urinary LH kit', meaning: 'Predicts impending ovulation rather than proving follicle rupture' },
      { clue: 'Serial ultrasound and hormones in assisted reproduction', meaning: 'Tracks follicular response and ovulation timing' },
    ],
    treatment: [
      { logic: 'Prevent ovulation by suppressing the surge', detail: 'Combined hormonal contraception maintains feedback that prevents normal follicular maturation/LH surge.' },
    ],
    mnemonic: { hook: 'High estradiol held high flips the sign', expansion: ['Negative most days; positive at midcycle'] },
    trap: {
      questionCategory: 'Estrogen feedback',
      wrongInstinct: 'Estrogen always suppresses LH',
      rightAnswer: 'Sustained high estradiol produces positive feedback and LH surge',
      why: 'Magnitude and duration determine feedback direction.',
    },
    quiz: {
      stem: 'What directly triggers the midcycle LH surge?',
      options: ['Falling progesterone', 'Sustained high estradiol', 'Low inhibin only', 'Rising prolactin'],
      answer: 1,
      explanation: 'Sustained high estradiol from the dominant follicle switches to positive feedback.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-ovarian-cycle-ovulation',
    title: 'Follicular, Ovulatory & Luteal Phases',
    source: l8,
    tags: [
      { kind: 'mechanism', label: 'Ovarian-cycle sequence' },
      { kind: 'exam', label: 'Corpus luteum and progesterone' },
    ],
    highYield: [
      'Follicular phase length varies and is estrogen-dominant; luteal phase is more consistent and progesterone-dominant.',
      'LH surge drives proteolysis, prostaglandins, wall weakening, oocyte maturation, and ovulation.',
      'Corpus luteum secretes progesterone, estradiol, and inhibin A; without hCG it regresses after about two weeks.',
      'hCG from implantation rescues corpus luteum until placental steroidogenesis becomes adequate.',
    ],
    chainTitle: 'Follicle growth culminates in ovulation and a temporary endocrine gland',
    steps: [
      { label: 'Dominant follicle matures during follicular phase' },
      { label: 'LH surge releases secondary oocyte', emphasis: 'key' },
      { label: 'Ruptured follicle luteinizes' },
      { label: 'Progesterone sustains implantation-ready endometrium' },
    ],
    examFindings: [
      { sign: 'Mittelschmerz near midcycle', mechanism: 'Follicular rupture can cause brief unilateral pain', significance: 'supportive' },
      { sign: 'Postovulatory basal temperature increase', mechanism: 'Corpus-luteum progesterone is thermogenic', significance: 'key' },
    ],
    investigations: [
      { clue: 'Mid-luteal progesterone', meaning: 'Supports recent ovulation' },
      { clue: 'Ultrasound follicle collapse/corpus luteum', meaning: 'Visual evidence of ovulatory transition' },
    ],
    treatment: [
      { logic: 'Time fertility interventions to the ovulatory window', detail: 'LH testing predicts ovulation; progesterone confirms it retrospectively.' },
    ],
    mnemonic: { hook: 'Follicle makes estrogen; luteum makes progesterone', expansion: ['LH turns one into the other'] },
    trap: {
      questionCategory: 'Cycle timing',
      wrongInstinct: 'Luteal phase varies more than follicular phase',
      rightAnswer: 'Follicular phase accounts for most cycle-length variation',
      why: 'Corpus-luteum lifespan is relatively consistent without pregnancy.',
    },
    quiz: {
      stem: 'Which ovarian structure is the main progesterone source after ovulation?',
      options: ['Primordial follicle', 'Corpus luteum', 'Theca externa', 'Corpus albicans'],
      answer: 1,
      explanation: 'Luteinized granulosa/theca cells in corpus luteum produce progesterone.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-uterine-cycle-fertility-signs',
    title: 'Uterine Cycle, Ovulation Signs & Hormonal Contraception',
    source: l8,
    tags: [
      { kind: 'mechanism', label: 'Endometrial-cycle integration' },
      { kind: 'exam', label: 'Cervical mucus, BBT and LH testing' },
    ],
    highYield: [
      'Estrogen rebuilds proliferative endometrium and makes cervical mucus thin/stretchy; progesterone produces secretory endometrium and thick mucus.',
      'Withdrawal of luteal progesterone/estrogen causes spiral-artery instability, tissue breakdown, and menstruation.',
      'Urinary LH predicts ovulation; basal temperature rises after ovulation; cervical mucus becomes spinnbarkeit/ferning near ovulation.',
      'Combined hormonal contraception suppresses FSH/LH and ovulation; progestin also thickens cervical mucus and alters endometrium.',
    ],
    chainTitle: 'Ovarian hormones synchronize endometrium, cervix, and fertility signals',
    steps: [
      { label: 'Estrogen produces proliferation and fertile mucus' },
      { label: 'LH surge predicts ovulation' },
      { label: 'Progesterone creates secretory endometrium and temperature rise', emphasis: 'key' },
      { label: 'Steroid withdrawal initiates menstruation' },
    ],
    examFindings: [
      { sign: 'Ferning, stretchy cervical mucus', mechanism: 'Estrogen-rich preovulatory state increases salt/water content', significance: 'supportive' },
      { sign: 'Sustained BBT rise', mechanism: 'Confirms progesterone exposure after ovulation', significance: 'key' },
    ],
    investigations: [
      { clue: 'Urinary LH', meaning: 'Forecasts surge but may not prove ovulation in every disorder' },
      { clue: 'Progesterone or ultrasound', meaning: 'More directly confirms luteal/ovulatory transition' },
    ],
    treatment: [
      { logic: 'Use different contraceptive mechanisms together', detail: 'Ovulation suppression, mucus thickening, and endometrial change provide layered efficacy.' },
    ],
    mnemonic: { hook: 'Estrogen: thin mucus; progesterone: thick mucus and hot body', expansion: ['LH predicts; BBT confirms'] },
    trap: {
      questionCategory: 'Ovulation testing',
      wrongInstinct: 'A positive LH kit proves successful ovulation',
      rightAnswer: 'It predicts a surge; follicle rupture may still fail',
      why: 'LH signaling can occur without actual oocyte release.',
    },
    quiz: {
      stem: 'Which change occurs after ovulation under progesterone?',
      options: ['Lower basal body temperature', 'Thicker cervical mucus', 'Endometrial proliferation only', 'LH surge initiation'],
      answer: 1,
      explanation: 'Progesterone thickens cervical mucus and raises basal body temperature.',
    },
  }),
];
