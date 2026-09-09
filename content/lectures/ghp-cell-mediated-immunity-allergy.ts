import type { Lecture } from '../../lib/types';

export const ghpCellMediatedImmunityAllergy: Lecture = {
  id: 'ghp-cell-mediated-immunity-allergy',
  title: 'Cell-Mediated Immunity, MHC Restriction & Hypersensitivity',
  system: 'immune',
  source: 'Ch 34 — Resistance to Infection II — Immunity & Allergy',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Immunology' },
    { kind: 'lecture', label: 'Ch 34 Immunity & Allergy' },
    { kind: 'mechanism', label: 'MHC restriction' },
    { kind: 'exam', label: 'Hypersensitivity I–IV' },
  ],

  highYield: [
    '**A T cell can only see a peptide that some other cell has already chewed up and displayed.** The **TCR** never binds free antigen — it needs a **processed linear peptide** sitting in the groove of an **MHC** molecule, which is exactly why the cell-mediated arm reaches intracellular pathogens that antibody cannot touch. Contrast the B cell, which grips **native folded** antigen directly; the two-arm split is laid out in [[ghp-innate-adaptive-overview]]. Activation needs three signals: **TCR–peptide–MHC**, then **B7–CD28** costimulation, then a **cytokine** that sets the subset. Signal 1 without signal 2 produces **anergy**, not activation — the design that stops autoimmunity by accident.',
    '**MHC class I versus class II is really a question of which cell is being audited.** **Class I** sits on **every nucleated cell**, loads **endogenous cytosolic** peptides through the **proteasome and TAP**, and reports to **CD8** cytotoxic cells — a continuous declaration by every cell of what it is currently manufacturing. **Class II** is restricted to **professional APCs** — dendritic cells, macrophages and B cells — loads **exogenous** peptide from the endosome, and reports to **CD4** helper cells. The arithmetic is the memory hook: **CD8 with MHC I** and **CD4 with MHC II** each multiply to **8**.',
    '**Three T-cell jobs: help, kill, restrain.** **CD4 helper** cells command everything — **Th1** (**IFN-γ**) activates macrophages against intracellular organisms and drives delayed hypersensitivity, **Th2** (**IL-4, IL-5, IL-13**) drives **IgE** and eosinophils, **Th17** pulls neutrophils to mucosal surfaces, and **Tfh** licenses the germinal centre. **CD8 cytotoxic** cells kill by **perforin and granzyme** and by **Fas–FasL**, both routes ending in **apoptosis** rather than a lysis that would spill viable virus. **Regulatory T cells** — **CD4 positive, CD25 positive, FoxP3 positive** — suppress through **IL-10 and TGF-β**; losing FoxP3 causes fulminant multi-organ autoimmunity, which shows how actively tolerance must be maintained.',
    '**Thymic selection is two opposite tests and a thymocyte must pass both.** In the **cortex**, **positive selection** keeps only cells whose TCR binds **self-MHC weakly** — failure is death by neglect, and this step is what creates **MHC restriction** in the first place. In the **medulla**, **negative selection** deletes anything binding **self-peptide too strongly**, with **AIRE** forcing medullary epithelium to express **tissue-restricted antigens** so that pancreatic and thyroid proteins are audited inside the thymus. Over **95%** of thymocytes die there. Strongly self-reactive CD4 cells that survive are diverted into **Treg**, and the remaining escapees are held peripherally by **anergy** and suppression — expanded in [[t-cell-development-thymic-selection]].',
    '**Hypersensitivity types I to III are antibody-mediated and type IV is not — and the timing usually gives the answer away.** **Type I**: **IgE** on mast cells, **minutes**. **Type II**: **IgG or IgM against an antigen already fixed** in a cell membrane or basement membrane, killing by complement lysis, opsonisation or ADCC, or simply stimulating or blocking a receptor; immunofluorescence is **linear**. **Type III**: **soluble immune complexes** formed in the fluid phase and then **deposited**, consuming complement and pulling in neutrophils; immunofluorescence is **granular**, and serum sickness appears at **7–14 days**. **Type IV**: **T cell** mediated with **no antibody at all**, peaking at **48–72 hours**. Detail lives in [[hypersensitivity-type-1-2]] and [[hypersensitivity-type-3-4]].',
    '**Anaphylaxis is one mechanism producing three simultaneous physiological failures.** Sensitisation loads **IgE** onto **FcεRI** on mast cells and is entirely silent. Re-exposure **cross-links** that IgE, and degranulation releases **preformed histamine and tryptase** within minutes, followed by newly synthesised **leukotrienes and prostaglandins**, and then a **late phase at 4–12 hours** driven by eosinophils. The result is **vasodilation with capillary leak** — hypotension and angio-oedema — plus **bronchoconstriction**. That is why **adrenaline** is first-line and an antihistamine is not: it is the only agent that reverses all three at once.',
  ],

  mechanism: {
    title: 'Peptide to effector — and the Th2 route into allergy',
    steps: [
      { id: 's1', label: 'APC presents processed peptide on MHC II to a CD4 cell', emphasis: 'key' },
      { id: 's2', label: 'B7 to CD28 costimulation licenses activation; without it, anergy', emphasis: 'key' },
      { id: 's3', label: 'A cytokine signal polarises the cell — Th1, Th2, Th17 or Tfh', emphasis: 'key' },
      { id: 's4', label: 'Th2 IL-4 drives the B cell to class switch to IgE' },
      { id: 's5', label: 'IgE loads FcεRI on mast cells — sensitisation, clinically silent', emphasis: 'key' },
      { id: 's6', label: 'Re-exposure cross-links it: histamine and tryptase, then leukotrienes', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Hypotension, stridor and urticaria within minutes of a drug or a sting', mechanism: 'IgE cross-linking on mast cells with histamine release and capillary leak', significance: 'key' },
    { sign: 'Induration read at 48 to 72 hours after intradermal tuberculin', mechanism: 'Type IV reaction requiring T-cell recruitment and macrophage activation', significance: 'key' },
    { sign: 'Fever, urticaria, arthralgia and haematuria 10 days after antiserum', mechanism: 'Type III immune complex deposition with complement consumption', significance: 'key' },
    { sign: 'Linear immunofluorescence along the glomerular basement membrane', mechanism: 'Type II antibody bound to an antigen already fixed in the tissue', significance: 'key' },
    { sign: 'Granular lumpy deposits of immunoglobulin and C3 in capillary walls', mechanism: 'Type III complexes formed in the circulation and then trapped', significance: 'key' },
    { sign: 'Absent thymic shadow with opportunistic infection from the first weeks', mechanism: 'Failed T-cell development — both killing and T-dependent antibody are lost', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Serum tryptase peaking 1 to 2 hours after an unexplained collapse', meaning: 'Retrospective confirmation of mast cell degranulation in suspected anaphylaxis' },
    { clue: 'Low C3 and C4 during an illness with rash, arthralgia and nephritis', meaning: 'Complement consumed by circulating immune complexes — type III' },
    { clue: 'Positive direct antiglobulin (Coombs) test', meaning: 'Antibody or complement bound to the red cell surface — type II' },
    { clue: 'Raised allergen-specific IgE or a positive skin prick test', meaning: 'Sensitisation only — not by itself proof of clinical allergy' },
    { clue: 'Absent CD3 positive T cells with normal B cell numbers', meaning: 'T-cell developmental block; antibody responses fail too because T help is gone' },
    { clue: 'Interferon-γ released on exposure to mycobacterial antigen in vitro', meaning: 'Memory Th1 response — the laboratory equivalent of the tuberculin reaction' },
  ],

  treatment: [
    {
      logic: 'Adrenaline first in anaphylaxis, because nothing else reverses all three failures',
      detail: 'Give **intramuscular adrenaline** into the **anterolateral thigh** without waiting for confirmation: **α1** restores vascular tone and reverses **angio-oedema**, **β2** relieves **bronchospasm**, and **β** stimulation dampens further mediator release. Antihistamines and corticosteroids treat **neither the hypotension nor the airway** in time — steroids are aimed at the **late phase at 4–12 hours**, not at the emergency in front of you.',
    },
    {
      logic: 'Name the hypersensitivity type first, because the type selects the drug',
      detail: 'A **type IV** process needs the **T cell** suppressed — corticosteroids and calcineurin inhibitors. A **type II or III** process needs the **antibody or the complex** removed or its production stopped — plasma exchange, **B-cell depletion**, or steroids. A **type I** process needs **adrenaline** acutely and **allergen avoidance** or desensitisation long term. Choosing the drug before naming the mechanism is how the wrong agent gets given.',
    },
  ],

  mnemonics: [
    {
      hook: 'ACID — the four hypersensitivities in order',
      expansion: ['Anaphylactic: type I, IgE on mast cells, minutes', 'Cytotoxic: type II, antibody against a fixed cell antigen, linear staining', 'Immune complex: type III, soluble complexes deposited, granular staining, 7 to 14 days', 'Delayed: type IV, T cells and no antibody, 48 to 72 hours'],
    },
    {
      hook: 'Rule of 8 for MHC restriction',
      expansion: ['CD8 times MHC class I equals 8', 'CD4 times MHC class II equals 8', 'Class I on every nucleated cell; class II only on professional APCs'],
    },
  ],

  traps: [
    {
      questionCategory: 'Telling type II apart from type III',
      wrongInstinct: 'Both are antibody-mediated, so the distinction is academic',
      rightAnswer: 'Type II antibody binds an antigen already fixed in tissue; type III complexes form in the fluid phase and are then deposited',
      why: 'Linear immunofluorescence means type II, granular lumpy deposits mean type III',
    },
    {
      questionCategory: 'Why type IV is delayed',
      wrongInstinct: 'It takes that long for the antibody to be produced',
      rightAnswer: 'There is no antibody — T cells must be recruited and expanded, and macrophages then activated',
      why: 'Preformed mediators act in minutes; cellular recruitment takes 48 to 72 hours',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A virus is replicating inside a hepatocyte. Which pathway allows the immune system to detect and destroy that infected cell?',
      options: [
        { id: 'a', text: 'Viral peptides presented on MHC II to CD4 helper cells' },
        { id: 'b', text: 'Cytosolic peptides processed by the proteasome, loaded onto MHC I and read by CD8 cytotoxic cells' },
        { id: 'c', text: 'Native viral protein bound directly by the T-cell receptor' },
        { id: 'd', text: 'IgE bound to FcεRI on tissue mast cells' },
      ],
      answerId: 'b',
      explanation: 'A hepatocyte is not a professional APC, so it cannot use MHC II. Every nucleated cell does express MHC I, which samples endogenous cytosolic proteins through the proteasome and TAP and displays them to CD8 cells. This is the whole point of class I: it lets any cell declare that it has been compromised from within.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Ten days after receiving equine antivenom a patient develops fever, urticaria, arthralgia and haematuria, with low C3 and C4. Which hypersensitivity type is this?',
      options: [
        { id: 'a', text: 'Type I' },
        { id: 'b', text: 'Type II' },
        { id: 'c', text: 'Type III' },
        { id: 'd', text: 'Type IV' },
      ],
      answerId: 'c',
      explanation: 'Serum sickness. The latency of 7 to 14 days is the time taken to mount a primary antibody response against a foreign protein that is still circulating, so complexes form in the fluid phase and deposit in vessels, joints and glomeruli. Complement consumption gives the low C3 and C4, which is the discriminator from type II.',
      tests: 'disease',
    },
    {
      id: 'q3',
      stem: 'Why is adrenaline, rather than an antihistamine, first-line in anaphylaxis?',
      options: [
        { id: 'a', text: 'It blocks histamine receptors more completely than an antihistamine does' },
        { id: 'b', text: 'It reverses vasodilation, capillary leak and bronchoconstriction at once and limits further mediator release' },
        { id: 'c', text: 'It prevents the late-phase reaction at 4 to 12 hours' },
        { id: 'd', text: 'It neutralises IgE already bound to mast cells' },
      ],
      answerId: 'b',
      explanation: 'Anaphylaxis is three failures at once. Adrenaline covers all of them: alpha-1 vasoconstriction restores pressure and reduces angio-oedema, beta-2 relieves bronchospasm, and beta stimulation dampens further degranulation. An antihistamine addresses only the itch and urticaria and does nothing for the airway or the blood pressure.',
      tests: 'treatment',
    },
  ],
};

export default ghpCellMediatedImmunityAllergy;
