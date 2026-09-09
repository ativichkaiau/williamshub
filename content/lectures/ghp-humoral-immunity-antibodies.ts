import type { Lecture } from '../../lib/types';

export const ghpHumoralImmunityAntibodies: Lecture = {
  id: 'ghp-humoral-immunity-antibodies',
  title: 'Humoral Immunity — B Cells, Plasma Cells & Antibody Function',
  system: 'immune',
  source: 'Ch 34 — Resistance to Infection II — Immunity & Allergy',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Immunology' },
    { kind: 'lecture', label: 'Ch 34 Immunity & Allergy' },
    { kind: 'mechanism', label: 'Antibody effector functions' },
    { kind: 'exam', label: 'T-dependent vs T-independent' },
  ],

  highYield: [
    '**An antibody is one molecule doing two separate jobs, and the question is always about which end.** Two heavy and two light chains give two identical **Fab** arms, whose **hypervariable CDR loops** decide specificity, and a single **Fc** stem whose **constant heavy chain** decides the **class** and therefore every effector function — complement fixation, Fc receptor binding, placental transfer and half-life. Change the Fc and you change what the antibody does without changing what it binds, which is the entire logic of class switching. The architecture is set out in [[antibody-structure]].',
    '**B cells see native antigen; plasma cells are the factory.** The **B-cell receptor** is surface **IgM with IgD**, and it binds antigen in its **native three-dimensional** shape — unlike a T cell, which only ever sees a processed linear peptide. On activation the B cell either becomes a short-lived plasmablast or enters a **germinal centre**; the plasma cell that emerges **loses its surface receptor**, fills with rough endoplasmic reticulum and secretes thousands of molecules per second, while a parallel **memory** population is held back for next time.',
    '**Five classes, each defined by a job you can name in one line.** **IgG** — most abundant in serum, the **only** class crossing the placenta, the best **opsonin**, dominates the secondary response. **IgM** — a **pentamer** largely confined to plasma, the **first** antibody made, and the **most efficient complement activator** because one pentamer already presents adjacent Fc stems for **C1q**. **IgA** — a **dimer** in secretions, shielded from proteolysis by **secretory component**. **IgE** — least abundant in serum because it is bound to **mast cells**; allergy and helminths. **IgD** — a naive B-cell surface receptor. The functional detail sits in [[antibody-classes-functions]].',
    '**Antibodies do four things, and only one of them works without recruiting a partner.** **Neutralisation** blocks a toxin or a virus from binding its target and needs nothing else — which is why antitoxin works as bare protein. The other three call for help: **opsonisation** (IgG gripped by phagocyte **Fcγ receptors**), **complement activation** (IgM far more than IgG, ending in C3b deposition and the membrane attack complex, as in [[complement-pathways]]), and **agglutination and precipitation**, which depend on **multivalency** cross-linking antigen into lattices and underlie blood grouping. **ADCC** by NK cells is the same Fc trick used to trigger killing instead of eating.',
    '**Affinity and avidity are not the same thing, and IgM is the case that proves it.** **Affinity** is the strength of a single site for a single epitope; **avidity** is the total strength of a multivalent grip. Each IgM site is of **low affinity**, but **ten** of them together give very **high avidity** — which makes IgM superb at agglutinating and fixing complement early in a primary response and poor at anything needing tight single-site binding. **IgG** wins on affinity because it has been through **affinity maturation**.',
    '**T-dependent versus T-independent antigens is the whole reason conjugate vaccines exist.** **Protein** antigens are internalised, processed and presented on **MHC II**, recruiting **T follicular helper** cells through **CD40L–CD40** and cytokines; that help licenses **class switching**, **affinity maturation** and **memory**. Pure **polysaccharide** capsules instead cross-link the B-cell receptor directly: the response is mostly **IgM**, with no affinity maturation, **no memory**, and it is essentially absent below **2 years** of age. **Conjugating** the polysaccharide to a carrier protein smuggles T-cell help back in, converting the response to durable **IgG** and making the vaccine work in infants — see [[vaccines-immunization]].',
  ],

  mechanism: {
    title: 'From naive B cell to high-affinity IgG',
    steps: [
      { id: 's1', label: 'Native antigen cross-links surface IgM on the one matching B cell', emphasis: 'key' },
      { id: 's2', label: 'The B cell internalises it and re-presents peptide on MHC II' },
      { id: 's3', label: 'A T follicular helper cell delivers CD40L and cytokine help', emphasis: 'key' },
      { id: 's4', label: 'Germinal centre reaction: class switching plus somatic hypermutation', emphasis: 'key' },
      { id: 's5', label: 'Highest-affinity clones are selected; the rest die by apoptosis', emphasis: 'key' },
      { id: 's6', label: 'Plasma cells secrete IgG while memory B cells are held in reserve' },
    ],
  },

  examFindings: [
    { sign: 'Recurrent sinopulmonary infection with encapsulated organisms', mechanism: 'No opsonising IgG against polysaccharide capsules, so phagocytes cannot grip them', significance: 'key' },
    { sign: 'Very high IgM with very low IgG, IgA and IgE despite normal B cell numbers', mechanism: 'Class switching has failed — the CD40 ligand arm of T-cell help is broken', significance: 'key' },
    { sign: 'Anaphylaxis on transfusion of a plasma-containing product', mechanism: 'Anti-IgA antibodies in a recipient with selective IgA deficiency', significance: 'key' },
    { sign: 'Recurrent giardiasis and mucosal infection with otherwise normal immunity', mechanism: 'Absent secretory IgA at the mucosal surface where the organism lives', significance: 'key' },
    { sign: 'Normal response to a protein vaccine but none to a polysaccharide vaccine', mechanism: 'Intact T-dependent help with a defective T-independent pathway', significance: 'key' },
    { sign: 'Infections beginning only after 6 months of age', mechanism: 'Decay of transplacental maternal IgG unmasking the underlying B-cell defect', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Serum protein electrophoresis with an absent gamma region', meaning: 'Global immunoglobulin deficiency such as agammaglobulinaemia' },
    { clue: 'Isolated very low IgA with normal IgG and IgM', meaning: 'Selective IgA deficiency — the commonest primary immunodeficiency' },
    { clue: 'Absent CD19 positive cells on flow cytometry', meaning: 'Arrest of B-cell development rather than a class-switching defect' },
    { clue: 'Failure of pneumococcal polysaccharide titres to rise after vaccination', meaning: 'Defective T-independent antibody response' },
    { clue: 'Pathogen-specific IgM present with IgG still absent', meaning: 'An ongoing primary response that has not yet class-switched' },
    { clue: 'A monoclonal band with suppression of the other immunoglobulin classes', meaning: 'Clonal plasma cell expansion crowding out normal humoral output' },
  ],

  treatment: [
    {
      logic: 'Replace the product, not the cell, when antibody is the only missing piece',
      detail: 'Regular **immunoglobulin replacement** restores serum **IgG** in agammaglobulinaemia because the deficiency is of a secreted product with a **21-day** half-life. It restores **neutralisation and opsonisation**, but it supplies **no secretory IgA** at mucosal surfaces and confers **no memory** — so it is lifelong, and trough levels rather than symptoms guide the dose interval.',
    },
    {
      logic: 'Conjugate a polysaccharide whenever you need memory in a young child',
      detail: 'Coupling the capsular polysaccharide to a carrier protein converts a **T-independent** response into a **T-dependent** one: carrier peptides are presented on **MHC II**, T help drives **class switching** to **IgG** and creates **memory**, and the vaccine then works below **2 years** of age, where plain polysaccharide vaccines simply fail. It also reduces nasopharyngeal carriage, which is where herd protection comes from.',
    },
  ],

  mnemonics: [
    {
      hook: 'GAMED — the five classes and the one fact each',
      expansion: ['G: most abundant, crosses the placenta, best opsonin', 'A: dimer in secretions, protected by secretory component', 'M: pentamer, made first, best complement activator', 'E: sits on mast cells — allergy and helminths', 'D: naive B-cell surface receptor'],
    },
    {
      hook: 'Fab finds it, Fc fights it',
      expansion: ['The variable Fab arms determine specificity', 'The constant Fc stem determines class and every effector function', 'Class switching swaps the Fc and keeps the Fab'],
    },
  ],

  traps: [
    {
      questionCategory: 'Which antibody activates complement best',
      wrongInstinct: 'IgG, because it is the most abundant and the best opsonin',
      rightAnswer: 'IgM, because a single pentamer already presents adjacent Fc stems for C1q',
      why: 'IgG needs two molecules to land close together; one IgM does it unaided',
    },
    {
      questionCategory: 'Why plain polysaccharide vaccines fail in infants',
      wrongInstinct: 'Infants simply make too little antibody of any kind',
      rightAnswer: 'The T-independent response is immature, so there is no class switching and no memory',
      why: 'Conjugating to a carrier protein recruits T help and restores IgG with memory',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A boy has recurrent infections with a markedly raised IgM and very low IgG, IgA and IgE. Circulating B cell numbers are normal. Which step has failed?',
      options: [
        { id: 'a', text: 'V(D)J recombination during B-cell development' },
        { id: 'b', text: 'CD40 ligand-dependent T-cell help driving class switching' },
        { id: 'c', text: 'Differentiation of B cells into plasma cells' },
        { id: 'd', text: 'Synthesis of complement C3' },
      ],
      answerId: 'b',
      explanation: 'Normal B cell numbers with IgM present exclude a developmental arrest. The block is downstream, at the T-cell help that licenses class switching: without CD40L to CD40 signalling the B cell can secrete IgM but can never switch isotype, so IgG, IgA and IgE stay low.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which property makes IgM the most efficient activator of the classical complement pathway?',
      options: [
        { id: 'a', text: 'Its high affinity for individual epitopes' },
        { id: 'b', text: 'Its pentameric structure, presenting adjacent Fc regions for C1q binding' },
        { id: 'c', text: 'Its ability to cross the placenta and reach fetal tissue' },
        { id: 'd', text: 'Its binding to Fc gamma receptors on phagocytes' },
      ],
      answerId: 'b',
      explanation: 'C1q needs two Fc regions bound close together. A single IgM pentamer supplies that geometry by itself, whereas IgG only achieves it when two separate molecules happen to land adjacently. Individual IgM sites are in fact low affinity — the pentamer wins on avidity, not affinity.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A conjugate pneumococcal vaccine protects an 8-month-old durably, whereas the plain polysaccharide vaccine does not. Why?',
      options: [
        { id: 'a', text: 'The carrier protein makes the polysaccharide more visible to innate receptors' },
        { id: 'b', text: 'Carrier peptides presented on MHC II recruit T-cell help, allowing class switching to IgG and memory' },
        { id: 'c', text: 'The conjugate fixes complement more efficiently than the plain polysaccharide' },
        { id: 'd', text: 'The conjugate is taken up preferentially by mast cells' },
      ],
      answerId: 'b',
      explanation: 'Plain polysaccharide is a T-independent antigen: it cross-links the B-cell receptor, produces IgM, and generates neither affinity maturation nor memory, and the pathway is immature under 2 years. Conjugation supplies protein epitopes that are presented on MHC II, so T follicular helper cells can drive class switching and memory.',
      tests: 'treatment',
    },
  ],
};

export default ghpHumoralImmunityAntibodies;
