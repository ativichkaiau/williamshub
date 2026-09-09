import type { Lecture } from '../../lib/types';

export const ghpBloodTypesTransfusion: Lecture = {
  id: 'ghp-blood-types-transfusion',
  title: 'Blood Groups, Transfusion & Reactions',
  system: 'heme',
  source: 'Ch 35 — Blood Types; Transfusion; Transplantation',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Haematology' },
    { kind: 'lecture', label: 'Ch 35 Blood Types & Transplantation' },
    { kind: 'mechanism', label: 'Agglutinin-mediated haemolysis' },
    { kind: 'investigation', label: 'Group and crossmatch' },
  ],

  highYield: [
    '**ABO antigens are carbohydrates, and that single fact explains why the antibodies exist before you ever meet the antigen.** A and B are sugar residues added to the H substance on the red cell membrane; the O allele adds nothing. Gut commensals and dietary antigens display near-identical sugars, so an immune response to normal flora produces **anti-A and anti-B** that happen to fit red cells. Titres appear at **2–8 months** of life and peak around **8–10 years** — the groundwork covered in [[hhl-abo-system]].',
    '**Because the naturally occurring agglutinins are IgM, ABO mismatch is a complement-fixing, intravascular catastrophe.** IgM is pentameric and an efficient complement activator, so incompatible cells are lysed inside the vessel within minutes: free haemoglobin, loin pain, hypotension, disseminated intravascular coagulation and acute kidney injury. Almost every case traces back to a **clerical identification error**, not a laboratory one.',
    '**The universal donor rule inverts between cells and plasma, and exams exploit that.** Group **O red cells** carry no A or B antigen, so they suit any recipient; group **AB plasma** carries no anti-A or anti-B, so it is the universal plasma. Reasoning about which component you are giving — antigens travel with cells, antibodies with plasma — beats memorising a grid.',
    '**Rh D is a protein, so there are no naturally occurring anti-D antibodies — sensitisation must be earned.** Exposure comes from transfusion or from fetomaternal haemorrhage, and the largest bleed is **at delivery**. So an Rh-negative mother usually carries a first Rh-positive fetus uneventfully and mounts an IgG response afterwards; the **second** Rh-positive pregnancy is the one at risk. IgG crosses the placenta and causes haemolytic disease of the newborn, developed further in [[hhl-rh-system]].',
    '**Prophylaxis works because it hides the antigen before the immune system can index it.** Anti-D immunoglobulin given at around **28 weeks** and within **72 hours** of delivery or any sensitising event clears fetal D-positive cells from the maternal circulation before B cells are primed. A useful curiosity: coexisting **ABO incompatibility partly protects** against Rh sensitisation, because maternal anti-A or anti-B destroys the fetal cells before D is ever presented — the obstetric management sits in [[hrp2-rh-isoimmunisation]].',
    '**Three transfusion reactions are separated by timing plus whether haemoglobin actually falls.** **Acute haemolytic** starts within minutes with fever, hypotension and haemoglobinuria, and the direct antiglobulin test is positive. **Delayed haemolytic** appears at **3–14 days** as an anamnestic IgG response to a minor antigen (Kidd, Kell, Duffy, Rh) with jaundice and an unexplained fall in haemoglobin. **Febrile non-haemolytic** is fever alone from donor leucocyte cytokines, with no haemolysis and no fall in haemoglobin — the reason units are leucodepleted; see [[hhl-febrile-allergic-reactions]].',
  ],

  mechanism: {
    title: 'From antigen mismatch to acute intravascular haemolysis',
    steps: [
      { id: 's1', label: 'Recipient carries preformed IgM agglutinins against the ABO antigens they lack', emphasis: 'key' },
      { id: 's2', label: 'Incompatible donor red cells are transfused, usually after an identification error', emphasis: 'key' },
      { id: 's3', label: 'IgM binds A or B antigen and fixes complement through to the membrane attack complex', emphasis: 'key' },
      { id: 's4', label: 'Red cells lyse inside the vessel, releasing free haemoglobin and red cell stroma', emphasis: 'danger' },
      { id: 's5', label: 'Stroma triggers coagulation and free haemoglobin scavenges nitric oxide, giving DIC and hypotension', emphasis: 'danger' },
      { id: 's6', label: 'Renal vasoconstriction plus haemoglobin casts produce acute kidney injury', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Fever, rigors, loin pain and hypotension within minutes of starting a unit', mechanism: 'Complement-mediated intravascular lysis of incompatible cells', significance: 'key' },
    { sign: 'Pink plasma and dark red-brown urine', mechanism: 'Free haemoglobin exceeding haptoglobin binding and filtering into urine', significance: 'key' },
    { sign: 'Oozing from cannula sites during a reaction', mechanism: 'Red cell stroma activating coagulation and consuming factors', significance: 'key' },
    { sign: 'Jaundice with an unexplained fall in haemoglobin 5–10 days after transfusion', mechanism: 'Anamnestic IgG response to a minor antigen with extravascular splenic clearance', significance: 'key' },
    { sign: 'Isolated fever and rigors with a stable haemoglobin', mechanism: 'Cytokines from donor leucocytes or recipient anti-HLA antibodies', significance: 'supportive' },
    { sign: 'Neonatal jaundice with hepatosplenomegaly in a second Rh-positive pregnancy', mechanism: 'Maternal IgG anti-D crossing the placenta and coating fetal red cells', significance: 'key' },
  ],

  investigations: [
    { clue: 'Positive direct antiglobulin test with visible free plasma haemoglobin', meaning: 'Immune intravascular haemolysis — assume ABO incompatibility and recheck the unit against the patient' },
    { clue: 'Antibody screen negative before transfusion but positive at day 7', meaning: 'Delayed haemolytic reaction — the antibody titre had fallen below detection and was recalled on re-exposure' },
    { clue: 'Falling haptoglobin with rising LDH and unconjugated bilirubin', meaning: 'Confirms haemolysis and separates it from simple dilution or bleeding' },
    { clue: 'Forward and reverse grouping disagree', meaning: 'Weak subgroup, cold agglutinin, recent transfusion or absent agglutinins in the very young or elderly' },
    { clue: 'Fever with negative DAT and no fall in haemoglobin', meaning: 'Febrile non-haemolytic reaction rather than incompatibility' },
    { clue: 'Rising maternal anti-D titre with fetal middle cerebral artery peak velocity above 1.5 MoM', meaning: 'Fetal anaemia from Rh alloimmunisation requiring intervention' },
  ],

  treatment: [
    {
      logic: 'Stop the transfusion before you diagnose it — the dose is the disease',
      detail: 'Every minute of continued infusion adds antigen. **Stop the unit, keep the line open with saline, and recheck the label against the patient identity** before anything else. Send the unit and fresh samples for repeat grouping and a direct antiglobulin test, then support with fluids to protect renal perfusion.',
    },
    {
      logic: 'Prevent Rh sensitisation rather than treating its consequences',
      detail: 'There is no way to erase an established anti-D response, so the whole strategy is pre-emptive: **anti-D immunoglobulin at about 28 weeks and within 72 hours** of delivery, miscarriage, termination, amniocentesis or abdominal trauma. It works by clearing fetal D-positive cells before maternal B cells are primed — prophylaxis, not treatment.',
    },
  ],

  mnemonics: [
    { hook: 'Cells carry antigens, plasma carries antibodies', expansion: ['Group O red cells → universal donor cells', 'Group AB plasma → universal donor plasma', 'The rule inverts because the component inverts'] },
    { hook: 'Rh needs an introduction, ABO does not', expansion: ['ABO agglutinins are natural IgM from cross-reactive gut flora sugars', 'Anti-D only appears after exposure — transfusion or delivery', 'First Rh-positive pregnancy sensitises, the second is harmed'] },
  ],

  traps: [
    {
      questionCategory: 'A patient develops fever during a transfusion',
      wrongInstinct: 'Call it a febrile non-haemolytic reaction and slow the infusion rate',
      rightAnswer: 'Stop the unit and actively exclude acute haemolysis first',
      why: 'Hypotension, loin pain, haemoglobinuria or a positive DAT separate the lethal reaction from the benign one',
    },
    {
      questionCategory: 'Why anti-A exists without prior transfusion but anti-D does not',
      wrongInstinct: 'The patient must have had an undocumented previous exposure',
      rightAnswer: 'ABO antigens are carbohydrates mimicked by gut flora, so the antibodies are naturally occurring IgM',
      why: 'Rh D is a protein with no environmental mimic, so anti-D is IgG and only appears after a real exposure',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient becomes hypotensive with loin pain and haemoglobinuria five minutes into a red cell transfusion. Which property of the responsible antibody best explains the intravascular nature of the haemolysis?',
      options: [
        { id: 'a', text: 'It is IgG and therefore opsonises cells for splenic macrophages' },
        { id: 'b', text: 'It is pentameric IgM and an efficient activator of complement to the membrane attack complex' },
        { id: 'c', text: 'It is IgA and activates the alternative pathway' },
        { id: 'd', text: 'It is IgE and triggers mast cell degranulation' },
      ],
      answerId: 'b',
      explanation: 'Naturally occurring anti-A and anti-B are IgM. Their pentameric structure allows the multiple adjacent Fc contacts needed for efficient C1 binding, so complement runs to completion and cells lyse within the vessel. IgG antibodies against minor antigens instead cause delayed, extravascular haemolysis in the spleen.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'An Rh-negative woman with an Rh-positive partner has an uncomplicated first pregnancy but her second baby is severely anaemic and jaundiced at birth. What is the key timing point?',
      options: [
        { id: 'a', text: 'Naturally occurring anti-D took two pregnancies to reach a haemolytic titre' },
        { id: 'b', text: 'Sensitisation occurred largely at the first delivery, and the resulting IgG anti-D crossed the placenta in the second pregnancy' },
        { id: 'c', text: 'Anti-D is IgM and cannot cross the placenta until titres are very high' },
        { id: 'd', text: 'The first fetus was protected by fetal haemoglobin' },
      ],
      answerId: 'b',
      explanation: 'There are no naturally occurring anti-D antibodies. The largest fetomaternal bleed happens at delivery, so the mother is primed after the first Rh-positive baby is born. The resulting IgG crosses the placenta and attacks the next Rh-positive fetus. Anti-D immunoglobulin at 28 weeks and within 72 hours of delivery interrupts exactly this sequence.',
      tests: 'disease',
    },
    {
      id: 'q3',
      stem: 'Seven days after transfusion a patient is mildly jaundiced with an unexplained fall in haemoglobin and a newly positive direct antiglobulin test. The pre-transfusion antibody screen had been negative. What happened?',
      options: [
        { id: 'a', text: 'An ABO incompatible unit was given' },
        { id: 'b', text: 'A febrile non-haemolytic reaction to donor leucocytes' },
        { id: 'c', text: 'An anamnestic IgG response to a minor red cell antigen whose titre had fallen below detection' },
        { id: 'd', text: 'Transfusion-associated circulatory overload' },
      ],
      answerId: 'c',
      explanation: 'This is a delayed haemolytic transfusion reaction. Antibodies to minor antigens such as Kidd, Kell, Duffy and Rh subtypes wane over years and can be undetectable at screening, then rise rapidly on re-exposure. Destruction is IgG-mediated and extravascular, so it presents at 3–14 days with jaundice and a falling haemoglobin rather than acute shock.',
      tests: 'investigation',
    },
  ],
};

export default ghpBloodTypesTransfusion;
