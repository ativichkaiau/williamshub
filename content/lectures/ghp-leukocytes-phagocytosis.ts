import type { Lecture } from '../../lib/types';

export const ghpLeukocytesPhagocytosis: Lecture = {
  id: 'ghp-leukocytes-phagocytosis',
  title: 'Leukocytes, Phagocytosis & the Macrophage System',
  system: 'immune',
  source: 'Ch 33 — Resistance to Infection I — Leukocytes & Inflammation',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Immunology' },
    { kind: 'lecture', label: 'Ch 33 Leukocytes & Inflammation' },
    { kind: 'mechanism', label: 'Killing machinery' },
    { kind: 'exam', label: 'Respiratory burst' },
  ],

  highYield: [
    '**Neutrophils arrive first and die there; macrophages arrive later and persist.** Neutrophils are **mature and mobile in the blood**, reach a site within minutes to hours, phagocytose a limited number of bacteria and then die — becoming the bulk of **pus**. Monocytes arrive over **hours to days**, mature into **macrophages**, and can phagocytose far more, handle larger particles, and survive to present antigen.',
    '**Lifespans explain the tempo of every blood count change.** Neutrophils circulate for only about **6 hours** before entering tissue, so marrow suppression drops the count within days and **G-CSF** raises it quickly. Macrophages persist for **months**. This is also why a **left shift** — band forms in the blood — indicates the marrow releasing immature cells under demand.',
    '**Getting to the site is a four-step sequence, and each step has a named defect.** **Margination and rolling** (selectins) → **firm adhesion** (integrins, **LFA-1/ICAM-1**) → **diapedesis** between endothelial cells → **chemotaxis** along a gradient. Defective **integrins** cause leukocyte adhesion deficiency, with recurrent infection, **no pus**, and classically delayed umbilical cord separation.',
    '**Opsonisation is what makes phagocytosis efficient, and the two opsonins are the ones to know.** **IgG** (via Fc receptors) and **C3b** (via complement receptors) coat the organism so the phagocyte can grip it. Encapsulated bacteria resist phagocytosis precisely because their capsule prevents this — which is why splenectomised patients are vulnerable, and why the relevant vaccines are **conjugated** to force a T-dependent IgG response, as in [[complement-functions-regulation]].',
    '**Killing is oxygen-dependent and oxygen-independent, and the respiratory burst is the powerful arm.** **NADPH oxidase** generates superoxide, converted to **hydrogen peroxide**, and **myeloperoxidase** then uses H₂O₂ with chloride to make **hypochlorite**. Failure of NADPH oxidase gives **chronic granulomatous disease** — recurrent infection with **catalase-positive** organisms and granuloma formation because the organism cannot be cleared.',
    '**The monocyte-macrophage (reticuloendothelial) system is a distributed filter.** Tissue-resident macrophages sit where pathogens enter or blood is filtered: **Kupffer cells** in liver sinusoids, alveolar macrophages, splenic and nodal macrophages, and **microglia**. The spleen filters blood-borne encapsulated organisms specifically, which is why its loss is a defined immunodeficiency.',
  ],

  mechanism: {
    title: 'Find it, stick to it, eat it, kill it',
    steps: [
      { id: 's1', label: 'Selectins mediate rolling along activated endothelium', emphasis: 'key' },
      { id: 's2', label: 'Integrins (LFA-1/ICAM-1) produce firm adhesion', emphasis: 'key' },
      { id: 's3', label: 'Diapedesis between endothelial cells into tissue' },
      { id: 's4', label: 'Chemotaxis along C5a, bacterial peptides and chemokines' },
      { id: 's5', label: 'Opsonisation by IgG and C3b permits engulfment', emphasis: 'key' },
      { id: 's6', label: 'NADPH oxidase respiratory burst → superoxide → H₂O₂ → hypochlorite', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Recurrent infections with no pus and delayed cord separation', mechanism: 'Integrin defect preventing firm adhesion and diapedesis', significance: 'key' },
    { sign: 'Recurrent catalase-positive infections with granulomas', mechanism: 'NADPH oxidase failure — chronic granulomatous disease', significance: 'key' },
    { sign: 'Overwhelming infection with encapsulated organisms after splenectomy', mechanism: 'Loss of splenic filtration of opsonised encapsulated bacteria', significance: 'key' },
    { sign: 'Left shift with band forms during severe bacterial infection', mechanism: 'Marrow releasing immature neutrophils to meet demand', significance: 'supportive' },
    { sign: 'Neutrophil count falling within days of marrow suppression', mechanism: 'Very short circulating lifespan of about 6 hours', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Abnormal nitroblue tetrazolium or dihydrorhodamine test', meaning: 'Defective respiratory burst — chronic granulomatous disease' },
    { clue: 'Neutrophilia with a left shift', meaning: 'Acute bacterial demand on the marrow' },
    { clue: 'Absent CD18 integrin expression on flow cytometry', meaning: 'Leukocyte adhesion deficiency' },
    { clue: 'Howell-Jolly bodies on a blood film', meaning: 'Hyposplenism — impaired filtration of encapsulated organisms' },
    { clue: 'Persistent monocytosis at a chronic inflammatory site', meaning: 'Macrophage-dominated late response' },
  ],

  treatment: [
    {
      logic: 'Match prophylaxis to the specific arm that has failed',
      detail: 'Adhesion and burst defects need **antibacterial and antifungal** cover aimed at catalase-positive organisms; asplenia needs vaccination against **encapsulated** organisms. Knowing which of the four steps is broken predicts the organisms.',
    },
    {
      logic: 'Use conjugate vaccines where opsonisation is the problem',
      detail: 'Polysaccharide capsules provoke a weak, T-independent response. **Conjugating** them to protein recruits T-cell help and yields durable **IgG**, restoring the opsonisation that phagocytes depend on.',
    },
  ],

  mnemonics: [
    { hook: 'Roll, stick, cross, crawl', expansion: ['Selectins → rolling', 'Integrins → firm adhesion', 'Diapedesis → crossing', 'Chemotaxis → crawling to the target'] },
    { hook: 'Two opsonins: IgG and C3b', expansion: ['Fc receptors bind IgG', 'Complement receptors bind C3b', 'Capsules defeat both unless antibody is present'] },
  ],

  traps: [
    {
      questionCategory: 'Absence of pus',
      wrongInstinct: 'No pus means the infection is mild',
      rightAnswer: 'It can indicate neutrophils cannot reach the site, as in adhesion deficiency',
      why: 'Pus is largely dead neutrophils, so its absence with severe infection is a clue to a migration defect',
    },
    {
      questionCategory: 'Why catalase-positive organisms in CGD',
      wrongInstinct: 'These organisms are simply more virulent',
      rightAnswer: 'Catalase degrades the organism\u2019s own hydrogen peroxide, which the phagocyte could otherwise borrow',
      why: 'Catalase-negative organisms supply the H₂O₂ that the defective phagocyte lacks',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A child has recurrent bacterial infections, marked neutrophilia, no pus at infected sites, and delayed umbilical cord separation. Which step is defective?',
      options: [
        { id: 'a', text: 'Respiratory burst' },
        { id: 'b', text: 'Integrin-mediated firm adhesion and diapedesis' },
        { id: 'c', text: 'Complement C3 production' },
        { id: 'd', text: 'Antibody class switching' },
      ],
      answerId: 'b',
      explanation: 'Leukocyte adhesion deficiency. Neutrophils are produced and accumulate in blood, causing neutrophilia, but cannot adhere firmly or cross the endothelium, so no pus forms at infected sites and cord separation is delayed.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which enzyme deficiency underlies chronic granulomatous disease?',
      options: [
        { id: 'a', text: 'Myeloperoxidase' },
        { id: 'b', text: 'NADPH oxidase' },
        { id: 'c', text: 'Glucose-6-phosphate dehydrogenase' },
        { id: 'd', text: 'Lysozyme' },
      ],
      answerId: 'b',
      explanation: 'NADPH oxidase generates the superoxide that begins the respiratory burst. Without it phagocytes engulf organisms but cannot kill them efficiently, giving recurrent catalase-positive infections and granuloma formation.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'Why are asplenic patients particularly susceptible to encapsulated organisms?',
      options: [
        { id: 'a', text: 'The spleen produces most circulating neutrophils' },
        { id: 'b', text: 'The spleen filters opsonised encapsulated bacteria from the blood' },
        { id: 'c', text: 'The spleen synthesises complement C3b' },
        { id: 'd', text: 'Splenectomy causes neutropenia' },
      ],
      answerId: 'b',
      explanation: 'Capsules resist phagocytosis unless opsonised, and the spleen is the principal site where blood-borne opsonised encapsulated organisms are removed. Losing it removes that filter, hence vaccination against those organisms.',
      tests: 'mechanism',
    },
  ],
};

export default ghpLeukocytesPhagocytosis;
