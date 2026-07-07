import type { Lecture } from '../../lib/types';

export const anthelminticDrugClasses: Lecture = {
  id: 'anthelmintic-drug-classes',
  title: 'Anthelmintic Drug Classes & Clinical Use',
  system: 'pharmacology',
  source: 'L5 — Anthelmintics',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pharmacology' },
    { kind: 'lecture', label: 'L5 Anthelmintic Classes' },
    { kind: 'mechanism', label: 'Neuromuscular vs metabolic targets' },
    { kind: 'exam', label: 'Drug by worm class; pregnancy' },
  ],

  highYield: [
    'Anthelmintics act by PARALYSING the worm (neuromuscular) or STARVING it (metabolic). NEUROMUSCULAR: PYRANTEL (depolarising block → spastic paralysis), IVERMECTIN (glutamate-gated Cl⁻ channels → flaccid paralysis), PRAZIQUANTEL (↑Ca²⁺ → tetanic paralysis + tegument damage). METABOLIC: BENZIMIDAZOLES (albendazole/mebendazole — bind β-tubulin, block glucose uptake → starve).',
    'Drug selection by WORM CLASS: NEMATODES (roundworms) → benzimidazoles (broad), pyrantel (pinworm), ivermectin (Strongyloides), DEC (filariasis); TREMATODES (flukes) and most CESTODES (tapeworms) → PRAZIQUANTEL; ONCHOCERCIASIS/scabies → ivermectin. Matching the class to the worm is the key exam and clinical point.',
    'Pharmacokinetics/dosing: many intestinal worms need only single/short courses (poorly absorbed drugs act locally), but TISSUE infections (hydatid, neurocysticercosis, larva migrans) need PROLONGED, higher-dose ALBENDAZOLE (better absorbed with fatty food). Mass drug administration (albendazole/ivermectin/DEC/praziquantel) is used for soil-transmitted helminth and filariasis/schistosomiasis control programmes.',
    'Safety: benzimidazoles are teratogenic in animals → AVOID in the first trimester; treating neurocysticercosis or heavy microfilarial loads can trigger inflammatory reactions (add CORTICOSTEROIDS; ivermectin risks encephalopathy with heavy Loa loa co-infection). Resistance is a growing concern (especially in veterinary/mass-treatment settings).',
    '**The take-home: paralyse (pyrantel/ivermectin/praziquantel) or starve (benzimidazoles); pick by worm class — benzimidazoles for nematodes, praziquantel for flukes/tapeworms, ivermectin for Strongyloides/oncho; tissue disease needs prolonged albendazole; avoid benzimidazoles in early pregnancy and cover inflammatory reactions with steroids.** The mechanisms/overview are in [[anthelmintic-agents]]; the parasites are PHI ([[helminth-classification-overview]]); cutaneous forms in HSC ([[infestations-helminthic-skin]]).',
  ],

  mechanism: {
    title: 'Paralyse (pyrantel/ivermectin/praziquantel) or starve (benzimidazoles); pick by worm class; tissue disease → prolonged albendazole (+steroids)',
    steps: [
      { id: 's1', label: 'Neuromuscular: pyrantel (spastic), ivermectin (Cl⁻ flaccid), praziquantel (Ca²⁺ tetanic)', emphasis: 'key' },
      { id: 's2', label: 'Metabolic: benzimidazoles (β-tubulin, block glucose → starve)', emphasis: 'key' },
      { id: 's3', label: 'By class: nematodes→benzimidazole; flukes/tapeworms→praziquantel; Strongyloides/oncho→ivermectin', emphasis: 'key' },
      { id: 's4', label: 'Tissue infection (hydatid/cysticercosis) → prolonged albendazole (fatty food ↑absorption)', emphasis: 'key' },
      { id: 's5', label: 'Avoid benzimidazoles in 1st trimester; add steroids for inflammatory reactions', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Broad-spectrum single/short course for intestinal roundworms', mechanism: 'Benzimidazole (albendazole/mebendazole)', significance: 'key' },
    { sign: 'Prolonged high-dose albendazole with fatty food for hydatid disease', mechanism: 'Tissue infection needs systemic absorption', significance: 'key' },
    { sign: 'Corticosteroids co-administered when treating neurocysticercosis', mechanism: 'Prevent inflammatory reaction to dying larvae', significance: 'key' },
    { sign: 'Spastic paralysis of pinworm from a poorly absorbed drug', mechanism: 'Pyrantel pamoate', significance: 'supportive' },
    { sign: 'Mass drug administration for soil-transmitted helminths', mechanism: 'Albendazole/ivermectin control programmes', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The mechanism shared by pyrantel, ivermectin and praziquantel', meaning: 'Neuromuscular paralysis of the worm' },
    { clue: 'The drug class for most intestinal nematodes', meaning: 'Benzimidazoles (albendazole/mebendazole)' },
    { clue: 'The agent for tissue infections (hydatid, cysticercosis)', meaning: 'Prolonged high-dose albendazole' },
    { clue: 'The anthelmintic to avoid in early pregnancy', meaning: 'Benzimidazoles (animal teratogenicity)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Effective deworming requires matching drug/mechanism to worm class and site (single doses for intestinal worms vs prolonged albendazole for tissue disease), plus safety awareness (pregnancy, steroid cover in neurocysticercosis, ivermectin–Loa loa). Mass drug administration underpins public-health control. The core mechanisms are in [[anthelmintic-agents]]; the parasites in PHI ([[helminth-classification-overview]], [[cestodes-tapeworms-overview]]); cutaneous larva migrans/scabies in HSC ([[infestations-helminthic-skin]]).' },
  ],

  mnemonics: [
    { hook: '"Nematodes = benzimidazole; flukes/tapeworms = praziquantel; Strongyloides/oncho = ivermectin"', expansion: ['Paralyse or starve', 'Tissue = prolonged albendazole'] },
    { hook: '"Cysticercosis → add steroids; pregnancy → avoid benzimidazoles (1st trimester)"', expansion: ['Albendazole + fatty food', 'Mass drug administration'] },
  ],

  traps: [
    {
      questionCategory: 'Intestinal vs tissue helminth dosing',
      wrongInstinct: 'A single dose of albendazole treats all worm infections',
      rightAnswer: 'INTESTINAL (luminal) worm infections often clear with a SINGLE or short course, but TISSUE infections (hydatid cyst, neurocysticercosis, disseminated strongyloidiasis) require PROLONGED, higher-dose, well-absorbed therapy (albendazole with fatty food) — and often corticosteroid cover for inflammatory reactions; a single dose is inadequate for tissue disease',
      why: 'The site of infection (lumen vs tissue) dictates dose, duration and the need for systemic absorption and anti-inflammatory cover, so applying intestinal-worm dosing to tissue disease fails.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Treatment of a tissue helminth infection such as hydatid disease or neurocysticercosis differs from intestinal deworming in that it requires:',
      options: [
        { id: 'a', text: 'A single low dose of a non-absorbed drug' },
        { id: 'b', text: 'Prolonged, higher-dose well-absorbed albendazole (often with corticosteroid cover)' },
        { id: 'c', text: 'Topical therapy only' },
        { id: 'd', text: 'No pharmacological treatment' },
      ],
      answerId: 'b',
      explanation: 'Tissue helminth infections need systemically absorbed drug at the site of infection, so prolonged, higher-dose albendazole (taken with fatty food to improve absorption) is used, frequently with corticosteroids to blunt inflammation from dying larvae (e.g. in neurocysticercosis).',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Ivermectin paralyses susceptible worms by acting on:',
      options: [
        { id: 'a', text: 'β-tubulin' },
        { id: 'b', text: 'Glutamate-gated chloride channels' },
        { id: 'c', text: 'Calcium permeability of the tegument' },
        { id: 'd', text: 'Folate synthesis' },
      ],
      answerId: 'b',
      explanation: 'Ivermectin opens invertebrate glutamate-gated chloride channels, hyperpolarising and paralysing the worm; it is used for Strongyloides, onchocerciasis and scabies. Benzimidazoles act on β-tubulin, and praziquantel increases tegumental calcium permeability.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default anthelminticDrugClasses;
