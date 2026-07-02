import type { Lecture } from '../../lib/types';

export const dermatologicInvestigations: Lecture = {
  id: 'dermatologic-investigations',
  title: 'Dermatological Investigations',
  system: 'derm',
  source: 'L1 — Dermatologic Diagnosis',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L1 Skin Investigations' },
    { kind: 'mechanism', label: 'Bedside tests, microscopy & biopsy' },
    { kind: 'exam', label: 'KOH; Wood\'s lamp; biopsy types' },
  ],

  highYield: [
    '**Many skin diagnoses are made or confirmed by simple BEDSIDE tests. KOH microscopy (potassium hydroxide dissolves keratin) shows fungal HYPHAE (dermatophytes) or "spaghetti-and-meatballs" in pityriasis versicolor. WOOD\'S LAMP (UV) accentuates pigment (vitiligo glows), fluoresces some infections (coral-red erythrasma, some tinea capitis) and porphyrins.**',
    '**MICROBIOLOGY: swab/culture for bacterial infection; the TZANCK smear shows multinucleate giant cells in herpes/varicella; DERMOSCOPY (a hand-held magnifier with polarised light) helps distinguish benign from malignant PIGMENTED lesions (melanoma patterns) and other tumours — improving the accuracy of "should I biopsy this?".**',
    '**SKIN BIOPSY confirms histology: PUNCH biopsy (a cylindrical full-thickness core — for inflammatory rashes/small lesions), SHAVE (superficial — for raised/epidermal lesions), and EXCISIONAL (removes the whole lesion with a margin — the choice for suspected MELANOMA to allow accurate Breslow depth). DIRECT IMMUNOFLUORESCENCE on biopsy diagnoses autoimmune blistering/vasculitis.**',
    '**PATCH TESTING identifies the allergen in allergic contact dermatitis (Type IV — read at 48–96 h), distinct from PRICK testing for immediate (Type I) allergy. Blood tests (autoantibodies for connective-tissue disease, serology, eosinophils) support specific diagnoses. Choose the test to the question.**',
    '**The take-home: KOH (fungal hyphae), Wood\'s lamp (pigment/erythrasma coral-red), Tzanck (herpes giant cells), DERMOSCOPY (pigmented-lesion triage); BIOPSY — punch (inflammatory), shave (epidermal), EXCISIONAL for suspected MELANOMA (need full depth); direct immunofluorescence for blistering/vasculitis; PATCH test (Type IV) vs prick test (Type I).** The exam that precedes them is [[skin-examination-approach]]; melanoma biopsy links to [[skin-neoplasms]].',
  ],

  mechanism: {
    title: 'Bedside (KOH/Wood\'s/Tzanck/dermoscopy) → biopsy (punch/shave/excisional; DIF) → allergy testing (patch Type IV vs prick Type I)',
    steps: [
      { id: 's1', label: 'KOH = fungal hyphae; Wood\'s lamp = pigment + erythrasma (coral-red)', emphasis: 'key' },
      { id: 's2', label: 'Tzanck smear = herpes/varicella giant cells; dermoscopy triages pigmented lesions', emphasis: 'key' },
      { id: 's3', label: 'Biopsy: punch (inflammatory), shave (epidermal), EXCISIONAL for suspected melanoma', emphasis: 'key' },
      { id: 's4', label: 'Direct immunofluorescence for autoimmune blistering/vasculitis', emphasis: 'key' },
      { id: 's5', label: 'Patch test (Type IV contact allergy) vs prick test (Type I immediate)' },
    ],
  },

  examFindings: [
    { sign: 'Hyphae on KOH microscopy of a scaly plaque', mechanism: 'Dermatophyte infection', significance: 'key' },
    { sign: 'Coral-red fluorescence under Wood\'s lamp in a flexural rash', mechanism: 'Erythrasma (Corynebacterium)', significance: 'supportive' },
    { sign: 'Multinucleate giant cells on a Tzanck smear', mechanism: 'Herpes simplex/varicella-zoster', significance: 'key' },
    { sign: 'Excisional (not shave) biopsy chosen for a suspicious pigmented lesion', mechanism: 'Preserve full thickness for Breslow depth (melanoma)', significance: 'key' },
    { sign: 'Positive patch test at 72–96 hours', mechanism: 'Allergic contact dermatitis (Type IV)', significance: 'key' },
  ],

  investigations: [
    { clue: 'The bedside test showing fungal hyphae', meaning: 'KOH microscopy' },
    { clue: 'The smear diagnosing herpes/varicella at the bedside', meaning: 'Tzanck smear (multinucleate giant cells)' },
    { clue: 'The biopsy type for a suspected melanoma', meaning: 'Excisional biopsy (to obtain full Breslow depth)' },
    { clue: 'The test for allergic contact dermatitis', meaning: 'Patch testing (Type IV)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Choosing the right test to the clinical question confirms diagnoses cheaply and quickly — KOH for fungi, Tzanck for herpes, Wood\'s lamp for pigment/erythrasma, dermoscopy and the correct biopsy (excisional for melanoma to preserve Breslow depth), direct immunofluorescence for blistering, and patch vs prick testing for the type of allergy. It follows the systematic exam of [[skin-examination-approach]] and feeds specific diagnoses (melanoma — [[skin-neoplasms]]; blistering — [[vesiculobullous-diseases]]).' },
  ],

  mnemonics: [
    { hook: '"KOH = fungus; Tzanck = herpes; Wood\'s = pigment/erythrasma; dermoscopy = pigmented lesions"', expansion: ['Excisional biopsy for melanoma', 'DIF for blistering'] },
    { hook: '"Patch = Type IV (delayed contact); Prick = Type I (immediate)"', expansion: ['Punch = inflammatory', 'Shave = epidermal'] },
  ],

  traps: [
    {
      questionCategory: 'Biopsy choice for suspected melanoma',
      wrongInstinct: 'A quick shave biopsy is fine to sample any suspicious pigmented lesion',
      rightAnswer: 'A suspected MELANOMA should undergo EXCISIONAL biopsy (removing the whole lesion with a narrow margin) so the pathologist can measure the full BRESLOW THICKNESS (depth) — the key prognostic factor; a SHAVE biopsy may transect the lesion and prevent accurate depth measurement, compromising staging',
      why: 'Because Breslow depth determines melanoma prognosis and management, a partial/shave biopsy that cuts across the lesion can under-stage it — excisional biopsy preserves the information needed.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A KOH (potassium hydroxide) preparation of skin scrapings is used to detect:',
      options: [
        { id: 'a', text: 'Bacteria' },
        { id: 'b', text: 'Fungal hyphae' },
        { id: 'c', text: 'Viral inclusions' },
        { id: 'd', text: 'Autoantibodies' },
      ],
      answerId: 'b',
      explanation: 'KOH dissolves keratin, revealing fungal hyphae (dermatophytes) or the "spaghetti and meatballs" appearance of pityriasis versicolor under the microscope. It is a rapid bedside test for suspected superficial fungal infection.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The preferred biopsy technique for a lesion suspected of being melanoma is:',
      options: [
        { id: 'a', text: 'Superficial shave biopsy' },
        { id: 'b', text: 'Excisional biopsy (full thickness, narrow margin)' },
        { id: 'c', text: 'Curettage' },
        { id: 'd', text: 'No biopsy — treat empirically' },
      ],
      answerId: 'b',
      explanation: 'Excisional biopsy removes the whole lesion at full thickness, allowing accurate measurement of Breslow depth — the most important prognostic factor in melanoma. A shave biopsy risks transecting the lesion and preventing accurate staging.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default dermatologicInvestigations;
