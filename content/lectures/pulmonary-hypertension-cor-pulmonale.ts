import type { Lecture } from '../../lib/types';

export const pulmonaryHypertensionCorPulmonale: Lecture = {
  id: 'pulmonary-hypertension-cor-pulmonale',
  title: 'Pulmonary Hypertension & Cor Pulmonale',
  system: 'respiratory',
  source: 'L11 — Ventilation & Circulatory Disorders of the Lung',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L11 Circulatory Lung' },
    { kind: 'disease', label: 'Pulmonary hypertension' },
    { kind: 'exam', label: 'WHO groups & cor pulmonale' },
  ],

  highYield: [
    '**Pulmonary hypertension (PH) is a mean pulmonary arterial pressure ≥20–25 mmHg — abnormally high pressure in the normally LOW-pressure pulmonary circuit.** Because the right ventricle is thin-walled and built for low afterload, sustained PH strains and eventually fails it (cor pulmonale). PH is grouped by cause into five WHO categories.',
    'The five WHO groups: (1) pulmonary ARTERIAL hypertension (idiopathic/heritable — BMPR2, connective-tissue disease, drugs; plexiform arterial lesions); (2) LEFT HEART disease (the commonest cause — back-pressure from a failing/valvular left heart); (3) chronic LUNG disease/hypoxia (COPD, ILD, OSA — hypoxic vasoconstriction); (4) chronic THROMBOEMBOLIC; (5) miscellaneous/unclear.',
    '**A unifying mechanism in lung disease is HYPOXIC PULMONARY VASOCONSTRICTION: alveolar hypoxia constricts local pulmonary arterioles (to divert blood to better-ventilated lung).** Acutely protective, when it becomes chronic and global (COPD, ILD, high altitude, OSA) it raises pulmonary vascular resistance → PH → right-heart strain.',
    '**COR PULMONALE is right ventricular hypertrophy/failure caused by LUNG (or pulmonary vascular) disease** — presenting with a loud P2, raised JVP, hepatomegaly, ascites and peripheral oedema. (By definition it EXCLUDES right heart failure due to left heart disease.) It is the end-consequence of chronic PH from respiratory causes.',
    '**Diagnosis: echocardiography estimates pulmonary pressures and right-heart size; right heart catheterisation confirms. Treatment targets the group — treat the underlying lung/left-heart disease and hypoxia (oxygen), with pulmonary vasodilators reserved for group 1 PAH.** PH deepens the ventilation/circulation theme alongside PE ([[pulmonary-embolism-edema]]) and ARDS ([[ards-pulmonary-hypertension-atelectasis]]).',
  ],

  mechanism: {
    title: 'High pulmonary pressure (5 WHO groups); hypoxic vasoconstriction → RV strain (cor pulmonale)',
    steps: [
      { id: 's1', label: 'PH = mean PAP ≥20–25 mmHg in the low-pressure pulmonary circuit', emphasis: 'key' },
      { id: 's2', label: '5 WHO groups: PAH, left heart (commonest), lung/hypoxia, thromboembolic, misc', emphasis: 'key' },
      { id: 's3', label: 'Hypoxic pulmonary vasoconstriction → ↑PVR when chronic/global', emphasis: 'key' },
      { id: 's4', label: 'Chronic PH → RV hypertrophy → cor pulmonale (loud P2, oedema, ↑JVP)', emphasis: 'danger' },
      { id: 's5', label: 'Treat by group (cause + oxygen); vasodilators for group 1 PAH', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Mean pulmonary arterial pressure ≥20–25 mmHg', mechanism: 'Pulmonary hypertension', significance: 'key' },
    { sign: 'Loud P2, raised JVP, hepatomegaly, peripheral oedema', mechanism: 'Cor pulmonale (right heart failure from lung disease)', significance: 'key' },
    { sign: 'PH developing in COPD or interstitial lung disease', mechanism: 'Chronic hypoxic pulmonary vasoconstriction (group 3)', significance: 'key' },
    { sign: 'PH from a failing or valvular left heart', mechanism: 'Group 2 (left heart disease) — commonest cause', significance: 'supportive' },
    { sign: 'Plexiform pulmonary arterial lesions (BMPR2)', mechanism: 'Idiopathic/heritable pulmonary arterial hypertension (group 1)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The definition of pulmonary hypertension', meaning: 'Mean pulmonary arterial pressure ≥20–25 mmHg' },
    { clue: 'The commonest overall cause (WHO group)', meaning: 'Group 2 — left heart disease' },
    { clue: 'The mechanism linking chronic lung disease to PH', meaning: 'Hypoxic pulmonary vasoconstriction' },
    { clue: 'The right-heart consequence of chronic PH from lung disease', meaning: 'Cor pulmonale' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'PH is grouped by cause (treat the lung/left-heart disease + hypoxia; vasodilators only in group 1), and chronic respiratory PH causes cor pulmonale — the end-stage of many diseases in this block (COPD — [[copd-emphysema-chronic-bronchitis]], ILD — [[pulmonary-fibrosis-pneumoconioses]], OSA — [[obstructive-sleep-apnoea]], chronic PE — [[pulmonary-embolism-edema]]). It expands the pulmonary-hypertension mention in [[ards-pulmonary-hypertension-atelectasis]].' },
  ],

  mnemonics: [
    { hook: 'PH 5 groups: "Arterial, Left heart, Lung/hypoxia, Thromboembolic, Misc"', expansion: ['Group 2 (left heart) commonest', 'Group 1 = PAH (vasodilators)'] },
    { hook: 'Cor pulmonale = "right heart failing because of the LUNGS"', expansion: ['Hypoxic vasoconstriction → PH → RV strain', 'Excludes left-heart cause'] },
  ],

  traps: [
    {
      questionCategory: 'Definition of cor pulmonale',
      wrongInstinct: 'Any right heart failure can be called cor pulmonale',
      rightAnswer: 'Cor pulmonale specifically means right ventricular hypertrophy/failure caused by LUNG or pulmonary vascular disease — it EXCLUDES right heart failure that results from LEFT heart disease',
      why: 'The term is reserved for right-heart failure of respiratory origin; labelling left-heart-driven right failure as cor pulmonale misattributes the cause and misdirects management toward the lungs.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Chronic obstructive pulmonary disease can lead to pulmonary hypertension mainly through:',
      options: [
        { id: 'a', text: 'Left ventricular failure' },
        { id: 'b', text: 'Chronic hypoxic pulmonary vasoconstriction raising pulmonary vascular resistance' },
        { id: 'c', text: 'Systemic hypertension' },
        { id: 'd', text: 'Anaemia' },
      ],
      answerId: 'b',
      explanation: 'Alveolar hypoxia constricts pulmonary arterioles; when hypoxia is chronic and widespread (as in COPD or ILD), this hypoxic pulmonary vasoconstriction raises pulmonary vascular resistance and causes pulmonary hypertension and eventually cor pulmonale.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Cor pulmonale is best defined as right ventricular hypertrophy or failure due to:',
      options: [
        { id: 'a', text: 'Left heart disease' },
        { id: 'b', text: 'Lung or pulmonary vascular disease' },
        { id: 'c', text: 'Systemic hypertension' },
        { id: 'd', text: 'Valvular aortic disease' },
      ],
      answerId: 'b',
      explanation: 'Cor pulmonale is right heart hypertrophy/failure caused by disease of the lungs or pulmonary vasculature (via pulmonary hypertension); by definition it excludes right heart failure secondary to left heart disease.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default pulmonaryHypertensionCorPulmonale;
