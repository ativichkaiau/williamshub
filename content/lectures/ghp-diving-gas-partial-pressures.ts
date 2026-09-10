import type { Lecture } from '../../lib/types';

export const ghpDivingGasPartialPressures: Lecture = {
  id: 'ghp-diving-gas-partial-pressures',
  title: 'Deep-Sea Diving: Gas Partial Pressures at Depth',
  system: 'physiology',
  source: 'Ch 44 — Physiology of Deep-Sea Diving & Hyperbaric Conditions',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'Ch 44 Deep-Sea Diving' },
    { kind: 'mechanism', label: 'Partial pressure and volume at depth' },
    { kind: 'exam', label: 'Narcosis, oxygen toxicity, barotrauma' },
  ],

  highYield: [
    '**Depth is simply a pressure multiplier, and every partial pressure rides up with it.** Each **10 metres** of sea water adds **1 atmosphere**, so 10 m is 2 atm absolute, 30 m is 4 atm and 90 m is 10 atm. Composition does not change, so by the law of partial pressures each gas is scaled by the same factor: breathing air at **4 atm** gives a nitrogen partial pressure near **2,400 mmHg** and an oxygen partial pressure near **640 mmHg**. This is the exact inverse of altitude, where every partial pressure is divided down as in [[ghp-high-altitude-acclimatisation]].',
    '**Nitrogen narcosis is anaesthesia by an inert gas, and it starts shallower than people expect.** Nitrogen is highly **lipid soluble**, so at raised partial pressure it dissolves into neuronal membranes and depresses excitability like a weak inhalational anaesthetic. On air, euphoria and impaired judgement typically begin around **30 m**, drowsiness by **50 m**, and by **75 m** a diver is effectively useless. It clears completely on ascent and leaves no deficit — which is why the discriminator is depth and reversibility, not the symptom itself. **Helium** is far less lipid soluble and therefore far less narcotic.',
    '**Oxygen toxicity has two forms separated by dose and tempo.** The **central nervous** form appears above roughly **2 atm** of oxygen and ends in **seizure**, preceded by twitching of the lips and face, nausea, vertigo, tunnel vision and irritability. The **pulmonary** form needs only about **0.5 atm** sustained for many hours and gives substernal burning, cough and a falling vital capacity, then exudation and eventually fibrosis. Both come from **reactive oxygen species** overwhelming antioxidant defences; the difference is that a seizure underwater means drowning.',
    '**Carbon dioxide retention at depth is mechanical, and it makes everything else worse.** Gas density rises in proportion to absolute pressure, so at **4 atm** the work of breathing through a dense gas plus regulator resistance and external dead space is substantially higher, and divers often skip-breathe to save gas. Retained CO₂ causes headache, dyspnoea and confusion, **potentiates nitrogen narcosis**, and raises the risk of an oxygen seizure by cerebral vasodilation that delivers more oxygen to the brain — the chemoreceptor arithmetic behind this is in [[ghp-chemoreceptor-control]].',
    '**Gas volume varies inversely with pressure, and the steepest part of that curve is the first 10 metres.** Going from the surface to 10 m **halves** a gas volume; going from 30 m to 40 m changes it by only a fifth. On the way **down** this produces squeeze — middle ear, sinus, mask and, in breath-hold diving, the lung once it is compressed below residual volume. On the way **up** the same gas re-expands.',
    '**The single rule that kills more divers than any other is breath-holding on ascent.** A lung filled at depth with compressed gas and then carried upward with a closed glottis over-distends and ruptures: **pneumothorax, mediastinal emphysema** and, worst, **arterial gas embolism**, which can follow an ascent of only a metre or two and presents within minutes of surfacing with collapse, hemiparesis or seizure. Immediate onset points here; delayed onset points to the nitrogen problem in [[ghp-decompression-hyperbaric-therapy]].',
  ],

  mechanism: {
    title: 'Depth multiplies every partial pressure and divides every volume',
    steps: [
      { id: 's1', label: 'Each 10 m of sea water adds 1 atm to ambient pressure', emphasis: 'key' },
      { id: 's2', label: 'Composition unchanged → every gas partial pressure scales by the same factor', emphasis: 'key' },
      { id: 's3', label: 'High nitrogen partial pressure dissolves in neuronal lipid → narcosis from about 30 m', emphasis: 'key' },
      { id: 's4', label: 'Oxygen above ~2 atm → reactive oxygen species and CNS seizure', emphasis: 'danger' },
      { id: 's5', label: 'Dense gas plus dead space → CO₂ retention that worsens narcosis and seizure risk', emphasis: 'danger' },
      { id: 's6', label: 'Volume falls inversely with pressure → squeeze on descent, over-expansion on ascent', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Euphoria, fixation and clumsy task performance at 35–40 m on air, gone on ascent', mechanism: 'Nitrogen dissolving in neuronal membranes — reversible inert gas narcosis', significance: 'key' },
    { sign: 'Twitching of the lips and face with tunnel vision on an oxygen-rich mix at depth', mechanism: 'Prodrome of central nervous system oxygen toxicity before a seizure', significance: 'key' },
    { sign: 'Headache, dyspnoea and confusion in a diver using a slow deliberate breathing pattern', mechanism: 'CO₂ retention from skip-breathing through dense gas with added dead space', significance: 'key' },
    { sign: 'Ear pain on descent with a retracted, injected or haemorrhagic drum', mechanism: 'Middle-ear squeeze when the Eustachian tube fails to equalise a shrinking gas volume', significance: 'supportive' },
    { sign: 'Substernal burning and a falling vital capacity after prolonged hyperbaric oxygen', mechanism: 'Pulmonary oxygen toxicity from sustained moderate hyperoxia', significance: 'supportive' },
    { sign: 'Collapse, hemiparesis or seizure within minutes of surfacing from a panicked ascent', mechanism: 'Alveolar rupture with arterial gas embolism from breath-holding on ascent', significance: 'key' },
  ],

  investigations: [
    { clue: 'Dive log showing 40 m on compressed air', meaning: 'Narcosis is the expected physiology at that depth, not a diagnosis of exclusion' },
    { clue: 'Gas analysis giving an inspired oxygen partial pressure above about 1.6 atm at working depth', meaning: 'Unacceptable central nervous oxygen toxicity risk for that mix and depth' },
    { clue: 'Symptom onset within minutes of surfacing after a rapid ascent', meaning: 'Arterial gas embolism rather than decompression sickness' },
    { clue: 'Chest imaging showing pneumomediastinum or subcutaneous emphysema after a dive', meaning: 'Pulmonary barotrauma from expanding gas against a closed glottis' },
    { clue: 'Vital capacity falling across successive hyperbaric treatments', meaning: 'Cumulative pulmonary oxygen dose approaching the toxic range' },
    { clue: 'Cylinder emptying about four times faster at 30 m than at the surface', meaning: 'The regulator delivers gas at ambient pressure, so consumption scales with absolute pressure' },
  ],

  treatment: [
    {
      logic: 'Change the gas before you try to change the diver',
      detail: 'Beyond about 30–40 m the fix is not willpower but composition. **Helium** replaces nitrogen because it is far less lipid soluble, so much less narcotic, and far **less dense**, which cuts the work of breathing and the CO₂ retention that potentiates everything else. The oxygen fraction is **reduced** as depth increases to keep the inspired oxygen partial pressure below about **1.6 atm**. Very deep helium diving then meets its own limit in the tremor and dizziness of high-pressure nervous syndrome, mitigated by adding a little nitrogen back.',
    },
    {
      logic: 'Equalise on the way down, never hold your breath on the way up',
      detail: 'Descent problems are squeeze and are prevented by **active equalisation** of ear and sinus; a diver who cannot equalise must stop descending. Ascent problems are over-expansion, and the rule is to **exhale continuously and ascend slowly**. Suspected arterial gas embolism is a time-critical emergency: **100% oxygen**, supine positioning, fluids and urgent recompression, handled with the chamber physiology in [[ghp-decompression-hyperbaric-therapy]].',
    },
  ],

  mnemonics: [
    { hook: 'Ten metres, one atmosphere', expansion: ['Every 10 m adds 1 atm absolute', 'Partial pressures multiply by the same factor', 'Volumes shrink by the reciprocal', 'The biggest volume change is the first 10 m'] },
    { hook: 'VENTID before the seizure', expansion: ['Vision — tunnel vision', 'Ears — ringing', 'Nausea', 'Twitching — lips and face', 'Irritability', 'Dizziness'] },
  ],

  traps: [
    {
      questionCategory: 'The confused diver at 40 metres on air',
      wrongInstinct: 'Hypoxia — a confused patient must be short of oxygen',
      rightAnswer: 'Nitrogen narcosis, with an oxygen partial pressure that is high rather than low',
      why: 'At depth every partial pressure is multiplied up; hypoxia is a surface and ascent problem, not a depth problem on air',
    },
    {
      questionCategory: 'Collapse within two minutes of surfacing',
      wrongInstinct: 'Decompression sickness, so give oxygen and observe',
      rightAnswer: 'Arterial gas embolism from pulmonary barotrauma, needing immediate recompression',
      why: 'Timing separates them — embolism is immediate after a rapid or breath-held ascent, decompression sickness is delayed by minutes to hours',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A diver at 40 m breathing compressed air becomes euphoric, fixates on a trivial task and makes errors, then is entirely normal at the surface. What is the mechanism?',
      options: [
        { id: 'a', text: 'Arterial hypoxaemia from increased work of breathing' },
        { id: 'b', text: 'Nitrogen at high partial pressure dissolving in neuronal lipid membranes' },
        { id: 'c', text: 'Cerebral vasoconstriction from hypocapnia' },
        { id: 'd', text: 'Early central nervous oxygen toxicity' },
      ],
      answerId: 'b',
      explanation: 'At 5 atm absolute the nitrogen partial pressure is roughly five times its sea-level value. Nitrogen is highly lipid soluble, so it partitions into neuronal membranes and depresses excitability much as an inhalational anaesthetic does. Oxygen partial pressure at depth is high, not low, so hypoxia is not the answer, and the complete reversal on ascent excludes a structural or toxic injury.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'For a breath-hold diver, over which segment of the dive does lung gas volume change by the greatest proportion?',
      options: [
        { id: 'a', text: 'Surface to 10 m' },
        { id: 'b', text: '10 m to 20 m' },
        { id: 'c', text: '20 m to 30 m' },
        { id: 'd', text: '30 m to 40 m' },
      ],
      answerId: 'a',
      explanation: 'Volume varies inversely with absolute pressure. Surface to 10 m doubles the pressure from 1 to 2 atm and therefore halves the volume, a 50 percent change. From 30 to 40 m pressure rises only from 4 to 5 atm, a fifth. That is why squeeze on descent and over-expansion injury on ascent are both concentrated in the shallowest water, and why an ascent from a couple of metres with a closed glottis can still rupture a lung.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A working diver on an oxygen-enriched mix at 40 m reports lip twitching, nausea and narrowing vision. What is the correct immediate response?',
      options: [
        { id: 'a', text: 'Continue the task but slow the breathing rate to conserve gas' },
        { id: 'b', text: 'Descend slightly to reduce buoyancy and stabilise' },
        { id: 'c', text: 'Reduce the inspired oxygen partial pressure at once by a controlled ascent to shallower depth' },
        { id: 'd', text: 'Switch to pure oxygen to correct the presumed hypoxia' },
      ],
      answerId: 'c',
      explanation: 'Those symptoms are the prodrome of a central nervous oxygen seizure, which underwater means drowning. The only useful intervention is to cut the oxygen dose, and since dose equals fraction times absolute pressure, a controlled ascent does it immediately. Slowing the breathing would retain CO₂ and raise seizure risk further, and switching to pure oxygen would increase the very dose that is causing the problem.',
      tests: 'treatment',
    },
  ],
};

export default ghpDivingGasPartialPressures;
