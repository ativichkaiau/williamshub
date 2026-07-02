import type { Lecture } from '../../lib/types';

export const scabiesPediculosisClinical: Lecture = {
  id: 'scabies-pediculosis-clinical',
  title: 'Scabies & Pediculosis (Clinical)',
  system: 'derm',
  source: 'L8 — Infestations & Helminthic Infections',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L8 Scabies & Lice' },
    { kind: 'mechanism', label: 'Mite/louse life cycle & itch' },
    { kind: 'exam', label: 'Burrows; treat contacts; crusted scabies' },
  ],

  highYield: [
    '**SCABIES (Sarcoptes scabiei mite) causes intense PRURITUS, WORSE AT NIGHT, from a delayed HYPERSENSITIVITY to the mite/eggs/faeces — so itch can start ~weeks after infestation and persist for weeks AFTER successful treatment. The pathognomonic sign is the BURROW (thin grey line) in finger web spaces, wrists, axillae, periumbilical skin, genitals; in infants also palms/soles/scalp. Confirm by dermoscopy/skin scraping.**',
    '**TREATMENT: topical PERMETHRIN 5% (apply neck-down, whole body, wash off after ~8–12 h, repeat in a week) or oral IVERMECTIN. Crucially TREAT ALL close/household CONTACTS SIMULTANEOUSLY (even if asymptomatic) and LAUNDER bedding/clothing (hot wash) — otherwise re-infestation ("ping-pong"). Post-scabetic itch is treated with emollients/steroids, not more scabicide.**',
    '**CRUSTED (Norwegian) SCABIES: a hyperinfestation with THOUSANDS of mites (thick hyperkeratotic crusts, may be non-itchy) in the elderly/immunosuppressed — HIGHLY contagious (outbreaks in care homes) → combined topical + repeated oral ivermectin and strict infection control.**',
    '**PEDICULOSIS (lice): HEAD lice (nits cemented to hair shafts, children — permethrin/wet-combing); BODY lice (live in clothing seams; a vector of typhus/trench fever/relapsing fever — hygiene + treat clothing); PUBIC lice ("crabs", sexually transmitted — check for other STIs). Secondary bacterial infection from scratching is common in all infestations.**',
    '**The take-home: SCABIES = nocturnal itch + web-space BURROWS (delayed hypersensitivity — itch lingers post-treatment) → permethrin/ivermectin + treat ALL contacts + launder; CRUSTED scabies in the immunosuppressed (very contagious); LICE — head (nits), body (typhus vector), pubic (STI). Treat secondary infection.** The helminthic/overview infestations are in [[infestations-helminthic-skin]]; the anthelmintics/scabicides are BCP ([[anthelmintic-agents]]).',
  ],

  mechanism: {
    title: 'Scabies (mite, nocturnal itch + burrows, delayed hypersensitivity) → permethrin/ivermectin + treat contacts + launder; crusted (immunosuppressed); lice',
    steps: [
      { id: 's1', label: 'Scabies mite → delayed hypersensitivity → nocturnal itch (starts/persists weeks)', emphasis: 'key' },
      { id: 's2', label: 'Burrows in web spaces/wrists/genitals; confirm by dermoscopy/scraping', emphasis: 'key' },
      { id: 's3', label: 'Permethrin or ivermectin + treat ALL contacts simultaneously + launder (avoid ping-pong)', emphasis: 'key' },
      { id: 's4', label: 'Crusted (Norwegian) scabies = hyperinfestation in immunosuppressed (very contagious)', emphasis: 'danger' },
      { id: 's5', label: 'Lice: head (nits), body (typhus vector), pubic (STI); treat secondary infection' },
    ],
  },

  examFindings: [
    { sign: 'Nocturnal itch with grey burrows in finger web spaces', mechanism: 'Scabies (Sarcoptes scabiei)', significance: 'key' },
    { sign: 'Itch persisting weeks after correct scabies treatment', mechanism: 'Post-scabetic hypersensitivity (not treatment failure)', significance: 'key' },
    { sign: 'Thick hyperkeratotic crusts teeming with mites in an immunosuppressed patient', mechanism: 'Crusted (Norwegian) scabies', significance: 'key' },
    { sign: 'Nits cemented to scalp hair shafts', mechanism: 'Head lice (pediculosis capitis)', significance: 'key' },
    { sign: 'Body lice in clothing seams as a typhus vector', mechanism: 'Pediculosis corporis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The mite causing scabies', meaning: 'Sarcoptes scabiei' },
    { clue: 'Why scabies itch persists after treatment', meaning: 'Delayed hypersensitivity (post-scabetic itch)' },
    { clue: 'The essential step beyond treating the patient', meaning: 'Treat all close contacts + launder bedding/clothing' },
    { clue: 'The hyperinfestation form in the immunosuppressed', meaning: 'Crusted (Norwegian) scabies' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Scabies is cured only by treating the patient AND all close contacts simultaneously (plus laundering) — or it recurs — and by recognising that post-scabetic itch (delayed hypersensitivity) is not treatment failure. Crusted scabies is a highly contagious hyperinfestation needing ivermectin and infection control. Lice have distinct clinical/vector implications. Scabicides/anthelmintics are BCP ([[anthelmintic-agents]]); the broader infestations are [[infestations-helminthic-skin]].' },
  ],

  mnemonics: [
    { hook: 'Scabies: "night itch + web-space burrows → permethrin/ivermectin + treat ALL contacts + launder"', expansion: ['Itch persists post-treatment (hypersensitivity)', 'Crusted = immunosuppressed'] },
    { hook: 'Lice: "Head (nits), Body (typhus vector), Pubic (STI)"', expansion: ['Wet-combing head lice', 'Treat clothing for body lice'] },
  ],

  traps: [
    {
      questionCategory: 'Persistent itch after scabies treatment',
      wrongInstinct: 'If itching continues after scabies treatment, the treatment failed and needs immediate repeating',
      rightAnswer: 'Scabies itch is a DELAYED HYPERSENSITIVITY reaction, so it commonly PERSISTS for 2–4 WEEKS AFTER successful eradication — this is POST-SCABETIC itch, treated with emollients/topical steroids/antihistamines, NOT automatically more scabicide (over-treatment causes irritant dermatitis); re-treat only if there is evidence of ongoing/reinfestation',
      why: 'Because the itch lags the infestation and outlasts cure, assuming persistent itch means failure leads to unnecessary repeated scabicide and irritant dermatitis — the hypersensitivity nature must be recognised.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'When treating a patient for scabies, it is essential to also:',
      options: [
        { id: 'a', text: 'Treat only the patient and observe others' },
        { id: 'b', text: 'Treat all close/household contacts simultaneously and launder bedding/clothing' },
        { id: 'c', text: 'Give oral antibiotics to everyone' },
        { id: 'd', text: 'Avoid washing clothes' },
      ],
      answerId: 'b',
      explanation: 'All close/household contacts (even asymptomatic) must be treated simultaneously and bedding/clothing laundered, because the itch lags infestation and untreated contacts cause re-infestation ("ping-pong"). Post-scabetic itch afterward is managed with emollients/steroids, not more scabicide.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'Thick hyperkeratotic crusts containing thousands of mites, highly contagious, in an elderly immunosuppressed patient describe:',
      options: [
        { id: 'a', text: 'Classic scabies' },
        { id: 'b', text: 'Crusted (Norwegian) scabies' },
        { id: 'c', text: 'Head lice' },
        { id: 'd', text: 'Cutaneous larva migrans' },
      ],
      answerId: 'b',
      explanation: 'Crusted (Norwegian) scabies is a hyperinfestation with thousands of mites forming thick crusts (often less itchy) in the immunosuppressed/elderly; it is extremely contagious (care-home outbreaks) and requires combined topical plus repeated oral ivermectin and strict infection control.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default scabiesPediculosisClinical;
