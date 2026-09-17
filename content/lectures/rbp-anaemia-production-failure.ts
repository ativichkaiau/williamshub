import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpAnaemiaProductionFailure: Lecture = {
  id: 'rbp-anaemia-production-failure',
  title: 'Anaemia of Impaired Production',
  system: 'heme',
  source: 'Ch 11 — Hematopoietic and Lymphoid Systems',
  updated: '2026-09-16',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'Ch 11 Hematopoietic and Lymphoid Systems' },
    { kind: 'mechanism', label: 'Kinetic classification & marrow failure' },
    { kind: 'investigation', label: 'Reticulocyte index and iron studies' },
  ],

  highYield: [
    '**Ask the KINETIC question before you look at the film: is this underproduction, destruction, or blood loss?** Morphology is the second question, not the first, because a low MCV tells you nothing about whether the marrow is trying. The reticulocyte count answers the first question directly, which is why it is the single most informative initial test in any anaemia. Raw reticulocyte percentage is a fraction of a shrunken denominator, so correct it twice: **corrected reticulocyte = reticulocyte % x (haematocrit / 45)**, then divide by the **maturation factor** — **1.0 at a haematocrit of 45, 1.5 at 35, 2.0 at 25, 2.5 at 15** — because marrow stress releases reticulocytes early and they survive longer in blood. The result is the **reticulocyte production index**. **Below 2 the marrow is not responding and the lesion is production; above 3 the marrow is working hard and the red cells are being destroyed or lost.** Normal is **0.5–1.5%**, an absolute count of roughly **25–75 x 10^9/L**. The classification framework this rests on is in [[hhl-anemia-classification]].',
    '**Iron deficiency depletes in a fixed sequence, and that sequence is why ferritin falls FIRST and the MCV falls LAST.** Stage one empties storage iron — **ferritin falls below 30 µg/L** while the blood count is still normal. Stage two is iron-deficient erythropoiesis: **transferrin saturation drops below 16%**, **total iron-binding capacity rises** because the liver upregulates transferrin when iron is scarce, and **soluble transferrin receptor rises** as cells shout for iron. Only in stage three do you get the anaemia everyone recognises — **microcytic, hypochromic, with a raised RDW** because a normal population is being replaced gradually by a small one, so the two sizes coexist. Ferritin below **15 µg/L** is essentially diagnostic. The morphology follows from the rule that erythroblasts keep dividing until a threshold haemoglobin concentration is reached: with too little haem, one or two extra divisions occur before the threshold, and the cell that emerges is small and pale. The clinical rule matters more than any of this: in an **adult man or a postmenopausal woman**, iron deficiency is **gastrointestinal blood loss until proven otherwise**, and giving iron without looking is the error. Detail in [[hhl-iron-metabolism-studies]].',
    '**Microcytosis has three common causes and they are separated by two numbers, not by the MCV.** The three are **iron deficiency**, **thalassaemia trait** and **anaemia of chronic disease**. First number: the **red cell count**. Iron deficiency makes fewer cells AND smaller cells, so both the haemoglobin and the count fall together. Thalassaemia trait makes plenty of small cells, so the count is **normal or high — often above 5.5 x 10^12/L — which is disproportionate to a barely reduced haemoglobin**. That is exactly what the **Mentzer index (MCV divided by the red cell count in 10^12/L)** captures: **under 13 points to thalassaemia trait, over 13 to iron deficiency**. Second number: the **RDW**, which is **high in iron deficiency** (a mixed population) and **normal in thalassaemia trait** (a uniformly small one). Confirm with **iron studies — low ferritin with a high TIBC in deficiency, entirely normal studies in trait** — and with **HbA2 above 3.5% in beta-thalassaemia trait**. One honest caveat: coexisting iron deficiency **lowers HbA2** and can mask the trait, so replace iron before calling the electrophoresis normal.',
    '**Anaemia of chronic disease is not iron deficiency — it is iron IMPRISONMENT, and hepcidin is the jailer.** Inflammation, chiefly through **interleukin-6**, drives hepatocytes to secrete **hepcidin**. Hepcidin binds **ferroportin**, the only exporter of iron from cells, and forces its internalisation and degradation. Ferroportin sits on **duodenal enterocytes** (so absorption stops), on **macrophages** recycling senescent red cells (so the daily **20–25 mg** of recycled iron never re-enters plasma), and on **hepatocytes**. Every laboratory value then becomes derivable rather than memorised: **serum iron LOW** because none is exported; **ferritin NORMAL or HIGH** because the iron is still there inside macrophages, and because ferritin is itself an acute-phase reactant; **TIBC LOW** because transferrin falls as a negative acute-phase protein and there is no iron shortage signal to raise it. Add a blunted erythropoietin response and shortened red cell survival from macrophage activation. It is usually **normocytic and normochromic**, becoming mildly microcytic only when long-standing — so a frankly microcytic picture should still make you look for a second cause.',
    '**Megaloblastic anaemia is a DNA synthesis defect with intact RNA and cytoplasmic maturation — every finding follows from that asynchrony.** B12 and folate are both needed to make **thymidine** through thymidylate synthase; without it, S phase stalls while ribosomes keep building haemoglobin and cytoplasm on schedule. The nucleus is therefore immature and open-chromatined inside an over-mature cytoplasm — **nuclear-cytoplasmic asynchrony**. The same defect hits granulocyte precursors, giving **hypersegmented neutrophils** (**more than 5% with five lobes, or any cell with six**), which appear **before** the anaemia and are the earliest film clue. Crucially, many megaloblasts are so abnormal they are destroyed **inside the marrow** — **ineffective erythropoiesis**. That is why the laboratory mimics haemolysis: **LDH is often markedly raised**, **unconjugated bilirubin rises** and **haptoglobin falls**, in a marrow that is **hypercellular**. The one number that breaks the illusion is the **reticulocyte count, which is LOW** — in true haemolysis it is high. Baseline in [[hhl-b12-folate-megaloblastic]].',
    '**B12 and folate deficiency give an identical blood picture, but only B12 damages the spinal cord — and folate alone will hide the anaemia while the cord keeps degenerating.** B12 is a cofactor for two reactions: **methionine synthase** (homocysteine to methionine, regenerating tetrahydrofolate) and **methylmalonyl-CoA mutase**. Folate deficiency blocks only the first. So **homocysteine rises in BOTH, while methylmalonic acid rises ONLY in B12 deficiency** — that pair of metabolites is the definitive separator when serum levels are borderline. Loss of methionine and S-adenosylmethionine impairs myelin methylation, producing **subacute combined degeneration**: **dorsal columns** (vibration and joint-position sense go first) plus **lateral corticospinal tracts** (spasticity, brisk knee reflexes, extensor plantars), often with **absent ankle jerks** from a coexisting neuropathy — a mixed upper and lower motor neurone picture in the same patient. **Give folate to an undiagnosed macrocytic anaemia and the blood count improves while the neurology progresses, sometimes irreversibly.** The rule is absolute: **measure B12 before giving folate, and if you must treat blind, treat with B12 first.**',
  ],

  mechanism: {
    title: 'The kinetic question, then the missing ingredient',
    steps: [
      { id: 's1', label: 'Anaemia is confirmed — ask the kinetic question before the morphological one: underproduction, destruction, or loss?', detail: 'The MCV cannot answer this. Only the reticulocyte can.', emphasis: 'normal' },
      { id: 's2', label: 'Reticulocyte production index below 2 proves the marrow is not answering — the lesion is in production', emphasis: 'key' },
      { id: 's3', label: 'Now ask what the marrow lacks: haem and globin building blocks, DNA building blocks, or stem cells themselves', emphasis: 'normal' },
      { id: 's4', label: 'Missing iron or globin — precursors divide extra times before reaching the haemoglobin threshold, giving small pale cells', detail: 'Hepcidin can produce the same shortage with full stores by locking iron inside macrophages.', emphasis: 'key' },
      { id: 's5', label: 'Missing B12 or folate — the nucleus lags behind the cytoplasm, giving megaloblasts, hypersegmented neutrophils and death inside the marrow', detail: 'Intramedullary destruction raises LDH and bilirubin while the reticulocyte count stays low.', emphasis: 'key' },
      { id: 's6', label: 'Missing stem cells — all three lineages fail together in a fatty hypocellular marrow, with no spleen to enlarge', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Spoon-shaped nails, angular cheilitis and a smooth atrophic tongue', mechanism: 'Iron-dependent enzymes fail first in rapidly dividing epithelia, so nail bed, oral mucosa and tongue papillae are affected before haemoglobin synthesis is limiting', significance: 'key' },
    { sign: 'Compulsive chewing of ice or craving for earth or starch', mechanism: 'Pica and pagophagia of iron deficiency; poorly understood but highly specific, and it resolves within days of starting iron, long before the haemoglobin recovers', significance: 'supportive' },
    { sign: 'Dysphagia for solids in a middle-aged woman with glossitis and iron deficiency', mechanism: 'Plummer-Vinson syndrome — a postcricoid oesophageal web, with an increased risk of squamous carcinoma at that site', significance: 'supportive' },
    { sign: 'Lemon-tinted pallor with mild scleral icterus and a beefy, smooth, sore tongue', mechanism: 'Megaloblastic anaemia: pallor from the anaemia combined with unconjugated bilirubin released by red cells destroyed inside the marrow', significance: 'key' },
    { sign: 'Lost vibration and joint-position sense with spastic legs, brisk knee jerks and extensor plantars, but absent ankle jerks', mechanism: 'Subacute combined degeneration of the dorsal columns and lateral corticospinal tracts from B12 deficiency, with a peripheral neuropathy superimposed — the mixed upper and lower motor neurone picture is the giveaway', significance: 'key' },
    { sign: 'Mucosal petechiae, bruising and fever in a pancytopenic patient with NO splenomegaly and NO lymphadenopathy', mechanism: 'Aplastic anaemia. An enlarged spleen argues for hypersplenism, myelofibrosis, leukaemia or infiltration instead, so its absence is a positive diagnostic feature rather than a negative one', significance: 'key' },
  ],

  investigations: [
    { clue: 'Haemoglobin 70 g/L, haematocrit 21%, reticulocytes 0.8%', meaning: 'Corrected reticulocyte is 0.8 x 21/45 = 0.37, and dividing by a maturation factor of 2 gives an index under 0.2. The marrow is not responding, so stop looking for haemolysis and look for a missing ingredient or a missing stem cell' },
    { clue: 'Ferritin 8 µg/L, TIBC raised, transferrin saturation 6%, RDW 19%', meaning: 'Iron deficiency. The high TIBC is the discriminator: transferrin rises when iron is genuinely absent and FALLS in anaemia of chronic disease, where ferritin is normal or high and iron is present but locked away' },
    { clue: 'MCV 68 fL with a red cell count of 5.9 x 10^12/L, normal RDW, normal ferritin, HbA2 4.8%', meaning: 'Beta-thalassaemia trait. The Mentzer index is 11.5, under 13. A red cell count that is high for the degree of anaemia means the marrow is making plenty of cells and simply making them small' },
    { clue: 'MCV 118 fL, hypersegmented neutrophils, LDH 1400 U/L, unconjugated bilirubin raised, haptoglobin low, reticulocytes LOW, hypercellular marrow', meaning: 'Ineffective erythropoiesis, not haemolysis. Cells are dying inside the marrow, so destruction markers rise while the reticulocyte count cannot. A high reticulocyte count would have moved the diagnosis outside the marrow' },
    { clue: 'Methylmalonic acid raised with homocysteine raised, versus homocysteine raised alone', meaning: 'Both raised means B12 deficiency, because B12 serves methylmalonyl-CoA mutase as well as methionine synthase. Homocysteine alone means folate. This pair resolves borderline serum levels, which are unreliable' },
    { clue: 'Trephine biopsy showing under 25% cellularity with fatty replacement, no blasts, no fibrosis and no infiltrate', meaning: 'Aplastic anaemia. Severity is graded by adding two of: neutrophils under 0.5 x 10^9/L, platelets under 20 x 10^9/L, reticulocytes under 20 x 10^9/L. The response to antithymocyte globulin and ciclosporin is the evidence that most acquired cases are an immune attack on the stem cell' },
  ],

  treatment: [
    {
      logic: 'Measure B12 before you give folate — this is the one sequencing rule in anaemia that costs a spinal cord',
      detail: 'Folate will correct the **blood film and the MCV** in a B12-deficient patient, because the block is downstream of folate in thymidine synthesis. It does nothing for **methylmalonyl-CoA mutase**, so the **neurological damage continues — and sometimes accelerates — under a normalising blood count**. The consequence is a patient who looks treated and is not. Rules that follow: send **B12 and folate together** before treating; if both are deficient, **replace B12 first** and add folate after; and in a patient too unwell to wait, give **B12 empirically** while the assays run. Use the response as confirmation of the diagnosis — the **reticulocyte count peaks at day 5 to 7** and the haemoglobin normalises over **6 to 8 weeks**. Anticipate **hypokalaemia** as the new cell mass takes up potassium. Neurological recovery is the least reliable element: deficits present for more than **6 to 12 months** often do not fully reverse, which is the whole argument for not masking them.',
    },
    {
      logic: 'Iron deficiency is a diagnosis of CAUSE; and iron given for anaemia of chronic disease will not work',
      detail: 'Replacing the iron without finding the bleed treats the number and misses the disease — a colonic carcinoma is the diagnosis you cannot afford to postpone in an older adult. Replace with **oral ferrous salts** and check the arithmetic: **reticulocytes rise by day 5 to 10**, haemoglobin rises about **10 g/L every one to two weeks**, and treatment continues **3 months beyond normalisation** to refill stores, which the haemoglobin alone will never tell you. **Failure to respond has four explanations and only four** — wrong diagnosis, non-adherence or malabsorption, ongoing blood loss, or a coexisting inflammatory or renal cause. In **anaemia of chronic disease**, oral iron is close to futile by mechanism: **hepcidin has already internalised ferroportin**, so iron is neither absorbed across the enterocyte nor exported from macrophages. The treatment is the underlying inflammation, with **intravenous iron and erythropoiesis-stimulating agents** reserved for selected cases because they bypass the absorptive block rather than the sequestration. When the kinetic index instead comes back **above 3**, you are in a different disease entirely — see [[rbp-haemolytic-anaemias]].',
    },
  ],

  mnemonics: [
    {
      hook: 'Reticulocyte first: LOW means the factory, HIGH means the street',
      expansion: [
        'Index under 2 — production failure, so look inside the marrow',
        'Index over 3 — the marrow is working, so blood is being destroyed or lost',
        'Corrected reticulocyte = reticulocyte % x (haematocrit / 45)',
        'Then divide by the maturation factor: 1.5 at Hct 35, 2.0 at Hct 25, 2.5 at Hct 15',
        'Only after that number does the MCV mean anything',
      ],
    },
    {
      hook: 'Ferritin LOW is empty; ferritin HIGH with iron LOW is locked',
      expansion: [
        'Iron deficiency: ferritin low, TIBC HIGH, saturation low, RDW high',
        'Chronic disease: ferritin normal or high, TIBC LOW, saturation low, RDW normal',
        'Transferrin moves opposite to stored iron — that single direction settles it',
        'Thalassaemia trait: iron studies normal, red cell count high, MCV very low',
        'Mentzer index = MCV / red cell count; under 13 trait, over 13 deficiency',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'A macrocytic anaemia with a raised LDH and unconjugated bilirubin — which process is this?',
      wrongInstinct: 'Call it haemolysis and start hunting for a direct antiglobulin test',
      rightAnswer: 'Ineffective erythropoiesis of megaloblastic anaemia — check the reticulocyte count first',
      why: 'Both processes destroy red cells and both raise LDH and indirect bilirubin. Only haemolysis leaves a marrow that can answer. Reticulocytes HIGH means the cells died outside the marrow; reticulocytes LOW means they died inside it.',
    },
    {
      questionCategory: 'What a normal ferritin means in a microcytic anaemia',
      wrongInstinct: 'A normal ferritin excludes a disorder of iron, so this must be thalassaemia trait',
      rightAnswer: 'Read the TIBC and the red cell count: low TIBC with low serum iron is anaemia of chronic disease, while normal iron studies with a high red cell count is thalassaemia trait',
      why: 'Ferritin is an acute-phase reactant, so inflammation lifts it into the normal range even when stores are empty. Transferrin moves the opposite way to iron — TIBC is HIGH when iron is truly absent and LOW when iron is present but sequestered by hepcidin.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A woman has haemoglobin 68 g/L, haematocrit 20%, MCV 74 fL and a reticulocyte count of 1.2%. Which single interpretation should drive the next test?',
      options: [
        { id: 'a', text: 'The reticulocyte percentage is within the normal range, so red cell production is adequate and the low MCV points to haemolysis' },
        { id: 'b', text: 'Corrected for the haematocrit and the maturation shift, the reticulocyte index is well under 2, so this is a production failure and the marrow is missing an ingredient' },
        { id: 'c', text: 'The MCV of 74 fL establishes iron deficiency and no further kinetic assessment is required' },
        { id: 'd', text: 'A raised reticulocyte percentage in an anaemic patient always indicates a recent bleed rather than a marrow disorder' },
      ],
      answerId: 'b',
      explanation: 'A raw reticulocyte percentage is measured against a shrunken red cell denominator, so it flatters a failing marrow. Correcting gives 1.2 x 20/45 = 0.53, and dividing by a maturation factor of about 2 at this haematocrit gives an index near 0.27. Anything under 2 means the marrow is not responding, so the search moves inside the marrow — iron, B12 and folate, chronic disease, or stem cell failure — rather than towards destruction. The MCV refines the answer only after the kinetic question is settled.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A man with rheumatoid arthritis has haemoglobin 96 g/L, MCV 82 fL, serum iron low, ferritin 310 µg/L and a LOW total iron-binding capacity. What explains this combination?',
      options: [
        { id: 'a', text: 'Absolute iron deficiency from occult gastrointestinal loss, with the ferritin falsely raised by inflammation' },
        { id: 'b', text: 'Interleukin-6 drives hepcidin, which degrades ferroportin so iron cannot leave macrophages or enterocytes — stores are full but plasma iron is low' },
        { id: 'c', text: 'Thalassaemia trait, since the MCV is reduced and the ferritin is preserved' },
        { id: 'd', text: 'Erythropoietin excess causing accelerated consumption of circulating transferrin' },
      ],
      answerId: 'b',
      explanation: 'The low TIBC is the decisive value. Transferrin rises when the body senses an iron shortage and falls as a negative acute-phase protein during inflammation, so a LOW TIBC with a low serum iron means the iron exists but is inaccessible. Hepcidin binds ferroportin, the sole cellular iron exporter, and forces its internalisation, trapping recycled and dietary iron. True deficiency would show a low ferritin with a HIGH TIBC. Thalassaemia trait gives normal iron studies with a red cell count that is high for the haemoglobin.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A 70-year-old has haemoglobin 82 g/L, MCV 121 fL and hypersegmented neutrophils. Folic acid is started while vitamin assays are pending. Six weeks later the haemoglobin is 128 g/L but he has become unsteady with brisk knee jerks and extensor plantars. What happened?',
      options: [
        { id: 'a', text: 'Folate replacement precipitated a new demyelinating illness unrelated to the anaemia' },
        { id: 'b', text: 'Folate corrected thymidine synthesis and therefore the blood picture, but B12 deficiency continued to impair methylmalonyl-CoA mutase and myelin methylation, so subacute combined degeneration progressed unmasked' },
        { id: 'c', text: 'The rise in haemoglobin caused hyperviscosity and a spinal cord infarct' },
        { id: 'd', text: 'Hypersegmented neutrophils indicate folate rather than B12 deficiency, so the neurological signs must have another cause' },
      ],
      answerId: 'b',
      explanation: 'Folate lies downstream of B12 in thymidylate synthesis, so supplying it repairs DNA synthesis and the haematological picture whatever the underlying deficiency. It cannot substitute for B12 in the mutase reaction or in regenerating S-adenosylmethionine for myelin, so the dorsal columns and lateral corticospinal tracts keep degenerating while the blood count reassures everyone. Hence the rule: send B12 and folate together, and if treatment cannot wait, give B12 first. Deficits lasting beyond six to twelve months frequently do not reverse.',
      tests: 'treatment',
    },
  ],
};

export default rbpAnaemiaProductionFailure;
