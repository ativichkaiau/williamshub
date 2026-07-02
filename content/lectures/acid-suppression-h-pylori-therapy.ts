import type { Lecture } from '../../lib/types';

export const acidSuppressionHPyloriTherapy: Lecture = {
  id: 'acid-suppression-h-pylori-therapy',
  title: 'Acid Suppression & H. pylori Eradication',
  system: 'gi',
  source: 'L6 — Peptic Ulcer Disease',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'L6 Peptic Ulcer' },
    { kind: 'treatment', label: 'PPIs / triple therapy' },
    { kind: 'mechanism', label: 'Proton pump' },
  ],

  highYield: [
    '**Acid production ends at the parietal-cell H⁺/K⁺-ATPase (the proton pump), stimulated by histamine (H2), gastrin and acetylcholine (M3).** Drugs reduce acid at different points: **proton pump inhibitors (block the pump — most effective), H2-receptor antagonists (block histamine drive), and antacids (neutralise existing acid).**',
    '**Proton pump inhibitors (omeprazole, esomeprazole, "-prazoles") irreversibly inhibit the H⁺/K⁺-ATPase — the most powerful acid suppressors, first-line for ulcers, GERD and part of H. pylori regimens.** They are prodrugs activated in acid, best taken before meals. Long-term effects: **↓B12/iron/magnesium/calcium absorption, increased risk of C. difficile and enteric infections, and rebound acid on stopping.**',
    '**H2-receptor antagonists (ranitidine, famotidine, "-tidines") block histamine-driven acid — useful but less potent than PPIs, with tolerance over time.** Antacids (aluminium, magnesium, calcium salts) give rapid symptomatic relief; **mucosal protectants: sucralfate (coats ulcers) and bismuth; misoprostol (a prostaglandin analogue) prevents NSAID ulcers** but causes diarrhoea and is abortifacient (avoid in pregnancy).',
    '**Helicobacter pylori eradication heals ulcers, prevents recurrence, and can regress MALT lymphoma — standard therapy is "triple therapy": a PPI + two antibiotics (clarithromycin + amoxicillin, or metronidazole) for ~14 days.** Where clarithromycin resistance is high, **bismuth-based QUADRUPLE therapy (PPI + bismuth + metronidazole + tetracycline)** is used. Eradication is confirmed by urea breath test or stool antigen (off PPI).',
    '**Match the drug to the goal: heal an ulcer / control GERD → PPI; prevent NSAID ulcers → PPI or misoprostol; eradicate H. pylori → PPI + antibiotics.** Always test for and treat H. pylori in peptic ulcer disease ([[peptic-ulcer-disease]]) — treating acid alone lets H. pylori ulcers recur.',
  ],

  mechanism: {
    title: 'Reduce acid (PPI > H2 > antacid); eradicate H. pylori (PPI + antibiotics)',
    steps: [
      { id: 's1', label: 'Parietal-cell H⁺/K⁺-ATPase makes acid (driven by H2, gastrin, M3)', emphasis: 'key' },
      { id: 's2', label: 'PPIs irreversibly block the pump — most effective; take before meals', emphasis: 'key' },
      { id: 's3', label: 'H2 blockers (less potent, tolerance); antacids (neutralise)' },
      { id: 's4', label: 'Protectants: sucralfate/bismuth; misoprostol prevents NSAID ulcers', emphasis: 'key' },
      { id: 's5', label: 'H. pylori: triple (PPI + 2 antibiotics) or bismuth quadruple therapy', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'PPI chosen to heal a peptic ulcer or severe GERD', mechanism: 'Irreversible H⁺/K⁺-ATPase inhibition (most potent)', significance: 'key' },
    { sign: 'B12/magnesium deficiency or C. difficile on long-term PPI', mechanism: 'Chronic acid suppression effects', significance: 'key' },
    { sign: 'Triple therapy (PPI + clarithromycin + amoxicillin) for an ulcer', mechanism: 'H. pylori eradication', significance: 'key' },
    { sign: 'Misoprostol to prevent NSAID-induced ulcers', mechanism: 'Prostaglandin analogue restores mucosal defence', significance: 'supportive' },
    { sign: 'Sucralfate coating an ulcer base', mechanism: 'Mucosal protectant', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The most effective class of acid-suppressing drugs', meaning: 'Proton pump inhibitors' },
    { clue: 'The enzyme PPIs inhibit', meaning: 'The parietal-cell H⁺/K⁺-ATPase (proton pump)' },
    { clue: 'The standard first-line H. pylori regimen', meaning: 'Triple therapy: PPI + two antibiotics (~14 days)' },
    { clue: 'The prostaglandin analogue that prevents NSAID ulcers', meaning: 'Misoprostol (avoid in pregnancy)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Correctly treating peptic ulcers ([[peptic-ulcer-disease]]) means suppressing acid AND eradicating H. pylori — acid suppression alone allows recurrence, and eradication can regress the MALT lymphoma of [[gastric-carcinoma-lymphoma]]. Misoprostol\'s prostaglandin action mirrors the NSAID/mucosal-defence mechanism of [[gastritis-and-gastropathy]]. Long-term PPIs affect B12/iron/magnesium ([[water-soluble-vitamins-trace-elements]]).' },
  ],

  mnemonics: [
    { hook: 'Potency: "PPI > H2 blocker > antacid"', expansion: ['-prazole = PPI (pump)', '-tidine = H2 blocker', 'Antacid = neutralise'] },
    { hook: 'H. pylori triple = "PPI + Clarithromycin + Amoxicillin"; quadruple adds Bismuth + metronidazole + tetracycline', expansion: ['Confirm eradication: urea breath/stool antigen', 'Test AND treat in PUD'] },
  ],

  traps: [
    {
      questionCategory: 'Treating H. pylori-positive peptic ulcers',
      wrongInstinct: 'A PPI alone is sufficient to cure an H. pylori-associated peptic ulcer',
      rightAnswer: 'An H. pylori-positive ulcer needs ERADICATION (PPI + antibiotics), not acid suppression alone — a PPI heals the ulcer but leaves the organism, so ulcers recur unless H. pylori is eradicated',
      why: 'H. pylori is the underlying cause; treating only the acid addresses the symptom while the infection persists, leading to relapse — hence "test and treat" for the organism.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Proton pump inhibitors reduce gastric acid most effectively because they:',
      options: [
        { id: 'a', text: 'Block histamine H2 receptors' },
        { id: 'b', text: 'Irreversibly inhibit the parietal-cell H⁺/K⁺-ATPase (the final common step of acid secretion)' },
        { id: 'c', text: 'Neutralise acid already in the stomach' },
        { id: 'd', text: 'Coat the ulcer base' },
      ],
      answerId: 'b',
      explanation: 'PPIs irreversibly inhibit the H⁺/K⁺-ATPase, the final step in acid secretion regardless of the stimulus (histamine, gastrin or acetylcholine), making them more effective than H2 blockers or antacids.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Standard first-line eradication therapy for Helicobacter pylori consists of:',
      options: [
        { id: 'a', text: 'A proton pump inhibitor alone' },
        { id: 'b', text: 'A proton pump inhibitor plus two antibiotics (triple therapy)' },
        { id: 'c', text: 'An antacid plus one antibiotic' },
        { id: 'd', text: 'Misoprostol alone' },
      ],
      answerId: 'b',
      explanation: 'Triple therapy — a PPI plus two antibiotics (e.g. clarithromycin and amoxicillin) for around 14 days — is standard; bismuth-based quadruple therapy is used where clarithromycin resistance is high. Eradication both heals ulcers and prevents recurrence.',
      tests: 'treatment',
    },
  ],

  figures: [],
};

export default acidSuppressionHPyloriTherapy;
