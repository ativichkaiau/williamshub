import type { Lecture } from '../../lib/types';

export const oralToleranceMicrobiota: Lecture = {
  id: 'oral-tolerance-microbiota',
  title: 'Oral Tolerance & the Gut Microbiota',
  system: 'immune',
  source: 'L11 — Mucosal Immunology & Microbiota',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Immunology' },
    { kind: 'lecture', label: 'L11 Mucosal Immunology' },
    { kind: 'mechanism', label: 'Tolerance vs inflammation' },
    { kind: 'exam', label: 'Microbiota · dysbiosis' },
  ],

  highYield: [
    '**The gut faces a dilemma:** it must **attack pathogens** yet **tolerate** an enormous load of harmless food antigens and commensal bacteria. The default at mucosa is **regulated tolerance**, not inflammation.',
    '**Oral tolerance** = active suppression of immune responses to **ingested (oral) antigens**, mediated largely by **regulatory T cells (Tregs)**, tolerogenic dendritic cells, and cytokines (**TGF-β, IL-10**). It prevents needless reactions to food and commensals; its failure contributes to **food allergy and coeliac disease**.',
    '**The microbiota is a functional "organ."** A **balanced, diverse commensal community** provides **colonisation resistance** (out-competing pathogens), produces **short-chain fatty acids** (e.g. butyrate) that expand **Tregs**, and educates/matures the immune system (germ-free animals have underdeveloped immunity).',
    '**The Treg–Th17 balance** governs mucosal homeostasis: commensals + SCFAs favour **Treg** (tolerance); certain microbes drive **Th17** (barrier defence). Tipping toward Th17/inflammation contributes to disease.',
    '**Dysbiosis** (a disturbed, less-diverse microbiota — e.g. after antibiotics, with expansion of organisms like *E. coli*) is linked to **inflammatory bowel disease, allergy, metabolic, and autoimmune conditions**, and to susceptibility to *C. difficile* (treated by restoring flora, e.g. faecal transplant).',
  ],

  mechanism: {
    title: 'Tolerate the harmless, resist the harmful',
    steps: [
      { id: 's1', label: 'Default mucosal state = regulated tolerance', emphasis: 'key' },
      { id: 's2', label: 'Oral tolerance: Tregs + TGF-β/IL-10 suppress food/commensal responses', emphasis: 'key' },
      { id: 's3', label: 'Microbiota → colonisation resistance + SCFAs → expand Tregs', emphasis: 'key' },
      { id: 's4', label: 'Treg (tolerance) vs Th17 (defence) balance' },
      { id: 's5', label: 'Dysbiosis → IBD, allergy, C. difficile, autoimmunity', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Immune non-response to ingested food antigen', mechanism: 'Oral tolerance (Treg-mediated)', significance: 'key' },
    { sign: 'Commensals outcompeting a pathogen', mechanism: 'Colonisation resistance (healthy microbiota)', significance: 'key' },
    { sign: 'Butyrate/SCFA expanding colonic Tregs', mechanism: 'Microbiota-driven tolerance', significance: 'supportive' },
    { sign: 'C. difficile colitis after broad-spectrum antibiotics', mechanism: 'Dysbiosis → loss of colonisation resistance', significance: 'key' },
    { sign: 'Underdeveloped immunity in germ-free animals', mechanism: 'Microbiota is needed for immune maturation', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Cell type central to oral tolerance', meaning: 'Regulatory T cell (Treg)' },
    { clue: 'Microbial metabolites that expand Tregs', meaning: 'Short-chain fatty acids (e.g. butyrate)' },
    { clue: 'Disturbed, less-diverse microbiota', meaning: 'Dysbiosis' },
    { clue: 'Therapy restoring healthy flora in recurrent C. difficile', meaning: 'Faecal microbiota transplant' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Microbiota/dysbiosis links to IBD, allergy, and autoimmunity; probiotics, dietary fibre, and faecal transplant are emerging therapies; oral tolerance underlies oral immunotherapy for food allergy. Barrier mechanics: [[mucosal-immune-system]]; tolerance breakdown: [[tolerance-autoimmunity-mechanisms]].' },
  ],

  mnemonics: [
    { hook: 'Oral tolerance = Tregs + TGF-β/IL-10 (don\'t attack food)', expansion: ['Failure → food allergy/coeliac'] },
    { hook: 'Microbiota: "resist, feed Tregs, educate"; dysbiosis breaks it', expansion: ['SCFA/butyrate → Treg'] },
  ],

  traps: [
    {
      questionCategory: 'Default mucosal immune state',
      wrongInstinct: 'The healthy gut mounts an active inflammatory response to all bacteria it contains',
      rightAnswer: 'The default mucosal state toward commensals/food is regulated TOLERANCE (Tregs), not inflammation',
      why: 'Constant inflammation against the trillions of commensals would be harmful; tolerance is actively maintained and only overridden for true pathogens.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Oral tolerance to ingested food antigens is mediated primarily by:',
      options: [
        { id: 'a', text: 'Cytotoxic CD8 T cells' },
        { id: 'b', text: 'Regulatory T cells and tolerogenic cytokines (TGF-β, IL-10)' },
        { id: 'c', text: 'IgE and mast cells' },
        { id: 'd', text: 'Complement activation' },
      ],
      answerId: 'b',
      explanation: 'Oral tolerance is an active, Treg-driven suppression of responses to ingested antigens (with TGF-β/IL-10 and tolerogenic dendritic cells); its failure contributes to food allergy and coeliac disease.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A patient develops severe Clostridioides difficile colitis after broad-spectrum antibiotics. The key predisposing change is:',
      options: [
        { id: 'a', text: 'Complement deficiency' },
        { id: 'b', text: 'Dysbiosis with loss of colonisation resistance' },
        { id: 'c', text: 'Failure of thymic selection' },
        { id: 'd', text: 'A defect in NADPH oxidase' },
      ],
      answerId: 'b',
      explanation: 'Antibiotics disrupt the protective commensal microbiota (dysbiosis), removing colonisation resistance and allowing C. difficile overgrowth — sometimes treated by restoring flora (faecal transplant).',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default oralToleranceMicrobiota;
