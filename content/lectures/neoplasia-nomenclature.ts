import type { Lecture } from '../../lib/types';

export const neoplasiaNomenclature: Lecture = {
  id: 'neoplasia-nomenclature',
  title: 'Neoplasia: Nomenclature & Classification',
  system: 'pathology',
  source: 'L7 — Neoplasm',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pathology' },
    { kind: 'lecture', label: 'L7 Nomenclature' },
    { kind: 'mechanism', label: 'Benign vs malignant naming' },
    { kind: 'exam', label: 'Carcinoma vs sarcoma; misnomers' },
  ],

  highYield: [
    'A NEOPLASM ("new growth") is an abnormal, CLONAL mass of tissue whose growth is UNCOONTROLLED, exceeds normal tissue, is AUTONOMOUS (persists after the stimulus stops), and serves no purpose. Every tumour has two components: the PARENCHYMA (the neoplastic cells — determines its name and behaviour) and the reactive STROMA (connective tissue, blood vessels — supports it). Tumours are classified as BENIGN or MALIGNANT (= "cancer").',
    'Naming rule — BENIGN tumours add "-OMA" to the cell of origin: mesenchymal (lipoma, fibroma, leiomyoma, osteoma, chondroma, haemangioma); epithelial benign tumours use ADENOMA (glandular), PAPILLOMA (finger-like surface projections), or CYSTADENOMA. MALIGNANT tumours: of EPITHELIAL origin = CARCINOMA (adenocarcinoma = glandular; squamous cell carcinoma); of MESENCHYMAL (connective-tissue) origin = SARCOMA (liposarcoma, osteosarcoma, leiomyosarcoma). Carcinomas are far commoner than sarcomas in adults.',
    'Special categories and MIXED tumours: a TERATOMA arises from >1 germ layer (totipotent germ cells — ovary/testis; mature = benign, immature = malignant); MIXED tumours (e.g. pleomorphic adenoma of salivary gland) have divergent differentiation from one clone; a HAMARTOMA is a disorganised mass of tissue NATIVE to the site (non-neoplastic malformation); a CHORISTOMA is normal tissue in an ABNORMAL location (ectopic).',
    'Watch the MISNOMERS: several "-omas" are actually MALIGNANT — LYMPHOMA, MELANOMA, SEMINOMA, MESOTHELIOMA, glioma — and the "-blastomas" of childhood (neuroblastoma, retinoblastoma, nephroblastoma/Wilms, hepatoblastoma) are malignant embryonal tumours. LEUKAEMIA (blood) and lymphoma are haematologic malignancies despite not ending in "-carcinoma/-sarcoma." Correct classification determines prognosis and treatment.',
    '**The take-home: neoplasm = clonal, autonomous, purposeless growth (parenchyma + stroma). BENIGN = "-oma" (lipoma; adenoma/papilloma for epithelium). MALIGNANT = CARCINOMA (epithelial) or SARCOMA (mesenchymal). TERATOMA (>1 germ layer); hamartoma (native, disorganised) vs choristoma (ectopic normal tissue). MISNOMERS malignant: lymphoma, melanoma, seminoma, -blastomas, leukaemia.** Malignant behaviour/grading is [[neoplasia-differentiation-invasion]]; molecular basis is [[carcinogenesis-molecular]].',
  ],

  mechanism: {
    title: 'Neoplasm = clonal autonomous growth (parenchyma + stroma); benign "-oma" (adenoma/papilloma epithelial); malignant carcinoma (epithelial) vs sarcoma (mesenchymal); teratoma; hamartoma vs choristoma; misnomers (lymphoma/melanoma/-blastomas malignant)',
    steps: [
      { id: 's1', label: 'Neoplasm = clonal, autonomous, uncontrolled, purposeless growth (parenchyma + stroma)', emphasis: 'key' },
      { id: 's2', label: 'Benign = "-oma"; epithelial benign = adenoma/papilloma/cystadenoma', emphasis: 'key' },
      { id: 's3', label: 'Malignant: CARCINOMA (epithelial) vs SARCOMA (mesenchymal)', emphasis: 'key' },
      { id: 's4', label: 'Teratoma (>1 germ layer); hamartoma (native disorganised) vs choristoma (ectopic normal)', emphasis: 'key' },
      { id: 's5', label: 'Misnomers MALIGNANT: lymphoma, melanoma, seminoma, mesothelioma, -blastomas, leukaemia', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'A benign glandular epithelial tumour', mechanism: 'Adenoma', significance: 'key' },
    { sign: 'A malignant tumour of epithelial origin', mechanism: 'Carcinoma', significance: 'key' },
    { sign: 'A malignant tumour of connective-tissue (mesenchymal) origin', mechanism: 'Sarcoma', significance: 'key' },
    { sign: 'A gonadal tumour containing hair, teeth and multiple tissue types', mechanism: 'Teratoma (>1 germ layer)', significance: 'supportive' },
    { sign: 'Pancreatic tissue found within the stomach wall', mechanism: 'Choristoma (ectopic normal tissue)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The suffix for most benign tumours', meaning: '-oma' },
    { clue: 'The name for a malignant epithelial tumour', meaning: 'Carcinoma' },
    { clue: 'The name for a malignant mesenchymal tumour', meaning: 'Sarcoma' },
    { clue: 'An "-oma" that is actually malignant', meaning: 'Lymphoma / melanoma / seminoma / mesothelioma' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Correct nomenclature encodes a tumour\'s origin and behaviour, which drives prognosis and treatment: benign "-omas" are usually cured by excision, whereas carcinomas (epithelial) and sarcomas (mesenchymal) are malignant and spread differently (carcinomas favour lymphatics, sarcomas the bloodstream). Recognising misnomers — lymphoma, melanoma, seminoma, mesothelioma and the childhood "-blastomas" are malignant — prevents dangerous under-treatment, and distinguishing hamartoma/choristoma (non-neoplastic) from true tumours avoids overtreatment. Malignant features and grading are [[neoplasia-differentiation-invasion]]; the molecular basis is [[carcinogenesis-molecular]].' },
  ],

  mnemonics: [
    { hook: '"Carcinoma = epithelial; Sarcoma = mesenchymal (connective tissue)"', expansion: ['Adenoma = benign glandular', 'Papilloma = finger-like'] },
    { hook: 'Malignant misnomers: "Lymphoma, Melanoma, Seminoma, Mesothelioma, -blastomas"', expansion: ['Teratoma = >1 germ layer', 'Hamartoma native vs choristoma ectopic'] },
  ],

  traps: [
    {
      questionCategory: 'The "-oma" suffix and malignancy',
      wrongInstinct: 'Any tumour ending in "-oma" is benign',
      rightAnswer: 'Although most benign tumours end in "-oma", several important malignancies also carry the "-oma" suffix — LYMPHOMA, MELANOMA, SEMINOMA, MESOTHELIOMA, glioma (and the childhood "-BLASTOMAS": neuroblastoma, retinoblastoma, hepatoblastoma, nephroblastoma) — plus LEUKAEMIA is malignant despite its name; so the suffix alone does NOT guarantee benignity, and these misnomers must be memorised',
      why: 'Assuming every "-oma" is benign risks catastrophically under-treating a malignancy such as lymphoma or melanoma; the recognised malignant "-oma" misnomers are a classic, high-stakes exam point.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A malignant tumour arising from connective tissue (mesenchyme), such as from bone or fat, is called a:',
      options: [
        { id: 'a', text: 'Carcinoma' },
        { id: 'b', text: 'Sarcoma' },
        { id: 'c', text: 'Adenoma' },
        { id: 'd', text: 'Papilloma' },
      ],
      answerId: 'b',
      explanation: 'Malignant tumours of mesenchymal (connective-tissue) origin are sarcomas (e.g. osteosarcoma, liposarcoma), whereas malignant epithelial tumours are carcinomas. Adenoma and papilloma are benign epithelial tumours.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which of these tumours is malignant despite its "-oma" name?',
      options: [
        { id: 'a', text: 'Lipoma' },
        { id: 'b', text: 'Melanoma' },
        { id: 'c', text: 'Leiomyoma' },
        { id: 'd', text: 'Osteoma' },
      ],
      answerId: 'b',
      explanation: 'Melanoma is a malignant tumour of melanocytes despite the "-oma" suffix; other malignant misnomers include lymphoma, seminoma, mesothelioma and the childhood "-blastomas". Lipoma, leiomyoma and osteoma are genuinely benign.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default neoplasiaNomenclature;
