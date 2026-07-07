import type { Lecture } from '../../lib/types';

export const eczemaDermatitis: Lecture = {
  id: 'eczema-dermatitis',
  title: 'Eczema & Dermatitis',
  system: 'derm',
  source: 'L16 — Eczema & Dermatitis',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L16 Eczema' },
    { kind: 'mechanism', label: 'Barrier defect + inflammation' },
    { kind: 'exam', label: 'Atopic, contact, seborrhoeic' },
  ],

  highYield: [
    '"Eczema" and "dermatitis" are interchangeable terms for an itchy inflammatory reaction pattern: ACUTE eczema is red, weepy, vesicular; CHRONIC eczema is dry, scaly and LICHENIFIED (thickened with accentuated markings from rubbing). ITCH is the cardinal symptom ("the itch that rashes"), and a defective skin BARRIER lets in irritants/allergens and water out.',
    'ATOPIC DERMATITIS is the commonest type — a chronic, relapsing, intensely itchy dermatitis with a BARRIER defect (FILAGGRIN mutations) and Th2 inflammation, part of the ATOPIC MARCH (asthma, allergic rhinitis, food allergy). Distribution: FACE/EXTENSORS in infants, FLEXURES (antecubital/popliteal) in older children/adults. Complications: bacterial superinfection and ECZEMA HERPETICUM (disseminated HSV — an emergency needing aciclovir).',
    'CONTACT dermatitis: IRRITANT (non-immune, direct damage — commonest, e.g. hands of cleaners/detergents) vs ALLERGIC (Type IV delayed hypersensitivity, patch-test positive — nickel, fragrances, poison ivy). SEBORRHOEIC dermatitis (greasy yellow scale on scalp/face/nasolabial folds, Malassezia-associated; cradle cap in infants, and prominent in Parkinson\'s/HIV). Other patterns: nummular (coin-shaped), dyshidrotic (pompholyx — vesicles on palms/soles), stasis (venous) dermatitis.',
    'Treatment principles (the "eczema ladder"): (1) EMOLLIENTS/moisturisers liberally (barrier repair — the foundation) + avoid triggers/irritants; (2) TOPICAL CORTICOSTEROIDS for flares (potency matched to site/severity) or topical calcineurin inhibitors (face/flexures, steroid-sparing); (3) treat infection; (4) phototherapy and systemic/biologic agents (e.g. dupilumab) for severe disease. Patient education on daily moisturising is key.',
    '**The take-home: eczema/dermatitis = itchy inflammatory pattern (acute weepy → chronic lichenified) with a BARRIER defect; ATOPIC (filaggrin, atopic march, flexural; watch eczema herpeticum), CONTACT (irritant vs allergic Type IV/patch test), SEBORRHOEIC (Malassezia, greasy scale). Treat with emollients + topical steroids/calcineurin inhibitors.** The barrier is from [[skin-physiology-thermoregulation]]; contact hypersensitivity from [[cutaneous-immunology-hypersensitivity]]; topical steroid potency in [[dermatologic-therapy]].',
  ],

  mechanism: {
    title: 'Barrier defect + inflammation → itch; atopic (filaggrin/flexural), contact (irritant vs allergic Type IV), seborrhoeic (Malassezia); ladder Rx',
    steps: [
      { id: 's1', label: 'Eczema = itchy inflammatory pattern; acute weepy → chronic lichenified; barrier defect', emphasis: 'key' },
      { id: 's2', label: 'Atopic dermatitis: filaggrin/Th2, atopic march; infants face/extensor, older flexural', emphasis: 'key' },
      { id: 's3', label: 'Eczema herpeticum = disseminated HSV → emergency (aciclovir)', emphasis: 'danger' },
      { id: 's4', label: 'Contact: irritant (non-immune, common) vs allergic (Type IV, patch test); seborrhoeic (Malassezia)', emphasis: 'key' },
      { id: 's5', label: 'Ladder: emollients (foundation) → topical steroid/calcineurin inhibitor → treat infection → systemic', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Itchy, lichenified flexural dermatitis in a child with asthma/hay fever', mechanism: 'Atopic dermatitis (atopic march, barrier defect)', significance: 'key' },
    { sign: 'Sudden painful punched-out erosions/vesicles over eczema with fever', mechanism: 'Eczema herpeticum (disseminated HSV) — emergency', significance: 'key' },
    { sign: 'Hand dermatitis in a cleaner without prior sensitisation', mechanism: 'Irritant contact dermatitis (non-immune)', significance: 'key' },
    { sign: 'Greasy yellow scale on the scalp and nasolabial folds', mechanism: 'Seborrhoeic dermatitis (Malassezia)', significance: 'supportive' },
    { sign: 'Itchy vesicles on the palms and soles', mechanism: 'Dyshidrotic eczema (pompholyx)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The barrier gene commonly mutated in atopic dermatitis', meaning: 'Filaggrin' },
    { clue: 'The distribution of atopic dermatitis in older children', meaning: 'Flexural (antecubital/popliteal)' },
    { clue: 'The test to identify allergic contact dermatitis', meaning: 'Patch testing (Type IV)' },
    { clue: 'The foundation of eczema treatment', meaning: 'Emollients/moisturisers (barrier repair)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Eczema management rests on barrier repair (liberal emollients) plus stepwise anti-inflammatory therapy (topical corticosteroids by potency/site, calcineurin inhibitors for face/flexures, then phototherapy/biologics like dupilumab for severe disease) and trigger avoidance. Recognising eczema herpeticum (disseminated HSV) as an emergency prevents catastrophe. Contact dermatitis needs the irritant-vs-allergic distinction ([[cutaneous-immunology-hypersensitivity]]); barrier physiology is in [[skin-physiology-thermoregulation]] and topical steroid selection in [[dermatologic-therapy]].' },
  ],

  mnemonics: [
    { hook: '"Eczema = the itch that rashes"; emollients first, then topical steroid', expansion: ['Atopic = flexural + atopic march', 'Acute weepy → chronic lichenified'] },
    { hook: 'Contact: "Irritant = anyone (common); Allergic = sensitised (Type IV, patch+)"', expansion: ['Seborrhoeic = Malassezia/greasy scale', 'Eczema herpeticum = HSV emergency'] },
  ],

  traps: [
    {
      questionCategory: 'Eczema herpeticum recognition',
      wrongInstinct: 'Worsening, painful eczema is just a bad flare that needs stronger topical steroids',
      rightAnswer: 'Rapidly worsening eczema with PAINFUL, monomorphic PUNCHED-OUT erosions/vesicles, fever and malaise suggests ECZEMA HERPETICUM (disseminated herpes simplex) — a dermatological EMERGENCY needing systemic ACICLOVIR, not more topical steroid (steroids alone can worsen it)',
      why: 'Missing eczema herpeticum and escalating steroids can lead to widespread HSV dissemination and serious complications; the painful punched-out lesions and systemic upset are the clues to switch to antivirals urgently.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The foundation (first-line, everyday) treatment of atopic dermatitis is:',
      options: [
        { id: 'a', text: 'Oral corticosteroids' },
        { id: 'b', text: 'Liberal emollients/moisturisers for barrier repair (plus trigger avoidance)' },
        { id: 'c', text: 'Systemic antibiotics' },
        { id: 'd', text: 'Phototherapy' },
      ],
      answerId: 'b',
      explanation: 'Because atopic dermatitis is driven by a skin-barrier defect, liberal daily emollients (with trigger/irritant avoidance) are the foundation of care. Topical corticosteroids or calcineurin inhibitors are added for flares, with phototherapy and systemic/biologic agents reserved for severe disease.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'Greasy yellow scaling on the scalp, eyebrows and nasolabial folds, associated with Malassezia yeast, describes:',
      options: [
        { id: 'a', text: 'Atopic dermatitis' },
        { id: 'b', text: 'Seborrhoeic dermatitis' },
        { id: 'c', text: 'Allergic contact dermatitis' },
        { id: 'd', text: 'Psoriasis' },
      ],
      answerId: 'b',
      explanation: 'Seborrhoeic dermatitis produces greasy yellow scale in sebaceous-rich areas (scalp, eyebrows, nasolabial folds), associated with Malassezia; it appears as cradle cap in infants and is prominent in Parkinson\'s disease and HIV. Treatment includes antifungal shampoos and mild topical steroids.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default eczemaDermatitis;
