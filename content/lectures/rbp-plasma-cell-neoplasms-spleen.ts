import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpPlasmaCellNeoplasmsSpleen: Lecture = {
  id: 'rbp-plasma-cell-neoplasms-spleen',
  title: 'Plasma-cell Neoplasms, Spleen & Thymus',
  system: 'heme',
  source: 'Ch 11 — Hematopoietic and Lymphoid Systems',
  updated: '2026-09-16',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'Ch 11 Hematopoietic and Lymphoid Systems' },
    { kind: 'mechanism', label: 'One paraprotein, four organ consequences' },
    { kind: 'disease', label: 'Myeloma, MGUS, splenomegaly & thymoma' },
    { kind: 'investigation', label: 'Electrophoresis, light chains & the cold bone scan' },
  ],

  highYield: [
    '**A plasma-cell neoplasm is defined by what its product does, not by its bulk: one clone secreting one identical immunoglobulin, and every complication is downstream of that molecule.** Because every cell is a copy, the electrophoretic strip shows a **narrow-based M spike** in the gamma region instead of the broad polyclonal hump of chronic infection, and **immunofixation** names the heavy and light chain. Roughly **55%** of myelomas secrete **IgG**, **25%** IgA, and **15–20%** are **light-chain only**; IgD, IgM and non-secretory forms are rare. The clone simultaneously **suppresses normal plasma cells**, so the other immunoglobulin classes fall — **immunoparesis** — and recurrent bacterial infection, chiefly pneumococcal and Gram-negative, becomes the **commonest cause of death** in myeloma. That is worth stating plainly: patients with a vast excess of immunoglobulin die of infection, because none of it works. Clinical management sits in [[hhl-multiple-myeloma]].',
    '**Myeloma bone disease is pure resorption with NO repair, and that single fact produces the discriminator that separates it from metastatic carcinoma.** Myeloma cells and the stroma they educate secrete **RANKL**, **MIP-1-alpha** and **IL-6** while reducing osteoprotegerin, so **osteoclasts** are activated; at the same time **DKK1** blocks Wnt signalling and **silences osteoblasts**. Bone is therefore removed with nothing rebuilding it, giving sharply **punched-out lytic lesions** (skull, vertebrae, ribs, proximal long bones), pathological fracture, vertebral collapse and cord compression. The consequences for testing are exact: the **serum alkaline phosphatase is NORMAL** and the **radionuclide bone scan is NEGATIVE**, because both report **osteoblast** activity and there is none. Metastatic breast or prostate carcinoma provokes an osteoblastic reaction, so there the alkaline phosphatase is **raised** and the scan lights up. Imaging for myeloma therefore uses **skeletal survey, low-dose whole-body CT or whole-body MRI**. The resorbed calcium produces **hypercalcaemia** with confusion, constipation, polyuria and dehydration.',
    '**Renal failure in myeloma is mostly a light-chain problem, and the urine dipstick will lie to you about it.** Free light chains are small (about **22 kDa**) and are filtered freely, unlike intact immunoglobulin. In the distal tubule they combine with **Tamm-Horsfall protein** to form dense obstructive casts that provoke a **giant-cell reaction** — **cast nephropathy**, the classic myeloma kidney. Light chains are also directly toxic to proximal tubular cells, and deposit as **AL amyloid** (more often **lambda**) or as light-chain deposition disease. Add **hypercalcaemia**, dehydration, hyperuricaemia, NSAIDs and iodinated contrast and the kidney fails quickly. **Bence-Jones protein** is simply free light chain in urine, and here is the trap that is tested every year: a **urine dipstick detects albumin only**, so it can be **completely negative** while the patient excretes grams of light chain per day. A negative strip with heavy proteinuria on laboratory quantification means light chains until proven otherwise — confirm with **urine protein electrophoresis with immunofixation** or a **serum free light-chain ratio**.',
    '**The MGUS to smouldering to active myeloma ladder is quantitative for the clone but qualitative for the damage, and the rung you are on is decided by end-organ injury, not by the size of the spike.** **MGUS** requires an M protein under **30 g/L**, marrow plasma cells under **10%**, and **no** end-organ damage; it is common, found in about **3%** of people over **50** and over **5%** past **70**, and progresses at roughly **1% per year** — a number that justifies surveillance rather than treatment, and that does not decline with time. **Smouldering myeloma** has an M protein of **30 g/L or more** or marrow plasma cells of **10–60%**, still without damage, and progresses at about **10% per year for the first five years**, so it is watched more closely. **Active myeloma** requires **CRAB** — hyperCalcaemia, Renal impairment, Anaemia, Bone lesions — or a **myeloma-defining event**: marrow plasma cells of **60% or more**, an involved to uninvolved **serum free light-chain ratio of 100 or more**, or **more than one focal lesion on MRI**. Two relatives are worth separating: **solitary plasmacytoma** of bone or soft tissue, which usually progresses to myeloma; and **Waldenstrom macroglobulinaemia**, a lymphoplasmacytic lymphoma with **MYD88 L265P** secreting **IgM** — a huge pentameric molecule, so it causes **hyperviscosity** but characteristically **NO lytic bone lesions**, which is the discriminator.',
    '**Splenomegaly is graded before it is diagnosed, because the size of the spleen narrows the differential faster than any test.** **Massive** splenomegaly (below the umbilicus, often over **1000 g**) means a chronic process: **chronic myeloid leukaemia**, **primary myelofibrosis**, **chronic malaria**, **visceral leishmaniasis**, **Gaucher disease**, **hairy cell leukaemia** and **thalassaemia major**. **Moderate** enlargement fits **portal hypertension from cirrhosis**, lymphomas, chronic leukaemias, chronic haemolytic anaemias and storage disease. **Mild** enlargement fits acute processes — **infectious mononucleosis**, infective endocarditis, typhoid, sepsis, SLE and amyloid. **Hypersplenism** is a specific syndrome, not a synonym for a big spleen: splenomegaly **plus** cytopenia in one or more lineages **plus** a **compensating hypercellular marrow**, correctable by **splenectomy**. The mechanism is sequestration and accelerated destruction in an expanded red pulp, so the marrow is working normally and the problem is entirely downstream. Splenic histology is in [[hhl-spleen-thymus-malt]].',
    '**Removing the spleen trades a cytopenia for a permanent immunological deficit, and the reason it is ENCAPSULATED organisms specifically is worth deriving rather than memorising.** The spleen does two jobs no other organ does well: its macrophage-lined sinusoids **clear opsonised particles** from the bloodstream, and its **marginal-zone B cells** generate **T-independent IgM** against **polysaccharide capsules**. A bacterial capsule resists phagocytosis precisely because it is poorly immunogenic and prevents complement deposition, so clearing it depends on exactly the two functions that splenectomy removes. Hence **overwhelming post-splenectomy infection** by **Streptococcus pneumoniae**, **Haemophilus influenzae type b** and **Neisseria meningitidis** — fulminant over hours, with mortality per episode of up to about **50%**, highest in the **first two years** and in children. The prevention follows directly: **vaccinate at least two weeks before an elective splenectomy**, revaccinate on schedule, and give prophylactic penicillin. The film after splenectomy announces itself with **Howell-Jolly bodies** (nuclear remnants no longer pitted out), **target cells**, acanthocytes and **thrombocytosis**. In the anterior mediastinum, remember the four Ts — **thymoma, teratoma, thyroid and terrible lymphoma**: **thymoma** is a neoplasm of thymic **epithelial** cells, about **40%** of which are associated with **myasthenia gravis**, and it also causes **pure red cell aplasia** and hypogammaglobulinaemia. Conversely most myasthenics have **thymic follicular hyperplasia**, and only about **10–15%** have a thymoma. Lymphoid tumours of the same territory are in [[rbp-lymphoid-neoplasms-lymphoma]].',
  ],

  mechanism: {
    title: 'One clone, one molecule, four organs',
    steps: [
      { id: 's1', label: 'A post-germinal-centre plasma cell acquires an IgH translocation — commonly t(11;14) cyclin D1 or t(4;14) FGFR3 and MMSET — and expands in the marrow', emphasis: 'normal' },
      { id: 's2', label: 'Every daughter secretes the identical immunoglobulin: a narrow M spike appears while normal immunoglobulins are suppressed', detail: 'Immunoparesis is why the commonest cause of death is infection despite a huge total immunoglobulin level.', emphasis: 'key' },
      { id: 's3', label: 'The clone and the stroma release RANKL, MIP-1-alpha and IL-6 while DKK1 silences osteoblasts — resorption proceeds with no repair', emphasis: 'key' },
      { id: 's4', label: 'Punched-out lytic lesions, fracture and hypercalcaemia follow, with a NORMAL alkaline phosphatase and a cold bone scan because no osteoblast is working', emphasis: 'danger' },
      { id: 's5', label: 'Free light chains pass the glomerulus, bind Tamm-Horsfall protein and obstruct distal tubules as casts, while also depositing as AL amyloid', detail: 'The dipstick misses all of this, because it detects albumin and not light chain.', emphasis: 'danger' },
      { id: 's6', label: 'Immunoparesis, renal failure and hypercalcaemia converge — infection and renal failure kill, not tumour bulk', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Sudden severe thoracic back pain with loss of height in an elderly patient who is also anaemic', mechanism: 'Vertebral collapse through a lytic lesion. Osteoclastic resorption driven by RANKL without any osteoblastic repair leaves vertebral bodies structurally unsupported', significance: 'key' },
    { sign: 'Confusion, constipation, polyuria and dehydration in a patient with bone pain', mechanism: 'Hypercalcaemia from continuous bone resorption; the polyuria is nephrogenic diabetes insipidus from calcium acting on the collecting duct, which then worsens the renal failure', significance: 'key' },
    { sign: 'Blurred vision with engorged, sausage-shaped retinal veins, headache and mucosal bleeding', mechanism: 'Hyperviscosity. Typical of pentameric IgM in Waldenstrom macroglobulinaemia and much less common in IgG myeloma, which is why an IgM paraprotein with no lytic lesions points away from myeloma', significance: 'key' },
    { sign: 'Macroglossia with periorbital purpura appearing after coughing or straining', mechanism: 'AL amyloid from light chains infiltrating tongue and dermal vessel walls, which become friable — the raccoon-eye purpura is provoked by trivial pressure', significance: 'key' },
    { sign: 'A mass in the left upper quadrant reaching below the umbilicus, with a notched medial border, dull to percussion and moving downwards on inspiration, and you cannot get above it', mechanism: 'Massive splenomegaly. The notch and respiratory descent, and the inability to palpate above it, separate spleen from kidney at the bedside', significance: 'supportive' },
    { sign: 'Fatigable ptosis and diplopia worsening through the day, with a widened anterior mediastinum on chest radiograph', mechanism: 'Myasthenia gravis with a thymoma. The thymus supports autoreactive T-cell survival and anti-acetylcholine-receptor antibody production, so the gland itself is part of the disease', significance: 'key' },
  ],

  investigations: [
    { clue: 'Serum protein electrophoresis showing a narrow-based spike in the gamma region, typed by immunofixation as IgG kappa', meaning: 'A monoclonal paraprotein. The narrow base is the point — chronic infection or liver disease produces a broad-based polyclonal rise, so shape identifies clonality before any quantity is measured' },
    { clue: 'Widespread punched-out lytic lesions with a NORMAL serum alkaline phosphatase and a negative isotope bone scan', meaning: 'Characteristic of myeloma, not evidence against malignancy. Both tests report osteoblast activity, which myeloma abolishes through DKK1. Metastatic carcinoma raises the alkaline phosphatase and lights the scan' },
    { clue: 'Urine dipstick negative for protein but 4 g per day of protein on laboratory quantification', meaning: 'Bence-Jones proteinuria. The dipstick reagent detects albumin only and is blind to free light chains, so the mismatch itself is the clue. Confirm with urine immunofixation or a serum free light-chain ratio' },
    { clue: 'Marked rouleaux on the film, ESR 115 mm/h, and a narrowed anion gap with apparent hyponatraemia', meaning: 'A high-concentration paraprotein. Immunoglobulin coats red cells and cancels their surface charge so they stack; a cationic IgG narrows the anion gap, and displaced plasma water causes pseudohyponatraemia on indirect assays' },
    { clue: 'Marrow with sheets of plasma cells exceeding 10%, Dutcher bodies, and light-chain restriction on CD138-gated flow cytometry', meaning: 'Clonal plasma-cell burden. Neoplastic cells are CD138 and CD56 positive with CD19 negative, unlike normal plasma cells; a marrow plasma-cell fraction of 60% or more is myeloma-defining even without CRAB features' },
    { clue: 'Howell-Jolly bodies, target cells and a persistent thrombocytosis on a routine film', meaning: 'Hyposplenism or a previous splenectomy — the spleen is no longer pitting nuclear remnants from red cells. It is a call to action: check vaccination status and arrange antibiotic prophylaxis and a warning card' },
  ],

  treatment: [
    {
      logic: 'In myeloma, treat what will kill the patient this week before treating the clone',
      detail: 'Hypercalcaemia and cast nephropathy are the emergencies, and both answer to **volume**: aggressive **saline** rehydration increases light-chain clearance and lowers calcium, while **nephrotoxins** — NSAIDs, iodinated contrast — are withdrawn. **Bisphosphonates** or **denosumab** reduce skeletal events and treat hypercalcaemia by blocking the osteoclast arm; **radiotherapy** handles cord compression or a single intractably painful lesion. Because **immunoparesis** rather than tumour bulk is the leading cause of death, fever is treated as an emergency and vaccination is not optional. Only then does the clone matter: **proteasome inhibitor** plus **immunomodulatory drug** plus **anti-CD38 antibody**, with **autologous stem-cell transplant** in fit patients. Note that renal impairment from cast nephropathy is often **reversible** if treated early, which is why the sequence matters.',
    },
    {
      logic: 'Splenectomy buys a blood count and costs a lifetime of vigilance, so the vaccines go in first',
      detail: 'Because the spleen supplies both **opsonised-particle clearance** and **T-independent antipolysaccharide IgM**, its loss is specifically a deficit against **encapsulated** bacteria. Vaccinate against **pneumococcus**, **Haemophilus influenzae type b** and **meningococcus** at least **two weeks before** an elective operation, when the residual spleen can still mount a response, and give influenza vaccine annually. **Prophylactic penicillin** is standard at least for the first **two years** and lifelong in children and the immunosuppressed, and every patient carries a card and a rescue antibiotic supply, because **overwhelming post-splenectomy infection** runs from well to shocked in under a day. The same advice applies to **functional** hyposplenism — coeliac disease, sickle-cell autosplenectomy — which the film announces with **Howell-Jolly bodies** long before anyone asks.',
    },
  ],

  mnemonics: [
    {
      hook: 'CRAB, with the mechanism attached to each letter',
      expansion: [
        'Calcium raised — RANKL-driven osteoclastic resorption, not a parathyroid problem',
        'Renal failure — light chains plus Tamm-Horsfall protein forming obstructive distal casts',
        'Anaemia — marrow replacement by plasma cells, plus renal loss of erythropoietin',
        'Bone lesions — lytic and punched out, with a NORMAL alkaline phosphatase because osteoblasts are silenced',
      ],
    },
    {
      hook: 'Massive spleens are chronic — a clone, a parasite or a storage defect',
      expansion: [
        'A clone — chronic myeloid leukaemia, primary myelofibrosis, hairy cell leukaemia',
        'A parasite — chronic malaria, visceral leishmaniasis',
        'A storage defect — Gaucher disease, and by extension thalassaemia major with lifelong extramedullary haematopoiesis',
        'Acute illnesses such as infectious mononucleosis or endocarditis give a tip, not a mass',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'Lytic bone disease with normal biochemistry',
      wrongInstinct: 'The alkaline phosphatase is normal and the bone scan is clear, so the bone pain cannot be malignant',
      rightAnswer: 'That combination is typical of myeloma. Order a skeletal survey or whole-body low-dose CT or MRI, with serum electrophoresis and free light chains',
      why: 'Alkaline phosphatase and the isotope bone scan both measure OSTEOBLASTS, and myeloma silences osteoblasts through DKK1 — so both stay normal while the skeleton is being destroyed',
    },
    {
      questionCategory: 'Proteinuria in suspected myeloma',
      wrongInstinct: 'The urine dipstick is negative, so significant proteinuria is excluded and the kidney is uninvolved',
      rightAnswer: 'Send urine protein electrophoresis with immunofixation, or a serum free light-chain ratio. The protein is free light chain, which the strip cannot see',
      why: 'The dipstick reagent binds albumin only — so a negative strip beside a high quantified protein is not a normal result, it is a positive test for Bence-Jones protein',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 66-year-old has back pain, haemoglobin 86 g/L, corrected calcium 3.1 mmol/L, creatinine 210 micromol/L and multiple punched-out skull lesions. Alkaline phosphatase is normal and an isotope bone scan shows no increased uptake. What best explains the normal alkaline phosphatase and the negative scan?',
      options: [
        { id: 'a', text: 'The lesions are benign, since malignant bone disease always raises alkaline phosphatase' },
        { id: 'b', text: 'Myeloma activates osteoclasts through RANKL while DKK1 silences osteoblasts, and both tests report osteoblastic activity' },
        { id: 'c', text: 'Renal failure has suppressed hepatic alkaline phosphatase synthesis' },
        { id: 'd', text: 'Hypercalcaemia inhibits tracer uptake into bone' },
      ],
      answerId: 'b',
      explanation: 'Myeloma bone disease is resorption without repair. RANKL, MIP-1-alpha and IL-6 from the clone and its stroma activate osteoclasts, while DKK1 blocks Wnt signalling in osteoblasts. Because serum alkaline phosphatase and radionuclide uptake both reflect osteoblastic reaction, a purely lytic process leaves them normal. This is the discriminator against metastatic breast or prostate carcinoma, which provokes an osteoblastic response and therefore raises the alkaline phosphatase and lights the scan. Skeletal survey, low-dose whole-body CT or MRI is used instead.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A 72-year-old is found incidentally to have an IgG kappa paraprotein of 18 g/L. Marrow plasma cells are 7%, and haemoglobin, calcium, creatinine and skeletal imaging are all normal. What is the diagnosis and the appropriate action?',
      options: [
        { id: 'a', text: 'Smouldering myeloma; begin treatment now to prevent end-organ damage' },
        { id: 'b', text: 'Monoclonal gammopathy of undetermined significance; observe, since progression runs at about 1% per year' },
        { id: 'c', text: 'Active multiple myeloma; the paraprotein alone establishes the diagnosis' },
        { id: 'd', text: 'Waldenstrom macroglobulinaemia; start plasma exchange for hyperviscosity' },
      ],
      answerId: 'b',
      explanation: 'MGUS requires an M protein below 30 g/L, marrow plasma cells below 10%, and no end-organ damage; all three hold here. The ladder from MGUS to smouldering myeloma to active myeloma is quantitative for the clone but qualitative for the damage, so it is CRAB features or a myeloma-defining event, not the size of the spike, that mandate treatment. MGUS progresses at roughly 1% per year, a rate that justifies surveillance rather than therapy. Smouldering myeloma would require an M protein of 30 g/L or more or 10 to 60% marrow plasma cells, and progresses about ten times faster in the first five years. Waldenstrom involves an IgM paraprotein with hyperviscosity and no lytic lesions.',
      tests: 'disease',
    },
    {
      id: 'q3',
      stem: 'Three years after splenectomy for trauma, a 28-year-old develops fever and is in septic shock within twelve hours, with Streptococcus pneumoniae in blood cultures. Why does splenectomy predispose specifically to encapsulated organisms?',
      options: [
        { id: 'a', text: 'The spleen is the main site of neutrophil production, so splenectomy causes neutropenia' },
        { id: 'b', text: 'The spleen clears opsonised bacteria from the bloodstream and its marginal-zone B cells make T-independent IgM against polysaccharide capsules, and capsules resist phagocytosis without those two functions' },
        { id: 'c', text: 'Splenectomy causes a permanent deficiency of complement components C5 to C9' },
        { id: 'd', text: 'The thrombocytosis that follows splenectomy impairs neutrophil chemotaxis' },
      ],
      answerId: 'b',
      explanation: 'The capsule is an anti-phagocytic device: it is poorly immunogenic and limits complement deposition, so clearance depends on specific anticapsular antibody plus efficient removal of opsonised organisms from blood. Those are precisely the two things the spleen provides, through marginal-zone B cells generating T-independent IgM and through macrophage-lined sinusoids filtering the circulation. Losing them leaves a narrow but severe deficit against Streptococcus pneumoniae, Haemophilus influenzae type b and Neisseria meningitidis, with fulminant onset and mortality per episode up to about 50%. Prevention is vaccination at least two weeks before elective surgery, prophylactic penicillin, and a warning card. Terminal complement deficiency is a separate entity and predisposes chiefly to Neisseria.',
      tests: 'mechanism',
    },
  ],
};

export default rbpPlasmaCellNeoplasmsSpleen;
