import type { Lecture } from '../../lib/types';

export const keratinocyteCarcinomas: Lecture = {
  id: 'keratinocyte-carcinomas',
  title: 'Keratinocyte Carcinomas (BCC & SCC)',
  system: 'derm',
  source: 'L18 — Skin Neoplasms',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L18 BCC/SCC' },
    { kind: 'mechanism', label: 'Non-melanoma skin cancer' },
    { kind: 'exam', label: 'Pearly BCC vs scaly SCC; AK' },
  ],

  highYield: [
    'KERATINOCYTE (non-melanoma) skin cancers are the COMMONEST human cancers, driven by cumulative UV. BASAL CELL CARCINOMA (BCC) is the commonest: a slow-growing PEARLY, translucent papule/nodule with ROLLED edges, surface TELANGIECTASIA and central ulceration ("rodent ulcer") on sun-exposed skin (face). It is LOCALLY invasive but almost NEVER metastasises → excellent prognosis with excision.',
    'SQUAMOUS CELL CARCINOMA (SCC): a firm, scaly/keratotic or ulcerated nodule on sun-damaged skin, lips, ears or in scars/chronic wounds (Marjolin ulcer). Unlike BCC, SCC CAN METASTASISE — higher risk on the lip/ear, in immunosuppressed (transplant) patients, and in scars — so it needs excision and follow-up. It arises from precursors: ACTINIC KERATOSIS and BOWEN disease (SCC in situ).',
    'PRECURSORS/field change: ACTINIC (solar) KERATOSES are rough, scaly patches on chronically sun-exposed skin that can progress to SCC — treated with cryotherapy, topical 5-fluorouracil or imiquimod (field therapy). Chronic UV damage produces multiple lesions ("field cancerisation"), so treat the field and survey for new cancers.',
    'MANAGEMENT: excision (with margins) is standard; Mohs micrographic surgery for high-risk/facial sites; superficial BCCs can be treated topically/with cryotherapy; radiotherapy for non-surgical candidates; advanced BCC uses hedgehog-pathway inhibitors. RISK factors: fair skin, cumulative UV, immunosuppression (especially SCC), prior skin cancer, and genetic syndromes.',
    '**The take-home: BCC (commonest; pearly/rolled/telangiectasia; rarely metastasises; excise) vs SCC (scaly/ulcerated on sun-damaged skin/lip/scar; CAN metastasise — worse in immunosuppressed; from actinic keratosis/Bowen); treat actinic keratoses to prevent SCC; excision ± Mohs. UV is the driver → photoprotection.** Melanoma is in [[melanoma-clinical]]; the overview is [[skin-neoplasms]]; prevention is [[photoaging-photoprotection]].',
  ],

  mechanism: {
    title: 'UV-driven keratinocyte cancers: BCC (pearly, rarely metastasises) vs SCC (scaly/ulcerated, CAN metastasise, from actinic keratosis; worse if immunosuppressed)',
    steps: [
      { id: 's1', label: 'Keratinocyte cancers = commonest human cancers (cumulative UV)', emphasis: 'key' },
      { id: 's2', label: 'BCC (commonest): pearly papule + rolled border + telangiectasia; rarely metastasises', emphasis: 'key' },
      { id: 's3', label: 'SCC: scaly/ulcerated on sun-damaged skin/lip/scar; CAN metastasise (worse if immunosuppressed)', emphasis: 'danger' },
      { id: 's4', label: 'SCC precursors: actinic keratosis, Bowen disease (in situ) → treat the field', emphasis: 'key' },
      { id: 's5', label: 'Excision ± Mohs (high-risk/facial); topical/cryo for superficial; photoprotection', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Pearly papule with rolled edge, telangiectasia and central ulcer on the face', mechanism: 'Basal cell carcinoma (rarely metastasises)', significance: 'key' },
    { sign: 'Firm scaly/ulcerated nodule on the lip or ear', mechanism: 'Squamous cell carcinoma (can metastasise)', significance: 'key' },
    { sign: 'Rough scaly premalignant patches on sun-exposed skin', mechanism: 'Actinic keratoses (→ SCC risk)', significance: 'key' },
    { sign: 'Multiple aggressive SCCs in a transplant recipient', mechanism: 'Immunosuppression (higher SCC risk/metastasis)', significance: 'key' },
    { sign: 'A non-healing SCC arising in a chronic scar/wound', mechanism: 'Marjolin ulcer', significance: 'key' },
  ],

  investigations: [
    { clue: 'The commonest skin cancer (pearly, rarely metastasises)', meaning: 'Basal cell carcinoma' },
    { clue: 'The keratinocyte cancer that can metastasise', meaning: 'Squamous cell carcinoma' },
    { clue: 'The scaly precursor lesion of SCC', meaning: 'Actinic (solar) keratosis (and Bowen disease in situ)' },
    { clue: 'The patient group with higher SCC risk/aggressiveness', meaning: 'Immunosuppressed (e.g. transplant recipients)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Distinguishing BCC (common, rarely metastasises, excellent prognosis) from SCC (can metastasise — worse on lip/ear, in scars and immunosuppression) directs urgency and follow-up, while treating actinic keratoses/Bowen disease prevents progression to SCC. Excision ± Mohs is standard, with topical/cryotherapy for superficial lesions. UV is the driver, so photoprotection ([[photoaging-photoprotection]]) is preventive. Melanoma is in [[melanoma-clinical]]; overview [[skin-neoplasms]].' },
  ],

  mnemonics: [
    { hook: '"BCC = pearly/rolled/telangiectasia, rarely spreads; SCC = scaly/ulcer, from AK, CAN spread"', expansion: ['BCC = commonest', 'SCC worse: lip/ear/scar/immunosuppressed'] },
    { hook: '"Treat actinic keratoses (field) → prevent SCC"', expansion: ['Mohs for high-risk/facial', 'UV driver → photoprotect'] },
  ],

  traps: [
    {
      questionCategory: 'Metastatic potential of BCC vs SCC',
      wrongInstinct: 'Basal cell and squamous cell carcinomas behave similarly and carry the same metastatic risk',
      rightAnswer: 'They differ importantly: BASAL cell carcinoma is locally invasive but almost NEVER metastasises (excellent prognosis with excision), whereas SQUAMOUS cell carcinoma CAN metastasise — especially on the lip/ear, in scars/chronic wounds, and in IMMUNOSUPPRESSED patients — so SCC needs more vigilant treatment and follow-up',
      why: 'Triaging by metastatic potential (BCC low, SCC moderate/higher in high-risk sites and immunosuppression) focuses follow-up and urgency appropriately rather than treating both identically.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A slow-growing pearly papule with a rolled border, telangiectasia and central ulceration on the face is most likely:',
      options: [
        { id: 'a', text: 'Squamous cell carcinoma' },
        { id: 'b', text: 'Basal cell carcinoma' },
        { id: 'c', text: 'Melanoma' },
        { id: 'd', text: 'Actinic keratosis' },
      ],
      answerId: 'b',
      explanation: 'A pearly, translucent papule with rolled edges, surface telangiectasia and central ulceration ("rodent ulcer") on sun-exposed skin is a basal cell carcinoma — the commonest skin cancer, locally invasive but almost never metastasising, treated by excision.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Compared with basal cell carcinoma, squamous cell carcinoma:',
      options: [
        { id: 'a', text: 'Never metastasises' },
        { id: 'b', text: 'Can metastasise, especially on the lip/ear, in scars or in immunosuppressed patients' },
        { id: 'c', text: 'Is always benign' },
        { id: 'd', text: 'Only occurs in children' },
      ],
      answerId: 'b',
      explanation: 'Unlike BCC (which rarely metastasises), squamous cell carcinoma can metastasise — the risk is higher on the lip/ear, in scars/chronic wounds (Marjolin ulcer) and in immunosuppressed (transplant) patients — so SCC warrants prompt excision and follow-up. It arises from actinic keratosis/Bowen disease.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default keratinocyteCarcinomas;
