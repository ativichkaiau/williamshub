import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpEmbolismInfarctionShock: Lecture = {
  id: 'rbp-embolism-infarction-shock',
  title: 'Embolism, Infarction & Shock',
  system: 'pathology',
  source: 'Ch 3 — Hemodynamic Disorders, Thromboembolism, and Shock',
  updated: '2026-09-16',
  tags: [
    { kind: 'system', label: 'Pathology' },
    { kind: 'lecture', label: 'Ch 3 Hemodynamic Disorders, Thromboembolism, and Shock' },
    { kind: 'mechanism', label: 'Vascular occlusion, infarct colour & shock profiles' },
    { kind: 'exam', label: 'Haemodynamic profile of each shock class' },
  ],

  highYield: [
    '**An embolus is anything carried in the blood that lodges where the vessel becomes too narrow for it, and where it lands is decided entirely by where it entered.** Over **95%** of pulmonary emboli originate in the **deep veins of the leg above the knee** — popliteal, femoral and iliac — because isolated calf thrombi are usually too small to matter until they propagate proximally. Venous emboli therefore land in the **lung**; left-heart and aortic emboli land in the **systemic** circulation, with the **lower limbs (75%)** and **brain (10%)** taking most of them. The one exception is the **paradoxical embolus**, which needs a **right-to-left shunt** — most often a **patent foramen ovale**, present in roughly **25–30%** of adults and opened whenever right atrial pressure transiently exceeds left, as in straining or a large PE itself. A venous clot in the brain without a shunt is a contradiction, so the shunt is the answer the question wants. Thrombus formation itself is covered in [[rbp-edema-haemostasis-thrombosis]].',
    '**The lung usually survives its own emboli because it has two arterial supplies — so infarction after a pulmonary embolus tells you about the patient, not about the clot.** Roughly **60–80%** of pulmonary emboli are **clinically silent** because they are small and lysed. Only about **10%** cause infarction, and they do so in patients whose **bronchial arterial flow** is already compromised by **left heart failure** or shock. Obstruction of more than about **60%** of the pulmonary vascular bed causes acute **right ventricular failure**, electromechanical dissociation and sudden death — the **saddle embolus** at the bifurcation is anatomy, and its lethality comes from the cross-sectional area it removes. Small **recurrent** emboli behave differently again: they remodel the pulmonary arterioles into **chronic thromboembolic pulmonary hypertension** and right ventricular hypertrophy over months.',
    '**Each non-thrombotic embolus is identified by one discriminating feature — learn the feature, not the list.** **Fat and marrow embolism** follows **long bone fracture** or orthopaedic surgery; fat globules appear in **90%** of severe skeletal injuries but only around **10%** develop the syndrome, whose signature is a **delay of 24–72 hours** and a triad of **respiratory failure, neurological deterioration and a petechial rash** over the conjunctivae, axillae and upper anterior chest — that delay is the discriminator, because a mechanical obstruction would be immediate and the delay reflects free fatty acid release and endothelial injury. **Air embolism** needs roughly **100 mL** to be clinically significant in an adult and comes from neurosurgery in the sitting position, central line manipulation or obstetric procedures; **decompression sickness** is its slow cousin, nitrogen coming out of solution to cause the **bends**, the **chokes**, and in chronic caisson disease **ischaemic necrosis of the femoral heads, tibiae and humeri**. **Amniotic fluid embolism** is peripartum sudden dyspnoea, cyanosis, seizures and **DIC in most survivors**, with **squamous cells, lanugo hair, mucin and vernix fat** demonstrable in the pulmonary microvasculature.',
    '**Infarct colour is an anatomical statement about whether blood can get back into the dead tissue — nothing more.** A **red (haemorrhagic)** infarct occurs when a second route lets blood re-enter the necrotic zone: **loose spongy tissue** that cannot resist haemorrhage (**lung**), a **dual or collateral supply** (**lung, small intestine, liver**), **venous rather than arterial occlusion** so the arterial inflow keeps pushing blood into a blocked bed (**testicular torsion, ovarian torsion**), a previously **congested** tissue, or **reperfusion** after thrombolysis or angioplasty into vessels already damaged by ischaemia. A **white (anaemic)** infarct occurs where none of that is possible: a **solid dense organ** with a functionally **end-arterial** supply — **heart, spleen, kidney**. Infarcts are **wedge-shaped with the occluded vessel at the apex and the base at the surface**. The necrosis is **coagulative** everywhere except the **brain**, which liquefies; the patterns are compared in [[necrosis-patterns]].',
    '**Classify shock by MECHANISM, because the mechanism dictates the haemodynamic profile and the profile dictates the first intervention.** **Hypovolaemic**: volume lost (over about **20%** of blood volume), so **low preload, low cardiac output, compensatory high systemic vascular resistance** — cold and dry. **Cardiogenic**: the pump fails, so **high filling pressures, low output, high resistance** — cold and wet. **Obstructive**: filling or ejection is mechanically blocked (tamponade, tension pneumothorax, massive PE), so **low output and high resistance with a high central venous pressure** but a low or normal wedge in PE — cold and wet with the lungs often clear. **Distributive**: tone is lost, so **low systemic vascular resistance** with a **normal or high cardiac output** — warm. Two of these four are made worse by fluid, which is why naming the mechanism precedes treating the number. Profiles are tabulated in [[fcp1-shock-classification]].',
    '**Septic shock breaks the pattern, and the break is the examinable point.** Early sepsis is **warm, vasodilated and high-output** — the opposite of every other shock — because **PAMPs such as lipopolysaccharide** engage **TLR4** on macrophages and endothelium, driving **NF-κB**, **TNF, IL-1 and IL-6**, and above all **inducible nitric oxide synthase**. Continuous **nitric oxide** production relaxes arteriolar smooth muscle in a way catecholamines cannot overcome, which is why septic shock is defined by a **vasopressor requirement** to hold **mean arterial pressure at or above 65 mmHg** together with a **lactate above 2 mmol/L** after adequate fluids. The same endothelial activation expresses **tissue factor** and suppresses **thrombomodulin, protein C and antithrombin**, producing **DIC** in a substantial minority. Later, myocardial depression and **mitochondrial dysfunction (cytopathic hypoxia)** mean oxygen is delivered but not consumed — the reason a **high** central venous oxygen saturation can coexist with a **rising lactate**, a combination impossible in cardiogenic or hypovolaemic shock. Mortality remains around **30–40%**. Overlap with DIC is developed in [[infarction-shock]].',
  ],

  mechanism: {
    title: 'A detached thrombus to irreversible shock',
    steps: [
      { id: 's1', label: 'Thrombus fragments from a proximal leg vein and travels through the right heart', detail: 'Over 95% of pulmonary emboli start above the knee; calf thrombi matter once they propagate.', emphasis: 'normal' },
      { id: 's2', label: 'It lodges where arterial calibre falls below its own diameter', emphasis: 'key' },
      { id: 's3', label: 'Downstream tissue survives or infarcts depending on dual supply, collaterals, oxygen demand and rate of occlusion', detail: 'Neurons die in 3 to 4 minutes, myocardium in 20 to 30 minutes, fibroblasts in hours.', emphasis: 'key' },
      { id: 's4', label: 'Beyond about 60% obstruction the right ventricle cannot generate the pressure to eject', detail: 'Acute cor pulmonale, electromechanical dissociation, sudden death.', emphasis: 'danger' },
      { id: 's5', label: 'Cardiac output falls; baroreflex, catecholamines and renin-angiotensin defend pressure — compensated shock', emphasis: 'normal' },
      { id: 's6', label: 'Anaerobic metabolism, lactic acidosis, loss of arteriolar tone, capillary leak and DIC — progressive then irreversible', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Pleuritic chest pain with haemoptysis and a pleural rub 48 hours after hip arthroplasty', mechanism: 'Pulmonary infarction, which requires bronchial arterial flow to be inadequate — a marker of poor cardiopulmonary reserve rather than a larger embolus', significance: 'key' },
    { sign: 'Sudden hypotension with grossly distended neck veins and clear lung fields', mechanism: 'Obstructive shock: the right ventricle cannot fill or eject, so pressure backs up behind it while the pulmonary bed stays dry', significance: 'key' },
    { sign: 'Confusion and hypoxia with petechiae over the conjunctivae, axillae and upper chest two days after a femoral shaft fracture', mechanism: 'Fat embolism syndrome — the 24 to 72 hour delay reflects free fatty acid mediated endothelial injury, not mechanical plugging', significance: 'key' },
    { sign: 'Bounding pulses, wide pulse pressure, warm peripheries and brisk capillary refill in a hypotensive febrile patient', mechanism: 'Distributive shock: inducible nitric oxide synthase has abolished arteriolar tone while cardiac output is normal or high', significance: 'key' },
    { sign: 'Cold mottled clammy skin with a thready pulse and a raised jugular venous pressure after an anterior myocardial infarction', mechanism: 'Cardiogenic shock: pump failure raises filling pressures while catecholamines clamp the periphery', significance: 'key' },
    { sign: 'A firm pale wedge in the kidney with its base at the capsule and a hyperaemic rim', mechanism: 'White infarct in a dense organ with end-arterial supply; the rim is the only zone collaterals can reach', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'CT pulmonary angiogram showing a filling defect straddling the main pulmonary artery bifurcation', meaning: 'Saddle embolus. The prognosis comes from the cross-sectional area obstructed and the right ventricle, not from the position itself' },
    { clue: 'Echocardiogram with right ventricular dilatation, septal flattening giving a D-shaped left ventricle, and preserved apical wall motion', meaning: 'Acute right ventricular pressure overload — the finding that converts a pulmonary embolus from low to intermediate or high risk' },
    { clue: 'Arterial lactate 5.8 mmol/L falling to 2.0 after resuscitation', meaning: 'Global tissue hypoperfusion with anaerobic metabolism; the rate of clearance, not the single value, is the resuscitation endpoint' },
    { clue: 'Central venous oxygen saturation 82% with a lactate of 6 mmol/L', meaning: 'Oxygen is being delivered but not extracted — septic cytopathic hypoxia. Cardiogenic and hypovolaemic shock drive this figure below 60% because extraction rises' },
    { clue: 'Sudden thrombocytopenia with anaemia and fat globules in the urine after a long bone fracture', meaning: 'Supports fat embolism syndrome, which is a clinical diagnosis; the laboratory findings are corroborative only' },
    { clue: 'Squamous cells, mucin and lanugo hair in pulmonary microvessels at autopsy after peripartum collapse', meaning: 'Amniotic fluid embolism — the only embolus identified by fetal material in the maternal lung' },
  ],

  treatment: [
    {
      logic: 'Name the shock mechanism before you reach for the fluid bag',
      detail: 'Fluid is the correct first move in **hypovolaemic** and **distributive** shock, where the tank is empty or the tank has enlarged. Fluid is actively harmful in **cardiogenic** shock, where filling pressures are already high, and useless in **obstructive** shock until the obstruction is relieved — **pericardiocentesis** for tamponade, **needle decompression** for tension pneumothorax, **thrombolysis or embolectomy** for massive pulmonary embolism. Then match the vasoactive agent to the deficit: an **inotrope** when contractility failed, a **vasopressor** such as noradrenaline when tone failed. Treating the blood pressure without naming the mechanism gets it wrong half the time by construction.',
    },
    {
      logic: 'Anticoagulate every pulmonary embolus; lyse only the ones killing the right ventricle',
      detail: 'Anticoagulation does not dissolve the embolus — it prevents **propagation and recurrence** while endogenous **plasmin** does the work, which is why most patients need nothing more. **Systemic thrombolysis** is reserved for **haemodynamic instability**, because it carries roughly a **2–3%** risk of intracranial haemorrhage: you accept that only when acute **right ventricular failure** is the immediate threat to life. The same reasoning explains the time window — a thrombus that has begun to **organise** is no longer lysable at any dose.',
    },
  ],

  mnemonics: [
    {
      hook: 'Warm or cold, wet or dry — the four shock profiles in two questions',
      expansion: [
        'Warm or cold answers cardiac output and vascular tone; wet or dry answers filling pressure',
        'Cold and dry: hypovolaemic — low output, low filling, high resistance',
        'Cold and wet: cardiogenic — low output, high filling, high resistance',
        'Cold and wet with clear lungs: obstructive — high central venous pressure, blocked filling or ejection',
        'Warm: distributive — low resistance with normal or high output, the only warm shock',
      ],
    },
    {
      hook: 'Red infarcts happen where blood can get back in',
      expansion: [
        'Loose spongy tissue that cannot tamponade haemorrhage — lung',
        'Dual or collateral supply — lung, small intestine, liver',
        'Venous occlusion with arterial inflow continuing — testicular and ovarian torsion',
        'Reperfusion into vessels already injured by ischaemia',
        'White where none of these apply: heart, spleen, kidney — dense tissue, one artery',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'Interpreting a high central venous oxygen saturation in shock',
      wrongInstinct: 'A high mixed or central venous saturation means perfusion is adequate, so this is not shock',
      rightAnswer: 'In septic shock a high saturation with a rising lactate means oxygen is delivered but the mitochondria cannot use it',
      why: 'Cardiogenic and hypovolaemic shock lower the saturation because extraction rises to compensate; sepsis raises it because extraction fails',
    },
    {
      questionCategory: 'Why the lung rarely infarcts after a pulmonary embolus',
      wrongInstinct: 'The clot must have been too small to kill tissue',
      rightAnswer: 'The lung has a dual arterial supply, so bronchial flow keeps the parenchyma alive unless left heart failure or shock has already compromised it',
      why: 'Infarction after an embolus identifies a patient with poor cardiopulmonary reserve, not a bigger clot — only about one embolus in ten infarcts',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 68-year-old with a proximal deep vein thrombosis develops a sudden right hemiparesis. Echocardiography is otherwise normal. Which single finding is required for this to be a paradoxical embolus?',
      options: [
        { id: 'a', text: 'Left atrial enlargement' },
        { id: 'b', text: 'A right-to-left shunt such as a patent foramen ovale' },
        { id: 'c', text: 'Severe pulmonary hypertension alone' },
        { id: 'd', text: 'Carotid atherosclerosis' },
      ],
      answerId: 'b',
      explanation: 'A venous embolus can only reach the systemic circulation by bypassing the pulmonary capillary bed. That needs a communication with a right-to-left pressure gradient, most commonly a patent foramen ovale present in about 25 to 30% of adults and opened transiently when right atrial pressure exceeds left. Without the shunt, a venous source and an arterial territory are mutually exclusive.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient has a haemorrhagic infarct of the small intestine and, in the same admission, a pale wedge-shaped infarct of the spleen. What explains the difference in colour?',
      options: [
        { id: 'a', text: 'The intestinal lesion is older, so haemorrhage has had time to occur' },
        { id: 'b', text: 'The intestine has a dual and collateral supply in loose tissue allowing blood to re-enter, while the spleen is dense with an end-arterial supply' },
        { id: 'c', text: 'Splenic infarcts undergo liquefactive necrosis and intestinal infarcts undergo coagulative necrosis' },
        { id: 'd', text: 'The spleen was reperfused and the intestine was not' },
      ],
      answerId: 'b',
      explanation: 'Infarct colour is an anatomical statement about re-entry of blood. Loose tissue with dual or collateral supply, or venous occlusion with continuing arterial inflow, allows haemorrhage into the necrotic zone. A dense organ with a functionally end-arterial supply cannot refill, so the infarct is pale. Both show coagulative necrosis; only the brain liquefies.',
      tests: 'disease',
    },
    {
      id: 'q3',
      stem: 'A febrile hypotensive patient has warm peripheries, a wide pulse pressure, cardiac index 4.6 L/min/m2, systemic vascular resistance 480 dyn s/cm5 and lactate 4.1 mmol/L. Which is the correct mechanistic reading?',
      options: [
        { id: 'a', text: 'Cardiogenic shock, since hypotension with a raised lactate implies pump failure' },
        { id: 'b', text: 'Hypovolaemic shock, since the resistance is low from vasodilatation after volume loss' },
        { id: 'c', text: 'Distributive shock, with inducible nitric oxide synthase abolishing arteriolar tone so output is high while perfusion pressure and oxygen utilisation fail' },
        { id: 'd', text: 'Obstructive shock, since a raised lactate with hypotension indicates a mechanical block' },
      ],
      answerId: 'c',
      explanation: 'High cardiac output with low systemic vascular resistance is the signature of distributive shock and occurs in no other class. Toll-like receptor signalling drives inducible nitric oxide synthase, and the resulting continuous nitric oxide relaxes arterioles beyond what catecholamines can overcome. The lactate rises despite high flow because extraction and mitochondrial utilisation are impaired, which is why a high central venous oxygen saturation can accompany it.',
      tests: 'exam',
    },
  ],
};

export default rbpEmbolismInfarctionShock;
