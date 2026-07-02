import type { Lecture } from '../../lib/types';

export const neoplasiaDifferentiationInvasion: Lecture = {
  id: 'neoplasia-differentiation-invasion',
  title: 'Benign vs Malignant: Differentiation & Invasion',
  system: 'pathology',
  source: 'L7 — Neoplasm',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pathology' },
    { kind: 'lecture', label: 'L7 Differentiation' },
    { kind: 'mechanism', label: 'Anaplasia; invasion; metastasis' },
    { kind: 'exam', label: 'Benign vs malignant features' },
  ],

  highYield: [
    '**BENIGN and MALIGNANT tumours are distinguished by four features: DIFFERENTIATION/anaplasia, RATE of growth, LOCAL INVASION, and METASTASIS (the single most reliable sign of malignancy). BENIGN: well differentiated (resembles normal tissue), slow-growing, well-circumscribed/ENCAPSULATED and non-invasive, does NOT metastasise. MALIGNANT: variably differentiated to ANAPLASTIC, faster/erratic growth, INVASIVE with irregular margins, and capable of METASTASIS.**',
    '**DIFFERENTIATION is how closely tumour cells resemble their normal counterparts (functionally and morphologically); ANAPLASIA ("to form backward") is its complete loss — the hallmark of malignancy. Features of anaplasia: PLEOMORPHISM (variation in cell/nuclear size and shape), abnormal NUCLEI (enlarged, HYPERCHROMATIC, high nuclear:cytoplasmic ratio, prominent nucleoli), abundant and ATYPICAL (abnormal) MITOSES, and loss of normal POLARITY/architecture. Well-differentiated tumours may retain function (e.g. hormone production).**',
    '**LOCAL INVASION: benign tumours grow by expansion and are often encapsulated, so they are easily excised; malignant tumours INFILTRATE and destroy surrounding tissue with no capsule (crab-like), making complete removal harder and recurrence more likely. Invasion — breaching the BASEMENT MEMBRANE and extracellular matrix — is second only to metastasis as a marker of malignancy and precedes it.**',
    '**On the spectrum: normal → hyperplasia/metaplasia → DYSPLASIA (disordered, atypical, but confined by basement membrane — pre-invasive) → CARCINOMA IN SITU (full-thickness dysplasia, still confined) → INVASIVE carcinoma (breaches basement membrane, can metastasise). Recognising these features on biopsy determines whether a lesion is benign, pre-malignant or malignant — the pathologist\'s central task.**',
    '**The take-home: benign vs malignant by DIFFERENTIATION (benign well-differentiated; malignant → ANAPLASIA: pleomorphism, hyperchromatic nuclei, atypical mitoses), GROWTH RATE, LOCAL INVASION (benign encapsulated/expansile vs malignant infiltrative), and METASTASIS (the definitive malignant sign). Progression: dysplasia → carcinoma in situ (confined) → invasive (breaches basement membrane).** Nomenclature is [[neoplasia-nomenclature]]; metastasis/staging is [[cancer-spread-staging-clinical]]; dysplasia is [[metaplasia-dysplasia]].',
  ],

  mechanism: {
    title: 'Benign vs malignant by differentiation (benign well-diff; malignant anaplasia — pleomorphism/hyperchromatic nuclei/atypical mitoses), growth rate, local invasion (encapsulated vs infiltrative), metastasis (definitive); dysplasia → carcinoma in situ → invasive',
    steps: [
      { id: 's1', label: 'Four criteria: differentiation, growth rate, local invasion, METASTASIS (most reliable)', emphasis: 'key' },
      { id: 's2', label: 'Benign = well-differentiated, slow, encapsulated, no metastasis', emphasis: 'key' },
      { id: 's3', label: 'Anaplasia = loss of differentiation: pleomorphism, hyperchromatic nuclei, atypical mitoses', emphasis: 'key' },
      { id: 's4', label: 'Malignant = infiltrative/invasive (no capsule) → breaches basement membrane', emphasis: 'danger' },
      { id: 's5', label: 'Spectrum: dysplasia → carcinoma in situ (confined) → invasive (metastatic potential)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'A well-differentiated, encapsulated, slow-growing mass', mechanism: 'Benign tumour', significance: 'key' },
    { sign: 'Marked pleomorphism, hyperchromatic nuclei and atypical mitoses', mechanism: 'Anaplasia (malignancy)', significance: 'key' },
    { sign: 'A tumour infiltrating surrounding tissue with irregular margins', mechanism: 'Local invasion (malignant)', significance: 'key' },
    { sign: 'Tumour deposits in a regional lymph node', mechanism: 'Metastasis — definitive sign of malignancy', significance: 'key' },
    { sign: 'Full-thickness atypia confined by the basement membrane', mechanism: 'Carcinoma in situ (pre-invasive)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The single most reliable feature of malignancy', meaning: 'Metastasis' },
    { clue: 'The complete loss of differentiation', meaning: 'Anaplasia' },
    { clue: 'The margin feature of benign vs malignant', meaning: 'Encapsulated/expansile vs infiltrative' },
    { clue: 'The pre-invasive full-thickness lesion', meaning: 'Carcinoma in situ' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Distinguishing benign from malignant on biopsy — by differentiation/anaplasia, growth rate, invasion and metastasis — is the pathologist\'s central task and sets prognosis and treatment: benign, encapsulated tumours are usually cured by excision, whereas malignant, infiltrative tumours need wider resection and adjuvant therapy because of invasion and metastatic potential. Placing a lesion on the dysplasia → carcinoma in situ → invasive carcinoma spectrum determines whether it is curable pre-invasively or requires cancer treatment. Nomenclature is [[neoplasia-nomenclature]]; spread and staging are [[cancer-spread-staging-clinical]].' },
  ],

  mnemonics: [
    { hook: 'Malignant features: "Anaplasia, Invasion, Metastasis, fast Growth"', expansion: ['Metastasis = definitive', 'Benign = encapsulated/well-diff'] },
    { hook: 'Anaplasia: "Pleomorphism, Hyperchromatic nuclei, Atypical mitoses, high N:C ratio"', expansion: ['Loss of polarity', 'Prominent nucleoli'] },
  ],

  traps: [
    {
      questionCategory: 'The definitive marker of malignancy',
      wrongInstinct: 'A tumour is malignant only if it looks very anaplastic (bizarre cells) under the microscope',
      rightAnswer: 'While anaplasia strongly indicates malignancy, the SINGLE MOST RELIABLE feature that DEFINES malignancy is METASTASIS — the ability to spread to distant sites; some malignant tumours are actually WELL-DIFFERENTIATED (e.g. well-differentiated carcinomas) yet still invade and metastasise, so a benign-looking, well-differentiated appearance does NOT exclude malignancy if there is invasion or metastasis',
      why: 'Relying solely on cytologic anaplasia can misclassify a well-differentiated but invasive/metastasising cancer as benign; metastasis (and invasion) are the behavioural hallmarks that definitively establish malignancy.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which single feature most reliably establishes that a tumour is malignant?',
      options: [
        { id: 'a', text: 'Rapid growth' },
        { id: 'b', text: 'Metastasis to a distant site' },
        { id: 'c', text: 'The presence of a capsule' },
        { id: 'd', text: 'A high cell count' },
      ],
      answerId: 'b',
      explanation: 'Metastasis — spread to distant sites — is the single most reliable feature of malignancy; benign tumours never metastasise. Local invasion is the next most reliable sign. Anaplasia and rapid growth suggest malignancy but well-differentiated cancers can still metastasise.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Anaplasia, the hallmark of malignancy, is characterised by:',
      options: [
        { id: 'a', text: 'Cells that closely resemble their normal counterpart' },
        { id: 'b', text: 'Pleomorphism, hyperchromatic nuclei with high nuclear:cytoplasmic ratio, and atypical mitoses' },
        { id: 'c', text: 'A well-formed capsule' },
        { id: 'd', text: 'Absence of mitotic figures' },
      ],
      answerId: 'b',
      explanation: 'Anaplasia is loss of differentiation, marked by pleomorphism (variation in size/shape), enlarged hyperchromatic nuclei with a high nuclear:cytoplasmic ratio and prominent nucleoli, numerous and atypical mitoses, and loss of normal polarity/architecture.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default neoplasiaDifferentiationInvasion;
