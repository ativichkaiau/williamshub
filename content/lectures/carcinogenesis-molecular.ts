import type { Lecture } from '../../lib/types';

export const carcinogenesisMolecular: Lecture = {
  id: 'carcinogenesis-molecular',
  title: 'Carcinogenesis: Molecular Basis & Agents',
  system: 'pathology',
  source: 'L7 — Neoplasm',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pathology' },
    { kind: 'lecture', label: 'L7 Carcinogenesis' },
    { kind: 'mechanism', label: 'Oncogenes/tumour suppressors; hallmarks' },
    { kind: 'exam', label: 'RB/p53; chemical/radiation/viral carcinogens' },
  ],

  highYield: [
    '**Cancer is a GENETIC disease of somatic cells: non-lethal genetic damage accumulates in a cell that then expands as a CLONE. Four classes of regulatory genes are targeted: (1) growth-promoting PROTO-ONCOGENES (activated → ONCOGENES), (2) growth-inhibiting TUMOUR SUPPRESSOR genes, (3) genes regulating APOPTOSIS, and (4) DNA-REPAIR genes. Carcinogenesis is MULTISTEP — several mutations accumulate over time (initiation → promotion → progression).**',
    '**ONCOGENES result from a GAIN-of-function in one allele (DOMINANT) — e.g. RAS (point mutation → constitutive signalling), MYC (amplification), HER2/neu (amplification), and translocations (BCR-ABL in CML, the "Philadelphia chromosome"). TUMOUR SUPPRESSORS require LOSS of BOTH alleles (RECESSIVE at the cell level — Knudson\'s "two-hit"): RB (the guardian of the cell cycle, mutated in retinoblastoma) and TP53/p53 (the "GUARDIAN OF THE GENOME" — halts the cycle for repair or triggers apoptosis; the most commonly mutated gene in human cancer; germline loss = Li-Fraumeni). APC, BRCA1/2 are others.**',
    '**The HALLMARKS OF CANCER integrate these: self-sufficiency in growth signals, insensitivity to growth inhibitors, EVASION OF APOPTOSIS (e.g. BCL-2), limitless replicative potential (TELOMERASE reactivation), sustained ANGIOGENESIS (VEGF), and tissue INVASION & METASTASIS — plus enabling genome instability (DNA-repair defects → e.g. HNPCC/Lynch, xeroderma pigmentosum) and tumour-promoting inflammation, and reprogrammed metabolism and immune evasion.**',
    '**CARCINOGENIC AGENTS damage DNA: CHEMICAL — direct-acting or procarcinogens needing metabolic activation (polycyclic aromatic hydrocarbons in smoke, aromatic amines → bladder, AFLATOXIN → liver, nitrosamines); RADIATION — UV (→ skin cancers, pyrimidine dimers) and IONISING radiation (leukaemia, thyroid, solid tumours); and ONCOGENIC MICROBES — HPV (cervical/oropharyngeal — E6/E7 inactivate p53/RB), EBV (Burkitt/nasopharyngeal), HBV/HCV (hepatocellular carcinoma), HTLV-1 (adult T-cell leukaemia), and HELICOBACTER PYLORI (gastric carcinoma/MALT lymphoma).**',
    '**The take-home: cancer = accumulated somatic mutations → clonal growth; ONCOGENES (gain-of-function, dominant — RAS/MYC/HER2/BCR-ABL) and TUMOUR SUPPRESSORS (two-hit loss, recessive — RB, p53 "guardian of the genome"), plus apoptosis/DNA-repair genes. HALLMARKS: growth autonomy, apoptosis evasion, telomerase, angiogenesis, invasion/metastasis. CARCINOGENS: chemical (aflatoxin/PAH/amines), radiation (UV/ionising), viruses/microbes (HPV, EBV, HBV/HCV, H. pylori).** Differentiation/invasion is [[neoplasia-differentiation-invasion]]; apoptosis biology is [[apoptosis-cell-death]].',
  ],

  mechanism: {
    title: 'Cancer = accumulated somatic mutations → clonal growth; oncogenes (gain, dominant — RAS/MYC/HER2/BCR-ABL) + tumour suppressors (two-hit loss — RB, p53) + apoptosis/DNA-repair genes; hallmarks; carcinogens chemical/radiation/viral',
    steps: [
      { id: 's1', label: 'Non-lethal DNA damage accumulates → clonal expansion (multistep)', emphasis: 'key' },
      { id: 's2', label: 'Oncogenes: gain-of-function, dominant (RAS, MYC, HER2, BCR-ABL translocation)', emphasis: 'key' },
      { id: 's3', label: 'Tumour suppressors: two-hit LOSS (RB, p53 = "guardian of the genome")', emphasis: 'key' },
      { id: 's4', label: 'Hallmarks: growth autonomy, apoptosis evasion, telomerase, angiogenesis, invasion/metastasis', emphasis: 'key' },
      { id: 's5', label: 'Carcinogens: chemical (aflatoxin/PAH/amines), radiation (UV/ionising), viruses (HPV/EBV/HBV-HCV/HTLV-1), H. pylori', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'A point-mutated RAS driving constitutive growth signalling', mechanism: 'Oncogene (gain-of-function)', significance: 'key' },
    { sign: 'Retinoblastoma from loss of both RB alleles', mechanism: 'Tumour suppressor two-hit (Knudson)', significance: 'key' },
    { sign: 'p53 as the most commonly mutated gene in human cancer', mechanism: '"Guardian of the genome" loss', significance: 'key' },
    { sign: 'Cervical cancer with HPV E6/E7 inactivating p53/RB', mechanism: 'Oncogenic virus (HPV)', significance: 'supportive' },
    { sign: 'Hepatocellular carcinoma after chronic hepatitis B/C or aflatoxin', mechanism: 'Viral + chemical carcinogenesis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The gene class activated by gain-of-function (dominant)', meaning: 'Oncogenes (from proto-oncogenes)' },
    { clue: 'The gene class needing two hits (loss of both alleles)', meaning: 'Tumour suppressor genes (RB, p53)' },
    { clue: 'The "guardian of the genome"', meaning: 'p53 (TP53)' },
    { clue: 'Viruses causing cervical and liver cancer', meaning: 'HPV; hepatitis B/C' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Understanding carcinogenesis explains both cancer biology and modern therapy: oncogene products are drug targets (e.g. BCR-ABL → imatinib, HER2 → trastuzumab, mutant signalling → kinase inhibitors), the hallmarks map to treatments (anti-angiogenics against VEGF, immune-checkpoint inhibitors against immune evasion), and knowing tumour-suppressor two-hit loss (RB, p53, BRCA) underlies inherited cancer syndromes and screening. Recognising carcinogens enables prevention — vaccination (HPV, HBV), eradicating H. pylori, reducing aflatoxin and UV/tobacco exposure. Malignant behaviour is [[neoplasia-differentiation-invasion]]; apoptosis evasion links to [[apoptosis-cell-death]].' },
  ],

  mnemonics: [
    { hook: '"Oncogenes = gain (dominant, 1 hit); Tumour suppressors = loss (recessive, 2 hits)"', expansion: ['RAS/MYC/HER2/BCR-ABL', 'RB + p53 (guardian of genome)'] },
    { hook: 'Viral carcinogens: "HPV (cervix), EBV (Burkitt/NPC), HBV/HCV (liver), HTLV-1 (ATLL), H. pylori (gastric)"', expansion: ['Aflatoxin → liver', 'UV → skin (pyrimidine dimers)'] },
  ],

  traps: [
    {
      questionCategory: 'Oncogenes vs tumour suppressor genetics',
      wrongInstinct: 'Both oncogenes and tumour suppressor genes need both copies mutated to cause cancer',
      rightAnswer: 'They behave OPPOSITELY: ONCOGENES are activated by a GAIN-of-function in just ONE allele (DOMINANT at the cell level — one hit suffices), whereas TUMOUR SUPPRESSOR genes require LOSS of BOTH alleles (RECESSIVE — Knudson\'s "two-hit" hypothesis) to remove their protective function; so a single activating mutation can create an oncogene, but tumour suppression is only lost when both copies are inactivated',
      why: 'The dominant one-hit (oncogene) versus recessive two-hit (tumour suppressor) distinction underlies inherited cancer syndromes (a germline first hit) and is a classic exam point that mixing up misrepresents cancer genetics.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The TP53 gene, the most commonly mutated gene in human cancers, functions normally as:',
      options: [
        { id: 'a', text: 'An oncogene driving proliferation' },
        { id: 'b', text: 'A tumour suppressor ("guardian of the genome") that arrests the cycle for repair or triggers apoptosis' },
        { id: 'c', text: 'A telomerase subunit' },
        { id: 'd', text: 'An angiogenic growth factor' },
      ],
      answerId: 'b',
      explanation: 'p53 is a tumour suppressor — the "guardian of the genome" — that halts the cell cycle to allow DNA repair or induces apoptosis if damage is irreparable. Loss of both alleles (or E6-mediated degradation by HPV) removes this protection, and germline loss causes Li-Fraumeni syndrome.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which virus is a major cause of cervical carcinoma, acting through E6/E7 proteins that inactivate p53 and RB?',
      options: [
        { id: 'a', text: 'Human papillomavirus (HPV)' },
        { id: 'b', text: 'Hepatitis B virus' },
        { id: 'c', text: 'Epstein-Barr virus' },
        { id: 'd', text: 'HTLV-1' },
      ],
      answerId: 'a',
      explanation: 'High-risk HPV drives cervical (and oropharyngeal) carcinoma; its E6 and E7 oncoproteins inactivate the tumour suppressors p53 and RB respectively. HBV/HCV cause hepatocellular carcinoma, EBV causes Burkitt/nasopharyngeal cancer, and HTLV-1 causes adult T-cell leukaemia.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default carcinogenesisMolecular;
