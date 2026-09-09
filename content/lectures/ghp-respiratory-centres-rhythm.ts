import type { Lecture } from '../../lib/types';

export const ghpRespiratoryCentresRhythm: Lecture = {
  id: 'ghp-respiratory-centres-rhythm',
  title: 'Respiratory Centres & Rhythm Generation',
  system: 'respiratory',
  source: 'Ch 41 — Regulation of Respiration',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'Ch 41 Regulation of Respiration' },
    { kind: 'mechanism', label: 'Inspiratory ramp' },
    { kind: 'exam', label: 'Breathing pattern' },
  ],

  highYield: [
    '**The rhythm is made in the medulla, and only the medulla is essential.** The **dorsal respiratory group**, lying in and around the **nucleus tractus solitarius**, generates the basic inspiratory pattern, with the **pre-Bötzinger complex** of the upper ventral column acting as the pacemaker kernel. Everything above this level — pons, limbic system, cortex — modifies the rhythm rather than creating it, which is why a preparation transected above the medulla still breathes.',
    '**Inspiration is a ramp, not a switch, and the ramp has two independently adjustable settings.** Inspiratory output rises **progressively** over about **2 seconds** and then stops abruptly, letting elastic recoil drive passive expiration over about **3 seconds**. The **rate of rise** of the ramp sets **tidal volume**; the **point at which it is cut off** sets **respiratory rate**. Exercise steepens the ramp and terminates it early, so breaths become both deeper and faster.',
    '**The ventral respiratory group is a silent reserve circuit.** It contributes almost nothing to quiet breathing, during which expiration is entirely **passive**. It is recruited only when ventilatory drive is high, and it then supplies **forced expiration** through the abdominal wall and internal intercostals as well as extra inspiratory output. Abdominal muscle use at rest is therefore always abnormal — it means the reserve has already been switched on.',
    '**The pneumotaxic centre is a timer, not a driver.** Signals from the **nucleus parabrachialis** of the upper pons switch off the inspiratory ramp early. A **strong** pneumotaxic signal shortens inspiration to as little as **0.5 s** and allows rate to climb toward **30–40/min**; a **weak** signal lets inspiration run for **5 s** or more with a slow rate. Destroying it does not abolish breathing — it makes breaths long, deep and slow.',
    '**The apneustic centre only reveals itself when two brakes are removed together.** Lower pontine apneustic drive prolongs inspiration, but frank **apneusis** — sustained inspiratory gasps — appears only when the **pneumotaxic centre and both vagi** are interrupted at the same time. Its exam value is exactly that: it proves the pontine timer and vagal stretch input are **redundant** inspiratory brakes, either of which is sufficient alone.',
    '**The Hering-Breuer inflation reflex is a safety valve, not a normal regulator.** Stretch receptors in the **smooth muscle of bronchi and bronchioles** signal through the **vagus** to the dorsal group and cut off the ramp — but only once tidal volume exceeds roughly **1.5 L**, about three times normal. It therefore guards against overinflation during heavy breathing and does essentially nothing at rest, where depth and rate are set by chemical drive as described in [[ghp-chemoreceptor-control]].',
  ],

  mechanism: {
    title: 'How one breath is timed',
    steps: [
      { id: 's1', label: 'Pre-Bötzinger pacemaker kernel discharges in the upper ventral medulla', emphasis: 'key' },
      { id: 's2', label: 'Dorsal respiratory group builds an inspiratory ramp over about 2 s', emphasis: 'key' },
      { id: 's3', label: 'Ramp slope sets tidal volume via phrenic and external intercostal output' },
      { id: 's4', label: 'Pneumotaxic signal, or vagal stretch input, terminates the ramp', emphasis: 'key' },
      { id: 's5', label: 'Elastic recoil drives passive expiration over about 3 s' },
      { id: 's6', label: 'Ventral group recruited only at high drive, adding forced expiration', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Abdominal muscle contraction during expiration at rest', mechanism: 'Ventral respiratory group recruited — never used in quiet breathing', significance: 'key' },
    { sign: 'Slow, deep, prolonged inspirations after an upper pontine lesion', mechanism: 'Loss of the pneumotaxic cut-off lets the inspiratory ramp run on', significance: 'key' },
    { sign: 'Apneustic breathing with sustained inspiratory holds', mechanism: 'Lower pontine drive unopposed once pneumotaxic and vagal brakes are both lost', significance: 'supportive' },
    { sign: 'Normal breathing awake but severe hypoventilation asleep', mechanism: 'Automatic medullary drive impaired while the voluntary cortical pathway is intact', significance: 'key' },
    { sign: 'Sighing, rate change and breath-holding with anxiety, pain or fever', mechanism: 'Limbic and hypothalamic input modulating the medullary generator', significance: 'supportive' },
    { sign: 'Little change in resting tidal volume after vagal blockade', mechanism: 'Hering-Breuer reflex is not engaged below about 1.5 L', significance: 'key' },
  ],

  investigations: [
    { clue: 'Tidal volume rises while respiratory rate barely changes', meaning: 'The ramp has steepened without an earlier cut-off — depth-dominant increase in drive' },
    { clue: 'Rate of 35/min with a tidal volume of 250 mL', meaning: 'Early ramp termination — rapid shallow breathing typical of stiff, poorly compliant lungs' },
    { clue: 'Normal waking blood gases with marked nocturnal hypercapnia', meaning: 'Automatic drive failure unmasked when the voluntary contribution is withdrawn in sleep' },
    { clue: 'Tidal volumes above roughly 1.5 L during heavy exercise', meaning: 'The one setting in which the Hering-Breuer inflation reflex actually contributes' },
    { clue: 'Rhythmic breathing persisting after transection above the medulla', meaning: 'Confirms the rhythm generator is medullary and the pons is only modulatory' },
    { clue: 'Voluntary breath-hold broken by an irresistible urge to breathe', meaning: 'The break point is set by rising CO₂ and H⁺, not by falling PO₂' },
  ],

  treatment: [
    {
      logic: 'Read the pattern, not just the minute ventilation',
      detail: 'Rate and tidal volume are set by **separate** properties of the same ramp. **Rapid shallow** breathing points to early cut-off from stiff lungs or a high elastic load; **slow and deep** breathing points to loss of the pontine timer. Minute ventilation can be identical in both, so the number alone hides the lesion.',
    },
    {
      logic: 'An intact voluntary pathway never proves intact automatic drive',
      detail: 'Cortical output reaches the respiratory motor neurons **directly** through corticospinal fibres, bypassing the medullary generator entirely. A patient who breathes deeply on command may still become **apnoeic in sleep**, so the assessment that matters is the one made when the cortex is off duty.',
    },
  ],

  mnemonics: [
    { hook: 'DRG drives, VRG reserves', expansion: ['Dorsal group: the quiet-breathing ramp', 'Ventral group: silent at rest', 'Recruited only for forced expiration'] },
    { hook: 'Slope is volume, stop is rate', expansion: ['Steeper ramp gives a bigger tidal volume', 'Earlier cut-off gives a faster rate', 'Exercise does both at once'] },
  ],

  traps: [
    {
      questionCategory: 'What sets the resting breathing pattern',
      wrongInstinct: 'The Hering-Breuer reflex regulates normal tidal volume',
      rightAnswer: 'It engages only above about 1.5 L and is a protective anti-overinflation reflex',
      why: 'Vagal blockade barely alters quiet breathing in an adult',
    },
    {
      questionCategory: 'Where the respiratory rhythm originates',
      wrongInstinct: 'The pneumotaxic centre generates the rhythm',
      rightAnswer: 'The medullary pre-Bötzinger complex and dorsal group generate it; the pons only times the cut-off',
      why: 'A pontine lesion leaves breathing intact but slow and deep',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'After a lesion of the upper pons, a patient breathes slowly with unusually prolonged, deep inspirations. Which function has been lost?',
      options: [
        { id: 'a', text: 'The medullary rhythm generator' },
        { id: 'b', text: 'The pneumotaxic signal that terminates the inspiratory ramp' },
        { id: 'c', text: 'Peripheral chemoreceptor input' },
        { id: 'd', text: 'The ventral respiratory group' },
      ],
      answerId: 'b',
      explanation: 'The pneumotaxic centre in the nucleus parabrachialis limits the duration of inspiration. Losing it allows the ramp to run on, so inspiration lengthens toward 5 s, breaths become deep and rate falls. The rhythm itself is medullary and survives the lesion.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Bilateral vagal blockade in a healthy resting adult produces almost no change in tidal volume or respiratory rate. Why?',
      options: [
        { id: 'a', text: 'The Hering-Breuer reflex is only activated above a tidal volume of about 1.5 L' },
        { id: 'b', text: 'Pulmonary stretch receptors are carried in the phrenic nerve' },
        { id: 'c', text: 'Vagal afferents reach only the ventral respiratory group, which is inactive at rest' },
        { id: 'd', text: 'Central chemoreceptors immediately compensate for the loss' },
      ],
      answerId: 'a',
      explanation: 'Pulmonary stretch receptors do run in the vagus, but the inflation reflex has a high threshold of roughly 1.5 L — about three times a resting tidal volume. It is a protective anti-overinflation mechanism, so removing it changes little during quiet breathing.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A woman breathes normally when awake and can take deep breaths on command, but becomes profoundly hypopnoeic and hypercapnic every night during sleep. What best explains this?',
      options: [
        { id: 'a', text: 'Upper airway obstruction with preserved respiratory drive' },
        { id: 'b', text: 'Failure of the automatic medullary drive with an intact voluntary corticospinal pathway' },
        { id: 'c', text: 'Loss of the Hering-Breuer inflation reflex' },
        { id: 'd', text: 'Bilateral phrenic nerve palsy' },
      ],
      answerId: 'b',
      explanation: 'Voluntary breathing travels from cortex to spinal respiratory motor neurons directly, bypassing the medullary generator. If the automatic generator fails, breathing looks normal while the cortex is engaged and collapses in sleep. Phrenic palsy or obstruction would not spare volitional deep breaths in this pattern.',
      tests: 'lecture',
    },
  ],
};

export default ghpRespiratoryCentresRhythm;
