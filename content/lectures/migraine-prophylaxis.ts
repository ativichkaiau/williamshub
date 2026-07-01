import type { Lecture } from '../../lib/types';

export const migraineProphylaxis: Lecture = {
  id: 'migraine-prophylaxis',
  title: 'Migraine Prophylaxis',
  system: 'neuro',
  source: 'L13 — Antimigraine Drugs',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L13 Antimigraine Drugs' },
    { kind: 'disease', label: 'Migraine prevention' },
    { kind: 'mechanism', label: 'Reduce attack frequency' },
    { kind: 'exam', label: 'Propranolol / topiramate' },
  ],

  highYield: [
    'Prophylaxis is for **frequent or disabling migraine** — reduce attack frequency/severity (not for a single attack). Choose the agent by the patient’s **comorbidity**.',
    '**Beta-blockers (propranolol, timolol)** = first-line, especially with **hypertension**; **contraindicated in asthma**.',
    '**Anticonvulsants (topiramate, valproate)** — good if there is coexisting **seizure, mania, or anxiety**; topiramate causes cognitive slowing/weight loss, valproate is teratogenic.',
    '**Antidepressants — amitriptyline (TCA), venlafaxine (SNRI)** — preferred when migraine coexists with **depression or insomnia**.',
    '**CGRP monoclonal antibodies (erenumab, fremanezumab, galcanezumab)** are highly effective SC injectables; **onabotulinumtoxinA (Botox)** is used for **chronic migraine (≥15 headache days/month)**; supplements (magnesium, riboflavin, CoQ10) are adjuncts.',
  ],

  mechanism: {
    title: 'Dampen cortical excitability & CGRP signaling over time',
    steps: [
      { id: 's1', label: 'Frequent/disabling migraine → start prevention', emphasis: 'key' },
      { id: 's2', label: 'Reduce neuronal excitability (β-blocker, anticonvulsant, TCA)' },
      { id: 's3', label: 'Block CGRP chronically (mAbs)' },
      { id: 's4', label: 'Match drug to comorbidity (HTN, seizure, depression)' },
    ],
  },

  examFindings: [
    { sign: 'Migraine + hypertension', mechanism: 'Beta-blocker prophylaxis', significance: 'key' },
    { sign: 'Migraine + depression/insomnia', mechanism: 'Amitriptyline/venlafaxine prophylaxis', significance: 'key' },
    { sign: 'Chronic migraine ≥15 days/month', mechanism: 'Botox / CGRP mAb indication', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Headache frequency/disability (diary)', meaning: 'Decides need for prophylaxis' },
    { clue: 'Comorbidities (asthma, seizures, mood, pregnancy)', meaning: 'Selects/avoids specific agents' },
    { clue: 'Response over 2–3 months', meaning: 'Preventives need a trial period' },
  ],

  treatment: [
    { logic: 'Beta-blocker first-line (avoid in asthma)', detail: 'Propranolol; also good with HTN.' },
    { logic: 'Topiramate/valproate, or amitriptyline per comorbidity', detail: 'Individualize.' },
    { logic: 'CGRP mAbs / Botox for refractory or chronic migraine', detail: 'Highly effective, well tolerated.' },
  ],

  mnemonics: [
    { hook: 'Prophylaxis: β-blocker (HTN), topiramate/valproate (seizure), amitriptyline (depression)', expansion: ['Pick by comorbidity'] },
    { hook: 'Botox & CGRP mAbs = chronic/refractory migraine', expansion: ['≥15 headache days/month'] },
  ],

  traps: [
    {
      questionCategory: 'Preventive vs acute migraine therapy',
      wrongInstinct: 'Prophylactic drugs like propranolol or topiramate can be taken at headache onset to abort an attack',
      rightAnswer: 'Preventives are taken daily to reduce attack frequency and take weeks to work — they do not abort an acute attack (use NSAIDs/triptans for that)',
      why: 'Migraine prophylaxis modifies attack frequency over time; acute (abortive) therapy is a separate category taken during an attack.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A hypertensive patient with frequent migraines needs preventive therapy but also has asthma. Which first-line prophylactic should be AVOIDED?',
      options: [
        { id: 'a', text: 'Topiramate' },
        { id: 'b', text: 'Propranolol (beta-blocker)' },
        { id: 'c', text: 'Amitriptyline' },
        { id: 'd', text: 'A CGRP monoclonal antibody' },
      ],
      answerId: 'b',
      explanation: 'Beta-blockers such as propranolol are effective migraine prophylaxis (especially with hypertension) but are contraindicated in asthma; an alternative like topiramate or a CGRP mAb should be chosen.',
      tests: 'treatment',
    },
  ],
};

export default migraineProphylaxis;
