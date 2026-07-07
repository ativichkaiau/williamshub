import type { Lecture } from '../../lib/types';

export const antineoplasticPrinciples: Lecture = {
  id: 'antineoplastic-principles',
  title: 'Principles of Antineoplastic Agents',
  system: 'pharmacology',
  source: 'L10 — Antineoplastic Agents',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pharmacology' },
    { kind: 'lecture', label: 'L10 Antineoplastics' },
    { kind: 'mechanism', label: 'Cell-cycle & DNA targets' },
    { kind: 'exam', label: 'Classes & signature toxicities' },
  ],

  highYield: [
    'Chemotherapy exploits rapid proliferation but has a NARROW therapeutic index — it also harms fast-dividing normal cells (bone marrow, GI mucosa, hair follicles), giving the shared toxicities of MYELOSUPPRESSION, mucositis, alopecia, nausea. Drugs are CELL-CYCLE-SPECIFIC (kill dividing cells at a phase — antimetabolites S-phase, taxanes/vinca M-phase) or NON-SPECIFIC (alkylators — any phase). "Log-kill": each cycle kills a constant FRACTION, so combination/repeated cycles are used.',
    'ALKYLATING agents (cyclophosphamide, cisplatin/carboplatin, busulfan) cross-link DNA (cell-cycle non-specific) — cyclophosphamide → haemorrhagic cystitis (prevent with mesna), cisplatin → nephro/ototoxicity + emesis. ANTIMETABOLITES (S-phase): METHOTREXATE (dihydrofolate reductase → rescue with leucovorin), 5-FLUOROURACIL (thymidylate synthase), 6-mercaptopurine, cytarabine, gemcitabine.',
    'Microtubule agents (M-phase): VINCA alkaloids (vincristine → neuropathy; vinblastine → myelosuppression) inhibit assembly; TAXANES (paclitaxel) stabilise microtubules. Topoisomerase inhibitors: etoposide (topo II), irinotecan (topo I → diarrhoea). ANTITUMOUR ANTIBIOTICS: doxorubicin/anthracyclines (cardiotoxic — cumulative), bleomycin (pulmonary fibrosis, minimal marrow toxicity).',
    'TARGETED/BIOLOGIC therapy is more selective: tyrosine-kinase inhibitors ("-nib" — imatinib for BCR-ABL CML), monoclonal antibodies ("-mab" — trastuzumab/HER2, rituximab/CD20), and immune-checkpoint inhibitors (anti-PD-1/CTLA-4 → immune-related adverse events). Resistance arises via drug efflux (MDR/P-glycoprotein), altered targets and DNA-repair changes; TUMOUR LYSIS SYNDROME (↑K/PO4/urate, ↓Ca) can follow rapid cell kill.',
    '**The take-home: alkylators (cross-link DNA, any phase; cyclophosphamide→cystitis, cisplatin→nephro/oto), antimetabolites (S-phase; MTX→leucovorin rescue, 5-FU), vinca/taxanes (M-phase; vincristine→neuropathy), anthracyclines (cardiotoxic), bleomycin (lung); targeted "-nib"/"-mab". Shared toxicity = myelosuppression; watch tumour lysis.** Antimetabolite/nucleotide biology links to MBH ([[nucleotide-drugs-disorders]]); immunomodulation to [[immunomodulating-agents]].',
  ],

  mechanism: {
    title: 'Cell-cycle specific vs non-specific; alkylators/antimetabolites/microtubule/topo/antibiotics + targeted; shared myelosuppression',
    steps: [
      { id: 's1', label: 'Narrow TI: harms marrow/GI/hair (myelosuppression, mucositis, alopecia); log-kill → combos', emphasis: 'key' },
      { id: 's2', label: 'Alkylators (cyclophosphamide/cisplatin) cross-link DNA — cell-cycle NON-specific', emphasis: 'key' },
      { id: 's3', label: 'Antimetabolites S-phase (MTX→leucovorin rescue, 5-FU, 6-MP)', emphasis: 'key' },
      { id: 's4', label: 'M-phase: vinca (vincristine neuropathy), taxanes; anthracyclines cardiotoxic; bleomycin lung', emphasis: 'key' },
      { id: 's5', label: 'Targeted "-nib" (imatinib) / "-mab" (trastuzumab); watch tumour lysis syndrome', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Neutropenia, mucositis and alopecia during chemotherapy', mechanism: 'Toxicity to rapidly dividing normal cells (myelosuppression)', significance: 'key' },
    { sign: 'Haemorrhagic cystitis prevented by mesna', mechanism: 'Cyclophosphamide (acrolein metabolite)', significance: 'key' },
    { sign: 'Peripheral neuropathy from a chemotherapy agent', mechanism: 'Vincristine (vinca alkaloid, M-phase)', significance: 'key' },
    { sign: 'Cumulative dose-dependent cardiotoxicity', mechanism: 'Anthracycline (doxorubicin)', significance: 'key' },
    { sign: 'Hyperkalaemia, hyperuricaemia, hyperphosphataemia after rapid tumour kill', mechanism: 'Tumour lysis syndrome', significance: 'key' },
  ],

  investigations: [
    { clue: 'The most common dose-limiting chemotherapy toxicity', meaning: 'Myelosuppression (bone marrow)' },
    { clue: 'The rescue agent after high-dose methotrexate', meaning: 'Leucovorin (folinic acid)' },
    { clue: 'The chemotherapy class that is cell-cycle non-specific', meaning: 'Alkylating agents' },
    { clue: 'The suffix of tyrosine-kinase inhibitors vs monoclonal antibodies', meaning: '"-nib" (TKI) vs "-mab" (antibody)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The narrow therapeutic index and shared myelosuppression define chemotherapy safety, while each class has a signature toxicity (cyclophosphamide cystitis, cisplatin nephro/oto, vincristine neuropathy, anthracycline heart, bleomycin lung) that dictates monitoring and prophylaxis (mesna, leucovorin, growth factors). Targeted agents ("-nib"/"-mab") and checkpoint inhibitors add selectivity but new toxicities. Antimetabolite/nucleotide mechanisms tie to MBH ([[nucleotide-drugs-disorders]]); immune-based therapy to [[immunomodulating-agents]]; tumour lysis is a renal/electrolyte emergency.' },
  ],

  mnemonics: [
    { hook: 'Toxicities: "Cyclophosphamide=Cystitis(mesna), Cisplatin=Kidney/ear, Vincristine=nerVes, Doxorubicin=hearD, Bleomycin=Breath(lung)"', expansion: ['MTX → leucovorin rescue', 'Shared: myelosuppression'] },
    { hook: '"-nib = kinase inhibitor; -mab = monoclonal antibody"', expansion: ['Imatinib = BCR-ABL', 'Trastuzumab = HER2'] },
  ],

  traps: [
    {
      questionCategory: 'Why chemotherapy causes its shared toxicities',
      wrongInstinct: 'Chemotherapy toxicity means the drug is attacking the wrong (non-cancer) organs by mistake',
      rightAnswer: 'Classic cytotoxic chemotherapy targets RAPIDLY DIVIDING cells, so it predictably harms the fastest-dividing NORMAL tissues — bone marrow (myelosuppression), GI mucosa (mucositis), hair follicles (alopecia) — because they share the proliferative feature being attacked, not because of off-target error; this is why the therapeutic index is narrow',
      why: 'Understanding that toxicity follows proliferation rate (not random off-target effects) explains the predictable side-effect profile, the use of growth-factor/mucosal support, and why targeted agents (which exploit tumour-specific molecules) spare these tissues better.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'High-dose methotrexate toxicity is limited by "rescuing" normal cells with:',
      options: [
        { id: 'a', text: 'Mesna' },
        { id: 'b', text: 'Leucovorin (folinic acid)' },
        { id: 'c', text: 'Dexrazoxane' },
        { id: 'd', text: 'Amifostine' },
      ],
      answerId: 'b',
      explanation: 'Methotrexate inhibits dihydrofolate reductase, blocking folate regeneration. Leucovorin (folinic acid) is a reduced folate that bypasses the block and rescues normal cells. (Mesna prevents cyclophosphamide cystitis; dexrazoxane protects against anthracycline cardiotoxicity.)',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'Which agent causes cumulative, dose-dependent cardiotoxicity?',
      options: [
        { id: 'a', text: 'Bleomycin' },
        { id: 'b', text: 'Doxorubicin (an anthracycline)' },
        { id: 'c', text: 'Vincristine' },
        { id: 'd', text: 'Cisplatin' },
      ],
      answerId: 'b',
      explanation: 'Anthracyclines such as doxorubicin cause cumulative dose-dependent cardiotoxicity (dilated cardiomyopathy/heart failure), monitored by cumulative dose and cardiac function. Bleomycin causes pulmonary fibrosis, vincristine neuropathy, and cisplatin nephro/ototoxicity.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default antineoplasticPrinciples;
