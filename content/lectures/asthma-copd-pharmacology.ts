import type { Lecture } from '../../lib/types';
import { ASTHMA_COPD_DRUGS } from '../../lib/figures';

export const asthmaCopdPharmacology: Lecture = {
  id: 'asthma-copd-pharmacology',
  title: 'Drugs for Asthma & COPD',
  system: 'respiratory',
  source: 'L13 — Drugs for Lower Respiratory Disease',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L13 Lower Resp Drugs' },
    { kind: 'treatment', label: 'Bronchodilators' },
    { kind: 'mechanism', label: 'Inhaled steroids' },
  ],

  highYield: [
    '**Lower-airway drugs fall into two functional groups: relievers (bronchodilators — open the airway) and controllers (anti-inflammatory — prevent inflammation).** The key conceptual split is that **asthma is an inflammatory disease, so inhaled corticosteroids (ICS) are its cornerstone, whereas COPD is largely fixed, so bronchodilators lead.**',
    '**β2-agonists relax airway smooth muscle via cAMP:** **SABA (salbutamol) is the rescue reliever**; **LABA (salmeterol, formoterol) is for maintenance but must NEVER be used alone in asthma** (LABA monotherapy increases mortality) — always paired with an ICS. Adverse effects: tremor, tachycardia, hypokalaemia.',
    '**Antimuscarinics (SAMA ipratropium, LAMA tiotropium) block M3 receptors** to bronchodilate and reduce secretions; they are a **mainstay in COPD** (and adjuncts in acute severe asthma). **Theophylline (a methylxanthine/PDE inhibitor)** is a weak bronchodilator with a **narrow therapeutic index** (arrhythmia, seizures) needing level monitoring.',
    '**Controllers center on inhaled corticosteroids (budesonide, fluticasone) — the most effective anti-inflammatory in asthma** (reduce exacerbations; local side effects: oral candidiasis, dysphonia — rinse mouth). **Leukotriene receptor antagonists (montelukast)** help aspirin-exacerbated and exercise/allergic asthma; **biologics** (anti-IgE omalizumab, anti-IL5 mepolizumab) target severe eosinophilic/allergic asthma; **roflumilast (PDE4)** helps severe COPD.',
    '**Acute severe asthma is managed with oxygen, repeated nebulised SABA + ipratropium, and systemic corticosteroids (± magnesium).** Maintenance follows a step-up/step-down approach anchored on ICS in asthma, and LABA+LAMA (± ICS) in COPD. Remember: **give a LABA only with an ICS in asthma.**',
  ],

  mechanism: {
    title: 'Relievers (β2/antimuscarinic) open airways; controllers (ICS) prevent inflammation',
    steps: [
      { id: 's1', label: 'Asthma = inflammatory → ICS cornerstone; COPD = fixed → bronchodilator-led', emphasis: 'key' },
      { id: 's2', label: 'β2-agonists (cAMP): SABA rescue, LABA maintenance', emphasis: 'key' },
      { id: 's3', label: 'LABA NEVER alone in asthma (↑mortality) — always with ICS', emphasis: 'danger' },
      { id: 's4', label: 'Antimuscarinics (ipratropium/tiotropium) = COPD mainstay; theophylline narrow index' },
      { id: 's5', label: 'Acute severe: O₂ + neb SABA + ipratropium + systemic steroid ± Mg²⁺', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Tremor, tachycardia, hypokalaemia after a reliever', mechanism: 'β2-agonist (salbutamol) systemic effects', significance: 'key' },
    { sign: 'Oral thrush / hoarse voice from an inhaler', mechanism: 'Inhaled corticosteroid local effect (rinse mouth)', significance: 'key' },
    { sign: 'Arrhythmia/seizure at supratherapeutic drug level', mechanism: 'Theophylline toxicity (narrow therapeutic index)', significance: 'supportive' },
    { sign: 'Bronchodilation + reduced secretions in COPD', mechanism: 'Antimuscarinic (tiotropium) M3 blockade', significance: 'supportive' },
    { sign: 'Benefit in aspirin-exacerbated or exercise-induced asthma', mechanism: 'Leukotriene receptor antagonist (montelukast)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The cornerstone controller in asthma', meaning: 'Inhaled corticosteroids' },
    { clue: 'The rule about using a LABA in asthma', meaning: 'Never as monotherapy — always combined with an inhaled corticosteroid' },
    { clue: 'The bronchodilator mainstay in COPD', meaning: 'Long-acting antimuscarinics (LAMA, e.g. tiotropium)' },
    { clue: 'The reliever drug used to abort an acute attack', meaning: 'Short-acting β2-agonist (salbutamol)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Matching the drug to the disease mechanism is the whole point: ICS for the eosinophilic inflammation of [[asthma-bronchiectasis-pathology]], bronchodilators for the fixed obstruction of [[copd-emphysema-chronic-bronchitis]]. Upper-airway/cold drugs are separate ([[cough-cold-allergy-drugs]]). LABA-monotherapy avoidance and ICS mouth-rinsing are the classic safety points.' },
  ],

  mnemonics: [
    { hook: 'Asthma = "ICS core"; COPD = "bronchodilator core"', expansion: ['Asthma inflammatory/reversible', 'COPD largely fixed'] },
    { hook: 'LABA "never alone" in asthma (add ICS)', expansion: ['LABA monotherapy ↑ mortality', 'Combination inhalers'] },
  ],

  traps: [
    {
      questionCategory: 'Use of long-acting β2-agonists in asthma',
      wrongInstinct: 'A long-acting β2-agonist (LABA) can be used alone for asthma maintenance',
      rightAnswer: 'A LABA must NEVER be used as monotherapy in asthma — it masks inflammation and increases asthma mortality; it is only used in combination with an inhaled corticosteroid',
      why: 'LABA monotherapy controls symptoms while inflammation worsens unchecked, raising the risk of fatal attacks; the ICS must always accompany it — a black-box safety principle.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which drug class is the cornerstone of long-term control in persistent asthma?',
      options: [
        { id: 'a', text: 'Short-acting β2-agonists' },
        { id: 'b', text: 'Inhaled corticosteroids' },
        { id: 'c', text: 'Long-acting antimuscarinics' },
        { id: 'd', text: 'Theophylline' },
      ],
      answerId: 'b',
      explanation: 'Because asthma is fundamentally an inflammatory disease, inhaled corticosteroids are the cornerstone controller, reducing airway inflammation and exacerbations. Bronchodilators relieve symptoms but do not treat the underlying inflammation.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'A long-acting β2-agonist (LABA) should not be prescribed alone in asthma because it:',
      options: [
        { id: 'a', text: 'Causes immediate bronchospasm' },
        { id: 'b', text: 'Masks ongoing airway inflammation and increases the risk of fatal attacks' },
        { id: 'c', text: 'Is ineffective as a bronchodilator' },
        { id: 'd', text: 'Blocks muscarinic receptors' },
      ],
      answerId: 'b',
      explanation: 'LABA monotherapy improves symptoms while underlying inflammation progresses, increasing asthma mortality; a LABA must always be combined with an inhaled corticosteroid.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Drugs for asthma & COPD', svg: ASTHMA_COPD_DRUGS, caption: 'Relievers (β2-agonists, antimuscarinics) vs controllers (ICS, LTRA, biologics); ICS-led asthma vs bronchodilator-led COPD.' },
  ],
};

export default asthmaCopdPharmacology;
