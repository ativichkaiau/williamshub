import type { Lecture } from '../../lib/types';

export const talaromycesSporothrix: Lecture = {
  id: 'talaromyces-sporothrix',
  title: 'Talaromyces (Penicillium) marneffei & Sporothrix',
  system: 'microbiology',
  source: 'L23 — Dimorphic Pathogenic Fungi',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Micro' },
    { kind: 'lecture', label: 'L23 Talaromyces' },
    { kind: 'mechanism', label: 'Dimorphic; SE-Asia/HIV; rose-gardener' },
    { kind: 'exam', label: 'Talaromyces in Thai HIV; sporotrichosis' },
  ],

  highYield: [
    'TALAROMYCES MARNEFFEI (formerly PENICILLIUM marneffei) is a DIMORPHIC fungus and — this is high-yield for THAILAND — the classic endemic mycosis of SOUTHEAST ASIA (northern Thailand, southern China, Vietnam), an important AIDS-DEFINING opportunistic infection in HIV patients with low CD4. The reservoir involves soil and BAMBOO RATS; it is the third commonest HIV-associated opportunistic infection in the region (after TB and cryptococcosis).',
    'Talaromycosis presents in advanced HIV with FEVER, WEIGHT LOSS, anaemia, generalised LYMPHADENOPATHY/hepatosplenomegaly, and characteristic UMBILICATED, molluscum-contagiosum-like PAPULES on the face/trunk. The diagnostic clue is a yeast dividing by TRANSVERSE SEPTATION (FISSION) — not budding — with a "sausage" appearance in tissue, and the mould produces a diffusible RED PIGMENT in culture. Treatment: AMPHOTERICIN B induction then ITRACONAZOLE (with secondary prophylaxis until immune recovery).',
    'SPOROTHRIX SCHENCKII causes SPOROTRICHOSIS ("rose-gardener\'s disease") — a subcutaneous/lymphocutaneous mycosis acquired by traumatic IMPLANTATION of the fungus from SOIL/PLANT matter (rose thorns, sphagnum moss). A papule/ulcer at the inoculation site is followed by NODULES ascending along LYMPHATICS ("nodular lymphangitis"). It is dimorphic (cigar-shaped yeasts in tissue) and treated with ITRACONAZOLE (potassium iodide historically); rarely pulmonary/disseminated.',
    'So both are dimorphic but epidemiologically distinct: *Talaromyces* = SE-Asian systemic AIDS infection (umbilicated papules, fission yeast, red pigment; amphotericin→itraconazole), whereas *Sporothrix* = worldwide subcutaneous implantation disease of gardeners (lymphocutaneous nodules; itraconazole). For a Thai medical student, TALAROMYCOSIS in an HIV patient is an essential diagnosis.',
    '**The take-home: TALAROMYCES MARNEFFEI = dimorphic, SE-ASIA/THAILAND, AIDS-defining (fever, umbilicated papules, lymphadenopathy; FISSION yeast + RED pigment) → amphotericin then itraconazole. SPOROTHRIX = "rose-gardener" implantation → lymphocutaneous ascending nodules → itraconazole.** The other dimorphic (endemic) fungi are [[systemic-dimorphic-fungi]]; HIV opportunists overlap with [[cryptococcus-malassezia]].',
  ],

  mechanism: {
    title: 'Talaromyces marneffei (dimorphic, SE-Asia/Thailand, AIDS-defining: umbilicated papules, FISSION yeast, red pigment → amphotericin then itraconazole) vs Sporothrix (rose-gardener implantation → ascending lymphocutaneous nodules → itraconazole)',
    steps: [
      { id: 's1', label: 'Talaromyces marneffei: dimorphic; endemic SE Asia/N Thailand (bamboo rats)', emphasis: 'key' },
      { id: 's2', label: 'AIDS-defining: fever, weight loss, lymphadenopathy, umbilicated (molluscum-like) papules', emphasis: 'danger' },
      { id: 's3', label: 'Clues: yeast dividing by transverse SEPTATION (fission), diffusible RED pigment', emphasis: 'key' },
      { id: 's4', label: 'Treat: amphotericin B induction → itraconazole (+ secondary prophylaxis)', emphasis: 'key' },
      { id: 's5', label: 'Sporothrix (rose-gardener): implantation → ascending lymphocutaneous nodules → itraconazole', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Fever, weight loss and umbilicated (molluscum-like) papules in a Thai HIV patient', mechanism: 'Talaromycosis (T. marneffei)', significance: 'key' },
    { sign: 'Yeast dividing by transverse septation with a red-pigmented mould in culture', mechanism: 'Talaromyces marneffei', significance: 'key' },
    { sign: 'A leading HIV opportunistic infection in southeast Asia', mechanism: 'Talaromycosis (after TB, cryptococcosis)', significance: 'key' },
    { sign: 'A thorn-prick ulcer with nodules ascending up the lymphatics of the arm', mechanism: 'Lymphocutaneous sporotrichosis', significance: 'supportive' },
    { sign: 'Cigar-shaped yeasts in tissue after gardening injury', mechanism: 'Sporothrix schenckii', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The dimorphic fungus endemic to SE Asia/Thailand in HIV', meaning: 'Talaromyces (Penicillium) marneffei' },
    { clue: 'The way Talaromyces yeast divides (vs budding)', meaning: 'Transverse septation (fission); red pigment in mould' },
    { clue: 'The treatment of talaromycosis', meaning: 'Amphotericin B then itraconazole' },
    { clue: 'The implantation mycosis of gardeners', meaning: 'Sporotrichosis (Sporothrix schenckii)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: '*Talaromyces marneffei* is a crucial diagnosis in Thailand: a dimorphic fungus endemic to Southeast Asia and a major AIDS-defining opportunistic infection presenting with fever, wasting, lymphadenopathy and umbilicated skin papules, identified by fission-dividing yeasts and a red-pigmented mould, and treated with amphotericin B induction then itraconazole (with secondary prophylaxis until immune reconstitution). *Sporothrix* schenckii causes rose-gardener\'s lymphocutaneous disease from traumatic soil/plant implantation, treated with itraconazole. The endemic systemic dimorphics are [[systemic-dimorphic-fungi]]; other HIV yeasts are [[cryptococcus-malassezia]].' },
  ],

  mnemonics: [
    { hook: '"Talaromyces marneffei = SE Asia/Thailand HIV: umbilicated papules + FISSION yeast + RED pigment"', expansion: ['Amphotericin → itraconazole', '3rd HIV OI after TB/crypto'] },
    { hook: '"Sporothrix = rose-gardener → ascending lymphocutaneous nodules → itraconazole"', expansion: ['Implantation from soil/plants', 'Cigar-shaped tissue yeast'] },
  ],

  traps: [
    {
      questionCategory: 'Umbilicated papules in a Thai HIV patient',
      wrongInstinct: 'Umbilicated, molluscum-like papules in an HIV patient are just molluscum contagiosum',
      rightAnswer: 'In an HIV patient in SOUTHEAST ASIA (e.g. northern Thailand), fever and wasting with UMBILICATED, molluscum-like PAPULES should raise DISSEMINATED TALAROMYCOSIS (Talaromyces marneffei) — a life-threatening AIDS-defining mycosis needing amphotericin B then itraconazole — not simply molluscum contagiosum; skin lesions look similar but the systemic illness and endemic setting are the clues',
      why: 'Dismissing the papules as molluscum misses a treatable, fatal-if-untreated endemic mycosis; in the SE-Asian HIV context, umbilicated papules with systemic illness demand evaluation for talaromycosis.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with advanced HIV in northern Thailand has fever, weight loss, lymphadenopathy and umbilicated skin papules; a mould in culture produces a diffusible red pigment. The most likely organism is:',
      options: [
        { id: 'a', text: 'Talaromyces (Penicillium) marneffei' },
        { id: 'b', text: 'Cryptococcus neoformans' },
        { id: 'c', text: 'Histoplasma capsulatum' },
        { id: 'd', text: 'Candida albicans' },
      ],
      answerId: 'a',
      explanation: 'Talaromyces marneffei is a dimorphic fungus endemic to southeast Asia (including northern Thailand) and a major AIDS-defining infection: fever, wasting, lymphadenopathy and umbilicated papules, with fission-dividing yeasts and a red-pigmented mould. Treatment is amphotericin B then itraconazole.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A gardener develops an ulcer at a thorn-prick site followed by nodules ascending along the lymphatics of the forearm. This lymphocutaneous pattern is characteristic of:',
      options: [
        { id: 'a', text: 'Sporotrichosis (Sporothrix schenckii)' },
        { id: 'b', text: 'Tinea corporis' },
        { id: 'c', text: 'Cryptococcosis' },
        { id: 'd', text: 'Candidiasis' },
      ],
      answerId: 'a',
      explanation: 'Sporothrix schenckii is implanted by trauma from soil/plants (rose thorns, sphagnum moss), producing "rose-gardener\'s disease": a lesion at the inoculation site with nodules ascending along lymphatics (nodular lymphangitis). It is treated with itraconazole.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default talaromycesSporothrix;
