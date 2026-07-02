import type { Lecture } from '../../lib/types';
import { PNEUMONIA_PATTERNS } from '../../lib/figures';

export const pneumoniaPathologyPatterns: Lecture = {
  id: 'pneumonia-pathology-patterns',
  title: 'Pneumonia: Morphological Patterns',
  system: 'respiratory',
  source: 'L10 — Pathology of Pulmonary Infection',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L10 Pulmonary Infection Path' },
    { kind: 'mechanism', label: 'Lobar stages' },
    { kind: 'exam', label: 'Bronchopneumonia' },
  ],

  highYield: [
    '**Pneumonia is inflammation of the lung parenchyma, classified morphologically as lobar, bronchopneumonia (lobular) or interstitial.** These patterns predict the organism and complications and are the pathology counterpart to the clinical picture in [[community-acquired-pneumonia]].',
    '**Lobar pneumonia (classically Streptococcus pneumoniae) consolidates an entire lobe and passes through four classic stages: (1) congestion, (2) red hepatisation (RBCs + neutrophils + fibrin, firm/red), (3) grey hepatisation (RBC breakdown, fibrinosuppurative), and (4) resolution** (enzymatic digestion, restoration of aeration). "Hepatisation" means the lung is as solid as liver.',
    '**Bronchopneumonia is patchy, multifocal consolidation centred on bronchioles**, often bilateral and basal, with a **neutrophilic suppurative exudate filling airspaces**. It is typical of hospitalised, elderly and debilitated patients and organisms such as Staphylococcus, Klebsiella, Haemophilus and Pseudomonas — the pattern that more often forms abscesses.',
    '**Interstitial (atypical) pneumonia inflames the ALVEOLAR WALLS/interstitium rather than filling airspaces**, giving a mononuclear infiltrate and relatively little exudate; it is caused by Mycoplasma, viruses, Chlamydophila and Legionella. Radiographically it is diffuse/reticular ("looks worse than the patient").',
    '**Complications of pneumonia are the exam favourites: abscess formation (necrotising organisms — S. aureus, Klebsiella, anaerobes), empyema (pus in the pleural space), organisation (fibrous scarring/"carnification"), and bacteraemic dissemination.** The morphology (which pattern, whether necrotising) predicts which complication to anticipate.',
  ],

  mechanism: {
    title: 'Lobar (staged) vs bronchopneumonia (patchy) vs interstitial (walls)',
    steps: [
      { id: 's1', label: 'Lobar: whole-lobe consolidation; 4 stages (congestion→red→grey→resolution)', emphasis: 'key' },
      { id: 's2', label: 'Bronchopneumonia: patchy, bronchiolocentric, neutrophilic; abscess-prone', emphasis: 'key' },
      { id: 's3', label: 'Interstitial/atypical: alveolar-wall mononuclear inflammation, little exudate', emphasis: 'key' },
      { id: 's4', label: '"Hepatisation" = lung as solid as liver (red then grey)' },
      { id: 's5', label: 'Complications: abscess, empyema, organisation, bacteraemia', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Whole-lobe consolidation progressing red → grey hepatisation', mechanism: 'Lobar pneumonia (S. pneumoniae)', significance: 'key' },
    { sign: 'Patchy bilateral basal airspace consolidation, neutrophilic', mechanism: 'Bronchopneumonia', significance: 'key' },
    { sign: 'Alveolar-wall (interstitial) mononuclear inflammation', mechanism: 'Atypical/viral (interstitial) pneumonia', significance: 'key' },
    { sign: 'Necrotising consolidation forming a cavity', mechanism: 'Abscess (S. aureus, Klebsiella, anaerobes)', significance: 'supportive' },
    { sign: 'Loculated pus in the pleural space', mechanism: 'Empyema complicating pneumonia', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The four stages of lobar pneumonia', meaning: 'Congestion → red hepatisation → grey hepatisation → resolution' },
    { clue: 'The pneumonia pattern that is patchy and bronchiolocentric', meaning: 'Bronchopneumonia (lobular)' },
    { clue: 'The pattern inflaming alveolar walls with little exudate', meaning: 'Interstitial (atypical/viral) pneumonia' },
    { clue: 'The complication of a necrotising pneumonia', meaning: 'Lung abscess (± empyema)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The morphological pattern maps onto the clinical organisms and management of [[community-acquired-pneumonia]] and [[hospital-aspiration-pneumonia-abscess]]. Caseating granulomatous "pneumonia" is TB ([[tuberculosis-pathology]]); diffuse alveolar damage is a distinct acute injury ([[ards-pulmonary-hypertension-atelectasis]]). Recognising the pattern predicts complications (abscess, empyema, organisation).' },
  ],

  mnemonics: [
    { hook: 'Lobar stages: "Congestion, Red, Grey, Resolution" (CRGR)', expansion: ['Hepatisation = solid as liver', 'Red = RBC/fibrin; Grey = RBC breakdown/pus'] },
    { hook: 'Pattern → organism: "Lobar = pneumococcus; Broncho = Staph/Klebsiella; Interstitial = atypical/viral"', expansion: ['Broncho = patchy, abscess-prone', 'Interstitial = walls, little exudate'] },
  ],

  traps: [
    {
      questionCategory: 'Meaning of "hepatisation"',
      wrongInstinct: 'Hepatisation in lobar pneumonia implies the infection has spread to the liver',
      rightAnswer: 'Hepatisation describes the LUNG becoming as firm and solid as liver tissue during lobar pneumonia (red hepatisation = RBCs/fibrin; grey hepatisation = RBC breakdown with fibrinosuppurative exudate) — it has nothing to do with the liver',
      why: 'The term is a gross-pathology analogy for consolidation texture; misreading it as hepatic spread confuses a local lung-staging concept with dissemination.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which sequence correctly lists the classic stages of lobar pneumonia?',
      options: [
        { id: 'a', text: 'Congestion → red hepatisation → grey hepatisation → resolution' },
        { id: 'b', text: 'Grey hepatisation → red hepatisation → congestion → resolution' },
        { id: 'c', text: 'Resolution → congestion → hepatisation → necrosis' },
        { id: 'd', text: 'Congestion → caseation → cavitation → healing' },
      ],
      answerId: 'a',
      explanation: 'Lobar pneumonia classically evolves through congestion, red hepatisation (RBCs, fibrin, neutrophils), grey hepatisation (RBC breakdown, fibrinosuppurative), and finally resolution as exudate is enzymatically cleared.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patchy, bilateral, bronchiolocentric neutrophilic consolidation in an elderly, debilitated patient describes:',
      options: [
        { id: 'a', text: 'Lobar pneumonia' },
        { id: 'b', text: 'Bronchopneumonia' },
        { id: 'c', text: 'Interstitial pneumonia' },
        { id: 'd', text: 'Caseating granuloma' },
      ],
      answerId: 'b',
      explanation: 'Bronchopneumonia is patchy, multifocal consolidation centred on bronchioles with a suppurative neutrophilic exudate, typical of debilitated/hospitalised patients and organisms such as Staphylococcus and Klebsiella; it is more prone to abscess formation.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Patterns of pneumonia', svg: PNEUMONIA_PATTERNS, caption: 'Lobar (staged consolidation) vs bronchopneumonia (patchy) vs interstitial, with organisms and complications.' },
  ],
};

export default pneumoniaPathologyPatterns;
