import type { Lecture } from '../../lib/types';

export const migrainePathophysiologyAcute: Lecture = {
  id: 'migraine-pathophysiology-acute',
  title: 'Migraine Pathophysiology & Acute Treatment',
  system: 'neuro',
  source: 'L13 — Antimigraine Drugs',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L13 Antimigraine Drugs' },
    { kind: 'disease', label: 'Migraine' },
    { kind: 'mechanism', label: 'Trigeminovascular / CGRP' },
    { kind: 'exam', label: 'Triptans' },
  ],

  highYield: [
    '**Migraine** = episodic **unilateral throbbing** headache with **nausea, photophobia, phonophobia**; 4 phases (prodrome, **aura ~25%**, headache, postdrome). More common in women.',
    'Pathogenesis = **trigeminovascular activation**: trigeminal nerve releases **CGRP, serotonin, substance P** → neurogenic inflammation & vasodilation. **Aura = cortical spreading depression** (a wave of depolarization from the visual cortex → scintillating scotoma).',
    '**Acute treatment (mild–moderate): NSAIDs** (ibuprofen, naproxen) inhibit prostaglandins.',
    '**Triptans (5-HT1B/1D agonists)** = first-line for moderate–severe; give **after the aura**. Key risk = **coronary vasospasm (5-HT1B)** → **contraindicated in coronary artery disease / uncontrolled hypertension**; avoid with SSRIs/MAOIs (serotonin syndrome) and **ergots** (additive vasoconstriction). **Ergots** (ergotamine, DHE) share these cautions and are contraindicated in pregnancy.',
    'Newer agents: **gepants (CGRP-receptor antagonists — rimegepant, ubrogepant)** and **ditans (5-HT1F agonist — lasmiditan)** do **not vasoconstrict → safe in cardiovascular disease** (lasmiditan causes somnolence). **Dopamine (D2) antagonists (metoclopramide)** treat the nausea and aid gastric absorption.',
  ],

  mechanism: {
    title: 'Trigeminovascular activation → headache; block it at several points',
    steps: [
      { id: 's1', label: 'Cortical spreading depression → aura' },
      { id: 's2', label: 'Trigeminal release of CGRP/serotonin → inflammation', emphasis: 'key' },
      { id: 's3', label: 'Triptans (5-HT1B/1D) & ergots vasoconstrict + ↓ peptide release' },
      { id: 's4', label: 'Gepants/ditans block CGRP without vasoconstriction', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Unilateral throbbing headache + nausea + photophobia', mechanism: 'Trigeminovascular activation', significance: 'key' },
    { sign: 'Preceding scintillating scotoma / zigzag lines', mechanism: 'Cortical spreading depression (aura)', significance: 'key' },
    { sign: 'Chest tightness on a triptan', mechanism: 'Coronary vasospasm (5-HT1B)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Clinical diagnosis (ICHD criteria)', meaning: 'Primary headache; exclude red flags' },
    { clue: 'Cardiovascular history before triptans/ergots', meaning: 'Vasoconstriction contraindications' },
    { clue: 'Aura present?', meaning: 'Give triptan after aura completes' },
  ],

  treatment: [
    { logic: 'NSAIDs first for mild–moderate; triptan for moderate–severe', detail: 'Add antiemetic (metoclopramide).' },
    { logic: 'Gepants/ditans if CVD or triptan failure/contraindication', detail: 'No vasoconstriction.' },
  ],

  mnemonics: [
    { hook: 'Triptans = 5-HT1B/1D agonists; CI in CAD/uncontrolled HTN (coronary spasm)', expansion: ['Avoid with ergots & serotonergics'] },
    { hook: 'Gepants (CGRP block) & ditans (5-HT1F) = no vasoconstriction → CVD-safe', expansion: ['Newer acute options'] },
  ],

  traps: [
    {
      questionCategory: 'Acute migraine drug in a patient with heart disease',
      wrongInstinct: 'Use a triptan for any moderate–severe migraine regardless of cardiac history',
      rightAnswer: 'Triptans and ergots cause coronary vasoconstriction and are contraindicated in coronary artery disease/uncontrolled hypertension — use a gepant or ditan (no vasoconstriction) instead',
      why: '5-HT1B receptors on coronary arteries mediate vasospasm, so triptans/ergots are unsafe in vascular disease; CGRP antagonists and lasmiditan relieve migraine without constricting vessels.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 55-year-old with known coronary artery disease has frequent severe migraines. Which acute therapy is safest regarding cardiovascular risk?',
      options: [
        { id: 'a', text: 'Sumatriptan' },
        { id: 'b', text: 'Ergotamine' },
        { id: 'c', text: 'A gepant (CGRP antagonist) or lasmiditan (ditan)' },
        { id: 'd', text: 'Dihydroergotamine' },
      ],
      answerId: 'c',
      explanation: 'Triptans and ergots cause coronary vasoconstriction and are contraindicated in coronary artery disease. Gepants (CGRP-receptor antagonists) and lasmiditan (a 5-HT1F ditan) relieve migraine without vasoconstriction.',
      tests: 'treatment',
    },
  ],
};

export default migrainePathophysiologyAcute;
