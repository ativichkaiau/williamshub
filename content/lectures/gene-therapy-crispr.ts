import type { Lecture } from '../../lib/types';

export const geneTherapyCrispr: Lecture = {
  id: 'gene-therapy-crispr',
  title: 'Gene Therapy & CRISPR',
  system: 'molecular',
  source: 'L10 — Molecular Techniques',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Molecular' },
    { kind: 'lecture', label: 'L10 Molecular Techniques' },
    { kind: 'disease', label: 'Gene editing' },
    { kind: 'mechanism', label: 'CRISPR-Cas9' },
    { kind: 'exam', label: 'Germline vs somatic' },
  ],

  highYield: [
    '**Gene therapy** vectors: **non-integrating** (adenovirus — transient, needs repeat dosing, lower cancer risk) vs **integrating** (lentivirus — permanent but random insertion → **insertional mutagenesis/cancer risk**).',
    '**Somatic** gene therapy (patient’s body cells, not inherited — e.g. bone marrow for blood diseases) vs **germline** (heritable, transmitted to offspring) — germline raises major **ethical concerns (“designer babies”)**.',
    '**CRISPR-Cas9**: a **guide RNA (sgRNA)** directs the **Cas9 nuclease** to cut DNA at a target that must sit next to a **PAM** sequence. The double-strand break is repaired by **NHEJ (→ gene knock-out, error-prone)** or **homology-directed repair (HDR → precise knock-in, but inefficient)**.',
    'Precision upgrades that avoid double-strand breaks: **base editing** (deaminase + Cas9-nickase converts one base pair — **C-G↔T-A** or **A-T↔G-C**) and **prime editing** (Cas9-nickase + reverse transcriptase + **pegRNA**).',
    '**CRISPR diagnostics** (Cas12/13/14) use **collateral cleavage of a fluorescent reporter** for detection (e.g. **DETECTR** for SARS-CoV-2); **isothermal amplification (LAMP)** amplifies nucleic acid at one temperature (no thermocycler).',
  ],

  mechanism: {
    title: 'Guide a nuclease to a target, then repair or edit',
    steps: [
      { id: 's1', label: 'sgRNA targets Cas9 to a site next to a PAM', emphasis: 'key' },
      { id: 's2', label: 'Cas9 cuts → double-strand break' },
      { id: 's3', label: 'NHEJ (knock-out) or HDR (knock-in) repairs it' },
      { id: 's4', label: 'Base/prime editing edit without a DSB', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Gene knock-out from error-prone end-joining', mechanism: 'NHEJ after Cas9 cut', significance: 'key' },
    { sign: 'Precise single-base correction without a double-strand break', mechanism: 'Base editing (deaminase + nickase)', significance: 'key' },
    { sign: 'Fluorescent signal on collateral reporter cleavage', mechanism: 'CRISPR (Cas12/13) diagnostics', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Integrating vs non-integrating vector', meaning: 'Permanence & insertional-mutagenesis risk' },
    { clue: 'Somatic vs germline target', meaning: 'Heritability & ethics' },
    { clue: 'Repair pathway used (NHEJ vs HDR)', meaning: 'Knock-out vs precise knock-in' },
  ],

  treatment: [
    { logic: 'CRISPR-based therapies for genetic disease', detail: 'Ex vivo (e.g. blood cells) is more tractable.' },
    { logic: 'Base/prime editing for precise correction', detail: 'Avoids harmful double-strand breaks.' },
  ],

  mnemonics: [
    { hook: 'NHEJ = kNock-out (error-prone); HDR = precise knock-in', expansion: ['Two DSB repair fates'] },
    { hook: 'Somatic = you only; Germline = your descendants (ethics)', expansion: ['Heritability difference'] },
  ],

  traps: [
    {
      questionCategory: 'Somatic vs germline gene therapy',
      wrongInstinct: 'All gene therapy changes are passed on to the patient’s children',
      rightAnswer: 'Only germline editing is heritable; somatic gene therapy alters body cells and is NOT transmitted to offspring',
      why: 'Somatic edits affect only the treated tissues of one individual, whereas germline edits enter the reproductive lineage and are inherited — the source of the major ethical debate.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'In CRISPR-Cas9 editing, after Cas9 creates a double-strand break, which repair pathway is typically exploited to create a gene KNOCK-OUT?',
      options: [
        { id: 'a', text: 'Homology-directed repair (HDR)' },
        { id: 'b', text: 'Non-homologous end joining (NHEJ)' },
        { id: 'c', text: 'Base-excision repair' },
        { id: 'd', text: 'Mismatch repair' },
      ],
      answerId: 'b',
      explanation: 'Error-prone non-homologous end joining introduces small insertions/deletions that disrupt the gene (knock-out); precise homology-directed repair is used for knock-in but is less efficient.',
      tests: 'exam',
    },
  ],
};

export default geneTherapyCrispr;
