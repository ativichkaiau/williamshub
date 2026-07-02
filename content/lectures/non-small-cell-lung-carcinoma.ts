import type { Lecture } from '../../lib/types';
import { LUNG_CANCER_TYPES } from '../../lib/figures';

export const nonSmallCellLungCarcinoma: Lecture = {
  id: 'non-small-cell-lung-carcinoma',
  title: 'Non-Small-Cell Lung Carcinoma',
  system: 'respiratory',
  source: 'L12 — Pulmonary Neoplasms',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L12 Pulmonary Neoplasm' },
    { kind: 'disease', label: 'Adenocarcinoma' },
    { kind: 'exam', label: 'Squamous cell carcinoma' },
  ],

  highYield: [
    '**Lung cancer is divided into small-cell (SCLC) and non-small-cell (NSCLC) because the two are treated differently: NSCLC is potentially resectable if localised, whereas SCLC is almost always disseminated and treated with chemo/radiotherapy.** NSCLC comprises adenocarcinoma, squamous cell carcinoma and large cell carcinoma.',
    '**Adenocarcinoma is the commonest lung cancer overall — and the commonest in non-smokers and women.** It is usually **PERIPHERAL**, forms glands/mucin, and is defined by driver mutations (**EGFR, ALK, KRAS, ROS1**) that enable targeted therapy. Precursor: atypical adenomatous hyperplasia → adenocarcinoma in situ. It can cause **hypertrophic pulmonary osteoarthropathy** (clubbing + periostitis).',
    '**Squamous cell carcinoma is CENTRAL (arising in a bronchus), strongly smoking-related, and shows keratin pearls/intercellular bridges.** It classically causes **hypercalcaemia via PTH-related peptide (PTHrP)** and tends to **cavitate**. Because it is central it may present with obstruction, collapse or haemoptysis.',
    '**Local and metastatic complications are exam staples:** a **Pancoast (superior sulcus) tumour** invades the apex → **Horner syndrome (ptosis, miosis, anhidrosis), C8–T1 wasting and arm pain**; central masses cause **SVC obstruction** (facial plethora, distended neck veins); phrenic/recurrent laryngeal nerve palsy; malignant pleural effusion; distant spread to brain, bone, liver and adrenal.',
    '**Diagnosis and staging** use CT, PET, bronchoscopy/biopsy and cytology; **molecular/immunohistochemical profiling (EGFR/ALK, PD-L1)** now guides targeted and immunotherapy in adenocarcinoma. The key first split remains **SCLC vs NSCLC**, then subtype and mutation status — because these determine whether surgery, targeted drugs or chemo is appropriate.',
  ],

  mechanism: {
    title: 'NSCLC: peripheral adeno (drivers) vs central squamous (PTHrP, cavitates)',
    steps: [
      { id: 's1', label: 'First split: SCLC (chemo) vs NSCLC (resect if localised)', emphasis: 'key' },
      { id: 's2', label: 'Adenocarcinoma: peripheral, commonest, non-smokers/women; EGFR/ALK/KRAS', emphasis: 'key' },
      { id: 's3', label: 'Squamous: central, smoking, keratin pearls; PTHrP → hypercalcaemia, cavitates', emphasis: 'key' },
      { id: 's4', label: 'Pancoast → Horner + C8-T1; central mass → SVC obstruction', emphasis: 'danger' },
      { id: 's5', label: 'Molecular/PD-L1 profiling guides targeted + immunotherapy' },
    ],
  },

  examFindings: [
    { sign: 'Peripheral gland-forming lung tumour in a non-smoker', mechanism: 'Adenocarcinoma (EGFR/ALK drivers)', significance: 'key' },
    { sign: 'Central cavitating tumour with hypercalcaemia', mechanism: 'Squamous cell carcinoma (PTHrP)', significance: 'key' },
    { sign: 'Horner syndrome + arm pain + hand wasting', mechanism: 'Pancoast (superior sulcus) tumour invading C8–T1/sympathetics', significance: 'key' },
    { sign: 'Facial plethora + distended neck veins', mechanism: 'Superior vena cava obstruction by a central mass', significance: 'supportive' },
    { sign: 'Clubbing with painful periostitis', mechanism: 'Hypertrophic pulmonary osteoarthropathy (often adenocarcinoma)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The commonest lung cancer overall and in non-smokers', meaning: 'Adenocarcinoma (peripheral)' },
    { clue: 'The central smoking-related cancer causing hypercalcaemia', meaning: 'Squamous cell carcinoma (PTHrP)' },
    { clue: 'The apical tumour causing Horner syndrome', meaning: 'Pancoast (superior sulcus) tumour' },
    { clue: 'The molecular markers guiding adenocarcinoma therapy', meaning: 'EGFR, ALK, ROS1 (and PD-L1 for immunotherapy)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Localised NSCLC is potentially curable by surgery (± adjuvant therapy); driver mutations enable targeted agents, and PD-L1 guides immunotherapy — a stark contrast to the chemo-led [[small-cell-and-other-lung-tumors]]. Smoking is the dominant risk (and asbestos synergises — [[pulmonary-fibrosis-pneumoconioses]]). Central tumours cause obstructive atelectasis ([[ards-pulmonary-hypertension-atelectasis]]) and post-obstructive abscess ([[hospital-aspiration-pneumonia-abscess]]).' },
  ],

  mnemonics: [
    { hook: 'NSCLC location: "Squamous = Sentral (central); Adeno = Away (peripheral)"', expansion: ['Squamous: keratin pearls, PTHrP, cavitates', 'Adeno: glands/mucin, EGFR/ALK'] },
    { hook: 'Pancoast = "apex → Horner + arm" ; central mass → SVC obstruction', expansion: ['Ptosis, miosis, anhidrosis', 'C8-T1 wasting'] },
  ],

  traps: [
    {
      questionCategory: 'Hypercalcaemia in lung cancer',
      wrongInstinct: 'Hypercalcaemia in a lung cancer patient always means bone metastases',
      rightAnswer: 'SQUAMOUS cell carcinoma classically causes hypercalcaemia through the PARANEOPLASTIC secretion of PTH-related peptide (PTHrP), which can occur without bone metastases; small-cell tumours instead secrete ADH/ACTH',
      why: 'Attributing hypercalcaemia solely to metastasis misses the paraneoplastic PTHrP mechanism specific to squamous cell carcinoma, which changes the diagnostic reasoning and can be present with limited disease.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A lifelong non-smoker develops a peripheral, gland-forming lung tumour with an EGFR mutation. The diagnosis is:',
      options: [
        { id: 'a', text: 'Squamous cell carcinoma' },
        { id: 'b', text: 'Adenocarcinoma' },
        { id: 'c', text: 'Small-cell carcinoma' },
        { id: 'd', text: 'Mesothelioma' },
      ],
      answerId: 'b',
      explanation: 'Adenocarcinoma is the commonest lung cancer overall and in non-smokers/women; it is typically peripheral, forms glands/mucin, and carries targetable drivers such as EGFR and ALK.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A central, cavitating lung tumour with keratin pearls is associated with hypercalcaemia because it secretes:',
      options: [
        { id: 'a', text: 'Antidiuretic hormone' },
        { id: 'b', text: 'PTH-related peptide (PTHrP)' },
        { id: 'c', text: 'ACTH' },
        { id: 'd', text: 'Calcitonin' },
      ],
      answerId: 'b',
      explanation: 'Squamous cell carcinoma (central, keratinising, smoking-related) classically produces PTH-related peptide, causing paraneoplastic hypercalcaemia even without bone metastases. ADH/ACTH secretion is characteristic of small-cell carcinoma.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Lung cancer classification', svg: LUNG_CANCER_TYPES, caption: 'Central (squamous, small cell) vs peripheral (adenocarcinoma, large cell), with paraneoplastic and local complications.' },
  ],
};

export default nonSmallCellLungCarcinoma;
