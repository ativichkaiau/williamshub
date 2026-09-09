import type { Lecture } from '../../lib/types';

export const ghpLymphaticInterstitialFluid: Lecture = {
  id: 'ghp-lymphatic-interstitial-fluid',
  title: 'The Lymphatic System & Interstitial Fluid',
  system: 'cardiovascular',
  source: 'Ch 16 — The Microcirculation & the Lymphatic System',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 16 Microcirculation' },
    { kind: 'mechanism', label: 'Lymph flow and protein return' },
    { kind: 'exam', label: 'Safety factors against oedema' },
  ],

  highYield: [
    '**The interstitium is a gel, not a puddle.** Collagen bundles give tensile strength while **proteoglycan (hyaluronan) filaments** form a brush pile that traps almost all interstitial fluid as **gel** — freely flowing fluid is normally **under 1%**. Diffusion through gel is nearly as fast as through free water, so exchange costs nothing, but **bulk flow is heavily resisted**, which is why the tissue can silently absorb some excess. **Oedema becomes visible and pits only once a free-fluid phase appears.**',
    '**Normal interstitial free-fluid pressure is negative — about −3 mmHg — and the lymphatics create it** by pumping fluid out slightly faster than it arrives. This is not a curiosity: the negativity **holds cells and tissues together** by suction (the same principle that keeps lung apposed to chest wall), and it is the **first safety factor against oedema** — the interstitium is **stiff in the negative range**, so a substantial volume must arrive before pressure even reaches 0 mmHg.',
    '**Lymph is the only road home for protein.** Capillaries leak protein continuously and there is **no mechanism to reabsorb it back across the capillary wall**. Terminal lymphatics solve this with **overlapping endothelial flaps tethered by anchoring filaments** — one-way inlet valves that open as tissue swells and admit protein, particulate matter, even bacteria. Total flow ≈ **120 mL/h (~100 mL/h thoracic duct + ~20 mL/h right lymph duct) ≈ 2–3 L/day**, returning a large fraction of circulating plasma protein each day. **Block all lymphatics and death follows in about 24 hours.**',
    '**Lymph flow = interstitial fluid pressure × lymphatic pump activity.** Raising Pif from −6 mmHg toward 0 increases lymph flow more than **20-fold**; above **0 mmHg flow plateaus**, because further pressure now compresses the vessels as fast as it fills them — the reserve is spent exactly when it is most needed. The **intrinsic pump** is each **lymphangion** contracting when stretched, with valves every few millimetres, generating **25–50 mmHg (up to 100)**; the **extrinsic pump** is muscle contraction, arterial pulsation, respiration and external compression.',
    '**Three safety factors buy roughly 17 mmHg of protection before oedema appears.** (1) **Low interstitial compliance in the negative-pressure range ≈ 3 mmHg**; (2) **increased lymph flow, up to 10–50× ≈ 7 mmHg**; (3) **washdown of interstitial protein** by that torrent of lymph, lowering πif ≈ **7 mmHg**. So capillary pressure must climb about **17 mmHg above normal** before overt oedema — which is why oedema seems to appear abruptly rather than in proportion. The **lung has far less absolute reserve**: acute pulmonary oedema once pulmonary capillary pressure exceeds roughly **25–28 mmHg**.',
    '**Lymph composition tells you where it came from.** Peripheral tissue lymph ≈ **2 g/dL protein**; intestinal **3–4 g/dL**; **hepatic ~6 g/dL** (leaky sinusoids). Because liver and gut together supply about **two-thirds** of thoracic-duct flow, thoracic duct lymph averages **3–5 g/dL**. After a fatty meal it turns milky with **chylomicrons (chyle)** — the reason a thoracic duct injury produces **chylothorax**. **Lymphoedema** (filariasis, node clearance, radiotherapy) is **protein-rich**, so it drives fibrosis and eventually becomes **non-pitting**.',
  ],

  mechanism: {
    title: 'Lymph is the overflow drain — and the only way protein gets home',
    steps: [
      { id: 's1', label: 'Capillaries filter ~2–4 L/day of protein-containing fluid that is never reabsorbed' },
      { id: 's2', label: 'Anchoring filaments hold terminal lymphatic flap valves open as the tissue swells', emphasis: 'key' },
      { id: 's3', label: 'Stretched lymphangions contract; one-way valves make flow unidirectional at 25–50 mmHg', emphasis: 'key' },
      { id: 's4', label: 'Muscle activity, arterial pulsation and respiration add the extrinsic pump' },
      { id: 's5', label: 'Continuous removal holds interstitial free-fluid pressure at about −3 mmHg', emphasis: 'key' },
      { id: 's6', label: 'Protein returns via thoracic duct to the subclavian vein: plasma oncotic pressure is preserved and interstitial oncotic pressure stays low', emphasis: 'key' },
      { id: 's7', label: 'Lose this drainage and interstitial protein accumulates — progressive, self-worsening oedema', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Pitting oedema becomes visible only after several litres have accumulated', mechanism: 'The gel-phase interstitium and the negative-pressure safety factor absorb the first excess without free fluid forming', significance: 'key' },
    { sign: 'Non-pitting, firm, fibrotic arm swelling years after axillary node clearance', mechanism: 'Lymphatic obstruction leaves protein in the interstitium, raising interstitial oncotic pressure and provoking fibrosis', significance: 'key' },
    { sign: 'Milky pleural fluid with a high triglyceride content after thoracic surgery', mechanism: 'Chylothorax from thoracic duct injury releasing chylomicron-rich lymph', significance: 'key' },
    { sign: 'Lymph flow rises 10- to 50-fold as interstitial pressure rises toward zero, then plateaus', mechanism: 'Increased filling and stretch-driven lymphangion pumping, until rising pressure compresses the vessels', significance: 'key' },
    { sign: 'Leg swelling improves with walking and graduated compression', mechanism: 'The extrinsic pump raises lymph flow while compression lowers capillary hydrostatic pressure', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Interstitial free-fluid pressure of about −3 mmHg', meaning: 'Normal, lymphatically maintained subatmospheric pressure — an anti-oedema safety factor' },
    { clue: 'Interstitial pressure rising above 0 mmHg', meaning: 'Free-fluid phase has appeared, lymph flow has plateaued, and oedema is now progressive' },
    { clue: 'Thoracic duct lymph protein of 3–5 g/dL', meaning: 'Dominated by the hepatic (6 g/dL) and intestinal (3–4 g/dL) contributions' },
    { clue: 'A total safety factor of about 17 mmHg', meaning: 'Interstitial compliance 3 + increased lymph flow 7 + protein washdown 7' },
    { clue: 'Protein-rich swelling that does not pit', meaning: 'Lymphatic obstruction rather than a hydrostatic or oncotic cause' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The lymphatics are the reason the near-perfect capillary balance in [[ghp-starling-forces-filtration]] is allowed to be imperfect: a small, unavoidable net filtration plus all escaped protein is removed continuously, keeping interstitial oncotic pressure low and interstitial pressure negative. That escaped protein exists only because the capillary pore is imperfect — see [[ghp-capillary-exchange-diffusion]].' },
    { logic: 'Clinical payoff', detail: 'It explains the **delayed then abrupt** onset of oedema (17 mmHg of safety factor must be used up first), why lymphoedema is **non-pitting** while cardiac oedema pits, why elevation, exercise and compression are genuine treatments, and why chylothorax leaks fat and lymphocytes. Development and anatomy: [[hhl-lymphatic-development]]; the congestive end of the spectrum: [[ghp-decompensated-failure-oedema]].' },
  ],

  mnemonics: [
    { hook: 'Safety factor 17 = 3 + 7 + 7', expansion: ['3 mmHg — stiff interstitium in the negative-pressure range', '7 mmHg — lymph flow rising 10- to 50-fold', '7 mmHg — protein washdown lowering interstitial oncotic pressure', 'So capillary pressure must rise about 17 mmHg before visible oedema'] },
    { hook: 'Lymph does the one thing a capillary cannot: it takes protein home', expansion: ['Flap valves admit protein, particles and bacteria', 'Lymphangions pump, valves keep it one-way', 'Thoracic duct returns it to the subclavian vein', 'No lymph return means rising interstitial protein and death within about a day'] },
  ],

  traps: [
    {
      questionCategory: 'Why oedema is delayed rather than proportional',
      wrongInstinct: 'Any rise in capillary pressure produces oedema in direct proportion to the rise',
      rightAnswer: 'Roughly 17 mmHg of safety factor must be consumed first; oedema then appears and progresses steeply',
      why: 'The interstitium is stiff below 0 mmHg and highly compliant above it, so the pressure-volume curve has a knee.',
    },
    {
      questionCategory: 'Pitting versus non-pitting swelling',
      wrongInstinct: 'All oedema pits, so a non-pitting limb must not be oedematous',
      rightAnswer: 'Protein-rich lymphoedema induces chronic fibrosis and stops pitting; pitting implies free, low-protein fluid',
      why: 'Capillaries cannot reabsorb protein — only lymph clears it, so obstruction leaves protein behind to organise.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which statement about interstitial fluid pressure in normal loose subcutaneous tissue is correct?',
      options: [
        { id: 'a', text: 'It is about +6 mmHg and opposes capillary filtration' },
        { id: 'b', text: 'It is about −3 mmHg, maintained by lymphatic pumping' },
        { id: 'c', text: 'It equals plasma colloid osmotic pressure' },
        { id: 'd', text: 'It is zero because the interstitium is freely compliant' },
      ],
      answerId: 'b',
      explanation: 'Continuous lymphatic removal of fluid holds interstitial free-fluid pressure slightly subatmospheric, around −3 mmHg. This helps hold tissues together and provides a safety factor against oedema. Positive interstitial pressures of around +6 mmHg occur in encapsulated organs such as kidney and brain (a), not in loose subcutaneous tissue.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient develops chronic lymphatic obstruction of one leg. Compared with the oedema of right heart failure, the swelling will be:',
      options: [
        { id: 'a', text: 'Lower in protein content and readily pitting' },
        { id: 'b', text: 'Higher in protein content, eventually fibrotic and non-pitting' },
        { id: 'c', text: 'Associated with a raised capillary hydrostatic pressure' },
        { id: 'd', text: 'Fully corrected by loop diuretics' },
      ],
      answerId: 'b',
      explanation: 'Lymph is the only route by which filtered protein returns to blood, so obstruction leaves protein in the interstitium; the resulting high-protein fluid raises interstitial oncotic pressure and drives chronic inflammation and fibrosis, producing non-pitting swelling. Capillary hydrostatic pressure is normal (c), and diuretics remove water while leaving the protein behind (d).',
      tests: 'exam',
    },
    {
      id: 'q3',
      stem: 'Which combination best accounts for the roughly 17 mmHg safety factor against oedema?',
      options: [
        { id: 'a', text: 'Plasma colloid osmotic pressure alone' },
        { id: 'b', text: 'Increased capillary reabsorption plus arteriolar constriction' },
        { id: 'c', text: 'Low interstitial compliance, increased lymph flow, and washdown of interstitial protein' },
        { id: 'd', text: 'Increased venous return and reduced cardiac filling pressure' },
      ],
      answerId: 'c',
      explanation: 'The three components are approximately 3 mmHg from the stiffness of the interstitium in the negative-pressure range, 7 mmHg from a 10- to 50-fold rise in lymph flow, and 7 mmHg from the lowering of interstitial colloid osmotic pressure as that lymph flow washes protein out. Plasma oncotic pressure is a baseline Starling force, not a reserve mechanism.',
      tests: 'mechanism',
    },
  ],
};

export default ghpLymphaticInterstitialFluid;
