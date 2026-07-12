import type { Lecture } from '../../lib/types';

export const fcp1WeightLossApproach: Lecture = {
  id: 'fcp1-weight-loss-approach',
  title: 'Approach to Unintentional Weight Loss',
  system: 'clinical',
  source: 'L7 — Obesity & Weight Loss',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L7 Obesity & Weight Loss' },
    { kind: 'disease', label: 'Malignancy · endocrine · GI · psych' },
    { kind: 'investigation', label: 'Targeted first-line workup' },
    { kind: 'mechanism', label: 'Intake up vs intake down' },
  ],

  highYield: [
    '**Significant unintentional weight loss = loss of 5% or more of body weight over 6–12 months.** It is pathological until proven otherwise and warrants evaluation — the mirror image of the obesity work-up → [[fcp1-obesity-approach]].',
    '**Differential across systems:** **malignancy** (GI, lung, pancreas, lymphoma), **endocrine/metabolic** (hyperthyroidism → [[fcp1-hyperthyroidism]], new or uncontrolled diabetes, adrenal insufficiency), **GI** (malabsorption, coeliac, IBD, chronic pancreatitis, dysphagia), **chronic infection** (TB, HIV — overlaps with prolonged fever → [[fcp1-fever-of-unknown-origin]]), **psychiatric/social** (depression, eating disorder, dementia, alcohol, poverty, isolation), and **chronic organ disease** cachexia (heart failure, COPD, CKD, cirrhosis).',
    '**One discriminating question: is appetite (intake) UP or DOWN?** Weight loss **with increased appetite** points to hyperthyroidism, uncontrolled diabetes or malabsorption (calories lost despite eating). Weight loss **with reduced appetite** points to malignancy, depression, chronic disease or dysphagia.',
    '**Red flags** demanding prompt targeted workup: anorexia, dysphagia/odynophagia, GI bleeding or melena → [[fcp1-gi-bleed-upper]], a palpable mass or lymphadenopathy → [[fcp1-lymphadenopathy-approach]], fever and night sweats, iron-deficiency anaemia → [[fcp1-anemia-approach-workup]], and age over 60 with a smoking history.',
    '**Workup is history-led:** confirm and quantify the loss, screen every system, review drugs and mood, then first-line tests — CBC, ESR/CRP, glucose/HbA1c, **TFT**, LFTs/renal function, urinalysis, CXR, faecal occult blood and HIV, with age-appropriate cancer screening. If examination and basic tests are normal, structured follow-up beats shotgun imaging.',
  ],

  mechanism: {
    title: 'Working up unintentional weight loss',
    steps: [
      { id: 's1', label: 'Confirm true, unintentional loss of 5%+ over 6–12 months', emphasis: 'key' },
      { id: 's2', label: 'Intake UP (hyperthyroid, diabetes, malabsorption) vs intake DOWN (cancer, depression, dysphagia)', emphasis: 'key' },
      { id: 's3', label: 'Screen red flags: mass, node, dysphagia, GI bleed, fever/night sweats', emphasis: 'danger' },
      { id: 's4', label: 'First-line: CBC, TFT, glucose, LFT/renal, CXR, occult blood, HIV', emphasis: 'normal' },
      { id: 's5', label: 'Targeted imaging/endoscopy by clue; if all normal → follow-up', emphasis: 'normal' },
    ],
  },

  examFindings: [
    { sign: 'Palpable mass or firm, fixed lymph node', mechanism: 'Underlying malignancy', significance: 'key' },
    { sign: 'Fine tremor, goitre, tachycardia, warm sweaty skin', mechanism: 'Hyperthyroidism (loss despite good appetite) → [[fcp1-hyperthyroidism]]', significance: 'key' },
    { sign: 'Pallor with positive faecal occult blood', mechanism: 'Occult GI malignancy or chronic blood loss', significance: 'supportive' },
    { sign: 'Low mood, anhedonia, poor intake', mechanism: 'Depression as the driver', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Iron-deficiency anaemia in an older adult', meaning: 'GI malignancy until excluded → [[fcp1-anemia-approach-workup]]' },
    { clue: 'Suppressed TSH', meaning: 'Hyperthyroidism' },
    { clue: 'Raised fasting glucose/HbA1c', meaning: 'New or uncontrolled diabetes' },
    { clue: 'Abnormal CXR or hilar lymphadenopathy', meaning: 'Lung cancer or tuberculosis' },
  ],

  treatment: [
    { logic: 'Treat the identified cause and support nutrition', detail: 'Directed therapy plus dietetic input; address reversible social and psychiatric contributors.' },
    { logic: 'Pursue age-appropriate cancer screening and targeted endoscopy/imaging', detail: 'Follow the red-flag clue to the right test rather than scanning everything.' },
    { logic: 'If the full first-line workup is normal, use structured surveillance', detail: 'Many such patients have a psychiatric or functional cause; repeated review is safer and higher-yield than blind investigation.' },
  ],

  mnemonics: [
    { hook: 'Appetite UP = metabolic burn (thyroid/diabetes); Appetite DOWN = cancer/depression', expansion: ['5% over 6–12 months is significant', 'Red flags → targeted workup'] },
  ],

  traps: [
    {
      questionCategory: 'Interpreting appetite',
      wrongInstinct: 'Weight loss with a good or increased appetite is reassuring',
      rightAnswer: 'Weight loss despite eating well suggests hyperthyroidism, uncontrolled diabetes or malabsorption — investigate it',
      why: 'Preserved appetite does not exclude serious disease; it actually narrows the differential toward metabolic and GI causes.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which of the following best defines clinically significant unintentional weight loss warranting investigation?',
      options: [
        { id: 'a', text: 'Any weight fluctuation of 1–2 kg within a week' },
        { id: 'b', text: 'Loss of 5% or more of body weight over 6–12 months' },
        { id: 'c', text: 'Loss of any amount only if the patient is dieting' },
        { id: 'd', text: 'Loss of 20% of body weight over 2 years in the elderly only' },
      ],
      answerId: 'b',
      explanation: 'Unintentional loss of at least 5% of body weight over 6–12 months is the accepted threshold for a significant, potentially pathological change that requires evaluation.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'A 45-year-old reports losing 7 kg over four months despite an increased appetite, with palpitations, heat intolerance and a fine tremor. The most useful first investigation is:',
      options: [
        { id: 'a', text: 'Thyroid function tests (TSH)' },
        { id: 'b', text: 'Colonoscopy' },
        { id: 'c', text: 'Chest CT' },
        { id: 'd', text: 'Overnight dexamethasone suppression test' },
      ],
      answerId: 'a',
      explanation: 'Weight loss with a preserved or increased appetite plus palpitations, heat intolerance and tremor is classic hyperthyroidism. A suppressed TSH confirms it, making thyroid function tests the highest-yield first step.',
      tests: 'investigation',
    },
  ],
};

export default fcp1WeightLossApproach;
