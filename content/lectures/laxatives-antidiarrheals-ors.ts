import type { Lecture } from '../../lib/types';

export const laxativesAntidiarrhealsOrs: Lecture = {
  id: 'laxatives-antidiarrheals-ors',
  title: 'Laxatives, Antidiarrhoeals & Oral Rehydration',
  system: 'gi',
  source: 'L5 — Drugs in GI Disorders & ORS',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'L5 GI Drugs & ORS' },
    { kind: 'treatment', label: 'Laxatives / ORS' },
    { kind: 'mechanism', label: 'Na-glucose cotransport' },
  ],

  highYield: [
    '**Laxatives treat constipation by different mechanisms: bulk-forming (fibre/psyllium — hold water, first-line), osmotic (lactulose, polyethylene glycol, magnesium salts — draw water in), stimulant (senna, bisacodyl — stimulate motility/secretion), and stool softeners/lubricants.** Lactulose has the extra role of treating **hepatic encephalopathy** (traps ammonia — see [[pharmacology-in-liver-disease]]).',
    '**Antidiarrhoeals slow transit or bind fluid: opioid agonists — LOPERAMIDE (acts on gut µ-receptors, minimal CNS entry) and diphenoxylate — reduce motility; bismuth and adsorbents are alternatives.** Crucially, **antimotility drugs should be AVOIDED in invasive/inflammatory (bloody, febrile) diarrhoea and in EHEC**, where slowing transit worsens toxin exposure (↑HUS risk) and can precipitate toxic megacolon.',
    '**Oral rehydration solution (ORS) is the cornerstone of treating dehydration from diarrhoea — a low-osmolarity mix of glucose and sodium (plus K⁺ and citrate).** It works because the **SGLT1 sodium–glucose cotransporter in the small intestine keeps absorbing Na⁺ (and water follows) even in secretory diarrhoea like cholera** — glucose "drags" sodium and water across.',
    '**This Na⁺–glucose coupling is why ORS must contain glucose: without it, the cotransporter cannot pull sodium (and therefore water) in.** ORS is cheap, oral and life-saving in cholera and childhood gastroenteritis, and is preferred over IV fluids whenever the patient can drink — one of the highest-impact interventions in global health.',
    '**Antispasmodics (antimuscarinics like hyoscine, or direct smooth-muscle relaxants) relieve cramping/colic and are used in irritable bowel syndrome.** The unifying theme of GI-disorder pharmacology is to match the drug to the physiological problem — motility, secretion, or fluid loss — and to know the safety caveats (antimotility in dysentery; ORS glucose requirement).',
  ],

  mechanism: {
    title: 'Laxatives (bulk/osmotic/stimulant), antidiarrhoeals (slow transit), ORS (Na-glucose)',
    steps: [
      { id: 's1', label: 'Laxatives: bulk, osmotic (lactulose/PEG), stimulant (senna)', emphasis: 'key' },
      { id: 's2', label: 'Loperamide (gut µ-opioid) slows transit — AVOID in bloody/EHEC diarrhoea', emphasis: 'danger' },
      { id: 's3', label: 'ORS = glucose + Na⁺ (+ K⁺, citrate), low osmolarity', emphasis: 'key' },
      { id: 's4', label: 'SGLT1 Na–glucose cotransport keeps absorbing water (even in cholera)', emphasis: 'key' },
      { id: 's5', label: 'Antispasmodics (antimuscarinic) for cramping/IBS' },
    ],
  },

  examFindings: [
    { sign: 'ORS effective even in profuse cholera diarrhoea', mechanism: 'SGLT1 Na–glucose cotransport still absorbs water', significance: 'key' },
    { sign: 'Loperamide reduces stool frequency in non-inflammatory diarrhoea', mechanism: 'Gut µ-opioid slowing of transit', significance: 'key' },
    { sign: 'Worsening/toxic megacolon after antimotility in dysentery', mechanism: 'Avoid antimotility in invasive/EHEC diarrhoea', significance: 'key' },
    { sign: 'Lactulose used for both constipation and encephalopathy', mechanism: 'Osmotic laxative + ammonia trapping', significance: 'supportive' },
    { sign: 'Fibre/psyllium as first-line for simple constipation', mechanism: 'Bulk-forming laxative', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The transporter that makes oral rehydration work', meaning: 'SGLT1 (intestinal sodium–glucose cotransporter)' },
    { clue: 'Why ORS must contain glucose', meaning: 'Glucose co-transports sodium (and water follows)' },
    { clue: 'The diarrhoea types in which antimotility drugs are contraindicated', meaning: 'Invasive/inflammatory (bloody) diarrhoea and EHEC' },
    { clue: 'The laxative that also treats hepatic encephalopathy', meaning: 'Lactulose' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'ORS is the life-saving treatment for the secretory diarrhoea of [[secretory-toxigenic-enteritis]] (cholera) and childhood [[viral-gastroenteritis]]; the Na–glucose coupling is the renal/intestinal SGLT principle. Antimotility drugs are unsafe in the invasive diarrhoea of [[inflammatory-invasive-enteritis]]. Lactulose links to [[pharmacology-in-liver-disease]]; antiemetics/prokinetics are in [[antiemetics-prokinetics]].' },
  ],

  mnemonics: [
    { hook: 'ORS works because "glucose drags sodium (and water) via SGLT1"', expansion: ['Absorption continues even in cholera', 'Low-osmolarity glucose + Na + K + citrate'] },
    { hook: 'Loperamide "don\'t slow the bloody/EHEC gut" (↑HUS, toxic megacolon)', expansion: ['Safe in traveller\'s/non-inflammatory', 'Gut µ-opioid, minimal CNS'] },
  ],

  traps: [
    {
      questionCategory: 'Using antimotility agents in diarrhoea',
      wrongInstinct: 'Loperamide is a safe symptomatic treatment for all types of diarrhoea',
      rightAnswer: 'Antimotility agents like loperamide should be AVOIDED in invasive/inflammatory (bloody, febrile) diarrhoea and in EHEC infection — slowing transit prolongs toxin/pathogen contact, increasing the risk of haemolytic-uraemic syndrome and toxic megacolon',
      why: 'In non-inflammatory diarrhoea loperamide is helpful, but in dysentery it removes a protective clearance mechanism; recognising the bloody/febrile picture prevents a dangerous prescription.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Oral rehydration solution remains effective even in severe secretory diarrhoea (e.g. cholera) because glucose:',
      options: [
        { id: 'a', text: 'Neutralises the bacterial toxin' },
        { id: 'b', text: 'Drives sodium (and therefore water) absorption via the intestinal SGLT1 cotransporter' },
        { id: 'c', text: 'Kills the bacteria' },
        { id: 'd', text: 'Slows intestinal motility' },
      ],
      answerId: 'b',
      explanation: 'The SGLT1 sodium–glucose cotransporter continues to absorb sodium (with water following osmotically) even when secretory toxins are active; this coupling is why ORS must contain glucose and is life-saving in cholera.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'In which situation is loperamide (an antimotility agent) contraindicated?',
      options: [
        { id: 'a', text: 'Mild traveller\'s (watery) diarrhoea' },
        { id: 'b', text: 'Bloody, febrile (invasive) diarrhoea or suspected EHEC infection' },
        { id: 'c', text: 'Osmotic diarrhoea' },
        { id: 'd', text: 'Post-operative ileus prevention' },
      ],
      answerId: 'b',
      explanation: 'Antimotility drugs should be avoided in invasive/inflammatory (bloody, febrile) diarrhoea and EHEC, where slowing transit prolongs toxin exposure and increases the risk of haemolytic-uraemic syndrome and toxic megacolon.',
      tests: 'treatment',
    },
  ],

  figures: [],
};

export default laxativesAntidiarrhealsOrs;
