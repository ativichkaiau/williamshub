import type { Lecture } from '../../lib/types';

export const antifungalAgentsLabDiagnosis: Lecture = {
  id: 'antifungal-agents-lab-diagnosis',
  title: 'Antifungal Agents & Laboratory Diagnosis',
  system: 'microbiology',
  source: 'L20 — Introduction to Medical Mycology',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Micro' },
    { kind: 'lecture', label: 'L20 Antifungals' },
    { kind: 'mechanism', label: 'Ergosterol/glucan targets' },
    { kind: 'exam', label: 'Azole vs polyene vs echinocandin' },
  ],

  highYield: [
    'Antifungal classes map onto the fungal targets. POLYENES (amphotericin B, nystatin) BIND ERGOSTEROL, punching pores in the membrane — broad and fungicidal, but amphotericin is NEPHROTOXIC with infusion reactions ("ampho-terrible"; lipid formulations reduce toxicity). AZOLES (fluconazole, itraconazole, voriconazole, posaconazole, isavuconazole) INHIBIT ERGOSTEROL SYNTHESIS (block lanosterol 14-α-demethylase, a CYP enzyme) — widely used, but many DRUG INTERACTIONS (CYP inhibition) and hepatotoxicity.',
    'ECHINOCANDINS (caspofungin, micafungin, anidulafungin) inhibit β-1,3-GLUCAN SYNTHESIS (cell wall) — excellent for invasive *Candida*, well tolerated, but no activity against *Cryptococcus*. FLUCYTOSINE (5-FC) inhibits fungal nucleic acids (used WITH amphotericin for cryptococcal meningitis). TERBINALFINE (allylamine, inhibits squalene epoxidase) and GRISEOFULVIN treat dermatophytes.',
    'Target-drug logic worth memorising: azoles/terbinafine = block ergosterol SYNTHESIS; polyenes = BIND ergosterol; echinocandins = block glucan (WALL). Choice depends on organism (echinocandins for *Candida* but not *Cryptococcus*; amphotericin ± flucytosine for cryptococcal meningitis; voriconazole for invasive *Aspergillus*; amphotericin for Mucorales), site and host.',
    'DIAGNOSIS combines microscopy (KOH for skin/nail hyphae; INDIA INK/cryptococcal antigen for *Cryptococcus*; GMS/PAS histology), CULTURE on SABOURAUD agar, and ANTIGEN tests (galactomannan for *Aspergillus*, β-D-glucan as a pan-fungal marker, cryptococcal and *Histoplasma* antigens). Sensitivity/species matter because resistance and intrinsic gaps (e.g. echinocandins vs *Cryptococcus*) affect therapy.',
    '**The take-home: antifungals by target — POLYENES (amphotericin: BIND ergosterol; nephrotoxic), AZOLES (inhibit ergosterol SYNTHESIS; CYP interactions), ECHINOCANDINS (block GLUCAN wall; Candida, not Cryptococcus), FLUCYTOSINE (+ampho for cryptococcal meningitis), TERBINAFINE/griseofulvin (dermatophytes). Diagnose via KOH/India ink/culture + antigens (galactomannan, β-D-glucan, cryptococcal Ag).** Fungal biology is [[fungal-biology-classification]]; the yeasts treated are [[candida-candidiasis]]/[[cryptococcus-malassezia]].',
  ],

  mechanism: {
    title: 'Antifungals by target: polyenes (bind ergosterol; nephrotoxic), azoles (inhibit ergosterol synthesis; CYP), echinocandins (block glucan wall; Candida not Cryptococcus), flucytosine (+ampho), terbinafine/griseofulvin (dermatophytes); diagnose KOH/India ink/culture/antigen',
    steps: [
      { id: 's1', label: 'Polyenes (amphotericin) BIND ergosterol → pores; broad but nephrotoxic', emphasis: 'key' },
      { id: 's2', label: 'Azoles inhibit ergosterol SYNTHESIS (14-α-demethylase/CYP) → drug interactions', emphasis: 'key' },
      { id: 's3', label: 'Echinocandins block β-1,3-glucan (WALL): Candida yes, Cryptococcus NO', emphasis: 'key' },
      { id: 's4', label: 'Flucytosine + amphotericin = cryptococcal meningitis; terbinafine/griseofulvin = dermatophytes', emphasis: 'key' },
      { id: 's5', label: 'Diagnose: KOH/India ink/GMS, Sabouraud culture, antigens (galactomannan/β-D-glucan/CrAg)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Nephrotoxicity and infusion reactions from a broad fungicidal drug', mechanism: 'Amphotericin B (binds ergosterol)', significance: 'key' },
    { sign: 'Multiple drug interactions and hepatotoxicity from an antifungal', mechanism: 'Azole (CYP inhibition of ergosterol synthesis)', significance: 'key' },
    { sign: 'An antifungal effective against Candida but useless against Cryptococcus', mechanism: 'Echinocandin (glucan synthesis)', significance: 'key' },
    { sign: 'Galactomannan or β-D-glucan positivity in suspected invasive fungal disease', mechanism: 'Fungal antigen testing', significance: 'supportive' },
    { sign: 'India-ink positivity in CSF', mechanism: 'Cryptococcus (capsule)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The class that binds ergosterol directly', meaning: 'Polyenes (amphotericin B)' },
    { clue: 'The class inhibiting ergosterol synthesis with CYP interactions', meaning: 'Azoles' },
    { clue: 'The wall-targeting class inactive against Cryptococcus', meaning: 'Echinocandins (β-glucan synthesis)' },
    { clue: 'The Aspergillus antigen test', meaning: 'Galactomannan' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Antifungal choice follows the target and organism: polyenes (amphotericin) bind ergosterol (broad but nephrotoxic; used for cryptococcal meningitis with flucytosine and for Mucorales), azoles inhibit ergosterol synthesis (voriconazole for *Aspergillus*; fluconazole for *Candida*/*Cryptococcus* maintenance; many CYP interactions), echinocandins block glucan synthesis (invasive *Candida*, but not *Cryptococcus*), and terbinafine/griseofulvin treat dermatophytes. Diagnosis integrates microscopy (KOH, India ink), Sabouraud culture and antigen tests (galactomannan, β-D-glucan, cryptococcal antigen). Fungal biology is [[fungal-biology-classification]]; yeasts are [[candida-candidiasis]] and [[cryptococcus-malassezia]].' },
  ],

  mnemonics: [
    { hook: 'Ergosterol: "azoles BLOCK synthesis; polyenes BIND it; echinocandins = glucan WALL"', expansion: ['Amphotericin = nephrotoxic', 'Echinocandin: no Cryptococcus'] },
    { hook: '"Cryptococcal meningitis = amphotericin + Flucytosine"', expansion: ['Terbinafine/griseofulvin = dermatophytes', 'Galactomannan/β-D-glucan antigens'] },
  ],

  traps: [
    {
      questionCategory: 'Echinocandins and Cryptococcus',
      wrongInstinct: 'Echinocandins are broad-spectrum antifungals suitable for any invasive fungal infection, including cryptococcal meningitis',
      rightAnswer: 'Echinocandins (caspofungin, micafungin, anidulafungin) inhibit β-1,3-GLUCAN synthesis and are excellent for invasive CANDIDA, but they have essentially NO activity against CRYPTOCOCCUS (whose cell wall relies less on this glucan and which is protected by its capsule) — cryptococcal meningitis is instead treated with AMPHOTERICIN B plus FLUCYTOSINE (then fluconazole), so choosing an echinocandin there would fail',
      why: 'Assuming echinocandins cover all fungi misses their key gap against Cryptococcus; matching drug to organism (echinocandin for Candida, amphotericin+flucytosine for cryptococcal meningitis) is essential.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Azole antifungals (e.g. fluconazole, voriconazole) act by:',
      options: [
        { id: 'a', text: 'Inhibiting ergosterol synthesis (blocking lanosterol 14-α-demethylase)' },
        { id: 'b', text: 'Binding preformed ergosterol to form membrane pores' },
        { id: 'c', text: 'Inhibiting β-1,3-glucan synthesis in the wall' },
        { id: 'd', text: 'Blocking bacterial peptidoglycan' },
      ],
      answerId: 'a',
      explanation: 'Azoles inhibit the CYP enzyme lanosterol 14-α-demethylase, blocking ergosterol synthesis and destabilising the fungal membrane. Polyenes (amphotericin) instead bind preformed ergosterol, and echinocandins inhibit glucan synthesis in the wall.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which antifungal class is effective against invasive Candida but NOT against Cryptococcus?',
      options: [
        { id: 'a', text: 'Echinocandins' },
        { id: 'b', text: 'Polyenes' },
        { id: 'c', text: 'Azoles' },
        { id: 'd', text: 'Allylamines' },
      ],
      answerId: 'a',
      explanation: 'Echinocandins (caspofungin, micafungin, anidulafungin) inhibit β-1,3-glucan synthesis and are first-line for invasive candidiasis but have essentially no activity against Cryptococcus, which is treated with amphotericin B plus flucytosine.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default antifungalAgentsLabDiagnosis;
