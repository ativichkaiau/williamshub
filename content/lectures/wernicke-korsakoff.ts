import type { Lecture } from '../../lib/types';

export const wernickeKorsakoff: Lecture = {
  id: 'wernicke-korsakoff',
  title: 'Wernicke Encephalopathy & Korsakoff',
  system: 'neuro',
  source: 'L6 — Metabolic & Regulatory Disorders',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L6 Metabolic & Regulatory' },
    { kind: 'disease', label: 'Wernicke-Korsakoff' },
    { kind: 'mechanism', label: 'Thiamine deficiency' },
    { kind: 'exam', label: 'Classic triad' },
  ],

  highYield: [
    '**Wernicke encephalopathy = thiamine (B1) deficiency.** Causes: **chronic alcohol use, hyperemesis of pregnancy, bariatric/GI surgery, prolonged fasting or IV feeding without B1, dialysis, AIDS, malignancy**.',
    'Pathology: **petechial hemorrhagic necrosis of midline structures** — **mammillary bodies, thalamus, hypothalamus, periaqueductal gray**.',
    '**Classic triad**: **encephalopathy (confusion) + oculomotor dysfunction (nystagmus, ophthalmoplegia) + gait ataxia** — but **all three are present in only ~1/3** of patients.',
    '**Treatment is empiric and urgent: give IV thiamine BEFORE glucose** (a glucose load in a thiamine-deficient patient can precipitate/worsen Wernicke). Untreated → coma and death.',
    '**Korsakoff syndrome** = chronic sequela (esp. in alcohol use): **anterograde + retrograde amnesia with confabulation**; damage to mammillary bodies / **Papez circuit**; often **irreversible** (needs supervision).',
  ],

  mechanism: {
    title: 'No thiamine → midline necrosis → triad → amnesia',
    steps: [
      { id: 's1', label: 'Thiamine (B1) deficiency', emphasis: 'key' },
      { id: 's2', label: 'Petechial necrosis: mammillary bodies, thalamus, PAG' },
      { id: 's3', label: 'Wernicke triad: confusion + ophthalmoplegia + ataxia' },
      { id: 's4', label: 'Untreated → Korsakoff amnesia (mammillary/Papez)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Confusion + horizontal nystagmus/ophthalmoplegia + ataxic gait', mechanism: 'Wernicke (midline diencephalic/brainstem necrosis)', significance: 'key' },
    { sign: 'Dense anterograde amnesia with confabulation', mechanism: 'Korsakoff (mammillary/Papez damage)', significance: 'key' },
    { sign: 'Alcohol-use or malnutrition history', mechanism: 'Thiamine deficiency risk', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Clinical diagnosis (no single accurate test)', meaning: 'Do not delay treatment for confirmation' },
    { clue: 'MRI (mammillary bodies, periaqueductal/medial thalamic signal)', meaning: 'Supportive if done' },
    { clue: 'Thiamine level / response to thiamine', meaning: 'Confirms deficiency' },
  ],

  treatment: [
    { logic: 'IV thiamine immediately, before any glucose', detail: 'Prevents precipitating/worsening Wernicke.' },
    { logic: 'Correct nutrition; treat alcohol-use disorder', detail: 'Prevents progression to Korsakoff.' },
  ],

  mnemonics: [
    { hook: 'Wernicke triad = COAT: Confusion, Ophthalmoplegia, Ataxia (Thiamine)', expansion: ['Only ~1/3 have all three'] },
    { hook: 'Thiamine BEFORE glucose', expansion: ['Glucose load can trigger Wernicke'] },
  ],

  traps: [
    {
      questionCategory: 'Order of thiamine vs glucose',
      wrongInstinct: 'Give IV dextrose first to a confused, malnourished alcoholic patient',
      rightAnswer: 'Give thiamine before (or with) glucose — a glucose load in thiamine deficiency can precipitate Wernicke encephalopathy',
      why: 'Glucose metabolism consumes thiamine; loading glucose into a depleted patient can trigger or worsen Wernicke, so thiamine must come first.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A malnourished patient with chronic alcohol use is confused, with nystagmus and an unsteady gait. The immediate treatment priority is:',
      options: [
        { id: 'a', text: 'IV dextrose bolus' },
        { id: 'b', text: 'IV thiamine (before glucose)' },
        { id: 'c', text: 'CT head then observation' },
        { id: 'd', text: 'Broad-spectrum antibiotics' },
      ],
      answerId: 'b',
      explanation: 'This is Wernicke encephalopathy (confusion + ophthalmoplegia + ataxia). Give IV thiamine before any glucose, because a glucose load can precipitate or worsen the encephalopathy.',
      tests: 'treatment',
    },
  ],
};

export default wernickeKorsakoff;
