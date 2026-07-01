import type { Lecture } from '../../lib/types';

export const osteoporosisDrugs: Lecture = {
  id: 'osteoporosis-drugs',
  title: 'Osteoporosis Drugs',
  system: 'msk',
  source: 'L7 — Drugs & Bone Metabolism',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'MSK' },
    { kind: 'lecture', label: 'L7 Drugs & Bone Metabolism' },
    { kind: 'disease', label: 'Osteoporosis' },
    { kind: 'mechanism', label: 'Antiresorptive vs anabolic' },
    { kind: 'exam', label: 'Bisphosphonates' },
  ],

  highYield: [
    'Osteoporosis (**DXA T-score ≤ −2.5**) is treated with **foundational calcium + vitamin D**, then **antiresorptive** or **anabolic** drugs.',
    '**Bisphosphonates (-dronate: alendronate, risedronate, zoledronate) = first-line/drug of choice**. Pyrophosphate analogs taken up by osteoclasts → **osteoclast apoptosis**. Oral forms poorly absorbed → **take on an empty stomach, stay upright 30–60 min**. Adverse (“GO to BC”): **Gastritis/esophagitis, Osteonecrosis of the jaw, Bone/atypical femoral fracture, Calcium changes**.',
    '**Denosumab** = anti-RANKL monoclonal antibody → ↓ osteoclast formation (like OPG); watch **hypocalcemia, osteonecrosis of the jaw**.',
    '**SERMs (raloxifene)** = estrogen agonist in **bone** (↓ resorption) but antagonist in **breast/uterus** (also lowers breast-cancer risk); adverse = **venous thromboembolism**. **Calcitonin** (salmon nasal spray) and **estrogen/HRT** (short-term; long-term CV/cancer risk) are additional antiresorptives.',
    '**Teriparatide/abaloparatide (PTH analogs)** = **anabolic** (build bone via intermittent low-dose osteoblast stimulation) — for severe/high-risk osteoporosis.',
  ],

  mechanism: {
    title: 'Stop resorption or build new bone',
    steps: [
      { id: 's1', label: 'Foundation: calcium + vitamin D', emphasis: 'key' },
      { id: 's2', label: 'Antiresorptive: bisphosphonate (osteoclast apoptosis), denosumab (anti-RANKL)' },
      { id: 's3', label: 'SERM/calcitonin/estrogen also reduce resorption' },
      { id: 's4', label: 'Anabolic: intermittent PTH analog builds bone', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Non-healing jaw wound after dental work on bone therapy', mechanism: 'Osteonecrosis of the jaw (bisphosphonate/denosumab)', significance: 'key' },
    { sign: 'Atypical subtrochanteric femoral fracture', mechanism: 'Long-term bisphosphonate', significance: 'key' },
    { sign: 'VTE on an anti-osteoporosis drug', mechanism: 'SERM (raloxifene) / estrogen', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'DXA T-score', meaning: 'Diagnosis & treatment threshold' },
    { clue: 'Calcium/vitamin D before antiresorptives', meaning: 'Correct hypocalcemia first (esp. denosumab)' },
    { clue: 'Dental assessment', meaning: 'ONJ risk before/during therapy' },
  ],

  treatment: [
    { logic: 'Bisphosphonate first-line + calcium/vitamin D', detail: 'Empty stomach, remain upright.' },
    { logic: 'Denosumab if bisphosphonate unsuitable', detail: 'Anti-RANKL; do not stop abruptly.' },
    { logic: 'Teriparatide for severe/high-risk disease', detail: 'Anabolic; followed by an antiresorptive.' },
  ],

  mnemonics: [
    { hook: 'Bisphosphonate adverse = “GO to BC”: Gastritis, Osteonecrosis jaw, Bone/atypical fracture, Calcium', expansion: ['Empty stomach, stay upright'] },
    { hook: 'Denosumab = anti-RANKL (mimics OPG); teriparatide = anabolic PTH', expansion: ['Antiresorptive vs bone-building'] },
  ],

  traps: [
    {
      questionCategory: 'How to take oral bisphosphonates',
      wrongInstinct: 'Oral bisphosphonates can be taken with food and lying down like most tablets',
      rightAnswer: 'Take oral bisphosphonates on an empty stomach with water and remain UPRIGHT for 30–60 minutes — they are poorly absorbed and cause esophagitis',
      why: 'Poor oral bioavailability and mucosal irritation mean food blocks absorption and reclining risks esophagitis, so the fasting/upright rule is essential.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A postmenopausal woman with osteoporosis is started on the first-line drug class that induces osteoclast apoptosis. She must take it on an empty stomach and stay upright afterward. This drug class is:',
      options: [
        { id: 'a', text: 'SERMs' },
        { id: 'b', text: 'Bisphosphonates' },
        { id: 'c', text: 'PTH analogs' },
        { id: 'd', text: 'Calcitonin' },
      ],
      answerId: 'b',
      explanation: 'Bisphosphonates are first-line antiresorptives that trigger osteoclast apoptosis; oral forms are poorly absorbed and irritant, so they are taken fasting with the patient remaining upright to prevent esophagitis.',
      tests: 'treatment',
    },
  ],
};

export default osteoporosisDrugs;
