import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpIschaemicHeartDiseaseInfarction: Lecture = {
  id: 'rbp-ischaemic-heart-disease-infarction',
  title: 'Ischaemic Heart Disease & Myocardial Infarction',
  system: 'cardiovascular',
  source: 'Ch 10 — Heart',
  updated: '2026-09-16',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 10 Heart' },
    { kind: 'mechanism', label: 'Supply-demand mismatch and the infarct timeline' },
    { kind: 'disease', label: 'Myocardial infarction and its dated complications' },
  ],

  highYield: [
    '**Ischaemia is an equation, not an event: myocardium dies when demand outruns supply, and in over 90% of cases it is the supply side that fails, because a fixed atherosclerotic plaque has become unstable.** The myocardium already extracts about **75%** of the oxygen delivered to it at rest, so it cannot meet extra demand by extracting more — it can only increase **flow**, and flow is what a plaque removes. A fixed stenosis of about **70%** of cross-sectional area is the critical threshold that produces angina on exertion; about **90%** produces inadequate flow at rest. Demand is set by **heart rate, contractility and wall tension** (Laplace: preload and afterload). Supply is set by **diastolic filling time**, by **coronary perfusion pressure** (aortic diastolic pressure minus left ventricular end-diastolic pressure) and by oxygen-carrying capacity. Notice that **tachycardia sits on both sides of the equation** — it raises demand while shortening the diastole in which the left ventricle is perfused, which is why rate control is mechanistically an anti-ischaemic manoeuvre and why any tachyarrhythmia can produce ischaemia without a new plaque. Plaque biology itself is developed in [[atherosclerosis]].',
    '**The subendocardium is the myocardial watershed, and that single anatomical fact generates the whole classification of infarcts.** Epicardial arteries run on the **outside** of the heart and send penetrating branches inward, so the subendocardium is the **last tissue reached**; it also bears the **highest wall stress** and is **compressed hardest during systole**, so its effective perfusion window is the shortest in the heart. It therefore becomes ischaemic first, and necrosis then spreads outward toward the epicardium over **3 to 6 hours** — the **wavefront phenomenon**. A **subendocardial infarct** is one in which the subendocardium is the **sole** territory involved: necrosis confined to the inner **one-third to one-half** of the wall, often **circumferential** and crossing the boundaries of more than one coronary territory, because the cause is **global hypoperfusion** — hypotension, shock, severe anaemia, aortic stenosis — rather than one occluded vessel. A **transmural infarct** is the opposite: it follows the distribution of **one epicardial artery**, spans the full wall thickness, and implies **complete thrombotic occlusion**. That anatomy is why the ECG splits the way it does, transmural giving **ST elevation** and subendocardial giving **ST depression**. Territories: **left anterior descending 40–50%** (anterior wall, apex, anterior two-thirds of septum), **right coronary 30–40%** (inferior wall, posterior septum, right ventricular free wall), **left circumflex 15–20%** (lateral wall). Gross and microscopic detail is extended in [[myocardial-infarction-pathology]].',
    '**Learn the infarct as a clock, because the histology always lags the death of the myocyte and examiners test the gap.** Irreversible injury begins at **20 to 30 minutes** of total ischaemia, yet **light microscopy shows nothing for the first 4 to 12 hours** — at most wavy fibres at the border. From **2 to 3 hours** the infarct can be demonstrated with **triphenyltetrazolium chloride**, which stays pale because the dehydrogenases that would reduce it have leaked out of necrotic cells. **4 to 12 hours**: coagulative necrosis begins, with oedema and haemorrhage. **12 to 24 hours**: hypereosinophilic myocytes with pyknotic nuclei, contraction bands at the margins, the first neutrophils, and gross dark mottling. **1 to 3 days**: fully established coagulative necrosis with loss of nuclei and cross-striations and a dense **neutrophil** infiltrate; the centre turns yellow-tan. **3 to 7 days**: **macrophages** digest the dead myofibres from the border inward, leaving a soft yellow centre with a hyperaemic rim. **7 to 14 days**: granulation tissue with new capillaries and the first collagen. **2 to 8 weeks**: collagen accumulates and cellularity falls, giving a **dense grey-white scar complete by about 2 months**.',
    '**Every complication has an address on that clock, so you can date it from mechanism instead of memorising a list.** **Arrhythmia** belongs to the first minutes to 48 hours, when ischaemic myocardium is electrically unstable — ventricular fibrillation is the dominant cause of pre-hospital death. **Cardiogenic shock** appears when more than about **40%** of the left ventricle is lost. **Rupture peaks at 3 to 7 days**, and this is not a coincidence: it is precisely the window in which macrophages have digested the necrotic scaffold but fibroblasts have not yet laid down collagen, so the wall is at its softest and thinnest. Rupture has three addresses — **free wall** giving haemopericardium and tamponade, **interventricular septum** giving an acute left-to-right shunt with a new harsh holosystolic murmur, and **papillary muscle** giving acute severe mitral regurgitation. **Fibrinous pericarditis** overlies a transmural infarct at **2 to 4 days**. **Mural thrombus** forms from a few days onward over akinetic, injured endocardium. **True aneurysm** is a late lesion of **weeks to months**: a thin fibrotic scar bulges but rarely ruptures, because scar is tough — and it harbours thrombus. **Dressler syndrome** arrives later still, **1 to 8 weeks**, as an autoimmune pericarditis against exposed myocardial antigens. The complications are catalogued clinically in [[mi-complications]].',
    '**Reperfusion salvages myocardium and simultaneously injures it, which is why a reperfused infarct does not look like a natural one.** Reperfusion within about **20 minutes** prevents necrosis entirely, and the benefit decays steeply thereafter, largely exhausted by **3 to 6 hours** as the wavefront reaches the epicardium. What is restored, though, is flow into myocytes with damaged membranes and into a microvasculature already injured, and that produces a distinct morphology. **Contraction-band necrosis** is the signature: intensely eosinophilic transverse bands of hypercontracted sarcomeres, formed when calcium floods into permeable cells at the moment ATP is briefly restored, so the cell dies in tetany rather than in relaxation. **Haemorrhage into the infarct** follows from leaking, damaged capillaries. Added to these are a burst of **reactive oxygen species**, accelerated **neutrophil** influx, opening of the **mitochondrial permeability transition pore**, and **no-reflow** from capillary plugging and endothelial swelling. So a reperfused infarct is **haemorrhagic and contraction-banded** where an untreated one is pale and purely coagulative, and it also evolves faster because the inflammatory sequence is accelerated. Two reversible states sit alongside it: **stunned** myocardium, which is contractile dysfunction lasting days after a brief ischaemic insult, and **hibernating** myocardium, a chronic downregulation under persistent ischaemia that recovers with revascularisation. Both contain **living myocytes**, which is exactly what separates them from scar. The clinical decision layer sits in [[acs-spectrum]].',
    '**A raised troponin means myocardial INJURY. It does not mean infarction, and the type 1 versus type 2 distinction is the discriminator worth carrying.** Cardiac troponins I and T are regulatory proteins of the thin filament whose cardiac isoforms differ in amino acid sequence from the skeletal forms, so the assay is specific for the **tissue**, never for the **mechanism**. The kinetics are a rise at **2 to 4 hours** (an hour or less with high-sensitivity assays), a peak at about **24 to 48 hours**, and a long tail — **7 to 10 days** for troponin I and up to **14 days** for troponin T, because the structural pool is released slowly. Two consequences follow. First, that tail makes troponin useless for detecting **re-infarction** within the first week, which is the one remaining job of **CK-MB**, whose shorter curve peaks at about **24 hours** and normalises by **48 to 72 hours**, so a second rise is interpretable. Second, since the assay reports injury only, infarction requires injury **plus** evidence of ischaemia — symptoms, ECG change, new wall-motion abnormality or thrombus. **Type 1** infarction is a primary plaque event: rupture or erosion with thrombus. **Type 2** infarction is supply-demand mismatch with no acute plaque event — tachyarrhythmia, sepsis, severe anaemia, hypotension, hypertensive crisis, coronary spasm. Beyond both sits non-ischaemic injury: myocarditis, takotsubo, anthracyclines, pulmonary embolism straining the right ventricle, and chronic kidney disease. The practical rule is a pattern rule: a **rise and fall** points to an acute event, while a **flat elevated plateau** across serial samples points to chronic structural injury.',
  ],

  mechanism: {
    title: 'Plaque rupture to a healed scar',
    steps: [
      { id: 's1', label: 'An unstable plaque with a thin fibrous cap ruptures and exposes its thrombogenic core', detail: 'Cap thinning follows matrix metalloproteinase release from plaque macrophages; the trigger is inflammation, not plaque size.', emphasis: 'normal' },
      { id: 's2', label: 'Platelet adhesion and thrombin generation occlude the epicardial artery within minutes', emphasis: 'key' },
      { id: 's3', label: 'The subendocardium, furthest from supply and compressed hardest in systole, loses ATP first; injury is irreversible by 20 to 30 minutes', detail: 'Necrosis then advances outward toward the epicardium over 3 to 6 hours — the wavefront phenomenon.', emphasis: 'key' },
      { id: 's4', label: 'Coagulative necrosis with a neutrophil infiltrate over 1 to 3 days, while light microscopy stays normal for the first 4 to 12 hours', detail: 'Triphenyltetrazolium chloride demonstrates the infarct from 2 to 3 hours, well before H and E does.', emphasis: 'normal' },
      { id: 's5', label: 'Macrophages digest the necrotic scaffold at 3 to 7 days, leaving the wall at its softest before any collagen is laid down', detail: 'This is the rupture window: free wall, septum or papillary muscle.', emphasis: 'danger' },
      { id: 's6', label: 'Granulation tissue at 1 to 2 weeks matures into a dense collagenous scar by 2 months, which cannot contract and slowly dilates', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'A new harsh holosystolic murmur with a palpable thrill at the lower left sternal border on day 4 after an anterior infarct', mechanism: 'Rupture of the interventricular septum at the macrophage-clearance nadir; the thrill reflects a high-velocity left-to-right jet driven by the ventricular pressure difference', significance: 'key' },
    { sign: 'Sudden pulseless electrical activity with grossly distended neck veins and muffled heart sounds on day 5', mechanism: 'Free wall rupture into the pericardial sac; a small volume of blood entering rapidly exceeds pericardial compliance and arrests filling', significance: 'key' },
    { sign: 'A new apical holosystolic murmur radiating to the axilla with flash pulmonary oedema after an inferior infarct', mechanism: 'Rupture of the posteromedial papillary muscle, which has a single blood supply from the posterior descending artery while the anterolateral has two', significance: 'key' },
    { sign: 'Persistent ST elevation with a dyskinetic apical bulge 6 weeks after the event', mechanism: 'True aneurysm of a thin fibrotic scar; the scar is tough enough not to rupture but cannot contract, so it bulges in systole and collects thrombus', significance: 'supportive' },
    { sign: 'Sharp pleuritic chest pain relieved by sitting forward with a pericardial friction rub on day 3', mechanism: 'Fibrinous pericarditis over a transmural infarct, where inflammation has reached the visceral pericardium; a rub at this interval requires full wall thickness necrosis', significance: 'supportive' },
    { sign: 'Anginal chest pain with widespread ST depression during fast atrial fibrillation in a severely anaemic patient', mechanism: 'Demand ischaemia: tachycardia shortens diastole and so cuts supply while simultaneously raising demand, and the resulting subendocardial ischaemia is circumferential rather than confined to one arterial territory', significance: 'key' },
  ],

  investigations: [
    { clue: 'Triphenyltetrazolium chloride staining of a heart slice 3 hours after death showing a pale unstained zone while H and E is unremarkable', meaning: 'Dehydrogenases have leaked from necrotic myocytes, so the dead zone cannot reduce the dye to red formazan. This is positive from 2 to 3 hours, hours before light microscopy shows anything' },
    { clue: 'Histology showing sheets of macrophages digesting myofibres at the infarct border, with dying neutrophils and no collagen', meaning: 'Dates the infarct to 3 to 7 days, which is also the mechanical nadir of the wall — the finding that predicts rupture' },
    { clue: 'Contraction bands and interstitial haemorrhage throughout an infarct whose supplying artery is patent', meaning: 'A reperfused infarct. Calcium floods membrane-damaged myocytes once ATP returns and they die hypercontracted; the injured microvasculature then bleeds into the necrotic zone' },
    { clue: 'High-sensitivity troponin 340 ng/L on arrival rising to 2100 ng/L at 3 hours', meaning: 'A rise-and-fall pattern, which is what identifies acute myocardial injury. The change between samples carries the information, not the absolute value' },
    { clue: 'Troponin around 60 ng/L on three samples 6 hours apart with no change, in a dialysis patient with atypical pain', meaning: 'A flat plateau means chronic injury from structural heart disease and reduced clearance, not an acute event. Without a delta and without ischaemic evidence this is not infarction' },
    { clue: 'CK-MB that had normalised rising again on day 4 while troponin remains high', meaning: 'Re-infarction. The short CK-MB curve resets by 48 to 72 hours, so a second peak is interpretable, whereas the 7 to 14 day troponin tail cannot answer the question' },
  ],

  treatment: [
    {
      logic: 'The clock is the only variable you control, because necrosis is a wavefront',
      detail: 'Reperfusion within about **20 minutes** prevents necrosis outright; after that the salvageable territory shrinks as the wavefront travels from **subendocardium to epicardium** over **3 to 6 hours**, which is why door-to-balloon time is a pathological quantity rather than an administrative one. Accept also that reperfusion is not free: it adds **contraction-band necrosis**, **intramyocardial haemorrhage**, **reactive oxygen species** and **no-reflow**, so the morphology of a treated infarct is haemorrhagic where an untreated one is pale. The trade is still worth taking, because the injury is inflicted on cells that were going to die anyway while the outer wall is preserved — and preserving the outer wall is what preserves contraction. Distinguish **stunned** and **hibernating** myocardium from scar before writing off a territory: both contain living myocytes and both recover, so viability imaging changes the decision.',
    },
    {
      logic: 'Date the complication and you have already named the lesion',
      detail: 'A deterioration in the **first 48 hours** is electrical until proven otherwise. A sudden mechanical catastrophe at **3 to 7 days** is a **rupture** — free wall if there is tamponade and electromechanical dissociation, **septum** if there is a new thrill and an oxygen step-up in the right ventricle, **papillary muscle** if there is acute pulmonary oedema with a new apical murmur and no step-up. A new bulge with persistent ST elevation at **weeks to months** is an **aneurysm**, and it is a source of thrombus rather than of rupture. Pericarditis at **2 to 4 days** is a direct extension of transmural necrosis; pericarditis at **1 to 8 weeks** is **Dressler syndrome** and is immune. Each interval carries a different intervention, so the date does the triage before any imaging arrives.',
    },
  ],

  mnemonics: [
    {
      hook: 'The infarct clock — what the pathologist can see, hour by hour',
      expansion: [
        '20 to 30 minutes: the myocyte is already dead, and nothing is visible by any method',
        '2 to 3 hours: triphenyltetrazolium chloride is pale, because dehydrogenases have leaked out',
        '4 to 12 hours: coagulative necrosis begins; before this, light microscopy is normal',
        '1 to 3 days: neutrophils, loss of nuclei and striations, a yellow-tan centre',
        '3 to 7 days: macrophages clear the debris and the wall is at its softest',
        '1 to 2 weeks: granulation tissue; 2 months: dense grey-white scar',
      ],
    },
    {
      hook: 'Date the complication and you have named it',
      expansion: [
        'Minutes to 48 hours: arrhythmia, and ventricular fibrillation kills before hospital',
        'Over 40% of the left ventricle lost: cardiogenic shock',
        '2 to 4 days: fibrinous pericarditis over a transmural infarct',
        '3 to 7 days: rupture of free wall, septum or papillary muscle at the softening nadir',
        'Days onward: mural thrombus over akinetic endocardium, then systemic embolism',
        'Weeks to months: true aneurysm; 1 to 8 weeks: Dressler syndrome',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'Reading a raised troponin',
      wrongInstinct: 'The troponin is elevated, so the patient has had a myocardial infarction',
      rightAnswer: 'An elevated troponin proves myocardial injury only; infarction requires injury plus evidence of ischaemia, and then you still have to choose between type 1 and type 2',
      why: 'The rule is a pattern rule — a rise and fall with ischaemic evidence is infarction, a flat elevated plateau across serial samples is chronic injury, and a type 2 event has demand mismatch with no acute plaque lesion',
    },
    {
      questionCategory: 'Which papillary muscle ruptures, and after which infarct',
      wrongInstinct: 'The anterolateral papillary muscle, since anterior infarction is the commonest and the largest',
      rightAnswer: 'The posteromedial papillary muscle, after an inferior infarct',
      why: 'The posteromedial muscle is supplied by the posterior descending artery alone while the anterolateral receives blood from both the left anterior descending and the circumflex — single supply is what makes a structure infarct and rupture',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A man dies 3 hours after the onset of crushing chest pain. Haematoxylin and eosin sections of the anterior left ventricular wall are unremarkable. Which technique will demonstrate the infarct at this interval?',
      options: [
        { id: 'a', text: 'Masson trichrome, showing blue collagen within the infarct' },
        { id: 'b', text: 'Triphenyltetrazolium chloride, showing an unstained pale zone' },
        { id: 'c', text: 'CD68 immunohistochemistry, showing macrophages filling the necrotic area' },
        { id: 'd', text: 'Perls Prussian blue, showing haemosiderin-laden macrophages' },
      ],
      answerId: 'b',
      explanation: 'Dehydrogenases leak out of necrotic myocytes, so the dead zone cannot reduce triphenyltetrazolium chloride to its red formazan and stays pale from about 2 to 3 hours. Every other option marks a later stage of the same clock: macrophages arrive at 3 to 7 days, collagen at 1 to 2 weeks, and haemosiderin later still. Coagulative necrosis is not visible by light microscopy until 4 to 12 hours, so a normal section at 3 hours excludes nothing.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'Five days after an anterior infarct a patient becomes abruptly hypotensive with distended neck veins, muffled heart sounds and pulseless electrical activity. Which description of the infarct border at this interval best explains the event?',
      options: [
        { id: 'a', text: 'A dense collagenous scar with few cells' },
        { id: 'b', text: 'Granulation tissue with abundant deposited collagen' },
        { id: 'c', text: 'Macrophages clearing digested myofibres, with the necrotic scaffold removed and no collagen yet laid down' },
        { id: 'd', text: 'Neutrophil infiltration with myocyte architecture still intact' },
      ],
      answerId: 'c',
      explanation: 'Free wall rupture peaks at 3 to 7 days for a structural reason. Macrophage digestion has removed the necrotic myocytes that were still providing mechanical support, while fibroblasts have not yet produced collagen, so the wall reaches its minimum tensile strength. Earlier the dead tissue still holds together, and later the scar is tough, which is why an established aneurysm bulges rather than ruptures.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A 74-year-old with severe aortic stenosis develops atrial fibrillation at 160 beats per minute with chest pain and widespread ST depression. High-sensitivity troponin rises from 40 to 900 ng/L. Angiography shows 50% stenoses with no plaque rupture or thrombus. Which reading is correct?',
      options: [
        { id: 'a', text: 'Type 1 myocardial infarction, since troponin has risen and fallen' },
        { id: 'b', text: 'Type 2 myocardial infarction from supply-demand mismatch, producing circumferential subendocardial ischaemia' },
        { id: 'c', text: 'Not an infarction, because troponin can rise in atrial fibrillation alone' },
        { id: 'd', text: 'Acute myocarditis, since the coronary arteries are not occluded' },
      ],
      answerId: 'b',
      explanation: 'There is injury with a clear delta and there is ischaemic evidence, so this is infarction; but there is no acute plaque event, so it is type 2. The mechanism is visible in the numbers: a rate of 160 shortens diastole, which is when the left ventricle is perfused, while simultaneously raising demand, and the hypertrophied ventricle of aortic stenosis already has a supply deficit. Because the failure is one of global perfusion rather than of a single vessel, ischaemia is circumferential and subendocardial, which is why the ECG shows widespread depression rather than regional elevation.',
      tests: 'disease',
    },
  ],
};

export default rbpIschaemicHeartDiseaseInfarction;
