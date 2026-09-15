import type { Lecture } from '../../lib/types';

export const ghpBodyTemperatureHeatBalance: Lecture = {
  id: 'ghp-body-temperature-heat-balance',
  title: 'Body Temperature & the Heat Balance Equation',
  system: 'physiology',
  source: 'Ch 73 — Body Temperature, Temperature Regulation & Fever',
  updated: '2026-09-14',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'Ch 73 Body Temperature & Fever' },
    { kind: 'mechanism', label: 'Heat stored = heat produced − heat lost' },
    { kind: 'exam', label: 'Above skin temperature only evaporation is left' },
  ],

  highYield: [
    '**The body defends the core and deliberately sacrifices the shell — so the number you get depends on where you measure.** Core temperature sits near **37 degrees C** and is held within a fraction of a degree, while the shell of skin, subcutaneous fat and limbs is allowed to swing by **20 degrees or more** because it is being used as adjustable insulation. That is why **rectal runs about 0.5 degrees above oral**, why **axillary is lower and the least reproducible of all sites**, and why only an enclosed site approximates core. Layer on a **diurnal rhythm of about 0.6 degrees** — trough near 06:00, peak in the late afternoon — and an **ovulatory rise of 0.3 to 0.5 degrees** driven by progesterone, and a single reading becomes uninterpretable without its site, its time of day and, in a woman, its cycle day. **37.3 at six in the morning is a more suspicious number than 37.3 at six in the evening.**',
    '**Everything in this chapter reduces to one equation: heat stored equals heat produced minus heat lost.** Core temperature only moves when that difference is non-zero, and it moves slowly because the body is mostly water — the **specific heat of tissue is about 0.83 kcal per kg per degree**, so a 70 kg adult must accumulate roughly **58 kcal to gain a single degree**. The **production** term has a floor it can never fall below: **basal metabolic rate**, some **70 kcal an hour at rest**, because the capture of free energy as ATP is never complete and the remainder is obligatorily released as heat ([[electron-transport-oxphos]]). On that floor sit **muscle activity** — the only term that can rise **ten- to twentyfold** — **thyroid hormone and sympathetic catecholamine drive** on cellular metabolism, and the **thermic effect of food**, about 10 per cent of intake. Notice what the equation forces: **production is committed to other jobs, so regulation has to happen almost entirely in the loss term.**',
    '**Four routes carry heat away, and at rest in a comfortable room radiation does most of the work.** Rough shares for a resting adult at 21 degrees: **radiation about 60 per cent**, **evaporation about 22 per cent**, **convection about 15 per cent**, **conduction to solid objects about 3 per cent**. Radiation dominates because it requires neither contact nor air movement — it is infrared exchange with every surface in the room, which is why a cold window chills you from across it. **Conduction into air is negligible on its own and only matters once convection sweeps the warmed boundary layer away**, so still air is an excellent insulator and moving air is not. That single fact is wind chill, and it is also why **water strips heat roughly twenty-five times faster than air at the same temperature** and why immersion causes hypothermia at temperatures that feel mild in air. Evaporation is the outlier: it is the only route that does not require the environment to be cooler than you are.',
    '**The highest-yield idea in the chapter: above skin temperature the three dry routes reverse, and evaporation is the only exit left.** Radiation, conduction and convection all run down a **skin-to-environment gradient**, so the moment ambient temperature climbs past skin temperature — roughly **33 degrees C** — all three **change sign and become routes of heat GAIN**. From that point the body has exactly one remaining way to lose heat: **evaporating sweat**, worth about **580 kcal per litre** at up to **1 to 1.5 litres an hour**. And evaporation does not depend on a temperature gradient at all; it depends on the **water-vapour pressure gradient**. So **humidity, not air temperature, is what kills in a heat wave**: at 35 degrees and 20 per cent humidity a healthy adult sheds heat comfortably, while at 35 degrees and 90 per cent humidity the last route is closed and core temperature climbs with nothing available to arrest it. Two corollaries examiners like: **sweat that drips off unevaporated removes essentially no heat**, and in those conditions **a fan blowing hot air across dry skin delivers heat rather than removing it**.',
    '**The skin circulation is the variable radiator of the whole system, and it is the fastest and cheapest effector available.** Heat generated in the core is lost only if blood carries it to the surface, so the controlled variable is **skin blood flow**, which swings from about **0.05 litres a minute under full vasoconstriction to 7 or 8 litres a minute under full vasodilatation** — a hundredfold range, and at the top end a serious fraction of cardiac output. Acral skin of the fingers, toes, ears and nose carries **arteriovenous anastomoses** that shunt blood straight past the capillary bed; these are driven **only by sympathetic vasoconstrictor tone**, so vasodilatation here is nothing more than the withdrawal of that tone. Cold additionally switches limb venous return from superficial veins into the deep **venae comitantes**, where **countercurrent exchange** hands arterial heat back toward the core before it ever reaches the hand. Add the **insulating value of subcutaneous fat**, about a third the thermal conductivity of other tissue, and a fully vasoconstricted shell roughly **triples total insulation**. The skin-side detail lives in [[skin-physiology-thermoregulation]].',
    '**Read the equation as a rate, not a state — that is what separates a high temperature from a fever.** A marathon runner at **39.5 degrees** is not febrile: production has outrun loss for an hour and heat has simply accumulated, while the thermostat still sits at 37 and is fighting the rise with maximal sweating and vasodilatation. Every environmental catastrophe is the same arithmetic pushed further, by **raising production** (exercise, thyrotoxicosis, agitation, shivering itself) or by **blocking loss** (occlusive clothing, high humidity, still air, anticholinergic drugs that abolish sweat, dehydration that caps sweat volume, autonomic failure, a skin that cannot vasodilate). The **insensible component never switches off** — about **600 mL a day** from skin and airway, some **12 to 16 kcal an hour** — which is why heat loss cannot be abolished simply by covering a patient, and why **a newborn, with a large surface area for its mass and thin subcutaneous fat, cools quickly in a room that feels warm to the adult holding it**. What decides where the balance actually settles is the controller, and that is the next module: [[ghp-hypothalamic-thermostat-set-point]].',
  ],

  mechanism: {
    title: 'Heat produced − heat lost = heat stored → core temperature moves',
    steps: [
      { id: 's1', label: 'Heat is produced continuously — BMR floor, muscle work, thyroid and sympathetic drive, thermic effect of food', detail: 'Production has a floor and can only be raised, never switched off; regulation therefore happens mainly on the loss side.', emphasis: 'key' },
      { id: 's2', label: 'Blood carries core heat to the skin, and skin blood flow can swing about a hundredfold', detail: 'From roughly 0.05 L/min vasoconstricted to 7 or 8 L/min vasodilated, largely through acral arteriovenous anastomoses.', emphasis: 'key' },
      { id: 's3', label: 'From the skin, heat leaves by radiation (about 60 per cent at rest), convection, conduction and evaporation', detail: 'Shares at 21 degrees C for a resting adult: radiation 60, evaporation 22, convection 15, conduction 3 per cent.' },
      { id: 's4', label: 'All three dry routes depend on the skin being warmer than the environment', detail: 'They are gradient-driven, so their magnitude and their direction are both set by that difference.', emphasis: 'key' },
      { id: 's5', label: 'Above about 33 degrees C ambient the dry routes reverse and become heat GAIN — evaporation is all that is left', emphasis: 'danger' },
      { id: 's6', label: 'Evaporation obeys the vapour-pressure gradient, so high humidity closes the last route and stored heat rises unopposed', detail: 'This is why a humid 35-degree day is lethal while a dry 40-degree day is tolerable.', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Rectal temperature about 0.5 degrees above oral, with axillary lower still and the least reproducible', mechanism: 'Any site not enclosed within the core samples some shell, and the shell is deliberately allowed to vary', significance: 'key' },
    { sign: 'Core temperature lowest around 06:00 and highest in the late afternoon, a swing of about 0.6 degrees', mechanism: 'Circadian modulation of the hypothalamic set point, so the same figure carries different weight at different hours', significance: 'key' },
    { sign: 'Basal body temperature steps up 0.3 to 0.5 degrees after ovulation and stays up through the luteal phase', mechanism: 'Progesterone raises the set point, which is what makes the shift usable as an ovulation marker', significance: 'supportive' },
    { sign: 'Cold, pale fingers, toes and nose in a patient whose core temperature is entirely normal', mechanism: 'The shell is being surrendered to defend the core; acral arteriovenous anastomoses are shut by sympathetic tone', significance: 'key' },
    { sign: 'Hypothermia developing far faster in cool water than in air at the same temperature', mechanism: 'Water conducts heat roughly twenty-five times better than air and convects the warmed boundary layer away continuously', significance: 'key' },
    { sign: 'A runner finishing at 39.5 degrees who is flushed, drenched in sweat and feels intensely hot', mechanism: 'Production has exceeded loss and heat has accumulated against an unchanged set point — a storage problem, not fever', significance: 'key' },
  ],

  investigations: [
    { clue: 'The largest single route of heat loss from a resting adult in a comfortable room', meaning: 'Radiation, about 60 per cent — infrared exchange with surrounding surfaces, needing neither contact nor air movement' },
    { clue: 'The ambient temperature above which radiation, conduction and convection all become heat gain', meaning: 'Skin temperature, roughly 33 degrees C — beyond it the dry routes change sign and evaporation is the only exit' },
    { clue: 'The environmental variable that decides whether evaporation still works on a hot day', meaning: 'Ambient water-vapour pressure, that is humidity — evaporation follows a vapour gradient, not a temperature gradient' },
    { clue: 'Heat removed by each litre of sweat that actually evaporates', meaning: 'About 580 kcal — sweat that rolls off the skin unevaporated removes essentially nothing' },
    { clue: 'Vessels that let acral skin act as a radiator, controlled by sympathetic vasoconstrictor tone alone', meaning: 'Arteriovenous anastomoses of fingers, toes, ears and nose — vasodilatation here is simply withdrawal of that tone' },
    { clue: 'The heat loss that continues even when sweating is pharmacologically abolished', meaning: 'Insensible loss from skin and airway, about 600 mL a day and 12 to 16 kcal an hour, which cannot be switched off' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The equation is not decoration — it predicts who dies in a heat wave and who does not. **Risk is high production plus blocked loss**, so the casualties cluster where those overlap: the **elderly in closed flats with still, humid air**, patients on **anticholinergics, antipsychotics or beta blockers** that cap sweating or the cardiac output vasodilatation demands, **athletes in humid conditions**, and **neonates**, whose surface-area-to-mass ratio makes them lose heat fast and whose thin fat gives them almost no insulating reserve. The same equation prescribes the treatment: since the dry routes are unavailable above skin temperature, **cooling must restore evaporation or supply conduction** — wetting the skin with a fan moving air over it, or immersion, which uses the one medium that conducts twenty-five times better than air. Chronically raised production is the thyroid story ([[hen1-thyroid-physiologic-actions]]), where heat intolerance is simply a permanently elevated production term.' },
    { logic: 'Where it is examined', detail: 'Three stems recur. **Why a humid 35-degree day kills when a dry 40-degree day does not** — above skin temperature only evaporation remains, and humidity is what disables it. **Why a raised temperature is not automatically a fever** — heat storage from exercise or environment moves the temperature against a normal set point, whereas fever moves the set point itself ([[ghp-hypothalamic-thermostat-set-point]]). And **why the measurement site and the clock change the interpretation** — rectal exceeds oral by about half a degree, axillary is the least reliable, and the diurnal trough sits near 06:00, so the same figure means different things at different hours.' },
  ],

  mnemonics: [
    {
      hook: 'Three routes quit when it gets hot, one is left',
      expansion: [
        'Radiation, conduction and convection are all gradient-driven — they need skin warmer than the environment',
        'Past about 33 degrees C the gradient inverts and all three deliver heat instead of removing it',
        'Evaporation alone survives, and it runs on the vapour-pressure gradient, so humidity is what closes it',
      ],
    },
    {
      hook: 'Core is defended, shell is spent',
      expansion: [
        'Core stays near 37 within a fraction of a degree; the shell is allowed to range over 20 degrees',
        'The shell is being used as variable insulation, with skin blood flow swinging a hundredfold',
        'So cold hands with a normal core are correct physiology, not a circulatory abnormality',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'Why humidity, not absolute temperature, determines danger in a heat wave',
      wrongInstinct: 'The air temperature alone determines the risk, so the hottest day is the most dangerous day',
      rightAnswer: 'Above skin temperature evaporation is the only remaining route of loss, and humidity is what disables evaporation',
      why: 'Dry heat still permits sweat to evaporate at 580 kcal a litre; humid heat closes that route while the dry routes are already delivering heat inward.',
    },
    {
      questionCategory: 'Interpreting a single temperature reading',
      wrongInstinct: 'Any value at or below 37.5 is normal and anything above it is fever, whatever the circumstances',
      rightAnswer: 'Interpret the value against the measurement site, the time of day, the cycle phase and recent exertion',
      why: 'Rectal sits about 0.5 above oral, the diurnal swing is about 0.6 degrees, and the luteal phase adds 0.3 to 0.5 — so identical numbers can be normal or abnormal.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Two cities record an outdoor air temperature of 35 degrees C. In one the relative humidity is 20 per cent and heat-related deaths are rare; in the other it is 90 per cent and mortality rises sharply. Which statement best explains the difference?',
      options: [
        { id: 'a', text: 'Humid air conducts heat into the body more rapidly than dry air at the same temperature' },
        { id: 'b', text: 'At 35 degrees the dry routes already run inward, so evaporation is the only route of loss and high humidity abolishes it' },
        { id: 'c', text: 'High humidity raises the hypothalamic set point, producing a fever on top of the environmental load' },
        { id: 'd', text: 'Humidity reduces the basal metabolic rate, so less heat is produced in the dry city' },
      ],
      answerId: 'b',
      explanation: 'Skin temperature is about 33 degrees C, so at an ambient 35 degrees radiation, conduction and convection have all reversed and are delivering heat into the body. Evaporation is the only route left, and it is driven by the water-vapour pressure gradient rather than the temperature gradient — at 90 per cent humidity that gradient is nearly gone and sweat simply drips off without removing heat. The set point is untouched in either city, which is exactly why this is hyperthermia rather than fever.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A 70 kg man completes a race and his core temperature is 39.5 degrees C. He is flushed, sweating heavily and reports feeling hot. Which single statement most accurately describes his thermoregulatory state?',
      options: [
        { id: 'a', text: 'His hypothalamic set point has been raised, which is why the temperature is being maintained at 39.5' },
        { id: 'b', text: 'Heat production has exceeded heat loss for a sustained period while the set point remained at 37' },
        { id: 'c', text: 'His thermoregulatory reflexes have failed, since a normal system cannot permit a core of 39.5' },
        { id: 'd', text: 'Radiation from the skin has been abolished by cutaneous vasodilatation' },
      ],
      answerId: 'b',
      explanation: 'Exercise can raise heat production ten- to twentyfold, and heat accumulates whenever production outruns loss — with a tissue specific heat near 0.83 kcal per kg per degree, a 70 kg man needs only about 58 kcal of net storage per degree. His set point is unchanged at 37, which is precisely why he is flushed, vasodilated, sweating and feels hot: the thermostat is working maximally against the rise. A raised set point would instead have him vasoconstricted and shivering, and vasodilatation increases rather than abolishes radiative loss.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A woman is found unconscious after immersion in 15 degree C water for 30 minutes; a companion who stood on the bank in 15 degree C air for the same period is merely uncomfortable. The principal reason the swimmer cooled so much faster is that water:',
      options: [
        { id: 'a', text: 'Lowers the hypothalamic set point on skin contact' },
        { id: 'b', text: 'Prevents evaporative heat loss, which is the dominant route at rest' },
        { id: 'c', text: 'Conducts heat roughly twenty-five times better than air and continuously convects away the warmed boundary layer' },
        { id: 'd', text: 'Increases basal metabolic rate so that heat stores are depleted more rapidly' },
      ],
      answerId: 'c',
      explanation: 'Conduction into still air is trivial because the warmed layer of air next to the skin stays put and insulates; water both conducts far better and strips that boundary layer away, so the gradient is never allowed to fall. Evaporation is not the dominant resting route in the first place, and it contributes nothing under water in either case. The set point is unchanged, and metabolic rate actually rises in the cold through shivering, which opposes rather than accelerates the fall.',
      tests: 'mechanism',
    },
  ],
};

export default ghpBodyTemperatureHeatBalance;
