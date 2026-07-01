import type { Lecture } from '../../lib/types';

export const vertigoVestibularDrugs: Lecture = {
  id: 'vertigo-vestibular-drugs',
  title: 'Vertigo & Vestibular Drugs',
  system: 'neuro',
  source: 'L11 — Drugs for Ear Disorders',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L11 Ear Drugs' },
    { kind: 'disease', label: 'Vertigo / Ménière' },
    { kind: 'mechanism', label: 'Vestibular suppression' },
    { kind: 'exam', label: 'Betahistine' },
  ],

  highYield: [
    '**Acute vertigo — vestibular suppressants** (3 classes): **antihistamines** (dimenhydrinate, **meclizine** — block H1 + M at vestibular nuclei), **anticholinergics** (**scopolamine** patch — best for motion sickness, but useless once symptoms have started), and **benzodiazepines** (diazepam, lorazepam — central suppression).',
    'All suppressants are **short-term only** — they **impair vestibular compensation** (and cause sedation). Add **antiemetics**: **promethazine** (D/M/H block), **metoclopramide** (D2), **ondansetron** (5-HT3).',
    '**Betahistine** = histamine analog (**H3 antagonist + weak H1 agonist**) → **↑ inner-ear blood flow** and inhibits vestibular nuclei; the mainstay for **Ménière disease** (vertigo, tinnitus, hearing loss).',
    '**Cinnarizine / flunarizine** (Ca²⁺-channel + H1 blockers) improve inner-ear flow for vertigo/dizziness (and migraine); side effects = **sleepiness, weight gain, (parkinsonism)**. Ginkgo biloba and nicergoline are other flow-enhancers.',
    '**Systemic drug-induced ototoxicity**: **aminoglycosides (often irreversible), loop diuretics, cisplatin/cytotoxics (irreversible)**; **salicylates/NSAIDs and quinine (reversible)**.',
  ],

  mechanism: {
    title: 'Suppress the vestibular signal acutely; restore flow chronically',
    steps: [
      { id: 's1', label: 'Acute vertigo: block H1/M or enhance GABA (suppressants)', emphasis: 'key' },
      { id: 's2', label: 'Add antiemetic (D2/5-HT3/H1) for nausea' },
      { id: 's3', label: 'Ménière: betahistine ↑ inner-ear blood flow' },
      { id: 's4', label: 'Long-term suppressants impair compensation → limit use', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Acute spinning vertigo with nausea', mechanism: 'Vestibular imbalance (treat short-term with suppressants)', significance: 'key' },
    { sign: 'Recurrent vertigo + fluctuating SNHL + tinnitus/fullness', mechanism: 'Ménière (endolymphatic hydrops) → betahistine', significance: 'key' },
    { sign: 'Sedation / dry mouth on therapy', mechanism: 'Antihistamine/anticholinergic effect', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Distinguish peripheral vs central vertigo first', meaning: 'Avoid masking a central cause with suppressants' },
    { clue: 'Ototoxic drug review', meaning: 'Aminoglycosides, loop diuretics, cisplatin, salicylates' },
    { clue: 'Ménière trigger history (salt, caffeine, alcohol, stress)', meaning: 'Guides lifestyle management' },
  ],

  treatment: [
    { logic: 'Acute vertigo: vestibular suppressant + antiemetic, short-term', detail: 'Prolonged use delays compensation.' },
    { logic: 'Ménière quiescent phase: betahistine, low-salt diet, ± diuretic', detail: 'Avoid triggers.' },
    { logic: 'Scopolamine for prophylaxis of motion sickness', detail: 'Give before symptom onset.' },
  ],

  mnemonics: [
    { hook: 'Suppressants: antiHistamine · antiCholinergic · Benzodiazepine (short-term)', expansion: ['Meclizine, scopolamine, diazepam'] },
    { hook: 'Betahistine for Ménière (H3 antagonist, ↑ inner-ear flow)', expansion: ['Vertigo, tinnitus, hearing loss'] },
  ],

  traps: [
    {
      questionCategory: 'Duration of vestibular suppressant use',
      wrongInstinct: 'Keep a patient on daily meclizine long-term to prevent all vertigo',
      rightAnswer: 'Use vestibular suppressants only short-term — chronic use impairs central vestibular compensation and prolongs disability',
      why: 'Suppressants blunt the vestibular signal that the brain needs to recalibrate; prolonged use prevents compensation, so they are for acute symptom relief only.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which drug, a histamine analog acting as an H3 antagonist to increase inner-ear blood flow, is used for maintenance therapy of Ménière disease?',
      options: [
        { id: 'a', text: 'Meclizine' },
        { id: 'b', text: 'Betahistine' },
        { id: 'c', text: 'Scopolamine' },
        { id: 'd', text: 'Ondansetron' },
      ],
      answerId: 'b',
      explanation: 'Betahistine (an H3 antagonist/weak H1 agonist) increases inner-ear microcirculation and reduces vestibular activity, and is the mainstay for Ménière disease. Meclizine/scopolamine are acute suppressants; ondansetron is an antiemetic.',
      tests: 'treatment',
    },
  ],
};

export default vertigoVestibularDrugs;
