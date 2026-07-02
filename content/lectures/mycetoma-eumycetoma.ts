import type { Lecture } from '../../lib/types';

export const mycetomaEumycetoma: Lecture = {
  id: 'mycetoma-eumycetoma',
  title: 'Mycetoma (Madura Foot)',
  system: 'microbiology',
  source: 'L25 — Pathogenic Filamentous Fungi II',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Micro' },
    { kind: 'lecture', label: 'L25 Mycetoma' },
    { kind: 'mechanism', label: 'Subcutaneous; grains; triad' },
    { kind: 'exam', label: 'Eumycetoma vs actinomycetoma' },
  ],

  highYield: [
    '**MYCETOMA is a chronic, progressive SUBCUTANEOUS infection acquired by traumatic IMPLANTATION of the organism from SOIL (barefoot agricultural workers in tropical/subtropical regions — classically the FOOT, "Madura foot"). The clinical hallmark is a TRIAD: painless subcutaneous SWELLING/tumefaction, multiple discharging SINUS TRACTS, and the extrusion of GRAINS (macroscopic colonies of the organism) in the discharge — slowly destroying skin, subcutis, and eventually BONE.**',
    '**Mycetoma has TWO causes distinguished by the grains and organism: EUMYCETOMA (true FUNGAL — e.g. Madurella; grains often BLACK; broad septate hyphae) and ACTINOMYCETOMA (filamentous BACTERIA — Nocardia, Actinomadura, Streptomyces; grains often pale/red/yellow; thin filaments). This distinction is CRUCIAL because it changes treatment entirely.**',
    '**Management: identify the grain type (microscopy/culture, imaging for bone involvement). ACTINOMYCETOMA (bacterial) responds to prolonged ANTIBIOTICS (e.g. co-trimoxazole ± amikacin — often curable medically). EUMYCETOMA (fungal) needs prolonged ANTIFUNGALS (itraconazole/other azoles) and frequently SURGERY/excision, with a poorer response — hence the importance of correctly classifying it.**',
    '**Mycetoma is thus the archetypal SUBCUTANEOUS mycosis of implantation (like chromoblastomycosis and sporotrichosis) — chronic, deforming, and defined by the grain-discharging sinus triad. The eumycetoma (fungal) vs actinomycetoma (bacterial) split, from grain colour/microscopy, is the key exam and management point.**',
    '**The take-home: MYCETOMA ("Madura foot") = chronic SUBCUTANEOUS implantation infection → TRIAD of swelling + sinus tracts + GRAINS, invading bone. EUMYCETOMA (fungal, often black grains) → antifungals + surgery; ACTINOMYCETOMA (filamentous bacteria — Nocardia etc., pale grains) → antibiotics (co-trimoxazole). Classify the grain to choose therapy.** Chromoblastomycosis/other subcutaneous mycoses are [[chromoblastomycosis-subcutaneous-mycoses]]; Nocardia is [[nocardia-actinomyces]].',
  ],

  mechanism: {
    title: 'Chronic subcutaneous implantation (Madura foot): triad swelling + sinus tracts + GRAINS invading bone; eumycetoma (fungal, black grains → antifungal + surgery) vs actinomycetoma (bacterial, pale grains → antibiotics)',
    steps: [
      { id: 's1', label: 'Traumatic soil implantation (barefoot workers) → chronic subcutaneous infection (foot)', emphasis: 'key' },
      { id: 's2', label: 'Triad: painless swelling + discharging sinus tracts + extruded GRAINS', emphasis: 'key' },
      { id: 's3', label: 'Progressive destruction of skin/subcutis → BONE involvement', emphasis: 'danger' },
      { id: 's4', label: 'Eumycetoma = fungal (black grains) → antifungals (itraconazole) + surgery', emphasis: 'key' },
      { id: 's5', label: 'Actinomycetoma = filamentous bacteria (Nocardia etc., pale grains) → antibiotics (co-trimoxazole)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Chronic foot swelling with sinuses discharging grains in a barefoot farmer', mechanism: 'Mycetoma (Madura foot)', significance: 'key' },
    { sign: 'Black grains with broad septate hyphae in the discharge', mechanism: 'Eumycetoma (fungal)', significance: 'key' },
    { sign: 'Pale/yellow grains with thin bacterial filaments', mechanism: 'Actinomycetoma (Nocardia/Actinomadura)', significance: 'key' },
    { sign: 'Bone destruction on imaging of a chronic foot mass', mechanism: 'Advanced mycetoma', significance: 'supportive' },
    { sign: 'Response to co-trimoxazole in a grain-discharging lesion', mechanism: 'Actinomycetoma (bacterial)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The clinical triad of mycetoma', meaning: 'Swelling + sinus tracts + grains' },
    { clue: 'The fungal form (often black grains)', meaning: 'Eumycetoma' },
    { clue: 'The bacterial form (filamentous bacteria)', meaning: 'Actinomycetoma (Nocardia, Actinomadura, Streptomyces)' },
    { clue: 'Why grain classification matters', meaning: 'It determines antifungal-vs-antibiotic treatment' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Mycetoma is a chronic subcutaneous implantation infection (Madura foot) recognised by the triad of swelling, sinus tracts and grain discharge, progressing to bone destruction. The critical step is classifying the grains: eumycetoma (true fungal, often black grains) requires prolonged antifungals plus surgery and responds less well, whereas actinomycetoma (filamentous bacteria such as Nocardia) is often curable with prolonged antibiotics (co-trimoxazole ± amikacin). Getting this fungal-vs-bacterial distinction right changes the entire management. Other subcutaneous mycoses are [[chromoblastomycosis-subcutaneous-mycoses]]; Nocardia/Actinomyces are [[nocardia-actinomyces]].' },
  ],

  mnemonics: [
    { hook: 'Mycetoma triad: "Swelling + Sinuses + Grains" (Madura foot)', expansion: ['Soil implantation (barefoot)', 'Invades bone'] },
    { hook: '"EUmycetoma = fUngal (black grains) → antifungal + surgery; ACTINOmycetoma = bacteria → antibiotics"', expansion: ['Grain colour/microscopy classifies', 'Actinomycetoma often curable'] },
  ],

  traps: [
    {
      questionCategory: 'Eumycetoma vs actinomycetoma',
      wrongInstinct: 'Mycetoma is a fungal disease, so it should always be treated with antifungals',
      rightAnswer: 'Mycetoma has TWO distinct causes with OPPOSITE treatments: EUMYCETOMA is caused by true FUNGI (needs prolonged ANTIFUNGALS ± surgery), whereas ACTINOMYCETOMA is caused by filamentous BACTERIA (Nocardia, Actinomadura, Streptomyces) and needs ANTIBIOTICS (e.g. co-trimoxazole) — so you must classify the grains (colour/microscopy/culture) first; treating an actinomycetoma with antifungals (or vice versa) fails',
      why: 'Assuming all mycetoma is fungal misdirects therapy for the bacterial (actinomycetoma) half, which is often medically curable with antibiotics; grain classification is the decisive step before treatment.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The classic clinical triad of mycetoma ("Madura foot") is:',
      options: [
        { id: 'a', text: 'Subcutaneous swelling, discharging sinus tracts, and extruded grains' },
        { id: 'b', text: 'Fever, rash and eosinophilia' },
        { id: 'c', text: 'Ulcer, ascending lymphatic nodules and fever' },
        { id: 'd', text: 'Cavity, fungus ball and haemoptysis' },
      ],
      answerId: 'a',
      explanation: 'Mycetoma is a chronic subcutaneous implantation infection (often of the foot) presenting with the triad of painless swelling, multiple discharging sinus tracts, and grains (organism colonies) in the discharge, progressing to bone destruction.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Why is distinguishing eumycetoma from actinomycetoma essential?',
      options: [
        { id: 'a', text: 'They require different treatment — antifungals (± surgery) vs antibiotics' },
        { id: 'b', text: 'Only one of them causes swelling' },
        { id: 'c', text: 'They occur on different continents only' },
        { id: 'd', text: 'One is contagious and the other is not' },
      ],
      answerId: 'a',
      explanation: 'Eumycetoma is caused by true fungi (treated with prolonged antifungals and often surgery), whereas actinomycetoma is caused by filamentous bacteria such as Nocardia (treated with antibiotics like co-trimoxazole, often curable). Classifying the grains determines the correct therapy.',
      tests: 'treatment',
    },
  ],

  figures: [],
};

export default mycetomaEumycetoma;
