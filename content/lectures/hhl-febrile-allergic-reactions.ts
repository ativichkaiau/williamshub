import type { Lecture } from '../../lib/types';

export const hhlFebrileAllergicReactions: Lecture = {
  id: 'hhl-febrile-allergic-reactions',
  title: 'Febrile & Allergic Transfusion Reactions',
  system: 'heme',
  source: 'L20 — Blood Transfusion Reactions',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L20 Transfusion Reactions' },
    { kind: 'disease', label: 'Febrile / allergic reactions' },
    { kind: 'mechanism', label: 'Cytokines / anti-IgA' },
    { kind: 'treatment', label: 'Leukoreduction · antihistamine' },
  ],

  highYield: [
    '**Febrile non-hemolytic transfusion reaction (FNHTR)** = **fever/chills** from stored-product **cytokines** or recipient **anti-leukocyte (HLA) antibodies** — **common and benign but a diagnosis of exclusion**. Prevent with **leukoreduction**. See [[hhl-component-storage-processing]].',
    '**Allergic/urticarial** reactions = recipient IgE against **donor plasma proteins** → **itching, hives** without fever; treat with an **antihistamine** and often continue if mild.',
    '**Anaphylaxis** = severe and rapid (hypotension, bronchospasm, angioedema); the classic cause is an **IgA-deficient recipient with anti-IgA** reacting to donor IgA.',
    'Prevent recurrent anaphylaxis/severe allergy with **washed** (plasma-depleted) or **IgA-deficient** products; treat acute anaphylaxis with **stop + adrenaline + support**.',
    '**Distinguish from hemolysis**: isolated fever without hemoglobinuria/hypotension/back pain favours FNHTR — but fever can be the FIRST sign of a hemolytic reaction, so **stop and evaluate**. See [[hhl-hemolytic-transfusion-reactions]].',
  ],

  mechanism: {
    title: 'Fever vs itch vs collapse — three immune targets',
    steps: [
      { id: 's1', label: 'Stored-product WBC cytokines / recipient anti-HLA antibodies → FNHTR fever', emphasis: 'key' },
      { id: 's2', label: 'Recipient IgE against donor plasma proteins → urticaria (allergic)' },
      { id: 's3', label: 'IgA-deficient recipient with anti-IgA meets donor IgA', emphasis: 'key' },
      { id: 's4', label: 'Massive mediator release → anaphylaxis (hypotension, bronchospasm)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Isolated fever/chills with no hypotension or hemoglobinuria', mechanism: 'Cytokines/anti-leukocyte antibodies — FNHTR', significance: 'key' },
    { sign: 'Urticaria and itch without fever', mechanism: 'IgE to donor plasma proteins — allergic reaction', significance: 'supportive' },
    { sign: 'Rapid hypotension, wheeze and angioedema early in the transfusion', mechanism: 'Anaphylaxis — often anti-IgA in an IgA-deficient recipient', significance: 'key' },
  ],

  investigations: [
    { clue: 'Temperature rise ≥1°C with no evidence of hemolysis', meaning: 'FNHTR — but exclude a hemolytic reaction and sepsis first' },
    { clue: 'Recurrent febrile reactions', meaning: 'Provide leukoreduced components' },
    { clue: 'Severe reaction with an undetectable serum IgA', meaning: 'IgA deficiency with anti-IgA — use washed/IgA-deficient products' },
    { clue: 'Hives only, patient otherwise well', meaning: 'Mild allergic reaction — antihistamine, may resume slowly' },
  ],

  treatment: [
    { logic: 'FNHTR: stop, exclude hemolysis, give an antipyretic', detail: 'Prevent recurrence with leukoreduced products.' },
    { logic: 'Mild allergic: antihistamine ± brief pause', detail: 'Urticaria alone often allows cautious continuation.' },
    { logic: 'Anaphylaxis: stop, adrenaline, airway and circulatory support', detail: 'Future transfusions: washed or IgA-deficient components for IgA-deficient patients.' },
  ],

  mnemonics: [
    { hook: 'Fever = FNHTR, Hives = allergic, Hypotension+wheeze = anaphylaxis', expansion: ['FNHTR → antipyretic + leukoreduction', 'Allergic → antihistamine', 'Anaphylaxis → adrenaline + washed/IgA-deficient units'] },
    { hook: 'IgA-deficient + anti-IgA = anaphylaxis', expansion: ['Recipient lacks IgA and has anti-IgA', 'Donor plasma IgA triggers the severe reaction', 'Give washed/IgA-deficient products'] },
  ],

  traps: [
    {
      questionCategory: 'Fever during a transfusion',
      wrongInstinct: 'Fever during a transfusion is just a benign febrile reaction — keep going',
      rightAnswer: 'Fever can be the first sign of an ACUTE HEMOLYTIC reaction, so stop and evaluate before calling it FNHTR',
      why: 'FNHTR is a diagnosis of exclusion — look for hemoglobinuria, hypotension and back pain first.',
    },
    {
      questionCategory: 'Cause of transfusion anaphylaxis',
      wrongInstinct: 'Anaphylaxis to blood is usually latex or drug related',
      rightAnswer: 'The classic transfusion cause is an IgA-deficient recipient with anti-IgA reacting to donor plasma IgA',
      why: 'Manage future transfusions with washed or IgA-deficient components.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient has isolated fever and chills during a red-cell transfusion, with no hypotension, back pain or hemoglobinuria. After excluding hemolysis, future reactions are best prevented by:',
      options: [
        { id: 'a', text: 'Irradiation' },
        { id: 'b', text: 'Leukoreduction' },
        { id: 'c', text: 'Washing' },
        { id: 'd', text: 'A slower infusion rate alone' },
      ],
      answerId: 'b',
      explanation: 'FNHTR is driven by leukocyte cytokines and anti-leukocyte antibodies, so leukoreduction is the preventive modification.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'A young patient develops sudden hypotension and bronchospasm minutes into a plasma transfusion; serum IgA is undetectable. The mechanism is:',
      options: [
        { id: 'a', text: 'ABO incompatibility' },
        { id: 'b', text: 'Anti-IgA antibodies reacting to donor IgA' },
        { id: 'c', text: 'Circulatory volume overload' },
        { id: 'd', text: 'Bacterial contamination' },
      ],
      answerId: 'b',
      explanation: 'An IgA-deficient recipient with anti-IgA antibodies can react to donor plasma IgA, causing anaphylaxis; such patients need washed or IgA-deficient products.',
      tests: 'mechanism',
    },
  ],
};

export default hhlFebrileAllergicReactions;
