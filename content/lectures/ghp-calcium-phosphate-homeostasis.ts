import type { Lecture } from '../../lib/types';

export const ghpCalciumPhosphateHomeostasis: Lecture = {
  "id": "ghp-calcium-phosphate-homeostasis",
  "title": "Calcium & Phosphate Homeostasis",
  "system": "endocrine",
  "source": "Ch 80 — Parathyroid Hormone, Calcitonin, Vitamin D & Bone",
  "updated": "2026-09-15",
  "tags": [
    {
      "kind": "system",
      "label": "Endocrine"
    },
    {
      "kind": "lecture",
      "label": "Ch 80 PTH, Calcitonin, Vitamin D & Bone"
    },
    {
      "kind": "mechanism",
      "label": "Free ionised calcium is the regulated variable"
    },
    {
      "kind": "mechanism",
      "label": "PTH lowers phosphate, vitamin D raises it"
    },
    {
      "kind": "exam",
      "label": "Alkalosis, tetany and a normal total calcium"
    }
  ],
  "highYield": [
    "**Ionised calcium is the biologically active regulated fraction.** Roughly half of plasma calcium is ionised, with the remainder bound to proteins or complexed with anions. Hypoalbuminaemia can lower total calcium without lowering ionised calcium. A commonly used estimate is corrected calcium (mmol/L) = measured calcium + 0.02 × [40 − albumin (g/L)], but correction equations can be inaccurate, especially in kidney disease or critical illness. Direct ionised calcium is preferable when the distinction matters.",
    "**pH changes calcium binding even when total calcium stays similar.** Alkalosis increases calcium binding to albumin and can lower ionised calcium enough to produce paraesthesia or tetany; acidosis tends to reduce binding. A normal total calcium therefore does not exclude a symptomatic ionised-calcium disturbance. Citrate can also lower ionised calcium by complexing it, a different mechanism from altered albumin binding.",
    "**The parathyroid senses ionised calcium directly through CaSR.** Activation of the calcium-sensing receptor suppresses PTH secretion; falling calcium removes that suppression. This loop does not require a pituitary tropic hormone, but it is not the only endocrine system controlled by an ion. Inactivating CaSR variants can cause familial hypocalciuric hypercalcaemia, whereas activating variants can cause hypocalcaemia. A low calcium-to-creatinine clearance ratio supports FHH in the right setting, but overlaps and effects of renal function, vitamin D status and drugs prevent it from being an absolute discriminator.",
    "**PTH raises calcium while promoting renal phosphate loss.** It increases renal calcium reabsorption, reduces proximal phosphate reabsorption and stimulates renal calcitriol production. Its stimulation of osteoclast-mediated resorption is mainly indirect through osteoblast-lineage and osteocyte signals, including RANKL. Calcitriol then increases intestinal mineral absorption. Because renal phosphate handling affects the net result, phosphate is a useful clue rather than a standalone identification of the cause of hypercalcaemia. Measure PTH and interpret kidney function and the wider context.",
    "**Calcitriol and FGF23 add another control loop.** Calcitriol promotes intestinal calcium and phosphate absorption. FGF23 from bone promotes renal phosphate excretion and reduces calcitriol production, whereas PTH stimulates calcitriol production. Reduced kidney function changes all of these relationships through phosphate retention, altered vitamin D metabolism and secondary hyperparathyroidism. Continue with [[ghp-bone-remodelling-vitamin-d]] and [[hen1-pth-regulation-actions]].",
    "**Calcitonin is not an equal mirror image of PTH in adult calcium balance.** Thyroid C cells release it in response to calcium and it can inhibit osteoclast activity, but its contribution to ordinary adult calcium homeostasis is relatively modest compared with PTH and vitamin D. Loss of calcitonin alone usually does not produce a major calcium disorder. Hypocalcaemia after thyroid surgery can instead reflect parathyroid injury, so thyroidectomy cannot be treated as an isolated calcitonin experiment. See [[hen1-calcitonin-mineral-integration]]."
  ],
  "mechanism": {
    "title": "Ionised calcium falls → CaSR occupancy falls → PTH released → kidney retains calcium and wastes phosphate → 1-alpha-hydroxylase induced → bone and gut recruited → ionised calcium restored",
    "steps": [
      {
        "id": "s1",
        "label": "Free ionised calcium falls — by true loss, or merely by alkalosis exposing albumin binding sites",
        "detail": "The sensor reads the ionised fraction only, which is why a pH shift alone can trigger the whole loop with an unchanged total calcium",
        "emphasis": "key"
      },
      {
        "id": "s2",
        "label": "Occupancy of the calcium-sensing receptor on the chief cell falls, releasing PTH secretion from inhibition within seconds",
        "emphasis": "key"
      },
      {
        "id": "s3",
        "label": "In the distal nephron PTH increases calcium reabsorption — the fastest arm, acting within minutes",
        "emphasis": "normal"
      },
      {
        "id": "s4",
        "label": "In the proximal tubule PTH internalises the NaPi-II co-transporters, so phosphate is wasted in the urine",
        "detail": "This is what makes PTH selective for calcium: bone releases the two minerals together, and the kidney throws the phosphate away",
        "emphasis": "key"
      },
      {
        "id": "s5",
        "label": "PTH stimulates the osteoblast lineage, which in turn recruits osteoclasts to release calcium and phosphate from bone over hours",
        "emphasis": "normal"
      },
      {
        "id": "s6",
        "label": "PTH induces renal 1-alpha-hydroxylase, and the calcitriol produced raises gut absorption of calcium over days — the slow, definitive arm",
        "emphasis": "key"
      }
    ],
    "branches": [
      {
        "fromId": "s4",
        "title": "Why the phosphate direction identifies the hormone",
        "steps": [
          {
            "id": "p1",
            "label": "PTH: calcium up, phosphate down, calcitriol up — hyperparathyroidism and PTH-related peptide both read this way",
            "emphasis": "key"
          },
          {
            "id": "p2",
            "label": "Vitamin D: calcium up and phosphate up together, with PTH suppressed",
            "emphasis": "key"
          },
          {
            "id": "p3",
            "label": "FGF23: phosphate down and calcitriol down together, with calcium normal — the pattern of tumour-induced osteomalacia",
            "emphasis": "normal"
          }
        ]
      }
    ]
  },
  "examFindings": [
    {
      "sign": "Perioral tingling and carpopedal spasm in an anxious, hyperventilating patient whose total serum calcium is 2.35 mmol/L",
      "mechanism": "Respiratory alkalosis strips protons from albumin and exposes calcium binding sites, so the ionised fraction falls while total calcium is untouched",
      "significance": "key"
    },
    {
      "sign": "Total calcium 1.94 mmol/L in a patient with nephrotic syndrome and an albumin of 18 g/L, with no tetany and a normal QT interval",
      "mechanism": "The deficit is entirely in the protein-bound fraction; correcting for albumin returns the value to normal and the ionised calcium was never low",
      "significance": "key"
    },
    {
      "sign": "Calcium 2.72 mmol/L with a non-suppressed PTH, present on records for 20 years, with a 24-hour urine calcium that is frankly low",
      "mechanism": "An inactivating calcium-sensing receptor mutation makes both parathyroid and thick ascending limb under-read calcium, so PTH is not suppressed and the kidney avidly retains calcium — familial hypocalciuric hypercalcaemia, not an adenoma",
      "significance": "key"
    },
    {
      "sign": "Hypercalcaemia with a raised phosphate and a fully suppressed PTH in a patient taking high-dose cholecalciferol",
      "mechanism": "Vitamin D raises calcium and phosphate together because it has no phosphaturic action, and the hypercalcaemia then suppresses the parathyroid appropriately",
      "significance": "key"
    },
    {
      "sign": "Persistent hypophosphataemia with phosphaturia, a normal calcium, a normal PTH and an inappropriately low calcitriol in an adult with bone pain and proximal weakness",
      "mechanism": "FGF23 excess wastes phosphate and suppresses 1-alpha-hydroxylase simultaneously, which is why the calcitriol is low rather than appropriately high — tumour-induced osteomalacia",
      "significance": "supportive"
    },
    {
      "sign": "A calcitonin of several thousand ng/L in medullary thyroid carcinoma with an entirely normal serum calcium",
      "mechanism": "Calcitonin is not a physiological regulator of calcium in humans; gross excess produces no hypocalcaemia and total thyroidectomy produces no hypercalcaemia",
      "significance": "supportive"
    }
  ],
  "investigations": [
    {
      "clue": "Normal total calcium during acute respiratory alkalosis",
      "meaning": "Ionised calcium may still be low because albumin binding has increased."
    },
    {
      "clue": "Calcium-to-creatinine clearance ratio below 0.01 with familial lifelong hypercalcaemia",
      "meaning": "Supports FHH, but does not by itself exclude primary hyperparathyroidism; renal function, vitamin D and medication effects matter."
    },
    {
      "clue": "Hypercalcaemia with low phosphate",
      "meaning": "Compatible with PTH or PTHrP-mediated phosphaturia; measure PTH rather than diagnosing from phosphate alone."
    },
    {
      "clue": "Raised FGF23",
      "meaning": "Promotes phosphate excretion and reduces calcitriol production, provided the kidneys can respond."
    }
  ],
  "treatment": [
    {
      "logic": "Why it matters",
      "detail": "Distinguish total from ionised calcium, then interpret PTH relative to the calcium concentration. Calcium and phosphate patterns suggest mechanisms but do not establish a diagnosis in isolation."
    },
    {
      "logic": "Where it is examined",
      "detail": "Explain alkalosis-induced tetany, compare PTH with calcitriol and FGF23, and recognise the limitations of albumin correction and urinary calcium indices."
    }
  ],
  "mnemonics": [
    {
      "hook": "PTH: calcium up, phosphate down. Vitamin D: both up",
      "expansion": [
        "High calcium, low phosphate: primary hyperparathyroidism or PTH-related peptide of malignancy",
        "High calcium, high phosphate: vitamin D excess, with PTH suppressed",
        "Low calcium, high phosphate: hypoparathyroidism, or renal failure that cannot excrete phosphate",
        "Low calcium, low phosphate: vitamin D deficiency, phosphate wasted by the secondary PTH response"
      ]
    },
    {
      "hook": "Alkalosis binds it, acidosis frees it",
      "expansion": [
        "Albumin binding sites are occupied by protons in acidosis and exposed in alkalosis",
        "Alkalosis therefore lowers ionised calcium with a completely normal total — the hyperventilating patient with carpopedal spasm",
        "Acidosis raises ionised calcium and can mask a genuine deficit until the acidosis is corrected",
        "Which is why treating the acidosis of renal failure can precipitate tetany"
      ]
    }
  ],
  "traps": [
    {
      "questionCategory": "Whether a normal total calcium excludes a calcium problem",
      "wrongInstinct": "The total calcium is 2.35 mmol/L, so tetany in this patient cannot be due to hypocalcaemia and must be functional or psychogenic",
      "rightAnswer": "Alkalosis increases albumin binding and lowers the ionised fraction while leaving the total untouched, which is genuine symptomatic hypocalcaemia",
      "why": "Only the ionised half is sensed and only it acts on excitable membranes — the total is a proxy that pH and albumin both break, in opposite ways."
    },
    {
      "questionCategory": "Calcitonin in adult physiology",
      "wrongInstinct": "Calcitonin is the equal and opposite counterpart of PTH in routine adult calcium regulation.",
      "rightAnswer": "Calcitonin has biological actions but a relatively modest role in ordinary adult calcium homeostasis.",
      "why": "Calcium disturbances after thyroid surgery require consideration of parathyroid function, not only calcitonin loss."
    }
  ],
  "quiz": [
    {
      "id": "q1",
      "stem": "A 24-year-old presents to the emergency department with perioral paraesthesia and painful spasm of both hands after an argument. Respiratory rate is 34 per minute. Arterial pH is 7.55, PaCO2 is 3.1 kPa. Total serum calcium is 2.36 mmol/L and albumin is 42 g/L. The mechanism of her symptoms is:",
      "options": [
        {
          "id": "a",
          "text": "A true fall in total body calcium driven by renal calcium loss during the alkalosis"
        },
        {
          "id": "b",
          "text": "Increased binding of calcium to albumin as alkalosis exposes binding sites, lowering the ionised fraction"
        },
        {
          "id": "c",
          "text": "Alkalosis-induced release of PTH causing acute redistribution of calcium into bone"
        },
        {
          "id": "d",
          "text": "Direct hyperexcitability of motor nerves caused by the low PaCO2 itself, independent of calcium"
        }
      ],
      "answerId": "b",
      "explanation": "Albumin binding sites for calcium are occupied by hydrogen ions. Alkalosis strips those protons away, exposes the sites and shifts calcium from the free to the bound pool, so the ionised concentration falls while the total is unchanged — which is why the reported calcium here is normal. Since only the ionised fraction acts on excitable membranes, the patient has genuine symptomatic hypocalcaemia and will show Trousseau and Chvostek signs. No calcium has left the body, which is why rebreathing reverses it in minutes. PTH would if anything rise in response to the fall in ionised calcium rather than cause it.",
      "tests": "mechanism"
    },
    {
      "id": "q2",
      "stem": "Two patients have hypercalcaemia. Patient A has low phosphate and patient B has raised phosphate. Which interpretation best respects the limits of these results?",
      "options": [
        {
          "id": "a",
          "text": "A is compatible with PTH or PTHrP-mediated phosphate loss; B can fit vitamin D-mediated disease, but PTH and kidney function are needed to distinguish causes"
        },
        {
          "id": "b",
          "text": "B is PTH-driven and A is not, because bone resorption releases calcium and phosphate in the ratio they are stored"
        },
        {
          "id": "c",
          "text": "Both are PTH-driven, since phosphate varies mainly with dietary intake and cannot discriminate"
        },
        {
          "id": "d",
          "text": "A has malignancy and B has hyperparathyroidism, since tumour-derived factors do not act on the PTH receptor"
        }
      ],
      "answerId": "a",
      "explanation": "PTH and PTHrP promote renal phosphate loss, whereas calcitriol increases intestinal absorption of both minerals. Renal impairment and other influences can change the expected patterns. Phosphate is therefore a clue; it cannot establish whether a hypercalcaemia is PTH-dependent without a PTH measurement and context.",
      "tests": "investigation"
    },
    {
      "id": "q3",
      "stem": "A 41-year-old man is found to have a serum calcium of 2.74 mmol/L with a PTH in the upper half of the reference range. Records show similar values eight and fifteen years ago. His 24-hour urinary calcium is low and the calcium-to-creatinine clearance ratio is 0.006. Two siblings have mild hypercalcaemia. The correct next step in reasoning is:",
      "options": [
        {
          "id": "a",
          "text": "Localise a parathyroid adenoma with sestamibi imaging and proceed to parathyroidectomy"
        },
        {
          "id": "b",
          "text": "Suspect familial hypocalciuric hypercalcaemia and confirm the pattern before considering parathyroid surgery"
        },
        {
          "id": "c",
          "text": "Investigate for humoral hypercalcaemia of malignancy, since the PTH is not fully suppressed"
        },
        {
          "id": "d",
          "text": "Treat as vitamin D toxicity, since the PTH is inappropriately high for the calcium"
        }
      ],
      "answerId": "b",
      "explanation": "Longstanding familial mild hypercalcaemia, a non-suppressed PTH and low calcium clearance strongly support FHH. The clearance ratio overlaps with other states and is affected by renal function, vitamin D and medications; clinical and, where appropriate, genetic evaluation helps establish the diagnosis. The biochemical pattern alone does not justify parathyroid surgery.",
      "tests": "disease"
    }
  ]
};

export default ghpCalciumPhosphateHomeostasis;
