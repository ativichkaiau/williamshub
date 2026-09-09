import type { Lecture } from '../../lib/types';

export const ghpGfrDeterminantsFiltrationFraction: Lecture = {
  id: 'ghp-gfr-determinants-filtration-fraction',
  title: 'Determinants of GFR & Filtration Fraction',
  system: 'renal',
  source: 'Ch 26 — Urine Formation I — Glomerular Filtration & Renal Blood Flow',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'Ch 26 Filtration & Renal Blood Flow' },
    { kind: 'mechanism', label: 'Starling forces at the glomerulus' },
    { kind: 'exam', label: 'Afferent vs efferent tone' },
  ],

  highYield: [
    '**GFR is a Starling equation like any capillary: GFR = Kf × net filtration pressure.** Net pressure ≈ **glomerular capillary hydrostatic (~60)** − **Bowman capsule hydrostatic (~18)** − **glomerular colloid osmotic (~32)**, giving about **+10 mmHg** — small, but applied across an enormous, highly permeable surface. **Kf** is roughly **400×** that of most capillaries, which is how 10 mmHg produces **180 L/day**.',
    '**Glomerular capillary pressure is the most controllable determinant, and it is set by the two arterioles.** **Afferent constriction** lowers both renal plasma flow **and** GFR. **Efferent constriction** raises glomerular pressure and so **raises GFR while lowering plasma flow** — but only up to a point: beyond roughly a **threefold** increase in resistance the sluggish flow lets colloid osmotic pressure rise so steeply along the capillary that GFR **falls** again.',
    '**Filtration fraction = GFR ÷ renal plasma flow, normally about 0.2.** It rises when efferent tone rises, because GFR is defended while flow falls. A rising filtration fraction concentrates protein in the **peritubular** capillaries, raising their oncotic pressure and **increasing proximal reabsorption** — the link that makes angiotensin II a sodium-retaining hormone as well as a pressor one.',
    '**Bowman capsule pressure matters clinically only when outflow is obstructed.** Normally ~18 mmHg and stable, it rises sharply in **ureteric obstruction** or severe tubular obstruction by casts, directly opposing filtration. This is the entire mechanism of **postrenal** failure in [[aki-prerenal-intrinsic-postrenal]].',
    '**Rising colloid osmotic pressure along the capillary is why filtration is self-limiting.** As protein-free filtrate leaves, plasma protein concentrates, so oncotic pressure climbs from ~28 to ~36 mmHg by the efferent end and net filtration pressure falls toward zero. Slower flow allows more equilibration and therefore **less** filtration per unit of plasma — which is why very high efferent resistance is counterproductive.',
    '**Kf falls in chronic disease and that is what makes the loss irreversible.** Mesangial contraction acutely and loss of filtration surface chronically both reduce Kf. Unlike arteriolar tone, surface area is not recoverable, which is why the fall in GFR in [[chronic-kidney-disease]] is structural rather than haemodynamic.',
  ],

  mechanism: {
    title: 'Small net pressure, vast permeable surface',
    steps: [
      { id: 's1', label: 'Glomerular hydrostatic pressure ~60 mmHg pushes fluid out', emphasis: 'key' },
      { id: 's2', label: 'Bowman capsule pressure ~18 and plasma oncotic ~32 oppose it' },
      { id: 's3', label: 'Net filtration pressure only ~10 mmHg', emphasis: 'key' },
      { id: 's4', label: 'Kf is ~400× a typical capillary, so 10 mmHg yields 180 L/day', emphasis: 'key' },
      { id: 's5', label: 'Protein concentrates along the capillary → oncotic pressure rises → filtration self-limits' },
      { id: 's6', label: 'Efferent constriction raises GFR up to a point, then lowers it as flow stagnates', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'GFR falls after an ACE inhibitor in bilateral renal artery stenosis', mechanism: 'Efferent tone was maintaining glomerular pressure and has been removed', significance: 'key' },
    { sign: 'Rising creatinine with anuria and a distended bladder', mechanism: 'Raised Bowman capsule pressure opposing filtration', significance: 'key' },
    { sign: 'Filtration fraction rising during hypovolaemia', mechanism: 'Angiotensin II raises efferent tone, defending GFR as plasma flow falls', significance: 'key' },
    { sign: 'Progressive GFR decline despite normal blood pressure', mechanism: 'Loss of filtration surface area reducing Kf', significance: 'supportive' },
    { sign: 'GFR falling when afferent arterioles constrict', mechanism: 'Both renal plasma flow and glomerular pressure fall together', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Filtration fraction well above 0.2', meaning: 'High efferent tone defending GFR against reduced plasma flow' },
    { clue: 'Creatinine rising more than 30% after starting an ACE inhibitor', meaning: 'GFR was efferent-tone dependent — suspect renovascular disease' },
    { clue: 'Hydronephrosis on ultrasound with rising creatinine', meaning: 'Obstruction raising Bowman capsule pressure' },
    { clue: 'Reduced GFR with normal renal plasma flow', meaning: 'A fall in Kf rather than a haemodynamic cause' },
    { clue: 'Inulin clearance used as the GFR standard', meaning: 'Freely filtered, neither reabsorbed nor secreted' },
  ],

  treatment: [
    {
      logic: 'Lower intraglomerular pressure to preserve nephrons long term',
      detail: 'Blocking angiotensin II dilates the **efferent** arteriole, dropping glomerular pressure and proteinuria. The expected trade-off is a modest, **acceptable** rise in creatinine; a steep rise implies the kidney was depending on that efferent tone.',
    },
    {
      logic: 'Relieve obstruction before attributing failure to the parenchyma',
      detail: 'Raised **Bowman capsule** pressure is one of the few fully reversible causes of a low GFR, so imaging for obstruction comes early — the logic of [[acute-kidney-injury-azotemia]].',
    },
  ],

  mnemonics: [
    { hook: 'Afferent both down, efferent split', expansion: ['Afferent constriction: RPF ↓ and GFR ↓', 'Efferent constriction: RPF ↓ but GFR ↑', 'Filtration fraction therefore rises with efferent tone'] },
    { hook: '60 out, 18 and 32 back, 10 net', expansion: ['60 glomerular hydrostatic', '18 Bowman capsule', '32 plasma oncotic', '≈10 mmHg net filtration pressure'] },
  ],

  traps: [
    {
      questionCategory: 'Effect of efferent constriction',
      wrongInstinct: 'Constricting the efferent arteriole always raises GFR',
      rightAnswer: 'It raises GFR only up to about a threefold resistance rise, then GFR falls',
      why: 'Severely slowed flow lets colloid osmotic pressure equilibrate and abolish net filtration pressure',
    },
    {
      questionCategory: 'Interpreting a creatinine rise after an ACE inhibitor',
      wrongInstinct: 'Any rise means the drug is nephrotoxic and must be stopped',
      rightAnswer: 'A modest rise is the expected haemodynamic consequence of lowering intraglomerular pressure',
      why: 'The same pressure reduction is what protects the nephron over years',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Moderate constriction of the efferent arteriole produces which combination?',
      options: [
        { id: 'a', text: 'Increased renal plasma flow and increased GFR' },
        { id: 'b', text: 'Decreased renal plasma flow and increased GFR' },
        { id: 'c', text: 'Decreased renal plasma flow and decreased GFR' },
        { id: 'd', text: 'No change in either' },
      ],
      answerId: 'b',
      explanation: 'Efferent constriction obstructs outflow from the glomerulus, raising glomerular capillary pressure and therefore GFR, while total flow through the kidney falls. Filtration fraction consequently rises.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient with bilateral renal artery stenosis develops a steep rise in creatinine after starting an ACE inhibitor. Why?',
      options: [
        { id: 'a', text: 'Direct tubular toxicity of the drug' },
        { id: 'b', text: 'GFR depended on angiotensin II-mediated efferent constriction, which has been removed' },
        { id: 'c', text: 'Bowman capsule pressure has risen' },
        { id: 'd', text: 'Kf has been irreversibly reduced' },
      ],
      answerId: 'b',
      explanation: 'With reduced perfusion pressure, angiotensin II maintains glomerular pressure by constricting the efferent arteriole. Blocking it dilates the efferent vessel, glomerular pressure falls and GFR drops sharply.',
      tests: 'treatment',
    },
    {
      id: 'q3',
      stem: 'Net filtration pressure at the glomerulus is only about 10 mmHg, yet 180 L is filtered daily. What accounts for this?',
      options: [
        { id: 'a', text: 'An unusually high filtration coefficient from large, highly permeable surface area' },
        { id: 'b', text: 'Active transport of water across the filtration barrier' },
        { id: 'c', text: 'Absence of colloid osmotic pressure in glomerular plasma' },
        { id: 'd', text: 'Negative pressure in Bowman capsule' },
      ],
      answerId: 'a',
      explanation: 'Kf is roughly 400 times that of a typical capillary bed, reflecting both high hydraulic permeability and large surface area. Filtration remains entirely passive and driven by Starling forces.',
      tests: 'mechanism',
    },
  ],
};

export default ghpGfrDeterminantsFiltrationFraction;
