import type { Lecture } from '../../lib/types';
import { ARACHIDONIC_ACID_PATHWAY } from '../../lib/figures';

export const corticosteroidPharmacology: Lecture = {
  id: 'corticosteroid-pharmacology',
  title: 'Corticosteroid Pharmacology',
  system: 'endocrine',
  source: 'L5 — Corticosteroids & Antagonists',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'L5 Corticosteroids' },
    { kind: 'treatment', label: 'Glucocorticoids / mineralocorticoids' },
    { kind: 'mechanism', label: 'Intracellular receptor → gene transcription' },
    { kind: 'exam', label: 'Anti-inflammatory + adverse effects' },
  ],

  highYield: [
    '**Glucocorticoids act on intracellular glucocorticoid receptors** → the complex binds **glucocorticoid response elements (GRE)** and regulates gene transcription (**genomic**, slow) plus faster **non-genomic** effects. Agents: **hydrocortisone (=cortisol), prednisolone, dexamethasone, triamcinolone**.',
    '**Anti-inflammatory / immunosuppressive** action: they **inhibit phospholipase A₂** (blocking BOTH prostaglandins and leukotrienes at the top of the arachidonic-acid cascade), suppress cytokines/IgG, and inhibit inflammatory and immune cells.',
    '**Metabolic effects**: ↑gluconeogenesis + ↓glucose uptake → **hyperglycemia**; **catabolic/antianabolic** on muscle, skin, connective tissue and bone (**osteoblast apoptosis → osteoporosis**); central fat redistribution; growth retardation in children.',
    '**Adverse effects = iatrogenic Cushing**: hyperglycemia, osteoporosis, myopathy, thin skin/easy bruising, cataracts/glaucoma, peptic ulcer, psychosis, infection risk, HTN, and **HPA-axis suppression** (must taper). They also suppress ACTH/GH/TSH/LH and inhibit peripheral T4→T3 conversion.',
    '**Mineralocorticoids**: **aldosterone** (zona glomerulosa) ↑ renal Na⁺ reabsorption; **fludrocortisone** is the drug used for mineralocorticoid replacement (e.g. Addison, salt-wasting) — adverse effects are salt/fluid retention and heart failure. **Hydrocortisone is preferred for glucocorticoid replacement.**',
  ],

  mechanism: {
    title: 'Receptor → gene transcription → broad anti-inflammatory + metabolic effects',
    steps: [
      { id: 's1', label: 'Steroid → intracellular GR → GRE → gene transcription', emphasis: 'key' },
      { id: 's2', label: 'Inhibit phospholipase A₂ → ↓PGs + ↓LTs' },
      { id: 's3', label: '↑Gluconeogenesis, catabolism → hyperglycemia, osteoporosis' },
      { id: 's4', label: 'Chronic use → HPA suppression + Cushingoid toxicity', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Cushingoid features (moon face, striae, hyperglycemia) on chronic steroids', mechanism: 'Iatrogenic glucocorticoid excess', significance: 'key' },
    { sign: 'Osteoporotic fracture in a long-term steroid user', mechanism: 'Osteoblast apoptosis + ↑bone resorption', significance: 'key' },
    { sign: 'Fludrocortisone added for Addison disease', mechanism: 'Mineralocorticoid replacement', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Blood glucose, BMD, blood pressure on chronic steroids', meaning: 'Monitor for metabolic/bone toxicity' },
    { clue: 'Morning cortisol during a steroid taper', meaning: 'Assess HPA-axis recovery' },
    { clue: 'Relative potency (dexamethasone ≫ hydrocortisone; zero salt retention)', meaning: 'Guides agent choice' },
  ],

  treatment: [
    { logic: 'Replacement: hydrocortisone (± fludrocortisone) in adrenal insufficiency', detail: 'Physiologic glucocorticoid ± mineralocorticoid.' },
    { logic: 'Anti-inflammatory/immunosuppression: prednisolone, dexamethasone', detail: 'Huge nonadrenal use list — allergy, autoimmune, cerebral edema, transplant, etc.' },
    { logic: 'Always taper after prolonged use', detail: 'Prevents adrenal crisis from HPA suppression.' },
  ],

  mnemonics: [
    { hook: 'Steroids block phospholipase A₂ → shut off BOTH PGs and LTs', expansion: ['NSAIDs only block COX (downstream)'] },
    { hook: 'Dexamethasone = potent, NO salt retention; fludrocortisone = mostly salt', expansion: ['Match potency to purpose'] },
  ],

  traps: [
    {
      questionCategory: 'Anti-inflammatory site of steroids vs NSAIDs',
      wrongInstinct: 'Steroids and NSAIDs both just block cyclooxygenase',
      rightAnswer: 'Glucocorticoids inhibit phospholipase A₂ (upstream), suppressing BOTH prostaglandins and leukotrienes; NSAIDs act downstream at COX only',
      why: 'The upstream PLA₂ block explains the broader anti-inflammatory effect (and why leukotriene-driven asthma responds to steroids but not to NSAIDs).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'By what primary mechanism do glucocorticoids exert their broad anti-inflammatory effect?',
      options: [
        { id: 'a', text: 'Irreversible inhibition of cyclooxygenase' },
        { id: 'b', text: 'Inhibition of phospholipase A₂, reducing both prostaglandins and leukotrienes' },
        { id: 'c', text: 'Blockade of leukotriene receptors only' },
        { id: 'd', text: 'Inhibition of lipoxygenase only' },
      ],
      answerId: 'b',
      explanation: 'Glucocorticoids act via intracellular receptors to inhibit phospholipase A₂ at the top of the arachidonic-acid cascade, suppressing both the COX (prostaglandin) and LOX (leukotriene) arms — a broader effect than NSAIDs, which block only COX.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Steroids block phospholipase A₂', svg: ARACHIDONIC_ACID_PATHWAY, caption: 'Glucocorticoids inhibit PLA₂ (top of the cascade) → both prostaglandins and leukotrienes fall; NSAIDs block only COX below.' },
  ],
};

export default corticosteroidPharmacology;
