import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpAccumulationsCalcificationAgeing: Lecture = {
  "id": "rbp-accumulations-calcification-ageing",
  "title": "Cellular Accumulations, Calcification & Ageing",
  "system": "pathology",
  "source": "Ch 1 — Cell Injury, Cell Death, and Adaptations",
  "updated": "2026-09-16",
  "tags": [
    {
      "kind": "system",
      "label": "Pathology"
    },
    {
      "kind": "lecture",
      "label": "Ch 1 Cell Injury, Cell Death, and Adaptations"
    },
    {
      "kind": "mechanism",
      "label": "Stored material, calcium deposition & senescence"
    }
  ],
  "highYield": [
    "**An accumulation can arise from excess supply, impaired processing or failed clearance.** The stored material may be a normal substance present in excess, an abnormal endogenous product or an exogenous material that the cell cannot degrade. Identify both the material and the reason it accumulated.",
    "**Steatosis is intracellular triglyceride accumulation.** It is common in liver and can reflect altered lipid delivery, synthesis, oxidation or export. Cholesterol-rich macrophages occur in atherosclerotic lesions and xanthomas. Protein droplets, misfolded proteins and excess glycogen represent different mechanisms rather than a single storage disease.",
    "**Pigments have different sources and implications.** Carbon is exogenous; lipofuscin is a residual pigment associated with wear and prior oxidative injury. Hemosiderin stores iron and can accumulate locally after bleeding or systemically with iron overload. Bilirubin is a haem breakdown product that is not identified by the iron stain used for hemosiderin.",
    "**Dystrophic calcification occurs in injured or dead tissue despite generally normal systemic calcium balance.** Examples include damaged valves and necrotic foci. Metastatic calcification reflects disturbed calcium/phosphate balance and can affect otherwise viable tissues. The word metastatic here does not mean tumour spread; kidney failure can contribute through disordered mineral metabolism.",
    "**Cellular ageing has several interacting mechanisms.** Accumulated DNA damage, telomere-associated replicative arrest, altered protein homeostasis, mitochondrial dysfunction and changed nutrient signalling can reduce function and regenerative capacity. Senescence is stable cell-cycle arrest, not synonymous with apoptosis. No single tissue pigment or telomere measurement completely describes organismal ageing. Link to [[rbp-oxidative-stress-protein-damage]]."
  ],
  "mechanism": {
    "title": "How intracellular material accumulates",
    "steps": [
      {
        "id": "s1",
        "label": "A substance enters or is produced",
        "detail": "Consider a normal metabolite, abnormal protein or exogenous particle.",
        "emphasis": "key"
      },
      {
        "id": "s2",
        "label": "Processing or export is insufficient",
        "detail": "An enzyme defect, excess delivery or transport problem may be responsible.",
        "emphasis": "normal"
      },
      {
        "id": "s3",
        "label": "Material persists inside cells",
        "detail": "Location and staining help identify its nature.",
        "emphasis": "normal"
      },
      {
        "id": "s4",
        "label": "Cell function may be affected",
        "detail": "Some deposits are largely markers; others cause organelle dysfunction or toxicity.",
        "emphasis": "normal"
      },
      {
        "id": "s5",
        "label": "Outcome depends on reversibility",
        "detail": "Removing the cause may clear some deposits, while indigestible material or longstanding damage can persist.",
        "emphasis": "normal"
      }
    ]
  },
  "examFindings": [
    {
      "sign": "Gritty deposits in a damaged aortic valve with normal serum calcium",
      "mechanism": "A typical setting for dystrophic calcification.",
      "significance": "key"
    },
    {
      "sign": "Golden-brown macrophage pigment after local haemorrhage",
      "mechanism": "Hemosiderin can follow uptake and breakdown of erythrocytes.",
      "significance": "key"
    },
    {
      "sign": "Fine brown perinuclear pigment in ageing cardiomyocytes",
      "mechanism": "Lipofuscin is a marker of cumulative cellular processing and injury, not proof of iron overload.",
      "significance": "key"
    }
  ],
  "investigations": [
    {
      "clue": "Prussian blue stain",
      "meaning": "Highlights ferric iron in hemosiderin; it does not identify all brown pigments."
    },
    {
      "clue": "Calcium and phosphate with tissue context",
      "meaning": "Distinguish systemic mineral imbalance from deposition predominantly in injured tissue."
    },
    {
      "clue": "Fat, protein and glycogen stains",
      "meaning": "Use appropriate tissue preparation and methods; routine appearance alone may not establish the stored substance."
    }
  ],
  "treatment": [
    {
      "logic": "Classify before inferring the cause",
      "detail": "Brown pigment, a clear vacuole or a calcified focus each has a differential. Distribution and clinical chemistry narrow it."
    },
    {
      "logic": "Separate a marker from an injury driver",
      "detail": "Lipofuscin can accompany ageing without being the main cause of dysfunction. Iron overload can directly contribute to oxidative damage."
    }
  ],
  "mnemonics": [
    {
      "hook": "Dystrophic = damaged; metastatic = mineral balance",
      "expansion": [
        "Dystrophic: deposition in damaged tissue.",
        "Metastatic: disturbed calcium/phosphate balance.",
        "Neither label is a synonym for bone formation."
      ]
    }
  ],
  "traps": [
    {
      "questionCategory": "Calcification",
      "wrongInstinct": "Every tissue calcium deposit requires hypercalcaemia.",
      "rightAnswer": "Dystrophic calcification can occur with normal serum calcium.",
      "why": "Local injury promotes deposition independently of systemic calcium elevation."
    },
    {
      "questionCategory": "Ageing and senescence",
      "wrongInstinct": "A senescent cell must already be dead.",
      "rightAnswer": "Senescent cells remain viable while stably exiting the cell cycle.",
      "why": "Arrest and death are distinct outcomes."
    }
  ],
  "quiz": [
    {
      "id": "q1",
      "stem": "An old tuberculous lesion calcifies while serum calcium is normal. Which process is most likely?",
      "options": [
        {
          "id": "a",
          "text": "Metastatic carcinoma"
        },
        {
          "id": "b",
          "text": "Dystrophic calcification"
        },
        {
          "id": "c",
          "text": "Normal skeletal ossification"
        },
        {
          "id": "d",
          "text": "Hyperplasia"
        }
      ],
      "answerId": "b",
      "explanation": "Calcium deposition in necrotic tissue with normal systemic calcium balance is dystrophic calcification.",
      "tests": "mechanism"
    },
    {
      "id": "q2",
      "stem": "Brown pigment in macrophages stains with Prussian blue. What does it contain?",
      "options": [
        {
          "id": "a",
          "text": "Bilirubin alone"
        },
        {
          "id": "b",
          "text": "Carbon"
        },
        {
          "id": "c",
          "text": "Ferric iron in hemosiderin"
        },
        {
          "id": "d",
          "text": "Only triglyceride"
        }
      ],
      "answerId": "c",
      "explanation": "Prussian blue detects ferric iron, supporting hemosiderin rather than a generic diagnosis based on brown colour.",
      "tests": "investigation"
    },
    {
      "id": "q3",
      "stem": "A viable cell has entered stable arrest after telomere-associated DNA damage signalling. Which term applies?",
      "options": [
        {
          "id": "a",
          "text": "Necrosis"
        },
        {
          "id": "b",
          "text": "Steatosis"
        },
        {
          "id": "c",
          "text": "Hypertrophy"
        },
        {
          "id": "d",
          "text": "Cellular senescence"
        }
      ],
      "answerId": "d",
      "explanation": "Senescence is stable cell-cycle arrest in a living cell. It differs from apoptotic or necrotic death.",
      "tests": "mechanism"
    }
  ]
};

export default rbpAccumulationsCalcificationAgeing;
