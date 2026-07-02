import type { Lecture } from '../../lib/types';

export const cutaneousVasculitis: Lecture = {
  id: 'cutaneous-vasculitis',
  title: 'Cutaneous Vasculitis',
  system: 'derm',
  source: 'L10 — Panniculitis & Vasculitis',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L10 Cutaneous Vasculitis' },
    { kind: 'mechanism', label: 'Vessel-wall inflammation by size' },
    { kind: 'exam', label: 'Palpable purpura; IgA vasculitis' },
  ],

  highYield: [
    '**Cutaneous vasculitis is inflammation of skin blood-vessel walls; the hallmark of SMALL-vessel vasculitis is PALPABLE PURPURA (raised, non-blanching purpuric papules) on dependent areas (lower legs). The commonest is LEUKOCYTOCLASTIC vasculitis — an immune-complex (Type III) process with neutrophil fragments ("nuclear dust") on biopsy.**',
    '**CAUSES of cutaneous small-vessel vasculitis ("many I\'s"): INFECTION (strep, hepatitis B/C), drugs, connective-tissue disease (SLE, RA), IgA vasculitis, malignancy, and idiopathic. IgA VASCULITIS (Henoch-Schönlein purpura, commonest in CHILDREN): palpable purpura on buttocks/legs + ARTHRALGIA + ABDOMINAL pain + NEPHRITIS (IgA deposition).**',
    '**Vasculitis is classified by VESSEL SIZE (small/medium/large), which predicts features: small-vessel → palpable purpura/urticarial vasculitis; medium-vessel (e.g. polyarteritis nodosa) → nodules, livedo, ulcers, digital infarcts; ANCA-associated (GPA/MPA/EGPA) → systemic disease. Skin vasculitis may be isolated or a window onto SYSTEMIC vasculitis.**',
    '**WORK-UP: confirm with biopsy (+ direct immunofluorescence — IgA in HSP), look for a TRIGGER (infection/drug/CTD/malignancy) and — crucially — assess for SYSTEMIC/organ involvement (URINALYSIS for renal disease, bloods, ANCA/complement). Management: treat the cause/remove the trigger; skin-limited disease may resolve, but systemic involvement needs immunosuppression.**',
    '**The take-home: cutaneous vasculitis = vessel-wall inflammation → PALPABLE PURPURA (small-vessel, leukocytoclastic, Type III); classify by SIZE; IgA vasculitis (HSP) = purpura + arthralgia + abdominal pain + nephritis (children); always seek a trigger and assess SYSTEMIC/renal involvement (urinalysis).** The panniculitis/overview is [[panniculitis-vasculitis-skin]]; the immune mechanism is [[cutaneous-hypersensitivity-reactions]].',
  ],

  mechanism: {
    title: 'Vessel-wall inflammation → palpable purpura (small-vessel leukocytoclastic, Type III); classify by size; IgA vasculitis; seek trigger + assess systemic/renal',
    steps: [
      { id: 's1', label: 'Small-vessel vasculitis → PALPABLE PURPURA (leukocytoclastic, immune complex/Type III)', emphasis: 'key' },
      { id: 's2', label: 'Causes: infection, drugs, connective-tissue disease, IgA vasculitis, malignancy, idiopathic', emphasis: 'key' },
      { id: 's3', label: 'IgA vasculitis (HSP): purpura + arthralgia + abdominal pain + nephritis (children)', emphasis: 'key' },
      { id: 's4', label: 'Classify by vessel size (small/medium/large); may be isolated or systemic', emphasis: 'key' },
      { id: 's5', label: 'Work-up: biopsy + DIF, find trigger, URINALYSIS for renal involvement; treat cause ± immunosuppression', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Raised, non-blanching purpuric papules on the lower legs', mechanism: 'Small-vessel (leukocytoclastic) vasculitis', significance: 'key' },
    { sign: 'Purpura + arthralgia + abdominal pain + haematuria in a child', mechanism: 'IgA vasculitis (Henoch-Schönlein)', significance: 'key' },
    { sign: 'Neutrophil fragments ("nuclear dust") around vessels on biopsy', mechanism: 'Leukocytoclastic vasculitis', significance: 'key' },
    { sign: 'Nodules, livedo and digital infarcts', mechanism: 'Medium-vessel vasculitis (e.g. polyarteritis nodosa)', significance: 'supportive' },
    { sign: 'New renal impairment/haematuria with skin vasculitis', mechanism: 'Systemic involvement (check urinalysis)', significance: 'key' },
  ],

  investigations: [
    { clue: 'The hallmark skin sign of small-vessel vasculitis', meaning: 'Palpable purpura' },
    { clue: 'The commonest histological type', meaning: 'Leukocytoclastic vasculitis (Type III)' },
    { clue: 'The childhood vasculitis with IgA deposition', meaning: 'IgA vasculitis (Henoch-Schönlein purpura)' },
    { clue: 'The key test for systemic involvement', meaning: 'Urinalysis (renal involvement)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Cutaneous vasculitis is often a "skin window" onto a trigger (infection, drug, connective-tissue disease, malignancy) and onto systemic disease, so recognising palpable purpura mandates a search for the cause AND assessment for organ (especially renal) involvement (urinalysis). Skin-limited disease may resolve with trigger removal, but systemic vasculitis needs immunosuppression. The Type III mechanism is in [[cutaneous-hypersensitivity-reactions]]; the panniculitis/overview is [[panniculitis-vasculitis-skin]].' },
  ],

  mnemonics: [
    { hook: '"Palpable purpura = small-vessel vasculitis (leukocytoclastic, Type III)"', expansion: ['IgA vasculitis = HSP (kids)', 'Check urinalysis (renal)'] },
    { hook: 'IgA vasculitis tetrad: "Purpura + Arthralgia + Abdominal pain + Nephritis"', expansion: ['Find the trigger', 'Classify by vessel size'] },
  ],

  traps: [
    {
      questionCategory: 'Assessing systemic involvement in cutaneous vasculitis',
      wrongInstinct: 'Skin vasculitis (palpable purpura) is just a skin problem that will settle on its own',
      rightAnswer: 'Cutaneous vasculitis can be the visible sign of SYSTEMIC vasculitis, so palpable purpura mandates evaluation for a TRIGGER and for ORGAN involvement — especially RENAL disease (URINALYSIS for blood/protein) — because renal or other systemic involvement changes prognosis and requires immunosuppression, not just observation',
      why: 'Missing renal or systemic involvement behind skin vasculitis risks progressive organ damage; urinalysis and a systemic assessment are essential even when the skin looks isolated.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A child presents with palpable purpura over the buttocks and legs, joint pain, abdominal pain and haematuria. The diagnosis is:',
      options: [
        { id: 'a', text: 'Erythema nodosum' },
        { id: 'b', text: 'IgA vasculitis (Henoch-Schönlein purpura)' },
        { id: 'c', text: 'Thrombocytopenia' },
        { id: 'd', text: 'Cellulitis' },
      ],
      answerId: 'b',
      explanation: 'IgA vasculitis (Henoch-Schönlein purpura), the commonest childhood vasculitis, presents with palpable purpura (buttocks/legs), arthralgia, abdominal pain and nephritis, with IgA immune-complex deposition. Renal involvement should be monitored with urinalysis.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Palpable (raised, non-blanching) purpura is the hallmark of:',
      options: [
        { id: 'a', text: 'A platelet (thrombocytopenic) disorder' },
        { id: 'b', text: 'Small-vessel (leukocytoclastic) vasculitis' },
        { id: 'c', text: 'Panniculitis' },
        { id: 'd', text: 'Cellulitis' },
      ],
      answerId: 'b',
      explanation: 'Palpable purpura (you can feel the raised lesion) indicates inflammation of vessel walls — small-vessel leukocytoclastic vasculitis (immune-complex/Type III). Flat, non-palpable purpura instead suggests a platelet or coagulation disorder.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default cutaneousVasculitis;
