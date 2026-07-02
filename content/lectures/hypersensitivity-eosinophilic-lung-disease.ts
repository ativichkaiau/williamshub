import type { Lecture } from '../../lib/types';

export const hypersensitivityEosinophilicLungDisease: Lecture = {
  id: 'hypersensitivity-eosinophilic-lung-disease',
  title: 'Hypersensitivity Pneumonitis & Eosinophilic Lung Disease',
  system: 'respiratory',
  source: 'L5 — Pathology of Restrictive Lung Diseases',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L5 Restrictive Lung' },
    { kind: 'disease', label: 'Hypersensitivity pneumonitis' },
    { kind: 'exam', label: 'Eosinophilic pneumonia' },
  ],

  highYield: [
    '**Hypersensitivity pneumonitis (extrinsic allergic alveolitis) is an immune reaction to INHALED ORGANIC ANTIGENS** — farmer\'s lung (thermophilic actinomycetes in mouldy hay), bird-fancier\'s lung (avian proteins), and others. It is a **mixed type III/IV hypersensitivity** causing bronchiolocentric lymphocytic inflammation with **loose, poorly-formed non-caseating granulomas**.',
    '**HP has acute and chronic forms: acute (flu-like symptoms + cough/dyspnoea hours after heavy exposure, resolving on removal) and chronic (progressive fibrosis from ongoing low-level exposure).** The key management point is **ANTIGEN AVOIDANCE** — it is reversible early but fibroses if exposure continues. It is a restrictive disease with a reduced DLCO.',
    '**Eosinophilic lung diseases are defined by pulmonary infiltrates with EOSINOPHILIA.** They include **Löffler syndrome** (transient, often parasitic larval migration — see [[parasitic-lung-infections]]), **acute and chronic eosinophilic pneumonia**, and **allergic bronchopulmonary aspergillosis (ABPA)** — a hypersensitivity to Aspergillus in asthmatics/CF (↑IgE, eosinophilia, central bronchiectasis; see [[fungal-lung-infections]]).',
    '**Eosinophilic granulomatosis with polyangiitis (EGPA / Churg–Strauss) is a systemic small-vessel VASCULITIS in patients with asthma + eosinophilia**, causing lung infiltrates, neuropathy and other organ involvement (often ANCA-associated). It links respiratory eosinophilia to systemic vasculitis.',
    '**The unifying theme is IMMUNE-MEDIATED lung inflammation driven by an inhaled antigen or eosinophils — often reversible if the trigger is removed, but fibrosing if chronic.** Distinguish HP (organic-antigen, granulomatous) from the pneumoconioses (inorganic dust — [[pulmonary-fibrosis-pneumoconioses]]) and from non-caseating sarcoidosis ([[sarcoidosis-granulomatous-lung]]).',
  ],

  mechanism: {
    title: 'Inhaled-antigen HP (III/IV, granulomas) + eosinophilic infiltrates (ABPA, EGPA, Löffler)',
    steps: [
      { id: 's1', label: 'HP: inhaled ORGANIC antigen (farmer\'s/bird) → type III/IV reaction', emphasis: 'key' },
      { id: 's2', label: 'HP: bronchiolocentric lymphocytes + loose non-caseating granulomas', emphasis: 'key' },
      { id: 's3', label: 'Acute (reversible on removal) vs chronic (fibrosis); ANTIGEN AVOIDANCE', emphasis: 'key' },
      { id: 's4', label: 'Eosinophilic: Löffler, eosinophilic pneumonia, ABPA (↑IgE, asthma/CF)' },
      { id: 's5', label: 'EGPA (Churg–Strauss): asthma + eosinophilia + vasculitis (ANCA)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Flu-like cough/dyspnoea hours after exposure to mouldy hay/birds', mechanism: 'Acute hypersensitivity pneumonitis', significance: 'key' },
    { sign: 'Bronchiolocentric lymphocytic inflammation + loose granulomas', mechanism: 'Hypersensitivity pneumonitis histology', significance: 'key' },
    { sign: 'Asthmatic with ↑IgE, eosinophilia and central bronchiectasis', mechanism: 'Allergic bronchopulmonary aspergillosis (ABPA)', significance: 'key' },
    { sign: 'Asthma + eosinophilia + vasculitis/neuropathy', mechanism: 'EGPA (Churg–Strauss)', significance: 'supportive' },
    { sign: 'Transient migratory infiltrates with blood eosinophilia', mechanism: 'Löffler syndrome (often parasitic)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The antigen type causing hypersensitivity pneumonitis', meaning: 'Inhaled organic antigens (e.g. thermophilic actinomycetes, avian proteins)' },
    { clue: 'The key treatment for hypersensitivity pneumonitis', meaning: 'Antigen avoidance (± steroids)' },
    { clue: 'The eosinophilic hypersensitivity to Aspergillus in asthmatics', meaning: 'Allergic bronchopulmonary aspergillosis (ABPA)' },
    { clue: 'The eosinophilic vasculitis with asthma', meaning: 'EGPA (Churg–Strauss)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Both HP and eosinophilic diseases are immune-mediated and often reversible if the trigger is removed (antigen avoidance; treating the asthma/Aspergillus in ABPA — [[fungal-lung-infections]]). They contrast with the inorganic-dust pneumoconioses and IPF of [[pulmonary-fibrosis-pneumoconioses]] and the sarcoid granulomas of [[sarcoidosis-granulomatous-lung]]. Löffler links to parasitic migration ([[parasitic-lung-infections]]); all cause a restrictive pattern ([[pulmonary-function-tests-interpretation]]).' },
  ],

  mnemonics: [
    { hook: 'HP = "organic antigen (farmer/bird) → granulomas; avoid the antigen"', expansion: ['Type III/IV', 'Reversible early, fibroses if chronic'] },
    { hook: 'Eosinophilic lung: "ABPA (Aspergillus + asthma), EGPA (Churg–Strauss vasculitis), Löffler (parasites)"', expansion: ['↑IgE/eosinophils', 'EGPA is ANCA-associated'] },
  ],

  traps: [
    {
      questionCategory: 'Hypersensitivity pneumonitis vs pneumoconiosis',
      wrongInstinct: 'Hypersensitivity pneumonitis and the pneumoconioses are caused by the same kind of inhaled agent',
      rightAnswer: 'Hypersensitivity pneumonitis is an immune reaction to inhaled ORGANIC antigens (mould, avian proteins) with granulomas, whereas the pneumoconioses are caused by inhaled INORGANIC dusts (coal, silica, asbestos); HP is often reversible with antigen avoidance',
      why: 'The organic (immune, reversible) vs inorganic (fibrogenic dust) distinction changes both mechanism and management — HP responds to removing the antigen, while pneumoconioses require exposure prevention and are irreversible.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A farmer develops recurrent cough, breathlessness and flu-like symptoms hours after handling mouldy hay, resolving when away from the farm. The mechanism is:',
      options: [
        { id: 'a', text: 'An immune reaction to an inhaled organic antigen (hypersensitivity pneumonitis)' },
        { id: 'b', text: 'Silica-induced fibrosis' },
        { id: 'c', text: 'Asthma from cold air' },
        { id: 'd', text: 'Tuberculosis' },
      ],
      answerId: 'a',
      explanation: 'Hypersensitivity pneumonitis (farmer\'s lung) is a type III/IV immune reaction to inhaled organic antigens (thermophilic actinomycetes); acute symptoms follow exposure and resolve with avoidance, but chronic exposure causes fibrosis.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'An asthmatic with recurrent pulmonary infiltrates, a very high IgE, blood eosinophilia and central bronchiectasis most likely has:',
      options: [
        { id: 'a', text: 'Allergic bronchopulmonary aspergillosis (ABPA)' },
        { id: 'b', text: 'Silicosis' },
        { id: 'c', text: 'Sarcoidosis' },
        { id: 'd', text: 'Tuberculosis' },
      ],
      answerId: 'a',
      explanation: 'ABPA is a hypersensitivity reaction to Aspergillus in asthmatics (and CF), characterised by markedly raised IgE, eosinophilia and central bronchiectasis — an eosinophilic lung disease treated with steroids (± antifungals).',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default hypersensitivityEosinophilicLungDisease;
