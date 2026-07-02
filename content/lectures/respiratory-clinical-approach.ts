import type { Lecture } from '../../lib/types';

export const respiratoryClinicalApproach: Lecture = {
  id: 'respiratory-clinical-approach',
  title: 'Clinical Approach to the Respiratory Patient',
  system: 'respiratory',
  source: 'L19 — Early Clinical Exposure (HRS-II)',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L19 Early Clinical Exposure' },
    { kind: 'mechanism', label: 'History & examination' },
    { kind: 'exam', label: 'Clinical signs' },
  ],

  highYield: [
    '**The respiratory assessment integrates the block\'s pathology with the bedside: a focused history, then inspection → palpation → percussion → auscultation.** The cardinal symptoms are **cough, sputum, haemoptysis, dyspnoea, wheeze and chest pain** — each with a differential that the history narrows.',
    '**History pointers: sputum character** (purulent = infection, rusty = pneumococcus, copious/foul = bronchiectasis/abscess, pink frothy = pulmonary oedema); **haemoptysis** (TB, cancer, PE, bronchiectasis); **dyspnoea pattern** (orthopnoea/PND = cardiac; episodic wheeze = asthma); plus **smoking, occupational/asbestos exposure, travel/TB contact, and immune status** — the risk factors that reshaped every pathology in this block.',
    '**Examination signs to recognise: finger clubbing** (bronchiectasis, fibrosis, lung cancer), **cyanosis, tachypnoea and accessory-muscle use**; and the classic **consolidation set — dullness to percussion, bronchial breathing, increased vocal resonance and crackles.** Contrast **effusion (stony dullness, absent breath sounds, reduced resonance)** and **pneumothorax (hyper-resonance, absent breath sounds)**.',
    '**Match sign clusters to pathology:** consolidation → pneumonia; stony dullness → effusion; hyper-resonance + tracheal deviation + hypotension → tension pneumothorax; fine "velcro" crackles + clubbing → fibrosis; expiratory wheeze → obstruction (asthma/COPD). **Oxygen saturation, peak flow/spirometry, chest X-ray and ABG** are the first-line adjuncts.',
    '**The reasoning goal is to convert symptoms + signs + a chest X-ray into a working diagnosis and severity assessment** (e.g. CURB-65 for pneumonia, PEF for asthma), then order targeted tests. This ties the whole HRS-2 block — infection, obstruction/restriction, vascular disease and neoplasia — back to the patient in front of you.',
  ],

  mechanism: {
    title: 'History + inspect/palpate/percuss/auscultate → sign clusters → diagnosis',
    steps: [
      { id: 's1', label: 'Cardinal symptoms: cough, sputum, haemoptysis, dyspnoea, wheeze, chest pain', emphasis: 'key' },
      { id: 's2', label: 'Risk factors: smoking, occupation/asbestos, TB contact, immune status', emphasis: 'key' },
      { id: 's3', label: 'Consolidation: dull, bronchial breathing, ↑vocal resonance, crackles', emphasis: 'key' },
      { id: 's4', label: 'Effusion (stony dull, absent sounds) vs pneumothorax (hyper-resonant)', emphasis: 'key' },
      { id: 's5', label: 'Adjuncts: SpO₂, spirometry/PEF, CXR, ABG → diagnosis + severity' },
    ],
  },

  examFindings: [
    { sign: 'Dullness + bronchial breathing + increased vocal resonance + crackles', mechanism: 'Consolidation (pneumonia)', significance: 'key' },
    { sign: 'Stony dullness with absent breath sounds', mechanism: 'Pleural effusion', significance: 'key' },
    { sign: 'Hyper-resonance + absent breath sounds ± tracheal deviation', mechanism: 'Pneumothorax (tension if deviated + shocked)', significance: 'key' },
    { sign: 'Finger clubbing', mechanism: 'Bronchiectasis, pulmonary fibrosis or lung cancer', significance: 'supportive' },
    { sign: 'Fine "velcro" inspiratory crackles + clubbing', mechanism: 'Interstitial pulmonary fibrosis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The sign cluster of lung consolidation', meaning: 'Dullness, bronchial breathing, increased vocal resonance, crackles' },
    { clue: 'The percussion note over a pleural effusion', meaning: 'Stony dullness (with absent breath sounds)' },
    { clue: 'The bedside adjuncts in a breathless patient', meaning: 'SpO₂, spirometry/peak flow, chest X-ray, ABG' },
    { clue: 'The severity score for community-acquired pneumonia', meaning: 'CURB-65' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The clinical method turns the block\'s pathology into diagnosis and severity: consolidation → [[community-acquired-pneumonia]], wheeze → [[asthma-bronchiectasis-pathology]], effusion/pneumothorax → [[pleural-effusion-pneumothorax-mesothelioma]], clubbing/haemoptysis → cancer ([[non-small-cell-lung-carcinoma]]) or TB ([[tuberculosis-pathology]]). It is reinforced by the chest X-ray signs in [[chest-radiograph-interpretation]] and drives targeted treatment.' },
  ],

  mnemonics: [
    { hook: 'Consolidation = "Dull, Bronchial, Resonant (vocal), Crackles"', expansion: ['Effusion = stony dull, absent sounds', 'Pneumothorax = hyper-resonant, absent sounds'] },
    { hook: 'Sputum clues: "rusty = pneumococcus, foul = abscess, pink frothy = oedema"', expansion: ['Haemoptysis → TB/cancer/PE/bronchiectasis', 'Clubbing → bronchiectasis/fibrosis/cancer'] },
  ],

  traps: [
    {
      questionCategory: 'Distinguishing effusion from consolidation on examination',
      wrongInstinct: 'Any dull percussion note with reduced breath sounds means pneumonia (consolidation)',
      rightAnswer: 'CONSOLIDATION gives dullness with INCREASED vocal resonance and BRONCHIAL breathing, whereas a pleural EFFUSION gives stony dullness with ABSENT/reduced breath sounds and reduced vocal resonance — the breath sounds and vocal resonance separate them',
      why: 'Both are dull to percussion, but air-filled consolidated lung transmits sound (bronchial breathing, increased resonance) while fluid dampens it — the difference in transmitted sound is the discriminator that changes management.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'On examining a febrile patient you find dullness to percussion, bronchial breath sounds, increased vocal resonance and crackles over the right base. This sign cluster indicates:',
      options: [
        { id: 'a', text: 'Pleural effusion' },
        { id: 'b', text: 'Lung consolidation (pneumonia)' },
        { id: 'c', text: 'Pneumothorax' },
        { id: 'd', text: 'Normal lung' },
      ],
      answerId: 'b',
      explanation: 'Increased vocal resonance and bronchial breathing over a dull area indicate consolidated (air-filled but solidified) lung transmitting sound — the signs of pneumonia. An effusion would instead give absent breath sounds and reduced vocal resonance.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which examination finding best distinguishes a large pleural effusion from lobar consolidation?',
      options: [
        { id: 'a', text: 'Both cause dullness, but an effusion gives absent breath sounds and reduced vocal resonance, whereas consolidation gives bronchial breathing and increased vocal resonance' },
        { id: 'b', text: 'Only consolidation causes any dullness' },
        { id: 'c', text: 'An effusion causes hyper-resonance' },
        { id: 'd', text: 'Consolidation causes tracheal deviation away' },
      ],
      answerId: 'a',
      explanation: 'Both are dull to percussion, but fluid (effusion) dampens sound transmission (absent breath sounds, reduced vocal resonance), whereas consolidated lung transmits it (bronchial breathing, increased vocal resonance) — the key discriminator.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default respiratoryClinicalApproach;
