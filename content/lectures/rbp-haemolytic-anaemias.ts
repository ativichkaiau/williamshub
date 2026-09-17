import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpHaemolyticAnaemias: Lecture = {
  id: 'rbp-haemolytic-anaemias',
  title: 'Haemolytic Anaemias',
  system: 'heme',
  source: 'Ch 11 — Hematopoietic and Lymphoid Systems',
  updated: '2026-09-16',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'Ch 11 Hematopoietic and Lymphoid Systems' },
    { kind: 'mechanism', label: 'Intravascular vs extravascular, intrinsic vs extrinsic' },
    { kind: 'disease', label: 'Membrane, enzyme, globin and antibody defects' },
  ],

  highYield: [
    '**Every haemolysis shares one laboratory signature, and the first axis — WHERE the cell dies — is read straight off it.** Shortened survival raises output: **reticulocyte production index above 3**, **unconjugated bilirubin** raised, **LDH** raised, **haptoglobin** consumed, and an **erythroid hyperplastic marrow** with the myeloid-to-erythroid ratio falling from a normal **2–3:1 towards 1:1 or lower**. Now split it. **Intravascular** lysis dumps free haemoglobin into plasma: **haptoglobin becomes undetectable** (it is saturated and cleared within minutes), **LDH is very high**, and once haptoglobin is exhausted you get **haemoglobinaemia**, **haemoglobinuria** and, after a few days, **haemosiderinuria** as shed tubular cells carry away the iron they absorbed. **Extravascular** destruction happens inside macrophages of the spleen and liver, so no free haemoglobin appears: you get **splenomegaly**, **jaundice**, a **low but detectable haptoglobin**, and a far less dramatic LDH. The practical rule: **haemoglobinuria with an undetectable haptoglobin means the cell burst in the vessel; splenomegaly with jaundice and no haemoglobinuria means it was eaten.**',
    '**The second axis — WHAT is wrong — maps almost perfectly onto inherited versus acquired, and paroxysmal nocturnal haemoglobinuria is the exception that proves the rule.** An **intrinsic** defect means the red cell is faulty: membrane skeleton, enzyme, or globin — and these are **almost all inherited**. An **extrinsic** attack means the cell is normal and the environment is hostile: antibody, complement, fibrin strands, mechanical valves, malaria, snake venom, hypersplenism — and these are **almost all acquired**. **PNH breaks the pattern**: an acquired somatic mutation in **PIGA** in a haematopoietic stem cell abolishes synthesis of the **GPI anchor**, so the clone loses every GPI-linked surface protein, including the complement regulators **CD55 (decay-accelerating factor)** and **CD59 (membrane inhibitor of reactive lysis)**. Unrestrained complement lyses the cells **intravascularly and continuously** — the nocturnal part is a misnomer, since the haemoglobinuria is simply concentrated in the first morning urine. Diagnosis is **flow cytometry showing loss of CD55 and CD59, with FLAER on granulocytes**, not the obsolete sucrose or Ham tests. **Thrombosis, often at unusual sites such as hepatic or cerebral veins, is what kills these patients**, not the anaemia. Detail in [[hhl-maha-pnh]].',
    '**Membrane and enzyme defects each produce a morphology you can reason back to.** **Hereditary spherocytosis** is a defect of the **vertical** links tethering the lipid bilayer to the spectrin skeleton — **ankyrin** (commonest), **spectrin**, **band 3**, **protein 4.2** — usually autosomal dominant. Unanchored membrane vesiculates away, so the cell loses **surface area at constant volume** and the only shape left is a **sphere**. A sphere cannot deform, so it is trapped in the **splenic cords** and consumed: extravascular haemolysis. Two fingerprints: **MCHC above 36 g/dL**, the only common anaemia that RAISES the MCHC, and **increased osmotic fragility** (now largely replaced by the more sensitive **EMA binding test**). **G6PD deficiency** is X-linked, and G6PD is the red cell’s ONLY route to **NADPH** because it has no mitochondria — so without it **glutathione cannot be regenerated** and any oxidant stress denatures haemoglobin into **Heinz bodies**, which splenic macrophages pluck out to leave **bite cells** and **blister cells**. The pattern is **episodic**, triggered by **infection (commonest), fava beans, primaquine, dapsone, nitrofurantoin, sulfonamides and rasburicase**. See [[hhl-g6pd-membrane-defects]].',
    '**In sickle cell disease the haemoglobin is qualitatively WRONG; in thalassaemia there is not enough of one chain — and in both the damage is done by the chain that is PRESENT, not by the one that is missing.** Sickle cell is a single **GAG to GTG** change giving **valine for glutamate at position 6 of beta globin**. Deoxygenated HbS polymerises into rigid fibres, and because polymerisation depends steeply on HbS concentration, **anything that dehydrates the cell or raises MCHC accelerates it** — which is also why **HbF, by interrupting the fibre, is protective** and why hydroxyurea works. That single event yields two diseases at once: repeated sickling stiffens the membrane into **irreversibly sickled cells** that are destroyed (chronic haemolysis), and rigid, adhesive cells plus activated neutrophils and endothelium cause **vaso-occlusion** — pain crises, acute chest syndrome, stroke, and **autosplenectomy** with its lifelong risk from encapsulated organisms. Thalassaemia is quantitative, and the site of damage tells you which chain is in excess: in **beta-thalassaemia** the surplus **alpha chains are insoluble** and precipitate inside precursors, so cells die in the marrow — **ineffective erythropoiesis dominates**, driving massive marrow expansion and iron overload. In **alpha-thalassaemia** the surplus **beta chains form relatively soluble HbH tetramers** that survive to damage mature circulating cells, so **peripheral haemolysis dominates**; in the fetus, **gamma-chain tetramers (Hb Barts)** cannot release oxygen and cause **hydrops fetalis**.',
    '**Autoimmune haemolysis is classified by the THERMAL AMPLITUDE of the antibody, and that single property predicts the isotype, the site of destruction, the film and the treatment.** **Warm AIHA (about 70–80% of cases)** is **IgG** binding optimally at **37 degrees**. IgG does not fix complement efficiently, so the coated cell is not lysed; instead splenic macrophages grip it through **FcγR**, tear off part of the membrane, and release a smaller cell that has lost surface area — a **spherocyte**. Destruction is therefore **extravascular and splenic**, with **splenomegaly** and **spherocytes on the film**. Associations: **SLE, chronic lymphocytic leukaemia, lymphoma, methyldopa, penicillins**. **Cold agglutinin disease** is **IgM**, which binds in the cooler acral circulation, and because IgM is pentameric it **agglutinates cells and fixes complement powerfully**. Deposited **C3b** is then cleared by **hepatic Kupffer cells**, with some direct intravascular lysis. Associations: **Mycoplasma pneumoniae (anti-I)** and **infectious mononucleosis (anti-i)**. The **direct antiglobulin (Coombs) test** is the separator from every non-immune cause: **IgG alone suggests warm, C3d alone suggests cold, and a negative test moves you to membrane, enzyme, globin or mechanical disease**. Full clinical layer in [[hhl-aiha]].',
    '**Microangiopathic haemolysis is a purely MECHANICAL process — fibrin or platelet strands act as a cheese wire, and the schistocyte is the proof.** Red cells forced through partially occluded microvessels are sheared into **schistocytes, helmet cells and triangular fragments**, with lysis that is largely **intravascular** and a **negative direct antiglobulin test**. Three causes account for almost all of it, and a coagulation screen separates them without ambiguity. **TTP** is a deficiency of **ADAMTS13**, the protease that cleaves ultra-large von Willebrand factor multimers — usually an acquired autoantibody; uncleaved multimers recruit platelets into microthrombi, so **platelets are consumed but clotting factors are not**. **HUS**, classically after **Shiga-toxin-producing E. coli O157:H7**, injures glomerular endothelium, giving the same picture with **prominent renal failure** and typically bloody diarrhoea. **DIC** is different in kind: systemic **tissue factor** release generates **fibrin** thrombi and consumes platelets AND factors. Hence the rule that answers the exam question: **schistocytes with a NORMAL PT, aPTT and fibrinogen is TTP or HUS; schistocytes with a prolonged PT and aPTT, low fibrinogen and high D-dimer is DIC**. Prosthetic valves and malignant hypertension produce the same fragments by the same physics.',
  ],

  mechanism: {
    title: 'Two axes that locate any haemolysis',
    steps: [
      { id: 's1', label: 'Red cell survival falls below 120 days, but the marrow can lift output six- to eight-fold — so early haemolysis is compensated and not anaemic', detail: 'A normal haemoglobin with a high reticulocyte count and a high LDH is compensated haemolysis, not a normal result.', emphasis: 'normal' },
      { id: 's2', label: 'Destruction outstrips compensation — reticulocyte index above 3, LDH and unconjugated bilirubin up, haptoglobin consumed', emphasis: 'key' },
      { id: 's3', label: 'Axis one, WHERE: burst in the vessel gives haemoglobinaemia, haemoglobinuria and an undetectable haptoglobin; eaten in the spleen gives splenomegaly and jaundice', emphasis: 'key' },
      { id: 's4', label: 'Axis two, WHAT: an intrinsic defect of membrane, enzyme or globin, nearly always inherited — or an extrinsic antibody, complement, fibrin or parasite, nearly always acquired', detail: 'PNH is the acquired clonal exception: an intrinsic defect the patient was not born with.', emphasis: 'key' },
      { id: 's5', label: 'The film names the lesion — spherocytes, bite cells, sickle cells, schistocytes, agglutinated clumps', emphasis: 'normal' },
      { id: 's6', label: 'Chronic haemolysis then buys its own complications: pigment gallstones, marrow expansion, iron overload, and collapse if parvovirus B19 shuts the marrow down', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Jaundice, splenomegaly and pigment gallstones in a young adult whose parent had a splenectomy', mechanism: 'Hereditary spherocytosis, usually autosomal dominant. Non-deformable spheres are retained in the splenic cords and consumed, and the chronic bilirubin load precipitates calcium bilirubinate stones', significance: 'key' },
    { sign: 'Cola-coloured first morning urine, with the dipstick positive for blood but no red cells seen on microscopy', mechanism: 'Haemoglobinuria, not haematuria. The dipstick detects haem peroxidase activity whether it sits in cells or free in plasma, so an empty microscopy field proves the lysis happened inside the vessel', significance: 'key' },
    { sign: 'Bite cells and blister cells appearing two to three days after an oxidant drug or a meal of fava beans in a boy', mechanism: 'G6PD deficiency — oxidised haemoglobin precipitates as Heinz bodies and splenic macrophages excise them, leaving a crescent of missing cytoplasm', significance: 'key' },
    { sign: 'Acral cyanosis and mottling on cold exposure that resolves on rewarming, with the blood sample visibly clumping and a spuriously high MCV', mechanism: 'Cold agglutinin IgM binds in the cooled peripheral circulation and cross-links cells; the analyser counts the clumps as single large cells', significance: 'key' },
    { sign: 'Painful swelling of the hands and feet in a toddler, and later Howell-Jolly bodies with pneumococcal sepsis', mechanism: 'Sickle cell disease — dactylitis from vaso-occlusion in marrow-rich small bones, then autosplenectomy, which removes both the pitting function (hence retained nuclear remnants) and opsonisation against encapsulated organisms', significance: 'key' },
    { sign: 'Frontal bossing, maxillary overgrowth and a crew-cut appearance of the skull on radiography', mechanism: 'Beta-thalassaemia major — ineffective erythropoiesis drives erythropoietin relentlessly, expanding marrow until it thins cortical bone and extends into the diploic space', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Reticulocyte index 5, LDH raised, unconjugated bilirubin raised, haptoglobin undetectable', meaning: 'Haemolysis confirmed and localised. An undetectable rather than merely low haptoglobin points intravascular, because free plasma haemoglobin saturates and clears the entire pool within minutes' },
    { clue: 'Direct antiglobulin test positive for IgG alone, versus positive for C3d alone, versus negative', meaning: 'IgG alone indicates warm AIHA with splenic extravascular clearance; C3d alone indicates a complement-fixing cold IgM; a negative test moves the diagnosis to a membrane, enzyme, globin or mechanical cause' },
    { clue: 'MCHC 37 g/dL with spherocytes on the film and a NEGATIVE direct antiglobulin test', meaning: 'Hereditary spherocytosis. Spherocytes occur in both warm AIHA and HS, and the Coombs test is what separates them. A raised MCHC is near-unique to HS because membrane has been lost while haemoglobin has not' },
    { clue: 'A G6PD assay reported as normal during an acute haemolytic episode', meaning: 'Falsely reassuring and must be repeated in about 3 months. Haemolysis preferentially destroys the oldest, most enzyme-depleted cells and floods the blood with enzyme-replete reticulocytes, so the assay measures the survivors rather than the population' },
    { clue: 'Schistocytes with platelets 18 x 10^9/L but a normal PT, aPTT and fibrinogen', meaning: 'TTP or HUS, not DIC. Von Willebrand factor and platelet microthrombi consume platelets only; DIC generates fibrin and consumes clotting factors as well, prolonging the times and dropping the fibrinogen' },
    { clue: 'Flow cytometry showing a granulocyte population lacking CD55 and CD59, with absent FLAER binding', meaning: 'Paroxysmal nocturnal haemoglobinuria. Testing granulocytes as well as red cells avoids underestimating the clone, because the complement-sensitive red cells are continuously being destroyed and transfused cells dilute the result' },
  ],

  treatment: [
    {
      logic: 'Splenectomy cures the anaemia of hereditary spherocytosis without curing the disease — and knowing why tells you where else it works',
      detail: 'The **ankyrin or spectrin defect is untouched**, so spherocytes persist on the film for life. What changes is that the **organ performing the destruction is gone**: haemoglobin normalises, reticulocytes and bilirubin fall, and gallstone formation slows. That logic generalises precisely. It also helps in **warm AIHA**, because IgG-coated cells are likewise cleared by splenic **FcγR**-bearing macrophages. It does **not** help in **G6PD deficiency**, where the disease is episodic and trigger-driven so **avoidance is the treatment**, nor in **sickle cell disease**, where the spleen has usually already infarcted itself. It is also largely futile in **cold agglutinin disease**, because C3b-opsonised cells are cleared in the **liver**. Practical constraints: **delay until after about age 5 to 6**, vaccinate against **pneumococcus, meningococcus and Haemophilus influenzae type b at least 2 weeks beforehand**, and give **penicillin prophylaxis** afterwards in children. Fold in daily **folate**, since chronic high-turnover erythropoiesis outruns folate supply.',
    },
    {
      logic: 'In autoimmune haemolysis, thermal amplitude picks the treatment — warm responds to immunosuppression, cold responds to a warm room',
      detail: '**Warm IgG disease** is an **FcγR-mediated, spleen-based** process, so it responds to everything that blunts that pathway: **corticosteroids first**, then **rituximab**, then **splenectomy**, with transfusion given when needed — never withheld for fear of a difficult crossmatch in a bleeding or compromised patient. **Cold IgM disease** is **complement-mediated and liver-based**, which is exactly why **steroids and splenectomy usually fail**. The rational measures follow from the mechanism: keep the patient and the limbs **warm**, **warm all transfused blood and intravenous fluids**, treat the **underlying clone or infection** (rituximab for a lymphoproliferative driver; Mycoplasma and EBV-associated cases are self-limiting), and use **complement-directed therapy** in refractory disease. Also read the direct antiglobulin test as a statement about **site**, not merely positivity: IgG means spleen, C3d means liver. The mechanical haemolyses are treated by removing the physics — the shearing lesion, not the red cell. Baseline haemolysis kinetics are in [[rbp-anaemia-production-failure]].',
    },
  ],

  mnemonics: [
    {
      hook: 'Haptoglobin says WHERE; the Coombs says WHO',
      expansion: [
        'Haptoglobin undetectable with haemoglobinuria — the cell burst inside the vessel',
        'Haptoglobin low but present, with splenomegaly and jaundice — the cell was eaten',
        'Direct antiglobulin POSITIVE — an antibody is doing it',
        'Direct antiglobulin NEGATIVE — the fault is in the cell or in the vessel',
        'IgG on the cell means spleen; C3d on the cell means liver',
      ],
    },
    {
      hook: 'Blame the chain that is THERE',
      expansion: [
        'Beta-thalassaemia: surplus alpha chains are insoluble and precipitate inside precursors',
        'So cells die in the marrow — ineffective erythropoiesis dominates',
        'Alpha-thalassaemia: surplus beta chains form soluble HbH tetramers that survive into the circulation',
        'So mature cells are damaged — peripheral haemolysis dominates',
        'Sickle cell: the chain present is qualitatively wrong and polymerises when deoxygenated',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'When to measure G6PD',
      wrongInstinct: 'A normal G6PD level taken during the haemolytic episode excludes the diagnosis',
      rightAnswer: 'Repeat the assay about 3 months later, once the reticulocytosis has settled',
      why: 'Haemolysis selectively kills the oldest, most enzyme-depleted cells and replaces them with enzyme-replete reticulocytes, so an assay taken during the crisis measures only the survivors. Test the population when its age distribution is back to normal.',
    },
    {
      questionCategory: 'Schistocytes with a low platelet count',
      wrongInstinct: 'Fragmented cells plus thrombocytopenia means DIC, so start treating a consumption coagulopathy',
      rightAnswer: 'Read the PT, aPTT and fibrinogen first — if they are normal this is TTP or HUS, not DIC',
      why: 'TTP and HUS build microthrombi out of von Willebrand factor and platelets, so only platelets are consumed. DIC builds them out of fibrin, so clotting factors go too. A normal coagulation screen with schistocytes means the clot is platelet-based.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A man passes dark urine each morning. Haptoglobin is undetectable, LDH is grossly raised, the direct antiglobulin test is negative, urine microscopy shows no red cells, and he has recently had a hepatic vein thrombosis. Which mechanism fits?',
      options: [
        { id: 'a', text: 'Warm autoimmune haemolysis with IgG-coated cells cleared by splenic macrophages' },
        { id: 'b', text: 'An acquired PIGA mutation removing the GPI anchor and therefore CD55 and CD59, leaving red cells defenceless against complement' },
        { id: 'c', text: 'Hereditary spherocytosis with loss of vertical membrane anchoring and splenic trapping' },
        { id: 'd', text: 'Beta-thalassaemia trait with precipitation of surplus alpha chains inside erythroid precursors' },
      ],
      answerId: 'b',
      explanation: 'Undetectable haptoglobin with haemoglobinuria and a very high LDH places the destruction inside the vessel, and the negative Coombs test excludes an antibody. PNH is the intravascular, complement-mediated, Coombs-negative haemolysis, and thrombosis at unusual sites such as hepatic or cerebral veins is its characteristic and most lethal complication. Diagnosis is by flow cytometry for loss of CD55 and CD59 with FLAER on granulocytes. Spherocytosis and warm AIHA are extravascular and splenic; thalassaemia trait is not a haemolytic emergency.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A woman develops haemolysis after Mycoplasma pneumonia. The direct antiglobulin test is positive for C3d only, and cells agglutinate in the cooled sample. Prednisolone and then splenectomy both fail. What is the mechanistic reason?',
      options: [
        { id: 'a', text: 'IgM-coated cells are opsonised with C3b and cleared by Kupffer cells in the liver, so removing the spleen removes the wrong organ' },
        { id: 'b', text: 'IgM antibodies are unaffected by corticosteroids because they are produced exclusively in the bone marrow' },
        { id: 'c', text: 'Complement activation destroys the cells before any antibody can be detected, so the diagnosis must be incorrect' },
        { id: 'd', text: 'Cold agglutinins cause haemolysis only in the spleen, so failure after splenectomy indicates a second disease' },
      ],
      answerId: 'a',
      explanation: 'Thermal amplitude determines both isotype and site. Pentameric IgM fixes complement efficiently, so cells end up coated with C3b rather than IgG, and C3b-opsonised cells are cleared by hepatic Kupffer cells, which is why splenectomy fails and why the DAT shows C3d alone. The mechanism dictates the therapy: keep the patient warm, warm all transfused blood and fluids, and treat the driving clone or infection. Warm IgG disease is the opposite case, cleared through splenic FcγR, and there steroids, rituximab and splenectomy all work.',
      tests: 'treatment',
    },
    {
      id: 'q3',
      stem: 'Why does beta-thalassaemia major cause massive marrow expansion and profound ineffective erythropoiesis, while HbH disease is dominated by peripheral haemolysis?',
      options: [
        { id: 'a', text: 'Beta chains are synthesised earlier in gestation, so their loss causes a longer period of marrow stress' },
        { id: 'b', text: 'The unpaired chain differs: surplus alpha chains are insoluble and precipitate inside precursors, killing them in the marrow, whereas surplus beta chains form relatively soluble HbH tetramers that survive to damage mature circulating cells' },
        { id: 'c', text: 'Alpha-thalassaemia never reduces total haemoglobin synthesis, so no marrow response is triggered' },
        { id: 'd', text: 'Beta-thalassaemia is caused by gene deletion and alpha-thalassaemia by point mutation, which determines the site of destruction' },
      ],
      answerId: 'b',
      explanation: 'The pathology in thalassaemia comes from the chain that is present in excess, not from the one that is missing. Free alpha chains have no soluble partner, precipitate in erythroid precursors and kill them before release, so beta-thalassaemia is dominated by intramedullary death, relentless erythropoietin drive, skeletal deformity and iron overload. Free beta chains assemble into HbH tetramers that are soluble enough to reach the circulation, so alpha-thalassaemia presents mainly as haemolysis of mature cells. In the fetus, gamma tetramers form Hb Barts, which cannot unload oxygen and causes hydrops fetalis.',
      tests: 'mechanism',
    },
  ],
};

export default rbpHaemolyticAnaemias;
