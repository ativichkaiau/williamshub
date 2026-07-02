import type { Lecture } from '../../lib/types';
import { OBSTRUCTIVE_LUNG_DISEASE } from '../../lib/figures';

export const copdEmphysemaChronicBronchitis: Lecture = {
  id: 'copd-emphysema-chronic-bronchitis',
  title: 'COPD: Emphysema & Chronic Bronchitis',
  system: 'respiratory',
  source: 'L4 — Pathology of Obstructive Lung Diseases',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L4 Obstructive Lung' },
    { kind: 'disease', label: 'Emphysema' },
    { kind: 'exam', label: 'α1-antitrypsin' },
  ],

  highYield: [
    '**Obstructive lung diseases limit airflow OUT, defined by a reduced FEV₁/FVC ratio (<0.7) with air trapping (↑TLC, ↑RV).** COPD — the umbrella of emphysema and chronic bronchitis — is overwhelmingly caused by **cigarette smoking** and is largely irreversible (contrast asthma).',
    '**Emphysema is permanent destruction of alveolar walls distal to the terminal bronchiole**, reducing elastic recoil and gas-exchange surface. Loss of radial traction collapses small airways on expiration → air trapping. Clinically the "**pink puffer**": dyspnoea, pursed-lip breathing, barrel chest, relatively preserved oxygenation until late.',
    '**Two anatomical patterns pinpoint the cause:** **centriacinar (centrilobular) emphysema affects the upper lobes and is caused by smoking** (commonest); **panacinar emphysema affects the lower lobes and is caused by α1-antitrypsin deficiency** (an unopposed-protease disease — also causes liver cirrhosis). Smoking also inactivates α1-antitrypsin, tipping the protease–antiprotease balance.',
    '**Chronic bronchitis is a CLINICAL diagnosis: a productive cough for ≥3 months in ≥2 consecutive years.** Pathology shows **mucous gland hyperplasia (increased Reid index), goblet-cell metaplasia and small-airway inflammation**. Clinically the "**blue bloater**": hypoxaemia, hypercapnia, cyanosis, cor pulmonale and oedema.',
    '**The unifying mechanism is a protease–antiprotease and oxidant–antioxidant imbalance from smoke:** neutrophil/macrophage elastases digest the alveolar wall when α1-antitrypsin is deficient or inactivated. Complications of COPD include **acute exacerbations (often infective), pulmonary hypertension, cor pulmonale, secondary polycythaemia and pneumothorax**.',
  ],

  mechanism: {
    title: 'Smoke → protease excess → alveolar destruction / mucous hyperplasia',
    steps: [
      { id: 's1', label: 'Obstruction = ↓FEV₁/FVC (<0.7), air trapping (↑TLC/RV)', emphasis: 'key' },
      { id: 's2', label: 'Emphysema: alveolar wall destruction → ↓recoil ("pink puffer")', emphasis: 'key' },
      { id: 's3', label: 'Centriacinar/upper = smoking; panacinar/lower = α1-AT deficiency', emphasis: 'key' },
      { id: 's4', label: 'Chronic bronchitis (clinical): cough ≥3 mo × 2 yr; ↑Reid index ("blue bloater")' },
      { id: 's5', label: 'Protease–antiprotease imbalance → cor pulmonale, exacerbations', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'FEV₁/FVC < 0.7 that does not fully reverse with a bronchodilator', mechanism: 'Fixed airflow obstruction (COPD)', significance: 'key' },
    { sign: 'Upper-lobe centriacinar emphysema in a smoker', mechanism: 'Smoking-induced protease injury', significance: 'key' },
    { sign: 'Lower-lobe panacinar emphysema + liver disease in a young non-smoker', mechanism: 'α1-antitrypsin deficiency', significance: 'key' },
    { sign: 'Productive cough ≥3 months for 2 years, mucous gland hyperplasia', mechanism: 'Chronic bronchitis (↑Reid index)', significance: 'key' },
    { sign: 'Cyanosis, oedema, raised JVP in advanced COPD', mechanism: 'Cor pulmonale from chronic hypoxic pulmonary vasoconstriction', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The spirometric hallmark of obstruction', meaning: 'Reduced FEV₁/FVC ratio (<0.7)' },
    { clue: 'The emphysema pattern caused by smoking', meaning: 'Centriacinar (upper lobe)' },
    { clue: 'The deficiency causing panacinar emphysema + cirrhosis', meaning: 'α1-antitrypsin deficiency' },
    { clue: 'The definition of chronic bronchitis', meaning: 'Productive cough ≥3 months in ≥2 consecutive years (clinical)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'COPD is managed with smoking cessation, bronchodilators (LAMA/LABA) ± ICS, and O₂ for chronic hypoxaemia — see [[asthma-copd-pharmacology]]. Distinguish the reversible eosinophilic disease of [[asthma-bronchiectasis-pathology]]. Chronic hypoxia drives the pulmonary hypertension/cor pulmonale of [[ards-pulmonary-hypertension-atelectasis]]; exacerbations are often infective ([[community-acquired-pneumonia]]).' },
  ],

  mnemonics: [
    { hook: 'Emphysema types: "Centri = Cigarettes (upper); Pan = Protease deficiency α1-AT (lower)"', expansion: ['Centriacinar = upper lobe, smoking', 'Panacinar = lower lobe, α1-antitrypsin'] },
    { hook: 'Pink Puffer (emphysema) vs Blue Bloater (chronic bronchitis)', expansion: ['Puffer: dyspnoea, thin, pursed lips', 'Bloater: cyanosis, oedema, cor pulmonale'] },
  ],

  traps: [
    {
      questionCategory: 'Diagnosing chronic bronchitis',
      wrongInstinct: 'Chronic bronchitis is diagnosed by lung biopsy showing mucous gland hyperplasia',
      rightAnswer: 'Chronic bronchitis is a CLINICAL diagnosis — a productive cough for ≥3 months in ≥2 consecutive years; the mucous gland hyperplasia (raised Reid index) is the pathological correlate, not the diagnostic criterion',
      why: 'Unlike emphysema (an anatomical/structural diagnosis), chronic bronchitis is defined by symptom duration; knowing this distinction prevents mislabeling and unnecessary biopsy.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 40-year-old non-smoker has lower-lobe panacinar emphysema and early cirrhosis. The most likely underlying cause is:',
      options: [
        { id: 'a', text: 'Centriacinar emphysema from smoking' },
        { id: 'b', text: 'α1-antitrypsin deficiency' },
        { id: 'c', text: 'Chronic asthma' },
        { id: 'd', text: 'Cystic fibrosis' },
      ],
      answerId: 'b',
      explanation: 'Panacinar emphysema in the lower lobes of a young non-smoker, together with liver disease, is the classic presentation of α1-antitrypsin deficiency — unopposed protease activity destroys alveolar walls and misfolded protein damages the liver.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which finding defines airflow obstruction on spirometry?',
      options: [
        { id: 'a', text: 'Reduced FVC with a normal or increased FEV₁/FVC ratio' },
        { id: 'b', text: 'Reduced FEV₁/FVC ratio (<0.7)' },
        { id: 'c', text: 'Increased diffusing capacity' },
        { id: 'd', text: 'Decreased total lung capacity' },
      ],
      answerId: 'b',
      explanation: 'Obstruction is defined by a reduced FEV₁/FVC ratio (<0.7) with air trapping (increased TLC/RV). A reduced FVC with a preserved ratio and reduced TLC instead indicates a restrictive pattern.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Obstructive lung diseases', svg: OBSTRUCTIVE_LUNG_DISEASE, caption: 'Emphysema (centriacinar vs panacinar), chronic bronchitis, asthma and bronchiectasis with the obstructive spirometry pattern.' },
  ],
};

export default copdEmphysemaChronicBronchitis;
