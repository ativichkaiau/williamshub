import type { Lecture } from '../../lib/types';

export const angiostrongyliasisEosinophilicMeningitis: Lecture = {
  id: 'angiostrongyliasis-eosinophilic-meningitis',
  title: 'Angiostrongyliasis & Eosinophilic Meningitis',
  system: 'parasitology',
  source: 'L7 — Gnathostomiasis & Angiostrongyliasis',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Parasitology' },
    { kind: 'lecture', label: 'L7 Gnathostoma & Angiostrongylus' },
    { kind: 'disease', label: 'Angiostrongyliasis' },
    { kind: 'exam', label: 'Eosinophilic meningitis' },
  ],

  highYield: [
    '**Angiostrongylus cantonensis (the "rat lungworm") is the leading infectious cause of EOSINOPHILIC MENINGITIS**, endemic in Southeast Asia and the Pacific. The rat is the definitive host; humans are accidental hosts infected by eating raw/undercooked SNAILS or SLUGS (the intermediate host), or contaminated vegetables/paratenic hosts (freshwater prawns, frogs).',
    '**In humans the larvae migrate to the brain and meninges but cannot mature, dying there and provoking an intense eosinophilic inflammatory response → EOSINOPHILIC MENINGITIS: headache, neck stiffness, and often paraesthesiae/hyperaesthesia, with EOSINOPHILS in the CSF.** It is usually self-limiting but can be severe.',
    '**The key diagnostic clue is EOSINOPHILS IN THE CSF (eosinophilic pleocytosis) plus peripheral eosinophilia and the right exposure (snails/slugs in an endemic area).** Diagnosis is supported by serology; the larvae are rarely found. It is managed supportively (analgesia, careful use of steroids; repeated lumbar puncture relieves headache) — anti-helminthics are used cautiously as killing larvae can worsen inflammation.',
    '**Angiostrongylus costaricensis is a related species that instead causes ABDOMINAL angiostrongyliasis (mesenteric arteritis mimicking appendicitis), rather than meningitis.** So the genus causes either eosinophilic meningitis (cantonensis) or an abdominal syndrome (costaricensis).',
    'The high-yield differential of eosinophilic meningitis in Southeast Asia is *Angiostrongylus* (snails/slugs) versus *Gnathostoma* (raw freshwater fish — [[gnathostomiasis]]); both give CSF eosinophilia. The clinical clue "eosinophils in the CSF + snail/slug exposure" points to *Angiostrongylus*. Prevention is cooking snails/vegetables.',
  ],

  mechanism: {
    title: 'Rat lungworm from snails/slugs → larvae die in brain → eosinophilic meningitis (CSF eosinophils)',
    steps: [
      { id: 's1', label: 'A. cantonensis (rat lungworm) from raw SNAILS/SLUGS (or paratenic hosts)', emphasis: 'key' },
      { id: 's2', label: 'Larvae migrate to brain/meninges, die → intense eosinophilic response', emphasis: 'key' },
      { id: 's3', label: 'Eosinophilic MENINGITIS: headache, neck stiffness, paraesthesiae', emphasis: 'key' },
      { id: 's4', label: 'CSF EOSINOPHILS + peripheral eosinophilia; serology supports', emphasis: 'key' },
      { id: 's5', label: 'Supportive care (± cautious steroids); A. costaricensis = abdominal form' },
    ],
  },

  examFindings: [
    { sign: 'Headache, neck stiffness with eosinophils in the CSF after eating snails', mechanism: 'Angiostrongylus cantonensis eosinophilic meningitis', significance: 'key' },
    { sign: 'CSF eosinophilic pleocytosis + peripheral eosinophilia', mechanism: 'Eosinophilic meningitis (parasitic)', significance: 'key' },
    { sign: 'Prominent paraesthesiae/hyperaesthesia', mechanism: 'Larval migration in the CNS', significance: 'supportive' },
    { sign: 'Abdominal pain mimicking appendicitis (mesenteric arteritis)', mechanism: 'Angiostrongylus costaricensis (abdominal form)', significance: 'supportive' },
    { sign: 'Self-limiting course in most patients', mechanism: 'Larvae die and inflammation resolves', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The leading infectious cause of eosinophilic meningitis', meaning: 'Angiostrongylus cantonensis (rat lungworm)' },
    { clue: 'The food/exposure source', meaning: 'Raw/undercooked snails or slugs (± paratenic hosts, vegetables)' },
    { clue: 'The diagnostic CSF finding', meaning: 'Eosinophils in the CSF (eosinophilic pleocytosis)' },
    { clue: 'The disease caused by A. costaricensis instead', meaning: 'Abdominal angiostrongyliasis (mesenteric arteritis)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: '*Angiostrongylus* is THE parasitic cause of eosinophilic meningitis (CSF eosinophils + snail/slug exposure), a key differential with *Gnathostoma* ([[gnathostomiasis]]) in Southeast Asia. Management is supportive (killing larvae can worsen CNS inflammation), and prevention is cooking snails/vegetables. It fits the tissue-nematode/larva-migrans theme ([[toxocariasis-larva-migrans]]).' },
  ],

  mnemonics: [
    { hook: 'Angiostrongylus = "rat lungworm from snails/slugs → eosinophilic meningitis (CSF eosinophils)"', expansion: ['Self-limiting usually', 'Supportive care ± cautious steroids'] },
    { hook: 'Eosinophilic meningitis SE Asia = "Angiostrongylus (snails) vs Gnathostoma (raw fish)"', expansion: ['Both = CSF eosinophils', 'A. costaricensis = abdominal form'] },
  ],

  traps: [
    {
      questionCategory: 'Treating eosinophilic meningitis from Angiostrongylus',
      wrongInstinct: 'Aggressive anti-helminthic (larvicidal) drugs should always be given to kill the worms in the CNS',
      rightAnswer: 'Angiostrongylus meningitis is largely managed SUPPORTIVELY (analgesia, careful corticosteroids, repeated LP for headache) — aggressively killing larvae in the CNS can WORSEN the inflammatory reaction; the disease is usually self-limiting',
      why: 'The damage is from the eosinophilic inflammatory response to dying larvae, so provoking more larval death can intensify CNS inflammation; supportive care and cautious anti-inflammatory treatment are preferred.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient in Southeast Asia develops headache and neck stiffness after eating raw snails; lumbar puncture shows eosinophils in the CSF. The most likely cause is:',
      options: [
        { id: 'a', text: 'Angiostrongylus cantonensis (rat lungworm)' },
        { id: 'b', text: 'Streptococcus pneumoniae' },
        { id: 'c', text: 'Naegleria fowleri' },
        { id: 'd', text: 'Entamoeba histolytica' },
      ],
      answerId: 'a',
      explanation: 'Angiostrongylus cantonensis, acquired from raw snails/slugs, is the leading cause of eosinophilic meningitis; larvae migrate to the CNS and die, provoking an eosinophilic inflammatory response with eosinophils in the CSF.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The characteristic cerebrospinal fluid finding in Angiostrongylus meningitis is:',
      options: [
        { id: 'a', text: 'Neutrophilic pleocytosis with low glucose' },
        { id: 'b', text: 'Eosinophilic pleocytosis (eosinophils in the CSF)' },
        { id: 'c', text: 'Lymphocytes with very high protein' },
        { id: 'd', text: 'Normal CSF' },
      ],
      answerId: 'b',
      explanation: 'Eosinophilic meningitis is defined by eosinophils in the CSF; together with peripheral eosinophilia and an exposure history (snails/slugs), it points to Angiostrongylus cantonensis (Gnathostoma is the other major cause).',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default angiostrongyliasisEosinophilicMeningitis;
