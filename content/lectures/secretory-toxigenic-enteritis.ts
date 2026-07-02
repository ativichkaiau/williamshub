import type { Lecture } from '../../lib/types';
import { BACTERIAL_DIARRHEA_TYPES } from '../../lib/figures';

export const secretoryToxigenicEnteritis: Lecture = {
  id: 'secretory-toxigenic-enteritis',
  title: 'Secretory (Toxigenic) Bacterial Diarrhoea',
  system: 'gi',
  source: 'L13 — Bacterial GI Infection I',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'L13 Bacterial GI I' },
    { kind: 'disease', label: 'Cholera' },
    { kind: 'exam', label: 'Enterotoxins' },
  ],

  highYield: [
    '**Secretory (toxigenic) diarrhoea is WATERY, large-volume and non-bloody — bacteria (or their toxins) drive intestinal fluid SECRETION without invading the mucosa (no fever, no faecal leukocytes).** The danger is rapid DEHYDRATION; treatment is aggressive REHYDRATION (ORS), because the absorptive Na⁺–glucose cotransport still works.',
    '**Vibrio cholerae is the archetype: its CHOLERA TOXIN (an AB5 toxin) binds the GM1 ganglioside, ADP-ribosylates Gs → permanently activates adenylate cyclase → ↑cAMP → massive Cl⁻/water secretion → "rice-water" stool.** Cholera can cause litres of fluid loss per hour and fatal hypovolaemic shock; ORS is life-saving (a cholera vaccine also exists).',
    '**Enterotoxigenic E. coli (ETEC) is the leading cause of TRAVELLER\'S diarrhoea, producing heat-labile (LT, cholera-toxin-like → ↑cAMP) and heat-stable (ST → ↑cGMP) toxins** that drive watery diarrhoea. It is self-limited and managed with fluids (± antibiotics for severe cases).',
    '**Preformed-toxin food poisoning causes RAPID-onset vomiting (toxin already in the food, short incubation): Staphylococcus aureus (dairy/mayonnaise, 1–6 h) and Bacillus cereus (reheated FRIED RICE, emetic toxin).** Because the toxin is preformed, symptoms begin within hours and resolve quickly — no antibiotic needed.',
    '**The unifying principle: toxin → ↑cyclic nucleotide → secretion → watery diarrhoea, treated with rehydration.** Contrast this with INVASIVE/inflammatory bacteria that cause bloody, febrile dysentery ([[inflammatory-invasive-enteritis]]). The mechanism (cAMP/cGMP secretion) and the ORS rationale (Na⁺–glucose cotransport) are the highest-yield points.',
  ],

  mechanism: {
    title: 'Toxin → ↑cAMP/cGMP → fluid secretion → watery diarrhoea → rehydrate',
    steps: [
      { id: 's1', label: 'Secretory = watery, non-bloody, no fever/WBC; dehydration risk', emphasis: 'key' },
      { id: 's2', label: 'Cholera toxin (AB5) → GM1 → ↑cAMP → rice-water stool', emphasis: 'key' },
      { id: 's3', label: 'ETEC (traveller\'s): LT (↑cAMP) + ST (↑cGMP) toxins', emphasis: 'key' },
      { id: 's4', label: 'Preformed toxin: S. aureus (dairy) + B. cereus (fried rice) → rapid vomiting', emphasis: 'key' },
      { id: 's5', label: 'Treat: aggressive ORS (Na–glucose cotransport intact)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: '"Rice-water" stool with profound dehydration', mechanism: 'Cholera toxin (↑cAMP secretory diarrhoea)', significance: 'key' },
    { sign: 'Watery diarrhoea in a traveller', mechanism: 'Enterotoxigenic E. coli (LT/ST toxins)', significance: 'key' },
    { sign: 'Vomiting 1–6 h after eating dairy/mayonnaise', mechanism: 'Staphylococcus aureus preformed toxin', significance: 'key' },
    { sign: 'Vomiting after reheated fried rice', mechanism: 'Bacillus cereus emetic toxin', significance: 'supportive' },
    { sign: 'No blood or faecal leukocytes in the stool', mechanism: 'Non-invasive (secretory) mechanism', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The toxin mechanism of cholera', meaning: 'AB5 toxin → GM1 → ↑cAMP → Cl⁻/water secretion' },
    { clue: 'The leading cause of traveller\'s diarrhoea', meaning: 'Enterotoxigenic E. coli (ETEC)' },
    { clue: 'The food poisoning from reheated fried rice', meaning: 'Bacillus cereus (emetic toxin)' },
    { clue: 'The treatment for secretory diarrhoeal dehydration', meaning: 'Oral rehydration solution (aggressive)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Secretory diarrhoea kills through dehydration, and ORS ([[laxatives-antidiarrheals-ors]]) is the life-saving treatment (the cholera toxin/cAMP mechanism and the Na⁺–glucose cotransport rationale are core physiology). Contrast with invasive bacteria ([[inflammatory-invasive-enteritis]]) and viral gastroenteritis ([[viral-gastroenteritis]]); persistent/other bacterial causes are in [[food-poisoning-post-infectious]].' },
  ],

  mnemonics: [
    { hook: 'Cholera = "AB5 → GM1 → cAMP → rice-water" (treat with ORS)', expansion: ['ETEC LT = cholera-like (cAMP)', 'ETEC ST = cGMP'] },
    { hook: 'Preformed toxin "fast vomit": S. aureus (dairy) + B. cereus (fried rice)', expansion: ['1–6 h onset', 'No antibiotics needed'] },
  ],

  traps: [
    {
      questionCategory: 'Treating cholera',
      wrongInstinct: 'Massive cholera fluid loss means the gut can no longer absorb, so only IV fluids will work',
      rightAnswer: 'Even in profuse cholera, the intestinal Na⁺–GLUCOSE cotransporter keeps working, so ORAL REHYDRATION SOLUTION (glucose + salt) effectively replaces losses — it is the mainstay and is life-saving (IV is reserved for severe shock/inability to drink)',
      why: 'Cholera toxin drives secretion but does not disable glucose-coupled sodium absorption; understanding this is why cheap oral ORS, not just IV fluids, has saved millions of lives.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Cholera toxin produces profuse watery ("rice-water") diarrhoea by:',
      options: [
        { id: 'a', text: 'Invading and destroying colonic mucosa' },
        { id: 'b', text: 'ADP-ribosylating Gs to persistently activate adenylate cyclase, raising cAMP and driving chloride/water secretion' },
        { id: 'c', text: 'Blocking sodium–glucose cotransport' },
        { id: 'd', text: 'Producing a Shiga toxin' },
      ],
      answerId: 'b',
      explanation: 'The cholera AB5 toxin binds GM1 ganglioside and ADP-ribosylates Gs, locking adenylate cyclase on; the resulting rise in cAMP drives massive chloride and water secretion — a non-invasive, secretory mechanism treated with rehydration.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Rapid-onset vomiting (1–6 hours) after eating reheated fried rice is most characteristic of:',
      options: [
        { id: 'a', text: 'Bacillus cereus (preformed emetic toxin)' },
        { id: 'b', text: 'Shigella' },
        { id: 'c', text: 'Campylobacter' },
        { id: 'd', text: 'Rotavirus' },
      ],
      answerId: 'a',
      explanation: 'Bacillus cereus produces a heat-stable preformed emetic toxin classically associated with reheated fried rice, causing vomiting within a few hours; the short incubation reflects toxin already present in the food.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Bacterial diarrhoea types', svg: BACTERIAL_DIARRHEA_TYPES, caption: 'Secretory/toxigenic (cholera, ETEC, preformed toxins) vs inflammatory/invasive organisms and their features.' },
  ],
};

export default secretoryToxigenicEnteritis;
