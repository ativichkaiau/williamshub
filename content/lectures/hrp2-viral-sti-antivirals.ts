import type { Lecture } from '../../lib/types';

export const hrp2ViralStiAntivirals: Lecture = {
  id: 'hrp2-viral-sti-antivirals',
  title: 'Viral STIs & Antiviral Therapy',
  system: 'repro',
  source: 'L3 — Viral STIs & Antiviral Therapy',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'L3 Viral STIs' },
    { kind: 'disease', label: 'HSV · HPV · HIV · HBV' },
    { kind: 'mechanism', label: 'Latency & oncogenesis' },
    { kind: 'treatment', label: 'Aciclovir · ART' },
  ],

  highYield: [
    '**Genital herpes (HSV-2 > HSV-1):** painful vesicles/ulcers, recurrent from **sacral-ganglion latency**; Tzanck = **multinucleated giant cells**. Treat **aciclovir/valaciclovir** (shortens/suppresses, not curative). **Neonatal HSV** risk at vaginal delivery during a primary outbreak → **caesarean**.',
    '**HPV:** **low-risk 6 & 11 → condylomata acuminata (warts)**; **high-risk 16 & 18 → cervical/anogenital cancer** (E6 inhibits **p53**, E7 inhibits **Rb**). Prevent with the **HPV vaccine**.',
    '**HIV:** retrovirus infecting **CD4 T cells**; treat with lifelong **antiretroviral therapy (ART)**. In pregnancy, ART + appropriate delivery + avoiding breastfeeding markedly reduces **vertical transmission**.',
    '**Hepatitis B:** transmitted sexually and **perinatally**; perinatal infection → high chronicity. Prevent vertical transmission with **HBV vaccine + immunoglobulin (HBIG)** to the neonate.',
    '**Antiviral principle:** aciclovir is a **guanosine analogue** activated by viral **thymidine kinase**, then terminates viral DNA — hence its selectivity for HSV/VZV. Antivirals **control** chronic viral STIs; they rarely eradicate latent virus.',
  ],

  mechanism: {
    title: 'Entry → latency/integration → recurrence or oncogenesis',
    steps: [
      { id: 's1', label: 'HSV infects epithelium → latency in sensory ganglia', emphasis: 'key' },
      { id: 's2', label: 'Reactivation → recurrent painful vesicles' },
      { id: 's3', label: 'High-risk HPV E6/E7 inactivate p53/Rb → cancer', emphasis: 'danger' },
      { id: 's4', label: 'HIV integrates into CD4 cells → immunodeficiency' },
      { id: 's5', label: 'Aciclovir needs viral TK → selective chain termination', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Painful grouped vesicles + multinucleated giant cells', mechanism: 'HSV; Tzanck smear', significance: 'key' },
    { sign: 'HPV 16/18 → cervical dysplasia/cancer', mechanism: 'E6→p53, E7→Rb inactivation', significance: 'key' },
    { sign: 'Koilocytes on cytology', mechanism: 'HPV cytopathic effect', significance: 'supportive' },
    { sign: 'Aciclovir selectivity depends on viral thymidine kinase', mechanism: 'Only infected cells activate the drug', significance: 'key' },
  ],

  investigations: [
    { clue: 'Recurrent painful genital vesicles', meaning: 'HSV-2 → aciclovir (episodic or suppressive)' },
    { clue: 'Cauliflower-like anogenital warts', meaning: 'HPV 6/11 (condylomata acuminata)' },
    { clue: 'Abnormal Pap with high-risk HPV', meaning: 'HPV 16/18 — cervical cancer risk; colposcopy' },
    { clue: 'Pregnant HBsAg-positive mother', meaning: 'Neonate needs HBV vaccine + HBIG to block vertical transmission' },
  ],

  treatment: [
    { logic: 'Aciclovir/valaciclovir for HSV', detail: 'Episodic for outbreaks, suppressive for frequent recurrences; caesarean if active genital lesions at delivery.' },
    { logic: 'Prevent perinatal transmission', detail: 'HIV: ART in pregnancy ± caesarean, avoid breastfeeding. HBV: neonatal vaccine + HBIG.' },
  ],

  mnemonics: [
    { hook: 'HPV: 6 & 11 = warts (low); 16 & 18 = cancer (high)', expansion: ['E6 → p53', 'E7 → Rb'] },
    { hook: 'Painful vesicles = Herpes; Painless warts = HPV', expansion: ['Aciclovir needs viral TK'] },
  ],

  traps: [
    {
      questionCategory: 'HPV strain by disease',
      wrongInstinct: 'HPV types 6 and 11 cause cervical cancer',
      rightAnswer: 'HPV 6 and 11 cause benign warts; 16 and 18 are the high-risk oncogenic types',
      why: 'Low-risk types (6/11) drive condylomata; high-risk types (16/18) inactivate p53/Rb and cause carcinoma.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The oncogenic mechanism of high-risk HPV in cervical carcinoma involves viral proteins that inactivate:',
      options: [
        { id: 'a', text: 'BRCA1 and BRCA2' },
        { id: 'b', text: 'p53 (by E6) and Rb (by E7)' },
        { id: 'c', text: 'APC and KRAS' },
        { id: 'd', text: 'BCL-2 and MYC' },
      ],
      answerId: 'b',
      explanation: 'High-risk HPV E6 degrades p53 and E7 inactivates Rb, releasing cell-cycle control and driving carcinogenesis.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Why is aciclovir selectively toxic to herpesvirus-infected cells?',
      options: [
        { id: 'a', text: 'It is only absorbed by infected cells' },
        { id: 'b', text: 'It must be phosphorylated by viral thymidine kinase' },
        { id: 'c', text: 'It inhibits the host ribosome' },
        { id: 'd', text: 'It blocks viral entry' },
      ],
      answerId: 'b',
      explanation: 'Aciclovir is monophosphorylated by viral thymidine kinase (present only in infected cells), then further phosphorylated to a chain-terminating triphosphate — giving selectivity.',
      tests: 'treatment',
    },
    {
      id: 'q3',
      stem: 'To prevent perinatal hepatitis B transmission from an HBsAg-positive mother, the neonate should receive:',
      options: [
        { id: 'a', text: 'Aciclovir' },
        { id: 'b', text: 'Hepatitis B vaccine plus hepatitis B immunoglobulin (HBIG)' },
        { id: 'c', text: 'Antiretroviral therapy' },
        { id: 'd', text: 'Ceftriaxone' },
      ],
      answerId: 'b',
      explanation: 'Combined active (vaccine) and passive (HBIG) immunoprophylaxis given promptly to the neonate greatly reduces perinatal HBV transmission and chronic infection.',
      tests: 'treatment',
    },
  ],
};

export default hrp2ViralStiAntivirals;
