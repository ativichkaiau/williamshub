import type { Lecture } from '../../lib/types';
import { REPLICATION_FORK, APOPTOSIS_NECROSIS } from '../../lib/figures';

export const ghpCellCycleMitosisApoptosis: Lecture = {
  id: 'ghp-cell-cycle-mitosis-apoptosis',
  title: 'Cell Cycle, Mitosis & Apoptosis',
  system: 'molecular',
  source: 'Ch 3 — Genetic Control of Protein Synthesis & Cell Reproduction',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Molecular' },
    { kind: 'lecture', label: 'Ch 3 Genetic Control' },
    { kind: 'mechanism', label: 'Checkpoint control' },
    { kind: 'mechanism', label: 'Apoptosis vs necrosis' },
    { kind: 'exam', label: 'Cancer as lost control' },
  ],

  highYield: [
    '**The cycle is interphase (G1 → S → G2) plus M, and interphase is almost all of it** — in a cell dividing every 24 h, **M lasts only about 30 minutes**. **G1** is growth and the commitment decision; **S** is DNA replication, after which every chromosome is **two identical sister chromatids** (DNA content doubles, chromosome count does not); **G2** is the pre-flight check. Cells that stop dividing leave G1 into **G0** — **permanent** for neurons and cardiac myocytes, **stable/reversible** for hepatocytes, while **labile** tissues (gut crypt, marrow, skin basal layer, hair follicle) never leave the cycle.',
    '**Cyclins and cyclin-dependent kinases drive the cycle; checkpoints stop it.** The **G1/S restriction point** is the decisive one: **Rb holds E2F hostage** until phosphorylated, and **p53 — "the guardian of the genome" — arrests the cell here to repair DNA damage or, failing that, orders apoptosis**. **G2/M** verifies replication is complete and undamaged; the **M-phase spindle checkpoint** waits until every kinetochore is attached before anaphase begins.',
    '**Replication is semiconservative and bidirectional, and polymerase can only build 5′→3′** — hence one **leading strand made continuously** and one **lagging strand made backwards in Okazaki fragments** (primase lays RNA primers, ligase seals the nicks). Polymerase **3′→5′ proofreading** plus **mismatch repair** drop the error rate to roughly **1 in 10⁹** bases. Lose mismatch repair and you get **microsatellite instability** and hereditary colorectal cancer.',
    '**Mitosis in four acts — prophase, metaphase, anaphase, telophase.** Prophase: chromatin condenses, centrosomes move apart, the spindle forms and the nuclear envelope breaks down. **Metaphase: chromosomes line up on the equatorial plate — maximal condensation, which is why karyotypes are made from metaphase-arrested cells.** **Anaphase: centromeres split and sister chromatids are dragged to opposite poles** — the only moment chromosome number transiently doubles. Telophase and cytokinesis then give **two genetically identical diploid daughters** (contrast **meiosis: two divisions, four non-identical haploid gametes, with crossing over**).',
    '**Apoptosis is a tidy, ATP-requiring suicide; necrosis is a messy accident.** Apoptosis: the **cell shrinks, chromatin condenses, the membrane stays intact**, and **apoptotic bodies are phagocytosed with NO inflammation**. It is executed by **caspases**, triggered either **intrinsically** (mitochondrial — DNA damage or growth-factor withdrawal shifts the **Bcl-2 : Bax** balance, cytochrome c leaks out) or **extrinsically** (**Fas/TNF death receptors**). Necrosis: ischaemia or toxin → ATP fails → **the cell swells, the membrane ruptures**, contents spill and **inflammation follows**. Apoptosis is also constructive — it sculpts interdigital webs and deletes self-reactive lymphocytes.',
    '**Cancer is the cell cycle without a brake — proliferation gained and death lost.** **Oncogenes** (RAS, MYC, HER2) are **gain-of-function and dominant — one mutated allele suffices**; **tumour suppressors** (p53, Rb, APC) are **loss-of-function and need both alleles hit (Knudson two-hit)**. **BCL-2 overexpression in follicular lymphoma blocks apoptosis** — cells accumulate because they will not die, not because they divide fast. Add lost contact inhibition and reactivated **telomerase** and the cell becomes immortal.',
  ],

  mechanism: {
    title: 'Grow, copy, check, divide — or stop and die',
    steps: [
      { id: 's1', label: 'G1 growth → restriction point: commit or exit to G0' },
      { id: 's2', label: 'S phase — semiconservative replication (leading + Okazaki)', emphasis: 'key' },
      { id: 's3', label: 'G2 checkpoint — replication complete and damage repaired?' },
      { id: 's4', label: 'M phase — condense, align, separate, divide', emphasis: 'key' },
      { id: 's5', label: 'Damage irreparable → p53 → caspases → apoptosis', emphasis: 'key' },
      { id: 's6', label: 'Checkpoints lost → unchecked division = cancer', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Chromosomes aligned in a single plane across the cell equator', mechanism: 'Metaphase — spindle checkpoint satisfied, maximal condensation', significance: 'key' },
    { sign: 'Sister chromatids being pulled to opposite poles', mechanism: 'Anaphase — centromeres have split', significance: 'key' },
    { sign: 'Shrunken cells with condensed nuclei, intact membranes and no inflammatory infiltrate', mechanism: 'Apoptosis — caspase-driven, phagocytosed before contents leak', significance: 'key' },
    { sign: 'Swollen cells with ruptured membranes surrounded by neutrophils', mechanism: 'Necrosis — ATP failure, membrane injury, released contents provoke inflammation', significance: 'key' },
    { sign: 'Chemotherapy causes marrow suppression, mucositis and alopecia', mechanism: 'Cycle-active drugs hit the fastest-cycling normal (labile) tissues too', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Phase in which DNA content per cell doubles', meaning: 'S phase — chromosome number is unchanged until anaphase' },
    { clue: 'Cells arrested with colchicine before karyotyping', meaning: 'Metaphase arrest — spindle poison holds chromosomes at maximal condensation' },
    { clue: 'Protein that arrests cells at G1/S after DNA damage', meaning: 'p53 — repair, or apoptosis if repair fails' },
    { clue: 'Cell death with membrane blebbing but no surrounding inflammation', meaning: 'Apoptosis (necrosis always inflames)' },
    { clue: 'A tissue that cannot regenerate after infarction', meaning: 'Permanent G0 tissue — neurons, cardiac myocytes, skeletal muscle' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Every proliferative disease and every cytotoxic drug lives here: chemotherapy and radiotherapy work because tumours cycle, and their side effects appear in the labile tissues that also cycle. The DNA being copied is the same template read in [[ghp-transcription-genetic-code]], and the burst of protein synthesis a dividing cell needs runs through [[ghp-translation-ribosomes]].' },
    { logic: 'Death is regulated, not merely suffered', detail: 'Apoptotic bodies are cleared by phagocytosis and digested along the pathway in [[ghp-endocytosis-lysosomal-digestion]], which is why apoptosis provokes no inflammation while necrosis does. Too little apoptosis gives cancer and autoimmunity; too much gives neurodegeneration and atrophy — the balance itself is a homeostatic set point, in the sense developed in [[ghp-homeostasis-internal-environment]].' },
  ],

  mnemonics: [
    { hook: 'IPMAT — Interphase, Prophase, Metaphase, Anaphase, Telophase', expansion: ['Metaphase = Middle (equatorial plate)', 'Anaphase = Apart (chromatids separate)'] },
    { hook: 'Apoptosis is tidy, necrosis is messy', expansion: ['Tidy: shrink, intact membrane, ATP-requiring, no inflammation', 'Messy: swell, rupture, ATP-depleted, inflammation'] },
  ],

  traps: [
    {
      questionCategory: 'DNA content versus chromosome number',
      wrongInstinct: 'A cell in G2 has 92 chromosomes because its DNA has doubled',
      rightAnswer: 'It has 46 chromosomes, each with two sister chromatids (4n DNA); the count only reaches 92 transiently in anaphase, when the centromeres split',
      why: 'Chromosome number is counted by centromeres, not by DNA mass — S phase doubles the DNA, anaphase doubles the count.',
    },
    {
      questionCategory: 'Why a tumour is growing',
      wrongInstinct: 'A rapidly enlarging lymphoma must be dividing unusually fast',
      rightAnswer: 'In follicular lymphoma the cells accumulate because BCL-2 overexpression blocks apoptosis — failure of death, not excess division',
      why: 'Tumour mass = proliferation minus cell loss; the exam frequently tests the denominator.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A somatic human cell has completed S phase and sits in G2. How many chromosomes and chromatids does it contain?',
      options: [
        { id: 'a', text: '92 chromosomes, 92 chromatids' },
        { id: 'b', text: '46 chromosomes, 92 chromatids' },
        { id: 'c', text: '46 chromosomes, 46 chromatids' },
        { id: 'd', text: '23 chromosomes, 46 chromatids' },
      ],
      answerId: 'b',
      explanation: 'S phase doubles DNA content, so each of the 46 chromosomes now consists of two sister chromatids joined at one centromere — 46 chromosomes, 92 chromatids. The count becomes 92 chromosomes only in anaphase, when centromeres split.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Liver cells in a region of ischaemic infarction show swelling, membrane rupture and a dense neutrophil infiltrate. This is:',
      options: [
        { id: 'a', text: 'Apoptosis, because cell death is programmed' },
        { id: 'b', text: 'Necrosis, because ATP depletion caused membrane failure and inflammation' },
        { id: 'c', text: 'Autophagy' },
        { id: 'd', text: 'Mitotic catastrophe' },
      ],
      answerId: 'b',
      explanation: 'Swelling, rupture and inflammation are the signature of necrosis after ATP failure. Apoptosis requires ATP, keeps membranes intact, shrinks the cell and provokes no inflammatory infiltrate.',
      tests: 'exam',
    },
    {
      id: 'q3',
      stem: 'A tumour is found to have inactivating mutations in both copies of p53. The most direct consequence is:',
      options: [
        { id: 'a', text: 'Cells cannot enter S phase' },
        { id: 'b', text: 'Damaged cells pass the G1/S checkpoint without repair or apoptosis' },
        { id: 'c', text: 'The spindle fails to form' },
        { id: 'd', text: 'DNA polymerase loses its proofreading function' },
      ],
      answerId: 'b',
      explanation: 'p53 arrests the cell at G1/S so damage can be repaired, and triggers apoptosis if it cannot be. Losing both alleles (a tumour suppressor needs two hits) lets genetically damaged cells replicate, accumulating mutations. Spindle assembly and polymerase proofreading are separate machinery.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Replication fork', svg: REPLICATION_FORK, caption: 'S phase: helicase opens the fork; the leading strand is continuous, the lagging strand is built as Okazaki fragments that ligase seals.' },
    { title: 'Apoptosis vs necrosis', svg: APOPTOSIS_NECROSIS, caption: 'Apoptosis: programmed, ATP-requiring, cell shrinks, membrane intact, no inflammation. Necrosis: injury, swelling, rupture, inflammation.' },
  ],
};

export default ghpCellCycleMitosisApoptosis;
