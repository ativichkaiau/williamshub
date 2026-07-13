import type { Lecture } from '../../lib/types';

export const mycotoxinsAflatoxin: Lecture = {
  id: 'mycotoxins-aflatoxin',
  title: 'Mycotoxins & Aflatoxin',
  system: 'microbiology',
  source: 'L21 — Fungal Toxins & Toxic Mushrooms',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Micro' },
    { kind: 'lecture', label: 'L21 Mycotoxins' },
    { kind: 'mechanism', label: 'Fungal toxins in food' },
    { kind: 'exam', label: 'Aflatoxin → hepatocellular carcinoma' },
  ],

  highYield: [
    'MYCOTOXINS are toxic secondary metabolites produced by MOULDS growing on FOOD/crops (not an infection — a toxin ingested with contaminated food). They cause "mycotoxicoses" through chronic or acute exposure and are a major food-safety issue in warm, humid regions where crops are poorly stored.',
    'AFLATOXIN is the most important: produced by ASPERGILLUS FLAVUS / *A. parasiticus* on stored GRAINS, PEANUTS/nuts, corn and spices. Aflatoxin B1 is metabolised by liver CYP450 to a reactive epoxide that binds DNA, classically causing a p53 mutation (codon 249) → it is a potent HEPATOCARCINOGEN. Chronic dietary aflatoxin (SYNERGISTIC with hepatitis B) is a leading cause of HEPATOCELLULAR CARCINOMA in parts of Asia/Africa; high acute doses cause acute hepatic necrosis.',
    'Other mycotoxins: OCHRATOXIN (*Aspergillus*/*Penicillium* — nephrotoxic), FUMONISIN (*Fusarium* on maize — oesophageal cancer/neural tube links), TRICHOTHECENES (*Fusarium*), and ERGOT ALKALOIDS from CLAVICEPS PURPUREA on rye → ERGOTISM (vasospasm/gangrene "St Anthony\'s fire", convulsions; historically implicated in mass poisonings — and the source of ergotamine/LSD chemistry).',
    'The prevention message is food storage: keep grains/nuts dry and cool to prevent mould growth, discard visibly mouldy food, and (public health) monitor aflatoxin in the food supply and vaccinate against hepatitis B (which synergises with aflatoxin for liver cancer). Toxic MUSHROOM poisoning is a separate, acute syndrome covered next.',
    '**The take-home: MYCOTOXINS = mould toxins in stored food. AFLATOXIN (Aspergillus flavus on grains/nuts) → p53 mutation → HEPATOCELLULAR CARCINOMA (synergy with hepatitis B). Others: ochratoxin (nephrotoxic), fumonisin (Fusarium/maize), ERGOT (Claviceps on rye → vasospasm/gangrene). Prevent by dry storage + hepatitis B vaccination.** Toxic mushrooms are [[mushroom-poisoning-syndromes]]; *Aspergillus* infection is [[opportunistic-molds-aspergillus-mucorales]].',
  ],

  mechanism: {
    title: 'Mould toxins in stored food: aflatoxin (Aspergillus flavus, grains/nuts → p53 mutation → hepatocellular carcinoma, HBV synergy); ochratoxin (nephrotoxic); ergot (Claviceps → vasospasm/gangrene); prevent by dry storage',
    steps: [
      { id: 's1', label: 'Mycotoxins = mould secondary metabolites ingested in contaminated food (not infection)', emphasis: 'key' },
      { id: 's2', label: 'Aflatoxin: Aspergillus flavus on grains/peanuts/corn', emphasis: 'key' },
      { id: 's3', label: 'Aflatoxin B1 → CYP epoxide → DNA/p53 (codon 249) → hepatocellular carcinoma', emphasis: 'danger' },
      { id: 's4', label: 'Synergy with hepatitis B; acute high dose → hepatic necrosis', emphasis: 'danger' },
      { id: 's5', label: 'Others: ochratoxin (nephrotoxic), fumonisin, ergot (Claviceps → vasospasm/gangrene); prevent by dry storage', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Hepatocellular carcinoma linked to dietary contamination of stored grains/nuts', mechanism: 'Aflatoxin (Aspergillus flavus)', significance: 'key' },
    { sign: 'A p53 (codon 249) mutation associated with a dietary hepatocarcinogen', mechanism: 'Aflatoxin B1 epoxide', significance: 'key' },
    { sign: 'Higher liver-cancer risk when aflatoxin exposure coexists with hepatitis B', mechanism: 'Aflatoxin–HBV synergy', significance: 'key' },
    { sign: 'Limb ischaemia/gangrene and convulsions after eating mouldy rye', mechanism: 'Ergotism (Claviceps purpurea)', significance: 'supportive' },
    { sign: 'Nephrotoxicity from a grain-storage mould toxin', mechanism: 'Ochratoxin', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The mould producing aflatoxin', meaning: 'Aspergillus flavus (and A. parasiticus)' },
    { clue: 'The cancer caused by chronic aflatoxin', meaning: 'Hepatocellular carcinoma' },
    { clue: 'The co-factor synergising with aflatoxin for liver cancer', meaning: 'Hepatitis B infection' },
    { clue: 'The rye mould causing vasospasm/gangrene', meaning: 'Claviceps purpurea (ergotism)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Mycotoxins are a food-safety problem, not an infection: aflatoxin from *Aspergillus* flavus on poorly stored grains and nuts is a potent hepatocarcinogen (p53 codon 249 mutation) that synergises with hepatitis B to cause hepatocellular carcinoma — a major issue in warm, humid regions — so prevention lies in dry storage, discarding mouldy food, food-supply monitoring and hepatitis B vaccination. Ochratoxin (nephrotoxic), fumonisin and ergot (Claviceps → vasospasm/gangrene) are other mycotoxicoses. Acute toxic-mushroom poisoning is [[mushroom-poisoning-syndromes]]; *Aspergillus* infection is [[opportunistic-molds-aspergillus-mucorales]].' },
  ],

  mnemonics: [
    { hook: '"Aflatoxin = Aspergillus flAvus on grains/nuts → liver cancer (p53) + HBV synergy"', expansion: ['Dry storage prevents it', 'HBV vaccine reduces risk'] },
    { hook: '"Ergot = Claviceps on rye → vasospasm/gangrene (St Anthony\'s fire)"', expansion: ['Ochratoxin = nephrotoxic', 'Mycotoxin = ingested, not infection'] },
  ],

  traps: [
    {
      questionCategory: 'Mycotoxicosis vs fungal infection',
      wrongInstinct: 'Aflatoxin causes liver cancer by the fungus infecting and growing in the liver',
      rightAnswer: 'Aflatoxin causes disease as a MYCOTOXIN — a toxic metabolite INGESTED in mould-contaminated food — NOT by the fungus infecting the liver: aflatoxin B1 is bioactivated by hepatic CYP450 to a DNA-damaging epoxide (p53 codon 249 mutation), driving hepatocellular carcinoma, and this is a toxicological (food-safety) problem distinct from invasive Aspergillus INFECTION of tissue',
      why: 'Conflating mycotoxicosis (ingested toxin) with fungal infection misplaces both the mechanism and the prevention (food storage/HBV vaccination vs antifungal therapy); aflatoxin harms via a dietary carcinogen, not tissue invasion.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Chronic dietary exposure to aflatoxin (from Aspergillus flavus on poorly stored grains and nuts) is a major risk factor for:',
      options: [
        { id: 'a', text: 'Hepatocellular carcinoma (synergistic with hepatitis B)' },
        { id: 'b', text: 'Colon cancer' },
        { id: 'c', text: 'Bladder cancer' },
        { id: 'd', text: 'Melanoma' },
      ],
      answerId: 'a',
      explanation: 'Aflatoxin B1 is bioactivated by hepatic CYP450 to a reactive epoxide that mutates p53 (codon 249), making it a potent hepatocarcinogen; it synergises with hepatitis B to cause hepatocellular carcinoma, a leading cancer in parts of Asia and Africa.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Ergotism, with vasospasm, limb gangrene and convulsions, results from a toxin produced by which fungus on grain (classically rye)?',
      options: [
        { id: 'a', text: 'Claviceps purpurea' },
        { id: 'b', text: 'Aspergillus flavus' },
        { id: 'c', text: 'Candida albicans' },
        { id: 'd', text: 'Cryptococcus neoformans' },
      ],
      answerId: 'a',
      explanation: 'Ergot alkaloids from Claviceps purpurea growing on rye cause ergotism — intense vasoconstriction leading to ischaemia/gangrene ("St Anthony\'s fire") and convulsions; the alkaloids are also the chemical basis of ergotamine and LSD.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default mycotoxinsAflatoxin;
