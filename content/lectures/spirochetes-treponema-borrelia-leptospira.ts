import type { Lecture } from '../../lib/types';

export const spirochetesTreponemaBorreliaLeptospira: Lecture = {
  id: 'spirochetes-treponema-borrelia-leptospira',
  title: 'Spirochetes: Treponema, Borrelia & Leptospira',
  system: 'microbiology',
  source: 'L19 — Spirochetes & Mycoplasma',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Micro' },
    { kind: 'lecture', label: 'L19 Spirochetes' },
    { kind: 'mechanism', label: 'Thin spirals; special diagnosis' },
    { kind: 'exam', label: 'Syphilis stages; Lyme; leptospirosis' },
  ],

  highYield: [
    'Spirochetes are thin, HELICAL/spiral bacteria too slender to see on light microscopy or Gram stain — needing DARKFIELD, silver stains, serology or PCR. Three genera matter: TREPONEMA (syphilis), BORRELIA (Lyme, relapsing fever) and LEPTOSPIRA (leptospirosis).',
    'TREPONEMA PALLIDUM causes SYPHILIS (STI; cannot be cultured — diagnosed by darkfield + serology: non-treponemal VDRL/RPR for screening/activity, treponemal TPHA/FTA-ABS for confirmation). Stages: PRIMARY = a PAINLESS CHANCRE; SECONDARY = diffuse rash (including PALMS/SOLES), condylomata lata, systemic; LATENT; TERTIARY = gummas, cardiovascular (aortitis), NEUROSYPHILIS (tabes dorsalis, Argyll Robertson pupil). CONGENITAL syphilis is preventable by treating the mother. Treatment = PENICILLIN (watch Jarisch-Herxheimer reaction).',
    'BORRELIA BURGDORFERI causes LYME disease (*Ixodes* TICK): early ERYTHEMA MIGRANS ("bull\'s-eye" rash) → disseminated (carditis/AV block, facial palsy, meningitis) → late (arthritis) — treat doxycycline/ceftriaxone. Other *Borrelia* cause RELAPSING FEVER (louse/tick-borne, antigenic variation → recurrent fevers). LEPTOSPIRA (*L. interrogans*) causes LEPTOSPIROSIS — a zoonosis from water/soil contaminated by rodent URINE (important in flooding, rice farming; relevant in Thailand): a flu-like phase then, in severe WEIL disease, jaundice + renal failure + haemorrhage; also conjunctival suffusion. Treat penicillin/doxycycline.',
    'So each spirochete has a signature: syphilis (painless chancre → palms/soles rash → tertiary; VDRL/penicillin), Lyme (tick, erythema migrans, arthritis/carditis), and leptospirosis (rodent-urine water exposure, Weil disease). All are diagnosed by special methods (darkfield/serology/PCR) because they resist routine staining/culture.',
    '**The take-home: thin spirals (need darkfield/serology). TREPONEMA/SYPHILIS: painless CHANCRE → palms/soles rash → tertiary/neurosyphilis; VDRL+TPHA; PENICILLIN. BORRELIA: Lyme (Ixodes tick, erythema migrans, carditis/arthritis) + relapsing fever. LEPTOSPIRA: rodent-urine water (Thailand/flooding) → Weil disease (jaundice/renal/haemorrhage).** *Mycoplasma* is [[mycoplasma-ureaplasma]]; syphilis serology parallels other STIs ([[chlamydia-species]]).',
  ],

  mechanism: {
    title: 'Thin spirals (darkfield/serology): Treponema/syphilis (chancre → palms/soles → tertiary; VDRL/penicillin); Borrelia (Lyme tick/erythema migrans; relapsing fever); Leptospira (rodent-urine water → Weil disease)',
    steps: [
      { id: 's1', label: 'Spirochetes = thin helical; invisible on light microscopy → darkfield/serology/PCR', emphasis: 'key' },
      { id: 's2', label: 'Syphilis: primary painless chancre → secondary rash (palms/soles) → latent → tertiary/neuro', emphasis: 'key' },
      { id: 's3', label: 'Syphilis dx: VDRL/RPR (screen/activity) + TPHA/FTA-ABS (confirm); treat PENICILLIN', emphasis: 'key' },
      { id: 's4', label: 'Borrelia: Lyme (Ixodes tick, erythema migrans → carditis/arthritis); relapsing fever', emphasis: 'key' },
      { id: 's5', label: 'Leptospira: rodent-urine water (flooding/farming) → Weil disease (jaundice/renal/haemorrhage)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'A single painless genital ulcer (chancre)', mechanism: 'Primary syphilis (T. pallidum)', significance: 'key' },
    { sign: 'A diffuse rash including the palms and soles with condylomata lata', mechanism: 'Secondary syphilis', significance: 'key' },
    { sign: 'A "bull\'s-eye" (target) rash after a tick bite', mechanism: 'Erythema migrans (Lyme disease)', significance: 'key' },
    { sign: 'Jaundice, renal failure and haemorrhage after floodwater exposure', mechanism: 'Severe leptospirosis (Weil disease)', significance: 'key' },
    { sign: 'Argyll Robertson pupil and tabes dorsalis years later', mechanism: 'Tertiary neurosyphilis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The screening vs confirmatory syphilis serology', meaning: 'VDRL/RPR (screen) + TPHA/FTA-ABS (confirm)' },
    { clue: 'The rash of primary vs secondary syphilis', meaning: 'Painless chancre; then palms/soles rash' },
    { clue: 'The tick-borne spirochete with erythema migrans', meaning: 'Borrelia burgdorferi (Lyme)' },
    { clue: 'The water/rodent-urine zoonosis causing Weil disease', meaning: 'Leptospirosis' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Spirochetes evade routine staining/culture, so diagnosis relies on darkfield, serology (syphilis: non-treponemal VDRL/RPR plus treponemal TPHA/FTA-ABS) and PCR. Syphilis progresses through recognisable stages (painless chancre → palms/soles rash → tertiary/neurosyphilis) and is treated with penicillin (watching for the Jarisch-Herxheimer reaction), with maternal treatment preventing congenital disease. Lyme (*Ixodes* tick, erythema migrans) is treated with doxycycline/ceftriaxone, and leptospirosis (rodent-urine water exposure, important in Thai flooding/farming) can cause Weil disease. *Mycoplasma* is [[mycoplasma-ureaplasma]].' },
  ],

  mnemonics: [
    { hook: 'Syphilis: "painless Chancre → palms/soles rash → Tertiary (gumma/neuro/aorta)"', expansion: ['VDRL screen + TPHA confirm', 'Penicillin (Herxheimer)'] },
    { hook: '"Lyme = tick + bull\'s-eye (erythema migrans); Lepto = rodent-urine water → Weil"', expansion: ['Borrelia relapsing fever = antigenic variation', 'Darkfield/serology (no routine culture)'] },
  ],

  traps: [
    {
      questionCategory: 'The painless syphilitic chancre',
      wrongInstinct: 'The genital ulcer of primary syphilis is painful, like most genital sores',
      rightAnswer: 'The primary syphilis lesion (CHANCRE) is classically a SINGLE, PAINLESS, indurated ulcer — the painlessness is a key discriminator from painful genital ulcers such as chancroid (Haemophilus ducreyi) or HSV; it heals spontaneously, so it is easily missed, and the disease then progresses to secondary/tertiary stages if untreated',
      why: 'Because the chancre is painless and self-healing, patients (and clinicians) may dismiss it, missing the window for simple penicillin cure; recognising a painless genital ulcer as possible syphilis is essential.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A diffuse maculopapular rash that notably involves the palms and soles, with condylomata lata, in a sexually active adult suggests:',
      options: [
        { id: 'a', text: 'Secondary syphilis' },
        { id: 'b', text: 'Lyme disease' },
        { id: 'c', text: 'Leptospirosis' },
        { id: 'd', text: 'Gonorrhoea' },
      ],
      answerId: 'a',
      explanation: 'Secondary syphilis produces a diffuse rash classically involving the palms and soles, with systemic features and condylomata lata. Diagnosis uses non-treponemal (VDRL/RPR) plus treponemal (TPHA/FTA-ABS) serology, and treatment is penicillin.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Severe leptospirosis (Weil disease), acquired from water contaminated with rodent urine, is characterised by:',
      options: [
        { id: 'a', text: 'Jaundice, acute kidney injury and haemorrhage' },
        { id: 'b', text: 'A painless genital chancre' },
        { id: 'c', text: 'A bull\'s-eye rash' },
        { id: 'd', text: 'Pseudomembranous colitis' },
      ],
      answerId: 'a',
      explanation: 'Leptospira interrogans, acquired from water/soil contaminated by rodent urine (important during flooding and rice farming), causes leptospirosis; the severe icteric form (Weil disease) features jaundice, acute kidney injury and haemorrhage, often with conjunctival suffusion.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default spirochetesTreponemaBorreliaLeptospira;
