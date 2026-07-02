import type { Lecture } from '../../lib/types';

export const dnaVirusesHerpesviruses: Lecture = {
  id: 'dna-viruses-herpesviruses',
  title: 'DNA Viruses I: Herpesviruses',
  system: 'microbiology',
  source: 'L6 — DNA Viruses I',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Micro' },
    { kind: 'lecture', label: 'L6 Herpesviruses' },
    { kind: 'mechanism', label: 'Latency & reactivation' },
    { kind: 'exam', label: 'HSV/VZV/EBV/CMV/HHV-8' },
  ],

  highYield: [
    '**HERPESVIRUSES (large, enveloped, dsDNA) share the hallmark of LATENCY — after primary infection they persist for life and REACTIVATE (especially with immunosuppression/stress). Eight human herpesviruses. HSV-1/HSV-2 (grouped vesicles): orolabial/genital herpes, and HSV ENCEPHALITIS (temporal lobe — a neurological emergency → empiric IV aciclovir); latent in sensory GANGLIA.**',
    '**VZV (HHV-3): primary = CHICKENPOX (generalised crops of "dew-drop" vesicles); latent in dorsal root ganglia → reactivates as ZOSTER (shingles — painful dermatomal vesicles, post-herpetic neuralgia). EBV (HHV-4): infectious MONONUCLEOSIS (fever, pharyngitis, lymphadenopathy, atypical lymphocytes, splenomegaly — avoid contact sport; rash with amoxicillin); associated with Burkitt & nasopharyngeal carcinoma, and B-cell lymphoma in the immunosuppressed.**',
    '**CMV (HHV-5): usually mild/asymptomatic, but a major cause of CONGENITAL infection (the commonest congenital viral infection — deafness, microcephaly) and of disease in the IMMUNOSUPPRESSED (retinitis, colitis, pneumonitis in transplant/HIV — "owl\'s eye" inclusions); treat with ganciclovir. HHV-6/7: roseola (fever then rash) in infants.**',
    '**HHV-8: KAPOSI SARCOMA (AIDS-associated vascular tumour). Latency and reactivation explain recurrent disease and the risk in immunosuppression, and the herpesvirus DNA polymerase is the target of aciclovir/ganciclovir/foscarnet.**',
    '**The take-home: herpesviruses = LATENCY + reactivation — HSV (cold sores/genital/encephalitis, aciclovir), VZV (chickenpox → zoster), EBV (mono; Burkitt/nasopharyngeal cancer), CMV (commonest congenital infection; disease in immunosuppressed — ganciclovir), HHV-6 (roseola), HHV-8 (Kaposi).** Antiviral pharmacology is BCP ([[herpesvirus-cmv-antivirals]]); other DNA virus families are in [[dna-viruses-other]]; the dsDNA class is in [[virology-principles-classification]].',
  ],

  mechanism: {
    title: 'Herpesviruses latent + reactivate: HSV (encephalitis), VZV (chickenpox→zoster), EBV (mono/cancer), CMV (congenital/immunosuppressed), HHV-8 (Kaposi)',
    steps: [
      { id: 's1', label: 'Hallmark = LATENCY (sensory ganglia/lymphocytes) → reactivation (immunosuppression)', emphasis: 'key' },
      { id: 's2', label: 'HSV-1/2: grouped vesicles; HSV encephalitis (temporal lobe) → empiric IV aciclovir', emphasis: 'danger' },
      { id: 's3', label: 'VZV: chickenpox → latent → zoster (dermatomal, post-herpetic neuralgia)', emphasis: 'key' },
      { id: 's4', label: 'EBV: mononucleosis; Burkitt/nasopharyngeal carcinoma; CMV: congenital + immunosuppressed disease', emphasis: 'key' },
      { id: 's5', label: 'HHV-6 = roseola; HHV-8 = Kaposi sarcoma; treat with aciclovir/ganciclovir/foscarnet', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Temporal-lobe encephalitis', mechanism: 'HSV encephalitis (empiric IV aciclovir)', significance: 'key' },
    { sign: 'Painful dermatomal vesicles not crossing the midline', mechanism: 'Herpes zoster (VZV reactivation)', significance: 'key' },
    { sign: 'Fever, pharyngitis, lymphadenopathy, atypical lymphocytes, splenomegaly', mechanism: 'EBV infectious mononucleosis', significance: 'key' },
    { sign: '"Owl\'s eye" inclusion bodies; retinitis in a transplant/HIV patient', mechanism: 'CMV', significance: 'key' },
    { sign: 'Vascular purple skin tumour in AIDS', mechanism: 'Kaposi sarcoma (HHV-8)', significance: 'key' },
  ],

  investigations: [
    { clue: 'The hallmark shared by all herpesviruses', meaning: 'Latency with reactivation' },
    { clue: 'The herpesvirus causing temporal-lobe encephalitis', meaning: 'HSV (herpes simplex virus)' },
    { clue: 'The commonest congenital viral infection', meaning: 'Cytomegalovirus (CMV)' },
    { clue: 'The herpesvirus causing Kaposi sarcoma', meaning: 'HHV-8' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Herpesvirus latency explains recurrent disease and the danger of reactivation in immunosuppression (CMV, VZV, EBV-driven lymphoma), so recognition drives antiviral therapy (aciclovir for HSV/VZV — emergency empiric IV aciclovir for HSV encephalitis; ganciclovir for CMV; foscarnet for resistant disease — [[herpesvirus-cmv-antivirals]]) and prophylaxis in transplant/HIV. EBV/HHV-8 associations with malignancy are high-yield. Other DNA viruses (HBV/HPV/pox) are in [[dna-viruses-other]].' },
  ],

  mnemonics: [
    { hook: 'Herpes numbers: "HHV-1/2 HSV, 3 VZV, 4 EBV, 5 CMV, 6/7 roseola, 8 Kaposi"', expansion: ['Latency + reactivation', 'HSV encephalitis = aciclovir'] },
    { hook: '"CMV = commonest congenital; owl\'s eye; ganciclovir"; EBV = mono + Burkitt', expansion: ['VZV: chickenpox → zoster', 'HHV-8 = Kaposi (AIDS)'] },
  ],

  traps: [
    {
      questionCategory: 'Herpesvirus persistence',
      wrongInstinct: 'Once herpes lesions heal and the immune response develops, the virus is cleared',
      rightAnswer: 'Herpesviruses are NEVER cleared — after primary infection they establish LIFELONG LATENCY (e.g. HSV/VZV in sensory ganglia, EBV/CMV in lymphocytes) and can REACTIVATE, especially with immunosuppression or stress; antivirals suppress replication but do not eradicate latent virus',
      why: 'Understanding lifelong latency explains recurrent cold sores/shingles, reactivation disease in the immunosuppressed, and why antivirals control but never cure herpesvirus infection.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The defining biological feature shared by all human herpesviruses is:',
      options: [
        { id: 'a', text: 'Faecal-oral transmission' },
        { id: 'b', text: 'Establishment of lifelong latency with the potential to reactivate' },
        { id: 'c', text: 'A segmented RNA genome' },
        { id: 'd', text: 'Inability to cause disease' },
      ],
      answerId: 'b',
      explanation: 'Herpesviruses (large enveloped dsDNA viruses) characteristically establish lifelong latency (in sensory ganglia or lymphocytes) after primary infection and can reactivate, particularly during immunosuppression — explaining recurrent and reactivation disease.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'The most common congenital viral infection, a cause of sensorineural deafness and a serious pathogen in transplant/HIV patients (with "owl\'s eye" inclusions), is:',
      options: [
        { id: 'a', text: 'Herpes simplex virus' },
        { id: 'b', text: 'Cytomegalovirus (CMV)' },
        { id: 'c', text: 'Epstein-Barr virus' },
        { id: 'd', text: 'Varicella-zoster virus' },
      ],
      answerId: 'b',
      explanation: 'CMV (HHV-5) is the commonest congenital viral infection (causing deafness, microcephaly) and a major opportunistic pathogen in the immunosuppressed (retinitis, colitis, pneumonitis), with characteristic "owl\'s eye" intranuclear inclusions; it is treated with ganciclovir.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default dnaVirusesHerpesviruses;
