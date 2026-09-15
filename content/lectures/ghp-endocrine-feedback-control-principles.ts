import type { Lecture } from '../../lib/types';

export const ghpEndocrineFeedbackControlPrinciples: Lecture = {
  "id": "ghp-endocrine-feedback-control-principles",
  "title": "Feedback Control & Endocrine Regulation",
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
      "label": "High-gain negative feedback defends an effect, not a hormone level"
    },
    {
      "kind": "exam",
      "label": "Pair the trophic with the target hormone to find the level of the lesion"
    }
  ],
  "highYield": [
    "**An endocrine axis defends a biological effect, not a hormone concentration — the hormone is the actuator, not the goal.** What the thyroid axis holds constant is **tissue thyroid hormone action**; what the parathyroid axis holds constant is **ionised calcium**; what the vasopressin axis holds constant is **plasma osmolality**. Hormone concentration is simply the lever pulled to keep that variable on target, which is why it is free to move a long way while the controlled variable barely budges. The corollary is the most useful measurement principle in endocrinology: **in a high-gain loop the trophic hormone is a far more sensitive readout of status than the target hormone**. The TSH–free T4 relation is **log-linear** — halving free T4 raises TSH roughly **a hundredfold** — so TSH detects thyroid failure long before free T4 leaves its reference range.",
    "**Negative feedback is the default, and it operates in tiers.** The **long loop** runs from the target hormone back onto both pituitary and hypothalamus (cortisol onto corticotrophs and CRH neurons; T3 onto thyrotrophs and TRH neurons; testosterone and oestradiol onto gonadotrophs and GnRH neurons). The **short loop** runs from the pituitary hormone back onto the hypothalamus — ACTH suppressing CRH, growth hormone suppressing GHRH. The **ultra-short loop** runs from a hypothalamic hormone onto its own neurons. Layering them gives a system that is **stable at several time constants at once**: the long loop sets the daily level, the shorter loops damp oscillation within a pulse. **A slow loop alone would oscillate; a fast loop alone would drift.**",
    "**Some variables skip the axis entirely and feed back on the gland itself — which is why they are controlled in seconds rather than hours.** **Ionised calcium acts directly on the parathyroid calcium-sensing receptor**; **glucose acts directly on the beta cell**; **plasma osmolality acts directly on the hypothalamic osmoreceptor**. There is no releasing hormone, no trophic hormone and no pituitary in these loops at all. Recognise the architecture and you predict the behaviour: **single-tier loops correct fast and have a very sharp set point** (the whole PTH curve sits across roughly **0.1 mmol/L** of ionised calcium), while **three-tier loops are slow, wide and heavily rhythm-modulated**. It also tells you where a drug will act — a calcimimetic works on the sensor, whereas a thionamide works three tiers downstream.",
    "**The single most exportable clinical skill in this chapter: pair the trophic hormone with the target hormone and the level of the lesion falls out.** **High trophic with low target means the gland has failed** — high TSH with low free T4 is primary hypothyroidism, high ACTH with low cortisol is Addison disease, high LH and FSH with low testosterone or oestradiol is primary gonadal failure. **Low or inappropriately normal trophic with low target means the pituitary or hypothalamus has failed.** **Suppressed trophic with high target means autonomy or an exogenous source** — a suppressed TSH with a high free T4, a suppressed ACTH with a high cortisol in an adrenal adenoma. **High trophic with high target means a trophic tumour or end-organ resistance** — a TSH-secreting adenoma, or resistance to thyroid hormone. Four boxes, every axis, no memorising required.",
    "**The word that converts a normal-looking number into a diagnosis is \"inappropriate\".** A TSH of 1.2 mU/L is unremarkable — unless free T4 is low, in which case the loop should have driven it up and did not, and the diagnosis is **central hypothyroidism**. A PTH in the middle of its range is unremarkable — unless calcium is 2.85 mmol/L, in which case it should have been fully suppressed, and the diagnosis is **primary hyperparathyroidism** (contrast hypercalcaemia of malignancy, where PTH is properly suppressed). An LH of 3 IU/L is unremarkable — unless testosterone is 4 nmol/L, which makes it **secondary hypogonadism**. **Never interpret one hormone against its reference range; interpret it against what the loop should have done.**",
    "**Positive feedback is rare, always transient, and always terminated by an event — a positive loop that cannot terminate is a disease.** The two physiological examples are worth knowing exactly. **Oestradiol sustained above roughly 200 pg/mL for 36–48 hours flips granulosa feedback from negative to positive**, producing the **LH surge** — and the surge ends because **ovulation removes the follicle that was generating the signal**. **Cervical stretch drives oxytocin release, which drives uterine contraction, which increases stretch** — the Ferguson reflex — and it ends because **delivery of the fetus removes the stretch**. In both cases the terminating event is built into the loop. Where no such event exists, the same architecture is pathological: the vicious cycles of **decompensated heart failure, thyroid storm and diabetic ketoacidosis** are positive feedback with no off-switch."
  ],
  "mechanism": {
    "title": "Controlled variable → high-gain negative feedback in tiers → trophic and target pairing localises the lesion → rhythm and pattern modulate → positive loops only where an event can end them",
    "steps": [
      {
        "id": "s1",
        "label": "The axis defends a biological effect — tissue hormone action, ionised calcium, osmolality — and hormone concentration is only the lever",
        "detail": "This is why the target hormone can sit mid-range while the axis is straining, and why the trophic hormone is the more informative measurement.",
        "emphasis": "key"
      },
      {
        "id": "s2",
        "label": "Negative feedback with high gain keeps the controlled variable tight while letting the trophic hormone swing widely",
        "detail": "The TSH-free T4 relation is log-linear: a twofold fall in free T4 raises TSH about a hundredfold, which is the whole basis of TSH-first thyroid testing.",
        "emphasis": "key"
      },
      {
        "id": "s3",
        "label": "Feedback runs in tiers — long loop onto pituitary and hypothalamus, short loop onto the hypothalamus, ultra-short loop onto the neuron itself",
        "detail": "Multiple time constants give stability: the long loop sets the daily level while the shorter loops damp oscillation within a secretory pulse.",
        "emphasis": "key"
      },
      {
        "id": "s4",
        "label": "Calcium, glucose and osmolality bypass the axis and act directly on the gland or sensor — single-tier loops that correct in seconds",
        "detail": "No releasing hormone, no trophic hormone, a very sharp set point. The entire PTH response curve spans roughly 0.1 mmol/L of ionised calcium.",
        "emphasis": "key"
      },
      {
        "id": "s5",
        "label": "Pairing trophic with target hormone gives four boxes that localise any lesion to gland, pituitary, autonomy or resistance",
        "detail": "High trophic with low target is primary; low or inappropriately normal trophic with low target is central; suppressed trophic with high target is autonomy or exogenous hormone; high with high is a trophic tumour or resistance.",
        "emphasis": "key"
      },
      {
        "id": "s6",
        "label": "Positive feedback appears only where a physical event can terminate it — ovulation ends the LH surge, delivery ends the oxytocin loop",
        "detail": "The same architecture without a terminating event is a vicious cycle, which is the structure of thyroid storm, ketoacidosis and decompensated heart failure.",
        "emphasis": "key"
      }
    ],
    "branches": [
      {
        "fromId": "s3",
        "title": "Feedback seen from outside the body",
        "steps": [
          {
            "id": "b1",
            "label": "The hypothalamus cannot distinguish prednisolone from cortisol and reads exogenous steroid as target hormone",
            "emphasis": "normal"
          },
          {
            "id": "b2",
            "label": "CRH and ACTH fall; after roughly three weeks above 5 mg prednisolone daily the zona fasciculata begins to atrophy",
            "emphasis": "normal"
          },
          {
            "id": "b3",
            "label": "Abrupt withdrawal leaves an adrenal that cannot respond for 6–12 months — hypotension, hyponatraemia and adrenal crisis",
            "emphasis": "danger"
          }
        ]
      }
    ]
  },
  "examFindings": [
    {
      "sign": "Cold intolerance, weight gain and a goitre, with TSH 42 mU/L and a low free T4",
      "mechanism": "The gland has failed and the intact pituitary is straining against it — high trophic with low target is the signature of primary end-organ failure",
      "significance": "key"
    },
    {
      "sign": "Fatigue and amenorrhoea with a low free T4 and a TSH of 1.2 mU/L reported as normal",
      "mechanism": "A trophic hormone that fails to rise when the controlled variable falls is itself the abnormal result; this is inappropriately normal TSH and means central hypothyroidism",
      "significance": "key"
    },
    {
      "sign": "In early Cushing syndrome, a normal 0800 cortisol but a clearly raised late-night salivary cortisol",
      "mechanism": "Autonomous secretion abolishes the diurnal rhythm before it raises the daily peak, so the trough is where the loop breaks first",
      "significance": "key"
    },
    {
      "sign": "Hypotension, hyponatraemia and vomiting two days after abruptly stopping prednisolone taken for eight months",
      "mechanism": "Prolonged exogenous glucocorticoid suppressed CRH and ACTH and atrophied the zona fasciculata, which cannot resume output for months after the drug washes out in hours",
      "significance": "key"
    },
    {
      "sign": "Corrected calcium 2.85 mmol/L with a PTH of 5.2 pmol/L, squarely within the reference range",
      "mechanism": "Hypercalcaemia should have suppressed PTH through the calcium-sensing receptor; a non-suppressed PTH is diagnostic of autonomy, whereas in hypercalcaemia of malignancy PTH is properly low",
      "significance": "key"
    },
    {
      "sign": "Pituitary enlargement on MRI in untreated long-standing primary hypothyroidism, which regresses on thyroxine replacement",
      "mechanism": "Loss of T3 negative feedback drives sustained TRH and thyrotroph hyperplasia; restoring the loop removes the drive and the gland involutes, so this is not an adenoma to operate on",
      "significance": "supportive"
    }
  ],
  "investigations": [
    {
      "clue": "The four possible pairings of a trophic hormone with its target hormone",
      "meaning": "High trophic with low target is primary gland failure; low or inappropriately normal trophic with low target is pituitary or hypothalamic; suppressed trophic with high target is target-gland autonomy or an exogenous source; high trophic with high target is a trophic adenoma or end-organ resistance. The same four boxes work for every axis"
    },
    {
      "clue": "Why TSH is a more sensitive index of thyroid status than free T4",
      "meaning": "The relation is log-linear: a twofold change in free T4 moves TSH roughly a hundredfold. High-gain feedback converts a small deviation in the controlled variable into a large, easily measured change in the actuator"
    },
    {
      "clue": "The word that turns a normal-looking result into a diagnosis",
      "meaning": "Inappropriate. A mid-range TSH with a low free T4, a mid-range PTH with a calcium of 2.85, a normal LH with a testosterone of 4 nmol/L. In each the loop should have moved and did not, and that failure is the finding"
    },
    {
      "clue": "The rule that generates every dynamic endocrine test",
      "meaning": "Suppress what you suspect is in excess, stimulate what you suspect is deficient. Overnight dexamethasone for Cushing, oral glucose for acromegaly, saline or fludrocortisone for aldosteronism; Synacthen, insulin tolerance or glucagon for suspected deficiency"
    },
    {
      "clue": "Why a single random cortisol is nearly uninterpretable",
      "meaning": "Cortisol is pulsatile and strongly circadian, peaking around 0600 to 0800 and falling near zero by midnight, and any stress overrides the rhythm. It is the loss of the rhythm, captured by late-night salivary cortisol, rather than the absolute level that is diagnostic"
    },
    {
      "clue": "How to distinguish a physiological positive feedback loop from a pathological one",
      "meaning": "A physiological positive loop carries its own terminating event — ovulation removes the follicle driving the LH surge, delivery removes the cervical stretch driving oxytocin. A loop with no terminating event is a vicious cycle, as in thyroid storm or ketoacidosis"
    }
  ],
  "treatment": [
    {
      "logic": "Why it matters",
      "detail": "Two habits come out of this module and both outlast the exam. **Never read a hormone against its reference range alone — read it against what the loop should have done**, which converts a page of numbers into a single statement about the level of the lesion. And **never stop a long-term glucocorticoid abruptly**, because the hypothalamus has been reading that drug as cortisol for months and the adrenal needs **6–12 months** to recover while the drug clears in hours. The axis-by-axis worked examples live in [[hen1-endocrine-feedback-loops]] and, for the HPA specifically, in [[hen1-cortisol-hpa-axis]]. The receptor-level reason a loop can be reset without changing hormone concentration at all is in [[ghp-hormone-classes-receptor-mechanisms]]."
    },
    {
      "logic": "Where it is examined",
      "detail": "The recurring stems are all the same question wearing different clothes. **A low free T4 with a normal TSH** — central, not primary, and the mistake is to accept the reference range; the full pattern set is in [[hen1-hpt-axis-thyroid-patterns]]. **Hypercalcaemia with a mid-range PTH** — non-suppressed means autonomous. **Which dynamic test to order** — suppress the suspected excess, stimulate the suspected deficiency. **Which of these is physiological positive feedback** — the LH surge and the oxytocin-parturition loop, and the discriminator is that each is ended by an event. **Why the patient collapsed after stopping steroids** — suppressed CRH and ACTH with an atrophic zona fasciculata."
    }
  ],
  "mnemonics": [
    {
      "hook": "Read the pair, never the number",
      "expansion": [
        "High trophic with low target: the gland has failed",
        "Low or normal trophic with low target: the pituitary has failed",
        "Suppressed trophic with high target: autonomy or an exogenous source",
        "High trophic with high target: a trophic tumour or end-organ resistance"
      ]
    },
    {
      "hook": "Suppress the excess, stimulate the deficiency",
      "expansion": [
        "Suspect Cushing: overnight dexamethasone suppression",
        "Suspect acromegaly: growth hormone during an oral glucose load",
        "Suspect aldosteronism: saline or fludrocortisone suppression",
        "Suspect deficiency: Synacthen, insulin tolerance or glucagon stimulation"
      ]
    }
  ],
  "traps": [
    {
      "questionCategory": "A normal TSH in a patient with a low free T4",
      "wrongInstinct": "TSH is within the reference range, so the axis is intact and the low free T4 is an assay artefact or a binding-protein effect",
      "rightAnswer": "A normal TSH is inappropriate when free T4 is low — this is central hypothyroidism until the pituitary is shown to be normal",
      "why": "In a high-gain negative loop a falling controlled variable must drive the trophic hormone up, so a trophic hormone that has not moved is itself the abnormal result."
    },
    {
      "questionCategory": "Stopping a long course of glucocorticoid",
      "wrongInstinct": "The underlying disease has resolved and the dose is modest, so the steroid can simply be stopped",
      "rightAnswer": "Months of exogenous glucocorticoid have suppressed CRH and ACTH and atrophied the zona fasciculata, so the dose must be tapered and stress cover provided",
      "why": "The hypothalamus cannot tell prednisolone from cortisol, and recovery of the suppressed axis takes 6 to 12 months while the drug itself clears within a day."
    }
  ],
  "quiz": [
    {
      "id": "q1",
      "stem": "A 34-year-old woman has six months of fatigue, amenorrhoea and cold intolerance. Free T4 is 7.1 pmol/L (reference 12 to 22), TSH is 1.4 mU/L (reference 0.4 to 4.0), prolactin is normal and 0900 cortisol is 110 nmol/L. The correct interpretation is:",
      "options": [
        {
          "id": "a",
          "text": "Normal thyroid axis, since TSH lies within its reference range"
        },
        {
          "id": "b",
          "text": "Primary hypothyroidism with an early, not yet elevated, TSH"
        },
        {
          "id": "c",
          "text": "Hypopituitarism — the TSH is inappropriately normal for a low free T4, and the low cortisol and amenorrhoea indicate multiple axes are involved"
        },
        {
          "id": "d",
          "text": "Sick euthyroid syndrome, which requires no further investigation"
        }
      ],
      "answerId": "c",
      "explanation": "The thyroid axis has very high gain, so a free T4 at roughly half the lower reference limit should have driven TSH to well above 10 mU/L. A TSH that has not moved is inappropriately normal and localises the lesion above the thyroid. The concurrent low 0900 cortisol and amenorrhoea point to loss of the corticotroph and gonadotroph axes as well, so this is hypopituitarism and needs pituitary imaging. Primary hypothyroidism would show a high TSH by definition. Critically, the glucocorticoid deficiency must be replaced before thyroxine, since thyroxine accelerates cortisol clearance and can precipitate an adrenal crisis.",
      "tests": "investigation"
    },
    {
      "id": "q2",
      "stem": "Which statement best captures why the midcycle LH surge is a genuine example of physiological positive feedback rather than a pathological vicious cycle?",
      "options": [
        {
          "id": "a",
          "text": "It is driven by a hormone that acts through a nuclear receptor, which limits its magnitude"
        },
        {
          "id": "b",
          "text": "Sustained high oestradiol promotes positive feedback at the hypothalamus and pituitary; ovulation and luteal transition change the signal and terminate the surge"
        },
        {
          "id": "c",
          "text": "It is opposed throughout by simultaneous negative feedback from progesterone, which caps the peak"
        },
        {
          "id": "d",
          "text": "The pituitary contains only a fixed store of LH, so the surge stops when that store is exhausted"
        }
      ],
      "answerId": "b",
      "explanation": "Physiological positive feedback is always transient and always carries a terminating event. Oestradiol above roughly 200 pg/mL sustained for 36 to 48 hours reverses the sign of granulosa feedback on the gonadotroph, generating a surge that would otherwise run away. It stops because ovulation, about 36 hours after the surge begins, physically removes the oestradiol-producing follicle and replaces it with a progesterone-dominant corpus luteum that restores negative feedback. Progesterone rises only after the surge, so it does not cap it; store depletion is not the mechanism, as gonadotropin synthesis continues throughout. The identical logic applies to the oxytocin loop of labour, which ends at delivery.",
      "tests": "mechanism"
    },
    {
      "id": "q3",
      "stem": "A 58-year-old man has taken prednisolone 15 mg daily for nine months for polymyalgia rheumatica. His symptoms have resolved and he stops the drug himself. Three days later he presents with vomiting, postural hypotension and a sodium of 128 mmol/L. The mechanism and the correct management are:",
      "options": [
        {
          "id": "a",
          "text": "Mineralocorticoid excess from the prednisolone; give intravenous saline alone and observe"
        },
        {
          "id": "b",
          "text": "Rebound inflammation from the underlying disease; restart prednisolone at the original dose indefinitely"
        },
        {
          "id": "c",
          "text": "Suppressed CRH and ACTH with an atrophic zona fasciculata; give hydrocortisone and fluids now, then reintroduce and taper glucocorticoid slowly"
        },
        {
          "id": "d",
          "text": "Primary adrenal autoimmune failure unmasked by the steroid; start fludrocortisone before any glucocorticoid"
        }
      ],
      "answerId": "c",
      "explanation": "The hypothalamus and pituitary read prednisolone as cortisol, so nine months of supraphysiological exposure suppresses CRH and ACTH and the zona fasciculata atrophies. Prednisolone clears within a day while the axis takes 6 to 12 months to recover, and the gap is an adrenal crisis. Treatment is immediate parenteral hydrocortisone with fluids, then a slow taper with stress-dose cover for illness and surgery. Note that this is secondary adrenal insufficiency, so the renin-angiotensin-aldosterone system and hence the zona glomerulosa are preserved and fludrocortisone is not required; the hyponatraemia here reflects cortisol deficiency permitting excess ADH rather than mineralocorticoid loss.",
      "tests": "treatment"
    }
  ]
};

export default ghpEndocrineFeedbackControlPrinciples;
