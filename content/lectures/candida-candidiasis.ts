import type { Lecture } from '../../lib/types';

export const candidaCandidiasis: Lecture = {
  id: 'candida-candidiasis',
  title: 'Candida & Candidiasis',
  system: 'microbiology',
  source: 'L22 — Pathogenic Yeasts',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Micro' },
    { kind: 'lecture', label: 'L22 Candida' },
    { kind: 'mechanism', label: 'Yeast + pseudohyphae; opportunist' },
    { kind: 'exam', label: 'Thrush; invasive candidiasis; risk factors' },
  ],

  highYield: [
    'CANDIDA ALBICANS is a commensal YEAST of skin/mouth/gut/vagina that becomes an OPPORTUNISTIC pathogen when host defences or normal flora are disturbed. It forms budding yeasts plus PSEUDOHYPHAE/hyphae in tissue, produces GERM TUBES at 37°C (a rapid identification test) and grows as germ-tube-positive white colonies. Disease ranges from superficial mucocutaneous to life-threatening invasive.',
    'SUPERFICIAL candidiasis: oral THRUSH (white plaques that scrape off — in infants, denture-wearers, inhaled-steroid users, and a clue to HIV/immunosuppression when unexplained), VULVOVAGINAL candidiasis ("thrush", itch + curd-like discharge — precipitated by antibiotics, diabetes, pregnancy), intertrigo/diaper rash, and chronic mucocutaneous candidiasis (T-cell defects). OESOPHAGEAL candidiasis is an AIDS-defining illness (dysphagia).',
    'INVASIVE candidiasis: candidaemia and disseminated infection in the seriously ill — risk factors are CENTRAL VENOUS CATHETERS, broad-spectrum ANTIBIOTICS, NEUTROPENIA, ICU stay, abdominal surgery, TPN and IV drug use. It can seed the retina (endophthalmitis) and heart valves. Blood cultures and β-D-glucan support diagnosis. NON-albicans species matter for resistance: C. glabrata and C. krusei are often azole-resistant, and C. AURIS is a multidrug-resistant, hospital-spreading emerging threat.',
    'Treatment: superficial disease → topical/oral azoles (clotrimazole, nystatin, fluconazole); INVASIVE candidiasis → an ECHINOCANDIN first-line (well tolerated, active even against many azole-resistant species), with fluconazole/amphotericin depending on species and site, plus removing the infected catheter (source control).',
    '**The take-home: CANDIDA = commensal yeast → opportunist (germ-tube+, pseudohyphae). Superficial: THRUSH (mouth/vagina; antibiotics/diabetes/steroids/HIV clue), oesophagitis (AIDS-defining). INVASIVE: candidaemia with LINES/antibiotics/neutropenia → ECHINOCANDIN + remove catheter. Resistant species: glabrata/krusei (azole), C. AURIS.** The other yeasts (Cryptococcus/Malassezia) are [[cryptococcus-malassezia]]; antifungals are [[antifungal-agents-lab-diagnosis]].',
  ],

  mechanism: {
    title: 'Commensal yeast → opportunist (germ-tube+, pseudohyphae); superficial thrush/oesophagitis (antibiotics/diabetes/steroids/HIV); invasive candidaemia (lines/neutropenia) → echinocandin + remove catheter; resistant glabrata/krusei/auris',
    steps: [
      { id: 's1', label: 'Candida albicans: commensal yeast; germ-tube+ at 37°C, pseudohyphae in tissue', emphasis: 'key' },
      { id: 's2', label: 'Superficial: oral/vaginal thrush (antibiotics, diabetes, steroids); oesophagitis = AIDS-defining', emphasis: 'key' },
      { id: 's3', label: 'Invasive/candidaemia risks: central lines, broad antibiotics, neutropenia, ICU/TPN', emphasis: 'danger' },
      { id: 's4', label: 'Invasive candidiasis → echinocandin first-line + remove infected catheter', emphasis: 'key' },
      { id: 's5', label: 'Resistant non-albicans: C. glabrata/krusei (azole-resistant), C. auris (MDR, nosocomial)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'White oral plaques that scrape off in an inhaled-steroid user or HIV patient', mechanism: 'Oral candidiasis (thrush)', significance: 'key' },
    { sign: 'Vulvovaginal itch with curd-like discharge after antibiotics', mechanism: 'Vulvovaginal candidiasis', significance: 'key' },
    { sign: 'Candidaemia in an ICU patient with a central venous catheter', mechanism: 'Invasive candidiasis (line-associated)', significance: 'key' },
    { sign: 'Dysphagia with oesophageal plaques in AIDS', mechanism: 'Oesophageal candidiasis (AIDS-defining)', significance: 'supportive' },
    { sign: 'A multidrug-resistant Candida spreading in hospital', mechanism: 'Candida auris', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The rapid identification test for C. albicans', meaning: 'Germ tube formation at 37°C' },
    { clue: 'The major risk factors for candidaemia', meaning: 'Central lines, broad antibiotics, neutropenia' },
    { clue: 'The first-line drug class for invasive candidiasis', meaning: 'Echinocandins' },
    { clue: 'The emerging multidrug-resistant Candida', meaning: 'Candida auris' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Candida is a commensal yeast that turns opportunist when flora/immunity are disturbed: superficial thrush and vaginitis (from antibiotics, diabetes, steroids — or, if unexplained/oesophageal, a clue to HIV) respond to topical/oral azoles, while invasive candidaemia in the critically ill (central lines, broad antibiotics, neutropenia) needs first-line echinocandin therapy plus removal of the infected catheter. Non-albicans species (glabrata/krusei azole resistance; C. auris multidrug resistance) shape drug choice. The other yeasts are [[cryptococcus-malassezia]]; antifungal drugs are [[antifungal-agents-lab-diagnosis]].' },
  ],

  mnemonics: [
    { hook: '"Candida = commensal → opportunist" (germ-tube+, pseudohyphae)', expansion: ['Thrush: antibiotics/diabetes/steroids/HIV', 'Oesophagitis = AIDS-defining'] },
    { hook: '"Candidaemia = Lines + antibiotics + Neutropenia → Echinocandin + pull the line"', expansion: ['glabrata/krusei = azole-resistant', 'C. auris = MDR nosocomial'] },
  ],

  traps: [
    {
      questionCategory: 'Line management in candidaemia',
      wrongInstinct: 'Candidaemia in a patient with a central line can be cured with antifungals while leaving the catheter in place',
      rightAnswer: 'In catheter-associated candidaemia, SOURCE CONTROL — REMOVING the infected central venous catheter — is a key part of treatment alongside systemic antifungals (an echinocandin first-line); leaving the colonised line in place is a persistent focus that leads to failure and complications (e.g. endophthalmitis, endocarditis)',
      why: 'Candida forms biofilm on intravascular devices, so antifungals alone often fail without catheter removal; source control is integral to clearing candidaemia, mirroring the principle for other device infections.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'First-line therapy for invasive candidiasis/candidaemia in a critically ill patient is generally:',
      options: [
        { id: 'a', text: 'An echinocandin (plus removing the infected catheter)' },
        { id: 'b', text: 'Topical nystatin' },
        { id: 'c', text: 'A macrolide' },
        { id: 'd', text: 'Oral griseofulvin' },
      ],
      answerId: 'a',
      explanation: 'Echinocandins are first-line for invasive candidiasis: well tolerated and active against many azole-resistant species. Source control — removing the infected central venous catheter — is essential, and therapy is adjusted by species (e.g. azole resistance in C. glabrata/krusei).',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'Unexplained oral thrush or oesophageal candidiasis in an adult should prompt consideration of:',
      options: [
        { id: 'a', text: 'Underlying immunosuppression such as HIV/AIDS' },
        { id: 'b', text: 'Iron-deficiency anaemia' },
        { id: 'c', text: 'A viral wart' },
        { id: 'd', text: 'A urinary tract infection' },
      ],
      answerId: 'a',
      explanation: 'Candida is a commensal that causes disease when defences fail; unexplained oral thrush and especially oesophageal candidiasis (an AIDS-defining illness) suggest immunosuppression such as HIV — warranting evaluation, alongside local risks like inhaled steroids, antibiotics or diabetes.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default candidaCandidiasis;
