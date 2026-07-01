import type { Lecture } from '../../lib/types';

export const cushingManagementSteroidWithdrawal: Lecture = {
  id: 'cushing-management-steroid-withdrawal',
  title: 'Cushing Management & Steroid Withdrawal',
  system: 'endocrine',
  source: 'L4 — Cushing Syndrome',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'L4 Cushing Syndrome' },
    { kind: 'disease', label: 'Treatment / HPA recovery' },
    { kind: 'mechanism', label: 'Stress dosing' },
    { kind: 'exam', label: 'Perioperative steroids' },
  ],

  highYield: [
    '**Definitive treatment is surgical resection of the source** (transsphenoidal for Cushing disease; adrenalectomy for adrenal tumors). Adjuncts: radiation and **steroidogenesis inhibitors — ketoconazole, metyrapone, osilodrostat** — or the glucocorticoid-receptor blocker **mifepristone**.',
    '**After curative pituitary surgery the remaining corticotrophs are suppressed** → the patient is transiently **cortisol-deficient**. Give **perioperative/post-op hydrocortisone cover**, then taper to maintenance over days. A successful operation is confirmed by a **9 AM cortisol <1.8 µg/dL** after omitting hydrocortisone.',
    '**HPA-axis recovery is monitored on morning cortisol (dose omitted)**: **<7.5 µg/dL → continue replacement**; **>18 µg/dL → replacement can stop**; **7.5–18 µg/dL → use an ACTH-stimulation test** to check stress reserve.',
    '**Chronic exogenous steroids must be tapered, never stopped abruptly** — the atrophic adrenals cannot respond, risking an **adrenal crisis**. Withdrawal steps: wean to a physiologic dose → supplement until baseline HPA recovers → cover for stress until the stress response returns.',
    '**Stress/sick-day dosing**: minor illness → **increase glucocorticoid 2–3×** for a few days; **severe illness/major surgery → hydrocortisone 100 mg IV, repeated (e.g. q8h for surgery), then halve daily** to maintenance. Minor procedures under local anesthesia need **no extra** steroid.',
  ],

  mechanism: {
    title: 'Treat the source, then safely restore the suppressed HPA axis',
    steps: [
      { id: 's1', label: 'Resect source ± steroidogenesis inhibitor (ketoconazole)', emphasis: 'key' },
      { id: 's2', label: 'Post-op: cover with hydrocortisone (corticotrophs suppressed)' },
      { id: 's3', label: 'Monitor morning cortisol → wean as HPA recovers' },
      { id: 's4', label: 'Abrupt withdrawal of chronic steroid → adrenal crisis', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: '9 AM cortisol <1.8 µg/dL after omitting hydrocortisone post-op', mechanism: 'Successful removal of the cortisol source', significance: 'key' },
    { sign: 'Shock/hypoglycemia after stopping long-term prednisolone', mechanism: 'Adrenal crisis from HPA suppression', significance: 'key' },
    { sign: 'Morning cortisol >18 µg/dL off replacement', mechanism: 'Recovered HPA axis — can stop steroids', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Morning cortisol with the dose omitted (serial, q3 months)', meaning: 'Tracks HPA-axis recovery' },
    { clue: 'ACTH-stimulation test when cortisol is 7.5–18', meaning: 'Confirms adequate stress response before stopping' },
  ],

  treatment: [
    { logic: 'Surgery first-line; medical therapy = steroidogenesis inhibitors', detail: 'Ketoconazole, metyrapone, osilodrostat; mifepristone blocks the receptor.' },
    { logic: 'Perioperative hydrocortisone then taper to maintenance', detail: 'Corticotrophs are suppressed after cure.' },
    { logic: 'Sick-day rules: 2–3× for minor illness, 100 mg IV for major stress', detail: 'Never stop chronic steroids abruptly.' },
  ],

  mnemonics: [
    { hook: 'Never stop chronic steroids cold — taper or crash (adrenal crisis)', expansion: ['Atrophic adrenals cannot respond'] },
    { hook: 'Cortisol off-dose: <7.5 keep, >18 stop, in-between test with ACTH', expansion: ['HPA recovery thresholds'] },
  ],

  traps: [
    {
      questionCategory: 'Stopping long-term glucocorticoids',
      wrongInstinct: 'The Cushing features are from the steroid, so just stop the drug',
      rightAnswer: 'Taper gradually — chronic suppression atrophies the adrenals, and abrupt withdrawal precipitates an adrenal crisis; cover extra during illness/surgery',
      why: 'The HPA axis needs weeks–months to recover; sudden withdrawal leaves the patient unable to mount a cortisol response.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'After successful transsphenoidal removal of an ACTH-secreting adenoma, what is the expected early postoperative state and its management?',
      options: [
        { id: 'a', text: 'Cortisol excess persists; give a steroidogenesis inhibitor' },
        { id: 'b', text: 'Transient cortisol deficiency; give hydrocortisone cover and taper as the HPA axis recovers' },
        { id: 'c', text: 'No hormonal change; no treatment needed' },
        { id: 'd', text: 'Permanent diabetes insipidus requiring desmopressin' },
      ],
      answerId: 'b',
      explanation: 'Removing the cortisol source leaves the chronically suppressed normal corticotrophs unable to respond, causing transient adrenal insufficiency; patients need perioperative hydrocortisone with a taper guided by recovering morning cortisol.',
      tests: 'exam',
    },
  ],
};

export default cushingManagementSteroidWithdrawal;
