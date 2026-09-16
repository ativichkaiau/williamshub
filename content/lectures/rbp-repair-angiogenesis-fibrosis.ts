import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpRepairAngiogenesisFibrosis: Lecture = {
  "id": "rbp-repair-angiogenesis-fibrosis",
  "title": "Regeneration, Angiogenesis & Fibrosis",
  "system": "pathology",
  "source": "Ch 2 — Inflammation and Repair",
  "updated": "2026-09-16",
  "tags": [
    {
      "kind": "system",
      "label": "Pathology"
    },
    {
      "kind": "lecture",
      "label": "Ch 2 Inflammation and Repair"
    },
    {
      "kind": "mechanism",
      "label": "Matrix, growth factors & wound strength"
    }
  ],
  "highYield": [
    "**Tissue restoration requires both cells and a usable scaffold.** Labile tissues continually renew; stable tissues can re-enter the cell cycle; adult cardiomyocytes and many neurons have limited replacement capacity. Stem cells and surviving differentiated cells contribute in tissue-specific ways. Severe matrix damage favours scar even when some cells can proliferate.",
    "**Angiogenesis supplies the repair bed.** VEGF promotes endothelial growth and permeability; migration and proliferation form new channels. Pericyte recruitment and matrix deposition help stabilise them. Early granulation tissue is vascular and fragile, explaining its red appearance and tendency to bleed.",
    "**Fibroblasts deposit extracellular matrix in response to growth factors.** TGF-beta is a major driver of collagen accumulation through increased synthesis and reduced degradation. PDGF and other mediators support recruitment and proliferation. Matrix also provides signals through receptors such as integrins rather than serving only as inert support.",
    "**Remodelling changes quality as well as quantity.** Metalloproteinases and their inhibitors regulate matrix turnover; collagen organisation and cross-linking improve strength. Type III-rich early matrix is remodelled toward a stronger type I-rich scar. Mature scar remains structurally and functionally different from uninjured tissue.",
    "**Healing by primary and secondary intention differ in the size of the defect.** Closely apposed clean wound edges require less granulation tissue. Larger tissue losses require more inflammation, matrix deposition and myofibroblast-mediated contraction. Infection, poor blood supply and mechanical stress can delay either pattern.",
    "**Persistent repair can become pathological fibrosis.** Recurrent epithelial or endothelial injury, sustained macrophage signals and fibroblast activation can progressively replace functional parenchyma. Excess repair also produces hypertrophic scars, keloids and contractures. See [[rbp-chronic-inflammation-repair]] for the continuing inflammatory stimulus."
  ],
  "mechanism": {
    "title": "A vascular repair bed becomes a scar",
    "steps": [
      {
        "id": "s1",
        "label": "Macrophages and injured tissues release signals",
        "detail": "Growth factors recruit repair cells.",
        "emphasis": "key"
      },
      {
        "id": "s2",
        "label": "New capillaries grow",
        "detail": "Endothelial migration and proliferation establish the granulation-tissue circulation.",
        "emphasis": "normal"
      },
      {
        "id": "s3",
        "label": "Fibroblasts enter and make matrix",
        "detail": "Collagen and other extracellular components fill the defect.",
        "emphasis": "normal"
      },
      {
        "id": "s4",
        "label": "The wound contracts and remodels",
        "detail": "Myofibroblasts reduce wound area while matrix is reorganised.",
        "emphasis": "normal"
      },
      {
        "id": "s5",
        "label": "A relatively avascular scar matures",
        "detail": "Strength rises, but lost architecture and specialised functions may not be restored.",
        "emphasis": "normal"
      }
    ]
  },
  "examFindings": [
    {
      "sign": "Soft red granular tissue in a healing defect",
      "mechanism": "New vessels, fibroblasts and loose matrix form granulation tissue.",
      "significance": "key"
    },
    {
      "sign": "A scar that shortens across a joint",
      "mechanism": "Excess contraction can limit movement; it is different from simple collagen thickening.",
      "significance": "key"
    },
    {
      "sign": "Fibrous septa replacing functional parenchyma",
      "mechanism": "Suggest sustained matrix deposition after repeated or unresolved injury.",
      "significance": "key"
    }
  ],
  "investigations": [
    {
      "clue": "Preserved basement membrane after epithelial injury",
      "meaning": "Provides a framework that can favour orderly regeneration if viable cells remain."
    },
    {
      "clue": "Wound tensile strength",
      "meaning": "Improves over weeks to months; surface closure alone is not evidence of mature strength."
    },
    {
      "clue": "Collagen synthesis and degradation",
      "meaning": "Net accumulation reflects both sides of matrix turnover, not fibroblast number alone."
    }
  ],
  "treatment": [
    {
      "logic": "Healing depends on perfusion and infection control",
      "detail": "Repair needs oxygen, nutrients and removal of the continuing injurious stimulus."
    },
    {
      "logic": "Scar is an effective but incomplete solution",
      "detail": "It restores continuity when regeneration is limited, while sometimes reducing compliance or organ function."
    }
  ],
  "mnemonics": [
    {
      "hook": "Vessels → matrix → remodelling",
      "expansion": [
        "VEGF supports vessel growth.",
        "Fibroblasts deposit matrix under growth-factor control.",
        "Turnover and cross-linking shape the mature scar."
      ]
    }
  ],
  "traps": [
    {
      "questionCategory": "A closed wound",
      "wrongInstinct": "Closed skin has normal tensile strength.",
      "rightAnswer": "Early closure precedes full collagen maturation.",
      "why": "A scar gains strength gradually and usually remains weaker than uninjured skin."
    },
    {
      "questionCategory": "Fibrosis",
      "wrongInstinct": "Collagen accumulation reflects synthesis only.",
      "rightAnswer": "Increased synthesis and reduced degradation can both contribute.",
      "why": "TGF-beta and matrix-turnover regulators influence the balance."
    }
  ],
  "quiz": [
    {
      "id": "q1",
      "stem": "Which factor is particularly associated with endothelial growth during angiogenesis?",
      "options": [
        {
          "id": "a",
          "text": "VEGF"
        },
        {
          "id": "b",
          "text": "IgE"
        },
        {
          "id": "c",
          "text": "Troponin"
        },
        {
          "id": "d",
          "text": "Bilirubin"
        }
      ],
      "answerId": "a",
      "explanation": "VEGF promotes endothelial growth and vascular permeability, helping establish new vessels in repair tissue.",
      "tests": "mechanism"
    },
    {
      "id": "q2",
      "stem": "A large open wound heals with abundant granulation tissue and contraction. Which pattern is this?",
      "options": [
        {
          "id": "a",
          "text": "Primary intention with no tissue loss"
        },
        {
          "id": "b",
          "text": "Secondary intention"
        },
        {
          "id": "c",
          "text": "Carcinoma in situ"
        },
        {
          "id": "d",
          "text": "Hyperacute rejection"
        }
      ],
      "answerId": "b",
      "explanation": "Healing by secondary intention accommodates a larger tissue defect and involves more granulation tissue, scarring and contraction.",
      "tests": "exam"
    },
    {
      "id": "q3",
      "stem": "Which effect of TGF-beta most directly favours fibrosis?",
      "options": [
        {
          "id": "a",
          "text": "Complete inhibition of collagen production"
        },
        {
          "id": "b",
          "text": "Elimination of all fibroblasts"
        },
        {
          "id": "c",
          "text": "Increased matrix synthesis with reduced breakdown"
        },
        {
          "id": "d",
          "text": "Conversion of collagen into erythrocytes"
        }
      ],
      "answerId": "c",
      "explanation": "TGF-beta promotes matrix accumulation through fibroblast activity and regulation of matrix degradation.",
      "tests": "mechanism"
    }
  ]
};

export default rbpRepairAngiogenesisFibrosis;
