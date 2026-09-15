import type { Lecture } from '../../lib/types';

export const ghpInsulinGlucagonFuelSwitching: Lecture = {
  "id": "ghp-insulin-glucagon-fuel-switching",
  "title": "Insulin, Glucagon & Whole-body Fuel Switching",
  "system": "endocrine",
  "source": "Ch 79 — Insulin, Glucagon & Diabetes Mellitus",
  "updated": "2026-09-15",
  "tags": [
    {
      "kind": "system",
      "label": "Endocrine"
    },
    {
      "kind": "lecture",
      "label": "Ch 79 Insulin, Glucagon & Diabetes"
    },
    {
      "kind": "mechanism",
      "label": "Insulin-to-glucagon ratio sets fuel direction"
    },
    {
      "kind": "mechanism",
      "label": "GLUT4 asymmetry · incretin feedforward"
    },
    {
      "kind": "exam",
      "label": "Brain uptake is insulin-independent"
    }
  ],
  "highYield": [
    "**Insulin and glucagon coordinate fuel storage and release.** A fed state generally increases insulin relative to glucagon, promoting hepatic glycogen synthesis and reducing hepatic glucose production. Fasting shifts the balance toward glucose release and, with prolonged fasting, ketogenesis. The ratio is a useful organising concept, but absolute hormone concentrations, substrate availability and other hormones also matter. Both hormones enter portal blood; hepatic and extrahepatic clearance mean peripheral measurements do not reproduce the precise signal seen by the liver.",
    "**The beta cell couples glucose metabolism to insulin release.** Glucose metabolism through glucokinase-linked sensing raises the ATP-to-ADP ratio. ATP-sensitive potassium channels close, the membrane depolarises, voltage-dependent calcium channels open and calcium triggers granule exocytosis. Insulin is processed from proinsulin and released with C-peptide. Glucose-responsive secretion is also shaped by amino acids, autonomic input and incretins. This gives a mechanism for distinguishing a trigger of secretion from a modifier of its magnitude.",
    "**Insulin acts through a receptor tyrosine kinase and has tissue-specific effects.** In muscle and adipose tissue, signalling promotes GLUT4 recruitment to the surface and increases glucose uptake. It also promotes storage and protein synthesis and suppresses adipose lipolysis. Hepatic glucose transport is not controlled by GLUT4; insulin instead strongly changes hepatic metabolism and net glucose output. Brain and red-cell glucose uptake are largely insulin independent, but insulin-deficient emergencies can still impair consciousness through other metabolic and circulatory disturbances.",
    "**Glucagon primarily tells the liver to release fuel.** Its Gs-coupled receptor raises cAMP and activates signalling that supports glycogenolysis, gluconeogenesis and, in the appropriate metabolic setting, ketogenesis. Glucagon does not directly switch on skeletal-muscle glycogen breakdown in the same way; muscle responds to contraction, calcium, energy demand and catecholamines. Hepatic glycogen supports blood glucose, whereas muscle glycogen largely supports the muscle using it.",
    "**Incretins explain why route of glucose delivery changes insulin secretion.** GIP and GLP-1 released in response to intestinal nutrients amplify glucose-stimulated beta-cell secretion. Oral glucose can therefore produce more secretion than intravenous glucose at the same plasma glucose profile. C-peptide-based secretion estimates help separate secretion from differences in insulin clearance. A protein meal can stimulate both insulin and glucagon: insulin supports amino-acid utilisation while glucagon helps maintain hepatic glucose output in the absence of a large carbohydrate input.",
    "**Islet signalling and exercise add further control.** Somatostatin from delta cells inhibits both insulin and glucagon release through local signalling, while neural inputs coordinate secretion with feeding or stress. Contracting skeletal muscle can increase GLUT4-mediated uptake through pathways that do not require the immediate insulin signal, and insulin sensitivity can remain increased after exercise. These mechanisms explain why one insulin concentration can accompany different rates of fuel use. Failure of the integrated control is explored in [[ghp-diabetes-pathophysiology-complications]]."
  ],
  "mechanism": {
    "title": "Nutrients reach the mucosa → incretins warn the islet → portal insulin-to-glucagon ratio swings up → liver switches to storage → GLUT4 opens muscle and fat → lipolysis is shut last of all",
    "steps": [
      {
        "id": "s1",
        "label": "Nutrients contact the gut mucosa and K and L cells release GIP and GLP-1 before absorption is complete",
        "detail": "Feedforward, not feedback: the islet is told what is coming rather than told what has already happened",
        "emphasis": "key"
      },
      {
        "id": "s2",
        "label": "Beta cells secrete into the portal vein while alpha cells are suppressed by glucose and by insulin itself — the ratio swings upward",
        "emphasis": "key"
      },
      {
        "id": "s3",
        "label": "The liver extracts about half the insulin on first pass and almost no glucagon, so it experiences a ratio two to three times the peripheral one",
        "detail": "This is why hepatic effects appear at insulin levels that do nothing to muscle, and why C-peptide outlives insulin in the periphery",
        "emphasis": "key"
      },
      {
        "id": "s4",
        "label": "Hepatic glucose output stops and glycogen synthesis begins — the liver flips from supplier to sink",
        "emphasis": "normal"
      },
      {
        "id": "s5",
        "label": "Akt signalling translocates GLUT4 to the membrane in muscle and adipose tissue, which now take up around 80 per cent of the load",
        "detail": "Brain, liver and red cells never needed the invitation; only these two tissues gate glucose on insulin",
        "emphasis": "key"
      },
      {
        "id": "s6",
        "label": "At the lowest insulin concentrations of all, hormone-sensitive lipase is inhibited and fatty acid release ceases — the action gained first and lost last",
        "emphasis": "key"
      }
    ],
    "branches": [
      {
        "fromId": "s2",
        "title": "The fasting limb — the same axis run backwards",
        "steps": [
          {
            "id": "f1",
            "label": "Glucose falls, insulin secretion is withdrawn and the alpha cell is released from suppression — the ratio inverts",
            "emphasis": "key"
          },
          {
            "id": "f2",
            "label": "Glucagon drives hepatic glycogenolysis for the first 12 to 24 hours, then gluconeogenesis takes over",
            "emphasis": "normal"
          },
          {
            "id": "f3",
            "label": "Only when insulin falls far enough to release hormone-sensitive lipase does fat mobilisation and ketogenesis begin",
            "emphasis": "normal"
          }
        ]
      }
    ]
  },
  "examFindings": [
    {
      "sign": "A subject given an intravenous glucose infusion titrated to reproduce the venous glucose curve of an earlier oral load secretes less than half as much insulin",
      "mechanism": "The incretin effect — GIP and GLP-1 amplify secretion in anticipation of the absorbed load, and nothing in the intravenous route triggers them",
      "significance": "key"
    },
    {
      "sign": "A patient in diabetic ketoacidosis with a glucose of 30 mmol/L who is fully alert and orientated",
      "mechanism": "Cerebral uptake runs on GLUT1 and GLUT3 and is independent of insulin, so insulin deficiency never starves the brain; obtundation in ketoacidosis tracks osmolality and acidosis, not glucose entry",
      "significance": "key"
    },
    {
      "sign": "A long-standing type 1 diabetic who becomes confused at 2.5 mmol/L with no preceding tremor, sweating or palpitations",
      "mechanism": "The glucagon response to hypoglycaemia is lost early, recurrent hypoglycaemia then blunts adrenaline and lowers the symptom threshold below the cognitive one — hypoglycaemia unawareness",
      "significance": "key"
    },
    {
      "sign": "Hypoglycaemia one to three hours after eating in a patient two years after gastric bypass, with an exaggerated GLP-1 response and inappropriately high insulin",
      "mechanism": "Rapid delivery of nutrient to the distal small bowel over-stimulates L cells, so the feedforward signal massively overshoots the glucose actually absorbed",
      "significance": "key"
    },
    {
      "sign": "After a protein-only meal, both plasma insulin and plasma glucagon rise while glucose stays flat",
      "mechanism": "Amino acids stimulate both cells; the matched glucagon rise keeps hepatic output equal to the new disposal so the ratio, and therefore glycaemia, is unchanged",
      "significance": "supportive"
    },
    {
      "sign": "An obese patient with a normal fasting glucose whose two-hour post-load value is 9.5 mmol/L",
      "mechanism": "Muscle GLUT4 handles the bulk of a meal load, so a peripheral trafficking defect surfaces postprandially years before hepatic insulin resistance lifts the fasting value",
      "significance": "supportive"
    }
  ],
  "investigations": [
    {
      "clue": "The variable the hepatocyte actually responds to",
      "meaning": "The portal insulin-to-glucagon ratio, not either concentration — which is why the same insulin level means storage in one state and release in another"
    },
    {
      "clue": "Why portal insulin is two to three times peripheral insulin",
      "meaning": "About half is extracted by the liver on first pass, while glucagon and C-peptide are not — the reason the liver is the most insulin-sensitive organ by position alone"
    },
    {
      "clue": "The one transporter that requires insulin, and the tissues that ignore it",
      "meaning": "GLUT4 in muscle and adipose; brain, liver, red cells and epithelia use GLUT1, GLUT2, GLUT3 and SGLT independently of insulin"
    },
    {
      "clue": "The experiment that isolates the incretin effect",
      "meaning": "Matched oral and intravenous glucose loads producing identical glycaemia — the surplus insulin on the oral arm is the gut contribution, 50 to 70 per cent of the meal response"
    },
    {
      "clue": "The glucose thresholds at which each defence engages",
      "meaning": "Insulin withdrawal near 4.5, glucagon and adrenaline near 3.8, symptoms near 3.0, cognitive failure near 2.8 mmol/L — a fixed order that disease unpicks from the top"
    },
    {
      "clue": "The insulin action surrendered last as insulin falls",
      "meaning": "Suppression of lipolysis — which is why residual insulin protects against ketosis long after it has stopped controlling glucose"
    }
  ],
  "treatment": [
    {
      "logic": "Why it matters",
      "detail": "The receptor biochemistry and the secretory machinery are already covered in [[hen1-insulin-synthesis-secretion]]; what belongs here is the **control architecture**. One idea carries the chapter: the body has a single fuel axis with two opposing hormones on it, and every metabolic state — fed, fasted, starving, exercising, ketoacidotic — is a **position on that axis** rather than a separate topic. Two asymmetries then make the physiology derivable instead of memorable. **Tissue asymmetry**: only muscle and fat gate glucose on insulin, so insulin deficiency spares the brain and hypoglycaemia destroys it. **Sensitivity asymmetry**: antilipolysis is the most sensitive insulin action, so it is the last one lost, which is what decides whether a decompensating diabetic ketoacidoses or goes hyperosmolar."
    },
    {
      "logic": "Where it is examined",
      "detail": "Three places, reliably. **The matched oral-versus-intravenous glucose experiment**, where the required answer is the incretin effect and the required qualifier is that it is glucose-dependent and therefore cannot itself cause hypoglycaemia. **The consciousness question in ketoacidosis** — why a patient with a glucose of 30 is awake — where the answer is insulin-independent cerebral uptake and the distractor is cerebral glucose starvation. And **the counter-regulatory hierarchy**, usually as a type 1 diabetic who has lost the glucagon limb, where the examiner wants the order of defences rather than a list of hormones. The counter-regulatory half of the axis, with the hepatic enzymes it switches, is worked through in [[hen1-glucagon-fasting-metabolism]]."
    }
  ],
  "mnemonics": [
    {
      "hook": "Ratio, not level",
      "expansion": [
        "The liver reads insulin divided by glucagon, never either one alone",
        "Protein meal: both rise, ratio flat, glucose flat",
        "Carbohydrate meal: insulin up and glucagon actively suppressed, ratio high, storage",
        "Type 1 ketoacidosis: insulin near zero and glucagon unopposed, ratio at the floor, maximal release"
      ]
    },
    {
      "hook": "GLUT4 needs an invitation; the brain walks in",
      "expansion": [
        "Muscle and fat use GLUT4 and cannot take up glucose without insulin",
        "Brain, liver and red cells use GLUT1, GLUT2 and GLUT3 and need no permission",
        "Brain glucose transport is largely insulin independent, but ketoacidosis can still impair consciousness through dehydration, hyperosmolality and other disturbances",
        "And hypoglycaemia destroys it in minutes, because uptake follows concentration and there is no glycogen store"
      ]
    }
  ],
  "traps": [
    {
      "questionCategory": "Whether the brain needs insulin to take up glucose",
      "wrongInstinct": "Cerebral glucose uptake falls in insulin deficiency, so the coma of diabetic ketoacidosis is cerebral glucose starvation",
      "rightAnswer": "Cerebral uptake is insulin-independent; reduced consciousness in ketoacidosis tracks hyperosmolality, acidosis and hypoperfusion",
      "why": "GLUT1 and GLUT3 are constitutive and near-saturated at normal glycaemia — which is the same asymmetry that makes the brain catastrophically vulnerable to hypoglycaemia instead."
    },
    {
      "questionCategory": "What the incretin effect actually is",
      "wrongInstinct": "GLP-1 and GIP lower glucose by acting directly on liver and muscle, so incretin physiology should cause hypoglycaemia",
      "rightAnswer": "They amplify glucose-stimulated insulin secretion from the beta cell, and only while glucose is elevated",
      "why": "The amplification is glucose-dependent, so it self-cancels as glucose normalises — the exception that proves the rule is post-bypass hypoglycaemia, where anatomy has broken the feedforward calibration."
    }
  ],
  "quiz": [
    {
      "id": "q1",
      "stem": "A healthy volunteer takes 75 g of glucose orally. On another day the same volunteer receives an intravenous glucose infusion titrated so that the plasma glucose curve is superimposable on the oral study. Insulin secretion, estimated from C-peptide, on the intravenous day is less than half that on the oral day. The best explanation is:",
      "options": [
        {
          "id": "a",
          "text": "Hepatic first-pass extraction of insulin is greater when glucose is delivered intravenously"
        },
        {
          "id": "b",
          "text": "Nutrient contact with the intestinal mucosa releases GIP and GLP-1, which amplify glucose-stimulated insulin secretion"
        },
        {
          "id": "c",
          "text": "Portal glucose sensing by hepatic afferents directly stimulates the beta cell through a vagal reflex, and this is absent intravenously"
        },
        {
          "id": "d",
          "text": "Intravenous glucose suppresses glucagon more completely, reducing the alpha-cell drive to insulin secretion"
        }
      ],
      "answerId": "b",
      "explanation": "Matching the glucose curves removes glucose itself as the variable, so any residual difference in insulin must come from a signal generated by the oral route. That signal is the incretin axis: K cells and L cells release GIP and GLP-1 on nutrient contact and these amplify secretion from an already glucose-stimulated beta cell, accounting for 50 to 70 per cent of the meal insulin response. The amplification is glucose-dependent, which is why it pre-empts the excursion with a much lower tendency to drive hypoglycaemia when acting alone. A neural portal-sensing limb exists but is minor, and measurements of insulin secretion, rather than peripheral insulin concentration alone, help account for hepatic extraction.",
      "tests": "mechanism"
    },
    {
      "id": "q2",
      "stem": "A healthy subject eats a meal of pure lean protein. Over the next 90 minutes plasma insulin rises, plasma glucagon also rises, and plasma glucose remains unchanged. The physiological purpose of the glucagon rise is best described as:",
      "options": [
        {
          "id": "a",
          "text": "To mobilise fatty acids so that amino acids are spared from oxidation"
        },
        {
          "id": "b",
          "text": "To stimulate further insulin release from neighbouring beta cells through the intra-islet circulation"
        },
        {
          "id": "c",
          "text": "To hold hepatic glucose output equal to the insulin-driven disposal, preventing hypoglycaemia in the absence of dietary carbohydrate"
        },
        {
          "id": "d",
          "text": "To accelerate hepatic deamination so that the amino acid load can be converted to urea"
        }
      ],
      "answerId": "c",
      "explanation": "Amino acids such as arginine stimulate both insulin and glucagon secretion. The insulin is needed to drive amino acids into muscle for protein synthesis, but insulin also drives glucose into muscle, and no carbohydrate has been eaten to replace it. Simultaneous glucagon release keeps hepatic glucose output matched to the increased disposal, so both hormones rise while the ratio, and therefore glycaemia, is essentially unchanged. This is the clearest demonstration that fuel direction is set by the ratio rather than by either hormone level, and it contrasts directly with a carbohydrate meal, in which glucagon is actively suppressed.",
      "tests": "mechanism"
    },
    {
      "id": "q3",
      "stem": "A 34-year-old with type 1 diabetes of 19 years duration is brought in confused, with a capillary glucose of 2.3 mmol/L. She reports that for the past year she has had no tremor, sweating or palpitations before such episodes. The primary defect underlying her loss of warning symptoms is:",
      "options": [
        {
          "id": "a",
          "text": "Failure of insulin secretion to fall, since exogenous insulin cannot be withdrawn once injected"
        },
        {
          "id": "b",
          "text": "Loss of the glucagon response to hypoglycaemia, compounded by a blunted adrenaline response after recurrent episodes"
        },
        {
          "id": "c",
          "text": "Deficient cortisol and growth hormone secretion from chronic hypothalamic-pituitary suppression"
        },
        {
          "id": "d",
          "text": "Autonomic neuropathy destroying the efferent sympathetic supply to sweat glands and heart"
        }
      ],
      "answerId": "b",
      "explanation": "The defences engage in a fixed order, and disease unpicks them from the top. The first line, withdrawal of endogenous insulin, is indeed unavailable once insulin is injected, but that alone does not abolish warning symptoms. The decisive lesion is loss of the glucagon response to hypoglycaemia, which occurs within a few years of type 1 diabetes while the glucagon response to amino acids is preserved, leaving adrenaline as the sole remaining defence. Recurrent hypoglycaemia then blunts the adrenaline response and shifts the symptom threshold below the threshold for cognitive impairment, so confusion now arrives before any warning. Cortisol and growth hormone act over hours and are irrelevant to acute warning, and classical autonomic neuropathy is neither necessary nor sufficient for unawareness.",
      "tests": "disease"
    }
  ]
};

export default ghpInsulinGlucagonFuelSwitching;
