import type { Lecture } from '../../lib/types';

export const hhlHdn: Lecture = {
  id: 'hhl-hdn',
  title: 'Hemolytic Disease of the Newborn',
  system: 'heme',
  source: 'L17 — ABO & Rh Blood Groups; HDN',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L17 Blood Groups' },
    { kind: 'disease', label: 'HDN / erythroblastosis fetalis' },
    { kind: 'mechanism', label: 'Maternal IgG crosses placenta' },
    { kind: 'treatment', label: 'Anti-D Ig prophylaxis' },
  ],

  highYield: [
    'HDN = **maternal IgG alloantibody crosses the placenta and hemolyses fetal red cells**; the classic severe form is **RhD** incompatibility (D-negative mother, D-positive fetus). See [[hhl-rh-system]].',
    '**Rh HDN spares the first pregnancy** (sensitization occurs at delivery) and **worsens with each later D-positive pregnancy**; **ABO HDN is milder but can affect the first baby** (group-O mothers already carry IgG anti-A,B).',
    'Consequences: fetal anemia → **hydrops fetalis**; after birth unconjugated bilirubin is no longer cleared by the placenta → **kernicterus**.',
    'Diagnosis: **positive direct antiglobulin (Coombs) test on cord blood**, anemia, **rising unconjugated bilirubin**, nucleated RBCs/reticulocytosis (erythroblastosis).',
    'Prevention: **anti-D immunoglobulin** to D-negative mothers at every sensitizing event (and routine antenatal) — clears fetal D cells before the mother can mount a response.',
  ],

  mechanism: {
    title: 'Sensitization → maternal IgG anti-D → fetal hemolysis',
    steps: [
      { id: 's1', label: 'Fetomaternal hemorrhage exposes D-negative mother to fetal D-positive cells (usually at delivery)' },
      { id: 's2', label: 'Mother makes IgG anti-D (first baby already delivered, unaffected)', emphasis: 'key' },
      { id: 's3', label: 'Next D-positive pregnancy → IgG anti-D crosses placenta and coats fetal cells' },
      { id: 's4', label: 'Fetal extravascular hemolysis → anemia → high-output failure → hydrops fetalis', emphasis: 'danger' },
      { id: 's5', label: 'After birth, unconjugated bilirubin no longer cleared by placenta → kernicterus', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Positive direct Coombs (DAT) on cord blood', mechanism: 'Maternal IgG coating fetal red cells', significance: 'key' },
    { sign: 'Jaundice within the first 24 h of life with rising unconjugated bilirubin', mechanism: 'Ongoing immune hemolysis; bilirubin no longer cleared by placenta', significance: 'key' },
    { sign: 'Nucleated RBCs and reticulocytosis on the neonatal smear', mechanism: 'Compensatory erythropoiesis (erythroblastosis fetalis)', significance: 'supportive' },
    { sign: 'Hepatosplenomegaly, edema and effusions', mechanism: 'Severe fetal anemia → hydrops fetalis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Positive DAT on neonatal cord blood', meaning: 'Immune HDN — maternal antibody on fetal cells' },
    { clue: 'D-negative mother with a rising anti-D titre', meaning: 'Rh alloimmunization — monitor the fetus (MCA Doppler)' },
    { clue: 'Rising fetal middle cerebral artery peak systolic velocity', meaning: 'Fetal anemia — consider intrauterine transfusion' },
    { clue: 'Neonatal unconjugated bilirubin approaching the exchange threshold', meaning: 'Kernicterus risk — escalate therapy' },
  ],

  treatment: [
    { logic: 'Prevent with anti-D immunoglobulin in D-negative mothers', detail: 'At sensitizing events (delivery, miscarriage, amniocentesis, trauma) and routinely antenatally; passive anti-D clears fetal D cells before active immunization.' },
    { logic: 'Phototherapy for neonatal hyperbilirubinemia', detail: 'Converts bilirubin to a water-soluble form for excretion.' },
    { logic: 'Exchange transfusion / intrauterine transfusion for severe disease', detail: 'IUT corrects fetal anemia/hydrops; exchange removes bilirubin and antibody-coated cells to prevent kernicterus.' },
  ],

  mnemonics: [
    { hook: 'Rh HDN skips the first, hammers the next', expansion: ['1st pregnancy sensitizes at delivery', 'Later D-positive pregnancies meet IgG anti-D', 'ABO HDN can hit the first baby but stays mild'] },
    { hook: 'Two lethal endpoints: hydrops before birth, kernicterus after', expansion: ['Anemia → hydrops fetalis in utero', 'Unconjugated bilirubin → kernicterus once the placenta is gone'] },
  ],

  traps: [
    {
      questionCategory: 'Which HDN affects the first pregnancy',
      wrongInstinct: 'HDN can never affect the first baby',
      rightAnswer: 'ABO HDN can affect the first baby because group-O mothers already have IgG anti-A,B; it is Rh HDN that spares the first pregnancy',
      why: 'Rh anti-D must be induced (usually at first delivery); ABO IgG is naturally present beforehand.',
    },
    {
      questionCategory: 'Timing of anti-D prophylaxis',
      wrongInstinct: 'Anti-D immunoglobulin will help a mother who already has anti-D antibodies',
      rightAnswer: 'Prophylactic anti-D only works BEFORE active immunization — it is useless once the mother is already sensitized',
      why: 'It works by clearing fetal D cells and suppressing the primary response, not by treating established alloimmunization.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Why is the first RhD-incompatible pregnancy usually unaffected by hemolytic disease of the newborn?',
      options: [
        { id: 'a', text: 'Fetal cells lack D antigen until term' },
        { id: 'b', text: 'Maternal sensitization typically occurs at delivery, so IgG is not yet present during that pregnancy' },
        { id: 'c', text: 'IgM anti-D cannot cross the placenta' },
        { id: 'd', text: 'The placenta destroys all maternal antibody' },
      ],
      answerId: 'b',
      explanation: 'The D-negative mother is usually first exposed to fetal D-positive cells at delivery, so she has not yet made IgG anti-D during that first pregnancy.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A D-negative woman with no anti-D antibodies delivers a D-positive baby. What best prevents HDN in future pregnancies?',
      options: [
        { id: 'a', text: 'Exchange transfusion of the baby' },
        { id: 'b', text: 'Anti-D immunoglobulin to the mother within 72 hours' },
        { id: 'c', text: 'Transfuse the mother with D-positive red cells' },
        { id: 'd', text: 'Maternal corticosteroids' },
      ],
      answerId: 'b',
      explanation: 'Anti-D immunoglobulin given to a non-sensitized D-negative mother clears fetal D-positive cells before she mounts a primary response, preventing future Rh HDN.',
      tests: 'treatment',
    },
  ],
};

export default hhlHdn;
