import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpLeukocyteDisordersAcuteLeukaemia: Lecture = {
  id: 'rbp-leukocyte-disorders-acute-leukaemia',
  title: 'Leukocyte Disorders & Acute Leukaemia',
  system: 'heme',
  source: 'Ch 11 — Hematopoietic and Lymphoid Systems',
  updated: '2026-09-16',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'Ch 11 Hematopoietic and Lymphoid Systems' },
    { kind: 'mechanism', label: 'Reactive left shift vs clonal maturation arrest' },
    { kind: 'disease', label: 'Neutropenia, leukaemoid reaction & acute leukaemia' },
  ],

  highYield: [
    '**A high neutrophil count has only two mechanisms, and they are distinguished on the film rather than by the number.** Neutrophils sit in two pools of roughly equal size — circulating and marginated along endothelium — plus a large marrow reserve. **Demargination** shifts cells from wall to stream within **minutes**: this is the neutrophilia of **corticosteroids, adrenaline, exercise, stress and acute physical trauma**, and the cells are **mature with NO left shift**, because nothing new has been made. **Cytokine-driven release and production** (**G-CSF, IL-1, TNF**) empties the marrow reserve over **hours to days**: this is the neutrophilia of **bacterial infection**, and it brings **band forms and metamyelocytes** with **toxic granulation**, **Döhle bodies** (retained rough endoplasmic reticulum) and **cytoplasmic vacuolation** — the morphological stamp of an activated, accelerated marrow. Read the rest of the differential the same way: **lymphocytosis** means viral infection, pertussis (which blocks lymphocyte egress from nodes) or a chronic lymphoid clone; **eosinophilia** means allergy, drug reaction, tissue-invasive helminths, vasculitis or adrenal insufficiency, **not** protozoa; **monocytosis** means chronic indolent infection such as tuberculosis, or autoimmune disease. Quantitative detail in [[hhl-leukocyte-quantitative]].',
    '**The leukaemoid reaction versus chronic myeloid leukaemia is the discriminator this chapter exists to teach: a reaction is POLYCLONAL and functionally normal, a leukaemia is CLONAL and functionally abnormal — and the alkaline phosphatase score reads that difference directly.** A **leukaemoid reaction** is an extreme but reactive leucocytosis, often **above 50 x 10^9/L**, composed of **mature and band neutrophils** carrying **toxic granulation and Döhle bodies**, with an obvious driver (severe sepsis, tuberculosis, marrow infiltration, haemorrhage, G-CSF). Because the cells are normal neutrophils being pushed hard by inflammatory cytokines, their **leukocyte alkaline phosphatase is HIGH**. **CML** is a clone driven by **BCR-ABL1** from **t(9;22)**, and its film is different in kind: the **whole myeloid spectrum** is present with a characteristic **myelocyte bulge**, plus **basophilia and eosinophilia**, and the spleen is **massively enlarged**. Its neutrophils are clonal and functionally defective, so the **leukocyte alkaline phosphatase is LOW**. Honest caveat: the score is now largely a teaching device — practice confirms with **BCR-ABL1 by FISH or PCR**, which is definitive where the score is only suggestive. **Basophilia is the single most useful film clue, because reactive states essentially never produce it.**',
    '**Neutropenia is dangerous at a threshold you should know as a number, and its cardinal sign is the ABSENCE of a sign.** **Below 1.5 x 10^9/L** is neutropenia, **below 0.5** is severe with a steeply rising infection risk, and **below 0.2** is agranulocytosis. Mechanisms mirror anaemia: **reduced production** (marrow failure, cytotoxic chemotherapy, infiltration, B12 or folate deficiency, drug idiosyncrasy) or **increased destruction and margination** (immune neutropenia, hypersplenism, overwhelming sepsis consuming cells faster than they are made). The drugs worth naming because they cause **idiosyncratic agranulocytosis** are **carbimazole and methimazole, propylthiouracil, clozapine, ticlopidine and sulfasalazine** — which is why a patient on carbimazole with a sore throat gets an urgent full blood count, not a prescription. The clinical trap follows from mechanism: **pus is largely dead neutrophils, so without neutrophils infection loses its visible inflammatory signature**. Expect **necrotic, ulcerating mucosal lesions with little or no pus**, a chest film that looks bland despite pneumonia, and fever as the only reliable sign — hence **neutropenic fever is a medical emergency treated before the organism is known**. Distinguish **benign ethnic neutropenia** (associated with the **Duffy-null** phenotype), which is common, has a normal marrow reserve and carries **no increased infection risk**.',
    '**Acute leukaemia is a disease of maturation ARREST, not of proliferation — and that one word explains the definition, the morphology and the entire presenting triad.** A haematopoietic progenitor acquires mutations that grant **self-renewal** and simultaneously **block differentiation**; blasts accumulate because they neither mature nor die, not because they are dividing especially fast. That is why the definition is a **count, not a rate: 20% or more blasts among marrow nucleated cells** (the WHO threshold; certain defining genetic lesions such as **t(15;17)**, **t(8;21)** and **inv(16)** are diagnostic at any percentage). Displacement of normal haematopoiesis then produces the whole presentation without any further hypothesis: **anaemia** gives fatigue and pallor, **neutropenia** gives fever and infection, **thrombocytopenia** gives petechiae, gum bleeding and bruising — the triad — with **bone pain** from marrow expansion, and organ infiltration giving hepatosplenomegaly, lymphadenopathy, gum hypertrophy or a mediastinal mass. **The white cell count is NOT the definition and does not have to be high**: in **aleukaemic leukaemia** the blasts stay in the marrow and the patient presents pancytopenic with a normal or low white count. Presentation and work-up in [[hhl-acute-leukemia-approach]].',
    '**AML and ALL are separated by lineage markers, and each has one morphological or clinical signature worth carrying into the exam.** **AML** is the leukaemia of adults (median age around **68**). Blasts are **myeloperoxidase positive** and may contain **Auer rods** — needle-shaped azurophilic crystals of aggregated MPO in abnormal primary granules, essentially pathognomonic of myeloid lineage. Immunophenotype: **CD13, CD33, CD117, MPO**. **Monocytic subtypes** infiltrate soft tissue, producing **gum hypertrophy** and **leukaemia cutis**. **ALL** is the commonest childhood malignancy, peaking at **age 2 to 5**. Lymphoblasts are **MPO negative** and express **TdT**, a nuclear DNA polymerase confined to immature lymphoid cells and therefore the single best lineage marker; **B-ALL** adds **CD19, CD10, CD79a** and **T-ALL** adds **CD3**, classically as a **mediastinal thymic mass in an adolescent boy**. ALL seeds **sanctuary sites — the central nervous system and the testis** — which is why CNS-directed prophylaxis is standard rather than optional. Cytogenetics drive prognosis: **hyperdiploidy and t(12;21) ETV6-RUNX1 are favourable**, while **t(9;22) BCR-ABL1** and **KMT2A rearrangement in infants** are adverse.',
    '**Two emergencies sit inside acute leukaemia: one is the disease (acute promyelocytic leukaemia with DIC) and one is the treatment (tumour lysis syndrome).** **APL** carries **t(15;17)** fusing **PML to RARA**; the fusion protein recruits repressors to retinoic-acid response elements and **freezes maturation at the promyelocyte stage**. Those arrested promyelocytes are **packed with primary granules rich in tissue factor and profibrinolytic material**, so when they lyse they trigger **DIC** — the leading cause of early death, and **conventional cytotoxic chemotherapy makes it worse** by lysing more of them. **Pharmacological doses of all-trans retinoic acid displace the repressor and force differentiation into neutrophils; arsenic trioxide degrades the fusion protein.** That converts the worst prognosis in AML into the best, with cure rates **above 90%** and chemotherapy-free regimens in low-risk disease. **Tumour lysis syndrome** is the mirror image: massive cell death releases intracellular contents, giving **high potassium, high phosphate, high urate and — because phosphate binds it — LOW calcium**, with acute kidney injury and arrhythmia. Risk is highest with a **high blast count, bulky disease, Burkitt lymphoma and ALL**. It links back to haemolysis, because **rasburicase is contraindicated in G6PD deficiency** — see [[rbp-haemolytic-anaemias]].',
  ],

  mechanism: {
    title: 'From a reactive left shift to a clonal maturation arrest',
    steps: [
      { id: 's1', label: 'Infection releases G-CSF, IL-1 and TNF; the marrow reserve empties and marginated cells rejoin the stream', detail: 'Steroids and adrenaline give the same count in minutes by demargination alone — no left shift, no toxic granulation.', emphasis: 'normal' },
      { id: 's2', label: 'Pushed to extremes this becomes a leukaemoid reaction: over 50 x 10^9/L, mature and band forms, toxic granulation, and a HIGH alkaline phosphatase score', emphasis: 'key' },
      { id: 's3', label: 'A somatic mutation instead grants self-renewal AND blocks differentiation — the arrest, not the proliferation, is what defines acute leukaemia', emphasis: 'key' },
      { id: 's4', label: 'Blasts accumulate to 20% or more of marrow nucleated cells because they neither mature nor die', detail: 'Whether they spill into blood is a separate variable, so the white count may be high, normal or low.', emphasis: 'key' },
      { id: 's5', label: 'Normal haematopoiesis is displaced, producing the triad: anaemia, infection from neutropenia, and bleeding from thrombocytopenia', emphasis: 'danger' },
      { id: 's6', label: 'In the promyelocytic variant the arrested cells themselves carry tissue factor, so lysing them precipitates DIC', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'A deeply ulcerated, necrotic tonsillar lesion with fever but almost NO pus, in a patient recently started on carbimazole', mechanism: 'Agranulocytosis. Pus is largely dead neutrophils, so without them infection loses its visible inflammatory signature and looks bland relative to how sick the patient is', significance: 'key' },
    { sign: 'A spleen palpable across the midline into the right iliac fossa, with basophilia on the film', mechanism: 'Chronic myeloid leukaemia — clonal myeloid expansion with extramedullary haematopoiesis. A leukaemoid reaction does not produce this degree of splenomegaly and essentially never produces basophilia', significance: 'key' },
    { sign: 'Boggy, infiltrated, overgrown gums and violaceous skin nodules in a newly diagnosed leukaemia', mechanism: 'Monocytic AML. Monoblasts and promonocytes retain tissue-homing capacity, so they infiltrate gingiva and dermis — leukaemia cutis', significance: 'key' },
    { sign: 'Facial plethora, distended neck veins and orthopnoea in an adolescent boy with a widened mediastinum', mechanism: 'T-ALL presenting as a thymic mass with superior vena cava obstruction — the classic anterior mediastinal presentation of lymphoblastic disease', significance: 'key' },
    { sign: 'Refusal to walk with bone and joint pain in a young child, plus hepatosplenomegaly and diffuse lymphadenopathy', mechanism: 'ALL — blast expansion stretches the periosteum and infiltrates it, and lymphoid organs are seeded. Bone pain in a child with cytopenias is leukaemia until the marrow says otherwise', significance: 'key' },
    { sign: 'Oozing from every venepuncture site and spreading bruising, out of proportion to the platelet count, in a new leukaemia', mechanism: 'Acute promyelocytic leukaemia with DIC — tissue factor and profibrinolytic granule contents released from arrested promyelocytes consume fibrinogen and platelets together', significance: 'key' },
  ],

  investigations: [
    { clue: 'White cells 62 x 10^9/L with band forms, toxic granulation and Döhle bodies, and a HIGH leukocyte alkaline phosphatase score', meaning: 'Leukaemoid reaction. The high score means the neutrophils are functionally normal cells responding to cytokines. A LOW score with basophilia points to CML instead, and BCR-ABL1 by FISH or PCR settles it definitively' },
    { clue: '20% or more blasts among marrow nucleated cells', meaning: 'Acute leukaemia by definition. Below that threshold with dysplasia the diagnosis is myelodysplastic syndrome. The defining genetic lesions t(15;17), t(8;21) and inv(16) are diagnostic at any blast percentage' },
    { clue: 'Myeloperoxidase-positive blasts with Auer rods, versus TdT-positive, myeloperoxidase-negative blasts', meaning: 'Auer rods and MPO establish myeloid lineage and therefore AML; nuclear TdT is confined to immature lymphoid cells and establishes ALL. Flow cytometry then subtypes by CD13, CD33 and CD117 versus CD19, CD10 and CD3' },
    { clue: 'Pancytopenia with a white cell count of 2.8 x 10^9/L but circulating blasts on the film', meaning: 'Aleukaemic or subleukaemic leukaemia. A normal or low white count never excludes acute leukaemia, because blast accumulation in the marrow and blast release into blood are independent. Examine the film and biopsy the marrow' },
    { clue: 't(15;17) PML-RARA on FISH with fibrinogen 0.8 g/L, D-dimer grossly raised and a prolonged PT', meaning: 'Acute promyelocytic leukaemia with established DIC. This is the one leukaemia where treatment starts on clinical suspicion, because the haemorrhagic death occurs in the first days while confirmation is pending' },
    { clue: 'Forty-eight hours into induction: potassium 6.4 mmol/L, phosphate raised, urate raised, calcium LOW, creatinine climbing', meaning: 'Tumour lysis syndrome. The low calcium is the internally consistent clue — released phosphate binds it — and it identifies lysis rather than renal failure alone, which tends to raise phosphate and lower calcium more slowly' },
  ],

  treatment: [
    {
      logic: 'In suspected acute promyelocytic leukaemia, ATRA goes in before the genetics come back',
      detail: 'The event that kills in APL is **haemorrhage from DIC within the first days**, not the leukaemia burden, and **cytotoxic chemotherapy makes it worse** by lysing more tissue-factor-laden promyelocytes. **All-trans retinoic acid is not cytotoxic**: it displaces the repressor complex held on retinoic-acid response elements by **PML-RARA**, releases the block at the promyelocyte stage, and lets the cells differentiate into neutrophils that die normally. **Arsenic trioxide** degrades the fusion protein directly, and the two together cure the majority without conventional chemotherapy in low-risk disease. Therefore: **start ATRA on suspicion**, and support aggressively while the diagnosis is confirmed — **fibrinogen above 1.0 to 1.5 g/L with cryoprecipitate** and **platelets above 30 to 50 x 10^9/L**. Then watch for the treatment’s own complication, **differentiation syndrome**: fever, dyspnoea, hypoxia, pulmonary infiltrates, weight gain and effusions from a cytokine surge as the clone matures — treat promptly with **dexamethasone**, and do not mistake it for infection or fluid overload.',
    },
    {
      logic: 'Tumour lysis syndrome is prevented, not treated — and the two urate drugs are not interchangeable',
      detail: 'Identify risk BEFORE the first dose: **high blast count, bulky disease, Burkitt lymphoma, ALL, high baseline urate or impaired renal function**. **Aggressive hydration** is the backbone. Then choose by mechanism. **Allopurinol inhibits xanthine oxidase**, so it prevents NEW urate from forming but does nothing to urate already present — it must be started **before** cytoreduction, and it causes xanthine to accumulate instead. **Rasburicase is recombinant urate oxidase**, converting existing urate to soluble allantoin, so it is the agent when urate is already high or risk is severe; it is **contraindicated in G6PD deficiency**, because the reaction generates hydrogen peroxide and precipitates oxidative haemolysis and methaemoglobinaemia — the same chemistry set out in [[rbp-haemolytic-anaemias]]. Two counter-intuitive rules complete it: do **not** correct **asymptomatic hypocalcaemia** with calcium, since adding calcium to a high phosphate drives calcium-phosphate deposition in the renal tubules, and **abandon urinary alkalinisation**, which dissolves urate but precipitates calcium phosphate.',
    },
  ],

  mnemonics: [
    {
      hook: 'LAP HIGH is a reaction; LAP LOW is a clone',
      expansion: [
        'Leukaemoid reaction: mature and band neutrophils, toxic granulation, Döhle bodies, an obvious trigger',
        'Alkaline phosphatase HIGH because the neutrophils are normal cells driven by cytokines',
        'CML: the full myeloid spectrum with a myelocyte bulge, basophilia, and a spleen crossing the midline',
        'Alkaline phosphatase LOW because the neutrophils are clonal and functionally abnormal',
        'Basophilia is the best film clue — reactive states essentially never make basophils',
      ],
    },
    {
      hook: 'Acute leukaemia is an ARREST, and the triad is what the marrow stopped making',
      expansion: [
        'Twenty per cent blasts of marrow nucleated cells is the definition — a count, not a growth rate',
        'Red cells stop: anaemia, fatigue, pallor',
        'Neutrophils stop: fever and infection, often with strikingly little pus',
        'Platelets stop: petechiae, gum bleeding, bruising',
        'Auer rods and myeloperoxidase mean AML; nuclear TdT means ALL',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'What a normal white cell count excludes in suspected leukaemia',
      wrongInstinct: 'The white count is 6 x 10^9/L, so acute leukaemia is unlikely and the pancytopenia must be aplastic or nutritional',
      rightAnswer: 'Examine the film and biopsy the marrow — aleukaemic leukaemia presents with a normal or LOW white count and pancytopenia',
      why: 'Blasts accumulating in the marrow and blasts spilling into blood are independent variables. The diagnosis is made on blast percentage in the marrow, never on the total white cell count.',
    },
    {
      questionCategory: 'A very high neutrophil count with immature forms',
      wrongInstinct: 'White cells above 50 x 10^9/L with myelocytes and bands means chronic myeloid leukaemia',
      rightAnswer: 'Look for toxic granulation, basophilia and the alkaline phosphatase score: a leukaemoid reaction has a HIGH score, no basophilia and a demonstrable trigger',
      why: 'A reaction produces functionally normal neutrophils, so the alkaline phosphatase they carry is high; CML produces clonal, functionally defective neutrophils with a LOW score, plus basophilia and massive splenomegaly. BCR-ABL1 confirms it.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A septic patient has white cells 58 x 10^9/L with band forms, myelocytes, toxic granulation and Döhle bodies. The spleen is not palpable and there is no basophilia. Which finding would most strongly confirm that this is reactive rather than chronic myeloid leukaemia?',
      options: [
        { id: 'a', text: 'A HIGH leukocyte alkaline phosphatase score, because reactive neutrophils are functionally normal and cytokine-driven' },
        { id: 'b', text: 'A LOW leukocyte alkaline phosphatase score, because reactive cells are immature and enzyme-poor' },
        { id: 'c', text: 'A white cell count above 50 x 10^9/L, which does not occur in chronic myeloid leukaemia' },
        { id: 'd', text: 'The presence of myelocytes, which are found only in reactive states' },
      ],
      answerId: 'a',
      explanation: 'The score reads clonality indirectly. A leukaemoid reaction is polyclonal expansion of functionally normal neutrophils driven by inflammatory cytokines, so their alkaline phosphatase content is high. CML neutrophils are clonal and functionally defective, so the score is low, and CML adds basophilia, eosinophilia, a myelocyte bulge and massive splenomegaly. The absent spleen and absent basophilia here already favour a reaction; BCR-ABL1 by FISH or PCR is the definitive modern test and has largely replaced the score.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A woman presents with pancytopenia, blasts with heavy azurophilic granulation, fibrinogen 0.7 g/L, a prolonged PT and bleeding from cannula sites. Cytogenetics are pending. What should be done first, and why?',
      options: [
        { id: 'a', text: 'Withhold all treatment until cytogenetics confirm the subtype, since ATRA is harmful in other forms of AML' },
        { id: 'b', text: 'Start standard cytotoxic induction chemotherapy immediately to reduce the blast burden and stop the coagulopathy' },
        { id: 'c', text: 'Start all-trans retinoic acid on clinical suspicion, with cryoprecipitate and platelet support, because DIC-driven haemorrhage kills in the first days and ATRA differentiates rather than lyses the promyelocytes' },
        { id: 'd', text: 'Give heparin as the primary therapy, since the underlying problem is disseminated intravascular coagulation' },
      ],
      answerId: 'c',
      explanation: 'The picture is acute promyelocytic leukaemia with DIC. Arrested promyelocytes are loaded with tissue factor and profibrinolytic granule contents, so cytotoxic chemotherapy worsens the coagulopathy by lysing more of them. ATRA is non-cytotoxic: pharmacological doses displace the repressor complex held by PML-RARA, releasing the maturation block so cells differentiate into neutrophils and die normally, and arsenic trioxide degrades the fusion protein. Because haemorrhagic death occurs within days, treatment starts on suspicion alongside fibrinogen and platelet support. Watch for differentiation syndrome and treat it with dexamethasone.',
      tests: 'treatment',
    },
    {
      id: 'q3',
      stem: 'Which statement best captures what makes a leukaemia "acute" and separates AML from ALL?',
      options: [
        { id: 'a', text: 'Acute leukaemia is defined by a rapid rate of cell division; AML and ALL are separated by the total white cell count at presentation' },
        { id: 'b', text: 'Acute leukaemia is defined by a block in maturation with 20% or more blasts in the marrow; myeloperoxidase and Auer rods indicate AML, while nuclear TdT indicates ALL' },
        { id: 'c', text: 'Acute leukaemia is defined by the presence of splenomegaly; lineage is assigned by the patient age alone' },
        { id: 'd', text: 'Acute leukaemia is defined by pancytopenia; AML and ALL are distinguished only by response to treatment' },
      ],
      answerId: 'b',
      explanation: 'The defining lesion is arrest, not speed: the clone gains self-renewal and loses the ability to differentiate, so blasts accumulate because they neither mature nor die. The definition is therefore a count — 20% or more blasts among marrow nucleated cells — with t(15;17), t(8;21) and inv(16) diagnostic at any percentage. Lineage is assigned by markers, not by the white count, which may be high, normal or low. Myeloperoxidase and Auer rods, which are crystallised MPO, establish myeloid lineage; TdT is restricted to immature lymphoid cells and establishes ALL, refined by CD19 and CD10 for B-ALL or CD3 for T-ALL.',
      tests: 'disease',
    },
  ],
};

export default rbpLeukocyteDisordersAcuteLeukaemia;
