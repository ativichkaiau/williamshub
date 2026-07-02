import type { Lecture } from '../../lib/types';

export const giardiaIntestinalFlagellates: Lecture = {
  id: 'giardia-intestinal-flagellates',
  title: 'Giardia & Intestinal Flagellates',
  system: 'parasitology',
  source: 'L4 — Flagellates & Ciliates',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Parasitology' },
    { kind: 'lecture', label: 'L4 Flagellates & Ciliates' },
    { kind: 'disease', label: 'Giardiasis' },
    { kind: 'exam', label: 'Malabsorption' },
  ],

  highYield: [
    '**Giardia lamblia (duodenalis/intestinalis) is a flagellate causing GIARDIASIS — the commonest protozoal cause of diarrhoea worldwide.** It is acquired FAECAL–ORAL by ingesting CYSTS (low infectious dose) from contaminated water — the classic "backpacker\'s/traveller\'s diarrhoea" from streams, and outbreaks from unfiltered water.',
    '**The trophozoite is a distinctive PEAR-SHAPED cell with TWO NUCLEI (a "face"/"owl" appearance), a ventral sucking disc and flagella; it attaches to the DUODENAL/jejunal mucosa (it does NOT invade).** By coating the absorptive surface it causes MALABSORPTION → foul-smelling, FATTY (steatorrhoea) diarrhoea, bloating, flatulence and weight loss; there is NO blood (non-invasive).',
    '**Diagnosis: cysts (oval, 4 nuclei) or trophozoites in stool — but shedding is intermittent, so a single negative stool does not exclude it; STOOL ANTIGEN (ELISA) or PCR is more sensitive, and rarely a duodenal aspirate/"string test."** Treatment is METRONIDAZOLE (or tinidazole/nitazoxanide).',
    '**Dientamoeba fragilis is a related flagellate (despite the "amoeba" name) that causes non-bloody diarrhoea/abdominal pain; it has no cyst stage.** Together with Giardia these are the non-invasive, WATERY/malabsorptive intestinal flagellates — contrasting with the invasive amoeba E. histolytica which causes bloody dysentery.',
    '**The high-yield picture: greasy, non-bloody, malabsorptive diarrhoea after drinking untreated water → Giardia → stool antigen/PCR → metronidazole.** It is the flagellate counterpart to the amoebae ([[entamoeba-histolytica-amoebiasis]]) and the urogenital flagellate Trichomonas ([[trichomonas-balantidium]]); prevention is water treatment (it resists chlorine, so filtration/boiling).',
  ],

  mechanism: {
    title: 'Faecal-oral cyst → duodenal trophozoite (attaches, no invasion) → malabsorption',
    steps: [
      { id: 's1', label: 'Faecal–oral cyst (low dose, waterborne) → excysts in gut', emphasis: 'key' },
      { id: 's2', label: 'Pear-shaped, 2-nucleate trophozoite attaches to duodenum (no invasion)', emphasis: 'key' },
      { id: 's3', label: 'Coats absorptive surface → MALABSORPTION, fatty non-bloody diarrhoea', emphasis: 'key' },
      { id: 's4', label: 'Dx: stool O&P (intermittent) → stool ANTIGEN/PCR more sensitive' },
      { id: 's5', label: 'Treat metronidazole; resists chlorine (filter/boil water)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Greasy, foul, non-bloody diarrhoea + bloating after untreated water', mechanism: 'Giardiasis (malabsorption)', significance: 'key' },
    { sign: 'Pear-shaped trophozoite with two nuclei ("owl face")', mechanism: 'Giardia lamblia', significance: 'key' },
    { sign: 'Negative single stool despite classic symptoms', mechanism: 'Intermittent cyst shedding — use stool antigen/PCR', significance: 'key' },
    { sign: 'Steatorrhoea and weight loss', mechanism: 'Impaired small-bowel absorption (non-invasive coating)', significance: 'supportive' },
    { sign: 'Non-bloody diarrhoea with Dientamoeba fragilis', mechanism: 'Related flagellate (no cyst stage)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The commonest protozoal cause of diarrhoea worldwide', meaning: 'Giardia lamblia' },
    { clue: 'The characteristic trophozoite appearance', meaning: 'Pear-shaped with two nuclei (owl/face-like)' },
    { clue: 'The more sensitive test when stool O&P is negative', meaning: 'Stool antigen (ELISA) or PCR' },
    { clue: 'The treatment of giardiasis', meaning: 'Metronidazole (or tinidazole/nitazoxanide)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Giardia is the classic malabsorptive, non-bloody diarrhoea — contrasting with invasive amoebiasis ([[entamoeba-histolytica-amoebiasis]]) — and its intermittent shedding means stool antigen/PCR beats a single O&P. Water treatment (it resists chlorine) prevents it. It is a flagellate within the framework of [[protozoa-classification-biology]]; the urogenital/ciliate flagellates follow in [[trichomonas-balantidium]].' },
  ],

  mnemonics: [
    { hook: 'Giardia = "greasy, non-bloody, malabsorptive" (fatty stool, no invasion)', expansion: ['Pear-shaped, 2 nuclei (owl face)', 'Attaches to duodenum'] },
    { hook: '"Backpacker\'s diarrhoea" — waterborne cyst, resists chlorine (filter/boil)', expansion: ['Stool antigen/PCR if O&P negative', 'Metronidazole'] },
  ],

  traps: [
    {
      questionCategory: 'Excluding giardiasis with a single stool test',
      wrongInstinct: 'A single negative stool ova-and-parasite test rules out giardiasis',
      rightAnswer: 'Giardia cysts are shed INTERMITTENTLY, so a single negative stool O&P does NOT exclude it — repeat testing or (better) a stool ANTIGEN test/PCR is used when clinical suspicion is high',
      why: 'Intermittent shedding lowers the sensitivity of a single microscopy; relying on one negative result misses cases, whereas antigen/PCR testing is far more sensitive.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A hiker develops greasy, foul-smelling, non-bloody diarrhoea with bloating and weight loss after drinking from a mountain stream. The most likely organism is:',
      options: [
        { id: 'a', text: 'Entamoeba histolytica' },
        { id: 'b', text: 'Giardia lamblia' },
        { id: 'c', text: 'Shigella' },
        { id: 'd', text: 'Trichomonas vaginalis' },
      ],
      answerId: 'b',
      explanation: 'Giardiasis causes malabsorptive, fatty, non-bloody diarrhoea after ingesting cysts from untreated water; the trophozoite attaches to (but does not invade) the duodenal mucosa. Treatment is metronidazole.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Giardia lamblia causes malabsorption because the trophozoite:',
      options: [
        { id: 'a', text: 'Invades and ulcerates the colon' },
        { id: 'b', text: 'Attaches to and coats the duodenal/jejunal absorptive surface without invading' },
        { id: 'c', text: 'Produces a bloody dysentery' },
        { id: 'd', text: 'Enters the bloodstream' },
      ],
      answerId: 'b',
      explanation: 'Giardia trophozoites attach via a ventral sucking disc to the small-intestinal mucosa, impairing absorption without tissue invasion — hence a non-bloody, fatty, malabsorptive diarrhoea rather than dysentery.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default giardiaIntestinalFlagellates;
