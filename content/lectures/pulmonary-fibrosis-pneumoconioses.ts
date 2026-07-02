import type { Lecture } from '../../lib/types';
import { RESTRICTIVE_ILD } from '../../lib/figures';

export const pulmonaryFibrosisPneumoconioses: Lecture = {
  id: 'pulmonary-fibrosis-pneumoconioses',
  title: 'Pulmonary Fibrosis & Pneumoconioses',
  system: 'respiratory',
  source: 'L5 — Pathology of Restrictive Lung Diseases',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L5 Restrictive Lung' },
    { kind: 'disease', label: 'IPF / UIP' },
    { kind: 'exam', label: 'Asbestos' },
  ],

  highYield: [
    '**Restrictive lung disease means stiff lungs that are hard to inflate: reduced FVC and TLC with a NORMAL or increased FEV₁/FVC ratio** (both volumes fall together). Interstitial (parenchymal) causes scar the alveolar walls; extrapulmonary causes (obesity, kyphoscoliosis, neuromuscular weakness) restrict from outside.',
    '**Idiopathic pulmonary fibrosis (IPF) shows the usual interstitial pneumonia (UIP) pattern: patchy, subpleural, basal fibrosis with fibroblast foci, HONEYCOMB change and "temporal heterogeneity"** (old scar next to normal lung). It presents in older adults with progressive dyspnoea, a dry cough, **fine "velcro" crackles and clubbing**, and has a poor prognosis.',
    '**Pneumoconioses are fibrosing diseases from inhaled inorganic dusts:** **coal** (anthracosis → progressive massive fibrosis), **silica** (silicotic nodules, upper lobes, **eggshell-calcified hilar nodes, and increased TB risk**), and **asbestos** (lower lobes). The fibrosis reflects macrophage ingestion of dust and release of fibrogenic mediators.',
    '**Asbestos exposure has the widest fingerprint: pleural plaques (benign markers of exposure), ferruginous (asbestos) bodies, interstitial fibrosis (asbestosis), and cancer.** Crucially, asbestos causes **bronchogenic carcinoma MORE commonly than mesothelioma**, and smoking multiplies the lung-cancer risk synergistically.',
    '**Hypersensitivity pneumonitis is an immune reaction to inhaled ORGANIC antigens** (farmer\'s lung — thermophilic actinomycetes; bird-fancier\'s lung), giving bronchiolocentric lymphocytic inflammation with loose non-caseating granulomas; it is reversible early if exposure stops but fibroses if chronic. All these produce a restrictive pattern with reduced diffusing capacity (DLCO).',
  ],

  mechanism: {
    title: 'Alveolar-wall scarring → stiff lungs (↓FVC, ↓TLC, normal ratio, ↓DLCO)',
    steps: [
      { id: 's1', label: 'Restrictive = ↓FVC/↓TLC, FEV₁/FVC normal or ↑, ↓DLCO', emphasis: 'key' },
      { id: 's2', label: 'IPF = UIP: subpleural/basal fibrosis, honeycomb, fibroblast foci', emphasis: 'key' },
      { id: 's3', label: 'Coal → PMF; silica → nodules + ↑TB; asbestos → lower-lobe fibrosis', emphasis: 'key' },
      { id: 's4', label: 'Asbestos → bronchogenic carcinoma > mesothelioma (smoking synergy)', emphasis: 'danger' },
      { id: 's5', label: 'Hypersensitivity pneumonitis = organic antigen, bronchiolocentric, reversible early' },
    ],
  },

  examFindings: [
    { sign: 'Basal, subpleural honeycomb fibrosis with fibroblast foci', mechanism: 'UIP pattern of idiopathic pulmonary fibrosis', significance: 'key' },
    { sign: 'Fine "velcro" inspiratory crackles + clubbing', mechanism: 'Interstitial fibrosis', significance: 'key' },
    { sign: 'Pleural plaques + ferruginous bodies', mechanism: 'Asbestos exposure', significance: 'key' },
    { sign: 'Upper-lobe nodules + eggshell hilar node calcification', mechanism: 'Silicosis (with increased TB susceptibility)', significance: 'supportive' },
    { sign: 'Reduced DLCO with preserved FEV₁/FVC ratio', mechanism: 'Interstitial (parenchymal) restriction', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The spirometry pattern of restrictive disease', meaning: 'Reduced FVC and TLC with normal/increased FEV₁/FVC ratio' },
    { clue: 'The histological pattern of IPF', meaning: 'Usual interstitial pneumonia (UIP) — patchy subpleural fibrosis + honeycomb' },
    { clue: 'The commonest asbestos-related malignancy', meaning: 'Bronchogenic carcinoma (more common than mesothelioma)' },
    { clue: 'The pneumoconiosis that increases tuberculosis risk', meaning: 'Silicosis' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'IPF has limited options (antifibrotics — pirfenidone/nintedanib; O₂; transplant); pneumoconioses are prevented by exposure control; hypersensitivity pneumonitis needs antigen avoidance. Contrast the granulomatous restrictive disease of [[sarcoidosis-granulomatous-lung]] and the acute injury (ARDS) in [[ards-pulmonary-hypertension-atelectasis]]. Asbestos-related pleural disease/mesothelioma: [[pleural-effusion-pneumothorax-mesothelioma]].' },
  ],

  mnemonics: [
    { hook: 'Restrictive spirometry: "everything down, ratio up" (↓FVC, ↓TLC, ↑FEV₁/FVC)', expansion: ['↓DLCO in parenchymal disease', 'IPF = UIP, honeycomb, basal'] },
    { hook: 'Pneumoconioses by lobe: "Coal/Silica UP, Asbestos DOWN"', expansion: ['Silica → eggshell nodes + ↑TB', 'Asbestos → plaques + bronchogenic ca > mesothelioma'] },
  ],

  traps: [
    {
      questionCategory: 'Asbestos-related cancer risk',
      wrongInstinct: 'Asbestos exposure most commonly causes mesothelioma',
      rightAnswer: 'Asbestos causes BRONCHOGENIC (lung) carcinoma more commonly than mesothelioma; mesothelioma is the more SPECIFIC but less common tumour, and smoking multiplies the lung-cancer risk',
      why: 'Mesothelioma is the "signature" asbestos tumour, but in absolute numbers bronchogenic carcinoma is more frequent — and the smoking synergy makes lung cancer the bigger threat to an asbestos-exposed smoker.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 65-year-old has progressive dyspnoea, dry cough, clubbing and basal "velcro" crackles; CT shows subpleural honeycombing. Spirometry most likely shows:',
      options: [
        { id: 'a', text: 'Reduced FEV₁/FVC ratio with increased TLC' },
        { id: 'b', text: 'Reduced FVC and TLC with a normal or increased FEV₁/FVC ratio' },
        { id: 'c', text: 'Normal spirometry' },
        { id: 'd', text: 'Increased DLCO' },
      ],
      answerId: 'b',
      explanation: 'This is idiopathic pulmonary fibrosis (UIP pattern), a restrictive disease: FVC and TLC fall together, the FEV₁/FVC ratio is preserved or increased, and DLCO is reduced.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which pneumoconiosis is classically associated with upper-lobe nodules, eggshell calcification of hilar nodes, and an increased risk of tuberculosis?',
      options: [
        { id: 'a', text: 'Asbestosis' },
        { id: 'b', text: 'Silicosis' },
        { id: 'c', text: 'Coal worker\'s pneumoconiosis' },
        { id: 'd', text: 'Berylliosis' },
      ],
      answerId: 'b',
      explanation: 'Silicosis produces upper-lobe silicotic nodules and eggshell-calcified hilar lymph nodes, and silica impairs macrophage function, increasing susceptibility to tuberculosis.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Restrictive interstitial lung disease', svg: RESTRICTIVE_ILD, caption: 'IPF/UIP, pneumoconioses (coal/silica/asbestos), sarcoidosis and hypersensitivity pneumonitis with the restrictive pattern.' },
  ],
};

export default pulmonaryFibrosisPneumoconioses;
