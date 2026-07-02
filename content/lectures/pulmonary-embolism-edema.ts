import type { Lecture } from '../../lib/types';

export const pulmonaryEmbolismEdema: Lecture = {
  id: 'pulmonary-embolism-edema',
  title: 'Pulmonary Embolism & Pulmonary Oedema',
  system: 'respiratory',
  source: 'L11 — Ventilation & Circulatory Disorders of the Lung',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L11 Circulatory Lung' },
    { kind: 'disease', label: 'Pulmonary embolism' },
    { kind: 'exam', label: 'Pulmonary oedema' },
  ],

  highYield: [
    '**Pulmonary embolism (PE) is usually a thrombus from a deep vein of the leg/pelvis (DVT) that lodges in the pulmonary arteries** — the embolic end of venous thromboembolism. Risk follows **Virchow\'s triad (stasis, hypercoagulability, endothelial injury)**: immobility, surgery, malignancy, pregnancy/OCP, and inherited thrombophilias.',
    '**The consequence depends on clot size:** a large **saddle embolus** at the bifurcation can cause sudden **right-heart failure, obstructive shock and death**; medium emboli cause **pleuritic pain, dyspnoea and haemoptysis**; small emboli may be silent. Presentation is classically **sudden dyspnoea + tachycardia ± pleuritic chest pain**.',
    '**A pulmonary INFARCT (haemorrhagic, wedge-shaped, pleural-based) occurs only in ~10% of PEs** — because the lung has a dual blood supply (pulmonary + bronchial arteries), infarction happens mainly when the bronchial supply/collateral circulation is already compromised (e.g. left heart failure).',
    '**Pulmonary oedema is fluid accumulation in alveoli/interstitium, most often CARDIOGENIC (raised pulmonary venous/hydrostatic pressure from left heart failure)** → heavy, wet lungs, frothy (± pink) sputum, and chronically "**heart-failure cells**" (haemosiderin-laden macrophages) with brown induration. Non-cardiogenic oedema (increased permeability) is the ARDS mechanism.',
    '**Diagnosis and prevention are high-yield:** for PE use **D-dimer (rule-out when low risk) and CT pulmonary angiography** (Wells score guides testing); manage with **anticoagulation** (thrombolysis/embolectomy if massive) and **prophylaxis** in at-risk inpatients. Cardiogenic oedema is treated by offloading the heart (diuretics, preload/afterload reduction).',
  ],

  mechanism: {
    title: 'DVT → PE (size-dependent effect); high hydrostatic P → cardiogenic oedema',
    steps: [
      { id: 's1', label: 'PE = venous thrombus (Virchow triad) lodging in pulmonary arteries', emphasis: 'key' },
      { id: 's2', label: 'Saddle embolus → acute right-heart failure/obstructive shock', emphasis: 'danger' },
      { id: 's3', label: 'Infarct (wedge, haemorrhagic) only ~10% — dual blood supply protects' },
      { id: 's4', label: 'Cardiogenic oedema = ↑pulmonary venous/hydrostatic pressure (LHF)', emphasis: 'key' },
      { id: 's5', label: 'PE: D-dimer + CTPA, anticoagulate; prophylaxis in at-risk inpatients' },
    ],
  },

  examFindings: [
    { sign: 'Sudden dyspnoea + tachycardia ± pleuritic pain/haemoptysis', mechanism: 'Pulmonary embolism', significance: 'key' },
    { sign: 'Hypotension + acute right-heart strain', mechanism: 'Massive (saddle) PE causing obstructive shock', significance: 'key' },
    { sign: 'Wedge-shaped, pleural-based haemorrhagic lesion', mechanism: 'Pulmonary infarct (with compromised bronchial supply)', significance: 'supportive' },
    { sign: 'Frothy pink sputum + bilateral basal crackles', mechanism: 'Cardiogenic pulmonary oedema (LHF)', significance: 'key' },
    { sign: 'Haemosiderin-laden "heart-failure cells", brown induration', mechanism: 'Chronic pulmonary congestion', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The triad describing thrombosis risk', meaning: 'Virchow\'s triad (stasis, hypercoagulability, endothelial injury)' },
    { clue: 'The test to rule out PE in a low-risk patient', meaning: 'D-dimer (negative excludes; imaging with CTPA if positive/high-risk)' },
    { clue: 'Why most PEs do not cause infarction', meaning: 'The lung has a dual (pulmonary + bronchial) blood supply' },
    { clue: 'The commonest mechanism of pulmonary oedema', meaning: 'Raised hydrostatic pressure from left heart failure (cardiogenic)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'PE is treated with anticoagulation (thrombolysis/embolectomy if massive) and prevented with prophylaxis; cardiogenic oedema is treated by unloading the heart. Non-cardiogenic (permeability) oedema is the ARDS process in [[ards-pulmonary-hypertension-atelectasis]]. Chronic thromboembolism causes pulmonary hypertension; venous thromboembolism prophylaxis overlaps the coagulation teaching of the cardiovascular block.' },
  ],

  mnemonics: [
    { hook: 'PE risk = Virchow: "Stasis, Hypercoagulability, Endothelial injury"', expansion: ['Source = DVT (leg/pelvis)', 'Saddle embolus → obstructive shock'] },
    { hook: 'Infarct rare (~10%) because "lung has two blood supplies"', expansion: ['Pulmonary + bronchial arteries', 'Infarct if bronchial supply/LHF compromised'] },
  ],

  traps: [
    {
      questionCategory: 'Why pulmonary infarction is uncommon',
      wrongInstinct: 'Any pulmonary embolus that blocks an artery infarcts the downstream lung',
      rightAnswer: 'Only ~10% of PEs cause infarction because the lung has a DUAL blood supply (pulmonary and bronchial arteries); infarction occurs mainly when the bronchial/collateral supply is also compromised, as in left heart failure',
      why: 'The dual circulation protects most lung from ischaemia after embolism; expecting infarction in every PE overestimates tissue death and misreads the pathophysiology.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A post-operative patient suddenly becomes dyspnoeic and tachycardic with pleuritic chest pain. The most likely source of a pulmonary embolism is:',
      options: [
        { id: 'a', text: 'A left atrial thrombus' },
        { id: 'b', text: 'A deep vein thrombosis of the leg or pelvis' },
        { id: 'c', text: 'A ruptured aortic aneurysm' },
        { id: 'd', text: 'A vegetations on the mitral valve' },
      ],
      answerId: 'b',
      explanation: 'Most pulmonary emboli arise from deep venous thrombi in the legs/pelvis (venous thromboembolism), promoted by Virchow\'s triad; post-operative immobility is a classic risk factor.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A patient with acute left heart failure has frothy pink sputum and bilateral basal crackles. The pulmonary oedema is caused by:',
      options: [
        { id: 'a', text: 'Increased pulmonary capillary hydrostatic pressure' },
        { id: 'b', text: 'Increased alveolar-capillary permeability from inflammation' },
        { id: 'c', text: 'Low plasma oncotic pressure only' },
        { id: 'd', text: 'Lymphatic obstruction' },
      ],
      answerId: 'a',
      explanation: 'Cardiogenic pulmonary oedema results from raised pulmonary venous and capillary hydrostatic pressure (backing up from the failing left heart), driving fluid into the interstitium and alveoli. Permeability-type oedema is the ARDS mechanism.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default pulmonaryEmbolismEdema;
