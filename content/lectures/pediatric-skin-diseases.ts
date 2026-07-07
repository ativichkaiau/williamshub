import type { Lecture } from '../../lib/types';

export const pediatricSkinDiseases: Lecture = {
  id: 'pediatric-skin-diseases',
  title: 'Common Pediatric Skin Diseases',
  system: 'derm',
  source: 'L13 — Pediatric Skin Diseases',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L13 Pediatric Skin' },
    { kind: 'mechanism', label: 'Neonatal, eczema, exanthems, birthmarks' },
    { kind: 'exam', label: 'Atopic dermatitis; haemangioma' },
  ],

  highYield: [
    'Many benign NEONATAL rashes need only reassurance: erythema toxicum neonatorum (blotchy erythema with pustules, first days, self-limited), milia, neonatal cephalic pustulosis, and Mongolian spots (dermal melanocytosis — blue-grey sacral patches). ATOPIC DERMATITIS (eczema) is the commonest childhood inflammatory skin disease — itchy, ill-defined dermatitis in FLEXURES (older children/adults) but FACE/EXTENSORS in infants; part of the atopic march (asthma, allergic rhinitis), barrier/filaggrin defect.',
    'Viral EXANTHEMS: measles (Koplik spots → cephalocaudal rash), rubella, ROSEOLA (HHV-6 — high fever then rash as fever breaks), ERYTHEMA INFECTIOSUM (parvovirus B19 — "slapped cheek"), HAND-FOOT-AND-MOUTH (coxsackie — oral + acral vesicles), chickenpox (VZV — crops of "dew-drop" vesicles). VIRAL warts and MOLLUSCUM contagiosum (umbilicated papules) are common and self-limiting.',
    'Infections/infestations in children: IMPETIGO (honey crusts), tinea capitis (scalp ringworm — needs ORAL antifungal), scabies (palms/soles involved in infants), and staphylococcal SCALDED SKIN SYNDROME (toxin-mediated superficial peeling in young children). VASCULAR birthmarks: INFANTILE HAEMANGIOMA (appears after birth, proliferates then involutes — treat problematic ones with propranolol) vs PORT-WINE STAIN (capillary malformation, persistent; if V1 trigeminal → consider Sturge-Weber).',
    'Other: seborrhoeic dermatitis ("cradle cap"), diaper (napkin) dermatitis (irritant, ± candida with satellite pustules), café-au-lait macules (≥6 large → neurofibromatosis 1). Most childhood rashes are benign, but recognise the treatable/serious ones (tinea capitis needs oral therapy; SSSS/eczema herpeticum are emergencies; multiple café-au-lait → NF1).',
    '**The take-home: benign neonatal rashes (erythema toxicum, milia, Mongolian spots — reassure); ATOPIC DERMATITIS (flexural/infantile facial, atopic march, barrier defect); viral exanthems (roseola, slapped cheek, HFM, measles); haemangioma (involutes; propranolol) vs port-wine stain (persistent; Sturge-Weber); tinea capitis needs ORAL antifungal.** Atopic dermatitis detail is in [[eczema-dermatitis]]; infections in [[skin-infections-bacterial-fungal-viral]]; scabies in [[infestations-helminthic-skin]].',
  ],

  mechanism: {
    title: 'Benign neonatal (reassure) / atopic dermatitis (flexural, barrier) / viral exanthems / birthmarks (haemangioma vs port-wine)',
    steps: [
      { id: 's1', label: 'Benign neonatal: erythema toxicum, milia, Mongolian spots → reassurance', emphasis: 'key' },
      { id: 's2', label: 'Atopic dermatitis: itchy flexural (infants: face/extensors); atopic march; barrier/filaggrin', emphasis: 'key' },
      { id: 's3', label: 'Viral exanthems: roseola (HHV-6), slapped cheek (parvovirus B19), HFM (coxsackie), measles', emphasis: 'key' },
      { id: 's4', label: 'Tinea capitis → ORAL antifungal; SSSS = toxin peeling (young children)', emphasis: 'danger' },
      { id: 's5', label: 'Haemangioma (proliferate→involute, propranolol) vs port-wine stain (persistent; Sturge-Weber if V1)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Itchy dermatitis of the antecubital/popliteal flexures in a child with asthma', mechanism: 'Atopic dermatitis (atopic march)', significance: 'key' },
    { sign: 'High fever for days, then a rash as the fever resolves', mechanism: 'Roseola (HHV-6)', significance: 'key' },
    { sign: 'Bright "slapped cheek" erythema in a child', mechanism: 'Erythema infectiosum (parvovirus B19)', significance: 'supportive' },
    { sign: 'A red vascular tumour appearing after birth that later involutes', mechanism: 'Infantile haemangioma (propranolol if problematic)', significance: 'key' },
    { sign: 'A persistent flat port-wine stain in the V1 trigeminal area', mechanism: 'Capillary malformation — consider Sturge-Weber', significance: 'key' },
  ],

  investigations: [
    { clue: 'The commonest chronic inflammatory skin disease of childhood', meaning: 'Atopic dermatitis (eczema)' },
    { clue: 'The exanthem with high fever then rash as fever breaks', meaning: 'Roseola (HHV-6)' },
    { clue: 'The birthmark that proliferates then spontaneously involutes', meaning: 'Infantile haemangioma' },
    { clue: 'The childhood scalp infection needing oral antifungal', meaning: 'Tinea capitis' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Most paediatric rashes are benign and need reassurance, but a few need action: tinea capitis requires oral (not topical) antifungal, problematic infantile haemangiomas respond to propranolol, and a V1 port-wine stain prompts evaluation for Sturge-Weber; staphylococcal scalded skin syndrome and eczema herpeticum are emergencies. Atopic dermatitis management (emollients, topical steroids) is detailed in [[eczema-dermatitis]]; infections and infestations recur from [[skin-infections-bacterial-fungal-viral]] and [[infestations-helminthic-skin]].' },
  ],

  mnemonics: [
    { hook: '"Haemangioma appears After birth and involutes (propranolol); port-wine is Present at birth and persists (Sturge-Weber if V1)"', expansion: ['Atopic derm = flexural + atopic march', 'Roseola = fever then rash'] },
    { hook: 'Neonatal benign: "erythema toxicum, milia, Mongolian spot → reassure"', expansion: ['Tinea capitis = oral antifungal', '≥6 café-au-lait → NF1'] },
  ],

  traps: [
    {
      questionCategory: 'Haemangioma vs port-wine stain',
      wrongInstinct: 'All vascular birthmarks are permanent and should be treated the same way',
      rightAnswer: 'They behave oppositely: an INFANTILE HAEMANGIOMA (a vascular TUMOUR) usually appears AFTER birth, proliferates, then spontaneously INVOLUTES over years (treat only if vision/airway/ulceration threatened — propranolol), whereas a PORT-WINE STAIN (a capillary MALFORMATION) is present at birth, PERSISTS and grows with the child, and if in the V1 trigeminal distribution warrants evaluation for Sturge-Weber syndrome',
      why: 'Tumour (haemangioma, involutes) vs malformation (port-wine, persists) determines prognosis and management — reassurance/observation vs laser and syndrome work-up — so distinguishing them avoids both over- and under-treatment.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A vascular birthmark that appears in the weeks after birth, enlarges over months, then spontaneously regresses over several years is a(n):',
      options: [
        { id: 'a', text: 'Port-wine stain (capillary malformation)' },
        { id: 'b', text: 'Infantile haemangioma' },
        { id: 'c', text: 'Mongolian spot' },
        { id: 'd', text: 'Café-au-lait macule' },
      ],
      answerId: 'b',
      explanation: 'Infantile haemangiomas are vascular tumours that typically appear after birth, proliferate, then involute over years; problematic lesions (threatening vision, airway or ulcerating) are treated with propranolol. Port-wine stains are capillary malformations that persist and may signal Sturge-Weber when in the V1 distribution.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Atopic dermatitis in older children characteristically involves the:',
      options: [
        { id: 'a', text: 'Extensor surfaces with silvery scale' },
        { id: 'b', text: 'Flexural areas (antecubital and popliteal fossae)' },
        { id: 'c', text: 'Palms and soles only' },
        { id: 'd', text: 'Scalp with honey-coloured crust' },
      ],
      answerId: 'b',
      explanation: 'In older children and adults, atopic dermatitis favours the flexures (antecubital and popliteal fossae) with itchy, ill-defined, often lichenified dermatitis; in infants it involves the face and extensor surfaces. It reflects a skin-barrier (filaggrin) defect and the atopic march.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default pediatricSkinDiseases;
