import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpVasculitisVascularTumours: Lecture = {
  id: 'rbp-vasculitis-vascular-tumours',
  title: 'Vasculitis & Vascular Tumours',
  system: 'cardiovascular',
  source: 'Ch 9 — Blood Vessels',
  updated: '2026-09-16',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 9 Blood Vessels' },
    { kind: 'mechanism', label: 'Vessel size determines the syndrome' },
    { kind: 'disease', label: 'ANCA vasculitis & vascular neoplasms' },
  ],

  highYield: [
    '**Vasculitis is classified by vessel SIZE because size determines the clinical syndrome, and the syndrome is the only part of it you can see at the bedside.** **Large vessels** — the aorta and its major branches — produce ischaemia of whole territories rather than discrete infarcts: **limb claudication, pulse deficits, blood-pressure asymmetry between arms, bruits, aortic regurgitation**. That is **giant cell arteritis** and **Takayasu arteritis**, histologically the same granulomatous panarteritis separated mainly by age and distribution. **Medium muscular arteries** — the main visceral arteries and their branches — produce **discrete organ infarcts, microaneurysms with angiographic beading, and mononeuritis multiplex** from infarction of the vasa nervorum. That is **polyarteritis nodosa** and **Kawasaki disease**. **Small vessels** — arterioles, capillaries and venules — produce **palpable purpura, glomerulonephritis and alveolar haemorrhage**. That is the **ANCA-associated** group (granulomatosis with polyangiitis, microscopic polyangiitis, eosinophilic granulomatosis with polyangiitis) and the **immune-complex** group (IgA vasculitis, cryoglobulinaemic vasculitis). Reduce it to a triage rule: **purpura plus haematuria means small; infarct plus neuropathy means medium; pulse loss plus bruit means large.** Overview and serology in [[vasculitis-overview]].',
    '**Two immunological mechanisms drive nearly all of it, and immunofluorescence gives them away.** In **immune-complex** vasculitis, antigen-antibody complexes deposit in the wall, fix complement and recruit neutrophils — so the biopsy is **bright on immunofluorescence**: granular **IgA and C3** in IgA vasculitis, **IgM and C3** in cryoglobulinaemic vasculitis (usually with hepatitis C), immune deposits in lupus and drug-induced disease. In **ANCA-associated** vasculitis there are few or no deposits — the lesion is **pauci-immune**. Antibodies against **proteinase 3** or **myeloperoxidase** bind those enzymes displayed on the surface of neutrophils already primed by TNF or infection, activating them directly so that they degranulate against the endothelium and produce **necrotising, fibrinoid inflammation with an empty immunofluorescence**. The rule: **bright immunofluorescence means immune complex; necrotising inflammation with nothing on immunofluorescence means ANCA.**',
    '**Give the ANCA associations honestly: they are associations with useful odds, not defining criteria, and this is where sloppy revision costs marks.** **c-ANCA with PR3 specificity** accompanies **granulomatosis with polyangiitis** in roughly **75–90%** of active generalised disease, but in only about half of limited, upper-airway-only disease. **p-ANCA with MPO specificity** accompanies **microscopic polyangiitis** in about **60–75%**, and **eosinophilic granulomatosis with polyangiitis** in only about **40%** — and in that disease the positive cases skew towards the vasculitic phenotype with neuropathy and glomerulonephritis while the negative ones skew towards cardiac and pulmonary involvement. Reported figures genuinely vary with assay generation and with how much disease the patient has, which is why quoted ranges differ between sources. Two corollaries follow: a **negative ANCA does not exclude** any of these diseases, and a **positive ANCA does not prove vasculitis** — it also rises in endocarditis, tuberculosis, inflammatory bowel disease and with hydralazine, propylthiouracil and levamisole-adulterated cocaine. **Biopsy still decides.**',
    '**Polyarteritis nodosa is the discriminator question, and the answer is the lung.** PAN is a necrotising vasculitis of **small and medium muscular arteries** that **SPARES the pulmonary arteries** and is characteristically **ANCA-NEGATIVE**. It attacks kidney, heart, gut, skin and nerve, but note carefully how it damages the kidney: by **renal arteritis with infarction and renin-driven hypertension**, never by glomerulonephritis. Lesions are **segmental**, favour **branch points**, and — the morphological signature — coexist at **different stages in the same patient**, acute fibrinoid necrosis lying alongside healed fibrosis, which produces the **nodular microaneurysms** seen on visceral angiography. About **30%** carry hepatitis B surface antigen. The clean discriminator to carry into an exam: **purpura with haemoptysis, glomerulonephritis and a positive ANCA is small-vessel ANCA disease; renal infarcts with hypertension, mononeuritis multiplex, clear lungs and a negative ANCA is PAN.** Medium-vessel disease is covered clinically in [[large-medium-vasculitis]], and the paediatric medium-vessel entity in [[add-kawasaki-disease]].',
    '**Giant cell arteritis is an ophthalmic emergency, and skip lesions are exactly why a negative biopsy does not exclude it.** It occurs **over the age of 50** and shows **granulomatous inflammation with fragmentation of the internal elastic lamina** and multinucleate giant cells in about **three-quarters** of positive biopsies. The clinical set is new temporal headache, scalp tenderness, a thickened tender artery, and **jaw claudication — the most specific symptom**; the **ESR is usually above 50 mm/h** and often far higher, and roughly half of patients have **polymyalgia rheumatica**. The inflammation is **patchy along the artery**, so a short specimen or a single histological level can pass straight through an uninflamed segment: take **at least 1–2 cm** and cut serial sections. The stake is the eye — involvement of the **ophthalmic and posterior ciliary arteries** causes anterior ischaemic optic neuropathy with **sudden, painless, usually permanent monocular blindness**, and the second eye follows within days to weeks if untreated. Hence the rule that looks reckless and is not: **start high-dose glucocorticoid the moment you suspect it**, because the biopsy stays informative for at least the first week or two of treatment, so treating first costs nothing and waiting costs an eye.',
    '**Vascular tumours run a continuum from benign to malignant, and the exam tests both ends plus three named lesions in the middle.** **Benign — haemangioma:** the **capillary** type includes the infantile strawberry haemangioma, which grows for months and then **regresses spontaneously in most children by about age 7**; the **cavernous** type is larger, deeper, unencapsulated, does not regress, and in **von Hippel-Lindau disease** involves cerebellum, retina, pancreas and liver. **Pyogenic granuloma** (lobular capillary haemangioma) is a rapidly growing, ulcerated, pedunculated red nodule of skin or gingiva that bleeds readily after trivial trauma or in pregnancy (granuloma gravidarum) and may regress after delivery — neither pyogenic nor a granuloma. **Glomus tumour (glomangioma)** is benign, tiny, red-blue, typically **subungual**, and **exquisitely painful**, because it arises from the modified smooth-muscle cells of the glomus body, a thermoregulatory arteriovenous shunt. **Intermediate — Kaposi sarcoma**, driven by **HHV-8**, in four forms (classic, endemic African, transplant-associated and AIDS-associated); the AIDS lesions **regress on immune reconstitution**, which is the strongest argument that it is not a fully autonomous sarcoma. **Malignant — angiosarcoma**: skin, breast, soft tissue and **liver**, where it is classically linked to **vinyl chloride, arsenic** (pesticides and Fowler’s solution) and **Thorotrast**; **Stewart-Treves** angiosarcoma arises in a chronically lymphoedematous arm years after axillary clearance. The clinical mimic to keep separate is **bacillary angiomatosis** — [[small-vessel-and-venous]] covers the venous and small-vessel clinical layer.',
  ],

  mechanism: {
    title: 'Vessel calibre chooses the syndrome',
    steps: [
      { id: 's1', label: 'Immune trigger: circulating immune complexes, ANCA directed at primed neutrophils, or a T-cell response to an antigen in the arterial wall', emphasis: 'key' },
      { id: 's2', label: 'Endothelium is injured, leukocytes degranulate, and the wall undergoes fibrinoid necrosis or granulomatous inflammation', detail: 'Immune-complex disease lights up on immunofluorescence; ANCA disease is pauci-immune and shows nothing.', emphasis: 'key' },
      { id: 's3', label: 'The CALIBRE of the vessel involved now fixes everything the patient will show you', emphasis: 'key' },
      { id: 's4', label: 'Large vessel: granulomatous panarteritis destroying the internal elastic lamina — stenosis, pulse loss, bruits, aneurysm, aortic regurgitation', emphasis: 'normal' },
      { id: 's5', label: 'Medium vessel: segmental transmural necrosis at branch points — organ infarcts, nodular microaneurysms, mononeuritis multiplex', emphasis: 'danger' },
      { id: 's6', label: 'Small vessel: capillaritis and venulitis — palpable purpura, alveolar haemorrhage, crescentic glomerulonephritis', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Jaw claudication with scalp tenderness and a thickened, nodular, pulseless temporal artery in a 72-year-old', mechanism: 'Granulomatous arteritis of branches of the external carotid; jaw claudication reflects masseteric ischaemia on chewing and is the single most specific symptom of giant cell arteritis', significance: 'key' },
    { sign: 'Absent radial pulses with more than 20 mmHg of inter-arm difference and supraclavicular bruits in a 28-year-old woman', mechanism: 'Takayasu arteritis. Granulomatous inflammation of the aortic arch and its branches narrows the subclavian origins, producing the classic pulseless disease; the histology matches giant cell arteritis but the age and vessel distribution do not', significance: 'key' },
    { sign: 'Palpable purpura over buttocks and extensor legs with colicky abdominal pain, arthritis and haematuria in a 7-year-old after a sore throat', mechanism: 'IgA vasculitis. The purpura is palpable because the venule wall is inflamed rather than merely leaking, and the same IgA-containing complexes deposit in gut, joint and glomerulus', significance: 'key' },
    { sign: 'Foot drop and then wrist drop appearing days apart in a hypertensive man with weight loss, livedo reticularis and entirely clear lungs', mechanism: 'Mononeuritis multiplex from medium-vessel infarction of the vasa nervorum — named nerves failing one at a time. With clear lungs and no glomerulonephritis this is polyarteritis nodosa', significance: 'key' },
    { sign: 'Saddle-nose deformity with nasal crusting and chronic sinusitis, cavitating lung nodules, and red-cell casts in the urine', mechanism: 'Granulomatosis with polyangiitis. Necrotising granulomatous inflammation of upper airway and lung with pauci-immune crescentic glomerulonephritis — the upper airway, lower airway and kidney triad', significance: 'key' },
    { sign: 'Purple-brown plaques following skin cleavage lines with palatal involvement in a man with HIV and a CD4 count of 60', mechanism: 'Kaposi sarcoma driven by HHV-8. Bacillary angiomatosis produces clinically similar vascular lesions in the same patients and is curable with antibiotics, so it must be excluded on biopsy', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Temporal artery biopsy, 2 cm segment with serial sections: granulomatous inflammation, giant cells and a fragmented internal elastic lamina', meaning: 'Giant cell arteritis confirmed. The specimen length and the serial sections matter because inflammation is patchy, so a short segment or a single level can sample only a skip area and read as normal' },
    { clue: 'ESR 96 mm/h with CRP 140 mg/L in a 70-year-old with new headache and transient monocular visual loss', meaning: 'Treat immediately rather than await histology. The biopsy remains informative through the first week or two of glucocorticoid, whereas the fellow eye can be lost within days' },
    { clue: 'Mesenteric angiogram: multiple small saccular aneurysms at visceral artery branch points with normal intervening segments', meaning: 'Polyarteritis nodosa. Segmental transmural necrosis at branch points weakens the wall focally, producing the nodular beading that gives the disease its name' },
    { clue: 'c-ANCA with proteinase 3 specificity plus a renal biopsy showing crescentic glomerulonephritis with no immunofluorescence deposits', meaning: 'Pauci-immune ANCA-associated glomerulonephritis in granulomatosis with polyangiitis. The empty immunofluorescence is what separates it from immune-complex and anti-GBM disease' },
    { clue: 'Skin biopsy immunofluorescence: granular IgA and C3 within dermal vessel walls', meaning: 'IgA vasculitis. This is the opposite pole from ANCA disease — deposits are abundant, so the mechanism is immune-complex driven' },
    { clue: 'Biopsy of a violaceous plaque: spindle cells forming slit-like vascular spaces with extravasated red cells and hyaline globules, HHV-8 LANA positive', meaning: 'Kaposi sarcoma. If instead a Warthin-Starry silver stain had shown clumps of bacilli with a neutrophilic infiltrate, the diagnosis would be bacillary angiomatosis from Bartonella, which antibiotics cure outright' },
  ],

  treatment: [
    {
      logic: 'In suspected giant cell arteritis the steroid comes before the biopsy — every time',
      detail: 'The asymmetry of harm decides this, and it is worth stating as an arithmetic rather than a preference. Treating and later finding a negative biopsy costs a few days of **prednisolone 40–60 mg daily**; waiting and being right costs an eye that will not recover, because anterior ischaemic optic neuropathy is **infarction**, not inflammation of the optic nerve, so vision already lost does not return. Steroids are therefore given to protect the **fellow** eye, which is at risk within days. Use **intravenous methylprednisolone 500–1000 mg** if there is any visual loss or amaurosis, oral therapy otherwise, and arrange biopsy within the next week or two while the histology is still informative. **Tocilizumab**, an IL-6 receptor blocker, is the established steroid-sparing agent for relapsing disease. Handled clinically in [[large-medium-vasculitis]].',
    },
    {
      logic: 'Match the immunosuppression to the mechanism rather than to the disease name',
      detail: 'Three mechanisms, three different answers. **Pauci-immune ANCA disease** that threatens an organ — alveolar haemorrhage or crescentic glomerulonephritis — needs induction with **glucocorticoid plus rituximab or cyclophosphamide**, then maintenance, because the neutrophil-driven necrosis will not stop on its own. **Immune-complex vasculitis driven by a persisting antigen** is the opposite trap: in hepatitis-B-associated polyarteritis nodosa and hepatitis-C-associated cryoglobulinaemia the correct target is the **virus**, since immunosuppression alone increases the antigen load that is generating the complexes. **Kawasaki disease** is different again and is time-critical rather than mechanism-critical: **IVIG with aspirin given within 10 days of fever onset** cuts coronary aneurysm risk from roughly **25% to about 4%**, which is one of the largest single-intervention effects in paediatrics — see [[add-kawasaki-disease]].',
    },
  ],

  mnemonics: [
    {
      hook: 'Pulse, Infarct, Purpura — large, medium, small',
      expansion: [
        'Large (giant cell, Takayasu) — pulse deficits, bruits, inter-arm blood-pressure asymmetry, aortic regurgitation',
        'Medium (polyarteritis nodosa, Kawasaki) — organ infarcts, nodular microaneurysms, mononeuritis multiplex, coronary aneurysms',
        'Small (ANCA-associated and immune-complex) — palpable purpura, glomerulonephritis, alveolar haemorrhage',
        'The calibre of the inflamed vessel IS the clinical syndrome, so name the calibre first',
      ],
    },
    {
      hook: 'PAN spares the lung and spares the ANCA',
      expansion: [
        'Polyarteritis nodosa involves small and medium muscular arteries and leaves the pulmonary arteries alone',
        'It is characteristically ANCA-negative, so purpura with haemoptysis and a positive ANCA is not PAN',
        'Its kidney damage is arterial infarction with renin-driven hypertension, never glomerulonephritis',
        'Lesions of different ages coexist in one patient, and about 30% carry hepatitis B surface antigen — check it before immunosuppressing',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'What a negative temporal artery biopsy actually means',
      wrongInstinct: 'The biopsy came back negative, so stop the steroids and look for another diagnosis',
      rightAnswer: 'Giant cell arteritis is patchy, so skip lesions mean a negative biopsy cannot exclude it — treat on clinical grounds',
      why: 'Rule: take at least 1 to 2 cm with serial sections, start steroid the day you suspect it, and let the clinical picture and the response to treatment decide rather than one negative slide',
    },
    {
      questionCategory: 'Separating polyarteritis nodosa from small-vessel ANCA vasculitis',
      wrongInstinct: 'Necrotising vasculitis with renal failure means an ANCA-associated vasculitis',
      rightAnswer: 'Clear lungs, no glomerulonephritis, a negative ANCA and renal microaneurysms make it polyarteritis nodosa',
      why: 'Rule: PAN injures the kidney through arterial infarction and renin-driven hypertension and never through glomerulonephritis, and it never involves the pulmonary arteries — those two negatives settle it',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 58-year-old man has six months of weight loss, new hypertension, testicular pain and a left foot drop followed a week later by a right wrist drop. Chest imaging is clear and urinalysis shows no casts. ANCA is negative. Mesenteric angiography shows small saccular aneurysms at visceral branch points. What is the diagnosis?',
      options: [
        { id: 'a', text: 'Microscopic polyangiitis' },
        { id: 'b', text: 'Granulomatosis with polyangiitis' },
        { id: 'c', text: 'Polyarteritis nodosa' },
        { id: 'd', text: 'IgA vasculitis' },
      ],
      answerId: 'c',
      explanation: 'Three findings converge. Mononeuritis multiplex and visceral microaneurysms place the disease in medium muscular arteries; clear lungs and the absence of glomerulonephritis exclude the small-vessel ANCA group, which characteristically produces alveolar haemorrhage and crescentic nephritis; and the negative ANCA fits polyarteritis nodosa, which is typically ANCA-negative. PAN damages the kidney by arterial infarction with renin-driven hypertension rather than by glomerulonephritis, and hepatitis B surface antigen should be checked, since about 30% of cases are associated with it.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'A 74-year-old woman reports two weeks of new right temporal headache, pain in the jaw while chewing, and one episode of transient blurring in the right eye this morning. ESR is 92 mm/h. Temporal artery biopsy can be arranged in four days. What is the correct next step?',
      options: [
        { id: 'a', text: 'Wait for the biopsy result before starting treatment, so the histology is not obscured' },
        { id: 'b', text: 'Start high-dose glucocorticoid immediately and proceed with biopsy as arranged' },
        { id: 'c', text: 'Start a non-steroidal anti-inflammatory drug and review after the biopsy' },
        { id: 'd', text: 'Arrange temporal artery ultrasound and treat only if a halo sign is present' },
      ],
      answerId: 'b',
      explanation: 'Visual loss in giant cell arteritis is infarction of the optic nerve head from ophthalmic and posterior ciliary artery involvement, so it is usually permanent, and the fellow eye can be lost within days. The biopsy remains informative through the first week or two of glucocorticoid, so treating first costs nothing diagnostically. The same reasoning explains why a subsequent negative biopsy does not exclude the disease: inflammation is patchy, and a short specimen or a single level may fall in a skip lesion.',
      tests: 'treatment',
    },
    {
      id: 'q3',
      stem: 'A man with HIV and a CD4 count of 40 has multiple violaceous cutaneous plaques and a palatal lesion. Biopsy shows spindle cells forming slit-like vascular channels with extravasated erythrocytes and hyaline globules; immunostaining for HHV-8 LANA is positive. Which statement is correct?',
      options: [
        { id: 'a', text: 'This is bacillary angiomatosis and will resolve with erythromycin or doxycycline' },
        { id: 'b', text: 'This is Kaposi sarcoma, and AIDS-associated lesions often regress with immune reconstitution' },
        { id: 'c', text: 'This is angiosarcoma, and the association with vinyl chloride should be sought' },
        { id: 'd', text: 'This is a cavernous haemangioma and warrants screening for von Hippel-Lindau disease' },
      ],
      answerId: 'b',
      explanation: 'HHV-8 positivity with spindle cells forming slit-like channels containing extravasated red cells defines Kaposi sarcoma. Its behaviour is intermediate rather than frankly malignant, and the fact that AIDS-associated lesions frequently regress once antiretroviral therapy restores immunity argues that it is not a fully autonomous sarcoma. The lesion that must be excluded in the same clinical setting is bacillary angiomatosis, caused by Bartonella and identified by clumps of bacilli on Warthin-Starry staining with a neutrophilic rather than spindle-cell infiltrate, because antibiotics cure it.',
      tests: 'disease',
    },
  ],
};

export default rbpVasculitisVascularTumours;
