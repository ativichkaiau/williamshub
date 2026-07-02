import type { Lecture } from '../../lib/types';

export const mycobacteriumTuberculosisLeprae: Lecture = {
  id: 'mycobacterium-tuberculosis-leprae',
  title: 'Mycobacterium tuberculosis & leprae',
  system: 'microbiology',
  source: 'L18 — Mycobacteria, Nocardia & Actinomyces',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Micro' },
    { kind: 'lecture', label: 'L18 Mycobacteria' },
    { kind: 'mechanism', label: 'Acid-fast; granuloma; latency' },
    { kind: 'exam', label: 'Ghon/caseation; RIPE; leprosy spectrum' },
  ],

  highYield: [
    '**Mycobacteria have a waxy, MYCOLIC-ACID-rich cell wall → ACID-FAST (Ziehl-Neelsen/auramine; retain carbol-fuchsin against acid-alcohol), do not Gram-stain, and grow SLOWLY (M. tuberculosis doubles ~15–24 h; weeks on Löwenstein-Jensen; faster with liquid culture). The wall confers resistance to drying, acids and many disinfectants, and drives a granulomatous immune response.**',
    '**TUBERCULOSIS: inhaled droplet nuclei → PRIMARY infection with a GHON focus/complex and CASEATING (central necrosis) GRANULOMAS (epithelioid macrophages, Langhans giant cells, CD4 T-cell/Th1-driven). Most becomes LATENT (contained, positive tuberculin/IGRA, asymptomatic, non-infectious); REACTIVATION (apical/post-primary — with HIV, immunosuppression, malnutrition) causes cough, haemoptysis, night sweats, weight loss and cavitation, and can disseminate (miliary, meningitis, Pott\'s spine). HIV co-infection is a major driver.**',
    '**Diagnosis: sputum smear (AFB), culture, and rapid molecular tests (GeneXpert/NAAT with rifampicin-resistance detection); tuberculin skin test/IGRA detect exposure (latent). Treatment is prolonged COMBINATION therapy — RIPE (RIFAMPICIN, ISONIAZID, PYRAZINAMIDE, ETHAMBUTOL) for 2 months then rifampicin+isoniazid — multiple drugs to prevent resistance; MDR/XDR-TB are growing threats. BCG vaccine offers partial protection (esp. against severe childhood TB).**',
    '**M. LEPRAE (Hansen disease) is an acid-fast, unculturable (in vitro) organism causing LEPROSY — a spectrum from TUBERCULOID (strong Th1/cell-mediated immunity: few hypopigmented anaesthetic patches, thickened nerves, paucibacillary) to LEPROMATOUS (weak immunity/Th2: numerous skin lesions, "leonine facies", nasal/peripheral-nerve damage, multibacillary). Treatment = multidrug therapy (dapsone + rifampicin ± clofazimine). NON-tuberculous mycobacteria (e.g. M. avium complex in HIV) also cause disease.**',
    '**The take-home: ACID-FAST (mycolic acid), slow-growing. TB = inhaled → Ghon/CASEATING granuloma (Th1); mostly LATENT → REACTIVATION (HIV/immunosuppression) with cavitation; treat RIPE. M. LEPRAE = unculturable spectrum: TUBERCULOID (strong immunity, paucibacillary) vs LEPROMATOUS (weak immunity, multibacillary); MDT. Non-TB mycobacteria (MAC) in HIV.** Nocardia/Actinomyces are [[nocardia-actinomyces]]; granuloma immunology underlies [[bacterial-structure-cell-wall]].',
  ],

  mechanism: {
    title: 'Acid-fast (mycolic acid), slow-growing; TB (Ghon/caseating Th1 granuloma → latency → reactivation with HIV; RIPE); M. leprae spectrum (tuberculoid strong immunity vs lepromatous weak immunity; MDT)',
    steps: [
      { id: 's1', label: 'Mycolic-acid wall → acid-fast (ZN); slow growth; resists drying/acids', emphasis: 'key' },
      { id: 's2', label: 'TB: inhaled → Ghon focus + CASEATING granuloma (Th1/CD4, Langhans giant cells)', emphasis: 'key' },
      { id: 's3', label: 'Mostly LATENT → REACTIVATION with HIV/immunosuppression → cavitation/dissemination', emphasis: 'danger' },
      { id: 's4', label: 'Treat TB with RIPE (rifampicin/isoniazid/pyrazinamide/ethambutol); MDR/XDR threat', emphasis: 'key' },
      { id: 's5', label: 'M. leprae spectrum: tuberculoid (strong immunity, paucibacillary) ↔ lepromatous (weak, multibacillary); MDT', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Acid-fast bacilli in sputum with apical cavitation, night sweats and weight loss', mechanism: 'Reactivation tuberculosis', significance: 'key' },
    { sign: 'Caseating granulomas with Langhans giant cells on biopsy', mechanism: 'TB (Th1 cell-mediated response)', significance: 'key' },
    { sign: 'TB reactivation or dissemination in an HIV patient', mechanism: 'Loss of CD4/Th1 containment', significance: 'key' },
    { sign: 'Hypopigmented anaesthetic skin patches with thickened nerves', mechanism: 'Tuberculoid leprosy (strong immunity)', significance: 'supportive' },
    { sign: 'Numerous nodules with leonine facies and heavy bacillary load', mechanism: 'Lepromatous leprosy (weak immunity)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The stain for mycobacteria', meaning: 'Acid-fast (Ziehl-Neelsen/auramine)' },
    { clue: 'The granuloma type in TB', meaning: 'Caseating (central necrosis)' },
    { clue: 'The four-drug TB regimen', meaning: 'RIPE (rifampicin, isoniazid, pyrazinamide, ethambutol)' },
    { clue: 'The leprosy pole with strong cell-mediated immunity', meaning: 'Tuberculoid (paucibacillary)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Mycobacteria are acid-fast and slow-growing, shaping diagnosis (AFB smear, culture, GeneXpert/NAAT) and treatment. TB forms caseating Th1 granulomas, usually latent but reactivating with immunosuppression/HIV; it requires prolonged multidrug RIPE therapy to prevent resistance, with MDR/XDR-TB a growing concern and BCG offering partial protection. Leprosy runs a spectrum from tuberculoid (strong immunity, paucibacillary) to lepromatous (weak immunity, multibacillary) and is treated with multidrug therapy. Non-tuberculous mycobacteria (MAC) matter in HIV. Nocardia/Actinomyces are [[nocardia-actinomyces]].' },
  ],

  mnemonics: [
    { hook: 'TB: "acid-fast + CASEATING granuloma → RIPE (Rifampicin, Isoniazid, Pyrazinamide, Ethambutol)"', expansion: ['Ghon focus = primary', 'Reactivation with HIV/immunosuppression'] },
    { hook: 'Leprosy: "Tuberculoid = Tough immunity (paucibacillary); Lepromatous = Lots of bacilli (weak immunity)"', expansion: ['MDT: dapsone + rifampicin ± clofazimine', 'M. leprae unculturable'] },
  ],

  traps: [
    {
      questionCategory: 'Latent vs active tuberculosis',
      wrongInstinct: 'A positive tuberculin skin test or IGRA means the patient has active, infectious tuberculosis',
      rightAnswer: 'A positive tuberculin/IGRA indicates TB EXPOSURE/INFECTION but usually LATENT TB — contained, ASYMPTOMATIC and NON-infectious — not active disease; active TB requires clinical/radiological features and microbiological confirmation (AFB smear/culture/NAAT). Latent TB is treated to prevent reactivation, whereas active TB needs full multidrug (RIPE) therapy and infection control',
      why: 'Equating a positive immune test with active disease over-diagnoses infectious TB and misdirects therapy; distinguishing latent (immune memory) from active (microbiologically confirmed) infection determines both treatment and isolation.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The characteristic tissue reaction to Mycobacterium tuberculosis is:',
      options: [
        { id: 'a', text: 'A caseating granuloma with epithelioid macrophages and Langhans giant cells' },
        { id: 'b', text: 'A neutrophilic abscess' },
        { id: 'c', text: 'Non-inflammatory necrosis' },
        { id: 'd', text: 'Eosinophilic infiltration' },
      ],
      answerId: 'a',
      explanation: 'TB elicits a Th1/CD4-driven cell-mediated response forming caseating granulomas (central necrosis surrounded by epithelioid macrophages and Langhans giant cells); the mycolic-acid wall makes the organism acid-fast and slow-growing.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Leprosy caused by M. leprae with strong cell-mediated immunity, few hypopigmented anaesthetic skin patches and a low bacillary load is which form?',
      options: [
        { id: 'a', text: 'Tuberculoid (paucibacillary)' },
        { id: 'b', text: 'Lepromatous (multibacillary)' },
        { id: 'c', text: 'Miliary' },
        { id: 'd', text: 'Latent' },
      ],
      answerId: 'a',
      explanation: 'Tuberculoid leprosy reflects a strong Th1 cell-mediated response: few, well-defined hypopigmented anaesthetic patches with thickened nerves and a low (pauci-) bacillary load. Lepromatous leprosy reflects weak immunity with numerous lesions and a high bacillary load.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default mycobacteriumTuberculosisLeprae;
