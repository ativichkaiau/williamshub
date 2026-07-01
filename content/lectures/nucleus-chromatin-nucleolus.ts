import type { Lecture } from '../../lib/types';
import { NUCLEUS_CHROMATIN } from '../../lib/figures';

export const nucleusChromatinNucleolus: Lecture = {
  id: 'nucleus-chromatin-nucleolus',
  title: 'The Nucleus: Envelope, Chromatin & Nucleolus',
  system: 'histology',
  source: 'L1 — Cytology',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Histology' },
    { kind: 'lecture', label: 'L1 Cytology' },
    { kind: 'mechanism', label: 'Chromatin activity' },
    { kind: 'exam', label: 'Eu- vs heterochromatin' },
  ],

  highYield: [
    '**Nuclear envelope = double membrane** continuous with the RER, perforated by **nuclear pore complexes (nucleoporins)** that selectively traffic mRNA/proteins between nucleus and cytoplasm. The inner face is supported by the **nuclear lamina** (lamin intermediate filaments).',
    '**Chromatin activity is visible on the slide.** **Euchromatin** = loosely packed, pale, **transcriptionally ACTIVE**; **heterochromatin** = condensed, dark/basophilic, **INACTIVE**. An "open," pale, vesicular nucleus with a prominent nucleolus (neuron, hepatocyte) = a busy, protein-synthesising cell; a small, dense, hyperchromatic nucleus (lymphocyte) = quiescent.',
    '**Nucleolus = ribosome factory** — a dense, non-membranous, basophilic region where **rRNA is transcribed (by RNA Pol I) and ribosomal subunits are assembled**. Large/multiple nucleoli signal high protein synthesis (and are a feature of many cancer cells).',
    '**The Barr body** is a condensed, inactivated X chromosome (heterochromatin) seen at the nuclear margin, or as a **"drumstick" appendage on neutrophils** in females — Barr bodies = (number of X chromosomes − 1).',
    '**Nucleus number and shape carry information.** Some cells are **multinucleate** (skeletal muscle from myoblast fusion; osteoclasts; syncytiotrophoblast) or **binucleate** (hepatocytes, cardiac); lobed nuclei = neutrophils. **Loss of nuclear uniformity/polarity (pleomorphism, hyperchromasia)** signals dysplasia/malignancy.',
  ],

  mechanism: {
    title: 'Read the nucleus = read the cell\'s activity',
    steps: [
      { id: 's1', label: 'Envelope + pores control nucleo-cytoplasmic traffic' },
      { id: 's2', label: 'Euchromatin (pale) = active; heterochromatin (dark) = inactive', emphasis: 'key' },
      { id: 's3', label: 'Prominent nucleolus = high rRNA/ribosome output', emphasis: 'key' },
      { id: 's4', label: 'Barr body = inactive X (X count − 1)' },
      { id: 's5', label: 'Pleomorphic hyperchromatic nuclei → dysplasia/malignancy', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Pale vesicular nucleus + big nucleolus', mechanism: 'Euchromatin dominant → active protein synthesis (neuron, hepatocyte)', significance: 'key' },
    { sign: 'Small dense hyperchromatic nucleus', mechanism: 'Heterochromatin dominant → inactive (lymphocyte)', significance: 'key' },
    { sign: 'Drumstick on a neutrophil', mechanism: 'Barr body (inactive X) in females', significance: 'supportive' },
    { sign: 'Multinucleate cell', mechanism: 'Fusion (skeletal muscle, osteoclast) or endomitosis', significance: 'supportive' },
    { sign: 'Enlarged pleomorphic nuclei, high N:C ratio', mechanism: 'Dysplasia / malignancy', significance: 'key' },
  ],

  investigations: [
    { clue: 'A cell with a large pale nucleus and prominent nucleolus', meaning: 'Metabolically active, high-synthesis cell' },
    { clue: 'Counting Barr bodies to infer karyotype', meaning: 'Barr bodies = X chromosomes − 1' },
    { clue: 'Basophilic condensed clumps at the nuclear rim', meaning: 'Heterochromatin (inactive DNA)' },
    { clue: 'Irregular, dark, crowded nuclei losing polarity', meaning: 'Dysplasia — investigate for malignancy' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Nuclear features (chromatin pattern, nucleolar prominence, pleomorphism, N:C ratio) are the backbone of cytological cancer diagnosis — the histology→pathology bridge in [[subcellular-pathology-alterations]]. Barr-body/X-inactivation logic links to genetics.' },
  ],

  mnemonics: [
    { hook: 'EUchromatin = "true/open" = active; HETEROchromatin = "packed" = silent', expansion: ['Pale = working, dark = resting'] },
    { hook: 'Nucleolus = "nucle-OH-lots-of-ribosomes"', expansion: ['rRNA synthesis + subunit assembly'] },
  ],

  traps: [
    {
      questionCategory: 'Which chromatin is active?',
      wrongInstinct: 'The dark, dense heterochromatin must be the busy, active part',
      rightAnswer: 'EUchromatin (pale, dispersed) is transcriptionally ACTIVE; heterochromatin (dark, condensed) is inactive',
      why: 'Condensed = packed away/silenced. Active genes need open, accessible euchromatin — which looks pale on H&E.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A hepatocyte shows a large, pale, vesicular nucleus with a prominent nucleolus. This indicates:',
      options: [
        { id: 'a', text: 'A quiescent, inactive cell' },
        { id: 'b', text: 'An actively transcribing, protein-synthesising cell (euchromatin + high rRNA output)' },
        { id: 'c', text: 'An apoptotic cell' },
        { id: 'd', text: 'A cell in mitosis' },
      ],
      answerId: 'b',
      explanation: 'Open euchromatin (pale) plus a prominent nucleolus (rRNA/ribosome production) marks a metabolically active, synthesising cell. Dense hyperchromatic nuclei indicate quiescence.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'How many Barr bodies are present in a somatic cell with a 47,XXY karyotype?',
      options: [
        { id: 'a', text: '0' },
        { id: 'b', text: '1' },
        { id: 'c', text: '2' },
        { id: 'd', text: '3' },
      ],
      answerId: 'b',
      explanation: 'Barr bodies = (number of X chromosomes − 1). With two X chromosomes, one is inactivated → 1 Barr body.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Nucleus: chromatin & nucleolus', svg: NUCLEUS_CHROMATIN, caption: 'Envelope + pores; euchromatin (pale, active) vs heterochromatin (dark, inactive); nucleolus = rRNA/ribosome assembly; Barr body = inactive X.' },
  ],
};

export default nucleusChromatinNucleolus;
