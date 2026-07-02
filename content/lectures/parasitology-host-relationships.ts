import type { Lecture } from '../../lib/types';
import { PARASITE_HOST_TYPES } from '../../lib/figures';

export const parasitologyHostRelationships: Lecture = {
  id: 'parasitology-host-relationships',
  title: 'Host Types & Parasite Relationships',
  system: 'parasitology',
  source: 'L1 — Introduction to Parasitology',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Parasitology' },
    { kind: 'lecture', label: 'L1 Intro Parasitology' },
    { kind: 'mechanism', label: 'Host types' },
    { kind: 'exam', label: 'Definitive vs intermediate' },
  ],

  highYield: [
    '**Parasitology has its own vocabulary of HOSTS, and getting it right is essential for every life cycle.** The **DEFINITIVE host harbours the ADULT or SEXUAL stage; the INTERMEDIATE host harbours LARVAL or ASEXUAL stages.** A parasite may need one or more intermediate hosts to complete its cycle.',
    '**Two more host roles: a PARATENIC (transport) host carries the parasite with NO further development — it simply bridges the gap to the definitive host; a RESERVOIR host is an animal that maintains the parasite in nature and is the source of human ZOONOSIS.** A CARRIER harbours and sheds the parasite without symptoms.',
    '**The malaria example ties it together: the mosquito is the DEFINITIVE host (the sexual cycle occurs in it) AND the vector, while the human is the INTERMEDIATE host (asexual cycle).** This counters the intuition that humans are always the definitive host — for malaria (and a few others) we are the intermediate host.',
    '**Parasites are classified by habitat and dependence: ECTOparasites live on the surface (lice, mites), ENDOparasites live inside (worms, protozoa); OBLIGATE parasites must parasitise to survive, FACULTATIVE ones can also live free.** Accidental/zoonotic parasites infect humans as an abnormal host.',
    '**Symbiotic relationships range from mutualism (both benefit) and commensalism (one benefits, host unaffected) to PARASITISM — the parasite benefits and the HOST IS HARMED.** These definitions (and vector types — see [[parasite-transmission-diagnosis]]) are the framework for every organism in the course.',
  ],

  mechanism: {
    title: 'Definitive (adult/sexual) vs intermediate (larval/asexual); paratenic, reservoir, vector',
    steps: [
      { id: 's1', label: 'Definitive host = adult/SEXUAL stage', emphasis: 'key' },
      { id: 's2', label: 'Intermediate host = larval/ASEXUAL stage(s)', emphasis: 'key' },
      { id: 's3', label: 'Paratenic = transport (no development); reservoir = animal source (zoonosis)', emphasis: 'key' },
      { id: 's4', label: 'Malaria: mosquito = definitive host + vector; human = intermediate', emphasis: 'danger' },
      { id: 's5', label: 'Ecto/endo, obligate/facultative; parasitism = host harmed' },
    ],
  },

  examFindings: [
    { sign: 'The host harbouring the adult/sexual stage', mechanism: 'Definitive host', significance: 'key' },
    { sign: 'The host harbouring larval/asexual stages', mechanism: 'Intermediate host', significance: 'key' },
    { sign: 'Mosquito as the definitive host in malaria', mechanism: 'Sexual cycle occurs in the mosquito (human = intermediate)', significance: 'key' },
    { sign: 'An animal maintaining a human parasite in nature', mechanism: 'Reservoir host (source of zoonosis)', significance: 'supportive' },
    { sign: 'A transport host with no parasite development', mechanism: 'Paratenic host', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The host with the adult/sexual stage', meaning: 'Definitive host' },
    { clue: 'The host with larval/asexual stages', meaning: 'Intermediate host' },
    { clue: 'The definitive host of malaria', meaning: 'The Anopheles mosquito (human is the intermediate host)' },
    { clue: 'A parasite living on the body surface', meaning: 'An ectoparasite (e.g. lice, mites)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'These host definitions structure every life cycle in the course — from the flukes/tapeworms of [[trematodes-flukes-overview]] and [[cestodes-tapeworms-overview]] to the vector-borne apicomplexa ([[blood-apicomplexa-malaria-babesia]]). Transmission routes, vectors and diagnosis follow in [[parasite-transmission-diagnosis]]; zoonoses (reservoir hosts) explain many human infections.' },
  ],

  mnemonics: [
    { hook: '"Definitive = aDult/sexual; Intermediate = Immature/asexual"', expansion: ['Paratenic = transport (no development)', 'Reservoir = animal source (zoonosis)'] },
    { hook: 'Malaria "flips it": mosquito = definitive host; human = intermediate', expansion: ['Sexual cycle in the mosquito', 'We are not always the definitive host'] },
  ],

  traps: [
    {
      questionCategory: 'Which host is definitive in malaria',
      wrongInstinct: 'Humans are always the definitive host of a parasite',
      rightAnswer: 'The definitive host is defined by the SEXUAL/ADULT stage, not by being human — in malaria the MOSQUITO is the definitive host (the sexual cycle occurs in it) and the human is the intermediate host',
      why: 'Assuming humans are always the definitive host misclassifies several important parasites (malaria, echinococcosis); the stage of the parasite present, not the species of host, determines the label.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The definitive host of a parasite is the host that harbours the:',
      options: [
        { id: 'a', text: 'Larval or asexual stage' },
        { id: 'b', text: 'Adult or sexual stage' },
        { id: 'c', text: 'Egg only' },
        { id: 'd', text: 'Vector' },
      ],
      answerId: 'b',
      explanation: 'By definition the definitive host harbours the adult or sexually reproducing stage of the parasite; the intermediate host harbours larval or asexual stages. For malaria the mosquito is the definitive host.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'In the malaria life cycle, the human is best described as the:',
      options: [
        { id: 'a', text: 'Definitive host' },
        { id: 'b', text: 'Intermediate host' },
        { id: 'c', text: 'Paratenic host' },
        { id: 'd', text: 'Vector' },
      ],
      answerId: 'b',
      explanation: 'The sexual cycle of Plasmodium occurs in the Anopheles mosquito, making it the definitive host (and vector); the asexual cycle occurs in humans, so the human is the intermediate host.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Host types & parasite relationships', svg: PARASITE_HOST_TYPES, caption: 'Definitive, intermediate, paratenic, reservoir hosts and vectors, plus ecto/endo and symbiosis definitions.' },
  ],
};

export default parasitologyHostRelationships;
