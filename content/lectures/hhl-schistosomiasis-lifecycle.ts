import type { Lecture } from '../../lib/types';

export const hhlSchistosomiasisLifecycle: Lecture = {
  id: 'hhl-schistosomiasis-lifecycle',
  title: 'Schistosomiasis: Species & Life Cycle',
  system: 'heme',
  source: 'L22 — Schistosomiasis',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L22 Schistosomiasis' },
    { kind: 'disease', label: 'Blood flukes' },
    { kind: 'mechanism', label: 'Snail → cercaria → skin' },
    { kind: 'investigation', label: 'Egg spine morphology' },
  ],

  highYield: [
    '**Schistosomes are blood-dwelling trematodes (flukes).** Key species: *S. mansoni* & *S. japonicum* (mesenteric veins → intestinal/hepatic disease), *S. mekongi* (Mekong region — relevant to Thailand/Laos), and *S. haematobium* (vesical plexus → urinary disease).',
    '**The snail is the obligate intermediate host.** Eggs in fresh water hatch to **miracidia → snail → cercariae**, which **penetrate intact human skin** during water contact (no ingestion needed).',
    '**Egg morphology identifies the species:** *S. mansoni* has a **lateral spine**, *S. haematobium* a **terminal spine**, *S. japonicum/mekongi* a small **lateral knob**. See [[hhl-schistosomiasis-clinical]].',
    '**Adult worms do not multiply in humans**; disease severity tracks **worm/egg burden**, and it is the **eggs (not the worms)** that drive pathology.',
  ],

  mechanism: {
    title: 'Egg → snail → cercaria → skin → adult in veins',
    steps: [
      { id: 's1', label: 'Eggs in water hatch to miracidia', emphasis: 'normal' },
      { id: 's2', label: 'Miracidia infect snail → cercariae released', emphasis: 'key' },
      { id: 's3', label: 'Cercariae penetrate intact skin in fresh water', emphasis: 'key' },
      { id: 's4', label: 'Adults mature in mesenteric (or vesical) veins; eggs shed in stool/urine', emphasis: 'normal' },
    ],
  },

  examFindings: [
    { sign: 'Lateral-spined egg in stool', mechanism: 'S. mansoni', significance: 'key' },
    { sign: 'Terminal-spined egg in urine', mechanism: 'S. haematobium', significance: 'key' },
    { sign: 'Small lateral knob on a round egg', mechanism: 'S. japonicum / S. mekongi', significance: 'supportive' },
    { sign: 'History of fresh-water contact (swimming/wading)', mechanism: 'Cercarial skin penetration', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Lateral spine on the egg', meaning: 'Schistosoma mansoni (intestinal/hepatic)' },
    { clue: 'Terminal spine on the egg', meaning: 'Schistosoma haematobium (urinary)' },
    { clue: 'Patient from the Mekong basin with hepatosplenic disease', meaning: 'Consider S. mekongi' },
    { clue: 'Eggs sought in stool vs urine', meaning: 'Site reflects adult worm location (mesenteric vs vesical veins)' },
  ],

  treatment: [
    { logic: 'One drug for all species', detail: 'Praziquantel is effective against adult schistosomes of every species; avoiding fresh-water exposure prevents infection.' },
  ],

  mnemonics: [
    { hook: 'manSonian = Side (lateral) spine; haematobium = Terminal spine, Toilet (urine)', expansion: ['Snail = intermediate host', 'Cercaria pierces skin — no ingestion', 'Eggs cause the disease'] },
  ],

  traps: [
    {
      questionCategory: 'Route of infection',
      wrongInstinct: 'Schistosomiasis is acquired by swallowing contaminated water',
      rightAnswer: 'Cercariae PENETRATE INTACT SKIN during fresh-water contact — infection is transcutaneous, not oral',
      why: 'This is why wading/swimming in snail-infested water transmits disease even without drinking it.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A schistosome egg with a prominent lateral spine recovered from stool indicates:',
      options: [
        { id: 'a', text: 'Schistosoma haematobium' },
        { id: 'b', text: 'Schistosoma mansoni' },
        { id: 'c', text: 'Fasciola hepatica' },
        { id: 'd', text: 'Clonorchis sinensis' },
      ],
      answerId: 'b',
      explanation: 'A lateral-spined egg in stool is S. mansoni; S. haematobium has a terminal spine and is found in urine.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'Humans acquire schistosomiasis mainly by:',
      options: [
        { id: 'a', text: 'Ingesting undercooked snails' },
        { id: 'b', text: 'Cercariae penetrating skin during fresh-water contact' },
        { id: 'c', text: 'A mosquito bite' },
        { id: 'd', text: 'Faecal–oral ingestion of eggs' },
      ],
      answerId: 'b',
      explanation: 'Free-swimming cercariae released from snails penetrate intact skin during water contact; the snail is the obligate intermediate host.',
      tests: 'mechanism',
    },
  ],
};

export default hhlSchistosomiasisLifecycle;
