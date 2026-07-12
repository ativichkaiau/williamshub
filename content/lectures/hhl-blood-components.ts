import type { Lecture } from '../../lib/types';

export const hhlBloodComponents: Lecture = {
  id: 'hhl-blood-components',
  title: 'Blood Components & Their Indications',
  system: 'heme',
  source: 'L19 — Blood Donation & Blood Products',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L19 Blood Products' },
    { kind: 'disease', label: 'Anemia / coagulopathy' },
    { kind: 'treatment', label: 'Component therapy' },
  ],

  highYield: [
    '**Component therapy**: one whole-blood donation is separated into **packed red cells, platelets, plasma (FFP) and cryoprecipitate** so each patient gets only what they need. See [[hhl-component-storage-processing]].',
    '**Packed red cells** → symptomatic anemia; **~1 unit raises Hb by ~1 g/dL** (≈3% hematocrit). Transfuse for symptoms/threshold, not a number alone.',
    '**Platelets** → thrombocytopenia with bleeding, or prophylaxis at very low counts / before invasive procedures.',
    '**Fresh frozen plasma (FFP)** → **multiple** clotting-factor deficiency: **DIC, liver disease, massive transfusion, warfarin reversal** when a specific concentrate is unavailable.',
    '**Cryoprecipitate** → concentrated **fibrinogen, factor VIII, factor XIII, vWF** — for **hypofibrinogenemia** (e.g. DIC) and specific factor replacement.',
  ],

  mechanism: {
    title: 'One donation → four targeted products',
    steps: [
      { id: 's1', label: 'Centrifuge whole blood → red cells, platelet layer, plasma' },
      { id: 's2', label: 'Red cells replace oxygen-carrying capacity (anemia)', emphasis: 'key' },
      { id: 's3', label: 'Platelets replace number/function (thrombocytopenic bleeding)' },
      { id: 's4', label: 'FFP replaces ALL soluble clotting factors (multi-factor deficiency)', emphasis: 'key' },
      { id: 's5', label: 'Cold-precipitated plasma fraction = cryoprecipitate (fibrinogen/VIII/XIII/vWF)' },
    ],
  },

  examFindings: [
    { sign: 'Symptomatic anemia (dyspnea, angina) at a low Hb', mechanism: 'Reduced oxygen delivery → packed red cells', significance: 'key' },
    { sign: 'Bleeding with a very low platelet count', mechanism: 'Insufficient platelets for hemostasis → platelet transfusion', significance: 'key' },
    { sign: 'Prolonged PT/aPTT with bleeding in liver disease or DIC', mechanism: 'Global clotting-factor deficiency → FFP', significance: 'supportive' },
    { sign: 'Low fibrinogen in DIC', mechanism: 'Consumed fibrinogen → cryoprecipitate', significance: 'key' },
  ],

  investigations: [
    { clue: 'Hb rises ~1 g/dL after one unit', meaning: 'Expected packed red-cell response — reassess if it does not' },
    { clue: 'Bleeding patient on warfarin needing urgent reversal', meaning: 'Prothrombin complex concentrate preferred; FFP if unavailable (plus vitamin K)' },
    { clue: 'Isolated low fibrinogen', meaning: 'Cryoprecipitate rather than large-volume FFP' },
    { clue: 'Platelet count fails to rise after transfusion', meaning: 'Consider consumption, splenomegaly or alloimmune refractoriness' },
  ],

  treatment: [
    { logic: 'Give the component, not whole blood', detail: 'Targets the deficit, spares volume, and lets one donation help several patients.' },
    { logic: 'Transfuse to symptoms/thresholds, not reflexively to a target number', detail: 'Restrictive triggers are safe in most stable patients.' },
    { logic: 'Cryoprecipitate for fibrinogen replacement', detail: 'Concentrated fibrinogen/factor VIII/XIII/vWF in a small volume.' },
  ],

  mnemonics: [
    { hook: 'One unit of red cells ≈ 1 g/dL Hb (≈3% Hct)', expansion: ['Rule of thumb in an average adult', 'Reassess if the rise is short-lived'] },
    { hook: 'Cryo = fibrinogen factory (I, VIII, XIII, vWF)', expansion: ['Rich in fibrinogen', 'Also factor VIII, XIII and von Willebrand factor', 'Best for low fibrinogen/DIC'] },
  ],

  traps: [
    {
      questionCategory: 'FFP vs cryoprecipitate for low fibrinogen',
      wrongInstinct: 'Give large-volume FFP to correct an isolated low fibrinogen',
      rightAnswer: 'Cryoprecipitate delivers concentrated fibrinogen in far less volume',
      why: 'FFP contains fibrinogen but only in dilute form; cryoprecipitate avoids volume overload.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Transfusing one unit of packed red cells to a stable adult is expected to raise the hemoglobin by approximately:',
      options: [
        { id: 'a', text: '0.1 g/dL' },
        { id: 'b', text: '1 g/dL' },
        { id: 'c', text: '4 g/dL' },
        { id: 'd', text: '8 g/dL' },
      ],
      answerId: 'b',
      explanation: 'One unit of packed red cells raises hemoglobin by roughly 1 g/dL (about 3% hematocrit) in an average adult.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'A patient with DIC has a fibrinogen of 0.6 g/L and is oozing. Which product replaces fibrinogen with the least volume?',
      options: [
        { id: 'a', text: 'Packed red cells' },
        { id: 'b', text: 'Platelets' },
        { id: 'c', text: 'Cryoprecipitate' },
        { id: 'd', text: 'Normal saline' },
      ],
      answerId: 'c',
      explanation: 'Cryoprecipitate is concentrated fibrinogen (plus factors VIII, XIII and vWF), correcting hypofibrinogenemia without the volume load of FFP.',
      tests: 'treatment',
    },
  ],
};

export default hhlBloodComponents;
