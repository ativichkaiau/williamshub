import type { Lecture } from '../../lib/types';
import { URIC_ACID_PATHWAY } from '../../lib/figures';

export const nucleotideDegradationGout: Lecture = {
  id: 'nucleotide-degradation-gout',
  title: 'Nucleotide Degradation & Gout',
  system: 'molecular',
  source: 'L4 — Nucleotide Metabolism',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Molecular' },
    { kind: 'lecture', label: 'L4 Nucleotide Metabolism' },
    { kind: 'disease', label: 'Gout' },
    { kind: 'mechanism', label: 'Purine → uric acid' },
    { kind: 'exam', label: 'Xanthine oxidase' },
  ],

  highYield: [
    '**Purines degrade to uric acid** (poorly water-soluble): adenosine → (**adenosine deaminase, ADA**) → inosine → hypoxanthine → (**xanthine oxidase**) → xanthine → (**xanthine oxidase**) → **uric acid**. Pyrimidines degrade to soluble products (β-alanine, β-aminoisobutyrate).',
    '**Gout** = hyperuricemia (urate > ~7 mg/dL men) with **monosodium urate crystal deposition** → acute arthritis (classically first MTP joint).',
    '**Underexcretion of urate is the most common cause** (e.g. lactic acidosis, diuretics reduce excretion); **overproduction** is less common (HGPRT deficiency, PRPP synthetase overactivity, high cell turnover).',
    'Acute gout: **NSAIDs, colchicine, steroids**. Chronic: **allopurinol/febuxostat inhibit xanthine oxidase** (↓ urate; hypoxanthine/xanthine are more soluble); **uricosurics (probenecid)** increase renal excretion.',
    '**Lesch-Nyhan syndrome** = **X-linked HGPRT deficiency** → no purine salvage → ↑ PRPP, ↓ IMP/GMP → de novo synthesis ramps up → **hyperuricemia, gouty arthritis, kidney stones, and self-mutilation/neuro signs**.',
  ],

  mechanism: {
    title: 'Purine catabolism to urate — and where it goes wrong',
    steps: [
      { id: 's1', label: 'Purines → hypoxanthine/xanthine' },
      { id: 's2', label: 'Xanthine oxidase → uric acid', emphasis: 'key' },
      { id: 's3', label: 'Overproduction or underexcretion → hyperuricemia' },
      { id: 's4', label: 'Urate crystals deposit → gout', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Acute monoarthritis of the first MTP (podagra)', mechanism: 'Monosodium urate crystal deposition', significance: 'key' },
    { sign: 'Negatively birefringent needle-shaped crystals', mechanism: 'Urate in joint fluid', significance: 'key' },
    { sign: 'Self-mutilation + hyperuricemia in a boy', mechanism: 'Lesch-Nyhan (HGPRT deficiency)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Serum uric acid', meaning: 'Hyperuricemia (though not diagnostic alone)' },
    { clue: 'Joint aspiration + polarized microscopy', meaning: 'Confirms urate crystals (vs pseudogout)' },
    { clue: 'HGPRT activity', meaning: 'Lesch-Nyhan' },
  ],

  treatment: [
    { logic: 'Acute: NSAIDs / colchicine / steroids', detail: 'Anti-inflammatory, not urate-lowering acutely.' },
    { logic: 'Chronic: allopurinol/febuxostat (xanthine oxidase inhibitors)', detail: 'Reduce urate production.' },
    { logic: 'Uricosurics (probenecid) for underexcretors', detail: 'Increase renal urate excretion.' },
  ],

  mnemonics: [
    { hook: 'Allopurinol blocks xanthine oxidase → ↓ uric acid', expansion: ['Hypoxanthine/xanthine are more soluble'] },
    { hook: 'Lesch-Nyhan = HGPRT deficiency (X-linked): urate + self-mutilation', expansion: ['No salvage → ↑ de novo → ↑ urate'] },
  ],

  traps: [
    {
      questionCategory: 'Commonest cause of hyperuricemia',
      wrongInstinct: 'Most gout is caused by overproduction of uric acid',
      rightAnswer: 'Underexcretion of urate (renal) is the most common cause of hyperuricemia; overproduction (e.g. HGPRT deficiency) is less common',
      why: 'Although enzyme defects overproduce urate in a minority, the majority of hyperuricemia results from reduced renal excretion — relevant to choosing allopurinol vs a uricosuric.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Allopurinol lowers serum uric acid in gout by inhibiting which enzyme?',
      options: [
        { id: 'a', text: 'HGPRT' },
        { id: 'b', text: 'Xanthine oxidase' },
        { id: 'c', text: 'Adenosine deaminase' },
        { id: 'd', text: 'PRPP synthetase' },
      ],
      answerId: 'b',
      explanation: 'Allopurinol (and febuxostat) inhibit xanthine oxidase, reducing conversion of hypoxanthine/xanthine to uric acid; the accumulated precursors are more soluble.',
      tests: 'treatment',
    },
  ],

  figures: [
    { title: 'Purine degradation to uric acid', svg: URIC_ACID_PATHWAY, caption: 'Adenosine →(ADA)→ hypoxanthine →(xanthine oxidase)→ xanthine →(XO)→ uric acid; allopurinol blocks xanthine oxidase.' },
  ],
};

export default nucleotideDegradationGout;
