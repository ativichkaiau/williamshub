import type { Lecture } from '../../lib/types';

export const ghpDiabetesPathophysiologyComplications: Lecture = {
  "id": "ghp-diabetes-pathophysiology-complications",
  "title": "Diabetes Mellitus: Pathophysiology & Complications",
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
      "kind": "disease",
      "label": "Diabetes mellitus type 1 and type 2"
    },
    {
      "kind": "mechanism",
      "label": "Effective insulin action, ketosis and hyperosmolality can overlap"
    },
    {
      "kind": "exam",
      "label": "C-peptide · microvascular vs macrovascular"
    }
  ],
  "highYield": [
    "**Insulin deficiency and insulin resistance describe mechanisms, not an infallible division between emergencies.** Type 1 diabetes usually involves autoimmune beta-cell destruction, while type 2 combines insulin resistance with progressive beta-cell dysfunction. Severe loss of effective insulin action and increased counter-regulatory signals can cause ketoacidosis. Residual insulin often limits ketosis in a hyperosmolar state, but DKA, HHS and mixed presentations can occur in either diabetes type. Link the normal pathways to [[ghp-insulin-glucagon-fuel-switching]].",
    "**Ketoacidosis connects adipose lipolysis to hepatic ketone production.** Reduced insulin action and counter-regulatory signals increase fatty-acid delivery to the liver. Hepatic oxidation and ketogenesis produce acetoacetate and beta-hydroxybutyrate; accumulation consumes bicarbonate and produces a metabolic acidosis. Respiratory compensation can cause deep, rapid breathing. The degree of hyperglycaemia does not reliably measure the severity of ketosis, and ketoacidosis can occur without a very high glucose concentration.",
    "**Hyperglycaemia also causes an osmotic water and electrolyte loss.** When filtered glucose exceeds effective tubular reabsorptive capacity, glucosuria retains water in the tubules. Polyuria promotes dehydration and electrolyte loss; reduced renal perfusion can then worsen glucose clearance. Potassium can be normal or high in plasma despite a depleted whole-body potassium store, because insulin deficiency and hypertonicity redistribute potassium while urinary losses continue. A plasma concentration and a total-body inventory are different measurements.",
    "**A hyperosmolar state can develop with little ketoacidosis.** Residual insulin often restrains lipolysis and ketogenesis more effectively than it controls glucose. Severe hyperglycaemia, water loss and impaired renal clearance can therefore progress over days. Hypertonicity and impaired perfusion can disturb consciousness. Mild ketonaemia and mixed DKA/HHS patterns occur, so normal pH in one example should not become a rule that type 2 diabetes never ketoses.",
    "**Chronic hyperglycaemia injures tissues through interacting pathways.** Protein glycation, oxidative stress, altered intracellular signalling and polyol-pathway flux contribute to microvascular and other damage. Glucose uptake that is not acutely gated by insulin helps expose some tissues to high intracellular glucose, but vascular architecture and cell-specific responses also matter. Retinopathy, kidney disease and neuropathy cannot be explained by transporter identity alone. Atherosclerotic risk also reflects blood pressure, lipids, smoking and other factors alongside glycaemia.",
    "**Insulin and C-peptide help distinguish endogenous secretion from exogenous exposure.** They are released together when proinsulin is processed, but differ in clearance. During documented hypoglycaemia, inappropriately high insulin with suppressed C-peptide supports exogenous insulin exposure when the assay detects that insulin. Endogenous secretion usually raises both; sulfonylureas can mimic an insulin-secreting tumour, so a drug screen can be important. Kidney function and assay characteristics affect interpretation, and the laboratory pattern alone does not establish intent."
  ],
  "mechanism": {
    "title": "Insulin deficiency → two independent limbs → glucose limb gives osmotic diuresis and hyperosmolality, fat limb gives ketoacidosis → residual insulin decides which limb runs",
    "steps": [
      {
        "id": "s1",
        "label": "Insulin falls and the insulin-to-glucagon ratio collapses, with glucagon left entirely unopposed at the hepatocyte",
        "emphasis": "key"
      },
      {
        "id": "s2",
        "label": "Peripheral disposal fails while hepatic glycogenolysis and gluconeogenesis run at full rate",
        "emphasis": "normal"
      },
      {
        "id": "s3",
        "label": "Glucose exceeds the renal threshold and drives an osmotic diuresis, stripping water, sodium and potassium",
        "emphasis": "key"
      },
      {
        "id": "s4",
        "label": "Volume depletion reduces renal clearance of glucose, so glycaemia and osmolality accelerate upward in a vicious circle",
        "detail": "Reduced renal perfusion limits urinary glucose clearance and can worsen hyperglycaemia",
        "emphasis": "danger"
      },
      {
        "id": "s5",
        "label": "Whether the fat limb also opens depends on one thing — is there enough residual insulin to keep hormone-sensitive lipase inhibited",
        "emphasis": "key"
      },
      {
        "id": "s6",
        "label": "If not, fatty acids flood an open CPT-1 gate, ketoacids accumulate and a high anion gap acidosis is added to the volume loss",
        "emphasis": "danger"
      }
    ],
    "branches": [
      {
        "fromId": "s5",
        "title": "Fat brake intact — the hyperosmolar route",
        "steps": [
          {
            "id": "h1",
            "label": "Residual insulin often limits lipolysis and substantial ketoacidosis; mixed DKA/HHS can occur",
            "emphasis": "key"
          },
          {
            "id": "h2",
            "label": "Without breathlessness or ketotic illness the patient presents days rather than hours later",
            "emphasis": "normal"
          },
          {
            "id": "h3",
            "label": "Glucose passes 33 mmol/L and effective osmolality passes 320 mosmol/kg, and conscious level follows osmolality",
            "emphasis": "danger"
          }
        ]
      }
    ]
  },
  "examFindings": [
    {
      "sign": "Serum potassium of 5.4 mmol/L on arrival in ketoacidosis, falling to 2.9 mmol/L three hours after insulin is started",
      "mechanism": "Insulin lack and acidosis shift potassium out of cells and mask a large total-body deficit created by the osmotic diuresis; insulin drives it straight back in",
      "significance": "key"
    },
    {
      "sign": "Glucose 41 mmol/L, pH 7.38, bicarbonate 22, ketones minimal, and a drowsy patient with 10 per cent volume loss",
      "mechanism": "Residual insulin has held lipolysis in check so no acidosis develops, the illness evolves slowly and hyperosmolality rather than acidosis depresses consciousness",
      "significance": "key"
    },
    {
      "sign": "Hypoglycaemia with insulin grossly elevated and C-peptide undetectable",
      "mechanism": "Exogenous insulin contains no C-peptide, so endogenous secretion is correctly suppressed while measured insulin is high — the signature of factitious or accidental administration",
      "significance": "key"
    },
    {
      "sign": "Hypoglycaemia with both insulin and C-peptide elevated in an elderly patient on a gliclazide prescription",
      "mechanism": "Sulfonylureas close the beta-cell potassium channel and drive endogenous secretion, so both move together exactly as an insulinoma would — only the drug screen separates them",
      "significance": "key"
    },
    {
      "sign": "Retinopathy, nephropathy and a symmetrical stocking distal neuropathy advancing together in one patient, while skeletal muscle is structurally unaffected",
      "mechanism": "Insulin-independent glucose uptake contributes to intracellular glucose exposure in susceptible tissues; local vascular and cellular properties also shape injury",
      "significance": "key"
    },
    {
      "sign": "A patient whose HbA1c falls from 9.5 to 6.8 per cent, whose retinopathy stabilises within two years but who sustains a myocardial infarction five years later",
      "mechanism": "Glycaemia drives the microvascular pathways directly, whereas macrovascular disease is atherosclerosis driven by the whole metabolic syndrome and answers mainly to blood pressure and lipid control",
      "significance": "supportive"
    }
  ],
  "investigations": [
    {
      "clue": "The one variable separating ketoacidosis from a hyperosmolar state",
      "meaning": "Residual insulin action, counter-regulatory hormones and water balance influence ketosis and hyperosmolality; DKA and HHS can overlap in either diabetes type"
    },
    {
      "clue": "Why the admission potassium in ketoacidosis is reassuring and wrong",
      "meaning": "Insulin lack and acidosis have shifted potassium extracellularly while the osmotic diuresis emptied the body stores; replacement must begin before or with insulin"
    },
    {
      "clue": "What conscious level actually tracks in a hyperglycaemic emergency",
      "meaning": "Effective osmolality, not the glucose value and not the pH — which is why the hyperosmolar patient is the obtunded one despite a normal bicarbonate"
    },
    {
      "clue": "Why C-peptide answers a question insulin cannot",
      "meaning": "Secreted equimolar with insulin but not extracted by the liver and with a six-fold longer half-life, and absent from injected insulin — an amplified, stable marker of endogenous secretion"
    },
    {
      "clue": "The four intracellular pathways of hyperglycaemic tissue injury",
      "meaning": "Polyol and aldose reductase, advanced glycation end products, protein kinase C activation and hexosamine flux, all downstream of mitochondrial superoxide"
    },
    {
      "clue": "Why tight glycaemic control protects the eye far more convincingly than the heart",
      "meaning": "Microvascular disease is glucose-driven in tissues that cannot limit uptake; macrovascular disease is metabolic-syndrome atherosclerosis that answers to blood pressure and lipids"
    }
  ],
  "treatment": [
    {
      "logic": "Why it matters",
      "detail": "Diagnosis, drug classes and acute management are covered clinically elsewhere in the app; the Guyton layer is the **derivation**. Two moves do nearly all the work. First, stop treating type 1 and type 2 as two lists and treat them as **two positions on one deficiency scale** — then ketoacidosis versus hyperosmolar state is not a table to memorise but a prediction from the single most insulin-sensitive action, the restraint of lipolysis worked through in [[ghp-fat-as-fuel-ketosis]]. Second, stop treating complications as one bucket: **microvascular disease is a glucose disease of tissues that cannot refuse glucose**, macrovascular disease is *atherosclerosis wearing a diabetic coat*, and the two answer to different levers. Everything else in the chapter hangs off those two sentences."
    },
    {
      "logic": "Where it is examined",
      "detail": "Four recurring stems. **The ketoacidosis potassium**, where the normal or high admission value is the distractor and the required answer is a depleted total body store about to be unmasked by insulin. **The C-peptide triad** — low with high insulin means exogenous, high with high insulin means insulinoma or sulfonylurea, and the sulfonylurea screen is the tiebreak. **Why the hyperosmolar patient is the obtunded one**, answered by osmolality rather than by glucose or pH. And **the differential response to glycaemic control**, where the examiner wants the microvascular-versus-macrovascular split and not a recitation of trial names. The examiner will often add a fifth turn by asking why cardiovascular risk is already accumulating before any diagnostic glucose threshold has been crossed, which belongs to the resistance state rather than to the hyperglycaemia."
    }
  ],
  "mnemonics": [
    {
      "hook": "A little insulin still holds the fat brake",
      "expansion": [
        "Antilipolysis is the most sensitive insulin action, so it is the last one lost",
        "Type 1, absolute deficiency: brake released, ketoacidosis",
        "Type 2, relative deficiency: brake holding, hyperosmolar state",
        "The label on the chart is only a proxy — a septic type 2 patient with enough deficiency will ketose"
      ]
    },
    {
      "hook": "C-peptide counts your own",
      "expansion": [
        "Made equimolar with insulin, so it measures endogenous secretion",
        "Not extracted by the liver and half-life 30 minutes against 5, so it is stable and amplified",
        "Absent from injected insulin: high insulin with low C-peptide is exogenous",
        "High with high means your own beta cell was pushed — insulinoma, or a sulfonylurea pushing it"
      ]
    }
  ],
  "traps": [
    {
      "questionCategory": "What determines whether a decompensating diabetic ketoacidoses",
      "wrongInstinct": "Type 1 patients get ketoacidosis and type 2 patients get hyperosmolar states, because that is the definition of the two diseases",
      "rightAnswer": "The degree of residual insulin secretion decides it, because restraint of lipolysis is the most insulin-sensitive function of all",
      "why": "The diabetes type is only a proxy for how much insulin is left — which is why a severely stressed type 2 patient can present in frank ketoacidosis and why the question is really about sensitivity ordering."
    },
    {
      "questionCategory": "What tight glycaemic control is expected to prevent",
      "wrongInstinct": "Lowering HbA1c reduces all diabetic complications proportionally, so cardiovascular events should fall in step with retinopathy",
      "rightAnswer": "Glycaemic control acts strongly and relatively promptly on microvascular endpoints and weakly and late on macrovascular ones",
      "why": "Microvascular injury is driven by intracellular glucose in tissues that cannot regulate uptake; large-vessel disease is metabolic-syndrome atherosclerosis, so blood pressure and lipid control carry that half."
    }
  ],
  "quiz": [
    {
      "id": "q1",
      "stem": "A 62-year-old with type 2 diabetes is admitted after five days of increasing thirst and drowsiness. Glucose is 44 mmol/L, sodium 152 mmol/L, pH 7.37, bicarbonate 21 mmol/L, and blood ketones 0.4 mmol/L. The absence of significant ketosis in the face of such extreme hyperglycaemia is best explained by:",
      "options": [
        {
          "id": "a",
          "text": "Glucagon secretion is suppressed in type 2 diabetes, removing the drive to hepatic ketogenesis"
        },
        {
          "id": "b",
          "text": "Residual endogenous insulin is sufficient to inhibit hormone-sensitive lipase even though it cannot control glycaemia"
        },
        {
          "id": "c",
          "text": "Severe dehydration reduces hepatic perfusion and therefore limits ketone body production"
        },
        {
          "id": "d",
          "text": "Hyperosmolality directly inhibits carnitine palmitoyltransferase 1 at the hepatic mitochondrial membrane"
        }
      ],
      "answerId": "b",
      "explanation": "Suppression of lipolysis is the most insulin-sensitive action there is, occurring at insulin concentrations well below those required to move GLUT4 or to restrain hepatic glucose output. A failing but not destroyed beta cell therefore continues to hold hormone-sensitive lipase in check long after it has lost control of glucose, so fatty-acid delivery and ketogenesis are restrained enough to prevent substantial ketosis in this example. Glucose consequently climbs unchecked over days while pH stays normal, producing exactly this hyperosmolar picture. Glucagon is not suppressed in type 2 diabetes, and neither hepatic hypoperfusion nor osmolality is the operative brake.",
      "tests": "mechanism"
    },
    {
      "id": "q2",
      "stem": "A 44-year-old adult is investigated for recurrent symptomatic hypoglycaemia. During a supervised episode with glucose 2.1 mmol/L, plasma insulin is markedly elevated, C-peptide is undetectable, and beta-hydroxybutyrate is suppressed. A sulfonylurea screen is negative. The most likely explanation is:",
      "options": [
        {
          "id": "a",
          "text": "Insulinoma"
        },
        {
          "id": "b",
          "text": "Exogenous insulin exposure"
        },
        {
          "id": "c",
          "text": "Non-islet-cell tumour secreting incompletely processed IGF-2"
        },
        {
          "id": "d",
          "text": "Autoimmune hypoglycaemia with antibodies against endogenous insulin"
        }
      ],
      "answerId": "b",
      "explanation": "C-peptide is cleaved from proinsulin in equimolar amounts with insulin, is not extracted by the liver and has a half-life around six times longer, which makes it a stable amplified readout of endogenous secretion. Injected insulin contains no C-peptide. High measured insulin with undetectable C-peptide therefore means the insulin came from outside while the beta cell was correctly shut down by the hypoglycaemia. An insulinoma or a sulfonylurea would raise both together, and the negative drug screen separates those two from each other. An IGF-2 secreting tumour causes hypoglycaemia with insulin and C-peptide both suppressed, since the hypoglycaemia is not insulin-mediated.",
      "tests": "investigation"
    },
    {
      "id": "q3",
      "stem": "Which feature contributes to the vulnerability of retinal, renal, neural and lens tissues during chronic hyperglycaemia?",
      "options": [
        {
          "id": "a",
          "text": "Have the highest resting metabolic rates and therefore generate the most reactive oxygen species"
        },
        {
          "id": "b",
          "text": "Much of their glucose uptake is not acutely gated by insulin, allowing increased intracellular exposure when plasma glucose rises"
        },
        {
          "id": "c",
          "text": "Lack antioxidant enzymes such as superoxide dismutase and catalase"
        },
        {
          "id": "d",
          "text": "Are supplied by end-arteries with no collateral circulation, making them uniquely vulnerable to ischaemia"
        }
      ],
      "answerId": "b",
      "explanation": "Insulin-independent glucose uptake can contribute to glucose-driven oxidative, glycation and polyol-pathway stress. Transport is one factor among vascular and cell-specific influences; this does not mean skeletal muscle is completely protected from diabetes-related injury.",
      "tests": "mechanism"
    }
  ]
};

export default ghpDiabetesPathophysiologyComplications;
