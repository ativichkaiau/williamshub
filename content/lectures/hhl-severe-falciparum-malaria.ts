import type { Lecture } from '../../lib/types';

export const hhlSevereFalciparumMalaria: Lecture = {
  id: 'hhl-severe-falciparum-malaria',
  title: 'Severe Falciparum Malaria',
  system: 'heme',
  source: 'L24 — Malaria: Biology & Clinical Disease',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L24 Malaria Biology' },
    { kind: 'disease', label: 'Severe falciparum malaria' },
    { kind: 'mechanism', label: 'Sequestration → organ failure' },
    { kind: 'treatment', label: 'IV artesunate' },
  ],

  highYield: [
    'Severe malaria is **almost always P. falciparum**. **Any one WHO severe criterion** in a patient with parasitemia = a **medical emergency**.',
    '**Cerebral malaria** = impaired consciousness/coma ± seizures from cerebral sequestration — high mortality. Also: **severe anemia, hypoglycemia, AKI, ARDS, metabolic (lactic) acidosis, DIC/bleeding, shock, hyperparasitemia**.',
    '**Blackwater fever** = massive intravascular hemolysis → **hemoglobinuria (dark urine)** → **acute kidney injury**.',
    'The unifying mechanism is **sequestration + high parasite biomass** → microvascular obstruction and anaerobic metabolism (**lactic acidosis, hypoglycemia**).',
    '**IV artesunate is first-line for ALL severe malaria** — superior to IV quinine (lower mortality). Do not wait; treat empirically if strongly suspected.',
  ],

  mechanism: {
    title: 'High biomass + sequestration → multi-organ failure',
    steps: [
      { id: 's1', label: 'High parasitemia + PfEMP1 cytoadherence → microvascular sequestration', emphasis: 'key' },
      { id: 's2', label: 'Cerebral microvascular obstruction → coma / seizures', emphasis: 'danger' },
      { id: 's3', label: 'Impaired perfusion → anaerobic glycolysis → lactic acidosis + hypoglycemia', emphasis: 'danger' },
      { id: 's4', label: 'Intravascular hemolysis → hemoglobinuria (blackwater) → AKI', emphasis: 'danger' },
      { id: 's5', label: 'Endothelial activation → ARDS, DIC, shock', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Impaired consciousness, coma or seizures', mechanism: 'Cerebral sequestration and microvascular obstruction', significance: 'key' },
    { sign: 'Dark ("Coca-Cola") urine — hemoglobinuria', mechanism: 'Massive intravascular hemolysis — blackwater fever', significance: 'key' },
    { sign: 'Deep, rapid (Kussmaul) breathing', mechanism: 'Compensation for metabolic (lactic) acidosis', significance: 'key' },
    { sign: 'Profound anemia and jaundice', mechanism: 'Hemolysis of infected and uninfected red cells', significance: 'supportive' },
    { sign: 'Spontaneous bleeding / petechiae', mechanism: 'Disseminated intravascular coagulation', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Parasitemia >5–10% (or >2% in a non-immune patient)', meaning: 'Hyperparasitemia — a marker of severe disease' },
    { clue: 'Low blood glucose', meaning: 'Hypoglycemia — from the parasite and from quinine-induced hyperinsulinism' },
    { clue: 'Raised lactate with low bicarbonate', meaning: 'Metabolic acidosis — one of the strongest predictors of death' },
    { clue: 'Rising creatinine with dark urine', meaning: 'Acute kidney injury / blackwater fever' },
  ],

  treatment: [
    { logic: 'Give IV artesunate immediately', detail: 'First-line for all severe malaria — lower mortality than IV quinine (SEAQUAMAT/AQUAMAT). Do not delay for confirmation if suspicion is high.' },
    { logic: 'Aggressive supportive care', detail: 'Correct hypoglycemia, careful fluids, control seizures, transfuse for severe anemia, renal replacement for AKI.' },
    { logic: 'Complete a full oral ACT course', detail: 'Once the patient can tolerate oral therapy, finish with a complete artemisinin-based combination.' },
  ],

  mnemonics: [
    { hook: 'Severe malaria hits Brain, Blood, Sugar, Kidney, Lungs, Acid', expansion: ['Brain: cerebral malaria', 'Blood: severe anemia + DIC', 'Sugar: hypoglycemia', 'Kidney: AKI/blackwater', 'Lungs: ARDS', 'Acid: lactic acidosis'] },
  ],

  traps: [
    {
      questionCategory: 'Choice of antimalarial in severe disease',
      wrongInstinct: 'Start oral ACT, or reach for IV quinine',
      rightAnswer: 'Severe malaria needs IMMEDIATE IV artesunate; oral therapy is inadequate and artesunate beats quinine on mortality',
      why: 'A vomiting, obtunded patient cannot absorb oral drug, and trials show IV artesunate lowers death versus quinine — it is the standard of care.',
    },
    {
      questionCategory: 'Hypoglycemia in treated malaria',
      wrongInstinct: 'Low glucose during treatment means the drug is working',
      rightAnswer: 'Hypoglycemia is a danger sign of severe malaria and is also driven by quinine-induced hyperinsulinism — monitor and correct glucose',
      why: 'Both the disease and quinine cause hypoglycemia; missing it (especially in a comatose patient) can be fatal.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A traveller returning from northern Thailand has P. falciparum on film and becomes confused with a generalised seizure. What is the immediate management?',
      options: [
        { id: 'a', text: 'Oral artemether–lumefantrine' },
        { id: 'b', text: 'Intravenous artesunate' },
        { id: 'c', text: 'Oral chloroquine' },
        { id: 'd', text: 'Wait for a repeat film before treating' },
      ],
      answerId: 'b',
      explanation: 'Impaired consciousness with falciparum parasitemia is cerebral (severe) malaria — a medical emergency. IV artesunate is first-line and outperforms quinine; oral therapy is inadequate.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'A patient with falciparum malaria passes dark, tea-coloured urine and develops rising creatinine. Which mechanism best explains this?',
      options: [
        { id: 'a', text: 'Immune-complex glomerulonephritis' },
        { id: 'b', text: 'Massive intravascular hemolysis with hemoglobinuria (blackwater fever)' },
        { id: 'c', text: 'Rhabdomyolysis from seizures' },
        { id: 'd', text: 'Pre-renal failure from vomiting alone' },
      ],
      answerId: 'b',
      explanation: 'Blackwater fever is massive intravascular hemolysis; free hemoglobin is filtered (hemoglobinuria) and is nephrotoxic, precipitating acute kidney injury.',
      tests: 'mechanism',
    },
  ],
};

export default hhlSevereFalciparumMalaria;
