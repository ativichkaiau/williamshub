import type { Lecture } from '../../lib/types';

export const retrovirusesHiv: Lecture = {
  id: 'retroviruses-hiv',
  title: 'Retroviruses & HIV',
  system: 'microbiology',
  source: 'L4 — Retroviruses',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Micro' },
    { kind: 'lecture', label: 'L4 Retroviruses' },
    { kind: 'mechanism', label: 'Reverse transcription & integration' },
    { kind: 'exam', label: 'HIV cycle; CD4; HTLV' },
  ],

  highYield: [
    'RETROVIRUSES (enveloped, +ssRNA-RT) carry TWO RNA copies and the enzyme REVERSE TRANSCRIPTASE, which makes DNA from RNA → the DNA is INTEGRATED into the host genome by INTEGRASE as a PROVIRUS (lifelong infection). Error-prone reverse transcription → high mutation rate → antigenic variation and drug resistance (hence combination therapy).',
    'HIV: the envelope GP120 binds CD4 (+ a co-receptor CCR5/CXCR4) → infects and depletes CD4⁺ T-HELPER cells → progressive IMMUNODEFICIENCY. Clinical course: acute seroconversion (flu-like) → long clinical LATENCY → AIDS when CD4 falls (<200) with OPPORTUNISTIC infections (PJP, TB, cryptococcus, CMV, toxoplasma) and AIDS-defining malignancies (Kaposi sarcoma/HHV-8, lymphoma). Monitor with CD4 count and viral load.',
    'DIAGNOSIS: 4th-generation antibody/antigen (p24) immunoassay, confirmed by viral load/Western blot; window period before antibodies appear. TREATMENT = combination antiretroviral therapy (≥3 drugs, ≥2 classes — reverse-transcriptase, protease, integrase inhibitors) to suppress viral load; screen HLA-B*57:01 before abacavir. ART renders the virus untransmittable (U=U) and is used as PrEP/PEP.',
    'HTLV-1 (human T-lymphotropic virus) is an oncogenic retrovirus causing ADULT T-CELL LEUKAEMIA/LYMPHOMA and tropical spastic paraparesis (HAM/TSP). Retroviral integration and oncogenes underpin some virus-associated cancers. Transmission of HIV/HTLV: sexual, blood/needles, and vertical (mother-to-child, reducible with ART).',
    '**The take-home: retroviruses = reverse transcriptase → integrated provirus (lifelong); HIV gp120→CD4 (+CCR5) → CD4 T-cell depletion → AIDS (opportunistic infections/malignancy when CD4<200); diagnose by antigen/antibody + viral load; treat with combination ART (U=U/PrEP/PEP); HTLV-1 → adult T-cell leukaemia.** Retroviruses are the ssRNA-RT class of [[virology-principles-classification]]; HIV antiretroviral pharmacology is BCP ([[hiv-antiretroviral-therapy]]); opportunistic fungi/mycobacteria recur in the mycology/bacteriology lectures.',
  ],

  mechanism: {
    title: 'Reverse transcriptase → integrated provirus; HIV gp120→CD4(+CCR5) → CD4 depletion → AIDS; combination ART; HTLV→leukaemia',
    steps: [
      { id: 's1', label: 'Retrovirus: reverse transcriptase makes DNA → integrase inserts provirus (lifelong)', emphasis: 'key' },
      { id: 's2', label: 'HIV gp120 binds CD4 (+ CCR5/CXCR4) → depletes CD4⁺ T-helper cells', emphasis: 'key' },
      { id: 's3', label: 'Course: acute → latency → AIDS (CD4<200): opportunistic infections + malignancy', emphasis: 'danger' },
      { id: 's4', label: 'Diagnose: 4th-gen Ab/Ag (p24) + viral load/CD4; combination ART (U=U/PrEP/PEP)', emphasis: 'key' },
      { id: 's5', label: 'HTLV-1 = adult T-cell leukaemia/lymphoma + HAM/TSP', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Progressive CD4⁺ T-cell depletion and opportunistic infections', mechanism: 'HIV (gp120→CD4)', significance: 'key' },
    { sign: 'Pneumocystis pneumonia / cryptococcal meningitis with CD4 <200', mechanism: 'AIDS-defining opportunistic infection', significance: 'key' },
    { sign: 'Kaposi sarcoma in an untreated HIV patient', mechanism: 'HHV-8, AIDS-defining malignancy', significance: 'key' },
    { sign: 'Lifelong infection despite immune response', mechanism: 'Integrated provirus (reverse transcriptase/integrase)', significance: 'key' },
    { sign: 'Adult T-cell leukaemia/lymphoma', mechanism: 'HTLV-1 (oncogenic retrovirus)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The enzyme defining retroviruses', meaning: 'Reverse transcriptase' },
    { clue: 'The cell HIV infects via gp120', meaning: 'CD4⁺ T-helper cells (co-receptor CCR5/CXCR4)' },
    { clue: 'The CD4 threshold defining AIDS-level immunodeficiency', meaning: '<200 cells/µL (with opportunistic infection)' },
    { clue: 'The retrovirus causing adult T-cell leukaemia', meaning: 'HTLV-1' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Reverse transcription and integration make retroviral infection lifelong and mutation-prone, so HIV is treated with combination ART (≥3 drugs/≥2 classes) to suppress viral load, prevent resistance and restore CD4 counts — with monitoring, HLA-B*57:01 screening before abacavir, and prevention (U=U, PrEP/PEP, preventing vertical transmission). The CD4 count predicts opportunistic infections (PJP, TB, cryptococcus). Antiretroviral drug detail is BCP ([[hiv-antiretroviral-therapy]]); the ssRNA-RT class is in [[virology-principles-classification]].' },
  ],

  mnemonics: [
    { hook: '"Retrovirus = Reverse transcriptase → integrated provirus (lifelong)"', expansion: ['HIV gp120 → CD4 (+CCR5)', 'CD4<200 = AIDS'] },
    { hook: '"HIV = combination ART (U=U/PrEP/PEP); HTLV-1 = adult T-cell leukaemia"', expansion: ['Screen HLA-B*57:01 (abacavir)', 'Opportunistic: PJP/TB/crypto/CMV'] },
  ],

  traps: [
    {
      questionCategory: 'Why HIV persists lifelong',
      wrongInstinct: 'A strong immune response or effective drugs should be able to clear HIV completely',
      rightAnswer: 'HIV reverse-transcribes its RNA into DNA that INTEGRATES into the host genome as a latent PROVIRUS in long-lived cells — a reservoir that current therapy cannot eradicate — so ART SUPPRESSES but does not CURE the infection; stopping treatment allows rebound, which is why lifelong adherence is required',
      why: 'The integrated proviral reservoir explains why HIV is a lifelong infection controlled (not cured) by continuous ART — a fundamental point for counselling and adherence.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'HIV establishes lifelong infection because reverse transcriptase and integrase allow it to:',
      options: [
        { id: 'a', text: 'Remain entirely extracellular' },
        { id: 'b', text: 'Convert its RNA to DNA and integrate a provirus into the host genome' },
        { id: 'c', text: 'Avoid infecting CD4 cells' },
        { id: 'd', text: 'Replicate only in the cytoplasm without a DNA stage' },
      ],
      answerId: 'b',
      explanation: 'Retroviruses use reverse transcriptase to make DNA from their RNA genome, which integrase inserts into host DNA as a provirus. This integrated, latent reservoir persists for life and cannot be eradicated by current therapy, so ART suppresses but does not cure HIV.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A CD4 count below 200 cells/µL in an HIV-positive patient is associated with:',
      options: [
        { id: 'a', text: 'Complete immunity to infection' },
        { id: 'b', text: 'AIDS-level immunodeficiency with risk of opportunistic infections (e.g. PJP)' },
        { id: 'c', text: 'Spontaneous cure' },
        { id: 'd', text: 'Resistance to all viruses' },
      ],
      answerId: 'b',
      explanation: 'As HIV depletes CD4⁺ T-helper cells, a count below 200 cells/µL marks severe immunodeficiency (AIDS), with susceptibility to opportunistic infections such as Pneumocystis pneumonia, cryptococcal meningitis, TB and CMV, and AIDS-defining malignancies. ART restores CD4 counts.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default retrovirusesHiv;
