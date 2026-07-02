import type { Lecture } from '../../lib/types';

export const asthmaBronchiectasisPathology: Lecture = {
  id: 'asthma-bronchiectasis-pathology',
  title: 'Asthma & Bronchiectasis (Pathology)',
  system: 'respiratory',
  source: 'L4 — Pathology of Obstructive Lung Diseases',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L4 Obstructive Lung' },
    { kind: 'disease', label: 'Asthma' },
    { kind: 'exam', label: 'Bronchiectasis' },
  ],

  highYield: [
    '**Asthma is a chronic inflammatory disease with REVERSIBLE bronchoconstriction and airway hyperresponsiveness** — the reversibility distinguishes it from COPD. **Atopic (allergic) asthma** is a **type I IgE-mediated hypersensitivity** (Th2 cytokines IL-4/5/13, mast cells, eosinophils); early-phase bronchospasm then a late-phase inflammatory reaction.',
    '**Pathology of asthma shows: smooth-muscle hypertrophy, goblet-cell/mucous-gland hyperplasia, thickened basement membrane, and an eosinophil-rich infiltrate.** In sputum look for **Curschmann spirals (mucus casts of small airways)** and **Charcot–Leyden crystals (eosinophil membrane protein)**. Airway remodeling makes chronic asthma partly fixed.',
    '**Triggers/provocative factors include allergens, cold air, exercise, infection, aspirin (AERD) and irritants.** A severe, unremitting attack is **status asthmaticus** — potentially fatal, with a "silent chest" (too little airflow to wheeze). Between attacks, spirometry may be normal but shows reversibility (>12% FEV₁ improvement after a bronchodilator).',
    '**Bronchiectasis is permanent, abnormal dilatation of bronchi from a vicious cycle of infection and inflammation destroying the airway wall.** Causes: **cystic fibrosis** (commonest in the young), **Kartagener syndrome (primary ciliary dyskinesia)**, post-infectious (TB, measles), obstruction, and **allergic bronchopulmonary aspergillosis (ABPA)**. It presents with **copious purulent (often foul) sputum, haemoptysis and clubbing**.',
    '**Kartagener syndrome (a ciliary dynein-arm defect) = bronchiectasis + situs inversus + chronic sinusitis + infertility** — a memorable cause. On imaging bronchiectasis shows dilated, thick-walled airways ("tram-track" / "signet-ring" sign). Recurrent infection drives progressive lung damage.',
  ],

  mechanism: {
    title: 'Asthma = reversible Th2/eosinophilic; bronchiectasis = infection–damage cycle',
    steps: [
      { id: 's1', label: 'Asthma: reversible bronchospasm + airway hyperresponsiveness', emphasis: 'key' },
      { id: 's2', label: 'Atopic asthma = type I IgE (Th2, eosinophils, mast cells)', emphasis: 'key' },
      { id: 's3', label: 'Sputum: Curschmann spirals + Charcot-Leyden crystals' },
      { id: 's4', label: 'Status asthmaticus = severe, "silent chest" — can be fatal', emphasis: 'danger' },
      { id: 's5', label: 'Bronchiectasis: permanent dilatation (CF, Kartagener, ABPA) → purulent sputum' },
    ],
  },

  examFindings: [
    { sign: 'Reversible airflow obstruction (>12% FEV₁ gain post-bronchodilator)', mechanism: 'Asthma (vs fixed COPD)', significance: 'key' },
    { sign: 'Curschmann spirals + Charcot-Leyden crystals in sputum', mechanism: 'Eosinophilic asthmatic airway', significance: 'key' },
    { sign: '"Silent chest" in a severe attack', mechanism: 'Status asthmaticus — airflow too low to generate wheeze', significance: 'key' },
    { sign: 'Copious purulent sputum + clubbing + haemoptysis', mechanism: 'Bronchiectasis (chronic airway suppuration)', significance: 'key' },
    { sign: 'Situs inversus + sinusitis + infertility + bronchiectasis', mechanism: 'Kartagener (primary ciliary dyskinesia)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The feature separating asthma from COPD', meaning: 'Reversibility of airflow obstruction' },
    { clue: 'The sputum findings of asthma', meaning: 'Curschmann spirals and Charcot–Leyden crystals' },
    { clue: 'The commonest cause of bronchiectasis in the young', meaning: 'Cystic fibrosis' },
    { clue: 'The triad of Kartagener syndrome', meaning: 'Bronchiectasis + situs inversus + chronic sinusitis (± infertility)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Asthma is inflammatory and steroid-responsive (ICS-led), COPD is bronchodilator-led — see [[asthma-copd-pharmacology]]. AERD asthma links to [[nasal-sinus-inflammatory-pathology]]. Bronchiectasis needs airway clearance + treating the cause/infection; ABPA links to [[fungal-lung-infections]]. Contrast the alveolar-destruction disease of [[copd-emphysema-chronic-bronchitis]].' },
  ],

  mnemonics: [
    { hook: 'Asthma sputum = "Curschmann + Charcot-Leyden" (spirals + crystals)', expansion: ['Type I IgE, Th2, eosinophils', 'Reversible (>12% FEV₁)'] },
    { hook: 'Kartagener = "bronchiectasis + situs inversus + sinusitis" (bad cilia)', expansion: ['Dynein arm defect', 'Also infertility (sperm/oviduct cilia)'] },
  ],

  traps: [
    {
      questionCategory: 'Interpreting a silent chest in asthma',
      wrongInstinct: 'Absence of wheeze in an asthmatic means the attack is improving',
      rightAnswer: 'A "silent chest" in a distressed asthmatic is an OMINOUS sign of status asthmaticus — airflow is too low to generate a wheeze, indicating life-threatening obstruction, not improvement',
      why: 'Wheeze requires turbulent airflow; when obstruction is severe enough to silence the chest, the patient is peri-arrest — mistaking it for recovery is dangerous.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which pathological feature distinguishes asthma from COPD?',
      options: [
        { id: 'a', text: 'Reduced FEV₁/FVC ratio' },
        { id: 'b', text: 'Reversible bronchoconstriction with eosinophilic, IgE-mediated inflammation' },
        { id: 'c', text: 'Alveolar wall destruction' },
        { id: 'd', text: 'Mucous gland hyperplasia' },
      ],
      answerId: 'b',
      explanation: 'Asthma features reversible airflow obstruction driven by type I IgE-mediated, eosinophilic inflammation (Curschmann spirals, Charcot–Leyden crystals). COPD obstruction is largely fixed and neutrophil-predominant.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A young patient with situs inversus, chronic sinusitis and recurrent purulent respiratory infections with bronchiectasis most likely has:',
      options: [
        { id: 'a', text: 'Cystic fibrosis' },
        { id: 'b', text: 'Primary ciliary dyskinesia (Kartagener syndrome)' },
        { id: 'c', text: 'Asthma' },
        { id: 'd', text: 'α1-antitrypsin deficiency' },
      ],
      answerId: 'b',
      explanation: 'The triad of bronchiectasis, situs inversus and chronic sinusitis is Kartagener syndrome, a form of primary ciliary dyskinesia (dynein-arm defect) that impairs mucociliary clearance and sperm/oviduct motility.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default asthmaBronchiectasisPathology;
