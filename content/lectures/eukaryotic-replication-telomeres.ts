import type { Lecture } from '../../lib/types';

export const eukaryoticReplicationTelomeres: Lecture = {
  id: 'eukaryotic-replication-telomeres',
  title: 'Eukaryotic Replication & Telomeres',
  system: 'molecular',
  source: 'L5 — DNA Replication',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Molecular' },
    { kind: 'lecture', label: 'L5 DNA Replication' },
    { kind: 'disease', label: 'Telomeres / cell cycle' },
    { kind: 'mechanism', label: 'End-replication problem' },
    { kind: 'exam', label: 'Telomerase' },
  ],

  highYield: [
    'Eukaryotic chromosomes (46 linear) use **many origins**, are replicated **once per cell cycle** (pre-replication complex/ORC licensing), and are slower (~40 nt/s vs 1000 in E. coli).',
    'The **cell cycle** (G1 → S → G2 → M) is driven by **cyclins + cyclin-dependent kinases (CDKs)**; **DNA replication occurs in S phase**.',
    '**End-replication problem**: because DNA polymerase needs a primer and works 5′→3′, the **lagging-strand end cannot be fully copied** → **telomeres shorten each division** → replicative senescence.',
    '**Telomerase** solves this — a **reverse transcriptase (TERT) carrying its own RNA template (TR)** that adds repetitive telomeric sequence to chromosome ends.',
    'Telomerase is **active in germline, embryonic/stem cells**, largely **absent in normal somatic cells** (→ aging/senescence), and **reactivated in most cancers** (a hallmark of immortalization).',
  ],

  mechanism: {
    title: 'Linear-DNA ends erode unless telomerase rebuilds them',
    steps: [
      { id: 's1', label: 'Many origins fire once per cycle (S phase)', emphasis: 'key' },
      { id: 's2', label: 'Lagging-strand terminus cannot be primed/filled' },
      { id: 's3', label: 'Telomeres shorten each division → senescence' },
      { id: 's4', label: 'Telomerase (TERT + RNA) extends ends; reactivated in cancer', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Progressive telomere shortening in somatic cells', mechanism: 'End-replication problem without telomerase', significance: 'key' },
    { sign: 'Telomerase reactivation in tumor cells', mechanism: 'Immortalization (cancer hallmark)', significance: 'key' },
    { sign: 'Once-per-cycle replication', mechanism: 'ORC/pre-RC licensing control', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Telomere length / telomerase activity', meaning: 'Senescence vs immortalization' },
    { clue: 'Cell-cycle phase (S = replication)', meaning: 'When DNA is copied' },
    { clue: 'Prokaryotic vs eukaryotic features', meaning: 'Circular single origin vs linear multiple origins' },
  ],

  treatment: [
    { logic: 'Telomerase is an anticancer target', detail: 'Its reactivation supports tumor immortality.' },
    { logic: 'Cell-cycle checkpoints guard genome integrity', detail: 'Loss underlies cancer.' },
  ],

  mnemonics: [
    { hook: 'Telomerase = reverse transcriptase with a built-in RNA template', expansion: ['Adds telomere repeats; on in germ/stem/cancer cells'] },
    { hook: 'DNA replicated in S phase; once per cycle (licensing)', expansion: ['Cyclin/CDK control'] },
  ],

  traps: [
    {
      questionCategory: 'Why telomeres shorten',
      wrongInstinct: 'Telomeres shorten because nucleases actively chew the chromosome ends each division',
      rightAnswer: 'Shortening is due to the end-replication problem — the lagging-strand terminus cannot be primed/filled after primer removal, not active degradation',
      why: 'DNA polymerase requires a 5′ primer and synthesizes only 5′→3′, so once the terminal RNA primer is removed there is no upstream 3′ end to extend, leaving the very end uncopied.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'How do cancer cells overcome the progressive telomere shortening that limits the replicative lifespan of normal somatic cells?',
      options: [
        { id: 'a', text: 'They stop dividing' },
        { id: 'b', text: 'They reactivate telomerase to extend telomeres' },
        { id: 'c', text: 'They switch to circular chromosomes' },
        { id: 'd', text: 'They lose all origins of replication' },
      ],
      answerId: 'b',
      explanation: 'Most cancers reactivate telomerase (TERT + RNA template) to rebuild telomeres, escaping replicative senescence — a hallmark of cellular immortalization.',
      tests: 'exam',
    },
  ],
};

export default eukaryoticReplicationTelomeres;
