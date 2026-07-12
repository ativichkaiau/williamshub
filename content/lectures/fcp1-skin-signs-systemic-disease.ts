import type { Lecture } from '../../lib/types';

export const fcp1SkinSignsSystemicDisease: Lecture = {
  id: 'fcp1-skin-signs-systemic-disease',
  title: 'Skin Signs of Systemic Disease',
  system: 'clinical',
  source: 'L31 — Skin Signs (Adult & Pediatric)',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L31 Skin Signs' },
    { kind: 'disease', label: 'SJS/TEN · purpura · exanthems' },
    { kind: 'exam', label: 'Nikolsky · non-blanching purpura' },
    { kind: 'mechanism', label: 'Skin as a systemic marker' },
  ],

  highYield: [
    'The skin can be the first sign of systemic disease — read it with the morphology vocabulary [[fcp1-skin-lesion-morphology]]. **Non-blanching purpura/petechiae** means bleeding into skin → thrombocytopenia/coagulopathy [[fcp1-bleeding-primary-vs-secondary]] or vasculitis; with **fever plus rapidly spreading purpura think meningococcaemia** [[fcp1-fever-approach-differential]], a true emergency.',
    '**Danger dermatoses:** **Stevens–Johnson syndrome / toxic epidermal necrolysis (SJS/TEN)** — drug-triggered painful skin with **mucosal erosions**, targetoid lesions, positive Nikolsky and skin detachment; stop the drug and treat like a burn. Also DRESS, staphylococcal scalded skin, erythroderma and necrotising fasciitis (pain out of proportion) — all need urgent referral.',
    '**Systemic markers:** acanthosis nigricans (insulin resistance/malignancy), erythema nodosum (sarcoid, IBD, infection, drugs), pyoderma gangrenosum (IBD), pretibial myxoedema/vitiligo (thyroid [[fcp1-thyroid-approach]]), malar butterfly rash (SLE), palpable purpura (vasculitis), jaundice and spider naevi (liver [[fcp1-jaundice-approach]]), and psoriasis or gout tophi (arthritis [[fcp1-arthritis-approach]]).',
    '**Paediatric exanthems:** measles (Koplik spots, cephalocaudal maculopapular rash), rubella, chickenpox (crops of vesicles at different stages), hand-foot-and-mouth, scarlet fever (sandpaper rash, strawberry tongue) and erythema infectiosum (slapped cheek). **The febrile child with purpura is meningococcaemia until proven otherwise.**',
    '**Approach:** describe the lesion, then check mucosa, blanching, Nikolsky and fever — the rash that is **painful, mucosal, purpuric, blistering or febrile** is the one to escalate.',
  ],

  mechanism: {
    title: 'When a rash means systemic danger',
    steps: [
      { id: 's1', label: 'Describe lesion + check mucosa, blanching, Nikolsky', emphasis: 'key' },
      { id: 's2', label: 'Non-blanching purpura + fever → meningococcaemia', emphasis: 'danger' },
      { id: 's3', label: 'Painful skin + mucosal erosions + new drug → SJS/TEN', emphasis: 'danger' },
      { id: 's4', label: 'Pattern → systemic clue (SLE, thyroid, liver, IBD)', emphasis: 'key' },
      { id: 's5', label: 'Febrile child: distinguish exanthem from purpura', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Non-blanching petechiae or purpura', mechanism: 'Thrombocytopenia, coagulopathy or vasculitis', significance: 'key' },
    { sign: 'Mucosal erosions with skin pain and a positive Nikolsky sign', mechanism: 'Epidermal detachment of SJS/TEN', significance: 'key' },
    { sign: 'Malar butterfly rash sparing the nasolabial folds', mechanism: 'Systemic lupus erythematosus', significance: 'supportive' },
    { sign: 'Koplik spots then a stepwise cephalocaudal maculopapular rash', mechanism: 'Measles', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Fever with non-blanching purpura', meaning: 'Treat as meningococcaemia — blood cultures and LP, but do NOT delay antibiotics' },
    { clue: 'Skin detachment and mucosal involvement after a new drug', meaning: 'SJS/TEN — stop the drug, give burn-type care' },
    { clue: 'Palpable purpura on the lower legs', meaning: 'Small-vessel vasculitis — check renal function, urinalysis, biopsy' },
    { clue: 'Widespread erythroderma or a slapped-cheek/strawberry-tongue pattern', meaning: 'Identify the underlying systemic or infective cause' },
  ],

  treatment: [
    { logic: 'Escalate the danger dermatoses immediately', detail: 'Meningococcaemia = parenteral antibiotics now; SJS/TEN or necrotising fasciitis = stop the trigger, resuscitate and urgent dermatology/surgery. Do not wait for tests.' },
    { logic: 'Treat the underlying systemic disease', detail: 'The skin sign is a clue (SLE, IBD, thyroid, liver, malignancy) — manage the disease, not just the rash.' },
  ],

  mnemonics: [
    { hook: 'Fever + non-blanching purpura = meningococcaemia until proven otherwise', expansion: ['Purpura does not blanch', 'Fever + purpura = give antibiotics now'] },
  ],

  traps: [
    {
      questionCategory: 'The febrile purpuric child',
      wrongInstinct: 'A febrile child with a rash has a benign viral exanthem',
      rightAnswer: 'If any spots are non-blanching (purpura/petechiae) treat as meningococcaemia and give antibiotics immediately',
      why: 'Meningococcal septicaemia kills within hours; the non-blanching rash is the red flag that separates it from a viral exanthem.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient 10 days into a new anticonvulsant develops painful dusky skin, target lesions, oral and ocular erosions, and skin that peels with lateral pressure. The most likely diagnosis is:',
      options: [
        { id: 'a', text: 'Urticaria' },
        { id: 'b', text: 'Stevens–Johnson syndrome / toxic epidermal necrolysis' },
        { id: 'c', text: 'A viral exanthem' },
        { id: 'd', text: 'Contact dermatitis' },
      ],
      answerId: 'b',
      explanation: 'Drug-triggered painful skin with mucosal erosions and a positive Nikolsky sign is SJS/TEN — stop the drug and treat as a dermatological emergency.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'A febrile, unwell child has spreading dark-red spots that do not blanch under a glass slide. The most appropriate action is:',
      options: [
        { id: 'a', text: 'Oral antihistamine for urticaria' },
        { id: 'b', text: 'Reassure — this is a viral exanthem' },
        { id: 'c', text: 'Immediate parenteral antibiotics for suspected meningococcaemia' },
        { id: 'd', text: 'Topical steroid' },
      ],
      answerId: 'c',
      explanation: 'A non-blanching (purpuric) rash in a febrile unwell child is meningococcaemia until proven otherwise and needs immediate parenteral antibiotics.',
      tests: 'treatment',
    },
  ],
};

export default fcp1SkinSignsSystemicDisease;
