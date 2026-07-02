import type { Lecture } from '../../lib/types';

export const dermatophytesTinea: Lecture = {
  id: 'dermatophytes-tinea',
  title: 'Dermatophytes & Tinea',
  system: 'microbiology',
  source: 'L24 — Pathogenic Filamentous Fungi I',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Micro' },
    { kind: 'lecture', label: 'L24 Dermatophytes' },
    { kind: 'mechanism', label: 'Keratinophilic moulds' },
    { kind: 'exam', label: 'Tinea by site; KOH; terbinafine' },
  ],

  highYield: [
    '**DERMATOPHYTES are KERATINOPHILIC filamentous fungi (moulds) that infect the dead KERATIN of skin, hair and nails — they do NOT invade living tissue, so disease is superficial (cutaneous). Three genera: TRICHOPHYTON (skin/hair/nails), MICROSPORUM (skin/hair), and EPIDERMOPHYTON (skin/nails). Infection is called "TINEA" (ringworm) or "dermatophytosis"; sources are humans (anthropophilic), animals (zoophilic — more inflammatory), or soil (geophilic).**',
    '**Clinical TINEA is named by SITE: tinea CAPITIS (scalp/hair — children, kerion, may fluoresce with Microsporum under Wood\'s lamp), tinea CORPORIS (body — annular scaly plaque with central clearing, "ringworm"), tinea CRURIS (groin, "jock itch"), tinea PEDIS (feet, "athlete\'s foot"; interdigital), and tinea UNGUIUM/ONYCHOMYCOSIS (nails — thick, discoloured, crumbling). Tinea versicolor is NOT a dermatophyte (that is Malassezia — [[cryptococcus-malassezia]]).**',
    '**Diagnosis is by KOH microscopy of skin scrapings/nail clippings/plucked hairs (digests keratin to reveal SEPTATE branching HYPHAE), fungal CULTURE (Sabouraud), and Wood\'s lamp (some Microsporum). Treatment: TOPICAL azoles/terbinafine for limited skin disease; but SYSTEMIC therapy (oral TERBINAFINE, itraconazole, or griseofulvin) is required for HAIR (tinea capitis) and NAIL (onychomycosis) disease, because topicals cannot penetrate hair follicles/nail plate adequately.**',
    '**So dermatophytes are the common, superficial "ringworm" fungi, distinguished from Candida (mucosal/invasive yeast) and Malassezia (versicolor). The exam keys are: keratin-restricted, tinea-by-site naming, KOH diagnosis, and the rule that hair and nail infections need SYSTEMIC (oral) antifungals.**',
    '**The take-home: DERMATOPHYTES = keratinophilic moulds (Trichophyton/Microsporum/Epidermophyton) → TINEA of skin/hair/nail (ringworm), named by SITE (capitis/corporis/cruris/pedis/unguium). Diagnose by KOH (septate hyphae)/culture/Wood\'s lamp. Topical for skin; ORAL terbinafine/itraconazole/griseofulvin for HAIR & NAIL.** Invasive moulds are [[opportunistic-molds-aspergillus-mucorales]]; subcutaneous mycoses are [[mycetoma-eumycetoma]].',
  ],

  mechanism: {
    title: 'Keratinophilic moulds (Trichophyton/Microsporum/Epidermophyton) → superficial TINEA of skin/hair/nail, named by site; KOH/culture/Wood\'s lamp; topical for skin but ORAL for hair & nail',
    steps: [
      { id: 's1', label: 'Dermatophytes infect dead keratin (skin/hair/nail) only — superficial', emphasis: 'key' },
      { id: 's2', label: 'Genera: Trichophyton, Microsporum, Epidermophyton; disease = "tinea"/ringworm', emphasis: 'key' },
      { id: 's3', label: 'Named by site: capitis (scalp), corporis (body), cruris (groin), pedis (feet), unguium (nail)', emphasis: 'key' },
      { id: 's4', label: 'Diagnose: KOH (septate branching hyphae), Sabouraud culture, Wood\'s lamp (some Microsporum)', emphasis: 'key' },
      { id: 's5', label: 'Topical for skin; ORAL terbinafine/itraconazole/griseofulvin needed for HAIR & NAIL', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'An annular scaly plaque with central clearing ("ringworm")', mechanism: 'Tinea corporis (dermatophyte)', significance: 'key' },
    { sign: 'Scaly scalp with hair loss and a boggy inflammatory mass in a child', mechanism: 'Tinea capitis (± kerion)', significance: 'key' },
    { sign: 'Thick, discoloured, crumbling toenails', mechanism: 'Onychomycosis (tinea unguium)', significance: 'key' },
    { sign: 'Septate branching hyphae on KOH of skin scrapings', mechanism: 'Dermatophyte infection', significance: 'supportive' },
    { sign: 'Interdigital maceration and itching of the feet', mechanism: 'Tinea pedis (athlete\'s foot)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The tissue dermatophytes are restricted to', meaning: 'Keratin (skin, hair, nails)' },
    { clue: 'The three dermatophyte genera', meaning: 'Trichophyton, Microsporum, Epidermophyton' },
    { clue: 'The bedside test for dermatophytosis', meaning: 'KOH microscopy (septate hyphae)' },
    { clue: 'The infections requiring oral (not topical) therapy', meaning: 'Hair (tinea capitis) and nail (onychomycosis)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Dermatophytes are keratin-restricted moulds causing superficial "tinea"/ringworm named by site; they are diagnosed by KOH microscopy and culture. The key management rule is that limited skin disease responds to topical azoles/terbinafine, but hair (tinea capitis) and nail (onychomycosis) infections require systemic oral therapy (terbinafine, itraconazole or griseofulvin) because topical agents cannot penetrate the follicle or nail plate. Distinguishing dermatophytes from Candida and Malassezia (tinea versicolor) avoids treatment errors. Invasive moulds are [[opportunistic-molds-aspergillus-mucorales]].' },
  ],

  mnemonics: [
    { hook: 'Dermatophytes = keratin only: "Trichophyton/Microsporum/Epidermophyton → tinea by site"', expansion: ['KOH = septate hyphae', 'Ringworm = central clearing'] },
    { hook: '"Hair & Nail = oral (terbinafine); skin = topical"', expansion: ['Onychomycosis needs oral', 'Wood\'s lamp: some Microsporum'] },
  ],

  traps: [
    {
      questionCategory: 'Treating scalp and nail dermatophytosis',
      wrongInstinct: 'Tinea capitis (scalp) and onychomycosis (nail) can be cleared with topical antifungal creams like other ringworm',
      rightAnswer: 'HAIR and NAIL dermatophyte infections REQUIRE SYSTEMIC (oral) antifungals — terbinafine, itraconazole or griseofulvin — because topical creams cannot penetrate the hair follicle or nail plate adequately; only limited glabrous-SKIN tinea (corporis/cruris/pedis) reliably responds to topical therapy',
      why: 'Prescribing only topical treatment for scalp or nail infection leads to persistent/relapsing disease; the site (follicle/nail vs skin) determines whether oral therapy is mandatory — a common clinical and exam pitfall.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Dermatophytes cause superficial infection because they:',
      options: [
        { id: 'a', text: 'Are keratinophilic and infect only dead keratin (skin, hair, nails)' },
        { id: 'b', text: 'Invade the bloodstream' },
        { id: 'c', text: 'Grow only inside macrophages' },
        { id: 'd', text: 'Require an ergosterol-free membrane' },
      ],
      answerId: 'a',
      explanation: 'Dermatophytes (Trichophyton, Microsporum, Epidermophyton) are keratinophilic and confined to dead keratinised tissue — skin, hair and nails — so they cause superficial "tinea"/ringworm rather than invasive disease, diagnosed by KOH microscopy showing septate hyphae.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which dermatophyte infections generally require oral (systemic) antifungal therapy rather than topical treatment?',
      options: [
        { id: 'a', text: 'Tinea capitis (scalp/hair) and onychomycosis (nail)' },
        { id: 'b', text: 'Tinea corporis only' },
        { id: 'c', text: 'Tinea cruris only' },
        { id: 'd', text: 'All tinea can be treated topically' },
      ],
      answerId: 'a',
      explanation: 'Hair and nail infections (tinea capitis, onychomycosis) need systemic oral antifungals (terbinafine, itraconazole, griseofulvin) because topical agents cannot penetrate the follicle or nail plate; limited glabrous-skin tinea can be treated topically.',
      tests: 'treatment',
    },
  ],

  figures: [],
};

export default dermatophytesTinea;
