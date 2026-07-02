import type { Lecture } from '../../lib/types';

export const brainEnergyMetabolism: Lecture = {
  id: 'brain-energy-metabolism',
  title: 'Brain Energy Metabolism & Blood–Brain Barrier',
  system: 'neuro',
  source: 'L19 — Brain Metabolism',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L19 Brain Metabolism' },
    { kind: 'mechanism', label: 'Glucose, O₂ & BBB' },
    { kind: 'exam', label: 'Hypoglycaemia, ischaemia, autoregulation' },
  ],

  highYield: [
    '**The brain is metabolically extravagant: ~2% of body weight but ~20% of resting OXYGEN and GLUCOSE use. It relies almost entirely on GLUCOSE (via aerobic oxidation) and has NEGLIGIBLE energy stores, so it depends on a continuous blood supply.** Interruption of flow → loss of consciousness in seconds and irreversible damage within minutes.',
    '**Because there is no reserve, the brain has protective mechanisms: CEREBRAL AUTOREGULATION keeps blood flow roughly constant across a range of mean arterial pressures (~60–160 mmHg), and flow is coupled to local activity (neurovascular coupling).** Flow is powerfully increased by a rising CO₂/falling pH (hypercapnia → vasodilation) and decreased by hypocapnia — the basis of hyperventilation to acutely lower intracranial pressure.',
    '**Two substrates are non-negotiable. HYPOGLYCAEMIA rapidly causes confusion, seizures and coma (neuroglycopenia) — always check glucose in altered consciousness. HYPOXIA/ISCHAEMIA triggers an energy failure cascade: ATP loss → ion-pump failure → depolarisation → glutamate EXCITOTOXICITY (Ca²⁺ influx) → cell death — the mechanism of ischaemic stroke and hypoxic brain injury.** In prolonged starvation the brain can adapt to use KETONE bodies.',
    '**The BLOOD–BRAIN BARRIER (BBB) — tight junctions between capillary endothelial cells, supported by astrocyte end-feet and pericytes — protects the brain by restricting entry to small lipid-soluble molecules (O₂, CO₂) and carrier-mediated substrates (glucose via GLUT1), excluding many toxins/drugs/pathogens.** It is deficient at the circumventricular organs (to sense/secrete) and breaks down in inflammation/tumours (causing oedema and contrast enhancement).',
    '**The take-home: brain = high, continuous demand for O₂ and GLUCOSE, no stores; autoregulation + CO₂-reactivity protect flow; hypoglycaemia and ischaemia (excitotoxicity) rapidly injure it; the BBB (tight junctions) gates entry.** Ischaemic stroke pathophysiology and raised ICP are in HNS-2 ([[cortex-and-stroke]], [[raised-icp-herniation]]); the blood supply itself is in [[cerebral-blood-supply]].',
  ],

  mechanism: {
    title: 'High O₂/glucose demand, no stores → autoregulation + CO₂ reactivity; hypoglycaemia/ischaemia (excitotoxicity) injure; BBB gates entry',
    steps: [
      { id: 's1', label: 'Brain uses ~20% of O₂/glucose; relies on glucose; negligible stores', emphasis: 'key' },
      { id: 's2', label: 'Cerebral autoregulation keeps flow constant (~MAP 60–160 mmHg)', emphasis: 'key' },
      { id: 's3', label: '↑CO₂ → vasodilation (↑flow); ↓CO₂ (hyperventilation) → ↓flow/ICP' },
      { id: 's4', label: 'Hypoglycaemia → neuroglycopenia; ischaemia → glutamate EXCITOTOXICITY', emphasis: 'danger' },
      { id: 's5', label: 'Blood–brain barrier (tight junctions + astrocytes) gates entry; GLUT1 for glucose', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Confusion, seizures, coma reversed by glucose', mechanism: 'Neuroglycopenia (hypoglycaemia — brain relies on glucose)', significance: 'key' },
    { sign: 'Loss of consciousness within seconds of arrested cerebral flow', mechanism: 'No energy stores — immediate dependence on blood supply', significance: 'key' },
    { sign: 'Neuronal death spreading from an ischaemic core', mechanism: 'Glutamate excitotoxicity (Ca²⁺ influx) after energy failure', significance: 'key' },
    { sign: 'Falling ICP with acute hyperventilation', mechanism: 'Hypocapnia → cerebral vasoconstriction (CO₂ reactivity)', significance: 'supportive' },
    { sign: 'Contrast enhancement around a tumour/abscess', mechanism: 'Blood–brain barrier breakdown', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The brain\'s obligatory metabolic fuel', meaning: 'Glucose (aerobically; ketones in prolonged starvation)' },
    { clue: 'The mechanism keeping cerebral flow constant across pressures', meaning: 'Cerebral autoregulation' },
    { clue: 'The gas that potently dilates cerebral vessels', meaning: 'CO₂ (hypercapnia increases flow)' },
    { clue: 'The barrier formed by capillary tight junctions and astrocytes', meaning: 'The blood–brain barrier' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The brain\'s lack of energy reserve makes glucose and oxygen supply life-or-death — hence "check the glucose" in any altered consciousness, and the seconds-to-minutes window in ischaemia (excitotoxicity), the pathophysiology of stroke ([[cortex-and-stroke]]). Autoregulation and CO₂-reactivity guide ICP management ([[raised-icp-herniation]]); the BBB determines drug delivery and breaks down in oedema. The delivering circulation is in [[cerebral-blood-supply]]; glucose metabolism links to EHP ([[blood-glucose-homeostasis]]).' },
  ],

  mnemonics: [
    { hook: 'Brain fuel: "Glucose + O₂, no stores" → seconds to fail', expansion: ['~20% of body O₂/glucose', 'Ketones only in starvation'] },
    { hook: 'CO₂: "up → vessels open (↑flow); down → vessels close (↓ICP)"', expansion: ['Autoregulation ~60–160 mmHg', 'Ischaemia → excitotoxicity'] },
  ],

  traps: [
    {
      questionCategory: 'Effect of CO₂ on cerebral blood flow',
      wrongInstinct: 'Hyperventilation raises oxygen so it must increase cerebral blood flow',
      rightAnswer: 'Cerebral vessels respond to CO₂: HYPERventilation lowers CO₂ (hypocapnia), causing cerebral VASOCONSTRICTION and REDUCED flow — this is deliberately used to acutely lower raised intracranial pressure; conversely a rising CO₂ (hypercapnia) dilates vessels and increases flow',
      why: 'The cerebral vasculature is governed by CO₂/pH, not by oxygen delivery from breathing faster; getting this backwards inverts the rationale for hyperventilation in acute ICP management.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The brain\'s near-total dependence on a continuous glucose and oxygen supply is chiefly explained by:',
      options: [
        { id: 'a', text: 'Its large glycogen stores' },
        { id: 'b', text: 'Its very high metabolic rate combined with negligible energy stores' },
        { id: 'c', text: 'Its ability to use fatty acids directly' },
        { id: 'd', text: 'Anaerobic metabolism being sufficient' },
      ],
      answerId: 'b',
      explanation: 'The brain consumes ~20% of the body\'s oxygen and glucose yet stores almost no energy substrate, so any interruption of supply causes symptoms within seconds and irreversible injury within minutes. It cannot use fatty acids directly (though it can adapt to ketones in prolonged starvation).',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Acute hyperventilation lowers intracranial pressure because reducing arterial CO₂:',
      options: [
        { id: 'a', text: 'Dilates cerebral vessels and increases blood volume' },
        { id: 'b', text: 'Constricts cerebral vessels, reducing cerebral blood volume' },
        { id: 'c', text: 'Increases cerebrospinal fluid production' },
        { id: 'd', text: 'Has no effect on cerebral vessels' },
      ],
      answerId: 'b',
      explanation: 'Cerebral vessels are exquisitely CO₂-reactive: lowering CO₂ by hyperventilation causes vasoconstriction, reducing cerebral blood volume and thus intracranial pressure — a temporary emergency measure. A rising CO₂ conversely dilates the vessels and raises flow and pressure.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default brainEnergyMetabolism;
