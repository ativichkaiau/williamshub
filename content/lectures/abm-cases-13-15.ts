import { abmLecture } from './abm-shared';

const case13 = 'Case 13 — BRCA1-Mutant Triple-Negative Breast Cancer';
const case14 = 'Case 14 — EGFR-Mutant Non-Small Cell Lung Cancer';
const case15 = 'Case 15 — Epigenetics & Colon Cancer';

export const brca1TnbcHomologousRepair = abmLecture({
  id: 'brca1-tnbc-homologous-repair',
  title: 'BRCA1, Homologous Recombination & Triple-Negative Breast Cancer',
  source: case13,
  tags: [
    { kind: 'mechanism', label: 'Homologous-recombination deficiency' },
    { kind: 'disease', label: 'Triple-negative breast cancer' },
  ],
  highYield: [
    'BRCA1 is a tumor suppressor coordinating recognition and high-fidelity **homologous-recombination repair of double-strand DNA breaks**, cell-cycle checkpoints, and genomic stability.',
    'Loss of the remaining normal BRCA1 allele in a germline carrier creates homologous-recombination deficiency, chromosome instability, and dependence on error-prone repair pathways.',
    'BRCA1-associated breast cancers are often **triple-negative: ER-negative, PR-negative, HER2-negative**, so endocrine and HER2-targeted therapies lack their targets.',
    'A breast lump plus maternal breast cancer and ovarian cancer in a close relative is a red flag for hereditary breast/ovarian cancer and warrants genetic counseling and confirmatory germline testing.',
  ],
  chainTitle: 'BRCA1 loss converts double-strand breaks into genomic instability',
  steps: [
    { label: 'DNA double-strand break occurs' },
    { label: 'BRCA1 should coordinate homologous recombination' },
    { label: 'Biallelic loss → inaccurate repair and chromosomal change', emphasis: 'danger' },
    { label: 'Clonal evolution → BRCA1-associated TNBC' },
  ],
  examFindings: [
    { sign: 'ER− / PR− / HER2− invasive ductal carcinoma', mechanism: 'Triple-negative phenotype often associated with BRCA1 deficiency', significance: 'key' },
    { sign: 'Breast and ovarian cancer across maternal relatives', mechanism: 'Autosomal-dominant inherited cancer predisposition', significance: 'key' },
  ],
  investigations: [
    { clue: 'Tumor receptor testing plus histology and stage imaging', meaning: 'Defines phenotype and extent of breast cancer' },
    { clue: 'Pathogenic germline BRCA1 variant confirmed in a genetics pathway', meaning: 'Guides therapy, surveillance, and cascade testing' },
  ],
  treatment: [
    { logic: 'Treat according to stage and triple-negative biology', detail: 'Local therapy and systemic chemotherapy/immunotherapy choices depend on disease setting and biomarkers.' },
    { logic: 'Integrate hereditary-cancer counseling', detail: 'Discuss contralateral breast/ovarian risk and testing of adult relatives.' },
  ],
  mnemonic: { hook: 'BRCA1 repairs Breaks by Recombination', expansion: ['No ER, no PR, no HER2 = triple negative'] },
  trap: {
    questionCategory: 'Inheritance versus tumor genotype',
    wrongInstinct: 'Every cell in a BRCA1 carrier has no working BRCA1 protein',
    rightAnswer: 'A germline carrier begins with one altered allele; tumor formation commonly requires loss/inactivation of the remaining normal allele',
    why: 'This is the tumor-suppressor two-hit model.',
  },
  quiz: {
    stem: 'Which DNA-repair pathway is most directly impaired by BRCA1 loss?',
    options: ['Mismatch repair', 'Nucleotide-excision repair', 'Homologous recombination', 'Direct reversal of alkylation'],
    answer: 2,
    explanation: 'BRCA1 is central to accurate homologous-recombination repair of double-strand DNA breaks.',
  },
});

export const parpSyntheticLethality = abmLecture({
  id: 'parp-synthetic-lethality',
  title: 'PARP Inhibition & Synthetic Lethality',
  source: case13,
  tags: [
    { kind: 'mechanism', label: 'Synthetic lethality' },
    { kind: 'treatment', label: 'PARP inhibitors' },
  ],
  highYield: [
    'PARP1 detects single-strand breaks and supports their repair; PARP inhibitors both block catalysis and can **trap PARP on DNA**.',
    'Unrepaired single-strand lesions become replication-associated double-strand breaks. Normal cells can use BRCA-dependent homologous recombination, but BRCA1-deficient tumor cells cannot.',
    'The combination of BRCA1 loss and PARP inhibition is **synthetic lethal**: either defect alone is survivable, but together they selectively kill the tumor cell.',
    'Resistance can emerge through restoration of homologous recombination, BRCA reversion mutations, altered PARP trapping, or drug-efflux changes.',
  ],
  chainTitle: 'PARP blockade exposes the repair dependency of BRCA1-deficient cells',
  steps: [
    { label: 'PARP repairs/tracks single-strand DNA lesions' },
    { label: 'PARP inhibitor leaves lesions and trapped complexes' },
    { label: 'Replication converts damage to double-strand breaks' },
    { label: 'No BRCA1 homologous repair → tumor-cell death', emphasis: 'key' },
  ],
  examFindings: [
    { sign: 'BRCA1-mutant, HER2-negative breast cancer', mechanism: 'Tumor may have a homologous-recombination vulnerability to PARP inhibition', significance: 'key' },
    { sign: 'Response followed by acquired progression', mechanism: 'Clonal repair restoration or BRCA reversion can cause resistance', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Pathogenic germline or somatic BRCA alteration in the relevant setting', meaning: 'Identifies a validated PARP-treatment biomarker' },
    { clue: 'CBC during therapy', meaning: 'Monitors marrow toxicity; persistent cytopenia requires evaluation' },
  ],
  treatment: [
    { logic: 'Use PARP inhibitors only in an evidence-supported disease setting', detail: 'Agent, stage, prior therapy, and germline versus somatic biomarker requirements vary.' },
    { logic: 'Continue standard local/systemic TNBC management around the molecular strategy' },
  ],
  mnemonic: { hook: 'PARP patches singles; BRCA repairs doubles', expansion: ['Block PARP + lose BRCA = synthetic lethality'] },
  trap: {
    questionCategory: 'Meaning of synthetic lethality',
    wrongInstinct: 'PARP inhibitors are toxic only because they inhibit all DNA repair in every cell equally',
    rightAnswer: 'They create damage that is especially lethal when BRCA-dependent homologous recombination is already absent',
    why: 'The therapeutic window comes from a tumor-specific repair dependency.',
  },
  quiz: {
    stem: 'Why are BRCA1-deficient tumor cells particularly sensitive to PARP inhibition?',
    options: ['They overexpress estrogen receptor', 'They cannot repair replication-associated double-strand breaks by homologous recombination', 'They cannot synthesize nucleotides', 'They have enhanced mismatch repair'],
    answer: 1,
    explanation: 'PARP blockade converts unrepaired lesions into double-strand breaks that BRCA1-deficient cells cannot repair accurately.',
  },
});

export const egfrMutantLungAdenocarcinoma = abmLecture({
  id: 'egfr-mutant-lung-adenocarcinoma',
  title: 'EGFR-Mutant Lung Adenocarcinoma',
  source: case14,
  system: 'respiratory',
  tags: [
    { kind: 'mechanism', label: 'Receptor tyrosine kinase activation' },
    { kind: 'disease', label: 'NSCLC adenocarcinoma' },
  ],
  highYield: [
    'EGFR is a receptor tyrosine kinase: ligand-induced dimerization and autophosphorylation activate **RAS–MAPK, PI3K–AKT–mTOR, and JAK–STAT** survival/proliferation signals.',
    'An **EGFR exon 19 deletion** is an activating driver mutation that stabilizes kinase signaling and creates oncogene addiction in lung adenocarcinoma.',
    'Histology establishes NSCLC adenocarcinoma, while molecular testing for EGFR and other drivers plus PD-L1 determines treatment strategy; smoking history does not replace tumor genotyping.',
    'A localized upper-lobe mass with regional nodes but no distant metastasis still requires formal TNM staging before deciding surgery, radiation, and systemic treatment.',
  ],
  chainTitle: 'An activating EGFR kinase lesion drives persistent growth signaling',
  steps: [
    { label: 'EGFR exon 19 deletion activates kinase conformation' },
    { label: 'Autophosphorylated receptor recruits signaling proteins' },
    { label: 'MAPK + AKT survival/proliferation remain on', emphasis: 'key' },
    { label: 'Clonal lung adenocarcinoma becomes EGFR-dependent' },
  ],
  examFindings: [
    { sign: 'Adenocarcinoma with EGFR exon 19 deletion', mechanism: 'Actionable activating receptor-kinase driver', significance: 'key' },
    { sign: 'Persistent cough, weight loss, focal upper-lobe lesion', mechanism: 'Local tumor plus systemic cancer effects', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Tissue or validated plasma comprehensive molecular testing', meaning: 'Identifies EGFR and competing actionable drivers' },
    { clue: 'Brain and body staging imaging as indicated', meaning: 'Determines extent and treatment intent' },
  ],
  treatment: [
    { logic: 'Use stage-specific therapy informed by the EGFR driver', detail: 'Osimertinib is a central EGFR-directed option in multiple early and advanced settings.' },
    { logic: 'Re-biopsy or use plasma testing at progression when feasible', detail: 'Resistance biology can redirect therapy.' },
  ],
  mnemonic: { hook: 'EGFR deletion keeps the Growth Receptor firing', expansion: ['MAPK grows; PI3K–AKT survives'] },
  trap: {
    questionCategory: 'PD-L1 versus driver mutation',
    wrongInstinct: 'High or low PD-L1 replaces testing for an EGFR driver',
    rightAnswer: 'Driver mutation testing and PD-L1 answer different treatment questions',
    why: 'An actionable oncogenic kinase can dominate therapy selection even when immunologic biomarkers are known.',
  },
  quiz: {
    stem: 'An EGFR exon 19 deletion promotes lung cancer primarily by:',
    options: ['Inactivating all receptor expression', 'Constitutively activating downstream growth and survival signaling', 'Blocking DNA methylation', 'Activating homologous recombination'],
    answer: 1,
    explanation: 'The deletion is an activating kinase-domain driver that sustains MAPK and PI3K–AKT signaling.',
  },
});

export const osimertinibResistance = abmLecture({
  id: 'osimertinib-resistance',
  title: 'EGFR Inhibition, Osimertinib & Resistance',
  source: case14,
  system: 'respiratory',
  tags: [
    { kind: 'mechanism', label: 'ATP-site kinase inhibition' },
    { kind: 'treatment', label: 'Osimertinib' },
  ],
  highYield: [
    'EGFR tyrosine-kinase inhibitors occupy the kinase ATP-binding region and suppress phosphorylation-dependent signaling.',
    '**Osimertinib** is a third-generation, CNS-active, irreversible EGFR inhibitor with activity against common sensitizing mutations and T790M.',
    'Tumor response follows loss of MAPK/AKT survival signals, but pre-existing heterogeneity and selection pressure allow resistant clones to emerge.',
    'Resistance mechanisms include EGFR C797S, MET amplification, bypass signaling, and histologic transformation; progression should be recharacterized rather than treated as one uniform event.',
  ],
  chainTitle: 'Target inhibition suppresses the driver until a bypass clone emerges',
  steps: [
    { label: 'Mutant EGFR drives kinase signaling' },
    { label: 'Osimertinib covalently inhibits mutant EGFR' },
    { label: 'MAPK/AKT signaling falls → tumor regression', emphasis: 'key' },
    { label: 'Secondary mutation/bypass/lineage change → resistance' },
  ],
  examFindings: [
    { sign: 'Initial major response to EGFR TKI', mechanism: 'Oncogene-addicted cells lose their dominant survival signal', significance: 'key' },
    { sign: 'New progression after response', mechanism: 'Acquired resistance through target alteration or bypass', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Repeat tissue or plasma molecular profiling at progression', meaning: 'Identifies C797S, MET amplification, or another actionable resistance mechanism' },
    { clue: 'CNS imaging when symptoms or stage indicate', meaning: 'Assesses a common sanctuary/metastatic site' },
  ],
  treatment: [
    { logic: 'Match therapy to current molecular state, not only the original biopsy', detail: 'Resistance testing distinguishes local progression, bypass pathways, and transformed histology.' },
  ],
  mnemonic: { hook: '19 responds; T790M is covered; C797S can resist', expansion: ['Osimertinib reaches the CNS'] },
  trap: {
    questionCategory: 'Acquired resistance',
    wrongInstinct: 'Progression means the original EGFR result was false',
    rightAnswer: 'Treatment selects resistant subclones while the founding EGFR driver may remain present',
    why: 'Cancer evolves under targeted-therapy pressure.',
  },
  quiz: {
    stem: 'Which alteration can directly prevent covalent binding of osimertinib to EGFR?',
    options: ['BRCA1 loss', 'EGFR C797S', 'APC methylation', 'KRAS wild type'],
    answer: 1,
    explanation: 'C797 is the covalent-binding residue; substitution can confer on-target resistance.',
  },
});

export const colonCancerEpigeneticSilencing = abmLecture({
  id: 'colon-cancer-epigenetic-silencing',
  title: 'DNA Methylation, APC/MLH1 & Colon Cancer',
  source: case15,
  system: 'gi',
  tags: [
    { kind: 'mechanism', label: 'Promoter CpG hypermethylation' },
    { kind: 'disease', label: 'Colon adenocarcinoma' },
  ],
  highYield: [
    'DNA methyltransferases add methyl groups to CpG cytosines. Dense promoter CpG-island methylation recruits repressive chromatin and can silence a tumor-suppressor gene **without changing its DNA sequence**.',
    'Loss of APC function permits β-catenin accumulation and Wnt-driven proliferation. APC promoter silencing can phenocopy an inactivating mutation in this pathway.',
    'Functional MLH1 silencing impairs mismatch repair and typically produces MMR deficiency and microsatellite instability; methylation data must therefore be reconciled with **MMR immunohistochemistry and MSI testing**.',
    'Epigenetic lesions are clonally heritable but potentially reversible, unlike a fixed DNA-sequence mutation—an important mechanistic distinction, not proof that reversal is standard therapy.',
  ],
  chainTitle: 'Promoter methylation closes chromatin and removes growth restraint',
  steps: [
    { label: 'DNMTs hypermethylate a promoter CpG island' },
    { label: 'Methyl-binding proteins recruit repressive chromatin' },
    { label: 'APC or MLH1 expression falls', emphasis: 'key' },
    { label: 'Wnt activation or repair failure promotes tumor evolution' },
  ],
  examFindings: [
    { sign: 'Descending-colon adenocarcinoma with altered bowel habit and blood', mechanism: 'Local invasive tumor disrupts lumen and mucosa', significance: 'supportive' },
    { sign: 'Promoter methylation without coding mutation', mechanism: 'Epigenetic tumor-suppressor silencing', significance: 'key' },
  ],
  investigations: [
    { clue: 'MMR protein IHC plus MSI assay', meaning: 'Tests the functional consequence of possible MLH1 silencing' },
    { clue: 'Promoter methylation assay interpreted with expression data', meaning: 'Distinguishes detected methylation from complete functional gene shutdown' },
  ],
  treatment: [
    { logic: 'Base colon-cancer therapy on stage and validated predictive biomarkers', detail: 'Surgery and chemotherapy/targeted therapy are selected by clinical stage and tumor biology.' },
    { logic: 'Treat DNMT inhibition as a mechanistic/research concept unless supported in the specific setting' },
  ],
  mnemonic: { hook: 'Methyl marks can mute', expansion: ['APC mute → Wnt on; MLH1 mute → mismatch repair off'] },
  trap: {
    questionCategory: 'Internal biomarker consistency',
    wrongInstinct: 'MLH1 promoter methylation automatically proves MSI-high disease',
    rightAnswer: 'Confirm functional loss with MMR IHC/MSI; MSS/MMR-proficient results require reconciliation',
    why: 'Detected methylation may be partial, subclonal, or insufficient to silence both alleles.',
  },
  quiz: {
    stem: 'What is the most direct consequence of complete MLH1 silencing in a colon tumor?',
    options: ['Enhanced homologous recombination', 'Mismatch-repair deficiency and microsatellite instability', 'Constitutive EGFR inhibition', 'Increased LDL-receptor expression'],
    answer: 1,
    explanation: 'MLH1 is a core mismatch-repair protein; complete loss creates replication-error accumulation and MSI.',
  },
});

export const colonMolecularWorkupTherapy = abmLecture({
  id: 'colon-molecular-workup-therapy',
  title: 'Colon-Cancer Molecular Workup & Therapeutic Logic',
  source: case15,
  system: 'gi',
  tags: [
    { kind: 'investigation', label: 'MMR/MSI, RAS & BRAF' },
    { kind: 'treatment', label: 'Stage- and biomarker-directed care' },
  ],
  highYield: [
    'Colon-cancer workup starts with histology and **TNM stage**; molecular tests refine hereditary risk, prognosis, and treatment but do not replace anatomic staging.',
    'All colorectal cancers should be assessed for MMR deficiency/MSI. Loss of MLH1/PMS2 prompts BRAF V600E and/or MLH1 methylation testing to distinguish sporadic silencing from possible Lynch syndrome.',
    'RAS and BRAF status guide metastatic targeted-therapy choices; KRAS/BRAF wild type is informative but not itself a complete treatment plan.',
    'Stage III disease commonly uses surgical resection plus an oxaliplatin/fluoropyrimidine regimen such as FOLFOX; bevacizumab and other targeted agents belong to selected advanced-disease settings.',
  ],
  chainTitle: 'Anatomy sets stage; tumor biology selects additional options',
  steps: [
    { label: 'Colonoscopy/biopsy confirms adenocarcinoma' },
    { label: 'Imaging and pathology establish TNM stage' },
    { label: 'MMR/MSI + RAS/BRAF profile the tumor', emphasis: 'key' },
    { label: 'Stage and biomarkers determine surgery/systemic strategy' },
  ],
  examFindings: [
    { sign: 'Blood in stool with persistent bowel-habit change', mechanism: 'Mucosal tumor bleeding and luminal narrowing/dysmotility', significance: 'key' },
    { sign: 'MMR deficiency without sporadic MLH1 explanation', mechanism: 'Raises concern for Lynch syndrome and inherited risk', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'MMR IHC/MSI in every new colorectal cancer', meaning: 'Screens for Lynch syndrome and predicts immunotherapy sensitivity in advanced disease' },
    { clue: 'RAS/BRAF testing in metastatic disease', meaning: 'Guides anti-EGFR and other molecular strategies' },
  ],
  treatment: [
    { logic: 'Resect localized/resectable disease and add chemotherapy by stage/risk' },
    { logic: 'Use targeted or immune therapy only when disease setting and biomarker support it', detail: 'Epigenetic drugs are not automatically standard because methylation is present.' },
  ],
  mnemonic: { hook: 'Stage first; MMR, RAS, BRAF refine', expansion: ['Molecular result without clinical setting is not a treatment plan'] },
  trap: {
    questionCategory: 'Epigenetic therapy',
    wrongInstinct: 'Any hypermethylated tumor should receive a DNMT inhibitor',
    rightAnswer: 'Promoter methylation explains mechanism, but treatment requires evidence for that drug in that cancer and disease setting',
    why: 'Biochemical reversibility does not equal proven clinical benefit.',
  },
  quiz: {
    stem: 'Loss of MLH1 and PMS2 on tumor immunohistochemistry should prompt which clarification?',
    options: ['Whether the tumor has chylomicrons', 'BRAF V600E and/or MLH1 promoter methylation testing', 'A serum acetaminophen level', 'An oral fructose challenge'],
    answer: 1,
    explanation: 'BRAF/methylation testing helps separate sporadic MLH1 silencing from a possible germline mismatch-repair defect.',
  },
});
