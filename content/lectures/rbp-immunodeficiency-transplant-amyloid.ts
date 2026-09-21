import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpImmunodeficiencyTransplantAmyloid: Lecture = {
  id: 'rbp-immunodeficiency-transplant-amyloid',
  title: 'Immunodeficiency, Transplant Rejection & Amyloidosis',
  system: 'immune',
  source: 'Ch 4 — Diseases of the Immune System',
  updated: '2026-09-21',
  tags: [
    { kind: 'system', label: 'Pathology' },
    { kind: 'lecture', label: 'Ch 4 Diseases of the Immune System' },
    { kind: 'mechanism', label: 'Immune defects, graft injury & protein deposition' },
    { kind: 'disease', label: 'Transplant rejection, GVHD & amyloidosis' },
  ],

  highYield: [
    '**Rejection is classified by timing AND mechanism together, because the pair — not the calendar alone — chooses the treatment.** **Hyperacute rejection** happens in **minutes to hours, on the operating table**: preformed antibody (**ABO isoagglutinins**, or **anti-HLA** from pregnancy, transfusion or a previous graft) binds donor endothelium the moment it is perfused, fixes complement and produces **fibrinoid necrosis with widespread thrombosis** — the kidney turns mottled, cyanotic and flaccid in front of the surgeon. It is **prevented by ABO typing and crossmatching, never treated**; the graft comes out. **Acute cellular (T-cell-mediated) rejection** runs **days to months** and is the common early episode: mononuclear cells invade tubular epithelium (**tubulitis**) and lift arterial endothelium (**endarteritis**), and it **responds to increased immunosuppression** — pulse methylprednisolone, then anti-thymocyte globulin if steroid-resistant. **Acute humoral (antibody-mediated) rejection** can occur at any time, is driven by **donor-specific antibody**, and shows **neutrophils in peritubular capillaries with C4d deposition**; it needs the antibody removed, not the T cell suppressed. **Chronic rejection** emerges over **months to years** as **intimal fibromuscular hyperplasia** narrowing arteries concentrically, with **interstitial fibrosis and tubular atrophy** behind it — and it is **largely untreatable**, which is exactly the point: it is the ceiling on long-term graft survival, so the only strategy against it is prevention. Allorecognition detail sits in [[transplant-allorecognition-rejection]].',
    '**Direct and indirect allorecognition are two routes to the same graft, and they dominate at different times — which is why the early and late rejections differ.** In **direct allorecognition**, recipient T cells see **intact donor MHC** on **donor passenger dendritic cells** carried in with the organ. The alloreactive precursor frequency is enormous — of the order of **1 to 10 per cent of the recipient T-cell repertoire**, against roughly **1 in 100,000** for a conventional foreign peptide — because an allogeneic MHC molecule with its bound peptide structurally mimics self-MHC-plus-foreign-peptide. That frequency is why **acute cellular rejection is early and violent**. In **indirect allorecognition**, recipient antigen-presenting cells take up donor MHC, process it and present the fragments on **self class II**, delivering **CD4 help to B cells** and therefore **donor-specific antibody**. Passenger leukocytes die within weeks, so the direct pathway fades while the indirect pathway runs for the life of the graft — which is why **antibody-mediated and chronic rejection are late**. The matching corollary follows the mechanism: HLA matching buys most where the graft must last decades and the recipient can wait — **kidney** (**DR matters most, then B, then A**) and **haematopoietic transplantation**, where mismatch is punished by graft-versus-host disease as well. It buys far less for **heart and lung**, where cold ischaemic time forbids waiting for a match, and least for **liver**, which is comparatively tolerogenic and is routinely transplanted across HLA mismatch. **ABO compatibility is non-negotiable for every vascularised organ**, because isoagglutinins are already circulating before the anastomosis is made. See [[transplant-matching-immunosuppression]].',
    '**Graft-versus-host disease is the inversion — the graft attacks the host — and it needs three conditions at once.** The **Billingham requirements**: the **graft must be immunocompetent** (it must carry mature donor T cells), the **host must be unable to reject it** (ablated, immunodeficient, or simply too genetically close to see it), and there must be **histoincompatibility** (host antigens the donor cells read as foreign). Remove any one and there is no disease. That is why **allogeneic haematopoietic stem cell transplantation** is the classic setting, and why **transfusion-associated graft-versus-host disease** occurs when a cellular blood product carrying viable donor lymphocytes is given to an immunodeficient recipient — **gamma irradiation of the product**, which blocks donor lymphocyte proliferation, is the specific preventive step. The three classic targets — **skin, gut and liver** — are not arbitrary: all three are **high-turnover barrier epithelia with dense antigen-presenting-cell traffic**, all three are **damaged first by the conditioning regimen**, which releases the danger signals and cytokines that prime donor T cells, and the liver adds **biliary epithelium** as a further target. Acute disease gives a **maculopapular rash favouring palms, soles and ears**, **secretory diarrhoea with apoptosis of crypt cells** progressing to crypt dropout, and **cholestatic jaundice with a raised alkaline phosphatase**. Chronic disease mimics autoimmune illness: **scleroderma-like skin, sicca syndrome and bronchiolitis obliterans**. The awkward truth is that the same donor T cells deliver the **graft-versus-leukaemia effect**, so full T-cell depletion abolishes the disease and raises relapse — the target is control, not elimination. Host immune defects in their own right are in [[rbp-primary-secondary-immunodeficiencies]].',
    '**Amyloidosis is not one disease but one SHAPE.** More than **30 unrelated precursor proteins** — an immunoglobulin fragment, an acute-phase apolipoprotein, a thyroid-hormone carrier, a subunit of MHC class I — converge on a single misfolded conformation: the **cross-beta-pleated sheet**, assembled into **rigid, non-branching fibrils 7.5 to 10 nm wide**, always accompanied by two non-fibrillar companions, **serum amyloid P component** and glycosaminoglycans. Because the **conformation is shared while the amino acid sequence is not**, one stain finds all of them: **Congo red with apple-green birefringence under polarised light**. The birefringence, not the red colour, is the diagnostic event, because it reports the ordered beta-sheet alignment that only amyloid has. On haematoxylin and eosin the deposit is bland **amorphous eosinophilic extracellular material**; on electron microscopy it is a felt of straight non-branching fibrils. Carry the rule in this form: **Congo red proves a deposit IS amyloid and says nothing about WHICH amyloid it is.** The folding step itself is in [[protein-misfolding-amyloid]].',
    '**Classify by precursor, because the precursor predicts the organs and selects the treatment.** **AL** — immunoglobulin **light chain** from a plasma-cell dyscrasia (myeloma, but more often a small clone behind an apparently trivial paraprotein); **lambda outnumbers kappa roughly 3 to 1**, inverting the normal serum ratio, which is itself a clue. Organs: **heart, kidney, tongue, peripheral nerve and soft tissue** — the widest spread of any type, and the commonest systemic amyloidosis in high-income countries. **AA** — **serum amyloid A**, an acute-phase apolipoprotein made by the liver under **IL-6 and IL-1**, so it requires **sustained inflammation**: rheumatoid arthritis, inflammatory bowel disease, chronic infection such as tuberculosis, bronchiectasis or osteomyelitis, and familial Mediterranean fever. Organs: **the kidney dominates** — proteinuria, then renal failure — with liver and spleen. **ATTR** — **transthyretin**, in two forms. **Hereditary ATTR** comes from a destabilising point mutation: **V122I**, carried by roughly **3 to 4 per cent of people of West African ancestry**, favours the heart; **V30M**, in endemic Portuguese, Swedish and Japanese foci, favours nerve. **Wild-type ATTR** is the age-related misfolding of an entirely normal protein, typically in **men over 70**, targets the heart, and is now recognised behind a real share of heart failure with preserved ejection fraction. **A-beta-2M** — **beta-2 microglobulin**, too large to cross older dialysis membranes, accumulating over years and depositing in **synovium, tendon sheath and bone**: **carpal tunnel syndrome**, shoulder pain, destructive arthropathy and pathological fracture. Localised forms obey the same rule with a local precursor — **A-beta** in Alzheimer plaques and cerebral amyloid angiopathy, **islet amyloid polypeptide** in type 2 diabetic islets, **calcitonin** in the stroma of medullary thyroid carcinoma.',
    '**Amyloid injures MECHANICALLY, not inflammatorily, and every clinical feature falls out of that one fact.** The deposit is extracellular and provokes **almost no leukocyte response and no granulation tissue** — it simply occupies space, causing **pressure atrophy** of the parenchyma it surrounds and stiffening the walls it infiltrates. Hence the pattern. **Restrictive cardiomyopathy**, whose discriminating sign is **thick ventricular walls on echocardiography with LOW voltages on the ECG**: hypertrophy adds myocytes and raises voltage, while amyloid adds electrically inert protein between them, so thickness and voltage move in opposite directions. **Nephrotic-range proteinuria with normal-sized or enlarged kidneys** and a bland urinary sediment, because the glomerular basement membrane is infiltrated rather than inflamed — amyloid kidneys do not shrink. **Macroglossia** with lateral tooth indentations, present in roughly **10 to 20 per cent of AL** and essentially no other type, so macroglossia in an amyloid patient means AL until proven otherwise. **Hepatosplenomegaly** that can be massive while transaminases stay normal and only **alkaline phosphatase** rises. And **periorbital purpura** after coughing or straining, from vascular fibril infiltration compounded by **acquired factor X deficiency**, the factor being adsorbed onto the fibrils themselves. The therapeutic corollary is the one students miss: **because this is not inflammation, corticosteroids do nothing** — the only lever is shutting off the supply of precursor.',
  ],

  mechanism: {
    title: 'Allorecognition to graft loss: why each rejection pattern arrives when it does',
    steps: [
      {
        id: 's1',
        label: 'The organ arrives carrying donor passenger dendritic cells that display intact donor MHC',
        detail: 'The graft supplies its own antigen-presenting cells. This is what makes the direct pathway possible at all, and it is also why the direct pathway is self-limiting: passenger leukocytes die out over weeks.',
        emphasis: 'key',
      },
      {
        id: 's2',
        label: 'If preformed antibody is already circulating, it strikes at reperfusion — minutes, not days',
        detail: 'ABO isoagglutinins or anti-HLA antibody from pregnancy, transfusion or a prior graft fix complement on donor endothelium immediately, giving fibrinoid necrosis and thrombotic occlusion. No immunosuppressive regimen can outrun an antibody that is already there, which is why crossmatching is a prevention step rather than a monitoring step.',
        emphasis: 'danger',
      },
      {
        id: 's3',
        label: 'Direct allorecognition primes an enormous alloreactive T-cell clone within days',
        detail: 'Allogeneic MHC plus peptide mimics self-MHC plus foreign peptide, so 1 to 10 per cent of the recipient repertoire responds, against about 1 in 100,000 for an ordinary antigen. The size of that clone is the reason acute cellular rejection is early and aggressive.',
        emphasis: 'key',
      },
      {
        id: 's4',
        label: 'Acute cellular rejection: CD8 cells kill tubular and endothelial cells while CD4 cells drive a delayed-type response',
        detail: 'Morphology is tubulitis and endarteritis with a dense interstitial mononuclear infiltrate. This is the reversible one: pulse methylprednisolone, escalating to anti-thymocyte globulin, restores function in most episodes.',
        emphasis: 'key',
      },
      {
        id: 's5',
        label: 'Indirect allorecognition provides CD4 help to B cells, generating donor-specific antibody',
        detail: 'Recipient antigen-presenting cells process donor MHC and present it on self class II. Because recipient cells never die out, this pathway persists indefinitely and is the origin of both antibody-mediated rejection and chronic injury. C4d in peritubular capillaries is its footprint.',
        emphasis: 'normal',
      },
      {
        id: 's6',
        label: 'Repeated low-grade endothelial injury produces intimal fibromuscular hyperplasia and interstitial fibrosis',
        detail: 'Graft arteriosclerosis is concentric and diffuse, unlike the eccentric plaque of ordinary atheroma, and it strangles the organ from the inside. There is no treatment that reverses it, so every decision earlier in the chain is judged by whether it prevents this.',
        emphasis: 'danger',
      },
    ],
  },

  examFindings: [
    {
      sign: 'The kidney becomes mottled, cyanotic and flaccid within minutes of the vascular clamps coming off',
      mechanism: 'Hyperacute rejection — preformed anti-ABO or anti-HLA antibody fixes complement on donor endothelium at once, giving fibrinoid necrosis and thrombotic occlusion of the microvasculature',
      significance: 'key',
    },
    {
      sign: 'Biopsy at 6 weeks: mononuclear cells burrowing between tubular epithelial cells and lifting arterial endothelium off the wall',
      mechanism: 'Acute T-cell-mediated rejection — tubulitis and endarteritis are the two lesions that define it, and both are reversible with increased immunosuppression',
      significance: 'key',
    },
    {
      sign: 'Neutrophils packed into peritubular capillaries with diffuse linear C4d staining, alongside circulating donor-specific antibody',
      mechanism: 'Acute antibody-mediated rejection — C4d is the covalently bound complement split product left behind on endothelium, so it marks classical pathway activation even after the antibody itself has been consumed',
      significance: 'key',
    },
    {
      sign: 'Maculopapular rash on palms, soles and ears with watery diarrhoea and conjugated hyperbilirubinaemia three weeks after allogeneic marrow transplantation',
      mechanism: 'Acute graft-versus-host disease — donor T cells attack the three barrier epithelia that conditioning damaged first, so skin, gut and liver declare themselves together',
      significance: 'key',
    },
    {
      sign: 'Echocardiography shows markedly thickened ventricular walls, but the ECG shows LOW voltages',
      mechanism: 'Cardiac amyloidosis — the wall is thickened by electrically inert extracellular protein rather than by added myocytes, so thickness and voltage move in opposite directions instead of together',
      significance: 'key',
    },
    {
      sign: 'Periorbital purpura appearing after a coughing fit, with a large tongue showing lateral tooth indentations',
      mechanism: 'AL amyloidosis — fibrils infiltrate vessel walls and make capillaries fragile, and factor X adsorbs onto the fibrils to produce an acquired deficiency; macroglossia is near-specific to AL',
      significance: 'supportive',
    },
  ],

  investigations: [
    {
      clue: 'ABO typing, a complement-dependent cytotoxicity or flow crossmatch, and a virtual crossmatch against single-antigen beads',
      meaning: 'This is the only defence against hyperacute rejection, because the antibody is already circulating and nothing given afterwards can catch it. Calculated panel-reactive antibody quantifies how sensitised a candidate is by pregnancy, transfusion and previous grafts, and therefore how hard a compatible organ will be to find.',
    },
    {
      clue: 'Allograft biopsy read against the Banff classification',
      meaning: 'It separates the treatable from the untreatable — cellular rejection from antibody-mediated rejection from chronic fibrosis — and just as importantly excludes the non-immune mimics that present identically: calcineurin-inhibitor toxicity, BK polyomavirus nephropathy, obstruction, infection and vascular thrombosis.',
    },
    {
      clue: 'C4d immunostaining of peritubular capillaries paired with donor-specific antibody testing',
      meaning: 'The pair defines antibody-mediated rejection. C4d persists because it binds covalently to endothelium when C4b is cleaved, so it is a durable record of classical complement activation. C4d-negative antibody-mediated rejection exists, so donor-specific antibody plus microvascular inflammation can make the diagnosis without it.',
    },
    {
      clue: 'Congo red on an abdominal fat-pad aspirate, or on rectal or labial salivary gland tissue',
      meaning: 'In suspected systemic amyloidosis this is the low-risk first biopsy, positive in roughly 70 to 80 per cent of AL, and it avoids taking tissue from a stiff, bleeding-prone amyloid heart. A positive result establishes amyloid; a negative result does not exclude it, so an involved organ may still need sampling.',
    },
    {
      clue: 'Typing by mass spectrometry on laser-microdissected Congo-red-positive deposits',
      meaning: 'This has displaced immunohistochemistry because antibody-based typing misassigns a meaningful minority of cases, and the assignment decides everything: plasma-cell chemotherapy for AL, inflammatory control for AA, a transthyretin stabiliser or silencer for ATTR. Note the trap it exists to defeat — a monoclonal protein on immunofixation does NOT prove AL, because a paraprotein and wild-type ATTR are both common in the elderly and coexist by chance.',
    },
    {
      clue: 'Bone scintigraphy with a bone-avid tracer such as technetium-labelled DPD or pyrophosphate',
      meaning: 'Strong myocardial uptake with a completely negative monoclonal screen (serum and urine immunofixation plus serum free light chain ratio) permits a diagnosis of ATTR cardiac amyloidosis without endomyocardial biopsy. AL is typically not avid, so the tracer separates the two commonest cardiac types non-invasively.',
    },
  ],

  treatment: [
    {
      logic: 'Match the drug to the rejection mechanism, because the wrong target wastes the graft',
      detail: '**Hyperacute** rejection is a prevention problem, not a treatment problem — **ABO typing and crossmatching**, and once it happens the graft is removed. **Acute cellular** rejection is T-cell-driven, so the answer is **pulse methylprednisolone**, escalating to **anti-thymocyte globulin** if steroid-resistant. **Acute antibody-mediated** rejection is driven by an antibody that is already made, so suppressing T cells is aimed at the wrong cell: the answer is to **remove the antibody with plasma exchange, blunt it with IVIG, and attack the source with anti-CD20 or a proteasome inhibitor**. **Chronic** rejection has no proven treatment at all, so the whole strategy is upstream — preventing donor-specific antibody, maintaining adherence, and avoiding under-immunosuppression. Before treating any of them, exclude the non-immune mimics: **infection, obstruction, drug toxicity and vascular thrombosis** all present as a rising creatinine.',
    },
    {
      logic: 'In amyloidosis, treat the factory, not the deposit',
      detail: 'No available drug dissolves established fibrils, so every effective therapy works by **cutting off precursor supply**, and that is why typing is not academic. **AL**: plasma-cell-directed therapy — a **bortezomib**-based regimen, with **daratumumab** added — to stop light chain production; organ recovery follows the haematological response, sometimes by many months. **AA**: suppress the inflammatory driver — **IL-1 blockade or colchicine** in familial Mediterranean fever, anti-TNF or anti-IL-6 in rheumatoid disease — and serum amyloid A falls with it. **ATTR**: **stabilise the tetramer with tafamidis** or **silence hepatic production with patisiran or vutrisiran**, since the liver makes essentially all circulating transthyretin. **A-beta-2M**: high-flux dialysis membranes, and definitively renal transplantation. **Corticosteroids have no role**, because amyloid deposition provokes no inflammatory infiltrate to suppress — which is the mechanistic point made clinical.',
    },
  ],

  mnemonics: [
    {
      hook: 'The clock names the culprit, and the culprit names the drug',
      expansion: [
        'Minutes, on the table: preformed antibody. Prevent with crossmatching; you cannot treat it.',
        'Days to months, cells inside the tubules: T cells. Treat with pulse steroids, then anti-thymocyte globulin.',
        'Any time, C4d in peritubular capillaries with donor-specific antibody: antibody. Treat by removing antibody, not by suppressing T cells.',
        'Months to years, thickened concentric intima with interstitial fibrosis: chronic. Nothing reverses it, so it is judged by prevention.',
      ],
    },
    {
      hook: 'The letter after the A names the factory',
      expansion: [
        'AL: immunoglobulin Light chain from a pLasma cell clone. Heart, kidney, tongue, nerve — the widest spread.',
        'AA: serum Amyloid A, the Acute-phase protein of chronic inflammation. Kidney first.',
        'ATTR: TransThyRetin, mutant or simply old. Heart and peripheral nerve.',
        'A-beta-2M: beta-2 microglobulin retained in long-term dialysis. Joints, tendon sheaths and the carpal tunnel.',
        'One stain for all four; four completely different treatments.',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'A thick-walled ventricle on echocardiography',
      wrongInstinct: 'Thick walls mean hypertrophy, so this is hypertensive heart disease or hypertrophic cardiomyopathy.',
      rightAnswer: 'Thick walls with LOW ECG voltages is amyloid. Hypertrophy raises voltage because it adds muscle; amyloid lowers it because it packs electrically inert protein between the muscle.',
      why: 'ECG voltage tracks conducting myocardium while echo thickness tracks total wall mass — so when the two disagree, the wall has been thickened by something that is not muscle.',
    },
    {
      questionCategory: 'Congo-red-positive tissue in a patient who also has a serum monoclonal protein',
      wrongInstinct: 'Monoclonal protein plus amyloid equals AL, so start plasma-cell chemotherapy.',
      rightAnswer: 'Type the deposit by mass spectrometry before treating.',
      why: 'Monoclonal gammopathy of undetermined significance is present in more than 3 per cent of people over 70, and wild-type ATTR cardiac amyloidosis is a disease of exactly that age group — so the two coexist by coincidence often enough that clinical inference alone commits a substantial minority of patients to the wrong drug.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Eight days after a kidney transplant the creatinine rises. Biopsy shows neutrophils filling peritubular capillaries with diffuse linear C4d staining, and single-antigen bead testing detects donor-specific antibody. Pulse methylprednisolone produces no improvement. What is the mechanism, and why did the steroids fail?',
      options: [
        { id: 'a', text: 'Antibody-mediated rejection — the injury is caused by antibody already in the circulation acting on endothelium, so removing or neutralising the antibody is required rather than suppressing T cells' },
        { id: 'b', text: 'Acute cellular rejection that was simply under-dosed, so the correct step is a second, larger steroid pulse' },
        { id: 'c', text: 'Hyperacute rejection presenting late, so the graft must be removed immediately' },
        { id: 'd', text: 'Chronic rejection, since C4d marks the intimal fibromuscular hyperplasia of graft arteriosclerosis' },
      ],
      answerId: 'a',
      explanation: 'C4d is the covalently bound complement split product deposited on endothelium when classical complement is activated there, and with circulating donor-specific antibody plus microvascular inflammation it defines antibody-mediated rejection. Corticosteroids and anti-thymocyte globulin are aimed at T cells, which are not the effector here, so treatment must remove the antibody by plasma exchange, blunt it with IVIG, and attack the plasma cell making it with anti-CD20 or a proteasome inhibitor. Hyperacute rejection occurs within minutes of reperfusion, and chronic rejection is a fibrotic lesion of months to years.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A child with severe combined immunodeficiency receives a non-irradiated packed red cell transfusion from a haploidentical relative and three weeks later develops a rash, secretory diarrhoea and cholestatic jaundice. Which condition did the transfusion supply that a healthy recipient would have defeated, and what single step prevents it?',
      options: [
        { id: 'a', text: 'It supplied histoincompatibility, prevented by ABO matching of the product' },
        { id: 'b', text: 'It supplied a host unable to reject the viable donor lymphocytes in the product, prevented by gamma irradiation of the product' },
        { id: 'c', text: 'It supplied preformed anti-HLA antibody, prevented by a pre-transfusion crossmatch' },
        { id: 'd', text: 'It supplied donor plasma cells, prevented by washing the product to remove IgA' },
      ],
      answerId: 'b',
      explanation: 'Graft-versus-host disease requires all three Billingham conditions: an immunocompetent graft, histoincompatibility, and a host that cannot reject the graft. A cellular blood product always contains viable donor lymphocytes and a related donor supplies the histoincompatibility, so the immunodeficiency is what converts an ordinary transfusion into an engrafting one. Gamma irradiation disables donor lymphocyte proliferation and is the specific preventive step. Washing to remove IgA prevents anaphylaxis in selective IgA deficiency, which is a different mechanism with a different indication.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A 78-year-old man has heart failure with a preserved ejection fraction, thick ventricular walls on echocardiography with low ECG voltages, and bilateral carpal tunnel releases eight years ago. A fat-pad aspirate is Congo-red positive. Serum immunofixation shows a small IgG kappa monoclonal protein. What is the correct next step?',
      options: [
        { id: 'a', text: 'Start bortezomib-based therapy, since a monoclonal protein with amyloid establishes AL' },
        { id: 'b', text: 'Type the deposit by mass spectrometry, because incidental monoclonal gammopathy and wild-type ATTR are both common at this age and coexist by chance' },
        { id: 'c', text: 'Start high-dose corticosteroids to reduce the inflammatory reaction around the deposits' },
        { id: 'd', text: 'Repeat the Congo red stain, since apple-green birefringence alone identifies the precursor protein' },
      ],
      answerId: 'b',
      explanation: 'This clinical picture — an elderly man, cardiac amyloid and a history of bilateral carpal tunnel syndrome preceding the heart disease by years — fits wild-type ATTR, but the paraprotein tempts a diagnosis of AL. Monoclonal gammopathy of undetermined significance is present in over 3 per cent of people past 70, so its presence is weak evidence in this age group. Congo red proves amyloid and says nothing about which precursor formed it, so typing by mass spectrometry on microdissected deposits (or bone scintigraphy with a negative monoclonal screen) must come before therapy, since AL and ATTR are treated in entirely different ways. Corticosteroids are useless because amyloid deposition provokes no inflammatory infiltrate.',
      tests: 'investigation',
    },
  ],
};

export default rbpImmunodeficiencyTransplantAmyloid;
