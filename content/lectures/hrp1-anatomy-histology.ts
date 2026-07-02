import { hrp1Lecture } from './hrp1-shared';

const l1 = 'L1 — Gross Anatomy of Female Reproductive System';
const l2 = 'L2 — Histology of the Female Reproductive System';
const l3 = 'L3 — Anatomy of Breast & Placenta';
const l4 = 'L4 — Gross Anatomy of Male Reproductive System';
const l6 = 'L6 — Histology of the Male Reproductive System';
const l9 = 'L9 — Anatomy of Pelvic & Urogenital Diaphragm';

export const hrp1AnatomyHistology = [
  hrp1Lecture({
    id: 'hrp1-female-pelvis-neurovascular',
    title: 'Female Pelvis, Fascia, Nerves & Vessels',
    source: l1,
    tags: [
      { kind: 'mechanism', label: 'Pelvic compartment anatomy' },
      { kind: 'exam', label: 'Somatic vs autonomic supply' },
    ],
    highYield: [
      'The true pelvis lies below the pelvic inlet and contains pelvic viscera; pelvic fascia and condensations support organs while creating potential spaces.',
      'Sympathetic fibers reach pelvis through hypogastric pathways; pelvic splanchnic nerves S2–S4 carry parasympathetic fibers; pudendal nerve S2–S4 supplies somatic perineal sensation and muscle.',
      'Internal iliac branches supply most pelvic organs; ovarian arteries arise directly from abdominal aorta.',
      'Pelvic autonomics regulate visceral smooth muscle and erectile tissue, while somatic pathways control voluntary sphincters and perineal muscles.',
    ],
    chainTitle: 'Pelvic support and function depend on fascia, autonomics, and internal iliac branches',
    steps: [
      { label: 'Bony pelvis and fascia define compartments' },
      { label: 'Autonomic plexuses reach viscera' },
      { label: 'Pudendal nerve supplies perineal somatic structures', emphasis: 'key' },
      { label: 'Internal iliac branches distribute arterial flow' },
    ],
    examFindings: [
      { sign: 'Perineal sensory loss with sphincter weakness', mechanism: 'Pudendal or sacral somatic injury affects S2–S4 functions', significance: 'key' },
      { sign: 'Bladder/sexual dysfunction after pelvic autonomic injury', mechanism: 'Hypogastric plexus pathways coordinate visceral activity', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Pelvic neurovascular map on imaging or surgery', meaning: 'Localizes bleeding and structures at risk' },
      { clue: 'Focused sacral neurologic examination', meaning: 'Assesses S2–S4 sensory and motor integrity' },
    ],
    treatment: [
      { logic: 'Preserve autonomic plexuses and pudendal pathways', detail: 'Nerve-sparing pelvic procedures reduce urinary, bowel, and sexual dysfunction.' },
    ],
    mnemonic: { hook: 'S2, 3, 4 keeps the pelvis off the floor', expansion: ['Pelvic splanchnic and pudendal roots'] },
    trap: {
      questionCategory: 'Pelvic innervation',
      wrongInstinct: 'The pudendal nerve provides parasympathetic supply to pelvic organs',
      rightAnswer: 'Pudendal is somatic; pelvic splanchnics carry parasympathetics',
      why: 'Both arise from S2–S4 but serve different functional systems.',
    },
    quiz: {
      stem: 'Which nerves carry parasympathetic fibers to pelvic viscera?',
      options: ['Lumbar splanchnic nerves', 'Pelvic splanchnic nerves', 'Pudendal nerves', 'Phrenic nerves'],
      answer: 1,
      explanation: 'Pelvic splanchnic nerves from S2–S4 provide parasympathetic pelvic outflow.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-uterus-vagina-support',
    title: 'Uterus, Vagina & Pelvic Support',
    source: l1,
    tags: [
      { kind: 'mechanism', label: 'Uterine support and relations' },
      { kind: 'exam', label: 'Uterine artery–ureter relation' },
    ],
    highYield: [
      'Uterus has fundus, body, isthmus, and cervix; it is commonly anteverted relative to vagina and anteflexed at the cervix–body junction.',
      'Cardinal and uterosacral fascial supports plus levator ani are major supports; round ligament helps maintain anteversion.',
      'Uterine artery crosses superior to the ureter near the cervix—“water under the bridge”—and anastomoses with ovarian supply.',
      'Vaginal fornices surround the cervix; posterior fornix lies near rectouterine pouch, the lowest intraperitoneal recess in an upright female.',
    ],
    chainTitle: 'Fascial condensations and pelvic floor hold the uterus above the vagina',
    steps: [
      { label: 'Levator ani supports pelvic viscera' },
      { label: 'Cardinal/uterosacral ligaments stabilize cervix' },
      { label: 'Round ligament favors anteversion' },
      { label: 'Uterine artery crosses over ureter near cervix', emphasis: 'key' },
    ],
    examFindings: [
      { sign: 'Ureteric injury during uterine artery ligation', mechanism: 'Ureter passes immediately inferior to the artery', significance: 'key' },
      { sign: 'Uterine prolapse', mechanism: 'Failure of pelvic floor and apical fascial support permits descent', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Pelvic examination with prolapse maneuvers', meaning: 'Defines compartment and apical support failure' },
      { clue: 'Ultrasound', meaning: 'Assesses uterine orientation and structural pathology' },
    ],
    treatment: [
      { logic: 'Repair the failed support compartment', detail: 'Pelvic-floor rehabilitation or surgery is selected by symptoms, anatomy, and reproductive goals.' },
    ],
    mnemonic: { hook: 'Water under the bridge', expansion: ['Ureter under uterine artery'] },
    trap: {
      questionCategory: 'Uterine support',
      wrongInstinct: 'Broad ligament is the principal load-bearing uterine support',
      rightAnswer: 'Pelvic floor and cardinal/uterosacral supports carry the major load',
      why: 'Broad ligament is a peritoneal fold rather than a strong suspensory ligament.',
    },
    quiz: {
      stem: 'Which structure passes inferior to the uterine artery near the cervix?',
      options: ['Round ligament', 'Ureter', 'Ovarian vein', 'Obturator nerve'],
      answer: 1,
      explanation: 'The ureter passes beneath the uterine artery—water under the bridge.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-uterine-tube-ovary-lymph',
    title: 'Uterine Tubes, Ovaries, Lymphatics & Clinical Anatomy',
    source: l1,
    tags: [
      { kind: 'mechanism', label: 'Oocyte transport and gonadal vessels' },
      { kind: 'exam', label: 'Ectopic pregnancy and ovarian lymph' },
    ],
    highYield: [
      'Uterine tube segments are infundibulum with fimbriae, ampulla, isthmus, and intramural part; fertilization most often occurs in ampulla.',
      'Ovary attaches to uterus by ovarian ligament and to lateral pelvic wall by suspensory ligament carrying ovarian vessels.',
      'Ovarian arteries arise from aorta; ovarian lymph follows gonadal vessels to para-aortic nodes, not primarily superficial inguinal nodes.',
      'Tubal implantation can rupture and bleed intraperitoneally; ovarian torsion twists the suspensory vascular pedicle.',
    ],
    chainTitle: 'Fimbriae capture the oocyte and cilia/muscle move it toward uterus',
    steps: [
      { label: 'Ovulated oocyte enters infundibulum' },
      { label: 'Fertilization commonly occurs in ampulla', emphasis: 'key' },
      { label: 'Cilia and smooth muscle transport conceptus' },
      { label: 'Ovarian vessels and lymph follow suspensory ligament' },
    ],
    examFindings: [
      { sign: 'Acute pelvic pain with positive pregnancy test and free fluid', mechanism: 'Ruptured tubal ectopic pregnancy causes hemoperitoneum', significance: 'key' },
      { sign: 'Sudden unilateral pain with enlarged ovary', mechanism: 'Torsion impairs venous then arterial flow', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Serial hCG plus transvaginal ultrasound', meaning: 'Evaluates pregnancy location and viability' },
      { clue: 'Doppler and ovarian morphology', meaning: 'Supports torsion but normal flow does not fully exclude it' },
    ],
    treatment: [
      { logic: 'Treat rupture or torsion urgently', detail: 'Hemodynamic instability or threatened ovarian viability requires rapid operative management.' },
    ],
    mnemonic: { hook: 'Ampulla is the usual meeting place', expansion: ['Ovary drains up to para-aortic nodes'] },
    trap: {
      questionCategory: 'Ovarian lymph',
      wrongInstinct: 'Ovary drains mainly to superficial inguinal nodes',
      rightAnswer: 'Ovarian lymph follows gonadal vessels to para-aortic nodes',
      why: 'The ovary retains the drainage pattern of its upper abdominal embryologic origin.',
    },
    quiz: {
      stem: 'Where does fertilization most commonly occur?',
      options: ['Cervix', 'Ampulla of uterine tube', 'Vagina', 'Ovarian cortex'],
      answer: 1,
      explanation: 'The ampulla is the widest tubal segment and the usual site of fertilization.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-ovarian-follicle-histology',
    title: 'Ovary & Follicular Development Histology',
    source: l2,
    tags: [
      { kind: 'mechanism', label: 'Primordial-to-antral follicle sequence' },
      { kind: 'exam', label: 'Granulosa, theca and zona pellucida' },
    ],
    highYield: [
      'Ovarian cortex contains follicles beneath surface epithelium/tunica albuginea; medulla contains loose connective tissue, vessels, and nerves.',
      'Primordial follicle has primary oocyte with flattened cells; primary follicles gain cuboidal granulosa layers and zona pellucida.',
      'Secondary/antral follicles develop fluid spaces, theca interna steroidogenic cells, and fibrous theca externa.',
      'Mature follicle has a large antrum, cumulus oophorus, and corona radiata around the oocyte.',
    ],
    chainTitle: 'Follicular support layers expand and specialize around a primary oocyte',
    steps: [
      { label: 'Primordial follicle recruits granulosa cells' },
      { label: 'Zona pellucida and multilaminar granulosa develop' },
      { label: 'Theca differentiates and antrum forms', emphasis: 'key' },
      { label: 'Cumulus/corona organize around ovulatory oocyte' },
    ],
    examFindings: [
      { sign: 'Large fluid-filled antrum with eccentric oocyte', mechanism: 'Mature preovulatory follicle', significance: 'key' },
      { sign: 'Collapsed follicle with pyknotic oocyte/granulosa', mechanism: 'Follicular atresia affects most recruited follicles', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Granulosa layers, antrum and theca pattern', meaning: 'Stages follicular development' },
      { clue: 'Ovarian reserve markers interpreted clinically', meaning: 'Estimate follicle pool rather than histologic stage of one follicle' },
    ],
    treatment: [
      { logic: 'Link follicle structure to hormone function', detail: 'Theca supplies androgen substrate; granulosa aromatizes it to estrogen.' },
    ],
    mnemonic: { hook: 'Primordial → primary → antral → mature', expansion: ['Zona first, antrum later'] },
    trap: {
      questionCategory: 'Oocyte stage',
      wrongInstinct: 'A mature follicle normally contains a completed ovum before the LH surge',
      rightAnswer: 'The primary oocyte completes meiosis I around the LH surge and ovulates as a secondary oocyte',
      why: 'Meiosis II completes only after fertilization.',
    },
    quiz: {
      stem: 'Which structure directly surrounds the oocyte at ovulation?',
      options: ['Theca externa', 'Corona radiata', 'Ovarian medulla', 'Corpus albicans'],
      answer: 1,
      explanation: 'The corona radiata is the innermost cumulus granulosa layer traveling with the secondary oocyte.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-ovulation-corpus-luteum-histology',
    title: 'Ovulation, Corpus Luteum & Follicular Atresia',
    source: l2,
    tags: [
      { kind: 'mechanism', label: 'LH-driven luteinization' },
      { kind: 'exam', label: 'Granulosa vs theca lutein cells' },
    ],
    highYield: [
      'LH surge promotes follicular rupture, oocyte release, and luteinization of granulosa/theca cells.',
      'Granulosa lutein cells are large and pale, producing progesterone and estrogen; theca lutein cells are smaller and peripheral.',
      'Without pregnancy, luteal support wanes and corpus luteum becomes fibrous corpus albicans; hCG rescues it in early pregnancy.',
      'Atresia can occur at any follicular stage and is the fate of nearly all follicles.',
    ],
    chainTitle: 'The ruptured follicle becomes a temporary progesterone-secreting gland',
    steps: [
      { label: 'LH surge ruptures mature follicle' },
      { label: 'Follicular wall folds and vascularizes' },
      { label: 'Granulosa/theca cells luteinize', emphasis: 'key' },
      { label: 'Regression → corpus albicans unless hCG rescue' },
    ],
    examFindings: [
      { sign: 'Highly vascular folded yellow body', mechanism: 'Corpus luteum supports secretory endometrium', significance: 'key' },
      { sign: 'Hyalinized scar in ovarian cortex', mechanism: 'Regressed corpus luteum forms corpus albicans', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Mid-luteal progesterone', meaning: 'Supports that ovulation and luteal function occurred' },
      { clue: 'Ultrasound corpus-luteum appearance', meaning: 'May demonstrate postovulatory structure but is not alone a functional test' },
    ],
    treatment: [
      { logic: 'Support luteal progesterone when clinically indicated', detail: 'Assisted reproduction may supplement the transient endocrine role of the corpus luteum.' },
    ],
    mnemonic: { hook: 'LH launches ovulation and luteinization', expansion: ['hCG keeps the corpus luteum alive'] },
    trap: {
      questionCategory: 'Early pregnancy support',
      wrongInstinct: 'Placental progesterone fully replaces corpus luteum immediately at fertilization',
      rightAnswer: 'hCG maintains the corpus luteum until placental steroid production is sufficient',
      why: 'Early implantation depends on continued luteal progesterone.',
    },
    quiz: {
      stem: 'Which hormone rescues the corpus luteum in early pregnancy?',
      options: ['FSH', 'hCG', 'Prolactin', 'Oxytocin'],
      answer: 1,
      explanation: 'Trophoblastic hCG stimulates LH receptors on luteal cells.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-oviduct-uterus-cycle-histology',
    title: 'Oviduct & Cyclic Uterine Histology',
    source: l2,
    tags: [
      { kind: 'mechanism', label: 'Hormone-dependent endometrium' },
      { kind: 'exam', label: 'Proliferative vs secretory glands' },
    ],
    highYield: [
      'Oviduct has branching mucosal folds lined by ciliated and secretory simple columnar cells; folds are most elaborate in ampulla.',
      'Endometrium has basal layer that regenerates and functional layer that proliferates, secretes, and sheds.',
      'Estrogen produces straight proliferative glands and mitoses; progesterone produces tortuous saw-tooth glands, secretion, stromal edema, and predecidual change.',
      'Myometrium is interlacing smooth muscle that hypertrophies in pregnancy and contracts during labor.',
    ],
    chainTitle: 'Ovarian hormones remodel the functional endometrium each cycle',
    steps: [
      { label: 'Menstruation sheds functional layer' },
      { label: 'Estrogen rebuilds proliferative endometrium' },
      { label: 'Progesterone creates secretory implantation bed', emphasis: 'key' },
      { label: 'Hormone withdrawal causes ischemia and shedding' },
    ],
    examFindings: [
      { sign: 'Coiled glands with subnuclear vacuoles', mechanism: 'Progesterone-dominant secretory endometrium', significance: 'key' },
      { sign: 'Straight glands with frequent mitoses', mechanism: 'Estrogen-driven proliferative phase', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Endometrial gland/stroma pattern', meaning: 'Dates hormonal phase approximately' },
      { clue: 'Tubal mucosal folds and cilia', meaning: 'Distinguishes ampulla from narrower tubal segments' },
    ],
    treatment: [
      { logic: 'Interpret tissue in cycle and hormone context', detail: 'Exogenous hormones and anovulation can uncouple histology from calendar date.' },
    ],
    mnemonic: { hook: 'Estrogen expands; progesterone prepares', expansion: ['Straight proliferative glands → coiled secretory glands'] },
    trap: {
      questionCategory: 'Menstrual regeneration',
      wrongInstinct: 'The entire endometrium is shed every month',
      rightAnswer: 'The functional layer sheds; basal layer remains to regenerate it',
      why: 'Deep basal glands and stroma survive menstruation.',
    },
    quiz: {
      stem: 'Which hormone drives secretory transformation of endometrial glands?',
      options: ['FSH', 'Progesterone', 'Oxytocin', 'Prolactin'],
      answer: 1,
      explanation: 'Postovulatory progesterone converts proliferative endometrium into an implantation-ready secretory state.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-cervix-vagina-histology',
    title: 'Cervix, Transformation Zone & Vagina Histology',
    source: l2,
    tags: [
      { kind: 'mechanism', label: 'Squamocolumnar junction' },
      { kind: 'exam', label: 'Transformation zone and glycogen' },
    ],
    highYield: [
      'Endocervix has mucus-secreting simple columnar epithelium and glands; ectocervix has nonkeratinized stratified squamous epithelium.',
      'The transformation zone around the squamocolumnar junction undergoes metaplasia and is the key site for HPV-related dysplasia screening.',
      'Vagina has glycogen-rich nonkeratinized stratified squamous mucosa, no glands, a smooth-muscle wall, and elastic adventitia.',
      'Lactobacilli metabolize epithelial glycogen to lactic acid, supporting acidic vaginal pH during reproductive years.',
    ],
    chainTitle: 'Hormone-responsive squamous epithelium and flora create the vaginal barrier',
    steps: [
      { label: 'Estrogen promotes epithelial glycogen accumulation' },
      { label: 'Cells shed glycogen into lumen' },
      { label: 'Lactobacilli generate lactic acid', emphasis: 'key' },
      { label: 'Low pH limits many pathogens' },
    ],
    examFindings: [
      { sign: 'Metaplastic epithelium at squamocolumnar junction', mechanism: 'Transformation zone adapts to vaginal environment and is vulnerable to HPV dysplasia', significance: 'key' },
      { sign: 'Absent vaginal glands', mechanism: 'Lubrication derives from cervical mucus, transudate, and vestibular glands', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Cervical cytology/HPV testing', meaning: 'Samples the transformation zone for precancerous change' },
      { clue: 'Vaginal pH and microscopy', meaning: 'Assesses epithelial/flora environment' },
    ],
    treatment: [
      { logic: 'Sample the transformation zone correctly', detail: 'Screening quality depends on collecting both squamous and endocervical components.' },
    ],
    mnemonic: { hook: 'Endocervix columnar, ectocervix squamous', expansion: ['The transition is the screening target'] },
    trap: {
      questionCategory: 'Vaginal histology',
      wrongInstinct: 'Vaginal lubrication comes from numerous mucosal glands',
      rightAnswer: 'Vaginal mucosa has no glands',
      why: 'Fluid comes mainly from transudation and nearby cervical/vestibular sources.',
    },
    quiz: {
      stem: 'Which cervical region is the major target of HPV-related screening?',
      options: ['Myometrium', 'Transformation zone', 'Ovarian medulla', 'Broad ligament'],
      answer: 1,
      explanation: 'The transformation zone at the squamocolumnar junction is the common site of cervical dysplasia.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-breast-gross-lymphatic-anatomy',
    title: 'Breast Gross Anatomy, Blood Supply & Lymphatics',
    source: l3,
    tags: [
      { kind: 'mechanism', label: 'Mammary lobes and axillary drainage' },
      { kind: 'exam', label: 'Breast cancer spread' },
    ],
    highYield: [
      'Breast lies in superficial fascia, usually from ribs 2–6 and sternum toward midaxillary line, with an axillary tail.',
      '15–20 lobes drain through lactiferous ducts to nipple; Cooper suspensory ligaments connect dermis to deep fascia.',
      'Most lymph drains to axillary nodes, especially pectoral/anterior group; medial quadrants also drain parasternal nodes and can cross midline.',
      'Long thoracic nerve injury during axillary surgery causes serratus anterior weakness and winged scapula.',
    ],
    chainTitle: 'Lobular drainage converges on nipple while lymph tracks chiefly to axilla',
    steps: [
      { label: 'Lobules drain into lactiferous ducts' },
      { label: 'Subareolar lymphatic plexus collects lymph' },
      { label: 'Most lymph reaches pectoral then central/apical axillary nodes', emphasis: 'key' },
      { label: 'Medial drainage reaches parasternal nodes' },
    ],
    examFindings: [
      { sign: 'Skin dimpling over a breast mass', mechanism: 'Tumor shortens infiltrated Cooper ligaments', significance: 'key' },
      { sign: 'Winged scapula after axillary dissection', mechanism: 'Long thoracic nerve injury denervates serratus anterior', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Triple assessment: examination, imaging, tissue', meaning: 'Evaluates suspicious breast lesions systematically' },
      { clue: 'Sentinel-node mapping', meaning: 'Identifies first draining regional node basin' },
    ],
    treatment: [
      { logic: 'Respect lymphatic and neural anatomy during surgery', detail: 'Sentinel-node approaches can stage disease while reducing axillary morbidity.' },
    ],
    mnemonic: { hook: 'Most breast lymph goes to axilla', expansion: ['Medial breast can go parasternal and across midline'] },
    trap: {
      questionCategory: 'Axillary nerve injury',
      wrongInstinct: 'Winged scapula reflects thoracodorsal nerve injury',
      rightAnswer: 'It reflects long thoracic nerve injury',
      why: 'Long thoracic nerve supplies serratus anterior, which anchors scapula to thoracic wall.',
    },
    quiz: {
      stem: 'Most lymph from the breast drains initially toward which nodes?',
      options: ['Popliteal', 'Axillary', 'Para-aortic', 'Deep inguinal'],
      answer: 1,
      explanation: 'Axillary nodes receive most breast lymph, especially from lateral quadrants.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-mammary-gland-histology',
    title: 'Mammary Gland Histology Across Life Stages',
    source: l3,
    tags: [
      { kind: 'mechanism', label: 'Ductal and lobuloalveolar remodeling' },
      { kind: 'exam', label: 'Inactive vs pregnant vs lactating breast' },
    ],
    highYield: [
      'Mammary gland is a modified tubuloalveolar gland; inactive breast contains abundant fibroadipose stroma and ducts with few developed alveoli.',
      'Pregnancy produces ductal branching and lobuloalveolar proliferation under estrogen, progesterone, prolactin, and other hormones.',
      'Lactating alveolar cells secrete protein by merocrine exocytosis and lipid by apocrine-like budding; myoepithelial cells contract with oxytocin.',
      'After weaning, involution removes many secretory alveoli and restores a more inactive pattern.',
    ],
    chainTitle: 'Pregnancy builds secretory alveoli and suckling activates their output',
    steps: [
      { label: 'Estrogen expands ducts' },
      { label: 'Progesterone/prolactin expand lobuloalveolar units' },
      { label: 'Postpartum prolactin drives milk synthesis' },
      { label: 'Oxytocin contracts myoepithelial cells', emphasis: 'key' },
    ],
    examFindings: [
      { sign: 'Numerous distended alveoli with secretory material', mechanism: 'Active lactating gland dominates over stroma', significance: 'key' },
      { sign: 'Mostly ducts embedded in dense/adipose stroma', mechanism: 'Inactive nonpregnant breast', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Duct-to-alveolus ratio and luminal secretion', meaning: 'Identifies physiologic state' },
      { clue: 'Myoepithelial markers around ducts/lobules', meaning: 'Help assess preserved normal architecture in pathology' },
    ],
    treatment: [
      { logic: 'Separate production from ejection problems', detail: 'Prolactin supports synthesis; oxytocin and myoepithelial contraction support milk transfer.' },
    ],
    mnemonic: { hook: 'Estrogen ducts, progesterone lobules, prolactin milk, oxytocin move', expansion: ['Four hormones, four jobs'] },
    trap: {
      questionCategory: 'Milk secretion',
      wrongInstinct: 'Milk fat and protein use identical secretory mechanisms',
      rightAnswer: 'Protein uses merocrine exocytosis; lipid buds apically',
      why: 'Different milk components leave luminal cells by distinct routes.',
    },
    quiz: {
      stem: 'Which cells contract to eject milk from mammary alveoli?',
      options: ['Fibroblasts', 'Myoepithelial cells', 'Adipocytes', 'Macrophages'],
      answer: 1,
      explanation: 'Oxytocin stimulates myoepithelial cells surrounding alveoli and small ducts.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-placenta-villi-barrier-circulation',
    title: 'Placental Villi, Barrier & Maternal–Fetal Circulation',
    source: l3,
    tags: [
      { kind: 'mechanism', label: 'Hemochorial exchange surface' },
      { kind: 'exam', label: 'Tertiary villi and placental barrier' },
    ],
    highYield: [
      'Primary villi contain trophoblast; secondary villi acquire extraembryonic mesoderm; tertiary villi develop fetal capillaries.',
      'Syncytiotrophoblast contacts maternal blood in intervillous space; cytotrophoblast becomes less continuous as pregnancy advances.',
      'Maternal spiral arteries deliver blood around villi while fetal blood remains within villous capillaries connected to umbilical vessels.',
      'The placental barrier thins with gestation, improving diffusion while normally preventing direct mixing of maternal and fetal blood.',
    ],
    chainTitle: 'Branching fetal villi bathe in maternal blood without direct vascular continuity',
    steps: [
      { label: 'Trophoblast forms primary villus' },
      { label: 'Mesoderm forms secondary villus' },
      { label: 'Fetal capillaries form tertiary villus', emphasis: 'key' },
      { label: 'Maternal and fetal flows exchange across thin barrier' },
    ],
    examFindings: [
      { sign: 'Fetal capillary within a chorionic villus', mechanism: 'Defines a tertiary exchange villus', significance: 'key' },
      { sign: 'Syncytial knots increase near term', mechanism: 'Aggregated syncytiotrophoblast nuclei reflect villous maturation', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Placental histology and villous maturation', meaning: 'Assesses development, inflammation, perfusion, and injury patterns' },
      { clue: 'Doppler uteroplacental/fetoplacental flow', meaning: 'Assesses vascular resistance without directly imaging microscopic exchange' },
    ],
    treatment: [
      { logic: 'Distinguish maternal from fetal placental circulation', detail: 'Maternal perfusion and fetal vessel abnormalities produce different risks and monitoring patterns.' },
    ],
    mnemonic: { hook: 'Primary trophoblast, secondary stroma, tertiary capillaries', expansion: ['Maternal blood outside; fetal blood inside'] },
    trap: {
      questionCategory: 'Placental circulation',
      wrongInstinct: 'Maternal and fetal blood normally mix freely in intervillous space',
      rightAnswer: 'They remain separated by the placental barrier',
      why: 'Exchange occurs across trophoblast and fetal capillary layers, not through a shared vessel.',
    },
    quiz: {
      stem: 'What distinguishes a tertiary chorionic villus?',
      options: ['It has only syncytiotrophoblast', 'It contains fetal capillaries', 'It contains maternal arteries', 'It has no mesoderm'],
      answer: 1,
      explanation: 'Tertiary villi contain fetal blood vessels within their mesenchymal cores.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-testis-epididymis-vas-anatomy',
    title: 'Testis, Epididymis, Spermatic Cord & Vas Deferens',
    source: l4,
    tags: [
      { kind: 'mechanism', label: 'Sperm transport anatomy' },
      { kind: 'exam', label: 'Torsion and varicocele' },
    ],
    highYield: [
      'Testis is covered by tunica vaginalis and dense tunica albuginea; septa divide it into lobules draining rete testis → efferent ductules → epididymis.',
      'Epididymis head receives efferent ductules, body supports maturation, and tail stores sperm before vas deferens.',
      'Spermatic cord contains vas deferens, testicular vessels/pampiniform plexus, nerves, lymphatics, and fascial coverings.',
      'Testicular artery arises from aorta; lymph drains para-aortic nodes, while scrotal skin drains superficial inguinal nodes.',
    ],
    chainTitle: 'Sperm leaves seminiferous tubules through a temperature-regulated cord',
    steps: [
      { label: 'Seminiferous tubules → rete testis' },
      { label: 'Efferent ductules → epididymis' },
      { label: 'Vas deferens ascends in spermatic cord' },
      { label: 'Pampiniform plexus cools arterial blood', emphasis: 'key' },
    ],
    examFindings: [
      { sign: 'Sudden severe testicular pain with high-riding testis', mechanism: 'Spermatic-cord torsion compromises venous then arterial flow', significance: 'key' },
      { sign: 'Left-sided “bag of worms” swelling', mechanism: 'Varicocele dilates pampiniform veins, commonly on left', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Urgent Doppler ultrasound when diagnosis is uncertain', meaning: 'Assesses perfusion but should not delay surgery in classic torsion' },
      { clue: 'Node location in testicular malignancy', meaning: 'Para-aortic spread reflects embryologic origin' },
    ],
    treatment: [
      { logic: 'Treat suspected torsion as time-critical', detail: 'Urgent exploration and bilateral fixation protect viability.' },
    ],
    mnemonic: { hook: 'Testis drains high; scrotum drains low', expansion: ['Para-aortic vs superficial inguinal nodes'] },
    trap: {
      questionCategory: 'Male genital lymph',
      wrongInstinct: 'Testis and scrotal skin share superficial inguinal drainage',
      rightAnswer: 'Testis drains para-aortic; scrotum drains superficial inguinal',
      why: 'Testis descends from posterior abdominal wall and retains its original vessels and lymphatics.',
    },
    quiz: {
      stem: 'Testicular lymph drains primarily to which nodes?',
      options: ['Superficial inguinal', 'Para-aortic', 'Axillary', 'Popliteal'],
      answer: 1,
      explanation: 'Testicular lymph follows gonadal vessels to lumbar/para-aortic nodes.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-male-accessory-glands-anatomy',
    title: 'Seminal Vesicles, Ejaculatory Ducts, Prostate & Bulbourethral Glands',
    source: l4,
    tags: [
      { kind: 'mechanism', label: 'Seminal-fluid pathway' },
      { kind: 'exam', label: 'Prostatic zones and urethral relations' },
    ],
    highYield: [
      'Seminal vesicle lies posterior to bladder and joins ampulla of vas to form ejaculatory duct; it contributes fructose-rich alkaline fluid.',
      'Ejaculatory ducts traverse prostate and empty into prostatic urethra.',
      'Prostate surrounds proximal urethra below bladder; peripheral zone is a common carcinoma site, transition zone commonly enlarges in BPH.',
      'Bulbourethral glands lie in deep perineal pouch and drain into proximal spongy urethra, adding mucus-rich pre-ejaculate.',
    ],
    chainTitle: 'Sperm mixes sequentially with accessory secretions before urethral exit',
    steps: [
      { label: 'Vas ampulla joins seminal-vesicle duct' },
      { label: 'Ejaculatory duct traverses prostate' },
      { label: 'Prostatic secretion enters prostatic urethra', emphasis: 'key' },
      { label: 'Bulbourethral mucus enters spongy urethra' },
    ],
    examFindings: [
      { sign: 'Firm irregular posterior prostate nodule', mechanism: 'Peripheral-zone carcinoma may be palpable on rectal examination', significance: 'key' },
      { sign: 'Weak urinary stream with periurethral enlargement', mechanism: 'Transition-zone BPH compresses prostatic urethra', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'DRE, PSA context, MRI and biopsy when indicated', meaning: 'Assess prostate structure and cancer risk' },
      { clue: 'Semen fructose', meaning: 'Reflects seminal-vesicle contribution and distal duct patency' },
    ],
    treatment: [
      { logic: 'Localize obstruction to gland/duct anatomy', detail: 'Urinary obstruction and ejaculatory-duct obstruction have different structural targets.' },
    ],
    mnemonic: { hook: 'Vas + vesicle = ejaculatory duct', expansion: ['Through prostate to urethra'] },
    trap: {
      questionCategory: 'Prostatic zones',
      wrongInstinct: 'BPH and most prostate cancers arise in the same zone',
      rightAnswer: 'BPH favors transition zone; carcinoma commonly arises peripherally',
      why: 'This explains early urinary obstruction in BPH and rectal palpability of many cancers.',
    },
    quiz: {
      stem: 'The ejaculatory duct is formed by union of the vas deferens with which duct?',
      options: ['Bulbourethral duct', 'Seminal-vesicle duct', 'Prostatic utricle', 'Efferent ductule'],
      answer: 1,
      explanation: 'The ampulla of vas joins the duct of seminal vesicle to form the ejaculatory duct.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-male-perineal-pudendal-anatomy',
    title: 'Male Pelvis, Perineum & Pudendal Pathway',
    source: l4,
    tags: [
      { kind: 'mechanism', label: 'Perineal compartment anatomy' },
      { kind: 'exam', label: 'Pudendal canal and block' },
    ],
    highYield: [
      'Perineum is diamond-shaped below pelvic diaphragm and divided into urogenital and anal triangles.',
      'Pudendal nerve and internal pudendal vessels exit greater sciatic foramen, hook around ischial spine/sacrospinous ligament, and enter lesser sciatic foramen into Alcock canal.',
      'Superficial perineal pouch contains erectile roots and associated muscles; deep pouch contains external urethral sphincter and proximal urethral structures.',
      'Ischial spine is a key landmark for pudendal nerve block.',
    ],
    chainTitle: 'Pudendal neurovascular bundle loops around the ischial spine into perineum',
    steps: [
      { label: 'Exit pelvis via greater sciatic foramen' },
      { label: 'Cross posterior to ischial spine' },
      { label: 'Enter perineum via lesser sciatic foramen', emphasis: 'key' },
      { label: 'Travel in pudendal canal and branch' },
    ],
    examFindings: [
      { sign: 'Perineal anesthesia after ischial-spine injection', mechanism: 'Local anesthetic reaches pudendal nerve near sacrospinous ligament', significance: 'supportive' },
      { sign: 'Pain worsened by sitting with perineal distribution', mechanism: 'Pudendal entrapment can occur along its pelvic/perineal course', significance: 'key' },
    ],
    investigations: [
      { clue: 'Anatomic exam and diagnostic nerve block', meaning: 'Supports pudendal localization' },
      { clue: 'Pelvic trauma imaging', meaning: 'Assesses urethral and perineal compartment injury' },
    ],
    treatment: [
      { logic: 'Use stable bony landmarks for regional anesthesia', detail: 'The ischial spine guides safe targeted pudendal blockade.' },
    ],
    mnemonic: { hook: 'Out greater, around spine, in lesser', expansion: ['Then Alcock canal'] },
    trap: {
      questionCategory: 'Pudendal course',
      wrongInstinct: 'Pudendal nerve remains inside the pelvis to reach perineum',
      rightAnswer: 'It exits and re-enters through the greater and lesser sciatic foramina',
      why: 'The loop around the ischial spine is its defining course.',
    },
    quiz: {
      stem: 'Which landmark is palpated for a pudendal nerve block?',
      options: ['ASIS', 'Ischial spine', 'Pubic tubercle', 'Coccygeal tip'],
      answer: 1,
      explanation: 'The pudendal nerve crosses near the ischial spine and sacrospinous ligament.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-seminiferous-epithelium-spermatogenesis',
    title: 'Seminiferous Epithelium & Spermatogenesis',
    source: l6,
    tags: [
      { kind: 'mechanism', label: 'Basal-to-luminal germ-cell maturation' },
      { kind: 'exam', label: 'Meiosis and spermiogenesis' },
    ],
    highYield: [
      'Seminiferous tubules contain Sertoli cells and germ cells arranged from basal spermatogonia to luminal spermatids/spermatozoa.',
      'Primary spermatocytes undergo meiosis I; secondary spermatocytes are brief; spermatids undergo spermiogenesis without further division.',
      'Spermiogenesis forms acrosome, condenses nucleus, builds flagellum, and sheds residual cytoplasm.',
      'Spermiation releases immature sperm into lumen; epididymal transit supplies motility and fertilizing competence.',
    ],
    chainTitle: 'Mitotic germ cells cross meiosis and remodel into sperm',
    steps: [
      { label: 'Spermatogonia divide near basement membrane' },
      { label: 'Primary spermatocytes complete meiosis I' },
      { label: 'Spermatids complete meiosis II products' },
      { label: 'Spermiogenesis forms acrosome and flagellum', emphasis: 'key' },
    ],
    examFindings: [
      { sign: 'Large cells with coarse meiotic chromatin', mechanism: 'Primary spermatocytes are prominent in seminiferous epithelium', significance: 'key' },
      { sign: 'Elongated dense nuclei near lumen', mechanism: 'Late spermatids are undergoing spermiogenesis', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Germ-cell layers on testicular biopsy', meaning: 'Localizes maturation arrest' },
      { clue: 'Semen analysis', meaning: 'Assesses final output but not every intratesticular step' },
    ],
    treatment: [
      { logic: 'Protect germinal epithelium from heat and toxins', detail: 'Spermatogenesis takes weeks, so injury and recovery appear with delay.' },
    ],
    mnemonic: { hook: 'Basement to lumen: spermatogonia → spermatocyte → spermatid → sperm', expansion: ['Spermiogenesis reshapes, not divides'] },
    trap: {
      questionCategory: 'Sperm maturation',
      wrongInstinct: 'Spermiogenesis is another meiotic division',
      rightAnswer: 'Spermiogenesis is structural remodeling of haploid spermatids',
      why: 'Chromosome number does not change during the remodeling phase.',
    },
    quiz: {
      stem: 'Which process forms the acrosome and flagellum from a spermatid?',
      options: ['Mitosis', 'Spermiogenesis', 'Capacitation', 'Fertilization'],
      answer: 1,
      explanation: 'Spermiogenesis remodels round spermatids into elongated spermatozoa.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-sertoli-leydig-histology',
    title: 'Sertoli Cells, Leydig Cells & Blood–Testis Barrier',
    source: l6,
    tags: [
      { kind: 'mechanism', label: 'Somatic support of germ cells' },
      { kind: 'exam', label: 'FSH vs LH targets' },
    ],
    highYield: [
      'Sertoli cells span seminiferous epithelium, support germ cells, phagocytose residual bodies, secrete inhibin B/ABP/fluid, and respond to FSH plus testosterone.',
      'Tight junctions between Sertoli cells form blood–testis barrier separating basal from adluminal compartments and limiting immune exposure to meiotic antigens.',
      'Leydig cells lie in interstitium, have steroidogenic organelles/lipid, respond to LH, and synthesize testosterone.',
      'Peritubular myoid cells help propel luminal fluid and contribute to the tubular wall.',
    ],
    chainTitle: 'LH makes testosterone while FSH-supported Sertoli cells nurture germ cells',
    steps: [
      { label: 'LH stimulates interstitial Leydig cells' },
      { label: 'Testosterone enters seminiferous tubule' },
      { label: 'FSH activates Sertoli support functions', emphasis: 'key' },
      { label: 'Barrier and ABP maintain germ-cell microenvironment' },
    ],
    examFindings: [
      { sign: 'Pale Sertoli nucleus with prominent nucleolus', mechanism: 'Long-lived supporting cell spans epithelium', significance: 'supportive' },
      { sign: 'Eosinophilic interstitial clusters between tubules', mechanism: 'Leydig cells synthesize androgen', significance: 'key' },
    ],
    investigations: [
      { clue: 'FSH, LH, testosterone and inhibin B', meaning: 'Differentiate germinal, Sertoli, Leydig, and central dysfunction' },
      { clue: 'Testicular histology', meaning: 'Assesses barrier/support and germ-cell maturation' },
    ],
    treatment: [
      { logic: 'Preserve high intratesticular testosterone for fertility', detail: 'Exogenous testosterone suppresses LH/FSH and can impair spermatogenesis despite normal serum androgen effects.' },
    ],
    mnemonic: { hook: 'LH → Leydig; FSH → Sertoli', expansion: ['Sertoli supports sperm'] },
    trap: {
      questionCategory: 'Testosterone therapy',
      wrongInstinct: 'Exogenous testosterone reliably improves sperm production',
      rightAnswer: 'It can suppress gonadotropins and intratesticular testosterone, reducing sperm production',
      why: 'Spermatogenesis needs very high local androgen maintained by LH-stimulated Leydig cells.',
    },
    quiz: {
      stem: 'Which cells form the blood–testis barrier?',
      options: ['Leydig cells', 'Sertoli cells', 'Spermatogonia', 'Peritubular capillaries'],
      answer: 1,
      explanation: 'Tight junctions between adjacent Sertoli cells divide basal and adluminal compartments.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-male-duct-gland-penis-histology',
    title: 'Male Ducts, Accessory Glands & Penis Histology',
    source: l6,
    tags: [
      { kind: 'mechanism', label: 'Maturation, propulsion and seminal fluid' },
      { kind: 'exam', label: 'Epididymis vs vas deferens' },
    ],
    highYield: [
      'Efferent ductules have alternating ciliated/nonciliated cells and scalloped lumen; epididymis has pseudostratified epithelium with stereocilia and smooth muscle.',
      'Vas deferens has narrow folded lumen and exceptionally thick three-layer muscular wall for emission.',
      'Seminal vesicle has highly folded mucosa; prostate has tubuloalveolar glands in fibromuscular stroma and may contain corpora amylacea.',
      'Penis contains paired corpora cavernosa and corpus spongiosum surrounding urethra, all enclosed by connective tissue/tunica albuginea.',
    ],
    chainTitle: 'Ducts mature and propel sperm while glands build semen',
    steps: [
      { label: 'Efferent ductules remove testicular fluid' },
      { label: 'Epididymis matures and stores sperm' },
      { label: 'Vas smooth muscle propels sperm', emphasis: 'key' },
      { label: 'Accessory glands add seminal plasma' },
    ],
    examFindings: [
      { sign: 'Pseudostratified stereociliated duct with sperm-filled lumen', mechanism: 'Epididymis', significance: 'key' },
      { sign: 'Stellate narrow lumen with massive smooth muscle', mechanism: 'Vas deferens', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Epithelial type, luminal contour and muscle thickness', meaning: 'Identifies male duct segment' },
      { clue: 'Corpora amylacea in prostatic glands', meaning: 'Common age-related luminal concretions' },
    ],
    treatment: [
      { logic: 'Localize obstruction along the duct system', detail: 'Sperm production can be intact despite absent ejaculate sperm when transport is blocked.' },
    ],
    mnemonic: { hook: 'Epididymis has stereocilia; vas has vast muscle', expansion: ['Prostate may have corpora amylacea'] },
    trap: {
      questionCategory: 'Epididymal surface',
      wrongInstinct: 'Epididymal stereocilia are motile cilia',
      rightAnswer: 'They are long nonmotile microvilli for absorption and secretion',
      why: 'They modify luminal fluid rather than beat to propel sperm.',
    },
    quiz: {
      stem: 'Which histologic feature best identifies vas deferens?',
      options: ['Large antrum', 'Very thick muscular wall', 'Thyroid colloid', 'Ciliated simple columnar lining'],
      answer: 1,
      explanation: 'The vas deferens has a narrow lumen surrounded by a strikingly thick smooth-muscle wall.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-pelvic-diaphragm',
    title: 'Pelvic Diaphragm & Levator Ani',
    source: l9,
    tags: [
      { kind: 'mechanism', label: 'Pelvic-floor support' },
      { kind: 'exam', label: 'Puborectalis and continence' },
    ],
    highYield: [
      'Pelvic diaphragm is formed mainly by levator ani (puborectalis, pubococcygeus, iliococcygeus) plus coccygeus.',
      'Puborectalis sling around anorectal junction maintains anorectal angle and contributes to fecal continence.',
      'Levator ani supports viscera, resists rises in intra-abdominal pressure, and relaxes/expands during defecation and childbirth.',
      'Damage or denervation can contribute to prolapse, incontinence, and pelvic-floor dysfunction.',
    ],
    chainTitle: 'A muscular bowl supports viscera and dynamically controls outlets',
    steps: [
      { label: 'Levator ani maintains tonic support' },
      { label: 'Puborectalis maintains anorectal angle', emphasis: 'key' },
      { label: 'Contraction resists pressure and elevates floor' },
      { label: 'Coordinated relaxation permits evacuation/birth' },
    ],
    examFindings: [
      { sign: 'Loss of anorectal angle during pelvic-floor weakness', mechanism: 'Puborectalis sling no longer maintains the continence angle', significance: 'key' },
      { sign: 'Pelvic organ prolapse after obstetric injury', mechanism: 'Muscle/fascial support is disrupted', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Pelvic-floor examination', meaning: 'Assesses tone, voluntary contraction and compartment support' },
      { clue: 'Defecography or pelvic-floor imaging', meaning: 'Shows dynamic outlet and support dysfunction' },
    ],
    treatment: [
      { logic: 'Retrain coordination and strength before surgery when appropriate', detail: 'Pelvic-floor physiotherapy targets muscle control, not just maximal contraction.' },
    ],
    mnemonic: { hook: 'Puborectalis pulls a continence sling', expansion: ['Levator ani lifts the floor'] },
    trap: {
      questionCategory: 'Pelvic floor',
      wrongInstinct: 'Pelvic floor must remain maximally contracted during defecation',
      rightAnswer: 'Puborectalis and sphincters must relax in coordination',
      why: 'Failure to relax produces outlet dyssynergia.',
    },
    quiz: {
      stem: 'Which levator ani component forms a sling around the anorectal junction?',
      options: ['Iliococcygeus', 'Puborectalis', 'Coccygeus', 'Piriformis'],
      answer: 1,
      explanation: 'Puborectalis maintains the anorectal angle as a muscular sling.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-perineal-spaces-triangles',
    title: 'Perineal Triangles, Fascia & Pouches',
    source: l9,
    tags: [
      { kind: 'mechanism', label: 'Superficial and deep perineal compartments' },
      { kind: 'exam', label: 'Urine extravasation pathways' },
    ],
    highYield: [
      'Perineum is divided by line between ischial tuberosities into anterior urogenital and posterior anal triangles.',
      'Perineal membrane forms key boundary; superficial pouch lies between Colles fascia and membrane, deep pouch lies above membrane.',
      'Superficial pouch contains erectile roots and ischiocavernosus/bulbospongiosus; deep pouch contains external urethral sphincter complex.',
      'Fascial attachments determine spread of urine or blood after urethral/perineal injury.',
    ],
    chainTitle: 'Fascial boundaries route perineal structures and extravasated fluid',
    steps: [
      { label: 'Pelvic outlet is divided into two triangles' },
      { label: 'Perineal membrane separates superficial and deep pouches' },
      { label: 'Erectile roots occupy superficial pouch', emphasis: 'key' },
      { label: 'Fascial continuity determines fluid spread' },
    ],
    examFindings: [
      { sign: 'Urine in superficial perineum, scrotum/labia and lower anterior abdominal wall', mechanism: 'Spongy urethral rupture tracks within continuous superficial fascia', significance: 'key' },
      { sign: 'Ischioanal abscess spreading across posterior space', mechanism: 'Fat-filled fossae communicate around anal canal', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Retrograde urethrogram before catheterization in suspected urethral injury', meaning: 'Defines disruption and extravasation' },
      { clue: 'Cross-sectional imaging for deep infection', meaning: 'Maps fascial spread' },
    ],
    treatment: [
      { logic: 'Respect fascial compartments when draining infection or injury', detail: 'Incomplete drainage allows spread through communicating spaces.' },
    ],
    mnemonic: { hook: 'Superficial pouch holds roots; deep pouch holds sphincter', expansion: ['Perineal membrane lies between'] },
    trap: {
      questionCategory: 'Perineal extravasation',
      wrongInstinct: 'Fluid spreads freely into thigh',
      rightAnswer: 'Scarpa/Colles fascia attaches to fascia lata below inguinal ligament and limits thigh spread',
      why: 'Fascial attachments channel rather than randomly disperse fluid.',
    },
    quiz: {
      stem: 'The roots of penis or clitoris lie mainly in which compartment?',
      options: ['Deep perineal pouch', 'Superficial perineal pouch', 'Pelvic cavity', 'Ischioanal canal only'],
      answer: 1,
      explanation: 'Crura and bulbs with their muscles occupy the superficial perineal pouch.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-pudendal-erectile-external-genitalia',
    title: 'Pudendal Neurovasculature, Erectile Tissues & External Genitalia',
    source: l9,
    tags: [
      { kind: 'mechanism', label: 'Perineal sensory and erectile anatomy' },
      { kind: 'exam', label: 'Pudendal branches and erectile bodies' },
    ],
    highYield: [
      'Pudendal nerve branches into inferior rectal, perineal, and dorsal nerve of penis/clitoris; internal pudendal artery gives corresponding branches.',
      'Paired corpora cavernosa form crura; corpus spongiosum/bulbs surround urethral or vestibular structures and reduce urethral compression during erection.',
      'Female external genitalia include mons, labia majora/minora, vestibule, bulbs, clitoris, and greater vestibular glands.',
      'Parasympathetic cavernous nerves initiate erection through NO-mediated vasodilation; sympathetic/somatic pathways coordinate emission and ejaculation.',
    ],
    chainTitle: 'Autonomic inflow fills erectile bodies while pudendal pathways supply sensation and muscle',
    steps: [
      { label: 'Parasympathetic NO relaxes cavernosal smooth muscle' },
      { label: 'Arterial inflow expands sinusoids' },
      { label: 'Venous outflow is compressed', emphasis: 'key' },
      { label: 'Pudendal sensation and perineal muscles reinforce response' },
    ],
    examFindings: [
      { sign: 'Loss of genital sensation after pudendal injury', mechanism: 'Dorsal genital nerves are terminal pudendal branches', significance: 'key' },
      { sign: 'Erection impaired after pelvic autonomic injury', mechanism: 'Cavernous parasympathetic pathways are disrupted', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Focused perineal sensory and reflex exam', meaning: 'Assesses pudendal/sacral integrity' },
      { clue: 'Vascular evaluation in selected erectile dysfunction', meaning: 'Assesses arterial inflow and veno-occlusive function' },
    ],
    treatment: [
      { logic: 'Localize sensory, autonomic, muscular, and vascular contributors', detail: 'External genital function depends on several overlapping systems.' },
    ],
    mnemonic: { hook: 'Point and shoot', expansion: ['Parasympathetic erection', 'Sympathetic emission/ejaculation'] },
    trap: {
      questionCategory: 'Erectile innervation',
      wrongInstinct: 'Pudendal somatic fibers alone initiate cavernosal vasodilation',
      rightAnswer: 'Parasympathetic cavernous nerves initiate NO-mediated erection',
      why: 'Pudendal pathways supply sensation and striated muscle rather than the primary arterial relaxation signal.',
    },
    quiz: {
      stem: 'Which signaling molecule directly relaxes cavernosal smooth muscle during erection?',
      options: ['Nitric oxide', 'Aldosterone', 'Prolactin', 'TSH'],
      answer: 0,
      explanation: 'Parasympathetic NO increases cGMP and relaxes cavernosal smooth muscle.',
    },
  }),
];
