import type { Lecture } from '../../lib/types';

export const ghpAltitudeIllnessSpace: Lecture = {
  id: 'ghp-altitude-illness-space',
  title: 'Altitude Illness, Acceleration & Weightlessness',
  system: 'physiology',
  source: 'Ch 43 — Aviation, High-Altitude & Space Physiology',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'Ch 43 Aviation & Space Physiology' },
    { kind: 'disease', label: 'AMS, HAPE, HACE' },
    { kind: 'mechanism', label: 'G forces and microgravity' },
  ],

  highYield: [
    '**Acute mountain sickness is what happens when ascent outruns acclimatisation.** It appears **6–24 hours** after a rapid gain above about **2,500 m**: headache plus nausea, anorexia, insomnia and fatigue, with a normal neurological examination. The mechanism is hypoxic cerebral vasodilation with raised cerebral blood flow, mild swelling and capillary leak inside a fixed skull. It is common, self-limiting if ascent stops, and it is the warning shot before the two lethal forms — the acclimatisation sequence it outran is in [[ghp-high-altitude-acclimatisation]].',
    '**High-altitude pulmonary oedema is a plumbing failure, not a heart failure.** Hypoxic pulmonary vasoconstriction is **patchy**, so the regions that fail to constrict receive the whole cardiac output at high pressure. Their capillaries undergo **stress failure**, leaking a **protein-rich** exudate. Onset is **2–4 days** after ascent, with exertional dyspnoea, dry cough then pink froth, crackles and disproportionate desaturation — and crucially a **normal left atrial filling pressure**, which is what separates it from cardiogenic oedema.',
    '**High-altitude cerebral oedema announces itself with ataxia, and ataxia ends the trip.** Vasogenic oedema from hypoxic endothelial leak progresses to confusion, papilloedema and coma, but the **earliest reliable sign is truncal ataxia on tandem gait** — testable in a tent with no equipment. Headache alone is AMS; headache with a diver-like stagger is HACE, and the only definitive treatment is **descent**.',
    '**Positive G drains the head, and the retina fails before the brain does.** Under **+Gz** the inertial column of blood pools below the heart, venous return and cerebral perfusion fall, and at about **+4 to +6 G** vision greys out then blacks out with consciousness still intact, before frank **G-induced loss of consciousness**. Vision goes first because **intraocular pressure of roughly 20 mmHg** opposes retinal perfusion — a pressure the brain does not have to overcome. The baroreflex would correct this but needs seconds it is not given, which is the reflex described in [[ghp-baroreceptor-chemoreceptor-reflexes]].',
    '**Negative G floods the head and is tolerated far worse.** Under **−Gz** blood is driven cephalad; conjunctival and retinal vessels engorge and the visual field takes on a reddish haze — **redout** — with throbbing headache, and at only about **−4 to −5 G** there is a real risk of cerebral haemorrhage. Protection is engineering rather than physiology: the **anti-G suit** compressing abdomen and legs, the **anti-G straining manoeuvre** of tensed muscles and forced expiration against a partly closed glottis, and reclined seating that converts head-to-foot **+Gz** into transverse **+Gx**, which humans tolerate to around **15 G**.',
    '**Weightlessness is an unloading problem, and the bill arrives on landing.** Roughly **2 litres** of fluid shifts headward, producing facial puffiness and thin legs; the central receptors read this as volume overload, so **ADH falls** and a diuresis drops plasma volume **10–15%** within days, after which erythropoietin falls and red cell mass shrinks. Antigravity muscles atrophy and weight-bearing bone loses about **1–1.5% per month** with hypercalciuria and stone risk. Return to gravity then finds a **contracted plasma volume plus a deconditioned baroreflex** — hence orthostatic intolerance, countered by resistive exercise in flight and salt and fluid loading before re-entry, with the volume control logic of [[ghp-adh-thirst-osmoreceptor-control]].',
  ],

  mechanism: {
    title: 'Rapid ascent to the three altitude illnesses',
    steps: [
      { id: 's1', label: 'Ascent rate outruns acclimatisation → sustained tissue hypoxia', emphasis: 'key' },
      { id: 's2', label: 'Cerebral vasodilation and mild capillary leak → AMS headache at 6–24 h', emphasis: 'key' },
      { id: 's3', label: 'Hypoxic pulmonary vasoconstriction is uneven → spared regions over-perfused', emphasis: 'key' },
      { id: 's4', label: 'Capillary stress failure → protein-rich, non-cardiogenic HAPE at 2–4 days', emphasis: 'danger' },
      { id: 's5', label: 'Vasogenic cerebral oedema → ataxia, confusion, coma as HACE', emphasis: 'danger' },
      { id: 's6', label: 'Descent is definitive; oxygen and drugs only buy time to descend', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Truncal ataxia on tandem gait in a climber with headache', mechanism: 'Vasogenic cerebral oedema — the earliest reliable sign of HACE', significance: 'key' },
    { sign: 'Dry cough, crackles and marked desaturation on day three at 4,500 m', mechanism: 'Uneven hypoxic vasoconstriction driving capillary stress failure', significance: 'key' },
    { sign: 'Headache with nausea and insomnia after a rapid ascent, neurology normal', mechanism: 'Hypoxic cerebral vasodilation and mild swelling — acute mountain sickness', significance: 'supportive' },
    { sign: 'Loss of peripheral then central vision at high positive G with speech preserved', mechanism: 'Retinal perfusion pressure falling below intraocular pressure — greyout then blackout', significance: 'key' },
    { sign: 'Puffy face and thin legs in an astronaut during the first week in orbit', mechanism: 'Headward redistribution of about two litres of fluid on removal of gravity', significance: 'supportive' },
    { sign: 'Presyncope and tachycardia on standing after a long-duration mission', mechanism: 'Contracted plasma volume with a deconditioned baroreflex and reduced venous tone', significance: 'key' },
  ],

  investigations: [
    { clue: 'Saturation far lower than companions at the same altitude, with crackles', meaning: 'Developing HAPE rather than simple altitude hypoxaemia' },
    { clue: 'Patchy peripheral infiltrates with a normal cardiac silhouette', meaning: 'Non-cardiogenic high-altitude pulmonary oedema' },
    { clue: 'Normal pulmonary capillary wedge pressure in a patient with altitude pulmonary oedema', meaning: 'Hydrostatic stress failure of over-perfused capillaries, not left heart failure' },
    { clue: 'Serial tandem gait testing during an expedition', meaning: 'Field screening for HACE before consciousness is affected' },
    { clue: 'Bone densitometry after six months in orbit showing hip and spine loss', meaning: 'Unloading-driven resorption exceeding formation, only partly reversible' },
    { clue: 'Raised urinary calcium throughout a mission', meaning: 'Ongoing bone resorption with an associated renal stone risk' },
  ],

  treatment: [
    {
      logic: 'Descend — everything else is a way of buying time to descend',
      detail: 'For **AMS**, stop ascending and give acetazolamide; for **HACE**, descend immediately with **dexamethasone** and oxygen; for **HAPE**, descend with oxygen and **nifedipine** to lower pulmonary artery pressure, with a portable hyperbaric bag if descent is delayed. Note the split: dexamethasone treats the **brain** and pulmonary vasodilators treat the **lung**, because the two oedemas have different mechanisms even though both start from the hypoxia of [[ghp-high-altitude-acclimatisation]].',
    },
    {
      logic: 'Against inertia and against unloading, the countermeasures are mechanical',
      detail: 'Acceleration is managed by the **anti-G suit**, the **straining manoeuvre** and reclined seating that turns +Gz into better-tolerated +Gx. Microgravity is managed by **resistive and treadmill exercise** to defend bone and antigravity muscle, and by **salt and fluid loading with compression garments** before re-entry to pre-empt orthostatic intolerance. Early-mission space motion sickness reflects otoliths that are no longer loaded, the conflict predicted by [[vestibular-system-reflexes]].',
    },
  ],

  mnemonics: [
    { hook: 'Headache, cough, stagger', expansion: ['Headache alone — AMS', 'Cough and desaturation — HAPE', 'Ataxia — HACE', 'Any of the last two — go down now'] },
    { hook: 'Push blood down, vision goes; push blood up, vision reddens', expansion: ['+Gz drains the head — greyout then blackout then G-LOC', 'Retina fails first against 20 mmHg intraocular pressure', '−Gz engorges the head — redout and haemorrhage risk'] },
  ],

  traps: [
    {
      questionCategory: 'Pulmonary oedema at 4,500 m',
      wrongInstinct: 'Treat it as left ventricular failure and reach for a diuretic',
      rightAnswer: 'Recognise HAPE — descend, give oxygen and lower pulmonary artery pressure',
      why: 'Filling pressures are normal and the fluid is protein-rich; the lesion is capillary stress failure, not a failing left heart',
    },
    {
      questionCategory: 'Which tissue fails first under positive G',
      wrongInstinct: 'The cerebral cortex, because neurons are the most oxygen-sensitive tissue',
      rightAnswer: 'The retina, so vision is lost while consciousness is still intact',
      why: 'Retinal perfusion must overcome an intraocular pressure of about 20 mmHg that the brain does not face',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Three days after ascending to 4,600 m a trekker has dyspnoea, a dry cough and crackles, with a normal pulmonary capillary wedge pressure. What is the mechanism?',
      options: [
        { id: 'a', text: 'Left ventricular failure from hypoxic myocardial depression' },
        { id: 'b', text: 'Uneven hypoxic pulmonary vasoconstriction over-perfusing spared regions until their capillaries fail' },
        { id: 'c', text: 'Hypoalbuminaemia lowering plasma oncotic pressure' },
        { id: 'd', text: 'Lymphatic obstruction reducing interstitial clearance' },
      ],
      answerId: 'b',
      explanation: 'Hypoxic vasoconstriction is not uniform across the lung. Regions that constrict less receive a disproportionate share of the cardiac output at raised pressure, and their capillaries undergo stress failure and leak a protein-rich fluid. The normal wedge pressure confirms that left atrial pressure is not driving it, which is why the treatment is descent, oxygen and pulmonary vasodilation rather than diuresis.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which finding most reliably signals high-altitude cerebral oedema before consciousness is impaired?',
      options: [
        { id: 'a', text: 'Severe headache unresponsive to analgesia' },
        { id: 'b', text: 'Peripheral oedema of the face and hands' },
        { id: 'c', text: 'Truncal ataxia on tandem gait' },
        { id: 'd', text: 'Insomnia with periodic breathing at night' },
      ],
      answerId: 'c',
      explanation: 'Headache, insomnia and periodic breathing are near-universal at altitude and do not separate benign AMS from HACE. Ataxia does. It appears before confusion or reduced consciousness, needs no equipment to elicit, and its presence mandates immediate descent with dexamethasone and oxygen.',
      tests: 'exam',
    },
    {
      id: 'q3',
      stem: 'An astronaut returning from six months in orbit becomes presyncopal on first standing. What best explains this?',
      options: [
        { id: 'a', text: 'Persistent headward fluid shift raising intracranial pressure' },
        { id: 'b', text: 'Contracted plasma volume combined with a deconditioned baroreflex and reduced venous tone' },
        { id: 'c', text: 'Vestibular damage from prolonged microgravity' },
        { id: 'd', text: 'Reduced bone mass impairing calcium-dependent vascular contraction' },
      ],
      answerId: 'b',
      explanation: 'The early headward fluid shift is read by central receptors as volume overload, ADH falls, and a diuresis cuts plasma volume by 10 to 15 percent. Months without an orthostatic challenge then leave the baroreflex and venous capacitance vessels untrained. On landing, gravity pools blood in the legs from a reduced volume with a blunted response, so blood pressure falls on standing.',
      tests: 'mechanism',
    },
  ],
};

export default ghpAltitudeIllnessSpace;
