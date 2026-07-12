import type { Lecture } from '../../lib/types';

export const hhlAlphaBetaThalassemia: Lecture = {
  id: 'hhl-alpha-beta-thalassemia',
  title: 'α- and β-Thalassemia Syndromes',
  system: 'heme',
  source: 'L7 — Thalassemia & Hemoglobinopathies',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L7 Thalassemia & Hbpathies' },
    { kind: 'disease', label: 'α- / β-thalassemia' },
    { kind: 'mechanism', label: 'Globin imbalance' },
    { kind: 'investigation', label: 'MCV · RBC · Mentzer' },
  ],

  highYield: [
    'Thalassemia = **reduced synthesis of a globin chain** → **chain imbalance**: the normal chain is made in excess, precipitates, and damages red cells/precursors → **microcytic, hypochromic anemia with ineffective erythropoiesis + hemolysis**.',
    '**α-thalassemia is graded by α-gene deletions (4 total)**: **1 = silent (−α/αα)**; **2 = trait (−−/αα cis or −α/−α trans)**; **3 = HbH disease (−−/−α, excess β chains form β₄/HbH)**; **4 = Hb Bart’s hydrops fetalis (−−/−−, γ₄) — fatal in utero**.',
    '**β-thalassemia**: **minor/trait (↑HbA₂ >3.5%, mild microcytosis)** → **intermedia** → **major (Cooley anemia)** — transfusion-dependent from infancy, severe hemolysis, **extramedullary hematopoiesis** with **frontal bossing / "chipmunk" facies and "hair-on-end" skull X-ray**, hepatosplenomegaly and **iron overload**.',
    '**Discriminator vs iron deficiency**: thalassemia trait gives **microcytosis with a NORMAL or HIGH RBC count** and a **low Mentzer index (MCV ÷ RBC <13)**; iron deficiency gives a **low RBC count and Mentzer >13**. RDW is usually normal in trait, high in iron deficiency.',
    '**Hb Bart’s hydrops fetalis (−−/−−) is a lethal danger endpoint** — γ₄ has near-zero O₂ delivery; the fetus dies in utero/at birth and the mother is at risk (pre-eclampsia). It anchors Thailand’s carrier-screening program (see [[hhl-hemoglobinopathies-diagnosis]]).',
  ],

  mechanism: {
    title: 'Reduced globin output → precipitated excess chains → cell destruction',
    steps: [
      { id: 's1', label: 'Deletion/mutation reduces one globin chain', emphasis: 'key' },
      { id: 's2', label: 'Unpaired partner chain precipitates in the cell' },
      { id: 's3', label: 'Ineffective erythropoiesis + peripheral hemolysis', emphasis: 'key' },
      { id: 's4', label: 'HbH disease (β₄) — moderate hemolytic anemia' },
      { id: 's5', label: 'Hb Bart’s (γ₄, −−/−−) → hydrops fetalis, death in utero', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Microcytosis with a normal/high RBC count', mechanism: 'Many small cells made — hallmark of thalassemia trait', significance: 'key' },
    { sign: 'Mentzer index (MCV ÷ RBC) <13', mechanism: 'Favours thalassemia over iron deficiency', significance: 'key' },
    { sign: 'Frontal bossing, "chipmunk" facies, hair-on-end skull', mechanism: 'Marrow expansion / extramedullary hematopoiesis in β-thal major', significance: 'supportive' },
    { sign: 'Target cells and basophilic stippling on film', mechanism: 'Abnormal membrane loading / precipitated globin', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Low MCV, normal iron studies, normal/high RBC count', meaning: 'Thalassemia trait (not iron deficiency)' },
    { clue: 'HbA₂ >3.5% on Hb typing', meaning: 'β-thalassemia trait' },
    { clue: 'HbH (β₄) inclusions / fast band on typing', meaning: 'HbH disease (3-gene α deletion)' },
    { clue: 'Hydropic fetus, Hb Bart’s (γ₄) on typing', meaning: '4-gene α deletion — lethal α-thal, screen the couple' },
  ],

  treatment: [
    { logic: 'Trait: no treatment, genetic counselling', detail: 'Reassure; avoid unnecessary iron. Screen partner before pregnancy.' },
    { logic: 'β-thal major: regular transfusion + iron chelation', detail: 'Chelation (deferasirox/deferoxamine) prevents transfusional iron overload; consider HSCT.' },
    { logic: 'Prevent Hb Bart’s hydrops', detail: 'Couple carrier screening and prenatal diagnosis (the program rationale).' },
  ],

  mnemonics: [
    { hook: 'α-thal 1-2-3-4: silent, trait, HbH, Bart’s', expansion: ['1 gene = silent', '2 = trait', '3 = HbH (β₄)', '4 = Hb Bart’s hydrops (γ₄), fatal'] },
    { hook: 'Thalassemia keeps the RBC count up; iron deficiency drops it', expansion: ['Mentzer <13 = thal', 'Mentzer >13 = iron deficiency'] },
  ],

  traps: [
    {
      questionCategory: 'Microcytic anemia — thalassemia trait vs iron deficiency',
      wrongInstinct: 'Any microcytic anemia should be treated with iron',
      rightAnswer: 'In thalassemia trait the RBC count is normal/high with a low Mentzer index and normal iron studies — giving iron does nothing and risks overload; confirm with Hb typing/HbA₂',
      why: 'Both are microcytic, but thalassemia over-produces small cells (high RBC count) whereas iron deficiency under-produces them (low RBC count).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A newborn is severely hydropic and stillborn; Hb typing shows predominantly Hb Bart’s (γ₄). How many α-globin genes are deleted?',
      options: [
        { id: 'a', text: 'One' },
        { id: 'b', text: 'Two' },
        { id: 'c', text: 'Three' },
        { id: 'd', text: 'Four' },
      ],
      answerId: 'd',
      explanation: 'Deletion of all four α-globin genes (−−/−−) leaves no α-chains; γ-chains form γ₄ (Hb Bart’s), which cannot deliver O₂, causing lethal hydrops fetalis.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'A 22-year-old woman has Hb 11, MCV 65 fL, RBC 6.0×10¹²/L (high) and normal ferritin. Which finding most supports thalassemia trait over iron deficiency?',
      options: [
        { id: 'a', text: 'The low MCV' },
        { id: 'b', text: 'The high-normal RBC count with a low Mentzer index' },
        { id: 'c', text: 'The Hb of 11 g/dL' },
        { id: 'd', text: 'Female sex' },
      ],
      answerId: 'b',
      explanation: 'Thalassemia trait produces many small cells, so the RBC count stays normal/high and Mentzer index (MCV ÷ RBC) is <13; iron deficiency lowers the RBC count (Mentzer >13). Normal ferritin further argues against iron deficiency.',
      tests: 'investigation',
    },
  ],
};

export default hhlAlphaBetaThalassemia;
