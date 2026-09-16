import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpHypercoagulabilityDic: Lecture = {
  id: 'rbp-hypercoagulability-dic',
  title: 'Hypercoagulability, HIT & Disseminated Coagulation',
  system: 'pathology',
  source: 'Ch 3 — Hemodynamic Disorders, Thromboembolism, and Shock',
  updated: '2026-09-16',
  tags: [
    { kind: 'system', label: 'Pathology' },
    { kind: 'lecture', label: 'Ch 3 Hemodynamic Disorders, Thromboembolism, and Shock' },
    { kind: 'mechanism', label: 'Failed anticoagulant brakes & consumption coagulopathy' },
    { kind: 'investigation', label: 'The DIC laboratory signature' },
  ],

  highYield: [
    '**Inherited thrombophilia is almost never an excess of procoagulant — it is a failed brake, and naming the brake gives you the disease.** Three systems restrain a cascade that is permanently primed: **antithrombin** (accelerated thousands of fold by endothelial **heparan sulphate**), **protein C with its cofactor protein S** (activated by thrombin bound to **thrombomodulin**, then cleaving **factors Va and VIIIa**), and **tissue factor pathway inhibitor**. **Factor V Leiden** is by far the commonest defect: a single **Arg506Gln** substitution destroys the cleavage site activated protein C needs, so factor Va **cannot be switched off** — resistance to activated protein C. It is carried by roughly **2–15%** of people of European descent and found in up to **60%** of patients with recurrent venous thrombosis. Heterozygotes carry about a **5-fold** risk and homozygotes roughly **50-fold**, which is why the genotype is useless as a stand-alone prediction and only interpretable beside the clinical history. Baseline haemostasis is in [[rbp-edema-haemostasis-thrombosis]].',
    '**The remaining inherited defects each announce themselves differently, and the clue is usually a laboratory oddity rather than the thrombosis.** **Prothrombin G20210A** is a variant in the **3-prime untranslated region** that stabilises the transcript and raises circulating prothrombin; carried by **1–2%** of the population with about a **3-fold** risk. **Antithrombin deficiency** announces itself as **heparin resistance** — an aPTT that will not prolong on escalating unfractionated heparin, because heparin has no intrinsic activity and works only by accelerating antithrombin. **Protein C** and **protein S deficiency** remove the switch-off for factors Va and VIIIa; homozygous protein C deficiency presents in the neonate as **purpura fulminans**. Note one genuinely contested entry: severe **homocystinuria** from cystathionine beta-synthase deficiency is strongly thrombogenic, but **mild hyperhomocysteinaemia** is now regarded as a weak marker at best, because folate supplementation lowers the level without lowering thrombotic events.',
    '**Warfarin-induced skin necrosis is the single best worked consequence in this chapter, and it falls straight out of half-lives.** Warfarin inhibits vitamin K epoxide reductase and therefore depletes factors **II, VII, IX and X** together with the anticoagulant proteins **C and S**. The rate of depletion follows each protein’s **half-life**: **protein C is about 6–8 hours** and **factor VII about 6 hours**, while **factor II (prothrombin) is around 60–72 hours**. So in the first days of warfarin the patient loses the brake long before losing the brakes it was restraining — a transient **hypercoagulable** state. In someone with baseline **protein C deficiency** there is little to lose, and dermal microvascular thrombosis produces sharply demarcated **haemorrhagic skin necrosis at day 3–5** in fat-rich areas: breast, thigh, buttock. Two rules follow without memorisation: **bridge with heparin** until the INR is therapeutic for **at least 48 hours and two consecutive readings**, and never give a **large loading dose**, which exaggerates the same gap.',
    '**Acquired prothrombotic states are far commoner than inherited ones, and heparin-induced thrombocytopenia is the one that inverts your instincts.** Ordinary acquired risk stacks Virchow’s arms: **immobility and surgery** (stasis), **pregnancy and the puerperium**, **oestrogen-containing contraception**, **obesity**, **nephrotic syndrome** (urinary antithrombin loss), and **malignancy** — mucin-secreting adenocarcinoma releasing tissue-factor-like procoagulants, giving **Trousseau migratory thrombophlebitis** in shifting superficial veins. **Immune HIT** is different in kind: IgG against the **platelet factor 4–heparin** complex binds platelet **FcγRIIa**, activating platelets and generating microparticles. The result is **thrombosis with a falling platelet count**, typically a **drop of more than 50%** between **days 5 and 10** of exposure, rarely below **20 x 10^9/L**, and **bleeding is conspicuously absent**. It is commoner with **unfractionated** than with low molecular weight heparin, and commoner after surgery than in medical patients.',
    '**Antiphospholipid syndrome is defined by a paradox: the clotting time is LONG in the tube and the patient CLOTS in the body.** Autoantibodies against **beta-2-glycoprotein I** bound to phospholipid (detected as **lupus anticoagulant**, **anticardiolipin** and **anti-beta-2-glycoprotein I**) bind the very phospholipid surface that the **aPTT** assay depends on, so the assay is starved of its substrate and the time prolongs. In vivo, the same antibodies activate endothelium, platelets and complement and inhibit protein C, so the patient develops **venous and arterial thrombosis**, **recurrent fetal loss**, **thrombocytopenia** and **livedo reticularis**. Two laboratory fingerprints settle it: the prolonged aPTT **does not correct** on a **1:1 mix** with normal plasma (an inhibitor, not a factor deficiency) but **does correct** when excess phospholipid is added; and a **false-positive VDRL or RPR** with a negative treponemal test. Antibodies must persist at **12 weeks** — a single positive during an acute illness is not the syndrome.',
    '**DIC looks self-contradictory only until you name it a CONSUMPTION process: the bleeding is the arithmetic consequence of the clotting.** A systemic trigger releases **tissue factor** into the circulation or injures endothelium diffusely, so thrombin is generated **everywhere at once** instead of at one wound. Microvascular **fibrin thrombi** cause ischaemic organ injury and shear passing red cells into **schistocytes**; simultaneously **platelets, fibrinogen and factors** are used up faster than they are made, and secondary **fibrinolysis** degrades what fibrin remains. Hence a single laboratory signature: **platelets low**, **fibrinogen low**, **D-dimer markedly raised**, **PT and aPTT prolonged**, **schistocytes** on the film. The triggers are worth committing: **sepsis** (especially Gram-negative), **obstetric catastrophe** (abruption, retained dead fetus, amniotic fluid embolism), **malignancy** (acute promyelocytic leukaemia, mucinous adenocarcinoma), **massive trauma or burns**, and **severe transfusion reactions**. Ischaemic consequences continue in [[rbp-embolism-infarction-shock]] and [[infarction-shock]].',
  ],

  mechanism: {
    title: 'A failed brake to a consumption coagulopathy',
    steps: [
      { id: 's1', label: 'Antithrombin, protein C with protein S, and tissue factor pathway inhibitor restrain a permanently primed cascade', emphasis: 'normal' },
      { id: 's2', label: 'A mutation or acquired antibody removes one brake — factor Va survives activated protein C in factor V Leiden', emphasis: 'key' },
      { id: 's3', label: 'Thrombin generation rises silently; stasis and oestrogen supply the other two arms of Virchow’s triad', detail: 'Most first events are provoked: the genotype sets the floor, the trigger sets the date.', emphasis: 'normal' },
      { id: 's4', label: 'Venous thrombosis appears young, recurrent, or at an unusual site such as cerebral or splanchnic veins', emphasis: 'key' },
      { id: 's5', label: 'With a systemic trigger, tissue factor enters the circulation and thrombin is generated everywhere at once', emphasis: 'danger' },
      { id: 's6', label: 'Microvascular fibrin shears red cells and consumes platelets and factors — ischaemia and bleeding together', detail: 'The bleeding is not a second disease; it is what running out looks like.', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Sharply demarcated haemorrhagic necrosis of the breast, thigh or buttock on day 3 to 5 of warfarin', mechanism: 'Protein C has a 6 to 8 hour half-life and falls before prothrombin, so warfarin is transiently prothrombotic in the dermal microvasculature', significance: 'key' },
    { sign: 'Superficial thrombophlebitis appearing in one vein, resolving, then appearing in another', mechanism: 'Trousseau sign of malignancy — procoagulants shed by mucin-secreting adenocarcinoma seed shifting sites', significance: 'key' },
    { sign: 'Platelet count falling by more than half on day 7 of heparin, with a new thrombosis and no bleeding', mechanism: 'Immune HIT: antibody against platelet factor 4 and heparin cross-links FcγRIIa and activates platelets rather than destroying them passively', significance: 'key' },
    { sign: 'Livedo reticularis with recurrent second-trimester fetal loss and an unexplained prolonged aPTT', mechanism: 'Antiphospholipid syndrome — placental and dermal microvascular thrombosis with an in-vitro phospholipid artefact', significance: 'key' },
    { sign: 'Continuous oozing from every venepuncture site and drain together with acral cyanosis in a septic patient', mechanism: 'DIC: peripheral microthrombi and simultaneous depletion of platelets and clotting factors', significance: 'key' },
    { sign: 'A thrombus extending despite escalating unfractionated heparin with an aPTT that will not prolong', mechanism: 'Antithrombin deficiency — heparin has no intrinsic anticoagulant activity and cannot work without its cofactor', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Prolonged aPTT that fails to correct on a 1:1 mix with normal plasma but corrects when excess phospholipid is added', meaning: 'Lupus anticoagulant. Failure to correct proves an inhibitor rather than a factor deficiency; correction by phospholipid identifies which inhibitor' },
    { clue: 'Low activated protein C resistance ratio confirmed by factor V Leiden genotyping', meaning: 'The commonest inherited thrombophilia. Interpret against clinical history, since carriage is common and most carriers never thrombose' },
    { clue: 'Platelets 42 x 10^9/L, fibrinogen 0.9 g/L, D-dimer grossly raised, PT and aPTT prolonged, schistocytes present', meaning: 'The complete DIC signature — consumption of both platelets and factors with secondary fibrinolysis and mechanical red cell damage' },
    { clue: 'Schistocytes and thrombocytopenia but a normal PT, aPTT and fibrinogen', meaning: 'Thrombotic thrombocytopenic purpura or haemolytic uraemic syndrome, not DIC. Platelet microthrombi shear red cells without consuming coagulation factors' },
    { clue: 'Factor V low with factor VIII normal or raised', meaning: 'Points to hepatic synthetic failure, because factor VIII is made by endothelium and not by hepatocytes. If factor VIII is low as well, both are being consumed, which means DIC' },
    { clue: 'Positive platelet factor 4 and heparin immunoassay with a high optical density, confirmed by a serotonin release assay', meaning: 'Immune HIT. The immunoassay is sensitive but poorly specific, so a weak positive in a low-probability patient needs the functional assay' },
  ],

  treatment: [
    {
      logic: 'In HIT, stopping heparin is only half the treatment',
      detail: 'Thrombin generation in HIT is already **maximal** and does not stop when the drug does, so withdrawal alone leaves a patient in a profoundly prothrombotic state: thrombosis still occurs in a substantial minority after heparin is simply discontinued. Start a **non-heparin anticoagulant** immediately — **argatroban**, **bivalirudin**, **fondaparinux** or a direct oral anticoagulant. Crucially, do **not** start **warfarin** alone while the platelet count is still falling: it drops **protein C** within hours while thrombin generation is unchanged, and the result is **venous limb gangrene** — the identical physiology to warfarin skin necrosis, in a bigger vessel. Warfarin waits until the platelet count has recovered, and is overlapped.',
    },
    {
      logic: 'In DIC, treat the trigger and replace only what is bleeding',
      detail: 'DIC is always **secondary**, so the definitive treatment is the **obstetric, septic or oncological** cause; nothing else stops the consumption. Blood products are given for **bleeding or an imminent procedure**, never to correct a number in isolation: **platelets** for active bleeding, **fresh frozen plasma** for a markedly prolonged PT, and **cryoprecipitate or fibrinogen concentrate** when fibrinogen falls below about **1.5 g/L**. Reserve **heparin** for the presentations where **thrombosis dominates** — purpura fulminans, acral ischaemia, retained dead fetus. **Antifibrinolytics** are generally avoided, since removing the only mechanism clearing microvascular fibrin converts a bleeding problem into an ischaemic one.',
    },
  ],

  mnemonics: [
    {
      hook: 'Thrombophilia is about brakes, not accelerators',
      expansion: [
        'Antithrombin — the heparin cofactor; deficiency shows as heparin resistance',
        'Protein C and protein S — switch off factors Va and VIIIa; deficiency shows as warfarin skin necrosis',
        'Factor V Leiden — the substrate resists the brake instead of the brake being absent',
        'Prothrombin G20210A — the one true excess of procoagulant, and the exception that proves the pattern',
      ],
    },
    {
      hook: 'DIC in four numbers and a film',
      expansion: [
        'Platelets low — consumed in microthrombi',
        'Fibrinogen low — polymerised into fibrin faster than the liver replaces it',
        'D-dimer high — secondary fibrinolysis is chewing that fibrin back up',
        'PT and aPTT long — the factors have been used up',
        'Schistocytes on the film — red cells sliced on intravascular fibrin strands',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'A prolonged aPTT in antiphospholipid syndrome',
      wrongInstinct: 'A long clotting time means the patient will bleed, so anticoagulation should be withheld',
      rightAnswer: 'Lupus anticoagulant is an in-vitro artefact; the antibody consumes the phospholipid the assay needs. In vivo the patient thromboses and requires anticoagulation',
      why: 'The test tube is short of phospholipid and the patient is not — adding phospholipid corrects the assay and nothing corrects the thrombosis except anticoagulation',
    },
    {
      questionCategory: 'DIC versus thrombotic microangiopathy on the blood film',
      wrongInstinct: 'Schistocytes with a low platelet count means DIC',
      rightAnswer: 'Read the coagulation times. DIC consumes factors, so PT, aPTT and fibrinogen are abnormal; TTP and HUS shear red cells without consuming factors, so those values are normal',
      why: 'DIC is a coagulation-factor problem with a haemolytic consequence; TTP is a platelet-microthrombus problem that leaves the cascade untouched',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Three days after starting warfarin for a deep vein thrombosis, with no heparin cover, a patient develops sharply demarcated haemorrhagic necrosis of the breast. What is the mechanism?',
      options: [
        { id: 'a', text: 'Warfarin overdose has caused bleeding into the skin' },
        { id: 'b', text: 'Protein C has a short half-life and falls before prothrombin, creating a transient prothrombotic state with dermal microvascular thrombosis' },
        { id: 'c', text: 'An immune reaction to warfarin has caused a cutaneous vasculitis' },
        { id: 'd', text: 'Vitamin K deficiency has impaired collagen synthesis in dermal vessels' },
      ],
      answerId: 'b',
      explanation: 'Warfarin depletes the vitamin-K-dependent proteins at rates set by their half-lives. Protein C at roughly 6 to 8 hours and factor VII at about 6 hours fall first, while prothrombin at 60 to 72 hours persists. The brake is therefore lost before what it restrains, and dermal microvessels thrombose. The lesion is infarction, not haemorrhage from over-anticoagulation, and it is prevented by heparin bridging and avoiding loading doses.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A woman with recurrent fetal loss has a prolonged aPTT that does not correct on a 1:1 mix with normal plasma but does correct when excess phospholipid is added. What is the correct interpretation and action?',
      options: [
        { id: 'a', text: 'A factor VIII deficiency; give factor concentrate and avoid anticoagulation' },
        { id: 'b', text: 'A lupus anticoagulant; she is at risk of thrombosis and needs anticoagulation, not correction of the clotting time' },
        { id: 'c', text: 'Heparin contamination of the sample; repeat and take no action' },
        { id: 'd', text: 'Disseminated intravascular coagulation; give fresh frozen plasma' },
      ],
      answerId: 'b',
      explanation: 'Failure to correct on mixing establishes an inhibitor rather than a deficiency, and correction by added phospholipid identifies that inhibitor as phospholipid-directed. This is the central paradox of antiphospholipid syndrome: a prolonged clotting time in vitro with thrombosis in vivo, because the antibody activates endothelium, platelets and complement and impairs protein C. Confirmation requires persistence at 12 weeks.',
      tests: 'investigation',
    },
    {
      id: 'q3',
      stem: 'A septic patient bleeds from cannula sites while developing digital ischaemia. Platelets 38, fibrinogen 0.8 g/L, PT and aPTT prolonged, D-dimer very high, schistocytes present. Why do thrombosis and bleeding occur together?',
      options: [
        { id: 'a', text: 'Two independent processes have coincided by chance in a critically ill patient' },
        { id: 'b', text: 'Widespread thrombin generation forms microvascular fibrin while consuming platelets and clotting factors faster than they can be replaced' },
        { id: 'c', text: 'Sepsis has caused isolated marrow failure with secondary bleeding' },
        { id: 'd', text: 'Primary hyperfibrinolysis has dissolved clot without any thrombosis occurring' },
      ],
      answerId: 'b',
      explanation: 'DIC is a consumption process, so the bleeding is the arithmetic consequence of the clotting. Circulating tissue factor and diffuse endothelial injury generate thrombin systemically; the fibrin produced occludes microvessels and shears red cells into schistocytes, while platelets, fibrinogen and factors are exhausted and secondary fibrinolysis raises D-dimer. The falling fibrinogen with prolonged clotting times is what separates this from TTP or HUS, where those values stay normal.',
      tests: 'disease',
    },
  ],
};

export default rbpHypercoagulabilityDic;
