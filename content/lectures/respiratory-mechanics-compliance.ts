import type { Lecture } from '../../lib/types';

export const respiratoryMechanicsCompliance: Lecture = {
  id: 'respiratory-mechanics-compliance',
  title: 'Respiratory Mechanics: Pressures, Compliance & Resistance',
  system: 'respiratory',
  source: 'L4 — Breathing & Ventilation',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L4 Breathing & Ventilation' },
    { kind: 'mechanism', label: 'Pressure gradients' },
    { kind: 'exam', label: 'Compliance · surface tension' },
  ],

  highYield: [
    '**Air flows down pressure gradients created by changing lung volume.** **Inspiration is active:** the **diaphragm (phrenic nerve, C3–5) + external intercostals** contract → thorax expands → **intrapleural pressure becomes more negative → alveolar pressure falls below atmospheric → air flows in.** **Quiet expiration is passive** (elastic recoil).',
    '**Two key pressures.** **Intrapleural pressure is normally NEGATIVE (~−5 cmH₂O)** — it keeps the lungs expanded against their elastic recoil. **Transpulmonary pressure = alveolar − intrapleural**; it is the distending pressure holding alveoli open. **Loss of the negative intrapleural pressure (pneumothorax) → the lung recoils and collapses.**',
    '**Compliance = change in volume per change in pressure (ΔV/ΔP) = how easily the lung stretches.** **High compliance = easy to inflate** (e.g. **emphysema** — lost elastic tissue — but hard to *exhale*). **Low compliance = stiff, hard to inflate** (e.g. **pulmonary fibrosis, surfactant deficiency, oedema**). Compliance depends on elastic fibres AND surface tension.',
    '**Surface tension of the alveolar fluid opposes inflation** and tends to collapse alveoli. **Surfactant lowers it** → increases compliance and prevents collapse. By **Laplace\'s law (P = 2T/r)**, small alveoli would collapse into large ones without surfactant — which stabilises them ([[alveoli-pneumocytes-respiratory-membrane]]).',
    '**Airway resistance** opposes flow (mostly in **medium bronchi**; highest where cross-sectional area is least). **Bronchoconstriction (asthma) raises resistance** and increases the work of breathing. **Total work of breathing = elastic work (compliance/surface tension) + resistive work (airway + tissue resistance)**; it rises in both restrictive and obstructive disease.',
  ],

  mechanism: {
    title: 'Make pressure → overcome recoil, tension, resistance',
    steps: [
      { id: 's1', label: 'Inspiration active (diaphragm/external intercostals); expiration passive', emphasis: 'key' },
      { id: 's2', label: 'Intrapleural pressure negative → holds lungs open', emphasis: 'key' },
      { id: 's3', label: 'Compliance = ΔV/ΔP: ↑ in emphysema, ↓ in fibrosis', emphasis: 'key' },
      { id: 's4', label: 'Surface tension opposes inflation; surfactant lowers it', emphasis: 'key' },
      { id: 's5', label: 'Airway resistance (asthma ↑) + elastic work = work of breathing' },
    ],
  },

  examFindings: [
    { sign: 'Intrapleural pressure ~−5 cmH₂O', mechanism: 'Keeps lungs expanded against elastic recoil', significance: 'key' },
    { sign: 'Lung collapse when air enters the pleural space', mechanism: 'Pneumothorax — lost negative intrapleural pressure', significance: 'key' },
    { sign: 'Increased compliance in emphysema', mechanism: 'Loss of elastic tissue (easy to inflate, hard to exhale)', significance: 'key' },
    { sign: 'Decreased compliance (stiff lungs) in fibrosis', mechanism: 'Reduced elasticity → hard to inflate', significance: 'key' },
    { sign: 'Raised airway resistance and work of breathing in asthma', mechanism: 'Bronchoconstriction narrows airways', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Distending pressure holding alveoli open', meaning: 'Transpulmonary pressure (alveolar − intrapleural)' },
    { clue: 'ΔV/ΔP of the lung', meaning: 'Compliance' },
    { clue: 'Force opposing inflation, reduced by surfactant', meaning: 'Alveolar surface tension' },
    { clue: 'Consequence of air entering the pleural space', meaning: 'Pneumothorax → lung collapse' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Mechanics explain pneumothorax, emphysema vs fibrosis (compliance), asthma (resistance), and ventilator physiology (compliance/pressures). Surfactant/surface tension links to [[alveoli-pneumocytes-respiratory-membrane]]; the volumes moved: [[lung-volumes-ventilation]].' },
  ],

  mnemonics: [
    { hook: 'Compliance: emphysema HIGH (baggy), fibrosis LOW (stiff)', expansion: ['Compliance = ΔV/ΔP = stretchiness'] },
    { hook: 'Intrapleural pressure is NEGATIVE → lose it (pneumothorax) → collapse', expansion: ['Transpulmonary = alveolar − pleural'] },
  ],

  traps: [
    {
      questionCategory: 'Compliance in emphysema vs fibrosis',
      wrongInstinct: 'Emphysema makes the lungs stiff and hard to inflate (low compliance)',
      rightAnswer: 'Emphysema INCREASES compliance (loss of elastic recoil → easy to inflate but hard to EXHALE); fibrosis DECREASES compliance (stiff, hard to inflate)',
      why: 'Emphysema destroys elastic tissue → floppy, high-compliance lungs with air trapping; fibrosis adds stiff collagen → low compliance.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The normally negative intrapleural pressure is essential because it:',
      options: [
        { id: 'a', text: 'Collapses the alveoli' },
        { id: 'b', text: 'Keeps the lungs expanded against their elastic recoil' },
        { id: 'c', text: 'Drives blood through the pulmonary circulation' },
        { id: 'd', text: 'Produces surfactant' },
      ],
      answerId: 'b',
      explanation: 'The negative intrapleural pressure counteracts the lung\'s elastic recoil, holding the alveoli open. If air enters the pleural space (pneumothorax), this pressure is lost and the lung collapses.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Pulmonary fibrosis affects lung compliance by:',
      options: [
        { id: 'a', text: 'Increasing compliance (easier to inflate)' },
        { id: 'b', text: 'Decreasing compliance (stiffer, harder to inflate)' },
        { id: 'c', text: 'Having no effect on compliance' },
        { id: 'd', text: 'Eliminating surface tension' },
      ],
      answerId: 'b',
      explanation: 'Fibrosis deposits stiff collagen, reducing lung compliance (ΔV/ΔP) so more pressure is needed to inflate — a restrictive picture. Emphysema does the opposite (raises compliance).',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default respiratoryMechanicsCompliance;
