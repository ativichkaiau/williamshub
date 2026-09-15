import type { Lecture } from '../../lib/types';

export const ghpHypothalamicThermostatSetPoint: Lecture = {
  id: 'ghp-hypothalamic-thermostat-set-point',
  title: 'The Hypothalamic Thermostat & Set-Point Control',
  system: 'physiology',
  source: 'Ch 73 — Body Temperature, Temperature Regulation & Fever',
  updated: '2026-09-14',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'Ch 73 Body Temperature & Fever' },
    { kind: 'mechanism', label: 'Sense → compare with set point → graded effector response' },
    { kind: 'exam', label: 'Sweating is sympathetic but cholinergic' },
  ],

  highYield: [
    '**The preoptic and anterior hypothalamus is the comparator, and it reads core temperature directly from the blood washing over it.** Its **warm-sensitive neurons outnumber cold-sensitive ones by roughly three to one** and increase their firing rate as local blood temperature rises, so the dominant afferent signal is a warmth signal. Those neurons compare the integrated temperature against a **set point** and generate an **error signal**, and every effector is then driven **in proportion to that error** rather than switched on and off. The anatomy splits cleanly for exam purposes: the **anterior hypothalamus and preoptic area organise heat LOSS** — destroy it and the animal becomes hyperthermic in a warm room — while the **posterior hypothalamus organises heat CONSERVATION and production**. This is a genuine control system, not a reflex: it does not merely respond to being hot, it **regulates toward a target**.',
    '**Skin thermoreceptors are feedforward — they warn the controller before core temperature has moved at all.** Skin carries perhaps **ten times more cold receptors than warm receptors**, so the peripheral signal is deliberately **weighted for cold**, and it is supplemented by deep receptors in the abdominal viscera, the great veins and the spinal cord. Step outdoors on a winter morning and you **vasoconstrict, get goosebumps and may start shivering while core is still exactly 37** — no error has yet occurred; the system is acting on a prediction. That is the distinction worth owning: **anticipation versus correction**. A purely feedback system must let the disturbance damage the regulated variable before it can respond, whereas intercepting the disturbance at the skin means core temperature barely moves — which is precisely why the cold-weighting makes sense, since the cost of an unanticipated fall in core is far higher than the cost of a needless shiver.',
    '**Above set point the responses are vasodilatation, sweating and inhibition of thermogenesis — and sweating is the classic autonomic exception.** Cutaneous **vasodilatation comes first** because it costs nothing: it is the withdrawal of sympathetic vasoconstrictor tone, and it can increase heat delivery to the surface **up to eightfold** ([[skin-physiology-thermoregulation]]). If that is insufficient, **eccrine sweating** is recruited — carried on **sympathetic fibres that release acetylcholine onto muscarinic receptors**, the standard exam catch, and the reason **atropine, antihistamines, tricyclics and antipsychotics abolish sweating and predispose to heat stroke** while cutting the sympathetic chain also abolishes it. Third, **shivering and chemical thermogenesis are actively inhibited**. Note the order: the body always spends the free response before the expensive one.',
    '**Below set point the sequence runs vasoconstriction, piloerection, shivering, then chemical thermogenesis — and again the cheapest first.** **Vasoconstriction** closes the acral arteriovenous anastomoses and recruits countercurrent exchange, costing nothing. **Piloerection** is vestigial in humans, trapping an insulating air layer in a furred animal and producing only goosebumps in us. **Shivering** is driven by the **dorsomedial posterior hypothalamus**, which is held under **tonic inhibition by the preoptic area** — remove the inhibition and it fires; the resulting asynchronous antagonistic muscle contraction can raise heat production **four- to fivefold**. **Non-shivering thermogenesis** uses **brown adipose tissue**, where **UCP1 short-circuits the inner mitochondrial membrane** so substrate oxidation continues while the proton gradient is dissipated as heat instead of being used to make ATP ([[electron-transport-oxphos]]). This matters most in **neonates, who cannot shiver effectively** and depend on brown fat, and it is amplified by sympathetic noradrenaline and by thyroid hormone.',
    '**Behaviour is the most powerful effector of all, and the one most consistently undersold.** Putting on a coat, moving into shade, curling up, closing a window, turning on a heater — these have **effectively unlimited capacity and essentially no metabolic cost**, and they act on the environment rather than on the body, which is why they can hold core temperature steady across conditions that would overwhelm every autonomic response combined. The clinical consequence follows immediately and explains most fatalities in this territory: **the autonomic effectors alone are frequently not sufficient, so when behaviour fails, people die**. That is the common denominator across the classic victims — **infants, the unconscious, the sedated or intoxicated, the demented, the restrained, the immobile elderly** — none of whom can execute the behavioural response, however intact their hypothalamus.',
    '**Gain and set point are the two control-theory ideas that make the next module make sense.** **Gain** is how completely a disturbance is corrected: human thermoregulation has a **feedback gain of roughly 27**, meaning a challenge that would otherwise move core by a degree is compressed into a residual error of a few hundredths. That is a very tight loop, and it is tight because several effectors act in parallel with feedforward on top. **The set point itself is adjustable**, and the system will defend a new value just as fiercely as the old one — the whole of fever ([[ghp-fever-hyperthermia-hypothermia]]). Meanwhile **heat acclimatisation** over one to two weeks demonstrates that the effectors are plastic too: the **sweating threshold falls, maximum sweat rate roughly doubles toward 2 to 3 litres an hour**, plasma volume expands, and **aldosterone drives sodium reabsorption in the sweat duct so sweat sodium falls from about 60 mmol/L to under 10** — which is why the acclimatised worker loses far less salt for the same cooling. The vulnerable extremes are the **neonate** (large surface area for mass, thin insulation, no effective shivering) and the **elderly** (blunted thermal perception, reduced sweat gland output, limited vasomotor and cardiac reserve, and often the drugs listed above).',
  ],

  mechanism: {
    title: 'Sense → compare against the set point → graded error → effectors, with feedforward from skin',
    steps: [
      { id: 's1', label: 'Warm-sensitive preoptic neurons read core blood temperature directly; skin and deep receptors add a cold-weighted peripheral signal', detail: 'Warm-sensitive neurons outnumber cold-sensitive about three to one centrally, while skin carries roughly ten times more cold receptors than warm.', emphasis: 'key' },
      { id: 's2', label: 'Skin signals arrive before core has changed — feedforward that intercepts the disturbance rather than correcting an error', emphasis: 'key' },
      { id: 's3', label: 'The hypothalamus compares the integrated signal with the set point and generates a graded error signal', detail: 'Effectors are driven in proportion to the error, not switched on and off; overall feedback gain is about 27.' },
      { id: 's4', label: 'Error above set point: vasodilatation first, then sympathetic cholinergic sweating, then inhibition of thermogenesis', detail: 'Vasodilatation is simply withdrawal of vasoconstrictor tone and costs nothing, so it is always spent first.', emphasis: 'key' },
      { id: 's5', label: 'Error below set point: vasoconstriction and piloerection, then shivering from the posterior hypothalamus, then brown-fat UCP1 thermogenesis', detail: 'Shivering can raise production four- to fivefold; the neonate substitutes brown fat because it cannot shiver effectively.', emphasis: 'key' },
      { id: 's6', label: 'Behaviour sits above all of it with the greatest capacity and no metabolic cost — and when behaviour fails, the autonomic effectors alone are often not enough', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Sweating abolished by atropine, a tricyclic or an antipsychotic despite an intact sympathetic outflow', mechanism: 'Eccrine glands are sympathetic in origin but cholinergic in transmission, so muscarinic blockade silences them', significance: 'key' },
    { sign: 'Vasoconstriction, goosebumps and shivering within moments of stepping into the cold, with core still 37', mechanism: 'Cold-weighted skin thermoreceptors act as feedforward, driving effectors before any core error has developed', significance: 'key' },
    { sign: 'A cold-stressed newborn who is not shivering yet whose oxygen consumption climbs and blood glucose falls', mechanism: 'Non-shivering thermogenesis in brown fat, where UCP1 uncouples oxidation from ATP synthesis and consumes substrate fast', significance: 'key' },
    { sign: 'Sweat sodium falling from around 60 mmol/L to under 10 after ten days of work in the heat', mechanism: 'Aldosterone-driven reabsorption along the sweat duct, the hallmark of acclimatisation and why acclimatised people lose less salt', significance: 'key' },
    { sign: 'An elderly patient found collapsed in a closed flat during a heat wave, not sweating and not thirsty', mechanism: 'Blunted thermal perception and reduced sweat and vasomotor reserve, compounded by failure of the behavioural response', significance: 'key' },
    { sign: 'Goosebumps on exposure to cold in a human, achieving nothing thermally', mechanism: 'Piloerection via arrector pili — a genuine insulating response in a furred animal and vestigial in us', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The hypothalamic region acting as comparator and organising heat loss; its destruction causes hyperthermia', meaning: 'Preoptic area and anterior hypothalamus, whose warm-sensitive neurons read core blood temperature directly' },
    { clue: 'The region that generates shivering, and what normally restrains it', meaning: 'Dorsomedial posterior hypothalamus, held under tonic inhibition by the preoptic area until the error signal releases it' },
    { clue: 'The autonomic exception that thermoregulation is famous for', meaning: 'Eccrine sweat glands — sympathetic fibres releasing acetylcholine onto muscarinic receptors, so anticholinergics abolish sweating' },
    { clue: 'The protein that lets brown adipose tissue make heat instead of ATP', meaning: 'UCP1, or thermogenin, which dissipates the mitochondrial proton gradient so oxidation continues and yields heat' },
    { clue: 'The hormone that makes acclimatised sweat dilute', meaning: 'Aldosterone, reabsorbing sodium along the sweat duct and dropping sweat sodium from about 60 mmol/L to under 10' },
    { clue: 'The effector with the greatest capacity and no metabolic cost, whose failure underlies most environmental deaths', meaning: 'Behaviour — clothing, shelter, posture and shade, unavailable to infants, the unconscious, the demented and the restrained' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Framing thermoregulation as a **control system with a set point, an error signal and a gain** is what makes the pathology derivable instead of memorisable. It tells you that **a raised temperature has two completely different causes**: the set point moved, or the effectors were overwhelmed. It tells you **why anticholinergic drugs are dangerous in hot weather** — they remove the only effector that still works above skin temperature. It explains **why the neonate is defended by brown fat rather than shivering** and therefore burns substrate and drops glucose when cold-stressed. And it explains **why acclimatisation is a real physiological adaptation** rather than mere tolerance: an earlier sweating threshold, roughly double the maximum sweat rate, expanded plasma volume and aldosterone-conserved sodium. The heat balance arithmetic these effectors are acting on is in [[ghp-body-temperature-heat-balance]].' },
    { logic: 'Where it is examined', detail: 'Four reliable stems. **The innervation of sweat glands** — sympathetic fibres, cholinergic transmitter, muscarinic receptor, which is why atropine causes anhidrosis. **Why shivering and vasoconstriction begin before core temperature falls** — feedforward from cold-weighted skin receptors. **Why the neonate cannot shiver and what replaces it** — brown adipose UCP1 under sympathetic and thyroid drive. And **why acclimatised sweat is dilute** — aldosterone acting on the duct. A fifth, less common but more discriminating: **the effector with the largest capacity is behavioural**, which is exactly why the patients who die are the ones who cannot act on their environment. The set point itself becomes the whole story in [[ghp-fever-hyperthermia-hypothermia]].' },
  ],

  mnemonics: [
    {
      hook: 'Cheapest effector first, every time',
      expansion: [
        'Too hot: vasodilate (free) → sweat (costs water and salt) → suppress thermogenesis',
        'Too cold: vasoconstrict and piloerect (free) → shiver (costs substrate and oxygen) → brown fat UCP1',
        'Behaviour overlays both, costs nothing metabolically, and has the largest capacity of all',
      ],
    },
    {
      hook: 'Skin predicts, core corrects',
      expansion: [
        'Skin receptors are cold-weighted about ten to one and fire before core temperature has moved',
        'That is feedforward — the disturbance is intercepted rather than the error being corrected',
        'Central preoptic neurons are warm-weighted about three to one and supply the true feedback signal',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'Autonomic pharmacology of the sweat gland',
      wrongInstinct: 'Sweating is sympathetic, so it must be adrenergic and should be blocked by a beta blocker or an alpha blocker',
      rightAnswer: 'The fibres are sympathetic but the transmitter is acetylcholine acting on muscarinic receptors',
      why: 'It is the one sympathetic effector that is cholinergic, which is why atropine and anticholinergic antidepressants and antipsychotics cause anhidrosis and predispose to heat stroke.',
    },
    {
      questionCategory: 'Why cold responses begin before core temperature has changed',
      wrongInstinct: 'Core temperature must have fallen slightly, since a feedback system needs an error before it can act',
      rightAnswer: 'Skin thermoreceptors provide a feedforward signal that drives effectors in anticipation, with core still at 37',
      why: 'Feedforward intercepts the disturbance at its source; a pure feedback loop would have to let core temperature fall first, and the cold-weighting of skin receptors exists precisely to avoid that.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient on a high-dose tricyclic antidepressant collapses during a heat wave with a core temperature of 41 degrees C and hot, dry skin. The drug contributed principally because it:',
      options: [
        { id: 'a', text: 'Blocked muscarinic receptors on eccrine sweat glands, abolishing the only route of heat loss available above skin temperature' },
        { id: 'b', text: 'Blocked beta receptors on eccrine sweat glands, since sympathetic effectors are adrenergic' },
        { id: 'c', text: 'Raised the hypothalamic set point by inducing prostaglandin E2 synthesis' },
        { id: 'd', text: 'Uncoupled brown adipose mitochondria and increased heat production' },
      ],
      answerId: 'a',
      explanation: 'Eccrine sweat glands are the standing exception in autonomic pharmacology: sympathetic fibres, cholinergic transmitter, muscarinic receptor. An anticholinergic therefore abolishes sweating, and since ambient temperature in a heat wave exceeds skin temperature, the dry routes are already delivering heat inward and evaporation was the only exit left. The set point is untouched, which is why this is hyperthermia rather than fever and why antipyretics would be useless.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A newborn left uncovered in a cool delivery room becomes hypoglycaemic and hypoxaemic. Continuous monitoring shows a rising oxygen consumption but no visible shivering. The mechanism responsible is:',
      options: [
        { id: 'a', text: 'Shivering that is present but too fine to see on inspection' },
        { id: 'b', text: 'Non-shivering thermogenesis in brown adipose tissue, where UCP1 dissipates the proton gradient as heat' },
        { id: 'c', text: 'Cutaneous vasodilatation increasing convective heat delivery to the surface' },
        { id: 'd', text: 'A rise in the hypothalamic set point triggered by cold exposure' },
      ],
      answerId: 'b',
      explanation: 'Neonates cannot shiver effectively, so their defence against cold is brown adipose tissue driven by sympathetic noradrenaline and thyroid hormone. UCP1 short-circuits the inner mitochondrial membrane, so substrate oxidation runs on while the proton gradient is spent as heat instead of ATP — which consumes oxygen and glucose rapidly and explains both the hypoglycaemia and the hypoxaemia. Vasodilatation would worsen heat loss and is the wrong direction entirely, and the set point does not move in cold exposure.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'Two labourers do identical work in the same hot climate. One has worked there for three weeks; the other arrived yesterday. Compared with the newcomer, the acclimatised man will show:',
      options: [
        { id: 'a', text: 'A higher sweating threshold and a lower maximum sweat rate, conserving water' },
        { id: 'b', text: 'An earlier onset of sweating, roughly double the maximum sweat rate, and sweat sodium under 10 mmol/L' },
        { id: 'c', text: 'A raised hypothalamic set point, so he tolerates a higher core temperature' },
        { id: 'd', text: 'Reduced plasma volume and a higher resting heart rate' },
      ],
      answerId: 'b',
      explanation: 'Heat acclimatisation over one to two weeks lowers the threshold at which sweating begins, roughly doubles maximum sweat rate toward 2 to 3 litres an hour, and expands plasma volume so the cardiovascular demand of cutaneous vasodilatation is better tolerated. Aldosterone-driven sodium reabsorption along the sweat duct drops sweat sodium from about 60 mmol/L to under 10, which is why acclimatised workers lose far less salt for the same amount of cooling. The set point is not altered by acclimatisation.',
      tests: 'mechanism',
    },
  ],
};

export default ghpHypothalamicThermostatSetPoint;
