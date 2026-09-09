import type { Lecture } from '../../lib/types';

export const ghpOxygenTherapyArtificialRespiration: Lecture = {
  id: 'ghp-oxygen-therapy-artificial-respiration',
  title: 'Oxygen Therapy & Artificial Respiration',
  system: 'respiratory',
  source: 'Ch 42 — Respiratory Insufficiency — Pathophysiology & Oxygen Therapy',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'Ch 42 Respiratory Insufficiency' },
    { kind: 'mechanism', label: 'When oxygen helps' },
    { kind: 'exam', label: 'Positive pressure trade-offs' },
  ],

  highYield: [
    '**Oxygen only helps when the problem is a low alveolar-to-arterial transfer of oxygen — match the therapy to the type of hypoxia.** It works well in **hypoxic** hypoxia from hypoventilation, diffusion impairment or V/Q mismatch. It helps **little** in true **shunt**, because that blood never meets alveolar gas. It does almost nothing for **anaemic** hypoxia (content problem), **stagnant** hypoxia (flow problem), or **histotoxic** hypoxia (utilisation problem).',
    '**Even where oxygen cannot fix the mechanism, dissolved oxygen can still buy something.** Raising PaO₂ to several hundred mmHg adds roughly **0.003 mL/dL per mmHg** dissolved — normally trivial, but enough to matter in **carbon monoxide poisoning** or severe anaemia while the underlying problem is corrected. It is a holding measure, not a correction.',
    '**Carbon monoxide is treated by mass action, and the monitors will mislead you.** High **FiO₂** displaces CO from haemoglobin and shortens carboxyhaemoglobin half-life from several hours to under an hour; hyperbaric oxygen shortens it further. **PaO₂ and pulse oximetry both read normal**, so treatment must be driven by co-oximetry and exposure history rather than the usual numbers.',
    '**Oxygen is a drug with real toxicity, and the two harms differ by tempo.** Prolonged high FiO₂ generates **reactive oxygen species** that injure the alveolar membrane, causing exudation and eventually fibrosis. High FiO₂ also washes out alveolar nitrogen, so poorly ventilated units collapse — **absorption atelectasis**. Both argue for the lowest FiO₂ meeting a sensible target rather than maximal oxygen by reflex.',
    '**In chronic CO₂ retainers, give controlled oxygen to a target — do not withhold it.** Rising CO₂ on oxygen is mostly **worsened V/Q matching** from released hypoxic vasoconstriction, plus the **Haldane** effect and some reduction in drive. Hypoxia kills faster than hypercapnia, so the answer is a **target saturation** (commonly 88–92%), not oxygen deprivation, following the control logic of [[ghp-chemoreceptor-control]].',
    '**Positive-pressure ventilation reverses the normal pressure sign and that has a haemodynamic cost.** Spontaneous breathing generates **negative** intrathoracic pressure that aids venous return; positive pressure raises intrathoracic pressure, **reducing venous return and preload**, so cardiac output can fall — especially in a hypovolaemic patient. **PEEP** recruits collapsed alveoli and improves shunt, but amplifies that same penalty and risks barotrauma.',
  ],

  mechanism: {
    title: 'Match the intervention to the failing step',
    steps: [
      { id: 's1', label: 'Identify which type of hypoxia is present', emphasis: 'key' },
      { id: 's2', label: 'Transfer defect (hypoventilation, diffusion, V/Q) → oxygen effective', emphasis: 'key' },
      { id: 's3', label: 'True shunt → oxygen largely ineffective; recruit the lung instead', emphasis: 'key' },
      { id: 's4', label: 'Content, flow or utilisation failure → oxygen near-useless; treat the cause' },
      { id: 's5', label: 'Titrate FiO₂ to a target to avoid toxicity and absorption atelectasis' },
      { id: 's6', label: 'Positive pressure raises intrathoracic pressure → preload and output fall', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Hypoxaemia refractory to high-flow oxygen', mechanism: 'True shunt — blood bypasses ventilated alveoli', significance: 'key' },
    { sign: 'Normal saturation and PaO₂ with tissue hypoxia after smoke exposure', mechanism: 'Carbon monoxide reduces content and left-shifts the curve', significance: 'key' },
    { sign: 'Falling blood pressure after starting positive-pressure ventilation', mechanism: 'Raised intrathoracic pressure reducing venous return and preload', significance: 'key' },
    { sign: 'New atelectasis after a period of very high FiO₂', mechanism: 'Nitrogen washout causing absorption collapse of low-V/Q units', significance: 'supportive' },
    { sign: 'Rising PaCO₂ after uncontrolled oxygen in a chronic retainer', mechanism: 'Worsened V/Q matching, Haldane effect and reduced drive', significance: 'key' },
  ],

  investigations: [
    { clue: 'PaO₂ barely rising as FiO₂ approaches 1.0', meaning: 'Large shunt fraction — recruitment rather than more oxygen' },
    { clue: 'Raised carboxyhaemoglobin with normal oximetry', meaning: 'Carbon monoxide poisoning requiring high-flow oxygen' },
    { clue: 'Rising PaCO₂ with falling pH despite adequate saturation', meaning: 'Ventilatory failure needing support, not further oxygen' },
    { clue: 'Improving oxygenation with PEEP', meaning: 'Recruitable collapsed alveoli contributing to shunt' },
    { clue: 'Hypotension worsening as PEEP is increased', meaning: 'Preload reduction from raised intrathoracic pressure' },
  ],

  treatment: [
    {
      logic: 'Ask what oxygen can physically fix before escalating it',
      detail: 'Oxygen corrects a **transfer** problem. It cannot add haemoglobin, cannot restore flow, and cannot make cells use oxygen — so **anaemic**, **stagnant** and **histotoxic** hypoxia need transfusion, circulatory support and antidote respectively, described alongside [[ghp-respiratory-insufficiency-hypoxia]].',
    },
    {
      logic: 'Use the lowest FiO₂ that meets the target, and add PEEP for shunt',
      detail: 'High FiO₂ causes **oxygen toxicity** and **absorption atelectasis**, so titrate to a saturation target. Where shunt dominates, **PEEP** recruits alveoli and does what extra FiO₂ cannot — accepting its cost to preload and its barotrauma risk.',
    },
  ],

  mnemonics: [
    { hook: 'Oxygen fixes transfer, not content, flow or use', expansion: ['Hypoxic hypoxia → responds', 'Anaemic → transfuse', 'Stagnant → support circulation', 'Histotoxic → antidote'] },
    { hook: 'Target, do not withhold', expansion: ['Retainers get controlled O₂ to ~88–92%', 'Hypoxia kills faster than hypercapnia', 'Watch CO₂ and support ventilation if it climbs'] },
  ],

  traps: [
    {
      questionCategory: 'Oxygen in the chronic CO₂ retainer',
      wrongInstinct: 'Withhold oxygen because it will abolish hypoxic drive',
      rightAnswer: 'Give controlled oxygen to a target saturation and monitor CO₂',
      why: 'The rise is largely V/Q and Haldane, not just drive — and hypoxia kills faster than hypercapnia',
    },
    {
      questionCategory: 'Escalating FiO₂ in refractory hypoxaemia',
      wrongInstinct: 'If saturation is low, more oxygen must be the answer',
      rightAnswer: 'In true shunt, extra oxygen achieves little; recruiting the lung does',
      why: 'Shunted blood never contacts alveolar gas, and normal units are already saturated',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A hypovolaemic patient becomes hypotensive shortly after intubation and positive-pressure ventilation. What is the mechanism?',
      options: [
        { id: 'a', text: 'Oxygen toxicity reducing myocardial contractility' },
        { id: 'b', text: 'Raised intrathoracic pressure reducing venous return and preload' },
        { id: 'c', text: 'Hypocapnia causing systemic vasodilation' },
        { id: 'd', text: 'Absorption atelectasis reducing cardiac output' },
      ],
      answerId: 'b',
      explanation: 'Spontaneous breathing generates negative intrathoracic pressure that assists venous return. Positive pressure reverses that sign, lowering the pressure gradient for venous return, so preload and cardiac output fall — most sharply when the patient is already volume depleted.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'For which type of hypoxia is supplemental oxygen least effective?',
      options: [
        { id: 'a', text: 'Hypoxic hypoxia from hypoventilation' },
        { id: 'b', text: 'Hypoxic hypoxia from V/Q mismatch' },
        { id: 'c', text: 'Histotoxic hypoxia' },
        { id: 'd', text: 'Hypoxic hypoxia from diffusion impairment' },
      ],
      answerId: 'c',
      explanation: 'In histotoxic hypoxia, as with cyanide, delivery is adequate but cells cannot use oxygen — oxidative phosphorylation is blocked. Raising oxygen delivery does not address the defect, so an antidote is required. The other three are transfer problems that oxygen improves.',
      tests: 'treatment',
    },
    {
      id: 'q3',
      stem: 'Why does prolonged very high inspired oxygen cause atelectasis?',
      options: [
        { id: 'a', text: 'It stiffens surfactant' },
        { id: 'b', text: 'Nitrogen is washed out, so poorly ventilated alveoli have their gas absorbed and collapse' },
        { id: 'c', text: 'It directly constricts small airways' },
        { id: 'd', text: 'It increases pulmonary capillary pressure' },
      ],
      answerId: 'b',
      explanation: 'Nitrogen is poorly soluble and normally splints alveoli open. Washing it out with high FiO₂ leaves gas that is rapidly absorbed into blood, so units with low V/Q collapse — absorption atelectasis, one reason to titrate rather than maximise oxygen.',
      tests: 'mechanism',
    },
  ],
};

export default ghpOxygenTherapyArtificialRespiration;
