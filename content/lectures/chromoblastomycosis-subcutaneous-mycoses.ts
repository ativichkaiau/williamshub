import type { Lecture } from '../../lib/types';

export const chromoblastomycosisSubcutaneousMycoses: Lecture = {
  id: 'chromoblastomycosis-subcutaneous-mycoses',
  title: 'Chromoblastomycosis & Subcutaneous Mycoses',
  system: 'microbiology',
  source: 'L25 — Pathogenic Filamentous Fungi II',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Micro' },
    { kind: 'lecture', label: 'L25 Subcutaneous' },
    { kind: 'mechanism', label: 'Dematiaceous; sclerotic bodies' },
    { kind: 'exam', label: 'Muriform (sclerotic) bodies; verrucous plaque' },
  ],

  highYield: [
    'CHROMOBLASTOMYCOSIS is a chronic SUBCUTANEOUS mycosis caused by pigmented (DEMATIACEOUS / melanised) fungi (e.g. Fonsecaea, Cladophialophora, Phialophora) implanted by trauma from SOIL/plants — again in barefoot rural workers of tropical regions, usually on the LOWER LIMB. Over years it forms slowly enlarging, warty/VERRUCOUS ("cauliflower-like") plaques and nodules.',
    'The diagnostic hallmark is the MURIFORM (SCLEROTIC) BODY — thick-walled, brown, septate "copper-penny" cells seen in tissue (representing the fungus\'s tissue form). This distinguishes chromoblastomycosis from mycetoma (which discharges GRAINS) and from PHAEOHYPHOMYCOSIS (another dematiaceous-fungus infection that instead shows pigmented HYPHAE in tissue, e.g. subcutaneous cysts or, rarely, brain abscess).',
    'Treatment is difficult (chronic, relapsing): prolonged ANTIFUNGALS (ITRACONAZOLE, terbinafine, sometimes flucytosine) ± physical methods (surgical excision, cryotherapy, thermotherapy) for localised disease. Like mycetoma and sporotrichosis, it is a disease of IMPLANTATION — prevention is footwear/protection in endemic agricultural settings.',
    'So the SUBCUTANEOUS mycoses form a family acquired by traumatic implantation from soil/vegetation: SPOROTRICHOSIS (lymphocutaneous nodules — [[talaromyces-sporothrix]]), MYCETOMA (grain-discharging sinuses — [[mycetoma-eumycetoma]]), and CHROMOBLASTOMYCOSIS (verrucous plaques with muriform/sclerotic bodies) plus phaeohyphomycosis. They are chronic, deforming, and diagnosed by their characteristic tissue forms.',
    '**The take-home: CHROMOBLASTOMYCOSIS = chronic SUBCUTANEOUS implantation infection by DEMATIACEOUS fungi → VERRUCOUS ("cauliflower") plaques on the leg, with diagnostic MURIFORM/SCLEROTIC ("copper-penny") bodies in tissue; treat prolonged itraconazole/terbinafine ± surgery. Phaeohyphomycosis = pigmented HYPHAE instead. Part of the implantation subcutaneous-mycosis family.** Mycetoma is [[mycetoma-eumycetoma]]; sporotrichosis is [[talaromyces-sporothrix]].',
  ],

  mechanism: {
    title: 'Chromoblastomycosis: dematiaceous fungi implanted from soil → verrucous leg plaques, diagnostic MURIFORM (sclerotic/copper-penny) bodies; treat itraconazole/terbinafine ± surgery; phaeohyphomycosis = pigmented hyphae',
    steps: [
      { id: 's1', label: 'Dematiaceous (pigmented) fungi implanted by trauma from soil/plants (leg)', emphasis: 'key' },
      { id: 's2', label: 'Chronic verrucous ("cauliflower") plaques/nodules over years', emphasis: 'key' },
      { id: 's3', label: 'Diagnostic MURIFORM (sclerotic) "copper-penny" bodies in tissue', emphasis: 'key' },
      { id: 's4', label: 'Treat: prolonged itraconazole/terbinafine ± excision/cryotherapy (relapsing)', emphasis: 'key' },
      { id: 's5', label: 'Phaeohyphomycosis = pigmented HYPHAE in tissue (subcutaneous cyst/brain abscess)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Chronic warty, cauliflower-like plaques on the lower leg of a rural worker', mechanism: 'Chromoblastomycosis', significance: 'key' },
    { sign: 'Brown, thick-walled "copper-penny" (muriform/sclerotic) bodies in tissue', mechanism: 'Chromoblastomycosis (diagnostic)', significance: 'key' },
    { sign: 'Pigmented septate hyphae in a subcutaneous cyst or brain abscess', mechanism: 'Phaeohyphomycosis', significance: 'supportive' },
    { sign: 'Slowly relapsing subcutaneous fungal disease from soil implantation', mechanism: 'Subcutaneous (implantation) mycosis', significance: 'supportive' },
    { sign: 'Partial response requiring surgery plus prolonged antifungals', mechanism: 'Difficult-to-treat chromoblastomycosis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The pigment class of the causative fungi', meaning: 'Dematiaceous (melanised)' },
    { clue: 'The diagnostic tissue form of chromoblastomycosis', meaning: 'Muriform (sclerotic) "copper-penny" bodies' },
    { clue: 'The related infection showing pigmented hyphae instead', meaning: 'Phaeohyphomycosis' },
    { clue: 'The main antifungals used', meaning: 'Itraconazole/terbinafine (± surgery)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Chromoblastomycosis is a chronic subcutaneous mycosis of traumatic soil implantation caused by dematiaceous fungi, producing verrucous leg plaques and diagnosed by pathognomonic muriform (sclerotic/"copper-penny") bodies in tissue; it is difficult to treat, needing prolonged itraconazole/terbinafine with surgery/cryotherapy for localised disease. It sits within the implantation subcutaneous-mycosis family with sporotrichosis and mycetoma, each identified by its characteristic tissue form (lymphocutaneous nodules; grains; muriform bodies; pigmented hyphae in phaeohyphomycosis). Mycetoma is [[mycetoma-eumycetoma]]; sporotrichosis is [[talaromyces-sporothrix]].' },
  ],

  mnemonics: [
    { hook: '"Chromoblastomycosis = Copper-penny (muriform/sclerotic) bodies + Cauliflower plaques"', expansion: ['Dematiaceous (pigmented) fungi', 'Itraconazole/terbinafine ± surgery'] },
    { hook: 'Implantation trio: "Sporotrichosis (nodules), Mycetoma (grains), Chromoblastomycosis (copper-penny)"', expansion: ['Phaeohyphomycosis = pigmented hyphae', 'Soil/plant trauma; barefoot workers'] },
  ],

  traps: [
    {
      questionCategory: 'Tissue clues among subcutaneous mycoses',
      wrongInstinct: 'The subcutaneous implantation mycoses all look the same in tissue and cannot be told apart',
      rightAnswer: 'Each has a DISTINCTIVE tissue clue: CHROMOBLASTOMYCOSIS shows MURIFORM (sclerotic) "copper-penny" bodies; MYCETOMA discharges GRAINS through sinus tracts; SPOROTRICHOSIS shows cigar-shaped yeasts with ascending lymphocutaneous nodules; and PHAEOHYPHOMYCOSIS shows pigmented HYPHAE — so the tissue morphology distinguishes them and points to the specific diagnosis and treatment',
      why: 'Although all follow soil/plant implantation and can look clinically chronic and verrucous/nodular, their characteristic tissue forms (copper-penny bodies vs grains vs pigmented hyphae vs cigar yeasts) are the discriminators used to diagnose and treat each correctly.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The pathognomonic tissue finding in chromoblastomycosis is:',
      options: [
        { id: 'a', text: 'Muriform (sclerotic) "copper-penny" bodies' },
        { id: 'b', text: 'Grains discharged through sinus tracts' },
        { id: 'c', text: 'Spherules containing endospores' },
        { id: 'd', text: 'Broad-based budding yeasts' },
      ],
      answerId: 'a',
      explanation: 'Chromoblastomycosis, caused by dematiaceous (pigmented) fungi implanted from soil, is diagnosed by muriform (sclerotic) bodies — thick-walled brown "copper-penny" cells — in tissue, distinguishing it from mycetoma (grains) and phaeohyphomycosis (pigmented hyphae).',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Chromoblastomycosis and phaeohyphomycosis are both caused by dematiaceous fungi but differ in that:',
      options: [
        { id: 'a', text: 'Chromoblastomycosis shows muriform (sclerotic) bodies, whereas phaeohyphomycosis shows pigmented hyphae in tissue' },
        { id: 'b', text: 'Only phaeohyphomycosis is caused by fungi' },
        { id: 'c', text: 'Chromoblastomycosis is a yeast infection' },
        { id: 'd', text: 'They cannot be distinguished histologically' },
      ],
      answerId: 'a',
      explanation: 'Both are caused by pigmented (dematiaceous) fungi, but chromoblastomycosis is defined by muriform/sclerotic "copper-penny" bodies in tissue, whereas phaeohyphomycosis shows pigmented (melanised) hyphae — the tissue form distinguishes them.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default chromoblastomycosisSubcutaneousMycoses;
