import type { Lecture } from '../../lib/types';

export const ghpAnticoagulationBleedingDisorders: Lecture = {
  id: 'ghp-anticoagulation-bleeding-disorders',
  title: 'Natural Anticoagulants, Fibrinolysis & Bleeding Disorders',
  system: 'heme',
  source: 'Ch 36 — Hemostasis & Blood Coagulation',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Haematology' },
    { kind: 'lecture', label: 'Ch 36 Haemostasis & Coagulation' },
    { kind: 'mechanism', label: 'Endothelial thromboresistance' },
    { kind: 'disease', label: 'Bleeding disorders & DIC' },
  ],

  highYield: [
    '**The default state of blood is fluid, and intact endothelium actively enforces that.** Its surface is smooth and negatively charged, it displays **heparan sulphate**, **thrombomodulin** and **tissue factor pathway inhibitor**, it releases **prostacyclin and nitric oxide** to keep platelets quiet, and its ectonucleotidase degrades released ADP. Clotting is therefore not switched on by injury so much as **released** by the loss of these brakes over a small patch of vessel.',
    '**Three natural anticoagulants restrain thrombin, and each maps onto a named disease.** **Antithrombin** is a serpin that neutralises thrombin and factor Xa and is accelerated roughly a thousandfold by heparin or endothelial heparan — its deficiency causes thrombophilia and apparent **heparin resistance**. **Protein C**, activated by thrombin once thrombin binds thrombomodulin, uses **protein S** as cofactor to destroy factors **Va and VIIIa** — and **factor V Leiden** is simply a factor V that resists this cleavage. **Tissue factor pathway inhibitor** switches off the TF–VIIa complex within seconds, which is exactly why the amplification loop in [[ghp-coagulation-cascade]] is indispensable.',
    '**Fibrinolysis is deliberately confined to the clot, because fibrin is its own cofactor.** Endothelial **tissue plasminogen activator** is a feeble enzyme in free plasma but becomes efficient once it and plasminogen are both bound to fibrin, so **plasmin** is generated on the clot rather than throughout the circulation. Escaped plasmin is mopped up by **alpha-2-antiplasmin**, and tPA itself by **PAI-1**. Degradation of cross-linked fibrin releases **D-dimer**, which is why a D-dimer proves that factor XIII acted and that lysis has followed — the pharmacology sits in [[hhl-thrombolytics-antifibrinolytics]].',
    '**Vitamin K is a recycled cofactor, and that recycling step is the drug target.** It gamma-carboxylates glutamate residues on factors **II, VII, IX and X** and on **proteins C, S and Z**, letting them bind calcium and dock onto phospholipid. **Epoxide reductase** regenerates the reduced form and is what warfarin inhibits. Deficiency arises from fat malabsorption or obstructive jaundice, and in the **neonate** from poor placental transfer, a sterile gut and low breast milk content — hence vitamin K at birth. Because **protein C** has a shorter half-life than prothrombin, starting warfarin is transiently prothrombotic and can cause skin necrosis; the practical consequences are in [[anticoagulants]].',
    '**Three bleeding disorders are separated by pattern plus three numbers.** **Haemophilia A or B** is X-linked, affects males, bleeds deep into joints and muscle, and gives a **long aPTT with normal PT, normal platelets and normal bleeding time**. **Von Willebrand disease** is autosomal dominant, affects both sexes, bleeds mucocutaneously, prolongs the **bleeding time or PFA**, and may also lengthen the aPTT because vWF is the carrier protein for factor VIII. **Thrombocytopenia** bleeds mucocutaneously with a **low count and normal PT and aPTT**.',
    '**DIC is not a bleeding disorder — it is uncontrolled clotting whose bill arrives as bleeding.** Systemic tissue factor exposure from sepsis, obstetric catastrophe, major trauma, malignancy or envenomation drives microvascular thrombosis until platelets and factors are consumed and secondary fibrinolysis runs wild. The signature is **thrombocytopenia, prolonged PT and aPTT, low fibrinogen, a very high D-dimer and schistocytes** on the film. Liver disease can mimic every one of those except that **factor VIII is normal or high** in liver failure and low in DIC, since factor VIII is made by endothelium — see [[hhl-dic-thrombosis]].',
  ],

  mechanism: {
    title: 'Restraint, dissolution, and what happens when both are overwhelmed',
    steps: [
      { id: 's1', label: 'Intact endothelium presents heparan, thrombomodulin and TFPI and releases prostacyclin and nitric oxide', emphasis: 'key' },
      { id: 's2', label: 'Antithrombin, accelerated by heparan, neutralises circulating thrombin and factor Xa', emphasis: 'key' },
      { id: 's3', label: 'Thrombin bound to thrombomodulin changes role and activates protein C, which with protein S destroys Va and VIIIa', emphasis: 'key' },
      { id: 's4', label: 'Tissue plasminogen activator binds fibrin and converts plasminogen to plasmin only on the clot surface' },
      { id: 's5', label: 'Plasmin digests cross-linked fibrin, releasing D-dimer, while alpha-2-antiplasmin confines the reaction' },
      { id: 's6', label: 'Systemic tissue factor exposure overwhelms all of these, consuming platelets and factors and causing bleeding and microthrombosis together', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Recurrent haemarthrosis in a boy with a normal platelet count', mechanism: 'Deficient factor VIII or IX, so the platelet plug is never stabilised in fibrin', significance: 'key' },
    { sign: 'Lifelong menorrhagia and epistaxis in a woman with normal counts', mechanism: 'von Willebrand disease impairing adhesion in high-shear mucosal beds', significance: 'key' },
    { sign: 'Simultaneous bleeding from three unrelated sites in a septic patient', mechanism: 'Consumption of platelets and clotting factors with secondary hyperfibrinolysis', significance: 'key' },
    { sign: 'Sharply demarcated skin necrosis over fatty areas days after starting warfarin', mechanism: 'Protein C falls faster than prothrombin, giving a transient prothrombotic window', significance: 'key' },
    { sign: 'Unprovoked venous thrombosis before the age of 45 with a family history', mechanism: 'Inherited deficiency of antithrombin, protein C or protein S, or factor V Leiden', significance: 'supportive' },
    { sign: 'Bruising and gastrointestinal bleeding in a breastfed neonate who missed prophylaxis', mechanism: 'Vitamin K deficiency from poor placental transfer, sterile gut and low milk content', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Long aPTT correcting on mixing, with normal PT, platelets and bleeding time', meaning: 'Haemophilia A or B — assay factor VIII and IX to separate them' },
    { clue: 'Low ristocetin cofactor activity with a low factor VIII level', meaning: 'von Willebrand disease, since vWF is the carrier protein that protects factor VIII from clearance' },
    { clue: 'Low platelets, prolonged PT and aPTT, low fibrinogen and a very high D-dimer', meaning: 'Disseminated intravascular coagulation with consumption and secondary lysis' },
    { clue: 'Prolonged PT and aPTT with a normal or raised factor VIII', meaning: 'Liver failure rather than DIC — factor VIII is endothelial and spared by hepatocyte loss' },
    { clue: 'Prolonged PT that corrects after vitamin K', meaning: 'Deficiency or warfarin effect; failure to correct indicates hepatocellular synthetic failure' },
    { clue: 'aPTT fails to prolong despite therapeutic heparin doses', meaning: 'Antithrombin deficiency — heparin has no cofactor to accelerate' },
  ],

  treatment: [
    {
      logic: 'Replace the specific missing molecule, not the generic idea of clotting',
      detail: 'Mild type 1 von Willebrand disease responds to **desmopressin**, which releases stored vWF from Weibel-Palade bodies, so no product is needed. Haemophilia needs the **specific factor concentrate**, and giving plasma instead simply under-doses the patient with a volume load. Thrombocytopenia needs **platelets**, but only when bleeding or when the count is critically low, since transfused platelets are consumed within days.',
    },
    {
      logic: 'In DIC the coagulopathy is a symptom — treat the trigger',
      detail: 'No product corrects DIC while the driver is running, so the priority is **sepsis source control, delivery of the placenta, or treatment of the underlying malignancy**. Support with platelets, plasma and cryoprecipitate is guided by **active bleeding rather than by numbers alone**, and blanket antifibrinolytic therapy is avoided because the fibrinolysis is often the only thing keeping the microcirculation open.',
    },
  ],

  mnemonics: [
    { hook: '1972 pays the vitamin K bill', expansion: ['Factors 10, 9, 7 and 2 are carboxylated', 'So are proteins C and S', 'Warfarin blocks epoxide reductase, so all six fall'] },
    { hook: 'Protein C falls first', expansion: ['Shortest half-life of the vitamin K dependent proteins', 'Warfarin therefore starts prothrombotic', 'Explains skin necrosis and the need for heparin cover'] },
  ],

  traps: [
    {
      questionCategory: 'A prolonged aPTT with a low factor VIII level',
      wrongInstinct: 'A low factor VIII means haemophilia A',
      rightAnswer: 'von Willebrand disease lowers factor VIII too, because vWF is its carrier protein',
      why: 'The bleeding is mucocutaneous with a prolonged PFA, and it affects women — none of which fits X-linked haemophilia',
    },
    {
      questionCategory: 'Separating DIC from the coagulopathy of liver failure',
      wrongInstinct: 'Low platelets with a long PT, long aPTT and low fibrinogen must be DIC',
      rightAnswer: 'Measure factor VIII — normal or raised in liver disease, low in DIC',
      why: 'Factor VIII is made by endothelium, not hepatocytes, so only consumption can lower it',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Why does tissue plasminogen activator dissolve a clot without causing systemic fibrinogenolysis at physiological concentrations?',
      options: [
        { id: 'a', text: 'It is cleared from plasma within seconds by the liver' },
        { id: 'b', text: 'Fibrin acts as a cofactor, so tPA and plasminogen are only efficiently juxtaposed on the clot surface' },
        { id: 'c', text: 'Plasminogen is only synthesised inside the clot' },
        { id: 'd', text: 'Plasmin cannot cleave fibrinogen under any circumstances' },
      ],
      answerId: 'b',
      explanation: 'Free tPA is a poor activator of plasminogen. Both molecules bind lysine residues on fibrin, and that shared surface raises the local reaction rate enormously, confining plasmin generation to the clot. Any plasmin that escapes is neutralised by alpha-2-antiplasmin. Pharmacological thrombolysis works by overwhelming this design, which is why it produces systemic bleeding.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient develops sharply demarcated skin necrosis over the thighs three days after starting warfarin without heparin cover. What is the mechanism?',
      options: [
        { id: 'a', text: 'Warfarin directly damages dermal capillary endothelium' },
        { id: 'b', text: 'An immune reaction to warfarin causing a vasculitis' },
        { id: 'c', text: 'Protein C has a shorter half-life than prothrombin, so anticoagulant activity is lost before procoagulant activity' },
        { id: 'd', text: 'Excessive anticoagulation causing haemorrhagic infarction of subcutaneous fat' },
      ],
      answerId: 'c',
      explanation: 'Warfarin lowers every vitamin K dependent protein, but not at the same speed. Protein C, an anticoagulant, disappears within hours while prothrombin persists for days, so the first two to three days of therapy are transiently prothrombotic and can thrombose dermal microvessels. This is why warfarin is overlapped with heparin, and why the risk is highest in those with pre-existing protein C deficiency.',
      tests: 'treatment',
    },
    {
      id: 'q3',
      stem: 'A patient with hypotension and jaundice has platelets of 40, a prolonged PT and aPTT, fibrinogen of 0.8 g/L and a markedly raised D-dimer. Which single result would best distinguish DIC from decompensated liver disease?',
      options: [
        { id: 'a', text: 'Factor VIII level' },
        { id: 'b', text: 'Serum albumin' },
        { id: 'c', text: 'Thrombin time' },
        { id: 'd', text: 'Reticulocyte count' },
      ],
      answerId: 'a',
      explanation: 'Liver failure and DIC both lower platelets, prolong both clotting times, drop fibrinogen and raise D-dimer, so the routine panel cannot separate them. Factor VIII is the exception: it is synthesised by endothelial cells rather than hepatocytes, so it is preserved or even raised as an acute phase reactant in liver disease, while consumption in DIC drives it down.',
      tests: 'investigation',
    },
  ],
};

export default ghpAnticoagulationBleedingDisorders;
