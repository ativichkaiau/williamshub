import type { Lecture } from '../../lib/types';

export const ghpFeverHyperthermiaHypothermia: Lecture = {
  id: 'ghp-fever-hyperthermia-hypothermia',
  title: 'Fever, Hyperthermia & Hypothermia',
  system: 'physiology',
  source: 'Ch 74 — Body Temperature, Temperature Regulation & Fever',
  updated: '2026-09-14',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'Ch 74 Body Temperature & Fever' },
    { kind: 'mechanism', label: 'Fever raises the set point; hyperthermia overwhelms it' },
    { kind: 'exam', label: 'Antipyretics work in fever and not in heat stroke' },
  ],

  highYield: [
    '**The spine of the whole topic: fever is a REGULATED rise in the set point, hyperthermia is an UNREGULATED rise against a normal one.** In **fever** the thermostat has been moved to, say, 39.5 and is working perfectly toward it — but core is still 37, so the patient is **below** target and the entire **cold-defence programme runs**: they **feel cold**, **vasoconstrict** (pale cold hands and feet despite a climbing temperature), **shiver violently** as rigors, pile on blankets and curl up. Every one of those signs is the thermostat doing its job. In **hyperthermia** the set point is untouched at 37 and core has been driven **above** it by heat load or failed dissipation, so the **heat-defence programme runs**: the patient **feels hot**, is **flushed and vasodilated**, and **sweats** until sweating fails. The compression worth memorising: **in fever the thermostat is lying; in hyperthermia the thermostat is losing.** The clinical-layer treatment of this split is in [[fcp1-fever-pathophysiology]].',
    '**Derive the therapeutic consequence rather than memorising it — it falls straight out of the model.** Antipyretics do not cool anybody. They **inhibit cyclooxygenase, cut prostaglandin E2 production, and lower the set point back toward normal**; the patient is then suddenly **above** their set point, so their own heat-loss effectors fire and the temperature comes down. That mechanism has an absolute precondition: **there must be a raised set point to reset**. In heat stroke the set point was never raised, so **paracetamol and NSAIDs do precisely nothing** — and paracetamol is actively unwise in a patient whose liver may already be injured by the heat. **Heat stroke is treated by physically moving the heat balance equation**: immersion or evaporative cooling with airflow ([[ghp-body-temperature-heat-balance]]). The reverse case is just as instructive: **physically cooling a febrile patient without an antipyretic fights the thermostat**, which responds by vasoconstricting and shivering — and shivering generates heat, so tepid sponging alone can raise the temperature it was meant to lower.',
    '**The pyrogen pathway, and the elegant reason the cytokines never have to enter the brain.** **Exogenous pyrogen** — classically **endotoxin, the lipopolysaccharide of gram-negative organisms** — is taken up by **macrophages and monocytes**, which release the **endogenous pyrogens IL-1, IL-6 and TNF**. These cannot cross the blood-brain barrier and do not need to: they act on the **organum vasculosum of the lamina terminalis**, a **circumventricular organ that lacks a blood-brain barrier** and sits immediately adjacent to the preoptic area. There they induce **COX-2**, which generates **prostaglandin E2**, which acts on **EP3 receptors on preoptic neurons** and **raises the set point**. Everything therapeutic hangs off that chain: **NSAIDs and paracetamol inhibit COX** at the final step, while **glucocorticoids act further upstream** by suppressing cytokine transcription and phospholipase A2. Fever is therefore not a failure of regulation but a **deliberate, cytokine-commanded change in the target value**.',
    '**The rigor and the crisis are the same mechanism at opposite ends, and explaining the flush from the model is the payoff.** While the set point is rising, core lags behind it, the error is a cold error, and you see a **rigor** — teeth chattering, vasoconstricted, the patient demanding blankets at 38.5 and rising. Once core reaches the new target, the fever **plateaus and is regulated there** as tightly as 37 normally is. Then the pyrogen is cleared or an antipyretic acts, and the **set point drops abruptly back to 37 while core is still 39.5**: the patient is now enormously **above** target, and every heat-loss effector fires at once — **sudden vasodilatation, a flushed appearance, and drenching sweat**. That is the **crisis**, or defervescence, and it is simply the same control loop running in the opposite direction. Predicting the flush from the set-point model, rather than listing it, is the thing that shows you have understood the chapter.',
    '**Hyperthermias sort by where the heat came from, and the discriminator is always CNS dysfunction.** **Heat exhaustion**: salt and water depletion with thermoregulation still intact — core usually **below 40**, **sweating present**, cramps, dizziness and syncope, but **mentation normal**; rest, shade and fluids fix it. **Heat stroke**: core **above 40 with CNS dysfunction** — confusion, seizure, coma. That neurological failure is the discriminator, not the number and not the skin. Do not be caught by the textbook phrase about hot dry skin: it fits **classic heat stroke** in an elderly, anhidrotic patient in a heat wave, but **exertional heat stroke in a young athlete is frequently still sweating profusely**. Untreated it becomes a systemic inflammatory catastrophe with rhabdomyolysis, DIC and hepatic failure. Separately, two drug-triggered hyperthermias are **muscular in origin, not hypothalamic**: **malignant hyperthermia** (an RYR1 channel defect unmasked by volatile agents or suxamethonium, where **a rising end-tidal CO2 is the earliest sign** and **dantrolene** the treatment) and **neuroleptic malignant syndrome** (dopamine blockade, lead-pipe rigidity, evolving over days rather than minutes). Because their heat is manufactured by muscle, **the treatment is to stop the muscle** — antipyretics are irrelevant to all of them.',
    '**Hypothermia is best learned as a staged loss of function, and the crucial threshold is where the patient stops being able to rewarm.** Shivering is **maximal near 35** and **ceases between 30 and 32**, and that is the point of no return in physiological terms — below it **the patient can no longer generate heat, so cooling accelerates and the deterioration becomes self-reinforcing**. Along the way: confusion, ataxia and the notorious **paradoxical undressing**; loss of consciousness around **30**; failure of hypothalamic regulation itself below about **29**. Cardiac events track the same descent — bradycardia, the **J or Osborn wave at the QRS-ST junction**, then atrial fibrillation and, below 30, an **irritable myocardium in which rough handling can precipitate VF**, and finally asystole. Because a cold brain has a **metabolic rate falling some 6 to 7 per cent per degree**, hypothermia is neuroprotective and the classic rule holds: **nobody is dead until they are warm and dead** — resuscitate and rewarm before you decide. Rewarming has its own trap, the **afterdrop and rewarming collapse**, when peripheral vasodilatation returns cold acidaemic blood to the core, so **rewarm the core preferentially**. And the same physiology is used on purpose in **targeted temperature management after cardiac arrest and cooling for neonatal hypoxic-ischaemic encephalopathy** — the deliberate exploitation of a mechanism that usually kills. The bedside sorting of a febrile patient continues in [[fcp1-fever-approach-differential]].',
  ],

  mechanism: {
    title: 'Pyrogen → PGE2 at the OVLT → set point rises → cold defence until core reaches the new target',
    steps: [
      { id: 's1', label: 'Exogenous pyrogen such as endotoxin is taken up by macrophages, which release IL-1, IL-6 and TNF', detail: 'These are the endogenous pyrogens; the exogenous trigger does not act on the hypothalamus itself.' },
      { id: 's2', label: 'The cytokines act at the organum vasculosum of the lamina terminalis, outside the blood-brain barrier and next to the preoptic area', detail: 'A circumventricular organ, so the cytokines never need to cross into the brain parenchyma.' },
      { id: 's3', label: 'COX-2 there generates prostaglandin E2, which acts on EP3 receptors and raises the set point', detail: 'This is the step NSAIDs and paracetamol inhibit; glucocorticoids act further upstream on cytokine production.', emphasis: 'key' },
      { id: 's4', label: 'Core is now below the set point, so the cold-defence programme runs — the patient feels cold, vasoconstricts and has rigors', detail: 'Every sign of the rising phase of a fever is the thermostat working correctly toward a higher target.', emphasis: 'key' },
      { id: 's5', label: 'Temperature is then regulated at the new target; when the set point falls back, the patient is far above it and flushes and sweats — the crisis', emphasis: 'key' },
      { id: 's6', label: 'Contrast hyperthermia: the set point was never raised, heat load simply wins, and no antipyretic can help — cooling must be physical', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Rigors with cold, pale peripheries while the temperature is actively climbing', mechanism: 'Core lies below a newly raised set point, so the cold-defence programme of vasoconstriction and shivering is running correctly', significance: 'key' },
    { sign: 'Sudden flush and drenching sweat as a fever breaks', mechanism: 'The set point falls back to normal while core is still high, so the patient is abruptly far above target and heat-loss effectors fire maximally', significance: 'key' },
    { sign: 'A flushed, vasodilated patient at 41 degrees who does not respond to paracetamol', mechanism: 'The set point was never raised, so there is nothing for cyclooxygenase inhibition to reset — this is hyperthermia', significance: 'key' },
    { sign: 'Core above 40 with confusion or seizure in a collapsed runner who is still sweating heavily', mechanism: 'Exertional heat stroke — CNS dysfunction is the discriminator from heat exhaustion, and preserved sweating does not exclude it', significance: 'key' },
    { sign: 'Rising end-tidal CO2 with masseter spasm and generalised rigidity minutes after a volatile anaesthetic', mechanism: 'Malignant hyperthermia — uncontrolled RYR1 calcium release makes muscle the heat source, so dantrolene rather than an antipyretic is the answer', significance: 'key' },
    { sign: 'A J wave at the QRS-ST junction in a patient at 29 degrees who has stopped shivering', mechanism: 'Hypothermia past the threshold where heat can still be generated, with the cold myocardium irritable and prone to VF on handling', significance: 'key' },
  ],

  investigations: [
    { clue: 'The site at which pyrogenic cytokines act without ever crossing the blood-brain barrier', meaning: 'The organum vasculosum of the lamina terminalis, a circumventricular organ lying next to the preoptic area' },
    { clue: 'The final mediator that raises the set point, and the enzyme antipyretics inhibit to lower it', meaning: 'Prostaglandin E2 acting on EP3 receptors, generated by COX-2 — the step blocked by NSAIDs and paracetamol' },
    { clue: 'The single feature that separates heat exhaustion from heat stroke', meaning: 'CNS dysfunction, with core usually above 40 — absent sweating supports classic heat stroke but exertional cases often still sweat' },
    { clue: 'The drug for a hyperthermia whose heat is manufactured by skeletal muscle', meaning: 'Dantrolene, which blocks RYR1 calcium release in malignant hyperthermia; antipyretics are useless because the set point is normal' },
    { clue: 'The ECG sign of significant hypothermia, and the temperature at which the myocardium becomes irritable', meaning: 'The J or Osborn wave at the QRS-ST junction; below 30 degrees rough handling can precipitate ventricular fibrillation' },
    { clue: 'The temperature at which shivering ceases and the patient can no longer rewarm themselves', meaning: 'About 30 to 32 degrees C — beyond it heat production fails, cooling accelerates and the decline becomes self-reinforcing' },
  ],

  treatment: [
    { logic: 'Decide first whether the set point moved — everything else follows', detail: 'One question sorts every hot patient. **Is the thermostat lying, or losing?** If the patient **feels cold, is vasoconstricted and shivering**, the set point is up and this is **fever**: an antipyretic works because there is a set point to reset, and physical cooling on its own will only provoke shivering. If the patient **feels hot, is vasodilated and either sweating or has stopped being able to**, the set point is normal and this is **hyperthermia**: **antipyretics are futile** and the only effective intervention is **physical cooling — immersion, or wetting the skin with forced airflow** — plus removing the cause. Then subdivide the hyperthermias by heat source: **environmental** (heat exhaustion and heat stroke), or **muscular and drug-triggered** (malignant hyperthermia, neuroleptic malignant syndrome, serotonin syndrome), where the muscle itself must be stopped with dantrolene or benzodiazepines and the trigger withdrawn. **Temperatures above 41 degrees threaten protein denaturation and are a time-critical emergency whatever the cause**, but the cause still dictates which lever works.' },
    { logic: 'Where it is examined, and the hypothermia rules worth carrying', detail: 'The examined discriminators are consistent. **Why a febrile patient shivers while getting hotter** — core is below a raised set point. **Why the same patient later floods with sweat** — the set point fell while core was still high. **Why paracetamol fails in heat stroke** — nothing was ever reset. **Why CNS dysfunction, not the thermometer, separates heat stroke from heat exhaustion**. And on the cold side: **shivering stops at 30 to 32 degrees**, after which the patient cannot self-rewarm; the **J (Osborn) wave** appears; **nobody is dead until they are warm and dead**, because a cold brain runs at 6 to 7 per cent less metabolism per degree; and **beware the afterdrop**, since warming the periphery first returns cold acidaemic blood to the core. The same protection is harnessed deliberately in **targeted temperature management after cardiac arrest and in neonatal hypoxic-ischaemic encephalopathy**. The control system that all of this is perturbing is in [[ghp-hypothalamic-thermostat-set-point]].' },
  ],

  mnemonics: [
    {
      hook: 'Fever the thermostat lies, hyperthermia the thermostat loses',
      expansion: [
        'Fever: set point raised, core below it, so cold defence — feels cold, vasoconstricted, rigors, blankets',
        'Hyperthermia: set point normal, core above it, so heat defence — feels hot, vasodilated, sweating until it fails',
        'Therefore antipyretics work only in fever; heat stroke needs physical cooling',
      ],
    },
    {
      hook: 'Rigor going up, crisis coming down',
      expansion: [
        'Set point rises first and core chases it — the lag is felt as a rigor',
        'Core reaches target and the fever plateaus, regulated as tightly as 37 normally is',
        'Set point drops back while core is still high — sudden vasodilatation and drenching sweat is the crisis',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'Why an antipyretic fails in one hot patient and works in another',
      wrongInstinct: 'Paracetamol lowers body temperature, so it should be given to any patient with a temperature of 41',
      rightAnswer: 'Antipyretics lower the set point, so they only work when the set point was raised — in heat stroke there is nothing to reset',
      why: 'The drug acts on cyclooxygenase and prostaglandin E2, not on heat exchange; heat stroke has a normal set point and needs physical cooling instead.',
    },
    {
      questionCategory: 'Separating heat stroke from heat exhaustion',
      wrongInstinct: 'Look for hot dry skin, since absent sweating is what defines heat stroke',
      rightAnswer: 'CNS dysfunction with a core above 40 is the discriminator; sweating may still be profuse',
      why: 'Anhidrosis fits classic heat stroke in the elderly, but exertional heat stroke in a young athlete typically still sweats — waiting for dry skin costs the patient the diagnosis.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A man with pneumonia has a temperature of 38.6 degrees C and rising. He is shivering, his hands and feet are cold and pale, and he asks for more blankets. The best explanation is that:',
      options: [
        { id: 'a', text: 'His heat loss mechanisms have failed, so he is passively accumulating heat' },
        { id: 'b', text: 'His hypothalamic set point has been raised and his core temperature is still below it, so cold-defence responses are running' },
        { id: 'c', text: 'Endotoxin is acting directly on cutaneous vessels to cause vasoconstriction' },
        { id: 'd', text: 'Peripheral vasoconstriction is a compensatory response to the hypotension of sepsis rather than a thermoregulatory one' },
      ],
      answerId: 'b',
      explanation: 'Cytokine-driven prostaglandin E2 at the organum vasculosum has moved the set point above the current core temperature, so the error signal is a cold error and the full cold-defence programme runs — vasoconstriction, shivering, cold-seeking behaviour reversed into warmth-seeking. Every sign here is the thermostat functioning correctly toward a higher target, which is exactly what separates fever from hyperthermia, where loss mechanisms are overwhelmed and the patient is flushed and hot.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A 76-year-old woman is found during a heat wave with a core temperature of 41.2 degrees C, confusion, hot flushed skin and no sweating. She is given 1 g of paracetamol with no effect on her temperature over the next hour. The reason the paracetamol failed is that:',
      options: [
        { id: 'a', text: 'The dose was too low to inhibit cyclooxygenase adequately at this temperature' },
        { id: 'b', text: 'Paracetamol works by lowering a raised set point, and in heat stroke the set point was never raised' },
        { id: 'c', text: 'Paracetamol requires intact sweating to exert its antipyretic effect' },
        { id: 'd', text: 'Prostaglandin E2 is not produced in elderly patients' },
      ],
      answerId: 'b',
      explanation: 'Antipyretics do not remove heat. They inhibit cyclooxygenase, reduce prostaglandin E2 at the preoptic area and lower the set point, after which the heat-loss effectors of the patient bring the temperature down. That requires a raised set point to exist. Heat stroke is an unregulated rise against a normal set point, so there is nothing to reset and the only effective intervention is physical cooling. Paracetamol is also unwise here, since heat stroke commonly injures the liver.',
      tests: 'treatment',
    },
    {
      id: 'q3',
      stem: 'A hiker is rescued with a core temperature of 28 degrees C. He is unconscious, not shivering, and has no palpable pulse. His ECG shows a slow rhythm with a J wave at the QRS-ST junction. Which statement is correct?',
      options: [
        { id: 'a', text: 'Absent shivering indicates hypothalamic damage and an irreversible injury' },
        { id: 'b', text: 'He should be rewarmed peripherally as fast as possible using hot packs on the limbs' },
        { id: 'c', text: 'Resuscitation should continue during rewarming, because the cold brain is protected and death cannot be declared until he is warm' },
        { id: 'd', text: 'The J wave indicates myocardial infarction and should be treated as such' },
      ],
      answerId: 'c',
      explanation: 'Cerebral metabolic rate falls roughly 6 to 7 per cent per degree, so profound hypothermia is neuroprotective and full recovery after prolonged arrest is well described — hence the rule that nobody is dead until warm and dead. Shivering ceases between 30 and 32 degrees as a normal consequence of the temperature, not as evidence of brain injury. Peripheral rewarming risks afterdrop and rewarming collapse by returning cold acidaemic blood to the core, so core rewarming is preferred, and the J or Osborn wave is a hypothermia sign rather than an infarct.',
      tests: 'treatment',
    },
  ],
};

export default ghpFeverHyperthermiaHypothermia;
