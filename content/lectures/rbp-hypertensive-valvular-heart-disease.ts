import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpHypertensiveValvularHeartDisease: Lecture = {
  id: 'rbp-hypertensive-valvular-heart-disease',
  title: 'Hypertensive & Valvular Heart Disease',
  system: 'cardiovascular',
  source: 'Ch 10 — Heart',
  updated: '2026-09-16',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 10 Heart' },
    { kind: 'mechanism', label: 'Pressure versus volume overload and valve remodelling' },
    { kind: 'disease', label: 'Calcific, myxomatous, rheumatic and infective valve disease' },
  ],

  highYield: [
    '**One mechanical distinction predicts chamber geometry, the mode of failure and the murmur: pressure overload adds sarcomeres in PARALLEL, volume overload adds them in SERIES.** Wall stress is governed by Laplace, proportional to pressure times radius divided by twice the wall thickness. **Pressure overload** — hypertension, aortic stenosis, coarctation — raises systolic wall stress; the myocyte answers by laying down sarcomeres side by side, so it becomes **thicker**, the wall thickens **inward at the expense of the cavity**, and the wall-to-cavity ratio rises. That is **concentric hypertrophy**. **Volume overload** — aortic or mitral regurgitation, a left-to-right shunt — raises diastolic wall stress; the myocyte adds sarcomeres end to end, so it **elongates**, the chamber **dilates**, and wall thickness rises only enough to keep pace with the larger radius. That is **eccentric hypertrophy**, in which cardiac **mass** increases while wall thickness may look normal. Every downstream prediction follows. Concentric geometry gives a **stiff** ventricle that fills poorly at high pressure with a **preserved ejection fraction** — diastolic failure, an **S4**, pulmonary congestion with a **normal-sized heart** on the chest radiograph, and an apex that heaves without displacing. Eccentric geometry gives a large compliant ventricle that eventually cannot empty — systolic failure, an **S3**, **cardiomegaly**, and a **displaced** hyperdynamic apex. Even the murmur is predicted: the pressure-loaded lesion obstructs outflow and gives an **ejection systolic** murmur, while the volume-loaded lesion leaks and gives a **regurgitant** murmur. Remodelling biology is extended in [[cardiac-hypertrophy-remodeling]].',
    '**Hypertensive heart disease is diagnosed by two criteria only, and its danger is that the muscle outgrows its own blood supply.** The criteria are **left ventricular hypertrophy, usually concentric, with no other cause**, plus a **history or pathological evidence of hypertension**. At autopsy the heart weighs more than **500 g** against a normal **300 to 360 g** in men and **250 to 320 g** in women, and the left ventricular free wall exceeds **2.0 cm** against a normal **1.3 to 1.5 cm**. Down the microscope the myocytes are enlarged with **boxcar nuclei** — large, rectangular, hyperchromatic — set in **interstitial fibrosis**. The mechanism of harm is a mismatch: the hypertrophied myocyte increases its oxygen demand and its diffusion distance, but **capillary density does not increase with it**, so the subendocardium becomes ischaemic even with angiographically normal coronaries, and the added interstitial collagen stiffens the chamber further. Left ventricular hypertrophy is therefore an **independent** predictor of sudden cardiac death, of atrial fibrillation once the left atrium dilates behind a stiff ventricle, and of heart failure. The right-sided analogue is **cor pulmonale**, right ventricular pressure overload arising from lung parenchyma or pulmonary vasculature: **acute** cor pulmonale is dilatation without hypertrophy because there is no time to hypertrophy, while **chronic** cor pulmonale thickens the right ventricular free wall from **0.3 to 0.5 cm** up to **1.0 cm** or more. Right ventricular hypertrophy caused by left heart disease is excluded from the term by definition.',
    '**Calcific aortic stenosis is an active, regulated, atherosclerosis-like disease of the valve, not passive wear — and a bicuspid valve runs the same programme about two decades early.** The process involves **lipid deposition and oxidation**, **macrophage and T lymphocyte** infiltration, and **osteoblastic differentiation of valvular interstitial cells** with expression of **RUNX2** and **osteopontin**, ending in genuine bone formation in some valves. The morphology is diagnostic: heaped **calcific masses on the OUTFLOW (aortic) surface** of the cusps, filling the sinuses of Valsalva, with **free commissures**. That last point is the discriminator, because rheumatic aortic disease **fuses the commissures** and degenerative disease does not. On a normal tricuspid valve the disease presents in the **70s and 80s**; on a **congenitally bicuspid valve**, present in **1 to 2%** of the population and carrying a raphe, abnormal shear and higher mechanical stress accelerate the identical process into the **50s and 60s**. A bicuspid valve is also a marker of a shared medial abnormality, hence its association with **coarctation of the aorta** and with **aortic root dilatation and dissection** independent of the valve gradient. Physiologically the lesion is pure pressure overload with concentric hypertrophy, which explains **angina despite normal coronary arteries** and **exertional syncope** from a fixed cardiac output — and a counterintuitive late sign, a murmur that becomes **quieter** as the failing ventricle can no longer generate the gradient. The clinical layer sits in [[aortic-stenosis]].',
    '**Mitral valve prolapse is a disease of the load-bearing layer of the leaflet, and the auscultation can be derived from that rather than memorised.** In **myxomatous degeneration** the **spongiosa** expands with **glycosaminoglycan**, while the **fibrosa** — the collagenous layer that actually carries the closing load — is attenuated and fragmented. The leaflets therefore balloon, the chordae elongate and thin, and **chordal rupture** becomes the mechanism of acute severe mitral regurgitation. It affects **2 to 3%** of adults with a female predominance, and occurs either as a primary disorder or secondary to a connective tissue disease — **Marfan syndrome** with FBN1 mutations and TGF-beta dysregulation, or Ehlers-Danlos syndrome. Now derive the signs: the **mid-systolic click** is the instant at which the elongated chordae snap taut, so anything that **reduces left ventricular volume** allows the redundant leaflet to prolapse **earlier** — standing from squatting or straining against a closed glottis move the click **earlier** and **lengthen** the murmur, while squatting and handgrip do the reverse. Complications are mitral regurgitation with left atrial enlargement and atrial fibrillation, infective endocarditis on the abnormal leaflet, chordal rupture, and rarely ventricular arrhythmia. Keep it separate from **secondary or functional** mitral regurgitation, where the leaflets are structurally normal but annular dilatation and papillary muscle displacement by a dilated ventricle prevent coaptation.',
    '**Rheumatic heart disease is type II hypersensitivity by molecular mimicry, and its two morphologies — acute Aschoff bodies and late commissural fusion — are the same disease seen at different times.** Acute rheumatic fever follows **group A streptococcal pharyngitis** (not skin infection) after **2 to 4 weeks** in about **3%** of untreated patients. Antibodies and CD4 T cells raised against streptococcal **M protein** cross-react with **cardiac myosin, laminin and valve glycoproteins**; binding to valvular endothelium upregulates **VCAM-1** and admits T cells, so the damage is immune rather than infective and the valve is sterile. Acute morphology is a **pancarditis** whose hallmark is the **Aschoff body**: a focus of **fibrinoid necrosis** ringed by lymphocytes, plasma cells and plump activated macrophages called **Anitschkow cells**, whose chromatin forms a central wavy ribbon, hence caterpillar cells; fused forms are Aschoff giant cells. On the valve itself are **verrucae**, small warty sterile vegetations along the **lines of closure** that do not embolise appreciably, and in the left atrium **MacCallum plaques** from regurgitant jets. The chronic morphology is what examiners want: leaflet thickening, **commissural fusion**, and **short thick fused chordae**, converting the mitral orifice into a fixed **fish-mouth or buttonhole** slit. The **mitral valve is involved in almost every case** — alone in about **65 to 70%**, with the aortic valve in another **25%** — because it bears the highest closing pressure. The consequences follow the obstruction, not the muscle: left atrial dilatation with atrial fibrillation, mural thrombus and systemic embolism, and pulmonary hypertension with right heart failure, all with a **normal-sized left ventricle**. Developed further in [[rheumatic-heart-disease]].',
    '**Discriminate endocarditis on three axes — organism virulence, the state of the valve beforehand, and whether the vegetation is infected at all.** **Acute infective endocarditis**: a virulent organism, characteristically **Staphylococcus aureus**, seeding a **previously normal** valve and producing **bulky, friable, destructive** vegetations that ulcerate cusps, perforate leaflets and burrow into the annulus as **ring abscesses**, killing within days to weeks in a large minority even with treatment; in intravenous drug use it favours the **right side and the tricuspid valve**. **Subacute infective endocarditis**: a low-virulence organism, classically **viridans group streptococci** from the oral cavity, seeding an **already abnormal** valve — myxomatous, bicuspid, rheumatic or prosthetic — and producing **smaller, less destructive** vegetations over weeks to months with fever, weight loss and splenomegaly. The immune complex stigmata (**Osler nodes, Roth spots, glomerulonephritis**) belong to the subacute form for a mechanistic reason: they require weeks of continuous antigen exposure to build an antibody response, which the acute form does not allow. Place the other organisms by context: **Staphylococcus epidermidis** on prosthetic valves, **Streptococcus gallolyticus** with colonic carcinoma, enterococci after genitourinary instrumentation, HACEK organisms, and Candida with lines and drug use. Then the two **sterile** forms. **Non-bacterial thrombotic (marantic) endocarditis** is small, bland fibrin-platelet vegetation loosely attached along the **line of closure** of a structurally normal valve, with **no inflammation and no destruction**, driven by a hypercoagulable state — mucinous adenocarcinoma, especially pancreatic, plus sepsis, DIC and indwelling catheters. It matters because it **embolises**. **Libman-Sacks endocarditis** of systemic lupus is immune-complex mediated and is defined by its location: small sterile vegetations on **either or both surfaces of the leaflet, including the undersurface**, spilling onto chordae and mural endocardium. Surface is the discriminator no other lesion shares. Clinical management sits in [[infective-endocarditis]].',
  ],

  mechanism: {
    title: 'Load, leaflet and the shape of the chamber',
    steps: [
      { id: 's1', label: 'A chronic load is imposed: pressure from hypertension or a stenotic valve, volume from a regurgitant valve or a shunt', emphasis: 'normal' },
      { id: 's2', label: 'Wall stress rises by Laplace, and the myocyte reads the mechanical signal through its cytoskeleton', detail: 'Stress is proportional to pressure times radius, divided by twice the wall thickness.', emphasis: 'key' },
      { id: 's3', label: 'Pressure overload adds sarcomeres in parallel: thicker myocytes, a thicker wall and a smaller cavity', detail: 'Concentric hypertrophy, with a raised wall-to-cavity ratio.', emphasis: 'key' },
      { id: 's4', label: 'Volume overload adds sarcomeres in series: longer myocytes and a dilated cavity whose wall thickness only keeps pace with the radius', detail: 'Eccentric hypertrophy, with increased mass but an unimpressive wall measurement.', emphasis: 'key' },
      { id: 's5', label: 'Geometry dictates the failure mode: the concentric ventricle cannot fill, the eccentric ventricle cannot empty', emphasis: 'normal' },
      { id: 's6', label: 'Capillary density and coronary reserve fail to keep up with the muscle, giving subendocardial ischaemia, interstitial fibrosis, arrhythmia and sudden death', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Ejection systolic murmur at the right upper sternal edge radiating to the carotids, with a slow-rising low-volume pulse and an apex that heaves but is not displaced', mechanism: 'Severe aortic stenosis with concentric hypertrophy; the apex is undisplaced precisely because the wall thickened inward and the cavity never dilated', significance: 'key' },
    { sign: 'A mid-systolic click that moves earlier and a murmur that lengthens when the patient stands up from squatting', mechanism: 'Mitral valve prolapse; reducing left ventricular volume lets the redundant myxomatous leaflet reach its prolapse point sooner, so the chordae snap taut earlier in systole', significance: 'key' },
    { sign: 'A loud first heart sound with an opening snap close to the second sound and a low-pitched rumbling mid-diastolic murmur, in a patient in atrial fibrillation', mechanism: 'Rheumatic mitral stenosis from commissural fusion; the snap is the stiff fused leaflet halting, and a short interval from the second sound means a high left atrial pressure, so the interval grades severity', significance: 'key' },
    { sign: 'A displaced hyperdynamic apex with a soft first heart sound, a third heart sound and a blowing holosystolic murmur radiating to the axilla', mechanism: 'Chronic mitral regurgitation with eccentric hypertrophy: sarcomeres added in series dilate the ventricle, and the regurgitant volume returning in early diastole produces the third sound', significance: 'key' },
    { sign: 'New murmur with splinter haemorrhages, Osler nodes and Roth spots evolving over six weeks in a man with a known bicuspid valve', mechanism: 'Subacute infective endocarditis on an abnormal valve; the immune complex phenomena require weeks of continuous antigenaemia, which is why they mark the subacute rather than the acute form', significance: 'key' },
    { sign: 'A loud fourth heart sound with a sustained apical impulse in a long-standing hypertensive whose chest radiograph shows no cardiomegaly', mechanism: 'Concentric hypertrophy: atrial systole against a non-compliant ventricle generates the fourth sound, and the silhouette is normal because the wall grew inward rather than outward', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Autopsy heart weighing 620 g with a left ventricular free wall of 2.2 cm and a small slit-like cavity', meaning: 'Hypertensive concentric hypertrophy, against a normal 300 to 360 g and 1.3 to 1.5 cm. Weight above 500 g with wall above 2.0 cm and no valve lesion satisfies the definition' },
    { clue: 'Left ventricular histology showing enlarged myocytes with rectangular hyperchromatic boxcar nuclei set in interstitial fibrosis', meaning: 'The cellular signature of pressure-overload hypertrophy. The fibrosis is what stiffens the chamber, and the unchanged capillary density is what makes it ischaemic' },
    { clue: 'An explanted aortic valve with nodular calcific masses heaped on the outflow surface of the cusps and unfused commissures', meaning: 'Calcific degenerative aortic stenosis. Commissural fusion would have made it rheumatic; counting cusps and finding a raphe then dates the onset two decades earlier' },
    { clue: 'Mitral leaflet histology with an expanded spongiosa rich in glycosaminoglycan and a fragmented attenuated fibrosa', meaning: 'Myxomatous degeneration. Destroying the fibrosa destroys the load-bearing layer, which is why the leaflet balloons and the chordae elongate and rupture' },
    { clue: 'A myocardial focus of fibrinoid necrosis ringed by lymphocytes and plump macrophages whose chromatin forms a central wavy ribbon', meaning: 'An Aschoff body with Anitschkow cells, diagnostic of rheumatic carditis. It dates the specimen to the acute phase, decades before commissural fusion appears' },
    { clue: 'Echocardiographic vegetations on both the atrial and ventricular surfaces of the mitral leaflet with three negative blood culture sets in a young woman with a positive antinuclear antibody', meaning: 'Libman-Sacks endocarditis of lupus. Sterile vegetations sitting on both surfaces including the undersurface is a combination no other endocarditis produces' },
  ],

  treatment: [
    {
      logic: 'Read the geometry before you read the ejection fraction',
      detail: 'A **normal ejection fraction in a concentrically hypertrophied ventricle is not reassurance** — it is the expected finding, because the lesion is a failure of filling rather than of emptying. The load is what you treat: lower the pressure in hypertensive heart disease and the hypertrophy regresses, relieve the gradient in aortic stenosis and the same happens, since the stimulus was mechanical throughout. In the volume-loaded ventricle the opposite reasoning applies: ejection fraction **overstates** function, because regurgitation offers the ventricle a low-pressure escape route, so an ejection fraction already drifting toward normal-low in chronic mitral regurgitation signals myocardial damage and closes the surgical window. Note also the trap in timing: in **acute** regurgitation the ventricle and atrium have had no time to dilate, so the murmur is short and the heart is of normal size while the patient is in pulmonary oedema — dramatic physiology on an unremarkable chest radiograph.',
    },
    {
      logic: 'A sterile vegetation is a systemic diagnosis wearing a cardiac costume',
      detail: 'When the vegetations are small and bland, the valve is undestroyed and the cultures are repeatedly negative, stop looking at the heart. **Non-bacterial thrombotic endocarditis** is a hypercoagulable state, so the search is for an occult **mucinous adenocarcinoma**, for **DIC** or for an indwelling catheter, and the threat is **embolic** rather than infective. **Libman-Sacks endocarditis** points to **systemic lupus** and to **antiphospholipid antibodies**, and is treated by treating the lupus. Neither responds to antibiotics, and neither justifies valve surgery on its own. The converse error is worse: an **acute Staphylococcus aureus** endocarditis on a normal valve destroys tissue in days, so a new regurgitant murmur, conduction delay from a developing ring abscess, or persistent bacteraemia are surgical findings, not observations.',
    },
  ],

  mnemonics: [
    {
      hook: 'Parallel thickens, series lengthens',
      expansion: [
        'Pressure overload: sarcomeres in parallel, concentric hypertrophy, small cavity',
        'That gives diastolic failure with a preserved ejection fraction, a fourth heart sound and an undisplaced heaving apex',
        'Volume overload: sarcomeres in series, eccentric hypertrophy, dilated cavity',
        'That gives systolic failure, a third heart sound, cardiomegaly and a displaced apex',
        'And the murmur follows the load: obstruction gives an ejection systolic murmur, leak gives a regurgitant one',
      ],
    },
    {
      hook: 'Four vegetations, told apart by valve, organism and surface',
      expansion: [
        'Acute infective: large destructive vegetations, Staphylococcus aureus, a previously NORMAL valve',
        'Subacute infective: small vegetations, viridans streptococci, an ALREADY ABNORMAL valve, with immune complex stigmata',
        'Marantic: small, bland and sterile on the line of closure, with malignancy or DIC behind it',
        'Libman-Sacks: small and sterile on EITHER surface including the undersurface, with lupus behind it',
        'Rheumatic verrucae: small, sterile, along the lines of closure, with Aschoff bodies in the myocardium',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'Dating the cause of calcific aortic stenosis',
      wrongInstinct: 'A 58-year-old with a heavily calcified stenotic aortic valve must have rheumatic disease, because degenerative calcification belongs to the elderly',
      rightAnswer: 'A congenitally bicuspid valve, present in 1 to 2% of people, runs the same active calcific programme about two decades earlier',
      why: 'Read the commissures, not the age — commissural fusion means rheumatic, while calcific nodules on the outflow surface of a raphe-bearing valve with free commissures means bicuspid degenerative disease',
    },
    {
      questionCategory: 'Locating a sterile vegetation on the leaflet',
      wrongInstinct: 'Sterile vegetations sit along the line of closure on the upstream surface, so the surface cannot separate the causes',
      rightAnswer: 'Libman-Sacks vegetations characteristically involve both surfaces of the leaflet, including the undersurface, and extend onto the chordae and mural endocardium',
      why: 'The rule is positional — line of closure only means marantic endocarditis or rheumatic verrucae, whereas vegetations on the undersurface of a sterile valve in a young woman mean lupus',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A man with twenty years of untreated hypertension has a heart of 610 g at autopsy, a left ventricular free wall of 2.3 cm and a small cavity. In life the ejection fraction was 62% with a markedly raised left ventricular end-diastolic pressure. Which mechanism accounts for this combination?',
      options: [
        { id: 'a', text: 'Sarcomeres added in series, elongating myocytes and dilating the chamber' },
        { id: 'b', text: 'Sarcomeres added in parallel, thickening the wall at the expense of the cavity and producing diastolic failure with a preserved ejection fraction' },
        { id: 'c', text: 'Widespread myocyte loss with replacement fibrosis after silent infarction' },
        { id: 'd', text: 'Interstitial deposition of amyloid fibrils thickening the wall' },
      ],
      answerId: 'b',
      explanation: 'Pressure overload raises systolic wall stress, and the myocyte responds by laying down sarcomeres side by side, so it thickens and the wall grows inward. The result is a small stiff cavity that empties normally, hence a preserved ejection fraction, but fills only at high pressure, hence the raised end-diastolic pressure and pulmonary congestion. Sarcomeres in series are the answer to volume overload and would have dilated the chamber. Amyloid would give a thick wall too, but with low ECG voltage and a normal heart weight for the apparent thickness.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A 61-year-old undergoes valve replacement for severe aortic stenosis. The explanted valve has two cusps with a central raphe, heaped calcific nodules on the outflow surface, and commissures that are not fused. Which is the correct diagnosis?',
      options: [
        { id: 'a', text: 'Chronic rheumatic aortic stenosis' },
        { id: 'b', text: 'Calcific stenosis of a congenitally bicuspid aortic valve' },
        { id: 'c', text: 'Healed infective endocarditis with leaflet destruction' },
        { id: 'd', text: 'Non-bacterial thrombotic endocarditis' },
      ],
      answerId: 'b',
      explanation: 'Commissural fusion is the structural fingerprint of rheumatic disease and it is absent here, while calcification heaped on the outflow surface with free commissures is degenerative. The two cusps and the raphe explain the age: abnormal shear across a bicuspid valve accelerates the same active osteoblastic process by roughly two decades, so it presents in the fifties and sixties rather than the seventies and eighties. The finding should also prompt a look at the aortic root and the arch, since bicuspid valves carry a shared medial abnormality with root dilatation and coarctation.',
      tests: 'disease',
    },
    {
      id: 'q3',
      stem: 'A 55-year-old with weight loss and anaemia has small vegetations along the line of closure of the mitral valve, three negative sets of blood cultures, a pancreatic mass on CT and small infarcts in the brain, spleen and kidneys. Which lesion is this?',
      options: [
        { id: 'a', text: 'Subacute infective endocarditis due to viridans streptococci' },
        { id: 'b', text: 'Non-bacterial thrombotic (marantic) endocarditis' },
        { id: 'c', text: 'Libman-Sacks endocarditis' },
        { id: 'd', text: 'Acute infective endocarditis due to Staphylococcus aureus' },
      ],
      answerId: 'b',
      explanation: 'Three negative culture sets with vegetations that neither inflame nor destroy the valve exclude infective endocarditis, and the mucin-secreting adenocarcinoma supplies the hypercoagulable state that drives bland fibrin-platelet deposition on the line of closure. The multiple small systemic infarcts are the point of the diagnosis, since these vegetations are loosely attached and their whole clinical significance is embolic. Libman-Sacks would sit on both leaflet surfaces in a patient with lupus, and an acute staphylococcal vegetation would be bulky and destructive with positive cultures.',
      tests: 'investigation',
    },
  ],
};

export default rbpHypertensiveValvularHeartDisease;
