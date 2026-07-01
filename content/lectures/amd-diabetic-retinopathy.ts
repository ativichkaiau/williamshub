import type { Lecture } from '../../lib/types';

export const amdDiabeticRetinopathy: Lecture = {
  id: 'amd-diabetic-retinopathy',
  title: 'AMD & Diabetic Retinopathy',
  system: 'neuro',
  source: 'L4 — Common Eye Disorders',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L4 Common Eye Disorders' },
    { kind: 'disease', label: 'AMD / DR' },
    { kind: 'mechanism', label: 'VEGF neovascularization' },
    { kind: 'exam', label: 'Chronic visual loss' },
  ],

  highYield: [
    '**Age-related macular degeneration (AMD)** = chronic progressive **painless central** visual loss. **Dry** (drusen, geographic atrophy) vs **wet** (choroidal **neovascularization**, sudden distortion/metamorphopsia).',
    'AMD drivers: **aging, smoking, HT, genetics, oxidative stress**. Treat **wet AMD with intravitreal anti-VEGF** (± laser); dry AMD → observe / antioxidant supplements.',
    '**Diabetic retinopathy** = hyperglycemic **microvasculopathy**: **microvascular leakage (pericyte loss)** + **occlusion (basement-membrane thickening)** → ischemia → **VEGF → neovascularization**.',
    'Progression: **non-proliferative (NPDR)** (microaneurysms, dot/blot hemorrhages, exudates) → **proliferative (PDR)** (neovascularization). **Macular edema** is the main cause of vision loss.',
    'DR complications: **vitreous hemorrhage, tractional retinal detachment, neovascular glaucoma**. Treat: **glycemic/BP control, focal laser/anti-VEGF for edema, panretinal photocoagulation (PRP) for PDR**, surgery for traction.',
  ],

  mechanism: {
    title: 'Ischemia/degeneration → VEGF → neovascularization',
    steps: [
      { id: 's1', label: 'AMD: RPE/macular degeneration (drusen)' },
      { id: 's2', label: 'DR: hyperglycemia → capillary leak + occlusion', emphasis: 'key' },
      { id: 's3', label: 'Retinal ischemia → VEGF release' },
      { id: 's4', label: 'Neovascularization → hemorrhage / traction / glaucoma', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Central scotoma + metamorphopsia (Amsler grid)', mechanism: 'Macular (AMD) involvement', significance: 'key' },
    { sign: 'Microaneurysms, dot-blot hemorrhages, hard exudates', mechanism: 'NPDR microvascular damage', significance: 'key' },
    { sign: 'New vessels at the disc/retina', mechanism: 'Proliferative DR (VEGF-driven)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Dilated fundus exam ± OCT', meaning: 'Drusen/CNV; macular edema' },
    { clue: 'Fluorescein angiography', meaning: 'Leakage & neovascularization' },
    { clue: 'Regular DR screening in diabetics', meaning: 'Detect before vision loss' },
  ],

  treatment: [
    { logic: 'Anti-VEGF for wet AMD, DR macular edema, and PDR', detail: 'Blocks the neovascular driver.' },
    { logic: 'Panretinal photocoagulation for proliferative DR', detail: 'Ablates ischemic retina, lowers VEGF.' },
    { logic: 'Optimize glucose & blood pressure', detail: 'Slows diabetic retinopathy.' },
  ],

  mnemonics: [
    { hook: 'Wet AMD & PDR = VEGF disease → anti-VEGF', expansion: ['Neovascular common pathway'] },
    { hook: 'DR: leakage (pericyte loss) + occlusion (BM thickening) → ischemia → VEGF', expansion: ['NPDR → PDR'] },
  ],

  traps: [
    {
      questionCategory: 'Cause of vision loss in diabetic retinopathy',
      wrongInstinct: 'Vision loss in diabetic retinopathy is mainly from the new vessels themselves',
      rightAnswer: 'Diabetic macular edema is the leading cause of vision loss; neovascularization causes loss via hemorrhage, traction, and neovascular glaucoma',
      why: 'Macular edema directly blurs central vision, while PDR threatens sight through its complications — both are treated, but the mechanisms of vision loss differ.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A long-standing diabetic develops new vessels on the optic disc and a vitreous hemorrhage. Beyond glycemic control, the key retinal treatment is:',
      options: [
        { id: 'a', text: 'Ocular massage' },
        { id: 'b', text: 'Panretinal photocoagulation ± anti-VEGF' },
        { id: 'c', text: 'Topical antibiotics' },
        { id: 'd', text: 'Observation only' },
      ],
      answerId: 'b',
      explanation: 'Neovascularization defines proliferative diabetic retinopathy; panretinal photocoagulation (with anti-VEGF) ablates ischemic retina and reduces the VEGF drive, treating the new vessels and their complications.',
      tests: 'treatment',
    },
  ],
};

export default amdDiabeticRetinopathy;
