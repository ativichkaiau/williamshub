import type { Lecture } from '../../lib/types';

export const ghpShockTreatmentPhysiology: Lecture = {
  id: 'ghp-shock-treatment-physiology',
  title: 'Physiology of Shock Treatment & Circulatory Arrest',
  system: 'cardiovascular',
  source: 'Ch 24 — Circulatory Shock & Its Treatment',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 24 Circulatory Shock' },
    { kind: 'mechanism', label: 'Replace what was lost' },
    { kind: 'treatment', label: 'Why pressors fail in haemorrhage' },
  ],

  highYield: [
    '**Replacement therapy is governed by one rule: replace what was actually lost.** Lost **whole blood** (haemorrhage) → **whole blood**, because you must restore oxygen-carrying capacity as well as volume. Lost **plasma** (burns, peritonitis, severe capillary leak) → **plasma or a colloid**. Lost **water and electrolytes** (dehydration, vomiting, diarrhoea) → **electrolyte solution**. Give the wrong one and the volume goes to the wrong compartment: only about **one quarter to one third of an isotonic crystalloid load stays intravascular**, because it equilibrates across the whole extracellular space.',
    '**A usable plasma substitute has to satisfy physiological specifications, not just be a liquid.** **Dextran** is the classic: it must exert a **colloid osmotic pressure close to plasma**, and its **molecular weight must be high enough that it does not leak through capillary pores** (too small and it is filtered straight out, taking the volume with it). It must also be **non-antigenic, non-toxic and stable in storage**. This is the cleanest illustration in the chapter that fluid choice is an application of the **Starling forces**, not a preference.',
    '**Head-down positioning is free autotransfusion.** Raising the foot of the bed by roughly **30 cm** shifts pooled peripheral blood centrally, raising **mean systemic filling pressure** and therefore **venous return and cardiac output** — most useful in **hypovolaemic and neurogenic** shock. The physiological cost: abdominal viscera press on the diaphragm and **impair ventilation**, and cerebral venous pressure and **intracranial pressure rise**, so it is a temporising manoeuvre, not a treatment.',
    '**Oxygen helps far less in circulatory shock than students expect — and the reason is the exam point.** In most shock the arterial blood is **already nearly fully saturated**; the failure is one of **flow**, not of oxygenation, so extra inspired oxygen adds only a small amount of **dissolved** oxygen and cannot compensate for a halved cardiac output. Oxygen becomes genuinely valuable when **pulmonary gas exchange itself is impaired** (shock lung, aspiration, pneumonia-associated sepsis) or when the failure is at the level of oxygen carriage or use. **Glucocorticoids** are frequently given on three physiological arguments — stabilising **lysosomal membranes**, supporting **vascular tone and cardiac output**, and assisting **glucose metabolism** in depressed cells — but benefit is genuinely debated outside adrenal insufficiency and refractory vasodilatory shock.',
    '**Why sympathomimetics fail in haemorrhagic shock but rescue the distributive types.** In haemorrhage the **sympathetic system is already maximally activated** by the baroreceptor reflex and the CNS ischaemic response: **you cannot add tone that is already maximal**, and pushing harder simply **intensifies vasoconstriction and reduces tissue flow further**. In **neurogenic** shock the lesion **is** the missing tone, so a vasoconstrictor is precisely corrective. In **anaphylactic** shock, **adrenaline** is a direct physiological antagonist of histamine — it **vasoconstricts, reduces capillary permeability and dilates bronchioles** — and is life-saving. **The drug does not treat shock; it replaces the specific missing mechanism.**',
    '**Circulatory arrest is shock taken to zero flow, and the brain sets the clock.** Arrest follows **ventricular fibrillation, asystole**, or hypoxia and anaesthetic overdose. The brain has almost **no anaerobic reserve**, so at normal body temperature more than about **4 minutes** of arrest usually produces some **permanent damage**, and beyond roughly **5 to 8 minutes** damage is severe and usually fatal — while the heart, liver and kidneys tolerate considerably longer. **Hypothermia dramatically widens the window** by lowering metabolic demand, which is why deliberate cooling permits circulatory arrest for far longer in cardiac surgery. Everything about resuscitation is an attempt to keep some flow inside that window.',
  ],

  mechanism: {
    title: 'Replace the missing quantity, restore flow inside the brain window',
    steps: [
      { id: 's1', label: 'Identify what was lost: blood, plasma, water and electrolytes, or vascular tone', emphasis: 'key' },
      { id: 's2', label: 'Replace with the matching fluid — crystalloid leaves only a third intravascular' },
      { id: 's3', label: 'Head-down tilt raises mean systemic filling pressure → venous return rises' },
      { id: 's4', label: 'Oxygen helps only where gas exchange or carriage is the problem, not where flow is', emphasis: 'key' },
      { id: 's5', label: 'Sympathomimetics: useless in haemorrhage (tone already maximal), corrective in neurogenic and anaphylactic shock', emphasis: 'key' },
      { id: 's6', label: 'Zero flow: the brain tolerates roughly 4 minutes at normal temperature — hypothermia lowers demand and widens the window', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Blood pressure rises after a crystalloid bolus, then falls again within the hour', mechanism: 'Isotonic crystalloid redistributes across the extracellular space, leaving only a fraction intravascular', significance: 'key' },
    { sign: 'Arterial pressure rises on a vasopressor while urine output and lactate get worse', mechanism: 'Added vasoconstriction on an already maximally constricted bed raises pressure at the expense of flow', significance: 'key' },
    { sign: 'Little clinical improvement from high-flow oxygen in haemorrhagic shock', mechanism: 'Haemoglobin is already nearly saturated; the deficit is delivery, not oxygenation', significance: 'key' },
    { sign: 'Immediate improvement in blood pressure with head-down tilt in the hypovolaemic patient', mechanism: 'Peripheral pooled blood is shifted centrally, raising filling pressure and venous return', significance: 'supportive' },
    { sign: 'Rapid reversal of hypotension and wheeze after intramuscular adrenaline', mechanism: 'Direct physiological antagonism of histamine at vessels, capillaries and bronchioles', significance: 'key' },
  ],

  investigations: [
    { clue: 'Loss of whole blood', meaning: 'Replace with whole blood — volume plus oxygen-carrying capacity' },
    { clue: 'Loss of plasma only, as in extensive burns', meaning: 'Replace with plasma or an adequate colloid; blood would raise the haematocrit further' },
    { clue: 'Loss of water and electrolytes in dehydration', meaning: 'Replace with an isotonic electrolyte solution' },
    { clue: 'A colloid whose molecular weight is too low', meaning: 'It filters through capillary pores and fails to hold volume in the circulation' },
    { clue: 'Hypotension unresponsive to fluid but responsive to a vasoconstrictor', meaning: 'The deficit is vascular tone — neurogenic or another distributive shock' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The whole of therapy is **mechanism-matching**: replace the missing volume with the fluid that stays where it is needed, restore tone only where tone is what is missing, and remember that **oxygen cannot substitute for flow**. The colloid argument is Starling physiology applied at the bedside — see [[ghp-starling-forces-filtration]] — and the positioning argument is [[ghp-mean-systemic-filling-pressure]] and [[ghp-venous-pressure-blood-reservoir]].' },
    { logic: 'The single highest-yield discriminator', detail: 'A pressor is nearly useless in haemorrhage because the reflexes described in [[ghp-cns-ischaemic-response]] have already driven sympathetic tone to maximum, yet it is the specific treatment in the types covered in [[ghp-shock-types-distributive]]. Set this beside the stages and vicious cycles in [[ghp-shock-stages-haemorrhagic]], the bedside protocol in [[fcp1-shock-management]], and the zero-flow endpoint in [[cardiac-arrest]] and [[ventricular-fibrillation]].' },
  ],

  mnemonics: [
    { hook: 'Replace what left', expansion: ['Blood out → blood in', 'Plasma out → plasma or colloid in', 'Water and salt out → electrolyte solution in', 'Tone out → vasoconstrictor in'] },
    { hook: 'Pressors: NA works, HA does not', expansion: ['Neurogenic and Anaphylactic — tone is missing, so a pressor supplies it', 'Haemorrhagic — tone is already maximal, so a pressor adds nothing but harm', 'Adrenaline in anaphylaxis also seals capillaries and opens bronchioles'] },
  ],

  traps: [
    {
      questionCategory: 'Choosing the drug for the type of shock',
      wrongInstinct: 'Hypotension means give a vasopressor, whatever the cause',
      rightAnswer: 'In haemorrhagic shock the sympathetic system is already maximally activated, so a sympathomimetic adds little and may worsen tissue perfusion; volume replacement is the treatment. Pressors are corrective in neurogenic and anaphylactic shock',
      why: 'You can only replace a mechanism that is missing, not amplify one already at maximum.',
    },
    {
      questionCategory: 'What oxygen therapy can and cannot fix',
      wrongInstinct: 'High-flow oxygen must help substantially in any shock, because the tissues are hypoxic',
      rightAnswer: 'Arterial blood is usually already near-saturated, so extra oxygen adds only dissolved oxygen; it helps mainly when pulmonary gas exchange or oxygen carriage is the limiting step',
      why: 'Tissue hypoxia from low flow is a delivery problem, and delivery is output times content.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient in haemorrhagic shock remains hypotensive. Why is a noradrenaline infusion a poor substitute for blood replacement?',
      options: [
        { id: 'a', text: 'Noradrenaline has no vasoconstrictor effect during acidosis' },
        { id: 'b', text: 'Endogenous sympathetic activity is already near-maximal, so added vasoconstriction raises pressure mainly by further reducing tissue flow' },
        { id: 'c', text: 'Noradrenaline dilates the venous capacitance vessels and lowers venous return' },
        { id: 'd', text: 'It causes an immediate reflex bradycardia that abolishes cardiac output' },
      ],
      answerId: 'b',
      explanation: 'Baroreceptor and CNS ischaemic responses have already driven sympathetic outflow to maximum in haemorrhage, so exogenous sympathomimetics add little tone and buy arterial pressure at the cost of perfusion in the very beds that are already ischaemic. The same drug is genuinely corrective in neurogenic shock, where the missing element IS vasomotor tone. Noradrenaline constricts rather than dilates veins (c), and any reflex bradycardia is modest, not abolishing (d).',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'A patient with 40% burns has lost predominantly plasma. Which replacement rationale is physiologically correct?',
      options: [
        { id: 'a', text: 'Whole blood, because it best restores oxygen-carrying capacity' },
        { id: 'b', text: 'Isotonic crystalloid alone, because it remains within the vascular compartment' },
        { id: 'c', text: 'Plasma or an adequate colloid, because the loss is plasma and the haematocrit is already rising' },
        { id: 'd', text: 'Free water, because the loss is chiefly water' },
      ],
      answerId: 'c',
      explanation: 'Replace what was lost: plasma escapes through the burned capillary bed while red cells remain, so haematocrit rises and giving whole blood (a) would concentrate the blood further. Crystalloid distributes across the whole extracellular space, so only about a quarter to a third stays intravascular (b) — useful adjunctively but not the rationale. Free water (d) would be distributed into cells and cause hyponatraemia.',
      tests: 'treatment',
    },
    {
      id: 'q3',
      stem: 'Regarding circulatory arrest at normal body temperature, which statement is most accurate?',
      options: [
        { id: 'a', text: 'The kidney is the organ least tolerant of arrest, failing within about one minute' },
        { id: 'b', text: 'The brain sustains permanent damage after roughly four minutes, and cooling extends this tolerance considerably' },
        { id: 'c', text: 'Cerebral anaerobic glycolysis sustains neuronal function for around thirty minutes' },
        { id: 'd', text: 'Once arrest exceeds one minute, defibrillation can no longer restore a rhythm' },
      ],
      answerId: 'b',
      explanation: 'The brain has minimal energy reserves and almost no useful anaerobic capacity (c is wrong), so at normal temperature arrest beyond about four minutes usually leaves permanent damage and beyond five to eight minutes is usually fatal; other organs tolerate far longer, so the kidney is not the limiting organ (a). Hypothermia lowers cerebral metabolic rate and is exactly why deliberate cooling permits prolonged arrest in cardiac surgery. Defibrillation can succeed well beyond one minute, especially with effective chest compressions maintaining some flow (d).',
      tests: 'treatment',
    },
  ],
};

export default ghpShockTreatmentPhysiology;
