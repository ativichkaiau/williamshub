import type { Lecture } from '../../lib/types';

export const utiClinicalManagement: Lecture = {
  id: 'uti-clinical-management',
  title: 'UTI: Clinical Syndromes & Management',
  system: 'renal',
  source: 'L5 — Urinary Tract Infection (Clinical)',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L5 UTI Clinical' },
    { kind: 'mechanism', label: 'Cystitis vs pyelonephritis' },
    { kind: 'exam', label: 'Complicated UTI; empiric therapy' },
  ],

  highYield: [
    '**Clinically, UTI is divided by SITE and by COMPLEXITY. LOWER UTI (CYSTITIS): dysuria, frequency, urgency, suprapubic pain, cloudy/smelly urine — NO fever/systemic upset. UPPER UTI (PYELONEPHRITIS): FEVER, rigors, LOIN pain and costovertebral-angle tenderness ± nausea, indicating renal parenchymal infection (± white-cell casts).**',
    '**UNCOMPLICATED = cystitis in a non-pregnant, non-catheterised woman with a normal tract. COMPLICATED = UTI with a factor that increases failure/harm: MALE sex, PREGNANCY, catheter, obstruction/stones, immunosuppression, diabetes, structural/functional abnormality, or upper-tract involvement. Complicated UTIs need longer courses, cultures and often imaging.**',
    '**Management: uncomplicated cystitis → short-course oral antibiotics guided by local resistance (e.g. nitrofurantoin, trimethoprim, fosfomycin — AVOID nitrofurantoin in significant renal impairment and near term). PYELONEPHRITIS → longer course, often initial broader/IV therapy (e.g. a fluoroquinolone or cephalosporin) with urine culture; admit if systemically unwell/vomiting. Always send urine culture in complicated UTI, pregnancy, men and treatment failure.**',
    '**Special situations: PREGNANCY — treat asymptomatic bacteriuria and cystitis (avoid teratogenic/near-term-unsafe agents); CATHETER-associated — treat only if symptomatic and consider catheter change; RECURRENT UTI — investigate for stones/obstruction/incomplete emptying and consider prophylaxis/behavioural measures. UROSEPSIS (SIRS from a urinary source, esp. obstructed kidney) needs resuscitation, cultures, prompt antibiotics and source control.**',
    '**The take-home: cystitis (lower, dysuria/frequency, no fever → short oral course) vs pyelonephritis (upper, fever + loin pain → longer ± IV, culture); UNCOMPLICATED (healthy non-pregnant woman) vs COMPLICATED (male/pregnant/catheter/obstruction/immunosuppressed → culture + imaging). Obstructed infected kidney/urosepsis = emergency (drain + antibiotics).** Organisms/diagnosis are in [[uti-pathogenesis-microbiology]]; the causative obstruction in [[urinary-tract-pathology]]; antibiotic classes in BCP ([[antibacterial-protein-synthesis-inhibitors]]).',
  ],

  mechanism: {
    title: 'Cystitis (lower, no fever) vs pyelonephritis (upper, fever+loin); uncomplicated vs complicated (male/pregnant/catheter/obstruction) → therapy',
    steps: [
      { id: 's1', label: 'Cystitis = dysuria/frequency/urgency/suprapubic, NO fever (lower tract)', emphasis: 'key' },
      { id: 's2', label: 'Pyelonephritis = fever + rigors + loin pain/CVA tenderness (upper tract)', emphasis: 'key' },
      { id: 's3', label: 'Complicated = male, pregnant, catheter, obstruction, immunosuppressed, structural', emphasis: 'key' },
      { id: 's4', label: 'Uncomplicated cystitis → short oral course; pyelonephritis → longer ± IV + culture', emphasis: 'key' },
      { id: 's5', label: 'Urosepsis/obstructed infected kidney = emergency (resuscitate, antibiotics, drain)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Dysuria, frequency and urgency without fever', mechanism: 'Cystitis (lower UTI)', significance: 'key' },
    { sign: 'Fever, rigors and costovertebral-angle tenderness', mechanism: 'Acute pyelonephritis (upper UTI)', significance: 'key' },
    { sign: 'UTI in a man or a pregnant woman', mechanism: 'Complicated UTI (culture + often imaging)', significance: 'key' },
    { sign: 'Systemic inflammatory response from a urinary source', mechanism: 'Urosepsis — emergency (source control if obstructed)', significance: 'key' },
    { sign: 'Recurrent UTIs prompting a search for stones/obstruction', mechanism: 'Complicated/recurrent UTI needs evaluation', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The features distinguishing pyelonephritis from cystitis', meaning: 'Fever, rigors and loin/CVA tenderness (upper tract)' },
    { clue: 'The definition of a complicated UTI', meaning: 'UTI with a risk factor (male, pregnant, catheter, obstruction, immunosuppression)' },
    { clue: 'When urine culture is mandatory', meaning: 'Complicated UTI, pregnancy, men, pyelonephritis, treatment failure' },
    { clue: 'The emergency form of urinary infection', meaning: 'Urosepsis / obstructed infected kidney (needs drainage)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Classifying UTI by site (cystitis vs pyelonephritis) and complexity (uncomplicated vs complicated) sets the antibiotic choice, duration and need for culture/imaging: short oral courses for uncomplicated cystitis, longer ± IV therapy for pyelonephritis, and culture-guided treatment for complicated UTI. Recognising urosepsis and the obstructed infected kidney (source control) is life-saving. Organisms/diagnostics are in [[uti-pathogenesis-microbiology]]; obstruction in [[urinary-tract-pathology]]; the antibiotics in BCP ([[antibacterial-protein-synthesis-inhibitors]]).' },
  ],

  mnemonics: [
    { hook: '"Cystitis = below, no fever; Pyelonephritis = up top, fever + loin"', expansion: ['Short course cystitis', 'Culture pyelonephritis'] },
    { hook: 'Complicated = "Male, Pregnant, Catheter, Obstruction, Immunosuppressed"', expansion: ['These → culture + imaging', 'Urosepsis = drain + antibiotics'] },
  ],

  traps: [
    {
      questionCategory: 'UTI in men and pregnancy',
      wrongInstinct: 'A UTI in a man can be treated with the same short course as uncomplicated cystitis in a woman',
      rightAnswer: 'Any UTI in a MAN (and in PREGNANCY) is by definition COMPLICATED — it warrants a urine CULTURE, a LONGER antibiotic course, and evaluation for an underlying cause (prostatitis, obstruction, structural abnormality) — the short single-agent course used for uncomplicated female cystitis is inappropriate',
      why: 'Male and pregnancy-associated UTIs carry higher risk and often an underlying abnormality, so treating them like simple female cystitis risks failure, relapse and missed pathology.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Fever, rigors and costovertebral-angle (loin) tenderness in a patient with a UTI indicate:',
      options: [
        { id: 'a', text: 'Simple cystitis' },
        { id: 'b', text: 'Acute pyelonephritis (upper urinary tract infection)' },
        { id: 'c', text: 'Urethritis only' },
        { id: 'd', text: 'Asymptomatic bacteriuria' },
      ],
      answerId: 'b',
      explanation: 'Fever, rigors and loin/costovertebral-angle tenderness signify renal parenchymal infection — acute pyelonephritis (upper UTI) — which needs a longer, often initially broader or intravenous antibiotic course with urine culture, unlike afebrile lower-tract cystitis.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which patient has, by definition, a "complicated" UTI?',
      options: [
        { id: 'a', text: 'A healthy non-pregnant woman with dysuria' },
        { id: 'b', text: 'A pregnant woman with a UTI' },
        { id: 'c', text: 'A woman with a first episode of cystitis' },
        { id: 'd', text: 'A woman with a normal urinary tract' },
      ],
      answerId: 'b',
      explanation: 'Complicated UTI occurs with a factor increasing the risk of failure or harm — pregnancy, male sex, catheterisation, obstruction/stones, immunosuppression, diabetes or structural/functional abnormality. These require urine culture, longer therapy and often imaging, unlike uncomplicated cystitis in a healthy non-pregnant woman.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default utiClinicalManagement;
