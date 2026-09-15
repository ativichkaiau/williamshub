import type { Lecture } from '../../lib/types';

export const ghpSpermatogenesisTesticularFunction: Lecture = {
  id: 'ghp-spermatogenesis-testicular-function',
  title: 'Spermatogenesis & Testicular Function',
  system: 'repro',
  source: 'Ch 81 — Reproductive & Hormonal Functions of the Male',
  updated: '2026-09-15',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'Ch 81 Male Reproductive Physiology' },
    { kind: 'mechanism', label: 'LH → Leydig · FSH → Sertoli · inhibin B → selective FSH feedback' },
    { kind: 'exam', label: 'Isolated high FSH · blood-testis barrier · 74-day lag · scrotal temperature' },
  ],

  highYield: [
    '**Two cells, two gonadotropins, and the whole chapter falls out of that split.** **LH acts on the LEYDIG cell** in the interstitium to make testosterone; **FSH acts on the SERTOLI cell** inside the tubule to sustain spermatogenesis and to secrete **androgen-binding protein and inhibin B**. The consequence most stems are built on is a gradient: androgen-binding protein traps testosterone in the tubular lumen at **roughly 50 to 100 times the serum concentration**, and it is that *local* concentration, not the circulating one, that permits meiosis. So a man can have a perfectly normal serum testosterone and no sperm at all — and, worse, giving him testosterone makes it so, because exogenous androgen suppresses LH, the Leydig cell stops working, and intratesticular testosterone collapses towards serum levels. The axis itself is covered in [[hrp1-male-hpg-axis]].',
    '**Inhibin B feeds back selectively on FSH, which is why an isolated FSH elevation is a spermatogenic-failure signal.** Testosterone and its aromatised oestradiol restrain **GnRH pulse frequency and LH**; inhibin B, a Sertoli product, restrains **FSH alone**. Run the logic both ways. Damage the seminiferous epithelium — chemotherapy, radiation, mumps orchitis, a Y-microdeletion, Sertoli-only syndrome — and inhibin B falls, **FSH rises, while LH and testosterone stay entirely normal**. Damage the Leydig cell instead and testosterone falls, so **both** gonadotropins rise. That gives a three-line bedside map: high FSH alone localises to the tubule, high LH and FSH with low testosterone localises to the whole testis, and low or inappropriately normal gonadotropins with low testosterone localises above the testis, to the pituitary or hypothalamus.',
    '**The blood-testis barrier exists because meiotic germ cells are antigenically new, appearing decades after the immune system finished defining self.** **Sertoli tight junctions** divide the tubule into a basal compartment, where spermatogonia sit accessible to blood, and an adluminal compartment, where every haploid and meiotic cell is sequestered. Self-tolerance was established in fetal life; the antigens of the spermatocyte and spermatid first appear at puberty, so immunologically they are foreign. The barrier must also be **dynamic** — a spermatocyte has to cross it — so junctions disassemble above the migrating cell and reform below it, never opening the compartment. **Breach it and antibody follows**: anti-sperm antibodies appear in **roughly half to two-thirds of men after vasectomy**, and after testicular trauma, torsion or orchitis. The same barrier excludes many drugs, making the testis a pharmacological sanctuary site in leukaemia.',
    '**Spermatogenesis takes about 74 days, and adding epididymal transit makes every semen analysis a report on the testis of three months ago.** Four and a half cycles of the seminiferous epithelium, each about 16 days, carry a spermatogonium to a released spermatozoon; **a further 10 to 14 days of epididymal transit** is needed before that cell is motile and capable of fertilising anything. Two clinical rules follow and both are examined. First, **an insult is invisible for months** — the febrile illness or the chemotherapy explains a semen analysis taken a quarter of a year later, not one taken next week. Second, **no treatment can be judged early**: repeating a semen analysis three weeks after varicocele repair or gonadotropin therapy tests nothing, and the interval must be at least three months. Output is nonetheless continuous because successive waves are staggered along the tubule. Parameter interpretation sits in [[hrp1-semen-concentration-motility]].',
    '**The testis is the one organ deliberately kept below core temperature, and the anatomy exists to do it.** Spermatogenesis needs about **2 °C below core**, and three mechanisms deliver it: the scrotum as a thin, sparsely insulated radiator, the **cremaster and dartos** adjusting its distance from the body, and the **pampiniform plexus**, a countercurrent heat exchanger in which venous blood returning from the testis cools the incoming testicular artery before it arrives. Every classical scrotal problem is a variation on losing that. In **cryptorchidism** the testis sits at core temperature, and the damage is selective — germ cells are lost while Leydig cells are relatively spared, so the adult pattern is **raised FSH with a normal testosterone**, exactly the isolated-FSH signature. Orchidopexy between **6 and 18 months** preserves what can be preserved; it does not abolish the malignancy risk, but it makes the testis examinable. A **varicocele** is the same physiology by another route, venous stasis warming the scrotum.',
    '**Each Sertoli cell supports a fixed number of germ cells, so adult sperm output is capped before puberty ever begins.** Sertoli cells proliferate in fetal life and infancy under FSH, then stop, and the number reached is the number the man keeps. Because the ratio of germ cells to Sertoli cells is essentially fixed, **the final Sertoli count sets the ceiling on spermatogenic capacity**, and testicular volume — of which **80 to 90 per cent is seminiferous tubule** — is a direct proxy for it. That is why an orchidometer reading below about 12 mL predicts impaired spermatogenesis before any semen analysis is done, why small firm testes with high gonadotropins point to Klinefelter syndrome, and why insults during infancy have consequences that no adult treatment can reverse. The fetal Sertoli cell also secretes **anti-Mullerian hormone**, regressing the Mullerian ducts, which is the other half of its job: the tubule builds the male tract before it ever builds a sperm. Histological detail is in [[hrp1-seminiferous-epithelium-spermatogenesis]], and the downstream androgen actions in [[ghp-testosterone-actions-male-axis]].',
  ],

  mechanism: {
    title: 'Pulsatile GnRH → LH to Leydig and FSH to Sertoli → intratubular testosterone behind the blood-testis barrier → inhibin B closes the FSH loop selectively',
    steps: [
      { id: 's1', label: 'GnRH is released in pulses every 90 to 120 minutes; pulsatility is mandatory, since continuous exposure desensitises the gonadotroph', detail: 'This single property is why GnRH agonists produce chemical castration after an initial flare, and why hypogonadotropic hypogonadism is treated with a pulsatile pump rather than an infusion.', emphasis: 'key' },
      { id: 's2', label: 'LH acts on interstitial Leydig cells, which convert cholesterol to testosterone', detail: 'The Leydig cell lies outside the tubule and outside the barrier, so its product must diffuse inwards to reach the germ cells.', emphasis: 'normal' },
      { id: 's3', label: 'FSH acts on Sertoli cells, inducing androgen-binding protein, inhibin B and the nursing functions of the tubule', emphasis: 'normal' },
      { id: 's4', label: 'Androgen-binding protein holds testosterone in the lumen at 50 to 100 times serum levels — the concentration meiosis actually requires', detail: 'Systemic testosterone is a poor proxy for intratubular testosterone, and the two can move in opposite directions.', emphasis: 'key' },
      { id: 's5', label: 'Sertoli tight junctions seal the adluminal compartment, hiding meiotic and haploid cells from an immune system that defined self before they existed', emphasis: 'key' },
      { id: 's6', label: 'Inhibin B restrains FSH alone while testosterone restrains GnRH and LH — two separable loops, so FSH can rise by itself', detail: 'This separation is the entire diagnostic value of measuring both gonadotropins rather than one.', emphasis: 'key' },
    ],
    branches: [
      {
        fromId: 's4',
        title: 'Exogenous androgen: why testosterone is a contraceptive',
        steps: [
          { id: 'b1', label: 'Injected or gelled testosterone raises serum levels and suppresses GnRH and LH', emphasis: 'key' },
          { id: 'b2', label: 'Leydig stimulation ceases, so intratesticular testosterone falls towards the serum concentration — a hundredfold drop', emphasis: 'danger' },
          { id: 'b3', label: 'Spermatogenesis arrests: oligozoospermia or azoospermia in a man whose serum testosterone reads normal or high', emphasis: 'danger' },
        ],
      },
    ],
  },

  examFindings: [
    { sign: 'Azoospermia with FSH 22 IU/L but a normal LH and a normal morning testosterone', mechanism: 'Loss of the seminiferous epithelium removes inhibin B, the selective FSH brake, while an intact Leydig compartment keeps testosterone and LH normal', significance: 'key' },
    { sign: 'Small firm testes of 4 mL with low testosterone and both LH and FSH elevated', mechanism: 'Primary testicular failure damaging both compartments — the pattern of Klinefelter syndrome, which the karyotype then confirms', significance: 'key' },
    { sign: 'Azoospermia with soft, reduced-volume testes in a bodybuilder whose serum testosterone is high and whose LH and FSH are undetectable', mechanism: 'Exogenous androgen suppressing the axis: serum testosterone is high while intratesticular testosterone has collapsed', significance: 'key' },
    { sign: 'Sperm agglutination and poor post-coital mucus penetration after vasectomy reversal', mechanism: 'Anti-sperm antibodies formed once the blood-testis barrier was breached and germ-cell antigens met the immune system for the first time', significance: 'key' },
    { sign: 'A 3-year-old with an empty hemiscrotum and a testis palpable in the inguinal canal', mechanism: 'Cryptorchidism, with the germ cells held at core temperature; damage is selective for the tubule, so the adult picture is raised FSH with normal testosterone', significance: 'key' },
    { sign: 'A soft left scrotal mass described as a bag of worms that decompresses when the patient lies down', mechanism: 'Varicocele — venous stasis raising scrotal temperature, the commonest correctable cause of impaired spermatogenesis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Raised FSH with a normal LH and a normal morning testosterone', meaning: 'Isolated seminiferous-epithelial failure — inhibin B has gone and the Leydig cell has not; the single most localising result in male infertility' },
    { clue: 'Serum inhibin B', meaning: 'A direct Sertoli and germ-cell mass marker that tracks spermatogenic output more closely than FSH, which only reports it indirectly' },
    { clue: 'A semen analysis repeated at three months rather than three weeks', meaning: 'Seventy-four days of spermatogenesis plus epididymal transit; anything sooner is still reporting the pre-treatment testis' },
    { clue: 'Testicular volume below about 12 mL on orchidometry', meaning: 'Since 80 to 90 per cent of testicular volume is seminiferous tubule, small volume is reduced spermatogenic mass measured directly' },
    { clue: 'Karyotype in a man with azoospermia, small firm testes and both gonadotropins raised', meaning: 'Klinefelter syndrome, 47,XXY — the commonest genetic cause of primary testicular failure' },
    { clue: 'Y-chromosome microdeletion testing in non-obstructive azoospermia with a raised FSH', meaning: 'AZF deletions cause untreatable spermatogenic arrest and are heritable through assisted conception, so they change counselling rather than treatment' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Every therapeutic decision in male infertility depends on separating the **two compartments**, and the gonadotropins do that separation for you. **High FSH with high LH is primary testicular failure** — the tissue is gone, no hormone will regrow it, and the honest options are surgical sperm retrieval or donor gametes. **Low or inappropriately normal gonadotropins with low testosterone is secondary hypogonadism**, and here the testis is intact and waiting: **hCG, which is an LH-receptor agonist, restores intratesticular testosterone**, and recombinant FSH is added when spermatogenesis needs more support — a treatment that takes six months or more, precisely because of the 74-day cycle. The trap runs in the other direction. **Exogenous testosterone is the one treatment guaranteed to make a man infertile**, because it raises the serum concentration while abolishing the intratesticular one, so a man who wants children is offered hCG or a SERM, never a testosterone gel. And a varicocele is worth repairing only if the semen parameters are abnormal and the result judged no sooner than three months.' },
    { logic: 'Where it is examined', detail: 'Three stems recur. **The isolated FSH rise** is presented as a normal testosterone in an azoospermic man, and the wrong move is to call the axis intact; the raised FSH alone localises the lesion to the tubule. **The bodybuilder** is given a high serum testosterone with azoospermia and suppressed gonadotropins, and the answer requires you to hold two ideas at once — serum high, intratesticular collapsed. **The timing question** asks when to repeat a test or judge a treatment, and the answer is always about three months, from 74 days plus epididymal transit. A fourth, quieter stem asks why vasectomy leads to anti-sperm antibodies, and the answer is the blood-testis barrier and the late appearance of germ-cell antigens relative to self-tolerance. Interpretation of the numbers themselves is in [[hrp1-semen-concentration-motility]].' },
  ],

  mnemonics: [
    {
      hook: 'LH hits Leydig; FSH feeds Sertoli',
      expansion: [
        'LH → Leydig cell, in the interstitium → testosterone',
        'FSH → Sertoli cell, inside the tubule → androgen-binding protein, inhibin B, anti-Mullerian hormone',
        'Both L words go together, both S sounds go together — the pairing is never mixed in a stem',
        'Leydig is outside the barrier, Sertoli builds it',
      ],
    },
    {
      hook: 'FSH alone Follows failure of the tubule',
      expansion: [
        'Inhibin B is the selective brake on FSH, and only the Sertoli cell makes it',
        'Tubule fails → inhibin B falls → FSH rises alone, with normal LH and normal testosterone',
        'Leydig fails → testosterone falls → LH and FSH both rise',
        'Above the testis → testosterone low with gonadotropins low or inappropriately normal',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'What a normal testosterone means in an azoospermic man',
      wrongInstinct: 'Testosterone is normal, so the hormonal axis is intact and the cause must be obstructive',
      rightAnswer: 'Measure FSH — an isolated rise localises the lesion to the seminiferous epithelium while leaving the Leydig cell untouched',
      why: 'Testosterone reports the Leydig compartment only. Inhibin B and therefore FSH report the tubule, and the two compartments fail independently.',
    },
    {
      questionCategory: 'Treating a hypogonadal man who wants to conceive',
      wrongInstinct: 'His testosterone is low and he is infertile, so replace the testosterone',
      rightAnswer: 'Give hCG, with FSH if needed, or a SERM — exogenous testosterone suppresses LH and abolishes the intratesticular androgen that spermatogenesis requires',
      why: 'Serum testosterone and intratesticular testosterone move in opposite directions under exogenous androgen, which is why it is being trialled as a male contraceptive.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 33-year-old man is investigated for infertility. Semen analysis shows azoospermia. LH is 4.8 IU/L, FSH is 24 IU/L, and morning testosterone is 19 nmol/L. Testicular volumes are 10 mL bilaterally. The result pattern localises the lesion to:',
      options: [
        { id: 'a', text: 'The Leydig cells, since androgen production must be failing for FSH to rise' },
        { id: 'b', text: 'The seminiferous epithelium, since loss of Sertoli-derived inhibin B removes the selective brake on FSH while leaving testosterone and LH intact' },
        { id: 'c', text: 'The anterior pituitary, since one gonadotropin is disproportionately secreted' },
        { id: 'd', text: 'The vas deferens, since obstruction raises FSH by back-pressure on the tubule' },
      ],
      answerId: 'b',
      explanation: 'Inhibin B is a Sertoli product and is the selective negative feedback signal for FSH, whereas testosterone and its aromatised oestradiol restrain GnRH and LH. Losing the seminiferous epithelium therefore raises FSH alone, exactly as here, with a normal LH and a normal testosterone. Option a is excluded by the normal testosterone and normal LH, which is what an intact Leydig compartment looks like. A pituitary lesion causes low, not high, gonadotropins. Obstructive azoospermia leaves FSH and testicular volume normal, and is the differential this pattern rules out.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A 27-year-old amateur bodybuilder has been azoospermic for a year. Serum testosterone is 41 nmol/L, LH and FSH are both undetectable, and the testes are soft with reduced volume. The mechanism of his azoospermia is:',
      options: [
        { id: 'a', text: 'Direct toxicity of androgen to the germ cell, which is killed by supraphysiological testosterone' },
        { id: 'b', text: 'Suppression of LH removes Leydig stimulation, so intratesticular testosterone falls towards serum levels and can no longer support meiosis' },
        { id: 'c', text: 'Androgen-binding protein is saturated by the excess hormone, so testosterone cannot reach the germ cells' },
        { id: 'd', text: 'High testosterone raises scrotal temperature, damaging the seminiferous epithelium' },
      ],
      answerId: 'b',
      explanation: 'Meiosis depends on intratubular testosterone at 50 to 100 times the serum concentration, which only the adjacent LH-driven Leydig cell can generate. Exogenous androgen suppresses GnRH and LH, the Leydig cell falls silent, and the intratesticular concentration collapses even as the serum concentration rises — the paradox the stem is built on and the basis of testosterone as a male contraceptive. There is no direct germ-cell toxicity, androgen-binding protein saturation is not the limiting step, and testosterone does not alter scrotal temperature.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A man has a left varicocele repaired for abnormal semen parameters. He asks when a repeat semen analysis will show whether the operation worked. The best answer, and its basis, is:',
      options: [
        { id: 'a', text: 'Two weeks, because epididymal stores turn over rapidly once the venous stasis is relieved' },
        { id: 'b', text: 'Six weeks, because one cycle of the seminiferous epithelium has then been completed' },
        { id: 'c', text: 'At least three months, because spermatogenesis takes about 74 days and epididymal transit adds a further 10 to 14 days' },
        { id: 'd', text: 'Twelve months, because Sertoli cells must proliferate before spermatogenic capacity can increase' },
      ],
      answerId: 'c',
      explanation: 'Roughly 74 days of spermatogenesis, made up of about four and a half 16-day cycles of the seminiferous epithelium, plus 10 to 14 days of epididymal transit, means any sample before about three months still reports the pre-operative testis. The same arithmetic explains why a febrile illness or a course of chemotherapy shows up in the semen months later. Option b counts one cycle rather than the whole process. Option d misstates Sertoli biology: their number is fixed before puberty and does not increase in adult life, so no treatment raises the ceiling.',
      tests: 'lecture',
    },
  ],
};

export default ghpSpermatogenesisTesticularFunction;
