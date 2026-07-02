import type { Lecture } from '../../lib/types';

export const pharmacologyInLiverDisease: Lecture = {
  id: 'pharmacology-in-liver-disease',
  title: 'Pharmacology in Liver Disease',
  system: 'gi',
  source: 'L10 — Pharmacology in Liver Disease',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'L10 Liver Pharmacology' },
    { kind: 'treatment', label: 'Cirrhosis complications' },
    { kind: 'mechanism', label: 'Portal hypertension' },
  ],

  highYield: [
    '**Managing cirrhosis is largely managing its complications — variceal bleeding, ascites, spontaneous bacterial peritonitis, and hepatic encephalopathy — plus adjusting drug handling in a failing liver.** The failing liver alters drug metabolism (reduced first-pass, hypoalbuminaemia raises free drug) and impairs clotting.',
    '**Oesophageal varices: prevent bleeding with NON-SELECTIVE BETA-BLOCKERS (propranolol/carvedilol — lower portal pressure) and/or endoscopic band ligation.** For ACUTE variceal bleeding: resuscitate, give a **splanchnic vasoconstrictor (terlipressin/octreotide) to reduce portal flow, PROPHYLACTIC ANTIBIOTICS (e.g. ceftriaxone), and urgent endoscopic band ligation** (ligation is the treatment of choice; sclerotherapy is second-line).',
    '**Ascites: treat with SALT RESTRICTION and DIURETICS — spironolactone (an aldosterone antagonist, first-line because secondary hyperaldosteronism drives fluid retention) ± furosemide;** large-volume paracentesis (with albumin) for tense ascites. **Spontaneous bacterial peritonitis (SBP)** is diagnosed by ascitic neutrophils ≥250/mm³ and treated with a third-generation cephalosporin; antibiotic prophylaxis is given after a bleed or prior SBP.',
    '**Hepatic encephalopathy (hyperammonaemia): give LACTULOSE (traps ammonia in the gut as ammonium and speeds its excretion) and RIFAXIMIN (a non-absorbed antibiotic that reduces ammonia-producing gut bacteria); treat precipitants (GI bleed, infection, constipation, sedatives, electrolyte disturbance).** AVOID sedatives (benzodiazepines/opioids) — they precipitate and worsen encephalopathy.',
    '**Drug safety in liver disease: avoid or dose-reduce hepatotoxic and sedating drugs; hypoalbuminaemia increases free drug levels; and the impaired synthesis of clotting factors raises bleeding risk.** The overarching principle is to treat each complication of the cirrhosis in [[cirrhosis-fatty-liver-portal-hypertension]] while respecting the liver\'s reduced capacity to handle drugs.',
  ],

  mechanism: {
    title: 'Treat varices, ascites/SBP, encephalopathy; adjust drug handling',
    steps: [
      { id: 's1', label: 'Varices: prophylaxis β-blocker/ligation; acute = terlipressin + antibiotics + ligation', emphasis: 'key' },
      { id: 's2', label: 'Ascites: salt restriction + spironolactone (± furosemide); paracentesis + albumin', emphasis: 'key' },
      { id: 's3', label: 'SBP: ascitic neutrophils ≥250 → cephalosporin; prophylaxis after bleed/SBP', emphasis: 'key' },
      { id: 's4', label: 'Encephalopathy: lactulose + rifaximin; treat precipitants; AVOID sedatives', emphasis: 'danger' },
      { id: 's5', label: 'Drug handling: hypoalbuminaemia ↑free drug; avoid hepatotoxins/sedatives' },
    ],
  },

  examFindings: [
    { sign: 'Non-selective β-blocker to prevent variceal bleeding', mechanism: 'Reduces portal pressure', significance: 'key' },
    { sign: 'Terlipressin/octreotide + ceftriaxone + band ligation in acute variceal bleed', mechanism: 'Splanchnic vasoconstriction + SBP prophylaxis + definitive haemostasis', significance: 'key' },
    { sign: 'Spironolactone first-line for cirrhotic ascites', mechanism: 'Counters secondary hyperaldosteronism', significance: 'key' },
    { sign: 'Lactulose + rifaximin for encephalopathy', mechanism: 'Reduce gut ammonia production/absorption', significance: 'key' },
    { sign: 'Encephalopathy worsened by a benzodiazepine', mechanism: 'Sedatives precipitate encephalopathy (avoid)', significance: 'key' },
  ],

  investigations: [
    { clue: 'The drug class preventing variceal bleeding by lowering portal pressure', meaning: 'Non-selective β-blockers (propranolol/carvedilol)' },
    { clue: 'The first-line diuretic for cirrhotic ascites', meaning: 'Spironolactone (aldosterone antagonist)' },
    { clue: 'The ascitic neutrophil count diagnosing SBP', meaning: '≥250 cells/mm³' },
    { clue: 'The two drugs used for hepatic encephalopathy', meaning: 'Lactulose and rifaximin' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'This is the practical management of the decompensated cirrhosis in [[cirrhosis-fatty-liver-portal-hypertension]] — varices ([[esophageal-disorders-pathology]]), ascites/SBP and encephalopathy. Spironolactone reflects the RAAS/aldosterone role in fluid handling; lactulose is also an osmotic laxative ([[laxatives-antidiarrheals-ors]]). Avoiding sedatives and hepatotoxins is essential when the liver cannot clear drugs.' },
  ],

  mnemonics: [
    { hook: 'Acute variceal bleed = "Terlipressin + anTibiotics + Tie (band ligation)"', expansion: ['Ligation = treatment of choice', 'Antibiotics (ceftriaxone) improve survival'] },
    { hook: 'Encephalopathy = "Lactulose + Rifaximin, avoid sedatives"', expansion: ['Lactulose traps ammonia', 'Rifaximin ↓ammonia-producing bacteria', 'Treat precipitants'] },
  ],

  traps: [
    {
      questionCategory: 'Sedatives in hepatic encephalopathy',
      wrongInstinct: 'A cirrhotic patient who is agitated from encephalopathy should be calmed with a benzodiazepine',
      rightAnswer: 'AVOID sedatives (benzodiazepines, opioids) in hepatic encephalopathy — the failing liver cannot clear them and they PRECIPITATE/worsen encephalopathy; treat the precipitant and give lactulose/rifaximin instead',
      why: 'Sedatives potentiate the same CNS depression that encephalopathy causes and accumulate due to poor hepatic clearance, deepening coma; the correct approach targets ammonia and precipitants, not sedation.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The first-line diuretic for the ascites of cirrhosis is spironolactone because it:',
      options: [
        { id: 'a', text: 'Is a loop diuretic with the strongest effect' },
        { id: 'b', text: 'Antagonises aldosterone, countering the secondary hyperaldosteronism that drives sodium and water retention' },
        { id: 'c', text: 'Directly lowers portal pressure' },
        { id: 'd', text: 'Reduces ammonia production' },
      ],
      answerId: 'b',
      explanation: 'Cirrhotic ascites involves secondary hyperaldosteronism; spironolactone (an aldosterone antagonist) is first-line, often combined with furosemide, alongside salt restriction. Large-volume paracentesis with albumin is used for tense ascites.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'Lactulose improves hepatic encephalopathy mainly by:',
      options: [
        { id: 'a', text: 'Sedating the agitated patient' },
        { id: 'b', text: 'Trapping ammonia in the gut (as ammonium) and speeding its excretion' },
        { id: 'c', text: 'Lowering portal pressure' },
        { id: 'd', text: 'Increasing clotting factor synthesis' },
      ],
      answerId: 'b',
      explanation: 'Lactulose acidifies the colon, converting ammonia (NH₃) to poorly absorbed ammonium (NH₄⁺) and acting as an osmotic laxative to remove it; rifaximin adds benefit by reducing ammonia-producing gut bacteria. Sedatives must be avoided.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default pharmacologyInLiverDisease;
