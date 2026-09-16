import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpEdemaHaemostasisThrombosis: Lecture = {
  id: 'rbp-edema-haemostasis-thrombosis',
  title: 'Oedema, Haemostasis & Thrombosis',
  system: 'pathology',
  source: 'Ch 3 — Hemodynamic Disorders, Thromboembolism, and Shock',
  updated: '2026-09-16',
  tags: [
    { kind: 'system', label: 'Pathology' },
    { kind: 'lecture', label: 'Ch 3 Hemodynamic Disorders, Thromboembolism, and Shock' },
    { kind: 'mechanism', label: 'Starling forces & Virchow’s triad' },
    { kind: 'investigation', label: 'Transudate vs exudate' },
  ],

  highYield: [
    '**Do not memorise a list of causes of oedema — read them off the Starling equation.** Net filtration equals **Kf** times the hydrostatic gradient **(Pc − Pi)** minus the oncotic gradient **(πc − πi)**, and only five things can go wrong. **Capillary hydrostatic pressure rises** (heart failure, venous obstruction — Pc climbs from a normal **32 mmHg** at the arteriolar end and **12–15 mmHg** at the venular end). **Plasma oncotic pressure falls** below the normal **25–28 mmHg** when albumin drops under **2.5 g/dL** (nephrotic loss above **3.5 g/day**, cirrhosis, protein-losing enteropathy). **Lymphatics block**, so the **2–3 L/day** normally returned to the circulation stays behind. **Sodium is retained**, expanding the whole extracellular volume and raising Pc everywhere. **Permeability rises** in inflammation, which raises Kf and lets protein escape. Cirrhosis is the exam favourite because it pulls three levers at once. The same derivation is worked through in [[fcp1-edema-mechanisms]].',
    '**Transudate versus exudate is not a separate fact — it tells you WHICH force moved, and protein content is the readout.** A **pressure or oncotic** problem pushes water out through an intact wall and leaves protein behind: a **transudate**, **specific gravity below 1.012**, **protein below 3 g/dL**, fluid-to-serum **protein ratio below 0.5** and **LDH ratio below 0.6**. A **permeability or lymphatic** problem lets protein out with the water: an **exudate**, **specific gravity above 1.020**, **protein above 3 g/dL**, protein ratio **above 0.5** or LDH ratio **above 0.6**. So a transudate says heart failure, cirrhosis or nephrotic syndrome, and an exudate says infection, malignancy or an obstructed lymphatic. The clinical corollary follows for free: low-protein fluid **pits** on pressure, while protein-rich lymphoedema holds water as a gel and does **not** pit.',
    '**Thrombosis is usually the LOSS of an inhibitory function, not the switching on of a pathway — this reframing is the whole module.** Resting endothelium is **actively antithrombotic** on three fronts. Against platelets it secretes **prostacyclin (PGI2)** and **nitric oxide**, and displays **CD39 adenosine diphosphatase** that degrades the **ADP** platelets use to recruit each other. Against coagulation it displays **thrombomodulin**, which converts thrombin into an anticoagulant that activates **protein C** with its cofactor **protein S**; **heparan sulphate**, which accelerates **antithrombin** by several thousand-fold; and **tissue factor pathway inhibitor**. Against fibrin it releases **tissue plasminogen activator**. The cascade is permanently primed and permanently suppressed, so the question at every thrombus is not what was activated but **what stopped inhibiting**.',
    '**Normal haemostasis runs in four acts, and each act maps to a different bleeding phenotype.** First, **reflex arteriolar vasoconstriction** driven by **endothelin** — transient and, on its own, useless. Second, **primary haemostasis**: subendothelial **collagen** binds **von Willebrand factor**, which bridges to platelet **GpIb**; platelets change shape, release **ADP** and synthesise **thromboxane A2**, and aggregate when **GpIIb/IIIa** binds **fibrinogen**. Third, **secondary haemostasis**: exposed **tissue factor** with **factor VIIa** generates **thrombin**, which cleaves fibrinogen to **fibrin** and is itself the most powerful platelet activator. Fourth, **stabilisation and counter-regulation**: **factor XIIIa** cross-links fibrin while **t-PA** and **thrombomodulin** confine the plug to the injury. Failure in act two gives **mucosal bleeding and petechiae immediately**; failure in act three gives **deep bleeding into joints and muscles, often delayed**. Compare with [[hemostasis-thrombosis-embolism]].',
    '**Virchow’s triad is only useful once you know which arm dominates where — and that asymmetry then predicts both the morphology and the drug.** **Endothelial injury** dominates **arterial** and intracardiac thrombosis (ruptured atheroma, infarcted endocardium, vasculitis), where flow is fast and shear is high. **Stasis and hypercoagulability** dominate **venous** thrombosis (immobility, pregnancy, malignancy), where flow is slow. High shear favours what adhesion molecules can catch, so arterial thrombi are **platelet-rich, pale grey, firm and adherent**, growing **retrograde** towards the heart from their point of attachment. Stasis lets locally generated thrombin accumulate instead of being washed away, so venous thrombi are **fibrin-rich and red** with trapped erythrocytes, growing **in the direction of flow**. Now derive the therapy rather than memorising it: you remove the component that built the thrombus, so **antiplatelet agents** for arterial disease and **anticoagulants** for venous disease — the reason aspirin is wrong for a DVT and warfarin alone is wrong for a coronary stent.',
    '**Lines of Zahn prove a thrombus formed in flowing blood, which is why they are the ante-mortem discriminator.** Alternating pale laminations of **platelets and fibrin** with darker **erythrocyte-rich** layers can only be laid down where blood is still moving; a post-mortem clot is unlaminated, rubbery, and separates into a **chicken-fat** upper layer and a **currant-jelly** dependent layer with no attachment to the wall. Once formed, a thrombus has exactly **four fates**: **propagation** (it accretes more platelets and fibrin), **embolisation** (it detaches and lodges downstream — followed up in [[rbp-embolism-infarction-shock]]), **dissolution** (plasmin lyses it, effective only while it is fresh, which is why thrombolysis is time-critical), or **organisation and recanalisation** (ingrowth of endothelium, smooth muscle and fibroblasts creates new channels through it, leaving a fibrous residue and, in a vein, a destroyed valve and post-thrombotic syndrome).',
  ],

  mechanism: {
    title: 'Loss of endothelial inhibition to the four fates of a thrombus',
    steps: [
      { id: 's1', label: 'Resting endothelium runs PGI2, nitric oxide, ADPase, thrombomodulin and heparan sulphate', detail: 'The cascade is always primed; the surface it flows over is what keeps it off.', emphasis: 'normal' },
      { id: 's2', label: 'Injury, stasis or hypercoagulability removes that inhibition and exposes collagen and tissue factor', detail: 'Virchow’s triad is a list of ways to lose the brake, not ways to press the accelerator.', emphasis: 'key' },
      { id: 's3', label: 'von Willebrand factor bridges collagen to platelet GpIb — adhesion, then ADP and thromboxane A2 recruitment', emphasis: 'key' },
      { id: 's4', label: 'GpIIb/IIIa binds fibrinogen and cross-links platelets into the primary plug', detail: 'High arterial shear stops here in bulk — hence a pale, platelet-rich arterial thrombus.', emphasis: 'normal' },
      { id: 's5', label: 'Tissue factor with factor VIIa generates thrombin, which lays down fibrin and traps red cells — lines of Zahn', detail: 'Venous stasis lets thrombin accumulate instead of washing away — hence a red, fibrin-rich venous thrombus.', emphasis: 'key' },
      { id: 's6', label: 'Four fates: propagate, embolise, dissolve, or organise and recanalise', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Ankle oedema that holds a pit for 15 seconds after thumb pressure, worst by evening', mechanism: 'Raised capillary hydrostatic pressure from right heart failure; gravity chooses the site, protein-poor fluid allows the pit', significance: 'key' },
    { sign: 'Periorbital puffiness on waking in a child with frothy urine', mechanism: 'Oncotic failure from urinary albumin loss; the periorbital tissue has the lowest tissue tension, so it fills first when posture removes the gravitational gradient', significance: 'key' },
    { sign: 'Woody, non-pitting swelling of one arm months after axillary clearance', mechanism: 'Lymphatic obstruction leaves protein in the interstitium; protein-bound water forms a gel that will not displace under a thumb', significance: 'key' },
    { sign: 'Unilateral calf swelling, warmth, tenderness and a palpable cord', mechanism: 'Occlusive venous thrombus obstructing outflow, with secondary congestion and hydrostatic oedema behind it', significance: 'key' },
    { sign: 'Petechiae and mucosal bleeding starting immediately after a dental extraction', mechanism: 'Primary haemostasis has failed — the platelet plug never formed, so there is nothing to bleed through later', significance: 'key' },
    { sign: 'A firm grey thrombus adherent to the wall with pale and red laminations at autopsy', mechanism: 'Lines of Zahn form only in flowing blood, so this is ante-mortem thrombus, not post-mortem clot', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Pleural fluid protein 4.2 g/dL, specific gravity 1.025, fluid-to-serum protein ratio 0.68', meaning: 'Exudate. Protein crossed the wall, so the fault is permeability or lymphatic drainage — infection, malignancy or infarction, not pressure' },
    { clue: 'Pleural fluid protein 1.6 g/dL, specific gravity 1.008, LDH ratio 0.4', meaning: 'Transudate. The wall is intact and a Starling pressure moved — heart failure, cirrhosis or nephrotic syndrome' },
    { clue: 'Serum albumin 1.7 g/dL with urinary protein 6.4 g per 24 hours', meaning: 'Oncotic pressure has fallen below the threshold for generalised oedema; expect a transudate wherever fluid collects' },
    { clue: 'Compression ultrasound: the common femoral vein does not collapse under the probe', meaning: 'Occlusive thrombus. Non-compressibility, not flow on Doppler, is the diagnostic criterion for proximal DVT' },
    { clue: 'D-dimer below the assay cut-off in a patient with a low pre-test probability', meaning: 'No significant fibrin is being formed and lysed anywhere. Useful only to exclude; it rises in sepsis, pregnancy, malignancy and after surgery' },
    { clue: 'Normal platelet count with a prolonged PFA-100 closure time and low ristocetin cofactor activity', meaning: 'Primary haemostasis fails despite adequate platelet numbers — von Willebrand disease, a qualitative defect in act two' },
  ],

  treatment: [
    {
      logic: 'Treat the Starling force that actually moved, not the swelling you can see',
      detail: 'A **transudate** from raised **Pc** responds to **preload reduction** — loop diuretics, sodium restriction, and treating the heart. A transudate from **low oncotic pressure** will not respond to diuresis alone, because diuresis raises the oncotic gradient further and simply shifts fluid from the plasma; the target is the **protein loss**. **Lymphoedema** responds to **compression and drainage**, not to diuretics at all, since the hydrostatic pressure was never the problem. An **exudate** needs the cause of the permeability drained or treated. Draining a pleural effusion without naming the force that produced it guarantees it returns.',
    },
    {
      logic: 'The composition of the thrombus chooses the drug — derive it, do not memorise it',
      detail: 'A **platelet-rich arterial** thrombus formed under high shear is dismantled by blocking platelet recruitment: **aspirin** (irreversible **COX-1**, so no thromboxane A2), a **P2Y12 inhibitor** (no ADP amplification), and **GpIIb/IIIa** blockade for the final common step. A **fibrin-rich venous** thrombus formed in stasis is dismantled by blocking thrombin generation: **heparin** through **antithrombin**, **warfarin** through vitamin-K-dependent factors, or a **direct oral anticoagulant**. Giving aspirin for a DVT or a bare anticoagulant after coronary stenting is the same error made in two directions.',
    },
  ],

  mnemonics: [
    {
      hook: 'SHE is venous, E alone is arterial',
      expansion: [
        'Virchow’s triad: Stasis, Hypercoagulability, Endothelial injury',
        'Venous thrombosis needs S and H — slow flow lets thrombin build fibrin, so the thrombus is red',
        'Arterial thrombosis needs E — a ruptured plaque under high shear, so the thrombus is pale and platelet-rich',
        'Therefore anticoagulants for the red one and antiplatelets for the pale one',
      ],
    },
    {
      hook: 'A thrombus goes DOPE: Dissolve, Organise, Propagate, Embolise',
      expansion: [
        'Dissolve — plasmin lyses it while it is fresh, which is why thrombolysis has a time window',
        'Organise — endothelium, smooth muscle and fibroblasts grow in and recanalise it, destroying venous valves',
        'Propagate — it accretes more platelets and fibrin towards the heart',
        'Embolise — it detaches and lodges downstream, the fate that kills',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'What the endothelium was doing before the thrombus formed',
      wrongInstinct: 'Thrombosis means the coagulation cascade was abnormally switched on',
      rightAnswer: 'Thrombosis is nearly always the loss of endothelial inhibition — prostacyclin, nitric oxide, ADPase, thrombomodulin and heparan sulphate stop working',
      why: 'The cascade is permanently primed, so ask what stopped suppressing it before you ask what activated it',
    },
    {
      questionCategory: 'Reading a swollen limb by whether it pits',
      wrongInstinct: 'Oedema is oedema; whether it pits is a bedside curiosity',
      rightAnswer: 'Pitting means low-protein fluid from a hydrostatic or oncotic problem; brawny non-pitting oedema means protein-rich fluid from lymphatic obstruction',
      why: 'Interstitial protein binds water into a gel and raises tissue turgor, so a protein-rich transudate does not exist and lymphoedema cannot pit',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A pleural tap yields fluid with protein 4.4 g/dL, specific gravity 1.026 and a fluid-to-serum LDH ratio of 0.8. What does this composition tell you about the Starling force that was disturbed?',
      options: [
        { id: 'a', text: 'Capillary hydrostatic pressure rose while the vessel wall stayed intact' },
        { id: 'b', text: 'Plasma oncotic pressure fell because of albumin loss' },
        { id: 'c', text: 'Vascular permeability rose or lymphatic drainage was obstructed, letting protein leave with the water' },
        { id: 'd', text: 'Sodium retention expanded the extracellular volume' },
      ],
      answerId: 'c',
      explanation: 'The numbers define an exudate: specific gravity above 1.020, protein above 3 g/dL and Light ratios exceeded. Protein can only reach the fluid if the barrier leaked it or the lymphatics failed to clear it. Options a, b and d all push water across an intact wall and leave protein behind, which produces a transudate with specific gravity below 1.012 and protein below 3 g/dL.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'Which statement best captures why an intact endothelial surface prevents thrombosis?',
      options: [
        { id: 'a', text: 'It forms a purely physical barrier that keeps blood away from collagen' },
        { id: 'b', text: 'It actively inhibits platelets and coagulation and promotes fibrinolysis, so thrombosis represents the loss of that inhibition' },
        { id: 'c', text: 'It prevents tissue factor from ever being synthesised anywhere in the body' },
        { id: 'd', text: 'It keeps the coagulation cascade permanently unassembled until factor XII is contacted' },
      ],
      answerId: 'b',
      explanation: 'The barrier function is real but secondary. Endothelium secretes prostacyclin and nitric oxide and displays CD39 ADPase against platelets; thrombomodulin, heparan sulphate and tissue factor pathway inhibitor against coagulation; and tissue plasminogen activator against fibrin. Because the cascade is continuously primed, a thrombus generally marks a failure of suppression rather than a novel activation.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A pale, firm, laminated thrombus is found adherent to a ruptured coronary plaque, and a soft red thrombus is found in a calf vein of the same patient. Which antithrombotic strategy matches which lesion, and why?',
      options: [
        { id: 'a', text: 'Antiplatelet agents for both, because platelets initiate every thrombus' },
        { id: 'b', text: 'Anticoagulants for both, because thrombin is the final common pathway' },
        { id: 'c', text: 'Antiplatelet agents for the coronary lesion and anticoagulants for the calf lesion, because high shear builds a platelet-rich thrombus and stasis builds a fibrin-rich one' },
        { id: 'd', text: 'Thrombolysis for both, because organisation has not yet occurred' },
      ],
      answerId: 'c',
      explanation: 'Composition follows flow. Under high arterial shear only platelet adhesion receptors can capture material, so the arterial thrombus is platelet-rich, pale and grey. In a stagnant vein locally generated thrombin is not washed away, so fibrin polymerises and traps red cells. Removing the dominant component gives the therapeutic split directly: antiplatelet agents arterially, anticoagulants venously.',
      tests: 'treatment',
    },
  ],
};

export default rbpEdemaHaemostasisThrombosis;
