import type { Lecture } from '../../lib/types';

export const mosaicismChimerism: Lecture = {
  id: 'mosaicism-chimerism',
  title: 'Mosaicism & Chimerism',
  system: 'molecular',
  source: 'L7 — Chromosome Aberrations',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Genetics' },
    { kind: 'lecture', label: 'HGD L7' },
    { kind: 'mechanism', label: 'One zygote vs multiple zygotes' },
    { kind: 'exam', label: 'Postzygotic error' },
  ],
  highYield: [
    '**Mosaicism** is two or more genetically different cell lines derived from **one zygote**. It commonly follows postzygotic mitotic nondisjunction, anaphase lag, or a structural chromosome error.',
    'The earlier a mosaic error occurs, the more tissues it can affect. A later error may be tissue limited; **confined placental mosaicism** can make placental screening differ from the fetus.',
    'Mosaic notation lists cell lines and counted cells, e.g. **45,X[5]/46,XX[10]** or 47,XY,+21/46,XY.',
    '**Chimerism** is two or more genetically distinct cell lines derived from **more than one zygote**. Tetragametic chimerism can follow fusion of two embryos; blood chimerism can follow cell exchange between dizygotic twins.',
    'The discriminator is origin: mosaic lines share one fertilization event; chimeric lines originate from separate fertilization events.',
  ],
  mechanism: {
    title: 'Different routes to more than one genotype',
    steps: [
      { id: 's1', label: 'One zygote + postzygotic error -> mosaicism', emphasis: 'key' },
      { id: 's2', label: 'Distribution depends on timing and lineage' },
      { id: 's3', label: 'Two zygotes fuse or exchange cells -> chimerism' },
      { id: 's4', label: 'Different tissues may return different genetic results' },
    ],
  },
  examFindings: [
    { sign: '45,X/46,XX cell lines in one person', mechanism: 'Mosaic Turner pattern from postzygotic error', significance: 'key' },
    { sign: '46,XX/46,XY tissues after fusion of two embryos', mechanism: 'Tetragametic chimerism', significance: 'key' },
    { sign: 'Abnormal chorionic-villus result but normal amniocytes', mechanism: 'Confined placental mosaicism', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Karyotype/FISH on multiple tissues', meaning: 'Detect tissue-limited mosaicism or chimerism' },
    { clue: 'CVS followed by amniocentesis when discordant', meaning: 'Separate placental from fetal genotype' },
    { clue: 'STR/genotype analysis', meaning: 'Determine whether cell lines share one or multiple zygotic origins' },
  ],
  treatment: [
    { logic: 'Sample the clinically relevant tissue', detail: 'A normal blood result does not exclude mosaicism elsewhere.' },
    { logic: 'Confirm placental screening discordance in fetal tissue', detail: 'CVS samples placenta and may not represent the fetus.' },
  ],
  mnemonics: [
    { hook: 'Mosaic = one maker; chimera = combined conceptions', expansion: ['One zygote versus more than one'] },
    { hook: 'Earlier error, wider mosaic', expansion: ['Developmental timing predicts distribution'] },
  ],
  traps: [
    {
      questionCategory: 'Mosaicism versus chimerism',
      wrongInstinct: 'Any person with two genotypes is a mosaic',
      rightAnswer: 'Mosaicism arises from one zygote; chimerism combines cell lines from more than one zygote',
      why: 'The number of cell lines is shared; their developmental origin distinguishes the terms.',
    },
  ],
  quiz: [
    {
      id: 'q1',
      stem: 'Two genetically distinct cell lines arise after mitotic nondisjunction in a single early embryo. This is:',
      options: [
        { id: 'a', text: 'Mosaicism' },
        { id: 'b', text: 'Chimerism' },
        { id: 'c', text: 'Triploidy' },
        { id: 'd', text: 'A balanced translocation' },
      ],
      answerId: 'a',
      explanation: 'Both cell lines descend from one zygote, so the condition is mosaicism.',
      tests: 'mechanism',
    },
  ],
};

export default mosaicismChimerism;
