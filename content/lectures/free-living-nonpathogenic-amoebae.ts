import type { Lecture } from '../../lib/types';
import { FREE_LIVING_AMOEBAE } from '../../lib/figures';

export const freeLivingNonpathogenicAmoebae: Lecture = {
  id: 'free-living-nonpathogenic-amoebae',
  title: 'Free-Living & Non-Pathogenic Amoebae',
  system: 'parasitology',
  source: 'L3 — Amoebae & Free-Living Amoebae',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Parasitology' },
    { kind: 'lecture', label: 'L3 Amoebae' },
    { kind: 'disease', label: 'Naegleria / Acanthamoeba' },
    { kind: 'exam', label: 'PAM vs GAE' },
  ],

  highYield: [
    '**Free-living amoebae live in the environment (water/soil), NOT the faecal–oral cycle, yet can cause devastating CNS and eye infections.** The three to know are **Naegleria fowleri, Acanthamoeba, and Balamuthia** — each with a characteristic route, host and syndrome.',
    '**Naegleria fowleri is the "brain-eating amoeba": it lives in WARM FRESH water, enters through the NOSE during swimming/diving, and travels along the olfactory nerve through the cribriform plate to the brain → PRIMARY AMOEBIC MENINGOENCEPHALITIS (PAM).** PAM is acute, fulminant and almost always fatal, typically in previously HEALTHY young people; motile trophozoites are seen in CSF.',
    '**Acanthamoeba causes two distinct diseases: (1) KERATITIS in CONTACT-LENS wearers (poor lens hygiene/exposure to water) — a painful, sight-threatening corneal infection; and (2) GRANULOMATOUS AMOEBIC ENCEPHALITIS (GAE) — a chronic, insidious brain infection in the IMMUNOCOMPROMISED.** Balamuthia mandrillaris also causes GAE.',
    '**Contrast the CNS syndromes: NAEGLERIA → acute PAM in healthy swimmers (freshwater, nasal route); ACANTHAMOEBA/BALAMUTHIA → chronic GAE in the immunocompromised (haematogenous/ skin/sinus route).** Acanthamoeba forms a resistant cyst that helps it survive and makes keratitis hard to treat.',
    '**Non-pathogenic intestinal amoebae — Entamoeba coli, Endolimax nana, Iodamoeba bütschlii and Entamoeba gingivalis — are commensals whose importance is that they can be MISTAKEN for E. histolytica on stool microscopy.** They are distinguished by cyst size, nuclear number/structure and the ABSENCE of ingested red cells — so recognising them prevents over-diagnosis of pathogenic amoebiasis ([[entamoeba-histolytica-amoebiasis]]).',
  ],

  mechanism: {
    title: 'Environmental amoebae: Naegleria (acute PAM), Acanthamoeba/Balamuthia (keratitis/GAE); commensals mimic E. histolytica',
    steps: [
      { id: 's1', label: 'Free-living = environmental (water/soil), not faecal–oral', emphasis: 'key' },
      { id: 's2', label: 'Naegleria: warm fresh water → nose → cribriform → acute PAM (healthy, fatal)', emphasis: 'danger' },
      { id: 's3', label: 'Acanthamoeba: keratitis (contact lenses) + chronic GAE (immunocompromised)', emphasis: 'key' },
      { id: 's4', label: 'Balamuthia → GAE; Acanthamoeba cyst = resistant' },
      { id: 's5', label: 'Non-pathogenic (E. coli, Endolimax, Iodamoeba): mimic E. histolytica — no RBC ingestion' },
    ],
  },

  examFindings: [
    { sign: 'Fatal acute meningoencephalitis in a healthy freshwater swimmer', mechanism: 'Naegleria fowleri (PAM, nasal route)', significance: 'key' },
    { sign: 'Painful, sight-threatening keratitis in a contact-lens wearer', mechanism: 'Acanthamoeba keratitis', significance: 'key' },
    { sign: 'Chronic granulomatous encephalitis in an immunocompromised patient', mechanism: 'Acanthamoeba/Balamuthia (GAE)', significance: 'key' },
    { sign: 'Non-invasive intestinal amoeba with no ingested red cells', mechanism: 'Non-pathogenic commensal (e.g. Entamoeba coli)', significance: 'supportive' },
    { sign: 'Motile amoeboid trophozoites in CSF', mechanism: 'Naegleria in primary amoebic meningoencephalitis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The amoeba causing acute meningoencephalitis in freshwater swimmers', meaning: 'Naegleria fowleri (PAM)' },
    { clue: 'The amoeba causing contact-lens keratitis', meaning: 'Acanthamoeba' },
    { clue: 'The chronic CNS amoebic infection in the immunocompromised', meaning: 'Granulomatous amoebic encephalitis (Acanthamoeba/Balamuthia)' },
    { clue: 'Why non-pathogenic amoebae matter', meaning: 'They can be mistaken for E. histolytica on stool microscopy' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'These environmental amoebae cause high-mortality disease outside the faecal–oral route — recognising the exposure (warm freshwater/nasal for Naegleria; contact lenses for Acanthamoeba keratitis; immunosuppression for GAE) is the diagnostic key. The non-pathogenic commensals matter only because they mimic the invasive [[entamoeba-histolytica-amoebiasis]] on microscopy; amoeba biology is from [[protozoa-classification-biology]].' },
  ],

  mnemonics: [
    { hook: 'Naegleria = "Nose → brain in warm fresh water" (acute PAM, healthy, fatal)', expansion: ['Cribriform plate route', 'Motile trophozoites in CSF'] },
    { hook: 'Acanthamoeba = "contact lens keratitis + chronic GAE (immunocompromised)"', expansion: ['Balamuthia = GAE too', 'Resistant cyst'] },
  ],

  traps: [
    {
      questionCategory: 'Distinguishing the free-living amoebic CNS diseases',
      wrongInstinct: 'All free-living amoebae cause the same rapidly fatal brain infection in healthy people',
      rightAnswer: 'They differ: NAEGLERIA causes ACUTE PAM in HEALTHY freshwater swimmers (via the nose), whereas ACANTHAMOEBA/Balamuthia cause CHRONIC granulomatous encephalitis (GAE) in the IMMUNOCOMPROMISED (and Acanthamoeba also causes contact-lens keratitis)',
      why: 'The host (healthy vs immunocompromised), tempo (acute vs chronic) and route (nasal vs haematogenous) differ, so lumping them together loses the exposure clues that lead to the right diagnosis.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A previously healthy teenager develops fulminant, rapidly fatal meningoencephalitis days after swimming in a warm freshwater lake. The most likely organism is:',
      options: [
        { id: 'a', text: 'Acanthamoeba' },
        { id: 'b', text: 'Naegleria fowleri' },
        { id: 'c', text: 'Entamoeba histolytica' },
        { id: 'd', text: 'Balamuthia' },
      ],
      answerId: 'b',
      explanation: 'Naegleria fowleri, the "brain-eating amoeba", lives in warm fresh water and enters via the nose, travelling through the cribriform plate to cause acute, almost uniformly fatal primary amoebic meningoencephalitis in otherwise healthy people.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Acanthamoeba is an important cause of keratitis particularly in:',
      options: [
        { id: 'a', text: 'Freshwater swimmers' },
        { id: 'b', text: 'Contact-lens wearers' },
        { id: 'c', text: 'Pregnant women' },
        { id: 'd', text: 'Cat owners' },
      ],
      answerId: 'b',
      explanation: 'Acanthamoeba keratitis is classically associated with contact-lens wear (poor hygiene or exposure to water); Acanthamoeba and Balamuthia also cause chronic granulomatous amoebic encephalitis in the immunocompromised.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Free-living amoebae', svg: FREE_LIVING_AMOEBAE, caption: 'Naegleria (acute PAM, freshwater/nasal) vs Acanthamoeba/Balamuthia (keratitis + chronic GAE).' },
  ],
};

export default freeLivingNonpathogenicAmoebae;
