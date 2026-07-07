import type { Lecture } from '../../lib/types';

export const chronicInflammationGranuloma: Lecture = {
  id: 'chronic-inflammation-granuloma',
  title: 'Chronic & Granulomatous Inflammation',
  system: 'pathology',
  source: 'L5 — Inflammation & Repair',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pathology' },
    { kind: 'lecture', label: 'L5 Chronic inflammation' },
    { kind: 'mechanism', label: 'Macrophages; granuloma' },
    { kind: 'exam', label: 'Caseating vs non-caseating; systemic effects' },
  ],

  highYield: [
    'CHRONIC inflammation is inflammation of prolonged duration (weeks–years) in which active inflammation, tissue INJURY and REPAIR proceed SIMULTANEOUSLY. Its infiltrate is MONONUCLEAR — MACROPHAGES (the dominant, central cell), LYMPHOCYTES and PLASMA cells — rather than neutrophils, and it typically shows tissue destruction with concurrent ANGIOGENESIS and FIBROSIS (scarring).',
    'Causes: PERSISTENT INFECTIONS (especially organisms resisting killing — mycobacteria/TB, fungi, some parasites), prolonged exposure to toxic agents (endogenous, e.g. cholesterol/atherosclerosis; exogenous, e.g. silica), and AUTOIMMUNE/hypersensitivity diseases (rheumatoid arthritis, IBD). It may follow acute inflammation or arise insidiously. The MACROPHAGE — activated classically (M1, microbicidal) or alternatively (M2, repair/fibrosis) — orchestrates both destruction and healing.',
    'GRANULOMATOUS inflammation is a distinctive pattern of chronic inflammation: focal collections of activated EPITHELIOID MACROPHAGES, often with multinucleate GIANT CELLS (e.g. Langhans), surrounded by lymphocytes. It walls off agents that are hard to eradicate. CASEATING granulomas (central caseous necrosis) = TUBERCULOSIS (and some fungi); NON-CASEATING granulomas = SARCOIDOSIS, Crohn disease, foreign-body reactions, leprosy, cat-scratch. Special stains/culture identify infectious causes.',
    'SYSTEMIC EFFECTS of inflammation ("acute-phase response"): FEVER (pyrogens IL-1, IL-6, TNF, prostaglandin E2 raise the hypothalamic set-point), LEUKOCYTOSIS (neutrophilia in bacterial, lymphocytosis in viral, EOSINOPHILIA in parasitic/allergic), raised acute-phase proteins (CRP, fibrinogen → high ESR; hepcidin → anaemia of chronic disease), and, when severe, the systemic inflammatory response/SEPSIS with hypotension and DIC.',
    '**The take-home: CHRONIC inflammation = prolonged, MONONUCLEAR (MACROPHAGE-led, + lymphocytes/plasma cells), with simultaneous injury, angiogenesis and FIBROSIS; causes = persistent infection, toxic exposure, autoimmunity. GRANULOMA = epithelioid macrophages + giant cells; CASEATING (TB) vs NON-CASEATING (sarcoid/Crohn/foreign body). Systemic effects: FEVER (IL-1/IL-6/TNF), leukocytosis, acute-phase proteins (CRP/ESR).** Acute inflammation precedes it ([[acute-inflammation]]); repair/scarring is [[tissue-repair-wound-healing]].',
  ],

  mechanism: {
    title: 'Chronic inflammation = prolonged, macrophage-led mononuclear infiltrate with simultaneous injury + fibrosis; causes persistent infection/toxin/autoimmunity; granuloma (epithelioid + giant cells) caseating (TB) vs non-caseating (sarcoid/Crohn); systemic effects (fever/leukocytosis/CRP)',
    steps: [
      { id: 's1', label: 'Chronic = prolonged; injury + repair simultaneously; MONONUCLEAR infiltrate', emphasis: 'key' },
      { id: 's2', label: 'Macrophages (central) + lymphocytes + plasma cells; angiogenesis + fibrosis', emphasis: 'key' },
      { id: 's3', label: 'Causes: persistent infection (TB), toxic exposure, autoimmune/hypersensitivity', emphasis: 'key' },
      { id: 's4', label: 'Granuloma = epithelioid macrophages + giant cells; CASEATING (TB) vs NON-CASEATING (sarcoid/Crohn)', emphasis: 'key' },
      { id: 's5', label: 'Systemic: FEVER (IL-1/IL-6/TNF/PGE2), leukocytosis, acute-phase proteins (CRP/ESR)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'A mononuclear infiltrate of macrophages, lymphocytes and plasma cells with fibrosis', mechanism: 'Chronic inflammation', significance: 'key' },
    { sign: 'Epithelioid macrophages with Langhans giant cells and central caseous necrosis', mechanism: 'Caseating granuloma (tuberculosis)', significance: 'key' },
    { sign: 'Non-caseating granulomas in lung/lymph nodes', mechanism: 'Sarcoidosis (or Crohn/foreign body)', significance: 'key' },
    { sign: 'Fever with a raised CRP and ESR', mechanism: 'Acute-phase response (IL-1/IL-6/TNF)', significance: 'supportive' },
    { sign: 'Eosinophilia in a chronic parasitic or allergic condition', mechanism: 'Systemic leukocyte response', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The dominant cell of chronic inflammation', meaning: 'Macrophage' },
    { clue: 'The granuloma with central caseous necrosis', meaning: 'Caseating (tuberculosis)' },
    { clue: 'A classic cause of non-caseating granulomas', meaning: 'Sarcoidosis (also Crohn, foreign body)' },
    { clue: 'The cytokines causing fever', meaning: 'IL-1, IL-6, TNF (→ PGE2)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Chronic inflammation, driven by macrophages (with lymphocytes and plasma cells), simultaneously destroys tissue and lays down scar (fibrosis) — the basis of damage in persistent infections, autoimmune disease and atherosclerosis. Recognising granulomatous inflammation and whether it caseates (tuberculosis vs sarcoidosis/Crohn/foreign body) directs the search for a cause with special stains and culture. The systemic acute-phase response (fever, leukocytosis, CRP/ESR) provides clinical markers of ongoing inflammation and, when severe, warns of sepsis. Acute inflammation is [[acute-inflammation]]; repair and scarring are [[tissue-repair-wound-healing]].' },
  ],

  mnemonics: [
    { hook: '"Chronic = Macrophages + Lymphocytes + Plasma cells (mononuclear) + fibrosis"', expansion: ['Injury + repair together', 'Causes: infection/toxin/autoimmune'] },
    { hook: '"Caseating = TB; Non-caseating = Sarcoid/Crohn/foreign body"', expansion: ['Epithelioid + giant cells', 'Fever = IL-1/IL-6/TNF'] },
  ],

  traps: [
    {
      questionCategory: 'Caseating vs non-caseating granulomas',
      wrongInstinct: 'A granuloma is a granuloma — whether it caseates does not change the differential',
      rightAnswer: 'Whether a granuloma CASEATES is a crucial discriminator: CASEATING granulomas (central caseous necrosis) point strongly to TUBERCULOSIS (and some fungi), mandating stains/culture for organisms, whereas NON-CASEATING granulomas suggest SARCOIDOSIS, Crohn disease, foreign-body reaction, leprosy or cat-scratch disease — so the presence or absence of caseous necrosis reshapes the differential and the work-up',
      why: 'Caseation is the key morphologic clue separating infectious (TB) from non-infectious (sarcoid/Crohn) granulomatous disease; overlooking it can miss tuberculosis or lead to inappropriate immunosuppression.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The predominant cell type orchestrating chronic inflammation is the:',
      options: [
        { id: 'a', text: 'Neutrophil' },
        { id: 'b', text: 'Macrophage' },
        { id: 'c', text: 'Eosinophil' },
        { id: 'd', text: 'Mast cell' },
      ],
      answerId: 'b',
      explanation: 'Chronic inflammation features a mononuclear infiltrate in which the macrophage is central (with lymphocytes and plasma cells), driving both tissue destruction and repair (angiogenesis, fibrosis); neutrophils dominate acute inflammation instead.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A biopsy shows epithelioid macrophages and Langhans giant cells around central caseous necrosis. This caseating granuloma most suggests:',
      options: [
        { id: 'a', text: 'Sarcoidosis' },
        { id: 'b', text: 'Tuberculosis' },
        { id: 'c', text: 'A foreign-body reaction' },
        { id: 'd', text: 'Crohn disease' },
      ],
      answerId: 'b',
      explanation: 'Caseating granulomas (with central caseous necrosis) are characteristic of tuberculosis (and some fungal infections), prompting acid-fast stains and culture. Sarcoidosis, Crohn disease and foreign-body reactions produce non-caseating granulomas.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default chronicInflammationGranuloma;
