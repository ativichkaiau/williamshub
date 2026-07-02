import type { Lecture } from '../../lib/types';

export const gastritisAndGastropathy: Lecture = {
  id: 'gastritis-and-gastropathy',
  title: 'Acute & Chronic Gastritis',
  system: 'gi',
  source: 'L1 — Pathology of the Upper GI Tract',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'L1 Upper GI Pathology' },
    { kind: 'disease', label: 'Gastritis' },
    { kind: 'exam', label: 'H. pylori' },
  ],

  highYield: [
    '**Gastritis is inflammation of the gastric mucosa; "gastropathy" is injury with little inflammation.** The balance is between aggressive factors (acid, pepsin, H. pylori, NSAIDs, bile, alcohol) and defensive factors (mucus, bicarbonate, prostaglandins, blood flow, epithelial renewal).',
    '**Acute (erosive) gastritis/gastropathy follows a sudden hit to mucosal defence — NSAIDs (block protective prostaglandins), alcohol, severe stress, or ischaemia.** Stress-related mucosal disease includes **Curling ulcers (severe burns) and Cushing ulcers (raised intracranial pressure — ↑vagal acid)**. It causes erosions/haemorrhage and can bleed.',
    '**Chronic gastritis has two main types. H. pylori gastritis (commonest) is ANTRAL-predominant** — a Gram-negative, urease-producing, curved rod that colonises the mucus layer, driving chronic active inflammation, and is the leading cause of **peptic ulcers, gastric adenocarcinoma and MALT lymphoma**. Urease is the basis of the urea breath test.',
    '**Autoimmune gastritis is BODY/FUNDUS-predominant: autoantibodies against parietal cells and intrinsic factor** destroy oxyntic glands → **achlorhydria, loss of intrinsic factor → vitamin B12 deficiency (pernicious anaemia)**, and reactive hypergastrinaemia (risk of neuroendocrine/ECL-cell tumours). It is associated with other autoimmune diseases.',
    '**Chronic gastritis matters because it is the soil for cancer:** H. pylori → chronic atrophic gastritis → **intestinal metaplasia → dysplasia → intestinal-type adenocarcinoma** (the Correa cascade). Eradicating H. pylori heals ulcers, can regress MALT lymphoma, and reduces cancer risk — the therapeutic payoff of identifying the organism.',
  ],

  mechanism: {
    title: 'Aggressive vs defensive imbalance; acute (NSAID/stress) vs chronic (H. pylori/autoimmune)',
    steps: [
      { id: 's1', label: 'Injury = aggressive factors overwhelm mucosal defence', emphasis: 'key' },
      { id: 's2', label: 'Acute erosive: NSAIDs (↓prostaglandins), alcohol, stress (Curling/Cushing)', emphasis: 'key' },
      { id: 's3', label: 'Chronic H. pylori: antral, urease+, → ulcer/cancer/MALT', emphasis: 'key' },
      { id: 's4', label: 'Autoimmune: body/fundus, anti-parietal/IF → B12 deficiency (pernicious)', emphasis: 'key' },
      { id: 's5', label: 'H. pylori → atrophy → metaplasia → dysplasia → adenocarcinoma (Correa)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Antral-predominant chronic active gastritis, urease-positive', mechanism: 'Helicobacter pylori infection', significance: 'key' },
    { sign: 'Body/fundus atrophy + B12 deficiency + achlorhydria', mechanism: 'Autoimmune gastritis (anti-parietal/IF antibodies)', significance: 'key' },
    { sign: 'Gastric erosions after NSAIDs', mechanism: 'Prostaglandin inhibition reduces mucosal defence', significance: 'key' },
    { sign: 'Stress ulcer after burns (Curling) or raised ICP (Cushing)', mechanism: 'Ischaemia / vagal acid hypersecretion', significance: 'supportive' },
    { sign: 'Intestinal metaplasia of gastric mucosa', mechanism: 'Chronic H. pylori (premalignant, Correa cascade)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The urease-producing organism causing antral gastritis', meaning: 'Helicobacter pylori (basis of urea breath test)' },
    { clue: 'The gastritis causing B12 deficiency', meaning: 'Autoimmune (body/fundus) gastritis — pernicious anaemia' },
    { clue: 'The mucosal defence NSAIDs impair', meaning: 'Prostaglandin-dependent mucus/bicarbonate/blood flow' },
    { clue: 'The stepwise pathway to intestinal-type gastric cancer', meaning: 'Chronic gastritis → atrophy → metaplasia → dysplasia → carcinoma' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'H. pylori eradication (and acid suppression) heals ulcers, regresses MALT lymphoma and cuts cancer risk ([[acid-suppression-h-pylori-therapy]], [[peptic-ulcer-disease]]). Autoimmune gastritis needs B12 replacement. Chronic gastritis is the precursor of the [[gastric-carcinoma-lymphoma]]; NSAID gastropathy links to the arachidonic-acid/prostaglandin pathway.' },
  ],

  mnemonics: [
    { hook: 'Chronic gastritis "A vs B": Autoimmune = Body/fundus (Anti-parietal, B12); B = Bacterial H. pylori = antrum', expansion: ['H. pylori commonest', 'Autoimmune → pernicious anaemia'] },
    { hook: 'Stress ulcers: "Curling = Charred (burns); Cushing = Cranial (↑ICP)"', expansion: ['Curling: hypovolaemia/ischaemia', 'Cushing: vagal acid hypersecretion'] },
  ],

  traps: [
    {
      questionCategory: 'Location of H. pylori vs autoimmune gastritis',
      wrongInstinct: 'Autoimmune gastritis and H. pylori gastritis affect the same part of the stomach',
      rightAnswer: 'H. pylori gastritis is typically ANTRAL-predominant, whereas autoimmune gastritis targets the BODY/FUNDUS (oxyntic mucosa), destroying parietal cells and causing B12 deficiency — the location and consequences differ',
      why: 'The distribution predicts the complication: antral H. pylori → ulcers/cancer, while body-predominant autoimmune disease → achlorhydria and pernicious anaemia; conflating them misses the B12 deficiency.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient has body/fundus-predominant atrophic gastritis, achlorhydria and macrocytic anaemia with antibodies to parietal cells and intrinsic factor. This is:',
      options: [
        { id: 'a', text: 'Helicobacter pylori gastritis' },
        { id: 'b', text: 'Autoimmune (pernicious anaemia) gastritis' },
        { id: 'c', text: 'NSAID gastropathy' },
        { id: 'd', text: 'Curling ulcer' },
      ],
      answerId: 'b',
      explanation: 'Autoimmune gastritis destroys oxyntic (body/fundus) glands via anti-parietal-cell and anti-intrinsic-factor antibodies, causing achlorhydria and vitamin B12 deficiency (pernicious anaemia). H. pylori is instead antral-predominant.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'NSAIDs predispose to gastric erosions and ulcers mainly by:',
      options: [
        { id: 'a', text: 'Increasing mucus secretion' },
        { id: 'b', text: 'Inhibiting prostaglandin synthesis, reducing mucosal defence' },
        { id: 'c', text: 'Neutralising gastric acid' },
        { id: 'd', text: 'Killing Helicobacter pylori' },
      ],
      answerId: 'b',
      explanation: 'NSAIDs inhibit cyclo-oxygenase, reducing protective prostaglandins that maintain mucus, bicarbonate and mucosal blood flow; the loss of this defence allows acid/pepsin injury.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default gastritisAndGastropathy;
