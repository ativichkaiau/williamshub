import type { Lecture } from '../../lib/types';

export const hhlAntiplatelets: Lecture = {
  id: 'hhl-antiplatelets',
  title: 'Antiplatelet Drugs',
  system: 'heme',
  source: 'L12 — Drugs Affecting Hemostasis',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L12 Hemostatic Drugs' },
    { kind: 'disease', label: 'Arterial thrombosis / ACS' },
    { kind: 'mechanism', label: 'Platelet activation blockade' },
    { kind: 'treatment', label: 'Aspirin · P2Y12 · GP IIb/IIIa' },
  ],

  highYield: [
    'Arterial (**white, platelet-rich**) thrombi are the antiplatelet target — contrast venous fibrin-rich clots that need anticoagulants ([[hhl-anticoagulants]]).',
    '**Aspirin** irreversibly acetylates **COX-1** → **↓ thromboxane A2** for the platelet lifespan (~7–10 days); low-dose, GI bleeding risk.',
    '**P2Y12 (ADP-receptor) inhibitors**: **clopidogrel** is a **prodrug needing CYP2C19** (poor metabolisers / PPIs blunt it), **prasugrel** is more potent but **contraindicated after stroke/TIA**, **ticagrelor** is reversible and direct-acting (dyspnea). **Aspirin + a P2Y12 = DAPT** after ACS/stenting.',
    '**GP IIb/IIIa inhibitors** (abciximab, eptifibatide, tirofiban) block the **final common aggregation step** (fibrinogen cross-linking) — IV, for high-risk PCI. **Dipyridamole** raises cAMP (secondary stroke prevention with aspirin).',
  ],

  mechanism: {
    title: 'Each drug blocks one step of platelet activation → aggregation',
    steps: [
      { id: 's1', label: 'Endothelial injury → platelet adhesion via vWF/GPIb' },
      { id: 's2', label: 'Activation releases TXA2 (aspirin blocks) and ADP (P2Y12 inhibitors block)', emphasis: 'key' },
      { id: 's3', label: 'GP IIb/IIIa activates → fibrinogen cross-links platelets (abciximab blocks)', emphasis: 'key' },
      { id: 's4', label: 'Platelet-rich (white) thrombus → arterial occlusion (ACS/stroke)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Prolonged bleeding time / PFA closure with normal PT & aPTT', mechanism: 'Qualitative platelet defect from antiplatelet drug — coagulation tests are unaffected', significance: 'key' },
    { sign: 'Poor clopidogrel response in a CYP2C19 loss-of-function patient', mechanism: 'The prodrug is not activated to its metabolite', significance: 'key' },
    { sign: 'Dyspnea on ticagrelor', mechanism: 'Adenosine-mediated effect (reversible P2Y12 blockade)', significance: 'supportive' },
    { sign: 'Acute thrombocytopenia after a GP IIb/IIIa inhibitor', mechanism: 'Immune-mediated platelet destruction', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Normal platelet count but prolonged PFA/bleeding time', meaning: 'Antiplatelet effect (aspirin or P2Y12) — not a coagulation-factor problem' },
    { clue: 'Recurrent event despite clopidogrel', meaning: 'CYP2C19 loss-of-function or PPI interaction → switch to prasugrel/ticagrelor' },
    { clue: 'ACS with planned coronary stent', meaning: 'Dual antiplatelet therapy (aspirin + a P2Y12 inhibitor)' },
    { clue: 'Recent GI bleed on DAPT', meaning: 'Weigh bleeding risk against stent thrombosis before stopping therapy' },
  ],

  treatment: [
    { logic: 'Aspirin for lifelong secondary prevention; DAPT after ACS/PCI for a defined duration', detail: 'The P2Y12 partner is added on top of aspirin, then usually de-escalated to aspirin alone.' },
    { logic: 'Choose the P2Y12 inhibitor by ischaemic vs bleeding risk', detail: 'Ticagrelor/prasugrel are more potent (avoid prasugrel after stroke/TIA); clopidogrel when bleeding risk is higher.' },
    { logic: 'Reserve IV GP IIb/IIIa inhibitors for high-risk PCI; hold antiplatelets before surgery per risk', detail: 'Aspirin effect persists ~7–10 days because inhibition is irreversible.' },
  ],

  mnemonics: [
    { hook: 'Aspirin–COX, Clopidogrel–ADP, GP IIb/IIIa–the final grip', expansion: ['Aspirin → irreversible COX-1 → ↓ thromboxane A2', 'Clopidogrel/prasugrel/ticagrelor → block the P2Y12 ADP receptor', 'GP IIb/IIIa inhibitors → block fibrinogen cross-linking (final common pathway)'] },
    { hook: 'Prasugrel + prior stroke = bleed', expansion: ['Prasugrel is contraindicated with prior stroke/TIA', 'It is potent and raises intracranial bleeding risk', 'Prefer clopidogrel or ticagrelor in that setting'] },
  ],

  traps: [
    {
      questionCategory: 'Clopidogrel non-response',
      wrongInstinct: 'Assume the patient is simply non-adherent',
      rightAnswer: 'Clopidogrel is a prodrug — CYP2C19 loss-of-function or a strong PPI can blunt activation',
      why: 'Genetic poor metabolisers (and omeprazole) reduce the active metabolite; prasugrel or ticagrelor bypass this.',
    },
    {
      questionCategory: 'Bleeding with normal coagulation screen',
      wrongInstinct: 'Normal PT, aPTT and platelet count exclude a drug cause',
      rightAnswer: 'Antiplatelet drugs cause a qualitative defect that PT/aPTT do not detect',
      why: 'Aspirin/P2Y12 effects show up as a prolonged bleeding time / PFA closure, not on the clotting screen.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'What is the mechanism of aspirin as an antiplatelet agent?',
      options: [
        { id: 'a', text: 'Reversible blockade of the P2Y12 ADP receptor' },
        { id: 'b', text: 'Irreversible inhibition of COX-1, reducing thromboxane A2' },
        { id: 'c', text: 'Blockade of GP IIb/IIIa receptors' },
        { id: 'd', text: 'Potentiation of antithrombin' },
      ],
      answerId: 'b',
      explanation: 'Aspirin irreversibly acetylates COX-1, lowering thromboxane A2 synthesis for the ~7–10 day lifespan of the platelet.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient with a prior transient ischaemic attack needs a P2Y12 inhibitor after an ACS. Which agent is best avoided?',
      options: [
        { id: 'a', text: 'Clopidogrel' },
        { id: 'b', text: 'Ticagrelor' },
        { id: 'c', text: 'Prasugrel' },
        { id: 'd', text: 'Dipyridamole' },
      ],
      answerId: 'c',
      explanation: 'Prasugrel is contraindicated in patients with prior stroke or TIA because of an unacceptable intracranial bleeding risk.',
      tests: 'treatment',
    },
  ],
};

export default hhlAntiplatelets;
