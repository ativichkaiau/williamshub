import type { Lecture } from '../../lib/types';

export const ghpHypothalamicFeedingRegulation: Lecture = {
  id: 'ghp-hypothalamic-feeding-regulation',
  title: 'Hypothalamic Regulation of Feeding',
  system: 'gi',
  source: 'Ch 71 — Dietary Balances; Feeding, Obesity & Starvation; Vitamins & Minerals',
  updated: '2026-09-14',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'Ch 71 Feeding & Obesity' },
    { kind: 'mechanism', label: 'Leptin → arcuate → melanocortin → paraventricular nucleus' },
    { kind: 'exam', label: 'Lateral lesion aphagia · ventromedial lesion hyperphagia · leptin resistance not deficiency' },
  ],

  highYield: [
    '**The hypothalamus was mapped by lesions, and lesion results are still how this is examined.** Destroy the **lateral hypothalamic area — the feeding centre — and the animal stops eating entirely**: aphagia, adipsia and death by starvation unless force-fed. Stimulate the same region and it eats voraciously. Destroy the **ventromedial nucleus — the satiety centre — and the mirror image appears**: relentless hyperphagia and progressive obesity, levelling off only at a new and equally well-defended plateau. The **paraventricular nucleus** behaves like the ventromedial one, its lesion also producing hyperphagia, while the **dorsomedial** resembles the lateral. Humans reproduce the experiment after **craniopharyngioma, hypothalamic surgery or cranial irradiation**, presenting as intractable hypothalamic obesity. The dual-centre model is a caricature of a distributed network, but it is the caricature exam stems are written from.',
    '**The arcuate nucleus is where circulating chemistry becomes behaviour.** It lies against the **median eminence**, outside the tight blood–brain barrier, so its neurons sample hormones in the blood directly rather than waiting for them to be transported. Two antagonistic populations then do the arithmetic: **NPY/AgRP neurons drive feeding and lower energy expenditure**, and **POMC/CART neurons do precisely the reverse**. POMC is cleaved to **α-MSH**, which acts on **MC4 receptors in the paraventricular nucleus** to suppress intake; **AgRP is an endogenous antagonist at that very receptor**, so the orexigenic and anorexigenic arms compete for one physical switch rather than acting on separate pathways. That single point of convergence is why **MC4R mutation is the commonest monogenic cause of human obesity**, accounting for a few per cent of severe early-onset cases.',
    '**Sort every appetite signal by its time constant and the whole chapter organises itself.** The **long-term** arm reports *stores*: **leptin** from adipocytes and **insulin** from the beta cell both circulate in proportion to fat mass, reach the arcuate, and **inhibit NPY/AgRP while stimulating POMC**. The **short-term** arm reports *meals*: **ghrelin** from the gastric fundus **rises in the hour before a customary meal and falls within an hour of eating** — the only orexigenic gut hormone, and the one that initiates a meal. **CCK** from duodenal I cells, with **PYY 3-36** and **GLP-1** from ileal and colonic L cells, terminates it, largely by **vagal afferents to the nucleus tractus solitarius**. The distinction is the organising principle: **short-term signals decide the size of this meal, long-term signals decide the size of the patient**. The gut arm in detail: [[gut-hormones-appetite-regulation]].',
    '**Common human obesity is leptin RESISTANCE with high leptin, not leptin deficiency — invert this and the entire clinical layer inverts with it.** Leptin is secreted by fat, so the obese patient has **leptin several-fold above the reference range** alongside a hypothalamus behaving as though it were starving: transport across the barrier is saturable and impaired, and **SOCS3 and PTP1B damp JAK-STAT3 signalling** within the arcuate neuron itself, blunting melanocortin output downstream. The proof runs in both directions. **Congenital leptin deficiency** — a handful of families with **LEP** mutations, undetectable leptin and extreme hyperphagia from infancy — is transformed by recombinant leptin, with intake and weight normalising. **Ordinary obesity is untouched by it**, because the signal was never the missing piece. The adipose side of the same story: [[hen1-adipokines-obesity-insulin-resistance]].',
    '**Body weight behaves like a defended variable, and the defence is asymmetric — it resists loss far harder than gain.** After a deliberate loss of about 10% of body weight, **total energy expenditure settles some 300–400 kcal/day below what the new, smaller body predicts** (adaptive thermogenesis), while **ghrelin rises and leptin, PYY and GLP-1 fall**, every one of those changes pointing towards regain. Crucially, they are **still measurable years later**, so regain is the expected output of an intact control system rather than a collapse of willpower — a fact worth stating to patients plainly and without moralising. It is also predictive: **interventions that alter the signals themselves succeed where advice that alters only the behaviour does not**, which is the physiological reason GLP-1 receptor agonists and bariatric surgery work.',
    '**The system meters food long before any of it could have been absorbed, which is why satiety arrives so early.** A sham-fed animal, whose swallowed food drains away through an oesophageal fistula and never reaches the stomach, **still stops feeding after a quantity roughly proportional to what passed through the mouth** — chewing, salivating and swallowing are being counted — although the effect is short-lived and it resumes far sooner than a normally fed animal. Add **gastric distension**, carried by vagal mechanoreceptors to the nucleus tractus solitarius, and feeding stops sooner still. These oral and gastric signals are **anticipatory and transient**; alone they would let intake drift, so they are corrected over days by the adiposity signals. The layering is the design: **fast signals end the meal, slow signals set the stores being defended**, and the arithmetic those stores obey is in [[ghp-dietary-balances-energy-requirement]].',
  ],

  mechanism: {
    title: 'Fat mass → leptin → arcuate: NPY/AgRP down, POMC up → α-MSH at MC4R in PVN → intake down, expenditure up',
    steps: [
      { id: 's1', label: 'Adipocytes secrete leptin in proportion to fat mass; the gastric fundus secretes ghrelin between meals', emphasis: 'normal' },
      { id: 's2', label: 'Both reach the arcuate nucleus, which sits at the median eminence outside the blood–brain barrier', emphasis: 'normal' },
      { id: 's3', label: 'Leptin inhibits the orexigenic NPY/AgRP neurons and stimulates the anorexigenic POMC/CART neurons', emphasis: 'key' },
      { id: 's4', label: 'POMC-derived α-MSH acts at MC4 receptors in the paraventricular nucleus; AgRP antagonises the same receptor', emphasis: 'key' },
      { id: 's5', label: 'Output: intake falls while sympathetic tone and energy expenditure rise — the loop that defends fat mass', emphasis: 'key' },
      { id: 's6', label: 'In common obesity the loop breaks at the receiving end: leptin is high but signalling is damped, so the brain reads starvation', emphasis: 'key' },
    ],
    branches: [
      {
        fromId: 's5',
        title: 'Short-term meal control, superimposed on the long-term loop',
        steps: [
          { id: 'b1', label: 'Ghrelin rises before a customary meal and initiates feeding', emphasis: 'key' },
          { id: 'b2', label: 'Oral metering and gastric distension signal via vagal afferents to the nucleus tractus solitarius', emphasis: 'normal' },
          { id: 'b3', label: 'CCK, PYY 3-36 and GLP-1 from the small and large bowel terminate the meal', emphasis: 'key' },
        ],
      },
    ],
  },

  examFindings: [
    { sign: 'Intractable hyperphagia and rapid weight gain following resection of a craniopharyngioma', mechanism: 'Hypothalamic obesity — loss of ventromedial and paraventricular satiety output leaves NPY/AgRP drive unopposed', significance: 'key' },
    { sign: 'Serum leptin four times the reference range in a patient with a BMI of 42 who is constantly hungry', mechanism: 'Leptin tracks fat mass, so high levels with persistent hunger define resistance and exclude the rare deficiency syndrome', significance: 'key' },
    { sign: 'Extreme hyperphagia from the first months of life with undetectable serum leptin', mechanism: 'Congenital leptin deficiency — the one obesity that responds dramatically to recombinant leptin', significance: 'key' },
    { sign: 'Severe early-onset obesity with tall stature, increased lean and bone mass and hyperinsulinaemia', mechanism: 'MC4R mutation — the melanocortin switch fails downstream of a completely intact leptin signal', significance: 'key' },
    { sign: 'Hunger ratings and fasting ghrelin still elevated a year after a successful 10% weight loss', mechanism: 'The defence of the previous weight persists long after the loss, so regain is the predicted output rather than relapse', significance: 'key' },
    { sign: 'Early and marked loss of appetite after Roux-en-Y gastric bypass, out of proportion to the size of the pouch', mechanism: 'Nutrients reach the distal bowel sooner, raising PYY and GLP-1 and lowering ghrelin — a signalling operation, not merely a restrictive one', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Lesion of the lateral hypothalamic area', meaning: 'Aphagia and adipsia — the feeding centre; stimulating it instead produces hyperphagia' },
    { clue: 'Lesion of the ventromedial nucleus', meaning: 'Hyperphagia and obesity to a new defended plateau — the satiety centre' },
    { clue: 'The two antagonistic neuron populations of the arcuate nucleus', meaning: 'NPY/AgRP orexigenic against POMC/CART anorexigenic, converging on MC4R in the paraventricular nucleus' },
    { clue: 'The only orexigenic gut hormone, rising before meals and falling after them', meaning: 'Ghrelin from the gastric fundus — the meal-initiation signal' },
    { clue: 'Hormone reporting the size of the fat stores rather than the size of the last meal', meaning: 'Leptin, the long-term adiposity signal; insulin carries the same message more weakly' },
    { clue: 'Why recombinant leptin fails in ordinary obesity but cures one rare syndrome', meaning: 'The common lesion is arcuate resistance with already-high levels; only true LEP deficiency has a signal left to replace' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'This is the physiology that decides which obesity treatments can work. **Anything acting only on behaviour is fighting a controller that adjusts both sides of the energy equation against it**, which is why advice and dietary restriction reliably produce loss at six months and regain at two years without any change in the patient. Treatments that succeed do so by **entering the signalling loop rather than arguing with it**: GLP-1 and dual GLP-1/GIP receptor agonists supply a satiety signal pharmacologically and lower the defended weight itself, and bariatric surgery works far more by **durably raising PYY and GLP-1 and lowering ghrelin** than by the mechanical restriction patients are usually told about — which is exactly why a bypass suppresses hunger from the first week, long before any meaningful weight has been lost. Setpoint-lowering, not restriction, is the concept being tested: [[obesity-management-bariatric-surgery]].' },
    { logic: 'Where it is examined', detail: 'Three stems recur, and two of them are traps. **The lesion pair** — lateral gives aphagia, ventromedial gives hyperphagia — is asked straight, and the commonest error is simply reversing them. **Leptin in obesity** is asked to see whether you will say low; it is high, and the defect is resistance. And **the arcuate wiring** is asked as a pathway question: leptin inhibits NPY/AgRP and stimulates POMC, POMC gives α-MSH, α-MSH acts at MC4R in the paraventricular nucleus, and AgRP blocks that same receptor. If you can recite that chain you can also explain why MC4R mutation is the commonest monogenic obesity, and why a drug acting upstream of a broken MC4R cannot possibly work.' },
  ],

  mnemonics: [
    {
      hook: 'Lateral = Lose it. Ventromedial = Very much more.',
      expansion: [
        'Lateral hypothalamus is the feeding centre, so its lesion stops eating: aphagia and adipsia',
        'Ventromedial is the satiety centre, so its lesion never stops eating: hyperphagia and obesity',
        'Paraventricular behaves like ventromedial; dorsomedial behaves like lateral',
        'Stems almost always describe the lesion result, not the stimulation result',
      ],
    },
    {
      hook: 'Ghrelin Growls before the meal; Leptin Logs the stores',
      expansion: [
        'Ghrelin: stomach, rises pre-meal and falls after — the only orexigenic gut hormone',
        'CCK, PYY 3-36 and GLP-1: from the gut after a meal — they stop it',
        'Leptin and insulin: proportional to fat mass — they set the defended level',
        'Short-term signals size the meal; long-term signals size the patient',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'What leptin levels do in ordinary obesity',
      wrongInstinct: 'Leptin is low, and that is why the patient never feels full',
      rightAnswer: 'Leptin is high, often several-fold; the defect is resistance to it at the arcuate nucleus',
      why: 'Leptin is made by fat, so more fat means more leptin — deficiency is a rare monogenic syndrome, and it is the only form that responds to giving leptin.',
    },
    {
      questionCategory: 'Why weight is regained after successful dieting',
      wrongInstinct: 'The patient has simply drifted back to the old eating behaviour once motivation faded',
      rightAnswer: 'Expenditure has fallen below what the smaller body predicts while orexigenic signalling has risen, and both persist for years',
      why: 'Regain is the measured output of an intact defence of body weight, which is precisely why treatments that alter those signals outperform advice that does not.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 9-year-old develops relentless hyperphagia and gains 20 kg in the year after resection of a suprasellar craniopharyngioma. The mechanism is:',
      options: [
        { id: 'a', text: 'Destruction of the lateral hypothalamic feeding centre' },
        { id: 'b', text: 'Loss of ventromedial and paraventricular satiety output, leaving arcuate NPY/AgRP drive unopposed' },
        { id: 'c', text: 'Deficient leptin secretion from adipocytes following the operation' },
        { id: 'd', text: 'Excess ghrelin secretion from the gastric fundus' },
      ],
      answerId: 'b',
      explanation: 'Suprasellar surgery damages the medial hypothalamus, and loss of the satiety centres removes the brake on feeding drive, producing the classic hypothalamic obesity syndrome. Option a is the reverse lesion and would cause aphagia and weight loss, not hyperphagia. Leptin is not deficient here and in fact rises with the accumulating fat; the failure is that the arcuate output it should drive has nowhere left to act. Nothing in the stem implicates the stomach.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A 34-year-old with a BMI of 44 has a serum leptin five times the reference range. A trial of recombinant leptin produces no reduction in appetite or weight. The best explanation is that:',
      options: [
        { id: 'a', text: 'The administered leptin was degraded before reaching the circulation, so levels never rose' },
        { id: 'b', text: 'She has a LEP mutation producing a biologically inactive hormone, and replacement is therefore futile' },
        { id: 'c', text: 'Arcuate leptin signalling is resistant, with saturated transport and damped JAK-STAT3 output, so adding more of an already-elevated signal changes nothing' },
        { id: 'd', text: 'Leptin acts only on adipocytes and has no central action on feeding' },
      ],
      answerId: 'c',
      explanation: 'Common obesity is hyperleptinaemic. Transport into the brain is saturable and already near maximal, and within the arcuate neuron SOCS3 and PTP1B blunt the JAK-STAT3 response, so raising a signal that is already several-fold elevated adds nothing. Option b is the opposite scenario: true LEP deficiency gives undetectable leptin and responds dramatically to replacement, which is the whole reason the distinction is examined. Leptin does have a central action, at the arcuate nucleus, and that is precisely where the lesion lies.',
      tests: 'disease',
    },
    {
      id: 'q3',
      stem: 'A patient one year after sleeve gastrectomy reports far less hunger than she did after losing a similar amount of weight by dieting alone. Fasting ghrelin is low and postprandial PYY and GLP-1 are high. The best explanation is:',
      options: [
        { id: 'a', text: 'The smaller gastric reservoir mechanically limits intake, and that restriction alone accounts for the reduced hunger' },
        { id: 'b', text: 'Removal of the ghrelin-secreting fundus with accelerated nutrient delivery distally lowers the orexigenic signal and raises the satiety signals, resetting the defended weight' },
        { id: 'c', text: 'Vagal afferents from the stomach were divided at operation, abolishing all central feeding signals' },
        { id: 'd', text: 'Leptin has fallen with the loss of fat mass, and lower leptin reduces appetite' },
      ],
      answerId: 'b',
      explanation: 'The contrast in the stem is the point: the same weight loss achieved by diet raises ghrelin and lowers PYY and GLP-1, generating hunger, whereas surgery moves all three the other way. That is a change in the signals themselves and therefore in the weight being defended, which is why appetite falls within days of operation and long before much weight has gone. Mechanical restriction cannot explain reduced hunger between meals. Option d inverts leptin physiology: falling leptin increases appetite, which is exactly the problem with dieting.',
      tests: 'treatment',
    },
  ],
};

export default ghpHypothalamicFeedingRegulation;
