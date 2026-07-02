import type { Lecture } from '../../lib/types';

export const skinSignsSystemicDisease: Lecture = {
  id: 'skin-signs-systemic-disease',
  title: 'Skin Signs of Systemic Disease',
  system: 'derm',
  source: 'L1 — Dermatologic Diagnosis',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L1 Cutaneous Systemic Signs' },
    { kind: 'mechanism', label: 'Skin as a window on internal disease' },
    { kind: 'exam', label: 'Paraneoplastic & metabolic signs' },
  ],

  highYield: [
    '**The skin is a "window" onto internal disease — cutaneous signs can be the first clue to an occult systemic disorder. ENDOCRINE/METABOLIC: acanthosis nigricans (velvety flexural hyperpigmentation → insulin resistance/diabetes, or paraneoplastic — gastric cancer if abrupt/extensive); necrobiosis lipoidica and diabetic dermopathy (diabetes); pretibial myxoedema/vitiligo (thyroid); xanthomas (hyperlipidaemia).**',
    '**PARANEOPLASTIC signs: acanthosis nigricans (sudden, extensive), DERMATOMYOSITIS (heliotrope/Gottron → screen for cancer), acquired ichthyosis, and migratory thrombophlebitis (Trousseau sign). Generalised PRURITUS without a rash can signal lymphoma, cholestasis, uraemia, iron deficiency or thyroid disease.**',
    '**AUTOIMMUNE/inflammatory associations: erythema nodosum (sarcoid, IBD, strep, TB, drugs); pyoderma gangrenosum (IBD, rheumatoid); the malar rash of SLE; palpable purpura (vasculitis). NUTRITIONAL: the "4 D\'s" of pellagra (niacin — dermatitis, diarrhoea, dementia), scurvy (vitamin C — perifollicular haemorrhage, corkscrew hairs), acrodermatitis enteropathica (zinc).**',
    '**INFECTIVE/other: erythema migrans (Lyme), café-au-lait macules + neurofibromas (NF1), and mucocutaneous signs of HIV. Recognising these prompts the appropriate systemic work-up — the skin sign is a starting point, not the whole diagnosis.**',
    '**The take-home: skin signs flag systemic disease — acanthosis nigricans (insulin resistance/paraneoplastic), dermatomyositis and sudden acanthosis (malignancy), erythema nodosum (sarcoid/IBD/strep/TB), generalised pruritus without rash (lymphoma/cholestasis/uraemia/thyroid), and nutritional signs (pellagra, scurvy, zinc). Recognise and investigate the underlying disease.** The connective-tissue signs are in [[cutaneous-connective-tissue-diseases]]; the examination that finds them is [[skin-examination-approach]].',
  ],

  mechanism: {
    title: 'Skin = window on internal disease: endocrine/metabolic, paraneoplastic, autoimmune, nutritional, infective signs → systemic work-up',
    steps: [
      { id: 's1', label: 'Acanthosis nigricans → insulin resistance/diabetes; abrupt/extensive → paraneoplastic (gastric)', emphasis: 'key' },
      { id: 's2', label: 'Paraneoplastic: dermatomyositis, sudden acanthosis, Trousseau migratory thrombophlebitis', emphasis: 'danger' },
      { id: 's3', label: 'Generalised pruritus without rash → lymphoma, cholestasis, uraemia, iron, thyroid', emphasis: 'key' },
      { id: 's4', label: 'Autoimmune: erythema nodosum (sarcoid/IBD/strep/TB), pyoderma gangrenosum (IBD/RA), SLE malar', emphasis: 'key' },
      { id: 's5', label: 'Nutritional: pellagra (niacin, 4 D\'s), scurvy (vit C), zinc; recognise → investigate', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Velvety hyperpigmented flexural plaques', mechanism: 'Acanthosis nigricans (insulin resistance; if abrupt → paraneoplastic)', significance: 'key' },
    { sign: 'Generalised itch with no primary rash', mechanism: 'Systemic pruritus (lymphoma/cholestasis/uraemia/thyroid/iron)', significance: 'key' },
    { sign: 'Tender shin nodules signalling a systemic trigger', mechanism: 'Erythema nodosum (sarcoid/IBD/strep/TB)', significance: 'key' },
    { sign: 'Heliotrope rash and Gottron papules with proximal weakness', mechanism: 'Dermatomyositis (screen for malignancy)', significance: 'key' },
    { sign: 'Dermatitis, diarrhoea and dementia', mechanism: 'Pellagra (niacin/B3 deficiency)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The skin sign of insulin resistance (or paraneoplasia if abrupt)', meaning: 'Acanthosis nigricans' },
    { clue: 'The causes of generalised pruritus without a rash', meaning: 'Lymphoma, cholestasis, uraemia, iron deficiency, thyroid disease' },
    { clue: 'The systemic triggers of erythema nodosum', meaning: 'Sarcoidosis, IBD, streptococcus, TB, drugs, pregnancy' },
    { clue: 'The "4 D\'s" nutritional dermatosis', meaning: 'Pellagra (niacin deficiency)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Cutaneous signs can be the earliest clue to occult systemic disease — acanthosis nigricans (diabetes or gastric cancer), dermatomyositis (malignancy), erythema nodosum (sarcoid/IBD), unexplained pruritus (lymphoma/cholestasis) — so recognising them triggers the right systemic work-up rather than treating the skin alone. The connective-tissue signs are in [[cutaneous-connective-tissue-diseases]] and vasculitic signs in [[panniculitis-vasculitis-skin]]; the examination that detects them is [[skin-examination-approach]].' },
  ],

  mnemonics: [
    { hook: '"Acanthosis nigricans = insulin resistance; sudden/extensive = cancer (gastric)"', expansion: ['Dermatomyositis → screen cancer', 'Erythema nodosum = sarcoid/IBD/strep/TB'] },
    { hook: 'Itch without a rash → "Lymphoma, Liver (cholestasis), kidney (Uraemia), Thyroid, Iron"', expansion: ['Pellagra = niacin (4 D\'s)', 'Scurvy = vitamin C'] },
  ],

  traps: [
    {
      questionCategory: 'Acanthosis nigricans significance',
      wrongInstinct: 'Acanthosis nigricans is always just a benign sign of obesity',
      rightAnswer: 'Acanthosis nigricans usually reflects INSULIN RESISTANCE (obesity, type 2 diabetes, PCOS), but when it appears ABRUPTLY, is EXTENSIVE/severe or involves mucosae in a non-obese/older patient, it can be a PARANEOPLASTIC sign (classically of gastric adenocarcinoma) — so the tempo and extent determine whether malignancy work-up is needed',
      why: 'Missing the paraneoplastic pattern (sudden, extensive acanthosis) could overlook an underlying cancer; the clinical context (gradual/obese vs abrupt/extensive) changes the work-up entirely.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Generalised pruritus in the absence of any primary skin rash should prompt evaluation for:',
      options: [
        { id: 'a', text: 'Only dry skin' },
        { id: 'b', text: 'Systemic causes such as lymphoma, cholestasis, uraemia, thyroid disease or iron deficiency' },
        { id: 'c', text: 'Contact dermatitis' },
        { id: 'd', text: 'Psoriasis' },
      ],
      answerId: 'b',
      explanation: 'Itch without a primary rash can be a marker of systemic disease — lymphoma (especially Hodgkin), cholestasis, chronic kidney disease/uraemia, thyroid disease and iron deficiency — so it warrants a systemic work-up rather than only topical treatment.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The abrupt onset of extensive acanthosis nigricans in a non-obese older adult should raise suspicion of:',
      options: [
        { id: 'a', text: 'An underlying malignancy (classically gastric adenocarcinoma)' },
        { id: 'b', text: 'Simple weight gain' },
        { id: 'c', text: 'Vitamin C deficiency' },
        { id: 'd', text: 'A fungal infection' },
      ],
      answerId: 'a',
      explanation: 'While acanthosis nigricans usually reflects insulin resistance, its abrupt, extensive (± mucosal) appearance in a non-obese or older patient can be paraneoplastic — classically associated with gastric adenocarcinoma — warranting malignancy evaluation.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default skinSignsSystemicDisease;
