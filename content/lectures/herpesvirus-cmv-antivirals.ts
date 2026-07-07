import type { Lecture } from '../../lib/types';

export const herpesvirusCmvAntivirals: Lecture = {
  id: 'herpesvirus-cmv-antivirals',
  title: 'Antivirals for Herpesviruses & CMV',
  system: 'pharmacology',
  source: 'L6 — Antiviral & Antiretroviral Agents',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pharmacology' },
    { kind: 'lecture', label: 'L6 Herpes/CMV Antivirals' },
    { kind: 'mechanism', label: 'Nucleoside DNA-polymerase inhibitors' },
    { kind: 'exam', label: 'Aciclovir; ganciclovir; foscarnet' },
  ],

  highYield: [
    'Herpesvirus antivirals are guanosine analogues that CHAIN-TERMINATE viral DNA polymerase after being phosphorylated. ACICLOVIR (and valaciclovir/famciclovir) require initial activation by VIRAL THYMIDINE KINASE (present only in HSV/VZV-infected cells) → selective, low toxicity; first-line for HSV (herpes labialis/genitalis, encephalitis) and VZV (chickenpox, zoster — reduces post-herpetic neuralgia if given early).',
    'CMV lacks the same thymidine kinase, so it needs GANCICLOVIR (and valganciclovir), activated by a viral kinase (UL97) → treats CMV retinitis/disease in the immunosuppressed; its dose-limiting toxicity is BONE-MARROW SUPPRESSION (neutropenia). Aciclovir\'s key caution is crystalline NEPHROTOXICITY if the patient is not well hydrated.',
    'RESISTANCE arises via thymidine-kinase (or UL97) MUTATIONS. For resistant HSV/VZV or CMV, use FOSCARNET or CIDOFOVIR, which inhibit the viral DNA polymerase DIRECTLY (no phosphorylation/activation step needed) — but both are markedly NEPHROTOXIC (and foscarnet causes electrolyte disturbances).',
    'Clinical use points: start aciclovir EARLY (HSV encephalitis is a neurological emergency — empiric IV aciclovir; zoster benefits from early therapy); maintain hydration; monitor marrow with ganciclovir and renal function/electrolytes with foscarnet/cidofovir. Topical/oral aciclovir is used for mild mucocutaneous disease.',
    '**The take-home: ACICLOVIR (viral thymidine kinase → selective; HSV/VZV; hydrate to avoid nephrotoxicity) ; GANCICLOVIR (CMV; marrow suppression) ; FOSCARNET/CIDOFOVIR (resistant/CMV, direct DNA-polymerase inhibitors, NEPHROTOXIC). Give aciclovir early in HSV encephalitis.** The overview and influenza/HIV agents are in [[antiviral-antiretroviral-agents]]; HIV ART detail is [[hiv-antiretroviral-therapy]].',
  ],

  mechanism: {
    title: 'Aciclovir (viral TK → DNA-pol chain terminator, HSV/VZV) ; ganciclovir (CMV, marrow) ; foscarnet/cidofovir (resistant, direct, nephrotoxic)',
    steps: [
      { id: 's1', label: 'Aciclovir: activated by viral thymidine kinase → chain-terminates viral DNA polymerase', emphasis: 'key' },
      { id: 's2', label: 'HSV/VZV first-line; give EARLY (HSV encephalitis emergency; zoster → ↓PHN)', emphasis: 'key' },
      { id: 's3', label: 'Ganciclovir/valganciclovir = CMV; dose-limiting bone-marrow suppression', emphasis: 'danger' },
      { id: 's4', label: 'Aciclovir crystalline nephrotoxicity → ensure hydration', emphasis: 'danger' },
      { id: 's5', label: 'Resistance (TK/UL97 mutation) → foscarnet/cidofovir (direct DNA-pol, nephrotoxic)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Selective anti-HSV agent needing viral thymidine kinase', mechanism: 'Aciclovir', significance: 'key' },
    { sign: 'Empiric IV therapy for suspected HSV encephalitis', mechanism: 'Aciclovir given early (neurological emergency)', significance: 'key' },
    { sign: 'Neutropenia during CMV treatment', mechanism: 'Ganciclovir bone-marrow suppression', significance: 'key' },
    { sign: 'Nephrotoxicity with a directly-acting antiviral for resistant CMV', mechanism: 'Foscarnet/cidofovir', significance: 'key' },
    { sign: 'Crystalluria/AKI with IV antiviral', mechanism: 'Aciclovir (inadequate hydration)', significance: 'key' },
  ],

  investigations: [
    { clue: 'The activating enzyme that makes aciclovir selective', meaning: 'Viral thymidine kinase' },
    { clue: 'The drug for CMV and its dose-limiting toxicity', meaning: 'Ganciclovir — bone-marrow suppression' },
    { clue: 'The drugs for resistant HSV/CMV that act directly on the polymerase', meaning: 'Foscarnet and cidofovir (nephrotoxic)' },
    { clue: 'The emergency requiring empiric IV aciclovir', meaning: 'HSV encephalitis' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Herpesvirus therapy hinges on selectivity (aciclovir needs viral thymidine kinase), site/severity (early IV aciclovir for HSV encephalitis; ganciclovir for CMV in the immunosuppressed) and toxicity (aciclovir hydration; ganciclovir marrow; foscarnet/cidofovir renal). Resistance drives escalation to direct polymerase inhibitors. This complements the influenza/hepatitis/HIV overview of [[antiviral-antiretroviral-agents]] and the HIV ART detail of [[hiv-antiretroviral-therapy]].' },
  ],

  mnemonics: [
    { hook: '"Aciclovir = HSV/VZV (viral TK, hydrate); Ganciclovir = CMV (marrow); Foscarnet = resistant (kidney)"', expansion: ['Give aciclovir early', 'Direct DNA-pol = no activation needed'] },
    { hook: '"HSV encephalitis = empiric IV aciclovir NOW"', expansion: ['Zoster early → ↓ post-herpetic neuralgia', 'Cidofovir also nephrotoxic'] },
  ],

  traps: [
    {
      questionCategory: 'Managing aciclovir-resistant herpesvirus',
      wrongInstinct: 'If aciclovir fails, simply increase the aciclovir dose',
      rightAnswer: 'Aciclovir resistance is usually from a viral THYMIDINE-KINASE mutation, so the virus can no longer activate aciclovir (or ganciclovir) — raising the dose does not help; you switch to FOSCARNET or CIDOFOVIR, which inhibit the viral DNA polymerase DIRECTLY without needing viral kinase activation (accepting their nephrotoxicity)',
      why: 'Because resistance abolishes the activation step, escalating aciclovir is futile; understanding that foscarnet/cidofovir bypass activation explains the correct switch for resistant disease.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The dose-limiting toxicity of ganciclovir (used for CMV) is:',
      options: [
        { id: 'a', text: 'Bone-marrow suppression (neutropenia)' },
        { id: 'b', text: 'Pulmonary fibrosis' },
        { id: 'c', text: 'Tendon rupture' },
        { id: 'd', text: 'Gingival hyperplasia' },
      ],
      answerId: 'a',
      explanation: 'Ganciclovir/valganciclovir treats CMV disease (e.g. retinitis in the immunosuppressed) but characteristically causes dose-limiting bone-marrow suppression (neutropenia, thrombocytopenia). Aciclovir\'s key caution is crystalline nephrotoxicity, and foscarnet/cidofovir are nephrotoxic.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Aciclovir-resistant HSV (from a thymidine-kinase mutation) is best treated with:',
      options: [
        { id: 'a', text: 'A higher dose of aciclovir' },
        { id: 'b', text: 'Foscarnet (a direct viral DNA-polymerase inhibitor)' },
        { id: 'c', text: 'Oseltamivir' },
        { id: 'd', text: 'Griseofulvin' },
      ],
      answerId: 'b',
      explanation: 'Thymidine-kinase-deficient resistant HSV cannot phosphorylate/activate aciclovir, so dose escalation fails. Foscarnet (and cidofovir) inhibit the viral DNA polymerase directly without needing viral kinase activation, at the cost of nephrotoxicity.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default herpesvirusCmvAntivirals;
