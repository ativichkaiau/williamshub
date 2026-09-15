import type { Lecture } from '../../lib/types';

export const ghpTestosteroneActionsMaleAxis: Lecture = {
  id: 'ghp-testosterone-actions-male-axis',
  title: 'Testosterone, the Male Axis & the Pineal Gland',
  system: 'repro',
  source: 'Ch 81 — Reproductive & Hormonal Functions of the Male',
  updated: '2026-09-15',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'Ch 81 Male Reproductive Physiology' },
    { kind: 'mechanism', label: 'One hormone, three fates: testosterone · DHT via 5-alpha-reductase · oestradiol via aromatase' },
    { kind: 'exam', label: 'Oestrogen closes epiphyses in both sexes · SHBG and free testosterone · pineal germinoma' },
  ],

  highYield: [
    '**Androgen action divides three ways, and almost every male endocrine question is really asking which of the three is being tested.** **TESTOSTERONE itself** acts directly on the androgen receptor to build the Wolffian derivatives — epididymis, vas, seminal vesicle — and later muscle mass, erythropoiesis, laryngeal growth, libido and, at intratubular concentrations, spermatogenesis. **DIHYDROTESTOSTERONE, made locally by 5-alpha-reductase type 2**, binds the same receptor far more avidly and builds the external male: penis, scrotum and urethra in utero, then prostate, beard and temporal hair recession. **OESTRADIOL, made locally by aromatase**, closes the epiphyses, maintains bone mass and contributes a large share of the negative feedback on gonadotropins. Compressed: **testosterone builds the internal male, dihydrotestosterone builds the external male, and oestradiol finishes the skeleton**. Receptor and synthetic detail sits in [[hrp1-sex-steroid-synthesis-action]].',
    '**Two experiments of nature prove the division, and each is a favourite stem.** In **5-alpha-reductase type 2 deficiency** a 46,XY infant has **normal internal ducts** — those are testosterone-dependent and testosterone is present — but **undervirilised external genitalia**, because those are dihydrotestosterone-dependent and dihydrotestosterone is not. At puberty the surge of testosterone partially substitutes at the receptor: the phallus grows, muscle and voice virilise, **but the beard, the temporal recession and the prostate never develop**, and the testosterone-to-dihydrotestosterone ratio is high. In **aromatase deficiency** the mirror image appears in the skeleton: a man with a **normal or high testosterone who never stops growing**, with unfused epiphyses into his twenties, tall eunuchoid proportions and osteopenia — and giving him oestradiol fuses the plates. That is the proof that **oestrogen, not androgen, closes the epiphyses in BOTH sexes**, and it is the reason the pubertal growth spurt terminates at all.',
    '**Only free hormone acts, so total testosterone misleads in both directions and SHBG tells you which.** About **98 per cent of circulating testosterone is bound** — roughly 60 per cent tightly to sex hormone-binding globulin and 38 per cent loosely to albumin — leaving about 2 per cent free. **SHBG rises** with oestrogen, thyrotoxicosis, cirrhosis and ageing, and **falls** with obesity, insulin resistance, hypothyroidism and exogenous androgen. So the obese man with metabolic syndrome characteristically has a **low total testosterone with a normal free testosterone and a normal LH**, which is a binding-protein artefact and not hypogonadism, while the older man may have a total that looks preserved while the free fraction falls. The practical rule: draw it **fasting, in the morning, and repeat it**, and measure SHBG so free testosterone can be calculated before anyone is labelled hypogonadal. The clinical effects of each androgen are elaborated in [[hrp1-testosterone-dht-estrogen-actions]].',
    '**The axis works only in pulses, and that one property explains two opposite therapies.** GnRH reaches the pituitary in pulses about every **90 to 120 minutes**, and **continuous exposure desensitises and downregulates the gonadotroph** rather than driving it. Hence a GnRH agonist given continuously causes an initial testosterone flare and then **chemical castration**, which is how advanced prostate cancer is treated, while the same molecule delivered by a **pulsatile pump restores fertility** in hypogonadotropic hypogonadism. Feedback closes at two levels: testosterone slows GnRH pulse frequency at the hypothalamus, and **oestradiol aromatised from testosterone is a potent suppressor of LH at the pituitary**. That second limb is not a footnote — it is why blocking aromatase, or blocking the oestrogen receptor with a SERM, **raises LH and endogenous testosterone** and is used precisely when fertility must be preserved. The general grammar of such loops is in [[hen1-endocrine-feedback-loops]].',
    '**Testosterone has a diurnal rhythm and a three-wave life history, and ignoring either produces spurious diagnoses.** Levels **peak in the early morning**, swinging 20 to 30 per cent across the day in young men with the rhythm blunted in older ones, so **a level drawn in the afternoon is uninterpretable** and is the commonest reason a healthy man is wrongly labelled hypogonadal. Across a lifetime the axis runs three times: a **fetal** wave that masculinises the tract and the brain, a **mini-puberty of infancy** between about one and six months when gonadotropins and testosterone transiently reach near-pubertal levels — the only window in which the axis can be assessed without stimulation testing before puberty — then a decade of quiescence held down by central restraint, then **pubertal reactivation** as GnRH pulses return, first at night. Thereafter total testosterone falls by roughly **1 per cent per year** from midlife, and free testosterone somewhat faster because SHBG is rising at the same time. Spermatogenic consequences are in [[ghp-spermatogenesis-testicular-function]].',
    '**The pineal gland is a photoperiod transducer, and it deserves an honest rather than an inflated account.** Pinealocytes convert serotonin to melatonin, and the pathway that drives them is unexpectedly long: **retina → retinohypothalamic tract → suprachiasmatic nucleus → paraventricular nucleus → intermediolateral cell column → superior cervical ganglion → sympathetic noradrenergic fibres to the pineal**. Melatonin is therefore a **sympathetically driven signal of darkness**, secreted at night and suppressed by light, and the *duration* of secretion encodes night length. In **seasonal breeders this is decisive** — long-night melatonin stimulates the GnRH pulse generator in short-day breeders like the sheep and suppresses it in long-day breeders like the hamster, which is why the mechanism is directional rather than simply inhibitory. **In humans the reproductive effect is modest and poorly substantiated**; melatonin is a reliable circadian and sleep-timing signal, and claims that it governs the human gonadal axis outrun the evidence. What is unambiguously clinical is the **pineal region tumour**: a germinoma secreting hCG stimulates the LH receptor and causes **precocious puberty in a boy whose testes enlarge less than his virilisation predicts**, while local mass effect gives **Parinaud syndrome** — upgaze palsy, light-near dissociation and convergence-retraction nystagmus — with obstructive hydrocephalus.',
  ],

  mechanism: {
    title: 'One testosterone molecule, three fates: direct androgen action, 5-alpha-reduction to DHT, aromatisation to oestradiol — and the feedback that closes the axis',
    steps: [
      { id: 's1', label: 'Leydig testosterone enters the blood, where about 98 per cent binds SHBG and albumin; only the free fraction enters target cells', detail: 'Any condition that shifts SHBG shifts total testosterone without changing the amount of hormone actually acting.', emphasis: 'key' },
      { id: 's2', label: 'In muscle, marrow, brain and the Wolffian derivatives it binds the androgen receptor unchanged', emphasis: 'normal' },
      { id: 's3', label: 'In skin, prostate and external genitalia, 5-alpha-reductase type 2 converts it to dihydrotestosterone, which binds the same receptor far more tightly', detail: 'Local enzyme expression, not circulating hormone, decides which tissues see the amplified signal.', emphasis: 'key' },
      { id: 's4', label: 'In adipose tissue, bone, liver and brain, aromatase converts it to oestradiol, acting at oestrogen receptors', emphasis: 'key' },
      { id: 's5', label: 'That oestradiol closes the epiphyseal plates and maintains bone mineral density — in men exactly as in women', detail: 'Aromatase deficiency and oestrogen receptor-alpha mutation both give a tall man with open plates and osteopenia despite normal androgen.', emphasis: 'key' },
      { id: 's6', label: 'Testosterone slows GnRH pulse frequency while its oestradiol metabolite suppresses LH at the pituitary, closing the axis at two levels', emphasis: 'key' },
    ],
    branches: [
      {
        fromId: 's3',
        title: '5-alpha-reductase type 2 deficiency: the external male fails to build',
        steps: [
          { id: 'b1', label: 'Testosterone is normal, so epididymis, vas and seminal vesicle form normally', emphasis: 'normal' },
          { id: 'b2', label: 'Dihydrotestosterone is absent, so the external genitalia are undervirilised at birth in a 46,XY infant', emphasis: 'key' },
          { id: 'b3', label: 'At puberty high testosterone partially substitutes — phallic growth, muscle and voice — but no beard, temporal recession or prostate', emphasis: 'key' },
        ],
      },
      {
        fromId: 's5',
        title: 'Aromatase deficiency: the skeleton never receives the stop signal',
        steps: [
          { id: 'b4', label: 'Testosterone is normal or high but cannot be converted to oestradiol', emphasis: 'normal' },
          { id: 'b5', label: 'Epiphyses stay open into adult life: continued linear growth, tall eunuchoid proportions, low bone density', emphasis: 'key' },
          { id: 'b6', label: 'Loss of oestradiol feedback also raises LH and FSH, and giving oestradiol fuses the plates — the experiment that settles the question', emphasis: 'key' },
        ],
      },
    ],
  },

  examFindings: [
    { sign: 'A 46,XY infant with undervirilised external genitalia, palpable testes and a normally formed epididymis and vas, who virilises at puberty without developing a beard', mechanism: '5-alpha-reductase type 2 deficiency — testosterone-dependent internal structures form, dihydrotestosterone-dependent external and skin structures do not', significance: 'key' },
    { sign: 'A 24-year-old man still gaining height, with arm span exceeding height, unfused epiphyses on hand radiograph, osteopenia and a normal serum testosterone', mechanism: 'Aromatase deficiency: without conversion to oestradiol the growth plates never receive their closure signal, proving oestrogen closes epiphyses in men', significance: 'key' },
    { sign: 'Total testosterone 8.2 nmol/L with a normal calculated free testosterone, normal LH and a BMI of 38', mechanism: 'Obesity and insulin resistance suppress SHBG, lowering the total while the biologically active free fraction is preserved — a binding artefact, not hypogonadism', significance: 'key' },
    { sign: 'Tender bilateral subareolar breast tissue in a 13-year-old boy midway through puberty, resolving over 18 months', mechanism: 'Physiological pubertal gynaecomastia from a transiently high oestradiol-to-testosterone ratio as aromatisation outpaces the rising androgen', significance: 'supportive' },
    { sign: 'A 7-year-old boy with pubic hair and a deepening voice whose testes are only slightly enlarged, together with an upgaze palsy', mechanism: 'hCG-secreting pineal germinoma: hCG stimulates the LH receptor so Leydig cells virilise him, but without FSH the tubules do not grow, and the tectal mass gives Parinaud syndrome', significance: 'key' },
    { sign: 'A transient worsening of bone pain in the first two weeks after starting a GnRH agonist for metastatic prostate cancer', mechanism: 'Continuous GnRH first stimulates before it downregulates the gonadotroph, producing a testosterone flare — which is why an antiandrogen is given to cover it', significance: 'key' },
  ],

  investigations: [
    { clue: 'A fasting morning testosterone, repeated on a second occasion before any diagnosis is made', meaning: 'Levels peak in the early morning and vary substantially day to day, so an afternoon or single sample is the commonest source of a false label' },
    { clue: 'Testosterone measured together with SHBG so free testosterone can be calculated', meaning: 'Obesity, ageing, thyroid disease and cirrhosis all shift binding, moving the total without moving the active fraction' },
    { clue: 'A raised testosterone-to-dihydrotestosterone ratio in an undervirilised 46,XY infant', meaning: 'Substrate accumulating behind an absent enzyme — 5-alpha-reductase type 2 deficiency' },
    { clue: 'Unfused epiphyses on a hand radiograph in an adult man with a normal testosterone', meaning: 'The failure is of oestrogen action, not androgen action: aromatase deficiency or oestrogen receptor-alpha mutation' },
    { clue: 'LH and FSH measured alongside testosterone', meaning: 'High gonadotropins localise the lesion to the testis; low or inappropriately normal ones localise it to the pituitary or hypothalamus' },
    { clue: 'MRI of the pineal region with serum and CSF hCG and alpha-fetoprotein in a boy with precocious puberty and an upgaze palsy', meaning: 'Germinoma — the clinically important pineal lesion, found by imaging and tumour markers rather than by measuring melatonin' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The three-way division is not academic — it is the design rationale for a whole shelf of drugs. **Blocking 5-alpha-reductase** with finasteride or dutasteride shrinks the prostate and holds male-pattern hair while leaving testosterone, muscle and erythropoiesis largely untouched, because those depend on testosterone itself. **Blocking aromatase**, or blocking the oestrogen receptor with a SERM, removes the oestradiol limb of negative feedback and therefore **raises LH and endogenous testosterone** — useful precisely where exogenous androgen is contraindicated, as in a man who wants to conceive. **Supplying oestradiol** is the treatment for aromatase deficiency, because the missing signal is the one that closes plates and mineralises bone. And **continuous GnRH agonism** castrates by desensitisation, which is why it needs antiandrogen cover for the first fortnight while the flare passes, and why a GnRH antagonist avoids the flare altogether.' },
    { logic: 'Where it is examined', detail: 'Four stems dominate. **What closes the epiphyses** is asked in a boy or a man, and the answer is oestradiol via aromatase in both sexes — aromatase deficiency is the proof, and the instinctive answer, testosterone, is wrong. **The low total testosterone in an obese man** is asked to see whether you will start replacement; check SHBG, free testosterone and LH first. **5-alpha-reductase deficiency** is asked by describing normal internal ducts with undervirilised external genitalia, and the internal-versus-external split is the whole discriminator. **The pineal** is asked as a tumour, not a hormone: precocious puberty with testes too small for the degree of virilisation means hCG at the LH receptor, and an upgaze palsy places the lesion. Where oestradiol also matters in the female is set out in [[hrp1-testosterone-dht-estrogen-actions]].' },
  ],

  mnemonics: [
    {
      hook: 'Testosterone is internal, DHT is external, oestradiol is the end of growth',
      expansion: [
        'Testosterone: Wolffian ducts, muscle, marrow, voice, libido, spermatogenesis',
        'Dihydrotestosterone: penis, scrotum, urethra, prostate, beard, temporal recession',
        'Oestradiol: epiphyseal closure, bone mineral density, much of the LH feedback',
        'Aromatase deficiency is the natural experiment that proves the third line',
      ],
    },
    {
      hook: 'For the pineal the exam wants the tumour, not the hormone',
      expansion: [
        'Melatonin is a darkness signal driven sympathetically through the superior cervical ganglion',
        'Duration of secretion encodes night length — decisive in seasonal breeders, modest in humans',
        'Germinoma secreting hCG: precocious puberty with testes smaller than the virilisation predicts',
        'Mass effect on the tectum: Parinaud syndrome and obstructive hydrocephalus',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'Which hormone closes the epiphyseal growth plates in a male',
      wrongInstinct: 'Testosterone, since it drives the male pubertal growth spurt and its termination',
      rightAnswer: 'Oestradiol, aromatised from testosterone, acting at oestrogen receptors in the growth plate — in both sexes',
      why: 'A man with aromatase deficiency has a normal testosterone and open plates into adulthood, and fuses them only when given oestradiol.',
    },
    {
      questionCategory: 'A low total testosterone in an obese middle-aged man',
      wrongInstinct: 'Diagnose hypogonadism and start testosterone replacement',
      rightAnswer: 'Measure SHBG and calculate free testosterone, check LH, and repeat a fasting morning sample before labelling anything',
      why: 'Insulin resistance suppresses SHBG, so the total falls while the free fraction and LH stay normal — and replacement would then suppress an intact axis and his fertility with it.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 23-year-old man is 198 cm tall and still growing. Arm span exceeds height, hand radiographs show unfused epiphyses, and DXA shows a low bone density. Serum testosterone is at the upper end of normal and LH is mildly raised. The most likely defect is:',
      options: [
        { id: 'a', text: 'Androgen receptor insensitivity, so testosterone cannot act on the growth plate' },
        { id: 'b', text: 'Aromatase deficiency, so testosterone cannot be converted to the oestradiol that closes epiphyses and mineralises bone' },
        { id: 'c', text: '5-alpha-reductase type 2 deficiency, so dihydrotestosterone cannot be generated' },
        { id: 'd', text: 'Growth hormone excess from a somatotroph adenoma' },
      ],
      answerId: 'b',
      explanation: 'Epiphyseal fusion and adult bone mineral density are oestrogen effects in men as well as women, mediated by oestradiol aromatised locally from testosterone. Without aromatase the plates never receive their stop signal, so linear growth continues, proportions become eunuchoid and bone density falls despite a normal androgen level; loss of oestradiol feedback also lifts LH, as here. Androgen insensitivity would undervirilise him, which the stem does not describe. 5-alpha-reductase deficiency affects external genitalia, prostate and hair, not the growth plate. Acromegaly in an adult cannot lengthen bones because the plates have already fused, which is the point of the question.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A 46,XY newborn has severely undervirilised external genitalia with a blind-ending vaginal pouch, but a normal epididymis, vas deferens and seminal vesicles are present and no Mullerian structures are found. Testosterone is normal for age and the testosterone-to-dihydrotestosterone ratio is markedly raised. The diagnosis is:',
      options: [
        { id: 'a', text: 'Complete androgen insensitivity syndrome' },
        { id: 'b', text: 'Congenital adrenal hyperplasia due to 21-hydroxylase deficiency' },
        { id: 'c', text: '5-alpha-reductase type 2 deficiency' },
        { id: 'd', text: 'Gonadal dysgenesis with streak gonads' },
      ],
      answerId: 'c',
      explanation: 'The internal and external structures dissociate, and that dissociation is diagnostic. Wolffian derivatives are built by testosterone, which is present and normal, so epididymis, vas and seminal vesicles form; the external genitalia and urogenital sinus require dihydrotestosterone, which cannot be made, so they do not virilise. The raised substrate-to-product ratio names the missing enzyme. Complete androgen insensitivity would leave the Wolffian derivatives absent as well, since they too need receptor signalling. 21-hydroxylase deficiency virilises a 46,XX fetus rather than undervirilising a 46,XY one. Streak gonads would make neither testosterone nor anti-Mullerian hormone, so Mullerian structures would persist.',
      tests: 'disease',
    },
    {
      id: 'q3',
      stem: 'A 7-year-old boy has pubic hair, a deepened voice and a bone age two years advanced. His testes measure 4 mL, which is small for the degree of virilisation. He has an upgaze palsy and pupils that react better to accommodation than to light. The single best explanation is:',
      options: [
        { id: 'a', text: 'Central precocious puberty from premature reactivation of pulsatile GnRH secretion' },
        { id: 'b', text: 'An hCG-secreting pineal germinoma stimulating the LH receptor, with tectal compression producing Parinaud syndrome' },
        { id: 'c', text: 'A Leydig cell tumour of one testis secreting testosterone autonomously' },
        { id: 'd', text: 'Suppressed nocturnal melatonin secretion releasing the GnRH pulse generator from inhibition' },
      ],
      answerId: 'b',
      explanation: 'hCG shares the alpha subunit of LH and acts at the LH receptor, so it drives Leydig testosterone and virilisation without any FSH; since most testicular volume is tubule and tubular growth needs FSH, the testes stay disproportionately small. That mismatch is the discriminator against option a, where GnRH drives both gonadotropins and the testes enlarge in step with the virilisation. The eye signs place the lesion in the pineal region compressing the tectal plate. A unilateral Leydig tumour would enlarge one testis asymmetrically and explains nothing ocular. Option d is the overstated version of pineal physiology the chapter warns against: melatonin has no established control of the human gonadal axis, and the pineal matters here as a mass.',
      tests: 'exam',
    },
  ],
};

export default ghpTestosteroneActionsMaleAxis;
