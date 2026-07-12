import type { Lecture } from '../../lib/types';

export const hhlEbvAssociatedDiseases: Lecture = {
  id: 'hhl-ebv-associated-diseases',
  title: 'EBV-associated Diseases & Complications',
  system: 'heme',
  source: 'L27 — EBV & Infectious Mononucleosis',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L27 EBV & IM' },
    { kind: 'disease', label: 'Burkitt · NPC · Hodgkin · PTLD' },
    { kind: 'mechanism', label: 'Latency → oncogenesis (LMP1)' },
  ],

  highYield: [
    '**EBV establishes latency in B cells**; latent genes (**LMP1**, which mimics constitutive CD40 signalling, and **EBNA**) drive proliferation → **oncogenesis**.',
    '**Endemic (African) Burkitt lymphoma:** EBV + the **t(8;14) MYC** translocation (co-factor: holoendemic malaria); jaw/facial mass, **"starry-sky"** histology.',
    '**Nasopharyngeal carcinoma:** strong EBV link, **high incidence in Southern China and Southeast Asia** (regionally relevant) — undifferentiated carcinoma presenting with a **cervical neck mass, epistaxis, nasal obstruction**.',
    '**Hodgkin lymphoma** (especially **mixed-cellularity**) — **EBV/LMP1-positive Reed–Sternberg cells**.',
    'In the **immunocompromised** (HIV, transplant): **EBV-driven B-cell lymphomas and PTLD**, CNS lymphoma, and **HLH**. Manage PTLD by **reducing immunosuppression ± rituximab**. See [[hhl-ebv-mononucleosis]].',
  ],

  mechanism: {
    title: 'Latent EBV genes + lost T-cell control → tumours',
    steps: [
      { id: 's1', label: 'EBV latency in B cells; LMP1 (mimics CD40) + EBNA drive proliferation', emphasis: 'key' },
      { id: 's2', label: 'Malaria / HIV / immunosuppression → reduced T-cell control of infected B cells', emphasis: 'key' },
      { id: 's3', label: 'MYC t(8;14) translocation → endemic Burkitt lymphoma', emphasis: 'key' },
      { id: 's4', label: 'Epithelial latency → nasopharyngeal carcinoma (SE/East Asia)', emphasis: 'key' },
      { id: 's5', label: 'Uncontrolled proliferation → PTLD / lymphoma / HLH in the immunocompromised', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Jaw or abdominal mass in an African child, "starry-sky" smear', mechanism: 'Endemic Burkitt lymphoma (EBV + MYC t(8;14))', significance: 'key' },
    { sign: 'Cervical neck mass with epistaxis / nasal obstruction in a Southeast Asian adult', mechanism: 'Nasopharyngeal carcinoma (EBV-driven)', significance: 'key' },
    { sign: 'Reed–Sternberg cells, EBV/LMP1-positive', mechanism: 'Hodgkin lymphoma (mixed-cellularity)', significance: 'key' },
    { sign: 'New B-cell lymphoma in a transplant or HIV patient', mechanism: 'EBV-driven PTLD / immunodeficiency lymphoma', significance: 'supportive' },
    { sign: 'Fever, cytopenias, very high ferritin, hemophagocytosis', mechanism: 'EBV-associated haemophagocytic lymphohistiocytosis (HLH)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 't(8;14) MYC translocation with "starry-sky" appearance', meaning: 'Burkitt lymphoma' },
    { clue: 'EBV (EBER) positivity in a nasopharyngeal biopsy', meaning: 'Nasopharyngeal carcinoma' },
    { clue: 'Rising EBV DNA PCR in a transplant recipient', meaning: 'Early post-transplant lymphoproliferative disorder (PTLD)' },
    { clue: 'Very high ferritin + hemophagocytes + cytopenias', meaning: 'Haemophagocytic lymphohistiocytosis' },
  ],

  treatment: [
    { logic: 'Burkitt: intensive combination chemotherapy', detail: 'Extremely proliferative — anticipate and prevent tumour lysis syndrome.' },
    { logic: 'PTLD: reduce immunosuppression first, add rituximab', detail: 'Restoring T-cell control ± anti-CD20 targets the EBV-driven B cells; nasopharyngeal carcinoma is treated primarily with radiotherapy ± chemo.' },
  ],

  mnemonics: [
    { hook: 'EBV tumours: Burkitt, Nasopharyngeal carcinoma, Hodgkin, and immunocompromised lymphoma/PTLD', expansion: ['Endemic Burkitt = EBV + MYC t(8;14)', 'NPC = Southeast/East Asia', 'Hodgkin = LMP1+ Reed–Sternberg', 'Immunosuppressed = PTLD/HLH'] },
  ],

  traps: [
    {
      questionCategory: 'The EBV link in Burkitt lymphoma',
      wrongInstinct: 'All Burkitt lymphoma is caused by EBV',
      rightAnswer: 'The strong EBV association is with ENDEMIC (African) Burkitt; sporadic Burkitt is often EBV-negative — both share the t(8;14) MYC translocation',
      why: 'EBV positivity is near-universal in endemic Burkitt but only a minority of sporadic cases; the unifying lesion is MYC, not EBV.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A child in a malaria-endemic African region presents with a rapidly growing jaw mass; biopsy shows a "starry-sky" pattern and t(8;14). Which EBV-associated tumour is this?',
      options: [
        { id: 'a', text: 'Hodgkin lymphoma' },
        { id: 'b', text: 'Endemic Burkitt lymphoma' },
        { id: 'c', text: 'Nasopharyngeal carcinoma' },
        { id: 'd', text: 'Post-transplant lymphoproliferative disorder' },
      ],
      answerId: 'b',
      explanation: 'A jaw mass with "starry-sky" histology and t(8;14) MYC translocation in an African, malaria-endemic setting is endemic Burkitt lymphoma, near-universally EBV-positive.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'A kidney transplant recipient develops a new EBV-driven B-cell lymphoma (PTLD) with rising EBV DNA. Besides chemotherapy for aggressive disease, what is a key initial management step?',
      options: [
        { id: 'a', text: 'Intensify immunosuppression' },
        { id: 'b', text: 'Start lifelong aciclovir prophylaxis alone' },
        { id: 'c', text: 'Reduce immunosuppression and consider rituximab' },
        { id: 'd', text: 'Begin primaquine' },
      ],
      answerId: 'c',
      explanation: 'PTLD is driven by loss of T-cell control over EBV-infected B cells. Reducing immunosuppression restores that control, and rituximab (anti-CD20) targets the proliferating B cells.',
      tests: 'treatment',
    },
  ],
};

export default hhlEbvAssociatedDiseases;
