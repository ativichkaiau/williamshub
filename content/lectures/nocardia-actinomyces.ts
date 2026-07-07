import type { Lecture } from '../../lib/types';

export const nocardiaActinomyces: Lecture = {
  id: 'nocardia-actinomyces',
  title: 'Nocardia & Actinomyces',
  system: 'microbiology',
  source: 'L18 — Mycobacteria, Nocardia & Actinomyces',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Micro' },
    { kind: 'lecture', label: 'L18 Filamentous bacteria' },
    { kind: 'mechanism', label: 'Branching filaments; aerobic vs anaerobic' },
    { kind: 'exam', label: 'Nocardia acid-fast/soil vs Actinomyces sulfur granules' },
  ],

  highYield: [
    'Nocardia and Actinomyces are both FILAMENTOUS, BRANCHING Gram-positive rods that superficially resemble fungi but are BACTERIA — and they are a classic contrasting pair, separated by oxygen requirement, acid-fastness and habitat.',
    'NOCARDIA is AEROBIC, WEAKLY/PARTIALLY ACID-FAST, and environmental (SOIL) — acquired by INHALATION or skin inoculation. It mainly affects the IMMUNOCOMPROMISED (steroids, transplant, HIV, malignancy), causing a subacute pulmonary infection (cavitary pneumonia) that characteristically DISSEMINATES to the BRAIN (abscesses) and skin. Treatment is CO-TRIMOXAZOLE (sulfonamide-based), often prolonged.',
    'ACTINOMYCES (e.g. A. israelii) is ANAEROBIC, NOT acid-fast, and part of NORMAL ORAL/GI/genital FLORA — it causes ENDOGENOUS infection after mucosal breach (dental work, trauma, IUDs). Cervicofacial actinomycosis ("lumpy jaw") forms chronic draining SINUS TRACTS discharging SULFUR GRANULES (yellow microcolonies). It is exquisitely PENICILLIN-sensitive (prolonged high-dose).',
    'The contrast is the exam core: NOCARDia = aerobic, acid-fast, soil/inhaled, immunocompromised, pulmonary→brain, treat CO-TRIMOXAZOLE; ACTINOMYCES = anaerobic, non-acid-fast, oral flora/endogenous, sulfur granules/sinus tracts, treat PENICILLIN. (SNAP: Sulfa for Nocardia, Actinomyces Penicillin.)',
    '**The take-home: branching filamentous Gram-positive bacteria. NOCARDIA = AEROBIC, acid-fast, SOIL/inhaled → immunocompromised pulmonary + BRAIN abscess → CO-TRIMOXAZOLE. ACTINOMYCES = ANAEROBIC, non-acid-fast, ORAL flora → "lumpy jaw", SULFUR GRANULES, sinus tracts → PENICILLIN.** Mycobacteria (also acid-fast) are [[mycobacterium-tuberculosis-leprae]]; anaerobes are [[bacteroides-gram-negative-anaerobes]].',
  ],

  mechanism: {
    title: 'Branching filaments: Nocardia (aerobic, acid-fast, soil/inhaled → immunocompromised pulmonary + brain abscess → co-trimoxazole) vs Actinomyces (anaerobic, non-acid-fast, oral flora → lumpy jaw/sulfur granules → penicillin)',
    steps: [
      { id: 's1', label: 'Both = filamentous, branching Gram-positive rods (look fungal, are bacteria)', emphasis: 'key' },
      { id: 's2', label: 'Nocardia: AEROBIC, partially ACID-FAST, soil/inhaled', emphasis: 'key' },
      { id: 's3', label: 'Nocardia → immunocompromised pulmonary infection → BRAIN abscess; co-trimoxazole', emphasis: 'danger' },
      { id: 's4', label: 'Actinomyces: ANAEROBIC, non-acid-fast, oral/GI flora → endogenous after mucosal breach', emphasis: 'key' },
      { id: 's5', label: 'Actinomyces → "lumpy jaw", sinus tracts, SULFUR GRANULES → penicillin', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Cavitary pneumonia with brain abscesses in a transplant/steroid patient', mechanism: 'Nocardia (aerobic, disseminates to brain)', significance: 'key' },
    { sign: 'Partially acid-fast branching filaments from soil exposure', mechanism: 'Nocardia', significance: 'key' },
    { sign: 'Chronic jaw mass with draining sinuses and yellow "sulfur granules"', mechanism: 'Cervicofacial actinomycosis', significance: 'key' },
    { sign: 'Pelvic actinomycosis associated with a long-standing IUD', mechanism: 'Actinomyces (endogenous, mucosal breach)', significance: 'supportive' },
    { sign: 'A non-acid-fast anaerobic branching organism sensitive to penicillin', mechanism: 'Actinomyces', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The aerobic, partially acid-fast, soil filamentous bacterium', meaning: 'Nocardia' },
    { clue: 'The anaerobic, non-acid-fast oral-flora filamentous bacterium', meaning: 'Actinomyces' },
    { clue: 'The discharge containing yellow microcolonies in actinomycosis', meaning: 'Sulfur granules' },
    { clue: 'The treatments (SNAP)', meaning: 'Sulfonamides (Nocardia); Penicillin (Actinomyces)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Nocardia and Actinomyces are branching filamentous bacteria distinguished by oxygen requirement, acid-fastness, habitat and treatment: Nocardia (aerobic, partially acid-fast, soil-derived) causes pulmonary infection that spreads to the brain in the immunocompromised and needs co-trimoxazole, whereas Actinomyces (anaerobic, non-acid-fast, oral flora) causes "lumpy jaw" with sulfur-granule-discharging sinus tracts after mucosal breach and is treated with prolonged penicillin. The SNAP mnemonic captures the therapy. Mycobacteria are [[mycobacterium-tuberculosis-leprae]]; anaerobes are [[bacteroides-gram-negative-anaerobes]].' },
  ],

  mnemonics: [
    { hook: '"SNAP": Sulfonamides for Nocardia; Actinomyces → Penicillin', expansion: ['Nocardia = Aerobic/Acid-fast/soil', 'Actinomyces = Anaerobic/oral/sulfur granules'] },
    { hook: '"Nocardia → brain abscess (immunocompromised); Actinomyces → lumpy jaw"', expansion: ['Both branching filaments', 'Sulfur granules = Actinomyces'] },
  ],

  traps: [
    {
      questionCategory: 'Distinguishing Nocardia from Actinomyces',
      wrongInstinct: 'Nocardia and Actinomyces are basically interchangeable branching bacteria treated the same way',
      rightAnswer: 'They are an OPPOSING pair: NOCARDIA is AEROBIC, partially ACID-FAST, from SOIL (inhaled), affects the IMMUNOCOMPROMISED with pulmonary→BRAIN disease, and is treated with CO-TRIMOXAZOLE; ACTINOMYCES is ANAEROBIC, NON-acid-fast, part of ORAL flora, causes endogenous "lumpy jaw" with SULFUR GRANULES/sinus tracts, and is treated with PENICILLIN — so oxygen, acid-fastness, habitat and drug all differ',
      why: 'Confusing them leads to the wrong drug (sulfonamide vs penicillin) and misjudged setting (immunocompromised soil exposure vs post-dental oral flora); the aerobic/acid-fast vs anaerobic/sulfur-granule contrast is the discriminator.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An immunocompromised transplant patient develops cavitary pneumonia and brain abscesses; sputum shows aerobic, weakly acid-fast branching filaments. The organism and treatment are:',
      options: [
        { id: 'a', text: 'Nocardia; co-trimoxazole' },
        { id: 'b', text: 'Actinomyces; penicillin' },
        { id: 'c', text: 'M. tuberculosis; RIPE' },
        { id: 'd', text: 'Aspergillus; voriconazole' },
      ],
      answerId: 'a',
      explanation: 'Nocardia is aerobic, partially acid-fast and soil-derived; it causes pulmonary infection that disseminates to the brain in immunocompromised hosts and is treated with co-trimoxazole (sulfonamide-based). Actinomyces, by contrast, is anaerobic, non-acid-fast oral flora treated with penicillin.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Chronic cervicofacial infection ("lumpy jaw") with draining sinus tracts discharging yellow "sulfur granules" is caused by:',
      options: [
        { id: 'a', text: 'Actinomyces israelii (treated with penicillin)' },
        { id: 'b', text: 'Nocardia (treated with sulfonamides)' },
        { id: 'c', text: 'Mycobacterium leprae' },
        { id: 'd', text: 'Candida albicans' },
      ],
      answerId: 'a',
      explanation: 'Actinomyces (anaerobic, non-acid-fast oral flora) causes cervicofacial actinomycosis ("lumpy jaw") after mucosal breach, forming sinus tracts that discharge sulfur granules (yellow microcolonies); it is exquisitely sensitive to prolonged high-dose penicillin.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default nocardiaActinomyces;
