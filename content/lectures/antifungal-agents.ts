import type { Lecture } from '../../lib/types';

export const antifungalAgents: Lecture = {
  id: 'antifungal-agents',
  title: 'Antifungal Agents',
  system: 'pharmacology',
  source: 'L4 — Antifungal Agents',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pharmacology' },
    { kind: 'lecture', label: 'L4 Antifungals' },
    { kind: 'mechanism', label: 'Ergosterol synthesis targets' },
    { kind: 'exam', label: 'Azoles, amphotericin, echinocandins' },
  ],

  highYield: [
    'Most antifungals exploit ERGOSTEROL, the fungal-specific membrane sterol. POLYENES (AMPHOTERICIN B, nystatin) BIND ergosterol and punch pores in the membrane → leakage/cell death (fungicidal, broad, the drug for severe systemic mycoses) — but cause dose-dependent NEPHROTOXICITY, infusion reactions and hypokalaemia ("ampho-terrible"; liposomal forms are less toxic).',
    'AZOLES (fluconazole, itraconazole, voriconazole, posaconazole, ketoconazole) INHIBIT 14-α-demethylase (a fungal CYP450) → block ergosterol synthesis (fungistatic). They are the workhorse oral/IV agents but INHIBIT human CYP450 → many DRUG INTERACTIONS and hepatotoxicity; fluconazole penetrates CSF (cryptococcal/Candida), voriconazole is first-line for invasive Aspergillus.',
    'ECHINOCANDINS (caspofungin, micafungin, anidulafungin) inhibit β-(1,3)-D-GLUCAN synthesis → damage the fungal CELL WALL; they are well-tolerated IV agents for invasive Candida (including azole-resistant) and salvage Aspergillus. ALLYLAMINES (TERBINAFINE) inhibit squalene epoxidase (also ergosterol synthesis) — oral drug of choice for dermatophyte onychomycosis.',
    'Others: FLUCYTOSINE (5-FC) is converted to 5-FU inside fungi → inhibits DNA/RNA synthesis; used WITH amphotericin for cryptococcal meningitis (synergy, prevents resistance; causes marrow suppression). GRISEOFULVIN (deposits in keratin, disrupts microtubules) and topical NYSTATIN/azoles/terbinafine treat superficial infections.',
    '**The take-home: POLYENES (amphotericin) bind ergosterol → pores (severe systemic, nephrotoxic); AZOLES inhibit ergosterol SYNTHESIS via CYP450 (workhorse, CYP interactions); ECHINOCANDINS block glucan (cell wall, Candida); terbinafine for dermatophytes; flucytosine + amphotericin for cryptococcal meningitis.** Azole CYP450 inhibition is a classic interaction ([[drug-interactions-mechanisms]]); superficial mycoses recur in dermatology ([[skin-infections-bacterial-fungal-viral]]).',
  ],

  mechanism: {
    title: 'Ergosterol is the target: polyenes bind it (pores), azoles/terbinafine block its synthesis; echinocandins hit glucan wall',
    steps: [
      { id: 's1', label: 'Amphotericin B (polyene) BINDS ergosterol → membrane pores (fungicidal, severe systemic)', emphasis: 'key' },
      { id: 's2', label: 'Amphotericin toxicity: nephrotoxicity, infusion reactions, hypokalaemia', emphasis: 'danger' },
      { id: 's3', label: 'Azoles inhibit 14-α-demethylase (CYP450) → ↓ergosterol; many CYP drug interactions', emphasis: 'key' },
      { id: 's4', label: 'Echinocandins inhibit β-(1,3)-glucan (cell wall); terbinafine inhibits squalene epoxidase', emphasis: 'key' },
      { id: 's5', label: 'Flucytosine (→5-FU) + amphotericin for cryptococcal meningitis', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Rising creatinine + hypokalaemia during antifungal therapy', mechanism: 'Amphotericin B nephrotoxicity', significance: 'key' },
    { sign: 'Multiple drug interactions + hepatotoxicity with an oral antifungal', mechanism: 'Azole inhibition of human CYP450', significance: 'key' },
    { sign: 'First-line agent for invasive aspergillosis', mechanism: 'Voriconazole', significance: 'key' },
    { sign: 'Well-tolerated IV agent for azole-resistant invasive candidiasis', mechanism: 'Echinocandin (β-glucan synthesis inhibitor)', significance: 'key' },
    { sign: 'Oral agent of choice for dermatophyte nail infection', mechanism: 'Terbinafine (squalene epoxidase inhibitor)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The fungal membrane sterol most antifungals target', meaning: 'Ergosterol' },
    { clue: 'The mechanism of amphotericin B', meaning: 'Binds ergosterol → membrane pores' },
    { clue: 'The enzyme azoles inhibit', meaning: '14-α-demethylase (fungal CYP450)' },
    { clue: 'The wall target of echinocandins', meaning: 'β-(1,3)-D-glucan synthesis' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Antifungal choice follows severity and site: amphotericin (± flucytosine) for severe/CNS mycoses despite nephrotoxicity, azoles as the oral workhorse (mind CYP450 interactions — [[drug-interactions-mechanisms]]), echinocandins for invasive Candida, terbinafine/topicals for dermatophytes ([[skin-infections-bacterial-fungal-viral]]). The ergosterol/glucan targets give fungal selectivity, and monitoring renal function/LFTs is central to safe use.' },
  ],

  mnemonics: [
    { hook: '"Polyenes bind ergosterol (pores); Azoles block its synthesis (CYP); Echinocandins hit the glucan wall"', expansion: ['Ampho = severe systemic, nephrotoxic', 'Terbinafine = dermatophytes'] },
    { hook: '"Ampho-terrible": nephrotoxic + hypokalaemia + infusion fever/rigors', expansion: ['Liposomal = less toxic', 'Flucytosine + ampho = crypto meningitis'] },
  ],

  traps: [
    {
      questionCategory: 'Azole drug interactions',
      wrongInstinct: 'Azole antifungals only affect the fungus, so they are free of systemic drug interactions',
      rightAnswer: 'Azoles inhibit the fungal CYP450 (14-α-demethylase) but ALSO inhibit HUMAN CYP450 enzymes, so they raise levels of many co-administered drugs (statins, warfarin, calcineurin inhibitors, etc.) and cause interactions and hepatotoxicity — a major clinical caution, especially with ketoconazole/itraconazole/voriconazole',
      why: 'The shared CYP450 chemistry means azoles are potent human enzyme inhibitors, so their interaction profile — not just antifungal spectrum — governs safe prescribing.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Amphotericin B exerts its antifungal effect by:',
      options: [
        { id: 'a', text: 'Inhibiting ergosterol synthesis via CYP450' },
        { id: 'b', text: 'Binding ergosterol in the fungal membrane to form pores' },
        { id: 'c', text: 'Inhibiting β-glucan cell-wall synthesis' },
        { id: 'd', text: 'Blocking fungal DNA gyrase' },
      ],
      answerId: 'b',
      explanation: 'Amphotericin B is a polyene that binds ergosterol in the fungal cell membrane, forming pores that cause leakage of ions and cell death (fungicidal). Azoles instead inhibit ergosterol synthesis (14-α-demethylase), and echinocandins block β-(1,3)-glucan cell-wall synthesis.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient on IV amphotericin B for systemic mycosis is at greatest risk of which toxicity?',
      options: [
        { id: 'a', text: 'Nephrotoxicity with hypokalaemia' },
        { id: 'b', text: 'Optic neuritis' },
        { id: 'c', text: 'Achilles tendon rupture' },
        { id: 'd', text: 'Gingival hyperplasia' },
      ],
      answerId: 'a',
      explanation: 'Amphotericin B is classically nephrotoxic (dose-dependent), causing renal impairment with potassium and magnesium wasting (hypokalaemia/hypomagnesaemia), along with infusion-related fever/rigors. Liposomal formulations reduce this toxicity.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default antifungalAgents;
