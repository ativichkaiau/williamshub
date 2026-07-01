import type { Lecture } from '../../lib/types';

export const smallLargeIntestine: Lecture = {
  id: 'small-large-intestine',
  title: 'Small & Large Intestine',
  system: 'gi',
  source: 'L18 — Intestines, Liver & Biliary System',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L18 Intestines, Liver & Biliary' },
    { kind: 'disease', label: 'Intestines' },
    { kind: 'mechanism', label: 'Jejunum vs ileum, colon features' },
    { kind: 'exam', label: 'Appendix / McBurney' },
  ],

  highYield: [
    'The **duodenum** (C-shaped, mostly retroperitoneal) runs from the pylorus to the **duodenojejunal flexure at L2**, held by the **suspensory muscle of the duodenum (ligament of Treitz)** — the landmark dividing upper from lower GI bleeding. The **major duodenal papilla (ampulla of Vater)** opens in the 2nd (descending) part.',
    '**Jejunum vs ileum** (both suspended by the mesentery): the **jejunum** has **thicker walls, taller/denser plicae circulares (valvulae conniventes), fewer arterial arcades with long vasa recta**, and lies in the upper-left; the **ileum** has **thinner walls, fewer folds, more arcades with short vasa recta, Peyer patches**, and lies in the lower-right (ends at the ileocecal junction).',
    'The **large intestine** is identified by 3 features: **teniae coli** (3 longitudinal muscle bands), **haustra** (sacculations), and **omental appendices** (fatty tags). It absorbs water; parts = cecum/appendix → ascending → transverse → descending → sigmoid → rectum → anal canal.',
    'The **appendix** arises from the posteromedial cecum; the **base is at McBurney\'s point** (1/3 from the ASIS to the umbilicus). The teniae coli converge on the appendiceal base (a surgical guide). Appendicitis → periumbilical then RLQ pain.',
    'The **anal canal** has a **dentate (pectinate) line**: **above it** = visceral (hindgut, autonomic, insensate, portal drainage, columnar epithelium → adenocarcinoma); **below it** = somatic (pudendal nerve, painful, systemic drainage, squamous epithelium → SCC).',
  ],

  mechanism: {
    title: 'Distinguish jejunum/ileum and small from large gut',
    steps: [
      { id: 's1', label: 'Duodenojejunal flexure (Treitz) at L2 = upper/lower GI divide', emphasis: 'key' },
      { id: 's2', label: 'Jejunum: thick wall, tall folds, long vasa recta' },
      { id: 's3', label: 'Large gut: teniae coli, haustra, omental appendices' },
      { id: 's4', label: 'Dentate line: above visceral/insensate, below somatic/painful', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Pain starting periumbilical then localizing to McBurney\'s point (RLQ)', mechanism: 'Appendicitis (midgut referral → local peritoneal irritation)', significance: 'key' },
    { sign: 'Bright-red bleeding + pain from a lesion below the dentate line', mechanism: 'Somatic (pudendal) innervation of the lower anal canal', significance: 'key' },
    { sign: 'Tall dense plicae circulares on imaging of the upper small bowel', mechanism: 'Jejunum', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'McBurney-point tenderness + Rovsing/psoas signs', meaning: 'Appendicitis' },
    { clue: 'Follow teniae coli to the appendiceal base', meaning: 'Locates the appendix at surgery' },
  ],

  treatment: [
    { logic: 'Appendicitis: appendicectomy (or antibiotics)', detail: 'Prevent perforation/peritonitis.' },
    { logic: 'Sigmoid volvulus: decompression/detorsion', detail: 'Emergency — risk of bowel necrosis.' },
  ],

  mnemonics: [
    { hook: 'Large bowel = Teniae coli + Haustra + omental appendices', expansion: ['Jejunum: tall folds, long vasa recta'] },
    { hook: 'Above dentate line = insensate (visceral); below = painful (somatic)', expansion: ['Portal vs systemic drainage'] },
  ],

  traps: [
    {
      questionCategory: 'Sensation above vs below the dentate line',
      wrongInstinct: 'Internal hemorrhoids (above the dentate line) are very painful',
      rightAnswer: 'ABOVE the dentate line is visceral/INSENSATE (internal hemorrhoids are typically painless); BELOW it is somatic (pudendal) and PAINFUL (external hemorrhoids/fissures hurt)',
      why: 'The dentate line marks the switch from visceral (autonomic, insensate) to somatic (pain-sensitive) innervation.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which set of features is characteristic of the LARGE intestine and distinguishes it from the small intestine?',
      options: [
        { id: 'a', text: 'Plicae circulares, villi, and Peyer patches' },
        { id: 'b', text: 'Teniae coli, haustra, and omental appendices' },
        { id: 'c', text: 'Long vasa recta and few arcades' },
        { id: 'd', text: 'A suspensory muscle at L2' },
      ],
      answerId: 'b',
      explanation: 'The large intestine is recognized by teniae coli (three longitudinal muscle bands), haustra (sacculations), and omental appendices (fatty tags); the small intestine has plicae circulares, villi, and (in the ileum) Peyer patches.',
      tests: 'exam',
    },
  ],
};

export default smallLargeIntestine;
