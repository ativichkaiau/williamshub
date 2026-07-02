import type { Lecture } from '../../lib/types';

export const hemostasisThrombosisEmbolism: Lecture = {
  id: 'hemostasis-thrombosis-embolism',
  title: 'Hemostasis, Thrombosis & Embolism',
  system: 'pathology',
  source: 'L6 — Hemodynamic Disorders',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pathology' },
    { kind: 'lecture', label: 'L6 Thrombosis' },
    { kind: 'mechanism', label: "Virchow's triad; thrombus fate" },
    { kind: 'exam', label: 'Lines of Zahn; PE; embolus types' },
  ],

  highYield: [
    '**Normal HEMOSTASIS is a balanced sequence: (1) transient VASOCONSTRICTION; (2) PRIMARY hemostasis — platelets adhere (via von Willebrand factor to exposed collagen), activate and aggregate into a plug; (3) SECONDARY hemostasis — the COAGULATION cascade generates thrombin → FIBRIN, stabilising the plug; (4) counter-regulation and fibrinolysis (plasmin) limit and later dissolve it. Endothelium is normally ANTI-thrombotic but becomes PRO-thrombotic when injured.**',
    '**THROMBOSIS = inappropriate activation of clotting forming a solid mass (thrombus) within intact vessels/heart, explained by VIRCHOW\'S TRIAD: (1) ENDOTHELIAL INJURY (atherosclerosis, vasculitis, hypertension — dominant in arterial/cardiac thrombi); (2) abnormal BLOOD FLOW — stasis (immobility, atrial fibrillation, aneurysm) or turbulence; (3) HYPERCOAGULABILITY (inherited — factor V Leiden, prothrombin mutation; acquired — malignancy, pregnancy, oestrogens, nephrotic syndrome, antiphospholipid syndrome). Arterial thrombi are platelet-rich/pale and occlusive; venous thrombi are fibrin/red-cell-rich.**',
    '**Thrombi may show LINES OF ZAHN (alternating pale platelet/fibrin and dark red-cell layers — indicating formation in FLOWING blood ante-mortem, distinguishing a true thrombus from a post-mortem clot). FATE of a thrombus: PROPAGATION (enlargement), EMBOLIZATION (detachment → travels), DISSOLUTION (fibrinolysis), or ORGANIZATION and RECANALIZATION (ingrowth of vessels re-establishing some flow).**',
    '**An EMBOLUS is a detached intravascular mass carried to a distant site; ~99% are THROMBOEMBOLI. VENOUS thromboemboli (usually from deep leg veins — DVT) travel to the lungs → PULMONARY EMBOLISM (a large saddle embolus can cause sudden death). ARTERIAL/cardiac emboli (from AF, MI mural thrombi, endocarditis) lodge in brain, limbs, gut, spleen, kidney. Non-thrombotic emboli: FAT (long-bone fractures), AIR (decompression sickness, procedures), and AMNIOTIC FLUID (labour — DIC, shock). Systemic paradoxical embolism can cross a septal defect.**',
    '**The take-home: hemostasis = vasoconstriction → platelet plug (vWF) → fibrin (coagulation) → fibrinolysis. THROMBOSIS via VIRCHOW\'S TRIAD: endothelial injury, abnormal flow (stasis/turbulence), hypercoagulability; LINES OF ZAHN = ante-mortem. Fate: propagate/embolize/dissolve/organize-recanalize. EMBOLISM: mostly thromboemboli — DVT → PULMONARY EMBOLISM; also fat, air, amniotic fluid.** Congestion is [[edema-hyperemia-congestion]]; downstream infarction/shock is [[infarction-shock]].',
  ],

  mechanism: {
    title: "Hemostasis (vasoconstriction→platelet plug→fibrin→fibrinolysis); thrombosis via Virchow's triad (endothelial injury/abnormal flow/hypercoagulability); lines of Zahn = ante-mortem; fate propagate/embolize/dissolve/organize; embolism (DVT→PE; fat/air/amniotic)",
    steps: [
      { id: 's1', label: 'Hemostasis: vasoconstriction → platelet plug (vWF) → fibrin (coagulation) → fibrinolysis', emphasis: 'key' },
      { id: 's2', label: "Virchow's triad: endothelial injury, abnormal flow (stasis/turbulence), hypercoagulability", emphasis: 'key' },
      { id: 's3', label: 'Lines of Zahn (platelet/fibrin + RBC layers) = formed in flowing blood (ante-mortem)', emphasis: 'key' },
      { id: 's4', label: 'Fate: propagation, embolization, dissolution, organization/recanalization', emphasis: 'key' },
      { id: 's5', label: 'Embolism: mostly thromboemboli — DVT → PULMONARY EMBOLISM; also fat/air/amniotic fluid', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'A thrombus with alternating pale and red laminations (lines of Zahn)', mechanism: 'Ante-mortem thrombus in flowing blood', significance: 'key' },
    { sign: 'DVT in an immobile patient developing sudden dyspnoea', mechanism: 'Pulmonary thromboembolism', significance: 'key' },
    { sign: 'Recurrent thrombosis from factor V Leiden or malignancy', mechanism: 'Hypercoagulability (Virchow)', significance: 'key' },
    { sign: 'Neurological signs after a long-bone fracture with petechiae', mechanism: 'Fat embolism', significance: 'supportive' },
    { sign: 'Sudden collapse with DIC during labour', mechanism: 'Amniotic fluid embolism', significance: 'supportive' },
  ],

  investigations: [
    { clue: "The three arms of Virchow's triad", meaning: 'Endothelial injury, abnormal flow, hypercoagulability' },
    { clue: 'The laminations indicating an ante-mortem thrombus', meaning: 'Lines of Zahn' },
    { clue: 'The commonest source of a pulmonary embolus', meaning: 'Deep vein thrombosis of the legs' },
    { clue: 'Emboli after long-bone fracture / during labour', meaning: 'Fat embolism / amniotic fluid embolism' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: "Thrombosis and embolism are leading causes of death and disability. Virchow's triad frames prevention and treatment — mobilisation and anticoagulation counter stasis and hypercoagulability, and treating atherosclerosis/hypertension counters endothelial injury. Recognising that DVT can embolise to cause life-threatening pulmonary embolism drives prophylaxis in immobile/post-operative patients, and knowing the non-thrombotic emboli (fat after fractures, amniotic fluid in labour, air) aids recognition of these emergencies. Lines of Zahn distinguish true ante-mortem thrombi from post-mortem clots. Congestion is [[edema-hyperemia-congestion]]; infarction/shock is [[infarction-shock]]." },
  ],

  mnemonics: [
    { hook: "Virchow's triad: \"Endothelial injury, Stasis/turbulence, Hypercoagulability\"", expansion: ['Arterial = platelet-rich/pale', 'Venous = fibrin/red'] },
    { hook: '"DVT → PE" (commonest embolism); fat (fracture), air, amniotic (labour)', expansion: ['Lines of Zahn = ante-mortem', 'Fate: propagate/embolize/dissolve/organize'] },
  ],

  traps: [
    {
      questionCategory: 'Thrombus vs post-mortem clot',
      wrongInstinct: 'Any clot found in a vessel at autopsy is a thrombus that caused disease',
      rightAnswer: 'A true (ante-mortem) THROMBUS forms in FLOWING blood and is firm, attached to the wall, and often shows LINES OF ZAHN (alternating platelet/fibrin and red-cell layers); a POST-MORTEM clot forms in stagnant blood after death, is gelatinous, not attached, and separates into a dark red "currant jelly" lower layer and a yellow "chicken fat" upper layer without lines of Zahn — so lines of Zahn and wall attachment indicate a genuine thrombus',
      why: 'Distinguishing a pathological ante-mortem thrombus from an artefactual post-mortem clot (using lines of Zahn and attachment) is essential in autopsy pathology to avoid attributing death to a clot that formed after death.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: "Which set of factors constitutes Virchow's triad for thrombosis?",
      options: [
        { id: 'a', text: 'Endothelial injury, abnormal blood flow (stasis/turbulence), and hypercoagulability' },
        { id: 'b', text: 'Fever, leukocytosis, and raised CRP' },
        { id: 'c', text: 'Hypertension, hyperlipidaemia, and smoking' },
        { id: 'd', text: 'Hydrostatic, oncotic, and lymphatic pressures' },
      ],
      answerId: 'a',
      explanation: "Virchow's triad — endothelial injury, abnormal blood flow (stasis or turbulence), and hypercoagulability — describes the three contributors to thrombosis; endothelial injury dominates in arterial/cardiac thrombi, while stasis and hypercoagulability dominate in venous thrombi.",
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A large embolus from a deep vein thrombosis of the leg most characteristically lodges in the:',
      options: [
        { id: 'a', text: 'Pulmonary arteries (pulmonary embolism)' },
        { id: 'b', text: 'Cerebral arteries' },
        { id: 'c', text: 'Coronary arteries' },
        { id: 'd', text: 'Renal arteries' },
      ],
      answerId: 'a',
      explanation: 'Venous thromboemboli (usually from deep leg veins) travel through the right heart into the pulmonary arteries, causing pulmonary embolism; a large saddle embolus can cause sudden death. Arterial/cardiac emboli instead lodge in systemic beds (brain, limbs, gut, kidney).',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default hemostasisThrombosisEmbolism;
