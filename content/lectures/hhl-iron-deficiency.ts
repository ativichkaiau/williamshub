import type { Lecture } from '../../lib/types';

export const hhlIronDeficiency: Lecture = {
  id: 'hhl-iron-deficiency',
  title: 'Iron Deficiency Anemia',
  system: 'heme',
  source: 'L8 — Nutritional Anemia',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L8 Nutritional Anemia' },
    { kind: 'disease', label: 'Iron deficiency anemia' },
    { kind: 'investigation', label: 'Ferritin · TIBC · sat' },
    { kind: 'treatment', label: 'Oral iron + find cause' },
  ],

  highYield: [
    '**The commonest anemia worldwide.** It is **microcytic, hypochromic** with a **high RDW** and **pencil (cigar) cells** on the film; a reactive thrombocytosis is common.',
    '**Iron studies**: **↓ferritin is the single best test** (but it is an acute-phase reactant — can be falsely normal in inflammation), with **↓serum iron, ↑TIBC (↑transferrin), ↓transferrin saturation** and **↑soluble transferrin receptor (sTfR)**.',
    '**Causes = blood loss until proven otherwise**: **menstrual/GI bleeding**, poor intake, **hookworm**, malabsorption (celiac, post-gastrectomy) and **pregnancy demand**. Signs: **koilonychia, pica, angular cheilitis, glossitis, Plummer–Vinson (web + dysphagia)**.',
    '**Treat oral iron AND find the cause.** In an **adult male or postmenopausal woman, iron deficiency = occult GI bleeding → investigate for GI malignancy (endoscopy ± colonoscopy)** — do not just replace iron.',
    'Contrast with thalassemia trait (normal iron studies, normal RDW, high RBC count — see [[hhl-alpha-beta-thalassemia]]) and anemia of chronic disease (high/normal ferritin, low TIBC — see [[hhl-iron-metabolism-studies]]).',
  ],

  mechanism: {
    title: 'Negative iron balance → depleted stores → limited erythropoiesis',
    steps: [
      { id: 's1', label: 'Chronic loss / low intake / high demand', emphasis: 'key' },
      { id: 's2', label: 'Storage iron (ferritin) depletes first' },
      { id: 's3', label: 'Serum iron falls, TIBC rises, saturation drops' },
      { id: 's4', label: 'Hemoglobin synthesis limited → microcytic hypochromic cells', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Microcytic hypochromic film with pencil cells, high RDW', mechanism: 'Iron-limited hemoglobinisation, heterogeneous cells', significance: 'key' },
    { sign: 'Low ferritin', mechanism: 'Depleted storage iron — most specific marker', significance: 'key' },
    { sign: 'Koilonychia, angular cheilitis, glossitis', mechanism: 'Epithelial effects of iron lack', significance: 'supportive' },
    { sign: 'Pica / Plummer–Vinson dysphagia', mechanism: 'Classic clinical associations of iron deficiency', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Low ferritin', meaning: 'Confirms iron deficiency (best single test)' },
    { clue: 'Low serum iron + high TIBC + low transferrin saturation', meaning: 'Iron-deficient pattern' },
    { clue: 'Iron deficiency in an adult man / postmenopausal woman', meaning: 'Occult GI blood loss → scope for malignancy' },
    { clue: 'High soluble transferrin receptor (sTfR)', meaning: 'Tissue iron lack — helps separate from ACD' },
  ],

  treatment: [
    { logic: 'Replace with oral iron (ferrous salt) first-line', detail: 'Continue ~3 months after Hb normalises to refill stores; reticulocytes rise within a week.' },
    { logic: 'Always identify and treat the source', detail: 'Menstrual/GI loss, hookworm, diet, malabsorption — replacement alone is incomplete.' },
    { logic: 'IV iron / transfusion for intolerance or severe symptomatic anemia', detail: 'Reserve for malabsorption, poor tolerance, or ongoing loss.' },
  ],

  mnemonics: [
    { hook: 'Low ferritin, high TIBC — the iron-deficiency signature', expansion: ['Ferritin down (stores empty)', 'TIBC up (transferrin hungry)', 'Saturation down'] },
    { hook: 'Man or postmenopausal woman with IDA = scope the gut', expansion: ['Assume occult GI bleeding', 'Exclude malignancy'] },
  ],

  traps: [
    {
      questionCategory: 'What to do after diagnosing iron deficiency',
      wrongInstinct: 'Diagnose iron deficiency, prescribe iron, and stop there',
      rightAnswer: 'Iron deficiency is a symptom — in an adult man or postmenopausal woman it mandates a search for a GI source (colonoscopy/endoscopy) before you can call it done',
      why: 'Missing a right-sided colon cancer presenting as iron deficiency is a classic, dangerous omission.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 62-year-old man has Hb 9.5 g/dL, MCV 72 fL, ferritin 6 µg/L and a high TIBC. After starting oral iron, what is the essential next step?',
      options: [
        { id: 'a', text: 'Reassure and recheck Hb in one year' },
        { id: 'b', text: 'Investigate the gastrointestinal tract for a bleeding source/malignancy' },
        { id: 'c', text: 'Start a blood transfusion immediately' },
        { id: 'd', text: 'Begin B12 injections' },
      ],
      answerId: 'b',
      explanation: 'Iron deficiency in an adult male implies occult GI blood loss; endoscopy ± colonoscopy is required to exclude a GI malignancy — iron replacement alone is insufficient.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'Which single laboratory test is the most specific first-line marker of iron deficiency?',
      options: [
        { id: 'a', text: 'Serum iron' },
        { id: 'b', text: 'Serum ferritin' },
        { id: 'c', text: 'Total iron-binding capacity' },
        { id: 'd', text: 'Mean corpuscular volume' },
      ],
      answerId: 'b',
      explanation: 'A low ferritin reflects depleted storage iron and is the best single test; caveat — as an acute-phase reactant it can be falsely normal in inflammation.',
      tests: 'investigation',
    },
  ],
};

export default hhlIronDeficiency;
