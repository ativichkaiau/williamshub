import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpInflammatoryPatternsSystemicResponse: Lecture = {
  "id": "rbp-inflammatory-patterns-systemic-response",
  "title": "Inflammatory Patterns & Systemic Responses",
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
      "label": "Exudate patterns, fever & acute-phase proteins"
    }
  ],
  "highYield": [
    "**Inflammatory morphology reflects the tissue and the response.** Serous inflammation produces relatively cell-poor fluid, as in a blister. Fibrinous inflammation deposits fibrin after substantial permeability changes. Suppuration contains neutrophils and necrotic debris; an abscess is a localised collection. An ulcer is a surface defect caused by loss of inflamed necrotic tissue.",
    "**Fibrin can resolve or organise.** Fibrinolysis and phagocytosis can clear an exudate if injury subsides and tissue architecture survives. Persistent fibrin can serve as a scaffold for fibroblast ingrowth and scar formation, creating adhesions or constriction in some serosal spaces.",
    "**The predominant leukocyte is a clue with exceptions.** Neutrophils often dominate early acute responses; monocytes commonly become more prominent later. Viral infections may favour lymphocytes, while eosinophils accompany some allergic and parasitic responses. Organism, tissue and immune status can override a simple timetable.",
    "**Fever involves a regulated change in temperature set point.** Microbial products and inflammatory cytokines promote prostaglandin synthesis in pathways affecting the hypothalamus. PGE2 raises the defended temperature. Fever differs from unregulated hyperthermia, and antipyretic response does not identify the inciting disease.",
    "**The liver contributes acute-phase proteins.** IL-6 is an important stimulus for CRP, serum amyloid A, fibrinogen and hepcidin-related responses. Fibrinogen promotes red-cell aggregation and can raise ESR. Hepcidin reduces iron availability by limiting ferroportin-mediated export, contributing to anaemia of inflammation. These tests reflect processes rather than proving a specific infection.",
    "**Systemic inflammation can be protective or harmful.** Leukocytosis, fever and acute-phase changes may accompany local disease; severe dysregulation can impair perfusion and organs. SIRS-like findings are not specific for infection. Connect sustained injury to [[rbp-repair-angiogenesis-fibrosis]] and systemic vascular effects to [[rbp-embolism-infarction-shock]]."
  ],
  "mechanism": {
    "title": "A local inflammatory signal produces fever",
    "steps": [
      {
        "id": "s1",
        "label": "Innate receptors recognise injury or microbes",
        "detail": "Activated immune cells release inflammatory cytokines.",
        "emphasis": "key"
      },
      {
        "id": "s2",
        "label": "Cytokines signal to temperature-control pathways",
        "detail": "IL-1 and TNF contribute to prostaglandin production.",
        "emphasis": "normal"
      },
      {
        "id": "s3",
        "label": "PGE2 changes hypothalamic signalling",
        "detail": "The defended temperature rises.",
        "emphasis": "normal"
      },
      {
        "id": "s4",
        "label": "Heat conservation and production increase",
        "detail": "Chills and vasoconstriction can occur while temperature rises toward the new set point.",
        "emphasis": "normal"
      },
      {
        "id": "s5",
        "label": "The set point later falls",
        "detail": "Heat loss can increase as pyrogen signalling subsides or prostaglandin synthesis is inhibited.",
        "emphasis": "normal"
      }
    ]
  },
  "examFindings": [
    {
      "sign": "A watery blister with few inflammatory cells",
      "mechanism": "A serous pattern; the cause still depends on the setting.",
      "significance": "key"
    },
    {
      "sign": "A shaggy fibrinous coating on the pericardium",
      "mechanism": "An exudative pattern that may resolve or organise into adhesions.",
      "significance": "key"
    },
    {
      "sign": "A focal pus-filled cavity",
      "mechanism": "An abscess contains neutrophils and necrotic tissue, often with peripheral inflammation and repair.",
      "significance": "key"
    }
  ],
  "investigations": [
    {
      "clue": "CRP",
      "meaning": "An acute-phase marker whose elevation is not specific for bacterial infection."
    },
    {
      "clue": "ESR",
      "meaning": "Influenced by plasma proteins and red-cell properties; it is an indirect measure and can differ from CRP."
    },
    {
      "clue": "Anaemia with an inflammatory illness",
      "meaning": "Hepcidin-mediated iron restriction is one mechanism; iron deficiency and other causes may coexist."
    }
  ],
  "treatment": [
    {
      "logic": "Pattern guides the next diagnostic step",
      "detail": "An abscess suggests a focal destructive process, while diffuse serous or fibrinous responses prompt a different anatomical assessment."
    },
    {
      "logic": "Explain fever reduction without inferring cure",
      "detail": "Reduced prostaglandin synthesis can lower the set point while the underlying infection or inflammatory disease remains active."
    }
  ],
  "mnemonics": [
    {
      "hook": "Fluid, fibrin, pus, surface loss",
      "expansion": [
        "Serous: relatively cell-poor fluid.",
        "Fibrinous: fibrin-rich exudate.",
        "Suppurative: neutrophils and necrotic debris.",
        "Ulcerative: loss of an epithelial surface."
      ]
    }
  ],
  "traps": [
    {
      "questionCategory": "A raised inflammatory marker",
      "wrongInstinct": "An elevated CRP proves bacterial infection.",
      "rightAnswer": "CRP rises in infectious and sterile inflammatory conditions.",
      "why": "The test measures an acute-phase response rather than identifying the trigger."
    },
    {
      "questionCategory": "Fever and hyperthermia",
      "wrongInstinct": "Every high temperature is a raised hypothalamic set point.",
      "rightAnswer": "Fever is regulated; hyperthermia can arise without a set-point increase.",
      "why": "Similar temperatures can result from different mechanisms."
    }
  ],
  "quiz": [
    {
      "id": "q1",
      "stem": "A fibrinous pericardial exudate is invaded by fibroblasts and small vessels. What outcome is developing?",
      "options": [
        {
          "id": "a",
          "text": "Immediate restoration of normal tissue without repair"
        },
        {
          "id": "b",
          "text": "Organisation with potential adhesions"
        },
        {
          "id": "c",
          "text": "Metastatic calcification by definition"
        },
        {
          "id": "d",
          "text": "A primary platelet-production disorder"
        }
      ],
      "answerId": "b",
      "explanation": "Persistent fibrin can organise into connective tissue. In a serosal space, this can create adhesions rather than complete resolution.",
      "tests": "mechanism"
    },
    {
      "id": "q2",
      "stem": "Which pathway most directly contributes to the raised temperature set point in inflammatory fever?",
      "options": [
        {
          "id": "a",
          "text": "Platelet GPIb binding"
        },
        {
          "id": "b",
          "text": "Loss of every sweat gland"
        },
        {
          "id": "c",
          "text": "PGE2-mediated hypothalamic signalling"
        },
        {
          "id": "d",
          "text": "Passive deposition of collagen"
        }
      ],
      "answerId": "c",
      "explanation": "Inflammatory signals promote prostaglandin production; PGE2 alters temperature-control signalling and raises the defended temperature.",
      "tests": "mechanism"
    },
    {
      "id": "q3",
      "stem": "Inflammation raises hepcidin. Which effect contributes to reduced circulating iron availability?",
      "options": [
        {
          "id": "a",
          "text": "Increased ferroportin-mediated iron export"
        },
        {
          "id": "b",
          "text": "Reduced iron release from macrophages and intestinal cells"
        },
        {
          "id": "c",
          "text": "Conversion of haemoglobin into fibrin"
        },
        {
          "id": "d",
          "text": "Direct destruction of all marrow stem cells"
        }
      ],
      "answerId": "b",
      "explanation": "Hepcidin limits ferroportin function, reducing release of iron into plasma. This can contribute to iron-restricted erythropoiesis.",
      "tests": "mechanism"
    }
  ]
};

export default rbpInflammatoryPatternsSystemicResponse;
