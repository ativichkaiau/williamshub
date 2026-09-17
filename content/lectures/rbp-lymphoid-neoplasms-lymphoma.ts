import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpLymphoidNeoplasmsLymphoma: Lecture = {
  id: 'rbp-lymphoid-neoplasms-lymphoma',
  title: 'Lymphoid Neoplasms & Lymphoma',
  system: 'heme',
  source: 'Ch 11 — Hematopoietic and Lymphoid Systems',
  updated: '2026-09-16',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'Ch 11 Hematopoietic and Lymphoid Systems' },
    { kind: 'mechanism', label: 'Arrest at a stage of normal B-cell development' },
    { kind: 'disease', label: 'Hodgkin & non-Hodgkin lymphoma' },
    { kind: 'investigation', label: 'Immunophenotype & translocation as diagnosis' },
  ],

  highYield: [
    '**Every lymphoid tumour is a normal lymphocyte frozen at one stage of its development, so learn the developmental map once and the immunophenotypes stop being a list.** The normal route runs: marrow precursor (**TdT positive**, CD19, CD10) — naive B cell in the **mantle zone** (surface IgM and IgD, often **CD5 positive**) — **germinal centre** cell (**CD10 and BCL6 positive**, BCL2 switched **OFF** so the cell can be deleted if its new receptor is useless) — memory or **marginal zone** cell — **plasma cell** (**CD138 positive**, CD20 and surface Ig **lost**). Read the tumours straight off that line: lymphoblastic tumours are **TdT positive** because they never left the marrow compartment; **mantle cell lymphoma** is CD5 positive with **cyclin D1**; **follicular lymphoma** and **Burkitt** are CD10 and BCL6 positive because they are germinal-centre cells; myeloma is CD138 positive and CD20 negative. The phenotype is not a label to memorise, it is the tumour telling you its address. Nodal anatomy is in [[hhl-lymph-node-histology]].',
    '**Architecture and pace are inherited from the parent cell too, which is why the low-power pattern is diagnostic before any stain.** A follicle-centre cell builds follicles, so follicular lymphoma is **nodular** — but the nodules are crowded, same-sized, lack the dark-and-light **polarity** of a reactive germinal centre and contain **no tingible-body macrophages**, because nothing inside them is dying. A marginal-zone cell sits at the margins and infiltrates epithelium, giving the **lymphoepithelial lesions** of **MALT lymphoma**. A mantle-zone cell expands the mantle into a vaguely nodular sheet of monotonous small cleaved cells. And because germinal-centre cells are normally the fastest-dividing cells in the body, a germinal-centre tumour with a **proliferation** lesion runs at that native speed: Burkitt has a **Ki-67 near 100%** and a doubling time of about **24–48 hours**.',
    '**Hodgkin versus non-Hodgkin is not a filing convention, it is two different biologies, and the staging and treatment consequences fall straight out.** Hodgkin lymphoma is roughly **10%** of lymphomas, arises in a single node group (**cervical or supraclavicular** most often) and spreads **contiguously** to the anatomically next group, so about **two-thirds** are stage I or II at diagnosis; extranodal and marrow disease are late and uncommon. Its other peculiarity is that the tumour is mostly **reaction**: neoplastic **Reed-Sternberg** cells are typically **under 5%** of the cellularity, floating in a background of reactive lymphocytes, eosinophils, plasma cells and histiocytes that they recruit with **IL-5, IL-10, IL-13 and TGF-beta**. Non-Hodgkin lymphoma spreads **unpredictably** through the blood, presents **stage III or IV** in the majority, and involves **extranodal sites** (gut, Waldeyer ring, CNS, testis, skin) and **marrow** far more often. Hence: map Hodgkin and irradiate the map; assume non-Hodgkin is everywhere and treat systemically. Clinical staging and therapy sit in [[hhl-hodgkin-lymphoma]] and [[hhl-non-hodgkin-lymphoma]].',
    '**The Reed-Sternberg cell is identified by an immunophenotype that is the exact inverse of a B-cell lymphoma, and the negative marker does most of the work.** The classic cell is large with **two mirror-image nuclei**, each carrying a single huge inclusion-like eosinophilic nucleolus — the **owl-eye**. Classical Hodgkin cells are **CD15 and CD30 positive** with **CD45 negative** and CD20 absent or weak; a large-cell non-Hodgkin lymphoma is the reverse, **CD45 and CD20 positive, CD15 and CD30 negative**. **Nodular lymphocyte-predominant** Hodgkin is the deliberate exception: its **popcorn** cells are **CD20 and CD45 positive** and **CD15 and CD30 negative**, which is why it behaves like an indolent B-cell lymphoma. Subtypes of classical disease: **nodular sclerosis** is commonest at about **65–70%** (collagen bands, **lacunar cells**, young women, mediastinal mass), then **mixed cellularity** (about **20–25%**, older men, **EBV positive in around 70%**, HIV-associated), with lymphocyte-rich and **lymphocyte-depleted** (worst outcome) rare. **B symptoms** have exact definitions and change the stage suffix: fever above **38 degrees C**, **drenching** night sweats, and unexplained weight loss of more than **10%** of body weight over **6 months**. Pruritus and alcohol-induced nodal pain are classic but are not B symptoms.',
    '**The counterintuitive rule of non-Hodgkin lymphoma: indolent disease is incurable and aggressive disease is curable, because chemotherapy kills cells that are dividing.** **Follicular lymphoma** and **CLL/SLL** grow slowly, respond partially, relapse indefinitely and run a median survival of roughly **8–12 years** without cure; **diffuse large B-cell lymphoma** kills within months untreated yet is **cured in about 60%** with rituximab-based combination chemotherapy, and **Burkitt** is cured in the majority with short intensive regimens. The translocations explain why, and each one predicts a behaviour rather than just a name. **t(14;18)** drops **BCL2** beside the **IgH enhancer** in follicular lymphoma: this is an **ANTI-APOPTOTIC** lesion, so cells **accumulate** instead of proliferating — low Ki-67, painless nodes that wax and wane for years, and about **30–40%** eventually **transform** into diffuse large B-cell lymphoma. **t(8;14)** drops **MYC** beside IgH in Burkitt: a **PROLIFERATION** lesion, hence the near-100% Ki-67 and the **starry-sky** macrophages mopping up apoptotic debris. **t(11;14)** drives **cyclin D1** in mantle cell lymphoma, which is the worst of both — aggressive behaviour with poor curability.',
    '**Burkitt lymphoma comes in three clinical forms, and the virus list beyond it is short enough to own outright.** **Endemic (African)** Burkitt involves the **jaw and facial bones** in children and is **EBV positive in over 90%**; **sporadic** Burkitt presents as an **ileocaecal or abdominal** mass and is EBV positive in only about **15–20%**; the **immunodeficiency-associated** form occurs in HIV, often as the presenting illness. All three carry a MYC translocation, so the cure depends on intensive therapy given with **tumour lysis** prophylaxis. Elsewhere, **EBV** drives mixed-cellularity Hodgkin, **post-transplant lymphoproliferative disorder** (the lesion is really failed T-cell surveillance, and it can regress when immunosuppression is reduced) and **extranodal NK/T-cell lymphoma, nasal type**. **HTLV-1** causes **adult T-cell leukaemia/lymphoma** in Japan and the Caribbean, with **flower cells**, **lytic bone lesions and hypercalcaemia**. **Helicobacter pylori** drives **gastric MALT lymphoma**, which is the one lymphoma treated with **antibiotics** — eradication alone induces remission in roughly **70–80%**, and failure predicts a **t(11;18)** translocation that has made the tumour antigen-independent.',
  ],

  mechanism: {
    title: 'From a normal germinal centre to a frozen clone',
    steps: [
      { id: 's1', label: 'A naive B cell enters a follicle and forms a germinal centre, switching BCL2 off so it can be deleted if its new receptor fails', detail: 'Germinal-centre B cells are the only normal cells designed to die by default. That design is what the tumours subvert.', emphasis: 'normal' },
      { id: 's2', label: 'AID cuts the immunoglobulin loci for somatic hypermutation and class switching — physiological double-strand breaks', emphasis: 'normal' },
      { id: 's3', label: 'A break misjoins, and the powerful IgH enhancer now drives whatever oncogene landed beside it', emphasis: 'key' },
      { id: 's4', label: 'BCL2 under IgH blocks apoptosis: germinal-centre cells that should have died survive and ACCUMULATE — follicular lymphoma, nodular, CD10 and BCL6 positive, low Ki-67', emphasis: 'key' },
      { id: 's5', label: 'MYC under IgH instead removes the brake on cycling: cells PROLIFERATE — Burkitt, starry sky, Ki-67 near 100%', emphasis: 'danger' },
      { id: 's6', label: 'Further hits transform the indolent clone into diffuse large B-cell lymphoma, or a crippled germinal-centre cell survives on NF-kB signalling and recruits the inflammatory background of Hodgkin disease', detail: 'Same origin, three destinations — accumulation, proliferation, or a tumour that hides inside its own reaction.', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Painless rubbery cervical or supraclavicular nodes with a widened mediastinum in a woman in her twenties', mechanism: 'Nodular sclerosis Hodgkin lymphoma arising in a single node group and spreading contiguously, so it is usually still localised when it becomes palpable', significance: 'key' },
    { sign: 'Pain in an involved node within minutes of drinking alcohol', mechanism: 'Classic for Hodgkin lymphoma; uncommon but close to specific, and it is not a B symptom, so it does not alter the stage', significance: 'supportive' },
    { sign: 'Fever above 38 degrees C, night sweats that soak the bedclothes, and loss of more than a tenth of body weight over six months', mechanism: 'Tumour-derived cytokines including IL-1, IL-6 and TNF. These are the B symptoms, and they add the B suffix to the stage and worsen prognosis', significance: 'key' },
    { sign: 'Painless lymphadenopathy that enlarges and shrinks spontaneously over years without treatment', mechanism: 'Follicular lymphoma. The lesion is anti-apoptotic rather than proliferative, so the mass reflects slow accumulation and partial spontaneous loss, not growth rate', significance: 'key' },
    { sign: 'A rapidly expanding jaw or orbital mass in an African child, visibly larger week to week', mechanism: 'Endemic Burkitt lymphoma with a MYC translocation; the doubling time of roughly one to two days is why the mass distorts the face so quickly', significance: 'key' },
    { sign: 'Generalised erythroderma with intense pruritus, palpable nodes and an atypical lymphocytosis', mechanism: 'Sezary syndrome, the leukaemic phase of mycosis fungoides — a CD4 positive T cell whose normal counterpart homes to skin, so the tumour does too', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Excisional node biopsy requested rather than fine-needle aspiration', meaning: 'Architecture is the diagnosis in lymphoma. Aspiration yields cells without the nodal pattern, so it cannot separate follicular lymphoma from reactive follicular hyperplasia, nor find the collagen bands of nodular sclerosis' },
    { clue: 'Nodular node in which the follicles stain BCL2 POSITIVE', meaning: 'Follicular lymphoma. Reactive germinal centres are BCL2 negative by design, so BCL2 in a follicle means t(14;18) has switched apoptosis off. Loss of polarity and absent tingible-body macrophages point the same way' },
    { clue: 'Large binucleate cells that are CD15 and CD30 positive but CD45 NEGATIVE', meaning: 'Reed-Sternberg cells of classical Hodgkin lymphoma. The absent CD45 is what excludes a large-cell non-Hodgkin lymphoma; CD20 and CD45 positive popcorn cells instead indicate nodular lymphocyte-predominant disease' },
    { clue: 'Sheets of intermediate-sized cells with a starry-sky pattern and a Ki-67 index approaching 100%', meaning: 'Burkitt lymphoma. The stars are macrophages ingesting apoptotic debris from a tumour dying almost as fast as it grows. Expect spontaneous and treatment-induced tumour lysis' },
    { clue: 'Nuclear cyclin D1 with CD5 co-expression and CD23 negative', meaning: 'Mantle cell lymphoma from t(11;14). CD5 is shared with CLL/SLL, so CD23 is the separator: CLL is CD5 and CD23 positive, mantle cell is CD5 positive and CD23 negative' },
    { clue: 'Flow cytometry showing a B-cell population expressing kappa only, with no lambda-expressing cells', meaning: 'Light-chain restriction proves clonality. A reactive population stays polyclonal at roughly two kappa to one lambda, so restriction converts a worrying node into a diagnosis' },
  ],

  treatment: [
    {
      logic: 'Stage Hodgkin lymphoma properly, because contiguous spread is what makes a stage worth having',
      detail: 'Contiguity means the **next** node group predicts the disease, so imaging defines a treatable field rather than a guess. Early-stage disease is treated with short combination chemotherapy plus **involved-site** radiotherapy and is cured in roughly **90%**; advanced disease uses longer systemic therapy. Because most patients are young and most are cured, the dominant clinical problem has become the **late effects**: secondary **AML and MDS** after alkylating agents, **breast and thyroid cancer** in an irradiated field, **bleomycin** lung fibrosis and **anthracycline** cardiomyopathy. That is the reasoning behind response-adapted protocols that drop radiotherapy when interim imaging clears.',
    },
    {
      logic: 'In non-Hodgkin lymphoma the growth rate sets the intent of treatment, not the urgency of the referral',
      detail: 'Because cytotoxics kill cycling cells, **pace predicts curability**. Asymptomatic low-burden **follicular lymphoma** is often best watched: early treatment does not extend life, and the intent when treatment does start is **control**, not cure. **Diffuse large B-cell lymphoma** is treated immediately with **curative** intent. **Burkitt** demands short intensive therapy with **CNS prophylaxis** and aggressive **tumour lysis** prevention — hydration plus **rasburicase**, since a tumour with a Ki-67 near 100% dumps potassium, phosphate and urate the moment it is hit. The plasma-cell end of the same developmental line is covered in [[rbp-plasma-cell-neoplasms-spleen]].',
    },
  ],

  mnemonics: [
    {
      hook: 'The phenotype is the address',
      expansion: [
        'TdT positive — still in the marrow compartment, a precursor tumour',
        'CD5 with cyclin D1 — mantle zone, so mantle cell lymphoma',
        'CD5 with CD23 — the other CD5 tumour, CLL and SLL',
        'CD10 with BCL6 — germinal centre, so follicular, Burkitt or germinal-centre DLBCL',
        'CD138 without CD20 — the line has finished, so plasma cell',
      ],
    },
    {
      hook: 'Three translocations, three behaviours',
      expansion: [
        '14 and 18 is BCL2 — anti-apoptotic, so cells accumulate; indolent, nodular, incurable',
        '8 and 14 is MYC — pro-proliferative, so cells cycle; starry sky, Ki-67 near 100%, curable',
        '11 and 14 is cyclin D1 — cell cycle entry in a mantle cell; aggressive and hard to cure',
        'Every one of them parks an oncogene beside the immunoglobulin heavy-chain enhancer',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'A florid nodular lymph node — reactive hyperplasia or follicular lymphoma',
      wrongInstinct: 'The node is packed with follicles and looks alarmingly cellular, so it must be lymphoma',
      rightAnswer: 'Stain BCL2. Reactive germinal centres are BCL2 negative and contain tingible-body macrophages with light and dark zone polarity; follicular lymphoma is BCL2 positive, monotonous, unpolarised and has no tingible-body macrophages',
      why: 'A germinal centre that refuses to die is a tumour — reactive centres are built to delete their own cells, so BCL2 protein inside a follicle can only come from t(14;18)',
    },
    {
      questionCategory: 'Growth rate versus curability in non-Hodgkin lymphoma',
      wrongInstinct: 'The aggressive lymphoma has the worse prognosis, so the indolent one must be the one that can be cured',
      rightAnswer: 'The reverse. Diffuse large B-cell lymphoma and Burkitt are potentially curable; follicular lymphoma and CLL are not',
      why: 'Chemotherapy kills cells that divide, and BCL2 keeps cells that do not — an anti-apoptotic tumour has nothing for a cytotoxic drug to catch',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 58-year-old has painless cervical nodes that have waxed and waned for four years. The node shows crowded, same-sized follicles without tingible-body macrophages; cells are CD10 and BCL6 positive, BCL2 positive, Ki-67 about 10%. What best explains the tumour mass in this patient?',
      options: [
        { id: 'a', text: 'A MYC translocation is driving rapid proliferation of germinal-centre cells' },
        { id: 'b', text: 't(14;18) has placed BCL2 under the IgH enhancer, so germinal-centre cells that should have been deleted survive and accumulate' },
        { id: 'c', text: 'Cyclin D1 overexpression from t(11;14) is accelerating passage through the G1 checkpoint' },
        { id: 'd', text: 'Loss of CD45 has allowed the cells to evade cytotoxic T-cell recognition' },
      ],
      answerId: 'b',
      explanation: 'Follicular lymphoma is an accumulation disease, not a proliferation disease. Normal germinal-centre B cells switch BCL2 off so that a cell with a useless or self-reactive receptor can be deleted; t(14;18) puts BCL2 under the immunoglobulin heavy-chain enhancer and turns it permanently on. The consequences all follow: BCL2 positive follicles (which is the stain that separates this from reactive hyperplasia), absent tingible-body macrophages because nothing is dying, a low Ki-67, indolent waxing and waning nodes, and poor curability, since cytotoxic drugs need dividing cells.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A 24-year-old woman has cervical nodes and a mediastinal mass. Biopsy shows broad collagen bands, lacunar cells and scattered large binucleate cells with owl-eye nucleoli making up under 5% of the cellularity. Which immunophenotype confirms the diagnosis?',
      options: [
        { id: 'a', text: 'CD45 positive, CD20 positive, CD15 negative, CD30 negative' },
        { id: 'b', text: 'CD15 positive, CD30 positive, CD45 negative' },
        { id: 'c', text: 'TdT positive, CD10 positive, CD19 positive' },
        { id: 'd', text: 'CD138 positive, CD20 negative, with kappa light-chain restriction' },
      ],
      answerId: 'b',
      explanation: 'Classical Hodgkin lymphoma, nodular sclerosis subtype — the commonest at roughly two-thirds of cases, and typical of young women with mediastinal disease. Reed-Sternberg cells are CD15 and CD30 positive with CD45 absent, which is the exact inverse of a large B-cell non-Hodgkin lymphoma (option a) and is the single most useful discriminator when the malignant cells are this sparse. Option a would instead fit nodular lymphocyte-predominant Hodgkin disease or a B-cell NHL, option c is a precursor lymphoblastic tumour and option d is a plasma-cell neoplasm. The fact that the tumour cells are a small minority inside a cytokine-recruited reactive infiltrate is the reason a bulky Hodgkin node is mostly reaction.',
      tests: 'investigation',
    },
    {
      id: 'q3',
      stem: 'A 7-year-old in equatorial Africa has a rapidly enlarging mandibular mass. Biopsy shows sheets of intermediate-sized cells with a starry-sky appearance and a Ki-67 near 100%. Which statement about this tumour is correct?',
      options: [
        { id: 'a', text: 'A MYC translocation drives relentless cycling; the tumour is EBV positive in over 90% of endemic cases and is potentially curable with intensive chemotherapy' },
        { id: 'b', text: 'The starry-sky appearance reflects the tumour cells themselves and indicates a low growth fraction' },
        { id: 'c', text: 'The high proliferation rate makes the tumour inherently resistant to cytotoxic chemotherapy' },
        { id: 'd', text: 'Contiguous nodal spread means the disease is almost always confined to a single node group at diagnosis' },
      ],
      answerId: 'a',
      explanation: 'Endemic Burkitt lymphoma. t(8;14) places MYC beside the IgH enhancer, and unlike the anti-apoptotic lesion of follicular lymphoma this is a pure proliferation lesion, hence a Ki-67 approaching 100% and a doubling time of one to two days. The stars are benign macrophages ingesting the debris of tumour cells that are dying almost as fast as they divide, so the pattern marks a very high growth fraction, not a low one. Because chemotherapy kills cycling cells, that speed makes the tumour curable rather than resistant, provided tumour lysis is anticipated. Contiguous spread is a feature of Hodgkin lymphoma, not Burkitt.',
      tests: 'disease',
    },
  ],
};

export default rbpLymphoidNeoplasmsLymphoma;
