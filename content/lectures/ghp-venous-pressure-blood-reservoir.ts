import type { Lecture } from '../../lib/types';

export const ghpVenousPressureBloodReservoir: Lecture = {
  id: 'ghp-venous-pressure-blood-reservoir',
  title: 'Venous Pressure and the Blood Reservoirs',
  system: 'cardiovascular',
  source: 'Ch 15 — Vascular Distensibility; Arterial & Venous Systems',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 15 Arterial and Venous Systems' },
    { kind: 'mechanism', label: 'Right atrial pressure as the reference point' },
    { kind: 'exam', label: 'Jugular venous pressure and venoconstriction' },
  ],

  highYield: [
    '**Right atrial pressure (central venous pressure) is the reference point of the whole systemic circulation — normally ~0 mmHg.** Everything upstream is quoted as a pressure above it, and every systemic pressure gradient ends there. Its **lower limit is about −3 to −5 mmHg**, set by the negative intrathoracic pressure and by **collapse of the great veins as they enter the chest**; its upper range in disease is **+20 to +30 mmHg** (right heart failure, tricuspid regurgitation, tamponade, massive transfusion).',
    '**Right atrial pressure is the balance of two opposing forces: how hard the heart pumps blood OUT of the atrium, and how fast venous return delivers blood IN.** Anything that weakens the pump (failure, tamponade) or increases return (volume loading, venoconstriction, raised blood volume) **raises** it; anything that strengthens the pump or reduces return **lowers** it. It is therefore a **shared variable**, not a property of the heart or the veins alone.',
    '**Peripheral venous pressure sits only a few mmHg above right atrial pressure — until the collapse points open.** Veins entering the thorax are **compressed flat** where they cross the first rib, in the axilla, in the neck (atmospheric pressure collapses the jugulars above heart level) and in the abdomen (intra-abdominal pressure ~**6 mmHg**, rising to **15–30 mmHg** with pregnancy, ascites or a large tumour). While these points are collapsed, peripheral pressure barely exceeds **+4 to +6 mmHg**. Once right atrial pressure climbs past that, the collapse points blow open and **peripheral venous pressure rises mmHg for mmHg with right atrial pressure** — the physical basis of a visibly distended JVP and of peripheral oedema.',
    '**Gravity adds a hydrostatic column of ~0.77 mmHg per cm of vertical distance.** In a quietly standing adult, foot vein pressure reaches ~**+90 mmHg**, while veins in the head sit at **negative** pressure (the **dural sinuses cannot collapse** because their walls are held open — the reason head-up neurosurgery risks **air embolism**). The **hydrostatic indifference point is the tricuspid valve**, which is why pressures are referenced there: pressure changes at that level are self-correcting through the Frank–Starling response of the heart.',
    '**The venous valves and the muscle pump make the standing column tolerable.** Every step compresses the deep veins and drives blood centrally against closed distal valves, dropping foot vein pressure from ~90 to under ~**25 mmHg** during walking. **Incompetent valves** abolish this pump: sustained high venous — and hence capillary — pressure produces **varicose veins, brown haemosiderin staining, oedema and venous ulceration**.',
    '**The veins are the body reservoir, and sympathetic venoconstriction is the tap.** Specific reservoirs: **spleen (~100 mL, plus a red-cell-rich pulp), liver (several hundred mL), the large abdominal veins (~300 mL), the subcutaneous venous plexus** and the **lungs (~100–200 mL that can shift on demand)**. Veins carry a dense **α₁-adrenergic sympathetic supply** (and essentially no parasympathetic or local metabolic control), so a sympathetic discharge **reduces venous capacitance and delivers several hundred millilitres back to the heart within seconds** — an **autotransfusion** that defends cardiac output before any arterial change is visible.',
  ],

  mechanism: {
    title: 'Zero at the tricuspid — and a tank that can be squeezed',
    steps: [
      { id: 's1', label: 'Right atrial pressure ~0 mmHg: the end point and reference of the systemic gradient', emphasis: 'key' },
      { id: 's2', label: 'It is set by cardiac pumping (out) balanced against venous return (in)', emphasis: 'key' },
      { id: 's3', label: 'Great veins collapse entering the chest → peripheral venous pressure only a few mmHg higher' },
      { id: 's4', label: 'Above ~+4 to +6 mmHg the collapse points open and peripheral pressure tracks it mmHg for mmHg', emphasis: 'key' },
      { id: 's5', label: 'Gravity adds ~0.77 mmHg per cm below the tricuspid → ~+90 mmHg at the feet standing' },
      { id: 's6', label: 'Muscle pump plus valves, and sympathetic venoconstriction, empty the reservoir back to the heart', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Jugular venous pressure visibly elevated with the patient at 45 degrees', mechanism: 'Right atrial pressure high enough to open the neck collapse point and fill the column', significance: 'key' },
    { sign: 'Neck veins collapsed in a healthy upright person', mechanism: 'Atmospheric pressure flattens veins above heart level when right atrial pressure is normal', significance: 'supportive' },
    { sign: 'Ankle oedema, varicosities and brown pigmentation after valve incompetence', mechanism: 'The muscle pump fails, so sustained high venous pressure raises capillary pressure and filtration', significance: 'key' },
    { sign: 'Blood pressure maintained with cool peripheries after a 15% haemorrhage', mechanism: 'Sympathetic venoconstriction mobilises the reservoir before arterial pressure falls', significance: 'key' },
    { sign: 'Air embolism during head-up neurosurgery', mechanism: 'Dural sinus pressure is subatmospheric and the sinuses cannot collapse to seal', significance: 'supportive' },
    { sign: 'Foot vein pressure about 90 mmHg standing still, under 25 mmHg while walking', mechanism: 'Muscle pump plus competent valves break the hydrostatic column into short segments', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A pressure quoted relative to the level of the tricuspid valve', meaning: 'The hydrostatic indifference point — the reference level for all venous pressures' },
    { clue: 'Right atrial pressure of +15 mmHg', meaning: 'A failing right heart, tamponade or an over-filled circulation' },
    { clue: 'Right atrial pressure of about −4 mmHg', meaning: 'Close to the physiological floor, set by great-vein collapse and negative intrathoracic pressure' },
    { clue: '0.77 mmHg for every centimetre of vertical distance', meaning: 'The hydrostatic column of blood in an upright subject' },
    { clue: 'Peripheral venous pressure rising in step with right atrial pressure', meaning: 'The venous collapse points have opened; the venous system is already distended' },
    { clue: 'Alpha-mediated venoconstriction after sympathetic discharge', meaning: 'Reduced venous capacitance — an internal autotransfusion that raises venous return' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Because right atrial pressure is jointly owned by the heart and the veins, a single number never tells you which side moved: the same +14 mmHg fits a failing right ventricle and an over-transfused normal one. That is exactly why it must be read against venous return rather than in isolation — the two-curve treatment is in [[ghp-cardiac-output-venous-return-curves]], and the pressure the reservoir generates when the heart stops is [[ghp-mean-systemic-filling-pressure]].' },
    { logic: 'Bedside payoff', detail: 'The neck is a manometer: JVP height above the sternal angle estimates right atrial pressure without a catheter, and the waveform names the lesion. Venous tone is also a therapeutic target — venoconstriction recruits the reservoir in haemorrhage, venodilators unload it in congestion, and leg elevation and compression defeat the hydrostatic column in venous disease. Waveform reading: [[jugular-venous-pressure-waveform]]; the capacitance figures behind the reservoir: [[ghp-vascular-compliance-volume-distribution]]; the reservoir under maximal stress: [[ghp-shock-stages-haemorrhagic]].' },
  ],

  mnemonics: [
    { hook: 'Zero at the tricuspid', expansion: ['Right atrial pressure is the reference for everything venous', 'It is the hydrostatic indifference point', 'Add 0.77 mmHg per cm below it, subtract the same above it'] },
    { hook: 'The veins are the tank; sympathetics are the squeeze', expansion: ['Spleen, liver, abdominal veins, skin plexus, lungs', 'Alpha-1 venoconstriction = autotransfusion in seconds', 'Muscle pump plus valves move it against gravity'] },
  ],

  traps: [
    {
      questionCategory: 'Local venous pressure versus central venous pressure',
      wrongInstinct: 'A high venous pressure measured in the leg or the arm means right atrial pressure is high',
      rightAnswer: 'Gravity, external compression and valve incompetence all raise peripheral venous pressure with a normal right atrial pressure; only when the thoracic collapse points are open does the periphery track the centre',
      why: 'Below the tricuspid, the hydrostatic column alone adds 0.77 mmHg per cm.',
    },
    {
      questionCategory: 'Where a vasoconstrictor actually acts',
      wrongInstinct: 'Sympathetic vasoconstriction supports blood pressure purely by tightening arterioles and raising resistance',
      rightAnswer: 'It also constricts the veins, and since they hold about two-thirds of the blood, venoconstriction raises mean systemic filling pressure, venous return and therefore cardiac output',
      why: 'Arteriolar constriction changes resistance; venoconstriction changes the volume actually available to the heart.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A healthy adult stands quietly. Venous pressure at the ankle is about +90 mmHg while right atrial pressure remains near 0 mmHg. The best explanation is:',
      options: [
        { id: 'a', text: 'Increased venous resistance between the ankle and the thorax' },
        { id: 'b', text: 'The weight of the hydrostatic column of blood, about 0.77 mmHg per cm below the tricuspid valve' },
        { id: 'c', text: 'Reflex venoconstriction of the leg veins on standing' },
        { id: 'd', text: 'Failure of the venous valves' },
      ],
      answerId: 'b',
      explanation: 'The tricuspid valve is the hydrostatic indifference point, and each centimetre below it adds about 0.77 mmHg, so an ankle roughly 120 cm below the heart sits near +90 mmHg. Venous resistance is trivially low (a), and valve failure (d) would matter only once the muscle pump is used — walking normally drops the pressure below 25 mmHg.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Right atrial pressure is best described as being determined by:',
      options: [
        { id: 'a', text: 'Total peripheral resistance alone' },
        { id: 'b', text: 'The balance between the ability of the heart to pump blood out of the right atrium and the rate of venous return into it' },
        { id: 'c', text: 'Mean arterial pressure minus total peripheral resistance' },
        { id: 'd', text: 'The compliance of the systemic arteries' },
      ],
      answerId: 'b',
      explanation: 'Right atrial pressure is a shared variable: stronger pumping lowers it, greater venous return raises it, and a given value is compatible with either a weak heart or an over-filled circulation. Arterial resistance and compliance (a, d) act on the upstream side and cannot by themselves set the filling pressure of the right atrium.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'Within seconds of a 700 mL haemorrhage, arterial pressure is still normal and the skin is cool. Which venous mechanism contributes most to this early compensation?',
      options: [
        { id: 'a', text: 'Opening of arteriovenous anastomoses in the skin' },
        { id: 'b', text: 'Parasympathetic dilation of the splanchnic veins' },
        { id: 'c', text: 'Sympathetic alpha-mediated venoconstriction reducing venous capacitance' },
        { id: 'd', text: 'Delayed compliance of the venous walls' },
      ],
      answerId: 'c',
      explanation: 'Veins carry a dense alpha-1 sympathetic supply, so a baroreflex discharge constricts the splanchnic, splenic, hepatic and cutaneous reservoirs and returns several hundred millilitres to the heart within seconds — an autotransfusion. Veins have essentially no functional parasympathetic supply (b), and delayed compliance (d) is the slow reverse stress-relaxation that helps over minutes to hours, not seconds.',
      tests: 'mechanism',
    },
  ],
};

export default ghpVenousPressureBloodReservoir;
