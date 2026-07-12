import type { Lecture } from '../../lib/types';

export const hrp2Vulvovaginitis: Lecture = {
  id: 'hrp2-vulvovaginitis',
  title: 'Vulvovaginitis & Vaginal Discharge',
  system: 'repro',
  source: 'L1 — Vulvovaginitis & Vaginal Discharge',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'L1 Vaginal Discharge' },
    { kind: 'disease', label: 'Vaginitis' },
    { kind: 'mechanism', label: 'Lactobacilli & pH' },
    { kind: 'investigation', label: 'pH · whiff · wet mount' },
    { kind: 'treatment', label: 'Metronidazole / azoles' },
  ],

  highYield: [
    '**Normal flora = lactobacilli** producing lactic acid → **acidic vaginal pH (3.8–4.5)**; loss of lactobacilli lets pathogens overgrow. Approach any discharge with **pH, whiff (amine) test, and wet mount**.',
    '**Bacterial vaginosis (BV):** overgrowth of **Gardnerella**/anaerobes (not true inflammation). **Thin grey homogeneous** discharge, **fishy odour**, **pH > 4.5**, **positive whiff test**, **clue cells** on wet mount (Amsel criteria). Treat **metronidazole**.',
    '**Vulvovaginal candidiasis:** Candida albicans. **Thick “cottage-cheese” white** discharge, **itch/erythema**, **normal pH (< 4.5)**, **pseudohyphae/budding yeast** on KOH. Treat topical/oral **azole (fluconazole)**; risk with diabetes, antibiotics, pregnancy.',
    '**Trichomoniasis:** Trichomonas vaginalis (**STI**, flagellated protozoan). **Frothy yellow-green** discharge, **pruritus**, **pH > 4.5**, **“strawberry cervix”**, **motile trichomonads** on wet mount. Treat **metronidazole — and the partner**.',
    '**Quick discriminator:** **normal pH → candida**; **high pH → BV or trichomonas** (BV has clue cells + fishy odour; trich has motile organisms + strawberry cervix). BV and trichomoniasis in pregnancy are linked to **preterm birth**.',
  ],

  mechanism: {
    title: 'Lose the lactobacilli → overgrowth → discharge',
    steps: [
      { id: 's1', label: 'Lactobacilli keep pH acidic (3.8–4.5)', emphasis: 'key' },
      { id: 's2', label: 'Disturbance (antibiotics, douching, sex) depletes them' },
      { id: 's3', label: 'Anaerobes (BV) or Candida or Trichomonas overgrow', emphasis: 'key' },
      { id: 's4', label: 'Characteristic discharge + pH change' },
      { id: 's5', label: 'Diagnose by pH, whiff test, wet mount/KOH', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Clue cells + fishy odour + pH > 4.5', mechanism: 'Bacterial vaginosis (Gardnerella/anaerobes)', significance: 'key' },
    { sign: 'Cottage-cheese discharge + normal pH + pseudohyphae', mechanism: 'Candida — normal pH is the giveaway', significance: 'key' },
    { sign: 'Frothy green discharge + strawberry cervix + motile organisms', mechanism: 'Trichomonas vaginalis (an STI)', significance: 'key' },
    { sign: 'Positive whiff (amine) test', mechanism: 'Release of amines on KOH — BV (or trich)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Thin grey discharge, pH 5.0, positive whiff, clue cells', meaning: 'Bacterial vaginosis → metronidazole' },
    { clue: 'Itchy white curd-like discharge, pH 4.2, pseudohyphae on KOH', meaning: 'Vulvovaginal candidiasis → azole' },
    { clue: 'Frothy yellow-green discharge, pH 6.0, motile flagellates', meaning: 'Trichomoniasis → metronidazole + treat partner' },
    { clue: 'Recurrent candidiasis in a young woman', meaning: 'Screen for diabetes / immunosuppression' },
  ],

  treatment: [
    { logic: 'Metronidazole for BV and trichomoniasis', detail: 'Trichomoniasis is an STI — treat the partner and screen for other STIs. BV is not sexually transmitted.' },
    { logic: 'Azole for candidiasis', detail: 'Topical or oral fluconazole; address predisposing factors (diabetes, antibiotics).' },
  ],

  mnemonics: [
    { hook: 'Normal pH → Candida; High pH → BV / Trich', expansion: ['BV: Clue cells + fishy', 'Trich: motile + Strawberry cervix'] },
    { hook: 'Amsel: pH>4.5, whiff+, clue cells, thin grey discharge (3 of 4 = BV)', expansion: ['Clue cells are epithelial cells coated with bacteria'] },
  ],

  traps: [
    {
      questionCategory: 'Which vaginitis by pH',
      wrongInstinct: 'A high vaginal pH points to candidiasis',
      rightAnswer: 'Candida keeps a NORMAL pH; a raised pH suggests BV or trichomoniasis',
      why: 'Candida does not deplete lactobacilli/raise pH; BV and trichomonas do — pH is a fast discriminator.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A woman has a thin grey vaginal discharge with a fishy odour; vaginal pH is 5.0 and wet mount shows epithelial cells studded with bacteria. The diagnosis and treatment are:',
      options: [
        { id: 'a', text: 'Candidiasis — fluconazole' },
        { id: 'b', text: 'Bacterial vaginosis — metronidazole' },
        { id: 'c', text: 'Trichomoniasis — doxycycline' },
        { id: 'd', text: 'Gonorrhoea — ceftriaxone' },
      ],
      answerId: 'b',
      explanation: 'Thin grey discharge, fishy odour, pH > 4.5 and clue cells are Amsel criteria for bacterial vaginosis, treated with metronidazole.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A frothy yellow-green discharge with a “strawberry cervix” and motile flagellated organisms on wet mount indicates:',
      options: [
        { id: 'a', text: 'Bacterial vaginosis' },
        { id: 'b', text: 'Candidiasis' },
        { id: 'c', text: 'Trichomoniasis' },
        { id: 'd', text: 'Atrophic vaginitis' },
      ],
      answerId: 'c',
      explanation: 'Frothy green discharge, punctate cervical haemorrhages (strawberry cervix) and motile trichomonads are classic for Trichomonas vaginalis, a sexually transmitted protozoan.',
      tests: 'disease',
    },
    {
      id: 'q3',
      stem: 'Which feature most reliably distinguishes vulvovaginal candidiasis from the other common causes of vaginitis?',
      options: [
        { id: 'a', text: 'A normal vaginal pH (< 4.5)' },
        { id: 'b', text: 'A positive whiff test' },
        { id: 'c', text: 'Clue cells' },
        { id: 'd', text: 'A raised pH' },
      ],
      answerId: 'a',
      explanation: 'Candida does not deplete lactobacilli, so the pH stays normal (< 4.5). BV and trichomoniasis both raise the pH above 4.5.',
      tests: 'exam',
    },
  ],
};

export default hrp2Vulvovaginitis;
