import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpGlomerularDiseaseMechanisms: Lecture = {
  id: 'rbp-glomerular-disease-mechanisms',
  title: 'Glomerular Disease: Mechanisms & Patterns',
  system: 'renal',
  source: 'Ch 13 — Kidney and Its Collecting System',
  updated: '2026-09-16',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'Ch 13 Kidney and Its Collecting System' },
    { kind: 'mechanism', label: 'In-situ versus circulating immune complexes' },
    { kind: 'investigation', label: 'Light microscopy, immunofluorescence and electron microscopy' },
  ],

  highYield: [
    '**Almost all primary glomerular disease is antibody-mediated, and antibody can arrive by only two routes — which is why immunofluorescence has only two patterns.** Route one: the antibody binds an antigen that is already fixed in the wall and evenly distributed along it. The classic target is the **NC1 domain of the α3 chain of type IV collagen** in the GBM, and because that target is continuous, the stain is continuous — a smooth **LINEAR** ribbon outlining every capillary loop. That is **anti-GBM disease**, and when the same epitope in alveolar basement membrane is attacked as well it becomes **Goodpasture syndrome** ([[add-goodpasture-syndrome-pathogenesis-and-clinical-features]]). Route two: complexes form in the circulation, or an exogenous antigen is planted in the wall and complexed there, and they are trapped as discrete lumps — so the stain is **GRANULAR**, the lumpy-bumpy pattern of post-infectious, lupus and membranous disease. Anti-GBM causes well under **5%** of glomerulonephritis, but it is the one that needs plasma exchange within days, so the pattern is read first and read fast.',
    '**Where the deposit sits on electron microscopy predicts the syndrome, because the GBM decides who is allowed to respond to it.** A **SUBEPITHELIAL** deposit lies on the urinary side of the basement membrane. Circulating neutrophils and monocytes cannot reach it — the membrane is in the way, and chemotactic **C5a** generated there is washed into the urinary space. Complement still assembles, and sublytic **C5b-9** on the podocyte is enough to disorganise the slit diaphragm. The result is **heavy proteinuria with a bland sediment and almost no inflammation: nephrotic**, of which membranous nephropathy is the pure case. A **SUBENDOTHELIAL** deposit lies between endothelium and GBM, facing the lumen: C5a recruits neutrophils straight onto it, endothelium is injured, capillary loops rupture and red cells escape — **haematuria, red cell casts, hypertension and a falling GFR: nephritic**, as in lupus class IV and membranoproliferative disease. **MESANGIAL** deposits sit in the stalk and give proliferation with haematuria and modest proteinuria, the IgA pattern. Read it as an address rather than a list: urinary side leaks protein, blood side leaks blood. The named syndromes are worked through in [[rbp-nephrotic-nephritic-syndromes]].',
    '**Every renal biopsy goes through three techniques because each answers a different question and none of them substitutes for another.** **Light microscopy shows ARCHITECTURE**: how many glomeruli are involved and how much of each, whether cells have proliferated, whether the tuft is sclerosed, whether crescents fill Bowman space, and — decisively for prognosis — how much tubular atrophy and interstitial fibrosis there is. Special stains earn their keep here, because **silver and PAS** blacken basement membrane and make **spikes** and **double contours** visible when the deposits themselves are not. **Immunofluorescence shows IDENTITY and PATTERN**: which immunoglobulin and which complement component is present (IgG, IgA, IgM, C3, C1q, kappa and lambda light chains) and whether the staining is linear or granular. **Electron microscopy shows the ADDRESS**: subepithelial, subendothelial, mesangial or inside the membrane, plus the state of the podocyte foot processes, which nothing else can resolve. **Minimal change disease is the proof that all three are needed** — light microscopy normal, immunofluorescence negative, and the entire diagnosis made on electron microscopy by diffuse foot-process effacement.',
    '**The adjectives in a glomerular diagnosis are quantitative statements, not decoration, and examiners write questions on them.** **Diffuse** means more than **50%** of glomeruli are involved and **focal** means fewer; **global** means the whole tuft and **segmental** means only part of it. So "focal segmental" says part of some glomeruli — and that immediately tells you a needle biopsy can miss the lesion, which is why FSGS is the classic sampling error and why a scanty biopsy reported as minimal change may simply have missed the sclerotic juxtamedullary glomeruli. **Proliferative** means extra cells, whether resident mesangial and endothelial cells or infiltrating leukocytes. **Membranous** means the wall is thickened with no extra cells. **Membranoproliferative** means both, and the mesangial interposition that produces it is what the silver stain shows as a **tram-track**. **Crescentic** means cells and matrix filling Bowman space, which is not a disease but a severity statement. **Sclerosis** is matrix accumulating inside the tuft; **fibrosis** is collagen laid down in Bowman space and the interstitium after the fact.',
    '**The barrier fails in two distinct ways, and proteinuria versus haematuria tells you which layer went.** The filter is three layers in series: **fenestrated endothelium** with pores of roughly **70–100 nm**, the **GBM** at about **300–350 nm** thick with its type IV collagen, laminin and anionic **heparan sulfate proteoglycan**, and the **podocyte slit diaphragm** built from **nephrin and podocin**. Albumin is only about **3.6 nm** across and **69 kDa** — small enough to pass on size alone, and held back mainly because it is anionic and the barrier is anionic. So lose charge or disorganise the slit diaphragm and albumin alone escapes: **selective proteinuria with no haematuria**, the minimal change picture, and it requires no antibody at all — a circulating permeability factor, or a mutation in **NPHS1** or **NPHS2**, will do it. Break the GBM structurally, by inflammation, fibrinoid necrosis, crescents or the abnormal collagen IV of Alport syndrome, and whole red cells get through; they are deformed squeezing across and then moulded in the tubule into a **red cell cast**, which is why a red cell cast can only have come from a glomerulus. The normal architecture is in [[nephron-kidney-histology]].',
    '**Whatever starts it, glomerular disease converges on one endpoint, and the final common pathway is haemodynamic rather than immune.** Once roughly **half** of nephron mass is gone the survivors compensate by **hyperfiltration**: the afferent arteriole dilates, single-nephron GFR rises and glomerular capillary pressure rises with it. That pressure injures the podocyte, which is terminally differentiated and cannot divide to cover an expanding tuft, so denuded GBM adheres to Bowman capsule and **segmental sclerosis appears in a kidney whose original disease was something else entirely**. Filtered protein then finishes the job: proximal tubular uptake of albumin activates **NF-κB**, releases chemokines into the interstitium, and **TGF-β** converts that inflammation into scar. This is why **interstitial fibrosis and tubular atrophy on biopsy predict renal survival better than the glomerular diagnosis does**, and why blocking the renin-angiotensin axis slows diseases that have no immune component at all. The uraemic endpoint is developed in [[chronic-kidney-disease-uremia]].',
  ],

  mechanism: {
    title: 'From antigen to glomerulosclerosis',
    steps: [
      { id: 's1', label: 'An antigen becomes available: intrinsic GBM collagen, a planted exogenous antigen, or a circulating complex', detail: 'Endogenous targets give a uniform lesion; exogenous antigen gives a lesion that follows exposure.', emphasis: 'normal' },
      { id: 's2', label: 'Antibody binds a continuous fixed antigen (LINEAR immunofluorescence) or discrete complexes are trapped (GRANULAR immunofluorescence)', detail: 'The pattern on one slide separates anti-GBM disease from the whole immune-complex class.', emphasis: 'key' },
      { id: 's3', label: 'Charge and size decide the address: small cationic antigens cross the GBM and lodge subepithelially; large or anionic complexes stay subendothelial or mesangial', emphasis: 'key' },
      { id: 's4', label: 'Complement is activated at the deposit and C5b-9 assembles wherever it sits', emphasis: 'normal' },
      { id: 's5', label: 'Subepithelial: no leukocyte can reach it, so sublytic C5b-9 injures the podocyte alone — proteinuria with a bland sediment. Subendothelial: C5a recruits neutrophils from the lumen — haematuria and falling GFR', emphasis: 'key' },
      { id: 's6', label: 'Nephron loss drives hyperfiltration in the survivors; podocytes fail, segmental sclerosis spreads, protein-driven interstitial fibrosis closes the loop', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Smooth uninterrupted linear IgG staining along every capillary loop', mechanism: 'Antibody bound to an antigen that is intrinsic to the GBM and evenly distributed along it, so the stain traces the membrane itself', significance: 'key' },
    { sign: 'Coarse granular lumpy-bumpy IgG and C3 along the capillary walls', mechanism: 'Discrete immune complexes trapped as discontinuous lumps; the pattern says complexes, never anti-GBM', significance: 'key' },
    { sign: 'Crescents on light microscopy with essentially no immunoglobulin on immunofluorescence', mechanism: 'Pauci-immune injury: ANCA-activated neutrophils damage the wall directly, so the absence of staining is itself the diagnostic finding', significance: 'key' },
    { sign: 'Diffuse effacement of podocyte foot processes on electron microscopy with a normal light microscopic glomerulus', mechanism: 'Pure podocyte injury with no deposits and no proliferation — the lesion is invisible to every technique except electron microscopy', significance: 'key' },
    { sign: 'Silver-black spikes projecting from the outer surface of a thickened GBM', mechanism: 'The podocyte lays down new basement membrane between subepithelial deposits, which themselves take no silver, so the matrix between them stands up as spikes', significance: 'supportive' },
    { sign: 'Dysmorphic red cells and red cell casts in a spun urine specimen', mechanism: 'Red cells deformed while squeezing through a ruptured GBM, then moulded in the tubular lumen — a cast localises the bleeding above the bladder', significance: 'key' },
  ],

  investigations: [
    { clue: 'Electron-dense deposits on the urinary side of the GBM beneath effaced foot processes', meaning: 'Subepithelial disease. Predict nephrotic-range proteinuria with a bland sediment, and go looking for membranous nephropathy and anti-PLA2R' },
    { clue: 'Electron-dense deposits between endothelium and GBM with neutrophils in the capillary lumen', meaning: 'Subendothelial disease facing the circulation. Predict a nephritic picture, and think lupus class IV or membranoproliferative disease' },
    { clue: 'Serum C3 low with a normal C4', meaning: 'Alternative pathway consumption — post-infectious glomerulonephritis or C3 glomerulopathy. When C3 and C4 are both low the classical pathway is being consumed: lupus, cryoglobulinaemia or endocarditis-associated disease' },
    { clue: 'Circulating anti-PLA2R antibody in an adult with nephrotic syndrome', meaning: 'Primary membranous nephropathy in about 70 to 80% of cases; it is specific enough that a positive result with normal renal function can carry the diagnosis without a biopsy' },
    { clue: 'Urine protein-to-creatinine ratio 400 mg/mmol on a spot sample', meaning: 'Equivalent to roughly 3.5 g per day, so the nephrotic threshold is crossed without a 24-hour collection; the ratio works because creatinine excretion is near constant through the day' },
    { clue: 'A biopsy core containing only four glomeruli, reported as normal, in an adult with nephrotic syndrome', meaning: 'Inadequate sampling rather than a normal kidney. At least ten glomeruli are needed, and FSGS begins in juxtamedullary glomeruli, so a superficial cortical core reports minimal change by default' },
  ],

  treatment: [
    {
      logic: 'The biopsy decides treatment because the syndrome does not',
      detail: 'Nephrotic syndrome is a description, not a diagnosis, and the four commonest causes want four different things: **steroids** in minimal change disease, **steroids plus a calcineurin inhibitor** in FSGS, **rituximab** directed at the anti-PLA2R clone in membranous nephropathy, and **no immunosuppression at all** in diabetic nephropathy, where it would only add harm. The same logic runs the other way in nephritic presentations: **crescents on the biopsy convert a subacute illness into an emergency**, and the immunofluorescence pattern then selects between plasma exchange for anti-GBM antibody and cyclophosphamide or rituximab for ANCA-associated disease. Treating the syndrome instead of the lesion means being wrong roughly three times in four.',
    },
    {
      logic: 'Lower the pressure inside the glomerulus in every proteinuric kidney, immune or not',
      detail: 'Angiotensin II constricts the **efferent** arteriole preferentially, so blocking it lowers glomerular capillary pressure rather than just systemic pressure — which is why an ACE inhibitor or receptor blocker cuts proteinuria by roughly **30–40%** even when blood pressure was already normal. Expect a creatinine rise of up to about **30%** on starting: that is the haemodynamic effect you asked for, not toxicity, and stopping the drug for it discards the benefit. **SGLT2 inhibitors** work at the other end of the same loop, delivering sodium to the macula densa and restoring tubuloglomerular feedback so the **afferent** arteriole constricts. Because the driver here is pressure and filtered protein rather than antibody, this works in diseases with no immune component whatsoever — see [[chronic-kidney-disease-uremia]].',
    },
  ],

  mnemonics: [
    {
      hook: 'Linear is the wall itself; granular is lumps stuck on it',
      expansion: [
        'Linear: antibody against a fixed, evenly spread antigen — the α3 chain of type IV collagen in the GBM',
        'Linear therefore means anti-GBM disease, and Goodpasture syndrome when the lung is hit too',
        'Granular: discrete immune complexes trapped as separate lumps, so the stain is discontinuous',
        'Granular therefore means the immune-complex class — post-infectious, lupus, membranous, IgA',
        'Neither pattern at all, with crescents present, means pauci-immune ANCA disease',
      ],
    },
    {
      hook: 'Light microscopy shape, immunofluorescence identity, electron microscopy address',
      expansion: [
        'Shape: how many glomeruli, how much of each, proliferation, sclerosis, crescents, interstitial fibrosis',
        'Identity: which immunoglobulin and which complement component, linear or granular',
        'Address: subepithelial, subendothelial, mesangial or intramembranous, plus foot-process effacement',
        'Minimal change disease proves you need all three: normal shape, no identity, diagnosis made only by address',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'Reading the meaning of a linear immunofluorescence pattern',
      wrongInstinct: 'Linear staining means there is more immunoglobulin deposited, so the disease must be a heavier immune-complex load',
      rightAnswer: 'Linear staining means the antigen is intrinsic to the GBM and continuous along it, so the antibody traces the membrane — this is anti-GBM disease',
      why: 'The pattern reports the distribution of the target, not the quantity of antibody: a continuous fixed antigen gives a ribbon, discrete trapped complexes give granules',
    },
    {
      questionCategory: 'Explaining why a heavily proteinuric glomerulus shows no inflammation',
      wrongInstinct: 'There is no inflammation because the immune injury is milder or earlier in its course',
      rightAnswer: 'The deposits are subepithelial, so the GBM physically separates them from the circulation and no leukocyte can reach them, while C5a is swept into the urinary space',
      why: 'Complement is still activated and C5b-9 still injures the podocyte — the basement membrane decides who can respond, and that alone converts the same immune reaction from nephritic to nephrotic',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Electron microscopy of a nephrotic adult shows electron-dense deposits on the urinary side of the GBM with diffuse foot-process effacement, and immunofluorescence shows granular IgG. Why is the urinary sediment bland despite abundant complement activation?',
      options: [
        { id: 'a', text: 'Complement cannot be activated by deposits in this location' },
        { id: 'b', text: 'The GBM separates the deposits from the circulation, so leukocytes cannot reach them and C5a is lost into the urinary space' },
        { id: 'c', text: 'Subepithelial deposits are cleared by podocytes before they can cause damage' },
        { id: 'd', text: 'Granular deposits activate only the classical pathway, which does not generate chemotactic fragments' },
      ],
      answerId: 'b',
      explanation: 'Position relative to the basement membrane determines the effector arm. Subepithelial deposits still fix complement and still form C5b-9, and sublytic membrane attack complex on the podocyte is what disorganises the slit diaphragm and produces heavy proteinuria. What they cannot do is recruit circulating neutrophils, because the GBM is in the way and the C5a generated is washed into the urine. Move the identical deposit to the subendothelial side and the same immune reaction becomes a nephritic, haematuric, rapidly deteriorating disease.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A 24-year-old man has haemoptysis and acute kidney injury. Renal biopsy immunofluorescence shows smooth linear IgG along all capillary loops. What does this pattern establish?',
      options: [
        { id: 'a', text: 'Circulating immune complexes have been trapped in the capillary wall' },
        { id: 'b', text: 'Antibody is bound to an antigen intrinsic to and evenly distributed within the GBM' },
        { id: 'c', text: 'Neutrophils have degranulated along the capillary wall without antibody deposition' },
        { id: 'd', text: 'Light chains have been deposited along the basement membrane' },
      ],
      answerId: 'b',
      explanation: 'Linear staining requires a target that is continuous along the membrane, and the target is the NC1 domain of the α3 chain of type IV collagen. Because the same epitope is present in alveolar basement membrane, pulmonary haemorrhage accompanies the nephritis as Goodpasture syndrome. Trapped circulating complexes are discrete, so they stain granular; ANCA-associated disease has essentially no staining at all and is called pauci-immune. The distinction is urgent rather than academic, because anti-GBM disease needs plasma exchange to remove the antibody while the immunosuppression takes effect.',
      tests: 'investigation',
    },
    {
      id: 'q3',
      stem: 'A 6-year-old with nephrotic syndrome has a biopsy showing normal glomeruli on light microscopy and negative immunofluorescence. What does this combination indicate about the value of electron microscopy here?',
      options: [
        { id: 'a', text: 'Electron microscopy is unnecessary, since two techniques were already normal' },
        { id: 'b', text: 'Electron microscopy is the only technique that can show the lesion, which is diffuse foot-process effacement without deposits' },
        { id: 'c', text: 'The biopsy should be repeated because normal light microscopy always indicates inadequate sampling' },
        { id: 'd', text: 'Electron microscopy would show subendothelial deposits that immunofluorescence missed' },
      ],
      answerId: 'b',
      explanation: 'The three techniques answer different questions, so a normal answer from two of them does not make the third redundant. Minimal change disease has no proliferation for light microscopy to see and no immune deposits for immunofluorescence to find; the abnormality is effacement and retraction of podocyte foot processes, resolvable only by electron microscopy. That pure podocytopathy also explains the selective albuminuria and the steroid responsiveness. Sampling error is a real concern in focal disease such as FSGS, but it is answered by counting glomeruli and sampling juxtamedullary cortex, not by assuming every normal biopsy is inadequate.',
      tests: 'investigation',
    },
  ],
};

export default rbpGlomerularDiseaseMechanisms;
