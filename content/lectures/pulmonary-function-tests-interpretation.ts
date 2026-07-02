import type { Lecture } from '../../lib/types';
import { PFT_PATTERNS } from '../../lib/figures';

export const pulmonaryFunctionTestsInterpretation: Lecture = {
  id: 'pulmonary-function-tests-interpretation',
  title: 'Interpreting Pulmonary Function Tests',
  system: 'respiratory',
  source: 'L4 — Pathology of Obstructive Lung Diseases',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L4 Obstructive Lung' },
    { kind: 'investigation', label: 'Spirometry' },
    { kind: 'exam', label: 'Obstructive vs restrictive' },
  ],

  highYield: [
    '**Pulmonary function tests classify lung disease into OBSTRUCTIVE and RESTRICTIVE patterns — and the single most important number is the FEV₁/FVC ratio.** FEV₁ = volume exhaled in the first second; FVC = total forced vital capacity. Reading them systematically turns the pathology of COPD/asthma and fibrosis into measurable physiology.',
    '**OBSTRUCTIVE pattern: a REDUCED FEV₁/FVC ratio (<0.7) with air trapping (↑TLC, ↑RV).** Airflow out is limited, so FEV₁ falls more than FVC. Causes: COPD, asthma, bronchiectasis, cystic fibrosis. **Bronchodilator REVERSIBILITY (≥12% and 200 mL rise in FEV₁) suggests asthma; largely fixed obstruction suggests COPD.**',
    '**RESTRICTIVE pattern: a NORMAL or INCREASED FEV₁/FVC ratio with reduced FVC and reduced TLC** (the lungs are small/stiff, so both volumes fall together). Causes are parenchymal (interstitial fibrosis) or extrapulmonary (obesity, kyphoscoliosis, neuromuscular weakness).',
    '**DLCO (diffusing capacity) separates causes within a pattern: it is LOW when the alveolar–capillary membrane is damaged (emphysema, interstitial lung disease) and NORMAL when it is intact (asthma; chest-wall/neuromuscular restriction).** So a restrictive pattern with a low DLCO points to parenchymal (ILD) disease, whereas a normal DLCO points to a chest-wall/neuromuscular cause.',
    '**The flow–volume loop adds shape information: obstructive disease scoops out (concave) the expiratory limb; restrictive disease gives a tall, narrow loop; upper-airway obstruction flattens the inspiratory and/or expiratory limbs.** A systematic read — ratio first, then volumes, then DLCO and reversibility — is the core diagnostic skill linking [[copd-emphysema-chronic-bronchitis]], [[asthma-bronchiectasis-pathology]] and [[pulmonary-fibrosis-pneumoconioses]].',
  ],

  mechanism: {
    title: 'FEV₁/FVC first: <0.7 obstructive vs normal/high + low volumes restrictive; DLCO refines',
    steps: [
      { id: 's1', label: 'FEV₁/FVC ratio is the key first step', emphasis: 'key' },
      { id: 's2', label: 'Obstructive: ↓FEV₁/FVC (<0.7), ↑TLC/RV (air trapping)', emphasis: 'key' },
      { id: 's3', label: 'Restrictive: normal/↑ ratio, ↓FVC + ↓TLC', emphasis: 'key' },
      { id: 's4', label: 'Reversibility (≥12% & 200 mL) = asthma vs fixed COPD' },
      { id: 's5', label: 'DLCO ↓ (parenchyma: emphysema/ILD) vs normal (asthma/chest wall)' },
    ],
  },

  examFindings: [
    { sign: 'Reduced FEV₁/FVC ratio (<0.7)', mechanism: 'Obstructive pattern (COPD, asthma)', significance: 'key' },
    { sign: 'Reduced FVC and TLC with a normal/high ratio', mechanism: 'Restrictive pattern', significance: 'key' },
    { sign: '≥12% and 200 mL FEV₁ improvement after a bronchodilator', mechanism: 'Reversible obstruction (asthma)', significance: 'key' },
    { sign: 'Low DLCO in a restrictive pattern', mechanism: 'Parenchymal (interstitial) disease', significance: 'supportive' },
    { sign: 'Normal DLCO in a restrictive pattern', mechanism: 'Chest-wall/neuromuscular restriction', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The first value to check on spirometry', meaning: 'The FEV₁/FVC ratio' },
    { clue: 'The ratio result defining obstruction', meaning: 'FEV₁/FVC < 0.7' },
    { clue: 'The threshold for bronchodilator reversibility', meaning: '≥12% and 200 mL rise in FEV₁ (asthma)' },
    { clue: 'The test separating parenchymal from chest-wall restriction', meaning: 'DLCO (low vs normal)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'PFT interpretation operationalises the obstructive/restrictive pathology across the block — obstruction ([[copd-emphysema-chronic-bronchitis]], [[asthma-bronchiectasis-pathology]], [[cystic-fibrosis]]) vs restriction ([[pulmonary-fibrosis-pneumoconioses]], [[sarcoidosis-granulomatous-lung]]); reversibility distinguishes asthma from COPD and DLCO localises the lesion. It is the objective test behind the clinical approach in [[respiratory-clinical-approach]].' },
  ],

  mnemonics: [
    { hook: 'Ratio first: "&lt;0.7 = Obstructive; normal/high + small lungs = Restrictive"', expansion: ['Obstructive: ↑TLC/RV', 'Restrictive: ↓FVC/↓TLC'] },
    { hook: 'DLCO "damaged membrane = low": emphysema/ILD low; asthma/chest-wall normal', expansion: ['Reversibility → asthma', 'Fixed → COPD'] },
  ],

  traps: [
    {
      questionCategory: 'Distinguishing obstructive from restrictive on spirometry',
      wrongInstinct: 'A low FEV₁ by itself means obstructive lung disease',
      rightAnswer: 'FEV₁ falls in BOTH patterns — it is the FEV₁/FVC RATIO that distinguishes them: a LOW ratio (<0.7) = obstructive, whereas a NORMAL/HIGH ratio with reduced FVC and TLC = restrictive',
      why: 'Reading FEV₁ alone conflates the two patterns; the ratio (and lung volumes) is what separates airflow limitation from a small, stiff lung, which have opposite differentials.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Spirometry shows a reduced FVC, a normal FEV₁/FVC ratio and a reduced total lung capacity. This pattern is:',
      options: [
        { id: 'a', text: 'Obstructive' },
        { id: 'b', text: 'Restrictive' },
        { id: 'c', text: 'Normal' },
        { id: 'd', text: 'Mixed with air trapping' },
      ],
      answerId: 'b',
      explanation: 'A restrictive pattern shows reduced lung volumes (FVC and TLC) with a preserved or increased FEV₁/FVC ratio, because both FEV₁ and FVC fall together. A reduced ratio would indicate obstruction.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A patient with a restrictive spirometry pattern has a LOW DLCO. This points to:',
      options: [
        { id: 'a', text: 'A chest-wall or neuromuscular cause' },
        { id: 'b', text: 'A parenchymal (interstitial lung) cause' },
        { id: 'c', text: 'Asthma' },
        { id: 'd', text: 'Normal lungs' },
      ],
      answerId: 'b',
      explanation: 'A reduced DLCO indicates damage to the alveolar–capillary membrane, so a restrictive pattern with low DLCO points to interstitial (parenchymal) disease; a normal DLCO in restriction suggests an extrapulmonary (chest-wall/neuromuscular) cause.',
      tests: 'investigation',
    },
  ],

  figures: [
    { title: 'Pulmonary function test patterns', svg: PFT_PATTERNS, caption: 'Obstructive vs restrictive spirometry, reversibility, DLCO and flow–volume loop shapes.' },
  ],
};

export default pulmonaryFunctionTestsInterpretation;
