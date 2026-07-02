import type { Lecture } from '../../lib/types';

export const minimalChangeFsgs: Lecture = {
  id: 'minimal-change-fsgs',
  title: 'Minimal Change Disease & FSGS',
  system: 'renal',
  source: 'L6 — Nephrotic & Nephritic Syndromes',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L6 Podocytopathies' },
    { kind: 'mechanism', label: 'Podocyte foot-process effacement' },
    { kind: 'exam', label: 'Child nephrotic = MCD; FSGS steroid-resistant' },
  ],

  highYield: [
    '**MINIMAL CHANGE DISEASE (MCD) is the commonest cause of NEPHROTIC syndrome in CHILDREN. Light microscopy is NORMAL ("minimal change"); the lesion is diffuse PODOCYTE FOOT-PROCESS EFFACEMENT seen only on ELECTRON microscopy, with negative immunofluorescence. It causes selective (albumin) proteinuria and is exquisitely STEROID-RESPONSIVE — so children with typical nephrotic syndrome are treated with corticosteroids WITHOUT a biopsy.**',
    '**FOCAL SEGMENTAL GLOMERULOSCLEROSIS (FSGS) is a leading cause of nephrotic syndrome in ADULTS (especially of African ancestry, and the commonest primary cause in many adult series). Biopsy shows sclerosis in SOME glomeruli (focal) and part of the tuft (segmental), with foot-process effacement. It is often STEROID-RESISTANT, may be primary or SECONDARY (HIV, obesity, reflux, reduced nephron mass, APOL1 variants), and can progress to CKD.**',
    '**Both are PODOCYTOPATHIES — podocyte injury breaks the filtration barrier → heavy proteinuria, hypoalbuminaemia, oedema and hyperlipidaemia (nephrotic syndrome). Complications of nephrotic syndrome: thromboembolism (urinary antithrombin loss), infection (immunoglobulin loss), and hyperlipidaemia. MCD vs FSGS is distinguished by biopsy, steroid response and clinical setting.**',
    '**MANAGEMENT: MCD — corticosteroids (most remit, may relapse; calcineurin inhibitors for frequent relapsers); FSGS — supportive RAAS blockade + steroids/calcineurin inhibitors for primary disease, and treat the cause in secondary FSGS. General nephrotic care: RAAS blockade, salt/fluid management, statin, and thromboprophylaxis if severe.**',
    '**The take-home: podocytopathies (foot-process effacement) — MCD = child nephrotic, normal light microscopy, STEROID-RESPONSIVE (treat without biopsy); FSGS = adult nephrotic (African ancestry, HIV/obesity/APOL1), focal-segmental sclerosis, often STEROID-RESISTANT, may progress. Both cause nephrotic syndrome (thrombosis/infection risk).** The nephrotic overview is [[nephrotic-syndrome]]; membranous/MPGN is [[membranous-membranoproliferative-gn]]; glomerular mechanisms are [[glomerular-disease-immune-mechanisms]].',
  ],

  mechanism: {
    title: 'Podocyte foot-process effacement → nephrotic: MCD (child, normal LM, steroid-responsive) vs FSGS (adult, focal-segmental sclerosis, often steroid-resistant, secondary causes)',
    steps: [
      { id: 's1', label: 'Podocyte injury → foot-process effacement → filtration barrier fails', emphasis: 'key' },
      { id: 's2', label: 'MCD: child nephrotic, normal light microscopy, EM effacement only', emphasis: 'key' },
      { id: 's3', label: 'MCD steroid-responsive → treat children without biopsy', emphasis: 'key' },
      { id: 's4', label: 'FSGS: adult nephrotic, focal-segmental sclerosis; primary or secondary (HIV/obesity/APOL1)', emphasis: 'key' },
      { id: 's5', label: 'FSGS often steroid-resistant → can progress to CKD', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Nephrotic syndrome in a young child, normal light microscopy', mechanism: 'Minimal change disease', significance: 'key' },
    { sign: 'Rapid remission of childhood nephrosis on corticosteroids', mechanism: 'Steroid-responsive MCD', significance: 'key' },
    { sign: 'Focal, segmental glomerular sclerosis in a steroid-resistant adult', mechanism: 'FSGS', significance: 'key' },
    { sign: 'Nephrotic FSGS in a patient with HIV or obesity', mechanism: 'Secondary FSGS', significance: 'supportive' },
    { sign: 'Foot-process effacement on electron microscopy', mechanism: 'Podocytopathy (MCD or FSGS)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The commonest cause of nephrotic syndrome in children', meaning: 'Minimal change disease' },
    { clue: 'The finding seen only on electron microscopy in MCD', meaning: 'Podocyte foot-process effacement' },
    { clue: 'A common cause of steroid-resistant adult nephrotic syndrome', meaning: 'FSGS' },
    { clue: 'Secondary causes of FSGS', meaning: 'HIV, obesity, reflux, reduced nephron mass, APOL1' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Distinguishing MCD from FSGS drives management: children with typical nephrotic syndrome are treated with steroids empirically (MCD is common and steroid-responsive) without biopsy, whereas adult or steroid-resistant nephrotic syndrome is biopsied and FSGS (often steroid-resistant, sometimes secondary) is managed with RAAS blockade, immunosuppression and treatment of any cause. Both need general nephrotic care (thromboprophylaxis, statin, oedema control). The nephrotic overview is [[nephrotic-syndrome]]; membranous/MPGN is [[membranous-membranoproliferative-gn]].' },
  ],

  mnemonics: [
    { hook: '"Minimal change = Minors (children), Melts with steroids"', expansion: ['Normal light microscopy', 'EM = foot-process effacement'] },
    { hook: '"FSGS = Focal, Segmental, oFten Steroid-resistant" (adults/African ancestry/HIV)', expansion: ['APOL1 variants', 'Can progress to CKD'] },
  ],

  traps: [
    {
      questionCategory: 'Biopsy in childhood nephrotic syndrome',
      wrongInstinct: 'Every child with nephrotic syndrome needs a renal biopsy to make the diagnosis',
      rightAnswer: 'Because MINIMAL CHANGE DISEASE causes most childhood nephrotic syndrome and is highly STEROID-RESPONSIVE, typical cases are treated EMPIRICALLY with corticosteroids WITHOUT a biopsy; biopsy is reserved for atypical features (age <1 or older child, haematuria/hypertension/renal impairment, steroid RESISTANCE) that suggest FSGS or another lesion',
      why: 'Reflexively biopsying every child subjects most (who have steroid-responsive MCD) to an unnecessary invasive procedure; the steroid trial is both treatment and a diagnostic test, with biopsy reserved for atypical or resistant cases.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 4-year-old presents with periorbital oedema and heavy proteinuria; light microscopy of a (later) biopsy would be normal, with foot-process effacement on electron microscopy. The most likely diagnosis and treatment is:',
      options: [
        { id: 'a', text: 'FSGS; ciclosporin' },
        { id: 'b', text: 'Minimal change disease; corticosteroids' },
        { id: 'c', text: 'Membranous nephropathy; rituximab' },
        { id: 'd', text: 'IgA nephropathy; ACE inhibitor only' },
      ],
      answerId: 'b',
      explanation: 'Minimal change disease is the commonest cause of childhood nephrotic syndrome — normal light microscopy with foot-process effacement on EM — and is highly steroid-responsive, so typical cases are treated with corticosteroids empirically without biopsy.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Compared with minimal change disease, focal segmental glomerulosclerosis (FSGS) is characterised by:',
      options: [
        { id: 'a', text: 'Being universally steroid-responsive' },
        { id: 'b', text: 'Focal, segmental glomerular sclerosis, frequent steroid resistance, and secondary causes (HIV, obesity, APOL1)' },
        { id: 'c', text: 'Granular subepithelial immune deposits' },
        { id: 'd', text: 'Only occurring in children' },
      ],
      answerId: 'b',
      explanation: 'FSGS shows sclerosis in some glomeruli (focal) and part of the tuft (segmental), is a common cause of adult nephrotic syndrome (especially African ancestry), is often steroid-resistant, may be secondary (HIV, obesity, reflux, APOL1), and can progress to CKD.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default minimalChangeFsgs;
