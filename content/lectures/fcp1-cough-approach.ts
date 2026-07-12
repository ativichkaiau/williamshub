import type { Lecture } from '../../lib/types';

export const fcp1CoughApproach: Lecture = {
  id: 'fcp1-cough-approach',
  title: 'Approach to Cough',
  system: 'clinical',
  source: 'L13 — Cough & Hemoptysis',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L13 Cough & Hemoptysis' },
    { kind: 'disease', label: 'UACS · asthma · GERD · TB' },
    { kind: 'mechanism', label: 'Cough reflex · duration triage' },
    { kind: 'investigation', label: 'CXR · spirometry' },
  ],

  highYield: [
    'Classify cough by duration: **acute (under 3 weeks)** is usually **viral URTI** (also pneumonia, pertussis, PE, heart failure); **subacute (3–8 weeks)** is often **post-infectious**; **chronic (over 8 weeks)** needs a systematic workup.',
    'In a non-smoker with a normal CXR and no ACE inhibitor, chronic cough is dominated by a triad: **upper airway cough syndrome (post-nasal drip)**, **asthma / cough-variant asthma**, and **GERD** ([[fcp1-dyspepsia-reflux]]) — and more than one often coexists.',
    'Always ask about **ACE inhibitors** (a dry cough that can begin weeks to months after starting) and about **smoking**; stopping the ACE inhibitor and reassessing is cheap and diagnostic before extensive testing.',
    'Red flags that demand a **CXR**: **hemoptysis** ([[fcp1-hemoptysis-approach]]), **weight loss**, **fever or night sweats**, a **smoker over 40 with a new or changed cough**, **progressive dyspnea** ([[fcp1-dyspnea-approach]]), or **hoarseness/dysphagia** — think **lung cancer** and **tuberculosis**.',
    'Cough with **orthopnoea and oedema** suggests heart failure, while cough with **pleuritic chest pain** raises pneumonia or PE — widen the lens to [[fcp1-chest-pain-differential]].',
  ],

  mechanism: {
    title: 'Triage cough by duration, then hunt the cause',
    steps: [
      { id: 's1', label: 'Irritant → vagal afferent → cough centre → expulsion', emphasis: 'key' },
      { id: 's2', label: 'Duration: acute under 3 wk, subacute 3–8 wk, chronic over 8 wk', emphasis: 'key' },
      { id: 's3', label: 'Chronic + normal CXR: UACS, asthma, GERD (± ACE inhibitor)', emphasis: 'key' },
      { id: 's4', label: 'Screen red flags → CXR', emphasis: 'danger' },
      { id: 's5', label: 'Targeted therapeutic trial or referral' },
    ],
  },

  examFindings: [
    { sign: 'Cobblestone posterior pharynx, mucus dripping', mechanism: 'Post-nasal drip (upper airway cough syndrome)', significance: 'key' },
    { sign: 'Wheeze, nocturnal cough, diurnal variability', mechanism: 'Cough-variant asthma / bronchial hyper-reactivity', significance: 'key' },
    { sign: 'Cough after meals and on lying flat, with heartburn', mechanism: 'Gastro-oesophageal reflux', significance: 'supportive' },
    { sign: 'Clubbing, focal crackles, weight loss', mechanism: 'Suggests malignancy, bronchiectasis or chronic infection', significance: 'key' },
  ],

  investigations: [
    { clue: 'Chronic cough, normal CXR and spirometry, post-nasal drip', meaning: 'Trial for upper airway cough syndrome (antihistamine/nasal steroid)' },
    { clue: 'Positive bronchodilator reversibility or bronchial challenge', meaning: 'Asthma / cough-variant asthma' },
    { clue: 'Smoker over 40, new cough, mass or hilar lesion on CXR', meaning: 'Suspected lung cancer → CT and refer' },
    { clue: 'Chronic cough, weight loss, upper-lobe changes, night sweats', meaning: 'Investigate pulmonary tuberculosis (sputum AFB / GeneXpert)' },
  ],

  treatment: [
    { logic: 'Match empirical therapy to the most likely of the triad', detail: 'Sequentially trial for post-nasal drip, then asthma, then GERD; stopping an ACE inhibitor first is the simplest test of all.' },
    { logic: 'Get a CXR before blaming a benign cause', detail: 'Any red flag (hemoptysis, weight loss, a smoker over 40 with a new cough) needs imaging and often referral before symptomatic treatment.' },
  ],

  mnemonics: [
    { hook: 'Chronic cough triad = drip, wheeze, reflux (UACS, asthma, GERD)', expansion: ['Ask about ACE inhibitors', 'Screen red flags → CXR'] },
  ],

  traps: [
    {
      questionCategory: 'Chronic cough workup',
      wrongInstinct: 'Start empirical antibiotics for a weeks-long cough',
      rightAnswer: 'Reach for the triad (UACS/asthma/GERD), stop any ACE inhibitor, and image if red flags are present',
      why: 'Most chronic cough is non-infective; antibiotics address neither the triad nor exclude cancer or tuberculosis.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 55-year-old non-smoker has a 10-week dry cough. CXR and chest examination are normal. She takes lisinopril for hypertension. The best next step is:',
      options: [
        { id: 'a', text: 'Urgent chest CT' },
        { id: 'b', text: 'Stop the ACE inhibitor and reassess' },
        { id: 'c', text: 'A course of empirical antibiotics' },
        { id: 'd', text: 'Sputum culture only' },
      ],
      answerId: 'b',
      explanation: 'ACE inhibitors are a common cause of chronic dry cough. Stopping the drug and reassessing is a simple, low-cost diagnostic step before further investigation.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'A 40-year-old has a 3-month cough that is worse at night with intermittent wheeze. CXR is normal and spirometry shows reversible airflow obstruction. The most likely diagnosis is:',
      options: [
        { id: 'a', text: 'Gastro-oesophageal reflux disease' },
        { id: 'b', text: 'Cough-variant asthma' },
        { id: 'c', text: 'Upper airway cough syndrome' },
        { id: 'd', text: 'Lung cancer' },
      ],
      answerId: 'b',
      explanation: 'Nocturnal cough with wheeze and reversible airflow obstruction on spirometry points to asthma (cough-variant asthma), one of the chronic-cough triad.',
      tests: 'disease',
    },
  ],
};

export default fcp1CoughApproach;
