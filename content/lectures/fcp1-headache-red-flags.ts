import type { Lecture } from '../../lib/types';

export const fcp1HeadacheRedFlags: Lecture = {
  id: 'fcp1-headache-red-flags',
  title: 'Headache Red Flags',
  system: 'clinical',
  source: 'L24 — Headache, Dizziness & Vertigo',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L24 Headache & Dizziness' },
    { kind: 'disease', label: 'SAH · meningitis · GCA' },
    { kind: 'mechanism', label: 'Secondary headache' },
    { kind: 'investigation', label: 'CT · LP · ESR' },
  ],

  highYield: [
    '**SNNOOP10** flags a secondary headache — **S**ystemic symptoms/fever, **N**euro deficit, sudden **O**nset (thunderclap), **O**lder age >50, **P**attern change, papilloedema, positional, precipitated by Valsalva, pregnancy, painful eye, post-trauma, immunosuppression — contrast the benign phenotypes → [[fcp1-headache-primary-secondary]].',
    '**Thunderclap headache** (maximal <1 min, “worst of life”) is **subarachnoid haemorrhage** until excluded → urgent **non-contrast CT**; if negative, **lumbar puncture for xanthochromia**.',
    '**Fever + headache + neck stiffness/photophobia = meningitis** → **give empirical antibiotics immediately**, never delaying treatment for CT or LP.',
    '**Raised ICP:** worse on waking, lying or Valsalva, with vomiting, **papilloedema** and transient visual obscurations → space-occupying lesion or venous sinus thrombosis; image.',
    '**Age >50 with a new headache**, jaw claudication, scalp tenderness and a raised **ESR** is **giant cell arteritis** → **high-dose steroids urgently** to save sight; overlaps [[fcp1-eye-vision-loss]].',
  ],

  mechanism: {
    title: 'Spotting the dangerous headache',
    steps: [
      { id: 's1', label: 'Thunderclap (peak <1 min) → suspect SAH', emphasis: 'danger' },
      { id: 's2', label: 'Fever + neck stiffness → meningitis, treat first', emphasis: 'danger' },
      { id: 's3', label: 'Papilloedema / posture-dependent → raised ICP', emphasis: 'danger' },
      { id: 's4', label: 'Age >50, jaw claudication, ↑ESR → GCA (save sight)', emphasis: 'danger' },
      { id: 's5', label: 'Any red flag → neuroimaging ± lumbar puncture', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Neck stiffness, Kernig/Brudzinski, photophobia', mechanism: 'Meningeal irritation (meningitis or SAH)', significance: 'key' },
    { sign: 'Papilloedema on fundoscopy', mechanism: 'Raised intracranial pressure', significance: 'key' },
    { sign: 'Tender, thickened, pulseless temporal artery', mechanism: 'Giant cell arteritis', significance: 'key' },
    { sign: 'Focal neurological deficit or reduced consciousness', mechanism: 'Structural / secondary cause', significance: 'key' },
  ],

  investigations: [
    { clue: 'Thunderclap headache', meaning: 'Urgent non-contrast CT head; if negative, LP for xanthochromia to exclude SAH' },
    { clue: 'Suspected meningitis', meaning: 'Blood cultures + empirical antibiotics at once; LP when safe (CT first if focal signs or reduced GCS)' },
    { clue: 'New headache age >50 with visual/jaw symptoms', meaning: 'ESR/CRP then temporal artery biopsy — but start steroids before the biopsy' },
    { clue: 'Papilloedema with a normal CT', meaning: 'LP with opening pressure — idiopathic intracranial hypertension or venous sinus thrombosis (CT/MR venogram)' },
  ],

  treatment: [
    { logic: 'Resuscitate and image before anything elective', detail: 'ABCs and neuro obs; suspected SAH → urgent neurosurgical/stroke referral, blood-pressure control and nimodipine.' },
    { logic: 'Meningitis: antibiotics before LP if any delay', detail: 'Empirical ceftriaxone (± ampicillin for Listeria at the extremes of age, ± steroids); do not wait for imaging to treat.' },
    { logic: 'GCA: immediate high-dose corticosteroids', detail: 'Start before the biopsy to prevent irreversible visual loss; do not wait for the ESR or biopsy result.' },
  ],

  mnemonics: [
    { hook: 'SNNOOP10 flags the secondary headache', expansion: ['Systemic/fever, Neuro deficit, sudden Onset', 'Older >50, Pattern change, Papilloedema', 'Positional, Valsalva, Pregnancy, Painful eye, Post-trauma, immunosuppression'] },
    { hook: 'Thunderclap = SAH until CT ± LP say otherwise', expansion: ['Peak <1 min, worst-ever', 'CT first', 'LP for xanthochromia if CT negative'] },
  ],

  traps: [
    {
      questionCategory: 'Meningitis workup',
      wrongInstinct: 'Always complete the CT and LP before giving antibiotics',
      rightAnswer: 'Give empirical antibiotics immediately in suspected bacterial meningitis; never let CT or LP delay the first dose',
      why: 'Every hour of untreated bacterial meningitis raises mortality; cultures and LP can follow the antibiotics.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 45-year-old man collapses with a sudden “worst headache of my life” that reached maximum intensity in seconds and now has neck stiffness. The best immediate investigation is:',
      options: [
        { id: 'a', text: 'MRI brain next week' },
        { id: 'b', text: 'Non-contrast CT head' },
        { id: 'c', text: 'Electroencephalogram' },
        { id: 'd', text: 'Skull X-ray' },
      ],
      answerId: 'b',
      explanation: 'Thunderclap headache suggests subarachnoid haemorrhage; urgent non-contrast CT is first-line, with LP for xanthochromia if CT is negative.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A 72-year-old woman reports a new right temporal headache, scalp tenderness, jaw pain on chewing and transient blurred vision; her ESR is 90. The priority is to:',
      options: [
        { id: 'a', text: 'Await the temporal artery biopsy before any treatment' },
        { id: 'b', text: 'Start high-dose corticosteroids immediately' },
        { id: 'c', text: 'Prescribe a triptan' },
        { id: 'd', text: 'Reassure and review in six weeks' },
      ],
      answerId: 'b',
      explanation: 'This is giant cell arteritis; high-dose steroids must be started at once to prevent irreversible blindness, before the biopsy.',
      tests: 'treatment',
    },
  ],
};

export default fcp1HeadacheRedFlags;
