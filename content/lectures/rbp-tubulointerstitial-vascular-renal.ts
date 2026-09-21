import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpTubulointerstitialVascularRenal: Lecture = {
  id: 'rbp-tubulointerstitial-vascular-renal',
  title: 'Tubulointerstitial & Vascular Renal Disease',
  system: 'renal',
  source: 'Ch 13 — Kidney and Its Collecting System',
  updated: '2026-09-19',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'Ch 13 Kidney and Its Collecting System' },
    { kind: 'disease', label: 'Acute tubular necrosis, ischaemic and nephrotoxic' },
    { kind: 'disease', label: 'Interstitial nephritis, pyelonephritis and reflux nephropathy' },
    { kind: 'disease', label: 'Nephrosclerosis, malignant hypertension and thrombotic microangiopathy' },
    { kind: 'mechanism', label: 'Outer medullary oxygen economics' },
  ],

  highYield: [
    '**The outer medulla dies first, and the reason is arithmetic rather than anatomy.** The kidney takes **20 to 25% of cardiac output**, but that blood is spent on filtration in the cortex, and the vasa recta hairpin then **short-circuits oxygen from the descending to the ascending limb before it ever reaches the medulla**. The result is a standing gradient: cortical tissue runs at a **PO2 near 50 mmHg** while the **outer medulla sits at roughly 10 to 20 mmHg** — already close to the anaerobic threshold in a healthy person. Two segments live in that outer stripe and both are the nephron at its most expensive. The **straight S3 segment of the proximal tubule** reabsorbs the bulk of the filtered load, has **almost no glycolytic reserve**, and depends entirely on oxidative phosphorylation. The **thick ascending limb** runs **NKCC2** against the corticomedullary gradient, the single largest ATP bill in the tubule. High demand laid directly on the thinnest supply is why a hypotensive episode kills the outer stripe of the outer medulla before anywhere else, and why the identical territory is picked out by sickling, by radiocontrast and by papillary necrosis. The reversible-to-irreversible transition itself is set out in [[rbp-cell-injury-reversible-irreversible]].',
    '**Acute tubular necrosis comes in two flavours that share a syndrome but differ in the one thing that decides recovery: whether the tubular basement membrane survived.** **Ischaemic ATN** produces patchy necrosis with skip lesions along the whole nephron and, crucially, **tubulorrhexis — actual rupture of the tubular basement membrane** — so regeneration has no scaffold to grow along and repair proceeds partly by fibrosis with permanent nephron loss. **Nephrotoxic ATN** concentrates in the proximal tubule because that is where the transporters are, but it **leaves the basement membrane intact**, so surviving cells dedifferentiate, migrate along the membrane and repopulate the tubule, and complete recovery is the expectation. The shared morphology is unimpressive against the degree of renal failure: loss of brush border, cell swelling, detachment, and casts of shed epithelium in a **Tamm-Horsfall protein** matrix, which appear in the urine as **muddy brown granular casts**. The clinical course runs in three phases with two different lethal electrolytes: initiation over about 36 hours, a **maintenance phase** of oliguria at **40 to 400 mL per day** lasting days to 2 or 3 weeks in which **hyperkalaemia** is what kills, and a **recovery phase** of polyuria in which **hypokalaemia and volume depletion** are what kill, because regenerated tubules transport solute before they can concentrate. See [[acute-kidney-injury-azotemia]] for the clinical staging.',
    '**Nephrotoxic injury is not one process — each toxin names its own lesion and each lesion names its own test.** **Aminoglycosides** are endocytosed by **megalin** in the proximal brush border and accumulate in lysosomes, producing a characteristically **non-oliguric** acute kidney injury with renal magnesium and potassium wasting. **Radiocontrast** combines medullary vasoconstriction with direct tubular toxicity and strikes precisely the outer medulla already described. **Ethylene glycol** is metabolised to oxalate, and **envelope-shaped calcium oxalate crystals** in the urine with a raised osmolar and anion gap are diagnostic. **Rhabdomyolysis** delivers myoglobin, which forms pigment casts and scavenges nitric oxide: the discriminator is a **dipstick strongly positive for blood with no red cells on microscopy**, alongside a creatine kinase in the tens of thousands. **Tumour lysis** delivers urate; **myeloma** delivers free light chains that complex with Tamm-Horsfall protein into **hard, fractured tubular casts surrounded by a giant-cell reaction**, which is why a cast nephropathy diagnosis obliges a serum free light chain assay rather than a renal one. The unifying rule is that the proximal tubule is the organ of concentration for the filtrate, so it is also the organ of concentration for every filtered poison.',
    '**Acute interstitial nephritis is a hypersensitivity to a drug, not a toxicity from it — so it is dose-independent, delayed, and faster on rechallenge.** Latency runs **days to 2 weeks after a first exposure** and can be **months with proton pump inhibitors and NSAIDs**, but a re-exposure reproduces it in **days**, which is the behaviour of an immune memory rather than of a dose threshold. The interstitium is oedematous and infiltrated by lymphocytes, macrophages, plasma cells and **eosinophils**, with **tubulitis** as leukocytes cross the tubular basement membrane, and non-caseating granulomas in some drug reactions. The usual culprits are **penicillins and cephalosporins, NSAIDs, proton pump inhibitors, rifampicin, sulfonamides, allopurinol, mesalazine and checkpoint inhibitors**. Two traps sit in the classic teaching. The **triad of fever, rash and eosinophilia is present in well under a third of cases**, so its absence excludes nothing, and **urine eosinophils are neither sensitive nor specific enough to decide** — the diagnosis is made by withdrawing the drug and watching creatinine turn within **3 to 7 days**, or by biopsy when it does not. **NSAID-associated interstitial nephritis is the exception that proves the rule**: it usually has no fever, no rash and no eosinophilia, and it presents with nephrotic-range proteinuria because it is interstitial nephritis plus a minimal change lesion. Clinical detail in [[acute-interstitial-nephritis]].',
    '**Pyelonephritis is an anatomical problem before it is a microbiological one, and white cell casts are what place the infection above the bladder.** Over **85%** of cases are **ascending**: uropathogenic Escherichia coli colonises the distal urethra and uses **P fimbriae** to bind the P blood group antigen on uroepithelium, ascends to the bladder, then needs **vesicoureteral reflux** through an incompetent ureterovesical valve to reach the pelvis, and finally **intrarenal reflux** through **compound papillae**, whose flat open ducts of Bellini admit urine instead of closing under pressure. Compound papillae sit at the **upper and lower poles**, which is exactly where the scars of reflux nephropathy appear — the anatomy predicts the map. The gross picture is **patchy yellow suppurative abscesses with completely normal intervening cortex**, and the inflammation is tubulointerstitial with **glomeruli spared**, which is why proteinuria stays modest and why the urine shows neutrophils rather than red cell casts. **White cell casts** are neutrophils moulded in a tubular lumen, so they cannot have formed in the bladder: they localise infection to the kidney. **Haematogenous** pyelonephritis is the other route, seeding Staphylococcus aureus or Candida from endocarditis or bacteraemia, and it gives **scattered cortical microabscesses** rather than a wedge radiating from the pelvis. Chronic reflux disease ends as **coarse polar scars over blunted, deformed calyces** with thyroidisation of tubules — see [[acute-pyelonephritis-clinical]].',
    '**Three vascular lesions, three different pressures, three different kidney surfaces you can name across the room.** **Benign nephrosclerosis** is the kidney of long-standing moderate hypertension: plasma proteins insudate into afferent arterioles as **hyaline arteriolosclerosis**, the lumen narrows, and patchy ischaemic atrophy alternates with hypertrophied survivors to give a **symmetrically small kidney with a finely granular, leather-grained cortical surface**. Function is usually preserved with only mild proteinuria, and it rarely causes end-stage disease on its own except in Black patients, in whom APOL1 risk variants make it far more aggressive. **Malignant hypertension**, with diastolic pressure above roughly **120 to 130 mmHg** and papilloedema, is a different lesion entirely: **fibrinoid necrosis** of arterioles plus **hyperplastic arteriolitis, the concentric onion-skin lamellae** of smooth muscle and collagen in the intima, with pinpoint haemorrhages giving a **flea-bitten cortical surface**. It is a true emergency and untreated it kills within months. The **thrombotic microangiopathies** share a histology — **fibrin thrombi in glomerular capillaries and arterioles, endothelial swelling, subendothelial fluffy expansion, fragmented red cells** — but not a cause: Shiga-toxin HUS from Escherichia coli O157:H7, where the toxin binds **Gb3** on glomerular endothelium; complement-mediated atypical HUS from factor H, factor I or MCP mutations; and TTP from **ADAMTS13 activity below 10%** leaving ultra-large von Willebrand multimers in the circulation.',
  ],

  mechanism: {
    title: 'Why the outer medulla dies first, and whether it comes back',
    steps: [
      { id: 's1', label: 'Renal blood flow is 20 to 25% of cardiac output, but it is spent on cortical filtration rather than on feeding the medulla', emphasis: 'normal' },
      { id: 's2', label: 'Countercurrent exchange in the vasa recta shunts oxygen from the descending to the ascending limb, leaving outer medullary PO2 near 10 to 20 mmHg against about 50 mmHg in cortex', detail: 'The gradient that lets the kidney concentrate urine is the same gradient that starves the tissue building it.', emphasis: 'key' },
      { id: 's3', label: 'The two highest ATP consumers sit in that low-oxygen stripe: the S3 proximal segment with almost no glycolytic reserve, and the thick ascending limb running NKCC2', emphasis: 'key' },
      { id: 's4', label: 'Hypotension or sepsis drops perfusion; ATP falls, Na-K-ATPase fails, cells swell, the brush border sheds, and the actin cytoskeleton mislocalises integrins so tubular cells detach from their basement membrane', detail: 'Nephrotoxins reach the same endpoint by a different door, being concentrated by the very transporters that define the proximal tubule.', emphasis: 'normal' },
      { id: 's5', label: 'Detached cells plus Tamm-Horsfall protein form obstructing casts: intratubular pressure rises, filtrate leaks back across denuded basement membrane, and endothelin-driven vasoconstriction cuts flow further, so GFR collapses out of all proportion to the histology', emphasis: 'danger' },
      { id: 's6', label: 'Outcome is decided by the basement membrane: intact after nephrotoxic injury, so surviving cells repopulate over 1 to 2 weeks; ruptured by tubulorrhexis after ischaemia, so repair is by fibrosis and those nephrons are gone', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Muddy brown granular casts in the urinary sediment', mechanism: 'Pigmented casts of sloughed tubular epithelium set in a Tamm-Horsfall protein matrix; prerenal azotaemia has intact tubules and therefore a bland sediment with hyaline casts only', significance: 'key' },
    { sign: 'Casts composed of neutrophils in a patient with fever and loin tenderness', mechanism: 'Neutrophils moulded within a tubular lumen, which cannot happen in the bladder, so the cast localises the infection to renal parenchyma rather than to cystitis', significance: 'key' },
    { sign: 'Symmetrically small kidneys with a finely granular, leather-grained cortical surface', mechanism: 'Benign nephrosclerosis: hyaline narrowing of afferent arterioles causes patchy subcapsular ischaemic atrophy between hypertrophied surviving parenchyma', significance: 'key' },
    { sign: 'Flea-bitten cortical surface with pinpoint petechial haemorrhages', mechanism: 'Malignant hypertension: fibrinoid necrosis weakens arteriolar walls until they rupture, so the surface haemorrhages are the gross expression of the microscopic necrosis', significance: 'key' },
    { sign: 'Coarse, broad, U-shaped cortical scars at the upper and lower poles sitting over blunted and deformed calyces', mechanism: 'Reflux nephropathy: intrarenal reflux enters only through polar compound papillae, and destruction of the papilla pulls the calyx open beneath the scar', significance: 'key' },
    { sign: 'Fever and a maculopapular rash 10 days after starting a beta-lactam, with sterile pyuria', mechanism: 'Drug-hapten hypersensitivity in the interstitium with eosinophils and tubulitis; the full triad appears in well under a third of cases, so its absence never excludes the diagnosis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Urine dipstick strongly positive for blood with no red cells on microscopy, and a creatine kinase of 48,000 U/L', meaning: 'Myoglobinuric pigment nephropathy from rhabdomyolysis. The dipstick reads the peroxidase activity of haem, not intact erythrocytes, so volume resuscitate before the casts form rather than investigating a glomerulonephritis' },
    { clue: 'Fractional excretion of sodium above 2% with urine osmolality near 300 mOsm/kg and urine sodium above 40 mmol/L', meaning: 'Established acute tubular necrosis: the tubule has lost both sodium reabsorption and concentrating ability. Prerenal azotaemia gives the mirror image, below 1% with urine osmolality over 500. After a loop diuretic the index is invalid, so use fractional excretion of urea below 35% instead' },
    { clue: 'Creatinine falling within 3 to 7 days of stopping a recently started proton pump inhibitor', meaning: 'This is the diagnostic test for acute interstitial nephritis. Do not wait on urine eosinophils, which lack both sensitivity and specificity — withdraw the drug, watch the curve, and biopsy only if it does not turn' },
    { clue: 'Ultrasound showing asymmetric kidneys with coarse cortical scars, confirmed as photopenic polar defects on DMSA scintigraphy', meaning: 'Reflux nephropathy from childhood intrarenal reflux. The calyceal deformity beneath each scar is what separates this from vascular scarring, which never deforms the collecting system' },
    { clue: 'Schistocytes on the film, platelets 25 x 10^9/L, high LDH, negative Coombs test, with normal prothrombin time and fibrinogen', meaning: 'Thrombotic microangiopathy rather than disseminated intravascular coagulation, which consumes fibrinogen and prolongs the clotting times. ADAMTS13 activity below 10% then names TTP rather than HUS' },
    { clue: 'CT urography showing a sloughed papilla with a ring shadow and a clubbed calyx', meaning: 'Papillary necrosis, the outer-medullary catastrophe. Four causes carry it: diabetes mellitus, obstruction with infection, analgesic abuse and sickle cell disease — and more than one is usually present' },
  ],

  treatment: [
    {
      logic: 'In interstitial nephritis, stopping the drug is not preparation for treatment — it is the treatment',
      detail: 'The lesion is a **T-cell hypersensitivity against a drug hapten presented in the interstitium**, so removing the antigen is definitive and creatinine typically begins falling within **3 to 7 days**. Corticosteroids are reserved for the patient whose creatinine has not turned by about a week, or whose biopsy shows a dense cellular infiltrate with **interstitial fibrosis not yet established** — once fibrosis is laid down steroids change nothing, which is the argument for an early biopsy rather than a long watchful wait. The rule that costs marks in vivas is that this is immunological memory: **rechallenge with the same drug or its class reproduces the disease faster and more severely**, so the culprit goes on the allergy list permanently. Because the target is the interstitium rather than the glomerulus, the sediment is sterile pyuria with white cell casts and only modest proteinuria — the exception being NSAIDs, which add a minimal change lesion on top ([[acute-interstitial-nephritis]]).',
    },
    {
      logic: 'In acute tubular necrosis you cannot shorten the tubule repair clock, so you keep the patient alive while it runs',
      detail: 'Nothing accelerates tubular regeneration: **low-dose dopamine, loop diuretics and mannitol have all failed** to change mortality or dialysis-free survival, and converting oliguria to non-oliguria is cosmetic rather than protective. What changes outcome is unglamorous — restore renal perfusion, stop the nephrotoxin, relieve obstruction, treat **hyperkalaemia** hard during the oliguric maintenance phase, and dialyse for the standard indications. Then anticipate the phase change: during **recovery the urine output can exceed 3 litres a day** because regenerated tubules resume transport before they regain concentrating ability, and the deaths at that point are from **hypokalaemia and volume depletion**, not uraemia. The prognostic split is set by the basement membrane: nephrotoxic injury usually recovers fully, whereas ischaemic injury with tubulorrhexis leaves permanent nephron loss and a higher lifetime risk of chronic kidney disease ([[acute-kidney-injury-azotemia]]).',
    },
  ],

  mnemonics: [
    {
      hook: 'High demand meets the thinnest supply: the outer medulla goes first',
      expansion: [
        'Cortex runs at a PO2 near 50 mmHg; the outer medulla runs at roughly 10 to 20',
        'The reason is the vasa recta hairpin, which shunts oxygen across before it reaches the tissue',
        'The S3 proximal segment sits there with almost no glycolytic reserve',
        'The thick ascending limb sits there running NKCC2, the largest ATP bill in the nephron',
        'So ischaemic necrosis, radiocontrast injury, sickling and papillary necrosis all pick the same stripe',
      ],
    },
    {
      hook: 'Casts name the compartment the trouble came from',
      expansion: [
        'Red cell cast: the glomerulus, because only a ruptured GBM lets whole red cells into the tubule',
        'White cell cast: the renal tubule, so pyelonephritis rather than cystitis',
        'Muddy brown granular cast: dead tubular epithelium, so acute tubular necrosis rather than prerenal azotaemia',
        'Hyaline casts alone: prerenal, tubules intact and simply under-perfused',
        'Broad waxy casts: dilated atrophic tubules, so chronic kidney disease',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'Interpreting a dipstick that is positive for blood',
      wrongInstinct: 'Blood on the dipstick means red cells in the urine, so go looking for a glomerular or urological source of bleeding',
      rightAnswer: 'If microscopy shows no red cells, the dipstick is detecting free haem from myoglobin or haemoglobin — send a creatine kinase and look at the colour of the spun plasma',
      why: 'The dipstick assays the peroxidase activity of haem rather than intact erythrocytes, so haem without cells means rhabdomyolysis or intravascular haemolysis; the plasma then separates them, staying clear in rhabdomyolysis because myoglobin is small and cleared fast, and turning pink in haemolysis because haemoglobin is bound to haptoglobin and retained',
    },
    {
      questionCategory: 'Deciding whether a scarred kidney is vascular or infective in origin',
      wrongInstinct: 'A small scarred kidney in a long-standing hypertensive is nephrosclerosis, since hypertension is the commonest cause of renal scarring',
      rightAnswer: 'Look at the calyx underneath the scar: reflux nephropathy gives coarse polar scars sitting over blunted, deformed calyces, while nephrosclerosis gives a symmetrical, finely granular surface and never deforms the collecting system',
      why: 'The two scars follow different routes — intrarenal reflux enters only through the compound papillae of the upper and lower poles and destroys the papilla, which drags the calyx open, whereas ischaemic atrophy is subcapsular and diffuse and leaves the calyces untouched',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'After a prolonged hypotensive episode in theatre, renal biopsy shows necrosis concentrated in the straight segment of the proximal tubule and in the thick ascending limb within the outer medulla, with relative sparing of the cortex. What best explains this distribution?',
      options: [
        { id: 'a', text: 'These segments receive the highest concentration of filtered nephrotoxin during hypotension' },
        { id: 'b', text: 'Countercurrent exchange in the vasa recta leaves outer medullary PO2 near 10 to 20 mmHg, and these two segments carry the highest ATP demand in the nephron' },
        { id: 'c', text: 'These segments lack a tubular basement membrane and so detach more readily' },
        { id: 'd', text: 'Glomerular filtration ceases first in juxtamedullary nephrons, starving their tubules of substrate' },
      ],
      answerId: 'b',
      explanation: 'The medulla is hypoxic by design. The vasa recta hairpin that preserves the corticomedullary osmotic gradient also allows oxygen to diffuse from the descending to the ascending limb before reaching the tissue, so the outer medulla operates at roughly 10 to 20 mmHg against about 50 mmHg in cortex. The two segments living there are the nephron most expensive workers: the S3 proximal segment, which reabsorbs the bulk of the filtered load and has almost no glycolytic reserve, and the thick ascending limb, which drives NKCC2 against the gradient. High demand on a marginal supply means a fall in perfusion crosses the anaerobic threshold there first. Nephrotoxins injure the same proximal tubule for a different reason, namely transporter-mediated concentration, and all tubular segments retain a basement membrane.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A 26-year-old woman has a temperature of 39 degrees Celsius, loin tenderness and dysuria. Urine microscopy shows abundant neutrophils and casts composed of neutrophils. What conclusion does the cast support that pyuria alone does not?',
      options: [
        { id: 'a', text: 'The causative organism is Escherichia coli rather than a Gram-positive coccus' },
        { id: 'b', text: 'The neutrophils were moulded within a renal tubule, so the infection involves the kidney and not only the bladder' },
        { id: 'c', text: 'There is coexisting glomerulonephritis' },
        { id: 'd', text: 'An obstructing stone is present and the kidney is at risk of pyonephrosis' },
      ],
      answerId: 'b',
      explanation: 'Pyuria only proves that neutrophils reached the urine at some point along the tract, and a bladder infection produces it just as readily. A cast is a cylindrical mould of a tubular lumen, formed around a Tamm-Horsfall protein matrix, so anything embedded in one must have been in the tubule when it set. White cell casts therefore place the inflammation in renal parenchyma and separate pyelonephritis from cystitis at the microscope rather than at the bedside. The cast says nothing about the organism, and glomeruli are characteristically spared in pyelonephritis, which is why the proteinuria stays modest and why red cell casts are absent. Obstruction is a separate question answered by imaging.',
      tests: 'investigation',
    },
    {
      id: 'q3',
      stem: 'A 38-year-old presents with blood pressure 230/135 mmHg, papilloedema and a creatinine rising over days. Renal biopsy shows fibrinoid necrosis of arterioles together with concentric laminated layers of intimal smooth muscle, and the cortical surface at nephrectomy shows pinpoint petechiae. Which lesion is described?',
      options: [
        { id: 'a', text: 'Hyaline arteriolosclerosis of benign nephrosclerosis, producing a finely granular cortical surface' },
        { id: 'b', text: 'Hyperplastic arteriolitis with fibrinoid necrosis, the lesion of malignant hypertension, producing a flea-bitten cortical surface' },
        { id: 'c', text: 'Nodular glomerulosclerosis of diabetes with Kimmelstiel-Wilson nodules' },
        { id: 'd', text: 'Fibromuscular dysplasia of the main renal artery with a string-of-beads appearance' },
      ],
      answerId: 'b',
      explanation: 'Two arteriolar lesions define malignant hypertension and both are present here: fibrinoid necrosis, in which plasma proteins and fibrin infiltrate a wall damaged by extreme pressure, and hyperplastic arteriolitis, the concentric onion-skin lamellae of smooth muscle and collagen that narrow the lumen further. Rupture of the necrotic arterioles produces the pinpoint surface haemorrhages known as a flea-bitten kidney. Benign nephrosclerosis is the slow lesion of moderate hypertension, with hyaline rather than fibrinoid change and a finely granular surface, and it does not raise creatinine over days. Thrombotic microangiopathy shares fibrin thrombi but not the hyperplastic onion-skinning, and the combination of a diastolic pressure this high with papilloedema settles it.',
      tests: 'disease',
    },
  ],
};

export default rbpTubulointerstitialVascularRenal;
