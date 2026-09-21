import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpNephroticNephriticSyndromes: Lecture = {
  id: 'rbp-nephrotic-nephritic-syndromes',
  title: 'Nephrotic & Nephritic Syndromes',
  system: 'renal',
  source: 'Ch 13 — Kidney and Its Collecting System',
  updated: '2026-09-19',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'Ch 13 Kidney and Its Collecting System' },
    { kind: 'disease', label: 'Minimal change, FSGS, membranous and diabetic nephropathy' },
    { kind: 'disease', label: 'Post-infectious, IgA and crescentic glomerulonephritis' },
    { kind: 'mechanism', label: 'Nephrotic complications derived from what the urine loses' },
    { kind: 'investigation', label: 'Complement, serology and the biopsy pattern' },
  ],

  highYield: [
    '**Nephrotic syndrome is a set of numbers, and every complication is subtraction from the plasma.** The definition: proteinuria above roughly **3.5 g per 1.73 m2 per day**, serum albumin below **30 g/L**, oedema, and hyperlipidaemia with lipiduria. Now derive the rest instead of memorising it. The leak has a molecular-weight window set around albumin at **69 kDa**, so anything near that size leaves with it. **Antithrombin III is 58 kDa** and is therefore lost in the urine, while **fibrinogen at 340 kDa and factors V and VIII are far too large to be filtered** and instead rise, because the liver answers a low plasma oncotic pressure by upregulating protein synthesis across the board. Anticoagulant out, procoagulant up: that is the whole explanation for the **hypercoagulable state**, and it is why **renal vein thrombosis is the classic complication of membranous nephropathy**. Once the leak becomes non-selective, **IgG at 150 kDa** goes too, and hypogammaglobulinaemia plus urinary loss of complement factor B produces infection by **encapsulated organisms** — pneumococcal peritonitis in a nephrotic child is the exam sentence. The same window explains the loose ends: transferrin out gives a microcytic anaemia, vitamin-D-binding protein out gives hypocalcaemia, thyroxine-binding globulin out disturbs thyroid indices. Clinical management lives in [[nephrotic-syndrome]].',
    '**Minimal change disease and FSGS are the same cell failing to two different depths: in minimal change the podocyte is sick, in FSGS the podocyte is dead.** Minimal change disease is about **65% of childhood nephrotic syndrome** and only some **10 to 15% of adult cases**. Light microscopy is normal, immunofluorescence is negative, and proximal tubular cells are stuffed with reabsorbed lipid — the reason the disease was once called lipoid nephrosis. The proteinuria is **selective**, albumin without immunoglobulin, because charge and slit-diaphragm function are lost while the membrane is structurally intact, and **over 90% of children remit on corticosteroids**. FSGS is the commonest cause of adult nephrotic syndrome, up to about **35%**, and it is podocyte depletion: podocytes detach, denuded GBM adheres to Bowman capsule, and matrix fills the segment. It is **focal**, so only some glomeruli are hit, and **segmental**, so only part of each tuft — and because it begins in **juxtamedullary** glomeruli a shallow cortical core reads as normal. Immunofluorescence shows IgM and C3 trapped non-specifically in the scar, which is debris rather than pathogenesis. Secondary forms name themselves: HIV gives the **collapsing** variant, and so do heroin, obesity, reflux and any state of reduced nephron mass. The practical split is that minimal change disease is **steroid-responsive** and primary FSGS is largely **steroid-resistant**, with about **half reaching end-stage renal disease within 10 years**.',
    '**Membranous nephropathy is a thick wall with no extra cells, and the immunoglobulin subclass on the slide tells you whether to treat the kidney or hunt for a tumour.** Light microscopy shows **diffuse uniform GBM thickening and no hypercellularity whatsoever** — that pairing is the diagnosis, because a thickened wall plus proliferation is membranoproliferative disease instead. Silver stain shows **spikes** of new basement membrane laid down by the podocyte between subepithelial deposits, which later close over them into domes and then into a moth-eaten membrane. Primary disease is an autoantibody against the **M-type phospholipase A2 receptor** on the podocyte, positive in roughly **70 to 80%**, with **THSD7A** in a few percent, and the deposited immunoglobulin is **IgG4**. Secondary disease plants a different antigen and deposits **IgG1, IgG2 and IgG3** instead — lupus class V, hepatitis B and C, gold and penicillamine, and, in anyone over 60 with new membranous nephropathy, an occult **carcinoma of lung or colon**. Diabetic nephropathy is the other great cause of heavy adult proteinuria and looks nothing like it: GBM thickening begins **within 2 years** of type 1 diabetes and is about **30% thicker by 5 years**, mesangial matrix expands, and in **15 to 30%** of long-standing diabetics it condenses into **Kimmelstiel-Wilson nodules** — laminated PAS-positive balls at the periphery of the tuft. The decisive companion lesion is **hyaline arteriolosclerosis of the efferent as well as the afferent arteriole**, which hypertension never produces.',
    '**Latency means post-streptococcal, synchrony means IgA — the interval between the sore throat and the red urine is the single most reliable discriminator in nephritic disease.** Post-infectious glomerulonephritis follows a nephritogenic group A streptococcus (pharyngeal M types 12, 4 and 1) after a **gap of 1 to 4 weeks**, because the complexes do not exist until the antibody response has been mounted. Light microscopy shows **diffuse global endocapillary hypercellularity packed with neutrophils**, electron microscopy shows subepithelial **humps**, and serum **C3 falls with a near-normal C4** because the alternative pathway is doing the consuming. That C3 must recover by **6 to 8 weeks**; a C3 still low at 12 weeks is not post-infectious disease and should be re-read as C3 glomerulopathy. Over **95% of affected children recover completely**. IgA nephropathy, the commonest glomerulonephritis worldwide, produces visible haematuria **within 1 to 2 days** of a mucosal infection, because the pathogenic material is already circulating: **galactose-deficient IgA1** with abnormal hinge-region O-glycans, recognised by an anti-glycan IgG, trapped in the mesangium. **Serum C3 is normal**, which is the second discriminator and is free on the same blood sample. The same mesangial deposits with purpura, arthralgia and abdominal pain define IgA vasculitis. Clinical work-up is in [[nephritic-syndrome]].',
    '**Rapidly progressive glomerulonephritis is not a disease but a severity statement, and its definition is a morphological one: crescents in more than 50% of glomeruli.** The crescent is built from **proliferating parietal epithelial cells and recruited monocytes**, and the trigger is **fibrin leaking into Bowman space through actual holes in the GBM** — electron microscopy shows the ruptures, which is why crescents mean the wall has been physically broken rather than merely leaking. Immunofluorescence then splits the syndrome into exactly three types and chooses the drug. **Type I, linear, anti-GBM, about 12%**: antibody to the NC1 domain of the alpha-3 chain of type IV collagen, and when the shared alveolar epitope is unmasked by smoking it becomes Goodpasture syndrome — see [[add-goodpasture-syndrome-pathogenesis-and-clinical-features]]. **Type II, granular, immune complex, about 44%**: post-infectious, lupus, IgA and cryoglobulinaemic disease escalating. **Type III, pauci-immune, about 44%**: ANCA-associated, with PR3 specificity in granulomatosis with polyangiitis and MPO specificity in microscopic polyangiitis. The timing rule that matters clinically is histological: **cellular crescents are reversible, fibrous crescents are not**, and the conversion takes weeks — so a biopsy performed late does not just delay treatment, it changes the answer to whether treatment can work at all.',
    '**Nephrotic and nephritic are not two diseases but two exits, and several named entities use both — so name the lesion, never the syndrome.** Membranoproliferative patterns give a mixed picture because they carry subendothelial deposits and mesangial interposition together, which is what produces the silver-stain **tram-track** double contour. Lupus nephritis spans the whole range across its classes, class V behaving as membranous and class IV as an aggressive proliferative nephritis with subendothelial deposits and wire-loop capillaries. Diabetic nephropathy and amyloid reach nephrotic-range proteinuria with no immune deposits at all, and secondary FSGS from obesity or a solitary kidney does the same through pure haemodynamic injury. The practical consequence is that the four commonest nephrotic lesions want four different managements and the syndrome label predicts none of them. Read the biopsy in the order that the deposits dictate — the address-to-syndrome logic is set out in [[rbp-glomerular-disease-mechanisms]] — then attach the serology: anti-PLA2R for membranous, ANCA and anti-GBM for crescentic disease, complement for post-infectious and lupus, and the fundus for diabetes.',
  ],

  mechanism: {
    title: 'Protein loss to thrombosis, and where the nephritic exit diverges',
    steps: [
      { id: 's1', label: 'Podocyte slit diaphragm disorganised or GBM anionic charge stripped, so albumin crosses a barrier that is still structurally whole', detail: 'Nephrin and podocin displacement, or loss of heparan sulfate charge, lets a 69 kDa anionic protein through without any break in the wall.', emphasis: 'normal' },
      { id: 's2', label: 'Urinary loss outruns hepatic synthesis: serum albumin falls below 30 g/L, plasma oncotic pressure falls, and Starling forces shift fluid into the interstitium', detail: 'Periorbital oedema appears first in children because periorbital tissue turgor is lowest; dependent pitting oedema and ascites follow.', emphasis: 'normal' },
      { id: 's3', label: 'The leak has a size window set around albumin, so antithrombin III at 58 kDa is lost in the urine with it', emphasis: 'key' },
      { id: 's4', label: 'The liver answers low oncotic pressure with generalised protein synthesis: fibrinogen at 340 kDa and factors V and VIII rise because they are too large to be filtered out again', detail: 'The same drive raises lipoprotein synthesis while lipoprotein lipase clearance falls, producing the hyperlipidaemia and the oval fat bodies.', emphasis: 'key' },
      { id: 's5', label: 'Anticoagulant down and procoagulant up gives the hypercoagulable state — renal vein thrombosis, deep vein thrombosis and pulmonary embolism, worst in membranous nephropathy', emphasis: 'danger' },
      { id: 's6', label: 'Divergence: if the injury instead ruptures the GBM, fibrin escapes into Bowman space, parietal epithelium proliferates into a crescent and red cells enter the tubule as casts — nephritic, and the clock runs in weeks rather than months', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Periorbital oedema worst on waking in a young child, with frothy urine in the pan', mechanism: 'Low plasma oncotic pressure moves fluid into the loosest tissue first, and filtered protein lowers urinary surface tension enough to hold a foam', significance: 'key' },
    { sign: 'Oval fat bodies showing a Maltese-cross birefringence under polarised light', mechanism: 'Cholesterol esters reabsorbed into shed tubular cells; confirms the lipiduria arm of nephrotic syndrome and excludes a purely nephritic picture', significance: 'supportive' },
    { sign: 'Laminated PAS-positive nodules at the periphery of the glomerular tuft with hyaline change in both afferent and efferent arterioles', mechanism: 'Kimmelstiel-Wilson nodular glomerulosclerosis: advanced glycation end products cross-link mesangial matrix, and efferent hyalinosis raises intraglomerular pressure further', significance: 'key' },
    { sign: 'IgG4-dominant granular capillary-wall staining in an adult with nephrotic syndrome', mechanism: 'Primary membranous nephropathy driven by an anti-PLA2R IgG4 autoantibody; IgG1 to IgG3 dominance means a planted antigen and a secondary cause', significance: 'key' },
    { sign: 'Visible haematuria beginning within 24 to 48 hours of the onset of a sore throat', mechanism: 'Galactose-deficient IgA1 complexes are already in the circulation, so mucosal infection amplifies deposition immediately rather than after an antibody lag', significance: 'key' },
    { sign: 'Palpable purpura over the buttocks and extensor surfaces with colicky abdominal pain and haematuria in a child', mechanism: 'IgA vasculitis: the same galactose-deficient IgA1 complexes deposit in dermal, gut and glomerular vessels, so the rash and the nephritis share one pathogenesis', significance: 'key' },
  ],

  investigations: [
    { clue: 'Serum C3 low with a normal C4 three weeks after pharyngitis, and a rising anti-DNase B titre', meaning: 'Post-infectious glomerulonephritis consuming complement through the alternative pathway. Recheck C3 at 8 weeks: it should have normalised, and a C3 still low at 12 weeks reclassifies the case as C3 glomerulopathy and requires a biopsy' },
    { clue: 'Membranous nephropathy in a 68-year-old smoker with a negative anti-PLA2R and IgG1 and IgG2 subclass staining', meaning: 'Secondary membranous nephropathy until proven otherwise. The planted-antigen forms deposit non-IgG4 subclasses, so the slide itself directs you to CT the chest and complete colonic screening rather than to immunosuppress' },
    { clue: 'Urinary clearance ratio of IgG to transferrin below 0.1', meaning: 'Highly selective proteinuria, meaning the barrier has lost charge and slit-diaphragm function but remains structurally intact — the minimal change profile, and a strong predictor of steroid response' },
    { clue: 'Nephrotic-range proteinuria in long-standing type 1 diabetes with a completely normal fundus', meaning: 'Doubt the diagnosis and biopsy. In type 1 diabetes retinopathy precedes nephropathy essentially without exception, so a normal retina with 4 g of protein points to a coincident glomerular disease' },
    { clue: 'Cellular crescents in 70% of glomeruli with immunofluorescence negative for immunoglobulin and complement', meaning: 'Pauci-immune type III rapidly progressive glomerulonephritis. Send ANCA with PR3 and MPO specificities the same day, and treat on the biopsy rather than waiting, because crescents become fibrous within weeks' },
    { clue: 'Sudden left flank pain, a step up in proteinuria and a new pulmonary embolism in a patient with membranous nephropathy', meaning: 'Renal vein thrombosis. Image the renal vein with CT venography; the risk tracks the depth of hypoalbuminaemia, becoming substantial once albumin falls below about 20 to 25 g/L' },
  ],

  treatment: [
    {
      logic: 'Steroid trial first in a child, needle first in an adult — pretest probability, not preference',
      detail: 'In a child aged 1 to 10 with pure nephrotic syndrome, minimal change disease is about **65%** of the field and **over 90% remit on prednisolone**, so an empirical 4 to 6 week course is faster, cheaper and safer than a biopsy. Biopsy the child who breaks the pattern: under 1 or over 10 years, hypertensive, macroscopic haematuria, low C3, impaired renal function, or steroid failure. In an adult, minimal change disease is only **10 to 15%** of the field and the alternatives are membranous nephropathy, FSGS, amyloid and diabetes, which respectively want **rituximab against the anti-PLA2R clone**, **steroids plus a calcineurin inhibitor**, treatment of the plasma-cell clone, and **no immunosuppression at all**. Treating the syndrome rather than the lesion means being wrong roughly three times in four — see [[nephrotic-syndrome]].',
    },
    {
      logic: 'Crescents convert a clinic problem into an emergency, and the histology states the deadline',
      detail: 'A **cellular** crescent is proliferating parietal epithelium and macrophages, and it can be dissolved; a **fibrous** crescent is collagen and the glomerulus behind it is gone. The conversion takes weeks, which is the entire argument for same-week biopsy in anyone whose creatinine is climbing with an active sediment. Immunofluorescence then picks the drug: **plasma exchange plus cyclophosphamide and steroids** for linear anti-GBM disease, because the antibody must be physically removed while synthesis is suppressed, against **cyclophosphamide or rituximab with steroids** for pauci-immune ANCA disease, where no circulating antibody needs clearing. Anti-GBM disease presenting with dialysis dependence and 100% fibrous crescents will not recover renal function, but plasma exchange is still given when there is pulmonary haemorrhage, because the lung does recover — the reasoning is worked through in [[add-goodpasture-syndrome-pathogenesis-and-clinical-features]].',
    },
  ],

  mnemonics: [
    {
      hook: 'Lose antithrombin, keep fibrinogen — that is why nephrotics clot',
      expansion: [
        'Albumin at 69 kDa is the gauge: the leak passes proteins near that size',
        'Antithrombin III is 58 kDa, smaller than albumin, so it goes into the urine',
        'Fibrinogen is 340 kDa, far too big to be filtered, and rises with hepatic overdrive',
        'IgG at 150 kDa goes once the leak turns non-selective, giving encapsulated-organism infection',
        'Net effect: anticoagulant down, procoagulant up, so renal vein thrombosis, classically in membranous nephropathy',
      ],
    },
    {
      hook: 'Latency is strep, synchrony is IgA',
      expansion: [
        'Sore throat, then 1 to 4 weeks of nothing, then cola urine with a low C3: post-infectious glomerulonephritis',
        'Sore throat and visible haematuria on the same day or the next, with a normal C3: IgA nephropathy',
        'The reason is supply: streptococcal disease must wait for the antibody that builds the complexes',
        'IgA1 complexes are already circulating, so mucosal infection only raises the rate of deposition',
        'Confirm with anti-DNase B and a C3 that recovers by 8 weeks, versus mesangial IgA on biopsy with C3 untouched',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'Attributing heavy proteinuria in a diabetic patient',
      wrongInstinct: 'A diabetic with 4 g of proteinuria per day has diabetic nephropathy by definition, so a biopsy would add nothing',
      rightAnswer: 'Examine the fundus first: in type 1 diabetes retinopathy precedes nephropathy essentially without exception, so nephrotic-range proteinuria with a normal retina is a different disease until the biopsy says otherwise',
      why: 'Retinal and glomerular capillaries suffer the same microvascular process, and the retina declares it earlier and is free to examine — so no retinopathy means no diabetic glomerulosclerosis, and onset over weeks rather than a 10 to 15 year arc says the same thing',
    },
    {
      questionCategory: 'Deciding how to treat newly diagnosed membranous nephropathy in an older adult',
      wrongInstinct: 'Membranous nephropathy is a primary autoimmune podocytopathy, so start immunosuppression once proteinuria is heavy',
      rightAnswer: 'Check anti-PLA2R and the IgG subclass: a PLA2R-negative, IgG1 and IgG2 dominant membranous lesion after 60 is secondary until proven otherwise, and the commonest driver is an occult carcinoma of lung or colon',
      why: 'Primary disease is an IgG4 autoantibody against a podocyte antigen while secondary disease plants a foreign antigen and deposits non-IgG4 subclasses, so the subclass on the slide names the cause — and treating the tumour treats the kidney, whereas immunosuppressing a cancer patient does the opposite',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 47-year-old with biopsy-proven membranous nephropathy has 9 g per day of proteinuria and a serum albumin of 19 g/L. He develops sudden left flank pain, a further rise in proteinuria and a pulmonary embolism. Which mechanism best explains the thrombotic tendency?',
      options: [
        { id: 'a', text: 'Fibrinogen is lost in the urine, leaving an unopposed platelet contribution to clotting' },
        { id: 'b', text: 'Antithrombin III is lost in the urine while the liver raises fibrinogen and factors V and VIII in response to low oncotic pressure' },
        { id: 'c', text: 'Hyperlipidaemia directly activates factor X on the endothelial surface' },
        { id: 'd', text: 'Urinary protein loss causes a reactive thrombocytosis that alone accounts for the thrombosis' },
      ],
      answerId: 'b',
      explanation: 'The nephrotic leak has a molecular-weight window set around albumin at 69 kDa. Antithrombin III is smaller at 58 kDa and is lost with it, whereas fibrinogen at 340 kDa cannot be filtered and instead rises, because falling plasma oncotic pressure drives generalised hepatic protein synthesis. The net position is an anticoagulant deficit against a procoagulant excess, which is why renal vein thrombosis is the signature complication and why membranous nephropathy, the lesion with the deepest and most sustained hypoalbuminaemia, carries the highest risk. Fibrinogen is far too large to appear in the urine, and hyperlipidaemia and platelet counts are associated findings rather than the driving mechanism.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A 22-year-old man notices dark red urine 24 hours after the onset of a sore throat. Serum C3 and C4 are both normal and the anti-DNase B titre is not raised. Which renal biopsy finding is expected?',
      options: [
        { id: 'a', text: 'Subepithelial humps with granular C3 along the capillary walls' },
        { id: 'b', text: 'Mesangial IgA deposits with mesangial matrix expansion and hypercellularity' },
        { id: 'c', text: 'Smooth linear IgG outlining every capillary loop' },
        { id: 'd', text: 'Diffuse GBM thickening with subepithelial deposits and silver-positive spikes' },
      ],
      answerId: 'b',
      explanation: 'The interval decides this question before any serology is read. Post-streptococcal disease requires a latent period of 1 to 4 weeks because the immune complexes do not exist until the antibody response has been mounted, and it consumes complement through the alternative pathway, so C3 falls with a near-normal C4. Haematuria arriving within a day or two of the mucosal infection means the pathogenic material was already circulating: galactose-deficient IgA1 complexed with an anti-glycan IgG, deposited in the mesangium, with serum C3 left intact. A normal C3 with a normal anti-DNase B therefore confirms what the timing already said. Linear IgG would indicate anti-GBM disease and spikes would indicate membranous nephropathy, neither of which presents this way.',
      tests: 'disease',
    },
    {
      id: 'q3',
      stem: 'A 64-year-old has a creatinine rise from 95 to 470 micromol/L over three weeks with dysmorphic haematuria and 1.8 g per day of proteinuria. Biopsy shows cellular crescents in 70% of glomeruli with segmental fibrinoid necrosis, and immunofluorescence is negative for immunoglobulin and complement. Which investigation will name the disease?',
      options: [
        { id: 'a', text: 'Anti-GBM antibody, since crescents indicate antibody bound to the basement membrane' },
        { id: 'b', text: 'ANCA testing with PR3 and MPO specificities' },
        { id: 'c', text: 'Anti-PLA2R antibody' },
        { id: 'd', text: 'Anti-streptolysin O titre' },
      ],
      answerId: 'b',
      explanation: 'Crescentic glomerulonephritis is defined morphologically as crescents in more than half the glomeruli, and immunofluorescence splits it into exactly three types. Negative staining is not a failed stain but the diagnosis: pauci-immune disease, roughly 44% of cases, in which ANCA-activated neutrophils damage the wall directly, with PR3 specificity pointing to granulomatosis with polyangiitis and MPO specificity to microscopic polyangiitis. Anti-GBM disease would have stained linear and immune-complex disease granular. The urgency is histological rather than serological: these crescents are still cellular and therefore reversible, but they organise into fibrous crescents within weeks, so immunosuppression starts on the biopsy rather than on the serology result.',
      tests: 'investigation',
    },
  ],
};

export default rbpNephroticNephriticSyndromes;
