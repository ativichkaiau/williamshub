import type { Lecture } from '../../lib/types';

export const anisakiasis: Lecture = {
  id: 'anisakiasis',
  title: 'Anisakiasis',
  system: 'parasitology',
  source: 'L6 — Toxocariasis & Anisakiasis',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Parasitology' },
    { kind: 'lecture', label: 'L6 Toxocara & Anisakis' },
    { kind: 'disease', label: 'Anisakiasis' },
    { kind: 'exam', label: 'Raw marine fish' },
  ],

  highYield: [
    '**Anisakis is a nematode of MARINE mammals (its definitive hosts) whose larvae are acquired by humans eating RAW or undercooked SALTWATER FISH or squid** — sushi, sashimi, ceviche, pickled/marinated fish. Humans are an accidental (dead-end) host, so the larva does not mature.',
    '**The larva attempts to penetrate the gastric or intestinal wall, causing anisakiasis: acute SEVERE EPIGASTRIC PAIN, nausea and vomiting within hours of eating raw marine fish (gastric form), or lower-abdominal pain (intestinal form) that can mimic appendicitis or an acute abdomen.** An eosinophilic granuloma may form around the larva.',
    '**Anisakis is also an important cause of food ALLERGY: it can provoke IgE-mediated reactions (urticaria, angioedema, even anaphylaxis) after eating fish — sometimes even when the fish is cooked (heat-stable allergens).** So it matters both as an invasive infection and as a hidden seafood allergen.',
    '**Diagnosis is by ENDOSCOPY, which can directly visualise (and remove) the larva burrowing into the gastric mucosa — this is also therapeutic; serology/history supports it.** There is no reliable drug; larval removal (or supportive care as the larva dies) is the mainstay.',
    '**Prevention is straightforward: cook fish thoroughly, or FREEZE it (which kills the larvae) before serving raw** — the basis of sushi-grade fish regulations. The high-yield story: acute epigastric pain (or a fish allergy) after RAW SALTWATER fish → *Anisakis* → endoscopic removal. It contrasts with the freshwater-fish parasites *Gnathostoma* and *Opisthorchis*.',
  ],

  mechanism: {
    title: 'Raw marine fish → larva penetrates gut wall (acute pain) ± IgE allergy; endoscopic removal',
    steps: [
      { id: 's1', label: 'Anisakis larvae from RAW/undercooked SALTWATER fish/squid (dead-end host)', emphasis: 'key' },
      { id: 's2', label: 'Larva penetrates gastric/intestinal wall → acute severe epigastric pain', emphasis: 'key' },
      { id: 's3', label: 'Intestinal form mimics appendicitis/acute abdomen; eosinophilic granuloma', emphasis: 'key' },
      { id: 's4', label: 'IgE food allergy (urticaria/anaphylaxis), even to cooked fish' },
      { id: 's5', label: 'Dx/treat: ENDOSCOPIC removal; prevent by cooking or FREEZING fish', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Acute severe epigastric pain hours after raw marine fish', mechanism: 'Gastric anisakiasis (larva penetrating the wall)', significance: 'key' },
    { sign: 'Lower abdominal pain mimicking appendicitis after sushi', mechanism: 'Intestinal anisakiasis', significance: 'key' },
    { sign: 'Urticaria/anaphylaxis after eating fish', mechanism: 'Anisakis IgE-mediated allergy (heat-stable allergens)', significance: 'key' },
    { sign: 'Larva seen burrowing into gastric mucosa on endoscopy', mechanism: 'Diagnostic (and therapeutic) finding', significance: 'supportive' },
    { sign: 'Eosinophilic granuloma around a larva in the gut wall', mechanism: 'Tissue reaction to the dead-end larva', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The food source of Anisakis', meaning: 'Raw/undercooked saltwater (marine) fish or squid' },
    { clue: 'The diagnostic and therapeutic procedure', meaning: 'Endoscopy (visualise and remove the larva)' },
    { clue: 'The immunological complication of Anisakis', meaning: 'IgE-mediated food allergy (even to cooked fish)' },
    { clue: 'The preventive measures', meaning: 'Cooking or freezing the fish (kills larvae)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Anisakiasis is an acute abdomen mimic and a hidden seafood allergen; endoscopic larval removal is both diagnostic and curative, and prevention is cooking/freezing fish. It is the MARINE-fish nematode, contrasting with the FRESHWATER-fish parasites *Gnathostoma* ([[gnathostomiasis]]) and the liver fluke *Opisthorchis* ([[trematodes-flukes-overview]]). It shares the dead-end-host/larva theme with *Toxocara* ([[toxocariasis-larva-migrans]]).' },
  ],

  mnemonics: [
    { hook: 'Anisakis = "raw SEA fish → acute epigastric pain (± fish allergy)"', expansion: ['Endoscopic removal', 'Freeze/cook fish to prevent'] },
    { hook: 'Marine vs freshwater fish: "Anisakis = salt; Gnathostoma/Opisthorchis = fresh"', expansion: ['Dead-end host (no maturation)', 'Heat-stable allergen'] },
  ],

  traps: [
    {
      questionCategory: 'Source of Anisakis vs freshwater-fish parasites',
      wrongInstinct: 'Anisakis is acquired from raw freshwater fish like the other fish-borne parasites',
      rightAnswer: 'Anisakis is acquired from raw/undercooked SALTWATER (MARINE) fish and squid (sushi/sashimi), unlike Gnathostoma and Opisthorchis which come from raw FRESHWATER fish — the type of fish is the key distinguishing exposure',
      why: 'Grouping all raw-fish parasites together loses the marine-vs-freshwater distinction that points to the right organism and the right dietary history.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient develops acute severe epigastric pain, nausea and vomiting a few hours after eating raw marine fish (sashimi); endoscopy shows a worm larva burrowing into the gastric mucosa. The organism is:',
      options: [
        { id: 'a', text: 'Anisakis' },
        { id: 'b', text: 'Ascaris lumbricoides' },
        { id: 'c', text: 'Opisthorchis viverrini' },
        { id: 'd', text: 'Giardia lamblia' },
      ],
      answerId: 'a',
      explanation: 'Anisakiasis follows ingestion of raw/undercooked saltwater fish; the larva penetrates the gastric wall causing acute epigastric pain, and endoscopy both diagnoses and treats it by removing the larva.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Beyond causing gastric pain, Anisakis is also an important cause of:',
      options: [
        { id: 'a', text: 'IgE-mediated food allergy (urticaria/anaphylaxis), sometimes even to cooked fish' },
        { id: 'b', text: 'Iron-deficiency anaemia' },
        { id: 'c', text: 'Biliary obstruction' },
        { id: 'd', text: 'Eosinophilic meningitis' },
      ],
      answerId: 'a',
      explanation: 'Anisakis allergens can trigger IgE-mediated reactions ranging from urticaria to anaphylaxis after eating fish, and because some allergens are heat-stable, reactions can occur even when the fish is cooked.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default anisakiasis;
