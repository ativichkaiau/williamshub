import type { Lecture } from '../../lib/types';

export const hhlCll: Lecture = {
  id: 'hhl-cll',
  title: 'Chronic Lymphocytic Leukemia',
  system: 'heme',
  source: 'L13 — Myeloproliferative Neoplasms, MM & CLL',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L13 MPN · MM · CLL' },
    { kind: 'disease', label: 'CLL / SLL' },
    { kind: 'mechanism', label: 'Clonal B-cell accumulation' },
    { kind: 'investigation', label: 'Smudge cells · CD5+ CD23+' },
  ],

  highYield: [
    '**CLL = accumulation of mature-appearing clonal B lymphocytes**; CLL (blood/marrow) and **small lymphocytic lymphoma (SLL, nodal)** are the same disease. **Commonest leukaemia in Western adults**; elderly.',
    'Often an **incidental absolute lymphocytosis**; film shows small mature lymphocytes + **smudge/basket cells** (fragile cells crushed on smearing). Immunophenotype: **CD5+, CD23+**, CD19/CD20+, dim surface Ig.',
    'It is **failure of apoptosis (accumulation, not proliferation)** → slowly rising lymphocytosis, lymphadenopathy, hepatosplenomegaly.',
    'Complications: **autoimmune haemolytic anaemia** (warm IgG, positive DAT), **hypogammaglobulinaemia → recurrent infection** (major cause of death), and **Richter transformation** to aggressive **DLBCL**.',
    '**Rai/Binet** staging guides care: early/asymptomatic → **watch-and-wait**; treat for symptoms/cytopenias/bulky disease (BTK inhibitors, venetoclax ± anti-CD20).',
  ],

  mechanism: {
    title: 'Anti-apoptotic clonal B-cell accumulation',
    steps: [
      { id: 's1', label: 'Clonal mature B cell (CD5+ CD23+) resists apoptosis (BCL2)', emphasis: 'key' },
      { id: 's2', label: 'Accumulates in blood/marrow/nodes → lymphocytosis + lymphadenopathy', emphasis: 'key' },
      { id: 's3', label: 'Marrow infiltration → cytopenias' },
      { id: 's4', label: 'Immune dysregulation → AIHA + hypogammaglobulinaemia (infection)', emphasis: 'key' },
      { id: 's5', label: 'Richter transformation to DLBCL', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Persistent absolute lymphocytosis of small mature lymphocytes', mechanism: 'Clonal B-cell accumulation', significance: 'key' },
    { sign: 'Smudge / basket cells on the film', mechanism: 'Fragile CLL lymphocytes crushed during smearing', significance: 'key' },
    { sign: 'CD5+ CD23+ B cells on flow cytometry', mechanism: 'CLL immunophenotype', significance: 'key' },
    { sign: 'Anaemia with a positive direct antiglobulin (Coombs) test', mechanism: 'Warm autoimmune haemolysis', significance: 'supportive' },
    { sign: 'Recurrent bacterial infections', mechanism: 'Hypogammaglobulinaemia', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Smudge cells + monoclonal CD5+/CD23+ B cells', meaning: 'CLL / SLL' },
    { clue: 'Positive direct antiglobulin (Coombs) test with anaemia', meaning: 'Autoimmune haemolytic anaemia complicating CLL' },
    { clue: 'Low serum immunoglobulins', meaning: 'Hypogammaglobulinaemia (infection risk)' },
    { clue: 'A single rapidly enlarging node with B symptoms in known CLL', meaning: 'Richter transformation (biopsy it)' },
  ],

  treatment: [
    { logic: 'Watch-and-wait if asymptomatic early-stage', detail: 'Treating early-stage disease does not improve survival.' },
    { logic: 'Treat active disease', detail: 'BTK inhibitor (ibrutinib) or venetoclax (BCL2i) ± anti-CD20; indications = progressive cytopenias, bulky/symptomatic disease, autoimmune cytopenias. See [[hhl-targeted-therapy-classes]].' },
    { logic: 'Supportive care', detail: 'Steroids for AIHA; infection prophylaxis / immunoglobulin replacement for hypogammaglobulinaemia.' },
  ],

  mnemonics: [
    { hook: 'CLL: Crushed Lymphocytes (smudge cells), CD5 & CD23', expansion: ['Elderly, often incidental lymphocytosis', 'AIHA (positive DAT)', 'Richter → DLBCL'] },
    { hook: 'CLL kills by infection (hypogammaglobulinaemia), not just the count', expansion: ['Watch-and-wait early disease', 'Treat when symptomatic'] },
  ],

  traps: [
    {
      questionCategory: 'CD5+ B-cell neoplasm',
      wrongInstinct: 'A CD5-positive B-cell neoplasm must be mantle cell lymphoma',
      rightAnswer: 'CLL is CD5+ but ALSO CD23+ (mantle cell is CD5+ CD23−, cyclin D1+ / t(11;14))',
      why: 'CD23 and cyclin D1 separate indolent CLL from aggressive mantle cell lymphoma.',
    },
    {
      questionCategory: 'Cause of anaemia in CLL',
      wrongInstinct: 'Anaemia in CLL is always marrow infiltration',
      rightAnswer: 'Consider autoimmune haemolysis (positive DAT) — treated with steroids, not just chemotherapy',
      why: 'The mechanism changes management, so check a DAT and reticulocytes before assuming marrow failure.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An elderly asymptomatic patient has a high WBC composed of small mature lymphocytes with smudge cells; flow cytometry shows CD5+ CD23+ B cells. Diagnosis?',
      options: [
        { id: 'a', text: 'Chronic lymphocytic leukaemia' },
        { id: 'b', text: 'Mantle cell lymphoma' },
        { id: 'c', text: 'Acute myeloid leukaemia' },
        { id: 'd', text: 'Reactive lymphocytosis' },
      ],
      answerId: 'a',
      explanation: 'Smudge cells with CD5+/CD23+ monoclonal B cells in an elderly patient define CLL. Mantle cell is CD5+ but CD23− and cyclin D1+.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A patient with stable CLL develops one rapidly enlarging lymph node, fever, weight loss and a high LDH. Most likely explanation?',
      options: [
        { id: 'a', text: 'Reactive hyperplasia' },
        { id: 'b', text: 'Richter transformation to diffuse large B-cell lymphoma' },
        { id: 'c', text: 'Tuberculous lymphadenitis' },
        { id: 'd', text: 'Simple disease progression of CLL' },
      ],
      answerId: 'b',
      explanation: 'A single rapidly enlarging node with B symptoms and rising LDH in known CLL suggests Richter transformation to an aggressive DLBCL — confirm by biopsy.',
      tests: 'disease',
    },
  ],
};

export default hhlCll;
