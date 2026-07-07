import type { Lecture } from '../../lib/types';

export const antiviralAntiretroviralAgents: Lecture = {
  id: 'antiviral-antiretroviral-agents',
  title: 'Antiviral & Antiretroviral Agents',
  system: 'pharmacology',
  source: 'L6 — Antiviral & Antiretroviral Agents',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pharmacology' },
    { kind: 'lecture', label: 'L6 Antivirals' },
    { kind: 'mechanism', label: 'Block viral replication steps' },
    { kind: 'exam', label: 'Aciclovir, oseltamivir, HAART' },
  ],

  highYield: [
    'Antivirals block a step of the viral replication cycle; because viruses use host machinery, selectivity is harder than with bacteria. HERPES viruses: ACICLOVIR (and valaciclovir) is a guanosine analogue ACTIVATED by viral THYMIDINE KINASE → chain-terminates viral DNA polymerase (selective — only phosphorylated in infected cells); GANCICLOVIR for CMV (marrow-toxic); FOSCARNET/cidofovir for resistant/CMV disease (nephrotoxic).',
    'INFLUENZA: NEURAMINIDASE INHIBITORS (OSELTAMIVIR, zanamivir) block viral release from cells (best within 48 h of onset). HEPATITIS: chronic HBV uses nucleos(t)ide analogues (tenofovir, entecavir) ± peginterferon; chronic HCV is now cured by DIRECT-ACTING ANTIVIRALS (DAAs — the "-previr" protease, "-asvir" NS5A, "-buvir" polymerase inhibitors).',
    'HIV is treated with ANTIRETROVIRAL THERAPY (ART/HAART) — a COMBINATION of ≥3 drugs from ≥2 classes to suppress the virus and prevent resistance. Classes: NRTIs (nucleoside reverse-transcriptase inhibitors — tenofovir, emtricitabine, abacavir, zidovudine); NNRTIs (efavirenz); PROTEASE inhibitors ("-navir", e.g. ritonavir-boosted); INTEGRASE inhibitors ("-tegravir", e.g. dolutegravir — now backbone of first-line); plus entry/CCR5 inhibitors.',
    'Key toxicities/points: aciclovir → crystalluria/nephrotoxicity if not hydrated; zidovudine → anaemia; tenofovir → renal/bone; abacavir → HYPERSENSITIVITY linked to HLA-B*57:01 (screen before use — pharmacogenomics); protease inhibitors → CYP450 interactions + metabolic syndrome; efavirenz → CNS/teratogenic. ART also PREVENTS transmission (U=U) and is used as PrEP/PEP.',
    '**The take-home: aciclovir (HSV/VZV — activated by viral thymidine kinase), ganciclovir/foscarnet (CMV), oseltamivir (influenza neuraminidase), DAAs (cure HCV), and HIV = combination ART (NRTI + NNRTI/PI/INTEGRASE). Screen HLA-B*57:01 before abacavir.** Resistance drives combination therapy; CYP450 interactions of PIs link to [[drug-interactions-mechanisms]]; HLA-linked hypersensitivity to [[pharmacogenomics]].',
  ],

  mechanism: {
    title: 'Block a replication step: aciclovir (viral TK → DNA pol), oseltamivir (neuraminidase), DAAs (HCV), HIV = combination ART',
    steps: [
      { id: 's1', label: 'Aciclovir: activated by viral thymidine kinase → chain-terminates viral DNA polymerase (HSV/VZV)', emphasis: 'key' },
      { id: 's2', label: 'Ganciclovir (CMV, marrow-toxic); foscarnet/cidofovir (resistant/CMV, nephrotoxic)', emphasis: 'key' },
      { id: 's3', label: 'Oseltamivir = neuraminidase inhibitor (influenza, <48 h); DAAs cure chronic HCV', emphasis: 'key' },
      { id: 's4', label: 'HIV = HAART: ≥3 drugs, ≥2 classes (NRTI + NNRTI/PI/integrase) to prevent resistance', emphasis: 'key' },
      { id: 's5', label: 'Screen HLA-B*57:01 before abacavir; PIs → CYP450 interactions', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Selective anti-HSV drug requiring viral thymidine kinase for activation', mechanism: 'Aciclovir (chain-terminates viral DNA polymerase)', significance: 'key' },
    { sign: 'Influenza drug most effective within 48 h of symptom onset', mechanism: 'Oseltamivir (neuraminidase inhibitor)', significance: 'key' },
    { sign: 'Cure of chronic hepatitis C with oral therapy', mechanism: 'Direct-acting antivirals (protease/NS5A/polymerase inhibitors)', significance: 'key' },
    { sign: 'Life-threatening hypersensitivity to an NRTI', mechanism: 'Abacavir — HLA-B*57:01 (screen first)', significance: 'key' },
    { sign: 'Renal impairment/crystalluria with IV antiviral', mechanism: 'Aciclovir (ensure hydration)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The enzyme that activates aciclovir selectively in infected cells', meaning: 'Viral thymidine kinase' },
    { clue: 'The target of oseltamivir', meaning: 'Viral neuraminidase (blocks release)' },
    { clue: 'Why HIV is treated with ≥3 drugs', meaning: 'Combination therapy suppresses virus and prevents resistance' },
    { clue: 'The allele screened before abacavir', meaning: 'HLA-B*57:01' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Antiviral selectivity (e.g. aciclovir needing viral thymidine kinase) and the need for combination ART in HIV to prevent resistance are central. Pharmacogenomic screening (HLA-B*57:01 → abacavir) prevents severe hypersensitivity ([[pharmacogenomics]]), and protease-inhibitor CYP450 effects cause interactions ([[drug-interactions-mechanisms]]). DAAs have transformed HCV into a curable disease; timing (oseltamivir <48 h) and hydration (aciclovir) affect outcomes.' },
  ],

  mnemonics: [
    { hook: 'Aciclovir: "needs viral thymidine kinase → selective for infected cells"', expansion: ['Ganciclovir = CMV (marrow)', 'Foscarnet = resistant (nephrotoxic)'] },
    { hook: 'HIV ART suffixes: "-vir(NRTI backbone), -navir (protease), -tegravir (integrase), efavirenz (NNRTI)"', expansion: ['≥3 drugs, ≥2 classes', 'HLA-B*57:01 before abacavir'] },
  ],

  traps: [
    {
      questionCategory: 'Why aciclovir is selectively toxic to virus',
      wrongInstinct: 'Aciclovir directly inhibits DNA polymerase in all cells, so it is broadly cytotoxic',
      rightAnswer: 'Aciclovir is a PRODRUG that must be MONOPHOSPHORYLATED by VIRAL thymidine kinase (present only in HSV/VZV-infected cells) before host kinases finish activating it — so it is concentrated and active almost exclusively in infected cells, giving its selectivity and low toxicity; thymidine-kinase-deficient mutants are resistant',
      why: 'The viral-enzyme activation step is what makes aciclovir safe and selective, and explains why TK-negative resistant strains need foscarnet (which acts directly on the polymerase, no activation needed).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Aciclovir is selectively active against herpes-infected cells because it is first phosphorylated by:',
      options: [
        { id: 'a', text: 'Host thymidine kinase in all cells' },
        { id: 'b', text: 'Viral thymidine kinase, present only in infected cells' },
        { id: 'c', text: 'Viral neuraminidase' },
        { id: 'd', text: 'Reverse transcriptase' },
      ],
      answerId: 'b',
      explanation: 'Aciclovir requires initial monophosphorylation by viral thymidine kinase, which is present only in HSV/VZV-infected cells; host enzymes then complete activation. The active triphosphate chain-terminates viral DNA polymerase. This viral-activation step gives aciclovir its selectivity and safety.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Standard treatment of HIV infection (HAART) uses:',
      options: [
        { id: 'a', text: 'A single potent antiretroviral drug' },
        { id: 'b', text: 'A combination of at least three drugs from at least two classes' },
        { id: 'c', text: 'Oseltamivir plus aciclovir' },
        { id: 'd', text: 'Interferon monotherapy' },
      ],
      answerId: 'b',
      explanation: 'HIV is treated with combination antiretroviral therapy — at least three drugs from at least two classes (e.g. two NRTIs plus an integrase inhibitor) — to maximally suppress viral replication and prevent the emergence of resistance. Monotherapy rapidly selects resistant virus.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default antiviralAntiretroviralAgents;
