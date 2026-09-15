import type { Lecture } from '../../lib/types';

export const ghpAnteriorPituitaryHypothalamicControl: Lecture = {
  "id": "ghp-anterior-pituitary-hypothalamic-control",
  "title": "The Anterior Pituitary & Hypothalamic Control",
  "system": "endocrine",
  "source": "Ch 76 — Pituitary Hormones & Their Control by the Hypothalamus",
  "updated": "2026-09-15",
  "tags": [
    {
      "kind": "system",
      "label": "Endocrine"
    },
    {
      "kind": "lecture",
      "label": "Ch 76 Pituitary Hormones & Hypothalamic Control"
    },
    {
      "kind": "mechanism",
      "label": "A glandular lobe reached only by portal blood, driven by net stimulation"
    },
    {
      "kind": "exam",
      "label": "Cut the stalk and everything falls except prolactin, which rises"
    }
  ],
  "highYield": [
    "**The two pituitary lobes are not two halves of one gland; they are two different organs sharing a fossa.** The **anterior lobe is glandular epithelium derived from Rathke's pouch**, an upgrowth of oral ectoderm, and it receives **no significant innervation at all** — it can only be reached chemically. The **posterior lobe is nervous tissue**, a downgrowth of the diencephalon, consisting of the **axon terminals of hypothalamic neurons** that fire directly. Every contrast that follows is a consequence: the anterior lobe is controlled by **releasing and inhibiting hormones carried in portal blood** and responds over **minutes to hours**, while the posterior lobe is controlled by **action potentials** and responds in **seconds**. One is a gland told what to do; the other is a nerve ending that happens to sit outside the brain.",
    "**The hypophyseal portal system is the whole design, and it explains both the physiology and the commonest pituitary catastrophe.** The superior hypophyseal artery feeds a **primary capillary plexus in the median eminence**, where hypothalamic axons dump their peptides; **long portal veins** carry that blood down the stalk to a **secondary plexus** among the anterior pituitary cells. Because the releasing hormones are delivered **without systemic dilution**, they arrive at concentrations orders of magnitude above anything measurable in peripheral blood — which is why **nanogram quantities of GnRH or CRH control an entire axis**, and why **measuring CRH or GHRH in a peripheral vein is diagnostically worthless**. The cost of that arrangement is that the anterior lobe is perfused almost entirely by **portal venous blood that has already traversed a capillary bed**, leaving it uniquely intolerant of hypotension.",
    "**Every hypothalamic signal to the anterior lobe is net stimulatory except one — and that exception generates the most useful discriminator in pituitary medicine.** TRH drives TSH, CRH drives ACTH, GnRH drives LH and FSH, GHRH drives growth hormone (opposed by somatostatin). **Prolactin alone sits under tonic inhibition, by dopamine reaching the lactotroph through the portal vessels.** Therefore **anything that interrupts the stalk raises prolactin while lowering everything else**: transection, a large sellar mass compressing the stalk, infiltration, and — pharmacologically — **dopamine antagonists such as antipsychotics and metoclopramide**. Stalk section is the cleanest demonstration in endocrinology that a hormone can be released by *removing* a signal rather than by adding one.",
    "**Distinguishing stalk effect from a prolactinoma is a numbers game, and getting it wrong means giving the wrong treatment to a tumour that will not respond.** A **prolactinoma secretes in proportion to its mass**: a macroprolactinoma over 1 cm typically gives prolactin **above 5000 mIU/L**, and a very large one far higher. **Stalk compression by a non-functioning adenoma only disinhibits the normal lactotrophs**, so it rarely pushes prolactin beyond **2000–3000 mIU/L**. Hence the rule: **a large sellar mass with only a modestly raised prolactin is not a prolactinoma** — it is a non-secreting adenoma compressing the stalk, and a dopamine agonist will lower the prolactin without shrinking the tumour. The mirror trap is the **hook effect**: prolactin so high that it saturates both immunoassay antibodies and reads falsely low, resolved by **repeating the assay on a diluted sample**.",
    "**Growth hormone is pulsatile, largely nocturnal and works mostly through a mediator, which dictates how it must be measured.** Secretion occurs in **bursts, with the largest during slow-wave sleep**, so **a random growth hormone level is uninterpretable** — normal between pulses in acromegaly, and high after a pulse in a healthy person. Growth itself is mediated by **hepatic IGF-1**, which is not pulsatile and therefore serves as the **screening test**; confirmation uses the feedback rule, **failure of growth hormone to suppress during an oral glucose load**. The **direct** actions of growth hormone are the opposite of its growth-promoting reputation: **lipolysis, reduced peripheral glucose uptake and insulin antagonism**, which is why acromegaly is **diabetogenic** in roughly a quarter of patients. **Gigantism and acromegaly are the same disease and the same hormone; the only variable is whether the epiphyses have closed.**",
    "**Compression takes the anterior hormones in a reproducible order, and the last one lost is the one that kills.** A slowly enlarging mass characteristically removes **growth hormone first, then the gonadotropins, then TSH, and ACTH last**. Clinically this reads as reduced wellbeing and body composition change, then **amenorrhoea or loss of libido**, then hypothyroid symptoms, then **adrenal insufficiency**. Two riders matter. **Central adrenal insufficiency spares aldosterone**, because the zona glomerulosa answers to renin and potassium rather than ACTH — so there is hypotension and hyponatraemia but **no hyperkalaemia and no hyperpigmentation**. And **glucocorticoid must be replaced before thyroxine**, since thyroxine accelerates cortisol clearance and can precipitate a crisis in an unreplaced patient. Local mass effect adds **bitemporal hemianopia** from chiasmal compression."
  ],
  "mechanism": {
    "title": "Two embryological origins → portal delivery instead of innervation → net stimulatory drive except dopamine → stalk lesions invert prolactin → ordered hormone loss under compression",
    "steps": [
      {
        "id": "s1",
        "label": "The anterior lobe is glandular epithelium from Rathke's pouch; the posterior lobe is neural tissue, the axon terminals of hypothalamic neurons",
        "detail": "Different germ layers, different control signals, different response times — the single fact from which every other contrast between the lobes follows.",
        "emphasis": "key"
      },
      {
        "id": "s2",
        "label": "The anterior lobe has essentially no innervation and is reached only by hypophyseal portal blood from the median eminence",
        "detail": "Superior hypophyseal artery, primary plexus in the median eminence, long portal veins down the stalk, secondary plexus among the secretory cells.",
        "emphasis": "key"
      },
      {
        "id": "s3",
        "label": "Releasing hormones arrive undiluted at very high local concentration, so nanogram amounts control an axis and peripheral assay of them is useless",
        "detail": "This is why CRH and GHRH are never measured peripherally, and why inferior petrosal sinus sampling is needed to localise ACTH excess.",
        "emphasis": "key"
      },
      {
        "id": "s4",
        "label": "Every hypothalamic signal is net stimulatory except dopamine, which tonically inhibits prolactin",
        "detail": "TRH drives TSH, CRH drives ACTH, GnRH drives LH and FSH, GHRH drives growth hormone against somatostatin — but the lactotroph is being held down, not pushed.",
        "emphasis": "key"
      },
      {
        "id": "s5",
        "label": "Interrupt the stalk and every anterior hormone falls except prolactin, which rises because inhibition has been removed",
        "detail": "The same logic covers dopamine antagonists, stalk compression by any mass, and infiltrative disease, and it is why hyperprolactinaemia is the most common endocrine finding with a large sellar tumour.",
        "emphasis": "key"
      },
      {
        "id": "s6",
        "label": "Progressive compression removes growth hormone, then gonadotropins, then TSH, then ACTH — and ACTH loss is the dangerous one",
        "detail": "Central adrenal insufficiency spares aldosterone, so expect hypotension and hyponatraemia without hyperkalaemia or hyperpigmentation.",
        "emphasis": "danger"
      }
    ],
    "branches": [
      {
        "fromId": "s2",
        "title": "Why the anterior lobe infarcts",
        "steps": [
          {
            "id": "b1",
            "label": "The anterior lobe has almost no direct arterial supply — it lives on portal blood that has already passed through a capillary bed",
            "emphasis": "normal"
          },
          {
            "id": "b2",
            "label": "Pregnancy roughly doubles lactotroph mass and gland volume without a matching increase in perfusion reserve",
            "emphasis": "normal"
          },
          {
            "id": "b3",
            "label": "Post-partum haemorrhage infarcts the enlarged lobe — Sheehan syndrome, presenting as failure to lactate, then amenorrhoea and panhypopituitarism",
            "emphasis": "danger"
          }
        ]
      }
    ]
  },
  "examFindings": [
    {
      "sign": "A 3 cm sellar mass with bitemporal field loss, prolactin 1650 mIU/L, low LH and FSH, low free T4 with a low-normal TSH and a low IGF-1",
      "mechanism": "Stalk compression removes dopaminergic inhibition of the lactotroph while interrupting every stimulatory releasing hormone — the modest prolactin rise identifies a non-functioning adenoma rather than a prolactinoma",
      "significance": "key"
    },
    {
      "sign": "A young woman with galactorrhoea, amenorrhoea and a prolactin of 14 000 mIU/L with a 1.5 cm pituitary lesion",
      "mechanism": "A prolactinoma secretes in proportion to its mass, so a level several-fold above the stalk-effect ceiling identifies autonomous lactotroph tissue that will shrink on a dopamine agonist",
      "significance": "key"
    },
    {
      "sign": "Galactorrhoea and amenorrhoea developing weeks after starting risperidone or metoclopramide, with normal pituitary imaging",
      "mechanism": "Blockade of lactotroph D2 receptors reproduces stalk section pharmacologically — the inhibitory signal is removed while the gland and stalk are anatomically intact",
      "significance": "key"
    },
    {
      "sign": "Enlarging hands and feet, prognathism, ring and shoe size increasing in a 45-year-old of entirely normal height",
      "mechanism": "Growth hormone excess after epiphyseal fusion can no longer lengthen long bones, so it thickens acral and membranous bone and soft tissue instead — the same hormone that would have produced gigantism in a child",
      "significance": "key"
    },
    {
      "sign": "A woman who fails to lactate after a delivery complicated by major haemorrhage, and over the following months develops amenorrhoea, fatigue and hypotension",
      "mechanism": "Infarction of the pregnancy-enlarged anterior lobe, which is perfused by portal venous blood and has minimal arterial reserve; the posterior lobe, supplied directly by the inferior hypophyseal artery, usually survives",
      "significance": "key"
    },
    {
      "sign": "Postural hypotension and a sodium of 126 mmol/L in a patient with a pituitary macroadenoma, but a normal potassium and no hyperpigmentation",
      "mechanism": "Loss of ACTH gives glucocorticoid deficiency while aldosterone, governed by renin and potassium, is preserved; there is also no POMC excess to stimulate melanocytes",
      "significance": "supportive"
    }
  ],
  "investigations": [
    {
      "clue": "The one anatomical fact that makes the two lobes behave as different organs",
      "meaning": "The anterior lobe is glandular tissue from Rathke's pouch with no innervation, reached only by hypophyseal portal blood; the posterior lobe is neural tissue whose axon terminals fire directly. Chemistry over minutes versus action potentials over seconds"
    },
    {
      "clue": "What stalk section does to each anterior hormone",
      "meaning": "Growth hormone, TSH, ACTH, LH and FSH all fall because their stimulatory releasing hormones can no longer reach the gland; prolactin rises because tonic dopaminergic inhibition has been lifted. This single dissociation identifies a stalk lesion"
    },
    {
      "clue": "Separating stalk-effect hyperprolactinaemia from a prolactinoma",
      "meaning": "Stalk compression only disinhibits normal lactotrophs and rarely exceeds 2000 to 3000 mIU/L; a macroprolactinoma usually exceeds 5000 mIU/L and rises with tumour size. A big mass with a small prolactin is a non-functioning adenoma. If a huge mass gives a paradoxically normal prolactin, repeat on a diluted sample to exclude the hook effect"
    },
    {
      "clue": "Why a random growth hormone level answers nothing",
      "meaning": "Secretion is pulsatile and concentrated in slow-wave sleep, so it is normal between pulses in acromegaly and high after a pulse in health. Screen with IGF-1, which integrates over days, then confirm excess by failure to suppress during an oral glucose load, or deficiency by insulin tolerance or glucagon stimulation"
    },
    {
      "clue": "The order in which anterior pituitary hormones are lost under compression",
      "meaning": "Growth hormone, then the gonadotropins, then TSH, then ACTH. The first loss is the least noticed and the last is the one that kills, so any new pituitary mass needs a 0900 cortisol regardless of how well the patient looks"
    },
    {
      "clue": "Why glucocorticoid must be replaced before thyroxine in hypopituitarism",
      "meaning": "Thyroid hormone accelerates hepatic cortisol clearance, so starting thyroxine in an ACTH-deficient patient can precipitate adrenal crisis. Cortisol first, always"
    }
  ],
  "treatment": [
    {
      "logic": "Why it matters",
      "detail": "One sentence carries this module: **the anterior pituitary is a gland with no nerve supply, held under net stimulation by portal blood — except the lactotroph, which is held down by dopamine**. From that you can derive stalk section, drug-induced hyperprolactinaemia, why a large mass with a modest prolactin is not a prolactinoma, and why a pituitary that loses its blood supply in Sheehan syndrome fails from the anterior side first. The axis-level detail sits in [[hen1-anterior-pituitary-axes]], the lactotroph in [[hen1-prolactin-lactation]] and the somatotroph in [[hen1-growth-hormone-igf1]]. The neural lobe, which obeys entirely different rules, is in [[ghp-posterior-pituitary-adh-oxytocin]]."
    },
    {
      "logic": "Where it is examined",
      "detail": "Four stems recur almost verbatim. **Which hormone rises after stalk transection** — prolactin, and only prolactin, because it alone was inhibited rather than driven. **A large sellar mass with prolactin under about 2000 mIU/L** — stalk effect from a non-functioning adenoma, so a dopamine agonist is the wrong answer and surgical assessment is the right one. **A normal random growth hormone in suspected acromegaly** — uninterpretable; order IGF-1 and a glucose suppression test. **Gigantism versus acromegaly** — identical hormone and identical tumour, separated only by epiphyseal closure. A fifth asks **what to replace first in new hypopituitarism**, where the answer is hydrocortisone before thyroxine."
    }
  ],
  "mnemonics": [
    {
      "hook": "Cut the stalk: everything falls, prolactin rises",
      "expansion": [
        "GH, TSH, ACTH, LH and FSH all depend on a stimulatory signal arriving through portal blood",
        "Prolactin depends on an inhibitory signal, dopamine, arriving by the same route",
        "Interrupt the route and the five fall while the one is released",
        "Antipsychotics and metoclopramide do the same thing chemically"
      ]
    },
    {
      "hook": "Go Look For The Adenoma — the order hormones are lost",
      "expansion": [
        "Growth hormone first, and least noticed",
        "Luteinising and Follicle-stimulating hormone next: amenorrhoea, loss of libido",
        "Thyroid-stimulating hormone after that",
        "ACTH last, and it is the one that kills — check a 0900 cortisol in every new pituitary mass"
      ]
    }
  ],
  "traps": [
    {
      "questionCategory": "A large pituitary mass with a mildly raised prolactin",
      "wrongInstinct": "Prolactin is high and there is a pituitary tumour, so this is a prolactinoma and cabergoline is the treatment",
      "rightAnswer": "A prolactin of only 1000 to 2500 mIU/L is far too low for a macroprolactinoma; this is stalk compression by a non-functioning adenoma, which needs surgical and ophthalmic assessment",
      "why": "A prolactinoma secretes in proportion to its mass, whereas stalk compression can only disinhibit the normal lactotrophs, so the level and the tumour size must be read against each other rather than separately."
    },
    {
      "questionCategory": "A normal random growth hormone in a patient who looks acromegalic",
      "wrongInstinct": "Growth hormone is within the reference range, so acromegaly is excluded",
      "rightAnswer": "Growth hormone is pulsatile and mainly nocturnal, so a single value proves nothing; measure IGF-1 and confirm with failure to suppress during an oral glucose load",
      "why": "When a hormone is secreted in bursts, the informative measurement is either its non-pulsatile mediator or its behaviour under a provocation that should switch it off."
    }
  ],
  "quiz": [
    {
      "id": "q1",
      "stem": "A 26-year-old man sustains a basal skull fracture that transects the pituitary stalk. Six weeks later, which pattern of anterior pituitary hormones would you expect?",
      "options": [
        {
          "id": "a",
          "text": "All anterior pituitary hormones reduced, including prolactin"
        },
        {
          "id": "b",
          "text": "All anterior pituitary hormones reduced except prolactin, which is elevated"
        },
        {
          "id": "c",
          "text": "All anterior pituitary hormones elevated, since hypothalamic inhibition has been removed"
        },
        {
          "id": "d",
          "text": "Isolated ACTH deficiency, with the remaining hormones unaffected"
        }
      ],
      "answerId": "b",
      "explanation": "The anterior lobe has no innervation and is reached only by hypophyseal portal blood, so transecting the stalk removes every hypothalamic signal at once. Because TRH, CRH, GnRH and GHRH are all stimulatory, their targets fall. Prolactin is the single exception: it is held under tonic inhibition by dopamine arriving through the same portal vessels, so removing the signal disinhibits the lactotroph and prolactin rises, typically into the 1000 to 3000 mIU/L range. This dissociation is essentially pathognomonic of a stalk lesion, and the same physiology explains hyperprolactinaemia from dopamine-antagonist drugs.",
      "tests": "mechanism"
    },
    {
      "id": "q2",
      "stem": "A 52-year-old man has a 2.8 cm sellar mass with suprasellar extension and bitemporal hemianopia. Prolactin remains 1800 mIU/L after sample dilution excludes a high-dose hook effect (upper limit about 400), LH and FSH are low, free T4 is low and IGF-1 is low. The most likely diagnosis and next step are:",
      "options": [
        {
          "id": "a",
          "text": "Macroprolactinoma; start cabergoline and expect the tumour to shrink"
        },
        {
          "id": "b",
          "text": "Non-functioning macroadenoma causing stalk effect; assess for surgical decompression and replace hormones, checking cortisol first"
        },
        {
          "id": "c",
          "text": "Craniopharyngioma; the prolactin rise excludes an adenoma"
        },
        {
          "id": "d",
          "text": "Prolactinoma with hook effect; report the true prolactin as very high and treat medically"
        }
      ],
      "answerId": "b",
      "explanation": "A macroprolactinoma of this size would be expected to produce a prolactin well above 5000 mIU/L, because a prolactinoma secretes in proportion to its mass. A prolactin of 1800 mIU/L is the ceiling of what mere disinhibition of normal lactotrophs can achieve, so the mass is non-secreting and is compressing the stalk. That distinction changes management entirely: a dopamine agonist would lower the prolactin but leave the tumour and the field defect untouched. The hook effect is the reverse artefact, a falsely low prolactin with a very large tumour, and would be excluded by assaying a diluted sample. Whatever the imaging shows, a 0900 cortisol is needed before thyroxine is started. A disproportionately modest prolactin result with a large sellar mass should be checked for assay hook effect; this stem specifies that dilution has excluded it.",
      "tests": "disease"
    },
    {
      "id": "q3",
      "stem": "A 14-year-old boy has grown 22 cm in one year, has enlarging hands and a random growth hormone that is normal. His 44-year-old uncle has coarsening facial features and an identical random growth hormone. The best pair of statements is:",
      "options": [
        {
          "id": "a",
          "text": "The boy has gigantism and the uncle acromegaly; the normal random levels are uninformative, and IGF-1 with an oral glucose suppression test should be done in both"
        },
        {
          "id": "b",
          "text": "Different hormones are involved — the boy has excess IGF-1 and the uncle excess growth hormone"
        },
        {
          "id": "c",
          "text": "Both are excluded, since growth hormone is normal in each"
        },
        {
          "id": "d",
          "text": "Only the uncle needs testing, as constitutional tall stature explains the boy entirely"
        }
      ],
      "answerId": "a",
      "explanation": "Gigantism and acromegaly are one disease with one hormone from one kind of tumour; the only variable is whether the epiphyses have fused. Before fusion the excess drives linear growth, and after it the same excess thickens acral, membranous and soft tissue. A random growth hormone is uninterpretable in either, because secretion occurs in bursts concentrated in slow-wave sleep. The correct approach is IGF-1, which integrates secretion over days and is the mediator of growth, followed by demonstrating failure of growth hormone to suppress below the assay threshold during an oral glucose load, since glucose normally switches somatotroph secretion off.",
      "tests": "investigation"
    }
  ]
};

export default ghpAnteriorPituitaryHypothalamicControl;
