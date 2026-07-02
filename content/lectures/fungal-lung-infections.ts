import type { Lecture } from '../../lib/types';

export const fungalLungInfections: Lecture = {
  id: 'fungal-lung-infections',
  title: 'Fungal Lung Infections',
  system: 'respiratory',
  source: 'L7 — Fungal Lung Infections',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L7 Fungal Lung' },
    { kind: 'disease', label: 'Aspergillosis' },
    { kind: 'exam', label: 'PCP / Cryptococcus' },
  ],

  highYield: [
    '**Fungal lung disease splits into endemic dimorphic fungi (can infect the immunocompetent) and opportunistic fungi (mainly the immunocompromised).** The **dimorphic** group is mould in the environment (cold) and yeast in tissue (37°C): **Histoplasma** (bird/bat droppings; intracellular yeast in macrophages), **Coccidioides** (spherules with endospores), **Blastomyces** (broad-based budding), and — highly relevant in Southeast Asia — **Talaromyces (Penicillium) marneffei** in HIV.',
    '**Aspergillus causes three distinct syndromes depending on host immunity:** **allergic bronchopulmonary aspergillosis (ABPA)** — a hypersensitivity reaction in asthmatics/CF (↑IgE, eosinophilia, central bronchiectasis); **aspergilloma** — a "fungus ball" colonising a pre-existing cavity (may cause haemoptysis, "monod sign"); and **invasive aspergillosis** — angioinvasive infection in the neutropenic, with acute-angle septate hyphae.',
    '**Pneumocystis jirovecii pneumonia (PCP) is the classic opportunistic infection of advanced HIV (CD4 <200).** It causes progressive dyspnoea and hypoxia with **bilateral perihilar/"ground-glass" infiltrates**, often with a normal-sounding chest and raised LDH; cysts are seen on silver stain (GMS) as "boat/cup" shapes. **Treat and prophylax with co-trimoxazole (TMP-SMX).**',
    '**Cryptococcus neoformans** (pigeon droppings) is an encapsulated yeast that causes pneumonia and, importantly, **meningitis in HIV**; it shows **narrow-based budding and a thick capsule** (India ink / mucicarmine; positive cryptococcal antigen). **Mucormycosis (Rhizopus/Mucor)** is an **angioinvasive, broad, non-septate, right-angle-branching mould of diabetics in ketoacidosis** (rhino-orbital-cerebral).',
    '**Host and morphology localise the diagnosis:** immunocompetent + endemic exposure → dimorphic fungi (often TB-like granulomas); neutropenic → invasive Aspergillus/Mucor; HIV low CD4 → PCP, Cryptococcus, Talaromyces. Definitive diagnosis rests on **special stains (GMS, PAS), antigen tests, and culture**.',
  ],

  mechanism: {
    title: 'Dimorphic (any host) vs opportunistic (immunocompromised); morphology IDs',
    steps: [
      { id: 's1', label: 'Dimorphic: Histoplasma, Coccidioides, Blastomyces, Talaromyces (SE Asia/HIV)', emphasis: 'key' },
      { id: 's2', label: 'Aspergillus: ABPA (asthma) / aspergilloma (cavity) / invasive (neutropenic)', emphasis: 'key' },
      { id: 's3', label: 'PCP = HIV CD4<200: ground-glass, ↑LDH; treat/prophylax TMP-SMX', emphasis: 'key' },
      { id: 's4', label: 'Cryptococcus: capsule, narrow-based budding → meningitis in HIV' },
      { id: 's5', label: 'Mucor: diabetic DKA, angioinvasive, non-septate right-angle hyphae', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Fungus ball in a pre-existing lung cavity', mechanism: 'Aspergilloma (often in old TB cavity)', significance: 'key' },
    { sign: 'Asthmatic with recurrent infiltrates, ↑IgE and eosinophilia', mechanism: 'Allergic bronchopulmonary aspergillosis', significance: 'key' },
    { sign: 'HIV, CD4 <200, dyspnoea, ground-glass infiltrates, ↑LDH', mechanism: 'Pneumocystis jirovecii pneumonia', significance: 'key' },
    { sign: 'Encapsulated narrow-based budding yeast, HIV meningitis', mechanism: 'Cryptococcus neoformans', significance: 'supportive' },
    { sign: 'Angioinvasive fungus in a diabetic with ketoacidosis', mechanism: 'Mucormycosis (Rhizopus/Mucor)', significance: 'key' },
  ],

  investigations: [
    { clue: 'The opportunistic pneumonia of advanced HIV treated with co-trimoxazole', meaning: 'Pneumocystis jirovecii pneumonia (PCP)' },
    { clue: 'The three Aspergillus syndromes', meaning: 'ABPA, aspergilloma, invasive aspergillosis' },
    { clue: 'The dimorphic fungus causing HIV infection in Southeast Asia', meaning: 'Talaromyces (Penicillium) marneffei' },
    { clue: 'The angioinvasive mould of diabetic ketoacidosis', meaning: 'Mucor/Rhizopus (mucormycosis)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Antifungal choice follows the organism (azoles for many dimorphics/Aspergillus, amphotericin for severe/invasive disease and Mucor, TMP-SMX for PCP). An aspergilloma often sits in an old TB cavity ([[tuberculosis-pathology]]); ABPA complicates the asthma/bronchiectasis of [[asthma-bronchiectasis-pathology]]. Opportunistic disease flags immunosuppression (HIV, neutropenia). Contrast bacterial ([[community-acquired-pneumonia]]) and viral ([[influenza-covid-pneumonia]]) pneumonia.' },
  ],

  mnemonics: [
    { hook: 'Aspergillus "rule of A": Allergic (ABPA), Aspergilloma (cavity), Angioinvasive (neutropenic)', expansion: ['Septate, acute-angle (45°) branching', 'Aspergilloma → haemoptysis'] },
    { hook: 'HIV fungi by CD4: PCP + Cryptococcus + Talaromyces (SE Asia)', expansion: ['PCP: ground-glass, ↑LDH, TMP-SMX', 'Crypto: capsule → meningitis'] },
  ],

  traps: [
    {
      questionCategory: 'Distinguishing Aspergillus syndromes',
      wrongInstinct: 'Finding Aspergillus in the lung always means life-threatening invasive infection',
      rightAnswer: 'Aspergillus causes three different diseases by host: ALLERGIC (ABPA, hypersensitivity in asthmatics), a colonising ASPERGILLOMA (fungus ball in a cavity), and INVASIVE aspergillosis (angioinvasive, in the neutropenic) — only the last is the fulminant tissue-invasive form',
      why: 'Treatment differs completely (steroids for ABPA, possible resection for aspergilloma, urgent antifungals for invasive disease); the host\'s immune status determines which syndrome you are dealing with.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with advanced HIV (CD4 count 90) has subacute dyspnoea, hypoxia out of proportion to the exam, bilateral ground-glass infiltrates and a high LDH. The best initial treatment is:',
      options: [
        { id: 'a', text: 'Co-trimoxazole (TMP-SMX)' },
        { id: 'b', text: 'Amphotericin B for mucormycosis' },
        { id: 'c', text: 'Isoniazid and rifampin' },
        { id: 'd', text: 'Oseltamivir' },
      ],
      answerId: 'a',
      explanation: 'This is Pneumocystis jirovecii pneumonia (PCP), the classic opportunistic infection at CD4 <200; first-line treatment and prophylaxis is co-trimoxazole (with corticosteroids added if hypoxia is severe).',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'A diabetic patient in ketoacidosis develops rapidly progressive facial/sinus necrosis; biopsy shows broad, non-septate hyphae branching at right angles invading blood vessels. The organism is:',
      options: [
        { id: 'a', text: 'Aspergillus fumigatus' },
        { id: 'b', text: 'Mucor/Rhizopus (mucormycosis)' },
        { id: 'c', text: 'Cryptococcus neoformans' },
        { id: 'd', text: 'Histoplasma capsulatum' },
      ],
      answerId: 'b',
      explanation: 'Broad, non-septate (aseptate) hyphae branching at wide (right) angles with angioinvasion in a diabetic with ketoacidosis is mucormycosis. Contrast Aspergillus, which has septate hyphae branching at acute (45°) angles.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default fungalLungInfections;
