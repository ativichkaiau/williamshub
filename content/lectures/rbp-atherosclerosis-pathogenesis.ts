import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpAtherosclerosisPathogenesis: Lecture = {
  id: 'rbp-atherosclerosis-pathogenesis',
  title: 'Atherosclerosis: Pathogenesis & Plaque',
  system: 'cardiovascular',
  source: 'Ch 9 — Blood Vessels',
  updated: '2026-09-16',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 9 Blood Vessels' },
    { kind: 'mechanism', label: 'LDL oxidation & foam-cell formation' },
    { kind: 'disease', label: 'Vulnerable plaque & rupture' },
  ],

  highYield: [
    '**Learn the sequence in order, because every question drops you somewhere inside it and asks what comes next.** Endothelial dysfunction at a low-shear branch point raises permeability → **LDL enters the intima** and is trapped by **proteoglycans** → LDL is **OXIDISED** by reactive oxygen species from endothelium and macrophages → **monocytes adhere** through **VCAM-1**, enter on a **MCP-1** gradient and become macrophages → those macrophages ingest oxidised LDL through **scavenger receptors (SR-A, CD36)** → **foam cells** → **fatty streak** → macrophage and T-cell cytokines (**IFN-γ, IL-1, TNF**) recruit **smooth muscle** from the media, which proliferates and secretes collagen → **fibrous cap over a necrotic lipid core** → **atheroma**. One step carries the mechanism: **oxidation is what commits the lipid**. Oxidised LDL is chemotactic, immunogenic and cytotoxic, and it is taken up by the **scavenger receptor, which is NOT downregulated by intracellular cholesterol** the way the classical LDL receptor is. That is the reason a macrophage keeps eating until it becomes a foam cell, and the reason native LDL alone never produces one.',
    '**The fatty streak is present in adolescence in nearly everybody and is NOT committed to progress — do not call it early disease.** Aortic fatty streaks appear in infancy and are present in **virtually all children over the age of 10**, regardless of diet, genetics or risk-factor profile; coronary streaks begin in the teens and twenties. Morphologically they are flat-to-minimally-raised yellow intimal collections of **foam cells with scattered T lymphocytes**, and they cause **no flow obstruction whatever**. Most never become plaques, and their anatomical distribution only partly overlaps with that of adult plaques. So the correct reading is that the streak is the **substrate**, and risk factors decide which of them progresses. An autopsy fatty streak in a teenager is a normal finding, not a diagnosis.',
    '**Here is the clinically decisive point of the entire chapter: plaque STABILITY matters more than plaque SIZE.** A large, fibrotic, heavily calcified plaque with a small core narrowing the lumen 80% produces **reproducible exertional angina** and rarely kills suddenly — the artery is predictable, and collaterals have had time to grow. A small, **lipid-rich plaque with a thin cap and a dense macrophage infiltrate**, narrowing the lumen only **30–40%**, ruptures and thromboses. About **two-thirds of acute myocardial infarctions arise from plaques stenosing less than 50%**. This is why stenosis severity predicts **symptoms** but not **infarction**, why a normal stress test six months ago does not protect anyone, and why opening the tightest lesion relieves angina without preventing the next infarct. Critical stenosis — the fixed narrowing at which coronary flow reserve can no longer meet exercise demand — sits at about **70% of cross-sectional area**, which is only around **50% by diameter**, the number the angiography report actually quotes; at roughly **90% of area**, flow is inadequate even at rest. Followed clinically in [[acs-spectrum]].',
    '**What makes a cap thin is the balance between collagen synthesis and collagen breakdown, and inflammation loses on both arms.** Intimal **smooth-muscle cells make the collagen** that holds the cap together. **IFN-γ** from intimal T cells **inhibits** smooth-muscle collagen synthesis and proliferation, while macrophage **matrix metalloproteinases** — interstitial collagenases MMP-1, MMP-8 and MMP-13, the gelatinases and stromelysin — digest what is already there. Macrophages in the plaque shoulder also apoptose, enlarging the **necrotic core**. The resulting vulnerable plaque has a **fibrous cap under 65 µm**, a **necrotic core exceeding 40% of plaque volume**, dense macrophages, few smooth-muscle cells, **spotty rather than sheet-like calcification**, and leaky **intraplaque neovessels** growing in from the adventitia. Rupture then needs only a mechanical trigger: an adrenergic surge raises blood pressure, heart rate and coronary tone, which is why infarctions cluster in the first hours after waking, and after emotion, exertion or cold.',
    '**Statins prevent far more events than their effect on the lumen can explain, and the reason is compositional, not geometric.** High-intensity statin therapy typically changes angiographic lumen diameter by a few percent or not at all, yet reduces major events by roughly **a quarter to a third**. Lowering LDL depletes the lipid pool feeding the necrotic core, quietens macrophage activity and allows the cap to thicken with collagen — the plaque **stabilises rather than shrinks**. Two corollaries follow that examiners like. First, benefit tracks the **LDL level achieved**, not the angiographic appearance, so a disappointing follow-up angiogram is not treatment failure. Second, the drug acts on **every plaque in the body, including the non-critical ones you cannot see**, whereas a stent acts only on the single lesion you could. That is the pharmacological restatement of stability over size. See [[atherosclerosis]] for the clinical layer.',
    '**The complications of an established plaque are mechanical, and each has its own syndrome.** **Rupture, fissuring or ulceration** exposes the thrombogenic core: an occlusive thrombus gives infarction, a mural thrombus gives unstable angina or a non-ST-elevation infarct ([[myocardial-infarction-pathology]]). **Haemorrhage into the plaque** from the leaky neovessels expands it abruptly. **Atheroembolism** showers cholesterol crystals downstream, producing blue toes with intact pulses, eosinophilia and renal impairment after catheterisation. **Aneurysmal dilation** follows pressure atrophy of the media beneath a large plaque. **Calcification** marks burden. Two structural points complete the picture: the atheroma is **eccentric** because it forms where shear is disturbed rather than around the whole circumference; and by **Glagov outward remodelling** the artery enlarges around a growing plaque so that the lumen stays normal until the plaque occupies about **40% of the area within the internal elastic lamina** — which is exactly why angiography, a lumenogram, systematically understates disease burden.',
  ],

  mechanism: {
    title: 'Response to injury: from a dysfunctional endothelium to a ruptured cap',
    steps: [
      { id: 's1', label: 'Endothelial dysfunction at a low-shear branch point: permeability up, VCAM-1 up, nitric oxide down', emphasis: 'key' },
      { id: 's2', label: 'LDL enters the intima, is trapped by proteoglycans and is OXIDISED by reactive oxygen species', detail: 'Oxidation is the committing step. Oxidised LDL is chemotactic, immunogenic and cytotoxic; native LDL is none of these.', emphasis: 'key' },
      { id: 's3', label: 'Monocytes adhere and migrate in on MCP-1, become macrophages and ingest oxidised LDL through unregulated scavenger receptors', detail: 'SR-A and CD36 are not switched off by intracellular cholesterol, so uptake has no brake — hence the foam cell.', emphasis: 'key' },
      { id: 's4', label: 'Fatty streak: intimal foam cells with T lymphocytes — universal from about age 10, non-obstructive, not committed to progress', emphasis: 'normal' },
      { id: 's5', label: 'Smooth muscle migrates from the media, proliferates and lays collagen into a fibrous cap over a growing necrotic core', emphasis: 'normal' },
      { id: 's6', label: 'IFN-gamma blocks collagen synthesis while macrophage MMPs digest the cap — rupture exposes the core and thrombosis follows', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Retrosternal tightness reproducible at the same workload every time, relieved within three minutes by rest or nitrate', mechanism: 'Fixed stenosis beyond roughly 70% of cross-sectional area exhausts coronary flow reserve only when demand rises; supply remains adequate at rest, which is what makes the threshold reproducible', significance: 'key' },
    { sign: 'Thirty minutes of rest pain in a patient whose exercise stress test six months earlier was entirely normal', mechanism: 'Rupture of a non-critical plaque. A stress test interrogates flow limitation, and a 40% lipid-rich lesion produces none, so the test cannot see the plaque that is most likely to rupture', significance: 'key' },
    { sign: 'Tendon xanthomata over the Achilles and extensor tendons with corneal arcus before the age of 45', mechanism: 'Familial hypercholesterolaemia. Lifetime LDL exposure, not the current level alone, drives intimal lipid entry — cumulative dose is the variable', significance: 'key' },
    { sign: 'Painful blue toes with fully palpable pedal pulses, livedo and eosinophilia three days after cardiac catheterisation', mechanism: 'Atheroembolism of cholesterol crystals from a disrupted aortic plaque into digital arterioles; because the obstruction is microvascular the large-vessel pulses are preserved, which is the discriminator from thromboembolism', significance: 'key' },
    { sign: 'Autopsy of a 14-year-old: flat yellow streaks along the posterior wall of the aorta', mechanism: 'Fatty streaks — intimal foam cells causing no obstruction. Present in virtually all children over 10 and not committed to becoming plaques', significance: 'supportive' },
    { sign: 'An eccentric intimal plaque with a firm white cap over a soft yellow grumous core that shells out of the wall', mechanism: 'The fibrous cap of smooth muscle and collagen overlying the necrotic lipid core. It is eccentric because it forms where flow is disturbed rather than around the whole circumference', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Angiography during a STEMI shows the culprit to be a 35% mid-LAD lesion', meaning: 'The typical infarct-causing plaque is non-critical. Stenosis measures the lumen while rupture depends on composition, so the two do not track each other' },
    { clue: 'Intravascular ultrasound: plaque burden 55% of the vessel area with an angiographically normal lumen calibre', meaning: 'Glagov outward remodelling — the artery has expanded around the plaque. Angiography is a lumenogram and underestimates burden until about 40% of the internal elastic lamina area is occupied' },
    { clue: 'CT coronary angiography: low-attenuation core below 30 HU, positive remodelling, spotty calcification and a napkin-ring sign', meaning: 'High-risk plaque morphology. These features predict events independently of the degree of stenosis, which is the imaging proof that composition beats calibre' },
    { clue: 'Coronary artery calcium score of zero in an asymptomatic 55-year-old', meaning: 'Very low event rate over the next five to ten years. Read it correctly though: calcification marks total plaque burden and tends to mark healed, stable plaque, so the score measures how much disease there is, not how likely it is to rupture' },
    { clue: 'LDL-C 5.6 mmol/L (216 mg/dL) with Achilles tendon thickening and a father who infarcted at 41', meaning: 'Familial hypercholesterolaemia from an LDL-receptor pathway defect. Because cumulative LDL exposure is the driver, the arterial age exceeds the chronological age by decades' },
    { clue: 'hs-CRP 4.2 mg/L in a patient whose LDL is already at target on a high-intensity statin', meaning: 'Residual inflammatory risk. The inflammatory arm of plaque biology persists after the lipid arm is treated; IL-1-beta blockade and colchicine both reduce events in trials, which supports inflammation as a genuine second target rather than a marker only' },
  ],

  treatment: [
    {
      logic: 'Lower the lipid to change composition; open the artery only to change symptoms',
      detail: 'This is the therapeutic statement of stability over size. **Statins**, with **ezetimibe** and a **PCSK9 inhibitor** where needed, deplete the necrotic core, quieten macrophages and thicken the fibrous cap across **every** plaque in the body — including the non-critical ones that actually rupture. Event reduction of roughly **a quarter to a third** arrives with little or no measurable gain in lumen diameter. **Revascularisation** does something different and narrower: it relieves the flow limitation of one lesion, so it abolishes angina, and in stable coronary disease it has not been shown to prevent infarction or death beyond optimal medical therapy. The two are not competitors — they answer different questions. Confusing them is the commonest clinical error the pathology of this chapter is meant to prevent, and the downstream syndromes are set out in [[myocardial-infarction-pathology]].',
    },
    {
      logic: 'Attack the inflammatory arm only once the lipid arm is maximal',
      detail: 'Both arms are real, but they are not equal. **LDL lowering comes first** because the lipid is the substrate everything else acts on. Only when LDL is at target does residual inflammatory risk — a persistently raised **hs-CRP** — become the meaningful target. Here the evidence is worth stating precisely rather than hedging: **IL-1β blockade with canakinumab** reduced cardiovascular events without lowering LDL at all, which is the cleanest proof that inflammation is causal, but it increased fatal infection and is not used routinely. **Colchicine 0.5 mg daily** reduced events in secondary prevention at much lower cost and risk. What remains genuinely contested is which patients gain enough to justify long-term anti-inflammatory therapy, and no biomarker yet selects them reliably.',
    },
  ],

  mnemonics: [
    {
      hook: 'In, Oxidised, Eaten, Capped — then Cracked',
      expansion: [
        'In — LDL crosses a dysfunctional endothelium and is trapped by intimal proteoglycans',
        'Oxidised — reactive oxygen species convert it to oxidised LDL, the committing step',
        'Eaten — macrophages ingest it through scavenger receptors that have no cholesterol feedback, so they become foam cells',
        'Capped — smooth muscle migrates from the media and lays collagen over the necrotic core',
        'Cracked — IFN-gamma stops collagen synthesis and MMPs digest the cap, so it ruptures and thromboses',
      ],
    },
    {
      hook: 'Size sets the symptom, stability sets the infarct',
      expansion: [
        'About 70% of cross-sectional area, near 50% by diameter, is critical stenosis — that is what gives exertional angina',
        'Roughly two in three acute infarcts come from plaques narrowing less than 50%',
        'Vulnerable means a cap under 65 µm, a core over 40% of volume and a dense macrophage infiltrate',
        'So a stress test predicts the angina and misses the infarct, and a statin does the reverse',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'What actually determines whether a plaque kills',
      wrongInstinct: 'The tightest stenosis on the angiogram is the lesion most likely to cause the infarct',
      rightAnswer: 'The lipid-rich, thin-capped, macrophage-dense plaque is — and it usually narrows the lumen by less than 50%',
      why: 'Rule: stenosis predicts symptoms, composition predicts events. A 40% lipid-rich plaque outranks an 80% fibrocalcific one for infarct risk, which is why revascularising the tight lesion treats angina and not mortality',
    },
    {
      questionCategory: 'How to read a fatty streak',
      wrongInstinct: 'A fatty streak in a teenager is early atherosclerosis and will become a plaque',
      rightAnswer: 'Fatty streaks are universal from about age 10, obstruct nothing, and most never progress',
      why: 'Rule: the streak is the substrate, not the disease — risk factors decide which one advances, and streak distribution only partly matches the distribution of adult plaques',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 42-year-old man has an anterior STEMI. An angiogram performed three months earlier for atypical chest pain had shown a smooth 35% mid-LAD narrowing and no other disease. What best explains the infarct?',
      options: [
        { id: 'a', text: 'The lesion must have progressed rapidly past 70% cross-sectional stenosis' },
        { id: 'b', text: 'A thin-capped, lipid-rich, macrophage-dense plaque ruptured, exposing its thrombogenic core' },
        { id: 'c', text: 'Coronary vasospasm superimposed on a fixed 35% narrowing limited flow at rest' },
        { id: 'd', text: 'Progressive intimal calcification occluded the vessel' },
      ],
      answerId: 'b',
      explanation: 'Roughly two-thirds of acute infarcts arise from plaques stenosing less than 50%, because rupture is governed by composition rather than calibre. A non-critical plaque with a cap under 65 micrometres, a necrotic core exceeding 40% of its volume and abundant macrophages secreting MMPs is the classic culprit. Progression to critical stenosis in three months is not needed and is not the usual mechanism, and calcification marks healed rather than vulnerable plaque.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'Why does a macrophage in the intima keep accumulating lipid until it becomes a foam cell, when the same cell cannot be overloaded by native LDL?',
      options: [
        { id: 'a', text: 'Oxidised LDL is taken up by scavenger receptors such as SR-A and CD36, which are not downregulated by intracellular cholesterol' },
        { id: 'b', text: 'Oxidised LDL binds the classical LDL receptor with higher affinity than native LDL' },
        { id: 'c', text: 'Intimal macrophages lack the enzymes needed to esterify cholesterol' },
        { id: 'd', text: 'Proteoglycan binding forces LDL into the cell by passive diffusion' },
      ],
      answerId: 'a',
      explanation: 'The classical LDL receptor is suppressed by rising intracellular cholesterol, so native LDL uptake is self-limiting. Oxidation changes the ligand: oxidised LDL is recognised by scavenger receptors that carry no such feedback, so ingestion continues without a brake and the cell fills with lipid. This is why oxidation is the committing step of atherogenesis, and it also explains the chemotactic, immunogenic and cytotoxic properties that recruit further monocytes and enlarge the necrotic core.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'In a statin trial, LDL falls by 50%, repeat angiography shows essentially unchanged lumen diameters, yet major cardiovascular events fall by about 30%. What best accounts for this discrepancy?',
      options: [
        { id: 'a', text: 'Angiographic measurement is too imprecise to detect the regression that produced the benefit' },
        { id: 'b', text: 'The benefit comes from a change in plaque composition — core depletion, reduced inflammation and a thicker fibrous cap — rather than from lumen gain' },
        { id: 'c', text: 'Statins act mainly by promoting collateral vessel growth around stenoses' },
        { id: 'd', text: 'The benefit reflects reduced myocardial oxygen demand through lower heart rate and blood pressure' },
      ],
      answerId: 'b',
      explanation: 'Events are driven by rupture of plaques that are often non-critical, so a therapy that changes composition rather than calibre can prevent infarcts without widening anything. Lowering LDL depletes the lipid core, reduces macrophage activity and MMP-mediated collagen breakdown, and allows smooth muscle to thicken the cap. It does this in every plaque in the body, including the ones angiography cannot see, whereas a stent alters only the single lesion it is deployed in.',
      tests: 'treatment',
    },
  ],
};

export default rbpAtherosclerosisPathogenesis;
