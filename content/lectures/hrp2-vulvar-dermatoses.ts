import type { Lecture } from '../../lib/types';

export const hrp2VulvarDermatoses: Lecture = {
  id: 'hrp2-vulvar-dermatoses',
  title: 'Non-neoplastic Vulvar & Vaginal Conditions',
  system: 'repro',
  source: 'L1 — Vulvovaginitis & Vaginal Discharge',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'L1 Vaginal Discharge' },
    { kind: 'disease', label: 'Lichen sclerosus · atrophic vaginitis' },
    { kind: 'mechanism', label: 'Oestrogen loss · chronic irritation' },
    { kind: 'treatment', label: 'Topical steroid · oestrogen' },
  ],

  highYield: [
    '**Lichen sclerosus:** white, thin, atrophic “parchment/figure-of-eight” vulvar skin with intense **pruritus**; a non-neoplastic dermatosis carrying a **small risk of vulvar SCC** → potent **topical corticosteroid** + follow-up.',
    '**Atrophic vaginitis** (postmenopausal oestrogen deficiency): dry, thin, pale vaginal mucosa with **dyspareunia, spotting** and a **raised pH** (loss of lactobacilli) — treat **topical oestrogen**.',
    '**Lichen simplex chronicus** = thickened, leathery skin from chronic scratching (itch–scratch cycle). **Contact/irritant dermatitis** from soaps, hygiene products, incontinence.',
    '**Bartholin cyst/abscess** = obstruction of the Bartholin duct → a tender posterolateral labial swelling (abscess if infected). Not a dermatosis but a common vulvar lump — treat with **incision/marsupialisation**.',
  ],

  mechanism: {
    title: 'Dermatoses, atrophy and duct obstruction',
    steps: [
      { id: 's1', label: 'Lichen sclerosus → atrophic white skin (small SCC risk)', emphasis: 'key' },
      { id: 's2', label: 'Oestrogen loss → atrophic vaginitis (raised pH)', emphasis: 'key' },
      { id: 's3', label: 'Chronic scratching → lichen simplex chronicus' },
      { id: 's4', label: 'Bartholin duct obstruction → cyst/abscess' },
    ],
  },

  examFindings: [
    { sign: 'White atrophic pruritic vulva', mechanism: 'Lichen sclerosus', significance: 'key' },
    { sign: 'Dry, pale vaginal mucosa + dyspareunia + raised pH', mechanism: 'Postmenopausal atrophic vaginitis', significance: 'key' },
    { sign: 'Thick leathery vulvar skin', mechanism: 'Lichen simplex chronicus (scratching)', significance: 'supportive' },
    { sign: 'Tender posterolateral labial swelling', mechanism: 'Bartholin abscess', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Postmenopausal woman with dyspareunia and vaginal dryness', meaning: 'Atrophic vaginitis → topical oestrogen' },
    { clue: 'White pruritic vulval plaques with a new ulcer', meaning: 'Lichen sclerosus with possible SCC → biopsy' },
    { clue: 'Painful fluctuant swelling at the posterior labia', meaning: 'Bartholin abscess → drainage/marsupialisation' },
    { clue: 'Chronic vulval itch with thickened skin', meaning: 'Lichen simplex chronicus' },
  ],

  treatment: [
    { logic: 'Topical therapy by cause', detail: 'Potent topical steroid for lichen sclerosus (+ surveillance); topical oestrogen for atrophic vaginitis; break the itch–scratch cycle for lichen simplex.' },
  ],

  mnemonics: [
    { hook: 'Lichen scleroSus = white, thin, Small cancer risk; Atrophic = dry + high pH', expansion: ['Topical steroid vs topical oestrogen'] },
  ],

  traps: [
    {
      questionCategory: 'Atrophic vaginitis vs infection',
      wrongInstinct: 'A raised vaginal pH in a postmenopausal woman must mean bacterial vaginosis',
      rightAnswer: 'Postmenopausal atrophic vaginitis also raises pH (loss of lactobacilli) and responds to topical oestrogen',
      why: 'Oestrogen deficiency depletes lactobacilli, raising pH without infection — the clinical picture (dryness, dyspareunia) distinguishes it.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A postmenopausal woman has vaginal dryness, dyspareunia, and a pale thin vaginal mucosa with pH 5.5. The best treatment is:',
      options: [
        { id: 'a', text: 'Oral metronidazole' },
        { id: 'b', text: 'Topical (vaginal) oestrogen' },
        { id: 'c', text: 'Fluconazole' },
        { id: 'd', text: 'Topical antifungal' },
      ],
      answerId: 'b',
      explanation: 'This is atrophic vaginitis from oestrogen deficiency; topical oestrogen restores the epithelium and lactobacilli, relieving symptoms.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'Which vulvar condition is non-neoplastic but carries a small risk of squamous cell carcinoma and needs follow-up?',
      options: [
        { id: 'a', text: 'Contact dermatitis' },
        { id: 'b', text: 'Lichen sclerosus' },
        { id: 'c', text: 'Bartholin cyst' },
        { id: 'd', text: 'Atrophic vaginitis' },
      ],
      answerId: 'b',
      explanation: 'Lichen sclerosus is a benign dermatosis but has a small associated risk of vulvar squamous cell carcinoma, warranting surveillance.',
      tests: 'exam',
    },
  ],
};

export default hrp2VulvarDermatoses;
