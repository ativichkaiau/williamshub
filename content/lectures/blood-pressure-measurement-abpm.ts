import type { Lecture } from '../../lib/types';

export const bloodPressureMeasurementAbpm: Lecture = {
  id: 'blood-pressure-measurement-abpm',
  title: 'Blood Pressure Measurement & Ambulatory Monitoring',
  system: 'cardiovascular',
  source: 'L12 — Ambulatory Blood Pressure Monitoring',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L12 BP Measurement' },
    { kind: 'mechanism', label: 'OBP vs ABPM/HBPM' },
    { kind: 'exam', label: 'White-coat · dipping' },
  ],

  highYield: [
    '**Blood pressure is measured with a sphygmomanometer + auscultation of the Korotkoff sounds:** cuff inflated above systolic, then deflated — the **first tapping sound = systolic BP (Korotkoff I)**; the **disappearance of sound = diastolic BP (Korotkoff V)**. Palpatory method (radial pulse) estimates systolic only and avoids the auscultatory gap error.',
    '**Technique matters (errors are common):** correct **cuff size** (too small → falsely high), arm at **heart level**, patient rested and seated, back supported, and avoid caffeine/talking. A **wrong cuff or arm position significantly misreads BP.**',
    '**Office BP (OBP)** can misclassify because of the setting. **Out-of-office measurement is more accurate:** **Ambulatory BP monitoring (ABPM)** — an automated cuff records BP every 15–30 min over **24 hours** (including sleep); **Home BP monitoring (HBPM)** — the patient measures at home.',
    '**Two phenotypes that OBP alone misses:** **White-coat hypertension** = **high in clinic, normal outside** (over-treatment risk if relied on); **Masked hypertension** = **normal in clinic, high outside** (dangerous — missed cardiovascular risk). ABPM/HBPM reveal both.',
    '**Circadian "dipping":** BP normally **falls ~10–20% during sleep (a "dipper")**. **Non-dippers (< 10% nocturnal fall)** and reverse dippers have **higher cardiovascular risk**. ABPM uniquely shows the nocturnal pattern and averages, improving diagnosis and risk stratification for hypertension.',
  ],

  mechanism: {
    title: 'Measure well; use out-of-office data to classify',
    steps: [
      { id: 's1', label: 'Korotkoff I = systolic; Korotkoff V = diastolic', emphasis: 'key' },
      { id: 's2', label: 'Correct cuff size + arm at heart level (avoid errors)', emphasis: 'key' },
      { id: 's3', label: 'ABPM (24 h) / HBPM more accurate than office BP' },
      { id: 's4', label: 'White-coat (high clinic/normal out) vs masked (normal clinic/high out)', emphasis: 'key' },
      { id: 's5', label: 'Non-dipping (nocturnal BP fall <10%) → higher CV risk' },
    ],
  },

  examFindings: [
    { sign: 'High BP in clinic, normal on ABPM', mechanism: 'White-coat hypertension', significance: 'key' },
    { sign: 'Normal clinic BP but high on ABPM/HBPM', mechanism: 'Masked hypertension (dangerous — missed risk)', significance: 'key' },
    { sign: 'Falsely high reading with a small cuff', mechanism: 'Cuff too small for arm circumference', significance: 'key' },
    { sign: 'Nocturnal BP fails to dip (<10%)', mechanism: 'Non-dipper → higher cardiovascular risk', significance: 'supportive' },
    { sign: 'First Korotkoff sound as cuff deflates', mechanism: 'Systolic blood pressure', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Sound marking systolic blood pressure', meaning: 'First Korotkoff sound (I)' },
    { clue: 'Test averaging BP over 24 h including sleep', meaning: 'Ambulatory blood pressure monitoring (ABPM)' },
    { clue: 'High clinic BP but normal out-of-office', meaning: 'White-coat hypertension' },
    { clue: 'Normal clinic BP but elevated at home', meaning: 'Masked hypertension' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'ABPM/HBPM improve hypertension diagnosis (avoiding over-/under-treatment) and risk assessment (dipping). Good technique prevents misclassification. Builds on BP physiology ([[blood-pressure-baroreceptor-reflex]], [[long-term-bp-raas]]).' },
  ],

  mnemonics: [
    { hook: 'White-coat = high in Clinic only; Masked = high Outside only (dangerous)', expansion: ['ABPM/HBPM reveal both'] },
    { hook: 'Korotkoff: "I = Start (systolic), V = Vanish (diastolic)"', expansion: ['Cuff too small → falsely high'] },
  ],

  traps: [
    {
      questionCategory: 'White-coat vs masked hypertension risk',
      wrongInstinct: 'Masked hypertension is harmless because the clinic reading is normal',
      rightAnswer: 'MASKED hypertension (normal in clinic, high outside) carries real cardiovascular risk that office BP MISSES — it is arguably more dangerous than white-coat hypertension',
      why: 'Because the clinic BP is reassuring, masked hypertension goes untreated despite genuine end-organ risk; out-of-office monitoring is needed to catch it.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient consistently has blood pressure of 155/95 in the clinic but a normal average of 120/78 on 24-hour ambulatory monitoring. This is:',
      options: [
        { id: 'a', text: 'Masked hypertension' },
        { id: 'b', text: 'White-coat hypertension' },
        { id: 'c', text: 'Sustained hypertension' },
        { id: 'd', text: 'A measurement error only' },
      ],
      answerId: 'b',
      explanation: 'High office BP with normal out-of-office (ABPM) readings defines white-coat hypertension; relying on the clinic reading alone risks unnecessary treatment.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Using a blood-pressure cuff that is too small for the patient\'s arm will typically:',
      options: [
        { id: 'a', text: 'Falsely lower the reading' },
        { id: 'b', text: 'Falsely raise the reading' },
        { id: 'c', text: 'Have no effect' },
        { id: 'd', text: 'Only affect the diastolic value' },
      ],
      answerId: 'b',
      explanation: 'An undersized cuff requires more pressure to occlude the artery, falsely elevating the reading. Correct cuff size and arm position (at heart level) are essential for accuracy.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default bloodPressureMeasurementAbpm;
