import type { Lecture } from '../../lib/types';

export const ardsPulmonaryHypertensionAtelectasis: Lecture = {
  id: 'ards-pulmonary-hypertension-atelectasis',
  title: 'ARDS, Pulmonary Hypertension & Atelectasis',
  system: 'respiratory',
  source: 'L11 — Ventilation & Circulatory Disorders of the Lung',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L11 Circulatory Lung' },
    { kind: 'disease', label: 'ARDS' },
    { kind: 'exam', label: 'Pulmonary hypertension' },
  ],

  highYield: [
    '**Acute respiratory distress syndrome (ARDS) is diffuse alveolar damage (DAD) from increased alveolar-capillary permeability** — a non-cardiogenic pulmonary oedema. Triggers include **sepsis (commonest), aspiration, pneumonia, trauma, pancreatitis and shock**. The pathological hallmark is **hyaline membranes** lining alveoli.',
    '**ARDS is defined clinically by acute onset, bilateral infiltrates, refractory hypoxaemia (low PaO₂/FiO₂ ratio) and NOT explained by cardiac failure/fluid overload.** Damaged type II pneumocytes lose surfactant → widespread collapse and stiff lungs; management is supportive with **lung-protective (low tidal volume) ventilation**. It carries high mortality.',
    '**Pulmonary hypertension is a mean pulmonary arterial pressure ≥20–25 mmHg**, grouped by cause: **(1) idiopathic/pulmonary arterial** (plexiform lesions, BMPR2 mutations), **(2) left heart disease** (commonest — back-pressure), **(3) chronic lung disease/hypoxia** (hypoxic pulmonary vasoconstriction — COPD, ILD), **(4) chronic thromboembolic**, and **(5) miscellaneous**. It leads to **right ventricular hypertrophy and cor pulmonale**.',
    '**Cor pulmonale is right heart enlargement/failure caused by lung disease** (via pulmonary hypertension) — presenting with a loud P2, raised JVP, hepatomegaly and peripheral oedema. **Hypoxic pulmonary vasoconstriction** (diverting blood from poorly ventilated lung) is protective acutely but, when chronic and global (COPD), drives pulmonary hypertension.',
    '**Atelectasis is loss of lung volume (collapse):** **resorption/obstructive** (mucus plug, tumour — mediastinum shifts TOWARD the collapse), **compression** (effusion/pneumothorax pushing the lung — mediastinum shifts AWAY), and **contraction** (fibrosis). Post-operative atelectasis is a common cause of early post-op fever and hypoxaemia; the collapse direction of mediastinal shift distinguishes obstructive from compressive causes.',
  ],

  mechanism: {
    title: 'ARDS = DAD/hyaline membranes; PHTN → cor pulmonale; atelectasis = collapse',
    steps: [
      { id: 's1', label: 'ARDS = diffuse alveolar damage; hyaline membranes; sepsis-driven', emphasis: 'key' },
      { id: 's2', label: 'ARDS: bilateral infiltrates, refractory hypoxia, NOT cardiac; ↓surfactant', emphasis: 'danger' },
      { id: 's3', label: 'Pulmonary HTN groups 1–5; chronic hypoxia → vasoconstriction (COPD/ILD)', emphasis: 'key' },
      { id: 's4', label: 'PHTN → RV hypertrophy → cor pulmonale (loud P2, oedema)' },
      { id: 's5', label: 'Atelectasis: obstructive (shift toward) vs compressive (shift away)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Bilateral infiltrates + refractory hypoxaemia after sepsis', mechanism: 'ARDS (diffuse alveolar damage)', significance: 'key' },
    { sign: 'Hyaline membranes lining alveoli', mechanism: 'Pathological hallmark of DAD/ARDS', significance: 'key' },
    { sign: 'Loud P2, raised JVP, hepatomegaly, peripheral oedema', mechanism: 'Cor pulmonale from pulmonary hypertension', significance: 'key' },
    { sign: 'Mediastinum shifts TOWARD a collapsed lung', mechanism: 'Obstructive (resorption) atelectasis', significance: 'supportive' },
    { sign: 'Mediastinum shifts AWAY from the affected side', mechanism: 'Compressive collapse (effusion/pneumothorax)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The pathological hallmark of ARDS', meaning: 'Diffuse alveolar damage with hyaline membranes' },
    { clue: 'The commonest overall cause of pulmonary hypertension', meaning: 'Left heart disease (group 2)' },
    { clue: 'The right-heart consequence of chronic pulmonary hypertension', meaning: 'Cor pulmonale (RV hypertrophy/failure)' },
    { clue: 'The shift of the mediastinum in obstructive vs compressive atelectasis', meaning: 'Toward (obstructive) vs away (compressive)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'ARDS needs treatment of the trigger + lung-protective ventilation; pulmonary hypertension is treated by cause (± pulmonary vasodilators in group 1), and chronic lung disease drives it via hypoxia ([[copd-emphysema-chronic-bronchitis]]). Contrast cardiogenic oedema/PE in [[pulmonary-embolism-edema]]. Obstructive atelectasis should prompt a search for a tumour/plug ([[non-small-cell-lung-carcinoma]]).' },
  ],

  mnemonics: [
    { hook: 'ARDS = "DAD + hyaline membranes + refractory hypoxia, not cardiac"', expansion: ['Sepsis commonest trigger', 'Low-tidal-volume ventilation'] },
    { hook: 'Atelectasis shift: "Obstructed pulls Toward; Compressed pushes Away"', expansion: ['Obstructive = mucus plug/tumour', 'Compressive = effusion/pneumothorax'] },
  ],

  traps: [
    {
      questionCategory: 'Direction of mediastinal shift in atelectasis',
      wrongInstinct: 'The mediastinum always shifts away from a white-out lung field',
      rightAnswer: 'In OBSTRUCTIVE (resorption) atelectasis the mediastinum shifts TOWARD the collapsed side (volume loss), whereas a large effusion or pneumothorax (compression) pushes it AWAY — the direction distinguishes the mechanism',
      why: 'A whited-out hemithorax could be collapse or effusion; reading the shift direction tells you whether volume was lost (pulled toward) or added (pushed away), guiding very different management.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Two days after severe sepsis, a patient develops bilateral pulmonary infiltrates and severe hypoxaemia refractory to oxygen, with a normal cardiac filling pressure. Lung histology would most likely show:',
      options: [
        { id: 'a', text: 'Caseating granulomas' },
        { id: 'b', text: 'Diffuse alveolar damage with hyaline membranes' },
        { id: 'c', text: 'Non-caseating granulomas' },
        { id: 'd', text: 'Lobar consolidation with hepatisation' },
      ],
      answerId: 'b',
      explanation: 'This is ARDS: a non-cardiogenic, permeability pulmonary oedema from diffuse alveolar damage, whose hallmark is hyaline membranes. Sepsis is the commonest trigger and the hypoxaemia is refractory.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A chest X-ray shows a collapsed left lung with the mediastinum shifted toward the collapse. This indicates:',
      options: [
        { id: 'a', text: 'A large pleural effusion' },
        { id: 'b', text: 'Obstructive (resorption) atelectasis, e.g. from a mucus plug or tumour' },
        { id: 'c', text: 'Tension pneumothorax' },
        { id: 'd', text: 'ARDS' },
      ],
      answerId: 'b',
      explanation: 'Volume loss from obstructive/resorption atelectasis pulls the mediastinum toward the affected side. A large effusion or pneumothorax adds volume and pushes the mediastinum away.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default ardsPulmonaryHypertensionAtelectasis;
