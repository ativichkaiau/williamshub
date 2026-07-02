import type { Lecture } from '../../lib/types';

export const mucolyticsCoughPharmacology: Lecture = {
  id: 'mucolytics-cough-pharmacology',
  title: 'Cough & Mucoactive Drugs',
  system: 'respiratory',
  source: 'L3 — Respiratory Pharmacology',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L3 Respiratory Drugs' },
    { kind: 'treatment', label: 'Antitussives & mucolytics' },
    { kind: 'mechanism', label: 'Cough reflex' },
  ],

  highYield: [
    '**Cough is a protective reflex (irritant receptors → vagal afferents → the brainstem cough centre → expiratory effort), so the first therapeutic question is whether the cough is DRY (unproductive, worth suppressing) or PRODUCTIVE (clearing secretions, should NOT be suppressed).** Drugs split into antitussives (suppress) and mucoactive agents (aid clearance).',
    '**ANTITUSSIVES suppress a dry, distressing cough: DEXTROMETHORPHAN (a central, non-opioid suppressant acting on the cough centre) and CODEINE (an opioid suppressant — constipation, sedation, dependence).** They reduce the cough reflex and are appropriate only when the cough serves no useful clearance function.',
    '**MUCOACTIVE drugs help a productive cough clear secretions. EXPECTORANTS (guaifenesin) increase secretion volume/hydration to loosen mucus; MUCOLYTICS break down mucus — N-ACETYLCYSTEINE and bromhexine/ambroxol cleave the disulfide bonds that make mucus viscid**, making it easier to expectorate (useful in chronic bronchitis, CF).',
    '**N-acetylcysteine has a second, unrelated high-yield use: it is the ANTIDOTE for paracetamol (acetaminophen) overdose** (it replenishes glutathione) — a favourite exam link. Its mucolytic action (disulfide-bond cleavage) and its antioxidant/glutathione role are distinct mechanisms of the same drug.',
    '**The guiding principle: match the drug to the cough. Suppress a dry cough (dextromethorphan/codeine); loosen and clear a productive cough (expectorant/mucolytic) — and do NOT suppress a productive cough that is clearing infection.** These complement the cold/allergy drugs ([[cough-cold-allergy-drugs]]) and the lower-airway bronchodilators ([[asthma-copd-pharmacology]]).',
  ],

  mechanism: {
    title: 'Dry cough → suppress (antitussive); productive → clear (expectorant/mucolytic)',
    steps: [
      { id: 's1', label: 'Cough = protective reflex; dry (suppress) vs productive (clear)', emphasis: 'key' },
      { id: 's2', label: 'Antitussives: dextromethorphan (central, non-opioid), codeine (opioid)', emphasis: 'key' },
      { id: 's3', label: 'Expectorants (guaifenesin) hydrate/loosen mucus', emphasis: 'key' },
      { id: 's4', label: 'Mucolytics (N-acetylcysteine, bromhexine) cleave mucus disulfide bonds', emphasis: 'key' },
      { id: 's5', label: 'N-acetylcysteine = paracetamol antidote (glutathione); don\'t suppress productive cough' },
    ],
  },

  examFindings: [
    { sign: 'Dextromethorphan for a dry, distressing cough', mechanism: 'Central non-opioid cough suppression', significance: 'key' },
    { sign: 'Constipation/sedation from a cough medicine', mechanism: 'Codeine (opioid antitussive)', significance: 'supportive' },
    { sign: 'Thinner, easier-to-clear sputum on a mucolytic', mechanism: 'Disulfide-bond cleavage (N-acetylcysteine/bromhexine)', significance: 'key' },
    { sign: 'N-acetylcysteine given for paracetamol overdose', mechanism: 'Glutathione repletion (antidote — separate use)', significance: 'key' },
    { sign: 'Advice NOT to suppress a productive cough', mechanism: 'The cough is clearing secretions/infection', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The central non-opioid cough suppressant', meaning: 'Dextromethorphan' },
    { clue: 'The way mucolytics reduce mucus viscosity', meaning: 'Cleaving disulfide bonds (e.g. N-acetylcysteine)' },
    { clue: 'The second, non-respiratory use of N-acetylcysteine', meaning: 'Antidote for paracetamol (acetaminophen) overdose' },
    { clue: 'The cough type that should not be suppressed', meaning: 'A productive cough (it clears secretions)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Matching the drug to a dry vs productive cough avoids harm (never suppress a clearing cough); mucolytics help chronic bronchitis and CF ([[cystic-fibrosis]]). N-acetylcysteine\'s dual role (mucolytic + paracetamol antidote) is a classic exam link (paracetamol toxicity — see [[acute-chronic-pancreatitis]] context of NAPQI). These complement the upper-airway cold/allergy drugs ([[cough-cold-allergy-drugs]]) and lower-airway therapy ([[asthma-copd-pharmacology]]).' },
  ],

  mnemonics: [
    { hook: 'Cough drugs: "Dry = suppress (dextromethorphan/codeine); Wet = clear (expectorant/mucolytic)"', expansion: ['Mucolytics cleave disulfide bonds', 'Don\'t suppress a productive cough'] },
    { hook: 'N-acetylcysteine "two jobs": Mucolytic + paracetamol antidote (glutathione)', expansion: ['Breaks mucus disulfide bonds', 'Replenishes glutathione in overdose'] },
  ],

  traps: [
    {
      questionCategory: 'When to suppress a cough',
      wrongInstinct: 'Any troublesome cough should be treated with a cough suppressant',
      rightAnswer: 'Only a DRY, unproductive cough should be suppressed (dextromethorphan/codeine); a PRODUCTIVE cough is clearing secretions and should be helped to clear (expectorant/mucolytic), NOT suppressed',
      why: 'Suppressing a productive cough traps secretions and can worsen infection; distinguishing dry from productive is the key decision that determines whether to suppress or to mobilise mucus.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Mucolytic drugs such as N-acetylcysteine reduce sputum viscosity by:',
      options: [
        { id: 'a', text: 'Suppressing the cough centre' },
        { id: 'b', text: 'Cleaving the disulfide bonds that cross-link mucus glycoproteins' },
        { id: 'c', text: 'Constricting bronchial smooth muscle' },
        { id: 'd', text: 'Blocking histamine receptors' },
      ],
      answerId: 'b',
      explanation: 'Mucolytics such as N-acetylcysteine break the disulfide bonds that make mucus viscid, thinning secretions so they can be cleared; N-acetylcysteine is also the antidote for paracetamol overdose (glutathione repletion).',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which cough is most appropriately treated with an antitussive such as dextromethorphan?',
      options: [
        { id: 'a', text: 'A productive cough clearing purulent sputum' },
        { id: 'b', text: 'A dry, unproductive, distressing cough' },
        { id: 'c', text: 'A cough with copious mucus in bronchiectasis' },
        { id: 'd', text: 'A cough due to a retained foreign body' },
      ],
      answerId: 'b',
      explanation: 'Antitussives are appropriate for a dry, unproductive cough that serves no clearance function; a productive cough should not be suppressed because it is clearing secretions.',
      tests: 'treatment',
    },
  ],

  figures: [],
};

export default mucolyticsCoughPharmacology;
