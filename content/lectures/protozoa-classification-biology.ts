import type { Lecture } from '../../lib/types';
import { PROTOZOA_GROUPS } from '../../lib/figures';

export const protozoaClassificationBiology: Lecture = {
  id: 'protozoa-classification-biology',
  title: 'Protozoa: Classification & Biology',
  system: 'parasitology',
  source: 'L2 — Introduction to Protozoology',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Parasitology' },
    { kind: 'lecture', label: 'L2 Intro Protozoology' },
    { kind: 'mechanism', label: 'Four groups' },
    { kind: 'exam', label: 'Trophozoite vs cyst' },
  ],

  highYield: [
    '**Protozoa are single-celled eukaryotes classified for medical purposes into FOUR groups by their organ of locomotion: amoebae (pseudopods), flagellates (flagella), ciliates (cilia), and apicomplexa (no locomotory organelle, an apical complex to invade cells).** Knowing the group orients you to the organisms and their diagnosis.',
    '**AMOEBAE move by flowing pseudopods: Entamoeba histolytica (intestinal/liver) and the free-living Naegleria and Acanthamoeba.** **FLAGELLATES use whip-like flagella: intestinal/urogenital (Giardia, Trichomonas, Dientamoeba) and blood/tissue (Leishmania, Trypanosoma).** **CILIATES are covered in cilia — Balantidium coli is the only pathogenic ciliate (and the largest human protozoan).**',
    '**APICOMPLEXA (sporozoa) have no locomotory organelle but an apical complex to penetrate host cells: Plasmodium (malaria), Toxoplasma, and the intestinal coccidia (Cryptosporidium, Cyclospora, Cystoisospora).** They alternate asexual and sexual reproduction, often between two hosts.',
    '**Most intestinal protozoa exist as two stages: the TROPHOZOITE (the active, feeding, motile, often fragile stage that causes disease) and the CYST (the resistant, non-motile, INFECTIVE transmission stage that survives outside the host).** "Cysts transmit, trophozoites cause disease" — the single most useful protozoan concept.',
    '**Protozoa reproduce by binary fission (asexual) and, in apicomplexa, by schizogony/sporogony (multiple/sexual); they lack the cell wall of fungi and are eukaryotic (unlike bacteria).** This biology underlies their diagnosis (finding cysts vs trophozoites in stool) and drug targets. It is the foundation for the amoebae ([[entamoeba-histolytica-amoebiasis]]), flagellates ([[giardia-intestinal-flagellates]]) and apicomplexa ([[intestinal-coccidia-cryptosporidium]]).',
  ],

  mechanism: {
    title: 'Four groups by locomotion; trophozoite (disease) vs cyst (transmission)',
    steps: [
      { id: 's1', label: 'Groups: amoebae (pseudopods), flagellates (flagella), ciliates (cilia), apicomplexa', emphasis: 'key' },
      { id: 's2', label: 'Apicomplexa: no locomotory organelle; apical complex invades cells', emphasis: 'key' },
      { id: 's3', label: 'Trophozoite = active/feeding/motile (causes disease)', emphasis: 'key' },
      { id: 's4', label: 'Cyst/oocyst = resistant, INFECTIVE transmission stage', emphasis: 'key' },
      { id: 's5', label: 'Eukaryotic; binary fission ± sexual cycles (apicomplexa)' },
    ],
  },

  examFindings: [
    { sign: 'A protozoan moving by pseudopods', mechanism: 'Amoeba (Sarcodina)', significance: 'key' },
    { sign: 'The active, feeding, motile disease-causing stage', mechanism: 'Trophozoite', significance: 'key' },
    { sign: 'The resistant, environmentally stable infective stage', mechanism: 'Cyst/oocyst (transmission stage)', significance: 'key' },
    { sign: 'The only pathogenic ciliate (largest human protozoan)', mechanism: 'Balantidium coli', significance: 'supportive' },
    { sign: 'A group with an apical complex and no locomotory organelle', mechanism: 'Apicomplexa (Plasmodium, Toxoplasma, coccidia)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The four medical protozoa groups (by locomotion)', meaning: 'Amoebae, flagellates, ciliates, apicomplexa' },
    { clue: 'The active, disease-causing protozoan stage', meaning: 'Trophozoite' },
    { clue: 'The resistant infective/transmission stage', meaning: 'Cyst (or oocyst)' },
    { clue: 'The only pathogenic ciliate', meaning: 'Balantidium coli' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The four-group framework and the trophozoite/cyst concept organise all the protozoa in the course — amoebae ([[entamoeba-histolytica-amoebiasis]], [[free-living-nonpathogenic-amoebae]]), flagellates/ciliate ([[giardia-intestinal-flagellates]], [[trichomonas-balantidium]]) and apicomplexa ([[intestinal-coccidia-cryptosporidium]], [[toxoplasmosis]], [[blood-apicomplexa-malaria-babesia]]). Cyst vs trophozoite drives stool diagnosis ([[parasite-transmission-diagnosis]]).' },
  ],

  mnemonics: [
    { hook: 'Four groups by motion: "Amoeba (pseudopod), Flagellate (flagella), Ciliate (cilia), Apicomplexa (none)"', expansion: ['Balantidium = only pathogenic ciliate', 'Apicomplexa = apical complex'] },
    { hook: '"Cysts transmit, trophozoites cause disease"', expansion: ['Trophozoite = active/fragile', 'Cyst/oocyst = resistant/infective'] },
  ],

  traps: [
    {
      questionCategory: 'Trophozoite vs cyst',
      wrongInstinct: 'The trophozoite is the stage that spreads the infection between people',
      rightAnswer: 'The CYST (or oocyst) is the resistant, environmentally stable INFECTIVE/transmission stage that spreads infection; the TROPHOZOITE is the active, fragile, feeding stage that causes disease but is destroyed outside the host',
      why: 'Reversing these misreads both transmission (cysts in contaminated food/water) and diagnosis (which stage to look for in which specimen), and explains why trophozoites are seen in fresh dysenteric stool but cysts in formed stool.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The four groups of medically important protozoa are classified primarily by their:',
      options: [
        { id: 'a', text: 'Means of locomotion (pseudopods, flagella, cilia, or apical complex)' },
        { id: 'b', text: 'Colour' },
        { id: 'c', text: 'Size only' },
        { id: 'd', text: 'Gram-staining' },
      ],
      answerId: 'a',
      explanation: 'Medical protozoa are grouped by their locomotory apparatus: amoebae (pseudopods), flagellates (flagella), ciliates (cilia) and apicomplexa (no locomotory organelle, with an apical complex for cell invasion).',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The resistant, environmentally stable stage responsible for transmitting many intestinal protozoa is the:',
      options: [
        { id: 'a', text: 'Trophozoite' },
        { id: 'b', text: 'Cyst (or oocyst)' },
        { id: 'c', text: 'Merozoite' },
        { id: 'd', text: 'Schizont' },
      ],
      answerId: 'b',
      explanation: 'The cyst (or oocyst in apicomplexa) is the resistant, infective transmission stage that survives outside the host; the trophozoite is the active, feeding stage that causes disease but does not survive well in the environment.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'The four protozoa groups', svg: PROTOZOA_GROUPS, caption: 'Amoebae, flagellates, ciliates and apicomplexa classified by locomotion, with trophozoite vs cyst.' },
  ],
};

export default protozoaClassificationBiology;
