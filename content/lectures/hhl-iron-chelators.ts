import type { Lecture } from '../../lib/types';

export const hhlIronChelators: Lecture = {
  id: 'hhl-iron-chelators',
  title: 'Iron Chelating Agents',
  system: 'heme',
  source: 'L11 — Drugs for Anemia & Iron Chelation',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L11 Anemia & Iron' },
    { kind: 'disease', label: 'Transfusional iron overload' },
    { kind: 'mechanism', label: 'Iron → ROS → organ toxicity' },
    { kind: 'treatment', label: 'Deferoxamine · deferiprone · deferasirox' },
  ],

  highYield: [
    '**Transfusion-dependent thalassemia** (very common in Thailand) has **no route to excrete iron** — accumulation causes **cardiac (cardiomyopathy/arrhythmia — the leading cause of death), hepatic (cirrhosis) and endocrine (diabetes, hypogonadism, growth failure)** damage.',
    '**Deferoxamine**: parenteral only, given as a slow **overnight SC infusion** → poor compliance; toxicity is **retinal & auditory** (monitor eyes/ears) plus growth/skeletal effects in children.',
    '**Deferiprone**: oral, uniquely good at **removing cardiac iron**, but risks **agranulocytosis** → **monitor CBC/ANC (weekly)**; also arthropathy.',
    '**Deferasirox**: oral **once-daily** (best adherence), but **renal and hepatic** toxicity and GI bleeding → monitor **creatinine and LFTs**.',
    'Monitor iron burden with **serum ferritin (imperfect — an acute-phase reactant)** plus **cardiac MRI T2*** and liver iron concentration; **T2* <20 ms = cardiac iron loading**.',
  ],

  mechanism: {
    title: 'Transfusional iron overload drives organ toxicity',
    steps: [
      { id: 's1', label: 'Chronic transfusion with no excretory route → iron accumulates', emphasis: 'key' },
      { id: 's2', label: 'Non-transferrin-bound (free) iron → reactive oxygen species → tissue injury' },
      { id: 's3', label: 'Cardiac siderosis → cardiomyopathy & arrhythmia', emphasis: 'danger' },
      { id: 's4', label: 'Chelator binds iron → urinary/faecal excretion', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Ferritin persistently >1000–2500 ng/mL', mechanism: 'High total-body iron burden → intensify chelation', significance: 'key' },
    { sign: 'Cardiac MRI T2* < 20 ms', mechanism: 'Myocardial iron loading → cardiac risk; favour deferiprone or combination', significance: 'key' },
    { sign: 'New fever/sore throat with neutropenia on deferiprone', mechanism: 'Agranulocytosis — stop the drug immediately', significance: 'key' },
    { sign: 'Rising creatinine on deferasirox', mechanism: 'Dose-related nephrotoxicity', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Serum ferritin trend', meaning: 'Surrogate for total-body iron, but a lagging acute-phase reactant — do not rely on it alone' },
    { clue: 'Cardiac MRI T2*', meaning: 'Direct measure of myocardial iron; guides chelator choice (deferiprone for cardiac iron)' },
    { clue: 'Weekly ANC on deferiprone', meaning: 'Detects agranulocytosis early' },
    { clue: 'Creatinine + LFTs on deferasirox', meaning: 'Screens for renal and hepatic toxicity' },
  ],

  treatment: [
    { logic: 'Start chelation after significant transfusion burden (≈10–20 units or ferritin >1000)', detail: 'Aim to keep ferritin down and prevent cardiac/endocrine iron loading before damage occurs.' },
    { logic: 'Match the chelator to iron distribution and adherence', detail: 'Deferiprone (or combination) for cardiac iron; deferasirox for convenient once-daily oral dosing; deferoxamine when orals are not tolerated.' },
    { logic: 'Combine deferoxamine + deferiprone for severe cardiac loading', detail: 'Dual therapy clears the heart faster in high-risk siderotic cardiomyopathy.' },
  ],

  mnemonics: [
    { hook: 'Prone → counts, sirox → kidneys, oxamine → eyes & ears', expansion: ['deferiPRONE → agranulocytosis (check CBC/ANC); best for cardiac iron', 'deferaSIROX → renal & hepatic toxicity; once-daily oral', 'deferOXAMINE → parenteral; retinal/auditory & growth toxicity'] },
  ],

  traps: [
    {
      questionCategory: 'Iron-overload monitoring',
      wrongInstinct: 'A near-normal serum ferritin means the heart is safe',
      rightAnswer: 'Cardiac iron can be high despite a reassuring ferritin — check cardiac MRI T2*',
      why: 'Ferritin lags and is an acute-phase reactant; cardiac siderosis is the leading cause of death and needs direct T2* assessment.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A teenager with transfusion-dependent thalassemia has cardiac iron on MRI T2* and cannot tolerate overnight subcutaneous infusions. Which chelator best addresses the cardiac iron?',
      options: [
        { id: 'a', text: 'Deferoxamine' },
        { id: 'b', text: 'Deferiprone' },
        { id: 'c', text: 'Deferasirox' },
        { id: 'd', text: 'No chelation is indicated' },
      ],
      answerId: 'b',
      explanation: 'Deferiprone is oral and penetrates myocardium well, making it (often combined with deferoxamine) the agent of choice for cardiac iron — with weekly CBC monitoring for agranulocytosis.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'A patient on deferiprone develops fever and a sore throat. What is the most appropriate immediate step?',
      options: [
        { id: 'a', text: 'Reassure and continue the drug' },
        { id: 'b', text: 'Check a full blood count/ANC and stop the drug if neutropenic' },
        { id: 'c', text: 'Add deferasirox and continue deferiprone' },
        { id: 'd', text: 'Increase the deferiprone dose' },
      ],
      answerId: 'b',
      explanation: 'Deferiprone can cause agranulocytosis; fever and sore throat mandate an urgent CBC/ANC and holding the drug if neutropenia is present.',
      tests: 'investigation',
    },
  ],
};

export default hhlIronChelators;
