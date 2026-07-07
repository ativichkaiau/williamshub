import type { Lecture } from '../../lib/types';

export const cellInjuryMechanisms: Lecture = {
  id: 'cell-injury-mechanisms',
  title: 'Cell Injury: Causes & Mechanisms',
  system: 'pathology',
  source: 'L2 — Cell Injury & Cell Death',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pathology' },
    { kind: 'lecture', label: 'L2 Cell injury' },
    { kind: 'mechanism', label: 'Reversible vs irreversible; ATP/ROS/Ca' },
    { kind: 'exam', label: 'Hypoxia; reperfusion; point of no return' },
  ],

  highYield: [
    'When a cell cannot maintain HOMEOSTASIS under stress it undergoes ADAPTATION → REVERSIBLE injury → (if severe/persistent) IRREVERSIBLE injury and DEATH. Causes of injury: HYPOXIA/ISCHAEMIA (commonest — ischaemia is worst as it cuts both O2 AND nutrients), physical agents, chemicals/drugs/toxins, infections, immunologic reactions, genetic defects, and nutritional imbalances. Outcome depends on the type, duration and severity of the insult and the cell\'s state.',
    'Key biochemical MECHANISMS: (1) ATP DEPLETION (from ischaemia/mitochondrial damage) → failure of the Na⁺/K⁺ pump (cell swelling), anaerobic glycolysis → lactic acid (↓pH), ribosome detachment. (2) MITOCHONDRIAL damage → less ATP + release of cytochrome c (apoptosis). (3) increased cytosolic CALCIUM → activates phospholipases, proteases, endonucleases, ATPases. (4) reactive OXYGEN SPECIES (free radicals) → lipid peroxidation, protein/DNA damage. (5) MEMBRANE damage (plasma and lysosomal) — a central event in irreversibility.',
    'REVERSIBLE injury shows CELLULAR SWELLING (hydropic change — failed ion pumps) and FATTY CHANGE, with ultrastructural blebbing, mitochondrial swelling and ribosome detachment — the cell can recover if the stimulus is removed. IRREVERSIBLE injury is marked by SEVERE MITOCHONDRIAL dysfunction, profound MEMBRANE damage (with massive Ca²⁺ influx and leakage of enzymes like troponin/CK/transaminases into blood), and lysosomal rupture — the "point of no return" → necrosis.',
    'ISCHAEMIA-REPERFUSION INJURY is a paradox: restoring blood flow to ischaemic tissue can WORSEN damage through a burst of reactive oxygen species, calcium overload, and inflammation/complement — relevant to myocardial infarction and stroke reperfusion. FREE-RADICAL injury (from radiation, chemicals, reperfusion, inflammation) is countered by antioxidants (SOD, catalase, glutathione, vitamins E/C).',
    '**The take-home: stress → adaptation → REVERSIBLE (cell swelling, fatty change) → IRREVERSIBLE (mitochondrial failure + membrane damage → enzyme leakage) → death. Mechanisms: ATP depletion, mitochondrial damage, ↑cytosolic CALCIUM, reactive OXYGEN species, MEMBRANE injury. Ischaemia is the commonest cause; REPERFUSION can worsen injury.** Adaptations precede injury ([[cellular-adaptations-growth]]); necrosis patterns are [[necrosis-patterns]]; regulated death is [[apoptosis-cell-death]].',
  ],

  mechanism: {
    title: 'Stress → adaptation → reversible (swelling/fatty change) → irreversible (mitochondrial failure + membrane damage → enzyme leak) → death; mechanisms: ATP depletion, mitochondria, ↑Ca, ROS, membrane; ischaemia commonest; reperfusion worsens',
    steps: [
      { id: 's1', label: 'Causes: hypoxia/ISCHAEMIA (commonest), toxins, physical, infection, immune, genetic, nutrition', emphasis: 'key' },
      { id: 's2', label: 'ATP depletion → Na/K pump fails (swelling), anaerobic glycolysis (↓pH)', emphasis: 'key' },
      { id: 's3', label: '↑cytosolic Ca²⁺ + reactive oxygen species (ROS) → enzyme activation, lipid/DNA damage', emphasis: 'key' },
      { id: 's4', label: 'Reversible = cell swelling/fatty change; irreversible = mitochondrial + MEMBRANE damage (enzyme leak)', emphasis: 'danger' },
      { id: 's5', label: 'Ischaemia-reperfusion can WORSEN injury (ROS burst, Ca overload, inflammation)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Cellular (hydropic) swelling with cytoplasmic vacuoles', mechanism: 'Reversible injury (failed ion pumps)', significance: 'key' },
    { sign: 'Fatty change (steatosis), e.g. in liver', mechanism: 'Reversible injury', significance: 'key' },
    { sign: 'Rising serum troponin/CK/transaminases', mechanism: 'Irreversible membrane damage → enzyme leakage', significance: 'key' },
    { sign: 'Worsening tissue damage after restoring blood flow', mechanism: 'Ischaemia-reperfusion injury (ROS)', significance: 'supportive' },
    { sign: 'Lipid peroxidation and DNA damage from radiation', mechanism: 'Free-radical (ROS) injury', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The commonest cause of cell injury', meaning: 'Hypoxia/ischaemia' },
    { clue: 'The early reversible morphologic change', meaning: 'Cellular swelling (hydropic change)' },
    { clue: 'The ion whose cytosolic rise activates degradative enzymes', meaning: 'Calcium' },
    { clue: 'The hallmark of irreversibility', meaning: 'Severe membrane (and mitochondrial) damage' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Cell injury is the basis of most disease. Recognising the sequence (adaptation → reversible → irreversible) and mechanisms (ATP depletion, mitochondrial damage, calcium overload, reactive oxygen species, membrane injury) explains clinical markers — enzyme leakage (troponin, transaminases) signals irreversible membrane damage — and interventions: restoring perfusion early salvages reversibly injured cells, while ischaemia-reperfusion injury and free radicals are targets for protection. Cellular adaptations are [[cellular-adaptations-growth]]; the morphology of cell death is [[necrosis-patterns]] and [[apoptosis-cell-death]].' },
  ],

  mnemonics: [
    { hook: 'Injury mechanisms: "ATP, Mitochondria, Calcium, ROS, Membrane"', expansion: ['Ischaemia = commonest', 'Reperfusion can worsen'] },
    { hook: '"Reversible = swelling/fatty; Irreversible = membrane damage (enzyme leak)"', expansion: ['Enzyme leak = troponin/CK/AST', 'Point of no return'] },
  ],

  traps: [
    {
      questionCategory: 'Ischaemia-reperfusion injury',
      wrongInstinct: 'Restoring blood flow to ischaemic tissue can only ever reduce injury',
      rightAnswer: 'Although early reperfusion salvages REVERSIBLY injured cells, restoring flow to tissue that has been ischaemic can paradoxically WORSEN damage — ISCHAEMIA-REPERFUSION INJURY — via a burst of reactive OXYGEN species, CALCIUM overload, and activation of inflammation/complement in cells that were already stressed; this contributes to injury in myocardial infarction and stroke after reperfusion',
      why: 'The counter-intuitive reality that reperfusion can add injury (through ROS and calcium overload) explains part of the damage after revascularisation and is a distinct exam concept from simple ischaemic death.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which change marks the transition from reversible to irreversible cell injury?',
      options: [
        { id: 'a', text: 'Cellular swelling from failed ion pumps' },
        { id: 'b', text: 'Severe mitochondrial dysfunction and profound plasma-membrane damage' },
        { id: 'c', text: 'Detachment of ribosomes' },
        { id: 'd', text: 'Fatty change' },
      ],
      answerId: 'b',
      explanation: 'Reversible injury features swelling and fatty change; the "point of no return" is severe mitochondrial dysfunction with profound membrane damage (massive calcium influx, lysosomal rupture, and leakage of cellular enzymes into the blood), leading to necrosis.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Rising serum troponin after myocardial ischaemia is explained by:',
      options: [
        { id: 'a', text: 'Reversible cellular swelling' },
        { id: 'b', text: 'Irreversible membrane damage allowing intracellular enzymes/proteins to leak into blood' },
        { id: 'c', text: 'Increased ATP production' },
        { id: 'd', text: 'Adaptation by hypertrophy' },
      ],
      answerId: 'b',
      explanation: 'Leakage of intracellular proteins/enzymes (troponin, CK, transaminases) into the blood reflects loss of plasma-membrane integrity — a marker of irreversible injury/necrosis — which is why cardiac troponin indicates myocardial cell death.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default cellInjuryMechanisms;
