import type { Lecture } from '../../lib/types';

export const ghpOxyhaemoglobinCurveShifts: Lecture = {
  id: 'ghp-oxyhaemoglobin-curve-shifts',
  title: 'The Oxyhaemoglobin Curve & Its Shifts',
  system: 'respiratory',
  source: 'Ch 40 — Transport of Oxygen & Carbon Dioxide in Blood',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'Ch 40 O₂ & CO₂ Transport' },
    { kind: 'mechanism', label: 'Affinity modulation' },
    { kind: 'exam', label: 'P50 · CO poisoning' },
  ],

  highYield: [
    '**P50 is the single number that summarises affinity: the PO₂ at which haemoglobin is half saturated, normally about 27 mmHg.** A **rightward** shift **raises** P50 — lower affinity, oxygen released more readily. A **leftward** shift **lowers** P50 — higher affinity, oxygen held more tightly. Every modulator can be placed by asking whether it helps tissues take oxygen or helps the lung load it.',
    '**Right shift means unloading, and the four causes are exactly the conditions of working tissue.** Raised **CO₂**, raised **H⁺** (low pH), raised **temperature**, and raised **2,3-BPG** all shift right. Exercising muscle generates every one of them, so the curve shifts precisely where extra oxygen is needed. The CO₂/H⁺ component is the **Bohr effect** — an elegant local feedback.',
    '**2,3-BPG is the chronic adaptation, and it explains both altitude and stored blood.** Produced by red cell glycolysis, it binds deoxyhaemoglobin and stabilises the low-affinity state. It **rises** in chronic hypoxia, anaemia and at **altitude**, favouring tissue unloading. Conversely it **falls** in stored blood, so transfused cells initially hold oxygen more tightly than native ones.',
    '**Fetal haemoglobin is a deliberate left shift, and the mechanism is failure to bind 2,3-BPG.** HbF has **γ chains** in place of β, which bind 2,3-BPG poorly. Its P50 is therefore lower (~**19 mmHg**), so fetal blood pulls oxygen across the placenta from maternal blood — a left shift that is advantageous precisely because it is loading, not unloading, that matters there.',
    '**Carbon monoxide inflicts two injuries, and the second is the one usually forgotten.** Its affinity for haemoglobin is roughly **210–250×** that of oxygen, so it occupies sites and slashes **content**. It also **shifts the curve leftward**, so the remaining oxygen is held more tightly and released less readily — content down *and* delivery impaired. Crucially, **PaO₂ and pulse oximetry remain normal**, so the diagnosis needs co-oximetry.',
    '**Methaemoglobin is a different lesion: iron oxidised to Fe³⁺ cannot bind oxygen at all.** It also left-shifts the remaining normal subunits. Classically there is **cyanosis unresponsive to oxygen** with a normal PaO₂ and a characteristic **saturation gap** between oximetry and the calculated value — the same interpretive trap as carbon monoxide, and worth pairing with [[hemoglobin-myoglobin]].',
  ],

  mechanism: {
    title: 'Tuning affinity where it is needed',
    steps: [
      { id: 's1', label: 'Sigmoid curve from cooperative binding; P50 ≈ 27 mmHg', emphasis: 'key' },
      { id: 's2', label: 'Working tissue raises CO₂, H⁺, temperature and 2,3-BPG' },
      { id: 's3', label: 'Curve shifts right → affinity falls → oxygen unloaded locally', emphasis: 'key' },
      { id: 's4', label: 'In the lung the reverse conditions restore affinity for loading' },
      { id: 's5', label: 'Chronic hypoxia raises 2,3-BPG as a sustained rightward adaptation' },
      { id: 's6', label: 'CO and methaemoglobin cut content and shift left — delivery doubly impaired', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Cherry-red appearance with normal pulse oximetry and headache', mechanism: 'Carbon monoxide bound haemoglobin, undetected by standard oximetry', significance: 'key' },
    { sign: 'Cyanosis unresponsive to oxygen with a normal PaO₂', mechanism: 'Methaemoglobinaemia — oxidised iron cannot bind oxygen', significance: 'key' },
    { sign: 'Improved tissue unloading during vigorous exercise', mechanism: 'Bohr effect plus temperature and 2,3-BPG shifting the curve rightward', significance: 'key' },
    { sign: 'Fetal blood extracting oxygen from maternal blood at the placenta', mechanism: 'HbF binds 2,3-BPG poorly, giving a lower P50', significance: 'key' },
    { sign: 'Transfused blood releasing oxygen poorly at first', mechanism: 'Depleted 2,3-BPG in stored red cells', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Raised carboxyhaemoglobin on co-oximetry', meaning: 'Carbon monoxide poisoning — oximetry and PaO₂ will look normal' },
    { clue: 'Saturation gap between pulse oximetry and calculated saturation', meaning: 'Methaemoglobinaemia or carbon monoxide' },
    { clue: 'Raised P50 in a patient acclimatised to altitude', meaning: 'Increased 2,3-BPG favouring tissue unloading' },
    { clue: 'Low P50 in a neonate', meaning: 'Fetal haemoglobin with reduced 2,3-BPG binding' },
    { clue: 'Normal PaO₂ with severe tissue hypoxia', meaning: 'A carriage or affinity problem rather than a gas exchange one' },
  ],

  treatment: [
    {
      logic: 'In carbon monoxide poisoning, treat by mass action with maximal oxygen',
      detail: 'High **FiO₂** shortens the half-life of carboxyhaemoglobin by competing CO off the binding sites. Because **PaO₂ and pulse oximetry read normal**, the decision must rest on co-oximetry and the exposure history rather than the usual monitors.',
    },
    {
      logic: 'Recognise that a left shift impairs delivery even when content looks adequate',
      detail: 'Oxygen bound too tightly is not available to tissue. This is why CO and methaemoglobin cause tissue hypoxia **out of proportion** to the measured saturation, and why correcting the abnormal species matters more than raising PaO₂ alone.',
    },
  ],

  mnemonics: [
    { hook: 'Right = Release: CADET faces right', expansion: ['CO₂ up', 'Acid (H⁺) up', 'DPG (2,3-BPG) up', 'Exercise', 'Temperature up'] },
    { hook: 'Fetal takes, adult gives', expansion: ['HbF left-shifted (P50 ~19) → loads across placenta', 'HbA right-shifted in tissue → unloads'] },
  ],

  traps: [
    {
      questionCategory: 'Oximetry in carbon monoxide poisoning',
      wrongInstinct: 'A normal pulse oximetry reading excludes significant poisoning',
      rightAnswer: 'Standard oximetry cannot distinguish carboxyhaemoglobin from oxyhaemoglobin, so it reads normal',
      why: 'Diagnosis requires co-oximetry; PaO₂ is also normal because dissolved oxygen is unaffected',
    },
    {
      questionCategory: 'Direction of the shift in exercising muscle',
      wrongInstinct: 'Higher affinity would help tissues obtain more oxygen',
      rightAnswer: 'A rightward shift lowers affinity, which is what releases oxygen to tissue',
      why: 'Loading is already near-complete in the lung; the limiting step is unloading',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A firefighter is confused after smoke exposure. Pulse oximetry reads 98% and PaO₂ is 95 mmHg. What is the most likely explanation?',
      options: [
        { id: 'a', text: 'Ventilation–perfusion mismatch' },
        { id: 'b', text: 'Carbon monoxide poisoning, which standard oximetry cannot detect' },
        { id: 'c', text: 'Pulmonary embolism' },
        { id: 'd', text: 'Hypoventilation' },
      ],
      answerId: 'b',
      explanation: 'Carboxyhaemoglobin is read as oxyhaemoglobin by standard oximetry, and PaO₂ reflects only dissolved oxygen, so both look normal. CO reduces content and left-shifts the curve, impairing delivery — co-oximetry is required.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'Which set of changes shifts the oxyhaemoglobin curve to the right?',
      options: [
        { id: 'a', text: 'Decreased CO₂, increased pH, decreased temperature' },
        { id: 'b', text: 'Increased CO₂, decreased pH, increased temperature, increased 2,3-BPG' },
        { id: 'c', text: 'Increased fetal haemoglobin' },
        { id: 'd', text: 'Increased carboxyhaemoglobin' },
      ],
      answerId: 'b',
      explanation: 'These are exactly the conditions of metabolically active tissue. The rightward shift lowers affinity and raises P50, releasing oxygen where it is needed — the CO₂ and H⁺ component being the Bohr effect.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'Why does fetal haemoglobin have a higher affinity for oxygen than adult haemoglobin?',
      options: [
        { id: 'a', text: 'It contains more haem groups per molecule' },
        { id: 'b', text: 'Its gamma chains bind 2,3-BPG poorly, lowering P50' },
        { id: 'c', text: 'It is present at higher concentration' },
        { id: 'd', text: 'It binds carbon dioxide more avidly' },
      ],
      answerId: 'b',
      explanation: 'HbF substitutes gamma for beta chains, and gamma chains interact weakly with 2,3-BPG. Less stabilisation of the low-affinity state gives a P50 near 19 mmHg, letting fetal blood draw oxygen from maternal blood across the placenta.',
      tests: 'mechanism',
    },
  ],
};

export default ghpOxyhaemoglobinCurveShifts;
