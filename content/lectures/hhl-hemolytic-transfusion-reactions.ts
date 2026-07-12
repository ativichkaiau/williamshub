import type { Lecture } from '../../lib/types';

export const hhlHemolyticTransfusionReactions: Lecture = {
  id: 'hhl-hemolytic-transfusion-reactions',
  title: 'Hemolytic Transfusion Reactions',
  system: 'heme',
  source: 'L20 — Blood Transfusion Reactions',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L20 Transfusion Reactions' },
    { kind: 'disease', label: 'Hemolytic transfusion reaction' },
    { kind: 'mechanism', label: 'ABO IgM vs anamnestic IgG' },
    { kind: 'treatment', label: 'Stop the transfusion' },
  ],

  highYield: [
    '**Acute hemolytic transfusion reaction (AHTR)** = **ABO incompatibility, almost always a CLERICAL/identification error**; preformed **IgM** fixes complement → **intravascular hemolysis** within minutes. See [[hhl-abo-system]].',
    'Presentation: **fever, flank/back pain, hemoglobinuria, hypotension**, a sense of doom — may progress to **DIC and acute renal failure**.',
    '**Management: STOP the transfusion immediately**, keep the line open with **saline**, support blood pressure and urine output, recheck identity, and send blood-bank samples.',
    '**Delayed hemolytic transfusion reaction (DHTR)** = **anamnestic IgG** to a **minor antigen** (**Kidd/Jk**, Rh, Duffy) in a previously sensitized patient; **days later** → falling Hb, jaundice, **positive DAT** (extravascular).',
    'Kidd (anti-Jk) antibodies are classic for DHTR because their titre **falls below detection** then rises on re-exposure. See [[hhl-rh-system]].',
  ],

  mechanism: {
    title: 'Two timelines of immune hemolysis',
    steps: [
      { id: 's1', label: 'An immune antibody meets an incompatible donor red cell' },
      { id: 's2', label: 'ABO mismatch → preformed IgM binds cells and fixes complement (acute)', emphasis: 'key' },
      { id: 's3', label: 'Intravascular hemolysis → hemoglobinuria, hypotension, DIC, renal failure', emphasis: 'danger' },
    ],
    branches: [
      {
        fromId: 's1',
        title: 'Delayed pathway (minor antigens)',
        steps: [
          { id: 'b1', label: 'Previously sensitized to Kidd/Rh/Duffy; antibody undetectable at crossmatch' },
          { id: 'b2', label: 'Re-exposure → anamnestic IgG rises over 3–14 days', emphasis: 'key' },
          { id: 'b3', label: 'Extravascular hemolysis → falling Hb, jaundice, positive DAT' },
        ],
      },
    ],
  },

  examFindings: [
    { sign: 'Fever, flank/back pain and red urine minutes into a transfusion', mechanism: 'ABO-incompatible intravascular hemolysis', significance: 'key' },
    { sign: 'Hypotension, oozing, falling platelets and fibrinogen', mechanism: 'Hemolysis-triggered DIC', significance: 'key' },
    { sign: 'Unexplained Hb fall with jaundice 3–14 days later', mechanism: 'Delayed anamnestic (extravascular) hemolysis', significance: 'key' },
    { sign: 'Positive direct antiglobulin test (DAT)', mechanism: 'Antibody-coated transfused cells', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Pink/red plasma and hemoglobinuria during transfusion', meaning: 'Intravascular hemolysis — acute reaction; check ABO/clerical error' },
    { clue: 'Newly positive DAT with a newly detectable antibody days later', meaning: 'Delayed hemolytic reaction (e.g. anti-Jk / Kidd)' },
    { clue: 'Rising bilirubin and LDH with falling haptoglobin', meaning: 'Ongoing hemolysis' },
    { clue: 'Clerical check reveals the wrong patient or unit', meaning: 'Root cause of most acute hemolytic reactions' },
  ],

  treatment: [
    { logic: 'Stop the transfusion immediately at the first sign', detail: 'Disconnect the unit and keep the line open with normal saline — the single most important action.' },
    { logic: 'Support the circulation and kidneys', detail: 'IV fluids to maintain urine output and blood pressure; treat DIC and hyperkalemia; monitor renal function.' },
    { logic: 'Verify identity and investigate', detail: 'Recheck patient/unit labels and send blood-bank samples (DAT, repeat group & crossmatch, free hemoglobin).' },
  ],

  mnemonics: [
    { hook: 'Acute = ABO + Admin error; Delayed = anamnestic', expansion: ['Acute: IgM, intravascular, minutes, clerical error', 'Delayed: IgG, extravascular, days, Kidd/Rh', 'First move always: STOP the transfusion'] },
    { hook: 'Kidd cells are kidding you at crossmatch', expansion: ['Anti-Jk titre falls below detection', 'Re-exposure → anamnestic rise', 'Classic delayed hemolytic reaction'] },
  ],

  traps: [
    {
      questionCategory: 'Acute vs delayed hemolysis timing',
      wrongInstinct: 'A hemolytic reaction days after transfusion must have been an ABO/crossmatch error',
      rightAnswer: 'A delayed reaction reflects an anamnestic IgG response to a minor antigen (often Kidd) that was undetectable at crossmatch — not a clerical error',
      why: 'Acute (minutes) = ABO/clerical and intravascular; delayed (days) = minor-antigen IgG and extravascular.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient develops fever, flank pain and red urine 10 minutes into a red-cell transfusion. The first action is to:',
      options: [
        { id: 'a', text: 'Give paracetamol and continue slowly' },
        { id: 'b', text: 'Stop the transfusion immediately and start normal saline' },
        { id: 'c', text: 'Give an antihistamine and continue' },
        { id: 'd', text: 'Increase the rate to finish the unit quickly' },
      ],
      answerId: 'b',
      explanation: 'These features suggest an acute hemolytic (usually ABO-incompatible) reaction; stopping the transfusion immediately and maintaining IV saline is the priority.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'Seven days after transfusion a previously pregnant woman has a falling Hb, jaundice and a newly positive DAT with anti-Jk(a). This is:',
      options: [
        { id: 'a', text: 'Acute hemolytic reaction from an ABO error' },
        { id: 'b', text: 'Delayed hemolytic reaction (anamnestic Kidd antibody)' },
        { id: 'c', text: 'Febrile non-hemolytic reaction' },
        { id: 'd', text: 'Transfusion-associated circulatory overload' },
      ],
      answerId: 'b',
      explanation: 'A delayed hemolytic reaction is an anamnestic IgG response to a minor antigen such as Kidd (anti-Jk), appearing days later with a positive DAT and falling hemoglobin.',
      tests: 'disease',
    },
  ],
};

export default hhlHemolyticTransfusionReactions;
