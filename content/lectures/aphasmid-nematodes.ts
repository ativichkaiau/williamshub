import type { Lecture } from '../../lib/types';

export const aphasmidNematodes: Lecture = {
  id: 'aphasmid-nematodes',
  title: 'Aphasmid Nematodes (Trichuris, Trichinella, Capillaria)',
  system: 'gi',
  source: 'L16 — Aphasmid Nematodes',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'L16 Aphasmid Nematodes' },
    { kind: 'disease', label: 'Trichuriasis / Trichinellosis' },
    { kind: 'exam', label: 'Whipworm' },
  ],

  highYield: [
    '**Nematodes are divided into phasmids (with sensory phasmids — Ascaris, hookworm, Enterobius, Strongyloides) and APHASMIDS (without — Trichuris, Trichinella, Capillaria).** The aphasmid group is a small but high-yield set with distinctive presentations.',
    '**Trichuris trichiura (WHIPWORM) is acquired by ingesting eggs from faecally contaminated soil; the adult worm has a thin "whip" anterior end that threads into the colonic mucosa.** Heavy infection in children causes **chronic diarrhoea and RECTAL PROLAPSE** (with the worms visible on the prolapsed mucosa) plus anaemia and growth retardation.',
    '**Trichinella spiralis (TRICHINELLOSIS) is acquired by eating undercooked PORK (or game) containing encysted larvae.** Larvae are released, mature in the gut, and new larvae migrate to and encyst in STRIATED MUSCLE → **fever, periorbital OEDEMA, MYALGIA and marked EOSINOPHILIA** (classic tetrad). Diagnosis is clinical/serological (± muscle biopsy); prevent by cooking meat.',
    '**Capillaria philippinensis causes a severe intestinal capillariasis (from eating raw freshwater fish) with autoinfection → protein-losing enteropathy, malabsorption and potentially fatal wasting** — regionally important in Southeast Asia. It is a cause of chronic diarrhoea and severe malabsorption.',
    '**Signatures to memorise: Trichuris → whipworm, rectal prolapse (children); Trichinella → undercooked pork, muscle larvae, periorbital oedema + myalgia + eosinophilia; Capillaria → raw fish, autoinfection, protein-losing enteropathy.** Treatment is generally a benzimidazole (albendazole/mebendazole); prevention centres on sanitation and thorough cooking.',
  ],

  mechanism: {
    title: 'Aphasmid nematodes: whipworm (prolapse), Trichinella (muscle), Capillaria (malabsorption)',
    steps: [
      { id: 's1', label: 'Nematodes: phasmid vs APHASMID (Trichuris, Trichinella, Capillaria)', emphasis: 'key' },
      { id: 's2', label: 'Trichuris (whipworm): soil eggs → colon; heavy load → rectal prolapse', emphasis: 'key' },
      { id: 's3', label: 'Trichinella: undercooked pork → larvae encyst in muscle', emphasis: 'key' },
      { id: 's4', label: 'Trichinellosis: fever + periorbital oedema + myalgia + eosinophilia', emphasis: 'key' },
      { id: 's5', label: 'Capillaria: raw fish → autoinfection → protein-losing enteropathy', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Rectal prolapse in a child with chronic diarrhoea', mechanism: 'Heavy Trichuris trichiura (whipworm) infection', significance: 'key' },
    { sign: 'Fever, periorbital oedema, myalgia and eosinophilia after undercooked pork', mechanism: 'Trichinellosis (Trichinella spiralis)', significance: 'key' },
    { sign: 'Larvae encysted in striated muscle', mechanism: 'Trichinella spiralis', significance: 'supportive' },
    { sign: 'Severe malabsorption/protein-losing enteropathy from raw fish', mechanism: 'Capillaria philippinensis (autoinfection)', significance: 'key' },
    { sign: 'Marked peripheral eosinophilia', mechanism: 'Tissue-invasive helminth (e.g. Trichinella)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The nematode causing rectal prolapse in children', meaning: 'Trichuris trichiura (whipworm)' },
    { clue: 'The nematode from undercooked pork that encysts in muscle', meaning: 'Trichinella spiralis' },
    { clue: 'The classic tetrad of trichinellosis', meaning: 'Fever, periorbital oedema, myalgia, eosinophilia' },
    { clue: 'The nematode from raw fish causing protein-losing enteropathy', meaning: 'Capillaria philippinensis' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'These are treatable (benzimidazoles) and preventable (sanitation, cooking pork/fish). Trichinella and Capillaria illustrate tissue invasion and autoinfection, and eosinophilia is a shared clue with the phasmid nematodes ([[intestinal-roundworms-phasmid]]) and the flukes/tapeworms of [[liver-flukes-cholangiocarcinoma]]. Capillaria malabsorption links to the nutrition of [[nutrition-energy-protein-malnutrition]].' },
  ],

  mnemonics: [
    { hook: 'Aphasmids = "Trichuris (whip/prolapse), Trichinella (pork/muscle), Capillaria (fish/malabsorption)"', expansion: ['Trichinella tetrad: fever, periorbital oedema, myalgia, eosinophilia', 'Cook pork!'] },
    { hook: 'Trichinella = "undercooked pork → periorbital puffiness + muscle pain"', expansion: ['Larvae encyst in striated muscle', 'Marked eosinophilia'] },
  ],

  traps: [
    {
      questionCategory: 'Source of Trichinella infection',
      wrongInstinct: 'Trichinellosis is acquired from contaminated soil like most intestinal worms',
      rightAnswer: 'Trichinella spiralis is acquired by eating UNDERCOOKED PORK (or game) containing encysted larvae — not from soil; the larvae then migrate to and encyst in striated muscle, causing myalgia, periorbital oedema and eosinophilia',
      why: 'Its meat-borne route (and muscle-encysting biology) is what makes cooking pork the key prevention; treating it like a soil-transmitted helminth misses both the source and the characteristic muscle disease.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient develops fever, periorbital oedema, severe muscle pain and marked eosinophilia a week after eating undercooked pork. The likely organism is:',
      options: [
        { id: 'a', text: 'Trichuris trichiura' },
        { id: 'b', text: 'Trichinella spiralis' },
        { id: 'c', text: 'Ascaris lumbricoides' },
        { id: 'd', text: 'Enterobius vermicularis' },
      ],
      answerId: 'b',
      explanation: 'Trichinellosis follows ingestion of undercooked pork with encysted larvae; the larvae migrate to striated muscle, producing the classic tetrad of fever, periorbital oedema, myalgia and eosinophilia.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Heavy infection with which nematode classically causes rectal prolapse in children?',
      options: [
        { id: 'a', text: 'Trichuris trichiura (whipworm)' },
        { id: 'b', text: 'Hookworm' },
        { id: 'c', text: 'Strongyloides stercoralis' },
        { id: 'd', text: 'Trichinella spiralis' },
      ],
      answerId: 'a',
      explanation: 'The whipworm Trichuris trichiura threads its thin anterior end into the colonic mucosa; heavy infection in children causes chronic diarrhoea and rectal prolapse, sometimes with worms visible on the prolapsed mucosa.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default aphasmidNematodes;
