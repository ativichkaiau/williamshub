import type { Lecture } from '../../lib/types';

export const ghpExerciseHeatFluidBalance: Lecture = {
  id: 'ghp-exercise-heat-fluid-balance',
  title: 'Exercise Heat Balance, Acclimation & Hydration',
  system: 'physiology',
  source: 'Ch 85 — Sports Physiology',
  updated: '2026-09-15',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'Ch 85 Sports Physiology' },
    { kind: 'mechanism', label: 'Sweat cools only when it evaporates' },
    { kind: 'exam', label: 'Collapse after exercise has several possible mechanisms' },
  ],
  highYield: [
    '**Most metabolic energy used during exercise becomes heat.** Body heat storage depends on metabolic heat production minus external work and heat exchange with the environment. Radiation, convection and conduction can remove or add heat depending on the temperature gradient. Evaporation removes heat when liquid water becomes vapour. Sweat that drips away does not provide the same cooling as sweat that evaporates, so visible sweating alone cannot establish adequate heat loss. Connect the accounting to [[ghp-body-temperature-heat-balance]].',
    '**Humidity changes the usefulness of sweating.** A small water-vapour pressure gradient between skin and the environment limits evaporation; clothing and low air movement can further impede heat transfer. If environmental temperature exceeds skin temperature, dry heat exchange may add heat rather than remove it. A person can therefore continue producing sweat while core temperature rises. Hyperthermia during exercise reflects heat accumulation without the raised hypothalamic set point characteristic of fever; the distinction is developed in [[ghp-fever-hyperthermia-hypothermia]].',
    '**Heat creates an additional circulatory demand.** Cutaneous vasodilation transfers heat toward the skin while active muscle also requires blood flow. Sweat loss reduces body water and can reduce plasma volume. During prolonged exercise, falling stroke volume can be accompanied by a compensatory rise in heart rate, often called cardiovascular drift. Cardiac output is not guaranteed to remain fully preserved when heat strain and dehydration become substantial. This links thermal balance to the output and extraction pathway in [[ghp-exercise-oxygen-delivery]].',
    '**Repeated heat exposure produces several adaptations.** Heat acclimation can expand plasma volume, reduce cardiovascular strain at a given workload, advance the onset of sweating and increase sweat capacity. Greater sweat-duct sodium reabsorption can lower sweat sodium concentration. These changes vary with the exposure protocol, individual and time since exposure; they do not make a person immune to heat illness. More dilute sweat can coexist with greater total sweat volume, so concentration and total sodium loss should not be treated as interchangeable.',
    '**Sweat loss and serum sodium describe different balances.** Sweat is usually hypotonic relative to plasma, so unreplaced sweat loss tends to remove proportionally more water than salt. However, exercise-associated hyponatraemia can occur when hypotonic fluid intake exceeds effective water excretion and losses; non-osmotic vasopressin release can impair renal water clearance. Sodium depletion may also contribute in some settings. A sodium-containing sports drink does not automatically prevent dilution if consumed in excessive volume. Neither heat nor collapse establishes the direction of the sodium disturbance.',
    '**A physiological explanation of collapse needs more than one clue.** Loss of the muscle pump immediately after stopping can reduce venous return. Heat illness, hypoglycaemia, hyponatraemia and cardiac causes are other possibilities. Central nervous system dysfunction with marked heat exposure raises concern for exertional heat stroke, which can occur while the person is still sweating. Encephalopathy from hyponatraemia can look similar. Symptoms, circumstances and appropriate measurements must therefore be considered together; these mechanisms are not a universal fluid-replacement prescription.',
  ],
  mechanism: {
    title: 'When exercise produces heat faster than it can be removed',
    steps: [
      { id: 'h1', label: 'Metabolic work increases heat production', detail: 'Only part of the energy becomes external mechanical work.' },
      { id: 'h2', label: 'Skin flow and sweating increase', detail: 'These promote heat transfer and evaporative cooling.' },
      { id: 'h3', label: 'Humidity or clothing limits evaporation', detail: 'Sweating can continue without matching the required heat loss.', emphasis: 'key' },
      { id: 'h4', label: 'Heat storage and cardiovascular strain increase', detail: 'Reduced plasma volume can further challenge stroke volume and heat transfer.' },
    ],
    branches: [{ fromId: 'h2', title: 'Water intake and excretion form a separate balance', steps: [
      { id: 'h5', label: 'Excess hypotonic intake plus impaired water clearance', detail: 'Persistent vasopressin activity can limit free-water excretion.' },
      { id: 'h6', label: 'Plasma sodium may fall', detail: 'Water excess relative to exchangeable solute can cause cellular swelling.', emphasis: 'danger' },
    ] }],
  },
  examFindings: [
    { sign: 'Heavy sweating with rising core temperature', mechanism: 'Heat loss can remain insufficient if sweat does not evaporate effectively.', significance: 'key' },
    { sign: 'Heart rate drifts upward during prolonged work in heat', mechanism: 'Reduced stroke volume and additional thermoregulatory demand increase circulatory strain.' },
    { sign: 'Confusion during or after an endurance event', mechanism: 'Several serious mechanisms can produce neurological symptoms; sweating or drinking history alone does not distinguish them.', significance: 'key' },
  ],
  investigations: [
    { clue: 'Body-mass change measured under comparable conditions', meaning: 'Can help estimate net fluid balance, but intake, urine, substrate use and other mass changes affect interpretation.' },
    { clue: 'Low serum sodium after prolonged exercise', meaning: 'Supports water excess relative to exchangeable solute, with intake, vasopressin and losses all potentially relevant.' },
    { clue: 'More dilute sweat after acclimation', meaning: 'Greater ductal sodium conservation can lower concentration without proving that total sodium loss is lower.' },
  ],
  treatment: [
    { logic: 'Why it matters', detail: 'Heat balance and water–solute balance interact but are not the same quantity. An adequate explanation must account for both the environment and the direction of the fluid imbalance.' },
    { logic: 'Where it is examined', detail: 'Predict the effects of humidity, distinguish fever from hyperthermia, explain cardiovascular drift and avoid assuming that every collapsed athlete is simply dehydrated.' },
  ],
  mnemonics: [{ hook: 'Make, move, evaporate', expansion: ['Muscle makes heat', 'Blood moves heat toward skin', 'Evaporation removes heat', 'Fluid and sodium balance still need separate accounting'] }],
  traps: [
    { questionCategory: 'Heat transfer', wrongInstinct: 'Sweat volume equals heat loss.', rightAnswer: 'Evaporated sweat provides cooling; dripping sweat contributes much less.', why: 'Humidity and clothing can prevent enough evaporation even with heavy sweating.' },
    { questionCategory: 'Fluid balance', wrongInstinct: 'A sports drink guarantees protection from hyponatraemia.', rightAnswer: 'Excess hypotonic intake can still exceed the ability to excrete water.', why: 'Serum sodium reflects water relative to solute, not the beverage label.' },
  ],
  quiz: [
    { id: 'q1', stem: 'Why can the same exercise workload cause greater heat strain in humid air?', options: [{ id: 'a', text: 'Humidity increases the vapour gradient for sweat evaporation' }, { id: 'b', text: 'Humidity reduces the capacity for evaporative heat loss' }, { id: 'c', text: 'Muscle no longer produces metabolic heat' }, { id: 'd', text: 'Radiation always removes all the extra heat' }], answerId: 'b', explanation: 'High ambient water-vapour pressure reduces the gradient supporting evaporation. Sweat production can remain high while effective cooling falls.', tests: 'mechanism' },
    { id: 'q2', stem: 'Which change is compatible with heat acclimation?', options: [{ id: 'a', text: 'Loss of all sweating responses' }, { id: 'b', text: 'Permanent immunity to heat illness' }, { id: 'c', text: 'Expanded plasma volume and earlier sweating at a given heat load' }, { id: 'd', text: 'An obligatory increase in sweat sodium concentration' }], answerId: 'c', explanation: 'Plasma-volume and sweating adaptations can reduce strain at a comparable workload. Adaptations vary and do not eliminate risk from an excessive heat load.', tests: 'mechanism' },
    { id: 'q3', stem: 'A prolonged exercise bout is followed by low serum sodium after large hypotonic fluid intake. Which mechanism can contribute?', options: [{ id: 'a', text: 'Vasopressin activity limits renal water excretion despite the water load' }, { id: 'b', text: 'All ingested water must be excreted immediately during exercise' }, { id: 'c', text: 'Sweat always contains more sodium than plasma' }, { id: 'd', text: 'A sodium-containing drink cannot dilute plasma under any circumstances' }], answerId: 'a', explanation: 'Non-osmotic vasopressin release can impair free-water excretion. Excess intake relative to losses and excretory capacity can then dilute serum sodium.', tests: 'mechanism' },
    { id: 'q4', stem: 'Sweat sodium concentration falls after acclimation, but sweat volume rises. What can be concluded about total sodium loss?', options: [{ id: 'a', text: 'It must be zero' }, { id: 'b', text: 'It must fall by the same proportion as concentration' }, { id: 'c', text: 'It depends on both concentration and volume' }, { id: 'd', text: 'It is independent of sweat volume' }], answerId: 'c', explanation: 'Amount lost equals concentration multiplied by volume. Opposing changes in those factors do not determine the net amount without further information.', tests: 'investigation' },
  ],
};

export default ghpExerciseHeatFluidBalance;
