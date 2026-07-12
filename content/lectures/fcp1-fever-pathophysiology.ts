import type { Lecture } from '../../lib/types';

export const fcp1FeverPathophysiology: Lecture = {
  id: 'fcp1-fever-pathophysiology',
  title: 'Fever: Thermoregulation & Pathophysiology',
  system: 'clinical',
  source: 'L6 — Fever',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L6 Fever' },
    { kind: 'mechanism', label: 'Pyrogens → set-point' },
    { kind: 'disease', label: 'Fever vs hyperthermia' },
    { kind: 'investigation', label: 'Fever patterns' },
  ],

  highYield: [
    '**Fever is a REGULATED rise in the hypothalamic set-point** driven by pyrogens — the body actively works (shivering, vasoconstriction) to reach the higher target. **Hyperthermia is UNREGULATED**: the set-point is normal but heat gain exceeds heat loss, so the patient overheats passively. This split decides the whole approach → [[fcp1-fever-approach-differential]].',
    '**Pathway:** exogenous pyrogen (endotoxin/**LPS**) → macrophages release endogenous pyrogens (**IL-1, IL-6, TNF-alpha, interferons**) → **PGE2** made at the hypothalamic preoptic area → set-point rises. **Antipyretics (paracetamol, NSAIDs) block COX → less PGE2 → set-point falls** — they work in fever but are **useless in hyperthermia**.',
    '**Hyperthermia is the emergency**: heat stroke, malignant hyperthermia, neuroleptic malignant syndrome, serotonin syndrome, and thyroid storm → [[fcp1-hyperthyroidism]]. Suspect it with **very high temperature (over 41 degrees C), hot dry skin, and altered mental state that does NOT respond to antipyretics** — treat with active cooling and remove the trigger.',
    '**Fever patterns give clues but are not diagnostic:** intermittent (spikes to normal — abscess, malaria), remittent (fluctuates, never reaching normal), sustained/continuous (typhoid, typical pneumonia), and relapsing (febrile days separated by afebrile days — **Pel-Ebstein** in Hodgkin, malaria).',
    '**Relative bradycardia (Faget sign)** — a pulse lower than expected for the temperature — points to typhoid, intracellular organisms, or drug fever, and is a useful discriminator when a patient looks febrile but the heart rate lags.',
  ],

  mechanism: {
    title: 'From pyrogen to a raised set-point (and how hyperthermia differs)',
    steps: [
      { id: 's1', label: 'Trigger: exogenous pyrogen (LPS) or tissue injury', emphasis: 'normal' },
      { id: 's2', label: 'Macrophages release IL-1, IL-6, TNF-alpha', emphasis: 'key' },
      { id: 's3', label: 'PGE2 raises hypothalamic set-point', emphasis: 'key' },
      { id: 's4', label: 'Effectors: shivering + vasoconstriction → temperature climbs (chills, rigors)', emphasis: 'normal' },
      { id: 's5', label: 'Hyperthermia = set-point NORMAL, heat load wins → no antipyretic response', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Chills/rigors then sweating as the set-point resets', mechanism: 'Body chases a new higher set-point, then defends the old one', significance: 'key' },
    { sign: 'Hot dry skin + temperature over 41 degrees C + confusion', mechanism: 'Hyperthermia — failed dissipation, not a raised set-point', significance: 'key' },
    { sign: 'Relative bradycardia (Faget sign)', mechanism: 'Pulse-temperature dissociation (typhoid, intracellular organisms, drug fever)', significance: 'supportive' },
    { sign: 'Relapsing or Pel-Ebstein pattern', mechanism: 'Cyclical pyrogen release (Hodgkin, malaria)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Very high temperature with no response to antipyretics + hot dry skin', meaning: 'Hyperthermia, not fever → active cooling and treat the cause' },
    { clue: 'Intermittent spikes with rigors', meaning: 'Pyogenic focus/abscess or malaria — take cultures/films at the spike' },
    { clue: 'Sustained fever with relative bradycardia', meaning: 'Typhoid or intracellular infection' },
    { clue: 'Fever settling promptly with paracetamol', meaning: 'A PGE2-mediated (true) fever, consistent with infection/inflammation' },
  ],

  treatment: [
    { logic: 'Antipyretics lower a raised set-point', detail: 'Paracetamol/NSAIDs block COX and reduce PGE2 — they relieve fever but do nothing for hyperthermia.' },
    { logic: 'Hyperthermia needs active cooling + trigger removal', detail: 'Remove the offending drug/heat load; cool aggressively; give dantrolene for malignant hyperthermia or neuroleptic malignant syndrome. Do not rely on antipyretics.' },
  ],

  mnemonics: [
    { hook: 'Fever = set-point UP; Hyperthermia = set-point NORMAL', expansion: ['Pyrogens → IL-1/IL-6/TNF → PGE2 → set-point up', 'Antipyretics work on fever, not hyperthermia'] },
  ],

  traps: [
    {
      questionCategory: 'Fever vs hyperthermia',
      wrongInstinct: 'Any high temperature is a fever — just give more paracetamol',
      rightAnswer: 'Hot dry skin, extreme temperature, and no antipyretic response signal hyperthermia — cool actively and stop the trigger',
      why: 'In hyperthermia the set-point is normal, so COX inhibitors cannot help; delay risks organ damage.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient develops a temperature of 42 degrees C, hot dry skin and confusion after prolonged exertion in the heat. Paracetamol has no effect. Which statement best explains this presentation?',
      options: [
        { id: 'a', text: 'The hypothalamic set-point has been raised by pyrogens' },
        { id: 'b', text: 'The set-point is normal but heat dissipation has failed (hyperthermia)' },
        { id: 'c', text: 'Excess PGE2 is driving the temperature and will respond to more antipyretic' },
        { id: 'd', text: 'This is an intermittent fever pattern typical of malaria' },
      ],
      answerId: 'b',
      explanation: 'Extreme temperature, hot dry skin and lack of response to antipyretics indicate hyperthermia (here heat stroke): the set-point is normal and the problem is failed heat loss, so active cooling — not antipyretics — is needed.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which mediator is most directly responsible for raising the hypothalamic thermal set-point in fever?',
      options: [
        { id: 'a', text: 'Prostaglandin E2 (PGE2)' },
        { id: 'b', text: 'Bradykinin' },
        { id: 'c', text: 'Histamine' },
        { id: 'd', text: 'Serotonin' },
      ],
      answerId: 'a',
      explanation: 'Endogenous pyrogens (IL-1, IL-6, TNF-alpha) drive PGE2 production at the preoptic area of the hypothalamus, which raises the set-point. Antipyretics act by blocking COX and reducing PGE2.',
      tests: 'mechanism',
    },
  ],
};

export default fcp1FeverPathophysiology;
