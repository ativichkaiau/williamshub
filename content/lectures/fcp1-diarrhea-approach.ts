import type { Lecture } from '../../lib/types';

export const fcp1DiarrheaApproach: Lecture = {
  id: 'fcp1-diarrhea-approach',
  title: 'Approach to Diarrhoea',
  system: 'clinical',
  source: 'L16 — Change in Bowel Habit',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L16 Change in Bowel Habit' },
    { kind: 'disease', label: 'Acute vs chronic diarrhoea' },
    { kind: 'mechanism', label: 'Osmotic · secretory · inflammatory' },
    { kind: 'investigation', label: 'Stool studies · calprotectin' },
  ],

  highYield: [
    '**Diarrhoea** is increased stool frequency and liquidity: **acute (<2 weeks, usually infective and self-limiting)** vs **chronic (>4 weeks, needs a workup)**. Assess **dehydration** first — it is what kills, especially at the extremes of age. See paediatric loss in [[fcp1-pediatric-vomiting-diarrhea]].',
    'Mechanistic buckets: **osmotic** (stops with fasting — lactose, laxatives), **secretory** (persists despite fasting, large volume — cholera, hormonal), **inflammatory** (blood, mucus, fever — dysentery, IBD, ischaemic colitis), and **motility** (IBS, hyperthyroidism).',
    '**Red flags** that mandate investigation: **blood in the stool**, **weight loss**, **nocturnal diarrhoea** (organic, wakes the patient), **anaemia**, onset **over 50**, and a family history of colorectal cancer or IBD.',
    'Acute **bloody** diarrhoea with fever is **dysentery** — do **not** give antimotility agents (risk of toxic megacolon). Recent antibiotics point to **Clostridioides difficile**. Contrast constipation in [[fcp1-constipation-bowel-habit]] and bleeding in [[fcp1-gi-bleed-lower]].',
    'Chronic diarrhoea with weight loss needs a structured workup — bloods, coeliac serology, **faecal calprotectin**, stool studies, and **colonoscopy** for alarm features; this overlaps with unintentional [[fcp1-weight-loss-approach]].',
  ],

  mechanism: {
    title: 'Acute vs chronic, then mechanism, then red flags',
    steps: [
      { id: 's1', label: 'Define: acute (<2 wk) vs chronic (>4 wk)', emphasis: 'key' },
      { id: 's2', label: 'Categorise: osmotic / secretory / inflammatory / motility', emphasis: 'key' },
      { id: 's3', label: 'Assess hydration and electrolytes', emphasis: 'key' },
      { id: 's4', label: 'Screen red flags: blood, weight loss, nocturnal, anaemia', emphasis: 'key' },
      { id: 's5', label: 'Bloody diarrhoea + toxicity → dysentery/colitis; no antimotility', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Dry mucous membranes, tachycardia, reduced skin turgor, oliguria', mechanism: 'Volume depletion from fluid loss', significance: 'key' },
    { sign: 'Visible blood and mucus in the stool', mechanism: 'Mucosal inflammation (invasive infection, IBD, ischaemia)', significance: 'key' },
    { sign: 'Diffuse tenderness with peritonism or toxic distension', mechanism: 'Severe colitis with risk of toxic megacolon', significance: 'key' },
    { sign: 'Weight loss, clubbing, or a palpable mass', mechanism: 'Chronic organic disease (IBD, malignancy, malabsorption)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Stool culture, ova and parasites, C. difficile toxin', meaning: 'Identifies an infective cause in acute or bloody diarrhoea' },
    { clue: 'Diarrhoea that stops when the patient fasts', meaning: 'Osmotic cause; secretory diarrhoea persists with fasting' },
    { clue: 'Raised faecal calprotectin', meaning: 'Points to inflammatory bowel disease over IBS and prompts colonoscopy' },
    { clue: 'Alarm features or a chronic change over 50 years', meaning: 'Colonoscopy to exclude malignancy or IBD' },
  ],

  treatment: [
    { logic: 'Rehydrate first — oral rehydration solution, IV fluids if severe', detail: 'Fluid and electrolyte replacement is the priority; most acute infective diarrhoea is self-limiting.' },
    { logic: 'Avoid antimotility drugs in bloody or febrile diarrhoea', detail: 'Loperamide risks toxic megacolon and prolongs dysentery; reserve antibiotics for specific indications.' },
    { logic: 'Refer or admit for red flags or severe dehydration', detail: 'Chronic diarrhoea with alarm features needs colonoscopy; shock needs resuscitation.' },
  ],

  mnemonics: [
    { hook: 'Osmotic stops with fasting; secretory keeps flowing', expansion: ['Blood + mucus + fever = inflammatory', 'No antimotility in dysentery'] },
  ],

  traps: [
    {
      questionCategory: 'Bloody febrile diarrhoea',
      wrongInstinct: 'Give loperamide to settle the stools',
      rightAnswer: 'Withhold antimotility agents; rehydrate and investigate for dysentery or colitis',
      why: 'Antimotility drugs in invasive colitis risk toxic megacolon and prolong the illness.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 24-year-old has 6 days of large-volume watery diarrhoea that continues even when he stops eating; fasting does not reduce the stool volume. The mechanism is:',
      options: [
        { id: 'a', text: 'Osmotic diarrhoea' },
        { id: 'b', text: 'Secretory diarrhoea' },
        { id: 'c', text: 'Inflammatory diarrhoea' },
        { id: 'd', text: 'Motility-related diarrhoea' },
      ],
      answerId: 'b',
      explanation: 'Secretory diarrhoea persists during fasting because it is driven by active ion and water secretion, unlike osmotic diarrhoea which stops when the offending solute is withheld.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A 30-year-old returns from travel with fever and bloody diarrhoea. The most appropriate initial step is:',
      options: [
        { id: 'a', text: 'Start loperamide to reduce stool frequency' },
        { id: 'b', text: 'Oral rehydration and stool studies, avoiding antimotility agents' },
        { id: 'c', text: 'Urgent colonoscopy the same day' },
        { id: 'd', text: 'Reassure with no investigation' },
      ],
      answerId: 'b',
      explanation: 'Bloody febrile diarrhoea suggests dysentery; the priority is rehydration and stool studies, and antimotility drugs are avoided because of the risk of toxic megacolon.',
      tests: 'treatment',
    },
  ],
};

export default fcp1DiarrheaApproach;
