import type { Lecture } from '../../lib/types';

export const ichDemographicEpidemiologicTransition: Lecture = {
  id: 'ich-demographic-epidemiologic-transition',
  title: 'Demographic & Epidemiologic Transition',
  system: 'community',
  source: 'L2 — Demography',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Community Health' },
    { kind: 'lecture', label: 'L2 Transitions' },
    { kind: 'mechanism', label: 'DTM stages' },
    { kind: 'disease', label: 'Infectious → NCD' },
    { kind: 'exam', label: 'Thailand aged society' },
  ],

  highYield: [
    '**The Demographic Transition Model (DTM)** describes how a population moves from high to low birth and death rates as a society develops. **Stage 1:** high birth + high death → slow growth. **Stage 2:** death rate falls first (sanitation, food, medicine) while births stay high → **rapid growth**. **Stage 3:** birth rate falls → growth slows. **Stage 4:** low birth + low death → stable. **Stage 5:** births < deaths → decline & ageing.',
    '**The key gap is in Stage 2:** mortality drops **before** fertility, so the widening gap between births and deaths drives the population explosion — not a rise in births. Fertility only falls later with contraception, urbanisation, and female education ([[ich-social-determinants-equity]]).',
    '**The Epidemiologic Transition (Omran, 1971)** runs alongside it: the dominant disease burden shifts from **infectious/famine** (“Age of Pestilence and Famine”) → **receding pandemics** → **degenerative & man-made / chronic non-communicable disease (NCD)**. The main killers move from acute infection to heart disease, cancer, stroke and diabetes.',
    '**Thailand transitioned unusually fast.** Its **TFR is now ~1.3** (well below replacement) and it is already an **“aged society”** (>14% of the population aged 65+ / over 20% aged 60+), heading toward **“super-aged.”** Its disease burden is dominated by NCDs and injuries ([[ich-demography-measures]]).',
    '**Population momentum** explains why numbers (and ageing) keep changing **after** fertility reaches replacement: the large cohorts already in or entering reproductive/older ages carry the population forward for decades — structure, not current fertility, drives the near future.',
  ],

  mechanism: {
    title: 'Demographic transition: high–high → death falls → birth falls → low–low → decline & ageing',
    steps: [
      { id: 's1', label: 'Stage 1: high birth + high death, population near-stable' },
      { id: 's2', label: 'Stage 2: death rate falls, births stay high → rapid growth', emphasis: 'key' },
      { id: 's3', label: 'Stage 3: birth rate falls, growth decelerates', emphasis: 'key' },
      { id: 's4', label: 'Stage 4: low birth + low death, stable population' },
      { id: 's5', label: 'Stage 5: births < deaths → decline, ageing, momentum plays out', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'In Stage 2 the death rate falls before the birth rate — that gap causes rapid growth', mechanism: 'Public-health and food gains cut mortality years before fertility responds', significance: 'key' },
    { sign: 'The epidemiologic transition shifts burden from infectious disease to chronic NCDs', mechanism: 'Longer survival + changed exposures move killers from acute to degenerative', significance: 'key' },
    { sign: 'Thailand is an aged society with sub-replacement fertility (TFR ~1.3)', mechanism: 'Rapid fertility decline plus rising longevity inverts the pyramid', significance: 'key' },
    { sign: 'Population momentum keeps a population changing after fertility hits replacement', mechanism: 'Large existing cohorts move through the age structure for decades', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A country where death rates have plunged but birth rates are still high', meaning: 'DTM Stage 2 — expect rapid population growth and a broad-based pyramid' },
    { clue: 'Leading causes of death shifting from diarrhoea and TB to stroke, diabetes and cancer', meaning: 'The epidemiologic transition toward chronic non-communicable disease' },
    { clue: 'Over 14% of the population aged 65+ and a shrinking workforce', meaning: 'An aged society — Thailand’s current stage, driving old-age dependency concerns' },
    { clue: 'Population still growing despite fertility already at replacement level', meaning: 'Population momentum from large cohorts already in the reproductive ages' },
  ],

  treatment: [
    { logic: 'Read a country’s stage from the birth–death gap, not from births alone', detail: 'Rapid growth in Stage 2 comes from falling deaths while births lag; do not misattribute it to rising fertility.' },
    { logic: 'Anticipate the NCD burden and ageing services as transition completes', detail: 'As populations age, redirect systems toward chronic-disease care, long-term care and prevention ([[ich-health-system-building-blocks]]) rather than acute infection alone.' },
  ],

  mnemonics: [
    { hook: 'DTM: “Deaths drop, then Births drop”', expansion: ['Stage 2 = deaths fall → growth surge', 'Stage 3 = births fall → growth slows', 'Stage 5 = births < deaths → decline & ageing'] },
    { hook: 'Omran: Pestilence → Receding → Degenerative', expansion: ['Age of pestilence & famine (infectious)', 'Age of receding pandemics', 'Age of degenerative & man-made disease (NCD)'] },
  ],

  traps: [
    {
      questionCategory: 'What drives Stage 2 population growth',
      wrongInstinct: 'The population explosion in Stage 2 is caused by a rise in the birth rate',
      rightAnswer: 'It is caused by the DEATH rate falling while the birth rate stays high — the gap between them widens',
      why: 'Fertility declines only later (Stage 3); the early surge is a mortality effect, a distinction examiners love to probe.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'In the demographic transition model, the rapid population growth of Stage 2 is primarily driven by which change?',
      options: [
        { id: 'a', text: 'A sharp rise in the birth rate' },
        { id: 'b', text: 'A fall in the death rate while births remain high' },
        { id: 'c', text: 'A fall in both birth and death rates together' },
        { id: 'd', text: 'Large-scale immigration' },
      ],
      answerId: 'b',
      explanation: 'In Stage 2, mortality falls (sanitation, nutrition, medicine) while fertility stays high, widening the gap between births and deaths and producing rapid growth. Fertility only declines later, in Stage 3.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'The epidemiologic transition describes which shift in a population’s disease burden?',
      options: [
        { id: 'a', text: 'From chronic non-communicable disease toward infectious disease' },
        { id: 'b', text: 'From infectious/famine-related disease toward chronic non-communicable disease' },
        { id: 'c', text: 'From injuries toward infectious disease' },
        { id: 'd', text: 'From mental illness toward degenerative disease' },
      ],
      answerId: 'b',
      explanation: 'Omran’s epidemiologic transition describes the move from an age of pestilence and famine (infectious disease) through receding pandemics to an age of degenerative and man-made chronic NCDs such as heart disease, stroke, cancer and diabetes.',
      tests: 'disease',
    },
  ],
};

export default ichDemographicEpidemiologicTransition;
