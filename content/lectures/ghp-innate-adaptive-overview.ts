import type { Lecture } from '../../lib/types';

export const ghpInnateAdaptiveOverview: Lecture = {
  id: 'ghp-innate-adaptive-overview',
  title: 'Innate vs Adaptive Immunity, Clonal Selection & Memory',
  system: 'immune',
  source: 'Ch 34 — Resistance to Infection II — Immunity & Allergy',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Immunology' },
    { kind: 'lecture', label: 'Ch 34 Immunity & Allergy' },
    { kind: 'mechanism', label: 'Clonal selection' },
    { kind: 'exam', label: 'Primary vs secondary response' },
  ],

  highYield: [
    '**Innate and adaptive immunity differ in what they recognise and whether they remember.** Innate receptors are **germline-encoded** pattern recognition receptors reading conserved **PAMPs**, so the response is **immediate** and identical every single time. Adaptive receptors are generated **somatically** by **V(D)J recombination**, giving near-limitless specificity at the cost of a **5–7 day** lag on first exposure — but memory means the second exposure is never that slow again. Innate immunity also *licenses* the adaptive response: without a danger signal there is no costimulation and no activation.',
    '**The adaptive system has exactly two arms, split by where the pathogen hides.** **Humoral immunity** — B cells and secreted antibody — reaches anything **extracellular**: toxins, free virus in transit, encapsulated bacteria. **Cell-mediated immunity** — T cells — deals with what is **inside** a cell, where antibody cannot follow: viruses in replication, intracellular bacteria, tumour cells and grafts. Predicting the defective arm from the pattern of infection is the standard exam move, and each arm is developed in [[ghp-humoral-immunity-antibodies]] and [[ghp-cell-mediated-immunity-allergy]].',
    '**Clonal selection means the repertoire exists before the antigen does.** Each lymphocyte commits to **one** specificity during development, before it has ever met an antigen; the antigen does not instruct the cell, it merely **selects** a pre-existing clone and drives its proliferation. Two consequences follow directly. The first response is **slow** because a rare clone must be found and expanded. And clones that happen to recognise **self** must be deleted during development, which makes **tolerance** an unavoidable part of the same design rather than an add-on.',
    '**Primary and secondary responses differ in lag, magnitude, class and affinity — four separate variables.** Primary: lag **5–10 days**, modest peak titre, dominated by **IgM**, low affinity, short-lived. Secondary: lag **1–3 days**, titre **10–100×** higher and sustained far longer, dominated by **IgG**, and of much higher affinity. Every booster in every vaccine schedule is engineering precisely this difference.',
    '**The secondary response is faster and better for three mechanistically separable reasons.** First, **precursor frequency** — memory clones vastly outnumber the single naive cell that started the primary response, which supplies the speed and the magnitude. Second, memory B cells are already **class-switched** and have been through **somatic hypermutation** with selection in the germinal centre, so they begin with high-affinity **IgG** instead of having to earn it — see [[germinal-center-antibody-response]]. Third, memory cells have a **lower activation threshold** and depend less on costimulation. Speed, class and affinity are three different mechanisms, not one.',
    '**Active immunity is earned and remembered; passive immunity is borrowed and temporary.** Active — infection or vaccination — takes **weeks** to develop but leaves **memory** lasting years. Passive — transplacental maternal **IgG**, breast-milk **IgA**, pooled immunoglobulin and antitoxins — protects **immediately** but confers **no memory** and decays with the **21-day** half-life of IgG, which is why maternal protection fades and immunoglobulin dips to a nadir at **3–6 months** of age. In post-exposure prophylaxis both are deliberately given together, as in [[vaccines-immunization]].',
  ],

  mechanism: {
    title: 'Antigen selects a clone that already exists',
    steps: [
      { id: 's1', label: 'Innate receptors read PAMPs within minutes and raise the danger signal', emphasis: 'key' },
      { id: 's2', label: 'Dendritic cells carry processed antigen to the draining lymph node' },
      { id: 's3', label: 'Antigen selects the rare pre-existing clone whose receptor already fits', emphasis: 'key' },
      { id: 's4', label: 'Clonal expansion over days — the entire reason the primary response lags', emphasis: 'key' },
      { id: 's5', label: 'Effector cells clear the antigen; a memory subset is set aside' },
      { id: 's6', label: 'Re-exposure meets an expanded, class-switched, high-affinity repertoire', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Recurrent encapsulated bacterial infections beginning after 6 months of age', mechanism: 'Maternal IgG has decayed, unmasking a failure of the humoral arm', significance: 'key' },
    { sign: 'Opportunistic viral and fungal infection from the first weeks of life', mechanism: 'Cell-mediated arm defective — antibody cannot reach intracellular organisms', significance: 'key' },
    { sign: 'Antibody titre rising within 2–3 days of a booster dose', mechanism: 'Expanded memory clones with a lower activation threshold', significance: 'key' },
    { sign: 'Immediate protection from antitoxin with no lasting immunity afterwards', mechanism: 'Passive transfer of preformed antibody generates no memory population', significance: 'key' },
    { sign: 'Fever, rash and arthralgia 7–14 days after a heterologous serum product', mechanism: 'A primary response maturing while the foreign protein is still present', significance: 'supportive' },
    { sign: 'Repeated clinically identical illness despite a normal first recovery', mechanism: 'Failure to generate memory rather than failure of the primary response', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Pathogen-specific IgM present with IgG absent', meaning: 'Acute primary response — no prior exposure or vaccination' },
    { clue: 'High specific IgG with no IgM on re-presentation', meaning: 'Secondary memory response rather than a first encounter' },
    { clue: 'Detectable IgM in cord blood or in a neonate', meaning: 'Intrauterine infection — maternal IgM is too large to cross the placenta' },
    { clue: 'Immunoglobulin nadir at 3–6 months of age', meaning: 'Physiological trough as maternal IgG falls before infant synthesis rises' },
    { clue: 'Antibody titre falling steadily over weeks after immunoglobulin therapy', meaning: 'Passive antibody decaying with the roughly 21-day IgG half-life' },
    { clue: 'Absent response to a protein vaccine challenge with normal B cell numbers', meaning: 'Failure of T-dependent help rather than absence of B cells' },
  ],

  treatment: [
    {
      logic: 'Give passive antibody for speed and vaccine for memory',
      detail: 'In post-exposure prophylaxis for **rabies, tetanus or hepatitis B**, immunoglobulin covers the **days to weeks** before an active response develops, while the vaccine builds the **memory** that immunoglobulin can never supply. They are injected at **separate sites** so passive antibody does not neutralise the vaccine antigen before it is seen.',
    },
    {
      logic: 'Boost to convert a primary response into a secondary one',
      detail: 'A first dose expands a small clone and yields mainly low-affinity **IgM**. Boosting re-selects memory cells that have already undergone **somatic hypermutation**, so **titre and affinity both rise**. This is why schedules **space** doses rather than stacking them — the interval is what allows affinity maturation to happen first.',
    },
  ],

  mnemonics: [
    {
      hook: 'Innate is fast and fixed; adaptive is slow and specific',
      expansion: ['Germline receptors, no memory, the same response every time', 'Somatic receptors, memory, a better response every time', 'Innate supplies the danger signal that licenses the adaptive response'],
    },
    {
      hook: 'Active you earn, passive you borrow',
      expansion: ['Active: slow onset, long-lived memory', 'Passive: instant onset, no memory at all', 'Borrowed antibody fades with the 21-day IgG half-life'],
    },
  ],

  traps: [
    {
      questionCategory: 'Why the primary response is slow',
      wrongInstinct: 'The body has to design a receptor that fits the new antigen',
      rightAnswer: 'The matching clone already exists and simply has to be selected and expanded',
      why: 'Antigen selects a pre-formed clone; it never instructs receptor design',
    },
    {
      questionCategory: 'Protecting someone immediately after an exposure',
      wrongInstinct: 'Give the vaccine alone because active immunity is stronger and lasts longer',
      rightAnswer: 'Give immunoglobulin as well, because the vaccine protects nobody for the first fortnight',
      why: 'Passive antibody covers the interval; only the vaccine leaves memory behind',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An infant is entirely well until 7 months of age, then develops recurrent pneumococcal and Haemophilus infections. Which explanation best fits this timing?',
      options: [
        { id: 'a', text: 'A cytotoxic T cell defect that only manifests after weaning' },
        { id: 'b', text: 'Transplacental maternal IgG has decayed, revealing an underlying humoral defect' },
        { id: 'c', text: 'Terminal complement component deficiency' },
        { id: 'd', text: 'A defect in innate pattern recognition receptors' },
      ],
      answerId: 'b',
      explanation: 'Maternal IgG crosses the placenta and protects for roughly the first half-year, decaying with a 21-day half-life. A child who cannot make their own antibody is therefore well at first and presents around 6 months with encapsulated organisms. A T cell defect would instead present with opportunistic infection from the first weeks.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'The secondary antibody response is faster, larger and of higher affinity than the primary. Which mechanism accounts specifically for the higher affinity?',
      options: [
        { id: 'a', text: 'A far greater number of memory precursor cells' },
        { id: 'b', text: 'Somatic hypermutation with selection of the best binders in the germinal centre' },
        { id: 'c', text: 'A lower activation threshold in memory lymphocytes' },
        { id: 'd', text: 'More efficient complement fixation by the secondary antibody' },
      ],
      answerId: 'b',
      explanation: 'Precursor frequency explains the magnitude and part of the speed, and a lower activation threshold explains the rest of the speed. Affinity is a separate mechanism: somatic hypermutation of the variable region followed by selection of the highest-affinity clones in the germinal centre.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'An unimmunised patient sustains a deep contaminated wound and receives both tetanus immunoglobulin and tetanus toxoid, injected at separate sites. What is the reason for giving both?',
      options: [
        { id: 'a', text: 'The immunoglobulin acts as an adjuvant that boosts the response to the toxoid' },
        { id: 'b', text: 'Immunoglobulin protects during the weeks before the toxoid induces immunity, and only the toxoid leaves memory' },
        { id: 'c', text: 'The toxoid neutralises circulating toxin faster than immunoglobulin can' },
        { id: 'd', text: 'Together they establish lifelong passive immunity' },
      ],
      answerId: 'b',
      explanation: 'Passive antibody works instantly but leaves no memory and decays over weeks; active immunisation leaves durable memory but protects nobody for the first fortnight. Separate sites prevent the passive antibody from neutralising the vaccine antigen.',
      tests: 'treatment',
    },
  ],
};

export default ghpInnateAdaptiveOverview;
