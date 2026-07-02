import type { Lecture } from '../../lib/types';

export const anthelminticAgents: Lecture = {
  id: 'anthelmintic-agents',
  title: 'Anthelmintic Agents',
  system: 'pharmacology',
  source: 'L5 — Anthelmintics',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pharmacology' },
    { kind: 'lecture', label: 'L5 Anthelmintics' },
    { kind: 'mechanism', label: 'Paralyse or starve worms' },
    { kind: 'exam', label: 'Albendazole, praziquantel, ivermectin' },
  ],

  highYield: [
    '**Anthelmintics kill worms either by PARALYSING them (so they are expelled) or by STARVING them (blocking energy metabolism). BENZIMIDAZOLES (ALBENDAZOLE, mebendazole) bind β-tubulin → inhibit MICROTUBULE assembly and glucose uptake → the worm is starved; they are the broad-spectrum drugs for most intestinal NEMATODES (roundworms — Ascaris, hookworm, whipworm, pinworm) and, at high dose, tissue larvae (hydatid, cysticercosis, larva migrans).**',
    '**PRAZIQUANTEL is the drug of choice for TREMATODES (flukes — schistosomes, liver/lung flukes) and most CESTODES (tapeworms): it increases Ca²⁺ permeability → tetanic contraction/paralysis and tegument damage. IVERMECTIN (opens glutamate-gated Cl⁻ channels → paralysis) is the drug for STRONGYLOIDES and ONCHOCERCIASIS (river blindness), and treats scabies/lice.**',
    '**Others: PYRANTEL PAMOATE is a depolarising neuromuscular blocker (spastic paralysis) for pinworm/Ascaris/hookworm (poorly absorbed, safe). DIETHYLCARBAMAZINE (DEC) treats lymphatic FILARIASIS (kills microfilariae). NICLOSAMIDE (older) for intestinal tapeworms.** Selectivity comes from targets the worm has but humans lack or access differently (β-tubulin binding, glutamate-gated Cl⁻ channels).',
    '**Clinical cautions: benzimidazoles and ivermectin are generally well tolerated but AVOIDED/limited in PREGNANCY (teratogenic in animals — especially first trimester); treating NEUROCYSTICERCOSIS or heavy ocular onchocerciasis can trigger inflammatory reactions (co-administer corticosteroids); ivermectin can cause severe encephalopathy if there is heavy Loa loa co-infection.**',
    '**The take-home: ALBENDAZOLE/mebendazole (β-tubulin, starve) = broad NEMATODE drug; PRAZIQUANTEL (Ca²⁺ influx) = FLUKES + TAPEWORMS; IVERMECTIN (Cl⁻ channels) = Strongyloides, onchocerciasis, scabies; pyrantel = pinworm; DEC = filariasis.** The parasites themselves are catalogued in PHI ([[helminth-classification-overview]], [[trematodes-flukes-overview]], [[cestodes-tapeworms-overview]]); cutaneous helminth infestations are in HSC ([[infestations-helminthic-skin]]).',
  ],

  mechanism: {
    title: 'Paralyse or starve: benzimidazoles (β-tubulin, nematodes), praziquantel (Ca²⁺, flukes/tapeworms), ivermectin (Cl⁻, Strongyloides/oncho)',
    steps: [
      { id: 's1', label: 'Benzimidazoles (albendazole/mebendazole): bind β-tubulin → starve; broad NEMATODE drug', emphasis: 'key' },
      { id: 's2', label: 'Praziquantel: ↑Ca²⁺ → paralysis; FLUKES + most TAPEWORMS', emphasis: 'key' },
      { id: 's3', label: 'Ivermectin: glutamate-gated Cl⁻ channels → paralysis; Strongyloides, onchocerciasis, scabies', emphasis: 'key' },
      { id: 's4', label: 'Pyrantel (spastic paralysis) = pinworm; DEC = lymphatic filariasis', emphasis: 'key' },
      { id: 's5', label: 'Caution: pregnancy; inflammatory reactions in neurocysticercosis/onchocerciasis (add steroids)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Broad-spectrum oral drug for intestinal roundworms', mechanism: 'Albendazole/mebendazole (benzimidazole, β-tubulin)', significance: 'key' },
    { sign: 'Drug of choice for schistosomiasis and tapeworms', mechanism: 'Praziquantel (↑Ca²⁺ permeability)', significance: 'key' },
    { sign: 'Treatment for Strongyloides and onchocerciasis (river blindness)', mechanism: 'Ivermectin (glutamate-gated Cl⁻ channels)', significance: 'key' },
    { sign: 'Inflammatory flare when treating brain cysticercosis', mechanism: 'Dying larvae → give corticosteroids alongside', significance: 'key' },
    { sign: 'Anthelmintic avoided in the first trimester', mechanism: 'Benzimidazole (animal teratogenicity)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The broad-spectrum drug for intestinal nematodes', meaning: 'Albendazole (benzimidazole)' },
    { clue: 'The drug for flukes and most tapeworms', meaning: 'Praziquantel' },
    { clue: 'The drug for Strongyloides and onchocerciasis', meaning: 'Ivermectin' },
    { clue: 'The mechanism of benzimidazoles', meaning: 'Bind β-tubulin → block microtubules/glucose uptake (starve)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Matching drug to worm class is the exam and clinical point: benzimidazoles for nematodes, praziquantel for flukes/tapeworms, ivermectin for Strongyloides/onchocerciasis. Selectivity rests on worm-specific targets. The organisms are detailed in PHI ([[helminth-classification-overview]], [[trematodes-flukes-overview]], [[cestodes-tapeworms-overview]], [[angiostrongyliasis-eosinophilic-meningitis]]); cutaneous larva migrans/scabies appear in HSC ([[infestations-helminthic-skin]]). Watch pregnancy and treatment-induced inflammation (neurocysticercosis → steroids).' },
  ],

  mnemonics: [
    { hook: '"Albendazole = All nematodes (starve); Praziquantel = Plates & flukes (tapeworms/trematodes); Ivermectin = Itch & rivers (scabies/oncho)"', expansion: ['Benzimidazole = β-tubulin', 'Praziquantel = ↑Ca²⁺'] },
    { hook: 'Ivermectin "opens Cl⁻ → paralysis"; DEC = filariasis; pyrantel = pinworm', expansion: ['Ivermectin caution: Loa loa encephalopathy', 'Add steroids in cysticercosis'] },
  ],

  traps: [
    {
      questionCategory: 'Matching anthelmintic to worm class',
      wrongInstinct: 'One anthelmintic (e.g. albendazole) treats all worms equally well',
      rightAnswer: 'Drug choice depends on worm CLASS: benzimidazoles (albendazole/mebendazole) are the broad NEMATODE (roundworm) drugs, but PRAZIQUANTEL is required for TREMATODES (flukes) and most CESTODES (tapeworms), and IVERMECTIN is specific for Strongyloides and onchocerciasis — using the wrong class fails',
      why: 'Helminths differ in the drug targets they express, so the nematode/trematode/cestode classification (from parasitology) dictates the correct agent — a frequent exam and clinical decision point.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The drug of choice for schistosomiasis and for most tapeworm (cestode) infections is:',
      options: [
        { id: 'a', text: 'Albendazole' },
        { id: 'b', text: 'Praziquantel' },
        { id: 'c', text: 'Ivermectin' },
        { id: 'd', text: 'Pyrantel pamoate' },
      ],
      answerId: 'b',
      explanation: 'Praziquantel increases calcium permeability in the worm, causing tetanic paralysis and tegumental damage; it is the drug of choice for trematodes (schistosomes, liver/lung flukes) and most cestodes (tapeworms). Benzimidazoles cover intestinal nematodes, and ivermectin covers Strongyloides/onchocerciasis.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Albendazole and mebendazole kill nematodes primarily by:',
      options: [
        { id: 'a', text: 'Increasing calcium permeability' },
        { id: 'b', text: 'Binding β-tubulin to block microtubule assembly and glucose uptake (starving the worm)' },
        { id: 'c', text: 'Opening glutamate-gated chloride channels' },
        { id: 'd', text: 'Inhibiting folate synthesis' },
      ],
      answerId: 'b',
      explanation: 'Benzimidazoles bind parasite β-tubulin, inhibiting microtubule polymerisation and glucose uptake, effectively starving the worm of energy. Ivermectin acts on glutamate-gated chloride channels, and praziquantel increases calcium permeability.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default anthelminticAgents;
