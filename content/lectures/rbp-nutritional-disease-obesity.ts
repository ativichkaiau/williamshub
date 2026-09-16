import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpNutritionalDiseaseObesity: Lecture = {
  "id": "rbp-nutritional-disease-obesity",
  "title": "Nutritional Deficiency, Excess & Obesity",
  "system": "pathology",
  "source": "Ch 7 — Environmental and Nutritional Diseases",
  "updated": "2026-09-16",
  "tags": [
    {
      "kind": "system",
      "label": "Pathology"
    },
    {
      "kind": "lecture",
      "label": "Ch 7 Environmental and Nutritional Diseases"
    },
    {
      "kind": "mechanism",
      "label": "Deficiency patterns, refeeding & adipose biology"
    }
  ],
  "highYield": [
    "**Malnutrition can reflect low intake, malabsorption, excess loss or increased requirements.** Nutrient deficits often coexist and illness can both cause and worsen them. Weight alone misses some important deficiencies and can be distorted by oedema.",
    "**Severe wasting and nutritional oedema are different clinical patterns.** Marasmus describes marked wasting of muscle and fat; kwashiorkor describes oedematous malnutrition, often with skin, hair and hepatic changes. A simple isolated-protein-deficiency explanation is incomplete: infection, metabolism and other factors contribute. Use age-appropriate assessment rather than one historical percentage-of-expected-weight cutoff.",
    "**Vitamin deficiency follows the biological role.** Vitamin A affects vision and epithelial differentiation; vitamin D affects mineral homeostasis; vitamin K supports clotting-factor modification. Thiamine supports energy metabolism, folate and B12 support DNA synthesis, and vitamin C supports collagen hydroxylation. Excess supplementation can also cause harm; water solubility does not guarantee safety.",
    "**Refeeding can shift electrolytes and reveal thiamine deficiency.** Increased insulin after carbohydrate delivery drives phosphate, potassium and magnesium into cells. In a depleted patient, hypophosphataemia can impair cellular energy handling, including respiratory and cardiac function; fluid balance also changes.",
    "**Adipose tissue is an endocrine and immune-active organ.** Visceral fat accumulation, insulin resistance, inflammatory signals and altered adipokines contribute to metabolic disease. Leptin signals energy stores, but common obesity usually involves resistance rather than absent leptin. BMI is a screening measure with population and individual limitations. Adipose aromatase can increase postmenopausal oestrogen exposure. Connect to [[rbp-environmental-toxic-injury]]."
  ],
  "mechanism": {
    "title": "Why refeeding can become hazardous",
    "steps": [
      {
        "id": "s1",
        "label": "Prolonged undernutrition depletes reserves",
        "detail": "Serum concentrations can initially conceal low total-body electrolyte stores.",
        "emphasis": "key"
      },
      {
        "id": "s2",
        "label": "Carbohydrate intake increases insulin",
        "detail": "Cells switch toward synthesis and carbohydrate metabolism.",
        "emphasis": "normal"
      },
      {
        "id": "s3",
        "label": "Electrolytes move into cells",
        "detail": "Phosphate, potassium and magnesium concentrations may fall.",
        "emphasis": "normal"
      },
      {
        "id": "s4",
        "label": "Energy and organ function are affected",
        "detail": "Phosphate depletion and thiamine deficiency can compromise metabolism.",
        "emphasis": "normal"
      },
      {
        "id": "s5",
        "label": "Fluid shifts add stress",
        "detail": "Sodium and water retention can further strain the circulation.",
        "emphasis": "normal"
      }
    ]
  },
  "examFindings": [
    {
      "sign": "Severe wasting without oedema",
      "mechanism": "A marasmic pattern; assess causes and coexisting micronutrient deficits.",
      "significance": "key"
    },
    {
      "sign": "Bilateral pitting oedema in an undernourished child",
      "mechanism": "Raises nutritional oedema, but renal, hepatic and cardiac causes also require consideration.",
      "significance": "key"
    },
    {
      "sign": "Bleeding gums and impaired wound healing",
      "mechanism": "Vitamin C deficiency weakens connective tissue through impaired collagen processing.",
      "significance": "key"
    }
  ],
  "investigations": [
    {
      "clue": "Albumin concentration",
      "meaning": "Influenced by inflammation, losses, synthesis and fluid status; not a standalone measure of nutritional intake."
    },
    {
      "clue": "Electrolytes during refeeding",
      "meaning": "Phosphate, potassium and magnesium can fall as feeding proceeds, even if an initial sample is unremarkable."
    },
    {
      "clue": "Body size and metabolic assessment",
      "meaning": "Combine anthropometry with clinical and metabolic findings rather than equating BMI with an individual’s health status."
    }
  ],
  "treatment": [
    {
      "logic": "Correct the mechanism of deficiency",
      "detail": "Replacing a nutrient without addressing malabsorption, losses or insufficient intake may not sustain recovery."
    },
    {
      "logic": "Support restoration of nutrition safely",
      "detail": "Severe depletion requires attention to thiamine, electrolytes and fluid changes during refeeding. The mechanism explains the need for monitored care."
    }
  ],
  "mnemonics": [
    {
      "hook": "A sees; C supports; D mineralises; K clots",
      "expansion": [
        "A: vision and epithelial function.",
        "C: collagen hydroxylation.",
        "D: calcium and phosphate balance.",
        "K: modification of coagulation proteins."
      ]
    }
  ],
  "traps": [
    {
      "questionCategory": "A low albumin",
      "wrongInstinct": "It proves isolated dietary protein deficiency.",
      "rightAnswer": "Albumin has multiple determinants, including inflammation and loss.",
      "why": "The same laboratory finding can arise through different mechanisms."
    },
    {
      "questionCategory": "Water-soluble vitamins",
      "wrongInstinct": "Any dose is harmless.",
      "rightAnswer": "Some cause toxicity when taken in excess.",
      "why": "Solubility affects handling but is not a blanket safety guarantee."
    }
  ],
  "quiz": [
    {
      "id": "q1",
      "stem": "A severely undernourished patient develops weakness and arrhythmia after feeding, with a marked phosphate fall. Which mechanism explains this?",
      "options": [
        {
          "id": "a",
          "text": "Insulin-driven intracellular uptake during refeeding"
        },
        {
          "id": "b",
          "text": "Abrupt loss of every phosphate transporter"
        },
        {
          "id": "c",
          "text": "Immediate disappearance of all erythrocytes"
        },
        {
          "id": "d",
          "text": "Increased phosphate production by the kidney"
        }
      ],
      "answerId": "a",
      "explanation": "Refeeding stimulates insulin and intracellular anabolic activity, exposing depleted phosphate reserves. Other electrolyte and thiamine abnormalities can coexist.",
      "tests": "mechanism"
    },
    {
      "id": "q2",
      "stem": "Which deficiency directly impairs collagen hydroxylation and can cause gingival bleeding?",
      "options": [
        {
          "id": "a",
          "text": "Vitamin A"
        },
        {
          "id": "b",
          "text": "Vitamin C"
        },
        {
          "id": "c",
          "text": "Vitamin K"
        },
        {
          "id": "d",
          "text": "Vitamin B12"
        }
      ],
      "answerId": "b",
      "explanation": "Vitamin C supports hydroxylation of collagen precursors. Deficiency weakens connective tissue and impairs wound repair.",
      "tests": "mechanism"
    },
    {
      "id": "q3",
      "stem": "Why can excess adiposity increase oestrogen exposure after menopause?",
      "options": [
        {
          "id": "a",
          "text": "Adipose tissue cannot metabolise steroids"
        },
        {
          "id": "b",
          "text": "The pancreas produces ovarian follicles"
        },
        {
          "id": "c",
          "text": "Aromatase in adipose tissue converts androgens to oestrogens"
        },
        {
          "id": "d",
          "text": "Every person with obesity has an ovarian tumour"
        }
      ],
      "answerId": "c",
      "explanation": "Adipose aromatase contributes to peripheral oestrogen production, which can influence hormone-sensitive tissues.",
      "tests": "mechanism"
    }
  ]
};

export default rbpNutritionalDiseaseObesity;
