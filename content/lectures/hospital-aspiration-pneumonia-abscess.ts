import type { Lecture } from '../../lib/types';

export const hospitalAspirationPneumoniaAbscess: Lecture = {
  id: 'hospital-aspiration-pneumonia-abscess',
  title: 'Hospital-Acquired & Aspiration Pneumonia; Lung Abscess',
  system: 'respiratory',
  source: 'L6 — Bacterial Infection of the Lower Respiratory Tract',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L6 Lower Resp Bacteria' },
    { kind: 'disease', label: 'Lung abscess' },
    { kind: 'exam', label: 'Aspiration' },
  ],

  highYield: [
    '**Hospital-acquired (nosocomial) pneumonia (HAP) develops ≥48 h after admission; ventilator-associated pneumonia (VAP) after ≥48 h of intubation.** The organisms are more resistant than in CAP: **Pseudomonas aeruginosa, Staphylococcus aureus (including MRSA), Klebsiella and other Gram-negative Enterobacteriaceae** — so empiric therapy is broad.',
    '**Aspiration pneumonia follows inhalation of oropharyngeal/gastric contents** in patients with impaired swallow or consciousness (stroke, seizures, alcohol, dysphagia, NG tubes). It favours **gravity-dependent segments — the RIGHT lower lobe and posterior segments** (the right main bronchus is wider, shorter and more vertical). The flora is **often anaerobic/mixed**.',
    '**A lung abscess is a localised area of necrosis and suppuration** producing a cavity with an **air–fluid level** on imaging. Causes include **aspiration (commonest, often anaerobes), post-obstructive (tumour), and necrotising organisms (S. aureus, Klebsiella)**. Classic features: swinging fever, **cough with copious FOUL/putrid sputum**, weight loss and clubbing.',
    '**Necrotising pneumonia and empyema are the destructive complements:** necrotising organisms liquefy lung tissue; **empyema is pus in the pleural space** (an exudative, low-pH, high-LDH, low-glucose effusion) that requires drainage. Chronic aspiration and abscess are strongly associated with **poor dentition and periodontal anaerobes**.',
    '**The unifying principle is host defence failure + inoculum:** intubation, aspiration and obstruction bypass or overwhelm airway defences, allowing resistant or anaerobic organisms to establish. This is why prevention (aspiration precautions, VAP bundles, dental care) matters as much as antibiotics.',
  ],

  mechanism: {
    title: 'Defence failure + aspiration → resistant/anaerobic infection, cavitation',
    steps: [
      { id: 's1', label: 'HAP/VAP (≥48 h): Pseudomonas, S. aureus/MRSA, Gram-negatives', emphasis: 'key' },
      { id: 's2', label: 'Aspiration → right lower lobe/posterior segments, anaerobes', emphasis: 'key' },
      { id: 's3', label: 'Lung abscess = necrosis → cavity with air–fluid level, foul sputum', emphasis: 'key' },
      { id: 's4', label: 'Empyema = pus in pleural space (drain it)', emphasis: 'danger' },
      { id: 's5', label: 'Risk: impaired swallow/consciousness, poor dentition, obstruction' },
    ],
  },

  examFindings: [
    { sign: 'Pneumonia ≥48 h into admission with resistant Gram-negatives', mechanism: 'Hospital-acquired/ventilator-associated pneumonia', significance: 'key' },
    { sign: 'Right-lower-lobe infiltrate after a reduced level of consciousness', mechanism: 'Aspiration pneumonia (gravity-dependent, wider right bronchus)', significance: 'key' },
    { sign: 'Cavity with an air–fluid level + foul sputum', mechanism: 'Lung abscess (often anaerobic)', significance: 'key' },
    { sign: 'Low-glucose, low-pH, high-LDH pleural fluid', mechanism: 'Empyema (needs drainage)', significance: 'supportive' },
    { sign: 'Abscess in a patient with poor dentition', mechanism: 'Periodontal anaerobes aspirated', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The organisms typical of hospital-acquired pneumonia', meaning: 'Pseudomonas, S. aureus/MRSA, Klebsiella, Gram-negative bacilli' },
    { clue: 'The lung region favoured by aspiration', meaning: 'Right lower lobe / posterior segments (gravity + wider right bronchus)' },
    { clue: 'The radiological hallmark of a lung abscess', meaning: 'A cavity with an air–fluid level' },
    { clue: 'The pleural complication requiring drainage', meaning: 'Empyema (pus in the pleural space)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'HAP/VAP need broad, often anti-pseudomonal/anti-MRSA cover; aspiration/abscess need anaerobic cover (and drainage of an empyema) — see [[respiratory-tract-antibiotics]]. A post-obstructive abscess should prompt a search for tumour ([[non-small-cell-lung-carcinoma]]). Contrast community-acquired pneumonia in [[community-acquired-pneumonia]]; pleural fluid analysis is in [[pleural-effusion-pneumothorax-mesothelioma]].' },
  ],

  mnemonics: [
    { hook: 'Aspiration goes "down and to the right" (RLL, posterior segments)', expansion: ['Right bronchus wider/more vertical', 'Anaerobes, foul sputum'] },
    { hook: 'Abscess = "cavity + air-fluid level + putrid sputum"', expansion: ['Aspiration commonest cause', 'Also post-obstructive (tumour), S. aureus, Klebsiella'] },
  ],

  traps: [
    {
      questionCategory: 'Location of aspiration pneumonia',
      wrongInstinct: 'Aspiration pneumonia most often affects the left lower lobe',
      rightAnswer: 'Aspirated material preferentially enters the RIGHT lung (its main bronchus is wider, shorter and more vertical), lodging in gravity-dependent segments — the right lower lobe when upright and the posterior segments when supine',
      why: 'The anatomy of the right main bronchus makes the right lung the default target; predicting the location helps interpret the chest X-ray and anticipate abscess formation.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An alcohol-dependent man with poor dentition presents with weeks of fever, weight loss and copious foul-smelling sputum; chest X-ray shows a right-lower-lobe cavity with an air–fluid level. The diagnosis is:',
      options: [
        { id: 'a', text: 'Lobar pneumococcal pneumonia' },
        { id: 'b', text: 'Lung abscess (aspiration, anaerobic)' },
        { id: 'c', text: 'Pulmonary embolism' },
        { id: 'd', text: 'Sarcoidosis' },
      ],
      answerId: 'b',
      explanation: 'A cavity with an air–fluid level and foul (putrid) sputum in someone predisposed to aspiration (alcohol, poor dentition) indicates an anaerobic lung abscess, favouring gravity-dependent right-lung segments.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which organisms most characteristically cause hospital-acquired and ventilator-associated pneumonia?',
      options: [
        { id: 'a', text: 'Mycoplasma and Chlamydophila' },
        { id: 'b', text: 'Pseudomonas aeruginosa, Staphylococcus aureus (incl. MRSA) and Gram-negative bacilli' },
        { id: 'c', text: 'Streptococcus pneumoniae only' },
        { id: 'd', text: 'Respiratory viruses' },
      ],
      answerId: 'b',
      explanation: 'Nosocomial pneumonia (≥48 h after admission or intubation) is typically caused by more resistant organisms — Pseudomonas, S. aureus/MRSA and Gram-negative Enterobacteriaceae — mandating broad empiric therapy.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default hospitalAspirationPneumoniaAbscess;
