import type { Lecture } from '../../lib/types';

export const ghpCoagulationCascade: Lecture = {
  id: 'ghp-coagulation-cascade',
  title: 'The Coagulation Cascade, PT & aPTT',
  system: 'heme',
  source: 'Ch 36 — Hemostasis & Blood Coagulation',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Haematology' },
    { kind: 'lecture', label: 'Ch 36 Haemostasis & Coagulation' },
    { kind: 'mechanism', label: 'Tissue factor initiation' },
    { kind: 'investigation', label: 'PT and aPTT' },
  ],

  highYield: [
    '**In vivo, clotting starts with tissue factor — the contact pathway is a laboratory convenience, not the physiological trigger.** Injury exposes **tissue factor** on subendothelial fibroblasts and smooth muscle; it binds **factor VIIa** and activates factor X directly, plus factor IX. The decisive clinical proof is **factor XII deficiency**, which grossly prolongs the aPTT yet causes no bleeding at all, while haemophilia bleeds catastrophically with a normal PT.',
    '**The extrinsic burst is deliberately brief, which is why the intrinsic loop is indispensable.** Tissue factor pathway inhibitor shuts the **TF–VIIa** complex down within seconds, so the small amount of thrombin made initially would never seal a wound alone. That first trace of thrombin instead feeds back to activate **factors XI, VIII and V**, assembling the intrinsic **tenase** complex (IXa–VIIIa) that generates the real thrombin burst. Lose factor VIII or IX and the initiation still happens but the amplification never arrives.',
    '**Thrombin is the hinge of the whole system and does at least five jobs.** It cleaves **fibrinogen** to fibrin monomer, activates **V, VIII and XI** as positive feedback, activates **XIII** to cross-link the mesh, activates platelets through **PAR-1**, and — bound to endothelial thrombomodulin — activates **protein C** as its own brake, the restraint system covered in [[ghp-anticoagulation-bleeding-disorders]]. Reading any coagulation question as a question about thrombin generation usually finds the answer.',
    '**Two complexes do the heavy lifting, and both need the same four ingredients.** **Tenase** (IXa + VIIIa) makes Xa; **prothrombinase** (Xa + Va) makes thrombin. Each requires an **enzyme, a cofactor, calcium, and anionic phospholipid** supplied by activated platelets — which is why primary and secondary haemostasis are physically the same event, as set out in [[ghp-primary-haemostasis-platelets]]. Calcium is factor IV, and removing it with **citrate or EDTA** is how blood is anticoagulated in a tube.',
    '**Fibrin is not a clot until factor XIII has cross-linked it.** Thrombin cleaves fibrinopeptides from fibrinogen, the monomers polymerise spontaneously by non-covalent bonds, and only **factor XIIIa** forms the covalent glutamine-lysine bridges that make the mesh mechanically strong and resistant to lysis. Factor XIII deficiency therefore gives a patient with entirely **normal PT, aPTT and thrombin time** who rebleeds hours after injury and heals badly.',
    '**PT and aPTT are two windows onto the same cascade, and the pattern localises the lesion.** **PT** adds tissue factor and calcium, so it reads the extrinsic and common limbs — **VII, X, V, II, fibrinogen** — and is the first to move in warfarin and liver disease because factor VII has the shortest half-life at about **6 hours**. **aPTT** adds a contact activator and phospholipid, reading **XII, XI, IX, VIII** plus the common limb, so it is the heparin and haemophilia test. The interpretive grid is drilled in [[fcp1-bleeding-coagulation-tests]].',
  ],

  mechanism: {
    title: 'From tissue factor to cross-linked fibrin',
    steps: [
      { id: 's1', label: 'Vessel injury exposes tissue factor on subendothelial fibroblasts and smooth muscle', emphasis: 'key' },
      { id: 's2', label: 'Tissue factor binds factor VIIa and activates factor X directly, plus factor IX', emphasis: 'key' },
      { id: 's3', label: 'Xa with Va on platelet phospholipid forms prothrombinase and makes a first trace of thrombin' },
      { id: 's4', label: 'Thrombin feeds back on factors XI, VIII and V, building intrinsic tenase for the real burst', emphasis: 'key' },
      { id: 's5', label: 'The thrombin burst cleaves fibrinogen to monomer, which polymerises non-covalently', emphasis: 'key' },
      { id: 's6', label: 'Factor XIIIa cross-links the polymer covalently into a stable, lysis-resistant mesh' },
    ],
  },

  examFindings: [
    { sign: 'Haemarthrosis of the knee or ankle with warmth and fixed flexion', mechanism: 'Bleeding into a closed space where a platelet plug alone cannot hold', significance: 'key' },
    { sign: 'Delayed rebleeding hours after apparently successful haemostasis', mechanism: 'Platelet plug forms normally but is never stabilised by fibrin', significance: 'key' },
    { sign: 'Deep muscle haematoma progressing to compartment syndrome', mechanism: 'Unchecked expansion of bleeding in fascial planes without a fibrin seal', significance: 'key' },
    { sign: 'Extensive bruising with a normal platelet count and normal bleeding time', mechanism: 'Isolated failure of secondary haemostasis', significance: 'supportive' },
    { sign: 'Oozing from every venepuncture site in a septic patient', mechanism: 'Consumption of factors and platelets by systemic tissue factor exposure', significance: 'key' },
    { sign: 'Umbilical stump bleeding with poor wound healing in a neonate', mechanism: 'Factor XIII deficiency, where fibrin forms but is never cross-linked', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Prolonged PT with a normal aPTT', meaning: 'Factor VII — earliest warfarin effect, early liver disease or early vitamin K deficiency' },
    { clue: 'Prolonged aPTT with a normal PT', meaning: 'Factor VIII, IX or XI, heparin, or a lupus anticoagulant — and factor XII, which never bleeds' },
    { clue: 'Both PT and aPTT prolonged', meaning: 'Common pathway defect, liver failure, DIC, vitamin K deficiency or a high heparin level' },
    { clue: 'Prolonged aPTT that corrects on a 1:1 mix with normal plasma', meaning: 'Factor deficiency; failure to correct means a circulating inhibitor' },
    { clue: 'Prolonged thrombin time with a normal reptilase time', meaning: 'Heparin effect, since reptilase is not inhibited by antithrombin' },
    { clue: 'Normal PT, aPTT and thrombin time in a patient who clearly bleeds', meaning: 'Factor XIII deficiency, or a platelet or vessel wall disorder that these tests cannot see' },
  ],

  treatment: [
    {
      logic: 'Read PT and aPTT as a pair, then localise before treating',
      detail: 'One prolonged test points to a limb, both point to the shared common pathway or to a global problem such as liver failure or DIC. Before assuming deficiency, run a **1:1 mixing study**: correction means a **missing factor**, while failure to correct means an **inhibitor** such as a lupus anticoagulant or an acquired factor VIII antibody — and those two demand opposite treatments.',
    },
    {
      logic: 'Replace in a form that acts on the timescale you need',
      detail: 'Vitamin K restores carboxylation but needs **hours** because new factor must be synthesised, so it is right for a stable patient and useless in a haemorrhage. Active bleeding needs the proteins themselves — **prothrombin complex concentrate** or plasma for immediate correction, specific **factor concentrate** for a known deficiency, and **cryoprecipitate** when fibrinogen is the limiting molecule.',
    },
  ],

  mnemonics: [
    { hook: 'PT is outside and short, aPTT is inside and long', expansion: ['PT adds tissue factor → extrinsic + common → VII, X, V, II, fibrinogen', 'aPTT adds contact activator → intrinsic + common → XII, XI, IX, VIII plus common', 'The list length matches the test name length'] },
    { hook: 'Thrombin does five jobs', expansion: ['Cleaves fibrinogen to fibrin', 'Activates V, VIII and XI as feedback', 'Activates XIII to cross-link', 'Activates platelets via PAR-1', 'Activates protein C on thrombomodulin as its own brake'] },
  ],

  traps: [
    {
      questionCategory: 'What a prolonged aPTT predicts',
      wrongInstinct: 'A long aPTT means the patient is at risk of bleeding',
      rightAnswer: 'Factor XII deficiency and lupus anticoagulant both prolong the aPTT without causing bleeding',
      why: 'The lupus anticoagulant actually predisposes to thrombosis — only the bleeding history and a mixing study separate them',
    },
    {
      questionCategory: 'Which pathway initiates clotting in a living vessel',
      wrongInstinct: 'Contact activation of factor XII on the exposed subendothelium',
      rightAnswer: 'The tissue factor and factor VIIa complex',
      why: 'Factor XII deficiency does not bleed, while haemophilia does — so XII cannot be the trigger and VIII and IX are amplification',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A man with severe factor XII deficiency has an aPTT of 90 seconds but has never bled, even after surgery. What does this demonstrate about coagulation in vivo?',
      options: [
        { id: 'a', text: 'Factor XII is compensated for by factor XIII' },
        { id: 'b', text: 'The physiological trigger is tissue factor with factor VIIa, not contact activation' },
        { id: 'c', text: 'The aPTT is not sensitive to factor XII levels' },
        { id: 'd', text: 'Factor XII deficiency prolongs the PT rather than the aPTT' },
      ],
      answerId: 'b',
      explanation: 'Contact activation is what an aPTT tube measures, but it is not how bleeding is stopped in a vessel. Clotting begins when tissue factor meets factor VIIa. The rest of the classical intrinsic pathway matters because thrombin recruits factors XI, VIII and V to amplify the response, which is why haemophilia A and B bleed severely while factor XII deficiency does not bleed at all.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient with a clear history of delayed rebleeding and poor wound healing has a normal platelet count, bleeding time, PT, aPTT and thrombin time. Which deficiency fits?',
      options: [
        { id: 'a', text: 'Factor VIII' },
        { id: 'b', text: 'Factor VII' },
        { id: 'c', text: 'Factor XIII' },
        { id: 'd', text: 'Fibrinogen' },
      ],
      answerId: 'c',
      explanation: 'PT, aPTT and thrombin time all stop measuring at the moment the first fibrin polymer forms, and that polymerisation is non-covalent and normal here. Factor XIII supplies the covalent cross-links that give the clot mechanical strength and resistance to lysis, so its deficiency is invisible to routine tests and is confirmed by a urea clot solubility assay.',
      tests: 'investigation',
    },
    {
      id: 'q3',
      stem: 'Why does the prothrombin time become abnormal before the aPTT in early warfarin therapy?',
      options: [
        { id: 'a', text: 'Warfarin only inhibits carboxylation of factor VII' },
        { id: 'b', text: 'Factor VII has the shortest half-life of the vitamin K dependent factors and is read only by the PT' },
        { id: 'c', text: 'The PT is intrinsically more sensitive to every clotting factor' },
        { id: 'd', text: 'Warfarin directly inhibits tissue factor' },
      ],
      answerId: 'b',
      explanation: 'Warfarin blocks vitamin K epoxide reductase, so factors II, VII, IX and X decline as their existing molecules are cleared. Factor VII disappears first with a half-life of roughly six hours, and it sits in the extrinsic limb, which only the PT interrogates. The same short half-life is why the INR can look therapeutic before the patient is genuinely anticoagulated, since prothrombin takes days to fall.',
      tests: 'investigation',
    },
  ],
};

export default ghpCoagulationCascade;
