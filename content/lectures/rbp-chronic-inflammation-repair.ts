import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpChronicInflammationRepair: Lecture = {
  id: 'rbp-chronic-inflammation-repair',
  title: 'Chronic Inflammation, Granulomas & Repair',
  system: 'pathology',
  source: 'Ch 2 — Inflammation and Repair',
  updated: '2026-09-16',
  tags: [
    { kind: 'system', label: 'Pathology' },
    { kind: 'lecture', label: 'Ch 2 Inflammation and Repair' },
    { kind: 'mechanism', label: 'Injury, inflammation and repair running in the same field at the same time' },
    { kind: 'exam', label: 'A granuloma is an achievement of CD4 and IFN-gamma — the immunosuppressed may not manage one' },
  ],

  highYield: [
    "**Chronic inflammation is defined by what coexists, not by how long it has lasted.** The diagnostic triad on a slide is simultaneous ACTIVE INJURY, ACTIVE INFLAMMATION and ACTIVE REPAIR in the same field: a mononuclear infiltrate of macrophages, lymphocytes and plasma cells, plus destruction of parenchyma, plus angiogenesis and fibrosis. A lesion three days old that shows that triad is chronic; a neutrophil-rich osteomyelitis grinding on for three months is not, and bone and lung are the classic tissues where an acute pattern persists for months. Three things produce it: persistent infection by an organism the macrophage cannot digest (mycobacteria, Treponema, fungi), immune-mediated injury with a self or environmental antigen that never leaves (rheumatoid arthritis, Hashimoto thyroiditis, asthma), and prolonged exposure to indigestible material (silica, and the lipid of the atherosclerotic plaque).",
    "**The macrophage is the central cell, and the shift from neutrophil to mononuclear infiltrate is explained by lifespan, not by a change of signal.** A neutrophil in tissue undergoes apoptosis within about 24 to 48 hours; blood monocytes recruited by the same adhesion cascade arrive within 24 to 48 hours, differentiate into macrophages and then survive for weeks to months, and can proliferate locally. So the infiltrate looks neutrophilic early and mononuclear later for a purely kinetic reason. Tissue-resident populations — Kupffer cells, microglia, alveolar macrophages, osteoclasts — are largely yolk-sac derived and self-renewing, which is why they are present before any recruitment happens at all.",
    "**Classical and alternative macrophage activation are two opposite programmes, and the T cell chooses which one runs.** Classical (M1) activation by IFN-gamma from Th1 cells and NK cells together with TLR ligands produces reactive oxygen species, nitric oxide from iNOS, and IL-1, IL-12, IL-23 and TNF — the killing and inflaming programme. Alternative (M2) activation by IL-4 and IL-13 from Th2 cells produces TGF-beta, IL-10 and arginase — the repairing and fibrosing programme. The clinical proof is leprosy: the same Mycobacterium leprae gives tuberculoid disease with few bacilli, well-formed granulomas and nerve destruction when the response is Th1, and lepromatous disease with skin teeming with organisms and no granulomas when it is Th2. Same organism, opposite disease, decided by a cytokine. The T-cell side of this is in [[ghp-cell-mediated-immunity-allergy]].",
    "**Chronicity is maintained by a reciprocal loop, and TNF is its amplifier.** The macrophage presents antigen and secretes IL-12, which drives naive CD4 cells to Th1; Th1 cells secrete IFN-gamma, which classically activates more macrophages, which present more antigen. The loop is self-sustaining and needs no new stimulus once running, which is why removing the antigen late in the disease may not switch it off. B cells and plasma cells join in and, with sustained antigen drive, the tissue can build ectopic germinal centres of its own. TNF holds the structure together — which is precisely why blocking TNF does not merely reduce symptoms but dismantles containment.",
    "**Granuloma formation REQUIRES a competent CD4 and IFN-gamma axis, so granulomas may be entirely ABSENT in the immunosuppressed — and that is the trap with real consequences.** Epithelioid transformation is an IFN-gamma-driven event; without it there are no epithelioid cells, no Langhans giant cells and no organised nodule. In advanced HIV with a CD4 count below about 100, in patients on anti-TNF biologics or high-dose glucocorticoids, and in infants with miliary disease, the biopsy can instead show sheets of foamy macrophages crowded with acid-fast bacilli and no granuloma at all. The rule to carry: in an immunosuppressed patient, absent granulomas RAISE the probability of mycobacterial or fungal infection rather than lowering it, because failure to build one is itself the finding. The foreign-body granuloma is the exception that confirms the mechanism — it needs no T-cell sensitisation and forms even in these patients. More morphology in [[chronic-inflammation-granuloma]].",
    "**Caseating versus non-caseating is the practical split, and it changes what you do next.** Caseating means central, structureless, eosinophilic, cheesy necrosis and in practice means tuberculosis until stains and culture say otherwise — with endemic fungi such as Histoplasma and Coccidioides as the alternatives. Ziehl-Neelsen or auramine, culture and a nucleic acid test are mandatory, and a negative smear excludes nothing because tissue smear sensitivity is poor. Non-caseating is a longer differential and sarcoidosis is only one entry in it: chronic beryllium disease is histologically identical, and Crohn disease, foreign-body reaction, cat-scratch disease (stellate and suppurative), primary biliary cholangitis and drug reactions all belong. Sarcoidosis also brings its own mechanism to recognise — epithelioid macrophages express 1-alpha-hydroxylase and make calcitriol outside PTH control, producing hypercalcaemia and hypercalciuria. See [[add-sarcoidosis-clinical-presentation-and-diagnosis]].",
  ],

  mechanism: {
    title: 'A stimulus that will not clear → the macrophage-T cell loop → a granuloma, or destruction with fibrosis',
    steps: [
      {
        id: 's1',
        label: 'The stimulus cannot be cleared: an organism with a waxy wall, a self antigen, or crystalline material that kills every macrophage that eats it',
        detail: 'Silica and urate are the pure examples — the particle is released intact when the macrophage dies and is immediately taken up by the next one, so the stimulus is literally perpetual.',
        emphasis: 'key',
      },
      {
        id: 's2',
        label: 'Monocytes are recruited by CCL2 through the same rolling and adhesion cascade, and become macrophages that live for months',
        detail: 'Lifespan is the whole reason the infiltrate turns mononuclear; nothing about the chemotactic signal has changed.',
      },
      {
        id: 's3',
        label: 'The macrophage presents antigen and secretes IL-12, driving naive CD4 cells down the Th1 route',
        detail: 'This is the decision point of the whole chapter. IL-12 buys Th1 and IFN-gamma; IL-4 would buy Th2, M2 macrophages and fibrosis instead.',
        emphasis: 'key',
      },
      {
        id: 's4',
        label: 'Th1 IFN-gamma classically activates the macrophage, which undergoes epithelioid transformation',
        detail: 'Epithelioid means secreting, not eating: abundant pink cytoplasm, indistinct cell borders, a flattened vesicular nucleus, and poor phagocytic capacity. The morphology is a change of job description.',
        emphasis: 'key',
      },
      {
        id: 's5',
        label: 'Epithelioid cells fuse into multinucleate giant cells and a collar of lymphocytes with fibroblasts walls the focus off — a granuloma',
        detail: 'Langhans giant cells carry their nuclei in a horseshoe at the periphery; foreign-body giant cells scatter them haphazardly over the ingested material.',
        emphasis: 'key',
      },
      {
        id: 's6',
        label: 'If containment fails or the stimulus persists, proteases, reactive oxygen species and TGF-beta destroy parenchyma while collagen is laid down around it',
        detail: 'Injury, inflammation and repair now occupy the same field simultaneously, which is the definition of chronic inflammation and the reason the end point is organ fibrosis.',
        emphasis: 'danger',
      },
    ],
    branches: [
      {
        fromId: 's3',
        title: 'When the CD4 and IFN-gamma arm is missing',
        steps: [
          {
            id: 'b1',
            label: 'Advanced HIV, anti-TNF therapy, high-dose glucocorticoids or infancy: no IL-12 to Th1 to IFN-gamma signal',
            detail: 'The macrophage is never classically activated, so it never becomes epithelioid.',
            emphasis: 'key',
          },
          {
            id: 'b2',
            label: 'The biopsy shows sheets of foamy macrophages stuffed with organisms and no organised granuloma at all',
            detail: 'This anergic pattern carries a far higher organism burden than a granulomatous one, because containment never happened.',
            emphasis: 'danger',
          },
          {
            id: 'b3',
            label: 'Rule: in the immunosuppressed, absent granulomas raise rather than lower the probability of mycobacterial or fungal infection',
            detail: 'Stain and culture regardless of the architecture. Foreign-body granulomas still form, because they need no T-cell help.',
            emphasis: 'key',
          },
        ],
      },
    ],
  },

  examFindings: [
    {
      sign: 'Nodular aggregates of epithelioid macrophages with pale abundant cytoplasm and indistinct borders, ringed by lymphocytes, containing Langhans giant cells',
      mechanism: 'The epithelioid change is IFN-gamma driven and the peripheral horseshoe of nuclei marks fusion of activated macrophages rather than ingestion of a particle',
      significance: 'key',
    },
    {
      sign: 'Central soft, white, cheesy, structureless eosinophilic granular debris within the granuloma',
      mechanism: 'Caseous necrosis, produced when mycobacterial lipid resists degradation; near-diagnostic of tuberculosis in the right setting and an absolute indication to stain and culture',
      significance: 'key',
    },
    {
      sign: 'Foreign-body giant cells with nuclei scattered haphazardly around a refractile suture, talc or a hair shaft',
      mechanism: 'A foreign-body granuloma needs no antigen-specific T-cell response, so it forms normally even in a profoundly immunosuppressed patient — the exception that proves the CD4 rule',
      significance: 'key',
    },
    {
      sign: 'Bilateral hilar lymphadenopathy with non-caseating granulomas and a corrected calcium of 2.9 mmol/L',
      mechanism: 'Epithelioid macrophages express 1-alpha-hydroxylase and generate calcitriol independently of PTH, so hypercalcaemia tracks granuloma burden rather than parathyroid activity',
      significance: 'key',
    },
    {
      sign: 'Sheets of foamy macrophages packed with acid-fast bacilli and no granuloma, in a patient with a CD4 count of 40',
      mechanism: 'The anergic end of the spectrum: without IFN-gamma there is no epithelioid transformation and therefore no containment, so organism burden is highest where architecture is poorest',
      significance: 'key',
    },
    {
      sign: 'Lymphoid follicles with germinal centres inside a synovium, thyroid or salivary gland',
      mechanism: 'Tertiary lymphoid organogenesis — sustained antigen drive has built lymph-node architecture inside the target organ, as in rheumatoid arthritis and Hashimoto thyroiditis',
      significance: 'supportive',
    },
  ],

  investigations: [
    {
      clue: 'Ziehl-Neelsen or auramine-rhodamine staining plus culture and nucleic acid amplification on every caseating granuloma',
      meaning: 'Morphology generates a hypothesis and the organism makes the diagnosis. Acid-fast smear sensitivity on tissue is low, so a negative stain never excludes tuberculosis and culture or PCR must follow',
    },
    {
      clue: 'An interferon-gamma release assay or tuberculin test before starting an anti-TNF biologic',
      meaning: 'TNF maintains granuloma integrity, so blocking it reactivates latent tuberculosis — characteristically early in treatment and disproportionately extrapulmonary or disseminated. Latent infection is screened for and treated before the drug is started, not after',
    },
    {
      clue: 'A beryllium lymphocyte proliferation test in a machinist or aerospace worker with non-caseating granulomas',
      meaning: 'Chronic beryllium disease is histologically indistinguishable from sarcoidosis, so the occupational history plus a demonstration of beryllium-specific T-cell sensitisation is the only thing that separates them',
    },
    {
      clue: 'Serum ACE with calcium and 24-hour urinary calcium in suspected sarcoidosis',
      meaning: 'ACE is secreted by epithelioid macrophages so it indexes granuloma burden, but it is neither sensitive nor specific enough to diagnose. The calcium is what changes management, and hypercalciuria appears before hypercalcaemia',
    },
    {
      clue: 'Polarised light examination of a granuloma',
      meaning: 'Birefringent material identifies a foreign-body reaction and stops the infectious workup. Note that not all foreign material is birefringent, so a negative result narrows nothing',
    },
    {
      clue: 'CD4 count and HIV serology when granulomas are poorly formed or absent despite a compatible clinical picture',
      meaning: 'Granuloma quality is a read-out of T-cell function; a disorganised or absent granuloma in the right setting is evidence of immunosuppression rather than evidence against infection',
    },
  ],

  treatment: [
    {
      logic: 'Remove the stimulus, or the loop supplies its own fuel',
      detail: "Chronic inflammation only has one durable cure, and it is removal of what is driving it — the organism in tuberculosis, the antigen in hypersensitivity pneumonitis, the particle in a foreign-body reaction, the lipid in an atherosclerotic plaque. Everything else modulates. The reason this matters more than it sounds is that **the macrophage to Th1 to IFN-gamma loop is self-sustaining**, so a lesion left to run long enough continues after the trigger is withdrawn and the repair arm has already begun replacing parenchyma with collagen. That is the therapeutic logic behind treating early: in an established lesion, injury, inflammation and repair are all active at once, and every week of delay converts more functional tissue into scar you cannot recover. Where the antigen genuinely cannot be removed — autoimmunity — the targets become the loop itself, which is why the drug classes are corticosteroids (blocking NF-kB and cytokine transcription), methotrexate, and biologics against TNF, IL-6 and IL-17. The repair arm that fills in behind is developed in [[rbp-repair-angiogenesis-fibrosis]].",
    },
    {
      logic: 'Treat the granuloma as a living structure that TNF is holding together',
      detail: "A granuloma is not an inert scar; it is an actively maintained wall around organisms that are still alive. **TNF is required to keep it assembled**, so within months of starting infliximab, adalimumab or etanercept, latent tuberculosis can reactivate and the reactivation is disproportionately extrapulmonary, disseminated and smear-negative — three features that make it easy to miss. The practical sequence is fixed: screen for latent infection with an interferon-gamma release assay and a chest film BEFORE the first dose, treat latent infection first, and then keep a low threshold for atypical presentations afterwards. The same logic explains a second clinical rule — **high-dose glucocorticoids and advanced HIV both degrade granuloma formation**, so in those patients a biopsy without granulomas must be stained and cultured rather than reported as reassuring. Sarcoidosis inverts the problem: the granulomas are the disease, and the indications to treat are organ threat (eye, heart, central nervous system, progressive lung) or hypercalcaemia, not the presence of granulomas by itself. Compare the acute response that precedes all of this in [[rbp-acute-inflammation-mediators]].",
    },
  ],

  mnemonics: [
    {
      hook: 'Th1 contains, Th2 disseminates',
      expansion: [
        'IL-12 from the macrophage buys Th1, IFN-gamma and classical (M1) activation: reactive oxygen species, nitric oxide, IL-1 and TNF — killing and granuloma building',
        'IL-4 and IL-13 buy Th2 and alternative (M2) activation: TGF-beta, IL-10 and arginase — repair, fibrosis and immunosuppression',
        'Leprosy proves it: tuberculoid disease has few bacilli, tight granulomas and nerve damage; lepromatous disease has skin full of bacilli and no granulomas',
        'Same organism, opposite disease, and the deciding variable is a cytokine rather than the microbe',
      ],
    },
    {
      hook: 'Granuloma is a wall of macrophages, granulation tissue is a bed of capillaries',
      expansion: [
        'A granuloma is a nodular aggregate of epithelioid macrophages with a lymphocyte collar — a containment structure built by the immune system',
        'Granulation tissue is proliferating fibroblasts, new capillaries and loose oedematous matrix — a repair structure built to fill a defect',
        'Only one of them is soft, beefy red and bleeds when you touch it, and it is the granulation tissue',
        'The shared root is an accident of naming; nothing about the two lesions is the same',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'A biopsy with no granulomas in an immunosuppressed patient',
      wrongInstinct: 'No granulomas were seen, so a granulomatous infection such as tuberculosis has effectively been excluded',
      rightAnswer: 'Building a granuloma is an IFN-gamma-dependent achievement. With a CD4 count under about 100, on anti-TNF therapy or on high-dose glucocorticoids, the patient may be unable to make one, and the tissue is then packed with organisms instead',
      why: 'Rule: in the immunosuppressed, absent granulomas raise rather than lower the probability of mycobacterial or fungal infection — stain and culture regardless of the architecture.',
    },
    {
      questionCategory: 'A non-caseating granuloma in a hilar lymph node',
      wrongInstinct: 'Non-caseating granulomas with bilateral hilar lymphadenopathy are diagnostic of sarcoidosis',
      rightAnswer: 'Sarcoidosis remains a diagnosis of exclusion. Chronic beryllium disease is histologically identical, and mycobacteria, fungi, Crohn disease, drug reactions and foreign material all produce non-caseating granulomas',
      why: 'Rule: take the occupational history and stain for organisms first — a beryllium lymphocyte proliferation test, not the histology, is what separates chronic beryllium disease from sarcoid.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A man with untreated HIV and a CD4 count of 35 has fever, weight loss and diffuse pulmonary infiltrates. Transbronchial biopsy shows sheets of foamy macrophages crowded with acid-fast bacilli, with no epithelioid cells, giant cells or organised granulomas. Which statement best explains the histology?',
      options: [
        { id: 'a', text: 'The absence of granulomas indicates that the acid-fast organisms are not pathogenic in this patient' },
        { id: 'b', text: 'Loss of CD4 T cells removes the IL-12 to IFN-gamma signal required for epithelioid transformation, so no granuloma can be assembled' },
        { id: 'c', text: 'Granulomas are absent only in patients receiving anti-TNF therapy' },
        { id: 'd', text: 'A neutrophil NADPH oxidase defect has prevented macrophage activation' },
      ],
      answerId: 'b',
      explanation: 'Granuloma formation is not a passive walling-off; it is an active, IFN-gamma-dependent conversion of macrophages into epithelioid cells that then fuse and are surrounded by lymphocytes. With CD4 counts this low there is no Th1 arm to supply IFN-gamma, so the macrophage is never classically activated and never becomes epithelioid — and because containment never happens, the organism burden is far HIGHER than in a granulomatous lesion, which is why the bacilli are so easily seen. This is the practical rule: absent granulomas in an immunosuppressed patient argue for mycobacterial or fungal infection, not against it. Anti-TNF therapy (option c) is one cause of impaired granuloma maintenance but far from the only one, and option d describes chronic granulomatous disease, a neutrophil killing defect with an unrelated phenotype.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Two patients are infected with the same organism, Mycobacterium leprae. One has a few hypopigmented anaesthetic plaques, well-formed granulomas on biopsy, very few visible bacilli and a thickened peripheral nerve. The other has diffuse skin thickening, no granulomas, and skin smears teeming with bacilli. Which variable best accounts for the difference?',
      options: [
        { id: 'a', text: 'Differences in virulence genes between the two bacterial isolates' },
        { id: 'b', text: 'Whether the CD4 response is Th1 with IFN-gamma and classical macrophage activation, or Th2 with IL-4 and IL-13 and alternative activation' },
        { id: 'c', text: 'The circulating neutrophil count at the time of infection' },
        { id: 'd', text: 'Serum complement C3 concentration' },
      ],
      answerId: 'b',
      explanation: 'The leprosy spectrum is the cleanest demonstration in pathology that the host cytokine environment, not the organism, decides the disease. A Th1 response supplies IFN-gamma, classically activates macrophages, produces epithelioid granulomas and controls bacillary load — giving tuberculoid disease, in which the tissue damage is immune-mediated and hits nerves. A Th2 response supplies IL-4 and IL-13, alternatively activates macrophages toward repair and immunosuppression, builds no granulomas, and permits uncontrolled proliferation — giving lepromatous disease. Since both patients carry the same organism, option a is excluded by the stem itself, and neither neutrophils nor complement determines granulomatous containment.',
      tests: 'disease',
    },
    {
      id: 'q3',
      stem: 'A 44-year-old who grinds metal alloys in an aerospace workshop has progressive dyspnoea, bilateral hilar lymphadenopathy and non-caseating granulomas on transbronchial biopsy. Stains and cultures for mycobacteria and fungi are negative and no foreign material is seen under polarised light. Which investigation best distinguishes the leading alternative from sarcoidosis?',
      options: [
        { id: 'a', text: 'Serum angiotensin-converting enzyme concentration' },
        { id: 'b', text: 'Repeat biopsy looking for caseation' },
        { id: 'c', text: 'Beryllium lymphocyte proliferation test' },
        { id: 'd', text: 'Serum corrected calcium' },
      ],
      answerId: 'c',
      explanation: 'Chronic beryllium disease is histologically indistinguishable from sarcoidosis — the same non-caseating granulomas, the same hilar nodes, and it can raise ACE and cause hypercalcaemia by the same 1-alpha-hydroxylase mechanism, so options a and d cannot separate them. Repeating the biopsy (option b) only repeats the same picture, since neither condition caseates. What does separate them is demonstrating beryllium-specific T-cell sensitisation in blood or lavage, interpreted alongside a documented exposure. The wider lesson is that sarcoidosis is a diagnosis of exclusion: the differential for a non-caseating granuloma also includes mycobacteria, fungi, Crohn disease, drug reactions and foreign material.',
      tests: 'investigation',
    },
  ],
};

export default rbpChronicInflammationRepair;
