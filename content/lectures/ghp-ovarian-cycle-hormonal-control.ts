import type { Lecture } from '../../lib/types';

export const ghpOvarianCycleHormonalControl: Lecture = {
  "id": "ghp-ovarian-cycle-hormonal-control",
  "title": "The Ovarian Cycle & Its Hormonal Control",
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
      "label": "Two-cell two-gonadotropin model · oestradiol feedback inverts above threshold · LH surge"
    },
    {
      "kind": "exam",
      "label": "Variable luteal length · time progesterone before the expected next period"
    }
  ],
  "highYield": [
    "**Theca and granulosa cells cooperate in ovarian steroid synthesis.** LH stimulates theca androgen production, while FSH supports granulosa aromatase activity and conversion of androgens to oestrogens. Developing follicles therefore depend on two cell populations and two gonadotropins. The dominant follicle becomes increasingly responsive to gonadotropin support as the cohort changes. Review the steroid actions in [[ghp-oestrogen-progesterone-actions]].",
    "**Most cycle regulation uses negative feedback, but sustained high oestradiol can trigger positive feedback.** Oestradiol, progesterone and inhibins regulate the hypothalamic–pituitary axis. A sustained preovulatory oestradiol rise promotes the LH surge through changes in hypothalamic and pituitary signalling. The pattern and duration of exposure matter; a single oestradiol value is not a universal switch. Inhibin preferentially suppresses FSH rather than LH.",
    "**The LH surge triggers oocyte maturation, follicular rupture and luteinisation.** These events transform the dominant follicle into the corpus luteum and change its hormone output. The positive-feedback interval is bounded by this transition and subsequent feedback changes. Ovulation is one example of physiological positive feedback, alongside processes such as parturition; it is not the only healthy positive-feedback loop. See [[hrp1-ovarian-cycle-ovulation]].",
    "**The luteal phase is less variable than the follicular phase, but it is not fixed at 14 days.** An average near 14 days is useful, with normal variation often described around 11–17 days. Cycle-length variation commonly reflects the follicular phase, but not exclusively. In a regular 34-day cycle, mid-luteal progesterone is usually timed about a week before the expected next period, around day 27, rather than automatically on day 21. Calendar estimates alone cannot prove the exact day of ovulation.",
    "**Progesterone prepares the endometrium and changes the temperature pattern.** After ovulation, the corpus luteum produces progesterone as well as oestradiol. Progesterone supports secretory endometrial changes and a small sustained rise in basal temperature. If pregnancy does not occur, luteal regression and falling steroid concentrations initiate menstruation. If implantation occurs, embryonic hCG supports the corpus luteum until placental steroid production becomes sufficient.",
    "**Withdrawal bleeding on a combined contraceptive is different from a spontaneous ovulatory period.** The hormone-free interval can trigger bleeding from an endometrium exposed to exogenous hormones. Such bleeding is not needed to clear accumulated blood. Continuous or extended regimens can be appropriate for suitable users, but suitability depends on the formulation and clinical circumstances; physiology alone cannot guarantee that every regimen is safe for every person."
  ],
  "mechanism": {
    "title": "Luteolysis lifts FSH → two-cell oestradiol synthesis → dominance → oestradiol crosses threshold and feedback inverts → LH surge → ovulation → corpus luteum → programmed death and withdrawal bleed",
    "steps": [
      {
        "id": "s1",
        "label": "As the corpus luteum dies, inhibin A, oestradiol and progesterone all fall, releasing FSH — which rises in the late luteal phase and recruits the next cohort",
        "detail": "The cycle therefore begins before the previous one has finished bleeding.",
        "emphasis": "key"
      },
      {
        "id": "s2",
        "label": "LH drives theca cells to make androstenedione; FSH-induced aromatase in granulosa cells converts it to oestradiol",
        "detail": "Neither cell can complete the synthesis alone, which is why both gonadotropins are needed for a single steroid.",
        "emphasis": "key"
      },
      {
        "id": "s3",
        "label": "The follicle with the most FSH receptors and greatest aromatase output becomes dominant; its oestradiol and inhibin B suppress FSH and starve the rest of the cohort",
        "emphasis": "key"
      },
      {
        "id": "s4",
        "label": "Oestradiol sustained above about 200 pg/mL for roughly two days inverts its own feedback from negative to positive",
        "detail": "Concentration and duration are both required — the threshold is what makes the mechanism selective for a single dominant follicle.",
        "emphasis": "key"
      },
      {
        "id": "s5",
        "label": "LH rises about tenfold: meiosis I resumes, the oocyte arrests again at metaphase II, and the follicle ruptures some 36 hours after the surge begins",
        "emphasis": "key"
      },
      {
        "id": "s6",
        "label": "The ruptured follicle luteinises and secretes progesterone, which restores negative feedback; unrescued, it dies at 14 days and the withdrawal produces menstruation",
        "emphasis": "key"
      }
    ],
    "branches": [
      {
        "fromId": "s6",
        "title": "Anovulation: the loop never closes",
        "steps": [
          {
            "id": "b1",
            "label": "No ovulation means no corpus luteum, so progesterone is never produced",
            "emphasis": "key"
          },
          {
            "id": "b2",
            "label": "The endometrium sees oestrogen with no scheduled withdrawal, so bleeding is irregular and unpredictable rather than cyclical",
            "emphasis": "normal"
          },
          {
            "id": "b3",
            "label": "Sustained unopposed proliferation carries a real risk of endometrial hyperplasia and carcinoma",
            "emphasis": "danger"
          }
        ]
      }
    ]
  },
  "examFindings": [
    {
      "sign": "A biphasic basal body temperature chart with a sustained 0.3 to 0.5 °C rise occupying the second half of the cycle",
      "mechanism": "Progesterone from a functioning corpus luteum resets the hypothalamic thermostat — proof that ovulation occurred, but only after the fact",
      "significance": "key"
    },
    {
      "sign": "A woman with 34-day cycles told she is anovulatory because her day-21 progesterone was low",
      "mechanism": "She ovulates around day 20 and her mid-luteal point is day 27; the test was mistimed because it was counted forwards from the last period instead of backwards from the next",
      "significance": "key"
    },
    {
      "sign": "Copious clear stretchy cervical mucus showing spinnbarkeit and ferning, appearing for a few days and then abruptly thickening",
      "mechanism": "Peri-ovulatory oestradiol makes mucus permeable to sperm; the abrupt change marks the arrival of progesterone after ovulation",
      "significance": "supportive"
    },
    {
      "sign": "Unilateral lower abdominal pain lasting a few hours at mid-cycle, alternating sides between cycles",
      "mechanism": "Mittelschmerz — follicular rupture with peritoneal irritation from follicular fluid and a little blood",
      "significance": "supportive"
    },
    {
      "sign": "Irregular, unpredictable bleeding with no premenstrual breast tenderness or bloating and a monophasic temperature chart",
      "mechanism": "Anovulatory cycles: without a corpus luteum there is no progesterone, so there are no luteal symptoms and no scheduled withdrawal to time the bleed",
      "significance": "key"
    },
    {
      "sign": "Menstruation beginning 14 days after a documented LH surge in a woman whose cycles range from 26 to 38 days",
      "mechanism": "Cycle variability commonly arises mainly in the follicular phase, but luteal length can also vary",
      "significance": "key"
    }
  ],
  "investigations": [
    {
      "clue": "Mid-luteal progesterone timed 7 days before the expected next period",
      "meaning": "A suitably timed progesterone result can support recent ovulation; timing is based on the expected next period rather than a universal cycle day"
    },
    {
      "clue": "A urinary LH surge detected at home",
      "meaning": "Ovulation is expected in roughly 24 to 36 hours — the one prospective test, and the reason it is used to time intercourse or insemination"
    },
    {
      "clue": "Basal body temperature recorded through a cycle",
      "meaning": "Retrospective proof of ovulation only; a rise persisting beyond 16 to 18 days suggests the corpus luteum has been rescued by hCG"
    },
    {
      "clue": "Day 2 to 5 FSH reported together with oestradiol",
      "meaning": "Ovarian reserve; the oestradiol is mandatory because an early rise in it suppresses FSH and can make a poor reserve look normal"
    },
    {
      "clue": "Serum hCG detectable 9 to 11 days after ovulation",
      "meaning": "Trophoblastic rescue arriving just before programmed luteolysis — the timing is why pregnancy tests turn positive around the missed period"
    },
    {
      "clue": "Oestradiol above about 200 pg/mL sustained for two days on serial sampling",
      "meaning": "The threshold at which feedback inverts; crossing it commits the cycle to a surge, which is why it is monitored in stimulated cycles"
    }
  ],
  "treatment": [
    {
      "logic": "Why it matters",
      "detail": "Assisted reproduction is this control system operated deliberately, step by step. **Letrozole blocks aromatase**, so oestradiol falls, negative feedback lifts, endogenous FSH rises and a follicle grows — ovulation induction by removing a brake rather than adding a drive. **Clomifene does the same at the hypothalamic receptor** as a SERM. In IVF the surge is the enemy of scheduling, so a **GnRH antagonist prevents the endogenous LH surge** while follicles are grown on injected FSH, and then **hCG is given as a surrogate surge** — it is an LH-receptor agonist with a much longer half-life — with retrieval timed at about 36 hours, exactly the natural surge-to-ovulation interval. Because the pituitary has been suppressed it cannot sustain the corpus luteum afterwards, which is why **luteal progesterone support is given routinely**. Read the other way, contraception is the same physiology inverted: steady exogenous steroid keeps oestradiol from ever crossing its threshold, so no surge occurs and no follicle ruptures."
    },
    {
      "logic": "Where it is examined",
      "detail": "Four stems recur. **Dating ovulation** is asked by giving a non-28-day cycle, and the answer is always 14 days before the next period. **The sign of oestradiol feedback** is asked by describing a mid-cycle LH rise and inviting you to say oestrogen inhibits LH; above threshold and sustained, it drives the surge. **The two-cell model** is asked as a pathway, and the discriminator is that theca has no aromatase and granulosa has no lyase. **Menstruation** is asked as a mechanism, and the answer is progesterone withdrawal from a corpus luteum that was always going to die, with spiral arteriolar vasoconstriction as the final step. A fifth, subtler stem gives a temperature chart and asks whether it can be used to time conception — it cannot, because the rise follows the event. Endometrial and contraceptive consequences are set out in [[hrp1-uterine-cycle-fertility-signs]]."
    }
  ],
  "mnemonics": [
    {
      "hook": "Theca Takes it to androgen; Granulosa Gives the oestrogen",
      "expansion": [
        "LH → theca → androstenedione (lyase present, aromatase absent)",
        "Androgen diffuses across the basement membrane to the avascular granulosa layer",
        "FSH → granulosa → aromatase → oestradiol (aromatase present, lyase absent)",
        "Excess LH relative to FSH gives androgen the granulosa cannot convert — the PCOS signature"
      ]
    },
    {
      "hook": "Estimate backwards; confirm the physiology",
      "expansion": [
        "Luteal length averages about 14 days but varies",
        "Follicular variation explains much, not all, cycle-length variation",
        "Mid-luteal progesterone is usually sampled about a week before the expected next period"
      ]
    }
  ],
  "traps": [
    {
      "questionCategory": "When ovulation occurs in a woman with long cycles",
      "wrongInstinct": "Day 14, because ovulation happens mid-cycle",
      "rightAnswer": "Fourteen days before the NEXT period — about day 21 in a 35-day cycle, and about day 12 in a 26-day one",
      "why": "Cycle length and luteal duration vary, so one fixed cycle day can mistime progesterone sampling or estimates of ovulation."
    },
    {
      "questionCategory": "The direction of oestradiol feedback on LH",
      "wrongInstinct": "Oestrogen is a negative feedback hormone, so a high oestradiol must be suppressing LH",
      "rightAnswer": "Above about 200 pg/mL sustained for roughly two days, oestradiol switches to positive feedback and generates the LH surge",
      "why": "The sign depends on concentration and duration, and that threshold is precisely what selects the single dominant follicle for ovulation."
    }
  ],
  "quiz": [
    {
      "id": "q1",
      "stem": "A woman with regular 34-day cycles is told she is not ovulating after a serum progesterone taken on day 21 came back at 4 nmol/L. The most appropriate interpretation is:",
      "options": [
        {
          "id": "a",
          "text": "She is anovulatory and should begin ovulation induction"
        },
        {
          "id": "b",
          "text": "Day 21 may be too early to represent mid-luteal progesterone; sample about a week before the expected next period, around day 27"
        },
        {
          "id": "c",
          "text": "She has luteal phase deficiency, since progesterone is low at the expected mid-luteal point"
        },
        {
          "id": "d",
          "text": "The assay is unreliable at low concentrations and should be replaced with an LH measurement"
        }
      ],
      "answerId": "b",
      "explanation": "A 34-day cycle often ovulates later than a 28-day cycle, but the exact day cannot be inferred from calendar length alone. A single low day-21 value does not establish anovulation. Mid-luteal sampling is usually timed about a week before the expected next period; luteal length and progesterone secretion both vary.",
      "tests": "investigation"
    },
    {
      "id": "q2",
      "stem": "Serial sampling through a cycle shows oestradiol rising steadily and remaining above 250 pg/mL for two days, after which LH rises roughly tenfold over 36 hours. The mechanism responsible for the LH rise is:",
      "options": [
        {
          "id": "a",
          "text": "Withdrawal of oestradiol negative feedback as the dominant follicle exhausts its aromatase capacity"
        },
        {
          "id": "b",
          "text": "Progesterone from the luteinising granulosa cells stimulating gonadotropin release before rupture"
        },
        {
          "id": "c",
          "text": "Oestradiol sustained above a threshold concentration inverting its own feedback from negative to positive, raising pituitary GnRH-receptor number and releasable LH"
        },
        {
          "id": "d",
          "text": "Loss of inhibin B from the atretic follicles of the cohort, releasing the pituitary from restraint"
        }
      ],
      "answerId": "c",
      "explanation": "The defining feature is that oestradiol is high and still rising when LH surges, so this cannot be withdrawal of anything. Above roughly 200 pg/mL for about two days the same hormone that was restraining LH begins to drive it, by sensitising the gonadotroph to GnRH and increasing the releasable LH pool. Requiring both a threshold concentration and a sustained duration is what makes only a dominant follicle capable of triggering it. A small pre-ovulatory rise in progesterone does contribute to the surge but follows the oestradiol signal rather than initiating it, and inhibin B restrains FSH rather than LH.",
      "tests": "mechanism"
    },
    {
      "id": "q3",
      "stem": "A woman on a combined oral contraceptive asks whether it is harmful to skip the hormone-free interval and take packets continuously, since she would then have no periods. The physiologically correct answer is:",
      "options": [
        {
          "id": "a",
          "text": "It is harmful, because menstrual shedding is required to clear the endometrium and prevent it accumulating"
        },
        {
          "id": "b",
          "text": "The scheduled bleed is a hormone-withdrawal bleed with no physiological requirement; an appropriate continuous regimen can omit it"
        },
        {
          "id": "c",
          "text": "It is safe, but only because the progestogen prevents the endometrium from proliferating at all"
        },
        {
          "id": "d",
          "text": "It is harmful, because continuous oestrogen exposure without withdrawal causes endometrial hyperplasia"
        }
      ],
      "answerId": "b",
      "explanation": "A withdrawal bleed on combined hormonal contraception is triggered by removing exogenous hormone support, not by a need to clear accumulated blood. Extended or continuous regimens can be appropriate. Individual eligibility and the specific formulation still matter, and irregular bleeding can occur.",
      "tests": "treatment"
    }
  ]
};

export default ghpOvarianCycleHormonalControl;
