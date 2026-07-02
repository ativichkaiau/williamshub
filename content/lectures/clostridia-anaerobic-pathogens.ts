import type { Lecture } from '../../lib/types';

export const clostridiaAnaerobicPathogens: Lecture = {
  id: 'clostridia-anaerobic-pathogens',
  title: 'Clostridia (tetani, botulinum, perfringens, difficile)',
  system: 'microbiology',
  source: 'L16 — Anaerobes',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Micro' },
    { kind: 'lecture', label: 'L16 Clostridia' },
    { kind: 'mechanism', label: 'Anaerobic spore-formers; exotoxins' },
    { kind: 'exam', label: 'Tetanus vs botulism; gas gangrene; C. diff' },
  ],

  highYield: [
    '**Clostridia are ANAEROBIC, SPORE-FORMING Gram-positive rods (Bacillus = the aerobic counterpart); disease is largely EXOTOXIN-mediated, and spores in soil/gut allow survival and transmission. Four are high-yield: C. tetani, C. botulinum, C. perfringens and C. difficile.**',
    '**Two NEUROTOXINS act oppositely at the neuromuscular junction. C. TETANI → TETANOSPASMIN blocks release of INHIBITORY neurotransmitters (GABA/glycine) in the spinal cord → SPASTIC paralysis: trismus (lockjaw), risus sardonicus, opisthotonus (soil/puncture wounds; prevented by toxoid vaccine, treated with antitoxin/metronidazole). C. BOTULINUM → botulinum toxin blocks ACETYLCHOLINE release → FLACCID, descending paralysis (canned/home foods; infant botulism from HONEY — "floppy baby"); antitoxin + supportive.**',
    '**C. PERFRINGENS: alpha-toxin (lecithinase) causes GAS GANGRENE (myonecrosis with crepitus, rapid, after trauma) and also a form of food poisoning (reheated meats). C. DIFFICILE causes ANTIBIOTIC-ASSOCIATED colitis / PSEUDOMEMBRANOUS COLITIS via toxins A and B, classically after broad-spectrum antibiotics (clindamycin, cephalosporins, fluoroquinolones) disrupt gut flora; diagnosed by toxin/PCR, treated with oral VANCOMYCIN or FIDAXOMICIN (stop the offending antibiotic; faecal transplant for recurrence).**',
    '**Recognition is by syndrome + exposure: spastic paralysis/lockjaw (tetanus) vs flaccid descending paralysis (botulism); crepitant myonecrosis (gas gangrene); and antibiotic-associated diarrhoea/colitis (C. difficile). The toxin mechanisms (inhibit inhibitory vs inhibit excitatory transmitter release; lecithinase; A/B toxins) are the exam core.**',
    '**The take-home: anaerobic SPORE-forming clostridia, exotoxin disease. TETANI (tetanospasmin blocks GABA/glycine → SPASTIC, lockjaw; toxoid) vs BOTULINUM (blocks ACh → FLACCID descending, honey/infant). PERFRINGENS (lecithinase → gas gangrene). DIFFICILE (toxins A/B → pseudomembranous colitis after antibiotics → oral vancomycin/fidaxomicin).** Non-spore Gram-negative anaerobes are [[bacteroides-gram-negative-anaerobes]]; spore biology is [[bacterial-structure-cell-wall]].',
  ],

  mechanism: {
    title: 'Anaerobic spore-forming exotoxin producers: tetani (blocks GABA/glycine → spastic) vs botulinum (blocks ACh → flaccid); perfringens (lecithinase → gas gangrene); difficile (toxins A/B → pseudomembranous colitis)',
    steps: [
      { id: 's1', label: 'Clostridia = anaerobic spore-forming Gram-positive rods; exotoxin disease', emphasis: 'key' },
      { id: 's2', label: 'C. tetani: tetanospasmin blocks GABA/glycine → SPASTIC paralysis (lockjaw); toxoid vaccine', emphasis: 'danger' },
      { id: 's3', label: 'C. botulinum: toxin blocks ACh release → FLACCID descending paralysis (honey/infant)', emphasis: 'danger' },
      { id: 's4', label: 'C. perfringens: alpha-toxin (lecithinase) → gas gangrene (crepitant myonecrosis)', emphasis: 'key' },
      { id: 's5', label: 'C. difficile: toxins A/B → pseudomembranous colitis post-antibiotics → oral vancomycin/fidaxomicin', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Lockjaw (trismus), risus sardonicus and muscle spasms after a puncture wound', mechanism: 'Tetanus (tetanospasmin blocks inhibition)', significance: 'key' },
    { sign: 'Descending flaccid paralysis, diplopia and a "floppy" infant fed honey', mechanism: 'Botulism (blocks ACh release)', significance: 'key' },
    { sign: 'Crepitant, rapidly spreading myonecrosis after trauma', mechanism: 'Gas gangrene (C. perfringens alpha-toxin)', significance: 'key' },
    { sign: 'Watery diarrhoea and pseudomembranous colitis after antibiotics', mechanism: 'C. difficile toxins A/B', significance: 'key' },
    { sign: 'Food poisoning after reheated meat/stew', mechanism: 'C. perfringens enterotoxin', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The clostridial toxin causing spastic paralysis', meaning: 'Tetanospasmin (blocks GABA/glycine)' },
    { clue: 'The clostridial toxin causing flaccid paralysis', meaning: 'Botulinum toxin (blocks ACh release)' },
    { clue: 'The alpha-toxin of gas gangrene', meaning: 'Lecithinase (C. perfringens)' },
    { clue: 'The treatment of C. difficile colitis', meaning: 'Stop antibiotic; oral vancomycin or fidaxomicin' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Clostridial disease is toxin-driven, so recognition guides specific action: tetanus (spastic paralysis) is prevented by toxoid and treated with antitoxin/wound care; botulism (flaccid descending paralysis, infant honey exposure) needs antitoxin and airway support; gas gangrene (C. perfringens) requires urgent surgical debridement plus antibiotics; and C. difficile colitis is managed by stopping the offending antibiotic and giving oral vancomycin/fidaxomicin (faecal transplant for recurrence). Non-spore Gram-negative anaerobes are [[bacteroides-gram-negative-anaerobes]]. The neuromuscular toxin mechanisms also appear in the neuro block.' },
  ],

  mnemonics: [
    { hook: '"Tetani = Tense (spastic, blocks GABA/glycine); Botulinum = Bendy (flaccid, blocks ACh)"', expansion: ['Tetanus: lockjaw/opisthotonus', 'Botulism: honey/floppy baby'] },
    { hook: '"Perfringens = gas gangrene (lecithinase); Difficile = antibiotic colitis (A/B)"', expansion: ['Gas gangrene → debride', 'C. diff → oral vancomycin/fidaxomicin'] },
  ],

  traps: [
    {
      questionCategory: 'Tetanus vs botulism paralysis',
      wrongInstinct: 'Tetanus and botulism both cause the same kind of paralysis because both are clostridial neurotoxins',
      rightAnswer: 'They act at OPPOSITE points and cause OPPOSITE paralysis: TETANOSPASMIN (C. tetani) blocks release of INHIBITORY transmitters (GABA/glycine) in the CNS → SPASTIC paralysis (lockjaw, rigidity, opisthotonus), whereas BOTULINUM toxin (C. botulinum) blocks release of ACETYLCHOLINE at the neuromuscular junction → FLACCID, descending paralysis — so one is rigid/spastic and the other floppy/flaccid',
      why: 'Both are clostridial toxins that block neurotransmitter release, but tetanus removes inhibition (spastic) while botulism removes excitation (flaccid); confusing them inverts the clinical picture and management.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Tetanospasmin (tetanus toxin) causes spastic paralysis because it:',
      options: [
        { id: 'a', text: 'Blocks release of inhibitory neurotransmitters (GABA and glycine)' },
        { id: 'b', text: 'Blocks acetylcholine release at the neuromuscular junction' },
        { id: 'c', text: 'ADP-ribosylates EF-2' },
        { id: 'd', text: 'Raises cAMP in enterocytes' },
      ],
      answerId: 'a',
      explanation: 'Tetanospasmin blocks release of the inhibitory neurotransmitters GABA and glycine in the spinal cord, removing inhibition of motor neurons and producing spastic paralysis (lockjaw, risus sardonicus, opisthotonus) — the opposite of botulinum toxin, which blocks acetylcholine and causes flaccid paralysis.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Pseudomembranous colitis after a course of broad-spectrum antibiotics is caused by:',
      options: [
        { id: 'a', text: 'Clostridioides difficile toxins A and B' },
        { id: 'b', text: 'Clostridium perfringens alpha-toxin' },
        { id: 'c', text: 'Vibrio cholerae toxin' },
        { id: 'd', text: 'Bacillus cereus emetic toxin' },
      ],
      answerId: 'a',
      explanation: 'C. difficile overgrows when antibiotics disrupt normal flora; its toxins A and B cause antibiotic-associated/pseudomembranous colitis. Management is stopping the offending antibiotic and giving oral vancomycin or fidaxomicin, with faecal microbiota transplant for recurrent disease.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default clostridiaAnaerobicPathogens;
