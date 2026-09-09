import type { Lecture } from '../../lib/types';

export const ghpShockTypesDistributive: Lecture = {
  id: 'ghp-shock-types-distributive',
  title: 'Neurogenic, Anaphylactic & Septic Shock',
  system: 'cardiovascular',
  source: 'Ch 24 — Circulatory Shock & Its Treatment',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 24 Circulatory Shock' },
    { kind: 'mechanism', label: 'Increased vascular capacity' },
    { kind: 'exam', label: 'Warm shock vs cold shock' },
  ],

  highYield: [
    '**These types share one mechanism: the container gets bigger, the contents do not.** Blood volume is **normal**, but **vascular capacity rises**, so the same volume no longer fills the system. **Mean systemic filling pressure falls → venous return falls → cardiac output falls.** This is why the textbook groups them under **decreased venous return with a normal blood volume** — nothing has been lost, it has been **pooled**.',
    '**Neurogenic shock = loss of vasomotor tone with an intact volume.** Causes are all central or spinal: **deep general anaesthesia** depressing the vasomotor centre, **spinal anaesthesia or high cervical/upper thoracic cord injury** blocking the **T1–L2** sympathetic outflow, brain injury or brainstem ischaemia, and severe emotional **vasovagal syncope**. The exam picture is the mirror image of haemorrhage: **warm, dry, pink skin** and, when the cardiac accelerator fibres (**T1–T4**) are also cut, **bradycardia instead of tachycardia**. A hypotensive trauma patient who is **warm and bradycardic** has neurogenic shock until proved otherwise — but always exclude concurrent bleeding first.',
    '**Anaphylactic shock is distributive AND hypovolaemic at once.** An **IgE-mediated (type I)** antigen–antibody reaction degranulates **mast cells and basophils**, and **histamine** does three vascular things simultaneously: **venodilation → increased vascular capacity → falling venous return**; **arteriolar dilation → falling arterial pressure**; and **greatly increased capillary permeability → rapid loss of plasma out of the circulation**. Add **bronchiolar constriction** and you have the full syndrome. The experimental pure form is **histamine shock**, and the plasma leak is why these patients need **large volumes of fluid as well as adrenaline**.',
    '**Septic shock is the counterexample that fixes the definition of shock.** In roughly **half of patients the cardiac output is HIGH, not low** — the hyperdynamic warm phase, driven by **vasodilation in infected and febrile tissue** and by a **hypermetabolic state**. Perfusion is nonetheless inadequate, because flow is **maldistributed** (functional shunting past exchange capillaries) and because mitochondrial oxygen utilisation is impaired. The mediator is **excess nitric oxide from endotoxin-induced inducible NO synthase**, giving a vasodilation that is largely **resistant to catecholamines**.',
    '**The septic features worth listing separately.** High **fever**; marked **vasodilation** with **warm, flushed skin and a bounding pulse** early; **sludging of blood** from agglutinating cell breakdown products; and **disseminated intravascular coagulation**, which consumes clotting factors and platelets so the patient plugs capillaries and **bleeds at the same time**. Untreated, the warm phase gives way to a **cold, low-output phase that looks like any other progressive shock** — by then the vicious cycles have taken over. Classic sources: **peritonitis** from gut perforation or uterine instrumentation, **urinary tract** infection, skin and soft-tissue infection, and gangrenous clostridial infection.',
    '**The discriminator in one line: what is the skin doing.** **Cold, clammy, tachycardic, narrow pulse pressure** = hypovolaemic or cardiogenic (high resistance, low output). **Warm, well-perfused-looking skin with a wide pulse pressure** = distributive (low resistance, normal or high output). Getting this backwards is the single most common exam error in the whole chapter, because the **warm** patient looks less unwell and is often the sicker one.',
  ],

  mechanism: {
    title: 'Dilate the container and venous return collapses without losing a drop',
    steps: [
      { id: 's1', label: 'Trigger: sympathetic block, mast-cell histamine, or endotoxin-driven nitric oxide', emphasis: 'key' },
      { id: 's2', label: 'Venodilation → vascular capacity rises with blood volume unchanged', emphasis: 'key' },
      { id: 's3', label: 'Mean systemic filling pressure falls → venous return falls → cardiac output falls' },
      { id: 's4', label: 'Arteriolar dilation drops total peripheral resistance → wide pulse pressure, warm skin' },
      { id: 's5', label: 'Anaphylaxis adds capillary leak: true volume loss on top of the pooling', emphasis: 'danger' },
      { id: 's6', label: 'Sepsis adds maldistribution and impaired cellular oxygen use — shock at a HIGH output; untreated, all three converge on the progressive low-output cycle', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Hypotension with warm, dry, pink peripheries and a wide pulse pressure', mechanism: 'Low peripheral resistance from vasodilation, not a low-output state', significance: 'key' },
    { sign: 'Bradycardia accompanying hypotension after a high spinal cord injury', mechanism: 'Sympathetic outflow blocked including the T1–T4 cardiac accelerators, leaving unopposed vagal tone', significance: 'key' },
    { sign: 'Urticaria, angio-oedema, stridor and wheeze with sudden hypotension', mechanism: 'Histamine causing vasodilation, capillary leak and bronchoconstriction together', significance: 'key' },
    { sign: 'High cardiac output with a low central venous oxygen extraction in sepsis', mechanism: 'Maldistributed flow and impaired cellular oxygen utilisation despite adequate delivery', significance: 'key' },
    { sign: 'Simultaneous microvascular thrombosis and oozing from venepuncture sites', mechanism: 'Disseminated intravascular coagulation consuming platelets and clotting factors', significance: 'key' },
  ],

  investigations: [
    { clue: 'Normal blood volume, low mean systemic filling pressure', meaning: 'Increased vascular capacity — the defining lesion of distributive shock' },
    { clue: 'Warm skin, wide pulse pressure, high or normal cardiac output, low resistance', meaning: 'Distributive shock (septic, neurogenic or anaphylactic)' },
    { clue: 'Cold skin, narrow pulse pressure, low cardiac output, high resistance', meaning: 'Hypovolaemic or cardiogenic shock' },
    { clue: 'Hypotension with bradycardia and warm flushed skin after spinal trauma', meaning: 'Neurogenic shock rather than concurrent haemorrhage' },
    { clue: 'Fever, leucocytosis, raised lactate and a rising vasopressor requirement', meaning: 'Septic shock entering the low-output phase' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'These are the types where **giving fluid alone is not enough** and where a **vasoconstrictor genuinely works**, because the missing thing is tone rather than volume — the exact opposite of haemorrhage. The pharmacological logic is in [[ghp-shock-treatment-physiology]]; the capacity argument sits on [[ghp-mean-systemic-filling-pressure]] and the reservoir function in [[ghp-venous-pressure-blood-reservoir]].' },
    { logic: 'Where the tone is lost', detail: 'Neurogenic shock is best understood as the vasomotor centre and its outflow switched off — see [[ghp-vasomotor-centre-sympathetic-control]] — while the septic vasodilation is endothelial nitric oxide run wild, covered in [[ghp-humoral-endothelial-control]]. The anaphylactic mechanism is a type I reaction ([[cutaneous-immunology-hypersensitivity]]); the coagulopathy of sepsis is in [[hhl-dic-thrombosis]]. For the shared stages and vicious cycles, return to [[ghp-shock-stages-haemorrhagic]], and for bedside sorting to [[fcp1-shock-classification]] and [[shock-mechanisms-types]].' },
  ],

  mnemonics: [
    { hook: 'Same blood, bigger box', expansion: ['Volume normal, capacity increased', 'Mean systemic filling pressure falls', 'Venous return falls → cardiac output falls', 'So the fix is tone, not just more fluid'] },
    { hook: 'Histamine does three vascular things plus one airway thing', expansion: ['Dilates veins → pooling', 'Dilates arterioles → hypotension', 'Leaks capillaries → plasma loss', 'Constricts bronchioles → wheeze'] },
  ],

  traps: [
    {
      questionCategory: 'Cardiac output in shock',
      wrongInstinct: 'Every shocked patient must have a low cardiac output',
      rightAnswer: 'Septic shock classically runs a normal or high cardiac output; perfusion is inadequate because flow is maldistributed and cells cannot extract oxygen properly',
      why: 'Shock is defined by inadequate perfusion for demand, not by the number for output.',
    },
    {
      questionCategory: 'Reading the skin and the heart rate',
      wrongInstinct: 'Warm skin means the patient is well perfused, and any shocked patient should be tachycardic',
      rightAnswer: 'Warm skin with a wide pulse pressure signals a low-resistance distributive state, and high spinal injury blocks the T1–T4 cardiac accelerators, so neurogenic shock is typically bradycardic',
      why: 'Warm and slow points away from haemorrhage — but bleeding must still be excluded before it is accepted.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with a complete cervical spinal cord injury has a blood pressure of 78/44 and a heart rate of 52, with warm, dry, pink skin. Blood volume is measured and is normal. The primary haemodynamic abnormality is:',
      options: [
        { id: 'a', text: 'Reduced blood volume from occult intra-abdominal bleeding' },
        { id: 'b', text: 'Increased vascular capacity with a fall in mean systemic filling pressure' },
        { id: 'c', text: 'Impaired myocardial contractility from direct cardiac contusion' },
        { id: 'd', text: 'Increased total peripheral resistance defending arterial pressure' },
      ],
      answerId: 'b',
      explanation: 'Loss of sympathetic vasomotor outflow dilates the venous capacitance vessels, so a normal blood volume no longer fills an enlarged vascular bed: mean systemic filling pressure falls, venous return falls and cardiac output falls. Warm dry skin and bradycardia (loss of the T1–T4 cardiac accelerators) are against haemorrhage (a), which would give cold clammy skin and tachycardia. Resistance is decreased, not increased (d).',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A febrile patient with peritonitis has a cardiac output of 8.5 L/min, warm flushed peripheries, a mean arterial pressure of 55 mmHg and a lactate of 5.5 mmol/L. Which statement is correct?',
      options: [
        { id: 'a', text: 'The raised cardiac output excludes circulatory shock' },
        { id: 'b', text: 'The high output is caused by increased myocardial contractility from endotoxin' },
        { id: 'c', text: 'This is shock: perfusion is inadequate despite a high output because flow is maldistributed and oxygen utilisation impaired' },
        { id: 'd', text: 'Total peripheral resistance must be elevated for lactate to rise' },
      ],
      answerId: 'c',
      explanation: 'Shock is defined by inadequate perfusion relative to metabolic need, not by the value of cardiac output — the rising lactate proves inadequate tissue oxygen use. The high output in septic shock arises from profound vasodilation (endotoxin-induced nitric oxide) plus fever and hypermetabolism, which reduce afterload rather than augment contractility; sepsis in fact depresses the myocardium. Resistance is low, not high (d).',
      tests: 'disease',
    },
    {
      id: 'q3',
      stem: 'Within minutes of a wasp sting a patient is hypotensive and wheezing, and the haematocrit has risen from 42% to 51%. The best explanation for the rising haematocrit is:',
      options: [
        { id: 'a', text: 'Splenic contraction releasing stored red cells' },
        { id: 'b', text: 'Histamine-induced increase in capillary permeability with loss of plasma into the interstitium' },
        { id: 'c', text: 'Reabsorption of interstitial fluid into the capillaries' },
        { id: 'd', text: 'Acute increase in erythropoietin' },
      ],
      answerId: 'b',
      explanation: 'Histamine markedly increases capillary permeability, so protein-rich plasma escapes to the interstitium while red cells remain intravascular — the haematocrit therefore rises and the effective blood volume falls, which is why anaphylaxis needs generous fluid as well as adrenaline. Option c describes the opposite movement, the compensatory autotransfusion of haemorrhage, which lowers haematocrit. Erythropoietin (d) acts over days.',
      tests: 'mechanism',
    },
  ],
};

export default ghpShockTypesDistributive;
