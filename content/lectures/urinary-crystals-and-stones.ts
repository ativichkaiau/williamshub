import type { Lecture } from '../../lib/types';
import { URINARY_STONES } from '../../lib/figures';

export const urinaryCrystalsAndStones: Lecture = {
  id: 'urinary-crystals-and-stones',
  title: 'Urinary Crystals & Kidney Stones',
  system: 'renal',
  source: 'L10 — Urinalysis II: Urine Sediment',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L10 Urinalysis II' },
    { kind: 'disease', label: 'Nephrolithiasis' },
    { kind: 'exam', label: 'Stone types & pH' },
  ],

  highYield: [
    '**Crystals form when urine becomes SUPERSATURATED with a solute, and their type depends heavily on urine pH — so crystals on microscopy hint at stone risk and metabolic state.** Stones (nephrolithiasis) form the same way and present with **severe colicky loin-to-groin pain and haematuria** as they pass down the ureter.',
    '**Calcium stones (calcium oxalate ± phosphate) are the COMMONEST (~80%), often from hypercalciuria; oxalate crystals look like "envelopes"/dumbbells.** They form across a range of pH. **Thiazide diuretics reduce urinary calcium** and are used to prevent recurrent calcium stones (contrast loop diuretics, which increase calcium excretion).',
    'pH-defined stones: STRUVITE (magnesium-ammonium-phosphate) forms in ALKALINE urine made by UREASE-producing bacteria (Proteus) — the "coffin-lid" crystal and large STAGHORN calculi (an infection stone). URIC ACID stones form in ACID urine (gout, high purine turnover) and are RADIOLUCENT. CYSTINE stones (hexagonal crystals) occur in hereditary cystinuria.',
    '**Stones lodge at the three ureteric narrowings (pelvi-ureteric junction, pelvic brim/iliac vessels, vesico-ureteric junction).** Most are radio-opaque on X-ray/CT; **uric acid stones are the classic radiolucent exception** (seen on CT, not plain film). Obstruction can cause hydronephrosis and post-renal AKI ([[acute-kidney-injury-azotemia]]).',
    '**Prevention targets the mechanism: high fluid intake for all; thiazides for calcium stones; urine alkalinisation (± allopurinol) for uric acid and cystine stones; and treating the infection/removing the stone for struvite.** Benign findings such as amorphous urates (acid urine) or amorphous/triple phosphate (alkaline urine) are common and usually not pathological.',
  ],

  mechanism: {
    title: 'Supersaturation + pH → crystals/stones; type-specific prevention',
    steps: [
      { id: 's1', label: 'Supersaturation (low volume, pH, ↑solute) → crystals/stones', emphasis: 'key' },
      { id: 's2', label: 'Calcium oxalate/PO₄ = commonest (~80%); thiazides ↓urinary Ca²⁺', emphasis: 'key' },
      { id: 's3', label: 'Struvite = ALKALINE, urease bacteria (Proteus) → staghorn (infection stone)', emphasis: 'key' },
      { id: 's4', label: 'Uric acid = ACID + radiolucent; cystine = hexagonal (cystinuria)', emphasis: 'key' },
      { id: 's5', label: 'Colic + haematuria; obstruction → hydronephrosis/AKI; hydrate to prevent', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Envelope-shaped crystals; commonest stone', mechanism: 'Calcium oxalate', significance: 'key' },
    { sign: '"Coffin-lid" crystals + staghorn calculus in alkaline urine', mechanism: 'Struvite (urease-producing bacteria — infection stone)', significance: 'key' },
    { sign: 'Radiolucent stone in acidic urine with gout', mechanism: 'Uric acid stone', significance: 'key' },
    { sign: 'Hexagonal crystals in a child', mechanism: 'Cystine (hereditary cystinuria)', significance: 'supportive' },
    { sign: 'Severe colicky loin-to-groin pain + haematuria', mechanism: 'Ureteric stone passing', significance: 'key' },
  ],

  investigations: [
    { clue: 'The commonest kidney stone type', meaning: 'Calcium oxalate (± phosphate)' },
    { clue: 'The stone associated with urease-producing bacteria and alkaline urine', meaning: 'Struvite (magnesium-ammonium-phosphate; staghorn)' },
    { clue: 'The classic radiolucent stone', meaning: 'Uric acid stone (acidic urine)' },
    { clue: 'The diuretic used to prevent recurrent calcium stones', meaning: 'Thiazide (reduces urinary calcium)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Stone prevention is mechanism-based (hydration; thiazides for calcium — see [[renal-calcium-phosphate-handling]]; urine alkalinisation/allopurinol for uric acid; treat infection for struvite). Crystals extend the sediment analysis of [[urine-microscopy-sediment]]; urine pH and constituents come from [[urinalysis-physical-chemical]] and [[urine-biochemical-composition]]. Obstruction causes the post-renal AKI of [[acute-kidney-injury-azotemia]].' },
  ],

  mnemonics: [
    { hook: 'Stones by pH: "Struvite = alkaline (staghorn/infection); Uric acid = acid (radiolucent)"', expansion: ['Calcium oxalate = commonest, envelope', 'Cystine = hexagonal (hereditary)'] },
    { hook: 'Calcium stones: "thiazide Takes calcium back (↓urine Ca); loop Loses it"', expansion: ['Thiazide = prevent Ca stones', 'Hydration for all stones'] },
  ],

  traps: [
    {
      questionCategory: 'Radiological visibility of stones',
      wrongInstinct: 'All kidney stones are radio-opaque and visible on a plain X-ray',
      rightAnswer: 'Most stones are radio-opaque, but URIC ACID stones are classically RADIOLUCENT and are missed on plain X-ray (they are seen on CT) — the acidic-urine, gout-associated stone',
      why: 'Assuming a negative plain film excludes stones misses radiolucent uric acid calculi; knowing the exception directs you to CT and hints at the underlying acid urine/purine metabolism.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A large staghorn calculus forming in alkaline urine in a patient with recurrent Proteus urinary infections is most likely composed of:',
      options: [
        { id: 'a', text: 'Uric acid' },
        { id: 'b', text: 'Struvite (magnesium-ammonium-phosphate)' },
        { id: 'c', text: 'Cystine' },
        { id: 'd', text: 'Pure calcium oxalate' },
      ],
      answerId: 'b',
      explanation: 'Urease-producing organisms such as Proteus alkalinise the urine, favouring struvite (magnesium-ammonium-phosphate) stones, which grow into large staghorn calculi — infection stones requiring treatment of the infection and stone removal.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which stone is characteristically radiolucent and forms in acidic urine?',
      options: [
        { id: 'a', text: 'Calcium oxalate' },
        { id: 'b', text: 'Uric acid' },
        { id: 'c', text: 'Struvite' },
        { id: 'd', text: 'Calcium phosphate' },
      ],
      answerId: 'b',
      explanation: 'Uric acid stones form in acidic urine (gout, high purine turnover) and are radiolucent on plain X-ray (visible on CT). Calcium-containing and struvite stones are radio-opaque.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Urinary crystals & stones', svg: URINARY_STONES, caption: 'Stone types by pH, crystal appearance, radiological visibility, and mechanism-based prevention.' },
  ],
};

export default urinaryCrystalsAndStones;
