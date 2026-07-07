import type { Lecture } from '../../lib/types';

export const adrenergicDrugs: Lecture = {
  id: 'adrenergic-drugs',
  title: 'Adrenergic (Sympathetic) Drugs',
  system: 'pharmacology',
  source: 'L9 — Adrenergic (Sympathetic) Drugs',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pharmacology' },
    { kind: 'lecture', label: 'L9 Adrenergic Drugs' },
    { kind: 'mechanism', label: 'α/β receptor selectivity' },
    { kind: 'exam', label: 'Adrenaline; β-blockers' },
  ],

  highYield: [
    'Adrenergic drugs act on ADRENOCEPTORS: α1 (vasoconstriction, mydriasis, bladder-neck contraction), α2 (presynaptic — ↓sympathetic outflow, e.g. clonidine → ↓BP), β1 (heart — ↑rate/contractility, renin), β2 (bronchodilation, vasodilation, uterine relaxation), β3 (bladder relaxation, lipolysis). Effect depends on which receptors a drug hits and where.',
    'SYMPATHOMIMETICS (agonists): ADRENALINE (α+β — anaphylaxis, cardiac arrest); NORADRENALINE (α>β1 — septic shock vasopressor); DOPAMINE/DOBUTAMINE (β1 inotropes); PHENYLEPHRINE (α1 — decongestant, pressor, mydriatic); SALBUTAMOL/salmeterol (β2 — asthma/COPD); CLONIDINE/methyldopa (α2 — hypertension, safe in pregnancy). "INDIRECT" agents (amphetamine, ephedrine, cocaine) release or block reuptake of noradrenaline.',
    'ANTAGONISTS: β-BLOCKERS ("-olol") reduce heart rate/contractility, BP, renin, and are used in ischaemic heart disease, heart failure, arrhythmia, hypertension — cardioselective (β1: metoprolol, atenolol, bisoprolol) are safer in asthma; caution: bradycardia, bronchospasm, masking hypoglycaemia, fatigue. α1-BLOCKERS ("-osin": prazosin, tamsulosin) → BPH and hypertension (first-dose orthostatic hypotension). Non-selective α-block (phenoxybenzamine) for phaeochromocytoma (α BEFORE β).',
    'High-yield rules: give ADRENALINE for ANAPHYLAXIS (α1 vasoconstriction + β2 bronchodilation + β1 support); in PHAEOCHROMOCYTOMA block α FIRST then β (β-block alone → unopposed α vasoconstriction/hypertensive crisis); β-blockers are relatively contraindicated in acute decompensated heart failure and severe asthma; β2-agonists cause tremor/tachycardia/hypokalaemia.',
    '**The take-home: α1 = vasoconstrict/pressor/mydriasis; α2 = central ↓BP (clonidine); β1 = heart (dobutamine ↑, β-blockers ↓); β2 = bronchodilate (salbutamol). Adrenaline is the anaphylaxis drug; α before β in phaeochromocytoma; cardioselective β-blockers in asthma.** These oppose the cholinergic system ([[cholinergic-drugs]]) on the autonomic map of HNS-1 ([[autonomic-nervous-system]]); β-blocker/α-blocker antihypertensive use overlaps clinical cardiology.',
  ],

  mechanism: {
    title: 'α1 vasoconstrict, α2 central ↓BP, β1 heart, β2 bronchodilate; adrenaline for anaphylaxis; α-before-β in phaeo',
    steps: [
      { id: 's1', label: 'α1 = vasoconstriction/mydriasis/bladder neck; α2 = presynaptic ↓outflow (clonidine)', emphasis: 'key' },
      { id: 's2', label: 'β1 = heart (dobutamine, and β-blockers reduce); β2 = bronchodilation (salbutamol)', emphasis: 'key' },
      { id: 's3', label: 'Adrenaline (α+β) = anaphylaxis/arrest; noradrenaline (α) = septic shock', emphasis: 'key' },
      { id: 's4', label: 'β-blockers (IHD/HF/arrhythmia/HTN); cardioselective safer in asthma', emphasis: 'key' },
      { id: 's5', label: 'Phaeochromocytoma: block α BEFORE β (β alone → unopposed α crisis)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'First-line drug for anaphylaxis', mechanism: 'Adrenaline (α1 vasoconstriction + β2 bronchodilation + β1 support)', significance: 'key' },
    { sign: 'Rescue bronchodilation in acute asthma', mechanism: 'Short-acting β2-agonist (salbutamol)', significance: 'key' },
    { sign: 'Bradycardia/bronchospasm and masked hypoglycaemia', mechanism: 'β-blocker adverse effects (use cardioselective in asthma/diabetes)', significance: 'key' },
    { sign: 'First-dose orthostatic hypotension with a BPH drug', mechanism: 'α1-blocker (prazosin/tamsulosin)', significance: 'supportive' },
    { sign: 'Hypertensive crisis after β-blocker in an untreated phaeochromocytoma', mechanism: 'Unopposed α-adrenergic vasoconstriction', significance: 'key' },
  ],

  investigations: [
    { clue: 'The receptor mediating vasoconstriction', meaning: 'α1' },
    { clue: 'The receptor mediating bronchodilation', meaning: 'β2' },
    { clue: 'The drug of choice for anaphylaxis', meaning: 'Adrenaline (epinephrine)' },
    { clue: 'The blockade sequence in phaeochromocytoma', meaning: 'α-blockade before β-blockade' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Adrenergic drugs are the sympathetic counterpart to cholinergic pharmacology ([[cholinergic-drugs]], [[autonomic-nervous-system]]): receptor selectivity predicts both use and harm — adrenaline for anaphylaxis, β2-agonists for asthma, β-blockers for cardiac disease (cardioselective in asthma), α-blockers for BPH/hypertension. The "α before β" rule in phaeochromocytoma and the unopposed-α crisis are classic safety points; β2 effects (tremor, hypokalaemia) and β-blocker cautions (asthma, HF, hypoglycaemia masking) guide safe use.' },
  ],

  mnemonics: [
    { hook: '"α1 = squeeze vessels; β1 = 1 heart; β2 = 2 lungs (bronchodilate)"', expansion: ['Adrenaline = anaphylaxis', 'Clonidine = α2 central ↓BP'] },
    { hook: 'Phaeochromocytoma: "A before B" (α-block before β-block)', expansion: ['β alone → unopposed α crisis', 'Cardioselective β1 safer in asthma'] },
  ],

  traps: [
    {
      questionCategory: 'β-blockade in phaeochromocytoma',
      wrongInstinct: 'A hypertensive, tachycardic phaeochromocytoma patient should be given a β-blocker first to control heart rate',
      rightAnswer: 'Giving a β-blocker FIRST is dangerous: blocking β2-mediated vasodilation leaves α1 vasoconstriction UNOPPOSED, precipitating a hypertensive crisis — α-blockade (e.g. phenoxybenzamine) must be established BEFORE any β-blocker in phaeochromocytoma',
      why: 'The catecholamine excess acts on both α and β; removing the β vasodilatory brake before controlling α causes severe vasoconstriction — hence the strict "α before β" sequence.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The drug of choice for anaphylaxis is adrenaline because it simultaneously:',
      options: [
        { id: 'a', text: 'Blocks histamine receptors' },
        { id: 'b', text: 'Causes α1 vasoconstriction, β2 bronchodilation and β1 cardiac support' },
        { id: 'c', text: 'Only dilates the bronchi' },
        { id: 'd', text: 'Only raises the heart rate' },
      ],
      answerId: 'b',
      explanation: 'Adrenaline activates α1 (reversing vasodilation/hypotension and mucosal oedema), β2 (bronchodilation) and β1 (cardiac support) receptors — addressing all the life-threatening features of anaphylaxis at once, which is why it is first-line and given intramuscularly without delay.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'A cardioselective β-blocker (e.g. metoprolol, bisoprolol) is preferred over a non-selective one in a patient with asthma because it:',
      options: [
        { id: 'a', text: 'Has no cardiac effect' },
        { id: 'b', text: 'Preferentially blocks β1 and spares β2, reducing the risk of bronchospasm' },
        { id: 'c', text: 'Blocks α1 receptors' },
        { id: 'd', text: 'Is a β2-agonist' },
      ],
      answerId: 'b',
      explanation: 'Cardioselective β-blockers preferentially antagonise β1 (cardiac) receptors and largely spare β2 (bronchial) receptors, lowering the risk of bronchospasm in asthma/COPD — though selectivity is relative and lost at higher doses, so caution remains.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default adrenergicDrugs;
