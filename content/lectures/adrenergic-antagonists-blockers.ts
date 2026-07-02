import type { Lecture } from '../../lib/types';

export const adrenergicAntagonistsBlockers: Lecture = {
  id: 'adrenergic-antagonists-blockers',
  title: 'Adrenergic Antagonists (α- & β-Blockers)',
  system: 'pharmacology',
  source: 'L9 — Adrenergic (Sympathetic) Drugs',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pharmacology' },
    { kind: 'lecture', label: 'L9 Adrenergic Blockers' },
    { kind: 'mechanism', label: 'α vs β blockade' },
    { kind: 'exam', label: 'β-blocker uses/cautions; α-blockers' },
  ],

  highYield: [
    '**β-BLOCKERS ("-olol") antagonise β-adrenoceptors → reduce heart rate, contractility, AV conduction, blood pressure and renin release. Uses: ischaemic heart disease/post-MI, chronic heart failure (started low, up-titrated), arrhythmias, hypertension, and non-cardiac roles (migraine prophylaxis, thyrotoxicosis, essential tremor, portal hypertension, glaucoma — timolol).**',
    '**Selectivity matters: CARDIOSELECTIVE (β1: metoprolol, atenolol, bisoprolol) are preferred in ASTHMA/COPD and diabetes (less bronchospasm, less masking of hypoglycaemia); NON-selective (propranolol) also block β2. Some have added α-blockade (carvedilol, labetalol — useful in heart failure/hypertension/pregnancy). CAUTIONS: bradycardia/heart block, bronchospasm, fatigue, masking hypoglycaemia; DON\'T stop abruptly (rebound — taper).**',
    '**α1-BLOCKERS ("-osin": prazosin, doxazosin, tamsulosin) relax vascular and prostatic/bladder-neck smooth muscle → used for BPH (tamsulosin — uroselective) and hypertension; classic side-effect is FIRST-DOSE orthostatic HYPOTENSION. Non-selective α-blockers (PHENOXYBENZAMINE irreversible, phentolamine) are used to control catecholamine excess in PHAEOCHROMOCYTOMA.**',
    '**High-yield rule: in PHAEOCHROMOCYTOMA, establish α-BLOCKADE BEFORE any β-blocker — β-blockade alone leaves α1 vasoconstriction UNOPPOSED → hypertensive crisis. β-blockers are relatively contraindicated in acute decompensated heart failure and severe asthma; they can blunt the tremor/tachycardia warning of hypoglycaemia in diabetics.**',
    '**The take-home: β-BLOCKERS (-olol) for IHD/HF/arrhythmia/HTN + migraine/tremor/thyrotoxicosis; cardioselective in asthma/diabetes; taper to avoid rebound. α1-BLOCKERS (-osin) for BPH/HTN (first-dose hypotension). Phaeochromocytoma: α BEFORE β.** These oppose the sympathomimetics of [[adrenergic-drugs]] on the autonomic map ([[autonomic-nervous-system]]); receptor signalling is [[drug-receptor-signal-transduction]].',
  ],

  mechanism: {
    title: 'β-blockers (↓rate/contractility/BP/renin; cardioselective safer in asthma; taper) ; α1-blockers (BPH/HTN, 1st-dose hypotension); α before β in phaeo',
    steps: [
      { id: 's1', label: 'β-blockers ↓ heart rate/contractility/BP/renin; IHD/HF/arrhythmia/HTN + migraine/tremor', emphasis: 'key' },
      { id: 's2', label: 'Cardioselective (β1) safer in asthma/diabetes; carvedilol/labetalol add α-block', emphasis: 'key' },
      { id: 's3', label: 'β-blocker cautions: bradycardia/block, bronchospasm, mask hypoglycaemia; taper (rebound)', emphasis: 'danger' },
      { id: 's4', label: 'α1-blockers (-osin): BPH + HTN; first-dose orthostatic hypotension', emphasis: 'key' },
      { id: 's5', label: 'Phaeochromocytoma: α-block (phenoxybenzamine) BEFORE β (else unopposed α crisis)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Bradycardia, fatigue and bronchospasm on a cardiac drug', mechanism: 'β-blocker adverse effects', significance: 'key' },
    { sign: 'Masked hypoglycaemia warning signs in a diabetic', mechanism: 'Non-selective β-blockade (use cardioselective)', significance: 'key' },
    { sign: 'First-dose faint/orthostatic hypotension with a BPH drug', mechanism: 'α1-blocker (prazosin/tamsulosin)', significance: 'key' },
    { sign: 'Rebound tachycardia/hypertension after abrupt β-blocker cessation', mechanism: 'Receptor up-regulation — taper instead', significance: 'key' },
    { sign: 'Hypertensive crisis after β-blocker in untreated phaeochromocytoma', mechanism: 'Unopposed α-adrenergic vasoconstriction', significance: 'key' },
  ],

  investigations: [
    { clue: 'The β-blocker type preferred in asthma/diabetes', meaning: 'Cardioselective (β1) — metoprolol/atenolol/bisoprolol' },
    { clue: 'The α1-blocker class used for BPH and hypertension', meaning: '"-osin" (tamsulosin/prazosin/doxazosin)' },
    { clue: 'The classic α1-blocker side-effect', meaning: 'First-dose orthostatic hypotension' },
    { clue: 'The blockade sequence in phaeochromocytoma', meaning: 'α-blockade before β-blockade' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'β-blockers are workhorses in cardiology (IHD, HF, arrhythmia, HTN) and beyond (migraine, tremor, thyrotoxicosis), but selectivity (cardioselective in asthma/diabetes), tapering (rebound) and contraindications (acute HF, severe asthma) govern safe use; α1-blockers treat BPH/HTN with first-dose hypotension. The "α before β" rule in phaeochromocytoma prevents a hypertensive crisis. These antagonists oppose the sympathomimetics of [[adrenergic-drugs]] on the autonomic map ([[autonomic-nervous-system]]), via the receptor signalling of [[drug-receptor-signal-transduction]].' },
  ],

  mnemonics: [
    { hook: '"-olol = β-blocker (heart); -osin = α1-blocker (BPH/BP, first-dose hypotension)"', expansion: ['Cardioselective β1 in asthma', 'Carvedilol/labetalol = α+β'] },
    { hook: 'Phaeochromocytoma "A before B"; β-blockers → taper (rebound)', expansion: ['Mask hypoglycaemia', 'Avoid in acute decompensated HF/severe asthma'] },
  ],

  traps: [
    {
      questionCategory: 'β-blocker starting in heart failure',
      wrongInstinct: 'β-blockers reduce cardiac output, so they must never be used in heart failure',
      rightAnswer: 'β-blockers (bisoprolol, carvedilol, metoprolol succinate) IMPROVE survival in CHRONIC stable heart failure and are guideline therapy — but they are started at LOW dose and UP-TITRATED slowly, and are AVOIDED in ACUTE DECOMPENSATED heart failure (where negative inotropy is harmful); the distinction is chronic-stable (use, up-titrate) vs acute-decompensated (avoid)',
      why: 'Blanket avoidance denies a survival benefit in chronic HF, while starting/uptitrating during acute decompensation is dangerous — the timing (stable vs decompensated) determines correct use.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A cardioselective β-blocker is preferred over a non-selective one in a patient with asthma because it:',
      options: [
        { id: 'a', text: 'Has no effect on the heart' },
        { id: 'b', text: 'Preferentially blocks β1 and largely spares β2, reducing bronchospasm risk' },
        { id: 'c', text: 'Is a β2-agonist' },
        { id: 'd', text: 'Blocks α1 receptors' },
      ],
      answerId: 'b',
      explanation: 'Cardioselective β-blockers preferentially antagonise β1 (cardiac) receptors and largely spare β2 (bronchial) receptors, lowering bronchospasm risk in asthma/COPD — though selectivity is relative and reduced at higher doses.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'In a patient with a phaeochromocytoma, the correct order of adrenergic blockade is:',
      options: [
        { id: 'a', text: 'β-blockade first, then α-blockade' },
        { id: 'b', text: 'α-blockade first, then β-blockade' },
        { id: 'c', text: 'Only β-blockade' },
        { id: 'd', text: 'Either order is safe' },
      ],
      answerId: 'b',
      explanation: 'α-blockade must be established before β-blockade in phaeochromocytoma. Giving a β-blocker first removes β2-mediated vasodilation, leaving α1 vasoconstriction unopposed and precipitating a hypertensive crisis. "α before β" is the rule.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default adrenergicAntagonistsBlockers;
