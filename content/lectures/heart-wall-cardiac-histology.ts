import type { Lecture } from '../../lib/types';

export const heartWallCardiacHistology: Lecture = {
  id: 'heart-wall-cardiac-histology',
  title: 'Histology of the Heart Wall & Conduction Cells',
  system: 'cardiovascular',
  source: 'L2 — Histology of the Cardiovascular System',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L2 CVS Histology' },
    { kind: 'mechanism', label: 'Cardiac muscle & Purkinje' },
    { kind: 'exam', label: 'Intercalated discs' },
  ],

  highYield: [
    '**Three wall layers histologically.** **Endocardium** = endothelium + subendothelial connective tissue (lines chambers/valves). **Myocardium** = the thick layer of **cardiac muscle** (thickest in the LV). **Epicardium** = the visceral pericardium (mesothelium + connective tissue with fat, coronary vessels, nerves).',
    '**Cardiac muscle = striated, branched cells with 1–2 CENTRAL nuclei, joined by INTERCALATED DISCS** — the histological hallmark. The discs contain **desmosomes + fascia adherens** (mechanical anchoring) and **gap junctions** (electrical coupling), so the myocardium behaves as a **functional syncytium** (impulse spreads cell-to-cell).',
    '**Cardiac muscle is involuntary and cannot regenerate well** (few satellite cells) → infarcted myocardium heals by **fibrous scar**, not new muscle. It has central nuclei (vs skeletal muscle\'s peripheral nuclei) — a key slide distinction (see [[cardiac-smooth-muscle]] in BHCB).',
    '**The conduction system is modified cardiac muscle, not nerve.** **SA and AV nodes** = small, pale, specialised myocytes. **Purkinje fibres** = **large, pale-staining cells with abundant glycogen and few myofibrils**, located subendocardially — specialised for **rapid conduction** (not force).',
    '**The cardiac skeleton** = dense fibrous connective-tissue rings around the valves; it **anchors the valves/myocardium and electrically insulates the atria from the ventricles**, so the impulse can only pass through the AV node — forcing the physiological AV delay.',
  ],

  mechanism: {
    title: 'Muscle joined by discs; conduction is modified muscle',
    steps: [
      { id: 's1', label: 'Wall: endocardium · myocardium (cardiac muscle) · epicardium', emphasis: 'key' },
      { id: 's2', label: 'Cardiac muscle: striated, branched, central nuclei', emphasis: 'key' },
      { id: 's3', label: 'Intercalated discs = desmosomes + gap junctions (syncytium)', emphasis: 'key' },
      { id: 's4', label: 'Conduction = modified myocytes; Purkinje = large, pale, glycogen-rich' },
      { id: 's5', label: 'Fibrous cardiac skeleton insulates atria from ventricles' },
    ],
  },

  examFindings: [
    { sign: 'Intercalated discs between cardiac cells', mechanism: 'Desmosomes (strength) + gap junctions (coupling)', significance: 'key' },
    { sign: 'Central (1–2) nuclei, branched striated fibres', mechanism: 'Cardiac (not skeletal) muscle', significance: 'key' },
    { sign: 'Large pale subendocardial cells with glycogen', mechanism: 'Purkinje fibres (rapid conduction)', significance: 'key' },
    { sign: 'Infarct heals by fibrous scar', mechanism: 'Cardiac muscle cannot regenerate', significance: 'supportive' },
    { sign: 'Atria electrically insulated from ventricles', mechanism: 'Fibrous cardiac skeleton → impulse only via AV node', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Histological hallmark of cardiac muscle', meaning: 'Intercalated discs' },
    { clue: 'Junction providing electrical coupling in the disc', meaning: 'Gap junctions' },
    { clue: 'Large pale conduction cells in the ventricle', meaning: 'Purkinje fibres' },
    { clue: 'Why the impulse can only reach ventricles via the AV node', meaning: 'The fibrous cardiac skeleton insulates atria from ventricles' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Gap junctions make the heart contract as a syncytium (basis of ECG and re-entry arrhythmias); poor regeneration explains post-MI scarring. Conduction physiology: [[pacemaker-conduction-system]]. Cardiac muscle mechanism overlaps BHCB ([[cardiac-smooth-muscle]]).' },
  ],

  mnemonics: [
    { hook: 'Cardiac = "Central nuclei, branched, intercalated discs"; skeletal = peripheral nuclei', expansion: ['Discs = desmosome + gap junction'] },
    { hook: 'Purkinje = "large, pale, glycogen, fast"', expansion: ['Modified muscle, not nerve'] },
  ],

  traps: [
    {
      questionCategory: 'Is the conduction system nervous tissue?',
      wrongInstinct: 'The SA node, AV node, and Purkinje fibres are nerves',
      rightAnswer: 'They are MODIFIED CARDIAC MUSCLE cells (specialised myocytes), not neurons — the heartbeat originates within the muscle itself (myogenic)',
      why: 'The heart is myogenic: the conduction system is specialised muscle that generates/conducts the impulse; autonomic nerves only modulate it.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The intercalated discs of cardiac muscle contain gap junctions, which:',
      options: [
        { id: 'a', text: 'Provide only mechanical strength' },
        { id: 'b', text: 'Electrically couple cells so the myocardium acts as a functional syncytium' },
        { id: 'c', text: 'Store calcium' },
        { id: 'd', text: 'Insulate the atria from the ventricles' },
      ],
      answerId: 'b',
      explanation: 'Gap junctions in the intercalated disc let ions pass cell-to-cell, so the impulse spreads and the myocardium contracts as a unit (functional syncytium). Desmosomes/fascia adherens provide the mechanical strength.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Purkinje fibres are histologically recognised as:',
      options: [
        { id: 'a', text: 'Peripheral vein endothelium' },
        { id: 'b', text: 'Large, pale-staining cells rich in glycogen with few myofibrils, located subendocardially' },
        { id: 'c', text: 'Small dark neurons' },
        { id: 'd', text: 'Skeletal muscle fibres' },
      ],
      answerId: 'b',
      explanation: 'Purkinje fibres are modified cardiac myocytes — large, pale, glycogen-rich, with few myofibrils — specialised for rapid conduction (not contractile force), located just under the endocardium.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default heartWallCardiacHistology;
