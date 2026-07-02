import type { Lecture } from '../../lib/types';

export const coughColdAllergyDrugs: Lecture = {
  id: 'cough-cold-allergy-drugs',
  title: 'Drugs for Cough, Cold & Allergy',
  system: 'respiratory',
  source: 'L3 — Respiratory Pharmacology',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L3 Respiratory Drugs' },
    { kind: 'treatment', label: 'Antihistamines' },
    { kind: 'mechanism', label: 'Decongestants' },
  ],

  highYield: [
    '**The common cold is treated symptomatically — there is no antiviral cure — so upper-respiratory drugs target congestion, cough, rhinorrhoea and allergy.** Antibiotics do not help viral URIs. The key drug classes are antihistamines, decongestants, antitussives, expectorants/mucolytics, and (for allergy) intranasal steroids.',
    '**Antihistamines block H1 receptors. First-generation agents (chlorpheniramine, diphenhydramine) cross the blood–brain barrier → sedation and antimuscarinic effects (dry mouth, urinary retention); second-generation agents (loratadine, cetirizine, fexofenadine) are non-sedating** and preferred for allergic rhinitis. Their antimuscarinic drying also helps rhinorrhoea in colds.',
    '**Decongestants are α-adrenergic agonists (pseudoephedrine oral, oxymetazoline topical) that vasoconstrict nasal mucosal vessels to reduce swelling.** Topical agents work fast but cause **rebound congestion (rhinitis medicamentosa) if used >3–5 days**; systemic pseudoephedrine can raise blood pressure and cause insomnia (caution in hypertension).',
    '**Cough drugs split into antitussives (suppress a dry cough) and expectorants/mucolytics (help clear a productive cough).** **Dextromethorphan** (central, non-opioid) and **codeine** (opioid) suppress the cough reflex; **guaifenesin** (expectorant) and **N-acetylcysteine / bromhexine** (mucolytics that break disulfide bonds in mucus) aid clearance. Don\'t suppress a productive cough that is clearing infection.',
    '**Allergic rhinitis is best controlled with intranasal corticosteroids** (most effective for congestion and inflammation), with antihistamines and leukotriene antagonists (montelukast) as adjuncts. Note the therapeutic split: **colds → symptomatic relief; allergy → anti-inflammatory (steroid) control.** Influenza-specific antivirals are covered separately.',
  ],

  mechanism: {
    title: 'Block H1, vasoconstrict (α), suppress/clear cough, steroid for allergy',
    steps: [
      { id: 's1', label: 'Antihistamines block H1; 1st-gen sedating, 2nd-gen not', emphasis: 'key' },
      { id: 's2', label: 'Decongestants = α-agonists → nasal vasoconstriction', emphasis: 'key' },
      { id: 's3', label: 'Topical decongestant >5 days → rebound (rhinitis medicamentosa)', emphasis: 'danger' },
      { id: 's4', label: 'Antitussive (dextromethorphan/codeine) vs expectorant/mucolytic' },
      { id: 's5', label: 'Allergic rhinitis: intranasal corticosteroid = most effective', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Sedation + dry mouth from an antihistamine', mechanism: 'First-generation H1 blocker (crosses BBB, antimuscarinic)', significance: 'key' },
    { sign: 'Worsening congestion after days of nasal spray', mechanism: 'Rhinitis medicamentosa (rebound from topical decongestant)', significance: 'key' },
    { sign: 'Raised blood pressure/insomnia with a cold remedy', mechanism: 'Oral pseudoephedrine (α-agonist)', significance: 'supportive' },
    { sign: 'Best relief of allergic nasal symptoms', mechanism: 'Intranasal corticosteroid', significance: 'key' },
    { sign: 'Thinner, easier-to-clear sputum on a mucolytic', mechanism: 'N-acetylcysteine/bromhexine breaks mucus disulfide bonds', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Why first-generation antihistamines sedate', meaning: 'They cross the blood–brain barrier (block central H1)' },
    { clue: 'The cause of rebound nasal congestion', meaning: 'Prolonged topical α-agonist decongestant (rhinitis medicamentosa)' },
    { clue: 'The most effective drug class for allergic rhinitis', meaning: 'Intranasal corticosteroids' },
    { clue: 'The non-opioid central cough suppressant', meaning: 'Dextromethorphan' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Matching drug to symptom avoids harm — antibiotics for a viral cold are useless, topical decongestants must be time-limited, and productive coughs should not be over-suppressed. Allergic disease (polyps, rhinitis) is anti-inflammatory territory ([[nasal-sinus-inflammatory-pathology]]). Lower-airway drugs (asthma/COPD) are in [[asthma-copd-pharmacology]]; influenza antivirals in [[respiratory-antiviral-drugs]].' },
  ],

  mnemonics: [
    { hook: '1st-gen antihistamines = "Drowsy + Dry" (sedating, antimuscarinic)', expansion: ['Diphenhydramine, chlorpheniramine', '2nd-gen (loratadine, cetirizine, fexofenadine) = non-sedating'] },
    { hook: 'Topical decongestant "3–5 day rule" — beyond it, rebound', expansion: ['Oxymetazoline = fast but rebound', 'Pseudoephedrine = systemic, ↑BP'] },
  ],

  traps: [
    {
      questionCategory: 'Prolonged use of a topical nasal decongestant',
      wrongInstinct: 'If a nasal decongestant spray stops working, use it more often',
      rightAnswer: 'Topical α-agonist decongestants cause rebound congestion (rhinitis medicamentosa) after >3–5 days; the fix is to STOP the spray (switch to an intranasal steroid), not to use it more',
      why: 'Continued use worsens the very congestion it treated by downregulating/rebound vasodilation; recognising the self-perpetuating cycle prevents escalating misuse.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient using an oxymetazoline nasal spray for 10 days now has worse congestion than before. This is due to:',
      options: [
        { id: 'a', text: 'A new bacterial sinusitis' },
        { id: 'b', text: 'Rebound congestion (rhinitis medicamentosa) from prolonged topical decongestant use' },
        { id: 'c', text: 'An allergic reaction to the drug' },
        { id: 'd', text: 'Tachyphylaxis to antihistamine' },
      ],
      answerId: 'b',
      explanation: 'Topical α-agonist decongestants used beyond ~3–5 days cause rebound vasodilation and worsening congestion (rhinitis medicamentosa). Management is to stop the spray and switch to an intranasal corticosteroid.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which drug class provides the most effective control of moderate-to-severe allergic rhinitis?',
      options: [
        { id: 'a', text: 'Oral decongestants' },
        { id: 'b', text: 'First-generation antihistamines' },
        { id: 'c', text: 'Intranasal corticosteroids' },
        { id: 'd', text: 'Expectorants' },
      ],
      answerId: 'c',
      explanation: 'Intranasal corticosteroids are the most effective single treatment for allergic rhinitis, reducing congestion and inflammation better than antihistamines or decongestants, which are adjuncts.',
      tests: 'treatment',
    },
  ],

  figures: [],
};

export default coughColdAllergyDrugs;
