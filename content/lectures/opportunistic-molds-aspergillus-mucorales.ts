import type { Lecture } from '../../lib/types';

export const opportunisticMoldsAspergillusMucorales: Lecture = {
  id: 'opportunistic-molds-aspergillus-mucorales',
  title: 'Opportunistic Molds: Aspergillus & Mucorales',
  system: 'microbiology',
  source: 'L24 — Pathogenic Filamentous Fungi I',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Micro' },
    { kind: 'lecture', label: 'L24 Invasive molds' },
    { kind: 'mechanism', label: 'Angioinvasive hyphae; hyphal angle' },
    { kind: 'exam', label: 'Aspergillus 45° septate vs Mucor 90° aseptate' },
  ],

  highYield: [
    'ASPERGILLUS (mainly A. fumigatus) is a ubiquitous environmental MOULD (inhaled spores) with SEPTATE hyphae branching at ACUTE (~45°) angles. Its diseases depend on host immunity and lung structure: (1) ALLERGIC — ABPA (asthmatics/CF: hypersensitivity, ↑IgE/eosinophils, bronchiectasis); (2) ASPERGILLOMA — a "fungus ball" colonising a pre-existing lung CAVITY (e.g. old TB), causing haemoptysis; (3) INVASIVE aspergillosis — ANGIOINVASIVE infection in the NEUTROPENIC/immunocompromised (haematology, transplant), with pulmonary nodules ("halo"/air-crescent signs) and dissemination to brain. Galactomannan aids diagnosis; treat with VORICONAZOLE.',
    'MUCORMYCOSIS (Mucorales — Rhizopus, Mucor) shows broad, RIBBON-like, ASEPTATE (or sparsely septate) hyphae branching at WIDE (~90°) angles. It is ANGIOINVASIVE, causing tissue infarction/BLACK NECROSIS. Classic setting: DIABETIC KETOACIDOSIS (and iron overload/deferoxamine, neutropenia) → RHINO-ORBITAL-CEREBRAL mucormycosis (sinusitis → black necrotic palate/nasal turbinates → orbit → brain, rapidly fatal). Treatment is urgent: aggressive surgical DEBRIDEMENT + AMPHOTERICIN B (± isavuconazole/posaconazole) and correcting the underlying condition.',
    'The exam discriminator is HYPHAL morphology: ASPERGILLUS = SEPTATE, acute (45°) branching; MUCORALES = ASEPTATE/ribbon-like, wide (90°) branching. Both are angioinvasive opportunists, but the hosts and drugs differ (voriconazole for Aspergillus; amphotericin + surgery for Mucor — echinocandins/voriconazole do NOT reliably cover Mucorales).',
    'FUSARIUM and Scedosporium are other invasive hyaline moulds in the profoundly immunosuppressed (fungaemia with skin lesions). The unifying theme: environmental moulds that are harmless to the immunocompetent but ANGIOINVASIVE and lethal in NEUTROPENIA/immunosuppression (Aspergillus) or DIABETIC KETOACIDOSIS/iron overload (Mucor).',
    '**The take-home: invasive angioinvasive moulds. ASPERGILLUS = SEPTATE, 45° branching → ABPA (asthma/CF), aspergilloma (old cavity), INVASIVE (neutropenia; halo sign) → VORICONAZOLE. MUCORALES = ASEPTATE, 90° branching → RHINO-ORBITAL-CEREBRAL mucormycosis in DKA (black necrosis) → SURGERY + AMPHOTERICIN. Hyphal angle/septation distinguishes them.** Dermatophytes are [[dermatophytes-tinea]]; antifungals are [[antifungal-agents-lab-diagnosis]].',
  ],

  mechanism: {
    title: 'Angioinvasive moulds: Aspergillus (SEPTATE, 45° → ABPA/aspergilloma/invasive in neutropenia → voriconazole) vs Mucorales (ASEPTATE, 90° → rhino-orbital-cerebral in DKA, black necrosis → surgery + amphotericin)',
    steps: [
      { id: 's1', label: 'Aspergillus: septate hyphae, acute (45°) branching; inhaled spores', emphasis: 'key' },
      { id: 's2', label: 'Aspergillus diseases: ABPA (asthma/CF), aspergilloma (old cavity), invasive (neutropenia)', emphasis: 'key' },
      { id: 's3', label: 'Invasive aspergillosis → voriconazole (galactomannan aids diagnosis)', emphasis: 'key' },
      { id: 's4', label: 'Mucorales: aseptate/ribbon hyphae, wide (90°) branching; angioinvasive → black necrosis', emphasis: 'danger' },
      { id: 's5', label: 'Rhino-orbital-cerebral mucormycosis in DKA → urgent surgery + amphotericin B', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Asthmatic/CF patient with bronchiectasis, high IgE and eosinophilia', mechanism: 'Allergic bronchopulmonary aspergillosis (ABPA)', significance: 'key' },
    { sign: 'A fungus ball in an old tuberculous lung cavity with haemoptysis', mechanism: 'Aspergilloma', significance: 'key' },
    { sign: 'Angioinvasive pulmonary nodules with a "halo" sign in a neutropenic patient', mechanism: 'Invasive aspergillosis (voriconazole)', significance: 'key' },
    { sign: 'Black necrotic palate/turbinates with sinusitis in diabetic ketoacidosis', mechanism: 'Rhino-orbital-cerebral mucormycosis', significance: 'key' },
    { sign: 'Aseptate ribbon-like hyphae branching at wide angles', mechanism: 'Mucorales', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Aspergillus hyphal morphology', meaning: 'Septate, acute (~45°) branching' },
    { clue: 'Mucorales hyphal morphology', meaning: 'Aseptate/ribbon-like, wide (~90°) branching' },
    { clue: 'The setting for rhino-orbital-cerebral mucormycosis', meaning: 'Diabetic ketoacidosis (iron overload, neutropenia)' },
    { clue: 'The treatments (Aspergillus vs Mucor)', meaning: 'Voriconazole; amphotericin B + surgery' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Aspergillus and Mucorales are angioinvasive environmental moulds distinguished by hyphal morphology (septate 45° vs aseptate 90°) with different hosts and drugs. Aspergillus causes ABPA (asthma/CF), aspergilloma (old cavity) and invasive aspergillosis in neutropenia (voriconazole; galactomannan). Mucormycosis strikes diabetic ketoacidosis and iron-overloaded/neutropenic patients as rapidly progressive rhino-orbital-cerebral disease with black necrosis, and is a surgical emergency needing aggressive debridement plus amphotericin B (echinocandins/voriconazole do not reliably cover Mucorales). Dermatophytes are [[dermatophytes-tinea]]; antifungals are [[antifungal-agents-lab-diagnosis]].' },
  ],

  mnemonics: [
    { hook: '"Aspergillus = Acute Angle (45°), septate; Mucor = 90° wide, aseptate ribbon"', expansion: ['Aspergillus → voriconazole', 'Mucor → surgery + amphotericin'] },
    { hook: '"Mucor loves DKA → black necrotic rhino-orbital-cerebral"', expansion: ['ABPA (asthma/CF), aspergilloma (cavity)', 'Invasive = neutropenia/halo sign'] },
  ],

  traps: [
    {
      questionCategory: 'Recognising and treating mucormycosis',
      wrongInstinct: 'Rhino-orbital-cerebral mucormycosis in a diabetic can be managed with antifungals alone, like most fungal infections',
      rightAnswer: 'MUCORMYCOSIS is angioinvasive and causes ischaemic tissue NECROSIS that antifungals penetrate poorly, so treatment is a SURGICAL EMERGENCY — urgent, aggressive DEBRIDEMENT of necrotic tissue PLUS amphotericin B AND correction of the underlying condition (e.g. reversing diabetic ketoacidosis); relying on antifungals alone (or using voriconazole/echinocandins, which do NOT reliably cover Mucorales) leads to rapid, often fatal progression',
      why: 'Because the fungus infarcts tissue and drugs cannot reach devitalised areas, surgical debridement plus amphotericin and metabolic correction are all essential — and using the wrong antifungal (voriconazole) misses Mucorales entirely.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient in diabetic ketoacidosis develops sinusitis with a black necrotic area on the palate; biopsy shows broad, aseptate (ribbon-like) hyphae branching at wide (~90°) angles. The diagnosis and key treatment are:',
      options: [
        { id: 'a', text: 'Mucormycosis; urgent surgical debridement plus amphotericin B' },
        { id: 'b', text: 'Invasive aspergillosis; voriconazole alone' },
        { id: 'c', text: 'Candidiasis; an echinocandin' },
        { id: 'd', text: 'Dermatophytosis; oral terbinafine' },
      ],
      answerId: 'a',
      explanation: 'Broad aseptate hyphae with wide-angle branching in a ketoacidotic diabetic with black necrotic sinus tissue indicate rhino-orbital-cerebral mucormycosis (Mucorales). It is a surgical emergency: aggressive debridement plus amphotericin B and correction of the underlying condition; voriconazole/echinocandins do not cover Mucorales.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which feature distinguishes Aspergillus from Mucorales on histology?',
      options: [
        { id: 'a', text: 'Aspergillus has septate hyphae with acute (~45°) branching; Mucorales are aseptate with wide (~90°) branching' },
        { id: 'b', text: 'Aspergillus is a yeast; Mucorales are dermatophytes' },
        { id: 'c', text: 'Both are identical under the microscope' },
        { id: 'd', text: 'Aspergillus is aseptate; Mucorales are septate' },
      ],
      answerId: 'a',
      explanation: 'Aspergillus shows septate hyphae branching at acute (~45°) angles, whereas Mucorales show broad, ribbon-like, aseptate (or sparsely septate) hyphae branching at wide (~90°) angles — a key morphological distinction that also guides therapy (voriconazole vs amphotericin plus surgery).',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default opportunisticMoldsAspergillusMucorales;
