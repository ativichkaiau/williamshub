import type { Lecture } from '../../lib/types';

export const ghpHormoneClassesReceptorMechanisms: Lecture = {
  "id": "ghp-hormone-classes-receptor-mechanisms",
  "title": "Hormone Classes & Receptor Mechanisms",
  "system": "endocrine",
  "source": "Ch 75 — Introduction to Endocrinology",
  "updated": "2026-09-15",
  "tags": [
    {
      "kind": "system",
      "label": "Endocrine"
    },
    {
      "kind": "lecture",
      "label": "Ch 75 Introduction to Endocrinology"
    },
    {
      "kind": "mechanism",
      "label": "Solubility predicts storage, transport, latency and half-life"
    },
    {
      "kind": "exam",
      "label": "Only free hormone is active — binding-protein shifts move total, not free"
    }
  ],
  "highYield": [
    "**Three major chemical groups provide a useful framework, and the class is a prediction rather than a filing label.** **Peptides and proteins** are the large majority — everything from the three-residue TRH to the 191-residue growth hormone. **Steroids** come from cholesterol in the adrenal cortex, gonads and placenta, with vitamin D as an honorary member. **Tyrosine derivatives** split into two halves that behave nothing alike: the **thyroid hormones** and the **catecholamines**. Do not memorise a table of properties for each class — memorise one physical fact, **water versus lipid solubility**, and derive the table. Where the hormone is made, whether it can be stockpiled, how it travels in plasma, where its receptor sits, how fast it acts and how long it lasts are all downstream of that single property.",
    "**Peptides are pre-made and warehoused; steroids cannot be stored at all.** A peptide is transcribed as a **preprohormone**, trimmed in the endoplasmic reticulum, processed in the Golgi and packed into **secretory vesicles** that can hold **days to weeks** of output; secretion is then simply **Ca²⁺-triggered exocytosis**, which is why peptide release can be complete **within seconds** of a stimulus. A steroid has no vesicle, because a lipid-soluble molecule diffuses straight back out through the membrane it was packed into. It is therefore made **on demand** from cholesterol, rate-limited by **StAR-mediated delivery of cholesterol to the inner mitochondrial membrane** and by **side-chain cleavage (CYP11A1)** — so secretion rate equals synthesis rate, and even a maximal ACTH stimulus needs **minutes, not seconds**. Thyroid hormone is the outlier that stores its product **outside the cell**, as thyroglobulin in colloid, holding **2–3 months** of supply.",
    "**Transport follows solubility, and only the free hormone does anything.** Water-soluble peptides and catecholamines simply dissolve in plasma, circulate **unbound**, and are cleared by peptidases and the kidney within **minutes** — adrenaline about **1–3 minutes**, insulin about **6**, ADH about **15–20**. Lipid-soluble steroids and thyroid hormones would otherwise be cleared at a stroke, so they ride **carrier proteins** — CBG, SHBG, TBG, transthyretin and albumin — with **90% to 99.97%** of the circulating pool bound. The carrier is a **buffered reservoir that shields the hormone from renal filtration and metabolism**, which is why cortisol lasts **60–90 minutes** and thyroxine about **7 days**. The rule that follows is the **free hormone hypothesis**: only the unbound fraction crosses membranes, occupies the receptor and feeds back on the axis.",
    "**Change the binding protein and you move total hormone without moving free hormone or making anyone ill — this is the single most misread result in endocrine biochemistry.** Oestrogen, whether from **pregnancy or from oral oestrogen therapy**, both raises TBG synthesis and sialylates it so it is cleared more slowly; **total T4 rises well above the reference range while free T4 and TSH stay normal and the patient is euthyroid**. The mirror image is a **low total** with normal free hormone when binding proteins fall — **nephrotic syndrome, cirrhosis, severe systemic illness, androgens and glucocorticoids**. The same logic governs testosterone: obesity and hyperinsulinaemia suppress SHBG, so a **low total testosterone with a normal free testosterone and a normal LH** is a binding-protein finding, not hypogonadism. **A total hormone concentration is uninterpretable without the binding state**, which is why the axis is assessed with free hormone plus its trophic hormone.",
    "**Receptor location sets both latency and duration, and it is the only classification that actually predicts behaviour.** Water-soluble hormones cannot cross the membrane, so they bind a **surface receptor** and work through a **second messenger** that covalently modifies enzymes **already present** — onset in **seconds to minutes**, offset almost as fast. Lipid-soluble hormones diffuse through the membrane to a **nuclear or cytosolic receptor**, which binds **hormone-response elements** and alters transcription — so the effect needs **new protein**, takes **hours to appear** and persists for **days**. Hence intravenous hydrocortisone in adrenal crisis restores vascular tone over **hours** while noradrenaline works in **seconds**. Note where the tyrosine-derived pair falls: **thyroid hormone is nuclear and behaves like a steroid; catecholamines are surface-acting and behave like peptides**, despite the shared precursor.",
    "**Cascade amplification is the reason picomolar concentrations do anything, and receptor number is where sensitivity is actually set.** Hormones circulate at **10⁻¹² to 10⁻⁹ mol/L**, six or more orders of magnitude below glucose or sodium. A single occupied receptor activates many G proteins, each cyclase makes many cAMP, each kinase phosphorylates many substrates — a net gain of roughly **10⁴ to 10⁸**. The families worth knowing are **Gs/Gi–adenylyl cyclase–cAMP–PKA**, **Gq–phospholipase C–IP3 and DAG–Ca²⁺ and PKC**, **receptor tyrosine kinases** (insulin, IGF-1), **JAK-STAT** (growth hormone, prolactin, leptin) and **membrane guanylyl cyclase–cGMP** (ANP). Because the cascade is so steep, **response is governed by receptor number and coupling rather than by hormone concentration alone** — so the receptor, not the hormone, is the regulated element."
  ],
  "mechanism": {
    "title": "Chemical class → solubility → storage, transport and receptor location → latency, half-life, and regulation at the receptor",
    "steps": [
      {
        "id": "s1",
        "label": "Three classes — peptide/protein, steroid, tyrosine-derived — but one property, water versus lipid solubility, predicts the rest",
        "detail": "Thyroid hormone and the catecholamines share a tyrosine precursor and then behave like opposite classes, which is the clue that solubility and not chemistry is the organising variable.",
        "emphasis": "key"
      },
      {
        "id": "s2",
        "label": "Water-soluble hormones are pre-made and stored in vesicles; steroids cannot be stored and are synthesised on demand from cholesterol",
        "detail": "Peptide vesicles hold days to weeks of output and release by Ca²⁺-triggered exocytosis within seconds. Steroid output equals steroid synthesis, rate-limited by StAR and CYP11A1.",
        "emphasis": "key"
      },
      {
        "id": "s3",
        "label": "Water-soluble hormones travel free and are cleared in minutes; lipid-soluble hormones travel 90–99% carrier-bound and last hours to days",
        "detail": "Binding protein shields the hormone from glomerular filtration and hepatic metabolism, so it sets half-life: adrenaline 1–3 minutes, cortisol 60–90 minutes, thyroxine about 7 days.",
        "emphasis": "key"
      },
      {
        "id": "s4",
        "label": "Only the free fraction crosses membranes, occupies the receptor and feeds back — so a change in carrier moves total hormone alone",
        "detail": "Oestrogen raises TBG and total T4 with normal free T4 and TSH; nephrotic syndrome and androgens do the reverse. Neither is a disease of thyroid function.",
        "emphasis": "key"
      },
      {
        "id": "s5",
        "label": "Surface receptor plus second messenger gives 10⁴–10⁸ amplification and an effect within seconds; nuclear receptor works through transcription and takes hours",
        "detail": "The steep cascade is what allows picomolar hormone concentrations to control metabolism, and it means the response saturates with receptor occupancy rather than tracking hormone level linearly.",
        "emphasis": "key"
      },
      {
        "id": "s6",
        "label": "Receptor number and coupling are themselves regulated, so the pattern of exposure can reverse the response to the very same molecule",
        "detail": "Sustained occupancy internalises and uncouples receptors (down-regulation, tachyphylaxis); chronic deficiency raises receptor number (up-regulation, denervation supersensitivity).",
        "emphasis": "key"
      }
    ],
    "branches": [
      {
        "fromId": "s6",
        "title": "The GnRH demonstration",
        "steps": [
          {
            "id": "b1",
            "label": "Pulsatile GnRH every 60–90 minutes sustains gonadotroph LH and FSH output — the physiological signal",
            "emphasis": "normal"
          },
          {
            "id": "b2",
            "label": "Continuous GnRH exposure internalises and uncouples the receptor after an initial 1–2 week flare",
            "emphasis": "normal"
          },
          {
            "id": "b3",
            "label": "The axis switches off — the basis of depot agonist therapy, and of the flare that must be covered in metastatic prostate cancer",
            "emphasis": "danger"
          }
        ]
      }
    ]
  },
  "examFindings": [
    {
      "sign": "A pregnant woman with a total T4 well above the reference range, a normal free T4 and a normal TSH, and no symptoms of thyrotoxicosis",
      "mechanism": "Oestrogen raises TBG synthesis and slows its clearance, so the bound reservoir expands while the axis holds the free pool exactly where it wants it",
      "significance": "key"
    },
    {
      "sign": "A man starting a depot GnRH agonist for metastatic prostate cancer whose bone pain and urinary obstruction worsen over the first fortnight before testosterone falls to castrate levels",
      "mechanism": "Continuous occupancy first stimulates the gonadotroph, producing a surge of LH and testosterone, and only then down-regulates and desensitises the receptor",
      "significance": "key"
    },
    {
      "sign": "A woman with hypothalamic amenorrhoea who ovulates on a pulsatile GnRH pump but becomes more profoundly suppressed on continuous infusion of the same peptide",
      "mechanism": "The gonadotroph decodes pulse frequency, not concentration, so a steady signal is not a stronger message but a different and opposite one",
      "significance": "key"
    },
    {
      "sign": "A patient with Graves disease started on carbimazole whose symptoms take four to six weeks to settle despite good adherence",
      "mechanism": "Thionamides block new synthesis but cannot empty the colloid store, which already holds two to three months of hormone as thyroglobulin",
      "significance": "key"
    },
    {
      "sign": "Intravenous hydrocortisone in adrenal crisis restores vascular tone over several hours, whereas noradrenaline given alongside it works within seconds",
      "mechanism": "Cortisol acts through a nuclear receptor and requires transcription and new protein; the catecholamine acts through a surface receptor on enzymes already present",
      "significance": "key"
    },
    {
      "sign": "A man with obesity and insulin resistance who has a low total testosterone, a normal free testosterone and a normal LH",
      "mechanism": "Hyperinsulinaemia suppresses hepatic SHBG production, so the bound pool shrinks while the free, biologically active pool and its feedback are preserved",
      "significance": "supportive"
    }
  ],
  "investigations": [
    {
      "clue": "The single physical property that predicts storage, transport, receptor location, latency and half-life",
      "meaning": "Water versus lipid solubility. Water-soluble means stored in vesicles, free in plasma, surface receptor, seconds to act, minutes to clear; lipid-soluble means made on demand, carrier-bound, nuclear receptor, hours to act, days to clear"
    },
    {
      "clue": "Approximate circulating half-lives across the classes",
      "meaning": "Catecholamines 1–3 minutes, insulin about 6, ACTH about 10, ADH 15–20, aldosterone about 20, cortisol 60–90 minutes, T3 about a day and T4 about 7 days — the spread tracks protein binding almost exactly"
    },
    {
      "clue": "Which hormones can be stockpiled, and for how long",
      "meaning": "Peptides hold days to weeks in secretory vesicles; thyroid hormone holds two to three months as colloid thyroglobulin, uniquely outside the cell; steroids hold essentially nothing, which is why steroid output is synthesis-limited"
    },
    {
      "clue": "A raised total hormone with a normal free hormone and a normal trophic hormone",
      "meaning": "A binding-protein result, not a disease. TBG rises with pregnancy, oestrogen and acute hepatitis; it falls with nephrotic syndrome, cirrhosis, severe illness, androgens and glucocorticoids. Measure free hormone plus TSH and treat the patient, not the total"
    },
    {
      "clue": "The order of magnitude of second-messenger amplification",
      "meaning": "Roughly 10⁴ to 10⁸ product molecules per hormone-receptor complex — the reason a hormone present at 10⁻¹² mol/L can dominate a metabolic pathway whose substrates sit at 10⁻³"
    },
    {
      "clue": "The cleanest demonstration that pattern rather than concentration carries the endocrine message",
      "meaning": "Pulsatile GnRH sustains the gonadotroph while continuous GnRH suppresses it. The same molecule at a higher total exposure gives the opposite result, because the receptor is a regulated element that reads frequency"
    }
  ],
  "treatment": [
    {
      "logic": "Why it matters",
      "detail": "The whole chapter compresses into one sentence: **solubility decides storage, transport, receptor location, speed and duration, and the receptor decides sensitivity**. That is why a steroid cannot be given for an effect you need in the next thirty seconds, why thyroxine can be dosed once daily and insulin cannot, why blocking thyroid synthesis takes weeks to show, and why the therapeutic lever in endocrinology is so often the **receptor** rather than the hormone. The class-by-class detail sits in [[hen1-peptide-catecholamine-hormones]] and [[hen1-steroid-thyroid-hormone-biology]]; this module is the rule that generates both."
    },
    {
      "logic": "Where it is examined",
      "detail": "Three stems recur. **The raised total T4 in pregnancy** with normal free T4 and TSH — the answer is a binding-protein shift and the action is to do nothing; the transport and conversion detail is in [[hen1-thyroid-transport-conversion-action]]. **Why a GnRH agonist suppresses the axis** — continuous occupancy down-regulates a receptor built to read pulses, after a 1–2 week flare. **Why ACTH raises cortisol over minutes rather than seconds** — steroids are not stored, so the response is de novo synthesis and not exocytosis. A fourth asks **which class acts through transcription**, where the trap is that thyroid hormone is tyrosine-derived yet nuclear. How these receptor principles feed back into axis control is in [[ghp-endocrine-feedback-control-principles]]."
    }
  ],
  "mnemonics": [
    {
      "hook": "Solubility predicts many features, with important exceptions",
      "expansion": [
        "Water-soluble: stored in vesicles, travels free, surface receptor, acts in seconds, gone in minutes",
        "Lipid-soluble: made on demand, travels carrier-bound, nuclear receptor, acts in hours, lasts days",
        "Thyroid hormones are tyrosine-derived and act mainly through nuclear receptors, but are stored extracellularly in colloid",
        "Catecholamines share that precursor but are water-soluble, so they behave like peptides"
      ]
    },
    {
      "hook": "Pulse builds it, drip destroys it",
      "expansion": [
        "Pulsatile GnRH every 60–90 minutes sustains LH and FSH",
        "Continuous GnRH down-regulates the gonadotroph and shuts the axis off",
        "Same molecule, greater total exposure, opposite result",
        "Flare for one to two weeks first, castrate levels afterwards"
      ]
    }
  ],
  "traps": [
    {
      "questionCategory": "A raised total thyroxine in a pregnant or oestrogen-treated woman",
      "wrongInstinct": "Total T4 is above the reference range, so she is thyrotoxic and needs a thionamide",
      "rightAnswer": "Oestrogen has raised TBG; free T4 and TSH are normal, she is euthyroid, and no treatment is indicated",
      "why": "Only free hormone is biologically active and only free hormone feeds back, so a larger carrier pool changes the bound reservoir and leaves the free concentration exactly where the axis sets it."
    },
    {
      "questionCategory": "Why a GnRH agonist suppresses rather than stimulates the gonadal axis",
      "wrongInstinct": "An agonist at a stimulatory receptor must stimulate, so testosterone should stay high for as long as the drug is given",
      "rightAnswer": "Continuous occupancy internalises and uncouples the gonadotroph receptor, so after an initial flare the axis is profoundly suppressed",
      "why": "The gonadotroph is built to decode pulse frequency, so a continuous signal is not a louder message but a different one — and receptor number, not hormone concentration, is the regulated variable."
    }
  ],
  "quiz": [
    {
      "id": "q1",
      "stem": "A patient with suspected adrenal insufficiency undergoes a short Synacthen test. Cortisol rises measurably only over the following 30 to 60 minutes, whereas a comparable stimulus to the adrenal medulla raises circulating adrenaline within seconds. The best explanation for the difference is that:",
      "options": [
        {
          "id": "a",
          "text": "ACTH must first be converted to an active metabolite in the liver before it can act on the adrenal cortex"
        },
        {
          "id": "b",
          "text": "Cortisol cannot be stored in secretory vesicles, so its output requires de novo synthesis from cholesterol"
        },
        {
          "id": "c",
          "text": "Cortisol binds to CBG so tightly that a delay is required before free cortisol can rise"
        },
        {
          "id": "d",
          "text": "The cortical cells lack the second-messenger machinery present in chromaffin cells"
        }
      ],
      "answerId": "b",
      "explanation": "A lipid-soluble hormone diffuses through any membrane it is packed behind, so steroid-secreting cells cannot warehouse their product. Cortisol output therefore equals cortisol synthesis, rate-limited by StAR-mediated cholesterol transfer into mitochondria and by side-chain cleavage, which takes minutes. Chromaffin cells store catecholamines in vesicles and release them by exocytosis within seconds. ACTH needs no hepatic activation, cortical cells use the same Gs-cAMP-PKA cascade as any other, and CBG binding equilibrates far faster than the observed delay.",
      "tests": "mechanism"
    },
    {
      "id": "q2",
      "stem": "A 24-year-old woman with no symptoms is found on screening to have a total T4 of 190 nmol/L (reference 60 to 140), a free T4 in the middle of its reference range and a TSH of 1.8 mU/L. She started a combined oral contraceptive three months ago. The most appropriate next step is:",
      "options": [
        {
          "id": "a",
          "text": "Start carbimazole and repeat thyroid function in six weeks"
        },
        {
          "id": "b",
          "text": "Request thyroid receptor antibodies and a radioiodine uptake scan"
        },
        {
          "id": "c",
          "text": "Recognise an oestrogen-induced rise in thyroxine-binding globulin and take no action"
        },
        {
          "id": "d",
          "text": "Stop the contraceptive and recheck the total T4 in three months, treating if it remains high"
        }
      ],
      "answerId": "c",
      "explanation": "Oestrogen increases TBG synthesis and its sialylation, slowing clearance, so the bound pool and therefore total T4 rise. Because only free hormone feeds back, the axis defends free T4, which is normal, and TSH confirms this at 1.8 mU/L. The patient is euthyroid. Treating the total would render her genuinely hypothyroid, antibody and uptake testing chase a disease that is not present, and stopping an effective contraceptive to normalise an uninterpretable number is the wrong target. The identical logic explains a low total testosterone with normal free testosterone when SHBG is suppressed.",
      "tests": "investigation"
    },
    {
      "id": "q3",
      "stem": "A 7-year-old girl with central precocious puberty is started on a depot GnRH agonist. Over the first two weeks her breast development and vaginal spotting transiently increase, and by three months gonadotropins and oestradiol are at prepubertal levels. The sustained suppression is best explained by:",
      "options": [
        {
          "id": "a",
          "text": "Competitive blockade of the GnRH receptor by the agonist"
        },
        {
          "id": "b",
          "text": "Depletion of pituitary gonadotropin stores, which cannot be resynthesised"
        },
        {
          "id": "c",
          "text": "Direct negative feedback of the agonist on hypothalamic GnRH neurons"
        },
        {
          "id": "d",
          "text": "Down-regulation and uncoupling of gonadotroph GnRH receptors under continuous rather than pulsatile exposure"
        }
      ],
      "answerId": "d",
      "explanation": "The gonadotroph is a frequency decoder: pulses every 60 to 90 minutes sustain LH and FSH synthesis, whereas continuous occupancy causes receptor internalisation, degradation and uncoupling from the Gq cascade. The initial flare, seen here as transient progression of puberty, is the agonist doing exactly what its name says before desensitisation supervenes, and is why a GnRH antagonist is chosen when a flare would be dangerous. The drug is an agonist and not a blocker, gonadotrophs retain full synthetic capacity and recover within months of stopping, and suppression is pituitary rather than hypothalamic.",
      "tests": "treatment"
    }
  ]
};

export default ghpHormoneClassesReceptorMechanisms;
