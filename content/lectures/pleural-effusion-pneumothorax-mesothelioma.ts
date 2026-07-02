import type { Lecture } from '../../lib/types';
import { PLEURAL_MEDIASTINAL } from '../../lib/figures';

export const pleuralEffusionPneumothoraxMesothelioma: Lecture = {
  id: 'pleural-effusion-pneumothorax-mesothelioma',
  title: 'Pleural Effusion, Pneumothorax & Mesothelioma',
  system: 'respiratory',
  source: 'L17 — Pathology of the Mediastinum & Pleura',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L17 Pleura & Mediastinum' },
    { kind: 'disease', label: 'Pleural effusion' },
    { kind: 'exam', label: 'Tension pneumothorax' },
  ],

  highYield: [
    '**Pleural effusion (fluid in the pleural space) is split into transudate and exudate using LIGHT\'S CRITERIA** — it is an exudate if any of: pleural/serum protein >0.5, pleural/serum LDH >0.6, or pleural LDH > two-thirds of the upper normal serum limit. **Transudates** (heart failure, cirrhosis, nephrotic syndrome) reflect altered hydrostatic/oncotic pressure; **exudates** (infection, malignancy, PE) reflect increased permeability.',
    '**Special effusions to know: empyema (frank pus — low glucose, low pH, high LDH — needs drainage); chylothorax (milky, high triglyceride — thoracic duct injury); and haemothorax (blood).** A malignant effusion (often adenocarcinoma or mesothelioma) is an exudate that may be blood-stained and recurs.',
    '**Pneumothorax is air in the pleural space, collapsing the lung. Primary spontaneous** occurs in tall, thin young men (apical bleb rupture); **secondary** complicates lung disease (COPD, asthma). **TENSION pneumothorax is a life-threatening emergency: a one-way valve traps air → the mediastinum shifts AWAY, venous return falls → hypotension** — treat immediately with needle decompression, don\'t wait for an X-ray.',
    '**Malignant mesothelioma is a pleural cancer strongly linked to ASBESTOS exposure, with a long latency (decades) and — unlike bronchogenic carcinoma — NOT dose-related to smoking.** It encases the lung in a thick rind, causing a recurrent effusion, chest pain and breathlessness; prognosis is poor. Pleural plaques are a benign marker of asbestos exposure, not mesothelioma itself.',
    '**Approach any pleural fluid by aspirating and analysing it (Light\'s criteria, cell count, glucose, pH, cytology, culture)** to separate benign transudates from exudates needing intervention. The two "can\'t-miss" situations are **tension pneumothorax (treat before imaging)** and **empyema/complicated effusion (drain it)**.',
  ],

  mechanism: {
    title: 'Light\'s criteria classify effusions; tension pneumothorax = emergency; asbestos → mesothelioma',
    steps: [
      { id: 's1', label: 'Effusion: exudate if Light\'s criteria met (protein/LDH ratios)', emphasis: 'key' },
      { id: 's2', label: 'Transudate (HF/cirrhosis/nephrotic) vs exudate (infection/malignancy/PE)', emphasis: 'key' },
      { id: 's3', label: 'Empyema/chylothorax/haemothorax = special effusions (drain empyema)' },
      { id: 's4', label: 'Tension pneumothorax: air trap → shift AWAY, ↓venous return → needle now', emphasis: 'danger' },
      { id: 's5', label: 'Mesothelioma: asbestos, long latency, NOT smoking-dose-related, poor prognosis', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Pleural fluid meeting Light\'s criteria', mechanism: 'Exudate (infection, malignancy, PE)', significance: 'key' },
    { sign: 'Low-glucose, low-pH, high-LDH pleural pus', mechanism: 'Empyema — requires drainage', significance: 'key' },
    { sign: 'Hypotension + tracheal deviation away + absent breath sounds', mechanism: 'Tension pneumothorax (treat before X-ray)', significance: 'key' },
    { sign: 'Pleural tumour encasing the lung after asbestos exposure', mechanism: 'Malignant mesothelioma', significance: 'key' },
    { sign: 'Milky, triglyceride-rich pleural fluid', mechanism: 'Chylothorax (thoracic duct disruption)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The criteria distinguishing exudate from transudate', meaning: 'Light\'s criteria (protein and LDH ratios)' },
    { clue: 'The pleural emergency treated before imaging', meaning: 'Tension pneumothorax (immediate needle decompression)' },
    { clue: 'The exposure causing mesothelioma', meaning: 'Asbestos (long latency, not smoking-dose-related)' },
    { clue: 'The pleural fluid finding indicating empyema', meaning: 'Pus with low glucose, low pH, high LDH' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Fluid analysis (Light\'s criteria) separates transudates (treat the systemic cause) from exudates needing intervention; empyema is drained and tension pneumothorax is decompressed emergently. Mesothelioma and asbestos link to the pneumoconioses ([[pulmonary-fibrosis-pneumoconioses]]); malignant effusions may come from lung primaries ([[non-small-cell-lung-carcinoma]]). Mediastinal masses are covered in [[mediastinal-masses]].' },
  ],

  mnemonics: [
    { hook: 'Light\'s = exudate if "Protein >0.5, LDH >0.6, LDH > ⅔ upper limit" (any one)', expansion: ['Transudate = HF/cirrhosis/nephrotic', 'Exudate = infection/malignancy/PE'] },
    { hook: 'Tension pneumothorax "pushes away" → decompress before X-ray', expansion: ['One-way valve traps air', '↓venous return → hypotension'] },
  ],

  traps: [
    {
      questionCategory: 'Managing tension pneumothorax',
      wrongInstinct: 'Confirm a suspected tension pneumothorax with a chest X-ray before treating',
      rightAnswer: 'Tension pneumothorax is a CLINICAL diagnosis and an emergency — treat with immediate needle decompression (then a chest drain); waiting for an X-ray can be fatal',
      why: 'The trapped air progressively compresses the mediastinum and great veins, causing obstructive shock within minutes; delaying decompression for imaging risks cardiac arrest.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Pleural fluid analysis shows a pleural-to-serum protein ratio of 0.7 and pleural LDH above two-thirds of the upper serum limit. This indicates:',
      options: [
        { id: 'a', text: 'A transudate, suggesting heart failure' },
        { id: 'b', text: 'An exudate, suggesting infection, malignancy or PE' },
        { id: 'c', text: 'A normal finding' },
        { id: 'd', text: 'A chylothorax' },
      ],
      answerId: 'b',
      explanation: 'Meeting Light\'s criteria (protein ratio >0.5 and/or LDH ratio >0.6 or pleural LDH > two-thirds of the upper normal) defines an exudate, which points to increased capillary permeability from infection, malignancy or pulmonary embolism.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A pleural malignancy that encases the lung, has a decades-long latency after asbestos exposure and is NOT related to smoking dose is:',
      options: [
        { id: 'a', text: 'Adenocarcinoma of the lung' },
        { id: 'b', text: 'Malignant mesothelioma' },
        { id: 'c', text: 'Squamous cell carcinoma' },
        { id: 'd', text: 'Small-cell carcinoma' },
      ],
      answerId: 'b',
      explanation: 'Malignant mesothelioma is a pleural tumour strongly linked to asbestos with a long latency; unlike bronchogenic carcinoma, its risk is not multiplied by smoking. It encases the lung and causes a recurrent effusion with a poor prognosis.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Pleura & mediastinum', svg: PLEURAL_MEDIASTINAL, caption: 'Light\'s criteria, pneumothorax, mesothelioma, and mediastinal masses by compartment.' },
  ],
};

export default pleuralEffusionPneumothoraxMesothelioma;
