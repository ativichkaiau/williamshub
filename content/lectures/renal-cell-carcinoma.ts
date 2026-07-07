import type { Lecture } from '../../lib/types';

export const renalCellCarcinoma: Lecture = {
  id: 'renal-cell-carcinoma',
  title: 'Renal Cell Carcinoma',
  system: 'renal',
  source: 'L9 — Neoplasms of the Urinary System',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L9 RCC' },
    { kind: 'mechanism', label: 'Clear cell/VHL; paraneoplastic' },
    { kind: 'exam', label: 'Triad; renal vein invasion' },
  ],

  highYield: [
    'RENAL CELL CARCINOMA (RCC) is the commonest adult kidney cancer, arising from the PROXIMAL TUBULAR epithelium. The commonest subtype is CLEAR CELL RCC, driven by loss of the VHL tumour suppressor (sporadic, or germline in von Hippel-Lindau disease) → stabilised HIF → VEGF-driven angiogenesis. Risk factors: SMOKING, obesity, hypertension, acquired cystic disease of dialysis, and hereditary syndromes (VHL). Papillary and chromophobe are other subtypes.',
    'The classic triad of FLANK PAIN + HAEMATURIA + a PALPABLE MASS is now UNCOMMON (<10%) — most RCC is found INCIDENTALLY on imaging done for other reasons. RCC is notorious for PARANEOPLASTIC syndromes: POLYCYTHAEMIA (ectopic EPO), HYPERCALCAEMIA (PTHrP), hypertension (renin), Stauffer syndrome (non-metastatic hepatic dysfunction), and it is one of the classic causes of pyrexia of unknown origin.',
    'RCC characteristically invades the RENAL VEIN and can extend up the IVC to the right atrium (tumour thrombus), and a left-sided tumour can obstruct the left gonadal vein causing an acute/non-reducing left VARICOCELE. It spreads haematogenously to LUNG ("cannonball" metastases) and bone. Staging is by CT/MRI (TNM); biopsy is often deferred as imaging plus surgery guides management.',
    'MANAGEMENT: surgery is the mainstay — partial (nephron-sparing) or radical NEPHRECTOMY, including resection of vena-caval tumour thrombus. RCC is relatively CHEMO/RADIO-RESISTANT; metastatic disease is treated with ANTI-ANGIOGENIC targeted therapy (VEGF/tyrosine-kinase inhibitors, reflecting the VHL-HIF-VEGF biology) and IMMUNOTHERAPY (checkpoint inhibitors).',
    '**The take-home: RCC = proximal tubule cancer, CLEAR CELL/VHL-HIF-VEGF (smoking, obesity, hypertension); classic triad now rare — mostly INCIDENTAL; PARANEOPLASTIC (EPO→polycythaemia, PTHrP→hypercalcaemia); invades RENAL VEIN/IVC and left VARICOCELE; lung "cannonball" mets. Surgery ± anti-angiogenic/immunotherapy.** Bladder cancer is [[bladder-urothelial-carcinoma]]; the neoplasm overview is [[urinary-system-neoplasms]].',
  ],

  mechanism: {
    title: 'Clear cell RCC (VHL-HIF-VEGF, proximal tubule); triad rare/incidental; paraneoplastic (EPO/PTHrP); renal vein–IVC invasion & left varicocele; lung mets; surgery ± anti-angiogenic/immunotherapy',
    steps: [
      { id: 's1', label: 'Clear cell RCC from proximal tubule; VHL loss → HIF → VEGF angiogenesis', emphasis: 'key' },
      { id: 's2', label: 'Classic triad (flank pain, haematuria, mass) now rare → mostly incidental', emphasis: 'key' },
      { id: 's3', label: 'Paraneoplastic: EPO (polycythaemia), PTHrP (hypercalcaemia), renin, Stauffer', emphasis: 'key' },
      { id: 's4', label: 'Invades renal vein → IVC (tumour thrombus); left-sided → left varicocele; lung "cannonball" mets', emphasis: 'danger' },
      { id: 's5', label: 'Nephrectomy (chemo/radio-resistant); metastatic → VEGF/TKI + checkpoint inhibitors', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Incidental solid enhancing renal mass on CT', mechanism: 'Renal cell carcinoma (most are incidental)', significance: 'key' },
    { sign: 'Polycythaemia or hypercalcaemia with a renal mass', mechanism: 'Paraneoplastic EPO / PTHrP secretion', significance: 'key' },
    { sign: 'New non-reducing left-sided varicocele', mechanism: 'Left renal vein obstruction by RCC (gonadal vein)', significance: 'key' },
    { sign: 'Multiple round "cannonball" lung lesions', mechanism: 'Haematogenous RCC metastases', significance: 'supportive' },
    { sign: 'Clear cell RCC in a young patient with retinal/CNS haemangioblastomas', mechanism: 'Von Hippel-Lindau disease (VHL)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The commonest RCC subtype and its gene', meaning: 'Clear cell RCC; VHL' },
    { clue: 'The paraneoplastic cause of polycythaemia in RCC', meaning: 'Ectopic erythropoietin' },
    { clue: 'The vein RCC characteristically invades', meaning: 'Renal vein (→ IVC tumour thrombus)' },
    { clue: 'The mainstay of treatment', meaning: 'Partial or radical nephrectomy' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'RCC is increasingly found incidentally, so recognising a solid enhancing renal mass — and its paraneoplastic clues (polycythaemia from EPO, hypercalcaemia from PTHrP) and venous spread (renal vein/IVC thrombus, new left varicocele) — drives timely nephrectomy, the mainstay of cure. Because RCC is chemo/radio-resistant, metastatic disease is treated with anti-angiogenic targeted therapy (reflecting VHL-HIF-VEGF biology) and immunotherapy. VHL disease warrants surveillance. Bladder cancer is [[bladder-urothelial-carcinoma]]; overview [[urinary-system-neoplasms]].' },
  ],

  mnemonics: [
    { hook: 'RCC paraneoplastic: "EPO (polycythaemia), PTHrP (hypercalcaemia), Renin (HTN)"', expansion: ['Clear cell = VHL/HIF/VEGF', 'Triad now rare — incidental'] },
    { hook: '"RCC invades Renal vein/IVC; Left tumour → Left varicocele; Lung cannonballs"', expansion: ['Nephrectomy = mainstay', 'Metastatic: VEGF-TKI + immunotherapy'] },
  ],

  traps: [
    {
      questionCategory: 'Presentation of RCC',
      wrongInstinct: 'You can rule out renal cell carcinoma if the classic triad (flank pain, haematuria, mass) is absent',
      rightAnswer: 'The classic triad occurs in FEWER than 10% of RCC cases and usually signifies advanced disease; MOST RCC is now discovered INCIDENTALLY on imaging performed for other reasons, or presents via a PARANEOPLASTIC syndrome (polycythaemia, hypercalcaemia) or a new left varicocele — so the absence of the triad does not exclude RCC',
      why: 'Relying on the triad misses the majority of (often curable, incidentally found) tumours; awareness that RCC is usually incidental or paraneoplastic prompts evaluation of an unexplained renal mass or paraneoplastic finding.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The commonest subtype of renal cell carcinoma is driven by loss of which tumour-suppressor gene, leading to VEGF-driven angiogenesis?',
      options: [
        { id: 'a', text: 'VHL (von Hippel-Lindau)' },
        { id: 'b', text: 'RB1' },
        { id: 'c', text: 'APC' },
        { id: 'd', text: 'BRCA1' },
      ],
      answerId: 'a',
      explanation: 'Clear cell RCC, the commonest subtype, arises from proximal tubular epithelium with loss of the VHL tumour suppressor, stabilising HIF and driving VEGF-mediated angiogenesis — the rationale for anti-angiogenic (VEGF/TKI) therapy in metastatic disease.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A new, non-reducing left-sided varicocele in an older man should prompt investigation for:',
      options: [
        { id: 'a', text: 'A left renal tumour obstructing the left renal/gonadal vein' },
        { id: 'b', text: 'Simple dehydration' },
        { id: 'c', text: 'A urinary tract infection' },
        { id: 'd', text: 'Benign prostatic hyperplasia' },
      ],
      answerId: 'a',
      explanation: 'The left gonadal vein drains into the left renal vein, so a left RCC invading/obstructing the renal vein can cause an acute, non-reducing left varicocele — a classic clue prompting renal imaging.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default renalCellCarcinoma;
