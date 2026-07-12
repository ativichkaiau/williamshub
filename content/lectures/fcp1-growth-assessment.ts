import type { Lecture } from '../../lib/types';

export const fcp1GrowthAssessment: Lecture = {
  id: 'fcp1-growth-assessment',
  title: 'Growth Assessment: Charts, Percentiles & Failure to Thrive',
  system: 'clinical',
  source: 'L3 — Growth & Development Assessment',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L3 Growth & Development' },
    { kind: 'mechanism', label: 'Measure → plot → trajectory' },
    { kind: 'exam', label: 'Weight · height · OFC' },
    { kind: 'investigation', label: 'Centiles · velocity · MPH' },
  ],

  highYield: [
    '**The core growth parameters are weight, length/height and head circumference (OFC)**, plotted on **age- and sex-specific growth charts**; add **BMI** in older children. Accurate measurement technique is the foundation — a bad measurement misleads more than no measurement.',
    '**Read the trajectory over time, not a single point.** A child tracking steadily along the 9th centile is usually normal; a child **crossing centiles downward** is the concern. **Serial measurements beat any single reading.**',
    '**Failure to thrive (weight faltering)** means weight (or the weight-for-height/length) crossing down **≥2 major centile lines**, or falling below expected for the child. Distinguish it from **normal variants** — familial short stature and constitutional delay — using the **mid-parental height** and **growth velocity**.',
    '**The pattern of which parameter falls first is a clue.** Weight tends to fall first in **inadequate intake or losses**, then height, then head circumference; a **primarily low height with slow velocity** points toward endocrine or genetic causes. Nutrition links to [[fcp1-nutritional-assessment]] and [[fcp1-malnutrition-evaluation]].',
    '**Red flags:** sustained downward centile crossing, a falling head circumference (neurodevelopmental concern), body disproportion, or growth failure with systemic symptoms. Growth and development are assessed together — see [[fcp1-development-milestones]].',
  ],

  mechanism: {
    title: 'From measurement to a growth judgement',
    steps: [
      { id: 's1', label: 'Measure accurately: weight, length/height, head circumference' },
      { id: 's2', label: 'Plot on the age- and sex-specific chart; add BMI where appropriate' },
      { id: 's3', label: 'Read the trajectory over time, not a single point', emphasis: 'key' },
      { id: 's4', label: 'Compare with mid-parental height & growth velocity' },
      { id: 's5', label: 'Flag downward centile crossing → failure-to-thrive workup', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Weight crossing down two or more major centile lines over time', mechanism: 'Defines weight faltering / failure to thrive and demands a cause be sought', significance: 'key' },
    { sign: 'Low weight with relatively preserved height and head circumference', mechanism: 'Points to an inadequate-intake or caloric problem rather than a growth-hormone one', significance: 'key' },
    { sign: 'Symmetrically small child tracking steadily along a low centile', mechanism: 'Familial short stature or constitutional delay — a normal variant, especially if the mid-parental height is low', significance: 'supportive' },
    { sign: 'Head circumference dropping across centiles', mechanism: 'A falling OFC raises concern for a neurodevelopmental problem and warrants review', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Serial weights crossing centiles downward', meaning: 'Failure to thrive — evaluate intake, losses/malabsorption and chronic illness' },
    { clue: 'Slow but steady growth along a low centile with a low mid-parental height', meaning: 'Likely familial short stature or constitutional delay — reassure and monitor' },
    { clue: 'Weight far below the height centile with visible wasting', meaning: 'Acute undernutrition — assess and manage as malnutrition ([[fcp1-malnutrition-evaluation]])' },
    { clue: 'Short stature with slow height velocity and delayed bone age', meaning: 'Suggests an endocrine cause (growth hormone or thyroid) — refer for workup' },
  ],

  treatment: [
    { logic: 'Plot serially before you diagnose failure to thrive', detail: 'A single low point on a chart may be normal for that child; only the trajectory across several measurements distinguishes faltering from a stable low centile.' },
    { logic: 'Reassure normal variants and investigate true faltering', detail: 'Familial short stature and constitutional delay need explanation and monitoring, not tests; genuine downward crossing needs a targeted search for the cause.' },
  ],

  mnemonics: [
    { hook: 'Growth = measure, Map onto the chart, watch the Movement (trajectory)', expansion: ['Measure weight, height and head circumference accurately', 'Map onto the age/sex chart and read the centile', 'Movement across centiles matters more than any single point'] },
  ],

  traps: [
    {
      questionCategory: 'Interpreting a single growth point',
      wrongInstinct: 'A child on the 3rd centile is failing to thrive and needs investigation',
      rightAnswer: 'A child tracking steadily along the 3rd centile with a matching mid-parental height is likely a normal variant',
      why: 'Failure to thrive is defined by crossing centiles downward over time, not by sitting on a low centile; a steady low trajectory in a genetically small child is normal.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 10-month-old’s weight has fallen from the 50th to below the 9th centile over three months, while length and head circumference remain near the 50th. This pattern most suggests:',
      options: [
        { id: 'a', text: 'Familial short stature' },
        { id: 'b', text: 'A growth-hormone deficiency' },
        { id: 'c', text: 'Weight faltering, most often from inadequate intake or losses' },
        { id: 'd', text: 'A normal constitutional pattern needing no assessment' },
      ],
      answerId: 'c',
      explanation: 'Weight crossing down while height and head circumference are preserved is the classic pattern of failure to thrive, usually from inadequate intake, excess losses or increased requirements — not an endocrine cause, which tends to depress height.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'Which single principle is most important when deciding whether a child’s growth is abnormal?',
      options: [
        { id: 'a', text: 'A one-off measurement below the 50th centile' },
        { id: 'b', text: 'The trajectory across serial measurements over time' },
        { id: 'c', text: 'The weight alone, ignoring height and head circumference' },
        { id: 'd', text: 'The parents’ heights are irrelevant' },
      ],
      answerId: 'b',
      explanation: 'Serial measurements plotted over time reveal whether a child is tracking normally or crossing centiles. A single point, or weight in isolation, is far less informative than the trajectory judged against genetic potential.',
      tests: 'mechanism',
    },
  ],
};

export default fcp1GrowthAssessment;
