import type { Lecture } from '../../lib/types';

export const tissueRepairWoundHealing: Lecture = {
  id: 'tissue-repair-wound-healing',
  title: 'Tissue Repair: Regeneration & Wound Healing',
  system: 'pathology',
  source: 'L5 — Inflammation & Repair',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pathology' },
    { kind: 'lecture', label: 'L5 Repair' },
    { kind: 'mechanism', label: 'Labile/stable/permanent; granulation tissue' },
    { kind: 'exam', label: 'Primary vs secondary intention; keloid' },
  ],

  highYield: [
    'Tissue healing occurs by REGENERATION (restoration of normal tissue) or REPAIR by connective-tissue SCAR (fibrosis) — the balance depends on the PROLIFERATIVE CAPACITY of the tissue and whether the extracellular-matrix framework is intact. Cells are: LABILE (continuously dividing — surface epithelia, gut, bone marrow — regenerate well); STABLE (quiescent but can divide when stimulated — liver, kidney, fibroblasts); and PERMANENT (non-dividing — neurons, cardiac/skeletal muscle — heal by SCAR).',
    'When damage is more than trivial or the framework is destroyed, healing is by SCAR. The steps: haemostasis/clot → INFLAMMATION → formation of GRANULATION TISSUE (new capillaries by ANGIOGENESIS + fibroblasts + loose ECM, soft pink and granular) → fibroblast PROLIFERATION and COLLAGEN deposition → remodelling/maturation (type III collagen replaced by stronger type I; myofibroblast contraction) into a fibrous scar. Growth factors (VEGF, FGF, PDGF, TGF-β) drive angiogenesis and fibrosis.',
    'Skin wounds heal by FIRST INTENTION (primary union — clean, apposed edges e.g. a sutured incision: minimal tissue loss, little granulation, fine scar, fast) or SECOND INTENTION (large/open wounds with tissue loss: abundant granulation tissue, significant wound CONTRACTION by myofibroblasts, and a larger scar). Wound strength returns gradually (only ~10% at 1 week, ~70–80% by ~3 months — never fully normal).',
    'Healing can go WRONG: impaired by INFECTION, poor NUTRITION (vitamin C for collagen), DIABETES/ischaemia, glucocorticoids (↓collagen), foreign bodies, and mechanical stress. Aberrant healing: DEHISCENCE (wound rupture), ULCERATION (inadequate vascularity), excessive scar — KELOID (collagen beyond the wound margin, familial/darker skin) vs hypertrophic scar (within margins) — and CONTRACTURES (deformity limiting function, e.g. after burns).',
    '**The take-home: healing = REGENERATION (labile/stable cells, intact framework) vs SCAR (permanent cells or destroyed framework). Scar formation: clot → inflammation → GRANULATION TISSUE (angiogenesis + fibroblasts) → collagen → remodelling. Skin: FIRST intention (clean, fine scar) vs SECOND intention (tissue loss, contraction, big scar). Complications: infection/diabetes/steroids impair; KELOID, contracture, dehiscence.** Inflammation precedes repair ([[chronic-inflammation-granuloma]]); scarring follows persistent injury.',
  ],

  mechanism: {
    title: 'Regeneration (labile/stable, intact framework) vs scar (permanent cells/destroyed framework); scar: clot→inflammation→granulation tissue (angiogenesis+fibroblasts)→collagen→remodel; first vs second intention; keloid/contracture/dehiscence',
    steps: [
      { id: 's1', label: 'Cells: labile (regenerate), stable (regenerate if stimulated), permanent (→ scar)', emphasis: 'key' },
      { id: 's2', label: 'Regeneration if framework intact; scar (fibrosis) if destroyed or permanent tissue', emphasis: 'key' },
      { id: 's3', label: 'Scar steps: clot → inflammation → GRANULATION TISSUE (angiogenesis + fibroblasts) → collagen → remodel', emphasis: 'key' },
      { id: 's4', label: 'First intention (clean, apposed, fine scar) vs second intention (tissue loss, contraction, big scar)', emphasis: 'key' },
      { id: 's5', label: 'Impaired by infection/diabetes/ischaemia/steroids/poor nutrition; keloid, contracture, dehiscence', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Soft, pink, granular tissue with new capillaries in a healing wound', mechanism: 'Granulation tissue (angiogenesis + fibroblasts)', significance: 'key' },
    { sign: 'A clean sutured incision healing with a fine scar', mechanism: 'Healing by first (primary) intention', significance: 'key' },
    { sign: 'A large open wound healing with contraction and a big scar', mechanism: 'Healing by second intention', significance: 'key' },
    { sign: 'Raised scar extending beyond the original wound margins', mechanism: 'Keloid (excess type-I collagen)', significance: 'supportive' },
    { sign: 'Poor wound healing in a diabetic or steroid-treated patient', mechanism: 'Impaired repair', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The cell type that heals only by scar', meaning: 'Permanent cells (neurons, cardiac/skeletal muscle)' },
    { clue: 'The new vascular/fibroblastic tissue of repair', meaning: 'Granulation tissue' },
    { clue: 'The healing of a clean apposed wound', meaning: 'First (primary) intention' },
    { clue: 'The excess scar extending beyond wound margins', meaning: 'Keloid' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Repair determines whether tissue is restored or scarred: labile and stable cells regenerate if the ECM framework is intact, but permanent tissue (heart, brain) and destroyed frameworks heal by fibrous scar via granulation tissue, angiogenesis and collagen deposition. Clinically this explains why myocardial infarcts and CNS injury leave scars, why clean wounds (first intention) heal better than open ones (second intention, with contraction), and why healing fails with infection, diabetes, ischaemia, poor nutrition (vitamin C) or steroids. Recognising keloids, contractures and dehiscence guides wound management. Chronic inflammation drives fibrosis ([[chronic-inflammation-granuloma]]).' },
  ],

  mnemonics: [
    { hook: 'Cells: "Labile (regenerate), Stable (if stimulated), Permanent (scar)"', expansion: ['Permanent = heart/brain/muscle', 'Framework intact → regenerate'] },
    { hook: '"First intention = clean/fine scar; Second = tissue loss/contraction/big scar"', expansion: ['Granulation tissue = angiogenesis + fibroblasts', 'Keloid beyond margins'] },
  ],

  traps: [
    {
      questionCategory: 'Keloid vs hypertrophic scar',
      wrongInstinct: 'A keloid and a hypertrophic scar are the same thing — just a big scar',
      rightAnswer: 'They differ: a HYPERTROPHIC scar is raised but stays WITHIN the original wound margins and may regress, whereas a KELOID is excess collagen that grows BEYOND the original wound margins, tends not to regress, and is more common in darker-skinned and predisposed individuals — so the defining feature of a keloid is extension past the wound edges',
      why: 'The distinction (within vs beyond wound margins) matters for prognosis and treatment, since keloids are more persistent and recurrence-prone than hypertrophic scars.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which tissue can heal ONLY by scar formation because its cells cannot regenerate?',
      options: [
        { id: 'a', text: 'Surface epithelium (labile cells)' },
        { id: 'b', text: 'Cardiac muscle and neurons (permanent cells)' },
        { id: 'c', text: 'Liver (stable cells)' },
        { id: 'd', text: 'Bone marrow' },
      ],
      answerId: 'b',
      explanation: 'Permanent cells — neurons and cardiac/skeletal muscle — cannot divide, so injury to these tissues heals by fibrous scar rather than regeneration. Labile (epithelium, marrow) and stable (liver, kidney) cells can regenerate if the framework is intact.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A clean surgical incision with well-apposed edges heals by:',
      options: [
        { id: 'a', text: 'First (primary) intention, with minimal granulation tissue and a fine scar' },
        { id: 'b', text: 'Second intention, with abundant granulation tissue and marked contraction' },
        { id: 'c', text: 'Keloid formation' },
        { id: 'd', text: 'Regeneration of permanent cells' },
      ],
      answerId: 'a',
      explanation: 'Clean wounds with apposed edges (e.g. sutured incisions) heal by first intention: little tissue loss, minimal granulation tissue, rapid re-epithelialisation and a fine scar. Open wounds with tissue loss heal by second intention with abundant granulation tissue and wound contraction.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default tissueRepairWoundHealing;
