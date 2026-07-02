import type { Lecture } from '../../lib/types';

export const skinInfectionsBacterialFungalViral: Lecture = {
  id: 'skin-infections-bacterial-fungal-viral',
  title: 'Skin Infections: Bacterial, Fungal & Viral',
  system: 'derm',
  source: 'L7 — Skin Infections',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L7 Skin Infections' },
    { kind: 'mechanism', label: 'Pyoderma, dermatophytes, viral' },
    { kind: 'exam', label: 'Impetigo, cellulitis, tinea, HSV/VZV' },
  ],

  highYield: [
    '**BACTERIAL (pyoderma), usually Staphylococcus aureus/Streptococcus pyogenes: IMPETIGO (superficial — honey-coloured crusts, contagious, children); FOLLICULITIS/FURUNCLE/CARBUNCLE (follicular abscesses); ERYSIPELAS (sharply demarcated, raised, bright-red — upper dermis, strep) vs CELLULITIS (deeper dermis/subcutis, ill-defined, warm/tender). NECROTISING FASCIITIS is a surgical emergency (rapidly spreading, pain out of proportion, systemic toxicity → urgent debridement + antibiotics).**',
    '**FUNGAL — DERMATOPHYTES ("tinea/ringworm") cause annular scaly plaques with central clearing: tinea corporis (body), cruris (groin), pedis (foot/athlete\'s foot), capitis (scalp — children, can scar), unguium/onychomycosis (nail). Diagnose by KOH microscopy (hyphae). CANDIDA favours warm moist flexures (satellite pustules); PITYRIASIS (tinea) VERSICOLOR (Malassezia) gives hypo/hyperpigmented macules with fine scale ("spaghetti and meatballs" on KOH).**',
    '**VIRAL: HERPES SIMPLEX (grouped vesicles on an erythematous base, recurrent, orolabial/genital); VARICELLA-ZOSTER (chickenpox = generalised "dew-drop" vesicles in crops; zoster/shingles = dermatomal vesicles, painful, reactivation); WARTS (HPV — verrucae); MOLLUSCUM CONTAGIOSUM (poxvirus — umbilicated papules, children/HIV); hand-foot-and-mouth (coxsackie).**',
    '**Treatment matches the class: bacterial → topical (mupirocin) or systemic antibiotics (anti-staph/strep; consider MRSA); dermatophytes → topical azole/terbinafine, or ORAL terbinafine/griseofulvin for nails and scalp (topicals don\'t reach these); candida → topical/oral azoles; HSV/VZV → aciclovir/valaciclovir (early, and for zoster to reduce post-herpetic neuralgia). KOH, culture and (for viral) clinical/PCR aid diagnosis.**',
    '**The take-home: bacterial (impetigo honey crust; erysipelas sharp/superficial vs cellulitis deep/ill-defined; necrotising fasciitis = emergency); dermatophyte tinea (annular, KOH hyphae; oral drug for nails/scalp); candida (moist flexures); pityriasis versicolor (Malassezia); viral HSV (grouped vesicles), zoster (dermatomal), warts/molluscum.** The antifungal/antiviral drugs are in BCP ([[antifungal-agents]], [[antiviral-antiretroviral-agents]], [[antibacterial-cell-wall-agents]]); pediatric infections recur in [[pediatric-skin-diseases]].',
  ],

  mechanism: {
    title: 'Bacterial pyoderma (staph/strep) / dermatophyte & candida & Malassezia / viral (HSV, VZV, HPV, molluscum) — match therapy',
    steps: [
      { id: 's1', label: 'Bacterial: impetigo (honey crust), erysipelas (sharp, superficial) vs cellulitis (deep, ill-defined)', emphasis: 'key' },
      { id: 's2', label: 'Necrotising fasciitis = surgical emergency (pain out of proportion, toxicity)', emphasis: 'danger' },
      { id: 's3', label: 'Dermatophyte tinea = annular + central clearing, KOH hyphae; candida (flexures); versicolor (Malassezia)', emphasis: 'key' },
      { id: 's4', label: 'Viral: HSV (grouped vesicles), VZV (chickenpox crops / zoster dermatomal), warts, molluscum', emphasis: 'key' },
      { id: 's5', label: 'Oral antifungal for nails/scalp; aciclovir for HSV/VZV (early; zoster → ↓PHN)' },
    ],
  },

  examFindings: [
    { sign: 'Honey-coloured crusts on a child\'s face', mechanism: 'Impetigo (S. aureus/S. pyogenes)', significance: 'key' },
    { sign: 'Sharply demarcated, raised, bright-red facial plaque', mechanism: 'Erysipelas (superficial dermis, streptococcal)', significance: 'key' },
    { sign: 'Annular scaly plaque with central clearing, KOH shows hyphae', mechanism: 'Dermatophyte (tinea)', significance: 'key' },
    { sign: 'Painful dermatomal vesicles not crossing the midline', mechanism: 'Herpes zoster (VZV reactivation)', significance: 'key' },
    { sign: 'Rapidly spreading pain out of proportion with systemic toxicity', mechanism: 'Necrotising fasciitis (surgical emergency)', significance: 'key' },
  ],

  investigations: [
    { clue: 'The test showing hyphae in dermatophyte infection', meaning: 'KOH microscopy' },
    { clue: 'The difference between erysipelas and cellulitis', meaning: 'Erysipelas = superficial, sharply demarcated; cellulitis = deeper, ill-defined' },
    { clue: 'The infection with dermatomal grouped vesicles', meaning: 'Herpes zoster (shingles)' },
    { clue: 'Why nail/scalp fungal infection needs oral therapy', meaning: 'Topicals do not penetrate nail/hair adequately' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Correctly classifying a skin infection (bacterial vs fungal vs viral) and its depth directs therapy and urgency: impetigo/cellulitis → antibiotics (cover staph/strep ± MRSA), necrotising fasciitis → emergency surgery, dermatophytes → topical or oral antifungals (oral for nails/scalp — [[antifungal-agents]]), HSV/VZV → aciclovir ([[antiviral-antiretroviral-agents]]). KOH/culture confirm the organism; many of these present in children ([[pediatric-skin-diseases]]).' },
  ],

  mnemonics: [
    { hook: '"Impetigo = honey crust; Erysipelas = sharp/superficial; Cellulitis = deep/diffuse; Nec fasc = emergency"', expansion: ['Staph/strep', 'Pain out of proportion → nec fasc'] },
    { hook: '"Tinea = ring + KOH hyphae; oral drug for Nails/scalp"; HSV grouped, zoster dermatomal', expansion: ['Versicolor = Malassezia', 'Aciclovir early for zoster → ↓PHN'] },
  ],

  traps: [
    {
      questionCategory: 'Recognising necrotising fasciitis',
      wrongInstinct: 'Severe pain with only mild-looking overlying skin is just bad cellulitis that will settle on antibiotics',
      rightAnswer: 'PAIN OUT OF PROPORTION to the skin findings, rapid progression, systemic toxicity (fever, tachycardia), crepitus or skin necrosis suggests NECROTISING FASCIITIS — a SURGICAL EMERGENCY needing urgent DEBRIDEMENT plus broad-spectrum antibiotics, not antibiotics alone; delay is fatal',
      why: 'Necrotising fasciitis can look deceptively mild on the surface early on, so relying on skin appearance misses it; the disproportionate pain and systemic toxicity are the red flags mandating immediate surgery.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An annular scaly plaque with central clearing, and hyphae seen on KOH preparation, indicates:',
      options: [
        { id: 'a', text: 'Impetigo' },
        { id: 'b', text: 'A dermatophyte (tinea) infection' },
        { id: 'c', text: 'Herpes zoster' },
        { id: 'd', text: 'Molluscum contagiosum' },
      ],
      answerId: 'b',
      explanation: 'Dermatophyte (tinea/ringworm) infections produce annular, scaly plaques with central clearing and an advancing scaly border; KOH microscopy reveals hyphae. Nail (onychomycosis) and scalp (tinea capitis) infections require oral antifungal therapy because topicals do not penetrate adequately.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Erysipelas differs from cellulitis in that erysipelas:',
      options: [
        { id: 'a', text: 'Is deeper and has ill-defined borders' },
        { id: 'b', text: 'Is superficial (upper dermis) with sharply demarcated, raised borders' },
        { id: 'c', text: 'Is a fungal infection' },
        { id: 'd', text: 'Never involves the face' },
      ],
      answerId: 'b',
      explanation: 'Erysipelas involves the superficial dermis and lymphatics, producing a sharply demarcated, raised, bright-red plaque (often facial, usually streptococcal), whereas cellulitis extends into the deeper dermis and subcutis with ill-defined borders. Both are treated with anti-streptococcal/anti-staphylococcal antibiotics.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default skinInfectionsBacterialFungalViral;
