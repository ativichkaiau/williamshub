import type { Lecture } from '../../lib/types';

export const fcp1ConstipationBowelHabit: Lecture = {
  id: 'fcp1-constipation-bowel-habit',
  title: 'Constipation & Change in Bowel Habit',
  system: 'clinical',
  source: 'L16 — Change in Bowel Habit',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L16 Change in Bowel Habit' },
    { kind: 'disease', label: 'Primary vs secondary constipation' },
    { kind: 'exam', label: 'PR examination' },
    { kind: 'investigation', label: 'Colonoscopy red flags' },
  ],

  highYield: [
    '**Constipation** (Rome criteria): fewer than **3 bowel motions per week**, straining, hard or lumpy stools, incomplete evacuation, or needing manual manoeuvres. The key symptom to explain is a **change in bowel habit**, not the absolute frequency.',
    '**Primary/functional**: normal-transit (commonest), slow-transit, and outlet/defecatory dysfunction. **Secondary**: **drugs (opioids, anticholinergics, calcium-channel blockers, iron)**, metabolic (**hypothyroidism, hypercalcaemia, diabetes**), neurological (Parkinson, cord lesions), and mechanical obstruction.',
    '**Cancer red flags of a changed bowel habit**: age **over 50**, **rectal bleeding**, **weight loss**, **iron-deficiency anaemia**, a **palpable mass**, and a persistent change to looser or more frequent stools — arrange **colonoscopy**. See [[fcp1-gi-bleed-lower]] and [[fcp1-anemia-microcytic]].',
    'Alternating constipation and diarrhoea may be **IBS** (young, no alarm features) but can also signal an **obstructing colorectal cancer** — the alarm features decide. Contrast the diarrhoea-led picture in [[fcp1-diarrhea-approach]].',
    'Always examine the abdomen and perform a **PR examination** (impaction, mass, blood, anal tone); a palpable abdominal mass leads into [[fcp1-abdominal-mass-differential]].',
  ],

  mechanism: {
    title: 'Primary vs secondary, then screen for cancer',
    steps: [
      { id: 's1', label: 'Confirm true constipation and define the change', emphasis: 'key' },
      { id: 's2', label: 'Exclude secondary: drugs, metabolic, neurological', emphasis: 'key' },
      { id: 's3', label: 'PR exam: impaction, mass, blood, anorectal tone', emphasis: 'key' },
      { id: 's4', label: 'Screen cancer red flags (age, bleeding, weight loss, anaemia)', emphasis: 'key' },
      { id: 's5', label: 'Persistent change + red flag → colonoscopy', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Palpable mass or hard faecal loading on abdominal and PR exam', mechanism: 'Retained stool or a colonic tumour', significance: 'key' },
    { sign: 'PR blood, a mass, or reduced sphincter tone', mechanism: 'Local malignancy, prolapse, or a neurological cause', significance: 'key' },
    { sign: 'Abdominal distension with tinkling bowel sounds', mechanism: 'Mechanical obstruction from an obstructing lesion', significance: 'key' },
    { sign: 'Dry skin, bradycardia, delayed reflexes', mechanism: 'Hypothyroidism as a secondary cause', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'FBC showing iron-deficiency anaemia', meaning: 'Red flag — occult colorectal blood loss until proven otherwise' },
    { clue: 'TSH, calcium, glucose', meaning: 'Detects hypothyroidism, hypercalcaemia and diabetes as reversible causes' },
    { clue: 'Persistent change in habit over 50 with any alarm feature', meaning: 'Colonoscopy to exclude colorectal cancer' },
    { clue: 'Medication review', meaning: 'Opioids, anticholinergics, calcium-channel blockers and iron are common culprits' },
  ],

  treatment: [
    { logic: 'Lifestyle first — fluid, fibre, activity, toileting routine', detail: 'Address the reversible cause and stop constipating drugs where possible.' },
    { logic: 'Laxative ladder: bulk/osmotic then stimulant', detail: 'Osmotic (macrogol) and stimulant laxatives; disimpact a loaded rectum before maintenance.' },
    { logic: 'Refer red flags for colonoscopy', detail: 'A new persistent change over 50, bleeding, weight loss, or iron-deficiency anaemia needs urgent lower GI investigation.' },
  ],

  mnemonics: [
    { hook: 'New change in habit + red flag = scope the colon', expansion: ['Over 50, bleeding, weight loss, anaemia, mass', 'IBS is a young patient with no alarms'] },
  ],

  traps: [
    {
      questionCategory: 'Change in bowel habit',
      wrongInstinct: 'Label a new persistent change in an older patient as simple constipation or IBS',
      rightAnswer: 'Treat a new persistent change over 50 (especially with anaemia or bleeding) as possible colorectal cancer and arrange colonoscopy',
      why: 'IBS is a diagnosis of exclusion in the young; alarm features mandate colonoscopy.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 68-year-old reports 3 months of increasing constipation, unintentional weight loss, and a haemoglobin of 90 g/L with low ferritin. The most important next step is:',
      options: [
        { id: 'a', text: 'Prescribe a stimulant laxative and review in 3 months' },
        { id: 'b', text: 'Colonoscopy to exclude colorectal cancer' },
        { id: 'c', text: 'Reassure that this is age-related constipation' },
        { id: 'd', text: 'Start a high-fibre diet only' },
      ],
      answerId: 'b',
      explanation: 'A new persistent change in bowel habit over 50 with weight loss and iron-deficiency anaemia is a cancer red flag that requires colonoscopy.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A 40-year-old on long-term morphine for back pain develops hard, infrequent stools. The most likely contributor is:',
      options: [
        { id: 'a', text: 'Hyperthyroidism' },
        { id: 'b', text: 'Opioid-induced constipation' },
        { id: 'c', text: 'Coeliac disease' },
        { id: 'd', text: 'Excess dietary fibre' },
      ],
      answerId: 'b',
      explanation: 'Opioids reduce gut motility and are a very common cause of secondary constipation; a laxative and medication review are appropriate.',
      tests: 'disease',
    },
  ],
};

export default fcp1ConstipationBowelHabit;
