import type { Lecture } from '../../lib/types';

export const ghpOestrogenProgesteroneActions: Lecture = {
  "id": "ghp-oestrogen-progesterone-actions",
  "title": "Oestrogen, Progesterone & the Menopause Transition",
  "system": "repro",
  "source": "Ch 82 — Female Physiology Before Pregnancy & Female Hormones",
  "updated": "2026-09-15",
  "tags": [
    {
      "kind": "system",
      "label": "Reproductive"
    },
    {
      "kind": "lecture",
      "label": "Ch 82 Female Physiology Before Pregnancy"
    },
    {
      "kind": "mechanism",
      "label": "Oestradiol beyond the uterus · progesterone as the endogenous brake · inhibin B falls, FSH rises first"
    },
    {
      "kind": "exam",
      "label": "FSH can rise while oestradiol remains normal · oestrone from adipose aromatase · unopposed oestrogen"
    }
  ],
  "highYield": [
    "**Oestradiol acts on almost every system that is not reproductive, which is why the menopause is a systemic event and not merely the end of fertility.** In **bone** it restrains RANKL and shortens osteoclast lifespan, so withdrawal accelerates remodelling with resorption outrunning formation — trabecular bone falls **2 to 3 per cent a year in the first years** before settling to about 1 per cent. In the **liver** it raises SHBG, thyroxine-binding globulin, cortisol-binding globulin, angiotensinogen and several clotting factors, which is why oral oestrogen carries a venous thrombosis risk that transdermal oestrogen, bypassing the portal circulation, largely avoids. In **lipid metabolism** it upregulates the LDL receptor, lowering LDL while raising HDL and triglycerides. In **vessels** it supports nitric-oxide-mediated vasodilation. And in the **hypothalamus** it sets the width of the thermoneutral zone. Reproductive-tract actions are covered separately in [[hrp1-estrogen-progesterone-actions]].",
    "**The hot flush is a thermoregulatory fault, not a hormonal sensation, and the mechanism now has a drug attached to it.** Oestrogen withdrawal **narrows the hypothalamic thermoneutral zone**, so a trivial rise in core temperature that would previously have been ignored now crosses the sweating threshold and triggers a **full, inappropriate heat-loss response**: cutaneous vasodilation, visible flushing, sweating over two to four minutes, and then a chill as the response overshoots. The neural substrate is the **KNDy neuron population** of the infundibular nucleus, which co-expresses kisspeptin, neurokinin B and dynorphin, is restrained by oestradiol, and **hypertrophies when that restraint is removed** — sitting immediately adjacent to the thermoregulatory centre. That anatomical accident predicted, correctly, that **blocking the neurokinin-3 receptor would abolish flushes without any hormone at all**, which is how fezolinetant works. It is a rare case of a physiological mechanism yielding a drug class directly.",
    "**Progesterone is the endogenous brake on oestrogen, and every consequence of losing it follows from that one sentence.** It converts proliferative endometrium to secretory, **downregulates the oestrogen receptor**, and induces **17-beta-hydroxysteroid dehydrogenase type 2**, which oxidises oestradiol to the far weaker oestrone — so progesterone both blocks the signal and destroys the ligand. Elsewhere it thickens cervical mucus, quietens the myometrium, drives alveolar breast development, relaxes smooth muscle generally (biliary stasis, constipation, ureteric dilatation), stimulates ventilation enough to produce a mild chronic respiratory alkalosis, and raises the thermostat. The clinical rule is absolute and is examined relentlessly: **any woman with a uterus who is given oestrogen must also be given a progestogen**, because unopposed oestrogen produces proliferation with no scheduled withdrawal and a genuine progression to endometrial hyperplasia and carcinoma. **Vaginal oestrogen is the exception**, being minimally absorbed.",
    "**The menopause is PRIMARY ovarian failure, so the gonadotropins rise — and that is why it is FSH, not oestradiol, that is measured.** The oocyte pool is fixed before birth: about **6 to 7 million at mid-gestation, 1 to 2 million at birth, 300,000 to 400,000 at puberty and around a thousand at the menopause**, of which only some 400 were ever ovulated and the remainder were lost to atresia. Because the failing organ is the ovary and the pituitary is intact, this is **hypergonadotropic hypogonadism**, and the sensible measurement is the half of the loop that still works. Mean age is about 51, and the diagnosis is made **retrospectively after 12 months of amenorrhoea**, not by any blood test — in a woman over 45 with typical symptoms an FSH adds nothing. Below 40 the same picture is **premature ovarian insufficiency**, which does need confirming on two samples at least four weeks apart and then investigating with karyotype and FMR1 testing. Axis definitions are set out in [[hrp1-menopause-axis-definition]].",
    "**The ORDER of hormonal change is the discriminator, and it repeats the male logic exactly: inhibin B falls first, so FSH rises first.** Granulosa cell mass declines before anything else is measurable, taking **inhibin B — the selective brake on FSH — with it**. So the earliest laboratory finding is a **raised early-follicular FSH with a normal oestradiol and still-regular cycles**, and expecting a low oestradiol at this stage is the standard error: oestradiol is often preserved and sometimes transiently HIGH, because the accelerated follicular recruitment driven by a raised FSH overshoots. That same accelerated recruitment **shortens the follicular phase**, and since luteal duration is usually less variable than follicular duration the observable consequence is that **cycles shorten before they become irregular** — a 29-day cycle becoming a 24-day one while still perfectly regular. The full sequence is therefore: FSH up, then shorter cycles, then irregular cycles, then skipped ovulations, then 12 months of amenorrhoea. **AMH**, made by small growing follicles, falls earlier still and is cycle-independent, which makes it the best reserve marker — though it predicts the timing of the menopause, not current fertility. The cycle arithmetic behind this is in [[ghp-ovarian-cycle-hormonal-control]].",
    "**After the menopause the dominant oestrogen changes from oestradiol to OESTRONE, and the source changes from ovary to fat — which is why obesity protects against one set of consequences and causes another.** The post-menopausal ovarian stroma and the adrenal continue to secrete **androstenedione and DHEA**, and **peripheral aromatase, principally in adipose tissue**, converts androstenedione to oestrone. The result is genuinely double-edged. The obese post-menopausal woman has **higher oestrone, fewer vasomotor symptoms and higher bone density**, but she also has **more endometrial carcinoma and more hormone-receptor-positive breast cancer**, because with no corpus luteum that oestrone is **permanently unopposed**. Two therapeutic facts fall straight out. **Aromatase inhibitors are the anti-oestrogen of choice after the menopause**, since peripheral aromatase is now the whole supply — while before it they would simply provoke a compensatory FSH rise and be defeated by the ovary. And symptom management, including when oestrogen is and is not appropriate, is set out in [[hrp1-menopause-therapy]]."
  ],
  "mechanism": {
    "title": "Fixed follicle pool depletes → granulosa mass falls → inhibin B falls → FSH rises first → follicular phase shortens → oestradiol falls late → systemic withdrawal",
    "steps": [
      {
        "id": "s1",
        "label": "The primordial follicle pool is fixed before birth and falls continuously by atresia; no new oocytes are ever made",
        "detail": "About 400 of the 300,000 present at puberty will ovulate; everything else is lost, which is why depletion is inevitable rather than pathological.",
        "emphasis": "key"
      },
      {
        "id": "s2",
        "label": "Granulosa cell mass falls, so AMH and then inhibin B decline before any other measurable change",
        "emphasis": "key"
      },
      {
        "id": "s3",
        "label": "Inhibin B is the selective brake on FSH, so FSH rises FIRST — while oestradiol and cycle length are still normal",
        "detail": "A raised early-follicular FSH with a normal oestradiol and regular cycles is the earliest laboratory signature of the transition.",
        "emphasis": "key"
      },
      {
        "id": "s4",
        "label": "The raised FSH accelerates recruitment of the remaining follicles, shortening the follicular phase; the luteal phase is fixed, so cycles shorten while staying regular",
        "emphasis": "key"
      },
      {
        "id": "s5",
        "label": "The pool exhausts: ovulation fails intermittently, oestradiol becomes erratic and then falls, cycles become irregular and finally stop",
        "emphasis": "normal"
      },
      {
        "id": "s6",
        "label": "Oestrogen withdrawal is felt system-wide: a narrowed thermoneutral zone, accelerated bone resorption, an adverse lipid shift and genitourinary atrophy",
        "emphasis": "key"
      }
    ],
    "branches": [
      {
        "fromId": "s6",
        "title": "Where the remaining oestrogen comes from",
        "steps": [
          {
            "id": "b1",
            "label": "Adrenal and residual ovarian stroma continue to secrete androstenedione and DHEA",
            "emphasis": "normal"
          },
          {
            "id": "b2",
            "label": "Peripheral aromatase, mostly in adipose tissue, converts it to oestrone — now the dominant circulating oestrogen",
            "emphasis": "key"
          },
          {
            "id": "b3",
            "label": "With no corpus luteum that oestrone is permanently unopposed, so the obese woman has fewer flushes but more endometrial carcinoma",
            "emphasis": "danger"
          }
        ]
      }
    ]
  },
  "examFindings": [
    {
      "sign": "A 46-year-old with regular cycles, a day-3 FSH of 19 IU/L and an entirely normal oestradiol",
      "mechanism": "Loss of granulosa-derived inhibin B releases FSH before oestradiol or cycle length change at all — the earliest measurable step of the transition",
      "significance": "key"
    },
    {
      "sign": "Cycles that have shortened from 29 days to 24 days over two years but remain regular and ovulatory",
      "mechanism": "A raised FSH accelerates follicular recruitment and shortens the follicular phase, while luteal duration is often less variable but is not fixed at 14 days",
      "significance": "key"
    },
    {
      "sign": "Sudden warmth spreading over the face and chest with visible flushing and sweating for three minutes, followed by shivering",
      "mechanism": "A narrowed thermoneutral zone means a trivial rise in core temperature triggers a full heat-loss response, which then overshoots",
      "significance": "key"
    },
    {
      "sign": "Vaginal dryness, dyspareunia, urinary urgency and recurrent urinary infection that steadily worsen over several years",
      "mechanism": "Genitourinary syndrome of the menopause — unlike vasomotor symptoms, it is progressive and does not remit with time, so it needs ongoing local treatment",
      "significance": "key"
    },
    {
      "sign": "Twelve consecutive months of amenorrhoea in a 51-year-old with typical vasomotor symptoms",
      "mechanism": "This is the diagnostic criterion itself; the diagnosis is clinical and retrospective, and an FSH adds nothing over the age of 45",
      "significance": "key"
    },
    {
      "sign": "DXA showing disproportionate loss at the lumbar spine compared with the femoral neck in the first years after the last period",
      "mechanism": "Trabecular bone has a far greater surface area and remodels faster, so it registers the withdrawal of oestrogen first",
      "significance": "supportive"
    }
  ],
  "investigations": [
    {
      "clue": "Early-follicular FSH raised with a normal oestradiol",
      "meaning": "The earliest laboratory marker, produced by loss of inhibin B; expecting a low oestradiol at this stage is the standard misreading"
    },
    {
      "clue": "Anti-Mullerian hormone",
      "meaning": "Made by small growing follicles, cycle-independent and the earliest marker to fall — it predicts the timing of the menopause rather than current fertility"
    },
    {
      "clue": "Why gonadotropins rather than oestradiol are measured",
      "meaning": "The failing organ is the ovary, so the informative half of the loop is the intact pituitary responding to lost feedback"
    },
    {
      "clue": "Twelve months of amenorrhoea in a woman over 45 with typical symptoms",
      "meaning": "The diagnosis is clinical and retrospective; no hormone test is required or helpful"
    },
    {
      "clue": "A raised FSH with a low oestradiol in a woman under 40, repeated at least four weeks later",
      "meaning": "Premature ovarian insufficiency — confirm on two samples, then investigate with karyotype and FMR1 premutation testing"
    },
    {
      "clue": "A raised FSH taken from a woman currently on a combined oral contraceptive",
      "meaning": "Uninterpretable: exogenous steroid suppresses the gonadotropins the test is trying to read, so it must be taken off treatment"
    }
  ],
  "treatment": [
    {
      "logic": "Why it matters",
      "detail": "The transition is an **oestrogen-withdrawal syndrome**, so the treatment logic reads straight off the physiology. Symptoms caused by withdrawal — vasomotor instability, genitourinary atrophy, accelerated bone loss — respond to replacing the hormone, and symptoms caused by ageing do not. **Route follows the hepatic first-pass argument**: transdermal oestrogen avoids the portal induction of clotting factors and carries a lower venous thrombosis risk than oral. **A progestogen is mandatory for any woman with a uterus**, because unopposed oestrogen has no scheduled withdrawal and progresses towards hyperplasia; local vaginal oestrogen is exempt because absorption is negligible. **Timing matters**: begun within about ten years of the last period or under the age of 60 the balance of benefit and harm is favourable, whereas begun into established atherosclerosis it is not. Where oestrogen cannot be used, the mechanism still points somewhere — an **NK3-receptor antagonist targets the KNDy neurons directly**, and SSRIs, SNRIs and gabapentin are the older non-hormonal options. The full prescribing logic is in [[hrp1-menopause-therapy]]."
    },
    {
      "logic": "Where it is examined",
      "detail": "Three stems recur, and all three punish the same instinct. **The earliest marker** is asked by giving a woman with regular cycles and normal oestradiol, and the answer is the raised FSH — because inhibin B, not oestradiol, is the brake that fails first. **Unopposed oestrogen** is asked by offering oestrogen alone to a woman with an intact uterus, and the answer is always to add a progestogen. **Post-menopausal oestrogen source** is asked as a puzzle about the obese woman with few flushes and an endometrial carcinoma, and the answer is peripheral aromatisation of adrenal androstenedione to oestrone with no progesterone to oppose it. A fourth, cleaner stem simply asks what makes the diagnosis, and the answer is 12 months of amenorrhoea rather than any blood test. The long-term consequences themselves are in [[hrp1-menopause-symptoms-health-effects]]."
    }
  ],
  "mnemonics": [
    {
      "hook": "FSH First, oestradiol last",
      "expansion": [
        "Granulosa mass falls → AMH and inhibin B fall",
        "Inhibin B is the selective FSH brake, so FSH rises while everything else still looks normal",
        "High FSH shortens the follicular phase → cycles shorten while still regular",
        "Only then does oestradiol fall, cycles become irregular, and periods stop"
      ]
    },
    {
      "hook": "Fat makes oestrONE after the menopause",
      "expansion": [
        "Adrenal and ovarian stroma supply androstenedione",
        "Adipose aromatase converts it to oestrone, now the dominant oestrogen",
        "More fat means fewer flushes and stronger bones",
        "But it is unopposed, so it also means more endometrial and receptor-positive breast cancer"
      ]
    }
  ],
  "traps": [
    {
      "questionCategory": "Which hormone changes first in the menopausal transition",
      "wrongInstinct": "Oestradiol falls first, and the rise in FSH is the pituitary responding to that fall",
      "rightAnswer": "FSH rises first, driven by loss of granulosa-derived inhibin B, while oestradiol is still normal and cycles are still regular",
      "why": "Inhibin B is the selective brake on FSH in women exactly as in men, so a raised FSH with a normal oestradiol is the earliest signature rather than a contradiction."
    },
    {
      "questionCategory": "Prescribing oestrogen to a woman with an intact uterus",
      "wrongInstinct": "She only has hot flushes, so oestrogen alone will treat the symptom she actually has",
      "rightAnswer": "Add a progestogen — unopposed oestrogen produces endometrial proliferation with no scheduled withdrawal and progresses to hyperplasia and carcinoma",
      "why": "Progesterone is the endogenous brake, downregulating the oestrogen receptor and converting oestradiol to the weaker oestrone; only vaginal oestrogen, which is barely absorbed, is exempt."
    }
  ],
  "quiz": [
    {
      "id": "q1",
      "stem": "A 47-year-old with regular 25-day cycles, shortened from 30 days over three years, has a day-3 FSH of 17 IU/L and an oestradiol of 220 pmol/L, which is normal. She is told her hormones are normal because her oestradiol is not low. The correct interpretation is:",
      "options": [
        {
          "id": "a",
          "text": "Her hormones are indeed normal, and the shortened cycles are unrelated to ovarian ageing"
        },
        {
          "id": "b",
          "text": "The raised FSH with a normal oestradiol is compatible with declining follicular reserve: inhibin B has fallen, and the high FSH is shortening her follicular phase"
        },
        {
          "id": "c",
          "text": "The raised FSH indicates a gonadotroph adenoma, since oestradiol feedback is intact"
        },
        {
          "id": "d",
          "text": "She has premature ovarian insufficiency and needs karyotyping"
        }
      ],
      "answerId": "b",
      "explanation": "Inhibin B, not oestradiol, is the selective brake on FSH, and granulosa mass falls before steroid output does. FSH therefore rises while oestradiol is still normal and cycles are still regular — and the raised FSH then accelerates follicular recruitment, shortening the follicular phase, which is visible as shorter but still regular cycles because the follicular phase commonly contributes more to cycle-length variation, although luteal duration also varies. Expecting a low oestradiol is the classic error the stem is built around. A gonadotroph adenoma would not produce this age-typical picture, and premature ovarian insufficiency by definition requires an age under 40.",
      "tests": "investigation"
    },
    {
      "id": "q2",
      "stem": "A 63-year-old with a BMI of 39 who went through the menopause at 50 and has never taken hormone therapy presents with postmenopausal bleeding. Biopsy shows endometrial hyperplasia with atypia. The mechanism linking her body habitus to the endometrial finding is:",
      "options": [
        {
          "id": "a",
          "text": "Adipose tissue secretes oestradiol directly, and the resulting high levels both suppress flushes and stimulate the endometrium"
        },
        {
          "id": "b",
          "text": "Peripheral aromatisation increases oestrone exposure without cyclic corpus-luteum progesterone to oppose endometrial proliferation"
        },
        {
          "id": "c",
          "text": "Obesity raises SHBG, increasing the free oestradiol fraction available to the endometrium"
        },
        {
          "id": "d",
          "text": "Residual ovarian follicles continue to secrete oestradiol cyclically after the menopause"
        }
      ],
      "answerId": "b",
      "explanation": "After menopause ovarian follicular oestradiol production falls markedly, but the adrenal and ovarian stroma continue to make androstenedione, and peripheral aromatase — predominantly in fat — converts it to oestrone, which becomes the dominant oestrogen. More adipose tissue means more oestrone, which can influence oestrogen exposure, although vasomotor symptoms vary and cannot be predicted from BMI alone. The same oestrone is permanently unopposed, because ovulation and therefore progesterone have ceased, so the endometrium proliferates without any scheduled withdrawal. Adipocytes aromatise rather than synthesising oestradiol de novo. Obesity lowers rather than raises SHBG, and no follicles remain to secrete cyclically.",
      "tests": "mechanism"
    },
    {
      "id": "q3",
      "stem": "A 54-year-old with an intact uterus and severe hot flushes is started on transdermal oestradiol alone. Two years later she presents with irregular vaginal bleeding. The error made, and the reason transdermal delivery was nonetheless a reasonable choice, are:",
      "options": [
        {
          "id": "a",
          "text": "No error was made; irregular bleeding is an expected effect of oestrogen therapy and needs no action"
        },
        {
          "id": "b",
          "text": "A progestogen should have been added to oppose endometrial proliferation; transdermal delivery was reasonable because it avoids hepatic first pass and the induction of clotting factors"
        },
        {
          "id": "c",
          "text": "The oestradiol dose was too high; transdermal delivery was chosen because it achieves higher systemic levels than oral"
        },
        {
          "id": "d",
          "text": "Vaginal oestrogen should have been used instead, since it treats vasomotor symptoms equally well without systemic absorption"
        }
      ],
      "answerId": "b",
      "explanation": "Any woman with a uterus receiving systemic oestrogen requires a progestogen, because unopposed oestrogen produces continuous proliferation with no programmed withdrawal, presenting as irregular bleeding and carrying a real risk of hyperplasia and carcinoma — so this bleeding must be investigated, not ignored. The route was a separate and sound decision: oral oestrogen passes through the portal circulation and induces hepatic clotting factors, whereas transdermal delivery bypasses that and carries a lower venous thrombosis risk. Option d confuses the two indications: low-dose local vaginal oestrogen has limited systemic absorption, which is precisely why it does not treat flushes and why it needs no progestogen.",
      "tests": "treatment"
    }
  ]
};

export default ghpOestrogenProgesteroneActions;
