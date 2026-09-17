import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpVascularWallEndothelialInjury: Lecture = {
  id: 'rbp-vascular-wall-endothelial-injury',
  title: 'The Vascular Wall & Endothelial Injury',
  system: 'cardiovascular',
  source: 'Ch 9 — Blood Vessels',
  updated: '2026-09-16',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 9 Blood Vessels' },
    { kind: 'mechanism', label: 'Response to injury & intimal thickening' },
    { kind: 'disease', label: 'Restenosis & neointimal hyperplasia' },
  ],

  highYield: [
    '**Three layers, three failure modes — learn the architecture as a fault tree and the rest of the chapter derives itself.** The **intima** is a single endothelial sheet on a basement membrane, bounded externally by the **internal elastic lamina**; the **media** is smooth muscle and elastin, bounded by the **external elastic lamina**; the **adventitia** carries collagen, nerves and the **vasa vasorum**. When the intima fails you get **thrombosis, abnormal permeability and atheroma**. When the media fails you get **aneurysm and dissection**. When the adventitial blood supply fails you get **outer-medial ischaemia and aortitis**. Calibre then tunes the job: **elastic arteries** (aorta, great vessels) store systolic energy and recoil in diastole, so losing their elastin gives a **wide pulse pressure and isolated systolic hypertension**; **muscular arteries** distribute regional flow; **arterioles of 20–100 µm** are the resistance vessels, and because resistance scales with the **fourth power of the radius** a trivial thickening of an arteriolar wall produces a large pressure change; **veins** hold roughly **two-thirds of the circulating volume** at low pressure, which is why they dilate, thrombose and become varicose rather than occlude.',
    '**The wall has a split blood supply, and that split is the whole explanation of aortitis.** Oxygen diffusing from the lumen reaches the intima and only about the **inner half of the media** — on the order of **0.5 mm** of tissue. Everything beyond that depends on the **vasa vasorum** running in from the adventitia. So any process that obliterates those small adventitial vessels starves the **outer** media specifically: you see patchy loss of medial smooth muscle, **fragmented elastic laminae** and scarring, while the inner media, still fed by luminal diffusion, survives. That single fact tells you why an arteritis weakens and dilates a large artery instead of occluding it, why the **thoracic aorta** (thickest media, most dependent on vasa vasorum) is the classic target, and why a dissection haematoma that compresses the vasa vasorum makes its own wall worse as it propagates.',
    '**Endothelial DYSFUNCTION, not denudation, is the initiating event — this is the response-to-injury hypothesis and it is the organising idea of vascular pathology.** The lining does not have to be stripped away; an intact but **activated** endothelium is enough. Activation is a phenotype switch: **nitric oxide output falls** while **endothelin-1** rises, **VCAM-1, ICAM-1 and E-selectin** appear on the luminal surface, **tissue factor** and **PAI-1** are expressed, and permeability rises. The triggers are the risk factors — turbulent flow, hypertensive shear, hyperlipidaemia, advanced glycation end products, cigarette smoke, homocysteine, cytokines, infection. Crucially, **laminar** flow actively induces atheroprotective genes through **KLF2** and **eNOS**, whereas the **disturbed, oscillatory** flow at branch points, ostia and the outer walls of bifurcations does not. That converts a list of risk factors into a topographic prediction: lesions appear where flow is disturbed, in the same places, in everybody. Worked out in detail in [[rbp-atherosclerosis-pathogenesis]].',
    '**Intimal thickening is the stereotyped healing response a vessel makes to almost ANY injury, which is why it is not diagnostic of anything by itself.** The effector is the medial smooth-muscle cell, joined by circulating precursors. It switches from a **contractile** phenotype (packed with actin-myosin filaments, responsive to vasoconstrictors, non-proliferative) to a **synthetic** phenotype (few filaments, abundant rough endoplasmic reticulum and Golgi, migratory, proliferative, matrix-secreting). It then crosses the internal elastic lamina, multiplies in the intima and lays down collagen, elastin and proteoglycan. The drivers are **PDGF**, **FGF-2**, **TGF-β**, **endothelin-1** and **thrombin** released by activated endothelium, platelets and macrophages. The product is a **neointima**. Mechanical, immune, chemical and haemodynamic injuries all converge on it, so the same lesion appears after angioplasty, in a transplanted coronary artery, in an arterialised vein graft and under chronic hypertension.',
    '**Neointimal hyperplasia after angioplasty is that same process, and it is why restenosis exists — the stent fixes recoil, the drug fixes proliferation.** Balloon angioplasty is a deliberate injury: it cracks the plaque and overstretches the media, so the artery both **recoils elastically** and **heals by neointima**. Plain balloon angioplasty therefore restenoses in roughly **30–50% within six months**. A **bare-metal stent** scaffolds away the recoil, yet in-stent restenosis still runs at about **20–30%**, because a metal cage does nothing to the smooth-muscle cell cycle. A **drug-eluting stent** delivers **sirolimus** or **paclitaxel** locally to arrest that cycle and drops restenosis into single figures — at the price of **delayed re-endothelialisation**, which is precisely why dual antiplatelet therapy is prolonged to cover **late stent thrombosis**. Read the timing as the diagnosis: **restenosis at 3–6 months is neointima**, whereas a new lesion appearing after a year is new or progressive atheroma. The same neointima destroys saphenous vein grafts (arterialisation) and transplanted coronary arteries.',
    '**The endothelium is an endocrine organ, and the loss of one molecule — nitric oxide — accounts for its entire clinical footprint.** Endothelial **eNOS**-derived NO simultaneously **dilates** the vessel, **inhibits platelet aggregation**, **inhibits leukocyte adhesion** and **inhibits smooth-muscle proliferation**. So when NO bioavailability falls you do not get four separate problems; you get vasoconstriction, thrombosis, inflammation and intimal thickening together. That is the reason **endothelial dysfunction** is a single named entity rather than a loose collection, and the reason it is measurable at the bedside as impaired **flow-mediated dilation** long before any lumen is narrowed. The counter-regulatory surface it maintains — **thrombomodulin**, **heparan sulphate**, **tissue factor pathway inhibitor**, **prostacyclin**, **t-PA** — is covered from the coagulation side in [[rbp-edema-haemostasis-thrombosis]], and the leukocyte-adhesion cascade it switches on is the same one described in [[rbp-acute-inflammation-mediators]].',
  ],

  mechanism: {
    title: 'Endothelial dysfunction to neointima',
    steps: [
      { id: 's1', label: 'Laminar shear keeps the endothelium quiescent through KLF2, eNOS-derived nitric oxide, thrombomodulin and heparan sulphate', detail: 'The quiet state is actively maintained, not passive. It has to be switched off before anything else happens.', emphasis: 'normal' },
      { id: 's2', label: 'Disturbed flow at a branch point plus a systemic insult ACTIVATES the endothelium without denuding it', detail: 'This is the response-to-injury hypothesis: dysfunction of an intact lining is the initiating event.', emphasis: 'key' },
      { id: 's3', label: 'Nitric oxide falls; VCAM-1, ICAM-1, E-selectin, tissue factor, PAI-1 and endothelin-1 rise; permeability increases', emphasis: 'key' },
      { id: 's4', label: 'Endothelium, platelets and macrophages release PDGF, FGF-2, TGF-beta and thrombin into the wall', emphasis: 'normal' },
      { id: 's5', label: 'Medial smooth muscle switches from contractile to synthetic, migrates across the internal elastic lamina and proliferates', detail: 'The cell loses its contractile filaments and gains rough endoplasmic reticulum and Golgi. It is now a matrix factory.', emphasis: 'key' },
      { id: 's6', label: 'Neointima: smooth muscle plus matrix thickens the intima — restenosis, vein-graft failure, transplant arteriopathy, substrate for atheroma', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Wide pulse pressure with isolated systolic hypertension in an 80-year-old', mechanism: 'Elastin in the aortic media fragments and is replaced by collagen, so the aorta can no longer store systolic energy and release it in diastole; systolic pressure climbs while diastolic falls', significance: 'key' },
    { sign: 'Exertional angina returning 4 months after a technically perfect balloon angioplasty of a lesion left widely patent on the table', mechanism: 'Neointimal hyperplasia — synthetic smooth muscle and matrix growing into the treated segment; the 3-to-6-month timing separates it from new atheroma', significance: 'key' },
    { sign: 'Impaired brachial flow-mediated dilation in a 30-year-old smoker whose coronary angiogram is normal', mechanism: 'Endothelial nitric oxide output has already failed; function is lost before structure changes, and angiography images the lumen rather than the wall', significance: 'key' },
    { sign: 'Histology of an inflamed aorta: patchy loss of smooth muscle and fragmented elastic laminae in the OUTER media, with the inner media intact', mechanism: 'Obliteration of the adventitial vasa vasorum starves the outer media; the inner media survives on diffusion from the lumen', significance: 'key' },
    { sign: 'Diffuse, concentric intimal thickening along the whole length of the coronary arteries in a heart transplanted four years earlier', mechanism: 'Chronic immune injury to graft endothelium drives the same neointimal response; the lesion is diffuse and concentric, unlike the focal, eccentric plaques of ordinary atherosclerosis', significance: 'key' },
    { sign: 'A saphenous vein graft that has become thick-walled and plaque-bearing seven years after coronary bypass', mechanism: 'Arterialisation — arterial pressure and shear injure the venous endothelium, neointima forms first, and atheroma is then superimposed on it', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Brachial flow-mediated dilation of 3% after cuff release, with a normal coronary angiogram', meaning: 'Functional endothelial failure with no structural stenosis yet. It confirms that dysfunction precedes disease and that a clean lumenogram does not mean a healthy wall' },
    { clue: 'Intravascular ultrasound four months after stenting: a homogeneous, echolucent layer filling the space inside the stent struts', meaning: 'Neointimal hyperplasia — cellular and proteoglycan-rich, not a calcified lipid plaque. It is treated with an antiproliferative device, not with more lipid lowering' },
    { clue: 'Raised plasma von Willebrand factor and endothelin-1', meaning: 'Markers of endothelial activation. Von Willebrand factor released from Weibel-Palade bodies is the most accessible readout that endothelium has been stimulated anywhere in the circulation' },
    { clue: 'Immunostaining of a thickened intima: the cells are smooth-muscle actin positive', meaning: 'Confirms the neointima is smooth-muscle-derived rather than fibroblastic or endothelial — the phenotype switch made visible' },
    { clue: 'Duplex of a dialysis arteriovenous fistula: peak systolic velocity ratio above 3 at the juxta-anastomotic segment', meaning: 'Neointimal hyperplasia at the point of maximum turbulence. Disturbed flow localises the lesion, which is why fistula failure clusters at the anastomosis rather than along the vein' },
    { clue: 'Angiographic late lumen loss of 0.2 mm at six months with a drug-eluting stent versus 0.9 mm with a bare-metal stent', meaning: 'The antiproliferative drug, not the metal, controls the neointima. The scaffold only abolishes elastic recoil' },
  ],

  treatment: [
    {
      logic: 'While the lesion is still functional, treat the endothelium rather than the stenosis',
      detail: 'Endothelial dysfunction is reversible, and the interventions that reverse it are unglamorous. **Stopping smoking** improves flow-mediated dilation within weeks. **Exercise** raises laminar shear, which is the physiological stimulus for **KLF2** and **eNOS** — the endothelium is trained by the flow it sees. **Statins** raise eNOS expression and reduce superoxide-mediated NO breakdown, an effect independent of their lipid arm. **ACE inhibitors** reduce angiotensin-II-driven NADPH oxidase activity and preserve bradykinin, which stimulates NO. None of these changes a lumen diameter you could measure, and all of them change the surface the blood flows over — which is the point of the response-to-injury model.',
    },
    {
      logic: 'Restenosis is a proliferation problem and recoil is a mechanics problem, so each needs its own device',
      detail: 'Separate the two failure modes and the device history stops being a list. **Plain balloon** leaves both, so restenosis is **30–50% by six months**. A **bare-metal stent** removes the recoil, leaving **20–30% in-stent restenosis** driven entirely by neointima. A **drug-eluting stent** adds **sirolimus** or **paclitaxel** to arrest the smooth-muscle cell cycle, cutting restenosis into single figures. The cost is **delayed re-endothelialisation** of the struts, which mandates prolonged **dual antiplatelet therapy** against late stent thrombosis. For established in-stent restenosis, a **drug-coated balloon** targets the proliferation without adding a second metal layer. The clinical consequences of failure at each step are followed through in [[ihd-overview]].',
    },
  ],

  mnemonics: [
    {
      hook: 'Intima clots, media bursts, adventitia starves',
      expansion: [
        'Intima fails — thrombosis, leaky permeability, atheroma',
        'Media fails — aneurysm and dissection, because the load-bearing layer is gone',
        'Adventitia and its vasa vasorum fail — outer-medial ischaemia, the lesion of aortitis',
        'Name the layer first and the disease list writes itself',
      ],
    },
    {
      hook: 'The stent fixes recoil, the drug fixes growth',
      expansion: [
        'Balloon alone — elastic recoil plus neointimal hyperplasia, restenosis 30–50% by six months',
        'Bare-metal stent — scaffolds away the recoil, but neointima still gives 20–30% in-stent restenosis',
        'Drug-eluting stent — sirolimus or paclitaxel arrests the smooth-muscle cell cycle, restenosis into single figures',
        'The drug costs delayed re-endothelialisation, so dual antiplatelet therapy is prolonged against late stent thrombosis',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'What the endothelium actually had to do for the lesion to start',
      wrongInstinct: 'The endothelium must be physically stripped off so that collagen is exposed',
      rightAnswer: 'Dysfunction of an intact, activated endothelium is sufficient, and it is the usual initiating event',
      why: 'Rule: activation changes what the surface EXPRESSES — adhesion molecules, tissue factor, less nitric oxide; denudation changes what the surface IS. Atherogenesis needs only the first; acute arterial thrombosis needs the second',
    },
    {
      questionCategory: 'Naming the lesion inside a vessel that has narrowed again after intervention',
      wrongInstinct: 'The atherosclerosis has come back, so intensify lipid-lowering and repeat the angioplasty',
      rightAnswer: 'Narrowing within the first six months is neointimal hyperplasia — smooth muscle and matrix, with no lipid core',
      why: 'Rule: under six months after an intervention means proliferation, and the answer is an antiproliferative device; beyond twelve months means new or progressive atheroma, and the answer is the lipid',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 31-year-old smoker with untreated hypertension has a completely normal coronary angiogram, but brachial artery diameter increases only 3% after cuff release. Which statement best describes the state of his arterial wall?',
      options: [
        { id: 'a', text: 'The endothelium has been denuded, exposing subendothelial collagen to flowing blood' },
        { id: 'b', text: 'The endothelium is intact but activated, with reduced nitric oxide output and raised adhesion-molecule and tissue-factor expression' },
        { id: 'c', text: 'The media has already been replaced by neointima along the length of the vessel' },
        { id: 'd', text: 'The vasa vasorum have been obliterated, causing outer-medial ischaemia' },
      ],
      answerId: 'b',
      explanation: 'Impaired flow-mediated dilation is the bedside readout of reduced endothelial nitric oxide. The response-to-injury model holds that dysfunction of an intact lining, not denudation, initiates vascular disease — the surface changes what it expresses rather than disappearing. Denudation would cause acute thrombosis rather than a blunted dilator response, neointima would be visible as luminal narrowing, and vasa vasorum obliteration damages the outer media of large arteries rather than the brachial endothelium.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Five months after a successful balloon angioplasty, a patient has recurrent exertional angina. Atherectomy of the treated segment yields cellular, proteoglycan-rich tissue containing smooth-muscle actin positive cells, with no lipid core and no foam cells. What has happened?',
      options: [
        { id: 'a', text: 'Accelerated atherosclerosis has recurred at the treated site' },
        { id: 'b', text: 'Organised mural thrombus has occluded the lumen' },
        { id: 'c', text: 'Medial smooth-muscle cells switched to a synthetic phenotype, migrated into the intima and formed a neointima' },
        { id: 'd', text: 'Fibrinoid necrosis of the media has narrowed the vessel' },
      ],
      answerId: 'c',
      explanation: 'The absence of lipid and foam cells rules out recurrent atheroma; smooth-muscle actin positivity with abundant matrix identifies neointimal hyperplasia. Angioplasty injures the wall deliberately, and PDGF, FGF-2, TGF-beta and thrombin drive the medial smooth-muscle cell from a contractile to a synthetic phenotype so that it crosses the internal elastic lamina and proliferates. This is the stereotyped healing response of any injured vessel, and its 3-to-6-month timing is the diagnostic clue.',
      tests: 'disease',
    },
    {
      id: 'q3',
      stem: 'Histology of an aorta removed at operation shows patchy loss of smooth muscle and fragmented elastic laminae confined to the outer half of the media, while the inner media and intima are preserved. Which finding best explains this distribution?',
      options: [
        { id: 'a', text: 'Obliterative endarteritis of the adventitial vasa vasorum' },
        { id: 'b', text: 'Lipid accumulation within intimal macrophages' },
        { id: 'c', text: 'Loss of endothelial nitric oxide production' },
        { id: 'd', text: 'Hyaline thickening of the medial arterioles from plasma protein leak' },
      ],
      answerId: 'a',
      explanation: 'The wall has two blood supplies. The intima and roughly the inner half of the media are oxygenated by diffusion from the lumen, over a distance on the order of 0.5 mm, while the outer media depends on the vasa vasorum entering from the adventitia. Destroying those small adventitial vessels therefore produces ischaemic injury that stops sharply at the watershed, sparing the inner media. This is the mechanism by which aortitis weakens and dilates a large artery instead of occluding it.',
      tests: 'investigation',
    },
  ],
};

export default rbpVascularWallEndothelialInjury;
