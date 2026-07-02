import type { Lecture } from '../../lib/types';
import { LUNG_VOLUMES } from '../../lib/figures';

export const lungVolumesVentilation: Lecture = {
  id: 'lung-volumes-ventilation',
  title: 'Lung Volumes, Capacities & Alveolar Ventilation',
  system: 'respiratory',
  source: 'L4 — Breathing & Ventilation',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L4 Breathing & Ventilation' },
    { kind: 'mechanism', label: 'Volumes → ventilation' },
    { kind: 'exam', label: 'FEV1/FVC · dead space' },
  ],

  highYield: [
    '**Four lung volumes (do not overlap):** **tidal volume (TV ~500 mL)** — a normal breath; **inspiratory reserve volume (IRV)** — extra you can inhale; **expiratory reserve volume (ERV)** — extra you can exhale; **residual volume (RV ~1200 mL)** — air left after maximal expiration (**cannot be exhaled**, keeps alveoli open).',
    '**Capacities are sums of volumes:** **Vital capacity (VC) = IRV + TV + ERV** (max you can move); **Inspiratory capacity (IC) = TV + IRV**; **Functional residual capacity (FRC) = ERV + RV** (air remaining after a normal breath); **Total lung capacity (TLC) = all four**.',
    '**Spirometry cannot measure RV, FRC, or TLC** (they include the un-exhalable residual volume) — these need **helium dilution or body plethysmography**. Spirometry measures TV, IRV, ERV, VC, and the timed flows.',
    '**Obstructive vs restrictive — the key spirometry pattern.** **Obstructive (asthma, COPD):** airflow limitation → **FEV₁/FVC ratio < 0.7**, air trapping (↑RV, ↑TLC). **Restrictive (fibrosis, chest-wall disease):** reduced expansion → **ALL volumes ↓** but **FEV₁/FVC normal or high**. FEV₁ = forced expiratory volume in 1 second; FVC = forced vital capacity.',
    '**Alveolar ventilation is what counts for gas exchange, not just total (minute) ventilation.** **Minute ventilation = TV × respiratory rate**; but **alveolar ventilation = (TV − dead space) × rate.** Because dead space (~150 mL) is fixed, **rapid shallow breathing wastes ventilation** (a bigger fraction is dead space) — deep, slower breaths are more efficient.',
  ],

  mechanism: {
    title: 'Volumes → capacities → effective (alveolar) ventilation',
    steps: [
      { id: 's1', label: '4 volumes: TV, IRV, ERV, RV (RV can\'t be exhaled)', emphasis: 'key' },
      { id: 's2', label: 'Capacities = sums: VC, IC, FRC (=ERV+RV), TLC', emphasis: 'key' },
      { id: 's3', label: 'Spirometry can\'t measure RV/FRC/TLC (need He dilution)' },
      { id: 's4', label: 'Obstructive FEV₁/FVC <0.7; restrictive all ↓, ratio normal/high', emphasis: 'key' },
      { id: 's5', label: 'Alveolar ventilation = (TV − dead space) × rate', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'FEV₁/FVC < 0.7', mechanism: 'Obstructive pattern (asthma, COPD) — air trapping', significance: 'key' },
    { sign: 'All volumes reduced, FEV₁/FVC normal/high', mechanism: 'Restrictive pattern (fibrosis)', significance: 'key' },
    { sign: 'Residual volume cannot be measured by spirometry', mechanism: 'It is not exhaled (needs helium dilution/plethysmography)', significance: 'supportive' },
    { sign: 'Rapid shallow breathing → poor gas exchange', mechanism: 'Higher dead-space fraction lowers alveolar ventilation', significance: 'key' },
    { sign: 'FRC = ERV + RV', mechanism: 'Air remaining after a normal (tidal) expiration', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Ratio distinguishing obstructive from restrictive disease', meaning: 'FEV₁/FVC (<0.7 = obstructive)' },
    { clue: 'Volume that cannot be exhaled', meaning: 'Residual volume (RV)' },
    { clue: 'Formula for effective (alveolar) ventilation', meaning: '(TV − dead space) × respiratory rate' },
    { clue: 'Method to measure functional residual capacity', meaning: 'Helium dilution / body plethysmography' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Spirometry is the core pulmonary function test (obstructive vs restrictive); alveolar-ventilation physiology guides ventilator settings and explains why breathing pattern matters. Dead space source: [[airway-conducting-respiratory-zones]]; the mechanics that move these volumes: [[respiratory-mechanics-compliance]].' },
  ],

  mnemonics: [
    { hook: 'Capacities = combos: "VC=IRV+TV+ERV; FRC=ERV+RV; TLC=all"', expansion: ['Any capacity = ≥2 volumes'] },
    { hook: 'Obstructive = low FEV₁/FVC (<0.7); Restrictive = everything low, ratio OK', expansion: ['Asthma/COPD vs fibrosis'] },
  ],

  traps: [
    {
      questionCategory: 'What spirometry can measure',
      wrongInstinct: 'Spirometry can directly measure total lung capacity and residual volume',
      rightAnswer: 'Spirometry CANNOT measure RV, FRC, or TLC (they contain the un-exhalable residual volume) — these need helium dilution or plethysmography',
      why: 'Spirometry only measures air actually moved; the residual volume never leaves the lung, so any capacity containing it can\'t be spirometrically measured.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient has FEV₁/FVC of 0.55 with an increased residual volume. This pattern indicates:',
      options: [
        { id: 'a', text: 'A restrictive lung disease' },
        { id: 'b', text: 'An obstructive lung disease (e.g. asthma/COPD)' },
        { id: 'c', text: 'Normal lungs' },
        { id: 'd', text: 'Pure dead-space ventilation' },
      ],
      answerId: 'b',
      explanation: 'A reduced FEV₁/FVC (<0.7) with air trapping (↑RV) is the obstructive pattern (asthma, COPD). Restrictive disease reduces all volumes but preserves/raises the ratio.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Alveolar ventilation is best increased (for the same minute ventilation) by:',
      options: [
        { id: 'a', text: 'Rapid, shallow breathing' },
        { id: 'b', text: 'Slower, deeper breaths that reduce the dead-space fraction' },
        { id: 'c', text: 'Breath-holding' },
        { id: 'd', text: 'Increasing residual volume' },
      ],
      answerId: 'b',
      explanation: 'Because dead space is fixed (~150 mL), deeper (larger tidal volume) breaths deliver a greater fraction of each breath to alveoli, so alveolar ventilation = (TV − dead space) × rate improves compared with rapid shallow breathing.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Lung volumes & capacities', svg: LUNG_VOLUMES, caption: 'TV/IRV/ERV/RV volumes; capacities VC, IC, FRC, TLC as sums; RV/FRC/TLC not spirometrically measurable; obstructive vs restrictive.' },
  ],
};

export default lungVolumesVentilation;
