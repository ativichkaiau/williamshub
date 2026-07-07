import type { Lecture } from '../../lib/types';

export const vascularBirthmarksGenodermatoses: Lecture = {
  id: 'vascular-birthmarks-genodermatoses',
  title: 'Birthmarks & Genodermatoses',
  system: 'derm',
  source: 'L13 — Pediatric Skin Diseases',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L13 Birthmarks' },
    { kind: 'mechanism', label: 'Vascular tumour vs malformation; genetic skin' },
    { kind: 'exam', label: 'Haemangioma vs port-wine; NF1/TS' },
  ],

  highYield: [
    'VASCULAR birthmarks split into TUMOURS and MALFORMATIONS. INFANTILE HAEMANGIOMA (a vascular TUMOUR) usually appears AFTER birth, PROLIFERATES for months, then INVOLUTES over years — treat only if it threatens vision, airway, feeding or ulcerates (propranolol). PORT-WINE STAIN (a capillary MALFORMATION) is present at birth, PERSISTS and darkens with age; a V1 (trigeminal) port-wine stain warrants evaluation for STURGE-WEBER (leptomeningeal angioma, seizures, glaucoma).',
    'PIGMENTED birthmarks: café-au-lait macules (≥6 large ones → NEUROFIBROMATOSIS 1), congenital melanocytic naevi (large ones carry melanoma risk), and Mongolian spots (benign). SALMON PATCH ("stork bite") is a common, fading facial/nuchal capillary malformation.',
    'GENODERMATOSES (inherited skin disorders) often have systemic associations: NEUROFIBROMATOSIS 1 (café-au-lait, neurofibromas, axillary freckling, Lisch nodules); TUBEROUS SCLEROSIS (ash-leaf macules, shagreen patch, facial angiofibromas, seizures/learning difficulty); ICHTHYOSES (generalised scaling — filaggrin/other defects); and EPIDERMOLYSIS BULLOSA (blistering from minor trauma, due to structural protein defects — keratin/collagen VII).',
    'These are recognised by their birthmarks/skin signs, which are CLUES to a syndrome — so the skin exam prompts systemic evaluation (neuroimaging, ophthalmology, genetics) and appropriate referral. Management ranges from observation (most benign birthmarks) to laser (port-wine stain), propranolol (problematic haemangioma) and multidisciplinary genodermatosis care.',
    '**The take-home: haemangioma (tumour, appears after birth → involutes; propranolol if problematic) vs port-wine stain (malformation, persists; V1 → Sturge-Weber); ≥6 café-au-lait → NF1; ash-leaf/angiofibromas → tuberous sclerosis; epidermolysis bullosa (trauma blistering). Skin signs flag syndromes → investigate.** Neonatal rashes are in [[neonatal-skin-conditions]]; the pediatric overview is [[pediatric-skin-diseases]].',
  ],

  mechanism: {
    title: 'Haemangioma (tumour, involutes, propranolol) vs port-wine (malformation, persists, Sturge-Weber); café-au-lait→NF1; ash-leaf→TS; epidermolysis bullosa',
    steps: [
      { id: 's1', label: 'Infantile haemangioma = tumour: appears after birth → proliferate → involute (propranolol if threatening)', emphasis: 'key' },
      { id: 's2', label: 'Port-wine stain = capillary malformation: persists; V1 → Sturge-Weber (seizures/glaucoma)', emphasis: 'danger' },
      { id: 's3', label: '≥6 café-au-lait macules → neurofibromatosis 1', emphasis: 'key' },
      { id: 's4', label: 'Tuberous sclerosis: ash-leaf macules, shagreen patch, angiofibromas (seizures/learning)', emphasis: 'key' },
      { id: 's5', label: 'Epidermolysis bullosa = trauma-induced blistering (structural protein defect); ichthyoses', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'A red vascular lesion appearing after birth that later involutes', mechanism: 'Infantile haemangioma (propranolol if problematic)', significance: 'key' },
    { sign: 'A persistent flat port-wine stain in the V1 trigeminal area', mechanism: 'Consider Sturge-Weber syndrome', significance: 'key' },
    { sign: 'Six or more large café-au-lait macules + axillary freckling', mechanism: 'Neurofibromatosis type 1', significance: 'key' },
    { sign: 'Ash-leaf macules, facial angiofibromas and seizures', mechanism: 'Tuberous sclerosis', significance: 'key' },
    { sign: 'Blistering of skin with minor friction/trauma from birth', mechanism: 'Epidermolysis bullosa', significance: 'key' },
  ],

  investigations: [
    { clue: 'The vascular birthmark that involutes', meaning: 'Infantile haemangioma (a tumour)' },
    { clue: 'The persistent vascular malformation (V1 → syndrome)', meaning: 'Port-wine stain (Sturge-Weber if V1)' },
    { clue: 'The number of café-au-lait macules suggesting NF1', meaning: 'Six or more (large)' },
    { clue: 'The genodermatosis with trauma-induced blistering', meaning: 'Epidermolysis bullosa' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Birthmarks and genodermatoses are the skin\'s clues to syndromes: distinguishing an involuting haemangioma (observe; propranolol if it threatens vision/airway/feeding or ulcerates) from a persistent port-wine stain (laser; evaluate for Sturge-Weber if V1) changes management, and pigmented/other signs (≥6 café-au-lait → NF1; ash-leaf → tuberous sclerosis) prompt neuro/ophthalmology/genetics evaluation. Epidermolysis bullosa needs multidisciplinary care. Neonatal rashes are in [[neonatal-skin-conditions]]; overview [[pediatric-skin-diseases]].' },
  ],

  mnemonics: [
    { hook: '"Haemangioma After birth → involutes (propranolol); Port-wine Present at birth → persists (V1=Sturge-Weber)"', expansion: ['≥6 café-au-lait → NF1', 'Ash-leaf/angiofibroma → tuberous sclerosis'] },
    { hook: '"Epidermolysis Bullosa = Blisters from trauma (structural protein defect)"', expansion: ['Congenital naevus → melanoma risk', 'Skin sign = syndrome clue'] },
  ],

  traps: [
    {
      questionCategory: 'Haemangioma vs port-wine stain behaviour',
      wrongInstinct: 'All vascular birthmarks are permanent and require the same treatment',
      rightAnswer: 'They behave oppositely: an INFANTILE HAEMANGIOMA (vascular TUMOUR) appears AFTER birth, proliferates then spontaneously INVOLUTES (treat only if function-threatening/ulcerating — propranolol), whereas a PORT-WINE STAIN (capillary MALFORMATION) is present at birth, PERSISTS and grows with the child (laser), and if in the V1 distribution warrants evaluation for Sturge-Weber syndrome',
      why: 'Tumour (involutes) vs malformation (persists) determines whether to observe/treat and whether to screen for an associated syndrome — distinguishing them avoids both over- and under-treatment.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Six or more large café-au-lait macules, especially with axillary freckling, suggest which genodermatosis?',
      options: [
        { id: 'a', text: 'Tuberous sclerosis' },
        { id: 'b', text: 'Neurofibromatosis type 1' },
        { id: 'c', text: 'Epidermolysis bullosa' },
        { id: 'd', text: 'Ichthyosis vulgaris' },
      ],
      answerId: 'b',
      explanation: 'Multiple (≥6) large café-au-lait macules with axillary/inguinal freckling are diagnostic features of neurofibromatosis type 1 (also neurofibromas, Lisch nodules). Tuberous sclerosis features ash-leaf macules, shagreen patches and angiofibromas.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A persistent flat vascular birthmark present at birth in the ophthalmic (V1) trigeminal distribution should prompt evaluation for:',
      options: [
        { id: 'a', text: 'Neurofibromatosis' },
        { id: 'b', text: 'Sturge-Weber syndrome' },
        { id: 'c', text: 'Tuberous sclerosis' },
        { id: 'd', text: 'Epidermolysis bullosa' },
      ],
      answerId: 'b',
      explanation: 'A port-wine stain (capillary malformation) in the V1 distribution can be associated with Sturge-Weber syndrome (leptomeningeal angioma, seizures, glaucoma), so it warrants neuroimaging and ophthalmological evaluation. Unlike haemangiomas, port-wine stains persist.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default vascularBirthmarksGenodermatoses;
