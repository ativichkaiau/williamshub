import type { Lecture } from '../../lib/types';

export const bacillusAnthracisCereus: Lecture = {
  id: 'bacillus-anthracis-cereus',
  title: 'Bacillus: anthracis & cereus',
  system: 'microbiology',
  source: 'L12 — Gram-Positive Bacilli',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Micro' },
    { kind: 'lecture', label: 'L12 Bacillus' },
    { kind: 'mechanism', label: 'Spore-formers; toxins' },
    { kind: 'exam', label: 'Anthrax eschar; reheated-rice emesis' },
  ],

  highYield: [
    '**Bacillus are AEROBIC, SPORE-FORMING Gram-positive rods (Clostridium is the anaerobic counterpart). BACILLUS ANTHRACIS is unique in having a PROTEIN (poly-D-glutamate) capsule (most capsules are polysaccharide) and a tripartite anthrax TOXIN (protective antigen + oedema factor + lethal factor). Spores in soil/animal products cause zoonotic anthrax.**',
    '**ANTHRAX forms: CUTANEOUS (commonest — a painless black necrotic ESCHAR with marked oedema after skin inoculation); INHALATIONAL ("woolsorters\' disease" — spores inhaled → haemorrhagic mediastinitis, widened mediastinum, high mortality; a bioterrorism agent); and GASTROINTESTINAL. Treatment: ciprofloxacin/doxycycline (± antitoxin for systemic disease).**',
    '**BACILLUS CEREUS causes two FOOD-POISONING syndromes from PRE-FORMED/rapidly-formed toxins: an EMETIC form (heat-stable toxin, classically REHEATED FRIED RICE — vomiting 1–6 h) and a DIARRHOEAL form (heat-labile enterotoxin — watery diarrhoea 8–16 h). Both are usually self-limiting; it can also cause eye infections (keratitis/endophthalmitis) and line infections.**',
    '**Contrast the two Bacillus: anthracis = serious zoonosis (eschar / inhalational mediastinitis; protein capsule + anthrax toxin) vs cereus = food poisoning (reheated-rice emetic and diarrhoeal syndromes). Both are aerobic spore-formers, so spores resist heat/drying — relevant to sterilisation and food safety.**',
    '**The take-home: aerobic SPORE-forming Gram-positive rods. B. ANTHRACIS = PROTEIN capsule + anthrax toxin → cutaneous painless black ESCHAR (+ oedema), inhalational mediastinitis (bioterror). B. CEREUS = food poisoning — EMETIC (reheated rice, heat-stable, 1–6 h) and diarrhoeal (8–16 h) toxins.** The anaerobic spore-formers are [[clostridia-anaerobic-pathogens]]; non-spore GPB are [[corynebacterium-listeria]].',
  ],

  mechanism: {
    title: 'Aerobic spore-formers; B. anthracis (protein capsule + anthrax toxin → eschar/inhalational mediastinitis) vs B. cereus (emetic reheated-rice + diarrhoeal food poisoning toxins)',
    steps: [
      { id: 's1', label: 'Bacillus = aerobic spore-forming Gram-positive rods (Clostridium = anaerobic)', emphasis: 'key' },
      { id: 's2', label: 'B. anthracis: unique PROTEIN capsule + tripartite anthrax toxin (PA/EF/LF)', emphasis: 'key' },
      { id: 's3', label: 'Cutaneous anthrax = painless black eschar + oedema; inhalational = mediastinitis (bioterror)', emphasis: 'danger' },
      { id: 's4', label: 'B. cereus emetic toxin (heat-stable) → reheated fried rice, vomiting 1–6 h', emphasis: 'key' },
      { id: 's5', label: 'B. cereus diarrhoeal (heat-labile) enterotoxin → watery diarrhoea 8–16 h', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Painless black necrotic eschar with surrounding oedema after skin contact with animal hides', mechanism: 'Cutaneous anthrax (B. anthracis)', significance: 'key' },
    { sign: 'Widened mediastinum and haemorrhagic mediastinitis after spore inhalation', mechanism: 'Inhalational anthrax', significance: 'key' },
    { sign: 'Vomiting 1–6 h after reheated fried rice', mechanism: 'B. cereus emetic toxin (heat-stable)', significance: 'key' },
    { sign: 'Watery diarrhoea 8–16 h after a meal', mechanism: 'B. cereus diarrhoeal enterotoxin', significance: 'supportive' },
    { sign: 'A Gram-positive rod with a protein (not polysaccharide) capsule', mechanism: 'B. anthracis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The bacterium with a unique protein capsule', meaning: 'Bacillus anthracis' },
    { clue: 'The three components of anthrax toxin', meaning: 'Protective antigen, oedema factor, lethal factor' },
    { clue: 'The food classically causing B. cereus emetic illness', meaning: 'Reheated fried rice' },
    { clue: 'The genus of aerobic spore-forming Gram-positive rods', meaning: 'Bacillus' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Bacillus species are aerobic spore-formers with distinct clinical impact: B. anthracis is a serious zoonosis and bioterrorism agent (painless cutaneous eschar; lethal inhalational mediastinitis; protein capsule + anthrax toxin) treated with ciprofloxacin/doxycycline ± antitoxin, while B. cereus causes self-limiting food poisoning (emetic reheated-rice and diarrhoeal syndromes) managed supportively — a reminder that spores survive heat, so proper food handling matters. Anaerobic spore-formers are [[clostridia-anaerobic-pathogens]]; non-spore GPB are [[corynebacterium-listeria]].' },
  ],

  mnemonics: [
    { hook: '"anthraCis = protein Capsule + toxin → black esChar/mediastinitis"', expansion: ['Cutaneous = painless eschar', 'Inhalational = woolsorters, bioterror'] },
    { hook: '"cereus = reheated fRied Rice emetic (1–6 h) + diarrhoeal (8–16 h)"', expansion: ['Both aerobic spore-formers', 'Spores resist heat'] },
  ],

  traps: [
    {
      questionCategory: 'The anthrax eschar',
      wrongInstinct: 'A necrotic black skin ulcer from anthrax would be intensely painful',
      rightAnswer: 'The cutaneous anthrax lesion is a PAINLESS black necrotic ESCHAR (with striking surrounding non-pitting OEDEMA) — the lack of pain despite the alarming necrotic appearance is characteristic and helps distinguish it from painful ulcers/spider bites; it follows inoculation of spores through skin (e.g. handling animal hides/wool)',
      why: 'The painlessness of the eschar is a classic clue; expecting pain could lead to misdiagnosis, whereas a painless black eschar with oedema in someone exposed to animal products should raise anthrax.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A painless black necrotic eschar with marked surrounding oedema develops on the hand of an animal-hide worker. The most likely organism is:',
      options: [
        { id: 'a', text: 'Bacillus cereus' },
        { id: 'b', text: 'Bacillus anthracis' },
        { id: 'c', text: 'Clostridium tetani' },
        { id: 'd', text: 'Listeria monocytogenes' },
      ],
      answerId: 'b',
      explanation: 'Cutaneous anthrax (B. anthracis) produces a characteristically painless black eschar with prominent oedema after spore inoculation through skin; B. anthracis is distinctive for its protein capsule and the tripartite anthrax toxin.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Vomiting beginning 1–6 hours after eating reheated fried rice is caused by which organism and mechanism?',
      options: [
        { id: 'a', text: 'Bacillus cereus, via a pre-formed heat-stable emetic toxin' },
        { id: 'b', text: 'Salmonella, via invasion of the gut' },
        { id: 'c', text: 'Clostridium tetani, via a neurotoxin' },
        { id: 'd', text: 'Bacillus anthracis, via anthrax toxin' },
      ],
      answerId: 'a',
      explanation: 'The emetic form of Bacillus cereus food poisoning results from a pre-formed, heat-stable toxin (classically in reheated rice), causing rapid vomiting within 1–6 hours; a separate heat-labile enterotoxin causes a later diarrhoeal syndrome.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default bacillusAnthracisCereus;
