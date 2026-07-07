import type { Lecture } from '../../lib/types';

export const cytotoxicChemotherapyAgents: Lecture = {
  id: 'cytotoxic-chemotherapy-agents',
  title: 'Cytotoxic Chemotherapy Agents',
  system: 'pharmacology',
  source: 'L10 — Antineoplastic Agents',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pharmacology' },
    { kind: 'lecture', label: 'L10 Cytotoxics' },
    { kind: 'mechanism', label: 'Classes & signature toxicities' },
    { kind: 'exam', label: 'Alkylators, antimetabolites, vinca' },
  ],

  highYield: [
    'Classic cytotoxic chemotherapy targets DNA/cell division. ALKYLATING agents (cyclophosphamide, cisplatin/carboplatin, busulfan) cross-link DNA (cell-cycle NON-specific): cyclophosphamide → haemorrhagic cystitis (acrolein — prevent with MESNA); cisplatin → NEPHROTOXICITY + ototoxicity + severe emesis. ANTIMETABOLITES (S-phase): METHOTREXATE (DHFR — rescue with LEUCOVORIN), 5-FLUOROURACIL (thymidylate synthase; DPYD deficiency → toxicity), 6-mercaptopurine (TPMT), cytarabine, gemcitabine.',
    'MICROTUBULE agents (M-phase): VINCA alkaloids (VINCRISTINE → peripheral NEUROPATHY; vinblastine → myelosuppression) inhibit assembly; TAXANES (paclitaxel/docetaxel) stabilise microtubules (neuropathy, hypersensitivity). TOPOISOMERASE inhibitors: etoposide (topo II), irinotecan (topo I → diarrhoea). ANTITUMOUR ANTIBIOTICS: anthracyclines (doxorubicin → cumulative CARDIOTOXICITY — dexrazoxane protects), bleomycin → PULMONARY FIBROSIS (minimal marrow toxicity).',
    'SHARED toxicity from harming fast-dividing normal cells: MYELOSUPPRESSION (dose-limiting — infection/bleeding/anaemia, supported with G-CSF), mucositis, alopecia, nausea/vomiting (antiemetics), and infertility. "LOG-KILL" (constant fraction killed per cycle) justifies repeated cycles and combination regimens (different mechanisms + non-overlapping toxicities) to maximise kill and limit resistance.',
    'RESISTANCE: drug EFFLUX (P-glycoprotein/MDR), altered/increased target, enhanced DNA repair, reduced drug activation. TUMOUR LYSIS SYNDROME (↑K⁺/phosphate/urate, ↓Ca²⁺ → AKI/arrhythmia) can follow rapid kill of bulky/haematological tumours — prevent with hydration, allopurinol/rasburicase.',
    '**The take-home: alkylators (cross-link DNA, any phase; cyclophosphamide→cystitis[mesna], cisplatin→nephro/oto), antimetabolites (S-phase; MTX→leucovorin, 5-FU), vinca/taxanes (M-phase; vincristine→neuropathy), anthracyclines (cardiotoxic), bleomycin (lung); shared = MYELOSUPPRESSION; combination for log-kill; watch tumour lysis.** The overview/targeted agents are in [[antineoplastic-principles]] and [[targeted-cancer-therapy]]; antimetabolite/nucleotide biology is MBH ([[nucleotide-drugs-disorders]]).',
  ],

  mechanism: {
    title: 'Alkylators / antimetabolites (S) / microtubule (M) / topo / antibiotics; signature toxicities; shared myelosuppression; combos for log-kill',
    steps: [
      { id: 's1', label: 'Alkylators (cyclophosphamide→cystitis/mesna, cisplatin→nephro/oto) — cell-cycle non-specific', emphasis: 'key' },
      { id: 's2', label: 'Antimetabolites (S-phase): MTX (leucovorin rescue), 5-FU (DPYD), 6-MP (TPMT)', emphasis: 'key' },
      { id: 's3', label: 'Microtubule (M): vinca (vincristine neuropathy), taxanes; topo (etoposide/irinotecan)', emphasis: 'key' },
      { id: 's4', label: 'Anthracyclines cardiotoxic (dexrazoxane); bleomycin → pulmonary fibrosis', emphasis: 'key' },
      { id: 's5', label: 'Shared myelosuppression; combos = log-kill; tumour lysis syndrome (hydrate/rasburicase)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Haemorrhagic cystitis prevented by mesna', mechanism: 'Cyclophosphamide (acrolein)', significance: 'key' },
    { sign: 'Nephrotoxicity, ototoxicity and severe emesis from chemotherapy', mechanism: 'Cisplatin', significance: 'key' },
    { sign: 'Peripheral neuropathy from a chemotherapy agent', mechanism: 'Vincristine (vinca alkaloid, M-phase)', significance: 'key' },
    { sign: 'Cumulative dose-dependent cardiomyopathy', mechanism: 'Anthracycline (doxorubicin)', significance: 'key' },
    { sign: 'Pulmonary fibrosis with minimal marrow toxicity', mechanism: 'Bleomycin', significance: 'key' },
  ],

  investigations: [
    { clue: 'The rescue agent after high-dose methotrexate', meaning: 'Leucovorin (folinic acid)' },
    { clue: 'The agent preventing cyclophosphamide cystitis', meaning: 'Mesna' },
    { clue: 'The vinca alkaloid causing neuropathy', meaning: 'Vincristine' },
    { clue: 'The chemotherapy causing pulmonary fibrosis', meaning: 'Bleomycin' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Each cytotoxic class has a defining mechanism and signature toxicity that dictate monitoring and prophylaxis (mesna, leucovorin, dexrazoxane, antiemetics, G-CSF), while shared myelosuppression is dose-limiting; combination regimens exploit log-kill and non-overlapping toxicities. Pharmacogenomics (TPMT→6-MP, DPYD→5-FU) modifies dosing ([[pharmacogenomics]]). Targeted/biologic agents and general principles are in [[targeted-cancer-therapy]] and [[antineoplastic-principles]]; tumour lysis is a renal emergency.' },
  ],

  mnemonics: [
    { hook: '"Cyclophosphamide=Cystitis(mesna), Cisplatin=Kidney/ear, Vincristine=nerVes, Doxorubicin=hearD, Bleomycin=Breath"', expansion: ['MTX → leucovorin', 'Shared: myelosuppression'] },
    { hook: 'Phases: "Antimetabolites S, vinca/taxanes M, alkylators any"', expansion: ['Combos = log-kill', 'Tumour lysis → hydrate/rasburicase'] },
  ],

  traps: [
    {
      questionCategory: 'Why combination chemotherapy is used',
      wrongInstinct: 'Using one maximally-dosed drug is the best way to kill a tumour',
      rightAnswer: 'Chemotherapy is usually given as COMBINATIONS of drugs with DIFFERENT mechanisms and NON-OVERLAPPING toxicities — this maximises tumour cell kill (log-kill from multiple mechanisms), limits the dose-limiting toxicity of any single agent, and reduces the emergence of resistance; single-agent maximal dosing is more toxic and more prone to resistance',
      why: 'Combination regimens achieve greater kill with tolerable toxicity and less resistance than escalating one drug — the rationale behind standard multi-agent protocols.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Mesna is co-administered with cyclophosphamide to prevent:',
      options: [
        { id: 'a', text: 'Cardiotoxicity' },
        { id: 'b', text: 'Haemorrhagic cystitis (from the acrolein metabolite)' },
        { id: 'c', text: 'Pulmonary fibrosis' },
        { id: 'd', text: 'Peripheral neuropathy' },
      ],
      answerId: 'b',
      explanation: 'Cyclophosphamide produces acrolein, which is toxic to the bladder urothelium and causes haemorrhagic cystitis. Mesna binds and detoxifies acrolein in the urine, preventing this. (Dexrazoxane protects against anthracycline cardiotoxicity; leucovorin rescues from methotrexate.)',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'Which agent is correctly paired with its characteristic toxicity?',
      options: [
        { id: 'a', text: 'Bleomycin — cardiotoxicity' },
        { id: 'b', text: 'Vincristine — peripheral neuropathy' },
        { id: 'c', text: 'Cisplatin — pulmonary fibrosis' },
        { id: 'd', text: 'Doxorubicin — nephrotoxicity' },
      ],
      answerId: 'b',
      explanation: 'Vincristine characteristically causes peripheral neuropathy. Bleomycin causes pulmonary fibrosis, cisplatin causes nephro/ototoxicity, and doxorubicin (an anthracycline) causes cumulative cardiotoxicity.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default cytotoxicChemotherapyAgents;
