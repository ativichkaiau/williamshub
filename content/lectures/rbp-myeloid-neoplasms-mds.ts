import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpMyeloidNeoplasmsMds: Lecture = {
  id: 'rbp-myeloid-neoplasms-mds',
  title: 'Myeloid Neoplasms & Myelodysplasia',
  system: 'heme',
  source: 'Ch 11 — Hematopoietic and Lymphoid Systems',
  updated: '2026-09-16',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'Ch 11 Hematopoietic and Lymphoid Systems' },
    { kind: 'mechanism', label: 'Where differentiation fails decides the count' },
    { kind: 'disease', label: 'MDS, CML & the JAK2 neoplasms' },
    { kind: 'investigation', label: 'Marrow cellularity against the blood count' },
  ],

  highYield: [
    '**All myeloid neoplasms begin in one mutated stem cell, and the three categories are separated by WHERE differentiation fails — get that right and the blood count predicts itself.** In **acute myeloid leukaemia** maturation is **arrested**, so blasts (**20% or more** of marrow cells) pile up and everything downstream disappears: a packed marrow with **pancytopenia** in the blood. In **myelodysplastic syndromes** maturation still happens but is **defective and ineffective** — precursors mature abnormally and then die in the marrow by apoptosis. That produces the paradox worth carrying: a **HYPERCELLULAR marrow with PERIPHERAL cytopenias**, blasts **under 20%**, and roughly **a third** eventually transforming to AML. In **myeloproliferative neoplasms** differentiation is completely intact but **proliferation is unrestrained**, so terminal cells are made properly and in excess and the counts are **HIGH**. One rule covers all three: cytopenias with a full marrow mean the cells are being made and then destroyed where they are made.',
    '**Myelodysplasia is diagnosed on morphology, and the dysplastic features are specific enough to name from a slide.** Look for **ringed sideroblasts** (iron-laden mitochondria forming a collar around the nucleus on **Prussian blue**, at least a third of the way around and covering a third of the circumference), **pseudo-Pelger-Huet** neutrophils (bilobed pince-nez nuclei), **hypogranular** neutrophils, **megaloblastoid** erythroid precursors with nuclear budding, and **micro-megakaryocytes** or non-lobated pawn-ball nuclei. Two clinical divisions matter. **Primary MDS** is a disease of the elderly, median age about **70**. **Therapy-related MDS** follows **alkylating agents and radiation** after a latency of **2–8 years**, carries **deletions of 5q or 7q** or monosomy 7, and does badly; **topoisomerase II inhibitors** produce a different lesion — a shorter latency of **1–3 years** with **KMT2A (MLL) 11q23** translocations, usually presenting as overt leukaemia rather than dysplasia. The one good-prognosis subtype is isolated **del(5q)**: macrocytic anaemia with **normal or raised platelets**, responsive to **lenalidomide**. Most patients die of **infection or bleeding from the cytopenias**, not from transformation.',
    '**Myeloproliferative neoplasms are all one idea — a constitutively active tyrosine kinase signalling as though its growth factor were permanently present.** **Chronic myeloid leukaemia** is driven by **BCR-ABL1**; the three **Philadelphia-negative** siblings, **polycythaemia vera**, **essential thrombocythaemia** and **primary myelofibrosis**, are driven by **JAK2 V617F**, or by **CALR** exon 9 or **MPL** mutations when JAK2 is absent. Because the mutation sits in a **multipotent stem cell**, all lineages are expanded even when one dominates the count, and every member shares the same three complications: **thrombosis** (arterial and venous, including splanchnic), progression to a **spent fibrotic marrow**, and transformation to **acute leukaemia**. Splenomegaly is near universal because the excess cells are sequestered and, later, because haematopoiesis itself relocates. The clinical layer is in [[hhl-mpn]].',
    '**Chronic myeloid leukaemia is the worked example of targeted therapy, and it also supplies the cleanest discriminator in haematology.** **t(9;22)(q34;q11)** fuses **BCR** on 22 to **ABL1** on 9, producing the **Philadelphia chromosome** and a **p210** fusion protein: a tyrosine kinase locked in the on position, signalling growth and survival without a ligand. The marrow is packed with granulocytes at **every stage of maturation**, the white cell count commonly exceeds **100 x 10^9/L**, **basophilia and eosinophilia** are constant, and the spleen becomes massive. The classic separator from a reactive leukaemoid reaction is the **leukocyte alkaline phosphatase**, which is **LOW in CML** and **HIGH in a leukaemoid reaction** — the clonal granulocytes are qualitatively abnormal while reactive ones are normal neutrophils responding to cytokine. The score has largely been replaced by **BCR-ABL1 PCR or FISH** in practice, but the reasoning is exactly what exams test. Natural history without treatment is a stable chronic phase of **3–5 years**, then acceleration, then **blast crisis**, which is **myeloid in about 70%** and **lymphoid in about 30%** — proof that the mutated cell was a pluripotent stem cell. Imatinib turned that trajectory into a near-normal life expectancy.',
    '**Polycythaemia vera is separated from every other cause of a high haematocrit by one number that runs the opposite way to intuition: the erythropoietin is LOW.** JAK2 V617F is present in about **95–97%** of polycythaemia vera (the remainder carry JAK2 **exon 12** mutations), and in roughly **50–60%** of essential thrombocythaemia and primary myelofibrosis. The mutation makes erythroid progenitors **independent of erythropoietin**, so red cell mass rises and negative feedback drives the hormone **down**. In **secondary** polycythaemia the drive is the hormone itself, so erythropoietin is **HIGH** — chronic hypoxia, high altitude, obstructive sleep apnoea, or ectopic production by **renal cell carcinoma, hepatocellular carcinoma, cerebellar haemangioblastoma** and phaeochromocytoma, plus doping. **Relative** polycythaemia from dehydration has a **normal red cell mass** altogether. Polycythaemia vera itself is a **panmyelosis** (granulocytes and platelets rise too), and produces **aquagenic pruritus** after a hot bath, **erythromelalgia**, plethora, hyperviscosity, thrombosis including **Budd-Chiari**, and paradoxical bleeding from an acquired von Willebrand defect at very high platelet counts. Untreated it kills within months; with phlebotomy, median survival exceeds a decade. See [[add-polycythemia-vera-pathophysiology-and-clinical-manifesta]].',
    '**In primary myelofibrosis the fibrosis is REACTIVE, not neoplastic — the clone is the megakaryocyte and the fibroblast is an innocent bystander doing what it is told.** Neoplastic megakaryocytes proliferate in clusters and release **PDGF and TGF-beta**, which recruit polyclonal fibroblasts to lay down reticulin and then collagen. That single fact explains the whole clinical picture. The obliterated marrow space gives a **dry tap** on aspiration, so the diagnosis needs a **trephine biopsy**. Haematopoiesis relocates to the **spleen and liver**, producing **massive splenomegaly** with infarcts and a friction rub. Cells leaving a disorganised extramedullary site arrive prematurely, giving a **leucoerythroblastic** film — nucleated red cells with myelocytes — and red cells squeezed through fibrotic sinusoids emerge as **teardrop cells (dacrocytes)**. Note that a leucoerythroblastic film with teardrops says the marrow architecture has been wrecked, not which disease wrecked it: **metastatic carcinoma, granulomatous infiltration and miliary tuberculosis** do the same. **Essential thrombocythaemia** is the remaining sibling — a sustained platelet count above **450 x 10^9/L** with both thrombosis and bleeding, diagnosed only after excluding reactive thrombocytosis from **iron deficiency, chronic inflammation, malignancy and post-splenectomy** states. Mutation testing is covered in [[hhl-molecular-diagnostics-heme]].',
  ],

  mechanism: {
    title: 'One mutated stem cell, three ways for differentiation to fail',
    steps: [
      { id: 's1', label: 'A mutation arises in a multipotent myeloid stem cell and its progeny displace normal polyclonal haematopoiesis', emphasis: 'normal' },
      { id: 's2', label: 'If maturation is blocked outright, blasts accumulate past 20% — a packed marrow producing nothing usable, so the blood is pancytopenic', emphasis: 'key' },
      { id: 's3', label: 'If maturation proceeds but is defective, precursors die in the marrow by apoptosis — hypercellular marrow, cytopenic blood, dysplastic forms on the film', detail: 'This is the paradox that defines myelodysplasia: the factory is full and the shelves are empty because the product is destroyed on the line.', emphasis: 'key' },
      { id: 's4', label: 'Further mutations push the dysplastic clone over 20% blasts and about a third of patients become acute myeloid leukaemia', emphasis: 'danger' },
      { id: 's5', label: 'If instead a kinase is locked on — BCR-ABL1 from t(9;22), or JAK2 V617F — maturation is entirely normal and the terminal cells simply keep coming, so counts rise', emphasis: 'key' },
      { id: 's6', label: 'The expanded clone exhausts the marrow: megakaryocyte PDGF and TGF-beta drive fibrosis, haematopoiesis moves to the spleen, and the clone can still transform to blast crisis', detail: 'Every myeloproliferative neoplasm ends the same way if it lives long enough — a spent fibrotic marrow, a huge spleen, or acute leukaemia.', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'A spleen palpable below the umbilicus, crossing the midline towards the right iliac fossa, with a notched medial border that descends on inspiration', mechanism: 'Massive splenomegaly of chronic myeloid leukaemia or primary myelofibrosis — sequestration first, then extramedullary haematopoiesis. The notch and respiratory movement distinguish it from a renal mass', significance: 'key' },
    { sign: 'Intense generalised itching starting minutes after a hot bath or shower, in a plethoric, ruddy-faced patient', mechanism: 'Aquagenic pruritus of polycythaemia vera — histamine and other mediators released from the expanded basophil and mast-cell compartment, since the clone is panmyeloid', significance: 'key' },
    { sign: 'Burning, red, painful hands and feet relieved within an hour by a single dose of aspirin', mechanism: 'Erythromelalgia from platelet-mediated microvascular occlusion in polycythaemia vera or essential thrombocythaemia; the aspirin response is close to diagnostic', significance: 'key' },
    { sign: 'Pallor, spontaneous bruising and recurrent chest infections in a 74-year-old whose marrow turns out to be hypercellular', mechanism: 'Myelodysplasia. The cytopenias are from intramedullary death of dysplastic precursors, not from an empty marrow, and infection and bleeding are what usually kill these patients', significance: 'key' },
    { sign: 'Portal or hepatic vein thrombosis presenting as ascites and tender hepatomegaly in a patient with an unremarkable blood count', mechanism: 'Splanchnic thrombosis can be the first sign of a JAK2-positive myeloproliferative neoplasm whose count is masked by iron deficiency or by hypersplenism. Test JAK2 in unexplained Budd-Chiari or portal vein thrombosis', significance: 'key' },
    { sign: 'Sternal tenderness with a white cell count above 150 x 10^9/L, blurred vision and priapism', mechanism: 'Marrow expansion plus leucostasis in chronic myeloid leukaemia — sludging of a hugely expanded granulocyte mass in small vessels of the retina and corpora', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Leucocytosis with the full spectrum of granulocyte maturation, basophilia, and a LOW leukocyte alkaline phosphatase score', meaning: 'Chronic myeloid leukaemia rather than a leukaemoid reaction, which shows a HIGH score with toxic granulation and Dohle bodies. Confirm with BCR-ABL1 by FISH or quantitative PCR, which is the test now actually used' },
    { clue: 'Hypercellular marrow with ringed sideroblasts on Prussian blue, pseudo-Pelger-Huet neutrophils and micro-megakaryocytes, blasts 6%', meaning: 'Myelodysplastic syndrome. The cellularity against the cytopenias proves ineffective haematopoiesis, and blasts under 20% keep it out of acute leukaemia. Cytogenetics and blast percentage drive the prognostic score' },
    { clue: 'Dry tap on marrow aspiration requiring a trephine, which shows reticulin and collagen fibrosis with clustered atypical megakaryocytes', meaning: 'Primary myelofibrosis. The fibroblasts are polyclonal and reactive to megakaryocyte PDGF and TGF-beta, which is why treating the clone can reverse fibrosis and why the aspirate fails' },
    { clue: 'Teardrop red cells with nucleated red cells and circulating myelocytes', meaning: 'A leucoerythroblastic film, meaning the marrow architecture is destroyed and haematopoiesis has moved out. It does not name the cause: myelofibrosis, metastatic carcinoma and miliary tuberculosis all do it' },
    { clue: 'Haematocrit 0.58 with a LOW serum erythropoietin', meaning: 'Polycythaemia vera — autonomous erythroid progenitors suppress the hormone by feedback. A HIGH erythropoietin means a secondary drive (hypoxia, sleep apnoea, renal cell or hepatocellular carcinoma), and a normal red cell mass means relative polycythaemia from plasma contraction' },
    { clue: 'JAK2 V617F positive; if negative in suspected polycythaemia vera, JAK2 exon 12, and in suspected ET or myelofibrosis, CALR and MPL', meaning: 'Establishes clonality and replaces the older functional assays. JAK2 V617F alone cannot separate the three Philadelphia-negative neoplasms, so the count pattern and marrow morphology still decide which one it is' },
  ],

  treatment: [
    {
      logic: 'Chronic myeloid leukaemia proves that naming the lesion can replace poisoning the marrow',
      detail: 'Because the whole disease is one constitutively active kinase, a drug that occupies the **ATP-binding pocket** of BCR-ABL1 switches it off: **imatinib** and its successors converted a uniformly fatal disease with a **3–5 year** chronic phase into one with near-normal life expectancy. Two consequences follow. First, **response is measured molecularly**, by log reduction in **BCR-ABL1 transcripts** on quantitative PCR, because morphological remission is far too coarse. Second, **resistance is usually a point mutation in the kinase domain**, so a rising transcript level triggers sequencing rather than a dose increase — the **T315I** gatekeeper mutation resists imatinib, dasatinib and nilotinib, and needs **ponatinib**. Allogeneic transplant, once first-line, is now reserved for failure or blast crisis. Drug detail is in [[hhl-tki-cml]].',
    },
    {
      logic: 'In polycythaemia vera and essential thrombocythaemia the enemy is thrombosis, not the number itself',
      detail: 'Patients die of **clots**, so the target is a **haematocrit below 0.45** by **phlebotomy** plus **low-dose aspirin**, with **cytoreduction** (usually **hydroxycarbamide**) added for high-risk disease, meaning **age over 60** or a **previous thrombotic event**. Two cautions carry real marks. Repeated venesection **deliberately induces iron deficiency**, which is the intended brake, so iron replacement undoes the treatment and must not be given reflexively for a low ferritin. And at extreme platelet counts, above roughly **1000–1500 x 10^9/L**, large multimers of von Willebrand factor are adsorbed and cleaved, producing an **acquired von Willebrand syndrome** — here the patient **bleeds**, and aspirin alone is the wrong move until the count is reduced.',
    },
  ],

  mnemonics: [
    {
      hook: 'Three myeloid failures, three count patterns',
      expansion: [
        'Acute myeloid leukaemia — maturation blocked, blasts UP, blood counts DOWN',
        'Myelodysplasia — maturation defective, marrow FULL, blood counts DOWN',
        'Myeloproliferative neoplasm — maturation normal, proliferation unrestrained, counts UP',
        'So the question to ask of any cytopenia is never what the blood shows but what the marrow shows',
      ],
    },
    {
      hook: 'Two lows that name the disease',
      expansion: [
        'Low leukocyte alkaline phosphatase — chronic myeloid leukaemia, not a leukaemoid reaction',
        'Low erythropoietin — polycythaemia vera, not secondary polycythaemia',
        'In both, the count is high because the cells are autonomous, so the normal regulator is switched off or absent',
        'A HIGH value in either case means the marrow is obeying a signal rather than ignoring it',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'Pancytopenia with a hypercellular marrow',
      wrongInstinct: 'Pancytopenia means the marrow has failed, so this is aplastic anaemia',
      rightAnswer: 'Myelodysplasia. A hypercellular marrow with peripheral cytopenias is ineffective haematopoiesis — cells are produced and then undergo apoptosis before release',
      why: 'Count the marrow, not the blood: an EMPTY marrow with empty blood is aplasia, a FULL marrow with empty blood is dysplasia, and dysplastic forms on the film settle it',
    },
    {
      questionCategory: 'Neutrophilia with a left shift',
      wrongInstinct: 'A white count of 60 x 10^9/L with circulating myelocytes has to be chronic myeloid leukaemia',
      rightAnswer: 'Check the basophils, the leukocyte alkaline phosphatase and BCR-ABL1. Severe infection produces a leukaemoid reaction with toxic granulation, Dohle bodies and a HIGH alkaline phosphatase score',
      why: 'Basophilia is essentially never reactive — a raised basophil count is the cheapest clue at the bench that a leucocytosis is clonal rather than an inflammatory response',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 71-year-old has haemoglobin 88 g/L with an MCV of 104 fL, neutrophils 1.1 x 10^9/L and platelets 85 x 10^9/L. Marrow is hypercellular with ringed sideroblasts, bilobed hypogranular neutrophils and micro-megakaryocytes; blasts are 6%. What best explains the cytopenias?',
      options: [
        { id: 'a', text: 'Marrow aplasia from stem-cell loss, with fatty replacement of haematopoietic tissue' },
        { id: 'b', text: 'Ineffective haematopoiesis — dysplastic precursors mature abnormally and die in the marrow by apoptosis before they are released' },
        { id: 'c', text: 'Peripheral destruction of mature cells by autoantibodies' },
        { id: 'd', text: 'Maturation arrest with replacement of the marrow by blasts' },
      ],
      answerId: 'b',
      explanation: 'This is myelodysplasia, and the diagnostic paradox is the whole point: a hypercellular marrow alongside peripheral cytopenias can only mean the cells are being made and then destroyed where they are made. Aplastic anaemia would give a hypocellular, fatty marrow, so the cellularity excludes it outright. Blasts at 6% are below the 20% threshold, so this is not acute leukaemia, although roughly a third of patients eventually transform. Note that most deaths in myelodysplasia come from infection and bleeding caused by the cytopenias themselves rather than from leukaemic transformation.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A 45-year-old has a white cell count of 180 x 10^9/L with granulocytes at every stage of maturation, basophils 6%, and a spleen reaching the left iliac fossa. Which finding best separates this from a leukaemoid reaction to sepsis?',
      options: [
        { id: 'a', text: 'A HIGH leukocyte alkaline phosphatase score' },
        { id: 'b', text: 'A LOW leukocyte alkaline phosphatase score with basophilia, reflecting a clonal granulocyte population' },
        { id: 'c', text: 'The presence of toxic granulation and Dohle bodies in the neutrophils' },
        { id: 'd', text: 'The absolute height of the white cell count' },
      ],
      answerId: 'b',
      explanation: 'Chronic myeloid leukaemia. The granulocytes in CML are clonal and qualitatively abnormal, so their alkaline phosphatase content is LOW; in a leukaemoid reaction the neutrophils are normal cells responding to cytokines, so the score is HIGH and toxic granulation with Dohle bodies appears. Basophilia points the same way, since a raised basophil count is almost never reactive. The white count alone is useless as a discriminator because a severe reaction can exceed 50 x 10^9/L. The definitive test in practice is BCR-ABL1 by FISH or quantitative PCR, which also becomes the measure of treatment response.',
      tests: 'investigation',
    },
    {
      id: 'q3',
      stem: 'A 60-year-old smoker has haematocrit 0.60, splenomegaly, and itching after hot showers. Serum erythropoietin is low and JAK2 V617F is positive. Why is the erythropoietin low, and what would a high value have indicated?',
      options: [
        { id: 'a', text: 'The kidneys are damaged by hyperviscosity; a high value would mean the kidneys were intact' },
        { id: 'b', text: 'JAK2 V617F makes erythroid progenitors independent of erythropoietin, so the expanded red cell mass suppresses the hormone by feedback; a high value would indicate a secondary drive such as hypoxia or an erythropoietin-secreting tumour' },
        { id: 'c', text: 'Erythropoietin is consumed by the expanded red cell mass; a high value would indicate essential thrombocythaemia' },
        { id: 'd', text: 'The assay is falsely low in the presence of a high haematocrit; the value cannot be interpreted' },
      ],
      answerId: 'b',
      explanation: 'Polycythaemia vera. The mutated JAK2 kinase signals as though erythropoietin were bound, so progenitors expand without the hormone, and the resulting red cell mass shuts off renal production by normal negative feedback. That inversion is the single most useful discriminator at the bedside: autonomous marrow gives a LOW erythropoietin, whereas secondary polycythaemia is hormone-driven and gives a HIGH one, from chronic hypoxia, sleep apnoea, or ectopic secretion by renal cell carcinoma, hepatocellular carcinoma or cerebellar haemangioblastoma. A normal red cell mass with a raised haematocrit would instead indicate relative polycythaemia from plasma volume contraction.',
      tests: 'disease',
    },
  ],
};

export default rbpMyeloidNeoplasmsMds;
