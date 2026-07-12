import type { Lecture } from '../../lib/types';

export const hhlAntimalarialTreatment: Lecture = {
  id: 'hhl-antimalarial-treatment',
  title: 'Antimalarial Treatment: Uncomplicated vs Severe',
  system: 'heme',
  source: 'L26 — Antimalarial Drugs',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L26 Antimalarials' },
    { kind: 'treatment', label: 'ACT · IV artesunate' },
    { kind: 'disease', label: 'Falciparum vs vivax' },
    { kind: 'mechanism', label: 'Resistance (Greater Mekong)' },
  ],

  highYield: [
    '**Uncomplicated P. falciparum → an artemisinin-based combination therapy (ACT)** — artemisinin plus a longer-acting partner drug. This is first-line worldwide.',
    '**P. vivax → a blood schizonticide (chloroquine, or ACT where chloroquine-resistant) PLUS primaquine radical cure** for the hypnozoites — given only after **G6PD testing**. Skipping primaquine = relapse.',
    '**Severe malaria (any species, usually falciparum) → IV artesunate immediately**, then **complete a full oral ACT** once tolerating orally. See [[hhl-severe-falciparum-malaria]].',
    'The **Greater Mekong Subregion, including Thailand, is the epicentre of artemisinin (Kelch13) and partner-drug resistance** — local drug policy and confirmed response matter here more than anywhere.',
    '**Chemoprophylaxis** suppresses the blood stage in travellers (atovaquone–proguanil, doxycycline, mefloquine); it does **not** clear hypnozoites unless terminal primaquine is added.',
  ],

  mechanism: {
    title: 'Treat by species and severity — resistance-aware in the Mekong',
    steps: [
      { id: 's1', label: 'Confirm species + severity (film / RDT)', emphasis: 'key' },
      { id: 's2', label: 'Uncomplicated falciparum → oral ACT', emphasis: 'key' },
      { id: 's3', label: 'Vivax → chloroquine/ACT + primaquine radical cure (G6PD first)', emphasis: 'key' },
      { id: 's4', label: 'Severe → IV artesunate now, then full oral ACT', emphasis: 'danger' },
      { id: 's5', label: 'In Thailand/GMS, account for artemisinin + partner-drug resistance', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Impaired consciousness, hyperparasitemia or organ dysfunction', mechanism: 'Severe malaria → switch to IV artesunate', significance: 'key' },
    { sign: 'P. vivax on film with a normal G6PD result', mechanism: 'Add primaquine for radical (anti-relapse) cure', significance: 'key' },
    { sign: 'Vivax malaria recurring weeks after a blood-only course', mechanism: 'Relapse from untreated hypnozoites (primaquine omitted)', significance: 'key' },
    { sign: 'Parasites still present on day 3 of an ACT', mechanism: 'Delayed clearance — suspect artemisinin resistance', significance: 'supportive' },
    { sign: 'Persistent vomiting / cannot take oral drug', mechanism: 'Parenteral therapy required', significance: 'supportive' },
  ],

  investigations: [
    { clue: '% parasitemia and species', meaning: 'Set severity and select the regimen' },
    { clue: 'G6PD status', meaning: 'Determines whether primaquine radical cure can be given safely' },
    { clue: 'Positive parasitemia on day 3 of ACT', meaning: 'Marker of artemisinin (Kelch13) resistance' },
    { clue: 'Travel to the Greater Mekong Subregion', meaning: 'Choose a resistance-aware regimen and confirm response' },
  ],

  treatment: [
    { logic: 'Uncomplicated falciparum: 3-day oral ACT', detail: 'Artemisinin rapidly reduces biomass; the partner drug clears residual parasites.' },
    { logic: 'Vivax: two hits — blood + liver', detail: 'Chloroquine/ACT for the blood stage PLUS primaquine for hypnozoites, after confirming G6PD status.' },
    { logic: 'Severe: IV artesunate then complete oral ACT', detail: 'Parenteral therapy first; finish the full oral course to prevent recrudescence.' },
  ],

  mnemonics: [
    { hook: 'ACT for the Attack (uncomplicated); IV Artesunate for the Emergency (severe)', expansion: ['Uncomplicated falciparum → oral ACT', 'Severe → IV artesunate, then full oral ACT'] },
    { hook: 'Vivax needs TWO hits: Blood + Liver', expansion: ['Blood: chloroquine or ACT', 'Liver: primaquine for hypnozoites (after G6PD)'] },
  ],

  traps: [
    {
      questionCategory: 'Completing treatment for P. vivax',
      wrongInstinct: 'Chloroquine (or ACT) alone cured the vivax attack, so treatment is finished',
      rightAnswer: 'Without primaquine radical cure the hypnozoites survive and the patient relapses — add primaquine after G6PD testing',
      why: 'Blood schizonticides do not touch dormant liver forms; only an 8-aminoquinoline clears hypnozoites and prevents relapse.',
    },
    {
      questionCategory: 'Route of therapy in severe malaria',
      wrongInstinct: 'Give oral ACT for severe malaria',
      rightAnswer: 'Severe malaria needs IV artesunate first; oral therapy is inadequate and absorption is unreliable',
      why: 'Obtunded, vomiting patients cannot absorb oral drug, and IV artesunate lowers mortality — oral ACT only completes the course later.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with confirmed P. vivax (normal G6PD) is treated with chloroquine, recovers, then returns two months later with the same infection. What was the most likely omission?',
      options: [
        { id: 'a', text: 'The chloroquine dose was too low' },
        { id: 'b', text: 'Primaquine radical cure for hypnozoites was not given' },
        { id: 'c', text: 'An artemisinin was needed instead of chloroquine' },
        { id: 'd', text: 'Chemoprophylaxis was not prescribed' },
      ],
      answerId: 'b',
      explanation: 'Chloroquine clears the blood stage but not the hepatic hypnozoites. Without primaquine radical cure (safe here as G6PD is normal), vivax relapses weeks to months later.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'A traveller returning from Thailand has severe falciparum malaria with impaired consciousness. What is the first-line antimalarial?',
      options: [
        { id: 'a', text: 'Oral artemisinin-based combination therapy' },
        { id: 'b', text: 'Oral chloroquine plus primaquine' },
        { id: 'c', text: 'Intravenous artesunate' },
        { id: 'd', text: 'Oral atovaquone–proguanil' },
      ],
      answerId: 'c',
      explanation: 'Severe malaria requires immediate IV artesunate (superior to quinine), followed by a full oral ACT once the patient can take it. Oral regimens alone are inadequate for severe disease.',
      tests: 'treatment',
    },
  ],
};

export default hhlAntimalarialTreatment;
