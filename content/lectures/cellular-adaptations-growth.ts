import type { Lecture } from '../../lib/types';

export const cellularAdaptationsGrowth: Lecture = {
  id: 'cellular-adaptations-growth',
  title: 'Cellular Adaptations: Hypertrophy, Hyperplasia & Atrophy',
  system: 'pathology',
  source: 'L3 — Adaptive Responses to Cell Injury',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pathology' },
    { kind: 'lecture', label: 'L3 Adaptations' },
    { kind: 'mechanism', label: 'Size vs number; reversible' },
    { kind: 'exam', label: 'Hypertrophy vs hyperplasia; atrophy causes' },
  ],

  highYield: [
    'Cells ADAPT to persistent stress by changing their size, number or type, achieving a new steady state and AVOIDING injury; adaptations are REVERSIBLE if the stimulus is removed, but can precede injury if the stress is excessive. The four adaptations are HYPERTROPHY, HYPERPLASIA, ATROPHY, and METAPLASIA (metaplasia is covered in [[metaplasia-dysplasia]]).',
    'HYPERTROPHY = increase in cell SIZE (and thus organ size) from increased synthesis of structural proteins/organelles — the response of PERMANENT (non-dividing) cells like cardiac and skeletal muscle. Physiologic: skeletal-muscle hypertrophy with exercise, uterine growth in pregnancy. Pathologic: LEFT VENTRICULAR HYPERTROPHY in hypertension/aortic stenosis (pressure overload). HYPERPLASIA = increase in cell NUMBER (needs cells able to divide — labile/stable cells); physiologic (hormonal — breast in pregnancy; compensatory — liver regeneration) or pathologic (endometrial hyperplasia from excess oestrogen; benign prostatic hyperplasia). Hypertrophy and hyperplasia often occur together in dividing tissues.',
    'ATROPHY = SHRINKAGE in cell size/number → reduced organ size, via decreased protein synthesis and increased degradation (ubiquitin-proteasome, AUTOPHAGY). Causes: DISUSE (immobilised limb), DENERVATION, loss of blood supply/ischaemia, inadequate NUTRITION, loss of HORMONAL/trophic stimulation (endocrine gland atrophy), pressure, and AGEING. Residual lipofuscin ("brown atrophy") may accumulate.',
    'The unifying idea: adaptation matches the cell/organ\'s functional demand — grow (hypertrophy/hyperplasia) when demand or stimulation rises, shrink (atrophy) when it falls. Whether a cell responds by increasing SIZE or NUMBER depends on its proliferative capacity (permanent cells → hypertrophy; labile/stable cells → hyperplasia ± hypertrophy).',
    '**The take-home: adaptations = reversible responses to stress. HYPERTROPHY = bigger cells (permanent cells — cardiac/skeletal muscle; LVH in hypertension). HYPERPLASIA = more cells (dividing cells — endometrium, prostate, liver regeneration). ATROPHY = shrinkage (disuse, denervation, ischaemia, poor nutrition, loss of hormonal stimulation; autophagy). Size vs number depends on proliferative capacity.** Metaplasia/dysplasia are [[metaplasia-dysplasia]]; overwhelmed adaptation → [[cell-injury-mechanisms]].',
  ],

  mechanism: {
    title: 'Reversible adaptations matching demand: hypertrophy (↑cell SIZE — permanent cells/LVH), hyperplasia (↑cell NUMBER — dividing cells), atrophy (shrinkage — disuse/denervation/ischaemia/hormone loss, via autophagy)',
    steps: [
      { id: 's1', label: 'Adaptation = reversible change in size/number/type to avoid injury', emphasis: 'key' },
      { id: 's2', label: 'Hypertrophy = ↑cell SIZE (permanent cells: cardiac/skeletal muscle; LVH)', emphasis: 'key' },
      { id: 's3', label: 'Hyperplasia = ↑cell NUMBER (dividing cells: endometrium, prostate, liver)', emphasis: 'key' },
      { id: 's4', label: 'Atrophy = shrinkage: disuse, denervation, ischaemia, poor nutrition, hormone loss (autophagy)', emphasis: 'key' },
      { id: 's5', label: 'Size vs number depends on proliferative capacity; reversible if stimulus removed', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Thickened left ventricle in long-standing hypertension', mechanism: 'Hypertrophy (pressure overload, permanent cells)', significance: 'key' },
    { sign: 'Enlarged uterus in pregnancy', mechanism: 'Hypertrophy + hyperplasia (hormonal)', significance: 'key' },
    { sign: 'Endometrial thickening from unopposed oestrogen', mechanism: 'Pathologic hyperplasia', significance: 'key' },
    { sign: 'Wasted muscle in an immobilised or denervated limb', mechanism: 'Atrophy (disuse/denervation)', significance: 'supportive' },
    { sign: 'Liver regrowth after partial hepatectomy', mechanism: 'Compensatory hyperplasia', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The adaptation increasing cell size', meaning: 'Hypertrophy' },
    { clue: 'The adaptation increasing cell number', meaning: 'Hyperplasia (requires dividing cells)' },
    { clue: 'The adaptation of decreased size/number', meaning: 'Atrophy' },
    { clue: 'Why the heart adapts by hypertrophy not hyperplasia', meaning: 'Cardiac myocytes are permanent (non-dividing)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Cellular adaptations are reversible responses that match tissue to demand, and recognising them explains common clinical findings: left ventricular hypertrophy from hypertension/aortic stenosis (permanent cells enlarge), endometrial or prostatic hyperplasia from hormonal stimulation (dividing cells multiply), and muscle atrophy from disuse or denervation. Whether a tissue enlarges by hypertrophy or hyperplasia depends on its proliferative capacity, and adaptations that are overwhelmed progress to cell injury. Metaplasia and its progression to dysplasia are [[metaplasia-dysplasia]]; injury is [[cell-injury-mechanisms]].' },
  ],

  mnemonics: [
    { hook: '"Hypertrophy = bigger (troPHY = size); Hyperplasia = more (PLAsia = number)"', expansion: ['Permanent cells → hypertrophy (heart)', 'Dividing cells → hyperplasia'] },
    { hook: 'Atrophy causes: "Disuse, Denervation, Ischaemia, Nutrition, Hormone loss, Ageing"', expansion: ['Autophagy + ubiquitin-proteasome', 'Reversible'] },
  ],

  traps: [
    {
      questionCategory: 'Why the heart hypertrophies rather than hyperplasias',
      wrongInstinct: 'A pressure-overloaded heart enlarges by making more myocytes (hyperplasia)',
      rightAnswer: 'Cardiac (and skeletal) myocytes are PERMANENT, non-dividing cells, so they CANNOT undergo hyperplasia; the heart adapts to pressure/volume overload purely by HYPERTROPHY — each myocyte enlarges by synthesising more contractile proteins/organelles — increasing cell SIZE, not number; hyperplasia requires labile or stable cells capable of division',
      why: 'Because whether a tissue grows by size (hypertrophy) or number (hyperplasia) is dictated by proliferative capacity, the non-dividing heart can only hypertrophy — a key link between cell biology and the clinical finding of LVH.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Left ventricular hypertrophy in a patient with long-standing hypertension represents an increase in:',
      options: [
        { id: 'a', text: 'The number of cardiac myocytes (hyperplasia)' },
        { id: 'b', text: 'The size of cardiac myocytes (hypertrophy)' },
        { id: 'c', text: 'Metaplastic change of myocytes' },
        { id: 'd', text: 'Atrophy of the ventricle' },
      ],
      answerId: 'b',
      explanation: 'Cardiac myocytes are permanent (non-dividing) cells, so the heart adapts to pressure overload by hypertrophy — increased cell size from synthesis of more contractile proteins — not by hyperplasia, which requires dividing cells.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which is a cause of pathologic atrophy?',
      options: [
        { id: 'a', text: 'Denervation of a muscle' },
        { id: 'b', text: 'Exercise training' },
        { id: 'c', text: 'Pregnancy' },
        { id: 'd', text: 'Excess oestrogen stimulation' },
      ],
      answerId: 'a',
      explanation: 'Atrophy (shrinkage in cell size/number) results from disuse, denervation, ischaemia, inadequate nutrition, loss of hormonal/trophic stimulation, pressure and ageing. Exercise causes hypertrophy, and pregnancy/oestrogen cause hypertrophy and hyperplasia.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default cellularAdaptationsGrowth;
