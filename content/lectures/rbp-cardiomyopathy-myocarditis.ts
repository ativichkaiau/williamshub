import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpCardiomyopathyMyocarditis: Lecture = {
  id: 'rbp-cardiomyopathy-myocarditis',
  title: 'Cardiomyopathy & Myocarditis',
  system: 'cardiovascular',
  source: 'Ch 10 — Heart',
  updated: '2026-09-16',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 10 Heart' },
    { kind: 'mechanism', label: 'Systolic, diastolic and filling failure of intrinsic muscle' },
    { kind: 'disease', label: 'Dilated, hypertrophic and restrictive disease with myocarditis' },
  ],

  highYield: [
    '**Classify the cardiomyopathies by what the ventricle cannot do, not by what they are called — and let the atria tell you when filling is the problem.** The word itself is exclusionary: cardiomyopathy is **intrinsic** myocardial disease, so dysfunction caused by ischaemia, hypertension, valve disease or a congenital lesion is not cardiomyopathy however similar it looks. Three physiologies, each with its own number. **Dilated**: the ventricle cannot squeeze, ejection fraction typically below **40%** and often **10 to 30%** — systolic failure. **Hypertrophic**: the ventricle cannot relax, ejection fraction **50 to 80%** and frequently supranormal — diastolic failure with a **high** ejection fraction, which is the counterintuitive part. **Restrictive**: the ventricle cannot be filled at all, with **normal or near-normal wall thickness** and normal systolic function. Geometry follows physiology. Dilated disease enlarges **all four chambers**, and heart weight can reach **900 g** while wall thickness stays normal or even looks thin, because the mass is spread over a bigger radius. Hypertrophic disease gives a massively thick wall with a **slit-like, banana-shaped cavity** and heart weight of **600 to 700 g**. Restrictive disease leaves the ventricles normal in size and thickness but produces **biatrial dilatation** — and that is the usable rule: **huge atria with normal ventricles means the problem is filling**, whatever the cause. Detail per phenotype sits in [[dilated-cardiomyopathy]], [[hypertrophic-cardiomyopathy]] and [[restrictive-cardiomyopathy]].',
    '**Dilated cardiomyopathy is a failure to transmit force, and its biopsy is diagnostic only by exclusion — so the causes are what you are actually being asked.** Between **30 and 50%** are familial, usually autosomal dominant, and the mutations hit the **cytoskeleton and force-transmission apparatus** rather than the contractile machinery: **titin** truncations are the single commonest, accounting for roughly **20%** of familial cases; **lamin A/C** mutations bring **conduction disease and sudden death**, so a dilated cardiomyopathy presenting with heart block is a lamin mutation until disproved; **desmin** and **dystrophin** follow, the last X-linked as the cardiac face of Duchenne and Becker muscular dystrophy. Acquired causes worth naming individually: **alcohol** (direct myocyte toxicity plus thiamine deficiency), previous **viral myocarditis** (enteroviruses above all), **doxorubicin** (dose-dependent, mediated by free radicals and by topoisomerase 2 beta, and largely irreversible), **trastuzumab** (usually reversible), **cocaine**, **iron overload**, and **peripartum** cardiomyopathy arising from the last trimester to six months postpartum, of which about **half recover**. **Takotsubo** is the catecholamine variant — apical ballooning with a hypercontractile base after acute stress, typically reversible in weeks. The morphology is a flabby, heavy, globally dilated heart with **mural thrombi** in the apex and appendages from stasis, while histology shows only myocyte hypertrophy with interstitial and replacement fibrosis. The biopsy therefore tells you what it is **not**.',
    '**Hypertrophic cardiomyopathy is a sarcomere disease, and myofibre disarray is simultaneously its diagnostic histology and its arrhythmic mechanism.** Inheritance is autosomal dominant with a prevalence near **1 in 500**, and essentially all cases are caused by mutations in **sarcomeric proteins** — beta-myosin heavy chain (**MYH7**) and myosin-binding protein C (**MYBPC3**) account for most of them, with well over a thousand mutations described. Morphology: **asymmetric septal hypertrophy** with a septum-to-free-wall ratio above **1.3**, a slit-like cavity, and on histology the pathognomonic **myofibre disarray** — myocytes running obliquely and perpendicularly instead of in parallel — together with interstitial fibrosis and **thickened intramural arterioles**. Each of those three findings has a clinical consequence that can be derived. Disarray makes conduction **anisotropic** and creates re-entry, which is why hypertrophic cardiomyopathy is the leading cause of **sudden cardiac death in young athletes**, and it kills an apparently healthy heart with no infarct to find. Fibrosis plus small-vessel disease produces **angina with angiographically normal coronary arteries**, because supply cannot rise to meet a thicker, hypercontractile muscle. And the thickened, stiff, hypercontractile ventricle produces breathlessness at a **normal or supranormal** ejection fraction, because what has failed is filling. Add **dynamic outflow obstruction**: the bulging septum narrows the outflow tract, accelerated flow drags the anterior mitral leaflet into the tract — **systolic anterior motion** — which worsens the obstruction and simultaneously produces a posteriorly directed jet of mitral regurgitation.',
    '**Because the obstruction in hypertrophic cardiomyopathy is DYNAMIC, everything that empties the ventricle makes the murmur and the gradient worse — which inverts the rule for every other left-sided systolic murmur.** The gradient depends on the calibre of the outflow tract at that instant, and the tract is narrowed by anything that shrinks the cavity. So manoeuvres that **reduce preload or afterload** make the murmur **louder** and the gradient **larger**: standing up from squatting, the strain phase of a Valsalva manoeuvre, nitrates, diuretics, dehydration, and tachycardia, which steals filling time. Manoeuvres that **increase preload or afterload** make the murmur **softer**: squatting, passive leg raising, handgrip, and volume loading. Aortic stenosis, mitral regurgitation and a ventricular septal defect all behave in the opposite direction, because those obstructions and orifices are **fixed** and the murmur simply tracks flow — which is exactly why the question gets asked. The only other common lesion that shares the direction is **mitral valve prolapse**, for a different reason: a smaller ventricle lets the redundant leaflet prolapse earlier. The pulse settles it at the bedside: hypertrophic cardiomyopathy gives a **brisk, bisferiens** carotid upstroke with a mid-systolic dip as obstruction develops, while fixed aortic stenosis gives a **slow-rising, low-volume** pulse. That single contour separates two murmurs that sound alike, and it also explains why septal reduction — surgical myectomy or alcohol septal ablation — works: it enlarges the tract.',
    '**Restrictive cardiomyopathy is defined by a NORMAL wall thickness, and in the adult the disease you must not miss is amyloid, which announces itself by a thick wall with LOW ECG voltage.** The definition is impaired ventricular **filling** with normal or near-normal wall thickness and preserved systolic function; the thickness clause is what excludes hypertrophic and hypertensive disease. Causes: **amyloidosis** above all, then endomyocardial fibrosis (tropical, in children and young adults), **Loffler endomyocarditis** (hypereosinophilic, with an eosinophil-rich infiltrate and large mural thrombi), endocardial fibroelastosis in infants, radiation fibrosis, sarcoidosis and metastatic infiltration. Cardiac amyloid deposits **beta-pleated sheet fibrils** in the interstitium, demonstrated by **Congo red** with **apple-green birefringence** under polarised light. Two types matter and they are treated differently: **AL**, immunoglobulin light chains from a plasma cell dyscrasia, and **ATTR**, transthyretin, either the wild-type senile form in older men or the hereditary V122I variant. The examinable discriminator is a **mismatch**: echocardiography shows a **thickened, granular, sparkling** myocardium while the ECG shows **low voltage**, often with pseudo-infarct Q waves. That combination is impossible in true hypertrophy, where real muscle generates voltage; here the thickness is deposited protein, which is electrically inert. Add **biatrial dilatation** with normal-sized ventricles and a restrictive filling pattern, and the picture is complete. The differential that always accompanies it is constrictive pericarditis, which produces almost identical haemodynamics from outside the myocardium.',
    '**Myocarditis is inflammation with myocyte necrosis NOT caused by ischaemia, and its two consequences are sudden death in the young and dilated cardiomyopathy later.** The second half of that definition carries the weight, because ischaemic necrosis also attracts inflammatory cells; what makes a biopsy diagnostic is an interstitial **lymphocytic** infiltrate of T cells and macrophages **with adjacent myocyte necrosis**, not an infiltrate on its own. The commonest cause in developed countries is **viral** — **Coxsackie A and B** and other enteroviruses above all, then adenovirus, **parvovirus B19**, human herpesvirus 6, influenza, HIV and SARS-CoV-2. Injury proceeds in two phases, which is why the timing of treatment matters: **direct viral cytotoxicity** in the first days, then **T cell mediated** attack on virally altered or cross-reactive myocyte antigens over the following weeks. Four named patterns are worth holding because each changes management. **Giant cell myocarditis**: multinucleate giant cells with extensive necrosis, fulminant, with a very high mortality and a genuine indication for immunosuppression or transplantation. **Hypersensitivity myocarditis**: an **eosinophil-rich** perivascular infiltrate caused by a drug — methyldopa, sulphonamides, clozapine — that reverses when the drug is stopped. **Chagas myocarditis**: Trypanosoma cruzi amastigote pseudocysts within myocytes, with late megaoesophagus, megacolon and an apical aneurysm. **Lyme carditis**: Borrelia, presenting characteristically as atrioventricular block. Because inflammation heals by fibrosis, myocarditis is the single best-understood route into dilated cardiomyopathy, and the same fibrosis is an arrhythmic substrate in a heart that otherwise looks normal — hence its place among the leading causes of sudden death under 40. Extended in [[myocarditis]].',
  ],

  mechanism: {
    title: 'One insult, three failing physiologies',
    steps: [
      { id: 's1', label: 'An intrinsic myocardial insult: a sarcomeric or cytoskeletal mutation, a virus, a toxin or an infiltrating protein', detail: 'The definition excludes ischaemia, hypertension, valve disease and congenital lesions, however similar the end picture.', emphasis: 'normal' },
      { id: 's2', label: 'Cytoskeletal or toxic injury: force cannot be transmitted, sarcomeres are added in series and the chamber dilates', detail: 'Systolic failure with an ejection fraction often between 10 and 30%.', emphasis: 'key' },
      { id: 's3', label: 'Sarcomeric mutation: hypercontractile, disarrayed, thickened myocardium that cannot relax', detail: 'Diastolic failure with a normal or supranormal ejection fraction, plus dynamic outflow obstruction.', emphasis: 'key' },
      { id: 's4', label: 'Interstitial infiltration by amyloid or fibrosis: a stiff shell of normal wall thickness that cannot be filled', detail: 'Thick wall with low ECG voltage is deposited protein, not muscle.', emphasis: 'key' },
      { id: 's5', label: 'Whichever route, atrial pressures rise, the atria dilate, and annular stretch adds functional mitral and tricuspid regurgitation', emphasis: 'normal' },
      { id: 's6', label: 'Disarray and interstitial fibrosis create anisotropic conduction and re-entry: ventricular arrhythmia and sudden death, often before any symptom', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'A harsh mid-systolic murmur at the left sternal border that becomes louder on standing and during the strain phase of a Valsalva manoeuvre', mechanism: 'Dynamic left ventricular outflow obstruction in hypertrophic cardiomyopathy; reducing cavity volume narrows the tract, so the gradient and the murmur both increase', significance: 'key' },
    { sign: 'A brisk bisferiens carotid upstroke with a double apical impulse and a fourth heart sound', mechanism: 'A hypercontractile ventricle ejecting rapidly until dynamic obstruction develops mid-systole; the rapid upstroke is what separates this from the slow-rising pulse of fixed aortic stenosis', significance: 'key' },
    { sign: 'A diffuse displaced apex with a third heart sound, a soft pansystolic murmur at the apex and a raised jugular venous pressure', mechanism: 'Dilated cardiomyopathy: eccentric remodelling displaces the apex, annular dilatation produces functional mitral regurgitation, and rapid early filling of a large ventricle produces the third sound', significance: 'key' },
    { sign: 'A raised jugular venous pressure with a prominent rapid y descent and a jugular pressure that rises on inspiration', mechanism: 'Restrictive physiology: the ventricle fills fast in early diastole then stops abruptly against a stiff chamber, and the venous return cannot be accommodated', significance: 'key' },
    { sign: 'Macroglossia, periorbital purpura and bilateral carpal tunnel syndrome in a man with a thick-walled ventricle', mechanism: 'Systemic AL amyloidosis: light chain fibrils deposit in tongue, small vessels and the flexor retinaculum as well as the myocardium, so the extracardiac signs identify the type', significance: 'key' },
    { sign: 'Fever, pleuritic chest pain and new heart failure with a gallop in a young adult several days after a viral illness', mechanism: 'Viral myocarditis with accompanying pericardial involvement; myocyte necrosis and oedema depress contraction while the inflamed pericardium generates the pain', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Echocardiogram with a septum of 2.4 cm, a posterior wall of 1.0 cm, an ejection fraction of 72% and systolic anterior motion of the mitral valve', meaning: 'Hypertrophic cardiomyopathy with asymmetric septal hypertrophy above the 1.3 ratio and dynamic obstruction. Breathlessness with a supranormal ejection fraction locates the fault in filling, not emptying' },
    { clue: 'Endomyocardial biopsy showing myocytes in chaotic oblique orientation with interstitial fibrosis and thickened intramural arterioles', meaning: 'The histological signature of hypertrophic cardiomyopathy, and the substrate for both of its clinical dangers: re-entrant arrhythmia from disarray, and angina despite normal epicardial coronary arteries from small-vessel disease' },
    { clue: 'A thickened, granular, sparkling myocardium on echocardiography with low voltages on the ECG', meaning: 'Infiltration rather than hypertrophy, and in an adult that means amyloid. Real muscle generates voltage in proportion to its mass, so thickness and voltage moving in opposite directions is the discriminating mismatch' },
    { clue: 'Congo red staining of an abdominal fat pad or endomyocardial biopsy showing apple-green birefringence under polarised light', meaning: 'Confirms amyloid fibrils. Typing by mass spectrometry or immunohistochemistry then separates AL from ATTR, which is the step that determines whether a plasma cell clone must be treated' },
    { clue: 'Endomyocardial biopsy with an interstitial lymphocytic infiltrate and adjacent myocyte necrosis', meaning: 'Myocarditis. The necrosis is the criterion, because a lymphocytic infiltrate alone can be reactive, and ischaemic necrosis would have to be excluded by the coronary anatomy' },
    { clue: 'Biopsy showing multinucleate giant cells with widespread necrosis in a patient deteriorating over days', meaning: 'Giant cell myocarditis, which needs urgent immunosuppression or transplant assessment. Cardiac sarcoidosis also gives giant cells but forms well-defined non-caseating granulomas and follows an indolent course' },
  ],

  treatment: [
    {
      logic: 'In hypertrophic cardiomyopathy almost everything that helps ordinary heart failure makes the patient worse',
      detail: 'The gradient is inversely related to cavity size, so **diuretics, nitrates and pure arterial vasodilators shrink the ventricle and increase the obstruction** — the standard heart failure reflexes are actively harmful here. What helps works by the same logic in reverse: **beta blockers** and **non-dihydropyridine calcium channel blockers** slow the rate and lengthen diastole, so the ventricle is fuller and the tract is wider, and they blunt the hypercontractility that drives systolic anterior motion. Maintain preload and afterload rather than reducing them; treat atrial fibrillation aggressively, because the loss of atrial systole matters far more in a ventricle that depends on late filling. When drugs fail, the definitive treatments are mechanical because the problem is mechanical: **septal myectomy** or **alcohol septal ablation** enlarge the outflow tract, and an **implantable defibrillator** addresses the arrhythmic risk that myofibre disarray creates and that no drug removes.',
    },
    {
      logic: 'Name the cardiomyopathy by what the ventricle cannot do, because the label decides whether the myocardium is salvageable',
      detail: 'Several dilated phenotypes are **reversible if the cause is removed** — **alcohol**, persistent **tachycardia**, **thyrotoxicosis**, **iron overload**, **peripartum** disease with roughly half recovering, and **takotsubo** over weeks. Two inflammatory phenotypes are time-critical in opposite directions: **giant cell myocarditis** deteriorates over days and needs immunosuppression or transplantation, while **hypersensitivity myocarditis** resolves simply by stopping the offending drug, so identifying **eosinophils** on the biopsy changes everything. **AL amyloid** is a haematological emergency dressed as heart failure, since treating the plasma cell clone is the only thing that alters the trajectory. And two caveats about drugs: in amyloid the ventricle is preload-dependent and intolerant of aggressive diuresis, and a **lamin A/C** dilated cardiomyopathy warrants early defibrillator consideration because sudden death precedes pump failure.',
    },
  ],

  mnemonics: [
    {
      hook: 'Three cardiomyopathies, one question each',
      expansion: [
        'Can it squeeze? No, in dilated disease — systolic failure, ejection fraction often 10 to 30%, four dilated chambers',
        'Can it relax? No, in hypertrophic disease — diastolic failure with an ejection fraction of 50 to 80%, asymmetric septum, myofibre disarray',
        'Can it be filled at all? No, in restrictive disease — normal wall thickness, normal systolic function, biatrial dilatation',
        'If the atria are huge and the ventricles are normal, the fault is filling',
        'If the wall is thick but the ECG voltage is low, the thickness is deposited protein, not muscle',
      ],
    },
    {
      hook: 'Less blood in the ventricle, louder the murmur — and only two lesions do this',
      expansion: [
        'Hypertrophic cardiomyopathy: a smaller cavity narrows the dynamic outflow tract',
        'Mitral valve prolapse: a smaller cavity lets the redundant leaflet prolapse earlier',
        'Standing and the Valsalva strain empty the ventricle, so both get louder',
        'Squatting, leg raising and handgrip fill the ventricle, so both get softer',
        'Aortic stenosis, mitral regurgitation and a septal defect are fixed orifices and do exactly the opposite',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'Interpreting a thick ventricular wall',
      wrongInstinct: 'The wall is thick, so this is hypertrophy — either hypertrophic cardiomyopathy or hypertensive heart disease',
      rightAnswer: 'A thick wall with LOW ECG voltage is infiltration, and in an adult that means amyloid; the ventricles will be normal in cavity size with grossly dilated atria',
      why: 'Contractile muscle generates voltage in proportion to its mass, so thickness and voltage always move together in true hypertrophy — when they move in opposite directions the thickness is deposited protein',
    },
    {
      questionCategory: 'Predicting what a manoeuvre does to a systolic murmur',
      wrongInstinct: 'Squatting increases venous return, so more blood crosses the lesion and every systolic murmur gets louder',
      rightAnswer: 'In hypertrophic cardiomyopathy squatting makes the murmur softer, because the larger cavity widens the outflow tract and reduces the gradient',
      why: 'A dynamic obstruction varies inversely with ventricular volume, while a fixed obstruction varies directly with flow — so decide first whether the narrowing is muscle that moves or an orifice that does not',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 17-year-old collapses and dies while playing football. His uncle died suddenly at 30. At autopsy the heart weighs 540 g with a septum of 2.8 cm, a free wall of 1.1 cm and a slit-like cavity; histology shows myocytes running in chaotic oblique directions with interstitial fibrosis. Which best explains the fatal arrhythmia?',
      options: [
        { id: 'a', text: 'Occlusive coronary atherosclerosis causing an acute infarct' },
        { id: 'b', text: 'Myofibre disarray with interstitial fibrosis, creating anisotropic conduction and re-entry' },
        { id: 'c', text: 'Interstitial amyloid deposition producing electrical silence' },
        { id: 'd', text: 'A lymphocytic infiltrate with myocyte necrosis' },
      ],
      answerId: 'b',
      explanation: 'The septum to free wall ratio well above 1.3 with a slit cavity is asymmetric septal hypertrophy, and the chaotic myocyte orientation is myofibre disarray, the pathognomonic histology of hypertrophic cardiomyopathy. Disarray and patchy fibrosis make conduction direction-dependent, which supports re-entrant ventricular arrhythmia, and this is why the condition leads the causes of sudden cardiac death in young athletes. The value of knowing the mechanism is that it is not abolished by relieving the outflow gradient, which is why defibrillator decisions are made separately from myectomy.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A 68-year-old man has progressive breathlessness. Echocardiography shows a left ventricular wall of 1.7 cm with a granular sparkling texture, an ejection fraction of 55% and marked biatrial dilatation. The ECG shows low voltages with Q waves in V1 to V3 and no history of infarction. What is the diagnosis?',
      options: [
        { id: 'a', text: 'Hypertensive left ventricular hypertrophy' },
        { id: 'b', text: 'Hypertrophic cardiomyopathy' },
        { id: 'c', text: 'Cardiac amyloidosis' },
        { id: 'd', text: 'Constrictive pericarditis' },
      ],
      answerId: 'c',
      explanation: 'A thick wall with low ECG voltage is the mismatch that identifies infiltration, because deposited protein adds bulk without adding electrically active muscle. The granular sparkling texture, the pseudo-infarct Q waves and biatrial dilatation with preserved systolic function complete the restrictive picture. Confirmation is Congo red with apple-green birefringence, and typing then separates AL from ATTR, since AL requires urgent treatment of the plasma cell clone. Hypertensive hypertrophy and hypertrophic cardiomyopathy both raise voltage, and constrictive pericarditis does not thicken the myocardium.',
      tests: 'investigation',
    },
    {
      id: 'q3',
      stem: 'A 23-year-old presents with heart failure ten days after a febrile illness. Coronary arteries are normal. Endomyocardial biopsy shows an interstitial infiltrate of T lymphocytes and macrophages with necrosis of adjacent myocytes. Which statement is correct?',
      options: [
        { id: 'a', text: 'The necrosis indicates coronary occlusion that angiography has missed' },
        { id: 'b', text: 'This is myocarditis, usually enteroviral, and a recognised route both to sudden death in the young and to dilated cardiomyopathy' },
        { id: 'c', text: 'An interstitial lymphocytic infiltrate is diagnostic whether or not myocytes are necrotic' },
        { id: 'd', text: 'Eosinophils in this distribution would be the expected finding' },
      ],
      answerId: 'b',
      explanation: 'Myocarditis is defined as inflammation with myocyte injury that is not ischaemic, so both halves of the biopsy finding are needed: an infiltrate alone may be reactive, and necrosis alone could be ischaemic. Coxsackie and other enteroviruses dominate, and injury runs in two phases, direct viral cytotoxicity followed by T cell mediated attack. Because the inflammation heals by fibrosis, it is the clearest route into dilated cardiomyopathy and it leaves an arrhythmic substrate in a heart that otherwise appears structurally normal. An eosinophil-rich perivascular infiltrate would instead indicate drug hypersensitivity myocarditis, which reverses on stopping the drug.',
      tests: 'disease',
    },
  ],
};

export default rbpCardiomyopathyMyocarditis;
