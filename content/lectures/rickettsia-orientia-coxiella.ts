import type { Lecture } from '../../lib/types';

export const rickettsiaOrientiaCoxiella: Lecture = {
  id: 'rickettsia-orientia-coxiella',
  title: 'Rickettsia, Orientia (Scrub Typhus) & Coxiella',
  system: 'microbiology',
  source: 'L17 — Rickettsia & Chlamydia',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Micro' },
    { kind: 'lecture', label: 'L17 Rickettsia' },
    { kind: 'mechanism', label: 'Obligate intracellular; vectors' },
    { kind: 'exam', label: 'Scrub typhus eschar (Thailand); doxycycline' },
  ],

  highYield: [
    'Rickettsiae and relatives are OBLIGATE INTRACELLULAR Gram-negative bacteria (cannot make enough ATP independently) transmitted by ARTHROPOD vectors, causing fever + HEADACHE + RASH with vasculitis (they infect ENDOTHELIUM). They are hard to Gram-stain/culture, diagnosed serologically/PCR, and — importantly — treated with DOXYCYCLINE (empirically, before confirmation).',
    'ORIENTIA TSUTSUGAMUSHI causes SCRUB TYPHUS — highly endemic in THAILAND and the "tsutsugamushi triangle" of Asia, transmitted by larval MITES (chiggers) in scrub vegetation. The classic clue is an inoculation ESCHAR (a black, painless scab at the bite) with regional lymphadenopathy, fever, headache and rash; complications include pneumonitis, meningoencephalitis and multi-organ failure. Doxycycline is dramatically effective — a low threshold to treat is essential in the endemic setting.',
    'Spotted-fever/typhus-group rickettsiae: R. RICKETTSII (Rocky Mountain spotted fever — ticks; rash spreads from wrists/ankles inward to palms/soles); *R. typhi* (murine/endemic typhus — fleas) and *R. prowazekii* (epidemic typhus — body lice, centrifugal rash). ANAPLASMA/EHRLICHIA (tick-borne, infect leukocytes → morulae, cytopenias). COXIELLA BURNETII causes Q FEVER (inhaled from livestock/parturient animals; no rash; atypical pneumonia/hepatitis, chronic endocarditis) — highly infectious, spore-like, no vector needed.',
    'So the pattern: obligate intracellular, vector-borne, endothelial-targeting → fever/headache/rash, empiric DOXYCYCLINE. In Thailand, SCRUB TYPHUS (mite bite, eschar, doxycycline) is the key player; RMSF (ticks, palms/soles), murine/epidemic typhus (fleas/lice), and Q fever (*Coxiella*, livestock, no rash) complete the group.',
    '**The take-home: obligate intracellular, arthropod-borne, endothelial → fever + headache + RASH; treat empirically with DOXYCYCLINE. SCRUB TYPHUS (Orientia, chigger MITE, ESCHAR — endemic Thailand). RMSF (tick, palms/soles). Murine/epidemic typhus (fleas/lice). COXIELLA/Q fever (inhaled from livestock, NO rash/vector, endocarditis).** *Chlamydia* (also intracellular) is [[chlamydia-species]]; oxygen/culture basics are [[bacterial-physiology-growth-identification]].',
  ],

  mechanism: {
    title: 'Obligate intracellular, arthropod-borne, endothelial → fever/headache/rash, empiric doxycycline; scrub typhus (Orientia, mite, eschar — Thailand); RMSF (tick, palms/soles); Coxiella/Q fever (inhaled, no rash)',
    steps: [
      { id: 's1', label: 'Obligate intracellular Gram-negative; arthropod vectors; infect endothelium', emphasis: 'key' },
      { id: 's2', label: 'Present with fever + headache + rash (vasculitis); empiric DOXYCYCLINE', emphasis: 'key' },
      { id: 's3', label: 'Scrub typhus (Orientia tsutsugamushi): mite/chigger, ESCHAR — endemic Thailand', emphasis: 'danger' },
      { id: 's4', label: 'RMSF (R. rickettsii, tick): rash wrists/ankles → palms/soles; typhus (fleas/lice)', emphasis: 'key' },
      { id: 's5', label: 'Coxiella burnetii (Q fever): inhaled from livestock, NO rash/vector, endocarditis', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Fever, headache, rash and a black painless eschar after scrub/vegetation exposure in Thailand', mechanism: 'Scrub typhus (Orientia, mite bite)', significance: 'key' },
    { sign: 'Rapid defervescence on doxycycline in a rickettsial illness', mechanism: 'Doxycycline is first-line', significance: 'key' },
    { sign: 'Rash beginning on wrists/ankles spreading to palms and soles', mechanism: 'Rocky Mountain spotted fever (R. rickettsii)', significance: 'key' },
    { sign: 'Atypical pneumonia/hepatitis without rash after livestock exposure', mechanism: 'Q fever (Coxiella burnetii)', significance: 'supportive' },
    { sign: 'Morulae in leukocytes with cytopenias after a tick bite', mechanism: 'Ehrlichia/Anaplasma', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The mite-borne rickettsiosis endemic in Thailand', meaning: 'Scrub typhus (Orientia tsutsugamushi)' },
    { clue: 'The classic skin clue of scrub typhus', meaning: 'An inoculation eschar' },
    { clue: 'The empiric drug for rickettsial disease', meaning: 'Doxycycline' },
    { clue: 'The rickettsial relative with no rash/vector causing Q fever', meaning: 'Coxiella burnetii' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Rickettsiae are obligate intracellular, vector-borne endothelial pathogens causing fever/headache/rash that respond dramatically to empiric doxycycline — started on clinical suspicion before serology confirms. In Thailand, scrub typhus (*Orientia*, chigger mite bite, inoculation eschar) is the crucial diagnosis, since untreated disease can be fatal and doxycycline is curative. RMSF (palms/soles), murine/epidemic typhus, *Ehrlichia*/*Anaplasma*, and *Coxiella* (Q fever — inhaled, no rash, endocarditis) complete the group. *Chlamydia* is [[chlamydia-species]].' },
  ],

  mnemonics: [
    { hook: '"Scrub typhus = mite + Eschar + Thailand → Doxycycline"', expansion: ['Orientia tsutsugamushi', 'Low threshold to treat'] },
    { hook: '"RMSF rash → palms/soles; Coxiella = Q fever (no rash, inhaled, endocarditis)"', expansion: ['All → empiric doxycycline', 'Obligate intracellular, endothelial'] },
  ],

  traps: [
    {
      questionCategory: 'Empiric treatment of suspected scrub typhus',
      wrongInstinct: 'You should wait for confirmatory serology before starting antibiotics for suspected scrub typhus',
      rightAnswer: 'Suspected rickettsial disease — especially SCRUB TYPHUS in an endemic area like Thailand (fever, headache, rash, an ESCHAR after scrub exposure) — should be treated EMPIRICALLY with DOXYCYCLINE WITHOUT waiting for serology, because serology is often negative early, the response to doxycycline is rapid and dramatic, and delayed treatment risks severe multi-organ disease and death',
      why: 'Rickettsial serology is insensitive early, so waiting for confirmation delays a cheap, curative, life-saving drug; empirical doxycycline on clinical suspicion is the standard of care in endemic regions.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A farmer in northern Thailand has fever, headache, a rash and a black painless eschar with regional lymphadenopathy after working in scrub vegetation. The most likely diagnosis and treatment is:',
      options: [
        { id: 'a', text: 'Scrub typhus (Orientia tsutsugamushi); doxycycline' },
        { id: 'b', text: 'Cholera; rehydration' },
        { id: 'c', text: 'Gonorrhoea; ceftriaxone' },
        { id: 'd', text: 'Q fever; no treatment' },
      ],
      answerId: 'a',
      explanation: 'Scrub typhus (Orientia tsutsugamushi), transmitted by larval mites (chiggers), is endemic in Thailand and classically presents with fever, headache, rash and an inoculation eschar. Empiric doxycycline is dramatically effective and should not be delayed for serology.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which rickettsial relative causes Q fever, is acquired by inhalation from livestock, and characteristically causes NO rash and no arthropod vector?',
      options: [
        { id: 'a', text: 'Coxiella burnetii' },
        { id: 'b', text: 'Rickettsia rickettsii' },
        { id: 'c', text: 'Orientia tsutsugamushi' },
        { id: 'd', text: 'Rickettsia prowazekii' },
      ],
      answerId: 'a',
      explanation: 'Coxiella burnetii causes Q fever, acquired by inhaling aerosols from parturient livestock (no arthropod vector needed); it characteristically causes atypical pneumonia/hepatitis WITHOUT a rash and can cause chronic culture-negative endocarditis. It is highly infectious and spore-like.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default rickettsiaOrientiaCoxiella;
