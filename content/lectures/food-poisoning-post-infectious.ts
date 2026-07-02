import type { Lecture } from '../../lib/types';

export const foodPoisoningPostInfectious: Lecture = {
  id: 'food-poisoning-post-infectious',
  title: 'Food Poisoning & Post-Infectious Sequelae',
  system: 'gi',
  source: 'L14 — Bacterial GI Infection II',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'L14 Bacterial GI II' },
    { kind: 'disease', label: 'Food poisoning' },
    { kind: 'exam', label: 'Incubation clues' },
  ],

  highYield: [
    '**"Food poisoning" is best triaged by INCUBATION TIME and symptom type. PREFORMED toxins act within HOURS (the toxin is already in the food): Staphylococcus aureus (1–6 h, dairy/mayonnaise) and Bacillus cereus emetic type (1–6 h, reheated fried rice) cause abrupt VOMITING.**',
    '**Toxin produced IN VIVO acts over ~8–16 h: Clostridium perfringens (reheated meats) and Bacillus cereus diarrhoeal type cause watery diarrhoea and cramps.** Longer incubations (>16 h to days) suggest invasive organisms (Salmonella, Campylobacter, Shigella) or, for very short vomiting, preformed toxins — the timeline narrows the culprit.',
    '**Persistent/recurrent patterns: Enteroaggregative E. coli (EAEC) is a cause of PERSISTENT diarrhoea (travellers, children) — treated with fluoroquinolones or rifaximin; and recurrent Clostridioides difficile is an important cause of relapsing colitis** (may need faecal microbiota transplant). C. difficile spores are hardy and germinate after antibiotics disrupt the flora.',
    '**Post-infectious sequelae to know (especially after Campylobacter): Guillain–Barré syndrome (ascending demyelinating paralysis), reactive arthritis (part of the "can\'t see, can\'t pee, can\'t climb a tree" triad), and post-infectious irritable bowel syndrome.** These occur AFTER the acute infection has resolved, via immune mechanisms.',
    '**The practical framework: rapid vomiting (hours) = preformed toxin (S. aureus/B. cereus); watery diarrhoea (~half a day) = in-vivo toxin (C. perfringens); bloody/febrile (longer) = invasive; persistent = EAEC/parasites; relapsing colitis = C. difficile.** Most toxin food poisoning is self-limited and needs only rehydration.',
  ],

  mechanism: {
    title: 'Triage by incubation; preformed vs in-vivo toxin vs invasive; post-infectious immune sequelae',
    steps: [
      { id: 's1', label: 'Preformed toxin (1–6 h, vomiting): S. aureus (dairy), B. cereus (fried rice)', emphasis: 'key' },
      { id: 's2', label: 'In-vivo toxin (8–16 h, diarrhoea): C. perfringens (reheated meat)', emphasis: 'key' },
      { id: 's3', label: 'Persistent: EAEC (fluoroquinolone/rifaximin); relapsing: C. difficile', emphasis: 'key' },
      { id: 's4', label: 'Post-Campylobacter: Guillain–Barré, reactive arthritis, post-infectious IBS', emphasis: 'danger' },
      { id: 's5', label: 'Most toxin food poisoning self-limited → rehydration' },
    ],
  },

  examFindings: [
    { sign: 'Vomiting within 1–6 h of a meal', mechanism: 'Preformed toxin (S. aureus or B. cereus emetic)', significance: 'key' },
    { sign: 'Watery diarrhoea ~8–16 h after reheated meat', mechanism: 'Clostridium perfringens (in-vivo toxin)', significance: 'key' },
    { sign: 'Persistent traveller\'s/childhood diarrhoea', mechanism: 'Enteroaggregative E. coli (EAEC)', significance: 'supportive' },
    { sign: 'Ascending paralysis weeks after a diarrhoeal illness', mechanism: 'Guillain–Barré after Campylobacter', significance: 'key' },
    { sign: 'Relapsing pseudomembranous colitis', mechanism: 'Recurrent Clostridioides difficile', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The organisms causing vomiting within a few hours of eating', meaning: 'Staphylococcus aureus and Bacillus cereus (preformed toxins)' },
    { clue: 'The neurological sequela of Campylobacter infection', meaning: 'Guillain–Barré syndrome' },
    { clue: 'A cause of persistent (not acute) diarrhoea', meaning: 'Enteroaggregative E. coli (EAEC)' },
    { clue: 'The clue that best narrows the cause of food poisoning', meaning: 'The incubation period (and symptom type)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The incubation-time framework identifies the culprit and shows most toxin food poisoning needs only rehydration ([[laxatives-antidiarrheals-ors]]). It complements the invasive dysentery of [[inflammatory-invasive-enteritis]] and the classic secretory toxins in [[secretory-toxigenic-enteritis]]. Post-infectious Guillain–Barré and reactive arthritis link GI infection to immune-mediated disease.' },
  ],

  mnemonics: [
    { hook: 'Incubation: "Hours = preformed (vomit); Half-day = in-vivo toxin (diarrhoea); Longer = invasive"', expansion: ['S. aureus/B. cereus = fast vomit', 'C. perfringens = reheated meat'] },
    { hook: 'Post-Campylobacter: "GBS + reactive arthritis + IBS"', expansion: ['Immune-mediated, after the infection', 'Reactive arthritis: eyes/urethra/joints'] },
  ],

  traps: [
    {
      questionCategory: 'Using incubation time to identify food poisoning',
      wrongInstinct: 'The specific food eaten is the best clue to the cause of food poisoning',
      rightAnswer: 'The INCUBATION PERIOD (and whether vomiting or diarrhoea predominates) is the most useful discriminator: very short (1–6 h) vomiting = preformed toxin (S. aureus/B. cereus), ~8–16 h diarrhoea = in-vivo toxin (C. perfringens), longer/bloody = invasive organisms',
      why: 'Foods overlap between organisms, but the timeline reliably separates preformed-toxin (rapid) from in-vivo-toxin and invasive (slower) causes — the framework that guides diagnosis and reassures that most are self-limited.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Several people vomit within 3 hours of eating a cream-filled pastry left unrefrigerated. The most likely cause is:',
      options: [
        { id: 'a', text: 'Salmonella enterocolitis' },
        { id: 'b', text: 'A preformed Staphylococcus aureus toxin' },
        { id: 'c', text: 'Campylobacter' },
        { id: 'd', text: 'Enterohaemorrhagic E. coli' },
      ],
      answerId: 'b',
      explanation: 'Rapid-onset vomiting (1–6 h) after dairy/cream foods indicates a preformed Staphylococcus aureus enterotoxin; the very short incubation reflects toxin already present in the food, and the illness is self-limited.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Guillain–Barré syndrome occurring a couple of weeks after a diarrhoeal illness is most classically a sequela of infection with:',
      options: [
        { id: 'a', text: 'Vibrio cholerae' },
        { id: 'b', text: 'Campylobacter jejuni' },
        { id: 'c', text: 'Rotavirus' },
        { id: 'd', text: 'Staphylococcus aureus' },
      ],
      answerId: 'b',
      explanation: 'Campylobacter jejuni is the classic antecedent infection for Guillain–Barré syndrome (an immune-mediated ascending demyelinating polyneuropathy), and it is also linked to reactive arthritis and post-infectious IBS.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default foodPoisoningPostInfectious;
