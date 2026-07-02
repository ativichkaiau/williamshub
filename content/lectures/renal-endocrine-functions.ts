import type { Lecture } from '../../lib/types';
import { RENAL_ENDOCRINE } from '../../lib/figures';

export const renalEndocrineFunctions: Lecture = {
  id: 'renal-endocrine-functions',
  title: 'Endocrine Functions of the Kidney',
  system: 'renal',
  source: 'L11 — Renal Metabolism',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L11 Renal Metabolism' },
    { kind: 'mechanism', label: 'EPO · calcitriol · renin' },
    { kind: 'exam', label: 'Renal failure sequelae' },
  ],

  highYield: [
    '**The kidney is not only an excretory organ — it is an ENDOCRINE organ producing erythropoietin, activating vitamin D, secreting renin, and making prostaglandins.** These functions explain why kidney FAILURE causes anaemia and bone disease, not just retention of waste.',
    '**ERYTHROPOIETIN (EPO) is made by peritubular interstitial cells in response to HYPOXIA and stimulates red-cell production in the marrow.** In chronic kidney disease, EPO production falls → a **normocytic, normochromic anaemia** — treated with EPO-stimulating agents. This links renal function to haematology.',
    '**The kidney performs the FINAL activation of vitamin D: proximal-tubule 1α-hydroxylase converts 25-OH-vitamin D to active 1,25-(OH)₂-vitamin D (CALCITRIOL), which raises calcium and phosphate.** In CKD, reduced calcitriol → hypocalcaemia → **secondary hyperparathyroidism and renal bone disease (CKD-mineral and bone disorder)** — see [[renal-calcium-phosphate-handling]].',
    '**RENIN, released by juxtaglomerular cells in response to low perfusion, low macula-densa NaCl or sympathetic drive, initiates the RAAS** (angiotensin II + aldosterone) that controls blood pressure and Na⁺/volume — a key endocrine link to cardiovascular regulation ([[volume-water-balance-hormones]]).',
    '**Renal PROSTAGLANDINS vasodilate to protect renal blood flow (which is why NSAIDs can precipitate AKI in at-risk patients).** The take-home: renal failure produces **anaemia (↓EPO), bone disease (↓calcitriol), and blood-pressure/volume dysregulation (renin)** — the endocrine face of chronic kidney disease ([[chronic-kidney-disease-uremia]]).',
  ],

  mechanism: {
    title: 'Kidney makes EPO, calcitriol, renin, prostaglandins → failure = anaemia + bone + BP',
    steps: [
      { id: 's1', label: 'EPO (peritubular cells, hypoxia-driven) → red-cell production', emphasis: 'key' },
      { id: 's2', label: '1α-hydroxylase (PCT) → calcitriol (active vitamin D) → ↑Ca²⁺/PO₄', emphasis: 'key' },
      { id: 's3', label: 'Renin (JG cells) → RAAS → blood pressure + Na⁺/volume', emphasis: 'key' },
      { id: 's4', label: 'Prostaglandins vasodilate to protect renal flow (NSAIDs block → AKI)' },
      { id: 's5', label: 'Renal failure → anaemia (↓EPO) + bone disease (↓calcitriol) + BP dysregulation', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Normocytic anaemia in chronic kidney disease', mechanism: 'Reduced erythropoietin production', significance: 'key' },
    { sign: 'Hypocalcaemia + secondary hyperparathyroidism in CKD', mechanism: 'Reduced 1α-hydroxylase → low calcitriol', significance: 'key' },
    { sign: 'Renin release driving hypertension', mechanism: 'JG-cell RAAS activation (e.g. renal artery stenosis)', significance: 'key' },
    { sign: 'AKI after an NSAID in a volume-depleted patient', mechanism: 'Loss of vasodilator renal prostaglandins', significance: 'supportive' },
    { sign: 'Polycythaemia with an EPO-secreting renal tumour', mechanism: 'Ectopic/inappropriate erythropoietin', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The renal hormone whose deficiency causes anaemia in CKD', meaning: 'Erythropoietin' },
    { clue: 'The renal enzyme that activates vitamin D', meaning: '1α-hydroxylase (makes calcitriol)' },
    { clue: 'The enzyme initiating the RAAS from the kidney', meaning: 'Renin (from juxtaglomerular cells)' },
    { clue: 'The renal mediators NSAIDs block to cause AKI', meaning: 'Vasodilator prostaglandins' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The kidney\'s endocrine roles explain the non-excretory features of renal failure — anaemia (give EPO), CKD-mineral bone disorder (vitamin D/phosphate control — [[renal-calcium-phosphate-handling]]), and hypertension (RAAS blockade). Renin ties to [[volume-water-balance-hormones]] and [[renal-hemodynamics-autoregulation]]; these deficits define much of [[chronic-kidney-disease-uremia]]. Complements the energy metabolism of [[renal-metabolism-gluconeogenesis]].' },
  ],

  mnemonics: [
    { hook: 'Kidney endocrine "REDP": Renin, Erythropoietin, D (calcitriol), Prostaglandins', expansion: ['Failure → anaemia + bone disease + BP dysregulation', 'Not just excretion'] },
    { hook: 'CKD "misses 3 hormones": EPO (anaemia), calcitriol (bones), renin balance (BP)', expansion: ['Treat anaemia with EPO agents', 'Treat bone disease with vitamin D/phosphate binders'] },
  ],

  traps: [
    {
      questionCategory: 'Cause of anaemia in chronic kidney disease',
      wrongInstinct: 'Anaemia in chronic kidney disease is mainly due to blood loss or iron deficiency',
      rightAnswer: 'The characteristic anaemia of CKD is primarily due to reduced ERYTHROPOIETIN production by the failing kidney (a normocytic, normochromic anaemia), treated with erythropoiesis-stimulating agents — though iron status must also be optimised',
      why: 'Recognising the endocrine (EPO) cause explains why the anaemia is normocytic and responds to EPO therapy rather than to iron alone, and it reframes the kidney as an endocrine organ.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The normocytic anaemia of chronic kidney disease is primarily caused by:',
      options: [
        { id: 'a', text: 'Iron deficiency alone' },
        { id: 'b', text: 'Reduced erythropoietin production by the diseased kidney' },
        { id: 'c', text: 'Vitamin B12 deficiency' },
        { id: 'd', text: 'Haemolysis' },
      ],
      answerId: 'b',
      explanation: 'The kidney produces erythropoietin in response to hypoxia; in CKD this falls, causing a normocytic, normochromic anaemia treated with erythropoiesis-stimulating agents (with attention to iron status).',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'The kidney contributes to calcium homeostasis by:',
      options: [
        { id: 'a', text: 'Secreting parathyroid hormone' },
        { id: 'b', text: 'Using 1α-hydroxylase to convert 25-OH vitamin D to active calcitriol' },
        { id: 'c', text: 'Producing calcitonin' },
        { id: 'd', text: 'Synthesising albumin' },
      ],
      answerId: 'b',
      explanation: 'The proximal tubule enzyme 1α-hydroxylase performs the final activation of vitamin D to calcitriol, which raises calcium and phosphate. Its loss in CKD causes hypocalcaemia and secondary hyperparathyroidism.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Endocrine functions of the kidney', svg: RENAL_ENDOCRINE, caption: 'EPO, calcitriol, renin and prostaglandins — and how their loss produces the anaemia, bone disease and BP dysregulation of renal failure.' },
  ],
};

export default renalEndocrineFunctions;
