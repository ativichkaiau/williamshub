import type { Lecture } from '../../lib/types';

export const superficialAntifungalsClinical: Lecture = {
  id: 'superficial-antifungals-clinical',
  title: 'Antifungals for Superficial Infections',
  system: 'pharmacology',
  source: 'L4 — Antifungal Agents',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pharmacology' },
    { kind: 'lecture', label: 'L4 Superficial Antifungals' },
    { kind: 'mechanism', label: 'Topical vs systemic for skin/nail' },
    { kind: 'exam', label: 'Terbinafine; griseofulvin' },
  ],

  highYield: [
    '**Superficial mycoses (dermatophytes/"tinea", Candida, pityriasis versicolor) are treated with TOPICAL agents when localised, but need ORAL therapy for NAILS (onychomycosis), SCALP (tinea capitis) and extensive/refractory disease — because topicals do not penetrate keratinised nail/hair adequately.**',
    '**TERBINAFINE (an allylamine, inhibits squalene epoxidase → blocks ergosterol synthesis) is the ORAL drug of choice for DERMATOPHYTE onychomycosis and tinea; it concentrates in keratin. GRISEOFULVIN (deposits in keratin, disrupts microtubules) is used for tinea CAPITIS (esp. in children). Both need weeks–months of therapy as the infected keratin grows out.**',
    '**TOPICAL agents: azoles (clotrimazole, ketoconazole, miconazole) for tinea/candida; terbinafine cream; NYSTATIN (a topical polyene) for cutaneous/oral/vaginal Candida (not absorbed orally — used topically or in the gut lumen); selenium sulfide/ketoconazole shampoo for pityriasis versicolor and seborrhoeic dermatitis.**',
    '**Practical points: confirm the diagnosis (KOH/culture) before long oral courses; oral terbinafine and azoles can be HEPATOTOXIC (monitor) and azoles cause CYP450 interactions ([[drug-interactions-mechanisms]]); recurrence is common in onychomycosis. Match the drug and route to the SITE and organism.**',
    '**The take-home: superficial mycoses → TOPICAL azole/terbinafine/nystatin when localised, but ORAL TERBINAFINE (dermatophyte nails/skin) or GRISEOFULVIN (tinea capitis) for nail/scalp/extensive disease (topicals can\'t reach keratin); watch hepatotoxicity and azole CYP interactions.** The mechanisms/systemic agents are in [[antifungal-agents]]; the clinical skin infections are HSC ([[skin-infections-bacterial-fungal-viral]]).',
  ],

  mechanism: {
    title: 'Topical for localised; ORAL terbinafine (dermatophyte nails/skin) / griseofulvin (tinea capitis) for keratinised sites; nystatin for Candida',
    steps: [
      { id: 's1', label: 'Topical azole/terbinafine/nystatin for localised superficial mycoses', emphasis: 'key' },
      { id: 's2', label: 'Nails/scalp/extensive → ORAL (topicals don\'t penetrate keratin)', emphasis: 'key' },
      { id: 's3', label: 'Oral terbinafine (squalene epoxidase) = dermatophyte onychomycosis/tinea', emphasis: 'key' },
      { id: 's4', label: 'Griseofulvin (keratin/microtubules) = tinea capitis (children)', emphasis: 'key' },
      { id: 's5', label: 'Nystatin (topical polyene) = Candida; watch hepatotoxicity/azole CYP interactions', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Oral drug of choice for dermatophyte nail infection', mechanism: 'Terbinafine (squalene epoxidase inhibitor)', significance: 'key' },
    { sign: 'Oral agent for childhood tinea capitis', mechanism: 'Griseofulvin (± terbinafine)', significance: 'key' },
    { sign: 'Topical polyene for oral/cutaneous candidiasis', mechanism: 'Nystatin (not absorbed orally)', significance: 'key' },
    { sign: 'Hepatotoxicity during a prolonged oral antifungal course', mechanism: 'Terbinafine/azole hepatic toxicity (monitor)', significance: 'key' },
    { sign: 'Selenium sulfide/ketoconazole shampoo for scaly dyspigmented macules', mechanism: 'Pityriasis versicolor treatment', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Why nail/scalp fungal infection needs oral therapy', meaning: 'Topicals do not penetrate keratinised nail/hair' },
    { clue: 'The oral drug of choice for dermatophyte onychomycosis', meaning: 'Terbinafine' },
    { clue: 'The classic oral agent for tinea capitis', meaning: 'Griseofulvin' },
    { clue: 'The topical polyene for Candida', meaning: 'Nystatin' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Choosing route and drug by site prevents treatment failure: topicals suffice for localised skin infection but nails/scalp require oral terbinafine or griseofulvin (weeks–months as keratin grows out), and Candida responds to topical nystatin/azoles. Confirm the diagnosis before long oral courses and monitor for hepatotoxicity and azole CYP interactions ([[drug-interactions-mechanisms]]). Systemic antifungal mechanisms are in [[antifungal-agents]]; the clinical skin infections in HSC ([[skin-infections-bacterial-fungal-viral]]).' },
  ],

  mnemonics: [
    { hook: '"Nails/scalp = oral (Terbinafine for nails, Griseofulvin for capitis); skin = topical"', expansion: ['Terbinafine = dermatophyte drug', 'Nystatin = Candida (topical)'] },
    { hook: '"Keratin needs an oral drug that grows out with it"', expansion: ['Months of therapy', 'Monitor LFTs; azole CYP interactions'] },
  ],

  traps: [
    {
      questionCategory: 'Topical vs oral for nail/scalp fungal infection',
      wrongInstinct: 'Onychomycosis and tinea capitis can be cleared with topical antifungal creams',
      rightAnswer: 'NAIL (onychomycosis) and SCALP (tinea capitis) infections generally REQUIRE ORAL antifungals (terbinafine, griseofulvin/itraconazole) because topical agents do NOT penetrate the keratinised nail plate or hair follicle adequately — topical monotherapy typically fails at these sites',
      why: 'Poor keratin penetration means topicals cannot eradicate nail/scalp infection, so recognising the need for systemic therapy (with its monitoring) avoids repeated treatment failure.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The oral drug of choice for dermatophyte onychomycosis (fungal nail infection) is:',
      options: [
        { id: 'a', text: 'Nystatin' },
        { id: 'b', text: 'Terbinafine' },
        { id: 'c', text: 'Topical clotrimazole' },
        { id: 'd', text: 'Amphotericin B' },
      ],
      answerId: 'b',
      explanation: 'Oral terbinafine (a squalene epoxidase inhibitor that concentrates in keratin) is first-line for dermatophyte onychomycosis; topical agents fail to penetrate the nail plate. Griseofulvin is a classic option for tinea capitis, and nystatin is a topical anti-Candida polyene.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Nystatin is used only topically or within the gut lumen because it:',
      options: [
        { id: 'a', text: 'Is too toxic for any use' },
        { id: 'b', text: 'Is not absorbed from the gut (so it acts locally on Candida)' },
        { id: 'c', text: 'Requires acidic pH to work' },
        { id: 'd', text: 'Is a systemic azole' },
      ],
      answerId: 'b',
      explanation: 'Nystatin is a polyene that is not absorbed from the gastrointestinal tract, so it is used topically (skin, mouth, vagina) or in the gut lumen to treat local Candida infections rather than systemically.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default superficialAntifungalsClinical;
