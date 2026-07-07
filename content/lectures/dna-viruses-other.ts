import type { Lecture } from '../../lib/types';

export const dnaVirusesOther: Lecture = {
  id: 'dna-viruses-other',
  title: 'DNA Viruses II: Hepatitis B, HPV, Pox & Others',
  system: 'microbiology',
  source: 'L7 — DNA Viruses II',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Micro' },
    { kind: 'lecture', label: 'L7 DNA Viruses II' },
    { kind: 'mechanism', label: 'Hepadna, papilloma, pox, parvo, adeno' },
    { kind: 'exam', label: 'HBV serology; HPV & cancer' },
  ],

  highYield: [
    'HEPATITIS B (Hepadnavirus, partly dsDNA, uses REVERSE TRANSCRIPTASE): blood-borne/sexual/vertical; causes acute and CHRONIC hepatitis → cirrhosis and HEPATOCELLULAR CARCINOMA. SEROLOGY is high-yield: HBsAg (active infection), anti-HBs (immunity/vaccine), anti-HBc IgM (acute)/IgG (past/chronic), HBeAg (high infectivity). Vaccine-preventable (surface antigen). Hepatitis D is a defective virus needing HBV.',
    'HUMAN PAPILLOMAVIRUS (HPV, papovavirus, dsDNA): low-risk types → warts/condylomata (6, 11); HIGH-RISK types (16, 18) integrate and drive CERVICAL, anogenital and oropharyngeal CANCER (E6 inactivates p53, E7 inactivates Rb) → prevented by HPV VACCINE and screening (Pap/HPV testing). POLYOMAVIRUSES (JC → progressive multifocal leukoencephalopathy in immunosuppression; BK → transplant nephropathy).',
    'POXVIRUSES (largest viruses; replicate in the CYTOPLASM — the DNA-virus exception): SMALLPOX (eradicated by vaccination — a public-health triumph); MOLLUSCUM CONTAGIOSUM (umbilicated papules); mpox (monkeypox). PARVOVIRUS B19 (smallest, ssDNA): "slapped cheek" (erythema infectiosum), APLASTIC crisis in sickle cell, and hydrops fetalis in pregnancy.',
    'ADENOVIRUS (dsDNA, naked): respiratory infection, conjunctivitis ("pink eye"/pharyngoconjunctival fever), gastroenteritis. Diagnosis by serology/antigen/PCR; management ranges from supportive (adeno/parvo) to antivirals (HBV — tenofovir/entecavir) and, above all, VACCINATION (HBV, HPV) and screening for the cancer-associated viruses.',
    '**The take-home: HBV (chronic hepatitis → cirrhosis/HCC; know the serology; vaccine), HPV (high-risk 16/18 → cervical/oropharyngeal cancer via E6/E7 on p53/Rb; vaccine + screening), POXVIRUS (smallpox eradicated, molluscum; cytoplasmic exception), PARVOVIRUS B19 (slapped cheek, aplastic crisis), ADENOVIRUS (respiratory/conjunctivitis).** Herpesviruses are in [[dna-viruses-herpesviruses]]; HBV antivirals in BCP ([[antiviral-antiretroviral-agents]]); the dsDNA class in [[virology-principles-classification]].',
  ],

  mechanism: {
    title: 'HBV (chronic→cirrhosis/HCC; serology; vaccine), HPV (16/18→cancer via E6/E7), poxvirus (cytoplasmic; smallpox/molluscum), parvovirus B19, adenovirus',
    steps: [
      { id: 's1', label: 'HBV (hepadnavirus, uses reverse transcriptase): chronic hepatitis → cirrhosis/HCC; vaccine', emphasis: 'key' },
      { id: 's2', label: 'HBV serology: HBsAg (infection), anti-HBs (immunity), anti-HBc IgM/IgG, HBeAg (infectivity)', emphasis: 'key' },
      { id: 's3', label: 'HPV high-risk 16/18 → cervical/oropharyngeal cancer (E6→p53, E7→Rb); vaccine + screen', emphasis: 'danger' },
      { id: 's4', label: 'Poxvirus (cytoplasmic exception): smallpox eradicated, molluscum; parvovirus B19 (slapped cheek/aplastic crisis)', emphasis: 'key' },
      { id: 's5', label: 'Adenovirus: respiratory + conjunctivitis + gastroenteritis; polyomavirus JC (PML)/BK (transplant)' },
    ],
  },

  examFindings: [
    { sign: 'Chronic hepatitis progressing to cirrhosis and hepatocellular carcinoma', mechanism: 'Hepatitis B (hepadnavirus)', significance: 'key' },
    { sign: 'HBsAg positive with anti-HBc IgG (no anti-HBs)', mechanism: 'Chronic HBV infection', significance: 'key' },
    { sign: 'Cervical cancer driven by E6/E7 oncoproteins', mechanism: 'High-risk HPV (16/18) inactivating p53/Rb', significance: 'key' },
    { sign: '"Slapped cheek" rash; aplastic crisis in sickle cell disease', mechanism: 'Parvovirus B19', significance: 'key' },
    { sign: 'Progressive multifocal leukoencephalopathy in an immunosuppressed patient', mechanism: 'JC polyomavirus', significance: 'key' },
  ],

  investigations: [
    { clue: 'The HBV marker indicating active infection', meaning: 'HBsAg (surface antigen)' },
    { clue: 'The HBV marker indicating immunity/vaccination', meaning: 'Anti-HBs' },
    { clue: 'The HPV proteins inactivating p53 and Rb', meaning: 'E6 (p53) and E7 (Rb)' },
    { clue: 'The DNA virus that replicates in the cytoplasm', meaning: 'Poxvirus (the exception)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Several DNA viruses are vaccine-preventable and cancer-associated: HBV (know the serology; antivirals like tenofovir/entecavir; vaccine prevents chronic infection, cirrhosis and HCC) and HPV (vaccine + cervical screening prevent HPV-driven cancers via E6/E7). Poxvirus history (smallpox eradication) and parvovirus B19 (aplastic crisis, fetal hydrops) are high-yield. Herpesviruses are covered separately ([[dna-viruses-herpesviruses]]); HBV antivirals in BCP ([[antiviral-antiretroviral-agents]]).' },
  ],

  mnemonics: [
    { hook: '"HBV = chronic → cirrhosis/HCC (serology + vaccine); HPV 16/18 → cancer (E6/E7)"', expansion: ['HBsAg = infection; anti-HBs = immunity', 'HPV vaccine + Pap screen'] },
    { hook: '"Poxvirus = cytoplasm exception (smallpox/molluscum); Parvovirus B19 = slapped cheek/aplastic"', expansion: ['Adenovirus = respiratory/pink eye', 'JC = PML'] },
  ],

  traps: [
    {
      questionCategory: 'HBsAg vs anti-HBs',
      wrongInstinct: 'Any positive hepatitis B test means active, infectious disease',
      rightAnswer: 'The specific marker matters: HBsAg (surface ANTIGEN) positive = current INFECTION (infectious), whereas anti-HBs (surface ANTIBODY) positive = IMMUNITY (from vaccination or resolved infection, not active disease) — so "hepatitis B positive" must be interpreted by which marker is present (antigen vs antibody), with anti-HBc distinguishing natural infection from vaccination',
      why: 'Confusing HBsAg (active infection) with anti-HBs (immunity) inverts the clinical meaning — one needs treatment/isolation counselling, the other indicates protection; the serologic panel must be read carefully.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'High-risk human papillomavirus types (16, 18) drive cervical cancer mainly because their oncoproteins:',
      options: [
        { id: 'a', text: 'Activate p53 and Rb' },
        { id: 'b', text: 'Inactivate the tumour suppressors p53 (E6) and Rb (E7)' },
        { id: 'c', text: 'Encode reverse transcriptase' },
        { id: 'd', text: 'Form an envelope' },
      ],
      answerId: 'b',
      explanation: 'High-risk HPV E6 targets p53 for degradation and E7 inactivates Rb, disabling two key tumour-suppressor pathways and driving malignant transformation (cervical, anogenital and oropharyngeal cancers). HPV vaccination and cervical screening are preventive.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'In hepatitis B serology, a positive HBsAg indicates:',
      options: [
        { id: 'a', text: 'Immunity from vaccination' },
        { id: 'b', text: 'Current (active) hepatitis B infection' },
        { id: 'c', text: 'Past resolved infection with immunity' },
        { id: 'd', text: 'No exposure to hepatitis B' },
      ],
      answerId: 'b',
      explanation: 'HBsAg (hepatitis B surface antigen) indicates current, active infection (the patient is infectious). Anti-HBs indicates immunity (vaccination or resolved infection), and anti-HBc distinguishes natural infection from vaccination.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default dnaVirusesOther;
