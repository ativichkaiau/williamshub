import type { Lecture } from '../../lib/types';

export const subacuteChronicMeningitis: Lecture = {
  id: 'subacute-chronic-meningitis',
  title: 'TB, Cryptococcal & Eosinophilic Meningitis',
  system: 'neuro',
  source: 'L18 — CNS Infections & Immune Disorders',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L18 CNS Infections' },
    { kind: 'disease', label: 'Chronic meningitis' },
    { kind: 'mechanism', label: 'Lymphocytic / eosinophilic CSF' },
    { kind: 'exam', label: 'Crypto antigen / ADA' },
  ],

  highYield: [
    '**Tuberculous meningitis (TBM)**: **subacute** (>1 week), basal meningitis → **cranial nerve palsies (III, VI), hydrocephalus (up to 80%), stroke**. CSF = **lymphocytic, very high protein, low glucose**; **ADA >20**, AFB/GeneXpert. Treat = **anti-TB (2IRZE/10IR ≥12 months) + adjunctive corticosteroids**.',
    '**Cryptococcal meningitis** (C. neoformans, inhaled then hematogenous): mainly **immunocompromised/HIV**; subacute–chronic with **markedly raised intracranial pressure/papilledema**. Diagnosis = **cryptococcal antigen (blood/CSF, >99% sensitive/specific)**, India ink, culture; imaging may show **basal-ganglia gelatinous pseudocysts (“soap-bubble”)**.',
    'Cryptococcal treatment (3 phases): **induction = amphotericin B + flucytosine → consolidation/maintenance = fluconazole**; aggressively **manage ↑ICP (serial LPs/drainage)**.',
    '**Eosinophilic meningitis** (>10 eosinophils/mm³ or >10% CSF WBC): **Angiostrongylus cantonensis** (rat lungworm — raw snails/slugs) and **Gnathostoma spinigerum** (undercooked fish; migratory swellings, radiculomyelitis, ICH/SAH). Treat with **corticosteroids ± albendazole**.',
    'Chronic/lymphocytic meningitis differential also includes **syphilis** and malignancy — the CSF cell pattern + specific tests (antigen, ADA, serology) narrow it.',
  ],

  mechanism: {
    title: 'Slow-growing organisms → lymphocytic/eosinophilic CSF',
    steps: [
      { id: 's1', label: 'Indolent pathogen (TB, Cryptococcus, helminth)' },
      { id: 's2', label: 'Lymphocytic (or eosinophilic) CSF pleocytosis', emphasis: 'key' },
      { id: 's3', label: 'Basal meningitis → cranial nerves, hydrocephalus, ↑ICP' },
      { id: 's4', label: 'Specific test clinches it (ADA, crypto antigen, exposure)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Subacute meningitis + cranial nerve palsies + hydrocephalus', mechanism: 'Tuberculous (basal) meningitis', significance: 'key' },
    { sign: 'Meningitis with very high opening pressure in HIV', mechanism: 'Cryptococcal meningitis', significance: 'key' },
    { sign: 'Eosinophilic CSF after eating raw snails/fish', mechanism: 'Angiostrongylus / Gnathostoma', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'CSF ADA, AFB, GeneXpert MTB/RIF', meaning: 'Tuberculous meningitis' },
    { clue: 'Cryptococcal antigen (CrAg), India ink', meaning: 'Cryptococcal meningitis' },
    { clue: 'CSF eosinophil count + exposure history', meaning: 'Eosinophilic (helminthic) meningitis' },
  ],

  treatment: [
    { logic: 'TBM: anti-TB regimen + corticosteroids', detail: 'Steroids reduce mortality/morbidity.' },
    { logic: 'Cryptococcal: amphotericin B + flucytosine → fluconazole; treat ↑ICP', detail: 'Serial LPs for pressure.' },
    { logic: 'Eosinophilic: steroids ± albendazole', detail: 'Mostly supportive.' },
  ],

  mnemonics: [
    { hook: 'TBM = basal meningitis: cranial nerves + hydrocephalus + low glucose + ADA↑', expansion: ['Steroids adjunct'] },
    { hook: 'Cryptococcus = HIV + high ICP + CrAg + India ink', expansion: ['Ampho B + flucytosine'] },
  ],

  traps: [
    {
      questionCategory: 'Managing cryptococcal meningitis',
      wrongInstinct: 'Antifungal therapy alone is enough in cryptococcal meningitis',
      rightAnswer: 'You must also aggressively manage the raised intracranial pressure (serial LPs/drainage) — high ICP is a major cause of death even with antifungals',
      why: 'Cryptococcal meningitis often produces very high opening pressures that cause visual loss and death independent of the infection, so pressure control is as important as amphotericin/flucytosine.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An HIV-positive patient has subacute headache and a very high CSF opening pressure. CSF shows lymphocytes and low glucose. Which test is most sensitive/specific for the diagnosis?',
      options: [
        { id: 'a', text: 'Gram stain' },
        { id: 'b', text: 'Cryptococcal antigen (CrAg)' },
        { id: 'c', text: 'CSF Gram-negative culture' },
        { id: 'd', text: 'Acid-fast smear' },
      ],
      answerId: 'b',
      explanation: 'Cryptococcal antigen testing (blood/CSF) exceeds 99% sensitivity and specificity for cryptococcal meningitis, which classically causes very high intracranial pressure in immunocompromised patients.',
      tests: 'investigation',
    },
  ],
};

export default subacuteChronicMeningitis;
