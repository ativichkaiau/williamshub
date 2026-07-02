import type { Lecture } from '../../lib/types';

export const atopicDermatitisClinical: Lecture = {
  id: 'atopic-dermatitis-clinical',
  title: 'Atopic Dermatitis: Clinical & Management',
  system: 'derm',
  source: 'L16 — Eczema & Dermatitis',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L16 Atopic Dermatitis' },
    { kind: 'mechanism', label: 'Barrier + Th2; the ladder' },
    { kind: 'exam', label: 'Distribution by age; complications' },
  ],

  highYield: [
    '**Atopic dermatitis (atopic eczema) is a chronic, relapsing, intensely ITCHY inflammatory dermatitis from a BARRIER defect (FILAGGRIN mutations) + Th2 immune skew, part of the ATOPIC MARCH (asthma, allergic rhinitis, food allergy). "The itch that rashes" — scratching drives lichenification. It usually starts in infancy and often improves with age.**',
    '**DISTRIBUTION by age: INFANTS — face and EXTENSOR surfaces (and scalp); older children/adults — FLEXURES (antecubital/popliteal fossae, neck, wrists). Chronic disease → dry, lichenified plaques; associated signs include Dennie-Morgan folds, pityriasis alba and keratosis pilaris. Diagnosis is clinical (itch + typical morphology/distribution + atopic history).**',
    '**COMPLICATIONS: bacterial SUPERINFECTION (S. aureus — weeping/crusting) and ECZEMA HERPETICUM (disseminated HSV — painful monomorphic punched-out erosions + fever → an EMERGENCY needing systemic aciclovir). Chronic disease impairs sleep and quality of life; food-allergy testing is only indicated with a suggestive history.**',
    '**MANAGEMENT "ladder": (1) EMOLLIENTS liberally + trigger/irritant avoidance (the FOUNDATION — barrier repair); (2) TOPICAL CORTICOSTEROIDS for flares (potency to site) or topical CALCINEURIN inhibitors (face/flexures, steroid-sparing); (3) treat infection; (4) for severe disease — phototherapy, systemic immunosuppressants and BIOLOGICS (DUPILUMAB, anti-IL-4/13; JAK inhibitors). Education on daily emollient use is key.**',
    '**The take-home: atopic dermatitis = itchy, barrier-defective (filaggrin), Th2 dermatitis of the atopic march — infants face/extensor, older flexural; watch bacterial infection and ECZEMA HERPETICUM (emergency); treat with EMOLLIENTS (foundation) + topical steroids/calcineurin inhibitors → phototherapy/dupilumab for severe disease.** The barrier is [[skin-barrier-function]]; contact dermatitis is [[contact-dermatitis-clinical]]; the overview is [[eczema-dermatitis]].',
  ],

  mechanism: {
    title: 'Barrier (filaggrin) + Th2 → itchy eczema (atopic march); infants face/extensor, older flexural; emollients foundation → steroids/calcineurin → dupilumab',
    steps: [
      { id: 's1', label: 'Barrier defect (filaggrin) + Th2; atopic march (asthma/rhinitis/food allergy)', emphasis: 'key' },
      { id: 's2', label: 'Distribution: infants face/extensor; older children/adults flexural', emphasis: 'key' },
      { id: 's3', label: 'Complications: S. aureus superinfection; ECZEMA HERPETICUM (HSV emergency)', emphasis: 'danger' },
      { id: 's4', label: 'Foundation = emollients + trigger avoidance; flares → topical steroid/calcineurin inhibitor', emphasis: 'key' },
      { id: 's5', label: 'Severe → phototherapy, dupilumab (anti-IL-4/13), JAK inhibitors', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Itchy, lichenified flexural dermatitis in a child with asthma/hay fever', mechanism: 'Atopic dermatitis (atopic march)', significance: 'key' },
    { sign: 'Face and extensor involvement in an infant', mechanism: 'Infantile atopic dermatitis distribution', significance: 'key' },
    { sign: 'Weeping, honey-crusted eczema', mechanism: 'S. aureus superinfection', significance: 'key' },
    { sign: 'Painful punched-out erosions + fever over eczema', mechanism: 'Eczema herpeticum (HSV) — emergency', significance: 'key' },
    { sign: 'Marked improvement in severe eczema on dupilumab', mechanism: 'Anti-IL-4/13 (Th2) biologic', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The barrier gene commonly mutated', meaning: 'Filaggrin' },
    { clue: 'The distribution in older children/adults', meaning: 'Flexural (antecubital/popliteal)' },
    { clue: 'The disseminated-HSV emergency over eczema', meaning: 'Eczema herpeticum (systemic aciclovir)' },
    { clue: 'The foundation of atopic dermatitis therapy', meaning: 'Emollients (barrier repair) + trigger avoidance' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Atopic dermatitis management is a stepped ladder anchored on daily emollients (barrier repair) with topical steroids/calcineurin inhibitors for flares, escalating to phototherapy and biologics (dupilumab)/JAK inhibitors for severe disease, plus prompt treatment of bacterial superinfection and recognition of eczema herpeticum (an emergency). Patient education on continuous emollient use reduces flares and steroid need. The barrier is in [[skin-barrier-function]]; contact dermatitis in [[contact-dermatitis-clinical]]; overview [[eczema-dermatitis]].' },
  ],

  mnemonics: [
    { hook: '"Infants face/extensor; older flexural"; foundation = emollients', expansion: ['Filaggrin + Th2', 'Atopic march'] },
    { hook: 'Ladder: "emollients → topical steroid/calcineurin → treat infection → dupilumab"', expansion: ['Eczema herpeticum = emergency', 'S. aureus superinfection'] },
  ],

  traps: [
    {
      questionCategory: 'Emollients as continuous therapy',
      wrongInstinct: 'Emollients are just a soothing extra; the real treatment is intermittent steroid cream during flares',
      rightAnswer: 'EMOLLIENTS are the FOUNDATION and are used CONTINUOUSLY (not just during flares) because atopic dermatitis is driven by a barrier defect — regular emollient use repairs the barrier, reduces water loss, and lowers flare frequency and STEROID requirement; relying on intermittent steroids alone leads to more flares',
      why: 'Because the barrier defect is central and ongoing, daily emollient use (between and during flares) is disease-modifying, whereas treating only flares with steroids misses the underlying driver.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'In an infant, atopic dermatitis characteristically involves the:',
      options: [
        { id: 'a', text: 'Flexures (antecubital/popliteal fossae)' },
        { id: 'b', text: 'Face and extensor surfaces' },
        { id: 'c', text: 'Palms and soles only' },
        { id: 'd', text: 'Scalp with silvery scale' },
      ],
      answerId: 'b',
      explanation: 'Infantile atopic dermatitis favours the face and extensor surfaces (and scalp), whereas in older children and adults it becomes flexural (antecubital/popliteal fossae). It reflects a barrier (filaggrin) defect and Th2 inflammation within the atopic march.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The foundation (used continuously) of atopic dermatitis management is:',
      options: [
        { id: 'a', text: 'Oral antibiotics' },
        { id: 'b', text: 'Liberal emollients plus trigger/irritant avoidance (barrier repair)' },
        { id: 'c', text: 'Systemic steroids' },
        { id: 'd', text: 'Antihistamines alone' },
      ],
      answerId: 'b',
      explanation: 'Because atopic dermatitis is driven by a skin-barrier defect, continuous liberal emollient use with trigger avoidance is foundational, reducing flares and steroid requirement. Topical corticosteroids/calcineurin inhibitors treat flares, with phototherapy and biologics (dupilumab) for severe disease.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default atopicDermatitisClinical;
