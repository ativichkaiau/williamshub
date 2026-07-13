import type { Lecture } from '../../lib/types';

export const bloodApicomplexaMalariaBabesia: Lecture = {
  id: 'blood-apicomplexa-malaria-babesia',
  title: 'Blood Apicomplexa: Malaria & Babesia',
  system: 'parasitology',
  source: 'L9 — Apicomplexa',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Parasitology' },
    { kind: 'lecture', label: 'L9 Apicomplexa' },
    { kind: 'disease', label: 'Malaria' },
    { kind: 'exam', label: 'Plasmodium species' },
  ],

  highYield: [
    '**Plasmodium (malaria) is the most important parasitic disease worldwide — an apicomplexan transmitted by the female ANOPHELES mosquito (the definitive host and vector).** Sporozoites injected at a bite infect the LIVER, then released merozoites invade RED BLOOD CELLS, cycling and lysing them — which produces the fever paroxysms.',
    '**Five species infect humans; the two to prioritise: Plasmodium FALCIPARUM causes SEVERE/complicated malaria (cerebral malaria, severe anaemia, blackwater fever, high parasitaemia — the killer), while P. VIVAX and P. OVALE form dormant liver HYPNOZOITES that cause RELAPSES weeks–months later.** (*P. malariae* is chronic/low-grade; *P. knowlesi* is zoonotic.)',
    '**The RBC cycle causes CYCLICAL FEVER (tertian ~48 h for vivax/ovale/falciparum; quartan ~72 h for malariae) with chills and sweats, plus haemolytic ANAEMIA and SPLENOMEGALY.** Falciparum-infected red cells sequester in capillaries (cerebral malaria) and cause high parasitaemia — features that mark severity.',
    'Diagnosis is the BLOOD FILM (thick film to detect, thin film to speciate and quantify parasitaemia) — the gold standard — plus rapid antigen tests. Treatment is artemisinin-based combination therapy (ACT); severe falciparum needs IV artesunate; PRIMAQUINE is added to kill vivax/ovale HYPNOZOITES and prevent relapse (check G6PD first).',
    '**Babesia is a related blood apicomplexan transmitted by TICKS (not mosquitoes): it infects red cells causing a malaria-like haemolytic febrile illness, with a characteristic tetrad "MALTESE CROSS" on the blood film (and no pigment).** The high-yield contrasts: malaria = *Anopheles* + cyclical fever + falciparum severe/vivax relapses; *Babesia* = tick + Maltese cross. Prevention is vector control ([[mosquito-borne-diseases]]).',
  ],

  mechanism: {
    title: 'Anopheles → liver → RBC cycle (cyclical fever); falciparum severe, vivax/ovale relapse; Babesia = ticks',
    steps: [
      { id: 's1', label: 'Plasmodium: Anopheles bite → liver → merozoites invade RBCs', emphasis: 'key' },
      { id: 's2', label: 'RBC cycle lyses cells → cyclical fever + haemolytic anaemia + splenomegaly', emphasis: 'key' },
      { id: 's3', label: 'P. FALCIPARUM = severe (cerebral, high parasitaemia); vivax/ovale = hypnozoite RELAPSE', emphasis: 'danger' },
      { id: 's4', label: 'Dx: blood film (thick=detect, thin=speciate) + RDT; treat ACT/IV artesunate', emphasis: 'key' },
      { id: 's5', label: 'Primaquine for vivax/ovale hypnozoites (check G6PD); Babesia = TICKS, Maltese cross' },
    ],
  },

  examFindings: [
    { sign: 'Cyclical fever, haemolytic anaemia and splenomegaly after travel', mechanism: 'Malaria (RBC cycle)', significance: 'key' },
    { sign: 'Cerebral malaria / high parasitaemia / blackwater fever', mechanism: 'Plasmodium falciparum (severe malaria)', significance: 'key' },
    { sign: 'Malaria relapse weeks to months after treatment', mechanism: 'P. vivax/ovale dormant liver hypnozoites', significance: 'key' },
    { sign: '"Maltese cross" forms in red cells after tick exposure', mechanism: 'Babesia (tick-borne)', significance: 'supportive' },
    { sign: 'Ring forms/banana-shaped gametocytes on blood film', mechanism: 'Plasmodium (falciparum gametocytes are crescentic)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The gold-standard diagnostic test for malaria', meaning: 'Blood film (thick to detect, thin to speciate)' },
    { clue: 'The Plasmodium species causing severe/cerebral malaria', meaning: 'Plasmodium falciparum' },
    { clue: 'The species with relapsing dormant liver hypnozoites', meaning: 'P. vivax and P. ovale (treat with primaquine, check G6PD)' },
    { clue: 'The tick-borne blood apicomplexan with a "Maltese cross"', meaning: 'Babesia' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Malaria is the most important vector-borne parasite: recognising severe falciparum (IV artesunate) and adding primaquine for vivax/ovale relapse (after G6PD testing) are life-saving. The *Anopheles* vector links to mosquito-borne disease and control ([[mosquito-borne-diseases]], [[medical-entomology-vectors]]); the mosquito is the definitive host ([[parasitology-host-relationships]]). *Babesia* (ticks) is the tick-borne look-alike within the apicomplexa ([[intestinal-coccidia-cryptosporidium]], [[toxoplasmosis]]).' },
  ],

  mnemonics: [
    { hook: 'Malaria: "Falciparum = Fatal (cerebral); Vivax/Ovale = relapse (hypnozoites → primaquine)"', expansion: ['Anopheles vector + definitive host', 'Blood film = gold standard'] },
    { hook: 'Babesia = "Ticks + Maltese cross" (no pigment)', expansion: ['Malaria-like haemolysis', 'Not mosquito-borne'] },
  ],

  traps: [
    {
      questionCategory: 'Preventing malaria relapse',
      wrongInstinct: 'Standard blood-stage antimalarials (e.g. an ACT) cure all forms of malaria completely',
      rightAnswer: 'Blood-stage drugs clear the RBC infection but do NOT kill the dormant liver HYPNOZOITES of P. VIVAX and P. OVALE — PRIMAQUINE (a hypnozoiticide, given after checking G6PD status) is required to prevent relapse',
      why: 'Missing the hypnozoite stage leads to relapses weeks to months later; radical cure of vivax/ovale requires primaquine, and G6PD deficiency must be excluded first because primaquine causes haemolysis in G6PD-deficient patients.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which Plasmodium species is responsible for severe, potentially fatal (cerebral) malaria with high parasitaemia?',
      options: [
        { id: 'a', text: 'Plasmodium vivax' },
        { id: 'b', text: 'Plasmodium falciparum' },
        { id: 'c', text: 'Plasmodium malariae' },
        { id: 'd', text: 'Plasmodium ovale' },
      ],
      answerId: 'b',
      explanation: 'Plasmodium falciparum causes severe malaria (cerebral malaria, severe anaemia, blackwater fever) because infected red cells sequester in capillaries and parasitaemia can be very high; it is the main killer and needs IV artesunate when severe.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Why is primaquine added to treat Plasmodium vivax or ovale malaria (after checking G6PD status)?',
      options: [
        { id: 'a', text: 'To treat the blood-stage parasites' },
        { id: 'b', text: 'To eradicate dormant liver hypnozoites and prevent relapse' },
        { id: 'c', text: 'To kill the mosquito' },
        { id: 'd', text: 'To treat Babesia' },
      ],
      answerId: 'b',
      explanation: 'P. vivax and P. ovale form dormant liver hypnozoites that cause relapses; primaquine is a hypnozoiticide that eradicates them (radical cure). G6PD deficiency must be excluded first because primaquine causes haemolysis in G6PD-deficient patients.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default bloodApicomplexaMalariaBabesia;
