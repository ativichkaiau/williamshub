import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpHypersensitivityReactions: Lecture = {
  id: 'rbp-hypersensitivity-reactions',
  title: 'Hypersensitivity Reactions & Autoimmunity',
  system: 'immune',
  source: 'Ch 4 — Diseases of the Immune System',
  updated: '2026-09-16',
  tags: [
    { kind: 'system', label: 'Pathology' },
    { kind: 'lecture', label: 'Ch 4 Diseases of the Immune System' },
    { kind: 'mechanism', label: 'Immune effectors, antigen location & tolerance' },
    { kind: 'exam', label: 'Hypersensitivity I–IV' },
  ],

  highYield: [
    '**Classify by the effector, not by the numeral, and the four types stop blurring.** **Type I** is **IgE on mast cells**. **Type II** is **IgG or IgM against an antigen already fixed** in a cell membrane or a basement membrane. **Type III** is **soluble immune complexes formed elsewhere** and then deposited. **Type IV** is **T cells with no antibody at all**. The cleanest single handle is transferability: types **I to III are antibody-mediated and transfer with serum**, while **type IV transfers only with lymphocytes** — take serum from a nickel-allergic patient, give it to a naive recipient, and nothing happens. Timing usually confirms it: **minutes** for type I, **hours to weeks** for types II and III, **48 to 72 hours** for type IV.',
    '**Type I is one antigen producing three failures on a fixed timetable.** **Th2** cytokines — **IL-4** for the class switch, **IL-5** for eosinophils, **IL-13** for mucus — load **IgE** onto **FcεRI** on mast cells, and that sensitising step is completely silent. Re-exposure **cross-links** adjacent IgE and releases **preformed histamine and tryptase within minutes**, then newly synthesised **leukotrienes C4, D4 and E4**, which on a molar basis are **several thousand times** more potent bronchoconstrictors than histamine, plus **PGD2** and **PAF**. A **late phase at 2 to 24 hours** brings eosinophils whose **major basic protein** does the tissue damage. The three failures are simultaneous — **vasodilation with capillary leak**, **bronchoconstriction** and **mucosal oedema** — which is the whole argument for **adrenaline** over an antihistamine. Effector detail sits in [[ghp-cell-mediated-immunity-allergy]].',
    '**Type II antibody does one of three things, and the third is the one exams hide behind.** First, **opsonisation and complement lysis**: the antibody coats a cell and it is eaten or lysed — autoimmune haemolytic anaemia, immune thrombocytopenia, transfusion reactions, haemolytic disease of the newborn, all **Coombs positive**. Second, **inflammation through Fc receptors and C5a**: antibody binds a fixed tissue antigen and recruits neutrophils that damage the tissue underneath — **anti-GBM disease**, **acute rheumatic fever**, **pemphigus vulgaris** against desmoglein. Third, and least intuitive, **antibody that changes function without destroying anything**: **Graves disease** stimulates the **TSH receptor**, **myasthenia gravis** blocks and internalises the **acetylcholine receptor**, **pernicious anaemia** neutralises **intrinsic factor**. In Graves the thyroid shows **hyperplasia, not lysis** — the antibody is an agonist, and no cell has to die for the patient to be ill.',
    '**Type II versus type III is decided by where the antigen was standing when the antibody found it.** A **fixed** antigen is bound **in situ** along a continuous structure, so immunofluorescence is **linear** and the disease is **organ-specific** — anti-GBM disease hits glomerulus and alveolus because both share the **α3 chain of collagen IV** and almost nothing else does. A **soluble** antigen forms complexes in the **fluid phase**, and the ones that matter are **small to intermediate** complexes made at **slight antigen excess**: large complexes are cleared by phagocytes, and small ones circulate until they lodge. They lodge wherever plasma is filtered or flow turns — **glomeruli, synovium, skin and small vessels** — which is exactly why type III disease is **systemic** and type II is not. Immunofluorescence is **granular**, complement is **consumed** so **C3 and C4 fall**, serum sickness declares itself at **7 to 14 days**, and a local Arthus reaction peaks at **4 to 12 hours**.',
    '**Type IV has two arms, and both take days because cells must be recruited before anything happens.** The **CD4 delayed-type** arm: an antigen-presenting cell re-presents antigen to a memory **Th1** cell, **IFN-γ** activates macrophages, and induration appears at **48 to 72 hours** — the tuberculin test is read at that interval for precisely this reason. If the antigen cannot be cleared, macrophages convert to **epithelioid and giant cells** and a **granuloma** forms over roughly **2 to 3 weeks**: tuberculosis, sarcoidosis, Crohn disease. The **CD8 cytotoxic** arm kills altered cells directly by **perforin and granzyme** and by **Fas–FasL**, which is how type 1 diabetes destroys beta cells and how viral hepatitis injures liver — the T cell, not the virus, does the damage. Contact dermatitis to **nickel** or **urushiol** is the everyday version: the metal or oil is a **hapten** modifying self-protein, and the rash appears a day or two after contact, never in minutes.',
    '**IgG crosses the placenta and IgE does not, which is why some hypersensitivity is inherited for three months and some never is.** Maternal **IgG** is actively transported from about **week 16**, so a **type II** antibody disease crosses the placenta: a baby born to a mother with **Graves disease** can be thyrotoxic, and a baby born to a mother with **myasthenia gravis** can be floppy — both **transient**, clearing as maternal IgG decays over roughly the first **3 months**. **IgE does not cross**, so no neonate is born allergic to peanut. Real diseases also refuse to stay in one box: lupus is **type III in the kidney and type II in the blood count at the same time**, and rheumatoid disease runs **type III and type IV together**. The classification names the mechanism of a lesion, not the identity of a patient. Tolerance failure upstream is in [[tolerance-autoimmunity-mechanisms]]; graft and amyloid consequences are in [[rbp-immunodeficiency-transplant-amyloid]].',
  ],

  mechanism: {
    title: 'Where the antigen sits decides the pattern of injury',
    steps: [
      {
        id: 's1',
        label: 'Antibody meets antigen — and the physical location of that antigen decides everything downstream',
        detail: 'One IgG molecule can cause organ-specific or systemic disease depending only on whether its target was already anchored in tissue.',
        emphasis: 'key',
      },
      {
        id: 's2',
        label: 'Fixed antigen: IgG binds in situ along a continuous structure',
        detail: 'Binding follows the antigen, so immunofluorescence is smooth and linear and only the organs carrying that antigen are hit.',
        emphasis: 'key',
      },
      {
        id: 's3',
        label: 'That bound antibody then lyses, inflames, or merely modulates a receptor',
        detail: 'Complement lysis and opsonisation destroy the cell; Fc receptors and C5a recruit neutrophils; or the antibody simply switches a receptor on or off and the tissue stays intact.',
        emphasis: 'key',
      },
      {
        id: 's4',
        label: 'Soluble antigen instead: complexes assemble in the fluid phase at slight antigen excess',
        detail: 'Large complexes are cleared by splenic and hepatic phagocytes; the small to intermediate ones are poorly cleared and stay in circulation.',
        emphasis: 'normal',
      },
      {
        id: 's5',
        label: 'Those complexes deposit wherever plasma is filtered or flow turns',
        detail: 'Glomerular capillaries, synovium, skin and small vessel branch points — a filtration map, not an organ preference, which is why the disease is systemic.',
        emphasis: 'danger',
      },
      {
        id: 's6',
        label: 'Complement is consumed and neutrophil enzymes destroy the vessel wall',
        detail: 'Granular deposits, fibrinoid necrosis, falling C3 and C4 — the serological signature of active immune-complex disease.',
        emphasis: 'danger',
      },
    ],
  },

  examFindings: [
    {
      sign: 'Hypotension, stridor and urticaria within minutes of a sting, drug or food',
      mechanism: 'Mast cell degranulation releasing histamine, then leukotrienes — vasodilation, capillary leak and bronchoconstriction together',
      significance: 'key',
    },
    {
      sign: 'Smooth linear IgG along the glomerular and alveolar basement membrane, with haemoptysis and haematuria',
      mechanism: 'Antibody against the alpha-3 chain of collagen IV, an antigen already fixed in both membranes — type II anti-GBM disease',
      significance: 'key',
    },
    {
      sign: 'Coarse granular deposits of IgG and C3 in capillary walls with fibrinoid necrosis',
      mechanism: 'Circulating immune complexes trapped at a filtration site, then complement fixation — type III',
      significance: 'key',
    },
    {
      sign: 'Fever, urticaria, arthralgia and haematuria 7 to 14 days after antivenom or a beta-lactam, with low C3 and C4',
      mechanism: 'Serum sickness — the latency is the time taken to mount an antibody response against the injected antigen',
      significance: 'key',
    },
    {
      sign: 'Induration read at 48 to 72 hours after intradermal tuberculin, with no antibody detectable',
      mechanism: 'Memory Th1 cells recruiting and activating macrophages — type IV, and the delay is the recruitment time',
      significance: 'key',
    },
    {
      sign: 'Neonatal tachycardia and goitre resolving by three months in the baby of a mother with Graves disease',
      mechanism: 'Maternal stimulating IgG crossed the placenta; the baby makes none of its own, so the disease decays with the antibody',
      significance: 'supportive',
    },
  ],

  investigations: [
    {
      clue: 'Direct antiglobulin (Coombs) test positive',
      meaning: 'Antibody or complement is already sitting on the red cell surface — type II. The indirect test finds free antibody in serum instead, which is the screening question, not the diagnostic one.',
    },
    {
      clue: 'Serum tryptase peaking 1 to 2 hours after an unexplained collapse',
      meaning: 'Retrospective proof that mast cells degranulated. Sample within about 3 hours; a normal level taken late does not exclude anaphylaxis, which is why timing of the draw is recorded.',
    },
    {
      clue: 'C3 and C4 both low during a febrile illness with rash, arthralgia and nephritis',
      meaning: 'Complement is being consumed by immune complexes — type III. Isolated low C4 with normal C3 points instead at the classical pathway alone, as in hereditary angioedema or cryoglobulinaemia.',
    },
    {
      clue: 'The immunofluorescence pattern on renal or skin biopsy',
      meaning: 'Linear means the antibody bound an antigen already in place (type II). Granular means preformed complexes were deposited (type III). This single pattern separates the two antibody mechanisms more reliably than any serum test.',
    },
    {
      clue: 'Skin prick test read at 15 to 20 minutes versus patch test read at 48 and 96 hours',
      meaning: 'The reading interval is the mechanism test. A weal at 20 minutes is IgE and mast cells; eczematous induration at two to four days is a T-cell response, and reading a patch test early gives a false negative.',
    },
    {
      clue: 'Interferon-gamma released on exposure to mycobacterial antigen in vitro',
      meaning: 'A memory Th1 response measured in a tube — the laboratory equivalent of the tuberculin reaction, and unaffected by prior BCG, which is its advantage over the skin test.',
    },
  ],

  treatment: [
    {
      logic: 'Adrenaline first in anaphylaxis, because nothing else reverses all three failures',
      detail: 'Give **intramuscular adrenaline** into the **anterolateral thigh** before confirming anything: **α1** restores vascular tone and reverses angio-oedema, **β2** relieves bronchospasm, and **β** stimulation dampens further mediator release. An antihistamine addresses **histamine only**, and histamine is one mediator among many — it will not touch the leukotriene-driven bronchoconstriction or the hypotension. Corticosteroids are aimed at the **late phase at 2 to 24 hours**, not at the emergency in front of you.',
    },
    {
      logic: 'Name the hypersensitivity type before choosing the drug, because the type selects the target',
      detail: 'A **type I** process needs **adrenaline** acutely, then avoidance or desensitisation. A **type II or III** process needs the **antibody or the complex** removed or its production stopped — **plasma exchange** for anti-GBM disease, **B-cell depletion**, or corticosteroids. A **type IV** process needs the **T cell and the macrophage** suppressed — corticosteroids, calcineurin inhibitors, or anti-TNF for granulomatous disease. Reaching for a drug before naming the mechanism is how plasma exchange gets given for contact dermatitis.',
    },
  ],

  mnemonics: [
    {
      hook: 'ACID — the four types in order',
      expansion: [
        'Anaphylactic: type I, IgE on mast cells, minutes.',
        'Cytotoxic: type II, antibody against an antigen already fixed in tissue, linear staining, organ-specific.',
        'Immune complex: type III, soluble complexes deposited at filtration sites, granular staining, systemic, 7 to 14 days.',
        'Delayed: type IV, T cells and no antibody at all, 48 to 72 hours.',
      ],
    },
    {
      hook: 'Serum transfers one, two and three; only cells transfer four',
      expansion: [
        'If plasma from a patient reproduces the disease in a naive recipient, the effector is an antibody — types I, II and III.',
        'If only lymphocytes reproduce it, the effector is a T cell — type IV.',
        'This is also the practical rule for the newborn: IgG crosses the placenta, so type II disease is inherited transiently; IgE and T cells do not cross, so allergy and contact dermatitis are not.',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'Telling type II from type III',
      wrongInstinct: 'Both are IgG-mediated, so the distinction is academic labelling.',
      rightAnswer: 'Ask where the antigen was when the antibody found it: fixed in tissue is type II, soluble and deposited later is type III.',
      why: 'Fixed antigen gives in-situ binding, linear immunofluorescence and organ-specific disease; soluble antigen gives complexes that deposit at filtration sites, granular immunofluorescence, complement consumption and systemic disease.',
    },
    {
      questionCategory: 'Antibody-mediated disease without tissue destruction',
      wrongInstinct: 'An autoantibody must destroy something, so Graves disease and myasthenia gravis cannot be type II.',
      rightAnswer: 'Type II includes antibody that only modulates receptor function — Graves stimulates the TSH receptor, myasthenia blocks and internalises the acetylcholine receptor.',
      why: 'The target is the signal, not the cell. Graves thyroid shows diffuse hyperplasia rather than lysis, and in myasthenia the muscle is intact while the receptor is gone.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Ten days after equine antivenom, a patient develops fever, urticaria, painful joints and haematuria. C3 and C4 are both low. What will renal immunofluorescence show, and why?',
      options: [
        { id: 'a', text: 'Granular capillary wall deposits, because complexes formed in the circulation and then lodged at a filtration site' },
        { id: 'b', text: 'Smooth linear deposits, because antibody bound an antigen already fixed in the basement membrane' },
        { id: 'c', text: 'No immunoglobulin, because the injury is entirely T-cell mediated' },
        { id: 'd', text: 'IgE along the capillary endothelium, because mast cells were the effector' },
      ],
      answerId: 'a',
      explanation: 'Serum sickness is type III. The 7 to 14 day latency is the time needed to raise antibody against the injected horse protein; the resulting soluble complexes deposit where plasma is filtered, consume complement (hence low C3 and C4), and stain granular. Linear staining would indicate a fixed antigen and type II.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A researcher transfers serum from a patient with severe nickel contact dermatitis into a naive recipient and then challenges with nickel. Nothing happens. Transferring lymphocytes instead reproduces the rash. What does this establish?',
      options: [
        { id: 'a', text: 'The patient has an IgE-mediated allergy that was missed' },
        { id: 'b', text: 'Circulating immune complexes were cleared before transfer' },
        { id: 'c', text: 'The effector is a T cell, so this is a type IV reaction' },
        { id: 'd', text: 'Complement is required and was absent from the serum' },
      ],
      answerId: 'c',
      explanation: 'Transferability is the cleanest way to separate the types. Antibody-mediated disease (types I, II and III) moves with serum; cell-mediated disease does not, because the effector is a lymphocyte. Nickel acts as a hapten modifying self-protein, and the rash appears 48 to 72 hours after contact rather than in minutes.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A woman with hyperthyroidism has a diffusely enlarged thyroid. Histology shows tall crowded follicular epithelium with scalloped colloid and no significant cell destruction. Which mechanism explains the hyperthyroidism?',
      options: [
        { id: 'a', text: 'Type III complex deposition within follicles' },
        { id: 'b', text: 'Type II antibody acting as a receptor agonist rather than a cytotoxic antibody' },
        { id: 'c', text: 'Type IV cytotoxic T cells releasing stored hormone' },
        { id: 'd', text: 'Type I mast cell degranulation in the thyroid stroma' },
      ],
      answerId: 'b',
      explanation: 'Graves disease is the exception that breaks the assumption that autoantibodies destroy. A stimulating IgG against the TSH receptor drives the gland continuously, producing hyperplasia rather than lysis. It is still type II, because the antigen is fixed in the cell membrane; only the consequence differs from complement-mediated killing.',
      tests: 'mechanism',
    },
  ],
};

export default rbpHypersensitivityReactions;
