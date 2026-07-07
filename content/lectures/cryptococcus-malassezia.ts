import type { Lecture } from '../../lib/types';

export const cryptococcusMalassezia: Lecture = {
  id: 'cryptococcus-malassezia',
  title: 'Cryptococcus & Malassezia',
  system: 'microbiology',
  source: 'L22 — Pathogenic Yeasts',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Micro' },
    { kind: 'lecture', label: 'L22 Cryptococcus' },
    { kind: 'mechanism', label: 'Capsule; India ink; CrAg' },
    { kind: 'exam', label: 'Cryptococcal meningitis in HIV; tinea versicolor' },
  ],

  highYield: [
    'CRYPTOCOCCUS NEOFORMANS is an encapsulated YEAST acquired by INHALATION from soil enriched with PIGEON/bird droppings. Its huge polysaccharide CAPSULE is the key virulence factor (anti-phagocytic) and the basis of diagnosis: it shows as a clear HALO on INDIA INK, and the CRYPTOCOCCAL ANTIGEN (CrAg) test on serum/CSF is sensitive and specific. It is also urease-positive and produces melanin.',
    'The cardinal disease is CRYPTOCOCCAL MENINGITIS/meningoencephalitis — the classic opportunistic CNS infection of ADVANCED HIV/AIDS (CD4 <100) and other T-cell-deficient hosts, presenting SUBACUTELY with headache, fever and raised intracranial pressure (a major cause of morbidity — needs therapeutic LUMBAR PUNCTURES to control pressure). Treatment: induction with AMPHOTERICIN B + FLUCYTOSINE, then fluconazole consolidation/maintenance. CRYPTOCOCCUS GATTII affects more IMMUNOCOMPETENT hosts (tropical/subtropical).',
    'MALASSEZIA (Pityrosporum) is a lipophilic yeast of normal skin flora causing SUPERFICIAL disease: PITYRIASIS (TINEA) VERSICOLOR — hypo-/hyperpigmented scaly macules on the trunk with a "spaghetti-and-meatballs" (hyphae + yeasts) appearance on KOH — plus seborrhoeic dermatitis/dandruff and, rarely, catheter-related fungaemia in neonates on lipid TPN. Treated with topical azoles/selenium sulfide.',
    'So two very different yeasts: Cryptococcus (encapsulated, inhaled from bird droppings, India-ink/CrAg positive → life-threatening meningitis in HIV, treat amphotericin+flucytosine) versus Malassezia (skin lipophile → tinea versicolor/seborrhoeic dermatitis, topical treatment). PNEUMOCYSTIS JIROVECII (an atypical fungus causing PCP pneumonia in AIDS, treated with co-trimoxazole) is sometimes grouped here.',
    '**The take-home: CRYPTOCOCCUS NEOFORMANS = encapsulated yeast, INHALED (bird droppings), INDIA INK/CrAg → cryptococcal MENINGITIS in HIV (CD4<100; raised ICP → therapeutic LPs); treat AMPHOTERICIN + FLUCYTOSINE (C. gattii = immunocompetent). MALASSEZIA = skin yeast → TINEA VERSICOLOR (spaghetti-and-meatballs)/seborrhoeic dermatitis; topical azole.** Candida is [[candida-candidiasis]]; dermatophyte "tinea" is [[dermatophytes-tinea]].',
  ],

  mechanism: {
    title: 'Cryptococcus neoformans (encapsulated, inhaled bird droppings, India ink/CrAg → cryptococcal meningitis in HIV; amphotericin + flucytosine; raised ICP) vs Malassezia (skin lipophile → tinea versicolor/seborrhoeic dermatitis)',
    steps: [
      { id: 's1', label: 'Cryptococcus: encapsulated yeast, inhaled from soil/pigeon droppings', emphasis: 'key' },
      { id: 's2', label: 'Capsule → India-ink halo + CrAg antigen test (serum/CSF)', emphasis: 'key' },
      { id: 's3', label: 'Cryptococcal meningitis in advanced HIV (CD4<100); raised ICP → therapeutic LPs', emphasis: 'danger' },
      { id: 's4', label: 'Treat: amphotericin B + flucytosine induction → fluconazole; C. gattii = immunocompetent', emphasis: 'key' },
      { id: 's5', label: 'Malassezia: skin lipophile → tinea versicolor (spaghetti-and-meatballs)/seborrhoeic dermatitis; topical', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Subacute headache and fever with raised ICP in advanced HIV', mechanism: 'Cryptococcal meningitis', significance: 'key' },
    { sign: 'A clear halo around yeast on India ink of CSF', mechanism: 'Cryptococcus capsule', significance: 'key' },
    { sign: 'Positive cryptococcal antigen (CrAg) in serum/CSF', mechanism: 'Diagnostic capsular antigen', significance: 'key' },
    { sign: 'Hypo-/hyperpigmented scaly trunk macules with "spaghetti and meatballs" on KOH', mechanism: 'Tinea versicolor (Malassezia)', significance: 'supportive' },
    { sign: 'Cryptococcosis in an immunocompetent host in the tropics', mechanism: 'Cryptococcus gattii', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The microscopy showing the cryptococcal capsule', meaning: 'India ink (clear halo)' },
    { clue: 'The sensitive/specific cryptococcal test', meaning: 'Cryptococcal antigen (CrAg)' },
    { clue: 'The induction therapy for cryptococcal meningitis', meaning: 'Amphotericin B + flucytosine' },
    { clue: 'The Malassezia skin disease', meaning: 'Pityriasis (tinea) versicolor' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Cryptococcus neoformans (encapsulated, inhaled from bird droppings) causes cryptococcal meningitis — a leading opportunistic CNS infection in advanced HIV — diagnosed by India ink and cryptococcal antigen, treated with amphotericin B plus flucytosine induction (then fluconazole), with therapeutic lumbar punctures to control the dangerous raised intracranial pressure; C. gattii affects immunocompetent hosts. Malassezia, by contrast, is a skin lipophile causing tinea versicolor and seborrhoeic dermatitis, treated topically. Candida is [[candida-candidiasis]]; antifungals are [[antifungal-agents-lab-diagnosis]].' },
  ],

  mnemonics: [
    { hook: '"Cryptococcus = Capsule (India ink/CrAg), from birds → meningitis in HIV"', expansion: ['Amphotericin + Flucytosine', 'Raised ICP → therapeutic LPs'] },
    { hook: '"Malassezia = tinea versicolor (spaghetti & meatballs)/dandruff"', expansion: ['C. gattii = immunocompetent', 'Topical azole/selenium sulfide'] },
  ],

  traps: [
    {
      questionCategory: 'Managing raised ICP in cryptococcal meningitis',
      wrongInstinct: 'Cryptococcal meningitis is treated with antifungals alone, and lumbar punctures are only for diagnosis',
      rightAnswer: 'Cryptococcal meningitis characteristically causes dangerously RAISED INTRACRANIAL PRESSURE, which is a major cause of death and disability; management therefore includes SERIAL THERAPEUTIC LUMBAR PUNCTURES (CSF drainage) to control the pressure, IN ADDITION to antifungal induction with amphotericin B + flucytosine — antifungals alone do not address the acute pressure',
      why: 'The raised ICP kills independently of the infection, so controlling it with repeated CSF drainage is a distinctive, life-saving part of cryptococcal meningitis care that antifungal therapy alone does not provide.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with advanced HIV (CD4 <100) has subacute headache, fever and raised intracranial pressure; CSF India ink shows encapsulated yeasts. The diagnosis and induction treatment are:',
      options: [
        { id: 'a', text: 'Cryptococcal meningitis; amphotericin B plus flucytosine' },
        { id: 'b', text: 'Tuberculous meningitis; RIPE' },
        { id: 'c', text: 'Candidaemia; an echinocandin' },
        { id: 'd', text: 'Tinea versicolor; topical azole' },
      ],
      answerId: 'a',
      explanation: 'Cryptococcus neoformans causes meningitis in advanced HIV; the capsule is seen as an India-ink halo and detected by CrAg. Induction is amphotericin B plus flucytosine (then fluconazole), with therapeutic lumbar punctures to control raised intracranial pressure.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Hypo- and hyperpigmented scaly macules on the trunk with a "spaghetti and meatballs" appearance (hyphae and yeasts) on KOH are caused by:',
      options: [
        { id: 'a', text: 'Malassezia (tinea/pityriasis versicolor)' },
        { id: 'b', text: 'Cryptococcus neoformans' },
        { id: 'c', text: 'Candida albicans' },
        { id: 'd', text: 'Aspergillus fumigatus' },
      ],
      answerId: 'a',
      explanation: 'Malassezia, a lipophilic skin yeast, causes pityriasis (tinea) versicolor — hypo-/hyperpigmented scaly trunk macules with the classic "spaghetti and meatballs" (hyphae plus yeast) KOH appearance — as well as seborrhoeic dermatitis; it is treated topically.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default cryptococcusMalassezia;
