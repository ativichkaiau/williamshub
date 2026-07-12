import type { Lecture } from '../../lib/types';

export const hhlPrimaryHemostasisDisorders: Lecture = {
  id: 'hhl-primary-hemostasis-disorders',
  title: 'Primary Hemostatic Defects',
  system: 'heme',
  source: 'L14 — Platelet & Hemostatic Disorders',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L14 Hemostatic Disorders' },
    { kind: 'disease', label: 'ITP · vWD · platelet defects' },
    { kind: 'mechanism', label: 'Platelet-plug failure' },
    { kind: 'investigation', label: 'Platelet count · PFA · ristocetin' },
  ],

  highYield: [
    'Primary-hemostasis defects give a **mucocutaneous, immediate** pattern: **petechiae, purpura, epistaxis, gum bleeding, menorrhagia** — contrast the deep hemarthrosis of coagulation defects ([[hhl-coagulation-disorders]]).',
    '**Thrombocytopenia** is either **decreased production** (marrow failure/infiltration, B12/folate) or **increased destruction/sequestration** (ITP, DIC, hypersplenism).',
    '**ITP** = **isolated thrombocytopenia, a diagnosis of exclusion** (anti-GPIIb/IIIa antibodies → splenic clearance); treat only if bleeding/very low with **corticosteroids or IVIG**.',
    '**von Willebrand disease** is the **commonest inherited bleeding disorder**: **prolonged bleeding time/PFA, normal platelet count, ↑ aPTT if factor VIII is low, ↓ ristocetin cofactor activity**; treat with **desmopressin (type 1)** or **vWF concentrate**.',
  ],

  mechanism: {
    title: 'Platelet-plug failure → mucocutaneous bleeding',
    steps: [
      { id: 's1', label: 'Vessel injury → vWF binds exposed collagen', emphasis: 'key' },
      { id: 's2', label: 'Platelets adhere (GPIb) and aggregate (GP IIb/IIIa)' },
      { id: 's3', label: 'Low platelet number (ITP) OR function (vWD, uraemia) → weak plug', emphasis: 'key' },
      { id: 's4', label: 'Failed plug → petechiae, mucosal bleeding, menorrhagia' },
    ],
  },

  examFindings: [
    { sign: 'Petechiae, wet purpura and epistaxis', mechanism: 'Failure of the platelet plug (primary hemostasis)', significance: 'key' },
    { sign: 'Isolated low platelets with an otherwise normal smear and counts', mechanism: 'ITP — immune platelet destruction, a diagnosis of exclusion', significance: 'key' },
    { sign: 'Prolonged bleeding time/PFA with a normal platelet count', mechanism: 'Qualitative platelet defect or von Willebrand disease', significance: 'key' },
    { sign: 'Menorrhagia and easy bruising with a family history', mechanism: 'von Willebrand disease (autosomal, often mild type 1)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Isolated thrombocytopenia, normal WBC and Hb', meaning: 'ITP — after excluding pseudothrombocytopenia, drugs, and marrow disease' },
    { clue: 'Normal platelet count but prolonged PFA/bleeding time', meaning: 'Platelet function defect or von Willebrand disease' },
    { clue: 'Reduced ristocetin cofactor activity', meaning: 'vWF is quantitatively/qualitatively deficient (vWD)' },
    { clue: '↑ aPTT with normal PT in a mucosal bleeder', meaning: 'Low factor VIII — severe vWD or haemophilia ([[hhl-coagulation-disorders]])' },
  ],

  treatment: [
    { logic: 'Treat ITP only if bleeding or platelets very low', detail: 'Corticosteroids first-line; IVIG for a rapid rise or before a procedure; TPO agonists/rituximab/splenectomy if chronic.' },
    { logic: 'von Willebrand disease: desmopressin for type 1', detail: 'DDAVP releases stored vWF from endothelium; use vWF-containing concentrate for severe/type 3. Tranexamic acid is a useful mucosal adjunct.' },
    { logic: 'Remove aggravators of platelet function', detail: 'Stop antiplatelet drugs; correct uraemic platelet dysfunction with dialysis or DDAVP.' },
  ],

  mnemonics: [
    { hook: 'Platelets bleed at the surface', expansion: ['Primary defects → petechiae, purpura, mucosa, immediate bleeding', 'Coagulation defects → deep hemarthrosis, delayed rebleeding', 'The bleeding pattern points to the workup'] },
    { hook: 'DDAVP drives out vWF', expansion: ['Desmopressin releases vWF from Weibel-Palade bodies', 'Works in mild type 1 vWD (and mild haemophilia A)', 'Type 3 has none to release → needs concentrate'] },
  ],

  traps: [
    {
      questionCategory: 'Bleeding pattern localisation',
      wrongInstinct: 'Treat all bleeding disorders the same way',
      rightAnswer: 'Mucocutaneous/petechial bleeding = primary (platelet/vWF); deep hemarthrosis = coagulation factor',
      why: 'The pattern directs the first-line tests (platelet count/PFA/ristocetin vs PT/aPTT/factor assays).',
    },
    {
      questionCategory: 'von Willebrand disease labs',
      wrongInstinct: 'A normal platelet count and PT rule out an inherited bleeding disorder',
      rightAnswer: 'vWD has a normal count and PT but a prolonged PFA/bleeding time and often ↑ aPTT',
      why: 'You must order ristocetin cofactor and vWF antigen/activity assays to catch it.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A young woman has menorrhagia and easy bruising. Platelet count and PT are normal, aPTT is mildly prolonged, and ristocetin cofactor activity is reduced. Most likely diagnosis?',
      options: [
        { id: 'a', text: 'Immune thrombocytopenia (ITP)' },
        { id: 'b', text: 'Von Willebrand disease' },
        { id: 'c', text: 'Haemophilia B' },
        { id: 'd', text: 'Vitamin K deficiency' },
      ],
      answerId: 'b',
      explanation: 'Mucocutaneous bleeding with a normal platelet count, low ristocetin cofactor activity, and a mildly raised aPTT (low factor VIII) is classic von Willebrand disease.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'A well child develops petechiae and isolated thrombocytopenia after a viral illness, with a normal blood film and other counts. What is the first-line treatment if intervention is needed?',
      options: [
        { id: 'a', text: 'Corticosteroids' },
        { id: 'b', text: 'Platelet transfusion' },
        { id: 'c', text: 'Factor VIII concentrate' },
        { id: 'd', text: 'Vitamin K' },
      ],
      answerId: 'a',
      explanation: 'This is ITP; when treatment is warranted, corticosteroids (or IVIG for rapid response) are first-line. Platelet transfusion is reserved for life-threatening bleeding as transfused platelets are also destroyed.',
      tests: 'treatment',
    },
  ],
};

export default hhlPrimaryHemostasisDisorders;
