import type { Lecture } from '../../lib/types';

export const pulmonaryCirculationFeatures: Lecture = {
  id: 'pulmonary-circulation-features',
  title: 'Pulmonary Circulation: A Low-Pressure System',
  system: 'respiratory',
  source: 'L3 — Pulmonary Circulation',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L3 Pulmonary Circulation' },
    { kind: 'mechanism', label: 'Low pressure/resistance' },
    { kind: 'exam', label: 'HPV · West zones' },
  ],

  highYield: [
    '**The pulmonary circulation is a low-pressure, low-resistance, high-compliance system** — the whole cardiac output passes through it, but at **~25/8 mmHg (mean ~15)**, far below the systemic circuit. Thin-walled vessels and a large capillary bed keep resistance low and protect the delicate alveolar membrane.',
    '**Pulmonary vascular resistance (PVR) is remarkably low and can fall further** when cardiac output rises, by **recruitment** (opening previously closed capillaries) and **distension** — so pressure barely rises during exercise.',
    '**Hypoxic pulmonary vasoconstriction (HPV) — the unique, high-yield reflex.** In the lungs, **low ALVEOLAR O₂ causes local vasoconstriction** (the OPPOSITE of the systemic vasodilation that hypoxia causes elsewhere). This **diverts blood away from poorly-ventilated alveoli toward well-ventilated ones**, improving V/Q matching. **Global hypoxia (altitude, chronic lung disease) → widespread HPV → pulmonary hypertension → right heart strain (cor pulmonale).**',
    '**Vessel behaviour depends on location and lung volume.** **Alveolar vessels** (capillaries in the alveolar wall) are **compressed** by high alveolar/lung inflation. **Extra-alveolar vessels** are **pulled open (distended)** by lung expansion. So PVR is lowest near FRC and rises at both very high and very low lung volumes.',
    '**Fluid balance (Starling) keeps alveoli dry.** Low pulmonary capillary hydrostatic pressure normally opposes fluid leak; **raised pressure (left heart failure) or increased permeability (ARDS/inflammation) → pulmonary oedema** → thickened membrane → impaired gas exchange. Lymphatics drain excess fluid.',
  ],

  mechanism: {
    title: 'Low pressure; divert blood from hypoxic areas',
    steps: [
      { id: 's1', label: 'Low pressure (~25/8), low resistance, high compliance', emphasis: 'key' },
      { id: 's2', label: '↑cardiac output → recruitment + distension → PVR falls' },
      { id: 's3', label: 'Hypoxic pulmonary vasoconstriction (low O₂ → constrict)', emphasis: 'key' },
      { id: 's4', label: 'Global hypoxia → widespread HPV → pulmonary HTN → cor pulmonale', emphasis: 'danger' },
      { id: 's5', label: 'Starling: ↑capillary pressure/permeability → pulmonary oedema' },
    ],
  },

  examFindings: [
    { sign: 'Low alveolar O₂ → local pulmonary vasoconstriction', mechanism: 'Hypoxic pulmonary vasoconstriction (diverts blood)', significance: 'key' },
    { sign: 'Pulmonary artery pressure ~25/8 mmHg', mechanism: 'Low-pressure circuit', significance: 'key' },
    { sign: 'PVR falls as cardiac output rises', mechanism: 'Capillary recruitment + distension', significance: 'supportive' },
    { sign: 'Pulmonary hypertension + right heart failure in chronic hypoxia', mechanism: 'Widespread HPV → cor pulmonale', significance: 'key' },
    { sign: 'Pulmonary oedema in left heart failure', mechanism: '↑pulmonary capillary hydrostatic pressure (Starling)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The lung\'s response to low alveolar oxygen', meaning: 'Hypoxic pulmonary vasoconstriction' },
    { clue: 'Two mechanisms lowering PVR at high cardiac output', meaning: 'Recruitment and distension' },
    { clue: 'Right heart failure from chronic lung disease', meaning: 'Cor pulmonale (pulmonary hypertension)' },
    { clue: 'Cause of pulmonary oedema in left heart failure', meaning: 'Raised pulmonary capillary hydrostatic pressure' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'HPV explains altitude illness and cor pulmonale; supplemental O₂ relieves HPV. Low pulmonary pressure keeps alveoli dry — its failure causes oedema (left heart failure/ARDS). Matching of blood to air: [[ventilation-perfusion-matching]]; membrane it perfuses: [[alveoli-pneumocytes-respiratory-membrane]].' },
  ],

  mnemonics: [
    { hook: 'Lungs are BACKWARDS: hypoxia → VASOCONSTRICTION (HPV), unlike systemic vasodilation', expansion: ['Diverts blood to ventilated alveoli'] },
    { hook: 'Low pressure + recruitment/distension = "the lungs handle the whole CO cheaply"', expansion: ['Chronic hypoxia → pulmonary HTN → cor pulmonale'] },
  ],

  traps: [
    {
      questionCategory: 'Pulmonary vs systemic response to hypoxia',
      wrongInstinct: 'Hypoxia dilates blood vessels in the lungs, just as it does in systemic tissues',
      rightAnswer: 'In the LUNGS, hypoxia causes VASOCONSTRICTION (hypoxic pulmonary vasoconstriction) — the opposite of the systemic circulation',
      why: 'This "backwards" reflex diverts pulmonary blood from poorly-ventilated to well-ventilated alveoli, improving V/Q matching.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'When alveolar oxygen tension falls in one region of the lung, the local pulmonary blood vessels:',
      options: [
        { id: 'a', text: 'Dilate, increasing blood flow to that region' },
        { id: 'b', text: 'Constrict, diverting blood to better-ventilated regions' },
        { id: 'c', text: 'Are unaffected' },
        { id: 'd', text: 'Rupture' },
      ],
      answerId: 'b',
      explanation: 'Hypoxic pulmonary vasoconstriction constricts vessels supplying poorly-ventilated alveoli, diverting blood toward well-ventilated areas to improve V/Q matching — opposite to systemic vessels.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Chronic global alveolar hypoxia (e.g. in COPD) can lead to right heart failure (cor pulmonale) because widespread hypoxic pulmonary vasoconstriction causes:',
      options: [
        { id: 'a', text: 'Systemic hypertension' },
        { id: 'b', text: 'Pulmonary hypertension, increasing right ventricular afterload' },
        { id: 'c', text: 'Pulmonary oedema from low pressure' },
        { id: 'd', text: 'Reduced pulmonary vascular resistance' },
      ],
      answerId: 'b',
      explanation: 'Diffuse HPV raises pulmonary vascular resistance → pulmonary hypertension → chronic right ventricular pressure overload → cor pulmonale.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default pulmonaryCirculationFeatures;
