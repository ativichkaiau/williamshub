import type { Lecture } from '../../lib/types';

export const hhlAiha: Lecture = {
  id: 'hhl-aiha',
  title: 'Autoimmune Hemolytic Anemia',
  system: 'heme',
  source: 'L9 — Hemolytic Anemia',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L9 Hemolytic Anemia' },
    { kind: 'disease', label: 'Warm vs cold AIHA' },
    { kind: 'investigation', label: 'Direct Coombs (DAT)' },
    { kind: 'treatment', label: 'Steroids vs keep warm' },
  ],

  highYield: [
    '**AIHA = antibody-mediated red-cell destruction; the direct antiglobulin (Coombs) test (DAT) is the defining investigation.** Split it into **warm** and **cold** by the antibody and its optimal temperature.',
    '**Warm AIHA = IgG, active at 37 °C, EXTRAvascular splenic hemolysis → spherocytes, DAT positive for IgG ± C3.** Causes: **idiopathic, SLE, CLL/lymphoma, drugs (methyldopa, penicillin)**.',
    '**Cold agglutinin disease = IgM, active in the cold, fixes complement → intravascular hemolysis + acrocyanosis; DAT positive for C3d only.** Causes: **Mycoplasma pneumoniae, EBV/infectious mononucleosis (acute), lymphoma/Waldenström (chronic)**; film shows **red-cell agglutination**.',
    '**Treatment follows the antibody**: **warm → corticosteroids first-line** (then rituximab/splenectomy, IVIG); **cold → keep warm / avoid cold exposure, rituximab, treat the underlying** — steroids and splenectomy work poorly for cold disease.',
    'Warm AIHA makes spherocytes and can mimic hereditary spherocytosis — **the DAT is what separates them** (positive in AIHA, negative in HS; see [[hhl-g6pd-membrane-defects]]).',
  ],

  mechanism: {
    title: 'Autoantibody class sets the temperature, site and treatment',
    steps: [
      { id: 's1', label: 'Autoantibody coats red cells', emphasis: 'key' },
      { id: 's2', label: 'Warm IgG → splenic macrophages nibble → spherocytes (extravascular)', emphasis: 'key' },
      { id: 's3', label: 'Cold IgM → complement fixation → intravascular hemolysis + agglutination' },
      { id: 's4', label: 'DAT detects IgG (warm) vs C3d (cold)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Spherocytes with a POSITIVE direct Coombs (IgG ± C3)', mechanism: 'Warm AIHA — splenic partial phagocytosis', significance: 'key' },
    { sign: 'Red-cell agglutination on the film; DAT C3d only', mechanism: 'Cold agglutinin (IgM) disease', significance: 'key' },
    { sign: 'Acrocyanosis of ears/nose/fingers in the cold', mechanism: 'IgM-mediated agglutination in cool peripheries', significance: 'supportive' },
    { sign: 'Raised LDH, raised indirect bilirubin, high reticulocytes', mechanism: 'Active hemolysis with marrow response', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Direct antiglobulin test (DAT/Coombs) positive', meaning: 'Confirms immune (autoimmune) hemolysis' },
    { clue: 'DAT pattern IgG ± C3', meaning: 'Warm AIHA' },
    { clue: 'DAT pattern C3d only + cold agglutinins', meaning: 'Cold agglutinin disease' },
    { clue: 'Spherocytes + POSITIVE DAT', meaning: 'Warm AIHA (not hereditary spherocytosis)' },
  ],

  treatment: [
    { logic: 'Warm AIHA: corticosteroids first-line', detail: 'Add rituximab / splenectomy if refractory; treat any underlying SLE/CLL and stop culprit drugs.' },
    { logic: 'Cold agglutinin disease: keep warm and avoid cold', detail: 'Rituximab for significant disease; treat the underlying infection/lymphoma. Steroids/splenectomy are less effective.' },
    { logic: 'Transfuse cautiously with the blood bank', detail: 'Autoantibodies complicate cross-matching; give least-incompatible warmed blood if needed.' },
  ],

  mnemonics: [
    { hook: 'Warm = IgG (spherocytes, spleen, steroids); Cold = IgM (complement, keep warm)', expansion: ['Warm at 37 °C', 'Cold IgM agglutinates in the periphery'] },
    { hook: 'Positive Coombs = immune; spherocytes + Coombs+ = warm AIHA', expansion: ['DAT separates AIHA from hereditary spherocytosis'] },
  ],

  traps: [
    {
      questionCategory: 'Steroids in autoimmune hemolysis',
      wrongInstinct: 'Corticosteroids are the answer for every autoimmune hemolytic anemia',
      rightAnswer: 'Steroids are first-line for WARM (IgG) AIHA but work poorly for COLD agglutinin disease, where keeping the patient warm, avoiding cold and using rituximab / treating the cause is the approach',
      why: 'Cold IgM-mediated complement hemolysis responds to warmth and B-cell–directed therapy, not primarily to steroids or splenectomy.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A woman with SLE has anemia, spherocytes, raised LDH and a direct Coombs test positive for IgG. What is the first-line treatment?',
      options: [
        { id: 'a', text: 'Keep her warm and avoid cold exposure' },
        { id: 'b', text: 'Corticosteroids' },
        { id: 'c', text: 'Oral iron' },
        { id: 'd', text: 'Plasma exchange' },
      ],
      answerId: 'b',
      explanation: 'IgG-positive DAT with spherocytes is warm AIHA (here secondary to SLE); corticosteroids are first-line, with rituximab/splenectomy if refractory.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'Two weeks after a Mycoplasma pneumonia, a patient develops hemolysis with red-cell agglutination on the film and a DAT positive for C3d only. Which antibody is responsible?',
      options: [
        { id: 'a', text: 'Warm-reacting IgG' },
        { id: 'b', text: 'Cold-reacting IgM' },
        { id: 'c', text: 'IgA anti-red-cell antibody' },
        { id: 'd', text: 'IgE autoantibody' },
      ],
      answerId: 'b',
      explanation: 'Post-Mycoplasma cold agglutinin disease is IgM-mediated: it fixes complement (DAT positive for C3d) and agglutinates cells in cool peripheries — treat with warmth/avoidance and rituximab.',
      tests: 'disease',
    },
  ],
};

export default hhlAiha;
