import type { Lecture } from '../../lib/types';

export const panniculitisVasculitisSkin: Lecture = {
  id: 'panniculitis-vasculitis-skin',
  title: 'Panniculitis & Cutaneous Vasculitis',
  system: 'derm',
  source: 'L10 — Panniculitis & Vasculitis',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L10 Panniculitis & Vasculitis' },
    { kind: 'mechanism', label: 'Fat vs vessel inflammation' },
    { kind: 'exam', label: 'Erythema nodosum; palpable purpura' },
  ],

  highYield: [
    'PANNICULITIS = inflammation of the SUBCUTANEOUS FAT → tender, deep, erythematous NODULES. ERYTHEMA NODOSUM is the commonest form: crops of tender red nodules on the SHINS (anterior legs) that DO NOT ulcerate and heal like a bruise; it is a reactive (delayed hypersensitivity) septal panniculitis. Causes ("SORE SHINS"): Streptococcus, Sarcoidosis, TB, drugs (sulfonamides, OCP), inflammatory bowel disease, pregnancy, and idiopathic — so it is a clue to a systemic trigger.',
    'CUTANEOUS VASCULITIS = inflammation of blood-vessel walls in the skin. Small-vessel (leukocytoclastic) vasculitis presents as PALPABLE PURPURA — non-blanching, raised purpuric papules on dependent areas (lower legs) — from immune-complex deposition (Type III); causes include infections, drugs, connective-tissue disease and IgA vasculitis (Henoch-Schönlein) in children (purpura + arthralgia + abdominal pain + nephritis).',
    'The clinical distinction: panniculitis = DEEP, TENDER NODULES (fat); vasculitis = PALPABLE PURPURA / petechiae (vessels), which may progress to necrosis/ulceration. Purpura that is PALPABLE implies vasculitis (vessel-wall inflammation), whereas flat (macular) purpura suggests a platelet/coagulation problem — an important bedside branch point.',
    'Work-up and management are cause-directed: for erythema nodosum, look for and treat the trigger (throat swab/ASO, chest X-ray for sarcoid/TB, review drugs, screen for IBD) — most resolve with rest/NSAIDs; for cutaneous vasculitis, identify infection/drug/systemic disease, assess for SYSTEMIC/renal involvement (urinalysis), and treat the cause ± immunosuppression. Both are often "skin windows" onto internal disease.',
    '**The take-home: PANNICULITIS (fat) → tender shin nodules = ERYTHEMA NODOSUM (reactive to strep/sarcoid/TB/drugs/IBD/pregnancy, non-ulcerating); VASCULITIS (vessels) → PALPABLE PURPURA (leukocytoclastic, Type III; check for renal/systemic involvement, e.g. IgA vasculitis). Palpable purpura = vasculitis until proven otherwise.** The Type III mechanism is from [[cutaneous-immunology-hypersensitivity]]; connective-tissue disease overlaps [[cutaneous-connective-tissue-diseases]]; the fat/vessel anatomy is in [[skin-anatomy-histology]].',
  ],

  mechanism: {
    title: 'Panniculitis (fat → tender nodules = erythema nodosum) vs vasculitis (vessels → palpable purpura, Type III); find the trigger',
    steps: [
      { id: 's1', label: 'Panniculitis = subcutaneous fat inflammation → tender deep nodules', emphasis: 'key' },
      { id: 's2', label: 'Erythema nodosum: tender shin nodules, non-ulcerating; reactive to a systemic trigger', emphasis: 'key' },
      { id: 's3', label: 'EN causes: strep, sarcoid, TB, drugs (sulfa/OCP), IBD, pregnancy, idiopathic', emphasis: 'key' },
      { id: 's4', label: 'Cutaneous vasculitis = vessel-wall inflammation → PALPABLE PURPURA (Type III)', emphasis: 'key' },
      { id: 's5', label: 'Palpable purpura → assess systemic/renal involvement (urinalysis); treat cause', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Crops of tender red nodules on the shins that heal like bruises', mechanism: 'Erythema nodosum (septal panniculitis)', significance: 'key' },
    { sign: 'Non-blanching, raised purpuric papules on the lower legs', mechanism: 'Leukocytoclastic (small-vessel) vasculitis — palpable purpura', significance: 'key' },
    { sign: 'Purpura + arthralgia + abdominal pain + haematuria in a child', mechanism: 'IgA vasculitis (Henoch-Schönlein)', significance: 'key' },
    { sign: 'Erythema nodosum with hilar lymphadenopathy on chest X-ray', mechanism: 'Sarcoidosis (Löfgren syndrome)', significance: 'supportive' },
    { sign: 'Flat (macular), non-palpable purpura', mechanism: 'Platelet/coagulation disorder (not vasculitis)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The commonest panniculitis (tender shin nodules)', meaning: 'Erythema nodosum' },
    { clue: 'The skin sign of small-vessel vasculitis', meaning: 'Palpable purpura' },
    { clue: 'The hypersensitivity type of leukocytoclastic vasculitis', meaning: 'Type III (immune complex)' },
    { clue: 'The key test for systemic involvement in cutaneous vasculitis', meaning: 'Urinalysis (renal involvement)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Both are "skin windows" onto systemic disease: erythema nodosum should prompt a search for strep, sarcoidosis, TB, IBD, drugs or pregnancy (and usually resolves with rest/NSAIDs), while palpable purpura signals vasculitis needing evaluation for infection/drug/connective-tissue triggers and, crucially, renal/systemic involvement (urinalysis). The Type III mechanism links to [[cutaneous-immunology-hypersensitivity]]; connective-tissue disease overlaps ([[cutaneous-connective-tissue-diseases]]); severe cases may need immunosuppression ([[dermatologic-therapy]]).' },
  ],

  mnemonics: [
    { hook: '"Panniculitis = deep tender nodules (fat); Vasculitis = palpable purpura (vessels)"', expansion: ['EN on shins, non-ulcerating', 'Palpable purpura = vasculitis'] },
    { hook: 'Erythema nodosum causes "SORE SHINS": Strep, sarcOid, tb, dRugs, Ibd, pregNancy', expansion: ['Löfgren = EN + hilar nodes', 'Check urinalysis in vasculitis'] },
  ],

  traps: [
    {
      questionCategory: 'Palpable vs non-palpable purpura',
      wrongInstinct: 'All purpura reflects a low platelet count or clotting problem',
      rightAnswer: 'PALPABLE purpura (raised, you can feel it) implies VASCULITIS — inflammation of the vessel wall (leukocytoclastic, Type III) — and mandates a search for systemic/renal involvement, whereas FLAT (macular, non-palpable) purpura suggests a PLATELET or COAGULATION disorder; whether the purpura is palpable is the key bedside branch point',
      why: 'The "palpable" quality distinguishes an inflammatory vessel disease (needing vasculitis work-up including kidneys) from a haemostatic problem (needing platelet/coagulation work-up) — different diagnoses and investigations entirely.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Crops of tender, red, non-ulcerating nodules on the anterior shins that resolve like a bruise are characteristic of:',
      options: [
        { id: 'a', text: 'Leukocytoclastic vasculitis' },
        { id: 'b', text: 'Erythema nodosum' },
        { id: 'c', text: 'Pyoderma gangrenosum' },
        { id: 'd', text: 'Cellulitis' },
      ],
      answerId: 'b',
      explanation: 'Erythema nodosum is a reactive septal panniculitis presenting as tender red nodules on the shins that do not ulcerate and heal with bruise-like colour change. It signals a systemic trigger (streptococcus, sarcoidosis, TB, drugs, IBD, pregnancy), which should be sought.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Palpable purpura on the lower legs most specifically indicates:',
      options: [
        { id: 'a', text: 'Thrombocytopenia' },
        { id: 'b', text: 'Small-vessel (leukocytoclastic) vasculitis' },
        { id: 'c', text: 'A clotting factor deficiency' },
        { id: 'd', text: 'Panniculitis' },
      ],
      answerId: 'b',
      explanation: 'Palpable (raised) purpura reflects inflammation of vessel walls — leukocytoclastic small-vessel vasculitis (Type III immune-complex) — and warrants evaluation for triggers and systemic/renal involvement. Flat, non-palpable purpura instead suggests a platelet or coagulation disorder.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default panniculitisVasculitisSkin;
