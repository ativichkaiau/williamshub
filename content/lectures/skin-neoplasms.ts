import type { Lecture } from '../../lib/types';

export const skinNeoplasms: Lecture = {
  id: 'skin-neoplasms',
  title: 'Skin Neoplasms',
  system: 'derm',
  source: 'L18 — Skin Neoplasms',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L18 Skin Neoplasms' },
    { kind: 'mechanism', label: 'BCC, SCC & melanoma' },
    { kind: 'exam', label: 'ABCDE; UV risk' },
  ],

  highYield: [
    '**Skin cancer is driven mainly by cumulative UV exposure and is the commonest human cancer, divided into NON-MELANOMA (basal cell and squamous cell carcinoma — very common, rarely fatal) and MELANOMA (less common but the major killer). Fair skin, sun exposure/burns, immunosuppression and prior skin cancer raise risk; PREVENTION is photoprotection.**',
    '**BASAL CELL CARCINOMA (BCC) is the COMMONEST skin cancer: a slow-growing PEARLY, translucent PAPULE/nodule with ROLLED borders, TELANGIECTASIA and central ulceration ("rodent ulcer") on sun-exposed skin (face). It is LOCALLY invasive but almost NEVER metastasises — treated by excision; prognosis excellent. Actinic keratoses (scaly premalignant patches) can progress to SCC.**',
    '**SQUAMOUS CELL CARCINOMA (SCC): a firm, scaly/keratotic or ulcerated nodule on sun-damaged skin, lips or scars/chronic wounds; arises from actinic keratosis/Bowen disease (SCC in situ). SCC CAN metastasise (more so on lip/ear, in immunosuppressed, or in scars) — so it needs excision and follow-up. Keratoacanthoma is a rapidly growing crateriform variant.**',
    '**MELANOMA — apply the ABCDE rule to a pigmented lesion: Asymmetry, Border irregularity, Colour variation, Diameter >6 mm, EVOLUTION/change (the most important). The single strongest PROGNOSTIC factor is BRESLOW THICKNESS (depth of invasion). Subtypes: superficial spreading (commonest), nodular (aggressive), lentigo maligna (elderly sun-damaged face), acral lentiginous (palms/soles/nails — commonest in darker skin, not sun-related). Early excision is curative; deep/metastatic disease needs oncology (immunotherapy/targeted).**',
    '**The take-home: BCC (commonest, pearly/rolled/telangiectasia, rarely metastasises), SCC (scaly/ulcerated on sun-damaged skin, CAN metastasise, from actinic keratosis), MELANOMA (ABCDE, prognosis by Breslow depth, evolution is key). Photoprotection prevents; a changing pigmented lesion needs urgent assessment.** UV carcinogenesis links to [[skin-aging]]; the cell layers of origin are in [[skin-anatomy-histology]]; general antineoplastic therapy is BCP ([[antineoplastic-principles]]).',
  ],

  mechanism: {
    title: 'UV-driven: BCC (pearly, rarely metastasises), SCC (scaly, can metastasise, from AK), melanoma (ABCDE, Breslow depth)',
    steps: [
      { id: 's1', label: 'UV cumulative exposure → non-melanoma (BCC/SCC) + melanoma; photoprotection prevents', emphasis: 'key' },
      { id: 's2', label: 'BCC = commonest; pearly papule + rolled border + telangiectasia; rarely metastasises', emphasis: 'key' },
      { id: 's3', label: 'SCC = scaly/ulcerated on sun-damaged skin/lip; from actinic keratosis; CAN metastasise', emphasis: 'key' },
      { id: 's4', label: 'Melanoma ABCDE (Evolution key); prognosis by BRESLOW thickness', emphasis: 'danger' },
      { id: 's5', label: 'Acral lentiginous melanoma = palms/soles/nails (darker skin, not sun-related)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Pearly papule with rolled edge, telangiectasia and central ulcer on the face', mechanism: 'Basal cell carcinoma (rarely metastasises)', significance: 'key' },
    { sign: 'Firm scaly/ulcerated nodule on the lip or sun-damaged skin', mechanism: 'Squamous cell carcinoma (can metastasise)', significance: 'key' },
    { sign: 'A pigmented lesion that is asymmetric, irregular, multicoloured and changing', mechanism: 'Melanoma (ABCDE)', significance: 'key' },
    { sign: 'A pigmented streak/lesion on the sole or under a nail', mechanism: 'Acral lentiginous melanoma', significance: 'key' },
    { sign: 'Scaly premalignant patches on chronically sun-exposed skin', mechanism: 'Actinic keratoses (→ SCC risk)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The commonest skin cancer (pearly, rarely metastasises)', meaning: 'Basal cell carcinoma' },
    { clue: 'The skin cancer arising from actinic keratosis that can metastasise', meaning: 'Squamous cell carcinoma' },
    { clue: 'The mnemonic for suspicious pigmented lesions', meaning: 'ABCDE (Asymmetry, Border, Colour, Diameter, Evolution)' },
    { clue: 'The strongest prognostic factor in melanoma', meaning: 'Breslow thickness (depth)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Distinguishing the three main skin cancers guides urgency and treatment: BCC is common and rarely metastasises (excision, excellent prognosis), SCC can metastasise (excision + follow-up, treat actinic keratoses), and melanoma is the killer where early excision is curative but depth (Breslow) determines prognosis — a changing pigmented lesion (ABCDE, especially Evolution) needs urgent assessment. Prevention is photoprotection ([[skin-aging]]); advanced disease uses oncologic therapy ([[antineoplastic-principles]]).' },
  ],

  mnemonics: [
    { hook: '"BCC = pearly/rolled/telangiectasia, rarely spreads; SCC = scaly/ulcer, from AK, CAN spread"', expansion: ['BCC = commonest', 'SCC worse on lip/ear/immunosuppressed'] },
    { hook: 'Melanoma "ABCDE" — Evolution is key; prognosis = Breslow depth', expansion: ['Acral = palms/soles/nails (darker skin)', 'Superficial spreading commonest'] },
  ],

  traps: [
    {
      questionCategory: 'Metastatic potential of BCC vs SCC vs melanoma',
      wrongInstinct: 'All skin cancers carry a similar risk of spreading and death',
      rightAnswer: 'Their behaviour differs greatly: BASAL cell carcinoma is locally invasive but almost NEVER metastasises (excellent prognosis); SQUAMOUS cell carcinoma CAN metastasise (especially on lip/ear, in scars or immunosuppression); and MELANOMA is the one that readily metastasises and kills, with prognosis set by Breslow depth — so a changing pigmented lesion is the true red flag',
      why: 'Triaging by metastatic potential (BCC low, SCC moderate, melanoma high) focuses urgency on melanoma and higher-risk SCC, rather than treating all skin lesions as equally dangerous or equally benign.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A slow-growing pearly papule with a rolled border, surface telangiectasia and central ulceration on the face is most likely:',
      options: [
        { id: 'a', text: 'Squamous cell carcinoma' },
        { id: 'b', text: 'Basal cell carcinoma' },
        { id: 'c', text: 'Melanoma' },
        { id: 'd', text: 'Seborrhoeic keratosis' },
      ],
      answerId: 'b',
      explanation: 'A pearly, translucent papule with rolled edges, telangiectasia and central ulceration ("rodent ulcer") on sun-exposed skin is a basal cell carcinoma — the commonest skin cancer, locally invasive but almost never metastasising, treated by excision.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The single most important prognostic factor for a primary cutaneous melanoma is:',
      options: [
        { id: 'a', text: 'The colour of the lesion' },
        { id: 'b', text: 'Breslow thickness (depth of invasion)' },
        { id: 'c', text: 'The diameter alone' },
        { id: 'd', text: 'The patient\'s age' },
      ],
      answerId: 'b',
      explanation: 'Breslow thickness — the depth of tumour invasion measured histologically — is the strongest prognostic factor in primary melanoma and guides staging and management. The ABCDE features (especially Evolution/change) help identify suspicious lesions for early excision, which is curative when thin.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default skinNeoplasms;
