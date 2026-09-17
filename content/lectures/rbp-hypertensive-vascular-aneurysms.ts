import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpHypertensiveVascularAneurysms: Lecture = {
  id: 'rbp-hypertensive-vascular-aneurysms',
  title: 'Hypertensive Vascular Disease & Aneurysms',
  system: 'cardiovascular',
  source: 'Ch 9 — Blood Vessels',
  updated: '2026-09-16',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 9 Blood Vessels' },
    { kind: 'mechanism', label: 'Arteriolosclerosis & medial failure' },
    { kind: 'disease', label: 'True vs false aneurysm vs dissection' },
  ],

  highYield: [
    '**Arteriolosclerosis comes in exactly TWO patterns, and each names its own clinical setting — this is the single most exploited discriminator in the chapter.** **HYALINE** arteriolosclerosis belongs to **chronic benign hypertension and diabetes**: endothelial injury lets **plasma proteins leak (insudate) into the vessel wall**, and smooth muscle adds excess matrix, so the arteriole acquires a **homogeneous, glassy, pink (eosinophilic), PAS-positive** thickening with a narrowed lumen. In diabetes the same picture is driven by **non-enzymatic glycation** of the basement membrane, which is why diabetics get it at normal pressures. Its renal expression is **benign nephrosclerosis** — diffuse ischaemic atrophy giving a **finely and evenly granular cortical surface**. **HYPERPLASTIC** arteriolosclerosis belongs to **malignant or accelerated hypertension**, typically with **diastolic pressure above 120 mmHg**: concentric, laminated **onion-skin** layers of smooth muscle and reduplicated basement membrane, and when severe, **fibrinoid necrosis of the arteriolar wall (necrotising arteriolitis)**. Its renal expression is **malignant nephrosclerosis**, with pinpoint petechiae producing a **flea-bitten** surface. The rule is compact: **hyaline means something leaked IN; hyperplastic means something PROLIFERATED — and only the proliferative lesion necroses and bleeds.**',
    '**Mönckeberg medial calcific sclerosis is the third arteriosclerosis pattern, and its whole exam value is that it is a decoy.** Calcium deposits in the **media** of muscular arteries, typically along the internal elastic lamina, in people over 50 and especially in diabetes and chronic kidney disease. It turns the vessel into a rigid pipe that is palpable and conspicuous on plain films, but it **does not encroach on the lumen** and by itself causes no ischaemia. The trap it sets is practical: a non-compressible artery gives a **falsely elevated ankle-brachial index above 1.3**, which can mask genuinely severe peripheral arterial disease, so the correct move is a **toe-brachial index** or a waveform study instead. Set beside the other two patterns in [[arteriosclerosis-patterns]].',
    '**True, false and dissection are three different walls, and students merge them — separate them by asking what happened to the layers.** A **TRUE aneurysm** dilates with **all three layers intact but attenuated**: the atherosclerotic abdominal aortic aneurysm, the syphilitic thoracic aneurysm, the congenital berry aneurysm, the post-infarct ventricular aneurysm. A **FALSE (pseudo)aneurysm** has a **breached wall**; the sac is a **contained haematoma** bounded only by periadventitial tissue or organising clot — it is a leak that has not yet become a haemorrhage. Its classics are the post-catheterisation femoral pseudoaneurysm with a **to-and-fro bruit**, the contained ventricular free-wall rupture, and the anastomotic leak. A **DISSECTION** is different again: **blood enters and splits the media** along a cleavage plane, creating a false lumen **inside the wall**, and the external calibre of the vessel need not be increased at all. The one-line rule: **true = dilated with layers intact; false = wall breached, sac is clot; dissection = blood inside the wall, layers split.**',
    '**Classify aneurysms by MECHANISM rather than by site — the media fails either because it was destroyed or because it was never normal.** **Destroyed:** the **abdominal aortic aneurysm** is atherosclerotic. Intimal plaque thickens the wall, oxygen must diffuse further to reach the media, the underlying media atrophies and loses elastin, and macrophage **MMP-9 and MMP-2** with plasmin digest the extracellular matrix while **TIMPs** fall. It is characteristically **infrarenal**, between the renal arteries and the aortic bifurcation, where the medial vasa vasorum are sparsest; inflammatory and IgG4-related variants exist. **Never normal:** **cystic medial degeneration** — fragmented elastin with pooled proteoglycan in the media — underlies the **thoracic** aneurysm of **Marfan syndrome** (FBN1 mutation, defective fibrillin-1, and consequent excess **TGF-β** signalling), **Loeys-Dietz** (TGFBR1/TGFBR2) and **vascular Ehlers-Danlos** (COL3A1). **Infected:** a mycotic aneurysm from septic embolism or contiguous infection. **Syphilitic:** tertiary syphilis causes **obliterative endarteritis of the vasa vasorum** of the thoracic aorta, starving the outer media, and the scarring wrinkles the intimal surface into a **tree-bark** pattern; dilation of the aortic ring gives regurgitation and the massively hypertrophied **cor bovinum**. See [[aortic-aneurysm]].',
    '**Laplace’s law is the reason aneurysm thresholds are numbers and not opinions.** Wall tension rises with the product of **pressure and radius** (divided by wall thickness). Radius sits in the numerator, so dilation is **self-accelerating**: the wider the sac, the greater the tension on a media that is already thinning, which widens it further. Rupture risk therefore does not rise linearly with diameter — it rises steeply. For an abdominal aortic aneurysm the annual rupture risk is **well under 1% below 4 cm**, of the order of **1% at 4–5 cm**, climbs through roughly **3–15% at 5–6 cm**, and reaches **10–20% or more above 6–7 cm**. That curve, not any symptom, is what puts the elective repair threshold at about **5.5 cm**, or at growth exceeding **0.5 cm in six months**, or at the onset of tenderness or pain. The same law explains why a dissection with a patent false lumen enlarges over years and why pressure control remains the only medical lever.',
    '**Dissection is a disease of the media occurring in someone whose intima tore — and its epidemiology follows directly from that.** Over **90%** of non-traumatic dissections occur in **men aged 40–60 with antecedent hypertension**; the remainder occur in younger people with an inherited connective-tissue disorder, in pregnancy, or iatrogenically after cannulation or valve surgery. The intimal tear is usually **within 10 cm of the aortic valve**, and blood tracks along a plane classically **between the middle and outer thirds of the media**, antegrade or retrograde. **Stanford A** involves the ascending aorta — about two-thirds of cases, and a surgical emergency because the false lumen ruptures into the pericardium; **Stanford B** spares it and is managed medically unless there is malperfusion or rupture. Death comes from rupture into **pericardium (tamponade), mediastinum or pleural cavity**, and morbidity from branch-vessel occlusion — stroke, right coronary infarction, renal or limb ischaemia. The paradox worth memorising: **severe atherosclerosis PROTECTS against dissection**, because intimal scarring and medial fibrosis prevent a plane from propagating. Clinical handling in [[aortic-dissection]].',
  ],

  mechanism: {
    title: 'Pressure on the wall: from arteriole to aortic rupture',
    steps: [
      { id: 's1', label: 'Sustained pressure load injures endothelium and drives smooth-muscle matrix production', emphasis: 'normal' },
      { id: 's2', label: 'Benign hypertension and diabetes: plasma proteins insudate into the arteriolar wall — hyaline arteriolosclerosis', detail: 'Glassy, pink, PAS-positive thickening with luminal narrowing. Renal expression is benign nephrosclerosis with a finely granular cortex.', emphasis: 'key' },
      { id: 's3', label: 'Severe hypertension: concentric onion-skin smooth-muscle hyperplasia, then fibrinoid necrosis — hyperplastic arteriolosclerosis', detail: 'Renal expression is malignant nephrosclerosis with a flea-bitten petechial surface. Only this pattern necroses and bleeds.', emphasis: 'danger' },
      { id: 's4', label: 'In large arteries, intimal plaque or intrinsic medial degeneration attenuates the load-bearing media', emphasis: 'key' },
      { id: 's5', label: 'Laplace: tension rises with pressure times radius, so every increment of dilation thins the media further', emphasis: 'danger' },
      { id: 's6', label: 'Endpoints diverge: outward bulge of all three layers is a true aneurysm; an intimal tear admitting blood into the media is a dissection', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'A pulsatile mass above the umbilicus in a 72-year-old smoker that pushes the examining fingers apart', mechanism: 'Infrarenal abdominal aortic aneurysm. Expansile pulsation separates the fingers, whereas a mass lying over the aorta transmits pulsation in one direction only — that is the discriminator', significance: 'key' },
    { sign: 'Tearing interscapular pain with a systolic difference of more than 20 mmHg between the arms and a new early diastolic murmur', mechanism: 'A dissection flap propagating into a subclavian origin causes the pressure differential, while retrograde extension to the aortic root dilates the annulus and produces acute regurgitation', significance: 'key' },
    { sign: 'Papilloedema with flame haemorrhages and cotton-wool spots at a blood pressure of 230/135 mmHg', mechanism: 'Malignant hypertension. The retinal arterioles are undergoing the same fibrinoid necrosis and hyperplastic change as the renal ones, so the fundus is a direct view of the systemic arteriolar lesion', significance: 'key' },
    { sign: 'Kidney at autopsy with a fine, even granularity of the cortical surface in a long-standing hypertensive', mechanism: 'Benign nephrosclerosis. Hyaline arteriolosclerosis produces diffuse ischaemic atrophy of nephrons, and the granularity is even because the insult is uniform rather than focal', significance: 'supportive' },
    { sign: 'Kidney with pinpoint petechial haemorrhages scattered over the capsular surface, the so-called flea-bitten kidney', mechanism: 'Malignant nephrosclerosis. Arterioles with fibrinoid necrosis rupture, each producing a punctate cortical haemorrhage', significance: 'key' },
    { sign: 'A non-compressible, pipe-stem brachial artery with an ankle-brachial index of 1.4 in a diabetic with genuine claudication', mechanism: 'Mönckeberg medial calcification stiffens the wall without narrowing the lumen, so cuff compression fails and the index is falsely high; a toe-brachial index bypasses the calcified vessel', significance: 'key' },
  ],

  investigations: [
    { clue: 'Renal biopsy: afferent arterioles with homogeneous, glassy eosinophilic, PAS-positive wall thickening and narrowed lumina', meaning: 'Hyaline arteriolosclerosis — the lesion of chronic benign hypertension and of diabetes, caused by plasma protein insudation rather than cellular proliferation' },
    { clue: 'Renal biopsy: concentric laminated onion-skin arteriolar walls with fibrinoid necrosis and a thrombotic microangiopathy', meaning: 'Hyperplastic arteriolosclerosis of malignant hypertension. The proliferative and necrotising features place this firmly in the accelerated phase, not in chronic hypertension' },
    { clue: 'Chest radiograph: widened mediastinum with a new left pleural effusion in a hypertensive man with tearing pain', meaning: 'Aortic dissection that has already leaked. The effusion is blood, and its presence moves the problem from urgent to immediate' },
    { clue: 'CT angiogram: an intimal flap separating a true from a false lumen, with the entry tear 3 cm above the sinotubular junction', meaning: 'Stanford type A dissection. Ascending involvement means surgery, because the false lumen can rupture into the pericardium and tamponade' },
    { clue: 'Ultrasound: infrarenal aortic diameter 5.7 cm, up from 5.1 cm nine months ago', meaning: 'Two independent repair criteria met — size above roughly 5.5 cm and growth exceeding 0.5 cm in six months. By Laplace the tension is now rising faster than the wall can compensate' },
    { clue: 'CT angiogram: string-of-beads appearance in the mid and distal renal artery of a 32-year-old woman with new severe hypertension', meaning: 'Fibromuscular dysplasia, medial fibroplasia type — alternating webs of fibromuscular thickening and aneurysmal dilation. Atherosclerotic renovascular disease would instead be ostial and in an older, vasculopathic patient' },
  ],

  treatment: [
    {
      logic: 'In dissection, take down the shear force before you take down the pressure',
      detail: 'The propagating force is not pressure alone but the **rate of rise of pressure**, which depends on both contractility and heart rate. So **beta blockade comes first** — intravenous **esmolol** or **labetalol** to a heart rate near **60** — and only then a vasodilator such as **sodium nitroprusside** to bring systolic pressure to **100–120 mmHg**. Giving the vasodilator first is a real and classical error: the reflex tachycardia it provokes **raises** the rate of pressure rise and can extend the dissection. **Type A** goes to theatre; **type B** is managed medically unless there is malperfusion, rupture or refractory pain. The full clinical algorithm sits in [[aortic-dissection]].',
    },
    {
      logic: 'In malignant hypertension, drop the pressure fast enough to stop fibrinoid necrosis and slowly enough to preserve cerebral autoregulation',
      detail: 'Both halves matter because the arteriole and the brain want opposite things. Ongoing **fibrinoid necrosis** destroys nephrons hour by hour, so the pressure must come down. But chronic hypertension shifts the **cerebral autoregulatory curve to the right**, so a pressure that looks normal on paper can be below the patient’s own lower limit of autoregulation and infarct the watershed. The compromise is quantitative: reduce **mean arterial pressure by about 20–25% in the first hour**, and not below a diastolic of roughly **100–110 mmHg**, then approach **160/100 mmHg** over the following two to six hours. Two situations override the rule and demand faster control — **aortic dissection** and **eclampsia**. The target-organ consequences of getting this wrong are set out in [[hypertensive-target-organ-damage]].',
    },
  ],

  mnemonics: [
    {
      hook: 'Hyaline leaks, Hyperplastic proliferates',
      expansion: [
        'Hyaline — benign hypertension and diabetes; plasma protein insudates into the wall; glassy pink thickening; kidney finely granular',
        'Hyperplastic — malignant hypertension with diastolic above 120; onion-skin smooth muscle; fibrinoid necrosis; kidney flea-bitten',
        'Both narrow the arteriole, but only the proliferative one necroses and bleeds',
        'Mönckeberg is neither — calcium in the media, lumen untouched, and the only harm it does is a falsely high ankle-brachial index',
      ],
    },
    {
      hook: 'True bulges, False breaches, Dissection splits',
      expansion: [
        'True aneurysm — all three layers present, attenuated but continuous',
        'False aneurysm — the wall is breached and the sac is contained haematoma, so it is a leak not yet a haemorrhage',
        'Dissection — blood is inside the media and the external calibre may be entirely normal',
        'Laplace, tension rising with pressure times radius, explains why the true one accelerates once it starts',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'Matching the arteriolar lesion to the blood pressure that produced it',
      wrongInstinct: 'Onion-skin thickening and hyaline thickening are the same lesion at two severities',
      rightAnswer: 'Hyaline arteriolosclerosis is benign hypertension and diabetes; hyperplastic arteriolosclerosis with fibrinoid necrosis is malignant hypertension',
      why: 'Rule: pink and glassy means something leaked in, laminated and concentric means something proliferated — and fibrinoid necrosis only ever belongs to the proliferative lesion',
    },
    {
      questionCategory: 'What atherosclerosis does to the risk of dissection',
      wrongInstinct: 'The more atherosclerotic the aorta, the more likely it is to dissect',
      rightAnswer: 'Severe atherosclerosis protects against dissection, because a dissection needs a media that can still be split',
      why: 'Rule: intimal scarring and medial fibrosis block propagation of the cleavage plane, so dissection strikes the hypertensive 40-to-60-year-old aorta and the young Marfan aorta, not the heavily calcified elderly one',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 46-year-old man presents with a blood pressure of 235/140 mmHg, papilloedema and a serum creatinine of 380 micromol/L. Renal biopsy shows arterioles with concentric laminated wall thickening and segmental fibrinoid necrosis. Which lesion is this, and what does it tell you?',
      options: [
        { id: 'a', text: 'Hyaline arteriolosclerosis, indicating long-standing benign hypertension or diabetes' },
        { id: 'b', text: 'Hyperplastic arteriolosclerosis, indicating malignant or accelerated hypertension' },
        { id: 'c', text: 'Mönckeberg medial calcific sclerosis, which does not narrow the lumen' },
        { id: 'd', text: 'Atherosclerotic renovascular disease of the renal artery ostium' },
      ],
      answerId: 'b',
      explanation: 'Concentric onion-skin lamination represents smooth-muscle hyperplasia with reduplicated basement membrane, and fibrinoid necrosis is the hallmark of necrotising arteriolitis. Together they define the hyperplastic pattern of malignant hypertension, whose renal counterpart is malignant nephrosclerosis with a flea-bitten petechial surface. Hyaline arteriolosclerosis is the opposite process, a glassy insudation of plasma proteins that does not proliferate and does not necrose. Mönckeberg calcification involves the media of muscular arteries and spares the lumen entirely.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'Surveillance of an infrarenal abdominal aortic aneurysm shows growth from 4.3 cm to 5.8 cm. Which principle best explains why the annual rupture risk rises so steeply over this interval rather than in proportion to diameter?',
      options: [
        { id: 'a', text: 'Wall tension rises with the product of pressure and radius, so dilation thins the media and is self-accelerating' },
        { id: 'b', text: 'Blood flow velocity within the sac rises with the fourth power of the radius' },
        { id: 'c', text: 'Larger aneurysms accumulate more mural thrombus, which digests the adventitia' },
        { id: 'd', text: 'Rupture risk is determined by the degree of intimal calcification, which increases with size' },
      ],
      answerId: 'a',
      explanation: 'By Laplace, tension in the wall is proportional to pressure multiplied by radius and inversely proportional to wall thickness. Because radius is in the numerator and an aneurysmal media is simultaneously thinning, each increment in diameter raises the load on progressively less tissue, giving a steeply non-linear risk curve. That curve, not any symptom, is what places the elective repair threshold near 5.5 cm or at growth above 0.5 cm in six months. Flow velocity falls rather than rises in a dilated segment, and calcification is a marker of burden, not of rupture risk.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'Two days after femoral arterial catheterisation, a patient develops a tender pulsatile groin swelling with a to-and-fro bruit. Ultrasound shows a sac communicating with the common femoral artery through a narrow neck, its wall formed by surrounding soft tissue and organising clot. What is this lesion?',
      options: [
        { id: 'a', text: 'A true aneurysm, since all three layers bulge outward' },
        { id: 'b', text: 'A false aneurysm, since the arterial wall is breached and the sac is contained haematoma' },
        { id: 'c', text: 'An arterial dissection, since blood has entered the plane of the media' },
        { id: 'd', text: 'Mycotic aneurysm from septic embolisation to the vasa vasorum' },
      ],
      answerId: 'b',
      explanation: 'The defining question is what happened to the layers. Here the wall has been punctured, so the sac is not vessel wall at all but contained haematoma bounded by periadventitial tissue — a pseudoaneurysm, effectively a leak that has not yet become a haemorrhage, and the narrow neck with bidirectional flow generates the to-and-fro bruit. A true aneurysm retains all three attenuated layers, and a dissection is blood splitting the media within the wall rather than a sac outside it.',
      tests: 'disease',
    },
  ],
};

export default rbpHypertensiveVascularAneurysms;
