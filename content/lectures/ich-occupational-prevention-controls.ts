import type { Lecture } from '../../lib/types';

export const ichOccupationalPreventionControls: Lecture = {
  id: 'ich-occupational-prevention-controls',
  title: 'Prevention & the Hierarchy of Controls',
  system: 'community',
  source: 'L6 — Occupational Medicine',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Community Health' },
    { kind: 'lecture', label: 'L6 Occupational Medicine' },
    { kind: 'mechanism', label: 'Hierarchy of controls' },
    { kind: 'treatment', label: 'Surveillance · fitness-for-work' },
    { kind: 'exam', label: 'PPE is last resort' },
  ],

  highYield: [
    '**The hierarchy of controls ranks interventions most → least effective: Elimination → Substitution → Engineering → Administrative → PPE.** The top acts on the **hazard itself** and protects everyone by design; the bottom relies on the individual worker. **PPE is the LAST resort**, not the first move.',
    '**Elimination (remove the hazard) and Substitution (replace it with something safer) are most effective because they act at the SOURCE** — the same principle as breaking the exposure pathway at source ([[ich-environmental-risk-prevention]]).',
    '**Engineering controls isolate people from the hazard without depending on behaviour** — local exhaust ventilation, enclosure, machine guarding, noise damping. **Administrative controls change how people work** — job rotation, work–rest cycles, training, signage. **PPE (respirators, ear plugs, gloves) is least effective** because it fails whenever it is ill-fitting, uncomfortable or not worn.',
    '**Health surveillance and fitness-for-work back up the controls.** Pre-placement and periodic exams — **audiometry, spirometry, biomonitoring** — detect early effects (secondary prevention) and confirm fitness; a **sentinel case** triggers a workplace review ([[ich-occupational-diseases-diagnosis]]).',
    '**Thai law frames the duty:** the **Occupational Safety, Health and Environment Act B.E. 2554 (2011)** obliges employers to provide a safe workplace, and the **Workmen’s Compensation Act** provides **no-fault** compensation — an injured or diseased worker is paid regardless of blame.',
  ],

  mechanism: {
    title: 'Hierarchy of controls (most → least effective): Elimination → Substitution → Engineering → Administrative → PPE',
    steps: [
      { id: 's1', label: 'Elimination — remove the hazard entirely (most effective)', emphasis: 'key' },
      { id: 's2', label: 'Substitution — replace it with a safer alternative', emphasis: 'key' },
      { id: 's3', label: 'Engineering — isolate people from the hazard (ventilation, guarding)' },
      { id: 's4', label: 'Administrative — change how people work (rotation, training)' },
      { id: 's5', label: 'PPE — last resort; over-reliance is the classic failure', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Higher up the hierarchy = more effective and more reliable', mechanism: 'Top controls remove or isolate the hazard and do not depend on worker behaviour', significance: 'key' },
    { sign: 'PPE is the LEAST effective control and the last resort', mechanism: 'It only works when correctly fitted and worn every time, so it fails easily', significance: 'key' },
    { sign: 'Elimination and substitution win because they act at the source', mechanism: 'Removing or replacing the hazard protects everyone by design, permanently', significance: 'key' },
    { sign: 'Workmen’s compensation is a no-fault system', mechanism: 'The worker is compensated for work-related injury/disease regardless of who was at fault', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Swapping silica sand for a non-silica abrasive in sandblasting', meaning: 'Substitution — high on the hierarchy, removing the hazardous agent at source' },
    { clue: 'Fitting local exhaust ventilation over a solvent degreasing tank', meaning: 'Engineering control — isolates workers from the hazard without relying on behaviour' },
    { clue: 'Rotating staff to cap each person’s daily noise-dose hours', meaning: 'Administrative control — it changes work practice rather than the hazard' },
    { clue: 'Issuing ear plugs as the ONLY measure in a 95 dB weaving hall', meaning: 'PPE alone — the weakest option; the hazard remains uncontrolled at source' },
  ],

  treatment: [
    { logic: 'Always climb the hierarchy before settling', detail: 'Ask whether the hazard can be eliminated or substituted first; drop to engineering, then administrative, and only then PPE.' },
    { logic: 'Wrap controls in surveillance and fitness-for-work', detail: 'Pre-placement and periodic audiometry/spirometry/biomonitoring detect early effects and confirm fitness ([[ich-occupational-diseases-diagnosis]]).' },
    { logic: 'Meet the legal duty', detail: 'Comply with the OSHE Act B.E. 2554 and provide no-fault workmen’s compensation for work-related injury and disease.' },
  ],

  mnemonics: [
    { hook: 'Every Sensible Engineer Approaches PPE last', expansion: ['Elimination', 'Substitution', 'Engineering', 'Administrative', 'PPE (last resort)'] },
    { hook: 'PPE = the Last line, not the first', expansion: ['It relies on the worker and fails easily', 'Control the hazard at source before reaching for masks and plugs'] },
  ],

  traps: [
    {
      questionCategory: 'Choosing the best control measure',
      wrongInstinct: 'Just give the workers PPE — masks, ear plugs, gloves',
      rightAnswer: 'PPE is the LEAST effective, last-resort control — eliminate or substitute the hazard at source first',
      why: 'Top-of-hierarchy controls protect everyone by design; PPE depends on constant correct use and fails whenever it slips.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'According to the hierarchy of controls, which measure is the MOST effective way to protect workers from a hazardous chemical?',
      options: [
        { id: 'a', text: 'Issuing respirators to all exposed workers' },
        { id: 'b', text: 'Rotating workers to limit each person’s exposure time' },
        { id: 'c', text: 'Eliminating the chemical from the process altogether' },
        { id: 'd', text: 'Posting hazard-warning signage in the work area' },
      ],
      answerId: 'c',
      explanation: 'Elimination sits at the top of the hierarchy because it removes the hazard at source and protects everyone by design. Respirators (PPE) are the least effective, last-resort option; rotation and signage are administrative controls.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Installing local exhaust ventilation over a degreasing tank to capture solvent vapour is an example of which type of control?',
      options: [
        { id: 'a', text: 'Elimination' },
        { id: 'b', text: 'Engineering control' },
        { id: 'c', text: 'Administrative control' },
        { id: 'd', text: 'Personal protective equipment' },
      ],
      answerId: 'b',
      explanation: 'Local exhaust ventilation is an engineering control: it isolates workers from the hazard without depending on their behaviour. It ranks below elimination/substitution but above administrative controls and PPE.',
      tests: 'exam',
    },
  ],
};

export default ichOccupationalPreventionControls;
