import type { Lecture } from '../../lib/types';

export const ascariasisLargeRoundworm: Lecture = {
  id: 'ascariasis-large-roundworm',
  title: 'Ascariasis (Ascaris lumbricoides)',
  system: 'parasitology',
  source: 'L5 — Introduction to Helminths & Ascariasis',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Parasitology' },
    { kind: 'lecture', label: 'L5 Helminths & Ascariasis' },
    { kind: 'disease', label: 'Ascariasis' },
    { kind: 'exam', label: 'Lung migration' },
  ],

  highYield: [
    '**Ascaris lumbricoides (the large roundworm) is the commonest human helminth — a soil-transmitted nematode acquired by ingesting EMBRYONATED EGGS from faecally-contaminated soil/food.** It is one of the "geohelminths" and is hugely prevalent where sanitation is poor.',
    '**Its life cycle includes a LUNG-MIGRATION phase: swallowed eggs hatch in the small intestine → larvae penetrate the gut wall → travel via the blood to the LUNGS → break into alveoli, are coughed up and swallowed → mature into adult worms in the small bowel.** During the lung phase they can cause a transient cough with eosinophilia and pulmonary infiltrates — **Löffler syndrome** (see [[parasitic-lung-infections]]).',
    '**Adult worms in the intestine cause abdominal symptoms and, with a heavy WORM BURDEN, mechanical complications: intestinal OBSTRUCTION (a bolus of worms — especially in children) and BILIARY/pancreatic obstruction if a worm migrates into the bile duct** (biliary ascariasis). Malnutrition can result in heavily infected children.',
    '**Diagnosis is by finding the characteristic Ascaris EGGS (bile-stained, mammillated) in stool, or sometimes by seeing an adult worm passed or on imaging.** The large adult worms are visible to the naked eye. Treatment is a benzimidazole — **albendazole or mebendazole**.',
    '**The high-yield story: faecal–oral egg → lung migration (Löffler) → adult in gut → obstruction if heavy.** *Ascaris* is the prototype soil-transmitted helminth and the anchor of the helminth introduction ([[helminth-classification-overview]]); prevention is sanitation and mass deworming programmes.',
  ],

  mechanism: {
    title: 'Faecal-oral egg → larva lung migration (Löffler) → adult in gut → obstruction if heavy',
    steps: [
      { id: 's1', label: 'Ingest embryonated EGGS from contaminated soil/food (geohelminth)', emphasis: 'key' },
      { id: 's2', label: 'Larvae migrate: gut → blood → LUNGS → coughed up → swallowed', emphasis: 'key' },
      { id: 's3', label: 'Lung phase → Löffler syndrome (cough, eosinophilia, infiltrates)' },
      { id: 's4', label: 'Adults in small bowel; heavy load → intestinal/biliary obstruction', emphasis: 'danger' },
      { id: 's5', label: 'Dx: mammillated eggs in stool; treat albendazole/mebendazole', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Transient cough + eosinophilia + migratory lung infiltrates', mechanism: 'Larval lung migration (Löffler syndrome)', significance: 'key' },
    { sign: 'Intestinal obstruction by a bolus of worms in a child', mechanism: 'Heavy Ascaris burden', significance: 'key' },
    { sign: 'Biliary obstruction/cholangitis from a migrating worm', mechanism: 'Biliary ascariasis', significance: 'key' },
    { sign: 'Bile-stained, mammillated eggs in stool', mechanism: 'Ascaris lumbricoides', significance: 'supportive' },
    { sign: 'Passage of a large worm visible to the naked eye', mechanism: 'Adult Ascaris', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The commonest human helminth', meaning: 'Ascaris lumbricoides' },
    { clue: 'The pulmonary syndrome from its larval migration', meaning: 'Löffler syndrome' },
    { clue: 'The complication of a heavy worm burden', meaning: 'Intestinal (or biliary) obstruction' },
    { clue: 'The treatment of ascariasis', meaning: 'Albendazole or mebendazole' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: '*Ascaris* is the prototype soil-transmitted helminth ([[helminth-classification-overview]]); its lung-migration phase is a cause of the eosinophilic Löffler pneumonia ([[parasitic-lung-infections]]), and heavy infection causes intestinal/biliary obstruction. Treatment is a benzimidazole, and prevention is sanitation/mass deworming. It shares the migration theme with hookworm/*Strongyloides* ([[intestinal-roundworms-phasmid]]).' },
  ],

  mnemonics: [
    { hook: 'Ascaris = "egg → lungs (Löffler) → gut → obstruction if heavy"', expansion: ['Geohelminth (soil eggs)', 'Albendazole/mebendazole'] },
    { hook: '"Big worm, big problems": intestinal + biliary obstruction', expansion: ['Largest intestinal nematode', 'Heavy burden in children'] },
  ],

  traps: [
    {
      questionCategory: 'The Ascaris life cycle',
      wrongInstinct: 'Ascaris larvae stay in the gut after the eggs are swallowed',
      rightAnswer: 'Ascaris larvae undergo a LUNG MIGRATION — they penetrate the gut wall, travel via the blood to the lungs, are coughed up and re-swallowed, and only then mature into adults in the small intestine (causing Löffler syndrome during the lung phase)',
      why: 'Missing the transpulmonary migration overlooks why ascariasis can present with a cough/eosinophilia and pulmonary infiltrates before any GI symptoms — a classic exam point shared with hookworm and Strongyloides.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A child from an area with poor sanitation develops a transient cough with eosinophilia and migratory lung infiltrates, followed weeks later by abdominal symptoms. This pulmonary phase reflects:',
      options: [
        { id: 'a', text: 'Direct lung infection by adult worms' },
        { id: 'b', text: 'Larval migration of Ascaris through the lungs (Löffler syndrome)' },
        { id: 'c', text: 'Bacterial pneumonia' },
        { id: 'd', text: 'Tuberculosis' },
      ],
      answerId: 'b',
      explanation: 'Ascaris larvae migrate from the gut through the bloodstream to the lungs, causing a transient eosinophilic pneumonia (Löffler syndrome) before being coughed up, swallowed and maturing into adults in the small intestine.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A heavy Ascaris lumbricoides burden in a child most characteristically causes:',
      options: [
        { id: 'a', text: 'Iron-deficiency anaemia from blood-sucking' },
        { id: 'b', text: 'Intestinal (or biliary) obstruction by a mass of worms' },
        { id: 'c', text: 'Rectal prolapse' },
        { id: 'd', text: 'Perianal itch' },
      ],
      answerId: 'b',
      explanation: 'Because the adult worms are large, a heavy burden can form a bolus that causes intestinal obstruction, or a worm may migrate into the bile duct causing biliary obstruction. Blood-sucking anaemia is hookworm; rectal prolapse is Trichuris; perianal itch is Enterobius.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default ascariasisLargeRoundworm;
