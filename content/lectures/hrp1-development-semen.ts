import { hrp1Lecture } from './hrp1-shared';

const l17 = 'L17 — Development of the Reproductive System';
const l18 = 'L18 — Semen Production & Analysis';

export const hrp1DevelopmentSemen = [
  hrp1Lecture({
    id: 'hrp1-gonadal-differentiation',
    title: 'Gonadal Differentiation & Hormonal Direction',
    source: l17,
    tags: [
      { kind: 'mechanism', label: 'Indifferent gonad to testis or ovary' },
      { kind: 'exam', label: 'SRY, AMH and testosterone' },
    ],
    highYield: [
      'The gonadal ridge begins as an **indifferent gonad populated by primordial germ cells**; supporting and steroidogenic cell lineages then differentiate.',
      '**SRY-driven SOX9 signaling promotes testis differentiation**: Sertoli cells organize testis cords and produce AMH, while Leydig cells produce testosterone.',
      'In the absence of the testis-determining pathway, pro-ovarian signals such as WNT4/RSPO1 favor ovarian differentiation and cortical follicle development.',
      'Chromosomal, gonadal, internal-duct and external-genital development are related but separable processes, which explains diverse differences of sex development.',
    ],
    chainTitle: 'Gene-regulatory choice directs the indifferent gonad and its hormone output',
    steps: [
      { label: 'Primordial germ cells enter the gonadal ridge' },
      { label: 'SRY/SOX9 or pro-ovarian signaling predominates', emphasis: 'key' },
      { label: 'Supporting cells become Sertoli or granulosa cells' },
      { label: 'Gonadal hormones direct downstream differentiation' },
    ],
    examFindings: [
      { sign: 'Sertoli-cell AMH production', mechanism: 'Promotes Müllerian duct regression during typical male development', significance: 'key' },
      { sign: 'Leydig-cell testosterone production', mechanism: 'Supports Wolffian duct differentiation and is converted to DHT in target tissues', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Karyotype/genomic testing plus hormone profile and imaging', meaning: 'Integrates chromosomal, gonadal and anatomic information when development differs from the typical pathway' },
      { clue: 'AMH and steroid measurements interpreted by age', meaning: 'Help assess gonadal cell function' },
    ],
    treatment: [
      { logic: 'Use multidisciplinary, person-centered assessment', detail: 'Urgent medical issues come first; long-term decisions should protect autonomy, function and psychosocial well-being.' },
    ],
    mnemonic: { hook: 'Sertoli suppress; Leydig supports', expansion: ['AMH regresses Müllerian ducts', 'Testosterone supports Wolffian ducts'] },
    trap: {
      questionCategory: 'Gonadal development',
      wrongInstinct: 'One chromosome or hormone alone determines every reproductive structure',
      rightAnswer: 'Gonadal, ductal and external-genital differentiation are linked but distinct steps',
      why: 'Each step depends on tissue-specific genes, hormones, receptors and timing.',
    },
    quiz: {
      stem: 'Which fetal testicular cell produces anti-Müllerian hormone?',
      options: ['Leydig cell', 'Sertoli cell', 'Theca cell', 'Granulosa cell'],
      answer: 1,
      explanation: 'Fetal Sertoli cells produce AMH, which promotes Müllerian duct regression.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-genital-duct-differentiation',
    title: 'Mesonephric & Paramesonephric Duct Differentiation',
    source: l17,
    tags: [
      { kind: 'mechanism', label: 'Wolffian and Müllerian ducts' },
      { kind: 'exam', label: 'Internal genital derivatives' },
    ],
    highYield: [
      'Both **mesonephric (Wolffian) and paramesonephric (Müllerian) ducts** are initially present.',
      '**Testosterone stabilizes mesonephric ducts**, which form the epididymis, ductus deferens, seminal vesicle and ejaculatory duct.',
      'AMH from fetal Sertoli cells causes paramesonephric duct regression during typical male differentiation.',
      'Without AMH and high local testosterone, paramesonephric ducts form uterine tubes, uterus and upper vagina, while mesonephric ducts regress.',
    ],
    chainTitle: 'Hormone exposure selects which paired embryonic duct persists',
    steps: [
      { label: 'Both duct systems coexist early' },
      { label: 'AMH determines Müllerian persistence or regression' },
      { label: 'Testosterone determines Wolffian persistence or regression', emphasis: 'key' },
      { label: 'Persisting ducts differentiate into internal genital organs' },
    ],
    examFindings: [
      { sign: 'Uterus absent with functioning testes', mechanism: 'AMH signaling has acted despite a possible difference in androgen action', significance: 'supportive' },
      { sign: 'Persistent Müllerian structures in a 46,XY individual', mechanism: 'Suggests impaired AMH production or receptor signaling', significance: 'key' },
    ],
    investigations: [
      { clue: 'Pelvic ultrasound or MRI', meaning: 'Defines internal reproductive anatomy' },
      { clue: 'AMH, testosterone and targeted genetic testing', meaning: 'Tests the signaling pathways that direct duct development' },
    ],
    treatment: [
      { logic: 'Treat the person, not the diagram', detail: 'Management depends on anatomy, gonadal function, symptoms, fertility goals and malignancy risk—not chromosome label alone.' },
    ],
    mnemonic: { hook: 'Müllerian makes the middle', expansion: ['Tubes', 'Uterus', 'Upper vagina'] },
    trap: {
      questionCategory: 'Embryologic derivatives',
      wrongInstinct: 'The lower vagina is a Müllerian duct derivative',
      rightAnswer: 'The upper vagina is Müllerian; the lower vagina develops from the urogenital sinus',
      why: 'The vaginal canal has dual embryologic origin.',
    },
    quiz: {
      stem: 'Which structure is derived from the mesonephric duct?',
      options: ['Uterine tube', 'Uterus', 'Ductus deferens', 'Lower vagina'],
      answer: 2,
      explanation: 'The ductus deferens is a mesonephric duct derivative maintained by testosterone.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-external-genital-differentiation',
    title: 'External Genital Differentiation & Homologues',
    source: l17,
    tags: [
      { kind: 'mechanism', label: 'DHT-dependent differentiation' },
      { kind: 'exam', label: 'Genital tubercle, folds and swellings' },
    ],
    highYield: [
      'The **genital tubercle, urethral folds and labioscrotal swellings** are common indifferent primordia.',
      '**DHT promotes elongation of the genital tubercle, fusion of urethral folds and fusion of labioscrotal swellings** during typical male development.',
      'Without strong androgen action, the same primordia form the clitoris, labia minora and labia majora; the urogenital groove remains open as the vestibule.',
      'Homologous structures share an embryonic origin: penis–clitoris, scrotum–labia majora, and bulbourethral–greater vestibular glands.',
    ],
    chainTitle: 'Local androgen signaling remodels shared primordia into external genital structures',
    steps: [
      { label: 'Indifferent genital tubercle, folds and swellings form' },
      { label: 'Testosterone is converted to DHT in target tissue', emphasis: 'key' },
      { label: 'Androgen receptor signaling alters growth and fusion' },
      { label: 'External genital phenotype differentiates' },
    ],
    examFindings: [
      { sign: 'Hypospadias', mechanism: 'Incomplete ventral urethral-fold fusion places the meatus proximally', significance: 'key' },
      { sign: 'Typical external female anatomy with absent uterus', mechanism: 'Can occur when AMH acted but androgen action did not', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Careful anatomic examination with consent', meaning: 'Defines features without stigmatizing language or unnecessary repetition' },
      { clue: 'Electrolytes and urgent endocrine assessment in a sick newborn', meaning: 'Detects salt-wasting congenital adrenal hyperplasia, a medical emergency' },
    ],
    treatment: [
      { logic: 'Prioritize medical stability and shared decision-making', detail: 'Avoid non-urgent irreversible decisions until adequate multidisciplinary evaluation and informed participation are possible.' },
    ],
    mnemonic: { hook: 'Tubercle, folds, swellings', expansion: ['Penis/clitoris', 'Ventral urethra/labia minora', 'Scrotum/labia majora'] },
    trap: {
      questionCategory: 'External differentiation',
      wrongInstinct: 'Testosterone directly controls all external masculinization',
      rightAnswer: 'DHT is the principal androgen for external genital and prostate differentiation',
      why: '5α-reductase converts testosterone to more potent DHT in target tissues.',
    },
    quiz: {
      stem: 'Which hormone most directly drives typical male external genital differentiation?',
      options: ['AMH', 'DHT', 'FSH', 'Prolactin'],
      answer: 1,
      explanation: 'DHT acting through the androgen receptor drives fusion and growth of the external genital primordia.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-gonadal-descent',
    title: 'Gonadal Descent, Gubernaculum & Processus Vaginalis',
    source: l17,
    tags: [
      { kind: 'mechanism', label: 'Testicular and ovarian descent' },
      { kind: 'exam', label: 'Cryptorchidism and hydrocele' },
    ],
    highYield: [
      '**Testes descend from the posterior abdominal wall toward the deep ring, through the inguinal canal and into the scrotum** under hormonal and mechanical influences.',
      'The gubernaculum guides descent; **the processus vaginalis precedes the testis and normally closes, leaving the tunica vaginalis**.',
      'Failure of processus vaginalis closure permits an indirect inguinal hernia or communicating hydrocele.',
      'Ovarian descent stops in the pelvis; the gubernaculum becomes the ovarian ligament and round ligament of the uterus after attachment to the uterus.',
    ],
    chainTitle: 'Gubernacular guidance and inguinal passage position the gonads',
    steps: [
      { label: 'Gonad forms high on the posterior abdominal wall' },
      { label: 'Gubernaculum links gonad to labioscrotal region' },
      { label: 'Processus vaginalis opens the inguinal path', emphasis: 'key' },
      { label: 'Testis reaches scrotum and the tract normally closes' },
    ],
    examFindings: [
      { sign: 'Empty hemiscrotum with testis along descent path', mechanism: 'Undescended testis has arrested before the scrotum', significance: 'key' },
      { sign: 'Fluctuating scrotal swelling', mechanism: 'A patent processus vaginalis may communicate with the peritoneal cavity', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Focused examination of both testes', meaning: 'Distinguishes retractile, palpable undescended and nonpalpable testes' },
      { clue: 'Surgical specialist assessment', meaning: 'Clinical localization and timely management matter more than routine imaging for a typical undescended testis' },
    ],
    treatment: [
      { logic: 'Correct persistent cryptorchidism early', detail: 'Timely orchiopexy supports fertility potential and surveillance; acute pain requires urgent evaluation for torsion.' },
    ],
    mnemonic: { hook: 'Patent passage, hernia passage', expansion: ['Processus vaginalis normally closes'] },
    trap: {
      questionCategory: 'Gonadal descent',
      wrongInstinct: 'The ovarian ligament and round ligament have unrelated origins',
      rightAnswer: 'Both are remnants of the female gubernaculum separated by uterine attachment',
      why: 'The uterus interrupts the gubernacular band during ovarian descent.',
    },
    quiz: {
      stem: 'Persistence of the processus vaginalis most directly predisposes to which condition?',
      options: ['Direct inguinal hernia', 'Indirect inguinal hernia', 'Femoral hernia', 'Uterine prolapse'],
      answer: 1,
      explanation: 'A patent processus vaginalis provides a congenital route for an indirect inguinal hernia.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-dsd-reproductive-anomalies',
    title: 'Differences of Sex Development & Reproductive Anomalies',
    source: l17,
    tags: [
      { kind: 'mechanism', label: 'Genes, hormones, receptors and anatomy' },
      { kind: 'exam', label: 'AIS, Müllerian anomalies and urethral defects' },
    ],
    highYield: [
      '**Differences of sex development (DSD)** arise when chromosomal, gonadal, hormonal, receptor or anatomic pathways differ from typical development.',
      '**Complete androgen insensitivity usually produces testes, AMH-mediated absence of Müllerian structures, and typical female external anatomy** because tissues cannot respond to androgens.',
      'Müllerian fusion or canalization differences may produce uterine anomalies; urinary tract anomalies can coexist because the systems develop closely.',
      'Hypospadias, epispadias, cryptorchidism and congenital adrenal hyperplasia have distinct mechanisms and must not be collapsed into one diagnosis.',
    ],
    chainTitle: 'Locate the developmental step before naming the condition',
    steps: [
      { label: 'Define chromosomes and gonadal tissue' },
      { label: 'Map internal ducts and external anatomy' },
      { label: 'Test hormone production and receptor response', emphasis: 'key' },
      { label: 'Integrate findings with the person’s health and goals' },
    ],
    examFindings: [
      { sign: 'Typical female external anatomy, absent uterus and inguinal gonad', mechanism: 'Pattern suggests complete androgen insensitivity', significance: 'key' },
      { sign: 'Hypospadias with undescended testis', mechanism: 'Combined findings warrant assessment for a broader DSD rather than isolated repair', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Electrolytes, glucose and 17-hydroxyprogesterone when CAH is possible', meaning: 'Rapidly detects potentially life-threatening adrenal insufficiency' },
      { clue: 'Ultrasound, hormone testing and targeted genetics', meaning: 'Localizes the difference within the developmental pathway' },
    ],
    treatment: [
      { logic: 'Use respectful multidisciplinary care', detail: 'Address urgent endocrine or surgical problems, disclose information honestly, and support informed, autonomy-preserving long-term decisions.' },
    ],
    mnemonic: { hook: 'Chromosome → gonad → hormone → receptor → anatomy', expansion: ['Trace the pathway in order'] },
    trap: {
      questionCategory: 'DSD reasoning',
      wrongInstinct: 'External appearance alone identifies chromosomes and internal organs',
      rightAnswer: 'Each developmental layer must be assessed separately',
      why: 'Hormone synthesis or receptor differences can uncouple internal and external development.',
    },
    quiz: {
      stem: 'Which finding is most consistent with complete androgen insensitivity?',
      options: ['Uterus with high androgen response', 'Absent uterus with typical female external anatomy', 'Patent Müllerian ducts with normal androgen response', 'Salt wasting caused by excess AMH'],
      answer: 1,
      explanation: 'Testicular AMH removes Müllerian structures, while androgen-receptor resistance prevents typical male external differentiation.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-semen-composition-collection',
    title: 'Semen Composition, Fractions & Specimen Collection',
    source: l18,
    tags: [
      { kind: 'investigation', label: 'Standardized semen collection' },
      { kind: 'mechanism', label: 'Accessory gland contributions' },
    ],
    highYield: [
      'Semen combines **sperm-rich testicular/epididymal fluid with secretions from seminal vesicles, prostate and bulbourethral glands**.',
      '**Seminal vesicles contribute much of the volume and fructose-rich alkaline fluid**; prostate contributes enzymes, citrate and zinc.',
      'A semen analysis is highly pre-analytic: follow the laboratory’s abstinence interval, collect the complete specimen, record timing and losses, and keep transport conditions controlled.',
      'A single result varies within an individual and cannot by itself prove fertility or infertility.',
    ],
    chainTitle: 'Standardized collection preserves a specimen that reflects all ejaculatory fractions',
    steps: [
      { label: 'Follow the laboratory’s abstinence and collection instructions' },
      { label: 'Collect the entire ejaculate in an appropriate container', emphasis: 'key' },
      { label: 'Record time, completeness and relevant exposures' },
      { label: 'Deliver promptly under controlled conditions' },
    ],
    examFindings: [
      { sign: 'Missing first fraction', mechanism: 'The sperm-rich portion may be lost, falsely lowering concentration and total count', significance: 'key' },
      { sign: 'Low-volume acidic semen with absent fructose', mechanism: 'Raises concern for ejaculatory-duct obstruction or absent seminal-vesicle contribution', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Collection history on the report', meaning: 'Determines whether apparent abnormality may be pre-analytic' },
      { clue: 'Repeat semen analysis under standardized conditions', meaning: 'Assesses biological variability before a firm conclusion' },
    ],
    treatment: [
      { logic: 'Correct collection problems before escalating the work-up', detail: 'An incomplete or delayed specimen can mimic male-factor infertility.' },
    ],
    mnemonic: { hook: 'Complete, clocked, controlled', expansion: ['Complete specimen', 'Record the time', 'Control transport'] },
    trap: {
      questionCategory: 'Pre-analytic error',
      wrongInstinct: 'Any low count reflects impaired spermatogenesis',
      rightAnswer: 'First exclude incomplete collection, abstinence mismatch and transport delay',
      why: 'Semen parameters are especially sensitive to collection conditions.',
    },
    quiz: {
      stem: 'Why is loss of the first ejaculatory fraction important?',
      options: ['It falsely raises sperm count', 'It may remove the sperm-rich portion', 'It prevents liquefaction in every case', 'It proves obstruction'],
      answer: 1,
      explanation: 'The early fraction is relatively sperm-rich, so its loss can artifactually lower measured sperm numbers.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-semen-macroscopic-chemistry',
    title: 'Macroscopic & Biochemical Semen Assessment',
    source: l18,
    tags: [
      { kind: 'investigation', label: 'Volume, liquefaction, viscosity and pH' },
      { kind: 'exam', label: 'Fructose and gland function' },
    ],
    highYield: [
      'Initial examination records **appearance, volume, liquefaction and viscosity** before microscopy.',
      'Coagulation after ejaculation is followed by **prostatic enzyme-mediated liquefaction**; persistent hyperviscosity can impair reliable analysis and sperm movement.',
      'Seminal-vesicle alkaline secretion usually predominates in pH, while prostatic fluid is relatively acidic.',
      'Volume, pH and fructose patterns can suggest gland or duct dysfunction, but findings require clinical correlation.',
    ],
    chainTitle: 'Accessory-gland secretions determine the specimen’s gross and chemical profile',
    steps: [
      { label: 'Measure the complete specimen volume' },
      { label: 'Observe coagulation and liquefaction' },
      { label: 'Assess viscosity and pH', emphasis: 'key' },
      { label: 'Use targeted biochemical tests when indicated' },
    ],
    examFindings: [
      { sign: 'Persistently viscous, incompletely liquefied sample', mechanism: 'May hinder motility assessment and sperm progression', significance: 'supportive' },
      { sign: 'Low volume, acidic pH and low/absent fructose', mechanism: 'Suggests absent or obstructed seminal-vesicle contribution', significance: 'key' },
    ],
    investigations: [
      { clue: 'Gross examination before dilution', meaning: 'Preserves valid volume, viscosity and liquefaction observations' },
      { clue: 'Seminal fructose when obstruction is suspected', meaning: 'Assesses seminal-vesicle contribution in clinical context' },
    ],
    treatment: [
      { logic: 'Interpret patterns rather than isolated numbers', detail: 'History, examination, repeat testing and imaging may be needed to distinguish collection error from gland or duct pathology.' },
    ],
    mnemonic: { hook: 'Volume, viscosity, pH', expansion: ['The macroscopic triad before microscopy'] },
    trap: {
      questionCategory: 'Semen chemistry',
      wrongInstinct: 'An abnormal pH alone identifies the exact lesion',
      rightAnswer: 'Combine pH with volume, fructose, sperm findings and clinical context',
      why: 'Multiple gland contributions and pre-analytic factors affect seminal pH.',
    },
    quiz: {
      stem: 'Which gland contributes most seminal fructose?',
      options: ['Seminal vesicle', 'Prostate', 'Testis', 'Bulbourethral gland'],
      answer: 0,
      explanation: 'Seminal vesicles contribute fructose-rich fluid that supports sperm metabolism.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-semen-concentration-motility',
    title: 'Sperm Concentration, Total Count, Motility & Vitality',
    source: l18,
    tags: [
      { kind: 'investigation', label: 'Microscopic semen analysis' },
      { kind: 'exam', label: 'Count, motility and vitality' },
    ],
    highYield: [
      'Concentration is sperm per unit volume; **total sperm number is concentration multiplied by ejaculate volume**.',
      'A **validated counting chamber and proper dilution/mixing are essential** because sampling error is magnified in heterogeneous specimens.',
      'Motility is categorized by movement pattern; vitality tests membrane integrity and is especially useful when many sperm are immotile.',
      'WHO lower reference limits describe a fertile reference population; they are not sharp diagnostic boundaries between fertile and infertile.',
    ],
    chainTitle: 'Representative sampling converts a heterogeneous specimen into interpretable counts',
    steps: [
      { label: 'Mix and sample the liquefied specimen correctly' },
      { label: 'Count sperm in a validated chamber' },
      { label: 'Calculate concentration and total number', emphasis: 'key' },
      { label: 'Assess motility promptly and vitality when indicated' },
    ],
    examFindings: [
      { sign: 'Low concentration with normal volume', mechanism: 'May reflect reduced production or partial loss, but requires confirmation', significance: 'supportive' },
      { sign: 'Low motility with preserved vitality', mechanism: 'Sperm are alive but movement is impaired', significance: 'key' },
    ],
    investigations: [
      { clue: 'Duplicate counts meeting quality-control criteria', meaning: 'Reduces sampling and observer error' },
      { clue: 'Vitality testing when immotility is prominent', meaning: 'Distinguishes immotile living sperm from dead sperm' },
    ],
    treatment: [
      { logic: 'Repeat and contextualize an abnormal result', detail: 'Fever, medications, toxins, abstinence, collection and the spermatogenic cycle can all influence findings.' },
    ],
    mnemonic: { hook: 'Concentration × volume = total', expansion: ['Do not confuse density with total sperm number'] },
    trap: {
      questionCategory: 'Reference limits',
      wrongInstinct: 'One value below a lower reference limit proves sterility',
      rightAnswer: 'Reference limits estimate distribution and must be integrated with repeat testing and the couple’s context',
      why: 'Fertile and subfertile populations overlap across semen parameters.',
    },
    quiz: {
      stem: 'Which calculation gives total sperm number?',
      options: ['Concentration divided by volume', 'Concentration multiplied by volume', 'Motility multiplied by pH', 'Vitality divided by viscosity'],
      answer: 1,
      explanation: 'Total number equals sperm concentration per unit volume multiplied by the ejaculate volume.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-semen-morphology-interpretation',
    title: 'Sperm Morphology & Integrated Semen Interpretation',
    source: l18,
    tags: [
      { kind: 'investigation', label: 'Morphology and inflammatory findings' },
      { kind: 'exam', label: 'Integrated fertility interpretation' },
    ],
    highYield: [
      'Morphology evaluates **head, midpiece and tail** using standardized strict criteria and quality-controlled staining.',
      'Agglutination can suggest antisperm antibodies but is not diagnostic; **round cells require differentiation because leukocytes and immature germ cells have different meanings**.',
      'Interpret volume, count, motility, vitality and morphology together, considering collection quality, illness, exposures, examination and partner factors.',
      'No routine semen parameter alone divides people cleanly into fertile and infertile groups; repeated abnormalities guide a targeted evaluation.',
    ],
    chainTitle: 'A pattern across parameters is more informative than one isolated label',
    steps: [
      { label: 'Confirm specimen and analytic quality' },
      { label: 'Review count, motility, vitality and morphology together', emphasis: 'key' },
      { label: 'Differentiate leukocytes, germ cells and agglutination' },
      { label: 'Repeat when appropriate and investigate the clinical pattern' },
    ],
    examFindings: [
      { sign: 'Many round cells', mechanism: 'May represent leukocytes or immature germ cells and requires differentiation', significance: 'supportive' },
      { sign: 'Multiple abnormal parameters on repeat samples', mechanism: 'Raises the likelihood of clinically important male-factor subfertility', significance: 'key' },
    ],
    investigations: [
      { clue: 'Hormonal testing and examination when production appears impaired', meaning: 'Distinguishes testicular from hypothalamic–pituitary patterns' },
      { clue: 'Genetic testing for selected severe abnormalities', meaning: 'Identifies causes relevant to health, counseling and assisted reproduction' },
    ],
    treatment: [
      { logic: 'Direct therapy at the cause and reproductive goals', detail: 'Options range from exposure modification and endocrine/urologic treatment to assisted reproductive techniques.' },
    ],
    mnemonic: { hook: 'Sample, pattern, repeat, explain', expansion: ['Quality first', 'Integrate parameters', 'Confirm variation', 'Counsel without binary labels'] },
    trap: {
      questionCategory: 'Fertility interpretation',
      wrongInstinct: 'Normal morphology guarantees fertility',
      rightAnswer: 'Morphology is one probabilistic parameter within a couple-level assessment',
      why: 'Fertility depends on many sperm, reproductive-tract, timing and partner factors.',
    },
    quiz: {
      stem: 'Which is the best interpretation of a single abnormal semen analysis?',
      options: ['It proves permanent sterility', 'It should be contextualized and usually confirmed under standardized conditions', 'It identifies the exact gene defect', 'It excludes partner factors'],
      answer: 1,
      explanation: 'Semen parameters vary and are influenced by collection, illness and exposures, so confirmation and clinical context are essential.',
    },
  }),
];
