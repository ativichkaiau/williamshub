import type { Lecture } from '../../lib/types';
import { HELMINTH_GROUPS } from '../../lib/figures';

export const helminthClassificationOverview: Lecture = {
  id: 'helminth-classification-overview',
  title: 'Helminths: Classification Overview',
  system: 'parasitology',
  source: 'L5 — Introduction to Helminths & Ascariasis',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Parasitology' },
    { kind: 'lecture', label: 'L5 Helminths & Ascariasis' },
    { kind: 'mechanism', label: 'Three worm groups' },
    { kind: 'exam', label: 'Nematode vs fluke vs tapeworm' },
  ],

  highYield: [
    '**Helminths (parasitic worms) fall into THREE groups, and placing an organism correctly predicts its biology: NEMATODES (roundworms), TREMATODES (flukes) and CESTODES (tapeworms).** The last two are flatworms (Platyhelminthes).',
    '**NEMATODES are round, unsegmented, with a complete gut and SEPARATE SEXES.** They include the soil-transmitted worms (Ascaris, hookworm, Strongyloides, Trichuris, Enterobius), the tissue/larva-migrans worms (Toxocara, Gnathostoma, Angiostrongylus) and the filariae. Many are diagnosed by finding EGGS in stool.',
    '**TREMATODES (flukes) are flat, leaf-shaped and (except Schistosoma) HERMAPHRODITE; they all require a SNAIL as first intermediate host.** They include liver flukes (Opisthorchis, Clonorchis, Fasciola), the intestinal Fasciolopsis, the lung fluke Paragonimus, and the blood flukes Schistosoma — detailed in [[trematodes-flukes-overview]].',
    '**CESTODES (tapeworms) are flat and SEGMENTED (a chain of proglottids), with a head (scolex) for attachment and NO gut (they absorb nutrients through the body wall).** They include Taenia, Diphyllobothrium, Hymenolepis, and the larval-cyst zoonoses Echinococcus and Spirometra — detailed in [[cestodes-tapeworms-overview]].',
    '**A common thread is EOSINOPHILIA (especially with tissue-migrating larvae) and diagnosis by finding characteristic EGGS/larvae in stool (or blood for microfilariae).** SOIL-TRANSMITTED HELMINTHS (Ascaris, hookworm, Trichuris, Strongyloides) are a major global burden spread by faecal contamination of soil — the group that begins with Ascaris ([[ascariasis-large-roundworm]]).',
  ],

  mechanism: {
    title: 'Nematodes (round, separate sexes), trematodes (flat leaf, snail, hermaphrodite), cestodes (segmented tape)',
    steps: [
      { id: 's1', label: 'Three groups: nematodes (roundworms), trematodes (flukes), cestodes (tapeworms)', emphasis: 'key' },
      { id: 's2', label: 'Nematodes: round, unsegmented, SEPARATE SEXES; STH + tissue + filariae', emphasis: 'key' },
      { id: 's3', label: 'Trematodes: flat leaf, HERMAPHRODITE (not Schistosoma), SNAIL host', emphasis: 'key' },
      { id: 's4', label: 'Cestodes: flat SEGMENTED, scolex, no gut (absorb through wall)', emphasis: 'key' },
      { id: 's5', label: 'Eosinophilia (tissue larvae); diagnosis by eggs/larvae in stool' },
    ],
  },

  examFindings: [
    { sign: 'Round, unsegmented worm with separate sexes', mechanism: 'Nematode (roundworm)', significance: 'key' },
    { sign: 'Flat, leaf-shaped hermaphroditic worm needing a snail host', mechanism: 'Trematode (fluke)', significance: 'key' },
    { sign: 'Flat, segmented worm with a scolex and no gut', mechanism: 'Cestode (tapeworm)', significance: 'key' },
    { sign: 'Peripheral eosinophilia', mechanism: 'Tissue-migrating helminth (common to many)', significance: 'supportive' },
    { sign: 'Diagnosis by characteristic eggs in stool', mechanism: 'Most intestinal helminths', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The three helminth groups', meaning: 'Nematodes, trematodes, cestodes' },
    { clue: 'The nematode feature distinguishing it from flatworms', meaning: 'Round, unsegmented, with separate sexes' },
    { clue: 'The obligatory intermediate host of all trematodes', meaning: 'A snail' },
    { clue: 'The cestode body plan', meaning: 'Flat, segmented (proglottids), scolex, no gut' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Correct classification predicts biology, diagnosis (eggs/larvae) and drugs — benzimidazoles (albendazole/mebendazole) and ivermectin for many nematodes, praziquantel for flukes and tapeworms. It frames the specific worms of this block: soil-transmitted and tissue nematodes ([[ascariasis-large-roundworm]], [[toxocariasis-larva-migrans]], [[gnathostomiasis]]), flukes ([[trematodes-flukes-overview]]) and tapeworms ([[cestodes-tapeworms-overview]]).' },
  ],

  mnemonics: [
    { hook: 'Three worms: "Nematode = round; Trematode = flat leaf (snail); Cestode = segmented tape"', expansion: ['Nematodes: separate sexes', 'Trematodes: hermaphrodite (not Schistosoma)'] },
    { hook: 'Cestode = "tape (segments) with a head (scolex), no gut"', expansion: ['Absorb through the wall', 'Trematodes/cestodes = flatworms'] },
  ],

  traps: [
    {
      questionCategory: 'Sexes in nematodes vs flukes',
      wrongInstinct: 'All helminths are hermaphroditic',
      rightAnswer: 'NEMATODES have SEPARATE sexes (male and female worms), and most TREMATODES are HERMAPHRODITE — with the important exception of Schistosoma (the blood flukes), which have separate sexes',
      why: 'The reproductive pattern is a defining group feature; assuming all worms are hermaphroditic misclassifies nematodes and forgets the Schistosoma exception among the flukes.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A flat, segmented worm with a scolex (attachment head) and no digestive tract belongs to which helminth group?',
      options: [
        { id: 'a', text: 'Nematodes (roundworms)' },
        { id: 'b', text: 'Cestodes (tapeworms)' },
        { id: 'c', text: 'Trematodes (flukes)' },
        { id: 'd', text: 'Protozoa' },
      ],
      answerId: 'b',
      explanation: 'Cestodes (tapeworms) are flat, segmented worms with a scolex for attachment and no gut, absorbing nutrients through the body wall. Nematodes are round with a gut; trematodes are flat but leaf-shaped and unsegmented.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which statement about helminth reproduction is correct?',
      options: [
        { id: 'a', text: 'Nematodes have separate sexes, and most trematodes are hermaphroditic (except Schistosoma)' },
        { id: 'b', text: 'All helminths are hermaphroditic' },
        { id: 'c', text: 'Nematodes are hermaphroditic' },
        { id: 'd', text: 'All trematodes have separate sexes' },
      ],
      answerId: 'a',
      explanation: 'Nematodes have separate male and female worms; most trematodes are hermaphroditic, with the blood flukes (Schistosoma) being the notable exception with separate sexes.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'The three helminth groups', svg: HELMINTH_GROUPS, caption: 'Nematodes vs trematodes vs cestodes — body plan, reproduction and representative organisms.' },
  ],
};

export default helminthClassificationOverview;
