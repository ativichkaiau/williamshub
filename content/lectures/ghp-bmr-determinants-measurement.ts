import type { Lecture } from '../../lib/types';

export const ghpBmrDeterminantsMeasurement: Lecture = {
  id: 'ghp-bmr-determinants-measurement',
  title: 'Basal Metabolic Rate: Determinants & Measurement',
  system: 'physiology',
  source: 'Ch 72 — Energetics & Metabolic Rate',
  updated: '2026-09-14',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'Ch 72 Energetics & Metabolic Rate' },
    { kind: 'mechanism', label: 'Lean mass sets BMR · thyroid sets the gain' },
    { kind: 'exam', label: 'Sex and age differences are body composition, not sex and age' },
  ],

  highYield: [
    '**BMR is a defined measurement condition, not merely a resting value — and the conditions exist to strip out everything that is not the cost of being alive.** The subject must be **awake but supine and physically at rest, thermoneutral, 12–14 hours fasted, free of recent exercise and of emotional arousal**. Under those terms a 70 kg man burns roughly **65–70 kcal per hour, about 1600–1700 kcal per day**, or a useful bedside approximation of **1 kcal/kg/h**. In practice almost nothing measured clinically meets the full definition, so what is reported is **resting energy expenditure**, which runs about **10% higher** and is the number that actually appears on a metabolic cart.',
    '**BMR is the sum of organ costs, and organs differ in cost per kilogram by nearly a hundred-fold.** Per kilogram per day, **heart and kidney burn about 440 kcal, brain about 240, liver about 200 — against roughly 13 for resting skeletal muscle and about 4.5 for adipose tissue**. Add the masses and the arithmetic is startling: **brain, liver, heart and kidney together are about 5–6% of body weight but account for some 60–70% of basal expenditure**, while skeletal muscle, at 40% of body weight, contributes only about a fifth at rest. Everything else in this module is a consequence of that table, including why gaining fat does far less to BMR than gaining muscle, and why the brain makes infants so metabolically expensive.',
    '**Lean body mass is the dominant determinant, and stating that correctly disposes of both classic exam traps.** Fat-free mass alone explains roughly **60–80% of the variance** in BMR between individuals. So the observation that **women average 5–10% lower BMR than men** is a statement about **body composition** — a higher fat fraction and less lean tissue — and **not about sex as an independent variable**; normalise to fat-free mass and most of the difference disappears. Likewise **BMR falls by roughly 1–2% per decade after age 20**, and the great majority of that is **sarcopenia**, not an intrinsic slowing of cells. The clinical corollary is that **preserving muscle preserves metabolic rate**.',
    '**Expressing BMR per square metre of body surface is a historical convention that works by accident and fails where it matters.** The Rubner surface law gave the traditional figures of about **40 kcal/m²/h in a young man and 37 in a young woman**, and the normalisation does flatten data across body sizes reasonably well — **but not because heat loss sets metabolic rate**. It works because surface area happens to correlate with lean mass. Where the two come apart, the convention misleads badly: **adipose tissue adds surface area and weight while adding almost no metabolically active tissue**, so a patient with obesity shows a **low-looking BMR per square metre while their absolute BMR is genuinely high**. Normalising to **fat-free mass** is the defensible choice.',
    '**Thyroid hormone is the principal hormonal setter of the dial; catecholamines move it acutely.** Thyroid status can swing BMR from about **40–50% below normal in myxoedema to 60–100% above normal in thyrotoxicosis** — a wider range than any other single influence — acting through **Na⁺-K⁺-ATPase expression, mitochondrial biogenesis, uncoupling and futile substrate cycling**. **Catecholamines** raise it within minutes and can nearly **double** it under maximal sympathetic drive or in phaeochromocytoma. Behind these sit smaller, steadier terms: **growth hormone roughly +15–20%**, **testosterone +10–15%**, **fever about +13% per °C**, **sleep −10–15%**, and **prolonged undernutrition −20–30%**.',
    '**The historic BMR test is obsolete, and knowing why it died is the point.** For decades thyroid status was assessed by closed-circuit spirometry with the result expressed as a **percentage deviation from a surface-area-predicted normal, with −10% to +15% taken as the reference range**. It was abandoned not because the physiology was wrong but because it was **non-specific**: fever, anxiety, malnutrition, pregnancy and cardiac disease all move it, and **TSH measures the axis directly with far better sensitivity**. What replaced it for energy questions is **indirect calorimetry**, supported by predictive equations — **Harris-Benedict and Mifflin-St Jeor** from height, weight, age and sex, or **Katch-McArdle** from fat-free mass, which is the more rational input.',
  ],

  mechanism: {
    title: 'Organ cost table → lean mass sets BMR → composition explains age and sex → thyroid sets the gain → measured by calorimetry',
    steps: [
      { id: 's1', label: 'Tissues differ in energy cost per kilogram by nearly a hundred-fold — kidney and heart about 440 kcal/kg/day, adipose about 4.5', emphasis: 'key' },
      { id: 's2', label: 'Brain, liver, heart and kidney are 5–6% of body mass but 60–70% of basal expenditure', emphasis: 'key' },
      { id: 's3', label: 'BMR therefore tracks the mass of metabolically expensive lean tissue, not total body weight', emphasis: 'key' },
      { id: 's4', label: 'Lower BMR in women and the decline with age both follow from body composition, not from sex or age as such', emphasis: 'key' },
      { id: 's5', label: 'Thyroid hormone sets the chronic gain through pump expression and mitochondrial capacity; catecholamines move it acutely', emphasis: 'key' },
      { id: 's6', label: 'Measured by indirect calorimetry; surface-area normalisation is a proxy for lean mass that breaks down in obesity', emphasis: 'normal' },
    ],
    branches: [
      {
        fromId: 's5',
        title: 'Downward resetting',
        steps: [
          { id: 'b1', label: 'Sustained energy deficit lowers T3, leptin and sympathetic tone', emphasis: 'normal' },
          { id: 'b2', label: 'Resting expenditure falls further than the loss of lean mass predicts — adaptive thermogenesis', emphasis: 'normal' },
          { id: 'b3', label: 'The deficit persists for years after weight loss and is a major driver of regain', emphasis: 'danger' },
        ],
      },
    ],
  },

  examFindings: [
    { sign: 'Cold intolerance, bradycardia, weight gain and delayed relaxation of the ankle reflex in severe hypothyroidism', mechanism: 'BMR falls 40–50% as Na⁺-K⁺-ATPase expression, mitochondrial capacity and futile cycling all decline; less obligatory heat is produced', significance: 'key' },
    { sign: 'Heat intolerance, a wide pulse pressure and weight loss despite a large appetite in thyrotoxicosis', mechanism: 'BMR rises 60–100%, so intake cannot keep pace and the extra heat must be dissipated by cutaneous vasodilatation and sweating', significance: 'key' },
    { sign: 'An elderly patient whose BMR per kilogram of body weight has fallen markedly, yet whose BMR per kilogram of fat-free mass is almost unchanged from young adulthood', mechanism: 'The age-related decline is predominantly loss of lean tissue rather than a change in the metabolic rate of the tissue that remains', significance: 'key' },
    { sign: 'A febrile patient whose caloric and fluid requirements rise by roughly an eighth for every degree Celsius of temperature elevation', mechanism: 'Reaction rates rise with temperature, and the higher thermoregulatory set point is defended by increased heat production', significance: 'key' },
    { sign: 'After losing 15% of body weight, measured resting expenditure is 10–15% below the value predicted from the new body composition, and remains so for years', mechanism: 'Adaptive thermogenesis — falling T3, leptin and sympathetic outflow lower the metabolic cost of the remaining tissue', significance: 'key' },
    { sign: 'A patient with obesity whose BMR expressed per square metre of surface area appears low while their absolute BMR is well above average', mechanism: 'Adipose tissue inflates the denominator without contributing meaningful metabolic activity, so the normalisation and not the patient is at fault', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Energy cost of the major organs, per kilogram per day', meaning: 'Kidney and heart about 440 kcal, brain about 240, liver about 200, resting skeletal muscle about 13, adipose about 4.5 — the near hundred-fold spread that explains everything else' },
    { clue: 'The single variable that best predicts basal metabolic rate between individuals', meaning: 'Fat-free mass, which alone accounts for roughly 60–80% of the variance — which is why the Katch-McArdle equation uses it as its only input' },
    { clue: 'Why basal rate was traditionally reported in kcal per square metre per hour', meaning: 'The Rubner surface law; about 40 kcal/m²/h in young men and 37 in young women. It works only because surface area correlates with lean mass, and it fails in obesity' },
    { clue: 'The influence capable of the widest swing in basal metabolic rate', meaning: 'Thyroid hormone — from 40–50% below normal in myxoedema to 60–100% above normal in thyrotoxicosis' },
    { clue: 'Why the classical BMR test was abandoned for thyroid assessment', meaning: 'Not inaccuracy but poor specificity — fever, anxiety, malnutrition, pregnancy and cardiac disease all shift it, and TSH interrogates the axis directly' },
    { clue: 'Why resting expenditure after weight loss sits below what the new body composition predicts', meaning: 'Adaptive thermogenesis — reduced T3, leptin and sympathetic tone lower the cost per kilogram of remaining tissue, and the effect persists for years' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'One sentence carries the module: **BMR is bought by the kilogram of lean tissue, and thyroid hormone sets the price**. That is why a nutritional prescription should start from lean mass rather than body weight, why **resistance training defends metabolic rate during weight loss in a way that dietary restriction alone does not**, and why a patient who has lost a great deal of weight is fighting a genuinely lowered expenditure rather than imagining it. The hormonal side — how thyroid hormone actually raises oxygen consumption at tissue level — is in [[hen1-thyroid-physiologic-actions]]; the full budget that BMR sits inside, with the thermic effect of food and activity, is in [[ghp-energy-expenditure-metabolic-rate]].' },
    { logic: 'Where it is examined', detail: 'The examiner has two favourite moves here and both punish the same lazy reasoning. **The sex difference** — women do not have a lower BMR because they are women, they have one because they carry a higher fat fraction, and the gap largely vanishes on correcting for fat-free mass. **The obesity paradox of surface-area normalisation** — BMR per square metre looks low while absolute BMR is high, because fat inflates the denominator. A third stem tests **which single hormone has the widest effect on BMR** (thyroid, not catecholamines, which act faster but over a narrower chronic range), and a fourth asks **why the old BMR test was replaced by TSH**. The thyroid patterns behind those stems are in [[hen1-hpt-axis-thyroid-patterns]], and the practical measurement of energy requirement in patients is in [[nutritional-assessment-support]].' },
  ],

  mnemonics: [
    {
      hook: 'Bought by the kilogram of LEAN, not the kilogram of BODY',
      expansion: [
        'Fat-free mass explains 60–80% of the variance in BMR',
        'So the female-male gap is composition, not sex',
        'And the fall with age is sarcopenia, not tired cells',
        'Fat costs about 4.5 kcal/kg/day — near enough to nothing',
      ],
    },
    {
      hook: 'Thyroid sets the dial, catecholamines nudge it, everything else is a trim',
      expansion: [
        'Thyroid: −40 to −50% in myxoedema, +60 to +100% in thyrotoxicosis',
        'Catecholamines: up to double, within minutes',
        'Growth hormone +15–20%, testosterone +10–15%, fever +13% per °C',
        'Sleep −10 to −15%, prolonged undernutrition −20 to −30%',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'Why basal metabolic rate is lower in women and falls with age',
      wrongInstinct: 'Female sex hormones lower metabolic rate directly, and cells intrinsically slow down with age',
      rightAnswer: 'Both differences are dominated by body composition — a higher fat fraction in women, and progressive loss of lean mass with age',
      why: 'Express BMR per kilogram of fat-free mass instead of per kilogram of body weight and most of both gaps disappears, which is the whole point of the comparison.',
    },
    {
      questionCategory: 'Interpreting basal metabolic rate normalised to body surface area in obesity',
      wrongInstinct: 'BMR per square metre is below the reference range, so this patient has a genuinely slow metabolism',
      rightAnswer: 'Absolute BMR is high; adipose tissue has inflated the surface-area denominator without adding metabolically active mass',
      why: 'Surface-area normalisation is a historical proxy for lean mass, so it breaks precisely where lean mass and body size stop tracking each other.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Two 80 kg men are compared. One is a bodybuilder with 10% body fat, the other sedentary with 32% body fat. Both are healthy and euthyroid. Compared with the sedentary man, the bodybuilder will have:',
      options: [
        { id: 'a', text: 'A lower basal metabolic rate, since muscle is metabolically quiescent at rest' },
        { id: 'b', text: 'An essentially identical basal metabolic rate, since body weight is the determinant' },
        { id: 'c', text: 'A higher basal metabolic rate, because he carries substantially more fat-free mass' },
        { id: 'd', text: 'A higher basal metabolic rate only while actively training' },
      ],
      answerId: 'c',
      explanation: 'Fat-free mass is the dominant determinant of BMR, explaining roughly 60 to 80% of the between-person variance. At equal body weight the man with 10% fat carries about 18 kg more lean tissue, and although resting muscle is inexpensive per kilogram compared with viscera, that much extra lean mass, together with the larger organ mass that supports it, raises basal expenditure measurably. Body weight alone is a poor predictor precisely because it does not distinguish the two compartments.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Although skeletal muscle makes up about 40% of body mass and adipose tissue a further large fraction, brain, liver, heart and kidney together account for roughly two-thirds of basal metabolic rate despite comprising only 5 to 6% of body weight. The explanation is that:',
      options: [
        { id: 'a', text: 'These organs have a much larger surface area to volume ratio and therefore lose more heat' },
        { id: 'b', text: 'Their energy cost per kilogram is one to two orders of magnitude greater than that of resting muscle or fat' },
        { id: 'c', text: 'Basal metabolic rate is measured in the fasted state, when muscle metabolism ceases entirely' },
        { id: 'd', text: 'Muscle and fat derive their resting energy anaerobically and so are not detected by indirect calorimetry' },
      ],
      answerId: 'b',
      explanation: 'The organ cost table is the whole answer. Kidney and heart run at roughly 440 kcal per kilogram per day and brain and liver at 200 to 240, against about 13 for resting skeletal muscle and 4.5 for adipose tissue. A near hundred-fold difference in specific metabolic rate easily outweighs a ten-fold difference in mass. Resting muscle metabolism does not cease in the fasted state, and its oxygen consumption is fully captured by indirect calorimetry.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A patient has lost 18% of her body weight over a year and has regained 4 kg despite a carefully documented intake matching the energy requirement predicted for her current weight and body composition. Indirect calorimetry shows a resting expenditure 13% below prediction. The most likely explanation is:',
      options: [
        { id: 'a', text: 'Undiagnosed hypothyroidism, which should be treated with thyroxine' },
        { id: 'b', text: 'Adaptive thermogenesis — a sustained fall in T3, leptin and sympathetic tone lowers expenditure below what the new body composition predicts' },
        { id: 'c', text: 'A calibration error, since resting expenditure cannot fall below the value predicted from fat-free mass' },
        { id: 'd', text: 'Loss of adipose tissue, which is a major contributor to resting energy expenditure' },
      ],
      answerId: 'b',
      explanation: 'After substantial weight loss, resting expenditure characteristically falls 10 to 15% further than the reduction in lean mass alone can account for, driven by lower circulating T3 and leptin and reduced sympathetic outflow. The adaptation can persist for years and is a principal reason why maintenance after weight loss is harder than the loss itself. Hypothyroidism would need biochemical confirmation rather than assumption, the discrepancy is a well-replicated finding rather than an artefact, and adipose tissue contributes very little to resting expenditure.',
      tests: 'disease',
    },
  ],
};

export default ghpBmrDeterminantsMeasurement;
